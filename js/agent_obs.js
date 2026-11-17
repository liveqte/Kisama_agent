#!/usr/bin/env node
const a0cE = a0b;
(function (a, b) {
    const cD = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(cD(0x1c3)) / 0x1 * (parseInt(cD(0x817)) / 0x2) + parseInt(cD(0x8b8)) / 0x3 + -parseInt(cD(0x7fd)) / 0x4 + -parseInt(cD(0x2ee)) / 0x5 * (-parseInt(cD(0x99b)) / 0x6) + -parseInt(cD(0xcb1)) / 0x7 * (-parseInt(cD(0x1c6)) / 0x8) + parseInt(cD(0x86a)) / 0x9 + -parseInt(cD(0xe59)) / 0xa;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x3eb31));
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    a0cE(0x75d),
    a0cE(0xd2b)
];
function a0d(a) {
    const b = {
        'qLMtJ': function (c, d) {
            return c === d;
        }
    };
    return function (c, d, f) {
        const cF = a0b, g = c[cF(0x7d1)]();
        if (a0c[cF(0x71b)](h => g[cF(0x18c)](h))) {
            if (b[cF(0xb0d)](typeof f, 'function'))
                f();
            return !![];
        }
        return a[cF(0xde9)](this, arguments);
    };
}
process['stdout'][a0cE(0xeb4)] = a0d(process['stdout']['write']), process[a0cE(0x746)][a0cE(0xeb4)] = a0d(process['stderr'][a0cE(0xeb4)]);
const a0f = require(a0cE(0xb78)), a0g = require(a0cE(0xd2d)), a0h = require(a0cE(0x75b)), a0i = require(a0cE(0x407)), a0j = require('tls'), a0k = require(a0cE(0x50d)), a0l = require('fs'), a0m = require('fs')['promises'], a0n = require(a0cE(0x3c4)), a0o = require(a0cE(0x20c)), a0p = require('os'), a0q = require('readline'), {
        exec: a0r,
        spawn: a0s
    } = require(a0cE(0xb3a)), a0t = require(a0cE(0x839)), a0u = require(a0cE(0x7f4)), {encrypt: a0v} = require('eciesjs'), a0w = require('base64-js'), a0x = require(a0cE(0xc9c)), a0y = require(a0cE(0x15f));
function a0z() {
    const cG = a0cE, a = {
            'WvPwv': cG(0x1b1),
            'NbIkp': cG(0xa4b),
            'YGnhm': cG(0xa05),
            'csNFr': function (b, c) {
                return b <= c;
            },
            'PSFdy': function (b, c) {
                return b >= c;
            },
            'krGSA': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[cG(0x3ec)](__dirname, a[cG(0x8d9)]);
        if (!a0l[cG(0x493)](b))
            return;
        for (let c of a0l[cG(0x755)](b, a[cG(0x4fa)])[cG(0xa24)](/\r?\n/)) {
            let d = c[cG(0x1b7)]();
            if (!d || d[cG(0x2da)]('#'))
                continue;
            if (d[cG(0x2da)](a['YGnhm']))
                d = d[cG(0x523)](0x7)[cG(0x320)]();
            const f = d[cG(0x1a7)]('=');
            if (a[cG(0x74b)](f, 0x0))
                continue;
            const g = d[cG(0x523)](0x0, f)[cG(0x1b7)]();
            let h = d['slice'](f + 0x1)[cG(0x1b7)]();
            a[cG(0x234)](h[cG(0x5bd)], 0x2) && (h['startsWith']('\x22') && h[cG(0x8a2)]('\x22') || h[cG(0x2da)]('\x27') && h[cG(0x8a2)]('\x27')) && (h = h[cG(0x523)](0x1, -0x1));
            if (g && !a[cG(0x9b5)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C = null, a0D = null, a0E = null, a0F = ![];
const a0G = a0cE(0x8a6), a0H = a0cE(0xcba);
function a0I() {
    const cH = a0cE, a = {
            'ywnRF': function (b, c) {
                return b !== c;
            },
            'QJCPO': cH(0xb8d),
            'trIGk': 'musl'
        };
    if (a[cH(0x749)](process[cH(0x772)], a[cH(0x5d0)]))
        return null;
    try {
        const b = process[cH(0xd62)][cH(0x88c)]();
        if (b[cH(0x818)] && b[cH(0x818)][cH(0x66a)])
            return cH(0x7fc);
        if ((b['sharedObjects'] || [])['some'](c => /(?:ld-musl|libc\.musl)/['test'](String(c))))
            return a['trIGk'];
    } catch (c) {
    }
    return null;
}
function a0J(a) {
    const cI = a0cE, b = {
            'dcNaE': function (d) {
                return d();
            },
            'DTxZK': function (d, f) {
                return d === f;
            },
            'UXELk': cI(0xc21),
            'NadQH': cI(0x585)
        }, c = a !== undefined ? a : b['dcNaE'](a0I);
    if (b[cI(0x64b)](c, cI(0xaf4)))
        return [
            b['UXELk'],
            b['NadQH']
        ];
    return [
        b[cI(0x7ed)],
        b[cI(0xdcc)]
    ];
}
const a0K = [
    a0cE(0xd85),
    a0cE(0x8f7),
    a0cE(0xe9e),
    a0cE(0xe04),
    a0cE(0xb5c),
    a0cE(0xc8d),
    'setTimeout(function\x20()\x20{\x20process.exit(3);\x20},\x208000);'
][a0cE(0x3ec)]('\x0a');
function a0L(a) {
    const cJ = a0cE, b = {
            'SsdvX': function (c, d) {
                return c(d);
            },
            'UdSIG': function (c, d) {
                return c > d;
            },
            'QQcJF': function (c, d) {
                return c(d);
            },
            'eSQnr': function (c, d, f) {
                return c(d, f);
            },
            'rCuDY': function (c, d) {
                return c(d);
            },
            'LFFZU': function (c, d, f) {
                return c(d, f);
            },
            'nvYxl': function (c, d) {
                return c + d;
            },
            'CzEXe': cJ(0x7b6),
            'gKhDS': function (c, d) {
                return c(d);
            },
            'KLjxF': function (c, d) {
                return c(d);
            },
            'WAHqC': function (c, d, f, g) {
                return c(d, f, g);
            },
            'kkjrw': cJ(0xa96),
            'EEjlc': function (c, d, f) {
                return c(d, f);
            },
            'JTPkG': cJ(0x7c7),
            'vpdhp': cJ(0x7b4)
        };
    return new Promise(c => {
        const cK = cJ;
        let d;
        try {
            d = require[cK(0xe51)](a);
        } catch (k) {
            b[cK(0xbff)](c, {
                'ok': ![],
                'detail': '模块不存在:\x20'[cK(0xbbc)](b[cK(0x9c5)](String, k[cK(0x921)])[cK(0xa24)]('\x0a')[0x0])
            });
            return;
        }
        const f = b[cK(0x511)](a0s, process[cK(0x7a3)], [
            '-e',
            a0K
        ], {
            'cwd': a0p[cK(0x6c1)](),
            'env': {
                ...process.env,
                'KISAMA_PTY_PROBE_PATH': d
            },
            'stdio': [
                cK(0xe1c),
                'ignore',
                cK(0x9b6)
            ]
        });
        let g = '';
        if (f[cK(0x746)])
            f[cK(0x746)]['on'](b[cK(0xb25)], l => {
                const cL = cK;
                g += b['SsdvX'](String, l);
                if (b['UdSIG'](g[cL(0x5bd)], 0x7d0))
                    g = g[cL(0x523)](-0x7d0);
            });
        let h = ![];
        const i = (l, m) => {
                const cM = cK;
                !h && (h = !![], b[cM(0x30a)](c, {
                    'ok': l,
                    'detail': m
                }));
            }, j = b[cK(0x84a)](setTimeout, () => {
                const cN = cK;
                try {
                    f['kill']();
                } catch (l) {
                }
                b['eSQnr'](i, ![], cN(0x1f4));
            }, 0x3a98);
        f['on'](b[cK(0x91a)], l => {
            const cO = cK;
            b[cO(0x385)](clearTimeout, j), i(![], cO(0x282)['concat'](l[cO(0x921)]));
        }), f['on'](b[cK(0x789)], (l, m) => {
            const cP = cK;
            clearTimeout(j);
            if (l === 0x0)
                b[cP(0x9dd)](i, !![], 'ok');
            else
                b[cP(0x261)](i, ![], cP(0x63d)[cP(0xbbc)](l, cP(0x990))[cP(0xbbc)](m)[cP(0xbbc)](g ? b['nvYxl'](b[cP(0x26e)], g[cP(0x1b7)]()['split']('\x0a')[cP(0x712)]()) : ''));
        });
    });
}
function a0M() {
    const cQ = a0cE;
    return process[cQ(0x30d)][0x1] && a0o[cQ(0x378)](a0o[cQ(0xe51)](process[cQ(0x30d)][0x1])) || process[cQ(0x189)]();
}
function a0N(a) {
    const cR = a0cE, b = {
            'ZzWpy': function (j, k) {
                return j(k);
            },
            'SjCee': function (j, k) {
                return j(k);
            },
            'FKMqu': function (j, k) {
                return j(k);
            },
            'yilYf': function (j, k, l, m) {
                return j(k, l, m);
            },
            'qYnip': function (j) {
                return j();
            },
            'lWTrF': function (j, k) {
                return j !== k;
            },
            'hHwko': cR(0x7fc),
            'EvRqL': cR(0x5e5),
            'LouLY': function (j, k) {
                return j(k);
            },
            'aBCxf': 'pnpm-lock.yaml',
            'xWlEi': function (j, k) {
                return j + k;
            },
            'jjxxR': cR(0x241)
        };
    if (a0F)
        return Promise['resolve'](![]);
    a0F = !![];
    const c = b['qYnip'](a0I);
    if (b[cR(0xeb3)](c, 'musl') && b[cR(0xeb3)](c, b['hHwko']))
        return Promise['resolve'](![]);
    const d = cR(0x235)[cR(0xbbc)](process[cR(0xace)], '-')['concat'](c), f = ''[cR(0xbbc)](d, '@')[cR(0xbbc)](a0G), g = b[cR(0xa46)](a0M);
    if (!a0l[cR(0x493)](a0o[cR(0x3ec)](g, b[cR(0x495)])))
        return b[cR(0xc28)](a, 'npm\x20自愈跳过:\x20'['concat'](g, cR(0x2f2))), Promise[cR(0xe51)](![]);
    if (a0l['existsSync'](a0o['join'](g, b[cR(0x1ae)])))
        return b['ZzWpy'](a, cR(0xd0d)[cR(0xbbc)](f)), Promise[cR(0xe51)](![]);
    const h = cR(0x79e)[cR(0xbbc)](a0G), i = b[cR(0x739)](b[cR(0x45f)], cR(0x2cc));
    return b[cR(0x7c3)](a, '尝试\x20npm\x20自愈补装:\x20npm\x20install\x20'[cR(0xbbc)](h, '\x20')['concat'](f, '\x20--no-save\x20(cwd=')[cR(0xbbc)](g, ')')), new Promise(j => {
        const cS = cR;
        b[cS(0xd5e)](a0r, 'npm\x20install\x20'[cS(0xbbc)](h, '\x20')['concat'](f, '\x20')[cS(0xbbc)](i), {
            'cwd': g,
            'timeout': 0xafc8,
            'windowsHide': !![]
        }, k => {
            const cT = cS;
            if (k) {
                b[cT(0x7c3)](a, cT(0x9c7)['concat'](b[cT(0x7c3)](String, k[cT(0x921)])['split']('\x0a')[0x0])), b[cT(0x833)](j, ![]);
                return;
            }
            b[cT(0xc93)](a, cT(0x18d)[cT(0xbbc)](h, cT(0x5ec))['concat'](f)), b[cT(0xc93)](j, !![]);
        });
    });
}
function a0O(a, b, c) {
    const cU = a0cE, d = { 'KtowC': cU(0x5e5) };
    return a0o[cU(0x3ec)](a0o['dirname'](a), '..', cU(0xee8)[cU(0xbbc)](c, '-')[cU(0xbbc)](b), d['KtowC']);
}
async function a0P(a, b) {
    const cV = a0cE, c = {
            'tzYjT': '@qwqo/',
            'pEkMx': function (m) {
                return m();
            },
            'vdhFJ': function (m) {
                return m();
            },
            'wUcnx': function (m, n) {
                return m(n);
            },
            'CGeMC': function (m, n) {
                return m(n);
            },
            'BOGYL': function (m, n) {
                return m + n;
            }
        }, f = b || {}, g = f['candidates'] || a0J(), h = f['healPtyBinary'] || a0N, i = f[cV(0x8ae)] || a0L, j = f[cV(0x5f2)] || (m => require(m)), k = f[cV(0x982)] || a0I, l = f[cV(0xdc2)] || (() => require['resolve'](cV(0x743)));
    for (const m of g) {
        if (m[cV(0x2da)](c['tzYjT'])) {
            const p = c['pEkMx'](k);
            if (p) {
                let q = null;
                try {
                    q = a0O(c[cV(0x43b)](l), p, process['arch']);
                } catch (r) {
                    q = null;
                }
                if (q && !a0l[cV(0x493)](q)) {
                    c['wUcnx'](a, cV(0xd6a)[cV(0xbbc)](p, cV(0x3ff)));
                    const s = await h(a);
                    c[cV(0x2ac)](a, s ? cV(0x2ba)[cV(0xbbc)](m, cV(0x2a8)) : cV(0x2ba)[cV(0xbbc)](m, cV(0x436)));
                }
            }
        }
        let n = null;
        try {
            n = c['wUcnx'](j, m);
        } catch (t) {
            c[cV(0x158)](a, cV(0x2ba)['concat'](m, cV(0x3e4))[cV(0xbbc)](t && t[cV(0x6af)] ? c['BOGYL'](t['code'], '\x20') : '')['concat'](c['CGeMC'](String, t && t[cV(0x921)])[cV(0xa24)]('\x0a')[0x0]));
            continue;
        }
        const o = await c[cV(0x158)](i, m);
        if (o['ok'])
            return a(cV(0x38b)[cV(0xbbc)](m, cV(0xe09))['concat'](c['vdhFJ'](a0I) || cV(0x38f), ')')), {
                'name': m,
                'mod': n
            };
        a(cV(0x2ba)[cV(0xbbc)](m, cV(0x2cb))[cV(0xbbc)](o[cV(0x1e4)]));
    }
    return null;
}
function a0Q() {
    const cW = a0cE, a = {
            'SWgYf': function (b, c) {
                return b + c;
            },
            'qknjP': cW(0xa42),
            'drmWF': function (b, c) {
                return b + c;
            },
            'UIxDU': cW(0x714),
            'NyFiA': cW(0xd39),
            'wxYlI': cW(0xde5),
            'jzooy': function (b, c) {
                return b(c);
            }
        };
    if (a0C || a0D)
        return Promise[cW(0xe51)](a0C);
    return !a0E && (a0E = a[cW(0x4f3)](a0P, b => {
        const cX = cW;
        try {
            a0R[cX(0x5a5)]('[PTY]\x20'[cX(0xbbc)](b));
        } catch (c) {
            console[cX(0xabe)](a[cX(0x224)](a[cX(0x15e)], b));
        }
    })[cW(0xa19)](b => {
        const cY = cW;
        return b ? a0C = b[cY(0xb22)] : a0D = a[cY(0x498)]('所有\x20pty\x20实现均不可用\x20(子进程探测失败)。', '可手动执行:\x20npm\x20install\x20@qwqo/node-pty-linux-'[cY(0xbbc)](process[cY(0xace)], '-')[cY(0xbbc)](a0I() || a[cY(0xaaa)], '@')[cY(0xbbc)](a0G, '\x20--no-save')) + a['NyFiA'] + a[cY(0x541)], a0C;
    })), a0E;
}
if (typeof Bun !== a0cE(0x6c3))
    try {
        a0C = require(a0cE(0xe87));
    } catch (a0cB) {
        a0D = a0cE(0xbd6) + a0cB[a0cE(0x921)];
    }
else {
    if (process['platform'] !== a0cE(0xb8d))
        try {
            a0C = require(a0cE(0x585));
        } catch (a0cC) {
            a0D = '核心终端依赖\x20(pty)\x20加载失败:\x20' + a0cC[a0cE(0x921)] + '\x20(npm\x20install\x20@lydell/node-pty)';
        }
}
const a0R = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const cZ = a0cE, a = {
                'KtGwd': function (b, c) {
                    return b !== c;
                },
                'sKXzU': cZ(0x6c3)
            };
        return a['KtGwd'](typeof a0af, a['sKXzU']) && a[cZ(0xaf2)](a0af[cZ(0xa00)], undefined) ? a0af[cZ(0xa00)] : 0x2;
    },
    'debug': a => {
        const d0 = a0cE, b = {
                'pNyMY': function (c, d) {
                    return c <= d;
                }
            };
        b[d0(0xa31)](a0R[d0(0x2ef)], a0R['LEVELS']['DEBUG']) && console[d0(0xabe)](d0(0xa07)[d0(0xbbc)](a));
    },
    'info': a => {
        const d1 = a0cE, b = {
                'HfGwa': function (c, d) {
                    return c <= d;
                }
            };
        b['HfGwa'](a0R[d1(0x2ef)], a0R['LEVELS'][d1(0x9dc)]) && console['log'](d1(0x890)[d1(0xbbc)](a));
    },
    'warn': a => {
        const d2 = a0cE, b = {
                'XyxiU': function (c, d) {
                    return c <= d;
                }
            };
        b[d2(0x874)](a0R[d2(0x2ef)], a0R[d2(0x987)][d2(0xe53)]) && console[d2(0xabe)](d2(0xd4c)[d2(0xbbc)](a));
    },
    'error': a => {
        const d3 = a0cE, b = {
                'jqTaR': function (c, d) {
                    return c <= d;
                }
            };
        b['jqTaR'](a0R[d3(0x2ef)], a0R[d3(0x987)][d3(0x5d5)]) && console[d3(0xabe)](d3(0x330)[d3(0xbbc)](a));
    }
};
function a0S() {
    const d4 = a0cE, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p[d4(0x9f7)](),
            process[d4(0x189)]()
        ];
    for (const b of a) {
        if (b && a0l[d4(0x493)](b) && a0l[d4(0x719)](b)[d4(0xd9a)]())
            return b;
    }
    return process['cwd']();
}
function a0T() {
    const d5 = a0cE;
    let a = null;
    try {
        a = a0p[d5(0x9f7)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[d5(0x493)](d) && a0l[d5(0x719)](d)[d5(0xd9a)]())
            return d;
        if (d)
            console['log'](d5(0x692)[d5(0xbbc)](d));
    }
    return console[d5(0xabe)]('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20全部候选无效,\x20降级到当前工作目录:\x20'[d5(0xbbc)](process[d5(0x189)]())), process['cwd']();
}
class a0U {
    constructor(a = 'ok') {
        const d6 = a0cE;
        this[d6(0x4f2)] = a;
    }
}
class a0V extends a0U {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0W extends a0U {
    constructor() {
        const d7 = a0cE, a = { 'MWAeV': d7(0xc06) }, b = a['MWAeV'][d7(0xa24)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[d7(0xdde)] = 0x0;
                continue;
            case '1':
                this[d7(0x56d)] = '';
                continue;
            case '2':
                this[d7(0x901)] = [];
                continue;
            case '3':
                super();
                continue;
            case '4':
                this[d7(0x79c)] = 0x0;
                continue;
            case '5':
                this['mem_total'] = 0x0;
                continue;
            case '6':
                this[d7(0xace)] = '';
                continue;
            case '7':
                this[d7(0x35f)] = null;
                continue;
            case '8':
                this['os'] = '';
                continue;
            case '9':
                this['version'] = a0af[d7(0x292)];
                continue;
            case '10':
                this[d7(0x61b)] = '';
                continue;
            case '11':
                this[d7(0x9a5)] = null;
                continue;
            case '12':
                this[d7(0x5d9)] = 0x0;
                continue;
            case '13':
                this[d7(0xe82)] = '';
                continue;
            case '14':
                this['kernel_version'] = '';
                continue;
            case '15':
                this[d7(0x410)] = null;
                continue;
            case '16':
                this[d7(0x362)] = '';
                continue;
            }
            break;
        }
    }
}
class a0X extends a0U {
    constructor() {
        const d8 = a0cE, a = { 'Wmemw': d8(0x44b) }, b = a['Wmemw'][d8(0xa24)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[d8(0xaea)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '1':
                this[d8(0x7bc)] = { 'usage': 0x0 };
                continue;
            case '2':
                this['connections'] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '3':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[d8(0x921)] = '';
                continue;
            case '5':
                super();
                continue;
            case '6':
                this[d8(0x3f6)] = 0x0;
                continue;
            case '7':
                this[d8(0x6ae)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '8':
                this[d8(0x9bf)] = 0x0;
                continue;
            case '9':
                this[d8(0xae3)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '10':
                this[d8(0x910)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0Y extends a0U {
    constructor() {
        const d9 = a0cE;
        super(), this['result'] = '', this[d9(0x3bc)] = 0x0, this[d9(0xcf6)] = ![], this[d9(0x75a)] = '';
    }
}
class a0Z {
    constructor() {
        const da = a0cE, a = { 'ZTqNN': da(0xac2) }, b = a[da(0xa5e)][da(0xa24)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[da(0x1d1)] = 0x0;
                continue;
            case '1':
                this[da(0x20c)] = '';
                continue;
            case '2':
                this['owner'] = '';
                continue;
            case '3':
                this[da(0x3d4)] = '';
                continue;
            case '4':
                this[da(0x3ce)] = '';
                continue;
            case '5':
                this['mode'] = '';
                continue;
            case '6':
                this[da(0xcd0)] = '';
                continue;
            case '7':
                this['name'] = '';
                continue;
            }
            break;
        }
    }
}
class a0a0 {
    constructor() {
        const db = a0cE, a = { 'lTfNS': db(0x988) }, b = a[db(0x87b)][db(0xa24)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['path'] = '';
                continue;
            case '1':
                this['readable'] = ![];
                continue;
            case '2':
                this['name'] = '';
                continue;
            case '3':
                this[db(0xc7b)] = ![];
                continue;
            case '4':
                this['writable'] = ![];
                continue;
            case '5':
                this[db(0x6ba)] = '';
                continue;
            case '6':
                this[db(0x3ce)] = '';
                continue;
            case '7':
                this[db(0x3d4)] = '';
                continue;
            }
            break;
        }
    }
}
class a0a1 extends a0U {
    constructor() {
        super(), this['files'] = [];
    }
}
class a0a2 {
    static ['_generateRawKeypair']() {
        const dc = a0cE, a = {
                'ectHu': 'x25519',
                'slTHU': dc(0xb79),
                'zzbRY': dc(0x89c),
                'gSDxU': dc(0x81a)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[dc(0xb2f)](a[dc(0x395)]), d = b[dc(0x537)]({ 'format': a[dc(0xb83)] }), f = c['export']({ 'format': a['slTHU'] }), g = Buffer[dc(0x5a6)](d['d'], a[dc(0x3bf)]), h = Buffer[dc(0x5a6)](f['x'], a['zzbRY']);
        return (g[dc(0x5bd)] !== 0x20 || h[dc(0x5bd)] !== 0x20) && a0R[dc(0x7c7)](dc(0xcce)), {
            'private_b64': g[dc(0x7d1)](a['gSDxU']),
            'public_b64': h[dc(0x7d1)](a[dc(0x9fe)])
        };
    }
    static [a0cE(0x61a)](a) {
        const b = this['_generateRawKeypair']();
        return {
            'role': a,
            'private_b64': b['private_b64'],
            'public_b64': b['public_b64']
        };
    }
    static [a0cE(0xc9d)](a = a0cE(0x3cc), b = 'Agent') {
        const dd = a0cE, c = {
                'control': this[dd(0x61a)](a),
                'agent': this[dd(0x61a)](b)
            };
        return c;
    }
}
const a0a3 = new Set([
        a0cE(0xd63),
        'agents',
        a0cE(0x623),
        a0cE(0xbea),
        a0cE(0xa81),
        a0cE(0x548),
        a0cE(0x731)
    ]), a0a4 = /^[a-z0-9][a-z0-9-]{1,62}$/, a0a5 = new Set([
        a0cE(0xdf2),
        a0cE(0x568),
        a0cE(0x202),
        'proxy-authorization',
        'te',
        a0cE(0x2fd),
        a0cE(0x519),
        a0cE(0x831),
        a0cE(0xeaa),
        'host'
    ]);
function a0a6(a) {
    const de = a0cE, b = {
            'FFqQL': function (d, f) {
                return d <= f;
            }
        }, c = new Set();
    for (const d of String(a || '')[de(0xa24)](',')) {
        const f = d['trim']();
        if (!/^\d+$/[de(0xbd9)](f))
            continue;
        const g = parseInt(f, 0xa);
        if (g >= 0x1 && b[de(0x80b)](g, 0xffff))
            c['add'](g);
    }
    return [...c]['sort']((h, i) => h - i);
}
function a0a7(a) {
    const df = a0cE, b = {
            'ewTtF': function (d, f) {
                return d || f;
            },
            'KInrN': df(0x954)
        }, c = b[df(0x4c7)](a, '')['trim']()[df(0x846)]();
    if (!c)
        return b['KInrN'];
    if (!a0a4[df(0xbd9)](c))
        return df(0x466)['concat'](a, df(0x566));
    if (a0a3[df(0xa5c)](c))
        return 'KNAME\x20\x27'['concat'](a, df(0x628));
    return null;
}
const a0a8 = /^https?:\/\/\S+$/;
function a0a9(a) {
    const dg = a0cE, b = {
            'nhtrI': function (d, f) {
                return d || f;
            },
            'TwRCj': function (d, f) {
                return d > f;
            }
        }, c = b[dg(0x8d5)](a, '')[dg(0x1b7)]()[dg(0xd15)](/\/+$/, '');
    if (!c)
        return null;
    if (b[dg(0x404)](c[dg(0x5bd)], 0x200))
        return 'public_url\x20过长\x20('[dg(0xbbc)](c[dg(0x5bd)], dg(0x2db));
    if (!a0a8[dg(0xbd9)](c))
        return 'public_url\x20\x27'[dg(0xbbc)](c, dg(0xc01));
    return null;
}
function a0aa(a) {
    const dh = a0cE, b = {
            'sgRFp': function (d, f) {
                return d || f;
            },
            'erVEh': dh(0x8bf),
            'VYvPa': function (d, f) {
                return d + f;
            },
            'sMuYi': dh(0xdf5),
            'XgmcJ': '/tunnel',
            'otTCV': dh(0x8af)
        }, c = b[dh(0xc04)](a, '')['trim']()[dh(0xd15)](/\/+$/, '');
    if (c[dh(0x2da)](b[dh(0xda6)]))
        return b['VYvPa'](b[dh(0x7ec)](b[dh(0x470)], c[dh(0x523)](0x8)), b['XgmcJ']);
    if (c[dh(0x2da)](b[dh(0x681)]))
        return b[dh(0x7ec)](dh(0xadc), c['slice'](0x7)) + b[dh(0xcff)];
    return b['VYvPa']('ws://' + c, b[dh(0xcff)]);
}
function a0ab(a) {
    const di = a0cE, b = {
            'yUJrX': function (d, f) {
                return d(f);
            },
            'CSAnx': 'x-forwarded-'
        }, c = {};
    for (const [d, f] of Object[di(0x25f)](a || {})) {
        const g = b[di(0x854)](String, d)[di(0x846)]();
        if (a0a5['has'](g) || g['startsWith'](di(0x561)) || g[di(0x2da)](b[di(0x46e)]))
            continue;
        c[g] = f;
    }
    return c;
}
function a0ac(a, c, d) {
    const dj = a0cE, g = {
            'AtMPc': function (k, l) {
                return k || l;
            },
            'qFVSK': function (k, l) {
                return k || l;
            },
            'BrPTh': function (k, l) {
                return k - l;
            }
        }, h = Math[dj(0x357)](0.5, g[dj(0x902)](c, 0x2)), i = Math[dj(0x357)](h, g[dj(0x254)](d, 0x3c)), j = Math['max'](0x0, g[dj(0xbca)](a, 0x1));
    return Math['min'](h * Math[dj(0x858)](0x2, j), i);
}
function a0ad() {
    const dk = a0cE;
    return new Date()[dk(0x451)]()['replace'](/\.\d{3}Z$/, 'Z');
}
class a0ae extends Error {
    constructor(a, b) {
        const dl = a0cE, c = { 'ZsvRf': dl(0xdc0) };
        super('['[dl(0xbbc)](a, ']\x20')['concat'](b)), this[dl(0x6b1)] = c[dl(0xbd0)], this[dl(0x6af)] = a;
    }
}
class a0af {
    static [a0cE(0xd3c)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0cE(0x9f2)] = (process.env.EXEC_SHELL || a0cE(0x488))[a0cE(0x846)]() === a0cE(0x488);
    static [a0cE(0x77a)] = (process.env.DEBUG || a0cE(0x543))[a0cE(0x846)]() === a0cE(0x488);
    static [a0cE(0x51f)] = parseInt(process.env.TIMESTAMP_WINDOW || a0cE(0x44c));
    static [a0cE(0xa00)] = parseInt(process.env.LOG_LEVEL || (this[a0cE(0x77a)] ? '0' : '3'), 0xa);
    static [a0cE(0x1dc)] = a0af[a0cE(0x6e2)](a0cE(0x4e1), a0cE(0xa67)) || 'ECDSA公钥内容';
    static [a0cE(0xae1)] = a0af[a0cE(0x6e2)](a0cE(0x535), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static [a0cE(0x36d)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static ['TEMPKEY_MAX_TTL_HOURS'] = parseInt(process.env.TEMPKEY_MAX_TTL || a0cE(0x906), 0xa);
    static [a0cE(0x56c)] = a0T();
    static [a0cE(0x2e3)] = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
    static [a0cE(0xb4c)] = (process.env.FOLLOW_SYMLINKS || 'false')[a0cE(0x846)]() === 'true';
    static [a0cE(0x87f)] = Number['isFinite'](parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0cE(0x6db), 0xa)) ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || '4194304', 0xa) : 0x400000;
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || 'true')['toLowerCase']() === a0cE(0x488);
    static [a0cE(0xce0)] = !![];
    static [a0cE(0x305)] = [];
    static [a0cE(0xcf4)] = {};
    static ['cronloop'] = ![];
    static [a0cE(0x6cf)] = parseInt(process.env.TASK_TIMEOUT || '300');
    static [a0cE(0xc8e)] = parseInt(process.env.CRON_INTERVAL || '30');
    static ['onetimetasks_log'] = [];
    static ['crontasks_log'] = [];
    static [a0cE(0xe79)] = parseInt(process.env.MAX_TASK_LOG || a0cE(0x7ee));
    static [a0cE(0xeab)] = process.env.HOST || a0cE(0xc90);
    static [a0cE(0x337)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || '8000');
    static [a0cE(0x840)] = ((() => {
        const dm = a0cE, a = (process.env.KMODE || '0')[dm(0x1b7)]();
        return /^2q(?:uic)?$/i['test'](a) ? '2' : a || '0';
    })());
    static [a0cE(0x416)] = /^2q(?:uic)?$/i['test']((process.env.KMODE || '')[a0cE(0x1b7)]());
    static [a0cE(0xdb6)] = (process.env.KNAME || '')[a0cE(0x1b7)]();
    static [a0cE(0xb04)] = (process.env.KNAME_KEY || '')[a0cE(0x1b7)]();
    static [a0cE(0x4ae)] = process.env.KPATH || '';
    static [a0cE(0x347)] = (process.env.KHUB || '')[a0cE(0x1b7)]()[a0cE(0xd15)](/\/+$/, '');
    static [a0cE(0xbd2)] = (process.env.KHUB_PUBLIC_URL || '')[a0cE(0x1b7)]()[a0cE(0xd15)](/\/+$/, '');
    static [a0cE(0x340)] = a0a6(process.env.KHUB_PORTS || '');
    static [a0cE(0x551)] = parseFloat(process.env.KISAMA_HUB_RETRY_BASE_SECONDS || '2') || 0x2;
    static [a0cE(0xe50)] = parseFloat(process.env.KISAMA_HUB_RETRY_MAX_SECONDS || '60') || 0x3c;
    static [a0cE(0xcc7)] = parseFloat(process.env.KISAMA_HUB_PING_INTERVAL || '20') || 0x14;
    static [a0cE(0x8ff)] = parseFloat(process.env.KISAMA_HUB_RELAY_TIMEOUT || '60') || 0x3c;
    static [a0cE(0x6de)] = parseInt(process.env.KISAMA_HUB_MAX_BODY || String(0x40 * 0x400 * 0x400), 0xa) || 0x40 * 0x400 * 0x400;
    static [a0cE(0x531)] = (process.env.KISAMA_DNS || 'off')[a0cE(0x1b7)]()[a0cE(0x846)]();
    static [a0cE(0x4be)] = (process.env.KISAMA_DOH_SERVERS || '')['trim']();
    static ['DOH_SERVERS_DEFAULT'] = [
        'https://223.5.5.5/resolve',
        a0cE(0x419),
        a0cE(0xdc1)
    ];
    static [a0cE(0x292)] = process.env.AGENT_VERSION || a0cE(0x1dd);
    static [a0cE(0x6f1)] = a0k[a0cE(0x4ea)](0x20)['toString'](a0cE(0x81a));
    static [a0cE(0x24b)] = a0a2['generatePair']();
    static [a0cE(0xd13)]() {
        const dn = a0cE, a = {
                'yUHVn': dn(0xe5f),
                'REwzy': dn(0x81a),
                'MbGaw': 'kisama-ws-token-v1'
            };
        return a0k[dn(0x3a4)](a[dn(0x7f9)], Buffer[dn(0x5a6)](this[dn(0x6f1)], a['REwzy']))['update'](a['MbGaw'])['digest'](a[dn(0x4eb)]);
    }
    static [a0cE(0xbb6)]() {
        const dp = a0cE, a = {
                'bXifu': dp(0x81a),
                'aypVy': '🔄\x20[SECURITY]\x20临时密钥过期,\x20已轮换\x20SESSION_KEY\x20与控制端\x20Noise\x20密钥对\x20(合法控制端需重新认证获取\x20baseinfo\x20新密钥)'
            }, b = a0a2[dp(0xc9d)]();
        this[dp(0x24b)][dp(0x8de)] = b[dp(0x8de)], this['NOISE_KEY'][dp(0x934)][dp(0x4e9)] = b['control']['private_b64'], this['SESSION_KEY'] = a0k[dp(0x4ea)](0x20)['toString'](a[dp(0xd6d)]), this[dp(0x5f0)] = null, this['_status_cache_time'] = 0x0, a0R['warn'](a[dp(0x8c5)]);
    }
    static [a0cE(0x47b)] = {
        'controller': { 'private': this[a0cE(0x24b)][a0cE(0x8de)][a0cE(0x9ed)] },
        'agent': { 'public': this[a0cE(0x24b)][a0cE(0xdb2)][a0cE(0x6f0)] }
    };
    static [a0cE(0xce4)] = 0xe10;
    static [a0cE(0xb08)] = 0x1e;
    static ['BASEINFO_FAIL_BACKOFF'] = 0x3c;
    static [a0cE(0x49d)] = 0x1e;
    static [a0cE(0x8d6)] = null;
    static ['_baseinfo_p_promise'] = null;
    static ['_baseinfo_local_cache'] = null;
    static [a0cE(0xcd9)] = 0x0;
    static [a0cE(0x286)] = 0x0;
    static [a0cE(0x6cd)] = null;
    static [a0cE(0xd31)] = null;
    static [a0cE(0x73a)] = 0x0;
    static [a0cE(0x29d)] = 0x0;
    static [a0cE(0xa9f)] = null;
    static [a0cE(0x5f0)] = null;
    static [a0cE(0xd52)] = 0x0;
    static ['_status_fetch_promise'] = null;
    static ['_baseInfoNowMs']() {
        const dq = a0cE, a = {
                'JgeGT': function (b, c) {
                    return b / c;
                }
            };
        return Number(a[dq(0xc19)](process['hrtime'][dq(0x156)](), 0xf4240n));
    }
    static [a0cE(0x39e)](a) {
        return a ? { ...a } : null;
    }
    static async ['getBaseInfoP']() {
        const dr = a0cE;
        if (this[dr(0x8d6)])
            return this['_cloneBaseInfoPart'](this[dr(0x8d6)]);
        return !this[dr(0x1da)] && (this['_baseinfo_p_promise'] = new a0aq()[dr(0x341)]()[dr(0xea2)](a => {
            const ds = dr;
            return a0R[ds(0x8ab)](ds(0xcc2)[ds(0xbbc)](a[ds(0x921)]), 0x1), a0aq['staticFallback']();
        })['then'](a => {
            const dt = dr;
            return this[dt(0x8d6)] = a, a;
        })[dr(0xc98)](() => {
            const du = dr;
            this[du(0x1da)] = null;
        })), this[dr(0x39e)](await this[dr(0x1da)]);
    }
    static async [a0cE(0x47e)](a) {
        const dv = a0cE, b = {
                'SzXGB': function (d, f) {
                    return d < f;
                },
                'BEDsp': function (d, f) {
                    return d * f;
                },
                'pgDTy': function (d, f) {
                    return d - f;
                }
            }, c = this[dv(0xa1a)]();
        if (this[dv(0xe8a)] && b['SzXGB'](c - this[dv(0xcd9)], b[dv(0x72a)](this['BASEINFO_LOCAL_TTL'], 0x3e8)))
            return this[dv(0x39e)](this[dv(0xe8a)]);
        if (this[dv(0x286)] && b[dv(0x663)](b[dv(0x502)](c, this[dv(0x286)]), b[dv(0x72a)](this['BASEINFO_FAIL_BACKOFF'], 0x3e8)))
            return this['_cloneBaseInfoPart'](this['_baseinfo_local_cache'] || a0aq[dv(0x2f4)]());
        return !this[dv(0x6cd)] && (this[dv(0x6cd)] = new a0aq()['collectLocalInfo'](a)[dv(0xa19)](d => {
            const dw = dv;
            return this[dw(0xe8a)] = d, this[dw(0xcd9)] = this[dw(0xa1a)](), this['_baseinfo_local_fail_time'] = 0x0, d;
        })[dv(0xea2)](d => {
            const dx = dv;
            return a0R['debug'](dx(0x7c2)[dx(0xbbc)](d[dx(0x921)]), 0x1), this[dx(0x286)] = this[dx(0xa1a)](), this[dx(0xe8a)] || a0aq['localFallback']();
        })[dv(0xc98)](() => {
            const dy = dv;
            this[dy(0x6cd)] = null;
        })), this[dv(0x39e)](await this[dv(0x6cd)]);
    }
    static async [a0cE(0xc8c)]() {
        const dz = a0cE, a = {
                'uGqnv': function (c, d) {
                    return c < d;
                },
                'ILvIC': function (c, d) {
                    return c - d;
                },
                'fmgrq': function (c, d) {
                    return c * d;
                }
            }, b = this[dz(0xa1a)]();
        if (this[dz(0xd31)] && a[dz(0xac6)](a['ILvIC'](b, this[dz(0x73a)]), a[dz(0xa7a)](this[dz(0xce4)], 0x3e8)))
            return this[dz(0x39e)](this[dz(0xd31)]);
        if (this[dz(0x29d)] && a['uGqnv'](a['ILvIC'](b, this[dz(0x29d)]), this[dz(0xb9c)] * 0x3e8))
            return this[dz(0x39e)](this['_baseinfo_net_cache'] || a0aq['netFallback']());
        return !this[dz(0xa9f)] && (this['_baseinfo_net_promise'] = new a0aq()[dz(0xe60)]()[dz(0xa19)](c => {
            const dA = dz;
            return this['_baseinfo_net_cache'] = c, this[dA(0x73a)] = this[dA(0xa1a)](), this[dA(0x29d)] = 0x0, c;
        })['catch'](c => {
            const dB = dz;
            return a0R[dB(0x8ab)](dB(0x705)[dB(0xbbc)](c[dB(0x921)]), 0x1), this[dB(0x29d)] = this[dB(0xa1a)](), this['_baseinfo_net_cache'] || a0aq['netFallback']();
        })[dz(0xc98)](() => {
            this['_baseinfo_net_promise'] = null;
        })), this[dz(0x39e)](await this[dz(0xa9f)]);
    }
    static ['_getConfigValue'](a, b) {
        const dC = a0cE, c = { 'dhihu': dC(0xa4b) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[dC(0x3ec)](__dirname, b);
        if (a0l[dC(0x493)](f))
            try {
                return a0l[dC(0x755)](f, c[dC(0x86b)])[dC(0x1b7)]();
            } catch (g) {
            }
        return '';
    }
    static ['validate']() {
        const dD = a0cE, a = {
                'VokzK': dD(0xdd1),
                'KdlgI': function (b, c) {
                    return b > c;
                },
                'njdWk': dD(0xd3e),
                'VkgxX': '\x0a💡\x20解决方法:',
                'unmnq': dD(0xbe8),
                'UweVn': dD(0xdd3)
            };
        if (!this[dD(0x77a)]) {
            const b = [];
            !this[dD(0x1dc)] && b[dD(0x6b2)](a[dD(0xd53)]), !this[dD(0xae1)] && b[dD(0x6b2)](dD(0x96f)), a[dD(0xb48)](b[dD(0x5bd)], 0x0) && (a0R['error'](a[dD(0xdc5)]), b[dD(0x815)](c => a0R[dD(0x7c7)](dD(0x3ea)['concat'](c))), a0R[dD(0x8ab)](a[dD(0x2a4)]), a0R[dD(0x8ab)](a[dD(0x557)]), a0R[dD(0x8ab)](a['UweVn']), process[dD(0x7b4)](0x1));
        }
    }
    static [a0cE(0xbf6)](a = {}) {
        const dE = a0cE, b = {
                'jqWOY': function (c, d) {
                    return c !== d;
                },
                'MymNA': function (c, d, f) {
                    return c(d, f);
                },
                'OkZRE': function (c, d) {
                    return c !== d;
                },
                'syrWc': function (c, d) {
                    return c(d);
                },
                'opHAk': function (c, d) {
                    return c(d);
                },
                'xsBKe': function (c, d) {
                    return c(d);
                },
                'PGkEP': function (c, d) {
                    return c !== d;
                }
            };
        if (!a)
            return;
        b[dE(0x84d)](a[dE(0x337)], undefined) && b[dE(0x84d)](a[dE(0x337)], null) && (this['PORT'] = b[dE(0xecb)](parseInt, String(a[dE(0x337)]), 0xa));
        a[dE(0x1dc)] && (this[dE(0x1dc)] = a[dE(0x1dc)][dE(0x1b7)]());
        a[dE(0xae1)] && (this[dE(0xae1)] = a[dE(0xae1)][dE(0x1b7)]());
        if (b[dE(0xebc)](a['KMODE'], undefined) && b[dE(0x84d)](a[dE(0x840)], null)) {
            const c = b['syrWc'](String, a[dE(0x840)])[dE(0x1b7)]();
            if (/^(?:0|1|2|2q|2quic|3)$/i['test'](c)) {
                const d = c[dE(0x846)]();
                this[dE(0x840)] = d[dE(0x2da)]('2') ? '2' : d, this[dE(0x416)] = /^2q(?:uic)?$/[dE(0xbd9)](d);
            } else
                this[dE(0x840)] = '0', this[dE(0x416)] = ![], a0R[dE(0xa10)]('[KMODE]\x20⚠️\x20非法\x20KMODE\x20入参\x20('['concat'](b[dE(0x52c)](String, a[dE(0x840)]), dE(0xc85)));
        }
        a['KNAME'] && String(a['KNAME'])[dE(0x1b7)]() && (this['KNAME'] = b[dE(0x27f)](String, a[dE(0xdb6)])['trim']()), a['KNAME_KEY'] && String(a[dE(0xb04)])['trim']() && (this[dE(0xb04)] = String(a['KNAME_KEY'])[dE(0x1b7)]()), a[dE(0x4ae)] && String(a[dE(0x4ae)])['trim']() && (this[dE(0x4ae)] = b[dE(0x3b2)](String, a[dE(0x4ae)])[dE(0x1b7)]()), b[dE(0x5d6)](a[dE(0x347)], undefined) && a[dE(0x347)] !== null && (this[dE(0x347)] = String(a[dE(0x347)])[dE(0x1b7)]()['replace'](/\/+$/, '')), a[dE(0xbd2)] !== undefined && b[dE(0x5d6)](a['KHUB_PUBLIC_URL'], null) && (this[dE(0xbd2)] = b[dE(0x52c)](String, a['KHUB_PUBLIC_URL'])[dE(0x1b7)]()['replace'](/\/+$/, '')), a[dE(0x340)] !== undefined && b['jqWOY'](a[dE(0x340)], null) && (this[dE(0x340)] = b[dE(0x3b2)](a0a6, String(a[dE(0x340)])));
    }
}
const a0ag = require(a0cE(0xe20)), a0ah = require(a0cE(0x280));
class a0ai {
    static ['TTL_MIN'] = 0x1e;
    static ['TTL_MAX'] = 0x258;
    static [a0cE(0xc70)] = 0x3c;
    static [a0cE(0x499)] = 0x3c;
    static [a0cE(0xae7)] = 0x12c;
    static [a0cE(0x90c)];
    static [a0cE(0xbf7)] = null;
    constructor(a = {}) {
        const dF = a0cE, b = (a[dF(0xa50)] && a['servers'][dF(0x5bd)] ? a[dF(0xa50)] : a0af['DOH_SERVERS_DEFAULT'])[dF(0x8ac)](c => String(c)[dF(0x1b7)]()[dF(0xd15)](/\/+$/, ''))[dF(0x290)](Boolean);
        this['servers'] = b[dF(0x5bd)] ? b : [...a0af['DOH_SERVERS_DEFAULT']], this[dF(0x494)] = a[dF(0x494)] || 0xbb8, this['queryFn'] = a['queryFn'] || ((c, d, f) => this[dF(0xb4d)](c, d, f)), this[dF(0xb52)] = new Map(), this[dF(0xddf)] = new Map(), this[dF(0x869)] = this[dF(0xa50)][dF(0x8ac)](() => 0x0), this['lastFallbackWarn'] = 0x0;
    }
    async ['resolve'](a, b) {
        const dG = a0cE, c = {
                'ehEsH': function (j, k) {
                    return j === k;
                },
                'JJutf': function (j, k) {
                    return j * k;
                },
                'hbrLn': function (j, k) {
                    return j + k;
                },
                'TTOSH': dG(0x339),
                'UiLkX': function (j, k) {
                    return j || k;
                },
                'yZXlO': function (j, k) {
                    return j > k;
                }
            };
        b = c[dG(0x571)](b, 0x0);
        const d = ''[dG(0xbbc)](a, '|')[dG(0xbbc)](b), f = Date[dG(0x1cf)](), g = this[dG(0xb52)]['get'](d);
        if (g && c['yZXlO'](g['expire'], f))
            return g[dG(0xba4)][dG(0x523)]();
        const h = this[dG(0xddf)][dG(0x8f4)](d);
        if (h)
            return h;
        const i = ((async () => {
            const dH = dG, j = await this[dH(0xb87)](a, b);
            if (c[dH(0xe47)](j[dH(0x4f2)], 'ok') && j[dH(0xba4)][dH(0x5bd)]) {
                const k = c[dH(0xda9)](Math['min'](Math[dH(0x357)](j[dH(0x864)], a0ai[dH(0xcfa)]), a0ai[dH(0x1e3)]), 0x3e8);
                return this[dH(0xb52)]['set'](d, {
                    'ips': j['ips'][dH(0x523)](),
                    'expire': c[dH(0xd44)](Date['now'](), k)
                }), j['ips']['slice']();
            }
            if (j[dH(0x4f2)] === c['TTOSH'])
                return this[dH(0xb52)]['set'](d, {
                    'ips': [],
                    'expire': c['hbrLn'](Date[dH(0x1cf)](), a0ai[dH(0xc70)] * 0x3e8)
                }), [];
            return null;
        })());
        this[dG(0xddf)][dG(0x9c3)](d, i);
        try {
            return await i;
        } finally {
            this[dG(0xddf)][dG(0x342)](d);
        }
    }
    async [a0cE(0xb87)](a, b) {
        const dI = a0cE, c = {
                'DRtBW': function (k, l) {
                    return k !== l;
                },
                'QJkJf': 'nxdomain',
                'wykJq': dI(0x7c7)
            }, d = [];
        if (c[dI(0xe4d)](b, 0x6))
            d[dI(0x6b2)]([
                0x1,
                0x4
            ]);
        if (c[dI(0xe4d)](b, 0x4))
            d[dI(0x6b2)]([
                0x1c,
                0x6
            ]);
        const f = {
            0x4: [],
            0x6: []
        };
        let g = ![], h = ![], i = ![], j = a0ai[dI(0x1e3)];
        for (const [k, l] of d) {
            try {
                const m = await this[dI(0x37d)](a, k);
                m[dI(0x4f2)] === 'ok' && m[dI(0xba4)]['length'] ? (g = !![], f[l] = m['ips'], j = Math['min'](j, m[dI(0x864)])) : h = !![];
            } catch (n) {
                i = !![];
            }
        }
        if (g)
            return {
                'status': 'ok',
                'ips': this[dI(0x5c6)](f[0x6], f[0x4]),
                'ttl': j
            };
        if (h && !i)
            return {
                'status': c[dI(0x360)],
                'ips': [],
                'ttl': 0x0
            };
        return {
            'status': c['wykJq'],
            'ips': [],
            'ttl': 0x0
        };
    }
    async ['queryOne'](a, b) {
        const dJ = a0cE, c = {
                'kCYMe': function (f, g) {
                    return f < g;
                },
                'bwWfh': function (f, g) {
                    return f + g;
                },
                'nIOHD': function (f, g) {
                    return f * g;
                },
                'BPKNu': dJ(0xca9),
                'VNMjG': function (f, g) {
                    return f === g;
                },
                'lhzRz': dJ(0x339),
                'IOnBa': function (f, g) {
                    return f !== g;
                },
                'jWZfC': function (f, g) {
                    return f !== g;
                },
                'lBsYF': dJ(0xcdb),
                'mMjFi': function (f, g, h) {
                    return f(g, h);
                },
                'SRGms': dJ(0xc91)
            }, d = a0ai[dJ(0x283)](a);
        for (let f = 0x0; c[dJ(0xbc3)](f, this[dJ(0xa50)][dJ(0x5bd)]); f++) {
            if (c['kCYMe'](Date[dJ(0x1cf)](), this[dJ(0x869)][f]))
                continue;
            let g;
            try {
                g = await this[dJ(0x65b)](this[dJ(0xa50)][f], d, b);
            } catch (l) {
                this['failUntil'][f] = c[dJ(0x974)](Date[dJ(0x1cf)](), c['nIOHD'](a0ai[dJ(0x499)], 0x3e8));
                continue;
            }
            const h = g && typeof g === c[dJ(0xde8)] ? g[dJ(0xc3e)] || 0x0 : 0x1;
            if (c[dJ(0x482)](h, 0x3))
                return {
                    'status': c['lhzRz'],
                    'ips': [],
                    'ttl': 0x0
                };
            if (c[dJ(0xe6b)](h, 0x0))
                continue;
            const j = [];
            let k = a0ai[dJ(0x1e3)];
            for (const m of g[dJ(0x28a)] || []) {
                if (!m || c[dJ(0xe6b)](m[dJ(0x3d4)], b))
                    continue;
                if (c[dJ(0x595)](typeof m[dJ(0xa96)], c[dJ(0xab8)]) || !a0ai[dJ(0xe0b)](m['data'], b))
                    continue;
                j[dJ(0x6b2)](m['data']);
                const n = c[dJ(0x8b9)](parseInt, m[dJ(0x186)], 0xa);
                if (Number[dJ(0xd58)](n))
                    k = Math['min'](k, n);
            }
            if (j['length'])
                return {
                    'status': 'ok',
                    'ips': [...new Set(j)],
                    'ttl': k
                };
            return {
                'status': c['lhzRz'],
                'ips': [],
                'ttl': 0x0
            };
        }
        throw new Error(c[dJ(0x718)]);
    }
    [a0cE(0xb4d)](a, b, c) {
        const dK = a0cE, d = {
                'DUPCF': dK(0xa4b),
                'OrKWv': function (f, g) {
                    return f(g);
                },
                'TFHiL': dK(0xa96),
                'tmyTO': dK(0x3a9),
                'CnzeY': 'GET',
                'ZWruG': dK(0x546),
                'XJdAP': 'timeout',
                'hOrTQ': dK(0x7c7)
            };
        return new Promise((f, g) => {
            const dL = dK, h = {
                    'rElHp': d[dL(0xc33)],
                    'AFlGN': function (j, k) {
                        const dM = dL;
                        return d[dM(0x30c)](j, k);
                    },
                    'kHuJy': function (j, k) {
                        return j !== k;
                    },
                    'vbwQQ': d['TFHiL'],
                    'OZlFd': d['tmyTO']
                }, i = a0h['request'](''[dL(0xbbc)](a, '?name=')[dL(0xbbc)](d['OrKWv'](encodeURIComponent, b), dL(0xb32))[dL(0xbbc)](c), {
                    'method': d['CnzeY'],
                    'timeout': this['timeoutMs'],
                    'headers': {
                        'accept': d[dL(0xcd5)],
                        'user-agent': 'kisama-agent/'['concat'](a0af[dL(0x292)])
                    }
                }, j => {
                    const dN = dL, k = {
                            'MmVOv': h[dN(0x843)],
                            'kcZUA': function (m, n) {
                                return h['AFlGN'](m, n);
                            }
                        };
                    if (h[dN(0xac4)](j[dN(0xa98)], 0xc8)) {
                        j[dN(0x632)](), h[dN(0x8a9)](g, new Error(dN(0x5de)[dN(0xbbc)](j[dN(0xa98)])));
                        return;
                    }
                    const l = [];
                    j['on'](h['vbwQQ'], m => l[dN(0x6b2)](m)), j['on'](h[dN(0x6b4)], () => {
                        const dO = dN;
                        try {
                            f(JSON[dO(0xea0)](Buffer[dO(0xbbc)](l)['toString'](k[dO(0xdfa)])));
                        } catch (m) {
                            k[dO(0x7d6)](g, m);
                        }
                    });
                });
            i['on'](d[dL(0xa57)], () => i[dL(0x2fe)](new Error(dL(0x673)))), i['on'](d[dL(0x642)], g), i[dL(0x3a9)]();
        });
    }
    ['warnFallback'](a) {
        const dP = a0cE, b = {
                'sVdRW': function (d, f) {
                    return d - f;
                }
            }, c = Date[dP(0x1cf)]();
        b[dP(0xe06)](c, this['lastFallbackWarn']) >= a0ai[dP(0xae7)] * 0x3e8 && (this[dP(0x896)] = c, a0R[dP(0xa10)](dP(0xbe9)[dP(0xbbc)](a, dP(0x52f))));
    }
    [a0cE(0x5c6)](a, b) {
        const dQ = a0cE, c = [...new Set(a)], d = [...new Set(b)];
        if (!c['length'])
            return d;
        if (!d[dQ(0x5bd)])
            return c;
        return this['ipv6Usable']() ? c[dQ(0xbbc)](d) : d[dQ(0xbbc)](c);
    }
    [a0cE(0xdd0)]() {
        const dR = a0cE, a = {
                'mbQKC': function (b, c) {
                    return b === c;
                }
            };
        if (a[dR(0x611)](a0ai['_ipv6Usable'], undefined))
            try {
                const b = a0ah[dR(0x4af)](dR(0xe24));
                b[dR(0x675)](), a0ai[dR(0x90c)] = !![];
            } catch (c) {
                a0ai[dR(0x90c)] = ![];
            }
        return a0ai[dR(0x90c)];
    }
    static [a0cE(0xe0b)](a, b) {
        const dS = a0cE, c = {
                'benkM': function (d, f) {
                    return d === f;
                },
                'DHCeZ': function (d, f) {
                    return d === f;
                }
            };
        return c[dS(0x38e)](a0i['isIP'](a), c[dS(0xbcd)](b, 0x1) ? 0x4 : 0x6);
    }
    static [a0cE(0x283)](a) {
        const dT = a0cE;
        if (/^[\x00-\x7F]*$/[dT(0xbd9)](a))
            return a;
        try {
            return new URL(dT(0x8af)[dT(0xbbc)](a))['hostname'];
        } catch (b) {
            return a;
        }
    }
}
const a0aj = a0ag[a0cE(0x85c)];
function a0ak(a, b) {
    const dU = a0cE, c = {
            'gZDNM': function (f, g) {
                return f(g);
            },
            'HxrzI': function (f, g) {
                return f === g;
            },
            'biQxK': dU(0x1fa),
            'iLGNQ': dU(0xcdb),
            'qLCQh': function (f, g) {
                return f || g;
            },
            'LzEkO': function (f, g) {
                return f === g;
            },
            'OWwVj': dU(0x9a5),
            'txPLt': function (f, g) {
                return f === g;
            },
            'GxrTi': dU(0x969),
            'kPkHX': dU(0x35f),
            'iyOlY': dU(0x5e0),
            'lKcnZ': dU(0xca9)
        }, d = b || a0aj;
    return function f(g, h, i) {
        const dW = dU, j = {
                'sWrFr': 'getaddrinfo',
                'rHfSH': function (n, o) {
                    const dV = a0b;
                    return c[dV(0x3a1)](n, o);
                }
            };
        c[dW(0x7ba)](typeof h, c[dW(0x813)]) && (i = h, h = {});
        if (typeof g !== c[dW(0xb72)] || !g || a0i['isIP'](g))
            return d[dW(0x319)](a0ag, g, h, i);
        const k = h || {};
        let l = typeof k === dW(0xca9) ? k['family'] || 0x0 : c[dW(0x779)](k, 0x0);
        if (c[dW(0x1b3)](l, dW(0x185)) || c[dW(0x1b3)](l, c[dW(0x26d)]))
            l = 0x4;
        else {
            if (c[dW(0x83d)](l, c[dW(0xc9f)]) || c[dW(0x83d)](l, c[dW(0xc69)]))
                l = 0x6;
            else {
                if (typeof l !== c['iyOlY'])
                    l = 0x0;
            }
        }
        const m = c[dW(0x83d)](typeof k, c[dW(0xe44)]) && !!k['all'];
        a['resolve'](g, l)[dW(0xa19)](n => {
            const dX = dW;
            if (n === null)
                return a[dX(0x822)](g), d[dX(0x319)](a0ag, g, h, i);
            if (!n['length']) {
                const o = new Error(dX(0xca3)[dX(0xbbc)](g, '\x20(secure\x20dns:\x20no\x20record)'));
                return o[dX(0x6af)] = dX(0x3be), o[dX(0xb9f)] = j['sWrFr'], o['hostname'] = g, j['rHfSH'](i, o);
            }
            m ? i(null, n[dX(0x8ac)](p => ({
                'address': p,
                'family': a0i[dX(0x1fe)](p)
            }))) : i(null, n[0x0], a0i['isIP'](n[0x0]));
        })[dW(0xea2)](n => i(n || new Error(dW(0xd24))));
    };
}
function a0al(a = null) {
    const dY = a0cE, b = {
            'Qgkkr': function (f, g) {
                return f(g);
            },
            'XRKlK': function (f, g) {
                return f === g;
            },
            'fVavo': function (f, g) {
                return f !== g;
            },
            'tEegS': function (f, g, h) {
                return f(g, h);
            }
        };
    if (a0ai['_globalHook'])
        return a0ai[dY(0xbf7)];
    const c = b[dY(0x46d)](String, b[dY(0x803)](a, null) ? a0af[dY(0x531)] : a)[dY(0x1b7)]()[dY(0x846)]();
    if (b[dY(0x412)](c, 'on'))
        return null;
    let d = null;
    return a0af['DOH_SERVERS'] && (d = a0af[dY(0x4be)]['split'](/[,\s]+/)['map'](f => f[dY(0x1b7)]())[dY(0x290)](Boolean)), a0ai[dY(0xbf7)] = new a0ai({ 'servers': d }), a0ag[dY(0x85c)] = b['tEegS'](a0ak, a0ai['_globalHook'], a0aj), a0R[dY(0x5a5)](dY(0x4e0)[dY(0xbbc)](a0ai[dY(0xbf7)][dY(0xa50)][dY(0x3ec)](',\x20'))), a0ai['_globalHook'];
}
a0al();
class a0am {
    constructor() {
        const dZ = a0cE;
        this[dZ(0x315)] = null, this['onExpired'] = null;
    }
    [a0cE(0x92c)](a) {
        const e0 = a0cE, b = {
                'kTota': function (c, d) {
                    return c === d;
                },
                'PEUuK': function (c, d) {
                    return c * d;
                },
                'NliAd': function (c, d) {
                    return c === d;
                },
                'uhthE': e0(0x1fa)
            };
        this[e0(0xb46)]();
        if (this[e0(0x315)]) {
            if (b['kTota'](this[e0(0x315)][e0(0x9de)], b['PEUuK'](a, 0xe10)))
                return this['_key'];
            const c = this[e0(0x315)][e0(0xc55)];
            this[e0(0x315)] = null, a0R[e0(0xa10)](e0(0x529)[e0(0xbbc)](c));
            if (b['NliAd'](typeof this[e0(0xc1b)], b[e0(0xe41)]))
                try {
                    this[e0(0xc1b)]();
                } catch (d) {
                    a0R['error'](e0(0x806)[e0(0xbbc)](d[e0(0x921)]));
                }
        }
        return this[e0(0x315)] = this['_generate'](a), a0R[e0(0x5a5)](e0(0x153)[e0(0xbbc)](this[e0(0x315)][e0(0xc55)], ',\x20有效期\x20')[e0(0xbbc)](a, '\x20小时')), this[e0(0x315)];
    }
    [a0cE(0x795)]() {
        const e1 = a0cE;
        this['_expireCurrent']();
        if (this[e1(0x315)])
            return this[e1(0x315)][e1(0xd5c)];
        return null;
    }
    [a0cE(0xb47)]() {
        const e2 = a0cE;
        this[e2(0xb46)]();
        if (this['_key'])
            return this['_key']['ecies_pub'];
        return null;
    }
    [a0cE(0xb46)]() {
        const e3 = a0cE, a = {
                'MZAxr': function (b, c) {
                    return b === c;
                },
                'ttEPl': 'function'
            };
        if (this[e3(0x315)] && this[e3(0x468)](this[e3(0x315)])) {
            const b = this[e3(0x315)][e3(0xc55)];
            this['_key'] = null, a0R['warn'](e3(0x4f9)[e3(0xbbc)](b));
            if (a[e3(0x93b)](typeof this[e3(0xc1b)], a[e3(0xe37)]))
                try {
                    this['onExpired']();
                } catch (c) {
                    a0R[e3(0x7c7)](e3(0xdf7)[e3(0xbbc)](c[e3(0x921)]));
                }
        }
    }
    ['_isExpired'](a) {
        const e4 = a0cE, b = {
                'cLTNA': function (c, d) {
                    return c / d;
                }
            };
        return Math[e4(0x513)](b[e4(0x67c)](Date[e4(0x1cf)](), 0x3e8)) >= a['expires_at'];
    }
    [a0cE(0x4fc)](a) {
        const e5 = a0cE, b = {
                'QVJGf': e5(0x69d),
                'BAbUG': e5(0x711),
                'iVwhj': e5(0x6d4),
                'MlNBN': e5(0xb3f),
                'eYefW': 'jwk',
                'dtjJs': function (o, p) {
                    return o - p;
                },
                'HQDIx': function (o, p) {
                    return o / p;
                },
                'doKJL': function (o, p) {
                    return o * p;
                },
                'AKfSD': e5(0x60f),
                'XgSks': function (o, p) {
                    return o + p;
                },
                'dEhJn': e5(0x89c),
                'BHDaG': e5(0x81a)
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[e5(0xb2f)]('ec', { 'namedCurve': b[e5(0xc09)] }), f = c[e5(0x537)]({
                'type': b['BAbUG'],
                'format': b[e5(0xe5a)]
            }), g = d[e5(0x537)]({
                'type': b['MlNBN'],
                'format': b[e5(0xe5a)]
            }), h = a0k[e5(0x4ea)](0x20), i = Buffer[e5(0x5a6)](a0B['getPublicKey'](h, ![])), j = c[e5(0x537)]({ 'format': b[e5(0x723)] }), k = d['export']({
                'type': b['MlNBN'],
                'format': e5(0x3d9)
            }), l = k[e5(0x516)](b[e5(0xb05)](k['length'], 0x41)), m = Math[e5(0x513)](b[e5(0x706)](Date['now'](), 0x3e8)), n = b[e5(0x5ee)](a, 0xe10);
        return {
            'key_id': a0k[e5(0x4ea)](0x8)['toString'](b[e5(0x90a)]),
            'created_at': m,
            'expires_at': b[e5(0x950)](m, n),
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h['toString'](b[e5(0x90a)]),
            'ecies_public_key': i[e5(0x7d1)](b[e5(0x90a)]),
            'ecdsa_private_hex': Buffer[e5(0x5a6)](j['d'], b['dEhJn'])['toString'](b[e5(0x90a)]),
            'ecdsa_public_b64': Buffer[e5(0x5a6)](a0A[e5(0x647)][e5(0x31b)](l)['toBytes'](!![]))[e5(0x7d1)](e5(0x81a)),
            'ecies_public_b64': Buffer[e5(0x5a6)](a0B[e5(0x506)](h, !![]))[e5(0x7d1)](b[e5(0xb27)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0an {
    constructor(a, b) {
        const e6 = a0cE, c = {
                'PPzZK': e6(0x9ac),
                'ITFpv': e6(0x81a),
                'PiOZH': function (d, f) {
                    return d(f);
                },
                'KEEuW': e6(0x92d),
                'xNkIp': e6(0xb79)
            };
        this['ecdsaPubkey'] = null, this[e6(0x1af)] = null;
        if (a)
            try {
                const d = a[e6(0x1b7)]();
                if (d['startsWith'](c['PPzZK']))
                    this[e6(0xe18)] = a0k[e6(0x406)](d);
                else {
                    const f = Buffer[e6(0x5a6)](d, c['ITFpv']), g = a0A[e6(0x647)]['fromBytes'](f), h = g[e6(0x21c)](![]), i = m => m[e6(0x7d1)]('base64')[e6(0xd15)](/\+/g, '-')[e6(0xd15)](/\//g, '_')['replace'](/=/g, ''), j = i(Buffer['from'](h['slice'](0x1, 0x21))), k = c[e6(0x426)](i, Buffer[e6(0x5a6)](h[e6(0x523)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[e6(0x3f7)],
                            'x': j,
                            'y': k
                        };
                    this['ecdsaPubkey'] = a0k[e6(0x406)]({
                        'key': l,
                        'format': c['xNkIp']
                    });
                }
            } catch (m) {
                a0R[e6(0x7c7)]('⚠️\x20ECDSA公钥加载失败:\x20'[e6(0xbbc)](m[e6(0x921)])), this[e6(0xe18)] = null;
            }
        if (b)
            try {
                this[e6(0x1af)] = a0w[e6(0x850)](b[e6(0x1b7)]());
            } catch (n) {
                a0R[e6(0xa10)](e6(0x3b7)[e6(0xbbc)](n[e6(0x921)]));
            }
    }
    ['verifySignature'](a, b, c, d, f, g, h = null) {
        const e7 = a0cE, i = {
                'gAGoW': function (j, k) {
                    return j(k);
                },
                'nwtON': function (j, k) {
                    return j / k;
                },
                'rLJqO': function (j, k) {
                    return j > k;
                },
                'lPxsS': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'jwTwS': e7(0xa81),
                'iVKTw': 'temp',
                'hSwFo': e7(0x9fd)
            };
        if (!this[e7(0xe18)])
            throw new Error('ECDSA\x20public\x20key\x20not\x20loaded');
        try {
            const j = i['gAGoW'](parseInt, f), k = Math[e7(0x513)](i[e7(0x23a)](Date['now'](), 0x3e8));
            if (i[e7(0xd29)](Math[e7(0x904)](k - j), a0af['TIMESTAMP_WINDOW']))
                throw new Error('Timestamp\x20expired:\x20diff='[e7(0xbbc)](Math[e7(0x904)](k - j), 's\x20>\x20')['concat'](a0af[e7(0x51f)], 's'));
            const l = i[e7(0x983)](a0ao, a, b, c, d, f);
            if (this[e7(0x6fd)](this[e7(0xe18)], l, g))
                return i['jwTwS'];
            if (h && this[e7(0x6fd)](h, l, g))
                return i[e7(0x4d0)];
            throw new Error(i[e7(0xa4e)]);
        } catch (m) {
            throw new Error(e7(0xd87)['concat'](m[e7(0x921)]));
        }
    }
    [a0cE(0x6fd)](a, b, c) {
        const e8 = a0cE;
        if (!a)
            return ![];
        try {
            const d = a0w[e8(0x850)](c), f = a0k[e8(0x79d)]('SHA256');
            return f[e8(0x370)](b), f[e8(0x5f8)](a, d);
        } catch (g) {
            return ![];
        }
    }
    ['encryptResponse'](a, b = null) {
        const e9 = a0cE, c = {
                'sBGnr': 'ECIES\x20public\x20key\x20not\x20initialized,\x20cannot\x20encrypt\x20response',
                'miMss': function (d, f, g) {
                    return d(f, g);
                },
                'HfTVS': e9(0x81a)
            };
        if (a0af['DEBUG'])
            return JSON['stringify'](a);
        if (!this['eciesPubkey'])
            throw new Error(c[e9(0xce2)]);
        try {
            const d = JSON['stringify'](a), f = Buffer['from'](d, e9(0xeb2)), g = b || Buffer[e9(0x5a6)](this[e9(0x1af)]), h = c[e9(0xbee)](a0v, g, f);
            return Buffer[e9(0x5a6)](h)[e9(0x7d1)](c[e9(0x36f)]);
        } catch (i) {
            throw new Error(e9(0x69e)[e9(0xbbc)](i[e9(0x921)]));
        }
    }
    ['decryptData'](a, b) {
        const ea = a0cE, c = {
                'INkrG': ea(0xac5),
                'PnbTr': 'base64',
                'UlsLT': ea(0xb57),
                'gVskR': ea(0x1e7),
                'gcXlM': ea(0xa4b)
            };
        if (!b || b[ea(0x5bd)] !== 0x20)
            throw new Error(c['INkrG']);
        try {
            const d = Buffer['from'](a, c[ea(0xaf5)])['toString'](ea(0xa4b)), f = JSON[ea(0xea0)](d);
            if (!f['nonce'] || !f[ea(0x7a9)] || !f[ea(0x7a0)])
                throw new Error(c[ea(0x80a)]);
            const g = Buffer['from'](f['nonce'], c[ea(0xaf5)]), h = Buffer[ea(0x5a6)](f['tag'], c[ea(0xaf5)]), i = Buffer[ea(0x5a6)](f[ea(0x7a0)], c[ea(0xaf5)]), j = a0k['createDecipheriv'](c[ea(0x2cf)], b, g);
            j[ea(0xe45)](h);
            let k = j[ea(0x370)](i, null, ea(0xa4b));
            return k += j[ea(0xd99)](c[ea(0x510)]), k;
        } catch (l) {
            throw new Error(ea(0x6e4)[ea(0xbbc)](l[ea(0x921)]));
        }
    }
    [a0cE(0xd43)](a, b) {
        const eb = a0cE, c = {
                'ASrtV': function (d, f) {
                    return d !== f;
                },
                'zcRHl': 'AES\x20Encrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'qTSqE': eb(0x1e7),
                'vybQW': eb(0x81a)
            };
        if (!b || c[eb(0xd19)](b['length'], 0x20))
            throw new Error(c[eb(0x7c4)]);
        try {
            const d = a0k['randomBytes'](0xc), f = a0k['createCipheriv'](c[eb(0x698)], b, d), g = Buffer['concat']([
                    f[eb(0x370)](a),
                    f['final']()
                ]), h = f['getAuthTag'](), i = {
                    'nonce': d[eb(0x7d1)]('base64'),
                    'tag': h[eb(0x7d1)](c['vybQW']),
                    'ciphertext': g['toString'](c['vybQW'])
                };
            return Buffer['from'](JSON[eb(0xb28)](i), eb(0xa4b))[eb(0x7d1)](c[eb(0x556)]);
        } catch (j) {
            throw new Error(eb(0xd82)[eb(0xbbc)](j['message']));
        }
    }
}
function a0ao(a, b, c, d, f) {
    const ec = a0cE, g = { 'ixpEu': ec(0x60f) };
    return !c && (c = a0k['createHash'](ec(0xe5f))['update'](Buffer['alloc'](0x0))[ec(0x9ef)](g[ec(0x17e)])), ''[ec(0xbbc)](a, '\x0a')[ec(0xbbc)](b, '\x0a')[ec(0xbbc)](c, '\x0a')['concat'](d, '\x0a')[ec(0xbbc)](f);
}
function a0ap(a, b = null) {
    const ed = a0cE, c = {
            'agGOe': function (d, f) {
                return d === f;
            },
            'eBFsI': ed(0x7c9),
            'yGUjX': 'false',
            'xftKt': ed(0x8ea),
            'psDHV': ed(0xac9),
            'lNpUg': ed(0x5c5),
            'gkWbD': function (d, f) {
                return d === f;
            },
            'cHvRn': ed(0xe12),
            'LtAVP': ed(0xcdb),
            'uqmDd': ed(0x989),
            'ijeCK': ed(0xa4b),
            'nJBoG': 'base64',
            'rHZXM': ed(0x488),
            'bnddY': ed(0xe62),
            'AXwKb': function (d) {
                return d();
            },
            'wRTyR': function (d, f) {
                return d === f;
            },
            'HwOnH': ed(0x670),
            'PLsbU': '/api/status',
            'SIKxb': function (d) {
                return d();
            },
            'xtXhE': ed(0xb30),
            'pxepJ': ed(0xbf3),
            'ZghJt': ed(0x64f),
            'KemSz': 'X-Timestamp',
            'iQlFI': ed(0x6fe),
            'BdmWR': 'X-Auth-Token',
            'uenVa': function (d) {
                return d();
            },
            'RWyPW': ed(0x3c3),
            'MitXn': function (d, f) {
                return d !== f;
            },
            'CAydO': '/api/fileraw',
            'VcszM': 'utf-8',
            'HDiTx': function (d, f) {
                return d > f;
            },
            'rTvCJ': 'sha256',
            'JkCOs': ed(0x60f),
            'jrxxe': ed(0xa81),
            'AAlDs': ed(0xb69),
            'BtQXe': function (d, f) {
                return d === f;
            }
        };
    return async (d, f, g) => {
        const ee = ed;
        if (d[ee(0x20c)][ee(0x2da)](c[ee(0xc52)]))
            return c[ee(0x4a2)](g);
        const h = f[ee(0x73c)];
        f[ee(0x73c)] = function (n) {
            const ef = ee;
            if (a0af[ef(0x77a)]) {
                const o = c[ef(0x6d7)](typeof n, ef(0xcdb)) ? n : Buffer['isBuffer'](n) ? n : JSON[ef(0xb28)](n);
                return f[ef(0x9c3)](c[ef(0xb68)], c['yGUjX']), f[ef(0x9c3)](c[ef(0x67b)], Buffer[ef(0xbc8)](o)[ef(0x7d1)]()), h[ef(0x319)](this, o);
            }
            if (f[ef(0x8f4)](c[ef(0xa25)]) && f[ef(0x8f4)](c[ef(0xa25)])['includes'](c[ef(0x8cd)]))
                try {
                    if (d[ef(0xc4d)]) {
                        let p;
                        if (c[ef(0x5cf)](d['path'], c['cHvRn'])) {
                            const q = c['agGOe'](typeof n, c[ef(0x388)]) ? JSON[ef(0xea0)](n) : n;
                            let r = null;
                            d[ef(0x7c8)] === c[ef(0x18a)] && b && (r = b[ef(0xb47)]());
                            const s = a[ef(0x50e)](q, r);
                            p = c['agGOe'](typeof s, c['LtAVP']) ? s : JSON['stringify'](s);
                        } else {
                            const t = Buffer[ef(0x3b0)](n) ? n : c['gkWbD'](typeof n, c[ef(0x388)]) ? Buffer[ef(0x5a6)](n, ef(0xa4b)) : Buffer['from'](JSON['stringify'](n), c['ijeCK']);
                            p = a[ef(0xd43)](t, Buffer['from'](a0af[ef(0x6f1)], c[ef(0x8b3)]));
                        }
                        return f[ef(0x9c3)](ef(0x7c9), c[ef(0xd0e)]), f[ef(0x9c3)]('x-agent-version', a0af[ef(0x292)]), f[ef(0x9c3)](c['xftKt'], Buffer['byteLength'](p, ef(0xa4b))[ef(0x7d1)]()), h['call'](this, p);
                    } else {
                        const u = typeof n === ef(0xcdb) ? n : JSON[ef(0xb28)](n);
                        return f[ef(0x9c3)](c[ef(0x67b)], Buffer['byteLength'](u, ef(0xa4b))[ef(0x7d1)]()), h[ef(0x319)](this, u);
                    }
                } catch (v) {
                    if (!f[ef(0xbc0)]) {
                        const w = JSON[ef(0xb28)]({ 'error': ef(0x212)[ef(0xbbc)](v[ef(0x921)]) });
                        return f[ef(0x4f2)](0x1f4), f[ef(0x9c3)](c[ef(0xa25)], 'application/json'), f[ef(0x9c3)](c['xftKt'], Buffer['byteLength'](w, c[ef(0x866)])[ef(0x7d1)]()), h[ef(0x319)](this, w);
                    }
                    throw v;
                }
            return h[ef(0x319)](this, n);
        };
        const i = f[ee(0x3a9)];
        f[ee(0x3a9)] = function (...n) {
            const eg = ee;
            return a0af[eg(0x77a)] && !f['get'](c[eg(0xb68)]) && f[eg(0x9c3)](c[eg(0xb68)], c[eg(0x247)]), i[eg(0xde9)](this, n);
        };
        if (c[ee(0xa76)](d[ee(0xed6)], 'OPTIONS') || c[ee(0xa76)](d['method'], c['HwOnH']))
            return a0af['DEBUG'] && f[ee(0x9c3)](ee(0x7c9), ee(0x543)), c[ee(0x4a2)](g);
        d[ee(0xc4d)] = ![];
        const j = [
            c['cHvRn'],
            c[ee(0x767)]
        ];
        if (a0af[ee(0x77a)])
            return d[ee(0xc4d)] = !![], c[ee(0x97c)](g);
        const k = d['headers'][c[ee(0x327)]] || d[ee(0x5c2)][c[ee(0xa95)]], l = d[ee(0x5c2)][c['ZghJt']] || d['headers'][c[ee(0xba3)]], m = d[ee(0x5c2)][c[ee(0xeba)]] || d[ee(0x5c2)][c[ee(0x603)]];
        if (!k || !l || !m)
            return j[ee(0x18c)](d[ee(0x20c)]) ? c[ee(0xa43)](g) : f[ee(0x4f2)](0x191)[ee(0xcfe)]({ 'error': c['RWyPW'] });
        try {
            let n = Buffer[ee(0xd4a)](0x0);
            if (c[ee(0x213)](d['path'], c[ee(0x7d4)])) {
                if (Buffer[ee(0x3b0)](d['body']))
                    n = d[ee(0xbd5)];
                else {
                    if (c[ee(0xa76)](typeof d[ee(0xbd5)], 'string'))
                        n = Buffer['from'](d[ee(0xbd5)], c[ee(0x862)]);
                }
            }
            const o = c[ee(0x69a)](n['length'], 0x0) ? a0k[ee(0x5fd)](c[ee(0xa65)])[ee(0x370)](n)[ee(0x9ef)](c[ee(0xd34)]) : '', p = b ? b[ee(0x795)]() : null, q = a[ee(0xe22)](d[ee(0xed6)], d['path'], o, k, l, m, p);
            d['is_authenticated'] = !![], d[ee(0x7c8)] = q === c['uqmDd'] ? c[ee(0x18a)] : c[ee(0xa72)];
        } catch (r) {
            return j[ee(0x18c)](d['path']) ? g() : f[ee(0x4f2)](0x191)[ee(0xcfe)]({ 'error': ee(0xd87)['concat'](r[ee(0x921)]) });
        }
        if (d[ee(0xbd5)] && c[ee(0xa76)](typeof d[ee(0xbd5)], c[ee(0x388)])) {
            const s = (d[ee(0x5c2)][ee(0x8e5)] || '')[ee(0x846)]() === c['rHZXM'];
            try {
                if (s && d['is_authenticated']) {
                    const t = Buffer[ee(0x5a6)](a0af['SESSION_KEY'], ee(0x81a)), u = a[ee(0xa0d)](d[ee(0xbd5)], t);
                    d['body'] = JSON[ee(0xea0)](u);
                } else {
                    if (d[ee(0xbd5)][ee(0x2da)](c[ee(0x304)])) {
                        const v = Buffer['from'](d[ee(0xbd5)], c[ee(0x8b3)])[ee(0x7d1)](c[ee(0x862)]);
                        d[ee(0xbd5)] = JSON['parse'](v);
                    } else {
                        if (d[ee(0xbd5)]['trim']()[ee(0x2da)]('{') || d[ee(0xbd5)]['trim']()[ee(0x2da)]('['))
                            d['body'] = JSON[ee(0xea0)](d[ee(0xbd5)]);
                        else {
                            if (c[ee(0x6c9)](d[ee(0xbd5)][ee(0x1b7)](), ''))
                                d['body'] = {};
                        }
                    }
                }
            } catch (w) {
                return a0R[ee(0x7c7)]('💥\x20[Body\x20Parse\x20Error]:\x20'[ee(0xbbc)](w[ee(0x921)])), f[ee(0x4f2)](0x190)[ee(0xcfe)]({ 'error': ee(0xb0f)['concat'](w['message']) });
            }
        }
        g();
    };
}
class a0aq {
    constructor() {
        const eh = a0cE, a = {
                'oGBtQ': function (b, c) {
                    return b / c;
                }
            };
        this[eh(0x47d)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[eh(0x804)] = 0x0, this[eh(0xa53)] = 0x0, this[eh(0xed5)] = a[eh(0xc4f)](Date[eh(0x1cf)](), 0x3e8);
    }
    async ['getContainerMemory']() {
        const ei = a0cE, a = {
                'JpouC': ei(0x677),
                'XFfMT': 'utf8',
                'AuSJl': ei(0x357),
                'WdVKM': function (d, f, g) {
                    return d(f, g);
                },
                'xkIrq': ei(0x4c8),
                'QvLbk': function (d, f, g) {
                    return d(f, g);
                },
                'iPurJ': ei(0x8d4),
                'YyJfP': ei(0xac1),
                'gHMha': function (d, f) {
                    return d > f;
                },
                'qWyjH': function (d, f) {
                    return d === f;
                },
                'zjtfk': function (d, f) {
                    return d(f);
                },
                'okxKS': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[ei(0x40b)](a[ei(0x2ec)], a[ei(0x838)]))[ei(0x1b7)]();
            b = d === a[ei(0x811)] ? null : parseInt(d, 0xa), c = a['WdVKM'](parseInt, (await a0m[ei(0x40b)](a['xkIrq'], a[ei(0x838)]))[ei(0x1b7)](), 0xa);
        } catch {
            try {
                b = a['QvLbk'](parseInt, (await a0m[ei(0x40b)](a[ei(0x9a7)], a[ei(0x838)]))[ei(0x1b7)](), 0xa), c = a[ei(0xda7)](parseInt, (await a0m[ei(0x40b)](a[ei(0xee2)], a[ei(0x838)]))[ei(0x1b7)](), 0xa);
                if (a[ei(0xa3a)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u[ei(0xaac)]();
                b = f['total'], c = f[ei(0xb31)];
            }
        }
        if (a[ei(0x71d)](b, null)) {
            const g = await a0u[ei(0xaac)]();
            b = g[ei(0x8fe)], (c === null || a[ei(0x391)](isNaN, c)) && (c = g[ei(0xb31)]);
        }
        return {
            'total': b,
            'used': c,
            'available': b - c,
            'free': a['okxKS'](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0cE(0xaf0)]() {
        const ej = a0cE, a = await this[ej(0x341)](), b = await this[ej(0x7e5)](a[ej(0xe82)]), c = await this[ej(0xe60)](), d = a0aq[ej(0x300)](a, b, c);
        return a0R['debug'](ej(0xd78)[ej(0xbbc)](JSON[ej(0xb28)](d, null, 0x2)), 0x1), d;
    }
    static ['assembleBaseInfo'](a, b, c) {
        const ek = a0cE;
        return {
            'arch': a[ek(0xace)],
            'cpu_cores': a[ek(0x5d9)],
            'cpu_name': a[ek(0x61b)],
            'disk_total': b[ek(0x79c)],
            'gpu_name': a['gpu_name'],
            'ipv4': c[ek(0x9a5)] ?? null,
            'ipv6': c[ek(0x35f)] ?? null,
            'mem_total': b[ek(0xba5)],
            'os': a['os'],
            'kernel_version': a[ek(0xb98)],
            'swap_total': b['swap_total'],
            'version': a['version'],
            'virtualization': a[ek(0xe82)],
            'marks': Array[ek(0xaeb)](a[ek(0x901)]) ? [...a[ek(0x901)]] : []
        };
    }
    static [a0cE(0xc77)]() {
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0af['AGENT_VERSION'],
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
    static [a0cE(0x6e6)]() {
        return {
            'ipv4': null,
            'ipv6': null
        };
    }
    async [a0cE(0x341)]() {
        const el = a0cE;
        let a = {}, b = {};
        try {
            a = await a0u[el(0x7bc)]();
        } catch (d) {
            a0R[el(0x8ab)](el(0x16a)[el(0xbbc)](d[el(0x921)]), 0x1);
        }
        try {
            b = await a0u[el(0xa08)]();
        } catch (f) {
            a0R['debug']('获取\x20OS\x20信息失败:\x20'[el(0xbbc)](f[el(0x921)]), 0x1);
        }
        let c = '';
        try {
            c = await this[el(0xe6c)]();
        } catch (g) {
            a0R['debug'](el(0x5b6)['concat'](g[el(0x921)]), 0x1);
        }
        return {
            'arch': a0p[el(0xace)]() || '',
            'cpu_cores': a['cores'] || 0x0,
            'cpu_name': a['brand'] || '',
            'gpu_name': '',
            'os': ''['concat'](b[el(0x799)] || '', '\x20')[el(0xbbc)](b[el(0x592)] || '')[el(0x1b7)](),
            'kernel_version': b[el(0x448)] || '',
            'version': a0af[el(0x292)],
            'virtualization': c,
            'marks': this['detectMarks']()
        };
    }
    async [a0cE(0x7e5)](a) {
        const em = a0cE;
        let b = 0x0;
        try {
            b = (await a0u['fsSize']())[0x0]?.['size'] || 0x0;
        } catch (d) {
            a0R[em(0x8ab)]('获取磁盘总容量失败:\x20'[em(0xbbc)](d[em(0x921)]), 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[em(0xe17)]() || c;
        } catch (f) {
            a0R[em(0x8ab)](em(0xd26)[em(0xbbc)](f[em(0x921)]), 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c[em(0x8fe)] || 0x0,
            'swap_total': c[em(0x877)] || 0x0
        };
    }
    async ['collectNetInfo']() {
        const en = a0cE, a = {
                'MDnie': en(0xd27),
                'YjoNY': function (d, f) {
                    return d === f;
                }
            }, [b, c] = await Promise[en(0x303)]([
                this[en(0xe03)](),
                this['getPublicIpV6']()
            ]);
        if (b[en(0x4f2)] === a[en(0xbf1)])
            a0R[en(0x8ab)](en(0x9e1)[en(0xbbc)](b[en(0x39f)]), 0x1);
        if (c[en(0x4f2)] === a[en(0xbf1)])
            a0R[en(0x8ab)]('获取\x20IPv6\x20失败:\x20'[en(0xbbc)](c[en(0x39f)]), 0x1);
        return {
            'ipv4': b[en(0x4f2)] === 'fulfilled' ? b[en(0xc3b)] : null,
            'ipv6': a[en(0xd02)](c[en(0x4f2)], en(0x2f9)) ? c['value'] : null
        };
    }
    static ['MARKS_PROC_ROOT'] = a0cE(0x9e5);
    static ['MARKS_DEV_ROOT'] = a0cE(0xadd);
    static [a0cE(0x861)] = a0cE(0x64d);
    static [a0cE(0x89a)] = a0cE(0x573);
    static [a0cE(0xcdc)] = '/';
    ['detectMarks']() {
        const eo = a0cE, a = {
                'bVwZO': function (d, f) {
                    return d === f;
                },
                'UPbKq': eo(0x2a0),
                'iVCfe': eo(0x868),
                'akFwx': eo(0xcbe),
                'ysnmp': function (d) {
                    return d();
                },
                'vzaJO': 'kstore',
                'RdDwm': 'kmode1',
                'UDpxJ': eo(0xc58),
                'ciWIZ': 'kmode3',
                'bBPPY': eo(0x243)
            }, b = [];
        if (a[eo(0x612)](process[eo(0x772)], 'linux')) {
            const d = [
                [
                    a[eo(0xdca)],
                    () => this['_markRoot']()
                ],
                [
                    a['iVCfe'],
                    () => this[eo(0x31a)]()
                ],
                [
                    eo(0xe1f),
                    () => this['_markPterodactyl']()
                ],
                [
                    a['akFwx'],
                    () => this['_markSystemd']()
                ],
                [
                    eo(0x971),
                    () => this['_markFuse']()
                ]
            ];
            for (const [f, g] of d) {
                try {
                    if (a['ysnmp'](g))
                        b[eo(0x6b2)](f);
                } catch (h) {
                    a0R[eo(0x8ab)]('marks\x20探测失败\x20['[eo(0xbbc)](f, eo(0x74f))['concat'](h['message']), 0x1);
                }
            }
        }
        const c = [
            [
                a[eo(0x164)],
                () => this['_markKstore']()
            ],
            [
                a['RdDwm'],
                () => this[eo(0xbef)]()
            ],
            [
                a[eo(0x894)],
                () => this[eo(0x737)]()
            ],
            [
                a[eo(0x9eb)],
                () => this[eo(0x9e8)]()
            ]
        ];
        for (const [i, j] of c) {
            try {
                if (a[eo(0x6f5)](j))
                    b[eo(0x6b2)](i);
            } catch (k) {
                a0R[eo(0x8ab)](eo(0x720)[eo(0xbbc)](i, eo(0x74f))[eo(0xbbc)](k[eo(0x921)]), 0x1);
            }
        }
        return a0R['debug']('marks\x20命中:\x20'[eo(0xbbc)](b[eo(0x3ec)](',') || a[eo(0xcf8)]), 0x1), b;
    }
    [a0cE(0x4e5)]() {
        const ep = a0cE;
        return a0av[ep(0x916)]['enabled'] === !![];
    }
    [a0cE(0xbef)]() {
        const eq = a0cE, a = {
                'PonLo': function (b, c) {
                    return b === c;
                }
            };
        return a[eq(0x687)](a0af['KMODE'], '1');
    }
    [a0cE(0x737)]() {
        const er = a0cE, a = {
                'GdGlR': function (b, c) {
                    return b === c;
                }
            };
        return a[er(0x3b5)](a0af[er(0x840)], '2');
    }
    ['_markKmode3']() {
        const es = a0cE;
        return a0af[es(0x840)] === '3';
    }
    [a0cE(0x2ab)]() {
        const et = a0cE, a = {
                'CsQTE': function (b, c) {
                    return b !== c;
                },
                'KFGrm': et(0x1fa),
                'sULkA': function (b, c) {
                    return b === c;
                }
            };
        if (a[et(0x408)](typeof process['geteuid'], a[et(0x82b)]) || a[et(0x408)](typeof process[et(0x633)], a['KFGrm']))
            return ![];
        return a['sULkA'](process['geteuid'](), 0x0) && a['sULkA'](process[et(0x633)](), 0x0);
    }
    [a0cE(0x31a)]() {
        const eu = a0cE, a = { 'fDCha': eu(0x868) };
        return a0aq[eu(0x540)](a0o[eu(0x3ec)](a0aq[eu(0xc96)], a[eu(0x873)]), 0xa, 0xe8);
    }
    [a0cE(0x170)]() {
        const ev = a0cE, a = {
                'pRqTa': ev(0x971),
                'TTzjV': ev(0xb29),
                'CeGoA': ev(0xaaf),
                'YAJuZ': 'bin/fusermount',
                'nBTHm': function (b, c) {
                    return b & c;
                }
            };
        if (!a0aq[ev(0x540)](a0o[ev(0x3ec)](a0aq[ev(0xc96)], a[ev(0x461)]), 0xa, 0xe5))
            return ![];
        if (this[ev(0x54d)](0x15))
            return !![];
        for (const b of [
                a[ev(0x640)],
                a[ev(0x8c9)],
                'usr/bin/fusermount',
                a[ev(0xb37)]
            ]) {
            try {
                const c = a0l[ev(0x719)](a0o[ev(0x3ec)](a0aq[ev(0xcdc)], b));
                if (c[ev(0xa60)]() && a['nBTHm'](c[ev(0x6ba)], 0x800) && c[ev(0x6ba)] & 0x49)
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    [a0cE(0x379)]() {
        const ew = a0cE, a = {
                'gKWZC': ew(0xbe4),
                'hkRKW': ew(0x29f),
                'XGvcQ': ew(0xb2e),
                'eKlls': ew(0xa4b),
                'vxraJ': ew(0x578),
                'QlJLl': function (g, h) {
                    return g !== h;
                },
                'vNDIx': ew(0x1fa),
                'frfXN': ew(0x6b3),
                'zrxeJ': function (g, h) {
                    return g > h;
                },
                'NhIQs': function (g, h) {
                    return g === h;
                },
                'UQCuz': ew(0xadf)
            };
        if (a0aq[ew(0xb4a)](a0o[ew(0x3ec)](a0aq['MARKS_PROC_ROOT'], a[ew(0xb40)], a[ew(0xd28)]), Buffer['from'](a[ew(0x834)])))
            return !![];
        for (const g of [
                a[ew(0xb40)],
                '1'
            ]) {
            const h = a0aq[ew(0xe3b)](a0o[ew(0x3ec)](a0aq[ew(0xb58)], g, ew(0x458)));
            if (!h)
                continue;
            const i = h['toString'](a[ew(0xaa9)])[ew(0xa24)]('\x00'), j = i[ew(0x71b)](l => l[ew(0x2da)](ew(0x71f))), k = i['some'](l => l[ew(0x2da)](ew(0x3c2)));
            if (j && k)
                return !![];
        }
        const b = a0aq[ew(0xe3b)](a0o['join'](a0aq[ew(0x861)], a[ew(0xd36)]));
        if (!b)
            return ![];
        const c = b[ew(0x7d1)](a['eKlls'])[ew(0x1b7)]()[ew(0x846)]();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/['test'](c))
            return ![];
        try {
            if (!a0l['statSync'](a0o[ew(0x3ec)](a0aq['MARKS_ROOT'], 'home', ew(0xe3a)))[ew(0xd9a)]())
                return ![];
        } catch {
            return ![];
        }
        if (a[ew(0xa0b)](typeof process[ew(0x751)], a[ew(0x9f9)]))
            return ![];
        const d = process['geteuid'](), f = a0aq[ew(0xe3b)](a0o[ew(0x3ec)](a0aq[ew(0x861)], a[ew(0xa85)]));
        if (!f)
            return ![];
        for (const l of f[ew(0x7d1)](a['eKlls'])[ew(0xa24)]('\x0a')) {
            const m = l[ew(0xa24)](':');
            if (a[ew(0x814)](m[ew(0x5bd)], 0x2) && a[ew(0x7b1)](Number(m[0x2]), d))
                return ![];
        }
        return a0l[ew(0x493)](a0o[ew(0x3ec)](a0aq[ew(0xcdc)], a[ew(0x7b2)])) || a0l['existsSync'](a0o[ew(0x3ec)](a0aq['MARKS_RUN_ROOT'], ew(0x6a5)));
    }
    [a0cE(0x64e)]() {
        const ex = a0cE, a = {
                'CNBvU': ex(0xcbe),
                'dhvKW': ex(0x8f1),
                'JIyur': ex(0x4e9),
                'zBnSw': 'exe'
            };
        try {
            if (!a0l[ex(0x719)](a0o[ex(0x3ec)](a0aq[ex(0x89a)], a['CNBvU'], a['dhvKW']))['isDirectory']())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l[ex(0x493)](a0o['join'](a0aq['MARKS_RUN_ROOT'], a['CNBvU'], a['JIyur'])) && !a0l['existsSync'](a0o[ex(0x3ec)](a0aq['MARKS_RUN_ROOT'], 'dbus', 'system_bus_socket')))
            return ![];
        if (!a0aq[ex(0x5ac)]())
            return ![];
        const b = a0aq[ex(0xe3b)](a0o[ex(0x3ec)](a0aq[ex(0xb58)], '1', ex(0xbfe)));
        if (b) {
            const c = b[ex(0x7d1)](ex(0xa4b))['trim']();
            if (c)
                return c['toLowerCase']()[ex(0x18c)](a[ex(0xb1a)]);
        }
        try {
            const d = a0l['readlinkSync'](a0o[ex(0x3ec)](a0aq[ex(0xb58)], '1', a['zBnSw']));
            if (d && !a0o[ex(0x2e1)](d)[ex(0x846)]()['includes'](a[ex(0xb1a)]))
                return ![];
        } catch {
        }
        return !![];
    }
    [a0cE(0x54d)](a) {
        const ey = a0cE, b = {
                'kxUVf': ey(0xbe4),
                'chXPV': ey(0x4f2),
                'gKTkg': ey(0xa4b),
                'ErfTv': function (d, f) {
                    return d < f;
                },
                'otiEl': function (d, f) {
                    return d === f;
                },
                'PXJmC': function (d, f) {
                    return d & f;
                },
                'WyBmG': function (d, f) {
                    return d >> f;
                },
                'QDvsJ': function (d, f) {
                    return d(f);
                },
                'iBIpS': function (d, f) {
                    return d + f;
                },
                'OhSLH': function (d, f) {
                    return d(f);
                }
            }, c = a0aq[ey(0xe3b)](a0o['join'](a0aq[ey(0xb58)], b[ey(0xeac)], b[ey(0x6dd)]));
        if (!c)
            return ![];
        for (const d of c['toString'](b[ey(0x85e)])['split']('\x0a')) {
            if (d[ey(0x2da)](ey(0xd7d))) {
                const f = d[ey(0xa24)](/\s+/);
                if (b[ey(0x752)](f['length'], 0x2))
                    return ![];
                try {
                    return b['otiEl'](b['PXJmC'](b[ey(0x734)](b[ey(0x363)](BigInt, b[ey(0x686)]('0x', f[0x1])), b['OhSLH'](BigInt, a)), 0x1n), 0x1n);
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static [a0cE(0x5ac)]() {
        const ez = a0cE, a = {
                'duBCx': ez(0x7e6),
                'UKYYp': ez(0xaca)
            };
        for (const b of [
                ez(0xacb),
                a[ez(0xdf6)],
                a[ez(0x27c)]
            ]) {
            if (a0aq[ez(0x9af)](a0o[ez(0x3ec)](a0aq['MARKS_ROOT'], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')['split'](a0o['delimiter'])) {
            if (c && a0aq['_executable'](a0o[ez(0x3ec)](c, ez(0x4c0))))
                return !![];
        }
        return ![];
    }
    static [a0cE(0x9af)](a) {
        const eA = a0cE, b = {
                'wkOgA': function (c, d) {
                    return c !== d;
                },
                'aPrJQ': function (c, d) {
                    return c & d;
                }
            };
        try {
            const c = a0l['statSync'](a);
            return c[eA(0xa60)]() && b[eA(0xce1)](b['aPrJQ'](c[eA(0x6ba)], 0x49), 0x0);
        } catch {
            return ![];
        }
    }
    static [a0cE(0x540)](a, b, c) {
        const eB = a0cE, d = {
                'DLtbH': function (f, g) {
                    return f !== g;
                },
                'OZeXy': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l['statSync'](a);
            if (!f[eB(0xbe3)]())
                return ![];
            if (d[eB(0x96c)](a0aq[eB(0x63e)](f[eB(0xe94)]), b) || d[eB(0x33d)](a0aq['_devMinor'](f[eB(0xe94)]), c))
                return ![];
            const g = a0l['openSync'](a, 'r+');
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
        const eC = a0cE, b = {
                'gcAVr': function (f, g) {
                    return f % g;
                },
                'LTKba': function (f, g) {
                    return f / g;
                },
                'ZAIBi': function (f, g) {
                    return f / g;
                },
                'paGHW': function (f, g) {
                    return f >>> g;
                },
                'DBxSy': function (f, g) {
                    return f | g;
                }
            }, c = b[eC(0x1e1)](Math[eC(0x513)](b[eC(0x455)](a, 0x100)), 0x1000), d = Math[eC(0x513)](b[eC(0x591)](a, 0x100000000));
        return b[eC(0xe35)](b[eC(0xd01)](c, d & ~0xfff), 0x0);
    }
    static [a0cE(0xbb0)](a) {
        const eD = a0cE, b = {
                'LQcSQ': function (f, g) {
                    return f % g;
                },
                'VRRdl': function (f, g) {
                    return f & g;
                },
                'VyzlI': function (f, g) {
                    return f % g;
                },
                'hHssf': function (f, g) {
                    return f | g;
                }
            }, c = b[eD(0xa82)](a, 0x100), d = b[eD(0xe29)](b[eD(0x67e)](Math['floor'](a / 0x1000), 0x100000), 0xfff00);
        return b[eD(0x43c)](c, d) >>> 0x0;
    }
    static [a0cE(0xe3b)](a, b = 0x400 * 0x400) {
        const eE = a0cE, c = {
                'cWIzp': function (f, g) {
                    return f < g;
                },
                'oqedK': function (f, g) {
                    return f - g;
                }
            };
        let d = null;
        try {
            d = a0l[eE(0x9d2)](a, 'r');
            const f = Buffer['alloc'](0x2000), g = [];
            let h = 0x0;
            while (c[eE(0xca2)](h, b)) {
                const i = a0l[eE(0x1a8)](d, f, 0x0, Math[eE(0x2d2)](f['length'], c[eE(0x790)](b, h)), null);
                if (!i)
                    break;
                g['push'](Buffer[eE(0x5a6)](f[eE(0x516)](0x0, i))), h += i;
            }
            return Buffer[eE(0xbbc)](g);
        } catch {
            return null;
        } finally {
            if (d !== null)
                try {
                    a0l['closeSync'](d);
                } catch {
                }
        }
    }
    static ['_fileContains'](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const eF = a0cE, f = {
                'vEelL': function (h, i) {
                    return h - i;
                },
                'TCGiI': function (h, i) {
                    return h < i;
                },
                'WoiiB': function (h, i) {
                    return h - i;
                },
                'ivMek': function (h, i) {
                    return h - i;
                },
                'KsGpv': function (h, i) {
                    return h !== i;
                }
            };
        let g = null;
        try {
            g = a0l[eF(0x9d2)](a, 'r');
            const h = Math[eF(0x357)](0x0, f[eF(0x832)](b['length'], 0x1)), i = Buffer[eF(0xd4a)](d);
            let j = Buffer[eF(0xd4a)](0x0), k = 0x0;
            while (f[eF(0x484)](k, c)) {
                const l = a0l['readSync'](g, i, 0x0, Math[eF(0x2d2)](d, f['WoiiB'](c, k)), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer[eF(0xbbc)]([
                    j,
                    i[eF(0x516)](0x0, l)
                ]);
                if (m[eF(0x1a7)](b) !== -0x1)
                    return !![];
                j = h ? Buffer[eF(0x5a6)](m[eF(0x516)](Math[eF(0x357)](0x0, f[eF(0x452)](m[eF(0x5bd)], h)))) : Buffer[eF(0xd4a)](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (f[eF(0x4d5)](g, null))
                try {
                    a0l[eF(0x8b1)](g);
                } catch {
                }
        }
    }
    ['getLocalIPv4']() {
        const eG = a0cE, a = {
                'nUzBI': function (c, d) {
                    return c === d;
                },
                'WSzVD': eG(0x185)
            }, b = a0p[eG(0xd9f)]();
        for (const c of Object[eG(0x4ff)](b)) {
            for (const d of b[c]) {
                const f = a[eG(0x83c)](d[eG(0x2f1)], a['WSzVD']) || a[eG(0x83c)](d['family'], 0x4);
                if (f && !d['internal']) {
                    if (!/^10\./[eG(0xbd9)](d['address']) && !/^192\.168\./['test'](d[eG(0x311)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[eG(0xbd9)](d[eG(0x311)]))
                        return d[eG(0x311)];
                }
            }
        }
        return null;
    }
    async [a0cE(0xe03)]() {
        const eH = a0cE, a = {
                'yZHPj': eH(0xcee),
                'PUZZl': eH(0xb54),
                'JfXgT': eH(0x756),
                'cCyil': eH(0x76f),
                'VXTTN': eH(0x6c2)
            }, b = [
                eH(0xcc4),
                a[eH(0xb95)],
                a['PUZZl'],
                a[eH(0x944)],
                eH(0xeae),
                a[eH(0xdfe)],
                a[eH(0x1a4)]
            ];
        for (const d of b) {
            try {
                const f = await this['fetchIP'](d, 0x4);
                if (f && this[eH(0xe78)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[eH(0xdbc)]();
        if (c && this[eH(0xe78)](c))
            return c;
        return null;
    }
    [a0cE(0x6ef)]() {
        const eI = a0cE, a = {
                'XQtoC': function (c, d) {
                    return c === d;
                },
                'FRRdl': eI(0x969),
                'FJATR': 'fe80:'
            }, b = a0p[eI(0xd9f)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[eI(0xaee)](d[eI(0x2f1)], a[eI(0x635)]) || d[eI(0x2f1)] === 0x6;
                if (f && !d[eI(0xe5d)]) {
                    if (!d[eI(0x311)]['toLowerCase']()[eI(0x2da)](a['FJATR']))
                        return d[eI(0x311)];
                }
            }
        }
        return null;
    }
    async [a0cE(0x33e)]() {
        const eJ = a0cE, a = {
                'yMhdI': eJ(0x985),
                'QOxaA': 'https://icanhazip.com'
            }, b = this['getLocalIPv6']();
        if (b && this[eJ(0x1eb)](b))
            return b;
        const c = [
            a[eJ(0x274)],
            a[eJ(0x1a1)],
            eJ(0x313)
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this[eJ(0x1eb)](f))
                    return f;
            } catch (g) {
                a0R[eJ(0x8ab)](eJ(0x68e)[eJ(0xbbc)](d, eJ(0xd09))['concat'](g[eJ(0x921)]));
                continue;
            }
        }
        return null;
    }
    async [a0cE(0x7a2)](a, b = 0x0) {
        const eK = a0cE, c = {
                'DwXcV': function (d, f) {
                    return d(f);
                },
                'FSMFf': eK(0xcab),
                'tUPvR': function (d, f) {
                    return d !== f;
                },
                'RgKhV': 'https',
                'bJZNd': eK(0xa18),
                'SqNoe': eK(0x7c7)
            };
        return new Promise((d, f) => {
            const eN = eK, g = {
                    'yxSOX': function (k, l) {
                        const eL = a0b;
                        return c[eL(0xe3f)](k, l);
                    },
                    'BGmRU': function (k, l) {
                        const eM = a0b;
                        return c[eM(0xb19)](k, l);
                    },
                    'wWvdp': eN(0xa96)
                }, h = require(c[eN(0x54b)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[eN(0xaf7)] }
                }, j = h[eN(0x8f4)](a, i, k => {
                    const eO = eN;
                    let l = '';
                    if (g[eO(0xc41)](k[eO(0xa98)], 0xc8)) {
                        g[eO(0x8e8)](f, new Error(eO(0x955)[eO(0xbbc)](k[eO(0xa98)])));
                        return;
                    }
                    k['on'](g[eO(0x96e)], m => l += m), k['on'](eO(0x3a9), () => d(l['trim']()));
                });
            j['on'](c[eN(0x3ba)], f), j[eN(0xc17)](0x1388, () => {
                const eP = eN;
                j[eP(0x2fe)](), c[eP(0xb19)](f, new Error(c[eP(0x6e9)]));
            });
        });
    }
    [a0cE(0xe78)](a) {
        const eQ = a0cE;
        return /^(\d{1,3}\.){3}\d{1,3}$/[eQ(0xbd9)](a);
    }
    [a0cE(0x1eb)](a) {
        const eR = a0cE;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a[eR(0x18c)](':'))
            return ![];
        const b = a[eR(0xa24)](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/['test'](b);
    }
    async [a0cE(0x27b)]() {
        const eS = a0cE, a = {
                'YbnZQ': function (m, n) {
                    return m / n;
                },
                'oolBA': function (m, n) {
                    return m - n;
                },
                'TfwHH': function (m, n) {
                    return m * n;
                },
                'CjWre': function (m, n) {
                    return m / n;
                },
                'eDrGd': function (m, n) {
                    return m / n;
                },
                'UkGyS': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise['all']([
                a0u[eS(0x8b0)](),
                a0u[eS(0xaac)](),
                a0u[eS(0x1c8)](),
                a0u['currentLoad']()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[eS(0x380)](Date['now'](), 0x3e8), i = h - this[eS(0xed5)], j = g[eS(0xdbb)] - this['lastNetworkStats']['tx'], k = a[eS(0x35e)](g[eS(0x477)], this[eS(0x47d)]['rx']);
        this[eS(0x804)] += j, this[eS(0xa53)] += k, this[eS(0x47d)] = {
            'tx': g[eS(0xdbb)],
            'rx': g['rx_bytes']
        }, this[eS(0xed5)] = h;
        const l = await a0u['processes']();
        return {
            'cpu': { 'usage': Math[eS(0x397)](b[eS(0x8b0)]) },
            'ram': {
                'total': c[eS(0x8fe)],
                'used': c[eS(0xe9b)]
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[eS(0x88b)]
            },
            'load': {
                'load1': a[eS(0x380)](Math[eS(0x397)](a[eS(0x5df)](f[eS(0x887)], 0x64)), 0x64),
                'load5': a[eS(0xa61)](Math['round'](a[eS(0x5df)](f[eS(0x887)], 0x64)), 0x64),
                'load15': a[eS(0x2ce)](Math[eS(0x397)](a[eS(0x5df)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this[eS(0x2d3)](),
            'network': {
                'up': Math[eS(0x397)](a[eS(0xd96)](j, i)),
                'down': Math[eS(0x397)](a['CjWre'](k, i)),
                'totalUp': this['totalNetworkUp'],
                'totalDown': this[eS(0xa53)]
            },
            'connections': await this['_getConnections'](),
            'uptime': a0p[eS(0x9bf)](),
            'process': l?.[eS(0x6f2)] || 0x0,
            'message': ''
        };
    }
    async [a0cE(0xe6c)]() {
        const eT = a0cE, a = {
                'PtjiD': eT(0x4e3),
                'mNTJf': eT(0xdb7),
                'zhoJQ': '/run/.containerenv',
                'kqYoY': '/proc/1/cgroup',
                'kHocB': eT(0xa4b),
                'BKlJV': eT(0x456),
                'vHemM': eT(0x95b),
                'mPoSK': eT(0xc6a),
                'OxMoP': eT(0xcf2),
                'SOhua': eT(0xa55),
                'NUlGS': '/proc/self/mountinfo',
                'mfyZL': eT(0xe6e),
                'qDYfW': eT(0xbed),
                'eoKDr': eT(0x8c6),
                'TLOQk': eT(0xa1b),
                'afJBY': eT(0xe32),
                'RXLds': 'container=lxc',
                'UhvYn': eT(0x6d6),
                'jLTVW': eT(0xe5e),
                'Fdnit': 'KVM',
                'kDJQS': eT(0xb3e)
            };
        try {
            if (a0l[eT(0x493)](a[eT(0x8d1)]))
                return a['mNTJf'];
            if (a0l[eT(0x493)](a['zhoJQ']))
                return eT(0x332);
            if (a0l[eT(0x493)](a[eT(0x428)])) {
                const b = a0l[eT(0x755)](a[eT(0x428)], a[eT(0xe14)])[eT(0x846)]();
                if (b[eT(0x18c)](a[eT(0x245)]) || b['includes'](eT(0x30b)))
                    return a['mNTJf'];
                else {
                    if (b[eT(0x18c)](a[eT(0x1b6)]))
                        return a[eT(0x55b)];
                    else {
                        if (b['includes'](a[eT(0x444)]))
                            return a['SOhua'];
                    }
                }
            }
            if (a0l[eT(0x493)](a['NUlGS'])) {
                const c = a0l[eT(0x755)](a[eT(0xecf)], a[eT(0xe14)]);
                if (c[eT(0x18c)](a[eT(0x6ed)]) || c['includes'](a['qDYfW']))
                    return a[eT(0x165)];
                else {
                    if (c['includes'](a[eT(0x236)]) || c['includes'](a['TLOQk']))
                        return a['mPoSK'];
                }
            }
            if (a0l[eT(0x493)](a[eT(0xd71)])) {
                const d = a0l[eT(0x755)](a[eT(0xd71)], eT(0xa4b));
                if (d[eT(0x18c)](a[eT(0x2a5)]))
                    return a[eT(0xa29)];
            }
            if (a0l['existsSync'](a[eT(0x1fc)])) {
                const f = a0l[eT(0x755)](a['UhvYn'], a[eT(0xe14)]);
                if (f[eT(0x18c)](a[eT(0x6da)]) || f[eT(0x18c)](a['Fdnit']))
                    return a[eT(0x6da)];
            }
        } catch (g) {
        }
        return a[eT(0x2ed)];
    }
    async [a0cE(0x2d3)]() {
        const eU = a0cE, a = {
                'OgsTq': function (b, c) {
                    return b > c;
                },
                'Saigp': eU(0x478),
                'mDjXC': function (b, c) {
                    return b !== c;
                },
                'aYQLS': 'overlay'
            };
        try {
            const b = await a0u[eU(0xb70)](), c = b[eU(0x290)](g => {
                    const eV = eU;
                    return a['OgsTq'](g[eV(0x1d1)], 0x0) && g[eV(0x3d4)] !== a[eV(0x209)] && a['mDjXC'](g[eV(0x3d4)], a[eV(0x724)]) && g['fs'][eV(0x2da)](eV(0x70a));
                }), d = c[eU(0x8df)]((g, h) => g + h['size'], 0x0), f = c[eU(0x8df)]((g, h) => g + h[eU(0xb31)], 0x0);
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
    async [a0cE(0x8f2)]() {
        const eW = a0cE;
        try {
            const a = await a0u[eW(0xb4e)](), b = a[eW(0x290)](d => d[eW(0x25e)] === 'tcp')[eW(0x5bd)], c = a['filter'](d => d[eW(0x25e)] === 'udp')['length'];
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
class a0ar {
    static async ['execute'](a, b = {}) {
        const eX = a0cE, c = {
                'aTCqa': function (d, f) {
                    return d - f;
                },
                'DmwoG': function (d, f) {
                    return d === f;
                },
                'YZAkq': eX(0x5e0),
                'cebuM': function (d, f) {
                    return d(f);
                },
                'sCLky': function (d, f) {
                    return d * f;
                },
                'HnGaH': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[eX(0x189)](),
                env: env = {},
                timeout: timeout = a0af[eX(0xd3c)]
            } = b;
        return new Promise(d => {
            const eY = eX, f = {
                    'XUBUS': function (i, j) {
                        return c['aTCqa'](i, j);
                    },
                    'YyCpO': function (i, j) {
                        return c['DmwoG'](i, j);
                    },
                    'GoAlv': c[eY(0xccd)],
                    'Nuhkl': function (i, j) {
                        const eZ = eY;
                        return c[eZ(0xcc8)](i, j);
                    }
                }, g = Date[eY(0x1cf)](), h = a0r(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[eY(0x1e2)](timeout, 0x3e8),
                    'maxBuffer': c[eY(0x1e2)](c[eY(0x793)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const f0 = eY, l = f[f0(0x856)](Date[f0(0x1cf)](), g), m = i && i[f0(0xee5)] && i['signal'];
                    let n = j || '';
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f['YyCpO'](typeof i[f0(0x6af)], f[f0(0x219)]) ? o = i[f0(0x6af)] : o = -0x1;
                    }
                    f['Nuhkl'](d, {
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
function a0as(a) {
    const f1 = a0cE, b = {
            'qvGYL': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l['realpathSync'][f1(0x161)](a0o[f1(0xe51)](a0af[f1(0x56c)])), d = a0o['resolve'](a);
        let f = d;
        while (!a0l[f1(0x493)](f)) {
            const j = a0o[f1(0x378)](f);
            if (b[f1(0x19e)](j, f))
                return ![];
            f = j;
        }
        const g = a0l[f1(0xd88)][f1(0x161)](f), h = a0o[f1(0x4fe)](c, g);
        if (h[f1(0x2da)]('..') || a0o['isAbsolute'](h))
            return ![];
        const i = a0o['relative'](f, d);
        if (i && (i[f1(0x2da)]('..') || a0o['isAbsolute'](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0at {
    static ['ZIP_MAX_ENTRIES'] = 0x4e20;
    static [a0cE(0x4bd)] = 0x200 * 0x400 * 0x400;
    static [a0cE(0xc16)] = 0x1f4;
    static ['_crcTable'] = null;
    static [a0cE(0xb4f)](a) {
        const f2 = a0cE, b = {
                'HUIYW': function (g, h) {
                    return g & h;
                },
                'XNYAO': function (g, h) {
                    return g ^ h;
                },
                'kSIPK': function (g, h) {
                    return g >>> h;
                },
                'ZNCtK': function (g, h) {
                    return g >>> h;
                },
                'AlmyA': function (g, h) {
                    return g < h;
                }
            };
        if (!a0at[f2(0x909)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; h < 0x100; h++) {
                let j = h;
                for (let l = 0x0; l < 0x8; l++)
                    j = b[f2(0x966)](j, 0x1) ? b[f2(0x526)](0xedb88320, b[f2(0xd94)](j, 0x1)) : b[f2(0x970)](j, 0x1);
                g[h] = j;
            }
            a0at[f2(0x909)] = g;
        }
        const d = a0at[f2(0x909)];
        let f = -0x1;
        for (let m = 0x0; b[f2(0xbde)](m, a[f2(0x5bd)]); m++)
            f = b[f2(0x526)](b[f2(0xd94)](f, 0x8), d[b[f2(0x966)](b[f2(0x526)](f, a[m]), 0xff)]);
        return b[f2(0x970)](b[f2(0x526)](f, -0x1), 0x0);
    }
    static [a0cE(0x3e5)](a) {
        const f3 = a0cE, b = {
                'LjmJS': function (g, h) {
                    return g | h;
                },
                'KnDDp': function (g, h) {
                    return g << h;
                },
                'YnNrx': function (g, h) {
                    return g << h;
                },
                'gymwh': function (g, h) {
                    return g >> h;
                },
                'evKmq': function (g, h) {
                    return g & h;
                },
                'nptuz': function (g, h) {
                    return g | h;
                },
                'EVDuJ': function (g, h) {
                    return g << h;
                },
                'ZFEJp': function (g, h) {
                    return g - h;
                },
                'BCYxf': function (g, h) {
                    return g + h;
                }
            }, c = b[f3(0x881)](b[f3(0xed1)](a[f3(0xd66)](), 0xb) | b[f3(0x9e2)](a[f3(0xed2)](), 0x5), b[f3(0x1e8)](a[f3(0xed0)](), 0x1)) & 0xffff, f = b[f3(0xc72)](b[f3(0xc0a)](b[f3(0x881)](b[f3(0xbaf)](b[f3(0x560)](a[f3(0x848)](), 0x7bc), 0x9), b[f3(0xed1)](b[f3(0x5a9)](a[f3(0xdc8)](), 0x1), 0x5)), a[f3(0x248)]()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0cE(0x4aa)](a) {
        const f4 = a0cE, b = {
                'tyzXs': function (i, j) {
                    return i - j;
                },
                'gUiLS': function (i, j) {
                    return i >= j;
                },
                'HinZq': f4(0xa4b),
                'ndvij': function (i, j) {
                    return i > j;
                },
                'sEvrv': function (i, j) {
                    return i < j;
                },
                'kKoBo': function (i, j) {
                    return i(j);
                },
                'dHqLA': function (i, j) {
                    return i(j);
                },
                'pLLWG': function (i, j) {
                    return i(j);
                },
                'FEDYL': function (i, j) {
                    return i + j;
                },
                'wQZdY': function (i, j) {
                    return i + j;
                }
            }, c = a0l[f4(0x9d2)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const f5 = f4;
            let j = 0x0;
            while (j < i[f5(0x5bd)])
                j += a0l[f5(0x3a2)](c, i, j, b['tyzXs'](i[f5(0x5bd)], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const f6 = f4;
                if (b['gUiLS'](g, a0at[f6(0xd05)]))
                    return ![];
                const m = Buffer[f6(0x5a6)](i, b[f6(0x75f)]);
                j = j || Buffer['alloc'](0x0);
                const n = l ? 0x0 : a0at[f6(0xb4f)](j);
                let o = 0x0, p = j;
                if (!l && b['ndvij'](j[f6(0x5bd)], 0x0)) {
                    const u = a0n['deflateRawSync'](j, { 'level': 0x6 });
                    b[f6(0xb51)](u[f6(0x5bd)], j[f6(0x5bd)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0at[f6(0x3e5)](k || new Date()), s = Buffer['alloc'](0x1e);
                s[f6(0xb15)](0x4034b50, 0x0), s[f6(0xd55)](0x14, 0x4), s[f6(0xd55)](0x800, 0x6), s[f6(0xd55)](o, 0x8), s[f6(0xd55)](q, 0xa), s[f6(0xd55)](r, 0xc), s['writeUInt32LE'](n, 0xe), s[f6(0xb15)](p[f6(0x5bd)], 0x12), s[f6(0xb15)](j['length'], 0x16), s['writeUInt16LE'](m[f6(0x5bd)], 0x1a), s[f6(0xd55)](0x0, 0x1c), b[f6(0xe0a)](h, s), b[f6(0xd48)](h, m), b['pLLWG'](h, p);
                const t = Buffer[f6(0xd4a)](0x2e);
                return t[f6(0xb15)](0x2014b50, 0x0), t[f6(0xd55)](0x14, 0x4), t[f6(0xd55)](0x14, 0x6), t[f6(0xd55)](0x800, 0x8), t[f6(0xd55)](o, 0xa), t[f6(0xd55)](q, 0xc), t[f6(0xd55)](r, 0xe), t[f6(0xb15)](n, 0x10), t['writeUInt32LE'](p[f6(0x5bd)], 0x14), t['writeUInt32LE'](j[f6(0x5bd)], 0x18), t[f6(0xd55)](m[f6(0x5bd)], 0x1c), t[f6(0xd55)](0x0, 0x1e), t['writeUInt16LE'](0x0, 0x20), t[f6(0xd55)](0x0, 0x22), t[f6(0xd55)](0x0, 0x24), t[f6(0xb15)](l ? 0x10 : 0x0, 0x26), t[f6(0xb15)](f, 0x2a), d['push'](t, m), f += b[f6(0x48d)](b[f6(0x374)](0x1e, m[f6(0x5bd)]), p['length']), g++, !![];
            },
            'close'() {
                const f7 = f4, i = Buffer[f7(0xbbc)](d), j = Buffer[f7(0xd4a)](0x16);
                return j[f7(0xb15)](0x6054b50, 0x0), j[f7(0xd55)](0x0, 0x4), j[f7(0xd55)](0x0, 0x6), j['writeUInt16LE'](g, 0x8), j[f7(0xd55)](g, 0xa), j[f7(0xb15)](i[f7(0x5bd)], 0xc), j['writeUInt32LE'](f, 0x10), j[f7(0xd55)](0x0, 0x14), h(i), b[f7(0xd48)](h, j), a0l[f7(0x8b1)](c), g;
            }
        };
    }
    static [a0cE(0xea0)](a) {
        const f8 = a0cE, b = {
                'iBKQp': function (n, o) {
                    return n - o;
                },
                'LjAUg': function (n, o) {
                    return n >= o;
                },
                'nYkiC': function (n, o) {
                    return n < o;
                },
                'RRlMv': f8(0x9cf),
                'yuLyN': function (n, o) {
                    return n + o;
                },
                'LypEG': function (n, o) {
                    return n + o;
                },
                'XVnxT': function (n, o) {
                    return n + o;
                },
                'fuDUr': function (n, o) {
                    return n <= o;
                },
                'lKuJN': function (n, o) {
                    return n + o;
                },
                'ruwyZ': function (n, o) {
                    return n + o;
                },
                'JtKPe': function (n, o) {
                    return n + o;
                },
                'hSJrC': function (n, o) {
                    return n + o;
                },
                'eBixn': function (n, o) {
                    return n + o;
                },
                'OVfRp': function (n, o) {
                    return n + o;
                },
                'QRMYP': function (n, o) {
                    return n + o;
                },
                'NgvNt': function (n, o) {
                    return n + o;
                },
                'IfNwG': function (n, o) {
                    return n + o;
                },
                'TZLDa': function (n, o) {
                    return n !== o;
                },
                'dQjHJ': function (n, o) {
                    return n & o;
                },
                'thuZK': function (n, o) {
                    return n === o;
                },
                'Kmjau': function (n, o) {
                    return n === o;
                },
                'wNVAS': function (n, o) {
                    return n + o;
                }
            }, c = a0l['readFileSync'](a);
        let d = -0x1;
        const f = Math[f8(0x357)](0x0, b['iBKQp'](c[f8(0x5bd)], 0xffff + 0x16));
        for (let n = b['iBKQp'](c['length'], 0x16); b[f8(0x709)](n, f); n--) {
            if (c[f8(0x6f7)](n) === 0x6054b50) {
                d = n;
                break;
            }
        }
        if (b[f8(0x41d)](d, 0x0))
            throw new Error(b[f8(0x25b)]);
        const g = c[f8(0x82e)](b[f8(0xedc)](d, 0xa)), h = c[f8(0x6f7)](b[f8(0x99e)](d, 0xc)), j = c[f8(0x6f7)](b[f8(0xedc)](d, 0x10)), k = [];
        let l = j;
        const m = b['XVnxT'](j, h);
        for (let o = 0x0; o < g && b[f8(0xb1e)](l + 0x2e, m); o++) {
            if (c['readUInt32LE'](l) !== 0x2014b50)
                break;
            const q = c[f8(0x82e)](b[f8(0x4f5)](l, 0x8)), r = c['readUInt16LE'](b[f8(0x4e6)](l, 0xa)), s = c[f8(0x6f7)](l + 0x10), t = c[f8(0x6f7)](b[f8(0x875)](l, 0x14)), u = c[f8(0x6f7)](b[f8(0x875)](l, 0x18)), v = c[f8(0x82e)](b[f8(0x5eb)](l, 0x1c)), w = c[f8(0x82e)](b[f8(0x948)](l, 0x1e)), x = c[f8(0x82e)](b['OVfRp'](l, 0x20)), y = c[f8(0x6f7)](b[f8(0xedc)](l, 0x26)), z = c[f8(0x6f7)](b[f8(0x99a)](l, 0x2a)), A = c[f8(0x523)](b['NgvNt'](l, 0x2e), b['LypEG'](b[f8(0xedc)](l, 0x2e), v))[f8(0x7d1)]('utf8');
            l += b['lKuJN'](b[f8(0xedc)](b[f8(0x3f4)](0x2e, v), w), x);
            const B = {
                'name': A,
                'isDir': A['endsWith']('/') || b[f8(0x251)](b['dQjHJ'](y, 0x10), 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[f8(0x251)](b['dQjHJ'](q, 0x1), 0x0),
                'zip64': b[f8(0xb50)](t, 0xffffffff) || b['Kmjau'](u, 0xffffffff) || z === 0xffffffff,
                'data': null
            };
            if (!B[f8(0xd18)] && !B[f8(0x9b7)] && !B['zip64']) {
                if (b[f8(0x875)](z, 0x1e) <= c[f8(0x5bd)] && b[f8(0x22a)](c[f8(0x6f7)](z), 0x4034b50)) {
                    const C = c[f8(0x82e)](z + 0x1a), D = c[f8(0x82e)](b['hSJrC'](z, 0x1c)), E = b[f8(0x3f4)](b[f8(0x3f4)](z + 0x1e, C), D);
                    b[f8(0xb1e)](b['wNVAS'](E, t), c[f8(0x5bd)]) && (B[f8(0xa96)] = c[f8(0x523)](E, b[f8(0x99e)](E, t)));
                }
            }
            k[f8(0x6b2)](B);
        }
        return k;
    }
    static [a0cE(0x975)](a) {
        const f9 = a0cE, b = {
                'KekSE': function (c, d) {
                    return c === d;
                }
            };
        if (b[f9(0x93f)](a[f9(0xed6)], 0x0))
            return a['data'];
        if (b['KekSE'](a['method'], 0x8))
            return a0n['inflateRawSync'](a[f9(0xa96)]);
        throw new Error(f9(0x349)[f9(0xbbc)](a[f9(0xed6)]));
    }
}
class a0au {
    static async [a0cE(0xa44)](a, b = ![]) {
        const fa = a0cE, c = {
                'aGfjX': fa(0xc00),
                'TesFz': 'file',
                'SeqOb': function (h, i) {
                    return h & i;
                },
                'pbDxo': function (h, i) {
                    return h(i);
                },
                'NiiSD': function (h, i) {
                    return h || i;
                },
                'vgLwV': function (h, i) {
                    return h(i);
                },
                'tuGdt': fa(0x618),
                'yNJGp': fa(0x368)
            }, d = a0o[fa(0xe51)](a0af[fa(0x56c)], c['NiiSD'](a, '.'));
        if (!c[fa(0x9db)](a0as, d))
            throw new Error(c[fa(0x3b3)]);
        if (!a0l[fa(0x493)](d))
            throw new Error(c[fa(0x4c4)]);
        const f = [], g = h => {
                const fb = fa, i = a0l[fb(0x23c)](h);
                for (const j of i) {
                    const k = a0o['join'](h, j), l = a0l[fb(0x719)](k), m = new a0Z();
                    m[fb(0x6b1)] = j, m[fb(0x20c)] = a0o['relative'](a0af['FILE_ROOT'], k), m[fb(0x3d4)] = l[fb(0xd9a)]() ? c['aGfjX'] : c['TesFz'], m[fb(0x1d1)] = l[fb(0x1d1)], m[fb(0xcd0)] = l['mtime'][fb(0x451)](), m[fb(0x6ba)] = this['_formatMode'](l['mode'], l[fb(0xd9a)]()), m[fb(0x3ce)] = '0o'[fb(0xbbc)](c[fb(0xc61)](l['mode'], 0x1ff)[fb(0x7d1)](0x8)), m[fb(0xc32)] = ''[fb(0xbbc)](l['uid'], ':')[fb(0xbbc)](l[fb(0x1ce)]), f[fb(0x6b2)](m), b && l[fb(0xd9a)]() && c[fb(0x4a4)](g, k);
                }
            };
        return c[fa(0x4a4)](g, d), f;
    }
    static async ['getFilePermissions'](a) {
        const fc = a0cE, b = {
                'MeCPe': function (d, f) {
                    return d(f);
                },
                'kYRXg': function (d, f) {
                    return d & f;
                }
            }, c = [];
        for (const d of a) {
            const f = a0o['resolve'](a0af['FILE_ROOT'], d);
            if (!b[fc(0xbb8)](a0as, f))
                continue;
            try {
                const g = a0l[fc(0x719)](f), h = this[fc(0x617)](f, a0l[fc(0xd81)][fc(0x75c)]), i = this[fc(0x617)](f, a0l[fc(0xd81)][fc(0x7a7)]), j = this['_checkAccess'](f, a0l[fc(0xd81)][fc(0xddc)]), k = new a0a0();
                k['path'] = a0o['relative'](a0af[fc(0x56c)], f), k['name'] = a0o[fc(0x2e1)](f), k[fc(0x6ba)] = this[fc(0xdbd)](g[fc(0x6ba)], g['isDirectory']()), k[fc(0x3ce)] = '0o'[fc(0xbbc)](b[fc(0xb10)](g['mode'], 0x1ff)[fc(0x7d1)](0x8)), k[fc(0x3d4)] = g[fc(0xd9a)]() ? 'directory' : fc(0x5d8), k[fc(0x676)] = h, k['writable'] = i, k[fc(0xc7b)] = j, c[fc(0x6b2)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        const fd = a0cE;
        try {
            return a0l[fd(0x496)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0cE(0x3cb)](a) {
        const fe = a0cE, b = {
                'BoxJd': function (c, d) {
                    return c === d;
                },
                'QsmvO': 'number',
                'CxGgS': fe(0xcdb),
                'KeDXX': function (c, d, f) {
                    return c(d, f);
                },
                'qOIVr': fe(0x819)
            };
        if (b[fe(0xea5)](typeof a, b[fe(0xd25)]))
            return a;
        if (b[fe(0xea5)](typeof a, b[fe(0xee7)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/['test'](c))
                return b[fe(0xa86)](parseInt, c, 0x8);
        }
        throw new Error(b[fe(0x6e0)]);
    }
    static ['_formatMode'](a, b) {
        const ff = a0cE, c = {
                'YRJpK': function (i, j) {
                    return i & j;
                },
                'wYyBg': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[ff(0x90e)](a, 0x1ff)['toString'](0x8)['padStart'](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[ff(0x6dc)](parseInt, i, 0xa);
            h += f[ff(0x8ac)]((k, l) => j & 0x4 >> l ? k : '-')[ff(0x3ec)]('');
        }
        return h;
    }
    static async [a0cE(0x442)](a, b = ![]) {
        const fg = a0cE, c = {
                'JYEee': function (g, h) {
                    return g(h);
                },
                'tyVux': function (g, h) {
                    return g(h);
                },
                'nnewG': fg(0xa33),
                'qUrnw': function (g, h) {
                    return g(h);
                },
                'yWvAw': function (g, h) {
                    return g(h);
                },
                'zTkSB': fg(0x7c7)
            }, d = [];
        for (const [g, h] of Object[fg(0x25f)](a)) {
            const i = a0o[fg(0xe51)](a0af[fg(0x56c)], g);
            if (!a0as(i)) {
                d['push']({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[fg(0xae6)]
                });
                continue;
            }
            try {
                const j = this[fg(0x3cb)](h), k = m => {
                        const fh = fg;
                        a0l[fh(0x21b)](m, j);
                    };
                if (b && a0l[fg(0x493)](i) && a0l['statSync'](i)['isDirectory']()) {
                    const m = n => {
                        const fi = fg;
                        c[fi(0x2b5)](k, n);
                        const o = a0l[fi(0x23c)](n);
                        for (const p of o) {
                            const q = a0o['join'](n, p);
                            a0l[fi(0x719)](q)[fi(0xd9a)]() ? c['tyVux'](m, q) : k(q);
                        }
                    };
                    c[fg(0xe40)](m, i);
                } else
                    c[fg(0x2b5)](k, i);
                const l = j[fg(0x7d1)](0x8);
                d[fg(0x6b2)]({
                    'path': g,
                    'requested': c[fg(0x5a4)](String, h),
                    'applied': l,
                    'mode_octal': '0o'[fg(0xbbc)](l),
                    'status': 'ok'
                });
            } catch (n) {
                d[fg(0x6b2)]({
                    'path': g,
                    'requested': c[fg(0xe40)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['zTkSB'],
                    'message': n[fg(0x921)]
                });
            }
        }
        const f = d['filter'](o => o[fg(0x4f2)] === 'ok')[fg(0x5bd)];
        return {
            'status': 'ok',
            'total': d[fg(0x5bd)],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const fj = a0cE, b = {
                'GBLAZ': function (h, i) {
                    return h(i);
                },
                'dqyYl': fj(0x618),
                'MzNXl': function (h, i) {
                    return h * i;
                },
                'YTQTH': fj(0xc40),
                'CSorn': 'utf8',
                'JKDCS': fj(0xeb2)
            }, c = a0o['resolve'](a0af[fj(0x56c)], a);
        if (!b[fj(0xaf6)](a0as, c))
            throw new Error(b[fj(0x163)]);
        const d = a0l[fj(0x719)](c);
        if (d[fj(0x1d1)] > b[fj(0xe0f)](0x400, 0x400))
            throw new Error(b[fj(0xd0b)]);
        const f = a0l[fj(0x755)](c), g = this[fj(0x5ca)](f);
        return {
            'status': 'ok',
            'path': a0o[fj(0x4fe)](a0af[fj(0x56c)], c),
            'content': g ? a0w['fromByteArray'](f) : f[fj(0x7d1)](b[fj(0x9b1)]),
            'encoding': g ? fj(0x81a) : b[fj(0x3d6)],
            'is_binary': g,
            'size': d[fj(0x1d1)]
        };
    }
    static [a0cE(0x5ca)](a) {
        const fk = a0cE, b = {
                'mhGBw': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[fk(0xc43)](a[fk(0x5bd)], 0x0))
            return ![];
        for (let c = 0x0; c < Math[fk(0x2d2)](a[fk(0x5bd)], 0x200); c++) {
            if (a[c] === 0x0)
                return !![];
        }
        return ![];
    }
    static async [a0cE(0xa78)](a, b, c, d = null, f = null) {
        const fl = a0cE, g = {
                'aeEpK': fl(0x618),
                'nyHPu': function (l, m) {
                    return l > m;
                },
                'sGVmz': fl(0xc40),
                'pdWlz': function (l, m) {
                    return l !== m;
                },
                'gsFnu': function (l, m) {
                    return l(m);
                },
                'bwshB': fl(0xb7f),
                'Ieutr': '.upload_chunks',
                'PSSpP': function (l, m) {
                    return l === m;
                },
                'jfyJa': function (l, m) {
                    return l < m;
                }
            }, h = a0o[fl(0xe51)](a0af[fl(0x56c)], a);
        let j = h;
        b && (j = a0o[fl(0x3ec)](h, b));
        if (!a0as(j))
            throw new Error(g[fl(0xb6b)]);
        !a0l[fl(0x493)](a0o[fl(0x378)](j)) && a0l[fl(0x80c)](a0o[fl(0x378)](j), { 'recursive': !![] });
        const k = a0w[fl(0x850)](c);
        if (g[fl(0x7b8)](k[fl(0x5bd)], a0af['MAX_UPLOAD_SIZE']))
            throw new Error(g[fl(0xa99)]);
        if (g[fl(0x77d)](d, null) && g[fl(0x77d)](f, null)) {
            const l = g['gsFnu'](Number, d), m = Number(f);
            if (Number[fl(0x5f5)](l) || Number[fl(0x5f5)](m))
                throw new Error(g[fl(0xd41)]);
            const n = a0o[fl(0x3ec)](a0o['dirname'](j), g[fl(0xe7d)], a0o[fl(0x2e1)](j));
            !a0l['existsSync'](n) && a0l[fl(0x80c)](n, { 'recursive': !![] });
            const o = a0o[fl(0x3ec)](n, fl(0xb94)['concat'](l));
            a0l['writeFileSync'](o, k);
            const p = a0l[fl(0x23c)](n)[fl(0x290)](s => s[fl(0x2da)](fl(0xb94))), q = p[fl(0x5bd)], r = g[fl(0xa01)](q, m);
            if (r) {
                const s = a0l['createWriteStream'](j);
                for (let u = 0x0; g[fl(0x33b)](u, m); u++) {
                    const v = a0o[fl(0x3ec)](n, 'chunk_'[fl(0xbbc)](u));
                    if (!a0l[fl(0x493)](v)) {
                        s['close']();
                        throw new Error(fl(0x6e8)['concat'](u));
                    }
                    s[fl(0xeb4)](a0l[fl(0x755)](v));
                }
                s[fl(0x3a9)]();
                const t = a0o[fl(0x378)](n);
                a0l['rmSync'](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[fl(0x823)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o['relative'](a0af[fl(0x56c)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[fl(0xd1f)](j, k), {
            'status': 'ok',
            'path': a0o['relative'](a0af[fl(0x56c)], j),
            'received': k['length'],
            'total': k[fl(0x5bd)],
            'chunked': ![]
        };
    }
    static async [a0cE(0x200)](a, b, c, d = null, f = null) {
        const fm = a0cE, g = {
                'qkBFF': function (k, l) {
                    return k || l;
                },
                'Mangb': fm(0x618),
                'Pmthw': function (k, l) {
                    return k > l;
                },
                'ezEpD': fm(0xc40),
                'HLAxa': function (k, l) {
                    return k !== l;
                },
                'NnqhT': function (k, l) {
                    return k(l);
                },
                'merRq': function (k, l) {
                    return k(l);
                },
                'HuNzZ': function (k, l) {
                    return k === l;
                },
                'TEnYH': function (k, l) {
                    return k < l;
                },
                'jUfCN': fm(0xb53),
                'wxciQ': fm(0x7be)
            }, h = a0o[fm(0xe51)](a0af[fm(0x56c)], g[fm(0xdd4)](a, '.'));
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!a0as(j))
            throw new Error(g[fm(0xbab)]);
        !a0l[fm(0x493)](a0o[fm(0x378)](j)) && a0l[fm(0x80c)](a0o[fm(0x378)](j), { 'recursive': !![] });
        if (g[fm(0xe21)](c[fm(0x5bd)], a0af[fm(0x2e3)]))
            throw new Error(g['ezEpD']);
        if (g[fm(0x3e6)](d, null) && f !== null) {
            const k = g[fm(0xed7)](Number, d), l = g[fm(0x5b4)](Number, f);
            if (Number[fm(0x5f5)](k) || Number['isNaN'](l))
                throw new Error('chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric');
            const m = a0o['join'](a0o[fm(0x378)](j), fm(0x2d5), a0o[fm(0x2e1)](j));
            !a0l[fm(0x493)](m) && a0l[fm(0x80c)](m, { 'recursive': !![] });
            const n = a0o[fm(0x3ec)](m, 'chunk_'[fm(0xbbc)](k));
            a0l['writeFileSync'](n, c);
            const o = a0l[fm(0x23c)](m)[fm(0x290)](r => r['startsWith'](fm(0xb94))), p = o['length'], q = g[fm(0x8b5)](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; g[fm(0x434)](t, l); t++) {
                    const u = a0o['join'](m, fm(0xb94)[fm(0xbbc)](t));
                    if (!a0l[fm(0x493)](u))
                        throw new Error(fm(0x6e8)['concat'](t));
                    r[fm(0x6b2)](a0l[fm(0x755)](u));
                }
                a0l[fm(0xd1f)](j, Buffer[fm(0xbbc)](r));
                const s = a0o['dirname'](m);
                a0l[fm(0x20e)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[fm(0x823)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[fm(0x4fe)](a0af['FILE_ROOT'], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[fm(0xc3a)]
                };
            }
            return {
                'status': 'ok',
                'path': a0o['relative'](a0af[fm(0x56c)], j),
                'chunk_id': k,
                'completed': ![],
                'message': fm(0xad3)['concat'](k, fm(0x530))
            };
        }
        return a0l[fm(0xd1f)](j, c), {
            'status': 'ok',
            'path': a0o[fm(0x4fe)](a0af[fm(0x56c)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[fm(0x5c7)]
        };
    }
    static async [a0cE(0x1bd)](a) {
        const fn = a0cE, b = {
                'OJhAu': function (g, h) {
                    return g(h);
                },
                'MCDbS': 'File\x20not\x20found'
            }, c = a0o['resolve'](a0af[fn(0x56c)], a);
        if (!b[fn(0xe1e)](a0as, c))
            throw new Error(fn(0x618));
        if (!a0l[fn(0x493)](c))
            throw new Error(b[fn(0x361)]);
        const d = a0l[fn(0x719)](c), f = await a0l[fn(0x1cd)][fn(0x40b)](c);
        return {
            'path': a0o['relative'](a0af[fn(0x56c)], c),
            'content': f,
            'size': d[fn(0x1d1)]
        };
    }
    static async [a0cE(0x483)](a) {
        const fo = a0cE, b = {
                'eDcRY': function (d, f) {
                    return d(f);
                },
                'fFGEw': fo(0xa33),
                'NKLyC': 'not_found',
                'pxGAj': fo(0x7c7)
            }, c = [];
        for (const d of a) {
            const f = a0o['resolve'](a0af[fo(0x56c)], d);
            if (!b['eDcRY'](a0as, f)) {
                c[fo(0x6b2)]({
                    'path': d,
                    'status': b[fo(0x761)]
                });
                continue;
            }
            try {
                if (a0l[fo(0x493)](f)) {
                    const g = a0l[fo(0x719)](f);
                    g[fo(0xd9a)]() ? a0l[fo(0x20e)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[fo(0xd5d)](f), c[fo(0x6b2)]({
                        'path': d,
                        'status': fo(0x580)
                    });
                } else
                    c[fo(0x6b2)]({
                        'path': d,
                        'status': b[fo(0x5fe)]
                    });
            } catch (h) {
                c[fo(0x6b2)]({
                    'path': d,
                    'status': b[fo(0xc54)],
                    'message': h[fo(0x921)]
                });
            }
        }
        return c;
    }
    static async [a0cE(0x534)](a) {
        const fp = a0cE, b = {
                'liFES': function (d, f) {
                    return d(f);
                },
                'QTNKs': fp(0xa33),
                'fCdus': 'error'
            }, c = [];
        for (const [d, f] of Object[fp(0x25f)](a)) {
            const g = a0o[fp(0xe51)](a0af[fp(0x56c)], d), h = a0o[fp(0xe51)](a0af[fp(0x56c)], f);
            if (!b[fp(0x4fd)](a0as, g) || !b[fp(0x4fd)](a0as, h)) {
                c[fp(0x6b2)]({
                    'from': d,
                    'to': f,
                    'status': b[fp(0xe63)]
                });
                continue;
            }
            try {
                const i = a0o[fp(0x378)](h);
                !a0l[fp(0x493)](i) && a0l[fp(0x80c)](i, { 'recursive': !![] }), a0l[fp(0xa4c)](g, h), c[fp(0x6b2)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b['fCdus'],
                    'message': j[fp(0x921)]
                });
            }
        }
        return c;
    }
    static async [a0cE(0x215)](a) {
        const fq = a0cE, b = {
                'PKgzl': function (d, f) {
                    return d(f);
                },
                'sQvbn': fq(0xa33),
                'CEnua': fq(0x7dc),
                'DLdYd': function (d, f, g) {
                    return d(f, g);
                },
                'qCIVa': fq(0x7c7)
            }, c = [];
        for (const [d, f] of Object[fq(0x25f)](a)) {
            const g = a0o['resolve'](a0af[fq(0x56c)], d), h = a0o[fq(0xe51)](a0af['FILE_ROOT'], f);
            if (!b[fq(0x4a3)](a0as, g) || !b[fq(0x4a3)](a0as, h)) {
                c[fq(0x6b2)]({
                    'from': d,
                    'to': f,
                    'status': b[fq(0x4dc)]
                });
                continue;
            }
            try {
                if (!a0l[fq(0x493)](g)) {
                    c[fq(0x6b2)]({
                        'from': d,
                        'to': f,
                        'status': b[fq(0x178)]
                    });
                    continue;
                }
                const i = a0o[fq(0x378)](h);
                !a0l[fq(0x493)](i) && a0l[fq(0x80c)](i, { 'recursive': !![] });
                const j = a0l[fq(0x719)](g);
                if (j[fq(0xd9a)]()) {
                    if (a0l[fq(0xd42)])
                        a0l[fq(0xd42)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const fr = fq;
                            if (a0l[fr(0x719)](l)[fr(0xd9a)]()) {
                                if (!a0l['existsSync'](m))
                                    a0l['mkdirSync'](m, { 'recursive': !![] });
                                for (const n of a0l['readdirSync'](l)) {
                                    k(a0o[fr(0x3ec)](l, n), a0o[fr(0x3ec)](m, n));
                                }
                            } else
                                a0l[fr(0xa6f)](l, m);
                        };
                        b['DLdYd'](k, g, h);
                    }
                } else
                    a0l[fq(0xa6f)](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[fq(0x6b2)]({
                    'from': d,
                    'to': f,
                    'status': b[fq(0xd45)],
                    'message': l[fq(0x921)]
                });
            }
        }
        return c;
    }
    static async [a0cE(0x590)](a) {
        const ft = a0cE, b = { 'SGTYT': ft(0x618) }, c = a0o[ft(0xe51)](a0af['FILE_ROOT'], a);
        if (!a0as(c))
            throw new Error(b['SGTYT']);
        return a0l['mkdirSync'](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o['relative'](a0af['FILE_ROOT'], c)
        };
    }
    static [a0cE(0x8d0)](a) {
        const fu = a0cE;
        return a0o[fu(0x4fe)](a0af[fu(0x56c)], a) || '.';
    }
    static async [a0cE(0xb84)](a, b, c = ![]) {
        const fv = a0cE, d = {
                'gUBoH': function (k, l, m) {
                    return k(l, m);
                },
                'ytLJc': fv(0xd3a),
                'zEXys': function (k, l) {
                    return k === l;
                },
                'TNLaV': fv(0xb86),
                'OOAQS': function (k, l) {
                    return k(l);
                },
                'UoBvY': fv(0x618),
                'bFbIW': 'skipped',
                'zfVEP': function (k, l) {
                    return k || l;
                },
                'UZhWi': fv(0x7c7),
                'gEAWC': fv(0x7dc),
                'kpTvD': function (k, l, m) {
                    return k(l, m);
                },
                'dgbwb': fv(0x2ff)
            };
        if (!a)
            throw new Error(d['ytLJc']);
        if (!Array[fv(0xaeb)](b) || d[fv(0xa68)](b['length'], 0x0))
            throw new Error(d[fv(0xa41)]);
        const f = a0o['resolve'](a0af[fv(0x56c)], a);
        if (!d[fv(0xac8)](a0as, f))
            throw new Error(d[fv(0xb7d)]);
        if (a0l[fv(0x493)](f) && a0l[fv(0x719)](f)[fv(0xd9a)]())
            throw new Error(fv(0xb33)[fv(0xbbc)](a));
        a0l[fv(0x80c)](a0o[fv(0x378)](f), { 'recursive': !![] });
        if (a0l[fv(0x493)](f))
            a0l[fv(0xd5d)](f);
        const g = a0at[fv(0x4aa)](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h['push']({
                    'item': k,
                    'status': d[fv(0xb3d)],
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[fv(0xe51)](a0af[fv(0x56c)], d['zfVEP'](k, ''));
            try {
                if (!d[fv(0xac8)](a0as, l)) {
                    h['push']({
                        'item': k,
                        'status': d[fv(0x249)],
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l['existsSync'](l)) {
                    h[fv(0x6b2)]({
                        'item': k,
                        'status': d[fv(0x8f6)],
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l['statSync'](l);
                let n = 0x0, o = ![];
                if (m[fv(0xa60)]()) {
                    if (!g[fv(0x70c)](a0o[fv(0x2e1)](l), a0l['readFileSync'](l), m[fv(0xcd0)])) {
                        j = !![], h['push']({
                            'item': k,
                            'status': d['bFbIW'],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[fv(0xd9a)]()) {
                        const p = a0o[fv(0x2e1)](l), q = (r, s) => {
                                const fw = fv;
                                for (const t of a0l[fw(0x23c)](r)) {
                                    const u = a0o[fw(0x3ec)](r, t), v = s ? ''[fw(0xbbc)](s, '/')[fw(0xbbc)](t) : t, w = a0l[fw(0x719)](u);
                                    if (w['isDirectory']()) {
                                        if (!g[fw(0x70c)](''[fw(0xbbc)](v, '/'), Buffer[fw(0xd4a)](0x0), w['mtime'], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        d[fw(0x2d6)](q, u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w['isFile']()) {
                                            if (!g[fw(0x70c)](v, a0l['readFileSync'](u), w[fw(0xcd0)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d['kpTvD'](q, l, c ? '' : p);
                    } else {
                        h[fv(0x6b2)]({
                            'item': k,
                            'status': d[fv(0x249)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h['push']({
                        'item': k,
                        'status': d['dgbwb'],
                        'added': n
                    });
                    continue;
                }
                i += n, h[fv(0x6b2)]({
                    'item': k,
                    'status': 'ok',
                    'added': n
                });
            } catch (r) {
                h[fv(0x6b2)]({
                    'item': k,
                    'status': fv(0x7c7),
                    'added': 0x0
                });
            }
        }
        return g[fv(0x675)](), {
            'status': 'ok',
            'path': a0au[fv(0x8d0)](f),
            'entries': i,
            'size': a0l['existsSync'](f) ? a0l[fv(0x719)](f)[fv(0x1d1)] : 0x0,
            'results': h
        };
    }
    static async [a0cE(0x87a)](a, b, c = !![], d = null) {
        const fx = a0cE, f = {
                'FMNQE': 'path\x20required',
                'renBt': function (p, q) {
                    return p(q);
                },
                'hlGcG': fx(0x618),
                'TECnA': function (p, q) {
                    return p(q);
                },
                'DLGFj': function (p, q) {
                    return p + q;
                },
                'tbXpJ': function (p, q) {
                    return p >= q;
                },
                'fWRZQ': function (p, q) {
                    return p !== q;
                },
                'uFoER': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f[fx(0x648)]);
        const g = a0o[fx(0xe51)](a0af[fx(0x56c)], a);
        if (!f[fx(0x1e0)](a0as, g))
            throw new Error(f[fx(0xa0a)]);
        if (!a0l[fx(0x493)](g))
            throw new Error(fx(0x1b4)[fx(0xbbc)](a));
        if (a0l['statSync'](g)[fx(0xd9a)]())
            throw new Error('Path\x20is\x20a\x20directory:\x20'[fx(0xbbc)](a));
        let h;
        if (b) {
            h = a0o['resolve'](a0af['FILE_ROOT'], b);
            if (!f[fx(0x6f9)](a0as, h))
                throw new Error(fx(0x618));
            if (a0l[fx(0x493)](h) && !a0l[fx(0x719)](h)[fx(0xd9a)]())
                throw new Error(fx(0x37f)['concat'](b));
        } else
            h = a0o['dirname'](g);
        a0l[fx(0x80c)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0at[fx(0xea0)](g);
        } catch (p) {
            throw new Error(fx(0x328)[fx(0xbbc)](a));
        }
        const j = (d || [])[fx(0x290)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[fx(0xd18)])
                continue;
            if (f[fx(0x262)](k, l) >= a0at['ZIP_MAX_ENTRIES'] || f[fx(0x99c)](m, a0at[fx(0x4bd)])) {
                l++;
                continue;
            }
            const r = q[fx(0x6b1)][fx(0xd15)](/\\/g, '/');
            if (j[fx(0x5bd)]) {
                const v = r[fx(0xa24)]('/')[fx(0x712)]();
                if (!j['includes'](r) && !j[fx(0x18c)](v)) {
                    l++;
                    continue;
                }
            }
            if (q['encrypted'] || q[fx(0xbb4)] || f[fx(0x262)](m, q[fx(0x1d1)]) > a0at[fx(0x4bd)]) {
                l++;
                continue;
            }
            const s = a0o['resolve'](h, r), t = a0o[fx(0x4fe)](h, s);
            if (t[fx(0x2da)]('..') || a0o[fx(0x1aa)](t)) {
                l++;
                continue;
            }
            if (!f[fx(0x6f9)](a0as, s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0at['inflate'](q);
            } catch (w) {
                l++;
                continue;
            }
            if (f[fx(0x5ab)](a0at[fx(0xb4f)](u), q['crc'])) {
                l++;
                continue;
            }
            if (!c && a0l[fx(0x493)](s)) {
                l++;
                continue;
            }
            try {
                a0l[fx(0x80c)](a0o[fx(0x378)](s), { 'recursive': !![] }), a0l[fx(0xd1f)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[fx(0x1d1)], f[fx(0x293)](n[fx(0x5bd)], a0at[fx(0xc16)]) ? n[fx(0x6b2)](a0au[fx(0x8d0)](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0au[fx(0x8d0)](g),
            'dest': a0au[fx(0x8d0)](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0av {
    static ['MAGIC'] = a0cE(0x9fa);
    static [a0cE(0xc63)] = 0x1;
    static [a0cE(0x916)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null,
        'hubregs': []
    };
    static [a0cE(0xe7b)]() {
        const fy = a0cE;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[fy(0x493)](a))
                return a;
        }
        try {
            return a0p['homedir']() || process[fy(0x189)]();
        } catch (b) {
            return process[fy(0x189)]();
        }
    }
    static [a0cE(0x959)](a) {
        const fz = a0cE, b = {
                'ZcVaD': fz(0x60f),
                'aNxXx': function (c, d) {
                    return c === d;
                }
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/['test'](a)) {
                const d = Buffer[fz(0x5a6)](a, b[fz(0x3bd)]);
                return d[fz(0x5bd)] === 0x20 ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/['test'](a))
                return null;
            const c = Buffer[fz(0x5a6)](a, fz(0x81a));
            return b[fz(0x63c)](c[fz(0x5bd)], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0cE(0x649)]() {
        const fA = a0cE, a = {
                'qlkdK': fA(0x65c),
                'bigLW': fA(0xb39),
                'hxbgW': fA(0x543),
                'LRazi': '.tmp',
                'KTsnJ': fA(0x18f),
                'fhqHf': fA(0xb8f)
            }, b = a0av['state'];
        let c = (process.env.KSTORE || '')[fA(0x1b7)]();
        if ([
                a[fA(0xa9c)],
                '0',
                a['bigLW'],
                a['hxbgW']
            ][fA(0x18c)](c[fA(0x846)]()))
            return a0R[fA(0x5a5)](fA(0x49e)), b;
        const d = (process.env.KSTORE_KEY || '')[fA(0x1b7)]();
        !c && (c = a0o[fA(0x3ec)](a0av[fA(0xe7b)](), a[fA(0x97d)], 'store.enc'));
        const f = a0av['parseKey'](d);
        if (!f) {
            if (d)
                a0R[fA(0x7c7)](a[fA(0x218)]);
            else
                a0R[fA(0x5a5)](a[fA(0x6c6)]);
            return b;
        }
        return b[fA(0x20c)] = c, b[fA(0x16f)] = f, b[fA(0x65a)] = !![], a0R[fA(0x5a5)](fA(0xb12)['concat'](b[fA(0x20c)])), b;
    }
    static ['encrypt'](a, b) {
        const fB = a0cE, c = {
                'PhLPZ': fB(0xa4b),
                'agAVf': fB(0x81a)
            }, d = a0k[fB(0x4ea)](0xc), f = a0k[fB(0x28c)](fB(0x1e7), a, d), g = Buffer[fB(0xbbc)]([
                f[fB(0x370)](Buffer['from'](b, c[fB(0x4df)])),
                f[fB(0xd99)]()
            ]), h = {
                'nonce': d[fB(0x7d1)](c[fB(0x655)]),
                'tag': f[fB(0x95d)]()['toString'](c[fB(0x655)]),
                'ciphertext': g[fB(0x7d1)](c['agAVf'])
            };
        return Buffer['from'](JSON[fB(0xb28)](h), fB(0xa4b))[fB(0x7d1)](c[fB(0x655)]);
    }
    static [a0cE(0x3e2)](a, b) {
        const fC = a0cE, c = {
                'NPHMZ': fC(0xa4b),
                'GHZhz': fC(0x321),
                'KXTWP': fC(0x1e7),
                'AVaYY': 'base64'
            }, d = JSON[fC(0xea0)](Buffer[fC(0x5a6)](b, fC(0x81a))['toString'](c[fC(0x98a)]));
        if (!d[fC(0xe2b)] || !d[fC(0x7a9)] || !d[fC(0x7a0)])
            throw new Error(c[fC(0x1b2)]);
        const f = a0k[fC(0x773)](c[fC(0x48e)], a, Buffer[fC(0x5a6)](d[fC(0xe2b)], c[fC(0xdce)]));
        return f[fC(0xe45)](Buffer[fC(0x5a6)](d['tag'], c[fC(0xdce)])), Buffer[fC(0xbbc)]([
            f['update'](Buffer[fC(0x5a6)](d[fC(0x7a0)], c['AVaYY'])),
            f['final']()
        ])['toString'](c['NPHMZ']);
    }
    static [a0cE(0x6ae)]() {
        const fD = a0cE, a = {
                'PGfog': fD(0xa4b),
                'wlpLS': function (c, d) {
                    return c !== d;
                },
                'sQCIe': fD(0x31f),
                'SLXOI': function (c, d) {
                    return c > d;
                },
                'OPseN': function (c, d) {
                    return c(d);
                },
                'YQREJ': function (c, d) {
                    return c(d);
                }
            }, b = a0av['state'];
        b[fD(0xbba)] = [];
        if (!b[fD(0x65a)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[fD(0x493)](b[fD(0x20c)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[fD(0x755)](b['path'], a[fD(0xedf)])[fD(0x1b7)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON['parse'](a0av[fD(0x3e2)](b['key'], c));
            } catch (j) {
                throw new Error(fD(0xd9b)['concat'](j['message']));
            }
            if (!d || a[fD(0x67f)](d[fD(0x244)], a0av[fD(0xd51)]))
                throw new Error(a[fD(0x72e)]);
            const f = parseInt(d[fD(0x38c)], 0xa) || 0x0;
            if (a[fD(0x44d)](f, a0av[fD(0xc63)]))
                return b[fD(0x8c4)] = !![], a0R[fD(0x7c7)]('[TaskStore]\x20❌\x20存储版本\x20'[fD(0xbbc)](f, '\x20高于支持版本\x20')['concat'](a0av[fD(0xc63)], fD(0x735))), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a[fD(0x67f)](f, a0av[fD(0xc63)]))
                throw new Error(fD(0x5e3)[fD(0xbbc)](f));
            const g = d[fD(0xa96)] || {};
            b[fD(0xa20)] = d['saved_at'] || null;
            const h = Array['isArray'](g[fD(0x305)]) ? g['onetasks'][fD(0x8ac)](String) : [], i = {};
            for (const [l, m] of Object[fD(0x25f)](g[fD(0xcf4)] || {}))
                i[a[fD(0x32b)](String, l)] = a['YQREJ'](String, m);
            return b['hubregs'] = (Array['isArray'](g['hubregs']) ? g['hubregs'] : [])[fD(0x290)](n => n && typeof n[fD(0xb7a)] === fD(0xcdb) && typeof n[fD(0x93e)] === fD(0xcdb))[fD(0x8ac)](n => ({
                'hub': n[fD(0xb7a)],
                'kname': n[fD(0x93e)],
                'ports': Array[fD(0xaeb)](n['ports']) ? n[fD(0xe02)][fD(0x290)](o => Number[fD(0xd74)](o) && o >= 0x1 && o <= 0xffff) : []
            })), a0R[fD(0x5a5)](fD(0xa79)[fD(0xbbc)](h[fD(0x5bd)], fD(0x87e))[fD(0xbbc)](Object[fD(0x4ff)](i)[fD(0x5bd)], fD(0x998))[fD(0xbbc)](b[fD(0xbba)]['length'])), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0av[fD(0x91b)](fD(0xabd)[fD(0xbbc)](n[fD(0x921)])), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static [a0cE(0x20a)]() {
        const fE = a0cE;
        return [...a0av[fE(0x916)][fE(0xbba)] || []];
    }
    static [a0cE(0xa34)](a) {
        const fF = a0cE, b = a0av['state'];
        if (!b[fF(0x65a)] || b[fF(0x8c4)])
            return ![];
        return b[fF(0xbba)] = (a || [])[fF(0x290)](c => c && c[fF(0xb7a)] && c[fF(0x93e)])[fF(0x8ac)](c => ({
            'hub': String(c[fF(0xb7a)]),
            'kname': String(c[fF(0x93e)]),
            'ports': (c[fF(0xe02)] || [])[fF(0x290)](d => Number['isInteger'](d) && d >= 0x1 && d <= 0xffff)
        })), a0av[fF(0x45c)](a0af[fF(0x305)], a0af[fF(0xcf4)]);
    }
    static [a0cE(0x91b)](a) {
        const fG = a0cE;
        try {
            const b = a0av[fG(0x916)];
            if (b[fG(0x20c)] && a0l[fG(0x493)](b[fG(0x20c)])) {
                const c = ''['concat'](b[fG(0x20c)], fG(0x289))[fG(0xbbc)](Date['now']());
                a0l[fG(0xa4c)](b[fG(0x20c)], c), a0R[fG(0x7c7)](fG(0x9d6)[fG(0xbbc)](a, ',\x20原文件已隔离:\x20')[fG(0xbbc)](c));
            } else
                a0R[fG(0x7c7)](fG(0x9d6)[fG(0xbbc)](a));
        } catch (d) {
            a0R[fG(0x7c7)](fG(0x9d6)['concat'](a, fG(0x68b))[fG(0xbbc)](d['message']));
        }
    }
    static [a0cE(0x45c)](a, b) {
        const fH = a0cE, c = { 'JPfnZ': fH(0xa4b) }, d = a0av[fH(0x916)];
        if (!d[fH(0x65a)] || d[fH(0x8c4)])
            return ![];
        let f = null;
        try {
            const g = {
                    'magic': a0av[fH(0xd51)],
                    'version': a0av[fH(0xc63)],
                    'saved_at': new Date()['toISOString']()['replace'](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {},
                        'hubregs': d['hubregs'] || []
                    }
                }, h = a0av['encrypt'](d[fH(0x16f)], JSON[fH(0xb28)](g));
            return a0l[fH(0x80c)](a0o[fH(0x378)](d[fH(0x20c)]), { 'recursive': !![] }), f = ''[fH(0xbbc)](d[fH(0x20c)], fH(0xc4e))['concat'](process[fH(0x4b1)]), a0l['writeFileSync'](f, h, c[fH(0xa21)]), a0l[fH(0xa4c)](f, d[fH(0x20c)]), d[fH(0xa20)] = g[fH(0x827)], !![];
        } catch (i) {
            a0R[fH(0x7c7)](fH(0xcc1)[fH(0xbbc)](i[fH(0x921)]));
            try {
                if (f && a0l[fH(0x493)](f))
                    a0l[fH(0xd5d)](f);
            } catch (j) {
            }
            return ![];
        }
    }
}
class a0aw {
    static [a0cE(0x963)] = new Map();
    static [a0cE(0x372)](a, b) {
        const fI = a0cE;
        a[fI(0x6b2)](b), a[fI(0x5bd)] > a0af[fI(0xe79)] && a['splice'](0x0, a[fI(0x5bd)] - a0af['MAX_TASK_LOG_SIZE']);
    }
    static [a0cE(0x6bd)](a, b, c, d, f = null) {
        const fJ = a0cE, g = new Date()[fJ(0x451)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': ''[fJ(0xbbc)](g, fJ(0x89e))[fJ(0xbbc)](a, '\x20----\x20exitcode=')[fJ(0xbbc)](c, '\x0a')[fJ(0xbbc)](b?.[fJ(0x1b7)]() || '')
        };
    }
    static [a0cE(0x778)]() {
        const fK = a0cE;
        return {
            'status': 'ok',
            'count': a0af[fK(0x305)][fK(0x5bd)],
            'tasks': a0af[fK(0x305)]
        };
    }
    static [a0cE(0xae8)] = /^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$/i;
    static [a0cE(0x47a)](a) {
        const fL = a0cE, b = {
                'FfNhp': function (d, f) {
                    return d(f);
                },
                'etnqi': function (d, f) {
                    return d ?? f;
                }
            }, c = b[fL(0x394)](String, b[fL(0xb8c)](a, ''))[fL(0xa24)]('\x0a')[fL(0x523)](0x0, 0x3);
        for (const d of c) {
            const f = a0aw[fL(0xae8)][fL(0x961)](d);
            if (!f)
                continue;
            const g = /\bid=(\d+)\b/['exec'](f[0x1])?.[0x1];
            if (!g)
                return null;
            const h = b[fL(0x394)](Number, /\bupdated=(\d+)\b/[fL(0x961)](f[0x1])?.[0x1] || 0x0);
            return {
                'id': g,
                'updated': h
            };
        }
        return null;
    }
    static [a0cE(0x863)](a) {
        const fM = a0cE, b = {
                'NBcJv': function (d, f) {
                    return d(f);
                },
                'pSXcw': function (d, f) {
                    return d ?? f;
                },
                'kxUln': function (d, f) {
                    return d < f;
                },
                'bfwao': function (d, f) {
                    return d + f;
                }
            }, c = b['NBcJv'](String, b[fM(0xdea)](a, ''))[fM(0xa24)]('\x0a');
        for (let d = 0x0; b['kxUln'](d, Math[fM(0x2d2)](0x3, c[fM(0x5bd)])); d++) {
            if (a0aw[fM(0xae8)][fM(0xbd9)](c[d]))
                return [
                    ...c[fM(0x523)](0x0, d),
                    ...c[fM(0x523)](b[fM(0xea3)](d, 0x1))
                ][fM(0x3ec)]('\x0a');
        }
        return b[fM(0xaa4)](String, a ?? '');
    }
    static [a0cE(0xa15)](a, b, c) {
        const fN = a0cE, d = {
                'iafoC': function (j, k) {
                    return j === k;
                },
                'WAWOL': fN(0xcec),
                'peqZo': fN(0x2e2)
            }, f = a0aw['stripTaskMetaLine'](a), g = d[fN(0x78b)](process[fN(0x772)], d[fN(0x1a0)]) ? d['peqZo'] : '#', h = ''[fN(0xbbc)](g, fN(0x7af))[fN(0xbbc)](b, '\x20updated=')[fN(0xbbc)](c), i = f[fN(0xa24)]('\x0a');
        return i[fN(0xead)](i[0x0]?.[fN(0x2da)]('#!') ? 0x1 : 0x0, 0x0, h), i[fN(0x3ec)]('\x0a');
    }
    static [a0cE(0xdac)](a, b) {
        const fO = a0cE, c = {
                'ITpAY': function (j, k) {
                    return j(k);
                },
                'bajlM': function (j, k) {
                    return j < k;
                },
                'JuQsj': function (j, k) {
                    return j(k);
                },
                'WJEte': function (j, k) {
                    return j === k;
                },
                'VbrKf': function (j, k) {
                    return j(k);
                }
            }, d = Date[fO(0x1cf)](), f = j => (j || [])[fO(0x8ac)](k => ({
                'raw': String(k ?? ''),
                'meta': a0aw[fO(0x47a)](k),
                'eff': a0aw[fO(0x863)](k)['trim']()
            })), g = c['ITpAY'](f, b), h = new Set(), i = [];
        for (const {
                    raw: j,
                    meta: k,
                    eff: l
                } of c[fO(0xb6d)](f, a)) {
            let m = -0x1;
            k && (m = g[fO(0xb5f)]((p, q) => !h[fO(0xa5c)](q) && p[fO(0xbb1)] && p[fO(0xbb1)]['id'] === k['id']));
            c[fO(0x758)](m, 0x0) && (m = g[fO(0xb5f)]((p, q) => !h[fO(0xa5c)](q) && p[fO(0x7fe)] === l && (!k || !p[fO(0xbb1)])));
            if (c[fO(0x758)](m, 0x0)) {
                i[fO(0x6b2)](a0aw[fO(0xa15)](l, c['JuQsj'](String, d), d));
                continue;
            }
            const n = g[m];
            h[fO(0x70c)](m);
            if (c[fO(0x5d2)](n[fO(0x7fe)], l)) {
                n[fO(0xbb1)] ? i[fO(0x6b2)](a0aw[fO(0xa15)](n[fO(0x738)], n[fO(0xbb1)]['id'], n[fO(0xbb1)]['updated'])) : i[fO(0x6b2)](a0aw[fO(0xa15)](n[fO(0x738)], k ? k['id'] : c[fO(0x604)](String, d), k && k[fO(0x5fa)] ? k['updated'] : d));
                continue;
            }
            const o = n[fO(0xbb1)] ? n[fO(0xbb1)]['id'] : k ? k['id'] : String(d);
            i['push'](a0aw[fO(0xa15)](l, o, d));
        }
        return i;
    }
    static [a0cE(0x2f6)](a, b) {
        const fP = a0cE, c = {
                'EZqvE': function (j, k) {
                    return j < k;
                },
                'CPXnH': function (j, k) {
                    return j(k);
                },
                'IKMwE': function (j, k) {
                    return j === k;
                }
            }, d = Date['now'](), f = ([j, k]) => ({
                'expr': String(j),
                'raw': String(k ?? ''),
                'meta': a0aw[fP(0x47a)](k),
                'eff': a0aw[fP(0x863)](k)['trim']()
            }), g = Object[fP(0x25f)](b || {})[fP(0x8ac)](f), h = new Set(), i = {};
        for (const {
                    expr: j,
                    raw: k,
                    meta: l,
                    eff: m
                } of Object[fP(0x25f)](a || {})[fP(0x8ac)](f)) {
            let n = -0x1;
            l && (n = g[fP(0xb5f)]((q, r) => !h[fP(0xa5c)](r) && q['meta'] && q[fP(0xbb1)]['id'] === l['id']));
            c[fP(0x291)](n, 0x0) && (n = g[fP(0xb5f)]((q, r) => !h[fP(0xa5c)](r) && q[fP(0x157)] === j && q[fP(0x7fe)] === m && (!l || !q[fP(0xbb1)])));
            if (c[fP(0x291)](n, 0x0)) {
                i[j] = a0aw[fP(0xa15)](m, c[fP(0x678)](String, d), d);
                continue;
            }
            const o = g[n];
            h[fP(0x70c)](n);
            if (c['IKMwE'](o[fP(0x7fe)], m) && c[fP(0xc95)](o[fP(0x157)], j)) {
                o[fP(0xbb1)] ? i[j] = a0aw[fP(0xa15)](o[fP(0x738)], o['meta']['id'], o[fP(0xbb1)][fP(0x5fa)]) : i[j] = a0aw[fP(0xa15)](o[fP(0x738)], l ? l['id'] : String(d), l && l[fP(0x5fa)] ? l[fP(0x5fa)] : d);
                continue;
            }
            const p = o['meta'] ? o['meta']['id'] : l ? l['id'] : String(d);
            i[j] = a0aw['withTaskMeta'](m, p, d);
        }
        return i;
    }
    static async [a0cE(0xe7a)](a) {
        const fQ = a0cE, b = {
                'vPwRe': fQ(0x3ed),
                'FmBuB': function (d, f) {
                    return d > f;
                },
                'rCwRg': 'onetime',
                'GPvem': function (d, f) {
                    return d === f;
                },
                'EIgmW': fQ(0x7c7)
            };
        if (!Array['isArray'](a)) {
            const d = new Error(b[fQ(0x61f)]);
            d[fQ(0x4f2)] = 0x190;
            throw d;
        }
        a0af[fQ(0x305)] = a && b[fQ(0xbdb)](a[fQ(0x5bd)], 0x0) ? a0aw[fQ(0xdac)](a, a0af[fQ(0x305)]) : [];
        const c = [];
        if (a0af[fQ(0xce0)] && a0af[fQ(0x305)][fQ(0x5bd)] > 0x0) {
            for (let f = 0x0; f < a0af[fQ(0x305)][fQ(0x5bd)]; f++) {
                const g = a0af[fQ(0x305)][f], h = await a0ar[fQ(0x3a3)](g), j = this[fQ(0x6bd)](g, h[fQ(0x932)], h[fQ(0x3bc)], b[fQ(0xeb5)]);
                this[fQ(0x372)](a0af['onetimetasks_log'], j), c[fQ(0x6b2)]({
                    'index': f,
                    'cmd': g,
                    'exitcode': h[fQ(0x3bc)],
                    'output': h[fQ(0x932)],
                    'status': b[fQ(0x733)](h['exitcode'], 0x0) ? 'ok' : b[fQ(0x2f0)]
                });
            }
            a0af[fQ(0xce0)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0af[fQ(0x305)]['length'],
            'tasks': a0af[fQ(0x305)],
            'executed': c,
            'persisted': a0av[fQ(0x45c)](a0af[fQ(0x305)], a0af[fQ(0xcf4)])
        };
    }
    static [a0cE(0xe99)]() {
        const fR = a0cE;
        return {
            'status': 'ok',
            'count': Object[fR(0x4ff)](a0af[fR(0xcf4)])[fR(0x5bd)],
            'tasks': a0af['crontasks']
        };
    }
    static ['setCronTasks'](a) {
        const fS = a0cE, b = {
                'SBykI': function (d, f) {
                    return d === f;
                },
                'ZuTBG': fS(0x1fa),
                'nZXmJ': fS(0x78d),
                'FRwIl': fS(0x7c7),
                'sYpJg': function (d, f) {
                    return d > f;
                }
            };
        this['cronJobs'][fS(0x815)](d => {
            const fT = fS;
            b[fT(0xcfc)](typeof d[fT(0x55c)], fT(0x1fa)) && d[fT(0x55c)](), b[fT(0xcfc)](typeof d[fT(0x2fe)], b[fT(0xa84)]) && d[fT(0x2fe)]();
        }), this[fS(0x963)][fS(0xb81)]();
        const c = [];
        for (const d of Object[fS(0x4ff)](a || {})) {
            !a0t[fS(0x59e)](d) && c['push'](d);
        }
        if (c[fS(0x5bd)] > 0x0)
            return {
                'status': b['FRwIl'],
                'message': 'Invalid\x20cron\x20expressions:\x20'[fS(0xbbc)](c[fS(0x3ec)](',\x20')),
                'valid_count': Object[fS(0x4ff)](a || {})['length'] - c[fS(0x5bd)]
            };
        a0af[fS(0xcf4)] = a && b['sYpJg'](Object['keys'](a)[fS(0x5bd)], 0x0) ? a0aw['normalizeCronTasks'](a, a0af[fS(0xcf4)]) : {};
        for (const [f, g] of Object[fS(0x25f)](a0af[fS(0xcf4)])) {
            const h = a0t[fS(0x9e7)](f, async () => {
                const fU = fS, i = await a0ar[fU(0x3a3)](g), j = this[fU(0x6bd)](g, i[fU(0x932)], i[fU(0x3bc)], b['nZXmJ'], f);
                this['_appendLog'](a0af['crontasks_log'], j);
            });
            this[fS(0x963)][fS(0x9c3)](f, h);
        }
        return a0af['cronloop'] = Object[fS(0x4ff)](a0af[fS(0xcf4)])[fS(0x5bd)] > 0x0, {
            'status': 'ok',
            'count': Object[fS(0x4ff)](a0af[fS(0xcf4)])[fS(0x5bd)],
            'tasks': a0af[fS(0xcf4)],
            'persisted': a0av[fS(0x45c)](a0af['onetasks'], a0af[fS(0xcf4)])
        };
    }
    static [a0cE(0x83a)]() {
        const fV = a0cE;
        return {
            'onetime': {
                'pending': a0af[fV(0xce0)],
                'count': a0af[fV(0x305)][fV(0x5bd)]
            },
            'cron': {
                'active': a0af[fV(0xa4f)],
                'count': Object[fV(0x4ff)](a0af[fV(0xcf4)])[fV(0x5bd)],
                'check_interval': a0af['CRON_CHECK_INTERVAL']
            },
            'persistence': {
                'enabled': a0av[fV(0x916)][fV(0x65a)],
                'store_path': a0av['state'][fV(0x20c)],
                'last_saved_at': a0av['state'][fV(0xa20)]
            }
        };
    }
    static [a0cE(0x192)](a = 0x32) {
        const fW = a0cE, b = a0af[fW(0xc0d)][fW(0x523)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static ['getCronLogs'](a = 0x32) {
        const fX = a0cE, b = a0af[fX(0x9ab)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[fX(0x5bd)],
            'logs': b
        };
    }
    static [a0cE(0xb61)]() {
        const fY = a0cE, a = { 'vUtak': 'onetime' }, b = a0af[fY(0xc0d)][fY(0x5bd)];
        return a0af[fY(0xc0d)] = [], {
            'status': 'ok',
            'cleared': a[fY(0x4cf)]
        };
    }
    static [a0cE(0xcf1)]() {
        const fZ = a0cE, a = { 'PjwQa': fZ(0x78d) }, b = a0af[fZ(0x9ab)][fZ(0x5bd)];
        return a0af['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a[fZ(0xe19)]
        };
    }
    static ['getLogSummary']() {
        const g0 = a0cE, a = {
                'IFIHd': function (g, h) {
                    return g - h;
                }
            }, b = a0af[g0(0xc0d)][g0(0x290)](g => g[g0(0x3bc)] === 0x0)[g0(0x5bd)], c = a[g0(0x996)](a0af[g0(0xc0d)]['length'], b), d = a0af['crontasks_log'][g0(0x290)](g => g[g0(0x3bc)] === 0x0)[g0(0x5bd)], f = a['IFIHd'](a0af[g0(0x9ab)]['length'], d);
        return {
            'onetime': {
                'total_logged': a0af[g0(0xc0d)][g0(0x5bd)],
                'max_capacity': a0af[g0(0xe79)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0af[g0(0x9ab)][g0(0x5bd)],
                'max_capacity': a0af[g0(0xe79)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const g1 = a0cE, a = {
                'omxxf': function (c, d) {
                    return c < d;
                },
                'bPwaG': 'onetime'
            }, b = [];
        for (let c = 0x0; a[g1(0x1b0)](c, a0af[g1(0x305)][g1(0x5bd)]); c++) {
            const d = a0af[g1(0x305)][c], f = await a0ar[g1(0x3a3)](d), g = this[g1(0x6bd)](d, f['result'], f[g1(0x3bc)], a[g1(0x4d3)]);
            this[g1(0x372)](a0af['onetimetasks_log'], g), b[g1(0x6b2)]({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f[g1(0x932)],
                'timeout': f[g1(0xcf6)]
            });
        }
        return a0af[g1(0xce0)] = ![], {
            'status': 'ok',
            'executed': b[g1(0x5bd)],
            'results': b
        };
    }
    static ['restoreFromStore']() {
        const g2 = a0cE, a = {
                'XPTkh': function (c, d) {
                    return c > d;
                },
                'AvCzB': function (c, d) {
                    return c > d;
                }
            };
        a0av[g2(0x649)]();
        const b = a0av[g2(0x6ae)]();
        a[g2(0xe8f)](b[g2(0x305)][g2(0x5bd)], 0x0) && (a0af[g2(0x305)] = b['onetasks']);
        if (Object[g2(0x4ff)](b[g2(0xcf4)])[g2(0x5bd)] > 0x0)
            try {
                a0aw[g2(0xbe2)](b[g2(0xcf4)]);
            } catch (c) {
                a0R[g2(0x7c7)]('[TaskStore]\x20❌\x20定时任务恢复异常\x20(不影响服务):\x20'[g2(0xbbc)](c[g2(0x921)]));
            }
        a[g2(0x946)](a0af[g2(0x305)]['length'], 0x0) && a0af[g2(0xce0)] && a0aw[g2(0xb96)]()[g2(0xea2)](d => a0R['error'](g2(0xa12)[g2(0xbbc)](d[g2(0x921)])));
    }
}
const a0ax = 'https://api.trycloudflare.com', a0ay = ((() => {
        const g3 = a0cE, a = {
                'VddUn': function (c, d) {
                    return c > d;
                },
                'JWyKQ': 'region2.v2.argotunnel.com'
            }, b = String(process.env.KISAMA_EDGE_HOSTS || '')[g3(0xa24)](',')[g3(0x8ac)](c => c[g3(0x1b7)]())[g3(0x290)](Boolean);
        return a[g3(0xe72)](b[g3(0x5bd)], 0x0) ? b : [
            g3(0x98e),
            a['JWyKQ']
        ];
    })()), a0az = 0x1ea4, a0aA = a0cE(0x17f), a0aB = a0cE(0x350), a0aC = 0x4000, a0aD = [
        [
            a0cE(0xdb5),
            ''
        ],
        [
            a0cE(0xc0e),
            a0cE(0x43d)
        ],
        [
            a0cE(0xc0e),
            a0cE(0x841)
        ],
        [
            ':path',
            '/'
        ],
        [
            a0cE(0x6df),
            '/index.html'
        ],
        [
            a0cE(0xea9),
            'http'
        ],
        [
            a0cE(0xea9),
            a0cE(0x75b)
        ],
        [
            ':status',
            a0cE(0x22e)
        ],
        [
            a0cE(0x702),
            a0cE(0x223)
        ],
        [
            ':status',
            a0cE(0x659)
        ],
        [
            ':status',
            '304'
        ],
        [
            a0cE(0x702),
            a0cE(0xaad)
        ],
        [
            a0cE(0x702),
            a0cE(0xd4d)
        ],
        [
            a0cE(0x702),
            '500'
        ],
        [
            a0cE(0xde4),
            ''
        ],
        [
            a0cE(0x911),
            a0cE(0x44a)
        ],
        [
            a0cE(0x589),
            ''
        ],
        [
            a0cE(0xea6),
            ''
        ],
        [
            a0cE(0x3ae),
            ''
        ],
        [
            a0cE(0x440),
            ''
        ],
        [
            a0cE(0x2c6),
            ''
        ],
        [
            a0cE(0xa89),
            ''
        ],
        [
            a0cE(0x41f),
            ''
        ],
        [
            'cache-control',
            ''
        ],
        [
            'content-disposition',
            ''
        ],
        [
            a0cE(0x35a),
            ''
        ],
        [
            a0cE(0x24d),
            ''
        ],
        [
            'content-length',
            ''
        ],
        [
            a0cE(0x250),
            ''
        ],
        [
            'content-range',
            ''
        ],
        [
            a0cE(0xb55),
            ''
        ],
        [
            a0cE(0x39a),
            ''
        ],
        [
            'date',
            ''
        ],
        [
            a0cE(0xd64),
            ''
        ],
        [
            'expect',
            ''
        ],
        [
            a0cE(0x6d8),
            ''
        ],
        [
            'from',
            ''
        ],
        [
            'host',
            ''
        ],
        [
            a0cE(0xa9b),
            ''
        ],
        [
            a0cE(0xcf7),
            ''
        ],
        [
            a0cE(0x7f6),
            ''
        ],
        [
            a0cE(0xb7b),
            ''
        ],
        [
            a0cE(0x6a7),
            ''
        ],
        [
            a0cE(0x5b0),
            ''
        ],
        [
            a0cE(0x66b),
            ''
        ],
        [
            a0cE(0xa9e),
            ''
        ],
        [
            a0cE(0x748),
            ''
        ],
        [
            a0cE(0x202),
            ''
        ],
        [
            a0cE(0x629),
            ''
        ],
        [
            a0cE(0x3a5),
            ''
        ],
        [
            'referer',
            ''
        ],
        [
            a0cE(0x66f),
            ''
        ],
        [
            a0cE(0x935),
            ''
        ],
        [
            'server',
            ''
        ],
        [
            a0cE(0x933),
            ''
        ],
        [
            a0cE(0x41e),
            ''
        ],
        [
            'transfer-encoding',
            ''
        ],
        [
            a0cE(0x593),
            ''
        ],
        [
            'vary',
            ''
        ],
        [
            a0cE(0xa14),
            ''
        ],
        [
            a0cE(0x7e8),
            ''
        ]
    ], a0aE = [
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
    ], a0aF = [
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
function a0aG() {
    const g4 = a0cE, a = {
            'meEWF': function (c, d) {
                return c < d;
            },
            'krVpE': function (c, d) {
                return c - d;
            },
            'pUsKZ': function (c, d) {
                return c >= d;
            },
            'QibrI': function (c, d) {
                return c & d;
            },
            'cQCUG': function (c, d) {
                return c >> d;
            },
            'YlRbh': function (c, d) {
                return c === d;
            },
            'sGIvD': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[g4(0xcfb)](c, a0aE[g4(0x5bd)]); c++) {
        const d = a0aE[c], f = a0aF[c];
        let g = b;
        for (let h = a['krVpE'](f, 0x1); a[g4(0x82f)](h, 0x0); h--) {
            const i = a['QibrI'](a['cQCUG'](d, h), 0x1);
            a[g4(0xab3)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[g4(0xae5)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0aH = a0aG();
function a0aI(a) {
    const g5 = a0cE, b = {
            'jpaVj': function (h, i) {
                return h >= i;
            },
            'liMkJ': function (h, i) {
                return h & i;
            },
            'CecmQ': function (h, i) {
                return h >> i;
            },
            'mpbYj': function (h, i) {
                return h | i;
            },
            'DCjuk': function (h, i) {
                return h === i;
            },
            'BXeJG': g5(0x58b),
            'mESJU': function (h, i) {
                return h >= i;
            },
            'RsjAh': function (h, i) {
                return h === i;
            },
            'fcvAp': g5(0x958),
            'Ohoyv': function (h, i) {
                return h > i;
            },
            'zbgdY': function (h, i) {
                return h - i;
            },
            'EYilU': function (h, i) {
                return h << i;
            },
            'YIMPO': g5(0x22c)
        }, c = [];
    let d = a0aH, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[g5(0x5cd)](i, 0x0); i--) {
            const j = b[g5(0x85b)](b[g5(0x913)](h, i), 0x1);
            f = b['mpbYj'](f << 0x1, j), g += 0x1, d = d[j];
            if (b['DCjuk'](d, null))
                throw new Error(b['BXeJG']);
            if (b[g5(0x322)](d[0x2], 0x0)) {
                const k = '0|2|3|1|4'['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        if (b['RsjAh'](d[0x2], 0x100))
                            throw new Error(b[g5(0x599)]);
                        continue;
                    case '1':
                        f = 0x0;
                        continue;
                    case '2':
                        c['push'](d[0x2]);
                        continue;
                    case '3':
                        d = a0aH;
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
    if (b[g5(0xb62)](g, 0x7) || f !== b[g5(0x61c)](b[g5(0xd91)](0x1, g), 0x1))
        throw new Error(b[g5(0xa7f)]);
    return Buffer[g5(0x5a6)](c);
}
function a0aJ(a, b, c) {
    const g6 = a0cE, d = {
            'CaEHC': function (j, k) {
                return j - k;
            },
            'rHjAY': function (j, k) {
                return j << k;
            },
            'eHcMg': function (j, k) {
                return j < k;
            },
            'cFZXM': function (j, k) {
                return j >= k;
            },
            'myhkI': g6(0x8fd),
            'dVOBT': function (j, k) {
                return j * k;
            },
            'RAQit': function (j, k) {
                return j & k;
            },
            'KqjeI': function (j, k) {
                return j === k;
            },
            'ZfutR': function (j, k) {
                return j > k;
            },
            'JhMfX': 'HPACK\x20integer\x20too\x20large'
        };
    if (b >= a[g6(0x5bd)])
        throw new Error(g6(0x8fd));
    const f = a[b];
    b += 0x1;
    const g = d[g6(0x7ca)](d['rHjAY'](0x1, c), 0x1);
    let h = f & g;
    if (d[g6(0x353)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[g6(0xbaa)](b, a[g6(0x5bd)]))
            throw new Error(d[g6(0x54e)]);
        const j = a[b];
        b += 0x1, h += d['dVOBT'](d['RAQit'](j, 0x7f), Math[g6(0x858)](0x2, i));
        if (d[g6(0x490)](d[g6(0xcc9)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[g6(0x973)](i, 0x1c))
            throw new Error(d['JhMfX']);
    }
}
function a0aK(a, b) {
    const g7 = a0cE, c = {
            'kwNJo': function (j, k) {
                return j >= k;
            },
            'fyztk': 'truncated\x20HPACK\x20string',
            'sOEtV': function (j, k) {
                return j & k;
            },
            'FobYF': function (j, k, l, m) {
                return j(k, l, m);
            },
            'krCfR': function (j, k) {
                return j + k;
            },
            'Tcajp': function (j, k) {
                return j > k;
            },
            'DucMD': 'truncated\x20HPACK\x20string\x20data',
            'xwwAP': function (j, k) {
                return j(k);
            }
        };
    if (c['kwNJo'](b, a[g7(0x5bd)]))
        throw new Error(c[g7(0xa62)]);
    const d = Boolean(c['sOEtV'](a[b], 0x80)), [f, g] = c['FobYF'](a0aJ, a, b, 0x7), h = c[g7(0xd56)](g, f);
    if (c[g7(0x25c)](h, a[g7(0x5bd)]))
        throw new Error(c[g7(0xd14)]);
    const i = a['subarray'](g, h);
    return [
        d ? c[g7(0x707)](a0aI, i) : i,
        h
    ];
}
class a0aL {
    constructor() {
        const g8 = a0cE;
        this[g8(0x85d)] = [], this[g8(0x5f9)] = 0x0, this[g8(0xe42)] = 0x1000;
    }
    ['tableEntry'](a) {
        const g9 = a0cE, b = {
                'DKGWo': function (d, f) {
                    return d <= f;
                },
                'hSYlw': g9(0x583),
                'qWBbA': function (d, f) {
                    return d - f;
                },
                'SqlyL': function (d, f) {
                    return d - f;
                },
                'rqgOH': function (d, f) {
                    return d < f;
                },
                'xqvRh': function (d, f) {
                    return d >= f;
                },
                'FNhGi': 'HPACK\x20dynamic\x20index\x20out\x20of\x20range'
            };
        if (b['DKGWo'](a, 0x0))
            throw new Error(b[g9(0x769)]);
        if (b[g9(0xc3c)](a, a0aD[g9(0x5bd)]))
            return a0aD[b[g9(0xd8c)](a, 0x1)];
        const c = b[g9(0xd68)](b['qWBbA'](a, a0aD[g9(0x5bd)]), 0x1);
        if (b[g9(0xc94)](c, 0x0) || b[g9(0x2a3)](c, this[g9(0x85d)]['length']))
            throw new Error(b[g9(0x217)]);
        return this['dynamic'][c];
    }
    ['add'](a, b) {
        const ga = a0cE, c = {
                'jDfpE': function (f, g) {
                    return f + g;
                },
                'RhWYo': ga(0xa4b),
                'fQrsu': function (f, g) {
                    return f > g;
                },
                'VFTaa': function (f, g) {
                    return f > g;
                },
                'NhTdx': function (f, g) {
                    return f + g;
                },
                'zbTOl': function (f, g) {
                    return f + g;
                },
                'dKxYu': function (f, g) {
                    return f + g;
                }
            }, d = c[ga(0x810)](0x20, Buffer[ga(0xbc8)](a, c['RhWYo'])) + Buffer[ga(0xbc8)](b, c[ga(0x228)]);
        if (c[ga(0x2bc)](d, this[ga(0xe42)])) {
            this['dynamic'] = [], this[ga(0x5f9)] = 0x0;
            return;
        }
        while (this['dynamic']['length'] > 0x0 && c['VFTaa'](c[ga(0x41a)](this[ga(0x5f9)], d), this[ga(0xe42)])) {
            const [f, g] = this[ga(0x85d)]['pop']();
            this[ga(0x5f9)] -= c[ga(0x1c1)](c[ga(0xdd9)](0x20, Buffer[ga(0xbc8)](f, c['RhWYo'])), Buffer[ga(0xbc8)](g, c[ga(0x228)]));
        }
        this[ga(0x85d)]['unshift']([
            a,
            b
        ]), this['dynamicSize'] += d;
    }
    [a0cE(0x9d8)](a) {
        const gb = a0cE, b = {
                'SICRD': function (f, g) {
                    return f < g;
                },
                'hOjsN': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'TLeYZ': function (f, g) {
                    return f & g;
                },
                'RGROp': function (f, g, h) {
                    return f(g, h);
                },
                'ifYJI': 'utf8',
                'qDsBH': function (f, g) {
                    return f > g;
                },
                'tlecF': gb(0xa92),
                'mgWYL': function (f, g) {
                    return f > g;
                },
                'rmyiW': function (f, g) {
                    return f > g;
                },
                'ImqHK': function (f, g) {
                    return f + g;
                },
                'ciJPs': function (f, g) {
                    return f + g;
                },
                'NiEEE': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (b[gb(0x547)](d, a['length'])) {
            const f = a[d];
            if (f & 0x80) {
                let j;
                [j, d] = b[gb(0xac0)](a0aJ, a, d, 0x7), c[gb(0x6b2)](this[gb(0x1df)](j));
                continue;
            }
            if (b['TLeYZ'](f, 0x40)) {
                let k, l;
                [k, d] = b[gb(0xac0)](a0aJ, a, d, 0x6);
                if (k)
                    l = this['tableEntry'](k)[0x0];
                else {
                    let o;
                    [o, d] = b[gb(0x4e2)](a0aK, a, d), l = o[gb(0x7d1)](b[gb(0x2d4)])['toLowerCase']();
                }
                let m;
                [m, d] = b[gb(0x4e2)](a0aK, a, d);
                const n = m[gb(0x7d1)](b[gb(0x2d4)]);
                this[gb(0x70c)](l, n), c[gb(0x6b2)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b[gb(0x9ff)](f, 0x20)) {
                let p;
                [p, d] = a0aJ(a, d, 0x5);
                if (b['qDsBH'](p, 0x1000))
                    throw new Error(b[gb(0x5b8)]);
                this[gb(0xe42)] = p;
                while (b[gb(0xb06)](this[gb(0x85d)]['length'], 0x0) && b[gb(0x852)](this[gb(0x5f9)], p)) {
                    const [q, r] = this[gb(0x85d)][gb(0x712)]();
                    this[gb(0x5f9)] -= b[gb(0xe80)](b[gb(0x972)](0x20, Buffer['byteLength'](q, b[gb(0x2d4)])), Buffer[gb(0xbc8)](r, b[gb(0x2d4)]));
                }
                continue;
            }
            let g, h;
            [g, d] = b['hOjsN'](a0aJ, a, d, 0x4);
            if (g)
                h = this['tableEntry'](g)[0x0];
            else {
                let s;
                [s, d] = a0aK(a, d), h = s[gb(0x7d1)](b[gb(0x2d4)])['toLowerCase']();
            }
            let i;
            [i, d] = b[gb(0x5a2)](a0aK, a, d), c[gb(0x6b2)]([
                h,
                i[gb(0x7d1)](b[gb(0x2d4)])
            ]);
        }
        return c;
    }
}
function a0aM(a, b, c) {
    const gc = a0cE, d = {
            'pwJhm': function (h, i) {
                return h - i;
            },
            'PMibL': function (h, i) {
                return h << i;
            },
            'rpAwh': function (h, i) {
                return h < i;
            },
            'OUgqm': function (h, i) {
                return h | i;
            },
            'SDytj': function (h, i) {
                return h >= i;
            },
            'gUnzz': function (h, i) {
                return h & i;
            },
            'GDYeq': function (h, i) {
                return h / i;
            }
        }, f = d['pwJhm'](d['PMibL'](0x1, b), 0x1);
    if (d[gc(0x329)](a, f))
        return Buffer[gc(0x5a6)]([c | a]);
    const g = [d[gc(0x721)](c, f)];
    a -= f;
    while (d[gc(0xa30)](a, 0x80)) {
        g['push'](d[gc(0x721)](d[gc(0xb11)](a, 0x7f), 0x80)), a = Math[gc(0x513)](d[gc(0x685)](a, 0x80));
    }
    return g[gc(0x6b2)](a), Buffer['from'](g);
}
function a0aN(a) {
    const gd = a0cE, b = { 'tQhDW': gd(0xa4b) }, c = Buffer['from'](a, b['tQhDW']);
    return Buffer[gd(0xbbc)]([
        a0aM(c[gd(0x5bd)], 0x7, 0x0),
        c
    ]);
}
function a0aO(a) {
    const ge = a0cE, b = {
            'ScTAz': ge(0x702),
            'LUUOu': '200',
            'ZfXJq': ge(0x223),
            'KskWJ': function (d, f) {
                return d === f;
            },
            'ckHtq': ge(0x659),
            'KIYeJ': '304',
            'ohpma': ge(0xaad),
            'UZvah': function (d, f) {
                return d === f;
            },
            'nCQcF': function (d, f) {
                return d === f;
            },
            'TfAol': ge(0xd4d),
            'AYOHb': function (d, f) {
                return d === f;
            },
            'yNKlK': ge(0x2a6),
            'hmaTn': function (d, f, g, h) {
                return d(f, g, h);
            },
            'DThsh': function (d, f) {
                return d(f);
            },
            'YSjcr': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (d === b['ScTAz'] && f === b[ge(0x780)])
            c[ge(0x6b2)](0x88);
        else {
            if (d === b['ScTAz'] && f === b['ZfXJq'])
                c[ge(0x6b2)](0x89);
            else {
                if (d === b['ScTAz'] && b[ge(0xeda)](f, b[ge(0x266)]))
                    c[ge(0x6b2)](0x8a);
                else {
                    if (b['KskWJ'](d, b['ScTAz']) && f === b[ge(0xdc7)])
                        c[ge(0x6b2)](0x8b);
                    else {
                        if (b['KskWJ'](d, b['ScTAz']) && f === b[ge(0x53b)])
                            c[ge(0x6b2)](0x8c);
                        else {
                            if (b[ge(0x6b8)](d, b['ScTAz']) && b[ge(0x3e1)](f, b[ge(0xe39)]))
                                c[ge(0x6b2)](0x8d);
                            else
                                b[ge(0xeda)](d, b[ge(0x1a5)]) && b[ge(0x221)](f, b['yNKlK']) ? c[ge(0x6b2)](0x8e) : (c['push'](...b[ge(0xece)](a0aM, 0x0, 0x4, 0x0)), c[ge(0x6b2)](...b[ge(0xbc5)](a0aN, d)), c[ge(0x6b2)](...b[ge(0x2d9)](a0aN, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[ge(0x5a6)](c);
}
class a0aP {
    constructor() {
        const gf = a0cE;
        this[gf(0x414)] = [];
    }
    [a0cE(0xd4a)](a) {
        const gg = a0cE, b = {
                'zruVc': function (d, f) {
                    return d < f;
                }
            }, c = this[gg(0x414)][gg(0x5bd)];
        for (let d = 0x0; b[gg(0xb92)](d, a); d++) {
            this[gg(0x414)]['push'](0x0n);
        }
        return c;
    }
    [a0cE(0xd8a)](a, b, c, d) {
        const gh = a0cE, f = {
                'gGcFr': function (j, k) {
                    return j - k;
                },
                'fnUBO': function (j, k) {
                    return j - k;
                },
                'LbsGQ': function (j, k) {
                    return j | k;
                },
                'LXLnw': function (j, k) {
                    return j(k);
                },
                'HfIwX': function (j, k) {
                    return j & k;
                },
                'WJcIU': function (j, k) {
                    return j << k;
                },
                'TINSr': function (j, k) {
                    return j(k);
                },
                'WjzYA': function (j, k) {
                    return j & k;
                }
            }, g = f[gh(0x193)](f[gh(0xbc9)](b, a), 0x1), h = BigInt(g) << 0x2n & 0xfffffffcn, i = f[gh(0x979)](f[gh(0xcda)](BigInt, f[gh(0x807)](c, 0xffff)), f[gh(0x6b7)](f[gh(0xe88)](BigInt, f['WjzYA'](d, 0xffff)), 0x10n));
        this[gh(0x414)][a] = h | f[gh(0x6b7)](i, 0x20n);
    }
    ['setU8'](a, b, c) {
        const gi = a0cE, d = {
                'ekgGr': function (g, h) {
                    return g(h);
                },
                'vnJtO': function (g, h) {
                    return g * h;
                },
                'RdQht': function (g, h) {
                    return g | h;
                },
                'ABqnz': function (g, h) {
                    return g & h;
                },
                'iwmfb': function (g, h) {
                    return g(h);
                }
            }, f = 0xffn << d[gi(0xdec)](BigInt, d[gi(0x8f0)](b, 0x8));
        this[gi(0x414)][a] = d[gi(0x794)](this[gi(0x414)][a] & ~f, d[gi(0xdec)](BigInt, d[gi(0x6c4)](c, 0xff)) << d['iwmfb'](BigInt, d[gi(0x8f0)](b, 0x8)));
    }
    [a0cE(0x260)](a, b, c) {
        const gj = a0cE, d = {
                'AUVpU': function (g, h) {
                    return g << h;
                },
                'xjcbk': function (g, h) {
                    return g(h);
                },
                'wmyyN': function (g, h) {
                    return g | h;
                },
                'pVhin': function (g, h) {
                    return g(h);
                },
                'zRZAu': function (g, h) {
                    return g(h);
                }
            }, f = d[gj(0x4a8)](0xffffn, d['xjcbk'](BigInt, b * 0x8));
        this['words'][a] = d[gj(0x5e1)](this['words'][a] & ~f, d[gj(0xc27)](BigInt, c & 0xffff) << d[gj(0x53f)](BigInt, b * 0x8));
    }
    [a0cE(0x522)](a, b, c) {
        const gk = a0cE, d = {
                'fprnu': function (g, h) {
                    return g(h);
                },
                'mdcDQ': function (g, h) {
                    return g * h;
                },
                'fXAis': function (g, h) {
                    return g | h;
                },
                'KeHGb': function (g, h) {
                    return g << h;
                },
                'pFFRl': function (g, h) {
                    return g & h;
                },
                'EqWaG': function (g, h) {
                    return g * h;
                }
            }, f = 0xffffffffn << d[gk(0x27d)](BigInt, d['mdcDQ'](b, 0x8));
        this['words'][a] = d[gk(0x40a)](this['words'][a] & ~f, d[gk(0xc59)](BigInt(d['pFFRl'](c, 0xffffffff)), d[gk(0x27d)](BigInt, d[gk(0x4ee)](b, 0x8))));
    }
    [a0cE(0xe11)](a, b) {
        const c = {
            'MAVKm': function (d, f) {
                return d & f;
            }
        };
        this['words'][a] = c['MAVKm'](BigInt(b), 0xffffffffffffffffn);
    }
    [a0cE(0x8e3)](a, b, c = ![]) {
        const gl = a0cE, d = {
                'mPIOd': function (m, n) {
                    return m === n;
                },
                'kvxPV': 'string',
                'nAGlE': 'utf8',
                'RpeCy': function (m, n) {
                    return m + n;
                },
                'Yeifa': function (m, n) {
                    return m / n;
                },
                'uJJSX': function (m, n) {
                    return m < n;
                },
                'tRrFX': function (m, n) {
                    return m / n;
                },
                'mCvEI': function (m, n) {
                    return m % n;
                },
                'YGtVD': function (m, n) {
                    return m - n;
                },
                'gMQuY': function (m, n) {
                    return m | n;
                },
                'wqtUK': function (m, n) {
                    return m << n;
                },
                'IwdDL': function (m, n) {
                    return m(n);
                },
                'koxbt': function (m, n) {
                    return m | n;
                },
                'fShRi': function (m, n) {
                    return m << n;
                },
                'SQfEz': function (m, n) {
                    return m(n);
                },
                'fEYTj': function (m, n) {
                    return m | n;
                }
            }, f = d['mPIOd'](typeof b, d[gl(0x82d)]) ? Buffer['from'](b, d[gl(0x9ba)]) : b, g = d[gl(0xe48)](f[gl(0x5bd)], c ? 0x1 : 0x0), h = this[gl(0xd4a)](Math[gl(0x9ad)](d[gl(0x939)](g, 0x8)));
        for (let m = 0x0; d['uJJSX'](m, f[gl(0x5bd)]); m++) {
            this[gl(0x7dd)](d[gl(0xe48)](h, Math[gl(0x513)](d[gl(0xc45)](m, 0x8))), d[gl(0x1ff)](m, 0x8), f[m]);
        }
        const j = d[gl(0x8d3)](h, a) - 0x1, k = d['gMQuY'](d[gl(0x3d5)](d[gl(0x745)](BigInt, j), 0x2n), 0x1n) & 0xffffffffn, l = d[gl(0x7a6)](0x2n, d[gl(0x9a2)](d[gl(0x4d1)](BigInt, g & 0x1fffffff), 0x3n));
        this[gl(0x414)][a] = d[gl(0x689)](k, d['fShRi'](l, 0x20n));
    }
    [a0cE(0xc29)](a, b) {
        const gm = a0cE, c = {
                'AInCl': function (g, h) {
                    return g - h;
                },
                'YKWQw': function (g, h) {
                    return g - h;
                },
                'oGXPJ': function (g, h) {
                    return g & h;
                },
                'ZBucq': function (g, h) {
                    return g | h;
                },
                'ACMFc': function (g, h) {
                    return g << h;
                },
                'WZqhu': function (g, h) {
                    return g(h);
                },
                'eWVLE': function (g, h) {
                    return g << h;
                },
                'XwHVd': function (g, h) {
                    return g | h;
                },
                'jpCXt': function (g, h) {
                    return g < h;
                },
                'PQbhg': function (g, h) {
                    return g + h;
                }
            };
        if (!b[gm(0x5bd)]) {
            this[gm(0x414)][a] = 0x0n;
            return;
        }
        const d = this[gm(0xd4a)](b[gm(0x5bd)]), f = c[gm(0x587)](c[gm(0x73d)](d, a), 0x1);
        this['words'][a] = c[gm(0x3aa)](c['ZBucq'](c[gm(0xd0a)](c[gm(0x81e)](BigInt, f), 0x2n), 0x1n), 0xffffffffn) | c['eWVLE'](c[gm(0x620)](0x6n, c[gm(0xd0a)](BigInt(b[gm(0x5bd)]), 0x3n)), 0x20n);
        for (let g = 0x0; c['jpCXt'](g, b['length']); g++) {
            this[gm(0x8e3)](c[gm(0x512)](d, g), b[g], !![]);
        }
    }
    ['writeStructList'](a, b, c, d, f) {
        const gn = a0cE, g = {
                'McjSH': function (m, n) {
                    return m + n;
                },
                'Pzlel': function (m, n) {
                    return m * n;
                },
                'CiwGB': function (m, n) {
                    return m - n;
                },
                'dXjLJ': function (m, n) {
                    return m & n;
                },
                'BCYqB': function (m, n) {
                    return m | n;
                },
                'WHRmg': function (m, n) {
                    return m << n;
                },
                'oqIkg': function (m, n) {
                    return m(n);
                },
                'ABOkc': function (m, n) {
                    return m << n;
                },
                'VqGqS': function (m, n) {
                    return m * n;
                },
                'QpQoT': function (m, n) {
                    return m | n;
                },
                'eNTUz': function (m, n) {
                    return m | n;
                },
                'DoZqe': function (m, n) {
                    return m < n;
                },
                'DrMWG': function (m, n, o) {
                    return m(n, o);
                },
                'CpojG': function (m, n) {
                    return m + n;
                }
            }, h = this[gn(0xd4a)](0x1), j = g['McjSH'](c, d), k = this[gn(0xd4a)](g['Pzlel'](b, j)), l = g[gn(0x187)](h, a) - 0x1;
        this[gn(0x414)][a] = g[gn(0x76c)](g['BCYqB'](g[gn(0x2f7)](g[gn(0xd3b)](BigInt, l), 0x2n), 0x1n), 0xffffffffn) | g[gn(0x2f7)](g[gn(0xdd6)](g[gn(0xca0)](g[gn(0xd3b)](BigInt, b), g['oqIkg'](BigInt, j)), 0x3n) | 0x7n, 0x20n), this[gn(0x414)][h] = g[gn(0xa8e)](g['eNTUz'](g['oqIkg'](BigInt, b) << 0x2n, g[gn(0xd3b)](BigInt, c) << 0x20n), BigInt(d) << 0x30n);
        for (let m = 0x0; g[gn(0x995)](m, b); m++) {
            g[gn(0x3f1)](f, m, g[gn(0x960)](k, g[gn(0xca0)](m, j)));
        }
    }
    [a0cE(0x7f1)]() {
        const go = a0cE, a = {
                'hQNIr': function (d, f) {
                    return d * f;
                },
                'PqImZ': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[go(0xd4a)](0x8);
        b[go(0xb15)](0x0, 0x0), b[go(0xb15)](this['words']['length'], 0x4);
        const c = Buffer[go(0xd4a)](a[go(0xcae)](this['words'][go(0x5bd)], 0x8));
        for (let d = 0x0; d < this[go(0x414)][go(0x5bd)]; d++) {
            c[go(0x8ee)](a[go(0x3fd)](this[go(0x414)][d], 0xffffffffffffffffn), a[go(0xcae)](d, 0x8));
        }
        return Buffer[go(0xbbc)]([
            b,
            c
        ]);
    }
}
function a0aQ(a) {
    const gp = a0cE, b = new a0aP(), c = b[gp(0xd4a)](0x1), d = b[gp(0xd4a)](0x1), f = b['alloc'](0x1);
    b[gp(0xd8a)](c, d, 0x1, 0x1), b[gp(0x260)](d, 0x0, 0x8);
    const g = b[gp(0xd4a)](0x1);
    return b['alloc'](0x1), b[gp(0xd8a)](f, g, 0x1, 0x1), b[gp(0x522)](g, 0x0, a), b['finish']();
}
function a0aR(a, b, c, d, f, g) {
    const gq = a0cE, h = {
            'zHUGL': function (H, I) {
                return H | I;
            },
            'mPomX': function (H, I) {
                return H & I;
            },
            'NFHhs': function (H, I) {
                return H & I;
            },
            'MmWFO': gq(0x433),
            'xXPrW': gq(0x644)
        }, i = new a0aP(), j = i['alloc'](0x1), k = i[gq(0xd4a)](0x1), l = i[gq(0xd4a)](0x1);
    i[gq(0xd8a)](j, k, 0x1, 0x1), i[gq(0x260)](k, 0x0, 0x2);
    const m = i['alloc'](0x1), n = i[gq(0xd4a)](0x1);
    i[gq(0xd4a)](0x1);
    const o = i['alloc'](0x1), p = i[gq(0xd4a)](0x1);
    i[gq(0xd4a)](0x1), i['structPtr'](l, m, 0x3, 0x3), i['setU32'](m, 0x0, a), i['setU64'](n, 0xf71695ec7fe85497n);
    const q = i[gq(0xd4a)](0x1), r = i[gq(0xd4a)](0x1);
    i['structPtr'](o, q, 0x1, 0x1), i['setU16'](q, 0x4, 0x1);
    const s = i[gq(0xd4a)](0x1);
    i[gq(0xd4a)](0x1), i[gq(0xd8a)](r, s, 0x1, 0x1), i[gq(0x522)](s, 0x0, b);
    const t = i[gq(0xd4a)](0x1);
    i[gq(0xd4a)](0x1), i['structPtr'](p, t, 0x0, 0x2);
    const u = i['alloc'](0x1), v = i['alloc'](0x1), w = i[gq(0xd4a)](0x1), x = i[gq(0xd4a)](0x1);
    i[gq(0xd8a)](t, u, 0x1, 0x3), i[gq(0x7dd)](u, 0x0, g);
    const y = i[gq(0xd4a)](0x1), z = i['alloc'](0x1);
    i[gq(0xd8a)](v, y, 0x0, 0x2), i[gq(0x8e3)](y, c, !![]), i[gq(0x8e3)](z, d), i[gq(0x8e3)](w, f);
    const A = i[gq(0xd4a)](0x1), B = i[gq(0xd4a)](0x1);
    i[gq(0xd4a)](0x1), i['structPtr'](x, A, 0x1, 0x2);
    const C = i[gq(0xd4a)](0x1), D = i[gq(0xd4a)](0x1), E = i[gq(0xd4a)](0x1), F = i[gq(0xd4a)](0x1);
    i[gq(0xd8a)](B, C, 0x0, 0x4);
    const G = a0k[gq(0x4ea)](0x10);
    return G[0x6] = h[gq(0x555)](h[gq(0xbc4)](G[0x6], 0xf), 0x40), G[0x8] = h[gq(0x555)](h['NFHhs'](G[0x8], 0x3f), 0x80), i['writeBytes'](C, G), i[gq(0xc29)](D, [
        h[gq(0x43a)],
        h[gq(0x1ad)]
    ]), i[gq(0x8e3)](E, gq(0xd35), !![]), i[gq(0x8e3)](F, 'Nexus-Python', !![]), i[gq(0x7f1)]();
}
function a0aS(a) {
    const gr = a0cE, b = {
            'lsQDv': function (f, g) {
                return f >= g;
            },
            'GLIzR': function (f, g) {
                return f - g;
            },
            'CZBXO': function (f, g) {
                return f + g;
            },
            'MFZUl': function (f, g) {
                return f + g;
            },
            'WSZmB': function (f, g) {
                return f % g;
            },
            'DrsJH': function (f, g) {
                return f - g;
            },
            'sPEXe': function (f, g) {
                return f + g;
            },
            'RlgMQ': function (f, g) {
                return f + g;
            },
            'kHzDE': function (f, g) {
                return f * g;
            },
            'svaYJ': function (f, g) {
                return f * g;
            },
            'HhIJQ': function (f, g) {
                return f - g;
            },
            'aVojV': function (f, g) {
                return f !== g;
            },
            'mPqyz': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b[gr(0xb56)](b[gr(0x7e9)](a[gr(0x5bd)], d), 0x8)) {
        const f = a[gr(0x6f7)](d), g = a[gr(0x6f7)](b[gr(0xe77)](d, 0x4)), h = b[gr(0xe77)](f, 0x1);
        let j = b[gr(0xbf9)](h, 0x1), k = j * 0x4;
        b[gr(0x9a6)](k, 0x8) && (k += 0x4);
        if (b[gr(0x669)](a[gr(0x5bd)], d) < k)
            break;
        const l = [g];
        for (let n = 0x1; n < h; n++) {
            l[gr(0x6b2)](a[gr(0x6f7)](b[gr(0x367)](b['RlgMQ'](d, 0x4), b[gr(0x518)](n, 0x4))));
        }
        const m = b[gr(0x441)](k, b['svaYJ'](l[gr(0x8df)]((o, p) => o + p, 0x0), 0x8));
        if (b['HhIJQ'](a[gr(0x5bd)], d) < m)
            break;
        if (b[gr(0x8b4)](h, 0x1))
            throw new Error(gr(0x5e6));
        c[gr(0x6b2)](a['subarray'](b['mPqyz'](d, k), b[gr(0x441)](d, m))), d += m;
    }
    return [
        c,
        a[gr(0x516)](d)
    ];
}
function a0aT(a, b) {
    const gs = a0cE, c = {
            'Axhkv': function (j, k) {
                return j >= k;
            },
            'YsqGa': gs(0xd08),
            'MpsHz': function (j, k) {
                return j & k;
            },
            'Qstud': gs(0x5af),
            'WtXDg': function (j, k) {
                return j >> k;
            },
            'NuPRJ': function (j, k) {
                return j + k;
            },
            'ebLxC': function (j, k) {
                return j(k);
            },
            'sbtjb': function (j, k) {
                return j(k);
            },
            'dWnqp': function (j, k) {
                return j & k;
            },
            'HoruT': function (j, k) {
                return j >> k;
            },
            'lIuPU': function (j, k) {
                return j < k;
            },
            'UWkAp': function (j, k) {
                return j > k;
            }
        };
    if (c['Axhkv'](b, a[gs(0x5bd)]))
        throw new Error(c[gs(0xbe7)]);
    const d = a[b];
    if (c[gs(0x16c)](d, 0x3n) !== 0x0n)
        throw new Error(c['Qstud']);
    let f = c['MpsHz'](c[gs(0x399)](d, 0x2n), 0x3fffffffn);
    c['MpsHz'](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[gs(0x897)](b + 0x1, Number(f)), h = c[gs(0x787)](Number, c[gs(0x16c)](c[gs(0x399)](d, 0x20n), 0xffffn)), i = c['sbtjb'](Number, c['dWnqp'](c[gs(0xdff)](d, 0x30n), 0xffffn));
    if (c[gs(0xc76)](g, 0x0) || c[gs(0x82a)](c[gs(0x897)](g + h, i), a[gs(0x5bd)]))
        throw new Error(c[gs(0xbe7)]);
    return [
        g,
        h,
        i
    ];
}
function a0aU(a) {
    const gt = a0cE, b = {
            'VeuVj': function (d, f) {
                return d <= f;
            },
            'HkkFj': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[gt(0x52e)](b[gt(0x6eb)](d, 0x8), a[gt(0x5bd)]); d += 0x8) {
        c[gt(0x6b2)](a[gt(0xd76)](d));
    }
    return c;
}
function a0aV(a, b) {
    const gu = a0cE, c = {
            'fehlQ': function (p, q) {
                return p >= q;
            },
            'MTOIK': function (p, q) {
                return p !== q;
            },
            'sNigJ': function (p, q) {
                return p & q;
            },
            'vJYaW': function (p, q) {
                return p !== q;
            },
            'zjYjm': function (p, q) {
                return p & q;
            },
            'mlntn': function (p, q) {
                return p >> q;
            },
            'MPNyF': function (p, q) {
                return p & q;
            },
            'VaWby': function (p, q) {
                return p & q;
            },
            'Qbutv': function (p, q) {
                return p + q;
            },
            'olcEF': function (p, q) {
                return p(q);
            },
            'OvqYh': function (p, q) {
                return p < q;
            },
            'GkLng': function (p, q) {
                return p >= q;
            },
            'znpdv': function (p, q) {
                return p & q;
            },
            'USKqv': function (p, q) {
                return p >> q;
            },
            'fLXHF': function (p, q) {
                return p(q);
            },
            'rRuSS': function (p, q) {
                return p(q);
            },
            'xrhMG': function (p, q) {
                return p >> q;
            },
            'Ciqqh': function (p, q) {
                return p + q;
            },
            'tpClK': function (p, q) {
                return p === q;
            },
            'gcFNq': function (p, q) {
                return p !== q;
            },
            'pONWN': function (p, q) {
                return p * q;
            },
            'TqXyb': function (p, q) {
                return p + q;
            },
            'MQbma': function (p, q) {
                return p + q;
            },
            'JERKL': function (p, q, r) {
                return p(q, r);
            },
            'wxUIv': function (p, q, r) {
                return p(q, r);
            }
        };
    if (c[gu(0x691)](b, a['length']))
        return null;
    const d = a[b];
    if (c[gu(0xba1)](c[gu(0xbcb)](d, 0x3n), 0x1n) || c[gu(0xa13)](c[gu(0xe54)](c[gu(0xec5)](d, 0x20n), 0x7n), 0x7n))
        return null;
    let f = c[gu(0x18e)](d >> 0x2n, 0x3fffffffn);
    c['VaWby'](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[gu(0x8e6)](c[gu(0x8e6)](b, 0x1), Number(f)), h = c['olcEF'](Number, c[gu(0xec5)](d, 0x23n));
    if (c['OvqYh'](g, 0x0) || c[gu(0x542)](g, a[gu(0x5bd)]))
        return null;
    const j = a[g];
    if (c[gu(0x6fb)](j, 0x3n) !== 0x0n)
        return null;
    const k = c[gu(0x900)](Number, c[gu(0xbcb)](c['USKqv'](j, 0x20n), 0xffffn)), l = c[gu(0x4ec)](Number, j >> 0x30n & 0xffffn), m = c[gu(0x9f3)](Number, c[gu(0xc10)](j, 0x2n) & 0x3fffffffn), n = c[gu(0x927)](k, l);
    if (c[gu(0x728)](l, 0x2) || c['tpClK'](n, 0x0) || c['gcFNq'](c[gu(0x7ea)](n, m), h))
        return null;
    if (c[gu(0x8e6)](c[gu(0xd4f)](g, 0x1), n * m) > a['length'])
        return null;
    const o = [];
    for (let p = 0x0; c[gu(0x728)](p, m); p++) {
        const q = c[gu(0x927)](c[gu(0x9cd)](g, 0x1), c['pONWN'](p, n));
        o[gu(0x6b2)]([
            c[gu(0xc2e)](a0aW, a, q + k),
            c[gu(0x4a7)](a0aW, a, q + k + 0x1)
        ]);
    }
    return o;
}
function a0aW(a, b) {
    const gv = a0cE, c = {
            'ecFDE': function (m, n) {
                return m >= n;
            },
            'vVKKp': function (m, n) {
                return m & n;
            },
            'YobfN': function (m, n) {
                return m >> n;
            },
            'intaj': function (m, n) {
                return m & n;
            },
            'KcUes': function (m, n) {
                return m + n;
            },
            'aCckj': function (m, n) {
                return m(n);
            },
            'MkcaH': function (m, n) {
                return m(n);
            },
            'NMAAS': function (m, n) {
                return m > n;
            },
            'TuMlZ': function (m, n) {
                return m + n;
            },
            'Pugst': function (m, n) {
                return m * n;
            },
            'vSshG': function (m, n) {
                return m < n;
            },
            'wYEOr': function (m, n) {
                return m & n;
            },
            'EaJfp': function (m, n) {
                return m + n;
            },
            'IILUr': function (m, n) {
                return m * n;
            },
            'YxmBV': gv(0xa4b)
        };
    if (c['ecFDE'](b, a[gv(0x5bd)]))
        return '';
    const d = a[b];
    if (c['vVKKp'](d, 0x3n) !== 0x1n)
        return '';
    let f = c[gv(0xa2a)](d, 0x2n) & 0x3fffffffn;
    c[gv(0x6c0)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[gv(0x83e)](b + 0x1, Number(f)), h = c['aCckj'](Number, c['YobfN'](d, 0x20n) & 0x7n), j = c[gv(0xdfb)](Number, d >> 0x23n), k = Math[gv(0x9ad)](j / 0x8);
    if (h !== 0x2 || g < 0x0 || c['NMAAS'](c['TuMlZ'](g, k), a[gv(0x5bd)]))
        return '';
    const l = Buffer[gv(0xd4a)](c[gv(0xa63)](k, 0x8));
    for (let m = 0x0; c[gv(0xde1)](m, k); m++) {
        l['writeBigUInt64LE'](c[gv(0x7bb)](a[c[gv(0xd95)](g, m)], 0xffffffffffffffffn), c[gv(0x159)](m, 0x8));
    }
    return l[gv(0x516)](0x0, j)[gv(0x7d1)](c[gv(0x3de)])[gv(0xd15)](/\0+$/, '');
}
function a0aX(a) {
    const gw = a0cE, b = {
            'XFwWn': function (u, v) {
                return u % v;
            },
            'lucVR': function (u, v) {
                return u < v;
            },
            'zXYPd': gw(0x331),
            'veKJR': function (u, v, w) {
                return u(v, w);
            },
            'ISbFt': function (u, v) {
                return u !== v;
            },
            'INRXA': function (u, v) {
                return u & v;
            },
            'dMKEz': function (u, v) {
                return u >> v;
            },
            'ZLNkT': function (u, v) {
                return u + v;
            },
            'XKGfO': 'unknown\x20error',
            'DeOFr': function (u, v) {
                return u + v;
            },
            'NDPBg': gw(0xb5b),
            'xsbag': gw(0xab5),
            'jMvmC': function (u, v) {
                return u & v;
            },
            'cJwMS': function (u, v, w) {
                return u(v, w);
            },
            'iRZwM': function (u, v) {
                return u + v;
            },
            'cYZID': function (u, v) {
                return u === v;
            },
            'BgWLQ': function (u, v) {
                return u === v;
            },
            'ZCQUN': function (u, v) {
                return u > v;
            },
            'xjQnp': function (u, v) {
                return u(v);
            },
            'xrQOL': function (u, v) {
                return u + v;
            },
            'JeguI': function (u, v, w) {
                return u(v, w);
            },
            'CAUJV': function (u, v) {
                return u + v;
            },
            'ROVRI': function (u, v) {
                return u || v;
            }
        };
    if (b[gw(0xe58)](a[gw(0x5bd)], 0x8) || b[gw(0xb24)](a['length'], 0x10))
        throw new Error(b['zXYPd']);
    const c = a0aU(a);
    let d, f, g;
    [d, f, g] = b[gw(0xdbe)](a0aT, c, 0x0);
    if (f < 0x1 || b['ISbFt'](b[gw(0xa75)](c[d], 0xffffn), 0x3n))
        throw new Error(gw(0x17a));
    const [h, i, j] = b[gw(0xdbe)](a0aT, c, d + f), k = Number(b[gw(0xe85)](c[h], 0x30n) & 0xffffn);
    if (k === 0x4) {
        const [u, v] = a0aT(c, b[gw(0x41b)](h, i));
        return {
            'ok': ![],
            'error': a0aW(c, u + v) || b['XKGfO']
        };
    }
    if (b[gw(0x785)](k, 0x0))
        return {
            'ok': ![],
            'error': b['DeOFr'](b[gw(0xc3f)], k)
        };
    const [l, m, n] = b[gw(0xdbe)](a0aT, c, h + i);
    if (!n)
        return {
            'ok': ![],
            'error': b[gw(0x3db)]
        };
    const o = c[b[gw(0x41b)](l, m)];
    if (b[gw(0xe93)](o, 0x3n) === 0x3n)
        return {
            'ok': ![],
            'bootstrap': !![]
        };
    let p, q, r;
    [p, q, r] = b[gw(0xafe)](a0aT, c, b[gw(0xb42)](l, m));
    b[gw(0x420)](q, 0x0) && b[gw(0x570)](r, 0x1) && ([p, q, r] = a0aT(c, b[gw(0x41b)](p, q)));
    const s = b[gw(0x2ca)](q, 0x0) ? b[gw(0x588)](Number, b[gw(0xa75)](c[p], 0xffffn)) : 0x0;
    if (b[gw(0x420)](s, 0x1)) {
        const [w, x] = a0aT(c, b[gw(0x1a3)](p, q)), y = a0aW(c, b['ZLNkT'](b[gw(0x3ee)](w, x), 0x1));
        return {
            'ok': !![],
            'location': y
        };
    }
    const t = b[gw(0x323)](a0aW, c, b[gw(0x5c9)](p, q));
    return {
        'ok': ![],
        'error': b[gw(0x651)](t, gw(0x3e7))
    };
}
function a0aY(a) {
    const gx = a0cE, b = {
            'Ggzgu': function (h, i) {
                return h(i);
            },
            'rhATm': function (h, i) {
                return h < i;
            },
            'mMxJS': function (h, i) {
                return h < i;
            },
            'rAMUa': gx(0x409),
            'lNuJX': function (h, i, j) {
                return h(i, j);
            },
            'Kbvef': function (h, i) {
                return h + i;
            },
            'DJCbB': function (h, i) {
                return h(i);
            }
        }, c = b[gx(0x43e)](a0aU, a);
    if (!c[gx(0x5bd)])
        throw new Error('empty\x20Cap\x27n\x20Proto\x20ConnectRequest');
    let d, f, g;
    [d, f, g] = a0aT(c, 0x0);
    if (b[gx(0xa70)](f, 0x1) || b['mMxJS'](g, 0x2))
        throw new Error(b[gx(0xc31)]);
    return {
        'dest': b[gx(0x78c)](a0aW, c, b[gx(0xda0)](d, f)),
        'type': b[gx(0x634)](Number, c[d] & 0xffffn),
        'metadata': b['lNuJX'](a0aV, c, b[gx(0xda0)](d + f, 0x1)) || []
    };
}
function a0aZ(a, b) {
    const gy = a0cE, c = {
            'VImlH': function (h, i) {
                return h + i;
            },
            'bEAPw': function (h, i) {
                return h || i;
            }
        }, d = new a0aP(), f = d['alloc'](0x1), g = d[gy(0xd4a)](0x2);
    return d['structPtr'](f, g, 0x0, 0x2), d[gy(0x8e3)](g, c[gy(0xc6b)](a, ''), !![]), d[gy(0x5bf)](c[gy(0x660)](g, 0x1), b[gy(0x5bd)], 0x0, 0x2, (h, i) => {
        const gz = gy;
        d[gz(0x8e3)](i, b[h][0x0], !![]), d[gz(0x8e3)](c[gz(0x660)](i, 0x1), b[h][0x1], !![]);
    }), d[gy(0x7f1)]();
}
const a0b0 = {
    '.js': 'text/javascript;\x20charset=utf-8',
    '.mjs': a0cE(0x7fb),
    '.css': 'text/css;\x20charset=utf-8',
    '.json': a0cE(0x2a1),
    '.map': 'application/json;\x20charset=utf-8',
    '.wasm': a0cE(0xe90),
    '.html': a0cE(0x182),
    '.htm': a0cE(0x182),
    '.svg': a0cE(0x306),
    '.xml': a0cE(0x774),
    '.woff': 'font/woff2',
    '.woff2': a0cE(0xb49),
    '.png': 'image/png',
    '.jpg': a0cE(0x1d4),
    '.jpeg': 'image/jpeg',
    '.gif': a0cE(0xccb),
    '.ico': a0cE(0x64a)
};
function a0b1(a) {
    const gA = a0cE, b = {
            'quFvO': function (f, g) {
                return f < g;
            }
        }, c = a[gA(0x8a2)]('/') ? a[gA(0x523)](0x0, -0x1) : a, d = c[gA(0x253)]('.');
    if (b['quFvO'](d, 0x0))
        return '';
    return a0b0[c[gA(0x523)](d)[gA(0x846)]()] || '';
}
function a0b2(a) {
    const gB = a0cE, b = {
            'EOSTk': gB(0xcdb),
            'uDEoB': gB(0x33a),
            'idzBl': function (c, d) {
                return c % d;
            },
            'bCBxY': gB(0x81a)
        };
    if (Array[gB(0xaeb)](a))
        return Buffer[gB(0x5a6)](a);
    if (typeof a !== b[gB(0x1d9)])
        throw new Error(b['uDEoB']);
    return Buffer[gB(0x5a6)](a + '='[gB(0x59b)](b[gB(0x66d)](-a[gB(0x5bd)], 0x4)), b['bCBxY']);
}
const a0b3 = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0b4(a) {
    const gC = a0cE, b = {
            'nZiTZ': gC(0xa4b),
            'nXoQM': function (c, d) {
                return c(d);
            },
            'fQAOQ': function (c, d) {
                return c + d;
            },
            'oORCM': '):\x20',
            'nzJtE': 'quick\x20tunnel\x20request\x20was\x20rejected:\x20',
            'VsqDE': function (c, d) {
                return c !== d;
            },
            'dUYxm': gC(0xcdb),
            'KJCMI': gC(0xb89),
            'esCeP': gC(0xa96),
            'jcCQd': gC(0x7c7),
            'zGugL': gC(0x3a9),
            'gYwaw': function (c, d) {
                return c + d;
            },
            'QmFOq': function (c, d) {
                return c + d;
            },
            'kNVBZ': gC(0xb2d),
            'cNPNY': function (c, d) {
                return c === d;
            },
            'jqWnS': gC(0x450)
        };
    return new Promise((c, d) => {
        const gD = gC, f = {
                'usHlk': b[gD(0x888)],
                'sUTww': function (j, k) {
                    const gE = gD;
                    return b[gE(0xdad)](j, k);
                },
                'hAIsx': function (j, k) {
                    return b['fQAOQ'](j, k);
                },
                'VVqYl': function (j, k) {
                    return j + k;
                },
                'KzpwW': 'quick\x20tunnel\x20returned\x20non-JSON\x20(',
                'tmfpJ': b['oORCM'],
                'DWyoe': b[gD(0xe9a)],
                'czrhz': function (j, k) {
                    return b['VsqDE'](j, k);
                },
                'daOOb': b[gD(0x759)],
                'EQJLe': b[gD(0x550)],
                'rDLjW': b['esCeP'],
                'acOnn': b[gD(0x94d)],
                'cgVSH': b[gD(0x2b9)]
            };
        let g;
        try {
            g = new URL(b[gD(0x855)](a[gD(0xd15)](/\/+$/, ''), gD(0x454)));
        } catch (j) {
            b[gD(0xdad)](d, new Error(b[gD(0x459)](b[gD(0xe46)], j[gD(0x921)])));
            return;
        }
        const h = b['cNPNY'](g[gD(0x25e)], b[gD(0x31c)]) ? a0h : a0g, i = h[gD(0x597)](g, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    'User-Agent': gD(0xb0c)
                },
                'timeout': 0x3a98
            }, k => {
                const gF = gD, l = [];
                k['on'](f['rDLjW'], m => l['push'](m)), k['on'](f['acOnn'], d), k['on'](f[gF(0x1f5)], () => {
                    const gG = gF, m = Buffer[gG(0xbbc)](l), n = k[gG(0xa98)];
                    let o;
                    try {
                        o = JSON[gG(0xea0)](m['toString'](f[gG(0x91d)]));
                    } catch (q) {
                        f[gG(0xe4a)](d, new Error(f[gG(0x73f)](f[gG(0x73f)](f[gG(0x276)](f['KzpwW'], n), f[gG(0xd6b)]), m['subarray'](0x0, 0x12c)[gG(0x7d1)](f[gG(0x91d)]))));
                        return;
                    }
                    const p = o[gG(0x932)] || {};
                    if (!(o['success'] ?? !![]) || !p) {
                        f[gG(0xe4a)](d, new Error(f[gG(0x716)] + JSON[gG(0xb28)](o[gG(0xe7f)])));
                        return;
                    }
                    try {
                        const r = String(p['id']);
                        if (!a0b3['test'](r))
                            throw new Error(gG(0x889));
                        if (typeof p['account_tag'] !== gG(0xcdb) || f[gG(0xbd3)](typeof p[gG(0x578)], f[gG(0x1c2)]))
                            throw new Error(gG(0xcc5));
                        const s = a0b2(p[gG(0xc20)]), t = Buffer[gG(0x5a6)](r[gG(0xd15)](/-/g, ''), gG(0x60f));
                        c([
                            p[gG(0x578)],
                            p['account_tag'],
                            s,
                            t
                        ]);
                    } catch (u) {
                        d(new Error(f[gG(0x276)](f['EQJLe'], u[gG(0x921)])));
                    }
                });
            });
        i['on'](gD(0x7c7), k => d(new Error(gD(0xb2d) + k[gD(0x921)]))), i[gD(0x3a9)]();
    });
}
function a0b5(a) {
    const gH = a0cE;
    return a[gH(0x8ac)](([b, c]) => Buffer[gH(0x5a6)](b, gH(0xa4b))[gH(0x7d1)](gH(0x81a))[gH(0xd15)](/=+$/, '') + ':' + Buffer['from'](c, gH(0xa4b))[gH(0x7d1)](gH(0x81a))[gH(0xd15)](/=+$/, ''))[gH(0x3ec)](';');
}
class a0b6 {
    constructor(a) {
        const gI = a0cE, b = {
                'BagRt': '6|7|5|2|0|8|4|1|3',
                'LJxFh': gI(0x3a9),
                'unvPG': gI(0x675),
                'pbqao': gI(0xa96)
            }, c = b[gI(0x54c)][gI(0xa24)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[gI(0xbdc)] = ![];
                continue;
            case '1':
                a['on'](b[gI(0x9da)], () => {
                    const gJ = gI;
                    this[gJ(0xbdc)] = !![], this[gJ(0x99f)]();
                });
                continue;
            case '2':
                this[gI(0x89b)] = null;
                continue;
            case '3':
                a['on'](b[gI(0xc2a)], () => {
                    const gK = gI;
                    this[gK(0xbdc)] = !![], this['_drain']();
                });
                continue;
            case '4':
                a['on'](gI(0x7c7), f => {
                    const gL = gI;
                    this['errored'] = f, this[gL(0x99f)]();
                });
                continue;
            case '5':
                this['waiters'] = [];
                continue;
            case '6':
                this[gI(0xb2c)] = a;
                continue;
            case '7':
                this[gI(0x693)] = Buffer[gI(0xd4a)](0x0);
                continue;
            case '8':
                a['on'](b['pbqao'], f => {
                    const gM = gI;
                    this[gM(0x693)] = this[gM(0x693)][gM(0x5bd)] ? Buffer[gM(0xbbc)]([
                        this[gM(0x693)],
                        f
                    ]) : f, this['_drain']();
                });
                continue;
            }
            break;
        }
    }
    [a0cE(0x99f)]() {
        const gN = a0cE, a = {
                'gtCzr': function (b, c) {
                    return b > c;
                },
                'WXlTm': function (b, c) {
                    return b !== c;
                },
                'obSwA': gN(0xecd)
            };
        while (a[gN(0xade)](this['waiters'][gN(0x5bd)], 0x0)) {
            const b = this[gN(0x615)][0x0];
            if (this[gN(0x693)][gN(0x5bd)] >= b[gN(0x1c5)]) {
                this[gN(0x615)][gN(0xc78)]();
                const c = this[gN(0x693)][gN(0x516)](0x0, b[gN(0x1c5)]);
                this[gN(0x693)] = this[gN(0x693)][gN(0x516)](b[gN(0x1c5)]), b[gN(0xe51)](c);
            } else {
                if (a[gN(0x2b4)](this[gN(0x89b)], null))
                    this[gN(0x615)][gN(0xc78)](), b[gN(0x6c8)](this['errored']);
                else {
                    if (this[gN(0xbdc)])
                        this[gN(0x615)][gN(0xc78)](), b[gN(0x6c8)](new Error(a['obSwA']));
                    else
                        break;
                }
            }
        }
    }
    [a0cE(0xaf3)](a) {
        const gO = a0cE, b = {
                'rhHHx': function (c, d) {
                    return c !== d;
                }
            };
        if (b[gO(0x626)](this[gO(0x89b)], null))
            return Promise[gO(0x6c8)](this['errored']);
        if (this[gO(0x693)]['length'] >= a) {
            const c = this[gO(0x693)][gO(0x516)](0x0, a);
            return this['buffer'] = this[gO(0x693)][gO(0x516)](a), Promise['resolve'](c);
        }
        if (this[gO(0xbdc)])
            return Promise[gO(0x6c8)](new Error(gO(0xecd)));
        return new Promise((d, f) => {
            const gP = gO;
            this[gP(0x615)][gP(0x6b2)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[gP(0x99f)]();
        });
    }
}
class a0b7 {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const gQ = a0cE;
        this['sock'] = a, this[gQ(0x584)] = new a0b6(a), this['origin'] = b, this[gQ(0x924)] = c, this[gQ(0x69b)] = d, this[gQ(0x71e)] = f, this['connIndex'] = g, this[gQ(0xabe)] = h, this[gQ(0x36a)] = i, this[gQ(0x45b)] = j, this[gQ(0x6ab)] = k || { 'printed': ![] }, this[gQ(0xe98)] = new a0aL(), this[gQ(0xd84)] = 0xffff, this[gQ(0x299)] = new Map(), this[gQ(0x9c8)] = a0aC, this[gQ(0x1b8)] = new Map(), this[gQ(0x8de)] = null, this[gQ(0x58d)] = ![], this['registered'] = ![], this[gQ(0x6d3)] = ![], this[gQ(0x610)] = [];
    }
    ['sendFrame'](a, b, c, d = Buffer['alloc'](0x0)) {
        const gR = a0cE, f = {
                'LMhRX': function (h, i) {
                    return h > i;
                },
                'LJPyz': gR(0xde2),
                'sGRrp': function (h, i) {
                    return h & i;
                }
            };
        if (f['LMhRX'](d['length'], 0xffffff))
            throw new Error(f[gR(0x5a8)]);
        const g = Buffer[gR(0xd4a)](0x9);
        g[gR(0x775)](d[gR(0x5bd)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[gR(0x2c1)](f['sGRrp'](c, 0x7fffffff), 0x5), this[gR(0x296)]['write'](Buffer[gR(0xbbc)]([
            g,
            d
        ]));
    }
    [a0cE(0xd92)](a, b, c = ![]) {
        const gS = a0cE, d = {
                'dcXXR': function (h, i) {
                    return h(i);
                },
                'KVwSL': function (h, i) {
                    return h | i;
                }
            }, f = d[gS(0x180)](a0aO, b), g = d[gS(0x3c8)](0x4, c ? 0x1 : 0x0);
        this['sendFrame'](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const gT = a0cE, b = {
                'IUyYj': function (c, d) {
                    return c > d;
                }
            };
        if (b[gT(0xb73)](this[gT(0xd84)], 0x0) && (this[gT(0x299)][gT(0x8f4)](a) ?? 0xffff) > 0x0)
            return Promise[gT(0xe51)]();
        return new Promise(c => {
            const gU = gT;
            this[gU(0x610)]['push']({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0cE(0xdd7)]() {
        const gV = a0cE, a = {
                'dFvZP': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[gV(0x610)]) {
            const d = this[gV(0x299)][gV(0x8f4)](c[gV(0x2c2)]) ?? 0xffff;
            this['connectionWindow'] > 0x0 && a[gV(0x5a7)](d, 0x0) ? c[gV(0xe51)]() : b['push'](c);
        }
        this[gV(0x610)] = b;
    }
    [a0cE(0x197)]() {
        const gW = a0cE;
        for (const a of this[gW(0x610)]) {
            a[gW(0xe51)]();
        }
        this[gW(0x610)] = [];
    }
    async ['sendData'](a, b, c = ![]) {
        const gX = a0cE, d = {
                'bAqJX': function (h, i) {
                    return h >= i;
                },
                'bHmdM': function (h, i) {
                    return h + i;
                },
                'voyuv': function (h, i) {
                    return h - i;
                },
                'QtlNj': function (h, i) {
                    return h < i;
                }
            }, f = b[gX(0x5bd)];
        let g = 0x0;
        do {
            await this[gX(0x98d)](a);
            if (this[gX(0x58d)])
                return;
            const h = this[gX(0x299)][gX(0x8f4)](a) ?? 0xffff, i = Math[gX(0x2d2)](f - g, this[gX(0xd84)], h, this[gX(0x9c8)]), j = c && d[gX(0xee0)](g + i, f) ? 0x1 : 0x0, k = b['subarray'](g, d[gX(0x66e)](g, i));
            this[gX(0xd84)] -= i, this['streamWindows'][gX(0x9c3)](a, d[gX(0x925)](h, i)), this[gX(0x8a0)](0x0, j, a, k), g += i;
        } while (d[gX(0x4ad)](g, f));
    }
    ['sendWindowUpdate'](a, b) {
        const gY = a0cE, c = {
                'kKneb': function (d, f) {
                    return d > f;
                },
                'sZNem': function (d, f) {
                    return d & f;
                }
            };
        if (c['kKneb'](b, 0x0)) {
            const d = Buffer[gY(0xd4a)](0x4);
            d[gY(0x2c1)](c[gY(0x71c)](b, 0x7fffffff), 0x0), this[gY(0x8a0)](0x8, 0x0, a, d);
        }
    }
    async ['readFrame']() {
        const gZ = a0cE, a = await this[gZ(0x584)][gZ(0xaf3)](0x9), b = a[gZ(0x5e7)](0x0, 0x3), c = a[0x3], d = a[0x4], f = a['readUInt32BE'](0x5) & 0x7fffffff, g = await this[gZ(0x584)][gZ(0xaf3)](b);
        return [
            c,
            d,
            f,
            g
        ];
    }
    async [a0cE(0xc62)](a, b, c) {
        const h0 = a0cE, d = {
                'YeqGN': function (g, h) {
                    return g & h;
                },
                'fABta': function (g, h) {
                    return g > h;
                },
                'vHnxe': function (g, h) {
                    return g !== h;
                },
                'MvcTW': function (g, h) {
                    return g !== h;
                },
                'UQszd': h0(0xee1)
            };
        if (d[h0(0x31e)](a, 0x8)) {
            const g = c[0x0];
            c = c['subarray'](0x1);
            if (d[h0(0x46b)](g, c[h0(0x5bd)]))
                throw new Error(h0(0x60a));
            c = g ? c['subarray'](0x0, c['length'] - g) : c;
        }
        a & 0x20 && (c = c[h0(0x516)](0x5));
        const f = [c];
        while (!(a & 0x4)) {
            const h = await this[h0(0xe81)]();
            if (d['vHnxe'](h[0x0], 0x9) || d[h0(0x37c)](h[0x2], b))
                throw new Error(d['UQszd']);
            f['push'](h[0x3]), a = h[0x1];
        }
        return this[h0(0xe98)][h0(0x9d8)](Buffer['concat'](f));
    }
    [a0cE(0xa8d)](a) {
        const h1 = a0cE, b = {
                'mFhJn': ':status',
                'TNzoW': h1(0x22e)
            };
        if (this[h1(0x8de)] !== null)
            return;
        this['control'] = new a0b9(this, a, this['log']), this['sendHeaders'](a, [[
                b['mFhJn'],
                b[h1(0x6a6)]
            ]]), this['control'][h1(0xc25)](this[h1(0x924)], this[h1(0x69b)], this[h1(0x71e)], this[h1(0xe57)]);
    }
    [a0cE(0xd33)](a, b) {
        const h2 = a0cE, c = {
                'VcbaR': function (g, h, i) {
                    return g(h, i);
                },
                'WOOfZ': ':status',
                'ElQNC': 'content-type',
                'QhCBf': 'application/json'
            };
        let d = 0x0;
        try {
            const g = JSON['parse'](b[h2(0x5bd)] ? b[h2(0x7d1)](h2(0xa4b)) : '{}'), h = c['VcbaR'](parseInt, g['version'], 0xa);
            !Number[h2(0x5f5)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[h2(0x5a6)](JSON[h2(0xb28)]({ 'latestAppliedVersion': d }));
        this[h2(0xd92)](a, [
            [
                c[h2(0xba8)],
                h2(0x22e)
            ],
            [
                c[h2(0x88f)],
                c[h2(0xe26)]
            ],
            [
                h2(0x7c0),
                String(f['length'])
            ]
        ]), this[h2(0x16d)](a, f, !![]);
    }
    [a0cE(0x722)](a, b) {
        const h3 = a0cE, c = {
                'MFNVv': h3(0xe69),
                'ubUVP': h3(0x5f3)
            }, d = c[h3(0xa8a)][h3(0xa24)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                b['finished'] = !![];
                continue;
            case '1':
                if (b[h3(0x1b5)])
                    return;
                continue;
            case '2':
                if (b[h3(0x9c6)])
                    return;
                continue;
            case '3':
                if (b[h3(0xeaa)] === c['ubUVP']) {
                    this[h3(0xd33)](a, Buffer[h3(0xbbc)](b[h3(0xbd5)]));
                    return;
                }
                continue;
            case '4':
                this[h3(0x26c)](a, b)['catch'](() => {
                });
                continue;
            }
            break;
        }
    }
    async [a0cE(0x26c)](a, b) {
        const h4 = a0cE, c = {
                'LyNId': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'LzGop': function (d, f) {
                    return d === f;
                },
                'ygrXW': 'content-length',
                'ntFIy': h4(0xc49),
                'eYYXA': 'cf-cloudflared-',
                'apwjO': function (d, f) {
                    return d === f;
                },
                'UxdAD': h4(0xdf2),
                'rBzsQ': function (d, f) {
                    return d === f;
                },
                'MPHnk': h4(0xeaa),
                'mdtzc': function (d, f) {
                    return d === f;
                },
                'Hdplm': 'sec-websocket-accept',
                'eHgeB': function (d, f) {
                    return d(f);
                },
                'xFXFw': h4(0xb55),
                'mEdzE': h4(0x702),
                'xLjuI': h4(0xc5f),
                'RAEoE': 'cf-cloudflared-response-meta',
                'xsDrc': h4(0xc30),
                'egVWj': function (d, f) {
                    return d + f;
                },
                'eHVij': function (d, f) {
                    return d + f;
                },
                'CLnTe': h4(0xc79),
                'rjnNn': h4(0x616)
            };
        try {
            const d = await c['LyNId'](a0bc, this['origin'], b[h4(0xed6)], b[h4(0x20c)], b[h4(0x5c2)], Buffer[h4(0xbbc)](b[h4(0xbd5)])), f = [], g = [];
            for (const [k, l] of d[h4(0x5c2)]) {
                const m = k['toLowerCase']();
                c[h4(0x650)](m, c['ygrXW']) && g[h4(0x6b2)]([
                    m,
                    l
                ]);
                const n = m['startsWith'](c[h4(0x3bb)]) || m[h4(0x2da)](c[h4(0xb85)]) || m['startsWith'](h4(0x638)) || m['startsWith'](':');
                (!n || c['apwjO'](m, c[h4(0x860)]) || c[h4(0xd4e)](m, c[h4(0xd70)]) || c[h4(0xd46)](m, c['Hdplm'])) && f['push']([
                    m,
                    l
                ]);
            }
            if (!f[h4(0x71b)](([o]) => o === h4(0xb55))) {
                const o = c['eHgeB'](a0b1, b['path']);
                o && f['push']([
                    c['xFXFw'],
                    o
                ]);
            }
            const h = c['eHgeB'](a0b5, f), i = c[h4(0xb9b)](d[h4(0x4f2)], 0x65) ? 0xc8 : d[h4(0x4f2)], j = [
                    [
                        c[h4(0x252)],
                        c[h4(0xaae)](String, i)
                    ],
                    ...g,
                    [
                        c[h4(0x8f3)],
                        h
                    ],
                    [
                        c[h4(0x432)],
                        c['xsDrc']
                    ]
                ];
            this[h4(0xd92)](a, j);
            for await (const p of d[h4(0xbd5)]) {
                await this[h4(0x16d)](a, p, ![]);
            }
            await this[h4(0x16d)](a, Buffer[h4(0xd4a)](0x0), !![]);
        } catch (q) {
            this['log'][h4(0xa39)](c[h4(0xab9)](c[h4(0xa9d)](h4(0x1f1), a), c[h4(0xa3f)]) + q);
            try {
                this['sendHeaders'](a, [[
                        c['mEdzE'],
                        c['rjnNn']
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0cE(0xc15)]() {
        const h5 = a0cE, a = {
                'emThX': h5(0xe4f),
                'iHzWb': function (d, f) {
                    return d + f;
                },
                'NjCaq': function (d, f) {
                    return d & f;
                },
                'aWGof': function (d, f) {
                    return d % f;
                },
                'KrZMx': h5(0xc5e),
                'KfsGr': function (d, f) {
                    return d < f;
                },
                'LWOpH': function (d, f) {
                    return d + f;
                },
                'KPbnk': function (d, f) {
                    return d + f;
                },
                'IKJSR': function (d, f) {
                    return d === f;
                },
                'wPqwI': function (d, f) {
                    return d >= f;
                },
                'xUemw': function (d, f) {
                    return d & f;
                },
                'IjsNK': function (d, f) {
                    return d !== f;
                },
                'cetsh': function (d, f) {
                    return d & f;
                },
                'aeoqh': function (d, f) {
                    return d === f;
                }
            }, b = await this[h5(0x584)][h5(0xaf3)](0x18);
        if (!b[h5(0x508)](Buffer[h5(0x5a6)](a[h5(0x160)])))
            throw new Error(h5(0x1d5));
        const c = Buffer[h5(0xd4a)](0x6);
        c[h5(0x2b6)](0x3, 0x0), c[h5(0x2c1)](0x64, 0x2), this['sendFrame'](0x4, 0x0, 0x0, c);
        this[h5(0x45b)] && !this[h5(0x6ab)]['printed'] && (process[h5(0xab1)][h5(0xeb4)](a['iHzWb'](this[h5(0x36a)], '\x0a')), this[h5(0x6ab)][h5(0x271)] = !![]);
        try {
            while (!this[h5(0x58d)]) {
                const [d, f, g, h] = await this[h5(0xe81)]();
                if (d === 0x4) {
                    if (!a[h5(0xa3d)](f, 0x1)) {
                        if (a[h5(0xab7)](h['length'], 0x6))
                            throw new Error(a['KrZMx']);
                        for (let i = 0x0; a[h5(0x6cc)](i, h['length']); i += 0x6) {
                            const j = h['readUInt16BE'](i), k = h[h5(0x61d)](a[h5(0x191)](i, 0x2));
                            if (j === 0x4) {
                                const l = k - 0xffff;
                                for (const m of this[h5(0x299)]['keys']()) {
                                    this[h5(0x299)][h5(0x9c3)](m, Math[h5(0x357)](0x0, a[h5(0xa83)](this[h5(0x299)][h5(0x8f4)](m), l)));
                                }
                            } else
                                a[h5(0x33c)](j, 0x5) && a[h5(0x312)](k, 0x4000) && k <= 0xffffff && (this[h5(0x9c8)] = k);
                        }
                        this[h5(0x8a0)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[h5(0x33c)](d, 0x6)) {
                    !a[h5(0xc39)](f, 0x1) && this[h5(0x8a0)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (d === 0x8) {
                    if (a[h5(0x8a8)](h[h5(0x5bd)], 0x4))
                        continue;
                    const n = a[h5(0x7f5)](h['readUInt32BE'](0x0), 0x7fffffff);
                    a[h5(0x1f9)](g, 0x0) ? this['connectionWindow'] += n : this[h5(0x299)][h5(0x9c3)](g, (this['streamWindows'][h5(0x8f4)](g) ?? 0xffff) + n);
                    this[h5(0xdd7)]();
                    continue;
                }
                if (a[h5(0x1f9)](d, 0x3)) {
                    this[h5(0x1b8)][h5(0x342)](g);
                    continue;
                }
                if (a[h5(0x33c)](d, 0x7))
                    break;
                if (a['IKJSR'](d, 0x1)) {
                    const o = await this['readHeaders'](f, g, h);
                    !this[h5(0x299)][h5(0xa5c)](g) && this[h5(0x299)][h5(0x9c3)](g, 0xffff);
                    this[h5(0xc86)](g, f, o);
                    continue;
                }
                if (a[h5(0x1f9)](d, 0x0)) {
                    this['handleData'](g, f, h);
                    continue;
                }
            }
        } finally {
            this['stopped'] = !![], this[h5(0x197)]();
            for (const p of this[h5(0x1b8)]['values']()) {
                p['websocketProxy'] && p[h5(0x3c5)][h5(0x55c)]();
            }
            try {
                this[h5(0x296)]['destroy']();
            } catch (q) {
            }
        }
    }
    ['handleHeaders'](a, b, c) {
        const h6 = a0cE, d = {
                'aAadu': function (i, j) {
                    return i & j;
                },
                'rVIsJ': h6(0xc0e),
                'Pasey': h6(0x6df),
                'XaPif': ':authority',
                'YQHja': 'websocket',
                'DCGkg': function (i, j) {
                    return i === j;
                },
                'RgPAl': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i['startsWith'](':') ? f[i] = j : f[i[h6(0x846)]()] = j;
        }
        const g = (f[a0aA] || '')[h6(0x1b7)]()[h6(0x846)]();
        if (g === a0aB) {
            this[h6(0xa8d)](a);
            d[h6(0x3c7)](b, 0x1) && (this[h6(0x8de)][h6(0x9c6)] = !![]);
            return;
        }
        const h = {
            'method': f[d[h6(0x198)]] || 'GET',
            'path': f[d[h6(0xc8f)]] || '/',
            'authority': f[d[h6(0xb60)]] || '',
            'headers': c[h6(0x290)](([k]) => !k[h6(0x2da)](':')),
            'body': [],
            'upgrade': g,
            'websocket': g === d[h6(0xe74)] || d[h6(0x463)]((f[h6(0x400)] || '')['toLowerCase'](), 'websocket'),
            'ended': d[h6(0x92f)](Boolean, b & 0x1),
            'finished': ![]
        };
        this[h6(0x1b8)][h6(0x9c3)](a, h);
        if (h[h6(0x1b5)])
            h[h6(0x3c5)] = new a0b8(this, a, h, this[h6(0xbad)], this[h6(0xabe)]), h[h6(0x3c5)][h6(0xc25)]();
        else
            h['ended'] && this['requestFinished'](a, h);
    }
    [a0cE(0x533)](a, b, c) {
        const h7 = a0cE, d = {
                'WxaZE': function (g, h) {
                    return g !== h;
                },
                'zOgly': function (g, h) {
                    return g === h;
                },
                'WZDhF': function (g, h) {
                    return g(h);
                },
                'cDAoP': function (g, h) {
                    return g & h;
                }
            };
        this[h7(0x443)](0x0, c['length']), this[h7(0x443)](a, c[h7(0x5bd)]);
        if (d[h7(0x62c)](this[h7(0x8de)], null) && d[h7(0x829)](this[h7(0x8de)][h7(0x2c2)], a)) {
            this[h7(0x8de)]['feed'](c);
            b & 0x1 && (this['control']['finished'] = !![]);
            return;
        }
        const f = this[h7(0x1b8)]['get'](a);
        if (f === undefined)
            return;
        if (d[h7(0x62c)](f[h7(0x3c5)], undefined)) {
            f[h7(0x3c5)][h7(0x65f)](c, d[h7(0xc13)](Boolean, b & 0x1));
            return;
        }
        c[h7(0x5bd)] && f[h7(0xbd5)][h7(0x6b2)](c), d[h7(0x57f)](b, 0x1) && (f[h7(0x396)] = !![], this['requestFinished'](a, f));
    }
}
class a0b8 {
    constructor(a, b, c, d, f) {
        const h8 = a0cE, g = h8(0x7e2)['split']('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[h8(0x2c2)] = b;
                continue;
            case '1':
                this[h8(0xabe)] = f;
                continue;
            case '2':
                this[h8(0xbad)] = d;
                continue;
            case '3':
                this[h8(0xdf2)] = a;
                continue;
            case '4':
                this['sock'] = null;
                continue;
            case '5':
                this['stopped'] = ![];
                continue;
            case '6':
                this[h8(0x615)] = [];
                continue;
            case '7':
                this[h8(0x57a)] = [];
                continue;
            case '8':
                this[h8(0x597)] = c;
                continue;
            }
            break;
        }
    }
    [a0cE(0xc25)]() {
        const h9 = a0cE;
        this['run']()[h9(0xea2)](() => {
        });
    }
    [a0cE(0x65f)](a, b = ![]) {
        const ha = a0cE;
        a[ha(0x5bd)] && this[ha(0x57a)][ha(0x6b2)](a), b && this['queue'][ha(0x6b2)](null), this[ha(0xe71)]();
    }
    [a0cE(0x55c)]() {
        const hb = a0cE;
        if (this[hb(0x58d)])
            return;
        this[hb(0x58d)] = !![], this[hb(0xe71)]();
        if (this[hb(0x296)] !== null)
            try {
                this[hb(0x296)][hb(0x2fe)]();
            } catch (a) {
            }
    }
    [a0cE(0xe71)]() {
        const hc = a0cE, a = {
                'xZqrP': function (b) {
                    return b();
                }
            };
        for (const b of this[hc(0x615)]) {
            a[hc(0x9c2)](b);
        }
        this[hc(0x615)] = [];
    }
    async ['_next']() {
        const hd = a0cE;
        while (!this['stopped']) {
            if (this[hd(0x57a)]['length'])
                return this[hd(0x57a)][hd(0xc78)]();
            await new Promise(a => this[hd(0x615)][hd(0x6b2)](a));
        }
        return null;
    }
    async [a0cE(0xc15)]() {
        const he = a0cE, a = {
                'WqmzM': function (b, c) {
                    return b(c);
                },
                'SYXnN': function (b, c) {
                    return b === c;
                },
                'hYTpt': 'content-length',
                'KRJfg': he(0xc49),
                'kZsDk': he(0x696),
                'CmZlU': he(0x638),
                'gzVHw': he(0xdf2),
                'OxiKj': 'upgrade',
                'lekqw': he(0xe08),
                'krHQA': function (b, c) {
                    return b === c;
                },
                'eAUAA': he(0x702),
                'YORai': function (b, c) {
                    return b(c);
                },
                'qZsTB': '{\x22src\x22:\x22origin\x22,\x22flow_rate_limited\x22:false}',
                'uvLXE': function (b, c) {
                    return b + c;
                },
                'wOXDS': function (b, c) {
                    return b + c;
                },
                'rsrBF': he(0x918),
                'zWbGv': he(0x616)
            };
        try {
            this[he(0x296)] = await a[he(0x8bd)](a0ba, this[he(0xbad)]), this[he(0x35b)]();
            const b = await a0bd(this['sock']), c = [], d = [];
            for (const [i, j] of b['headers']) {
                const k = i[he(0x846)]();
                a[he(0xe34)](k, a[he(0xbb7)]) && d[he(0x6b2)]([
                    k,
                    j
                ]);
                const l = k[he(0x2da)](a[he(0xe64)]) || k[he(0x2da)](a[he(0x294)]) || k[he(0x2da)](a['CmZlU']) || k[he(0x2da)](':');
                (!l || a[he(0xe34)](k, a[he(0x2d7)]) || a[he(0xe34)](k, a[he(0x527)]) || k === a[he(0xc42)]) && c[he(0x6b2)]([
                    k,
                    j
                ]);
            }
            const f = a0b5(c), g = a[he(0x49b)](b[he(0x4f2)], 0x65) ? 0xc8 : b['status'], h = [
                    [
                        a[he(0xec8)],
                        a['YORai'](String, g)
                    ],
                    ...d,
                    [
                        he(0xc5f),
                        f
                    ],
                    [
                        he(0xe3d),
                        a[he(0x6a9)]
                    ]
                ];
            this[he(0xdf2)][he(0xd92)](this[he(0x2c2)], h), this[he(0xcaa)]()[he(0xea2)](() => {
            }), await this[he(0xcbf)](b['rest']);
        } catch (m) {
            this[he(0xabe)][he(0xa39)](a[he(0x94e)](a[he(0xb8e)](a['rsrBF'] + this[he(0x2c2)], he(0xb1c)), m));
            try {
                this['connection'][he(0xd92)](this[he(0x2c2)], [[
                        a[he(0xec8)],
                        a[he(0x413)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[he(0x55c)]();
        }
    }
    async [a0cE(0xcbf)](a) {
        const hf = a0cE;
        a[hf(0x5bd)] && await this['connection']['sendData'](this[hf(0x2c2)], a, ![]);
        for await (const b of this[hf(0x296)]) {
            if (this[hf(0x58d)])
                break;
            await this['connection'][hf(0x16d)](this['streamId'], b, ![]);
        }
        !this[hf(0x58d)] && await this[hf(0xdf2)][hf(0x16d)](this[hf(0x2c2)], Buffer[hf(0xd4a)](0x0), !![]);
    }
    async [a0cE(0xcaa)]() {
        const hg = a0cE, a = {
                'XpYil': function (b, c) {
                    return b === c;
                }
            };
        while (!this[hg(0x58d)]) {
            const b = await this[hg(0x4b6)]();
            if (a[hg(0xcb3)](b, null))
                return;
            try {
                this['sock'][hg(0xeb4)](b);
            } catch (c) {
                this[hg(0x58d)] = !![];
                return;
            }
        }
    }
    [a0cE(0x35b)]() {
        const hh = a0cE, a = {
                'kwzLu': function (i, j) {
                    return i + j;
                },
                'HHNyn': hh(0x8fb),
                'LFZiN': function (i, j) {
                    return i === j;
                },
                'BkanX': hh(0xeaa),
                'FIclH': hh(0x7c0),
                'Glzmi': function (i, j) {
                    return i === j;
                },
                'OVXzX': 'transfer-encoding',
                'MToCw': hh(0x51d),
                'rRJZo': function (i, j) {
                    return i === j;
                },
                'JRbvZ': 'sec-websocket-version',
                'IbhYp': hh(0xbad),
                'KOYaa': function (i, j) {
                    return i + j;
                },
                'JhqEf': hh(0x92a),
                'wDTfw': function (i, j) {
                    return i + j;
                },
                'VrfPX': hh(0x1db),
                'YIRoV': hh(0x81a),
                'wdbfh': hh(0x7d8),
                'tytjw': 'Upgrade:\x20websocket',
                'jEdIe': '\x0d\x0a\x0d\x0a'
            }, b = new URL(this[hh(0xbad)]), c = this['request'][hh(0x20c)]['startsWith']('/') ? this['request'][hh(0x20c)] : a[hh(0x403)]('/', this[hh(0x597)][hh(0x20c)]), d = [a[hh(0x403)](a[hh(0x403)](hh(0x392), c), a['HHNyn'])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[hh(0x597)][hh(0x5c2)]) {
            const k = i['toLowerCase']();
            if (a[hh(0x2bb)](k, 'host') || a['LFZiN'](k, hh(0xdf2)) || a[hh(0x2bb)](k, a[hh(0x376)]) || k === a['FIclH'] || a[hh(0x8ec)](k, a[hh(0x6a8)]))
                continue;
            if (k === a[hh(0xe3e)])
                f = !![];
            else {
                if (a[hh(0x17c)](k, a[hh(0x422)]))
                    g = !![];
                else
                    k === a['IbhYp'] && (h = !![]);
            }
            d[hh(0x6b2)](a[hh(0x403)](a[hh(0x17d)](i, ':\x20'), j));
        }
        d[hh(0x6b2)](a['JhqEf'] + b['host']), !h && this['request']['authority'] && d['push']('Origin:\x20https://' + this[hh(0x597)][hh(0xe6d)]), !f && d[hh(0x6b2)](a['wDTfw'](a[hh(0x1ec)], a0k[hh(0x4ea)](0x10)[hh(0x7d1)](a[hh(0x94f)]))), !g && d['push']('Sec-WebSocket-Version:\x2013'), d['push'](a['wdbfh']), d['push'](a[hh(0xc4b)]), this[hh(0x296)][hh(0xeb4)](Buffer['from'](a[hh(0x403)](d[hh(0x3ec)]('\x0d\x0a'), a[hh(0x565)]), hh(0x70f)));
    }
}
class a0b9 {
    constructor(a, b, c, d = {}) {
        const hi = a0cE, f = '3|2|5|4|1|0'['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[hi(0xd1d)] = d['quic'] === !![];
                continue;
            case '1':
                this['finished'] = ![];
                continue;
            case '2':
                this['streamId'] = b;
                continue;
            case '3':
                this[hi(0xdf2)] = a;
                continue;
            case '4':
                this[hi(0x693)] = Buffer[hi(0xd4a)](0x0);
                continue;
            case '5':
                this[hi(0xabe)] = c;
                continue;
            }
            break;
        }
    }
    [a0cE(0xc25)](a, b, c, d) {
        const hj = a0cE;
        this[hj(0xdf2)][hj(0x16d)](this[hj(0x2c2)], a0aQ(0x0), ![]), this[hj(0xdf2)][hj(0x16d)](this[hj(0x2c2)], a0aR(0x1, 0x0, a, b, c, d), ![]);
    }
    [a0cE(0x65f)](a) {
        const hk = a0cE, b = {
                'xsqTq': function (f, g) {
                    return f + g;
                },
                'GXKCk': hk(0x699),
                'EjNAy': hk(0x38f),
                'fXdvs': function (f, g) {
                    return f + g;
                }
            };
        this[hk(0x693)] = this[hk(0x693)][hk(0x5bd)] ? Buffer[hk(0xbbc)]([
            this[hk(0x693)],
            a
        ]) : a;
        let c, d;
        [c, d] = a0aS(this['buffer']), this[hk(0x693)] = d;
        for (const f of c) {
            try {
                const g = a0aX(f);
                if (g[hk(0x22d)])
                    continue;
                g['ok'] ? (this['log'][hk(0x5a5)](b[hk(0x301)](b[hk(0xc8b)], g[hk(0xa9e)] || b['EjNAy'])), this[hk(0xdf2)][hk(0x8e0)] = !![]) : (this[hk(0xabe)]['warning'](b[hk(0x23e)](hk(0xc7d), g[hk(0x7c7)] || hk(0x3e7))), this[hk(0xdf2)][hk(0x6d3)] = !![], this[hk(0xdf2)][hk(0x58d)] = !![]);
            } catch (h) {
                this[hk(0xabe)][hk(0x8ab)]('ignoring\x20control\x20RPC\x20message:\x20' + h);
            }
        }
    }
}
function a0ba(a) {
    const hl = a0cE, b = {
            'PtHsx': 'error',
            'YFbdS': function (c, d, f) {
                return c(d, f);
            },
            'pUnvF': hl(0x5b1),
            'JGLuZ': function (c, d, f) {
                return c(d, f);
            },
            'qiNbA': function (c, d, f) {
                return c(d, f);
            },
            'EequM': function (c, d) {
                return c(d);
            },
            'rQyxU': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'uWgCj': hl(0x450),
            'fWiFm': function (c, d) {
                return c === d;
            }
        };
    return new Promise((c, d) => {
        const hp = hl, f = {
                'nfJwU': function (n, o, p) {
                    const hm = a0b;
                    return b[hm(0x652)](n, o, p);
                },
                'TNhII': function (n, o, p) {
                    const hn = a0b;
                    return b[hn(0xe68)](n, o, p);
                },
                'fQGjD': function (n, o, p) {
                    const ho = a0b;
                    return b[ho(0xdee)](n, o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[hp(0x97e)](d, new Error(b['rQyxU']));
            return;
        }
        if (![
                hp(0x45a),
                b[hp(0xa8f)]
            ][hp(0x18c)](g[hp(0x25e)]) || !g[hp(0x578)]) {
            b['EequM'](d, new Error(hp(0xc46)));
            return;
        }
        const h = b[hp(0xb34)](g['protocol'], b[hp(0xa8f)]), i = g[hp(0x1bb)] || (h ? 0x1bb : 0x50), j = a0i[hp(0xb41)]({
                'host': g[hp(0x578)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const hq = hp;
                if (k)
                    return;
                k = !![], j['removeListener'](b[hq(0x1ef)], m), j[hq(0xc17)](0x0), o(p);
            }, m = o => {
                const hr = hp;
                !k && f[hr(0x65e)](l, d, o);
            };
        j['on'](b[hp(0x1ef)], m), j[hp(0xc17)](0x7530, () => j[hp(0x2fe)](new Error(hp(0xd7a)))), j['on'](hp(0xb41), () => {
            const hs = hp;
            if (!h) {
                b[hs(0xe68)](l, c, j);
                return;
            }
            const o = a0j[hs(0xb41)]({
                'socket': j,
                'servername': g[hs(0x578)]
            });
            o['on'](b[hs(0x1ef)], p => {
                const ht = hs;
                !k && f[ht(0xb0b)](l, d, p);
            }), o['on'](b['pUnvF'], () => {
                f['fQGjD'](l, c, o);
            });
        });
    });
}
function a0bb(a) {
    const hu = a0cE, b = {
            'wCXaF': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; d < a[hu(0x72c)][hu(0x5bd)]; d += 0x2) {
        c[hu(0x6b2)]([
            a[hu(0x72c)][d],
            a[hu(0x72c)][b['wCXaF'](d, 0x1)]
        ]);
    }
    return c;
}
function a0bc(a, b, c, d, f) {
    const hv = a0cE, g = {
            'cQQch': function (h, i) {
                return h(i);
            },
            'ohabV': function (h, i) {
                return h(i);
            },
            'tNUFk': hv(0xc46),
            'vacZt': hv(0x450),
            'HvDBP': function (h, i) {
                return h(i);
            },
            'tsfPJ': function (h, i) {
                return h === i;
            },
            'OWuCM': function (h, i) {
                return h === i;
            },
            'pdHkU': 'connection',
            'ubFQE': hv(0x831),
            'JzpWd': function (h, i) {
                return h === i;
            },
            'NyqeJ': hv(0xc80),
            'EAKOa': 'Content-Length',
            'Gcqtn': function (h, i) {
                return h + i;
            },
            'vqOPQ': hv(0x7c7)
        };
    return new Promise((h, i) => {
        const hx = hv, j = {
                'XKKAR': function (r, s) {
                    return r(s);
                },
                'rfGWn': function (r, s) {
                    const hw = a0b;
                    return g[hw(0x994)](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            g[hx(0xdfd)](i, new Error(g['tNUFk']));
            return;
        }
        if (![
                hx(0x45a),
                g[hx(0xd22)]
            ]['includes'](k[hx(0x25e)]) || !k[hx(0x578)]) {
            g[hx(0x614)](i, new Error(g[hx(0xc60)]));
            return;
        }
        const l = g['tsfPJ'](k[hx(0x25e)], hx(0x450)), m = k['port'] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s[hx(0x846)]();
            if (g[hx(0xea1)](u, hx(0xe9c)) || u === g['pdHkU'] || g[hx(0xb45)](u, g[hx(0xb75)]) || g[hx(0x930)](u, hx(0x7c0)))
                continue;
            n[s] = t;
        }
        n[g[hx(0x514)]] = k['host'];
        f[hx(0x5bd)] && (n[g[hx(0xabc)]] = g[hx(0x994)](String, f[hx(0x5bd)]));
        const o = c[hx(0x2da)]('/') ? c : g['Gcqtn']('/', c), p = l ? a0h : a0g, q = p[hx(0x597)]({
                'hostname': k['hostname'],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const hy = hx;
                j['XKKAR'](h, {
                    'status': v[hy(0xa98)],
                    'headers': j[hy(0xa48)](a0bb, v),
                    'body': v
                });
            });
        q['on'](g['vqOPQ'], v => i(v)), q[hx(0x3a9)](f[hx(0x5bd)] ? f : undefined);
    });
}
function a0bd(a) {
    const hz = a0cE, b = {
            'ADCcy': hz(0x8bb),
            'ThtNf': function (c, d) {
                return c < d;
            },
            'bzppI': function (c) {
                return c();
            },
            'AvYgc': function (c, d, f) {
                return c(d, f);
            },
            'FtsrY': function (c, d) {
                return c(d);
            },
            'uGNft': hz(0x497),
            'apxsH': function (c, d) {
                return c < d;
            },
            'UpxOb': function (c, d) {
                return c > d;
            },
            'XYEXJ': function (c, d) {
                return c + d;
            },
            'JwrBU': function (c, d) {
                return c(d);
            },
            'XUyQx': function (c) {
                return c();
            },
            'JPriZ': hz(0xa96),
            'nfIzC': hz(0x7c7),
            'sAEif': hz(0x3a9),
            'LeOid': hz(0x675),
            'QfNWj': function (c) {
                return c();
            }
        };
    return new Promise((c, d) => {
        const hA = hz, f = {
                'ZPcOe': b[hA(0x3da)],
                'RkHYD': b[hA(0x1fb)],
                'HzItP': b['sAEif'],
                'IrLnX': b[hA(0x81d)],
                'tGDSA': function (l) {
                    return b['QfNWj'](l);
                }
            };
        let g = Buffer[hA(0xd4a)](0x0);
        const h = () => {
                const hB = hA;
                a['removeListener'](f[hB(0x9a9)], i), a[hB(0x1a2)](f[hB(0x2b3)], j), a[hB(0x1a2)](f[hB(0x405)], k), a[hB(0x1a2)](f[hB(0x6ec)], k);
            }, i = l => {
                const hC = hA;
                g = g[hC(0x5bd)] ? Buffer[hC(0xbbc)]([
                    g,
                    l
                ]) : l;
                const m = g[hC(0x1a7)](b['ADCcy']);
                if (b[hC(0x179)](m, 0x0))
                    return;
                b['bzppI'](h);
                const n = g[hC(0x516)](0x0, m)[hC(0x7d1)]('latin1'), o = n[hC(0xa24)]('\x0d\x0a'), p = o[0x0][hC(0xa24)]('\x20'), q = b[hC(0x19d)](parseInt, p[0x1], 0xa);
                if (!Number[hC(0xd74)](q)) {
                    b[hC(0x509)](d, new Error(b[hC(0x2fb)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; b['apxsH'](s, o[hC(0x5bd)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[hC(0x1a7)](':');
                    b[hC(0x7e4)](u, 0x0) && r[hC(0x6b2)]([
                        t[hC(0x523)](0x0, u)[hC(0x1b7)](),
                        t['slice'](b['XYEXJ'](u, 0x1))[hC(0x1b7)]()
                    ]);
                }
                b[hC(0x3fc)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[hC(0x516)](b[hC(0x7fa)](m, 0x4))
                });
            }, j = l => {
                const hD = hA;
                b['XUyQx'](h), b[hD(0x509)](d, l);
            }, k = () => {
                const hE = hA;
                f['tGDSA'](h), d(new Error(hE(0x58e)));
            };
        a['on'](b[hA(0x3da)], i), a['on'](b[hA(0x1fb)], j), a['on'](b[hA(0x2ea)], k), a['on'](b[hA(0x81d)], k);
    });
}
function a0be(a) {
    const hF = a0cE, b = {
            'xfeaa': function (f, g) {
                return f === g;
            },
            'cgvPy': 'cftunnel.com',
            'pXgwd': hF(0x29e),
            'wGnon': function (f, g) {
                return f !== g;
            },
            'uFOtE': hF(0x977),
            'UEkmS': function (f, g) {
                return f(g);
            },
            'NWtUI': hF(0xc3d),
            'osZbu': function (f, g) {
                return f + g;
            },
            'CTmyc': function (f, g) {
                return f !== g;
            },
            'vqpJn': hF(0x56a),
            'daJdR': hF(0x8a5),
            'WuITx': function (f, g) {
                return f(g);
            },
            'aegLp': hF(0xb03)
        };
    if (!a || !a[hF(0x5d4)])
        return b['pXgwd'];
    if (b[hF(0x3f5)](a['issuer']['O'], 'CloudFlare,\x20Inc.'))
        return b[hF(0xaa1)] + (a['issuer']['O'] || '');
    if (!b['UEkmS'](String, a['issuer']['OU'] || '')[hF(0x2da)](b[hF(0xbf2)]))
        return b[hF(0x792)](hF(0x87d), a['issuer']['OU'] || '');
    if (!a[hF(0x85a)] || b[hF(0x238)](a['subject']['CN'], b[hF(0x90b)]))
        return b[hF(0x3c9)];
    const c = b['WuITx'](String, a['subjectaltname'] || '')[hF(0xa24)](',')[hF(0x8ac)](f => f['trim']()[hF(0x846)]()), d = c[hF(0x71b)](f => {
            const hG = hF;
            if (!f[hG(0x2da)](hG(0x30e)))
                return ![];
            const g = f[hG(0x523)](0x4);
            return g === hG(0x981) || b[hG(0xcaf)](g, b['cgvPy']) || g['startsWith']('*.') && hG(0x981)['endsWith'](g[hG(0x523)](0x1));
        });
    if (!d)
        return b['aegLp'];
    return null;
}
function a0bf(a, b) {
    const hH = a0cE, c = {
            'KagxT': function (h, i) {
                return h(i);
            },
            'btLgd': function (h, i) {
                return h + i;
            },
            'repeu': hH(0xa4a),
            'MxjhR': function (h, i) {
                return h > i;
            },
            'fjPMt': hH(0x7c7),
            'VdJLO': 'edge\x20',
            'yteIZ': hH(0xb1c),
            'gmEKE': 'all\x20Cloudflare\x20edges\x20failed:\x20',
            'qFRag': function (h) {
                return h();
            }
        }, d = a0ay[hH(0x523)]()[hH(0xa87)](() => Math[hH(0x729)]() - 0.5);
    let f = null;
    const g = async () => {
        const hJ = hH, h = {
                'teNJW': function (i, j) {
                    return c['KagxT'](i, j);
                },
                'fUChZ': function (i, j) {
                    const hI = a0b;
                    return c[hI(0x4dd)](i, j);
                },
                'rzUvb': c[hJ(0xa3e)],
                'eiSoz': function (i, j) {
                    const hK = hJ;
                    return c[hK(0xb71)](i, j);
                },
                'JteUK': function (i, j) {
                    const hL = hJ;
                    return c[hL(0x4dd)](i, j);
                },
                'hOJeW': function (i, j) {
                    return c['btLgd'](i, j);
                },
                'isnwh': c['fjPMt']
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const hM = hJ, l = a0j[hM(0xb41)]({
                            'host': i,
                            'port': a0az,
                            'ALPNProtocols': ['h2'],
                            'servername': hM(0x981),
                            'rejectUnauthorized': ![]
                        });
                    l['setTimeout'](0x2710, () => l[hM(0x2fe)](new Error(hM(0x690)))), l['on'](h['isnwh'], k), l['on'](hM(0x5b1), () => {
                        const hN = hM;
                        if (a) {
                            const n = h[hN(0xbd8)](a0be, l[hN(0xbf8)](![]));
                            if (n) {
                                l[hN(0x2fe)](new Error(h[hN(0x891)](h[hN(0x4e4)], n)));
                                return;
                            }
                        }
                        const m = l['alpnProtocol'];
                        if (m && m !== 'h2') {
                            l[hN(0x2fe)](new Error('edge\x20did\x20not\x20negotiate\x20h2'));
                            return;
                        }
                        h[hN(0x859)](a0cl, 0x0) ? l[hN(0xc17)](a0cl, () => l[hN(0x2fe)](new Error(hN(0x166)))) : l[hN(0xc17)](0x0), b[hN(0x5a5)](h[hN(0xa27)](h[hN(0xd89)](h[hN(0xa27)](hN(0x5ba), i), ':'), a0az)), j(l);
                    });
                });
            } catch (j) {
                f = j, b['warning'](c[hJ(0x4dd)](c[hJ(0x4dd)](c[hJ(0x4dd)](c[hJ(0x263)], i), c['yteIZ']), j));
            }
        }
        throw new Error(c[hJ(0x4dd)](c['gmEKE'], f));
    };
    return c[hH(0xce9)](g);
}
const a0bg = Buffer[a0cE(0x5a6)](a0cE(0xc5b), 'hex'), a0bh = Buffer[a0cE(0x5a6)](a0cE(0x7ac), a0cE(0x60f)), a0bi = Buffer[a0cE(0xbbc)]([
        a0bg,
        Buffer['from']('01', a0cE(0x70f))
    ]), a0bj = Buffer[a0cE(0xbbc)]([
        a0bh,
        Buffer[a0cE(0x5a6)]('01', a0cE(0x70f))
    ]), a0bk = {
        'http': 0x0,
        'websocket': 0x1,
        'tcp': 0x2
    }, a0bl = a0cE(0x907), a0bm = a0cE(0x98f), a0bn = a0cE(0x9b0), a0bo = a0cE(0xc99), a0bp = 0x1, a0bq = 'argotunnel', a0br = a0cE(0xaa7), a0bs = Buffer['from']('38762cf7f55934b34d179ae6a4c80cadccbb7f0a', 'hex'), a0bt = Buffer[a0cE(0x5a6)](a0cE(0xe33), a0cE(0x60f)), a0bu = 0x10, a0bv = 0x4, a0bw = 0x4d0, a0bx = 0x4b0, a0by = 0x0, a0bz = 0x1, a0bA = 0x2, a0bB = [
        a0cE(0xa37),
        a0cE(0x4d7),
        'one-rtt'
    ], a0bC = {
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
    }, a0bD = {
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
function a0a() {
    const n2 = [
        'Aw5MBgLNAhq',
        'vK5Kv0q',
        'DLnZAeC',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'yNL0zq',
        'ywnJzxb0lwnOyxjZzxq',
        'icHTDxnSioEoR+wIG+MCGcbUB2rLid49idiWlJe5ioAuR+AmGsbYzxf1AxjLkgvZBsKPoYbaBhLKzwXSioMIHoE8LUIVKEs6JoI/M+wiTUs4JEwfVowUUsbTDxnS',
        'C2vYDMvYtMfTzq',
        'tLLqwxm',
        'qLbltNu',
        'yxbWBhK',
        'Cfnyy3C',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'zwTNr3i',
        'wMPguxG',
        'CwLoyKe',
        'CfDhC0y',
        'vhnhDhi',
        'yNvPBgq',
        'y29UBMvJDgLVBG',
        'x2zYyw1Lu3vTBwfYEq',
        'v3bdqw0',
        'D3nZoI8V',
        'zhvcq3G',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'sfvnuvm',
        'ru5StNy',
        'tw1wt3y',
        'twTJyuG',
        'Ewjqt2O',
        'B2HHyLy',
        'y0n5AwW',
        'sg9YDvq',
        's1vOEKS',
        'BgfZDevYCM9Yqxq',
        'Cg9YDhm',
        'z2v0uhvIBgLJsxbwna',
        'y29UC3qGCca9ihb0Es5ZCgf3BIHZAgvSBcWGyxjNCYWGEYbUyw1LoIaIEhrLCM0IlcbJB2XZoIa4mcWGCM93CZOGmJqSign3zdOGCMvXDwLYzsGIB3mIks50BxbKAxiOksWGzw52oIbWCM9JzxnZlMvUDIb9ktS',
        'x3nLBMrfCNi',
        'C1zKuLC',
        'qwTkDhy',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'icHSAwjJpq',
        'A0TVqM8',
        'DMfSAwrmAxrLCMfS',
        'BwvhD1i',
        't3n5rNC',
        'nxW3nhW2FdqWFdm2Fdy0FdmWFdu5FdmXFdm1FdyXFdy5Fdq1FdyYFdr8ntf8nJn8mJv8oxWZm3WXn3W1nhW0nhWYoxWZoxWZn3W2nNW0n3W1mhWXFdi0Fde2FdyWFdC1Fdq2Fdu2FdiYFdCXFdi3FdeZFdy1FdH8mJb8mJH8ntD8nZb8nZj8ndf8m3WYFdq5FdD8ntH8mtb8mtH8mtL8ndj8mtr8nZz8mhWYnNW0ohW1m3W3m3WXmNWZnhW2n3W2ohW1mNW1nxWXmxW0m3WXnxWZohWYmxWZmNWYmW',
        'txPowgW',
        'ugfVuLu',
        'C2v0vty0',
        'l2fWAs9IyxnLAw5MBW',
        'ANPguw8',
        'A0HVy0i',
        'Bg9VCgjHy2TFDw5YzwfJAgfIBgu',
        'x2zSDxnOsgfUzhnOywTLqwnR',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'zwnKC2fqDwjRzxK',
        'ugP3uwe',
        'BMjPtu4',
        'C2LK',
        'AwDUB3jL',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        't0POqxu',
        'ChrLCM9Kywn0EwW',
        'zg5Z',
        'ug10AhC',
        'DMvYAwz5u2LNBMf0DxjL',
        'zvPsugq',
        'DwrWnG',
        'rhf0wwm',
        'uwHdqMy',
        'BwrOA1m',
        'qxPTB1O',
        'vLjszgW',
        'icJLPlhOTkuP',
        'BM9Uy2u',
        'teforW',
        'D0LRtuG',
        'wLPXBKu',
        'ufvNAKS',
        'Cgf0Adi',
        'sgH1suy',
        'l3bYB2mVms9LBNzPCM9U',
        'y2yYmwfKnZrLntLHnJeXmwjLmwq4yZaYmwu2nwi4otfJmMeYmteXnJDHyMi4yZvLmdC5zta5ztjJoge4mZm5yW',
        'u1LyBK4',
        'CgfhsfC',
        'ioASOEMhJEI/NG',
        'DhrfugW',
        'Dwn5sgi',
        'vgzbB2W',
        'y29UDgfPBMvY',
        'x3jLywrmAw1PDgvK',
        'AhblzxK',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'tvrVq3C',
        'DfvqDLi',
        'CvvYBNC',
        'DwH0Aeu',
        'Bwf4u2L6zq',
        'BfjZwuW',
        'BeTJBLO',
        'C2v0qxv0AfrHzW',
        'A05wqLO',
        'zwHfC0G',
        'uNbLq3K',
        'DMvYAwzPzwq',
        'C1vuD3C',
        'x2fJA0r1zq',
        'swvJD3K',
        'rfj0qLC',
        'ntbTyG',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        's0Ltqu1bx0HvqL9srvrswv9nqvHFu0vdt05euW',
        'CMvZB2X2zq',
        'shb5vei',
        'v0fstG',
        'EMPzAM0',
        'seXKrhi',
        'C0TlEgG',
        'y29UBKLUzgv4',
        'wez3v24',
        'ndC4mdq1mhj0ug1IBG',
        'Avz3AgO',
        'CMvTywLUAw5N',
        'CYdLKi7NRkWG',
        'Aw50zxjUywW',
        'uuvnvq',
        'C2HHmJu2',
        'y29SBgvJDe5LDeLUzM8',
        'uMLHv00',
        'l2fWAs93CY8',
        'uvros3m',
        's1jkzMC',
        'y3L0yKm',
        'zM90vLq',
        'yu5Jz0e',
        'wuzIzfm',
        'm3WXFdj8mhW0',
        'B25tDhjLyw1eyxrH',
        'su9UqMe',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'yxv0Ag9YAxr5',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'swnQz0m',
        'x3DHA2u',
        'vMrKvw4',
        'z0DZtge',
        'wvfiAMe',
        'uu5YuKG',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'q1Pcwe8',
        'AxnwywXPzeLqDJq',
        'tufyx1rbu0TFte9hx1njwKu',
        'C2v0t25LDgLTzvrHC2TZ',
        'Ag9TzurPCG',
        'qKH3ue4',
        'swv1Dhi',
        'iG0kdqO',
        'zxjYB3jZ',
        'sw1XseS',
        'CMvHzezYyw1L',
        'DMLYDhvHBgL6yxrPB24',
        'DhvUBMvSihjLBw92zwq',
        'tZ1dBg91zezSyxjLlcbjBMmU',
        'ze1lrxO',
        'x2rYB3btzw5KuMvHzhK',
        'yNvUlxb0Eq',
        'veLou3i',
        'y0jdr2K',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'CgvUzgLUzW',
        't1bftG',
        'C2vYDMvK',
        'EePmzNK',
        'wfbuA2G',
        'yxbWBgLJyxrPB24VD2fZBq',
        'tevIu1a',
        'uNPer28',
        'AK12Bum',
        'CMrLDG',
        'ioI9RUw7UUI/NUwKSEI0PsWG5BEY6iEQ5yQO5zUE6ycaigGYios8OoI+KYaO6yEn5zcV6l+B56Il5OgI5AsniffvsumP',
        'tu14A0q',
        'u3bSAxq',
        'zgvJB2rLCG',
        'z2v0q3jVBLrHC2TZ',
        'BNPkDeu',
        'ywn0AxzL',
        'Ag9ZDa',
        'D2fPDenVBM5Ly3rLza',
        'y29UC3qGyxjNCYa9ihbYB2nLC3mUCgXHDgzVCM0Gpt09icj3Aw4ZmIiGpYbBiI9KiIWGiI9JiIWGiMv4AxqIxsa6ifSIlwmIlcaIzxHPDcaWiL07',
        'AhbdAxbOzxi',
        'CgfYC2u',
        't1D1q00',
        'y2f0y2G',
        'yMz3yw8',
        'BfHOCK8',
        'qM94sMq',
        'ywnJzxb0lxjHBMDLCW',
        'x3n0CMvHBuzYyw1LCW',
        'suXsCK4',
        'oNnJAgvTzq',
        'DxbNCMfKzq',
        'se9tva',
        'A3HvvMy',
        'C3bSAwnL',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'l2fWAs9MAwXLCMf3',
        'r3PAzwS',
        'wxz0EKK',
        'DxrMltG',
        'BfDuCKy',
        'D3jPDgu',
        'CKn3uMC',
        'AgLUDLu',
        'Aen3wwq',
        'y1z4rxu',
        'CxvPyYbZzw5KigzHAwXLzdOG',
        'AvfSrKK',
        'AhbVs1y',
        't2TAuKu',
        'EwXPwvy',
        'tNn6teu',
        't2nuuuG',
        'Ewrxq3C',
        'vMvPAuS',
        'mxW1Fdj8nhWZFda',
        'zwnPzxnFChvIBgLJx2TLEq',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'BwXUDg4',
        'Ag1rv3m',
        'q2LNt2G',
        'zufvque',
        't3rbrLe',
        'x3jLDhj5twf4',
        'txLTtKe',
        'BxrxugS',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'Ag1Hvg4',
        'tLvSr1m',
        'z2v0u2vJB25KCW',
        's25erha',
        'z2v0twLUDxrLCW',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'AxnjBML0Awf0B3i',
        'BgfZDe5LDhDVCMTuAw1L',
        'Bwv0Ag9K',
        'tM5XAfq',
        'BgLUzq',
        'r3b4Dxa',
        's3nRv0O',
        'Bu5HzgK',
        'ExvmEu4',
        'ywnRugvUzgLUzW',
        'AgfZAeXLBMD0Aa',
        'ueDMB2C',
        'yKfXsLG',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'wxLkzLa',
        'x2jHy2TVzMy',
        'Bw92zv9Tyxa',
        'A2LSBgvK',
        'thPqsLi',
        'q3Hhz1m',
        'BM9Kzs1WDhKTBgLUDxGT',
        'koACQUIUVUE9RIK',
        'ywnjDwy',
        'y1LowwS',
        'ANj2ExO',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'Ec1KBc1LBMm',
        'u0z1B28',
        'yMLNAw50',
        'zxHWCG',
        'q0DLtum',
        'suLmvxi',
        'C2v0DgXL',
        'wNbstLm',
        'AgfUzhnOywTLu2vJCMv0',
        'z3PeDuG',
        'CwTUALa',
        'BM9PC2uTyY53yxnT',
        'zw1uAfG',
        'BMf0AxzL',
        'BMv4Da',
        'zhf5wwW',
        'DNPHsK8',
        'Bu5usMy',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        'DhvUBMvSihn0B3bWzwq',
        'sePQu3q',
        'Bg9JywXtDhjLyw1eyxrH',
        '6i635y+wienqvsdKV6hMGA/LPlhOTku6ia',
        'DNfnAvq',
        'txbZshO',
        'C2vUzerHDge',
        'CMvZDa',
        'A2v5',
        'x21HCMTgDxnL',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'zNPyA2O',
        'EKLstvq',
        'yM9KEwXLC3m',
        'u3LZDgvTmZi',
        'teXmsue',
        'C2vZC2LVBG',
        'q0vUDwe',
        'vgH0tMy',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'wNnPrM8',
        'CLjkwM8',
        's09zywe',
        'AxHWrxu',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'zgnywfi',
        'x3nLBMq',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'u21qBfa',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'svb2na',
        'vfrm',
        'q2L3r0i',
        'DMfSDwvZ',
        'y3DK',
        'DxfTrgq',
        'x2vTAxreyxrH',
        'Aw5JBhvKzxm',
        'BNbTioIhQUAeIowUJoAiKdOG',
        'tvboEuy',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'u2PMDMK',
        'tfDpCeG',
        'z2v0t25LDgLTzuXVz3m',
        'z0DJrNi',
        'icJMS6JLHOZLKi0G',
        'B3bfEve',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'x3jLBgvHC2vxywL0zxjZ',
        'CLzjC0O',
        'D21zwvG',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'AxrLBxm',
        'Bwf4lwrHDge',
        'qxzzz2m',
        'CxzhwuW',
        'yu1crLy',
        'v0fxt0W',
        'uu94yue',
        'CMvTB3zLtgLZDgvUzxi',
        'Ehjrt0W',
        'vLHuve4',
        'u2nuqxO',
        'BMv3q29UBMvJDgLVBKLK',
        'Aw5KzxHpzG',
        'CMvHzfn5BMm',
        'tgjoywq',
        'AxnbyNnVBhv0zq',
        'qLH2zLK',
        'Ahr0Chm6lY9ZAhOUywWV',
        'EfHqCLC',
        'yujdEgy',
        'zwnPzxnqDwjRzxK',
        'B214Egy',
        'lMvUDG',
        'r0HAAhO',
        'thPfA08',
        'wMLWig5VDcbMB3vUzdOG',
        'D2vIC29JA2v0',
        'DKHLBu0',
        'DhjPBq',
        'C3rYzwfTCW',
        'zNjVBNrPzxi',
        'x1niwKfmx05btuvFq0HbuLm',
        'Cg9YDa',
        'wNb5u3K',
        'zg93BMXVywrgAwXL',
        'CunrAKq',
        'y2XVC2LUzW',
        'z3ffCwS',
        'EMjut2W',
        'zgfpt2i',
        'nKPSyKjpCa',
        'zxrwquG',
        'BMvLza',
        'mtu0mdCYrvLnzerW',
        'B3jpwfy',
        'BMv0D29YA1n0yxrZ',
        'wLf1Ahm',
        'CMvSyxLZ',
        'zwXoB0K',
        'zNjLzq',
        'ChjVBwLZzxm',
        'z2LK',
        'BM93',
        'vKvlquK',
        'C2L6zq',
        'v3jsruW',
        'svzrBgG',
        'Aw1Hz2uVANbLzW',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'C2vYDMvYsgvSBg8',
        'uhHpD0e',
        't2DHD0m',
        'ru9tvgS',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'mc42lJyTANm',
        'jeHptuu',
        'DgfIBgvfBNrYEq',
        'CMvUqNq',
        'z2nbvNi',
        'C0nmA3K',
        'vfrmx01bwa',
        'zgv0ywLS',
        'BMfTzv90ywTLBG',
        'CxvPyYbWzwvYignPzca',
        'ywvZlti1nI1Ny20',
        'z3LTD2G',
        'wLvZr1q',
        'Dw5YzwfKywjSzsbLzgDLignLCNrPzMLJyxrLoIa',
        'AxnwywXPzeLqDJy',
        'vNjMufG',
        '5A+g6zkL6l+h55+TicG',
        'ic0+ideYnY4WlJaUmtO',
        'uhriC3G',
        'Bg9JywXxCW',
        'C3rYzwfTia',
        'Aw52ywXPzf9Uyw1L',
        'z0Tjrum',
        '5O6I5Rwl6lAf5PE2',
        'y2Dwu0G',
        'zfjovKq',
        'igrJAwq9',
        'ELfrrNa',
        'ywvVCwG',
        'zNvUy3rPB24',
        'BMzjEKm',
        'vwH2ww4',
        't0LxDLe',
        'Axnjua',
        'Bun2ruK',
        'DxbSB2fKrMLSzvjHDW',
        'v3Hctei',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'vevstq',
        'EffWBg0',
        'zMXhDMC',
        'EhH5Dw0',
        'C3DHB2O',
        'qLL0uuu',
        'u2fPz3a',
        'z2v0shvICMvNCW',
        'uwLRy3m',
        'Cgf0Aa',
        'D0Tit1i',
        'CM1tEw5J',
        'CMvtrxO',
        'uwH4Aey',
        'rLr3D0q',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'twL0wg4',
        'Be1yDMS',
        'y29WEuzPBgvZ',
        'vurrzhO',
        'rK5Or2K',
        's1rZBKO',
        'r29bBhy',
        'BwLUv2LUzg93',
        'y2HTB2rtEw5J',
        'Dg9cExrLCW',
        'u2jHwgq',
        'CMvWB3j0u2H6ywXezwj1zW',
        'rNjqAhG',
        'BfnRvem',
        'qvLpsgi',
        'uNL4u2u',
        'mJa0',
        'u1DNwwy',
        'l2fWAs9MAwXLl2XPC3q',
        'C2HVCNq',
        'EeLTtLu',
        'uMHxww8',
        'ANHNDNO',
        's21Qyxu',
        'v3bVDg8',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'yM9VDhn0CMfW',
        'mJaW',
        'B3rlsMi',
        'DhjHBNnWB3j0',
        'yNzvqLO',
        'DhvUBMvSx2rVBwfPBG',
        'B3L3teG',
        'ufngzhK',
        'qhf3Cw8VBM9Kzs1WDhKTBgLUDxGT',
        'zw9lrhi',
        'uxHfyuy',
        'q1rTEwm',
        'ru53zuq',
        'BND0t04',
        'r0DUqxu',
        'CMvHzgrPCLn5BMm',
        'uKLTse0',
        'zLHKDNm',
        'BMLJDhq',
        'tKX1EuW',
        'ls1UBY1ZyxzLic0TBM8TyxvKAxqGls1UBY1MDw5Kic0TBM8TCgfJA2fNzs1SB2nRia',
        'Aw5PDgLHBfnVDxjJzunVBM5Ly3rPB25jza',
        'kg5VBMuP',
        'BwfNAwm',
        'qKTSsLy',
        'Ahrnvgi',
        'EuDvALG',
        'z2v0rgf0zq',
        'vvPOv2K',
        'DhvUBMvSx3n0yxr1CW',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'DLLYzeO',
        'y29UDgvUDc1Syw5NDwfNzq',
        'x3b0B0r1CMf0Aw9U',
        'A3zqsMu',
        'y29UDgvUDc1SB2nHDgLVBG',
        'vfPmrge',
        'BuvKEKu',
        'BgfZDeLUzgv4t2y',
        'Cuzwu0S',
        'DhvUBMvSignSB3nLza',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'BevTvgK',
        'vhzYs2m',
        'CgvLCK1HEerHDge',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbJAxbOzxiGC3vPDguG',
        'uLjStxy',
        'vgnHANa',
        'zxLtAM0',
        'ChjVDg9JB2W',
        'zw50CMLLCW',
        'C2v0vte2',
        'zvnrBNi',
        'reXhrMO',
        'vMrkte8',
        'uNHJzMq',
        'tK9ju0vFqunusu9ox1nqteLu',
        'y2TiDhe',
        'vKnAEha',
        'rxPcCey',
        'wgHXAxe',
        'v21gCLq',
        'BhrhD2O',
        'ChjVEhLszxf1zxn0',
        't1D3vMO',
        'q3Pfwgu',
        'Dw5YzwDPC3rLCG',
        'q3feD1y',
        'ChjPBNrLza',
        's1b1Avi',
        'DuH2EuW',
        'Eu1OzeK',
        'zML4zwq',
        'vLzXwwW',
        'AgfUzgXLu2vYDMvYsgvSBg8',
        'zwn5DwS',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbRzxKGC2HHCMuGz3jVDxaG',
        'AgfUzhnOywTLrg9Uzq',
        'z2v0uMvHBhrPBwvjBMzV',
        'vuTzwxa',
        'zNbYBNu',
        'runwvwe',
        'B3biqwS',
        'zgDYyw0',
        'BuTwq3K',
        '5A2q6l+B56Il5zcV5yQO5AsX6lsLoIa',
        'Dg9bC2nPAq',
        'x2HHBMrSzuXVBMC',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'zu1LBK8',
        'zMfPBgvK',
        'lMjHzc0',
        'qw5ZD2vY',
        'D1LdEvG',
        'y3jLyxrLq2LWAgvYAxy',
        'zNjHBwu',
        'sw5PDgLHBgL6zq',
        'BgXZB3G',
        'zMLSDgvY',
        'rvPXDKu',
        'quDftLrFvKvsu0LptG',
        'DuzVrvi',
        'A1PZrgS',
        'DffiquS',
        'C29JAW',
        'x2HLywrLCG',
        'AgfUzhnOywTLignVBMzPCM1Lza',
        'C3rYzwfTv2LUzg93CW',
        'CMvX',
        't0vLs20',
        'CK1xDwi',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'Bw91BNrPBMzV',
        'CM9VDa',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'zwnKC2fFChvIBgLJx2i2na',
        'Ehf2uMG',
        'vMTNEfG',
        'uLHmzhm',
        'ntaW',
        'vePAs1i',
        'ioMIHoAJGoIhQUAeIowUJoAiKcWG57UN57UT5yQG6l295lIo5O6I5Rwl',
        'BhruBeC',
        'wujIDNe',
        'x21HCMTsB290',
        'D1vJBNG',
        'C2HLBgW',
        'CKXQDhy',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'sMfNrg8',
        'zg9Uzq',
        'wxjkqLy',
        'uMTiwuq',
        'v1HSvg0',
        'sLLfzwu',
        'D3jPDgvvsw50mtzcrq',
        'uhrkCuW',
        'zLLSuwy',
        'EKD1z0W',
        'Chr5iowaMEMaIsa',
        'tezAAu4',
        'zLfYC3u',
        'vwr6AeK',
        'ENzgue8',
        'Bg9UzW',
        'q0Drzhm',
        'D3jPDgvvsw50mZjcrq',
        'C3rYzwfTswq',
        'iowTL+IkGIK',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'DgfRzuzPBG',
        'ywDL',
        'tgv1D1K',
        'w0Tnt0rfm10G4PYfiow3SUAbOUwKJEwkQoAaGEAZQowgJoMHUtOG',
        'B2f4rKO',
        'wKnrvu4',
        'ioAoOUA1I+wKSEI0PtOG',
        'ls1MzxrJAc1YzxrYAwvZpteGls1MzxrJAc1YzxrYEs1TAw50Aw1LB3v0ptiWmdaGls1MzxrJAc1YzxrYEs1TyxH0Aw1LB3v0ptuWmdaGls1MzxrJAc10Aw1LB3v0ptiWmdaW',
        'x3jLDhj5qMfZzq',
        'zurYr2q',
        'z1zZA1i',
        'x3bPBMDjBNrLCNzHBa',
        'Eg1Ztvi',
        'BwLU',
        'x2DLDerPC2TjBMzV',
        'AwzzsKK',
        'lNvWBg9Hzf9JAhvUA3m',
        'z1vcB0G',
        'z3PwshC',
        'terABhG',
        'wvnQy3i',
        'C3rHCNrZv2L0Aa',
        'id4GnteYiowTL+ESPIK',
        'DNHJtLG',
        'C2vUDevUza',
        'ywnRrwXPy2L0Aw5N',
        'zgLMzMLLsgvSBg1HBG',
        'x2nVBM5Ly3rfzgDL',
        'yMfZzw5HBwu',
        'CMvT',
        'tufyx1vqte9brf9tsvPf',
        'x2rVBwfPBG',
        'AwrSzq',
        'ugT3sgG',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'ioACQUAZQowgJa',
        'ywn0AxzLq29UBMvJDgLVBKLKtgLTAxq',
        'C0ffAwy',
        'BMvZBhe',
        'sNbVDum',
        'A0rkuvm',
        'nZK3otyWu1vZCwTO',
        'y3vYCMvUDeXLDMvS',
        'ruLNBvC',
        'zMfTAwX5',
        'ioAxOcbWywnRywDLlMPZB24',
        'x3b1Bxbiyw5KC2HHA2vnzxnZywDLCW',
        'Bg9JywXgywXSyMfJAW',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'BM9YBwfSAxPLq3jVBLrHC2TZ',
        'v0HsBwC',
        'tLDUuwC',
        'zNvSzMLSBgvK',
        'CLPSEuC',
        'DuDozNq',
        'vu9OD0C',
        'DhjHAwXLCG',
        'zgvZDhjVEq',
        'CgfYDgLHBa',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'EhnXvhe',
        'ELf4z00',
        'ywXSu2v0DgXLza',
        'qufSrhm',
        'B25LDgfZA3m',
        'Aw1Hz2uVC3zNk3HTBa',
        'wLbrEwC',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'thLwt0O',
        'uvfJsKy',
        'y29UDgfPBMvYza',
        't3jlv3y',
        'yxjNDG',
        'zg5ZoG',
        'DNL3BxG',
        'tLzdrvK',
        'ywrKCMvZCW',
        'D1bXD0K',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'x2TLEq',
        'svvQCKe',
        'thbhEfu',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'y2fSBa',
        'x21HCMTlDM0',
        'zNjVBuj5DgvZ',
        'ANfxBLm',
        'BuzsqvG',
        'wwvXr04',
        'BwfNAwmG5lIn5yY56ywn',
        'DhjPBvn0yxj0',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'BuvtsLu',
        'sMvNDuK',
        'qIbVBMuTCNr0igjLzM9YzsbOyw5KC2HHA2u',
        'zLPiz1y',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'EhryAeu',
        'tM90igeGEMLWigzPBgu6ia',
        'CNbbD2G',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        't1bZzu4',
        'r1LzBu0',
        'zvrSq1G',
        'CwHqvKW',
        'q0fjDw0',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'ug9KBwfU',
        'rvzdEe8',
        'DxnLtM9PC2u',
        'zeLqq1e',
        'vLPfsfq',
        'ue9sva',
        'tej1yxK',
        'BNHKB21HAw4',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'AMz5sMe',
        'suTku1i',
        't1PLwhK',
        'z2v0uhvIBgLJsxbwnG',
        'EMLJvKe',
        's0HvqL9qt1juuW',
        'y29SBgvJDfn0yxrPy0LUzM8',
        'zgvSzxrL',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'EM9Nshq',
        'x29Urgf0yunI',
        'icHrvuLdios8OoI+KYK',
        's0HvqG',
        'CwLvtw8',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        'EvnqCgK',
        'thrvqMC',
        'BKTYzem',
        'l2fWAs93CY90zxjTAw5HBa',
        'keToqu1fpq',
        'EeLAzgm',
        'y29UDhjVBc1ZDhjLyw0',
        'DxjS',
        'vwHcqLi',
        'zuHJtwC',
        'C3rKAw4',
        'u2zUwxe',
        'Bwf4vwrWugf5Bg9HzfnPEMu',
        'Bwf4',
        'BNL5BM0',
        'yNL0zxm',
        'y29UDgvUDc1LBMnVzgLUzW',
        'C2vUzeHHBMrZAgfRzq',
        'AgvHCNrIzwf0',
        'Cg93zxjZAgvSBc5LEgu',
        'B29SqKe',
        'Axb2nG',
        'uuPRsMy',
        'tuneyLm',
        'C2vZC2LVBL9RzxK',
        'uur2C0O',
        'AhvIioI/NUAoPEACQUEHRUIUPa',
        'yNv0EMy',
        'B25eyxrH',
        'C1bfwgu',
        'ugf0AcbUB3qGzM91BMq',
        'C3rVCfnLBMrPBMC',
        'DhvUBMvSvxjS',
        'AKnjrKG',
        'q0Lozu8',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'A3HTBfa',
        'sgzuvLm',
        'DxbKyxrL',
        'q01wAMi',
        'x2fWCgvUzeXVzW',
        'q1zJtxm',
        'D1fAzfK',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'qMTHBLG',
        'Ec10B3rHBc1JAhvUA3m',
        'zgLYBMfTzq',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'BvPkDxC',
        'sLLOyuG',
        'txzJvfC',
        'CxvLCNLpBMu',
        'zwv1DgS',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'wwjUwLe',
        'wKHNv0S',
        'BgfZDenVBM5Ly3rLzef0',
        't1fcA3O',
        'BhHQwfi',
        'CKn1rfK',
        'wduWounLCNrPzMLJyxrL',
        'DuzttuO',
        'thrbvLa',
        'B1rTCha',
        'Aw5PDgLHBe1HEerHDge',
        'Chr5iowUNUEoSoMaIEwUMJOG',
        'DMvYC2LVBG',
        'v2zyEM8',
        'yMvUA00',
        'Dw5RBM93BG',
        'yYbOCYb0CMfMzMLJ',
        'EMP0zMS',
        'r0vuia',
        'l2jPBI9HC2G',
        'rMzoAha',
        'zwn0shu',
        'zw5Kzwq',
        'CM91BMq',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'v3ryrgC',
        'y29VA2LL',
        'AgfUzhnOywTLihbHy2TLDcbYzwnLAxzLza',
        'vePcDMS',
        'y2XLyw51Ca',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        'CMvHC29U',
        'q1rJCLm',
        'z1PetK0',
        'D3jPDgvtEw5J',
        'zxHLy3v0zq',
        'y3jLyxrLsg1HyW',
        'CMfUz2u',
        'yLLhAg0',
        'qxPmr2y',
        'uvDetg0',
        'zw5K',
        'B0DyueO',
        't1jSzgO',
        'tKHVq24',
        'y29UDgvUDa',
        'ywnJzxb0',
        'q049q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'AxncDwzMzxi',
        'C2vUzfjLywr5',
        'Ehncs2u',
        'Dhvhzhq',
        'igTLExmGka',
        'r2rhBfi',
        'BgfYz2vZDfjLy3y',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'vMLQrfm',
        'DxnLCKrHDge',
        'u3foB2u',
        'BNrgsxK',
        'zxHPDgnVzgu',
        'wMnwyuq',
        'ru5pvezpvu5e',
        'ENPIuLK',
        'x2zSDxnOugvUzgLUz0zYB21iDwi',
        'x3jLCxvLC3rLCG',
        'uf9trvjwrvjFte9dqvrjt049',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'EMXPyG',
        'D2vIC29JA2v0uhjVEhK',
        'zhvWBgLJyxrL',
        'yufHzhu',
        's1z3u0W',
        'zgfkzfi',
        'w0Tnt0rfm10G4PQG77IpioMAP+MbK+AwREw8GcaO',
        'x3bHCNnLtw9Kzq',
        'q29UDhjVBgXLCG',
        'CMvNAxn0CMf0Aw9UigzHAwXLza',
        'Bw9Kzv9Vy3rHBa',
        'C3j0Da',
        'Dw5Oyw5KBgvKiffvsumGzNjHBwuGDhLWzsaWEa',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'Cdi1nG',
        'BgvHzKnLCNq',
        'DhLWzq',
        'D3f0vuS',
        'sKTeq1m',
        'CNGG',
        'vxvgqxa',
        'zgvY',
        'sLbYAvO',
        'EhnIywC',
        'C3bHD24',
        'Ec1MAwXLlxnPEMu',
        'wxHTqLy',
        'B25fEgL0',
        'Dw5RBM93BIbZDhjLyw0G',
        'BKnry0y',
        'zgvJCNLWDa',
        'Chv0',
        'iowkOoI9VEwKSEI0PtOG',
        'x2rVC0rHDgvuAw1L',
        'seXbEge',
        'Dw5RBM93BIbLCNjVCG',
        'tu1Jsfm',
        'qwDxv3C',
        'icaG4OcIia',
        'C291CMnL',
        'AM9PBG',
        '6k+35Rgc5l2t5B+f6Ag75PIViePtt04G5A2x56YM5lIY5PwW57UeicJLPOiGwYjJBwqXiIWIy21KmIjDkq',
        'rgvprNi',
        'ktOG',
        'x2DYB3DxAw5KB3C',
        'rhjnv0C',
        'y2fOvu8',
        't1u9q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'swzoD0C',
        'D0DUB24',
        'ChjVy2vZCW',
        's0vfDvC',
        's1bWDK0',
        'AfvfD04',
        'yMvmsvy',
        'x3rHC2TRAwXSvhjLzq',
        'sNDYqLu',
        'uhfjBvO',
        'C1PTwgW',
        'ios6JoI/M+wiTUwmHsaOBNbTigvUz2LUzxmG6zEO5QEB6z2z6BUy6lEZ6l+hksWG6Ake5Qoa6iEQ5Osi6kgL6kof',
        'oNbYB3rVy29S',
        'CgfJA2v0',
        'uLHTD08',
        'A3D6thu',
        'vhDsq2O',
        'shPjDfa',
        'y3jLyxrLuhvIBgLJs2v5',
        'BMv0',
        'q3nrveu',
        'Dw5LEhbLy3rLzcbdB25Uzwn0uMvXDwvZDcbSyxLVDxq',
        'zLHbAxm',
        'CMvHzezPBgu',
        'yvPKrNu',
        'DhDKBu8',
        'sxncuu0',
        'x3jLz2LZDgvYrxjYB3i',
        'BM9PC2vFA2v5',
        'Bg9Nz2vY',
        'zLzHDM8',
        'ELDIr3y',
        'D29Yzhm',
        'te9Msg0',
        's01prevFuvvjqW',
        'y3jLzgL0twf4rgf0yq',
        'zxreqxC',
        'Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq',
        'tMHuzhG',
        'wKXoA1q',
        'x3jLCMvNAxn0zxi',
        'BLLRAum',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'yxv0Ag9YAxPHDgLVBG',
        'y1LAsuq',
        'zMLeB3K',
        'sLjIDLO',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'AKLvu2K',
        'A3neuxO',
        'ugLpwKG',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'A3fzB1K',
        'BKD3DfC',
        'yKn3tLO',
        'l2fWAs9LEgvJ',
        'Bwf4u3rYzwfTrgf0yq',
        'vwf6rvu',
        'CxPNAu4',
        'ywvZlti1nI1Ly2i',
        'ChvIBgLJs2v5',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'uKffB0u',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'vevUwuG',
        'q29UzMLNihzHBgLKyxrLza',
        'ioMIHoAJGoIhQUAeIoACQUwUJoAiKcWG57UN57UT5BcD6k+v5yQG6l295lIo5O6I5Rwl',
        'l2fWAs9MAwXL',
        'D3nFB3bLBG',
        'v1jYwuW',
        'tw1xrK8',
        'DMrOrKO',
        'AeHZC2y',
        'r0vu',
        'r2D6z3u',
        'CMvNAxn0zxi',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'uMXNtve',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'C2vUzfDPBMrVD1vWzgf0zq',
        't3HnB1a',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'B2Xrtva',
        'rg93BMXVywqGzw5JCNLWDgLVBIbMywLSzwq',
        'A2vYBMvS',
        'wujRqwq',
        'z3PPCcWGzgvMBgf0zq',
        'nxWXFdn8mtb8n3WWFdL8mNW4Fdz8na',
        'mZyWma',
        'u0Xyt0K',
        'uMTkzwq',
        'B3zLCNDYAxrL',
        'Ahr0Chm6',
        'Dg9ju09tDhjPBMC',
        'AxznzwS',
        'wwjQtg0',
        'l3r1BM5LBa',
        'tfrlyMe',
        'zg9JA2vY',
        'lu5VrxHPDa',
        'zw52AxjVBG',
        'uw1gt3e',
        'Ahr0CdO',
        'C2HVD1r1BM5LBa',
        'C2f2zq',
        'uKzQBui',
        'ChvcBMi',
        'AMP4Efi',
        'uvzkC1a',
        'CfjXvge',
        'ywvZlteYoc1Ly2i',
        'renhA2C',
        'C2nPza',
        'v2LUzg93C1bVD2vYu2HLBgW',
        's05btuuGjW',
        'Aw5PDgLHBe1HEfn0CMvHBxncAwrP',
        'x2LZrxHWAxjLza',
        'mxWYFdn8mhW0',
        'l2fWAs9MAwXLl2nHDa',
        'zKfcDge',
        'tvb0u00',
        'uwDRA3i',
        'q1nbBNG',
        'BLflyvm',
        'C011wwK',
        'qvDiBMO',
        'v25Iwfi',
        'tfP5yKu',
        'Dg1wAeK',
        'CvPgvMK',
        'Bxf5DK0',
        'CNHFyNL0zxm',
        'Dg1WzNm',
        'CMvJDKnPCgHLCG',
        'CgfYC2vuyxnRtwv0yq',
        'tK9ju0vFs0vz',
        'ufvu',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'z2v0qMfZzuLUzM9mB2nHBa',
        'u09Suwe',
        't0LxuMe',
        'C0T4CKK',
        'vK5nAKC',
        'zgvSzxrLrMLSzxm',
        'venhAuK',
        'C2vJlxDLyNnVy2TLDc0',
        'z2fJwuG',
        'B1nhsvm',
        'Dhj1zq',
        'ywLqzwC',
        'zxHWzwn0zwqGveXtifnLCNzLCKHLBgXV',
        'yxnZAwDU',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'rKvewuW',
        's1Huv1a',
        'Dte2',
        's3fQzuK',
        'DgXZt2zMC2v0CW',
        'DKvIsLe',
        'zxHPC3rZu3LUyW',
        'DgLTzw91De1Z',
        'rxzsCuW',
        'ywnJzxnZu3LUyW',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'zhjTv0y',
        'u0vsvKvsx0jbq0TprKy',
        'y29yzhK',
        'A3jiuue',
        'vKrWsNm',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'quDftLrFufjjvKfurv9lrvK',
        'DhvUBMvSCW',
        'DhrHBuS',
        'qvH3s2i',
        'ueTNEMW',
        'CgjeEg8',
        'zgf0ywDYyw1mzw4',
        'CMvTB3rL',
        'D3Hvsxy',
        'qvvwCfu',
        'zKDMCu0',
        'B3bLBLDYAxrLCG',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'uxrStMO',
        's1bbveG',
        'y3jLyxrLu29JA2v0',
        'qIbVBMuTCNr0ihbUpq',
        'CgLK',
        'uuTlu3m',
        'zg9TywLUlNr4Da',
        'x2fWCgX5qwnR',
        'x2nYzwrPDezYyw1LCW',
        'x25LEhq',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'thLMAKO',
        'CNr0DMfY',
        'DxfUAw8',
        'D2vSy29Tzq',
        'yujNC3y',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        're9ix1nfuLzfuLm',
        'ug5qwNq',
        'C3LZDgvTy3rS',
        'ig1HBgzVCM1Lza',
        'C3rHCNrtzxnZAw9U',
        'vfvszuS',
        'Eu5kr3a',
        't3Lwt1C',
        'x3jLCxvLC3q',
        'zxDuDey',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'CxfNwM0',
        'qwvlwKe',
        'vgruEgi',
        'BM8GCMvZCg9UC2uGywz0zxiG',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPuMvTB3rL',
        'sunsqw0',
        'DLv0ywS',
        'AvzlvhC',
        'u1fMrxO',
        'qwz3wem',
        'yLb3yuC',
        'u1bPEhK',
        's3nhChy',
        'CMvSyxLvCMW',
        'AgfUzhnOywTL',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'Ce95q28',
        'tefqC1u',
        'vgzWquC',
        'C1f2yM4',
        'yNrmz2q',
        'wwfSB3G',
        'ugHmufO',
        '8j+mKcdLHOxNVA7LIQdLR4yGre5tiow3SUwqR+EuQcaOrg9iktOG',
        'runeu0fFufvcs0vz',
        'uKDst3a',
        'lY5KB2nRzxjLBNy',
        'CNPvDMi',
        'x21HCMTlC3rVCMu',
        'CNv3EvO',
        'lcbtAwDUywW6ia',
        'u29kCK0',
        'ChjPDMf0zq',
        'CMfUzg9TqNL0zxm',
        'uKv3ENK',
        'zKXysey',
        'DgfRzq',
        'rxfxyuC',
        'l2fWAs9MAwXLl2nW',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'Bwf4rgf0yq',
        'C3rHDhvZ',
        'ANPVB3K',
        'vfboz04',
        'BeT1sK4',
        'w0Tnt0rfm10G4PQG77Ipia',
        'z3HksuG',
        's0HvqL9qt1juuYdMNkRMLl7OOyZNQ6/LJ6mG',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'tMjjA3a',
        'Chr5uhjVy2vZCW',
        'x2DLBMvYyxrL',
        'BgLgrvm',
        'CMvSyxrPDMu',
        'A2v5CW',
        'yw1uEMy',
        'BMvNB3rPyxrLzefSCg4',
        'CgDevhK',
        'CgXADgO',
        'yLbgAhm',
        's0jsywe',
        'z2v0uhvIBgLJs2v5',
        'rfvcsNm',
        'zxf1ywXZ',
        'rNrZCLK',
        'C05tsvi',
        'rvrZuxC',
        'zM9YBwf0',
        'y3j5ChrV',
        'zw5JCNLWDfjLC3bVBNnL',
        'AhfUzfa',
        'z2nyBe0',
        'v0fiCum',
        'uffIAgC',
        'zMXVB3i',
        'tNLXzuO',
        'Bwf4u3rYzwfTC0jPzgK',
        'C3vIyxjYyxK',
        'D0jmqNu',
        'A0H6reu',
        'DhjHAwXLCNm',
        'wgXRBLO',
        'y29TCgXLDgu',
        'wfvkEvi',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'CgfYC2vszxf1zxn0',
        'veLnrvnuqu1qx1DjtKrpvW',
        'zMXHDa',
        'AwHVv3O',
        'C2v0vtmY',
        'C2XPy2u',
        'B3vYq2LK',
        'te1oqwG',
        'we5zqu8',
        't3HPs2O',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        '8j+uHcbBvgvTCeTLEv0G6k+35Rgcihr0BcdLJ5JMM7qSioAxP+s4ToAxTUwVHUMsPEApKowjJEs9Now6NZOGA2v5x2LKpq',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'yxbWzw5K',
        'C3LYv2m',
        'yK5wugC',
        'vMv1vMO',
        'iIdMNkZMRkhLM57OKl3NS7VNU5/OP6pMNPaGkowpR+EuQoAaP+s8MowfIcK',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        're5tx01preu',
        'v1LlyKq',
        'AgfUzgXLrgf0yq',
        'Bw92zuzPBgvZ',
        'runjrvnFufvcs0vz',
        'rKnRru8',
        'zxHWB3j0',
        'C3rHDhm',
        'r2LVBxi',
        'ioIVT+AXGUw8GUw4UdOG',
        'B2HWBwe',
        'uuPuqw8',
        'CMvTB3rLugfYyw1LDgvYCW',
        'txjwuLu',
        'ELjAqxu',
        'x2nOyxjezxzPy2vsvW',
        'D3HzBeK',
        'r2TmBMC',
        'zMfSC2u',
        'z3PNEum',
        'x3rVDgfSsw5gBgLNAhq',
        'yxbWBgLJyxrPB24Vzg5ZlwPZB24',
        'u0LduKq',
        'C3vI',
        'ugfVBvu',
        'A1bHy2TLDfrOCMvZAg9Sza',
        'uMDlAfy',
        'qMfNuNq',
        'x2nHCevMzKjPDa',
        'BxLOA0K',
        'Cg5cExrLCW',
        's0PdtuK',
        's0Ltqu1bx0HvqL9srvrswv9cqvnfx1nfq09orfm',
        'x2vWB2nOrM9YvhLWzq',
        'qxDuzvG',
        'CxvPyW',
        'EKHvr0W',
        'DNLIuvC',
        'Dw5TBNe',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'C2TiANy',
        'zMXbsMG',
        'BvbVu0S',
        'C3rVCa',
        'D2HnteG',
        'C2vYDMvszxf1zxn0',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'wKzfsNa',
        'Ec1RAxnHBweTAhvIlq',
        'AuPHzhm',
        'zwrNzsbZzwXLy3rLzcbHBIb1BNn1ChbVCNrLzcbutfmGDMvYC2LVBG',
        'zw5JCNLWDa',
        'AKvKswu',
        'jYdPNz7MS5u6ioMzKcaYltyZiowTL+ESPUwWJ+wgMEwTL+AVJs/MLBdLRzCV6l+E5A2x56YMlcdPPPBKVy3LRzFMR43MIjBMLBdLRzC',
        'rhzksLG',
        'A2vLCc1HBgL2zq',
        'Cg9Z',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'rKLmrv9st09u',
        'z3b1x25HBwu',
        'l2fWAs93CY8Q',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'qMDxtfe',
        'vwLmA1G',
        'CMvZCg9UC2uGyM9KEsbLEgnLzwrZieTju0fnqv9ivujFtufyx0jprfK',
        'l3j1BG',
        'ufPdA1G',
        'uezzs2O',
        'EMzWsLe',
        'yxfXuMW',
        'Ag9ZDg5HBwu',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'CxvLDwu',
        'whnsD3C',
        'B25tDhjLyw1fBMq',
        'r3vXzM0',
        'Bwf5yMvtzxj2zq',
        'y0rbB1a',
        'zgvSzxrLza',
        'Bg9JywXnyxHeyxrH',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'CMvHzgvY',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'ywvZlteYoc1Ny20',
        'quLUq2W',
        'EgPrBNa',
        'ywnJzxb0lwXHBMD1ywDL',
        'ywXWBG',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'wMj0A0G',
        'C3rVChbLza',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'zNzuyLC',
        'y3jLyxrLrgLYzwn0B3j5',
        'wKfjqMK',
        'CMvSzwfZzq',
        'DxnLCI1Hz2vUDa',
        'B3PiquW',
        'ALDAzKm',
        'vgLJEgO',
        'CMvXDwvZDa',
        't2HwzuO',
        'zMn2qxa',
        'qu9tsuu',
        'CMvWzwf0',
        'CMvZzxrtDhjLyw0',
        'vMzKAhm',
        'DMfSAwrHDgu',
        'AgfZAa',
        'yMLU',
        'vezyvgm',
        'tMLfruu',
        'rhzuB0u',
        'EvD2qxC',
        'Aw5MBW',
        'zNjVBq',
        'zez2wLa',
        'tePqExO',
        'qKnzEgy',
        'zgvZDf9WyxrO',
        'zLDswLe',
        'x3n5C3rLBwn0BeXVy2f0ywjSzq',
        'q1fpwwC',
        'x3n0B3bgBgfN',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'BgfZDc1TB2rPzMLLza',
        'C2vJDxjLq29UBMvJDa',
        's1zTv3y',
        'y2XPzw50sgfUzhnOywTLu2vJCMv0',
        'BwvYuNe',
        'mxW1Fdj8m3WWFdq',
        '6i635y+w6jMA5OUF5yYw5l+H5OgV5AsX6lsLoIa',
        'y3jLyxrL',
        'DgXLy0y',
        're9TwMy',
        'y29UBMvJDgvKihrVia',
        'y3jLyxrLsw50zxjMywnL',
        'uxr5BKO',
        'BgvUz3rO',
        'Bwf4sw5MBgLNAhq',
        'D3jPDgvtDhj1y3rmAxn0',
        'vhjzwhe',
        'x2zPBMLZAa',
        'AgvHzgvYCW',
        'zw5Ku3rYzwfT',
        'CMv0CMfUC21PDhrLza',
        'yxbWBgLJyxrPB24VANnVBG',
        'B3jKzxjbzgrYzxnZzxm',
        'D3HJAve',
        'rgHcvMe',
        'q0fvsLy',
        'x2LZqMLUyxj5',
        'Aw1rvvC',
        'BhnhBMG',
        'ANbHvMO',
        'x3nLBMrxzwXJB21L',
        'z2TxyKq',
        'uuPdue8',
        'y3j5ChrVu2vUza',
        'v0PfDgu',
        'ls0TlwTPC2fTyq',
        'AxnZDwvY',
        'rvjst1i',
        'ueDRrva',
        'A2LSBa',
        'zMLSzq',
        'y3b1x2nVCMvZ',
        'AuXVq2q',
        'y2H1BMTFAwq',
        'y3DKy0e',
        'ugnHC24',
        'zg9OigH0DhaGC3rHDhvZia',
        'vgz3seG',
        'BNvTyMvY',
        'D215Eu4',
        'rffHBhi',
        '5lIn5PsV5OYb55Qe54Mi5PYSia',
        'D2H4tgm',
        'CgfJA2fNzs5QC29U',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'CMvHzfvjBNrcrq',
        'z0H5sNy',
        'EKPXAeK',
        'x2H1yLDZ',
        'AfnkCKm',
        'icSG',
        'Dw5Hy2TLza',
        'zg9lsKW',
        'vhjes1e',
        'x3n0yxr1C19JywnOzq',
        'BgLZDa',
        'Bg9Hze1VzhvSzq',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'Axnoyu4',
        'EwDpv1O',
        'x3jLy29Yzfj0DfnHBxbSzq',
        'DMvYAwz5',
        'zhLUyw1Py1nPEMu',
        'DxbKyxrLza',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'y3jLyxrLsgfZAa',
        'tKTmEum',
        'ruvPrei',
        'yMLUza',
        'C3vIAMvJDcbdtIbTAxnTyxrJAdOG',
        'Axjpteq',
        'qMrTv1i',
        'vMjYs2y',
        'y1bHwxm',
        'wernuxa',
        'BxnNuxvLDwu',
        'q3DIAMm',
        'A1j4zfa',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'igvUzgvKoIa',
        'uNHtvxu',
        'DgvYBwLUywW',
        'l2fWAs9MAwXLl3vUEMLW',
        'Agv4',
        'D2LUzg93v2fPDgvYCW',
        'Bwjrs0m',
        'yLz3wK8',
        'Dvj0rNa',
        'shzeqLa',
        'D2fPDgvYCW',
        'ntaY',
        'x2nOzwnRqwnJzxnZ',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'ugDprwm',
        'z2vUzxjHDgvtAw5NBgu',
        'y3b1x25HBwu',
        'EMjNzfK',
        'CMvHzfvjBNqZmKjf',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'DLb3uMu',
        'whDivMq',
        'Bwf4ugfJA2v0',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti',
        'AgvHBhrO',
        'vMjYC1i',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'CMHishG',
        'BuTstKO',
        'jYdMMk/KV53NLzNLKi0Sios4JEwpR+AZQowgJa',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'D0PTDgW',
        'mNW1Fdf8mhWZFdq',
        'v3HHwKu',
        'x21HEejVzhK',
        'Bg9JywXmAw1PDa',
        'sejbB3u',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'uhnIDNe',
        'CMvZDw1L',
        'z2v0zwDPza',
        'rePdyKi',
        'rLjszgW',
        'C2vJCdi1nMSX',
        'A0viCvi',
        'y2yTChjVEhKT',
        't1n4t2S',
        'AMLqvue',
        'ChjVyW',
        'yu54whG',
        'zxHPDd0',
        'x2rLDK1HAM9Y',
        'sKfgvvm',
        'vfr6ALy',
        'B25tDhjLyw0',
        'Ae9Yvfe',
        'z2PbrNO',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'B1jjwLm',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'ug9PBNq',
        'rK1ouuu',
        'Aw5PDa',
        'Aw1Hz2uVEc1Py29U',
        'rfr4wKS',
        'z0PkDLm',
        'l2v0yW',
        'x21HCMTtExn0zw1K',
        'Ec10Aw1LC3rHBxa',
        'thPhB3a',
        'uK9wuKK',
        'sKDmDvO',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        't2nby20',
        'ywDbvMy',
        'z3jVDxa',
        'rw5yANy',
        'zNv3Eu8',
        'mJa2',
        'zw5HyMXLza',
        'CxvLCNLgBG',
        'B2zM',
        'CMrgsgC',
        'BMzkD1u',
        'zMvLza',
        'vKLTBeG',
        'C1nHvhe',
        'CMvZAxPL',
        'u3Pyr0i',
        'rM5gtfm',
        'tNLqB04',
        'x3j1BLrLCM1PBMfS',
        'uKnlzfq',
        'C2vYDMvYsgvSBg9dB21WBgv0zq',
        'rhjZsKG',
        'z2XPyMnwzxjZAw9UuNvUDgLTzq',
        'BgLUAW',
        'CwjsreO',
        'Awr6qMW',
        'yKHTze0',
        'CMvMCMvZAa',
        'sevbra',
        'BgDWvK8',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'zg9OihrPBwvVDxq',
        'CNbjv3G',
        'y2XVC2u',
        'CMvHzgfIBgu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'q1byBKG',
        'rLfMBeS',
        'v2LOEeu',
        'Egz0s3q',
        'y0XutKe',
        'z3jcuwy',
        'vNL6BeK',
        'D2XWtfm',
        'D21WyMu',
        'B3ruq1y',
        'ue9tvcbODhrWCZOVl3nOEI5HBc8G54Q25OcboIa',
        'ihnYDhq9',
        'qMLgChK',
        'r0rzzxe',
        'AujjCfm',
        'ug9Utg8',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'zKvzvgO',
        's2rcD1G',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'DKjfv0e',
        'shbVvMK',
        '6k6/6zEUia',
        'vhviuu0',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'zMvOBfe',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'yNvMzMvY',
        'DhHcExrLCW',
        'twzWwxK',
        'y2yTy2XVDwrMBgfYzwqT',
        'zu1bt0S',
        'CvrtCuu',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'serPvhG',
        'DhvUBMvSu2vJCMv0',
        'DMvZqKi',
        'ChjPBwuYntz2mq',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'wxzewLe',
        'z2nMAKC',
        'zhjVChbLza',
        'u2LqtKW',
        'r0HrwLG',
        'vNvHCeW',
        'lMnVBNrHAw5LCMvUDG',
        've56B1C',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        't1zyELG',
        'CvPZvei',
        'De5VyuK',
        'DhvUBMvSu3rHDgu',
        'CMvHzhLtDgf0zq',
        'CxvPyYbKAxnJyxjKzwqG',
        'Bg9Hza',
        'y29Kzq',
        'yvncu3C',
        'BMfTzq',
        'ChvZAa',
        'CgfZC3DK',
        't1PSrMq',
        'qNDZv1C',
        'AgvMD0C',
        'v0PJsvu',
        'vvP2ywG',
        'wLvpA1m',
        'Bw9Kzq',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'wgPAuxO',
        'x2zVCM1HDeXVz0vUDhj5',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'yxbWu2vUzeTLExm',
        'Aw50ywO',
        'Dg1WzgLY',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'Dw5KzwzPBMvK',
        'qujXBNO',
        'qvjsChm',
        'zMHXsgy',
        's3HxtgK',
        'CMvQzwn0',
        'qNrrwgu',
        'B25szwfKEq',
        'BxfKzgS',
        's2zZr3i',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'Dhfezxy',
        'vefts19usu1ft1vu',
        'yK9eu0i',
        'EKLoEwq',
        'lJaWmfO',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'CgvT',
        'x21HBMfNzxjgywn0B3j5',
        'l3bYB2mVy3b1Aw5MBW',
        'ywDht2u',
        'zxHWAxjLCW',
        'z0zIthy',
        'AKXuvLC',
        'nde5ndmWna',
        'D1L5qMC',
        'y2Hyufy',
        's0Ltqu1bx0HvqL9nqvHFqK9ewq',
        'oNbHDgG',
        'Cu9jvNi',
        'sgHkq2y',
        'x2DLDenVBMzPz1zHBhvL',
        'sLjesei',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        '5lIk5OQL5OIq5yQF',
        'BMv0rMfSBgjHy2S',
        't2Deqvm',
        'twLZC2LUzYbJAhvUAYa',
        'rLnnrMy',
        'y3vYBc84lJuUma',
        'sgTRrMO',
        'sxjmBLG',
        'Bwz5wKW',
        'Aw5gBgLNAhq',
        'z2v0tg9JywXjuhy2',
        'ChvIBgLJx2i2na',
        'u0vtu0LptL9lrvK',
        'ywXS',
        'D2nkwwu',
        'Bg9ZCW',
        'ExnUBxa',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'CMvHzfvjBNqZmKXf',
        'yxbWBgLJyxrPB25dBg9Zzq',
        'vevdBKe',
        'reTpqK0',
        'EM5Wzhy',
        'rgvJCNLWDfDPDgHbza',
        'x3zLCMLMEvDPDgG',
        'Ec1HDxrOlxrVA2vU',
        't1DZuLa',
        'v0rQrMy',
        'DeHPv00',
        'oNn0yxr1CW',
        'AwrSzvrPBwvVDxq',
        'ExzhyMq',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'sffesxG',
        'EhD3qva',
        'CeHnz3u',
        'tgPbvwC',
        'l2rLDI8',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'ywrK',
        'x2nVBNn1BwvuBhm',
        'x2XVB3a',
        'Bgf0Aw4X',
        'AgfUzhnOywTLq29TCgXLDgu',
        'CgTJCZG',
        'Cg9W',
        'C2vUzenPCgHLCG',
        'Edy0',
        'Cg5pzMzZzxq',
        'rfD5B2u',
        'Bg9VCgjHy2SGCMvXDwvZDcb0Aw1LB3v0',
        'u1jhBxm',
        'C3rHDfn5BMm',
        'CYbHCcb0CMfMzMLJ',
        'C29Tzq',
        'C1Pozw0',
        'CvD5AKG',
        'DhvUBMvSswq',
        'uf9trvjwrvjFvvvjrd0',
        'BwfYA3mG5O6I5Rwl5AsX6lsLifS',
        't1vNCw0',
        'CMvXDwvZDezPBMLZAgvK',
        'zvLLzLC',
        'yvLrtfm',
        'rvDbzLa',
        'B25eB21HAw5dAgfUz2u',
        'BeDOy0e',
        't3zXwwG',
        'CMfUzg9T',
        'qKveC3a',
        'rgveEuS',
        'CMf3sgvHzgvYCW',
        'DMndy1G',
        'C1fdswu',
        'Cgz3uMK',
        'EuLZEve',
        'zMf2AwnVBI5Py28',
        'Bwv0yvjLCxvLC3rLza',
        'r1b2zw0',
        'v3LcBuC',
        'lcdKV53NLzNLJP/MLOFKU7BKUi3OPOBNM5ySioACRoASOEs7PEEPUUs7U+wkOEwqR+wkQos4LoAmGEs5HEwmLUwpQUIVUW',
        'uM9suuu',
        'x21HCMTlBw9Kzti',
        'CMf3',
        'EfDSrwK',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        'Ee5TBLa',
        'C2vUza',
        'wuTxuxC',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'AefjC3G',
        'CxvPyYbRDq',
        'l2fWAs9MAwXLl25LDW',
        'y2LWAgvY',
        'qhf3Cw8VBM9Kzs1WDhKVCgfJA2fNzs5QC29U',
        'A2jpyMW',
        'sxDKreW',
        'C3rKzxjY',
        'swDAtu0',
        'Bwf4lwzVCNDHCMrZ',
        'ExDUuKy',
        'DLryBvG',
        'y3norNi',
        't0DAB2m',
        'l2fWAs90yxnRl2nYB24',
        'v2Hhwfq',
        'xtOG',
        'x29UrxHPDenI',
        'z2v0zxvPza',
        'rxjMvhy',
        'y3jLyxrLzf9HDa',
        'CwH6u0O',
        'CMvHzezPBgvtEw5J',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'tNvpyuW',
        'yMfQBe0',
        'zfvzEg0',
        'y21K',
        'Ahr0Chm',
        'uL9psW',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'sgLUwNe',
        'zM1Vuhi',
        'zKzhrxC',
        'vMjkyNq',
        'zeHZwvG',
        'wxvntNy',
        'D2nQEKm',
        'AvfkDgq',
        'ueXZyLu',
        'ywn0AxzHDgu',
        'AfnzBhC',
        'CMvSyxK',
        'sMrOt3q',
        'zfHQteO',
        'x2HHBMrSzvjLCq',
        'CwrWCwS',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'l2rLDI9UDwXS',
        'uKvTAvO',
        'CgXHDgzVCM0',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'yxbWBgLJyxrPB24VEg1S',
        'D3jPDgvvsw50qKu',
        'EgnJDuO',
        'uK1Ar3q',
        'z2v0t25LDgLTzvrHC2TZ',
        'CuXduwG',
        'revcvuC',
        'wvLjBwW',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'CgrxBhO',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        't1fTAgi',
        'tfvvt3u',
        'D3jPDgvszxnWB25Zzq',
        'Dg9yy0W',
        'lunVBw1HBMq',
        'zuDys2G',
        'svnIrNq',
        'ic0+ia',
        'zwjmEem',
        'rufft3y',
        'DNbKAha',
        'x2HLywrLCK92zxjOzwfK',
        'AwfMB0m',
        'Be51sLG',
        'y3jVBG',
        'DwrWna',
        'ug1xrKy',
        'B3fLzeS',
        'r1bAwhK',
        'B3nAyNu',
        'sg5hyuG',
        'uMrrAhq',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'uu5vree',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'rw5JCNLWDfDPDgHbza',
        'zgLZDhjV',
        'sLntDLK',
        'q2H4uee',
        'zgLZA190B3rHBa',
        'y3jLyxrLvMvYAwz5',
        'qhf3Cw8VBM9Kzs1WDhLa',
        'BuzfsKG',
        'y2LWAgvYDgv4Da',
        'vMzbEue',
        'zMv0y2Hjua',
        'zxHLy1bHDgG',
        'y3jLzgL0uMvHzhK',
        'CNHcExrLCW',
        'A294yNq',
        'v19psW',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'DgfN',
        'lcdLM57PGiaGs0HvqIdMTl7NLj/LN7RLNydKUiRMIQu',
        'DfneAfi',
        'ntjIyJGYnwnKyJy1',
        'Aw5PDgLHDg9Y',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'igTPC2fTys10yxnRoIbPzd0',
        'rwvZuuK',
        'tMHjuxm',
        'vvfdDxO',
        'CxvPyYbOyw5KC2HHA2uGy29TCgXLDguGywXWBJ0',
        'zxHPDa',
        'zLrbtfu',
        'idO6ia',
        'zMLTq2G',
        'BNLiuhu',
        'wfzyrvi',
        'shHYEKK',
        'D1Lft3i',
        'y3b1',
        'BM8GzwrNzsbJzxj0AwzPy2f0zsbPBIbutfmGAgfUzhnOywTL',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'y29UDgvUDc1Szw5NDgG',
        'tNv4Cem',
        'qMfZzuLUzM8GBg9JywWG57Ue5O6I5Rwl5AsX6lsLlcdMSR/NLkJKUiRMRkhMIjdLIP/LGlW6ia',
        'wNPxChK',
        'EMnssgW',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'B2jXqvK',
        'zxjYB3i',
        'A2v5x3nVDxjJzq',
        'Ec1LBMnYExb0zwq',
        'q2ffsem',
        'wxLJtei',
        'Cw1bBKG',
        'yKnzsuS',
        'igfSCg49',
        'z2v0tg9Nu3vTBwfYEq',
        'yNfNrhC',
        'Dg9tDhjPBMC',
        'DgXZ',
        'x2nVBMzPCM1iyw5KC2HHA2u',
        'q0f5ze8',
        'vMfmBNm',
        'A2nAvue',
        'u0PKEfm',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'mxWYFdr8mhWZ',
        'quHgy3i',
        'qMLushu',
        'BM90x2zVDw5K',
        'C2v0vtG',
        'AgfUzhnOywTLqNL0zxm',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'Bwf4v2LUzg93',
        'D3zryMW',
        'm3WWFdH8mNWXFdD8nNW1Fdq',
        'u01swuO',
        'vxb4t2i',
        'y29SBgvJDeXVy2fSsw5MBW',
        'yMLUl3n5C3rLBwn0Ba',
        'ENDsEgW',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'r0XjELi',
        'Ce9ov04',
        'y1bKD1q',
        'vLL2uge',
        'tMfKuuG',
        'mtaW',
        'Bwf4u3rYzwfTC1vUAq',
        'y29UBG',
        'zMLUAxnO',
        'ChvIBgLJvxjS',
        'zMLU',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'y2v0C2G',
        'AwyTBM9Uzs1TyxrJAa',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'swTzz0G',
        'EvvivM4',
        'wfLfweO',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'z2XPyMm',
        'mtqYodiWofbJD09XvG',
        'zwzM',
        'DNryB2e',
        'CxvPy0zHAwX1CMvZ',
        'ihDPDgGGzg9TywLUia',
        'CgvLCKnPza',
        'wfjlBeS',
        'Dg90ywXozxr3B3jRvxa',
        'C253A2u',
        'w1rLBxblzxLDihr0BcdLJ5JMM7tOVA7MJAlLPlhOTku6ia',
        'sgzjD1G',
        'zNvSBa',
        'CenHr1i',
        'vwXZtfq',
        'rKzXuuW',
        'BwTKAxjtEw5J',
        'BwfYA1nLBMrszwfKEq',
        'rvzsr2W',
        'D3m6lY8XmJCUmc4WlJe6',
        'AKrMCeu',
        'qxvtsMW',
        'Bwf4swrSzvrPBwvVDxq',
        'yMLrEeS',
        'ENj4zuO',
        'zM9YrwfJAa',
        'zfn0sxC',
        'ote0mZHhzKLYvwG',
        'AgvHzgvY',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'yMfZzty0',
        'CgHHC2u',
        'vvf4uKG',
        'tgvpAwq',
        'v1PXAhu',
        'v2vTy2S',
        'Cffvt1a',
        'B2fZA2S',
        'D2fYBKzHBgXIywnR',
        'CM1KAxjtEw5J',
        'CMz3sLG',
        'Cgf0AfjLC3bVBNnL',
        'Afb6z3e',
        'C2f2zwrFyxq',
        'lcbltKfnrv9lrvK9',
        'EK9NBhK',
        'vvDRqxa',
        's0zhCM0',
        'uuLxt1q',
        'A3z4ufy',
        'CMvHzfvjBNqXnKXf',
        'CfvZs1O',
        'x3nSzwvWsw50zxjYDxb0AwjSzq',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'DKvLBeW',
        'u2Pdzwu',
        'weD2y1e',
        'BwDY',
        'sKPewLm',
        'zgvSzxrLrg9TywLUrMLSzq',
        'wezMtvq',
        'BM9Kzs1JCM9U',
        'z2v0vgfZA1n0yxr1CW',
        'r2v0qwn0Aw9U',
        'BLv6qKK',
        'DhHqthq',
        's2nvzxm',
        'q2XLyw5SEsbJBg9Zzwq',
        's01preu',
        'ue9tva',
        'DhjHBNnWB3j0q2XVC2u',
        'CKvSsha',
        'yM9KEv90B29FBgfYz2u',
        'CKnyuLq',
        'Dg9mB3DLCKnHC2u',
        'Edi1nte5',
        'z2v0rNvSBfLLyxi',
        'CMvSyxLdB3vUDa',
        'ruvQBgm',
        'qNLKq1q',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'ANfxt1K',
        'u3jtBuC',
        'Cg9YDf9UB3rFywXSB3DLza',
        'Dg9cExrLqxjYyxK',
        'CgfLAgy',
        'CM15AvC',
        'x29Utg9ZCW',
        'EvvkCLG',
        'z1L3yxC',
        'wfvcvvm',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'Cg93',
        'zwLtB3O',
        'C3vIAMvJDa',
        'BgLnA0O',
        'Bg9VA3vW',
        'zhLUyw1PyW',
        'z0TuA2C',
        'q09ovfjptf9qvujmsunFs0vz',
        'vxHKquq',
        'tufss1nFrvrdx1jpt1q',
        'vMnZEK0',
        'C3rYAxbuyxnRtwv0yuXPBMu',
        'DhrS',
        'quj3wM8',
        'AwPLq0S',
        'vfzOCKi',
        'A3zT',
        'zMfPBfvUDgLS',
        'mZuXmta1m1HPtLrLAq',
        'zgHPAhu',
        'tufyx1nbrKvFsu5uruDfuG',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'DhH0',
        'mNW0Fdn8mxWW',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'sefcuMm',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'zKrdAge',
        'whL4Avu',
        'sNrlugu',
        'zwrNzsbYzxf1zxn0zwqGysbizwXSB1jLDhj5uMvXDwvZDcWGD2HPy2GGAxmGBM90ihn1ChbVCNrLza',
        'C3DHChrVDgfS',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'zwrNzsa',
        'Dw56AxbbCMnOAxzL',
        'BfrMtLm',
        'Cgf0AenOywXSzw5Nzq',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'lcbJCM9Upq',
        're9xtKXpqurFru5duLLqvf9nqvG',
        'l2fWAs9MAwXLl3PPCa',
        'tgPTsLm',
        'veXswKy',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'x3n0B3bWzwrgBgfN',
        'AhvIiow/HEMHU+s7PsbODhrWoI8VioAiLIbODhrWCZOVlYdLVidLPlq',
        'yxzNtg9Hza',
        'BLPPvfO',
        'yMfKihr1BM5LBcbPza',
        'C3rHCNr1Ca',
        'C3DHChvZzwq',
        'z2v0uMvWB3j0',
        'icHRzxKG5BEY6k6+572UoIa',
        'x3bLBMrPBMDgCM9TshvI',
        'rwXrtKm',
        'g1SZnM1Bsu5gt10BwZbTia',
        'zLvdAfO',
        'sgnjvKK',
        'mNW2Fdv8m3W0Fdb8mq',
        'vurWEeO',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'BgfZDezHBgXIywnRv2fYBG',
        'tNvquKO',
        'Dvv1sLu',
        'BfjMy28',
        'tufss1nFuLvox1jpt1q',
        'zxjYB3jLza',
        'yMfZzty0DxjS',
        'CMvJzwL2zvDPBMrVDW',
        'ic0Tls0G',
        'CMvJzwL2zxi',
        'C2vUzezYyw1L',
        'CxvPyYbKAwfSia',
        'zw5KC1DPDgG',
        'oKnVBNrLBNqTvhLWzq',
        'Ec1VCMLNAw5HBc1WyxrO',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'ms4XlJi',
        'BvvVzKi',
        'swPZtKS',
        'quzSr04',
        'qvrrs2m',
        'zgvIDwC',
        'BwfW',
        'zMLUvw5Hy2TLza',
        'ChjVyMvqDhLnB2r1Bgu',
        'Ahr0CdOVlW',
        'y3vYCMvUDeXVywq',
        'y2XVC2vtEw5J',
        'CxvPyYbSB3nZigvWB2nOpq',
        'BKPcB0C',
        'yvzVALy',
        'shvoELO',
        'rKPKBeG',
        'x0GYq29UBMvJDgLVBG',
        'mtm1mtC5nfvuq1LlzW',
        'Bu1QrMK',
        'x3jLDhvYBKXVC3q',
        'dqOncG',
        'Bwj6uvm',
        'v3fTEK0',
        'l2jPBI9IyxnO',
        'Ahr0Chm6lY8',
        't3jvz2u',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'qIbZy2LKpq',
        'Dw51s2m',
        'Bg9JA2vK',
        'yxLWvNK',
        'l3bVzhmV',
        'A25HBwvwywXPza',
        'ENDdD3K',
        'q2vhB0e',
        'EKTYEvm',
        'C2vYDMvYigHLBgXVoIa',
        'x2H0Dhbszxf1zxn0',
        'Be5WvwC',
        'zgnPza',
        'uKrOs3e',
        'x2rPC3bSyxLqyxrO',
        'uhrQAuq',
        'BMLowha',
        'wuD0vKq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'BMH0CKK',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        'CMvZzxq',
        'zMLxweO',
        'v3zqD3y',
        'oIbrvuLdioI/NUE7Rsa',
        'Cg9Xq3G',
        'CMvXDwvZDf9Pza',
        'vfreweS',
        'y29UDhjVBa',
        'CMvKDwnL',
        'CMvNAxn0zxjLza',
        'q1nzEMq',
        'wvjZuKi',
        'D3jPDgvcExrLCW',
        'yNvmtxa',
        'Ec1HzxmTzw5JCNLWDgvK',
        'uwj1Dhy',
        'wNzzDNi',
        'qKDTuLu',
        'AwT5uKK',
        'q29UDgvUDc1mzw5NDgG',
        'vKTizuC',
        'r2X6BwK',
        'DeTXuhO',
        'D3jPDgvcAwDvsw50nJrmrq',
        'DxjSzw5JB2rLza',
        'DM5kDe8',
        'C3LZDgvT',
        'x2DLDenVBM5Ly3rPB25Z',
        'EeXQDuK',
        'z2v0',
        'tvnfrwe',
        'z0vbv0m',
        'y29UC3qGC2HLBgWGpsbWCM9JzxnZlNbSyxrMB3jTid09psaID2LUmZiIid8GkhbYB2nLC3mUzw52lKnVBvnWzwmGFhWGiMnTzc5LEguIksa6iciVyMLUl3nOiJS',
        'q2D3zge',
        'y2rTEM8',
        'q1Lsr2G',
        'ieHuvfaVms4X',
        'yxLVEKq',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'Dg90ywW',
        's0Ltqu1bx0HvqL9sruXbwv9usu1ft1vu',
        'B2XJruy',
        'BwfYA3m',
        'qxrnugm',
        'CMvHzfvjBNqXnKjf',
        'ywjZ',
        'y3jvBg4',
        'mty4',
        'shr0Ce1LDgHVza',
        'CMvJDG',
        'x2nYy1rHyMXL',
        'quTMu0q',
        'DNfWsM4',
        'x2LWDJzvC2fIBgu',
        'rufqEhi',
        'wvjkCeS',
        'DMfYAw50',
        'C3DHCa',
        'ywnJzxb0lwvUy29KAw5N',
        'rK9Ry0q',
        'q2vJBve',
        'w0Tnt0rfm10G4PYfiow3SUI/NUAoPsbODwiG',
        'zgvYAxzLza',
        'C3rHDgu',
        's0jhwxy',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'CgvLCLrVA2vU',
        'sLrqA0C',
        'CxvHCMfUDgLUzq',
        'r3bXvxO',
        'DxniBgS',
        'v05Qr00',
        'vLPXr0O',
        'y0XKBLi',
        'BwvZC2fNzq',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'ALztwLq',
        'ywnJB3vUDfrHzW',
        'DM95Dxy',
        'wNDoDMO',
        'q2LXCwG',
        't2vNvgW',
        'vxDqAxC',
        'sg9ZDdOG',
        'DfLprw4',
        'z2v0t3jdCMvHDgu',
        'uc0Ynty',
        'v2rTueG',
        'uMDqqwW',
        'sNPWv2q',
        'q0ngAxq',
        'CMvZDwX0',
        'C2v0lwnVB2TPzq',
        'y29UDhjVBgXLCG',
        'CMv0CNKTywz0zxi',
        'x3j1BKXVB3a',
        'ihnZDgHYzxnOpq',
        'txjizu8',
        'wwvPzMe',
        'EejwC3i',
        'tvPbEhi',
        'CxvLCNK',
        'uvHuv0C',
        'A25HBwu',
        's2vRu0u',
        'B3bLBLn0CMvHBq',
        'A2jcrxO',
        'Dhj1BMnHDgvKiffvsumGDMfYAw50',
        'ENzbBK4',
        'sMzyz1q',
        'suLTtfC',
        'qxzdEKi',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'zujPEg4',
        'yxjNBYb0Dw5UzwWG',
        'C2v0qxv0B1bHzgrPBMC',
        'l2fWAs9HCMDV',
        'z2PxqxC',
        'AMnduwq',
        'Dxzmweu',
        'wuLsB1y',
        'wgDtA3m',
        'D3nFy2XVC2u',
        'B25dBg9Zzq',
        'DMvYAwz5q2vYDgLMAwnHDgu',
        's05btuuG5PYQ6k6+572U',
        'sfruuca',
        'A2v5ugfPCG',
        'shvMDvG',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'CgfYC2vlzxK',
        'v3jPDgvnzxnZywDL',
        'A3vIzxbVzhm',
        'v1nNruG',
        'z2v0qxv0AfrHzW',
        'twHpEge',
        'CgLUz1bLBMrPBMC',
        'q3bVAKC',
        'zxHLyW',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'y3jVBKPVyNm',
        'shvrsNK',
        'A2vLCefSAxzL',
        'sfvjwvC',
        'CMvJzwL2zvn0CMvHBq',
        'ihbLBMrPBMC9',
        'svb2nG',
        't1f0sgm',
        'Bgfcv2O',
        'reX0yKG',
        'C2vYDMvYigLU',
        'D1D2zha',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'wK5dDeS',
        'zNvZzq',
        'y2Lkuhm',
        'wMz1Dfi',
        'yNDxzMG',
        'Aw5MBgf0zq',
        'y2XPzw50igLU',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'swX0Aem',
        'tgjZr1e',
        'AgvHzgvYieTLEtOG',
        's0DtBNa',
        'u0LlEgi',
        'tfjHEMK',
        'rwvXDu0',
        'Dg9vChbLCKnHC2u',
        'sKHwBwK',
        'AdiUy2z0Dw5UzwWUy29T',
        'zgv0zwn0tgLUDxHmAwjJ',
        'Bfb4C1m',
        'Ce95EeC',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'y1DZsLe',
        'tevwruXt',
        'mhWYFdv8nNW3Fdf8nhWZ',
        'DgvTCa',
        'tLbitvO',
        'A0DYy24',
        'y21KihjLCxvPCMvK',
        'x3DHAxrxAw5KB3C',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'shr0CeHVC3q',
        'ihnPz25HBd0',
        'z2T3EuW',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'CgfJA2v0ihrVBYbZBwfSBcbMB3iGAgvHzgvYihbYB3rLy3rPB24GC2fTCgXL',
        'y1fry2G',
        'rg9ACwu',
        'suzjsgq',
        'Cg9UzW',
        'lcbODwjYzwC9',
        'tw9lv3C',
        'uvjnwva',
        'nMzcBefbsa',
        'DgjyCeO',
        'DfLotgO',
        'thLWruC',
        'x2rYywLU',
        'vKTQDfu',
        'Aw50zxj2ywW',
        'zLnOuMK',
        'u0Hizw4',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'Axb2na',
        'v1nABui',
        'Avb1CKO',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'wLbJt2u',
        'z2jMuw0',
        'y3jVBNrHC2TZx2XVzW',
        'ls0Tls1cruDjtG',
        'y2vPBa',
        'EKHNs1K',
        'x2v4zwn1DgfIBgu',
        'shr0Cfn0yxr1CW',
        'q1nVCM4',
        'DhjHBNnJCMLWDa',
        'vvj4CxK',
        'CgfYyw1LDgvYCW',
        'A3jhu0e',
        'CgLWzq',
        'zw5JCNLWDgvK',
        'CKjWt0G',
        'Bvj6q1q',
        'BKfhBeu',
        'u1zgwNO',
        'u2juBxy',
        'uwDkz04',
        'CgPLrui',
        'Dxb0Aw1L',
        'BgfZDevSAwnPDgLUzW',
        '4P2mioE7IoERR+wFUUEHGoIUVUAwVEs4JEwpR+EuQdOG',
        'EfPXCLa',
        'C2v0',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        's0XQEey',
        'zMLUAxnOzwq',
        'BNbTioIhQUAeIowKSEI0PtOG',
        'CgvLCK1HEezYyw1L',
        'ChHwsem',
        'y2XVC2vgCM9TshvI',
        'ywnJzxb0u3rYzwfT',
        'u2ryy3G',
        'tvfIBwe',
        'AvjyAeq',
        'tM90igeGEMLWigzPBgu',
        'x3n0yxj0',
        'zNjVBuH1yG',
        'B3bLBLn5BMm',
        'B3HAtvO',
        'Aw5PDgLHBe1HEfn0CMvHBxnvBMK',
        'AvHlqNi',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'x2jHC2vPBMzVsg9VA2vK',
        'zgvJB2rL',
        'C2vHBa',
        'teP4rMG',
        'DMDmD1y',
        'su5gtW',
        'tezgwLu',
        'DhrSx3nLy29Uzhm',
        'yxjNCW',
        'yw14sge',
        '6i635y+wieLqDJqG5AsX6lsLoIa',
        'ww5oCNG',
        'EfPuze0',
        'sKXOv2i',
        'l3bYB2m',
        'mhW0Fdj8nxWXFdz8mW',
        'C2nOzwr1Bgu',
        'x21HCMTlBw9Kztm',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'uwfPtKK',
        'y2LxsvO',
        'uvvjq0rcrY1iuYbWBJ0',
        'ChjPDMf0zv9InJq',
        'Cgf0Ac1YzxnWB25Zzq',
        'zgLNzxn0',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'A2zxruS',
        'rvHfq19tsevmtf9nt0rf',
        'CLj1u1m',
        'CNnAqxO',
        'DgXZmtmG',
        'AvjiA1u',
        'Ag9TzwrPCG',
        'EMjHq2y',
        'DK5esxG',
        'A2LZyw1Hlxn0B3jL',
        'z1nothm',
        'AgD6s0C',
        'qMfKihnPz25HDhvYzq',
        'z1neEfu',
        'veXLwvO',
        'te9hx0XfvKvm',
        'ufntCfa',
        'BwvZC2fNzxm',
        'CgvUzgLUz09Uzu9MzG',
        'BML2uKS',
        'zxHWB3j0ia',
        'y29UC2vJDxrPDMvgywLSDxjLCW',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'B3njBMzV',
        'qur1z2y',
        'AgXhy0C',
        'uwXktgW',
        'refnBMe',
        'zgvJCNLWDerHDge',
        'ueDlD0G',
        'y29SCW',
        'D2fYBG',
        'C3rYzwfT',
        'w1rHC2TtDg9Yzv0G4P2miowqR+wkQos7U+wkOEAbOUwKJEAjP+IHJow8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'DKPzyvC',
        'DMLH',
        'D2L0AfrHC2TnzxrH',
        'y29UBMvJDgLVBIbJBg9ZzwqGzhvYAw5NihjLz2LZDgvY',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'Dgv4Dc9WBgfPBG',
        'DgHLBG',
        'x2jHC2vjBMzVtM93txm',
        'A3vIzwXLDa',
        'zMLUAxnOzwrtzw50',
        'we1ZsK4',
        'tffhDuq',
        'nNWYFdD8mhWZFdH8mxW5Fdr8nq',
        'BgfZDfnHDMvKqxq',
        'sLbMBLO',
        'igHLEd0',
        'DJeUma',
        'C3bSAxq',
        'Chnesfy',
        'rgvvDxO',
        'sNrLvuS',
        'rLnluvm',
        'u09ODwe',
        'ww9IzK4',
        'BxnNuMvZB2X2zxjZ',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'yNvPBgrdBgLLBNrizwXSBW',
        'BhHUtgm',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'u0r5DgO',
        'Ce55tvK',
        'C2vYDMvYsgfUzhnOywTLu2vJCMv0',
        'ywnJzxnZx2rLBMLLza',
        'C2f2zuH1yNjLz3m',
        'BwfPBG',
        'Cg9ZDa',
        'Aw5PDgLHBa',
        't1busu9ouW',
        'D2fYBMLUzW',
        'z0HnAge',
        'Cg5tzw5K',
        'qLDHuwK',
        'tMPdyxe',
        'CMvWzxu',
        'q0XUvgu',
        'vNHWBem',
        've5myvy',
        'w1buwv0G',
        'DwvUvMe',
        'BgLZDezPBgvZ',
        'r0Dttg8',
        'CvLUAxa',
        'x29Urgf0ywDYyw0',
        'CMzhv24',
        'Cwr2yKO',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'DxrMoa',
        'CMvUyw1Lu3LUyW',
        'y29UDgLNDw91CW',
        'Afn3rM8',
        'y3jVBMXVB3a',
        'C2vYDMvYCW',
        'rMnhrLi',
        't2Dsqwi',
        'Dg90ywXozxr3B3jRrg93BG',
        'tKzkB1q',
        'tfHd',
        'Cgf0Ahm',
        'wePKqva',
        'CKXgAKm',
        'Dg9Rzw4',
        'w0Tnt0rfm10G4PQG77IpioAbOUwKJEAZQowgJoMHUsa',
        'x2HHBMrSzvjLDhj5',
        'AgfZ',
        'yxbWs2v5ugHHC2u',
        'wLrXtK4',
        'DNnJve0',
        'AxngAwXL',
        'q2PxCMu',
        'zNL6DgS',
        'uhvNC3q',
        'u1zxDwG',
        'CLr2q0O',
        'CMvXDwvZDeLK',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'EKvyExm',
        'vMrqsuC',
        'ENf6qNC',
        'x2nVBM5Ly3rpBMnL',
        'C25HChnOB3q',
        'swTyC2i',
        'yM9KEv9InJq',
        'y29WEuzPBgvtEw5J',
        'CMHbvg0',
        's2Hwrw4',
        'ANj4Egu',
        'yxrmweq',
        'D2rZs2i',
        'su5swee',
        'D1juEvi',
        'r2nJEvq',
        'DxbSB2fKrMLSzq',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'zM1NCNe',
        'y29UC3vTzwq',
        'qvzLCue',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'x2XVB3bqCM9TAxnL',
        'wuLnue8',
        'yvPXtgC',
        'C3rHDgLJ',
        'tffJu1e',
        's1bIBMS',
        'wNvuqKC',
        'zNjMwe4',
        's2vewfG',
        'C29YDa',
        'Cgf0Ag5HBwu',
        'ywXSB3C',
        'tuzovNy',
        'zuf6yui',
        'r2jZzKe',
        'B3bLBKnVBNrYB2W',
        'uxbrB1q',
        'DvDNq2O',
        'BwXYCe0',
        'wvDND3K',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'CxvPyYbRzxK',
        'Bfj2qNG',
        'ChHLCeO',
        'zgf0yq',
        'B3jPz2LUihDLyNnVy2TLDcb1CgDYywrLihjLAMvJDgvKoIa',
        'C3rHDhvZq29Kzq',
        'C0DwBxO',
        'y3jLyxrLzef0',
        'AwyTBwf0y2G',
        'CwXRzeS',
        'zuHwAwO',
        'Bg9JyxrPB24',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'CgvLCLn0CMvHBuXVy2fS',
        'DuzpDeu',
        'vKDRBMS',
        'uLfiuwy',
        'tKjJsNy',
        'vgriuNy',
        'Ec1MAwXLlxbHDgG',
        'CxvPyY5JzNr1BM5LBc5JB20',
        'thbWzwi',
        'zuTSBhm',
        'vuL4rfu',
        'ChjPDMf0zuTLEq',
        'BwvT',
        'ndaW',
        'zuHNzui',
        'yMLUl2z1C2vYBw91BNqZ',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'C3rKB3v0',
        'l2fWAs9ZDgf0Dxm',
        'wwXsyMG',
        'D3rYuNu',
        'zw1WDhKGuLbdihbHEwXVywq',
        'x3rPy2S',
        'yvDhB2y',
        'BejZwuy',
        'zwDwv2O',
        'Bwf4lxn0CMvHBs1KyxrH',
        'Ag5nrMq',
        'ruflt2e',
        '5yQG6l295AsX6lsLoIa',
        'Bg9N',
        'BwfZAW',
        'Ae9QC04',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'n3WXFdn8mhW2Fdv8nhWY',
        'wvH1uM8',
        'A0H1sNK',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'DuDXBNy',
        'rvvry0m',
        't09buvm',
        'q29UDgvUDc1uExbL',
        'DxnYl2XVy2fSl2jPBI9ZExn0zw1JDgW',
        'DxnYl2jPBI9ZExn0zw1JDgW',
        'sgzSvfe',
        'CMvJDLjHBMDLCW',
        'yxjJAa',
        'qZPCv2LUzg93CW',
        'x3DZrMfJDg9YEq',
        'y25rtxe',
        'zMLSzw5HBwu',
        'q2H1BMSG',
        'swjvwxq',
        'ANzoAeO',
        'BgfZDevYCM9Y',
        'sen6sLm',
        'vezWwfO',
        'AgfUzgXLsgfUzhnOywTLtwvZC2fNzq',
        'BgLTAxq',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'D3m6lY8',
        'l2rLDG',
        'z3rdENi',
        'lMrVy2TLCMvUDG',
        'x3jLy29YzezHAwX1CMu',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'ELvnzwm',
        'BMv0D29YAW',
        'DxnL',
        'C0DjDKq',
        'BM5LD0C',
        'v0fstL9jtLrfuLzbta',
        'DgfZA01LDgfmAw5LuMu',
        'zxHWB3j0CW',
        'zgLZAW',
        'AxnbCNjHEq',
        'vKfgtwK',
        'D3jPDgveB21HAw5gAwXL',
        'wff0B0m',
        '5lIk5OQL5BYc5BI4oIa',
        'z2v0qMfZAwnjBMzV',
        'EefTq08',
        's3rhD2q',
        'CMvHzev4ywn0',
        'BxvZBa',
        'ug5Ivhi',
        'r0jmqvO',
        'yKPAtMq',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'qxbXAw0',
        'DhjAtK0',
        'zw52',
        'CxvPyYbWDg8GzxbVy2G9',
        'ALvRzKG',
        'y0P3tvm',
        't0Ljtvi',
        'rLDhB2W',
        'CgD5A0G',
        'AujeAg8',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        's05btuvFs0vz',
        'zhrQsNm',
        'BwDxwuW',
        'zwnKC2fFChvIBgLJx2TLEq',
        'qKftruLorK9Fte9dquXFvfrm',
        'l2fWAs90zw1WA2v5',
        'vgnqAuS',
        've5OsuK',
        'y2z0Dw5UzwWUANmVms4W',
        'CuXnDeO',
        'u2nqvMy',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'A1LswgC',
        'z1vUENO',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'yLvNC1e',
        's1vWyMG',
        'D3jPDgvvsw50mZjmrq',
        'DgfNu2L6zq',
        'ChvIBgLJx3vYBa',
        'C2v0qufe',
        'rhDyy1y',
        'q05cDLu',
        'uNLUEKy',
        'igzHAwXLzdOG',
        'tLrUzMK',
        'zNvevxi',
        'DKDVyNa',
        'q05srMu',
        'DtmY',
        'Bw9K',
        'C2jIAfi',
        'BhvJvLi',
        'A2TQCNC',
        'B3HJyMW',
        'qKHeyuC',
        'C3rYAw5NAwz5',
        'DxnYl2jPBI9MDxnLCM1VDw50mW',
        'y29UC3vTzwruB3rHBa',
        'vg1Isfi',
        'C29JA2v0',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'l3zHCI9SAwiVChrLCM9Kywn0EwWV',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'Ec1UB25Jzq',
        'DxnLza',
        'jNr5Cgu9',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'zLDPrM0',
        'whzQAxa',
        'C3DLsvq',
        'wufkDvO',
        'x3bLzxjtDhjLyw1mAw1PDa',
        'BM9Uzq',
        'y2HPBgrFChjVy2vZCW',
        'BuvoyKW',
        'CNPVALe',
        'yKzIsvC',
        'tM9Uzq',
        'C3bRAq',
        'z0TxwKm',
        'y29UBMvJDa',
        'AvjAD00',
        'DMvHy3G',
        'x2zHAwW',
        'DhnMueO',
        'x2v4CgLYzun1CNjLBNq',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        's2rSz0K',
        'zM9UDc93B2zMmG',
        'x2zPBgvdB250ywLUCW',
        'CxzOveW',
        'rK9mte9xx1nztuXjtKTt',
        'zg9OuxvLCNK',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'x2nYyZmY',
        'DgH1wKS',
        'C0v2CNy',
        'y2fJAgu',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'y29UDgvUDc10ExbL',
        'Bhnrrhy',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'tufss1nFufjpq19st09u',
        'C2vYDMvxzwjZB2nRzxq',
        'CuzsEgO',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'Cc5VBKrHDgeOzNvUy3rPB24GkcKGE30PoW',
        'C2HHmZG0',
        'B2vtB2q',
        'zMLUzeLUzgv4',
        'wgfqAwy',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        't2HVExy',
        'ELD1Bei',
        'DwHXAuC',
        'Dw5YzwfJAgfIBgu',
        'Bg9ZC1jHBMDLCW',
        'wNjrEg8',
        'zujgC0K',
        'zxLk',
        'sML1tLu',
        'ywvfCeS',
        'x3nWBgL0qw5KrMLUAxnO',
        'svrWqvK',
        'CKzqDgW',
        't3zpEgi',
        'zNntAxPL',
        'txHQAfi',
        'AuXhtLe',
        'svv5wwO',
        'zKnIs04',
        'Dwjguuu',
        'yLL5Eey',
        'CxvPyYbWzwvYihbHCMfTCYbTyxGTzgf0yt0',
        'zxHWCMvZCW',
        'ANDR',
        'AhvI',
        'AwyTCMfUz2u',
        'qNPqD08',
        'vw9cDLK',
        'CMnMDxy',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'ihbUpq',
        'y2XLyxi',
        'w+E7IoERR+s8MUIVNsa',
        'C2Xusfu',
        'EMLWsxrLBxm',
        'zvLzwee',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'CxvLCNLbBgW',
        'yxbWuMvJDKDLBNm',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'CxvPyYbZzxj2zxiGAgvSBg8GCMvJzwL2zwqSigHHBMrZAgfRzsbRzxLZigLUC3rHBgXLza',
        'pdGSiowUNUMzHEs9V+EuQca',
        'zxrUCwK',
        'BgLUDxG',
        'D09yrfm',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKvFs0vzioACQUIUVUE9RIWG5lU75yQH5OYb5lMf5yYw5PYQ5zcV55sO',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'zKLdAxm',
        'ENj1vMm',
        'ExfSq2K',
        'y2H1BMTF',
        'EvPiugO',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'tNrYCLm',
        'A2vYBMvSx3zLCNnPB24',
        'z3vUz1y',
        'EvbSugS',
        'yxb3AK8',
        'qKftruLorK9FrKfjtf9cqunlt0zg',
        'ue1cwfe',
        'rNP3zfq',
        'C3LZy2fSBa',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'tvrpsuS',
        'zxLdCeK',
        's2vTu3O',
        'AxbZ',
        'BwvTx3rVDgfS',
        'C2XVD1n0yxj0vgHYzxnOB2XK',
        's2fzt0u',
        'v09pzLO',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'y0zAwe0',
        'twfUz2i',
        'qu95Dxa',
        'B3jPz2LU',
        'icJMIjdLIP8P',
        'rvzeDuO',
        'x2rLDK1PBM9Y',
        'Bwv0yq',
        'teXNz1i',
        'wencyvm',
        'EMLWnJq',
        'CKnzAhG',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'AfLuChq',
        'twvdugu',
        'runrBei',
        'AhvICMvNCW',
        'x2HHBMrSzuzYyw1LCW',
        'y29Uy2f0',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'y0HAt0K',
        'Cwrqy0O',
        'AgvHzgvYC1nLBNq',
        'ios4JUMDMEAaGEMHUsbltKfnrsdLHRlNQOeSioI3S+I/HYaOA3n0B3jLioADOEEBRUs/NEEvMsK',
        'Dw96C00',
        'A0nztwu',
        'BvbVBvG',
        'rfrOC2G',
        'zLLlvfG',
        'BgfZDfjLy2vPDMvK',
        'yNL0zuXLBMD0Aa',
        'zM5vqK8',
        'qNjqvgG',
        'C05Pz0O',
        'ChrVq291BNq',
        'reHdzvO',
        '5PEGigH1yIdMS6JLHOWGkeTnt0rfptmG5OIwifbpu1qGl2fWAs9ODwiG5yQO5Ocb5RoO5yAmkq',
        'BwzNt1a',
        'wNn2uMy',
        'y0v0zhq',
        's0HvqL9qvujmsunFvvjm',
        'y3PYAhO',
        'v05XA20',
        'yM9KEq',
        '5Qc45B+d57Ui56UV5l6D6lwwicHIDw4TChr5ksdLIQdOVB3LPlhOTku6ia',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'DgvosLC',
        'DgvZDa',
        'zgvZDa',
        'rM1cDui',
        'y2XVC2vK',
        'CMvXDwvZDhm',
        'qwXTEue',
        'Bg9JywXqCML2qJy0',
        'B3bLBG',
        'C3vIAMvJDefSDe5HBwu',
        'C2v0q3jVBLrHC2TZ',
        'AxndAgfYywn0zxjezxzPy2u',
        'C2vSzG',
        'uuDpCvu',
        'zNjwEuC',
        'wxnXr2e',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        '8j+mKcblsvnbtufFre5tpw9UoIdLHAJPG6GGrg9iioACJEwkOEwzQos4JEwpR+I+VIWGiG',
        'DhvUBMvS',
        'Bwf4qwnRrgvSyxK',
        'ig92zxiGuvvjqW',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'BwLnC3m',
        'x21HCMTlBw9Kzte',
        'tLvvwgO',
        'turUAwu',
        'tLD0vuK',
        'wc1oB25Jzq',
        'x3jLy2vPDMvxC0j5DgvZ',
        'AMjTt1e',
        'BwvYz2u',
        'x2DSB2jHBeHVB2S',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'tuzAvwW',
        'yw5iDMi',
        'reDPz2y',
        'y29Uz2vZDgLVBLDPBMrVDW',
        'tfnnvg8',
        'y29TBq',
        'z0TOrfm',
        'zgLYzwn0B3j5',
        'jYdPNz7MS5u6iow/HEMHU+s7PsbODhrWoI8VioAiLIbODhrWCZOVlYdLVidLPltKUjtML6dNQBRNMB3LRzFNRky',
        'yLD4Ee4',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'C2DsrNa',
        'ls0ncG',
        'm3W2FdeYFdeWFdr8mxWXmxW3Fdv8ohWXnhWWFdL8mtn8mNWXnNWXnq',
        'sw1cEuS',
        'EwfluuG',
        'uvzkr2y',
        'BNb0DxO',
        'C2vHCMnO',
        'yxDHAxrPBMCTC2vYDMvYlwHLBgXV',
        'B25LDgLTzxrHC2TZx2XVzW',
        'oM1LDgHVza',
        'vvDoBxi',
        'EhjOtuC',
        'CMvTB3zL',
        'CgfYDhm',
        'v1PeAey',
        'ug9Oq3u',
        'CNvU',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'C2v0vgLTzw91Da',
        'r0jcBMS',
        'sMDLr1q',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'B25fEhbPCMvK',
        'tvDVEfq',
        'qurhyvO',
        'DLnAv3C',
        'v1fsAxe',
        'C2vJCMv0',
        'qhf3Cw8VBM9Kzs1WDhK',
        'we5QrfO',
        'Dg90ywXFy2H1BMTZ',
        'EePXswK',
        'C3rHCNq',
        'x3bLBMrPBMDpBMvpzMy',
        'CfzOAw4',
        'tg91tfK',
        'D3jPDgvuzxH0tgLZDa',
        'Dw52ueC',
        'qKDctuS',
        'uLjywuy',
        'x2rPC2nHCMrfCg9JAa',
        'sKvss0W',
        'zen2CNa',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'CKfnvwe',
        'B3DUzxi',
        'rfvqq0y',
        'q0Xpu0ve',
        'zgf0yv9InJq',
        'CMvZCg9Uza',
        'ign3BMq9',
        'CuHZBKu',
        'EfvLBxC',
        'ALvMq04',
        'DMfSDwu',
        'reThv28',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'u3rHDhvZ',
        'tKrqqMC',
        'rMLSzsb0B28GBgfYz2u',
        'ExHtt1G',
        'BgvRCxC',
        'BwHhqNC',
        'uuzmv3G',
        'DfjYrLG',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'igHHCYbHBIb1BNjLywrHyMXLienVBM5Ly3rszxf1zxn0oIa',
        'sLD4BNe',
        'y2yTAw50lq',
        'EuX6t3e',
        'DhL0ANC',
        'DgXtELK',
        'AxnFyxv0AgvUDgLJyxrLza',
        'lNrTCc0',
        'B0DcDfe',
        'r1jpzfa',
        'y0ngsw0',
        'yM5KzfK',
        'r21KzMy',
        'ChHhqwO',
        'A2v5x2LK',
        's0Ltqu1bx0fsr09FuKvuuLLFqKftrv9trunptKrt',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'A21VzguY',
        's2vir2i',
        'uxn1zfa',
        'mgeZnMnKmtjHmtnL',
        'EuP6v3O',
        'igLKBgu9',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'De5vrMS',
        'u2vXt2i',
        'CMvHzeHLywrLCNm',
        'vKvsu0LptG',
        'qujdvxC',
        'y29UDgvUDeXLBMD0Aa',
        'AxjHv1O',
        'u3zSywW',
        'ihjLyxnVBJ0',
        'A1bRsfG',
        's3vIzxjUzxrLCW',
        'yKvbuhC',
        's3zyqvG',
        's05btuuG5BEY5zYO5PYSigfNzw50ioAZQowgJoIHQos4RsaOA25HBwuG5zsV5lIakq',
        'CMvJB25Uzwn0Aw5N',
        '5zon5BQu5l2t6lAf6l+hieTju0fnqv9ivujFtufyx0jprfKGka',
        'tKvhqvrjvKvFvfrm',
        'Dti0',
        'zxzlBxe',
        'A0v4AeO',
        'EhrLCM0TmJu2y29SB3i',
        't25btw0',
        'BeL1ufu',
        'C3rHDgLJrMfSBgjHy2S',
        'C2HPzNq',
        'ihbYB3H5igzHAwXLzdOG',
        'veP3rge',
        'zxHLy3v0ywjSzq',
        'x3rYyw5ZBwL0',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'CgvLCKXPBwL0',
        'CMvZ',
        'sg9ZDa',
        'D0XryKy',
        'tLntt2y',
        'ywnRrwnU',
        'zuzVvuC',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZiVmNeVmW',
        'AgfUzgXLsgvHzgvYCW',
        'x3bHCNnLtg9UzW',
        'r2XLENi',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'tLjUDK8',
        'r1Hlq2S',
        'z2v0qMfZzuLUzM9ozxq',
        'Cc5VBKv4AxqOzNvUy3rPB24GkcKGEYbWCM9JzxnZlMv4AxqOmcK7ih0PoW',
        'q1jptL9dsevds19jtLrfuLzbta',
        'ugfZzxK',
        'mc4WlJaUma',
        'ywXSigrVAcbZzxj2zxjZigzHAwXLza',
        't3b3Efm',
        'rKTnCxu',
        'CNfNt0G',
        'suTnD0u',
        'tufss1nFrevwx1jpt1q',
        'vKrowuO',
        'zMLUywXSEq',
        'shr0CeHLywrLCG',
        'uePgqxm',
        'ihb0BZ0',
        'zxHWCMvZCY13CW',
        'z2vUzxjHDgvqywLY',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'r3HYvgK',
        'vNfhCvm',
        'D1P5CNa',
        'y1DjENa',
        'z2v0ywrKCMLUzM8Gru5pvezpvu5eia',
        'z3jeAwG',
        'CgLUzW',
        'wMPzAK4',
        'zwTdtfe',
        'nhWYFdb8m3WX',
        'B2jQzwn0',
        'D3jPDgvuB09YAwDPBG',
        '6k+35Rgc6lAf5PE2',
        'tvnPrKS',
        'ugrtt1K',
        'Affosxi',
        'EgzLywe',
        'thzWsuG',
        'mtmZt1zQuxDh',
        'uw5UrfC',
        'whbzAwW',
        'AefsBgm',
        'rhjnvMO',
        'B2TTBNi',
        'AuvKC1a',
        'CMvJDxjZAxzL',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'DgvYBwLUywWGDw5HDMfPBgfIBgu6ihb0EsbWCM9IzsbMywLSzwqGw3b0Ev91BMf2ywLSywjSzv0',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'ywnR',
        'Aw5PDgLHBfnLBNq',
        'C3LZDgvTza',
        'ChvTCe9YAwDPBG',
        'z0nKvgi',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'wg93z3a',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'AhjnufG',
        's0Ltqu1bx0HvqL9qsu5hx0LovevsvKfm',
        'y2vIDu0',
        'uKfrAxq',
        'x3nLBMruB0XVy2fS',
        'Aw1Hz2uVz2LM',
        'ChrV',
        'wvPbA3e',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'yYbHCcb0CMfMzMLJ',
        'BxrPBwu',
        'u1HrshG',
        'Auv0wwG',
        'sgfUzhnOywTLu3rHDgu',
        'l2fWAs93B3jR',
        'wLDYDuC',
        'DNfkz2G',
        'C1P4y3C',
        'ruj3yMy',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'tfHmBNC',
        'C3rYAw5N',
        'tufss1nFuK9pva',
        'tfz3EeW',
        'CgvLCIbJBg9ZzwqGy29Kzt0',
        'x2j1AwXKugfJA2v0',
        'sw5PDfrHC2S',
        'D2Tpz0e',
        'C0jhBNi',
        'Dw5ZAgLMDa',
        'qKftruLorK9Fq0fdsevFvfrm',
        'yw9AAuq',
        's1vuDe8',
        'vfnwBfm',
        'zgLcAvq',
        'CuzsywC',
        'C2Ttufq',
        'D3vrvvO',
        'D2LUmZi',
        'zfHivNy',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'CgvLCK1HEefJA0rLBgf5',
        'vvf2z2u',
        'y2XLyxjdCM9Utg9NCW',
        'BhHJ',
        'ywXPDMu',
        'y3jVBNrHC2TZ',
        'l2fWAs9YDw4',
        'DgLTzw91Da',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'yKjqufK',
        'Bg9JywW',
        'vfrmx01jtG',
        'Bwvfv0y',
        'u0j5A0K',
        'CMvWB3j0u2H6ywW',
        'ANnVBG',
        'wgDTy0O',
        'r01tt0K',
        'rej4u3K',
        'wwPVtLK',
        'yxLnt3K',
        'zxbVy2G',
        'wKLqx01bwf9ftLrssuvt',
        'Aw5WDxq',
        'ugPNuvy',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'iowKSEI0PtOG',
        'qunnrMm',
        'wvrrveG',
        'r3HgBMK',
        'BNbTioIhQUAeIoI3S+I/HZOG5Qoa5Rwl5yIWihbUCg0TBg9JAY55yw1SicHWBNbTioMdQoE9SIWGBNbTigLUC3rHBgWG5lYA6zI75AgEksWG5BMZ5y+W5yYf57Y65AsX5PE25y+V5OMl5yQOoIbWBNbTigfKzca',
        'CKHAwe0',
        'v2jusuO',
        'ihn0yxj0zwqGB24G',
        'ALbLsM4',
        'qNbQr0q',
        'D3neB3DUz3jHzgvuB2TLBG',
        'rhvJtuq',
        'CMvWBgfJzq',
        'yNfxyMW',
        'x2LUrMXPz2H0qNL0zxm',
        'AxneAxi',
        'qvnYDfy',
        'l2fWAs90yxnRl29UzxrPBwu',
        'qxzQsKu',
        'Ew1Oz1G',
        'CxvPy1bYzwfTyMXL',
        'B25tzw5KuhjVz3jLC3m',
        'D3jPDgvgAwXLu3LUyW',
        'Cgrlv0m',
        'BM9gCuy',
        'DMfJwNq',
        'q0zfBuq',
        'C2vJDxjLigrUCYbPBNrLCM5HBcbLCNjVCG',
        'uxnTDK8',
        '6i635y+w5yAf5A2y5l+H5OgV5AsX6lsLoIa',
        'CMvQzwn0zwq',
        'AgTss1C',
        'CKXkCu8',
        'CK9dufa',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'x3nLBMrxAw5KB3C',
        'Ahr0Ca',
        'wwTZvve',
        'uffQwgq',
        'ALDRtuW',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'zxHnuNO',
        'DxbKyxrLq29UzMLN',
        'sMTdt3m',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'DNHYyuO',
        'ywnRrgvSyxK',
        'vfDtwLi',
        '77YB5OMl5yQO6kgL6kof5zco6zYa6yEn5zcVigfNzw50ioI/M+EOIYaOrvnnioIVHos8SowKSEI0PEwCQoI/M+EOI+wgHEAWUos5HEE8K+wTMcWG5zcm6l+B56Il6yEn6k+v5PEG5Pwikq',
        'Cgf0AcbYzxf1AxjLza',
        'B3fjA2C',
        'uNrPBwvVDxq',
        'A1Poy1K',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'y29UBMvJDgLVBLnLBNq',
        'uMrsuLe',
        'yNDZAei',
        'y3btEw5J',
        'zw5JCNLWDerHDge',
        'AgjYtg4',
        'CunjvMe',
        'Bwr0EMm',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'zeHXtee',
        'y0zsAw4',
        'ywXSB2m',
        'x2rLBgL2zxjtDhjLyw0',
        'g1SZm21Bv0fstL0BwZbTia',
        'nda0',
        'CKj6C1e',
        'vhfyEwi',
        'A1rSAfq',
        'tufhsum',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'vM9REKS',
        'DhvUBMvSrg9TywLU',
        'D3jPDgvvsw50mtzmrq',
        'A3jdzLi',
        't1zqu3O',
        'AxngAw5PDgu',
        'B0LQqwi',
        'BMv4DeXVy2fSu3rYzwfT',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPtg9JywW',
        'zwnKC2fFDMS',
        'Dw5SAw5Ru3LUyW',
        'EwLSwwy',
        'BgfZDfjLz2LZDgvYzwrbDa',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'y21KlMv4zq',
        'CMvWB3j0',
        'yxbP',
        'zxrHzW',
        'sM5jvgK',
        'z2v0sg91CNm',
        'EuX2tvG',
        'u3fSEuW',
        'AgHRwg0',
        'qhf3Cw8G57Y65Bcria',
        'Dg1MCeO',
        'Exv0rw8',
        'yLHPzNu',
        'CgvLCLn0CMvHBvjLBw90zq',
        'yxDHAxrPBMCTAgfUzhnOywTL',
        'tvbiBMS',
        'ywzkqLK',
        'rNLfq1G',
        'vurSBLa',
        'AxnjBNrLz2vY',
        'wwj3ywu',
        'CMvHzejPz1vjBNq2neXf',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'CxvPyYbPDG',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'vejer2W',
        'q2fWrwzMoG',
        'uhzRseC',
        'Bvjgz3a',
        'wezjBM8',
        'y29UC3rHBNrZ',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'ExniA2S',
        'y29UBMvJDgLVBLDPBMrVDW',
        'y29UC3qGChr5id0GCMvXDwLYzsHWCM9JzxnZlMvUDI5lsvnbtufFufrzx1bst0jfx1bbveGPoW',
        'q3L5uge',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'CMvHBhbHDgHtEw5J',
        'Ae9kzvC',
        'C3rYDwn0uhrY',
        'quvdshi',
        'CvDcyKe',
        'DgLTAw5Nu2fMzuvXDwfS',
        'svnqq1u',
        'wffuqwW',
        'AuXpuKC',
        'rvLPBfu',
        'C2vUzeHLywrLCNm',
        'l2jPBI9ZAa',
        'A1njueS',
        'rwfkzNa',
        'vwThEvm',
        'tMPltxm',
        'uxPKtgi',
        'zMLUywW',
        'AxneAxjLy3rVCNK',
        '6kEJ5A+g5AsX6lsLicJLR4BPKQxPLjNOR6/MIjBMLBdMJA7OOQVNR6hMLlKPoIa',
        'ELnOyKe',
        'vw5ovNq',
        'DhmTBM9Kzq',
        'BMv0D29YA0LUDgvYzMfJzxm',
        's2j2zwy',
        'zxjY',
        't21bu0y',
        'qKvhywm',
        'uu1Vy2C',
        'mZaYytmWmduWnJaZmMi2ntzLmdmYmtaW',
        'zxjwrwG',
        'uxzmyMS',
        'yLHIC1K',
        'sKP1Dgy',
        'CMv0CMfUC21PDhm',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'BM9YBwfSAxPLt25LDgLTzvrHC2TZ',
        'BLHVuu0',
        'AhvIv3m',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'CgfYyw1Z',
        'ihvZzxmGDhvUBMvSihbYB3rVy29Sia',
        'ywDLBNq',
        'ihvUzgvJCNLWDgfIBgu',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'oMf1DgHVCML0Eq',
        's05btuu',
        'rg9JA2vY',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'swz5yKW',
        'ihjLDhjHBNnTAxrZ',
        'DhHFyNL0zxm',
        'z2v0tg9JywXjuhy0',
        'x2zVCM1HDe1Vzgu',
        'DMvlsLi',
        'x3jLy29YzfjLy2vPDMvK',
        'shvIuMvNAxn0zxjfCNjVCG',
        'Ahr0Chm6lY84lJGUoc44l3jLC29SDMu',
        'CMvZB2X2zvf3Cw9nywLU',
        'Dhrnwwi',
        'Dgv4Da',
        'BMPKv2S',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        's0LzzuO',
        'z2v0tw9UDgG',
        'AhvIvxjS',
        'vvbIs3e',
        'y2XVC2vszwfZB24',
        'vvHftgS',
        'rhburgS',
        'qvzHwvK',
        'DKzXrMK',
        'Axb2nLvZywjSzq',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'y29UzMLYBwvK',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'CwTcrKy',
        'x3jLBgf5vgLTzw91Da',
        'qujpA2m',
        'x25VDgLMEvDPBMrVD3m',
        'DKLNA3C',
        'zeT4wxu',
        'wKz2A3m',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'wf9psW',
        'D3nFywnR',
        'C3DHCf90B3rHBa'
    ];
    a0a = function () {
        return n2;
    };
    return a0a();
}
function a0bE(a) {
    const hO = a0cE, b = {
            'kRxdP': function (d, f) {
                return d(f);
            },
            'Svlal': function (d, f) {
                return d < f;
            },
            'TPNgN': function (d, f) {
                return d < f;
            }
        }, c = b[hO(0x609)](BigInt, a);
    if (b[hO(0xc67)](c, 0x40n))
        return 0x1;
    if (b[hO(0x4f4)](c, 0x4000n))
        return 0x2;
    if (b[hO(0xc67)](c, 0x40000000n))
        return 0x4;
    return 0x8;
}
function a0bF(a) {
    const hP = a0cE, b = {
            'HufuX': function (j, k) {
                return j(k);
            },
            'cPdwT': function (j, k) {
                return j < k;
            },
            'drdez': function (j, k) {
                return j < k;
            },
            'YycLB': function (j, k) {
                return j > k;
            },
            'iEdsP': function (j, k) {
                return j(k);
            },
            'mAhZn': function (j, k) {
                return j & k;
            },
            'zQxgM': function (j, k) {
                return j | k;
            },
            'paehf': function (j, k) {
                return j(k);
            }
        }, c = b[hP(0x957)](BigInt, a);
    let d, f, g;
    if (b[hP(0x7eb)](c, 0x40n))
        f = 0x1, g = 0x0;
    else {
        if (c < 0x4000n)
            f = 0x2, g = 0x40;
        else
            b['drdez'](c, 0x40000000n) ? (f = 0x4, g = 0x80) : (f = 0x8, g = 0xc0);
    }
    d = Buffer['alloc'](f);
    let h = c;
    for (let j = f - 0x1; b[hP(0x7cb)](j, 0x0); j--) {
        d[j] = b[hP(0xcb7)](Number, b['mAhZn'](h, 0xffn)), h >>= 0x8n;
    }
    return d[0x0] = b[hP(0x302)](b[hP(0x851)](Number, h), g), d;
}
function a0bG(a, b) {
    const hQ = a0cE, c = {
            'hinvU': function (h, j) {
                return h - j;
            },
            'LpGxU': function (h, j) {
                return h >> j;
            },
            'yPlPk': function (h, j) {
                return h < j;
            },
            'snMic': function (h, j) {
                return h - j;
            },
            'RynzF': function (h, j) {
                return h(j);
            },
            'PjgQV': function (h, j) {
                return h << j;
            },
            'fiDoy': function (h, j) {
                return h + j;
            }
        };
    if (c[hQ(0xeb6)](a[hQ(0x5bd)], b) < 0x1)
        return null;
    const d = a[b], f = 0x1 << c[hQ(0x317)](d, 0x6);
    if (c[hQ(0xb9a)](c['snMic'](a['length'], b), f))
        return null;
    let g = c[hQ(0xb1b)](BigInt, d & 0x3f);
    for (let h = 0x1; c[hQ(0xb9a)](h, f); h++) {
        g = c[hQ(0xd07)](g, 0x8n) | c[hQ(0xb1b)](BigInt, a[c[hQ(0x421)](b, h)]);
    }
    return [
        g,
        f
    ];
}
class a0bH {
    constructor() {
        const hR = a0cE;
        this[hR(0xc12)] = [];
    }
    [a0cE(0xde3)](a) {
        const hS = a0cE, b = {
                'grDih': function (c, d) {
                    return c & d;
                }
            };
        return this['parts'][hS(0x6b2)](Buffer[hS(0x5a6)]([b[hS(0xca4)](a, 0xff)])), this;
    }
    ['bytes'](a) {
        const hT = a0cE;
        return this['parts'][hT(0x6b2)](Buffer[hT(0x3b0)](a) ? a : Buffer[hT(0x5a6)](a)), this;
    }
    [a0cE(0x275)](a, b) {
        const hU = a0cE, c = {
                'lRfco': function (f, g) {
                    return f >= g;
                },
                'TSVlS': function (f, g) {
                    return f(g);
                },
                'iBAcc': function (f, g) {
                    return f & g;
                }
            }, d = Buffer[hU(0xd4a)](b);
        for (let f = b - 0x1; c[hU(0x899)](f, 0x0); f--) {
            d[f] = c[hU(0xce7)](Number, c['iBAcc'](a, 0xffn)), a >>= 0x8n;
        }
        return this[hU(0xc12)][hU(0x6b2)](d), this;
    }
    ['u8'](a) {
        const hV = a0cE, b = {
                'qdPcJ': function (c, d) {
                    return c & d;
                }
            };
        return this['parts']['push'](Buffer[hV(0x5a6)]([b[hV(0xbbf)](a, 0xff)])), this;
    }
    [a0cE(0x48f)](a) {
        const hW = a0cE, b = {
                'LAIYX': function (d, f) {
                    return d & f;
                }
            }, c = Buffer['alloc'](0x2);
        return c[hW(0x2b6)](b['LAIYX'](a, 0xffff), 0x0), this[hW(0xc12)][hW(0x6b2)](c), this;
    }
    ['u32'](a) {
        const hX = a0cE, b = Buffer[hX(0xd4a)](0x4);
        return b[hX(0x2c1)](a >>> 0x0, 0x0), this[hX(0xc12)][hX(0x6b2)](b), this;
    }
    [a0cE(0x90f)](a) {
        const hY = a0cE, b = {
                'DOmZf': function (c, d) {
                    return c(d);
                }
            };
        return this[hY(0xc12)][hY(0x6b2)](b[hY(0x5b9)](a0bF, a)), this;
    }
    [a0cE(0xdf1)]() {
        return Buffer['concat'](this['parts']);
    }
}
class a0bI {
    constructor(a) {
        const hZ = a0cE;
        this[hZ(0x693)] = a, this[hZ(0x569)] = 0x0;
    }
    get [a0cE(0xe5b)]() {
        const i0 = a0cE, a = {
                'keHsb': function (b, c) {
                    return b - c;
                }
            };
        return a['keHsb'](this[i0(0x693)][i0(0x5bd)], this['pos']);
    }
    [a0cE(0xde3)]() {
        const i1 = a0cE, a = this[i1(0x693)][this['pos']];
        return this['pos'] += 0x1, a;
    }
    [a0cE(0x48f)]() {
        const i2 = a0cE, a = this[i2(0x693)][i2(0x903)](this[i2(0x569)]);
        return this[i2(0x569)] += 0x2, a;
    }
    [a0cE(0xc71)]() {
        const i3 = a0cE, a = this['buffer'][i3(0x5e7)](this[i3(0x569)], 0x3);
        return this[i3(0x569)] += 0x3, a;
    }
    [a0cE(0xb21)]() {
        const i4 = a0cE, a = this[i4(0x693)]['readUInt32BE'](this['pos']);
        return this[i4(0x569)] += 0x4, a;
    }
    ['bytes'](a) {
        const i5 = a0cE, b = this[i5(0x693)][i5(0x516)](this[i5(0x569)], this[i5(0x569)] + a);
        return this['pos'] += a, b;
    }
    [a0cE(0x90f)]() {
        const i6 = a0cE, a = {
                'jiPUA': function (c, d, f) {
                    return c(d, f);
                },
                'HCLYu': i6(0x942)
            }, b = a[i6(0x63a)](a0bG, this[i6(0x693)], this['pos']);
        if (b === null)
            throw new Error(a['HCLYu']);
        return this['pos'] += b[0x1], b[0x0];
    }
    [a0cE(0x5e0)]() {
        const i7 = a0cE, a = {
                'VKHeG': function (c, d) {
                    return c > d;
                },
                'objjj': function (c, d) {
                    return c(d);
                }
            }, b = this['varint']();
        if (a[i7(0x8eb)](b, BigInt(Number['MAX_SAFE_INTEGER'])))
            return Number[i7(0x86c)];
        return a['objjj'](Number, b);
    }
}
function a0bJ(a, b, c) {
    const i8 = a0cE;
    return a0k['createHmac'](a, b)[i8(0x370)](c)[i8(0x9ef)]();
}
function a0bK(a, b, c, d) {
    const i9 = a0cE, f = [];
    let g = Buffer[i9(0xd4a)](0x0), h = 0x1;
    while (f[i9(0x8df)]((i, j) => i + j[i9(0x5bd)], 0x0) < d) {
        g = a0k[i9(0x3a4)](a, b)[i9(0x370)](Buffer[i9(0xbbc)]([
            g,
            c,
            Buffer['from']([h])
        ]))[i9(0x9ef)](), f[i9(0x6b2)](g), h++;
    }
    return Buffer[i9(0xbbc)](f)[i9(0x516)](0x0, d);
}
function a0bL(a, b, c, d, f) {
    const ia = a0cE, g = {
            'EUQcC': ia(0x9f5),
            'kbBEz': ia(0xa4b),
            'qFRxj': function (k, l) {
                return k & l;
            },
            'imQUW': function (k, l) {
                return k >> l;
            },
            'GROdP': function (k, l, m, n, o) {
                return k(l, m, n, o);
            }
        }, h = Buffer[ia(0xbbc)]([
            Buffer[ia(0x5a6)](g[ia(0xac7)], g[ia(0x941)]),
            Buffer[ia(0x5a6)](c, g['kbBEz'])
        ]), i = d || Buffer['alloc'](0x0), j = Buffer['concat']([
            Buffer['from']([
                g[ia(0xb5a)](g[ia(0x5cb)](f, 0x8), 0xff),
                f & 0xff
            ]),
            Buffer['from']([h[ia(0x5bd)]]),
            h,
            Buffer[ia(0x5a6)]([i[ia(0x5bd)]]),
            i
        ]);
    return g[ia(0xc50)](a0bK, a, b, j, f);
}
class a0bM {
    constructor(a, b, c) {
        const ib = a0cE, d = {
                'oSGIS': ib(0x1e7),
                'TVhrB': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'DQalr': ib(0xa93),
                'vxcNX': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'BdGgt': ib(0xd79),
                'QHhKE': 'quic\x20hp',
                'PwMBQ': ib(0x42f)
            };
        this[ib(0x59f)] = a, this[ib(0x742)] = b, this['secret'] = c;
        const f = b === d[ib(0x487)] ? 0x20 : 0x10;
        this[ib(0x16f)] = d[ib(0x867)](a0bL, a, c, d[ib(0x5e2)], Buffer[ib(0xd4a)](0x0), f), this['iv'] = d[ib(0x2dc)](a0bL, a, c, d['BdGgt'], Buffer[ib(0xd4a)](0x0), 0xc), this['hpKey'] = a0bL(a, c, d['QHhKE'], Buffer[ib(0xd4a)](0x0), f), this[ib(0xe9f)] = f === 0x20 ? d['PwMBQ'] : ib(0x462), this[ib(0xb16)] = 0x10;
    }
    [a0cE(0xe2b)](a) {
        const ic = a0cE, b = {
                'jbmOQ': function (f, g) {
                    return f(g);
                },
                'CojiV': function (f, g) {
                    return f - g;
                },
                'TuHQM': function (f, g) {
                    return f & g;
                }
            }, c = Buffer[ic(0x5a6)](this['iv']);
        let d = b[ic(0xbf5)](BigInt, a);
        for (let f = 0x0; f < 0x8; f++) {
            c[b['CojiV'](0xb, f)] ^= Number(b[ic(0x68f)](d, 0xffn)), d >>= 0x8n;
        }
        return c;
    }
    ['mask'](a) {
        const id = a0cE, b = a0k['createCipheriv'](this[id(0xe9f)], this['hpKey'], null);
        return b[id(0x94a)](![]), Buffer['concat']([
            b['update'](a),
            b[id(0xd99)]()
        ])['subarray'](0x0, 0x5);
    }
    [a0cE(0x9d9)](a, b, c) {
        const ie = a0cE, d = a0k[ie(0x28c)](this[ie(0x742)], this[ie(0x16f)], this[ie(0xe2b)](a));
        d[ie(0xb18)](b);
        const f = Buffer[ie(0xbbc)]([
                d[ie(0x370)](c),
                d['final']()
            ]), g = d[ie(0x95d)]();
        return Buffer[ie(0xbbc)]([
            f,
            g
        ]);
    }
    ['open'](a, b, c) {
        const ig = a0cE, d = {
                'hARlc': function (g, h) {
                    return g - h;
                },
                'ypDNG': function (g, h) {
                    return g - h;
                }
            }, f = a0k[ig(0x773)](this[ig(0x742)], this['key'], this[ig(0xe2b)](a));
        return f[ig(0xb18)](b), f[ig(0xe45)](c[ig(0x516)](d[ig(0xcb4)](c[ig(0x5bd)], this[ig(0xb16)]))), Buffer[ig(0xbbc)]([
            f[ig(0x370)](c['subarray'](0x0, d['ypDNG'](c[ig(0x5bd)], this[ig(0xb16)]))),
            f['final']()
        ]);
    }
}
function a0bN(a, b) {
    const ih = a0cE, c = {
            'XsJLp': function (f, g, h, i, j, k) {
                return f(g, h, i, j, k);
            },
            'ymhgX': ih(0x740)
        }, d = new a0bM(a['hash'], a[ih(0x742)], c['XsJLp'](a0bL, a[ih(0x59f)], a[ih(0xc20)], c[ih(0xd1c)], Buffer[ih(0xd4a)](0x0), a[ih(0xc20)][ih(0x5bd)]));
    return b && (d[ih(0xe3c)] = a[ih(0xe3c)]), d;
}
function a0bO(a, b) {
    const ii = a0cE, c = {
            'buLMp': ii(0xe5f),
            'gCdTb': function (i, j, k, l) {
                return i(j, k, l);
            },
            'LvpIH': ii(0x976),
            'LSMTo': ii(0x96d),
            'cCFIm': ii(0x586),
            'fmoPr': function (i, j, k, l, m, n) {
                return i(j, k, l, m, n);
            }
        }, d = c[ii(0x8e4)], f = c[ii(0xcc0)](a0bJ, d, a0bs, a), g = b ? c[ii(0xcb0)] : c[ii(0xbfd)], h = b ? c['LSMTo'] : ii(0x976);
    return {
        'send': new a0bM(d, c[ii(0xc51)], c[ii(0x760)](a0bL, d, f, g, Buffer[ii(0xd4a)](0x0), 0x20)),
        'recv': new a0bM(d, c['cCFIm'], a0bL(d, f, h, Buffer['alloc'](0x0), 0x20))
    };
}
function a0bP(a, b, c) {
    const ij = a0cE, d = {
            'ctVKi': function (g, h) {
                return g + h;
            },
            'OgawC': function (g, h) {
                return g <= h;
            },
            'miuDf': function (g, h) {
                return g < h;
            },
            'FzwdT': function (g, h) {
                return g - h;
            },
            'HUMQS': function (g, h) {
                return g > h;
            },
            'NjKMs': function (g, h) {
                return g - h;
            }
        }, f = [];
    for (const g of a) {
        const h = g[ij(0xc25)], i = d['ctVKi'](g[ij(0xc25)], g[ij(0x5bd)]);
        if (d[ij(0x1d8)](i, b) || h >= c) {
            f['push'](g);
            continue;
        }
        d['miuDf'](h, b) && f[ij(0x6b2)]({
            'start': h,
            'length': d[ij(0xb9e)](b, h)
        }), d[ij(0xdf8)](i, c) && f['push']({
            'start': c,
            'length': d[ij(0xd97)](i, c)
        });
    }
    return f;
}
function a0bQ(c, d) {
    const ik = a0cE, f = {
            'Cgwda': function (i, j) {
                return i - j;
            },
            'ZPQyg': function (i, j) {
                return i + j;
            }
        }, g = c[ik(0xbbc)](d)[ik(0xa87)]((i, j) => i[ik(0xc25)] - j[ik(0xc25)]), h = [];
    for (const i of g) {
        const j = h['length'] ? h[f[ik(0x8f8)](h[ik(0x5bd)], 0x1)] : null, k = f[ik(0x307)](i[ik(0xc25)], i['length']);
        j && i['start'] <= j['start'] + j[ik(0x5bd)] ? j['length'] = Math['max'](j[ik(0x5bd)], f[ik(0x8f8)](k, j[ik(0xc25)])) : h[ik(0x6b2)]({
            'start': i['start'],
            'length': i[ik(0x5bd)]
        });
    }
    return h;
}
class a0bR {
    constructor(a) {
        const il = a0cE, b = { 'HcjUv': '6|1|2|4|0|5|3' }, c = b['HcjUv'][il(0xa24)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[il(0x1b9)] = 0x0;
                continue;
            case '1':
                this[il(0xa96)] = Buffer[il(0xd4a)](0x0);
                continue;
            case '2':
                this[il(0xe8b)] = [];
                continue;
            case '3':
                this[il(0x8ad)] = ![];
                continue;
            case '4':
                this[il(0x5ed)] = [];
                continue;
            case '5':
                this['fin'] = ![];
                continue;
            case '6':
                this[il(0xdf2)] = a;
                continue;
            }
            break;
        }
    }
    get ['sentEnd']() {
        return this['data']['length'];
    }
    [a0cE(0x52b)](a, b) {
        const im = a0cE, c = {
                'iaJhM': function (d, f) {
                    return d - f;
                }
            };
        a[im(0x5bd)] && (this[im(0xa96)] = Buffer['concat']([
            this[im(0xa96)],
            a
        ]), this[im(0xe8b)][im(0x6b2)]({
            'start': c['iaJhM'](this[im(0xa96)][im(0x5bd)], a[im(0x5bd)]),
            'length': a[im(0x5bd)]
        })), b && (this[im(0x7f3)] = !![], this[im(0x8ad)] = !![]);
    }
    [a0cE(0x4ed)](a) {
        const io = a0cE, b = {
                'repaP': function (g, h) {
                    return g < h;
                },
                'WpCAm': function (g, h) {
                    return g + h;
                },
                'eTXzB': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (!this[io(0xe8b)][io(0x5bd)] || a <= 0x0)
            return null;
        const c = this['pending'][0x0], d = Math[io(0x2d2)](c['length'], a), f = {
                'start': c[io(0xc25)],
                'length': d
            };
        return c[io(0xc25)] += d, c[io(0x5bd)] -= d, !c[io(0x5bd)] && this['pending'][io(0xc78)](), f[io(0x359)] = this[io(0xa96)][io(0x516)](f[io(0xc25)], f[io(0xc25)] + d), f['retransmitted'] = b['repaP'](f[io(0xc25)], this[io(0x1b9)]), this[io(0x1b9)] = Math[io(0x357)](this[io(0x1b9)], b[io(0xdf4)](f[io(0xc25)], d)), this[io(0x5ed)] = b['eTXzB'](a0bQ, this['unacked'], [{
                'start': f['start'],
                'length': d
            }]), f;
    }
    [a0cE(0x2c5)]() {
        const ip = a0cE;
        if (!this[ip(0x7f3)] || !this[ip(0x8ad)] || this['pending']['length'] || this[ip(0x5ed)][ip(0x5bd)])
            return ![];
        return this['finUnacked'] = ![], !![];
    }
    [a0cE(0xcbc)](a, b, c) {
        const iq = a0cE, d = {
                'PdSOY': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'QsudP': function (f, g) {
                    return f + g;
                },
                'FnTTQ': function (f, g) {
                    return f + g;
                }
            };
        this['unacked'] = d[iq(0xcad)](a0bP, this[iq(0x5ed)], a, d[iq(0xc5a)](a, b)), c && this[iq(0x7f3)] && d['FnTTQ'](a, b) >= this['data'][iq(0x5bd)] && (this[iq(0x8ad)] = ![]), this['connection'][iq(0xd1e)]();
    }
    [a0cE(0x6f4)]() {
        const ir = a0cE, a = {
                'LyVOJ': function (b, c, d) {
                    return b(c, d);
                }
            };
        this[ir(0x5ed)][ir(0x5bd)] && (this['frontier'] = this[ir(0x5ed)][0x0][ir(0xc25)], this[ir(0xe8b)] = a[ir(0x309)](a0bQ, this[ir(0xe8b)], this[ir(0x5ed)])[ir(0xa87)]((c, d) => c[ir(0xc25)] - d[ir(0xc25)]), this['unacked'] = []), this['fin'] && (this[ir(0x8ad)] = !![]);
    }
    [a0cE(0xb66)](a) {
        const is = a0cE, b = {
                'ATQKc': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'aiPeg': function (c, d, f) {
                    return c(d, f);
                }
            };
        for (const c of a) {
            if (!c[is(0x5bd)]) {
                c['fin'] && this[is(0x7f3)] && (this[is(0x8ad)] = !![]);
                continue;
            }
            this[is(0x5ed)] = b[is(0x8aa)](a0bP, this[is(0x5ed)], c[is(0xc25)], c['start'] + c[is(0x5bd)]), this[is(0xe8b)] = b[is(0x489)](a0bQ, this[is(0xe8b)], [{
                    'start': c[is(0xc25)],
                    'length': c['length']
                }])[is(0xa87)]((d, f) => d[is(0xc25)] - f[is(0xc25)]);
        }
    }
    [a0cE(0x2e5)]() {
        const it = a0cE;
        return !this['pending'][it(0x5bd)] && !this[it(0x5ed)]['length'] && !this['finUnacked'];
    }
}
class a0bS {
    constructor() {
        const iu = a0cE;
        this[iu(0xa4d)] = 0x0, this[iu(0xe8b)] = [];
    }
    [a0cE(0x3ae)](a, b) {
        const iv = a0cE, c = {
                'QxEaF': function (f, g) {
                    return f > g;
                },
                'qmAnH': function (f, g) {
                    return f + g;
                },
                'jIUSi': function (f, g) {
                    return f < g;
                },
                'Yalox': function (f, g) {
                    return f - g;
                },
                'bvUBZ': function (f, g) {
                    return f >= g;
                },
                'eZRPd': function (f, g) {
                    return f !== g;
                }
            };
        if (c[iv(0x237)](a, c[iv(0x7cc)](this[iv(0xa4d)], 0x100000)))
            return Buffer[iv(0xd4a)](0x0);
        if (c[iv(0x424)](a, this['contiguous'])) {
            const f = c[iv(0x4de)](this[iv(0xa4d)], a);
            if (c[iv(0x231)](f, b['length']))
                return Buffer['alloc'](0x0);
            b = b[iv(0x516)](f), a = this['contiguous'];
        }
        if (!b[iv(0x5bd)])
            return Buffer[iv(0xd4a)](0x0);
        if (c[iv(0xe23)](a, this[iv(0xa4d)]))
            return this[iv(0xe8b)][iv(0x6b2)]({
                'start': a,
                'bytes': Buffer[iv(0x5a6)](b)
            }), Buffer[iv(0xd4a)](0x0);
        const d = [b];
        this[iv(0xa4d)] += b[iv(0x5bd)];
        for (let g = !![]; g;) {
            g = ![];
            for (let h = 0x0; h < this[iv(0xe8b)]['length']; h++) {
                if (this['pending'][h][iv(0xc25)] === this[iv(0xa4d)]) {
                    d['push'](this[iv(0xe8b)][h][iv(0x359)]), this[iv(0xa4d)] += this[iv(0xe8b)][h][iv(0x359)][iv(0x5bd)], this[iv(0xe8b)][iv(0xead)](h, 0x1), g = !![];
                    break;
                }
            }
        }
        return Buffer[iv(0xbbc)](d);
    }
}
function a0bT(a, b, c, d) {
    const iw = a0cE, f = {
            'CVcMs': function (j, k) {
                return j < k;
            },
            'jXawx': function (j, k) {
                return j + k;
            },
            'dCvrp': function (j, k) {
                return j + k;
            },
            'SbTmv': function (j, k) {
                return j + k;
            },
            'CCFit': function (j, k) {
                return j & k;
            },
            'kTMGy': function (j, k) {
                return j < k;
            },
            'ybPOj': function (j, k) {
                return j + k;
            }
        };
    if (f[iw(0x373)](b['length'], f['jXawx'](f[iw(0xc2f)](c, 0x4), a0bu)))
        return null;
    const g = a[iw(0xabf)](b[iw(0x516)](c + 0x4, f['SbTmv'](f[iw(0x9bc)](c, 0x4), a0bu))), h = Buffer[iw(0x5a6)](b);
    h[0x0] ^= f[iw(0x931)](g[0x0], d ? 0xf : 0x1f);
    for (let j = 0x0; f['kTMGy'](j, a0bv); j++) {
        h[f['SbTmv'](c, j)] ^= g[f[iw(0xdfc)](0x1, j)];
    }
    return h;
}
function a0bU(a, b, c, d) {
    const ix = a0cE, f = {
            'vEbJQ': function (l, m) {
                return l + m;
            },
            'tQHAK': function (l, m) {
                return l + m;
            },
            'cytbC': function (l, m) {
                return l & m;
            },
            'TdHRv': function (l, m) {
                return l + m;
            },
            'SdXcx': function (l, m) {
                return l < m;
            },
            'xAmCO': function (l, m) {
                return l * m;
            },
            'NszLE': function (l, m) {
                return l + m;
            }
        };
    if (b[ix(0x5bd)] < c + 0x4 + a0bu)
        return null;
    const g = a[ix(0xabf)](b['subarray'](f[ix(0x492)](c, 0x4), f[ix(0x295)](f[ix(0x492)](c, 0x4), a0bu))), h = Buffer[ix(0x5a6)](b);
    h[0x0] ^= f[ix(0xe65)](g[0x0], d ? 0xf : 0x1f);
    const j = f[ix(0xaa5)](h[0x0] & 0x3, 0x1);
    for (let l = 0x0; f[ix(0x9cc)](l, j); l++) {
        h[f[ix(0x295)](c, l)] ^= g[0x1 + l];
    }
    let k = 0x0;
    for (let m = 0x0; m < j; m++) {
        k = f[ix(0x295)](f[ix(0xaf1)](k, 0x100), h[f[ix(0xebe)](c, m)]);
    }
    return [
        h[ix(0x516)](0x0, c + j),
        k
    ];
}
function a0bV(a, b, c) {
    const iy = a0cE, d = {
            'SmPlP': function (j, k) {
                return j(k);
            },
            'QtynJ': function (j, k) {
                return j - k;
            },
            'rpIWx': function (j, k) {
                return j | k;
            },
            'kbObl': function (j, k) {
                return j & k;
            },
            'aBgsv': function (j, k) {
                return j << k;
            },
            'wLQbF': function (j, k) {
                return j(k);
            },
            'FnFLS': function (j, k) {
                return j <= k;
            },
            'DrMVj': function (j, k) {
                return j + k;
            },
            'iLoCd': function (j, k) {
                return j(k);
            },
            'YBbvq': function (j, k) {
                return j >= k;
            },
            'gjWAw': function (j, k) {
                return j << k;
            },
            'NSSOf': function (j, k) {
                return j(k);
            }
        }, f = d['SmPlP'](BigInt, a) + 0x1n, g = d[iy(0x5bc)](0x1n << d[iy(0x183)](BigInt, b), 0x1n);
    let h = d[iy(0x674)](d[iy(0x744)](f, ~g), BigInt(c));
    const i = d[iy(0x4bc)](0x1n, d[iy(0xc81)](BigInt, d[iy(0x5bc)](b, 0x1)));
    if (d[iy(0x664)](d[iy(0xcb5)](h, i), f))
        h += 0x1n << d[iy(0x5da)](BigInt, b);
    else
        h > f + i && d[iy(0x2aa)](h, d[iy(0x94c)](0x1n, d[iy(0xc82)](BigInt, b))) && (h -= d[iy(0x4bc)](0x1n, BigInt(b)));
    return d[iy(0x183)](Number, h);
}
function a0bW(a) {
    const iz = a0cE, b = {
            'LDZlx': function (j, k) {
                return j - k;
            },
            'hpoKV': function (j, k) {
                return j - k;
            },
            'vSZWw': function (j, k) {
                return j + k;
            },
            'iBDho': function (j, k) {
                return j - k;
            },
            'swaoj': function (j, k) {
                return j - k;
            }
        }, c = new a0bH();
    c[iz(0xde3)](a0bC['ack']);
    const d = a[iz(0x523)]()[iz(0xa87)]((j, k) => j[iz(0xc25)] - k['start']), f = d[b[iz(0x2d8)](d[iz(0x5bd)], 0x1)], g = b[iz(0xebb)](b[iz(0xc1e)](f[iz(0xc25)], f[iz(0x5bd)]), 0x1);
    c[iz(0x90f)](g), c[iz(0x90f)](0x0), c['varint'](b[iz(0x2d8)](d[iz(0x5bd)], 0x1)), c[iz(0x90f)](b[iz(0xb02)](g, f[iz(0xc25)]));
    let h = f[iz(0xc25)];
    for (let j = b[iz(0x207)](d[iz(0x5bd)], 0x2); j >= 0x0; j--) {
        const k = d[j], l = b[iz(0xc1e)](k[iz(0xc25)], k[iz(0x5bd)]) - 0x1;
        c[iz(0x90f)](h - l - 0x2), c[iz(0x90f)](l - k[iz(0xc25)]), h = k[iz(0xc25)];
    }
    return c[iz(0xdf1)]();
}
function a0bX(a) {
    const iA = a0cE, b = {
            'iXKBr': function (k, l) {
                return k - l;
            },
            'BXvfY': function (k, l) {
                return k + l;
            },
            'SjuhQ': function (k, l) {
                return k - l;
            },
            'RImHM': function (k, l) {
                return k < l;
            },
            'dBfNU': function (k, l) {
                return k - l;
            },
            'pQUOP': function (k, l) {
                return k + l;
            },
            'lsGnh': function (k, l) {
                return k / l;
            }
        }, c = a[iA(0x5e0)](), d = a[iA(0x5e0)](), f = a[iA(0x5e0)](), g = a['number'](), h = [{
                'start': b[iA(0x9d5)](c, g),
                'length': b[iA(0x1ab)](g, 0x1)
            }];
    let j = b['SjuhQ'](c, g);
    for (let k = 0x0; b[iA(0x23d)](k, f); k++) {
        const l = a['number'](), m = a[iA(0x5e0)](), n = b['dBfNU'](j - l, 0x2);
        h['push']({
            'start': b[iA(0x9d5)](n, m),
            'length': b[iA(0x820)](m, 0x1)
        }), j = b['dBfNU'](n, m);
    }
    return h['ackDelay'] = b[iA(0x5cc)](d, 0x3e8), h;
}
function a0bY(a) {
    const iB = a0cE, b = {
            'XVXER': function (f, g) {
                return f > g;
            },
            'pVvra': function (f, g) {
                return f(g);
            },
            'RiaWM': function (f, g) {
                return f < g;
            },
            'FyECX': function (f, g) {
                return f === g;
            },
            'wvQbl': function (f, g) {
                return f === g;
            },
            'bXbsY': function (f, g) {
                return f + g;
            },
            'mRFgp': function (f, g) {
                return f * g;
            }
        }, c = {}, d = new a0bI(a);
    while (b[iB(0x7b9)](d[iB(0xe5b)], 0x0)) {
        const f = b['pVvra'](Number, d[iB(0x90f)]()), g = d[iB(0x5e0)]();
        if (b[iB(0xe61)](d[iB(0xe5b)], g))
            break;
        const h = d[iB(0x359)](g);
        if (b[iB(0xd72)](h[iB(0x5bd)], 0x1) || h[iB(0x5bd)] === 0x2 || b['wvQbl'](h['length'], 0x4) || b[iB(0x7e1)](h[iB(0x5bd)], 0x8)) {
            let i = 0x0;
            for (const j of h) {
                i = b[iB(0xda8)](b[iB(0xd7f)](i, 0x100), j);
            }
            c[f] = i;
        } else
            c[f] = Buffer['from'](h);
    }
    return c;
}
function a0bZ(a) {
    const iC = a0cE, b = new a0bH();
    for (const [c, d] of a) {
        let f;
        if (Buffer[iC(0x3b0)](d))
            f = d;
        else
            d === !![] ? f = Buffer[iC(0xd4a)](0x0) : f = a0bF(d);
        b['varint'](c), b[iC(0x90f)](f[iC(0x5bd)]), b['bytes'](f);
    }
    return b[iC(0xdf1)]();
}
function a0c0(a, b) {
    const iD = a0cE, c = Buffer[iD(0xd4a)](0x4);
    return c[0x0] = a, c[iD(0x775)](b[iD(0x5bd)], 0x1, 0x3), Buffer[iD(0xbbc)]([
        c,
        b
    ]);
}
function a0c1(a, b) {
    const iE = a0cE, c = Buffer[iE(0xd4a)](0x4);
    return c[iE(0x2b6)](a, 0x0), c[iE(0x2b6)](b[iE(0x5bd)], 0x2), Buffer[iE(0xbbc)]([
        c,
        b
    ]);
}
class a0c2 {
    constructor(a, b, c) {
        const iF = a0cE, d = {
                'CNRFe': iF(0x847),
                'TdTxb': iF(0xb3f),
                'trZNM': iF(0xe5f),
                'flGvg': iF(0x586)
            };
        this[iF(0xde6)] = a, this['alpn'] = b, this[iF(0x9b4)] = c, this[iF(0x956)] = a0k['generateKeyPairSync'](d[iF(0xb20)]), this[iF(0x430)] = this[iF(0x956)][iF(0x430)]['export']({
            'type': d[iF(0x4cb)],
            'format': iF(0x3d9)
        })['subarray'](-0x20), this[iF(0x59f)] = d[iF(0xafa)], this[iF(0xede)] = 0x20, this[iF(0x742)] = d[iF(0x205)], this[iF(0xa02)] = [], this['state'] = 'start', this[iF(0x53d)] = null, this[iF(0x501)] = null, this[iF(0x3d3)] = null;
    }
    ['transcript'](a) {
        const iG = a0cE, b = {
                'FCkEO': function (f, g) {
                    return f === g;
                }
            }, c = a0k['createHash'](this[iG(0x59f)]), d = b[iG(0x536)](a, undefined) ? this[iG(0xa02)] : this[iG(0xa02)][iG(0x523)](0x0, a);
        for (const f of d) {
            c[iG(0x370)](f);
        }
        return c[iG(0x9ef)]();
    }
    [a0cE(0xa2d)]() {
        const iH = a0cE, a = {
                'qHsnE': function (p, q) {
                    return p + q;
                },
                'rCXRT': iH(0xa4b),
                'FcGFR': function (p, q, r) {
                    return p(q, r);
                },
                'ltGwj': function (p, q, r) {
                    return p(q, r);
                },
                'JRDHB': function (p, q, r) {
                    return p(q, r);
                },
                'VGknk': function (p, q, r) {
                    return p(q, r);
                },
                'xmsMR': function (p, q, r) {
                    return p(q, r);
                },
                'AECHr': function (p, q) {
                    return p & q;
                },
                'JKLCY': function (p, q) {
                    return p >> q;
                },
                'PAPSH': function (p, q) {
                    return p & q;
                },
                'PtJqL': iH(0xc0c)
            }, b = Buffer['from'](this[iH(0xde6)], iH(0xa4b)), c = new a0bH()[iH(0x48f)](a[iH(0xc38)](b[iH(0x5bd)], 0x3))[iH(0xde3)](0x0)[iH(0x48f)](b[iH(0x5bd)])['bytes'](b)['build'](), d = new a0bH()[iH(0x48f)](0x4)['u16'](0x1d)[iH(0x48f)](0x17)['build'](), f = new a0bH()[iH(0x48f)](0x8)['u16'](0x403)['u16'](0x804)[iH(0x48f)](0x401)['u16'](0x807)[iH(0xdf1)](), g = new a0bH()['byte'](0x2)[iH(0x48f)](0x304)[iH(0xdf1)](), h = new a0bH()['u16'](0x4 + this[iH(0x430)][iH(0x5bd)])[iH(0x48f)](0x1d)[iH(0x48f)](this[iH(0x430)][iH(0x5bd)])['bytes'](this[iH(0x430)])[iH(0xdf1)](), i = Buffer[iH(0xbbc)]([
                Buffer[iH(0x5a6)]([this[iH(0x58a)]['length']]),
                Buffer[iH(0x5a6)](this[iH(0x58a)], a[iH(0x845)])
            ]), j = new a0bH()[iH(0x48f)](i['length'])[iH(0x359)](i)['build'](), k = new a0bH()[iH(0xde3)](0x1)[iH(0xde3)](0x1)['build'](), l = Buffer[iH(0xbbc)]([
                a[iH(0xa51)](a0c1, 0x0, c),
                a0c1(0xa, d),
                a['ltGwj'](a0c1, 0xd, f),
                a[iH(0x6e3)](a0c1, 0x2b, g),
                a['JRDHB'](a0c1, 0x33, h),
                a[iH(0xaa2)](a0c1, 0x10, j),
                a[iH(0x2d1)](a0c1, 0x2d, k),
                a0c1(0xff01, Buffer['from']([0x0])),
                a['FcGFR'](a0c1, 0x39, this[iH(0x9b4)])
            ]), m = Buffer['from']([
                0x0,
                0x4,
                0x13,
                0x1,
                0x13,
                0x2
            ]), n = Buffer[iH(0xbbc)]([
                Buffer['from']([
                    0x3,
                    0x3
                ]),
                a0k[iH(0x4ea)](0x20),
                Buffer[iH(0x5a6)]([0x0]),
                m,
                Buffer[iH(0x5a6)]([
                    0x1,
                    0x0
                ]),
                Buffer[iH(0x5a6)]([
                    a[iH(0xd8b)](a['JKLCY'](l[iH(0x5bd)], 0x8), 0xff),
                    a['PAPSH'](l[iH(0x5bd)], 0xff)
                ]),
                l
            ]), o = a[iH(0x26b)](a0c0, 0x1, n);
        return this[iH(0xa02)][iH(0x6b2)](o), this['state'] = a[iH(0x2b7)], o;
    }
    [a0cE(0x668)](a) {
        const iI = a0cE, b = {
                'KBRaa': function (d, f) {
                    return d < f;
                },
                'jezCb': function (d, f) {
                    return d !== f;
                },
                'eTlCX': iI(0x48a),
                'rOCPP': function (d, f) {
                    return d + f;
                }
            };
        if (b[iI(0x505)](a[iI(0x5bd)], 0x4))
            return null;
        if (b['jezCb'](a[0x0], 0x2))
            throw new Error(b[iI(0x32d)]);
        const c = a[iI(0x5e7)](0x1, 0x3);
        if (b[iI(0x505)](a[iI(0x5bd)], b[iI(0xd2a)](0x4, c)))
            return null;
        return a[iI(0x516)](0x0, 0x4 + c);
    }
    [a0cE(0x277)](a) {
        const iJ = a0cE, b = {
                'dZvWr': iJ(0x876),
                'ZsiFo': function (q, r) {
                    return q < r;
                },
                'gjAFz': function (q, r) {
                    return q >= r;
                },
                'yIsyQ': function (q, r) {
                    return q === r;
                },
                'uozsM': function (q, r) {
                    return q === r;
                },
                'LUTZS': function (q, r) {
                    return q >= r;
                },
                'YksUQ': iJ(0x563),
                'eFoMg': 'ServerHello\x20has\x20no\x20key_share',
                'JTyPD': function (q, r) {
                    return q !== r;
                },
                'MoKWw': iJ(0x279),
                'cPBVW': function (q, r) {
                    return q === r;
                },
                'HhJCf': iJ(0xe5f),
                'eGXKh': 'aes-128-gcm',
                'yLzOq': iJ(0xb5d),
                'ajSPH': iJ(0x1e7),
                'hmQWs': function (q, r) {
                    return q + r;
                },
                'TUReK': iJ(0x25a),
                'xIZdc': iJ(0xda5),
                'xJqIi': 'hex',
                'UDlnP': iJ(0x3d9),
                'fRvlm': iJ(0xb3f),
                'VuapL': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'dRNVD': iJ(0x915),
                'feAhn': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'vJSVw': iJ(0x390),
                'fpNbC': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'tmVhI': 's\x20hs\x20traffic',
                'SbaXd': iJ(0xd6f)
            }, c = new a0bI(a[iJ(0x516)](0x4));
        c['u16']();
        const d = c[iJ(0x359)](0x20);
        if (d[iJ(0x508)](a0bt))
            throw new Error(b['dZvWr']);
        const f = c[iJ(0x359)](c[iJ(0xde3)]()), g = c[iJ(0x48f)]();
        c[iJ(0xde3)]();
        let h = null;
        const i = c['u16']();
        let j = 0x0;
        while (b[iJ(0x17b)](j, i) && b[iJ(0x643)](c['remaining'], 0x4)) {
            const q = c[iJ(0x48f)](), r = c['u16'](), s = c['bytes'](r);
            j += 0x1;
            if (b[iJ(0x730)](q, 0x33) && s['length'] >= 0x4) {
                const t = new a0bI(s), u = t['u16'](), v = t['u16']();
                h = {
                    'group': u,
                    'key': t[iJ(0x359)](v)
                };
            } else {
                if (b[iJ(0xbc2)](q, 0x2b) && b['LUTZS'](s[iJ(0x5bd)], 0x2)) {
                    if (s[iJ(0x903)](0x0) !== 0x304)
                        throw new Error(b[iJ(0xd2e)]);
                }
            }
        }
        if (b['yIsyQ'](h, null))
            throw new Error(b['eFoMg']);
        if (b['JTyPD'](h['group'], 0x1d))
            throw new Error(b[iJ(0x999)] + h[iJ(0x656)]);
        if (b['cPBVW'](g, 0x1301))
            this['hash'] = b[iJ(0x6e1)], this['hashLength'] = 0x20, this[iJ(0x742)] = b[iJ(0x784)];
        else {
            if (g === 0x1302)
                this[iJ(0x59f)] = b[iJ(0xc4a)], this['hashLength'] = 0x30, this[iJ(0x742)] = b['ajSPH'];
            else
                throw new Error(b[iJ(0xec6)](b[iJ(0x4c3)], g[iJ(0x7d1)](0x10)));
        }
        this[iJ(0xa02)][iJ(0x6b2)](a);
        const k = a0k[iJ(0x406)]({
                'key': Buffer[iJ(0xbbc)]([
                    Buffer['from'](b[iJ(0x34f)], b[iJ(0xc24)]),
                    h[iJ(0x16f)]
                ]),
                'format': b[iJ(0xd73)],
                'type': b['fRvlm']
            }), l = a0k[iJ(0x2df)]({
                'privateKey': this[iJ(0x956)][iJ(0xaab)],
                'publicKey': k
            }), m = Buffer['alloc'](this[iJ(0xede)]), n = b['VuapL'](a0bJ, this['hash'], m, m), o = a0bL(this[iJ(0x59f)], n, b[iJ(0x1f6)], a0k[iJ(0x5fd)](this[iJ(0x59f)])[iJ(0x9ef)](), this[iJ(0xede)]);
        this[iJ(0x15c)] = b[iJ(0x6a4)](a0bJ, this['hash'], o, l);
        const p = this['transcript']();
        return this[iJ(0x5b3)] = b['feAhn'](a0bL, this[iJ(0x59f)], this[iJ(0x15c)], b['vJSVw'], p, this[iJ(0xede)]), this[iJ(0xa32)] = b['fpNbC'](a0bL, this[iJ(0x59f)], this['handshakeSecret'], b[iJ(0x474)], p, this['hashLength']), this[iJ(0x916)] = b[iJ(0x21d)], {
            'send': new a0bM(this[iJ(0x59f)], this['cipher'], this[iJ(0x5b3)]),
            'recv': new a0bM(this[iJ(0x59f)], this[iJ(0x742)], this[iJ(0xa32)])
        };
    }
    [a0cE(0xad9)](a) {
        const iK = a0cE, b = {
                'bUgsQ': function (u, v) {
                    return u === v;
                },
                'rfwJX': function (u, v) {
                    return u < v;
                },
                'UwPiw': function (u, v) {
                    return u >= v;
                },
                'mNadi': function (u, v) {
                    return u === v;
                },
                'aLTaI': function (u, v) {
                    return u(v);
                },
                'hefwG': function (u, v) {
                    return u >= v;
                },
                'vqMiT': iK(0xa4b),
                'KBGYv': function (u, v) {
                    return u <= v;
                },
                'YuMNv': function (u, v) {
                    return u + v;
                },
                'ysHkk': function (u, v) {
                    return u + v;
                },
                'AgWWw': function (u, v) {
                    return u >= v;
                },
                'TFltV': function (u, v) {
                    return u > v;
                },
                'zShbA': function (u, v) {
                    return u + v;
                },
                'MrVRU': function (u, v) {
                    return u - v;
                },
                'WSgEH': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'lGhcA': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'uqnio': function (u, v, w) {
                    return u(v, w);
                },
                'pHMgu': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'fYlQf': 'derived',
                'OcBWe': function (u, v, w, x) {
                    return u(v, w, x);
                },
                'fvTbW': iK(0x51b)
            };
        this['messages'][iK(0x6b2)](a);
        const c = a[0x0];
        if (b[iK(0xb13)](c, 0x8)) {
            const u = new a0bI(a[iK(0x516)](0x4)), v = u[iK(0x48f)]();
            let w = 0x0;
            while (b[iK(0x824)](w, v) && b[iK(0x929)](u[iK(0xe5b)], 0x4)) {
                const x = u['u16'](), y = u[iK(0x48f)](), z = u[iK(0x359)](y);
                w += 0x1;
                if (b[iK(0xedb)](x, 0x39))
                    this[iK(0x53d)] = b['aLTaI'](a0bY, Buffer[iK(0x5a6)](z));
                else
                    b[iK(0xb13)](x, 0x10) && b[iK(0x6b6)](z[iK(0x5bd)], 0x3) && (this[iK(0x501)] = z[iK(0x516)](0x3)[iK(0x7d1)](b[iK(0x16b)]));
            }
            return null;
        }
        if (b[iK(0xedb)](c, 0xb)) {
            const A = a[iK(0x516)](0x4);
            if (b['hefwG'](A[iK(0x5bd)], 0x4)) {
                const B = 0x1 + A[0x0];
                if (b[iK(0x917)](b[iK(0x764)](B, 0x3), A[iK(0x5bd)])) {
                    const C = A[iK(0x5e7)](B, 0x3);
                    if (b[iK(0x917)](b[iK(0xd83)](B + 0x3, C), A[iK(0x5bd)]) && b[iK(0x3e9)](C, 0x3)) {
                        const D = A[iK(0x5e7)](B + 0x3, 0x3);
                        b['TFltV'](D, 0x0) && b[iK(0xd9c)](b[iK(0xd9c)](B, 0x6), D) <= A[iK(0x5bd)] && (this['leafCert'] = Buffer[iK(0x5a6)](A[iK(0x516)](B + 0x6, b['zShbA'](B + 0x6, D))));
                    }
                }
            }
            return null;
        }
        if (b[iK(0xb13)](c, 0xf) || b[iK(0xb13)](c, 0x4))
            return null;
        if (c !== 0x14)
            return null;
        const d = this[iK(0xa02)][this[iK(0xa02)][iK(0x5bd)] - 0x1], f = d[iK(0x516)](0x4), g = this[iK(0x9b2)](b[iK(0x53e)](this[iK(0xa02)][iK(0x5bd)], 0x1)), h = b[iK(0x95c)](a0bL, this['hash'], this[iK(0xa32)], iK(0x9c6), Buffer[iK(0xd4a)](0x0), this[iK(0xede)]), i = a0k[iK(0x3a4)](this[iK(0x59f)], h)['update'](g)[iK(0x9ef)](), j = i['length'] === f[iK(0x5bd)] && a0k['timingSafeEqual'](i, f), k = b[iK(0x727)](a0bL, this['hash'], this[iK(0x5b3)], 'finished', Buffer[iK(0xd4a)](0x0), this[iK(0xede)]), l = this[iK(0x9b2)](), m = a0k['createHmac'](this[iK(0x59f)], k)['update'](l)[iK(0x9ef)](), n = b[iK(0x4ba)](a0c0, 0x14, m), o = Buffer[iK(0xd4a)](this[iK(0xede)]), p = b[iK(0x708)](a0bL, this[iK(0x59f)], this[iK(0x15c)], b[iK(0x2b8)], a0k[iK(0x5fd)](this[iK(0x59f)])[iK(0x9ef)](), this[iK(0xede)]), q = b['OcBWe'](a0bJ, this[iK(0x59f)], p, o), r = this[iK(0x9b2)]();
        this[iK(0xa02)][iK(0x6b2)](n);
        const s = b['lGhcA'](a0bL, this['hash'], q, iK(0xccf), r, this[iK(0xede)]), t = b['lGhcA'](a0bL, this['hash'], q, iK(0x71a), r, this[iK(0xede)]);
        return this['state'] = b[iK(0x58f)], {
            'verified': j,
            'finished': n,
            'send': new a0bM(this[iK(0x59f)], this['cipher'], s),
            'recv': new a0bM(this[iK(0x59f)], this[iK(0x742)], t)
        };
    }
}
function a0c3(a) {
    const iL = a0cE, b = {
            'TsGtr': function (k, l) {
                return k === l;
            },
            'wBLBu': function (k, l) {
                return k === l;
            },
            'xccuJ': 'cftunnel.com',
            'whxLc': iL(0x7bd),
            'Vtlwk': function (k, l) {
                return k + l;
            },
            'gxJIH': iL(0x1ea),
            'bYyxF': function (k, l) {
                return k(l);
            },
            'aSBSw': iL(0xe84),
            'gacYH': function (k, l) {
                return k + l;
            },
            'NTnfi': 'issuer\x20O\x20mismatch:\x20',
            'ISPCU': iL(0x87d),
            'BYtQE': iL(0x3af),
            'jONcO': function (k, l) {
                return k + l;
            },
            'cnQMq': iL(0x601),
            'SVFZz': 'quic.cftunnel.com',
            'DeUuz': function (k, l) {
                return k + l;
            },
            'vcCcX': 'SAN\x20does\x20not\x20cover\x20quic.cftunnel.com\x20(SAN=',
            'CQOYg': function (k, l) {
                return k(l);
            }
        };
    if (!a || !a['length'])
        return b[iL(0x5e4)];
    let c;
    try {
        c = new a0k[(iL(0x386))](a);
    } catch (k) {
        return b['Vtlwk'](b[iL(0x4f7)], k[iL(0x921)]);
    }
    const d = l => String(l || '')[iL(0xd15)](/\\,/g, ','), f = b[iL(0xb76)](d, c[iL(0x5d4)]), g = b['bYyxF'](d, c[iL(0x85a)]);
    if (!f['includes'](b[iL(0x6b0)]))
        return b[iL(0x486)](b[iL(0xb1d)], f);
    if (!f[iL(0x18c)](iL(0x3f3)))
        return b[iL(0xd8e)] + f;
    if (!g[iL(0x18c)](b[iL(0x208)]))
        return b['jONcO'](b[iL(0xad1)], g);
    const h = String(c['subjectAltName'] || '')[iL(0xa24)](',')['map'](l => l[iL(0x1b7)]()['toLowerCase']()), i = b[iL(0x9bb)], j = h[iL(0x71b)](l => {
            const iM = iL;
            if (!l[iM(0x2da)](iM(0x30e)))
                return ![];
            const m = l[iM(0x523)](0x4);
            return b[iM(0xdf0)](m, i) || b[iM(0x517)](m, b[iM(0x776)]) || m['startsWith']('*.') && i[iM(0x8a2)](m[iM(0x523)](0x1));
        });
    if (!j)
        return b[iL(0xa26)](b[iL(0x486)](b[iL(0x72d)], b[iL(0x5ad)](String, c[iL(0xbe1)] || '')), ')');
    return null;
}
class a0c4 {
    constructor(a, b, c) {
        const iN = a0cE;
        this[iN(0xdf2)] = a, this['id'] = b, this[iN(0x7ad)] = c, this[iN(0x73c)] = new a0bR(a), this[iN(0x2dd)] = 0x0, this[iN(0x908)] = Buffer['alloc'](0x0), this['receiver'] = new a0bS(), this[iN(0x396)] = ![], this[iN(0x8d7)] = ![], this[iN(0xa7b)] = 0x0, this[iN(0xc7e)] = 0x0, this[iN(0x62e)] = a[iN(0x169)], this[iN(0x3b9)] = null;
    }
    ['write'](a, b) {
        const iO = a0cE, c = {
                'JdhOt': function (d, f) {
                    return d(f);
                }
            };
        this[iO(0x73c)][iO(0x52b)](a, c[iO(0x76b)](Boolean, b)), this[iO(0xdf2)][iO(0x80d)](this);
    }
}
class a0c5 {
    constructor(a) {
        const iP = a0cE, b = {
                'orOXV': iP(0xe0e),
                'lICIA': function (f, g) {
                    return f * g;
                },
                'cdmzo': function (f, g) {
                    return f * g;
                },
                'MMxkD': function (f, g) {
                    return f === g;
                },
                'kTlhT': function (f, g) {
                    return f << g;
                },
                'mlrpM': function (f, g) {
                    return f(g);
                },
                'hhkXm': function (f, g) {
                    return f << g;
                }
            }, c = b[iP(0x1c7)][iP(0xa24)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['initialWindow'] = a['initialWindow'] || b['lICIA'](0xa, this[iP(0x621)]);
                continue;
            case '1':
                this[iP(0xb88)] = [];
                continue;
            case '2':
                this[iP(0x417)] = ![];
                continue;
            case '3':
                this[iP(0xb2a)] = 0x0;
                continue;
            case '4':
                this[iP(0xe6a)] = a[iP(0xe6a)] || function () {
                };
                continue;
            case '5':
                this[iP(0xabe)] = a[iP(0x411)];
                continue;
            case '6':
                this[iP(0x1bb)] = a[iP(0x1bb)];
                continue;
            case '7':
                this['pendingOneOff'] = [];
                continue;
            case '8':
                this[iP(0x1b8)] = new Map();
                continue;
            case '9':
                this[iP(0x802)] = a0k[iP(0x4ea)](0x8);
                continue;
            case '10':
                this[iP(0xa1c)] = ![];
                continue;
            case '11':
                this[iP(0x9c0)] = 0x0;
                continue;
            case '12':
                this[iP(0x3cf)] = null;
                continue;
            case '13':
                this['serverHello'] = Buffer[iP(0xd4a)](0x0);
                continue;
            case '14':
                this['pto'] = 0xfa;
                continue;
            case '15':
                this[iP(0xcbd)] = 0x0;
                continue;
            case '16':
                this[iP(0xa5d)] = 0x0;
                continue;
            case '17':
                this[iP(0x885)] = ![];
                continue;
            case '18':
                this['confirmed'] = ![];
                continue;
            case '19':
                this[iP(0x8e0)] = ![];
                continue;
            case '20':
                this[iP(0x3b1)] = [];
                continue;
            case '21':
                this[iP(0x919)] = Buffer[iP(0xd4a)](0x0);
                continue;
            case '22':
                this[iP(0x6ee)] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '23':
                this[iP(0x538)] = {
                    'rx': 0x0,
                    'tx': 0x0,
                    'rxBytes': 0x0,
                    'txBytes': 0x0,
                    'dropped': 0x0,
                    'retransmits': 0x0
                };
                continue;
            case '24':
                this[iP(0x6bf)] = [
                    null,
                    null
                ];
                continue;
            case '25':
                this[iP(0x524)] = a0k[iP(0x4ea)](0x8);
                continue;
            case '26':
                this['minWindow'] = b[iP(0x8f9)](0x2, this[iP(0x621)]);
                continue;
            case '27':
                this[iP(0x491)] = [
                    new a0bS(),
                    new a0bS(),
                    new a0bS()
                ];
                continue;
            case '28':
                this[iP(0xd5a)] = 0x0;
                continue;
            case '29':
                this['socket'] = null;
                continue;
            case '30':
                this['idleTimeout'] = b[iP(0xe96)](a[iP(0x703)], undefined) ? 0x7530 : a[iP(0x703)];
                continue;
            case '31':
                this[iP(0x5be)] = a['maxInflight'] || 0x100;
                continue;
            case '32':
                this[iP(0x53d)] = null;
                continue;
            case '33':
                this[iP(0x89d)] = a[iP(0x89d)] || b[iP(0xd50)](0x1, 0x14);
                continue;
            case '34':
                this[iP(0x4b9)] = null;
                continue;
            case '35':
                this['localMaxData'] = a['localMaxData'] || 0x1 << 0x16;
                continue;
            case '36':
                this[iP(0x58a)] = a['alpn'] || a0bq;
                continue;
            case '37':
                this[iP(0x1bf)] = ![];
                continue;
            case '38':
                this[iP(0x9a1)] = null;
                continue;
            case '39':
                this[iP(0xbdc)] = null;
                continue;
            case '40':
                this['serverName'] = a[iP(0xde6)] || a[iP(0xe9c)];
                continue;
            case '41':
                this[iP(0xd3f)] = 0x0;
                continue;
            case '42':
                this['registrationFailed'] = ![];
                continue;
            case '43':
                this[iP(0x95f)] = ![];
                continue;
            case '44':
                this[iP(0x7d2)] = new a0c2(this[iP(0xde6)], this[iP(0x58a)], this['localParameters']);
                continue;
            case '45':
                this['onReady'] = a[iP(0x6ca)] || function () {
                };
                continue;
            case '46':
                this[iP(0xacd)] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '47':
                this[iP(0x15a)] = null;
                continue;
            case '48':
                this['congestionWindow'] = this['initialWindow'];
                continue;
            case '49':
                this[iP(0x7a4)] = [];
                continue;
            case '50':
                this[iP(0x4ff)] = [
                    null,
                    null,
                    null
                ];
                continue;
            case '51':
                this[iP(0x57c)] = a[iP(0x57c)] || function () {
                };
                continue;
            case '52':
                this[iP(0x54a)] = 0x3;
                continue;
            case '53':
                this[iP(0xba6)] = Infinity;
                continue;
            case '54':
                this['localParameters'] = b[iP(0xa90)](a0bZ, [
                    [
                        a0bD[iP(0x812)],
                        this[iP(0x703)]
                    ],
                    [
                        a0bD[iP(0x38a)],
                        this[iP(0x581)]
                    ],
                    [
                        a0bD['initialMaxStreamDataBidiLocal'],
                        this[iP(0x169)]
                    ],
                    [
                        a0bD[iP(0x4cd)],
                        this['localStreamData']
                    ],
                    [
                        a0bD['initialMaxStreamDataUni'],
                        this[iP(0x169)]
                    ],
                    [
                        a0bD[iP(0x467)],
                        0x1 << 0x18
                    ],
                    [
                        a0bD[iP(0x9d4)],
                        b[iP(0xd50)](0x1, 0x18)
                    ],
                    [
                        a0bD[iP(0x356)],
                        this[iP(0x621)]
                    ],
                    [
                        a0bD[iP(0x2e9)],
                        0x8
                    ],
                    [
                        a0bD[iP(0x242)],
                        this[iP(0x524)]
                    ]
                ]);
                continue;
            case '55':
                this[iP(0xbc7)] = 0x0;
                continue;
            case '56':
                this['ackPending'] = [
                    ![],
                    ![],
                    ![]
                ];
                continue;
            case '57':
                this[iP(0x259)] = 0x0;
                continue;
            case '58':
                this[iP(0x710)] = ![];
                continue;
            case '59':
                this['keepAlive'] = a[iP(0x965)] === undefined ? 0x3e8 : a['keepAlive'];
                continue;
            case '60':
                this[iP(0xa3b)] = [
                    0x0,
                    0x0,
                    0x0
                ];
                continue;
            case '61':
                this[iP(0x169)] = a[iP(0x169)] || b[iP(0xd69)](0x1, 0x14);
                continue;
            case '62':
                this[iP(0x641)] = a[iP(0x641)] || function () {
                };
                continue;
            case '63':
                this[iP(0x952)] = a[iP(0x952)] || function () {
                };
                continue;
            case '64':
                this['maxPacket'] = a['maxPacket'] || a0bw;
                continue;
            case '65':
                this[iP(0x7de)] = Buffer[iP(0xd4a)](0x0);
                continue;
            case '66':
                this[iP(0xdcb)] = null;
                continue;
            case '67':
                this[iP(0xcef)] = 0x19;
                continue;
            case '68':
                this[iP(0xbcc)] = 0x0;
                continue;
            case '69':
                this[iP(0x953)] = b[iP(0xe96)](a[iP(0x953)], !![]);
                continue;
            case '70':
                this['peerStreamRemote'] = 0x0;
                continue;
            case '71':
                this[iP(0x5d1)] = [
                    new a0bR(this),
                    new a0bR(this),
                    new a0bR(this)
                ];
                continue;
            case '72':
                this[iP(0xaa0)] = 0x0;
                continue;
            case '73':
                this['maxWindow'] = b[iP(0x8f9)](this[iP(0x5be)], this['maxPacket']);
                continue;
            case '74':
                this[iP(0xe9c)] = a[iP(0xe9c)];
                continue;
            case '75':
                this[iP(0x3b6)] = [
                    -0x1,
                    -0x1,
                    -0x1
                ];
                continue;
            case '76':
                this[iP(0xdaa)] = 0x0;
                continue;
            }
            break;
        }
    }
    get [a0cE(0x58d)]() {
        const iQ = a0cE, a = {
                'NjOXx': function (b, c) {
                    return b === c;
                }
            };
        return a['NjOXx'](this[iQ(0x885)], !![]);
    }
    set [a0cE(0x58d)](a) {
        const iR = a0cE;
        this[iR(0x885)] = a === !![], this[iR(0x885)] && !this[iR(0xbdc)] && !this['closing'] && this[iR(0x675)](iR(0x3cd));
    }
    [a0cE(0xb41)]() {
        const iS = a0cE, a = {
                'IkXsb': function (b, c) {
                    return b + c;
                },
                'wYCyX': iS(0x78e),
                'fotVT': iS(0x921)
            };
        return new Promise((b, c) => {
            const iU = iS, d = {
                    'IfybL': function (f, g) {
                        const iT = a0b;
                        return a[iT(0xa6d)](f, g);
                    }
                };
            this[iU(0x15a)] = {
                'resolve': b,
                'reject': c
            }, this['socket'] = a0ah[iU(0x4af)](a[iU(0x28b)]), this[iU(0xb2c)]['on'](a[iU(0xe66)], f => {
                const iV = iU;
                try {
                    this[iV(0xa47)](f);
                } catch (g) {
                    this[iV(0xb44)](d[iV(0xdb9)]('receive\x20failed:\x20', g));
                }
            }), this['socket']['on'](iU(0x7c7), f => {
                const iW = iU;
                !this['closed'] && this[iW(0xb44)](d['IfybL']('socket\x20error:\x20', f['message']));
            }), this[iU(0xb2c)][iU(0x600)](0x0, iU(0xc90), () => this[iU(0x9d0)]());
        });
    }
    [a0cE(0x9d0)]() {
        const iX = a0cE, a = {
                'sKxrI': iX(0x893),
                'nbiMN': function (d, f, g) {
                    return d(f, g);
                },
                'yJzWz': function (d, f) {
                    return d + f;
                },
                'RZqJg': function (d, f) {
                    return d + f;
                },
                'DhBVa': iX(0x8a1),
                'LRFEj': iX(0x7ce),
                'cHZOI': iX(0x1f7),
                'pfwRi': iX(0x60f)
            }, b = a[iX(0x481)][iX(0xa24)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[iX(0x9a1)] = setInterval(() => this[iX(0xab6)](), 0x14);
                continue;
            case '1':
                this['_tick']();
                continue;
            case '2':
                this[iX(0x4ff)][a0by] = a[iX(0xe1a)](a0bO, this[iX(0x802)], !![]);
                continue;
            case '3':
                this[iX(0x9c0)] = Date[iX(0x1cf)]();
                continue;
            case '4':
                this[iX(0xabe)][iX(0x8ab)](a['yJzWz'](a[iX(0xc5c)](a[iX(0xc5c)](a[iX(0xc5c)](a[iX(0xc5c)](a['yJzWz'](a['RZqJg'](a[iX(0x5c8)], this['host']), ':'), this[iX(0x1bb)]), a['LRFEj']), this[iX(0x58a)]), a[iX(0xbbe)]), this[iX(0x802)][iX(0x7d1)](a[iX(0x72f)])));
                continue;
            case '5':
                this[iX(0xbc7)] = Date[iX(0x1cf)]();
                continue;
            case '6':
                this['cryptoSend'][a0by][iX(0x52b)](this[iX(0x7d2)]['buildClientHello'](), ![]);
                continue;
            }
            break;
        }
    }
    [a0cE(0xab6)]() {
        const iY = a0cE, a = {
                'RoRQE': function (d, f) {
                    return d < f;
                },
                'sNSIR': function (d, f) {
                    return d === f;
                },
                'KvXAX': function (d, f) {
                    return d + f;
                },
                'HhuIF': 'peer\x20idle\x20for\x20',
                'CFEmD': function (d, f) {
                    return d - f;
                }
            };
        if (this[iY(0xbdc)])
            return;
        const b = Date[iY(0x1cf)]();
        this['_checkLoss'](b);
        this[iY(0x965)] && this['handshakeComplete'] && b - this[iY(0x9c0)] >= this[iY(0x965)] && (this['pingPending'] = !![]);
        let c = 0x0;
        while (a[iY(0x736)](c, 0x10) && this[iY(0x545)]() < this[iY(0x5be)] && (a[iY(0x736)](this['_inFlightBytes'](), this['_sendWindow']()) || this[iY(0xe4b)]() || this[iY(0x1bf)])) {
            const d = this[iY(0xcdf)]();
            if (a[iY(0x50a)](d, null))
                break;
            this[iY(0xc7c)](d), c += 0x1;
        }
        b - this[iY(0xbc7)] > Math[iY(0x357)](this[iY(0x703)], 0x3a98) && this[iY(0xb44)](a['KvXAX'](a[iY(0xc6c)](a[iY(0xe31)], a[iY(0xd23)](b, this['lastReceived'])), 'ms'));
    }
    [a0cE(0x545)]() {
        const iZ = a0cE, a = {
                'AkJtv': function (b, c) {
                    return b + c;
                }
            };
        return a[iZ(0xe07)](a[iZ(0xe07)](this[iZ(0x6ee)][0x0][iZ(0x5bd)], this[iZ(0x6ee)][0x1][iZ(0x5bd)]), this[iZ(0x6ee)][0x2][iZ(0x5bd)]);
    }
    ['_ackDue']() {
        const j0 = a0cE, a = {
                'CqRhe': function (b, c) {
                    return b < c;
                },
                'ZjFQx': function (b, c) {
                    return b !== c;
                }
            };
        for (let b = 0x0; a['CqRhe'](b, 0x3); b++) {
            if (a[j0(0xded)](this[j0(0x4ff)][b], null) && this[j0(0xedd)][b] && this[j0(0xacd)][b]['length'])
                return !![];
        }
        return ![];
    }
    ['_inFlightBytes']() {
        const j1 = a0cE, a = {
                'ZvYvr': function (c, d) {
                    return c < d;
                }
            };
        let b = 0x0;
        for (let c = 0x0; a[j1(0x8e7)](c, 0x3); c++) {
            for (const d of this[j1(0x6ee)][c]) {
                b += d[j1(0x359)];
            }
        }
        return b;
    }
    [a0cE(0xd2c)]() {
        const j2 = a0cE;
        return this[j2(0x710)] ? this['congestionWindow'] : Infinity;
    }
    [a0cE(0x24e)]() {
        const j3 = a0cE, a = {
                'WxkJX': function (b, c) {
                    return b * c;
                }
            };
        return Math['max'](a['WxkJX'](this[j3(0xccc)], Math[j3(0x858)](0x2, this[j3(0xbcc)])), 0x14);
    }
    ['_recordRttSample'](a) {
        const j4 = a0cE, b = {
                'AHFcr': function (c, d) {
                    return c / d;
                },
                'PZCkX': function (c, d) {
                    return c / d;
                },
                'DzbLQ': function (c, d) {
                    return c + d;
                },
                'aZqLg': function (c, d) {
                    return c * d;
                },
                'aoZiD': function (c, d) {
                    return c * d;
                }
            };
        this[j4(0x3cf)] === null ? (this['srtt'] = a, this['rttvar'] = b[j4(0x7da)](a, 0x2)) : (this[j4(0x4b9)] = b[j4(0x574)](b['DzbLQ'](this['rttvar'] * 0x3, Math[j4(0x904)](this[j4(0x3cf)] - a)), 0x4), this[j4(0x3cf)] = b[j4(0x7da)](b['DzbLQ'](b[j4(0xa80)](this[j4(0x3cf)], 0x7), a), 0x8)), this[j4(0xccc)] = Math[j4(0x397)](b['DzbLQ'](this[j4(0x3cf)], b[j4(0xce5)](0x4, this[j4(0x4b9)])) + this[j4(0xcef)]);
    }
    [a0cE(0x853)](a) {
        const j5 = a0cE, b = {
                'izHDD': function (c, d) {
                    return c / d;
                },
                'lEmTi': function (c, d) {
                    return c * d;
                },
                'iEtYh': function (c, d) {
                    return c + d;
                },
                'GMSOI': function (c, d) {
                    return c + d;
                },
                'XjZQz': j5(0x8b2),
                'Gmdff': j5(0x937),
                'WNqkm': j5(0x683),
                'beLIV': function (c, d) {
                    return c === d;
                }
            };
        this[j5(0xba6)] = Math[j5(0x357)](Math['floor'](b['izHDD'](this[j5(0xbfc)], 0x2)), b[j5(0x257)](0x2, this['minWindow'])), this[j5(0xbfc)] = this[j5(0x21a)], this[j5(0xabe)][j5(0x8ab)](b[j5(0xcd2)](b[j5(0xcd2)](b[j5(0xd00)](b['iEtYh'](b[j5(0xd00)](b['GMSOI'](b[j5(0x6bc)], a0bB[a]), j5(0xc37)) + this[j5(0xbfc)], b[j5(0xc53)]), this['slowStartThreshold']), b[j5(0xbd4)]) + (b[j5(0x3fa)](this[j5(0x3cf)], null) ? '-' : Math[j5(0x397)](this[j5(0x3cf)])), 'ms'));
    }
    ['_checkLoss'](a) {
        const j6 = a0cE, b = {
                'eeutk': function (c, d) {
                    return c < d;
                },
                'tYNLj': function (c, d) {
                    return c < d;
                },
                'PaomU': function (c, d) {
                    return c - d;
                },
                'LQGuD': function (c, d) {
                    return c + d;
                },
                'pxVHC': function (c, d) {
                    return c + d;
                },
                'pvtgE': function (c, d) {
                    return c + d;
                },
                'zJqhI': function (c, d) {
                    return c + d;
                },
                'RFjmB': function (c, d) {
                    return c + d;
                },
                'lGItf': j6(0xafc),
                'HflTQ': j6(0xb80),
                'bqRTi': j6(0xc9b),
                'PvkHG': function (c, d) {
                    return c > d;
                },
                'zwCwy': j6(0x4cc),
                'ENweD': j6(0xdba)
            };
        for (let c = 0x0; b[j6(0x37e)](c, 0x3); c++) {
            const d = this[j6(0x6ee)][c];
            if (!d['length'])
                continue;
            if (b[j6(0x99d)](b[j6(0x549)](a, d[0x0]['time']), this['_ptoDuration']()))
                continue;
            const f = d[0x0];
            this[j6(0x6ee)][c] = d['slice'](0x1), this[j6(0x8ba)](c, f), this[j6(0xdaa)] += 0x1, this['stats'][j6(0xdaa)] += 0x1, this[j6(0xbcc)] += 0x1, this[j6(0xabe)][j6(0x8ab)](b[j6(0xa1e)](b[j6(0x9c9)](b['pvtgE'](b['pxVHC'](b[j6(0x5e9)](b['LQGuD'](b[j6(0x45d)](b['lGItf'], a0bB[c]), b[j6(0xacc)]), f['pn']), j6(0x968)), this[j6(0x6ee)][c]['length']), b['bqRTi']), this[j6(0x24e)]()));
            if (b[j6(0xd7e)](this['retransmits'], 0x18)) {
                this[j6(0xb44)](b[j6(0x5e9)](b['RFjmB'](b[j6(0x8c8)], this['retransmits']), b[j6(0x239)]));
                return;
            }
        }
    }
    [a0cE(0x8ba)](a, b) {
        const j7 = a0cE;
        b[j7(0x50d)] && this[j7(0x5d1)][a][j7(0xb66)]([b[j7(0x50d)]]);
        for (const c of b[j7(0x1b8)]) {
            c['stream'][j7(0x73c)][j7(0xb66)]([{
                    'start': c[j7(0xc25)],
                    'length': c[j7(0x5bd)]
                }]), c[j7(0x7f3)] && c['stream']['send'][j7(0xb66)]([{
                    'start': c[j7(0xc25)] + c[j7(0x5bd)],
                    'length': 0x0,
                    'fin': !![]
                }]), this[j7(0x80d)](c[j7(0xa11)]);
        }
    }
    ['onSendProgress']() {
        const j8 = a0cE;
        this[j8(0xdaa)] = 0x0, this[j8(0xbcc)] = 0x0;
    }
    [a0cE(0xc2d)](a, b) {
        const j9 = a0cE, c = {
                'UuFAp': function (d, f) {
                    return d === f;
                },
                'ORldj': function (d, f) {
                    return d + f;
                },
                'zYKuC': j9(0x6ad),
                'rWvwO': j9(0x3b4)
            };
        if (c[j9(0x3d8)](this['keys'][a], null))
            return;
        this[j9(0x4ff)][a] = null, this[j9(0x6ee)][a] = [], this[j9(0xabe)][j9(0x8ab)](c[j9(0x3ab)](c[j9(0x3ab)](c['zYKuC'] + a0bB[a] + c['rWvwO'], b), ')'));
    }
    ['_flushHandshakeAck']() {
        const ja = a0cE, a = {
                'PxOwA': function (k, l) {
                    return k === l;
                },
                'RyxSe': function (k, l) {
                    return k(l);
                },
                'WRrYL': function (k, l) {
                    return k + l;
                },
                'UQvge': function (k, l, m, n, o) {
                    return k(l, m, n, o);
                },
                'dHsYX': function (k, l) {
                    return k === l;
                }
            }, b = a0bz, c = this['keys'][b];
        if (a['PxOwA'](c, null) || !this[ja(0xedd)][b] || a[ja(0x1d7)](this['recvRanges'][b]['length'], 0x0))
            return;
        const d = a[ja(0x222)](a0bW, this[ja(0xacd)][b][ja(0x523)](-0x10));
        this[ja(0xedd)][b] = ![];
        const f = this[ja(0xa3b)][b]++, g = this[ja(0x297)](b, a[ja(0x439)](a[ja(0x439)](a0bv, d[ja(0x5bd)]), 0x10), f), h = Buffer[ja(0xbbc)]([
                g[ja(0x818)],
                g[ja(0x54f)]
            ]), i = Buffer[ja(0xbbc)]([
                h,
                c['send'][ja(0x9d9)](f, h, d)
            ]), j = a[ja(0xcf0)](a0bT, c[ja(0x73c)], i, g[ja(0x715)], g[ja(0x2bf)]);
        if (a[ja(0x763)](j, null)) {
            this[ja(0xedd)][b] = !![];
            return;
        }
        this['_transmit']({
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
    [a0cE(0x7d3)]() {
        const jb = a0cE, a = {
                'AMGwq': jb(0xca8),
                'uYSiu': jb(0x298)
            }, b = a['AMGwq'][jb(0xa24)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['confirmed'] = !![];
                continue;
            case '1':
                this[jb(0xc2d)](a0by, a['uYSiu']);
                continue;
            case '2':
                this[jb(0xe16)]();
                continue;
            case '3':
                this[jb(0xc2d)](a0bz, jb(0x298));
                continue;
            case '4':
                if (this[jb(0xdd2)] || !this[jb(0x710)] || !this[jb(0xa1c)])
                    return;
                continue;
            }
            break;
        }
    }
    [a0cE(0x78a)](a) {
        const jc = a0cE, b = {
                'ETsQw': function (d, f) {
                    return d + f;
                },
                'fzXkj': function (d, f) {
                    return d + f;
                },
                'veacx': function (d, f) {
                    return d + f;
                },
                'hYZLH': function (d, f) {
                    return d === f;
                },
                'yvGbd': function (d, f) {
                    return d + f;
                },
                'WhGXT': function (d, f) {
                    return d + f;
                },
                'PErsB': function (d, f) {
                    return d + f;
                },
                'SFuoo': function (d, f) {
                    return d + f;
                },
                'VbJbt': function (d, f) {
                    return d + f;
                }
            }, c = 0x10;
        if (a === a0bA)
            return b[jc(0x50b)](b[jc(0x172)](b[jc(0xb43)](0x1, this['peerCid']['length']), a0bv), c);
        if (b['hYZLH'](a, a0bz))
            return b[jc(0x704)](b['WhGXT'](b['PErsB'](b[jc(0x155)](b[jc(0x74e)](b['VbJbt'](0x1, 0x4), 0x1) + this[jc(0x802)][jc(0x5bd)], 0x1), this[jc(0x524)]['length']), 0x2), a0bv) + c;
        return b[jc(0x74e)](b[jc(0x155)](b[jc(0xb43)](b[jc(0xb43)](b[jc(0x762)](0x1, 0x4) + 0x1 + this[jc(0x802)][jc(0x5bd)], 0x1) + this['ourCid']['length'], a0bE(this[jc(0x919)]['length'])) + this[jc(0x919)]['length'] + 0x2, a0bv), c);
    }
    [a0cE(0x297)](a, b, c) {
        const jd = a0cE, d = {
                'LyfjJ': function (k, l) {
                    return k >>> l;
                },
                'QEXTJ': function (k, l) {
                    return k === l;
                },
                'Wpoto': function (k, l) {
                    return k | l;
                },
                'zvAnN': function (k, l) {
                    return k << l;
                },
                'NyPoN': function (k, l) {
                    return k - l;
                },
                'etDAw': function (k, l) {
                    return k + l;
                },
                'amTzf': function (k, l) {
                    return k | l;
                },
                'XlGBp': function (k, l) {
                    return k << l;
                },
                'UQxRH': function (k, l) {
                    return k - l;
                }
            }, f = new a0bH(), g = Buffer[jd(0xd4a)](a0bv);
        g[jd(0x2c1)](d[jd(0x4b8)](c, 0x0), 0x0);
        if (d['QEXTJ'](a, a0bA))
            return f['byte'](d[jd(0x22b)](d['Wpoto'](0x40, d[jd(0x943)](this[jd(0xa5d)], 0x2)), d[jd(0x665)](a0bv, 0x1))), f[jd(0x359)](this[jd(0x802)]), {
                'header': f['build'](),
                'pnBytes': g,
                'pnOffset': d[jd(0x418)](0x1, this[jd(0x802)][jd(0x5bd)]),
                'long': ![]
            };
        const h = a === a0by ? 0x0 : 0x2;
        f[jd(0xde3)](d[jd(0x500)](0xc0 | d['XlGBp'](h, 0x4), d[jd(0x81c)](a0bv, 0x1))), f[jd(0xb21)](a0bp), f[jd(0xde3)](this[jd(0x802)][jd(0x5bd)])[jd(0x359)](this[jd(0x802)]);
        a === a0by ? (f['byte'](this[jd(0x524)][jd(0x5bd)])[jd(0x359)](this[jd(0x524)]), f['varint'](this['peerToken']['length']), this['peerToken'][jd(0x5bd)] && f['bytes'](this[jd(0x919)])) : f[jd(0xde3)](0x0)[jd(0x359)](Buffer[jd(0xd4a)](0x0));
        const i = Buffer[jd(0xd4a)](0x2);
        i[jd(0x2b6)](d['amTzf'](0x4000, b), 0x0), f[jd(0x359)](i);
        const j = f['build']();
        return {
            'header': j,
            'pnBytes': g,
            'pnOffset': j[jd(0x5bd)],
            'long': !![]
        };
    }
    ['_pickEpoch']() {
        const je = a0cE, a = {
                'EpCCN': function (b, c) {
                    return b === c;
                },
                'RZkBU': function (b, c) {
                    return b === c;
                }
            };
        for (const b of [
                a0by,
                a0bz,
                a0bA
            ]) {
            if (a['EpCCN'](this['keys'][b], null))
                continue;
            if (this[je(0xedd)][b] && this[je(0xacd)][b][je(0x5bd)])
                return b;
            if (this[je(0xc26)](b)[je(0x5bd)])
                return b;
            if (this[je(0x5d1)][b][je(0xe8b)][je(0x5bd)])
                return b;
            if (a['RZkBU'](b, a0bA) && (this[je(0x3b1)][je(0x5bd)] || this[je(0x7a4)][je(0x5bd)] || this[je(0x95f)] || this[je(0x1bf)]))
                return b;
        }
        return -0x1;
    }
    [a0cE(0xc26)](a) {
        const jf = a0cE;
        return this[jf(0xa03)][jf(0x290)](b => b['epoch'] === a);
    }
    [a0cE(0xcdf)]() {
        const jg = a0cE, a = {
                'kowri': function (o, p) {
                    return o < p;
                },
                'BFzml': function (o, p) {
                    return o(p);
                },
                'zicVA': function (o, p) {
                    return o > p;
                },
                'mtWPk': function (o, p) {
                    return o - p;
                },
                'QzdLb': function (o, p) {
                    return o === p;
                },
                'NWnQg': jg(0x675),
                'FYZXX': jg(0xa4b),
                'vPhFF': function (o, p) {
                    return o - p;
                },
                'SXQHx': function (o, p) {
                    return o + p;
                },
                'zogHt': function (o, p) {
                    return o + p;
                },
                'gzgyC': function (o, p, q, r, s) {
                    return o(p, q, r, s);
                }
            }, b = this['_pickEpoch']();
        if (a['kowri'](b, 0x0))
            return null;
        let c = this[jg(0x621)] - this[jg(0x78a)](b);
        if (c < 0x10)
            return null;
        const d = [], f = {
                'crypto': null,
                'streams': [],
                'ping': ![],
                'closing': ![],
                'oneOff': ![]
            };
        if (this['ackPending'][b] && this[jg(0xacd)][b][jg(0x5bd)]) {
            const o = a['BFzml'](a0bW, this['recvRanges'][b][jg(0x523)](-0x10));
            d['push'](o), c -= o[jg(0x5bd)], this[jg(0xedd)][b] = ![];
        }
        for (const p of this['_pendingOneOff'](b)) {
            if (a[jg(0x33f)](p['frame'][jg(0x5bd)], a[jg(0xecc)](c, 0x10)))
                break;
            d[jg(0x6b2)](p['frame']), c -= p[jg(0x28d)]['length'], this[jg(0xa03)][jg(0xead)](this[jg(0xa03)][jg(0x1a7)](p), 0x1), f['oneOff'] = !![];
        }
        const g = this[jg(0x5d1)][b];
        if (g[jg(0xe8b)][jg(0x5bd)] && c > 0x10) {
            const q = g[jg(0x4ed)](c - 0xc), r = new a0bH();
            r[jg(0xde3)](a0bC[jg(0x50d)])['varint'](q[jg(0xc25)])[jg(0x90f)](q[jg(0x5bd)])[jg(0x359)](q['bytes']);
            const s = r[jg(0xdf1)]();
            d['push'](s), c -= s[jg(0x5bd)], f[jg(0x50d)] = q;
        }
        b === a0bA && (this['_creditFrames'](d, f, c), this['_streamFrames'](d, f, Math[jg(0x2d2)](c, a[jg(0xecc)](this[jg(0xd2c)](), this[jg(0xd17)]()))));
        if (a[jg(0xd98)](b, a0bA) && this['closing']) {
            const t = new a0bH();
            t['byte'](a0bC[jg(0x6f8)])['varint'](0x0)[jg(0x90f)](0x0)[jg(0x359)](Buffer[jg(0x5a6)](this[jg(0xdcb)] || a[jg(0x2f8)], a['FYZXX'])[jg(0x516)](0x0, 0x40)), d[jg(0x6b2)](t[jg(0xdf1)]()), f['closing'] = !![];
        } else
            a[jg(0xd98)](b, a0bA) && this[jg(0x95f)] && (d[jg(0x6b2)](Buffer[jg(0x5a6)]([a0bC[jg(0xca5)]])), this[jg(0x95f)] = ![], f[jg(0xca5)] = !![]);
        if (!d['length'])
            return null;
        let h = Buffer['concat'](d);
        if (b === a0by && !this[jg(0x710)]) {
            const u = a['vPhFF'](a0bx - this[jg(0x78a)](b), h[jg(0x5bd)]);
            a[jg(0x33f)](u, 0x0) && (h = Buffer[jg(0xbbc)]([
                h,
                Buffer[jg(0xd4a)](u)
            ]));
        }
        const i = this['pnSend'][b]++, j = a[jg(0xd98)](b, a0bA) ? this[jg(0x6bf)][this[jg(0xa5d)]] : this[jg(0x4ff)][b][jg(0x73c)], k = this[jg(0x297)](b, a[jg(0xcd1)](a[jg(0x344)](a0bv, h['length']), 0x10), i), l = Buffer[jg(0xbbc)]([
                k[jg(0x818)],
                k[jg(0x54f)]
            ]), m = Buffer['concat']([
                l,
                j[jg(0x9d9)](i, l, h)
            ]), n = a[jg(0x544)](a0bT, j, m, k[jg(0x715)], k['long']);
        if (a[jg(0xd98)](n, null))
            return this[jg(0xb44)](jg(0x993)), null;
        return {
            'epoch': b,
            'packet': n,
            'pn': i,
            'meta': f,
            'ackEliciting': Boolean(f[jg(0x50d)] || f[jg(0x1b8)][jg(0x5bd)] || f['ping'] || f[jg(0x1bf)] || f['oneOff']),
            'summary': this[jg(0xdf3)](d)
        };
    }
    [a0cE(0xdf3)](a) {
        const jh = a0cE, b = {
                'LAPsU': jh(0xcbc),
                'oeSod': function (d, f) {
                    return d === f;
                },
                'sweIT': jh(0x50d),
                'lFJrY': jh(0xa11),
                'lxnLc': jh(0x19c),
                'IImLW': jh(0xaba),
                'ZtoNd': function (d, f) {
                    return d === f;
                },
                'UzcOD': jh(0x9ee),
                'CYRGh': function (d, f) {
                    return d + f;
                }
            }, c = [];
        for (const d of a) {
            const f = d[0x0];
            if (f === a0bC[jh(0xcbc)])
                c[jh(0x6b2)](b[jh(0x4da)]);
            else {
                if (b[jh(0xb5e)](f, a0bC[jh(0x50d)]))
                    c[jh(0x6b2)](b[jh(0xb36)]);
                else {
                    if (b[jh(0xb5e)](f, a0bC[jh(0xca5)]))
                        c['push']('ping');
                    else {
                        if (b[jh(0xb5e)](f, a0bC[jh(0xa11)]))
                            c[jh(0x6b2)](b['lFJrY']);
                        else {
                            if (f === a0bC['maxData'])
                                c['push'](b[jh(0xa2e)]);
                            else {
                                if (b[jh(0xb5e)](f, a0bC[jh(0x42c)]))
                                    c[jh(0x6b2)](b[jh(0x945)]);
                                else
                                    b['ZtoNd'](f, a0bC[jh(0x825)]) ? c['push'](b['UzcOD']) : c[jh(0x6b2)](b[jh(0x8fa)]('0x', f[jh(0x7d1)](0x10)));
                            }
                        }
                    }
                }
            }
        }
        return c[jh(0x3ec)](',');
    }
    [a0cE(0x4b5)](a, b, c) {
        const ji = a0cE, d = {
                'YrJBV': function (f, g) {
                    return f - g;
                },
                'Ticxj': function (f, g) {
                    return f < g;
                }
            };
        if (this['creditMaxData'] && c > 0xc) {
            const f = new a0bH();
            f[ji(0xde3)](a0bC[ji(0x4f1)])[ji(0x90f)](this[ji(0x581)]), a[ji(0x6b2)](f['build']()), this[ji(0x417)] = ![], c -= a[d[ji(0x2b2)](a[ji(0x5bd)], 0x1)][ji(0x5bd)];
        }
        for (const g of this[ji(0x7a4)]['slice']()) {
            if (d[ji(0x596)](c, 0x14))
                break;
            const h = new a0bH();
            h['byte'](a0bC[ji(0x42c)])['varint'](g['id'])['varint'](g['localLimit']);
            const i = h[ji(0xdf1)]();
            a['push'](i), c -= i[ji(0x5bd)];
            const j = this[ji(0x7a4)]['indexOf'](g);
            this[ji(0x7a4)]['splice'](j, 0x1);
        }
    }
    [a0cE(0xb38)](a) {
        const jj = a0cE, b = {
                'WgjIG': function (c, d) {
                    return c === d;
                }
            };
        if (a[jj(0xc7e)])
            return a[jj(0xc7e)];
        return b['WgjIG'](a['initiator'], 'local') ? this[jj(0xd6e)] : this[jj(0xaa0)];
    }
    [a0cE(0xea7)](a, b, c) {
        const jk = a0cE, d = {
                'eFoUG': function (f, g) {
                    return f < g;
                },
                'NFJoT': function (f, g) {
                    return f - g;
                },
                'Glezr': function (f, g) {
                    return f <= g;
                },
                'nivRK': function (f, g) {
                    return f === g;
                },
                'QnnDW': function (f, g) {
                    return f | g;
                },
                'lgpVO': function (f, g) {
                    return f | g;
                },
                'TwiFh': function (f, g) {
                    return f >= g;
                },
                'GPZXy': function (f, g) {
                    return f + g;
                },
                'aYUDt': function (f, g) {
                    return f | g;
                }
            };
        for (const f of this[jk(0x3b1)][jk(0x523)]()) {
            if (d[jk(0xc84)](c, 0x18))
                break;
            const g = Math[jk(0x2d2)](this[jk(0x259)] - this['connectionSent'], d[jk(0xa54)](this['_peerStreamLimit'](f), f[jk(0x2dd)]));
            if (d[jk(0xc88)](g, 0x0))
                break;
            const h = f[jk(0x73c)]['take'](Math[jk(0x2d2)](d[jk(0xa54)](c, 0x14), g));
            if (d[jk(0xa04)](h, null)) {
                if (f['send'][jk(0x2c5)]()) {
                    const n = new a0bH();
                    n[jk(0xde3)](d[jk(0xcb2)](d[jk(0xcb2)](d[jk(0x671)](a0bC[jk(0xa11)], 0x4), 0x2), 0x1))[jk(0x90f)](f['id'])['varint'](f[jk(0x73c)][jk(0xa96)][jk(0x5bd)])['varint'](0x0);
                    const o = n[jk(0xdf1)]();
                    a[jk(0x6b2)](o), c -= o[jk(0x5bd)], b[jk(0x1b8)][jk(0x6b2)]({
                        'stream': f,
                        'start': f[jk(0x73c)][jk(0xa96)][jk(0x5bd)],
                        'length': 0x0,
                        'fin': !![]
                    });
                } else
                    this[jk(0xe86)](f);
                continue;
            }
            const i = d['TwiFh'](d[jk(0x791)](h[jk(0xc25)], h[jk(0x5bd)]), f[jk(0x73c)][jk(0xa96)][jk(0x5bd)]), j = d['aYUDt'](0x4, 0x2) | (i && f[jk(0x73c)][jk(0x7f3)] ? 0x1 : 0x0), k = new a0bH();
            k[jk(0xde3)](d[jk(0x671)](a0bC['stream'], j))[jk(0x90f)](f['id'])[jk(0x90f)](h['start'])[jk(0x90f)](h[jk(0x5bd)])[jk(0x359)](h['bytes']);
            const l = k[jk(0xdf1)]();
            a[jk(0x6b2)](l), c -= l[jk(0x5bd)], b[jk(0x1b8)]['push']({
                'stream': f,
                'start': h[jk(0xc25)],
                'length': h[jk(0x5bd)],
                'fin': i && f[jk(0x73c)]['fin'],
                'retransmitted': h[jk(0x5c4)]
            });
            const m = Math[jk(0x357)](0x0, d[jk(0x791)](h[jk(0xc25)], h[jk(0x5bd)]) - f[jk(0x2dd)]);
            f['sentEnd'] = Math[jk(0x357)](f['sentEnd'], h[jk(0xc25)] + h[jk(0x5bd)]), this['connectionSent'] += m, f[jk(0x73c)][jk(0x2e5)]() && this[jk(0xe86)](f);
        }
    }
    [a0cE(0xe86)](a) {
        const jl = a0cE, b = {
                'OgDAS': function (d, f) {
                    return d >= f;
                }
            }, c = this[jl(0x3b1)][jl(0x1a7)](a);
        b[jl(0x6e7)](c, 0x0) && this[jl(0x3b1)][jl(0xead)](c, 0x1);
    }
    [a0cE(0x80d)](a) {
        const jm = a0cE;
        this[jm(0x3b1)]['indexOf'](a) < 0x0 && this['sendReady'][jm(0x6b2)](a);
    }
    [a0cE(0x940)]() {
        const jn = a0cE, a = { 'IYYBK': jn(0xcf9) }, b = new a0c4(this, this['nextLocalStream'], a['IYYBK']);
        return this[jn(0xd5a)] += 0x4, this[jn(0x1b8)][jn(0x9c3)](b['id'], b), b;
    }
    async [a0cE(0x16d)](a, b, c) {
        const jo = a0cE, d = {
                'WNjGM': function (g, h) {
                    return g === h;
                },
                'ayMOy': function (g, h) {
                    return g + h;
                },
                'VeiiK': jo(0x3e0)
            }, f = this[jo(0x1b8)][jo(0x8f4)](a);
        if (d[jo(0x91e)](f, undefined))
            throw new Error(d[jo(0xd03)](d[jo(0xec1)], a));
        f[jo(0xeb4)](b, c);
    }
    [a0cE(0xc7c)](a) {
        const jp = a0cE, b = {
                'jxgvz': function (c, d) {
                    return c + d;
                },
                'uullr': jp(0xeb9),
                'YbjLm': function (c, d) {
                    return c === d;
                },
                'meGwR': function (c, d) {
                    return c <= d;
                },
                'CSYzd': function (c, d) {
                    return c + d;
                },
                'BWaQi': jp(0xa22),
                'lPHuc': jp(0x60f),
                'opEyQ': function (c, d) {
                    return c + d;
                },
                'TJwDa': function (c, d) {
                    return c + d;
                },
                'sMmDL': function (c, d) {
                    return c + d;
                },
                'QLhNX': jp(0xb80),
                'TQloj': function (c, d) {
                    return c !== d;
                }
            };
        if (b[jp(0x453)](this['socket'], null) || this[jp(0xbdc)])
            return;
        this[jp(0xb2c)][jp(0x73c)](a[jp(0x401)], 0x0, a[jp(0x401)][jp(0x5bd)], this[jp(0x1bb)], this[jp(0xe9c)], c => {
            const jq = jp;
            c && !this[jq(0xbdc)] && this[jq(0xabe)][jq(0x8ab)](b['jxgvz'](b['uullr'], c['message']));
        });
        if (process.env.KISAMA_QUIC_DEBUG && a[jp(0xd04)] === 0x1 && b[jp(0xe0c)](this[jp(0x538)]['tx'], 0x28))
            this[jp(0xabe)][jp(0xa39)](b[jp(0x8e1)](b[jp(0x8e1)](b[jp(0x229)](jp(0x9ec), a['pn']), b[jp(0xa3c)]), a['packet'][jp(0x7d1)](b['lPHuc'])));
        this[jp(0x538)]['tx'] += 0x1, this['stats'][jp(0x694)] += a[jp(0x401)][jp(0x5bd)];
        b['YbjLm'](a[jp(0xd04)], a0by) && (this['initialSent'] += 0x1);
        a[jp(0xd04)] === a0bz && b[jp(0x453)](this[jp(0x5d1)][a0bz][jp(0xe8b)][jp(0x5bd)], 0x0) && (this[jp(0xa1c)] = !![]);
        this['log'][jp(0x8ab)](b['jxgvz'](b[jp(0x229)](b[jp(0x195)](b[jp(0xc7a)](b[jp(0x195)](b['sMmDL'](b['opEyQ']('tx\x20', a[jp(0x401)][jp(0x5bd)]), 'B\x20') + a0bB[a[jp(0xd04)]], b['QLhNX']), a['pn']), '\x20['), a['summary']), ']'));
        if (a[jp(0x2de)]) {
            const c = b['TQloj'](a['meta']['crypto'], null) && a[jp(0xbb1)][jp(0x50d)][jp(0x5c4)] === !![] || a['meta'][jp(0x1b8)][jp(0x71b)](d => d['retransmitted'] === !![]);
            this[jp(0x6ee)][a[jp(0xd04)]][jp(0x6b2)]({
                'pn': a['pn'],
                'time': Date[jp(0x1cf)](),
                'bytes': a[jp(0x401)][jp(0x5bd)],
                'crypto': a['meta'][jp(0x50d)],
                'streams': a[jp(0xbb1)][jp(0x1b8)],
                'retransmitted': c
            }), this[jp(0x9c0)] = Date['now']();
        }
    }
    ['_onDatagram'](a) {
        const jr = a0cE, b = {
                'VpSel': function (d, f) {
                    return d < f;
                },
                'NtrrS': function (d, f) {
                    return d === f;
                },
                'REmiZ': function (d, f) {
                    return d !== f;
                },
                'SVWuh': function (d, f) {
                    return d + f;
                }
            };
        this[jr(0x538)]['rx'] += 0x1, this[jr(0x538)][jr(0x7a5)] += a[jr(0x5bd)], this[jr(0xbc7)] = Date[jr(0x1cf)]();
        let c = 0x0;
        while (b['VpSel'](c, a['length'])) {
            const d = a[c];
            if (!(d & 0x80)) {
                this['_handleShort'](a[jr(0x516)](c));
                return;
            }
            const f = a['subarray'](c), g = this[jr(0xc87)](f, 0x0);
            if (b[jr(0xb97)](g, null))
                return;
            if (b[jr(0x771)](g[jr(0x38c)], a0bp)) {
                this[jr(0xabe)][jr(0x8ab)]('rx\x20version\x20negotiation\x20or\x20unknown\x20version\x200x' + g[jr(0x38c)][jr(0x7d1)](0x10));
                return;
            }
            if (b[jr(0xb97)](g[jr(0x3d4)], 0x3)) {
                this['_handleRetry'](g);
                return;
            }
            const h = Math[jr(0x2d2)](f[jr(0x5bd)], b[jr(0xa64)](g[jr(0x715)], g[jr(0x5bd)]));
            this[jr(0x284)](f[jr(0x516)](0x0, h), g), c += h;
        }
    }
    ['_parseLong'](a, b) {
        const js = a0cE, c = {
                'NuxpC': function (o, p) {
                    return o < p;
                },
                'rFPtl': function (o, p) {
                    return o - p;
                },
                'HBAou': function (o, p) {
                    return o >> p;
                },
                'ADugf': function (o, p) {
                    return o & p;
                },
                'ZQuhs': function (o, p) {
                    return o + p;
                },
                'fTALU': function (o, p) {
                    return o < p;
                },
                'VCZxp': function (o, p) {
                    return o < p;
                },
                'jzFQo': function (o, p, q) {
                    return o(p, q);
                },
                'oywLH': function (o, p) {
                    return o === p;
                },
                'DUBJs': function (o, p) {
                    return o(p);
                },
                'DAMna': function (o, p) {
                    return o < p;
                },
                'wmpbe': function (o, p) {
                    return o + p;
                },
                'Xhqiq': function (o, p) {
                    return o === p;
                }
            };
        if (c[js(0x7c1)](c[js(0xb6e)](a[js(0x5bd)], b), 0x7))
            return null;
        const d = a[b], f = a[js(0x61d)](b + 0x1), g = c[js(0x62f)](c[js(0xa09)](d, 0x30), 0x4);
        let h = c[js(0x1c9)](b, 0x5);
        const i = a[h];
        h += 0x1;
        if (c[js(0x7b5)](c['rFPtl'](a['length'], h), i + 0x1))
            return null;
        const j = a[js(0x516)](h, h + i);
        h += i;
        const k = a[h];
        h += 0x1;
        if (c[js(0x267)](a[js(0x5bd)] - h, k))
            return null;
        const l = a[js(0x516)](h, c['ZQuhs'](h, k));
        h += k;
        let m = Buffer[js(0xd4a)](0x0);
        if (g === 0x0) {
            const o = c['jzFQo'](a0bG, a, h);
            if (c[js(0x233)](o, null))
                return null;
            h += o[0x1];
            const p = c['DUBJs'](Number, o[0x0]);
            if (c[js(0xa0c)](a[js(0x5bd)] - h, p))
                return null;
            m = a['subarray'](h, c[js(0x680)](h, p)), h += p;
        }
        if (g === 0x3)
            return {
                'first': d,
                'type': g,
                'version': f,
                'dcid': j,
                'scid': l,
                'token': a['subarray'](h, a['length'] - 0x10),
                'pnOffset': 0x0,
                'length': 0x0,
                'retry': !![]
            };
        const n = c[js(0xe13)](a0bG, a, h);
        if (c[js(0x269)](n, null))
            return null;
        return h += n[0x1], {
            'first': d,
            'type': g,
            'version': f,
            'dcid': j,
            'scid': l,
            'token': m,
            'pnOffset': h,
            'length': c[js(0x507)](Number, n[0x0]),
            'retry': ![]
        };
    }
    [a0cE(0xa5b)](a) {
        const jt = a0cE, b = {
                'GUggi': '1|2|5|0|3|4|6',
                'qCQjD': function (f, g) {
                    return f + g;
                },
                'IVbEl': function (f, g) {
                    return f + g;
                },
                'ZZqnE': 'rx\x20retry\x20token=',
                'ADGaZ': jt(0x8c2),
                'OcTQH': 'hex'
            }, c = b['GUggi'][jt(0xa24)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[jt(0xa3b)][a0by] = 0x0;
                continue;
            case '1':
                this[jt(0xabe)][jt(0x8ab)](b[jt(0x1be)](b['IVbEl'](b[jt(0xe2e)] + a['token'][jt(0x5bd)], b[jt(0xc1d)]), a[jt(0x464)][jt(0x7d1)](b[jt(0xebf)])));
                continue;
            case '2':
                this[jt(0x919)] = Buffer[jt(0x5a6)](a[jt(0xa59)]);
                continue;
            case '3':
                this[jt(0x6ee)][a0by] = [];
                continue;
            case '4':
                this[jt(0x5d1)][a0by][jt(0x6f4)]();
                continue;
            case '5':
                this['peerCid'] = Buffer[jt(0x5a6)](a[jt(0x464)]);
                continue;
            case '6':
                this[jt(0xcbd)] = 0x0;
                continue;
            }
            break;
        }
    }
    [a0cE(0x552)](a) {
        const ju = a0cE, b = {
                'OsyFw': function (c, d) {
                    return c === d;
                }
            };
        if (b[ju(0xe0d)](a, 0x0) || a === 0x1)
            return a0by;
        return a0bz;
    }
    [a0cE(0x284)](a, b) {
        const jv = a0cE, c = {
                'OhVeJ': function (m, n) {
                    return m === n;
                },
                'UnNVt': function (m, n) {
                    return m < n;
                },
                'sKUgw': function (m, n, o, p, q) {
                    return m(n, o, p, q);
                },
                'XCBaS': function (m, n) {
                    return m + n;
                },
                'PhUVj': function (m, n) {
                    return m & n;
                },
                'jvNhJ': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'QNUDA': function (m, n) {
                    return m * n;
                },
                'ttamK': function (m, n) {
                    return m + n;
                },
                'RRXYF': function (m, n) {
                    return m + n;
                },
                'JiuNU': function (m, n) {
                    return m + n;
                },
                'MJxna': function (m, n) {
                    return m + n;
                },
                'ELtHT': jv(0x1e6),
                'SMRYJ': 'hex',
                'JAFUS': function (m, n) {
                    return m + n;
                },
                'ZrQxo': function (m, n) {
                    return m + n;
                },
                'TJBvk': jv(0xb80)
            }, d = this[jv(0x552)](b[jv(0x3d4)]), f = this[jv(0x4ff)][d];
        if (c['OhVeJ'](f, null)) {
            this['stats'][jv(0x6a1)] += 0x1;
            return;
        }
        if (c[jv(0xd9d)](b[jv(0x5bd)], a0bv)) {
            this['stats'][jv(0x6a1)] += 0x1;
            return;
        }
        const g = c['sKUgw'](a0bU, f[jv(0x908)], a, b[jv(0x715)], !![]);
        if (g === null) {
            this[jv(0x538)][jv(0x6a1)] += 0x1;
            return;
        }
        const [h, i] = g, j = c[jv(0xbb3)](c['PhUVj'](h[0x0], 0x3), 0x1), k = c[jv(0xad5)](a0bV, Math['max'](this['largestRecv'][d], 0x0), c[jv(0x796)](j, 0x8), i);
        let l;
        try {
            l = f['recv']['open'](k, h, a[jv(0x516)](c[jv(0x4a1)](b[jv(0x715)], j)));
        } catch (m) {
            this[jv(0x538)][jv(0x6a1)] += 0x1, this[jv(0xabe)][jv(0x8ab)](c[jv(0xc2c)](c[jv(0xb6a)](c['MJxna'](c[jv(0xbb3)](jv(0x3d7), a[jv(0x5bd)]), 'B\x20'), a0bB[d]), jv(0xdb3)));
            return;
        }
        d === a0by && b['dcid']['length'] === this[jv(0x524)]['length'] && b[jv(0x8ce)][jv(0x508)](this['ourCid']) && (!this['handshakeComplete'] && b['scid'][jv(0x5bd)] && !this['peerCid'][jv(0x508)](b[jv(0x464)]) && (this[jv(0x802)] = Buffer[jv(0x5a6)](b[jv(0x464)]), this['log'][jv(0x8ab)](c['ELtHT'] + this[jv(0x802)][jv(0x7d1)](c[jv(0x7e3)])))), this['_recordReceived'](d, k), this[jv(0xabe)]['debug'](c[jv(0x4a1)](c[jv(0xc2c)](c[jv(0xbb3)](c[jv(0x63f)](c[jv(0xb67)](jv(0x3d7), a[jv(0x5bd)]), 'B\x20'), a0bB[d]), c[jv(0x39c)]), k)), c[jv(0x598)](d, a0bz) && this[jv(0xc2d)](a0by, jv(0x39b)), this[jv(0xbbb)](l, d);
    }
    ['_handleShort'](a) {
        const jw = a0cE, b = {
                'gcfjG': function (i, j) {
                    return i === j;
                },
                'SrSmG': function (i, j) {
                    return i + j;
                },
                'PkwHh': function (i, j) {
                    return i + j;
                },
                'iLORG': jw(0x3d7),
                'PaoRU': function (i, j) {
                    return i + j;
                },
                'TGhxa': function (i, j) {
                    return i < j;
                },
                'SBkfW': function (i, j) {
                    return i(j);
                },
                'BEGac': function (i, j) {
                    return i - j;
                },
                'WzhpJ': function (i, j) {
                    return i + j;
                },
                'tlSzY': function (i, j) {
                    return i & j;
                },
                'AtjqX': function (i, j, k, l) {
                    return i(j, k, l);
                },
                'xBVsr': function (i, j) {
                    return i + j;
                },
                'AVeqA': jw(0x86f),
                'rLFjC': 'quic\x20key\x20phase\x20',
                'ECVUa': '\x20updated',
                'eySjm': function (i, j, k) {
                    return i(j, k);
                },
                'OQBkz': jw(0x4b0),
                'qhPVL': function (i, j) {
                    return i + j;
                },
                'oxcbl': 'B\x20one-rtt\x20undecryptable'
            }, c = this[jw(0x4ff)][a0bA];
        if (b[jw(0x6a0)](c, null)) {
            this[jw(0x538)][jw(0x6a1)] += 0x1, this[jw(0xabe)]['debug'](b[jw(0x84e)](b[jw(0x2e6)](b[jw(0xd90)], a['length']), jw(0x324)));
            return;
        }
        b[jw(0x6a0)](this[jw(0xb88)]['length'], 0x0) && this[jw(0xb88)]['push']({
            'keys': c[jw(0x908)],
            'phase': 0x0
        });
        const d = b[jw(0xe10)](0x1, this[jw(0x524)][jw(0x5bd)]), f = [];
        for (const i of [c[jw(0x908)]]['concat'](this[jw(0xb88)]['map'](j => j[jw(0x4ff)]))) {
            b['TGhxa'](f[jw(0x1a7)](i), 0x0) && f['push'](i);
        }
        const g = this[jw(0xb88)][0x0], h = this[jw(0xb88)][jw(0xbbc)]([{
                    'keys': b['SBkfW'](a0bN, g['keys']),
                    'phase': b[jw(0xda3)](0x1, g['phase']),
                    'next': !![]
                }]);
        for (const j of h) {
            for (const k of j[jw(0x162)] ? f[jw(0xbbc)]([j[jw(0x4ff)]]) : f) {
                const l = a0bU(k, a, d, ![]);
                if (l === null)
                    continue;
                const [m, n] = l, o = b['WzhpJ'](b[jw(0xc4c)](m[0x0], 0x3), 0x1), p = b['AtjqX'](a0bV, Math[jw(0x357)](this[jw(0x3b6)][a0bA], 0x0), o * 0x8, n);
                let q;
                try {
                    q = j[jw(0x4ff)][jw(0xbe0)](p, m, a[jw(0x516)](b[jw(0x93a)](d, o)));
                } catch (r) {
                    continue;
                }
                if (j['next']) {
                    const s = b[jw(0xa7c)][jw(0xa24)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            this[jw(0xabe)][jw(0x8ab)](b[jw(0x2e6)](b[jw(0x93a)](b[jw(0xa58)], j[jw(0x81b)]), b[jw(0x27e)]));
                            continue;
                        case '1':
                            this[jw(0x6bf)][j[jw(0x81b)]] = b[jw(0x25d)](a0bN, this[jw(0x6bf)][0x1 - j[jw(0x81b)]], !![]);
                            continue;
                        case '2':
                            this[jw(0xb88)][jw(0xce3)]({
                                'keys': j['keys'],
                                'phase': j[jw(0x81b)]
                            });
                            continue;
                        case '3':
                            this[jw(0xa5d)] = j[jw(0x81b)];
                            continue;
                        case '4':
                            this[jw(0xb88)][jw(0x5bd)] > 0x2 && this[jw(0xb88)][jw(0x712)]();
                            continue;
                        }
                        break;
                    }
                }
                this[jw(0xdbf)](a0bA, p), this['log']['debug'](b[jw(0x2e6)](b[jw(0x93a)](b[jw(0x84e)]('rx\x20', a[jw(0x5bd)]), b[jw(0x383)]), p)), this['_handleFrames'](q, a0bA);
                return;
            }
        }
        this[jw(0x538)][jw(0x6a1)] += 0x1, this[jw(0xabe)][jw(0x8ab)](b[jw(0x32e)](b[jw(0xd90)] + a[jw(0x5bd)], b[jw(0xb26)]));
    }
    ['_recordReceived'](a, b) {
        const jx = a0cE, c = {
                'amxHa': function (d, f, g) {
                    return d(f, g);
                },
                'DKOBM': function (d, f) {
                    return d > f;
                }
            };
        this[jx(0xacd)][a] = c[jx(0x9e0)](a0bQ, this[jx(0xacd)][a], [{
                'start': b,
                'length': 0x1
            }]), c[jx(0x6fa)](b, this[jx(0x3b6)][a]) && (this[jx(0x3b6)][a] = b), this[jx(0xedd)][a] = !![];
    }
    ['_applyAck'](a, b) {
        const jy = a0cE, c = {
                'IcjgC': function (m, n) {
                    return m + n;
                },
                'uUuJU': function (m, n) {
                    return m < n;
                },
                'KUpbh': function (m, n) {
                    return m === n;
                },
                'YBkAd': function (m, n) {
                    return m - n;
                },
                'TLRZF': function (m, n) {
                    return m - n;
                },
                'WnbXR': function (m, n) {
                    return m >= n;
                },
                'aNcgA': function (m, n) {
                    return m > n;
                }
            }, d = Date[jy(0x1cf)](), f = this[jy(0x6ee)][a];
        let g = -0x1;
        for (const m of b) {
            g = Math[jy(0x357)](g, c[jy(0xe70)](m[jy(0xc25)], m[jy(0x5bd)]) - 0x1);
        }
        const h = [];
        let i = 0x0, j = null;
        for (const n of f) {
            let o = ![];
            for (const p of b) {
                if (n['pn'] >= p[jy(0xc25)] && c[jy(0x898)](n['pn'], c['IcjgC'](p[jy(0xc25)], p[jy(0x5bd)]))) {
                    o = !![];
                    break;
                }
            }
            if (!o) {
                h[jy(0x6b2)](n);
                continue;
            }
            i += n['bytes'];
            c[jy(0xb14)](n['pn'], g) && n['retransmitted'] !== !![] && (j = c[jy(0x449)](c[jy(0x882)](d, n['time']), Math[jy(0x2d2)](b[jy(0xd37)] || 0x0, this['peerMaxAckDelay'])));
            n[jy(0x50d)] && this[jy(0x5d1)][a]['ack'](n[jy(0x50d)][jy(0xc25)], n[jy(0x50d)][jy(0x5bd)], ![]);
            for (const q of n[jy(0x1b8)]) {
                q[jy(0xa11)][jy(0x73c)]['ack'](q['start'], q[jy(0x5bd)], q['fin']);
            }
        }
        const k = [], l = [];
        for (const r of h) {
            c[jy(0x472)](c[jy(0x449)](g, r['pn']), this[jy(0x54a)]) ? l['push'](r) : k[jy(0x6b2)](r);
        }
        this[jy(0x6ee)][a] = k;
        i && (j !== null && c[jy(0xe67)](j, 0x0) && this[jy(0x5f7)](j), this['onSendProgress'](), this[jy(0x3f0)](i));
        for (const s of l) {
            this[jy(0x8ba)](a, s);
        }
        l[jy(0x5bd)] && this[jy(0x853)](a), c[jy(0xb14)](a, a0bA) && c[jy(0x898)](k[jy(0x5bd)], f[jy(0x5bd)]) && this[jy(0x7d3)]();
    }
    [a0cE(0x3f0)](a) {
        const jz = a0cE, b = {
                'mqddk': function (c, d) {
                    return c < d;
                },
                'TNlDQ': function (c, d) {
                    return c / d;
                },
                'nKrdC': function (c, d) {
                    return c * d;
                }
            };
        b[jz(0x6cb)](this[jz(0xbfc)], this[jz(0xba6)]) ? this[jz(0xbfc)] += a : this['congestionWindow'] += Math[jz(0x357)](0x1, Math[jz(0x513)](b['TNlDQ'](b[jz(0x34c)](this[jz(0x621)], a), this['congestionWindow']))), this[jz(0xbfc)] = Math['min'](this[jz(0xbfc)], this[jz(0x7e0)]);
    }
    [a0cE(0xbbb)](a, b) {
        const jA = a0cE, c = {
                'ZwNvj': function (f, g) {
                    return f > g;
                },
                'ihoWz': function (f, g) {
                    return f === g;
                },
                'puBnb': function (f, g) {
                    return f === g;
                },
                'ayozD': function (f, g) {
                    return f(g);
                },
                'QJTAo': function (f, g) {
                    return f === g;
                },
                'niNXp': function (f, g) {
                    return f & g;
                },
                'kExhJ': function (f, g) {
                    return f & g;
                },
                'sbbhR': function (f, g) {
                    return f(g);
                },
                'zQQFp': function (f, g) {
                    return f & g;
                },
                'CMVjb': function (f, g) {
                    return f !== g;
                },
                'EBwbf': function (f, g) {
                    return f === g;
                },
                'gKIEC': function (f, g) {
                    return f < g;
                },
                'ksDQz': function (f, g) {
                    return f === g;
                },
                'LMNAh': function (f, g) {
                    return f < g;
                },
                'rLjtv': function (f, g) {
                    return f === g;
                },
                'SHHen': function (f, g) {
                    return f === g;
                },
                'SiPNL': function (f, g) {
                    return f !== g;
                },
                'KVmWv': function (f, g) {
                    return f === g;
                },
                'Psbvq': function (f, g) {
                    return f === g;
                },
                'TFpXZ': function (f, g) {
                    return f === g;
                },
                'OtAFQ': function (f, g) {
                    return f + g;
                },
                'DcmJD': jA(0xcde),
                'RdRRQ': jA(0xc68),
                'UNslI': function (f, g) {
                    return f === g;
                },
                'yutEo': function (f, g) {
                    return f < g;
                },
                'OVPSz': function (f, g) {
                    return f + g;
                },
                'reSEz': jA(0x3d0)
            }, d = new a0bI(a);
        while (c[jA(0x926)](d[jA(0xe5b)], 0x0)) {
            const f = d['byte']();
            if (c[jA(0x521)](f, a0bC['padding']))
                continue;
            if (c['puBnb'](f, a0bC[jA(0xca5)]))
                continue;
            if (c[jA(0x45e)](f, a0bC[jA(0xcbc)]) || f === a0bC[jA(0xc83)]) {
                const g = c[jA(0x8fc)](a0bX, d);
                c[jA(0x53c)](f, a0bC['ackEcn']) && (d['varint'](), d[jA(0x90f)](), d[jA(0x90f)]());
                this[jA(0x4b4)](b, g);
                continue;
            }
            if (f === a0bC[jA(0x50d)]) {
                const h = d[jA(0x5e0)](), i = d[jA(0x5e0)]();
                if (d[jA(0xe5b)] < i)
                    return;
                const j = d[jA(0x359)](i), k = this[jA(0x491)][b][jA(0x3ae)](h, j);
                k[jA(0x5bd)] && this[jA(0x70d)](b, k);
                continue;
            }
            if (c[jA(0x521)](c[jA(0x8d2)](f, 0xf8), a0bC[jA(0xa11)])) {
                const l = c[jA(0xc73)](f, 0x7), m = c[jA(0x8fc)](Number, d['varint']()), n = Boolean(c[jA(0xc73)](l, 0x2)), o = c[jA(0xb23)](Boolean, l & 0x4), p = Boolean(c[jA(0x1f8)](l, 0x1));
                let q = 0x0;
                o && (q = d['number']());
                let r = d['remaining'];
                n && (r = d['number']());
                if (d['remaining'] < r)
                    return;
                this[jA(0xd4b)](m, q, d[jA(0x359)](r), p);
                continue;
            }
            if (c[jA(0x45e)](f, a0bC[jA(0x4f1)])) {
                this['peerMaxData'] = Math[jA(0x357)](this[jA(0x259)], d[jA(0x5e0)]());
                continue;
            }
            if (f === a0bC[jA(0x42c)]) {
                const s = d['number'](), t = this[jA(0x1b8)][jA(0x8f4)](s);
                c[jA(0x371)](t, undefined) ? t[jA(0xc7e)] = Math['max'](t[jA(0xc7e)] || 0x0, d[jA(0x5e0)]()) : d[jA(0x90f)]();
                continue;
            }
            if (c[jA(0xcd8)](f, a0bC[jA(0x515)]) || c[jA(0x45e)](f, a0bC[jA(0x7ef)])) {
                d[jA(0x90f)]();
                continue;
            }
            if (c[jA(0x45e)](f, a0bC[jA(0x1a6)])) {
                d[jA(0x90f)](), d[jA(0x90f)]();
                const u = d[jA(0xde3)]();
                if (c[jA(0x1f3)](d['remaining'], u + 0x10))
                    return;
                d[jA(0x359)](u), d[jA(0x359)](0x10);
                continue;
            }
            if (f === a0bC['retireConnectionId']) {
                d[jA(0x90f)]();
                continue;
            }
            if (c['ksDQz'](f, a0bC[jA(0x87c)])) {
                if (c[jA(0x525)](d[jA(0xe5b)], 0x8))
                    return;
                const v = d[jA(0x359)](0x8), w = new a0bH();
                w[jA(0xde3)](a0bC[jA(0x825)])[jA(0x359)](v), this['_queueOneOffFrame'](w[jA(0xdf1)](), b);
                continue;
            }
            if (c['rLjtv'](f, a0bC['pathResponse']))
                continue;
            if (c[jA(0x9a3)](f, a0bC[jA(0x27a)])) {
                this[jA(0x7d3)]();
                continue;
            }
            if (f === a0bC[jA(0x59c)]) {
                const x = d['number']();
                d[jA(0x90f)](), d[jA(0x90f)]();
                const y = this[jA(0x1b8)][jA(0x8f4)](x);
                c[jA(0x6a2)](y, undefined) && (y[jA(0x8d7)] = !![], this[jA(0x57c)](y));
                continue;
            }
            if (c[jA(0x2ae)](f, a0bC[jA(0x369)])) {
                d[jA(0x90f)](), d[jA(0x90f)]();
                continue;
            }
            if (c[jA(0x5b2)](f, a0bC['newToken'])) {
                const z = d[jA(0x5e0)]();
                this[jA(0x919)] = Buffer['from'](d[jA(0x359)](z));
                continue;
            }
            if (c[jA(0x631)](f, a0bC['transportClose']) || c[jA(0xad8)](f, a0bC[jA(0x6f8)])) {
                const A = d[jA(0x5e0)]();
                let B = 0x0;
                f === a0bC[jA(0x842)] && (B = d[jA(0x5e0)]());
                const C = d[jA(0xe5b)] ? d[jA(0x359)](d[jA(0xe5b)])['toString'](jA(0xa4b)) : '';
                this[jA(0xb44)](c[jA(0xec9)](c[jA(0xec9)](c['DcmJD'], A), c[jA(0xd40)]) + C);
                return;
            }
            if (f === a0bC['datagram'] || c['UNslI'](f, a0bC[jA(0x4a5)])) {
                let D = d[jA(0xe5b)];
                c[jA(0x425)](f, a0bC['datagramLen']) && (D = d['number']());
                if (c[jA(0xd6c)](d[jA(0xe5b)], D))
                    return;
                d['bytes'](D);
                continue;
            }
            this['_fail'](c[jA(0xd57)](c[jA(0x20f)], f[jA(0x7d1)](0x10)));
            return;
        }
    }
    ['_queueOneOffFrame'](a, b) {
        const jB = a0cE;
        this[jB(0xedd)][b] = !![], this[jB(0xa03)] = this[jB(0xa03)] || [], this[jB(0xa03)][jB(0x6b2)]({
            'epoch': b,
            'frame': a
        });
    }
    ['_deliverStream'](a, b, c, d) {
        const jC = a0cE, f = {
                'fZHgV': function (i, j) {
                    return i === j;
                },
                'pSWiE': function (i, j) {
                    return i === j;
                },
                'WfXzo': function (i, j) {
                    return i & j;
                },
                'OFdBS': jC(0x4a6),
                'QKKSs': 'local',
                'niYQn': function (i, j) {
                    return i - j;
                },
                'acIuf': function (i, j) {
                    return i / j;
                },
                'wdsKb': function (i, j) {
                    return i + j;
                },
                'BGBMK': function (i, j) {
                    return i < j;
                },
                'SrWRR': function (i, j) {
                    return i - j;
                },
                'MPtSM': function (i, j) {
                    return i + j;
                }
            };
        let g = this[jC(0x1b8)][jC(0x8f4)](a);
        f['fZHgV'](g, undefined) && (g = new a0c4(this, a, f['pSWiE'](f[jC(0x38d)](a, 0x1), 0x1) ? f['OFdBS'] : f[jC(0x4b2)]), this[jC(0x1b8)][jC(0x9c3)](a, g), this[jC(0x641)](g));
        const h = g[jC(0x89f)][jC(0x3ae)](b, c);
        if (h[jC(0x5bd)]) {
            const i = '1|3|2|0|5|4'[jC(0xa24)]('|');
            let j = 0x0;
            while (!![]) {
                switch (i[j++]) {
                case '0':
                    f['niYQn'](g[jC(0x62e)], g[jC(0x908)][jC(0x5bd)]) < f[jC(0xeea)](this['receiveWindow'], 0x2) && (g[jC(0x62e)] = f[jC(0xa74)](g[jC(0x908)][jC(0x5bd)], this['receiveWindow']), this['creditReady']['indexOf'](g) < 0x0 && this[jC(0x7a4)][jC(0x6b2)](g));
                    continue;
                case '1':
                    g[jC(0x908)] = Buffer[jC(0xbbc)]([
                        g[jC(0x908)],
                        h
                    ]);
                    continue;
                case '2':
                    f[jC(0xc2b)](f['SrWRR'](this['localMaxData'], this[jC(0xb2a)]), f[jC(0xeea)](this['receiveWindow'], 0x2)) && (this[jC(0x581)] = f[jC(0x46c)](this['consumedTotal'], this[jC(0x89d)]), this['creditMaxData'] = !![]);
                    continue;
                case '3':
                    this[jC(0xb2a)] += h[jC(0x5bd)];
                    continue;
                case '4':
                    this[jC(0xe71)]();
                    continue;
                case '5':
                    this[jC(0xe6a)](g, h);
                    continue;
                }
                break;
            }
        }
        d && !g[jC(0x396)] && f[jC(0x325)](g[jC(0x89f)][jC(0xa4d)], g[jC(0x908)][jC(0x5bd)]) && (g[jC(0x396)] = !![], this[jC(0x57c)](g));
    }
    [a0cE(0xe71)]() {
        const jD = a0cE;
        !this[jD(0xbdc)] && this[jD(0xab6)]();
    }
    [a0cE(0x70d)](a, b) {
        const jE = a0cE, c = {
                'EVRGl': function (d, f) {
                    return d === f;
                },
                'GGnAu': function (d, f) {
                    return d === f;
                },
                'AeKZA': jE(0xc0c),
                'hrMPX': function (d, f) {
                    return d + f;
                },
                'WxBLB': function (d, f) {
                    return d === f;
                },
                'FJdlH': 'server\x20hello:\x20',
                'tqDev': jE(0xb8a)
            };
        if (c[jE(0x80e)](a, a0bA))
            return;
        if (c[jE(0x80e)](a, a0by) && c[jE(0x23b)](this[jE(0x7d2)][jE(0x916)], c[jE(0x4ca)])) {
            this[jE(0x1d6)] = Buffer[jE(0xbbc)]([
                this[jE(0x1d6)],
                b
            ]);
            let d;
            try {
                d = this[jE(0x7d2)][jE(0x668)](this[jE(0x1d6)]);
            } catch (g) {
                this[jE(0xb44)](c['hrMPX'](jE(0x8cb), g[jE(0x921)]));
                return;
            }
            if (c[jE(0x201)](d, null))
                return;
            this[jE(0x1d6)] = Buffer[jE(0xd4a)](0x0);
            let f;
            try {
                f = this['tls'][jE(0x277)](Buffer[jE(0x5a6)](d));
            } catch (h) {
                this['_fail'](c[jE(0xcc6)](c[jE(0x8b6)], h[jE(0x921)]));
                return;
            }
            this[jE(0x4ff)][a0bz] = f, this['log'][jE(0x8ab)](c[jE(0x6ce)]);
            return;
        }
        this[jE(0x7de)] = Buffer['concat']([
            this[jE(0x7de)],
            b
        ]), this[jE(0x2f3)]();
    }
    [a0cE(0x2f3)]() {
        const jF = a0cE, a = {
                'nGwtW': function (b, c) {
                    return b >= c;
                },
                'mFRAX': function (b, c) {
                    return b + c;
                },
                'EWAfP': function (b, c) {
                    return b < c;
                },
                'HJjSt': 'handshake\x20message:\x20',
                'RwoJf': function (b, c) {
                    return b === c;
                },
                'FQflK': jF(0x62b),
                'wuvSW': function (b, c) {
                    return b === c;
                },
                'pWGsF': jF(0xb77),
                'ZpySy': '\x20stream=',
                'iRXhD': function (b, c) {
                    return b !== c;
                },
                'okmnr': function (b, c) {
                    return b + c;
                },
                'xJLfy': jF(0xa4a),
                'vfSWn': 'server\x20Finished\x20verify_data\x20mismatch',
                'JaEKW': function (b, c) {
                    return b + c;
                },
                'EwxJc': jF(0x7b3)
            };
        while (a[jF(0x429)](this[jF(0x7de)]['length'], 0x4)) {
            const b = a[jF(0x31d)](0x4, this[jF(0x7de)][jF(0x5e7)](0x1, 0x3));
            if (a[jF(0x725)](this['handshakeBytes']['length'], b))
                return;
            const c = Buffer[jF(0x5a6)](this[jF(0x7de)]['subarray'](0x0, b));
            this[jF(0x7de)] = this[jF(0x7de)][jF(0x516)](b);
            let d;
            try {
                d = this[jF(0x7d2)][jF(0xad9)](c);
            } catch (f) {
                this['_fail'](a[jF(0x31d)](a[jF(0x168)], f[jF(0x921)]));
                return;
            }
            if (this[jF(0x7d2)][jF(0x53d)] && a['RwoJf'](this[jF(0x53d)], null)) {
                const g = a[jF(0x679)][jF(0xa24)]('|');
                let h = 0x0;
                while (!![]) {
                    switch (g[h++]) {
                    case '0':
                        this[jF(0xaa0)] = this['tls'][jF(0x53d)][a0bD[jF(0xd5b)]] || 0x0;
                        continue;
                    case '1':
                        this['peerStreamRemote'] = this[jF(0x7d2)][jF(0x53d)][a0bD[jF(0x4cd)]] || 0x0;
                        continue;
                    case '2':
                        this[jF(0x53d)] = this[jF(0x7d2)][jF(0x53d)];
                        continue;
                    case '3':
                        this[jF(0xcef)] = Math[jF(0x2d2)](a['wuvSW'](this[jF(0x7d2)][jF(0x53d)][a0bD[jF(0xbeb)]], undefined) ? 0x19 : this[jF(0x7d2)][jF(0x53d)][a0bD[jF(0xbeb)]], 0x64);
                        continue;
                    case '4':
                        this[jF(0xabe)][jF(0x8ab)](a[jF(0x31d)](a[jF(0x31d)](a[jF(0x31d)](a[jF(0x31d)](a['mFRAX'](a[jF(0xdef)], this[jF(0x259)]), a[jF(0x1bc)]), this[jF(0xd6e)]), jF(0xc5d)), this[jF(0x7d2)][jF(0x53d)][a0bD['maxIdleTimeout']] || 0x0));
                        continue;
                    case '5':
                        this[jF(0x259)] = this[jF(0x7d2)][jF(0x53d)][a0bD[jF(0x38a)]] || 0x0;
                        continue;
                    }
                    break;
                }
            }
            if (a[jF(0x9ce)](d, null)) {
                if (this[jF(0x953)]) {
                    const i = a0c3(this[jF(0x7d2)]['leafCert']);
                    if (i) {
                        this['_fail'](a[jF(0xcb6)](a[jF(0xe8e)], i));
                        return;
                    }
                }
                this[jF(0x4ff)][a0bA] = {
                    'send': d[jF(0x73c)],
                    'recv': d[jF(0x908)]
                }, this[jF(0xb88)] = [{
                        'keys': d[jF(0x908)],
                        'phase': 0x0
                    }], this[jF(0x6bf)][0x0] = d[jF(0x73c)], this[jF(0x5d1)][a0bz][jF(0x52b)](d[jF(0x9c6)], ![]), this['handshakeComplete'] = !![];
                !d[jF(0xe49)] && this[jF(0xabe)][jF(0xa39)](a['vfSWn']);
                this['log'][jF(0x8ab)](a['JaEKW'](a['EwxJc'], this[jF(0x7d2)][jF(0x501)] || '?'));
                if (a[jF(0x9ce)](this[jF(0x15a)], null)) {
                    const j = this['settle'];
                    this[jF(0x15a)] = null, j['resolve'](this);
                }
                this['onReady']();
                return;
            }
        }
    }
    [a0cE(0x675)](a) {
        const jG = a0cE, b = {
                'LEbSP': function (c, d) {
                    return c || d;
                },
                'QSIgd': jG(0x675),
                'bYGhm': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (this['closed'])
            return;
        this['closing'] = !![], this[jG(0xdcb)] = b[jG(0xe91)](a, b['QSIgd']), this[jG(0xab6)](), b[jG(0x3a6)](setTimeout, () => this[jG(0x5c1)](null), 0xc8);
    }
    ['_fail'](a) {
        const jH = a0cE, b = { 'SOlQa': 'quic\x20closed:\x20' };
        if (this['closed'])
            return;
        this['log'][jH(0x8ab)](b[jH(0x47f)] + a), this[jH(0x5c1)](new Error(a));
    }
    ['_finish'](a) {
        const jI = a0cE, b = {
                'OrUge': jI(0xbdc),
                'lFBVD': function (c, d) {
                    return c !== d;
                },
                'ecyuk': function (c, d) {
                    return c(d);
                },
                'nQKaS': function (c, d) {
                    return c !== d;
                },
                'GbsfA': function (c, d) {
                    return c !== d;
                }
            };
        if (this[jI(0xbdc)])
            return;
        this[jI(0xbdc)] = a ? a[jI(0x921)] : b[jI(0x8c0)];
        b['lFBVD'](this[jI(0x9a1)], null) && (b[jI(0x278)](clearInterval, this['interval']), this['interval'] = null);
        if (b[jI(0x46f)](this['socket'], null)) {
            try {
                this[jI(0xb2c)][jI(0x675)]();
            } catch (c) {
            }
            this['socket'] = null;
        }
        if (!this[jI(0x710)] && b[jI(0xa8c)](this[jI(0x15a)], null)) {
            const d = this['settle'];
            this[jI(0x15a)] = null, d[jI(0x6c8)](a || new Error(jI(0xecd)));
        } else
            this[jI(0x952)](a);
    }
}
function a0c6(a, b) {
    const jJ = a0cE, c = {
            'IEarn': function (f, g) {
                return f === g;
            }
        }, d = [];
    for (const [f, g] of a) {
        c['IEarn'](f[jJ(0x846)](), b) && d[jJ(0x6b2)](g);
    }
    return d;
}
function a0c7(a) {
    const jK = a0cE, b = {
            'luGQQ': function (i, j) {
                return i >= j;
            },
            'LRSow': function (i, j) {
                return i !== j;
            },
            'PMBXQ': function (i, j) {
                return i + j;
            },
            'zvFPO': function (i, j) {
                return i + j;
            },
            'OpwxS': jK(0x97a),
            'miJop': jK(0x4c1),
            'VlgGC': function (i, j) {
                return i + j;
            },
            'cwdcA': function (i, j) {
                return i(j);
            },
            'DpTDk': 'content-length',
            'gFbLv': function (i, j, k) {
                return i(j, k);
            },
            'nictt': 'chunked',
            'KdBwX': 'GET',
            'PohCu': function (i, j) {
                return i + j;
            },
            'KPuiR': function (i, j) {
                return i > j;
            },
            'ygOWZ': function (i, j) {
                return i > j;
            }
        }, c = new Map(), d = [];
    for (const [i, j] of a['metadata']) {
        if (b['luGQQ'](i[jK(0x1a7)](a0bo), 0x0)) {
            const k = i[jK(0xa24)](':');
            if (b['LRSow'](k[jK(0x5bd)], 0x2))
                throw new Error(b[jK(0xb9d)](b[jK(0x2be)](b[jK(0xc92)], i), b['miJop']));
            d[jK(0x6b2)]([
                k[0x1],
                j
            ]);
        } else
            c[jK(0x9c3)](i, j);
    }
    let f = a[jK(0xbda)];
    try {
        const l = new URL(a[jK(0xbda)]);
        f = b['VlgGC'](l[jK(0xa88)], l[jK(0xc0b)]);
    } catch (m) {
        f = a[jK(0xbda)];
    }
    const g = b[jK(0x5dc)](Number, a0c6(d, b[jK(0xdcd)])[0x0]), h = b[jK(0x6d9)](a0c6, d, 'transfer-encoding')[jK(0x3ec)](',')[jK(0x846)]()[jK(0x18c)](b[jK(0x23f)]);
    return {
        'type': a[jK(0x3d4)],
        'method': c[jK(0x8f4)](a0bl) || b[jK(0x68a)],
        'host': c[jK(0x8f4)](a0bm) || '',
        'path': f[jK(0x2da)]('/') ? f : b[jK(0xc14)]('/', f),
        'headers': d,
        'contentLength': Number[jK(0xd74)](g) && b[jK(0x272)](g, 0x0) ? g : null,
        'bodyless': !h && !(Number['isInteger'](g) && b[jK(0x5f6)](g, 0x0))
    };
}
function a0c8(a) {
    const jL = a0cE, b = {
            'rCYhx': function (d, f) {
                return d !== f;
            },
            'VCAhB': function (d, f) {
                return d >= f;
            }
        }, c = a[jL(0x597)];
    if (c[jL(0x174)])
        return !![];
    if (a['ended'])
        return !![];
    return b[jL(0xbb5)](c[jL(0xc65)], null) && b['VCAhB'](a[jL(0xbd5)][jL(0x5bd)], c[jL(0xc65)]);
}
class a0c9 {
    constructor(a, b, c, d, f) {
        const jM = a0cE;
        this[jM(0x177)] = a, this['state'] = b, this[jM(0x597)] = c, this[jM(0xbad)] = d, this[jM(0xabe)] = f, this['queue'] = [], this[jM(0x615)] = [], this['stopped'] = ![], this['sock'] = null;
    }
    [a0cE(0x65f)](a) {
        const jN = a0cE, b = {
                'vscTM': function (c, d) {
                    return c === d;
                }
            };
        if (b[jN(0xa5f)](a, null))
            this['queue'][jN(0x6b2)](null);
        else
            a[jN(0x5bd)] && this[jN(0x57a)]['push'](a);
        this[jN(0xe71)]();
    }
    [a0cE(0x55c)]() {
        const jO = a0cE, a = {
                'zKemA': function (b, c) {
                    return b !== c;
                }
            };
        if (this[jO(0x58d)])
            return;
        this[jO(0x58d)] = !![], this[jO(0xe71)]();
        if (a['zKemA'](this[jO(0x296)], null))
            try {
                this[jO(0x296)][jO(0x2fe)]();
            } catch (b) {
            }
    }
    [a0cE(0xe71)]() {
        const jP = a0cE, a = {
                'IsBQM': function (b) {
                    return b();
                }
            };
        for (const b of this[jP(0x615)]) {
            a[jP(0x40e)](b);
        }
        this[jP(0x615)] = [];
    }
    async ['_next']() {
        const jQ = a0cE;
        while (!this[jQ(0x58d)]) {
            if (this[jQ(0x57a)][jQ(0x5bd)])
                return this[jQ(0x57a)]['shift']();
            await new Promise(a => this[jQ(0x615)][jQ(0x6b2)](a));
        }
        return null;
    }
    async [a0cE(0xc15)]() {
        const jR = a0cE, a = {
                'YWgwy': function (b, c) {
                    return b(c);
                },
                'ZjYjN': function (b, c) {
                    return b !== c;
                },
                'ChgXg': function (b, c) {
                    return b + c;
                },
                'rcfuv': function (b, c) {
                    return b === c;
                },
                'KSqKu': 'transfer-encoding',
                'lxjXR': function (b, c) {
                    return b === c;
                },
                'ZjRMB': jR(0xc49),
                'hgzKG': jR(0x638),
                'EVCxO': function (b, c) {
                    return b + c;
                },
                'AOyup': function (b, c) {
                    return b + c;
                },
                'LBuay': function (b, c) {
                    return b + c;
                },
                'mENbL': function (b, c) {
                    return b + c;
                },
                'AzLGf': jR(0x918),
                'RzDGo': jR(0xb1c)
            };
        try {
            this[jR(0x296)] = await a[jR(0xa91)](a0ba, this[jR(0xbad)]), this['sendHandshake']();
            const b = await a0bd(this[jR(0x296)]);
            if (a[jR(0xca6)](b[jR(0x4f2)], 0x65)) {
                this[jR(0x177)]['writeResponse'](this[jR(0x916)][jR(0xa11)], a['ChgXg'](jR(0xa97), b[jR(0x4f2)]), [[
                        a0bn,
                        String(b['status'])
                    ]], !![]);
                try {
                    this['sock'][jR(0x2fe)]();
                } catch (d) {
                }
                return;
            }
            const c = [[
                    a0bn,
                    String(b[jR(0x4f2)])
                ]];
            for (const [f, g] of b[jR(0x5c2)]) {
                const h = f[jR(0x846)]();
                if (a[jR(0xb7e)](h, a['KSqKu']) || a[jR(0x384)](h, 'content-length'))
                    continue;
                if (h['startsWith'](a['ZjRMB']) || h['startsWith'](jR(0x696)) || h[jR(0x2da)](a[jR(0x9fc)]))
                    continue;
                c['push']([
                    a[jR(0x333)](a[jR(0x333)](a0bo, ':'), f),
                    g
                ]);
            }
            this[jR(0x177)]['writeResponse'](this[jR(0x916)][jR(0xa11)], '', c, ![]), this[jR(0xcaa)]()[jR(0xea2)](() => {
            }), await this[jR(0xcbf)](b[jR(0x16e)]);
        } catch (i) {
            this['log'][jR(0xa39)](a[jR(0xbac)](a[jR(0x338)](a[jR(0xb3b)](a[jR(0x3a7)], this[jR(0x916)][jR(0xa11)]['id']), a[jR(0xe92)]), i)), this[jR(0x177)][jR(0xc36)](this[jR(0x916)], a[jR(0xa91)](String, i[jR(0x921)] || i), 0x1f6);
        } finally {
            this[jR(0x55c)]();
        }
    }
    async [a0cE(0xcbf)](a) {
        const jS = a0cE;
        a[jS(0x5bd)] && this[jS(0x916)]['stream'][jS(0xeb4)](a, ![]);
        for await (const b of this[jS(0x296)]) {
            if (this[jS(0x58d)])
                break;
            this['state'][jS(0xa11)][jS(0xeb4)](b, ![]);
        }
        !this['stopped'] && this[jS(0x916)][jS(0xa11)][jS(0xeb4)](Buffer[jS(0xd4a)](0x0), !![]);
    }
    async [a0cE(0xcaa)]() {
        const jT = a0cE, a = {
                'gqEqk': function (b, c) {
                    return b === c;
                }
            };
        while (!this['stopped']) {
            const b = await this['_next']();
            if (a[jT(0x1c0)](b, null)) {
                try {
                    this[jT(0x296)][jT(0x3a9)]();
                } catch (c) {
                }
                return;
            }
            try {
                this[jT(0x296)][jT(0xeb4)](b);
            } catch (d) {
                this['stopped'] = !![];
                return;
            }
        }
    }
    [a0cE(0x35b)]() {
        const jU = a0cE, a = {
                'EnXjv': function (i, j) {
                    return i + j;
                },
                'RDhKq': jU(0x392),
                'fCbKN': function (i, j) {
                    return i === j;
                },
                'ABwZo': jU(0xe9c),
                'xQplm': jU(0xdf2),
                'lRsYL': jU(0xeaa),
                'Wrfns': function (i, j) {
                    return i === j;
                },
                'qbRDJ': 'content-length',
                'BpjGD': function (i, j) {
                    return i === j;
                },
                'FpHwh': function (i, j) {
                    return i === j;
                },
                'llsox': 'sec-websocket-key',
                'cEtdt': function (i, j) {
                    return i === j;
                },
                'Gpxup': 'sec-websocket-version',
                'wcJYe': function (i, j) {
                    return i === j;
                },
                'Guqfm': jU(0xbad),
                'LeuwY': function (i, j) {
                    return i + j;
                },
                'GxFni': jU(0x92a),
                'XUJyR': 'Origin:\x20https://',
                'OGFuy': jU(0x1db),
                'xImNU': jU(0x81a),
                'otKJb': jU(0x70f)
            }, b = new URL(this['origin']), c = this[jU(0x597)][jU(0x20c)][jU(0x2da)]('/') ? this['request'][jU(0x20c)] : '/' + this[jU(0x597)]['path'], d = [a['EnXjv'](a[jU(0x8cf)], c) + jU(0x8fb)];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this['request'][jU(0x5c2)]) {
            const k = i['toLowerCase']();
            if (a['fCbKN'](k, a[jU(0x865)]) || a[jU(0xb74)](k, a[jU(0x204)]) || a[jU(0xb74)](k, a[jU(0xe43)]) || a['Wrfns'](k, a[jU(0x66c)]) || a[jU(0xd12)](k, jU(0x831)))
                continue;
            if (a['FpHwh'](k, a[jU(0x28f)]))
                f = !![];
            else {
                if (a[jU(0xbd1)](k, a[jU(0xed9)]))
                    g = !![];
                else
                    a[jU(0x6f3)](k, a[jU(0x57d)]) && (h = !![]);
            }
            d['push'](a['LeuwY'](a[jU(0x2c7)](i, ':\x20'), j));
        }
        d['push'](a['LeuwY'](a[jU(0xd0c)], b['host'])), !h && this['request'][jU(0xe9c)] && d[jU(0x6b2)](a[jU(0x2c7)](a[jU(0x51c)], this['request']['host'])), !f && d[jU(0x6b2)](a[jU(0x657)](a['OGFuy'], a0k[jU(0x4ea)](0x10)[jU(0x7d1)](a[jU(0x227)]))), !g && d['push'](jU(0x7f7)), d['push'](jU(0x7d8)), d[jU(0x6b2)](jU(0xc03)), this[jU(0x296)][jU(0xeb4)](Buffer['from'](a[jU(0x657)](d[jU(0x3ec)]('\x0d\x0a'), '\x0d\x0a\x0d\x0a'), a[jU(0x22f)]));
    }
}
class a0ca {
    constructor(a, b, c, d, f, g, h) {
        const jV = a0cE, i = { 'hMMux': '13|1|12|7|11|4|9|14|5|3|16|8|15|2|6|10|0' }, j = i['hMMux'][jV(0xa24)]('|');
        let k = 0x0;
        while (!![]) {
            switch (j[k++]) {
            case '0':
                this[jV(0x7f0)][jV(0x952)] = l => this[jV(0x55c)](l);
                continue;
            case '1':
                this[jV(0xbad)] = b;
                continue;
            case '2':
                this['conn']['onStream'] = l => this[jV(0x9cb)](l);
                continue;
            case '3':
                this[jV(0x1ca)] = new Set();
                continue;
            case '4':
                this[jV(0xe57)] = g;
                continue;
            case '5':
                this[jV(0xbdd)] = new Map();
                continue;
            case '6':
                this[jV(0x7f0)][jV(0xe6a)] = (l, m) => this[jV(0x967)](l, m);
                continue;
            case '7':
                this[jV(0x69b)] = d;
                continue;
            case '8':
                this[jV(0x15a)] = null;
                continue;
            case '9':
                this[jV(0xabe)] = h;
                continue;
            case '10':
                this[jV(0x7f0)][jV(0x57c)] = l => this[jV(0x5c3)](l);
                continue;
            case '11':
                this[jV(0x71e)] = f;
                continue;
            case '12':
                this[jV(0x924)] = c;
                continue;
            case '13':
                this[jV(0x7f0)] = a;
                continue;
            case '14':
                this[jV(0x8de)] = null;
                continue;
            case '15':
                this[jV(0x2b1)] = new Promise((l, m) => {
                    const jW = jV;
                    this[jW(0x15a)] = {
                        'resolve': l,
                        'reject': m
                    };
                });
                continue;
            case '16':
                this['stopped'] = ![];
                continue;
            }
            break;
        }
    }
    [a0cE(0xc15)]() {
        const jX = a0cE, a = this[jX(0x7f0)][jX(0x940)]();
        return this[jX(0x8de)] = new a0b9(this[jX(0x7f0)], a['id'], this['log'], { 'quic': !![] }), this[jX(0x8de)][jX(0xc25)](this[jX(0x924)], this['tunnelSecret'], this[jX(0x71e)], this['connIndex']), this[jX(0x2b1)];
    }
    [a0cE(0x55c)](a) {
        const jY = a0cE;
        if (this[jY(0x58d)])
            return;
        this[jY(0x58d)] = !![], this[jY(0xbdd)][jY(0xb81)]();
        for (const b of this['relays']) {
            b['stop']();
        }
        this[jY(0x1ca)]['clear'](), a ? this[jY(0x15a)][jY(0x6c8)](a) : this[jY(0x15a)][jY(0xe51)]();
    }
    [a0cE(0x9cb)](a) {
        const jZ = a0cE;
        if ((a['id'] & 0x3) !== 0x1)
            return;
        this['requests']['set'](a['id'], {
            'stream': a,
            'buffer': Buffer[jZ(0xd4a)](0x0),
            'body': Buffer['alloc'](0x0),
            'request': null,
            'websocket': ![],
            'relay': null,
            'ended': ![],
            'served': ![],
            'failed': ![]
        });
    }
    ['receiveStream'](a, b) {
        const k0 = a0cE, c = {
                'dIPCQ': function (f, g) {
                    return f === g;
                },
                'ydWCw': function (f, g) {
                    return f === g;
                },
                'tHiWM': function (f, g) {
                    return f !== g;
                }
            };
        if (this[k0(0x8de)] !== null && c[k0(0x335)](a['id'], this['control']['streamId'])) {
            this[k0(0x8de)][k0(0x65f)](b);
            return;
        }
        const d = this[k0(0xbdd)]['get'](a['id']);
        if (d === undefined || d[k0(0x288)])
            return;
        if (c[k0(0xec0)](d['request'], null))
            d[k0(0x693)] = Buffer['concat']([
                d['buffer'],
                b
            ]), this[k0(0x51e)](d);
        else
            b[k0(0x5bd)] && (d[k0(0x1b5)] && c[k0(0x701)](d[k0(0x76a)], null) ? d[k0(0x76a)][k0(0x65f)](b) : d[k0(0xbd5)] = Buffer[k0(0xbbc)]([
                d[k0(0xbd5)],
                b
            ]));
        this[k0(0x57e)](d);
    }
    [a0cE(0x5c3)](a) {
        const k1 = a0cE, b = {
                'cYNYk': function (d, f) {
                    return d === f;
                },
                'eAzaB': function (d, f) {
                    return d === f;
                }
            };
        if (this[k1(0x8de)] !== null && b[k1(0xeeb)](a['id'], this[k1(0x8de)][k1(0x2c2)])) {
            this[k1(0x8de)][k1(0x9c6)] = !![];
            return;
        }
        const c = this[k1(0xbdd)][k1(0x8f4)](a['id']);
        if (b[k1(0xa8b)](c, undefined))
            return;
        c['ended'] = !![];
        if (c[k1(0x1b5)] && c[k1(0x76a)] !== null) {
            c[k1(0x76a)][k1(0x65f)](null);
            return;
        }
        c[k1(0x597)] !== null ? this['maybeServe'](c) : this[k1(0xbdd)][k1(0x342)](a['id']);
    }
    [a0cE(0x51e)](a) {
        const k2 = a0cE, b = {
                'RCKdT': function (h, i) {
                    return h < i;
                },
                'tYOEn': function (h, i) {
                    return h + i;
                },
                'QXTWG': function (h, i) {
                    return h + i;
                },
                'NVCEY': '\x20is\x20not\x20a\x20v1\x20tunnel\x20data\x20stream',
                'etVAH': k2(0x70f),
                'cFRin': function (h, i) {
                    return h + i;
                },
                'gIwaG': k2(0x1f1),
                'mUofB': k2(0xdb1),
                'ScPVf': function (h, i) {
                    return h(i);
                },
                'JagDo': function (h, i) {
                    return h + i;
                },
                'yliYV': function (h, i) {
                    return h(i);
                },
                'wZyrp': function (h, i) {
                    return h === i;
                },
                'pJkcn': function (h, i) {
                    return h + i;
                }
            }, c = a['buffer'];
        if (b[k2(0x667)](c[k2(0x5bd)], a0bi[k2(0x5bd)]))
            return;
        if (!c[k2(0x516)](0x0, a0bg[k2(0x5bd)])['equals'](a0bg)) {
            this[k2(0xabe)][k2(0xa39)](b[k2(0x92b)](b[k2(0x93d)](k2(0x1f1), a[k2(0xa11)]['id']), b[k2(0x310)])), a[k2(0x288)] = !![];
            return;
        }
        if (c[k2(0x516)](0x6, 0x8)['toString'](b[k2(0x1c4)]) !== '01') {
            this['log'][k2(0xa39)](b[k2(0x93d)](b[k2(0xd49)](b['gIwaG'], a[k2(0xa11)]['id']) + b[k2(0x8a7)], c[k2(0x516)](0x6, 0x8)[k2(0x7d1)](k2(0x70f)))), a[k2(0x288)] = !![];
            return;
        }
        const [d, f] = a0aS(c[k2(0x516)](a0bi[k2(0x5bd)]), 0x1);
        if (!d['length'])
            return;
        let g;
        try {
            g = b[k2(0xb0e)](a0aY, d[0x0]);
        } catch (h) {
            this[k2(0xabe)]['warning'](b['JagDo'](b[k2(0x2b0)](k2(0x1f1), a['stream']['id']) + k2(0xc47), h)), a[k2(0x288)] = !![];
            return;
        }
        a[k2(0xbd5)] = f, a[k2(0x693)] = Buffer[k2(0xd4a)](0x0);
        try {
            a['request'] = b[k2(0xebd)](a0c7, g), b[k2(0xca1)](a[k2(0x597)]['type'], a0bk[k2(0x1b5)]) && (a[k2(0x1b5)] = !![]);
        } catch (i) {
            this[k2(0xabe)][k2(0xa39)](b['pJkcn'](b['cFRin']('stream\x20' + a[k2(0xa11)]['id'], ':\x20'), i)), a[k2(0x288)] = !![], this['respond'](a, b[k2(0xb0e)](String, i[k2(0x921)] || i), 0x1f6);
        }
    }
    [a0cE(0x57e)](a) {
        const k3 = a0cE, b = {
                'KxWLi': function (c, d) {
                    return c === d;
                }
            };
        if (a[k3(0xe8d)] || b[k3(0x6c7)](a[k3(0x597)], null) || a[k3(0x288)] || !a0c8(a))
            return;
        a['served'] = !![], this[k3(0x55e)](a);
    }
    async [a0cE(0x55e)](a) {
        const k4 = a0cE, b = {
                'crUln': function (f, g) {
                    return f === g;
                },
                'fynWy': function (f, g) {
                    return f !== g;
                },
                'hMcUt': function (f, g) {
                    return f + g;
                },
                'AzmoZ': function (f, g) {
                    return f + g;
                },
                'OQmhb': 'tunnel\x20connection\x20type\x20',
                'vGobp': '\x20is\x20not\x20proxied\x20over\x20QUIC\x20yet',
                'vYrdJ': function (f, g, h, i, j, k) {
                    return f(g, h, i, j, k);
                },
                'sZxcw': function (f, g) {
                    return f(g);
                },
                'GzZek': function (f, g) {
                    return f === g;
                },
                'qhzSJ': k4(0x831),
                'WmFrT': k4(0xb55),
                'BydCT': function (f, g) {
                    return f + g;
                },
                'QMocg': function (f, g) {
                    return f(g);
                },
                'IgZMM': k4(0x8a3),
                'VZqGJ': function (f, g) {
                    return f + g;
                },
                'vFqFi': function (f, g) {
                    return f + g;
                },
                'lSkTC': k4(0x1f1)
            }, c = a[k4(0xa11)], d = a['request'];
        try {
            if (b[k4(0x905)](d[k4(0x3d4)], a0bk[k4(0x1b5)])) {
                this['serveWebsocket'](a);
                return;
            }
            if (b['fynWy'](d[k4(0x3d4)], a0bk[k4(0xd2d)]))
                throw new Error(b['hMcUt'](b[k4(0xe28)](b[k4(0x77f)], d[k4(0x3d4)]), b[k4(0xb1f)]));
            const f = await b[k4(0x24c)](a0bc, this['origin'], d[k4(0xed6)], d[k4(0x20c)], d[k4(0x5c2)], a['body']), g = [[
                        a0bn,
                        b[k4(0xcd7)](String, b[k4(0xeb0)](f[k4(0x4f2)], 0x65) ? 0xc8 : f['status'])
                    ]];
            let h = ![];
            for (const [i, j] of f['headers']) {
                const k = i[k4(0x846)]();
                if (k === b[k4(0x754)])
                    continue;
                b[k4(0x905)](k, b[k4(0x26a)]) && (h = !![]), g[k4(0x6b2)]([
                    b[k4(0x84b)](a0bo + ':', i),
                    j
                ]);
            }
            if (!h) {
                const l = b[k4(0xda4)](a0b1, d[k4(0x20c)]);
                l && g[k4(0x6b2)]([
                    b['AzmoZ'](a0bo, b[k4(0x747)]),
                    l
                ]);
            }
            this[k4(0x781)](c, '', g, ![]);
            for await (const m of f[k4(0xbd5)]) {
                c['write'](m, ![]);
            }
            c[k4(0xeb4)](Buffer[k4(0xd4a)](0x0), !![]);
        } catch (n) {
            this['log']['warning'](b[k4(0x91f)](b[k4(0x91f)](b[k4(0xdcf)](b[k4(0x220)], c['id']), k4(0xc79)), n)), this['respond'](a, b[k4(0xda4)](String, n[k4(0x921)] || n), 0x1f6);
        } finally {
            !a['websocket'] && this[k4(0xbdd)]['delete'](c['id']);
        }
    }
    [a0cE(0xb59)](a) {
        const k5 = a0cE, b = new a0c9(this, a, a['request'], this[k5(0xbad)], this[k5(0xabe)]);
        a[k5(0x76a)] = b, this['relays'][k5(0x70c)](b), a[k5(0xbd5)][k5(0x5bd)] && (b[k5(0x65f)](a[k5(0xbd5)]), a[k5(0xbd5)] = Buffer[k5(0xd4a)](0x0)), b[k5(0xc15)]()[k5(0xea2)](() => {
        })[k5(0xc98)](() => {
            const k6 = k5;
            this[k6(0x1ca)][k6(0x342)](b), this[k6(0xbdd)][k6(0x342)](a['stream']['id']);
        });
    }
    ['respond'](a, b, c) {
        const k7 = a0cE, d = {
                'mKRNJ': function (f, g) {
                    return f(g);
                }
            };
        this['writeResponse'](a[k7(0xa11)], b, [[
                a0bn,
                d[k7(0x627)](String, c)
            ]], !![]);
    }
    [a0cE(0x781)](a, b, c, d) {
        const k8 = a0cE;
        if (this[k8(0x58d)] || a[k8(0x73c)][k8(0x7f3)])
            return;
        a['write'](Buffer['concat']([
            a0bi,
            a0aZ(b, c)
        ]), d);
    }
}
async function a0cb(a, b, c) {
    const k9 = a0cE, d = {
            'ARRps': function (h, i) {
                return h === i;
            },
            'jrvyz': function (h, i) {
                return h + i;
            },
            'Cwbjc': k9(0x5ba),
            'OQtHc': k9(0x879),
            'oRIZS': 'edge\x20connect\x20failed',
            'xzlsr': function (h, i) {
                return h + i;
            }
        }, f = a0ay[k9(0x523)]()[k9(0xa87)](() => Math[k9(0x729)]() - 0.5);
    let g = null;
    for (const h of f) {
        const i = new a0c5({
            'logger': a,
            'host': h,
            'port': a0az,
            'serverName': a0br,
            'alpn': a0bq,
            'idleTimeout': d[k9(0x6c5)](b, undefined) ? 0x7530 : b,
            'verifyCertificate': d['ARRps'](c, !![])
        });
        try {
            return await i[k9(0xb41)](), a[k9(0x5a5)](d['jrvyz'](d[k9(0x152)](d[k9(0x608)], h) + ':', a0az) + k9(0xbec)), i;
        } catch (j) {
            g = j, a['warning'](d['jrvyz'](d['jrvyz'](d[k9(0x96a)] + h, k9(0xb1c)), j[k9(0x921)]));
            try {
                i[k9(0x675)](d[k9(0x645)]);
            } catch (k) {
            }
        }
    }
    throw new Error(d['xzlsr'](k9(0x582), g));
}
const a0cc = 0x2;
function a0cd(a, b, c) {
    const ka = a0cE, d = {
            'mRzCT': function (g, h, i) {
                return g(h, i);
            }
        }, f = d[ka(0x9b9)](parseInt, process.env[a] || '', 0xa);
    if (!Number[ka(0xd74)](f) || f < c)
        return b;
    return f;
}
const a0ce = a0cd(a0cE(0x9c4), 0x5, 0x2), a0cf = 0x1e, a0cg = a0cd(a0cE(0xc56), 0x2, 0x1), a0ch = a0cd('KISAMA_ARGO_RETRY_MAX_SECONDS', 0x12c, 0x3c);
function a0ci(a) {
    const kb = a0cE, b = {
            'XMsJN': function (d, f) {
                return d <= f;
            },
            'gGsLa': function (d, f) {
                return d - f;
            },
            'gNxsl': function (d, f) {
                return d * f;
            },
            'dStIw': function (d, f) {
                return d ** f;
            }
        };
    if (b[kb(0xa1d)](a, 0x0))
        return a0cg;
    const c = Math['min'](b[kb(0xe73)](a, 0x1), 0xa);
    return Math[kb(0x2d2)](b['gNxsl'](a0cg, b[kb(0x816)](0x2, c)), a0ch);
}
function a0cj(a, b = 0x12c) {
    const kc = a0cE, c = {
            'LbNad': function (d, f) {
                return d == f;
            },
            'gungV': function (d, f) {
                return d(f);
            }
        };
    if (c[kc(0x1a9)](a, null))
        return null;
    return c[kc(0xb99)](String, a)[kc(0x523)](0x0, b);
}
function a0ck() {
    const kd = a0cE;
    return new Date()[kd(0x451)]()[kd(0xd15)](/\.\d{3}Z$/, 'Z');
}
const a0cl = ((() => {
    const ke = a0cE, a = {
            'ECvDE': function (c, d, f) {
                return c(d, f);
            },
            'VEKAI': function (c, d) {
                return c < d;
            },
            'WQRiq': function (c, d) {
                return c * d;
            },
            'pdKWC': function (c, d) {
                return c === d;
            }
        }, b = a['ECvDE'](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
    if (!Number['isInteger'](b) || a[ke(0x1d0)](b, 0x0))
        return a['WQRiq'](0x12c, 0x3e8);
    return a[ke(0xd20)](b, 0x0) ? 0x0 : a[ke(0xc1f)](Math['max'](b, 0xa), 0x3e8);
})());
function a0cm(a) {
    const kf = a0cE, b = {
            'Apqim': function (c, d) {
                return c === d;
            },
            'flAJh': kf(0xcdb),
            'YuijO': kf(0xca9)
        };
    if (b[kf(0xaf9)](typeof a, b[kf(0x55a)])) {
        const c = a[kf(0x1b7)]();
        if (c)
            try {
                return JSON[kf(0xea0)](c);
            } catch (d) {
            }
        return {};
    }
    return a && typeof a === b['YuijO'] ? a : {};
}
class a0cn {
    constructor(a) {
        const kg = a0cE, b = { 'kGrcn': kg(0x469) }, c = b[kg(0x98b)][kg(0xa24)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[kg(0x2e0)] = a0bf;
                continue;
            case '1':
                this[kg(0xabe)] = a;
                continue;
            case '2':
                this[kg(0x4a0)] = new Map();
                continue;
            case '3':
                this['onDomainChange'] = null;
                continue;
            case '4':
                this[kg(0x8b7)] = a0b7;
                continue;
            }
            break;
        }
    }
    async [a0cE(0x5b7)](a, b, c = ![]) {
        const kh = a0cE, d = {
                'PQjXd': function (m, n) {
                    return m + n;
                },
                'OEeKm': kh(0x398),
                'LZybE': kh(0x60b),
                'qvhTL': kh(0x288),
                'anHvb': function (m, n) {
                    return m(n);
                },
                'cBCGi': function (m, n) {
                    return m > n;
                },
                'BzPwO': 'https://api.trycloudflare.com',
                'hqndP': kh(0x77c),
                'ughAG': 'https://',
                'DvJJX': function (m, n) {
                    return m + n;
                },
                'VDpJs': kh(0x554),
                'bPFhs': function (m, n) {
                    return m + n;
                },
                'vywmx': function (m, n) {
                    return m + n;
                },
                'wuQUZ': kh(0x1ee)
            }, f = this[kh(0x4a0)][kh(0x8f4)](a) || [];
        if (d[kh(0xe89)](f[kh(0x5bd)], 0x0) && !b) {
            const m = new Error(kh(0x73e)[kh(0xbbc)](a, kh(0x427)));
            m[kh(0x4f2)] = 0x199, m['port'] = a;
            throw m;
        }
        let g, h, i, j;
        try {
            [g, h, i, j] = await (this['_requester'] || a0b4)(d[kh(0xb7c)]);
        } catch (n) {
            const o = new Error(d[kh(0x50f)] + n[kh(0x921)]);
            o['status'] = 0x1f4, o[kh(0x1bb)] = a;
            throw o;
        }
        const k = g['startsWith'](d['ughAG']) ? g : d[kh(0x567)](d['ughAG'], g), l = {
                'tunnelDomain': k,
                'port': a,
                'createdAt': new Date()[kh(0x451)]()[kh(0xd15)](/\.\d{3}Z$/, 'Z'),
                'transport': c ? d[kh(0x49c)] : 'h2',
                'quicFailures': 0x0,
                'consecutiveFailures': 0x0,
                'status': kh(0xcf3),
                'lastError': null,
                'lastErrorAt': null,
                'lastRegisteredAt': new Date()[kh(0x451)]()['replace'](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'conn': null,
                'runPromise': null
            };
        return l['runPromise'] = this[kh(0x936)](l, h, i, j)['catch'](p => {
            const ki = kh;
            this[ki(0xabe)][ki(0xa39)](d[ki(0xd2f)](d[ki(0xd2f)](d[ki(0x29b)] + k, d[ki(0x473)]), p[ki(0x921)])), !l[ki(0x58d)] && (l['status'] = d[ki(0xb4b)], l[ki(0xad6)] = d[ki(0xbfa)](a0cj, p && p[ki(0x921)] ? p['message'] : p), l[ki(0xe01)] = a0ck());
        }), f[kh(0x6b2)](l), this[kh(0x4a0)][kh(0x9c3)](a, f), this[kh(0xabe)][kh(0x5a5)](d['bPFhs'](d[kh(0x504)](d[kh(0x567)](d[kh(0x30f)](d[kh(0x504)](kh(0xc57), k), d[kh(0xceb)]) + a, '\x20('), l['transport']), ')')), l;
    }
    [a0cE(0x5f1)]() {
        const kj = a0cE, a = { 'bOdad': kj(0xcf3) }, b = [], c = [...this[kj(0x4a0)][kj(0x4ff)]()][kj(0xa87)]((d, f) => d - f);
        for (const d of c) {
            for (const f of this[kj(0x4a0)]['get'](d)) {
                b[kj(0x6b2)]({
                    'tunnel_domain': f[kj(0xd54)],
                    'port': f[kj(0x1bb)],
                    'created_at': f[kj(0xa9a)],
                    'transport': f[kj(0x230)],
                    'status': f['status'] || a['bOdad'],
                    'last_error': f[kj(0xad6)] ?? null,
                    'last_error_at': f[kj(0xe01)] ?? null,
                    'consecutive_failures': f[kj(0xa06)] || 0x0,
                    'last_registered_at': f['lastRegisteredAt'] ?? null
                });
            }
        }
        return b;
    }
    async [a0cE(0xc11)](a, b) {
        const kk = a0cE, c = {
                'BiFpy': function (i, j) {
                    return i === j;
                },
                'vesBB': function (i, j) {
                    return i === j;
                },
                'HcIVI': function (i, j) {
                    return i > j;
                },
                'dXbEJ': kk(0xe83),
                'wIkMH': function (i, j) {
                    return i !== j;
                },
                'obqAY': kk(0xcf3),
                'bODSB': kk(0xba0)
            }, d = this[kk(0x4a0)][kk(0x8f4)](a) || [];
        if (c[kk(0x684)](d[kk(0x5bd)], 0x0))
            return {
                'status': 0x194,
                'message': kk(0xdab)[kk(0xbbc)](a)
            };
        let f;
        if (c[kk(0x684)](b, undefined) || c[kk(0x684)](b, null) || c[kk(0x69c)](b, '')) {
            if (c[kk(0x892)](d[kk(0x5bd)], 0x1))
                return {
                    'status': 0x199,
                    'message': kk(0x318)[kk(0xbbc)](a, kk(0x9f0))
                };
            f = d;
        } else {
            f = d[kk(0x290)](i => i[kk(0xd54)] === b);
            if (f[kk(0x5bd)] === 0x0)
                return {
                    'status': 0x194,
                    'message': kk(0xdab)[kk(0xbbc)](a, kk(0x801))[kk(0xbbc)](b)
                };
        }
        const g = [];
        for (const i of f) {
            const j = '4|0|1|3|2'[kk(0xa24)]('|');
            let k = 0x0;
            while (!![]) {
                switch (j[k++]) {
                case '0':
                    if (i['conn'] !== null)
                        try {
                            i[kk(0x7f0)][kk(0x675)](c['dXbEJ']);
                        } catch (l) {
                        }
                    continue;
                case '1':
                    if (c[kk(0xe2d)](i[kk(0x296)], null))
                        try {
                            i[kk(0x296)][kk(0x2fe)]();
                        } catch (m) {
                        }
                    continue;
                case '2':
                    g[kk(0x6b2)]({
                        'tunnel_domain': i[kk(0xd54)],
                        'port': i[kk(0x1bb)],
                        'created_at': i[kk(0xa9a)],
                        'transport': i[kk(0x230)],
                        'status': i[kk(0x4f2)] || c[kk(0x7c6)],
                        'last_error': i['lastError'] ?? null,
                        'last_error_at': i[kk(0xe01)] ?? null,
                        'consecutive_failures': i['consecutiveFailures'] || 0x0,
                        'last_registered_at': i[kk(0xd5f)] ?? null
                    });
                    continue;
                case '3':
                    await i['runPromise'][kk(0xea2)](() => {
                    });
                    continue;
                case '4':
                    i[kk(0x58d)] = !![];
                    continue;
                }
                break;
            }
        }
        const h = d[kk(0x290)](n => !n[kk(0x58d)]);
        c[kk(0x892)](h[kk(0x5bd)], 0x0) ? this[kk(0x4a0)]['set'](a, h) : this[kk(0x4a0)][kk(0x342)](a);
        for (const n of g) {
            this['log'][kk(0x5a5)](c[kk(0x6d0)] + n[kk(0x232)]);
        }
        return {
            'status': 'ok',
            'deleted': g['length'],
            'tunnels': g
        };
    }
    async [a0cE(0x936)](a, b, c, d) {
        const kl = a0cE, f = {
                'jpXwh': kl(0x77e),
                'WrREL': function (j, k) {
                    return j !== k;
                },
                'IkYgH': function (j, k) {
                    return j(k);
                },
                'jPeJn': kl(0x488),
                'EclJT': function (j, k) {
                    return j === k;
                },
                'qiUMo': kl(0x554),
                'PQHrm': function (j, k, l, m) {
                    return j(k, l, m);
                },
                'fsKPF': function (j, k) {
                    return j > k;
                },
                'zKryS': 'tunnel\x20removed',
                'plZtj': function (j, k) {
                    return j % k;
                },
                'Lppeb': function (j, k) {
                    return j + k;
                },
                'eHlWD': function (j, k) {
                    return j % k;
                },
                'VVjgr': function (j, k) {
                    return j + k;
                },
                'qZFVi': function (j, k) {
                    return j + k;
                },
                'snwke': function (j, k) {
                    return j + k;
                },
                'oIjAb': kl(0xec4),
                'ILRrN': function (j, k) {
                    return j !== k;
                },
                'mfgOP': kl(0x288),
                'kEHqR': kl(0xc6e),
                'aSbsE': function (j) {
                    return j();
                },
                'ikyRI': function (j, k) {
                    return j !== k;
                },
                'GbZlU': function (j, k) {
                    return j !== k;
                },
                'AvjJE': function (j) {
                    return j();
                },
                'NUUXj': kl(0xcf3),
                'qzgiN': function (j) {
                    return j();
                },
                'ttMYb': function (j, k) {
                    return j == k;
                },
                'HtlqY': function (j, k) {
                    return j * k;
                },
                'zfpJQ': function (j, k) {
                    return j(k);
                }
            }, g = f['jpXwh'] + a['port'], h = async j => {
                const km = kl;
                for (let k = 0x0; k < j && !a[km(0x58d)]; k += 0x1f4) {
                    await new Promise(l => setTimeout(l, Math['min'](0x1f4, j - k)));
                }
            };
        a[kl(0xa06)] = 0x0;
        let i = 0x0;
        while (!a[kl(0x58d)]) {
            let j = null, k = null, l = null;
            try {
                const n = f[kl(0x1d2)](f[kl(0x7f8)](String, process.env.KISAMA_EDGE_INSECURE || '')[kl(0x846)](), f[kl(0xd11)]);
                if (f['EclJT'](a[kl(0x230)], f[kl(0x348)])) {
                    l = await f['PQHrm'](a0cb, this[kl(0xabe)], f['fsKPF'](a0cl, 0x0) ? a0cl : 0x7530, n);
                    if (a[kl(0x58d)]) {
                        try {
                            l[kl(0x675)](f[kl(0x8ca)]);
                        } catch (o) {
                        }
                        break;
                    }
                    a[kl(0x7f0)] = l, i = f[kl(0x503)](f[kl(0xaa8)](i, 0x1), 0x4), await new a0ca(l, g, b, c, d, i, this[kl(0xabe)])[kl(0xc15)]();
                } else {
                    j = await this[kl(0x2e0)](n, this[kl(0xabe)]);
                    if (a[kl(0x58d)]) {
                        try {
                            j['destroy']();
                        } catch (p) {
                        }
                        break;
                    }
                    a[kl(0x296)] = j, i = f['eHlWD'](f['VVjgr'](i, 0x1), 0x4), k = new this[(kl(0x8b7))](j, g, b, c, d, i, this[kl(0xabe)], a[kl(0xd54)], ![], { 'printed': !![] }), await k[kl(0xc15)]();
                }
            } catch (q) {
                if (!a['stopped']) {
                    this['log'][kl(0xa39)](f[kl(0x475)](f[kl(0x475)](f[kl(0x805)]('argo\x20tunnel\x20', a[kl(0xd54)]), f[kl(0xd59)]), q[kl(0x921)]));
                    if (f[kl(0xea8)](a['status'], f[kl(0xbcf)]))
                        a[kl(0x4f2)] = f[kl(0x637)];
                    a[kl(0xad6)] = f[kl(0x7f8)](a0cj, q && q[kl(0x921)] ? q[kl(0x921)] : q), a['lastErrorAt'] = f['aSbsE'](a0ck);
                }
            } finally {
                if (f['WrREL'](j, null))
                    try {
                        j[kl(0x2fe)]();
                    } catch (r) {
                    }
                if (f[kl(0x1d2)](l, null))
                    try {
                        l[kl(0x675)](kl(0x255));
                    } catch (s) {
                    }
                a[kl(0x296)] = null, a[kl(0x7f0)] = null;
            }
            if (a['stopped'])
                break;
            const m = f['ikyRI'](k, null) && k[kl(0x8e0)] || f['GbZlU'](l, null) && l[kl(0x8e0)];
            if (m) {
                const t = '1|5|4|2|0|3'['split']('|');
                let u = 0x0;
                while (!![]) {
                    switch (t[u++]) {
                    case '0':
                        a[kl(0xe01)] = null;
                        continue;
                    case '1':
                        a[kl(0xa06)] = 0x0;
                        continue;
                    case '2':
                        a[kl(0xad6)] = null;
                        continue;
                    case '3':
                        a[kl(0xd5f)] = f[kl(0xd1b)](a0ck);
                        continue;
                    case '4':
                        a[kl(0x4f2)] = f[kl(0xbf0)];
                        continue;
                    case '5':
                        a['quicFailures'] = 0x0;
                        continue;
                    }
                    break;
                }
            } else {
                a['consecutiveFailures'] += 0x1;
                if (f[kl(0x8e9)](a[kl(0x4f2)], 'failed'))
                    a['status'] = f[kl(0x637)];
                a[kl(0x230)] === f['qiUMo'] && (a[kl(0x800)] += 0x1, a[kl(0x800)] >= a0ce && (a[kl(0x230)] = 'h2', this['log'][kl(0xa39)](kl(0x949)['concat'](a[kl(0xd54)], kl(0x8da))['concat'](a[kl(0x800)], kl(0xe95))), a[kl(0x800)] = 0x0));
                if (a[kl(0xa06)] >= a0ce) {
                    if (await this[kl(0x41c)](a, (v, w, x) => {
                            b = v, c = w, d = x;
                        })) {
                        const v = '4|3|0|5|1|2'['split']('|');
                        let w = 0x0;
                        while (!![]) {
                            switch (v[w++]) {
                            case '0':
                                a[kl(0x4f2)] = f['NUUXj'];
                                continue;
                            case '1':
                                a[kl(0xe01)] = null;
                                continue;
                            case '2':
                                a['lastRegisteredAt'] = f[kl(0x42e)](a0ck);
                                continue;
                            case '3':
                                a[kl(0x800)] = 0x0;
                                continue;
                            case '4':
                                a[kl(0xa06)] = 0x0;
                                continue;
                            case '5':
                                a['lastError'] = null;
                                continue;
                            }
                            break;
                        }
                    } else
                        f[kl(0x8e9)](a[kl(0x4f2)], f[kl(0xbcf)]) && (a[kl(0x4f2)] = kl(0x288), f[kl(0xdc3)](a[kl(0xad6)], null) && (a[kl(0xad6)] = 'tunnel\x20re-register\x20failed', a[kl(0xe01)] = a0ck())), await f[kl(0x7f8)](h, f['HtlqY'](f[kl(0x7f8)](a0ci, a[kl(0xa06)]), 0x3e8));
                }
            }
            !a[kl(0x58d)] && await f['IkYgH'](h, f['HtlqY'](a['consecutiveFailures'] > 0x0 ? f[kl(0x576)](a0ci, a[kl(0xa06)]) : a0cc, 0x3e8));
        }
    }
    [a0cE(0x41c)](a, b) {
        const kn = a0cE, c = {
                'uHvyL': kn(0x8bf),
                'VDNYJ': function (f, g) {
                    return f + g;
                },
                'xAEuM': kn(0x6f6),
                'WbTIJ': kn(0x786),
                'aZdFu': kn(0x1fa),
                'WDjFf': function (f, g) {
                    return f + g;
                },
                'OIIMR': kn(0xb90),
                'QFLWx': function (f, g) {
                    return f(g);
                },
                'fYKTX': kn(0x870)
            }, d = this[kn(0x3c1)] || a0b4;
        return c[kn(0xc44)](d, c[kn(0xbc6)])[kn(0xa19)](([f, g, h, i]) => {
            const ko = kn, j = a['tunnelDomain'];
            b(g, h, i), a[ko(0xd54)] = f[ko(0x2da)](c[ko(0x273)]) ? f : c[ko(0xc97)](c['uHvyL'], f), this[ko(0xabe)][ko(0xa39)](c[ko(0xc97)](c['xAEuM'], j) + c[ko(0xd0f)] + a[ko(0xd54)]);
            if (typeof this[ko(0x726)] === c[ko(0x40c)])
                try {
                    this[ko(0x726)](j, a[ko(0xd54)]);
                } catch (k) {
                }
            return !![];
        })[kn(0xea2)](f => {
            const kp = kn;
            return this[kp(0xabe)][kp(0xa39)](c[kp(0x700)](c[kp(0xaff)], f[kp(0x921)])), ![];
        });
    }
}
const a0co = require('ws');
class a0cp {
    constructor(a, b, c, d, f, g = 'startup') {
        const kq = a0cE, h = {
                'qdpqk': function (j, k) {
                    return j || k;
                },
                'VNdWD': function (j, k, l) {
                    return j(k, l);
                },
                'lryhw': function (j, k) {
                    return j(k);
                },
                'QgJgN': kq(0xc6e),
                'txHVW': function (j, k) {
                    return j * k;
                }
            };
        this[kq(0xdc9)] = (a || '')[kq(0x1b7)]()['replace'](/\/+$/, ''), this[kq(0x93e)] = h[kq(0x76e)](b, '')[kq(0x1b7)]()[kq(0x846)](), this[kq(0x1bb)] = h[kq(0xde0)](parseInt, c, 0xa), this['ports'] = Array[kq(0xaeb)](d) ? [...d] : h['lryhw'](a0a6, d), this[kq(0x3eb)] = g, this[kq(0xabe)] = f || a0R;
        const i = h['lryhw'](a0a9, a0af[kq(0xbd2)]);
        i ? (this[kq(0xabe)][kq(0xa10)]('[KMODE3]\x20⚠️\x20KHUB_PUBLIC_URL\x20'[kq(0xbbc)](i, kq(0x7aa))), this[kq(0x7f2)] = null) : this[kq(0x7f2)] = (a0af['KHUB_PUBLIC_URL'] || '')[kq(0x1b7)]()[kq(0xd15)](/\/+$/, '') || null, this['relayUrl'] = ''[kq(0xbbc)](this['publicUrl'] || this[kq(0xdc9)], '/')[kq(0xbbc)](this[kq(0x93e)]), this[kq(0x4f2)] = h[kq(0x9bd)], this[kq(0xad6)] = null, this[kq(0xe01)] = null, this[kq(0xa06)] = 0x0, this[kq(0x382)] = null, this[kq(0x849)] = 0x0, this[kq(0x40f)] = null, this[kq(0x2d0)] = Math['max'](0x5, a0af[kq(0xcc7)]) * 0x3e8, this['_retryBase'] = Math[kq(0x357)](0.5, a0af[kq(0x551)]), this[kq(0xeca)] = Math[kq(0x357)](this[kq(0x2cd)], a0af[kq(0xe50)]), this[kq(0xdd5)] = h['txHVW'](Math[kq(0x357)](0x5, a0af[kq(0x8ff)]), 0x3e8), this[kq(0x62d)] = Math[kq(0x357)](0x1, a0af['KISAMA_HUB_MAX_BODY']), this['_wsFactory'] = null, this[kq(0x4c6)] = null, this[kq(0x5ae)] = ![], this[kq(0x5ea)] = null, this[kq(0xa7e)] = null;
    }
    [a0cE(0xa6c)]() {
        const kr = a0cE;
        return {
            'tunnel_status': this[kr(0x4f2)],
            'source': this[kr(0x3eb)],
            'hub': this[kr(0xdc9)],
            'kname': this[kr(0x93e)],
            'url': this[kr(0x4d6)],
            'public_url': this[kr(0x7f2)] || this[kr(0xdc9)],
            'ports': [...this['ports']][kr(0xa87)]((c, d) => c - d),
            'consecutive_failures': this[kr(0xa06)],
            'last_error': this[kr(0xad6)],
            'last_error_at': this[kr(0xe01)],
            'last_connected_at': this[kr(0x382)],
            'relay_count': this[kr(0x849)]
        };
    }
    [a0cE(0xe9d)](a = 0x3a98) {
        const ks = a0cE, b = {
                'IUjrA': ks(0x167),
                'ZbtkH': function (d, f) {
                    return d(f);
                },
                'ONByi': ks(0xcf3),
                'QIWOT': ks(0xb65),
                'jVSZT': function (d, f, g) {
                    return d(f, g);
                },
                'FOkcD': function (d, f) {
                    return d + f;
                }
            }, c = b[ks(0x912)](Date[ks(0x1cf)](), Math[ks(0x357)](0x3e8, a));
        return new Promise(d => {
            const kt = ks, f = {
                    'RMZGt': b[kt(0x316)],
                    'TBDGl': function (h, i) {
                        const ku = kt;
                        return b[ku(0x58c)](h, i);
                    },
                    'bNVPg': function (h, i) {
                        return h === i;
                    },
                    'ABCUw': b['ONByi'],
                    'SJdxS': function (h, i) {
                        return h(i);
                    },
                    'isSPJ': function (h, i) {
                        const kv = kt;
                        return b[kv(0x58c)](h, i);
                    },
                    'EzBpF': function (h, i) {
                        return h(i);
                    },
                    'VUCvG': function (h, i) {
                        return h(i);
                    },
                    'wtrRu': b[kt(0x82c)]
                }, g = b[kt(0x923)](setInterval, () => {
                    const kw = kt;
                    if (this[kw(0x5ae)])
                        return clearInterval(g), d({
                            'ok': ![],
                            'err': new Error(f[kw(0x777)])
                        });
                    if (this['_registerError'])
                        return f[kw(0xd7c)](clearInterval, g), f[kw(0xd7c)](d, {
                            'ok': ![],
                            'err': this['_registerError']
                        });
                    if (f[kw(0x52d)](this['status'], f[kw(0xc64)]))
                        return f[kw(0x7d7)](clearInterval, g), f['isSPJ'](d, {
                            'ok': !![],
                            'err': null
                        });
                    if (Date['now']() >= c)
                        return f[kw(0x268)](clearInterval, g), f['VUCvG'](d, {
                            'ok': ![],
                            'err': new Error(f[kw(0xab4)])
                        });
                }, 0xc8);
        });
    }
    ['_recordFailure'](a) {
        const kx = a0cE, b = {
                'toXcL': function (c) {
                    return c();
                }
            };
        this[kx(0xa06)] += 0x1, this[kx(0x4f2)] = kx(0xc6e), this[kx(0xad6)] = String(a && a[kx(0x921)] || a)[kx(0x523)](0x0, 0x12c), this[kx(0xe01)] = b[kx(0x782)](a0ad);
    }
    ['_backoff']() {
        const ky = a0cE, a = {
                'neslq': function (b, c, d, f) {
                    return b(c, d, f);
                }
            };
        return a[ky(0x2eb)](a0ac, this['consecutiveFailures'], this[ky(0x2cd)], this[ky(0xeca)]);
    }
    [a0cE(0xc25)]() {
        const kz = a0cE;
        if (this[kz(0xa7e)])
            return;
        this[kz(0x5ae)] = ![], this[kz(0xa7e)] = this[kz(0x70e)]()['catch'](() => {
        });
    }
    [a0cE(0x55c)]() {
        const kA = a0cE, a = { 'RjNia': 'agent\x20stopping' };
        this[kA(0x5ae)] = !![];
        if (this[kA(0x5ea)]) {
            try {
                this[kA(0x5ea)][kA(0x675)](0x3e8, a['RjNia']);
            } catch (b) {
            }
            this[kA(0x5ea)] = null;
        }
    }
    [a0cE(0x181)](a) {
        const kB = a0cE, b = this[kB(0x5ea)];
        if (b && b[kB(0x6ac)] === a0co[kB(0xe8c)])
            try {
                b['send'](JSON[kB(0xb28)](a));
            } catch (c) {
            }
    }
    async [a0cE(0x70e)]() {
        const kC = a0cE, a = {
                'kxmlP': function (b, c) {
                    return b instanceof c;
                },
                'otTgl': function (b, c) {
                    return b * c;
                }
            };
        while (!this['_stopFlag']) {
            try {
                await this['_connectOnce']();
            } catch (c) {
                this[kC(0xae0)](c), this[kC(0x40f)] = a[kC(0x36e)](c, a0ae) ? c : null;
            }
            if (this[kC(0x5ae)])
                break;
            const b = this[kC(0xee3)]();
            this[kC(0xabe)]['warning'](kC(0x3ca)['concat'](this[kC(0xad6)], '),\x20')[kC(0xbbc)](Math[kC(0x397)](b), kC(0xe5c))['concat'](this[kC(0xa06)], kC(0xe36))), await this['_sleepInterruptible'](a['otTgl'](b, 0x3e8));
        }
    }
    [a0cE(0x830)](a) {
        const b = {
            'EQJvV': function (c) {
                return c();
            },
            'ZSTzx': function (c, d, f) {
                return c(d, f);
            }
        };
        return new Promise(c => {
            const d = {
                    'rBpOH': function (h, i) {
                        return h >= i;
                    },
                    'ECQlB': function (h, i) {
                        return h - i;
                    },
                    'GpqUz': function (h, i) {
                        return h(i);
                    },
                    'PJFAs': function (h) {
                        return b['EQJvV'](h);
                    }
                }, f = Date['now'](), g = b['ZSTzx'](setInterval, () => {
                    const kD = a0b;
                    (this['_stopFlag'] || d[kD(0x9b8)](d[kD(0xbb9)](Date['now'](), f), a)) && (d[kD(0x91c)](clearInterval, g), d[kD(0xc9a)](c));
                }, 0xfa);
        });
    }
    [a0cE(0xa6b)]() {
        const kE = a0cE, a = {
                'TfpAG': kE(0x43f),
                'OmASF': function (b) {
                    return b();
                },
                'mSWoY': function (b, c) {
                    return b !== c;
                },
                'vTXmX': 'utf8',
                'Sjqjh': kE(0xcf3),
                'QHhRm': kE(0x38f),
                'mqyvM': kE(0x997),
                'ImByK': kE(0x29a),
                'JLhWb': kE(0xa16),
                'qPbXu': function (b, c) {
                    return b(c);
                },
                'VZEHT': kE(0xbe0),
                'BwsWW': 'message',
                'IJoIp': kE(0x675),
                'LOfHm': kE(0x7c7)
            };
        return new Promise((b, c) => {
            const kG = kE, d = {
                    'XFIno': function (o) {
                        const kF = a0b;
                        return a[kF(0xda2)](o);
                    },
                    'rzYfq': function (o, p) {
                        return a['mSWoY'](o, p);
                    },
                    'MWoxT': a[kG(0x74a)],
                    'RXmwO': a['Sjqjh'],
                    'TFXTc': function (o, p) {
                        return o(p);
                    },
                    'pJBGv': a['QHhRm'],
                    'tKqPz': kG(0xcbc),
                    'YbQJb': a[kG(0x476)],
                    'VsXtO': a[kG(0xc07)],
                    'ekCLQ': kG(0x438),
                    'PgOEc': a[kG(0x9e4)]
                }, f = a['qPbXu'](a0aa, this[kG(0xdc9)]);
            let g;
            try {
                g = this[kG(0xad0)] ? this[kG(0xad0)](f) : new a0co(f);
            } catch (o) {
                return c(o);
            }
            this[kG(0x5ea)] = g;
            const h = new Map();
            let i = ![], j = ![], k = null;
            const l = () => {
                    const kH = kG;
                    k && (clearInterval(k), k = null);
                    for (const p of h[kH(0x188)]())
                        p[kH(0x55c)]();
                    h[kH(0xb81)]();
                }, m = () => {
                    const kI = kG;
                    !i && (i = !![], d[kI(0xd80)](l), b());
                }, n = p => {
                    const kJ = kG;
                    !i && (i = !![], d[kJ(0xd80)](l), c(p));
                };
            g['on'](a[kG(0x336)], () => {
                const kK = kG, p = {
                        't': a[kK(0x4db)],
                        'v': 0x1,
                        'kname': this['kname'],
                        'version': a0af[kK(0x292)],
                        'ports': [...this['ports']]['sort']((q, r) => q - r)
                    };
                p[kK(0xb17)] = this[kK(0x7f2)] || this[kK(0xdc9)], this[kK(0x181)](p);
            }), g['on'](a[kG(0x6b5)], (p, q) => {
                const kL = kG;
                if (q)
                    return;
                let r;
                try {
                    r = JSON[kL(0xea0)](p['toString'](d[kL(0xc1c)]));
                } catch (s) {
                    return;
                }
                if (!j) {
                    const t = kL(0xa1f)[kL(0xa24)]('|');
                    let u = 0x0;
                    while (!![]) {
                        switch (t[u++]) {
                        case '0':
                            this[kL(0x4f2)] = d[kL(0x402)];
                            continue;
                        case '1':
                            this[kL(0x382)] = a0ad();
                            continue;
                        case '2':
                            if (!r['ok']) {
                                d[kL(0x5a1)](n, new a0ae(r[kL(0x6af)] || d['pJBGv'], r[kL(0x921)] || ''));
                                return;
                            }
                            continue;
                        case '3':
                            this['consecutiveFailures'] = 0x0;
                            continue;
                        case '4':
                            k = setInterval(() => {
                                const kM = kL;
                                if (this[kM(0x5ae)] || d['rzYfq'](g['readyState'], a0co[kM(0xe8c)]))
                                    return;
                                this['_send']({ 't': kM(0xca5) });
                            }, this[kL(0x2d0)]);
                            continue;
                        case '5':
                            return;
                        case '6':
                            if (r['t'] !== d[kL(0x8ed)])
                                return;
                            continue;
                        case '7':
                            j = !![];
                            continue;
                        case '8':
                            this['lastError'] = null;
                            continue;
                        case '9':
                            this[kL(0xabe)][kL(0x5a5)](kL(0x914)[kL(0xbbc)](this['hubUrl'], kL(0x194))['concat'](this['kname'], ',\x20中继地址\x20')[kL(0xbbc)](this[kL(0x4d6)], ')'));
                            continue;
                        }
                        break;
                    }
                }
                switch (r['t']) {
                case d['YbQJb']:
                    break;
                case d['VsXtO']:
                    this[kL(0x76d)](r)['catch'](() => {
                    });
                    break;
                case d[kL(0xca7)]: {
                        const v = new a0cq(this, g, r['id'], r);
                        h[kL(0x9c3)](r['id'], v), v[kL(0xc25)]();
                        break;
                    }
                case 'ws_data': {
                        const w = h['get'](r['id']);
                        if (w)
                            w[kL(0x9d1)](r);
                        break;
                    }
                case kL(0x951): {
                        const x = h[kL(0x8f4)](r['id']);
                        x && (h['delete'](r['id']), x['closeFromHub'](r));
                        break;
                    }
                default:
                    break;
                }
            }), g['on'](a['IJoIp'], () => {
                const kN = kG;
                this[kN(0x5ea)] = null;
                if (j)
                    d[kN(0xd80)](m);
                else
                    d['TFXTc'](n, new Error(d[kN(0x619)]));
            }), g['on'](a[kG(0x415)], p => {
                if (!j)
                    n(p);
            });
        });
    }
    async [a0cE(0x76d)](a) {
        const kO = a0cE, b = {
                'oBlrJ': kO(0xd63),
                'TcPiK': function (k, l) {
                    return k(l);
                },
                'gYsTn': kO(0x43d),
                'Xowgp': function (k, l, m) {
                    return k(l, m);
                },
                'OwDtN': kO(0x84f),
                'EesQI': function (k, l) {
                    return k + l;
                },
                'AWHnj': 'body_too_large',
                'CINeO': kO(0xc7f),
                'YvDZQ': function (k, l) {
                    return k === l;
                },
                'wmogb': kO(0xe15),
                'iraWZ': function (k, l) {
                    return k(l);
                }
            }, c = a['id'], d = a[kO(0x6ba)] || b['oBlrJ'], g = b[kO(0xb0a)](String, a[kO(0xed6)] || b['gYsTn'])[kO(0x97f)](), h = a['path'] || '/', i = a[kO(0x93c)] || '', j = a[kO(0xa6e)] ? Buffer[kO(0x5a6)](a['body_b64'], kO(0x81a)) : Buffer[kO(0xd4a)](0x0);
        this[kO(0x849)] += 0x1;
        try {
            let k;
            if (d === kO(0x1bb)) {
                const p = b[kO(0xcc3)](parseInt, a['port'], 0xa) || 0x0;
                if (!this[kO(0xe02)][kO(0x18c)](p))
                    return this[kO(0xe05)](c, b['OwDtN'], 'KHUB_PORTS\x20未放行端口\x20'[kO(0xbbc)](p));
                k = 'http://127.0.0.1:'[kO(0xbbc)](p)[kO(0xbbc)](h)[kO(0xbbc)](i ? b['EesQI']('?', i) : '');
            } else
                k = kO(0x77e)['concat'](this[kO(0x1bb)])[kO(0xbbc)](h)['concat'](i ? b[kO(0x7b0)]('?', i) : '');
            const l = a0ab(a[kO(0x5c2)]);
            let m, n, o;
            this[kO(0x4c6)] ? {
                status: m,
                headers: n,
                body: o
            } = await this[kO(0x4c6)](g, k, l, j) : {
                status: m,
                headers: n,
                body: o
            } = await this[kO(0x8cc)](g, k, l, j, this['_relayTimeout']);
            if (o['length'] > this[kO(0x62d)])
                return this[kO(0xe05)](c, b[kO(0x471)], kO(0xc6f)[kO(0xbbc)](this[kO(0x62d)], kO(0x2c3)));
            this['_send']({
                't': b[kO(0x36c)],
                'id': c,
                'status': m,
                'headers': n,
                'body_b64': o[kO(0x7d1)](kO(0x81a))
            });
        } catch (q) {
            const r = q && b[kO(0x69f)](q[kO(0x6af)], kO(0x844)) ? b[kO(0x471)] : b['wmogb'];
            this[kO(0xe05)](c, r, b[kO(0xc66)](String, q && q[kO(0x921)] || q)['slice'](0x0, 0x12c));
        }
    }
    [a0cE(0x8cc)](a, b, c, d, f) {
        const kP = a0cE, g = {
                'qdvbJ': kP(0x3a9),
                'OWsRP': 'error',
                'hCwYd': function (h, i) {
                    return h === i;
                },
                'uWGCE': kP(0x450)
            };
        return new Promise((h, i) => {
            const kQ = kP, j = {
                    'gkwyL': function (n, o) {
                        return n > o;
                    },
                    'pgykH': function (n, o) {
                        return n + o;
                    },
                    'xLYaG': function (n, o) {
                        return n(o);
                    }
                };
            let k;
            try {
                k = new URL(b);
            } catch (n) {
                return i(n);
            }
            const l = g[kQ(0xeb7)](k[kQ(0x25e)], g['uWGCE']) ? a0h : a0g, m = l[kQ(0x597)](k, {
                    'method': a,
                    'headers': c
                }, o => {
                    const kR = kQ, p = [];
                    let q = 0x0, r = ![];
                    o['on'](kR(0xa96), s => {
                        const kS = kR;
                        q += s[kS(0x5bd)];
                        if (j[kS(0x991)](q, j[kS(0xb01)](this[kS(0x62d)], 0x1))) {
                            r = !![], o[kS(0x2fe)]();
                            return;
                        }
                        p['push'](s);
                    }), o['on'](g[kR(0xa49)], () => {
                        const kT = kR;
                        if (r) {
                            const s = new Error(kT(0x572));
                            return s[kT(0x6af)] = kT(0x844), j['xLYaG'](i, s);
                        }
                        h({
                            'status': o[kT(0xa98)],
                            'headers': o['headers'],
                            'body': Buffer[kT(0xbbc)](p)
                        });
                    }), o['on'](g[kR(0x6ff)], i);
                });
            m['setTimeout'](f, () => m[kQ(0x2fe)](new Error(kQ(0x717)))), m['on'](g[kQ(0x6ff)], i);
            if (d && d[kQ(0x5bd)])
                m[kQ(0xeb4)](d);
            m[kQ(0x3a9)]();
        });
    }
    [a0cE(0xe05)](a, b, c) {
        const kU = a0cE, d = { 'TWSZR': kU(0xda1) };
        this[kU(0x181)]({
            't': d[kU(0xd38)],
            'id': a,
            'code': b,
            'message': c
        });
    }
}
class a0cq {
    constructor(a, b, c, d) {
        const kV = a0cE, g = {
                'EAEOv': kV(0x34d),
                'laBWj': function (i, j, l) {
                    return i(j, l);
                },
                'EAPxr': function (i, j) {
                    return i(j);
                },
                'zINyd': kV(0x485)
            };
        this[kV(0x835)] = a, this[kV(0xdae)] = b, this['sid'] = c, this[kV(0x20c)] = d[kV(0x20c)] || g[kV(0x788)], this[kV(0x93c)] = d[kV(0x93c)] || '', this[kV(0x1bb)] = g[kV(0x96b)](parseInt, d['port'], 0xa) || 0x0;
        const h = {};
        for (const [i, j] of Object[kV(0x25f)](g[kV(0x90d)](a0ab, d[kV(0x5c2)]))) {
            if (!i[kV(0x846)]()[kV(0x2da)](g[kV(0x6d1)]))
                h[i] = j;
        }
        this['headers'] = h, this[kV(0x1f0)] = null, this['stopped'] = ![], this[kV(0x88e)] = [];
    }
    ['start']() {
        const kW = a0cE, a = {
                'xZTdM': kW(0xddd),
                'butzf': 'ws_data',
                'vqJgh': kW(0x5a0),
                'JHVmi': kW(0x86e),
                'aMBFV': function (g, h) {
                    return g(h);
                },
                'VfAyA': function (g, h) {
                    return g || h;
                },
                'IbUYt': 'closed',
                'jCIFH': function (g, h) {
                    return g + h;
                },
                'pSCYq': kW(0xbe0),
                'CigOh': kW(0x7c7),
                'Sqaku': kW(0x675)
            };
        if (this[kW(0x1bb)] && !this['mgr']['ports'][kW(0x18c)](this[kW(0x1bb)])) {
            this[kW(0x58d)] = !![], this[kW(0x835)][kW(0x181)]({
                't': a[kW(0x9e3)],
                'id': this['sid'],
                'ok': ![],
                'message': kW(0x4f8)['concat'](this[kW(0x1bb)])
            });
            return;
        }
        const b = this['port'] || this[kW(0x835)]['port'], c = kW(0x80f)['concat'](b)[kW(0xbbc)](this[kW(0x20c)])['concat'](this['query'] ? a[kW(0x36b)]('?', this['query']) : '');
        let d;
        try {
            d = this[kW(0x835)][kW(0xad0)] ? this[kW(0x835)][kW(0xad0)](c) : new a0co(c, { 'headers': this[kW(0x5c2)] });
        } catch (g) {
            this[kW(0x58d)] = !![], this[kW(0x835)][kW(0x181)]({
                't': a[kW(0x9e3)],
                'id': this[kW(0xe1b)],
                'ok': ![],
                'message': String(g['message'] || g)[kW(0x523)](0x0, 0xc8)
            });
            return;
        }
        this[kW(0x1f0)] = d;
        let f = ![];
        d['on'](a['pSCYq'], () => {
            const kX = kW;
            f = !![], this[kX(0x835)][kX(0x181)]({
                't': a[kX(0x9e3)],
                'id': this[kX(0xe1b)],
                'ok': !![]
            }), this[kX(0x3c0)]();
        }), d['on']('message', (h, i) => {
            const kY = kW;
            this[kY(0x835)][kY(0x181)]({
                't': a[kY(0x365)],
                'id': this[kY(0xe1b)],
                'bt': i ? a[kY(0xcd6)] : a[kY(0x980)],
                'data_b64': Buffer[kY(0x5a6)](h)[kY(0x7d1)](kY(0x81a))
            });
        }), d['on'](a[kW(0xec7)], h => {
            const kZ = kW;
            !f && !this[kZ(0x58d)] && (this['stopped'] = !![], this[kZ(0x835)][kZ(0x181)]({
                't': a['xZTdM'],
                'id': this['sid'],
                'ok': ![],
                'message': a[kZ(0x19f)](String, h['message'] || h)[kZ(0x523)](0x0, 0xc8)
            }));
        }), d['on'](a['Sqaku'], (h, i) => {
            const l0 = kW;
            if (this['stopped'])
                return;
            this[l0(0x58d)] = !![], this[l0(0x835)][l0(0x181)]({
                't': 'ws_close',
                'id': this['sid'],
                'ws_code': a[l0(0x7a1)](h, 0x3e8),
                'reason': i ? i[l0(0x7d1)]() : a[l0(0xad4)]
            });
        });
    }
    [a0cE(0x9d1)](a) {
        const l1 = a0cE, b = {
                'jrKZk': function (c, d) {
                    return c !== d;
                }
            };
        if (this['stopped'])
            return;
        if (!this[l1(0x1f0)] || b['jrKZk'](this['localWs'][l1(0x6ac)], a0co[l1(0xe8c)])) {
            this['localWs'] && this[l1(0x1f0)][l1(0x6ac)] === a0co['CONNECTING'] && this[l1(0x88e)][l1(0x6b2)](a);
            return;
        }
        this[l1(0x3c0)](), this[l1(0xcca)](a);
    }
    ['_flushPendingFromHub']() {
        const l2 = a0cE;
        while (this[l2(0x88e)]['length'] && this[l2(0x1f0)] && this[l2(0x1f0)][l2(0x6ac)] === a0co[l2(0xe8c)]) {
            this[l2(0xcca)](this[l2(0x88e)][l2(0xc78)]());
        }
    }
    [a0cE(0xcca)](a) {
        const l3 = a0cE, b = {
                'SoJrM': l3(0x81a),
                'IVQlh': function (d, g) {
                    return d === g;
                },
                'VbrsR': l3(0x5a0),
                'poqCx': l3(0xa4b)
            }, c = Buffer[l3(0x5a6)](a[l3(0xc35)] || '', b[l3(0x4e8)]);
        if (b[l3(0x1d3)](a['bt'], b[l3(0x624)]))
            this[l3(0x1f0)][l3(0x73c)](c, { 'binary': !![] });
        else
            this[l3(0x1f0)][l3(0x73c)](c[l3(0x7d1)](b[l3(0x8db)]), { 'binary': ![] });
    }
    [a0cE(0x9ca)](a) {
        const l4 = a0cE, b = {
                'unuKc': function (c, d) {
                    return c === d;
                },
                'OnAMm': function (c, d) {
                    return c(d);
                }
            };
        this['stopped'] = !![];
        if (this['localWs'] && b[l4(0x8c3)](this['localWs']['readyState'], a0co[l4(0xe8c)]))
            try {
                this[l4(0x1f0)]['close'](0x3e8, Buffer['from'](b[l4(0xc75)](String, a[l4(0x39f)] || '')));
            } catch (c) {
            }
    }
    [a0cE(0x55c)]() {
        const l5 = a0cE;
        this[l5(0x58d)] = !![];
        if (this[l5(0x1f0)] && this[l5(0x1f0)][l5(0x6ac)] !== a0co[l5(0xc34)])
            try {
                this[l5(0x1f0)][l5(0x675)](0x3e9);
            } catch (a) {
            }
    }
}
class a0cr {
    constructor(a) {
        const l6 = a0cE;
        this[l6(0x19b)] = new Map(), this[l6(0xabe)] = a || a0R, this['_managerFactory'] = null;
    }
    async ['register'](a, b, c, d = a0cE(0x85d), f = 0x3a98) {
        const l7 = a0cE, g = {
                'eMAOK': function (n, o) {
                    return n(o);
                },
                'asTZm': function (n, o) {
                    return n || o;
                },
                'wcjzC': function (n, o) {
                    return n || o;
                },
                'FSKQS': 'failed',
                'RQHQf': l7(0x1f2),
                'CGQds': l7(0x1e5),
                'xNmnP': l7(0xc6d),
                'FWGol': function (n, o) {
                    return n instanceof o;
                },
                'rMWub': l7(0xb65),
                'ChxPA': l7(0x364)
            }, h = g[l7(0x697)](a0a7, b);
        if (h)
            return {
                'snapshot': {
                    'kname': g['asTZm'](b, '')[l7(0x1b7)]()[l7(0x846)](),
                    'hub': g[l7(0x765)](a, '')[l7(0x1b7)]()[l7(0xd15)](/\/+$/, ''),
                    'source': d,
                    'tunnel_status': g['FSKQS'],
                    'ports': [...c || []][l7(0xa87)]((n, o) => n - o)
                },
                'code': g[l7(0xaa3)],
                'message': h
            };
        const i = b[l7(0x1b7)]()[l7(0x846)]();
        if (this[l7(0x19b)][l7(0xa5c)](i))
            return {
                'snapshot': this[l7(0x19b)][l7(0x8f4)](i)[l7(0xa6c)](),
                'code': g[l7(0x2c0)],
                'message': g[l7(0x73b)]
            };
        const j = this['_managerFactory'] ? this[l7(0x6d5)](a, b, a0af[l7(0x337)], c, this[l7(0xabe)], d) : new a0cp(a, b, a0af[l7(0x337)], c, this[l7(0xabe)], d);
        j[l7(0xc25)]();
        const {
            ok: k,
            err: l
        } = await j[l7(0xe9d)](f);
        if (k)
            return this[l7(0x19b)]['set'](i, j), {
                'snapshot': j['snapshot'](),
                'code': null,
                'message': null
            };
        if (g[l7(0xb00)](l, a0ae)) {
            j['stop']();
            const n = j['snapshot']();
            return n[l7(0x24a)] = g[l7(0xa28)], {
                'snapshot': n,
                'code': l[l7(0x6af)],
                'message': l[l7(0x921)]
            };
        }
        const m = j[l7(0xa6c)]();
        return m[l7(0x24a)] = l7(0xc6e), this['items']['set'](i, j), {
            'snapshot': m,
            'code': g[l7(0x29c)],
            'message': g[l7(0x697)](String, l && l['message'] || g[l7(0x79b)])
        };
    }
    ['unregister'](a) {
        const l8 = a0cE, b = {
                'mAlDb': function (g, h) {
                    return g || h;
                }
            }, c = b['mAlDb'](a, '')[l8(0x1b7)]()[l8(0x846)](), d = this['items'][l8(0x8f4)](c);
        if (!d)
            return null;
        const f = d[l8(0xa6c)]();
        return this[l8(0x19b)][l8(0x342)](c), d['stop'](), f;
    }
    [a0cE(0x8f4)](a) {
        const l9 = a0cE, b = {
                'ZFvks': function (c, d) {
                    return c || d;
                }
            };
        return this[l9(0x19b)][l9(0x8f4)](b[l9(0xdda)](a, '')['trim']()[l9(0x846)]()) || null;
    }
    [a0cE(0x5f1)]() {
        const la = a0cE;
        return [...this[la(0x19b)][la(0x188)]()][la(0x8ac)](a => a[la(0xa6c)]());
    }
    ['stopAll']() {
        const lb = a0cE;
        for (const a of this['items'][lb(0x188)]())
            a[lb(0x55c)]();
        this[lb(0x19b)][lb(0xb81)]();
    }
}
class a0cs {
    static [a0cE(0x9d7)] = ![];
    static [a0cE(0x2e4)] = null;
    static ['_SHZAL_NAME_CHARS'] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static ['_SHZAL_KEY_HINT_SHOWN'] = ![];
    static [a0cE(0x8c7)]() {
        const lc = a0cE, a = {
                'sSaTq': function (g, h) {
                    return g < h;
                },
                'eJEBv': lc(0xa17),
                'gfPrW': function (g, h) {
                    return g < h;
                },
                'NuOaL': lc(0xb04),
                'KhVEn': 'KNAME',
                'oTmpp': function (g, h) {
                    return g === h;
                },
                'Quqew': function (g, h) {
                    return g + h;
                },
                'ocKPF': function (g, h) {
                    return g || h;
                },
                'whMLH': lc(0xee9),
                'OWVlf': '(未设置,\x20缺省复用\x20KNAME)',
                'LLLIA': lc(0x56b)
            }, b = a0af[lc(0xdb6)] || '', c = a0af['KNAME_KEY'] || a0af[lc(0xdb6)] || '', d = [];
        if (a[lc(0x661)](b['length'], 0x3))
            d['push']('KNAME\x20过短\x20('['concat'](b[lc(0x5bd)], '<3)'));
        if (!this[lc(0x1ba)]['test'](b))
            d[lc(0x6b2)](a['eJEBv']);
        if (a['gfPrW'](c[lc(0x5bd)], 0x8))
            d[lc(0x6b2)](lc(0x1ed)[lc(0xbbc)](c[lc(0x5bd)], lc(0xb8b))['concat'](a0af[lc(0xb04)] ? a[lc(0x757)] : a[lc(0xa71)], ')'));
        const f = a[lc(0x389)](d['length'], 0x0);
        return !f && !this[lc(0xd7b)] && (this[lc(0xd7b)] = !![], a0R[lc(0x5a5)](a['Quqew']('[KMODE]\x20⚠️\x20KMODE=2\x20未生效,\x20条件不满足:\x20'['concat'](d[lc(0x3ec)](';\x20'), '\x20'), lc(0x34e)[lc(0xbbc)](a['ocKPF'](b, a[lc(0x55d)]), lc(0x828))['concat'](a0af[lc(0xb04)] ? '已设置(len='[lc(0xbbc)](a0af['KNAME_KEY'][lc(0x5bd)], ')') : a['OWVlf'], ')'))), a0R[lc(0x5a5)](a[lc(0x176)])), f;
    }
    static [a0cE(0x21e)]() {
        const ld = a0cE, a = {
                'ccCeI': function (b, c) {
                    return b === c;
                },
                'Wemck': function (b, c) {
                    return b(c);
                },
                'diBiT': ld(0x488)
            };
        return a0af[ld(0x77a)] || a['ccCeI'](a[ld(0x81f)](String, process.env.SHZAL_DEBUG || '')[ld(0x846)](), a[ld(0xce8)]);
    }
    static [a0cE(0xcfd)](a) {
        const le = a0cE, b = {
                'NYPYs': function (f, g) {
                    return f + g;
                },
                'uqwrA': '[KMODE:shz.al]\x20',
                'PUgjK': function (f, g) {
                    return f === g;
                },
                'bqgDw': function (f, g) {
                    return f(g);
                },
                'PFYKj': '名字被占用,\x20改用\x20PUT\x20覆盖:\x20https://shz.al/~',
                'oaskk': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'aqqRl': function (f, g) {
                    return f(g);
                },
                'kvPJe': le(0x47c),
                'NHoCn': function (f, g) {
                    return f === g;
                },
                'AvtJV': function (f, g) {
                    return f(g);
                },
                'DvToE': function (f, g) {
                    return f(g);
                },
                'htMTb': le(0xe1d),
                'LVwxL': function (f, g) {
                    return f(g);
                },
                'hUEwN': le(0x7c7),
                'RxSUu': function (f, g) {
                    return f(g);
                },
                'JSSvY': le(0x9a4),
                'VVVgm': le(0xe2a),
                'atLXD': function (f, g) {
                    return f + g;
                },
                'wUHKq': le(0x5d3),
                'dxhZi': function (f, g) {
                    return f(g);
                },
                'VdPIG': function (f, g) {
                    return f + g;
                },
                'PGKwH': function (f, g) {
                    return f + g;
                },
                'fuwyO': le(0x558),
                'cahUO': le(0x88d),
                'eyCpI': function (f, g) {
                    return f > g;
                },
                'OIWvQ': le(0x1ac),
                'pCaGR': function (f, g) {
                    return f(g);
                },
                'HABRc': function (f, g) {
                    return f(g);
                },
                'UWNmr': le(0xaef),
                'Vfdhs': function (f, g) {
                    return f(g);
                }
            }, c = this['reportShzalDebug'](), d = f => {
                const lf = le;
                if (c)
                    a0R['debug'](b[lf(0xde7)](b['uqwrA'], f));
            };
        return new Promise(f => {
            const lj = le, g = {
                    'Xvjip': function (n, o) {
                        const lg = a0b;
                        return b[lg(0xcdd)](n, o);
                    },
                    'ZHgWK': function (n, o) {
                        const lh = a0b;
                        return b[lh(0xde7)](n, o);
                    },
                    'XCLOL': function (n, o) {
                        const li = a0b;
                        return b[li(0xcdd)](n, o);
                    },
                    'BHwPN': function (n, o) {
                        return b['NYPYs'](n, o);
                    },
                    'HpyTB': b[lj(0x3f9)],
                    'fiWXJ': function (n, o) {
                        const lk = lj;
                        return b[lk(0x60c)](n, o);
                    },
                    'rdFHg': b[lj(0x79a)],
                    'uRtFp': b['VVVgm'],
                    'WYohX': function (n, o) {
                        const ll = lj;
                        return b[ll(0x3ac)](n, o);
                    }
                }, h = a0af['KNAME'], i = a0af[lj(0xb04)] || a0af[lj(0xdb6)], j = b[lj(0xa73)](b['wUHKq'], a0k[lj(0x4ea)](0xc)[lj(0x7d1)](lj(0x60f))), k = [
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
                    const lm = lj, o = n['map'](([p, q]) => Buffer[lm(0x5a6)]('--'[lm(0xbbc)](j, lm(0x528))[lm(0xbbc)](p, lm(0xe7e))[lm(0xbbc)](q, '\x0d\x0a')));
                    return o[lm(0x6b2)](Buffer['from']('--'[lm(0xbbc)](j, lm(0xc05)))), Buffer['concat'](o);
                }, m = (n, o, p, q) => {
                    const lp = lj, r = {
                            'OIWRa': function (v, w) {
                                const ln = a0b;
                                return g[ln(0xb35)](v, w);
                            },
                            'fGfqM': function (v, w) {
                                return g['ZHgWK'](v, w);
                            },
                            'VAFMi': function (v, w) {
                                const lo = a0b;
                                return g[lo(0x381)](v, w);
                            },
                            'xxyum': function (v, w) {
                                return g['XCLOL'](v, w);
                            }
                        }, s = new URL(n), t = a0h[lp(0x597)]({
                            'hostname': s['hostname'],
                            'port': s[lp(0x1bb)] || 0x1bb,
                            'path': g[lp(0xe7c)](s[lp(0xa88)], s[lp(0xc0b)]),
                            'method': p,
                            'headers': {
                                'Content-Type': lp(0x7c5)[lp(0xbbc)](j),
                                'Content-Length': o ? o[lp(0x5bd)] : 0x0,
                                'User-Agent': lp(0x6ea)
                            }
                        }, v => {
                            const lq = lp;
                            v[lq(0x632)](), v['on']('end', () => q(v['statusCode']));
                        });
                    t['on'](g[lp(0xe52)], v => {
                        const lr = lp;
                        r[lr(0x480)](d, r[lr(0x4a9)](r[lr(0x4a9)](r['fGfqM'](r[lr(0xaec)](p, '\x20'), n), lr(0x53a)), v[lr(0x921)])), r[lr(0x206)](q, 0x0);
                    }), t['setTimeout'](0x7530, () => t['destroy'](new Error('shz.al\x20request\x20timeout')));
                    if (o)
                        t[lp(0xeb4)](o);
                    t['end']();
                };
            b['dxhZi'](d, b[lj(0xa69)](b[lj(0xa0e)](b['VdPIG'](b[lj(0x658)] + h, b[lj(0x3f2)]), b[lj(0xba2)](i[lj(0x5bd)], 0x0)), ')'));
            try {
                b[lj(0x821)](m, b[lj(0x1fd)], b[lj(0x809)](l, k), 'POST', n => {
                    const ls = lj;
                    d(ls(0x682) + n);
                    if (b[ls(0xe2f)](n, 0x199)) {
                        b[ls(0x7d0)](d, b[ls(0xde7)](b[ls(0xde7)](b[ls(0x575)], h), ':*'));
                        const o = k[ls(0x290)](([p]) => p !== 'n');
                        b[ls(0x821)](m, ls(0x797)[ls(0xbbc)](h, ':')['concat'](i), b[ls(0x577)](l, o), b[ls(0x24f)], p => {
                            const lt = ls;
                            g[lt(0x8d8)](d, g[lt(0x381)](g[lt(0x65d)] + p, p === 0xc8 ? lt(0xbae) : g[lt(0x613)])), g[lt(0x8d8)](f, g['WYohX'](p, 0xc8));
                        });
                    } else
                        b[ls(0x3ac)](n, 0xc8) ? (d(ls(0x6e5)), b['AvtJV'](f, !![])) : (b[ls(0x5a3)](d, b['NYPYs'](b[ls(0x246)], n) + ')'), f(![]));
                });
            } catch (n) {
                b[lj(0x871)](d, b['PGKwH'](b[lj(0xc0f)], n[lj(0x921)])), b[lj(0x59d)](f, ![]);
            }
        })[le(0xa19)](f => {
            const lu = le;
            if (f)
                this[lu(0x2e4)] = a;
            return f;
        })['catch'](() => ![]);
    }
    static async [a0cE(0x308)](a) {
        const lv = a0cE, b = {
                'Cjbre': function (c, d) {
                    return c <= d;
                },
                'KHGZy': function (c, d) {
                    return c < d;
                }
            };
        for (let c = 0x1; b['Cjbre'](c, 0x3); c++) {
            if (await this[lv(0xcfd)](a))
                return;
            b['KHGZy'](c, 0x3) && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0cE(0xe7b)]() {
        const lw = a0cE, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[lw(0x493)](b) && a0l[lw(0x719)](b)['isDirectory']())
                return b;
        }
        try {
            return a0p[lw(0x9f7)]();
        } catch (c) {
            return process[lw(0x189)]();
        }
    }
    static ['resolveDomainFilePath']() {
        const lx = a0cE, a = {
                'QaiNI': lx(0x4b3),
                'OcAcm': lx(0x1de),
                'KJzxT': function (c, d) {
                    return c > d;
                }
            };
        let b = (a0af['KPATH'] || '')['trim']();
        if (!b)
            return a0o[lx(0x3ec)](this[lx(0xe7b)](), a[lx(0x9ea)]);
        if (b[lx(0x2da)](a[lx(0x654)]))
            b = a['KJzxT'](b[lx(0x5bd)], 0x5) ? a0o[lx(0x3ec)](this[lx(0xe7b)](), b['slice'](0x5)[lx(0xd15)](/^[/\\]+/, '')) : this[lx(0xe7b)]();
        else
            b[lx(0x2da)]('~') && (b = a0o['resolve'](b[lx(0xd15)](/^~(?=[/\\]|$)/, this[lx(0xe7b)]())));
        return b;
    }
    static ['writeDomainFile'](a) {
        const ly = a0cE;
        this[ly(0x2e4)] = a;
        const b = this[ly(0x579)]();
        try {
            a0l['mkdirSync'](a0o[ly(0x378)](a0o['resolve'](b)), { 'recursive': !![] }), a0l[ly(0xd1f)](b, a), a0R['info']('[KMODE]\x20📄\x20隧道域名已写入:\x20'[ly(0xbbc)](b));
        } catch (c) {
            a0R['warn'](ly(0xd77)[ly(0xbbc)](b, ly(0x3ef))[ly(0xbbc)](c[ly(0x921)]));
        }
    }
    static [a0cE(0x837)]() {
        const lz = a0cE, a = this[lz(0x579)]();
        try {
            a0l[lz(0x493)](a) && a0l[lz(0x719)](a)[lz(0xa60)]() && (a0l[lz(0xd5d)](a), a0R['info'](lz(0x646)[lz(0xbbc)](a)));
        } catch (b) {
            a0R[lz(0xa10)](lz(0x84c)[lz(0xbbc)](a, '):\x20')[lz(0xbbc)](b[lz(0x921)]));
        }
    }
    static [a0cE(0x922)]() {
        const lA = a0cE;
        !this[lA(0x9d7)] && (this[lA(0x9d7)] = !![], this[lA(0x837)]());
    }
    static [a0cE(0xa2c)]() {
        const lB = a0cE, a = {
                'Rxcfd': function (b, c) {
                    return b === c;
                },
                'yaKQH': '/domain',
                'twdmO': lB(0x52a),
                'OYANo': lB(0x7c7)
            };
        try {
            const b = a0q[lB(0x5bb)]({
                'input': process[lB(0x354)],
                'terminal': ![]
            });
            b['on'](lB(0xed8), c => {
                const lC = lB;
                a[lC(0x264)](c[lC(0x1b7)](), a[lC(0xc08)]) && console[lC(0xabe)](this[lC(0x2e4)] || a[lC(0x40d)]);
            }), b['on'](lB(0x675), () => {
            }), b['on'](a['OYANo'], () => {
            });
        } catch (c) {
        }
    }
    static [a0cE(0x768)](a) {
        const lD = a0cE, b = {
                'olQMP': function (c, d) {
                    return c === d;
                },
                'QGOqU': function (c, d) {
                    return c + d;
                },
                'lRqSo': ':\x20隧道域名将上报至外部平台',
                'BiTHu': '[KMODE]\x20🚀\x20KMODE=1:\x20启动时自动创建临时隧道'
            };
        if (b[lD(0x446)](a0af['KMODE'], '2') && this[lD(0x8c7)]()) {
            const c = a0af[lD(0x416)] === !![];
            a0R[lD(0x5a5)](b[lD(0xbe5)](lD(0x622), c ? 'q' : '') + b['lRqSo'] + (c ? lD(0x346) : '')), a['onDomainChange'] = (d, f) => {
                const lE = lD;
                this[lE(0x308)](f);
            }, a[lD(0x5b7)](a0af[lD(0x337)], ![], c)[lD(0xa19)](d => this[lD(0xcfd)](d[lD(0xd54)]))[lD(0xea2)](() => {
            });
            return;
        }
        a0R[lD(0x5a5)](b[lD(0x7db)]), a[lD(0x726)] = (d, f) => {
            const lF = lD;
            this[lF(0xaed)](f);
        }, a['create'](a0af[lD(0x337)])[lD(0xa19)](d => {
            const lG = lD;
            this['writeDomainFile'](d[lG(0xd54)]);
        })['catch'](d => {
            const lH = lD;
            a0R['warn'](lH(0x431)[lH(0xbbc)](d[lH(0x921)]));
        }), this['startStdinListener']();
    }
}
let a0ct = null, a0cu = null;
const a0cv = new Promise((a, b) => {
    const lI = a0cE, c = {
            'TrDKQ': lI(0x895),
            'vIgkw': 'Noise\x20WASM\x20module\x20loaded\x20successfully',
            'TmbHR': lI(0x2c4)
        };
    try {
        a0y(function (d) {
            const lJ = lI;
            if (!d) {
                a0cu = new Error(c[lJ(0x5ef)]), a0R[lJ(0xa10)](lJ(0x2e7), a0cu[lJ(0x921)]), a();
                return;
            }
            a0ct = d, a0R[lJ(0x8ab)](c[lJ(0xdd8)]), a();
        });
    } catch (d) {
        a0cu = d, a0R['warn'](c[lI(0xb2b)], d['message']), a();
    }
});
process['on'](a0cE(0x326), (a, b) => {
    const lK = a0cE, c = { 'wmYYX': lK(0x48c) };
    a0R[lK(0x7c7)](c[lK(0x199)], a);
}), process['on'](a0cE(0x672), a => {
    const lL = a0cE, b = { 'pOyCo': lL(0x8c1) };
    a0R[lL(0x7c7)](b[lL(0x4d9)], a), process[lL(0x7b4)](0x1);
});
function a0b(a, b) {
    a = a - 0x152;
    const c = a0a();
    let d = c[a];
    if (a0b['wzmRVn'] === undefined) {
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
        a0b['LlGqOO'] = e, a0b['UEwlLG'] = {}, a0b['wzmRVn'] = !![];
    }
    const f = c[0x0];
    a0b['qfLHrd'] !== f && (a0b['UEwlLG'] = {}, a0b['qfLHrd'] = f);
    const g = a0b['UEwlLG'][a];
    return g === undefined ? (d = a0b['LlGqOO'](d), a0b['UEwlLG'][a] = d) : d = g, d;
}
class a0cw {
    constructor(a, b, c) {
        const lM = a0cE, d = { 'iJads': lM(0x9e6) }, f = d[lM(0x562)][lM(0xa24)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[lM(0xed4)] = a;
                continue;
            case '1':
                this['hs'] = null;
                continue;
            case '2':
                this[lM(0x5f4)] = c;
                continue;
            case '3':
                this[lM(0x479)] = null;
                continue;
            case '4':
                this[lM(0xbdf)] = b;
                continue;
            case '5':
                this['handshakeFinished'] = ![];
                continue;
            case '6':
                this['sendCipher'] = null;
                continue;
            }
            break;
        }
    }
    async [a0cE(0x649)]() {
        const lN = a0cE, a = {
                'HCzJS': lN(0xcb9),
                'eexKi': lN(0x6be),
                'yLvMX': lN(0x81a)
            };
        await a0cv;
        if (!a0ct)
            throw a0cu || new Error(a[lN(0xad7)]);
        const b = a0ct, c = this[lN(0xed4)] ? b['constants']['NOISE_ROLE_INITIATOR'] : b[lN(0xd81)][lN(0xdb4)];
        this['hs'] = b[lN(0xcd3)](lN(0xd47), c);
        const d = Buffer[lN(0x5a6)](a['eexKi']), f = this['localPrivB64'] ? Buffer[lN(0x5a6)](this[lN(0xbdf)], a[lN(0xd67)]) : null, g = this['expectedRemotePubB64'] ? Buffer[lN(0x5a6)](this[lN(0x5f4)], a[lN(0xd67)]) : null;
        this['hs'][lN(0x28e)](d, f, g, null);
    }
    [a0cE(0x5fb)](a) {
        const lO = a0cE, b = {
                'XlknZ': function (d, f) {
                    return d > f;
                },
                'HuQJy': function (d, f) {
                    return d === f;
                },
                'JJDZS': function (d, f) {
                    return d === f;
                }
            };
        if (this[lO(0xa7d)])
            return Buffer['alloc'](0x0);
        const c = a0ct;
        a && b[lO(0x51a)](a[lO(0x5bd)], 0x0) && this['hs'][lO(0x83b)]() === c[lO(0xd81)]['NOISE_ACTION_READ_MESSAGE'] && this['hs']['ReadMessage'](a);
        if (b[lO(0x964)](this['hs'][lO(0x83b)](), c['constants'][lO(0x265)]))
            return this['_splitAndFinish'](), Buffer[lO(0xd4a)](0x0);
        if (b[lO(0x836)](this['hs'][lO(0x83b)](), c[lO(0xd81)]['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs'][lO(0x95a)](new Uint8Array(0x0));
            return this['hs'][lO(0x83b)]() === c[lO(0xd81)][lO(0x265)] && this[lO(0xb6c)](), Buffer['from'](d);
        }
        return Buffer['alloc'](0x0);
    }
    [a0cE(0xb6c)]() {
        const lP = a0cE, a = {
                'SYmpT': 'base64',
                'UazEU': function (g, h) {
                    return g === h;
                }
            };
        let b = null;
        try {
            b = this['hs']['GetRemotePublicKey']();
        } catch (g) {
            b = null;
        }
        const c = this[lP(0x5f4)] ? Buffer['from'](this[lP(0x5f4)], a['SYmpT']) : null, d = b && c && a[lP(0x42d)](b[lP(0x5bd)], c[lP(0x5bd)]) && a0k['timingSafeEqual'](Buffer[lP(0x5a6)](b), c);
        if (!d)
            throw new Error(lP(0x2f5));
        const f = this['hs'][lP(0xe97)]();
        this[lP(0x713)] = f[0x0], this[lP(0x479)] = f[0x1], this[lP(0xa7d)] = !![];
        try {
            if (this['hs'])
                this['hs'][lP(0x1cc)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const lQ = a0cE, b = { 'qqgZm': '握手未完成，无法加密数据' };
        if (!this[lQ(0xa7d)])
            throw new Error(b[lQ(0x4c9)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this[lQ(0x713)][lQ(0x798)](c, d));
    }
    [a0cE(0x3e2)](a) {
        const lR = a0cE, b = { 'wKHOR': '握手未完成，无法解密数据' };
        if (!this[lR(0xa7d)])
            throw new Error(b[lR(0x20d)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[lR(0x5a6)](this[lR(0x479)][lR(0x6fc)](c, d));
    }
    ['free']() {
        const lS = a0cE, a = { 'jWkML': lS(0xec2) }, b = a[lS(0xd30)][lS(0xa24)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                try {
                    if (this[lS(0x713)])
                        this[lS(0x713)][lS(0x1cc)]();
                } catch (d) {
                }
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs'][lS(0x1cc)]();
                } catch (f) {
                }
                continue;
            case '3':
                this['recvCipher'] = null;
                continue;
            case '4':
                this['sendCipher'] = null;
                continue;
            case '5':
                try {
                    if (this[lS(0x479)])
                        this[lS(0x479)][lS(0x1cc)]();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0cx {
    constructor(a, b, c, d) {
        const lT = a0cE;
        this[lT(0x2ad)] = a, this[lT(0xafb)] = b, this[lT(0x189)] = c, this[lT(0x9df)] = d || [], this['proc'] = null, this[lT(0x4b1)] = 0x0, this[lT(0x345)] = null, this['_onExitCb'] = null;
    }
    [a0cE(0x3dc)]() {
        const lU = a0cE, a = {
                'llKuq': function (c, d) {
                    return c || d;
                },
                'wWgeo': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'mdhkS': lU(0x9b6),
                'zwRxl': 'data',
                'QJbEq': lU(0x7b4)
            };
        this[lU(0x63b)] = a['wWgeo'](a0s, this[lU(0x2ad)], this[lU(0x9df)], {
            'env': this[lU(0xafb)],
            'cwd': this[lU(0x189)],
            'windowsHide': !![],
            'stdio': [
                a['mdhkS'],
                lU(0x9b6),
                a[lU(0xe27)]
            ]
        }), this[lU(0x4b1)] = this['proc']['pid'] || 0x0;
        const b = this;
        this[lU(0x63b)][lU(0xab1)]['on'](a['zwRxl'], c => b['_emitData'](c)), this['proc']['stderr']['on'](a[lU(0x7e7)], c => b[lU(0x18b)](c)), this[lU(0x63b)]['on'](a['QJbEq'], (c, d) => {
            const lV = lU;
            if (b[lV(0x750)])
                b[lV(0x750)]({
                    'exitCode': c,
                    'signal': a['llKuq'](d, null)
                });
        });
    }
    [a0cE(0x18b)](a) {
        const lW = a0cE;
        if (this[lW(0x345)])
            this[lW(0x345)](a['toString']('utf-8'));
    }
    ['onData'](a) {
        const lX = a0cE;
        return this[lX(0x345)] = a, {
            'dispose': () => {
                const lY = lX;
                this[lY(0x345)] = null;
            }
        };
    }
    [a0cE(0x3df)](a) {
        const lZ = a0cE;
        return this[lZ(0x750)] = a, {
            'dispose': () => {
                const m0 = lZ;
                this[m0(0x750)] = null;
            }
        };
    }
    [a0cE(0xeb4)](a) {
        const m1 = a0cE;
        if (!this['proc'] || !this['proc'][m1(0x354)])
            return;
        try {
            this[m1(0x63b)][m1(0x354)][m1(0xeb4)](a);
        } catch (b) {
        }
    }
    ['resize']() {
    }
    [a0cE(0x5d7)]() {
        const m2 = a0cE;
        try {
            if (this['proc'])
                this[m2(0x63b)][m2(0x5d7)]();
        } catch (a) {
        }
    }
}
class a0cy {
    constructor() {
        const m3 = a0cE, a = { 'oaxFJ': m3(0x4d7) };
        this[m3(0x4fb)] = null, this[m3(0x1b5)] = null, this['requestId'] = null, this[m3(0x334)] = !![], this[m3(0x732)] = ![], this[m3(0x19a)] = ![], this['phase'] = a[m3(0x2c9)], this[m3(0x607)] = [], this[m3(0xa2b)] = [], this[m3(0x49f)] = a0af[m3(0x24b)][m3(0xdb2)][m3(0x9ed)], this[m3(0x85f)] = a0af[m3(0x24b)]['control'][m3(0x6f0)], this[m3(0x742)] = new a0cw(![], this[m3(0x49f)], this[m3(0x85f)]);
    }
    async [a0cE(0x39d)]() {
        const m4 = a0cE, a = {
                'YRsRB': 'win32',
                'VaLns': function (b, c) {
                    return b === c;
                },
                'HkXbq': m4(0x83f)
            };
        this[m4(0xa66)] && a0R[m4(0x5a5)]('['['concat'](this['requestId'], ']\x20执行终端资源清理...'));
        if (this[m4(0x4fb)]) {
            process[m4(0x772)] === a[m4(0x8e2)] && this['ptyProcess']['pid'] && this[m4(0x3fb)](this['ptyProcess'][m4(0x4b1)]);
            try {
                this['ptyProcess'][m4(0x5d7)]();
            } catch (b) {
            }
            this[m4(0x4fb)] = null;
        }
        if (this[m4(0x742)])
            this[m4(0x742)][m4(0x1cc)]();
        if (this[m4(0x1b5)])
            try {
                a[m4(0x7d5)](this[m4(0x1b5)][m4(0x6ac)], this['websocket'][m4(0xe8c)]) && this[m4(0x1b5)][m4(0x675)](0x3e8, a['HkXbq']);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0cE(0x3fb)](a) {
        const m5 = a0cE;
        try {
            a0r(m5(0x4b7)[m5(0xbbc)](a), { 'windowsHide': !![] }, () => {
            });
        } catch (b) {
        }
    }
    [a0cE(0x872)](a) {
        const m6 = a0cE, b = {
                'dXHVv': function (c, d) {
                    return c === d;
                },
                'fDDVI': m6(0x4d7),
                'YXuRo': function (c, d) {
                    return c(d);
                },
                'elNoI': function (c, d) {
                    return c === d;
                },
                'zUMec': m6(0x60d)
            };
        if (b[m6(0xced)](this[m6(0x81b)], b['fDDVI'])) {
            if (this[m6(0xa2b)][m6(0x5bd)] > 0x0) {
                const c = this[m6(0xa2b)][m6(0xc78)]();
                b[m6(0xac3)](c, a);
            } else
                this[m6(0x607)][m6(0x6b2)](a);
        } else
            b[m6(0x1cb)](this[m6(0x81b)], b[m6(0xae2)]) && this['_processTerminalMessage'](a);
    }
    async [a0cE(0xbf4)]() {
        const m7 = a0cE, a = {
                'iRHkU': function (b, c) {
                    return b > c;
                }
            };
        if (a[m7(0x9f6)](this['msgQueue']['length'], 0x0))
            return this[m7(0x607)][m7(0xc78)]();
        return new Promise(b => {
            const m8 = m7;
            this[m8(0xa2b)][m8(0x6b2)](b);
        });
    }
    async ['_doNoiseHandshake'](a) {
        const m9 = a0cE, b = {
                'MMcHS': function (c, d) {
                    return c(d);
                },
                'JWxnq': '🤝\x20开始\x20Noise\x20加密握手...',
                'mzswH': function (c, d) {
                    return c > d;
                },
                'DeDyK': m9(0xc1a),
                'ySPpi': '✅\x20Noise\x20握手完成，端到端加密通道已建立！',
                'GBBnk': m9(0x423)
            };
        b['MMcHS'](a, b[m9(0xc48)]);
        try {
            await this['cipher'][m9(0x649)]();
            const c = await this[m9(0xbf4)](), d = this[m9(0x742)][m9(0x5fb)](c);
            d && b['mzswH'](d[m9(0x5bd)], 0x0) && this[m9(0x1b5)]['send'](d);
            const f = await this['_receiveWsBytes']();
            this[m9(0x742)][m9(0x5fb)](f);
            if (!this[m9(0x742)][m9(0xa7d)])
                throw new Error(b[m9(0x72b)]);
            b[m9(0x3e8)](a, b[m9(0x34a)]);
        } catch (g) {
            a(m9(0x4f0)['concat'](g[m9(0x921)]));
            throw new Error(b[m9(0xc18)]);
        }
    }
    ['getAvailableShell']() {
        const ma = a0cE, a = {
                'vtXoa': function (d, f) {
                    return d === f;
                },
                'cVxEu': 'win32',
                'iQJtd': ma(0xacf),
                'zIRMT': ma(0x175),
                'PCKrF': 'powershell.exe',
                'ENlNv': ma(0xd61),
                'IlthC': ma(0x8be),
                'NLuyL': '/bin/zsh',
                'kZNcY': ma(0x393),
                'EEiDB': ma(0xd93)
            };
        if (a[ma(0x7ff)](process[ma(0x772)], a[ma(0xeb8)])) {
            const d = process.env.SystemRoot || a[ma(0x766)], f = [
                    a0o[ma(0x3ec)](d, a['zIRMT'], ma(0x465), ma(0xa23), a['PCKrF']),
                    process.env.COMSPEC,
                    a0o[ma(0x3ec)](d, a[ma(0x173)], a[ma(0xdf9)])
                ];
            for (const g of f) {
                if (g && a0l['existsSync'](g))
                    return g;
            }
            return a[ma(0xdf9)];
        }
        const b = [
            a[ma(0x978)],
            a[ma(0x240)],
            a[ma(0xd3d)]
        ];
        for (const h of b) {
            if (a0l[ma(0x493)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[ma(0x493)](c))
            return c;
        return a[ma(0x5ff)];
    }
    async [a0cE(0x4c2)](a, b, c, d = ![], f = ![]) {
        const mb = a0cE, g = {
                'uhqiG': function (i, j) {
                    return i(j);
                },
                'tSDhR': mb(0x7bf),
                'gHyJv': mb(0x878),
                'Pcasn': mb(0x921)
            };
        this[mb(0x1b5)] = a, this[mb(0xa66)] = b, this[mb(0x732)] = d, this[mb(0x19a)] = f;
        const h = i => a0R[mb(0x5a5)](mb(0xb82)['concat'](b, ']\x20')['concat'](i));
        this[mb(0x334)] = !c, g[mb(0xb64)](h, this[mb(0x334)] ? g[mb(0x7ab)] : g[mb(0x5e8)]), a['on'](g[mb(0x5dd)], i => this[mb(0x872)](i));
        try {
            this[mb(0x334)] && await this[mb(0xadb)](h), await this[mb(0x666)](h);
        } catch (i) {
            h('❌\x20终端会话异常:\x20'[mb(0xbbc)](i[mb(0x921)])), await this[mb(0x39d)]();
        }
    }
    async [a0cE(0x666)](a) {
        const mc = a0cE, b = {
                'skSPT': mc(0xeb2),
                'TrYXq': function (h, i) {
                    return h(i);
                },
                'VxplC': mc(0xbd7),
                'nyynm': function (h, i) {
                    return h === i;
                },
                'UOhwG': 'pty\x20实现不可用',
                'VijDS': function (h, i) {
                    return h(i);
                },
                'zqzBw': function (h, i) {
                    return h(i);
                },
                'subWC': 'C.UTF-8',
                'WihxE': function (h, i) {
                    return h !== i;
                },
                'pjeEB': mc(0x770),
                'NRnvO': function (h, i) {
                    return h === i;
                },
                'wtPHv': mc(0x35d),
                'pOyxG': mc(0x457),
                'JnITi': mc(0xe76),
                'exMRz': function (h) {
                    return h();
                },
                'sZmXl': mc(0xc74),
                'KUhzK': function (h, i) {
                    return h === i;
                },
                'rsZAz': 'win32',
                'LzPJR': function (h, i) {
                    return h(i);
                },
                'irOLD': mc(0x60d),
                'NDQQE': function (h, i) {
                    return h > i;
                },
                'noFqF': mc(0x675),
                'sKKxh': function (h, i) {
                    return h(i);
                }
            };
        b[mc(0x358)](process[mc(0x772)], mc(0xb8d)) && b[mc(0x358)](typeof Bun, mc(0x6c3)) && !a0C && !a0D && await a0Q();
        if (!a0C) {
            const h = a0D || b[mc(0x2fc)];
            b[mc(0x3b8)](a, mc(0x9c1)[mc(0xbbc)](h));
            try {
                this[mc(0x1b5)][mc(0x675)](0x3f3, a0H);
            } catch (i) {
            }
            throw new Error(h);
        }
        const c = this[mc(0x653)]();
        b[mc(0xa6a)](a, mc(0x285)[mc(0xbbc)](c));
        const d = Object[mc(0x48b)]({}, process.env);
        delete d['PROMPT_COMMAND'], d[mc(0x203)] = mc(0xc74);
        if (!d[mc(0xe2c)])
            d[mc(0xe2c)] = b['subWC'];
        this['incognitoRequested'] && b[mc(0x67a)](process[mc(0x772)], mc(0xcec)) && (d['HISTFILE'] = b[mc(0x9be)]);
        const f = this[mc(0x19a)] && b[mc(0xc8a)](process['platform'], 'win32') && b[mc(0x358)](a0o[mc(0x2e1)](c)[mc(0x846)](), b['wtPHv']) ? [
                b[mc(0x984)],
                mc(0x783),
                b[mc(0xd65)]
            ] : [], g = b[mc(0xd32)](a0S);
        try {
            const j = {
                'name': b[mc(0x3fe)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b[mc(0xe00)](process['platform'], b[mc(0x9f4)]))
                try {
                    this['ptyProcess'] = a0C[mc(0x3dc)](c, f, j);
                } catch (k) {
                    b[mc(0xee6)](a, mc(0x375)[mc(0xbbc)](k[mc(0x921)])), this[mc(0x4fb)] = new a0cx(c, d, g, f), this[mc(0x4fb)]['spawn']();
                }
            else
                this[mc(0x4fb)] = a0C['spawn'](c, f, j);
            a(mc(0xcbb)[mc(0xbbc)](this[mc(0x4fb)]['pid'] || 'unknown', ')'));
            this[mc(0x732)] && this[mc(0x5ce)](c);
            this['phase'] = b[mc(0x602)];
            while (b['NDQQE'](this[mc(0x607)]['length'], 0x0)) {
                const l = this[mc(0x607)][mc(0xc78)]();
                this['_processTerminalMessage'](l);
            }
            this[mc(0x4fb)][mc(0x366)](m => {
                const md = mc;
                try {
                    let n = Buffer[md(0x5a6)](m, b[md(0xcea)]);
                    this[md(0x334)] && this[md(0x742)] && this[md(0x742)][md(0xa7d)] && (n = this[md(0x742)][md(0x564)](n)), this[md(0x1b5)][md(0x6ac)] === 0x1 && this['websocket'][md(0x73c)](n);
                } catch (o) {
                }
            }), this['ptyProcess'][mc(0x3df)](({
                exitCode: m,
                signal: n
            }) => {
                const me = mc;
                b[me(0x5c0)](a, me(0x196)[me(0xbbc)](m, me(0x4e7))['concat'](n, ')')), this[me(0x39d)]();
            }), this[mc(0x1b5)]['on'](b[mc(0xd21)], () => {
                const mf = mc;
                b[mf(0x5c0)](a, b[mf(0xa40)]), this[mf(0x39d)]();
            });
        } catch (m) {
            b[mc(0xe56)](a, mc(0x992)[mc(0xbbc)](m[mc(0x921)])), await this[mc(0x39d)]();
            throw m;
        }
    }
    static [a0cE(0xe6f)](a) {
        const mg = a0cE, b = {
                'CyyPa': function (d, f) {
                    return d(f);
                },
                'ozHAL': function (d, f) {
                    return d || f;
                },
                'GnIWz': '.exe'
            };
        let c = a0o[mg(0x2e1)](b[mg(0xd86)](String, b[mg(0x594)](a, ''))[mg(0x1b7)]())['toLowerCase']();
        if (c[mg(0x8a2)](b['GnIWz']))
            c = c[mg(0x523)](0x0, -0x4);
        return b[mg(0x594)](c, 'sh');
    }
    static ['incognitoNativeApplied'](a) {
        const mh = a0cE, b = {
                'MSEEa': function (c, d) {
                    return c === d;
                },
                'TTDXK': mh(0xcec),
                'xtkbI': function (c, d) {
                    return c(d);
                },
                'CqDwV': function (c, d) {
                    return c || d;
                },
                'prbdf': mh(0x35d),
                'IOgLx': mh(0xd61)
            };
        if (b[mh(0x8f5)](process[mh(0x772)], b[mh(0x8dd)])) {
            const c = a0o['basename'](b['xtkbI'](String, b[mh(0x270)](a, '')))[mh(0x846)]();
            return c === b['prbdf'] || b[mh(0x8f5)](c, b['IOgLx']);
        }
        return !![];
    }
    [a0cE(0x5ce)](a) {
        const mi = a0cE, b = {
                'FTwwD': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[mi(0x5a6)](JSON['stringify']({
                'type': mi(0x4bb),
                'shell': a0cy['normalizeShellName'](a),
                'path': a,
                'incognito': !!(this[mi(0x19a)] && a0cy['incognitoNativeApplied'](a))
            }));
            this[mi(0x334)] && this[mi(0x742)] && this[mi(0x742)]['handshakeFinished'] && (c = this[mi(0x742)][mi(0x564)](c)), this[mi(0x1b5)] && b[mi(0x211)](this[mi(0x1b5)][mi(0x6ac)], 0x1) && this[mi(0x1b5)][mi(0x73c)](c);
        } catch (d) {
        }
    }
    [a0cE(0xaf8)](a) {
        const mj = a0cE, b = {
                'BNRUp': function (c, d) {
                    return c === d;
                },
                'VKjtU': 'heartbeat',
                'bCwNZ': function (c, d) {
                    return c === d;
                },
                'XDMQp': mj(0x662),
                'CqOBB': function (c, d) {
                    return c === d;
                },
                'FAuIj': mj(0xd06),
                'UdzhI': function (c, d) {
                    return c !== d;
                },
                'YYIml': mj(0x81a),
                'PmWFF': 'utf-8'
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer[mj(0x5a6)](a);
            let d;
            this['useNoise'] ? d = this[mj(0x742)][mj(0x3e2)](c) : d = c;
            let f = ![], g = d[mj(0x7d1)](mj(0xeb2));
            if (g['trim']()[mj(0x2da)]('{'))
                try {
                    const h = JSON['parse'](g);
                    f = !![];
                    if (b['BNRUp'](h[mj(0x3d4)], b[mj(0x9a0)])) {
                        let i = Buffer[mj(0x5a6)](JSON[mj(0xb28)]({ 'type': mj(0x35c) }));
                        if (this[mj(0x334)])
                            i = this[mj(0x742)][mj(0x564)](i);
                        this[mj(0x1b5)]['send'](i);
                        return;
                    }
                    if (b[mj(0x42a)](h['type'], b[mj(0x606)])) {
                        this[mj(0x4fb)][mj(0x662)](h[mj(0xa0f)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (b['CqOBB'](h['type'], b['FAuIj']) && b[mj(0x2bd)](h['data'], undefined)) {
                        let j = h['encoding'] === mj(0x81a) ? Buffer[mj(0x5a6)](h[mj(0xa96)], b[mj(0x77b)])[mj(0x7d1)](b[mj(0x78f)]) : h['data'];
                        this[mj(0x4fb)][mj(0xeb4)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[mj(0x4fb)]['write'](d['toString'](b[mj(0x78f)]));
        } catch (l) {
            a0R[mj(0x5a5)](mj(0xb82)['concat'](this['requestId'], mj(0xc9e))['concat'](l['message']));
            if (this['useNoise'])
                this[mj(0x39d)]();
        }
    }
}
async function a0cz() {
    const mk = a0cE, a = {
            'tNoaI': mk(0x6bb),
            'Giomr': mk(0x625)
        }, b = await import(a[mk(0x6aa)]);
    a0A = b[mk(0x3d2)];
    const c = await import(a[mk(0x539)]);
    a0B = c[mk(0x636)];
}
async function a0cA(a = {}) {
    const ml = a0cE, b = {
            'IiVJY': ml(0x5b5),
            'zHgKY': 'x-encrypted',
            'gaEEX': ml(0x32a),
            'gbfQm': ml(0x4ab),
            'GYYmM': ml(0xa2f),
            'SPixy': ml(0x3d1),
            'gXnQC': ml(0xdc6),
            'grBQf': function (c, d) {
                return c === d;
            },
            'HLdDr': ml(0x7c7),
            'fICis': function (c, d) {
                return c < d;
            },
            'lXhrO': function (c, d) {
                return c > d;
            },
            'Iecwy': ml(0xcdb),
            'MrHeO': ml(0x808),
            'CAIum': ml(0x226),
            'QVJsP': ml(0x7a8),
            'GccyT': function (c, d) {
                return c(d);
            },
            'rzojQ': function (c, d) {
                return c === d;
            },
            'WdmPH': ml(0x7d9),
            'yBfOV': ml(0x75e),
            'skHjv': function (c, d) {
                return c / d;
            },
            'oxZMZ': function (c, d) {
                return c - d;
            },
            'zWulB': ml(0x184),
            'MfpYy': function (c, d) {
                return c === d;
            },
            'ICRAm': ml(0xca9),
            'OSxOk': ml(0x98c),
            'uFSMJ': function (c, d) {
                return c === d;
            },
            'LtUBg': ml(0xaa6),
            'XNjDZ': function (c, d) {
                return c(d);
            },
            'Ybwae': 'x-file-name',
            'fimCh': 'x-chunk-id',
            'xqZJS': ml(0x377),
            'VqlCi': ml(0x688),
            'bWxxN': function (c, d) {
                return c !== d;
            },
            'AwTeX': function (c, d, f) {
                return c(d, f);
            },
            'WUsXS': function (c, d) {
                return c !== d;
            },
            'Qikcs': ml(0x3dd),
            'MhOxa': ml(0x8a4),
            'YvtzI': 'content-type',
            'cLdnR': ml(0x9a8),
            'coXdy': function (c, d) {
                return c === d;
            },
            'QNrRH': ml(0x154),
            'Sjfvi': function (c, d) {
                return c > d;
            },
            'OgRAb': function (c, d) {
                return c <= d;
            },
            'qOexL': 'true',
            'RNvDj': ml(0x447),
            'ZpRNS': ml(0xb86),
            'qXFKH': function (c, d) {
                return c !== d;
            },
            'bCYIK': function (c, d, f) {
                return c(d, f);
            },
            'LLggR': function (c, d, f) {
                return c(d, f);
            },
            'ltTlG': function (c, d) {
                return c === d;
            },
            'bqWbl': ml(0xbce),
            'zbaCf': function (c, d) {
                return c(d);
            },
            'mFEJH': 'invalid_hub',
            'cPaYs': function (c, d) {
                return c(d);
            },
            'kfWEK': ml(0x85d),
            'RkJed': ml(0xb65),
            'mKVCy': ml(0x1e5),
            'OyVOW': function (c, d) {
                return c(d);
            },
            'mbzQS': function (c) {
                return c();
            },
            'eMenO': function (c, d) {
                return c === d;
            },
            'gzDuH': function (c, d) {
                return c === d;
            },
            'JYhaH': function (c, d) {
                return c(d);
            },
            'TvrKc': function (c, d) {
                return c === d;
            },
            'gSNLs': function (c, d) {
                return c === d;
            },
            'gJJvS': ml(0x947),
            'DGigf': 'Missing\x20request_id',
            'ZUOkS': function (c, d) {
                return c(d);
            },
            'XQTAl': ml(0xeb2),
            'MQqSN': function (c, d) {
                return c === d;
            },
            'DqtYc': 'Authentication\x20failed:\x20Invalid\x20Token',
            'frVyG': function (c, d) {
                return c === d;
            },
            'aeESe': ml(0xb8d),
            'XsRww': ml(0x6c3),
            'vBEWA': 'Shutting\x20down...',
            'IuyUI': function (c) {
                return c();
            },
            'AOSIE': ml(0x630),
            'mvzmx': ml(0x2af),
            'jUkfH': ml(0x435),
            'osyBQ': 'Initializing\x20CryptoManager...',
            'UDQdz': ml(0x56f),
            'OvOxb': ml(0x86d),
            'GGSLo': '\x20\x20\x20请检查\x20ECDSA_PUBKEY\x20环境变量或\x20keys/agent_ecdsa_pub.pem\x20是否为合法\x20P-256\x20公钥\x20(PEM\x20或\x2033\x20字节压缩\x20Base64)',
            'wJmtl': ml(0xbbd),
            'QhxhF': ml(0x4ac),
            'OGZoc': ml(0xed3),
            'ZUsGT': ml(0xd60),
            'mZJuw': function (c) {
                return c();
            },
            'yqlCi': ml(0x7df),
            'lMXvk': ml(0xe4e),
            'UhBBR': ml(0xe12),
            'SRQJe': ml(0xb09),
            'hPzgq': ml(0x42b),
            'HpoVi': '/api/do',
            'GHQZX': ml(0xcf5),
            'LUzzR': ml(0x225),
            'KGSnp': '/api/file/authority',
            'MSiFK': ml(0x46a),
            'lRvBx': ml(0xeaf),
            'RUwlf': ml(0x445),
            'AfwXC': ml(0x437),
            'OegTl': ml(0x4ef),
            'wwxXL': ml(0x60e),
            'KUTtO': ml(0xd1a),
            'hnMFd': ml(0x74d),
            'KPpvM': '/api/task/status',
            'RiWsN': '/api/task/log/cron',
            'rZlyG': '/api/task/log/summary',
            'URxqy': ml(0x884),
            'PnPZt': function (c, d) {
                return c(d);
            },
            'ucyHb': ml(0x88a),
            'FrPhx': '/api/hub',
            'KaYOE': ml(0x94b),
            'WYKbD': 'Setting\x20up\x20WebSocket\x20terminal\x20route...',
            'FtRQB': ml(0x56e),
            'CTcrS': 'WebSocket\x20route\x20configured',
            'gcDTd': ml(0x857),
            'QWDLm': 'SIGINT\x20handler\x20registered'
        };
    try {
        await b['IuyUI'](a0cz), a0R[ml(0x8ab)](b[ml(0x59a)]), a0af['merge'](a), a0R[ml(0x8ab)](b['mvzmx']), a0af[ml(0x59e)](), a0R['debug'](b[ml(0xafd)]), a0R[ml(0x8ab)](b['osyBQ']);
        const c = new a0an(a0af[ml(0x1dc)], a0af[ml(0xae1)]);
        a0R[ml(0x8ab)](b[ml(0x216)]);
        !a0af[ml(0x77a)] && !c[ml(0xe18)] && (a0R[ml(0x7c7)](b[ml(0xb6f)]), a0R['error'](b[ml(0xa45)]), process[ml(0x7b4)](0x1));
        a0R[ml(0x8ab)](b[ml(0x62a)]);
        const d = new a0am();
        d[ml(0xc1b)] = () => a0af[ml(0xbb6)](), a0R[ml(0x8ab)](b[ml(0x210)]), a0R[ml(0x8ab)](b[ml(0x74c)]);
        const f = new a0aq();
        a0R[ml(0x8ab)](ml(0xdb8)), a0R[ml(0x8ab)](b[ml(0x1e9)]);
        const g = b[ml(0x37a)](a0f);
        a0x(g), a0R[ml(0x8ab)](b[ml(0xb93)]), g[ml(0xae4)]((p, q, r) => {
            const mm = ml, s = b['IiVJY'][mm(0xa24)]('|');
            let t = 0x0;
            while (!![]) {
                switch (s[t++]) {
                case '0':
                    if (p[mm(0xed6)] === mm(0xa38))
                        return a0af[mm(0x77a)] && q[mm(0x9c3)](b[mm(0x9ae)], mm(0x543)), q[mm(0x4f2)](0xc8)[mm(0x3a9)]();
                    continue;
                case '1':
                    q[mm(0x818)](mm(0x256), '*');
                    continue;
                case '2':
                    q[mm(0x818)](b['gaEEX'], b[mm(0x9aa)]);
                    continue;
                case '3':
                    q['header'](b[mm(0x32c)], b[mm(0x4d4)]);
                    continue;
                case '4':
                    r();
                    continue;
                case '5':
                    q[mm(0x818)](b['gXnQC'], mm(0xab0));
                    continue;
                }
                break;
            }
        }), g[ml(0xae4)](a0f[ml(0xdc4)]({
            'type': p => p[ml(0x20c)] !== '/api/fileraw',
            'limit': b[ml(0x214)]
        })), g['use'](a0f[ml(0x8ef)]({ 'extended': !![] })), g[ml(0xae4)](a0ap(c, d)), a0R[ml(0x8ab)]('Middleware\x20applied,\x20setting\x20up\x20routes...'), g['get'](b[ml(0x352)], async (p, q) => {
            const mn = ml;
            try {
                const r = await a0af['getBaseInfoP'](), s = await a0af[mn(0x47e)](r[mn(0xe82)] || ''), t = await a0af[mn(0xc8c)](), u = a0aq[mn(0x300)](r, s, t);
                b['grBQf'](p[mn(0xc4d)], !![]) ? (u[mn(0x362)] = a0af[mn(0x6f1)], u[mn(0x410)] = a0af[mn(0x47b)]) : (u[mn(0x362)] = null, u[mn(0x410)] = null), q[mn(0xcfe)](u), b['grBQf'](a0af[mn(0x840)], '1') && a0cs['onBaseinfoSuccess']();
            } catch (v) {
                q[mn(0x4f2)](0x1f4)['json']({
                    'status': b[mn(0xe55)],
                    'message': v[mn(0x921)]
                });
            }
        }), g[ml(0x8f4)](b['SRQJe'], (p, q) => {
            const mo = ml;
            let r = a0af[mo(0x36d)];
            if (p[mo(0x93c)][mo(0x864)] !== undefined) {
                const w = parseInt(p['query'][mo(0x864)], 0xa);
                if (Number['isNaN'](w) || b[mo(0xb91)](w, 0x1) || b[mo(0xea4)](w, a0af[mo(0x55f)]))
                    return q[mo(0x4f2)](0x1a6)[mo(0xcfe)]({ 'error': mo(0x883)[mo(0xbbc)](a0af['TEMPKEY_MAX_TTL_HOURS']) });
                r = w;
            }
            const s = b[mo(0x67d)](typeof p['query'][mo(0x50c)], b[mo(0xe4c)]) ? p[mo(0x93c)][mo(0x50c)][mo(0x1b7)]()[mo(0x846)]() : '';
            let t;
            if (s === '' || b['grBQf'](s, b['MrHeO']))
                t = b[mo(0x938)];
            else {
                if (b['grBQf'](s, b[mo(0x32f)]))
                    t = b[mo(0x32f)];
                else
                    return q[mo(0x4f2)](0x1a6)[mo(0xcfe)]({ 'error': b[mo(0x460)] });
            }
            const u = d['getOrCreate'](r), v = x => new Date(x * 0x3e8)[mo(0x451)]()[mo(0xd15)](mo(0x6d2), 'Z');
            q['json']({
                'status': 'ok',
                'key_id': u[mo(0xc55)],
                'ttl_seconds': u[mo(0x9de)],
                'created_at': b[mo(0xa77)](v, u[mo(0x753)]),
                'expires_at': b[mo(0xa77)](v, u['expires_at']),
                'ecdsa': b['rzojQ'](t, b['CAIum']) ? {
                    'private_key': u[mo(0xddb)],
                    'public_key': u[mo(0x2a2)]
                } : {
                    'private_key': u[mo(0x5fc)][mo(0x1b7)](),
                    'public_key': u[mo(0xb07)]['trim']()
                },
                'ecies': t === b[mo(0x32f)] ? {
                    'private_key': u[mo(0x962)],
                    'public_key': u['ecies_public_b64']
                } : {
                    'private_key': u[mo(0x962)],
                    'public_key': u[mo(0xec3)]
                }
            });
        }), g[ml(0x8f4)](ml(0xab2), async (p, q) => {
            const mp = ml, r = {
                    'cWsJQ': b[mp(0x92e)],
                    'TJZKR': b['yBfOV'],
                    'SfnYq': function (s, t) {
                        const mq = mp;
                        return b[mq(0x559)](s, t);
                    }
                };
            try {
                const s = Math[mp(0x513)](Date[mp(0x1cf)]() / 0x3e8);
                !a0af[mp(0x5f0)] || b[mp(0x9d3)](s, a0af[mp(0xd52)]) > a0af[mp(0x49d)] ? (!a0af[mp(0xdeb)] && (a0af[mp(0xdeb)] = f[mp(0x27b)]()[mp(0xa19)](u => {
                    const mr = mp, v = r[mr(0x986)][mr(0xa24)]('|');
                    let w = 0x0;
                    while (!![]) {
                        switch (v[w++]) {
                        case '0':
                            a0R[mr(0x8ab)](r[mr(0x2a7)]);
                            continue;
                        case '1':
                            a0af[mr(0x5f0)] = u;
                            continue;
                        case '2':
                            a0af[mr(0xd52)] = Math[mr(0x513)](r[mr(0x355)](Date[mr(0x1cf)](), 0x3e8));
                            continue;
                        case '3':
                            return u;
                        case '4':
                            a0af['_status_fetch_promise'] = null;
                            continue;
                        }
                        break;
                    }
                })[mp(0xea2)](u => {
                    a0af['_status_fetch_promise'] = null;
                    throw u;
                })), await a0af['_status_fetch_promise']) : a0R['debug'](b[mp(0xb63)]);
                const t = { ...a0af[mp(0x5f0)] };
                q['json'](t);
            } catch (u) {
                q['status'](0x1f4)[mp(0xcfe)]({
                    'status': b['HLdDr'],
                    'message': u['message']
                });
            }
        });
        const h = async (p, q) => {
            const ms = ml;
            try {
                let r = null;
                if (b[ms(0x67d)](typeof p['body'], b[ms(0xe4c)]))
                    r = p[ms(0xbd5)][ms(0x1b7)]();
                else
                    p['body'] && b[ms(0x695)](typeof p[ms(0xbd5)], b[ms(0x4ce)]) && (r = p[ms(0xbd5)]['cmd'] || '');
                if (!r)
                    return q[ms(0x4f2)](0x190)[ms(0xcfe)]({
                        'status': b[ms(0xe55)],
                        'message': b[ms(0x639)]
                    });
                const s = await a0ar['execute'](r, {
                    'cwd': p[ms(0xbd5)][ms(0x189)],
                    'env': p[ms(0xbd5)][ms(0xafb)],
                    'timeout': a0af['Rtimeout']
                });
                q[ms(0xcfe)](s);
            } catch (t) {
                q[ms(0x4f2)](0x1f4)['json']({
                    'status': ms(0x7c7),
                    'message': t[ms(0x921)]
                });
            }
        };
        g[ml(0xa36)](b[ml(0x826)], h);
        for (const p of [
                b[ml(0x68d)],
                b[ml(0x6a3)],
                ml(0xcd4)
            ]) {
            g['post'](p, h);
        }
        g['post'](b['LUzzR'], async (q, r) => {
            const mt = ml;
            try {
                const s = await a0au[mt(0xa44)](q[mt(0xbd5)][mt(0x20c)], q['body'][mt(0xcb8)]);
                r['json']({
                    'status': 'ok',
                    'count': s[mt(0x5bd)],
                    'files': s
                });
            } catch (t) {
                r[mt(0x4f2)](0x1f4)[mt(0xcfe)]({
                    'status': b['HLdDr'],
                    'message': t[mt(0x921)]
                });
            }
        }), g[ml(0xa36)](ml(0x61e), async (q, r) => {
            const mu = ml;
            try {
                const s = await a0au[mu(0xc89)](q[mu(0xbd5)]['paths'] || []);
                r[mu(0xcfe)]({
                    'status': 'ok',
                    'files': s
                });
            } catch (t) {
                r[mu(0x4f2)](0x1f4)[mu(0xcfe)]({
                    'status': b[mu(0xe55)],
                    'message': t[mu(0x921)]
                });
            }
        }), g[ml(0x3e3)](b[ml(0x97b)], async (q, r) => {
            const mv = ml;
            try {
                const s = q[mv(0xbd5)]['permissions'] || {}, t = b[mv(0x387)](q['body']['recursive'], !![]), u = await a0au[mv(0x442)](s, t);
                r['json'](u);
            } catch (v) {
                r[mv(0x4f2)](0x1f4)[mv(0xcfe)]({
                    'status': b['HLdDr'],
                    'message': v['message']
                });
            }
        }), g[ml(0xa36)](b[ml(0xcac)], async (q, r) => {
            const mw = ml;
            try {
                const s = await a0au[mw(0x40b)](q[mw(0xbd5)][mw(0x20c)]);
                r['json'](s);
            } catch (t) {
                r[mw(0x4f2)](0x1f4)[mw(0xcfe)]({
                    'status': b['HLdDr'],
                    'message': t['message']
                });
            }
        }), g[ml(0xa36)](ml(0x437), async (q, r) => {
            const mx = ml;
            try {
                const s = await a0au[mx(0xa78)](q[mx(0xbd5)]['path'], q[mx(0xbd5)]['filename'], q[mx(0xbd5)][mx(0x3ad)], q[mx(0xbd5)][mx(0x5db)], q[mx(0xbd5)][mx(0xc23)]);
                r['json'](s);
            } catch (t) {
                r[mx(0x4f2)](0x1f4)[mx(0xcfe)]({
                    'status': b[mx(0xe55)],
                    'message': t[mx(0x921)]
                });
            }
        }), g['post'](b[ml(0xa94)], a0f[ml(0x738)]({
            'type': ml(0x9a8),
            'limit': b[ml(0x214)]
        }), async (q, r) => {
            const my = ml;
            try {
                const s = decodeURIComponent(q['headers'][b[my(0x34b)]] || ''), t = b[my(0xc22)](decodeURIComponent, q['headers'][b[my(0xd75)]] || ''), u = q[my(0x5c2)][b[my(0x7b7)]], v = q[my(0x5c2)][b['xqZJS']];
                if (!s || !t)
                    return r['status'](0x190)[my(0xcfe)]({
                        'status': b[my(0xe55)],
                        'completed': ![],
                        'message': b['VqlCi']
                    });
                const w = b[my(0xc02)](u, undefined) ? b[my(0x553)](parseInt, String(u), 0xa) : null, x = b['WUsXS'](v, undefined) ? b[my(0x553)](parseInt, b[my(0xa77)](String, v), 0xa) : null, y = q['body'];
                if (!Buffer[my(0x3b0)](y))
                    return r[my(0x4f2)](0x190)[my(0xcfe)]({
                        'status': b[my(0xe55)],
                        'completed': ![],
                        'message': my(0x171)
                    });
                const z = await a0au[my(0x200)](s, t, y, w, x);
                r[my(0xcfe)](z);
            } catch (A) {
                r[my(0x4f2)](0x1f4)[my(0xcfe)]({
                    'status': b['HLdDr'],
                    'completed': ![],
                    'message': A[my(0x921)]
                });
            }
        }), g[ml(0xa36)](b['RUwlf'], async (q, r) => {
            const mz = ml;
            try {
                const s = await a0au[mz(0x1bd)](q[mz(0xbd5)][mz(0x20c)]);
                r[mz(0x9c3)](b[mz(0x20b)], s['size'][mz(0x7d1)]()), r[mz(0x9c3)](b[mz(0x95e)], s[mz(0x20c)]), r[mz(0x9c3)](b[mz(0xeb1)], b[mz(0x920)]);
                if (!a0af[mz(0x77a)] && b[mz(0x49a)](q[mz(0x818)](b[mz(0xe75)]), '1') && b[mz(0x190)](a0af[mz(0x87f)], 0x0) && b[mz(0xa52)](s[mz(0x1d1)], a0af[mz(0x87f)]))
                    try {
                        const t = c['encryptData'](s['content'], Buffer['from'](a0af['SESSION_KEY'], 'base64'));
                        return r[mz(0x9c3)](b[mz(0x9ae)], b['qOexL']), r[mz(0x73c)](t);
                    } catch (u) {
                        return r[mz(0x4f2)](0x1f4)[mz(0xcfe)]({
                            'status': b[mz(0xe55)],
                            'message': b['RNvDj']
                        });
                    }
                return r['send'](s['content']);
            } catch (v) {
                r[mz(0x4f2)](0x1f4)['json']({
                    'status': b['HLdDr'],
                    'message': v['message']
                });
            }
        }), g[ml(0x342)](b[ml(0x4d2)], async (q, r) => {
            const mA = ml;
            try {
                let s = q[mA(0xbd5)][mA(0xa56)];
                if (!s || !Array['isArray'](s)) {
                    s = [];
                    if (q['body'][mA(0x20c)])
                        s['push'](q[mA(0xbd5)]['path']);
                    if (q[mA(0xbd5)][mA(0xe30)])
                        s[mA(0x6b2)](q['body'][mA(0xe30)]);
                }
                const t = await a0au[mA(0x483)](s);
                r[mA(0xcfe)]({
                    'status': 'ok',
                    'results': t
                });
            } catch (u) {
                r[mA(0x4f2)](0x1f4)[mA(0xcfe)]({
                    'status': b[mA(0xe55)],
                    'message': u[mA(0x921)]
                });
            }
        }), g['put'](b[ml(0x4d2)], async (q, r) => {
            const mB = ml;
            try {
                const s = await a0au['moveFiles'](q[mB(0xbd5)][mB(0xee4)] || q[mB(0xbd5)]);
                r[mB(0xcfe)]({
                    'status': 'ok',
                    'total': s['length'],
                    'success': s[mB(0x290)](t => t[mB(0x4f2)] === 'ok')[mB(0x5bd)],
                    'results': s
                });
            } catch (t) {
                r[mB(0x4f2)](0x1f4)[mB(0xcfe)]({
                    'status': mB(0x7c7),
                    'message': t['message']
                });
            }
        }), g[ml(0xa36)](b[ml(0x928)], async (q, r) => {
            const mC = ml;
            try {
                const s = await a0au[mC(0x215)](q[mC(0xbd5)]);
                r[mC(0xcfe)]({
                    'status': 'ok',
                    'total': s[mC(0x5bd)],
                    'success': s['filter'](t => t[mC(0x4f2)] === 'ok')[mC(0x5bd)],
                    'results': s
                });
            } catch (t) {
                r[mC(0x4f2)](0x1f4)['json']({
                    'status': mC(0x7c7),
                    'message': t[mC(0x921)]
                });
            }
        }), g[ml(0xa36)](ml(0x741), async (q, r) => {
            const mD = ml;
            try {
                const s = await a0au[mD(0x590)](q[mD(0xbd5)][mD(0x20c)]);
                r[mD(0xcfe)](s);
            } catch (t) {
                r[mD(0x4f2)](0x1f4)[mD(0xcfe)]({
                    'status': mD(0x7c7),
                    'message': t[mD(0x921)]
                });
            }
        }), g[ml(0xa36)](ml(0x880), async (q, r) => {
            const mE = ml;
            try {
                const s = q[mE(0xbd5)] || {};
                if (!s['path'])
                    return r['status'](0x190)[mE(0xcfe)]({ 'error': mE(0xd3a) });
                if (!Array[mE(0xaeb)](s[mE(0x19b)]) || b[mE(0xb3c)](s[mE(0x19b)][mE(0x5bd)], 0x0))
                    return r['status'](0x190)[mE(0xcfe)]({ 'error': b[mE(0x15b)] });
                const t = await a0au[mE(0xb84)](s[mE(0x20c)], s[mE(0x19b)], !!s[mE(0x520)]);
                r[mE(0xcfe)](t);
            } catch (u) {
                const v = /Access denied/[mE(0xbd9)](u[mE(0x921)]) ? 0x193 : 0x190;
                r[mE(0x4f2)](v)[mE(0xcfe)]({
                    'status': b[mE(0xe55)],
                    'message': u[mE(0x921)]
                });
            }
        }), g[ml(0xa36)](b['wwxXL'], async (q, r) => {
            const mF = ml;
            try {
                const s = q[mF(0xbd5)] || {};
                if (!s[mF(0x20c)])
                    return r[mF(0x4f2)](0x190)['json']({ 'error': mF(0xd3a) });
                const t = await a0au[mF(0x87a)](s[mF(0x20c)], s[mF(0x5aa)], b['qXFKH'](s[mF(0x44f)], ![]), Array[mF(0xaeb)](s[mF(0x25f)]) ? s['entries'] : null);
                r[mF(0xcfe)](t);
            } catch (u) {
                const v = /Access denied/['test'](u[mF(0x921)]) ? 0x193 : 0x190;
                r['status'](v)['json']({
                    'status': b[mF(0xe55)],
                    'message': u['message']
                });
            }
        }), g[ml(0x8f4)](b[ml(0xce6)], (q, r) => {
            const mG = ml;
            r['json'](a0aw[mG(0x778)]());
        }), g[ml(0xa36)](ml(0xd1a), async (q, r) => {
            const mH = ml;
            try {
                const s = await a0aw[mH(0xe7a)](q[mH(0xbd5)]);
                r[mH(0xcfe)](s);
            } catch (t) {
                r['status'](t['status'] || 0x1f4)[mH(0xcfe)]({
                    'status': b[mH(0xe55)],
                    'message': t[mH(0x921)]
                });
            }
        }), g['get'](b[ml(0xabb)], (q, r) => {
            const mI = ml;
            r[mI(0xcfe)](a0aw[mI(0xe99)]());
        }), g[ml(0xa36)](b[ml(0xabb)], (q, r) => {
            const mJ = ml;
            try {
                const s = a0aw[mJ(0xbe2)](q['body']);
                r[mJ(0xcfe)](s);
            } catch (t) {
                r[mJ(0x4f2)](0x1f4)[mJ(0xcfe)]({
                    'status': b[mJ(0xe55)],
                    'message': t[mJ(0x921)]
                });
            }
        }), g[ml(0x8f4)](b[ml(0x3f8)], (q, r) => {
            const mK = ml;
            r[mK(0xcfe)](a0aw['getTaskStatus']());
        }), g[ml(0x8f4)](ml(0x70b), (q, r) => {
            const mL = ml;
            let s = b[mL(0x7cd)](parseInt, q[mL(0x93c)][mL(0xada)], 0xa) || 0x32;
            s = Math[mL(0x2d2)](Math[mL(0x357)](s, 0x1), 0x64), r[mL(0xcfe)](a0aw[mL(0x192)](s));
        }), g['get'](ml(0xdaf), (q, r) => {
            const mM = ml;
            let s = b[mM(0xbb2)](parseInt, q[mM(0x93c)][mM(0xada)], 0xa) || 0x32;
            s = Math[mM(0x2d2)](Math[mM(0x357)](s, 0x1), 0x64), r[mM(0xcfe)](a0aw['getCronLogs'](s));
        }), g[ml(0x342)](ml(0x70b), (q, r) => {
            const mN = ml;
            r[mN(0xcfe)](a0aw[mN(0xb61)]());
        }), g[ml(0x342)](b['RiWsN'], (q, r) => {
            const mO = ml;
            r[mO(0xcfe)](a0aw[mO(0xcf1)]());
        }), g[ml(0x8f4)](b[ml(0x2fa)], (q, r) => {
            const mP = ml;
            r['json'](a0aw[mP(0x7cf)]());
        }), g[ml(0xa36)](b[ml(0x9b3)], async (q, r) => {
            const mQ = ml;
            try {
                const s = await a0aw[mQ(0xb96)]();
                r[mQ(0xcfe)](s);
            } catch (t) {
                r[mQ(0x4f2)](0x1f4)['json']({
                    'status': b[mQ(0xe55)],
                    'message': t['message']
                });
            }
        });
        const i = {
                'debug': (...q) => a0R[ml(0x8ab)](q['join']('\x20')),
                'info': (...q) => a0R['info'](q[ml(0x3ec)]('\x20')),
                'warning': (...q) => a0R[ml(0xa10)](q['join']('\x20'))
            }, j = new a0cn(i), k = new a0cr(i), l = [];
        let m = null;
        if (a0af[ml(0x840)] === '3') {
            const q = b[ml(0x4bf)](a0a7, a0af['KNAME']);
            if (!a0af[ml(0x347)])
                a0R['warn']('[KMODE3]\x20⚠️\x20KHUB\x20未设置,\x20KMODE=3\x20未生效\x20(本地服务照常)');
            else {
                if (q)
                    a0R[ml(0xa10)](ml(0x4f6)[ml(0xbbc)](q, ',\x20KMODE=3\x20未生效\x20(本地服务照常)'));
                else {
                    !a0af[ml(0x340)][ml(0x5bd)] && a0R[ml(0x5a5)]('[KMODE3]\x20💡\x20KHUB_PORTS\x20未配置,\x20端口反代已禁用\x20(仅中继\x20/api\x20与终端)');
                    const r = new a0cp(a0af['KHUB'], a0af[ml(0xdb6)], a0af[ml(0x337)], a0af['KHUB_PORTS'], i, b[ml(0xe38)]);
                    k[ml(0x19b)][ml(0x9c3)](a0af['KNAME'][ml(0x1b7)]()[ml(0x846)](), r), m = r;
                }
            }
        }
        const n = () => {
            const mR = ml;
            return a0av[mR(0xa34)](k[mR(0x5f1)]()['map'](s => ({
                'hub': s['hub'],
                'kname': s[mR(0x93e)],
                'ports': s[mR(0xe02)]
            })));
        };
        g[ml(0x8f4)](ml(0x94b), (s, t) => {
            const mS = ml, u = j[mS(0x5f1)]();
            t['json']({
                'status': 'ok',
                'count': u[mS(0x5bd)],
                'tunnels': u
            });
        }), g[ml(0x8f4)](b[ml(0x21f)], (s, t) => {
            const mT = ml, u = k[mT(0x5f1)]();
            if (!m && b[mT(0x2a9)](u[mT(0x5bd)], 0x0))
                return t[mT(0xcfe)]({
                    'status': 'ok',
                    'enabled': ![],
                    'message': b[mT(0xd16)]
                });
            t[mT(0xcfe)]({
                'status': 'ok',
                'enabled': u['length'] > 0x0,
                'tunnel': m ? m[mT(0xa6c)]() : null,
                'registrations': u
            });
        }), g[ml(0xa36)](b[ml(0x21f)], async (s, t) => {
            const mU = ml, u = b[mU(0x9f8)](a0cm, s[mU(0xbd5)]) || {}, v = String(u[mU(0xb7a)] || '')['trim']()[mU(0xd15)](/\/+$/, '');
            if (!/^https?:\/\//i[mU(0xbd9)](v))
                return t['status'](0x1a6)[mU(0xcfe)]({
                    'status': 'error',
                    'code': b[mU(0x79f)],
                    'message': mU(0x886)
                });
            const w = Array[mU(0xaeb)](u[mU(0xe02)]) ? u[mU(0xe02)][mU(0x290)](B => Number[mU(0xd74)](B) && B >= 0x1 && B <= 0xffff) : [], {
                    snapshot: x,
                    code: y,
                    message: z
                } = await k['register'](v, b['cPaYs'](String, u['kname'] || ''), w, b['kfWEK'], 0x3a98);
            if (b[mU(0x2a9)](y, null)) {
                const B = n();
                return t[mU(0xcfe)]({
                    'status': 'ok',
                    'persisted': B,
                    'registration': x
                });
            }
            if (y === b[mU(0x44e)]) {
                const C = n();
                return t[mU(0x4f2)](0x1f4)[mU(0xcfe)]({
                    'status': b[mU(0xe55)],
                    'persisted': C,
                    'code': y,
                    'message': z,
                    'registration': x
                });
            }
            const A = b['uFSMJ'](y, b[mU(0x281)]) || y === b[mU(0x938)] ? 0x199 : 0x1a6;
            t[mU(0x4f2)](A)[mU(0xcfe)]({
                'status': b[mU(0xe55)],
                'persisted': ![],
                'code': y,
                'message': z,
                'registration': x
            });
        }), g[ml(0x342)](b[ml(0x21f)], (s, t) => {
            const mV = ml, u = b[mV(0x4c5)](a0cm, s['body']) || {}, v = b[mV(0x605)](String, u[mV(0x93e)] || ''), w = k[mV(0x26f)](v);
            if (!w)
                return t[mV(0x4f2)](0x194)['json']({
                    'status': mV(0x7c7),
                    'message': 'KNAME\x20'[mV(0xbbc)](v, mV(0x2e8))
                });
            const x = b[mV(0x8bc)](n);
            t[mV(0xcfe)]({
                'status': 'ok',
                'persisted': x,
                'removed': w
            });
        }), g[ml(0x8f4)](b[ml(0xba7)], (s, t) => {
            const mW = ml, u = j[mW(0x5f1)]();
            t[mW(0xcfe)]({
                'status': 'ok',
                'count': u[mW(0x5bd)],
                'tunnels': u
            });
        }), g[ml(0xa36)](ml(0x94b), async (s, t) => {
            const mX = ml;
            try {
                const u = a0cm(s[mX(0xbd5)]);
                let v = u['port'];
                (v === undefined || b['uFSMJ'](v, null) || b[mX(0x287)](v, '')) && (v = a0af[mX(0x337)]);
                const w = b[mX(0xc22)](Number, v);
                if (!Number[mX(0xd74)](w) || b[mX(0xb91)](w, 0x1) || b[mX(0xea4)](w, 0xffff))
                    return t[mX(0x4f2)](0x1a6)[mX(0xcfe)]({
                        'status': b[mX(0xe55)],
                        'created': ![],
                        'port': v,
                        'message': 'port\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535'
                    });
                const x = await j[mX(0x5b7)](w, b[mX(0x2a9)](u[mX(0x3c6)], !![]), b[mX(0x387)](u[mX(0x554)], !![]) || b[mX(0x15d)](u['quic'], 0x1) || b[mX(0x2a9)](b[mX(0x37b)](String, u[mX(0x554)])['toLowerCase'](), 'true'));
                t['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': x[mX(0xd54)],
                    'port': x[mX(0x1bb)],
                    'created_at': x[mX(0xa9a)],
                    'transport': x[mX(0x230)],
                    'tunnel_status': x[mX(0x4f2)] || mX(0xcf3),
                    'last_error': x[mX(0xad6)] ?? null,
                    'last_error_at': x['lastErrorAt'] ?? null,
                    'consecutive_failures': x[mX(0xa06)] || 0x0
                });
            } catch (y) {
                t[mX(0x4f2)](y[mX(0x4f2)] || 0x1f4)[mX(0xcfe)]({
                    'status': b[mX(0xe55)],
                    'created': ![],
                    'port': y['port'] ?? null,
                    'message': y[mX(0x921)]
                });
            }
        }), g[ml(0x342)](b[ml(0xba7)], async (s, t) => {
            const mY = ml;
            try {
                const u = a0cm(s[mY(0xbd5)]), v = u['port'], w = b[mY(0xc22)](Number, v);
                if (v === undefined || b['uFSMJ'](v, null) || b[mY(0x2a9)](v, '') || !Number[mY(0xd74)](w) || w < 0x1 || w > 0xffff)
                    return t[mY(0x4f2)](0x1a6)[mY(0xcfe)]({
                        'status': b[mY(0xe55)],
                        'deleted': 0x0,
                        'port': v ?? null,
                        'message': mY(0x9e9)
                    });
                const x = await j[mY(0xc11)](w, u[mY(0x232)]);
                if (b['MfpYy'](x['status'], 'ok'))
                    return t[mY(0xcfe)]({
                        'status': 'ok',
                        'deleted': x[mY(0x580)],
                        'port': w,
                        'tunnels': x[mY(0x4a0)]
                    });
                return t[mY(0x4f2)](x[mY(0x4f2)])['json']({
                    'status': mY(0x7c7),
                    'deleted': 0x0,
                    'port': w,
                    'message': x[mY(0x921)]
                });
            } catch (y) {
                t[mY(0x4f2)](0x1f4)[mY(0xcfe)]({
                    'status': b[mY(0xe55)],
                    'deleted': 0x0,
                    'message': y[mY(0x921)]
                });
            }
        }), a0R['debug'](b[ml(0x532)]), g['ws'](b['FtRQB'], async (s, t) => {
            const mZ = ml, u = t[mZ(0xdb0)][0x0];
            a0R[mZ(0x8ab)](mZ(0x343)[mZ(0xbbc)](t[mZ(0x351)])), a0R[mZ(0x8ab)](mZ(0x314)[mZ(0xbbc)](u));
            const v = t[mZ(0x93c)][mZ(0x8dc)], w = t[mZ(0x93c)][mZ(0xa59)], x = b[mZ(0x258)](t[mZ(0x93c)][mZ(0xbb1)], '1'), y = b[mZ(0x9fb)](t[mZ(0x93c)]['incognito'], '1');
            a0R[mZ(0x8ab)](mZ(0x7ae)[mZ(0xbbc)](v));
            if (!v) {
                a0R['debug'](b[mZ(0x64c)]), s[mZ(0x675)](0x3f0, b[mZ(0xbfb)]);
                return;
            }
            if (w) {
                const A = a0af[mZ(0xd13)](), B = Buffer[mZ(0x5a6)](b[mZ(0x6b9)](String, w), b[mZ(0xd8f)]), C = Buffer[mZ(0x5a6)](A, b['XQTAl']), D = b['MQqSN'](B[mZ(0x5bd)], C[mZ(0x5bd)]) && a0k[mZ(0xd8d)](B, C);
                if (!D) {
                    a0R[mZ(0xa10)](mZ(0xb82)[mZ(0xbbc)](v, ']\x20🚨\x20认证失败，非法\x20Token！')), s['close'](0x3f0, b[mZ(0xe25)]);
                    return;
                }
            }
            const z = new a0cy();
            await z['startSession'](s, v, w, x, y);
        }), a0R[ml(0x8ab)](b[ml(0x3a0)]), a0aw[ml(0xba9)]();
        for (const s of a0av[ml(0x20a)]()) {
            l[ml(0x6b2)](s);
        }
        a0R['debug'](b['gcDTd']);
        const o = g['listen'](a0af['PORT'], a0af[ml(0xeab)], () => {
            const n0 = ml;
            a0R['debug'](n0(0x4d8)['concat'](a0af[n0(0x292)], n0(0xd10))[n0(0xbbc)](a0af[n0(0xeab)], ':')['concat'](a0af[n0(0x337)])), a0R[n0(0x8ab)]('Server\x20listening\x20successfully');
            (b[n0(0x258)](a0af[n0(0x840)], '1') || b[n0(0xbe6)](a0af[n0(0x840)], '2') && a0cs['knameValid']()) && a0cs[n0(0x768)](j);
            a0af['KMODE'] === '3' && m && m[n0(0xc25)]();
            for (const t of l) {
                const u = b['cPaYs'](String, t[n0(0x93e)] || '')[n0(0x1b7)]()['toLowerCase']();
                if (k[n0(0x8f4)](u)) {
                    a0R[n0(0xa10)](n0(0xa5a)[n0(0xbbc)](u, n0(0xbc1)));
                    continue;
                }
                const v = new a0cp(t[n0(0xb7a)], t[n0(0x93e)], a0af['PORT'], t[n0(0xe02)], i, b[n0(0x9f1)]);
                k[n0(0x19b)][n0(0x9c3)](u, v), v['start'](), a0R[n0(0x5a5)](n0(0x2c8)[n0(0xbbc)](u, '\x20→\x20')['concat'](t[n0(0xb7a)]));
            }
            process['platform'] === b['aeESe'] && typeof Bun === b[n0(0x57b)] && a0Q()[n0(0xea2)](() => {
            });
        });
        process['on']('SIGINT', () => {
            const n1 = ml;
            a0R[n1(0x8ab)](b[n1(0x68c)]), o[n1(0x675)](), process[n1(0x7b4)](0x0);
        }), a0R[ml(0x8ab)](b[ml(0x3a8)]);
    } catch (t) {
        a0R['error']('Fatal\x20error\x20in\x20main():', t), process[ml(0x7b4)](0x1);
    }
}
(require[a0cE(0xa35)] === module || require[a0cE(0xa35)]?.[a0cE(0xad2)]?.['includes'](a0cE(0xd9e))) && a0cA()[a0cE(0xea2)](a0R[a0cE(0x7c7)]);
module[a0cE(0xae9)] = {
    'main': a0cA,
    'loadCurves': a0cz,
    'Config': a0af,
    'CryptoManager': a0an,
    'SystemInfoCollector': a0aq,
    'CommandExecutor': a0ar,
    'FileManager': a0au,
    'TaskManager': a0aw,
    'TaskStore': a0av,
    'ArgoTunnelManager': a0cn,
    'argoBackoffSeconds': a0ci,
    'argoTruncateError': a0cj,
    'argoRetryBaseSeconds': a0cg,
    'argoRetryMaxSeconds': a0ch,
    'argoReregisterAfter': a0ce,
    'KModeController': a0cs,
    'HubTunnelManager': a0cp,
    'HubWSStream': a0cq,
    'HubRegisterError': a0ae,
    'HubTunnelRegistrar': a0cr,
    'hubKnameError': a0a7,
    'hubPublicUrlError': a0a9,
    'deriveHubWsUrl': a0aa,
    'filterLoopbackHeaders': a0ab,
    'hubBackoffSeconds': a0ac,
    'parseHubPorts': a0a6,
    'ZipArchiver': a0at,
    'TempKeyManager': a0am,
    'SecureDns': a0ai,
    'installDnsHook': a0al,
    'patchDnsLookup': a0ak,
    'QuicConnection': a0c5,
    'QuicSession': a0ca,
    'QuicTlsClient': a0c2,
    'QuicKeys': a0bM,
    'QuicReader': a0bI,
    'quicInitialKeys': a0bO,
    'quicNextKeys': a0bN,
    'quicWriteVarint': a0bF,
    'quicReadVarint': a0bG,
    'quicDecodePacketNumber': a0bV,
    'quicApplyProtection': a0bT,
    'quicRemoveProtection': a0bU,
    'quicEncodeTransportParameters': a0bZ,
    'quicDecodeTransportParameters': a0bY,
    'quicEncodeAck': a0bW,
    'quicRangesFromAck': a0bX,
    'hkdfExpandLabel': a0bL,
    'CapnpBuilder': a0aP,
    'capnpMessages': a0aS,
    'capnpWords': a0aU,
    'capnpStruct': a0aT,
    'capnpText': a0aW,
    'capnpStructList': a0aV,
    'capnpReturnResult': a0aX,
    'capnpConnectRequest': a0aY,
    'capnpConnectResponse': a0aZ,
    'connectEdgeQuic': a0cb,
    'buildQuicRequest': a0c7,
    'verifyEdgeQuicCertificate': a0c3,
    'QUIC_DATA_STREAM_PREAMBLE': a0bi,
    'QUIC_SERVER_NAME': a0br,
    'QUIC_ALPN': a0bq,
    '__ptySelector': {
        'detectLinuxLibc': a0I,
        'ptyCandidateOrder': a0J,
        'probePtyModule': a0L,
        'ensurePty': a0Q,
        'PTY_QWQO_VERSION': a0G,
        'PTY_CLOSE_REASON': a0H,
        'qwqoPlatformBinaryPath': a0O,
        'selectPtyImplementation': a0P,
        'getState': () => ({
            'ready': !!a0C,
            'reason': a0D
        })
    }
};