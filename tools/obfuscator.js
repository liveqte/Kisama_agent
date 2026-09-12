#!/usr/bin/env node
/**
 * tools/obfuscator.js — Kisama JS Agent 轻量混淆 / 发布清洗工具
 *
 * 混淆程度: 低。目标是为 npm 发布做准备, 只做两件事:
 *   1. 删除全部注释 (// 单行、/* *​/ 块注释, 保留其中换行以维持行结构)
 *   2. 清除所有字符串字面量 (单/双引号、模板字符串、正则) 中的非 ASCII
 *      字符 (中文、emoji、全角标点等), 保证产物为纯 ASCII
 * 保留函数名/类名/接口字段等全部标识符, 不改变运行时语义。
 *
 * 用法:
 *   node tools/obfuscator.js                     # 默认参数
 *   node tools/obfuscator.js -n custom-brand     # 品牌词替换 (kisama→custom-brand, 白名单标识保留)
 *
 * 产物:
 *   js/npm/index.js       混淆后的入口 (由 js/agent.js 生成)
 *   js/npm/package.json   npm 包描述 (name=kisama-agent, 依赖同步自 js/package.json)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const INPUT_FILE = path.join(REPO_ROOT, 'js', 'agent.js');
const OUT_DIR = path.join(REPO_ROOT, 'js', 'npm');
const OUT_ENTRY = path.join(OUT_DIR, 'index.js');
const OUT_PKG = path.join(OUT_DIR, 'package.json');
const SRC_PKG = path.join(REPO_ROOT, 'js', 'package.json');

const PKG_NAME = 'kisama-agent';
const PKG_VERSION = '0.5.0';

// ── 品牌词替换白名单: 这些是运行时关键标识, 替换品牌词时必须保留 ──
const BRAND_PROTECTION_WHITELIST = [
    'kisama_terminal_v1',
    'kisama-ws-token-v1',
    'KISAMA_EDGE_INSECURE',
];

function replaceBrand(source, replacement) {
    if (!replacement) return source;
    const repl = replacement.replace(/[^\x00-\x7f]/g, '');
    if (!repl) return source;
    const placeholders = {};
    for (let i = 0; i < BRAND_PROTECTION_WHITELIST.length; i++) {
        const token = BRAND_PROTECTION_WHITELIST[i];
        const ph = '__KPROTECTED_' + i + '__';
        placeholders[ph] = token;
        if (source.includes(token)) source = source.split(token).join(ph);
    }
    // 大小写不敏感整词替换 kisama
    source = source.replace(/kisama/gi, repl);
    for (const ph in placeholders) {
        source = source.split(ph).join(placeholders[ph]);
    }
    return source;
}

/**
 * 核心清洗器: 基于状态机的单遍扫描, 正确处理:
 *  - 单/双引号字符串 (含转义)
 *  - 模板字符串 (含 ${...} 插值, 插值内可嵌套模板/字符串/注释, 靠括号深度匹配)
 *  - 正则字面量 (通过"上一有效字符/词"启发式区分除法)
 *  - // 与 /* *​/ 注释
 * 输出: 注释全部删除 (保留换行), 字面量内容去非 ASCII, 其余代码原样保留。
 */
function sanitize(src) {
    const n = src.length;
    let i = 0;
    let out = '';
    const stack = [{ t: 'code', depth: 0 }];
    let lastChar = '';   // 最近一个非空白字符
    let lastWord = '';   // 最近一个标识符/关键字
    const REGEX_KEYWORDS = new Set([
        'return', 'typeof', 'case', 'in', 'of', 'new', 'delete',
        'void', 'do', 'else', 'await', 'yield', 'instanceof', 'throw',
    ]);

    const top = () => stack[stack.length - 1];
    const nonAscii = (ch) => ch.charCodeAt(0) > 0x7f;

    function regexAllowed() {
        if (lastChar === '') return true;
        if (/[A-Za-z0-9_$)]/.test(lastChar)) return false; // 标识符/数字/右括号 之后 → 除法
        if (REGEX_KEYWORDS.has(lastWord)) return true;
        return true; // 运算符/分隔符/语句边界 之后 → 允许正则
    }

    while (i < n) {
        const c = src[i];
        const ctx = top().t;

        if (ctx === 'code') {
            // ── 单行注释 ──
            if (c === '/' && src[i + 1] === '/') {
                while (i < n && src[i] !== '\n') i++;
                continue;
            }
            // ── 块注释 (保留换行) ──
            if (c === '/' && src[i + 1] === '*') {
                i += 2;
                let keepNewlines = '';
                while (i < n && !(src[i] === '*' && src[i + 1] === '/')) {
                    if (src[i] === '\n') keepNewlines += '\n';
                    i++;
                }
                i += 2; // 跳过 */
                out += keepNewlines;
                continue;
            }
            // ── 正则字面量 ──
            if (c === '/' && regexAllowed()) {
                out += '/';
                i++;
                let inClass = false;
                while (i < n) {
                    const r = src[i];
                    if (r === '\\') { out += src.substr(i, 2); i += 2; continue; }
                    if (r === '\n') break; // 正则不能跨行; 若到这里说明误判, 停止吞并
                    if (r === '[') inClass = true;
                    else if (r === ']') inClass = false;
                    else if (r === '/' && !inClass) { out += '/'; i++; break; }
                    out += r;
                    i++;
                }
                while (i < n && /[A-Za-z]/.test(src[i])) { out += src[i]; i++; } // 标志 u g i m s d y
                lastChar = '/';
                lastWord = '';
                continue;
            }
            // ── 单/双引号字符串 (内容去非 ASCII) ──
            if (c === "'" || c === '"') {
                const q = c;
                out += q;
                i++;
                while (i < n) {
                    const ch = src[i];
                    if (ch === '\\') { out += src.substr(i, 2); i += 2; continue; } // 保留转义
                    if (ch === q) { out += q; i++; break; }
                    if (ch === '\n') break; // 未闭合的普通字符串不应跨行
                    if (nonAscii(ch)) { i++; continue; } // 删除中文/emoji
                    out += ch;
                    i++;
                }
                lastChar = q;
                lastWord = '';
                continue;
            }
            // ── 模板字符串开始 ──
            if (c === '`') {
                out += '`';
                i++;
                stack.push({ t: 'tpl', depth: 0 });
                continue;
            }
            // ── 标识符/关键字 ──
            if (/[A-Za-z_$]/.test(c)) {
                let w = '';
                while (i < n && /[A-Za-z0-9_$]/.test(src[i])) { w += src[i]; i++; }
                out += w;
                lastWord = w;
                lastChar = w.charAt(w.length - 1);
                continue;
            }
            // ── 数字 ──
            if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(src[i + 1] || ''))) {
                let num = '';
                while (i < n && /[0-9._eExXbBoOnN]/.test(src[i])) {
                    num += src[i];
                    i++;
                }
                out += num;
                lastWord = '';
                lastChar = num.charAt(num.length - 1);
                continue;
            }
            // ── 插值的结束括号 (插值内的 code 层, 通过 ${ 进入) ──
            if (c === '}' && top().depth === 0 && stack.length > 1 && top().t === 'code' && stack[stack.length - 2].t === 'tpl') {
                // 这是 ${...} 的闭合 }
                out += '}';
                i++;
                stack.pop(); // 回到模板层
                lastChar = '}';
                lastWord = '';
                continue;
            }
            // ── 其他普通字符 ──
            out += c;
            if (c === '{' && ctx === 'code' && stack.length > 1 && stack[stack.length - 2].t === 'tpl') {
                top().depth++; // 插值内的对象/块/函数体括号
            } else if (c === '}' && ctx === 'code' && stack.length > 1 && stack[stack.length - 2].t === 'tpl') {
                top().depth--;
            }
            lastChar = c;
            if (!/[A-Za-z0-9_$]/.test(c)) lastWord = '';
            i++;
            continue;
        }

        // ── 模板字符串文本层 ──
        if (ctx === 'tpl') {
            if (c === '\\') {
                out += src.substr(i, 2); // 保留转义 (\n, \uXXXX 等均为 ASCII)
                i += 2;
                continue;
            }
            if (c === '`') {
                out += '`';
                i++;
                stack.pop(); // 模板结束
                lastChar = '`';
                lastWord = '';
                continue;
            }
            if (c === '$' && src[i + 1] === '{') {
                out += '${';
                i += 2;
                stack.push({ t: 'code', depth: 0 }); // 进入插值 code 层
                lastChar = '';
                lastWord = '';
                continue;
            }
            if (nonAscii(c)) { i++; continue; } // 删除中文/emoji
            out += c;
            i++;
            continue;
        }
    }
    return out;
}

// ── 自检: 产物必须可被 Node 解析 ──
function assertSyntax(code, label) {
    const checkFile = path.join(OUT_DIR, '.syntax_check.js');
    fs.writeFileSync(checkFile, code, 'utf8');
    try {
        require('child_process')
            .execSync(`node --check "${checkFile}"`, { stdio: 'pipe', timeout: 30000 });
    } catch (e) {
        fs.unlinkSync(checkFile);
        throw new Error(label + ' 语法校验失败: ' + e.stdout.toString().slice(0, 500));
    }
    fs.unlinkSync(checkFile);
}

// ── 自检: 产物必须全 ASCII ──
function assertAscii(code) {
    for (let i = 0; i < code.length; i++) {
        if (code.charCodeAt(i) > 0x7f) {
            const line = code.slice(0, i).split('\n').length;
            throw new Error('产物仍含非 ASCII 字符 (行 ' + line + '), 清洗不完整');
        }
    }
}

// ── 自检: 不应残留注释 (剔除字符串/模板/正则内容后扫描注释标记) ──
function assertNoComments(code) {
    const n = code.length;
    let i = 0;
    let lastChar = '';
    const REGEX_KEYWORDS = new Set([
        'return', 'typeof', 'case', 'in', 'of', 'new', 'delete',
        'void', 'do', 'else', 'await', 'yield', 'instanceof', 'throw',
    ]);
    let lastWord = '';
    const regexAllowed = () => {
        if (lastChar === '') return true;
        if (/[A-Za-z0-9_$)]/.test(lastChar)) return false;
        return true;
    };
    const hits = [];
    while (i < n) {
        const c = code[i];
        // 字符串
        if (c === "'" || c === '"') {
            const q = c; i++;
            while (i < n && code[i] !== q && code[i] !== '\n') {
                if (code[i] === '\\') i++;
                i++;
            }
            i++;
            lastChar = q; lastWord = '';
            continue;
        }
        // 模板 (含插值; 插值内的注释在生成时已被删除, 此处整体跳过即可)
        if (c === '`') {
            i++;
            while (i < n) {
                if (code[i] === '\\') i += 2;
                else if (code[i] === '$' && code[i + 1] === '{') {
                    i += 2;
                    let d = 0;
                    while (i < n) {
                        if (code[i] === '{') d++;
                        else if (code[i] === '}') { if (d === 0) break; d--; }
                        i++;
                    }
                    continue;
                } else if (code[i] === '`') { i++; break; }
                i++;
            }
            lastChar = '`'; lastWord = '';
            continue;
        }
        // 行注释
        if (c === '/' && code[i + 1] === '/') {
            hits.push(i);
            while (i < n && code[i] !== '\n') i++;
            continue;
        }
        // 块注释
        if (c === '/' && code[i + 1] === '*') {
            hits.push(i);
            i += 2;
            while (i < n && !(code[i] === '*' && code[i + 1] === '/')) i++;
            i += 2;
            continue;
        }
        // 正则 (整体跳过, 正则内的 // 不算注释)
        if (c === '/' && regexAllowed()) {
            i++;
            let inClass = false;
            while (i < n) {
                const r = code[i];
                if (r === '\\') { i += 2; continue; }
                if (r === '\n') break;
                if (r === '[') inClass = true;
                else if (r === ']') inClass = false;
                else if (r === '/' && !inClass) { i++; break; }
                i++;
            }
            while (i < n && /[A-Za-z]/.test(code[i])) i++;
            lastChar = '/'; lastWord = '';
            continue;
        }
        if (/[A-Za-z_$]/.test(c)) {
            let w = '';
            while (i < n && /[A-Za-z0-9_$]/.test(code[i])) { w += code[i]; i++; }
            lastWord = w;
        } else {
            if (!/[A-Za-z0-9_$]/.test(c)) lastWord = '';
            i++;
        }
        lastChar = code[i - 1] || '';
    }
    if (hits.length) {
        const line = code.slice(0, hits[0]).split('\n').length;
        throw new Error('检测到注释残留 (位置行 ' + line + '), 共 ' + hits.length + ' 处');
    }
}

function buildPackageJson() {
    const src = JSON.parse(fs.readFileSync(SRC_PKG, 'utf8'));
    const pkg = {
        name: PKG_NAME,
        version: PKG_VERSION,
        description: 'Kisama Agent - Node.js implementation (publish build)',
        main: 'index.js',
        scripts: {
            start: 'node index.js',
            dev: 'node index.js',
        },
        bin: { start: 'index.js' },
        dependencies: src.dependencies,
        engines: { node: '>=18.0.0' },
        author: src.author || '',
        license: src.license || 'UNLICENSED',
        files: ['index.js', 'README.md'],
        overrides: src.overrides,
    };
    return pkg;
}

function main() {
    const argv = process.argv.slice(2);
    let replaceName = null;
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === '-n' || argv[i] === '--name') replaceName = argv[++i];
    }

    if (!fs.existsSync(INPUT_FILE)) {
        console.error('输入文件不存在: ' + INPUT_FILE);
        process.exit(1);
    }

    let raw = fs.readFileSync(INPUT_FILE, 'utf8');
    raw = replaceBrand(raw, replaceName);
    const obfuscated = sanitize(raw);

    assertSyntax(obfuscated, '混淆产物');
    assertAscii(obfuscated);
    assertNoComments(obfuscated);

    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(OUT_ENTRY, obfuscated, 'utf8');
    fs.writeFileSync(OUT_PKG, JSON.stringify(buildPackageJson(), null, 2) + '\n', 'utf8');

    const srcSize = raw.length;
    const outSize = obfuscated.length;
    const saved = srcSize > 0 ? (100 - Math.round(outSize / srcSize * 100)) : 0;
    console.log('已生成混淆产物: ' + OUT_ENTRY + ' (' + outSize + ' B, 较源码 -' + saved + '%)');
    console.log('已生成 npm 包描述: ' + OUT_PKG + ' (name=' + PKG_NAME + ' v' + PKG_VERSION + ')');
    if (replaceName) console.log('品牌词 kisama 已替换为: ' + replaceName.replace(/[^\x00-\x7f]/g, ''));
}

main();
