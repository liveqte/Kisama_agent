#!/usr/bin/env node
const a0T = a0b;
(function (a, b) {
    const S = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(S(0x141)) / 0x1 * (-parseInt(S(0x139)) / 0x2) + parseInt(S(0x29c)) / 0x3 + -parseInt(S(0x356)) / 0x4 + parseInt(S(0x249)) / 0x5 * (parseInt(S(0x1e4)) / 0x6) + parseInt(S(0x2e1)) / 0x7 + -parseInt(S(0x156)) / 0x8 + parseInt(S(0x2d3)) / 0x9 * (parseInt(S(0x20d)) / 0xa);
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0x70525));
const a0c = [
    a0T(0x26e),
    a0T(0x19a),
    a0T(0x1de)
];
function a0d(a) {
    const U = a0T, b = {
            'CnZsF': function (c, d) {
                return c === d;
            },
            'xbiyB': U(0x30a),
            'GyQKb': function (c) {
                return c();
            }
        };
    return function (c, d, f) {
        const V = U, g = c[V(0x14a)]();
        if (a0c[V(0x36b)](h => g[V(0x34b)](h))) {
            if (b[V(0x1dc)](typeof f, b[V(0x1b9)]))
                b['GyQKb'](f);
            return !![];
        }
        return a[V(0x121)](this, arguments);
    };
}
process[a0T(0x21d)][a0T(0x1a9)] = a0d(process['stdout'][a0T(0x1a9)]), process[a0T(0x152)][a0T(0x1a9)] = a0d(process[a0T(0x152)]['write']);
const a0f = require(a0T(0x2cb)), a0g = require(a0T(0x35b)), a0h = require('fs'), a0i = require('fs')[a0T(0x129)], a0j = require(a0T(0x27f)), a0k = require('os'), {exec: a0l} = require(a0T(0x3e7)), a0m = require(a0T(0x12a)), a0n = require(a0T(0x314)), {encrypt: a0o} = require(a0T(0x10e)), a0p = require('base64-js'), a0q = require(a0T(0x146)), a0r = require(a0T(0x12f));
let a0s, a0t;
try {
    typeof Bun !== 'undefined' ? a0t = require('bun-pty') : a0t = require(a0T(0x3ec));
} catch (a0R) {
    console[a0T(0x17f)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20核心终端依赖\x20(pty)\x20加载失败，程序终止！'), console[a0T(0x17f)]('\x1b[31m[FATAL\x20ERROR]\x1b[0m\x20详细错误:\x20' + a0R[a0T(0x2c3)]), console[a0T(0x17f)](a0T(0x24f)), process[a0T(0x43a)](0x1);
}
const a0u = {
    'LEVELS': {
        'DEBUG': 0x0,
        'INFO': 0x1,
        'WARN': 0x2,
        'ERROR': 0x3
    },
    get 'currentLevel'() {
        const W = a0T, a = {
                'jwcaD': function (b, c) {
                    return b !== c;
                },
                'SxjDe': W(0x15e)
            };
        return a[W(0x351)](typeof a0E, a['SxjDe']) && a0E[W(0x423)] !== undefined ? a0E['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const X = a0T, b = {
                'yEfcy': function (c, d) {
                    return c <= d;
                }
            };
        b[X(0x2aa)](a0u[X(0x2b6)], a0u['LEVELS']['DEBUG']) && console[X(0x26d)]('\x1b[90m[DEBUG]\x1b[0m\x20' + a);
    },
    'info': a => {
        const Y = a0T, b = {
                'WYcyV': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x125)](a0u[Y(0x2b6)], a0u[Y(0x36f)][Y(0x3fe)]) && console[Y(0x26d)](Y(0x279) + a);
    },
    'warn': a => {
        const Z = a0T, b = {
                'XEzuq': function (c, d) {
                    return c <= d;
                }
            };
        b['XEzuq'](a0u['currentLevel'], a0u[Z(0x36f)][Z(0x224)]) && console['log'](Z(0x3f6) + a);
    },
    'error': a => {
        const a0 = a0T, b = {
                'ZRDMj': function (c, d) {
                    return c <= d;
                }
            };
        b[a0(0x120)](a0u[a0(0x2b6)], a0u['LEVELS'][a0(0x2ab)]) && console[a0(0x26d)](a0(0x1af) + a);
    }
};
class a0v {
    constructor(a = 'ok') {
        const a1 = a0T;
        this[a1(0x27a)] = a;
    }
}
class a0w extends a0v {
    constructor(a = 'ok', b = 0x0) {
        const a2 = a0T;
        super(a), this[a2(0x15a)] = b;
    }
}
class a0x extends a0v {
    constructor() {
        const a3 = a0T, a = { 'uusHG': a3(0x2f6) }, b = a[a3(0x269)][a3(0x10a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['cpu_name'] = '';
                continue;
            case '1':
                this[a3(0x302)] = a0E[a3(0x2b1)];
                continue;
            case '2':
                super();
                continue;
            case '3':
                this['cpu_cores'] = 0x0;
                continue;
            case '4':
                this[a3(0x329)] = '';
                continue;
            case '5':
                this['session_key'] = '';
                continue;
            case '6':
                this['mem_total'] = 0x0;
                continue;
            case '7':
                this[a3(0x217)] = '';
                continue;
            case '8':
                this[a3(0x143)] = null;
                continue;
            case '9':
                this[a3(0x1ea)] = 0x0;
                continue;
            case '10':
                this['ipv6'] = null;
                continue;
            case '11':
                this['kernel_version'] = '';
                continue;
            case '12':
                this['os'] = '';
                continue;
            case '13':
                this[a3(0x328)] = '';
                continue;
            case '14':
                this[a3(0x26a)] = 0x0;
                continue;
            case '15':
                this[a3(0x34f)] = null;
                continue;
            }
            break;
        }
    }
}
function a0a() {
    const c9 = [
        'yxnuu2y',
        'yvHorw0',
        'Dg9mB3DLCKnHC2u',
        'AxneAxjLy3rVCNK',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'AgzzteC',
        'zvjfAwS',
        'tfHd',
        'rhzAEum',
        'nhWWFdv8m3W2Fdf8mG',
        'sxndqu4',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'DhmTBM9Kzq',
        'x3nWBgL0qw5KrMLUAxnO',
        'z2v0q3jVBLrHC2TZ',
        'nNWZFdr8mNWWFdf8nxW3',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'Ec1MAwXLlw5HBwu',
        'y3jVBMXVB3a',
        'EM1qy2S',
        'rhPfAK0',
        'wc1bDxrOlvrVA2vU',
        'vuncyK4',
        'CKTMEvu',
        'Aw50zxjUywW',
        'AgP0vuy',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        '8j+uJcdNU4JNQ6/OV5VNQiVPGidLH7OGkenVzgu6ia',
        'D2fYBG',
        'vvboqK0',
        'B2vKzuy',
        'DxnLtM9PC2u',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'ywnJzxnZx2rLBMLLza',
        'B25LDgLTzxrHC2TZx2XVzW',
        'CNrwzNG',
        'CM1tEw5J',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        'zw5JB2rPBMC',
        'C3DTAuy',
        'C3j3u2y',
        'te1gEM0',
        'u29qswW',
        'q1rVANa',
        'BKrlAfO',
        'Eu9iDum',
        'ChjVy2vZCW',
        'vKLMDMe',
        'yM9KEq',
        'x2fWCgvUzeXVzW',
        'Chv0',
        'uNrPBwvVDxq',
        'y29Kzq',
        'z2v0q3jVBKXVz3m',
        'x2jHC2vPBMzVx2nHy2HL',
        'mZyWma',
        'C3DHChrVDgfS',
        'y21K',
        'l2fWAs9LEgvJ',
        'l2rLDI8',
        'CMvZDwX0',
        'zMv0y2Hjua',
        'l3bYB2mVy3b1Aw5MBW',
        'D3PzvhO',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'zgrxAha',
        'rhnmAem',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'zxHPDgnVzgu',
        'vuvqqu0',
        'sfPRvhu',
        'Aw5MBW',
        'yMfZzw5HBwu',
        'Dg9ju09tDhjPBMC',
        'CMvHzezPBgvtEw5J',
        'C0r1D0u',
        'C2v0t25LDgLTzvrHC2TZ',
        'DxrMoa',
        'B2PzEuS',
        'Bwf4',
        'zMfTAwX5',
        'mtaW',
        'Dxb0Aw1L',
        'rNzQwvK',
        'qvLZz2G',
        'BxnNuMvZB2X2zxjZ',
        'ntbTyG',
        'lY5KB2nRzxjLBNy',
        'Edi1nte5',
        'qY5vveyToa',
        'B2jQzwn0',
        'Dg90ywW',
        'ChjVy2vZC2vZ',
        'zvjSAhC',
        'twLZC2LUzYbYzxf1AxjLzcbJDxn0B20GAgvHzgvYCZOGwc1gAwXLlvbHDgGGyw5KifGTrMLSzs1oyw1L',
        'B3njBMzV',
        'y29Yzxm',
        'u1rbvfvtx0nbq0Hfx1ruta',
        'odaWma',
        'twTVCgG',
        'twLZC2LUzYbHDxrOigHLywrLCNm',
        'zxHPC3rZu3LUyW',
        'y2HPBgrFChjVy2vZCW',
        'ENHZA1a',
        'z2Lkshu',
        'AgvHzgvYCW',
        'zMLtyMK',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'sgfyA1u',
        'zMfSC2u',
        's3PYyu8',
        'CfL5rvC',
        'u3nnBfe',
        'vvjQqMC',
        'zxHLy3v0zq',
        'wf9psW',
        'DxbKyxrL',
        'g1SZm21Bv0fstL0BwZbTia',
        'zg9JA2vY',
        'Bw9Kzv9Vy3rHBa',
        'z2v0tg9JywXjuhy2',
        'zNjVBq',
        'Cg9ZDa',
        'Ec10B3rHBc1JAhvUA3m',
        'CMfT',
        'su5gtW',
        'tK9ju0vFqunusu9ox1jfqurFtuvtu0fhrq',
        'vMzqz1q',
        'yNL0zuXLBMD0Aa',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'z2v0uMvHBhrPBwvjBMzV',
        'B25LDgfZA3m',
        'C3rVCa',
        'q29UDgvUDc1uExbL',
        'Bw9Kzq',
        'CMvHzhLtDgf0zq',
        'ywXSB2m',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'Dg1WzNm',
        'y2H1BMTF',
        'DgvYBwLUywW',
        'u1Dkv2y',
        'l2fWAs90yxnRl3n0yxr1CW',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'CMvHzgfIBgu',
        'zw5JCNLWDa',
        'CeLrChq',
        'AuvXtwS',
        'zgvSzxrLza',
        'C2v0q3jVBLrHC2TZ',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'quTeEMG',
        'Cg9VzvO',
        'BxrPBwu',
        'q2DzC0u',
        'zgvZDhjVEq',
        'DgLTzw91Da',
        'l2fWAs9MAwXLl2nHDa',
        'CgHHC2u',
        'C3rHDhvZq29Kzq',
        'ls0Tls1cruDjtG',
        'C2XPy2u',
        'te9hx0XfvKvm',
        'u0Lhsu5uigHHBMrSzxiGCMvNAxn0zxjLza',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'wLDXEw4',
        'rgjHCeC',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'C3rYAw5N',
        'svP4u20',
        'vfzpuNi',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'Ec1JAhvUAY1Pza',
        'su91Aeq',
        'Dxfbsfa',
        'zvnfshe',
        'u2v0DgLUzYb1CcbxzwjtB2nRzxqGDgvYBwLUywWGCM91DguUlI4',
        'sevbra',
        'BwXoAxC',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'qK5ZuuS',
        'y3jVBG',
        'Du9KqKq',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        'yxzNtg9Hza',
        'zxHPDa',
        'CgfKu3rHCNq',
        'D3jPDgfIBgu',
        'zNjVBuj5DgvbCNjHEq',
        'l2fWAs90yxnRl2nYB24',
        'B3DUzxi',
        'x3j1BLrLCM1PBMfS',
        'D1LiBgq',
        'quDfvLK',
        'y3jVBKPVyNm',
        'Ec1MAwXLlxnPEMu',
        'y29Uy2f0',
        'CfHRC3C',
        'Bwv0Ag9K',
        'rMTQsMe',
        'C3bSAxq',
        'quH5Cva',
        'zM9YrwfJAa',
        'BMLqDeq',
        'zwnPzxnQCW',
        'sermtuq',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        'l3bYB2mVC2vSzI9TB3vUDgLUzM8',
        'q0PHzMq',
        'vvPlBfi',
        'x2zVCM1HDe1Vzgu',
        'BvzJy2K',
        'C2v0',
        'CMvZB2X2zq',
        'l2fWAs9MAwXLl2nW',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'CMvXDwvZDf9Pza',
        'Dgv4Da',
        'Ahr0Chm6lY9HCgK2lMLWAwz5lM9YzW',
        'zxHWB3j0',
        'DxbSB2fKrMLSzq',
        'l2fWAs90yxnRl2XVzY9ZDw1Tyxj5',
        'wLjetwO',
        'yxbWBhK',
        '8j+uLYdMO4dMTyVLIlaGv1mG6l+E5O6L77Ym5zcV55sOie5VAxnLiowkOowVHG',
        'sgfUzhnOywTLu3rHDgu',
        'wc1uAw1LC3rHBxa',
        'v1LJEvy',
        'C2vUzenPCgHLCG',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'C2v0vgLTzw91Da',
        'ChjVBwLZzxm',
        'BM9Kzs1JCM9U',
        'ENvLC3q',
        'zgvIDwC',
        'ruHQs2i',
        'l2fWAs9IyxnLAw5MBW',
        'BM9PC2uTyY53yxnT',
        'q29UzMLNihzHBgLKyxrLza',
        'D2DJAhq',
        'txbpsMy',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'Cdi1nG',
        'y29UDgfPBMvYza',
        'yNjHBMq',
        'BMv0D29YAW',
        'wujAveS',
        'mtHjyM1Kwxy',
        'zxzUB24',
        'zgvSzxrL',
        'vgDOA3a',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'CgfYyw1Z',
        'BvfgwM0',
        'mtq3odfoBMLZDMi',
        'CMvJDKnPCgHLCG',
        'BM9PC2vFA2v5',
        'l2jPBI9HC2G',
        'z0D3veW',
        'zxHWCMvZCY13CW',
        't1fuqxG',
        'rg9JA2vY',
        'C3bSAwnL',
        'Dg9tDhjPBMC',
        '8j+uHcbBq2fJAgvDiejHC2vjBMzVioE8K+wTMow3SUI/H+ACN++8Jow3SUMhJEAwSoIWG+w6PUEZU+E7N+I1HoA6KoI/M+IHJoABToAwSooaGG',
        'y2P1ze4',
        'v3DYuKu',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs51C2fNzv9PBL9IExrLCW',
        'ywvZlti1nI1Ny20',
        'CKXnr2e',
        'sMngCu8',
        'C3rKzxjY',
        'rxLbC2C',
        'y2LWAgvY',
        'rgvJCNLWDfDPDgHbza',
        'nJu1nZCXmLHUzNP4tG',
        'rgvZtNm',
        'ywDLBNq',
        'A09Lz3u',
        'y291BNq',
        'BejXA08',
        'ihn0yxj0zwqGB24G',
        'C2HPzNq',
        'Dw5KzwzPBMvK',
        'CMvJDxjZAxzL',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'ic0Tls0G',
        'Eg5gB3m',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'A1fYBxC',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'BLLXqxa',
        'w1DbuK5Diev4y2vWDgLVBIbSB2fKAw5Nie5VAxnLig1VzhvSztO',
        'y29UDhjVBa',
        'BK1vrhC',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'teTPrhO',
        'l2jPBI9ZAa',
        'ELriqNO',
        'x2DLDenVBMzPz1zHBhvL',
        'CMvHzezPBgu',
        'y29WEuzPBgvZ',
        'DwzWrwG',
        'u3rHCNrPBMCGBwfPBIGPigz1BMn0Aw9UlI4U',
        'zw50CMLLCW',
        'DMvzBgK',
        'icaG4OcIia',
        'wwjuteu',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'BhHJ',
        'iowKSEI0PtOG',
        'BNvTyMvY',
        'yuLQt3i',
        'qu9tuK4',
        'C2L6zq',
        'zxjYB3i',
        'wK1HugW',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'zwnKC2fqDwjRzxK',
        'rvHfq19tsevmtf9nt0rf',
        'lcbtAwDUywW6ia',
        'tK9ju0vFqunusu9ox1nqteLu',
        'ANnVBG',
        'CMvXDwvZDeLK',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'D1D1tLG',
        'rffiDLy',
        'q29UDgvUDc1mzw5NDgG',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'q2H1BMSG',
        's0rQvhi',
        'A3vIzwXLDa',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'y2XLyxjdCM9Utg9NCW',
        'BgLTAxq',
        'Cgf0Ahm',
        'qKftruLorK9Fq0fdsevFvfrm',
        'rK9mte9xx1nztuXjtKTt',
        'Cwz2tKe',
        'x2DLDerPC2TjBMzV',
        'C3rYAw5NAwz5',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'DxbNCMfKzq',
        'AgfUzhnOywTL',
        'y29UDgvUDa',
        'ALnYEKq',
        'rMLSzsb0B28GBgfYz2u',
        'ChLzvxy',
        'yLjrDuK',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'AxnbCNjHEq',
        'C3rHCNrtzxnZAw9U',
        'ywXS',
        'wc1oB25Jzq',
        'BwfW',
        'D2vIC29JA2v0',
        'D3jPDgu',
        'x3bHCNnLtw9Kzq',
        'y2fSBa',
        'l2fWAs93CY8Q',
        'Cejvtfm',
        'y2XLyxi',
        'g1SZmw1Brvjst1jDg1SWBsa',
        'wevUr0C',
        'wuTpD20',
        'z2v0tg9Nu3vTBwfYEq',
        'zgvJCNLWDa',
        'A2fmww8',
        'q3j5ChrVtwfUywDLCIbPBML0AwfSAxPLza',
        'x2zVCM1HDeXVz0vUDhj5',
        'y2LWAgvYDgv4Da',
        'DNrWzxy',
        'EgjPEui',
        'Dgv4Dc9WBgfPBG',
        'z2vnt2m',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'D1bLBui',
        'BxnNuxvLDwu',
        'z0XSvKm',
        'v05Irey',
        'C3DHCa',
        'mhWZFdj8nhWX',
        'l2fWAs9MAwXLl2XPC3q',
        'C2zPzum',
        'x3n0yxr1C19JywnOzq',
        'DMfSAwrHDgu',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'ic0Tls0GzxHPDgnVzgu9',
        'ywrKCMvZCW',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTtwv0Ag9KCW',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'y01OwMu',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        't09XELa',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'CfbqruC',
        'l3bYB2mVms9LBNzPCM9U',
        'y3jVBNrHC2TZx2XVzW',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'D0PmC3m',
        's1zn',
        'ugf0AcbUB3qGzM91BMq',
        'C2vZC2LVBL9RzxK',
        'ChvZAa',
        'icaGms4G6k6+572U546V5Akd5y+y6yEpoIbLEhbVCNqGruneu0fFufvcs0vzpsCTls0Tlujfr0LoifbvqKXjqYblrvKTls0TlsCUlI4N',
        'CMvZAxPL',
        'zgHWBeC',
        'q25AC0y',
        'ywrkvfC',
        'zMfSBgLUzYbIywnRihrViefYCMf5qNvMzMvYigLUC3rHBNrPyxrPB24',
        'zxHLy3v0ywjSzq',
        'yMfZzty0',
        'BwTKAxjtEw5J',
        'y3jLyxrLuhvIBgLJs2v5',
        'runeu0fFufvcs0vz',
        'otu1nJjSshLszNq',
        'x3jLy2vPDMvxC0j5DgvZ',
        'lNvWBg9Hzf9JAhvUA3m',
        'zevxD2K',
        'Ec1LBMnYExb0zwq',
        'mhWXFdr8n3W4Fdn8mNW2FdL8nxWXma',
        'zgLZA190B3rHBa',
        'EM9csNe',
        'vfjLt0u',
        'uL9psW',
        'y2HTB2rtEw5J',
        'BhjKAgq',
        'CM91BMq',
        'CMvHzgrPCLn5BMm',
        'vMzjyvC',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        '6k+35Rgc6lAf5PE2',
        'z1fMwxO',
        'thnjsNe',
        'D3HOtfy',
        'ug9KBwfU',
        't3bhwwW',
        'y3jLyxrLrgLYzwn0B3j5',
        'DxjS',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'u3bSAxq',
        'CYa+ia',
        'Ahr0Chm6lY92nI5PzgvUDc5Tzq',
        'zxHWB3j0CW',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'y29SCW',
        'tM9PC2uGv0fttsbTB2r1BguGBg9HzgvKihn1y2nLC3nMDwXSEq',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'Ahr0Chm',
        'zwfVAvO',
        'AxnjBML0Awf0B3i',
        'y3btEw5J',
        'v1zKEwq',
        'uuTbwhC',
        'y2XLyw51Ca',
        'mtC3nty4ntb4BhHLBee',
        'EMreswm',
        'EwDsrMS',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'y2f0y2G',
        'u0vtu0LptL9lrvK',
        'CxvLCNK',
        'tuvfvge',
        'Ec1HDxrOlxrVA2vU',
        'u2H1DhrPBMCGzg93BI4UlG',
        'z3b1x25HBwu',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'z2v0t25LDgLTzvrHC2TZ',
        'C0H1Ehq',
        'mc4WlJaUma',
        'C3rKB3v0',
        'whfouxy',
        'Bu13Cve',
        'zLrOsKy',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'wuTtCuq',
        'AxnFyxv0AgvUDgLJyxrLza',
        'v0fstG',
        'zMXVB3i',
        'wxn4ufi',
        'Du1LAxm',
        '8j+uJcdLRQlMIlFNQ6/KUlVLIQJMLQ3LVia',
        'BwDYtNC',
        'BeLerNK',
        'Dhj1zq',
        'ruTJyMO',
        'zKTzsMu',
        'ufjptvbux0nptu1btKq',
        'AgvHzgvY',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lM1HEa',
        'qLDcwLm',
        'y0Dztgq',
        'cVcFKQeG6kEJ5yAZ5PA55RovoG',
        'wuDfvNm',
        'ue9sva',
        'BM90x2zVDw5K',
        'yxnZAwDU',
        'sw5PDgLHBgL6zq',
        'yurwC1y',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'DxjSzw5JB2rLza',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'ugHWBxm',
        'z2v0tg9JywXjuhy0',
        'Aw5PDa',
        'ANDR',
        'ALHWD1a',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'Dw5JyxvNAhrfEgnLChrPB24',
        'x2nOzwnRqwnJzxnZ',
        'BgLZDezPBgvZ',
        'tfDAz2q',
        'tunfy2S',
        'r2v0qwn0Aw9U',
        'ntbeBNPPrKC',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'l2fWAs90yxnRl2XVzY9VBMv0Aw1L',
        'x2LZqMLUyxj5',
        'Axnoyu4',
        'zw5K',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'Dw5RBM93BG',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'rKLmrv9st09u',
        'BgvUz3rO',
        'C2v0qxv0AfrHzW',
        'q1jptL9dsevds19jtLrfuLzbta',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'C2vUza',
        's3f2rvi',
        'tgTYrfG',
        'z2v0',
        'EeTmvKi',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'C1Pgu2K',
        'zMLSzw5HBwu',
        'DgnW',
        'AensDxq',
        'revcvuC',
        'Bg9JywXqCML2qJy0',
        'txbNufO',
        'zgLYBMfTzq',
        'BMfTzq',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'DxvZseC',
        'C3DHCf90B3rHBa',
        'DwrW',
        'zwnPzxnqDwjRzxK',
        'Bg9N',
        'D2fZBsbZDhjLyw1PBMCGy29TCgLSzsbMywLSzwq',
        'se9tva',
        'zeTysLy',
        'y3vYCMvUDeXVywq',
        'BgfZDe5LDhDVCMTuAw1L',
        'ywjZ',
        'l2jPBI9IyxnO',
        'DLHlsei',
        'Ag10tey',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'g1SZnM1Bsu5gt10BwZbTia',
        'C3rHDhvZ',
        '8j+tPIbBq2fJAgvDiejHC2vjBMzViowrVEs4REACIEAvIoE8K+wTMo+8JoEBToAoPEI+K+whUUoaGG',
        'DuDQy2m',
        'ELDnz3y',
        'z2jcsKi',
        'Cgf0Aa',
        'B25eyxrH',
        'swT3EgS',
        'Dw5SAw5Ru3LUyW',
        'zMLSzq',
        'nxW0Fdj8m3WXFda',
        '8j+AGcblAxnHBweGqwDLBNqGtM9Kzs5QCYb2',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'r0jrrLe',
        'sfruuca',
        'tgnsDNu',
        'svb2nG',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'l3bYB2mVms9Jz3jVDxa',
        'qwDLBNq',
        'DhLWzq',
        'reXet2K',
        'rxrzsMC',
        'z2LK',
        'AM9PBG',
        'Ec1Hz2vUDc12zxjZAw9U',
        'zLDOsxy',
        'Dg90ywXFy2H1BMTZ',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'zwXoA0W',
        't1busu9ouW',
        'A2vYBMvS',
        'z2v0vgfZA1n0yxr1CW',
        'z0fNCfC',
        'mZm2mJq2CK5PvLj3',
        'DgfN',
        'zgvJCNLWDerHDge',
        'wfrds2i',
        'vw5Oyw5KBgvKifbYB21PC2uGuMvQzwn0Aw9UoG',
        'zfHLAfK',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'CMvWBgfJzq',
        'zMLSzxm',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'Cgf0Adi',
        'CgLK',
        'EuvMy3K',
        'rvjst1i',
        'ywn0AxzL',
        'CMfUzg9TqNL0zxm',
        'DgvZDa',
        'tgvUsei',
        'A3vIzxbVzhm',
        'quDftLrFvKvsu0LptG',
        'z2vUzxjHDgvqywLY',
        'B25LDgLTzq',
        'y3b1',
        'zNjLzq',
        'y3vYCMvUDeXLDMvS',
        'zwnADLu',
        'uKrkDMS',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'tufyx1rbu0TFte9hx1njwKu',
        'AwPIsLO',
        'u1HIu1a',
        'yMfZzty0DxjS',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'BxPszg0',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'tM5du3G',
        'DxnLza',
        'BwvZC2fNzq',
        'wuTfu00',
        'BwvT',
        'BwfPBG',
        'yMLtqwq',
        'twLZC2LUzYbYzxf1AxjLzcbbrvmTr0nnigzPzwXKCYaOBM9Uy2uSihrHzYWGy2LWAgvYDgv4DcKGAw4GCgf5Bg9Hzc4',
        'CgvYBwLZC2LVBNm',
        'sNjrDMO',
        'zxHWCMvZCW',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'tujkD1O',
        'yNvhzxy',
        'sMr3zLy',
        'q1LpB1a',
        'qK5NChy',
        'tK9ju0vFs0vz',
        'ouH2BKjiDG',
        'DhjPBq',
        'tufyx1vqte9brf9tsvPf',
        'mta0odu3nJaW',
        'C3DHChvZzwq',
        'DhHFyNL0zxm',
        'AxnwywXPzeLqDJy',
        'D1zKrNa',
        'wNj0rLi',
        'AxncDwzMzxi',
        'zwrTDfK',
        'zxLk',
        'Ahr0Chm6lY9TEwv4DgvYBMfSAxaUy29Tl3jHDW',
        'mc4ZlJuTANm',
        'nJi5ntmXBgjhzxL4',
        'Dg90ywXozxr3B3jRvxa',
        'quXjqKm',
        'B1zYzvG',
        'C3rHDfn5BMm',
        'AxnwywXPzeLqDJq',
        'CMvSyxrPDMu',
        'Aun2D08',
        'DvzdDwO',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'z2v0uhvIBgLJsxbwnG',
        'w+E7IoERR+s8MUIVNsa',
        'z2v0t25LDgLTzuXVz3m',
        'veLnrvnuqu1qx1DjtKrpvW',
        'AM9nvLG',
        'rMLSzsbUB3qGzM91BMq',
        'CNHFyNL0zxm',
        'rxvACuC',
        'C3rHCNrZv2L0Aa',
        'ug9PBNq',
        'C3bHD24',
        'mNWXm3WZFdb8oxW3Fde1FdeWFdz8mtj8mtf8mtr8mxW0Fdv8oa',
        'EMnxBg0',
        'yLncqLG',
        'q29UDhjVBgXLCG',
        'A2v5CW',
        'CMvUyw1Lu3LUyW',
        'C1DODeq',
        'y2XVC2u',
        'y29WEuzPBgvtEw5J',
        'Dg90ywXozxr3B3jRrg93BG',
        'wuvwveq',
        'CMvKDwnL',
        'DMvYC2LVBG',
        'vgfpywK',
        'mxW3FdL8m3WWFdz8ohW1Fdr8mG',
        'l2fWAs9ZDgf0Dxm',
        'Ec10Aw1LC3rHBxa',
        'ChjPDMf0zv9InJq',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'CeLPsfG',
        'zNvUy3rPB24',
        'zgvSzxrLrMLSzxm',
        'AhbPtNi',
        'zw5JCNLWDfjLC3bVBNnL',
        'quP3tgm',
        'DgHLBG',
        'ChvIBgLJx2i2na',
        'Ec1HzxmTzw5JCNLWDgvK',
        'qvr2t2W',
        'runjrvnFufvcs0vz',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'CwrosKe',
        'EhrLCM0TmJu2y29SB3i',
        'BM93',
        'zLzvB3C',
        'A0TZBxy',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'EeXht3a',
        'u0HbmJu2',
        'CMf3',
        'sw5PDfrHC2S',
        'ugjArfm',
        'vxfuC3C',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'DxrMltG',
        'y29UDgvUDc10ExbL',
        'l3bVzhmV',
        'DNDtDxu',
        'zw52',
        'yxjJAa',
        'DMLYDhvHBgL6yxrPB24',
        'BKTKuxG',
        'A2Tlwvm',
        'x2DLDenVBM5Ly3rPB25Z',
        'CgfYC2u',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'BurLBLK',
        'zgf0yq',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'Bw92zuzPBgvZ',
        'qxfJsMK',
        'DxPjrgm',
        'DxnL',
        'u05iquG',
        'z2v0uhvIBgLJsxbwna',
        'twLZC2LUzYbJAhvUAYa',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'DMvYAwz5u2LNBMf0DxjL',
        'z2vUzxjHDgvtAw5NBgu',
        'AuPUyNy',
        'Bg9Hza',
        'uKvOr1O',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'BNDvweK',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'Ag9TzwrPCG',
        'tuf6wuC',
        'Buv2ALG',
        'C2nOzwr1Bgu',
        'y3DK',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'qK5QDLu',
        'l2fWAs9MAwXLl25LDW',
        'A2LSBa',
        'Aw5JBhvKzxm',
        'zMLSDgvY',
        'quDftLrFufjjvKfurv9lrvK',
        'vwTnuKO',
        'Axb2na',
        'ChjVDg9JB2W',
        'ANDJyuq',
        'zNjVBuj5DgvZ',
        'C05ythO',
        'Chr5uhjVy2vZCW',
        'A2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0',
        'mJG5nJyZmLbWtfrmDq',
        'D3jPDgvgAwXLu3LUyW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'AgvHCNrIzwf0',
        'vunwzK8',
        'y3j5ChrV',
        'qu5rufa',
        'Cu1xBwO',
        'B3zLCMXHEq',
        'DhbXsw8',
        'uMfKB3u',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'Dg9cExrLqxjYyxK',
        'yvzIt2C',
        'qNPuvMm',
        'l3j1BI8Uy29UDgfPBMvYzw52',
        'suTYwLG',
        'AfnLvhO',
        'BwLU',
        'y3jVBNrHC2TZ',
        'quvtierLy3j5ChqGrxjYB3i6ieTLEsbTDxn0igjLigv4ywn0BhKGmZiGyNL0zxmGzM9YieffuY0YntyU',
        'C29Tzq',
        'v0XuqMe',
        'ALnsCM4',
        'r0T1A1i',
        'tevwruXt',
        'Eu14teW',
        'teforW',
        'qxvmDuu',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'D0TxB1C',
        'BM9Uy2u',
        '8j+sPsdLKk/LIQJNU4JNQ6/LPlhOTku6ia',
        'tMDJz2e',
        'y29UC3rHBNrZ',
        'qKzMzM0',
        'CgveBw0',
        'zKXTyxi',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'DxHuAM8',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU'
    ];
    a0a = function () {
        return c9;
    };
    return a0a();
}
class a0y extends a0v {
    constructor() {
        const a4 = a0T, a = { 'UPNBM': a4(0x1e9) }, b = a[a4(0x39e)][a4(0x10a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                super();
                continue;
            case '1':
                this[a4(0x2b4)] = { 'usage': 0x0 };
                continue;
            case '2':
                this[a4(0x137)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '3':
                this['disk'] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[a4(0x3fd)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '5':
                this[a4(0x3af)] = 0x0;
                continue;
            case '6':
                this['connections'] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '7':
                this[a4(0x1c1)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '8':
                this[a4(0x33d)] = {
                    'load1': 0x0,
                    'load5': 0x0,
                    'load15': 0x0
                };
                continue;
            case '9':
                this[a4(0x3d3)] = 0x0;
                continue;
            case '10':
                this[a4(0x2c3)] = '';
                continue;
            }
            break;
        }
    }
}
class a0z extends a0v {
    constructor() {
        const a5 = a0T;
        super(), this['result'] = '', this['exitcode'] = 0x0, this[a5(0x41d)] = ![], this['cmd'] = '';
    }
}
class a0A {
    constructor() {
        const a6 = a0T, a = a6(0x390)[a6(0x10a)]('|');
        let b = 0x0;
        while (!![]) {
            switch (a[b++]) {
            case '0':
                this[a6(0x41a)] = '';
                continue;
            case '1':
                this[a6(0x407)] = '';
                continue;
            case '2':
                this[a6(0x17e)] = 0x0;
                continue;
            case '3':
                this[a6(0x27f)] = '';
                continue;
            case '4':
                this[a6(0x28e)] = '';
                continue;
            case '5':
                this['mode_octal'] = '';
                continue;
            case '6':
                this['name'] = '';
                continue;
            case '7':
                this[a6(0x43f)] = '';
                continue;
            }
            break;
        }
    }
}
class a0B {
    constructor() {
        const a7 = a0T;
        this[a7(0x27f)] = '', this[a7(0x267)] = '', this[a7(0x407)] = '', this['mode_octal'] = '', this['type'] = '', this[a7(0x411)] = ![], this[a7(0x43c)] = ![], this[a7(0x1df)] = ![];
    }
}
class a0C extends a0v {
    constructor() {
        const a8 = a0T;
        super(), this[a8(0x2a6)] = [];
    }
}
class a0D {
    static ['_generateRawKeypair']() {
        const a9 = a0T, a = {
                'feWGU': a9(0x3d9),
                'MBJwZ': a9(0x240),
                'FkjJa': a9(0x2bd),
                'ERMVX': function (i, j) {
                    return i !== j;
                },
                'rKfyU': function (i, j) {
                    return i !== j;
                }
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a9(0x1fc)](a['feWGU']), d = b[a9(0x11d)]({ 'format': a[a9(0x2cd)] }), f = c[a9(0x11d)]({ 'format': a['MBJwZ'] }), g = Buffer[a9(0x3fa)](d['d'], a[a9(0x109)]), h = Buffer[a9(0x3fa)](f['x'], a9(0x2bd));
        return (a['ERMVX'](g['length'], 0x20) || a[a9(0x398)](h[a9(0x255)], 0x20)) && a0u[a9(0x17f)]('[🚨\x20严重警告]\x20X25519\x20密钥长度非\x2032\x20字节，Noise\x20协议必定崩溃！'), {
            'private_b64': g['toString'](a9(0x1e0)),
            'public_b64': h['toString'](a9(0x1e0))
        };
    }
    static [a0T(0x33b)](a) {
        const aa = a0T, b = this[aa(0x434)]();
        return {
            'role': a,
            'private_b64': b[aa(0x307)],
            'public_b64': b['public_b64']
        };
    }
    static [a0T(0x2b2)](a = a0T(0x2f9), b = a0T(0x28d)) {
        const ab = a0T, c = {
                'control': this[ab(0x33b)](a),
                'agent': this[ab(0x33b)](b)
            };
        return c;
    }
}
function a0b(a, b) {
    a = a - 0x101;
    const c = a0a();
    let d = c[a];
    if (a0b['WuRsVJ'] === undefined) {
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
        a0b['PdUEmA'] = e, a0b['PHhduz'] = {}, a0b['WuRsVJ'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['PHhduz'][g];
    return !h ? (d = a0b['PdUEmA'](d), a0b['PHhduz'][g] = d) : d = h, d;
}
class a0E {
    static ['Rtimeout'] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0T(0x183)] = (process.env.EXEC_SHELL || a0T(0x22b))['toLowerCase']() === a0T(0x22b);
    static ['DEBUG'] = (process.env.DEBUG || a0T(0x3ee))[a0T(0x381)]() === 'true';
    static ['TIMESTAMP_WINDOW'] = parseInt(process.env.TIMESTAMP_WINDOW || a0T(0x3b8));
    static [a0T(0x423)] = parseInt(process.env.LOG_LEVEL || (this['DEBUG'] ? '0' : '2'), 0xa);
    static [a0T(0x178)] = a0E[a0T(0x16e)](a0T(0x1e3), 'keys/agent_ecdsa_pub.pem') || 'ECDSA公钥内容';
    static [a0T(0x38b)] = a0E[a0T(0x16e)](a0T(0x313), a0T(0x355)) || 'ECIES公钥内容';
    static [a0T(0x254)] = process.env.FILE_ROOT || a0k[a0T(0x342)]();
    static ['MAX_UPLOAD_SIZE'] = parseInt(process.env.MAX_UPLOAD_SIZE || a0T(0x2d6));
    static [a0T(0x196)] = (process.env.FOLLOW_SYMLINKS || a0T(0x3ee))[a0T(0x381)]() === 'true';
    static ['FILE_AUDIT_LOG'] = (process.env.FILE_AUDIT_LOG || 'true')[a0T(0x381)]() === a0T(0x22b);
    static [a0T(0x31f)] = !![];
    static ['onetasks'] = [];
    static [a0T(0x369)] = {};
    static [a0T(0x393)] = ![];
    static ['TASK_TIMEOUT'] = parseInt(process.env.TASK_TIMEOUT || '300');
    static [a0T(0x257)] = parseInt(process.env.CRON_INTERVAL || '30');
    static [a0T(0x3a3)] = [];
    static [a0T(0x1d2)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0T(0x3d2));
    static [a0T(0x26f)] = process.env.HOST || a0T(0x21c);
    static ['PORT'] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0T(0x3e3));
    static [a0T(0x2b1)] = process.env.AGENT_VERSION || a0T(0x2e0);
    static [a0T(0x212)] = a0g[a0T(0x2ad)](0x20)[a0T(0x14a)]('base64');
    static [a0T(0x163)] = a0D[a0T(0x2b2)]();
    static [a0T(0x2d2)] = {
        'controller': { 'private': this[a0T(0x163)][a0T(0x168)][a0T(0x307)] },
        'agent': { 'public': this['NOISE_KEYS_INTERNAL'][a0T(0x158)][a0T(0x310)] }
    };
    static [a0T(0x195)] = 0xe10;
    static [a0T(0x3e2)] = 0x1e;
    static [a0T(0x3b7)] = null;
    static [a0T(0x391)] = 0x0;
    static [a0T(0x331)] = null;
    static [a0T(0x1c5)] = null;
    static ['_status_cache_time'] = 0x0;
    static [a0T(0x438)] = null;
    static [a0T(0x16e)](a, b) {
        const ac = a0T, c = { 'aXNEm': ac(0x3ce) }, d = process.env[a];
        if (d)
            return d;
        const f = a0j[ac(0x292)](__dirname, b);
        if (a0h[ac(0x3e6)](f))
            try {
                return a0h['readFileSync'](f, c[ac(0x380)])[ac(0x2d4)]();
            } catch (g) {
            }
        return '';
    }
    static [a0T(0x1c6)]() {
        const ad = a0T, a = {
                'lIDFy': 'ECDSA_PUBKEY:\x20未设置环境变量且文件\x20keys/agent_ecdsa_pub.pem\x20不存在',
                'bSBBX': ad(0x181),
                'nDKhZ': ad(0x402),
                'zxskP': ad(0x233),
                'pXksw': ad(0x1d9),
                'NMUkM': ad(0x23c)
            };
        if (!this[ad(0x263)]) {
            const b = [];
            !this[ad(0x178)] && b['push'](a[ad(0x22a)]), !this[ad(0x38b)] && b['push'](a[ad(0x2f8)]), b[ad(0x255)] > 0x0 && (a0u['error'](a[ad(0x3ad)]), b[ad(0x10c)](c => a0u[ad(0x17f)](ad(0x175) + c)), a0u[ad(0x12c)](a[ad(0x3e8)]), a0u[ad(0x12c)](a[ad(0x107)]), a0u['debug'](a['NMUkM']), process['exit'](0x1));
        }
    }
    static ['merge'](a = {}) {
        const ae = a0T, b = {
                'iDOKo': function (c, d) {
                    return c !== d;
                },
                'ANQPP': function (c, d) {
                    return c !== d;
                },
                'DvZyC': function (c, d, f) {
                    return c(d, f);
                },
                'UqTsw': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b['iDOKo'](a['PORT'], undefined) && b[ae(0x35c)](a['PORT'], null) && (this['PORT'] = b[ae(0x388)](parseInt, b[ae(0x321)](String, a[ae(0x235)]), 0xa)), a[ae(0x178)] && (this[ae(0x178)] = a[ae(0x178)][ae(0x2d4)]()), a[ae(0x38b)] && (this[ae(0x38b)] = a[ae(0x38b)]['trim']());
    }
}
class a0F {
    constructor(a, b) {
        const af = a0T, c = {
                'kLdKC': af(0x421),
                'AYswN': af(0x1e0),
                'nwUXI': 'P-256',
                'GNakY': af(0x240)
            };
        this[af(0x182)] = null, this['eciesPubkey'] = null;
        if (a)
            try {
                const d = a['trim']();
                if (d[af(0x2f3)](c['kLdKC']))
                    this[af(0x182)] = a0g[af(0x1e2)](d);
                else {
                    const f = Buffer[af(0x3fa)](d, c['AYswN']), g = a0s[af(0x2f4)][af(0x352)](f), h = g['toBytes'](![]), i = m => m[af(0x14a)](af(0x1e0))[af(0x2a5)](/\+/g, '-')[af(0x2a5)](/\//g, '_')['replace'](/=/g, ''), j = i(Buffer[af(0x3fa)](h[af(0x422)](0x1, 0x21))), k = i(Buffer[af(0x3fa)](h[af(0x422)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[af(0x340)],
                            'x': j,
                            'y': k
                        };
                    this[af(0x182)] = a0g[af(0x1e2)]({
                        'key': l,
                        'format': c['GNakY']
                    });
                }
            } catch (m) {
                a0u['error'](af(0x38c) + m[af(0x2c3)]), this[af(0x182)] = null;
            }
        if (b)
            try {
                this[af(0x26c)] = a0p[af(0x362)](b['trim']());
            } catch (n) {
                a0u[af(0x39d)]('⚠️\x20ECIES公钥解码失败:\x20' + n[af(0x2c3)]);
            }
    }
    [a0T(0x33a)](a, b, c) {
        const ag = a0T, d = {
                'TaOai': function (f, g) {
                    return f / g;
                },
                'SWJWf': function (f, g) {
                    return f > g;
                },
                'MCEck': function (f, g) {
                    return f - g;
                },
                'JcFqO': ag(0x31d),
                'zTHBz': 'Bad\x20signature'
            };
        if (!this[ag(0x182)])
            return !![];
        try {
            const f = parseInt(b), g = Math['floor'](d[ag(0x303)](Date[ag(0x318)](), 0x3e8));
            if (d[ag(0x40e)](Math[ag(0x273)](d[ag(0x247)](g, f)), a0E[ag(0x2ee)]))
                throw new Error('Timestamp\x20expired:\x20diff=' + Math['abs'](d[ag(0x247)](g, f)) + ag(0x1fe) + a0E[ag(0x2ee)] + 's');
            const h = '' + a + b, i = a0p[ag(0x362)](c), j = a0g['createVerify'](d[ag(0x151)]);
            j['update'](h);
            const k = j['verify'](this[ag(0x182)], i);
            if (!k)
                throw new Error(d[ag(0x16d)]);
            return !![];
        } catch (l) {
            throw new Error(ag(0x2cc) + l[ag(0x2c3)]);
        }
    }
    [a0T(0x30d)](a) {
        const ah = a0T, b = {
                'eREik': ah(0x323),
                'Ngcga': function (c, d, f) {
                    return c(d, f);
                },
                'zuest': ah(0x1e0)
            };
        if (a0E[ah(0x263)] || !this[ah(0x26c)])
            return JSON[ah(0x199)](a);
        try {
            const c = JSON[ah(0x199)](a), d = Buffer['from'](c, b[ah(0x386)]), f = Buffer[ah(0x3fa)](this[ah(0x26c)]), g = b[ah(0x377)](a0o, f, d);
            return Buffer['from'](g)[ah(0x14a)](b[ah(0x12b)]);
        } catch (h) {
            const i = {
                '_encrypt_error': h[ah(0x2c3)],
                '_raw': a0E[ah(0x263)] ? a : null
            };
            return JSON[ah(0x199)](i);
        }
    }
    ['decryptData'](a, b) {
        const ai = a0T, c = {
                'ZrtFR': ai(0x1e0),
                'DsLhC': 'utf8',
                'gbBJB': ai(0x2c8),
                'NvQhM': ai(0x14f)
            };
        if (!b || b['length'] !== 0x20)
            throw new Error(ai(0x36a));
        try {
            const d = Buffer['from'](a, c[ai(0x2db)])['toString'](c[ai(0x3c3)]), f = JSON[ai(0x32d)](d);
            if (!f[ai(0x375)] || !f[ai(0x29d)] || !f[ai(0x1b7)])
                throw new Error(c[ai(0x27e)]);
            const g = Buffer[ai(0x3fa)](f[ai(0x375)], c[ai(0x2db)]), h = Buffer[ai(0x3fa)](f['tag'], c[ai(0x2db)]), i = Buffer[ai(0x3fa)](f[ai(0x1b7)], c['ZrtFR']), j = a0g[ai(0x219)](c['NvQhM'], b, g);
            j[ai(0x256)](h);
            let k = j[ai(0x3f5)](i, null, c[ai(0x3c3)]);
            return k += j['final'](c[ai(0x3c3)]), k;
        } catch (l) {
            throw new Error(ai(0x277) + l[ai(0x2c3)]);
        }
    }
}
function a0G(a) {
    const aj = a0T, b = {
            'HZkTu': aj(0x406),
            'pIiHX': 'application/json',
            'rLMGa': function (c, d) {
                return c === d;
            },
            'XTCKb': aj(0x429),
            'CTojp': function (c, d) {
                return c === d;
            },
            'zdDIc': aj(0x22b),
            'mWSiS': aj(0x293),
            'MpOJf': aj(0x18b),
            'HDLMD': aj(0x1e8),
            'Ikwxk': aj(0x3ce),
            'fThJF': '/api/ws/',
            'fiSbi': function (c, d) {
                return c === d;
            },
            'BNsQK': aj(0x1a8),
            'KDjTr': function (c) {
                return c();
            },
            'Phpms': function (c, d) {
                return c === d;
            },
            'LenHB': aj(0x432),
            'xniYF': aj(0x12e),
            'OpGYl': aj(0x305),
            'ddWhp': 'x-nonce',
            'cCYMm': aj(0x1a6),
            'nzQqr': aj(0x306),
            'vwvgz': aj(0x124),
            'EyAsg': aj(0x396),
            'swmiF': function (c, d) {
                return c || d;
            },
            'uxTjo': aj(0x3e5),
            'sNXLz': aj(0x311),
            'nYqAp': aj(0x2de),
            'tpqIo': aj(0x1e0),
            'mgrNw': aj(0x323)
        };
    return async (c, d, f) => {
        const ak = aj;
        if (c['path']['startsWith'](b[ak(0x220)]) || b[ak(0x3eb)]((c[ak(0x3ea)][ak(0x19b)] || '')[ak(0x381)](), b[ak(0x435)]))
            return b[ak(0x18e)](f);
        if (b[ak(0x23d)](c[ak(0x108)], ak(0x298)) || b['CTojp'](c[ak(0x108)], b[ak(0x2af)]))
            return b[ak(0x18e)](f);
        c[ak(0x223)] = ![];
        const g = [
            b['xniYF'],
            b[ak(0x1f9)]
        ];
        if (a0E[ak(0x263)])
            return c[ak(0x223)] = !![], f();
        const h = c[ak(0x3ea)][b[ak(0x3c2)]] || c[ak(0x3ea)][b['cCYMm']], i = c[ak(0x3ea)][b['nzQqr']] || c[ak(0x3ea)][b['vwvgz']], j = c['headers'][ak(0x215)] || c[ak(0x3ea)][b[ak(0x153)]];
        if (b[ak(0x3a8)](!h, !i) || !j)
            return g[ak(0x34b)](c[ak(0x27f)]) ? b['KDjTr'](f) : d[ak(0x27a)](0x191)[ak(0x186)]({ 'error': b[ak(0x37d)] });
        try {
            a[ak(0x33a)](h, i, j), c['is_authenticated'] = !![];
        } catch (l) {
            return g['includes'](c[ak(0x27f)]) ? b['KDjTr'](f) : d[ak(0x27a)](0x191)[ak(0x186)]({ 'error': 'Signature\x20verification\x20failed:\x20' + l[ak(0x2c3)] });
        }
        if (c[ak(0x3b1)] && typeof c[ak(0x3b1)] === b['XTCKb']) {
            const m = b['rLMGa']((c[ak(0x3ea)][b[ak(0x353)]] || '')['toLowerCase'](), 'true');
            try {
                if (m && c['is_authenticated']) {
                    const n = Buffer['from'](a0E['SESSION_KEY'], ak(0x1e0)), o = a[ak(0x29e)](c[ak(0x3b1)], n);
                    c['body'] = JSON[ak(0x32d)](o);
                } else {
                    if (c[ak(0x3b1)][ak(0x2f3)](b[ak(0x166)])) {
                        const p = Buffer[ak(0x3fa)](c['body'], b[ak(0x35f)])[ak(0x14a)](b[ak(0x229)]);
                        c[ak(0x3b1)] = JSON[ak(0x32d)](p);
                    } else {
                        if (c['body'][ak(0x2d4)]()[ak(0x2f3)]('{') || c[ak(0x3b1)][ak(0x2d4)]()[ak(0x2f3)]('['))
                            c[ak(0x3b1)] = JSON[ak(0x32d)](c[ak(0x3b1)]);
                        else {
                            if (c[ak(0x3b1)][ak(0x2d4)]() === '')
                                c['body'] = {};
                        }
                    }
                }
            } catch (q) {
                return a0u[ak(0x17f)]('💥\x20[Body\x20Parse\x20Error]:\x20' + q[ak(0x2c3)]), d[ak(0x27a)](0x190)['json']({ 'error': ak(0x23a) + q[ak(0x2c3)] });
            }
        }
        const k = d[ak(0x259)];
        d[ak(0x259)] = function (r) {
            const al = ak;
            if (d[al(0x25c)](b[al(0x3c7)]) && d['get'](al(0x406))[al(0x34b)](b[al(0x309)]))
                try {
                    const s = b[al(0x150)](typeof r, b['XTCKb']) ? JSON[al(0x32d)](r) : r;
                    if (c['is_authenticated']) {
                        const t = a[al(0x30d)](s), u = b[al(0x3ac)](typeof t, b[al(0x29f)]) ? t : JSON[al(0x199)](t);
                        return d[al(0x116)](al(0x1e8), b[al(0x20e)]), d['set'](b['mWSiS'], a0E[al(0x2b1)]), d['set'](b[al(0x132)], Buffer[al(0x401)](u, al(0x3ce))[al(0x14a)]()), k[al(0x1ab)](this, u);
                    } else {
                        const v = b[al(0x3ac)](typeof r, b['XTCKb']) ? r : JSON[al(0x199)](s);
                        return d[al(0x116)](b[al(0x10f)], 'false'), d[al(0x116)](b[al(0x132)], Buffer[al(0x401)](v, b[al(0x281)])['toString']()), k[al(0x1ab)](this, v);
                    }
                } catch (w) {
                    if (a0E[al(0x263)])
                        a0u[al(0x17f)](al(0x119) + w[al(0x2c3)]);
                }
            return k[al(0x1ab)](this, r);
        }, f();
    };
}
class a0H {
    constructor() {
        const am = a0T, a = {
                'uGjcc': function (b, c) {
                    return b / c;
                }
            };
        this[am(0x242)] = {
            'rx': 0x0,
            'tx': 0x0
        }, this[am(0x2e2)] = 0x0, this[am(0x2ff)] = 0x0, this[am(0x272)] = a[am(0x27c)](Date['now'](), 0x3e8);
    }
    async [a0T(0x1f3)]() {
        const an = a0T, a = {
                'ygRFk': an(0x3ce),
                'SXbSP': function (d, f) {
                    return d === f;
                },
                'EKcbj': 'max',
                'Mkoph': function (d, f, g) {
                    return d(f, g);
                },
                'fWAQh': function (d, f, g) {
                    return d(f, g);
                },
                'NnCSx': function (d, f, g) {
                    return d(f, g);
                },
                'AHyqP': function (d, f) {
                    return d > f;
                },
                'uOdBD': function (d, f) {
                    return d === f;
                },
                'OQTAx': function (d, f) {
                    return d(f);
                },
                'asTSf': function (d, f) {
                    return d - f;
                },
                'nCXWg': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[an(0x16f)](an(0x230), a[an(0x20f)]))[an(0x2d4)]();
            b = a[an(0x2bc)](d, a[an(0x22c)]) ? null : a[an(0x3e4)](parseInt, d, 0xa), c = parseInt((await a0i[an(0x16f)]('/sys/fs/cgroup/memory.current', a[an(0x20f)]))[an(0x2d4)](), 0xa);
        } catch {
            try {
                b = a['fWAQh'](parseInt, (await a0i[an(0x16f)](an(0x358), a['ygRFk']))['trim'](), 0xa), c = a[an(0x2c1)](parseInt, (await a0i[an(0x16f)](an(0x14e), a['ygRFk']))['trim'](), 0xa);
                if (a[an(0x10b)](b, 0x7ffffffffffff000))
                    b = null;
            } catch {
                const f = await a0n[an(0x2c5)]();
                b = f[an(0x3dc)], c = f['used'];
            }
        }
        if (b === null) {
            const g = await a0n[an(0x2c5)]();
            b = g['total'], (a[an(0x437)](c, null) || a[an(0x147)](isNaN, c)) && (c = g[an(0x2c2)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[an(0x37f)](b, c),
            'free': a['nCXWg'](b, c),
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async ['getBasicInfo']() {
        const ao = a0T, [a, b, c, d] = await Promise[ao(0x1a5)]([
                a0n[ao(0x2b4)](),
                this[ao(0x1f3)](),
                a0n[ao(0x3e0)](),
                a0n[ao(0x252)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[ao(0x1a5)]([
                this[ao(0x337)](),
                this[ao(0x2eb)]()
            ]);
        } catch (h) {
            a0u[ao(0x12c)](ao(0x286) + h[ao(0x2c3)], 0x1);
        }
        return {
            'arch': a0k[ao(0x328)](),
            'cpu_cores': a[ao(0x3e1)],
            'cpu_name': a[ao(0x136)],
            'disk_total': (await a0n['fsSize']())[0x0]?.[ao(0x17e)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[ao(0x3dc)],
            'os': c['distro'] + '\x20' + c['release'],
            'kernel_version': c[ao(0x299)],
            'swap_total': b[ao(0x3b9)],
            'version': a0E['AGENT_VERSION'],
            'virtualization': await this[ao(0x31b)](),
            'session_key': a0E['SESSION_KEY'],
            'noise_key': a0E[ao(0x2d2)]
        };
    }
    [a0T(0x23e)]() {
        const ap = a0T, a = {
                'fLmar': function (c, d) {
                    return c === d;
                },
                'IOuhD': 'IPv4'
            }, b = a0k[ap(0x252)]();
        for (const c of Object[ap(0x2fa)](b)) {
            for (const d of b[c]) {
                const f = a['fLmar'](d['family'], a[ap(0x42e)]) || a[ap(0x37b)](d['family'], 0x4);
                if (f && !d[ap(0x399)]) {
                    if (!/^10\./['test'](d[ap(0x1c9)]) && !/^192\.168\./[ap(0x2ae)](d['address']) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[ap(0x2ae)](d[ap(0x1c9)]))
                        return d[ap(0x1c9)];
                }
            }
        }
        return null;
    }
    async [a0T(0x337)]() {
        const aq = a0T, a = {
                'pBULS': 'https://api.ipify.org',
                'qLiOm': aq(0x24a),
                'zoBJq': aq(0x25e),
                'qroqX': aq(0x1a2),
                'YEVTD': 'https://ipecho.net/plain',
                'dslIM': aq(0x2ea),
                'zcWlm': aq(0x2df)
            }, b = [
                a[aq(0x1ad)],
                a['qLiOm'],
                a[aq(0x1eb)],
                a['qroqX'],
                a[aq(0x300)],
                a['dslIM'],
                a[aq(0x2f7)]
            ];
        for (const d of b) {
            try {
                const f = await this[aq(0x3be)](d, 0x4);
                if (f && this[aq(0x2e6)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this['getLocalIPv4']();
        if (c && this[aq(0x2e6)](c))
            return c;
        return null;
    }
    [a0T(0x3f9)]() {
        const ar = a0T, a = {
                'jXpwP': function (c, d) {
                    return c === d;
                },
                'YKSqD': 'fe80:'
            }, b = a0k['networkInterfaces']();
        for (const c of Object[ar(0x2fa)](b)) {
            for (const d of b[c]) {
                const f = a['jXpwP'](d[ar(0x3d1)], ar(0x28a)) || a[ar(0x241)](d[ar(0x3d1)], 0x6);
                if (f && !d[ar(0x399)]) {
                    if (!d[ar(0x1c9)][ar(0x381)]()[ar(0x2f3)](a[ar(0x222)]))
                        return d[ar(0x1c9)];
                }
            }
        }
        return null;
    }
    async [a0T(0x2eb)]() {
        const as = a0T, a = { 'jEPhl': as(0x11c) }, b = this['getLocalIPv6']();
        if (b && this[as(0x2d9)](b))
            return b;
        const c = [
            a['jEPhl'],
            as(0x24a),
            as(0x1ff)
        ];
        for (const d of c) {
            try {
                const f = await this[as(0x3be)](d, 0x6);
                if (f && this[as(0x2d9)](f))
                    return f;
            } catch (g) {
                a0u[as(0x12c)]('访问\x20' + d + as(0x17a) + g[as(0x2c3)]);
                continue;
            }
        }
        return null;
    }
    async [a0T(0x3be)](a, b = 0x0) {
        const at = a0T, c = {
                'KqvER': function (d, f) {
                    return d(f);
                },
                'UkMRJ': at(0x1f4),
                'zWMgv': 'data',
                'zVHNJ': at(0x17f)
            };
        return new Promise((d, f) => {
            const au = at, g = { 'uzIDc': c[au(0x27d)] }, h = c[au(0x25a)](require, au(0x206)), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': au(0x1ba) }
                }, j = h[au(0x25c)](a, i, k => {
                    const av = au;
                    let l = '';
                    if (k[av(0x420)] !== 0xc8) {
                        f(new Error(av(0x288) + k[av(0x420)]));
                        return;
                    }
                    k['on'](g[av(0x334)], m => l += m), k['on'](av(0x24e), () => d(l[av(0x2d4)]()));
                });
            j['on'](c['zVHNJ'], f), j[au(0x128)](0x1388, () => {
                const aw = au;
                j[aw(0x41c)](), c[aw(0x25a)](f, new Error(c[aw(0x34e)]));
            });
        });
    }
    [a0T(0x2e6)](a) {
        const ax = a0T;
        return /^(\d{1,3}\.){3}\d{1,3}$/[ax(0x2ae)](a);
    }
    [a0T(0x2d9)](a) {
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a['includes'](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i['test'](a))
            return ![];
        return !![];
    }
    async ['getRealtimeInfo']() {
        const ay = a0T, a = {
                'dhplG': function (m, n) {
                    return m - n;
                },
                'EuZqG': function (m, n) {
                    return m / n;
                },
                'hSeTz': function (m, n) {
                    return m * n;
                },
                'IAqTI': function (m, n) {
                    return m / n;
                },
                'IZxSm': function (m, n) {
                    return m * n;
                }
            }, [b, c, d, f] = await Promise[ay(0x1a5)]([
                a0n[ay(0x271)](),
                a0n['mem'](),
                a0n['networkStats'](),
                a0n[ay(0x271)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = Date[ay(0x318)]() / 0x3e8, i = a[ay(0x1db)](h, this[ay(0x272)]), j = a['dhplG'](g[ay(0x2d8)], this[ay(0x242)]['tx']), k = a['dhplG'](g[ay(0x2f1)], this[ay(0x242)]['rx']);
        this[ay(0x2e2)] += j, this[ay(0x2ff)] += k, this[ay(0x242)] = {
            'tx': g[ay(0x2d8)],
            'rx': g[ay(0x2f1)]
        }, this[ay(0x272)] = h;
        const l = await a0n[ay(0x3dd)]();
        return {
            'cpu': { 'usage': Math[ay(0x1f0)](b[ay(0x271)]) },
            'ram': {
                'total': c['total'],
                'used': c[ay(0x2ac)]
            },
            'swap': {
                'total': c[ay(0x3b9)],
                'used': c[ay(0x2d7)]
            },
            'load': {
                'load1': a[ay(0x2f2)](Math[ay(0x1f0)](a[ay(0x367)](f[ay(0x439)], 0x64)), 0x64),
                'load5': a['IAqTI'](Math[ay(0x1f0)](a[ay(0x42a)](f[ay(0x439)], 0x64)), 0x64),
                'load15': a['EuZqG'](Math[ay(0x1f0)](f['avgLoad'] * 0x64), 0x64)
            },
            'disk': await this[ay(0x198)](),
            'network': {
                'up': Math['round'](a[ay(0x2f2)](j, i)),
                'down': Math[ay(0x1f0)](a['IAqTI'](k, i)),
                'totalUp': this[ay(0x2e2)],
                'totalDown': this[ay(0x2ff)]
            },
            'connections': await this[ay(0x32c)](),
            'uptime': a0k[ay(0x3d3)](),
            'process': l?.[ay(0x1a5)] || 0x0,
            'message': ''
        };
    }
    async [a0T(0x31b)]() {
        const az = a0T, a = {
                'BNgpv': az(0x3d8),
                'dEWwi': az(0x148),
                'UCBbN': az(0x1f8),
                'kaLYo': az(0x28c),
                'wVdFp': az(0x3ce),
                'DMbVw': az(0x3f7),
                'mMwqQ': az(0x2b0),
                'HaXkU': 'Kubernetes',
                'ecZvU': az(0x387),
                'DesNs': az(0x111),
                'wrBCc': '/docker/containers/',
                'LqzpE': az(0x325),
                'pZMSQ': az(0x18f),
                'yOHuC': az(0x1d1),
                'BWBZS': az(0x3bf),
                'wgcht': 'QEMU',
                'AundC': az(0x1d5)
            };
        try {
            if (a0h['existsSync'](a[az(0x2d1)]))
                return a[az(0x1e7)];
            if (a0h[az(0x3e6)](az(0x365)))
                return a[az(0x397)];
            if (a0h[az(0x3e6)](a[az(0x1b4)])) {
                const b = a0h[az(0x3cb)](a[az(0x1b4)], a[az(0x2da)])[az(0x381)]();
                if (b[az(0x34b)](a['DMbVw']) || b['includes'](az(0x135)))
                    return az(0x148);
                else {
                    if (b[az(0x34b)](a[az(0x21f)]))
                        return a[az(0x3ed)];
                    else {
                        if (b[az(0x34b)](az(0x179)))
                            return a[az(0x2b7)];
                    }
                }
            }
            if (a0h[az(0x3e6)](a[az(0x157)])) {
                const c = a0h[az(0x3cb)](a['DesNs'], a[az(0x2da)]);
                if (c['includes'](a['wrBCc']) || c[az(0x34b)](az(0x1cd)))
                    return a['dEWwi'];
                else {
                    if (c[az(0x34b)](a['LqzpE']) || c[az(0x34b)](a['pZMSQ']))
                        return a[az(0x3ed)];
                }
            }
            if (a0h['existsSync'](a[az(0x3ae)])) {
                const d = a0h[az(0x3cb)](a[az(0x3ae)], a[az(0x2da)]);
                if (d[az(0x34b)]('container=lxc'))
                    return a['ecZvU'];
            }
            if (a0h[az(0x3e6)](a[az(0x231)])) {
                const f = a0h[az(0x3cb)](a[az(0x231)], 'utf8');
                if (f[az(0x34b)](a[az(0x131)]) || f['includes'](a['AundC']))
                    return a[az(0x131)];
            }
        } catch (g) {
        }
        return 'None';
    }
    async [a0T(0x198)]() {
        const aA = a0T, a = {
                'buGev': function (b, c) {
                    return b > c;
                },
                'xLGOp': function (b, c) {
                    return b !== c;
                },
                'AqcJi': aA(0x40b),
                'kOegu': aA(0x35e)
            };
        try {
            const b = await a0n['fsSize'](), c = b[aA(0x34c)](g => {
                    const aB = aA;
                    return a[aB(0x2ce)](g[aB(0x17e)], 0x0) && a[aB(0x31c)](g['type'], a[aB(0x333)]) && g[aB(0x28e)] !== a[aB(0x159)] && g['fs'][aB(0x2f3)](aB(0x3bc));
                }), d = c['reduce']((g, h) => g + h['size'], 0x0), f = c[aA(0x301)]((g, h) => g + h[aA(0x2c2)], 0x0);
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
    async [a0T(0x32c)]() {
        const aC = a0T;
        try {
            const a = await a0n[aC(0x2b9)](), b = a[aC(0x34c)](d => d[aC(0x350)] === aC(0x261))['length'], c = a['filter'](d => d[aC(0x350)] === aC(0x26b))['length'];
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
    static async [a0T(0x3f3)](a, b = {}) {
        const aD = a0T, c = {
                'DQtNU': function (d, f) {
                    return d - f;
                },
                'ojYyK': aD(0x17b),
                'EHjKb': function (d, f) {
                    return d(f);
                },
                'PbZDS': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'QdTwS': function (d, f) {
                    return d * f;
                },
                'ygqGa': function (d, f) {
                    return d * f;
                },
                'LKiDz': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aD(0x346)](),
                env: env = {},
                timeout: timeout = a0E['Rtimeout']
            } = b;
        return new Promise(d => {
            const aE = aD, f = {
                    'bRQuI': function (i, j) {
                        return c['DQtNU'](i, j);
                    },
                    'GKukR': c[aE(0x3cf)],
                    'wxhLV': function (i, j) {
                        const aF = aE;
                        return c[aF(0x12d)](i, j);
                    }
                }, g = Date[aE(0x318)](), h = c[aE(0x320)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': c['QdTwS'](timeout, 0x3e8),
                    'maxBuffer': c['ygqGa'](c[aE(0x16b)](0xa, 0x400), 0x400)
                }, (i, j, k) => {
                    const aG = aE, l = f[aG(0x1a1)](Date[aG(0x318)](), g), m = i && i['killed'] && i['signal'];
                    let n = j || '';
                    if (k)
                        n += k;
                    let o = 0x0;
                    if (i) {
                        if (m)
                            o = 0x7c;
                        else
                            typeof i[aG(0x3b5)] === f[aG(0x36e)] ? o = i[aG(0x3b5)] : o = -0x1;
                    }
                    f[aG(0x1f7)](d, {
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
    static async [a0T(0x245)](a, b = ![]) {
        const aH = a0T, c = {
                'ahOtS': 'directory',
                'WVdyd': aH(0x283),
                'mlNiw': function (h, i) {
                    return h & i;
                },
                'HoMBc': function (h, i) {
                    return h(i);
                },
                'ijbJZ': function (h, i) {
                    return h || i;
                },
                'sWhtD': aH(0x384),
                'AJwLc': aH(0x1d6)
            }, d = a0j[aH(0x117)](a0E[aH(0x254)], c[aH(0x2bb)](a, '.'));
        if (!d[aH(0x2f3)](a0E[aH(0x254)]))
            throw new Error(c[aH(0x2fc)]);
        if (!a0h['existsSync'](d))
            throw new Error(c[aH(0x30e)]);
        const f = [], g = h => {
                const aI = aH, i = a0h[aI(0x1f1)](h);
                for (const j of i) {
                    const k = a0j[aI(0x292)](h, j), l = a0h[aI(0x2e5)](k), m = new a0A();
                    m['name'] = j, m[aI(0x27f)] = a0j[aI(0x2e7)](a0E[aI(0x254)], k), m['type'] = l[aI(0x382)]() ? c['ahOtS'] : c[aI(0x20a)], m[aI(0x17e)] = l[aI(0x17e)], m[aI(0x41a)] = l[aI(0x41a)][aI(0x3ca)](), m[aI(0x407)] = this[aI(0x114)](l[aI(0x407)], l[aI(0x382)]()), m['mode_octal'] = '0o' + c[aI(0x433)](l['mode'], 0x1ff)[aI(0x14a)](0x8), m[aI(0x43f)] = l['uid'] + ':' + l[aI(0x291)], f[aI(0x1d8)](m), b && l[aI(0x382)]() && c['HoMBc'](g, k);
                }
            };
        return g(d), f;
    }
    static async [a0T(0x221)](a) {
        const aJ = a0T, b = {
                'BNjvU': function (d, f) {
                    return d & f;
                },
                'MAzYG': aJ(0x283)
            }, c = [];
        for (const d of a) {
            const f = a0j['resolve'](a0E[aJ(0x254)], d);
            if (!f['startsWith'](a0E[aJ(0x254)]))
                continue;
            try {
                const g = a0h[aJ(0x2e5)](f), h = this[aJ(0x244)](f, a0h[aJ(0x378)][aJ(0x1ed)]), i = this['_checkAccess'](f, a0h[aJ(0x378)]['W_OK']), j = this['_checkAccess'](f, a0h[aJ(0x378)][aJ(0x3f4)]), k = new a0B();
                k[aJ(0x27f)] = a0j[aJ(0x2e7)](a0E[aJ(0x254)], f), k[aJ(0x267)] = a0j['basename'](f), k[aJ(0x407)] = this[aJ(0x114)](g[aJ(0x407)], g['isDirectory']()), k[aJ(0x3f8)] = '0o' + b[aJ(0x348)](g[aJ(0x407)], 0x1ff)[aJ(0x14a)](0x8), k[aJ(0x28e)] = g['isDirectory']() ? 'directory' : b[aJ(0x343)], k[aJ(0x411)] = h, k[aJ(0x43c)] = i, k[aJ(0x1df)] = j, c[aJ(0x1d8)](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0T(0x244)](a, b) {
        try {
            return a0h['accessSync'](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0T(0x1aa)](a) {
        const aK = a0T, b = {
                'jSrzD': function (c, d) {
                    return c === d;
                }
            };
        if (b[aK(0x19e)](typeof a, aK(0x17b)))
            return a;
        if (typeof a === 'string') {
            const c = a['trim']();
            if (/^[0-7]{3,4}$/[aK(0x2ae)](c))
                return parseInt(c, 0x8);
        }
        throw new Error('Unsupported\x20permission\x20format,\x20only\x20octal\x20strings\x20are\x20supported');
    }
    static [a0T(0x114)](a, b) {
        const aL = a0T, c = {
                'ATvOl': function (i, j) {
                    return i & j;
                },
                'YsxPR': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[aL(0x312)](a, 0x1ff)[aL(0x14a)](0x8)[aL(0x43b)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aL(0x226)](parseInt, i, 0xa);
            h += f[aL(0x1a7)]((k, l) => j & 0x4 >> l ? k : '-')[aL(0x292)]('');
        }
        return h;
    }
    static async [a0T(0x42c)](a, b = ![]) {
        const aM = a0T, c = {
                'cMhZe': function (g, h) {
                    return g(h);
                },
                'veYli': function (g, h) {
                    return g(h);
                },
                'IKrZX': 'access_denied',
                'kKsmv': function (g, h) {
                    return g(h);
                },
                'wKWoW': function (g, h) {
                    return g(h);
                }
            }, d = [];
        for (const [g, h] of Object[aM(0x173)](a)) {
            const i = a0j[aM(0x117)](a0E[aM(0x254)], g);
            if (!i[aM(0x2f3)](a0E[aM(0x254)])) {
                d['push']({
                    'path': g,
                    'requested': c[aM(0x174)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aM(0x366)]
                });
                continue;
            }
            try {
                const j = this[aM(0x1aa)](h), k = m => {
                        const aN = aM;
                        a0h[aN(0x1ee)](m, j);
                    };
                if (b && a0h[aM(0x3e6)](i) && a0h[aM(0x2e5)](i)['isDirectory']()) {
                    const m = n => {
                        const aO = aM;
                        k(n);
                        const o = a0h[aO(0x1f1)](n);
                        for (const p of o) {
                            const q = a0j[aO(0x292)](n, p);
                            a0h[aO(0x2e5)](q)['isDirectory']() ? m(q) : c[aO(0x1cc)](k, q);
                        }
                    };
                    m(i);
                } else
                    c[aM(0x31a)](k, i);
                const l = j[aM(0x14a)](0x8);
                d[aM(0x1d8)]({
                    'path': g,
                    'requested': c[aM(0x31a)](String, h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aM(0x1d8)]({
                    'path': g,
                    'requested': c[aM(0x374)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': 'error',
                    'message': n[aM(0x2c3)]
                });
            }
        }
        const f = d[aM(0x34c)](o => o['status'] === 'ok')[aM(0x255)];
        return {
            'status': 'ok',
            'total': d['length'],
            'success': f,
            'results': d
        };
    }
    static async ['readFile'](a) {
        const aP = a0T, b = {
                'mzRdm': aP(0x384),
                'lILRq': function (h, i) {
                    return h > i;
                },
                'DzEjM': aP(0x1e0),
                'vXKHB': 'utf-8'
            }, c = a0j[aP(0x117)](a0E[aP(0x254)], a);
        if (!c[aP(0x2f3)](a0E['FILE_ROOT']))
            throw new Error(b[aP(0x2bf)]);
        const d = a0h[aP(0x2e5)](c);
        if (b['lILRq'](d[aP(0x17e)], 0x400 * 0x400))
            throw new Error(aP(0x19f));
        const f = a0h[aP(0x3cb)](c), g = this[aP(0x24c)](f);
        return {
            'status': 'ok',
            'path': a0j[aP(0x2e7)](a0E[aP(0x254)], c),
            'content': g ? a0p['fromByteArray'](f) : f['toString']('utf8'),
            'encoding': g ? b[aP(0x395)] : b[aP(0x275)],
            'is_binary': g,
            'size': d[aP(0x17e)]
        };
    }
    static ['_isBinary'](a) {
        const aQ = a0T, b = {
                'giJHu': function (c, d) {
                    return c === d;
                }
            };
        if (!a || b[aQ(0x3e9)](a[aQ(0x255)], 0x0))
            return ![];
        for (let c = 0x0; c < Math[aQ(0x368)](a[aQ(0x255)], 0x200); c++) {
            if (a[c] === 0x0)
                return !![];
        }
        return ![];
    }
    static async [a0T(0x11e)](a, b, c, d = null, f = null) {
        const aR = a0T, g = {
                'TReOE': 'Access\x20denied:\x20path\x20outside\x20root',
                'gLlVC': function (l, m) {
                    return l > m;
                },
                'ZWqyn': aR(0x19f),
                'hfYLG': function (l, m) {
                    return l !== m;
                },
                'edmtY': function (l, m) {
                    return l !== m;
                },
                'VJApa': function (l, m) {
                    return l(m);
                },
                'gAgpW': aR(0x2a3),
                'REhGZ': aR(0x1e6),
                'JLyRl': function (l, m) {
                    return l < m;
                }
            }, h = a0j[aR(0x117)](a0E[aR(0x254)], a);
        let j = h;
        b && (j = a0j['join'](h, b));
        if (!j['startsWith'](a0E[aR(0x254)]))
            throw new Error(g[aR(0x1ec)]);
        !a0h[aR(0x3e6)](a0j[aR(0x266)](j)) && a0h['mkdirSync'](a0j[aR(0x266)](j), { 'recursive': !![] });
        const k = a0p[aR(0x362)](c);
        if (g[aR(0x1bf)](k[aR(0x255)], a0E[aR(0x2d5)]))
            throw new Error(g[aR(0x426)]);
        if (g[aR(0x385)](d, null) && g[aR(0x2dd)](f, null)) {
            const l = g['VJApa'](Number, d), m = Number(f);
            if (Number[aR(0x24d)](l) || Number['isNaN'](m))
                throw new Error(g[aR(0x29b)]);
            const n = a0j['join'](a0j[aR(0x266)](j), g[aR(0x33e)], a0j[aR(0x3c9)](j));
            !a0h[aR(0x3e6)](n) && a0h[aR(0x1e1)](n, { 'recursive': !![] });
            const o = a0j['join'](n, aR(0x40c) + l);
            a0h['writeFileSync'](o, k);
            const p = a0h[aR(0x1f1)](n)['filter'](s => s['startsWith'](aR(0x40c))), q = p[aR(0x255)], r = q === m;
            if (r) {
                const s = a0h[aR(0x1cf)](j);
                for (let t = 0x0; g['JLyRl'](t, m); t++) {
                    const u = a0j[aR(0x292)](n, aR(0x40c) + t);
                    if (!a0h['existsSync'](u)) {
                        s['close']();
                        throw new Error(aR(0x338) + t);
                    }
                    s[aR(0x1a9)](a0h[aR(0x3cb)](u));
                }
                s[aR(0x24e)]();
                for (const v of a0h[aR(0x1f1)](n)) {
                    a0h[aR(0x282)](a0j[aR(0x292)](n, v));
                }
                a0h[aR(0x3a5)](n, {
                    'recursive': !![],
                    'force': !![]
                });
            }
            return {
                'status': 'ok',
                'path': a0j['relative'](a0E[aR(0x254)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aR(0x357)](j, k), {
            'status': 'ok',
            'path': a0j['relative'](a0E['FILE_ROOT'], j),
            'received': k[aR(0x255)],
            'total': k['length'],
            'chunked': ![]
        };
    }
    static async ['uploadFileRaw'](a, b, c, d = null, f = null) {
        const aS = a0T, g = {
                'cGYLd': 'Access\x20denied:\x20path\x20outside\x20root',
                'CYOoP': function (k, l) {
                    return k > l;
                },
                'pPPEG': function (k, l) {
                    return k(l);
                },
                'EtYJg': function (k, l) {
                    return k === l;
                },
                'iEqMk': function (k, l) {
                    return k < l;
                },
                'ufpEh': 'All\x20chunks\x20received.\x20File\x20merged\x20successfully.'
            }, h = a0j[aS(0x117)](a0E[aS(0x254)], a || '.');
        let j = h;
        b && (j = a0j['join'](h, b));
        if (!j[aS(0x2f3)](a0E[aS(0x254)]))
            throw new Error(g[aS(0x232)]);
        !a0h[aS(0x3e6)](a0j[aS(0x266)](j)) && a0h[aS(0x1e1)](a0j[aS(0x266)](j), { 'recursive': !![] });
        if (g[aS(0x2d0)](c[aS(0x255)], a0E[aS(0x2d5)]))
            throw new Error('File\x20too\x20large');
        if (d !== null && f !== null) {
            const k = g[aS(0x1d0)](Number, d), l = Number(f);
            if (Number['isNaN'](k) || Number[aS(0x24d)](l))
                throw new Error(aS(0x2a3));
            const m = a0j[aS(0x292)](a0j[aS(0x266)](j), '.upload_chunks', a0j[aS(0x3c9)](j));
            !a0h[aS(0x3e6)](m) && a0h[aS(0x1e1)](m, { 'recursive': !![] });
            const n = a0j[aS(0x292)](m, aS(0x40c) + k);
            a0h[aS(0x357)](n, c);
            const o = a0h['readdirSync'](m)[aS(0x34c)](r => r[aS(0x2f3)]('chunk_')), p = o[aS(0x255)], q = g[aS(0x290)](p, l);
            if (q) {
                const r = [];
                for (let s = 0x0; g[aS(0x414)](s, l); s++) {
                    const t = a0j['join'](m, aS(0x40c) + s);
                    if (!a0h['existsSync'](t))
                        throw new Error('Missing\x20chunk\x20' + s);
                    r[aS(0x1d8)](a0h[aS(0x3cb)](t));
                }
                a0h['writeFileSync'](j, Buffer[aS(0x106)](r));
                for (const u of a0h[aS(0x1f1)](m)) {
                    a0h[aS(0x282)](a0j[aS(0x292)](m, u));
                }
                return a0h[aS(0x3a5)](m, {
                    'recursive': !![],
                    'force': !![]
                }), {
                    'status': 'ok',
                    'path': a0j[aS(0x2e7)](a0E[aS(0x254)], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[aS(0x171)]
                };
            }
            return {
                'status': 'ok',
                'path': a0j['relative'](a0E[aS(0x254)], j),
                'chunk_id': k,
                'completed': ![],
                'message': aS(0x18d) + k + aS(0x191)
            };
        }
        return a0h[aS(0x357)](j, c), {
            'status': 'ok',
            'path': a0j[aS(0x2e7)](a0E[aS(0x254)], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': aS(0x37e)
        };
    }
    static async ['downloadFile'](a) {
        const aT = a0T, b = { 'LkrDX': aT(0x2f0) }, c = a0j[aT(0x117)](a0E[aT(0x254)], a);
        if (!c[aT(0x2f3)](a0E[aT(0x254)]))
            throw new Error(aT(0x384));
        if (!a0h['existsSync'](c))
            throw new Error(b[aT(0x25b)]);
        const d = a0h[aT(0x2e5)](c), f = a0h['readFileSync'](c), g = a0p[aT(0x43d)](f);
        return {
            'path': a0j['relative'](a0E[aT(0x254)], c),
            'content': g,
            'size': d[aT(0x17e)]
        };
    }
    static async [a0T(0x30b)](a) {
        const aU = a0T, b = {
                'KDahz': aU(0x415),
                'rtVfx': aU(0x236),
                'SNHAH': aU(0x17f)
            }, c = [];
        for (const d of a) {
            const f = a0j[aU(0x117)](a0E[aU(0x254)], d);
            if (!f[aU(0x2f3)](a0E[aU(0x254)])) {
                c[aU(0x1d8)]({
                    'path': d,
                    'status': aU(0x3a2)
                });
                continue;
            }
            try {
                if (a0h['existsSync'](f)) {
                    const g = a0h[aU(0x2e5)](f);
                    g[aU(0x382)]() ? a0h[aU(0x3a5)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0h[aU(0x282)](f), c[aU(0x1d8)]({
                        'path': d,
                        'status': b['KDahz']
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': b[aU(0x3a4)]
                    });
            } catch (h) {
                c[aU(0x1d8)]({
                    'path': d,
                    'status': b[aU(0x336)],
                    'message': h[aU(0x2c3)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x332)](a) {
        const aV = a0T, b = {
                'wESAl': 'access_denied',
                'jSRrn': aV(0x17f)
            }, c = [];
        for (const [d, f] of Object[aV(0x173)](a)) {
            const g = a0j[aV(0x117)](a0E['FILE_ROOT'], d), h = a0j[aV(0x117)](a0E[aV(0x254)], f);
            if (!g[aV(0x2f3)](a0E[aV(0x254)]) || !h[aV(0x2f3)](a0E[aV(0x254)])) {
                c[aV(0x1d8)]({
                    'from': d,
                    'to': f,
                    'status': b['wESAl']
                });
                continue;
            }
            try {
                const i = a0j[aV(0x266)](h);
                !a0h[aV(0x3e6)](i) && a0h[aV(0x1e1)](i, { 'recursive': !![] }), a0h[aV(0x2fb)](g, h), c[aV(0x1d8)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aV(0x1d8)]({
                    'from': d,
                    'to': f,
                    'status': b[aV(0x36d)],
                    'message': j[aV(0x2c3)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x170)](a) {
        const aW = a0T, b = {
                'wYHld': function (d, f, g) {
                    return d(f, g);
                },
                'iXGGa': aW(0x3a2),
                'yMxLL': aW(0x236),
                'xKLVB': aW(0x17f)
            }, c = [];
        for (const [d, f] of Object[aW(0x173)](a)) {
            const g = a0j[aW(0x117)](a0E[aW(0x254)], d), h = a0j[aW(0x117)](a0E['FILE_ROOT'], f);
            if (!g[aW(0x2f3)](a0E['FILE_ROOT']) || !h['startsWith'](a0E[aW(0x254)])) {
                c[aW(0x1d8)]({
                    'from': d,
                    'to': f,
                    'status': b['iXGGa']
                });
                continue;
            }
            try {
                if (!a0h[aW(0x3e6)](g)) {
                    c[aW(0x1d8)]({
                        'from': d,
                        'to': f,
                        'status': b[aW(0x370)]
                    });
                    continue;
                }
                const i = a0j[aW(0x266)](h);
                !a0h[aW(0x3e6)](i) && a0h[aW(0x1e1)](i, { 'recursive': !![] });
                const j = a0h['statSync'](g);
                if (j['isDirectory']()) {
                    if (a0h['cpSync'])
                        a0h[aW(0x209)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aX = aW;
                            if (a0h[aX(0x2e5)](l)[aX(0x382)]()) {
                                if (!a0h['existsSync'](m))
                                    a0h[aX(0x1e1)](m, { 'recursive': !![] });
                                for (const n of a0h[aX(0x1f1)](l)) {
                                    b[aX(0x102)](k, a0j[aX(0x292)](l, n), a0j[aX(0x292)](m, n));
                                }
                            } else
                                a0h[aX(0x2fe)](l, m);
                        };
                        k(g, h);
                    }
                } else
                    a0h[aW(0x2fe)](g, h);
                c[aW(0x1d8)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aW(0x1d8)]({
                    'from': d,
                    'to': f,
                    'status': b[aW(0x25d)],
                    'message': l[aW(0x2c3)]
                });
            }
        }
        return c;
    }
    static async ['createDirectory'](a) {
        const aY = a0T, b = a0j[aY(0x117)](a0E[aY(0x254)], a);
        if (!b['startsWith'](a0E[aY(0x254)]))
            throw new Error(aY(0x384));
        return a0h['mkdirSync'](b, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j[aY(0x2e7)](a0E[aY(0x254)], b)
        };
    }
}
class a0K {
    static [a0T(0x104)] = new Map();
    static [a0T(0x3b2)](a, b) {
        const aZ = a0T, c = {
                'adJTW': function (d, f) {
                    return d - f;
                }
            };
        a[aZ(0x1d8)](b), a[aZ(0x255)] > a0E[aZ(0x2ba)] && a[aZ(0x149)](0x0, c[aZ(0x1dd)](a[aZ(0x255)], a0E[aZ(0x2ba)]));
    }
    static [a0T(0x1b6)](a, b, c, d, f = null) {
        const b0 = a0T, g = new Date()['toISOString']();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + b0(0x161) + a + b0(0x1c8) + c + '\x0a' + (b?.[b0(0x2d4)]() || '')
        };
    }
    static [a0T(0x21a)]() {
        const b1 = a0T;
        return {
            'status': 'ok',
            'count': a0E[b1(0x404)][b1(0x255)],
            'tasks': a0E[b1(0x404)]
        };
    }
    static async [a0T(0x3cd)](a) {
        const b2 = a0T, b = {
                'mVcci': function (d, f) {
                    return d < f;
                },
                'vwSuu': 'onetime',
                'XEnGG': function (d, f) {
                    return d === f;
                },
                'BIgEh': b2(0x17f)
            };
        a0E[b2(0x404)] = a || [], a0E['InitTask'] = !![];
        const c = [];
        for (let d = 0x0; b[b2(0x115)](d, a0E['onetasks'][b2(0x255)]); d++) {
            const f = a0E[b2(0x404)][d], g = await a0I['execute'](f), h = this[b2(0x1b6)](f, g[b2(0x3bd)], g[b2(0x3c5)], b[b2(0x326)]);
            this[b2(0x3b2)](a0E[b2(0x3a3)], h), c[b2(0x1d8)]({
                'index': d,
                'cmd': f,
                'exitcode': g[b2(0x3c5)],
                'output': g[b2(0x3bd)],
                'status': b[b2(0x1b0)](g[b2(0x3c5)], 0x0) ? 'ok' : b['BIgEh']
            });
        }
        return a0E['InitTask'] = ![], {
            'status': 'ok',
            'count': a0E[b2(0x404)][b2(0x255)],
            'tasks': a0E['onetasks'],
            'executed': c
        };
    }
    static ['getCronTasks']() {
        const b3 = a0T;
        return {
            'status': 'ok',
            'count': Object[b3(0x2fa)](a0E['crontasks'])[b3(0x255)],
            'tasks': a0E[b3(0x369)]
        };
    }
    static ['setCronTasks'](a) {
        const b4 = a0T, b = {
                'uSpEc': function (d, f) {
                    return d === f;
                },
                'biSAd': b4(0x30a),
                'pIQpt': function (d, f) {
                    return d === f;
                },
                'vGrbD': b4(0x436),
                'fVUow': function (d, f) {
                    return d || f;
                },
                'VfPgT': 'error',
                'UEPAM': function (d, f) {
                    return d - f;
                },
                'WLTBa': function (d, f) {
                    return d || f;
                },
                'mskub': function (d, f) {
                    return d > f;
                }
            };
        this[b4(0x104)][b4(0x10c)](d => {
            const b5 = b4;
            b['uSpEc'](typeof d[b5(0x405)], b[b5(0x2c7)]) && d[b5(0x405)](), b[b5(0x413)](typeof d[b5(0x41c)], 'function') && d[b5(0x41c)]();
        }), this[b4(0x104)][b4(0x1ae)]();
        const c = [];
        for (const d of Object[b4(0x2fa)](b[b4(0x319)](a, {}))) {
            !a0m[b4(0x1c6)](d) && c['push'](d);
        }
        if (c['length'] > 0x0)
            return {
                'status': b[b4(0x400)],
                'message': 'Invalid\x20cron\x20expressions:\x20' + c['join'](',\x20'),
                'valid_count': b[b4(0x3c6)](Object[b4(0x2fa)](b[b4(0x36c)](a, {}))[b4(0x255)], c[b4(0x255)])
            };
        a0E[b4(0x369)] = b[b4(0x319)](a, {});
        for (const [f, g] of Object[b4(0x173)](a0E[b4(0x369)])) {
            const h = a0m[b4(0x345)](f, async () => {
                const b6 = b4, i = await a0I['execute'](g), j = this[b6(0x1b6)](g, i[b6(0x3bd)], i[b6(0x3c5)], b['vGrbD'], f);
                this[b6(0x3b2)](a0E['crontasks_log'], j);
            });
            this['cronJobs']['set'](f, h);
        }
        return a0E['cronloop'] = b['mskub'](Object[b4(0x2fa)](a0E[b4(0x369)])[b4(0x255)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0E['crontasks'])['length'],
            'tasks': a0E[b4(0x369)]
        };
    }
    static [a0T(0x29a)]() {
        const b7 = a0T;
        return {
            'onetime': {
                'pending': a0E[b7(0x31f)],
                'count': a0E[b7(0x404)][b7(0x255)]
            },
            'cron': {
                'active': a0E[b7(0x393)],
                'count': Object[b7(0x2fa)](a0E[b7(0x369)])['length'],
                'check_interval': a0E[b7(0x257)]
            }
        };
    }
    static [a0T(0x2ed)](a = 0x32) {
        const b8 = a0T, b = a0E[b8(0x3a3)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[b8(0x255)],
            'logs': b
        };
    }
    static [a0T(0x3b6)](a = 0x32) {
        const b9 = a0T, b = a0E['crontasks_log'][b9(0x422)](-a);
        return {
            'status': 'ok',
            'count': b[b9(0x255)],
            'logs': b
        };
    }
    static [a0T(0x3c4)]() {
        const ba = a0T, a = a0E['onetimetasks_log'][ba(0x255)];
        return a0E[ba(0x3a3)] = [], {
            'status': 'ok',
            'cleared': ba(0x2b3)
        };
    }
    static [a0T(0x192)]() {
        const bb = a0T, a = { 'ztVIK': bb(0x436) }, b = a0E[bb(0x1d2)][bb(0x255)];
        return a0E[bb(0x1d2)] = [], {
            'status': 'ok',
            'cleared': a['ztVIK']
        };
    }
    static ['getLogSummary']() {
        const bc = a0T, a = {
                'IsCAN': function (g, h) {
                    return g - h;
                }
            }, b = a0E[bc(0x3a3)]['filter'](g => g['exitcode'] === 0x0)[bc(0x255)], c = a[bc(0x38a)](a0E[bc(0x3a3)]['length'], b), d = a0E['crontasks_log'][bc(0x34c)](g => g['exitcode'] === 0x0)['length'], f = a0E['crontasks_log'][bc(0x255)] - d;
        return {
            'onetime': {
                'total_logged': a0E[bc(0x3a3)][bc(0x255)],
                'max_capacity': a0E[bc(0x2ba)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0E[bc(0x1d2)]['length'],
                'max_capacity': a0E[bc(0x2ba)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async ['executeOnetimeTasks']() {
        const bd = a0T, a = {
                'lWvgA': function (c, d) {
                    return c < d;
                },
                'aJWIo': 'onetime'
            }, b = [];
        for (let c = 0x0; a['lWvgA'](c, a0E['onetasks'][bd(0x255)]); c++) {
            const d = a0E[bd(0x404)][c], f = await a0I['execute'](d), g = this[bd(0x1b6)](d, f[bd(0x3bd)], f['exitcode'], a['aJWIo']);
            this['_appendLog'](a0E[bd(0x3a3)], g), b['push']({
                'cmd': d,
                'exitcode': f[bd(0x3c5)],
                'output': f[bd(0x3bd)],
                'timeout': f[bd(0x41d)]
            });
        }
        return a0E[bd(0x31f)] = ![], {
            'status': 'ok',
            'executed': b[bd(0x255)],
            'results': b
        };
    }
}
let a0L = null, a0M = null;
const a0N = new Promise((a, b) => {
    const be = a0T, c = {
            'CJafd': be(0x28b),
            'Tghkp': be(0x110),
            'niPtD': function (d) {
                return d();
            },
            'lrdhd': function (d, f) {
                return d(f);
            },
            'sDuwE': be(0x167)
        };
    try {
        c[be(0x1ef)](a0r, function (d) {
            const bf = be;
            if (!d) {
                a0M = new Error(c[bf(0x112)]), a0u[bf(0x39d)](c[bf(0x13c)], a0M['message']), a();
                return;
            }
            a0L = d, a0u['debug'](bf(0x204)), c[bf(0x10d)](a);
        });
    } catch (d) {
        a0M = d, a0u[be(0x39d)](c[be(0x3cc)], d[be(0x2c3)]), a();
    }
});
process['on'](a0T(0x339), (a, b) => {
    const bg = a0T, c = { 'OFGNF': bg(0x2a0) };
    a0u[bg(0x17f)](c['OFGNF'], a);
}), process['on'](a0T(0x243), a => {
    const bh = a0T, b = { 'hmtLF': bh(0x3c1) };
    a0u[bh(0x17f)](b[bh(0x276)], a), process['exit'](0x1);
});
class a0O {
    constructor(a, b, c) {
        const bi = a0T, d = { 'kkKYS': bi(0x389) }, f = d[bi(0x32b)][bi(0x10a)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[bi(0x264)] = b;
                continue;
            case '1':
                this['sendCipher'] = null;
                continue;
            case '2':
                this[bi(0x142)] = null;
                continue;
            case '3':
                this[bi(0x268)] = ![];
                continue;
            case '4':
                this[bi(0x208)] = a;
                continue;
            case '5':
                this[bi(0x278)] = c;
                continue;
            case '6':
                this['hs'] = null;
                continue;
            }
            break;
        }
    }
    async [a0T(0x23f)]() {
        const bj = a0T, a = {
                'FvjYY': bj(0x2a7),
                'zgPtq': bj(0x201),
                'wPemB': bj(0x37c),
                'RDJvk': bj(0x1e0)
            };
        await a0N;
        if (!a0L)
            throw a0M || new Error(a[bj(0x3d4)]);
        const b = a0L, c = this[bj(0x208)] ? b[bj(0x378)][bj(0x133)] : b[bj(0x378)][bj(0x190)];
        this['hs'] = b[bj(0x123)](a['zgPtq'], c);
        const d = Buffer[bj(0x3fa)](a[bj(0x1bd)]), f = this['localPrivB64'] ? Buffer[bj(0x3fa)](this[bj(0x264)], a[bj(0x2b8)]) : null, g = this[bj(0x278)] ? Buffer[bj(0x3fa)](this['expectedRemotePubB64'], a[bj(0x2b8)]) : null;
        this['hs'][bj(0x238)](d, f, g, null);
    }
    ['processHandshake'](a) {
        const bk = a0T, b = {
                'TVORr': function (d, f) {
                    return d > f;
                },
                'qMWmj': function (d, f) {
                    return d === f;
                },
                'GBQFQ': function (d, f) {
                    return d === f;
                },
                'mDenY': function (d, f) {
                    return d === f;
                }
            };
        if (this[bk(0x268)])
            return Buffer['alloc'](0x0);
        const c = a0L;
        a && b[bk(0x42b)](a[bk(0x255)], 0x0) && this['hs'][bk(0x248)]() === c['constants'][bk(0x3ff)] && this['hs']['ReadMessage'](a);
        if (b[bk(0x35d)](this['hs'][bk(0x248)](), c['constants'][bk(0x185)]))
            return this[bk(0x38e)](), Buffer[bk(0x409)](0x0);
        if (b[bk(0x287)](this['hs'][bk(0x248)](), c[bk(0x378)][bk(0x258)])) {
            const d = this['hs']['WriteMessage'](new Uint8Array(0x0));
            return b[bk(0x32f)](this['hs'][bk(0x248)](), c[bk(0x378)][bk(0x185)]) && this[bk(0x38e)](), Buffer['from'](d);
        }
        return Buffer[bk(0x409)](0x0);
    }
    ['_splitAndFinish']() {
        const bl = a0T, a = this['hs'][bl(0x1fd)]();
        this['sendCipher'] = a[0x0], this['recvCipher'] = a[0x1], this[bl(0x268)] = !![];
        try {
            if (this['hs'])
                this['hs'][bl(0x2b5)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0T(0x412)](a) {
        const bm = a0T, b = { 'pyYUv': bm(0x1c7) };
        if (!this[bm(0x268)])
            throw new Error(b[bm(0x1a0)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bm(0x3fa)](this[bm(0x126)]['EncryptWithAd'](c, d));
    }
    [a0T(0x1b3)](a) {
        const bn = a0T, b = { 'CXlzq': bn(0x165) };
        if (!this[bn(0x268)])
            throw new Error(b['CXlzq']);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bn(0x3fa)](this['recvCipher'][bn(0x155)](c, d));
    }
    ['free']() {
        const bo = a0T, a = { 'Radou': bo(0x284) }, b = a[bo(0x360)][bo(0x10a)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['hs'] = null;
                continue;
            case '1':
                this['recvCipher'] = null;
                continue;
            case '2':
                try {
                    if (this['hs'])
                        this['hs'][bo(0x2b5)]();
                } catch (d) {
                }
                continue;
            case '3':
                this['sendCipher'] = null;
                continue;
            case '4':
                try {
                    if (this[bo(0x142)])
                        this[bo(0x142)][bo(0x2b5)]();
                } catch (f) {
                }
                continue;
            case '5':
                try {
                    if (this[bo(0x126)])
                        this['sendCipher'][bo(0x2b5)]();
                } catch (g) {
                }
                continue;
            }
            break;
        }
    }
}
class a0P {
    constructor() {
        const bp = a0T, a = { 'pooeZ': 'handshake' }, b = bp(0x304)['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[bp(0x41f)] = a[bp(0x419)];
                continue;
            case '1':
                this[bp(0x354)] = null;
                continue;
            case '2':
                this[bp(0x154)] = new a0O(![], this[bp(0x34d)], this['CONTROL_PUBLIC_KEY']);
                continue;
            case '3':
                this[bp(0x3a0)] = !![];
                continue;
            case '4':
                this['CONTROL_PUBLIC_KEY'] = a0E[bp(0x163)][bp(0x168)]['public_b64'];
                continue;
            case '5':
                this['AGENT_PRIVATE_KEY'] = a0E[bp(0x163)][bp(0x158)]['private_b64'];
                continue;
            case '6':
                this['msgQueue'] = [];
                continue;
            case '7':
                this[bp(0x1a8)] = null;
                continue;
            case '8':
                this[bp(0x3d6)] = [];
                continue;
            case '9':
                this[bp(0x187)] = null;
                continue;
            }
            break;
        }
    }
    async [a0T(0x20c)]() {
        const bq = a0T, a = {
                'evnon': function (b, c) {
                    return b === c;
                },
                'dXehY': 'Cleanly\x20closed'
            };
        this[bq(0x187)] && a0u[bq(0x3c8)]('[' + this[bq(0x187)] + bq(0x253));
        if (this['ptyProcess']) {
            try {
                this['ptyProcess'][bq(0x34a)]();
            } catch (b) {
            }
            this[bq(0x354)] = null;
        }
        if (this[bq(0x154)])
            this[bq(0x154)]['free']();
        if (this[bq(0x1a8)])
            try {
                a[bq(0x13a)](this[bq(0x1a8)][bq(0x408)], this[bq(0x1a8)]['OPEN']) && this[bq(0x1a8)][bq(0x2fd)](0x3e8, a[bq(0x2a1)]);
            } catch (c) {
            } finally {
                this['websocket'] = null;
            }
    }
    [a0T(0x2c0)](a) {
        const br = a0T, b = {
                'YBZTK': br(0x19c),
                'oyTxB': function (c, d) {
                    return c > d;
                },
                'WoTjD': function (c, d) {
                    return c(d);
                },
                'ZKpDG': function (c, d) {
                    return c === d;
                },
                'CurNX': 'terminal'
            };
        if (this['phase'] === b[br(0x138)]) {
            if (b['oyTxB'](this[br(0x3d6)][br(0x255)], 0x0)) {
                const c = this[br(0x3d6)][br(0x15d)]();
                b['WoTjD'](c, a);
            } else
                this[br(0x1be)][br(0x1d8)](a);
        } else
            b['ZKpDG'](this[br(0x41f)], b['CurNX']) && this[br(0x410)](a);
    }
    async [a0T(0x1e5)]() {
        const bs = a0T, a = {
                'ZMaPl': function (b, c) {
                    return b > c;
                }
            };
        if (a[bs(0x180)](this[bs(0x1be)][bs(0x255)], 0x0))
            return this['msgQueue'][bs(0x15d)]();
        return new Promise(b => {
            const bt = bs;
            this[bt(0x3d6)][bt(0x1d8)](b);
        });
    }
    async [a0T(0x33f)](a) {
        const bu = a0T, b = {
                'BzTVc': function (c, d) {
                    return c(d);
                },
                'AYsgh': '🤝\x20开始\x20Noise\x20加密握手...',
                'epXJA': function (c, d) {
                    return c > d;
                },
                'elNkL': bu(0x3a1),
                'gQfYz': bu(0x425)
            };
        b[bu(0x364)](a, b[bu(0x3d5)]);
        try {
            await this[bu(0x154)]['init']();
            const c = await this['_receiveWsBytes'](), d = this['cipher'][bu(0x296)](c);
            d && b['epXJA'](d['length'], 0x0) && this[bu(0x1a8)]['send'](d);
            const f = await this['_receiveWsBytes']();
            this[bu(0x154)][bu(0x296)](f);
            if (!this['cipher'][bu(0x268)])
                throw new Error(b[bu(0x297)]);
            b[bu(0x364)](a, bu(0x347));
        } catch (g) {
            a('💥\x20握手失败详情:\x20' + g[bu(0x2c3)]);
            throw new Error(b[bu(0x1f5)]);
        }
    }
    [a0T(0x428)]() {
        const bv = a0T, a = {
                'qUjrI': bv(0x274),
                'LWZgd': bv(0x144),
                'UZKlR': bv(0x16c)
            }, b = [
                a['qUjrI'],
                '/bin/zsh',
                a[bv(0x246)]
            ];
        for (const d of b) {
            if (a0h[bv(0x3e6)](d))
                return d;
        }
        const c = process.env.SHELL;
        if (c && a0h[bv(0x3e6)](c))
            return c;
        return a[bv(0x113)];
    }
    async [a0T(0x1a4)](a, b, c) {
        const bw = a0T, d = {
                'NFYZN': function (g, h) {
                    return g(h);
                },
                'YbTLE': bw(0x122),
                'DbapG': '🔐\x20检测到\x20Token，视为\x20WSS\x20链路，跳过\x20Noise',
                'sfieC': bw(0x2c3)
            };
        this[bw(0x1a8)] = a, this[bw(0x187)] = b;
        const f = g => a0u[bw(0x3c8)](bw(0x2ec) + b + ']\x20' + g);
        this[bw(0x3a0)] = !c, d['NFYZN'](f, this[bw(0x3a0)] ? d[bw(0x176)] : d[bw(0x427)]), a['on'](d[bw(0x1c4)], g => this[bw(0x2c0)](g));
        try {
            this[bw(0x3a0)] && await this['_doNoiseHandshake'](f), await this['_runTerminal'](f);
        } catch (g) {
            f(bw(0x1cb) + g[bw(0x2c3)]), await this[bw(0x20c)]();
        }
    }
    async [a0T(0x101)](a) {
        const bx = a0T, b = {
                'VOQWQ': bx(0x323),
                'VIfva': function (f, g) {
                    return f(g);
                },
                'xnFos': bx(0x228),
                'iJnbv': function (f, g) {
                    return f(g);
                },
                'mEvjX': bx(0x317),
                'eSEHq': bx(0x3da),
                'rceKx': bx(0x40d),
                'uqAHP': function (f, g) {
                    return f > g;
                },
                'aIjOr': bx(0x2fd),
                'hpiNr': function (f, g) {
                    return f(g);
                }
            }, c = this[bx(0x428)]();
        b['iJnbv'](a, bx(0x39b) + c);
        const d = Object[bx(0x237)]({}, process.env);
        delete d[bx(0x22e)], d['TERM'] = b[bx(0x344)];
        if (!d['LANG'])
            d[bx(0x371)] = b[bx(0x430)];
        try {
            this[bx(0x354)] = a0t[bx(0x2f5)](c, [], {
                'name': b[bx(0x344)],
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process[bx(0x346)](),
                'env': d
            }), b[bx(0x33c)](a, bx(0x1d3) + (this['ptyProcess'][bx(0x2a9)] || bx(0x251)) + ')'), this[bx(0x41f)] = b['rceKx'];
            while (b[bx(0x42f)](this[bx(0x1be)][bx(0x255)], 0x0)) {
                const f = this[bx(0x1be)][bx(0x15d)]();
                this[bx(0x410)](f);
            }
            this[bx(0x354)][bx(0x280)](g => {
                const by = bx;
                try {
                    let h = Buffer[by(0x3fa)](g, b['VOQWQ']);
                    this['useNoise'] && this[by(0x154)] && this[by(0x154)][by(0x268)] && (h = this[by(0x154)]['encrypt'](h)), this[by(0x1a8)][by(0x408)] === 0x1 && this[by(0x1a8)]['send'](h);
                } catch (i) {
                }
            }), this['ptyProcess']['onExit'](({
                exitCode: g,
                signal: h
            }) => {
                const bz = bx;
                a(bz(0x39c) + g + bz(0x184) + h + ')'), this[bz(0x20c)]();
            }), this[bx(0x1a8)]['on'](b[bx(0x17c)], () => {
                const bA = bx;
                b[bA(0x3b0)](a, b[bA(0x162)]), this[bA(0x20c)]();
            });
        } catch (g) {
            b[bx(0x30c)](a, bx(0x376) + g['message']), await this['cleanup']();
            throw g;
        }
    }
    [a0T(0x410)](a) {
        const bB = a0T, b = {
                'hCRut': function (c, d) {
                    return c === d;
                },
                'WwrRE': bB(0x359),
                'YGEVs': function (c, d) {
                    return c === d;
                },
                'BnbFW': bB(0x1da),
                'BFffm': 'input',
                'JrQvj': function (c, d) {
                    return c === d;
                },
                'oVreX': bB(0x1e0),
                'AuLuE': bB(0x323)
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer[bB(0x3fa)](a);
            let d;
            this[bB(0x3a0)] ? d = this[bB(0x154)]['decrypt'](c) : d = c;
            let f = ![], g = d[bB(0x14a)](bB(0x323));
            if (g[bB(0x2d4)]()[bB(0x2f3)]('{'))
                try {
                    const h = JSON[bB(0x32d)](g);
                    f = !![];
                    if (b[bB(0x262)](h[bB(0x28e)], bB(0x359))) {
                        let i = Buffer[bB(0x3fa)](JSON[bB(0x199)]({ 'type': b[bB(0x14d)] }));
                        if (this[bB(0x3a0)])
                            i = this[bB(0x154)][bB(0x412)](i);
                        this[bB(0x1a8)]['send'](i);
                        return;
                    }
                    if (b[bB(0x234)](h[bB(0x28e)], b['BnbFW'])) {
                        this[bB(0x354)][bB(0x1da)](h[bB(0x203)] || 0x50, h['rows'] || 0x18);
                        return;
                    }
                    if (b[bB(0x262)](h['type'], b[bB(0x379)]) && h[bB(0x330)] !== undefined) {
                        let j = b[bB(0x2ca)](h[bB(0x3a7)], b[bB(0x2e4)]) ? Buffer[bB(0x3fa)](h['data'], b['oVreX'])[bB(0x14a)](b[bB(0x372)]) : h[bB(0x330)];
                        this[bB(0x354)][bB(0x1a9)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[bB(0x354)][bB(0x1a9)](d[bB(0x14a)](b[bB(0x372)]));
        } catch (l) {
            a0u['info'](bB(0x2ec) + this[bB(0x187)] + bB(0x40a) + l['message']);
            if (this[bB(0x3a0)])
                this[bB(0x20c)]();
        }
    }
}
async function a0Q(a = {}) {
    const bC = a0T, b = {
            'YTfcX': bC(0x16a),
            'LMFzm': bC(0x1ca),
            'BuFrw': bC(0x188),
            'TToYc': bC(0x3a6),
            'srwSf': bC(0x13e),
            'QKAXw': function (c, d) {
                return c === d;
            },
            'AGEVY': bC(0x298),
            'eaoiZ': function (c) {
                return c();
            },
            'lWeed': bC(0x1c2),
            'VfIaW': function (c, d) {
                return c / d;
            },
            'zmPck': function (c, d) {
                return c > d;
            },
            'PpGYo': function (c, d) {
                return c - d;
            },
            'oedeF': bC(0x27b),
            'fWhIv': function (c, d) {
                return c === d;
            },
            'QDDcw': function (c, d) {
                return c / d;
            },
            'iuoUX': bC(0x13d),
            'AOSRN': function (c, d) {
                return c / d;
            },
            'QIWBX': function (c, d) {
                return c > d;
            },
            'uMeis': 'error',
            'mQFZm': function (c, d) {
                return c === d;
            },
            'iHVxS': bC(0x429),
            'WNbDF': bC(0x3db),
            'LcRvu': 'cmd\x20required',
            'peDmm': function (c, d) {
                return c === d;
            },
            'EIWwU': 'x-file-path',
            'nMUDw': function (c, d) {
                return c(d);
            },
            'wWuNX': bC(0x392),
            'fKYJe': bC(0x42d),
            'wJLss': bC(0x3fc),
            'YKESM': function (c, d) {
                return c || d;
            },
            'kQrmw': bC(0x3df),
            'qfvNA': function (c, d) {
                return c !== d;
            },
            'LsIJq': function (c, d, f) {
                return c(d, f);
            },
            'DLDOi': function (c, d) {
                return c(d);
            },
            'qdNJA': bC(0x105),
            'pYyEW': 'x-original-path',
            'SsMlQ': bC(0x324),
            'sZFSi': function (c, d, f) {
                return c(d, f);
            },
            'gGwTL': function (c, d, f) {
                return c(d, f);
            },
            'geMOc': bC(0x218),
            'aVbOg': bC(0x417),
            'YKOwm': bC(0x216),
            'GlzMr': bC(0x315),
            'MpgPZ': bC(0x172),
            'OOqzP': bC(0x361),
            'SoPIl': bC(0x130),
            'Glcqd': 'Initializing\x20CryptoManager...',
            'axgqc': bC(0x1b5),
            'vtpev': 'Initializing\x20SystemInfoCollector...',
            'dKXJV': bC(0x322),
            'hqhgF': function (c, d) {
                return c(d);
            },
            'DQHvV': bC(0x3d7),
            'qmHgs': bC(0x2a2),
            'KzraO': bC(0x12e),
            'ALIBC': '/api/status',
            'cjudN': bC(0x3bb),
            'URjBg': bC(0x1c3),
            'eRlhw': bC(0x32e),
            'XqNQv': bC(0x41e),
            'yOKDG': '/api/fileraw',
            'iOlvs': bC(0x250),
            'sHuxt': bC(0x18c),
            'iCvwO': '/api/file',
            'UCVfO': bC(0x118),
            'exoxS': bC(0x349),
            'hjtUF': '/api/task/onetime',
            'MEETa': '/api/task/cron',
            'JdwfV': bC(0x40f),
            'CgYsE': bC(0x127),
            'AKDzh': '/api/task/log/onetime',
            'aDVsV': bC(0x11f),
            'nUILb': bC(0x431),
            'lBqkO': bC(0x1ac),
            'wzYTz': bC(0x210),
            'joMVX': 'SIGINT',
            'COjhf': bC(0x424),
            'uVCuj': bC(0x308)
        };
    try {
        const c = await import(b['GlzMr']);
        a0s = c[bC(0x134)], a0u['debug'](b[bC(0x265)]), a0E['merge'](a), a0u[bC(0x12c)](b[bC(0x1ce)]), a0E[bC(0x1c6)](), a0u[bC(0x12c)](b[bC(0x3ab)]), a0u['debug'](b['Glcqd']);
        const d = new a0F(a0E[bC(0x178)], a0E[bC(0x38b)]);
        a0u[bC(0x12c)](b['axgqc']), a0u[bC(0x12c)](b[bC(0x1b8)]);
        const f = new a0H();
        a0u[bC(0x12c)](b[bC(0x270)]), a0u['debug'](bC(0x202));
        const g = a0f();
        b['hqhgF'](a0q, g), a0u[bC(0x12c)](bC(0x160)), g['use']((i, j, k) => {
            const bD = bC;
            j[bD(0x22f)](b['YTfcX'], '*'), j[bD(0x22f)](b[bD(0x3aa)], 'GET,\x20POST,\x20PUT,\x20DELETE,\x20OPTIONS'), j[bD(0x22f)]('Access-Control-Allow-Headers', b['BuFrw']), j[bD(0x22f)](b['TToYc'], b[bD(0x3a9)]);
            if (b[bD(0x20b)](i[bD(0x108)], b[bD(0x103)]))
                return j[bD(0x27a)](0xc8)[bD(0x24e)]();
            b[bD(0x207)](k);
        }), g[bC(0x335)](a0f[bC(0x11b)]({
            'type': i => i['path'] !== '/api/fileraw',
            'limit': b[bC(0x18a)]
        })), g[bC(0x335)](a0f[bC(0x23b)]({ 'extended': !![] })), g[bC(0x335)](b['nMUDw'](a0G, d)), a0u[bC(0x12c)](b['qmHgs']), g[bC(0x25c)](b[bC(0x3ef)], async (i, j) => {
            const bE = bC, k = {
                    'wGlCF': b['lWeed'],
                    'nKdQx': function (l, m) {
                        return b['VfIaW'](l, m);
                    }
                };
            try {
                const l = Math['floor'](b[bE(0x1f2)](Date[bE(0x318)](), 0x3e8));
                !a0E[bE(0x3b7)] || b[bE(0x394)](b['PpGYo'](l, a0E['_baseinfo_cache_time']), a0E[bE(0x195)]) ? (!a0E[bE(0x331)] && (a0E[bE(0x331)] = f['getBasicInfo']()[bE(0x30f)](n => {
                    const bF = bE, o = k['wGlCF'][bF(0x10a)]('|');
                    let p = 0x0;
                    while (!![]) {
                        switch (o[p++]) {
                        case '0':
                            a0E[bF(0x3b7)] = n;
                            continue;
                        case '1':
                            return n;
                        case '2':
                            a0E['_baseinfo_fetch_promise'] = null;
                            continue;
                        case '3':
                            a0E[bF(0x391)] = Math[bF(0x225)](k[bF(0x32a)](Date[bF(0x318)](), 0x3e8));
                            continue;
                        case '4':
                            a0u['debug'](bF(0x14b));
                            continue;
                        }
                        break;
                    }
                })[bE(0x211)](n => {
                    const bG = bE;
                    a0E[bG(0x331)] = null;
                    throw n;
                })), await a0E[bE(0x331)]) : a0u[bE(0x12c)](b[bE(0x39f)]);
                const m = { ...a0E['_baseinfo_cache'] };
                b[bE(0x294)](i[bE(0x223)], ![]) ? (m[bE(0x1d7)] = null, m[bE(0x143)] = null) : (m[bE(0x1d7)] = a0E[bE(0x212)], m[bE(0x143)] = a0E['NOISE_KEY']), j['json'](m);
            } catch (n) {
                j['status'](0x1f4)[bE(0x186)]({
                    'status': bE(0x17f),
                    'message': n[bE(0x2c3)]
                });
            }
        }), g['get'](b[bC(0x2e3)], async (i, j) => {
            const bH = bC;
            try {
                const k = Math['floor'](b[bH(0x17d)](Date[bH(0x318)](), 0x3e8));
                !a0E[bH(0x1c5)] || b['QIWBX'](k - a0E['_status_cache_time'], a0E['STATUS_CACHE_TTL']) ? (!a0E[bH(0x438)] && (a0E[bH(0x438)] = f[bH(0x403)]()[bH(0x30f)](m => {
                    const bI = bH;
                    return a0E[bI(0x1c5)] = m, a0E[bI(0x1bc)] = Math[bI(0x225)](b['QDDcw'](Date[bI(0x318)](), 0x3e8)), a0E[bI(0x438)] = null, a0u[bI(0x12c)](b['iuoUX']), m;
                })['catch'](m => {
                    const bJ = bH;
                    a0E[bJ(0x438)] = null;
                    throw m;
                })), await a0E['_status_fetch_promise']) : a0u[bH(0x12c)](bH(0x2be));
                const l = { ...a0E[bH(0x1c5)] };
                j[bH(0x186)](l);
            } catch (m) {
                j['status'](0x1f4)[bH(0x186)]({
                    'status': b[bH(0x227)],
                    'message': m[bH(0x2c3)]
                });
            }
        }), g[bC(0x3fb)](b[bC(0x14c)], async (i, j) => {
            const bK = bC;
            try {
                let k = null;
                if (b[bK(0x140)](typeof i[bK(0x3b1)], b['iHVxS']))
                    k = i[bK(0x3b1)][bK(0x2d4)]();
                else
                    i[bK(0x3b1)] && b[bK(0x294)](typeof i[bK(0x3b1)], b[bK(0x1c0)]) && (k = i[bK(0x3b1)][bK(0x3ba)] || '');
                if (!k)
                    return j[bK(0x27a)](0x190)[bK(0x186)]({
                        'status': b[bK(0x227)],
                        'message': b[bK(0x289)]
                    });
                const l = await a0I[bK(0x3f3)](k, {
                    'cwd': i[bK(0x3b1)]['cwd'],
                    'env': i[bK(0x3b1)][bK(0x327)],
                    'timeout': a0E[bK(0x3b4)]
                });
                j[bK(0x186)](l);
            } catch (m) {
                j[bK(0x27a)](0x1f4)[bK(0x186)]({
                    'status': bK(0x17f),
                    'message': m['message']
                });
            }
        }), g[bC(0x3fb)](b[bC(0x3f2)], async (i, j) => {
            const bL = bC;
            try {
                const k = await a0J[bL(0x245)](i[bL(0x3b1)][bL(0x27f)], i[bL(0x3b1)][bL(0x15f)]);
                j[bL(0x186)]({
                    'status': 'ok',
                    'count': k[bL(0x255)],
                    'files': k
                });
            } catch (l) {
                j[bL(0x27a)](0x1f4)['json']({
                    'status': b[bL(0x227)],
                    'message': l['message']
                });
            }
        }), g['post'](b[bC(0x3de)], async (i, j) => {
            const bM = bC;
            try {
                const k = await a0J[bM(0x221)](i[bM(0x3b1)][bM(0x194)] || []);
                j['json']({
                    'status': 'ok',
                    'files': k
                });
            } catch (l) {
                j[bM(0x27a)](0x1f4)['json']({
                    'status': bM(0x17f),
                    'message': l[bM(0x2c3)]
                });
            }
        }), g[bC(0x3b3)](b['eRlhw'], async (i, j) => {
            const bN = bC;
            try {
                const k = i[bN(0x3b1)][bN(0x2c9)] || {}, l = b[bN(0x37a)](i[bN(0x3b1)][bN(0x15f)], !![]), m = await a0J[bN(0x42c)](k, l);
                j[bN(0x186)](m);
            } catch (n) {
                j[bN(0x27a)](0x1f4)['json']({
                    'status': bN(0x17f),
                    'message': n[bN(0x2c3)]
                });
            }
        }), g[bC(0x3fb)](b[bC(0x21e)], async (i, j) => {
            const bO = bC;
            try {
                const k = await a0J[bO(0x16f)](i[bO(0x3b1)][bO(0x27f)]);
                j[bO(0x186)](k);
            } catch (l) {
                j[bO(0x27a)](0x1f4)['json']({
                    'status': 'error',
                    'message': l['message']
                });
            }
        }), g[bC(0x3fb)]('/api/file', async (i, j) => {
            const bP = bC;
            try {
                const k = await a0J[bP(0x11e)](i[bP(0x3b1)]['path'], i[bP(0x3b1)][bP(0x260)], i[bP(0x3b1)][bP(0x19d)], i['body']['chunk_id'], i['body'][bP(0x295)]);
                j[bP(0x186)](k);
            } catch (l) {
                j['status'](0x1f4)[bP(0x186)]({
                    'status': b[bP(0x227)],
                    'message': l['message']
                });
            }
        }), g[bC(0x3fb)](b['yOKDG'], a0f[bC(0x31e)]({
            'type': b['iOlvs'],
            'limit': b['DQHvV']
        }), async (i, j) => {
            const bQ = bC;
            try {
                const k = decodeURIComponent(i['headers'][b['EIWwU']] || ''), l = b[bQ(0x169)](decodeURIComponent, i['headers'][b[bQ(0x189)]] || ''), m = i[bQ(0x3ea)][b[bQ(0x22d)]], n = i[bQ(0x3ea)][b[bQ(0x1d4)]];
                if (b[bQ(0x2c4)](!k, !l))
                    return j[bQ(0x27a)](0x190)[bQ(0x186)]({
                        'status': b['uMeis'],
                        'completed': ![],
                        'message': b[bQ(0x164)]
                    });
                const o = b[bQ(0x197)](m, undefined) ? b[bQ(0x1f6)](parseInt, b[bQ(0x169)](String, m), 0xa) : null, p = b[bQ(0x197)](n, undefined) ? b[bQ(0x1f6)](parseInt, b[bQ(0x28f)](String, n), 0xa) : null, q = i[bQ(0x3b1)];
                if (!Buffer[bQ(0x2dc)](q))
                    return j[bQ(0x27a)](0x190)[bQ(0x186)]({
                        'status': b['uMeis'],
                        'completed': ![],
                        'message': 'Invalid\x20binary\x20stream\x20request\x20body'
                    });
                const r = await a0J['uploadFileRaw'](k, l, q, o, p);
                j[bQ(0x186)](r);
            } catch (s) {
                j[bQ(0x27a)](0x1f4)['json']({
                    'status': b[bQ(0x227)],
                    'completed': ![],
                    'message': s['message']
                });
            }
        }), g[bC(0x3fb)](b[bC(0x21b)], async (i, j) => {
            const bR = bC;
            try {
                const k = await a0J['downloadFile'](i[bR(0x3b1)][bR(0x27f)]), l = Buffer['from'](k[bR(0x19d)], bR(0x1e0));
                return j[bR(0x116)](b[bR(0x316)], k[bR(0x17e)][bR(0x14a)]()), j['set'](b[bR(0x3f0)], k[bR(0x27f)]), j[bR(0x116)](b[bR(0x3f1)], bR(0x250)), j['send'](l);
            } catch (m) {
                j[bR(0x27a)](0x1f4)[bR(0x186)]({
                    'status': b[bR(0x227)],
                    'message': m[bR(0x2c3)]
                });
            }
        }), g['delete'](b[bC(0x2e8)], async (i, j) => {
            const bS = bC;
            try {
                let k = i['body'][bS(0x194)];
                if (!k || !Array[bS(0x1a3)](k)) {
                    k = [];
                    if (i['body']['path'])
                        k[bS(0x1d8)](i[bS(0x3b1)][bS(0x27f)]);
                    if (i[bS(0x3b1)][bS(0x2a8)])
                        k[bS(0x1d8)](i['body'][bS(0x2a8)]);
                }
                const l = await a0J[bS(0x30b)](k);
                j[bS(0x186)]({
                    'status': 'ok',
                    'results': l
                });
            } catch (m) {
                j[bS(0x27a)](0x1f4)[bS(0x186)]({
                    'status': b[bS(0x227)],
                    'message': m[bS(0x2c3)]
                });
            }
        }), g['put'](b['iCvwO'], async (i, j) => {
            const bT = bC;
            try {
                const k = await a0J[bT(0x332)](i[bT(0x3b1)]['move_map'] || i['body']);
                j[bT(0x186)]({
                    'status': 'ok',
                    'total': k[bT(0x255)],
                    'success': k['filter'](l => l[bT(0x27a)] === 'ok')['length'],
                    'results': k
                });
            } catch (l) {
                j[bT(0x27a)](0x1f4)[bT(0x186)]({
                    'status': b[bT(0x227)],
                    'message': l['message']
                });
            }
        }), g[bC(0x3fb)](b[bC(0x35a)], async (i, j) => {
            const bU = bC;
            try {
                const k = await a0J[bU(0x170)](i['body']);
                j[bU(0x186)]({
                    'status': 'ok',
                    'total': k[bU(0x255)],
                    'success': k[bU(0x34c)](l => l[bU(0x27a)] === 'ok')[bU(0x255)],
                    'results': k
                });
            } catch (l) {
                j['status'](0x1f4)[bU(0x186)]({
                    'status': bU(0x17f),
                    'message': l[bU(0x2c3)]
                });
            }
        }), g[bC(0x3fb)](b['exoxS'], async (i, j) => {
            const bV = bC;
            try {
                const k = await a0J[bV(0x1fa)](i['body']['path']);
                j['json'](k);
            } catch (l) {
                j[bV(0x27a)](0x1f4)['json']({
                    'status': bV(0x17f),
                    'message': l[bV(0x2c3)]
                });
            }
        }), g[bC(0x25c)](b[bC(0x39a)], (i, j) => {
            const bW = bC;
            j[bW(0x186)](a0K[bW(0x21a)]());
        }), g[bC(0x3fb)](b['hjtUF'], async (i, j) => {
            const bX = bC;
            try {
                const k = await a0K[bX(0x3cd)](i[bX(0x3b1)]);
                j[bX(0x186)](k);
            } catch (l) {
                j[bX(0x27a)](0x1f4)[bX(0x186)]({
                    'status': b[bX(0x227)],
                    'message': l[bX(0x2c3)]
                });
            }
        }), g['get'](bC(0x43e), (i, j) => {
            const bY = bC;
            j[bY(0x186)](a0K[bY(0x38f)]());
        }), g[bC(0x3fb)](b[bC(0x214)], (i, j) => {
            const bZ = bC;
            try {
                const k = a0K[bZ(0x416)](i[bZ(0x3b1)]);
                j['json'](k);
            } catch (l) {
                j[bZ(0x27a)](0x1f4)['json']({
                    'status': bZ(0x17f),
                    'message': l[bZ(0x2c3)]
                });
            }
        }), g[bC(0x25c)](b[bC(0x2cf)], (i, j) => {
            const c0 = bC;
            j[c0(0x186)](a0K['getTaskStatus']());
        }), g['get'](bC(0x24b), (i, j) => {
            const c1 = bC;
            let k = b[c1(0x25f)](parseInt, i[c1(0x213)][c1(0x193)], 0xa) || 0x32;
            k = Math[c1(0x368)](Math[c1(0x3d0)](k, 0x1), 0x64), j['json'](a0K[c1(0x2ed)](k));
        }), g[bC(0x25c)](b[bC(0x41b)], (i, j) => {
            const c2 = bC;
            let k = b[c2(0x145)](parseInt, i[c2(0x213)][c2(0x193)], 0xa) || 0x32;
            k = Math[c2(0x368)](Math['max'](k, 0x1), 0x64), j['json'](a0K[c2(0x3b6)](k));
        }), g[bC(0x13b)](b[bC(0x418)], (i, j) => {
            const c3 = bC;
            j[c3(0x186)](a0K[c3(0x3c4)]());
        }), g['delete'](b[bC(0x41b)], (i, j) => {
            j['json'](a0K['clearCronLogs']());
        }), g['get'](b[bC(0x239)], (i, j) => {
            const c4 = bC;
            j['json'](a0K[c4(0x1b2)]());
        }), g[bC(0x3fb)](bC(0x341), async (i, j) => {
            const c5 = bC;
            try {
                const k = await a0K[c5(0x177)]();
                j['json'](k);
            } catch (l) {
                j[c5(0x27a)](0x1f4)[c5(0x186)]({
                    'status': b[c5(0x227)],
                    'message': l['message']
                });
            }
        }), a0u[bC(0x12c)](b['nUILb']), g['ws'](b[bC(0x15b)], async (i, j) => {
            const c6 = bC, k = j[c6(0x13f)][0x0];
            a0u[c6(0x12c)](c6(0x383) + j[c6(0x1fb)]), a0u[c6(0x12c)](c6(0x205) + k);
            const l = j[c6(0x213)][c6(0x11a)], m = j[c6(0x213)]['token'];
            a0u[c6(0x12c)](c6(0x2a4) + l);
            if (!l) {
                a0u[c6(0x12c)](b[c6(0x1bb)]), i[c6(0x2fd)](0x3f0, c6(0x373));
                return;
            }
            const n = new a0P();
            await n['startSession'](i, l, m);
        }), a0u[bC(0x12c)](b[bC(0x3c0)]), a0u[bC(0x12c)]('Starting\x20HTTP\x20server...');
        const h = g['listen'](a0E[bC(0x235)], a0E[bC(0x26f)], () => {
            const c7 = bC;
            a0u[c7(0x12c)](c7(0x285) + a0E[c7(0x2b1)] + c7(0x15c) + a0E['HOST'] + ':' + a0E[c7(0x235)]), a0u['debug'](b[c7(0x363)]);
        });
        process['on'](b[bC(0x2ef)], () => {
            const c8 = bC;
            a0u['debug'](b[c8(0x1b1)]), h[c8(0x2fd)](), process[c8(0x43a)](0x0);
        }), a0u[bC(0x12c)](b['COjhf']);
    } catch (i) {
        a0u[bC(0x17f)](b[bC(0x2e9)], i), process[bC(0x43a)](0x1);
    }
}
(require[a0T(0x2c6)] === module || require[a0T(0x2c6)]?.[a0T(0x260)]?.['includes'](a0T(0x38d))) && a0Q()['catch'](a0u['error']);
module[a0T(0x200)] = {
    'main': a0Q,
    'Config': a0E,
    'CryptoManager': a0F,
    'SystemInfoCollector': a0H,
    'CommandExecutor': a0I,
    'FileManager': a0J,
    'TaskManager': a0K
};