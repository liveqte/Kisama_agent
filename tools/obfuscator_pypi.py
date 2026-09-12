#!/usr/bin/env python3
"""
tools/obfuscator_pypi.py

生成用于 PyPI 审查的轻量混淆版本 py/agent_pypi.py。

该模式只做对人工审查友好的最小混淆：
  - 去除注释与文档字符串
  - 将整个文件内所有字符串常量（含 f-string）里的非 ASCII 字符（中文、emoji 等）清成 ASCII
  - 支持通过 -n 参数把 kisama / Kisama / KISAMA 等品牌词整体替换为指定值，抹除文件特征；
    白名单中的关键运行时标识（KISAMA_EDGE_INSECURE、kisama_terminal_v1、kisama-ws-token-v1 等）会被保留，避免功能被破坏
  - 保留公开接口的标识符、FastAPI 路由与 Pydantic 字段名，避免破坏运行时语义
  - 不引入 codecs.decode / unicode_escape / base64 动态解码或 O0_* 乱码命名

用法示例:
    python tools/obfuscator_pypi.py -n aaa
"""

import argparse
import ast
import re
import sys
from pathlib import Path

INPUT_FILE = Path(__file__).resolve().parents[1] / "py" / "agent.py"
OUTPUT_FILE = INPUT_FILE.parent / "agent_pypi.py"

_NON_ASCII_RE = re.compile(r"[^\x00-\x7f]")
_ASCII_ONLY_RE = re.compile(r"^[\x00-\x7f]*$")
_CJK_RE = re.compile(r"[\u4e00-\u9fff]")


def _is_ascii(text: str) -> bool:
    return _ASCII_ONLY_RE.match(text) is not None


def _ascii_only(text: str, strip: bool = False) -> str:
    cleaned = _NON_ASCII_RE.sub("", text)
    if strip:
        cleaned = cleaned.strip()
    return cleaned


_BRAND_PROTECTION_WHITELIST = [
    "kisama_terminal_v1",
    "kisama-ws-token-v1",
    "KISAMA_EDGE_INSECURE",
]


def _replace_brand(source: str, replacement: str) -> str:
    """把 kisama / Kisama / KISAMA 等品牌词整体替换为指定值，但保留白名单中的关键标识。"""
    if not replacement:
        return source
    replacement = _ascii_only(replacement)

    placeholders: dict[str, str] = {}
    for index, token in enumerate(_BRAND_PROTECTION_WHITELIST):
        placeholder = f"__KPROTECTED_{index}__"
        placeholders[placeholder] = token
        if token in source:
            source = source.replace(token, placeholder)

    def _sub(_match):
        return replacement

    source = re.sub(r"kisama", _sub, source, flags=re.IGNORECASE)

    for placeholder, token in placeholders.items():
        source = source.replace(placeholder, token)

    return source


class DocstringStripper(ast.NodeTransformer):
    def _strip_body_docstring(self, body):
        if body and isinstance(body[0], ast.Expr) and isinstance(body[0].value, ast.Constant) and isinstance(body[0].value.value, str):
            return body[1:]
        return body

    def visit_FunctionDef(self, node: ast.FunctionDef) -> ast.AST:
        self.generic_visit(node)
        node.body = self._strip_body_docstring(node.body)
        return node

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef) -> ast.AST:
        self.generic_visit(node)
        node.body = self._strip_body_docstring(node.body)
        return node

    def visit_ClassDef(self, node: ast.ClassDef) -> ast.AST:
        self.generic_visit(node)
        node.body = self._strip_body_docstring(node.body)
        return node

    def visit_Module(self, node: ast.Module) -> ast.AST:
        self.generic_visit(node)
        node.body = self._strip_body_docstring(node.body)
        return node


class _NonAsciiRemover(ast.NodeTransformer):
    """递归移除所有字符串常量里的非 ASCII 字符。"""

    def visit_Constant(self, node: ast.Constant) -> ast.AST:
        if isinstance(node.value, str):
            node.value = _ascii_only(node.value)
        return node


def make_pypi_source(source: str, replace_name: str | None = None) -> str:
    """生成 PyPI 审查友好的源码。"""
    if replace_name:
        source = _replace_brand(source, replace_name)

    tree = ast.parse(source, filename=str(INPUT_FILE))
    tree = DocstringStripper().visit(tree)
    tree = _NonAsciiRemover().visit(tree)
    ast.fix_missing_locations(tree)
    # ast.unparse 会移除所有注释，并输出合法且可解析的源码。
    return ast.unparse(tree)


def write_output(source: str) -> None:
    OUTPUT_FILE.write_text(source, encoding="utf-8", newline="")
    print(f"已生成 PyPI 审查友好文件: {OUTPUT_FILE}")


def _parse_args(argv=None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="生成 PyPI 审查友好的 agent 源码")
    parser.add_argument("-n", "--name", dest="name", default=None,
                       help="将源码中的 kisama/Kisama/KISAMA 替换为该值（默认不替换）")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    if argv is None:
        argv = sys.argv[1:]
    args = _parse_args(argv)
    if not INPUT_FILE.exists():
        print(f"输入文件不存在: {INPUT_FILE}")
        return 1

    raw = INPUT_FILE.read_text(encoding="utf-8")
    pypi_source = make_pypi_source(raw, replace_name=args.name)
    write_output(pypi_source)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
