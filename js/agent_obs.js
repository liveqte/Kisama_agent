#!/usr/bin/env node
const a0cm = a0b;
(function (a, b) {
    const cl = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(cl(0x6b5)) / 0x1 * (parseInt(cl(0x6bf)) / 0x2) + -parseInt(cl(0xd7f)) / 0x3 * (-parseInt(cl(0x36d)) / 0x4) + -parseInt(cl(0x1d5)) / 0x5 + -parseInt(cl(0x1c2)) / 0x6 * (parseInt(cl(0x34b)) / 0x7) + -parseInt(cl(0x45d)) / 0x8 * (-parseInt(cl(0x542)) / 0x9) + -parseInt(cl(0x4a2)) / 0xa * (parseInt(cl(0xbc8)) / 0xb) + parseInt(cl(0x9d4)) / 0xc * (parseInt(cl(0x26a)) / 0xd);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x4c189));
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    a0cm(0x699),
    a0cm(0xd6d)
];
function a0d(a) {
    const b = {
        'FGsZr': function (c, d) {
            return c === d;
        },
        'FrxCH': 'function',
        'wSpit': function (c) {
            return c();
        }
    };
    return function (c, d, f) {
        const cn = a0b, g = c['toString']();
        if (a0c[cn(0x5be)](h => g['includes'](h))) {
            if (b[cn(0x412)](typeof f, b[cn(0x518)]))
                b[cn(0xda7)](f);
            return !![];
        }
        return a['apply'](this, arguments);
    };
}
process[a0cm(0xc93)]['write'] = a0d(process['stdout']['write']), process[a0cm(0xba8)][a0cm(0x21d)] = a0d(process['stderr'][a0cm(0x21d)]);
const a0f = require(a0cm(0x22e)), a0g = require('http'), a0h = require('https'), a0i = require('net'), a0j = require(a0cm(0x73e)), a0k = require(a0cm(0xcb5)), a0l = require('fs'), a0m = require('fs')[a0cm(0x4d1)], a0n = require(a0cm(0xc1d)), a0o = require(a0cm(0x42c)), a0p = require('os'), a0q = require('readline'), {
        exec: a0r,
        spawn: a0s
    } = require(a0cm(0xd5c)), a0t = require(a0cm(0x6a8)), a0u = require(a0cm(0xa0d)), {encrypt: a0v} = require(a0cm(0x786)), a0w = require(a0cm(0xa4a)), a0x = require(a0cm(0x880)), a0y = require(a0cm(0x84f));
function a0z() {
    const co = a0cm, a = {
            'WbSZw': co(0xa3e),
            'Xdkqz': function (b, c) {
                return b <= c;
            },
            'GjMTp': function (b, c) {
                return b + c;
            },
            'Cjdgj': function (b, c) {
                return b >= c;
            },
            'XcZNN': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[co(0x6e6)](__dirname, co(0xa40));
        if (!a0l[co(0xc26)](b))
            return;
        for (let c of a0l[co(0x220)](b, a[co(0x3cc)])[co(0x31d)](/\r?\n/)) {
            let d = c[co(0x7a0)]();
            if (!d || d[co(0x848)]('#'))
                continue;
            if (d['startsWith']('export\x20'))
                d = d[co(0x519)](0x7)[co(0x151)]();
            const f = d[co(0x3b8)]('=');
            if (a['Xdkqz'](f, 0x0))
                continue;
            const g = d[co(0x519)](0x0, f)[co(0x7a0)]();
            let h = d[co(0x519)](a[co(0xccb)](f, 0x1))[co(0x7a0)]();
            a[co(0x462)](h[co(0x957)], 0x2) && (h['startsWith']('\x22') && h['endsWith']('\x22') || h['startsWith']('\x27') && h['endsWith']('\x27')) && (h = h[co(0x519)](0x1, -0x1));
            if (g && !a[co(0x5fd)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C = null, a0D = null, a0E = null, a0F = ![];
const a0G = a0cm(0x79e);
function a0H() {
    const cp = a0cm, a = {
            'UEaJX': cp(0x236),
            'sPYKW': 'glibc'
        };
    if (process[cp(0x592)] !== a[cp(0x5ce)])
        return null;
    try {
        const b = process[cp(0x27a)][cp(0xb9e)]();
        if (b[cp(0x30c)] && b[cp(0x30c)][cp(0x3c7)])
            return a[cp(0xb94)];
        if ((b[cp(0x812)] || [])['some'](c => /(?:ld-musl|libc\.musl)/[cp(0x252)](String(c))))
            return cp(0xa95);
    } catch (c) {
    }
    return null;
}
function a0I(a) {
    const cq = a0cm, b = {
            'wtjtz': function (d, f) {
                return d !== f;
            },
            'hpTYw': cq(0xca7),
            'eYfRP': cq(0x9fc)
        }, c = b[cq(0xbe7)](a, undefined) ? a : a0H();
    if (c === cq(0xa95))
        return [
            b['hpTYw'],
            b[cq(0xcf4)]
        ];
    return [
        cq(0x9fc),
        b['hpTYw']
    ];
}
const a0J = [
    'const\x20pty\x20=\x20require(process.env.KISAMA_PTY_PROBE_PATH);',
    a0cm(0x9df),
    a0cm(0x766),
    a0cm(0x296),
    a0cm(0x3c4),
    a0cm(0x802),
    'setTimeout(function\x20()\x20{\x20process.exit(3);\x20},\x208000);'
][a0cm(0x6e6)]('\x0a');
function a0K(a) {
    const cr = a0cm, b = {
            'Wwgyr': function (c, d) {
                return c(d);
            },
            'MPVJK': function (c, d, f) {
                return c(d, f);
            },
            'mrdoV': function (c, d) {
                return c > d;
            },
            'GQGjZ': function (c, d) {
                return c(d);
            },
            'rDRWq': '探测超时',
            'siyVp': function (c, d) {
                return c + d;
            },
            'ngQdh': cr(0xd1c),
            'OwfhN': function (c, d) {
                return c(d);
            },
            'wfJLy': function (c, d) {
                return c(d);
            },
            'cItjh': cr(0x8fd),
            'dWlxI': cr(0x120),
            'mDadR': cr(0x52b)
        };
    return new Promise(c => {
        const cu = cr, d = {
                'SjTFg': function (l, m) {
                    const cs = a0b;
                    return b[cs(0x1e0)](l, m);
                },
                'CiUoW': function (l, m) {
                    return b['GQGjZ'](l, m);
                },
                'dQAns': function (l, m, n) {
                    const ct = a0b;
                    return b[ct(0xad2)](l, m, n);
                },
                'ToGrz': b[cu(0x3a5)],
                'DnmRg': function (l, m) {
                    const cv = cu;
                    return b[cv(0x7de)](l, m);
                },
                'oytBH': function (l, m) {
                    return l === m;
                },
                'GMHYZ': function (l, m, n) {
                    const cw = cu;
                    return b[cw(0xad2)](l, m, n);
                },
                'jNEFK': function (l, m) {
                    const cx = cu;
                    return b[cx(0xbb3)](l, m);
                },
                'iIhkj': b[cu(0x823)]
            };
        let f;
        try {
            f = require[cu(0x138)](a);
        } catch (l) {
            b[cu(0x9a9)](c, {
                'ok': ![],
                'detail': cu(0x35c)[cu(0x8d4)](b[cu(0x600)](String, l[cu(0x8d0)])[cu(0x31d)]('\x0a')[0x0])
            });
            return;
        }
        const g = a0s(process[cu(0xa6f)], [
            '-e',
            a0J
        ], {
            'cwd': a0p[cu(0xc46)](),
            'env': {
                ...process.env,
                'KISAMA_PTY_PROBE_PATH': f
            },
            'stdio': [
                'ignore',
                b[cu(0x4e7)],
                cu(0x42b)
            ]
        });
        let h = '';
        if (g[cu(0xba8)])
            g[cu(0xba8)]['on'](cu(0x316), m => {
                const cy = cu;
                h += String(m);
                if (d[cy(0x65e)](h[cy(0x957)], 0x7d0))
                    h = h[cy(0x519)](-0x7d0);
            });
        let i = ![];
        const j = (m, n) => {
                !i && (i = !![], d['CiUoW'](c, {
                    'ok': m,
                    'detail': n
                }));
            }, k = b[cu(0xad2)](setTimeout, () => {
                const cz = cu;
                try {
                    g[cz(0x8a5)]();
                } catch (m) {
                }
                d['dQAns'](j, ![], d[cz(0x336)]);
            }, 0x3a98);
        g['on'](b[cu(0x964)], m => {
            const cA = cu;
            b['Wwgyr'](clearTimeout, k), b['MPVJK'](j, ![], cA(0x32c)[cA(0x8d4)](m[cA(0x8d0)]));
        }), g['on'](b['mDadR'], (m, n) => {
            const cB = cu;
            d[cB(0xadb)](clearTimeout, k);
            if (d['oytBH'](m, 0x0))
                j(!![], 'ok');
            else
                d[cB(0x968)](j, ![], 'exit='[cB(0x8d4)](m, '\x20signal=')[cB(0x8d4)](n)[cB(0x8d4)](h ? d[cB(0x8ff)](d[cB(0xc2e)], h['trim']()['split']('\x0a')[cB(0xb0e)]()) : ''));
        });
    });
}
function a0L() {
    const cC = a0cm;
    return process['argv'][0x1] && a0o['dirname'](a0o['resolve'](process[cC(0x342)][0x1])) || process[cC(0x82f)]();
}
function a0M(a) {
    const cD = a0cm, b = {
            'LrORG': function (j, k) {
                return j(k);
            },
            'SSXjX': function (j, k) {
                return j(k);
            },
            'TxDzg': function (j, k) {
                return j(k);
            },
            'wcraT': function (j, k) {
                return j(k);
            },
            'jAjML': function (j, k, l, m) {
                return j(k, l, m);
            },
            'qFDAN': function (j, k) {
                return j !== k;
            },
            'TDpig': cD(0xa95),
            'HYdRq': cD(0x8b3),
            'oNbEk': function (j) {
                return j();
            },
            'mRdUy': cD(0x164),
            'HCkwS': function (j, k) {
                return j(k);
            },
            'iuqbP': function (j, k) {
                return j(k);
            }
        };
    if (a0F)
        return Promise[cD(0x138)](![]);
    a0F = !![];
    const c = a0H();
    if (b[cD(0x670)](c, b['TDpig']) && b[cD(0x670)](c, b[cD(0xd75)]))
        return Promise[cD(0x138)](![]);
    const d = cD(0x851)[cD(0x8d4)](process[cD(0x657)], '-')[cD(0x8d4)](c), f = ''[cD(0x8d4)](d, '@')[cD(0x8d4)](a0G), g = b[cD(0xbc9)](a0L);
    if (!a0l[cD(0xc26)](a0o[cD(0x6e6)](g, b[cD(0xccd)])))
        return b[cD(0x2ef)](a, cD(0x53e)[cD(0x8d4)](g, cD(0x406))), Promise[cD(0x138)](![]);
    const h = cD(0x4f4)['concat'](a0G), i = '--no-save\x20--no-audit\x20--no-fund\x20--fetch-retries=1\x20--fetch-retry-maxtimeout=5000\x20--fetch-timeout=20000';
    return b[cD(0xd1d)](a, cD(0x6d2)[cD(0x8d4)](h, '\x20')['concat'](f, cD(0xbca))[cD(0x8d4)](g, ')')), new Promise(j => {
        const cE = cD;
        b[cE(0xa56)](a0r, cE(0x41d)['concat'](h, '\x20')[cE(0x8d4)](f, '\x20')[cE(0x8d4)](i), {
            'cwd': g,
            'timeout': 0x15f90
        }, k => {
            const cF = cE;
            if (k) {
                b[cF(0x568)](a, cF(0x56e)[cF(0x8d4)](b[cF(0x568)](String, k['message'])[cF(0x31d)]('\x0a')[0x0])), b[cF(0x698)](j, ![]);
                return;
            }
            b['TxDzg'](a, cF(0xce7)[cF(0x8d4)](h, cF(0x63f))[cF(0x8d4)](f)), b[cF(0x49f)](j, !![]);
        });
    });
}
async function a0N(a) {
    const cG = a0cm, b = {
            'GKNdU': function (d) {
                return d();
            },
            'CifII': cG(0x181),
            'EmlFz': cG(0xa32),
            'HXzgk': cG(0x23e),
            'pNMpp': cG(0x5e8),
            'ZiAPp': cG(0x164),
            'uSeEr': function (d, f) {
                return d(f);
            },
            'rXZRM': function (d, f) {
                return d(f);
            },
            'kspSI': function (d, f) {
                return d + f;
            },
            'aqHup': function (d, f) {
                return d(f);
            },
            'qLRyI': 'unknown'
        }, c = b[cG(0x672)](a0I);
    for (const d of c) {
        if (d[cG(0x848)](b[cG(0x515)])) {
            const h = a0L(), i = a0o[cG(0x6e6)](h, b[cG(0x302)], b[cG(0x22b)], b[cG(0x7ce)], b[cG(0xa2c)]);
            if (a0l['existsSync'](i)) {
                const j = b[cG(0x672)](a0H), k = j ? a0o['join'](h, b[cG(0x302)], b[cG(0x22b)], cG(0x50d)[cG(0x8d4)](process[cG(0x657)], '-')[cG(0x8d4)](j), b[cG(0xa2c)]) : null;
                if (j && k && !a0l['existsSync'](k)) {
                    b['uSeEr'](a, cG(0x19b)[cG(0x8d4)](j, '\x20二进制包\x20(npm\x20engines\x20门槛静默跳过),\x20预检自愈补装'));
                    if (!await a0M(a)) {
                        b[cG(0xa03)](a, cG(0x1fa)[cG(0x8d4)](d, '\x20预检自愈未成功,\x20跳过'));
                        continue;
                    }
                }
            }
        }
        let f = null;
        try {
            f = b['uSeEr'](require, d);
        } catch (l) {
            b[cG(0xb54)](a, cG(0x1fa)[cG(0x8d4)](d, cG(0x618))[cG(0x8d4)](l && l[cG(0x641)] ? b[cG(0x231)](l[cG(0x641)], '\x20') : '')['concat'](String(l && l['message'])[cG(0x31d)]('\x0a')[0x0]));
            continue;
        }
        const g = await b[cG(0x9c0)](a0K, d);
        if (g['ok'])
            return a('pty\x20实现选定:\x20'['concat'](d, '\x20(libc=')[cG(0x8d4)](a0H() || b[cG(0x5c4)], ')')), {
                'name': d,
                'mod': f
            };
        a(cG(0x1fa)[cG(0x8d4)](d, cG(0x95a))[cG(0x8d4)](g[cG(0x81a)]));
    }
    return null;
}
function a0O() {
    const cH = a0cm, a = {
            'LQgJA': '[PTY]\x20',
            'PNAGt': function (b, c) {
                return b + c;
            },
            'Acvij': function (b) {
                return b();
            },
            'eHBZG': 'x64',
            'PhWyl': cH(0x375),
            'aSEMN': function (b, c) {
                return b(c);
            }
        };
    if (a0C || a0D)
        return Promise['resolve'](a0C);
    return !a0E && (a0E = a[cH(0x66b)](a0N, b => {
        const cI = cH;
        try {
            a0P[cI(0x2da)](cI(0xfd)['concat'](b));
        } catch (c) {
            console[cI(0x6fc)](a[cI(0x3a6)] + b);
        }
    })[cH(0x9e5)](b => {
        const cJ = cH;
        return b ? a0C = b[cJ(0x7a5)] : a0D = a['PNAGt'](a[cJ(0xb2c)](cJ(0x9c3), cJ(0xbab)[cJ(0x8d4)](process[cJ(0x657)], '-')[cJ(0x8d4)](a[cJ(0x34e)](a0H) || a[cJ(0x90b)], '@')['concat'](a0G, '\x20--no-save')), a['PhWyl']), a0C;
    })), a0E;
}
if (typeof Bun !== a0cm(0x22a))
    try {
        a0C = require(a0cm(0xbf2));
    } catch (a0cj) {
        a0D = a0cm(0x48f) + a0cj[a0cm(0x8d0)];
    }
else {
    if (process[a0cm(0x592)] !== a0cm(0x236))
        try {
            a0C = require('@lydell/node-pty');
        } catch (a0ck) {
            a0D = '核心终端依赖\x20(pty)\x20加载失败:\x20' + a0ck[a0cm(0x8d0)] + a0cm(0x357);
        }
}
const a0P = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const cK = a0cm, a = {
                'dKJbj': function (b, c) {
                    return b !== c;
                },
                'SIFxg': cK(0x22a)
            };
        return a[cK(0x61f)](typeof a0a1, a[cK(0x54f)]) && a0a1['LOG_LEVEL'] !== undefined ? a0a1[cK(0x914)] : 0x2;
    },
    'debug': a => {
        const cL = a0cm, b = {
                'JsCcl': function (c, d) {
                    return c <= d;
                }
            };
        b[cL(0x15c)](a0P[cL(0xa76)], a0P['LEVELS'][cL(0x172)]) && console[cL(0x6fc)](cL(0x695)[cL(0x8d4)](a));
    },
    'info': a => {
        const cM = a0cm, b = {
                'ddJAh': function (c, d) {
                    return c <= d;
                }
            };
        b['ddJAh'](a0P[cM(0xa76)], a0P[cM(0xb1c)][cM(0x239)]) && console[cM(0x6fc)](cM(0x7a9)['concat'](a));
    },
    'warn': a => {
        const cN = a0cm;
        a0P[cN(0xa76)] <= a0P['LEVELS'][cN(0x594)] && console[cN(0x6fc)](cN(0x86c)[cN(0x8d4)](a));
    },
    'error': a => {
        const cO = a0cm, b = {
                'IuOVt': function (c, d) {
                    return c <= d;
                }
            };
        b[cO(0xa1a)](a0P[cO(0xa76)], a0P[cO(0xb1c)][cO(0xd31)]) && console['log'](cO(0xb98)['concat'](a));
    }
};
function a0Q() {
    const cP = a0cm, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p[cP(0xd81)](),
            process['cwd']()
        ];
    for (const b of a) {
        if (b && a0l[cP(0xc26)](b) && a0l['statSync'](b)[cP(0x2d4)]())
            return b;
    }
    return process[cP(0x82f)]();
}
function a0R() {
    const cQ = a0cm;
    let a = null;
    try {
        a = a0p[cQ(0xd81)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[cQ(0xc26)](d) && a0l['statSync'](d)['isDirectory']())
            return d;
        if (d)
            console[cQ(0x6fc)](cQ(0x877)[cQ(0x8d4)](d));
    }
    return console['log']('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20全部候选无效,\x20降级到当前工作目录:\x20'[cQ(0x8d4)](process[cQ(0x82f)]())), process[cQ(0x82f)]();
}
class a0S {
    constructor(a = 'ok') {
        const cR = a0cm;
        this[cR(0x2e9)] = a;
    }
}
class a0T extends a0S {
    constructor(a = 'ok', b = 0x0) {
        const cS = a0cm;
        super(a), this[cS(0x3e9)] = b;
    }
}
class a0U extends a0S {
    constructor() {
        const cT = a0cm;
        super(), this[cT(0x657)] = '', this[cT(0x1cd)] = 0x0, this[cT(0x32e)] = '', this[cT(0x8ba)] = 0x0, this[cT(0x39b)] = '', this['ipv4'] = null, this[cT(0x2a5)] = null, this[cT(0x157)] = 0x0, this['os'] = '', this[cT(0x796)] = '', this[cT(0x833)] = 0x0, this[cT(0x28f)] = a0a1['AGENT_VERSION'], this['virtualization'] = '', this[cT(0x27f)] = [], this['session_key'] = '', this[cT(0x4cc)] = null;
    }
}
class a0V extends a0S {
    constructor() {
        const cU = a0cm;
        super(), this[cU(0x646)] = { 'usage': 0x0 }, this[cU(0x839)] = {
            'total': 0x0,
            'used': 0x0
        }, this['swap'] = {
            'total': 0x0,
            'used': 0x0
        }, this[cU(0x567)] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this[cU(0x364)] = {
            'total': 0x0,
            'used': 0x0
        }, this[cU(0x549)] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this[cU(0x643)] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this['uptime'] = 0x0, this[cU(0x378)] = 0x0, this[cU(0x8d0)] = '';
    }
}
class a0W extends a0S {
    constructor() {
        const cV = a0cm, a = { 'kdBrm': cV(0x20e) }, b = a[cV(0x213)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['result'] = '';
                continue;
            case '1':
                this[cV(0xcc9)] = 0x0;
                continue;
            case '2':
                super();
                continue;
            case '3':
                this[cV(0x81c)] = ![];
                continue;
            case '4':
                this[cV(0x764)] = '';
                continue;
            }
            break;
        }
    }
}
class a0X {
    constructor() {
        const cW = a0cm, a = { 'cynQG': cW(0xc4a) }, b = a[cW(0x74e)][cW(0x31d)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[cW(0x688)] = '';
                continue;
            case '1':
                this[cW(0x42c)] = '';
                continue;
            case '2':
                this[cW(0xc1c)] = '';
                continue;
            case '3':
                this[cW(0xb28)] = '';
                continue;
            case '4':
                this['owner'] = '';
                continue;
            case '5':
                this[cW(0xc00)] = '';
                continue;
            case '6':
                this[cW(0x5b1)] = '';
                continue;
            case '7':
                this['size'] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0Y {
    constructor() {
        const cX = a0cm;
        this['path'] = '', this[cX(0xc1c)] = '', this[cX(0xc00)] = '', this[cX(0x5b1)] = '', this['type'] = '', this[cX(0x237)] = ![], this[cX(0x150)] = ![], this[cX(0x93b)] = ![];
    }
}
class a0Z extends a0S {
    constructor() {
        const cY = a0cm;
        super(), this[cY(0x8d3)] = [];
    }
}
class a0a0 {
    static ['_generateRawKeypair']() {
        const cZ = a0cm, a = {
                'XIxzt': 'x25519',
                'sCgIX': cZ(0xd73),
                'XoKbZ': 'base64url',
                'sQabK': function (i, j) {
                    return i !== j;
                },
                'RRQWd': 'base64'
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[cZ(0x104)](a['XIxzt']), d = b[cZ(0x19d)]({ 'format': a['sCgIX'] }), f = c['export']({ 'format': a['sCgIX'] }), g = Buffer[cZ(0x2dc)](d['d'], 'base64url'), h = Buffer['from'](f['x'], a[cZ(0x595)]);
        return (a[cZ(0xc7f)](g[cZ(0x957)], 0x20) || h['length'] !== 0x20) && a0P[cZ(0x120)](cZ(0x98e)), {
            'private_b64': g['toString'](a[cZ(0x715)]),
            'public_b64': h[cZ(0x4a4)](a[cZ(0x715)])
        };
    }
    static ['generateSingle'](a) {
        const b = this['_generateRawKeypair']();
        return {
            'role': a,
            'private_b64': b['private_b64'],
            'public_b64': b['public_b64']
        };
    }
    static ['generatePair'](a = 'Controller', b = 'Agent') {
        const d0 = a0cm, c = {
                'control': this[d0(0x5b7)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0a1 {
    static ['Rtimeout'] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0cm(0xba4)] = (process.env.EXEC_SHELL || a0cm(0xbb6))['toLowerCase']() === a0cm(0xbb6);
    static [a0cm(0x172)] = (process.env.DEBUG || a0cm(0x71a))[a0cm(0x2ca)]() === a0cm(0xbb6);
    static [a0cm(0xaa9)] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static [a0cm(0x914)] = parseInt(process.env.LOG_LEVEL || (this['DEBUG'] ? '0' : '3'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0a1['_getConfigValue'](a0cm(0xd99), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0cm(0xcc3)] = a0a1[a0cm(0xd5d)](a0cm(0x679), a0cm(0xb56)) || 'ECIES公钥内容';
    static [a0cm(0x75b)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static ['TEMPKEY_MAX_TTL_HOURS'] = parseInt(process.env.TEMPKEY_MAX_TTL || a0cm(0xfe), 0xa);
    static [a0cm(0x999)] = a0R();
    static ['MAX_UPLOAD_SIZE'] = parseInt(process.env.MAX_UPLOAD_SIZE || a0cm(0x325));
    static [a0cm(0xbd5)] = (process.env.FOLLOW_SYMLINKS || a0cm(0x71a))[a0cm(0x2ca)]() === a0cm(0xbb6);
    static ['DOWNLOAD_ENCRYPT_MAX'] = Number['isFinite'](parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0cm(0x59c), 0xa)) ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0cm(0x59c), 0xa) : 0x400000;
    static [a0cm(0xad7)] = (process.env.FILE_AUDIT_LOG || 'true')[a0cm(0x2ca)]() === a0cm(0xbb6);
    static ['InitTask'] = !![];
    static ['onetasks'] = [];
    static [a0cm(0xdf)] = {};
    static ['cronloop'] = ![];
    static [a0cm(0x18e)] = parseInt(process.env.TASK_TIMEOUT || a0cm(0x18c));
    static [a0cm(0x7c2)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0cm(0x51e)] = [];
    static [a0cm(0x949)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0cm(0xc65));
    static [a0cm(0x359)] = process.env.HOST || a0cm(0x615);
    static [a0cm(0x931)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0cm(0x555));
    static ['KMODE'] = ((() => {
        const d1 = a0cm, a = {
                'lOqZF': function (c, d) {
                    return c || d;
                }
            }, b = (process.env.KMODE || '0')[d1(0x7a0)]();
        return /^2q(?:uic)?$/i[d1(0x252)](b) ? '2' : a[d1(0x564)](b, '0');
    })());
    static ['KMODE_QUIC'] = /^2q(?:uic)?$/i['test']((process.env.KMODE || '')['trim']());
    static [a0cm(0xb75)] = (process.env.KNAME || '')[a0cm(0x7a0)]();
    static [a0cm(0x36c)] = (process.env.KNAME_KEY || '')['trim']();
    static [a0cm(0x323)] = process.env.KPATH || '';
    static [a0cm(0xbb1)] = (process.env.KISAMA_DNS || a0cm(0x286))[a0cm(0x7a0)]()['toLowerCase']();
    static ['DOH_SERVERS'] = (process.env.KISAMA_DOH_SERVERS || '')[a0cm(0x7a0)]();
    static [a0cm(0x89c)] = [
        a0cm(0x45a),
        a0cm(0xbf1),
        'https://8.8.8.8/resolve'
    ];
    static [a0cm(0x891)] = process.env.AGENT_VERSION || a0cm(0x514);
    static [a0cm(0x45c)] = a0k[a0cm(0x27e)](0x20)[a0cm(0x4a4)](a0cm(0x8a1));
    static [a0cm(0xd53)] = a0a0[a0cm(0x99a)]();
    static [a0cm(0x3a0)]() {
        const d2 = a0cm, a = {
                'fTxtp': d2(0xbc4),
                'GtEOQ': d2(0x8a1)
            };
        return a0k['createHmac'](a[d2(0x691)], Buffer[d2(0x2dc)](this[d2(0x45c)], a[d2(0x78d)]))[d2(0xabf)]('kisama-ws-token-v1')[d2(0x15b)](a[d2(0x78d)]);
    }
    static [a0cm(0x562)]() {
        const d3 = a0cm, a = {
                'oUpNi': d3(0x8a1),
                'gEWpp': d3(0x12a)
            }, b = a0a0[d3(0x99a)]();
        this['NOISE_KEYS_INTERNAL'][d3(0x6a5)] = b[d3(0x6a5)], this[d3(0x3f0)][d3(0x4b0)]['private'] = b[d3(0x6a5)][d3(0x8c5)], this[d3(0x45c)] = a0k[d3(0x27e)](0x20)['toString'](a[d3(0xc13)]), this[d3(0x2d6)] = null, this[d3(0x787)] = 0x0, a0P[d3(0x2f3)](a['gEWpp']);
    }
    static [a0cm(0x3f0)] = {
        'controller': { 'private': this[a0cm(0xd53)][a0cm(0x6a5)][a0cm(0x8c5)] },
        'agent': { 'public': this[a0cm(0xd53)][a0cm(0x476)][a0cm(0x97e)] }
    };
    static ['BASEINFO_CACHE_TTL'] = 0xe10;
    static [a0cm(0x975)] = 0x1e;
    static ['BASEINFO_FAIL_BACKOFF'] = 0x3c;
    static [a0cm(0x7f4)] = 0x1e;
    static [a0cm(0x7be)] = null;
    static ['_baseinfo_p_promise'] = null;
    static [a0cm(0x7fe)] = null;
    static ['_baseinfo_local_time'] = 0x0;
    static [a0cm(0x946)] = 0x0;
    static [a0cm(0x54e)] = null;
    static [a0cm(0xb1e)] = null;
    static [a0cm(0x189)] = 0x0;
    static [a0cm(0x198)] = 0x0;
    static [a0cm(0xea)] = null;
    static [a0cm(0x2d6)] = null;
    static [a0cm(0x787)] = 0x0;
    static ['_status_fetch_promise'] = null;
    static [a0cm(0x502)]() {
        const d4 = a0cm, a = {
                'YXmWB': function (b, c) {
                    return b(c);
                },
                'kiXrM': function (b, c) {
                    return b / c;
                }
            };
        return a[d4(0x68d)](Number, a[d4(0xe0)](process['hrtime'][d4(0x103)](), 0xf4240n));
    }
    static [a0cm(0x798)](a) {
        return a ? { ...a } : null;
    }
    static async [a0cm(0x415)]() {
        const d5 = a0cm;
        if (this[d5(0x7be)])
            return this[d5(0x798)](this[d5(0x7be)]);
        return !this[d5(0x18a)] && (this[d5(0x18a)] = new a0ac()[d5(0x159)]()['catch'](a => {
            const d6 = d5;
            return a0P[d6(0x8c1)](d6(0xc21)[d6(0x8d4)](a[d6(0x8d0)]), 0x1), a0ac['staticFallback']();
        })[d5(0x9e5)](a => {
            return this['_baseinfo_p_cache'] = a, a;
        })[d5(0x367)](() => {
            const d7 = d5;
            this[d7(0x18a)] = null;
        })), this[d5(0x798)](await this[d5(0x18a)]);
    }
    static async [a0cm(0xc40)](a) {
        const d8 = a0cm, b = {
                'KxeJC': function (d, f) {
                    return d < f;
                },
                'qADaZ': function (d, f) {
                    return d < f;
                },
                'OcMgx': function (d, f) {
                    return d - f;
                }
            }, c = this['_baseInfoNowMs']();
        if (this['_baseinfo_local_cache'] && b[d8(0x498)](c - this[d8(0x645)], this[d8(0x975)] * 0x3e8))
            return this[d8(0x798)](this['_baseinfo_local_cache']);
        if (this[d8(0x946)] && b['qADaZ'](b[d8(0x9f2)](c, this[d8(0x946)]), this['BASEINFO_FAIL_BACKOFF'] * 0x3e8))
            return this[d8(0x798)](this[d8(0x7fe)] || a0ac[d8(0xb20)]());
        return !this[d8(0x54e)] && (this['_baseinfo_local_promise'] = new a0ac()[d8(0x4df)](a)[d8(0x9e5)](d => {
            const d9 = d8;
            return this['_baseinfo_local_cache'] = d, this[d9(0x645)] = this[d9(0x502)](), this[d9(0x946)] = 0x0, d;
        })[d8(0xc2f)](d => {
            const da = d8;
            return a0P[da(0x8c1)]('BaseInfo\x20local\x20组探测失败,\x20沿用上次成功值:\x20'[da(0x8d4)](d[da(0x8d0)]), 0x1), this[da(0x946)] = this['_baseInfoNowMs'](), this[da(0x7fe)] || a0ac[da(0xb20)]();
        })[d8(0x367)](() => {
            this['_baseinfo_local_promise'] = null;
        })), this[d8(0x798)](await this['_baseinfo_local_promise']);
    }
    static async [a0cm(0x3c3)]() {
        const db = a0cm, a = {
                'OVFTA': function (c, d) {
                    return c * d;
                },
                'LMYkc': function (c, d) {
                    return c < d;
                },
                'qbLgv': function (c, d) {
                    return c * d;
                }
            }, b = this[db(0x502)]();
        if (this[db(0xb1e)] && b - this['_baseinfo_net_time'] < a['OVFTA'](this['BASEINFO_CACHE_TTL'], 0x3e8))
            return this['_cloneBaseInfoPart'](this[db(0xb1e)]);
        if (this[db(0x198)] && a['LMYkc'](b - this['_baseinfo_net_fail_time'], a['qbLgv'](this[db(0x882)], 0x3e8)))
            return this[db(0x798)](this[db(0xb1e)] || a0ac[db(0xaf1)]());
        return !this[db(0xea)] && (this[db(0xea)] = new a0ac()[db(0x6ec)]()[db(0x9e5)](c => {
            const dc = db;
            return this['_baseinfo_net_cache'] = c, this[dc(0x189)] = this[dc(0x502)](), this['_baseinfo_net_fail_time'] = 0x0, c;
        })[db(0xc2f)](c => {
            const dd = db;
            return a0P[dd(0x8c1)](dd(0x827)['concat'](c[dd(0x8d0)]), 0x1), this['_baseinfo_net_fail_time'] = this['_baseInfoNowMs'](), this[dd(0xb1e)] || a0ac[dd(0xaf1)]();
        })['finally'](() => {
            const de = db;
            this[de(0xea)] = null;
        })), this['_cloneBaseInfoPart'](await this[db(0xea)]);
    }
    static [a0cm(0xd5d)](a, b) {
        const df = a0cm, c = { 'KgXdA': df(0xa3e) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[df(0x6e6)](__dirname, b);
        if (a0l[df(0xc26)](f))
            try {
                return a0l['readFileSync'](f, c[df(0x8e4)])[df(0x7a0)]();
            } catch (g) {
            }
        return '';
    }
    static [a0cm(0x335)]() {
        const dg = a0cm, a = {
                'ABGWW': dg(0x458),
                'XQKda': function (b, c) {
                    return b > c;
                },
                'VnyFF': '5|2|4|3|0|1',
                'BmQWK': dg(0x72a),
                'gkrbW': dg(0x112),
                'keYgS': '\x0a💡\x20解决方法:',
                'cvhmE': dg(0x834)
            };
        if (!this[dg(0x172)]) {
            const b = [];
            !this['ECDSA_PUBLIC_KEY_PEM'] && b[dg(0xd32)](dg(0xa18));
            !this[dg(0xcc3)] && b[dg(0xd32)](a[dg(0x758)]);
            if (a['XQKda'](b[dg(0x957)], 0x0)) {
                const c = a['VnyFF'][dg(0x31d)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0P[dg(0x8c1)](a[dg(0xb2f)]);
                        continue;
                    case '1':
                        process[dg(0x52b)](0x1);
                        continue;
                    case '2':
                        b[dg(0xb0a)](f => a0P[dg(0x120)](dg(0xd78)[dg(0x8d4)](f)));
                        continue;
                    case '3':
                        a0P['debug'](a['gkrbW']);
                        continue;
                    case '4':
                        a0P[dg(0x8c1)](a['keYgS']);
                        continue;
                    case '5':
                        a0P[dg(0x120)](a[dg(0x9dc)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0cm(0xa73)](a = {}) {
        const dh = a0cm, b = {
                'GeiaT': function (c, d) {
                    return c !== d;
                },
                'VKJYb': function (c, d) {
                    return c(d);
                },
                'tsQco': function (c, d) {
                    return c !== d;
                },
                'BrqBU': function (c, d) {
                    return c(d);
                },
                'mPWpZ': function (c, d) {
                    return c(d);
                },
                'ZNXTl': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[dh(0x737)](a[dh(0x931)], undefined) && b[dh(0x737)](a[dh(0x931)], null) && (this['PORT'] = parseInt(b[dh(0x653)](String, a[dh(0x931)]), 0xa));
        a[dh(0x1e6)] && (this[dh(0x1e6)] = a[dh(0x1e6)]['trim']());
        a[dh(0xcc3)] && (this['ECIES_PUBLIC_KEY_PEM'] = a[dh(0xcc3)]['trim']());
        if (b['tsQco'](a[dh(0x1a8)], undefined) && a['KMODE'] !== null) {
            const c = b['VKJYb'](String, a[dh(0x1a8)])[dh(0x7a0)]();
            if (/^(?:0|1|2|2q|2quic)$/i[dh(0x252)](c)) {
                const d = c[dh(0x2ca)]();
                this[dh(0x1a8)] = d[dh(0x848)]('2') ? '2' : d, this[dh(0xbc7)] = /^2q(?:uic)?$/[dh(0x252)](d);
            } else
                this[dh(0x1a8)] = '0', this[dh(0xbc7)] = ![], a0P[dh(0x2f3)](dh(0x5b5)[dh(0x8d4)](b[dh(0x489)](String, a[dh(0x1a8)]), dh(0x64a)));
        }
        a[dh(0xb75)] && String(a[dh(0xb75)])['trim']() && (this[dh(0xb75)] = b['BrqBU'](String, a[dh(0xb75)])['trim']()), a[dh(0x36c)] && String(a['KNAME_KEY'])[dh(0x7a0)]() && (this[dh(0x36c)] = b[dh(0x489)](String, a[dh(0x36c)])[dh(0x7a0)]()), a['KPATH'] && b[dh(0xc05)](String, a[dh(0x323)])['trim']() && (this[dh(0x323)] = b[dh(0x41e)](String, a['KPATH'])['trim']());
    }
}
const a0a2 = require('dns'), a0a3 = require(a0cm(0x426));
class a0a4 {
    static ['TTL_MIN'] = 0x1e;
    static [a0cm(0x9f8)] = 0x258;
    static [a0cm(0x118)] = 0x3c;
    static [a0cm(0x4fc)] = 0x3c;
    static [a0cm(0x2f5)] = 0x12c;
    static ['_ipv6Usable'];
    static [a0cm(0x808)] = null;
    constructor(a = {}) {
        const di = a0cm, b = (a[di(0x948)] && a[di(0x948)]['length'] ? a[di(0x948)] : a0a1[di(0x89c)])[di(0xc39)](c => String(c)[di(0x7a0)]()['replace'](/\/+$/, ''))['filter'](Boolean);
        this[di(0x948)] = b[di(0x957)] ? b : [...a0a1[di(0x89c)]], this[di(0x30b)] = a[di(0x30b)] || 0xbb8, this['queryFn'] = a[di(0x149)] || ((c, d, f) => this[di(0x5bb)](c, d, f)), this[di(0x544)] = new Map(), this[di(0x553)] = new Map(), this[di(0xcb6)] = this[di(0x948)][di(0xc39)](() => 0x0), this['lastFallbackWarn'] = 0x0;
    }
    async [a0cm(0x138)](a, b) {
        const dj = a0cm, c = {
                'uNbpa': function (j, k) {
                    return j === k;
                },
                'fEnVo': function (j, k) {
                    return j + k;
                },
                'zbvuS': dj(0x97d),
                'MpjMV': function (j, k) {
                    return j + k;
                },
                'vyieV': function (j, k) {
                    return j * k;
                },
                'ORpBR': function (j, k) {
                    return j || k;
                },
                'cuRTS': function (j, k) {
                    return j > k;
                }
            };
        b = c[dj(0x5b4)](b, 0x0);
        const d = ''[dj(0x8d4)](a, '|')[dj(0x8d4)](b), f = Date['now'](), g = this[dj(0x544)][dj(0x340)](d);
        if (g && c[dj(0xc9a)](g[dj(0xb53)], f))
            return g[dj(0x50f)]['slice']();
        const h = this['inflight'][dj(0x340)](d);
        if (h)
            return h;
        const i = ((async () => {
            const dk = dj, j = await this[dk(0x40b)](a, b);
            if (c[dk(0x7ed)](j[dk(0x2e9)], 'ok') && j[dk(0x50f)][dk(0x957)]) {
                const k = Math[dk(0x782)](Math[dk(0xcfa)](j['ttl'], a0a4[dk(0xa17)]), a0a4[dk(0x9f8)]) * 0x3e8;
                return this[dk(0x544)][dk(0xb2b)](d, {
                    'ips': j[dk(0x50f)][dk(0x519)](),
                    'expire': c[dk(0x630)](Date[dk(0x29a)](), k)
                }), j[dk(0x50f)]['slice']();
            }
            if (c[dk(0x7ed)](j[dk(0x2e9)], c[dk(0xba7)]))
                return this['cache'][dk(0xb2b)](d, {
                    'ips': [],
                    'expire': c[dk(0x402)](Date[dk(0x29a)](), c['vyieV'](a0a4[dk(0x118)], 0x3e8))
                }), [];
            return null;
        })());
        this['inflight'][dj(0xb2b)](d, i);
        try {
            return await i;
        } finally {
            this[dj(0x553)][dj(0xa16)](d);
        }
    }
    async [a0cm(0x40b)](a, b) {
        const dl = a0cm, c = {
                'iubal': function (k, l) {
                    return k !== l;
                },
                'copoF': function (k, l) {
                    return k !== l;
                },
                'CLEWE': function (k, l) {
                    return k === l;
                },
                'KvmVl': 'nxdomain',
                'KycNI': dl(0x120)
            }, d = [];
        if (c[dl(0x511)](b, 0x6))
            d[dl(0xd32)]([
                0x1,
                0x4
            ]);
        if (c[dl(0x7e6)](b, 0x4))
            d[dl(0xd32)]([
                0x1c,
                0x6
            ]);
        const f = {
            0x4: [],
            0x6: []
        };
        let g = ![], h = ![], i = ![], j = a0a4[dl(0x9f8)];
        for (const [k, l] of d) {
            try {
                const m = await this[dl(0x684)](a, k);
                c[dl(0xb97)](m[dl(0x2e9)], 'ok') && m[dl(0x50f)]['length'] ? (g = !![], f[l] = m[dl(0x50f)], j = Math[dl(0x782)](j, m[dl(0x54c)])) : h = !![];
            } catch (n) {
                i = !![];
            }
        }
        if (g)
            return {
                'status': 'ok',
                'ips': this['orderAddresses'](f[0x6], f[0x4]),
                'ttl': j
            };
        if (h && !i)
            return {
                'status': c['KvmVl'],
                'ips': [],
                'ttl': 0x0
            };
        return {
            'status': c[dl(0x303)],
            'ips': [],
            'ttl': 0x0
        };
    }
    async [a0cm(0x684)](a, b) {
        const dm = a0cm, c = {
                'Hnaet': function (f, g) {
                    return f < g;
                },
                'twswp': function (f, g) {
                    return f * g;
                },
                'ysNiO': dm(0xce3),
                'KOYrj': function (f, g) {
                    return f === g;
                },
                'HVMTI': function (f, g) {
                    return f !== g;
                },
                'jWSzy': function (f, g) {
                    return f !== g;
                },
                'VIpAz': 'string',
                'YsvXw': dm(0x90f)
            }, d = a0a4[dm(0xbf5)](a);
        for (let f = 0x0; c[dm(0xd52)](f, this[dm(0x948)][dm(0x957)]); f++) {
            if (c[dm(0xd52)](Date[dm(0x29a)](), this[dm(0xcb6)][f]))
                continue;
            let g;
            try {
                g = await this['queryFn'](this[dm(0x948)][f], d, b);
            } catch (l) {
                this[dm(0xcb6)][f] = Date[dm(0x29a)]() + c[dm(0xba5)](a0a4[dm(0x4fc)], 0x3e8);
                continue;
            }
            const h = g && typeof g === c[dm(0x50b)] ? g[dm(0xaf3)] || 0x0 : 0x1;
            if (c[dm(0x83c)](h, 0x3))
                return {
                    'status': dm(0x97d),
                    'ips': [],
                    'ttl': 0x0
                };
            if (c[dm(0x9ef)](h, 0x0))
                continue;
            const j = [];
            let k = a0a4[dm(0x9f8)];
            for (const m of g[dm(0x5f6)] || []) {
                if (!m || c[dm(0xa0f)](m['type'], b))
                    continue;
                if (c['jWSzy'](typeof m[dm(0x316)], c['VIpAz']) || !a0a4[dm(0x666)](m[dm(0x316)], b))
                    continue;
                j[dm(0xd32)](m[dm(0x316)]);
                const n = parseInt(m[dm(0xad0)], 0xa);
                if (Number[dm(0x162)](n))
                    k = Math['min'](k, n);
            }
            if (j[dm(0x957)])
                return {
                    'status': 'ok',
                    'ips': [...new Set(j)],
                    'ttl': k
                };
            return {
                'status': dm(0x97d),
                'ips': [],
                'ttl': 0x0
            };
        }
        throw new Error(c['YsvXw']);
    }
    [a0cm(0x5bb)](a, b, c) {
        const dn = a0cm, d = {
                'gVvex': function (f, g) {
                    return f(g);
                },
                'MSxEt': function (f, g) {
                    return f !== g;
                },
                'ojKWy': dn(0x316),
                'qsjGW': dn(0x52e),
                'jutmU': 'timeout'
            };
        return new Promise((f, g) => {
            const dq = dn, h = {
                    'qqhmI': function (j, k) {
                        const dp = a0b;
                        return d[dp(0xcdc)](j, k);
                    },
                    'bKEuE': 'utf8',
                    'nFqiY': function (j, k) {
                        return d['MSxEt'](j, k);
                    },
                    'Vzwli': d['ojKWy']
                }, i = a0h[dq(0xb41)](''[dq(0x8d4)](a, dq(0x5f3))[dq(0x8d4)](d['gVvex'](encodeURIComponent, b), dq(0xd8))['concat'](c), {
                    'method': d[dq(0x414)],
                    'timeout': this[dq(0x30b)],
                    'headers': {
                        'accept': dq(0x3de),
                        'user-agent': 'kisama-agent/'[dq(0x8d4)](a0a1[dq(0x891)])
                    }
                }, j => {
                    const dr = dq;
                    if (h[dr(0xdaa)](j['statusCode'], 0xc8)) {
                        j['resume'](), g(new Error(dr(0x809)['concat'](j[dr(0x500)])));
                        return;
                    }
                    const k = [];
                    j['on'](h[dr(0x9e6)], l => k['push'](l)), j['on'](dr(0x9d9), () => {
                        const ds = dr;
                        try {
                            h[ds(0x49e)](f, JSON[ds(0x599)](Buffer['concat'](k)['toString'](h[ds(0x2ce)])));
                        } catch (l) {
                            g(l);
                        }
                    });
                });
            i['on'](d[dq(0x140)], () => i[dq(0x958)](new Error(dq(0x423)))), i['on']('error', g), i[dq(0x9d9)]();
        });
    }
    [a0cm(0xc69)](a) {
        const dt = a0cm, b = {
                'hstmh': function (d, f) {
                    return d - f;
                },
                'lQALx': function (d, f) {
                    return d * f;
                }
            }, c = Date[dt(0x29a)]();
        b[dt(0xd88)](c, this[dt(0x2c9)]) >= b[dt(0xae7)](a0a4['WARN_INTERVAL'], 0x3e8) && (this[dt(0x2c9)] = c, a0P['warn']('🌐\x20KISAMA_DNS=on:\x20全部\x20DoH\x20服务器不可达,\x20\x22'['concat'](a, dt(0x596))));
    }
    [a0cm(0x9a5)](a, b) {
        const du = a0cm, c = [...new Set(a)], d = [...new Set(b)];
        if (!c[du(0x957)])
            return d;
        if (!d['length'])
            return c;
        return this[du(0x117)]() ? c[du(0x8d4)](d) : d[du(0x8d4)](c);
    }
    ['ipv6Usable']() {
        const dv = a0cm, a = {
                'gCWmo': function (b, c) {
                    return b === c;
                }
            };
        if (a[dv(0x85f)](a0a4[dv(0x285)], undefined))
            try {
                const b = a0a3[dv(0x12b)](dv(0xa19));
                b['close'](), a0a4[dv(0x285)] = !![];
            } catch (c) {
                a0a4[dv(0x285)] = ![];
            }
        return a0a4[dv(0x285)];
    }
    static ['validLiteral'](a, b) {
        const dw = a0cm, c = {
                'ZTbGG': function (d, f) {
                    return d === f;
                },
                'zgsIx': function (d, f) {
                    return d === f;
                }
            };
        return c[dw(0x8ea)](a0i[dw(0xa46)](a), c[dw(0x6ea)](b, 0x1) ? 0x4 : 0x6);
    }
    static [a0cm(0xbf5)](a) {
        const dx = a0cm;
        if (/^[\x00-\x7F]*$/['test'](a))
            return a;
        try {
            return new URL(dx(0x8d1)[dx(0x8d4)](a))['hostname'];
        } catch (b) {
            return a;
        }
    }
}
const a0a5 = a0a2[a0cm(0x90e)];
function a0a6(a, b) {
    const dy = a0cm, c = {
            'wyVvZ': dy(0xbf4),
            'ccDKG': function (f, g) {
                return f(g);
            },
            'TsezG': function (f, g, h) {
                return f(g, h);
            },
            'xnFdI': function (f, g, h, i) {
                return f(g, h, i);
            },
            'UVsXY': function (f, g) {
                return f === g;
            },
            'yBbRy': function (f, g) {
                return f !== g;
            },
            'zhFJx': dy(0x3d4),
            'AxNGw': 'object',
            'cVaHg': function (f, g) {
                return f || g;
            },
            'KHZUa': dy(0xcf3),
            'NeSED': function (f, g) {
                return f === g;
            },
            'fLSiX': dy(0x671),
            'MxOzd': function (f, g) {
                return f === g;
            },
            'DsIjL': 'ipv6',
            'YBsSV': 'number',
            'jyaUE': function (f, g) {
                return f === g;
            }
        }, d = b || a0a5;
    return function f(g, h, i) {
        const dz = dy;
        c[dz(0x90a)](typeof h, dz(0xa2a)) && (i = h, h = {});
        if (c[dz(0x3f7)](typeof g, c[dz(0xcd2)]) || !g || a0i[dz(0xa46)](g))
            return d[dz(0xa24)](a0a2, g, h, i);
        const j = h || {};
        let k = c['UVsXY'](typeof j, c[dz(0xd1a)]) ? j[dz(0xa6c)] || 0x0 : c['cVaHg'](j, 0x0);
        if (k === 'IPv4' || c[dz(0x90a)](k, c[dz(0xccc)]))
            k = 0x4;
        else {
            if (c['NeSED'](k, c[dz(0x87b)]) || c['MxOzd'](k, c[dz(0x248)]))
                k = 0x6;
            else {
                if (c[dz(0x3f7)](typeof k, c[dz(0x629)]))
                    k = 0x0;
            }
        }
        const l = c[dz(0xa94)](typeof j, c[dz(0xd1a)]) && !!j['all'];
        a[dz(0x138)](g, k)[dz(0x9e5)](m => {
            const dA = dz;
            if (m === null)
                return a['warnFallback'](g), d[dA(0xa24)](a0a2, g, h, i);
            if (!m[dA(0x957)]) {
                const n = new Error(dA(0xe7)['concat'](g, dA(0x84c)));
                return n[dA(0x641)] = dA(0xb3f), n[dA(0xa2e)] = c['wyVvZ'], n[dA(0x4d7)] = g, c['ccDKG'](i, n);
            }
            l ? c[dA(0xa25)](i, null, m[dA(0xc39)](o => ({
                'address': o,
                'family': a0i[dA(0xa46)](o)
            }))) : c['xnFdI'](i, null, m[0x0], a0i['isIP'](m[0x0]));
        })[dz(0xc2f)](m => i(m || new Error(dz(0x13c))));
    };
}
function a0a7(a = null) {
    const dB = a0cm, b = {
            'hxhes': function (f, g) {
                return f(g);
            },
            'SpckP': function (f, g) {
                return f === g;
            },
            'gpHUQ': function (f, g) {
                return f !== g;
            },
            'yJjeJ': function (f, g, h) {
                return f(g, h);
            }
        };
    if (a0a4[dB(0x808)])
        return a0a4[dB(0x808)];
    const c = b[dB(0xb25)](String, b[dB(0xb16)](a, null) ? a0a1['DNS_MODE'] : a)[dB(0x7a0)]()[dB(0x2ca)]();
    if (b['gpHUQ'](c, 'on'))
        return null;
    let d = null;
    return a0a1[dB(0x81e)] && (d = a0a1[dB(0x81e)][dB(0x31d)](/[,\s]+/)[dB(0xc39)](f => f[dB(0x7a0)]())[dB(0x781)](Boolean)), a0a4['_globalHook'] = new a0a4({ 'servers': d }), a0a2[dB(0x90e)] = b[dB(0x971)](a0a6, a0a4[dB(0x808)], a0a5), a0P[dB(0x2da)](dB(0x5a9)[dB(0x8d4)](a0a4['_globalHook'][dB(0x948)][dB(0x6e6)](',\x20'))), a0a4[dB(0x808)];
}
a0a7();
class a0a8 {
    constructor() {
        const dC = a0cm;
        this[dC(0x362)] = null, this[dC(0x8c2)] = null;
    }
    [a0cm(0x6b8)](a) {
        const dD = a0cm, b = {
                'xbIuB': function (c, d) {
                    return c === d;
                },
                'dDjZq': dD(0xa2a)
            };
        this[dD(0x3dc)]();
        if (this[dD(0x362)]) {
            if (this[dD(0x362)][dD(0x7c9)] === a * 0xe10)
                return this[dD(0x362)];
            const c = this['_key'][dD(0xa96)];
            this['_key'] = null, a0P['warn'](dD(0xb12)[dD(0x8d4)](c));
            if (b['xbIuB'](typeof this['onExpired'], b[dD(0xcc7)]))
                try {
                    this[dD(0x8c2)]();
                } catch (d) {
                    a0P[dD(0x120)](dD(0x307)[dD(0x8d4)](d['message']));
                }
        }
        return this[dD(0x362)] = this['_generate'](a), a0P[dD(0x2da)](dD(0x3a1)['concat'](this['_key'][dD(0xa96)], dD(0x124))[dD(0x8d4)](a, '\x20小时')), this[dD(0x362)];
    }
    [a0cm(0xd46)]() {
        const dE = a0cm;
        this[dE(0x3dc)]();
        if (this[dE(0x362)])
            return this[dE(0x362)]['ecdsa_vk'];
        return null;
    }
    [a0cm(0x4e0)]() {
        const dF = a0cm;
        this[dF(0x3dc)]();
        if (this[dF(0x362)])
            return this['_key'][dF(0x75d)];
        return null;
    }
    [a0cm(0x3dc)]() {
        const dG = a0cm, a = {
                'DOysO': function (b, c) {
                    return b === c;
                }
            };
        if (this['_key'] && this[dG(0x894)](this['_key'])) {
            const b = this[dG(0x362)][dG(0xa96)];
            this[dG(0x362)] = null, a0P[dG(0x2f3)](dG(0x9ce)[dG(0x8d4)](b));
            if (a['DOysO'](typeof this[dG(0x8c2)], dG(0xa2a)))
                try {
                    this['onExpired']();
                } catch (c) {
                    a0P[dG(0x120)](dG(0xa01)[dG(0x8d4)](c[dG(0x8d0)]));
                }
        }
    }
    [a0cm(0x894)](a) {
        const dH = a0cm, b = {
                'cIsbr': function (c, d) {
                    return c >= d;
                },
                'TxWZm': function (c, d) {
                    return c / d;
                }
            };
        return b[dH(0xc61)](Math[dH(0x936)](b[dH(0x98a)](Date[dH(0x29a)](), 0x3e8)), a[dH(0x7b8)]);
    }
    ['_generate'](a) {
        const dI = a0cm, b = {
                'jZNjv': dI(0xc3b),
                'UOqhX': dI(0x46f),
                'REzox': dI(0x45e),
                'ZgqJv': dI(0xd73),
                'oDTqz': function (o, p) {
                    return o - p;
                },
                'zECYp': dI(0x6f4),
                'GJRyO': function (o, p) {
                    return o + p;
                },
                'azKIJ': dI(0x754),
                'HifmA': 'base64'
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[dI(0x104)]('ec', { 'namedCurve': 'prime256v1' }), f = c[dI(0x19d)]({
                'type': b[dI(0x2de)],
                'format': dI(0x45e)
            }), g = d[dI(0x19d)]({
                'type': b[dI(0x2e0)],
                'format': b[dI(0x917)]
            }), h = a0k[dI(0x27e)](0x20), i = Buffer['from'](a0B[dI(0xb45)](h, ![])), j = c[dI(0x19d)]({ 'format': b[dI(0xb4e)] }), k = d['export']({
                'type': b['UOqhX'],
                'format': dI(0xb58)
            }), l = k['subarray'](b[dI(0x15e)](k[dI(0x957)], 0x41)), m = Math[dI(0x936)](Date['now']() / 0x3e8), n = a * 0xe10;
        return {
            'key_id': a0k[dI(0x27e)](0x8)[dI(0x4a4)](b[dI(0xbfc)]),
            'created_at': m,
            'expires_at': b[dI(0xb3e)](m, n),
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[dI(0x4a4)]('hex'),
            'ecies_public_key': i[dI(0x4a4)](dI(0x6f4)),
            'ecdsa_private_hex': Buffer[dI(0x2dc)](j['d'], b[dI(0x158)])['toString'](dI(0x6f4)),
            'ecdsa_public_b64': Buffer[dI(0x2dc)](a0A['Point'][dI(0xc18)](l)[dI(0xd05)](!![]))[dI(0x4a4)](b['HifmA']),
            'ecies_public_b64': Buffer[dI(0x2dc)](a0B[dI(0xb45)](h, !![]))['toString'](dI(0x8a1)),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0a9 {
    constructor(a, b) {
        const dJ = a0cm, c = {
                'gZWhD': dJ(0x80d),
                'ToLfv': dJ(0x8a1),
                'NeZuF': dJ(0x230),
                'AuWSq': dJ(0xd73)
            };
        this[dJ(0xb31)] = null, this[dJ(0x9f9)] = null;
        if (a)
            try {
                const d = a[dJ(0x7a0)]();
                if (d['startsWith'](c[dJ(0x346)]))
                    this[dJ(0xb31)] = a0k['createPublicKey'](d);
                else {
                    const f = Buffer[dJ(0x2dc)](d, c[dJ(0xac1)]), g = a0A['Point']['fromBytes'](f), h = g['toBytes'](![]), i = m => m['toString']('base64')[dJ(0x978)](/\+/g, '-')[dJ(0x978)](/\//g, '_')[dJ(0x978)](/=/g, ''), j = i(Buffer[dJ(0x2dc)](h[dJ(0x519)](0x1, 0x21))), k = i(Buffer['from'](h[dJ(0x519)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[dJ(0x1f8)],
                            'x': j,
                            'y': k
                        };
                    this['ecdsaPubkey'] = a0k[dJ(0x17d)]({
                        'key': l,
                        'format': c[dJ(0x6b1)]
                    });
                }
            } catch (m) {
                a0P['error'](dJ(0x878)[dJ(0x8d4)](m[dJ(0x8d0)])), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this[dJ(0x9f9)] = a0w[dJ(0x921)](b[dJ(0x7a0)]());
            } catch (n) {
                a0P[dJ(0x2f3)](dJ(0x182)['concat'](n[dJ(0x8d0)]));
            }
    }
    [a0cm(0x65c)](a, b, c, d, f, g, h = null) {
        const dK = a0cm, i = {
                'uHjUE': 'ECDSA\x20public\x20key\x20not\x20loaded',
                'QlIjn': function (j, k) {
                    return j(k);
                },
                'sYhmZ': function (j, k) {
                    return j / k;
                },
                'wlntp': function (j, k) {
                    return j > k;
                },
                'jRErc': function (j, k) {
                    return j - k;
                },
                'HNaGA': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'RDfEC': dK(0x6ef),
                'ahuij': dK(0xa79),
                'VrNSK': 'Bad\x20signature'
            };
        if (!this[dK(0xb31)])
            throw new Error(i[dK(0x733)]);
        try {
            const j = i[dK(0x3d6)](parseInt, f), k = Math[dK(0x936)](i[dK(0x2df)](Date[dK(0x29a)](), 0x3e8));
            if (i[dK(0x593)](Math[dK(0x98c)](i[dK(0x676)](k, j)), a0a1[dK(0xaa9)]))
                throw new Error(dK(0x7c0)[dK(0x8d4)](Math[dK(0x98c)](i[dK(0x676)](k, j)), 's\x20>\x20')[dK(0x8d4)](a0a1['TIMESTAMP_WINDOW'], 's'));
            const l = i[dK(0x65d)](a0aa, a, b, c, d, f);
            if (this[dK(0x503)](this[dK(0xb31)], l, g))
                return i[dK(0x411)];
            if (h && this[dK(0x503)](h, l, g))
                return i[dK(0x1c3)];
            throw new Error(i[dK(0x495)]);
        } catch (m) {
            throw new Error('Signature\x20verification\x20failed:\x20'[dK(0x8d4)](m[dK(0x8d0)]));
        }
    }
    [a0cm(0x503)](a, b, c) {
        const dL = a0cm, d = { 'eONGW': dL(0x2d8) };
        if (!a)
            return ![];
        try {
            const f = a0w[dL(0x921)](c), g = a0k['createVerify'](d[dL(0x2b7)]);
            return g['update'](b), g['verify'](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0cm(0x89d)](a, b = null) {
        const dM = a0cm, c = {
                'zxJkF': function (d, f, g) {
                    return d(f, g);
                },
                'RJvql': dM(0x8a1)
            };
        if (a0a1[dM(0x172)])
            return JSON['stringify'](a);
        if (!this[dM(0x9f9)])
            throw new Error(dM(0xb81));
        try {
            const d = JSON[dM(0xd7b)](a), f = Buffer['from'](d, 'utf-8'), g = b || Buffer[dM(0x2dc)](this[dM(0x9f9)]), h = c[dM(0x7a6)](a0v, g, f);
            return Buffer[dM(0x2dc)](h)[dM(0x4a4)](c['RJvql']);
        } catch (i) {
            throw new Error(dM(0xb6a)[dM(0x8d4)](i[dM(0x8d0)]));
        }
    }
    [a0cm(0x5f1)](a, b) {
        const dN = a0cm, c = {
                'YYkVG': dN(0xc31),
                'ZmpMr': dN(0x8a1),
                'aVzEz': dN(0xa3e),
                'Qbcpf': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'gaTGA': dN(0x481)
            };
        if (!b || b['length'] !== 0x20)
            throw new Error(c[dN(0xd8a)]);
        try {
            const d = Buffer[dN(0x2dc)](a, c['ZmpMr'])[dN(0x4a4)](c[dN(0xbc5)]), f = JSON['parse'](d);
            if (!f['nonce'] || !f['tag'] || !f[dN(0xd41)])
                throw new Error(c[dN(0x88c)]);
            const g = Buffer[dN(0x2dc)](f['nonce'], c[dN(0x370)]), h = Buffer['from'](f[dN(0x8ac)], dN(0x8a1)), i = Buffer[dN(0x2dc)](f[dN(0xd41)], c[dN(0x370)]), j = a0k['createDecipheriv'](c['gaTGA'], b, g);
            j[dN(0x651)](h);
            let k = j[dN(0xabf)](i, null, c['aVzEz']);
            return k += j[dN(0x57d)](c[dN(0xbc5)]), k;
        } catch (l) {
            throw new Error(dN(0x93e)[dN(0x8d4)](l[dN(0x8d0)]));
        }
    }
    [a0cm(0x1fc)](a, b) {
        const dO = a0cm, c = {
                'KNIMX': function (d, f) {
                    return d !== f;
                },
                'Xckwe': 'AES\x20Encrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'jOsPv': dO(0x8a1),
                'otsCR': dO(0xa3e)
            };
        if (!b || c['KNIMX'](b[dO(0x957)], 0x20))
            throw new Error(c['Xckwe']);
        try {
            const d = a0k['randomBytes'](0xc), f = a0k['createCipheriv'](dO(0x481), b, d), g = Buffer[dO(0x8d4)]([
                    f['update'](a),
                    f[dO(0x57d)]()
                ]), h = f[dO(0x1a4)](), i = {
                    'nonce': d[dO(0x4a4)](c[dO(0x284)]),
                    'tag': h[dO(0x4a4)](dO(0x8a1)),
                    'ciphertext': g[dO(0x4a4)](c['jOsPv'])
                };
            return Buffer[dO(0x2dc)](JSON['stringify'](i), c[dO(0x9e4)])['toString'](c[dO(0x284)]);
        } catch (j) {
            throw new Error('AES\x20Encrypt\x20Error:\x20'['concat'](j[dO(0x8d0)]));
        }
    }
}
function a0aa(a, b, c, d, f) {
    const dP = a0cm, g = {
            'CGkXI': dP(0xbc4),
            'xgmKU': dP(0x6f4)
        };
    return !c && (c = a0k[dP(0x2f6)](g[dP(0x1bb)])['update'](Buffer[dP(0x66e)](0x0))['digest'](g[dP(0xd4a)])), ''[dP(0x8d4)](a, '\x0a')[dP(0x8d4)](b, '\x0a')['concat'](c, '\x0a')[dP(0x8d4)](d, '\x0a')[dP(0x8d4)](f);
}
function a0ab(a, b = null) {
    const dQ = a0cm, c = {
            'qYJgn': function (d, f) {
                return d === f;
            },
            'YmDXW': dQ(0x3d4),
            'HeAKm': dQ(0x33d),
            'hVHaf': dQ(0x71a),
            'EGiEN': 'Content-Type',
            'Sjmkd': dQ(0xce0),
            'ZAEQo': dQ(0xa79),
            'bEPHR': 'utf8',
            'Nibuw': dQ(0xbb6),
            'QVdLP': dQ(0x6b9),
            'Vrywr': dQ(0x7d9),
            'yBdhe': function (d, f) {
                return d === f;
            },
            'FEHkJ': '/api/ws/',
            'BcWoT': function (d) {
                return d();
            },
            'UHsyP': function (d, f) {
                return d === f;
            },
            'gNcDR': dQ(0x4e9),
            'aEgqa': function (d, f) {
                return d === f;
            },
            'sXruS': dQ(0xb4c),
            'KnvZo': function (d) {
                return d();
            },
            'WUrbr': dQ(0xa48),
            'eXefk': dQ(0x10e),
            'mkMlp': dQ(0x6aa),
            'opAyW': 'X-Nonce',
            'wRLtP': dQ(0x137),
            'tblWp': 'X-Auth-Token',
            'wlLXF': function (d) {
                return d();
            },
            'tObyd': 'Missing\x20auth\x20headers',
            'tWoOF': function (d, f) {
                return d !== f;
            },
            'RptHP': dQ(0x3a4),
            'LXRJl': 'utf-8',
            'iKbRU': function (d, f) {
                return d > f;
            },
            'VxLZB': dQ(0xbc4),
            'XRVAP': dQ(0x6f4),
            'RZdPr': function (d, f) {
                return d === f;
            },
            'CqMyn': dQ(0x6ef),
            'CAKDl': function (d, f) {
                return d === f;
            },
            'ypBcC': function (d, f) {
                return d === f;
            },
            'oRQCp': dQ(0xba2),
            'LsotF': dQ(0x8a1),
            'cNtOW': dQ(0x97c)
        };
    return async (d, f, g) => {
        const dR = dQ, h = {
                'MhzZV': dR(0x33d),
                'doqTs': c['hVHaf']
            };
        if (d[dR(0x42c)]['startsWith'](c['FEHkJ']))
            return c['BcWoT'](g);
        const i = f['send'];
        f[dR(0xb71)] = function (o) {
            const dS = dR;
            if (a0a1[dS(0x172)]) {
                const p = c[dS(0x2b2)](typeof o, c[dS(0x6cb)]) ? o : Buffer[dS(0xd6a)](o) ? o : JSON['stringify'](o);
                return f[dS(0xb2b)](c[dS(0x224)], c[dS(0x3e6)]), f['set']('Content-Length', Buffer[dS(0x468)](p)['toString']()), i['call'](this, p);
            }
            if (f[dS(0x340)](c[dS(0x211)]) && f[dS(0x340)](c['EGiEN'])[dS(0x8b8)](c['Sjmkd']))
                try {
                    if (d['is_authenticated']) {
                        let q;
                        if (c[dS(0x2b2)](d[dS(0x42c)], dS(0xa48))) {
                            const r = typeof o === c[dS(0x6cb)] ? JSON[dS(0x599)](o) : o;
                            let s = null;
                            d[dS(0x7a3)] === c[dS(0x1b8)] && b && (s = b[dS(0x4e0)]());
                            const t = a['encryptResponse'](r, s);
                            q = c[dS(0x2b2)](typeof t, c[dS(0x6cb)]) ? t : JSON['stringify'](t);
                        } else {
                            const u = Buffer[dS(0xd6a)](o) ? o : typeof o === dS(0x3d4) ? Buffer[dS(0x2dc)](o, c[dS(0x6a9)]) : Buffer['from'](JSON[dS(0xd7b)](o), c['bEPHR']);
                            q = a['encryptData'](u, Buffer[dS(0x2dc)](a0a1['SESSION_KEY'], dS(0x8a1)));
                        }
                        return f[dS(0xb2b)](c[dS(0x224)], c[dS(0x557)]), f[dS(0xb2b)](c[dS(0x23b)], a0a1[dS(0x891)]), f[dS(0xb2b)](c[dS(0xcf1)], Buffer[dS(0x468)](q, dS(0xa3e))[dS(0x4a4)]()), i[dS(0xa24)](this, q);
                    } else {
                        const v = c[dS(0x3f2)](typeof o, c[dS(0x6cb)]) ? o : JSON[dS(0xd7b)](o);
                        return f[dS(0xb2b)](c[dS(0xcf1)], Buffer[dS(0x468)](v, 'utf8')[dS(0x4a4)]()), i['call'](this, v);
                    }
                } catch (w) {
                    if (!f[dS(0x760)]) {
                        const x = JSON[dS(0xd7b)]({ 'error': dS(0x644)[dS(0x8d4)](w[dS(0x8d0)]) });
                        return f[dS(0x2e9)](0x1f4), f[dS(0xb2b)](c['EGiEN'], c[dS(0x3ae)]), f[dS(0xb2b)](c[dS(0xcf1)], Buffer[dS(0x468)](x, c['bEPHR'])['toString']()), i[dS(0xa24)](this, x);
                    }
                    throw w;
                }
            return i[dS(0xa24)](this, o);
        };
        const j = f[dR(0x9d9)];
        f[dR(0x9d9)] = function (...o) {
            const dT = dR;
            return a0a1['DEBUG'] && !f[dT(0x340)](h[dT(0xd9)]) && f[dT(0xb2b)](h[dT(0xd9)], h['doqTs']), j[dT(0xbb8)](this, o);
        };
        if (c['UHsyP'](d['method'], c[dR(0x5c5)]) || c['aEgqa'](d[dR(0xc86)], c[dR(0x9d8)]))
            return a0a1['DEBUG'] && f[dR(0xb2b)](dR(0x33d), dR(0x71a)), c[dR(0xa54)](g);
        d[dR(0x1e9)] = ![];
        const k = [
            c[dR(0xcb1)],
            c[dR(0xdc)]
        ];
        if (a0a1[dR(0x172)])
            return d[dR(0x1e9)] = !![], c[dR(0x7b0)](g);
        const l = d[dR(0x9e8)][c[dR(0x607)]] || d[dR(0x9e8)][c[dR(0x8dd)]], m = d[dR(0x9e8)]['x-timestamp'] || d[dR(0x9e8)][c[dR(0x866)]], n = d[dR(0x9e8)][dR(0xce9)] || d[dR(0x9e8)][c[dR(0xb72)]];
        if (!l || !m || !n)
            return k[dR(0x8b8)](d[dR(0x42c)]) ? c[dR(0xa8a)](g) : f[dR(0x2e9)](0x191)[dR(0xd3a)]({ 'error': c[dR(0x204)] });
        try {
            let o = Buffer[dR(0x66e)](0x0);
            if (c[dR(0x6b6)](d[dR(0x42c)], c[dR(0x504)])) {
                if (Buffer[dR(0xd6a)](d['body']))
                    o = d[dR(0x642)];
                else {
                    if (c[dR(0x2b2)](typeof d[dR(0x642)], c[dR(0x6cb)]))
                        o = Buffer[dR(0x2dc)](d[dR(0x642)], c['LXRJl']);
                }
            }
            const p = c[dR(0x89e)](o[dR(0x957)], 0x0) ? a0k[dR(0x2f6)](c[dR(0x281)])[dR(0xabf)](o)[dR(0x15b)](c['XRVAP']) : '', q = b ? b[dR(0xd46)]() : null, r = a[dR(0x65c)](d[dR(0xc86)], d[dR(0x42c)], p, l, m, n, q);
            d['is_authenticated'] = !![], d[dR(0x7a3)] = c[dR(0x328)](r, dR(0xa79)) ? dR(0xa79) : c[dR(0x382)];
        } catch (s) {
            return k[dR(0x8b8)](d[dR(0x42c)]) ? g() : f['status'](0x191)['json']({ 'error': 'Signature\x20verification\x20failed:\x20'[dR(0x8d4)](s[dR(0x8d0)]) });
        }
        if (d[dR(0x642)] && c[dR(0x3b6)](typeof d[dR(0x642)], c[dR(0x6cb)])) {
            const t = c[dR(0xc07)]((d[dR(0x9e8)][c[dR(0xa72)]] || '')[dR(0x2ca)](), c[dR(0x557)]);
            try {
                if (t && d[dR(0x1e9)]) {
                    const u = Buffer[dR(0x2dc)](a0a1[dR(0x45c)], c[dR(0x54b)]), v = a[dR(0x5f1)](d[dR(0x642)], u);
                    d[dR(0x642)] = JSON[dR(0x599)](v);
                } else {
                    if (d[dR(0x642)]['startsWith'](c[dR(0x109)])) {
                        const w = Buffer['from'](d[dR(0x642)], c[dR(0x54b)])['toString'](c[dR(0xb11)]);
                        d['body'] = JSON[dR(0x599)](w);
                    } else {
                        if (d['body'][dR(0x7a0)]()[dR(0x848)]('{') || d[dR(0x642)][dR(0x7a0)]()[dR(0x848)]('['))
                            d[dR(0x642)] = JSON[dR(0x599)](d['body']);
                        else {
                            if (c[dR(0x43c)](d[dR(0x642)]['trim'](), ''))
                                d['body'] = {};
                        }
                    }
                }
            } catch (x) {
                return a0P[dR(0x120)](dR(0xcdd)[dR(0x8d4)](x[dR(0x8d0)])), f[dR(0x2e9)](0x190)['json']({ 'error': dR(0x6ce)[dR(0x8d4)](x[dR(0x8d0)]) });
            }
        }
        g();
    };
}
class a0ac {
    constructor() {
        const dU = a0cm, a = {
                'UVsrv': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[dU(0x453)] = 0x0, this[dU(0xd63)] = 0x0, this[dU(0xa2b)] = a[dU(0x980)](Date[dU(0x29a)](), 0x3e8);
    }
    async [a0cm(0x98b)]() {
        const dV = a0cm, a = {
                'RAWed': dV(0x433),
                'jzqxL': function (d, f) {
                    return d === f;
                },
                'yBSwx': dV(0xcfa),
                'dmtER': function (d, f, g) {
                    return d(f, g);
                },
                'dGRBg': function (d, f, g) {
                    return d(f, g);
                },
                'sJYTV': dV(0xa3e),
                'JkAus': dV(0xb7d),
                'EGuDr': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'eXtDd': function (d, f) {
                    return d > f;
                },
                'hCiLU': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[dV(0x3ac)](a[dV(0x551)], dV(0xa3e)))['trim']();
            b = a['jzqxL'](d, a[dV(0xcfe)]) ? null : a['dmtER'](parseInt, d, 0xa), c = a[dV(0x7db)](parseInt, (await a0m['readFile'](dV(0x8f0), a[dV(0x401)]))[dV(0x7a0)](), 0xa);
        } catch {
            try {
                b = a[dV(0x4c9)](parseInt, (await a0m['readFile'](a[dV(0x8de)], a[dV(0x401)]))[dV(0x7a0)](), 0xa), c = a[dV(0x7db)](parseInt, (await a0m[dV(0x3ac)](a[dV(0xae5)], a[dV(0x401)]))[dV(0x7a0)](), 0xa);
                if (a[dV(0x36a)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u[dV(0x807)]();
                b = f['total'], c = f[dV(0x54d)];
            }
        }
        if (b === null) {
            const g = await a0u[dV(0x807)]();
            b = g[dV(0x788)], (c === null || isNaN(c)) && (c = g[dV(0x54d)]);
        }
        return {
            'total': b,
            'used': c,
            'available': b - c,
            'free': a['hCiLU'](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const dW = a0cm, a = await this['collectStaticInfo'](), b = await this[dW(0x4df)](a[dW(0x28d)]), c = await this[dW(0x6ec)](), d = a0ac[dW(0xb95)](a, b, c);
        return a0P[dW(0x8c1)](dW(0xac0)['concat'](JSON[dW(0xd7b)](d, null, 0x2)), 0x1), d;
    }
    static [a0cm(0xb95)](a, b, c) {
        const dX = a0cm;
        return {
            'arch': a[dX(0x657)],
            'cpu_cores': a[dX(0x1cd)],
            'cpu_name': a['cpu_name'],
            'disk_total': b[dX(0x8ba)],
            'gpu_name': a[dX(0x39b)],
            'ipv4': c['ipv4'] ?? null,
            'ipv6': c[dX(0x2a5)] ?? null,
            'mem_total': b[dX(0x157)],
            'os': a['os'],
            'kernel_version': a[dX(0x796)],
            'swap_total': b[dX(0x833)],
            'version': a['version'],
            'virtualization': a[dX(0x28d)],
            'marks': Array[dX(0xbfe)](a[dX(0x27f)]) ? [...a[dX(0x27f)]] : []
        };
    }
    static ['staticFallback']() {
        const dY = a0cm;
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0a1[dY(0x891)],
            'virtualization': '',
            'marks': []
        };
    }
    static ['localFallback']() {
        return {
            'disk_total': 0x0,
            'mem_total': 0x0,
            'swap_total': 0x0
        };
    }
    static [a0cm(0xaf1)]() {
        return {
            'ipv4': null,
            'ipv6': null
        };
    }
    async [a0cm(0x159)]() {
        const dZ = a0cm;
        let a = {}, b = {};
        try {
            a = await a0u['cpu']();
        } catch (d) {
            a0P[dZ(0x8c1)]('获取\x20CPU\x20信息失败:\x20'[dZ(0x8d4)](d[dZ(0x8d0)]), 0x1);
        }
        try {
            b = await a0u['osInfo']();
        } catch (f) {
            a0P['debug'](dZ(0x575)[dZ(0x8d4)](f[dZ(0x8d0)]), 0x1);
        }
        let c = '';
        try {
            c = await this[dZ(0xd60)]();
        } catch (g) {
            a0P[dZ(0x8c1)](dZ(0x7bf)['concat'](g[dZ(0x8d0)]), 0x1);
        }
        return {
            'arch': a0p['arch']() || '',
            'cpu_cores': a['cores'] || 0x0,
            'cpu_name': a['brand'] || '',
            'gpu_name': '',
            'os': ''['concat'](b[dZ(0xcb0)] || '', '\x20')[dZ(0x8d4)](b[dZ(0x9cd)] || '')[dZ(0x7a0)](),
            'kernel_version': b[dZ(0x7e4)] || '',
            'version': a0a1[dZ(0x891)],
            'virtualization': c,
            'marks': this['detectMarks']()
        };
    }
    async [a0cm(0x4df)](a) {
        const e0 = a0cm;
        let b = 0x0;
        try {
            b = (await a0u[e0(0x1a5)]())[0x0]?.[e0(0xbed)] || 0x0;
        } catch (d) {
            a0P['debug'](e0(0x43d)['concat'](d[e0(0x8d0)]), 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[e0(0x98b)]() || c;
        } catch (f) {
            a0P[e0(0x8c1)]('获取内存信息失败:\x20'[e0(0x8d4)](f[e0(0x8d0)]), 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c[e0(0x788)] || 0x0,
            'swap_total': c[e0(0x831)] || 0x0
        };
    }
    async [a0cm(0x6ec)]() {
        const e1 = a0cm, a = {
                'JoggF': function (d, f) {
                    return d === f;
                },
                'TzfOv': e1(0x1f3),
                'wqUcv': function (d, f) {
                    return d === f;
                },
                'uskaU': e1(0x2ae)
            }, [b, c] = await Promise['allSettled']([
                this['getPublicIpV4'](),
                this[e1(0xb42)]()
            ]);
        if (a[e1(0x206)](b['status'], a[e1(0x534)]))
            a0P[e1(0x8c1)]('获取\x20IPv4\x20失败:\x20'[e1(0x8d4)](b[e1(0xa28)]), 0x1);
        if (a[e1(0x141)](c[e1(0x2e9)], a[e1(0x534)]))
            a0P[e1(0x8c1)](e1(0x4e3)['concat'](c['reason']), 0x1);
        return {
            'ipv4': a[e1(0x141)](b[e1(0x2e9)], a[e1(0x169)]) ? b[e1(0xc1b)] : null,
            'ipv6': c['status'] === a['uskaU'] ? c['value'] : null
        };
    }
    static [a0cm(0xa26)] = a0cm(0xd79);
    static [a0cm(0x30f)] = '/dev';
    static ['MARKS_ETC_ROOT'] = a0cm(0x4cd);
    static [a0cm(0xb92)] = a0cm(0x934);
    static [a0cm(0x68c)] = '/';
    [a0cm(0xd17)]() {
        const e2 = a0cm, a = {
                'JdRVQ': function (d, f) {
                    return d === f;
                },
                'guhUH': 'root',
                'nSxgd': e2(0x5bd),
                'hIdAc': e2(0x35d),
                'leUui': 'systemd',
                'WsIVi': e2(0x9ca),
                'VOsQf': function (d) {
                    return d();
                },
                'uxztY': e2(0xadf),
                'mncat': e2(0xb50),
                'IynBS': e2(0x5d3),
                'mXHiE': e2(0x816)
            }, b = [];
        if (a[e2(0xd90)](process[e2(0x592)], e2(0x236))) {
            const d = [
                [
                    a[e2(0x6d6)],
                    () => this[e2(0x4bf)]()
                ],
                [
                    a['nSxgd'],
                    () => this[e2(0x898)]()
                ],
                [
                    a[e2(0x496)],
                    () => this[e2(0xd0)]()
                ],
                [
                    a[e2(0xc3f)],
                    () => this['_markSystemd']()
                ],
                [
                    a[e2(0xaef)],
                    () => this[e2(0x2c4)]()
                ]
            ];
            for (const [f, g] of d) {
                try {
                    if (a['VOsQf'](g))
                        b[e2(0xd32)](f);
                } catch (h) {
                    a0P[e2(0x8c1)](e2(0x60d)[e2(0x8d4)](f, e2(0xd3f))[e2(0x8d4)](h[e2(0x8d0)]), 0x1);
                }
            }
        }
        const c = [
            [
                a['uxztY'],
                () => this[e2(0x725)]()
            ],
            [
                a['mncat'],
                () => this['_markKmode1']()
            ],
            [
                a[e2(0x7b1)],
                () => this['_markKmode2']()
            ]
        ];
        for (const [i, j] of c) {
            try {
                if (a[e2(0x99c)](j))
                    b['push'](i);
            } catch (k) {
                a0P[e2(0x8c1)](e2(0x60d)[e2(0x8d4)](i, e2(0xd3f))[e2(0x8d4)](k[e2(0x8d0)]), 0x1);
            }
        }
        return a0P[e2(0x8c1)]('marks\x20命中:\x20'[e2(0x8d4)](b[e2(0x6e6)](',') || a[e2(0x5ee)]), 0x1), b;
    }
    ['_markKstore']() {
        return a0ah['state']['enabled'] === !![];
    }
    [a0cm(0x55b)]() {
        const e3 = a0cm;
        return a0a1[e3(0x1a8)] === '1';
    }
    ['_markKmode2']() {
        const e4 = a0cm;
        return a0a1[e4(0x1a8)] === '2';
    }
    [a0cm(0x4bf)]() {
        const e5 = a0cm, a = {
                'lmjpD': function (b, c) {
                    return b !== c;
                },
                'EnIro': e5(0xa2a),
                'zdwFu': function (b, c) {
                    return b === c;
                }
            };
        if (a[e5(0x320)](typeof process[e5(0x713)], a[e5(0x424)]) || typeof process[e5(0x8f1)] !== a['EnIro'])
            return ![];
        return a[e5(0x128)](process['geteuid'](), 0x0) && process['getegid']() === 0x0;
    }
    [a0cm(0x898)]() {
        const e6 = a0cm, a = { 'LEtcJ': e6(0x5bd) };
        return a0ac[e6(0x563)](a0o[e6(0x6e6)](a0ac[e6(0x30f)], a[e6(0xbd3)]), 0xa, 0xe8);
    }
    [a0cm(0x2c4)]() {
        const e7 = a0cm, a = {
                'dIxKo': 'usr/bin/fusermount3',
                'luUeO': e7(0xab3),
                'EGXBp': e7(0x48e),
                'bMJnq': e7(0x260),
                'WAEzA': function (b, c) {
                    return b & c;
                }
            };
        if (!a0ac[e7(0x563)](a0o[e7(0x6e6)](a0ac[e7(0x30f)], 'fuse'), 0xa, 0xe5))
            return ![];
        if (this[e7(0x686)](0x15))
            return !![];
        for (const b of [
                a[e7(0x332)],
                a[e7(0xd0b)],
                a[e7(0x85c)],
                a[e7(0x7b7)]
            ]) {
            try {
                const c = a0l['statSync'](a0o[e7(0x6e6)](a0ac['MARKS_ROOT'], b));
                if (c['isFile']() && c[e7(0xc00)] & 0x800 && a[e7(0x372)](c[e7(0xc00)], 0x49))
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    [a0cm(0xd0)]() {
        const e8 = a0cm, a = {
                'hobxl': e8(0xaaf),
                'UjZsR': e8(0x2d9),
                'lgZSE': e8(0x339),
                'hnkSM': e8(0x2c8),
                'aCzhF': e8(0xa3e),
                'wpoGX': e8(0xab9),
                'flgbk': e8(0x5a2),
                'DnTFh': function (g, h) {
                    return g !== h;
                },
                'TzUJg': 'function',
                'aQGyH': 'passwd',
                'YXJCm': function (g, h) {
                    return g > h;
                },
                'LOvjz': function (g, h) {
                    return g(h);
                },
                'SJmqD': e8(0x98f)
            };
        if (a0ac[e8(0xa12)](a0o[e8(0x6e6)](a0ac[e8(0xa26)], a['hobxl'], a[e8(0x4eb)]), Buffer[e8(0x2dc)](a[e8(0x29f)])))
            return !![];
        for (const g of [
                a['hobxl'],
                '1'
            ]) {
            const h = a0ac[e8(0x9f7)](a0o[e8(0x6e6)](a0ac[e8(0xa26)], g, a[e8(0xd01)]));
            if (!h)
                continue;
            const i = h[e8(0x4a4)](a['aCzhF'])[e8(0x31d)]('\x00'), j = i[e8(0x5be)](l => l[e8(0x848)](e8(0xca1))), k = i['some'](l => l[e8(0x848)](e8(0x579)));
            if (j && k)
                return !![];
        }
        const b = a0ac[e8(0x9f7)](a0o[e8(0x6e6)](a0ac[e8(0x4ea)], e8(0x4d7)));
        if (!b)
            return ![];
        const c = b[e8(0x4a4)](a[e8(0xa3c)])[e8(0x7a0)]()[e8(0x2ca)]();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/[e8(0x252)](c))
            return ![];
        try {
            if (!a0l['statSync'](a0o[e8(0x6e6)](a0ac[e8(0x68c)], a[e8(0xc75)], a[e8(0x9c8)]))['isDirectory']())
                return ![];
        } catch {
            return ![];
        }
        if (a['DnTFh'](typeof process[e8(0x713)], a[e8(0x11a)]))
            return ![];
        const d = process[e8(0x713)](), f = a0ac[e8(0x9f7)](a0o[e8(0x6e6)](a0ac[e8(0x4ea)], a[e8(0xd19)]));
        if (!f)
            return ![];
        for (const l of f['toString'](a['aCzhF'])[e8(0x31d)]('\x0a')) {
            const m = l[e8(0x31d)](':');
            if (a['YXJCm'](m[e8(0x957)], 0x2) && a[e8(0xcc2)](Number, m[0x2]) === d)
                return ![];
        }
        return a0l[e8(0xc26)](a0o[e8(0x6e6)](a0ac[e8(0x68c)], a[e8(0x9f0)])) || a0l['existsSync'](a0o[e8(0x6e6)](a0ac[e8(0xb92)], e8(0x87d)));
    }
    [a0cm(0x2a8)]() {
        const e9 = a0cm, a = {
                'FGUWT': e9(0x1a9),
                'PPcTG': e9(0x591),
                'MCQNB': e9(0xc4b),
                'CIBxO': e9(0x322),
                'yZfBR': e9(0xa3e),
                'vKINW': e9(0x267),
                'ruclI': e9(0xb39)
            };
        try {
            if (!a0l[e9(0x73c)](a0o['join'](a0ac['MARKS_RUN_ROOT'], 'systemd', a[e9(0x6a1)]))[e9(0x2d4)]())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l[e9(0xc26)](a0o[e9(0x6e6)](a0ac[e9(0xb92)], e9(0x267), a['PPcTG'])) && !a0l[e9(0xc26)](a0o[e9(0x6e6)](a0ac[e9(0xb92)], a[e9(0xd7)], 'system_bus_socket')))
            return ![];
        if (!a0ac[e9(0x1ee)]())
            return ![];
        const b = a0ac[e9(0x9f7)](a0o['join'](a0ac[e9(0xa26)], '1', a['CIBxO']));
        if (b) {
            const c = b[e9(0x4a4)](a['yZfBR'])[e9(0x7a0)]();
            if (c)
                return c['toLowerCase']()[e9(0x8b8)](a['vKINW']);
        }
        try {
            const d = a0l[e9(0xc89)](a0o[e9(0x6e6)](a0ac['MARKS_PROC_ROOT'], '1', a[e9(0x720)]));
            if (d && !a0o['basename'](d)[e9(0x2ca)]()[e9(0x8b8)](a['vKINW']))
                return ![];
        } catch {
        }
        return !![];
    }
    [a0cm(0x686)](a) {
        const ea = a0cm, b = {
                'nlHar': ea(0xaaf),
                'WDECa': ea(0x2e9),
                'AnAGi': ea(0xa3e),
                'JKAcp': ea(0x94c),
                'sYHuy': function (d, f) {
                    return d < f;
                },
                'IXtOg': function (d, f) {
                    return d === f;
                },
                'cHDtA': function (d, f) {
                    return d & f;
                },
                'ylEqf': function (d, f) {
                    return d >> f;
                },
                'aIzOR': function (d, f) {
                    return d(f);
                },
                'rDfxQ': function (d, f) {
                    return d + f;
                },
                'dPfen': function (d, f) {
                    return d(f);
                }
            }, c = a0ac[ea(0x9f7)](a0o[ea(0x6e6)](a0ac[ea(0xa26)], b['nlHar'], b[ea(0x8db)]));
        if (!c)
            return ![];
        for (const d of c[ea(0x4a4)](b[ea(0x20f)])[ea(0x31d)]('\x0a')) {
            if (d[ea(0x848)](b[ea(0x609)])) {
                const f = d['split'](/\s+/);
                if (b[ea(0xc42)](f['length'], 0x2))
                    return ![];
                try {
                    return b[ea(0xef)](b[ea(0x8ce)](b['ylEqf'](b[ea(0x55f)](BigInt, b[ea(0x954)]('0x', f[0x1])), b[ea(0x811)](BigInt, a)), 0x1n), 0x1n);
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static [a0cm(0x1ee)]() {
        const eb = a0cm, a = { 'bWRWc': eb(0x390) };
        for (const b of [
                eb(0x1e5),
                a[eb(0xccf)],
                eb(0xd3b)
            ]) {
            if (a0ac['_executable'](a0o['join'](a0ac['MARKS_ROOT'], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')[eb(0x31d)](a0o['delimiter'])) {
            if (c && a0ac[eb(0x24d)](a0o['join'](c, 'systemctl')))
                return !![];
        }
        return ![];
    }
    static [a0cm(0x24d)](a) {
        const ec = a0cm, b = {
                'iisBq': function (c, d) {
                    return c & d;
                }
            };
        try {
            const c = a0l[ec(0x73c)](a);
            return c[ec(0x384)]() && b[ec(0xcbb)](c['mode'], 0x49) !== 0x0;
        } catch {
            return ![];
        }
    }
    static [a0cm(0x563)](a, b, c) {
        const ed = a0cm, d = {
                'dRufP': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l[ed(0x73c)](a);
            if (!f[ed(0xcbc)]())
                return ![];
            if (a0ac['_devMajor'](f['rdev']) !== b || d[ed(0xc6f)](a0ac[ed(0x1de)](f[ed(0x717)]), c))
                return ![];
            const g = a0l[ed(0xa5c)](a, 'r+');
            try {
                return !![];
            } finally {
                a0l[ed(0x8d9)](g);
            }
        } catch {
            return ![];
        }
    }
    static ['_devMajor'](a) {
        const ee = a0cm, b = {
                'zGOPk': function (f, g) {
                    return f % g;
                },
                'acWqp': function (f, g) {
                    return f / g;
                },
                'bYSdc': function (f, g) {
                    return f >>> g;
                }
            }, c = b[ee(0x1c5)](Math[ee(0x936)](b[ee(0x183)](a, 0x100)), 0x1000), d = Math[ee(0x936)](a / 0x100000000);
        return b[ee(0x21f)](c | d & ~0xfff, 0x0);
    }
    static ['_devMinor'](a) {
        const ef = a0cm, b = {
                'LdacE': function (f, g) {
                    return f & g;
                },
                'rbULF': function (f, g) {
                    return f % g;
                },
                'eBsBh': function (f, g) {
                    return f | g;
                }
            }, c = a % 0x100, d = b['LdacE'](b['rbULF'](Math['floor'](a / 0x1000), 0x100000), 0xfff00);
        return b[ef(0x1d2)](c, d) >>> 0x0;
    }
    static [a0cm(0x9f7)](a, b = 0x400 * 0x400) {
        const eg = a0cm, c = {
                'pmBMZ': function (f, g) {
                    return f < g;
                },
                'pnaKX': function (f, g) {
                    return f - g;
                },
                'tjfHq': function (f, g) {
                    return f !== g;
                }
            };
        let d = null;
        try {
            d = a0l['openSync'](a, 'r');
            const f = Buffer[eg(0x66e)](0x2000), g = [];
            let h = 0x0;
            while (c[eg(0x9bd)](h, b)) {
                const i = a0l[eg(0xb38)](d, f, 0x0, Math[eg(0x782)](f[eg(0x957)], c[eg(0x4d6)](b, h)), null);
                if (!i)
                    break;
                g[eg(0xd32)](Buffer[eg(0x2dc)](f[eg(0xb9c)](0x0, i))), h += i;
            }
            return Buffer[eg(0x8d4)](g);
        } catch {
            return null;
        } finally {
            if (c['tjfHq'](d, null))
                try {
                    a0l[eg(0x8d9)](d);
                } catch {
                }
        }
    }
    static [a0cm(0xa12)](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const eh = a0cm, f = {
                'hejoj': function (h, i) {
                    return h - i;
                },
                'YobFU': function (h, i) {
                    return h < i;
                },
                'ArIfE': function (h, i) {
                    return h - i;
                },
                'hjtiv': function (h, i) {
                    return h !== i;
                },
                'ZhWBS': function (h, i) {
                    return h - i;
                },
                'GXINa': function (h, i) {
                    return h !== i;
                }
            };
        let g = null;
        try {
            g = a0l[eh(0xa5c)](a, 'r');
            const h = Math['max'](0x0, f[eh(0x202)](b[eh(0x957)], 0x1)), i = Buffer[eh(0x66e)](d);
            let j = Buffer[eh(0x66e)](0x0), k = 0x0;
            while (f['YobFU'](k, c)) {
                const l = a0l[eh(0xb38)](g, i, 0x0, Math[eh(0x782)](d, f[eh(0xa8e)](c, k)), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer[eh(0x8d4)]([
                    j,
                    i[eh(0xb9c)](0x0, l)
                ]);
                if (f[eh(0x4f5)](m[eh(0x3b8)](b), -0x1))
                    return !![];
                j = h ? Buffer[eh(0x2dc)](m[eh(0xb9c)](Math[eh(0xcfa)](0x0, f[eh(0xbbb)](m[eh(0x957)], h)))) : Buffer[eh(0x66e)](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (f['GXINa'](g, null))
                try {
                    a0l[eh(0x8d9)](g);
                } catch {
                }
        }
    }
    ['getLocalIPv4']() {
        const ei = a0cm, a = {
                'GWAWd': function (c, d) {
                    return c === d;
                },
                'lwqsp': ei(0x59f)
            }, b = a0p[ei(0x4ee)]();
        for (const c of Object[ei(0x465)](b)) {
            for (const d of b[c]) {
                const f = a[ei(0x5dc)](d['family'], a[ei(0x8cf)]) || a['GWAWd'](d[ei(0xa6c)], 0x4);
                if (f && !d[ei(0x3c6)]) {
                    if (!/^10\./[ei(0x252)](d[ei(0x175)]) && !/^192\.168\./[ei(0x252)](d[ei(0x175)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[ei(0x252)](d[ei(0x175)]))
                        return d[ei(0x175)];
                }
            }
        }
        return null;
    }
    async [a0cm(0xcca)]() {
        const ej = a0cm, a = {
                'jCQuy': ej(0x8e3),
                'SXeve': ej(0x42a),
                'qqKHo': 'https://checkip.amazonaws.com',
                'mNuEN': ej(0x83d),
                'uMfWU': ej(0x829),
                'FtLev': ej(0x9e1),
                'dKCFe': 'https://myexternalip.com/raw'
            }, b = [
                a[ej(0x797)],
                a[ej(0x1f5)],
                a[ej(0x4b2)],
                a[ej(0xcde)],
                a[ej(0xd7d)],
                a[ej(0x780)],
                a[ej(0x728)]
            ];
        for (const d of b) {
            try {
                const f = await this[ej(0x7c7)](d, 0x4);
                if (f && this[ej(0x1a3)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[ej(0x445)]();
        if (c && this[ej(0x1a3)](c))
            return c;
        return null;
    }
    ['getLocalIPv6']() {
        const ek = a0cm, a = {
                'PYQVX': function (c, d) {
                    return c === d;
                },
                'LgtuZ': ek(0x671),
                'yAXNh': ek(0xa55)
            }, b = a0p['networkInterfaces']();
        for (const c of Object[ek(0x465)](b)) {
            for (const d of b[c]) {
                const f = a[ek(0x6d8)](d['family'], a[ek(0x4a1)]) || a['PYQVX'](d[ek(0xa6c)], 0x6);
                if (f && !d[ek(0x3c6)]) {
                    if (!d[ek(0x175)][ek(0x2ca)]()[ek(0x848)](a[ek(0x711)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0cm(0xb42)]() {
        const el = a0cm, a = { 'ldByD': el(0x42a) }, b = this[el(0x85b)]();
        if (b && this[el(0x6b4)](b))
            return b;
        const c = [
            el(0xe3),
            a[el(0x8c3)],
            el(0xc5e)
        ];
        for (const d of c) {
            try {
                const f = await this[el(0x7c7)](d, 0x6);
                if (f && this[el(0x6b4)](f))
                    return f;
            } catch (g) {
                a0P[el(0x8c1)](el(0xba1)[el(0x8d4)](d, el(0x1af))[el(0x8d4)](g[el(0x8d0)]));
                continue;
            }
        }
        return null;
    }
    async [a0cm(0x7c7)](a, b = 0x0) {
        const em = a0cm, c = {
                'jJKvO': function (d, f) {
                    return d !== f;
                },
                'TtdUr': function (d, f) {
                    return d(f);
                },
                'MGepA': em(0x316),
                'DtyuQ': em(0x9d9),
                'DeMSw': em(0xb10),
                'EBtqz': em(0x132),
                'UzSZZ': em(0x120)
            };
        return new Promise((d, f) => {
            const en = em, g = require(c[en(0x990)]), h = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': 'text/plain' }
                }, i = g[en(0x340)](a, h, j => {
                    const eo = en;
                    let k = '';
                    if (c[eo(0x64b)](j['statusCode'], 0xc8)) {
                        c['TtdUr'](f, new Error(eo(0xd1b)['concat'](j[eo(0x500)])));
                        return;
                    }
                    j['on'](c[eo(0x5d2)], l => k += l), j['on'](c[eo(0x403)], () => d(k[eo(0x7a0)]()));
                });
            i['on'](c['UzSZZ'], f), i[en(0x7cd)](0x1388, () => {
                const ep = en;
                i[ep(0x958)](), f(new Error(c[ep(0x7f0)]));
            });
        });
    }
    [a0cm(0x1a3)](a) {
        const eq = a0cm;
        return /^(\d{1,3}\.){3}\d{1,3}$/[eq(0x252)](a);
    }
    ['isValidIPv6'](a) {
        const er = a0cm;
        if (!/^[0-9a-fA-F:]+$/[er(0x252)](a) || !a['includes'](':'))
            return ![];
        const b = a[er(0x31d)](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/[er(0x252)](b);
    }
    async ['getRealtimeInfo']() {
        const es = a0cm, a = {
                'AxPXw': function (m, n) {
                    return m / n;
                },
                'fTsSQ': function (m, n) {
                    return m - n;
                },
                'YIYDh': function (m, n) {
                    return m - n;
                },
                'TzGMu': function (m, n) {
                    return m * n;
                },
                'WxIur': function (m, n) {
                    return m / n;
                },
                'BPccm': function (m, n) {
                    return m * n;
                },
                'DbPQn': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise['all']([
                a0u['currentLoad'](),
                a0u[es(0x807)](),
                a0u['networkStats'](),
                a0u[es(0x656)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[es(0x233)](Date[es(0x29a)](), 0x3e8), i = a[es(0x919)](h, this[es(0xa2b)]), j = a['YIYDh'](g[es(0x47e)], this['lastNetworkStats']['tx']), k = g[es(0xd2b)] - this['lastNetworkStats']['rx'];
        this['totalNetworkUp'] += j, this[es(0xd63)] += k, this['lastNetworkStats'] = {
            'tx': g[es(0x47e)],
            'rx': g[es(0xd2b)]
        }, this[es(0xa2b)] = h;
        const l = await a0u[es(0x3f5)]();
        return {
            'cpu': { 'usage': Math[es(0x272)](b[es(0x656)]) },
            'ram': {
                'total': c[es(0x788)],
                'used': c['active']
            },
            'swap': {
                'total': c[es(0x831)],
                'used': c[es(0x813)]
            },
            'load': {
                'load1': a[es(0x233)](Math['round'](f['avgLoad'] * 0x64), 0x64),
                'load5': Math['round'](a[es(0x288)](f['avgLoad'], 0x64)) / 0x64,
                'load15': a[es(0xa34)](Math['round'](a[es(0x972)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this[es(0xc67)](),
            'network': {
                'up': Math[es(0x272)](a[es(0x938)](j, i)),
                'down': Math[es(0x272)](k / i),
                'totalUp': this[es(0x453)],
                'totalDown': this[es(0xd63)]
            },
            'connections': await this[es(0xbf0)](),
            'uptime': a0p[es(0xd74)](),
            'process': l?.['all'] || 0x0,
            'message': ''
        };
    }
    async [a0cm(0xd60)]() {
        const et = a0cm, a = {
                'UTMBU': et(0x6d1),
                'BQjOj': et(0xc08),
                'BrebH': '/proc/1/cgroup',
                'xpPfh': et(0xa3e),
                'WJFbj': et(0x2bc),
                'JRxld': et(0x3fa),
                'qMiVk': et(0x76e),
                'JcPXk': et(0x2d2),
                'pEOAv': et(0x97a),
                'RnciM': et(0x3db),
                'dHRYW': et(0x99f),
                'faEdG': et(0x610),
                'NvXVL': et(0x55c),
                'lpCjf': '/proc/1/environ',
                'uogBM': et(0x23d),
                'HdNCB': et(0x9d0),
                'FiRMa': et(0xa93),
                'FyFBb': et(0x139),
                'tzXxv': et(0x817)
            };
        try {
            if (a0l[et(0xc26)](et(0x14b)))
                return 'Docker';
            if (a0l[et(0xc26)](a[et(0x249)]))
                return a[et(0x9a7)];
            if (a0l[et(0xc26)](a['BrebH'])) {
                const b = a0l[et(0x220)](a[et(0xd4d)], a[et(0x25b)])[et(0x2ca)]();
                if (b[et(0x8b8)](a[et(0xad3)]) || b[et(0x8b8)]('containerd'))
                    return a['JRxld'];
                else {
                    if (b[et(0x8b8)](a[et(0x3c1)]))
                        return a[et(0x442)];
                    else {
                        if (b['includes'](a[et(0x8eb)]))
                            return et(0x9d0);
                    }
                }
            }
            if (a0l[et(0xc26)](a['RnciM'])) {
                const c = a0l[et(0x220)](a[et(0x8cc)], et(0xa3e));
                if (c[et(0x8b8)]('/docker/containers/') || c[et(0x8b8)](a[et(0x3e4)]))
                    return a[et(0xb29)];
                else {
                    if (c[et(0x8b8)](a['faEdG']) || c[et(0x8b8)](a[et(0x5aa)]))
                        return et(0x2d2);
                }
            }
            if (a0l[et(0xc26)](a[et(0x92d)])) {
                const d = a0l[et(0x220)](a[et(0x92d)], a['xpPfh']);
                if (d[et(0x8b8)](a['uogBM']))
                    return a['HdNCB'];
            }
            if (a0l[et(0xc26)](et(0xa93))) {
                const f = a0l[et(0x220)](a['FiRMa'], a[et(0x25b)]);
                if (f['includes'](a[et(0x8cd)]) || f[et(0x8b8)](et(0x4f7)))
                    return a[et(0x8cd)];
            }
        } catch (g) {
        }
        return a[et(0x40a)];
    }
    async [a0cm(0xc67)]() {
        const eu = a0cm, a = {
                'bKvzj': function (b, c) {
                    return b !== c;
                },
                'OCpYe': function (b, c) {
                    return b !== c;
                },
                'fctKs': eu(0x467)
            };
        try {
            const b = await a0u[eu(0x1a5)](), c = b['filter'](g => {
                    const ev = eu;
                    return g['size'] > 0x0 && a[ev(0x6d9)](g['type'], ev(0x1b9)) && a['OCpYe'](g[ev(0x688)], a[ev(0x165)]) && g['fs'][ev(0x848)](ev(0x81b));
                }), d = c[eu(0xbd7)]((g, h) => g + h[eu(0xbed)], 0x0), f = c[eu(0xbd7)]((g, h) => g + h['used'], 0x0);
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
    async [a0cm(0xbf0)]() {
        const ew = a0cm;
        try {
            const a = await a0u[ew(0x349)](), b = a['filter'](d => d[ew(0x819)] === ew(0x235))[ew(0x957)], c = a[ew(0x781)](d => d['protocol'] === ew(0xa89))[ew(0x957)];
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
class a0ad {
    static async ['execute'](a, b = {}) {
        const ex = a0cm, c = {
                'tPxxs': function (d, f) {
                    return d - f;
                },
                'uSoXV': function (d, f) {
                    return d === f;
                },
                'HKOiX': ex(0xcfc),
                'zxAtP': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'orhJJ': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[ex(0x82f)](),
                env: env = {},
                timeout: timeout = a0a1[ex(0x5a4)]
            } = b;
        return new Promise(d => {
            const eA = ex, f = {
                    'ubjfa': function (i, j) {
                        const ey = a0b;
                        return c[ey(0x59b)](i, j);
                    },
                    'GfeEk': function (i, j) {
                        return i || j;
                    },
                    'mORPx': function (i, j) {
                        const ez = a0b;
                        return c[ez(0xc10)](i, j);
                    },
                    'lLMdB': c[eA(0x1fe)],
                    'mOgRo': function (i, j) {
                        return i(j);
                    }
                }, g = Date[eA(0x29a)](), h = c[eA(0xd3e)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[eA(0xd4c)](timeout, 0x3e8),
                    'maxBuffer': c['orhJJ'](c['orhJJ'](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const eB = eA, l = f[eB(0xa61)](Date[eB(0x29a)](), g), m = i && i[eB(0xd2e)] && i[eB(0x16b)];
                    let n = f['GfeEk'](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[eB(0xd07)](typeof i[eB(0x641)], f['lLMdB']) ? o = i[eB(0x641)] : o = -0x1;
                    }
                    f[eB(0x76d)](d, {
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
function a0ae(a) {
    const eC = a0cm, b = {
            'unpHJ': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[eC(0x986)][eC(0x93c)](a0o['resolve'](a0a1['FILE_ROOT'])), d = a0o[eC(0x138)](a);
        let f = d;
        while (!a0l[eC(0xc26)](f)) {
            const j = a0o[eC(0xb2a)](f);
            if (b['unpHJ'](j, f))
                return ![];
            f = j;
        }
        const g = a0l[eC(0x986)]['native'](f), h = a0o['relative'](c, g);
        if (h[eC(0x848)]('..') || a0o[eC(0x425)](h))
            return ![];
        const i = a0o[eC(0x2ab)](f, d);
        if (i && (i[eC(0x848)]('..') || a0o[eC(0x425)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0af {
    static [a0cm(0x3e0)] = 0x4e20;
    static [a0cm(0xb36)] = 0x200 * 0x400 * 0x400;
    static [a0cm(0x392)] = 0x1f4;
    static [a0cm(0xb47)] = null;
    static [a0cm(0xac9)](a) {
        const eD = a0cm, b = {
                'BLfei': function (g, h) {
                    return g < h;
                },
                'BILxC': function (g, h) {
                    return g < h;
                },
                'dNmgR': function (g, h) {
                    return g & h;
                },
                'AymwO': function (g, h) {
                    return g ^ h;
                },
                'vxPgt': function (g, h) {
                    return g >>> h;
                },
                'ZsLKx': function (g, h) {
                    return g < h;
                },
                'GcbvN': function (g, h) {
                    return g ^ h;
                },
                'XBEgv': function (g, h) {
                    return g & h;
                },
                'VsEEG': function (g, h) {
                    return g ^ h;
                }
            };
        if (!a0af[eD(0xb47)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; b[eD(0x757)](h, 0x100); h++) {
                let j = h;
                for (let l = 0x0; b[eD(0x6c6)](l, 0x8); l++)
                    j = b[eD(0x1d0)](j, 0x1) ? b[eD(0xab0)](0xedb88320, b['vxPgt'](j, 0x1)) : j >>> 0x1;
                g[h] = j;
            }
            a0af[eD(0xb47)] = g;
        }
        const d = a0af[eD(0xb47)];
        let f = -0x1;
        for (let m = 0x0; b[eD(0x6a3)](m, a[eD(0x957)]); m++)
            f = b[eD(0xbd8)](f >>> 0x8, d[b[eD(0x66c)](b['VsEEG'](f, a[m]), 0xff)]);
        return b[eD(0xab0)](f, -0x1) >>> 0x0;
    }
    static [a0cm(0x386)](a) {
        const eE = a0cm, b = {
                'tPvth': function (g, h) {
                    return g | h;
                },
                'rXQHD': function (g, h) {
                    return g << h;
                },
                'iSFHU': function (g, h) {
                    return g >> h;
                },
                'SkzOs': function (g, h) {
                    return g & h;
                },
                'CYIPt': function (g, h) {
                    return g | h;
                },
                'ioWqf': function (g, h) {
                    return g - h;
                },
                'kIArJ': function (g, h) {
                    return g << h;
                },
                'UGnCM': function (g, h) {
                    return g + h;
                }
            }, c = b['tPvth'](b['tPvth'](b[eE(0x97b)](a[eE(0x219)](), 0xb), a['getMinutes']() << 0x5), b[eE(0x2f8)](a[eE(0xd92)](), 0x1)) & 0xffff, f = b['SkzOs'](b[eE(0xc14)](b['rXQHD'](b[eE(0x40d)](a[eE(0x745)](), 0x7bc), 0x9), b['kIArJ'](b[eE(0xb86)](a[eE(0x7ab)](), 0x1), 0x5)) | a[eE(0x263)](), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0cm(0x153)](a) {
        const eF = a0cm, b = {
                'ZhOzo': function (i, j) {
                    return i < j;
                },
                'OHEqJ': function (i, j) {
                    return i - j;
                },
                'UeGvV': function (i, j) {
                    return i >= j;
                },
                'IejMy': function (i, j) {
                    return i > j;
                },
                'vyslx': function (i, j) {
                    return i(j);
                },
                'VXCMc': function (i, j) {
                    return i(j);
                },
                'fyWxy': function (i, j) {
                    return i + j;
                },
                'JCLVK': function (i, j) {
                    return i + j;
                },
                'TWeYz': function (i, j) {
                    return i(j);
                }
            }, c = a0l[eF(0xa5c)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const eG = eF;
            let j = 0x0;
            while (b[eG(0x1a1)](j, i['length']))
                j += a0l['writeSync'](c, i, j, b['OHEqJ'](i[eG(0x957)], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const eH = eF;
                if (b[eH(0x3cf)](g, a0af['ZIP_MAX_ENTRIES']))
                    return ![];
                const m = Buffer[eH(0x2dc)](i, eH(0xa3e));
                j = j || Buffer['alloc'](0x0);
                const n = l ? 0x0 : a0af[eH(0xac9)](j);
                let o = 0x0, p = j;
                if (!l && b['IejMy'](j[eH(0x957)], 0x0)) {
                    const u = a0n[eH(0x167)](j, { 'level': 0x6 });
                    b[eH(0x1a1)](u[eH(0x957)], j[eH(0x957)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0af[eH(0x386)](k || new Date()), s = Buffer[eH(0x66e)](0x1e);
                s[eH(0x8c6)](0x4034b50, 0x0), s[eH(0x927)](0x14, 0x4), s[eH(0x927)](0x800, 0x6), s[eH(0x927)](o, 0x8), s[eH(0x927)](q, 0xa), s['writeUInt16LE'](r, 0xc), s['writeUInt32LE'](n, 0xe), s[eH(0x8c6)](p[eH(0x957)], 0x12), s[eH(0x8c6)](j[eH(0x957)], 0x16), s[eH(0x927)](m['length'], 0x1a), s['writeUInt16LE'](0x0, 0x1c), b[eH(0x46d)](h, s), h(m), b['VXCMc'](h, p);
                const t = Buffer['alloc'](0x2e);
                return t[eH(0x8c6)](0x2014b50, 0x0), t['writeUInt16LE'](0x14, 0x4), t[eH(0x927)](0x14, 0x6), t[eH(0x927)](0x800, 0x8), t[eH(0x927)](o, 0xa), t[eH(0x927)](q, 0xc), t[eH(0x927)](r, 0xe), t[eH(0x8c6)](n, 0x10), t[eH(0x8c6)](p[eH(0x957)], 0x14), t[eH(0x8c6)](j[eH(0x957)], 0x18), t['writeUInt16LE'](m['length'], 0x1c), t[eH(0x927)](0x0, 0x1e), t[eH(0x927)](0x0, 0x20), t[eH(0x927)](0x0, 0x22), t[eH(0x927)](0x0, 0x24), t['writeUInt32LE'](l ? 0x10 : 0x0, 0x26), t['writeUInt32LE'](f, 0x2a), d[eH(0xd32)](t, m), f += b[eH(0x521)](b['JCLVK'](0x1e, m[eH(0x957)]), p[eH(0x957)]), g++, !![];
            },
            'close'() {
                const eI = eF, i = Buffer[eI(0x8d4)](d), j = Buffer[eI(0x66e)](0x16);
                return j[eI(0x8c6)](0x6054b50, 0x0), j[eI(0x927)](0x0, 0x4), j[eI(0x927)](0x0, 0x6), j[eI(0x927)](g, 0x8), j['writeUInt16LE'](g, 0xa), j[eI(0x8c6)](i[eI(0x957)], 0xc), j[eI(0x8c6)](f, 0x10), j[eI(0x927)](0x0, 0x14), b[eI(0x889)](h, i), b[eI(0x88e)](h, j), a0l[eI(0x8d9)](c), g;
            }
        };
    }
    static [a0cm(0x599)](a) {
        const eJ = a0cm, b = {
                'nueZx': function (n, o) {
                    return n + o;
                },
                'fzDbQ': function (n, o) {
                    return n >= o;
                },
                'ZeqRH': function (n, o) {
                    return n === o;
                },
                'Xhnvs': function (n, o) {
                    return n < o;
                },
                'NNAGy': eJ(0x56a),
                'bkvbN': function (n, o) {
                    return n + o;
                },
                'ixgNi': function (n, o) {
                    return n + o;
                },
                'VOlXE': function (n, o) {
                    return n + o;
                },
                'lcSbQ': function (n, o) {
                    return n < o;
                },
                'DIGtY': function (n, o) {
                    return n <= o;
                },
                'iBgHv': function (n, o) {
                    return n + o;
                },
                'CcWSy': function (n, o) {
                    return n + o;
                },
                'qtkrn': function (n, o) {
                    return n + o;
                },
                'pnmwi': function (n, o) {
                    return n + o;
                },
                'gqNhh': eJ(0xa3e),
                'vOCTb': function (n, o) {
                    return n + o;
                },
                'ynMNM': function (n, o) {
                    return n !== o;
                },
                'fPzYG': function (n, o) {
                    return n + o;
                },
                'WMRWQ': function (n, o) {
                    return n + o;
                },
                'FTKlV': function (n, o) {
                    return n + o;
                }
            }, c = a0l[eJ(0x220)](a);
        let d = -0x1;
        const f = Math['max'](0x0, c[eJ(0x957)] - b[eJ(0xa04)](0xffff, 0x16));
        for (let n = c[eJ(0x957)] - 0x16; b[eJ(0x44f)](n, f); n--) {
            if (b['ZeqRH'](c['readUInt32LE'](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b[eJ(0x613)](d, 0x0))
            throw new Error(b[eJ(0xa7f)]);
        const g = c['readUInt16LE'](b['nueZx'](d, 0xa)), h = c[eJ(0xa4c)](b['bkvbN'](d, 0xc)), j = c[eJ(0xa4c)](b['ixgNi'](d, 0x10)), k = [];
        let l = j;
        const m = b[eJ(0xd34)](j, h);
        for (let o = 0x0; b[eJ(0xabe)](o, g) && b[eJ(0x586)](b[eJ(0x5ac)](l, 0x2e), m); o++) {
            if (c[eJ(0xa4c)](l) !== 0x2014b50)
                break;
            const q = c[eJ(0xa1d)](b[eJ(0x26f)](l, 0x8)), r = c[eJ(0xa1d)](b[eJ(0xa04)](l, 0xa)), s = c[eJ(0xa4c)](b[eJ(0xa3f)](l, 0x10)), t = c[eJ(0xa4c)](b['qtkrn'](l, 0x14)), u = c[eJ(0xa4c)](b[eJ(0x5ac)](l, 0x18)), v = c[eJ(0xa1d)](b['bkvbN'](l, 0x1c)), w = c[eJ(0xa1d)](l + 0x1e), x = c[eJ(0xa1d)](b[eJ(0x5ac)](l, 0x20)), y = c[eJ(0xa4c)](b[eJ(0x26f)](l, 0x26)), z = c[eJ(0xa4c)](b[eJ(0xa04)](l, 0x2a)), A = c[eJ(0x519)](l + 0x2e, b[eJ(0x82d)](b[eJ(0xa82)](l, 0x2e), v))[eJ(0x4a4)](b[eJ(0x380)]);
            l += b[eJ(0xc62)](0x2e + v, w) + x;
            const B = {
                'name': A,
                'isDir': A['endsWith']('/') || b['ynMNM'](y & 0x10, 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b['ynMNM'](q & 0x1, 0x0),
                'zip64': b['ZeqRH'](t, 0xffffffff) || b[eJ(0xc94)](u, 0xffffffff) || z === 0xffffffff,
                'data': null
            };
            if (!B[eJ(0x967)] && !B[eJ(0x4ac)] && !B[eJ(0x68b)]) {
                if (z + 0x1e <= c[eJ(0x957)] && b[eJ(0xc94)](c[eJ(0xa4c)](z), 0x4034b50)) {
                    const C = c[eJ(0xa1d)](b[eJ(0x66f)](z, 0x1a)), D = c['readUInt16LE'](z + 0x1c), E = b['qtkrn'](b[eJ(0xa3f)](b[eJ(0x4fa)](z, 0x1e), C), D);
                    b[eJ(0x586)](E + t, c[eJ(0x957)]) && (B['data'] = c[eJ(0x519)](E, b[eJ(0x584)](E, t)));
                }
            }
            k['push'](B);
        }
        return k;
    }
    static ['inflate'](a) {
        const eK = a0cm, b = {
                'TljhE': function (c, d) {
                    return c === d;
                }
            };
        if (b[eK(0x39c)](a[eK(0xc86)], 0x0))
            return a[eK(0x316)];
        if (a[eK(0xc86)] === 0x8)
            return a0n[eK(0x242)](a['data']);
        throw new Error(eK(0x48a)[eK(0x8d4)](a[eK(0xc86)]));
    }
}
class a0ag {
    static async [a0cm(0x70f)](a, b = ![]) {
        const eL = a0cm, c = {
                'FSHqM': eL(0x2d0),
                'JWchG': 'file',
                'gaGNn': function (h, i) {
                    return h(i);
                },
                'bCByl': function (h, i) {
                    return h || i;
                },
                'fUfIs': eL(0x9c1),
                'zLoXh': eL(0x6e0),
                'AeTBV': function (h, i) {
                    return h(i);
                }
            }, d = a0o['resolve'](a0a1[eL(0x999)], c[eL(0x173)](a, '.'));
        if (!c[eL(0x528)](a0ae, d))
            throw new Error(c[eL(0xd13)]);
        if (!a0l[eL(0xc26)](d))
            throw new Error(c[eL(0xc41)]);
        const f = [], g = h => {
                const eM = eL, i = a0l[eM(0xda6)](h);
                for (const j of i) {
                    const k = a0o[eM(0x6e6)](h, j), l = a0l[eM(0x73c)](k), m = new a0X();
                    m[eM(0xc1c)] = j, m[eM(0x42c)] = a0o[eM(0x2ab)](a0a1[eM(0x999)], k), m['type'] = l['isDirectory']() ? c[eM(0xc7b)] : c['JWchG'], m[eM(0xbed)] = l['size'], m[eM(0xb28)] = l[eM(0xb28)][eM(0x455)](), m[eM(0xc00)] = this['_formatMode'](l[eM(0xc00)], l[eM(0x2d4)]()), m[eM(0x5b1)] = '0o'['concat']((l[eM(0xc00)] & 0x1ff)[eM(0x4a4)](0x8)), m[eM(0x2aa)] = ''[eM(0x8d4)](l[eM(0x156)], ':')['concat'](l[eM(0x548)]), f[eM(0xd32)](m), b && l[eM(0x2d4)]() && c[eM(0x528)](g, k);
                }
            };
        return c['AeTBV'](g, d), f;
    }
    static async [a0cm(0x309)](a) {
        const eN = a0cm, b = {
                'tWsGj': function (d, f) {
                    return d(f);
                },
                'VSNCP': function (d, f) {
                    return d & f;
                },
                'VyJoc': eN(0x2d0),
                'ItnSv': 'file'
            }, c = [];
        for (const d of a) {
            const f = a0o[eN(0x138)](a0a1[eN(0x999)], d);
            if (!b[eN(0xb68)](a0ae, f))
                continue;
            try {
                const g = a0l[eN(0x73c)](f), h = this[eN(0xd76)](f, a0l[eN(0x33e)][eN(0x9c4)]), i = this[eN(0xd76)](f, a0l[eN(0x33e)][eN(0x5fb)]), j = this['_checkAccess'](f, a0l['constants'][eN(0x2e6)]), k = new a0Y();
                k['path'] = a0o[eN(0x2ab)](a0a1[eN(0x999)], f), k[eN(0xc1c)] = a0o['basename'](f), k['mode'] = this[eN(0x2c6)](g[eN(0xc00)], g[eN(0x2d4)]()), k[eN(0x5b1)] = '0o'[eN(0x8d4)](b[eN(0x61e)](g['mode'], 0x1ff)[eN(0x4a4)](0x8)), k[eN(0x688)] = g[eN(0x2d4)]() ? b[eN(0x110)] : b['ItnSv'], k[eN(0x237)] = h, k[eN(0x150)] = i, k[eN(0x93b)] = j, c[eN(0xd32)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0cm(0xd76)](a, b) {
        const eO = a0cm;
        try {
            return a0l[eO(0x680)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0cm(0x987)](a) {
        const eP = a0cm, b = {
                'niVms': eP(0xcfc),
                'VkrYL': eP(0x3d4),
                'nzzGW': function (c, d, f) {
                    return c(d, f);
                },
                'fvJAr': 'Unsupported\x20permission\x20format,\x20only\x20octal\x20strings\x20are\x20supported'
            };
        if (typeof a === b[eP(0xd9b)])
            return a;
        if (typeof a === b['VkrYL']) {
            const c = a[eP(0x7a0)]();
            if (/^[0-7]{3,4}$/[eP(0x252)](c))
                return b['nzzGW'](parseInt, c, 0x8);
        }
        throw new Error(b[eP(0xcf6)]);
    }
    static [a0cm(0x2c6)](a, b) {
        const eQ = a0cm, c = {
                'zqnFq': function (i, j) {
                    return i & j;
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[eQ(0x7ec)](a, 0x1ff)['toString'](0x8)[eQ(0xd86)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = parseInt(i, 0xa);
            h += f[eQ(0xc39)]((k, l) => j & 0x4 >> l ? k : '-')[eQ(0x6e6)]('');
        }
        return h;
    }
    static async [a0cm(0x3cd)](a, b = ![]) {
        const eR = a0cm, c = {
                'udMuG': function (g, h) {
                    return g(h);
                },
                'HDdQt': function (g, h) {
                    return g(h);
                },
                'NAjsy': eR(0xb9d),
                'pIxJh': function (g, h) {
                    return g(h);
                },
                'YYuOL': eR(0x120)
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0o[eR(0x138)](a0a1['FILE_ROOT'], g);
            if (!c['HDdQt'](a0ae, i)) {
                d[eR(0xd32)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[eR(0x97f)]
                });
                continue;
            }
            try {
                const j = this[eR(0x987)](h), k = m => {
                        a0l['chmodSync'](m, j);
                    };
                if (b && a0l[eR(0xc26)](i) && a0l[eR(0x73c)](i)[eR(0x2d4)]()) {
                    const m = n => {
                        const eS = eR;
                        c[eS(0x69c)](k, n);
                        const o = a0l['readdirSync'](n);
                        for (const p of o) {
                            const q = a0o[eS(0x6e6)](n, p);
                            a0l[eS(0x73c)](q)[eS(0x2d4)]() ? c['udMuG'](m, q) : c[eS(0x69c)](k, q);
                        }
                    };
                    c[eR(0x69c)](m, i);
                } else
                    c[eR(0xc9d)](k, i);
                const l = j[eR(0x4a4)](0x8);
                d[eR(0xd32)]({
                    'path': g,
                    'requested': c['pIxJh'](String, h),
                    'applied': l,
                    'mode_octal': '0o'['concat'](l),
                    'status': 'ok'
                });
            } catch (n) {
                d[eR(0xd32)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['YYuOL'],
                    'message': n[eR(0x8d0)]
                });
            }
        }
        const f = d[eR(0x781)](o => o['status'] === 'ok')[eR(0x957)];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const eT = a0cm, b = {
                'dikjv': function (h, i) {
                    return h(i);
                },
                'fOArl': eT(0x9c1),
                'UVgtr': function (h, i) {
                    return h * i;
                },
                'dZCQT': eT(0x64d),
                'JGFCL': 'utf8',
                'iTncu': eT(0x8a1),
                'QNMiM': 'utf-8'
            }, c = a0o['resolve'](a0a1['FILE_ROOT'], a);
        if (!b[eT(0x59a)](a0ae, c))
            throw new Error(b[eT(0xd23)]);
        const d = a0l['statSync'](c);
        if (d['size'] > b[eT(0xa68)](0x400, 0x400))
            throw new Error(b['dZCQT']);
        const f = a0l['readFileSync'](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0o[eT(0x2ab)](a0a1['FILE_ROOT'], c),
            'content': g ? a0w[eT(0x84e)](f) : f['toString'](b[eT(0x79a)]),
            'encoding': g ? b['iTncu'] : b['QNMiM'],
            'is_binary': g,
            'size': d[eT(0xbed)]
        };
    }
    static ['_isBinary'](a) {
        const eU = a0cm, b = {
                'PpFjL': function (c, d) {
                    return c < d;
                },
                'hubFX': function (c, d) {
                    return c === d;
                }
            };
        if (!a || a[eU(0x957)] === 0x0)
            return ![];
        for (let c = 0x0; b[eU(0x72d)](c, Math[eU(0x782)](a[eU(0x957)], 0x200)); c++) {
            if (b['hubFX'](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0cm(0x13a)](a, b, c, d = null, f = null) {
        const eV = a0cm, g = {
                'sGFJG': function (l, m) {
                    return l(m);
                },
                'ytmrm': function (l, m) {
                    return l > m;
                },
                'tTqBg': eV(0x64d),
                'mEGTD': function (l, m) {
                    return l !== m;
                },
                'cVjHf': eV(0x903),
                'IpCPA': function (l, m) {
                    return l === m;
                },
                'AKuiB': function (l, m) {
                    return l < m;
                }
            }, h = a0o['resolve'](a0a1[eV(0x999)], a);
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!g['sGFJG'](a0ae, j))
            throw new Error(eV(0x9c1));
        !a0l['existsSync'](a0o[eV(0xb2a)](j)) && a0l[eV(0xd85)](a0o['dirname'](j), { 'recursive': !![] });
        const k = a0w[eV(0x921)](c);
        if (g[eV(0xb5d)](k[eV(0x957)], a0a1[eV(0xc7a)]))
            throw new Error(g[eV(0x58e)]);
        if (g[eV(0x587)](d, null) && f !== null) {
            const l = g[eV(0x63d)](Number, d), m = g[eV(0x63d)](Number, f);
            if (Number[eV(0xcb8)](l) || Number[eV(0xcb8)](m))
                throw new Error(eV(0x82a));
            const n = a0o[eV(0x6e6)](a0o[eV(0xb2a)](j), g['cVjHf'], a0o['basename'](j));
            !a0l[eV(0xc26)](n) && a0l['mkdirSync'](n, { 'recursive': !![] });
            const o = a0o['join'](n, eV(0xa99)[eV(0x8d4)](l));
            a0l[eV(0x5ca)](o, k);
            const p = a0l[eV(0xda6)](n)['filter'](s => s[eV(0x848)](eV(0xa99))), q = p['length'], r = g['IpCPA'](q, m);
            if (r) {
                const s = a0l[eV(0x5db)](j);
                for (let u = 0x0; g[eV(0x422)](u, m); u++) {
                    const v = a0o[eV(0x6e6)](n, eV(0xa99)[eV(0x8d4)](u));
                    if (!a0l[eV(0xc26)](v)) {
                        s[eV(0x9a0)]();
                        throw new Error(eV(0x1d1)[eV(0x8d4)](u));
                    }
                    s[eV(0x21d)](a0l[eV(0x220)](v));
                }
                s[eV(0x9d9)]();
                const t = a0o[eV(0xb2a)](n);
                a0l[eV(0x617)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l['rmdirSync'](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[eV(0x2ab)](a0a1[eV(0x999)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[eV(0x5ca)](j, k), {
            'status': 'ok',
            'path': a0o[eV(0x2ab)](a0a1['FILE_ROOT'], j),
            'received': k['length'],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async [a0cm(0x3b0)](a, b, c, d = null, f = null) {
        const eW = a0cm, g = {
                'lIjZr': function (k, l) {
                    return k || l;
                },
                'nvfGW': function (k, l) {
                    return k(l);
                },
                'EGqaz': eW(0x9c1),
                'LDpqQ': function (k, l) {
                    return k > l;
                },
                'dFFFB': function (k, l) {
                    return k !== l;
                },
                'zaJvj': eW(0x82a),
                'mvoPF': function (k, l) {
                    return k === l;
                },
                'YOWyc': function (k, l) {
                    return k < l;
                },
                'xtGJv': eW(0xd43),
                'sGrXA': eW(0x91f)
            }, h = a0o[eW(0x138)](a0a1[eW(0x999)], g['lIjZr'](a, '.'));
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!g[eW(0x176)](a0ae, j))
            throw new Error(g['EGqaz']);
        !a0l[eW(0xc26)](a0o[eW(0xb2a)](j)) && a0l[eW(0xd85)](a0o[eW(0xb2a)](j), { 'recursive': !![] });
        if (g[eW(0x2e1)](c[eW(0x957)], a0a1['MAX_UPLOAD_SIZE']))
            throw new Error(eW(0x64d));
        if (g[eW(0x777)](d, null) && g[eW(0x777)](f, null)) {
            const k = g[eW(0x176)](Number, d), l = g[eW(0x176)](Number, f);
            if (Number[eW(0xcb8)](k) || Number[eW(0xcb8)](l))
                throw new Error(g['zaJvj']);
            const m = a0o[eW(0x6e6)](a0o[eW(0xb2a)](j), '.upload_chunks', a0o[eW(0x27c)](j));
            !a0l[eW(0xc26)](m) && a0l[eW(0xd85)](m, { 'recursive': !![] });
            const n = a0o[eW(0x6e6)](m, eW(0xa99)[eW(0x8d4)](k));
            a0l[eW(0x5ca)](n, c);
            const o = a0l['readdirSync'](m)[eW(0x781)](r => r[eW(0x848)](eW(0xa99))), p = o[eW(0x957)], q = g[eW(0x639)](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; g['YOWyc'](t, l); t++) {
                    const u = a0o[eW(0x6e6)](m, eW(0xa99)[eW(0x8d4)](t));
                    if (!a0l[eW(0xc26)](u))
                        throw new Error(eW(0x1d1)[eW(0x8d4)](t));
                    r[eW(0xd32)](a0l[eW(0x220)](u));
                }
                a0l[eW(0x5ca)](j, Buffer[eW(0x8d4)](r));
                const s = a0o[eW(0xb2a)](m);
                a0l[eW(0x617)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[eW(0x436)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[eW(0x2ab)](a0a1['FILE_ROOT'], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[eW(0xc1a)]
                };
            }
            return {
                'status': 'ok',
                'path': a0o[eW(0x2ab)](a0a1[eW(0x999)], j),
                'chunk_id': k,
                'completed': ![],
                'message': eW(0x742)['concat'](k, eW(0x56f))
            };
        }
        return a0l[eW(0x5ca)](j, c), {
            'status': 'ok',
            'path': a0o[eW(0x2ab)](a0a1[eW(0x999)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[eW(0xb1f)]
        };
    }
    static async ['downloadFile'](a) {
        const eX = a0cm, b = {
                'UpsrU': eX(0x9c1),
                'HHsgw': eX(0x2b6)
            }, c = a0o['resolve'](a0a1['FILE_ROOT'], a);
        if (!a0ae(c))
            throw new Error(b[eX(0x5dd)]);
        if (!a0l['existsSync'](c))
            throw new Error(b[eX(0x274)]);
        const d = a0l['statSync'](c), f = await a0l[eX(0x4d1)][eX(0x3ac)](c);
        return {
            'path': a0o[eX(0x2ab)](a0a1[eX(0x999)], c),
            'content': f,
            'size': d[eX(0xbed)]
        };
    }
    static async [a0cm(0x36e)](a) {
        const eY = a0cm, b = {
                'FpNea': function (d, f) {
                    return d(f);
                },
                'xjaAG': eY(0xb9d),
                'buflY': eY(0x6c5),
                'BILeR': eY(0x716),
                'QKJOA': eY(0x120)
            }, c = [];
        for (const d of a) {
            const f = a0o['resolve'](a0a1['FILE_ROOT'], d);
            if (!b[eY(0xf2)](a0ae, f)) {
                c[eY(0xd32)]({
                    'path': d,
                    'status': b['xjaAG']
                });
                continue;
            }
            try {
                if (a0l[eY(0xc26)](f)) {
                    const g = a0l[eY(0x73c)](f);
                    g[eY(0x2d4)]() ? a0l[eY(0x617)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[eY(0x704)](f), c[eY(0xd32)]({
                        'path': d,
                        'status': b['buflY']
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b[eY(0xa74)]
                    });
            } catch (h) {
                c[eY(0xd32)]({
                    'path': d,
                    'status': b['QKJOA'],
                    'message': h[eY(0x8d0)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const eZ = a0cm, b = {
                'BZpAp': function (d, f) {
                    return d(f);
                },
                'RLwYl': function (d, f) {
                    return d(f);
                },
                'kapyV': eZ(0xb9d),
                'lCqUd': eZ(0x120)
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0o['resolve'](a0a1[eZ(0x999)], d), h = a0o[eZ(0x138)](a0a1[eZ(0x999)], f);
            if (!b[eZ(0xa09)](a0ae, g) || !b['RLwYl'](a0ae, h)) {
                c[eZ(0xd32)]({
                    'from': d,
                    'to': f,
                    'status': b[eZ(0x5fe)]
                });
                continue;
            }
            try {
                const i = a0o[eZ(0xb2a)](h);
                !a0l[eZ(0xc26)](i) && a0l['mkdirSync'](i, { 'recursive': !![] }), a0l[eZ(0x22d)](g, h), c[eZ(0xd32)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[eZ(0x4e2)],
                    'message': j[eZ(0x8d0)]
                });
            }
        }
        return c;
    }
    static async [a0cm(0x974)](a) {
        const f0 = a0cm, b = {
                'jBzRy': function (d, f, g) {
                    return d(f, g);
                },
                'YFRPL': function (d, f) {
                    return d(f);
                },
                'RIpAT': 'access_denied',
                'zXlwv': f0(0x716),
                'thOGk': 'error'
            }, c = [];
        for (const [d, f] of Object[f0(0x207)](a)) {
            const g = a0o[f0(0x138)](a0a1[f0(0x999)], d), h = a0o[f0(0x138)](a0a1[f0(0x999)], f);
            if (!a0ae(g) || !b['YFRPL'](a0ae, h)) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[f0(0x707)]
                });
                continue;
            }
            try {
                if (!a0l['existsSync'](g)) {
                    c[f0(0xd32)]({
                        'from': d,
                        'to': f,
                        'status': b[f0(0xc90)]
                    });
                    continue;
                }
                const i = a0o[f0(0xb2a)](h);
                !a0l['existsSync'](i) && a0l['mkdirSync'](i, { 'recursive': !![] });
                const j = a0l[f0(0x73c)](g);
                if (j['isDirectory']()) {
                    if (a0l[f0(0x731)])
                        a0l['cpSync'](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const f1 = f0;
                            if (a0l[f1(0x73c)](l)[f1(0x2d4)]()) {
                                if (!a0l[f1(0xc26)](m))
                                    a0l['mkdirSync'](m, { 'recursive': !![] });
                                for (const n of a0l[f1(0xda6)](l)) {
                                    b['jBzRy'](k, a0o[f1(0x6e6)](l, n), a0o[f1(0x6e6)](m, n));
                                }
                            } else
                                a0l[f1(0x689)](l, m);
                        };
                        b[f0(0x6bb)](k, g, h);
                    }
                } else
                    a0l['copyFileSync'](g, h);
                c[f0(0xd32)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b['thOGk'],
                    'message': l[f0(0x8d0)]
                });
            }
        }
        return c;
    }
    static async [a0cm(0x38a)](a) {
        const f2 = a0cm, b = {
                'fyyGa': function (d, f) {
                    return d(f);
                },
                'ZzIyb': f2(0x9c1)
            }, c = a0o[f2(0x138)](a0a1[f2(0x999)], a);
        if (!b['fyyGa'](a0ae, c))
            throw new Error(b[f2(0xb9f)]);
        return a0l['mkdirSync'](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[f2(0x2ab)](a0a1[f2(0x999)], c)
        };
    }
    static [a0cm(0x2fe)](a) {
        const f3 = a0cm;
        return a0o[f3(0x2ab)](a0a1[f3(0x999)], a) || '.';
    }
    static async [a0cm(0x4b7)](a, b, c = ![]) {
        const f4 = a0cm, d = {
                'aXYvP': f4(0x292),
                'jdNRf': function (k, l) {
                    return k(l);
                },
                'Lfbjb': 'Access\x20denied:\x20path\x20outside\x20root',
                'jPvrI': function (k, l) {
                    return k || l;
                },
                'CHJxE': function (k, l, m) {
                    return k(l, m);
                },
                'IvQwV': f4(0x120),
                'Cwvus': f4(0x6f8)
            };
        if (!a)
            throw new Error(d['aXYvP']);
        if (!Array[f4(0xbfe)](b) || b['length'] === 0x0)
            throw new Error(f4(0x94a));
        const f = a0o['resolve'](a0a1['FILE_ROOT'], a);
        if (!d['jdNRf'](a0ae, f))
            throw new Error(d[f4(0xb5c)]);
        if (a0l[f4(0xc26)](f) && a0l[f4(0x73c)](f)[f4(0x2d4)]())
            throw new Error(f4(0x4a7)[f4(0x8d4)](a));
        a0l['mkdirSync'](a0o['dirname'](f), { 'recursive': !![] });
        if (a0l['existsSync'](f))
            a0l[f4(0x704)](f);
        const g = a0af[f4(0x153)](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h[f4(0xd32)]({
                    'item': k,
                    'status': f4(0xb67),
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[f4(0x138)](a0a1['FILE_ROOT'], d['jPvrI'](k, ''));
            try {
                if (!a0ae(l)) {
                    h['push']({
                        'item': k,
                        'status': f4(0x120),
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[f4(0xc26)](l)) {
                    h['push']({
                        'item': k,
                        'status': 'not_found',
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l['statSync'](l);
                let n = 0x0, o = ![];
                if (m[f4(0x384)]()) {
                    if (!g['add'](a0o[f4(0x27c)](l), a0l[f4(0x220)](l), m[f4(0xb28)])) {
                        j = !![], h[f4(0xd32)]({
                            'item': k,
                            'status': 'skipped',
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[f4(0x2d4)]()) {
                        const p = a0o[f4(0x27c)](l), q = (r, s) => {
                                const f5 = f4;
                                for (const t of a0l[f5(0xda6)](r)) {
                                    const u = a0o[f5(0x6e6)](r, t), v = s ? ''[f5(0x8d4)](s, '/')[f5(0x8d4)](t) : t, w = a0l[f5(0x73c)](u);
                                    if (w[f5(0x2d4)]()) {
                                        if (!g[f5(0x8e1)](''[f5(0x8d4)](v, '/'), Buffer[f5(0x66e)](0x0), w[f5(0xb28)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        q(u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[f5(0x384)]()) {
                                            if (!g[f5(0x8e1)](v, a0l[f5(0x220)](u), w[f5(0xb28)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d['CHJxE'](q, l, c ? '' : p);
                    } else {
                        h[f4(0xd32)]({
                            'item': k,
                            'status': d[f4(0x7f2)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[f4(0xd32)]({
                        'item': k,
                        'status': d['Cwvus'],
                        'added': n
                    });
                    continue;
                }
                i += n, h[f4(0xd32)]({
                    'item': k,
                    'status': 'ok',
                    'added': n
                });
            } catch (r) {
                h['push']({
                    'item': k,
                    'status': d['IvQwV'],
                    'added': 0x0
                });
            }
        }
        return g[f4(0x9a0)](), {
            'status': 'ok',
            'path': a0ag['_displayPath'](f),
            'entries': i,
            'size': a0l[f4(0xc26)](f) ? a0l[f4(0x73c)](f)[f4(0xbed)] : 0x0,
            'results': h
        };
    }
    static async ['unzipArchive'](a, b, c = !![], d = null) {
        const f6 = a0cm, f = {
                'uTUlj': f6(0x292),
                'kxDhQ': function (p, q) {
                    return p(q);
                },
                'dnbVz': f6(0x9c1),
                'wvlrk': function (p, q) {
                    return p >= q;
                },
                'MpLaL': function (p, q) {
                    return p + q;
                },
                'vOQUl': function (p, q) {
                    return p >= q;
                },
                'tJbkz': function (p, q) {
                    return p > q;
                },
                'EdVPS': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f[f6(0x203)]);
        const g = a0o[f6(0x138)](a0a1['FILE_ROOT'], a);
        if (!f['kxDhQ'](a0ae, g))
            throw new Error(f[f6(0xa9c)]);
        if (!a0l['existsSync'](g))
            throw new Error(f6(0xc8f)[f6(0x8d4)](a));
        if (a0l['statSync'](g)[f6(0x2d4)]())
            throw new Error(f6(0xbdc)[f6(0x8d4)](a));
        let h;
        if (b) {
            h = a0o['resolve'](a0a1[f6(0x999)], b);
            if (!a0ae(h))
                throw new Error(f[f6(0xa9c)]);
            if (a0l[f6(0xc26)](h) && !a0l['statSync'](h)[f6(0x2d4)]())
                throw new Error(f6(0x859)[f6(0x8d4)](b));
        } else
            h = a0o[f6(0xb2a)](g);
        a0l[f6(0xd85)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0af[f6(0x599)](g);
        } catch (p) {
            throw new Error('Not\x20a\x20zip\x20file:\x20'[f6(0x8d4)](a));
        }
        const j = (d || [])[f6(0x781)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[f6(0x967)])
                continue;
            if (f['wvlrk'](f[f6(0x58b)](k, l), a0af[f6(0x3e0)]) || f[f6(0x945)](m, a0af[f6(0xb36)])) {
                l++;
                continue;
            }
            const r = q[f6(0xc1c)]['replace'](/\\/g, '/');
            if (j[f6(0x957)]) {
                const v = r[f6(0x31d)]('/')[f6(0xb0e)]();
                if (!j['includes'](r) && !j[f6(0x8b8)](v)) {
                    l++;
                    continue;
                }
            }
            if (q['encrypted'] || q[f6(0x68b)] || f[f6(0xd0e)](f[f6(0x58b)](m, q[f6(0xbed)]), a0af[f6(0xb36)])) {
                l++;
                continue;
            }
            const s = a0o['resolve'](h, r), t = a0o[f6(0x2ab)](h, s);
            if (t[f6(0x848)]('..') || a0o['isAbsolute'](t)) {
                l++;
                continue;
            }
            if (!a0ae(s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0af[f6(0x82e)](q);
            } catch (w) {
                l++;
                continue;
            }
            if (a0af[f6(0xac9)](u) !== q[f6(0x5f4)]) {
                l++;
                continue;
            }
            if (!c && a0l['existsSync'](s)) {
                l++;
                continue;
            }
            try {
                a0l['mkdirSync'](a0o[f6(0xb2a)](s), { 'recursive': !![] }), a0l[f6(0x5ca)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[f6(0xbed)], f[f6(0x130)](n['length'], a0af['ZIP_MAX_LISTED_FILES']) ? n['push'](a0ag['_displayPath'](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0ag[f6(0x2fe)](g),
            'dest': a0ag[f6(0x2fe)](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0ah {
    static [a0cm(0xa69)] = a0cm(0xcc8);
    static [a0cm(0x9a8)] = 0x1;
    static [a0cm(0xb32)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static ['homeDir']() {
        const f7 = a0cm;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[f7(0xc26)](a))
                return a;
        }
        try {
            return a0p['homedir']() || process['cwd']();
        } catch (b) {
            return process[f7(0x82f)]();
        }
    }
    static ['parseKey'](a) {
        const f8 = a0cm, b = {
                'WReMG': function (c, d) {
                    return c === d;
                },
                'HLlcY': f8(0x8a1),
                'XvpLs': function (c, d) {
                    return c === d;
                }
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/[f8(0x252)](a)) {
                const d = Buffer[f8(0x2dc)](a, f8(0x6f4));
                return b[f8(0x485)](d[f8(0x957)], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/[f8(0x252)](a))
                return null;
            const c = Buffer[f8(0x2dc)](a, b[f8(0x387)]);
            return b[f8(0x5e1)](c['length'], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0cm(0xa77)]() {
        const f9 = a0cm, a = {
                'HYDEa': 'none',
                'IfIeK': f9(0x71a),
                'aetOl': f9(0x12f),
                'ekEKX': '.tmp',
                'ULhCJ': f9(0x166),
                'NcjvX': f9(0x6af)
            }, b = a0ah[f9(0xb32)];
        let c = (process.env.KSTORE || '')['trim']();
        if ([
                f9(0x286),
                '0',
                a['HYDEa'],
                a[f9(0x983)]
            ][f9(0x8b8)](c[f9(0x2ca)]()))
            return a0P[f9(0x2da)](a[f9(0x840)]), b;
        const d = (process.env.KSTORE_KEY || '')['trim']();
        !c && (c = a0o[f9(0x6e6)](a0ah[f9(0x5a0)](), a['ekEKX'], a[f9(0x536)]));
        const f = a0ah['parseKey'](d);
        if (!f) {
            if (d)
                a0P[f9(0x120)](a[f9(0xa35)]);
            else
                a0P['info'](f9(0x58d));
            return b;
        }
        return b[f9(0x42c)] = c, b[f9(0x4c6)] = f, b[f9(0x727)] = !![], a0P[f9(0x2da)](f9(0x11e)[f9(0x8d4)](b[f9(0x42c)])), b;
    }
    static [a0cm(0x702)](a, b) {
        const fa = a0cm, c = {
                'IKkNW': 'aes-256-gcm',
                'jcFQE': fa(0xa3e),
                'HvuNF': 'base64'
            }, d = a0k[fa(0x27e)](0xc), f = a0k[fa(0xbcb)](c[fa(0xa5d)], a, d), g = Buffer[fa(0x8d4)]([
                f[fa(0xabf)](Buffer[fa(0x2dc)](b, c[fa(0x408)])),
                f[fa(0x57d)]()
            ]), h = {
                'nonce': d[fa(0x4a4)]('base64'),
                'tag': f[fa(0x1a4)]()[fa(0x4a4)](c[fa(0xbb4)]),
                'ciphertext': g[fa(0x4a4)](c[fa(0xbb4)])
            };
        return Buffer[fa(0x2dc)](JSON[fa(0xd7b)](h), c['jcFQE'])[fa(0x4a4)]('base64');
    }
    static [a0cm(0x105)](a, b) {
        const fb = a0cm, c = {
                'RxnHs': fb(0x8a1),
                'JzPgz': fb(0x5b9),
                'KnjLz': 'aes-256-gcm',
                'paGNy': 'utf8'
            }, d = JSON['parse'](Buffer[fb(0x2dc)](b, c['RxnHs'])[fb(0x4a4)](fb(0xa3e)));
        if (!d['nonce'] || !d[fb(0x8ac)] || !d[fb(0xd41)])
            throw new Error(c[fb(0x3b3)]);
        const f = a0k['createDecipheriv'](c[fb(0xa45)], a, Buffer['from'](d[fb(0xb15)], c['RxnHs']));
        return f[fb(0x651)](Buffer[fb(0x2dc)](d[fb(0x8ac)], c['RxnHs'])), Buffer[fb(0x8d4)]([
            f[fb(0xabf)](Buffer[fb(0x2dc)](d['ciphertext'], c[fb(0x637)])),
            f['final']()
        ])[fb(0x4a4)](c[fb(0x20c)]);
    }
    static ['load']() {
        const fc = a0cm, a = {
                'aiMuQ': fc(0xa3e),
                'JNGFT': function (c, d) {
                    return c !== d;
                },
                'rccYa': fc(0x330),
                'UctMS': function (c, d, f) {
                    return c(d, f);
                },
                'IiOCg': function (c, d) {
                    return c > d;
                },
                'ChjSF': function (c, d) {
                    return c !== d;
                },
                'GHxUx': function (c, d) {
                    return c(d);
                },
                'SMFiQ': function (c, d) {
                    return c(d);
                }
            }, b = a0ah['state'];
        if (!b[fc(0x727)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[fc(0xc26)](b[fc(0x42c)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l['readFileSync'](b[fc(0x42c)], a[fc(0xcb7)])[fc(0x7a0)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON['parse'](a0ah[fc(0x105)](b[fc(0x4c6)], c));
            } catch (j) {
                throw new Error('解密失败\x20(密钥错误或数据被篡改):\x20'[fc(0x8d4)](j['message']));
            }
            if (!d || a[fc(0x376)](d['magic'], a0ah[fc(0xa69)]))
                throw new Error(a[fc(0x8ef)]);
            const f = a[fc(0x34c)](parseInt, d[fc(0x28f)], 0xa) || 0x0;
            if (a[fc(0x45f)](f, a0ah[fc(0x9a8)]))
                return b['locked'] = !![], a0P[fc(0x120)](fc(0x14c)['concat'](f, fc(0x345))[fc(0x8d4)](a0ah[fc(0x9a8)], ',\x20保留原文件不覆盖,\x20本次以空任务启动且持久化只读')), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a['ChjSF'](f, a0ah[fc(0x9a8)]))
                throw new Error(fc(0x535)[fc(0x8d4)](f));
            const g = d['data'] || {};
            b[fc(0xa05)] = d[fc(0x930)] || null;
            const h = Array[fc(0xbfe)](g[fc(0xb18)]) ? g[fc(0xb18)][fc(0xc39)](String) : [], i = {};
            for (const [l, m] of Object[fc(0x207)](g[fc(0xdf)] || {}))
                i[a[fc(0xc63)](String, l)] = a[fc(0xd77)](String, m);
            return a0P[fc(0x2da)](fc(0x4f0)[fc(0x8d4)](h[fc(0x957)], fc(0x682))['concat'](Object[fc(0x465)](i)[fc(0x957)])), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0ah[fc(0x29e)]('加载失败:\x20'['concat'](n['message'])), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static ['quarantine'](a) {
        const fd = a0cm;
        try {
            const b = a0ah[fd(0xb32)];
            if (b[fd(0x42c)] && a0l['existsSync'](b[fd(0x42c)])) {
                const c = ''[fd(0x8d4)](b['path'], fd(0x200))[fd(0x8d4)](Date[fd(0x29a)]());
                a0l[fd(0x22d)](b[fd(0x42c)], c), a0P['error']('[TaskStore]\x20❌\x20'[fd(0x8d4)](a, fd(0x674))[fd(0x8d4)](c));
            } else
                a0P[fd(0x120)](fd(0x5a7)['concat'](a));
        } catch (d) {
            a0P[fd(0x120)](fd(0x5a7)['concat'](a, fd(0x95d))[fd(0x8d4)](d[fd(0x8d0)]));
        }
    }
    static [a0cm(0x2b5)](a, b) {
        const fe = a0cm, c = { 'KiUTK': fe(0xa3e) }, d = a0ah[fe(0xb32)];
        if (!d[fe(0x727)] || d[fe(0x8a4)])
            return ![];
        let f = null;
        try {
            const g = {
                    'magic': a0ah[fe(0xa69)],
                    'version': a0ah[fe(0x9a8)],
                    'saved_at': new Date()[fe(0x455)]()[fe(0x978)](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {}
                    }
                }, h = a0ah['encrypt'](d[fe(0x4c6)], JSON[fe(0xd7b)](g));
            return a0l['mkdirSync'](a0o[fe(0xb2a)](d[fe(0x42c)]), { 'recursive': !![] }), f = ''[fe(0x8d4)](d[fe(0x42c)], '.tmp-')[fe(0x8d4)](process['pid']), a0l['writeFileSync'](f, h, c[fe(0x88f)]), a0l[fe(0x22d)](f, d[fe(0x42c)]), d['lastSavedAt'] = g[fe(0x930)], !![];
        } catch (i) {
            a0P[fe(0x120)](fe(0xc23)[fe(0x8d4)](i['message']));
            try {
                if (f && a0l[fe(0xc26)](f))
                    a0l['unlinkSync'](f);
            } catch (j) {
            }
            return ![];
        }
    }
}
class a0ai {
    static [a0cm(0x7d1)] = new Map();
    static ['_appendLog'](a, b) {
        const ff = a0cm, c = {
                'zPQvI': function (d, f) {
                    return d - f;
                }
            };
        a[ff(0xd32)](b), a[ff(0x957)] > a0a1['MAX_TASK_LOG_SIZE'] && a[ff(0x2f2)](0x0, c[ff(0x9da)](a[ff(0x957)], a0a1['MAX_TASK_LOG_SIZE']));
    }
    static [a0cm(0xcc6)](a, b, c, d, f = null) {
        const fg = a0cm, g = new Date()['toISOString']();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': ''[fg(0x8d4)](g, '\x20----\x20')[fg(0x8d4)](a, fg(0xc83))[fg(0x8d4)](c, '\x0a')[fg(0x8d4)](b?.['trim']() || '')
        };
    }
    static [a0cm(0x538)]() {
        const fh = a0cm;
        return {
            'status': 'ok',
            'count': a0a1[fh(0xb18)]['length'],
            'tasks': a0a1[fh(0xb18)]
        };
    }
    static [a0cm(0x966)] = /^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$/i;
    static ['parseTaskMeta'](a) {
        const fi = a0cm, b = {
                'ZoqTs': function (d, f) {
                    return d ?? f;
                },
                'vcCdP': function (d, f) {
                    return d(f);
                }
            }, c = String(b[fi(0x333)](a, ''))[fi(0x31d)]('\x0a')['slice'](0x0, 0x3);
        for (const d of c) {
            const f = a0ai[fi(0x966)][fi(0x8ee)](d);
            if (!f)
                continue;
            const g = /\bid=(\d+)\b/[fi(0x8ee)](f[0x1])?.[0x1];
            if (!g)
                return null;
            const h = b['vcCdP'](Number, /\bupdated=(\d+)\b/[fi(0x8ee)](f[0x1])?.[0x1] || 0x0);
            return {
                'id': g,
                'updated': h
            };
        }
        return null;
    }
    static [a0cm(0xd59)](a) {
        const fj = a0cm, b = {
                'fmOPl': function (d, f) {
                    return d(f);
                },
                'BmVqI': function (d, f) {
                    return d ?? f;
                },
                'KooCE': function (d, f) {
                    return d + f;
                }
            }, c = b['fmOPl'](String, b['BmVqI'](a, ''))[fj(0x31d)]('\x0a');
        for (let d = 0x0; d < Math[fj(0x782)](0x3, c[fj(0x957)]); d++) {
            if (a0ai[fj(0x966)][fj(0x252)](c[d]))
                return [
                    ...c['slice'](0x0, d),
                    ...c['slice'](b[fj(0x446)](d, 0x1))
                ][fj(0x6e6)]('\x0a');
        }
        return b[fj(0x371)](String, b[fj(0x956)](a, ''));
    }
    static ['withTaskMeta'](a, b, c) {
        const fk = a0cm, d = {
                'zrhoK': fk(0x3fb),
                'FyAjX': fk(0x922)
            }, f = a0ai[fk(0xd59)](a), g = process[fk(0x592)] === d[fk(0xadc)] ? d[fk(0xcc1)] : '#', h = ''['concat'](g, '\x20kisama-task:\x20id=')['concat'](b, fk(0x8f9))[fk(0x8d4)](c), i = f[fk(0x31d)]('\x0a');
        return i['splice'](i[0x0]?.[fk(0x848)]('#!') ? 0x1 : 0x0, 0x0, h), i[fk(0x6e6)]('\x0a');
    }
    static [a0cm(0x3ed)](a, b) {
        const fl = a0cm, c = {
                'qMywD': function (j, k) {
                    return j(k);
                },
                'cFtrO': function (j, k) {
                    return j < k;
                },
                'KWywx': function (j, k) {
                    return j === k;
                }
            }, d = Date[fl(0x29a)](), f = j => (j || [])[fl(0xc39)](k => ({
                'raw': String(k ?? ''),
                'meta': a0ai[fl(0xd68)](k),
                'eff': a0ai[fl(0xd59)](k)[fl(0x7a0)]()
            })), g = f(b), h = new Set(), i = [];
        for (const {
                    raw: j,
                    meta: k,
                    eff: l
                } of c[fl(0x85a)](f, a)) {
            let m = -0x1;
            k && (m = g[fl(0x82c)]((p, q) => !h[fl(0x47b)](q) && p[fl(0x9dd)] && p[fl(0x9dd)]['id'] === k['id']));
            m < 0x0 && (m = g[fl(0x82c)]((p, q) => !h[fl(0x47b)](q) && p['eff'] === l && (!k || !p[fl(0x9dd)])));
            if (c[fl(0xd6b)](m, 0x0)) {
                i[fl(0xd32)](a0ai['withTaskMeta'](l, String(d), d));
                continue;
            }
            const n = g[m];
            h[fl(0x8e1)](m);
            if (c[fl(0x46e)](n[fl(0x714)], l)) {
                n[fl(0x9dd)] ? i[fl(0xd32)](a0ai[fl(0x61b)](n[fl(0x8fb)], n[fl(0x9dd)]['id'], n['meta'][fl(0x2cc)])) : i[fl(0xd32)](a0ai[fl(0x61b)](n[fl(0x8fb)], k ? k['id'] : String(d), k && k['updated'] ? k[fl(0x2cc)] : d));
                continue;
            }
            const o = n[fl(0x9dd)] ? n[fl(0x9dd)]['id'] : k ? k['id'] : String(d);
            i['push'](a0ai[fl(0x61b)](l, o, d));
        }
        return i;
    }
    static [a0cm(0x3ca)](a, b) {
        const fm = a0cm, c = {
                'QzCeU': function (j, k) {
                    return j < k;
                },
                'JyajS': function (j, k) {
                    return j < k;
                },
                'HTKvW': function (j, k) {
                    return j(k);
                },
                'dnTbB': function (j, k) {
                    return j === k;
                },
                'RLYjG': function (j, k) {
                    return j(k);
                }
            }, d = Date['now'](), f = ([j, k]) => ({
                'expr': String(j),
                'raw': String(k ?? ''),
                'meta': a0ai[fm(0xd68)](k),
                'eff': a0ai[fm(0xd59)](k)['trim']()
            }), g = Object[fm(0x207)](b || {})[fm(0xc39)](f), h = new Set(), i = {};
        for (const {
                    expr: j,
                    raw: k,
                    meta: l,
                    eff: m
                } of Object[fm(0x207)](a || {})[fm(0xc39)](f)) {
            let n = -0x1;
            l && (n = g[fm(0x82c)]((q, r) => !h[fm(0x47b)](r) && q['meta'] && q[fm(0x9dd)]['id'] === l['id']));
            c['QzCeU'](n, 0x0) && (n = g[fm(0x82c)]((q, r) => !h[fm(0x47b)](r) && q[fm(0xcb2)] === j && q[fm(0x714)] === m && (!l || !q[fm(0x9dd)])));
            if (c[fm(0xb70)](n, 0x0)) {
                i[j] = a0ai[fm(0x61b)](m, c[fm(0x635)](String, d), d);
                continue;
            }
            const o = g[n];
            h[fm(0x8e1)](n);
            if (c[fm(0x8d6)](o[fm(0x714)], m) && c[fm(0x8d6)](o[fm(0xcb2)], j)) {
                o[fm(0x9dd)] ? i[j] = a0ai[fm(0x61b)](o[fm(0x8fb)], o['meta']['id'], o[fm(0x9dd)][fm(0x2cc)]) : i[j] = a0ai[fm(0x61b)](o[fm(0x8fb)], l ? l['id'] : String(d), l && l[fm(0x2cc)] ? l['updated'] : d);
                continue;
            }
            const p = o[fm(0x9dd)] ? o[fm(0x9dd)]['id'] : l ? l['id'] : c['RLYjG'](String, d);
            i[j] = a0ai[fm(0x61b)](m, p, d);
        }
        return i;
    }
    static async [a0cm(0xcac)](a) {
        const fn = a0cm, b = {
                'mTixp': function (d, f) {
                    return d > f;
                },
                'UClcx': function (d, f) {
                    return d < f;
                },
                'VVVgG': fn(0xa27),
                'AmwKW': function (d, f) {
                    return d === f;
                },
                'hzgYI': fn(0x120)
            };
        a0a1[fn(0xb18)] = a && b[fn(0x9cf)](a[fn(0x957)], 0x0) ? a0ai[fn(0x3ed)](a, a0a1[fn(0xb18)]) : [];
        const c = [];
        if (a0a1[fn(0x1ea)] && b[fn(0x9cf)](a0a1[fn(0xb18)][fn(0x957)], 0x0)) {
            for (let d = 0x0; b[fn(0x56d)](d, a0a1[fn(0xb18)][fn(0x957)]); d++) {
                const f = a0a1[fn(0xb18)][d], g = await a0ad[fn(0x379)](f), h = this['_formatLogEntry'](f, g['result'], g[fn(0xcc9)], b[fn(0x33b)]);
                this[fn(0x1be)](a0a1[fn(0x51e)], h), c['push']({
                    'index': d,
                    'cmd': f,
                    'exitcode': g['exitcode'],
                    'output': g[fn(0xb88)],
                    'status': b[fn(0xd9e)](g[fn(0xcc9)], 0x0) ? 'ok' : b['hzgYI']
                });
            }
            a0a1['InitTask'] = ![];
        }
        return {
            'status': 'ok',
            'count': a0a1[fn(0xb18)]['length'],
            'tasks': a0a1[fn(0xb18)],
            'executed': c,
            'persisted': a0ah['save'](a0a1[fn(0xb18)], a0a1[fn(0xdf)])
        };
    }
    static ['getCronTasks']() {
        const fo = a0cm;
        return {
            'status': 'ok',
            'count': Object[fo(0x465)](a0a1[fo(0xdf)])[fo(0x957)],
            'tasks': a0a1[fo(0xdf)]
        };
    }
    static [a0cm(0x210)](a) {
        const fp = a0cm, b = {
                'nWePt': fp(0xa2a),
                'YseQb': fp(0x37a),
                'ACdcc': function (d, f) {
                    return d > f;
                },
                'bapbU': fp(0x120)
            };
        this['cronJobs'][fp(0xb0a)](d => {
            const fq = fp;
            typeof d[fq(0x18d)] === fq(0xa2a) && d['stop'](), typeof d[fq(0x958)] === b[fq(0xb01)] && d['destroy']();
        }), this[fp(0x7d1)][fp(0x41f)]();
        const c = [];
        for (const d of Object['keys'](a || {})) {
            !a0t[fp(0x335)](d) && c['push'](d);
        }
        if (b[fp(0x75e)](c[fp(0x957)], 0x0))
            return {
                'status': b[fp(0x3c2)],
                'message': fp(0x876)[fp(0x8d4)](c['join'](',\x20')),
                'valid_count': Object[fp(0x465)](a || {})['length'] - c[fp(0x957)]
            };
        a0a1[fp(0xdf)] = a && b[fp(0x75e)](Object[fp(0x465)](a)[fp(0x957)], 0x0) ? a0ai['normalizeCronTasks'](a, a0a1[fp(0xdf)]) : {};
        for (const [f, g] of Object['entries'](a0a1['crontasks'])) {
            const h = a0t[fp(0xbfa)](f, async () => {
                const fr = fp, i = await a0ad[fr(0x379)](g), j = this[fr(0xcc6)](g, i[fr(0xb88)], i[fr(0xcc9)], b[fr(0xa75)], f);
                this[fr(0x1be)](a0a1[fr(0x949)], j);
            });
            this[fp(0x7d1)][fp(0xb2b)](f, h);
        }
        return a0a1[fp(0x4c5)] = b[fp(0x75e)](Object[fp(0x465)](a0a1[fp(0xdf)])[fp(0x957)], 0x0), {
            'status': 'ok',
            'count': Object[fp(0x465)](a0a1['crontasks'])[fp(0x957)],
            'tasks': a0a1[fp(0xdf)],
            'persisted': a0ah[fp(0x2b5)](a0a1[fp(0xb18)], a0a1['crontasks'])
        };
    }
    static [a0cm(0x719)]() {
        const ft = a0cm;
        return {
            'onetime': {
                'pending': a0a1[ft(0x1ea)],
                'count': a0a1[ft(0xb18)][ft(0x957)]
            },
            'cron': {
                'active': a0a1[ft(0x4c5)],
                'count': Object[ft(0x465)](a0a1['crontasks'])[ft(0x957)],
                'check_interval': a0a1['CRON_CHECK_INTERVAL']
            },
            'persistence': {
                'enabled': a0ah[ft(0xb32)][ft(0x727)],
                'store_path': a0ah[ft(0xb32)]['path'],
                'last_saved_at': a0ah['state'][ft(0xa05)]
            }
        };
    }
    static [a0cm(0x57e)](a = 0x32) {
        const fu = a0cm, b = a0a1[fu(0x51e)][fu(0x519)](-a);
        return {
            'status': 'ok',
            'count': b[fu(0x957)],
            'logs': b
        };
    }
    static [a0cm(0x712)](a = 0x32) {
        const fv = a0cm, b = a0a1[fv(0x949)][fv(0x519)](-a);
        return {
            'status': 'ok',
            'count': b[fv(0x957)],
            'logs': b
        };
    }
    static [a0cm(0xb6d)]() {
        const fw = a0cm, a = { 'gfhdT': 'onetime' }, b = a0a1[fw(0x51e)][fw(0x957)];
        return a0a1[fw(0x51e)] = [], {
            'status': 'ok',
            'cleared': a[fw(0xd8f)]
        };
    }
    static ['clearCronLogs']() {
        const fx = a0cm, a = { 'pZxmW': fx(0x37a) }, b = a0a1[fx(0x949)][fx(0x957)];
        return a0a1['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a[fx(0x772)]
        };
    }
    static [a0cm(0xeb)]() {
        const fy = a0cm, a = {
                'XMHQV': function (g, h) {
                    return g - h;
                }
            }, b = a0a1[fy(0x51e)]['filter'](g => g[fy(0xcc9)] === 0x0)[fy(0x957)], c = a['XMHQV'](a0a1[fy(0x51e)][fy(0x957)], b), d = a0a1[fy(0x949)]['filter'](g => g['exitcode'] === 0x0)[fy(0x957)], f = a[fy(0xbe3)](a0a1['crontasks_log']['length'], d);
        return {
            'onetime': {
                'total_logged': a0a1[fy(0x51e)][fy(0x957)],
                'max_capacity': a0a1[fy(0xa60)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0a1['crontasks_log']['length'],
                'max_capacity': a0a1[fy(0xa60)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0cm(0x960)]() {
        const fz = a0cm, a = {
                'ddCOV': function (c, d) {
                    return c < d;
                },
                'RHVmU': fz(0xa27)
            }, b = [];
        for (let c = 0x0; a['ddCOV'](c, a0a1[fz(0xb18)]['length']); c++) {
            const d = a0a1[fz(0xb18)][c], f = await a0ad[fz(0x379)](d), g = this[fz(0xcc6)](d, f['result'], f[fz(0xcc9)], a[fz(0x33a)]);
            this['_appendLog'](a0a1['onetimetasks_log'], g), b['push']({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f[fz(0xb88)],
                'timeout': f[fz(0x81c)]
            });
        }
        return a0a1[fz(0x1ea)] = ![], {
            'status': 'ok',
            'executed': b[fz(0x957)],
            'results': b
        };
    }
    static ['restoreFromStore']() {
        const fA = a0cm, a = {
                'pKikL': function (c, d) {
                    return c > d;
                },
                'BEspw': function (c, d) {
                    return c > d;
                }
            };
        a0ah[fA(0xa77)]();
        const b = a0ah[fA(0x567)]();
        a[fA(0xa51)](b[fA(0xb18)][fA(0x957)], 0x0) && (a0a1[fA(0xb18)] = b[fA(0xb18)]);
        if (a[fA(0x9a3)](Object[fA(0x465)](b[fA(0xdf)])['length'], 0x0))
            try {
                a0ai['setCronTasks'](b[fA(0xdf)]);
            } catch (c) {
                a0P[fA(0x120)](fA(0xf1)['concat'](c[fA(0x8d0)]));
            }
        a0a1[fA(0xb18)][fA(0x957)] > 0x0 && a0a1[fA(0x1ea)] && a0ai[fA(0x960)]()[fA(0xc2f)](d => a0P[fA(0x120)]('[TaskStore]\x20❌\x20启动任务恢复执行异常\x20(不影响服务):\x20'[fA(0x8d4)](d[fA(0x8d0)])));
    }
}
const a0aj = a0cm(0x6b0), a0ak = ((() => {
        const fB = a0cm, a = {
                'WiQsr': function (c, d) {
                    return c(d);
                },
                'ykXot': function (c, d) {
                    return c > d;
                },
                'OlGks': 'region1.v2.argotunnel.com',
                'kwVxi': 'region2.v2.argotunnel.com'
            }, b = a['WiQsr'](String, process.env.KISAMA_EDGE_HOSTS || '')['split'](',')[fB(0xc39)](c => c['trim']())[fB(0x781)](Boolean);
        return a[fB(0x19c)](b[fB(0x957)], 0x0) ? b : [
            a[fB(0x327)],
            a[fB(0x822)]
        ];
    })()), a0al = 0x1ea4, a0am = a0cm(0xf4), a0an = 'control-stream', a0ao = 0x4000, a0ap = [
        [
            a0cm(0x818),
            ''
        ],
        [
            ':method',
            a0cm(0x52e)
        ],
        [
            a0cm(0x759),
            a0cm(0x6cc)
        ],
        [
            a0cm(0x2be),
            '/'
        ],
        [
            ':path',
            a0cm(0x937)
        ],
        [
            a0cm(0xd70),
            a0cm(0xbae)
        ],
        [
            a0cm(0xd70),
            a0cm(0x132)
        ],
        [
            a0cm(0xc98),
            a0cm(0x620)
        ],
        [
            a0cm(0xc98),
            '204'
        ],
        [
            a0cm(0xc98),
            a0cm(0x190)
        ],
        [
            a0cm(0xc98),
            a0cm(0xb4f)
        ],
        [
            ':status',
            '400'
        ],
        [
            a0cm(0xc98),
            a0cm(0x37e)
        ],
        [
            a0cm(0xc98),
            a0cm(0x94f)
        ],
        [
            a0cm(0xb33),
            ''
        ],
        [
            a0cm(0x5a6),
            a0cm(0x1b4)
        ],
        [
            a0cm(0x71d),
            ''
        ],
        [
            'accept-ranges',
            ''
        ],
        [
            a0cm(0x913),
            ''
        ],
        [
            'access-control-allow-origin',
            ''
        ],
        [
            a0cm(0x449),
            ''
        ],
        [
            a0cm(0x6b7),
            ''
        ],
        [
            a0cm(0x5c1),
            ''
        ],
        [
            a0cm(0x3f1),
            ''
        ],
        [
            a0cm(0xc25),
            ''
        ],
        [
            a0cm(0x14a),
            ''
        ],
        [
            a0cm(0xb5a),
            ''
        ],
        [
            a0cm(0xac5),
            ''
        ],
        [
            a0cm(0xca8),
            ''
        ],
        [
            a0cm(0x238),
            ''
        ],
        [
            a0cm(0x7ba),
            ''
        ],
        [
            a0cm(0xc92),
            ''
        ],
        [
            'date',
            ''
        ],
        [
            a0cm(0x6e5),
            ''
        ],
        [
            a0cm(0x400),
            ''
        ],
        [
            a0cm(0x70d),
            ''
        ],
        [
            a0cm(0x2dc),
            ''
        ],
        [
            a0cm(0x366),
            ''
        ],
        [
            a0cm(0x459),
            ''
        ],
        [
            a0cm(0x65a),
            ''
        ],
        [
            'if-none-match',
            ''
        ],
        [
            a0cm(0xd04),
            ''
        ],
        [
            'if-unmodified-since',
            ''
        ],
        [
            a0cm(0x25f),
            ''
        ],
        [
            a0cm(0x4d4),
            ''
        ],
        [
            'location',
            ''
        ],
        [
            a0cm(0x687),
            ''
        ],
        [
            a0cm(0x148),
            ''
        ],
        [
            a0cm(0x53d),
            ''
        ],
        [
            'range',
            ''
        ],
        [
            a0cm(0x795),
            ''
        ],
        [
            a0cm(0xb02),
            ''
        ],
        [
            a0cm(0x9f4),
            ''
        ],
        [
            'server',
            ''
        ],
        [
            a0cm(0x6f1),
            ''
        ],
        [
            a0cm(0x574),
            ''
        ],
        [
            'transfer-encoding',
            ''
        ],
        [
            a0cm(0x726),
            ''
        ],
        [
            a0cm(0x604),
            ''
        ],
        [
            a0cm(0xba6),
            ''
        ],
        [
            'www-authenticate',
            ''
        ]
    ], a0aq = [
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
    ], a0ar = [
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
function a0as() {
    const fC = a0cm, a = {
            'PxSNW': function (c, d) {
                return c < d;
            },
            'laTHz': function (c, d) {
                return c >= d;
            },
            'zYBVU': function (c, d) {
                return c & d;
            },
            'nSMYI': function (c, d) {
                return c >> d;
            },
            'MlOtQ': function (c, d) {
                return c === d;
            },
            'DJsfZ': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a['PxSNW'](c, a0aq['length']); c++) {
        const d = a0aq[c], f = a0ar[c];
        let g = b;
        for (let h = f - 0x1; a[fC(0x5d1)](h, 0x0); h--) {
            const i = a['zYBVU'](a[fC(0x883)](d, h), 0x1);
            a[fC(0x4a8)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[fC(0x649)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0at = a0as();
function a0au(a) {
    const fD = a0cm, b = {
            'kKgRx': function (h, i) {
                return h >= i;
            },
            'ZKcjl': function (h, i) {
                return h & i;
            },
            'axirs': function (h, i) {
                return h >> i;
            },
            'eCjLM': function (h, i) {
                return h | i;
            },
            'dOVmN': function (h, i) {
                return h << i;
            },
            'JXlbY': function (h, i) {
                return h === i;
            },
            'NeECh': fD(0x647),
            'CGrvF': function (h, i) {
                return h >= i;
            },
            'tUYHV': fD(0xaed),
            'vtEYQ': 'HPACK\x20Huffman\x20EOS\x20inside\x20string',
            'qNxoE': function (h, i) {
                return h > i;
            },
            'lHDOz': function (h, i) {
                return h !== i;
            },
            'cTfAX': function (h, i) {
                return h - i;
            },
            'NgNEq': function (h, i) {
                return h << i;
            },
            'krMGZ': fD(0x6a2)
        }, c = [];
    let d = a0at, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b['kKgRx'](i, 0x0); i--) {
            const j = b[fD(0x2dd)](b[fD(0x111)](h, i), 0x1);
            f = b[fD(0x5ad)](b[fD(0x746)](f, 0x1), j), g += 0x1, d = d[j];
            if (b[fD(0x41a)](d, null))
                throw new Error(b[fD(0xda3)]);
            if (b['CGrvF'](d[0x2], 0x0)) {
                const k = b[fD(0x2ba)]['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        d = a0at;
                        continue;
                    case '1':
                        c['push'](d[0x2]);
                        continue;
                    case '2':
                        if (d[0x2] === 0x100)
                            throw new Error(b[fD(0x8e8)]);
                        continue;
                    case '3':
                        g = 0x0;
                        continue;
                    case '4':
                        f = 0x0;
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (b[fD(0x830)](g, 0x7) || b[fD(0xa67)](f, b['cTfAX'](b[fD(0xc70)](0x1, g), 0x1)))
        throw new Error(b[fD(0xc5f)]);
    return Buffer['from'](c);
}
function a0av(a, b, c) {
    const fE = a0cm, d = {
            'nJvJE': function (j, k) {
                return j >= k;
            },
            'XROay': 'truncated\x20HPACK\x20integer',
            'PpapU': function (j, k) {
                return j << k;
            },
            'knRHr': function (j, k) {
                return j < k;
            },
            'jiNjL': function (j, k) {
                return j * k;
            },
            'kYxzB': function (j, k) {
                return j === k;
            },
            'xdpSt': function (j, k) {
                return j & k;
            },
            'LUKmF': function (j, k) {
                return j > k;
            },
            'GTMqG': fE(0x3e3)
        };
    if (d[fE(0x80a)](b, a[fE(0x957)]))
        throw new Error(d[fE(0x405)]);
    const f = a[b];
    b += 0x1;
    const g = d['PpapU'](0x1, c) - 0x1;
    let h = f & g;
    if (d[fE(0x228)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[fE(0x80a)](b, a[fE(0x957)]))
            throw new Error(d[fE(0x405)]);
        const j = a[b];
        b += 0x1, h += d[fE(0x8c0)](j & 0x7f, Math[fE(0xcaf)](0x2, i));
        if (d[fE(0x2b0)](d[fE(0x8e7)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[fE(0x72f)](i, 0x1c))
            throw new Error(d[fE(0x997)]);
    }
}
function a0aw(a, b) {
    const fF = a0cm, c = {
            'sTrwZ': function (j, k) {
                return j >= k;
            },
            'AQwhA': fF(0x488),
            'uQWhR': function (j, k) {
                return j(k);
            },
            'Zlbti': function (j, k) {
                return j & k;
            },
            'vAHJy': function (j, k, l, m) {
                return j(k, l, m);
            },
            'yFKzy': function (j, k) {
                return j + k;
            },
            'mcqXP': function (j, k) {
                return j > k;
            },
            'oydeU': 'truncated\x20HPACK\x20string\x20data'
        };
    if (c[fF(0x977)](b, a[fF(0x957)]))
        throw new Error(c[fF(0x4ec)]);
    const d = c[fF(0xd98)](Boolean, c[fF(0x5cb)](a[b], 0x80)), [f, g] = c['vAHJy'](a0av, a, b, 0x7), h = c[fF(0x350)](g, f);
    if (c[fF(0x6e7)](h, a[fF(0x957)]))
        throw new Error(c[fF(0x11b)]);
    const i = a[fF(0xb9c)](g, h);
    return [
        d ? c['uQWhR'](a0au, i) : i,
        h
    ];
}
class a0ax {
    constructor() {
        const fG = a0cm;
        this[fG(0x74c)] = [], this[fG(0xa2f)] = 0x0, this[fG(0x735)] = 0x1000;
    }
    [a0cm(0x611)](a) {
        const fH = a0cm, b = {
                'vJSCR': function (d, f) {
                    return d <= f;
                },
                'FhaoH': fH(0x525),
                'JDmjK': function (d, f) {
                    return d - f;
                },
                'DbokR': function (d, f) {
                    return d < f;
                },
                'vKaMM': fH(0x7d8)
            };
        if (b['vJSCR'](a, 0x0))
            throw new Error(b[fH(0x558)]);
        if (b['vJSCR'](a, a0ap['length']))
            return a0ap[b[fH(0x1b0)](a, 0x1)];
        const c = b[fH(0x1b0)](b['JDmjK'](a, a0ap['length']), 0x1);
        if (b['DbokR'](c, 0x0) || c >= this['dynamic'][fH(0x957)])
            throw new Error(b[fH(0x15a)]);
        return this[fH(0x74c)][c];
    }
    [a0cm(0x8e1)](a, b) {
        const fI = a0cm, c = {
                'RhnNL': function (f, g) {
                    return f + g;
                },
                'tRLOn': fI(0xa3e),
                'OYmrk': function (f, g) {
                    return f > g;
                },
                'PMxcb': function (f, g) {
                    return f > g;
                },
                'OEQSq': function (f, g) {
                    return f > g;
                },
                'kBgDy': function (f, g) {
                    return f + g;
                },
                'kOqOU': function (f, g) {
                    return f + g;
                }
            }, d = c[fI(0xd5)](0x20 + Buffer[fI(0x468)](a, c[fI(0xc3e)]), Buffer[fI(0x468)](b, c[fI(0xc3e)]));
        if (c['OYmrk'](d, this[fI(0x735)])) {
            this[fI(0x74c)] = [], this[fI(0xa2f)] = 0x0;
            return;
        }
        while (c[fI(0x7d6)](this[fI(0x74c)][fI(0x957)], 0x0) && c[fI(0xad9)](this[fI(0xa2f)] + d, this[fI(0x735)])) {
            const [f, g] = this[fI(0x74c)]['pop']();
            this[fI(0xa2f)] -= c[fI(0x4c4)](c['kOqOU'](0x20, Buffer['byteLength'](f, c[fI(0xc3e)])), Buffer['byteLength'](g, c[fI(0xc3e)]));
        }
        this['dynamic'][fI(0xee)]([
            a,
            b
        ]), this['dynamicSize'] += d;
    }
    [a0cm(0xbb2)](a) {
        const fJ = a0cm, b = {
                'rkBiM': function (f, g) {
                    return f & g;
                },
                'AheMZ': function (f, g) {
                    return f & g;
                },
                'jUyLB': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'aGwky': function (f, g, h) {
                    return f(g, h);
                },
                'wOASU': function (f, g, h) {
                    return f(g, h);
                },
                'wFmGn': function (f, g) {
                    return f > g;
                },
                'vUwqZ': fJ(0x5eb),
                'bvLRk': function (f, g) {
                    return f > g;
                },
                'UQYTQ': function (f, g) {
                    return f + g;
                },
                'yxuVa': fJ(0xa3e),
                'FGEJG': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (d < a['length']) {
            const f = a[d];
            if (b[fJ(0xa98)](f, 0x80)) {
                let j;
                [j, d] = a0av(a, d, 0x7), c['push'](this[fJ(0x611)](j));
                continue;
            }
            if (b[fJ(0x7f6)](f, 0x40)) {
                let k, l;
                [k, d] = b[fJ(0xc7c)](a0av, a, d, 0x6);
                if (k)
                    l = this[fJ(0x611)](k)[0x0];
                else {
                    let o;
                    [o, d] = b[fJ(0x7cc)](a0aw, a, d), l = o['toString']('utf8')['toLowerCase']();
                }
                let m;
                [m, d] = b[fJ(0x87c)](a0aw, a, d);
                const n = m['toString'](fJ(0xa3e));
                this[fJ(0x8e1)](l, n), c[fJ(0xd32)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b[fJ(0xa98)](f, 0x20)) {
                let p;
                [p, d] = a0av(a, d, 0x5);
                if (b[fJ(0x457)](p, 0x1000))
                    throw new Error(b[fJ(0xb21)]);
                this[fJ(0x735)] = p;
                while (b[fJ(0xcab)](this[fJ(0x74c)][fJ(0x957)], 0x0) && this[fJ(0xa2f)] > p) {
                    const [q, r] = this[fJ(0x74c)][fJ(0xb0e)]();
                    this[fJ(0xa2f)] -= b[fJ(0x90c)](0x20, Buffer[fJ(0x468)](q, b[fJ(0x8c4)])) + Buffer[fJ(0x468)](r, b[fJ(0x8c4)]);
                }
                continue;
            }
            let g, h;
            [g, d] = b[fJ(0xc7c)](a0av, a, d, 0x4);
            if (g)
                h = this[fJ(0x611)](g)[0x0];
            else {
                let s;
                [s, d] = b[fJ(0x2e3)](a0aw, a, d), h = s[fJ(0x4a4)](fJ(0xa3e))['toLowerCase']();
            }
            let i;
            [i, d] = a0aw(a, d), c[fJ(0xd32)]([
                h,
                i[fJ(0x4a4)](b['yxuVa'])
            ]);
        }
        return c;
    }
}
function a0ay(a, b, c) {
    const fK = a0cm, d = {
            'Vfdgd': function (h, i) {
                return h - i;
            },
            'nTRlP': function (h, i) {
                return h << i;
            },
            'CoVzT': function (h, i) {
                return h < i;
            },
            'RWZrn': function (h, i) {
                return h | i;
            },
            'slQfd': function (h, i) {
                return h & i;
            },
            'TOUln': function (h, i) {
                return h / i;
            }
        }, f = d[fK(0x5e3)](d[fK(0x2e7)](0x1, b), 0x1);
    if (d['CoVzT'](a, f))
        return Buffer[fK(0x2dc)]([d['RWZrn'](c, a)]);
    const g = [c | f];
    a -= f;
    while (a >= 0x80) {
        g[fK(0xd32)](d[fK(0xc1f)](a, 0x7f) | 0x80), a = Math[fK(0x936)](d[fK(0x5a3)](a, 0x80));
    }
    return g[fK(0xd32)](a), Buffer[fK(0x2dc)](g);
}
function a0az(a) {
    const fL = a0cm, b = {
            'rodlg': 'utf8',
            'ACwJx': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[fL(0x2dc)](a, b[fL(0xd38)]);
    return Buffer[fL(0x8d4)]([
        b[fL(0x79c)](a0ay, c[fL(0x957)], 0x7, 0x0),
        c
    ]);
}
function a0aA(a) {
    const fM = a0cm, b = {
            'QtuSV': function (d, f) {
                return d === f;
            },
            'aHMjs': ':status',
            'CcVNn': function (d, f) {
                return d === f;
            },
            'ySBpD': fM(0x620),
            'ZzxXt': fM(0x856),
            'AvQzd': '206',
            'cRTVP': fM(0xb4f),
            'TBOgl': fM(0x6cd),
            'lAPyd': fM(0x37e),
            'mWbMa': function (d, f) {
                return d === f;
            },
            'FRauJ': fM(0x94f),
            'NkhHG': function (d, f, g, h) {
                return d(f, g, h);
            },
            'GfzoU': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b['QtuSV'](d, b[fM(0xd37)]) && b['CcVNn'](f, b[fM(0x86f)]))
            c[fM(0xd32)](0x88);
        else {
            if (d === fM(0xc98) && f === b[fM(0x8e6)])
                c[fM(0xd32)](0x89);
            else {
                if (b[fM(0xc6c)](d, b['aHMjs']) && b['QtuSV'](f, b[fM(0xa0c)]))
                    c['push'](0x8a);
                else {
                    if (d === b[fM(0xd37)] && f === b[fM(0x2ff)])
                        c['push'](0x8b);
                    else {
                        if (b[fM(0xd83)](d, b[fM(0xd37)]) && f === b['TBOgl'])
                            c[fM(0xd32)](0x8c);
                        else {
                            if (d === b[fM(0xd37)] && f === b['lAPyd'])
                                c['push'](0x8d);
                            else
                                b[fM(0xc6c)](d, fM(0xc98)) && b[fM(0x5c6)](f, b[fM(0xc2a)]) ? c['push'](0x8e) : (c[fM(0xd32)](...b['NkhHG'](a0ay, 0x0, 0x4, 0x0)), c['push'](...b[fM(0x640)](a0az, d)), c[fM(0xd32)](...b['GfzoU'](a0az, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[fM(0x2dc)](c);
}
class a0aB {
    constructor() {
        const fN = a0cm;
        this[fN(0x25d)] = [];
    }
    ['alloc'](a) {
        const fO = a0cm, b = {
                'orEAf': function (d, f) {
                    return d < f;
                }
            }, c = this['words'][fO(0x957)];
        for (let d = 0x0; b['orEAf'](d, a); d++) {
            this[fO(0x25d)][fO(0xd32)](0x0n);
        }
        return c;
    }
    [a0cm(0x347)](a, b, c, d) {
        const fP = a0cm, f = {
                'TJtok': function (j, k) {
                    return j - k;
                },
                'themi': function (j, k) {
                    return j - k;
                },
                'Pivxk': function (j, k) {
                    return j & k;
                },
                'VsPaH': function (j, k) {
                    return j << k;
                },
                'VYuDp': function (j, k) {
                    return j(k);
                },
                'vUoHK': function (j, k) {
                    return j | k;
                },
                'khkxj': function (j, k) {
                    return j(k);
                },
                'kGwLC': function (j, k) {
                    return j & k;
                }
            }, g = f[fP(0x152)](f['themi'](b, a), 0x1), h = f['Pivxk'](f[fP(0x1aa)](f[fP(0x871)](BigInt, g), 0x2n), 0xfffffffcn), i = f[fP(0x4de)](f[fP(0xd55)](BigInt, f[fP(0x2d1)](c, 0xffff)), f[fP(0x1aa)](f[fP(0x871)](BigInt, f[fP(0x42e)](d, 0xffff)), 0x10n));
        this[fP(0x25d)][a] = h | f['VsPaH'](i, 0x20n);
    }
    ['setU8'](a, b, c) {
        const fQ = a0cm, d = {
                'rDALP': function (g, h) {
                    return g << h;
                },
                'FDncp': function (g, h) {
                    return g(h);
                },
                'fiKIi': function (g, h) {
                    return g * h;
                },
                'NApjl': function (g, h) {
                    return g | h;
                },
                'beDWo': function (g, h) {
                    return g & h;
                },
                'XCyBh': function (g, h) {
                    return g << h;
                },
                'CyCji': function (g, h) {
                    return g & h;
                },
                'gwZJb': function (g, h) {
                    return g(h);
                }
            }, f = d[fQ(0x2a0)](0xffn, d['FDncp'](BigInt, d[fQ(0xa91)](b, 0x8)));
        this[fQ(0x25d)][a] = d[fQ(0x2c7)](d[fQ(0xcf2)](this[fQ(0x25d)][a], ~f), d[fQ(0x4c2)](d['FDncp'](BigInt, d[fQ(0x940)](c, 0xff)), d['gwZJb'](BigInt, d[fQ(0xa91)](b, 0x8))));
    }
    [a0cm(0xa4e)](a, b, c) {
        const fR = a0cm, d = {
                'NBQvG': function (g, h) {
                    return g(h);
                },
                'PcDtW': function (g, h) {
                    return g * h;
                },
                'bWnAq': function (g, h) {
                    return g | h;
                },
                'vnIKq': function (g, h) {
                    return g & h;
                },
                'ypYei': function (g, h) {
                    return g << h;
                },
                'WKfos': function (g, h) {
                    return g & h;
                },
                'fHgGk': function (g, h) {
                    return g(h);
                },
                'YWdSV': function (g, h) {
                    return g * h;
                }
            }, f = 0xffffn << d['NBQvG'](BigInt, d[fR(0x31c)](b, 0x8));
        this['words'][a] = d[fR(0x589)](d[fR(0x828)](this[fR(0x25d)][a], ~f), d[fR(0xce1)](d[fR(0x36b)](BigInt, d['WKfos'](c, 0xffff)), d[fR(0xd0d)](BigInt, d[fR(0xb4d)](b, 0x8))));
    }
    [a0cm(0x537)](a, b, c) {
        const fS = a0cm, d = {
                'blDLR': function (g, h) {
                    return g << h;
                },
                'BRPcT': function (g, h) {
                    return g(h);
                },
                'frAmZ': function (g, h) {
                    return g * h;
                },
                'iXKuQ': function (g, h) {
                    return g & h;
                },
                'pGklA': function (g, h) {
                    return g(h);
                },
                'MzlLM': function (g, h) {
                    return g * h;
                }
            }, f = d[fS(0x60b)](0xffffffffn, d[fS(0x6ed)](BigInt, d[fS(0xc3a)](b, 0x8)));
        this['words'][a] = d['iXKuQ'](this['words'][a], ~f) | d['BRPcT'](BigInt, d[fS(0xc56)](c, 0xffffffff)) << d[fS(0x520)](BigInt, d[fS(0x57a)](b, 0x8));
    }
    [a0cm(0x1ab)](a, b) {
        const fT = a0cm, c = {
                'GmVmk': function (d, f) {
                    return d & f;
                },
                'mGjGH': function (d, f) {
                    return d(f);
                }
            };
        this[fT(0x25d)][a] = c[fT(0x578)](c['mGjGH'](BigInt, b), 0xffffffffffffffffn);
    }
    [a0cm(0x6bd)](a, b, c = ![]) {
        const fU = a0cm, d = {
                'fJySg': fU(0xa3e),
                'ZiZTC': function (m, n) {
                    return m / n;
                },
                'BdRHy': function (m, n) {
                    return m + n;
                },
                'TGpek': function (m, n) {
                    return m / n;
                },
                'CDvju': function (m, n) {
                    return m % n;
                },
                'SWzYg': function (m, n) {
                    return m - n;
                },
                'LxrLb': function (m, n) {
                    return m - n;
                },
                'TgXYs': function (m, n) {
                    return m | n;
                },
                'uKecB': function (m, n) {
                    return m << n;
                },
                'HoKvD': function (m, n) {
                    return m | n;
                },
                'UiWTI': function (m, n) {
                    return m(n);
                },
                'FvKdI': function (m, n) {
                    return m & n;
                },
                'TvNbb': function (m, n) {
                    return m | n;
                }
            }, f = typeof b === fU(0x3d4) ? Buffer['from'](b, d[fU(0x58a)]) : b, g = f[fU(0x957)] + (c ? 0x1 : 0x0), h = this[fU(0x66e)](Math['ceil'](d['ZiZTC'](g, 0x8)));
        for (let m = 0x0; m < f[fU(0x957)]; m++) {
            this[fU(0x627)](d[fU(0x681)](h, Math[fU(0x936)](d[fU(0x61c)](m, 0x8))), d[fU(0x55a)](m, 0x8), f[m]);
        }
        const j = d[fU(0x7bc)](d['LxrLb'](h, a), 0x1), k = d[fU(0xb64)](d[fU(0x23a)](BigInt(j), 0x2n), 0x1n) & 0xffffffffn, l = d[fU(0xc5b)](0x2n, d[fU(0x6db)](BigInt, d['FvKdI'](g, 0x1fffffff)) << 0x3n);
        this['words'][a] = d['TvNbb'](k, d[fU(0x23a)](l, 0x20n));
    }
    ['writeTextList'](a, b) {
        const fV = a0cm, c = {
                'tKhHB': function (g, h) {
                    return g - h;
                },
                'MCefw': function (g, h) {
                    return g | h;
                },
                'PRNCo': function (g, h) {
                    return g << h;
                },
                'nYXbZ': function (g, h) {
                    return g < h;
                },
                'lolVi': function (g, h) {
                    return g + h;
                }
            };
        if (!b[fV(0x957)]) {
            this[fV(0x25d)][a] = 0x0n;
            return;
        }
        const d = this[fV(0x66e)](b['length']), f = c[fV(0xb5f)](c[fV(0xb5f)](d, a), 0x1);
        this[fV(0x25d)][a] = c[fV(0xb66)](BigInt(f) << 0x2n, 0x1n) & 0xffffffffn | c[fV(0x310)](c[fV(0xb66)](0x6n, c['PRNCo'](BigInt(b[fV(0x957)]), 0x3n)), 0x20n);
        for (let g = 0x0; c['nYXbZ'](g, b[fV(0x957)]); g++) {
            this[fV(0x6bd)](c['lolVi'](d, g), b[g], !![]);
        }
    }
    [a0cm(0x991)](a, b, c, d, f) {
        const fW = a0cm, g = {
                'WgEUU': function (m, n) {
                    return m + n;
                },
                'dEEtQ': function (m, n) {
                    return m * n;
                },
                'QvcyY': function (m, n) {
                    return m - n;
                },
                'xsOKN': function (m, n) {
                    return m - n;
                },
                'FOJYh': function (m, n) {
                    return m | n;
                },
                'hSvaL': function (m, n) {
                    return m | n;
                },
                'IpWdD': function (m, n) {
                    return m << n;
                },
                'CUMnO': function (m, n) {
                    return m(n);
                },
                'cICoC': function (m, n) {
                    return m << n;
                },
                'DJzaY': function (m, n) {
                    return m * n;
                },
                'QnCkW': function (m, n) {
                    return m | n;
                },
                'GkNyT': function (m, n) {
                    return m << n;
                },
                'mwOFB': function (m, n) {
                    return m(n);
                },
                'gsruH': function (m, n) {
                    return m << n;
                },
                'gCoVj': function (m, n) {
                    return m(n);
                },
                'XWgbZ': function (m, n) {
                    return m < n;
                },
                'tEyVH': function (m, n) {
                    return m * n;
                }
            }, h = this[fW(0x66e)](0x1), j = g[fW(0x729)](c, d), k = this['alloc'](g[fW(0x9b3)](b, j)), l = g['QvcyY'](g['xsOKN'](h, a), 0x1);
        this[fW(0x25d)][a] = g[fW(0x4f9)](g[fW(0xda5)](g['IpWdD'](g[fW(0xafc)](BigInt, l), 0x2n), 0x1n) & 0xffffffffn, g[fW(0x3f8)](g[fW(0xda5)](g['IpWdD'](g[fW(0xa86)](g['CUMnO'](BigInt, b), g[fW(0xafc)](BigInt, j)), 0x3n), 0x7n), 0x20n)), this[fW(0x25d)][h] = g['QnCkW'](g['FOJYh'](g['cICoC'](BigInt(b), 0x2n), g[fW(0x6f2)](g['mwOFB'](BigInt, c), 0x20n)), g[fW(0x842)](g['gCoVj'](BigInt, d), 0x30n));
        for (let m = 0x0; g['XWgbZ'](m, b); m++) {
            f(m, g['WgEUU'](k, g[fW(0x444)](m, j)));
        }
    }
    [a0cm(0x955)]() {
        const fX = a0cm, a = {
                'XsfbY': function (d, f) {
                    return d < f;
                },
                'naCvS': function (d, f) {
                    return d * f;
                }
            }, b = Buffer['alloc'](0x8);
        b['writeUInt32LE'](0x0, 0x0), b[fX(0x8c6)](this['words'][fX(0x957)], 0x4);
        const c = Buffer[fX(0x66e)](this[fX(0x25d)][fX(0x957)] * 0x8);
        for (let d = 0x0; a['XsfbY'](d, this['words']['length']); d++) {
            c['writeBigUInt64LE'](this[fX(0x25d)][d] & 0xffffffffffffffffn, a['naCvS'](d, 0x8));
        }
        return Buffer[fX(0x8d4)]([
            b,
            c
        ]);
    }
}
function a0aC(a) {
    const fY = a0cm, b = new a0aB(), c = b['alloc'](0x1), d = b[fY(0x66e)](0x1), f = b[fY(0x66e)](0x1);
    b[fY(0x347)](c, d, 0x1, 0x1), b[fY(0xa4e)](d, 0x0, 0x8);
    const g = b['alloc'](0x1);
    return b[fY(0x66e)](0x1), b[fY(0x347)](f, g, 0x1, 0x1), b['setU32'](g, 0x0, a), b['finish']();
}
function a0aD(a, b, c, d, f, g) {
    const fZ = a0cm, h = {
            'HgvHm': function (H, I) {
                return H | I;
            },
            'vWiIu': function (H, I) {
                return H & I;
            },
            'HYIrU': fZ(0x294),
            'ZvTSh': fZ(0x1ec),
            'iShvm': fZ(0x51f)
        }, i = new a0aB(), j = i[fZ(0x66e)](0x1), k = i[fZ(0x66e)](0x1), l = i[fZ(0x66e)](0x1);
    i[fZ(0x347)](j, k, 0x1, 0x1), i[fZ(0xa4e)](k, 0x0, 0x2);
    const m = i['alloc'](0x1), n = i[fZ(0x66e)](0x1);
    i[fZ(0x66e)](0x1);
    const o = i[fZ(0x66e)](0x1), p = i[fZ(0x66e)](0x1);
    i[fZ(0x66e)](0x1), i[fZ(0x347)](l, m, 0x3, 0x3), i[fZ(0x537)](m, 0x0, a), i[fZ(0x1ab)](n, 0xf71695ec7fe85497n);
    const q = i['alloc'](0x1), r = i['alloc'](0x1);
    i['structPtr'](o, q, 0x1, 0x1), i['setU16'](q, 0x4, 0x1);
    const s = i[fZ(0x66e)](0x1);
    i[fZ(0x66e)](0x1), i['structPtr'](r, s, 0x1, 0x1), i[fZ(0x537)](s, 0x0, b);
    const t = i[fZ(0x66e)](0x1);
    i['alloc'](0x1), i[fZ(0x347)](p, t, 0x0, 0x2);
    const u = i[fZ(0x66e)](0x1), v = i[fZ(0x66e)](0x1), w = i[fZ(0x66e)](0x1), x = i[fZ(0x66e)](0x1);
    i[fZ(0x347)](t, u, 0x1, 0x3), i[fZ(0x627)](u, 0x0, g);
    const y = i[fZ(0x66e)](0x1), z = i[fZ(0x66e)](0x1);
    i[fZ(0x347)](v, y, 0x0, 0x2), i[fZ(0x6bd)](y, c, !![]), i[fZ(0x6bd)](z, d), i[fZ(0x6bd)](w, f);
    const A = i[fZ(0x66e)](0x1), B = i[fZ(0x66e)](0x1);
    i[fZ(0x66e)](0x1), i[fZ(0x347)](x, A, 0x1, 0x2);
    const C = i[fZ(0x66e)](0x1), D = i[fZ(0x66e)](0x1), E = i[fZ(0x66e)](0x1), F = i[fZ(0x66e)](0x1);
    i[fZ(0x347)](B, C, 0x0, 0x4);
    const G = a0k['randomBytes'](0x10);
    return G[0x6] = h[fZ(0x749)](h[fZ(0x473)](G[0x6], 0xf), 0x40), G[0x8] = h[fZ(0x749)](h[fZ(0x473)](G[0x8], 0x3f), 0x80), i['writeBytes'](C, G), i['writeTextList'](D, [
        h[fZ(0x602)],
        h['ZvTSh']
    ]), i[fZ(0x6bd)](E, h['iShvm'], !![]), i[fZ(0x6bd)](F, fZ(0x9b0), !![]), i[fZ(0x955)]();
}
function a0aE(a) {
    const g0 = a0cm, b = {
            'IDvFc': function (f, g) {
                return f >= g;
            },
            'VhmyF': function (f, g) {
                return f - g;
            },
            'rvOSt': function (f, g) {
                return f + g;
            },
            'Jrxeu': function (f, g) {
                return f * g;
            },
            'cZJRQ': function (f, g) {
                return f < g;
            },
            'oldLh': function (f, g) {
                return f - g;
            },
            'rItdR': function (f, g) {
                return f < g;
            },
            'Zyunp': function (f, g) {
                return f * g;
            },
            'PiwWc': function (f, g) {
                return f + g;
            },
            'UQOrb': function (f, g) {
                return f * g;
            },
            'FJGoB': function (f, g) {
                return f < g;
            },
            'QksFn': function (f, g) {
                return f !== g;
            },
            'uaNSQ': g0(0x868)
        }, c = [];
    let d = 0x0;
    while (b[g0(0x2e5)](b[g0(0x170)](a[g0(0x957)], d), 0x8)) {
        const f = a[g0(0xa4c)](d), g = a[g0(0xa4c)](b[g0(0x953)](d, 0x4)), h = f + 0x1;
        let j = h + 0x1, k = b[g0(0x121)](j, 0x4);
        k % 0x8 && (k += 0x4);
        if (b[g0(0xaa8)](b[g0(0xb3b)](a[g0(0x957)], d), k))
            break;
        const l = [g];
        for (let n = 0x1; b[g0(0x41c)](n, h); n++) {
            l[g0(0xd32)](a[g0(0xa4c)](b[g0(0x953)](b[g0(0x953)](d, 0x4), b['Zyunp'](n, 0x4))));
        }
        const m = b[g0(0x1c8)](k, b[g0(0x573)](l['reduce']((o, p) => o + p, 0x0), 0x8));
        if (b[g0(0x4db)](b[g0(0xb3b)](a[g0(0x957)], d), m))
            break;
        if (b[g0(0x9f5)](h, 0x1))
            throw new Error(b[g0(0xb69)]);
        c[g0(0xd32)](a[g0(0xb9c)](b[g0(0x953)](d, k), d + m)), d += m;
    }
    return [
        c,
        a[g0(0xb9c)](d)
    ];
}
function a0aF(a, b) {
    const g1 = a0cm, c = {
            'NSouu': g1(0x5ef),
            'JmSmB': 'expected\x20Cap\x27n\x20Proto\x20struct\x20pointer',
            'IhngO': function (j, k) {
                return j & k;
            },
            'NPjZw': function (j, k) {
                return j >> k;
            },
            'hQXJx': function (j, k) {
                return j + k;
            },
            'fhxbs': function (j, k) {
                return j(k);
            },
            'GplwP': function (j, k) {
                return j >> k;
            },
            'TvkDs': function (j, k) {
                return j >> k;
            },
            'CWNaE': function (j, k) {
                return j < k;
            },
            'ZRPuG': function (j, k) {
                return j > k;
            },
            'OkOjb': function (j, k) {
                return j + k;
            }
        };
    if (b >= a['length'])
        throw new Error(c[g1(0x106)]);
    const d = a[b];
    if ((d & 0x3n) !== 0x0n)
        throw new Error(c[g1(0x565)]);
    let f = c[g1(0x418)](c[g1(0x9c9)](d, 0x2n), 0x3fffffffn);
    c[g1(0x418)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[g1(0x1fd)](b, 0x1) + c[g1(0xc0f)](Number, f), h = Number(c[g1(0x418)](c['GplwP'](d, 0x20n), 0xffffn)), i = c[g1(0xc0f)](Number, c[g1(0x418)](c[g1(0xc79)](d, 0x30n), 0xffffn));
    if (c[g1(0x160)](g, 0x0) || c[g1(0x48b)](c[g1(0x79f)](g + h, i), a[g1(0x957)]))
        throw new Error(c[g1(0x106)]);
    return [
        g,
        h,
        i
    ];
}
function a0aG(a) {
    const g2 = a0cm, b = [];
    for (let c = 0x0; c + 0x8 <= a[g2(0x957)]; c += 0x8) {
        b['push'](a[g2(0xb7b)](c));
    }
    return b;
}
function a0aH(a, b) {
    const g3 = a0cm, c = {
            'DKAeb': function (p, q) {
                return p >= q;
            },
            'JlPnB': function (p, q) {
                return p !== q;
            },
            'Oxcly': function (p, q) {
                return p & q;
            },
            'CAyKY': function (p, q) {
                return p !== q;
            },
            'gUGII': function (p, q) {
                return p & q;
            },
            'nLqvZ': function (p, q) {
                return p >> q;
            },
            'wjacK': function (p, q) {
                return p >> q;
            },
            'kyDXh': function (p, q) {
                return p + q;
            },
            'KZwRv': function (p, q) {
                return p(q);
            },
            'aoHOD': function (p, q) {
                return p < q;
            },
            'VKrMh': function (p, q) {
                return p !== q;
            },
            'FfzNV': function (p, q) {
                return p(q);
            },
            'PjMTi': function (p, q) {
                return p(q);
            },
            'aOZpC': function (p, q) {
                return p & q;
            },
            'rXGyf': function (p, q) {
                return p >> q;
            },
            'agVDu': function (p, q) {
                return p === q;
            },
            'frwGO': function (p, q) {
                return p !== q;
            },
            'hogDV': function (p, q) {
                return p > q;
            },
            'UKxaQ': function (p, q) {
                return p * q;
            },
            'zuouP': function (p, q) {
                return p + q;
            },
            'GANSW': function (p, q, r) {
                return p(q, r);
            },
            'uvBlK': function (p, q) {
                return p + q;
            },
            'NwVUe': function (p, q) {
                return p + q;
            }
        };
    if (c[g3(0xabb)](b, a['length']))
        return null;
    const d = a[b];
    if (c['JlPnB'](c[g3(0x438)](d, 0x3n), 0x1n) || c['CAyKY'](c[g3(0x270)](c[g3(0xa9e)](d, 0x20n), 0x7n), 0x7n))
        return null;
    let f = c['wjacK'](d, 0x2n) & 0x3fffffffn;
    c[g3(0x438)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[g3(0x789)](b + 0x1, c['KZwRv'](Number, f)), h = c[g3(0xafb)](Number, d >> 0x23n);
    if (c['aoHOD'](g, 0x0) || g >= a[g3(0x957)])
        return null;
    const j = a[g];
    if (c['VKrMh'](j & 0x3n, 0x0n))
        return null;
    const k = c[g3(0xd26)](Number, c['gUGII'](c[g3(0xa9e)](j, 0x20n), 0xffffn)), l = c['PjMTi'](Number, c[g3(0x581)](c['rXGyf'](j, 0x30n), 0xffffn)), m = c[g3(0xafb)](Number, j >> 0x2n & 0x3fffffffn), n = k + l;
    if (c[g3(0x96b)](l, 0x2) || c[g3(0x4fb)](n, 0x0) || c[g3(0x5ea)](n * m, h))
        return null;
    if (c[g3(0xc57)](c[g3(0x789)](c[g3(0x789)](g, 0x1), c[g3(0x21c)](n, m)), a['length']))
        return null;
    const o = [];
    for (let p = 0x0; c[g3(0x96b)](p, m); p++) {
        const q = c['zuouP'](c[g3(0x789)](g, 0x1), c[g3(0x21c)](p, n));
        o[g3(0xd32)]([
            a0aI(a, c[g3(0x789)](q, k)),
            c[g3(0xc15)](a0aI, a, c[g3(0xa44)](c['NwVUe'](q, k), 0x1))
        ]);
    }
    return o;
}
function a0aI(a, b) {
    const g4 = a0cm, c = {
            'UjurU': function (m, n) {
                return m >= n;
            },
            'zIjAq': function (m, n) {
                return m & n;
            },
            'lXSLv': function (m, n) {
                return m & n;
            },
            'KlyzV': function (m, n) {
                return m + n;
            },
            'mEQJX': function (m, n) {
                return m(n);
            },
            'Qecqq': function (m, n) {
                return m / n;
            },
            'gWIRJ': function (m, n) {
                return m * n;
            }
        };
    if (c[g4(0x3b7)](b, a['length']))
        return '';
    const d = a[b];
    if ((d & 0x3n) !== 0x1n)
        return '';
    let f = c['zIjAq'](d >> 0x2n, 0x3fffffffn);
    c[g4(0x7c6)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[g4(0xa84)](c['KlyzV'](b, 0x1), c[g4(0x911)](Number, f)), h = c[g4(0x911)](Number, c['zIjAq'](d >> 0x20n, 0x7n)), j = Number(d >> 0x23n), k = Math[g4(0x4c8)](c[g4(0x39e)](j, 0x8));
    if (h !== 0x2 || g < 0x0 || g + k > a[g4(0x957)])
        return '';
    const l = Buffer[g4(0x66e)](c[g4(0xd21)](k, 0x8));
    for (let m = 0x0; m < k; m++) {
        l[g4(0x916)](c[g4(0x142)](a[c['KlyzV'](g, m)], 0xffffffffffffffffn), m * 0x8);
    }
    return l[g4(0xb9c)](0x0, j)[g4(0x4a4)](g4(0xa3e))[g4(0x978)](/\0+$/, '');
}
function a0aJ(a) {
    const g5 = a0cm, b = {
            'mIWnE': function (u, v) {
                return u < v;
            },
            'uRBom': function (u, v) {
                return u(v);
            },
            'YFVDM': function (u, v, w) {
                return u(v, w);
            },
            'EmKqB': function (u, v) {
                return u < v;
            },
            'doFKr': function (u, v) {
                return u !== v;
            },
            'QqxCO': function (u, v) {
                return u & v;
            },
            'TkQaQ': g5(0xcf),
            'uSuWN': function (u, v) {
                return u + v;
            },
            'scPzT': function (u, v) {
                return u(v);
            },
            'ebJyd': function (u, v) {
                return u & v;
            },
            'INUTy': function (u, v) {
                return u >> v;
            },
            'hLjWW': g5(0x1a2),
            'kYmUc': g5(0x72b),
            'GKzlD': 'empty\x20RPC\x20payload',
            'vqXWj': function (u, v) {
                return u === v;
            },
            'bOPLU': function (u, v) {
                return u & v;
            },
            'vjdQL': function (u, v, w) {
                return u(v, w);
            },
            'dPACM': function (u, v) {
                return u + v;
            },
            'ZSyiE': function (u, v) {
                return u === v;
            },
            'kqyyQ': function (u, v) {
                return u === v;
            },
            'qoRvb': function (u, v, w) {
                return u(v, w);
            },
            'UDzFa': function (u, v) {
                return u > v;
            },
            'MkPEP': function (u, v, w) {
                return u(v, w);
            },
            'Vuydf': function (u, v, w) {
                return u(v, w);
            },
            'amfOm': function (u, v) {
                return u + v;
            },
            'xwcJh': function (u, v) {
                return u + v;
            }
        };
    if (a['length'] % 0x8 || b[g5(0xc95)](a[g5(0x957)], 0x10))
        throw new Error(g5(0x38d));
    const c = b[g5(0x5a1)](a0aG, a);
    let d, f, g;
    [d, f, g] = b[g5(0xc68)](a0aF, c, 0x0);
    if (b[g5(0x9b2)](f, 0x1) || b[g5(0x451)](b['QqxCO'](c[d], 0xffffn), 0x3n))
        throw new Error(b[g5(0x517)]);
    const [h, i, j] = a0aF(c, b[g5(0x466)](d, f)), k = b['scPzT'](Number, b[g5(0x168)](b['INUTy'](c[h], 0x30n), 0xffffn));
    if (k === 0x4) {
        const [u, v] = b[g5(0xc68)](a0aF, c, b[g5(0x466)](h, i));
        return {
            'ok': ![],
            'error': b[g5(0xc68)](a0aI, c, u + v) || b['hLjWW']
        };
    }
    if (b['doFKr'](k, 0x0))
        return {
            'ok': ![],
            'error': b[g5(0x466)](b[g5(0x2f4)], k)
        };
    const [l, m, n] = b['YFVDM'](a0aF, c, b['uSuWN'](h, i));
    if (!n)
        return {
            'ok': ![],
            'error': b['GKzlD']
        };
    const o = c[l + m];
    if (b[g5(0x356)](b['bOPLU'](o, 0x3n), 0x3n))
        return {
            'ok': ![],
            'bootstrap': !![]
        };
    let p, q, r;
    [p, q, r] = b[g5(0x133)](a0aF, c, b[g5(0x3a2)](l, m));
    b[g5(0x505)](q, 0x0) && b[g5(0xbba)](r, 0x1) && ([p, q, r] = b[g5(0x785)](a0aF, c, b['dPACM'](p, q)));
    const s = b[g5(0x885)](q, 0x0) ? Number(b['bOPLU'](c[p], 0xffffn)) : 0x0;
    if (s === 0x1) {
        const [w, x] = b[g5(0x3d5)](a0aF, c, p + q), y = b['Vuydf'](a0aI, c, b[g5(0x509)](b['xwcJh'](w, x), 0x1));
        return {
            'ok': !![],
            'location': y
        };
    }
    const t = b[g5(0xc68)](a0aI, c, b['uSuWN'](p, q));
    return {
        'ok': ![],
        'error': t || b[g5(0xaa6)]
    };
}
function a0aK(a) {
    const g6 = a0cm, b = {
            'YODHG': function (h, i) {
                return h(i);
            },
            'WsDpM': 'empty\x20Cap\x27n\x20Proto\x20ConnectRequest',
            'sFdxR': function (h, i, j) {
                return h(i, j);
            },
            'MkDrU': function (h, i) {
                return h < i;
            },
            'tSldl': g6(0x463),
            'RZIcu': function (h, i, j) {
                return h(i, j);
            },
            'ocEjr': function (h, i) {
                return h + i;
            },
            'cOiJi': function (h, i) {
                return h & i;
            },
            'aZOFq': function (h, i) {
                return h + i;
            }
        }, c = b['YODHG'](a0aG, a);
    if (!c[g6(0x957)])
        throw new Error(b['WsDpM']);
    let d, f, g;
    [d, f, g] = b[g6(0x52c)](a0aF, c, 0x0);
    if (f < 0x1 || b[g6(0x2e4)](g, 0x2))
        throw new Error(b['tSldl']);
    return {
        'dest': b[g6(0xaa4)](a0aI, c, b['ocEjr'](d, f)),
        'type': b[g6(0x5a5)](Number, b[g6(0x601)](c[d], 0xffffn)),
        'metadata': a0aH(c, b[g6(0xd00)](d, f) + 0x1) || []
    };
}
function a0aL(a, b) {
    const g7 = a0cm, c = {
            'JZGpg': function (h, i) {
                return h + i;
            }
        }, d = new a0aB(), f = d[g7(0x66e)](0x1), g = d[g7(0x66e)](0x2);
    return d[g7(0x347)](f, g, 0x0, 0x2), d[g7(0x6bd)](g, a || '', !![]), d[g7(0x991)](c[g7(0xd97)](g, 0x1), b[g7(0x957)], 0x0, 0x2, (h, i) => {
        const g8 = g7;
        d[g8(0x6bd)](i, b[h][0x0], !![]), d['writeBytes'](i + 0x1, b[h][0x1], !![]);
    }), d[g7(0x955)]();
}
const a0aM = {
    '.js': a0cm(0x806),
    '.mjs': a0cm(0x806),
    '.css': 'text/css;\x20charset=utf-8',
    '.json': a0cm(0xc53),
    '.map': a0cm(0xc53),
    '.wasm': a0cm(0x7fb),
    '.html': a0cm(0xa53),
    '.htm': a0cm(0xa53),
    '.svg': a0cm(0x435),
    '.xml': a0cm(0xa9b),
    '.woff': 'font/woff2',
    '.woff2': a0cm(0xbd2),
    '.png': a0cm(0x3a9),
    '.jpg': a0cm(0x69e),
    '.jpeg': a0cm(0x69e),
    '.gif': a0cm(0x7b2),
    '.ico': a0cm(0xc77)
};
function a0aN(a) {
    const g9 = a0cm, b = {
            'LEEKA': function (f, g) {
                return f < g;
            }
        }, c = a[g9(0x56c)]('/') ? a[g9(0x519)](0x0, -0x1) : a, d = c[g9(0x6b2)]('.');
    if (b[g9(0x8df)](d, 0x0))
        return '';
    return a0aM[c[g9(0x519)](d)[g9(0x2ca)]()] || '';
}
function a0aO(a) {
    const ga = a0cm, b = {
            'xaWNi': function (c, d) {
                return c !== d;
            },
            'PVTjE': function (c, d) {
                return c + d;
            },
            'fUJkj': function (c, d) {
                return c % d;
            }
        };
    if (Array['isArray'](a))
        return Buffer[ga(0x2dc)](a);
    if (b[ga(0x18b)](typeof a, 'string'))
        throw new Error(ga(0x1da));
    return Buffer[ga(0x2dc)](b[ga(0x96a)](a, '='[ga(0x5f7)](b[ga(0x929)](-a['length'], 0x4))), 'base64');
}
const a0aP = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0aQ(a) {
    const gb = a0cm, b = {
            'LCHMO': gb(0x95e),
            'XsGMU': gb(0xc7d),
            'kzUVy': function (c, d) {
                return c(d);
            },
            'xOuKH': function (c, d) {
                return c !== d;
            },
            'OvLKf': gb(0x7bb),
            'tMpgv': gb(0x316),
            'YvgpZ': 'error',
            'YuTMJ': gb(0x23f),
            'KqOxV': function (c, d) {
                return c(d);
            },
            'PZdYU': gb(0xa47),
            'IYWNi': function (c, d) {
                return c === d;
            },
            'tlXzf': gb(0xce0),
            'cCKKk': gb(0x58c)
        };
    return new Promise((c, d) => {
        const gc = gb, f = {
                'CpnRq': 'quick\x20tunnel\x20returned\x20non-JSON\x20(',
                'yeBFH': b[gc(0x8bf)],
                'SfuwC': b['XsGMU'],
                'uYmZy': function (j, k) {
                    const gd = gc;
                    return b[gd(0x174)](j, k);
                },
                'DfygD': function (j, k) {
                    const ge = gc;
                    return b[ge(0xc2d)](j, k);
                },
                'ORUUe': b['OvLKf'],
                'Prtsi': gc(0x6f4),
                'HjGfN': b[gc(0x705)],
                'DgqZC': b[gc(0x4dc)],
                'sAobU': gc(0x9d9)
            };
        let g;
        try {
            g = new URL(a['replace'](/\/+$/, '') + b[gc(0x279)]);
        } catch (j) {
            b[gc(0x70b)](d, new Error(b['PZdYU'] + j[gc(0x8d0)]));
            return;
        }
        const h = b[gc(0xa08)](g[gc(0x819)], gc(0x76f)) ? a0h : a0g, i = h[gc(0xb41)](g, {
                'method': gc(0x6cc),
                'headers': {
                    'Content-Type': b[gc(0xd7e)],
                    'User-Agent': b[gc(0x8d5)]
                },
                'timeout': 0x3a98
            }, k => {
                const gf = gc, l = {
                        'RLavU': gf(0xa3e),
                        'zBNxD': function (n, o) {
                            return n + o;
                        },
                        'XLbKt': f[gf(0xc4f)],
                        'bytTJ': f['yeBFH'],
                        'fcqRD': f['SfuwC'],
                        'gTcay': function (n, o) {
                            const gg = gf;
                            return f[gg(0x3b5)](n, o);
                        },
                        'gixsd': 'bad\x20tunnel\x20id',
                        'gkdVW': function (n, o) {
                            return f['DfygD'](n, o);
                        },
                        'nWQqy': f[gf(0x47c)],
                        'tSjWW': f[gf(0xd03)],
                        'BIbOe': function (n, o) {
                            const gh = gf;
                            return f[gh(0x3b5)](n, o);
                        }
                    }, m = [];
                k['on'](f[gf(0x5a8)], n => m[gf(0xd32)](n)), k['on'](f['DgqZC'], d), k['on'](f[gf(0x33c)], () => {
                    const gi = gf, n = Buffer['concat'](m), o = k['statusCode'];
                    let p;
                    try {
                        p = JSON[gi(0x599)](n[gi(0x4a4)](l[gi(0x540)]));
                    } catch (r) {
                        d(new Error(l['zBNxD'](l[gi(0x129)](l[gi(0xb2e)], o), l[gi(0xbb0)]) + n[gi(0xb9c)](0x0, 0x12c)[gi(0x4a4)](l['RLavU'])));
                        return;
                    }
                    const q = p[gi(0xb88)] || {};
                    if (!(p[gi(0x80f)] ?? !![]) || !q) {
                        d(new Error(l[gi(0x129)](l[gi(0x740)], JSON['stringify'](p[gi(0xcfd)]))));
                        return;
                    }
                    try {
                        const s = l['gTcay'](String, q['id']);
                        if (!a0aP[gi(0x252)](s))
                            throw new Error(l[gi(0xaa3)]);
                        if (l[gi(0x865)](typeof q['account_tag'], 'string') || l[gi(0x865)](typeof q[gi(0x4d7)], gi(0x3d4)))
                            throw new Error(l['nWQqy']);
                        const t = l['gTcay'](a0aO, q['secret']), u = Buffer[gi(0x2dc)](s['replace'](/-/g, ''), l[gi(0x3d3)]);
                        c([
                            q[gi(0x4d7)],
                            q[gi(0x2c2)],
                            t,
                            u
                        ]);
                    } catch (v) {
                        l[gi(0x331)](d, new Error(l[gi(0x129)](gi(0x58f), v[gi(0x8d0)])));
                    }
                });
            });
        i['on'](b['YvgpZ'], k => d(new Error('requesting\x20quick\x20tunnel\x20failed:\x20' + k[gc(0x8d0)]))), i[gc(0x9d9)]();
    });
}
function a0aR(a) {
    const gj = a0cm;
    return a[gj(0xc39)](([b, c]) => Buffer[gj(0x2dc)](b, gj(0xa3e))[gj(0x4a4)](gj(0x8a1))[gj(0x978)](/=+$/, '') + ':' + Buffer[gj(0x2dc)](c, gj(0xa3e))['toString'](gj(0x8a1))[gj(0x978)](/=+$/, ''))['join'](';');
}
class a0aS {
    constructor(a) {
        const gk = a0cm, b = {
                'bCvvn': gk(0x743),
                'MqTcu': gk(0x316),
                'bgfCP': gk(0x9a0),
                'sGWlS': 'end'
            }, c = b['bCvvn']['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[gk(0xd08)] = [];
                continue;
            case '1':
                a['on'](b[gk(0x5f9)], f => {
                    const gl = gk;
                    this[gl(0x472)] = this['buffer']['length'] ? Buffer['concat']([
                        this[gl(0x472)],
                        f
                    ]) : f, this[gl(0x1b7)]();
                });
                continue;
            case '2':
                this['buffer'] = Buffer[gk(0x66e)](0x0);
                continue;
            case '3':
                this[gk(0x59e)] = ![];
                continue;
            case '4':
                a['on'](b[gk(0x7c5)], () => {
                    this['closed'] = !![], this['_drain']();
                });
                continue;
            case '5':
                this[gk(0x469)] = a;
                continue;
            case '6':
                a['on'](gk(0x120), f => {
                    const gm = gk;
                    this[gm(0x417)] = f, this[gm(0x1b7)]();
                });
                continue;
            case '7':
                a['on'](b['sGWlS'], () => {
                    const gn = gk;
                    this[gn(0x59e)] = !![], this[gn(0x1b7)]();
                });
                continue;
            case '8':
                this[gk(0x417)] = null;
                continue;
            }
            break;
        }
    }
    ['_drain']() {
        const go = a0cm, a = {
                'arWYx': function (b, c) {
                    return b > c;
                },
                'Jrgkd': function (b, c) {
                    return b >= c;
                },
                'TDsLG': function (b, c) {
                    return b !== c;
                },
                'nXEkc': go(0xa1e)
            };
        while (a[go(0x486)](this[go(0xd08)][go(0x957)], 0x0)) {
            const b = this[go(0xd08)][0x0];
            if (a[go(0xb22)](this[go(0x472)][go(0x957)], b[go(0xaf9)])) {
                this[go(0xd08)][go(0x77c)]();
                const c = this['buffer']['subarray'](0x0, b[go(0xaf9)]);
                this[go(0x472)] = this[go(0x472)]['subarray'](b[go(0xaf9)]), b['resolve'](c);
            } else {
                if (a[go(0x874)](this[go(0x417)], null))
                    this[go(0xd08)][go(0x77c)](), b[go(0x12c)](this[go(0x417)]);
                else {
                    if (this[go(0x59e)])
                        this[go(0xd08)][go(0x77c)](), b[go(0x12c)](new Error(a[go(0xb1b)]));
                    else
                        break;
                }
            }
        }
    }
    [a0cm(0x293)](a) {
        const gp = a0cm, b = {
                'bctBb': function (c, d) {
                    return c !== d;
                },
                'ARwsE': function (c, d) {
                    return c >= d;
                },
                'MirDe': 'connection\x20closed'
            };
        if (b[gp(0x1e1)](this[gp(0x417)], null))
            return Promise['reject'](this[gp(0x417)]);
        if (b[gp(0x8a8)](this[gp(0x472)]['length'], a)) {
            const c = this[gp(0x472)][gp(0xb9c)](0x0, a);
            return this[gp(0x472)] = this[gp(0x472)][gp(0xb9c)](a), Promise[gp(0x138)](c);
        }
        if (this[gp(0x59e)])
            return Promise['reject'](new Error(b[gp(0xbf9)]));
        return new Promise((d, f) => {
            const gq = gp;
            this[gq(0xd08)][gq(0xd32)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[gq(0x1b7)]();
        });
    }
}
class a0aT {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const gr = a0cm;
        this['sock'] = a, this['reader'] = new a0aS(a), this[gr(0x7c4)] = b, this[gr(0x4be)] = c, this['tunnelSecret'] = d, this[gr(0x661)] = f, this[gr(0x337)] = g, this[gr(0x6fc)] = h, this[gr(0x7bd)] = i, this['showTunnel'] = j, this[gr(0x45b)] = k || { 'printed': ![] }, this[gr(0x4dd)] = new a0ax(), this[gr(0x6d7)] = 0xffff, this[gr(0xd16)] = new Map(), this[gr(0x4bd)] = a0ao, this[gr(0x1c0)] = new Map(), this[gr(0x6a5)] = null, this[gr(0x9eb)] = ![], this[gr(0x215)] = ![], this[gr(0x3fc)] = ![], this[gr(0xbde)] = [];
    }
    [a0cm(0x26d)](a, b, c, d = Buffer[a0cm(0x66e)](0x0)) {
        const gs = a0cm, f = {
                'fomrm': function (h, i) {
                    return h > i;
                },
                'Gttje': 'HTTP/2\x20frame\x20too\x20large'
            };
        if (f['fomrm'](d['length'], 0xffffff))
            throw new Error(f['Gttje']);
        const g = Buffer['alloc'](0x9);
        g[gs(0xbe4)](d[gs(0x957)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g['writeUInt32BE'](c & 0x7fffffff, 0x5), this[gs(0xa38)]['write'](Buffer[gs(0x8d4)]([
            g,
            d
        ]));
    }
    [a0cm(0x904)](a, b, c = ![]) {
        const gt = a0cm, d = {
                'hjpMC': function (h, i) {
                    return h | i;
                }
            }, f = a0aA(b), g = d[gt(0xd50)](0x4, c ? 0x1 : 0x0);
        this[gt(0x26d)](0x1, g, a, f);
    }
    [a0cm(0x1f7)](a) {
        const gu = a0cm, b = {
                'dqPVa': function (c, d) {
                    return c > d;
                },
                'xSdEj': function (c, d) {
                    return c > d;
                }
            };
        if (b['dqPVa'](this['connectionWindow'], 0x0) && b[gu(0xbee)](this['streamWindows'][gu(0x340)](a) ?? 0xffff, 0x0))
            return Promise['resolve']();
        return new Promise(c => {
            const gv = gu;
            this[gv(0xbde)][gv(0xd32)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    ['_notifyWindows']() {
        const gw = a0cm, a = {
                'ITACl': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this['windowWaiters']) {
            const d = this[gw(0xd16)][gw(0x340)](c['streamId']) ?? 0xffff;
            a[gw(0x144)](this[gw(0x6d7)], 0x0) && d > 0x0 ? c['resolve']() : b[gw(0xd32)](c);
        }
        this['windowWaiters'] = b;
    }
    ['_releaseWaiters']() {
        const gx = a0cm;
        for (const a of this[gx(0xbde)]) {
            a[gx(0x138)]();
        }
        this[gx(0xbde)] = [];
    }
    async ['sendData'](a, b, c = ![]) {
        const gy = a0cm, d = {
                'phIrs': function (h, i) {
                    return h - i;
                },
                'rzxMN': function (h, i) {
                    return h + i;
                },
                'QRMTb': function (h, i) {
                    return h - i;
                },
                'yuHKR': function (h, i) {
                    return h < i;
                }
            }, f = b[gy(0x957)];
        let g = 0x0;
        do {
            await this[gy(0x1f7)](a);
            if (this[gy(0x9eb)])
                return;
            const h = this[gy(0xd16)]['get'](a) ?? 0xffff, i = Math[gy(0x782)](d[gy(0xb8e)](f, g), this['connectionWindow'], h, this[gy(0x4bd)]), j = c && g + i >= f ? 0x1 : 0x0, k = b[gy(0xb9c)](g, d[gy(0xd96)](g, i));
            this['connectionWindow'] -= i, this['streamWindows'][gy(0xb2b)](a, d[gy(0x40e)](h, i)), this[gy(0x26d)](0x0, j, a, k), g += i;
        } while (d[gy(0xb44)](g, f));
    }
    [a0cm(0x961)](a, b) {
        const gz = a0cm, c = {
                'oiZNN': function (d, f) {
                    return d > f;
                },
                'HcFzS': function (d, f) {
                    return d & f;
                }
            };
        if (c['oiZNN'](b, 0x0)) {
            const d = Buffer[gz(0x66e)](0x4);
            d[gz(0x3da)](c[gz(0x605)](b, 0x7fffffff), 0x0), this[gz(0x26d)](0x8, 0x0, a, d);
        }
    }
    async [a0cm(0x19e)]() {
        const gA = a0cm, a = {
                'Gmnnv': function (i, j) {
                    return i & j;
                }
            }, b = await this[gA(0xb4a)][gA(0x293)](0x9), c = b[gA(0x11f)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[gA(0xda0)](b['readUInt32BE'](0x5), 0x7fffffff), h = await this[gA(0xb4a)]['readExact'](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0cm(0xb2d)](a, b, c) {
        const gB = a0cm, d = {
                'yXvLp': function (g, h) {
                    return g & h;
                },
                'xiWUS': gB(0xd27),
                'fRJwQ': function (g, h) {
                    return g - h;
                },
                'AefXW': function (g, h) {
                    return g & h;
                },
                'eQVUl': function (g, h) {
                    return g !== h;
                },
                'rZhFt': gB(0x965)
            };
        if (d[gB(0xd10)](a, 0x8)) {
            const g = c[0x0];
            c = c[gB(0xb9c)](0x1);
            if (g > c[gB(0x957)])
                throw new Error(d[gB(0x902)]);
            c = g ? c[gB(0xb9c)](0x0, d[gB(0x4f2)](c[gB(0x957)], g)) : c;
        }
        a & 0x20 && (c = c[gB(0xb9c)](0x5));
        const f = [c];
        while (!d[gB(0x6a0)](a, 0x4)) {
            const h = await this[gB(0x19e)]();
            if (d[gB(0x9de)](h[0x0], 0x9) || d[gB(0x9de)](h[0x2], b))
                throw new Error(d[gB(0x91b)]);
            f['push'](h[0x3]), a = h[0x1];
        }
        return this[gB(0x4dd)][gB(0xbb2)](Buffer[gB(0x8d4)](f));
    }
    [a0cm(0x739)](a) {
        const gC = a0cm, b = {
                'GtnGG': function (c, d) {
                    return c !== d;
                },
                'GCewi': gC(0xc98)
            };
        if (b[gC(0xc58)](this['control'], null))
            return;
        this['control'] = new a0aV(this, a, this[gC(0x6fc)]), this[gC(0x904)](a, [[
                b['GCewi'],
                gC(0x620)
            ]]), this['control'][gC(0x68e)](this[gC(0x4be)], this[gC(0x6da)], this['tunnelId'], this[gC(0x337)]);
    }
    ['updateConfig'](a, b) {
        const gD = a0cm, c = {
                'EXEWO': function (g, h, i) {
                    return g(h, i);
                },
                'uSiSx': gD(0xc98),
                'tCSHZ': '200',
                'PJUoH': gD(0x7ba),
                'ulMuV': gD(0xce0),
                'jsaVY': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[gD(0x599)](b[gD(0x957)] ? b[gD(0x4a4)](gD(0xa3e)) : '{}'), h = c[gD(0x275)](parseInt, g[gD(0x28f)], 0xa);
            !Number[gD(0xcb8)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[gD(0x2dc)](JSON[gD(0xd7b)]({ 'latestAppliedVersion': d }));
        this[gD(0x904)](a, [
            [
                c['uSiSx'],
                c['tCSHZ']
            ],
            [
                c[gD(0x8c9)],
                c[gD(0x4ca)]
            ],
            [
                gD(0xac5),
                c[gD(0xad5)](String, f[gD(0x957)])
            ]
        ]), this[gD(0x7dc)](a, f, !![]);
    }
    [a0cm(0xa3d)](a, b) {
        const gE = a0cm, c = {
                'AMUuG': function (g, h) {
                    return g === h;
                }
            }, d = gE(0xce2)[gE(0x31d)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[gE(0x66a)](a, b)[gE(0xc2f)](() => {
                });
                continue;
            case '1':
                if (b['finished'])
                    return;
                continue;
            case '2':
                if (c[gE(0x389)](b['upgrade'], gE(0x9b9))) {
                    this[gE(0x9f6)](a, Buffer[gE(0x8d4)](b['body']));
                    return;
                }
                continue;
            case '3':
                if (b[gE(0xcda)])
                    return;
                continue;
            case '4':
                b['finished'] = !![];
                continue;
            }
            break;
        }
    }
    async [a0cm(0x66a)](a, b) {
        const gF = a0cm, c = {
                'swewa': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'mrKoV': function (d, f) {
                    return d === f;
                },
                'BYdDn': gF(0xac5),
                'gYhOf': gF(0x7b9),
                'NFlrV': gF(0x419),
                'fthEX': function (d, f) {
                    return d === f;
                },
                'gQMjv': gF(0x475),
                'JzUkt': function (d, f) {
                    return d === f;
                },
                'jREXT': 'sec-websocket-accept',
                'GWndZ': gF(0x7ba),
                'FVrWy': ':status',
                'aOzbS': gF(0x65f),
                'DOigI': gF(0x6e3),
                'htcDS': function (d, f) {
                    return d + f;
                },
                'pMCLv': '502'
            };
        try {
            const d = await c[gF(0x7b6)](a0aY, this['origin'], b['method'], b[gF(0x42c)], b[gF(0x9e8)], Buffer[gF(0x8d4)](b[gF(0x642)])), f = [], g = [];
            for (const [k, l] of d[gF(0x9e8)]) {
                const m = k[gF(0x2ca)]();
                c[gF(0xbf6)](m, c[gF(0x2a9)]) && g[gF(0xd32)]([
                    m,
                    l
                ]);
                const n = m[gF(0x848)](c[gF(0xc8a)]) || m[gF(0x848)](c[gF(0x5e7)]) || m[gF(0x848)](gF(0xc9b)) || m[gF(0x848)](':');
                (!n || m === gF(0xbf3) || c[gF(0x29d)](m, c[gF(0x9b8)]) || c[gF(0xc84)](m, c[gF(0x762)])) && f['push']([
                    m,
                    l
                ]);
            }
            if (!f[gF(0x5be)](([o]) => o === 'content-type')) {
                const o = a0aN(b[gF(0x42c)]);
                o && f[gF(0xd32)]([
                    c['GWndZ'],
                    o
                ]);
            }
            const h = a0aR(f), i = c[gF(0xbf6)](d[gF(0x2e9)], 0x65) ? 0xc8 : d[gF(0x2e9)], j = [
                    [
                        c[gF(0x875)],
                        String(i)
                    ],
                    ...g,
                    [
                        gF(0xc33),
                        h
                    ],
                    [
                        c[gF(0xbdd)],
                        c['DOigI']
                    ]
                ];
            this['sendHeaders'](a, j);
            for await (const p of d[gF(0x642)]) {
                await this['sendData'](a, p, ![]);
            }
            await this['sendData'](a, Buffer[gF(0x66e)](0x0), !![]);
        } catch (q) {
            this['log'][gF(0x910)](c[gF(0xc66)]('stream\x20' + a + gF(0x38e), q));
            try {
                this['sendHeaders'](a, [[
                        c[gF(0x875)],
                        c[gF(0x344)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0cm(0xb74)]() {
        const gG = a0cm, a = {
                'ABlql': function (d, f) {
                    return d & f;
                },
                'HLtRv': function (d, f) {
                    return d % f;
                },
                'HWMSh': function (d, f) {
                    return d < f;
                },
                'JLiur': function (d, f) {
                    return d + f;
                },
                'WGkkq': function (d, f) {
                    return d === f;
                },
                'eGchq': function (d, f) {
                    return d - f;
                },
                'KnwXB': function (d, f) {
                    return d === f;
                },
                'cKKvZ': function (d, f) {
                    return d <= f;
                },
                'teBvq': function (d, f) {
                    return d === f;
                },
                'RJgLI': function (d, f) {
                    return d & f;
                },
                'DGAzT': function (d, f) {
                    return d === f;
                },
                'vAfDM': function (d, f) {
                    return d !== f;
                },
                'WsiAu': function (d, f) {
                    return d & f;
                },
                'zWvpP': function (d, f) {
                    return d === f;
                },
                'rHRvP': function (d, f) {
                    return d === f;
                },
                'rPVoS': function (d, f) {
                    return d === f;
                }
            }, b = await this['reader']['readExact'](0x18);
        if (!b[gG(0xb30)](Buffer[gG(0x2dc)](gG(0xda9))))
            throw new Error(gG(0x4f3));
        const c = Buffer['alloc'](0x6);
        c[gG(0x96f)](0x3, 0x0), c['writeUInt32BE'](0x64, 0x2), this[gG(0x26d)](0x4, 0x0, 0x0, c);
        this[gG(0x761)] && !this[gG(0x45b)][gG(0x59d)] && (process[gG(0xc93)][gG(0x21d)](this[gG(0x7bd)] + '\x0a'), this[gG(0x45b)][gG(0x59d)] = !![]);
        try {
            while (!this[gG(0x9eb)]) {
                const [d, f, g, h] = await this[gG(0x19e)]();
                if (d === 0x4) {
                    if (!a[gG(0x30a)](f, 0x1)) {
                        if (a[gG(0xab6)](h[gG(0x957)], 0x6))
                            throw new Error(gG(0x2d7));
                        for (let i = 0x0; a[gG(0xcba)](i, h[gG(0x957)]); i += 0x6) {
                            const j = h['readUInt16BE'](i), k = h[gG(0xd2)](a[gG(0x48c)](i, 0x2));
                            if (a['WGkkq'](j, 0x4)) {
                                const l = a[gG(0x7c8)](k, 0xffff);
                                for (const m of this[gG(0xd16)][gG(0x465)]()) {
                                    this['streamWindows'][gG(0xb2b)](m, Math[gG(0xcfa)](0x0, this[gG(0xd16)]['get'](m) + l));
                                }
                            } else
                                a['KnwXB'](j, 0x5) && k >= 0x4000 && a[gG(0xe9)](k, 0xffffff) && (this[gG(0x4bd)] = k);
                        }
                        this['sendFrame'](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[gG(0xd80)](d, 0x6)) {
                    !a[gG(0x329)](f, 0x1) && this['sendFrame'](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[gG(0xc81)](d, 0x8)) {
                    if (a[gG(0x193)](h[gG(0x957)], 0x4))
                        continue;
                    const n = a[gG(0x709)](h['readUInt32BE'](0x0), 0x7fffffff);
                    a[gG(0x26b)](g, 0x0) ? this['connectionWindow'] += n : this[gG(0xd16)][gG(0xb2b)](g, a[gG(0x48c)](this[gG(0xd16)][gG(0x340)](g) ?? 0xffff, n));
                    this[gG(0x857)]();
                    continue;
                }
                if (a[gG(0xc8d)](d, 0x3)) {
                    this['streams'][gG(0xa16)](g);
                    continue;
                }
                if (d === 0x7)
                    break;
                if (a[gG(0x2a6)](d, 0x1)) {
                    const o = await this['readHeaders'](f, g, h);
                    !this['streamWindows'][gG(0x47b)](g) && this[gG(0xd16)]['set'](g, 0xffff);
                    this[gG(0xd8e)](g, f, o);
                    continue;
                }
                if (a['rPVoS'](d, 0x0)) {
                    this[gG(0x1e4)](g, f, h);
                    continue;
                }
            }
        } finally {
            this[gG(0x9eb)] = !![], this[gG(0xfa)]();
            for (const p of this[gG(0x1c0)][gG(0x265)]()) {
                p['websocketProxy'] && p[gG(0x6e1)][gG(0x18d)]();
            }
            try {
                this[gG(0xa38)]['destroy']();
            } catch (q) {
            }
        }
    }
    [a0cm(0xd8e)](a, b, c) {
        const gH = a0cm, d = {
                'jTUCU': function (i, j) {
                    return i === j;
                },
                'sLGrI': function (i, j) {
                    return i & j;
                },
                'lctbd': gH(0x759),
                'CKXCy': 'GET',
                'ipFMj': gH(0x2be),
                'prdED': gH(0xcda),
                'oCXwi': function (i, j) {
                    return i === j;
                },
                'QwNLT': gH(0x512),
                'DQKxR': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i[gH(0x848)](':') ? f[i] = j : f[i[gH(0x2ca)]()] = j;
        }
        const g = (f[a0am] || '')[gH(0x7a0)]()[gH(0x2ca)]();
        if (d[gH(0x3a3)](g, a0an)) {
            this[gH(0x739)](a);
            d[gH(0x1d9)](b, 0x1) && (this['control'][gH(0x51a)] = !![]);
            return;
        }
        const h = {
            'method': f[d[gH(0x434)]] || d[gH(0x800)],
            'path': f[d[gH(0x2b4)]] || '/',
            'authority': f[gH(0x818)] || '',
            'headers': c[gH(0x781)](([k]) => !k[gH(0x848)](':')),
            'body': [],
            'upgrade': g,
            'websocket': g === d[gH(0x214)] || d[gH(0x66d)]((f[d[gH(0x429)]] || '')[gH(0x2ca)](), gH(0xcda)),
            'ended': d['DQKxR'](Boolean, b & 0x1),
            'finished': ![]
        };
        this[gH(0x1c0)][gH(0xb2b)](a, h);
        if (h['websocket'])
            h[gH(0x6e1)] = new a0aU(this, a, h, this['origin'], this[gH(0x6fc)]), h[gH(0x6e1)][gH(0x68e)]();
        else
            h[gH(0xd12)] && this['requestFinished'](a, h);
    }
    ['handleData'](a, b, c) {
        const gI = a0cm, d = {
                'oBvsI': function (g, h) {
                    return g !== h;
                },
                'YUxdR': function (g, h) {
                    return g & h;
                },
                'KhxhP': function (g, h) {
                    return g === h;
                },
                'BbCKE': function (g, h) {
                    return g & h;
                }
            };
        this[gI(0x961)](0x0, c['length']), this[gI(0x961)](a, c[gI(0x957)]);
        if (d[gI(0x804)](this[gI(0x6a5)], null) && this['control'][gI(0x8b2)] === a) {
            this[gI(0x6a5)][gI(0x358)](c);
            d[gI(0xda2)](b, 0x1) && (this[gI(0x6a5)]['finished'] = !![]);
            return;
        }
        const f = this['streams'][gI(0x340)](a);
        if (d[gI(0x27d)](f, undefined))
            return;
        if (d[gI(0x804)](f[gI(0x6e1)], undefined)) {
            f[gI(0x6e1)][gI(0x358)](c, Boolean(d['YUxdR'](b, 0x1)));
            return;
        }
        c[gI(0x957)] && f[gI(0x642)][gI(0xd32)](c), d[gI(0x383)](b, 0x1) && (f[gI(0xd12)] = !![], this[gI(0xa3d)](a, f));
    }
}
class a0aU {
    constructor(a, b, c, d, f) {
        const gJ = a0cm, g = gJ(0x1d6)[gJ(0x31d)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[gJ(0xbf3)] = a;
                continue;
            case '1':
                this[gJ(0x7c4)] = d;
                continue;
            case '2':
                this[gJ(0xa38)] = null;
                continue;
            case '3':
                this[gJ(0xd08)] = [];
                continue;
            case '4':
                this['log'] = f;
                continue;
            case '5':
                this[gJ(0xbc2)] = [];
                continue;
            case '6':
                this[gJ(0x8b2)] = b;
                continue;
            case '7':
                this[gJ(0x9eb)] = ![];
                continue;
            case '8':
                this['request'] = c;
                continue;
            }
            break;
        }
    }
    [a0cm(0x68e)]() {
        const gK = a0cm;
        this[gK(0xb74)]()[gK(0xc2f)](() => {
        });
    }
    [a0cm(0x358)](a, b = ![]) {
        const gL = a0cm;
        a['length'] && this[gL(0xbc2)][gL(0xd32)](a), b && this[gL(0xbc2)]['push'](null), this[gL(0x560)]();
    }
    ['stop']() {
        const gM = a0cm, a = {
                'bbGKD': function (b, c) {
                    return b !== c;
                }
            };
        if (this[gM(0x9eb)])
            return;
        this['stopped'] = !![], this['_wake']();
        if (a[gM(0x3c0)](this['sock'], null))
            try {
                this[gM(0xa38)][gM(0x958)]();
            } catch (b) {
            }
    }
    [a0cm(0x560)]() {
        const gN = a0cm, a = {
                'FSvNl': function (b) {
                    return b();
                }
            };
        for (const b of this[gN(0xd08)]) {
            a[gN(0x5d9)](b);
        }
        this['waiters'] = [];
    }
    async ['_next']() {
        const gO = a0cm;
        while (!this['stopped']) {
            if (this[gO(0xbc2)]['length'])
                return this[gO(0xbc2)][gO(0x77c)]();
            await new Promise(a => this[gO(0xd08)][gO(0xd32)](a));
        }
        return null;
    }
    async [a0cm(0xb74)]() {
        const gP = a0cm, a = {
                'ThDFY': function (b, c) {
                    return b(c);
                },
                'JdSQd': function (b, c) {
                    return b === c;
                },
                'WApPu': gP(0x7b9),
                'hplku': gP(0x419),
                'kHJYE': gP(0xc9b),
                'CJkTx': function (b, c) {
                    return b === c;
                },
                'nUtDT': gP(0x475),
                'fNSIj': gP(0x612),
                'wbewk': function (b, c) {
                    return b === c;
                },
                'nvibF': function (b, c) {
                    return b(c);
                },
                'ltiPM': gP(0xc33),
                'WhXsV': gP(0x65f),
                'DGalo': gP(0x6e3),
                'xiJzN': function (b, c) {
                    return b + c;
                },
                'eZIZE': function (b, c) {
                    return b + c;
                },
                'HZtqo': function (b, c) {
                    return b + c;
                },
                'qFzpp': gP(0x11c),
                'ZFfoA': gP(0xc98)
            };
        try {
            this[gP(0xa38)] = await a0aW(this[gP(0x7c4)]), this[gP(0xce4)]();
            const b = await a[gP(0xc55)](a0aZ, this['sock']), c = [], d = [];
            for (const [i, j] of b[gP(0x9e8)]) {
                const k = i[gP(0x2ca)]();
                a['JdSQd'](k, gP(0xac5)) && d['push']([
                    k,
                    j
                ]);
                const l = k[gP(0x848)](a['WApPu']) || k[gP(0x848)](a[gP(0x67e)]) || k[gP(0x848)](a[gP(0x741)]) || k['startsWith'](':');
                (!l || a[gP(0x136)](k, gP(0xbf3)) || a['CJkTx'](k, a['nUtDT']) || a[gP(0x923)](k, a['fNSIj'])) && c[gP(0xd32)]([
                    k,
                    j
                ]);
            }
            const f = a['ThDFY'](a0aR, c), g = a[gP(0x881)](b['status'], 0x65) ? 0xc8 : b[gP(0x2e9)], h = [
                    [
                        ':status',
                        a['nvibF'](String, g)
                    ],
                    ...d,
                    [
                        a[gP(0x4b3)],
                        f
                    ],
                    [
                        a[gP(0x50a)],
                        a[gP(0xa9f)]
                    ]
                ];
            this['connection'][gP(0x904)](this[gP(0x8b2)], h), this[gP(0x1ae)]()[gP(0xc2f)](() => {
            }), await this[gP(0x3e7)](b[gP(0xa7c)]);
        } catch (m) {
            this[gP(0x6fc)]['warning'](a[gP(0x507)](a[gP(0x783)](a[gP(0x873)](a[gP(0xbd4)], this['streamId']), gP(0x67a)), m));
            try {
                this[gP(0xbf3)][gP(0x904)](this[gP(0x8b2)], [[
                        a[gP(0x299)],
                        gP(0xcdf)
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[gP(0x18d)]();
        }
    }
    async [a0cm(0x3e7)](a) {
        const gQ = a0cm;
        a[gQ(0x957)] && await this[gQ(0xbf3)][gQ(0x7dc)](this[gQ(0x8b2)], a, ![]);
        for await (const b of this[gQ(0xa38)]) {
            if (this[gQ(0x9eb)])
                break;
            await this['connection'][gQ(0x7dc)](this['streamId'], b, ![]);
        }
        !this[gQ(0x9eb)] && await this[gQ(0xbf3)][gQ(0x7dc)](this[gQ(0x8b2)], Buffer[gQ(0x66e)](0x0), !![]);
    }
    async [a0cm(0x1ae)]() {
        const gR = a0cm, a = {
                'nCDxL': function (b, c) {
                    return b === c;
                }
            };
        while (!this[gR(0x9eb)]) {
            const b = await this[gR(0xc38)]();
            if (a['nCDxL'](b, null))
                return;
            try {
                this[gR(0xa38)][gR(0x21d)](b);
            } catch (c) {
                this[gR(0x9eb)] = !![];
                return;
            }
        }
    }
    [a0cm(0xce4)]() {
        const gS = a0cm, a = {
                'PHKcp': function (i, j) {
                    return i + j;
                },
                'VATvr': function (i, j) {
                    return i + j;
                },
                'FVBDI': function (i, j) {
                    return i + j;
                },
                'Wlqqh': gS(0x369),
                'AvYir': gS(0x363),
                'jVkUK': gS(0x366),
                'FpddK': function (i, j) {
                    return i === j;
                },
                'BafBF': gS(0xbf3),
                'IWNhU': gS(0x475),
                'OkBAt': 'content-length',
                'GLoRE': gS(0x892),
                'BwLpX': gS(0x83a),
                'PzEAn': gS(0x244),
                'SSPwN': function (i, j) {
                    return i + j;
                },
                'gxbzn': function (i, j) {
                    return i + j;
                },
                'Cnavw': 'Host:\x20',
                'fXvBV': function (i, j) {
                    return i + j;
                },
                'rxtBb': gS(0xa90),
                'TRTYq': 'Sec-WebSocket-Key:\x20',
                'jjXOD': gS(0x135),
                'XooDR': gS(0x216),
                'FnrrQ': gS(0x9cc),
                'MBVfN': gS(0x3ad)
            }, b = new URL(this['origin']), c = this['request'][gS(0x42c)][gS(0x848)]('/') ? this['request'][gS(0x42c)] : a['PHKcp']('/', this[gS(0xb41)][gS(0x42c)]), d = [a[gS(0x395)](a[gS(0xd6e)](a['Wlqqh'], c), a[gS(0xaae)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[gS(0xb41)][gS(0x9e8)]) {
            const k = i[gS(0x2ca)]();
            if (k === a[gS(0x479)] || a[gS(0x17c)](k, a[gS(0xc2c)]) || a[gS(0x17c)](k, a[gS(0xcb3)]) || a['FpddK'](k, a[gS(0xd6c)]) || k === a[gS(0x577)])
                continue;
            if (k === a[gS(0xa92)])
                f = !![];
            else {
                if (a[gS(0x17c)](k, a[gS(0x832)]))
                    g = !![];
                else
                    k === gS(0x7c4) && (h = !![]);
            }
            d['push'](a[gS(0x6fb)](i, ':\x20') + j);
        }
        d[gS(0xd32)](a[gS(0x3b4)](a[gS(0x93d)], b[gS(0x366)])), !h && this['request'][gS(0x844)] && d[gS(0xd32)](a[gS(0xc27)](a[gS(0xba0)], this[gS(0xb41)][gS(0x844)])), !f && d['push'](a['SSPwN'](a['TRTYq'], a0k['randomBytes'](0x10)[gS(0x4a4)](gS(0x8a1)))), !g && d[gS(0xd32)](a['jjXOD']), d[gS(0xd32)](a['XooDR']), d[gS(0xd32)](a[gS(0x5c9)]), this['sock']['write'](Buffer[gS(0x2dc)](d[gS(0x6e6)]('\x0d\x0a') + a[gS(0xbc6)], 'latin1'));
    }
}
class a0aV {
    constructor(a, b, c, d = {}) {
        const gT = a0cm, f = {
                'nxtRI': function (i, j) {
                    return i === j;
                }
            }, g = gT(0x792)[gT(0x31d)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[gT(0x8b2)] = b;
                continue;
            case '1':
                this[gT(0x49b)] = f['nxtRI'](d[gT(0x559)], !![]);
                continue;
            case '2':
                this[gT(0x51a)] = ![];
                continue;
            case '3':
                this['buffer'] = Buffer[gT(0x66e)](0x0);
                continue;
            case '4':
                this[gT(0x6fc)] = c;
                continue;
            case '5':
                this[gT(0xbf3)] = a;
                continue;
            }
            break;
        }
    }
    ['start'](a, b, c, d) {
        const gU = a0cm, f = {
                'RQSvP': function (g, h) {
                    return g(h);
                },
                'rhzmZ': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[gU(0xbf3)][gU(0x7dc)](this[gU(0x8b2)], f['RQSvP'](a0aC, 0x0), ![]), this[gU(0xbf3)]['sendData'](this['streamId'], f[gU(0x3df)](a0aD, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0cm(0x358)](a) {
        const gV = a0cm, b = {
                'vUniJ': function (f, g) {
                    return f + g;
                },
                'bkHUB': gV(0xcef),
                'rVxbk': 'unknown',
                'tgmBr': function (f, g) {
                    return f + g;
                },
                'tXCuY': gV(0x34a),
                'nCcYV': gV(0x1a2),
                'yPwap': function (f, g) {
                    return f + g;
                },
                'nKFwJ': gV(0xc43)
            };
        this[gV(0x472)] = this['buffer'][gV(0x957)] ? Buffer['concat']([
            this['buffer'],
            a
        ]) : a;
        let c, d;
        [c, d] = a0aE(this[gV(0x472)]), this[gV(0x472)] = d;
        for (const f of c) {
            try {
                const g = a0aJ(f);
                if (g['bootstrap'])
                    continue;
                g['ok'] ? (this[gV(0x6fc)][gV(0x2da)](b[gV(0x4c1)](b[gV(0x2f1)], g[gV(0xcce)] || b[gV(0xac7)])), this[gV(0xbf3)][gV(0x215)] = !![]) : (this[gV(0x6fc)][gV(0x910)](b['tgmBr'](b['tXCuY'], g[gV(0x120)] || b['nCcYV'])), this['connection'][gV(0x3fc)] = !![], this[gV(0xbf3)]['stopped'] = !![]);
            } catch (h) {
                this[gV(0x6fc)]['debug'](b['yPwap'](b[gV(0x91a)], h));
            }
        }
    }
}
function a0aW(a) {
    const gW = a0cm, b = {
            'hwajK': '3|2|0|4|1',
            'ycllh': gW(0x120),
            'yUQyz': function (c, d, f) {
                return c(d, f);
            },
            'cZHMu': gW(0x377),
            'qpIKz': function (c, d, f) {
                return c(d, f);
            },
            'dmBYH': 'https:',
            'qnkdG': function (c, d) {
                return c(d);
            },
            'uiZNP': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'Nqgna': gW(0x52d)
        };
    return new Promise((c, d) => {
        const gX = gW, f = {
                'VktQB': function (n, o, p) {
                    return b['qpIKz'](n, o, p);
                },
                'nDUEt': function (n, o, p) {
                    return n(o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            d(new Error(gX(0x64c)));
            return;
        }
        if (![
                gX(0x338),
                b['dmBYH']
            ][gX(0x8b8)](g[gX(0x819)]) || !g[gX(0x4d7)]) {
            b[gX(0x5c0)](d, new Error(b['uiZNP']));
            return;
        }
        const h = g[gX(0x819)] === b[gX(0x11d)], i = g['port'] || (h ? 0x1bb : 0x50), j = a0i[gX(0x52d)]({
                'host': g[gX(0x4d7)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const gY = gX, q = b[gY(0x57f)][gY(0x31d)]('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        j['removeListener'](b[gY(0x723)], m);
                        continue;
                    case '1':
                        o(p);
                        continue;
                    case '2':
                        k = !![];
                        continue;
                    case '3':
                        if (k)
                            return;
                        continue;
                    case '4':
                        j[gY(0x7cd)](0x0);
                        continue;
                    }
                    break;
                }
            }, m = o => {
                const gZ = gX;
                !k && f[gZ(0x179)](l, d, o);
            };
        j['on'](b[gX(0x723)], m), j[gX(0x7cd)](0x7530, () => j[gX(0x958)](new Error(gX(0xa00)))), j['on'](b[gX(0xbd1)], () => {
            const h1 = gX, o = {
                    'PYpfG': function (q, r, s) {
                        const h0 = a0b;
                        return b[h0(0x5ae)](q, r, s);
                    }
                };
            if (!h) {
                l(c, j);
                return;
            }
            const p = a0j[h1(0x52d)]({
                'socket': j,
                'servername': g[h1(0x4d7)]
            });
            p['on'](b['ycllh'], q => {
                !k && o['PYpfG'](l, d, q);
            }), p['on'](b[h1(0xb5e)], () => {
                const h2 = h1;
                f[h2(0xd56)](l, c, p);
            });
        });
    });
}
function a0aX(a) {
    const h3 = a0cm, b = {
            'AeZLN': function (d, f) {
                return d < f;
            },
            'saCHW': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[h3(0x69f)](d, a['rawHeaders'][h3(0x957)]); d += 0x2) {
        c[h3(0xd32)]([
            a['rawHeaders'][d],
            a[h3(0xa5f)][b['saCHW'](d, 0x1)]
        ]);
    }
    return c;
}
function a0aY(a, b, c, d, f) {
    const h4 = a0cm, g = {
            'ignyt': function (h, i) {
                return h(i);
            },
            'Xpatj': function (h, i) {
                return h(i);
            },
            'bcLxP': h4(0x64c),
            'hcoup': h4(0x76f),
            'afuFX': function (h, i) {
                return h === i;
            },
            'NVPOZ': 'connection',
            'xHQxD': 'transfer-encoding',
            'eONSG': h4(0xac5),
            'NPwOp': h4(0x92b),
            'JzrXc': function (h, i) {
                return h(i);
            },
            'TgUEF': function (h, i) {
                return h + i;
            }
        };
    return new Promise((h, i) => {
        const h5 = h4;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            g[h5(0x973)](i, new Error(g[h5(0xacd)]));
            return;
        }
        if (![
                'http:',
                g[h5(0x2d5)]
            ][h5(0x8b8)](j['protocol']) || !j[h5(0x4d7)]) {
            i(new Error(g['bcLxP']));
            return;
        }
        const k = g[h5(0x7e1)](j[h5(0x819)], h5(0x76f)), l = j[h5(0x171)] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r[h5(0x2ca)]();
            if (g['afuFX'](t, h5(0x366)) || g[h5(0x7e1)](t, g[h5(0x188)]) || g[h5(0x7e1)](t, g[h5(0x6ab)]) || t === g[h5(0x490)])
                continue;
            m[r] = s;
        }
        m[g['NPwOp']] = j[h5(0x366)];
        f[h5(0x957)] && (m[h5(0x7d9)] = g[h5(0x217)](String, f[h5(0x957)]));
        const n = c[h5(0x848)]('/') ? c : g[h5(0xa58)]('/', c), o = k ? a0h : a0g, p = o[h5(0xb41)]({
                'hostname': j[h5(0x4d7)],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                const h6 = h5;
                g[h6(0x969)](h, {
                    'status': u[h6(0x500)],
                    'headers': a0aX(u),
                    'body': u
                });
            });
        p['on'](h5(0x120), u => i(u)), p['end'](f['length'] ? f : undefined);
    });
}
function a0aZ(a) {
    const h7 = a0cm, b = {
            'CDlTS': h7(0x3ad),
            'SJHIZ': function (c, d) {
                return c < d;
            },
            'NugUA': function (c) {
                return c();
            },
            'rnvct': h7(0xc88),
            'GmJLU': function (c, d, f) {
                return c(d, f);
            },
            'QceXL': function (c, d) {
                return c > d;
            },
            'fMfXw': function (c, d) {
                return c + d;
            },
            'cizKM': function (c, d) {
                return c(d);
            },
            'OPjbj': function (c) {
                return c();
            },
            'SvvSj': h7(0x959),
            'LfEXU': h7(0x316),
            'FTZBU': h7(0x120),
            'gaHNa': h7(0x9d9),
            'IKGfj': 'close'
        };
    return new Promise((c, d) => {
        const h8 = h7, f = {
                'xtOPv': b['LfEXU'],
                'xEZJj': h8(0x9a0),
                'PyrnX': function (l) {
                    const h9 = h8;
                    return b[h9(0x8a2)](l);
                },
                'jlBSu': function (l, m) {
                    return l(m);
                }
            };
        let g = Buffer[h8(0x66e)](0x0);
        const h = () => {
                const ha = h8;
                a[ha(0x57c)](f[ha(0x269)], i), a[ha(0x57c)](ha(0x120), j), a[ha(0x57c)](ha(0x9d9), k), a[ha(0x57c)](f[ha(0x88a)], k);
            }, i = l => {
                const hb = h8;
                g = g[hb(0x957)] ? Buffer[hb(0x8d4)]([
                    g,
                    l
                ]) : l;
                const m = g['indexOf'](b[hb(0x63a)]);
                if (b[hb(0xceb)](m, 0x0))
                    return;
                b[hb(0x8a2)](h);
                const n = g[hb(0xb9c)](0x0, m)['toString'](b['rnvct']), o = n[hb(0x31d)]('\x0d\x0a'), p = o[0x0][hb(0x31d)]('\x20'), q = b[hb(0x918)](parseInt, p[0x1], 0xa);
                if (!Number[hb(0x1ba)](q)) {
                    d(new Error('malformed\x20HTTP/1.1\x20response\x20status'));
                    return;
                }
                const r = [];
                for (let s = 0x1; s < o[hb(0x957)]; s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[hb(0x3b8)](':');
                    b['QceXL'](u, 0x0) && r[hb(0xd32)]([
                        t['slice'](0x0, u)[hb(0x7a0)](),
                        t['slice'](b[hb(0xd2f)](u, 0x1))[hb(0x7a0)]()
                    ]);
                }
                b[hb(0xcd1)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g['subarray'](m + 0x4)
                });
            }, j = l => {
                const hc = h8;
                f[hc(0x16d)](h), f['jlBSu'](d, l);
            }, k = () => {
                const hd = h8;
                b[hd(0xa23)](h), d(new Error(b[hd(0xdb)]));
            };
        a['on'](b[h8(0x126)], i), a['on'](b['FTZBU'], j), a['on'](b[h8(0xaf8)], k), a['on'](b[h8(0x9ff)], k);
    });
}
function a0b(a, b) {
    a = a - 0xce;
    const c = a0a();
    let d = c[a];
    if (a0b['guupBp'] === undefined) {
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
        a0b['zfmXOf'] = e, a0b['rxuigV'] = {}, a0b['guupBp'] = !![];
    }
    const f = c[0x0];
    a0b['vLUPUQ'] !== f && (a0b['rxuigV'] = {}, a0b['vLUPUQ'] = f);
    const g = a0b['rxuigV'][a];
    return g === undefined ? (d = a0b['zfmXOf'](d), a0b['rxuigV'][a] = d) : d = g, d;
}
function a0b0(a) {
    const he = a0cm, b = {
            'xQwKa': 'dns:',
            'DnSfR': function (f, g) {
                return f === g;
            },
            'HSlMM': he(0x2eb),
            'WmZEK': function (f, g) {
                return f === g;
            },
            'ycgWQ': he(0x35f),
            'aXQnK': he(0x26e),
            'PmnFO': function (f, g) {
                return f + g;
            },
            'kNSUx': 'issuer\x20O\x20mismatch:\x20',
            'jwMGc': function (f, g) {
                return f(g);
            },
            'SacLy': he(0x9d6),
            'Uqjnc': function (f, g) {
                return f !== g;
            },
            'rrEJE': 'subject\x20CN\x20mismatch'
        };
    if (!a || !a[he(0x3bb)])
        return b[he(0x14d)];
    if (a[he(0x3bb)]['O'] !== b[he(0x8b0)])
        return b[he(0xa15)](b[he(0x3d1)], a[he(0x3bb)]['O'] || '');
    if (!b[he(0xc22)](String, a['issuer']['OU'] || '')[he(0x848)]('CloudFlare\x20Origin\x20SSL'))
        return b[he(0x8fc)] + (a[he(0x3bb)]['OU'] || '');
    if (!a['subject'] || b[he(0x9aa)](a['subject']['CN'], he(0x571)))
        return b[he(0x480)];
    const c = b[he(0xc22)](String, a['subjectaltname'] || '')['split'](',')[he(0xc39)](f => f[he(0x7a0)]()[he(0x2ca)]()), d = c[he(0x5be)](f => {
            const hf = he;
            if (!f['startsWith'](b[hf(0x86a)]))
                return ![];
            const g = f[hf(0x519)](0x4);
            return b[hf(0x85d)](g, b['HSlMM']) || b[hf(0xcbe)](g, 'cftunnel.com') || g['startsWith']('*.') && b[hf(0x8c7)][hf(0x56c)](g['slice'](0x1));
        });
    if (!d)
        return he(0x4ed);
    return null;
}
function a0b1(a, b) {
    const hg = a0cm, c = {
            'JypzW': hg(0x2eb),
            'Bwidi': 'error',
            'AWAbd': hg(0x377),
            'arTmW': function (h, i) {
                return h + i;
            },
            'Bznbf': 'edge\x20certificate\x20verification\x20failed:\x20',
            'khAAs': function (h, i) {
                return h !== i;
            },
            'GNtOk': function (h, i) {
                return h + i;
            },
            'ylfTG': function (h, i) {
                return h + i;
            },
            'ZmoxA': hg(0x8bb),
            'Hgvlj': '\x20failed:\x20',
            'luqaE': function (h) {
                return h();
            }
        }, d = a0ak[hg(0x519)]()['sort'](() => Math[hg(0xbc0)]() - 0.5);
    let f = null;
    const g = async () => {
        const hi = hg, h = {
                'bUqcZ': function (i, j) {
                    return i(j);
                },
                'OcjUM': function (i, j) {
                    const hh = a0b;
                    return c[hh(0xbac)](i, j);
                },
                'svWph': c[hi(0x186)],
                'babgJ': function (i, j) {
                    return c['khAAs'](i, j);
                },
                'NCvzN': hi(0xd9a)
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const hj = hi, l = a0j['connect']({
                            'host': i,
                            'port': a0al,
                            'ALPNProtocols': ['h2'],
                            'servername': c[hj(0x794)],
                            'rejectUnauthorized': ![]
                        });
                    l['setTimeout'](0x2710, () => l[hj(0x958)](new Error(hj(0x24e)))), l['on'](c[hj(0x6ad)], k), l['on'](c[hj(0x2ec)], () => {
                        const hk = hj;
                        if (a) {
                            const n = h['bUqcZ'](a0b0, l['getPeerCertificate'](![]));
                            if (n) {
                                l[hk(0x958)](new Error(h[hk(0x3ba)](h[hk(0xc5c)], n)));
                                return;
                            }
                        }
                        const m = l[hk(0x31f)];
                        if (m && h['babgJ'](m, 'h2')) {
                            l[hk(0x958)](new Error(hk(0xd4b)));
                            return;
                        }
                        a0c7 > 0x0 ? l[hk(0x7cd)](a0c7, () => l[hk(0x958)](new Error(hk(0x896)))) : l[hk(0x7cd)](0x0), b['info'](h[hk(0x3ba)](h[hk(0x3ba)](h['OcjUM'](h[hk(0xb48)], i), ':'), a0al)), h['bUqcZ'](j, l);
                    });
                });
            } catch (j) {
                f = j, b[hi(0x910)](c[hi(0xbac)](c['GNtOk'](c[hi(0x47d)](c[hi(0xa0a)], i), c[hi(0x3d8)]), j));
            }
        }
        throw new Error('all\x20Cloudflare\x20edges\x20failed:\x20' + f);
    };
    return c[hg(0x632)](g);
}
const a0b2 = Buffer[a0cm(0x2dc)](a0cm(0xd9f), 'hex'), a0b3 = Buffer['from'](a0cm(0x570), a0cm(0x6f4)), a0b4 = Buffer[a0cm(0x8d4)]([
        a0b2,
        Buffer[a0cm(0x2dc)]('01', 'latin1')
    ]), a0b5 = Buffer[a0cm(0x8d4)]([
        a0b3,
        Buffer['from']('01', 'latin1')
    ]), a0b6 = {
        'http': 0x0,
        'websocket': 0x1,
        'tcp': 0x2
    }, a0b7 = a0cm(0x3ef), a0b8 = a0cm(0x73f), a0b9 = a0cm(0x92f), a0ba = 'HttpHeader', a0bb = 0x1, a0bc = a0cm(0xb34), a0bd = a0cm(0x430), a0be = Buffer['from']('38762cf7f55934b34d179ae6a4c80cadccbb7f0a', a0cm(0x6f4)), a0bf = Buffer[a0cm(0x2dc)](a0cm(0x801), a0cm(0x6f4)), a0bg = 0x10, a0bh = 0x4, a0bi = 0x4d0, a0bj = 0x4b0, a0bk = 0x0, a0bl = 0x1, a0bm = 0x2, a0bn = [
        a0cm(0x8ad),
        a0cm(0x44e),
        a0cm(0x4b1)
    ], a0bo = {
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
    }, a0bp = {
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
function a0bq(a) {
    const hl = a0cm, b = {
            'latNI': function (d, f) {
                return d(f);
            },
            'DfgcA': function (d, f) {
                return d < f;
            },
            'UWDFK': function (d, f) {
                return d < f;
            }
        }, c = b[hl(0x313)](BigInt, a);
    if (b[hl(0x952)](c, 0x40n))
        return 0x1;
    if (b[hl(0xac8)](c, 0x4000n))
        return 0x2;
    if (c < 0x40000000n)
        return 0x4;
    return 0x8;
}
function a0br(a) {
    const hm = a0cm, b = {
            'rvgHe': function (j, k) {
                return j(k);
            },
            'RGbjw': function (j, k) {
                return j < k;
            },
            'hPGIK': function (j, k) {
                return j < k;
            },
            'NaIql': function (j, k) {
                return j < k;
            },
            'AWQSZ': function (j, k) {
                return j - k;
            },
            'QdrbV': function (j, k) {
                return j > k;
            },
            'nXyoH': function (j, k) {
                return j(k);
            },
            'GgkaI': function (j, k) {
                return j & k;
            },
            'OhSOR': function (j, k) {
                return j | k;
            },
            'beKYm': function (j, k) {
                return j(k);
            }
        }, c = b['rvgHe'](BigInt, a);
    let d, f, g;
    if (b[hm(0xbcc)](c, 0x40n))
        f = 0x1, g = 0x0;
    else {
        if (b[hm(0xb09)](c, 0x4000n))
            f = 0x2, g = 0x40;
        else
            b[hm(0x318)](c, 0x40000000n) ? (f = 0x4, g = 0x80) : (f = 0x8, g = 0xc0);
    }
    d = Buffer[hm(0x66e)](f);
    let h = c;
    for (let j = b[hm(0xa97)](f, 0x1); b[hm(0x9bc)](j, 0x0); j--) {
        d[j] = b[hm(0x44d)](Number, b[hm(0xa14)](h, 0xffn)), h >>= 0x8n;
    }
    return d[0x0] = b[hm(0x526)](b[hm(0x4ce)](Number, h), g), d;
}
function a0bs(a, b) {
    const hn = a0cm, c = {
            'FaBuU': function (h, j) {
                return h - j;
            },
            'wefER': function (h, j) {
                return h << j;
            },
            'rQfZV': function (h, j) {
                return h < j;
            },
            'omHQG': function (h, j) {
                return h - j;
            },
            'QRHPv': function (h, j) {
                return h(j);
            },
            'cNtzH': function (h, j) {
                return h & j;
            },
            'SmvXe': function (h, j) {
                return h | j;
            },
            'LYMan': function (h, j) {
                return h + j;
            }
        };
    if (c[hn(0x636)](a[hn(0x957)], b) < 0x1)
        return null;
    const d = a[b], f = c[hn(0x7a4)](0x1, d >> 0x6);
    if (c['rQfZV'](c[hn(0x68f)](a[hn(0x957)], b), f))
        return null;
    let g = c[hn(0x943)](BigInt, c[hn(0xcd0)](d, 0x3f));
    for (let h = 0x1; c[hn(0xac2)](h, f); h++) {
        g = c['SmvXe'](g << 0x8n, BigInt(a[c[hn(0x25c)](b, h)]));
    }
    return [
        g,
        f
    ];
}
class a0bt {
    constructor() {
        const ho = a0cm;
        this[ho(0xb3a)] = [];
    }
    [a0cm(0x334)](a) {
        const hp = a0cm;
        return this[hp(0xb3a)]['push'](Buffer[hp(0x2dc)]([a & 0xff])), this;
    }
    ['bytes'](a) {
        const hq = a0cm;
        return this['parts'][hq(0xd32)](Buffer[hq(0xd6a)](a) ? a : Buffer[hq(0x2dc)](a)), this;
    }
    ['fixed'](a, b) {
        const hr = a0cm, c = {
                'TgjCO': function (f, g) {
                    return f - g;
                },
                'bwrFB': function (f, g) {
                    return f >= g;
                },
                'rrwqo': function (f, g) {
                    return f(g);
                },
                'LjOFO': function (f, g) {
                    return f & g;
                }
            }, d = Buffer[hr(0x66e)](b);
        for (let f = c['TgjCO'](b, 0x1); c['bwrFB'](f, 0x0); f--) {
            d[f] = c[hr(0x718)](Number, c[hr(0x1d3)](a, 0xffn)), a >>= 0x8n;
        }
        return this[hr(0xb3a)][hr(0xd32)](d), this;
    }
    ['u8'](a) {
        const hs = a0cm, b = {
                'eCacH': function (c, d) {
                    return c & d;
                }
            };
        return this[hs(0xb3a)][hs(0xd32)](Buffer[hs(0x2dc)]([b[hs(0xa11)](a, 0xff)])), this;
    }
    ['u16'](a) {
        const ht = a0cm, b = {
                'yNrdK': function (d, f) {
                    return d & f;
                }
            }, c = Buffer[ht(0x66e)](0x2);
        return c[ht(0x96f)](b[ht(0x6ff)](a, 0xffff), 0x0), this['parts'][ht(0xd32)](c), this;
    }
    [a0cm(0x229)](a) {
        const hu = a0cm, b = {
                'XYWFE': function (d, f) {
                    return d >>> f;
                }
            }, c = Buffer[hu(0x66e)](0x4);
        return c[hu(0x3da)](b[hu(0x43b)](a, 0x0), 0x0), this[hu(0xb3a)][hu(0xd32)](c), this;
    }
    ['varint'](a) {
        const hv = a0cm, b = {
                'wLouq': function (c, d) {
                    return c(d);
                }
            };
        return this[hv(0xb3a)][hv(0xd32)](b['wLouq'](a0br, a)), this;
    }
    ['build']() {
        const hw = a0cm;
        return Buffer[hw(0x8d4)](this[hw(0xb3a)]);
    }
}
class a0bu {
    constructor(a) {
        const hx = a0cm;
        this[hx(0x472)] = a, this[hx(0xd11)] = 0x0;
    }
    get [a0cm(0xc34)]() {
        const hy = a0cm, a = {
                'SgmrS': function (b, c) {
                    return b - c;
                }
            };
        return a[hy(0x195)](this[hy(0x472)][hy(0x957)], this[hy(0xd11)]);
    }
    ['byte']() {
        const hz = a0cm, a = this[hz(0x472)][this['pos']];
        return this[hz(0xd11)] += 0x1, a;
    }
    ['u16']() {
        const hA = a0cm, a = this[hA(0x472)][hA(0x80c)](this[hA(0xd11)]);
        return this[hA(0xd11)] += 0x2, a;
    }
    [a0cm(0x39d)]() {
        const hB = a0cm, a = this[hB(0x472)]['readUIntBE'](this[hB(0xd11)], 0x3);
        return this['pos'] += 0x3, a;
    }
    [a0cm(0x229)]() {
        const hC = a0cm, a = this[hC(0x472)][hC(0xd2)](this[hC(0xd11)]);
        return this[hC(0xd11)] += 0x4, a;
    }
    [a0cm(0xac4)](a) {
        const hD = a0cm, b = {
                'bjHWC': function (d, f) {
                    return d + f;
                }
            }, c = this[hD(0x472)][hD(0xb9c)](this[hD(0xd11)], b[hD(0xbf7)](this['pos'], a));
        return this[hD(0xd11)] += a, c;
    }
    [a0cm(0xc3c)]() {
        const hE = a0cm, a = {
                'xXsoP': function (c, d) {
                    return c === d;
                }
            }, b = a0bs(this[hE(0x472)], this[hE(0xd11)]);
        if (a[hE(0x513)](b, null))
            throw new Error(hE(0x9d3));
        return this[hE(0xd11)] += b[0x1], b[0x0];
    }
    [a0cm(0xcfc)]() {
        const hF = a0cm, a = {
                'wvOzT': function (c, d) {
                    return c > d;
                },
                'YTiAi': function (c, d) {
                    return c(d);
                }
            }, b = this[hF(0xc3c)]();
        if (a['wvOzT'](b, a[hF(0x431)](BigInt, Number[hF(0x62e)])))
            return Number[hF(0x62e)];
        return a[hF(0x431)](Number, b);
    }
}
function a0bv(a, b, c) {
    const hG = a0cm;
    return a0k[hG(0x87a)](a, b)[hG(0xabf)](c)['digest']();
}
function a0bw(a, b, c, d) {
    const hH = a0cm, f = {
            'rfJBO': function (j, k) {
                return j < k;
            }
        }, g = [];
    let h = Buffer[hH(0x66e)](0x0), i = 0x1;
    while (f['rfJBO'](g[hH(0xbd7)]((j, k) => j + k[hH(0x957)], 0x0), d)) {
        h = a0k[hH(0x87a)](a, b)[hH(0xabf)](Buffer[hH(0x8d4)]([
            h,
            c,
            Buffer[hH(0x2dc)]([i])
        ]))[hH(0x15b)](), g['push'](h), i++;
    }
    return Buffer[hH(0x8d4)](g)[hH(0xb9c)](0x0, d);
}
function a0bx(a, b, c, d, f) {
    const hI = a0cm, g = {
            'WSsJT': 'tls13\x20',
            'PldBK': 'utf8',
            'GyOQY': function (k, l) {
                return k & l;
            },
            'ElsvZ': function (k, l) {
                return k >> l;
            },
            'VDCYe': function (k, l, m, n, o) {
                return k(l, m, n, o);
            }
        }, h = Buffer['concat']([
            Buffer['from'](g['WSsJT'], hI(0xa3e)),
            Buffer['from'](c, g['PldBK'])
        ]), i = d || Buffer[hI(0x66e)](0x0), j = Buffer[hI(0x8d4)]([
            Buffer['from']([
                g['GyOQY'](g['ElsvZ'](f, 0x8), 0xff),
                g[hI(0x94e)](f, 0xff)
            ]),
            Buffer['from']([h[hI(0x957)]]),
            h,
            Buffer[hI(0x2dc)]([i[hI(0x957)]]),
            i
        ]);
    return g[hI(0x83f)](a0bw, a, b, j, f);
}
class a0by {
    constructor(a, b, c) {
        const hJ = a0cm, d = {
                'yuDfY': function (g, h) {
                    return g === h;
                },
                'UeAMQ': 'aes-256-gcm',
                'luYMT': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'OLggy': hJ(0x8a0),
                'GBfoY': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'rYqDC': 'quic\x20iv',
                'ugLsY': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'gqBDv': hJ(0x46b),
                'wfezE': function (g, h) {
                    return g === h;
                },
                'JmiaK': hJ(0x6ca),
                'tGzNo': 'aes-128-ecb'
            };
        this[hJ(0xbda)] = a, this[hJ(0xa0b)] = b, this[hJ(0x5e6)] = c;
        const f = d[hJ(0x748)](b, d[hJ(0xbd9)]) ? 0x20 : 0x10;
        this[hJ(0x4c6)] = d[hJ(0x60a)](a0bx, a, c, d[hJ(0x39f)], Buffer['alloc'](0x0), f), this['iv'] = d[hJ(0x49d)](a0bx, a, c, d[hJ(0x9fd)], Buffer['alloc'](0x0), 0xc), this[hJ(0x74b)] = d[hJ(0xaca)](a0bx, a, c, d[hJ(0x93f)], Buffer[hJ(0x66e)](0x0), f), this[hJ(0xcdb)] = d[hJ(0x464)](f, 0x20) ? d[hJ(0xbe5)] : d['tGzNo'], this[hJ(0x57b)] = 0x10;
    }
    [a0cm(0xb15)](a) {
        const hK = a0cm, b = {
                'dIWPB': function (f, g) {
                    return f(g);
                },
                'VKMHB': function (f, g) {
                    return f < g;
                },
                'QibrG': function (f, g) {
                    return f - g;
                },
                'JVpqj': function (f, g) {
                    return f & g;
                }
            }, c = Buffer[hK(0x2dc)](this['iv']);
        let d = b[hK(0x324)](BigInt, a);
        for (let f = 0x0; b[hK(0x1f1)](f, 0x8); f++) {
            c[b[hK(0xc9c)](0xb, f)] ^= b[hK(0x324)](Number, b['JVpqj'](d, 0xffn)), d >>= 0x8n;
        }
        return c;
    }
    [a0cm(0x814)](a) {
        const hL = a0cm, b = a0k[hL(0xbcb)](this['hpCipher'], this[hL(0x74b)], null);
        return b[hL(0x7e5)](![]), Buffer[hL(0x8d4)]([
            b[hL(0xabf)](a),
            b[hL(0x57d)]()
        ])[hL(0xb9c)](0x0, 0x5);
    }
    [a0cm(0x9c2)](a, b, c) {
        const hM = a0cm, d = a0k['createCipheriv'](this[hM(0xa0b)], this['key'], this['nonce'](a));
        d[hM(0xc37)](b);
        const f = Buffer['concat']([
                d[hM(0xabf)](c),
                d[hM(0x57d)]()
            ]), g = d[hM(0x1a4)]();
        return Buffer['concat']([
            f,
            g
        ]);
    }
    ['open'](a, b, c) {
        const hN = a0cm, d = {
                'nTQRO': function (g, h) {
                    return g - h;
                },
                'dNgiR': function (g, h) {
                    return g - h;
                }
            }, f = a0k[hN(0x4e6)](this[hN(0xa0b)], this[hN(0x4c6)], this[hN(0xb15)](a));
        return f[hN(0xc37)](b), f[hN(0x651)](c[hN(0xb9c)](d[hN(0x9ad)](c[hN(0x957)], this[hN(0x57b)]))), Buffer[hN(0x8d4)]([
            f[hN(0xabf)](c[hN(0xb9c)](0x0, d['dNgiR'](c['length'], this[hN(0x57b)]))),
            f['final']()
        ]);
    }
}
function a0bz(a, b) {
    const hO = a0cm, c = { 'YfjCW': 'quic\x20ku' }, d = new a0by(a[hO(0xbda)], a[hO(0xa0b)], a0bx(a[hO(0xbda)], a[hO(0x5e6)], c[hO(0x8cb)], Buffer['alloc'](0x0), a[hO(0x5e6)][hO(0x957)]));
    return b && (d[hO(0x74b)] = a[hO(0x74b)]), d;
}
function a0bA(a, b) {
    const hP = a0cm, c = {
            'IXitF': 'sha256',
            'NctZP': function (i, j, k, l) {
                return i(j, k, l);
            },
            'rTcQn': hP(0x6e4),
            'gZZqi': hP(0x824),
            'XhbeN': hP(0xda4),
            'vyxnk': function (i, j, k, l, m, n) {
                return i(j, k, l, m, n);
            }
        }, d = c[hP(0xcea)], f = c[hP(0x7ca)](a0bv, d, a0be, a), g = b ? c[hP(0x7f7)] : c['gZZqi'], h = b ? hP(0x824) : c['rTcQn'];
    return {
        'send': new a0by(d, c[hP(0xad4)], c[hP(0x4ab)](a0bx, d, f, g, Buffer[hP(0x66e)](0x0), 0x20)),
        'recv': new a0by(d, c[hP(0xad4)], a0bx(d, f, h, Buffer[hP(0x66e)](0x0), 0x20))
    };
}
function a0bB(a, b, c) {
    const hQ = a0cm, d = {
            'zBusf': function (g, h) {
                return g <= h;
            },
            'WcONg': function (g, h) {
                return g < h;
            },
            'WHoPS': function (g, h) {
                return g > h;
            },
            'hRpKv': function (g, h) {
                return g - h;
            }
        }, f = [];
    for (const g of a) {
        const h = g[hQ(0x68e)], i = g[hQ(0x68e)] + g[hQ(0x957)];
        if (d[hQ(0xd6)](i, b) || h >= c) {
            f[hQ(0xd32)](g);
            continue;
        }
        d[hQ(0x2e8)](h, b) && f[hQ(0xd32)]({
            'start': h,
            'length': b - h
        }), d['WHoPS'](i, c) && f['push']({
            'start': c,
            'length': d['hRpKv'](i, c)
        });
    }
    return f;
}
function a0bC(c, d) {
    const hR = a0cm, f = {
            'smTYb': function (i, j) {
                return i - j;
            },
            'lufVA': function (i, j) {
                return i + j;
            },
            'gdeEo': function (i, j) {
                return i <= j;
            },
            'GsTnn': function (i, j) {
                return i + j;
            }
        }, g = c['concat'](d)[hR(0x439)]((i, j) => i[hR(0x68e)] - j['start']), h = [];
    for (const i of g) {
        const j = h['length'] ? h[f[hR(0x614)](h['length'], 0x1)] : null, k = f[hR(0x4a6)](i[hR(0x68e)], i[hR(0x957)]);
        j && f[hR(0x4e4)](i['start'], f[hR(0x145)](j[hR(0x68e)], j[hR(0x957)])) ? j['length'] = Math[hR(0xcfa)](j[hR(0x957)], k - j[hR(0x68e)]) : h[hR(0xd32)]({
            'start': i['start'],
            'length': i[hR(0x957)]
        });
    }
    return h;
}
class a0bD {
    constructor(a) {
        const hS = a0cm;
        this[hS(0xbf3)] = a, this[hS(0x316)] = Buffer[hS(0x66e)](0x0), this[hS(0x477)] = [], this['unacked'] = [], this[hS(0x420)] = 0x0, this[hS(0x9ac)] = ![], this[hS(0xb4b)] = ![];
    }
    get [a0cm(0x950)]() {
        const hT = a0cm;
        return this[hT(0x316)][hT(0x957)];
    }
    [a0cm(0xd18)](a, b) {
        const hU = a0cm, c = {
                'MHhFO': function (d, f) {
                    return d - f;
                }
            };
        a[hU(0x957)] && (this[hU(0x316)] = Buffer[hU(0x8d4)]([
            this['data'],
            a
        ]), this[hU(0x477)][hU(0xd32)]({
            'start': c[hU(0x663)](this[hU(0x316)][hU(0x957)], a['length']),
            'length': a[hU(0x957)]
        })), b && (this[hU(0x9ac)] = !![], this[hU(0xb4b)] = !![]);
    }
    [a0cm(0xbfd)](a) {
        const hV = a0cm, b = {
                'cxCLf': function (g, h) {
                    return g + h;
                },
                'iFdsr': function (g, h) {
                    return g < h;
                },
                'HLfJY': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (!this['pending'][hV(0x957)] || a <= 0x0)
            return null;
        const c = this[hV(0x477)][0x0], d = Math[hV(0x782)](c[hV(0x957)], a), f = {
                'start': c[hV(0x68e)],
                'length': d
            };
        return c['start'] += d, c[hV(0x957)] -= d, !c[hV(0x957)] && this[hV(0x477)]['shift'](), f['bytes'] = this[hV(0x316)][hV(0xb9c)](f[hV(0x68e)], b[hV(0x1c4)](f['start'], d)), f[hV(0xbaf)] = b[hV(0xa20)](f[hV(0x68e)], this[hV(0x420)]), this[hV(0x420)] = Math[hV(0xcfa)](this[hV(0x420)], f[hV(0x68e)] + d), this[hV(0x677)] = b[hV(0x253)](a0bC, this[hV(0x677)], [{
                'start': f[hV(0x68e)],
                'length': d
            }]), f;
    }
    [a0cm(0x989)]() {
        const hW = a0cm;
        if (!this[hW(0x9ac)] || !this[hW(0xb4b)] || this[hW(0x477)][hW(0x957)] || this[hW(0x677)][hW(0x957)])
            return ![];
        return this[hW(0xb4b)] = ![], !![];
    }
    [a0cm(0x690)](a, b, c) {
        const hX = a0cm, d = {
                'dxJuh': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'bzIfw': function (f, g) {
                    return f + g;
                }
            };
        this[hX(0x677)] = d[hX(0xca6)](a0bB, this[hX(0x677)], a, d['bzIfw'](a, b)), c && this['fin'] && a + b >= this['data'][hX(0x957)] && (this[hX(0xb4b)] = ![]), this[hX(0xbf3)][hX(0x3fd)]();
    }
    [a0cm(0x8d2)]() {
        const hY = a0cm, a = {
                'slCHI': function (b, c, d) {
                    return b(c, d);
                }
            };
        this[hY(0x677)][hY(0x957)] && (this[hY(0x420)] = this['unacked'][0x0][hY(0x68e)], this[hY(0x477)] = a[hY(0x38c)](a0bC, this[hY(0x477)], this[hY(0x677)])['sort']((c, d) => c[hY(0x68e)] - d[hY(0x68e)]), this[hY(0x677)] = []), this['fin'] && (this[hY(0xb4b)] = !![]);
    }
    [a0cm(0x4af)](a) {
        const hZ = a0cm, b = {
                'rZTNQ': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'xVpbz': function (c, d) {
                    return c + d;
                },
                'rEqrH': function (c, d, f) {
                    return c(d, f);
                }
            };
        for (const c of a) {
            if (!c['length']) {
                c[hZ(0x9ac)] && this[hZ(0x9ac)] && (this[hZ(0xb4b)] = !![]);
                continue;
            }
            this[hZ(0x677)] = b[hZ(0xb59)](a0bB, this[hZ(0x677)], c['start'], b[hZ(0x810)](c[hZ(0x68e)], c['length'])), this['pending'] = b[hZ(0xe5)](a0bC, this[hZ(0x477)], [{
                    'start': c[hZ(0x68e)],
                    'length': c[hZ(0x957)]
                }])['sort']((d, f) => d['start'] - f[hZ(0x68e)]);
        }
    }
    ['idle']() {
        const i0 = a0cm;
        return !this[i0(0x477)][i0(0x957)] && !this['unacked'][i0(0x957)] && !this[i0(0xb4b)];
    }
}
class a0bE {
    constructor() {
        const i1 = a0cm;
        this[i1(0x625)] = 0x0, this[i1(0x477)] = [];
    }
    ['accept'](a, b) {
        const i2 = a0cm, c = {
                'ANOXw': function (f, g) {
                    return f > g;
                },
                'IcLYj': function (f, g) {
                    return f + g;
                },
                'uDQqG': function (f, g) {
                    return f - g;
                },
                'fxUbE': function (f, g) {
                    return f >= g;
                },
                'YVWZE': function (f, g) {
                    return f === g;
                }
            };
        if (c[i2(0x4aa)](a, c[i2(0x291)](this[i2(0x625)], 0x100000)))
            return Buffer[i2(0x66e)](0x0);
        if (a < this['contiguous']) {
            const f = c[i2(0xd8c)](this[i2(0x625)], a);
            if (c[i2(0x7b5)](f, b[i2(0x957)]))
                return Buffer[i2(0x66e)](0x0);
            b = b[i2(0xb9c)](f), a = this[i2(0x625)];
        }
        if (!b['length'])
            return Buffer['alloc'](0x0);
        if (a !== this[i2(0x625)])
            return this['pending'][i2(0xd32)]({
                'start': a,
                'bytes': Buffer[i2(0x2dc)](b)
            }), Buffer[i2(0x66e)](0x0);
        const d = [b];
        this[i2(0x625)] += b[i2(0x957)];
        for (let g = !![]; g;) {
            g = ![];
            for (let h = 0x0; h < this[i2(0x477)][i2(0x957)]; h++) {
                if (c['YVWZE'](this[i2(0x477)][h][i2(0x68e)], this[i2(0x625)])) {
                    d[i2(0xd32)](this[i2(0x477)][h][i2(0xac4)]), this['contiguous'] += this[i2(0x477)][h]['bytes'][i2(0x957)], this[i2(0x477)][i2(0x2f2)](h, 0x1), g = !![];
                    break;
                }
            }
        }
        return Buffer[i2(0x8d4)](d);
    }
}
function a0bF(a, b, c, d) {
    const i3 = a0cm, f = {
            'crlQY': function (j, k) {
                return j < k;
            },
            'lNsVu': function (j, k) {
                return j + k;
            },
            'fqPhn': function (j, k) {
                return j + k;
            },
            'YdjHT': function (j, k) {
                return j & k;
            }
        };
    if (f[i3(0xb89)](b['length'], f['lNsVu'](c + 0x4, a0bg)))
        return null;
    const g = a[i3(0x814)](b[i3(0xb9c)](f[i3(0x6c7)](c, 0x4), f[i3(0x539)](c + 0x4, a0bg))), h = Buffer[i3(0x2dc)](b);
    h[0x0] ^= f['YdjHT'](g[0x0], d ? 0xf : 0x1f);
    for (let j = 0x0; f[i3(0xb89)](j, a0bh); j++) {
        h[c + j] ^= g[f[i3(0x6c7)](0x1, j)];
    }
    return h;
}
function a0bG(a, b, c, d) {
    const i4 = a0cm, f = {
            'Gkftg': function (l, m) {
                return l < m;
            },
            'diYmM': function (l, m) {
                return l + m;
            },
            'brQFa': function (l, m) {
                return l + m;
            },
            'EKNjg': function (l, m) {
                return l + m;
            },
            'qgxlg': function (l, m) {
                return l + m;
            },
            'rkUUX': function (l, m) {
                return l & m;
            },
            'DHZrg': function (l, m) {
                return l * m;
            },
            'SZQBw': function (l, m) {
                return l + m;
            }
        };
    if (f[i4(0xff)](b[i4(0x957)], f['diYmM'](c, 0x4) + a0bg))
        return null;
    const g = a['mask'](b['subarray'](c + 0x4, f[i4(0x5ff)](f[i4(0xc54)](c, 0x4), a0bg))), h = Buffer[i4(0x2dc)](b);
    h[0x0] ^= g[0x0] & (d ? 0xf : 0x1f);
    const j = f[i4(0xd33)](f[i4(0x8b5)](h[0x0], 0x3), 0x1);
    for (let l = 0x0; l < j; l++) {
        h[f[i4(0xd33)](c, l)] ^= g[f['EKNjg'](0x1, l)];
    }
    let k = 0x0;
    for (let m = 0x0; m < j; m++) {
        k = f[i4(0x5ff)](f[i4(0x4d9)](k, 0x100), h[f[i4(0x147)](c, m)]);
    }
    return [
        h[i4(0xb9c)](0x0, f[i4(0x147)](c, j)),
        k
    ];
}
function a0bH(a, b, c) {
    const i5 = a0cm, d = {
            'FfXim': function (j, k) {
                return j + k;
            },
            'dwxqF': function (j, k) {
                return j(k);
            },
            'eMVLc': function (j, k) {
                return j - k;
            },
            'pwnvj': function (j, k) {
                return j | k;
            },
            'PiGDC': function (j, k) {
                return j & k;
            },
            'bkjBk': function (j, k) {
                return j << k;
            },
            'VtOJF': function (j, k) {
                return j <= k;
            },
            'RfgKN': function (j, k) {
                return j << k;
            },
            'VQwlk': function (j, k) {
                return j > k;
            },
            'WMwOD': function (j, k) {
                return j >= k;
            },
            'UKkgn': function (j, k) {
                return j(k);
            },
            'cmjCT': function (j, k) {
                return j << k;
            },
            'ovGLa': function (j, k) {
                return j(k);
            }
        }, f = d[i5(0x69d)](d['dwxqF'](BigInt, a), 0x1n), g = d[i5(0x906)](0x1n << d['dwxqF'](BigInt, b), 0x1n);
    let h = d[i5(0x583)](d['PiGDC'](f, ~g), BigInt(c));
    const i = d['bkjBk'](0x1n, d[i5(0xd1)](BigInt, d['eMVLc'](b, 0x1)));
    if (d['VtOJF'](h + i, f))
        h += d[i5(0xba9)](0x1n, d[i5(0xd1)](BigInt, b));
    else
        d['VQwlk'](h, f + i) && d[i5(0xa8f)](h, d[i5(0xba9)](0x1n, d[i5(0x107)](BigInt, b))) && (h -= d[i5(0x295)](0x1n, d[i5(0x107)](BigInt, b)));
    return d['ovGLa'](Number, h);
}
function a0bI(a) {
    const i6 = a0cm, b = {
            'mxXSy': function (j, k) {
                return j - k;
            },
            'rVUjH': function (j, k) {
                return j - k;
            },
            'UcThF': function (j, k) {
                return j + k;
            },
            'SulSK': function (j, k) {
                return j - k;
            },
            'lIFDg': function (j, k) {
                return j - k;
            },
            'HbzYL': function (j, k) {
                return j - k;
            }
        }, c = new a0bt();
    c[i6(0x334)](a0bo['ack']);
    const d = a[i6(0x519)]()[i6(0x439)]((j, k) => j['start'] - k[i6(0x68e)]), f = d[d[i6(0x957)] - 0x1], g = f[i6(0x68e)] + f[i6(0x957)] - 0x1;
    c['varint'](g), c['varint'](0x0), c[i6(0xc3c)](b[i6(0xbe9)](d[i6(0x957)], 0x1)), c[i6(0xc3c)](g - f[i6(0x68e)]);
    let h = f[i6(0x68e)];
    for (let j = d['length'] - 0x2; j >= 0x0; j--) {
        const k = d[j], l = b[i6(0x28c)](b[i6(0xc01)](k['start'], k[i6(0x957)]), 0x1);
        c['varint'](b[i6(0x9b6)](b[i6(0x478)](h, l), 0x2)), c['varint'](b[i6(0x25a)](l, k[i6(0x68e)])), h = k['start'];
    }
    return c['build']();
}
function a0bJ(a) {
    const i7 = a0cm, b = {
            'jLfZV': function (k, l) {
                return k - l;
            },
            'FNiCR': function (k, l) {
                return k + l;
            },
            'SfRMz': function (k, l) {
                return k - l;
            },
            'owyYg': function (k, l) {
                return k < l;
            },
            'zrVRN': function (k, l) {
                return k - l;
            },
            'fMUyM': function (k, l) {
                return k - l;
            }
        }, c = a[i7(0xcfc)](), d = a[i7(0xcfc)](), f = a[i7(0xcfc)](), g = a['number'](), h = [{
                'start': b['jLfZV'](c, g),
                'length': b['FNiCR'](g, 0x1)
            }];
    let j = b[i7(0xd45)](c, g);
    for (let k = 0x0; b[i7(0x4cf)](k, f); k++) {
        const l = a[i7(0xcfc)](), m = a['number'](), n = b['zrVRN'](b[i7(0x81d)](j, l), 0x2);
        h[i7(0xd32)]({
            'start': b[i7(0x7f8)](n, m),
            'length': b['FNiCR'](m, 0x1)
        }), j = b[i7(0xf8)](n, m);
    }
    return h[i7(0xb43)] = d / 0x3e8, h;
}
function a0bK(a) {
    const i8 = a0cm, b = {
            'YfcdL': function (f, g) {
                return f > g;
            },
            'RruKg': function (f, g) {
                return f(g);
            },
            'BlTmI': function (f, g) {
                return f < g;
            },
            'dCDeH': function (f, g) {
                return f === g;
            },
            'SfgZD': function (f, g) {
                return f === g;
            },
            'Copbr': function (f, g) {
                return f === g;
            },
            'XPXQo': function (f, g) {
                return f + g;
            },
            'yKrpk': function (f, g) {
                return f * g;
            }
        }, c = {}, d = new a0bu(a);
    while (b[i8(0xb8f)](d[i8(0xc34)], 0x0)) {
        const f = b[i8(0x491)](Number, d[i8(0xc3c)]()), g = d['number']();
        if (b[i8(0x864)](d[i8(0xc34)], g))
            break;
        const h = d[i8(0xac4)](g);
        if (b[i8(0x4e8)](h[i8(0x957)], 0x1) || b[i8(0xbea)](h[i8(0x957)], 0x2) || h[i8(0x957)] === 0x4 || b[i8(0x16a)](h[i8(0x957)], 0x8)) {
            let i = 0x0;
            for (const j of h) {
                i = b[i8(0x123)](b['yKrpk'](i, 0x100), j);
            }
            c[f] = i;
        } else
            c[f] = Buffer[i8(0x2dc)](h);
    }
    return c;
}
function a0bL(a) {
    const i9 = a0cm, b = {
            'tCoas': function (d, f) {
                return d === f;
            }
        }, c = new a0bt();
    for (const [d, f] of a) {
        let g;
        if (Buffer['isBuffer'](f))
            g = f;
        else
            b[i9(0x7eb)](f, !![]) ? g = Buffer[i9(0x66e)](0x0) : g = a0br(f);
        c[i9(0xc3c)](d), c[i9(0xc3c)](g[i9(0x957)]), c['bytes'](g);
    }
    return c[i9(0xaa2)]();
}
function a0bM(a, b) {
    const ia = a0cm, c = Buffer[ia(0x66e)](0x4);
    return c[0x0] = a, c[ia(0xbe4)](b[ia(0x957)], 0x1, 0x3), Buffer[ia(0x8d4)]([
        c,
        b
    ]);
}
function a0bN(a, b) {
    const ib = a0cm, c = Buffer[ib(0x66e)](0x4);
    return c[ib(0x96f)](a, 0x0), c[ib(0x96f)](b[ib(0x957)], 0x2), Buffer[ib(0x8d4)]([
        c,
        b
    ]);
}
class a0bO {
    constructor(a, b, c) {
        const ic = a0cm, d = {
                'bZMLl': ic(0xd1e),
                'CTfOZ': ic(0xbc4),
                'NIOSu': ic(0x46f),
                'skSjW': ic(0x68e),
                'gaECW': ic(0xda4)
            }, f = d[ic(0x5d8)][ic(0x31d)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[ic(0x9e9)] = a0k['generateKeyPairSync']('x25519');
                continue;
            case '1':
                this[ic(0x925)] = null;
                continue;
            case '2':
                this[ic(0x91e)] = null;
                continue;
            case '3':
                this[ic(0xbda)] = d[ic(0xd6f)];
                continue;
            case '4':
                this[ic(0x131)] = this[ic(0x9e9)][ic(0x131)][ic(0x19d)]({
                    'type': d[ic(0x7e3)],
                    'format': ic(0xb58)
                })['subarray'](-0x20);
                continue;
            case '5':
                this['hashLength'] = 0x20;
                continue;
            case '6':
                this[ic(0x897)] = null;
                continue;
            case '7':
                this[ic(0xb04)] = a;
                continue;
            case '8':
                this[ic(0xb32)] = d[ic(0x721)];
                continue;
            case '9':
                this[ic(0xca2)] = [];
                continue;
            case '10':
                this[ic(0xb6c)] = c;
                continue;
            case '11':
                this['alpn'] = b;
                continue;
            case '12':
                this[ic(0xa0b)] = d['gaECW'];
                continue;
            }
            break;
        }
    }
    [a0cm(0x6ee)](a) {
        const id = a0cm, b = {
                'gZgKK': function (f, g) {
                    return f === g;
                }
            }, c = a0k[id(0x2f6)](this[id(0xbda)]), d = b[id(0xd95)](a, undefined) ? this[id(0xca2)] : this[id(0xca2)][id(0x519)](0x0, a);
        for (const f of d) {
            c[id(0xabf)](f);
        }
        return c[id(0x15b)]();
    }
    [a0cm(0x696)]() {
        const ie = a0cm, a = {
                'RCynj': ie(0xa3e),
                'UKcgw': function (p, q) {
                    return p + q;
                },
                'zDKAX': function (p, q, r) {
                    return p(q, r);
                },
                'zeZtG': function (p, q, r) {
                    return p(q, r);
                },
                'KZETN': function (p, q) {
                    return p & q;
                },
                'aikwb': function (p, q) {
                    return p & q;
                },
                'wUbQi': function (p, q, r) {
                    return p(q, r);
                }
            }, b = Buffer[ie(0x2dc)](this['serverName'], a[ie(0xc19)]), c = new a0bt()[ie(0x5d7)](a[ie(0xa31)](b[ie(0x957)], 0x3))[ie(0x334)](0x0)[ie(0x5d7)](b['length'])[ie(0xac4)](b)[ie(0xaa2)](), d = new a0bt()[ie(0x5d7)](0x4)['u16'](0x1d)[ie(0x5d7)](0x17)[ie(0xaa2)](), f = new a0bt()['u16'](0x8)[ie(0x5d7)](0x403)[ie(0x5d7)](0x804)['u16'](0x401)[ie(0x5d7)](0x807)['build'](), g = new a0bt()[ie(0x334)](0x2)[ie(0x5d7)](0x304)['build'](), h = new a0bt()[ie(0x5d7)](a['UKcgw'](0x4, this['publicKey'][ie(0x957)]))[ie(0x5d7)](0x1d)[ie(0x5d7)](this[ie(0x131)][ie(0x957)])[ie(0xac4)](this[ie(0x131)])['build'](), i = Buffer[ie(0x8d4)]([
                Buffer[ie(0x2dc)]([this[ie(0x34d)][ie(0x957)]]),
                Buffer[ie(0x2dc)](this[ie(0x34d)], a[ie(0xc19)])
            ]), j = new a0bt()['u16'](i['length'])[ie(0xac4)](i)['build'](), k = new a0bt()['byte'](0x1)[ie(0x334)](0x1)['build'](), l = Buffer['concat']([
                a[ie(0xb0d)](a0bN, 0x0, c),
                a[ie(0xb0d)](a0bN, 0xa, d),
                a[ie(0x532)](a0bN, 0xd, f),
                a['zDKAX'](a0bN, 0x2b, g),
                a[ie(0x532)](a0bN, 0x33, h),
                a[ie(0xb0d)](a0bN, 0x10, j),
                a0bN(0x2d, k),
                a['zDKAX'](a0bN, 0xff01, Buffer[ie(0x2dc)]([0x0])),
                a[ie(0x532)](a0bN, 0x39, this[ie(0xb6c)])
            ]), m = Buffer['from']([
                0x0,
                0x4,
                0x13,
                0x1,
                0x13,
                0x2
            ]), n = Buffer['concat']([
                Buffer[ie(0x2dc)]([
                    0x3,
                    0x3
                ]),
                a0k[ie(0x27e)](0x20),
                Buffer['from']([0x0]),
                m,
                Buffer[ie(0x2dc)]([
                    0x1,
                    0x0
                ]),
                Buffer['from']([
                    a[ie(0x2c3)](l[ie(0x957)] >> 0x8, 0xff),
                    a[ie(0x218)](l[ie(0x957)], 0xff)
                ]),
                l
            ]), o = a[ie(0xc12)](a0bM, 0x1, n);
        return this[ie(0xca2)][ie(0xd32)](o), this[ie(0xb32)] = ie(0x9f1), o;
    }
    [a0cm(0xaf6)](a) {
        const ig = a0cm, b = {
                'CHPIb': function (d, f) {
                    return d < f;
                },
                'xbibc': ig(0x461),
                'DAvLw': function (d, f) {
                    return d < f;
                },
                'nubYX': function (d, f) {
                    return d + f;
                }
            };
        if (b[ig(0x4fe)](a['length'], 0x4))
            return null;
        if (a[0x0] !== 0x2)
            throw new Error(b[ig(0x550)]);
        const c = a['readUIntBE'](0x1, 0x3);
        if (b[ig(0x858)](a[ig(0x957)], b[ig(0x6c2)](0x4, c)))
            return null;
        return a[ig(0xb9c)](0x0, b[ig(0x6c2)](0x4, c));
    }
    [a0cm(0x506)](a) {
        const ih = a0cm, b = {
                'gKFht': ih(0x3b2),
                'MxSXQ': function (q, r) {
                    return q < r;
                },
                'yXADN': function (q, r) {
                    return q === r;
                },
                'AGvGX': function (q, r) {
                    return q >= r;
                },
                'eRcGN': 'edge\x20selected\x20an\x20unsupported\x20TLS\x20version',
                'RVkcv': ih(0x14e),
                'nutgl': function (q, r) {
                    return q !== r;
                },
                'zjEWv': function (q, r) {
                    return q + r;
                },
                'thDsb': ih(0x932),
                'lZlBu': ih(0x3ab),
                'unxMR': ih(0x6f4),
                'DxAhl': 'spki',
                'qrTDC': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'RNBno': ih(0x9bb),
                'YfCLW': ih(0x861)
            }, c = new a0bu(a[ih(0xb9c)](0x4));
        c[ih(0x5d7)]();
        const d = c[ih(0xac4)](0x20);
        if (d[ih(0xb30)](a0bf))
            throw new Error(b[ih(0x28b)]);
        const f = c['bytes'](c[ih(0x334)]()), g = c[ih(0x5d7)]();
        c['byte']();
        let h = null;
        const i = c[ih(0x5d7)]();
        let j = 0x0;
        while (b[ih(0x805)](j, i) && c[ih(0xc34)] >= 0x4) {
            const q = c['u16'](), r = c[ih(0x5d7)](), s = c[ih(0xac4)](r);
            j += 0x1;
            if (b[ih(0xd5a)](q, 0x33) && b['AGvGX'](s[ih(0x957)], 0x4)) {
                const t = new a0bu(s), u = t[ih(0x5d7)](), v = t['u16']();
                h = {
                    'group': u,
                    'key': t['bytes'](v)
                };
            } else {
                if (b[ih(0xd5a)](q, 0x2b) && b[ih(0x6ac)](s['length'], 0x2)) {
                    if (s[ih(0x80c)](0x0) !== 0x304)
                        throw new Error(b['eRcGN']);
                }
            }
        }
        if (h === null)
            throw new Error(b[ih(0x9b5)]);
        if (b[ih(0xd25)](h[ih(0x516)], 0x1d))
            throw new Error(b[ih(0x7ee)](ih(0xa6b), h[ih(0x516)]));
        if (g === 0x1301)
            this[ih(0xbda)] = ih(0xbc4), this[ih(0x65b)] = 0x20, this[ih(0xa0b)] = ih(0xda4);
        else {
            if (b[ih(0xd5a)](g, 0x1302))
                this['hash'] = b[ih(0x60e)], this[ih(0x65b)] = 0x30, this[ih(0xa0b)] = ih(0x481);
            else
                throw new Error(ih(0x85e) + g[ih(0x4a4)](0x10));
        }
        this[ih(0xca2)][ih(0xd32)](a);
        const k = a0k[ih(0x17d)]({
                'key': Buffer['concat']([
                    Buffer[ih(0x2dc)](b[ih(0x3bd)], b['unxMR']),
                    h[ih(0x4c6)]
                ]),
                'format': 'der',
                'type': b[ih(0x7d0)]
            }), l = a0k[ih(0x6df)]({
                'privateKey': this[ih(0x9e9)][ih(0xc0c)],
                'publicKey': k
            }), m = Buffer['alloc'](this[ih(0x65b)]), n = a0bv(this['hash'], m, m), o = b[ih(0x4e1)](a0bx, this[ih(0xbda)], n, 'derived', a0k[ih(0x2f6)](this['hash'])[ih(0x15b)](), this[ih(0x65b)]);
        this[ih(0xb9b)] = a0bv(this['hash'], o, l);
        const p = this['transcript']();
        return this[ih(0x730)] = b[ih(0x4e1)](a0bx, this[ih(0xbda)], this[ih(0xb9b)], b['RNBno'], p, this['hashLength']), this[ih(0xbff)] = a0bx(this[ih(0xbda)], this[ih(0xb9b)], ih(0x4a3), p, this[ih(0x65b)]), this[ih(0xb32)] = b[ih(0xa62)], {
            'send': new a0by(this['hash'], this[ih(0xa0b)], this[ih(0x730)]),
            'recv': new a0by(this[ih(0xbda)], this['cipher'], this[ih(0xbff)])
        };
    }
    ['handleHandshakeMessage'](a) {
        const ii = a0cm, b = {
                'tsmUt': function (u, v) {
                    return u === v;
                },
                'guHPe': function (u, v) {
                    return u(v);
                },
                'rNrOl': function (u, v) {
                    return u === v;
                },
                'eQzGM': function (u, v) {
                    return u >= v;
                },
                'DcxPQ': ii(0xa3e),
                'PMdnx': function (u, v) {
                    return u >= v;
                },
                'rCfFD': function (u, v) {
                    return u + v;
                },
                'YrPzs': function (u, v) {
                    return u <= v;
                },
                'AqCQd': function (u, v) {
                    return u + v;
                },
                'RahKg': function (u, v) {
                    return u > v;
                },
                'GlpHT': function (u, v) {
                    return u + v;
                },
                'zIswi': function (u, v) {
                    return u + v;
                },
                'eGEMS': function (u, v) {
                    return u - v;
                },
                'yIETJ': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'rVNEG': ii(0x51a),
                'ItIvC': function (u, v) {
                    return u === v;
                },
                'SUIOy': 'derived',
                'Lsfqh': function (u, v, w, x) {
                    return u(v, w, x);
                },
                'VEGzb': ii(0x6dc),
                'SFBGU': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'IpFbd': ii(0x9a2)
            };
        this[ii(0xca2)]['push'](a);
        const c = a[0x0];
        if (b[ii(0xcc4)](c, 0x8)) {
            const u = new a0bu(a['subarray'](0x4)), v = u['u16']();
            let w = 0x0;
            while (w < v && u[ii(0xc34)] >= 0x4) {
                const x = u[ii(0x5d7)](), y = u[ii(0x5d7)](), z = u[ii(0xac4)](y);
                w += 0x1;
                if (b['tsmUt'](x, 0x39))
                    this[ii(0x897)] = b['guHPe'](a0bK, Buffer[ii(0x2dc)](z));
                else
                    b[ii(0x9a1)](x, 0x10) && b[ii(0x50e)](z['length'], 0x3) && (this[ii(0x91e)] = z[ii(0xb9c)](0x3)['toString'](b[ii(0x869)]));
            }
            return null;
        }
        if (c === 0xb) {
            const A = a[ii(0xb9c)](0x4);
            if (b[ii(0xa22)](A[ii(0x957)], 0x4)) {
                const B = b['rCfFD'](0x1, A[0x0]);
                if (b[ii(0xa6e)](b['rCfFD'](B, 0x3), A[ii(0x957)])) {
                    const C = A['readUIntBE'](B, 0x3);
                    if (b['YrPzs'](b[ii(0xd89)](B + 0x3, C), A[ii(0x957)]) && b[ii(0x50e)](C, 0x3)) {
                        const D = A['readUIntBE'](B + 0x3, 0x3);
                        b[ii(0x8ab)](D, 0x0) && b['YrPzs'](b[ii(0xd89)](b[ii(0x8b7)](B, 0x6), D), A[ii(0x957)]) && (this[ii(0x925)] = Buffer[ii(0x2dc)](A['subarray'](b[ii(0x1d8)](B, 0x6), b[ii(0x8b7)](B + 0x6, D))));
                    }
                }
            }
            return null;
        }
        if (b[ii(0xcc4)](c, 0xf) || c === 0x4)
            return null;
        if (c !== 0x14)
            return null;
        const d = this[ii(0xca2)][this[ii(0xca2)][ii(0x957)] - 0x1], f = d['subarray'](0x4), g = this[ii(0x6ee)](b[ii(0xda8)](this[ii(0xca2)][ii(0x957)], 0x1)), h = b[ii(0x70a)](a0bx, this['hash'], this[ii(0xbff)], b[ii(0x928)], Buffer['alloc'](0x0), this[ii(0x65b)]), i = a0k[ii(0x87a)](this[ii(0xbda)], h)[ii(0xabf)](g)[ii(0x15b)](), j = b[ii(0x623)](i[ii(0x957)], f['length']) && a0k['timingSafeEqual'](i, f), k = a0bx(this[ii(0xbda)], this[ii(0x730)], ii(0x51a), Buffer[ii(0x66e)](0x0), this[ii(0x65b)]), l = this[ii(0x6ee)](), m = a0k[ii(0x87a)](this[ii(0xbda)], k)[ii(0xabf)](l)[ii(0x15b)](), n = a0bM(0x14, m), o = Buffer[ii(0x66e)](this[ii(0x65b)]), p = b[ii(0x70a)](a0bx, this[ii(0xbda)], this['handshakeSecret'], b[ii(0x232)], a0k['createHash'](this[ii(0xbda)])['digest'](), this[ii(0x65b)]), q = b[ii(0xa7d)](a0bv, this[ii(0xbda)], p, o), r = this[ii(0x6ee)]();
        this['messages']['push'](n);
        const s = b[ii(0x70a)](a0bx, this['hash'], q, b[ii(0x1bf)], r, this[ii(0x65b)]), t = b[ii(0x31b)](a0bx, this[ii(0xbda)], q, ii(0x63b), r, this[ii(0x65b)]);
        return this[ii(0xb32)] = b[ii(0x660)], {
            'verified': j,
            'finished': n,
            'send': new a0by(this['hash'], this[ii(0xa0b)], s),
            'recv': new a0by(this['hash'], this['cipher'], t)
        };
    }
}
function a0bP(a) {
    const ij = a0cm, b = {
            'kLqKT': function (k, l) {
                return k === l;
            },
            'qYoKn': ij(0x1ff),
            'VcYmR': function (k, l) {
                return k + l;
            },
            'aYcNV': function (k, l) {
                return k(l);
            },
            'sDBZe': ij(0x6ae),
            'XkkiZ': ij(0xab5),
            'bIbgR': 'OU=CloudFlare\x20Origin\x20SSL',
            'dzWxU': function (k, l) {
                return k + l;
            },
            'ikovk': ij(0x185),
            'OPbZs': ij(0x430),
            'tgtVL': function (k, l) {
                return k + l;
            },
            'IhobF': 'SAN\x20does\x20not\x20cover\x20quic.cftunnel.com\x20(SAN='
        };
    if (!a || !a['length'])
        return b[ij(0xb5b)];
    let c;
    try {
        c = new a0k[(ij(0x1e2))](a);
    } catch (k) {
        return b['VcYmR'](ij(0xc64), k[ij(0x8d0)]);
    }
    const d = l => String(l || '')[ij(0x978)](/\\,/g, ','), f = b[ij(0x80e)](d, c['issuer']), g = d(c[ij(0x652)]);
    if (!f['includes'](b['sDBZe']))
        return b[ij(0xab8)] + f;
    if (!f[ij(0x8b8)](b[ij(0xa1b)]))
        return b[ij(0x2fd)](ij(0x9d6), f);
    if (!g[ij(0x8b8)](b[ij(0xbc3)]))
        return b['VcYmR'](ij(0x648), g);
    const h = b[ij(0x80e)](String, c[ij(0x396)] || '')[ij(0x31d)](',')[ij(0xc39)](l => l[ij(0x7a0)]()['toLowerCase']()), i = b[ij(0x650)], j = h[ij(0x5be)](l => {
            const ik = ij;
            if (!l[ik(0x848)](ik(0xaac)))
                return ![];
            const m = l[ik(0x519)](0x4);
            return b[ik(0xc80)](m, i) || m === ik(0x3d0) || m[ik(0x848)]('*.') && i[ik(0x56c)](m[ik(0x519)](0x1));
        });
    if (!j)
        return b[ij(0x44b)](b[ij(0x44b)](b[ij(0xc72)], String(c['subjectAltName'] || '')), ')');
    return null;
}
class a0bQ {
    constructor(a, b, c) {
        const il = a0cm, d = { 'kyFlu': il(0x79d) }, f = d[il(0x944)][il(0x31d)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[il(0x69a)] = a['localStreamData'];
                continue;
            case '1':
                this[il(0x63c)] = new a0bE();
                continue;
            case '2':
                this[il(0xd12)] = ![];
                continue;
            case '3':
                this[il(0x853)] = Buffer[il(0x66e)](0x0);
                continue;
            case '4':
                this['initiator'] = c;
                continue;
            case '5':
                this[il(0x950)] = 0x0;
                continue;
            case '6':
                this[il(0x803)] = 0x0;
                continue;
            case '7':
                this[il(0xbcf)] = null;
                continue;
            case '8':
                this[il(0xbf3)] = a;
                continue;
            case '9':
                this[il(0xb71)] = new a0bD(a);
                continue;
            case '10':
                this[il(0x13f)] = 0x0;
                continue;
            case '11':
                this[il(0x16e)] = ![];
                continue;
            case '12':
                this['id'] = b;
                continue;
            }
            break;
        }
    }
    [a0cm(0x21d)](a, b) {
        const im = a0cm, c = {
                'uOOEL': function (d, f) {
                    return d(f);
                }
            };
        this[im(0xb71)]['append'](a, c[im(0x543)](Boolean, b)), this['connection'][im(0x1bd)](this);
    }
}
class a0bR {
    constructor(a) {
        const io = a0cm, b = {
                'tofkI': io(0x982),
                'kNARO': function (f, g) {
                    return f === g;
                },
                'FeQNy': function (f, g) {
                    return f << g;
                },
                'uompu': function (f, g) {
                    return f * g;
                },
                'IKUAb': function (f, g) {
                    return f << g;
                },
                'mfKXT': function (f, g) {
                    return f === g;
                }
            }, c = b[io(0x247)][io(0x31d)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['peerMaxData'] = 0x0;
                continue;
            case '1':
                this[io(0x7c1)] = b[io(0xa87)](a[io(0x7c1)], undefined) ? 0x7530 : a[io(0x7c1)];
                continue;
            case '2':
                this[io(0x1c0)] = new Map();
                continue;
            case '3':
                this[io(0x4d3)] = ![];
                continue;
            case '4':
                this['retransmits'] = 0x0;
                continue;
            case '5':
                this['serverHello'] = Buffer['alloc'](0x0);
                continue;
            case '6':
                this[io(0x901)] = [
                    new a0bD(this),
                    new a0bD(this),
                    new a0bD(this)
                ];
                continue;
            case '7':
                this[io(0x3fc)] = ![];
                continue;
            case '8':
                this[io(0xb46)] = 0x0;
                continue;
            case '9':
                this[io(0x34d)] = a[io(0x34d)] || a0bc;
                continue;
            case '10':
                this[io(0x763)] = a['localMaxData'] || b['FeQNy'](0x1, 0x16);
                continue;
            case '11':
                this[io(0x78e)] = ![];
                continue;
            case '12':
                this[io(0x59e)] = null;
                continue;
            case '13':
                this[io(0x115)] = [];
                continue;
            case '14':
                this['peerCid'] = a0k['randomBytes'](0x8);
                continue;
            case '15':
                this[io(0x73e)] = new a0bO(this[io(0xb04)], this[io(0x34d)], this[io(0xcc5)]);
                continue;
            case '16':
                this['ackPending'] = [
                    ![],
                    ![],
                    ![]
                ];
                continue;
            case '17':
                this[io(0x933)] = 0x0;
                continue;
            case '18':
                this[io(0x14f)] = 0x2 * this[io(0x9ee)];
                continue;
            case '19':
                this[io(0x750)] = 0x3;
                continue;
            case '20':
                this[io(0x6c8)] = a[io(0x6c8)] || function () {
                };
                continue;
            case '21':
                this[io(0x4b8)] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '22':
                this[io(0x37d)] = 0x0;
                continue;
            case '23':
                this[io(0x83e)] = ![];
                continue;
            case '24':
                this[io(0x799)] = [
                    0x0,
                    0x0,
                    0x0
                ];
                continue;
            case '25':
                this[io(0x6fc)] = a['logger'];
                continue;
            case '26':
                this[io(0xc51)] = 0x0;
                continue;
            case '27':
                this[io(0x171)] = a[io(0x171)];
                continue;
            case '28':
                this[io(0xab2)] = b[io(0x7a8)](this[io(0x5fc)], this['maxPacket']);
                continue;
            case '29':
                this[io(0xbe6)] = [
                    new a0bE(),
                    new a0bE(),
                    new a0bE()
                ];
                continue;
            case '30':
                this[io(0x465)] = [
                    null,
                    null,
                    null
                ];
                continue;
            case '31':
                this[io(0x2ea)] = a['onReady'] || function () {
                };
                continue;
            case '32':
                this[io(0x277)] = 0x0;
                continue;
            case '33':
                this[io(0x751)] = ![];
                continue;
            case '34':
                this[io(0xc71)] = 0xfa;
                continue;
            case '35':
                this[io(0x3bf)] = a0k['randomBytes'](0x8);
                continue;
            case '36':
                this[io(0x215)] = ![];
                continue;
            case '37':
                this[io(0xcc5)] = a0bL([
                    [
                        a0bp['maxIdleTimeout'],
                        this[io(0x7c1)]
                    ],
                    [
                        a0bp[io(0xa07)],
                        this['localMaxData']
                    ],
                    [
                        a0bp['initialMaxStreamDataBidiLocal'],
                        this['localStreamData']
                    ],
                    [
                        a0bp[io(0xb3c)],
                        this[io(0x7a1)]
                    ],
                    [
                        a0bp['initialMaxStreamDataUni'],
                        this[io(0x7a1)]
                    ],
                    [
                        a0bp[io(0x2cf)],
                        b[io(0x908)](0x1, 0x18)
                    ],
                    [
                        a0bp[io(0x8fe)],
                        b[io(0xb03)](0x1, 0x18)
                    ],
                    [
                        a0bp[io(0x554)],
                        this[io(0x9ee)]
                    ],
                    [
                        a0bp[io(0x767)],
                        0x8
                    ],
                    [
                        a0bp['initialSourceConnectionId'],
                        this[io(0x3bf)]
                    ]
                ]);
                continue;
            case '38':
                this['stats'] = {
                    'rx': 0x0,
                    'tx': 0x0,
                    'rxBytes': 0x0,
                    'txBytes': 0x0,
                    'dropped': 0x0,
                    'retransmits': 0x0
                };
                continue;
            case '39':
                this['slowStartThreshold'] = Infinity;
                continue;
            case '40':
                this[io(0xca4)] = 0x0;
                continue;
            case '41':
                this[io(0x9ea)] = 0x0;
                continue;
            case '42':
                this[io(0x7e8)] = 0x0;
                continue;
            case '43':
                this['host'] = a['host'];
                continue;
            case '44':
                this['receiveWindow'] = a[io(0x622)] || 0x1 << 0x14;
                continue;
            case '45':
                this['closing'] = ![];
                continue;
            case '46':
                this[io(0x8ae)] = null;
                continue;
            case '47':
                this[io(0xb04)] = a['serverName'] || a['host'];
                continue;
            case '48':
                this['maxPacket'] = a['maxPacket'] || a0bi;
                continue;
            case '49':
                this['onClose'] = a[io(0xc35)] || function () {
                };
                continue;
            case '50':
                this[io(0x192)] = a[io(0x192)] || 0xa * this['maxPacket'];
                continue;
            case '51':
                this[io(0x493)] = null;
                continue;
            case '52':
                this['largestRecv'] = [
                    -0x1,
                    -0x1,
                    -0x1
                ];
                continue;
            case '53':
                this[io(0x3a7)] = 0x0;
                continue;
            case '54':
                this[io(0x884)] = a['onStreamEnd'] || function () {
                };
                continue;
            case '55':
                this['keepAlive'] = b[io(0x7e2)](a[io(0xaa5)], undefined) ? 0x3e8 : a[io(0xaa5)];
                continue;
            case '56':
                this['rttvar'] = null;
                continue;
            case '57':
                this['handshakeBytes'] = Buffer[io(0x66e)](0x0);
                continue;
            case '58':
                this[io(0x91c)] = ![];
                continue;
            case '59':
                this[io(0x951)] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '60':
                this['creditMaxData'] = ![];
                continue;
            case '61':
                this[io(0x3be)] = Buffer['alloc'](0x0);
                continue;
            case '62':
                this['remoteParameters'] = null;
                continue;
            case '63':
                this[io(0x774)] = [];
                continue;
            case '64':
                this[io(0x225)] = [];
                continue;
            case '65':
                this['appSendKeys'] = [
                    null,
                    null
                ];
                continue;
            case '66':
                this[io(0x854)] = this['initialWindow'];
                continue;
            case '67':
                this[io(0xa7a)] = null;
                continue;
            case '68':
                this[io(0x7a1)] = a[io(0x7a1)] || 0x1 << 0x14;
                continue;
            case '69':
                this[io(0x469)] = null;
                continue;
            case '70':
                this[io(0xca9)] = 0x0;
                continue;
            case '71':
                this[io(0x7fc)] = b[io(0xa87)](a[io(0x7fc)], !![]);
                continue;
            case '72':
                this[io(0x5fc)] = a['maxInflight'] || 0x100;
                continue;
            case '73':
                this[io(0x443)] = null;
                continue;
            case '74':
                this[io(0xe2)] = [];
                continue;
            case '75':
                this['onStream'] = a['onStream'] || function () {
                };
                continue;
            case '76':
                this[io(0x13d)] = 0x19;
                continue;
            }
            break;
        }
    }
    get [a0cm(0x9eb)]() {
        const ip = a0cm, a = {
                'JqrTd': function (b, c) {
                    return b === c;
                }
            };
        return a[ip(0x9ab)](this[ip(0x4d3)], !![]);
    }
    set [a0cm(0x9eb)](a) {
        const iq = a0cm, b = {
                'prcIK': function (c, d) {
                    return c === d;
                }
            };
        this[iq(0x4d3)] = b[iq(0x6c0)](a, !![]), this[iq(0x4d3)] && !this['closed'] && !this[iq(0xa64)] && this[iq(0x9a0)]('registration\x20failed');
    }
    [a0cm(0x52d)]() {
        const ir = a0cm, a = {
                'GFQvi': function (b, c) {
                    return b + c;
                },
                'KzUaB': ir(0xd09),
                'VaAHb': function (b, c) {
                    return b + c;
                },
                'umvvY': ir(0x976),
                'leCHX': ir(0x46a),
                'ZcoDI': ir(0x120),
                'TZyxr': ir(0x615)
            };
        return new Promise((b, c) => {
            const it = ir, d = {
                    'ssodZ': function (f, g) {
                        const is = a0b;
                        return a[is(0x6f3)](f, g);
                    },
                    'jOuhH': a[it(0x9ec)]
                };
            this[it(0xa7a)] = {
                'resolve': b,
                'reject': c
            }, this['socket'] = a0a3[it(0x12b)](a[it(0xa8c)]), this[it(0x469)]['on'](it(0x8d0), f => {
                const iu = it;
                try {
                    this[iu(0xd67)](f);
                } catch (g) {
                    this['_fail'](d[iu(0xaf0)](d[iu(0xad6)], g));
                }
            }), this[it(0x469)]['on'](a[it(0x10d)], f => {
                const iv = it;
                !this[iv(0x59e)] && this[iv(0x7cf)](a[iv(0x17f)](a['KzUaB'], f[iv(0x8d0)]));
            }), this[it(0x469)][it(0x306)](0x0, a[it(0x67b)], () => this['_start']());
        });
    }
    ['_start']() {
        const iw = a0cm, a = {
                'Jnxsv': function (b, c, d) {
                    return b(c, d);
                },
                'nrBPa': function (b, c) {
                    return b + c;
                },
                'RXuQE': function (b, c) {
                    return b + c;
                },
                'xTKXG': 'quic\x20dial\x20',
                'CbzlU': iw(0xb17),
                'ftCpY': iw(0x13e),
                'WLHcz': 'hex'
            };
        this[iw(0x465)][a0bk] = a[iw(0x606)](a0bA, this['peerCid'], !![]), this[iw(0x901)][a0bk][iw(0xd18)](this[iw(0x73e)]['buildClientHello'](), ![]), this[iw(0xca9)] = Date['now'](), this[iw(0x933)] = Date[iw(0x29a)](), this[iw(0x6fc)]['debug'](a[iw(0xca5)](a['nrBPa'](a[iw(0xca5)](a[iw(0x15f)](a['RXuQE'](a['nrBPa'](a[iw(0x3af)], this['host']), ':'), this[iw(0x171)]) + a[iw(0x62d)], this['alpn']), a['ftCpY']), this[iw(0x31e)]['toString'](a[iw(0x838)]))), this[iw(0x493)] = setInterval(() => this[iw(0x693)](), 0x14), this[iw(0x693)]();
    }
    [a0cm(0x693)]() {
        const ix = a0cm, a = {
                'OXlBR': function (d, f) {
                    return d >= f;
                },
                'kLZgf': function (d, f) {
                    return d - f;
                },
                'jDIZU': function (d, f) {
                    return d < f;
                },
                'UYAFX': function (d, f) {
                    return d < f;
                },
                'Ghqau': function (d, f) {
                    return d > f;
                },
                'SVqem': function (d, f) {
                    return d - f;
                },
                'pjXNl': function (d, f) {
                    return d + f;
                },
                'ZTbBC': ix(0x837)
            };
        if (this[ix(0x59e)])
            return;
        const b = Date['now']();
        this['_checkLoss'](b);
        this[ix(0xaa5)] && this['handshakeComplete'] && a[ix(0x867)](a[ix(0x68a)](b, this['lastEliciting']), this['keepAlive']) && (this[ix(0x78e)] = !![]);
        let c = 0x0;
        while (c < 0x10 && a[ix(0x2af)](this['_totalInFlight'](), this['maxInflight']) && (a[ix(0xc17)](this[ix(0x9b1)](), this['_sendWindow']()) || this[ix(0x1dc)]() || this[ix(0xa64)])) {
            const d = this[ix(0x16c)]();
            if (d === null)
                break;
            this['_transmit'](d), c += 0x1;
        }
        a[ix(0xbdb)](a[ix(0xbbe)](b, this[ix(0xca9)]), Math[ix(0xcfa)](this[ix(0x7c1)], 0x3a98)) && this[ix(0x7cf)](a[ix(0x530)](a['ZTbBC'] + a[ix(0x68a)](b, this[ix(0xca9)]), 'ms'));
    }
    ['_totalInFlight']() {
        const iy = a0cm, a = {
                'lwbMX': function (b, c) {
                    return b + c;
                }
            };
        return a[iy(0xc85)](a[iy(0xc85)](this[iy(0x4b8)][0x0][iy(0x957)], this[iy(0x4b8)][0x1][iy(0x957)]), this[iy(0x4b8)][0x2]['length']);
    }
    [a0cm(0x1dc)]() {
        const iz = a0cm, a = {
                'mYUFj': function (b, c) {
                    return b !== c;
                }
            };
        for (let b = 0x0; b < 0x3; b++) {
            if (a[iz(0x887)](this[iz(0x465)][b], null) && this['ackPending'][b] && this[iz(0x951)][b]['length'])
                return !![];
        }
        return ![];
    }
    [a0cm(0x9b1)]() {
        let a = 0x0;
        for (let b = 0x0; b < 0x3; b++) {
            for (const c of this['inFlight'][b]) {
                a += c['bytes'];
            }
        }
        return a;
    }
    [a0cm(0x4ff)]() {
        const iA = a0cm;
        return this['handshakeComplete'] ? this[iA(0x854)] : Infinity;
    }
    [a0cm(0x1ac)]() {
        const iB = a0cm, a = {
                'pVXtu': function (b, c) {
                    return b * c;
                }
            };
        return Math[iB(0xcfa)](a[iB(0xcd5)](this[iB(0xc71)], Math['pow'](0x2, this[iB(0xca4)])), 0x14);
    }
    ['_recordRttSample'](a) {
        const iC = a0cm, b = {
                'lUyYx': function (c, d) {
                    return c / d;
                },
                'zCCXB': function (c, d) {
                    return c + d;
                },
                'GHTlz': function (c, d) {
                    return c - d;
                },
                'EjbZu': function (c, d) {
                    return c / d;
                },
                'WyTgK': function (c, d) {
                    return c + d;
                },
                'DHWZO': function (c, d) {
                    return c * d;
                },
                'fPrbI': function (c, d) {
                    return c + d;
                }
            };
        this[iC(0x8ae)] === null ? (this['srtt'] = a, this[iC(0xafe)] = a / 0x2) : (this[iC(0xafe)] = b[iC(0x161)](b[iC(0x545)](this[iC(0xafe)] * 0x3, Math[iC(0x98c)](b[iC(0x1a0)](this['srtt'], a))), 0x4), this[iC(0x8ae)] = b[iC(0xb07)](b[iC(0x5e4)](b[iC(0x9bf)](this['srtt'], 0x7), a), 0x8)), this['pto'] = Math[iC(0x272)](b[iC(0xbbc)](this['srtt'] + b[iC(0x9bf)](0x4, this[iC(0xafe)]), this['peerMaxAckDelay']));
    }
    [a0cm(0x569)](a) {
        const iD = a0cm, b = {
                'ikRyW': function (c, d) {
                    return c / d;
                },
                'SHLiS': function (c, d) {
                    return c * d;
                },
                'PKqds': function (c, d) {
                    return c + d;
                },
                'uxZCl': function (c, d) {
                    return c + d;
                },
                'QLUoA': iD(0x24f),
                'fQGuU': iD(0xb7f),
                'KncSa': iD(0x4da),
                'WJivx': function (c, d) {
                    return c === d;
                }
            };
        this[iD(0xb7a)] = Math[iD(0xcfa)](Math['floor'](b[iD(0x9a6)](this[iD(0x854)], 0x2)), b[iD(0x962)](0x2, this[iD(0x14f)])), this['congestionWindow'] = this['minWindow'], this[iD(0x6fc)][iD(0x8c1)](b[iD(0x703)](b[iD(0x703)](b[iD(0x703)](b[iD(0x703)](b['uxZCl'](iD(0x39a), a0bn[a]), b[iD(0xa06)]), this[iD(0x854)]) + b[iD(0x6b3)], this['slowStartThreshold']) + b['KncSa'], b[iD(0x820)](this['srtt'], null) ? '-' : Math[iD(0x272)](this[iD(0x8ae)])) + 'ms');
    }
    [a0cm(0xbdf)](a) {
        const iE = a0cm, b = {
                'DeqAH': function (c, d) {
                    return c < d;
                },
                'WNMMf': function (c, d) {
                    return c + d;
                },
                'EbmaL': function (c, d) {
                    return c + d;
                },
                'uPnou': function (c, d) {
                    return c + d;
                },
                'uIcNP': function (c, d) {
                    return c + d;
                },
                'YJRpd': iE(0x282),
                'tlVPu': iE(0x96e),
                'jwNbe': '\x20pto=',
                'QUGRC': function (c, d) {
                    return c > d;
                },
                'VSNtB': iE(0x19f)
            };
        for (let c = 0x0; b[iE(0xc0b)](c, 0x3); c++) {
            const d = this[iE(0x4b8)][c];
            if (!d['length'])
                continue;
            if (a - d[0x0][iE(0x7c3)] < this[iE(0x1ac)]())
                continue;
            const f = d[0x0];
            this[iE(0x4b8)][c] = d[iE(0x519)](0x1), this['_returnLost'](c, f), this['retransmits'] += 0x1, this[iE(0x187)][iE(0xd51)] += 0x1, this[iE(0xca4)] += 0x1, this[iE(0x6fc)][iE(0x8c1)](b['WNMMf'](b[iE(0xb77)](b[iE(0x155)](b[iE(0x15d)](b[iE(0xc47)] + a0bn[c], b[iE(0x616)]), f['pn']) + '\x20pending=', this['inFlight'][c][iE(0x957)]), b[iE(0xa66)]) + this[iE(0x1ac)]());
            if (b[iE(0x638)](this['retransmits'], 0x18)) {
                this[iE(0x7cf)](b[iE(0x155)](b['VSNtB'] + this['retransmits'], '\x20retransmits'));
                return;
            }
        }
    }
    ['_returnLost'](a, b) {
        const iF = a0cm;
        b[iF(0xcb5)] && this[iF(0x901)][a]['lossRanges']([b['crypto']]);
        for (const c of b[iF(0x1c0)]) {
            c['stream'][iF(0xb71)]['lossRanges']([{
                    'start': c['start'],
                    'length': c[iF(0x957)]
                }]), c[iF(0x9ac)] && c[iF(0x6fa)]['send']['lossRanges']([{
                    'start': c['start'] + c[iF(0x957)],
                    'length': 0x0,
                    'fin': !![]
                }]), this[iF(0x1bd)](c['stream']);
        }
    }
    [a0cm(0x3fd)]() {
        const iG = a0cm;
        this[iG(0xd51)] = 0x0, this[iG(0xca4)] = 0x0;
    }
    [a0cm(0xd94)](a, b) {
        const iH = a0cm, c = {
                'OYssn': function (d, f) {
                    return d === f;
                },
                'hRPSC': function (d, f) {
                    return d + f;
                },
                'TskMA': function (d, f) {
                    return d + f;
                },
                'mdVsM': function (d, f) {
                    return d + f;
                },
                'fejbc': iH(0xb9a),
                'OQnrj': iH(0xd72)
            };
        if (c['OYssn'](this[iH(0x465)][a], null))
            return;
        this['keys'][a] = null, this[iH(0x4b8)][a] = [], this[iH(0x6fc)][iH(0x8c1)](c[iH(0x685)](c['hRPSC'](c[iH(0xa4b)](c[iH(0x5bc)](c['fejbc'], a0bn[a]), c[iH(0x326)]), b), ')'));
    }
    [a0cm(0xa1f)]() {
        const iI = a0cm, a = {
                'Yuvat': function (k, l) {
                    return k === l;
                },
                'EvxGF': function (k, l) {
                    return k(l);
                },
                'bZfpw': function (k, l) {
                    return k + l;
                }
            }, b = a0bl, c = this[iI(0x465)][b];
        if (a[iI(0x744)](c, null) || !this[iI(0x738)][b] || a['Yuvat'](this[iI(0x951)][b][iI(0x957)], 0x0))
            return;
        const d = a[iI(0xbe8)](a0bI, this[iI(0x951)][b][iI(0x519)](-0x10));
        this['ackPending'][b] = ![];
        const f = this[iI(0x799)][b]++, g = this[iI(0x404)](b, a['bZfpw'](a[iI(0x432)](a0bh, d[iI(0x957)]), 0x10), f), h = Buffer[iI(0x8d4)]([
                g['header'],
                g[iI(0x753)]
            ]), i = Buffer['concat']([
                h,
                c[iI(0xb71)]['seal'](f, h, d)
            ]), j = a0bF(c['send'], i, g['pnOffset'], g[iI(0x122)]);
        if (j === null) {
            this[iI(0x738)][b] = !![];
            return;
        }
        this[iI(0xd5e)]({
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
    [a0cm(0xa81)]() {
        const iJ = a0cm, a = {
                'ViKez': iJ(0xada),
                'rAAeK': iJ(0x77a)
            }, b = a[iJ(0xb37)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[iJ(0x83e)] = !![];
                continue;
            case '1':
                this[iJ(0xd94)](a0bl, a[iJ(0x2b9)]);
                continue;
            case '2':
                if (this[iJ(0x83e)] || !this[iJ(0x91c)] || !this[iJ(0x751)])
                    return;
                continue;
            case '3':
                this[iJ(0xd94)](a0bk, 'handshake\x20confirmed');
                continue;
            case '4':
                this['_flushHandshakeAck']();
                continue;
            }
            break;
        }
    }
    [a0cm(0x2bb)](a) {
        const iK = a0cm, b = {
                'UNaHh': function (d, f) {
                    return d === f;
                },
                'OrjhN': function (d, f) {
                    return d + f;
                },
                'ETllS': function (d, f) {
                    return d + f;
                },
                'Acgun': function (d, f) {
                    return d === f;
                },
                'ohdGY': function (d, f) {
                    return d + f;
                },
                'mylag': function (d, f) {
                    return d + f;
                },
                'eftWj': function (d, f) {
                    return d + f;
                },
                'zpFWe': function (d, f) {
                    return d + f;
                },
                'YUhlU': function (d, f) {
                    return d + f;
                },
                'BePJB': function (d, f) {
                    return d + f;
                },
                'XGuUk': function (d, f) {
                    return d + f;
                },
                'LZTkD': function (d, f) {
                    return d + f;
                },
                'oleoH': function (d, f) {
                    return d + f;
                },
                'ybQsi': function (d, f) {
                    return d(f);
                }
            }, c = 0x10;
        if (b['UNaHh'](a, a0bm))
            return b['OrjhN'](b[iK(0xbf8)](0x1, this[iK(0x31e)][iK(0x957)]), a0bh) + c;
        if (b[iK(0x6a6)](a, a0bl))
            return b[iK(0x348)](b[iK(0x77f)](b[iK(0xb40)](b[iK(0xb06)](b[iK(0x43f)](b[iK(0xb06)](b[iK(0x710)](0x1, 0x4) + 0x1, this[iK(0x31e)]['length']), 0x1), this['ourCid'][iK(0x957)]), 0x2), a0bh), c);
        return b[iK(0xbf8)](b[iK(0x710)](b[iK(0x3f3)](b[iK(0xb06)](b[iK(0x710)](b[iK(0xd30)](b[iK(0x83b)](b[iK(0x6c4)](0x1, 0x4), 0x1), this[iK(0x31e)]['length']), 0x1), this[iK(0x3bf)]['length']) + b['ybQsi'](a0bq, this[iK(0x3be)][iK(0x957)]) + this[iK(0x3be)][iK(0x957)], 0x2), a0bh), c);
    }
    [a0cm(0x404)](a, b, c) {
        const iL = a0cm, d = {
                'UmfQk': function (k, l) {
                    return k >>> l;
                },
                'aVOoL': function (k, l) {
                    return k | l;
                },
                'xmhGl': function (k, l) {
                    return k << l;
                },
                'FUAAV': function (k, l) {
                    return k - l;
                },
                'wWrAr': function (k, l) {
                    return k + l;
                },
                'UxqRN': function (k, l) {
                    return k === l;
                }
            }, f = new a0bt(), g = Buffer[iL(0x66e)](a0bh);
        g[iL(0x3da)](d[iL(0x82b)](c, 0x0), 0x0);
        if (a === a0bm)
            return f[iL(0x334)](d[iL(0x2c1)](d[iL(0x2c1)](0x40, d[iL(0x1eb)](this[iL(0x277)], 0x2)), d[iL(0xb61)](a0bh, 0x1))), f[iL(0xac4)](this['peerCid']), {
                'header': f[iL(0xaa2)](),
                'pnBytes': g,
                'pnOffset': d[iL(0x4d0)](0x1, this['peerCid'][iL(0x957)]),
                'long': ![]
            };
        const h = d['UxqRN'](a, a0bk) ? 0x0 : 0x2;
        f[iL(0x334)](d[iL(0x2c1)](d['aVOoL'](0xc0, h << 0x4), d['FUAAV'](a0bh, 0x1))), f['u32'](a0bb), f[iL(0x334)](this[iL(0x31e)][iL(0x957)])[iL(0xac4)](this['peerCid']);
        a === a0bk ? (f['byte'](this[iL(0x3bf)][iL(0x957)])['bytes'](this[iL(0x3bf)]), f[iL(0xc3c)](this[iL(0x3be)][iL(0x957)]), this[iL(0x3be)][iL(0x957)] && f[iL(0xac4)](this['peerToken'])) : f[iL(0x334)](0x0)[iL(0xac4)](Buffer[iL(0x66e)](0x0));
        const i = Buffer[iL(0x66e)](0x2);
        i[iL(0x96f)](d['aVOoL'](0x4000, b), 0x0), f['bytes'](i);
        const j = f[iL(0xaa2)]();
        return {
            'header': j,
            'pnBytes': g,
            'pnOffset': j['length'],
            'long': !![]
        };
    }
    [a0cm(0x234)]() {
        const iM = a0cm, a = {
                'xAzkS': function (b, c) {
                    return b === c;
                },
                'jGlSL': function (b, c) {
                    return b === c;
                }
            };
        for (const b of [
                a0bk,
                a0bl,
                a0bm
            ]) {
            if (a['xAzkS'](this['keys'][b], null))
                continue;
            if (this['ackPending'][b] && this['recvRanges'][b][iM(0x957)])
                return b;
            if (this[iM(0x258)](b)['length'])
                return b;
            if (this[iM(0x901)][b][iM(0x477)][iM(0x957)])
                return b;
            if (a['jGlSL'](b, a0bm) && (this[iM(0xe2)][iM(0x957)] || this[iM(0x225)][iM(0x957)] || this[iM(0x78e)] || this[iM(0xa64)]))
                return b;
        }
        return -0x1;
    }
    [a0cm(0x258)](a) {
        const iN = a0cm;
        return this[iN(0x774)][iN(0x781)](b => b[iN(0x55d)] === a);
    }
    [a0cm(0x16c)]() {
        const iO = a0cm, a = {
                'SGRmA': function (o, p) {
                    return o < p;
                },
                'ULpOF': function (o, p) {
                    return o - p;
                },
                'FbFRN': function (o, p) {
                    return o < p;
                },
                'FkGdb': function (o, p) {
                    return o(p);
                },
                'AOutE': function (o, p) {
                    return o > p;
                },
                'AokDI': function (o, p) {
                    return o - p;
                },
                'JIiad': function (o, p) {
                    return o > p;
                },
                'gFIPs': function (o, p) {
                    return o - p;
                },
                'jbstr': function (o, p) {
                    return o === p;
                },
                'jfvWw': iO(0x9a0),
                'eaowJ': 'utf8',
                'aCuoX': function (o, p) {
                    return o === p;
                },
                'qJTBZ': function (o, p) {
                    return o > p;
                },
                'IEgoQ': function (o, p) {
                    return o + p;
                },
                'plsdj': function (o, p, q, r, s) {
                    return o(p, q, r, s);
                },
                'cwxFl': function (o, p) {
                    return o === p;
                }
            }, b = this['_pickEpoch']();
        if (a[iO(0x22f)](b, 0x0))
            return null;
        let c = a[iO(0x5f8)](this[iO(0x9ee)], this['_headerOverhead'](b));
        if (a['FbFRN'](c, 0x10))
            return null;
        const d = [], f = {
                'crypto': null,
                'streams': [],
                'ping': ![],
                'closing': ![],
                'oneOff': ![]
            };
        if (this[iO(0x738)][b] && this[iO(0x951)][b][iO(0x957)]) {
            const o = a[iO(0x665)](a0bI, this[iO(0x951)][b][iO(0x519)](-0x10));
            d[iO(0xd32)](o), c -= o[iO(0x957)], this[iO(0x738)][b] = ![];
        }
        for (const p of this[iO(0x258)](b)) {
            if (a[iO(0xbd0)](p['frame'][iO(0x957)], a[iO(0x194)](c, 0x10)))
                break;
            d['push'](p[iO(0x3ec)]), c -= p[iO(0x3ec)][iO(0x957)], this['pendingOneOff'][iO(0x2f2)](this[iO(0x774)]['indexOf'](p), 0x1), f[iO(0x8e5)] = !![];
        }
        const g = this['cryptoSend'][b];
        if (g[iO(0x477)]['length'] && a['JIiad'](c, 0x10)) {
            const q = g[iO(0xbfd)](a[iO(0x9ae)](c, 0xc)), r = new a0bt();
            r['byte'](a0bo[iO(0xcb5)])[iO(0xc3c)](q[iO(0x68e)])['varint'](q[iO(0x957)])['bytes'](q[iO(0xac4)]);
            const s = r[iO(0xaa2)]();
            d['push'](s), c -= s[iO(0x957)], f[iO(0xcb5)] = q;
        }
        a[iO(0x407)](b, a0bm) && (this[iO(0xc50)](d, f, c), this[iO(0x821)](d, f, Math[iO(0x782)](c, a[iO(0x5f8)](this[iO(0x4ff)](), this[iO(0x9b1)]()))));
        if (b === a0bm && this['closing']) {
            const t = new a0bt();
            t[iO(0x334)](a0bo[iO(0x7f1)])[iO(0xc3c)](0x0)[iO(0xc3c)](0x0)[iO(0xac4)](Buffer['from'](this[iO(0x443)] || a[iO(0x773)], a['eaowJ'])[iO(0xb9c)](0x0, 0x40)), d[iO(0xd32)](t[iO(0xaa2)]()), f[iO(0xa64)] = !![];
        } else
            b === a0bm && this[iO(0x78e)] && (d[iO(0xd32)](Buffer['from']([a0bo[iO(0x2d3)]])), this['pingPending'] = ![], f[iO(0x2d3)] = !![]);
        if (!d[iO(0x957)])
            return null;
        let h = Buffer[iO(0x8d4)](d);
        if (a[iO(0xa5a)](b, a0bk) && !this['handshakeComplete']) {
            const u = a[iO(0x194)](a0bj - this['_headerOverhead'](b), h[iO(0x957)]);
            a[iO(0x523)](u, 0x0) && (h = Buffer[iO(0x8d4)]([
                h,
                Buffer['alloc'](u)
            ]));
        }
        const i = this[iO(0x799)][b]++, j = a[iO(0x407)](b, a0bm) ? this['appSendKeys'][this[iO(0x277)]] : this[iO(0x465)][b][iO(0xb71)], k = this[iO(0x404)](b, a['IEgoQ'](a['IEgoQ'](a0bh, h[iO(0x957)]), 0x10), i), l = Buffer[iO(0x8d4)]([
                k['header'],
                k['pnBytes']
            ]), m = Buffer[iO(0x8d4)]([
                l,
                j[iO(0x9c2)](i, l, h)
            ]), n = a['plsdj'](a0bF, j, m, k[iO(0x6d5)], k[iO(0x122)]);
        if (a['cwxFl'](n, null))
            return this[iO(0x7cf)](iO(0x2e2)), null;
        return {
            'epoch': b,
            'packet': n,
            'pn': i,
            'meta': f,
            'ackEliciting': a['FkGdb'](Boolean, f[iO(0xcb5)] || f['streams'][iO(0x957)] || f[iO(0x2d3)] || f['closing'] || f[iO(0x8e5)]),
            'summary': this[iO(0xd39)](d)
        };
    }
    [a0cm(0xd39)](a) {
        const iP = a0cm, b = {
                'xYjxq': iP(0x690),
                'RYvET': function (d, f) {
                    return d === f;
                },
                'AHrHN': iP(0xcb5),
                'OQaDA': function (d, f) {
                    return d === f;
                },
                'PoNDj': iP(0x2d3),
                'SdIdf': function (d, f) {
                    return d === f;
                },
                'Macuh': function (d, f) {
                    return d === f;
                },
                'kFJQH': 'max-data',
                'gShvO': function (d, f) {
                    return d === f;
                },
                'fGqDi': 'max-stream-data',
                'ovwQl': function (d, f) {
                    return d === f;
                },
                'ZhZzp': 'path-response'
            }, c = [];
        for (const d of a) {
            const f = d[0x0];
            if (f === a0bo[iP(0x690)])
                c['push'](b[iP(0x4e5)]);
            else {
                if (b['RYvET'](f, a0bo[iP(0xcb5)]))
                    c[iP(0xd32)](b[iP(0x771)]);
                else {
                    if (b[iP(0x24a)](f, a0bo['ping']))
                        c['push'](b[iP(0x9d7)]);
                    else {
                        if (b[iP(0x44a)](f, a0bo[iP(0x6fa)]))
                            c[iP(0xd32)](iP(0x6fa));
                        else {
                            if (b['Macuh'](f, a0bo[iP(0x62a)]))
                                c[iP(0xd32)](b[iP(0x180)]);
                            else {
                                if (b[iP(0x2fa)](f, a0bo[iP(0xaab)]))
                                    c[iP(0xd32)](b[iP(0xec)]);
                                else
                                    b[iP(0xae6)](f, a0bo[iP(0xa85)]) ? c[iP(0xd32)](b[iP(0x2cd)]) : c['push']('0x' + f[iP(0x4a4)](0x10));
                            }
                        }
                    }
                }
            }
        }
        return c['join'](',');
    }
    ['_creditFrames'](a, b, c) {
        const iQ = a0cm, d = {
                'uaUEX': function (f, g) {
                    return f > g;
                },
                'IPTQF': function (f, g) {
                    return f - g;
                },
                'lVelN': function (f, g) {
                    return f < g;
                }
            };
        if (this[iQ(0x60c)] && d[iQ(0x99d)](c, 0xc)) {
            const f = new a0bt();
            f[iQ(0x334)](a0bo[iQ(0x62a)])[iQ(0xc3c)](this[iQ(0x763)]), a[iQ(0xd32)](f['build']()), this[iQ(0x60c)] = ![], c -= a[d[iQ(0x5ec)](a['length'], 0x1)][iQ(0x957)];
        }
        for (const g of this[iQ(0x225)]['slice']()) {
            if (d[iQ(0x95c)](c, 0x14))
                break;
            const h = new a0bt();
            h[iQ(0x334)](a0bo[iQ(0xaab)])[iQ(0xc3c)](g['id'])['varint'](g[iQ(0x69a)]);
            const i = h[iQ(0xaa2)]();
            a[iQ(0xd32)](i), c -= i['length'];
            const j = this['creditReady'][iQ(0x3b8)](g);
            this[iQ(0x225)][iQ(0x2f2)](j, 0x1);
        }
    }
    [a0cm(0x88d)](a) {
        const iR = a0cm, b = {
                'lCWTF': function (c, d) {
                    return c === d;
                },
                'xAgBz': iR(0x8a7)
            };
        if (a[iR(0x803)])
            return a['peerLimit'];
        return b[iR(0x32d)](a[iR(0xb60)], b[iR(0x556)]) ? this['peerStreamRemote'] : this[iR(0x7e8)];
    }
    [a0cm(0x821)](a, b, c) {
        const iS = a0cm, d = {
                'bEnyB': function (f, g) {
                    return f < g;
                },
                'fMIrx': function (f, g) {
                    return f - g;
                },
                'zzSIt': function (f, g) {
                    return f - g;
                },
                'YmnfY': function (f, g) {
                    return f <= g;
                },
                'gYswm': function (f, g) {
                    return f - g;
                },
                'UGoit': function (f, g) {
                    return f === g;
                },
                'Uhidb': function (f, g) {
                    return f | g;
                },
                'uCcmK': function (f, g) {
                    return f >= g;
                },
                'wBLzS': function (f, g) {
                    return f + g;
                },
                'fOisu': function (f, g) {
                    return f | g;
                },
                'gFQqs': function (f, g) {
                    return f | g;
                },
                'UAWsx': function (f, g) {
                    return f | g;
                },
                'EvkTz': function (f, g) {
                    return f - g;
                }
            };
        for (const f of this['sendReady'][iS(0x519)]()) {
            if (d[iS(0x585)](c, 0x18))
                break;
            const g = Math['min'](d[iS(0x7b3)](this[iS(0x8aa)], this['connectionSent']), d[iS(0x924)](this[iS(0x88d)](f), f[iS(0x950)]));
            if (d['YmnfY'](g, 0x0))
                break;
            const h = f['send'][iS(0xbfd)](Math[iS(0x782)](d[iS(0x5ab)](c, 0x14), g));
            if (d[iS(0xae0)](h, null)) {
                if (f['send']['takeFin']()) {
                    const n = new a0bt();
                    n[iS(0x334)](d[iS(0x527)](d[iS(0x527)](d[iS(0x527)](a0bo[iS(0x6fa)], 0x4), 0x2), 0x1))['varint'](f['id'])[iS(0xc3c)](f['send'][iS(0x316)][iS(0x957)])[iS(0xc3c)](0x0);
                    const o = n[iS(0xaa2)]();
                    a[iS(0xd32)](o), c -= o[iS(0x957)], b[iS(0x1c0)]['push']({
                        'stream': f,
                        'start': f[iS(0xb71)]['data'][iS(0x957)],
                        'length': 0x0,
                        'fin': !![]
                    });
                } else
                    this[iS(0xc6e)](f);
                continue;
            }
            const i = d[iS(0x5af)](d['wBLzS'](h['start'], h[iS(0x957)]), f['send'][iS(0x316)][iS(0x957)]), j = d[iS(0x88b)](d[iS(0xdab)](0x4, 0x2), i && f[iS(0xb71)]['fin'] ? 0x1 : 0x0), k = new a0bt();
            k['byte'](d[iS(0x5b8)](a0bo[iS(0x6fa)], j))[iS(0xc3c)](f['id'])['varint'](h[iS(0x68e)])[iS(0xc3c)](h['length'])[iS(0xac4)](h[iS(0xac4)]);
            const l = k[iS(0xaa2)]();
            a[iS(0xd32)](l), c -= l[iS(0x957)], b[iS(0x1c0)][iS(0xd32)]({
                'stream': f,
                'start': h[iS(0x68e)],
                'length': h[iS(0x957)],
                'fin': i && f['send'][iS(0x9ac)],
                'retransmitted': h['retransmitted']
            });
            const m = Math[iS(0xcfa)](0x0, d[iS(0x22c)](d[iS(0x7ad)](h[iS(0x68e)], h[iS(0x957)]), f[iS(0x950)]));
            f[iS(0x950)] = Math['max'](f[iS(0x950)], d[iS(0x7ad)](h[iS(0x68e)], h[iS(0x957)])), this[iS(0x9ea)] += m, f['send'][iS(0x287)]() && this['_dropSendReady'](f);
        }
    }
    [a0cm(0xc6e)](a) {
        const iT = a0cm, b = {
                'OcYoP': function (d, f) {
                    return d >= f;
                }
            }, c = this[iT(0xe2)][iT(0x3b8)](a);
        b['OcYoP'](c, 0x0) && this[iT(0xe2)][iT(0x2f2)](c, 0x1);
    }
    ['markSendReady'](a) {
        const iU = a0cm, b = {
                'KszMf': function (c, d) {
                    return c < d;
                }
            };
        b['KszMf'](this[iU(0xe2)][iU(0x3b8)](a), 0x0) && this['sendReady'][iU(0xd32)](a);
    }
    ['openStream']() {
        const iV = a0cm, a = { 'mCZts': iV(0x8a7) }, b = new a0bQ(this, this[iV(0x3a7)], a[iV(0xaff)]);
        return this[iV(0x3a7)] += 0x4, this[iV(0x1c0)][iV(0xb2b)](b['id'], b), b;
    }
    async [a0cm(0x7dc)](a, b, c) {
        const iW = a0cm, d = {
                'IRlsY': function (g, h) {
                    return g === h;
                },
                'NCugI': iW(0xd8d)
            }, f = this[iW(0x1c0)][iW(0x340)](a);
        if (d[iW(0x5ed)](f, undefined))
            throw new Error(d[iW(0x352)] + a);
        f[iW(0x21d)](b, c);
    }
    [a0cm(0xd5e)](a) {
        const iX = a0cm, b = {
                'ZXQzp': function (c, d) {
                    return c + d;
                },
                'hEAzc': iX(0x319),
                'pkCJY': function (c, d) {
                    return c === d;
                },
                'LwVmH': function (c, d) {
                    return c === d;
                },
                'PnnHi': function (c, d) {
                    return c <= d;
                },
                'KwRPk': function (c, d) {
                    return c + d;
                },
                'RNnEK': function (c, d) {
                    return c + d;
                },
                'KebgX': 'QUICDBG-HS\x20pn=',
                'GVUSh': iX(0xf6),
                'oliAs': iX(0x6f4),
                'XvxYl': function (c, d) {
                    return c + d;
                },
                'ceGYQ': function (c, d) {
                    return c + d;
                },
                'kakqn': function (c, d) {
                    return c + d;
                },
                'nAthp': function (c, d) {
                    return c + d;
                },
                'NaNQR': function (c, d) {
                    return c + d;
                },
                'twgjY': function (c, d) {
                    return c + d;
                },
                'KpKlk': 'tx\x20',
                'mPOeU': function (c, d) {
                    return c !== d;
                },
                'ihRvl': function (c, d) {
                    return c === d;
                }
            };
        if (b[iX(0x7f5)](this[iX(0x469)], null) || this['closed'])
            return;
        this[iX(0x469)]['send'](a[iX(0x1d7)], 0x0, a[iX(0x1d7)]['length'], this[iX(0x171)], this['host'], c => {
            const iY = iX;
            c && !this['closed'] && this[iY(0x6fc)]['debug'](b['ZXQzp'](b[iY(0x471)], c[iY(0x8d0)]));
        });
        if (process.env.KISAMA_QUIC_DEBUG && b[iX(0xcb4)](a[iX(0x55d)], 0x1) && b[iX(0xca0)](this['stats']['tx'], 0x28))
            this['log'][iX(0x910)](b[iX(0x37b)](b['RNnEK'](b[iX(0x6c1)] + a['pn'], b[iX(0x669)]), a[iX(0x1d7)][iX(0x4a4)](b[iX(0x53a)])));
        this[iX(0x187)]['tx'] += 0x1, this['stats'][iX(0xf3)] += a[iX(0x1d7)][iX(0x957)];
        a[iX(0x55d)] === a0bk && (this[iX(0xc51)] += 0x1);
        b[iX(0xcb4)](a[iX(0x55d)], a0bl) && b[iX(0xcb4)](this[iX(0x901)][a0bl][iX(0x477)][iX(0x957)], 0x0) && (this['finishedSent'] = !![]);
        this[iX(0x6fc)][iX(0x8c1)](b['ZXQzp'](b[iX(0x1f2)](b[iX(0xd3d)](b[iX(0x223)](b[iX(0x49a)](b['NaNQR'](b[iX(0x67d)](b[iX(0x13b)] + a[iX(0x1d7)]['length'], 'B\x20'), a0bn[a['epoch']]), '\x20pn='), a['pn']), '\x20['), a[iX(0x9a4)]), ']'));
        if (a[iX(0x398)]) {
            const c = b[iX(0x9e7)](a[iX(0x9dd)]['crypto'], null) && b[iX(0x7a7)](a[iX(0x9dd)][iX(0xcb5)][iX(0xbaf)], !![]) || a[iX(0x9dd)][iX(0x1c0)][iX(0x5be)](d => d[iX(0xbaf)] === !![]);
            this['inFlight'][a[iX(0x55d)]][iX(0xd32)]({
                'pn': a['pn'],
                'time': Date[iX(0x29a)](),
                'bytes': a[iX(0x1d7)][iX(0x957)],
                'crypto': a['meta'][iX(0xcb5)],
                'streams': a[iX(0x9dd)]['streams'],
                'retransmitted': c
            }), this[iX(0x933)] = Date[iX(0x29a)]();
        }
    }
    [a0cm(0xd67)](a) {
        const iZ = a0cm, b = {
                'qNwYH': function (d, f) {
                    return d < f;
                },
                'pOEhj': function (d, f) {
                    return d & f;
                },
                'nLLhc': function (d, f) {
                    return d === f;
                },
                'NPCer': function (d, f) {
                    return d !== f;
                },
                'rrxVl': 'rx\x20version\x20negotiation\x20or\x20unknown\x20version\x200x',
                'lnVsq': function (d, f) {
                    return d === f;
                },
                'wNWZd': function (d, f) {
                    return d + f;
                }
            };
        this[iZ(0x187)]['rx'] += 0x1, this[iZ(0x187)][iZ(0x447)] += a[iZ(0x957)], this[iZ(0xca9)] = Date[iZ(0x29a)]();
        let c = 0x0;
        while (b[iZ(0x40c)](c, a[iZ(0x957)])) {
            const d = a[c];
            if (!b[iZ(0x40f)](d, 0x80)) {
                this[iZ(0x678)](a['subarray'](c));
                return;
            }
            const f = a[iZ(0xb9c)](c), g = this[iZ(0x5f5)](f, 0x0);
            if (b['nLLhc'](g, null))
                return;
            if (b[iZ(0x62c)](g[iZ(0x28f)], a0bb)) {
                this[iZ(0x6fc)][iZ(0x8c1)](b[iZ(0xb7c)] + g[iZ(0x28f)][iZ(0x4a4)](0x10));
                return;
            }
            if (b[iZ(0xb91)](g['type'], 0x3)) {
                this[iZ(0x456)](g);
                return;
            }
            const h = Math['min'](f[iZ(0x957)], b[iZ(0x985)](g[iZ(0x6d5)], g[iZ(0x957)]));
            this['_handleLong'](f[iZ(0xb9c)](0x0, h), g), c += h;
        }
    }
    [a0cm(0x5f5)](a, b) {
        const j0 = a0cm, c = {
                'cXyWU': function (o, p) {
                    return o < p;
                },
                'DBiIo': function (o, p) {
                    return o - p;
                },
                'SeKzR': function (o, p) {
                    return o + p;
                },
                'pRZOw': function (o, p) {
                    return o >> p;
                },
                'SHjQP': function (o, p) {
                    return o & p;
                },
                'hbwZK': function (o, p) {
                    return o < p;
                },
                'LpOLO': function (o, p) {
                    return o + p;
                },
                'WmjKH': function (o, p) {
                    return o === p;
                },
                'fpfrA': function (o, p, q) {
                    return o(p, q);
                },
                'WugfE': function (o, p) {
                    return o === p;
                },
                'Zpacy': function (o, p) {
                    return o(p);
                },
                'HFUWh': function (o, p) {
                    return o - p;
                },
                'DYQgz': function (o, p) {
                    return o + p;
                },
                'TbNvL': function (o, p) {
                    return o === p;
                },
                'MBmFU': function (o, p, q) {
                    return o(p, q);
                }
            };
        if (c[j0(0x374)](c[j0(0xc7e)](a[j0(0x957)], b), 0x7))
            return null;
        const d = a[b], f = a[j0(0xd2)](c[j0(0x4c0)](b, 0x1)), g = c['pRZOw'](c[j0(0x43e)](d, 0x30), 0x4);
        let h = c['SeKzR'](b, 0x5);
        const i = a[h];
        h += 0x1;
        if (c[j0(0x4d5)](a[j0(0x957)] - h, c[j0(0x4c0)](i, 0x1)))
            return null;
        const j = a[j0(0xb9c)](h, h + i);
        h += i;
        const k = a[h];
        h += 0x1;
        if (c[j0(0x4d5)](a[j0(0x957)] - h, k))
            return null;
        const l = a['subarray'](h, c['LpOLO'](h, k));
        h += k;
        let m = Buffer[j0(0x66e)](0x0);
        if (c[j0(0x7ac)](g, 0x0)) {
            const o = c[j0(0x631)](a0bs, a, h);
            if (c[j0(0xb84)](o, null))
                return null;
            h += o[0x1];
            const p = c[j0(0x1e7)](Number, o[0x0]);
            if (c[j0(0x4d5)](c[j0(0x317)](a[j0(0x957)], h), p))
                return null;
            m = a[j0(0xb9c)](h, c[j0(0x590)](h, p)), h += p;
        }
        if (c[j0(0x271)](g, 0x3))
            return {
                'first': d,
                'type': g,
                'version': f,
                'dcid': j,
                'scid': l,
                'token': a[j0(0xb9c)](h, a['length'] - 0x10),
                'pnOffset': 0x0,
                'length': 0x0,
                'retry': !![]
            };
        const n = c[j0(0x9e2)](a0bs, a, h);
        if (c[j0(0xb84)](n, null))
            return null;
        return h += n[0x1], {
            'first': d,
            'type': g,
            'version': f,
            'dcid': j,
            'scid': l,
            'token': m,
            'pnOffset': h,
            'length': c[j0(0x1e7)](Number, n[0x0]),
            'retry': ![]
        };
    }
    [a0cm(0x456)](a) {
        const j1 = a0cm, b = {
                'jaWUp': function (c, d) {
                    return c + d;
                },
                'WpHEd': function (c, d) {
                    return c + d;
                },
                'TbvwS': j1(0x397),
                'jaGTX': j1(0xb99)
            };
        this[j1(0x6fc)][j1(0x8c1)](b[j1(0x8ec)](b['WpHEd'](b[j1(0x6de)](b[j1(0xabd)], a[j1(0xd84)][j1(0x957)]), b[j1(0xd58)]), a[j1(0x3c5)][j1(0x4a4)]('hex'))), this[j1(0x3be)] = Buffer['from'](a[j1(0xd84)]), this[j1(0x31e)] = Buffer['from'](a[j1(0x3c5)]), this[j1(0x799)][a0bk] = 0x0, this[j1(0x4b8)][a0bk] = [], this['cryptoSend'][a0bk][j1(0x8d2)](), this[j1(0xc51)] = 0x0;
    }
    ['_epochForType'](a) {
        const j2 = a0cm, b = {
                'JPoPe': function (c, d) {
                    return c === d;
                }
            };
        if (a === 0x0 || b[j2(0xa63)](a, 0x1))
            return a0bk;
        return a0bl;
    }
    ['_handleLong'](a, b) {
        const j3 = a0cm, c = {
                'ldMdH': function (m, n) {
                    return m < n;
                },
                'WCFzp': function (m, n, o, p, q) {
                    return m(n, o, p, q);
                },
                'VeJDj': function (m, n) {
                    return m === n;
                },
                'UUBpY': function (m, n) {
                    return m + n;
                },
                'raMkw': function (m, n) {
                    return m & n;
                },
                'rXUgs': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'HjfOA': function (m, n) {
                    return m + n;
                },
                'YtZQH': function (m, n) {
                    return m + n;
                },
                'ZdEsv': function (m, n) {
                    return m + n;
                },
                'Huwdj': j3(0xa43),
                'SpFzo': function (m, n) {
                    return m === n;
                },
                'GHytS': function (m, n) {
                    return m + n;
                },
                'bwjFM': j3(0x222),
                'OzzLA': j3(0x6f4),
                'LQsRc': function (m, n) {
                    return m === n;
                },
                'eBuZz': j3(0x790)
            }, d = this[j3(0x81f)](b[j3(0x688)]), f = this[j3(0x465)][d];
        if (f === null) {
            this['stats'][j3(0x268)] += 0x1;
            return;
        }
        if (c[j3(0xb13)](b[j3(0x957)], a0bh)) {
            this[j3(0x187)][j3(0x268)] += 0x1;
            return;
        }
        const g = c['WCFzp'](a0bG, f[j3(0x853)], a, b[j3(0x6d5)], !![]);
        if (c[j3(0xcfb)](g, null)) {
            this['stats'][j3(0x268)] += 0x1;
            return;
        }
        const [h, i] = g, j = c['UUBpY'](c[j3(0x76c)](h[0x0], 0x3), 0x1), k = c[j3(0xb96)](a0bH, Math[j3(0xcfa)](this[j3(0xa83)][d], 0x0), j * 0x8, i);
        let l;
        try {
            l = f[j3(0x853)][j3(0x116)](k, h, a[j3(0xb9c)](c['UUBpY'](b[j3(0x6d5)], j)));
        } catch (m) {
            this[j3(0x187)][j3(0x268)] += 0x1, this[j3(0x6fc)][j3(0x8c1)](c[j3(0x8d7)](c[j3(0xd66)](c[j3(0xc3d)](c[j3(0x4cb)](c[j3(0x134)], a[j3(0x957)]), 'B\x20'), a0bn[d]), j3(0xd2d)));
            return;
        }
        c[j3(0xcfb)](d, a0bk) && c[j3(0x1c6)](b['dcid'][j3(0x957)], this[j3(0x3bf)]['length']) && b[j3(0x9c6)][j3(0xb30)](this[j3(0x3bf)]) && (!this[j3(0x91c)] && b['scid'][j3(0x957)] && !this[j3(0x31e)][j3(0xb30)](b[j3(0x3c5)]) && (this[j3(0x31e)] = Buffer['from'](b['scid']), this[j3(0x6fc)]['debug'](c[j3(0x60f)](c[j3(0x52f)], this[j3(0x31e)][j3(0x4a4)](c[j3(0x841)]))))), this[j3(0x32f)](d, k), this[j3(0x6fc)][j3(0x8c1)](c[j3(0x8d7)](c[j3(0xc3d)](c['HjfOA'](c[j3(0xc3d)](c[j3(0x134)], a[j3(0x957)]), 'B\x20'), a0bn[d]) + '\x20pn=', k)), c[j3(0x1b1)](d, a0bl) && this[j3(0xd94)](a0bk, c[j3(0x497)]), this[j3(0x9cb)](l, d);
    }
    [a0cm(0x678)](a) {
        const j4 = a0cm, b = {
                'LIOAh': function (i, j) {
                    return i === j;
                },
                'aTBYN': function (i, j) {
                    return i + j;
                },
                'nHcBJ': function (i, j) {
                    return i + j;
                },
                'HguSQ': 'rx\x20',
                'nKKox': j4(0x373),
                'PWNYT': function (i, j) {
                    return i === j;
                },
                'HrsSP': function (i, j) {
                    return i < j;
                },
                'VYtXJ': function (i, j) {
                    return i(j);
                },
                'KCihW': function (i, j, k, l, m) {
                    return i(j, k, l, m);
                },
                'sBftd': function (i, j) {
                    return i === j;
                },
                'uTDaD': function (i, j) {
                    return i & j;
                },
                'jfDTZ': function (i, j) {
                    return i * j;
                },
                'VGyHE': function (i, j) {
                    return i + j;
                },
                'tKbgV': j4(0x62f),
                'tiZET': function (i, j) {
                    return i + j;
                },
                'YvoMg': function (i, j) {
                    return i + j;
                },
                'xHeRh': j4(0xb79),
                'xaIOE': function (i, j) {
                    return i > j;
                },
                'leVrR': function (i, j) {
                    return i + j;
                },
                'OwWUJ': function (i, j) {
                    return i + j;
                },
                'vCOFn': function (i, j) {
                    return i + j;
                },
                'rLvai': j4(0xa37),
                'lvXpA': function (i, j) {
                    return i + j;
                },
                'ZHFLf': j4(0xe4)
            }, c = this[j4(0x465)][a0bm];
        if (b[j4(0x399)](c, null)) {
            this[j4(0x187)][j4(0x268)] += 0x1, this[j4(0x6fc)][j4(0x8c1)](b['aTBYN'](b[j4(0x561)](b[j4(0x3ff)], a[j4(0x957)]), b['nKKox']));
            return;
        }
        b[j4(0xd5f)](this[j4(0x115)]['length'], 0x0) && this['appRecvGens'][j4(0xd32)]({
            'keys': c['recv'],
            'phase': 0x0
        });
        const d = 0x1 + this[j4(0x3bf)]['length'], f = [];
        for (const i of [c['recv']][j4(0x8d4)](this[j4(0x115)][j4(0xc39)](j => j[j4(0x465)]))) {
            b[j4(0x94b)](f['indexOf'](i), 0x0) && f[j4(0xd32)](i);
        }
        const g = this[j4(0x115)][0x0], h = this[j4(0x115)][j4(0x8d4)]([{
                    'keys': b[j4(0x9af)](a0bz, g[j4(0x465)]),
                    'phase': 0x1 - g['phase'],
                    'next': !![]
                }]);
        for (const j of h) {
            for (const k of j[j4(0xd87)] ? f[j4(0x8d4)]([j[j4(0x465)]]) : f) {
                const l = b['KCihW'](a0bG, k, a, d, ![]);
                if (b['sBftd'](l, null))
                    continue;
                const [m, n] = l, o = b[j4(0xb65)](m[0x0], 0x3) + 0x1, p = a0bH(Math[j4(0xcfa)](this['largestRecv'][a0bm], 0x0), b[j4(0xd65)](o, 0x8), n);
                let q;
                try {
                    q = j[j4(0x465)][j4(0x116)](p, m, a['subarray'](b[j4(0x3e1)](d, o)));
                } catch (r) {
                    continue;
                }
                if (j[j4(0xd87)]) {
                    const s = b[j4(0xd9c)][j4(0x31d)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            this[j4(0xacf)][j[j4(0x7df)]] = a0bz(this[j4(0xacf)][0x1 - j['phase']], !![]);
                            continue;
                        case '1':
                            this[j4(0x6fc)]['debug'](b['tiZET'](b[j4(0x92c)](j4(0x437), j[j4(0x7df)]), b[j4(0xc76)]));
                            continue;
                        case '2':
                            b[j4(0x78a)](this[j4(0x115)][j4(0x957)], 0x2) && this[j4(0x115)]['pop']();
                            continue;
                        case '3':
                            this[j4(0x115)][j4(0xee)]({
                                'keys': j['keys'],
                                'phase': j['phase']
                            });
                            continue;
                        case '4':
                            this[j4(0x277)] = j['phase'];
                            continue;
                        }
                        break;
                    }
                }
                this[j4(0x32f)](a0bm, p), this['log']['debug'](b['leVrR'](b[j4(0xf5)](b[j4(0x113)]('rx\x20', a[j4(0x957)]), b[j4(0x280)]), p)), this[j4(0x9cb)](q, a0bm);
                return;
            }
        }
        this[j4(0x187)][j4(0x268)] += 0x1, this[j4(0x6fc)]['debug'](b[j4(0x9fb)](b[j4(0x3ff)] + a[j4(0x957)], b[j4(0x655)]));
    }
    [a0cm(0x32f)](a, b) {
        const j5 = a0cm, c = {
                'jsJTJ': function (d, f, g) {
                    return d(f, g);
                },
                'JSLcd': function (d, f) {
                    return d > f;
                }
            };
        this[j5(0x951)][a] = c[j5(0x8af)](a0bC, this[j5(0x951)][a], [{
                'start': b,
                'length': 0x1
            }]), c[j5(0x510)](b, this['largestRecv'][a]) && (this['largestRecv'][a] = b), this[j5(0x738)][a] = !![];
    }
    [a0cm(0x3f6)](a, b) {
        const j6 = a0cm, c = {
                'HxRha': function (m, n) {
                    return m >= n;
                },
                'XEwRD': function (m, n) {
                    return m === n;
                },
                'yBAJl': function (m, n) {
                    return m !== n;
                },
                'ykyer': function (m, n) {
                    return m - n;
                },
                'asvFV': function (m, n) {
                    return m - n;
                },
                'JsEgW': function (m, n) {
                    return m > n;
                },
                'FGreW': function (m, n) {
                    return m < n;
                }
            }, d = Date[j6(0x29a)](), f = this[j6(0x4b8)][a];
        let g = -0x1;
        for (const m of b) {
            g = Math['max'](g, m[j6(0x68e)] + m[j6(0x957)] - 0x1);
        }
        const h = [];
        let i = 0x0, j = null;
        for (const n of f) {
            let o = ![];
            for (const p of b) {
                if (c[j6(0x245)](n['pn'], p[j6(0x68e)]) && n['pn'] < p[j6(0x68e)] + p[j6(0x957)]) {
                    o = !![];
                    break;
                }
            }
            if (!o) {
                h[j6(0xd32)](n);
                continue;
            }
            i += n[j6(0xac4)];
            c[j6(0xfc)](n['pn'], g) && c['yBAJl'](n[j6(0xbaf)], !![]) && (j = c[j6(0x73b)](c[j6(0xd22)](d, n[j6(0x7c3)]), Math['min'](b[j6(0xb43)] || 0x0, this[j6(0x13d)])));
            n[j6(0xcb5)] && this[j6(0x901)][a]['ack'](n[j6(0xcb5)]['start'], n[j6(0xcb5)]['length'], ![]);
            for (const q of n[j6(0x1c0)]) {
                q[j6(0x6fa)][j6(0xb71)][j6(0x690)](q[j6(0x68e)], q[j6(0x957)], q[j6(0x9ac)]);
            }
        }
        const k = [], l = [];
        for (const r of h) {
            c['HxRha'](c['ykyer'](g, r['pn']), this[j6(0x750)]) ? l[j6(0xd32)](r) : k[j6(0xd32)](r);
        }
        this[j6(0x4b8)][a] = k;
        i && (j !== null && c[j6(0xcad)](j, 0x0) && this[j6(0x6f7)](j), this[j6(0x3fd)](), this[j6(0x5d0)](i));
        for (const s of l) {
            this[j6(0x793)](a, s);
        }
        l[j6(0x957)] && this[j6(0x569)](a), a === a0bm && c[j6(0xb7e)](k[j6(0x957)], f[j6(0x957)]) && this[j6(0xa81)]();
    }
    [a0cm(0x5d0)](a) {
        const j7 = a0cm, b = {
                'ltAoI': function (c, d) {
                    return c < d;
                }
            };
        b[j7(0xa2d)](this['congestionWindow'], this['slowStartThreshold']) ? this[j7(0x854)] += a : this['congestionWindow'] += Math[j7(0xcfa)](0x1, Math['floor'](this[j7(0x9ee)] * a / this[j7(0x854)])), this[j7(0x854)] = Math[j7(0x782)](this['congestionWindow'], this[j7(0xab2)]);
    }
    ['_handleFrames'](a, b) {
        const j8 = a0cm, c = {
                'AeATT': function (f, g) {
                    return f > g;
                },
                'tFSmN': function (f, g) {
                    return f === g;
                },
                'xgZMM': function (f, g) {
                    return f(g);
                },
                'UXtaZ': function (f, g) {
                    return f < g;
                },
                'WuRgk': function (f, g) {
                    return f === g;
                },
                'ecamn': function (f, g) {
                    return f & g;
                },
                'RmjAa': function (f, g) {
                    return f(g);
                },
                'rqOtW': function (f, g) {
                    return f(g);
                },
                'vLAZI': function (f, g) {
                    return f === g;
                },
                'QYnnk': function (f, g) {
                    return f === g;
                },
                'DTyHo': function (f, g) {
                    return f === g;
                },
                'AOHxX': function (f, g) {
                    return f === g;
                },
                'aUZeW': function (f, g) {
                    return f === g;
                },
                'OAjjK': function (f, g) {
                    return f !== g;
                },
                'vMinn': function (f, g) {
                    return f === g;
                },
                'BZhZs': 'utf8',
                'lBmXB': function (f, g) {
                    return f + g;
                },
                'Goyzg': j8(0x361),
                'SRoul': j8(0x5e2),
                'Mxozr': function (f, g) {
                    return f === g;
                },
                'gYCZV': function (f, g) {
                    return f === g;
                },
                'eQVxc': 'unhandled\x20QUIC\x20frame\x20type\x200x'
            }, d = new a0bu(a);
        while (c[j8(0x1b6)](d[j8(0xc34)], 0x0)) {
            const f = d['byte']();
            if (f === a0bo[j8(0xa71)])
                continue;
            if (c[j8(0xacc)](f, a0bo[j8(0x2d3)]))
                continue;
            if (c[j8(0xacc)](f, a0bo[j8(0x690)]) || c[j8(0xacc)](f, a0bo[j8(0x942)])) {
                const g = c[j8(0xaaa)](a0bJ, d);
                c['tFSmN'](f, a0bo['ackEcn']) && (d[j8(0xc3c)](), d[j8(0xc3c)](), d[j8(0xc3c)]());
                this[j8(0x3f6)](b, g);
                continue;
            }
            if (f === a0bo[j8(0xcb5)]) {
                const h = d[j8(0xcfc)](), i = d[j8(0xcfc)]();
                if (c[j8(0xc5a)](d[j8(0xc34)], i))
                    return;
                const j = d[j8(0xac4)](i), k = this[j8(0xbe6)][b][j8(0x913)](h, j);
                k[j8(0x957)] && this[j8(0x221)](b, k);
                continue;
            }
            if (c[j8(0x998)](f & 0xf8, a0bo[j8(0x6fa)])) {
                const l = c[j8(0x266)](f, 0x7), m = c[j8(0xaaa)](Number, d[j8(0xc3c)]()), n = c[j8(0x547)](Boolean, c[j8(0x266)](l, 0x2)), o = c['rqOtW'](Boolean, l & 0x4), p = Boolean(l & 0x1);
                let q = 0x0;
                o && (q = d[j8(0xcfc)]());
                let r = d[j8(0xc34)];
                n && (r = d[j8(0xcfc)]());
                if (d[j8(0xc34)] < r)
                    return;
                this[j8(0x154)](m, q, d[j8(0xac4)](r), p);
                continue;
            }
            if (c['WuRgk'](f, a0bo[j8(0x62a)])) {
                this[j8(0x8aa)] = Math['max'](this[j8(0x8aa)], d[j8(0xcfc)]());
                continue;
            }
            if (c['vLAZI'](f, a0bo[j8(0xaab)])) {
                const s = d[j8(0xcfc)](), t = this[j8(0x1c0)][j8(0x340)](s);
                t !== undefined ? t[j8(0x803)] = Math[j8(0xcfa)](t[j8(0x803)] || 0x0, d[j8(0xcfc)]()) : d[j8(0xc3c)]();
                continue;
            }
            if (c[j8(0x343)](f, a0bo[j8(0x31a)]) || c[j8(0x343)](f, a0bo[j8(0x915)])) {
                d[j8(0xc3c)]();
                continue;
            }
            if (f === a0bo[j8(0x8b4)]) {
                d[j8(0xc3c)](), d[j8(0xc3c)]();
                const u = d[j8(0x334)]();
                if (c[j8(0xc5a)](d[j8(0xc34)], u + 0x10))
                    return;
                d['bytes'](u), d[j8(0xac4)](0x10);
                continue;
            }
            if (c[j8(0x1cc)](f, a0bo[j8(0xc59)])) {
                d[j8(0xc3c)]();
                continue;
            }
            if (c[j8(0x988)](f, a0bo['pathChallenge'])) {
                if (d[j8(0xc34)] < 0x8)
                    return;
                const v = d[j8(0xac4)](0x8), w = new a0bt();
                w['byte'](a0bo[j8(0xa85)])[j8(0xac4)](v), this[j8(0xb00)](w[j8(0xaa2)](), b);
                continue;
            }
            if (c['aUZeW'](f, a0bo[j8(0xa85)]))
                continue;
            if (c[j8(0x998)](f, a0bo[j8(0x184)])) {
                this[j8(0xa81)]();
                continue;
            }
            if (c[j8(0x343)](f, a0bo[j8(0x849)])) {
                const x = d[j8(0xcfc)]();
                d[j8(0xc3c)](), d['varint']();
                const y = this[j8(0x1c0)][j8(0x340)](x);
                c[j8(0x29b)](y, undefined) && (y['reset'] = !![], this[j8(0x884)](y));
                continue;
            }
            if (f === a0bo[j8(0x1a6)]) {
                d[j8(0xc3c)](), d[j8(0xc3c)]();
                continue;
            }
            if (c['vMinn'](f, a0bo[j8(0xa42)])) {
                const z = d['number']();
                this['peerToken'] = Buffer[j8(0x2dc)](d[j8(0xac4)](z));
                continue;
            }
            if (c[j8(0x998)](f, a0bo[j8(0xb83)]) || f === a0bo[j8(0x7f1)]) {
                const A = d['number']();
                let B = 0x0;
                f === a0bo[j8(0xb83)] && (B = d[j8(0xcfc)]());
                const C = d[j8(0xc34)] ? d['bytes'](d[j8(0xc34)])[j8(0x4a4)](c['BZhZs']) : '';
                this[j8(0x7cf)](c[j8(0xd4e)](c[j8(0x6c9)] + A, c[j8(0x6fd)]) + C);
                return;
            }
            if (c[j8(0x264)](f, a0bo['datagram']) || f === a0bo['datagramLen']) {
                let D = d[j8(0xc34)];
                c['gYCZV'](f, a0bo[j8(0x416)]) && (D = d[j8(0xcfc)]());
                if (d[j8(0xc34)] < D)
                    return;
                d[j8(0xac4)](D);
                continue;
            }
            this[j8(0x7cf)](c['lBmXB'](c['eQVxc'], f[j8(0x4a4)](0x10)));
            return;
        }
    }
    [a0cm(0xb00)](a, b) {
        const j9 = a0cm;
        this[j9(0x738)][b] = !![], this[j9(0x774)] = this[j9(0x774)] || [], this['pendingOneOff'][j9(0xd32)]({
            'epoch': b,
            'frame': a
        });
    }
    [a0cm(0x154)](a, b, c, d) {
        const ja = a0cm, f = {
                'afNHO': function (i, j) {
                    return i === j;
                },
                'fLwyL': function (i, j) {
                    return i === j;
                },
                'uewbW': 'remote',
                'EXwFB': ja(0x8a7),
                'brLWK': function (i, j) {
                    return i < j;
                },
                'qtEvN': function (i, j) {
                    return i - j;
                },
                'hMqBV': function (i, j) {
                    return i / j;
                },
                'YDEgJ': function (i, j) {
                    return i + j;
                },
                'nyzvm': function (i, j) {
                    return i === j;
                }
            };
        let g = this['streams']['get'](a);
        f[ja(0x76b)](g, undefined) && (g = new a0bQ(this, a, f[ja(0xaec)](a & 0x1, 0x1) ? f[ja(0xca3)] : f['EXwFB']), this[ja(0x1c0)][ja(0xb2b)](a, g), this[ja(0x353)](g));
        const h = g['receiver']['accept'](b, c);
        if (h[ja(0x957)]) {
            const i = ja(0x71b)[ja(0x31d)]('|');
            let j = 0x0;
            while (!![]) {
                switch (i[j++]) {
                case '0':
                    this[ja(0xb46)] += h[ja(0x957)];
                    continue;
                case '1':
                    g[ja(0x853)] = Buffer[ja(0x8d4)]([
                        g[ja(0x853)],
                        h
                    ]);
                    continue;
                case '2':
                    f[ja(0x633)](f['qtEvN'](g[ja(0x69a)], g['recv'][ja(0x957)]), f['hMqBV'](this[ja(0x622)], 0x2)) && (g[ja(0x69a)] = g[ja(0x853)][ja(0x957)] + this[ja(0x622)], f['brLWK'](this['creditReady'][ja(0x3b8)](g), 0x0) && this['creditReady'][ja(0xd32)](g));
                    continue;
                case '3':
                    this[ja(0x6c8)](g, h);
                    continue;
                case '4':
                    this['_wake']();
                    continue;
                case '5':
                    f['brLWK'](this[ja(0x763)] - this[ja(0xb46)], this[ja(0x622)] / 0x2) && (this['localMaxData'] = f['YDEgJ'](this[ja(0xb46)], this[ja(0x622)]), this[ja(0x60c)] = !![]);
                    continue;
                }
                break;
            }
        }
        d && !g[ja(0xd12)] && f[ja(0x5ba)](g[ja(0x63c)]['contiguous'], g[ja(0x853)][ja(0x957)]) && (g[ja(0xd12)] = !![], this[ja(0x884)](g));
    }
    ['_wake']() {
        const jb = a0cm;
        !this[jb(0x59e)] && this[jb(0x693)]();
    }
    [a0cm(0x221)](a, b) {
        const jc = a0cm, c = {
                'FXkLP': function (d, f) {
                    return d === f;
                },
                'VKkTC': jc(0x9f1),
                'VyDSs': function (d, f) {
                    return d + f;
                },
                'ATbPW': jc(0x863)
            };
        if (a === a0bm)
            return;
        if (a === a0bk && c[jc(0x4b4)](this[jc(0x73e)][jc(0xb32)], c['VKkTC'])) {
            this[jc(0x8b9)] = Buffer[jc(0x8d4)]([
                this['serverHello'],
                b
            ]);
            let d;
            try {
                d = this[jc(0x73e)][jc(0xaf6)](this[jc(0x8b9)]);
            } catch (g) {
                this[jc(0x7cf)](c['VyDSs'](c['ATbPW'], g[jc(0x8d0)]));
                return;
            }
            if (d === null)
                return;
            this['serverHello'] = Buffer['alloc'](0x0);
            let f;
            try {
                f = this[jc(0x73e)][jc(0x506)](Buffer[jc(0x2dc)](d));
            } catch (h) {
                this['_fail'](c[jc(0xc36)](c[jc(0xc32)], h[jc(0x8d0)]));
                return;
            }
            this[jc(0x465)][a0bl] = f, this[jc(0x6fc)]['debug']('quic\x20server\x20hello\x20received,\x20handshake\x20keys\x20installed');
            return;
        }
        this[jc(0x8dc)] = Buffer[jc(0x8d4)]([
            this[jc(0x8dc)],
            b
        ]), this['_pumpHandshakeMessages']();
    }
    [a0cm(0x74d)]() {
        const jd = a0cm, a = {
                'XZxtb': function (b, c) {
                    return b >= c;
                },
                'QgaDH': function (b, c) {
                    return b < c;
                },
                'opSSK': function (b, c) {
                    return b + c;
                },
                'zwGlH': jd(0xe1),
                'JnpcS': jd(0x6fe),
                'bxzXd': function (b, c) {
                    return b + c;
                },
                'lNXhr': function (b, c) {
                    return b + c;
                },
                'hzxtg': jd(0x297),
                'lfBTu': function (b, c) {
                    return b === c;
                },
                'dXCVB': function (b, c) {
                    return b !== c;
                },
                'VtGFS': function (b, c) {
                    return b(c);
                },
                'aorcw': jd(0x572),
                'INoiU': function (b, c) {
                    return b + c;
                }
            };
        while (a[jd(0xae4)](this[jd(0x8dc)][jd(0x957)], 0x4)) {
            const b = 0x4 + this[jd(0x8dc)]['readUIntBE'](0x1, 0x3);
            if (a[jd(0xbc1)](this['handshakeBytes'][jd(0x957)], b))
                return;
            const c = Buffer[jd(0x2dc)](this['handshakeBytes']['subarray'](0x0, b));
            this[jd(0x8dc)] = this[jd(0x8dc)][jd(0xb9c)](b);
            let d;
            try {
                d = this[jd(0x73e)][jd(0x43a)](c);
            } catch (f) {
                this[jd(0x7cf)](a[jd(0xa7b)](a['zwGlH'], f[jd(0x8d0)]));
                return;
            }
            if (this['tls'][jd(0x897)] && this['remoteParameters'] === null) {
                const g = a[jd(0x8f6)][jd(0x31d)]('|');
                let h = 0x0;
                while (!![]) {
                    switch (g[h++]) {
                    case '0':
                        this[jd(0x6fc)][jd(0x8c1)](a[jd(0xa7b)](a[jd(0xa7b)](a[jd(0x7e0)](a[jd(0xf0)](a[jd(0x7e0)](a[jd(0xa3a)], this[jd(0x8aa)]), jd(0xc06)), this['peerStreamRemote']), '\x20idle='), this[jd(0x73e)][jd(0x897)][a0bp[jd(0x4ba)]] || 0x0));
                        continue;
                    case '1':
                        this[jd(0x897)] = this[jd(0x73e)][jd(0x897)];
                        continue;
                    case '2':
                        this[jd(0x37d)] = this[jd(0x73e)][jd(0x897)][a0bp[jd(0xb3c)]] || 0x0;
                        continue;
                    case '3':
                        this['peerMaxAckDelay'] = Math[jd(0x782)](a[jd(0x312)](this[jd(0x73e)][jd(0x897)][a0bp[jd(0x7d5)]], undefined) ? 0x19 : this[jd(0x73e)][jd(0x897)][a0bp[jd(0x7d5)]], 0x64);
                        continue;
                    case '4':
                        this['peerStreamLocal'] = this[jd(0x73e)][jd(0x897)][a0bp['initialMaxStreamDataBidiLocal']] || 0x0;
                        continue;
                    case '5':
                        this[jd(0x8aa)] = this[jd(0x73e)][jd(0x897)][a0bp[jd(0xa07)]] || 0x0;
                        continue;
                    }
                    break;
                }
            }
            if (a[jd(0xcf8)](d, null)) {
                if (this[jd(0x7fc)]) {
                    const i = a[jd(0x4ae)](a0bP, this[jd(0x73e)]['leafCert']);
                    if (i) {
                        this['_fail'](a['bxzXd'](a[jd(0xb8a)], i));
                        return;
                    }
                }
                this['keys'][a0bm] = {
                    'send': d['send'],
                    'recv': d[jd(0x853)]
                }, this[jd(0x115)] = [{
                        'keys': d['recv'],
                        'phase': 0x0
                    }], this[jd(0xacf)][0x0] = d[jd(0xb71)], this[jd(0x901)][a0bl][jd(0xd18)](d['finished'], ![]), this[jd(0x91c)] = !![];
                !d['verified'] && this[jd(0x6fc)][jd(0x910)](jd(0xae1));
                this[jd(0x6fc)]['debug'](a[jd(0x89a)](jd(0xbaa), this[jd(0x73e)][jd(0x91e)] || '?'));
                if (this['settle'] !== null) {
                    const j = this[jd(0xa7a)];
                    this[jd(0xa7a)] = null, j[jd(0x138)](this);
                }
                this[jd(0x2ea)]();
                return;
            }
        }
    }
    ['close'](a) {
        const je = a0cm, b = {
                'VHfRI': je(0x9a0),
                'WdPZD': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (this[je(0x59e)])
            return;
        this['closing'] = !![], this['closeReason'] = a || b[je(0x41b)], this[je(0x693)](), b['WdPZD'](setTimeout, () => this[je(0xd44)](null), 0xc8);
    }
    [a0cm(0x7cf)](a) {
        const jf = a0cm, b = {
                'qiVIL': function (c, d) {
                    return c + d;
                },
                'FjnPk': jf(0x621)
            };
        if (this[jf(0x59e)])
            return;
        this[jf(0x6fc)][jf(0x8c1)](b[jf(0x250)](b['FjnPk'], a)), this['_finish'](new Error(a));
    }
    [a0cm(0xd44)](a) {
        const jg = a0cm, b = {
                'BhLKx': function (c, d) {
                    return c !== d;
                },
                'UJgqa': function (c, d) {
                    return c(d);
                },
                'nEyFJ': jg(0xa1e)
            };
        if (this[jg(0x59e)])
            return;
        this[jg(0x59e)] = a ? a['message'] : jg(0x59e);
        b[jg(0xaee)](this[jg(0x493)], null) && (b[jg(0x5b0)](clearInterval, this[jg(0x493)]), this['interval'] = null);
        if (b[jg(0xaee)](this['socket'], null)) {
            try {
                this['socket']['close']();
            } catch (c) {
            }
            this['socket'] = null;
        }
        if (!this[jg(0x91c)] && b[jg(0xaee)](this[jg(0xa7a)], null)) {
            const d = this['settle'];
            this['settle'] = null, d[jg(0x12c)](a || new Error(b[jg(0x1cf)]));
        } else
            this['onClose'](a);
    }
}
function a0bS(a, b) {
    const jh = a0cm, c = {
            'nObaX': function (f, g) {
                return f === g;
            }
        }, d = [];
    for (const [f, g] of a) {
        c['nObaX'](f[jh(0x2ca)](), b) && d[jh(0xd32)](g);
    }
    return d;
}
function a0bT(a) {
    const ji = a0cm, b = {
            'hPVYj': function (i, j) {
                return i >= j;
            },
            'hUxLE': function (i, j) {
                return i !== j;
            },
            'jKBby': function (i, j) {
                return i + j;
            },
            'EivxR': function (i, j) {
                return i + j;
            },
            'GpsTj': 'header\x20Key:\x20',
            'iKlnR': ji(0x259),
            'oBZdH': function (i, j) {
                return i + j;
            },
            'xfMxu': function (i, j, k) {
                return i(j, k);
            },
            'JUhnF': ji(0xac5),
            'hGxhU': ji(0x892),
            'yEsSG': ji(0xcbf),
            'gLWdF': ji(0x52e),
            'RqtOG': function (i, j) {
                return i > j;
            },
            'ZEynr': function (i, j) {
                return i > j;
            }
        }, c = new Map(), d = [];
    for (const [i, j] of a[ji(0xd49)]) {
        if (b[ji(0xa49)](i['indexOf'](a0ba), 0x0)) {
            const k = i[ji(0x31d)](':');
            if (b[ji(0x4f6)](k[ji(0x957)], 0x2))
                throw new Error(b['jKBby'](b[ji(0x2cb)](b[ji(0x582)], i), b[ji(0x6ba)]));
            d[ji(0xd32)]([
                k[0x1],
                j
            ]);
        } else
            c[ji(0xb2b)](i, j);
    }
    let f = a[ji(0x226)];
    try {
        const l = new URL(a['dest']);
        f = b['oBZdH'](l['pathname'], l[ji(0xaa0)]);
    } catch (m) {
        f = a[ji(0x226)];
    }
    const g = Number(b[ji(0x872)](a0bS, d, b[ji(0x4f1)])[0x0]), h = b[ji(0x872)](a0bS, d, b[ji(0x146)])[ji(0x6e6)](',')[ji(0x2ca)]()[ji(0x8b8)](b['yEsSG']);
    return {
        'type': a[ji(0x688)],
        'method': c[ji(0x340)](a0b7) || b[ji(0xd7c)],
        'host': c[ji(0x340)](a0b8) || '',
        'path': f[ji(0x848)]('/') ? f : b[ji(0x2cb)]('/', f),
        'headers': d,
        'contentLength': Number['isInteger'](g) && b[ji(0x724)](g, 0x0) ? g : null,
        'bodyless': !h && !(Number[ji(0x1ba)](g) && b['ZEynr'](g, 0x0))
    };
}
function a0bU(a) {
    const jj = a0cm, b = {
            'cSUFW': function (d, f) {
                return d !== f;
            },
            'dmFVw': function (d, f) {
                return d >= f;
            }
        }, c = a[jj(0xb41)];
    if (c[jj(0x48d)])
        return !![];
    if (a[jj(0xd12)])
        return !![];
    return b['cSUFW'](c['contentLength'], null) && b[jj(0x8ca)](a['body']['length'], c[jj(0xce6)]);
}
class a0bV {
    constructor(a, b, c, d, f) {
        const jk = a0cm, g = { 'HwvIH': '7|2|8|1|3|0|6|4|5' }, h = g[jk(0x784)][jk(0x31d)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this[jk(0xbc2)] = [];
                continue;
            case '1':
                this[jk(0x7c4)] = d;
                continue;
            case '2':
                this[jk(0xb32)] = b;
                continue;
            case '3':
                this[jk(0x6fc)] = f;
                continue;
            case '4':
                this['stopped'] = ![];
                continue;
            case '5':
                this[jk(0xa38)] = null;
                continue;
            case '6':
                this[jk(0xd08)] = [];
                continue;
            case '7':
                this[jk(0xaf5)] = a;
                continue;
            case '8':
                this[jk(0xb41)] = c;
                continue;
            }
            break;
        }
    }
    ['feed'](a) {
        const jl = a0cm, b = {
                'MvAUi': function (c, d) {
                    return c === d;
                }
            };
        if (b[jl(0x4a5)](a, null))
            this['queue'][jl(0xd32)](null);
        else
            a[jl(0x957)] && this[jl(0xbc2)][jl(0xd32)](a);
        this[jl(0x560)]();
    }
    [a0cm(0x18d)]() {
        const jm = a0cm, a = {
                'QipgZ': function (b, c) {
                    return b !== c;
                }
            };
        if (this[jm(0x9eb)])
            return;
        this[jm(0x9eb)] = !![], this[jm(0x560)]();
        if (a[jm(0x86e)](this[jm(0xa38)], null))
            try {
                this['sock']['destroy']();
            } catch (b) {
            }
    }
    [a0cm(0x560)]() {
        const jn = a0cm, a = {
                'WKBUq': function (b) {
                    return b();
                }
            };
        for (const b of this['waiters']) {
            a[jn(0x905)](b);
        }
        this[jn(0xd08)] = [];
    }
    async [a0cm(0xc38)]() {
        const jo = a0cm;
        while (!this[jo(0x9eb)]) {
            if (this['queue'][jo(0x957)])
                return this[jo(0xbc2)][jo(0x77c)]();
            await new Promise(a => this[jo(0xd08)]['push'](a));
        }
        return null;
    }
    async ['run']() {
        const jp = a0cm, a = {
                'MNJBm': function (b, c) {
                    return b(c);
                },
                'zdWHl': function (b, c) {
                    return b(c);
                },
                'TjbyN': function (b, c) {
                    return b !== c;
                },
                'eDqaP': function (b, c) {
                    return b + c;
                },
                'wFaCJ': jp(0x251),
                'krbIC': function (b, c) {
                    return b(c);
                },
                'OHOkS': function (b, c) {
                    return b === c;
                },
                'pSjXv': jp(0xac5),
                'HZsAh': jp(0x7b9),
                'gnylC': jp(0x419),
                'PplSv': function (b, c) {
                    return b + c;
                },
                'xAKGR': jp(0x11c),
                'VshLp': jp(0x67a)
            };
        try {
            this[jp(0xa38)] = await a[jp(0x995)](a0aW, this[jp(0x7c4)]), this['sendHandshake']();
            const b = await a['zdWHl'](a0aZ, this[jp(0xa38)]);
            if (a[jp(0x78b)](b[jp(0x2e9)], 0x65)) {
                this[jp(0xaf5)][jp(0x6d4)](this['state'][jp(0x6fa)], a['eDqaP'](a[jp(0x1f0)], b['status']), [[
                        a0b9,
                        a[jp(0x8a9)](String, b[jp(0x2e9)])
                    ]], !![]);
                try {
                    this[jp(0xa38)][jp(0x958)]();
                } catch (d) {
                }
                return;
            }
            const c = [[
                    a0b9,
                    a[jp(0x5cc)](String, b[jp(0x2e9)])
                ]];
            for (const [f, g] of b[jp(0x9e8)]) {
                const h = f[jp(0x2ca)]();
                if (h === 'transfer-encoding' || a[jp(0x769)](h, a[jp(0x970)]))
                    continue;
                if (h[jp(0x848)](a[jp(0x890)]) || h[jp(0x848)](a[jp(0x52a)]) || h['startsWith'](jp(0xc9b)))
                    continue;
                c[jp(0xd32)]([
                    a[jp(0x1a7)](a0ba, ':') + f,
                    g
                ]);
            }
            this[jp(0xaf5)]['writeResponse'](this[jp(0xb32)]['stream'], '', c, ![]), this[jp(0x1ae)]()[jp(0xc2f)](() => {
            }), await this[jp(0x3e7)](b[jp(0xa7c)]);
        } catch (i) {
            this['log'][jp(0x910)](a[jp(0xc99)](a['eDqaP'](a[jp(0x1a7)](a[jp(0xb05)], this[jp(0xb32)][jp(0x6fa)]['id']), a['VshLp']), i)), this[jp(0xaf5)][jp(0xa21)](this['state'], String(i[jp(0x8d0)] || i), 0x1f6);
        } finally {
            this[jp(0x18d)]();
        }
    }
    async [a0cm(0x3e7)](a) {
        const jq = a0cm;
        a[jq(0x957)] && this['state']['stream'][jq(0x21d)](a, ![]);
        for await (const b of this[jq(0xa38)]) {
            if (this['stopped'])
                break;
            this[jq(0xb32)][jq(0x6fa)][jq(0x21d)](b, ![]);
        }
        !this[jq(0x9eb)] && this['state'][jq(0x6fa)]['write'](Buffer[jq(0x66e)](0x0), !![]);
    }
    async [a0cm(0x1ae)]() {
        const jr = a0cm, a = {
                'XeEjj': function (b, c) {
                    return b === c;
                }
            };
        while (!this['stopped']) {
            const b = await this[jr(0xc38)]();
            if (a['XeEjj'](b, null)) {
                try {
                    this['sock'][jr(0x9d9)]();
                } catch (c) {
                }
                return;
            }
            try {
                this['sock']['write'](b);
            } catch (d) {
                this[jr(0x9eb)] = !![];
                return;
            }
        }
    }
    [a0cm(0xce4)]() {
        const js = a0cm, a = {
                'rsPPd': function (i, j) {
                    return i + j;
                },
                'NPXhR': function (i, j) {
                    return i + j;
                },
                'gSGBn': function (i, j) {
                    return i === j;
                },
                'cwJkt': function (i, j) {
                    return i === j;
                },
                'fMfyi': 'upgrade',
                'jpKYl': js(0xac5),
                'Mzetn': js(0x892),
                'HCISy': function (i, j) {
                    return i === j;
                },
                'AeiME': js(0x244),
                'LXceQ': function (i, j) {
                    return i === j;
                },
                'mmkho': js(0x7c4),
                'fsfuY': function (i, j) {
                    return i + j;
                },
                'nfjqY': function (i, j) {
                    return i + j;
                },
                'edZzH': function (i, j) {
                    return i + j;
                },
                'FlxDW': 'Sec-WebSocket-Key:\x20',
                'mBOBj': js(0x8a1),
                'KEhsl': js(0x216),
                'NXcZb': js(0x9cc),
                'KcGJo': function (i, j) {
                    return i + j;
                },
                'YKdRt': js(0x3ad),
                'fmmjD': js(0xc88)
            }, b = new URL(this[js(0x7c4)]), c = this[js(0xb41)][js(0x42c)][js(0x848)]('/') ? this[js(0xb41)][js(0x42c)] : a[js(0xa39)]('/', this[js(0xb41)][js(0x42c)]), d = [a[js(0xa39)](a['NPXhR'](js(0x369), c), js(0x363))];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[js(0xb41)]['headers']) {
            const k = i[js(0x2ca)]();
            if (a['gSGBn'](k, js(0x366)) || a[js(0x8f3)](k, js(0xbf3)) || k === a[js(0x3ea)] || a[js(0x441)](k, a[js(0x290)]) || a['gSGBn'](k, a['Mzetn']))
                continue;
            if (a[js(0x2a2)](k, 'sec-websocket-key'))
                f = !![];
            else {
                if (a['gSGBn'](k, a[js(0x597)]))
                    g = !![];
                else
                    a[js(0x428)](k, a[js(0x67f)]) && (h = !![]);
            }
            d['push'](a[js(0x598)](a[js(0xa39)](i, ':\x20'), j));
        }
        d[js(0xd32)](js(0x246) + b[js(0x366)]), !h && this[js(0xb41)][js(0x366)] && d[js(0xd32)](a['nfjqY'](js(0xa90), this[js(0xb41)]['host'])), !f && d[js(0xd32)](a[js(0xd02)](a[js(0x64e)], a0k['randomBytes'](0x10)['toString'](a[js(0x9d5)]))), !g && d['push'](js(0x135)), d['push'](a[js(0x6cf)]), d['push'](a[js(0x483)]), this[js(0xa38)][js(0x21d)](Buffer[js(0x2dc)](a['KcGJo'](d[js(0x6e6)]('\x0d\x0a'), a[js(0x7ef)]), a[js(0x301)]));
    }
}
class a0bW {
    constructor(a, b, c, d, f, g, h) {
        const jt = a0cm, i = jt(0x6eb)[jt(0x31d)]('|');
        let j = 0x0;
        while (!![]) {
            switch (i[j++]) {
            case '0':
                this['conn'][jt(0x353)] = k => this[jt(0xace)](k);
                continue;
            case '1':
                this[jt(0x6a5)] = null;
                continue;
            case '2':
                this[jt(0xa02)] = a;
                continue;
            case '3':
                this[jt(0x7c4)] = b;
                continue;
            case '4':
                this['log'] = h;
                continue;
            case '5':
                this[jt(0x4be)] = c;
                continue;
            case '6':
                this[jt(0x661)] = f;
                continue;
            case '7':
                this[jt(0x7fd)] = new Map();
                continue;
            case '8':
                this[jt(0x20d)] = new Set();
                continue;
            case '9':
                this[jt(0xa02)][jt(0xc35)] = k => this[jt(0x18d)](k);
                continue;
            case '10':
                this[jt(0x9eb)] = ![];
                continue;
            case '11':
                this[jt(0x337)] = g;
                continue;
            case '12':
                this[jt(0xa7a)] = null;
                continue;
            case '13':
                this[jt(0x393)] = new Promise((k, l) => {
                    const ju = jt;
                    this[ju(0xa7a)] = {
                        'resolve': k,
                        'reject': l
                    };
                });
                continue;
            case '14':
                this['conn'][jt(0x6c8)] = (k, l) => this[jt(0x482)](k, l);
                continue;
            case '15':
                this[jt(0xa02)][jt(0x884)] = k => this['endStream'](k);
                continue;
            case '16':
                this[jt(0x6da)] = d;
                continue;
            }
            break;
        }
    }
    [a0cm(0xb74)]() {
        const jv = a0cm, a = this[jv(0xa02)][jv(0xb24)]();
        return this['control'] = new a0aV(this[jv(0xa02)], a['id'], this['log'], { 'quic': !![] }), this[jv(0x6a5)][jv(0x68e)](this[jv(0x4be)], this[jv(0x6da)], this['tunnelId'], this[jv(0x337)]), this['done'];
    }
    ['stop'](a) {
        const jw = a0cm;
        if (this[jw(0x9eb)])
            return;
        this[jw(0x9eb)] = !![], this[jw(0x7fd)][jw(0x41f)]();
        for (const b of this['relays']) {
            b[jw(0x18d)]();
        }
        this['relays'][jw(0x41f)](), a ? this[jw(0xa7a)]['reject'](a) : this['settle']['resolve']();
    }
    [a0cm(0xace)](a) {
        const jx = a0cm;
        if ((a['id'] & 0x3) !== 0x1)
            return;
        this[jx(0x7fd)]['set'](a['id'], {
            'stream': a,
            'buffer': Buffer[jx(0x66e)](0x0),
            'body': Buffer[jx(0x66e)](0x0),
            'request': null,
            'websocket': ![],
            'relay': null,
            'ended': ![],
            'served': ![],
            'failed': ![]
        });
    }
    [a0cm(0x482)](a, b) {
        const jy = a0cm, c = {
                'QQoHa': function (f, g) {
                    return f !== g;
                },
                'vpPKe': function (f, g) {
                    return f === g;
                },
                'GSUpb': function (f, g) {
                    return f === g;
                },
                'dAyMw': function (f, g) {
                    return f !== g;
                }
            };
        if (c[jy(0x30e)](this[jy(0x6a5)], null) && c[jy(0xb73)](a['id'], this[jy(0x6a5)][jy(0x8b2)])) {
            this['control'][jy(0x358)](b);
            return;
        }
        const d = this[jy(0x7fd)][jy(0x340)](a['id']);
        if (d === undefined || d[jy(0x12e)])
            return;
        if (c[jy(0x5b3)](d['request'], null))
            d[jy(0x472)] = Buffer[jy(0x8d4)]([
                d[jy(0x472)],
                b
            ]), this[jy(0x2f9)](d);
        else
            b[jy(0x957)] && (d['websocket'] && c[jy(0x95f)](d[jy(0x3f9)], null) ? d[jy(0x3f9)]['feed'](b) : d['body'] = Buffer[jy(0x8d4)]([
                d['body'],
                b
            ]));
        this[jy(0x2bf)](d);
    }
    [a0cm(0x4a0)](a) {
        const jz = a0cm, b = {
                'UNWKz': function (d, f) {
                    return d !== f;
                },
                'dBYVL': function (d, f) {
                    return d === f;
                },
                'EmNOz': function (d, f) {
                    return d !== f;
                }
            };
        if (b[jz(0x2b1)](this[jz(0x6a5)], null) && a['id'] === this[jz(0x6a5)]['streamId']) {
            this[jz(0x6a5)][jz(0x51a)] = !![];
            return;
        }
        const c = this[jz(0x7fd)][jz(0x340)](a['id']);
        if (b[jz(0x895)](c, undefined))
            return;
        c[jz(0xd12)] = !![];
        if (c['websocket'] && b['UNWKz'](c[jz(0x3f9)], null)) {
            c[jz(0x3f9)][jz(0x358)](null);
            return;
        }
        b[jz(0x394)](c[jz(0xb41)], null) ? this[jz(0x2bf)](c) : this[jz(0x7fd)][jz(0xa16)](a['id']);
    }
    [a0cm(0x2f9)](a) {
        const jA = a0cm, b = {
                'FSLFv': function (h, i) {
                    return h < i;
                },
                'DirJe': 'stream\x20',
                'RdcKL': function (h, i) {
                    return h !== i;
                },
                'cgHYp': jA(0xc88),
                'myJxA': function (h, i) {
                    return h + i;
                },
                'XpUJZ': jA(0xa50),
                'dpbaf': function (h, i, j) {
                    return h(i, j);
                },
                'aoTpK': function (h, i) {
                    return h + i;
                },
                'uyidf': function (h, i) {
                    return h(i);
                },
                'ggaFe': function (h, i) {
                    return h === i;
                },
                'sAcUj': function (h, i) {
                    return h + i;
                }
            }, c = a['buffer'];
        if (b[jA(0x1f6)](c[jA(0x957)], a0b4['length']))
            return;
        if (!c[jA(0xb9c)](0x0, a0b2[jA(0x957)])[jA(0xb30)](a0b2)) {
            this[jA(0x6fc)][jA(0x910)](b[jA(0xa10)] + a[jA(0x6fa)]['id'] + jA(0x42d)), a[jA(0x12e)] = !![];
            return;
        }
        if (b['RdcKL'](c[jA(0xb9c)](0x6, 0x8)[jA(0x4a4)](b['cgHYp']), '01')) {
            this[jA(0x6fc)]['warning'](b['myJxA'](b[jA(0x8bc)](b['DirJe'], a['stream']['id']), b[jA(0x4c3)]) + c[jA(0xb9c)](0x6, 0x8)[jA(0x4a4)](b[jA(0x6f0)])), a[jA(0x12e)] = !![];
            return;
        }
        const [d, f] = b[jA(0x44c)](a0aE, c[jA(0xb9c)](a0b4[jA(0x957)]), 0x1);
        if (!d[jA(0x957)])
            return;
        let g;
        try {
            g = a0aK(d[0x0]);
        } catch (h) {
            this['log'][jA(0x910)](b[jA(0x8bc)](b[jA(0x529)](b[jA(0xa10)], a[jA(0x6fa)]['id']), jA(0x608)) + h), a[jA(0x12e)] = !![];
            return;
        }
        a[jA(0x642)] = f, a[jA(0x472)] = Buffer[jA(0x66e)](0x0);
        try {
            a[jA(0xb41)] = b['uyidf'](a0bT, g), b[jA(0xd20)](a[jA(0xb41)]['type'], a0b6[jA(0xcda)]) && (a['websocket'] = !![]);
        } catch (i) {
            this[jA(0x6fc)][jA(0x910)](b[jA(0x24c)](b['myJxA'](b[jA(0xa10)], a[jA(0x6fa)]['id']), ':\x20') + i), a[jA(0x12e)] = !![], this['respond'](a, String(i[jA(0x8d0)] || i), 0x1f6);
        }
    }
    ['maybeServe'](a) {
        const jB = a0cm, b = {
                'cCbQk': function (c, d) {
                    return c === d;
                },
                'IFRQn': function (c, d) {
                    return c(d);
                }
            };
        if (a['served'] || b[jB(0x2f0)](a[jB(0xb41)], null) || a[jB(0x12e)] || !b[jB(0xd36)](a0bU, a))
            return;
        a['served'] = !![], this[jB(0x72c)](a);
    }
    async [a0cm(0x72c)](a) {
        const jC = a0cm, b = {
                'ztDUp': function (f, g) {
                    return f === g;
                },
                'AXLlI': function (f, g) {
                    return f !== g;
                },
                'KfNiZ': function (f, g) {
                    return f + g;
                },
                'dtlyP': function (f, g) {
                    return f + g;
                },
                'wxJqc': jC(0xda),
                'DaQcu': jC(0x1f4),
                'gfYie': function (f, g) {
                    return f(g);
                },
                'VraIm': function (f, g) {
                    return f === g;
                },
                'MJTiJ': jC(0x892),
                'eRTnk': jC(0x7ba),
                'PFIZz': function (f, g) {
                    return f(g);
                },
                'uQqtP': jC(0xae3),
                'RvcXu': function (f, g) {
                    return f + g;
                },
                'qKpFh': function (f, g) {
                    return f + g;
                },
                'lQbbG': jC(0xb8c),
                'bIfRx': jC(0x38e),
                'SbfIx': function (f, g) {
                    return f(g);
                }
            }, c = a[jC(0x6fa)], d = a['request'];
        try {
            if (b['ztDUp'](d[jC(0x688)], a0b6[jC(0xcda)])) {
                this[jC(0x843)](a);
                return;
            }
            if (b['AXLlI'](d['type'], a0b6['http']))
                throw new Error(b[jC(0xce5)](b['dtlyP'](b[jC(0xc0a)], d[jC(0x688)]), b[jC(0x4d8)]));
            const f = await a0aY(this[jC(0x7c4)], d[jC(0xc86)], d[jC(0x42c)], d[jC(0x9e8)], a[jC(0x642)]), g = [[
                        a0b9,
                        b[jC(0xb78)](String, f[jC(0x2e9)] === 0x65 ? 0xc8 : f['status'])
                    ]];
            let h = ![];
            for (const [i, j] of f['headers']) {
                const k = i[jC(0x2ca)]();
                if (b[jC(0x8f7)](k, b[jC(0xabc)]))
                    continue;
                b[jC(0xc6b)](k, b[jC(0x8d8)]) && (h = !![]), g[jC(0xd32)]([
                    b[jC(0xa8b)](a0ba + ':', i),
                    j
                ]);
            }
            if (!h) {
                const l = b['PFIZz'](a0aN, d[jC(0x42c)]);
                l && g[jC(0xd32)]([
                    b[jC(0xa8b)](a0ba, b[jC(0xcf0)]),
                    l
                ]);
            }
            this[jC(0x6d4)](c, '', g, ![]);
            for await (const m of f[jC(0x642)]) {
                c['write'](m, ![]);
            }
            c[jC(0x21d)](Buffer[jC(0x66e)](0x0), !![]);
        } catch (n) {
            this[jC(0x6fc)]['warning'](b[jC(0x6be)](b[jC(0xa36)](b['qKpFh'](b[jC(0xb14)], c['id']), b['bIfRx']), n)), this['respond'](a, b['SbfIx'](String, n['message'] || n), 0x1f6);
        } finally {
            !a[jC(0xcda)] && this[jC(0x7fd)]['delete'](c['id']);
        }
    }
    [a0cm(0x843)](a) {
        const jD = a0cm, b = new a0bV(this, a, a['request'], this[jD(0x7c4)], this[jD(0x6fc)]);
        a[jD(0x3f9)] = b, this['relays'][jD(0x8e1)](b), a[jD(0x642)][jD(0x957)] && (b['feed'](a[jD(0x642)]), a[jD(0x642)] = Buffer[jD(0x66e)](0x0)), b['run']()[jD(0xc2f)](() => {
        })[jD(0x367)](() => {
            const jE = jD;
            this[jE(0x20d)][jE(0xa16)](b), this[jE(0x7fd)][jE(0xa16)](a[jE(0x6fa)]['id']);
        });
    }
    [a0cm(0xa21)](a, b, c) {
        const jF = a0cm;
        this[jF(0x6d4)](a[jF(0x6fa)], b, [[
                a0b9,
                String(c)
            ]], !![]);
    }
    [a0cm(0x6d4)](a, b, c, d) {
        const jG = a0cm, f = {
                'otzvj': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (this[jG(0x9eb)] || a[jG(0xb71)][jG(0x9ac)])
            return;
        a[jG(0x21d)](Buffer[jG(0x8d4)]([
            a0b4,
            f['otzvj'](a0aL, b, c)
        ]), d);
    }
}
async function a0bX(a, b, c) {
    const jH = a0cm, d = {
            'mUDeg': function (h, i) {
                return h === i;
            },
            'dkVZN': function (h, i) {
                return h + i;
            },
            'xJbxs': function (h, i) {
                return h + i;
            },
            'eSamO': jH(0x21b),
            'vTtws': 'edge\x20',
            'XEqMG': jH(0x67a),
            'QmNzr': jH(0xa57),
            'peXDe': 'all\x20Cloudflare\x20edges\x20failed:\x20'
        }, f = a0ak[jH(0x519)]()['sort'](() => Math['random']() - 0.5);
    let g = null;
    for (const h of f) {
        const i = new a0bR({
            'logger': a,
            'host': h,
            'port': a0al,
            'serverName': a0bd,
            'alpn': a0bc,
            'idleTimeout': b === undefined ? 0x7530 : b,
            'verifyCertificate': d[jH(0x3ee)](c, !![])
        });
        try {
            return await i[jH(0x52d)](), a[jH(0x2da)](d[jH(0x8f8)](d[jH(0x8f8)](d[jH(0x8f8)](d[jH(0xb1d)](jH(0xd9a), h), ':'), a0al), d[jH(0x9d1)])), i;
        } catch (j) {
            g = j, a['warning'](d[jH(0x8f8)](d[jH(0x8f8)](d[jH(0x90d)], h) + d[jH(0x84a)], j[jH(0x8d0)]));
            try {
                i['close'](d[jH(0x9e0)]);
            } catch (k) {
            }
        }
    }
    throw new Error(d[jH(0x979)] + g);
}
const a0bY = 0x2;
function a0bZ(a, b, c) {
    const jI = a0cm, d = {
            'ulhuD': function (g, h, i) {
                return g(h, i);
            },
            'xcyFb': function (g, h) {
                return g < h;
            }
        }, f = d[jI(0x9e3)](parseInt, process.env[a] || '', 0xa);
    if (!Number[jI(0x1ba)](f) || d[jI(0xad8)](f, c))
        return b;
    return f;
}
const a0c0 = a0bZ(a0cm(0x900), 0x5, 0x2), a0c1 = 0x1e, a0c2 = a0bZ(a0cm(0x50c), 0x2, 0x1), a0c3 = a0bZ(a0cm(0xcec), 0x12c, 0x3c);
function a0c4(a) {
    const jJ = a0cm, b = {
            'smxbD': function (d, f) {
                return d - f;
            },
            'ZGnjE': function (d, f) {
                return d * f;
            },
            'caGHL': function (d, f) {
                return d ** f;
            }
        };
    if (a <= 0x0)
        return a0c2;
    const c = Math['min'](b['smxbD'](a, 0x1), 0xa);
    return Math[jJ(0x782)](b[jJ(0x9ed)](a0c2, b[jJ(0x27b)](0x2, c)), a0c3);
}
function a0c5(a, b = 0x12c) {
    const jK = a0cm, c = {
            'dkDab': function (d, f) {
                return d == f;
            },
            'JEIOG': function (d, f) {
                return d(f);
            }
        };
    if (c[jK(0x8ed)](a, null))
        return null;
    return c[jK(0x413)](String, a)['slice'](0x0, b);
}
function a0c6() {
    const jL = a0cm;
    return new Date()[jL(0x455)]()['replace'](/\.\d{3}Z$/, 'Z');
}
const a0c7 = ((() => {
    const jM = a0cm, a = {
            'uUkaK': function (c, d, f) {
                return c(d, f);
            },
            'qTZan': function (c, d) {
                return c < d;
            },
            'AXHSj': function (c, d) {
                return c * d;
            },
            'LnIEY': function (c, d) {
                return c === d;
            }
        }, b = a['uUkaK'](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
    if (!Number[jM(0x1ba)](b) || a['qTZan'](b, 0x0))
        return a[jM(0x984)](0x12c, 0x3e8);
    return a[jM(0x241)](b, 0x0) ? 0x0 : a[jM(0x984)](Math['max'](b, 0xa), 0x3e8);
})());
function a0c8(a) {
    const jN = a0cm, b = {
            'fKFFU': jN(0x3d4),
            'mznwP': function (c, d) {
                return c === d;
            },
            'GNAHP': jN(0xce3)
        };
    if (typeof a === b[jN(0xa7e)]) {
        const c = a[jN(0x7a0)]();
        if (c)
            try {
                return JSON['parse'](c);
            } catch (d) {
            }
        return {};
    }
    return a && b['mznwP'](typeof a, b['GNAHP']) ? a : {};
}
function a0a() {
    const lK = [
        'DhnTvxq',
        'Bg9JywXqyxjHBwv0zxjZ',
        'x2zVCM1HDeXVz0vUDhj5',
        'zerQwNe',
        'A2LZyw1Hlxn0B3jL',
        'zxHPDgnVzgu',
        'z2v0uhvIBgLJsxbwna',
        'r2Pnvha',
        's0HAvwe',
        'BvjKvxK',
        'Bg9JyxrPB24',
        'yLDsv2m',
        'y050EKG',
        'y2L6s00',
        'EMHgsNG',
        '4P2mioE7IoERR+wFUUEHGoIUVUAwVEs4JEwpR+EuQdOG',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'CfzyDhu',
        'CMvHzhLtDgf0zq',
        'vevstq',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'AxrLBxm',
        'D2vIC29JA2v0',
        'AhbdAxbOzxi',
        'z1z2zxG',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'Bu51ru4',
        'ntaY',
        'yxbWBgLJyxrPB24VANnVBG',
        'ExbzzwK',
        'mNWZFdf8nhWW',
        'B2jQzwn0',
        'C2vUzeHHBMrZAgfRzq',
        's2zoAvO',
        'y29UDgvUDeXLBMD0Aa',
        'BNbTioIhQUAeIowUJoAiKdOG',
        'A25HBwvwywXPza',
        'Ec1HDxrOlxrVA2vU',
        'svHPDey',
        'u0PisvO',
        's0Ltqu1bx0fsr09FuKvuuLLFtufyx1nfq09orfm',
        'BLfJr0i',
        'qwPmEva',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'DvfXDfa',
        'vNj5D3i',
        'yMvev28',
        'Axb2na',
        'zvLMuLa',
        'zLrTqu8',
        'zNzkqxi',
        'vfrTC1u',
        'zfHdvKi',
        'sfvKALG',
        'Bwf4',
        'vMvkrgO',
        'BNvTyMvY',
        'zxjYB3jZ',
        'EujtD3G',
        'z21cBvq',
        'yvPprNe',
        'Ag5Ru00',
        'zwrAEKG',
        'uhj0C2K',
        'AwyTCMfUz2u',
        'Dg9cExrLCW',
        'rfbTAfC',
        'Bu9suhG',
        'D2fPDgvYCW',
        'C29JA2v0igvYCM9YoIa',
        'vMjovgC',
        'Bhvvzu8',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'zKHNr2S',
        'DePIA3O',
        'l2fWAs9MAwXL',
        'EvH2tha',
        'Cg9Z',
        'zw5Kzwq',
        'zLvMsxm',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'zLbbze4',
        'C3rYzwfTv2LUzg93CW',
        'zgv0zwn0twfYA3m',
        'yxbWzw5K',
        'yvfhEuG',
        'qxHor3C',
        'sfruuca',
        'idO6ia',
        'AxvXyLa',
        'n3WXmxWXmhWWFdr8m3W1FdeYFdL8ohW2Fdj8mq',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'z2DHrMu',
        'z1DjuKO',
        'yxn2rLy',
        'zK9bCMW',
        'r3PiuxC',
        'BNv0z2W',
        'rMz6tLy',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'y29SEee',
        'rLzAqvK',
        'qZPCv2LUzg93CW',
        'CNHFyNL0zxm',
        'ruvdBxO',
        'ihvUzgvJCNLWDgfIBgu',
        'A2LSBgvK',
        'zK1MwhC',
        'weD1vwS',
        'rvjst1i',
        'ChvZAa',
        'CwD4BgC',
        'vK9Sweu',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'suzsuw4',
        'yuHnANm',
        'CM9KBgC',
        'x2zYyw1Lu3vTBwfYEq',
        'ANnVBG',
        'DxnYl2XVy2fSl2jPBI9ZExn0zw1JDgW',
        'z2v0uMvHBhrPBwvjBMzV',
        'y2vhwve',
        'ENHbDfa',
        'xtOG',
        's2jsD0m',
        'y2LWAgvYDgv4Da',
        'rKnNq3e',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'x2zPBMLZAa',
        'u2zstxO',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'ywn0AxzHDgu',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'Bwv0ywrHDge',
        'EgDTs1u',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'B3jOsKO',
        'qNjLyKG',
        'BejTwei',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'AgPWtum',
        'CMv0CMfUC21PDhm',
        'sg5Hzxq',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'sgjkrfq',
        'A2HREgO',
        'BKrvrxq',
        'CwrpuKO',
        'AMfhvfG',
        'C3rYAxbuyxnRtwv0yuXPBMu',
        'EvHbre4',
        'tMT3Avy',
        'y2HPBgrFChjVy2vZCW',
        'x2DLDenVBMzPz1zHBhvL',
        'x3rYyw5ZBwL0',
        'ufDowvq',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'BNjVENu',
        'DxnLtM9PC2u',
        'Dg90ywXozxr3B3jRrg93BG',
        'DxrHALi',
        'AMzevfO',
        'sgPMt0e',
        'x29Urgf0ywDYyw0',
        'CgfYC2vuyxnRtwv0yq',
        'z1fwyKm',
        'AxncDwzMzxi',
        'y0z0CK8',
        't2Tcqxq',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'rLzcreK',
        'q1rMt1O',
        'oNnJAgvTzq',
        'DhvUBMvSignSB3nLza',
        'igTLExmGka',
        'ANDR',
        'Dxb0Aw1L',
        'sfLKuNe',
        'x2nOzwnRqwnJzxnZ',
        'u01gAve',
        'icaG4OcIia',
        'l3bYB2m',
        'qxPKs0O',
        'C3rYAw5NAwz5',
        'z0Xxzey',
        'Du1Mv1u',
        'DgXyEMy',
        'mtGWrKL2svfY',
        'DgvcDNe',
        'Ag9TzwrPCG',
        'ww9TD3u',
        'q2nwtM4',
        'Dg9Rzw4',
        'BwTKAxjtEw5J',
        'CgfKu3rHCNq',
        'BMv4Da',
        'Ahn0BwG',
        'qxfduwq',
        'wvLRvKC',
        'l2fWAs9KBW',
        'DurrCuC',
        'Dw5RBM93BIbZDhjLyw0G',
        'AgfUzgXLsgvHzgvYCW',
        'z2zOzfq',
        'sMrsvLe',
        'CM93CW',
        'z2v0u2vJB25KCW',
        'y21KihjLCxvPCMvK',
        'x2rPC2nHCMrfCg9JAa',
        'z1PNs0S',
        'CNP4tu4',
        'sLPhCgC',
        'DvfxAfi',
        'runeu0fFufvcs0vz',
        'y29UBMvJDgvKihrVia',
        'BMLwBxm',
        'DeTIz1y',
        'CeTbyva',
        'qw13s1C',
        'mgeZnMnKmtjHmtnL',
        'r21UBNy',
        'rNPXsfC',
        'wvv4zfi',
        'tMvfq2G',
        'ywvZlteYoc1Ny20',
        'Afn2yuW',
        'CMvHzgrPCLn5BMm',
        'D1nWAxq',
        'zuDftvm',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'BKzXAvK',
        'z0zrCxm',
        'yNvQDwW',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'zhD4Cuy',
        'CMvHzfvjBNqZmKjf',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'qNjerwW',
        'uMHUtKW',
        'EKj1C2y',
        'tunrtKi',
        'jNr5Cgu9',
        'twH6wLy',
        'DhvUBMvSignVBM5Ly3rPB24GDhLWzsa',
        'u3z2u2O',
        'zvHLzMS',
        'EvryCNa',
        'y3PtBKK',
        'y3jVBNrHC2TZ',
        'A2LyCK0',
        'AgfUzhnOywTLig1LC3nHz2u6ia',
        'C2vUzfjLywr5',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'qIbVBMuTCNr0ihvUzgvJCNLWDgfIBgu',
        'CKvXCKG',
        'Dg5dr0O',
        'z2v0ywrKCMLUzM8Gru5pvezpvu5eia',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'y0TlDLO',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'z2v0tg9Nu3vTBwfYEq',
        'zKDXrgK',
        'zw5JB2rPBMC',
        'Dw5ZAgLMDa',
        'svH0t2C',
        'Be5yAhi',
        'w1rHC2TtDg9Yzv0G4P2miowUMUAxTUs7U+wkOEAbOUwKJEw8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'rNbozwe',
        'DhHcExrLCW',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        't3DxvuO',
        'igHLEd0',
        'rLfvshO',
        'ENjwuK4',
        'B0L3wuu',
        'x3jLBgvHC2vxywL0zxjZ',
        'DhjHBNnWB3j0',
        'wev3uKq',
        'w1buwv0G',
        'mty4',
        'r2TMDgC',
        'DK5yDLi',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'yMLNAw50',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'zgvJCNLWDa',
        'tLnVDxu',
        'vuTRz24',
        'vNrhBge',
        'y050t1C',
        'Bw92zv9Tyxa',
        'sKfpA0m',
        'rurdAwG',
        'wMnVreK',
        'l2fWAs9ZDgf0Dxm',
        'BuHUwNi',
        'vNLkB2m',
        'yxHPCNm',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'DKnprM4',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'yxbWuMvJDKDLBNm',
        'B3bLBG',
        'Axb2nLvZywjSzq',
        'tKvhqvrjvKvFvfrm',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'vhPvsMC',
        'B3LKzvu',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'zg1cwuG',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'CMvHzfvjBNrcrq',
        'zxjYB3i',
        'sNj4zxu',
        'Bg9UzW',
        'wfbyuw8',
        'lcdMNiNMLyJMNj8G',
        'y2f3tvi',
        'tgzfwfu',
        'lJaWmfO',
        'EMr3rNu',
        'EKjoEeq',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'y3jLyxrLu29JA2v0',
        'CMvQzwn0',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'zMfPBgvK',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'rwrwufm',
        'ChvIBgLJs2v5',
        'Ahr0Chm',
        'DMPKuuW',
        'shv3zgO',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'q0PRvhG',
        'wc1uAw1LC3rHBxa',
        'CMvZB2X2zq',
        'uuvnvq',
        'DxbSB2fKrMLSzq',
        's3blBgS',
        'C2vJDxjLigrUCYbPBNrLCM5HBcbLCNjVCG',
        'CgvLCK1HEefJA0rLBgf5',
        'igrJAwq9',
        'y29UC3vTzwq',
        'ANv0Bvu',
        'D3fvy3y',
        'EKLQqxe',
        'l2fWAs90yxnRl29UzxrPBwu',
        'svrbq2W',
        'r3nuBM4',
        'AeD4Afu',
        'u1PrqNC',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'CxvLCNLgBG',
        'y29UDgvUDc1LBMnVzgLUzW',
        'lY5KB2nRzxjLBNy',
        'w1rHC2TtDg9Yzv0G4P2miowTMowcQoEjIoACRca',
        'EwnNv1e',
        'u2vYDMvYsgvSBg8GAgfZig5VigTLEv9ZAgfYzq',
        'BwLUv2LUzg93',
        'D3jPDgfIBgu',
        'DhjPBvn0yxj0',
        'veP0B2S',
        'B3bLBLDYAxrLCG',
        'x2rLBgL2zxjtDhjLyw0',
        'DvbUB3u',
        'DwLK',
        'BwvTx3rVDgfS',
        'yxPlsuO',
        'y29SBgvJDfn0yxrPy0LUzM8',
        'DKTHtu0',
        'zgLNzxn0',
        'sNndy2W',
        'DuLJtLa',
        'B0ruCxO',
        'uLH1uuu',
        'q1Doyuu',
        'Bfv5wxG',
        'AxngAw5PDgu',
        'l2fWAs9MAwXLl2nHDa',
        'CgfJA2fNzs5QC29U',
        'zMn0s3m',
        'C3rVCMuUzw5J',
        'zgvMBgf0zvjHD1n5BMm',
        'zwjkEwq',
        'DxnRyvu',
        'q29WyNi',
        'C2LNBMfS',
        'x2j1AwXKugfJA2v0',
        'uhLYBLG',
        'CMvZzxq',
        'DxrMltG',
        'vMHTEuy',
        'Cg9YDa',
        'revcvuC',
        'yKncEwW',
        'A3PvvNK',
        'ywrKCMvZCW',
        'BNzMr1C',
        'D3jPDgveB21HAw5gAwXL',
        'Ec1MAwXLlxbHDgG',
        'vMT0uui',
        'y1vRC1q',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'rNbKzeS',
        'y3jLyxrLuhvIBgLJs2v5',
        'y21KlMv4zq',
        'r0zrDMK',
        'A0zkuuG',
        'qhf3Cw8V',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'ywnxCxa',
        'AgfUzhnOywTLrg9Uzq',
        'q049q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'qNPUyMy',
        'C3rHDhm',
        'tLzqt1O',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'EgfxtMK',
        'mZaW',
        'C3rVCa',
        'vefts19usu1ft1vu',
        'CgLK',
        'mJa2',
        'uwjkB1e',
        'Aw5PDgLHBfDPBMrVDW',
        'DKfMre0',
        'qw9RreK',
        'u2DTCLm',
        'Dgv4Da',
        'u1HjsNe',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'EhrLCM0TmJu2y29SB3i',
        'svnRD24',
        'qhf3Cw8G57Y65Bcria',
        'EwTyB3q',
        'zxHWB3j0',
        'CMvHzezYyw1L',
        'BM8GCMvZCg9UC2uGywz0zxiG',
        'r0HuBhO',
        'wMHpEM8',
        'Dw5RBM93BIbLCNjVCG',
        'AxnwywXPzeLqDJq',
        'z2v0qxv0AfrHzW',
        'zNntAxPL',
        'C3rVCfnLBMrPBMC',
        'zurXyva',
        's01preu',
        'C3LZDgvT',
        'vNnqyuG',
        'C2v0vty0',
        'x3b0B0r1CMf0Aw9U',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'D3jPDgvuB09YAwDPBG',
        'iowKSEI0PtOG',
        'sKrTAKS',
        'tffZuMm',
        'yM9qqLi',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'z3PPCcWGzgvMBgf0zq',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'qwvbvfq',
        'x2rYywLU',
        'wKffuw8',
        'Dg1WzNm',
        'AxnjBNrLz2vY',
        'q0DRweK',
        'y2Xezw0',
        'BwfYA1nLBMrszwfKEq',
        'x2fWCgvUzeXVzW',
        'vKvhEMi',
        'C3rYzwfTCW',
        'zxjcuMu',
        'mtm2nJmYyNH3AfPd',
        'ywH1AwO',
        'y3Hdtgy',
        'EKDpugS',
        'u3bgEM8',
        'x3jLCMvNAxn0zxi',
        'ugL3v2m',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'l2jPBI9HC2G',
        'rfr5sg8',
        'y3b1x2nVCMvZ',
        'sMrdwMi',
        'BKv5rKO',
        'ze5Tz1i',
        'twLZC2LUzYbJAhvUAYa',
        'zujZqMG',
        'tgPprK8',
        'Ec1MAwXLlw5HBwu',
        'mJGWodm2nwrVsfz5Cq',
        'mhW2FdH8mxW0Fdv8m3W3Fdi',
        'CgfJA2v0',
        'EKLZD2K',
        'C0XhCKK',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'x2fJA0r1zq',
        'BgLZDa',
        'x2rLDK1PBM9Y',
        'x3rHC2TRAwXSvhjLzq',
        'BxjKB1y',
        'yMn0qMi',
        'wduWounLCNrPzMLJyxrL',
        'thf3tg0',
        'AgfUzgXLrgf0yq',
        'DxnYl2jPBI9ZExn0zw1JDgW',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'wNbHy3K',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'AxnFyxv0AgvUDgLJyxrLza',
        'sw5PDfrHC2S',
        'Eg1Or2W',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        't3j0B0q',
        'x3n5C3rLBwn0BeXVy2f0ywjSzq',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'D0zHq0O',
        'vKTnsei',
        'whz4wwW',
        'CMvQzwn0zwq',
        'igLZig5VDcbWCM94AwvKig92zxiGuvvjqYb5zxq',
        'u1HLDMu',
        'rLnmrNy',
        'x3DHAxrxAw5KB3C',
        'tMvADuy',
        'm3WYFdr8mxWWFdu',
        'Chr5iowaMEMaIsa',
        's3PMD0u',
        'zw5JCNLWDerHDge',
        'AffysNG',
        'seTpAvG',
        'BM8GzwrNzsbJzxj0AwzPy2f0zsbPBIbutfmGAgfUzhnOywTL',
        'lMjHzc0',
        'q09ovfjptf9qvujmsunFs0vz',
        'AgvQB2O',
        'DvrvBgO',
        'De9IEwq',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'sM9Nz0y',
        'zw50CMLLCW',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'Bg9JywXqCML2qJy0',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'y2H2zNG',
        'CgfhtNK',
        'CMvSyxLZ',
        'mNWWFdf8m3W0',
        'qw5br2K',
        'C2v0q3jVBLrHC2TZ',
        'ruDPru4',
        'rNjhyMu',
        'A2rcCM0',
        'ChjKruq',
        'CMvNAxn0zxjLza',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'sNPYwgm',
        'ywLRD2i',
        'z2v0sg91CNm',
        'y3PLA0O',
        'ig92zxiGuvvjqW',
        'vuT4yve',
        'D3jPDgu',
        'r2DKwvO',
        'yLLtzgm',
        'CMvHzezPBgvtEw5J',
        'x2nVBNn1BwvuBhm',
        'CxvPyYbWzwvYignPzca',
        'A2fRCw4',
        'sgvbs20',
        'y3jLzgL0uMvHzhK',
        'zgvZDa',
        'Cwfmrgi',
        'A25sshi',
        'DtmY',
        'Dw5KzwzPBMvK',
        'sfH6z2S',
        'rxzRvhO',
        'CMvUyw1Lu3LUyW',
        'zxHWCMvZCW',
        'u0DsBue',
        'uc0Ynty',
        'A3nWu0K',
        'u1vjt3K',
        'qxHqwhC',
        'x3bPy2TfCg9JAa',
        'DgnW',
        'BgLUDxG',
        'CMvHzgfIBgu',
        'y29UDgvUDc1Yyw5Nzq',
        'su5gtW',
        'DuTLy0i',
        'uvzKtfa',
        'qLnus08',
        'y29UDgfPBMvYpwX4yW',
        'qhf3Cw8',
        'l3r1BM5LBa',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'tg5jrvK',
        'Aw5MBgf0zvjHD1n5BMm',
        'uKTiAuK',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'shHsAge',
        'sg9ZDdOG',
        'Dg9MA0K',
        'rhnjAKW',
        'vvrnqLu',
        't1fHree',
        'Dw5RBM93BG',
        'C0fJvwO',
        'x2v4zwn1DgfIBgu',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'ign3BMq9',
        'CwLwsuW',
        'B3jPz2LUihDLyNnVy2TLDcb1CgDYywrLihjLAMvJDgvKoIa',
        'DgvZDa',
        'seXMsLK',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'mtb8mxWXmxW0Fdv8oxWZFdz8n3WWFdH8mG',
        'r3HQB3C',
        'x3bLBMrPBMDpBMvpzMy',
        'ig1HBgzVCM1Lza',
        'sgj6wuW',
        'EhbqzMG',
        'tfLnyw4',
        'D29Yzhm',
        'z2P4q3a',
        'BgfZDc1TB2rPzMLLza',
        'yMLUl2z1C2vYBw91BNq',
        'wff6Du0',
        'EgH3wuW',
        'z2v0rgf0zq',
        'txHVENi',
        'DMfSDwvZ',
        'zwnHBw4',
        'C3LZDgvTza',
        'zhjVChbLza',
        'Ehrpuhy',
        'mtq1mtmYtuzwzMrM',
        'v0DRA3e',
        'v2Dhzhi',
        'C2vUzezYyw1L',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'AxHNtMK',
        'z1vhsuK',
        'vgjoDKW',
        'CM91BMq',
        'Cfvfzg4',
        'seHZz3C',
        'rvHfv08',
        't0zcr1m',
        'yxbWs2v5ugHHC2u',
        'vwnAu2e',
        'wxvutuO',
        'CMvWB3j0',
        'y2fhseW',
        'yMfZzw5HBwu',
        's2H4Afa',
        'CMfUzg9TqNL0zxm',
        'BwfYA3m',
        'CKX2ywK',
        'vNHmwKi',
        'CxvPyYbWDg8GzxbVy2G9',
        'r2v0qwn0Aw9U',
        'AK9Zuhy',
        'x2LWDJzvC2fIBgu',
        'B2zM',
        'AwrSzq',
        'vhPhtxu',
        'z0jdEMW',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'z0TgAhq',
        'CLzvAKG',
        'DMLYDhvHBgL6yxrPB24',
        'AezxreC',
        'DMvYC2LVBG',
        'ANblwwW',
        'swnmwwO',
        'Cgf0AcbYzxf1AxjLza',
        'CMvHzev4ywn0',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'y21Qq1q',
        'y29UC3qGCca9ihb0Es5ZCgf3BIHZAgvSBcWGyxjNCYWGEYbUyw1LoIaIEhrLCM0IlcbJB2XZoIa4mcWGCM93CZOGmJqSign3zdOGCMvXDwLYzsGIB3mIks50BxbKAxiOksWGzw52oIbWCM9JzxnZlMvUDIb9ktS',
        'CxvPyYbWzwvYihbHCMfTCYbTyxGTzgf0yt0',
        'BKPzvNK',
        'wKzMB0e',
        'BM93',
        't0fQAKS',
        'DhvUBMvSrg9TywLU',
        'zNrOrvG',
        'CxvHCMfUDgLUzq',
        'BgDAu0u',
        'CKrbtfa',
        'v1Liswu',
        'senju3K',
        'DgHAuM0',
        'AxDXv24',
        'Axb2nG',
        'CKHsDLa',
        'CgHRAMm',
        'x21HCMTtExn0zw1K',
        'qLLKrg4',
        'B3DUzxi',
        'CMvSyxrPDMu',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'Cg9AEK0',
        'zNvSzMLSBgvK',
        'AKrjwLu',
        'A1L4EKi',
        'vu5xs3O',
        'CvLkz24',
        'DhvUBMvSCW',
        'AxbgtwO',
        'C2f2zq',
        'rMLSzsbUB3qGzM91BMq',
        'zu9or1C',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'CKfbzuS',
        'Dfvzsfy',
        'x2HLywrLCK92zxjOzwfK',
        'zg9JA2vY',
        'q2XLyw5SEsbJBg9Zzwq',
        'oNbHDgG',
        'Bwf5yMvtzxj2zq',
        'Du9ryMC',
        'yvzpB0W',
        'ywnJB3vUDf90ywC',
        's1Pfve4',
        'x21HCMTgDxnL',
        'vM1Oqxi',
        'x2zVCM1HDe1Vzgu',
        'tKfWAMW',
        'zw52AxjVBG',
        'BgfZDezHBgXIywnRv2fYBG',
        'Dg9mB3DLCKnHC2u',
        'rwL2Efi',
        'DxbKyxrLza',
        'wMHAENa',
        'yKTfDuu',
        'Aw5PDgLHBe1HEfn0CMvHBxncAwrP',
        'zgLYzwn0B3j5',
        'A0D3tem',
        's3vIzxjUzxrLCW',
        'CgLUzW',
        'AxneAxjLy3rVCNK',
        'AgnVDxa',
        'x3n0yxr1C19JywnOzq',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'u0HbmJu2',
        'Bw91BNrPBMzV',
        'Aw5MBW',
        'icJLPlhOTkuP',
        'zNjVBq',
        'wKTJAMW',
        'ALPoANy',
        'C1LOBvO',
        'vu9XAfG',
        'terWCve',
        'CgfJA2v0ihrVBYbZBwfSBcbMB3iGAgvHzgvYihbYB3rLy3rPB24GC2fTCgXL',
        'rKDfsKC',
        'twTeCLu',
        'sur2rMm',
        'wf9psW',
        'BLrsBfa',
        'v2nptMC',
        'C3rHDhvZ',
        'B25szwfKEq',
        'AdiUy2z0Dw5UzwWUy29T',
        'qvDbyMq',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'x1niwKfmx05btuvFq0HbuLm',
        'senRD1m',
        'y0nIuwS',
        'yMTivui',
        'C3bSAwnL',
        'D2fYBG',
        'A1LTvwm',
        'v0fstL9jtLrfuLzbta',
        'y3jLyxrLsgfZAa',
        'y0jRCwO',
        'Avngsfu',
        'CgfYC2vszxf1zxn0',
        'z1nODK8',
        'lcbltKfnrv9lrvK9',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'zhPxEfu',
        'x2rPC3bSyxLqyxrO',
        'y1juvLa',
        'wKHktwO',
        'zM1TAKq',
        'rw1SrNO',
        's3LJtKK',
        'l2fWAs9MAwXLl2nW',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'yMLUza',
        'w1rLBxblzxLDihr0BcdLJ5JMM7tOVA7MJAlLPlhOTku6ia',
        'CMvJDxjZAxzL',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'qujSCwW',
        'DgLTzw91De1Z',
        'AgvHzgvY',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'uvfVsge',
        'tufss1nFrevwx1jpt1q',
        'ufjoq28',
        'oIdPMQFPGzpLN5/LKi3LSiBKUiRMIQxOH7pLPjBPG6JLUBpLJ7a',
        'Bgzcvhu',
        'Bgf0tKK',
        'vNnrDLm',
        'yxjNCW',
        'zgf0yq',
        'sezvv2G',
        'tMfjCwW',
        'CxvPyYbZzw5KigzHAwXLzdOG',
        'Bwf4u3rYzwfTC0jPzgK',
        'u0zcr1u',
        'ugneDfC',
        'C3bSAxq',
        'CgvLCKnPza',
        'ywXWBLbYB3rVy29S',
        'Bg1QCeq',
        'vvfnwwO',
        'y29TBq',
        's1bbveG',
        'zeLxuei',
        'mta0odu3nJaW',
        't1fUCMO',
        't2XhA3m',
        'uLPKuhi',
        'uKPNteK',
        'AfHut2W',
        'tLvKuw4',
        '5A2q6l+B56Il5zcV5yQO5AsX6lsLoIa',
        'Benxvey',
        'y3b1x25HBwu',
        'x3jLy29YzfjLy2vPDMvK',
        'BwfNAwmG5lIn5yY56ywn',
        'qKLIt2u',
        'zeL4s28',
        'wM9Xvhm',
        'yNL0zq',
        'DMfSAwrHDgu',
        'vg9hCNO',
        'y29UBKLUzgv4',
        'Ahr0CdO',
        'l3zHCI9SAwiVChrLCM9Kywn0EwWV',
        'uKHwBvu',
        'vLzwz0C',
        'C0fVyLu',
        'Ec1LBMnYExb0zwq',
        'y29UC3rHBNrZ',
        'tMjbrwK',
        'z2v0',
        'wxjzCvy',
        'yxjNDG',
        'uvLUBMS',
        'Ce1dthy',
        'ioMRMos6JUAuR+AmGEEjIoACRca',
        'z1PxAeq',
        'C3rYDwn0uhrY',
        'B2HKr1K',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'mJfusgzduhO',
        'vwn0tvm',
        'ywXWBG',
        'qwn2AwO',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'EuzlENK',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'tKn1z0K',
        'B25tDhjLyw0',
        'zfrUqxi',
        's05btuuG6l+h55+TicG',
        'DNfyv2O',
        'icHUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5kq',
        'zMvLza',
        'se9tva',
        'x29Urgf0yunI',
        'y3jLyxrL',
        '5QIH5z2x5lIn5A2y5zYOoIa',
        'ChrLCM9Kywn0EwW',
        'C2HLBgW',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'v09YEuu',
        'CgvLCIbJBg9ZzwqGy29Kzt0',
        'x2TLEq',
        'ieHuvfaVms4X',
        'zgLZAW',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'Ag9ZDa',
        'zMLUywXSEq',
        'y2H1BMTFAwq',
        'r0vuia',
        'zvH0rgq',
        'tKjrDKC',
        's05btuvFs0vz',
        'mJqXndrwCwTnEhu',
        'zgvSzxrLrMLSzxm',
        'vgfnCNm',
        'wM1Wtxi',
        'zM1pugW',
        'v0ffEKe',
        'qIbVBMuTCNr0igjLzM9YzsbOyw5KC2HHA2u',
        'y1H5v1u',
        'icHTDxnSioEoR+wIG+MCGcbUB2rLid49idiWlJe5ioAuR+AmGsbYzxf1AxjLkgvZBsKPoYbaBhLKzwXSioMIHoE8LUIVKEs6JoI/M+wiTUs4JEwfVowUUsbTDxnS',
        'sK5hrLq',
        'C2vJDxjLq29UBMvJDa',
        'ChjVy2vZCW',
        'zxHLy3v0zq',
        'y3jVBG',
        's3DsugS',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'CgvLCLn0CMvHBvjLBw90zq',
        'nda0',
        'y2XLyw51Ca',
        'z3foAgG',
        'C2vUzenPCgHLCG',
        'q3fnEw4',
        'qMjds0u',
        'AxngAwXL',
        'sNfdDge',
        'x2rVC0rHDgvuAw1L',
        'seXSy1K',
        'A01pC2e',
        'qu1vDuC',
        'y3jLyxrLrgLYzwn0B3j5',
        'reXXCfC',
        'C2XdseK',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'ihbYB3H5igzHAwXLzdOG',
        'sgfUzhnOywTLu3rHDgu',
        'yMLUl3n5C3rLBwn0Ba',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'zg9Uzq',
        'rw1ot3O',
        'vKfuDNi',
        'C3vIAMvJDefSDe5HBwu',
        'CNGGCMv0CNKGDg9Rzw49',
        'ywnRrwXPy2L0Aw5N',
        'teLpqwG',
        'CxvPyYbSB3nZigvWB2nOpq',
        'z3b1x25HBwu',
        'vgXQAeu',
        'Dti0',
        'uwvJCxe',
        't0XNz3K',
        'D3neB3DUz3jHzgvuB2TLBG',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'zfbbq00',
        'ALrvq1u',
        'l2fWAs9MAwXLCMf3',
        'CKrsv3e',
        'tffNsKe',
        'BMv4DeXVy2fSu3rYzwfT',
        'EMTqy3O',
        'Aw1Hz2uVCg5N',
        'BwHJzLa',
        'mZaYytmWmduWnJaZmMi2ntzLmdmYmtaW',
        'CMvHzezPBgu',
        'dqOncG',
        'u2PTA2q',
        'EfrlweC',
        'DxbSB2fKrMLSzvjHDW',
        'tMzdEfC',
        'zwrNzsbYzxf1zxn0zwqGysbizwXSB1jLDhj5uMvXDwvZDcWGD2HPy2GGAxmGBM90ihn1ChbVCNrLza',
        'sNPqz3O',
        'z3HIEM4',
        'DvLTwNK',
        'q0flrgW',
        'vwP1CLu',
        'Aw5KzxHpzG',
        'l2fWAs9MAwXLl25LDW',
        't2nQvu0',
        'AxnZDwvY',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'BfPSqNu',
        'CgvLCLrVA2vU',
        'B3vYq2LK',
        'yMjhs0q',
        'Cu1PvMS',
        'yMfWyLu',
        'z2v0qMfZzuLUzM9ozxq',
        'Cc5VBKrHDgeOzNvUy3rPB24GkcKGE30PoW',
        'C2nPza',
        'Aw50zxjUywW',
        'z2XPyMnwzxjZAw9UuNvUDgLTzq',
        'BvDVww0',
        'tvryC1G',
        'BM9YBwfSAxPLq3jVBLrHC2TZ',
        'Derey0m',
        'v2jtwNC',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'CMvXDwvZDf9Pza',
        'vwvhDLy',
        'y2z0Dw5UzwWUy29T',
        'A05tvxG',
        'Der3Bvu',
        'DfnQv1C',
        'C3rYAw5N',
        'twTqrva',
        'uwXjAM4',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'sgD2BgO',
        '5lIk5OQL5BYc5BI4oIa',
        'D3jPDgvvsw50mZjcrq',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'x2v4CgLYzun1CNjLBNq',
        'zgvSzxrLrg9TywLUrMLSzq',
        'yxbWBgLJyxrPB24Vzg5ZlwPZB24',
        'CMH6BvO',
        'wKLqx01bwf9ftLrssuvt',
        'vKD5seu',
        'AfLOCNe',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'zeHswvC',
        'zND0v0O',
        'Afziywy',
        'ChvTCe9YAwDPBG',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'y291BNq',
        'zK1MEwK',
        'x2nVBM5Ly3rfzgDL',
        'zNjHBwu',
        'BM9YBwfSAxPLt25LDgLTzvrHC2TZ',
        'BvvezwC',
        'shr0Ce1LDgHVza',
        'tK9ju0vFs0vz',
        'y2fJAguTy29UDhjVBa',
        'EujKAgu',
        't3jQAe4',
        'wNnsAfe',
        'ChjVy2vZC2vZ',
        'x2fWCgX5qwnR',
        'EujIuNK',
        'y0LdB0m',
        'CMvSyxK',
        'rg9JA2vY',
        'D2LUmZi',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'B25tzw5KuhjVz3jLC3m',
        'vufiwLu',
        'sgD1u1e',
        'zxHWzwn0',
        'C0Pzvfy',
        'txbQtvy',
        'rhr5Dve',
        'x2HLywrLCG',
        'wfjpyxK',
        'ioAxOcbWywnRywDLlMPZB24',
        'AMjZDhi',
        'AMnguuu',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'DhPyEhy',
        'CxvLCNLbBgW',
        'Cu53wuG',
        'Aw9xCwy',
        'uvjnvgi',
        'Ce9fAgO',
        'whLrz0C',
        'uKrMrum',
        'rKDZwNi',
        'sKvjt0C',
        'CxnQr1C',
        'z2v0qMfZzuLUzM9q',
        'zgf0ywDYyw1mzw4',
        'zxjYB3jLza',
        'swHUz08',
        'y2yTy2XVDwrMBgfYzwqT',
        'sLHSyLK',
        'vKHMuKK',
        'CKL0zfi',
        'BNbTigLUC3rHBgWG',
        'wK5yvgW',
        'y2XLyxi',
        'zNjVBNrPzxi',
        'C3rKAw4',
        'quT1Aui',
        'zg9OihrPBwvVDxq',
        'rw5jCM8',
        'AxnbyNnVBhv0zq',
        'zgDYyw0',
        'B25fEgL0',
        'tfHJzve',
        'uxDotfq',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'CgLWzq',
        'Cgf0Aa',
        'igLZig5VDcbHihyXihr1BM5LBcbKyxrHihn0CMvHBq',
        'ugL2EgS',
        '5lIk5OQL5OIq5yQF',
        'CxvPyY5JzNr1BM5LBc5JB20',
        'wvrPqwK',
        'yLPMChC',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'Bgn0yMq',
        'Aw1Hz2uVC3zNk3HTBa',
        'CM1KAxjtEw5J',
        'CxvPyYbRzxKGCgHHC2uG',
        't3HJBhK',
        'C29YDa',
        'AgfUzgXLsgfUzhnOywTLtwvZC2fNzq',
        'wfLxrKu',
        'vuHZEva',
        '6i635y+w56ob55Uy5Oc75A656yEp5AsX6lsLoIa',
        'u0HQuva',
        'wvvOBfu',
        'u0LHuNm',
        'z1nhqM4',
        'sMnqwgS',
        'y2XVC2vszwfZB24',
        'Dev5vKG',
        'z2v0tg9JywXjuhy0',
        's29Vq0u',
        'CNHcExrLCW',
        'CgDmALO',
        'ywDL',
        'u2rjzgy',
        'DgD0vKW',
        'zhbIywy',
        'BLH5B0G',
        'AgfUzhnOywTL',
        'zNPeyLe',
        'x3jLy2vPDMvxC0j5DgvZ',
        'zg9gs3i',
        'zxHWB3j0CW',
        'Dg90ywXozxr3B3jRvxa',
        'Bg9mvNi',
        'Dg9ju09tDhjPBMC',
        'x2HHBMrSzvjLDhj5',
        'D0zTr24',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'AwyTBwf0y2G',
        'Ahr0Chm6lY8YmJmUns41lJuVCMvZB2X2zq',
        'DhvUBMvSu3rHDgu',
        'u0vtu0LptL9lrvK',
        'mJaWzxfVELLO',
        'CgvT',
        'swLpq2C',
        'vMPhvxi',
        'zxHWzwn0zwqGveXtifnLCNzLCKHLBgXV',
        'q2PKz2O',
        'Dw5LEhbLy3rLzcbdB25Uzwn0uMvXDwvZDcbSyxLVDxq',
        'D2zLEKu',
        'A2v5CW',
        'Dvn1v04',
        'B3zLCMXHEq',
        'yNL0zuXLBMD0Aa',
        'C29JA2v0',
        'DwrWna',
        'CxvPyYbOCa',
        'Ahr0Chm6lY9ZAhOUywWV',
        'DNLZBhG',
        's1D5D3G',
        'C3bRAq',
        'A1zlsvu',
        'AevbEMm',
        'yNvMzMvY',
        'DLDPsxu',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'DxbNCMfKzq',
        'ywDLBNq',
        'CgvUzgLUzW',
        'BeLgrgC',
        'ALzRvuS',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'AgfZ',
        't1jvvwu',
        'EwXMveC',
        'DhHFyNL0zxm',
        'CMvTB3zL',
        'CNjfsKu',
        'ywvZlti1nI1Ny20',
        'CMvJzwL2zvn0CMvHBq',
        'tLHJwMi',
        'AhfRvLy',
        'v1jLtuC',
        'yxjxwxG',
        'l2rLDI9UDwXS',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'qNjXqLu',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        'wLjqDuC',
        'sKXPDxi',
        'yM9KEwXLC3m',
        'DxnYl2jPBI9MDxnLCM1VDw50',
        '5Qc45B+d57Ui56UV5l6D6lwwicHIDw4TChr5ksdLIQdOVB3LPlhOTku6ia',
        'zu9ou0C',
        'uNj1s2C',
        'Cgf0Ag5HBwu',
        'Aw50zxj2ywW',
        'uhvqB2C',
        'vNjou0S',
        'AeLKqwm',
        'zuj1wNO',
        's3HLsKm',
        'qMTdvuC',
        'BKf0Aha',
        'CxvPy1bYzwfTyMXL',
        'ue90z1i',
        'r0jMB1K',
        'CxfOBuK',
        'D2nYyvq',
        'zw5Ku3rYzwfT',
        'tgD0DvO',
        'ntKWEurHDfzo',
        'CYbOCYb0CMfMzMLJ',
        'Dg9tDhjPBMC',
        'txzbvwK',
        'BhvMvKe',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'twXpDfe',
        'txjgsKq',
        'qu5pwhC',
        'DNL4BMS',
        'zw5JCNLWDgvK',
        'A3r4rLa',
        'vNrhrLm',
        'Bg9ZC1jHBMDLCW',
        'y29UDhjVBgXLCG',
        'B25Llxj0Da',
        'Cxflsg8',
        'BhrPue0',
        'rLHRtfa',
        'z2LvshK',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'EMLWsxrLBxm',
        'Aw5gBgLNAhq',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'Bwf4swrSzvrPBwvVDxq',
        'l2fWAs9YDw4',
        'zxjLrfm',
        'CgvLCK1HEezYyw1L',
        'ywnJB3vUDfrHzW',
        'x21HCMTsB290',
        'u2vlELi',
        'DLvUAuO',
        'wen5qMG',
        'whbvsLO',
        'A0jNrhK',
        'y3jVBMXVB3a',
        'A2v5',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'y2vPBa',
        'zg10rvi',
        'DwXnDvy',
        'wMrfC3y',
        'BM9PC2vFA2v5',
        'l2v0yW',
        'yMvlww0',
        'B3D5wwC',
        'D1DYqxi',
        'ChjVBwLZzxm',
        'pdmP',
        'x3n0B3bWzwrgBgfN',
        'BgLUAW',
        'Agj3wKS',
        'Cg5Hs1G',
        'Ag9ZDg5HBwu',
        'rgfry3u',
        'reHACMC',
        'ihnYDhq9',
        'rKPhB0i',
        'wxzNCfO',
        'zgvJB2rLCG',
        'DLvVseS',
        'y29SBgvJDeXVy2fSsw5MBW',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'Cxjurem',
        'BenXvwq',
        '6i635y+wieLqDJyG5AsX6lsLoIa',
        'z2rLrw8',
        'EfLQEhe',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'y0L0AMG',
        'zenezuG',
        't1busu9ouW',
        'tufss1nFrvrdx1jpt1q',
        'vwPAC1i',
        'qvf3Aee',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'AhfTsum',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'sLvOBKy',
        'zLjkD1e',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'qhf3Cw8VBM9Kzs1WDhLa',
        'AgP0Axy',
        'Afv4teu',
        's1zn',
        'ihDPDgGGzg9TywLUia',
        'rK9kwwG',
        'v01sv1e',
        'ywDwrhu',
        'u0vsvKvsx0jbq0TprKy',
        'tuPxrw4',
        'q0Hqswi',
        'x3nLBMrxAw5KB3C',
        'C3rHDhvZq29Kzq',
        'u3bSAxq',
        'x2jHC2vjBMzVtM93txm',
        'x3zLCMLMEvDPDgG',
        'uNb0sfa',
        'wLn5Auu',
        'AgfUzgXLu2vYDMvYsgvSBg8',
        'EgLkEK4',
        'vgrrD2G',
        'yw1Mt20',
        'v2HyC1y',
        'ExnoAu8',
        's0Ltqu1bx0fsr09FuKvuuLLFqKftrv9trunptKrt',
        'BM9Kzs1WDhKTBgLUDxGT',
        'zvf6r00',
        'AxbZ',
        'sLnmy2q',
        'AxvIywW',
        'oNbYB3rVy29S',
        'EfHZB1a',
        'mc42lJuTANm',
        'q2LMsuK',
        'z3jVDxa',
        'vgTryve',
        'rNj4q0G',
        'C2XPy2u',
        'zMLUAxnOzwq',
        'yxjNBYb0Dw5UzwWG',
        'DxnL',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'B25LDgLTzxrHC2TZx2XVzW',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'CeDRBee',
        'zNLxEhK',
        'vK56rwG',
        'CuPuqLO',
        'CMvZAxPL',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        't2Htt1i',
        'vwHPzgi',
        'z2fhtM4',
        'yw9uCeS',
        'z255Bem',
        'zxHPDa',
        'C0zKEfi',
        'y29UBMvJDa',
        'r0vu',
        'yNDQrK0',
        'CgPytMW',
        'D053zKS',
        'EMvADeC',
        'DvfOEeW',
        'vhPMt3y',
        '5lIn5PsV5OYb55Qe54Mi5PYSia',
        'vuXOq0O',
        'C2v0vtmY',
        'z2v0t25LDgLTzvrHC2TZ',
        'zNfqAg4',
        'B2XPqxm',
        'zvbLrMy',
        'Ec1JAhvUAY1Pza',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'BNbTioIhQUAeIoI3S+I/HZOG',
        'u2vKyKK',
        'uKXHDLu',
        'Bwv0yvjLCxvLC3rLza',
        'mti2nteZv2jzvfLo',
        'Du9pruW',
        'y2fJAgu',
        'EKndwei',
        'zNjLzq',
        'uM1Qqwe',
        'z2LK',
        'BMv0D29YAW',
        'weLez3C',
        'thnVDey',
        'DhrS',
        'DxnLza',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'u0LgEgC',
        'EgjPyMm',
        'uKfxzwq',
        'zM9YBwf0',
        'Aw5MBgLNAhq',
        'Bwf4vwrWugf5Bg9HzfnPEMu',
        'odaWma',
        'EefNqNO',
        'tMLIDxC',
        'rMHHB0G',
        'CxvPyW',
        'q0r2ANu',
        'x21HCMTlBw9Kzte',
        'A3vIzwXLDa',
        'zxbVy2G',
        'ugT6D20',
        'yuL6t1i',
        'x3DHA2u',
        'BKHJqKO',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'x2nOyxjezxzPy2vsvW',
        'Be9XwKy',
        'sM1tBui',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'Bg9Hza',
        'thjpuKC',
        'x29Utg9ZCW',
        'tM90igeGEMLWigzPBgu',
        'wfrmDeW',
        'zw5KC1DPDgG',
        'vunSy3G',
        'BNbTioIhQUAeIowKSEI0PtOG',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'ntjIyJGYnwnKyJy1',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'vvfpCMi',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        '6i635y+wie9tios/OEAbR+wKSEI0PtOG',
        'qLvvwxy',
        'r0XVuKu',
        'r21wBwS',
        'uf9trvjwrvjFte9dqvrjt049',
        'txPSte0',
        'DgfNu2L6zq',
        'CMvTB3zLtgLZDgvUzxi',
        'zMLUywW',
        'z2v0t25LDgLTzuXVz3m',
        'AhDHAKS',
        'DuHguKS',
        'yu9ACem',
        'r3bZvgO',
        'ChDUDMO',
        'rLrlBfy',
        'yKvUEui',
        'reLhDfK',
        'Buvhveq',
        'Ewj3C3a',
        'yLDUqxe',
        'zKP5u2C',
        'txbmyuW',
        'y2z0Dw5UzwWUANmVms4W',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKvFs0vzioACQUIUVUE9RIWG5lU75yQH5OYb5lMf5yYw5PYQ5zcV55sO',
        'DfrXqMC',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'rfLrz3O',
        'ChjPDMf0zq',
        'CgXHDgzVCM0',
        'D2XUDha',
        'v0fstG',
        'wg9lyLO',
        'iIdMNkZMRkhLM57OKl3NS7VNU5/OP6pMNPaGkowpR+EuQoAaP+s8MowfIcK',
        'qwvPtuu',
        'zNnMDvK',
        'CgfYC2u',
        'zgLRANy',
        'Dfb4Ehm',
        'nde5ndmWna',
        'ChjPBNrLza',
        'y2XVC2vK',
        'svb2na',
        'Ag9TzurPCG',
        'DvjcB20',
        'y29UDgfPBMvY',
        've9vBg4',
        'uNrPBwvVDxq',
        'wu9eseC',
        'ywnJzxb0lwvUy29KAw5N',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'sgPhzK4',
        '8j+mKcdLHOxNVA7LIQdLR4yGre5tiow3SUwqR+EuQcaOrg9iktOG',
        'tNzyvKW',
        'z1LZD20',
        'AujNshy',
        'zunQte0',
        'EvvrExO',
        'DunJBuS',
        'vuPNCwe',
        'Bw9Kzv9Vy3rHBa',
        'Cg93zxjZAgvSBc5LEgu',
        'r1nvCgi',
        't1jWqLi',
        'w0Tnt0rfxsdIMQdVUi8G6z2E5RovieTnt0rfiowfPEwpGIaO',
        'rKPWENC',
        'z2vUzxjHDgvtAw5NBgu',
        'vufxC3G',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'BNL6DM0',
        'zg9OuxvLCNK',
        'BwrwC00',
        'A3zT',
        'C29Tzq',
        'uunpzuC',
        'Cw5RzeC',
        'yxv0Ag9YAxPHDgLVBG',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'CuXsEuK',
        'z05Jrfi',
        'BvDItwe',
        'x3nWBgL0qw5KrMLUAxnO',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'rM5YCLe',
        'D3jPDgvgAwXLu3LUyW',
        'wMXIDgK',
        'EMrxsgW',
        'C2TuyMq',
        'vuvHsLG',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'x2DYB3DxAw5KB3C',
        'BgfushO',
        'tuDLCee',
        'A21VzguY',
        'CMvWB3j0u2H6ywXezwj1zW',
        'x2jHC2vPBMzVsg9VA2vK',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'Dte2',
        'yLPntgW',
        'rLn2tMW',
        'zhvWBgLJyxrL',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'r1Dbv2q',
        'vxbZCLu',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'tu5vzxG',
        'wwHMExC',
        'whzWthm',
        'ihjLyxnVBJ0',
        'vMzKz2q',
        'v3Luz0S',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'C2vJCMv0',
        'tKzSCLy',
        'BM9Kzs1WDhK',
        'zfLrwwK',
        'zNj3r08',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'svbuuuy',
        'svjSC1K',
        'BvHiAuu',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'CgHjthO',
        'zgvJCNLWDerHDge',
        'vvLwB3C',
        'p25HBwu9',
        'y3jJ',
        'x3bHCNnLtg9UzW',
        'qw5ZD2vY',
        'CMvWzwf0',
        'vuXWt0y',
        'txfuy3u',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'v19psW',
        'Bwf4sw5MBgLNAhq',
        'wgnAtK4',
        'A2fWEvy',
        'yNjrrMe',
        'D2zkthK',
        'y09PsMK',
        'sfLjCLu',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'DMfYEq',
        'sgngELm',
        'sM54C3y',
        'BwTnBha',
        'igHHCYbHBIb1BNjLywrHyMXLienVBM5Ly3rszxf1zxn0oIa',
        'sKTby3a',
        'Bhvztvq',
        'yMXetfi',
        'y3jLzgL0twf4rgf0yq',
        'BwfYA3mG5O6I5Rwl5AsX6lsLifS',
        'DgHeC2i',
        'r0H5Dfm',
        'l3bVzhmV',
        'DgfIBgvfBNrYEq',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'wgHUDNm',
        'C21uwwi',
        'mc4WlJaUma',
        'DgXwuhu',
        'CM1tEw5J',
        'iowkOoI9VEwKSEI0PtOG',
        'u2nnu2C',
        'x3j1BLrLCM1PBMfS',
        'D2L0AfrHC2TnzxrH',
        'veDWzwS',
        'qK9XCeW',
        'vLnoq1a',
        'zeTkyMO',
        'mJaW',
        'CxvPyYbJBg9Zzwq6ia',
        'CMvJzwL2zvDPBMrVDW',
        'sxrjDKm',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'y29UDgLNDw91CW',
        'zhLvveG',
        'C2v0vtG',
        'BgfZDevYCM9Yqxq',
        'wujZu1y',
        'Bwf4rgf0yq',
        'vMXZCwi',
        'tLbdzxi',
        'q2j6Bfu',
        'tufyx1nbrKvFsu5uruDfuG',
        'm3WYFdr8mhWX',
        'zKvUvM8',
        'zNbMCKe',
        'BhvXyuu',
        'yNjmv0S',
        'CvzdrLG',
        'sfrlDLC',
        'rMfcDvu',
        'uNHUshm',
        'uvvhuKm',
        'BxzVuey',
        'q0rSvfm',
        'CYbHCcb0CMfMzMLJ',
        'CMvJzwL2zxi',
        'C0DgsKC',
        'Ee1QDLO',
        'icSG',
        'r2z6B1u',
        'y29Kzq',
        'yM9KEq',
        'y29UBMvJDgLVBNm',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'y3b1',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'C3vIAMvJDcbdtIbTAxnTyxrJAdOG',
        'rePZzLO',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZiVmNe',
        'AKPlDK8',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'rMLSzsb0B28GBgfYz2u',
        'rMX4rfC',
        'DgvYBwLUywWGDw5HDMfPBgfIBgu6ihb0EsbWCM9IzsbMywLSzwq',
        't1bIwNm',
        'C2v0qxv0AfrHzW',
        'C3vIAMvJDa',
        'vKTkwwi',
        'Aw5WDxq',
        'wKHgtgy',
        'y3vYCMvUDeXVywq',
        'yxjJAa',
        'D1LAAMm',
        't0zZDfO',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'AgfZAeXLBMD0Aa',
        'DMvYAwz5u2LNBMf0DxjL',
        'se5Hr0e',
        'u2PurMC',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'sxbgyMq',
        'DhvUBMvSswq',
        'ruvAz2G',
        'tuHOrK8',
        'y2jXrwi',
        'rMThzgi',
        'DMfSAwrmAxrLCMfS',
        'BgLUzq',
        'DMHYANK',
        'r1zvu2G',
        'ChjVEhLszxf1zxn0',
        'yvnftu4',
        'wejfz3y',
        'B0nyD2K',
        'ywXSB2m',
        'zLb6wuC',
        'Cuzequ4',
        'svb2nG',
        'r0Tozfu',
        'D1vxs08',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'rw5JCNLWDfDPDgHbza',
        'ALjfCMm',
        'Dw5Hy2TLza',
        'x2HHBMrSzvnOB3j0',
        'runjrvnFufvcs0vz',
        'igzHAwXLzdOG',
        'vfP5Ehi',
        'zwnKC2fFChvIBgLJx2i2na',
        'DhDNALK',
        'AhbSA3u',
        'Bw1RAg8',
        'ywnJzxnZu3LUyW',
        'qMrsshK',
        'lcbJCM9Upq',
        'DMfZrxu',
        'CxvLCNLpBMu',
        'Afjqu0m',
        'x2nHCevMzKjPDa',
        'Bwf4lwzVCNDHCMrZ',
        'DhLWzq',
        'y29WEuzPBgvtEw5J',
        'A0XAz2y',
        'EMLWnJq',
        'tufss1nFuK9pva',
        'wvHTv0i',
        'C3rHCNq',
        'B21iuuC',
        'ywnR',
        'zLr4Dha',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'x3rPy2S',
        'weX0EMC',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'yNvPBgrdBgLLBNrizwXSBW',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'u1nyALG',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'Bg9JywXmAw1PDa',
        'Ewz3AKG',
        'DwrnDuC',
        'rMzyAw0',
        'Aw1Hz2uVANbLzW',
        'qwvAte4',
        'qwvMwfC',
        'rKDvv1q',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'wNnms3G',
        'AKrTs3C',
        'y29UDhjVBa',
        'qwnNDw4',
        'BxnNuxvLDwu',
        'BM9Kzs1JCM9U',
        'yKvqsfi',
        'Ec1UB25Jzq',
        'EeHrEeq',
        'quD2r1G',
        'qNDPzgK',
        'tZ1dBg91zezSyxjLlcbjBMmU',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'qxvxu3e',
        'BgfZDeLUzgv4t2y',
        'zLfhDvu',
        'AxnwywXPzeLqDJy',
        'mMLzy0zQBq',
        'DfDVt0y',
        'ywXSB3C',
        'z2v0t3jdCMvHDgu',
        'Ec1Hz2vUDc12zxjZAw9U',
        'AuTSBLi',
        'AKj6uNK',
        'DhmTBM9Kzq',
        'D3jPDgvcExrLCW',
        'uNzJwhu',
        'mZKYmty2sxHsCLr6',
        'ChjJsuS',
        's2vIz1G',
        'BNvIwvG',
        'wwfVq0y',
        'B2XLB0G',
        'zgvSzxrLza',
        'qKLmEem',
        'Be5ZvNu',
        'B25tDhjLyw1eyxrH',
        'r295EMC',
        'ywvZlti1nI1Ly2i',
        'ww1ewfC',
        'ue9tva',
        'ndaW',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        's0vOC2W',
        'CxvLCNK',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        '5BcD6k+vig5WBsdOH6RMHiJOOAxOO4u6ig5WBsbPBNn0ywXSia',
        'l2fWAs93B3jR',
        'D3jPDgvszxnWB25Zzq',
        'Cg5pzMzZzxq',
        'z3vOvuG',
        'y29UBMvJDgLVBLDPBMrVDW',
        'ufLrvLG',
        'yKT2EMO',
        'DhvUBMvSu2vJCMv0',
        'vwLxveK',
        'yYbHCcb0CMfMzMLJ',
        'x3j1BKXVB3a',
        'v3birwq',
        'zgLMzMLLsgvSBg1HBG',
        'ugf0AcbUB3qGzM91BMq',
        'D2vIC29JA2v0uhjVEhK',
        'C2vZC2LVBL9RzxK',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'y2XPzw50igLU',
        'zxrHzW',
        'AM9PBG',
        'BwnXwfa',
        's3bsu1K',
        'zMXHDa',
        'EMDZsxG',
        'mNWZFdv8mtz8nNWXmxW0Fdf8n3W4FdeWFdeYFdeZFdb8mtr8mtv8oq',
        'y29SBgvJDe5LDeLUzM8',
        'qLjqy1q',
        'DhjHBNnJCMLWDa',
        'C3rHDgLJ',
        'y2Diwxa',
        'C2v0lwnVB2TPzq',
        'r2ToEvq',
        'vMfbsgi',
        'Agv4',
        'uvnczNq',
        'D01my2W',
        'x3jLy29Yzfj0DfnHBxbSzq',
        'CgfYDgLHBa',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'C3rYzwfT',
        'u1nqD04',
        'Bg9N',
        'u1jVDwW',
        'mxW1Fdj8nhWZFda',
        'Eu5YzeS',
        'wMjMsK8',
        's29hCvG',
        'zw5JCNLWDa',
        'ueTXzhm',
        'Dw5SAw5Ru3LUyW',
        'De1Wz3y',
        'wwvqrKG',
        'uKLWqvq',
        'zhPHvLe',
        'v3nPqxu',
        'EuLfveO',
        's3fpEfy',
        'EuHtCLC',
        'zxHWAxjLCW',
        't2vLzMq',
        'BgLZDezPBgvZ',
        'qMvqsKi',
        'EufytMG',
        'z2v0q3jVBKXVz3m',
        'z2v0zxvPza',
        'zwzM',
        'uLjrv2q',
        'BM90x2zVDw5K',
        'CMrLDG',
        'CNj3Cw8',
        'z2v0vgfZA1n0yxr1CW',
        'zMfSC2u',
        'mxWWFdv8mNWZFdq',
        'CNrPy2C',
        'ywnJzxb0lwXHBMD1ywDL',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'C2HVCNq',
        'CNvJBeK',
        'C2TtALC',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'EwnSBgG',
        'uNf0t0C',
        'x21HCMTlC3rVCMu',
        'DxnLCI1Hz2vUDa',
        'zw5HyMXLza',
        'zeTdrMu',
        'v2Dfvvu',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'C2vYDMvszxf1zxn0',
        'uhbgAKW',
        'CNzSD2C',
        'tfvlBuy',
        'y2XPzw50sgfUzhnOywTLu2vJCMv0',
        'y3btEw5J',
        'u3LZDgvTmZi',
        'DuHQvuu',
        'EK1ftKG',
        'Bwf4u2L6zq',
        'vurxqxa',
        'r2vPyvq',
        'ywnRugvUzgLUzW',
        'B3bLBKnVBNrYB2W',
        't1bgB1m',
        'EwT5zxi',
        'C3rHDfn5BMm',
        'C3ritvO',
        'DgXZ',
        'shr0CeHVC3q',
        'zMnXuKq',
        'A0Hkwuu',
        'q2H1BMSG',
        'nxWYFdb8ohWZFdf8nNW3Fdq',
        'wxv2yxq',
        'z2v0rNvSBfLLyxi',
        'ze9wBu4',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'ExvezLK',
        'sgD2sg0',
        'teforW',
        'AhblzxK',
        'zhLUyw1PyW',
        'x3b1Bxbiyw5KC2HHA2vnzxnZywDLCW',
        'y3LUuuC',
        'DML5zgG',
        'A1bHy2TLDfrOCMvZAg9Sza',
        'zMLUAxnOzwrtzw50',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'Cg5cExrLCW',
        'yMfZzty0DxjS',
        'B1DHvvG',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'qKXMzwK',
        'qujhv1C',
        'oM1LDgHVza',
        'vLjct2i',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'zwnPzxnFChvI',
        'qunKy2m',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'AgvHzgvYC1nLBNq',
        'C2HVD1r1BM5LBa',
        'ALjfwfq',
        'Bg9JywXnyxHeyxrH',
        'y21K',
        'D3rywNO',
        'y29UC3qGyxjNCYa9ihbYB2nLC3mUCgXHDgzVCM0Gpt09icj3Aw4ZmIiGpYbBiI9KiIWGiI9JiIWGiMv4AxqIxsa6ifSIlwmIlcaIzxHPDcaWiL07',
        'ywn0AxzLq29UBMvJDgLVBKLKtgLTAxq',
        'q2XnD2W',
        't0HpA1m',
        'B25eyxrH',
        'ywzose8',
        'CMfnA3C',
        'Bu9NuM8',
        'A3vIzxbVzhm',
        'Ahr0Chm6',
        'DK15wgu',
        'quHYse4',
        'CfP4BvC',
        'AMz2v3C',
        'CgvUzgLUz09Uzu9MzG',
        'C3rHCNrtzxnZAw9U',
        'lcbtAwDUywW6ia',
        'zezgrKi',
        'Ec1MAwXLlxnPEMu',
        'uMvHze1LC3nHz2u',
        'AgfUzhnOywTLignVBMzPCM1Lza',
        'rKrps0C',
        'C2HPzNq',
        'qMrgzfO',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'BxLSywC',
        'rNrmzxy',
        'zMLSDgvY',
        'BwLU',
        'zvPjwKu',
        'shD2suG',
        'Cw9sDMi',
        'zwnPzxnQCW',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'Dg90ywW',
        'A3LewgG',
        'Egfjt0u',
        'vgPIEu4',
        'z3fTCw8',
        'r3rft1e',
        'CgLUz1bLBMrPBMC',
        'CgvYBwLZC2LVBNm',
        'AgfUzhnOywTLihbHy2TLDcbYzwnLAxzLza',
        'CxPyExa',
        'nxWWFdr8m3WYFde',
        'x3jLDhvYBKXVC3q',
        'sNLWELC',
        'CMvMzxjLCG',
        'A2vYBMvSx3zLCNnPB24',
        'AKnrDxK',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        'Cg5tzw5K',
        'sKDgq0W',
        'quDftLrFufjjvKfurv9lrvK',
        'qun3sNG',
        'ohWXmNW0FdL8nxWZFdf8mNWXmxWXmhW2Fdb8nW',
        'ms4XlJi',
        't2TpAMi',
        'DhjPBq',
        'Bg9JywXtDhjLyw1eyxrH',
        't3vJzg4',
        'A2v5x3nVDxjJzq',
        'D2vMrvi',
        'Bw9K',
        'ENHkA0y',
        'AwHsDMW',
        'Dw9TChu',
        'g1SZnM1Bsu5gt10BwZbTia',
        'Buruy28',
        'z2v0tw9UDgG',
        'v21Qs0G',
        'D0jmELm',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'sK53uwe',
        'qMnxB1q',
        'sxLUqLm',
        'Aw1Hz2uVz2LM',
        'zK1jCNG',
        'ELvxAu4',
        'zNHvyKu',
        'C3DLD2e',
        'yK1kBNe',
        'zxHWAxjLC19HDa',
        'y2yTAw50lq',
        'y29UDgvUDc10ExbL',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'u1D6wwC',
        'DhvUBMvSvxjS',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        '6i635y+w6jMA5OUF5yYw5l+H5OgV5AsX6lsLoIa',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'AwrSzvrPBwvVDxq',
        'q1jptL9dsevds19jtLrfuLzbta',
        'DgLTzq',
        'B3jPz2LU',
        'yMDMq1a',
        'BfHtthy',
        'zMv0y2Hjua',
        'zuDJAhe',
        'DhrSx3nLy29Uzhm',
        'tMn0wLa',
        'zMfyzfe',
        'yuD3A3K',
        'C2v0vgLTzw91Da',
        'Ce5nCha',
        'x2zHAwW',
        'rhHbAgW',
        'y3jVBKPVyNm',
        'koACQUIUVUE9RIK',
        'C3bHD24',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'Bwf4qwnRrgvSyxK',
        'ue14y2i',
        'BxnNuMvZB2X2zxjZ',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'q29UDgvUDc1mzw5NDgG',
        'qLHozxO',
        'zeDsqMC',
        'C2vUzerHDge',
        'Eunhrue',
        'v3DNExi',
        'CgHHC2u',
        'yNH6wgq',
        'ywz1rLG',
        'Bwzlwfq',
        'tKLpu3u',
        'A2vYBMvS',
        'C2v0qxv0B1bHzgrPBMC',
        'y29WB0y',
        'CxHSEMO',
        'CgvLCLn0CMvHBuXVy2fS',
        'CMvXDwvZDeLK',
        'yLDTwMq',
        'DenVyxm',
        'ENfUrNe',
        'Du5ICge',
        'EMPfv3y',
        'wuTKuNq',
        'rgvnu3C',
        'yxbWBgLJyxrPB25dBg9Zzq',
        'sxzrD1y',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'CgTdsLK',
        'qwHLtvO',
        'CLrJuw4',
        'AKXMwLy',
        'rhryrMu',
        'txffEMG',
        'yxbWBgLJyxrPB24VD2fZBq',
        'DMvYAwz5q2vYDgLMAwnHDgu',
        'CMvXDwvZDhm',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'se5Vqwy',
        'q0Tyq3K',
        'y2yYmwfKnZrLntLHnJeXmwjLmwq4yZaYmwu2nwi4otfJmMeYmteXnJDHyMi4yZvLmdC5zta5ztjJoge4mZm5yW',
        'Cc5VBKv4AxqOzNvUy3rPB24GkcKGEYbWCM9JzxnZlMv4AxqOmcK7ih0PoW',
        'CgvLCKXPBwL0',
        'B0j2C0K',
        'txHtwfe',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'BwvT',
        'x2DSB2jHBeHVB2S',
        'zg9OigH0DhaGC3rHDhvZia',
        'BKP2sKu',
        'rLrVEuK',
        'CMvHzfvjBNqXnKjf',
        'ls0Tls1cruDjtG',
        'yvLJtLy',
        'C3vJy2vZCW',
        'EfzWyNO',
        'zfbMzw4',
        'C2HHCMvKt2jQzwn0CW',
        'C3DHChvZzwq',
        'BwfZAW',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'kg5VBMuP',
        'tM9Uzq',
        'oMf1DgHVCML0Eq',
        'ChjVDg9JB2W',
        'zgv0ywLS',
        'l2rLDI8',
        'DgLTzw91Da',
        'zK1vEu0',
        're9ix1nfuLzfuLm',
        'x2vWB2nOrM9YvhLWzq',
        'v0PPDNG',
        'x3n0CMvHBuzYyw1LCW',
        'A3DwEgK',
        'BMDrzgG',
        'C2vYDMvYigLU',
        '5BEY6k6+572UkgXLBJ0',
        'tg1itNe',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'DM5js3e',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'vw1MuwS',
        'zMLUzeLUzgv4',
        'Cg5TD2K',
        'Aw5MBgf0zq',
        'y3DK',
        'Cu54B0u',
        'C3DHChrVDgfS',
        'uhPfqw4',
        'C3DHCf90B3rHBa',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'u2H1DhrPBMCGzg93BI4UlG',
        't1bftG',
        'CgvLCIbPzgXLigzVCIa',
        'v0Xiy3O',
        'CMfT',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'tfPuA0q',
        's09zCMO',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'y29UzMLYBwvK',
        'vKrdwwu',
        'ywv0t2W',
        't3P6tee',
        'z3nYDuG',
        'C2vYDMvxzwjZB2nRzxq',
        'yxv0Ag9YAxr5',
        'x3jLCxvLC3rLCG',
        'DxjSzw5JB2rLza',
        's1jlEwm',
        'C3rHCNrZv2L0Aa',
        'CMvZzxrtDhjLyw0',
        'wevXtuC',
        'l2fWAs9MAwXLl2XPC3q',
        'icHZzwn1CMuGzg5ZoIbUBYbYzwnVCMqP',
        'vwrwt1K',
        'zNjVBuj5DgvbCNjHEq',
        'BM9PC2uTyY53yxnT',
        'BwDUtha',
        'qhf3Cw8VBM9Kzs1WDhKTBgLUDxGT',
        't0D3r3m',
        'CMvJDG',
        'y29Uz2vZDgLVBLDPBMrVDW',
        'ChjVyW',
        'mJa0',
        'x25VDgLMEvDPBMrVD3m',
        'ref2thC',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'Cu15D0q',
        'z2v0tg9JywXjuhy2',
        'ruDyqNa',
        'rg5tzLi',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbJAxbOzxiGC3vPDguG',
        'z0nxBw8',
        'CMvJDKnPCgHLCG',
        'yxDHAxrPBMCTAgfUzhnOywTL',
        'zefmzwW',
        'C2vYDMvYigHLBgXVoIa',
        'qMXuBuK',
        'z2TKvLC',
        'D1jmDfa',
        't1HSqLi',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'rgn4ufe',
        'Eff3s2e',
        'zxLAzgS',
        'g1SZm21Bv0fstL0BwZbTia',
        'CNvUuhjVBwLZzq',
        'uwLWz1O',
        'EvncCeq',
        'AgvHCNrIzwf0',
        'vLL1rha',
        'EgznEhu',
        'sfP0Cw8',
        'verZteC',
        'rLzYv3K',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'ufjptvbux0nptu1btKq',
        'y3jLyxrLsg1HyW',
        'zKXtAvG',
        'D09bu1u',
        'lMnVBNrHAw5LCMvUDG',
        'Cdi1nG',
        'l2rVBwfPBG',
        'zxHWCMvZCY13CW',
        'D2jLD2S',
        'qKftruLorK9FrKfjtf9cqunlt0zg',
        'BLnnwuK',
        'B25tDhjLyw1fBMq',
        'vur6rMe',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'BvLvrMO',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'vLHdtwm',
        'EevAsMO',
        'zK9PC3u',
        'uwjJCgy',
        'x3bLzxjtDhjLyw1mAw1PDa',
        'vfDLwxO',
        's2LvveS',
        'sfPZqwG',
        'quDftLrFvKvsu0LptG',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'w0Tnt0rfoNnOEI5HBf0G',
        'x2LZrxHWAxjLza',
        'zejzvKW',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        'CMvTB3rLugfYyw1LDgvYCW',
        'x21HCMTlDM0',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'su5VAvu',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        're9ix1nfuLzfuLnFrevgqvvmva',
        'zw5JCNLWDfjLC3bVBNnL',
        'AuTIuLu',
        'C1bZvLm',
        'CxvPyYbRzxK',
        'yMfZzty0',
        'tNvNvue',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'Bg9JA2vK',
        'A2LSBa',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'Bg9JywW',
        'qvj3C0u',
        'A3jIsum',
        'CgvLCK1HEerHDge',
        'uMfOs2C',
        'DgfN',
        'Aw5PDgLHBa',
        'C3j0Da',
        'ANnkveO',
        'yvHrBKS',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'C3rYzwfTswq',
        'z2XPyMm',
        'BMv3q29UBMvJDgLVBKLK',
        'CMTvvvG',
        'swLNzfO',
        'r2XWsfq',
        'Aw5JBhvKzxm',
        'C2vYDMvYsgvSBg8',
        'zgLZA190B3rHBa',
        'zwrNzsa',
        'BxLkEee',
        'tK9ju0vFqunusu9ox1nqteLu',
        'u05lvuu',
        'tenitu8',
        'AMLoAKW',
        'zgvIDwC',
        'B25fEhbPCMvK',
        'BgrcEuq',
        'ExH1vMe',
        'ChjPDMf0zv9InJq',
        'D3jPDgvvsw50mZjmrq',
        'sfnStu0',
        'vhLvEwe',
        'uePvB0G',
        'zg1gvNC',
        'wwzQq1C',
        'uM5JAu0',
        'rNLgqMi',
        'y0HeDee',
        'BhDXC3a',
        'BwvZC2fNzq',
        'Ahr0CdOVlW',
        'Bg9ZCW',
        'zMLSzxm',
        'y29Uy2f0',
        'y0nls2S',
        'zg5uyKi',
        'vvvcCfK',
        'zvjuBMS',
        'y2XVC2vtEw5J',
        'y3jLyxrLzef0',
        'v0rfq2e',
        'AgfUzhnOywTLqNL0zxm',
        'B3bbEvC',
        'sMTbDxm',
        'tevfs0e',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'ywrK',
        're9xtKXpqurFru5duLLqvf9nqvG',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        's2Dyzee',
        'B25Lt2zM',
        'wNP4whq',
        'EgrWu3q',
        'DNrfwve',
        'A0nsr2G',
        'wLrIr0C',
        'Cevpqxy',
        'AMfxvxa',
        'zgTeywi',
        'zxHLyW',
        'CMnJwwe',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'z2v0zwDPza',
        'y0jvA20',
        'y3DkA3q',
        'vur2vwq',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'sM5Wy1m',
        'vNjHsw0',
        'zgTwwK4',
        'ihvWzgf0zwq9',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'CMf3',
        'u2fJthK',
        'AwDUB3jL',
        'Aw5PDgLHBe1HEfn0CMvHBxnvBMK',
        'AK5frKS',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        'y3j5ChrVu2vUza',
        'EgLxvvm',
        'lNvWBg9Hzf9JAhvUA3m',
        'C2vUzeHLywrLCNm',
        'v0Tcvxe',
        'zu1wtgm',
        'zwH3Axy',
        'rMvrtNK',
        'Ec1VCMLNAw5HBc1WyxrO',
        'vvzZwfK',
        'zuHcwKC',
        'vvfzvfe',
        'DLr0D3m',
        'Bg9VA3vW',
        'ywXSigrVAcbZzxj2zxjZigzHAwXLza',
        'D2fYBMLUzW',
        'BuvrsLG',
        'vMzZwxi',
        'ywnJzxb0',
        'te9hx0XfvKvm',
        'Bwf4u3rYzwfTC1vUAq',
        'D3jPDgvcAwDvsw50nJrmrq',
        'uKv6B3G',
        'r21ktfu',
        'zLrZu1e',
        'BKTgD0O',
        'CLPOrNq',
        'AgfUzhnOywTLq29TCgXLDgu',
        'su5UELO',
        'BMvNB3rPyxrLzefSCg4',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'l2jPBI9ZAa',
        'Dg9cExrLqxjYyxK',
        'CMvT',
        'sMrtuwq',
        'ENPtsxq',
        'BgvHzKnLCNq',
        'zwzZy3K',
        'D3jPDgvvsw50mtzmrq',
        'CLzoruC',
        'zLvkA2O',
        'nhWXFdv8nNWWFdn8mG',
        'sg9ZDa',
        'wxzVtwC',
        'BhbdAMy',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'shr0Cfn0yxr1CW',
        'C2f2zwrFyxq',
        'ue9sva',
        'C2HHmZG0',
        'BgfZDevSAwnPDgLUzW',
        'l3j1BG',
        'ls0TlwTPC2fTyq',
        'zMXVB3i',
        'l2LUzgv4lMH0BwW',
        'rgjquw4',
        'DhvUBMvSx2rVBwfPBG',
        'v0Lir1i',
        'zxHLy3v0ywjSzq',
        'BMf0AxzL',
        'q25HDNC',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'z3fcrhy',
        'q3LdAMK',
        'uuvKv3q',
        'ywnRrwnU',
        'uvjiuhy',
        'A3LgBhu',
        'DK9rvwW',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'BefbB0K',
        'C2vYDMvYCW',
        'y3jVBNrHC2TZx2XVzW',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'shjZu1a',
        'q2fWrwzMoG',
        'zwnPzxnFChvIBgLJx2i2na',
        'r3LpuvK',
        'ntaW',
        'C2vUDevUza',
        'CMvJDLjHBMDLCW',
        'rgzNy0e',
        'CNzpu3q',
        'CKrMEfe',
        'zMLUAxnO',
        'qM1wCuK',
        'BgvUz3rO',
        'zgvZDhjVEq',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'ioAoOUA1I+wKSEI0PtOG',
        'ihn0yxj0zwqGB24G',
        'BfzLBe4',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'ktOG',
        'zef5txC',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'u0HmAvm',
        'Aw5JB2DUAxrV',
        'zfDSEeK',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'DgfZA01LDgfmAw5LuMu',
        'AxneAxi',
        'r01iwvO',
        'AwDUExq',
        'ufzuAKu',
        'yw9it0q',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'vhzrqvi',
        'ihbUpq',
        'D3jPDgvvsw50mtzcrq',
        'CfnQwhy',
        'EuPQzuO',
        'qLbJy20',
        'whbHDgO',
        'y29WEuzPBgvZ',
        'qKftruLorK9Fte9dquXFvfrm',
        'CMvJzwL2zsbMywLSzwq6ia',
        'C1rYD1O',
        'CMvWBgfJzq',
        'Cgvyrgu',
        'BhHJ',
        'CLHrseq',
        'zxLk',
        'BNHKB21HAw4',
        'ChvIBgLJx2i2na',
        'tKfQC3K',
        'vvzZCNy',
        'EuHxy2W',
        'mJv8ndn8mJD8ndD8oxW0ohWXFdu1FdCYFdeWFdy4FdCXFdmXFdC1FdiWFdu0Fdq5Fdm1Fde0Fdq0Fdn8mZD8mtv8nJL8mtj8ndv8nZn8nJD8mZb8mtn8nJv8mZj8mJr8ntj8ntL8mtz8mJf8nNWYoxW1Fdu3Fdj8nZr8ntn8mhWYmNW0mNW0mxW4FdyWFdy0FdyZFdu4FdmZFdiZFdm2FdD8mZr8nhW1mhWXohW2nNWZoxWYohW0nNW1nNW3nNW0mhWXoxW3mhWXn3WXmxWYnNW1mxW2mxW2mNWZoa',
        'swzjzuS',
        'qvHiu2O',
        'D05xwMq',
        'CMvHBhbHDgHtEw5J',
        'x3bHCNnLtw9Kzq',
        'qu9iEfG',
        'DgfRzuzPBG',
        'vhHxwM0',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'ywjZ',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'lMrVy2TLCMvUDG',
        'ruj0CxO',
        'D3jPDgvtDhj1y3rmAxn0',
        'l2fWAs90yxnRl2nYB24',
        'Chr5uhjVy2vZCW',
        'Cgf0Ahm',
        'tu5kqM0',
        'CxLiwxq',
        'r1rnCuC',
        'v3vsz2S',
        'rKLmrv9st09u',
        'z2vUzxjHDgvqywLY',
        'CgfYyw1Z',
        'vK9Zuwy',
        'DwfvrvG',
        'D1LeEKW',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'y2XVC2u',
        'CK5Yt2W',
        'y29TCgXLDgu',
        'qKvZChC',
        'C3vTBwfYEq',
        'B3jKzxjbzgrYzxnZzxm',
        'AwTsEvC',
        'qLfQt2O',
        'vKvsu0LptG',
        't3DMAe4',
        'vxfQBMm',
        'sNfYvgq',
        'zMLU',
        'BLrruK8',
        'z0zjuhm',
        'vLL0weO',
        'tMv4DxmTuhL0Ag9U',
        'x2LUrMXPz2H0qNL0zxm',
        'rw1lCui',
        'zevfDfe',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'uLzRy3y',
        'u3vSu0S',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'z1fnANy',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'ug5TAhO',
        'yYbOCYb0CMfMzMLJ',
        'uwrYyLy',
        'Cg1ctvO',
        'EvvHy3q',
        'reHxwK8',
        'yxfiDxa',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'C2vHBa',
        '5OMa5PYjihb0EsdLRP7NJRdLNyFKUi3LJ6/NLkGGkowTKoI/M+EOI+AoOUA1I+wKSEI0PsNJGii',
        'uL9psW',
        'CMvWB3j0u2H6ywW',
        'zgnPza',
        'v2TywMu',
        'zMXNyMS',
        'tLbQwNC',
        'zNvZzq',
        'x2HHBMrSzuzYyw1LCW',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'CMvSzwfZzq',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'BvrPEha',
        'tfHd',
        'zvnHBu8',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'Dhj1BMnHDgvKiffvsumGDMfYAw50',
        'nJbOBgjAtwy',
        'BujpqMO',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'ug9orgO',
        'C1HYDvm',
        'zw5K',
        'ELbrDKK',
        'uKrZA0G',
        'y3zOBuu',
        'Bwv0yq',
        'zvfwvwW',
        'y29UC3qGC2HLBgWGpsbWCM9JzxnZlNbSyxrMB3jTid09psaID2LUmZiIid8GkhbYB2nLC3mUzw52lKnVBvnWzwmGFhWGiMnTzc5LEguIksa6iciVyMLUl3nOiJS',
        'uw1oENi',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'tujTrLu',
        'DwXODuq',
        'B3rZq1i',
        'DgHLBG',
        'vNP3BgK',
        'Bvbpzvu',
        'AgvHzgvYCW',
        'A2v5ugfPCG',
        'y29UBMvJDgLVBLnLBNq',
        'C3rVChbLza',
        'Dw12DLK',
        'wKDUAKu',
        'Bwf4ugfJA2v0',
        'sfznveK',
        'u0PTCuq',
        'yxDHAxrPBMCTC2vYDMvYlwHLBgXV',
        't2nnz3G',
        'D3vwsgK',
        'CMv0CNKTywz0zxi',
        'uwTZrM4',
        'DxbKyxrLq29UzMLN',
        'x3jLywrmAw1PDgvK',
        'vfrmx01bwa',
        'zwnPzxnqDwjRzxK',
        'mhW0Fdj8m3WX',
        'BhzyCee',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'CLLXrem',
        'EeDwz1u',
        'suThzMO',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'y29UBG',
        'DvnLrxi',
        'BNvLwNG',
        'BgfZDfnHDMvKqxq',
        'uuXvB0e',
        'Aw5PDgLHBe1HEerHDge',
        'svLxtMK',
        'qLPWqxa',
        'wM1VEee',
        'y2LWAgvY',
        'qxzrEMq',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'CKXetei',
        'ALDtENK',
        'rgLYsMu',
        'zunHy0G',
        'x2zPBgvdB250ywLUCW',
        'lMv4zq',
        'r2DRyuK',
        'ug1UrK8',
        'zgvSzxrL',
        'vfrmx01jtG',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'DwrWnG',
        'sxvpvNq',
        'yKLIz1i',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'CMvHzfvjBNqXnKXf',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'x2zSDxnOsgfUzhnOywTLqwnR',
        'AuzKC3i',
        'CMvZCg9Uza',
        'ue1KBNG',
        't1bQyMO',
        'y2fSBa',
        'vhnLEKC',
        'tufss1nFufjpq19st09u',
        'B25LDgLTzq',
        'CMvHC29U',
        'q2HVCLy',
        'zNvUy3rPB24',
        'BgfZDe5LDhDVCMTuAw1L',
        'wMLbuha',
        'BhrbB0K',
        'C3LZy2fSBa',
        'zhLUyw1Py1nPEMu',
        'u2rJy3e',
        'vuTJz3C',
        'BM9Kzv9TB2r1BgvZ',
        'Evf5tLi',
        'v3HjDxi',
        'tMnQDLG',
        'CuTWrMG',
        'qIbVBMuTCNr0ihbUpq',
        'C29JAW',
        'CNnqugq',
        'AhP4DgC',
        'x0GYq29UBMvJDgLVBG',
        'yun6Aey',
        'CMvXDwvZDezPBMLZAgvK',
        'DxrMoa',
        'q2nxu3K',
        'lMvUDG',
        'y29UC2vJDxrPDMvgywLSDxjLCW',
        'BMv3vg9Rzw4',
        'CNGG',
        'DxzcBeS',
        's25QthO',
        'Axnjua',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'l2fWAs9IyxnLAw5MBW',
        'AfbwwwO',
        'yMfZzty0lwPZ',
        'vhnRtue',
        'CMvHzfvjBNqZmKXf',
        'ALD3zgW',
        'C2v0vte2',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'ihvZzxmGDhvUBMvSihbYB3rVy29Sia',
        'CeTPA0W',
        'wMToDgu',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        's252wM8',
        'zMu4mdO',
        'AKfQtuW',
        'zwrNzsbJB25Uzwn0igzHAwXLza',
        'vgDvruy',
        'ywzlteW',
        'yun1B1G',
        'q3HbtwK',
        'B3bLBLn5BMm',
        'suTRtLC',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'CMf3sgvHzgvYCW',
        'tufyx1rbu0TFte9hx1njwKu',
        'DwjQzMe',
        'wwzdtfC',
        'sLbVugu',
        'y2XVC2LUzW',
        'pdGSiowUNUMzHEs9V+EuQca',
        'ANDoyMu',
        'BeHet3O',
        'vvzNDhi',
        'tufhsum',
        'EMP2tNK',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbRzxKGC2HHCMuGz3jVDxaG',
        'zMfTAwX5',
        'mhWZFdr8mxWY',
        'wxjqENm',
        'zxHLy1bHDgG',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'CgfKzgLUzW',
        'B1jrq3a',
        'BwvYz2u',
        'qKLmzvi',
        'wxnLuwi',
        'y3vYCMvUDeXLDMvS',
        'Aw5PDa',
        'zwnKC2fFChvIBgLJx2TLEq',
        'DgvTCa',
        'C2v0DgXL',
        'B3btu0S',
        'CMvZDa',
        'thnMCwG',
        'zKTgrLu',
        'tK5br3K',
        'Dw56AxbbCMnOAxzL',
        'x2nVBMzPCM1iyw5KC2HHA2u',
        'yMT2yK4',
        'BgfYz2vZDfjLy3y',
        's2X5ELy',
        'Cgf0AfjLC3bVBNnL',
        'reP6yvK',
        'A05buK8',
        'Cg9ZDa',
        'DwrW',
        'D2Xmwey',
        'zhrSEva',
        'BgvdsfG',
        'zNvSBa',
        'qxjjzKu',
        'v013t0q',
        't3jPz2LUoIbODhrWCZOVlW',
        'zMLlswK',
        'qNDmCfG',
        'l3bYB2mVy3b1Aw5MBW',
        'ANLHvuu',
        'BxvZBa',
        'A2v5x2LK',
        'qvDru1O',
        'CMTcAu0',
        'y2H1BMTF',
        'BezHyKm',
        'yxbWBgLJyxrPB24VEg1S',
        'zg5IvNO',
        'C0LNDgq',
        'BKXXDLO',
        'reDHBg8',
        'C2vHCMnO',
        'wvvJuvu',
        'yNvPBgq',
        'z2L4C2q',
        'uLPjy3u',
        'A2vLCefSAxzL',
        'AeXQv1C',
        'zw52',
        'y1PkuLe',
        'veLnrvnuqu1qx1DjtKrpvW',
        'EgDAtu0',
        'Bwf4u3rYzwfTrgf0yq',
        'zg5ZoG',
        'yKXywwS',
        'qxzzAxi',
        'C2vSzG',
        'qxLTD08',
        's0PjtNm',
        'Bwf4v2LUzg93',
        'yMLUl2z1C2vYBw91BNqZ',
        'zMLSzw5HBwu',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'seX0uNy',
        'y29UDgvUDa',
        'wgTRAvO',
        'Ag9Tzq',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'reTbzwi',
        'tuPuAuO',
        'vgj2D1m',
        'BgntyLe',
        'DxbKyxrL',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'vg9mzNy',
        'CLfMwLy',
        'Ew14EhG',
        'yNL0zxm',
        'y29UDgvUDc1Szw5NDgG',
        'y29SCW',
        'CLz4yMS',
        'vvDerKS',
        'x2nYyZmY',
        'DwDmC1K',
        'y3jLyxrLzf9HDa',
        'DeztBu4',
        'yMnmEfa',
        'ywnJzxb0u3rYzwfT',
        'yxbWu2vUzeTLExm',
        'vfrm',
        'AxnjBML0Awf0B3i',
        'tvbwsKS',
        'v0PgyMO',
        'wgHIzu4',
        'ANnHvLK',
        'AK91AeG',
        'rKLmrv9bvurjvf9mt0C',
        'Egn5rMi',
        't0vru3e',
        'mNW0Fdb8mxWZ',
        'rg5TuMC',
        'ENjOB0S',
        'EfvPy2e',
        'CxvPy0zHAwX1CMvZ',
        'A3n0B3jL',
        'vuDVAxq',
        'C2vYDMvYiezPBMLZAgvKihzLCMLMEv9KyxrHig1PC21HDgnO',
        'BxroDKy',
        'oKnVBNrLBNqTvhLWzq',
        'wfP4Dgi',
        'ruD1rhi',
        'B3z3uwW',
        'BffbthG',
        'x29UrxHPDenI',
        'v0LIzgy',
        'A1nMA3u',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'zKX3EuW',
        'mNWXFdb8nhWZ',
        'qMHms3G',
        'v3njvMK',
        'C3nVzfO',
        'BMv0rMfSBgjHy2S',
        'vhL3r28',
        'u3rHDhvZ',
        'BevOv2e',
        'C2vZC2LVBG',
        'C2vYDMvYsgvSBg9dB21WBgv0zq',
        'l2fWAs90yxnRl3n0yxr1CW',
        'z2fitMe',
        'BMvLza',
        'AfPmvfe',
        's1P3uNy',
        'q1vnBK8',
        'sMTNDKS',
        'CNr0DMfY',
        'BunADhm',
        'x3f1zxvLt25Lt2zMrNjHBwu',
        'BLDLuhq',
        'CMvMCMvZAa',
        'suTvqwi',
        'C2vYDMvYtMfTzq',
        'Eeflr1i',
        'ENbgv2u',
        'rwPIwNu',
        'Dw5UvMW',
        'AfbhsuS',
        'zM9YrwfJAa',
        'l2fWAs9MAwXLl3PPCa',
        'zg93BMXVywrgAwXL',
        'EKrlqvG',
        'Cg9W',
        'icHRzxKG5BEY6k6+572UoIa',
        '6k+35Rgc6lAf5PE2',
        'tfHssMW',
        '8j+uHcbBvgvTCeTLEv0G6k+35Rgcihr0BcdLJ5JMM7qSioAxP+s4ToAxTUwVHUMsPEApKowjJEs9Now6NZOGA2v5x2LKpq',
        'BgrnzeG',
        'BffIyKC',
        'BM9Uy2u',
        'u3bJA1a',
        'igfSCg49',
        'B25LDgfZA3m',
        'DgLTAw5Nu2fMzuvXDwfS',
        'wu5TufO',
        'BLHfA2m',
        'tevwruXt',
        'EePIEhm',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'C0DYwee',
        'Bg9JywXgywXSyMfJAW',
        'DLv3CvO',
        'sNjNA2q',
        'y2TVBw0',
        'B3bLBLn0CMvHBq',
        'AhHOzxm',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'w+E7IoERR+s8MUIVNsa',
        'BxrPBwu',
        'sLj4Bgq',
        'zgLYBMfTzq',
        'C2v0',
        'ue5br3q',
        'CMvHzeHLywrLCNm',
        'weXIs3q',
        'qM1rv0S',
        'zxf1ywXZ',
        'zwnKC2fqDwjRzxK',
        'C3rHDgu',
        'ywnJzxb0lwnOyxjZzxq',
        'yxjNB3r1BM5LBa',
        'BNzRz2m',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'vMLlzxO',
        'CMvHzfn5BMm',
        'zxHL',
        'CgfYDhm',
        'B2XKtgG',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPuMvTB3rL',
        'qwnUveO',
        'r0PsEu8',
        'ru5pvezpvu5e',
        'zwz0v2O',
        'CMvXDwvZDa',
        'z2v0uhvIBgLJsxbwnG',
        'ywnRrgvSyxK',
        'Exvis1i',
        'z2v0uhvIBgLJs2v5',
        'y29UC3vTzwruB3rHBa',
        'x2nYy1rHyMXL',
        'tKn2EK4',
        'l2fWAs9LEgvJ',
        'CMvHzgvY',
        'zMLUvw5Hy2TLza',
        'sevbra',
        'wvDKu1y',
        'wMDXsNy',
        'mZa0',
        'A21VzguX',
        'l2jPBI9IyxnO',
        'BgfZDevYCM9Y',
        'zxHWAxjL',
        'CLHAuK0',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'ze5ktei',
        'zgvY',
        'CLPutLe',
        'y29UDgvUDc1Syw5NDwfNzq',
        'CvLVs24',
        'tgzIAMi',
        'ExrTCM0',
        'y1Pitxu',
        'DeTOsei',
        'Aw5PDgLHDg9Y',
        'rLvbqvy',
        'rLryD2i',
        'ExPmz1i',
        'vgDywxm',
        'Dvreyuq',
        'tunLzNC',
        'C2TPChbLza',
        'DfDZr2O',
        'Dwfou1e',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'BgfZDfjLz2LZDgvYzwrbDa',
        'CgfYyw1LDgvYCW',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'Ahr0Chm6lY8',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'sNLHALm',
        'C2vUza',
        'DgjSv3a',
        'DNbqs2u',
        'CNvU',
        's05btuu',
        'rg93BMXVywqGzw5JCNLWDgLVBIbMywLSzwq',
        'rwjTyuW',
        'z2zzAwu',
        'ihvWzgf0zwq',
        'C2XVD1n0yxj0vgHYzxnOB2XK',
        'CMvHzejPz1vjBNq2neXf',
        'CNj4vMW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'rKDYzvC',
        'ihnZDgHYzxnOpq',
        'uu1XzNK',
        'runjrvmGChvIBgLJigTLEsbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbLBMnYExb0ihjLC3bVBNnL',
        'CMvJB25Uzwn0Aw5N',
        'DhjHBNnWB3j0q2XVC2u',
        'v3vNzKu',
        'Ehbsu3K',
        'vuDUq00',
        'Chr5iowUNUEoSos4JEwpR+EuQa',
        'CMvZDwX0',
        'y3jSuvK',
        'yw9Yy3C',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'C3rYzwfTia',
        'zMvlChC',
        'CgHjCNm',
        'wwzJzeW',
        'm3WWFdv8nhWXFdi',
        'Bg5wC3e',
        'tufss1nFuLvox1jpt1q',
        'tNfTvfK',
        'C1bzs1C',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'CLHvz3m',
        'q0Xfv0u',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'qIbZy2LKpq',
        'CxvPyYbKAxnJyxjKzwqG',
        'AgfUzhnOywTLu2vJCMv0',
        'C3vIyxjYyxK',
        'ywnJzxnZx2rLBMLLza',
        'z2v0uMvWB3j0',
        'wNPjEwi',
        'CNH0qMi',
        '6k6/6zEUia',
        'Ec1HzxmTzw5JCNLWDgvK',
        'rKjWAgq',
        'rvHfq19tsevmtf9nt0rf',
        'DhDZD3a',
        'DMLH',
        'EMj2Dvm',
        'C3rKzxjY',
        'uMzNs04',
        'CxvPyYbOyw5KC2HHA2uGy29TCgXLDguGywXWBJ0',
        '5y+V5OMl5yQO5OMN6kgmoIbUCg0GAw5ZDgfSBcbaCxDXBY9UB2rLlxb0Es1SAw51Ec0',
        'yxjuBvC',
        'shrLugK',
        'Ahr0Ca',
        'CMv0CMfUC21PDhrLza',
        'yNL0veO',
        're5tx01preu',
        'zgvJB2rL',
        'C2L5vNa',
        'shz1tKy',
        'D2vSy29Tzq',
        'Dhj1zq',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'yxbWBhK',
        'DhvUBMvSihjLlxjLz2LZDgvYigzHAwXLza',
        'A3f5Eve',
        'wMHxqLm',
        'zLbYyKK',
        'v1jjEwm',
        'u1zXzw0',
        'qKf4zwq',
        'CMfUzg9T',
        'uwDHreG',
        'CxvLDwu',
        'AwTVDMS',
        'C2HHmJu2',
        'yvz6rxO',
        'tujwzK4',
        's01prevFuvvjqW',
        'nda5otDit2XQwue',
        'B05IrwS',
        'ic0TBM8TC2f2zsaOy3DKpq',
        'y3jLyxrLq2LWAgvYAxy',
        'uKDIANC',
        'yxnZAwDU',
        'BwfPBG',
        'DxnLCKrHDge',
        'qu91Deu',
        'tNfNBMe',
        'zM9UDc93B2zMmG',
        'tev0y0O',
        'Cuz6Cha',
        'rK9mte9xx1nztuXjtKTt',
        'B25eB21HAw5dAgfUz2u',
        'CMvKDwnL',
        'r2nIDK4',
        'vwvbtve',
        'AgfZAa',
        'r2HXyxu',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'yu96yLm',
        'D2LUzg93v2fPDgvYCW',
        'x2nOzwnRtg9ZCW',
        'yvPWwha',
        'Dg90ywXFy2H1BMTZ',
        'yxz4AMq',
        'we1iuvy',
        'D3jPDgvvsw50qKu',
        'sM1PyuS',
        'DgXZt2zMC2v0CW',
        'D3rQDhO',
        'rxz4r0y',
        'BxHyu3K',
        'u2zNwKq',
        'AMzIru8',
        'y3jLyxrLsw50zxjMywnL',
        'C2L6zq',
        'EfnKrwO',
        'l2fWAs90zw1WA2v5',
        'x2DLDenVBM5Ly3rPB25Z',
        'Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq',
        'yNvUlxb0Eq',
        'y29UBMvJDgLVBG',
        'z2v0ywrKCMLUzM8',
        'Dg9bC2nPAq',
        'BxjlB1y',
        'yMPiv0m',
        'rvrSBfm',
        'twLYrgu',
        'C2nOzwr1Bgu',
        'sLbHu2K',
        'EKvdwxa',
        'DgfRzq',
        'AxnbCNjHEq',
        'C2vYDMvYsgfUzhnOywTLu2vJCMv0',
        'Bw9Kzq',
        'vwnuAey',
        'sg5VB0K',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'BvbxCfO',
        'ihn0CMvHBt0',
        'Exbcy0m',
        'ug9KBwfU',
        'zg9TywLUlNr4Da',
        'D3HkCwm',
        'rgvXquG',
        'ChjPDMf0zuTLEq',
        'Chv0',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'zMH4yNm',
        'DvnVwfy',
        'zfznAuG',
        'D1vIuwK',
        'B1vWtMK',
        'q1Ljuhq',
        'r0fou1C',
        'ugrbC2S',
        'vvLbrLG',
        'zNjVBuj5DgvZ',
        'uKn5BMO',
        'EhrhsNy',
        'DMfSDwu',
        'BMfTzq',
        'EMXPyG',
        'x2vTAxreyxrH',
        'C2XrzMq',
        'u0HuBvq',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'ANDnr2m',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'l2fWAs9HCMDV',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'zxHPC3rZu3LUyW',
        'zLH2qLy',
        'ntbTyG',
        'uhLruwG',
        'rLjHDuO',
        'sevryuu',
        'qMfMqKy',
        'Ee91s0G',
        'AuLOA2O',
        'y2f0y2G',
        'tu9rtKC',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'qvrIufC',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'CMvTywLUAw5N',
        'B25dBg9Zzq',
        'vNLeu3m',
        'C2v0qufe',
        'x25LEhq',
        'BwfW',
        'zNjbBvO',
        'CgTJCZG',
        'DMfYAw50',
        'wxrAuuG',
        'Dfjmt24',
        'BgvvDwK',
        'z2v0qMfZzuLUzM9mB2nHBa',
        'EKXVwgG',
        'C1LiDxK',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'z1feEKS',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'Dg1WzgLY',
        'wuPsCgq',
        't2Lhz2i',
        'qY5vveyToa',
        'mNWXFdb8n3WZFdv8nNW0',
        'zgj1CW',
        'ywXPDMu',
        'Dw5JyxvNAhrfEgnLChrPB24',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'q3bUuNe',
        'x2nYzwrPDezYyw1LCW',
        'Aw5PDgLHBfnLBNq',
        'sejXrhy',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'ruToAMC',
        'vgHerLK',
        'AvHlDve',
        'Ag9Nrfy',
        'r3rUr0C',
        'CMv0AxjLq29UBMvJDgLVBKLK',
        'vvH0yvO',
        'sg9lDKq',
        'C3zxCgG',
        'DKTLvfe',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'A3jnr1O',
        'r0DYvvq',
        'y0LZyNi',
        'DK9dvgi',
        'r0H4vxG',
        'Dw5YzwfKywjSzsbLzgDLignLCNrPzMLJyxrLoIa',
        'mtaW',
        'AhrJrfm',
        'x2DLDerPC2TjBMzV',
        'wuzwre0',
        'D2fYBKzHBgXIywnR',
        'Bw92zuzPBgvZ',
        'ENrevxa',
        'uxr1u1y',
        'yw5iu1K',
        'x2rYB3btzw5KuMvHzhK',
        'zfj1zLa',
        'tMDorxe',
        'ChrV',
        'swHVyKy',
        'keToqu1fpq',
        'zKfvzxy',
        'D3bVr1G',
        'EeHLuMG',
        'Aw1Hz2uVEc1Py29U',
        'ywfztu4',
        'vhzRrhm',
        'tufyx1vqte9brf9tsvPf',
        'rLniCu0',
        'ALv5tei',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'rejPsw8',
        'C1fHyKS',
        'A0XXs1q',
        'reDbELq',
        'wNzrvM8',
        'ic0Tls0GzxHPDgnVzgu9',
        'sNPvA3q',
        'BhDItvG',
        'Bwv0Ag9K',
        'txv2q1C',
        'Bgf0Aw4X',
        'CMvHzgXPBMTtEw5J',
        'z1LOt2y',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti',
        'DgvYBwLUywW',
        'ELD2Cfa',
        'ioIVT+AXGUw8GUw4UdOG',
        'wMLWig5VDcbMB3vUzdOG',
        'ELHSD3y',
        'r1DJAwG',
        'y29VA2LL',
        'C3rKB3v0',
        'wMvXuKG',
        'BuLxBKu',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'zgvZDf9WyxrO',
        'oNn0yxr1CW',
        'uhbSu3y',
        'y3vsvfm',
        'y2yTChjVEhKT',
        'uwLICKC',
        'serKuxq',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        't0HcyNK',
        'ug5UsgK',
        'uf9trvjwrvjFvvvjrd0',
        'BwvZC2fNzxm',
        'Dwv3yLC',
        'ChrVq291BNq',
        'BNjcuge',
        'zhHkDwG',
        'qhf3Cw8VBM9Kzs1WDhK',
        'y29UDgvUDc1SB2nHDgLVBG',
        'BgfZDfjLy2vPDMvK',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'yNzmuMS',
        'C2v0t25LDgLTzvrHC2TZ',
        'sNnfz1C',
        'tLLxq0K',
        'Cg93',
        'zgLZDhjV',
        'v1vYyNi',
        'zxHWCG',
        'svDoAfu',
        'thDwBuG',
        'y3j5ChrV',
        'zMfPBfvUDgLS',
        'ywLnDve',
        'Axnoyu4',
        'ENHrEhu',
        'sfDnu2G',
        'AwLZqNe',
        'AxndAgfYywn0zxjezxzPy2u',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'v21AruS',
        'y2H1BMTLza',
        'zMXSvuS',
        'rNLbALG',
        'te92ANO',
        'runjrvnFufvcteLdx0Tfwv9qru0'
    ];
    a0a = function () {
        return lK;
    };
    return a0a();
}
class a0c9 {
    constructor(a) {
        const jO = a0cm, b = { 'LqwLm': jO(0x9fa) }, c = b[jO(0x1e3)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[jO(0x6fc)] = a;
                continue;
            case '1':
                this[jO(0xa3b)] = a0aT;
                continue;
            case '2':
                this[jO(0xbd6)] = null;
                continue;
            case '3':
                this[jO(0x3eb)] = a0b1;
                continue;
            case '4':
                this[jO(0x2b3)] = new Map();
                continue;
            }
            break;
        }
    }
    async ['create'](a, b, c = ![]) {
        const jP = a0cm, d = {
                'JPaSi': function (m, n) {
                    return m + n;
                },
                'WRIyc': function (m, n) {
                    return m + n;
                },
                'nyNgS': jP(0x77e),
                'jWwdl': 'failed',
                'pExnm': function (m) {
                    return m();
                },
                'XLtzg': function (m, n) {
                    return m > n;
                },
                'EeOzZ': 'https://api.trycloudflare.com',
                'MqEzh': jP(0xa5e),
                'hqkVV': 'https://',
                'vMyXe': function (m, n) {
                    return m + n;
                },
                'TdQwh': jP(0x559),
                'Gxjow': function (m, n) {
                    return m + n;
                },
                'SXIJq': function (m, n) {
                    return m + n;
                },
                'oIwYE': jP(0x34f),
                'pgLjZ': '\x20->\x20127.0.0.1:'
            }, f = this[jP(0x2b3)]['get'](a) || [];
        if (d[jP(0x694)](f['length'], 0x0) && !b) {
            const m = new Error(jP(0x747)['concat'](a, jP(0x4c7)));
            m[jP(0x2e9)] = 0x199, m[jP(0x171)] = a;
            throw m;
        }
        let g, h, i, j;
        try {
            [g, h, i, j] = await (this[jP(0x845)] || a0aQ)(d['EeOzZ']);
        } catch (n) {
            const o = new Error(d[jP(0xbbd)](d[jP(0x7fa)], n[jP(0x8d0)]));
            o[jP(0x2e9)] = 0x1f4, o[jP(0x171)] = a;
            throw o;
        }
        const k = g[jP(0x848)](d[jP(0x484)]) ? g : d[jP(0x770)](d[jP(0x484)], g), l = {
                'tunnelDomain': k,
                'port': a,
                'createdAt': new Date()[jP(0x455)]()['replace'](/\.\d{3}Z$/, 'Z'),
                'transport': c ? d[jP(0x508)] : 'h2',
                'quicFailures': 0x0,
                'consecutiveFailures': 0x0,
                'status': 'alive',
                'lastError': null,
                'lastErrorAt': null,
                'lastRegisteredAt': new Date()[jP(0x455)]()[jP(0x978)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'conn': null,
                'runPromise': null
            };
        return l[jP(0x86d)] = this[jP(0x6dd)](l, h, i, j)[jP(0xc2f)](p => {
            const jQ = jP;
            this[jQ(0x6fc)][jQ(0x910)](d[jQ(0xbfb)](d[jQ(0xbbd)](d['nyNgS'], k) + '\x20ended:\x20', p['message'])), !l[jQ(0x9eb)] && (l[jQ(0x2e9)] = d[jQ(0xa4d)], l[jQ(0xb52)] = a0c5(p && p[jQ(0x8d0)] ? p[jQ(0x8d0)] : p), l['lastErrorAt'] = d['pExnm'](a0c6));
        }), f['push'](l), this[jP(0x2b3)][jP(0xb2b)](a, f), this[jP(0x6fc)][jP(0x2da)](d[jP(0x257)](d[jP(0x257)](d[jP(0x257)](d[jP(0x197)](d[jP(0xf9)], k) + d[jP(0x448)] + a, '\x20('), l[jP(0xfb)]), ')')), l;
    }
    ['list']() {
        const jR = a0cm, a = { 'NfnLF': jR(0xc4c) }, b = [], c = [...this[jR(0x2b3)][jR(0x465)]()][jR(0x439)]((d, f) => d - f);
        for (const d of c) {
            for (const f of this[jR(0x2b3)][jR(0x340)](d)) {
                b[jR(0xd32)]({
                    'tunnel_domain': f['tunnelDomain'],
                    'port': f[jR(0x171)],
                    'created_at': f[jR(0x8da)],
                    'transport': f[jR(0xfb)],
                    'status': f[jR(0x2e9)] || a['NfnLF'],
                    'last_error': f['lastError'] ?? null,
                    'last_error_at': f[jR(0x628)] ?? null,
                    'consecutive_failures': f[jR(0xa41)] || 0x0,
                    'last_registered_at': f[jR(0xb6b)] ?? null
                });
            }
        }
        return b;
    }
    async [a0cm(0x47f)](a, b) {
        const jS = a0cm, c = {
                'KoGqX': function (i, j) {
                    return i === j;
                },
                'xpRSy': function (i, j) {
                    return i === j;
                },
                'FDOKG': '3|2|0|1|4',
                'QMqfy': function (i, j) {
                    return i !== j;
                },
                'PdAsk': function (i, j) {
                    return i !== j;
                },
                'ntbby': 'tunnel\x20removed',
                'yHWcl': jS(0xc4c),
                'tDDcC': function (i, j) {
                    return i > j;
                },
                'TyUya': function (i, j) {
                    return i + j;
                },
                'MOQNG': jS(0xc9e)
            }, d = this[jS(0x2b3)][jS(0x340)](a) || [];
        if (c['KoGqX'](d[jS(0x957)], 0x0))
            return {
                'status': 0x194,
                'message': jS(0xaeb)['concat'](a)
            };
        let f;
        if (c['KoGqX'](b, undefined) || c[jS(0x701)](b, null) || b === '') {
            if (d['length'] > 0x1)
                return {
                    'status': 0x199,
                    'message': jS(0x119)[jS(0x8d4)](a, jS(0x9b7))
                };
            f = d;
        } else {
            f = d['filter'](i => i['tunnelDomain'] === b);
            if (c[jS(0xb85)](f[jS(0x957)], 0x0))
                return {
                    'status': 0x194,
                    'message': 'no\x20tunnel\x20found\x20on\x20port\x20'[jS(0x8d4)](a, jS(0x4f8))[jS(0x8d4)](b)
                };
        }
        const g = [];
        for (const i of f) {
            const j = c[jS(0x77b)][jS(0x31d)]('|');
            let k = 0x0;
            while (!![]) {
                switch (j[k++]) {
                case '0':
                    if (c[jS(0xb80)](i[jS(0xa38)], null))
                        try {
                            i['sock'][jS(0x958)]();
                        } catch (l) {
                        }
                    continue;
                case '1':
                    await i[jS(0x86d)]['catch'](() => {
                    });
                    continue;
                case '2':
                    if (c[jS(0xc16)](i[jS(0xa02)], null))
                        try {
                            i[jS(0xa02)][jS(0x9a0)](c['ntbby']);
                        } catch (m) {
                        }
                    continue;
                case '3':
                    i[jS(0x9eb)] = !![];
                    continue;
                case '4':
                    g[jS(0xd32)]({
                        'tunnel_domain': i[jS(0x29c)],
                        'port': i[jS(0x171)],
                        'created_at': i[jS(0x8da)],
                        'transport': i['transport'],
                        'status': i['status'] || c[jS(0x981)],
                        'last_error': i[jS(0xb52)] ?? null,
                        'last_error_at': i['lastErrorAt'] ?? null,
                        'consecutive_failures': i[jS(0xa41)] || 0x0,
                        'last_registered_at': i[jS(0xb6b)] ?? null
                    });
                    continue;
                }
                break;
            }
        }
        const h = d[jS(0x781)](n => !n[jS(0x9eb)]);
        c[jS(0x3cb)](h[jS(0x957)], 0x0) ? this[jS(0x2b3)][jS(0xb2b)](a, h) : this[jS(0x2b3)][jS(0xa16)](a);
        for (const n of g) {
            this['log'][jS(0x2da)](c[jS(0x8c8)](c[jS(0xc30)], n[jS(0x939)]));
        }
        return {
            'status': 'ok',
            'deleted': g['length'],
            'tunnels': g
        };
    }
    async [a0cm(0x6dd)](a, b, c, d) {
        const jT = a0cm, f = {
                'mtNvF': function (j, k) {
                    return j < k;
                },
                'EEZgh': function (j, k) {
                    return j + k;
                },
                'dNJLB': jT(0x255),
                'rvlwg': function (j, k) {
                    return j !== k;
                },
                'JsQof': function (j, k) {
                    return j(k);
                },
                'Yhfyw': jT(0xbb6),
                'weqXV': function (j, k) {
                    return j > k;
                },
                'UDvUd': 'tunnel\x20removed',
                'fJDIM': function (j, k) {
                    return j % k;
                },
                'gBCzl': function (j, k) {
                    return j % k;
                },
                'vhrjy': function (j, k) {
                    return j + k;
                },
                'afKLL': function (j, k) {
                    return j + k;
                },
                'ybwsp': jT(0x51b),
                'HULXC': function (j, k) {
                    return j !== k;
                },
                'CMOaJ': jT(0x12e),
                'kLNCX': jT(0xb82),
                'yCGEA': function (j, k) {
                    return j(k);
                },
                'xGVgU': function (j) {
                    return j();
                },
                'kVKIU': function (j, k) {
                    return j !== k;
                },
                'UYVow': jT(0x1f9),
                'FQUHz': function (j, k) {
                    return j === k;
                },
                'dyUTH': jT(0x559),
                'FrGbe': function (j, k) {
                    return j >= k;
                },
                'tKYFh': '5|2|0|3|4|1',
                'TmSDC': jT(0xc4c),
                'TaMrs': function (j) {
                    return j();
                },
                'hYhrq': function (j, k) {
                    return j == k;
                },
                'HUdjX': function (j, k) {
                    return j * k;
                },
                'QCOeG': function (j, k) {
                    return j(k);
                }
            }, g = f[jT(0x662)](f[jT(0xb57)], a[jT(0x171)]), h = async j => {
                const jU = jT;
                for (let k = 0x0; f[jU(0xae2)](k, j) && !a[jU(0x9eb)]; k += 0x1f4) {
                    await new Promise(l => setTimeout(l, Math['min'](0x1f4, j - k)));
                }
            };
        a[jT(0xa41)] = 0x0;
        let i = 0x0;
        while (!a[jT(0x9eb)]) {
            let j = null, k = null, l = null;
            try {
                const n = f[jT(0x72e)](f['JsQof'](String, process.env.KISAMA_EDGE_INSECURE || '')['toLowerCase'](), f[jT(0x5e0)]);
                if (a[jT(0xfb)] === jT(0x559)) {
                    l = await a0bX(this['log'], f['weqXV'](a0c7, 0x0) ? a0c7 : 0x7530, n);
                    if (a[jT(0x9eb)]) {
                        try {
                            l['close'](f[jT(0x8f4)]);
                        } catch (o) {
                        }
                        break;
                    }
                    a[jT(0xa02)] = l, i = f['fJDIM'](f[jT(0x662)](i, 0x1), 0x4), await new a0bW(l, g, b, c, d, i, this['log'])['run']();
                } else {
                    j = await this[jT(0x3eb)](n, this[jT(0x6fc)]);
                    if (a['stopped']) {
                        try {
                            j[jT(0x958)]();
                        } catch (p) {
                        }
                        break;
                    }
                    a[jT(0xa38)] = j, i = f[jT(0x289)](f[jT(0x668)](i, 0x1), 0x4), k = new this[(jT(0xa3b))](j, g, b, c, d, i, this[jT(0x6fc)], a[jT(0x29c)], ![], { 'printed': !![] }), await k[jT(0xb74)]();
                }
            } catch (q) {
                if (!a[jT(0x9eb)]) {
                    this[jT(0x6fc)][jT(0x910)](f[jT(0x662)](f[jT(0xa59)](f[jT(0x588)] + a[jT(0x29c)], jT(0x240)), q[jT(0x8d0)]));
                    if (f['HULXC'](a['status'], f['CMOaJ']))
                        a[jT(0x2e9)] = f['kLNCX'];
                    a[jT(0xb52)] = f[jT(0x7dd)](a0c5, q && q['message'] ? q['message'] : q), a[jT(0x628)] = f[jT(0x9fe)](a0c6);
                }
            } finally {
                if (f[jT(0x470)](j, null))
                    try {
                        j[jT(0x958)]();
                    } catch (r) {
                    }
                if (f[jT(0x72e)](l, null))
                    try {
                        l[jT(0x9a0)](jT(0xd71));
                    } catch (s) {
                    }
                a[jT(0xa38)] = null, a['conn'] = null;
            }
            if (a[jT(0x9eb)])
                break;
            const m = f['rvlwg'](k, null) && k[jT(0x215)] || l !== null && l[jT(0x215)];
            if (m) {
                const t = f[jT(0x5f2)][jT(0x31d)]('|');
                let u = 0x0;
                while (!![]) {
                    switch (t[u++]) {
                    case '0':
                        a[jT(0x628)] = null;
                        continue;
                    case '1':
                        a[jT(0xb52)] = null;
                        continue;
                    case '2':
                        a[jT(0xade)] = 0x0;
                        continue;
                    case '3':
                        a[jT(0xa41)] = 0x0;
                        continue;
                    case '4':
                        a[jT(0x2e9)] = 'alive';
                        continue;
                    case '5':
                        a['lastRegisteredAt'] = f['xGVgU'](a0c6);
                        continue;
                    }
                    break;
                }
            } else {
                a[jT(0xa41)] += 0x1;
                if (f[jT(0x470)](a[jT(0x2e9)], f['CMOaJ']))
                    a['status'] = jT(0xb82);
                f[jT(0xf7)](a[jT(0xfb)], f[jT(0x626)]) && (a[jT(0xade)] += 0x1, f[jT(0x212)](a[jT(0xade)], a0c0) && (a[jT(0xfb)] = 'h2', this[jT(0x6fc)][jT(0x910)](jT(0x51b)[jT(0x8d4)](a[jT(0x29c)], ':\x20QUIC\x20连续\x20')['concat'](a[jT(0xade)], '\x20轮建连失败,\x20已自动回退\x20h2\x20传输\x20(重启进程恢复\x20QUIC)')), a['quicFailures'] = 0x0));
                if (f[jT(0x212)](a[jT(0xa41)], a0c0)) {
                    if (await this[jT(0x1c7)](a, (v, w, x) => {
                            b = v, c = w, d = x;
                        })) {
                        const v = f['tKYFh']['split']('|');
                        let w = 0x0;
                        while (!![]) {
                            switch (v[w++]) {
                            case '0':
                                a[jT(0x2e9)] = f['TmSDC'];
                                continue;
                            case '1':
                                a[jT(0xb6b)] = f[jT(0x36f)](a0c6);
                                continue;
                            case '2':
                                a[jT(0xade)] = 0x0;
                                continue;
                            case '3':
                                a[jT(0xb52)] = null;
                                continue;
                            case '4':
                                a[jT(0x628)] = null;
                                continue;
                            case '5':
                                a[jT(0xa41)] = 0x0;
                                continue;
                            }
                            break;
                        }
                    } else
                        f[jT(0x470)](a[jT(0x2e9)], jT(0x12e)) && (a['status'] = f['CMOaJ'], f[jT(0x3e2)](a[jT(0xb52)], null) && (a['lastError'] = jT(0xbb9), a[jT(0x628)] = f[jT(0x36f)](a0c6))), await f['yCGEA'](h, a0c4(a['consecutiveFailures']) * 0x3e8);
                }
            }
            !a[jT(0x9eb)] && await h(f[jT(0xcf9)](f['weqXV'](a['consecutiveFailures'], 0x0) ? f[jT(0x5bf)](a0c4, a[jT(0xa41)]) : a0bY, 0x3e8));
        }
    }
    [a0cm(0x1c7)](a, b) {
        const jV = a0cm, c = {
                'yQyNR': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'SNKUE': function (f, g) {
                    return f + g;
                },
                'vKeTQ': 'https://',
                'AzdKJ': jV(0x365),
                'YNmPZ': function (f, g) {
                    return f === g;
                },
                'hqmIC': jV(0xa2a),
                'zMENH': jV(0x1db),
                'ZHJMj': 'https://api.trycloudflare.com'
            }, d = this[jV(0x845)] || a0aQ;
        return d(c[jV(0x300)])['then'](([f, g, h, i]) => {
            const jW = jV, j = a[jW(0x29c)];
            c[jW(0xa33)](b, g, h, i), a[jW(0x29c)] = f[jW(0x848)](jW(0xb6e)) ? f : c['SNKUE'](c[jW(0xc5d)], f), this[jW(0x6fc)]['warning'](c[jW(0x8be)](c['SNKUE'](c[jW(0xd7a)] + j, '\x20->\x20'), a[jW(0x29c)]));
            if (c[jW(0xb1a)](typeof this[jW(0xbd6)], c[jW(0x4ef)]))
                try {
                    this[jW(0xbd6)](j, a[jW(0x29c)]);
                } catch (k) {
                }
            return !![];
        })[jV(0xc2f)](f => {
            const jX = jV;
            return this['log'][jX(0x910)](c[jX(0x734)] + f[jX(0x8d0)]), ![];
        });
    }
}
class a0ca {
    static [a0cm(0x5d5)] = ![];
    static ['_domain'] = null;
    static [a0cm(0x2ee)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static ['_SHZAL_KEY_HINT_SHOWN'] = ![];
    static [a0cm(0xce8)]() {
        const jY = a0cm, a = {
                'dsTzy': jY(0x5fa),
                'PyQQh': function (g, h) {
                    return g < h;
                },
                'EoQqk': 'KNAME',
                'FVZAY': function (g, h) {
                    return g === h;
                },
                'anHSY': function (g, h) {
                    return g + h;
                },
                'iwqWn': jY(0x7d2),
                'pUEdn': jY(0x1ad),
                'ereDS': jY(0x5e5)
            }, b = a0a1['KNAME'] || '', c = a0a1['KNAME_KEY'] || a0a1['KNAME'] || '', d = [];
        if (b['length'] < 0x3)
            d[jY(0xd32)](jY(0x355)[jY(0x8d4)](b[jY(0x957)], jY(0x4d2)));
        if (!this[jY(0x2ee)]['test'](b))
            d[jY(0xd32)](a['dsTzy']);
        if (a[jY(0xc29)](c[jY(0x957)], 0x8))
            d[jY(0xd32)]('密钥过短\x20('[jY(0x8d4)](c[jY(0x957)], jY(0xa65))[jY(0x8d4)](a0a1[jY(0x36c)] ? jY(0x36c) : a['EoQqk'], ')'));
        const f = a[jY(0xd29)](d[jY(0x957)], 0x0);
        return !f && !this[jY(0x102)] && (this[jY(0x102)] = !![], a0P[jY(0x2da)](a[jY(0xc6d)](jY(0x254)[jY(0x8d4)](d[jY(0x6e6)](';\x20'), '\x20'), jY(0xc73)[jY(0x8d4)](b || a[jY(0x2a4)], jY(0x2fb))[jY(0x8d4)](a0a1[jY(0x36c)] ? jY(0x825)[jY(0x8d4)](a0a1['KNAME_KEY']['length'], ')') : a[jY(0x273)], ')'))), a0P[jY(0x2da)](a[jY(0x4bc)])), f;
    }
    static [a0cm(0x5d4)]() {
        const jZ = a0cm, a = {
                'EINgF': function (b, c) {
                    return b === c;
                },
                'poZzM': function (b, c) {
                    return b(c);
                },
                'yHSrW': jZ(0xbb6)
            };
        return a0a1[jZ(0x172)] || a['EINgF'](a[jZ(0x2ad)](String, process.env.SHZAL_DEBUG || '')[jZ(0x2ca)](), a[jZ(0x70c)]);
    }
    static [a0cm(0x9c5)](a) {
        const k0 = a0cm, b = {
                'GGrUT': function (f, g) {
                    return f + g;
                },
                'fllUK': k0(0x893),
                'WIbdf': function (f, g) {
                    return f + g;
                },
                'chvfx': 'curl/8.5.0',
                'FCgCq': k0(0x120),
                'YrYqV': k0(0x9d9),
                'lFabC': function (f, g) {
                    return f(g);
                },
                'OHBby': k0(0x8e0),
                'wtHyF': k0(0x2db),
                'erBRe': function (f, g) {
                    return f(g);
                },
                'HEQaE': '名字被占用,\x20改用\x20PUT\x20覆盖:\x20https://shz.al/~',
                'BAxed': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'zxQxu': 'PUT',
                'NYWCI': function (f, g) {
                    return f === g;
                },
                'HtePi': k0(0x42f),
                'gmBmT': function (f, g) {
                    return f + g;
                },
                'dBUqw': k0(0x899),
                'VtGla': function (f, g) {
                    return f + g;
                },
                'Sdccq': 'hex',
                'yfwjH': function (f, g) {
                    return f + g;
                },
                'jsUgQ': function (f, g) {
                    return f + g;
                },
                'lEhWa': k0(0xcd8),
                'fwtWJ': k0(0xb0f),
                'ZvQVo': function (f, g) {
                    return f > g;
                },
                'loLVr': k0(0x46c),
                'wtXZz': function (f, g) {
                    return f + g;
                },
                'IiDQj': k0(0x3d9)
            }, c = this[k0(0x5d4)](), d = f => {
                const k1 = k0;
                if (c)
                    a0P['debug'](b[k1(0xc60)](b[k1(0xcc0)], f));
            };
        return new Promise(f => {
            const k2 = k0, g = {
                    'kTjDg': b[k2(0x341)],
                    'VfsYr': function (n, o) {
                        return b['lFabC'](n, o);
                    },
                    'qdORJ': function (n, o) {
                        const k3 = k2;
                        return b[k3(0xc60)](n, o);
                    },
                    'thZRm': b[k2(0xc9f)],
                    'EsJAy': b['wtHyF'],
                    'cUksT': function (n, o) {
                        return n === o;
                    },
                    'TOcSg': function (n, o) {
                        const k4 = k2;
                        return b[k4(0xc60)](n, o);
                    },
                    'skTbd': 'POST\x20https://shz.al/\x20状态:\x20',
                    'tnCGJ': function (n, o) {
                        return b['erBRe'](n, o);
                    },
                    'DaGHt': b[k2(0xc2b)],
                    'HBqDv': function (n, o, p, q, r) {
                        const k5 = k2;
                        return b[k5(0xbbf)](n, o, p, q, r);
                    },
                    'qzXyp': b[k2(0xcb9)],
                    'HhKAD': function (n, o) {
                        const k6 = k2;
                        return b[k6(0xcae)](n, o);
                    },
                    'BkCUG': function (n, o) {
                        const k7 = k2;
                        return b[k7(0x1c1)](n, o);
                    },
                    'UdVOY': b[k2(0xbad)],
                    'qVCFX': function (n, o) {
                        return b['lFabC'](n, o);
                    },
                    'NkwiV': function (n, o) {
                        const k8 = k2;
                        return b[k8(0xcff)](n, o);
                    },
                    'MuvCW': function (n, o) {
                        return n + o;
                    },
                    'QSBft': b['dBUqw']
                }, h = a0a1[k2(0xb75)], i = a0a1[k2(0x36c)] || a0a1[k2(0xb75)], j = b[k2(0x108)](k2(0x935), a0k['randomBytes'](0xc)[k2(0x4a4)](b[k2(0xa30)])), k = [
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
                    const k9 = k2, o = n[k9(0xc39)](([p, q]) => Buffer[k9(0x2dc)]('--'[k9(0x8d4)](j, k9(0x5c8))[k9(0x8d4)](p, '\x22\x0d\x0a\x0d\x0a')[k9(0x8d4)](q, '\x0d\x0a')));
                    return o[k9(0xd32)](Buffer[k9(0x2dc)]('--'[k9(0x8d4)](j, '--\x0d\x0a'))), Buffer[k9(0x8d4)](o);
                }, m = (n, o, p, q) => {
                    const kd = k2, r = {
                            'jiADh': function (v, w) {
                                return v(w);
                            },
                            'phILz': function (v, w) {
                                const ka = a0b;
                                return b[ka(0xc60)](v, w);
                            },
                            'SedbI': function (v, w) {
                                const kb = a0b;
                                return b[kb(0xae9)](v, w);
                            },
                            'QbJoQ': function (v, w) {
                                const kc = a0b;
                                return b[kc(0xc60)](v, w);
                            },
                            'ChorV': kd(0xc8e),
                            'xhwYL': function (v, w) {
                                return v(w);
                            }
                        }, s = new URL(n), t = a0h[kd(0xb41)]({
                            'hostname': s[kd(0x4d7)],
                            'port': s['port'] || 0x1bb,
                            'path': b[kd(0xae9)](s[kd(0x492)], s[kd(0xaa0)]),
                            'method': p,
                            'headers': {
                                'Content-Type': kd(0x28a)[kd(0x8d4)](j),
                                'Content-Length': o ? o['length'] : 0x0,
                                'User-Agent': b[kd(0x20b)]
                            }
                        }, v => {
                            const ke = kd;
                            v['resume'](), v['on'](g['kTjDg'], () => q(v[ke(0x500)]));
                        });
                    t['on'](b[kd(0xd42)], v => {
                        const kf = kd;
                        r['jiADh'](d, r[kf(0x5f0)](r[kf(0x53f)](r[kf(0x191)](p, '\x20'), n) + r[kf(0xa29)], v['message'])), r[kf(0x262)](q, 0x0);
                    }), t[kd(0x7cd)](0x7530, () => t[kd(0x958)](new Error(kd(0xb8b))));
                    if (o)
                        t[kd(0x21d)](o);
                    t[kd(0x9d9)]();
                };
            b[k2(0xa9a)](d, b['GGrUT'](b[k2(0x69b)](b['jsUgQ'](b[k2(0xaf4)], h), b[k2(0x3e5)]), b[k2(0xc82)](i['length'], 0x0)) + ')');
            try {
                m(b[k2(0x454)], b[k2(0xa9a)](l, k), k2(0x6cc), n => {
                    const ki = k2, o = {
                            'cbqEb': function (p, q) {
                                const kg = a0b;
                                return g[kg(0x912)](p, q);
                            },
                            'czekJ': function (p, q) {
                                return g['qdORJ'](p, q);
                            },
                            'WgGdr': function (p, q) {
                                const kh = a0b;
                                return g[kh(0xd57)](p, q);
                            },
                            'wYDzL': g[ki(0x2a3)],
                            'ePeFf': function (p, q) {
                                return p === q;
                            },
                            'VjGUr': '\x20(成功)',
                            'WDhbg': g['EsJAy'],
                            'JFthK': function (p, q) {
                                const kj = ki;
                                return g[kj(0x17a)](p, q);
                            }
                        };
                    d(g['TOcSg'](g[ki(0x5cd)], n));
                    if (g[ki(0x17a)](n, 0x199)) {
                        g[ki(0xe6)](d, g[ki(0xd57)](g[ki(0xd57)](g['DaGHt'], h), ':*'));
                        const p = k[ki(0x781)](([q]) => q !== 'n');
                        g[ki(0xc52)](m, ki(0x4b9)['concat'](h, ':')['concat'](i), l(p), g[ki(0x791)], q => {
                            const kk = ki;
                            o['cbqEb'](d, o[kk(0x21a)](o[kk(0x26c)](o[kk(0x99e)], q), o[kk(0x53b)](q, 0xc8) ? o[kk(0x460)] : o['WDhbg'])), o[kk(0x664)](f, o['JFthK'](q, 0xc8));
                        });
                    } else
                        g['HhKAD'](n, 0xc8) ? (g[ki(0x499)](d, g[ki(0x84d)]), g[ki(0xe6)](f, !![])) : (g[ki(0x634)](d, g[ki(0xd5b)](g[ki(0xc87)](g[ki(0x6f5)], n), ')')), g[ki(0x499)](f, ![]));
                });
            } catch (n) {
                b[k2(0x1c1)](d, b[k2(0x765)](b['IiDQj'], n[k2(0x8d0)])), f(![]);
            }
        })[k0(0x9e5)](f => {
            if (f)
                this['_domain'] = a;
            return f;
        })[k0(0xc2f)](() => ![]);
    }
    static async [a0cm(0x92e)](a) {
        const kl = a0cm;
        for (let b = 0x1; b <= 0x3; b++) {
            if (await this[kl(0x9c5)](a))
                return;
            b < 0x3 && await new Promise(c => setTimeout(c, 0x3e8 * 0x2 ** b));
        }
    }
    static ['homeDir']() {
        const km = a0cm, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l['existsSync'](b) && a0l[km(0x73c)](b)[km(0x2d4)]())
                return b;
        }
        try {
            return a0p[km(0xd81)]();
        } catch (c) {
            return process[km(0x82f)]();
        }
    }
    static ['resolveDomainFilePath']() {
        const kn = a0cm, a = {
                'XyQgG': kn(0xc09),
                'GgdYZ': '$HOME'
            };
        let b = (a0a1['KPATH'] || '')['trim']();
        if (!b)
            return a0o['join'](this[kn(0x5a0)](), a[kn(0x410)]);
        if (b[kn(0x848)](a[kn(0x21e)]))
            b = b['length'] > 0x5 ? a0o[kn(0x6e6)](this[kn(0x5a0)](), b[kn(0x519)](0x5)['replace'](/^[/\\]+/, '')) : this[kn(0x5a0)]();
        else
            b['startsWith']('~') && (b = a0o[kn(0x138)](b['replace'](/^~(?=[/\\]|$)/, this[kn(0x5a0)]())));
        return b;
    }
    static [a0cm(0x177)](a) {
        const ko = a0cm;
        this['_domain'] = a;
        const b = this[ko(0x9d2)]();
        try {
            a0l[ko(0xd85)](a0o[ko(0xb2a)](a0o['resolve'](b)), { 'recursive': !![] }), a0l[ko(0x5ca)](b, a), a0P[ko(0x2da)]('[KMODE]\x20📄\x20隧道域名已写入:\x20'[ko(0x8d4)](b));
        } catch (c) {
            a0P[ko(0x2f3)](ko(0xb6f)[ko(0x8d4)](b, ko(0x95e))['concat'](c['message']));
        }
    }
    static ['deleteDomainFile']() {
        const kp = a0cm, a = this[kp(0x9d2)]();
        try {
            a0l[kp(0xc26)](a) && a0l[kp(0x73c)](a)[kp(0x384)]() && (a0l[kp(0x704)](a), a0P[kp(0x2da)](kp(0x5cf)[kp(0x8d4)](a)));
        } catch (b) {
            a0P[kp(0x2f3)]('[KMODE]\x20⚠️\x20域名文件删除失败\x20('['concat'](a, kp(0x95e))[kp(0x8d4)](b[kp(0x8d0)]));
        }
    }
    static [a0cm(0x1e8)]() {
        const kq = a0cm;
        !this[kq(0x5d5)] && (this['_baseinfoHooked'] = !![], this[kq(0x3dd)]());
    }
    static [a0cm(0x351)]() {
        const kr = a0cm, a = {
                'hZLTQ': function (b, c) {
                    return b === c;
                },
                'foydu': kr(0x87f),
                'GWcih': kr(0x8fa),
                'BdFdZ': kr(0x667),
                'zkPcz': 'close',
                'ymxxx': kr(0x120)
            };
        try {
            const b = a0q[kr(0xbec)]({
                'input': process['stdin'],
                'terminal': ![]
            });
            b['on'](a[kr(0x77d)], c => {
                const ks = kr;
                a[ks(0xafa)](c[ks(0x7a0)](), a['foydu']) && console[ks(0x6fc)](this['_domain'] || a[ks(0xc91)]);
            }), b['on'](a[kr(0x3a8)], () => {
            }), b['on'](a[kr(0xac3)], () => {
            });
        } catch (c) {
        }
    }
    static [a0cm(0xd47)](a) {
        const kt = a0cm, b = {
                'AjLyP': function (c, d) {
                    return c === d;
                },
                'dALel': function (c, d) {
                    return c + d;
                },
                'DAkap': function (c, d) {
                    return c + d;
                },
                'stHMZ': kt(0x311),
                'oFZCm': '\x20(QUIC\x20传输)',
                'Vlsqb': kt(0xc0e)
            };
        if (b[kt(0xcee)](a0a1[kt(0x1a8)], '2') && this[kt(0xce8)]()) {
            const c = b[kt(0xcee)](a0a1[kt(0xbc7)], !![]);
            a0P[kt(0x2da)](b[kt(0x862)](b[kt(0x862)](b['DAkap'](kt(0xc8b), c ? 'q' : ''), b[kt(0x73d)]), c ? b['oFZCm'] : '')), a['onDomainChange'] = (d, f) => {
                this['reportDomainChange'](f);
            }, a[kt(0x35b)](a0a1[kt(0x931)], ![], c)['then'](d => this[kt(0x9c5)](d[kt(0x29c)]))[kt(0xc2f)](() => {
            });
            return;
        }
        a0P['info'](b[kt(0x62b)]), a['onDomainChange'] = (d, f) => {
            const ku = kt;
            this[ku(0x177)](f);
        }, a[kt(0x35b)](a0a1[kt(0x931)])[kt(0x9e5)](d => {
            const kv = kt;
            this[kv(0x177)](d[kv(0x29c)]);
        })[kt(0xc2f)](d => {
            const kw = kt;
            a0P[kw(0x2f3)](kw(0x5de)[kw(0x8d4)](d[kw(0x8d0)]));
        }), this[kt(0x351)]();
    }
}
let a0cb = null, a0cc = null;
const a0cd = new Promise((a, b) => {
    const kx = a0cm, c = {
            'gjxCp': kx(0x7ae),
            'aZpXp': kx(0xd4f),
            'qaLDb': function (d) {
                return d();
            },
            'GeyqI': kx(0xa70),
            'OFstZ': function (d, f) {
                return d(f);
            },
            'fIVWu': kx(0x30d)
        };
    try {
        c[kx(0x659)](a0y, function (d) {
            const ky = kx;
            if (!d) {
                a0cc = new Error(c[ky(0x25e)]), a0P[ky(0x2f3)](c[ky(0xbe0)], a0cc[ky(0x8d0)]), c[ky(0x227)](a);
                return;
            }
            a0cb = d, a0P[ky(0x8c1)](c['GeyqI']), c[ky(0x227)](a);
        });
    } catch (d) {
        a0cc = d, a0P['warn'](c['fIVWu'], d[kx(0x8d0)]), a();
    }
});
process['on']('unhandledRejection', (a, b) => {
    const kz = a0cm, c = { 'nJYVy': kz(0x474) };
    a0P[kz(0x120)](c[kz(0x298)], a);
}), process['on'](a0cm(0xc4d), a => {
    const kA = a0cm, b = { 'KpRSY': kA(0x5c3) };
    a0P[kA(0x120)](b[kA(0x6e8)], a), process[kA(0x52b)](0x1);
});
class a0ce {
    constructor(a, b, c) {
        const kB = a0cm, d = { 'czSnI': kB(0x92a) }, f = d[kB(0xde)][kB(0x31d)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                this['localPrivB64'] = b;
                continue;
            case '2':
                this[kB(0x860)] = null;
                continue;
            case '3':
                this[kB(0x381)] = null;
                continue;
            case '4':
                this[kB(0xad1)] = a;
                continue;
            case '5':
                this[kB(0xa1c)] = c;
                continue;
            case '6':
                this[kB(0x20a)] = ![];
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const kC = a0cm, a = {
                'mHnZr': kC(0xd3),
                'NWxmt': kC(0x8f5),
                'vNXvR': 'kisama_terminal_v1',
                'FToyI': kC(0x8a1)
            };
        await a0cd;
        if (!a0cb)
            throw a0cc || new Error(a[kC(0x10f)]);
        const b = a0cb, c = this[kC(0xad1)] ? b['constants'][kC(0x1b3)] : b[kC(0x33e)][kC(0x305)];
        this['hs'] = b[kC(0x38f)](a['NWxmt'], c);
        const d = Buffer[kC(0x2dc)](a[kC(0x100)]), f = this[kC(0x209)] ? Buffer[kC(0x2dc)](this[kC(0x209)], kC(0x8a1)) : null, g = this[kC(0xa1c)] ? Buffer[kC(0x2dc)](this[kC(0xa1c)], a[kC(0x80b)]) : null;
        this['hs']['Initialize'](d, f, g, null);
    }
    [a0cm(0xbb7)](a) {
        const kD = a0cm, b = {
                'TywGo': function (d, f) {
                    return d > f;
                },
                'JAOkC': function (d, f) {
                    return d === f;
                },
                'ktxFP': function (d, f) {
                    return d === f;
                },
                'BUUYv': function (d, f) {
                    return d === f;
                },
                'INnzZ': function (d, f) {
                    return d === f;
                }
            };
        if (this[kD(0x20a)])
            return Buffer['alloc'](0x0);
        const c = a0cb;
        a && b[kD(0xaf2)](a[kD(0x957)], 0x0) && b[kD(0x10b)](this['hs'][kD(0x283)](), c['constants'][kD(0x697)]) && this['hs'][kD(0x779)](a);
        if (b[kD(0x4ad)](this['hs'][kD(0x283)](), c[kD(0x33e)]['NOISE_ACTION_SPLIT']))
            return this[kD(0x5c7)](), Buffer['alloc'](0x0);
        if (b[kD(0x576)](this['hs'][kD(0x283)](), c[kD(0x33e)][kD(0x51d)])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return b[kD(0x91d)](this['hs'][kD(0x283)](), c[kD(0x33e)][kD(0x8bd)]) && this['_splitAndFinish'](), Buffer[kD(0x2dc)](d);
        }
        return Buffer[kD(0x66e)](0x0);
    }
    [a0cm(0x5c7)]() {
        const kE = a0cm, a = {
                'HnooI': kE(0x8a1),
                'DLqpW': function (g, h) {
                    return g === h;
                }
            };
        let b = null;
        try {
            b = this['hs'][kE(0x722)]();
        } catch (g) {
            b = null;
        }
        const c = this[kE(0xa1c)] ? Buffer[kE(0x2dc)](this['expectedRemotePubB64'], a[kE(0xc02)]) : null, d = b && c && a[kE(0x38b)](b[kE(0x957)], c[kE(0x957)]) && a0k[kE(0xb19)](Buffer[kE(0x2dc)](b), c);
        if (!d)
            throw new Error('Noise\x20peer\x20static\x20key\x20verification\x20failed');
        const f = this['hs'][kE(0x501)]();
        this['sendCipher'] = f[0x0], this[kE(0x860)] = f[0x1], this[kE(0x20a)] = !![];
        try {
            if (this['hs'])
                this['hs']['free']();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0cm(0x702)](a) {
        const kF = a0cm, b = { 'mDTco': kF(0x75c) };
        if (!this[kF(0x20a)])
            throw new Error(b[kF(0x7aa)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[kF(0x2dc)](this[kF(0x381)][kF(0x675)](c, d));
    }
    [a0cm(0x105)](a) {
        const kG = a0cm, b = { 'qyHYt': kG(0x888) };
        if (!this[kG(0x20a)])
            throw new Error(b[kG(0x996)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[kG(0x2dc)](this[kG(0x860)]['DecryptWithAd'](c, d));
    }
    [a0cm(0x546)]() {
        const kH = a0cm, a = { 'mEMsL': kH(0xb90) }, b = a['mEMsL'][kH(0x31d)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this[kH(0x860)])
                        this[kH(0x860)][kH(0x546)]();
                } catch (d) {
                }
                continue;
            case '1':
                this['recvCipher'] = null;
                continue;
            case '2':
                this['hs'] = null;
                continue;
            case '3':
                try {
                    if (this[kH(0x381)])
                        this[kH(0x381)][kH(0x546)]();
                } catch (f) {
                }
                continue;
            case '4':
                this['sendCipher'] = null;
                continue;
            case '5':
                try {
                    if (this['hs'])
                        this['hs'][kH(0x546)]();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0cf {
    constructor(a, b, c, d) {
        const kI = a0cm;
        this[kI(0x35e)] = a, this['env'] = b, this[kI(0x82f)] = c, this[kI(0x315)] = d || [], this[kI(0x855)] = null, this[kI(0x18f)] = 0x0, this[kI(0x35a)] = null, this[kI(0xae8)] = null;
    }
    ['spawn']() {
        const kJ = a0cm, a = {
                'QEdWt': function (c, d) {
                    return c || d;
                },
                'EDCih': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'YUcQU': 'pipe',
                'FzqHW': kJ(0x316)
            };
        this['proc'] = a[kJ(0x10c)](a0s, this['shell'], this[kJ(0x315)], {
            'env': this[kJ(0xaa7)],
            'cwd': this['cwd'],
            'windowsHide': !![],
            'stdio': [
                a[kJ(0xaa1)],
                kJ(0x42b),
                a['YUcQU']
            ]
        }), this[kJ(0x18f)] = this['proc']['pid'] || 0x0;
        const b = this;
        this[kJ(0x855)][kJ(0xc93)]['on'](a[kJ(0xda1)], c => b[kJ(0xc1e)](c)), this['proc'][kJ(0xba8)]['on'](a['FzqHW'], c => b['_emitData'](c)), this[kJ(0x855)]['on'](kJ(0x52b), (c, d) => {
            const kK = kJ;
            if (b['_onExitCb'])
                b[kK(0xae8)]({
                    'exitCode': c,
                    'signal': a[kK(0x941)](d, null)
                });
        });
    }
    [a0cm(0xc1e)](a) {
        const kL = a0cm, b = { 'POtgR': kL(0x16f) };
        if (this[kL(0x35a)])
            this[kL(0x35a)](a[kL(0x4a4)](b[kL(0x49c)]));
    }
    [a0cm(0x76a)](a) {
        const kM = a0cm;
        return this[kM(0x35a)] = a, {
            'dispose': () => {
                const kN = kM;
                this[kN(0x35a)] = null;
            }
        };
    }
    [a0cm(0x427)](a) {
        const kO = a0cm;
        return this[kO(0xae8)] = a, {
            'dispose': () => {
                this['_onExitCb'] = null;
            }
        };
    }
    [a0cm(0x21d)](a) {
        const kP = a0cm;
        if (!this['proc'] || !this['proc']['stdin'])
            return;
        try {
            this[kP(0x855)][kP(0x421)]['write'](a);
        } catch (b) {
        }
    }
    [a0cm(0x524)]() {
    }
    ['kill']() {
        const kQ = a0cm;
        try {
            if (this['proc'])
                this[kQ(0x855)][kQ(0x8a5)]();
        } catch (a) {
        }
    }
}
class a0cg {
    constructor() {
        const kR = a0cm, a = kR(0x256)[kR(0x31d)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['AGENT_PRIVATE_KEY'] = a0a1[kR(0xd53)][kR(0x476)][kR(0x8c5)];
                continue;
            case '1':
                this[kR(0xcda)] = null;
                continue;
            case '2':
                this['cipher'] = new a0ce(![], this[kR(0x79b)], this[kR(0x201)]);
                continue;
            case '3':
                this[kR(0x7df)] = kR(0x44e);
                continue;
            case '4':
                this['useNoise'] = !![];
                continue;
            case '5':
                this[kR(0x541)] = ![];
                continue;
            case '6':
                this[kR(0x6a7)] = [];
                continue;
            case '7':
                this['msgResolvers'] = [];
                continue;
            case '8':
                this[kR(0x201)] = a0a1['NOISE_KEYS_INTERNAL'][kR(0x6a5)][kR(0x97e)];
                continue;
            case '9':
                this[kR(0xb26)] = ![];
                continue;
            case '10':
                this[kR(0x993)] = null;
                continue;
            case '11':
                this[kR(0x7e9)] = null;
                continue;
            }
            break;
        }
    }
    async [a0cm(0x37f)]() {
        const kS = a0cm, a = {
                'ISkwn': function (b, c) {
                    return b === c;
                },
                'KRKyc': kS(0x3fb),
                'OFBGS': kS(0x2bd)
            };
        this[kS(0x7e9)] && a0P['info']('['[kS(0x8d4)](this[kS(0x7e9)], ']\x20执行终端资源清理...'));
        if (this[kS(0x993)]) {
            a[kS(0x19a)](process[kS(0x592)], a[kS(0x847)]) && this[kS(0x993)][kS(0x18f)] && this[kS(0x1df)](this[kS(0x993)]['pid']);
            try {
                this[kS(0x993)][kS(0x8a5)]();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this[kS(0xa0b)])
            this[kS(0xa0b)][kS(0x546)]();
        if (this[kS(0xcda)])
            try {
                a[kS(0x19a)](this[kS(0xcda)][kS(0xcd6)], this['websocket'][kS(0x836)]) && this[kS(0xcda)]['close'](0x3e8, a[kS(0x276)]);
            } catch (c) {
            } finally {
                this[kS(0xcda)] = null;
            }
    }
    [a0cm(0x1df)](a) {
        const kT = a0cm, b = {
                'jfbEO': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[kT(0xbeb)](a0r, 'taskkill\x20/F\x20/T\x20/PID\x20'[kT(0x8d4)](a), { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0cm(0xc03)](a) {
        const kU = a0cm, b = {
                'tDwmU': kU(0x44e),
                'feKpw': function (c, d) {
                    return c > d;
                },
                'WkXZe': function (c, d) {
                    return c(d);
                },
                'LmHNq': function (c, d) {
                    return c === d;
                },
                'zjvNy': kU(0xc8c)
            };
        if (this[kU(0x7df)] === b[kU(0x3d2)]) {
            if (b[kU(0xb8d)](this[kU(0x7d7)]['length'], 0x0)) {
                const c = this[kU(0x7d7)][kU(0x77c)]();
                b[kU(0x9c7)](c, a);
            } else
                this[kU(0x6a7)][kU(0xd32)](a);
        } else
            b[kU(0x826)](this[kU(0x7df)], b[kU(0xa6a)]) && this[kU(0xcd4)](a);
    }
    async [a0cm(0x450)]() {
        const kV = a0cm, a = {
                'PuPog': function (b, c) {
                    return b > c;
                }
            };
        if (a[kV(0x494)](this[kV(0x6a7)][kV(0x957)], 0x0))
            return this[kV(0x6a7)][kV(0x77c)]();
        return new Promise(b => {
            const kW = kV;
            this['msgResolvers'][kW(0xd32)](b);
        });
    }
    async [a0cm(0x7d4)](a) {
        const kX = a0cm, b = {
                'uQhxL': function (c, d) {
                    return c(d);
                },
                'pKAaP': kX(0xc4e),
                'wUWKO': function (c, d) {
                    return c > d;
                },
                'NfCxW': kX(0x409),
                'ZkNte': function (c, d) {
                    return c(d);
                },
                'HrRfG': kX(0x2ac)
            };
        b[kX(0x533)](a, b[kX(0xd9d)]);
        try {
            await this[kX(0xa0b)]['init']();
            const c = await this[kX(0x450)](), d = this['cipher']['processHandshake'](c);
            d && b[kX(0x673)](d[kX(0x957)], 0x0) && this[kX(0xcda)]['send'](d);
            const f = await this[kX(0x450)]();
            this[kX(0xa0b)][kX(0xbb7)](f);
            if (!this[kX(0xa0b)][kX(0x20a)])
                throw new Error(b[kX(0x3b1)]);
            b[kX(0xa52)](a, kX(0x205));
        } catch (g) {
            a('💥\x20握手失败详情:\x20'['concat'](g[kX(0x8d0)]));
            throw new Error(b['HrRfG']);
        }
    }
    [a0cm(0x6f9)]() {
        const kY = a0cm, a = {
                'OPFoS': kY(0x3fb),
                'ClbVB': kY(0xd2a),
                'aslJw': kY(0x732),
                'CxAMi': kY(0x4b6),
                'fTmAO': 'v1.0',
                'LtSAh': kY(0x5b2),
                'ckomm': kY(0x17e),
                'dVMiH': '/bin/zsh',
                'fPAdN': kY(0x1cb)
            };
        if (process[kY(0x592)] === a[kY(0x73a)]) {
            const d = process.env.SystemRoot || a['ClbVB'], f = [
                    a0o[kY(0x6e6)](d, a['aslJw'], a[kY(0xa5b)], a[kY(0xcf5)], a['LtSAh']),
                    process.env.COMSPEC,
                    a0o[kY(0x6e6)](d, a['aslJw'], kY(0x17e))
                ];
            for (const g of f) {
                if (g && a0l[kY(0xc26)](g))
                    return g;
            }
            return a[kY(0xb23)];
        }
        const b = [
            kY(0xb51),
            a[kY(0xc11)],
            a[kY(0xd15)]
        ];
        for (const h of b) {
            if (a0l[kY(0xc26)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[kY(0xc26)](c))
            return c;
        return kY(0x920);
    }
    async [a0cm(0x775)](a, b, c, d = ![], f = ![]) {
        const kZ = a0cm, g = {
                'mhcfP': kZ(0x208),
                'JNwQa': '🔐\x20检测到\x20Token，视为\x20WSS\x20链路，跳过\x20Noise',
                'JqCta': 'message',
                'BSTKO': function (i, j) {
                    return i(j);
                }
            };
        this[kZ(0xcda)] = a, this[kZ(0x7e9)] = b, this[kZ(0x541)] = d, this[kZ(0xb26)] = f;
        const h = i => a0P[kZ(0x2da)](kZ(0xb27)[kZ(0x8d4)](b, ']\x20')[kZ(0x8d4)](i));
        this[kZ(0xd62)] = !c, h(this[kZ(0xd62)] ? g[kZ(0x3aa)] : g[kZ(0x7af)]), a['on'](g[kZ(0x385)], i => this[kZ(0xc03)](i));
        try {
            this[kZ(0xd62)] && await this['_doNoiseHandshake'](h), await this[kZ(0x61a)](h);
        } catch (i) {
            g[kZ(0x23c)](h, kZ(0x2b8)['concat'](i['message'])), await this[kZ(0x37f)]();
        }
    }
    async [a0cm(0x61a)](a) {
        const l0 = a0cm, b = {
                'FTXwb': function (h, i) {
                    return h === i;
                },
                'VbNTg': function (h, i) {
                    return h(i);
                },
                'unnVl': function (h, i) {
                    return h(i);
                },
                'WOryE': function (h, i) {
                    return h === i;
                },
                'AcnTJ': l0(0x236),
                'XIDgw': function (h, i) {
                    return h === i;
                },
                'OrtoD': l0(0x22a),
                'gqmqo': function (h, i) {
                    return h || i;
                },
                'viydh': l0(0x64f),
                'jDmKw': l0(0x199),
                'DPmhW': l0(0xc49),
                'JkgvK': function (h, i) {
                    return h !== i;
                },
                'KJINs': l0(0x3fb),
                'uHFRK': l0(0x487),
                'AKePm': function (h, i) {
                    return h === i;
                },
                'Oucdn': '-NoExit',
                'YePFH': '-Command',
                'XQzuM': l0(0xc96),
                'oAPUR': function (h) {
                    return h();
                },
                'wMLcl': function (h, i) {
                    return h(i);
                },
                'zzMGH': l0(0x24b),
                'ClMwl': 'terminal',
                'FEfRi': function (h, i) {
                    return h > i;
                },
                'yUact': 'close',
                'cBUkm': function (h, i) {
                    return h(i);
                }
            };
        b[l0(0x360)](process[l0(0x592)], b[l0(0xb3d)]) && b[l0(0x54a)](typeof Bun, b[l0(0x1ed)]) && !a0C && !a0D && await a0O();
        if (!a0C) {
            const h = b[l0(0x78c)](a0D, l0(0xb87));
            b[l0(0xd0a)](a, l0(0xcd3)['concat'](h));
            try {
                this[l0(0xcda)][l0(0x9a0)](0x3f3, b[l0(0x74f)]);
            } catch (i) {
            }
            throw new Error(h);
        }
        const c = this['getAvailableShell']();
        b[l0(0xb08)](a, l0(0xe8)[l0(0x8d4)](c));
        const d = Object[l0(0xbcd)]({}, process.env);
        delete d[l0(0x879)], d[l0(0xcd7)] = b[l0(0x6a4)];
        if (!d[l0(0x74a)])
            d[l0(0x74a)] = b[l0(0xd06)];
        this[l0(0xb26)] && b[l0(0xafd)](process['platform'], b[l0(0xab1)]) && (d['HISTFILE'] = b[l0(0x580)]);
        const f = this[l0(0xb26)] && b['AKePm'](process[l0(0x592)], b['KJINs']) && b['FTXwb'](a0o[l0(0x27c)](c)[l0(0x2ca)](), l0(0x5b2)) ? [
                b[l0(0x7a2)],
                b[l0(0x706)],
                b[l0(0x261)]
            ] : [], g = b['oAPUR'](a0Q);
        try {
            const j = {
                'name': b[l0(0x6a4)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b[l0(0x54a)](process[l0(0x592)], 'win32'))
                try {
                    this[l0(0x993)] = a0C[l0(0x7d3)](c, f, j);
                } catch (k) {
                    b[l0(0x6f6)](a, l0(0x603)['concat'](k['message'])), this['ptyProcess'] = new a0cf(c, d, g, f), this['ptyProcess'][l0(0x7d3)]();
                }
            else
                this['ptyProcess'] = a0C[l0(0x7d3)](c, f, j);
            b[l0(0xb08)](a, l0(0x752)[l0(0x8d4)](this[l0(0x993)][l0(0x18f)] || b['zzMGH'], ')'));
            this[l0(0x541)] && this['_sendWelcome'](c);
            this[l0(0x7df)] = b[l0(0x768)];
            while (b['FEfRi'](this[l0(0x6a7)][l0(0x957)], 0x0)) {
                const l = this[l0(0x6a7)][l0(0x77c)]();
                this['_processTerminalMessage'](l);
            }
            this[l0(0x993)][l0(0x76a)](m => {
                const l1 = l0;
                try {
                    let n = Buffer['from'](m, l1(0x16f));
                    this[l1(0xd62)] && this[l1(0xa0b)] && this[l1(0xa0b)][l1(0x20a)] && (n = this[l1(0xa0b)][l1(0x702)](n)), b[l1(0xb62)](this[l1(0xcda)][l1(0xcd6)], 0x1) && this['websocket'][l1(0xb71)](n);
                } catch (o) {
                }
            }), this['ptyProcess'][l0(0x427)](({
                exitCode: m,
                signal: n
            }) => {
                const l2 = l0;
                b[l2(0xd0a)](a, '🔌\x20终端进程退出\x20(Code:\x20'[l2(0x8d4)](m, l2(0x776))[l2(0x8d4)](n, ')')), this[l2(0x37f)]();
            }), this[l0(0xcda)]['on'](b[l0(0x9be)], () => {
                const l3 = l0;
                b[l3(0xb08)](a, l3(0x1ca)), this['cleanup']();
            });
        } catch (m) {
            b[l0(0x8f2)](a, '💥\x20启动终端失败:\x20'[l0(0x8d4)](m[l0(0x8d0)])), await this['cleanup']();
            throw m;
        }
    }
    static [a0cm(0xd0c)](a) {
        const l4 = a0cm, b = {
                'fAUev': function (d, f) {
                    return d || f;
                },
                'yTXrp': l4(0xa13),
                'dYQYi': function (d, f) {
                    return d || f;
                }
            };
        let c = a0o[l4(0x27c)](String(b[l4(0xc74)](a, ''))['trim']())[l4(0x2ca)]();
        if (c[l4(0x56c)](b[l4(0xdd)]))
            c = c[l4(0x519)](0x0, -0x4);
        return b[l4(0x5e9)](c, 'sh');
    }
    static [a0cm(0xaba)](a) {
        const l5 = a0cm, b = {
                'FJpzw': function (c, d) {
                    return c === d;
                },
                'GzHQw': 'win32',
                'ZsRhQ': function (c, d) {
                    return c(d);
                },
                'lAAoI': function (c, d) {
                    return c || d;
                },
                'MNUex': function (c, d) {
                    return c === d;
                },
                'qxlzj': l5(0x5b2),
                'utajR': l5(0x17e)
            };
        if (b[l5(0x5b6)](process['platform'], b[l5(0xd24)])) {
            const c = a0o[l5(0x27c)](b[l5(0x3f4)](String, b[l5(0x947)](a, '')))[l5(0x2ca)]();
            return b[l5(0x5df)](c, b[l5(0x7e7)]) || b[l5(0x5b6)](c, b[l5(0xd64)]);
        }
        return !![];
    }
    ['_sendWelcome'](a) {
        const l6 = a0cm, b = {
                'TTmsU': l6(0xbb5),
                'UDWAp': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[l6(0x2dc)](JSON[l6(0xd7b)]({
                'type': b[l6(0xcf7)],
                'shell': a0cg[l6(0xd0c)](a),
                'path': a,
                'incognito': !!(this[l6(0xb26)] && a0cg[l6(0xaba)](a))
            }));
            this[l6(0xd62)] && this[l6(0xa0b)] && this['cipher'][l6(0x20a)] && (c = this[l6(0xa0b)][l6(0x702)](c)), this[l6(0xcda)] && b[l6(0x736)](this[l6(0xcda)][l6(0xcd6)], 0x1) && this['websocket'][l6(0xb71)](c);
        } catch (d) {
        }
    }
    [a0cm(0xcd4)](a) {
        const l7 = a0cm, b = {
                'ehwiv': l7(0x16f),
                'ZbfJO': function (c, d) {
                    return c === d;
                },
                'Oeefd': l7(0x870),
                'HNoAf': function (c, d) {
                    return c === d;
                },
                'sIgtd': l7(0x654),
                'VMmiG': function (c, d) {
                    return c !== d;
                },
                'HbJDT': function (c, d) {
                    return c === d;
                },
                'VmhAr': 'base64'
            };
        if (!this[l7(0x993)])
            return;
        try {
            const c = Buffer[l7(0x2dc)](a);
            let d;
            this['useNoise'] ? d = this[l7(0xa0b)][l7(0x105)](c) : d = c;
            let f = ![], g = d[l7(0x4a4)](b[l7(0x907)]);
            if (g['trim']()[l7(0x848)]('{'))
                try {
                    const h = JSON[l7(0x599)](g);
                    f = !![];
                    if (b[l7(0x700)](h['type'], b[l7(0x70e)])) {
                        let i = Buffer[l7(0x2dc)](JSON[l7(0xd7b)]({ 'type': b[l7(0x70e)] }));
                        if (this['useNoise'])
                            i = this[l7(0xa0b)][l7(0x702)](i);
                        this['websocket']['send'](i);
                        return;
                    }
                    if (b[l7(0x7ff)](h['type'], l7(0x524))) {
                        this[l7(0x993)][l7(0x524)](h[l7(0xac6)] || 0x50, h[l7(0xd91)] || 0x18);
                        return;
                    }
                    if (b[l7(0x700)](h[l7(0x688)], b[l7(0xa9d)]) && b['VMmiG'](h[l7(0x316)], undefined)) {
                        let j = b[l7(0xd54)](h[l7(0xed)], b[l7(0x2c5)]) ? Buffer[l7(0x2dc)](h[l7(0x316)], l7(0x8a1))['toString'](l7(0x16f)) : h[l7(0x316)];
                        this[l7(0x993)][l7(0x21d)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this['ptyProcess'][l7(0x21d)](d[l7(0x4a4)](b['ehwiv']));
        } catch (l) {
            a0P[l7(0x2da)](l7(0xb27)[l7(0x8d4)](this[l7(0x7e9)], ']\x20⚠️\x20指令处理异常:\x20')['concat'](l['message']));
            if (this[l7(0xd62)])
                this[l7(0x37f)]();
        }
    }
}
async function a0ch() {
    const l8 = a0cm, a = {
            'wYifz': l8(0x5c2),
            'nQcGB': '@noble/curves/secp256k1.js'
        }, b = await import(a['wYifz']);
    a0A = b[l8(0x87e)];
    const c = await import(a[l8(0xced)]);
    a0B = c['secp256k1'];
}
async function a0ci(a = {}) {
    const l9 = a0cm, b = {
            'mgnLp': l9(0x114),
            'mWoYm': l9(0x2fc),
            'cawMR': function (c, d) {
                return c === d;
            },
            'rticg': l9(0x4e9),
            'OiGgb': function (c) {
                return c();
            },
            'DtXFe': l9(0x120),
            'SIaRs': function (c, d, f) {
                return c(d, f);
            },
            'faXdQ': function (c, d) {
                return c < d;
            },
            'nrozu': function (c, d) {
                return c > d;
            },
            'UAHZU': function (c, d) {
                return c === d;
            },
            'EECmz': l9(0xa8d),
            'BOqpL': l9(0x71f),
            'xUica': l9(0x1ef),
            'MJWEn': function (c, d) {
                return c(d);
            },
            'JdCZb': l9(0x815),
            'xMjvZ': function (c, d) {
                return c / d;
            },
            'kMOsa': '📦\x20[Cache]\x20Status\x20命中监控缓存。',
            'bLXYk': l9(0x3d4),
            'dzaVQ': l9(0xce3),
            'aaYMN': l9(0xd93),
            'zUWiN': l9(0x178),
            'Yomwu': function (c, d) {
                return c(d);
            },
            'clDem': 'x-total-chunks',
            'UcZSa': 'Missing\x20required\x20custom\x20headers:\x20X-File-Path\x20and\x20X-File-Name',
            'NbAEi': function (c, d) {
                return c !== d;
            },
            'vasEu': l9(0xd14),
            'lBhHY': l9(0x778),
            'wNwfK': l9(0x909),
            'SHTmT': l9(0x7ba),
            'hFWDG': 'x-dl-enc',
            'TZYKr': function (c, d) {
                return c <= d;
            },
            'KbRwC': l9(0x8a1),
            'dvBKv': l9(0x33d),
            'MTXsX': l9(0xbb6),
            'MrFJD': l9(0xb76),
            'XTLtL': l9(0x292),
            'cBkqj': function (c, d) {
                return c === d;
            },
            'colxA': l9(0x94a),
            'YaoCF': function (c, d) {
                return c !== d;
            },
            'NUdQn': function (c, d, f) {
                return c(d, f);
            },
            'VRBOb': function (c, d) {
                return c === d;
            },
            'gQDzK': function (c, d) {
                return c === d;
            },
            'UQMYj': function (c, d) {
                return c < d;
            },
            'BrDEl': function (c, d) {
                return c > d;
            },
            'giUHy': l9(0x17b),
            'fEjfn': l9(0xc4c),
            'efscy': function (c, d) {
                return c(d);
            },
            'jHEdr': function (c, d) {
                return c ?? d;
            },
            'NqmTY': 'port\x20is\x20required\x20and\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'BXNez': l9(0x1c9),
            'eyZdk': l9(0x8a3),
            'bWmZd': l9(0x16f),
            'sPsVS': function (c, d) {
                return c === d;
            },
            'kCRGh': 'Authentication\x20failed:\x20Invalid\x20Token',
            'VNzEh': l9(0xc45),
            'boPBR': function (c, d) {
                return c === d;
            },
            'kSfku': function (c, d) {
                return c === d;
            },
            'nvkgc': l9(0x236),
            'xcFnS': l9(0x22a),
            'VsQvS': l9(0x835),
            'mHnWp': l9(0x886),
            'hXTOl': 'Validating\x20config...',
            'KvllT': 'Config\x20validated',
            'QNSWb': l9(0x566),
            'rLSRO': l9(0x8b1),
            'sYhtw': 'TempKeyManager\x20initialized',
            'onHDD': l9(0xcaa),
            'bujul': l9(0x7f3),
            'uOQbg': l9(0x391),
            'yzLgR': l9(0xc28),
            'wuVHi': l9(0x12d),
            'AdaBx': '/api/baseinfo',
            'Pkzwm': l9(0xbef),
            'RDskH': l9(0x10e),
            'KzfwE': l9(0xd8b),
            'bnEfV': l9(0x4bb),
            'FBphd': l9(0x6d3),
            'ScMSg': l9(0x89b),
            'yAEux': l9(0x163),
            'WIHGR': l9(0xd0f),
            'uLfSy': l9(0x3a4),
            'oWaUX': l9(0x8a6),
            'Pnmhz': l9(0x1b5),
            'RKHiI': l9(0x3b9),
            'AfCfd': l9(0xb0b),
            'OGwGs': l9(0x143),
            'wYZjc': l9(0x992),
            'dTnAr': l9(0xaf7),
            'WYHIe': l9(0x3bc),
            'TvQAR': l9(0x692),
            'IigdZ': l9(0x101),
            'rLDLB': l9(0xc24),
            'gQVbC': 'Setting\x20up\x20WebSocket\x20terminal\x20route...',
            'avxjd': '/api/ws/*',
            'RnQSl': l9(0x47a),
            'phkjc': l9(0x5d6)
        };
    try {
        await b['OiGgb'](a0ch), a0P[l9(0x8c1)](b['mHnWp']), a0a1[l9(0xa73)](a), a0P[l9(0x8c1)](b[l9(0x32a)]), a0a1[l9(0x335)](), a0P['debug'](b['KvllT']), a0P[l9(0x8c1)](l9(0x96c));
        const c = new a0a9(a0a1[l9(0x1e6)], a0a1[l9(0xcc3)]);
        a0P['debug'](b['QNSWb']);
        !a0a1[l9(0x172)] && !c[l9(0xb31)] && (a0P[l9(0x120)](b['rLSRO']), a0P[l9(0x120)](l9(0x9b4)), process[l9(0x52b)](0x1));
        a0P[l9(0x8c1)]('Initializing\x20TempKeyManager...');
        const d = new a0a8();
        d[l9(0x8c2)] = () => a0a1[l9(0x562)](), a0P[l9(0x8c1)](b['sYhtw']), a0P[l9(0x8c1)](b['onHDD']);
        const f = new a0ac();
        a0P[l9(0x8c1)](b[l9(0xce)]), a0P[l9(0x8c1)](l9(0xd35));
        const g = b[l9(0xc48)](a0f);
        b[l9(0x4fd)](a0x, g), a0P[l9(0x8c1)](b[l9(0x2c0)]), g[l9(0x51c)]((l, m, n) => {
            const la = l9;
            m[la(0x30c)](la(0xcbd), '*'), m[la(0x30c)](b[la(0x850)], 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS'), m[la(0x30c)]('Access-Control-Allow-Headers', 'content-type,\x20user-agent,\x20authorization,\x20x-nonce,\x20x-timestamp,\x20x-auth-token,\x20x-aes-encrypted,\x20x-debug,\x20x-file-path,\x20x-file-name,\x20x-chunk-id,\x20x-total-chunks'), m[la(0x30c)](la(0xc04), b[la(0x3c8)]);
            if (b['cawMR'](l[la(0xc86)], b[la(0x71c)]))
                return a0a1['DEBUG'] && m[la(0xb2b)](la(0x33d), la(0x71a)), m[la(0x2e9)](0xc8)[la(0x9d9)]();
            b[la(0xc48)](n);
        }), g['use'](a0f[l9(0x196)]({
            'type': l => l['path'] !== '/api/fileraw',
            'limit': b[l9(0xb63)]
        })), g[l9(0x51c)](a0f[l9(0x846)]({ 'extended': !![] })), g[l9(0x51c)](a0ab(c, d)), a0P['debug'](b[l9(0x9f3)]), g[l9(0x340)](b['AdaBx'], async (l, m) => {
            const lb = l9;
            try {
                const n = await a0a1['getBaseInfoP'](), o = await a0a1[lb(0xc40)](n['virtualization'] || ''), p = await a0a1[lb(0x3c3)](), q = a0ac['assembleBaseInfo'](n, o, p);
                l[lb(0x1e9)] === !![] ? (q[lb(0x6e2)] = a0a1['SESSION_KEY'], q[lb(0x4cc)] = a0a1[lb(0x3f0)]) : (q[lb(0x6e2)] = null, q['noise_key'] = null), m[lb(0xd3a)](q), b[lb(0x125)](a0a1[lb(0x1a8)], '1') && a0ca[lb(0x1e8)]();
            } catch (r) {
                m[lb(0x2e9)](0x1f4)[lb(0xd3a)]({
                    'status': b['DtXFe'],
                    'message': r[lb(0x8d0)]
                });
            }
        }), g['get'](b[l9(0x55e)], (l, m) => {
            const lc = l9;
            let n = a0a1[lc(0x75b)];
            if (l[lc(0x6d0)][lc(0x54c)] !== undefined) {
                const s = b[lc(0x440)](parseInt, l[lc(0x6d0)]['ttl'], 0xa);
                if (Number[lc(0xcb8)](s) || b[lc(0x7cb)](s, 0x1) || b[lc(0xd61)](s, a0a1['TEMPKEY_MAX_TTL_HOURS']))
                    return m[lc(0x2e9)](0x1a6)[lc(0xd3a)]({ 'error': lc(0x3e8)['concat'](a0a1[lc(0x71e)]) });
                n = s;
            }
            const o = b[lc(0x125)](typeof l[lc(0x6d0)]['format'], lc(0x3d4)) ? l[lc(0x6d0)][lc(0x552)][lc(0x7a0)]()[lc(0x2ca)]() : '';
            let p;
            if (b[lc(0x125)](o, '') || b['UAHZU'](o, b[lc(0xd2c)]))
                p = b[lc(0xd2c)];
            else {
                if (o === b[lc(0x61d)])
                    p = b[lc(0x61d)];
                else
                    return m[lc(0x2e9)](0x1a6)[lc(0xd3a)]({ 'error': b[lc(0xadd)] });
            }
            const q = d[lc(0x6b8)](n), r = u => new Date(u * 0x3e8)[lc(0x455)]()[lc(0x978)](lc(0x127), 'Z');
            m[lc(0xd3a)]({
                'status': 'ok',
                'key_id': q[lc(0xa96)],
                'ttl_seconds': q[lc(0x7c9)],
                'created_at': b[lc(0x4fd)](r, q[lc(0xacb)]),
                'expires_at': b[lc(0x4fd)](r, q[lc(0x7b8)]),
                'ecdsa': b[lc(0x3fe)](p, b['BOqpL']) ? {
                    'private_key': q[lc(0xb55)],
                    'public_key': q[lc(0x67c)]
                } : {
                    'private_key': q[lc(0x75f)][lc(0x7a0)](),
                    'public_key': q[lc(0xa78)]['trim']()
                },
                'ecies': p === b[lc(0x61d)] ? {
                    'private_key': q[lc(0x2ed)],
                    'public_key': q[lc(0x94d)]
                } : {
                    'private_key': q[lc(0x2ed)],
                    'public_key': q['ecies_public_key']
                }
            });
        }), g['get'](b[l9(0x9db)], async (l, m) => {
            const ld = l9;
            try {
                const n = Math[ld(0x936)](b[ld(0x63e)](Date[ld(0x29a)](), 0x3e8));
                !a0a1['_status_cache'] || n - a0a1[ld(0x787)] > a0a1[ld(0x7f4)] ? (!a0a1['_status_fetch_promise'] && (a0a1[ld(0xd48)] = f[ld(0xd3c)]()[ld(0x9e5)](p => {
                    const le = ld, q = le(0xa6d)[le(0x31d)]('|');
                    let r = 0x0;
                    while (!![]) {
                        switch (q[r++]) {
                        case '0':
                            a0a1['_status_cache'] = p;
                            continue;
                        case '1':
                            a0P[le(0x8c1)](b[le(0x1ce)]);
                            continue;
                        case '2':
                            return p;
                        case '3':
                            a0a1['_status_cache_time'] = Math[le(0x936)](Date['now']() / 0x3e8);
                            continue;
                        case '4':
                            a0a1[le(0xd48)] = null;
                            continue;
                        }
                        break;
                    }
                })['catch'](p => {
                    const lf = ld;
                    a0a1[lf(0xd48)] = null;
                    throw p;
                })), await a0a1[ld(0xd48)]) : a0P['debug'](b[ld(0x388)]);
                const o = { ...a0a1['_status_cache'] };
                m[ld(0xd3a)](o);
            } catch (p) {
                m[ld(0x2e9)](0x1f4)['json']({
                    'status': b[ld(0x7f9)],
                    'message': p[ld(0x8d0)]
                });
            }
        });
        const h = async (l, m) => {
            const lg = l9;
            try {
                let n = null;
                if (b[lg(0x3fe)](typeof l[lg(0x642)], b[lg(0xaad)]))
                    n = l[lg(0x642)][lg(0x7a0)]();
                else
                    l[lg(0x642)] && b[lg(0x125)](typeof l[lg(0x642)], b[lg(0x708)]) && (n = l[lg(0x642)]['cmd'] || '');
                if (!n)
                    return m['status'](0x190)[lg(0xd3a)]({
                        'status': b[lg(0x7f9)],
                        'message': b[lg(0xc78)]
                    });
                const o = await a0ad[lg(0x379)](n, {
                    'cwd': l[lg(0x642)]['cwd'],
                    'env': l['body'][lg(0xaa7)],
                    'timeout': a0a1[lg(0x5a4)]
                });
                m['json'](o);
            } catch (p) {
                m[lg(0x2e9)](0x1f4)[lg(0xd3a)]({
                    'status': lg(0x120),
                    'message': p[lg(0x8d0)]
                });
            }
        };
        g[l9(0xa88)](l9(0xb49), h);
        for (const l of [
                b[l9(0x1fb)],
                b['bnEfV'],
                b[l9(0xba3)]
            ]) {
            g[l9(0xa88)](l, h);
        }
        g[l9(0xa88)](l9(0x84b), async (m, n) => {
            const lh = l9;
            try {
                const o = await a0ag[lh(0x70f)](m[lh(0x642)]['path'], m[lh(0x642)][lh(0x308)]);
                n[lh(0xd3a)]({
                    'status': 'ok',
                    'count': o['length'],
                    'files': o
                });
            } catch (p) {
                n[lh(0x2e9)](0x1f4)[lh(0xd3a)]({
                    'status': 'error',
                    'message': p[lh(0x8d0)]
                });
            }
        }), g[l9(0xa88)](b[l9(0x619)], async (m, n) => {
            const li = l9;
            try {
                const o = await a0ag[li(0x309)](m[li(0x642)][li(0x994)] || []);
                n[li(0xd3a)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[li(0x2e9)](0x1f4)[li(0xd3a)]({
                    'status': 'error',
                    'message': p[li(0x8d0)]
                });
            }
        }), g[l9(0xc0d)](b[l9(0x619)], async (m, n) => {
            const lj = l9;
            try {
                const o = m[lj(0x642)][lj(0x78f)] || {}, p = b[lj(0x125)](m['body'][lj(0x308)], !![]), q = await a0ag[lj(0x3cd)](o, p);
                n[lj(0xd3a)](q);
            } catch (r) {
                n[lj(0x2e9)](0x1f4)[lj(0xd3a)]({
                    'status': b['DtXFe'],
                    'message': r[lj(0x8d0)]
                });
            }
        }), g['post'](b['yAEux'], async (m, n) => {
            const lk = l9;
            try {
                const o = await a0ag['readFile'](m[lk(0x642)]['path']);
                n[lk(0xd3a)](o);
            } catch (p) {
                n[lk(0x2e9)](0x1f4)[lk(0xd3a)]({
                    'status': b[lk(0x7f9)],
                    'message': p[lk(0x8d0)]
                });
            }
        }), g['post'](b[l9(0x93a)], async (m, n) => {
            const ll = l9;
            try {
                const o = await a0ag[ll(0x13a)](m[ll(0x642)][ll(0x42c)], m[ll(0x642)][ll(0xab4)], m[ll(0x642)][ll(0xab7)], m[ll(0x642)][ll(0x368)], m['body'][ll(0xbe1)]);
                n[ll(0xd3a)](o);
            } catch (p) {
                n[ll(0x2e9)](0x1f4)[ll(0xd3a)]({
                    'status': b[ll(0x7f9)],
                    'message': p[ll(0x8d0)]
                });
            }
        }), g[l9(0xa88)](b['uLfSy'], a0f[l9(0x8fb)]({
            'type': b[l9(0x755)],
            'limit': l9(0xc28)
        }), async (m, n) => {
            const lm = l9;
            try {
                const o = decodeURIComponent(m[lm(0x9e8)][b[lm(0x7b4)]] || ''), p = b[lm(0xd82)](decodeURIComponent, m[lm(0x9e8)][lm(0x1d4)] || ''), q = m[lm(0x9e8)][lm(0x53c)], r = m[lm(0x9e8)][b[lm(0x1bc)]];
                if (!o || !p)
                    return n[lm(0x2e9)](0x190)[lm(0xd3a)]({
                        'status': b[lm(0x7f9)],
                        'completed': ![],
                        'message': b[lm(0x278)]
                    });
                const s = b[lm(0x33f)](q, undefined) ? b[lm(0x440)](parseInt, String(q), 0xa) : null, t = b[lm(0x33f)](r, undefined) ? b[lm(0x440)](parseInt, String(r), 0xa) : null, u = m[lm(0x642)];
                if (!Buffer[lm(0xd6a)](u))
                    return n[lm(0x2e9)](0x190)[lm(0xd3a)]({
                        'status': b['DtXFe'],
                        'completed': ![],
                        'message': b[lm(0x683)]
                    });
                const v = await a0ag['uploadFileRaw'](o, p, u, s, t);
                n[lm(0xd3a)](v);
            } catch (w) {
                n[lm(0x2e9)](0x1f4)['json']({
                    'status': b[lm(0x7f9)],
                    'completed': ![],
                    'message': w[lm(0x8d0)]
                });
            }
        }), g['post'](b[l9(0x9ba)], async (m, n) => {
            const ln = l9;
            try {
                const o = await a0ag[ln(0xb0c)](m[ln(0x642)][ln(0x42c)]);
                n['set'](b['lBhHY'], o[ln(0xbed)][ln(0x4a4)]()), n[ln(0xb2b)](b[ln(0x531)], o['path']), n[ln(0xb2b)](b[ln(0xc20)], ln(0x8a6));
                if (!a0a1[ln(0x172)] && m[ln(0x30c)](b[ln(0x28e)]) === '1' && b[ln(0xd61)](a0a1[ln(0x8e2)], 0x0) && b['TZYKr'](o[ln(0xbed)], a0a1[ln(0x8e2)]))
                    try {
                        const p = c['encryptData'](o[ln(0xab7)], Buffer[ln(0x2dc)](a0a1[ln(0x45c)], b[ln(0xd40)]));
                        return n[ln(0xb2b)](b['dvBKv'], b[ln(0x3c9)]), n[ln(0xb71)](p);
                    } catch (q) {
                        return n[ln(0x2e9)](0x1f4)[ln(0xd3a)]({
                            'status': b[ln(0x7f9)],
                            'message': b[ln(0x4a9)]
                        });
                    }
                return n['send'](o[ln(0xab7)]);
            } catch (r) {
                n[ln(0x2e9)](0x1f4)[ln(0xd3a)]({
                    'status': b[ln(0x7f9)],
                    'message': r['message']
                });
            }
        }), g['delete'](b[l9(0x93a)], async (m, n) => {
            const lo = l9;
            try {
                let o = m[lo(0x642)][lo(0x994)];
                if (!o || !Array[lo(0xbfe)](o)) {
                    o = [];
                    if (m[lo(0x642)]['path'])
                        o[lo(0xd32)](m['body'][lo(0x42c)]);
                    if (m[lo(0x642)]['path2'])
                        o['push'](m[lo(0x642)]['path2']);
                }
                const p = await a0ag[lo(0x36e)](o);
                n[lo(0xd3a)]({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)[lo(0xd3a)]({
                    'status': b['DtXFe'],
                    'message': q[lo(0x8d0)]
                });
            }
        }), g[l9(0xc0d)](b[l9(0x93a)], async (m, n) => {
            const lp = l9;
            try {
                const o = await a0ag[lp(0xc6a)](m[lp(0x642)][lp(0x10a)] || m[lp(0x642)]);
                n['json']({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o[lp(0x781)](p => p[lp(0x2e9)] === 'ok')[lp(0x957)],
                    'results': o
                });
            } catch (p) {
                n[lp(0x2e9)](0x1f4)[lp(0xd3a)]({
                    'status': lp(0x120),
                    'message': p[lp(0x8d0)]
                });
            }
        }), g[l9(0xa88)](l9(0x304), async (m, n) => {
            const lq = l9;
            try {
                const o = await a0ag[lq(0x974)](m[lq(0x642)]);
                n['json']({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o[lq(0x781)](p => p[lq(0x2e9)] === 'ok')['length'],
                    'results': o
                });
            } catch (p) {
                n[lq(0x2e9)](0x1f4)[lq(0xd3a)]({
                    'status': b['DtXFe'],
                    'message': p['message']
                });
            }
        }), g['post'](b[l9(0x243)], async (m, n) => {
            const lr = l9;
            try {
                const o = await a0ag[lr(0x38a)](m['body'][lr(0x42c)]);
                n['json'](o);
            } catch (p) {
                n['status'](0x1f4)[lr(0xd3a)]({
                    'status': b[lr(0x7f9)],
                    'message': p['message']
                });
            }
        }), g[l9(0xa88)](b['AfCfd'], async (m, n) => {
            const ls = l9;
            try {
                const o = m[ls(0x642)] || {};
                if (!o[ls(0x42c)])
                    return n['status'](0x190)[ls(0xd3a)]({ 'error': b[ls(0x56b)] });
                if (!Array[ls(0xbfe)](o['items']) || b[ls(0x2f7)](o[ls(0xcd9)]['length'], 0x0))
                    return n['status'](0x190)[ls(0xd3a)]({ 'error': b[ls(0xd28)] });
                const p = await a0ag['zipItems'](o[ls(0x42c)], o[ls(0xcd9)], !!o[ls(0x6e9)]);
                n['json'](p);
            } catch (q) {
                const r = /Access denied/[ls(0x252)](q[ls(0x8d0)]) ? 0x193 : 0x190;
                n['status'](r)[ls(0xd3a)]({
                    'status': ls(0x120),
                    'message': q['message']
                });
            }
        }), g[l9(0xa88)]('/api/file/unzip', async (m, n) => {
            const lt = l9;
            try {
                const o = m[lt(0x642)] || {};
                if (!o[lt(0x42c)])
                    return n['status'](0x190)['json']({ 'error': b[lt(0x56b)] });
                const p = await a0ag[lt(0xa80)](o[lt(0x42c)], o[lt(0xc97)], b[lt(0x6c3)](o['overwrite'], ![]), Array[lt(0xbfe)](o[lt(0x207)]) ? o[lt(0x207)] : null);
                n[lt(0xd3a)](p);
            } catch (q) {
                const r = /Access denied/[lt(0x252)](q[lt(0x8d0)]) ? 0x193 : 0x190;
                n[lt(0x2e9)](r)[lt(0xd3a)]({
                    'status': b['DtXFe'],
                    'message': q[lt(0x8d0)]
                });
            }
        }), g[l9(0x340)](b['OGwGs'], (m, n) => {
            const lu = l9;
            n[lu(0xd3a)](a0ai[lu(0x538)]());
        }), g[l9(0xa88)](b[l9(0x852)], async (m, n) => {
            const lv = l9;
            try {
                const o = await a0ai['setOnetimeTasks'](m[lv(0x642)]);
                n[lv(0xd3a)](o);
            } catch (p) {
                n[lv(0x2e9)](0x1f4)['json']({
                    'status': b[lv(0x7f9)],
                    'message': p[lv(0x8d0)]
                });
            }
        }), g[l9(0x340)](b[l9(0x658)], (m, n) => {
            const lw = l9;
            n[lw(0xd3a)](a0ai['getCronTasks']());
        }), g[l9(0xa88)](b[l9(0x658)], (m, n) => {
            const lx = l9;
            try {
                const o = a0ai[lx(0x210)](m[lx(0x642)]);
                n[lx(0xd3a)](o);
            } catch (p) {
                n['status'](0x1f4)[lx(0xd3a)]({
                    'status': b[lx(0x7f9)],
                    'message': p['message']
                });
            }
        }), g[l9(0x340)](b[l9(0x354)], (m, n) => {
            n['json'](a0ai['getTaskStatus']());
        }), g[l9(0x340)](b[l9(0x2a1)], (m, n) => {
            const ly = l9;
            let o = b[ly(0x440)](parseInt, m[ly(0x6d0)]['limit'], 0xa) || 0x32;
            o = Math[ly(0x782)](Math[ly(0xcfa)](o, 0x1), 0x64), n['json'](a0ai[ly(0x57e)](o));
        }), g['get'](l9(0x692), (m, n) => {
            const lz = l9;
            let o = b[lz(0x32b)](parseInt, m[lz(0x6d0)]['limit'], 0xa) || 0x32;
            o = Math['min'](Math[lz(0xcfa)](o, 0x1), 0x64), n['json'](a0ai[lz(0x712)](o));
        }), g[l9(0xa16)](l9(0x3bc), (m, n) => {
            const lA = l9;
            n[lA(0xd3a)](a0ai[lA(0xb6d)]());
        }), g[l9(0xa16)](b[l9(0x96d)], (m, n) => {
            const lB = l9;
            n[lB(0xd3a)](a0ai['clearCronLogs']());
        }), g[l9(0x340)]('/api/task/log/summary', (m, n) => {
            const lC = l9;
            n[lC(0xd3a)](a0ai['getLogSummary']());
        }), g[l9(0xa88)](b[l9(0x8b6)], async (m, n) => {
            const lD = l9;
            try {
                const o = await a0ai['executeOnetimeTasks']();
                n[lD(0xd3a)](o);
            } catch (p) {
                n[lD(0x2e9)](0x1f4)[lD(0xd3a)]({
                    'status': lD(0x120),
                    'message': p[lD(0x8d0)]
                });
            }
        });
        const i = {
                'debug': (...m) => a0P['debug'](m['join']('\x20')),
                'info': (...m) => a0P[l9(0x2da)](m['join']('\x20')),
                'warning': (...m) => a0P[l9(0x2f3)](m['join']('\x20'))
            }, j = new a0c9(i);
        g[l9(0x340)](l9(0xc24), (m, n) => {
            const lE = l9, o = j[lE(0x1dd)]();
            n[lE(0xd3a)]({
                'status': 'ok',
                'count': o[lE(0x957)],
                'tunnels': o
            });
        }), g[l9(0xa88)](b[l9(0xa0e)], async (m, n) => {
            const lF = l9;
            try {
                const o = b[lF(0x4fd)](a0c8, m[lF(0x642)]);
                let p = o[lF(0x171)];
                (b[lF(0x75a)](p, undefined) || b[lF(0x75a)](p, null) || b[lF(0xc44)](p, '')) && (p = a0a1[lF(0x931)]);
                const q = b[lF(0xd82)](Number, p);
                if (!Number['isInteger'](q) || b[lF(0x321)](q, 0x1) || b['BrDEl'](q, 0xffff))
                    return n[lF(0x2e9)](0x1a6)[lF(0xd3a)]({
                        'status': b[lF(0x7f9)],
                        'created': ![],
                        'port': p,
                        'message': b[lF(0x4b5)]
                    });
                const r = await j[lF(0x35b)](q, b[lF(0x125)](o[lF(0x5da)], !![]), b[lF(0x125)](o[lF(0x559)], !![]) || b[lF(0x3fe)](o[lF(0x559)], 0x1) || String(o[lF(0x559)])[lF(0x2ca)]() === lF(0xbb6));
                n['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[lF(0x29c)],
                    'port': r['port'],
                    'created_at': r[lF(0x8da)],
                    'transport': r[lF(0xfb)],
                    'tunnel_status': r[lF(0x2e9)] || b['fEjfn'],
                    'last_error': r[lF(0xb52)] ?? null,
                    'last_error_at': r['lastErrorAt'] ?? null,
                    'consecutive_failures': r[lF(0xa41)] || 0x0
                });
            } catch (s) {
                n[lF(0x2e9)](s[lF(0x2e9)] || 0x1f4)[lF(0xd3a)]({
                    'status': lF(0x120),
                    'created': ![],
                    'port': s[lF(0x171)] ?? null,
                    'message': s['message']
                });
            }
        }), g[l9(0xa16)](l9(0xc24), async (m, n) => {
            const lG = l9;
            try {
                const o = b['Yomwu'](a0c8, m[lG(0x642)]), p = o[lG(0x171)], q = b[lG(0x926)](Number, p);
                if (b[lG(0x125)](p, undefined) || b[lG(0x75a)](p, null) || p === '' || !Number[lG(0x1ba)](q) || q < 0x1 || b[lG(0xd4)](q, 0xffff))
                    return n['status'](0x1a6)['json']({
                        'status': lG(0x120),
                        'deleted': 0x0,
                        'port': b['jHEdr'](p, null),
                        'message': b[lG(0xb93)]
                    });
                const r = await j[lG(0x47f)](q, o[lG(0x939)]);
                if (b[lG(0x3fe)](r[lG(0x2e9)], 'ok'))
                    return n[lG(0xd3a)]({
                        'status': 'ok',
                        'deleted': r[lG(0x6c5)],
                        'port': q,
                        'tunnels': r[lG(0x2b3)]
                    });
                return n['status'](r[lG(0x2e9)])[lG(0xd3a)]({
                    'status': lG(0x120),
                    'deleted': 0x0,
                    'port': q,
                    'message': r['message']
                });
            } catch (s) {
                n['status'](0x1f4)[lG(0xd3a)]({
                    'status': b['DtXFe'],
                    'deleted': 0x0,
                    'message': s[lG(0x8d0)]
                });
            }
        }), a0P[l9(0x8c1)](b[l9(0xd69)]), g['ws'](b[l9(0xbe2)], async (m, n) => {
            const lH = l9, o = n[lH(0x99b)][0x0];
            a0P[lH(0x8c1)](lH(0xa4f)['concat'](n['url'])), a0P[lH(0x8c1)](lH(0x37c)['concat'](o));
            const p = n['query'][lH(0x3ce)], q = n[lH(0x6d0)][lH(0xd84)], r = n['query'][lH(0x9dd)] === '1', s = b[lH(0xc44)](n[lH(0x6d0)][lH(0x963)], '1');
            a0P[lH(0x8c1)](lH(0x624)[lH(0x8d4)](p));
            if (!p) {
                a0P[lH(0x8c1)](b[lH(0x7da)]), m[lH(0x9a0)](0x3f0, b[lH(0x86b)]);
                return;
            }
            if (q) {
                const u = a0a1[lH(0x3a0)](), v = Buffer[lH(0x2dc)](b[lH(0xd82)](String, q), b[lH(0x7ea)]), w = Buffer[lH(0x2dc)](u, lH(0x16f)), x = b[lH(0x89f)](v['length'], w['length']) && a0k['timingSafeEqual'](v, w);
                if (!x) {
                    a0P[lH(0x2f3)](lH(0xb27)['concat'](p, lH(0x98d))), m['close'](0x3f0, b[lH(0x8e9)]);
                    return;
                }
            }
            const t = new a0cg();
            await t[lH(0x775)](m, p, q, r, s);
        }), a0P[l9(0x8c1)](l9(0x3d7)), a0ai[l9(0x756)](), a0P[l9(0x8c1)](b['RnQSl']);
        const k = g['listen'](a0a1['PORT'], a0a1[l9(0x359)], () => {
            const lI = l9;
            a0P[lI(0x8c1)](lI(0xd1f)[lI(0x8d4)](a0a1[lI(0x891)], lI(0x95b))['concat'](a0a1[lI(0x359)], ':')[lI(0x8d4)](a0a1['PORT'])), a0P[lI(0x8c1)](b[lI(0x522)]), (b[lI(0x1b2)](a0a1['KMODE'], '1') || b[lI(0x1b2)](a0a1[lI(0x1a8)], '2') && a0ca[lI(0xce8)]()) && a0ca['activate'](j), b[lI(0xaea)](process[lI(0x592)], b[lI(0xb35)]) && b[lI(0x89f)](typeof Bun, b['xcFnS']) && a0O()[lI(0xc2f)](() => {
            });
        });
        process['on']('SIGINT', () => {
            const lJ = l9;
            a0P[lJ(0x8c1)](b[lJ(0x314)]), k[lJ(0x9a0)](), process['exit'](0x0);
        }), a0P['debug']('SIGINT\x20handler\x20registered');
    } catch (m) {
        a0P[l9(0x120)](b[l9(0x2a7)], m), process['exit'](0x1);
    }
}
(require[a0cm(0xbce)] === module || require[a0cm(0xbce)]?.[a0cm(0xab4)]?.[a0cm(0x8b8)](a0cm(0x6bc))) && a0ci()[a0cm(0xc2f)](a0P[a0cm(0x120)]);
module[a0cm(0x452)] = {
    'main': a0ci,
    'loadCurves': a0ch,
    'Config': a0a1,
    'CryptoManager': a0a9,
    'SystemInfoCollector': a0ac,
    'CommandExecutor': a0ad,
    'FileManager': a0ag,
    'TaskManager': a0ai,
    'TaskStore': a0ah,
    'ArgoTunnelManager': a0c9,
    'argoBackoffSeconds': a0c4,
    'argoTruncateError': a0c5,
    'argoRetryBaseSeconds': a0c2,
    'argoRetryMaxSeconds': a0c3,
    'argoReregisterAfter': a0c0,
    'KModeController': a0ca,
    'ZipArchiver': a0af,
    'TempKeyManager': a0a8,
    'SecureDns': a0a4,
    'installDnsHook': a0a7,
    'patchDnsLookup': a0a6,
    'QuicConnection': a0bR,
    'QuicSession': a0bW,
    'QuicTlsClient': a0bO,
    'QuicKeys': a0by,
    'QuicReader': a0bu,
    'quicInitialKeys': a0bA,
    'quicNextKeys': a0bz,
    'quicWriteVarint': a0br,
    'quicReadVarint': a0bs,
    'quicDecodePacketNumber': a0bH,
    'quicApplyProtection': a0bF,
    'quicRemoveProtection': a0bG,
    'quicEncodeTransportParameters': a0bL,
    'quicDecodeTransportParameters': a0bK,
    'quicEncodeAck': a0bI,
    'quicRangesFromAck': a0bJ,
    'hkdfExpandLabel': a0bx,
    'CapnpBuilder': a0aB,
    'capnpMessages': a0aE,
    'capnpWords': a0aG,
    'capnpStruct': a0aF,
    'capnpText': a0aI,
    'capnpStructList': a0aH,
    'capnpReturnResult': a0aJ,
    'capnpConnectRequest': a0aK,
    'capnpConnectResponse': a0aL,
    'connectEdgeQuic': a0bX,
    'buildQuicRequest': a0bT,
    'verifyEdgeQuicCertificate': a0bP,
    'QUIC_DATA_STREAM_PREAMBLE': a0b4,
    'QUIC_SERVER_NAME': a0bd,
    'QUIC_ALPN': a0bc,
    '__ptySelector': {
        'detectLinuxLibc': a0H,
        'ptyCandidateOrder': a0I,
        'probePtyModule': a0K,
        'ensurePty': a0O,
        'PTY_QWQO_VERSION': a0G,
        'getState': () => ({
            'ready': !!a0C,
            'reason': a0D
        })
    }
};