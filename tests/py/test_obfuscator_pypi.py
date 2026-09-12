#!/usr/bin/env python3
"""Tests for the PyPI review-friendly source generator."""

import ast
import io
import re
import sys
import tempfile
import unittest
from contextlib import redirect_stdout
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))

import tools.obfuscator_pypi as generator

SAMPLE_SOURCE = '''#!/usr/bin/env python3
"""Sample module docstring."""
import sys

# sample comment
import time


def demo(x: str, y: str = "保留中文") -> str:
    """Demo docstring."""
    normal = "保留中文"
    log = lambda msg: msg
    log("# 中文")
    print("# 中文")
    Logger.info(f"日志 {x}")
    Logger.debug(f"状态 {x} {y!s}")
    return f"{normal} {x}"


class Demo:
    """Class docstring."""

    def method(self, value: str):
        """Method docstring."""
        print("普通打印")
        return value
'''

_CJK_RE = re.compile(r"[\u4e00-\u9fff]")


class MakePypiSourceTests(unittest.TestCase):
    def test_removes_comments_and_docstrings(self) -> None:
        result = generator.make_pypi_source(SAMPLE_SOURCE)

        self.assertNotIn("sample comment", result)
        self.assertNotIn("Sample module docstring", result)
        self.assertNotIn("Demo docstring", result)
        self.assertNotIn("Class docstring", result)
        self.assertNotIn("Method docstring", result)
        self.assertNotIn("#!", result)  # shebang comment removed

    def test_keeps_console_output_ascii(self) -> None:
        result = generator.make_pypi_source(SAMPLE_SOURCE)

        self.assertIsNone(_CJK_RE.search(result), f"result still contains CJK: {result!r}")

    def test_non_console_strings_are_ascii_fied(self) -> None:
        result = generator.make_pypi_source(SAMPLE_SOURCE)

        self.assertNotIn("保留中文", result)
        self.assertIsNone(_CJK_RE.search(result))

    def test_keeps_function_and_class_names(self) -> None:
        result = generator.make_pypi_source(SAMPLE_SOURCE)

        self.assertIn("def demo", result)
        self.assertIn("class Demo", result)
        self.assertIn("def method", result)

    def test_replaces_kisama_with_replace_name(self) -> None:
        source = '''
kisama_token = "kisama-terminal"
KISAMA_EDGE = "Kisama edge"

def f():
    return KISAMA_EDGE
'''
        result = generator.make_pypi_source(source, replace_name="aaa")

        # KISAMA_EDGE is not in the whitelist, so it is renamed too.
        self.assertNotIn("kisama", result.lower())
        self.assertIn("aaa_EDGE", result)

    def test_replaces_brand_but_protects_whitelist(self) -> None:
        source = '''
import os

edge = os.getenv("KISAMA_EDGE_INSECURE")
prologue = b"kisama_terminal_v1"
token = b"kisama-ws-token-v1"
brand = "kisama"
'''
        result = generator.make_pypi_source(source, replace_name="aaa")

        self.assertIn("KISAMA_EDGE_INSECURE", result)
        self.assertIn("kisama_terminal_v1", result)
        self.assertIn("kisama-ws-token-v1", result)
        self.assertIn("aaa", result)
        self.assertNotIn('"kisama"', result)

    def test_preserves_parsed_ast_shape(self) -> None:
        result = generator.make_pypi_source(SAMPLE_SOURCE)
        ast.parse(result)

    def test_rejects_invalid_python(self) -> None:
        with self.assertRaises(SyntaxError):
            generator.make_pypi_source("def broken(:\n")


class WriteOutputTests(unittest.TestCase):
    def test_writes_source_unchanged(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            output = Path(tmpdir) / "agent_pypi.py"
            sample = "x = 1\n"
            with patch.object(generator, "OUTPUT_FILE", output):
                generator.write_output(sample)

            self.assertEqual(output.read_text(encoding="utf-8"), sample)


class MainTests(unittest.TestCase):
    def test_main_writes_generated_source(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            root = Path(tmpdir)
            source_file = root / "agent.py"
            output_file = root / "agent_pypi.py"
            source_file.write_text(SAMPLE_SOURCE, encoding="utf-8")

            with patch.object(generator, "INPUT_FILE", source_file), patch.object(
                generator, "OUTPUT_FILE", output_file
            ), redirect_stdout(io.StringIO()):
                status = generator.main([])

            self.assertEqual(status, 0)
            self.assertTrue(output_file.exists())
            result = output_file.read_text(encoding="utf-8")
            self.assertNotIn("sample comment", result)
            self.assertNotIn("Sample module docstring", result)

    def test_main_with_name_replaces_brand(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            root = Path(tmpdir)
            source_file = root / "agent.py"
            output_file = root / "agent_pypi.py"
            source_file.write_text('brand = "kisama"\n', encoding="utf-8")

            with patch.object(generator, "INPUT_FILE", source_file), patch.object(
                generator, "OUTPUT_FILE", output_file
            ), redirect_stdout(io.StringIO()):
                status = generator.main(["-n", "aaa"])

            self.assertEqual(status, 0)
            result = output_file.read_text(encoding="utf-8")
            self.assertNotIn("kisama", result.lower())
            self.assertIn("aaa", result)

    def test_main_returns_one_when_input_is_missing(self) -> None:
        with tempfile.TemporaryDirectory() as tmpdir:
            root = Path(tmpdir)
            source_file = root / "missing.py"
            output_file = root / "agent_pypi.py"

            with patch.object(generator, "INPUT_FILE", source_file), patch.object(
                generator, "OUTPUT_FILE", output_file
            ), redirect_stdout(io.StringIO()):
                status = generator.main([])

            self.assertEqual(status, 1)
            self.assertFalse(output_file.exists())


class RepositorySourceTests(unittest.TestCase):
    def test_repository_agent_stays_valid_and_lightly_obfuscated(self) -> None:
        source = (ROOT / "py" / "agent.py").read_text(encoding="utf-8")
        result = generator.make_pypi_source(source, replace_name="aaa")

        ast.parse(result, filename="py/agent_pypi.py")

        # comment markers from the original source are gone
        self.assertNotIn("依赖导入", result)
        self.assertNotIn("服务启动", result)

        # the whole file no longer contains CJK characters
        self.assertIsNone(
            _CJK_RE.search(result),
            f"repository PyPI source still contains CJK",
        )

        # whitelist tokens survive the brand replacement
        for token in ("KISAMA_EDGE_INSECURE", "kisama_terminal_v1", "kisama-ws-token-v1"):
            self.assertIn(token, result)

        # non-whitelist kisama identifiers are replaced
        self.assertIn("_aaa_hkdf_sha256", result)
        self.assertNotIn("_kisama_hkdf_sha256", result)


if __name__ == "__main__":
    unittest.main()
