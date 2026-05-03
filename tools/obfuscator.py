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

    def visit_Module(self, node: ast.Module) -> ast.AST:
        self.generic_visit(node)
        if node.body and isinstance(node.body[0], ast.Expr) and isinstance(node.body[0].value, ast.Constant) and isinstance(node.body[0].value.value, str):
            node.body = node.body[1:]
        return node


class NameObfuscator(ast.NodeTransformer):
    # 框架钩子和保留方法名单
    PROTECTED_METHODS = {'dispatch'}
    # 保护常见的内置属性、FastAPI/请求对象相关的关键字
    PROTECTED_NAMES = {'self', 'cls', 'args', 'kwargs', 'request', 'response'}
    
    def __init__(self) -> None:
        super().__init__()
        self.func_index = 0
        self.var_index = 0
        self.global_name_map: dict[str, str] = {}
        self.class_names: set[str] = set()
        self.scope_stack: list[dict[str, str]] = [dict()]
        self.in_function_depth = 0
        self.in_class_depth = 0  # <--- 新增：追踪是否在类内部
        self.protected_kwargs: set[str] = set()
        
    def visit_ClassDef(self, node: ast.ClassDef) -> ast.AST:
        self.in_class_depth += 1
        self.generic_visit(node)  # 遍历类里面的所有内容
        self.in_class_depth -= 1
        return node
        
    def _collect_kwargs(self, node: ast.AST) -> None:
        # 第一遍扫描：找出所有被用于 kwargs 的参数名
        for child in ast.walk(node):
            if isinstance(child, ast.Call):
                for kw in child.keywords:
                    if kw.arg:
                        self.protected_kwargs.add(kw.arg)

    def _get_obf_name(self, prefix: str) -> str:
        # 使用 O 和 0 交替的命名风格，极大增加阅读理解的难度
        if prefix == 'fn':
            self.func_index += 1
            return f"O0_fn_{self.func_index}"
        else:
            self.var_index += 1
            return f"O0_var_{self.var_index}"

    def _bind_name(self, name: str) -> str:
        # 保护魔法方法和特殊保留字
        if name in self.PROTECTED_NAMES or name.startswith('__'):
            return name
            
        current_scope = self.scope_stack[-1]
        if name not in current_scope:
            current_scope[name] = self._get_obf_name('v')
        return current_scope[name]

    def _collect_names(self, node: ast.AST, in_class: bool = False) -> None:
        if isinstance(node, ast.ClassDef):
            self.class_names.add(node.name)
            for child in node.body:
                if isinstance(child, ast.AST):
                    self._collect_names(child, in_class=True)
            return

        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            if not in_class:
                if not (node.name.startswith('__') and node.name.endswith('__')) and not node.name.startswith('_'):
                    if node.name not in self.PROTECTED_METHODS:
                        if node.name not in self.global_name_map:
                            self.global_name_map[node.name] = self._get_obf_name('fn')
            for child in getattr(node, 'body', []):
                if isinstance(child, ast.AST):
                    self._collect_names(child, in_class=in_class)
            return

        if isinstance(node, ast.Module):
            for child in node.body:
                if isinstance(child, ast.AST):
                    self._collect_names(child, in_class=False)
            return

        for _, value in ast.iter_fields(node):
            if isinstance(value, list):
                for item in value:
                    if isinstance(item, ast.AST):
                        self._collect_names(item, in_class=in_class)
            elif isinstance(value, ast.AST):
                self._collect_names(value, in_class=in_class)

    def visit_Module(self, node: ast.Module) -> ast.AST:
        self.scope_stack = [dict()]
        self.in_function_depth = 0
        self.in_class_depth = 0  # <--- 新增：初始化清零
        self.func_index = 0
        self.var_index = 0
        self.global_name_map = {}
        self.class_names = set()
        self.protected_kwargs = set()
        
        self._collect_kwargs(node)
        self._collect_names(node)
        self.generic_visit(node)
        return node

    def _process_function(self, node: ast.FunctionDef | ast.AsyncFunctionDef) -> ast.AST:
        # 1. 函数名混淆
        if self.in_class_depth == 0 and node.name in self.global_name_map:
            node.name = self.global_name_map[node.name]

        self.scope_stack.append({})
        self.in_function_depth += 1

        # 2. 智能参数混淆策略
        # 如果带有装饰器 (如 @app.get)，认定为 FastAPI 端点，保留参数名不混淆
        is_endpoint = len(node.decorator_list) > 0
        
        # 收集所有类型的参数
        all_args = node.args.posonlyargs + node.args.args + node.args.kwonlyargs
        if node.args.vararg:
            all_args.append(node.args.vararg)
        if node.args.kwarg:
            all_args.append(node.args.kwarg)

        for arg in all_args:
            # 关键修复：如果是 FastAPI 路由，或内置保护词，或被用作关键字传参的词，统统保护起来！
            if is_endpoint or arg.arg in self.PROTECTED_NAMES or arg.arg in self.protected_kwargs:
                self.scope_stack[-1][arg.arg] = arg.arg 
            else:
                arg.arg = self._bind_name(arg.arg)

        # 继续遍历函数体
        self.generic_visit(node)
        
        self.in_function_depth -= 1
        self.scope_stack.pop()
        return node

    def visit_FunctionDef(self, node: ast.FunctionDef) -> ast.AST:
        return self._process_function(node)

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef) -> ast.AST:
        return self._process_function(node)

    def visit_Name(self, node: ast.Name) -> ast.AST:
        if node.id in self.PROTECTED_NAMES or node.id.startswith('__'):
            return node

        # 核心修复点 1：只有在函数内部赋值时才混淆局部变量，绝对保护 Pydantic 模型字段和全局导入
        if isinstance(node.ctx, ast.Store):
            if self.in_function_depth > 0:
                # 核心修复点 2：将生成的新名字实打实地赋值给节点的 id
                node.id = self._bind_name(node.id)
            return node

        if not isinstance(node.ctx, ast.Load):
            return node

        # 读取变量时，去作用域里找混淆后的名字
        for scope in reversed(self.scope_stack):
            if node.id in scope:
                node.id = scope[node.id]
                return node

        # 全局函数名替换
        if node.id in self.global_name_map:
            node.id = self.global_name_map[node.id]
        return node

    def visit_Attribute(self, node: ast.Attribute) -> ast.AST:
        self.generic_visit(node)
        if node.attr not in self.PROTECTED_METHODS and node.attr in self.global_name_map:
            if isinstance(node.value, ast.Name) and node.value.id in ('self', 'cls'):
                node.attr = self.global_name_map[node.attr]
            elif isinstance(node.value, ast.Name) and node.value.id in self.class_names:
                node.attr = self.global_name_map[node.attr]
        return node
    def visit_Nonlocal(self, node: ast.Nonlocal) -> ast.AST:
        # 处理 nonlocal 声明，将外层作用域的混淆名继承到内层
        for i, name in enumerate(node.names):
            if name in self.PROTECTED_NAMES or name.startswith('__'):
                continue
            
            # 在父级作用域（排除当前的最内层）中寻找映射
            for scope in reversed(self.scope_stack[:-1]):
                if name in scope:
                    mapped_name = scope[name]
                    # 1. 继承映射到当前作用域，防止内层 store 产生新变量名
                    self.scope_stack[-1][name] = mapped_name
                    # 2. 修改 AST 节点里的纯字符串
                    node.names[i] = mapped_name
                    break
        return node

    def visit_Global(self, node: ast.Global) -> ast.AST:
        # 处理 global 声明
        for i, name in enumerate(node.names):
            if name in self.PROTECTED_NAMES or name.startswith('__'):
                continue
            
            # 核心修复点：
            # 如果它是被混淆过的全局函数，取混淆名；
            # 如果它是普通的全局变量，保持原名。
            # 无论哪种，都必须强制写入当前局部作用域，防止后续的 Store 操作给它生成乱码新名字！
            mapped_name = self.global_name_map.get(name, name)
            
            self.scope_stack[-1][name] = mapped_name
            node.names[i] = mapped_name
            
        return node
    def _visit_comp(self, node: ast.AST) -> ast.AST:
        # 1. 为推导式创建一个独立的子作用域（继承父级，但不污染父级）
        self.scope_stack.append(self.scope_stack[-1].copy())
        
        # 2. 关键修复：必须先遍历 generators（也就是 for c in xxx 部分），让变量完成混淆注册
        node.generators = [self.visit(gen) for gen in node.generators]
        
        # 3. 然后再遍历前面的返回值表达式
        if isinstance(node, ast.DictComp):
            node.key = self.visit(node.key)
            node.value = self.visit(node.value)
        else:
            node.elt = self.visit(node.elt)
            
        # 4. 弹出作用域
        self.scope_stack.pop()
        return node

    # 接管四种推导式的 AST 节点
    def visit_ListComp(self, node: ast.ListComp) -> ast.AST: 
        return self._visit_comp(node)
        
    def visit_SetComp(self, node: ast.SetComp) -> ast.AST: 
        return self._visit_comp(node)
        
    def visit_DictComp(self, node: ast.DictComp) -> ast.AST: 
        return self._visit_comp(node)
        
    def visit_GeneratorExp(self, node: ast.GeneratorExp) -> ast.AST: 
        return self._visit_comp(node)


class StringObfuscator(ast.NodeTransformer):
    def __init__(self) -> None:
        super().__init__()
        self.in_joined_str = False

    # --- 新增：保护类型注解不被混淆 ---
    def visit_AnnAssign(self, node: ast.AnnAssign) -> ast.AST:
        if node.value:
            node.value = self.visit(node.value)
        node.target = self.visit(node.target)
        return node

    def visit_arg(self, node: ast.arg) -> ast.AST:
        return node

    def visit_FunctionDef(self, node: ast.FunctionDef) -> ast.AST:
        node.args = self.visit(node.args)
        node.body = [self.visit(stmt) for stmt in node.body]
        node.decorator_list = [self.visit(dec) for dec in node.decorator_list]
        return node

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef) -> ast.AST:
        node.args = self.visit(node.args)
        node.body = [self.visit(stmt) for stmt in node.body]
        node.decorator_list = [self.visit(dec) for dec in node.decorator_list]
        return node
    # ----------------------------------

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
            converted_value = ast.Call(func=ast.Name(id="repr", ctx=ast.Load()), args=[node.value], keywords=[])
        elif node.conversion == 97:  # !a
            converted_value = ast.Call(func=ast.Name(id="ascii", ctx=ast.Load()), args=[node.value], keywords=[])
        elif node.conversion == 115: # !s
            converted_value = ast.Call(func=ast.Name(id="str", ctx=ast.Load()), args=[node.value], keywords=[])
        else:
            converted_value = node.value # 修复点：如果不强制转换，则保留原节点

        if node.format_spec is not None:
            format_spec = node.format_spec
            if isinstance(format_spec, ast.Constant) and isinstance(format_spec.value, str):
                format_spec = self._make_obfuscated_string(format_spec.value)
            return ast.Call(
                func=ast.Name(id="format", ctx=ast.Load()),
                args=[converted_value, format_spec],
                keywords=[],
            )

        # 修复点：如果没有 format_spec 也没有任何转换符，必须要套一层 str() 才能做字符串加法拼接
        if node.conversion == -1:
            converted_value = ast.Call(func=ast.Name(id="str", ctx=ast.Load()), args=[converted_value], keywords=[])
            
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
    for i, node in enumerate(tree.body):
        # 允许跳过顶部的字符串字面量 (尽管通常被 DocstringStripper 移除了)
        if isinstance(node, ast.Expr) and isinstance(node.value, ast.Constant) and isinstance(node.value.value, str):
            insert_at = i + 1
        # 关键修复：必须跳过 __future__ 导入
        elif isinstance(node, ast.ImportFrom) and node.module == '__future__':
            insert_at = i + 1
        else:
            break

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
