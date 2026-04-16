#!/usr/bin/env python3
"""
tools/obfuscator.py

将 py/agent.py 混淆输出到 py/agent_obs.py。
当前混淆策略：
  - 删除模块/函数/类文档字符串
  - 对所有字符串常量进行 Unicode 转义替换
  - 保留函数参数名和接口字段以避免 FastAPI 路由/模型破坏
"""

import ast
import codecs
from pathlib import Path

INPUT_FILE = Path(__file__).resolve().parents[1] / "py" / "agent.py"
OUTPUT_FILE = INPUT_FILE.parent / "agent_obs.py"


class DocstringStripper(ast.NodeTransformer):
    def visit_FunctionDef(self, node: ast.FunctionDef) -> ast.AST:
        self.generic_visit(node)
        if node.body and isinstance(node.body[0], ast.Expr) and isinstance(node.body[0].value, ast.Constant) and isinstance(node.body[0].value.value, str):
            node.body = node.body[1:]
        return node

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef) -> ast.AST:
        self.generic_visit(node)
        if node.body and isinstance(node.body[0], ast.Expr) and isinstance(node.body[0].value, ast.Constant) and isinstance(node.body[0].value.value, str):
            node.body = node.body[1:]
        return node

    def visit_ClassDef(self, node: ast.ClassDef) -> ast.AST:
        self.generic_visit(node)
        if node.body and isinstance(node.body[0], ast.Expr) and isinstance(node.body[0].value, ast.Constant) and isinstance(node.body[0].value.value, str):
            node.body = node.body[1:]
        return node

    def visit_Module(self, node: ast.Module) -> ast.AST:
        self.generic_visit(node)
        if node.body and isinstance(node.body[0], ast.Expr) and isinstance(node.body[0].value, ast.Constant) and isinstance(node.body[0].value.value, str):
            node.body = node.body[1:]
        return node


class NameObfuscator(ast.NodeTransformer):
    def __init__(self) -> None:
        super().__init__()
        self.func_index = 0
        self.global_name_map: dict[str, str] = {}
        self.protected_method_names: set[str] = set()
        self.scope_stack: list[dict[str, str]] = [dict()]

    def _bind_name(self, name: str) -> None:
        if name in ('self', 'cls'):
            return
        self.scope_stack[-1][name] = name

    def _collect_names(self, node: ast.AST) -> None:
        if isinstance(node, ast.Attribute):
            if isinstance(node.value, ast.Name) and node.value.id in ('self', 'cls'):
                self.protected_method_names.add(node.attr)

        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            if node.name == 'dispatch':
                # Framework hooks like BaseHTTPMiddleware.dispatch cannot be renamed.
                for child in getattr(node, 'body', []):
                    if isinstance(child, ast.AST):
                        self._collect_names(child)
                return
            if not (node.name.startswith('__') and node.name.endswith('__')) and not node.name.startswith('_'):
                if node.name not in self.protected_method_names:
                    if node.name not in self.global_name_map:
                        self.func_index += 1
                        self.global_name_map[node.name] = f"fn_{self.func_index}"
            for child in getattr(node, 'body', []):
                if isinstance(child, ast.AST):
                    self._collect_names(child)
            return

        if isinstance(node, ast.ClassDef):
            for child in node.body:
                if isinstance(child, ast.AST):
                    self._collect_names(child)
            return

        if isinstance(node, ast.Module):
            for child in node.body:
                if isinstance(child, ast.AST):
                    self._collect_names(child)
            return

        for _, value in ast.iter_fields(node):
            if isinstance(value, list):
                for item in value:
                    if isinstance(item, ast.AST):
                        self._collect_names(item)
            elif isinstance(value, ast.AST):
                self._collect_names(value)

    def visit_Module(self, node: ast.Module) -> ast.AST:
        self.scope_stack = [dict()]
        self.func_index = 0
        self.global_name_map = {}
        self._collect_names(node)
        self.generic_visit(node)
        return node

    def visit_FunctionDef(self, node: ast.FunctionDef) -> ast.AST:
        if node.name in self.global_name_map:
            node.name = self.global_name_map[node.name]

        self.scope_stack.append({})
        self.generic_visit(node)
        self.scope_stack.pop()
        return node

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef) -> ast.AST:
        if node.name in self.global_name_map:
            node.name = self.global_name_map[node.name]

        self.scope_stack.append({})
        self.generic_visit(node)
        self.scope_stack.pop()
        return node

    def visit_arg(self, node: ast.arg) -> ast.AST:
        self._bind_name(node.arg)
        return node

    def visit_Name(self, node: ast.Name) -> ast.AST:
        if node.id in ('self', 'cls'):
            return node

        if isinstance(node.ctx, ast.Store):
            self._bind_name(node.id)
            return node

        if not isinstance(node.ctx, ast.Load):
            return node

        for scope in reversed(self.scope_stack):
            if node.id in scope:
                node.id = scope[node.id]
                return node

        if node.id in self.global_name_map:
            node.id = self.global_name_map[node.id]
        return node

    def visit_Attribute(self, node: ast.Attribute) -> ast.AST:
        self.generic_visit(node)
        if isinstance(node.value, ast.Name) and node.value.id in ('self', 'cls'):
            return node
        if node.attr in self.global_name_map:
            node.attr = self.global_name_map[node.attr]
        return node


class StringObfuscator(ast.NodeTransformer):
    def __init__(self) -> None:
        super().__init__()
        self.in_joined_str = False

    def _encode_unicode_escape(self, text: str) -> str:
        result = []
        for ch in text:
            code = ord(ch)
            if code <= 0xFFFF:
                result.append(f"\\u{code:04x}")
            else:
                result.append(f"\\U{code:08x}")
        return ''.join(result)

    def _make_obfuscated_string(self, text: str) -> ast.AST:
        escaped = self._encode_unicode_escape(text)
        return ast.Call(
            func=ast.Attribute(
                value=ast.Name(id="codecs", ctx=ast.Load()),
                attr="decode",
                ctx=ast.Load(),
            ),
            args=[ast.Constant(value=escaped), ast.Constant(value="unicode_escape")],
            keywords=[],
        )

    def _format_value_expr(self, node: ast.FormattedValue) -> ast.expr:
        if node.conversion == 114:  # !r
            converter = ast.Name(id="repr", ctx=ast.Load())
        elif node.conversion == 97:  # !a
            converter = ast.Name(id="ascii", ctx=ast.Load())
        else:
            converter = ast.Name(id="str", ctx=ast.Load())

        converted_value = ast.Call(
            func=converter,
            args=[node.value],
            keywords=[],
        )

        if node.format_spec is not None:
            format_spec = node.format_spec
            if isinstance(format_spec, ast.Constant) and isinstance(format_spec.value, str):
                format_spec = self._make_obfuscated_string(format_spec.value)
            return ast.Call(
                func=ast.Name(id="format", ctx=ast.Load()),
                args=[converted_value, format_spec],
                keywords=[],
            )

        return converted_value

    def visit_JoinedStr(self, node: ast.JoinedStr) -> ast.AST:
        old_flag = self.in_joined_str
        self.in_joined_str = True
        self.generic_visit(node)
        self.in_joined_str = old_flag

        pieces: list[ast.expr] = []
        for value in node.values:
            if isinstance(value, ast.Constant) and isinstance(value.value, str):
                pieces.append(self._make_obfuscated_string(value.value))
            elif isinstance(value, ast.FormattedValue):
                pieces.append(self._format_value_expr(value))
            else:
                pieces.append(value)

        if not pieces:
            return ast.Constant(value="")

        expr = pieces[0]
        for piece in pieces[1:]:
            expr = ast.BinOp(left=expr, op=ast.Add(), right=piece)
        return expr

    def visit_Constant(self, node: ast.Constant) -> ast.AST:
        if isinstance(node.value, str) and not self.in_joined_str:
            return self._make_obfuscated_string(node.value)
        return node


def ensure_codecs_import(tree: ast.Module) -> ast.Module:
    for node in tree.body:
        if isinstance(node, ast.Import):
            if any(alias.name == 'codecs' for alias in node.names):
                return tree
        if isinstance(node, ast.ImportFrom) and node.module == 'codecs':
            return tree

    insert_at = 0
    if tree.body and isinstance(tree.body[0], ast.Expr) and isinstance(tree.body[0].value, ast.Constant) and isinstance(tree.body[0].value.value, str):
        insert_at = 1
    tree.body.insert(insert_at, ast.Import(names=[ast.alias(name='codecs', asname=None)]))
    return tree


def make_obfuscated_source(source: str) -> str:
    tree = ast.parse(source)
    tree = DocstringStripper().visit(tree)
    tree = StringObfuscator().visit(tree)
    tree = NameObfuscator().visit(tree)
    tree = ensure_codecs_import(tree)
    ast.fix_missing_locations(tree)
    return ast.unparse(tree)


def write_output(source: str) -> None:
    OUTPUT_FILE.write_text(source, encoding="utf-8")
    print(f"✔️  已生成混淆文件: {OUTPUT_FILE}")


def main() -> int:
    if not INPUT_FILE.exists():
        print(f"❌ 输入文件不存在: {INPUT_FILE}")
        return 1

    raw = INPUT_FILE.read_text(encoding="utf-8")
    obf_source = make_obfuscated_source(raw)
    if raw == obf_source:
        print("⚠️  未检测到任何变化，仍会写入输出文件")
    write_output(obf_source)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
