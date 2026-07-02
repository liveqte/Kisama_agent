#!/usr/bin/env node
const a0T = a0b;
(function (a, b) {
    const S = a0b, c = a();
    while (!![]) {
        try {
            const d = parseInt(S(0x327)) / 0x1 * (parseInt(S(0x2e1)) / 0x2) + -parseInt(S(0x195)) / 0x3 + parseInt(S(0x3a2)) / 0x4 * (-parseInt(S(0xed)) / 0x5) + -parseInt(S(0x1d3)) / 0x6 * (parseInt(S(0xe5)) / 0x7) + parseInt(S(0x203)) / 0x8 * (parseInt(S(0xec)) / 0x9) + parseInt(S(0x12a)) / 0xa * (parseInt(S(0x1c9)) / 0xb) + parseInt(S(0x285)) / 0xc;
            if (d === b)
                break;
            else
                c['push'](c['shift']());
        } catch (f) {
            c['push'](c['shift']());
        }
    }
}(a0a, 0xb68a8));
function a0b(a, b) {
    a = a - 0x9c;
    const c = a0a();
    let d = c[a];
    if (a0b['gBEBra'] === undefined) {
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
        a0b['FoCDfm'] = e, a0b['cSBKcc'] = {}, a0b['gBEBra'] = !![];
    }
    const f = c[0x0], g = a + f, h = a0b['cSBKcc'][g];
    return !h ? (d = a0b['FoCDfm'](d), a0b['cSBKcc'][g] = d) : d = h, d;
}
const a0c = [
    'wasm\x20streaming\x20compile\x20failed',
    a0T(0x215),
    'falling\x20back\x20to\x20ArrayBuffer\x20instantiation'
];
function a0d(a) {
    const U = a0T, b = {
            'iYBrY': function (c, d) {
                return c === d;
            },
            'IiJut': U(0x338)
        };
    return function (c, d, f) {
        const V = U, g = c[V(0x2d5)]();
        if (a0c[V(0x28c)](h => g[V(0x270)](h))) {
            if (b[V(0x351)](typeof f, b[V(0xa7)]))
                f();
            return !![];
        }
        return a[V(0x167)](this, arguments);
    };
}
process[a0T(0x277)][a0T(0x216)] = a0d(process[a0T(0x277)]['write']), process[a0T(0x34e)][a0T(0x216)] = a0d(process['stderr'][a0T(0x216)]);
const a0f = require(a0T(0x333)), a0g = require(a0T(0x346)), a0h = require('fs'), a0i = require('fs')['promises'], a0j = require(a0T(0xa6)), a0k = require('os'), {exec: a0l} = require('child_process'), a0m = require('node-cron'), a0n = require(a0T(0x117)), {encrypt: a0o} = require('eciesjs'), a0p = require(a0T(0x1cf)), a0q = require('express-ws'), a0r = require(a0T(0x228));
let a0s, a0t;
try {
    typeof Bun !== 'undefined' ? a0t = require(a0T(0x2a3)) : a0t = require(a0T(0x183));
} catch (a0R) {
    console[a0T(0x13b)](a0T(0x3aa)), console[a0T(0x13b)](a0T(0x350) + a0R['message']), console[a0T(0x13b)](a0T(0x318)), process[a0T(0x3a0)](0x1);
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
                'PCFck': W(0x30a),
                'PySWJ': function (b, c) {
                    return b !== c;
                }
            };
        return typeof a0E !== a['PCFck'] && a[W(0x39b)](a0E[W(0xe4)], undefined) ? a0E['LOG_LEVEL'] : 0x2;
    },
    'debug': a => {
        const X = a0T, b = {
                'BhrLw': function (c, d) {
                    return c <= d;
                }
            };
        b['BhrLw'](a0u[X(0x310)], a0u[X(0x34d)][X(0x1cc)]) && console[X(0x256)](X(0x16e) + a);
    },
    'info': a => {
        const Y = a0T, b = {
                'OZtcn': function (c, d) {
                    return c <= d;
                }
            };
        b[Y(0x352)](a0u[Y(0x310)], a0u[Y(0x34d)][Y(0x131)]) && console[Y(0x256)]('\x1b[36m[INFO]\x1b[0m\x20' + a);
    },
    'warn': a => {
        const Z = a0T;
        a0u['currentLevel'] <= a0u[Z(0x34d)][Z(0x345)] && console[Z(0x256)](Z(0x1a6) + a);
    },
    'error': a => {
        const a0 = a0T, b = {
                'gPtRW': function (c, d) {
                    return c <= d;
                }
            };
        b[a0(0x233)](a0u[a0(0x310)], a0u[a0(0x34d)][a0(0x1e2)]) && console[a0(0x256)]('\x1b[31m[ERROR]\x1b[0m\x20' + a);
    }
};
class a0v {
    constructor(a = 'ok') {
        this['status'] = a;
    }
}
class a0w extends a0v {
    constructor(a = 'ok', b = 0x0) {
        const a1 = a0T;
        super(a), this[a1(0x194)] = b;
    }
}
class a0x extends a0v {
    constructor() {
        const a2 = a0T, a = { 'neLFh': '1|3|2|5|0|13|4|9|10|15|14|11|6|7|12|8' }, b = a[a2(0x282)]['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this['disk_total'] = 0x0;
                continue;
            case '1':
                super();
                continue;
            case '2':
                this[a2(0x2f5)] = 0x0;
                continue;
            case '3':
                this[a2(0x22b)] = '';
                continue;
            case '4':
                this['ipv4'] = null;
                continue;
            case '5':
                this[a2(0x16f)] = '';
                continue;
            case '6':
                this[a2(0x2d8)] = a0E[a2(0x1c6)];
                continue;
            case '7':
                this[a2(0xf7)] = '';
                continue;
            case '8':
                this[a2(0xdc)] = null;
                continue;
            case '9':
                this['ipv6'] = null;
                continue;
            case '10':
                this[a2(0x2ad)] = 0x0;
                continue;
            case '11':
                this[a2(0x2b2)] = 0x0;
                continue;
            case '12':
                this[a2(0xd6)] = '';
                continue;
            case '13':
                this[a2(0x347)] = '';
                continue;
            case '14':
                this[a2(0x164)] = '';
                continue;
            case '15':
                this['os'] = '';
                continue;
            }
            break;
        }
    }
}
class a0y extends a0v {
    constructor() {
        const a3 = a0T, a = { 'aOlFD': a3(0x21e) }, b = a[a3(0x360)][a3(0x187)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a3(0x2bd)] = {
                    'tcp': 0x0,
                    'udp': 0x0
                };
                continue;
            case '1':
                this[a3(0x15a)] = 0x0;
                continue;
            case '2':
                this[a3(0x14c)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '3':
                this[a3(0x138)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '4':
                this[a3(0x33f)] = {
                    'up': 0x0,
                    'down': 0x0,
                    'totalUp': 0x0,
                    'totalDown': 0x0
                };
                continue;
            case '5':
                this[a3(0x3c3)] = { 'usage': 0x0 };
                continue;
            case '6':
                this[a3(0x200)] = '';
                continue;
            case '7':
                this[a3(0x234)] = 0x0;
                continue;
            case '8':
                super();
                continue;
            case '9':
                this[a3(0xa1)] = {
                    'total': 0x0,
                    'used': 0x0
                };
                continue;
            case '10':
                this[a3(0x19a)] = {
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
class a0z extends a0v {
    constructor() {
        const a4 = a0T, a = { 'UkDcq': a4(0x220) }, b = a['UkDcq']['split']('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a4(0x21f)] = '';
                continue;
            case '1':
                super();
                continue;
            case '2':
                this[a4(0xac)] = ![];
                continue;
            case '3':
                this['cmd'] = '';
                continue;
            case '4':
                this[a4(0x1c8)] = 0x0;
                continue;
            }
            break;
        }
    }
}
class a0A {
    constructor() {
        const a5 = a0T;
        this[a5(0x369)] = '', this[a5(0xa6)] = '', this['type'] = '', this[a5(0x2c4)] = 0x0, this['mtime'] = '', this[a5(0x11b)] = '', this[a5(0x1ef)] = '', this[a5(0x2a0)] = '';
    }
}
class a0B {
    constructor() {
        const a6 = a0T, a = { 'NcBhG': a6(0x261) }, b = a[a6(0x100)][a6(0x187)]('|');
        let c = 0x0;
        while (!![]) {
            switch (b[c++]) {
            case '0':
                this[a6(0x25f)] = ![];
                continue;
            case '1':
                this[a6(0x369)] = '';
                continue;
            case '2':
                this[a6(0x1ef)] = '';
                continue;
            case '3':
                this[a6(0x34a)] = ![];
                continue;
            case '4':
                this['path'] = '';
                continue;
            case '5':
                this['readable'] = ![];
                continue;
            case '6':
                this[a6(0x18a)] = '';
                continue;
            case '7':
                this[a6(0x11b)] = '';
                continue;
            }
            break;
        }
    }
}
class a0C extends a0v {
    constructor() {
        const a7 = a0T;
        super(), this[a7(0x133)] = [];
    }
}
function a0a() {
    const c8 = [
        'yxrJv3K',
        'ywDLBNq',
        'zNjVBuj5DgvbCNjHEq',
        'q05usMG',
        'mtK0nZHmz3bhDM8',
        'uuHPr0e',
        'vMP6uhC',
        'runeu0fFufvcs0vz',
        'uLHnquW',
        'zuniCMK',
        '8j+uHcbBq2fJAgvDifn0yxr1CYdLRP7ML7BNM5hMJQFNVjpLRzJLT7lOV4FMNj/VViZLT7lPH43MLRdNLj/MIjdLUQBPH4/LV6VNHAFJGii',
        'D29YA2rPCJ0VDMfYl2XPyI9KB2nRzxi',
        'v2nSwKm',
        'zgnrtLO',
        'y29UDgfPBMvYza',
        'qLbmDfi',
        'tNH5CLu',
        'tufyx1vqte9brf9tsvPf',
        'odaWma',
        'q2fOte0',
        'CMvHzgfIBgu',
        'x3n0yxr1C19JywnOzv90Aw1L',
        'runeu0fFufvcteLdx0Tfwv9qru0',
        'tw9PquG',
        'y3b1x2nVCMvZ',
        'zgvZDhjVEq',
        '8j+sPsbBqM9KEsbqyxjZzsbfCNjVCL06ia',
        'rMLSzsb0B28GBgfYz2u',
        's25Aq0q',
        't1busu9ouW',
        'Ahr0Chm6lY9PCgLUzM8UAw8VAxa',
        'rxHWCMvZCYbHChaGy3jLyxrLzcbHBMqGzxHWCMvZC1DZigfWCgXPzwq',
        'A2LSBgvK',
        'rwr3v0i',
        'qwnJzxnZlunVBNrYB2WTrxHWB3nLluHLywrLCNm',
        '5yQG5A+g5O+H5OMl5AsX6lsL',
        'yMfsA3i',
        'ChjVy2vZC0HHBMrZAgfRzq',
        'Ahr0Chm6lY9PzMnVBMzPzY5Tzs9PCa',
        'l2fWAs90yxnRl2XVzY9JCM9U',
        'ls0Tls1cruDjtG',
        'Bgjnse0',
        'C2fZuuq',
        'A3vrruO',
        'su1szuW',
        'Dw5KzwzPBMvK',
        'tK9ju0vFs0vzu19jtLrfuK5bta',
        'C3bSAwnL',
        'Eg9xsg0',
        'zgz3rgq',
        'A2LZyw1Hx3rLCM1PBMfSx3yX',
        'y3vYCMvUDeXLDMvS',
        'sezevxK',
        'sunKv2e',
        'x2LZqMLUyxj5',
        'C2vUza',
        'BwLU',
        'C2v0qxv0AfrHzW',
        'rNHVwuK',
        '8j+sOsdKV67LPi3LU7RORQ46ioIVT+wCQoMHUEEBRUEBRUw9LEs4I+I/KoIHJcbUCg0GAw5ZDgfSBcbaBhLKzwXSl25VzguTChr5',
        'yxnZAwDU',
        'AuDou0O',
        'y29WEuzPBgvZ',
        'x2jHC2vPBMzVx2nHy2HL',
        'Cwr6D2u',
        'wNLnvM4',
        'ywnJzxnZu3LUyW',
        '8j+AGcdNU4JNQ6/OV5VNQiVLT7lLKk/LIQGGkfbjrdOG',
        'rfrLwe4',
        'z2LK',
        'vKHKAeu',
        'y29Kzq',
        'CxvLCNK',
        '4P2mioMfJEE9RUAGOEMQJowKSEI0PsaO6z2ErevcvuFMQkhLVi/LV4xPOBVPHy3NVA7LR4BPKQuPoG',
        'mxfXve5yEq',
        'v2vIu29JA2v0ignVBM5Ly3rPB24Gyxr0zw1WDcb3AxrOihjLCxvLC3rFAwq6ia',
        'rhvAsLO',
        'qMfvDfm',
        'veD1zfK',
        'AxnwywXPzeLqDJq',
        'l2fWAs9MAwXLl2nHDa',
        'sw5PDgLHBgL6Aw5NienYExb0B01HBMfNzxiUlI4',
        'y2H1BMTFAwqGyw5KihrVDgfSx2nODw5RCYbTDxn0igjLig51BwvYAwm',
        'zgLYBMfTzq',
        'l2fWAs9LEgvJ',
        'runjrvnFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2LLC19WDwiUyJy0ios4JEwTMowCQa',
        'zxHWCMvZCW',
        'qKDutKe',
        'AgfLwey',
        'y3jLyxrLrgLYzwn0B3j5',
        'zLnWueO',
        'zNvUy3rPB24',
        'DLnXvKO',
        'yMfZzty0',
        'x2fWCgvUzeXVzW',
        'x3n0yxr1C19MzxrJAf9WCM9TAxnL',
        '4P2mioE7IoERR+s8MUIVNEw8GUw4UdOG',
        'tM9PC2uGv0fttsbTB2r1BguGBM90igf2ywLSywjSzq',
        'BMv0D29YAW',
        'wc1uAw1LC3rHBxa',
        'r0vulcbqt1nulcbqvvqSierftevursWGt1busu9ouW',
        'BwTKAxjtEw5J',
        'qwDLBNq',
        'C2HnwMC',
        'v0fstG',
        'y3j5ChrV',
        'z3b1x25HBwu',
        'tgjRy1m',
        'ic0Tls0GzxHPDgnVzgu9',
        'D3jPDgfIBgu',
        'l2fWAs90yxnRl2nYB24',
        'sMD2weu',
        'tevwruXt',
        'C3rKzxjY',
        'zNntAxPL',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdOR6BNU4BPLjNOR686ia',
        'AvLcCLK',
        't1P0y24',
        'y3jLyxrLuhvIBgLJs2v5',
        'C3DHChrVDgfS',
        'Cgf0Ahm',
        'CxPyDfu',
        'uuPuzNu',
        'uMvHze1LC3nHz2u',
        '6i635y+wieLqiowCSowDGowKSEI0PtOG',
        'mc4WlJaUma',
        'Dw9dANO',
        'twr3B0e',
        'Dvvnwgm',
        'DMvYAwz5',
        'tM9PC2vFwfHFmJu1mtLFq2HHq2HHug9SEv9cteflrtjZ',
        'yu9SrKq',
        'y29UDgfPBMvYpwX4yW',
        'q3zWu2y',
        'wxvqzvG',
        'q29UzMLNihzHBgLKyxrLza',
        'tevWtMy',
        'zxHLy3v0zu9UzxrPBwvuyxnRCW',
        'y2PlA3O',
        'Ec1MAwXLlxnPEMu',
        'BMfTzq',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5l21LBw9YEs5SAw1PDf9PBL9IExrLCW',
        'sfruuca',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTt3jPz2LU',
        'Eevqzxa',
        'v2X3q0q',
        'v0vuqvO',
        'ANnAu3a',
        'y2XLyxjpBMv0Aw1Ltg9NCW',
        'l3n5CY9MCY9Jz3jVDxaVBwvTB3j5lMn1CNjLBNq',
        'y29Uy2f0',
        'v2vIu29JA2v0ihjVDxrLignVBMzPz3vYzwq',
        'CgvMtK4',
        'quLlz0i',
        'C2HPzNq',
        'txPNrLa',
        'sgHIC3K',
        'qY5vveyToa',
        'Bw92zv9Tyxa',
        'AwLnANq',
        'AxneAxjLy3rVCNK',
        'r3vvwK8',
        'y21K',
        'quvtierLy3j5ChqGrxjYB3i6ia',
        'y21KihjLCxvPCMvK',
        'tvzuzK0',
        'shPHyNq',
        'uuvnvq',
        'Ag9TzwrPCG',
        'BgLZDgvU',
        'C3rHCNrtzxnZAw9U',
        't3zNCw4',
        'D3fWsuW',
        'yNjHBMq',
        'r0juChm',
        'CM1tEw5J',
        'CMvWBgfJzq',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov5yQG5A+g5PwW5O2U',
        'rK9mte9xx1nztuXjtKTt',
        'Aw5MBW',
        'Dw5SAw5Ru3LUyW',
        'DxbKyxrL',
        'CwLeAuK',
        'BxnNuxvLDwu',
        'wc1bDxrOlvrVA2vU',
        'ywjZ',
        'vKn4qNO',
        'uKn3ufm',
        'vgLTzxn0yw1Wigv4CgLYzwq6igrPzMy9',
        'uKLywwy',
        'uhLtv0O',
        'DxrMltG',
        'D3LzzNC',
        'Dg90ywW',
        'CNHzrvm',
        'zxHPDa',
        'y3jVBMXVB3a',
        'nZe3odHVteHTyKi',
        'q2vmuwS',
        'Ahr0Chm',
        'tK9ju0vFqunusu9ox1Dssvrfx01fu1nbr0u',
        'l2fWAs9ZDgf0Dxm',
        'AxnFyxv0AgvUDgLJyxrLza',
        'vKTdDge',
        'CMvHzgrPCLn5BMm',
        'g1SZmw1BrKfuquWGrvjst1jDg1SWBsdMOlJLV4pNU4JNQ6/KVP3OTzyGkhb0EsKG5yQG6l295AsX6lsL77Ym56Il5BQp57Ui5Q2I77Yb',
        's0nPC1y',
        't0XTswK',
        'B25LDgfZA3m',
        'vw5JyxvNAhqGrxHJzxb0Aw9UoG',
        'u0Lhsu5u',
        '6k+35Rgc6lAf5PE2',
        'twPqAxa',
        'zxLXBKe',
        'z2v0uhvIBgLJsxbwnG',
        'uvP1AxK',
        'x3n0yxr1C19JywnOzq',
        'tK9ju0vFuK9mrv9jtKLusufut1i',
        'l2fWAs90yxnRl29UzxrPBwu',
        'shfuD1m',
        'rvr3v1q',
        'C2XPy2u',
        'CMvHzezPBgvtEw5J',
        'vwvdrhi',
        'Cvj4wLq',
        'ihn0yxj0zwqGB24G',
        'tMLpwxG',
        'BKHJs3G',
        'runeu0fFufvcs0vzoIdMNkRORR7NVA7NJQ/LOOpLJ5JPH4/KUjtMLOFKU7yGA2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvTios4JEwTMowCQa',
        'u0HbmJu2',
        'y3b1',
        'tufyx1rbu0TFte9hx1njwKu',
        'DxrMoa',
        'w1DbuK5Die5VAxnLifDbu00GBw9KDwXLigzHAwXLzcb0BYbSB2fKoG',
        '8j+tPIbBq2fJAgvDifn0yxr1CYdLKB3KUk3NM5hMJQFNVjpLRzJJGii',
        'uKXtqK0',
        'ruvysLC',
        'D2vIC29JA2v0',
        'B1HuAxy',
        'twLZC2LUzYbJAhvUAYa',
        'zMLSzq',
        'qNfLDLi',
        'z2vUzxjHDgvtAw5NBgu',
        'DhmTBM9Kzq',
        'A2v5CY9Hz2vUDf9Ly2rZyv9WDwiUCgvT',
        'CgvNs1a',
        'sw5PDgLHBgL6zq',
        'y29UDhjVBa',
        'zMfSC2u',
        'BhHJ',
        'zgLZAW',
        'w+E7IoERR+s8MUIVNsa',
        'zxHWB3j0',
        'B2zzzgG',
        'zuzeweK',
        'Cgf0Aa',
        'swLkDxq',
        'BgfZDe5LDhDVCMTtDgf0CW',
        'Edi1nte5',
        'AM9PBG',
        'CgLK',
        'DgLTzw91Da',
        'rKLmrv9st09u',
        'y1nzEwe',
        'zgvJCNLWDerHDge',
        'Cg9ZDa',
        'sfzICeW',
        'y3DK',
        'Dg9mB3DLCKnHC2u',
        'zxLk',
        'l2fWAs9MAwXLl2f1DgHVCML0Eq',
        'y29UDgvUDa',
        'v3jbrhm',
        'Dg90ywXFy2H1BMTZ',
        'z2v0q29UDgfPBMvYtwvTB3j5',
        'CgfYyw1Z',
        'ufjptvbux0nptu1btKq',
        'zvjjDNm',
        'l2fWAs9MAwXLl2rVD25SB2fK',
        'runjrvnFufvcteLdx0Tfwv9qru0',
        'sKjIswO',
        'q3jLyxrPBMCGrxHWCMvZCYbHChaUlI4',
        'ntbTyG',
        'yM9KEq',
        'zw5JB2rPBMC',
        'zgvSzxrL',
        'l2fWAs9IyxnLAw5MBW',
        'CMvHzhLtDgf0zq',
        'wfPishC',
        'x2DLDenVBM5Ly3rPB25Z',
        'yMT5Aw0',
        'q2XVC2LUzYbJB25Uzwn0Aw9Uigr1zsb0BYbTAxnZAw5NihjLCxvLC3rFAwq',
        'Bwf4',
        'y2LWAgvY',
        'C2v0vgLTzw91Da',
        'A2v5CW',
        't1bftG',
        'C3rHCNrZv2L0Aa',
        'l2fWAs9MAwXLl2nW',
        'Bg9JywXqCML2qJy0',
        'z2v0q3jVBKXVz3m',
        'zLrnzu0',
        'C3DHChvZzwq',
        'C2vZC2LVBL9RzxK',
        'sgzhAfO',
        'DhHFyNL0zxm',
        'uL9psW',
        'y29Yzxm',
        'thffwfe',
        'BM9PC2vFA2v5',
        'sKvLuuq',
        'ChvZAa',
        'Ec10Aw1LC3rHBxa',
        'l3bVzhmV',
        'rMLSzsb1CgXVywrLzcbZDwnJzxnZzNvSBhKU',
        'tuD6uvi',
        'r0jvDfC',
        'te9hx0XfvKvm',
        'otHes2vMCLC',
        'y2XLyw51Ca',
        'CMvJDxjZAxzL',
        'sw5PDgLHBgL6Aw5Nifn5C3rLBuLUzM9dB2XSzwn0B3iUlI4',
        'quDftLrFufjjvKfurv9lrvK',
        'EgLjrfG',
        'q25wv2y',
        'mtm5nvrpD0P2DW',
        'mtiWrMDlD3L3',
        'Dg9cExrLCW',
        'zw5K',
        'C3rHDfn5BMm',
        'C3rHDhvZq29Kzq',
        'xsdIMQdVUi8G5OYh5lUK5Ase55cg5BYc5BI4oIa',
        'sfDVreS',
        'CMf3',
        'zNjVBq',
        'ywXS',
        'DMLYDhvHBgL6yxrPB24',
        'DgvYBwLUywW',
        'Ec1Kzwj1zW',
        'uhfAEKW',
        'zxHWB3j0CW',
        'qLPeAwS',
        'x2DLDfzPCNr1ywXPEMf0Aw9U',
        'C3bHD24',
        'v29cz20',
        'tMncAeC',
        'zgvSzxrLrMLSzxm',
        'qMjzwhu',
        'DxbSB2fKrMLSzq',
        'l2jPBI9ZAa',
        'zMLSzw5HBwu',
        'z2v0uhvIBgLJsxbwna',
        'BwvYz2u',
        'DhjPBq',
        'CxfbsNO',
        'v3jPDgvnzxnZywDL',
        'uM1ktfi',
        'sw52ywXPzcbJCM9Uigv4ChjLC3nPB25ZoIa',
        'ueLmChC',
        'rvHfq19tsevmtf9nt0rf',
        'C3rYAw5NAwz5',
        'u3LZDgvTsw5MB0nVBgXLy3rVCIbPBML0AwfSAxPLza',
        'zgLYzwn0B3j5',
        'CgfYC2u',
        'Bg5bsLG',
        'yxbWBgLJyxrPB24VANnVBG',
        'Cu1dz3e',
        'wMfrywq',
        'C3LZDgvTAw5MB3jTyxrPB24',
        'EfLsCuy',
        'tvnfs00',
        'DgvZDa',
        'Bw9Kzq',
        'l2fWAs90yxnRl29UzxrPBwuVzxHLy3v0zq',
        'zg9JA2vY',
        'x2nOzwnRqwnJzxnZ',
        'vhbjv1e',
        'Ahr0Chm6lY9Py2fUAgf6AxaUy29T',
        'ywnJzxnZx2rLBMLLza',
        'sMrJtK4',
        'CMvJDKnPCgHLCG',
        'A2vYBMvS',
        'mNWXFdn8nxW2Fdb8na',
        'uKTdy2m',
        'vhDfzuG',
        'CMvHzezPBgu',
        'DgnW',
        'mtbKsKjhCgO',
        'qMnIEhC',
        'l3bYB2mVy3b1Aw5MBW',
        'ywrKCMvZCW',
        'l2fWAs9MAwXLCMf3',
        'B25LDgLTzxrHC2TZx2XVzW',
        'AxnbCNjHEq',
        'su5gtW',
        'y29UC3rHBNrZ',
        'zMLSzxm',
        'ExLbBMO',
        'wMzryMu',
        '8j+sPsdMJ6hMIyVLPlhOTkxOR6BMG4u6ia',
        'teforW',
        'C3DHCa',
        'icaGmI4G5OIw5Bcg5A+g6zkL5PAh5lU25Ps+5ywLic4VA2v5CY8G55UU5B2vicJOV5dOOyWGz2vUzxjHDgvFA2v5CY5WEsdNLj/MIjaP',
        'BwjIEfC',
        'zxjYB3i',
        'DeHVAhC',
        'y2XLyxi',
        'y2f0y2G',
        'BNvRs0u',
        'z2v0t25LDgLTzuXVz3m',
        'DxbSB2fKrMLSzvjHDW',
        'zgvJCNLWDa',
        'Dg90ywXozxr3B3jRvxa',
        'C2v0q3jVBLrHC2TZ',
        'z2HYyva',
        'DgHLBG',
        'tw5UDwC',
        'y3jVBNrHC2TZx2XVzW',
        'Ec1HzxmTzw5JCNLWDgvK',
        'D2zRBMu',
        'z2vUzxjHDgvlzxLqywLYu3LUyW',
        'CMfT',
        's0fuELi',
        'Dfvet24',
        'x2DLBMvYyxrLuMf3s2v5CgfPCG',
        'z2v0tg9JywXjuhy2',
        'D3jPDgvgAwXLu3LUyW',
        'C2v0t25LDgLTzvrHC2TZ',
        'zeLvqNC',
        'y3jVBG',
        'y2HTB2rtEw5J',
        'vef0swu',
        '8j+uKcdMO4dMTyVLIlaGvg9Rzw7VViZOP4BKUlOGv1ntioMtVUI3R++8JoI3S+I/HYboB2LZzq',
        'zKDtC2C',
        'ANDls2y',
        'Dxb0Aw1L',
        'q1LWD2q',
        'DgfN',
        '5O+H5OMl5PYQ5A6m5OIq77Ym5PEG5Rov6kEJ5A+g5PwW5O2U',
        'qwnJzxnZigrLBMLLzdOGCgf0AcbVDxrZAwrLihjVB3q',
        'Dxj4Du8',
        'rMf0ywWGzxjYB3iGAw4GBwfPBIGPoG',
        'l2fWAs90yxnRl3n0yxr1CW',
        'Dg9Rzw4',
        'BMv0D29YA0nVBM5Ly3rPB25Z',
        'A2vYBMvSx3zLCNnPB24',
        'vNvRDgu',
        'AgfUzhnOywTLrMLUAxnOzwq',
        'yxbWBhK',
        'CMvSzwfZzq',
        'zMv0y2Hjua',
        'wvHksKK',
        'ug9KBwfU',
        'x2zVCM1HDe1Vzgu',
        'y1fOzeK',
        'g1S5mg1BrevcvuDDg1SWBsa',
        'y3b1x25HBwu',
        'CMvXDwvZDeLK',
        'AgL0BMC',
        'tK9ju0vFqunusu9ox1nqteLu',
        'Ec1VCMLNAw5HBc1WyxrO',
        'y3jLyxrLrgvJAxbOzxjPDG',
        'Ec1LBMnYExb0zwq',
        'y3fIrem',
        'zu5pD3q',
        'vu13C1a',
        'sgLIAee',
        'z2v0rMLSzvbLCM1PC3nPB25Z',
        'vMHqswC',
        'vvv4Ewy',
        'rLDLshu',
        'lcbtAwDUywW6ia',
        'l2fWAs9MAwXLl2XPC3q',
        'qKftruLorK9Fq0fdsevFvfrm',
        'AxncDwzMzxi',
        'twf0y2HLzcbtDwiTCgf0AdOG',
        'qgX5zgvSBc9UB2rLlxb0Eq',
        'zMLUywW',
        'ChvIBgLJx2i2na',
        'x3nWBgL0qw5KrMLUAxnO',
        'C3bSAxq',
        'vgv0Chm',
        'l3bYB2mVms9LBNzPCM9U',
        'DhLWzq',
        's1zn',
        'rMLSzsbUB3qGzM91BMq',
        'BLDZA1q',
        'y2Dyr1e',
        'z2v0',
        'Aw5PDa',
        'ANnVBG',
        'thPJCNa',
        'BhnOvMW',
        'y291BNq',
        'mJiXoda0muLUAezlqG',
        'y2H1BMTFAwq',
        'BMv0D29YA0LUDgvYzMfJzxm',
        'mZaW',
        'wKDytKG',
        'Bg9Hza',
        'DwLK',
        'q1jptL9dsevds19jtLrfuLzbta',
        'A3vIzxbVzhm',
        'vwLpExK',
        'AgvHzgvY',
        'BM93',
        'ihvWBg9HzgvKlIbxywL0Aw5NigzVCIbYzw1HAw5PBMCGyMXVy2TZlG',
        'B1Pbv0q',
        'u0vtu0LptL9lrvK',
        'Dg1WzNm',
        'rKLmrv9bvurjvf9mt0C',
        'g1SZm21Bv0fstL0BwZbTia',
        'Dgv4Da',
        'qwnTrwq',
        'CM93CW',
        'y2fSBa',
        'BNvTyMvY',
        'Ahr0Chm6lY9PCgvJAg8UBMv0l3bSywLU',
        'zMLSDgvY',
        'swHYsNe',
        'uKnSANy',
        'q2TzCuG',
        'ze5VqLi',
        'Ec1LBMnYExb0zwqSihGTywDLBNqTDMvYC2LVBIWGEc1MAwXLlxnPEMuSihGTB3jPz2LUywWTCgf0Aa',
        'Ec1MAwXLlw5HBwu',
        'Ec1HDxrOlxrVA2vU',
        'rNDtzvK',
        'Ec1JAhvUAY1Pza',
        'uKjHqLe',
        'zw5JCNLWDa',
        'uLf2vgy',
        'BLLpBMe',
        'xsdMIAFOOyZNU4JNQ6/OTytMUPdMUixNKiyUlI4',
        'BwfPBG',
        'ywn0AxzL',
        'CMvSyxrPDMu',
        'y3jLyxrLv3jPDgvtDhjLyw0',
        'Aun4zwW',
        'DMDttM0',
        'l2fWAs9MAwXLl25LDW',
        'sw52ywXPzcbIAw5HCNKGC3rYzwfTihjLCxvLC3qGyM9KEq',
        'EKHvEuW',
        'DMfSAwrHDgu',
        'quDftLrFvKvsu0LptG',
        'DNPyuM8',
        'zxHPDgnVzgu',
        'mtq2ndiZntnnuuXlAKG',
        'Axnoyu4',
        'z3vouhy',
        'revcvuC',
        'CMvZAxPL',
        'DxnLtM9PC2u',
        'yMfZzty0lwPZ',
        'sw52ywXPzcbIB2r5igzVCM1HDdOG',
        'CMvXDwvZDf9Pza',
        'zKXTEKK',
        'nta3nde0t3nrD0Tk',
        'zNjLzq',
        'rNzcEeK',
        'y29UDgvUDc10ExbLlcb1C2vYlwfNzw50lcbHDxrOB3jPEMf0Aw9Ulcb4lw5VBMnLlcb4lxrPBwvZDgfTCcWGEc1HDxrOlxrVA2vUlcb4lwfLCY1LBMnYExb0zwqSihGTzgvIDwCSihGTzMLSzs1WyxrOlcb4lwzPBguTBMfTzsWGEc1JAhvUAY1PzcWGEc10B3rHBc1JAhvUA3m',
        'tM9Uzq',
        'z2v0uMvHBhrPBwvjBMzV',
        '4PQG77Ipievdsuvt5ywS6zkL6kEJ56cb5AsX6lsLoIa',
        'DKjIqxa',
        'r2v0qwn0Aw9U',
        'vw5ZDxbWB3j0zwqGCgvYBwLZC2LVBIbMB3jTyxqSig9UBhKGB2n0ywWGC3rYAw5NCYbHCMuGC3vWCg9YDgvK',
        'y3jVBNrHC2TZ',
        'twLZC2LUzYbYzxf1zxn0x2LK',
        'yxzNtg9Hza',
        'yxbWBgLJyxrPB24VB2n0zxqTC3rYzwfT',
        'CKDrD28',
        'rvjst1i',
        'ueLNDwy',
        'zwnPzxnqDwjRzxK',
        'v1zQzuC',
        'CNHFyNL0zxm',
        'DxnLza',
        'qKDrCfa',
        'D2fYBG',
        'zgvIDwC',
        'tLfTBNG',
        'l2fWAs93CY8',
        'wvLpBMG',
        'x3j1BLrLCM1PBMfS',
        'Bw9Kzv9Vy3rHBa',
        'AMfIEeW',
        'icaG4OcIia',
        '8j+qMIdKVB/NLkGGu2HLBgWG6lEV5B6eoIa',
        'r1nJr0i',
        'AgvHzgvYCW',
        'q29UDhjVBgXLCG',
        'CgfKu3rHCNq',
        'EKvSsey',
        'u3bSAxq',
        'AKriqLq',
        'Dg9cExrLqxjYyxK',
        'zxHPC3rZu3LUyW',
        'x3jLy2vPDMvxC0j5DgvZ',
        'v0nXzfy',
        'DfjbAK0',
        'x2HHBMrSzvjHD01LC3nHz2u',
        'BwvZC2fNzq',
        'z2v0tg9Nu3vTBwfYEq',
        'C2v0',
        'nJmWndHmtLbRthu',
        'Chr5uhjVy2vZCW',
        'sw9Kzhe',
        'y2LWAgvYDgv4Da',
        'x2DLDenVBMzPz1zHBhvL',
        'x2zVCM1HDeXVz0vUDhj5',
        'veLnrvnuqu1qx1DjtKrpvW',
        'CMvKDwnL',
        'u2vYDMvYigXPC3rLBMLUzYbZDwnJzxnZzNvSBhK',
        'l2fWAs9MAwXL',
        'Bwv0Ag9K',
        'vwzXr3i',
        'y29WEuzPBgvtEw5J',
        'ChjPDMf0zv9InJq',
        'yNL0zuXLBMD0Aa',
        'BxrPBwu',
        'ruPkvvG',
        'z1fiyvm',
        'rMfPBgvKihrVihbHCNnLifvstcbMCM9T',
        'D3jPDgu',
        'C2v0rMLSzvbLCM1PC3nPB25Z',
        'BxnNuMvZB2X2zxjZ',
        'zMfTAwX5',
        'DxjS',
        'w/cFMQGG5lIL6yEn6k2M5zgkxsbymJu1mtKG5A+g6zkL6zw/5BQM6z2EidmYiowTL+IkGU+8Je5VAxnLiownJ+IURUw/HEwUMUw0QEA6G++8Gq',
        'ywvZlti1nI1Ny20',
        'ue9sva',
        'ohW1Fdj8m3WXmhW5Fdr8mhWXFdD8nG',
        'CMvZDwX0',
        'mxWWFdr8mNWZ',
        'nxWYFdf8nhWWFdm',
        'BM9Uy2u',
        'qwnJzxnZlunVBNrYB2WTqwXSB3CTsgvHzgvYCW',
        'twLKzgXLD2fYzsbHChbSAwvKlcbZzxr0Aw5NihvWihjVDxrLCY4UlG',
        'quPdq2m',
        'DMvYAwz5u2LNBMf0DxjL',
        'wf9psW',
        'BM9PC2uTyY53yxnT',
        'BgLTAxq',
        'y3jVBKPVyNm',
        'yxjJAa',
        'yMzTA0e',
        'B2TgqKW',
        'B25LDgLTzq',
        'x2jHC2vPBMzVx2zLDgnOx3bYB21PC2u',
        'B2jQzwn0',
        'rgvJCNLWDfDPDgHbza',
        'l2jPBI9HC2G',
        'z1b0uLC',
        'ChjVy2vZCW',
        'vMXhvfm',
        'weXlA04',
        'svLdCfi',
        'x2jHC2vPBMzVx2nHy2HLx3rPBwu',
        'ANDR',
        'wMrLsKK',
        '6k6/6zEUia',
        'z2v0vgfZA1n0yxr1CW',
        'zw50CMLLCW',
        'u2LNBMf0DxjLihzLCMLMAwnHDgLVBIbMywLSzwq6ia',
        'CMvZB2X2zq',
        '8j+sPsbBuMvZCg9UC2uGrw5JCNLWDf06ia',
        'zNjVBuj5DgvZ',
        'BenADxi',
        'qvvev1i',
        'A2DKAMu',
        'Dgv4Dc9WBgfPBG',
        'y29SCW',
        'y3btEw5J',
        'ChjVy2vZC2vZ',
        'tuDLD0S',
        'se9tva',
        'y2XVC2u',
        'tNDtse8',
        'AxnwywXPzeLqDJy',
        'z2v0t25LDgLTzvrHC2TZ',
        'zgf0yq',
        'zhfesKe',
        'z2v0qxzHAwXHyMXLu2HLBgW',
        'vefts19usu1ft1vu',
        'CgHHC2u',
        'DunwwhC',
        'DMnJELK',
        'Bg9N',
        'y0TVExG',
        'z2v0qMfZAwnjBMzV',
        'BgvUz3rO',
        'zw5JCNLWDfjLC3bVBNnL',
        'zwnKC2fqDwjRzxK',
        'mtaW',
        'Ec10B3rHBc1JAhvUA3m',
        'AxnjBML0Awf0B3i',
        'zxHLy3v0ywjSzq',
        'wg13v3G',
        'nhWXFdD8mNW2Fdv8m3WW',
        'vMfSAwrHDgLUzYbJB25MAwCUlI4',
        'x2rVtM9PC2viyw5KC2HHA2u',
        'tgPjBge',
        'CerdDKG',
        'AgfUzhnOywTL',
        'CM91BMq',
        '5lIj5QYH5O+H5OMl5lQK5lQs5zco5lUn5PYQ6l+B5ywLievZDgfIBgLZAgvKioEkTUAaGq',
        'DwrW',
        'C2nOzwr1Bgu',
        'u09mBuG',
        'Dg90ywXozxr3B3jRrg93BG',
        'uuPzvKi',
        'sw5PDfrHC2S',
        'qKXjwvu',
        'Aw5JBhvKzxm',
        'x2DLDerPC2TjBMzV',
        'B3njBMzV',
        'Dhj1zq',
        'CgzxvLa',
        'mc4ZlJaTANm',
        'v19psW',
        'C3rKB3v0',
        's3vIzxjUzxrLCW',
        'vMT5rNe',
        '4PQG77Ipievdrfnb5ywS6zkL5yQG6l295AsX6lsLoIa',
        'C2vUzenPCgHLCG',
        'rvvNsM0',
        'B3zLCMXHEq',
        'sNLttNq',
        'wgr3t04',
        'x3bYB2nLC3nuzxjTAw5HBe1LC3nHz2u',
        'Chv0',
        'BMvmrMG',
        'Bw92zuzPBgvZ',
        'z2v0tg9JywXjuhy0',
        'nJq3mtC0nhHcAfDXqW',
        'BwvT',
        'Dg9ju09tDhjPBMC',
        'AurwwK0',
        'B0fAEw0',
        'zxHWzwn0zwrszw1VDgvqDwjcnJq',
        'y3vYCMvUDeXVywq',
        'C29Tzq',
        'ELjiBvK',
        'zfD2z00',
        'lNvWBg9Hzf9JAhvUA3m',
        'BMHwwMC',
        'q2zyquW',
        'ywvluuO',
        'C3rHDhvZ',
        'BKrprwW',
        'sevbra',
        'BgfZDe5LDhDVCMTuAw1L',
        'wKr0q0O',
        'uNrPBwvVDxq',
        'zMXVB3i',
        'ExDQve8',
        'tK9ju0vFs0vz',
        'z2v0q3jVBLrHC2TZ',
        'zfjStxm',
        'r094v3e',
        'Ahr0Chm6lY9JAgvJA2LWlMfTyxPVBMf3CY5JB20',
        'B3DUzxi',
        'zxvAq3y',
        'C2rdrMO',
        'yNvUlxb0Eq',
        'svb2na',
        'ww95A00',
        'r0D0u2C',
        'q09ovfjptf9qvujmsunFs0vz',
        'u0TcwK0',
        'DxbNCMfKzq',
        'v2vIu29JA2v0ihjLCxvLC3qGvvjmoIa',
        'DxDyuLq',
        'C3rYAw5N',
        'BwvTx3rVDgfS',
        'CYa+ia',
        'vg5ywwG',
        'Dw5Oyw5KBgvKuMvQzwn0Aw9U',
        'AhPjEMW',
        'C3DHCf90B3rHBa',
        'zM1euK4',
        'uuj2wxa',
        'zxHLy3v0zq',
        'DxnL',
        'mta0odu3nJaW',
        'rMfPBgvKihrVigXVywqGBM9PC2uTyY53yxnTig1VzhvSzq',
        'Ec1UB25Jzq',
        'BMnuvNi',
        'uc0Ynty',
        'C3rVCa',
        'y29UBMvJDgLVBNm',
        'qg5VyMXLl2n1CNzLCY9UAxn0lMPZ',
        'q29UDgvUDc1uExbL',
        'Ee9cq1C',
        'DLfwD2W',
        '4PYfie5VAxnLioApOEAjI+wUJoAiKo+8JoERR+wiSoERR+wkOowVHUMaMUMbK+w3SUw7UUERI++8Gq',
        'CMvUyw1Lu3LUyW',
        'C2L6zq',
        'zM9YrwfJAa',
        'Dw5RBM93BG',
        'yuTUz3e',
        'rgv6z1K',
        'Ahr0Chm6lY9HCgKUAxbPzNKUB3jN',
        'tKvzrK8',
        'u1zgrMq',
        'yMfZzw5HBwu',
        'C09ezg8',
        'y2H1BMTF',
        'v09QEuC',
        'x3bHCNnLtw9Kzq',
        'CgHnD0m',
        'wgHzExu',
        'tgrpD0m',
        'ic0Tls0G',
        'Dg9tDhjPBMC',
        'DxjSzw5JB2rLza',
        'C2LNBMfS',
        'DMvYC2LVBG',
        'tK9ju0vFuK9mrv9srvnqt05ervi',
        'Cgf0Adi',
        'B25eyxrH',
        'zLzSDKu'
    ];
    a0a = function () {
        return c8;
    };
    return a0a();
}
class a0D {
    static ['_generateRawKeypair']() {
        const a8 = a0T, a = {
                'CNTJh': a8(0xa9),
                'TGudY': a8(0x239),
                'tGRxJ': 'base64url',
                'MjPip': function (i, j) {
                    return i !== j;
                },
                'RKCcc': function (i, j) {
                    return i !== j;
                },
                'XLKkN': a8(0x33a)
            }, {
                privateKey: b,
                publicKey: c
            } = a0g[a8(0x14b)](a[a8(0x2e0)]), d = b[a8(0xa3)]({ 'format': a[a8(0x32b)] }), f = c['export']({ 'format': a[a8(0x32b)] }), g = Buffer[a8(0xf5)](d['d'], a['tGRxJ']), h = Buffer[a8(0xf5)](f['x'], 'base64url');
        return (a[a8(0x3b1)](g[a8(0x259)], 0x20) || a[a8(0x126)](h[a8(0x259)], 0x20)) && a0u[a8(0x13b)](a8(0x21b)), {
            'private_b64': g[a8(0x2d5)](a['XLKkN']),
            'public_b64': h[a8(0x2d5)](a[a8(0x236)])
        };
    }
    static [a0T(0x3cf)](a) {
        const a9 = a0T, b = this[a9(0x14f)]();
        return {
            'role': a,
            'private_b64': b['private_b64'],
            'public_b64': b['public_b64']
        };
    }
    static ['generatePair'](a = a0T(0x1f5), b = a0T(0x343)) {
        const aa = a0T, c = {
                'control': this['generateSingle'](a),
                'agent': this[aa(0x3cf)](b)
            };
        return c;
    }
}
class a0E {
    static [a0T(0x298)] = parseInt(process.env.EXEC_TIMEOUT || '30');
    static [a0T(0x10e)] = (process.env.EXEC_SHELL || 'true')[a0T(0xb3)]() === a0T(0x273);
    static [a0T(0x1cc)] = (process.env.DEBUG || a0T(0x9f))[a0T(0xb3)]() === a0T(0x273);
    static [a0T(0x209)] = parseInt(process.env.TIMESTAMP_WINDOW || '3600');
    static [a0T(0xe4)] = parseInt(process.env.LOG_LEVEL || (this[a0T(0x1cc)] ? '0' : '2'), 0xa);
    static ['ECDSA_PUBLIC_KEY_PEM'] = a0E['_getConfigValue'](a0T(0x2e4), a0T(0x3d1)) || 'ECDSA公钥内容';
    static [a0T(0xbe)] = a0E['_getConfigValue']('ECIES_PUBKEY', 'keys/agent_ecies_pub.b64') || 'ECIES公钥内容';
    static [a0T(0xad)] = process.env.FILE_ROOT || a0k[a0T(0x385)]();
    static ['MAX_UPLOAD_SIZE'] = parseInt(process.env.MAX_UPLOAD_SIZE || a0T(0x2b7));
    static [a0T(0x38f)] = (process.env.FOLLOW_SYMLINKS || 'false')[a0T(0xb3)]() === a0T(0x273);
    static [a0T(0x1a5)] = (process.env.FILE_AUDIT_LOG || a0T(0x273))[a0T(0xb3)]() === a0T(0x273);
    static ['InitTask'] = !![];
    static [a0T(0x3ad)] = [];
    static [a0T(0x1dd)] = {};
    static [a0T(0x3a1)] = ![];
    static [a0T(0x252)] = parseInt(process.env.TASK_TIMEOUT || a0T(0x198));
    static ['CRON_CHECK_INTERVAL'] = parseInt(process.env.CRON_INTERVAL || '30');
    static ['onetimetasks_log'] = [];
    static [a0T(0x148)] = [];
    static ['MAX_TASK_LOG_SIZE'] = parseInt(process.env.MAX_TASK_LOG || a0T(0x25c));
    static [a0T(0x24a)] = process.env.HOST || a0T(0x35a);
    static [a0T(0x21d)] = parseInt(process.env.KPORT || process.env.PORT || process.env.SERVER_PORT || a0T(0x2ef));
    static [a0T(0x1c6)] = process.env.AGENT_VERSION || a0T(0x275);
    static [a0T(0x1a3)] = a0g['randomBytes'](0x20)[a0T(0x2d5)](a0T(0x33a));
    static [a0T(0x30b)] = a0D['generatePair']();
    static [a0T(0x29b)] = {
        'controller': { 'private': this[a0T(0x30b)][a0T(0x9e)][a0T(0x210)] },
        'agent': { 'public': this[a0T(0x30b)][a0T(0x2de)][a0T(0x185)] }
    };
    static [a0T(0x180)] = 0xe10;
    static ['STATUS_CACHE_TTL'] = 0x1e;
    static [a0T(0x31c)] = null;
    static [a0T(0x238)] = 0x0;
    static ['_baseinfo_fetch_promise'] = null;
    static [a0T(0x3b5)] = null;
    static ['_status_cache_time'] = 0x0;
    static [a0T(0x33c)] = null;
    static [a0T(0x207)](a, b) {
        const ab = a0T, c = { 'dWvgM': ab(0x3c5) }, d = process.env[a];
        if (d)
            return d;
        const f = a0j['join'](__dirname, b);
        if (a0h[ab(0x1fb)](f))
            try {
                return a0h['readFileSync'](f, c[ab(0x28e)])['trim']();
            } catch (g) {
            }
        return '';
    }
    static [a0T(0x1c5)]() {
        const ac = a0T, a = {
                'xoWHm': ac(0x3c1),
                'fTMeM': ac(0x332),
                'FWeHu': function (b, c) {
                    return b > c;
                },
                'TwEeH': ac(0x221),
                'Hhbsy': ac(0x139),
                'ZfQbe': '\x20\x20\x201.\x20设置环境变量:\x20export\x20ECDSA_PUBKEY=\x27-----BEGIN\x20PUBLIC\x20KEY-----\x27...\x27'
            };
        if (!this['DEBUG']) {
            const b = [];
            !this['ECDSA_PUBLIC_KEY_PEM'] && b[ac(0xde)](a[ac(0x30d)]);
            !this[ac(0xbe)] && b[ac(0xde)](a[ac(0xd4)]);
            if (a[ac(0x17d)](b[ac(0x259)], 0x0)) {
                const c = a[ac(0x127)][ac(0x187)]('|');
                let d = 0x0;
                while (!![]) {
                    switch (c[d++]) {
                    case '0':
                        a0u[ac(0x1ea)](a[ac(0x379)]);
                        continue;
                    case '1':
                        a0u[ac(0x1ea)]('\x0a💡\x20解决方法:');
                        continue;
                    case '2':
                        b[ac(0x2c5)](f => a0u[ac(0x13b)](ac(0x1f1) + f));
                        continue;
                    case '3':
                        process[ac(0x3a0)](0x1);
                        continue;
                    case '4':
                        a0u[ac(0x1ea)](a[ac(0x135)]);
                        continue;
                    case '5':
                        a0u[ac(0x13b)](ac(0x326));
                        continue;
                    }
                    break;
                }
            }
        }
    }
    static [a0T(0x107)](a = {}) {
        const ad = a0T, b = {
                'EEXJW': function (c, d) {
                    return c !== d;
                },
                'qdzwe': function (c, d, f) {
                    return c(d, f);
                },
                'VpvSS': function (c, d) {
                    return c(d);
                }
            };
        if (!a)
            return;
        b[ad(0x3c9)](a['PORT'], undefined) && b[ad(0x3c9)](a[ad(0x21d)], null) && (this[ad(0x21d)] = b[ad(0x31d)](parseInt, b['VpvSS'](String, a[ad(0x21d)]), 0xa)), a['ECDSA_PUBLIC_KEY_PEM'] && (this['ECDSA_PUBLIC_KEY_PEM'] = a[ad(0x2f3)][ad(0x108)]()), a[ad(0xbe)] && (this['ECIES_PUBLIC_KEY_PEM'] = a[ad(0xbe)]['trim']());
    }
}
class a0F {
    constructor(a, b) {
        const ae = a0T, c = {
                'kJgVc': ae(0x305),
                'SKBZM': ae(0x33a),
                'yyAnj': function (d, f) {
                    return d(f);
                },
                'aeKQJ': ae(0x2bb),
                'xOBCW': ae(0x239)
            };
        this['ecdsaPubkey'] = null, this[ae(0x1e4)] = null;
        if (a)
            try {
                const d = a[ae(0x108)]();
                if (d[ae(0xd0)](c['kJgVc']))
                    this['ecdsaPubkey'] = a0g[ae(0x353)](d);
                else {
                    const f = Buffer[ae(0xf5)](d, c[ae(0x2a8)]), g = a0s['Point'][ae(0x241)](f), h = g[ae(0xee)](![]), i = m => m[ae(0x2d5)](ae(0x33a))[ae(0x38d)](/\+/g, '-')[ae(0x38d)](/\//g, '_')[ae(0x38d)](/=/g, ''), j = c[ae(0x134)](i, Buffer[ae(0xf5)](h['slice'](0x1, 0x21))), k = i(Buffer[ae(0xf5)](h[ae(0x3ba)](0x21, 0x41))), l = {
                            'kty': 'EC',
                            'crv': c[ae(0x292)],
                            'x': j,
                            'y': k
                        };
                    this[ae(0x25b)] = a0g[ae(0x353)]({
                        'key': l,
                        'format': c[ae(0x2c0)]
                    });
                }
            } catch (m) {
                a0u['error'](ae(0x27a) + m['message']), this['ecdsaPubkey'] = null;
            }
        if (b)
            try {
                this[ae(0x1e4)] = a0p[ae(0x1fa)](b[ae(0x108)]());
            } catch (n) {
                a0u[ae(0x1e9)](ae(0x1d9) + n[ae(0x200)]);
            }
    }
    [a0T(0x226)](a, b, c) {
        const af = a0T, d = {
                'WVjeG': function (f, g) {
                    return f / g;
                },
                'vQVwl': function (f, g) {
                    return f > g;
                },
                'AUDWR': function (f, g) {
                    return f - g;
                },
                'NLVig': af(0x3c2)
            };
        if (!this[af(0x25b)])
            return !![];
        try {
            const f = parseInt(b), g = Math['floor'](d[af(0x1e5)](Date[af(0x1a0)](), 0x3e8));
            if (d[af(0x2c1)](Math['abs'](d[af(0x243)](g, f)), a0E['TIMESTAMP_WINDOW']))
                throw new Error(af(0x399) + Math[af(0x396)](d[af(0x243)](g, f)) + af(0x2ae) + a0E['TIMESTAMP_WINDOW'] + 's');
            const h = '' + a + b, i = a0p['toByteArray'](c), j = a0g['createVerify'](d['NLVig']);
            return j[af(0x392)](h), j[af(0x35e)](this[af(0x25b)], i);
        } catch (k) {
            throw new Error(af(0x23e) + k[af(0x200)]);
        }
    }
    ['encryptResponse'](a) {
        const ag = a0T, b = {
                'ywjTO': ag(0x39c),
                'dqDJA': function (c, d, f) {
                    return c(d, f);
                }
            };
        if (a0E[ag(0x1cc)] || !this['eciesPubkey'])
            return JSON[ag(0x10f)](a);
        try {
            const c = JSON[ag(0x10f)](a), d = Buffer[ag(0xf5)](c, b[ag(0x29a)]), f = Buffer['from'](this['eciesPubkey']), g = b[ag(0x250)](a0o, f, d);
            return Buffer[ag(0xf5)](g)[ag(0x2d5)]('base64');
        } catch (h) {
            const i = {
                '_encrypt_error': h[ag(0x200)],
                '_raw': a0E[ag(0x1cc)] ? a : null
            };
            return JSON[ag(0x10f)](i);
        }
    }
    [a0T(0xaf)](a, b) {
        const ah = a0T, c = {
                'HfGhZ': function (d, f) {
                    return d !== f;
                },
                'qovgd': 'AES\x20Decrypt\x20Error:\x20Key\x20must\x20be\x20exactly\x2032\x20bytes\x20for\x20AES-256.',
                'Vukte': ah(0x33a),
                'CfXAL': ah(0x3c5),
                'IDWsH': 'Missing\x20required\x20AES-GCM\x20fields\x20(nonce,\x20tag,\x20ciphertext)\x20in\x20payload.',
                'DezgY': ah(0x21c)
            };
        if (!b || c[ah(0xd7)](b[ah(0x259)], 0x20))
            throw new Error(c['qovgd']);
        try {
            const d = Buffer['from'](a, c[ah(0x165)])[ah(0x2d5)](c[ah(0x291)]), f = JSON['parse'](d);
            if (!f[ah(0x222)] || !f[ah(0x15c)] || !f[ah(0x206)])
                throw new Error(c['IDWsH']);
            const g = Buffer[ah(0xf5)](f[ah(0x222)], c[ah(0x165)]), h = Buffer[ah(0xf5)](f[ah(0x15c)], c[ah(0x165)]), i = Buffer[ah(0xf5)](f[ah(0x206)], ah(0x33a)), j = a0g[ah(0x174)](c[ah(0x2c8)], b, g);
            j[ah(0x316)](h);
            let k = j[ah(0x392)](i, null, c[ah(0x291)]);
            return k += j[ah(0x184)](c[ah(0x291)]), k;
        } catch (l) {
            throw new Error(ah(0x380) + l[ah(0x200)]);
        }
    }
}
function a0G(a) {
    const ai = a0T, b = {
            'VhPIg': 'Content-Type',
            'WXQCR': ai(0x114),
            'WoBgm': function (c, d) {
                return c === d;
            },
            'ZaQad': ai(0x2ac),
            'qqAJz': ai(0x175),
            'dIUBw': 'x-agent-version',
            'FwSeY': 'Content-Length',
            'YuPeX': ai(0x3c5),
            'OSlnM': ai(0x1ec),
            'MVTfM': function (c, d) {
                return c === d;
            },
            'YXJJI': 'websocket',
            'RCljv': function (c) {
                return c();
            },
            'OLmIi': function (c) {
                return c();
            },
            'ceyjw': ai(0xc5),
            'gQHaS': ai(0x3a6),
            'eNOwt': ai(0xf9),
            'VCxBz': ai(0x2b9),
            'jabxL': 'X-Nonce',
            'MGewK': ai(0xdf),
            'haeXF': ai(0x340),
            'eFDXI': ai(0x1b4),
            'UeCDr': ai(0x395),
            'EdwWB': function (c, d) {
                return c || d;
            },
            'TxeFf': function (c, d) {
                return c === d;
            },
            'WrADs': function (c, d) {
                return c === d;
            },
            'HibhA': ai(0x149),
            'DQUVM': ai(0x273),
            'AcmEd': ai(0x33a),
            'GGtSg': ai(0xb4),
            'NEYFO': ai(0x39c)
        };
    return async (c, d, f) => {
        const aj = ai, g = {
                'WOjyG': b[aj(0x17b)],
                'xxpUp': b['WXQCR'],
                'TpIWQ': function (j, k) {
                    const ak = aj;
                    return b[ak(0xff)](j, k);
                },
                'CeLQk': b[aj(0x116)],
                'QHiGA': b[aj(0x109)],
                'kuQEJ': b[aj(0x153)],
                'VkyFq': b[aj(0x1b5)],
                'MoiAH': b[aj(0x363)],
                'fSpPJ': 'false'
            };
        if (c['path']['startsWith'](b['OSlnM']) || b['MVTfM']((c[aj(0x1f4)][aj(0x2a9)] || '')[aj(0xb3)](), b[aj(0x16a)]))
            return b[aj(0x1af)](f);
        if (c[aj(0x20d)] === aj(0x2fa) || b[aj(0x382)](c['method'], aj(0x295)))
            return b[aj(0x3ac)](f);
        c[aj(0x3a7)] = !![];
        const h = [
            b['ceyjw'],
            b[aj(0x214)]
        ];
        if (!a0E[aj(0x1cc)] && !c[aj(0x1f4)][b[aj(0x177)]]) {
            const j = c[aj(0x1f4)][b[aj(0x397)]] || c['headers'][b[aj(0x1f0)]], k = c[aj(0x1f4)][b[aj(0x249)]] || c[aj(0x1f4)][b[aj(0x335)]], l = c[aj(0x1f4)][b[aj(0xa5)]] || c[aj(0x1f4)][b[aj(0x3bc)]];
            if (b[aj(0x2fe)](!j, !k) || !l) {
                if (h[aj(0x270)](c[aj(0xa6)]))
                    c['is_authenticated'] = ![];
                else
                    return d[aj(0x293)](0x191)['json']({ 'error': 'Missing\x20auth\x20headers' });
            }
            if (c[aj(0x3a7)])
                try {
                    a[aj(0x226)](j, k, l);
                } catch (m) {
                    if (h[aj(0x270)](c['path']))
                        c['is_authenticated'] = ![];
                    else
                        return d[aj(0x293)](0x191)['json']({ 'error': aj(0x23e) + m[aj(0x200)] });
                }
        }
        if (c['body'] && b['TxeFf'](typeof c['body'], aj(0x2ac))) {
            const n = b[aj(0xb7)]((c['headers'][b[aj(0x179)]] || '')[aj(0xb3)](), b['DQUVM']);
            try {
                if (n && c[aj(0x3a7)]) {
                    const o = Buffer[aj(0xf5)](a0E[aj(0x1a3)], b[aj(0x1a8)]), p = a[aj(0xaf)](c[aj(0xc2)], o);
                    c[aj(0xc2)] = JSON[aj(0x112)](p);
                } else {
                    if (c[aj(0xc2)][aj(0xd0)](b[aj(0x2a6)])) {
                        const q = Buffer['from'](c[aj(0xc2)], aj(0x33a))[aj(0x2d5)](b[aj(0x2ca)]);
                        c[aj(0xc2)] = JSON[aj(0x112)](q);
                    } else {
                        if (c[aj(0xc2)][aj(0x108)]()[aj(0xd0)]('{') || c[aj(0xc2)][aj(0x108)]()[aj(0xd0)]('['))
                            c[aj(0xc2)] = JSON[aj(0x112)](c[aj(0xc2)]);
                        else {
                            if (b[aj(0xff)](c['body']['trim'](), ''))
                                c['body'] = {};
                        }
                    }
                }
            } catch (r) {
                return a0u[aj(0x13b)](aj(0x2f7) + r['message']), d[aj(0x293)](0x190)[aj(0x191)]({ 'error': aj(0x1d0) + r['message'] });
            }
        }
        const i = d[aj(0x314)];
        d['send'] = function (s) {
            const al = aj;
            if (d[al(0x18f)](g[al(0x2cf)]) && d[al(0x18f)](al(0x2bf))[al(0x270)](g['xxpUp']))
                try {
                    const t = g[al(0x11f)](typeof s, g[al(0x3a3)]) ? JSON[al(0x112)](s) : s;
                    if (c['is_authenticated']) {
                        const u = a[al(0x25a)](t), v = typeof u === g[al(0x3a3)] ? u : JSON[al(0x10f)](u);
                        return !a0E[al(0x1cc)] && (d['set'](g[al(0x2e2)], al(0x273)), d[al(0x202)](g[al(0x308)], a0E[al(0x1c6)])), d[al(0x202)](g[al(0x279)], Buffer['byteLength'](v, g[al(0x2f4)])[al(0x2d5)]()), i[al(0x1aa)](this, v);
                    } else {
                        const w = typeof s === g[al(0x3a3)] ? s : JSON['stringify'](t);
                        return d['set'](al(0x175), g[al(0x337)]), d[al(0x202)]('Content-Length', Buffer[al(0x211)](w, g['MoiAH'])['toString']()), i[al(0x1aa)](this, w);
                    }
                } catch (x) {
                    if (a0E[al(0x1cc)])
                        a0u[al(0x13b)](al(0x240) + x[al(0x200)]);
                }
            return i['call'](this, s);
        }, b[aj(0x3ac)](f);
    };
}
class a0H {
    constructor() {
        const am = a0T, a = {
                'tUDOn': function (b, c) {
                    return b / c;
                }
            };
        this['lastNetworkStats'] = {
            'rx': 0x0,
            'tx': 0x0
        }, this['totalNetworkUp'] = 0x0, this[am(0x26c)] = 0x0, this[am(0x296)] = a[am(0x14e)](Date[am(0x1a0)](), 0x3e8);
    }
    async [a0T(0xb9)]() {
        const an = a0T, a = {
                'nLVeR': '/sys/fs/cgroup/memory.max',
                'eyqnA': an(0x3c5),
                'BqevR': function (d, f) {
                    return d === f;
                },
                'HqTwS': function (d, f, g) {
                    return d(f, g);
                },
                'Lzcrp': '/sys/fs/cgroup/memory/memory.usage_in_bytes',
                'baRkr': function (d, f) {
                    return d === f;
                },
                'GBUtW': function (d, f) {
                    return d(f);
                },
                'RIXYf': function (d, f) {
                    return d - f;
                }
            };
        let b = null, c = null;
        try {
            const d = (await a0i[an(0x128)](a['nLVeR'], a[an(0x3b2)]))[an(0x108)]();
            b = a[an(0x3ce)](d, an(0xcb)) ? null : a[an(0x3b8)](parseInt, d, 0xa), c = parseInt((await a0i[an(0x128)](an(0x372), a[an(0x3b2)]))[an(0x108)](), 0xa);
        } catch {
            try {
                b = parseInt((await a0i[an(0x128)](an(0x36a), a[an(0x3b2)]))['trim'](), 0xa), c = parseInt((await a0i[an(0x128)](a[an(0x192)], a[an(0x3b2)]))[an(0x108)](), 0xa);
                if (b > 0x7ffffffffffff000)
                    b = null;
            } catch {
                const f = await a0n[an(0x286)]();
                b = f[an(0x39e)], c = f[an(0x1e7)];
            }
        }
        if (a[an(0x301)](b, null)) {
            const g = await a0n[an(0x286)]();
            b = g[an(0x39e)], (a['baRkr'](c, null) || a[an(0xe3)](isNaN, c)) && (c = g[an(0x1e7)]);
        }
        return {
            'total': b,
            'used': c,
            'available': a[an(0x39a)](b, c),
            'free': b - c,
            'cached': 0x0,
            'buffers': 0x0
        };
    }
    async [a0T(0x258)]() {
        const ao = a0T, [a, b, c, d] = await Promise['all']([
                a0n[ao(0x3c3)](),
                this['getContainerMemory'](),
                a0n[ao(0x272)](),
                a0n[ao(0x197)]()
            ]);
        let f = null, g = null;
        try {
            [f, g] = await Promise[ao(0xf6)]([
                this[ao(0x106)](),
                this['getPublicIpV6']()
            ]);
        } catch (h) {
            a0u[ao(0x1ea)](ao(0x359) + h['message'], 0x1);
        }
        return {
            'arch': a0k[ao(0x22b)](),
            'cpu_cores': a[ao(0xda)],
            'cpu_name': a[ao(0x38a)],
            'disk_total': (await a0n[ao(0x34f)]())[0x0]?.[ao(0x2c4)] || 0x0,
            'gpu_name': '',
            'ipv4': f,
            'ipv6': g,
            'mem_total': b[ao(0x39e)],
            'os': c['distro'] + '\x20' + c[ao(0x168)],
            'kernel_version': c[ao(0x124)],
            'swap_total': b[ao(0x354)],
            'version': a0E[ao(0x1c6)],
            'virtualization': await this[ao(0xfd)](),
            'session_key': a0E[ao(0x1a3)],
            'noise_key': a0E['NOISE_KEY']
        };
    }
    [a0T(0x284)]() {
        const ap = a0T, a = {
                'xaXLr': function (c, d) {
                    return c === d;
                },
                'soxkS': ap(0x2a4),
                'nHcKx': function (c, d) {
                    return c === d;
                }
            }, b = a0k['networkInterfaces']();
        for (const c of Object['keys'](b)) {
            for (const d of b[c]) {
                const f = a['xaXLr'](d[ap(0x219)], a['soxkS']) || a[ap(0x3c0)](d['family'], 0x4);
                if (f && !d['internal']) {
                    if (!/^10\./[ap(0x11a)](d[ap(0x12d)]) && !/^192\.168\./[ap(0x11a)](d['address']) && !/^172\.(1[6-9]|2[0-9]|3[0-1])\./[ap(0x11a)](d[ap(0x12d)]))
                        return d[ap(0x12d)];
                }
            }
        }
        return null;
    }
    async ['getPublicIpV4']() {
        const aq = a0T, a = {
                'phMwC': aq(0x2c9),
                'WJoEs': 'https://icanhazip.com',
                'NxyrU': aq(0x29f),
                'JBbIj': aq(0x303),
                'fLmzI': aq(0x1ac),
                'rGQwo': aq(0x2fb),
                'VKCta': 'https://myexternalip.com/raw'
            }, b = [
                a[aq(0x2d1)],
                a['WJoEs'],
                a[aq(0x2ed)],
                a[aq(0xbf)],
                a[aq(0x1d2)],
                a[aq(0x1e1)],
                a[aq(0x3a8)]
            ];
        for (const d of b) {
            try {
                const f = await this[aq(0x169)](d, 0x4);
                if (f && this[aq(0x32c)](f))
                    return f;
            } catch (g) {
                continue;
            }
        }
        const c = this[aq(0x284)]();
        if (c && this[aq(0x32c)](c))
            return c;
        return null;
    }
    [a0T(0x150)]() {
        const ar = a0T, a = {
                'yurWB': 'IPv6',
                'nhVZg': function (c, d) {
                    return c === d;
                },
                'lCZur': 'fe80:'
            }, b = a0k['networkInterfaces']();
        for (const c of Object[ar(0xce)](b)) {
            for (const d of b[c]) {
                const f = d['family'] === a['yurWB'] || a[ar(0x290)](d[ar(0x219)], 0x6);
                if (f && !d['internal']) {
                    if (!d[ar(0x12d)]['toLowerCase']()[ar(0xd0)](a[ar(0x242)]))
                        return d['address'];
                }
            }
        }
        return null;
    }
    async [a0T(0x3b3)]() {
        const as = a0T, a = {
                'XZHHw': 'https://api6.ipify.org',
                'bQDSx': as(0x120),
                'IhrJq': 'https://v6.ident.me'
            }, b = this[as(0x150)]();
        if (b && this[as(0x24d)](b))
            return b;
        const c = [
            a[as(0xc7)],
            a['bQDSx'],
            a[as(0x1ae)]
        ];
        for (const d of c) {
            try {
                const f = await this[as(0x169)](d, 0x6);
                if (f && this[as(0x24d)](f))
                    return f;
            } catch (g) {
                a0u['debug'](as(0x23b) + d + '\x20失败:\x20' + g[as(0x200)]);
                continue;
            }
        }
        return null;
    }
    async [a0T(0x169)](a, b = 0x0) {
        const at = a0T, c = {
                'MdwoA': function (d, f) {
                    return d(f);
                },
                'ZyMVn': 'data',
                'VjzPw': at(0xef),
                'NJmWL': function (d, f) {
                    return d(f);
                },
                'rzEGW': at(0x3a4)
            };
        return new Promise((d, f) => {
            const au = at, g = {
                    'jsZSp': function (k, l) {
                        return k !== l;
                    },
                    'Lpwjn': function (k, l) {
                        return c['MdwoA'](k, l);
                    },
                    'IMReL': c[au(0x31e)],
                    'NwSHO': c[au(0x2e3)]
                }, h = c['NJmWL'](require, c['rzEGW']), i = {
                    'timeout': 0x1388,
                    'family': b,
                    'headers': { 'Accept': au(0x245) }
                }, j = h[au(0x18f)](a, i, k => {
                    const av = au;
                    let l = '';
                    if (g[av(0x370)](k[av(0xf1)], 0xc8)) {
                        g['Lpwjn'](f, new Error(av(0x36b) + k[av(0xf1)]));
                        return;
                    }
                    k['on'](g[av(0x309)], m => l += m), k['on'](g[av(0x24c)], () => d(l[av(0x108)]()));
                });
            j['on'](au(0x13b), f), j[au(0xcd)](0x1388, () => {
                const aw = au;
                j['destroy'](), c[aw(0x35c)](f, new Error(aw(0x3b0)));
            });
        });
    }
    ['isValidIPv4'](a) {
        const ax = a0T;
        return /^(\d{1,3}\.){3}\d{1,3}$/[ax(0x11a)](a);
    }
    ['isValidIPv6'](a) {
        const ay = a0T;
        if (!/^[0-9a-fA-F:]+$/['test'](a) || !a['includes'](':'))
            return ![];
        if (/^(fe[89ab]|f[cd]|::1$|::$)/i[ay(0x11a)](a))
            return ![];
        return !![];
    }
    async ['getRealtimeInfo']() {
        const az = a0T, a = {
                'vSqVJ': function (m, n) {
                    return m / n;
                },
                'WETAZ': function (m, n) {
                    return m - n;
                },
                'cgXGQ': function (m, n) {
                    return m - n;
                },
                'MzgFP': function (m, n) {
                    return m / n;
                },
                'lnAJX': function (m, n) {
                    return m / n;
                },
                'pDCvH': function (m, n) {
                    return m * n;
                },
                'uoCjz': function (m, n) {
                    return m / n;
                }
            }, [b, c, d, f] = await Promise[az(0xf6)]([
                a0n[az(0x28b)](),
                a0n[az(0x286)](),
                a0n['networkStats'](),
                a0n[az(0x28b)]()
            ]), g = d[0x0] || {
                'tx_bytes': 0x0,
                'rx_bytes': 0x0
            }, h = a[az(0x339)](Date['now'](), 0x3e8), i = h - this[az(0x296)], j = a[az(0x36f)](g[az(0xd8)], this[az(0xa8)]['tx']), k = a[az(0x18e)](g[az(0x1e6)], this[az(0xa8)]['rx']);
        this['totalNetworkUp'] += j, this[az(0x26c)] += k, this['lastNetworkStats'] = {
            'tx': g[az(0xd8)],
            'rx': g[az(0x1e6)]
        }, this[az(0x296)] = h;
        const l = await a0n[az(0x248)]();
        return {
            'cpu': { 'usage': Math['round'](b['currentLoad']) },
            'ram': {
                'total': c[az(0x39e)],
                'used': c[az(0x1bd)]
            },
            'swap': {
                'total': c[az(0x354)],
                'used': c[az(0xd5)]
            },
            'load': {
                'load1': a[az(0x339)](Math[az(0x267)](f[az(0x1df)] * 0x64), 0x64),
                'load5': a[az(0x378)](Math[az(0x267)](f[az(0x1df)] * 0x64), 0x64),
                'load15': a['lnAJX'](Math['round'](a[az(0x265)](f['avgLoad'], 0x64)), 0x64)
            },
            'disk': await this['_getDiskInfo'](),
            'network': {
                'up': Math[az(0x267)](a[az(0x35b)](j, i)),
                'down': Math[az(0x267)](a[az(0x113)](k, i)),
                'totalUp': this[az(0x143)],
                'totalDown': this[az(0x26c)]
            },
            'connections': await this[az(0xc8)](),
            'uptime': a0k[az(0x15a)](),
            'process': l?.[az(0xf6)] || 0x0,
            'message': ''
        };
    }
    async [a0T(0xfd)]() {
        const aA = a0T, a = {
                'xVSWX': '/.dockerenv',
                'GOxWq': 'Docker',
                'YYOnh': '/run/.containerenv',
                'RBaBQ': '/proc/1/cgroup',
                'xEPep': 'utf8',
                'YoykM': aA(0x11d),
                'eCHri': aA(0x2eb),
                'lshVl': aA(0x19d),
                'Bcbxw': aA(0xa0),
                'FxoYI': 'LXC',
                'IIBgc': '/proc/self/mountinfo',
                'GkNBJ': '/docker/containers/',
                'fmDRN': aA(0xe0),
                'PILpw': 'kubelet',
                'FvBxI': 'Kubernetes',
                'jDHBT': aA(0x189),
                'XFPZq': aA(0x361),
                'JdcNN': aA(0x12c),
                'BaUtS': aA(0x384)
            };
        try {
            if (a0h['existsSync'](a['xVSWX']))
                return a[aA(0x29e)];
            if (a0h[aA(0x1fb)](a[aA(0x1ed)]))
                return aA(0x16b);
            if (a0h[aA(0x1fb)]('/proc/1/cgroup')) {
                const b = a0h[aA(0x3bb)](a[aA(0x1b7)], a[aA(0x36d)])[aA(0xb3)]();
                if (b[aA(0x270)](a[aA(0x2a5)]) || b['includes'](a[aA(0x2e6)]))
                    return a[aA(0x29e)];
                else {
                    if (b['includes'](a[aA(0x193)]))
                        return aA(0x278);
                    else {
                        if (b['includes'](a[aA(0x12b)]))
                            return a[aA(0x317)];
                    }
                }
            }
            if (a0h[aA(0x1fb)](a['IIBgc'])) {
                const c = a0h[aA(0x3bb)](a['IIBgc'], a[aA(0x36d)]);
                if (c[aA(0x270)](a['GkNBJ']) || c[aA(0x270)](aA(0x2e8)))
                    return a[aA(0x29e)];
                else {
                    if (c[aA(0x270)](a[aA(0x2b3)]) || c['includes'](a[aA(0x10d)]))
                        return a[aA(0x1d5)];
                }
            }
            if (a0h[aA(0x1fb)](a[aA(0x1f9)])) {
                const d = a0h[aA(0x3bb)](aA(0x189), a['xEPep']);
                if (d[aA(0x270)](a['XFPZq']))
                    return 'LXC';
            }
            if (a0h[aA(0x1fb)](a[aA(0x122)])) {
                const f = a0h[aA(0x3bb)](a['JdcNN'], a['xEPep']);
                if (f[aA(0x270)](a[aA(0x32a)]) || f[aA(0x270)](aA(0x18b)))
                    return a[aA(0x32a)];
            }
        } catch (g) {
        }
        return aA(0x1d7);
    }
    async [a0T(0x271)]() {
        const aB = a0T, a = {
                'pefNN': function (b, c) {
                    return b > c;
                },
                'MGzQR': function (b, c) {
                    return b !== c;
                }
            };
        try {
            const b = await a0n[aB(0x34f)](), c = b[aB(0x1ad)](g => {
                    const aC = aB;
                    return a[aC(0x375)](g['size'], 0x0) && a[aC(0xe2)](g['type'], aC(0x1a4)) && a[aC(0xe2)](g[aC(0x18a)], aC(0x27d)) && g['fs']['startsWith']('/dev/');
                }), d = c[aB(0x20a)]((g, h) => g + h[aB(0x2c4)], 0x0), f = c[aB(0x20a)]((g, h) => g + h['used'], 0x0);
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
    async [a0T(0xc8)]() {
        const aD = a0T;
        try {
            const a = await a0n[aD(0x163)](), b = a['filter'](d => d['protocol'] === aD(0x129))['length'], c = a['filter'](d => d['protocol'] === aD(0x269))[aD(0x259)];
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
    static async [a0T(0x2b5)](a, b = {}) {
        const aE = a0T, c = {
                'RnlvO': function (d, f) {
                    return d - f;
                },
                'ICdWa': function (d, f) {
                    return d || f;
                },
                'wfkne': function (d, f, g, h) {
                    return d(f, g, h);
                },
                'lgNfL': function (d, f) {
                    return d * f;
                }
            }, {
                cwd: cwd = process[aE(0xb2)](),
                env: env = {},
                timeout: timeout = a0E[aE(0x298)]
            } = b;
        return new Promise(d => {
            const aF = aE, f = Date['now'](), g = c[aF(0x14a)](a0l, a, {
                    'cwd': cwd,
                    'env': {
                        ...process.env,
                        ...env
                    },
                    'timeout': timeout * 0x3e8,
                    'maxBuffer': c['lgNfL'](0xa, 0x400) * 0x400
                }, (h, i, j) => {
                    const aG = aF, k = c['RnlvO'](Date[aG(0x1a0)](), f), l = h && h[aG(0x2fd)] && h[aG(0x2d7)];
                    let m = c[aG(0x312)](i, '');
                    if (j)
                        m += j;
                    let n = 0x0;
                    if (h) {
                        if (l)
                            n = 0x7c;
                        else
                            typeof h[aG(0x324)] === aG(0x1ab) ? n = h[aG(0x324)] : n = -0x1;
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
class a0J {
    static async ['listFiles'](a, b = ![]) {
        const aH = a0T, c = {
                'zRHmY': 'directory',
                'CahLM': 'file',
                'tRAjM': function (h, i) {
                    return h & i;
                },
                'wyYfw': function (h, i) {
                    return h(i);
                },
                'LjIla': function (h, i) {
                    return h || i;
                },
                'TkXMK': function (h, i) {
                    return h(i);
                }
            }, d = a0j[aH(0x23f)](a0E[aH(0xad)], c[aH(0x264)](a, '.'));
        if (!d[aH(0xd0)](a0E[aH(0xad)]))
            throw new Error(aH(0x15e));
        if (!a0h[aH(0x1fb)](d))
            throw new Error('Path\x20not\x20found');
        const f = [], g = h => {
                const aI = aH, i = a0h[aI(0x3a9)](h);
                for (const j of i) {
                    const k = a0j['join'](h, j), l = a0h[aI(0xf0)](k), m = new a0A();
                    m[aI(0x369)] = j, m['path'] = a0j[aI(0x1be)](a0E[aI(0xad)], k), m[aI(0x18a)] = l['isDirectory']() ? c[aI(0x28d)] : c[aI(0x2f0)], m[aI(0x2c4)] = l['size'], m[aI(0x212)] = l['mtime'][aI(0x287)](), m[aI(0x11b)] = this[aI(0x16c)](l[aI(0x11b)], l['isDirectory']()), m[aI(0x1ef)] = '0o' + c[aI(0x1fe)](l['mode'], 0x1ff)[aI(0x2d5)](0x8), m[aI(0x2a0)] = l[aI(0x19b)] + ':' + l[aI(0x322)], f['push'](m), b && l[aI(0x37d)]() && c[aI(0x39d)](g, k);
                }
            };
        return c['TkXMK'](g, d), f;
    }
    static async [a0T(0x17a)](a) {
        const aJ = a0T, b = {
                'IYCpR': function (d, f) {
                    return d & f;
                },
                'oAZym': aJ(0x111)
            }, c = [];
        for (const d of a) {
            const f = a0j[aJ(0x23f)](a0E[aJ(0xad)], d);
            if (!f[aJ(0xd0)](a0E[aJ(0xad)]))
                continue;
            try {
                const g = a0h[aJ(0xf0)](f), h = this[aJ(0x11e)](f, a0h[aJ(0x132)][aJ(0xd9)]), i = this[aJ(0x11e)](f, a0h[aJ(0x132)][aJ(0x276)]), j = this[aJ(0x11e)](f, a0h['constants'][aJ(0x227)]), k = new a0B();
                k[aJ(0xa6)] = a0j['relative'](a0E[aJ(0xad)], f), k[aJ(0x369)] = a0j[aJ(0x2cc)](f), k[aJ(0x11b)] = this[aJ(0x16c)](g[aJ(0x11b)], g[aJ(0x37d)]()), k[aJ(0x1ef)] = '0o' + b[aJ(0x237)](g['mode'], 0x1ff)[aJ(0x2d5)](0x8), k[aJ(0x18a)] = g[aJ(0x37d)]() ? b[aJ(0x289)] : aJ(0x3cd), k[aJ(0x2f1)] = h, k[aJ(0x34a)] = i, k[aJ(0x25f)] = j, c['push'](k);
            } catch (l) {
            }
        }
        return c;
    }
    static [a0T(0x11e)](a, b) {
        const aK = a0T;
        try {
            return a0h[aK(0x31f)](a, b), !![];
        } catch {
            return ![];
        }
    }
    static [a0T(0x2d0)](a) {
        const aL = a0T, b = {
                'dRlMs': function (c, d) {
                    return c === d;
                },
                'sdCFj': 'number',
                'AIKgB': function (c, d) {
                    return c === d;
                }
            };
        if (b[aL(0x29d)](typeof a, b[aL(0x2a2)]))
            return a;
        if (b[aL(0x376)](typeof a, aL(0x2ac))) {
            const c = a[aL(0x108)]();
            if (/^[0-7]{3,4}$/[aL(0x11a)](c))
                return parseInt(c, 0x8);
        }
        throw new Error(aL(0x1dc));
    }
    static [a0T(0x16c)](a, b) {
        const aM = a0T, c = {
                'NQmnx': function (i, j) {
                    return i & j;
                },
                'vzXRo': function (i, j, k) {
                    return i(j, k);
                }
            }, d = b ? 'd' : '-', f = [
                'r',
                'w',
                'x'
            ], g = c[aM(0x1eb)](a, 0x1ff)[aM(0x2d5)](0x8)[aM(0x1f6)](0x3, '0');
        let h = d;
        for (const i of g) {
            const j = c[aM(0x1c7)](parseInt, i, 0xa);
            h += f['map']((k, l) => j & 0x4 >> l ? k : '-')[aM(0xaa)]('');
        }
        return h;
    }
    static async [a0T(0x217)](a, b = ![]) {
        const aN = a0T, c = {
                'TAtIe': function (g, h) {
                    return g(h);
                },
                'zHUyL': function (g, h) {
                    return g(h);
                },
                'MSEKM': function (g, h) {
                    return g(h);
                },
                'eRIvs': function (g, h) {
                    return g(h);
                },
                'QJTfu': aN(0x13b)
            }, d = [];
        for (const [g, h] of Object[aN(0x23d)](a)) {
            const i = a0j[aN(0x23f)](a0E[aN(0xad)], g);
            if (!i['startsWith'](a0E[aN(0xad)])) {
                d[aN(0xde)]({
                    'path': g,
                    'requested': c[aN(0x119)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': aN(0x121)
                });
                continue;
            }
            try {
                const j = this['_parseMode'](h), k = m => {
                        const aO = aN;
                        a0h[aO(0x155)](m, j);
                    };
                if (b && a0h[aN(0x1fb)](i) && a0h[aN(0xf0)](i)[aN(0x37d)]()) {
                    const m = n => {
                        const aP = aN;
                        c[aP(0x156)](k, n);
                        const o = a0h[aP(0x3a9)](n);
                        for (const p of o) {
                            const q = a0j[aP(0xaa)](n, p);
                            a0h[aP(0xf0)](q)[aP(0x37d)]() ? c[aP(0x1c4)](m, q) : c[aP(0x119)](k, q);
                        }
                    };
                    c[aN(0x156)](m, i);
                } else
                    c[aN(0x119)](k, i);
                const l = j[aN(0x2d5)](0x8);
                d['push']({
                    'path': g,
                    'requested': String(h),
                    'applied': l,
                    'mode_octal': '0o' + l,
                    'status': 'ok'
                });
            } catch (n) {
                d[aN(0xde)]({
                    'path': g,
                    'requested': c[aN(0xbc)](String, h),
                    'applied': '',
                    'mode_octal': '',
                    'status': c[aN(0x357)],
                    'message': n[aN(0x200)]
                });
            }
        }
        const f = d[aN(0x1ad)](o => o[aN(0x293)] === 'ok')[aN(0x259)];
        return {
            'status': 'ok',
            'total': d[aN(0x259)],
            'success': f,
            'results': d
        };
    }
    static async [a0T(0x128)](a) {
        const aQ = a0T, b = {
                'YIaFS': aQ(0x15e),
                'BKGvq': function (h, i) {
                    return h > i;
                },
                'XdwON': function (h, i) {
                    return h * i;
                },
                'RXMAL': 'File\x20too\x20large',
                'LAAwk': aQ(0x3c5),
                'bfmkA': aQ(0x39c)
            }, c = a0j[aQ(0x23f)](a0E['FILE_ROOT'], a);
        if (!c[aQ(0xd0)](a0E[aQ(0xad)]))
            throw new Error(b['YIaFS']);
        const d = a0h[aQ(0xf0)](c);
        if (b['BKGvq'](d['size'], b[aQ(0x27f)](0x400, 0x400)))
            throw new Error(b[aQ(0x2e5)]);
        const f = a0h[aQ(0x3bb)](c), g = this['_isBinary'](f);
        return {
            'status': 'ok',
            'path': a0j[aQ(0x1be)](a0E['FILE_ROOT'], c),
            'content': g ? a0p[aQ(0x2df)](f) : f['toString'](b['LAAwk']),
            'encoding': g ? aQ(0x33a) : b[aQ(0x22c)],
            'is_binary': g,
            'size': d[aQ(0x2c4)]
        };
    }
    static [a0T(0x313)](a) {
        const aR = a0T, b = {
                'Tguci': function (c, d) {
                    return c < d;
                },
                'pTGcJ': function (c, d) {
                    return c === d;
                }
            };
        if (!a || a[aR(0x259)] === 0x0)
            return ![];
        for (let c = 0x0; b['Tguci'](c, Math[aR(0x315)](a[aR(0x259)], 0x200)); c++) {
            if (b['pTGcJ'](a[c], 0x0))
                return !![];
        }
        return ![];
    }
    static async [a0T(0x103)](a, b, c, d = null, f = null) {
        const aS = a0T, g = {
                'DuZJZ': function (l, m) {
                    return l > m;
                },
                'BZDik': function (l, m) {
                    return l !== m;
                },
                'nEbJE': function (l, m) {
                    return l(m);
                },
                'jwKKf': 'chunk_id\x20and\x20total_chunks\x20must\x20be\x20numeric',
                'RLSBM': aS(0x28f),
                'UiOyy': function (l, m) {
                    return l === m;
                }
            }, h = a0j['resolve'](a0E['FILE_ROOT'], a);
        let j = h;
        b && (j = a0j['join'](h, b));
        if (!j[aS(0xd0)](a0E[aS(0xad)]))
            throw new Error(aS(0x15e));
        !a0h[aS(0x1fb)](a0j[aS(0x330)](j)) && a0h[aS(0x342)](a0j[aS(0x330)](j), { 'recursive': !![] });
        const k = a0p[aS(0x1fa)](c);
        if (g[aS(0x329)](k[aS(0x259)], a0E['MAX_UPLOAD_SIZE']))
            throw new Error(aS(0x2f8));
        if (g[aS(0xfc)](d, null) && g[aS(0xfc)](f, null)) {
            const l = g['nEbJE'](Number, d), m = Number(f);
            if (Number[aS(0x1ca)](l) || Number[aS(0x1ca)](m))
                throw new Error(g[aS(0x159)]);
            const n = a0j[aS(0xaa)](a0j[aS(0x330)](j), g[aS(0x3c8)], a0j[aS(0x2cc)](j));
            !a0h[aS(0x1fb)](n) && a0h[aS(0x342)](n, { 'recursive': !![] });
            const o = a0j[aS(0xaa)](n, aS(0x2ce) + l);
            a0h['writeFileSync'](o, k);
            const p = a0h['readdirSync'](n)['filter'](s => s['startsWith'](aS(0x2ce))), q = p[aS(0x259)], r = g[aS(0x19e)](q, m);
            if (r) {
                const s = a0h[aS(0x1bf)](j);
                for (let t = 0x0; t < m; t++) {
                    const u = a0j[aS(0xaa)](n, aS(0x2ce) + t);
                    if (!a0h[aS(0x1fb)](u)) {
                        s['close']();
                        throw new Error(aS(0x3cc) + t);
                    }
                    s[aS(0x216)](a0h[aS(0x3bb)](u));
                }
                s[aS(0xef)]();
                for (const v of a0h['readdirSync'](n)) {
                    a0h['unlinkSync'](a0j[aS(0xaa)](n, v));
                }
                a0h[aS(0x38c)](n, {
                    'recursive': !![],
                    'force': !![]
                });
            }
            return {
                'status': 'ok',
                'path': a0j[aS(0x1be)](a0E[aS(0xad)], j),
                'received': q,
                'total': m,
                'chunked': !![]
            };
        }
        return a0h[aS(0x151)](j, k), {
            'status': 'ok',
            'path': a0j[aS(0x1be)](a0E[aS(0xad)], j),
            'received': k[aS(0x259)],
            'total': k[aS(0x259)],
            'chunked': ![]
        };
    }
    static async [a0T(0x141)](a, b, c, d = null, f = null) {
        const aT = a0T, g = {
                'Ovgqn': function (k, l) {
                    return k || l;
                },
                'HyDrM': 'Access\x20denied:\x20path\x20outside\x20root',
                'KATzR': function (k, l) {
                    return k > l;
                },
                'Ioddq': aT(0x2f8),
                'cKoyx': function (k, l) {
                    return k !== l;
                },
                'nukKE': function (k, l) {
                    return k(l);
                },
                'zlXAH': function (k, l) {
                    return k(l);
                },
                'hzIzl': aT(0x32f),
                'zCmWh': aT(0x28f),
                'PIguf': function (k, l) {
                    return k === l;
                },
                'dcQNZ': function (k, l) {
                    return k < l;
                },
                'RQvTf': 'All\x20chunks\x20received.\x20File\x20merged\x20successfully.'
            }, h = a0j[aT(0x23f)](a0E[aT(0xad)], g[aT(0x388)](a, '.'));
        let j = h;
        b && (j = a0j[aT(0xaa)](h, b));
        if (!j[aT(0xd0)](a0E[aT(0xad)]))
            throw new Error(g['HyDrM']);
        !a0h[aT(0x1fb)](a0j[aT(0x330)](j)) && a0h[aT(0x342)](a0j[aT(0x330)](j), { 'recursive': !![] });
        if (g[aT(0x14d)](c[aT(0x259)], a0E[aT(0x2ee)]))
            throw new Error(g[aT(0x205)]);
        if (g['cKoyx'](d, null) && g[aT(0x257)](f, null)) {
            const k = g[aT(0x13f)](Number, d), l = g['zlXAH'](Number, f);
            if (Number[aT(0x1ca)](k) || Number['isNaN'](l))
                throw new Error(g[aT(0x2b1)]);
            const m = a0j['join'](a0j['dirname'](j), g['zCmWh'], a0j['basename'](j));
            !a0h[aT(0x1fb)](m) && a0h[aT(0x342)](m, { 'recursive': !![] });
            const n = a0j['join'](m, aT(0x2ce) + k);
            a0h[aT(0x151)](n, c);
            const o = a0h[aT(0x3a9)](m)[aT(0x1ad)](r => r['startsWith']('chunk_')), p = o[aT(0x259)], q = g[aT(0x1e3)](p, l);
            if (q) {
                const r = [];
                for (let s = 0x0; g[aT(0x2ea)](s, l); s++) {
                    const t = a0j[aT(0xaa)](m, 'chunk_' + s);
                    if (!a0h['existsSync'](t))
                        throw new Error('Missing\x20chunk\x20' + s);
                    r[aT(0xde)](a0h[aT(0x3bb)](t));
                }
                a0h[aT(0x151)](j, Buffer[aT(0x373)](r));
                for (const u of a0h[aT(0x3a9)](m)) {
                    a0h[aT(0x391)](a0j['join'](m, u));
                }
                return a0h[aT(0x38c)](m, {
                    'recursive': !![],
                    'force': !![]
                }), {
                    'status': 'ok',
                    'path': a0j['relative'](a0E['FILE_ROOT'], j),
                    'chunk_id': k,
                    'completed': !![],
                    'message': g[aT(0x1b9)]
                };
            }
            return {
                'status': 'ok',
                'path': a0j[aT(0x1be)](a0E[aT(0xad)], j),
                'chunk_id': k,
                'completed': ![],
                'message': 'Chunk\x20' + k + aT(0x1a1)
            };
        }
        return a0h['writeFileSync'](j, c), {
            'status': 'ok',
            'path': a0j['relative'](a0E['FILE_ROOT'], j),
            'chunk_id': 0x0,
            'completed': !![],
            'message': aT(0xe1)
        };
    }
    static async ['downloadFile'](a) {
        const aU = a0T, b = { 'WclZC': aU(0x15e) }, c = a0j[aU(0x23f)](a0E[aU(0xad)], a);
        if (!c[aU(0xd0)](a0E[aU(0xad)]))
            throw new Error(b[aU(0x2e9)]);
        if (!a0h[aU(0x1fb)](c))
            throw new Error(aU(0x18c));
        const d = a0h[aU(0xf0)](c), f = a0h[aU(0x3bb)](c), g = a0p[aU(0x2df)](f);
        return {
            'path': a0j[aU(0x1be)](a0E[aU(0xad)], c),
            'content': g,
            'size': d[aU(0x2c4)]
        };
    }
    static async ['deleteFiles'](a) {
        const aV = a0T, b = {
                'vcczY': aV(0x121),
                'JEeQD': 'deleted'
            }, c = [];
        for (const d of a) {
            const f = a0j[aV(0x23f)](a0E[aV(0xad)], d);
            if (!f[aV(0xd0)](a0E[aV(0xad)])) {
                c[aV(0xde)]({
                    'path': d,
                    'status': b[aV(0x255)]
                });
                continue;
            }
            try {
                if (a0h['existsSync'](f)) {
                    const g = a0h['statSync'](f);
                    g['isDirectory']() ? a0h[aV(0x38c)](f, {
                        'recursive': !![],
                        'force': !![]
                    }) : a0h[aV(0x391)](f), c['push']({
                        'path': d,
                        'status': b[aV(0xdd)]
                    });
                } else
                    c['push']({
                        'path': d,
                        'status': 'not_found'
                    });
            } catch (h) {
                c['push']({
                    'path': d,
                    'status': 'error',
                    'message': h[aV(0x200)]
                });
            }
        }
        return c;
    }
    static async [a0T(0x283)](a) {
        const aW = a0T, b = { 'oZAWD': aW(0x13b) }, c = [];
        for (const [d, f] of Object[aW(0x23d)](a)) {
            const g = a0j[aW(0x23f)](a0E['FILE_ROOT'], d), h = a0j[aW(0x23f)](a0E[aW(0xad)], f);
            if (!g[aW(0xd0)](a0E[aW(0xad)]) || !h[aW(0xd0)](a0E['FILE_ROOT'])) {
                c[aW(0xde)]({
                    'from': d,
                    'to': f,
                    'status': aW(0x121)
                });
                continue;
            }
            try {
                const i = a0j[aW(0x330)](h);
                !a0h[aW(0x1fb)](i) && a0h[aW(0x342)](i, { 'recursive': !![] }), a0h[aW(0x2c3)](g, h), c[aW(0xde)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (j) {
                c[aW(0xde)]({
                    'from': d,
                    'to': f,
                    'status': b[aW(0x1a2)],
                    'message': j['message']
                });
            }
        }
        return c;
    }
    static async [a0T(0x31b)](a) {
        const aX = a0T, b = {
                'Ydzei': aX(0x121),
                'okFBL': function (d, f, g) {
                    return d(f, g);
                },
                'iGNSJ': aX(0x13b)
            }, c = [];
        for (const [d, f] of Object[aX(0x23d)](a)) {
            const g = a0j['resolve'](a0E[aX(0xad)], d), h = a0j['resolve'](a0E[aX(0xad)], f);
            if (!g['startsWith'](a0E[aX(0xad)]) || !h[aX(0xd0)](a0E[aX(0xad)])) {
                c['push']({
                    'from': d,
                    'to': f,
                    'status': b['Ydzei']
                });
                continue;
            }
            try {
                if (!a0h[aX(0x1fb)](g)) {
                    c[aX(0xde)]({
                        'from': d,
                        'to': f,
                        'status': 'not_found'
                    });
                    continue;
                }
                const i = a0j[aX(0x330)](h);
                !a0h['existsSync'](i) && a0h['mkdirSync'](i, { 'recursive': !![] });
                const j = a0h['statSync'](g);
                if (j[aX(0x37d)]()) {
                    if (a0h['cpSync'])
                        a0h[aX(0x247)](g, h, { 'recursive': !![] });
                    else {
                        const k = (l, m) => {
                            const aY = aX;
                            if (a0h[aY(0xf0)](l)[aY(0x37d)]()) {
                                if (!a0h[aY(0x1fb)](m))
                                    a0h[aY(0x342)](m, { 'recursive': !![] });
                                for (const n of a0h[aY(0x3a9)](l)) {
                                    k(a0j[aY(0xaa)](l, n), a0j['join'](m, n));
                                }
                            } else
                                a0h[aY(0x20f)](l, m);
                        };
                        b[aX(0x22d)](k, g, h);
                    }
                } else
                    a0h[aX(0x20f)](g, h);
                c[aX(0xde)]({
                    'from': d,
                    'to': f,
                    'status': 'ok'
                });
            } catch (l) {
                c[aX(0xde)]({
                    'from': d,
                    'to': f,
                    'status': b[aX(0x31a)],
                    'message': l['message']
                });
            }
        }
        return c;
    }
    static async [a0T(0x336)](a) {
        const aZ = a0T, b = a0j[aZ(0x23f)](a0E[aZ(0xad)], a);
        if (!b[aZ(0xd0)](a0E[aZ(0xad)]))
            throw new Error(aZ(0x15e));
        return a0h['mkdirSync'](b, { 'recursive': !![] }), {
            'status': 'ok',
            'path': a0j['relative'](a0E[aZ(0xad)], b)
        };
    }
}
class a0K {
    static [a0T(0x22a)] = new Map();
    static [a0T(0x33b)](a, b) {
        const b0 = a0T, c = {
                'pegKP': function (d, f) {
                    return d > f;
                },
                'qiDiI': function (d, f) {
                    return d - f;
                }
            };
        a['push'](b), c[b0(0x9c)](a['length'], a0E[b0(0x3c4)]) && a[b0(0x30c)](0x0, c[b0(0x393)](a[b0(0x259)], a0E[b0(0x3c4)]));
    }
    static [a0T(0x208)](a, b, c, d, f = null) {
        const b1 = a0T, g = new Date()[b1(0x287)]();
        return {
            'ts': g,
            'cmd': a,
            'output': b,
            'exitcode': c,
            'type': d,
            'cron': f,
            'formatted': g + b1(0x2d4) + a + b1(0x349) + c + '\x0a' + (b?.[b1(0x108)]() || '')
        };
    }
    static [a0T(0x24e)]() {
        const b2 = a0T;
        return {
            'status': 'ok',
            'count': a0E[b2(0x3ad)]['length'],
            'tasks': a0E[b2(0x3ad)]
        };
    }
    static async [a0T(0x152)](a) {
        const b3 = a0T, b = {
                'JgvXE': function (d, f) {
                    return d < f;
                },
                'hitng': b3(0x22e),
                'inCOB': b3(0x13b)
            };
        a0E[b3(0x3ad)] = a || [], a0E[b3(0x26e)] = !![];
        const c = [];
        for (let d = 0x0; b[b3(0x34c)](d, a0E[b3(0x3ad)][b3(0x259)]); d++) {
            const f = a0E[b3(0x3ad)][d], g = await a0I[b3(0x2b5)](f), h = this[b3(0x208)](f, g[b3(0x21f)], g[b3(0x1c8)], b[b3(0x171)]);
            this[b3(0x33b)](a0E['onetimetasks_log'], h), c[b3(0xde)]({
                'index': d,
                'cmd': f,
                'exitcode': g[b3(0x1c8)],
                'output': g[b3(0x21f)],
                'status': g[b3(0x1c8)] === 0x0 ? 'ok' : b['inCOB']
            });
        }
        return a0E['InitTask'] = ![], {
            'status': 'ok',
            'count': a0E['onetasks'][b3(0x259)],
            'tasks': a0E[b3(0x3ad)],
            'executed': c
        };
    }
    static ['getCronTasks']() {
        const b4 = a0T;
        return {
            'status': 'ok',
            'count': Object['keys'](a0E['crontasks'])['length'],
            'tasks': a0E[b4(0x1dd)]
        };
    }
    static [a0T(0x144)](a) {
        const b5 = a0T, b = {
                'Ionde': function (d, f) {
                    return d === f;
                },
                'SVFFd': b5(0x338),
                'dNoBR': function (d, f) {
                    return d === f;
                },
                'BLIYU': 'cron',
                'QBvYp': function (d, f) {
                    return d || f;
                },
                'QZuiy': function (d, f) {
                    return d > f;
                },
                'jorDj': b5(0x13b),
                'XvsJD': function (d, f) {
                    return d > f;
                }
            };
        this[b5(0x22a)]['forEach'](d => {
            const b6 = b5;
            b['Ionde'](typeof d['stop'], b[b6(0x2cb)]) && d[b6(0x2bc)](), b[b6(0x1b1)](typeof d[b6(0x2f6)], b6(0x338)) && d[b6(0x2f6)]();
        }), this[b5(0x22a)][b5(0x13d)]();
        const c = [];
        for (const d of Object[b5(0xce)](b[b5(0x2b4)](a, {}))) {
            !a0m[b5(0x1c5)](d) && c['push'](d);
        }
        if (b[b5(0x3b4)](c[b5(0x259)], 0x0))
            return {
                'status': b['jorDj'],
                'message': b5(0x10c) + c[b5(0xaa)](',\x20'),
                'valid_count': Object['keys'](a || {})[b5(0x259)] - c[b5(0x259)]
            };
        a0E['crontasks'] = a || {};
        for (const [f, g] of Object[b5(0x23d)](a0E['crontasks'])) {
            const h = a0m[b5(0x26a)](f, async () => {
                const b7 = b5, i = await a0I[b7(0x2b5)](g), j = this['_formatLogEntry'](g, i['result'], i[b7(0x1c8)], b[b7(0x26f)], f);
                this[b7(0x33b)](a0E[b7(0x148)], j);
            });
            this[b5(0x22a)][b5(0x202)](f, h);
        }
        return a0E[b5(0x3a1)] = b['XvsJD'](Object[b5(0xce)](a0E[b5(0x1dd)])[b5(0x259)], 0x0), {
            'status': 'ok',
            'count': Object['keys'](a0E[b5(0x1dd)])[b5(0x259)],
            'tasks': a0E[b5(0x1dd)]
        };
    }
    static [a0T(0x23c)]() {
        const b8 = a0T;
        return {
            'onetime': {
                'pending': a0E['InitTask'],
                'count': a0E['onetasks'][b8(0x259)]
            },
            'cron': {
                'active': a0E[b8(0x3a1)],
                'count': Object[b8(0xce)](a0E[b8(0x1dd)])[b8(0x259)],
                'check_interval': a0E[b8(0x19c)]
            }
        };
    }
    static [a0T(0x140)](a = 0x32) {
        const b9 = a0T, b = a0E[b9(0x12f)]['slice'](-a);
        return {
            'status': 'ok',
            'count': b[b9(0x259)],
            'logs': b
        };
    }
    static [a0T(0xd3)](a = 0x32) {
        const ba = a0T, b = a0E[ba(0x148)][ba(0x3ba)](-a);
        return {
            'status': 'ok',
            'count': b[ba(0x259)],
            'logs': b
        };
    }
    static ['clearOnetimeLogs']() {
        const bb = a0T, a = { 'VHdhE': bb(0x22e) }, b = a0E[bb(0x12f)][bb(0x259)];
        return a0E[bb(0x12f)] = [], {
            'status': 'ok',
            'cleared': a[bb(0x323)]
        };
    }
    static ['clearCronLogs']() {
        const bc = a0T, a = { 'BPLtR': bc(0x154) }, b = a0E[bc(0x148)][bc(0x259)];
        return a0E[bc(0x148)] = [], {
            'status': 'ok',
            'cleared': a[bc(0x2ec)]
        };
    }
    static ['getLogSummary']() {
        const bd = a0T, a = {
                'AJCCc': function (g, h) {
                    return g - h;
                }
            }, b = a0E['onetimetasks_log']['filter'](g => g['exitcode'] === 0x0)['length'], c = a0E['onetimetasks_log'][bd(0x259)] - b, d = a0E[bd(0x148)][bd(0x1ad)](g => g['exitcode'] === 0x0)['length'], f = a[bd(0x225)](a0E[bd(0x148)]['length'], d);
        return {
            'onetime': {
                'total_logged': a0E[bd(0x12f)][bd(0x259)],
                'max_capacity': a0E[bd(0x3c4)],
                'recent_success': b,
                'recent_failed': c
            },
            'cron': {
                'total_logged': a0E[bd(0x148)][bd(0x259)],
                'max_capacity': a0E[bd(0x3c4)],
                'recent_success': d,
                'recent_failed': f
            }
        };
    }
    static async [a0T(0x366)]() {
        const be = a0T, a = [];
        for (let b = 0x0; b < a0E[be(0x3ad)][be(0x259)]; b++) {
            const c = a0E['onetasks'][b], d = await a0I[be(0x2b5)](c), f = this[be(0x208)](c, d[be(0x21f)], d['exitcode'], be(0x22e));
            this['_appendLog'](a0E[be(0x12f)], f), a['push']({
                'cmd': c,
                'exitcode': d[be(0x1c8)],
                'output': d[be(0x21f)],
                'timeout': d[be(0xac)]
            });
        }
        return a0E[be(0x26e)] = ![], {
            'status': 'ok',
            'executed': a[be(0x259)],
            'results': a
        };
    }
}
let a0L = null, a0M = null;
const a0N = new Promise((a, b) => {
    const bf = a0T, c = {
            'rxYES': bf(0x2b8),
            'KnZCD': function (d) {
                return d();
            },
            'wymTa': function (d) {
                return d();
            },
            'pfWVP': function (d, f) {
                return d(f);
            }
        };
    try {
        c[bf(0x274)](a0r, function (d) {
            const bg = bf;
            if (!d) {
                a0M = new Error(c[bg(0x39f)]), a0u[bg(0x1e9)](bg(0x3c6), a0M[bg(0x200)]), c[bg(0x2f9)](a);
                return;
            }
            a0L = d, a0u[bg(0x1ea)]('Noise\x20WASM\x20module\x20loaded\x20successfully'), c['wymTa'](a);
        });
    } catch (d) {
        a0M = d, a0u[bf(0x1e9)]('[WARN]\x20Exception\x20loading\x20Noise\x20module:', d[bf(0x200)]), a();
    }
});
process['on'](a0T(0x2b0), (a, b) => {
    const c = { 'GaieB': 'Unhandled\x20Promise\x20Rejection:' };
    a0u['error'](c['GaieB'], a);
}), process['on']('uncaughtException', a => {
    const bh = a0T, b = { 'EJJUX': bh(0x3ae) };
    a0u['error'](b[bh(0x213)], a), process[bh(0x3a0)](0x1);
});
class a0O {
    constructor(a, b, c) {
        const bi = a0T, d = { 'CvpSf': bi(0x125) }, f = d[bi(0x362)][bi(0x187)]('|');
        let g = 0x0;
        while (!![]) {
            switch (f[g++]) {
            case '0':
                this[bi(0x27b)] = null;
                continue;
            case '1':
                this[bi(0xd2)] = b;
                continue;
            case '2':
                this[bi(0x25e)] = a;
                continue;
            case '3':
                this['expectedRemotePubB64'] = c;
                continue;
            case '4':
                this[bi(0x123)] = null;
                continue;
            case '5':
                this[bi(0x166)] = ![];
                continue;
            case '6':
                this['hs'] = null;
                continue;
            }
            break;
        }
    }
    async [a0T(0x190)]() {
        const bj = a0T, a = {
                'kgdje': bj(0x33e),
                'AHFNn': bj(0x35f),
                'nWskT': bj(0x30f),
                'Mnnug': 'base64'
            };
        await a0N;
        if (!a0L)
            throw a0M || new Error(a[bj(0x244)]);
        const b = a0L, c = this[bj(0x25e)] ? b[bj(0x132)][bj(0x3b6)] : b[bj(0x132)][bj(0x2d9)];
        this['hs'] = b['HandshakeState'](a['AHFNn'], c);
        const d = Buffer['from'](a[bj(0x18d)]), f = this[bj(0xd2)] ? Buffer[bj(0xf5)](this[bj(0xd2)], a[bj(0x147)]) : null, g = this[bj(0x28a)] ? Buffer[bj(0xf5)](this[bj(0x28a)], a['Mnnug']) : null;
        this['hs'][bj(0x9d)](d, f, g, null);
    }
    [a0T(0x302)](a) {
        const bk = a0T, b = {
                'HVbpL': function (d, f) {
                    return d > f;
                },
                'oXTiv': function (d, f) {
                    return d === f;
                },
                'cQhdI': function (d, f) {
                    return d === f;
                }
            };
        if (this[bk(0x166)])
            return Buffer['alloc'](0x0);
        const c = a0L;
        a && b[bk(0xb1)](a['length'], 0x0) && b['oXTiv'](this['hs']['GetAction'](), c[bk(0x132)]['NOISE_ACTION_READ_MESSAGE']) && this['hs'][bk(0x358)](a);
        if (b[bk(0x3cb)](this['hs'][bk(0x1db)](), c[bk(0x132)]['NOISE_ACTION_SPLIT']))
            return this[bk(0x186)](), Buffer['alloc'](0x0);
        if (b[bk(0x16d)](this['hs'][bk(0x1db)](), c[bk(0x132)][bk(0x3a5)])) {
            const d = this['hs'][bk(0x10a)](new Uint8Array(0x0));
            return b[bk(0x3cb)](this['hs'][bk(0x1db)](), c[bk(0x132)][bk(0x172)]) && this[bk(0x186)](), Buffer[bk(0xf5)](d);
        }
        return Buffer['alloc'](0x0);
    }
    ['_splitAndFinish']() {
        const bl = a0T, a = this['hs'][bl(0x1f8)]();
        this['sendCipher'] = a[0x0], this[bl(0x123)] = a[0x1], this[bl(0x166)] = !![];
        try {
            if (this['hs'])
                this['hs'][bl(0x1d4)]();
        } catch (b) {
        }
        this['hs'] = null;
    }
    [a0T(0x1b8)](a) {
        const bm = a0T, b = { 'mbbxW': bm(0x38e) };
        if (!this['handshakeFinished'])
            throw new Error(b[bm(0x13a)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bm(0xf5)](this['sendCipher']['EncryptWithAd'](c, d));
    }
    [a0T(0x142)](a) {
        const bn = a0T, b = { 'ETwWT': bn(0x15d) };
        if (!this[bn(0x166)])
            throw new Error(b[bn(0x3b9)]);
        const c = new Uint8Array(0x0), d = new Uint8Array(a);
        return Buffer[bn(0xf5)](this[bn(0x123)][bn(0x231)](c, d));
    }
    ['free']() {
        const bo = a0T;
        try {
            if (this[bo(0x27b)])
                this[bo(0x27b)][bo(0x1d4)]();
        } catch (a) {
        }
        try {
            if (this[bo(0x123)])
                this[bo(0x123)][bo(0x1d4)]();
        } catch (b) {
        }
        try {
            if (this['hs'])
                this['hs'][bo(0x1d4)]();
        } catch (c) {
        }
        this['sendCipher'] = null, this[bo(0x123)] = null, this['hs'] = null;
    }
}
class a0P {
    constructor() {
        const bp = a0T;
        this[bp(0x204)] = null, this[bp(0x3ca)] = null, this[bp(0x170)] = null, this[bp(0x1ce)] = !![], this[bp(0x253)] = bp(0x266), this[bp(0x394)] = [], this[bp(0x218)] = [], this['AGENT_PRIVATE_KEY'] = a0E[bp(0x30b)][bp(0x2de)][bp(0x210)], this[bp(0x2a7)] = a0E[bp(0x30b)][bp(0x9e)][bp(0x185)], this[bp(0xcc)] = new a0O(![], this[bp(0xe9)], this[bp(0x2a7)]);
    }
    async ['cleanup']() {
        const bq = a0T, a = { 'xYRqF': 'Cleanly\x20closed' };
        this['requestId'] && a0u[bq(0x390)]('[' + this[bq(0x170)] + bq(0x1bb));
        if (this[bq(0x204)]) {
            try {
                this[bq(0x204)]['kill']();
            } catch (b) {
            }
            this[bq(0x204)] = null;
        }
        if (this['cipher'])
            this[bq(0xcc)][bq(0x1d4)]();
        if (this[bq(0x3ca)])
            try {
                this[bq(0x3ca)][bq(0xc6)] === this[bq(0x3ca)][bq(0xcf)] && this[bq(0x3ca)][bq(0x24b)](0x3e8, a[bq(0x118)]);
            } catch (c) {
            } finally {
                this[bq(0x3ca)] = null;
            }
    }
    [a0T(0x1ff)](a) {
        const br = a0T, b = {
                'iDVZM': function (c, d) {
                    return c === d;
                },
                'cjKkz': br(0x266),
                'BGQpP': function (c, d) {
                    return c > d;
                },
                'WFcvf': function (c, d) {
                    return c === d;
                },
                'urxuO': br(0xf8)
            };
        if (b[br(0x288)](this['phase'], b[br(0x367)])) {
            if (b[br(0x1e8)](this[br(0x218)][br(0x259)], 0x0)) {
                const c = this['msgResolvers'][br(0x377)]();
                c(a);
            } else
                this[br(0x394)][br(0xde)](a);
        } else
            b['WFcvf'](this[br(0x253)], b[br(0x15f)]) && this['_processTerminalMessage'](a);
    }
    async [a0T(0x1fc)]() {
        const bs = a0T;
        if (this[bs(0x394)]['length'] > 0x0)
            return this['msgQueue'][bs(0x377)]();
        return new Promise(a => {
            const bt = bs;
            this[bt(0x218)]['push'](a);
        });
    }
    async [a0T(0x263)](a) {
        const bu = a0T, b = {
                'WlwCD': function (c, d) {
                    return c(d);
                },
                'nDOEl': bu(0x268),
                'uwXRT': bu(0x2c2)
            };
        b[bu(0x36e)](a, '🤝\x20开始\x20Noise\x20加密握手...');
        try {
            await this[bu(0xcc)]['init']();
            const c = await this[bu(0x1fc)](), d = this[bu(0xcc)]['processHandshake'](c);
            d && d[bu(0x259)] > 0x0 && this[bu(0x3ca)][bu(0x314)](d);
            const f = await this[bu(0x1fc)]();
            this[bu(0xcc)]['processHandshake'](f);
            if (!this['cipher'][bu(0x166)])
                throw new Error(b[bu(0x294)]);
            b[bu(0x36e)](a, b[bu(0x2ab)]);
        } catch (g) {
            a(bu(0x136) + g[bu(0x200)]);
            throw new Error(bu(0x300));
        }
    }
    [a0T(0x251)]() {
        const bv = a0T, a = {
                'vBbAp': '/bin/bash',
                'nYOna': '/bin/zsh',
                'BbYXu': bv(0x232),
                'dfwDd': bv(0x104)
            }, b = [
                a[bv(0x1da)],
                a[bv(0x1ba)],
                a[bv(0x102)]
            ];
        for (const d of b) {
            if (a0h['existsSync'](d))
                return d;
        }
        const c = process.env.SHELL;
        if (c && a0h[bv(0x1fb)](c))
            return c;
        return a[bv(0x30e)];
    }
    async [a0T(0x387)](a, b, c) {
        const bw = a0T, d = {
                'SOLmH': function (g, h) {
                    return g(h);
                },
                'CYpwd': '🔗\x20检测到\x20WS\x20连接，启用\x20Noise\x20加密',
                'ZdeJI': bw(0x157),
                'zElHF': bw(0x200),
                'XhYyu': function (g, h) {
                    return g(h);
                }
            };
        this[bw(0x3ca)] = a, this['requestId'] = b;
        const f = g => a0u[bw(0x390)]('[终端会话\x20' + b + ']\x20' + g);
        this['useNoise'] = !c, d[bw(0x26b)](f, this[bw(0x1ce)] ? d[bw(0x15b)] : d[bw(0x23a)]), a['on'](d[bw(0x1f7)], g => this[bw(0x1ff)](g));
        try {
            this[bw(0x1ce)] && await this[bw(0x263)](f), await this['_runTerminal'](f);
        } catch (g) {
            d[bw(0x2d2)](f, bw(0x33d) + g[bw(0x200)]), await this['cleanup']();
        }
    }
    async [a0T(0x1ee)](a) {
        const bx = a0T, b = {
                'GScGB': 'utf-8',
                'ylFBz': function (f, g) {
                    return f === g;
                },
                'qzXtU': function (f, g) {
                    return f(g);
                },
                'eChCu': 'xterm-256color',
                'qRxZT': bx(0x37a),
                'euZCv': bx(0x2c6),
                'wqpIL': bx(0xf8),
                'cKdSg': function (f, g) {
                    return f > g;
                },
                'CnVWf': 'close'
            }, c = this['getAvailableShell']();
        b[bx(0x356)](a, bx(0x1f2) + c);
        const d = Object[bx(0x319)]({}, process.env);
        delete d[bx(0xbb)], d['TERM'] = b['eChCu'];
        if (!d[bx(0x137)])
            d[bx(0x137)] = b[bx(0x3bd)];
        try {
            this['ptyProcess'] = a0t[bx(0xfe)](c, [], {
                'name': 'xterm-256color',
                'cols': 0x50,
                'rows': 0x18,
                'cwd': process.env.HOME || process[bx(0xb2)](),
                'env': d
            }), a(bx(0x320) + (this[bx(0x204)][bx(0xab)] || b[bx(0x2a1)]) + ')'), this[bx(0x253)] = b[bx(0x389)];
            while (b['cKdSg'](this[bx(0x394)][bx(0x259)], 0x0)) {
                const f = this[bx(0x394)]['shift']();
                this[bx(0x280)](f);
            }
            this['ptyProcess'][bx(0x2db)](g => {
                const by = bx;
                try {
                    let h = Buffer[by(0xf5)](g, b[by(0x1f3)]);
                    this[by(0x1ce)] && this[by(0xcc)] && this[by(0xcc)]['handshakeFinished'] && (h = this[by(0xcc)][by(0x1b8)](h)), b['ylFBz'](this[by(0x3ca)][by(0xc6)], 0x1) && this['websocket'][by(0x314)](h);
                } catch (i) {
                }
            }), this[bx(0x204)]['onExit'](({
                exitCode: g,
                signal: h
            }) => {
                const bz = bx;
                a('🔌\x20终端进程退出\x20(Code:\x20' + g + bz(0x17e) + h + ')'), this[bz(0xe6)]();
            }), this['websocket']['on'](b[bx(0xeb)], () => {
                const bA = bx;
                a('🔌\x20客户端主动断开'), this[bA(0xe6)]();
            });
        } catch (g) {
            b[bx(0x356)](a, '💥\x20启动终端失败:\x20' + g['message']), await this['cleanup']();
            throw g;
        }
    }
    ['_processTerminalMessage'](a) {
        const bB = a0T, b = {
                'iCxel': function (c, d) {
                    return c === d;
                },
                'HFDUy': 'heartbeat',
                'ghraP': 'resize',
                'YcJEP': function (c, d) {
                    return c === d;
                },
                'sODdo': function (c, d) {
                    return c !== d;
                },
                'qMCgq': function (c, d) {
                    return c === d;
                },
                'sasQD': 'base64',
                'FBIoo': bB(0x39c)
            };
        if (!this['ptyProcess'])
            return;
        try {
            const c = Buffer[bB(0xf5)](a);
            let d;
            this[bB(0x1ce)] ? d = this[bB(0xcc)][bB(0x142)](c) : d = c;
            let f = ![], g = d[bB(0x2d5)](bB(0x39c));
            if (g[bB(0x108)]()[bB(0xd0)]('{'))
                try {
                    const h = JSON['parse'](g);
                    f = !![];
                    if (b[bB(0x1c0)](h[bB(0x18a)], b[bB(0x311)])) {
                        let i = Buffer['from'](JSON[bB(0x10f)]({ 'type': b[bB(0x311)] }));
                        if (this['useNoise'])
                            i = this[bB(0xcc)][bB(0x1b8)](i);
                        this['websocket']['send'](i);
                        return;
                    }
                    if (b['iCxel'](h[bB(0x18a)], b[bB(0x145)])) {
                        this[bB(0x204)][bB(0x1cd)](h[bB(0x246)] || 0x50, h[bB(0x1a9)] || 0x18);
                        return;
                    }
                    if (b['YcJEP'](h['type'], 'input') && b[bB(0x2cd)](h[bB(0x24f)], undefined)) {
                        let j = b[bB(0x115)](h[bB(0xc3)], b[bB(0x307)]) ? Buffer[bB(0xf5)](h[bB(0x24f)], b[bB(0x307)])['toString']('utf-8') : h[bB(0x24f)];
                        this[bB(0x204)][bB(0x216)](j);
                        return;
                    }
                } catch (k) {
                    f = ![];
                }
            !f && this[bB(0x204)][bB(0x216)](d[bB(0x2d5)](b['FBIoo']));
        } catch (l) {
            a0u['info'](bB(0xa2) + this['requestId'] + bB(0xf2) + l[bB(0x200)]);
            if (this[bB(0x1ce)])
                this[bB(0xe6)]();
        }
    }
}
async function a0Q(a = {}) {
    const bC = a0T, b = {
            'KCIqf': bC(0x36c),
            'RCwPS': 'Access-Control-Allow-Methods',
            'eWEzV': bC(0x223),
            'uUMXc': bC(0x2ff),
            'zpuuF': bC(0x1b2),
            'cAsgX': function (c, d) {
                return c === d;
            },
            'HRaev': bC(0x2fa),
            'vgSNm': function (c) {
                return c();
            },
            'BGTNA': '2|4|3|0|1',
            'tPpJH': function (c, d) {
                return c / d;
            },
            'cJiqB': function (c, d) {
                return c > d;
            },
            'LEpNf': function (c, d) {
                return c - d;
            },
            'aKngq': bC(0x13b),
            'UMwsP': function (c, d) {
                return c / d;
            },
            'guNPv': function (c, d) {
                return c === d;
            },
            'ZGXNH': bC(0x2ac),
            'tHohw': bC(0x230),
            'MpTMx': function (c, d) {
                return c === d;
            },
            'cSYya': function (c, d) {
                return c(d);
            },
            'WCqdV': bC(0x1b3),
            'RmJLR': bC(0x1b6),
            'ZDtCJ': 'Missing\x20required\x20custom\x20headers:\x20X-File-Path\x20and\x20X-File-Name',
            'UUxyf': function (c, d) {
                return c !== d;
            },
            'uCVXw': function (c, d, f) {
                return c(d, f);
            },
            'xiIDX': bC(0x1c3),
            'GuUZO': 'base64',
            'JySNt': bC(0x368),
            'LqEXQ': bC(0x173),
            'bkyim': 'content-type',
            'KCisV': function (c, d, f) {
                return c(d, f);
            },
            'lbMHM': bC(0x1de),
            'cqbDC': bC(0x20b),
            'ncTVr': 'Starting\x20main()\x20function...',
            'NiOYx': bC(0x262),
            'Kczep': bC(0x364),
            'fGSsg': bC(0x32e),
            'CkYqH': 'CryptoManager\x20initialized',
            'Hzabt': bC(0x110),
            'EbPvX': bC(0xc0),
            'DTeXN': function (c, d) {
                return c(d);
            },
            'atcWy': bC(0x2fc),
            'PqZzL': bC(0xc1),
            'GBTps': bC(0x224),
            'LdOwC': '/api/baseinfo',
            'YniMn': bC(0x3a6),
            'QJYVB': bC(0x331),
            'Tetps': bC(0x17f),
            'UBOLa': bC(0xb5),
            'XmwWx': bC(0x32d),
            'ofYdh': bC(0x20c),
            'BGYfY': bC(0x12e),
            'LbkcS': 'application/octet-stream',
            'iiMjt': bC(0xbd),
            'EUgJm': bC(0x3b7),
            'tVBpL': bC(0x34b),
            'fVlvE': bC(0x161),
            'TnXYh': '/api/task/log/onetime',
            'tFFKv': '/api/task/log/cron',
            'shMZg': '/api/task/log/summary',
            'VlGTS': bC(0x11c),
            'RnbGB': 'Setting\x20up\x20WebSocket\x20terminal\x20route...',
            'UfqGr': '/api/ws/*',
            'HWoDK': 'SIGINT\x20handler\x20registered',
            'bjNxf': bC(0x160)
        };
    try {
        const c = await import(bC(0x2be));
        a0s = c['p256'], a0u['debug'](b[bC(0x2ba)]), a0E[bC(0x107)](a), a0u[bC(0x1ea)](b[bC(0x3bf)]), a0E['validate'](), a0u['debug'](b['Kczep']), a0u[bC(0x1ea)](b[bC(0x158)]);
        const d = new a0F(a0E[bC(0x2f3)], a0E[bC(0xbe)]);
        a0u[bC(0x1ea)](b[bC(0x1b0)]), a0u['debug'](bC(0xe8));
        const f = new a0H();
        a0u[bC(0x1ea)](b[bC(0x383)]), a0u[bC(0x1ea)](b['EbPvX']);
        const g = a0f();
        b[bC(0x321)](a0q, g), a0u[bC(0x1ea)](b[bC(0x2dd)]), g[bC(0x2b6)]((i, j, k) => {
            const bD = bC;
            j['header'](b['KCIqf'], '*'), j['header'](b[bD(0x398)], bD(0x341)), j[bD(0x19f)](b['eWEzV'], bD(0x1d6)), j[bD(0x19f)](b[bD(0x35d)], b['zpuuF']);
            if (b['cAsgX'](i[bD(0x20d)], b['HRaev']))
                return j['status'](0xc8)['end']();
            b[bD(0x1c1)](k);
        }), g['use'](a0f[bC(0x1a7)]({
            'type': i => i['path'] !== bC(0x12e),
            'limit': b[bC(0xfa)]
        })), g[bC(0x2b6)](a0f[bC(0x2d6)]({ 'extended': !![] })), g[bC(0x2b6)](b[bC(0x321)](a0G, d)), a0u[bC(0x1ea)](b[bC(0x38b)]), g[bC(0x18f)](b[bC(0x2d3)], async (i, j) => {
            const bE = bC;
            try {
                const k = Math[bE(0x299)](b['tPpJH'](Date[bE(0x1a0)](), 0x3e8));
                !a0E[bE(0x31c)] || b['cJiqB'](b[bE(0x365)](k, a0E[bE(0x238)]), a0E['BASEINFO_CACHE_TTL']) ? (!a0E[bE(0x22f)] && (a0E[bE(0x22f)] = f[bE(0x258)]()[bE(0x146)](m => {
                    const bF = bE, n = b[bF(0x334)][bF(0x187)]('|');
                    let o = 0x0;
                    while (!![]) {
                        switch (n[o++]) {
                        case '0':
                            a0u['debug']('🔄\x20[Cache]\x20BaseInfo\x20缓存已过期，已重新调度系统资源进行更新。');
                            continue;
                        case '1':
                            return m;
                        case '2':
                            a0E[bF(0x31c)] = m;
                            continue;
                        case '3':
                            a0E['_baseinfo_fetch_promise'] = null;
                            continue;
                        case '4':
                            a0E[bF(0x238)] = Math[bF(0x299)](b['tPpJH'](Date[bF(0x1a0)](), 0x3e8));
                            continue;
                        }
                        break;
                    }
                })[bE(0x13e)](m => {
                    a0E['_baseinfo_fetch_promise'] = null;
                    throw m;
                })), await a0E[bE(0x22f)]) : a0u['debug']('📦\x20[Cache]\x20BaseInfo\x20命中有效缓存，直接输出。');
                const l = { ...a0E['_baseinfo_cache'] };
                i['is_authenticated'] === ![] ? (l[bE(0xd6)] = null, l['noise_key'] = null) : (l[bE(0xd6)] = a0E[bE(0x1a3)], l['noise_key'] = a0E[bE(0x29b)]), j[bE(0x191)](l);
            } catch (m) {
                j['status'](0x1f4)[bE(0x191)]({
                    'status': b['aKngq'],
                    'message': m[bE(0x200)]
                });
            }
        }), g[bC(0x18f)](b['YniMn'], async (i, j) => {
            const bG = bC;
            try {
                const k = Math[bG(0x299)](b[bG(0x178)](Date[bG(0x1a0)](), 0x3e8));
                !a0E[bG(0x3b5)] || b[bG(0x365)](k, a0E[bG(0x2f2)]) > a0E['STATUS_CACHE_TTL'] ? (!a0E[bG(0x33c)] && (a0E['_status_fetch_promise'] = f[bG(0x1d8)]()[bG(0x146)](m => {
                    const bH = bG;
                    return a0E[bH(0x3b5)] = m, a0E['_status_cache_time'] = Math[bH(0x299)](Date['now']() / 0x3e8), a0E[bH(0x33c)] = null, a0u['debug'](bH(0x2e7)), m;
                })[bG(0x13e)](m => {
                    const bI = bG;
                    a0E[bI(0x33c)] = null;
                    throw m;
                })), await a0E[bG(0x33c)]) : a0u['debug'](bG(0x3c7));
                const l = { ...a0E[bG(0x3b5)] };
                j[bG(0x191)](l);
            } catch (m) {
                j['status'](0x1f4)[bG(0x191)]({
                    'status': b[bG(0x2c7)],
                    'message': m[bG(0x200)]
                });
            }
        }), g[bC(0xb0)](b[bC(0x26d)], async (i, j) => {
            const bJ = bC;
            try {
                let k = null;
                if (b[bJ(0x1cb)](typeof i[bJ(0xc2)], b[bJ(0x199)]))
                    k = i[bJ(0xc2)][bJ(0x108)]();
                else
                    i[bJ(0xc2)] && typeof i['body'] === b[bJ(0x13c)] && (k = i[bJ(0xc2)][bJ(0x37f)] || '');
                if (!k)
                    return j[bJ(0x293)](0x190)['json']({
                        'status': bJ(0x13b),
                        'message': bJ(0x381)
                    });
                const l = await a0I['execute'](k, {
                    'cwd': i['body'][bJ(0xb2)],
                    'env': i[bJ(0xc2)]['env'],
                    'timeout': a0E[bJ(0x298)]
                });
                j['json'](l);
            } catch (m) {
                j[bJ(0x293)](0x1f4)['json']({
                    'status': b[bJ(0x2c7)],
                    'message': m[bJ(0x200)]
                });
            }
        }), g[bC(0xb0)](b[bC(0x188)], async (i, j) => {
            const bK = bC;
            try {
                const k = await a0J['listFiles'](i[bK(0xc2)][bK(0xa6)], i['body'][bK(0xe7)]);
                j[bK(0x191)]({
                    'status': 'ok',
                    'count': k['length'],
                    'files': k
                });
            } catch (l) {
                j[bK(0x293)](0x1f4)['json']({
                    'status': b[bK(0x2c7)],
                    'message': l[bK(0x200)]
                });
            }
        }), g[bC(0xb0)](b['UBOLa'], async (i, j) => {
            const bL = bC;
            try {
                const k = await a0J[bL(0x17a)](i[bL(0xc2)][bL(0x355)] || []);
                j[bL(0x191)]({
                    'status': 'ok',
                    'files': k
                });
            } catch (l) {
                j[bL(0x293)](0x1f4)[bL(0x191)]({
                    'status': b[bL(0x2c7)],
                    'message': l[bL(0x200)]
                });
            }
        }), g[bC(0x281)](bC(0xb5), async (i, j) => {
            const bM = bC;
            try {
                const k = i['body']['permissions'] || {}, l = b['MpTMx'](i['body'][bM(0xe7)], !![]), m = await a0J[bM(0x217)](k, l);
                j[bM(0x191)](m);
            } catch (n) {
                j[bM(0x293)](0x1f4)['json']({
                    'status': bM(0x13b),
                    'message': n['message']
                });
            }
        }), g[bC(0xb0)](b[bC(0x260)], async (i, j) => {
            const bN = bC;
            try {
                const k = await a0J[bN(0x128)](i[bN(0xc2)][bN(0xa6)]);
                j[bN(0x191)](k);
            } catch (l) {
                j[bN(0x293)](0x1f4)[bN(0x191)]({
                    'status': b[bN(0x2c7)],
                    'message': l[bN(0x200)]
                });
            }
        }), g[bC(0xb0)](b[bC(0xa4)], async (i, j) => {
            const bO = bC;
            try {
                const k = await a0J[bO(0x103)](i['body'][bO(0xa6)], i[bO(0xc2)][bO(0x105)], i[bO(0xc2)][bO(0xb6)], i[bO(0xc2)][bO(0x196)], i[bO(0xc2)][bO(0xb8)]);
                j[bO(0x191)](k);
            } catch (l) {
                j[bO(0x293)](0x1f4)[bO(0x191)]({
                    'status': b[bO(0x2c7)],
                    'message': l[bO(0x200)]
                });
            }
        }), g[bC(0xb0)](b['BGYfY'], a0f[bC(0xf4)]({
            'type': b[bC(0x348)],
            'limit': b[bC(0xfa)]
        }), async (i, j) => {
            const bP = bC;
            try {
                const k = b[bP(0xae)](decodeURIComponent, i['headers']['x-file-path'] || ''), l = b[bP(0xae)](decodeURIComponent, i[bP(0x1f4)][b[bP(0x1fd)]] || ''), m = i[bP(0x1f4)][b[bP(0x10b)]], n = i[bP(0x1f4)][bP(0x25d)];
                if (!k || !l)
                    return j[bP(0x293)](0x190)[bP(0x191)]({
                        'status': b['aKngq'],
                        'completed': ![],
                        'message': b[bP(0x297)]
                    });
                const o = b[bP(0x17c)](m, undefined) ? parseInt(b[bP(0xae)](String, m), 0xa) : null, p = b[bP(0x17c)](n, undefined) ? b[bP(0x254)](parseInt, String(n), 0xa) : null, q = i['body'];
                if (!Buffer[bP(0x181)](q))
                    return j[bP(0x293)](0x190)['json']({
                        'status': bP(0x13b),
                        'completed': ![],
                        'message': b[bP(0xea)]
                    });
                const r = await a0J[bP(0x141)](k, l, q, o, p);
                j['json'](r);
            } catch (s) {
                j[bP(0x293)](0x1f4)[bP(0x191)]({
                    'status': b[bP(0x2c7)],
                    'completed': ![],
                    'message': s[bP(0x200)]
                });
            }
        }), g[bC(0xb0)](b[bC(0x37c)], async (i, j) => {
            const bQ = bC;
            try {
                const k = await a0J['downloadFile'](i[bQ(0xc2)][bQ(0xa6)]), l = Buffer['from'](k[bQ(0xb6)], b[bQ(0x37e)]);
                return j['set'](b[bQ(0x27e)], k['size']['toString']()), j['set'](b[bQ(0xdb)], k[bQ(0xa6)]), j[bQ(0x202)](b[bQ(0xc9)], bQ(0x1e0)), j[bQ(0x314)](l);
            } catch (m) {
                j[bQ(0x293)](0x1f4)[bQ(0x191)]({
                    'status': 'error',
                    'message': m[bQ(0x200)]
                });
            }
        }), g[bC(0xc4)]('/api/file', async (i, j) => {
            const bR = bC;
            try {
                let k = i[bR(0xc2)][bR(0x355)];
                if (!k || !Array[bR(0x130)](k)) {
                    k = [];
                    if (i[bR(0xc2)][bR(0xa6)])
                        k[bR(0xde)](i[bR(0xc2)][bR(0xa6)]);
                    if (i['body'][bR(0x2da)])
                        k['push'](i[bR(0xc2)]['path2']);
                }
                const l = await a0J[bR(0x101)](k);
                j[bR(0x191)]({
                    'status': 'ok',
                    'results': l
                });
            } catch (m) {
                j[bR(0x293)](0x1f4)[bR(0x191)]({
                    'status': b[bR(0x2c7)],
                    'message': m[bR(0x200)]
                });
            }
        }), g[bC(0x281)](bC(0x20c), async (i, j) => {
            const bS = bC;
            try {
                const k = await a0J[bS(0x283)](i[bS(0xc2)][bS(0x37b)] || i[bS(0xc2)]);
                j[bS(0x191)]({
                    'status': 'ok',
                    'total': k[bS(0x259)],
                    'success': k['filter'](l => l[bS(0x293)] === 'ok')[bS(0x259)],
                    'results': k
                });
            } catch (l) {
                j[bS(0x293)](0x1f4)[bS(0x191)]({
                    'status': bS(0x13b),
                    'message': l['message']
                });
            }
        }), g[bC(0xb0)](bC(0xd1), async (i, j) => {
            const bT = bC;
            try {
                const k = await a0J[bT(0x31b)](i['body']);
                j[bT(0x191)]({
                    'status': 'ok',
                    'total': k[bT(0x259)],
                    'success': k[bT(0x1ad)](l => l[bT(0x293)] === 'ok')[bT(0x259)],
                    'results': k
                });
            } catch (l) {
                j[bT(0x293)](0x1f4)['json']({
                    'status': b['aKngq'],
                    'message': l[bT(0x200)]
                });
            }
        }), g['post'](bC(0x1c2), async (i, j) => {
            const bU = bC;
            try {
                const k = await a0J[bU(0x336)](i['body'][bU(0xa6)]);
                j[bU(0x191)](k);
            } catch (l) {
                j[bU(0x293)](0x1f4)[bU(0x191)]({
                    'status': b['aKngq'],
                    'message': l[bU(0x200)]
                });
            }
        }), g[bC(0x18f)](b[bC(0x27c)], (i, j) => {
            const bV = bC;
            j[bV(0x191)](a0K[bV(0x24e)]());
        }), g['post'](b[bC(0x27c)], async (i, j) => {
            const bW = bC;
            try {
                const k = await a0K[bW(0x152)](i['body']);
                j['json'](k);
            } catch (l) {
                j['status'](0x1f4)[bW(0x191)]({
                    'status': b[bW(0x2c7)],
                    'message': l[bW(0x200)]
                });
            }
        }), g[bC(0x18f)](b['tVBpL'], (i, j) => {
            const bX = bC;
            j[bX(0x191)](a0K[bX(0x29c)]());
        }), g['post'](bC(0x34b), (i, j) => {
            const bY = bC;
            try {
                const k = a0K['setCronTasks'](i[bY(0xc2)]);
                j[bY(0x191)](k);
            } catch (l) {
                j[bY(0x293)](0x1f4)['json']({
                    'status': b['aKngq'],
                    'message': l[bY(0x200)]
                });
            }
        }), g[bC(0x18f)](b[bC(0x2dc)], (i, j) => {
            const bZ = bC;
            j[bZ(0x191)](a0K[bZ(0x23c)]());
        }), g[bC(0x18f)](b[bC(0x2af)], (i, j) => {
            const c0 = bC;
            let k = b[c0(0x254)](parseInt, i[c0(0x325)]['limit'], 0xa) || 0x32;
            k = Math[c0(0x315)](Math[c0(0xcb)](k, 0x1), 0x64), j['json'](a0K[c0(0x140)](k));
        }), g[bC(0x18f)](b['tFFKv'], (i, j) => {
            const c1 = bC;
            let k = b[c1(0x3ab)](parseInt, i[c1(0x325)][c1(0x229)], 0xa) || 0x32;
            k = Math[c1(0x315)](Math['max'](k, 0x1), 0x64), j[c1(0x191)](a0K[c1(0xd3)](k));
        }), g[bC(0xc4)](b[bC(0x2af)], (i, j) => {
            const c2 = bC;
            j[c2(0x191)](a0K[c2(0x371)]());
        }), g[bC(0xc4)](bC(0x304), (i, j) => {
            j['json'](a0K['clearCronLogs']());
        }), g['get'](b[bC(0x344)], (i, j) => {
            const c3 = bC;
            j['json'](a0K[c3(0x201)]());
        }), g[bC(0xb0)](b[bC(0x235)], async (i, j) => {
            const c4 = bC;
            try {
                const k = await a0K[c4(0x366)]();
                j['json'](k);
            } catch (l) {
                j[c4(0x293)](0x1f4)[c4(0x191)]({
                    'status': b['aKngq'],
                    'message': l['message']
                });
            }
        }), a0u['debug'](b['RnbGB']), g['ws'](b[bC(0x20e)], async (i, j) => {
            const c5 = bC, k = j[c5(0xba)][0x0];
            a0u[c5(0x1ea)](c5(0x2aa) + j[c5(0x21a)]), a0u[c5(0x1ea)](c5(0x182) + k);
            const l = j[c5(0x325)][c5(0x1d1)], m = j[c5(0x325)][c5(0x162)];
            a0u[c5(0x1ea)](c5(0x328) + l);
            if (!l) {
                a0u[c5(0x1ea)](c5(0xca)), i[c5(0x24b)](0x3f0, b[c5(0x306)]);
                return;
            }
            const n = new a0P();
            await n['startSession'](i, l, m);
        }), a0u['debug'](bC(0x374)), a0u[bC(0x1ea)]('Starting\x20HTTP\x20server...');
        const h = g[bC(0x386)](a0E['PORT'], a0E['HOST'], () => {
            const c6 = bC;
            a0u['debug']('🚀\x20Kisama\x20Agent\x20Node.js\x20v' + a0E[c6(0x1c6)] + c6(0x3be) + a0E[c6(0x24a)] + ':' + a0E['PORT']), a0u[c6(0x1ea)](b[c6(0x176)]);
        });
        process['on'](bC(0x3af), () => {
            const c7 = bC;
            a0u[c7(0x1ea)]('Shutting\x20down...'), h[c7(0x24b)](), process[c7(0x3a0)](0x0);
        }), a0u[bC(0x1ea)](b[bC(0xf3)]);
    } catch (i) {
        a0u['error'](b['bjNxf'], i), process[bC(0x3a0)](0x1);
    }
}
(require['main'] === module || require[a0T(0x1bc)]?.[a0T(0x105)]?.[a0T(0x270)](a0T(0x3d0))) && a0Q()[a0T(0x13e)](a0u[a0T(0x13b)]);
module[a0T(0xfb)] = {
    'main': a0Q,
    'Config': a0E,
    'CryptoManager': a0F,
    'SystemInfoCollector': a0H,
    'CommandExecutor': a0I,
    'FileManager': a0J,
    'TaskManager': a0K
};