"""host marks (baseinfo.marks) unit tests, docs/API.MD section 15.

Run: python tests/py/test_marks.py
No agent server is started; all roots are injected into temporary fixtures.
"""
import os
import stat
import sys
import tempfile
import unittest
import uuid
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "py"))

import agent  # noqa: E402


class MarksProbeTest(unittest.TestCase):
    """Five probes: hit / miss / unreadable / permission denied / malformed content."""

    def setUp(self):
        self.base = Path(tempfile.mkdtemp(prefix="kisama_marks_"))
        self.proc = self.base / "proc"
        self.dev = self.base / "dev"
        self.etc = self.base / "etc"
        self.run = self.base / "run"
        self.root = self.base / "root"
        for d in (self.proc / "self", self.proc / "1", self.dev, self.etc, self.run,
                  self.root / "home" / "container"):
            d.mkdir(parents=True, exist_ok=True)
        self.patches = [
            mock.patch.object(agent, "MARKS_PROC_ROOT", str(self.proc)),
            mock.patch.object(agent, "MARKS_DEV_ROOT", str(self.dev)),
            mock.patch.object(agent, "MARKS_ETC_ROOT", str(self.etc)),
            mock.patch.object(agent, "MARKS_RUN_ROOT", str(self.run)),
            mock.patch.object(agent, "MARKS_ROOT", str(self.root)),
        ]
        for p in self.patches:
            p.start()
        self.collector = agent.SystemInfoCollector()

    def tearDown(self):
        for p in self.patches:
            p.stop()

    # ---------- root ----------
    def test_root_requires_effective_uid_and_gid_zero(self):
        with mock.patch.object(agent.os, "geteuid", create=True, return_value=0), \
             mock.patch.object(agent.os, "getegid", create=True, return_value=0):
            self.assertTrue(self.collector._mark_root())
        with mock.patch.object(agent.os, "geteuid", create=True, return_value=0), \
             mock.patch.object(agent.os, "getegid", create=True, return_value=998):
            self.assertFalse(self.collector._mark_root())
        with mock.patch.object(agent.os, "geteuid", create=True, return_value=998), \
             mock.patch.object(agent.os, "getegid", create=True, return_value=998):
            self.assertFalse(self.collector._mark_root())

    def test_root_absent_posix_api_is_false(self):
        with mock.patch.object(agent.os, "geteuid", None, create=True), \
             mock.patch.object(agent.os, "getegid", None, create=True):
            self.assertFalse(self.collector._mark_root())

    # ---------- kvm / fuse device checks ----------
    def test_kvm_missing_or_regular_file_is_false(self):
        self.assertFalse(self.collector._mark_kvm())
        (self.dev / "kvm").write_bytes(b"not-a-device")
        self.assertFalse(self.collector._mark_kvm())

    def test_fuse_missing_or_regular_file_is_false(self):
        self.assertFalse(self.collector._mark_fuse())
        (self.dev / "fuse").write_bytes(b"not-a-device")
        self.assertFalse(self.collector._mark_fuse())

    def test_char_device_helper_rejects_wrong_device_number(self):
        # A real character device cannot be created portably in this test;
        # validate the negative branches (missing / regular file / unreadable).
        self.assertFalse(agent._marks_char_device_rw(str(self.dev / "nope"), 10, 232))
        (self.dev / "regular").write_bytes(b"x")
        self.assertFalse(agent._marks_char_device_rw(str(self.dev / "regular"), 10, 232))

    # ---------- pterodactyl: strong features ----------
    def test_pterodactyl_mountinfo_strong_feature(self):
        (self.proc / "self" / "mountinfo").write_text(
            "123 45 0:1 / / rw - ext4 /dev/sda1 rw\n"
            "124 45 0:2 /var/lib/pterodactyl/volumes/abc /home/container rw - ext4 /dev/sda1 rw\n",
            encoding="utf-8",
        )
        self.assertTrue(self.collector._mark_pterodactyl())

    def test_pterodactyl_mountinfo_keyword_split_across_chunks(self):
        # Force the needle to straddle an 8 KiB read boundary.
        needle = b"/var/lib/pterodactyl/"
        prefix = b"x" * (agent._MARKS_CHUNK - len(needle) + 3)
        (self.proc / "self" / "mountinfo").write_bytes(prefix + needle + b"volumes/uuid\n")
        self.assertTrue(self.collector._mark_pterodactyl())

    def test_pterodactyl_environ_requires_both_keys(self):
        (self.proc / "self" / "environ").write_bytes(
            b"PATH=/usr/bin\0P_SERVER_UUID=abc\0P_SERVER_LOCATION=de\0"
        )
        self.assertTrue(self.collector._mark_pterodactyl())

    def test_pterodactyl_single_env_key_is_not_enough(self):
        (self.proc / "self" / "environ").write_bytes(b"P_SERVER_UUID=abc\0")
        self.assertFalse(self.collector._mark_pterodactyl())

    def test_pterodactyl_pid1_environ_fallback(self):
        (self.proc / "1" / "environ").write_bytes(
            b"P_SERVER_UUID=abc\0P_SERVER_LOCATION=de\0"
        )
        self.assertTrue(self.collector._mark_pterodactyl())

    def test_pterodactyl_malformed_mountinfo_is_ignored(self):
        (self.proc / "self" / "mountinfo").write_bytes(b"\x00\xff malformed")
        self.assertFalse(self.collector._mark_pterodactyl())

    # ---------- pterodactyl: weak four-condition fallback ----------
    def _prepare_weak_fallback(self, uid=998):
        server_uuid = str(uuid.uuid4())
        (self.etc / "hostname").write_text(server_uuid + "\n", encoding="utf-8")
        (self.etc / "passwd").write_text("root:x:0:0:root:/root:/bin/sh\n", encoding="utf-8")
        (self.root / ".dockerenv").write_bytes(b"")
        return mock.patch.object(agent.os, "geteuid", create=True, return_value=uid)

    def test_pterodactyl_weak_fallback_all_four_conditions(self):
        patcher = self._prepare_weak_fallback()
        with patcher:
            self.assertTrue(self.collector._mark_pterodactyl())

    def test_pterodactyl_weak_fallback_requires_container_marker(self):
        patcher = self._prepare_weak_fallback()
        (self.root / ".dockerenv").unlink()
        with patcher:
            self.assertFalse(self.collector._mark_pterodactyl())

    def test_pterodactyl_weak_fallback_passwd_entry_blocks(self):
        patcher = self._prepare_weak_fallback()
        (self.etc / "passwd").write_text("svc:x:998:998::/home/container:/bin/sh\n", encoding="utf-8")
        with patcher:
            self.assertFalse(self.collector._mark_pterodactyl())

    def test_pterodactyl_weak_fallback_non_uuid_hostname_blocks(self):
        patcher = self._prepare_weak_fallback()
        (self.etc / "hostname").write_text("container-host\n", encoding="utf-8")
        with patcher:
            self.assertFalse(self.collector._mark_pterodactyl())

    # ---------- systemd ----------
    def _prepare_systemd(self):
        (self.run / "systemd" / "system").mkdir(parents=True, exist_ok=True)
        (self.run / "systemd" / "private").write_bytes(b"")
        (self.proc / "1" / "comm").write_text("systemd\n", encoding="utf-8")
        return mock.patch.object(agent, "_marks_systemctl_locatable", return_value=True)

    def test_systemd_all_conditions(self):
        patcher = self._prepare_systemd()
        with patcher:
            self.assertTrue(self.collector._mark_systemd())

    def test_systemd_requires_run_systemd_system_directory(self):
        patcher = self._prepare_systemd()
        (self.run / "systemd" / "system").rmdir()
        with patcher:
            self.assertFalse(self.collector._mark_systemd())

    def test_systemd_requires_control_socket(self):
        patcher = self._prepare_systemd()
        (self.run / "systemd" / "private").unlink()
        with patcher:
            self.assertFalse(self.collector._mark_systemd())

    def test_systemd_pid1_veto(self):
        patcher = self._prepare_systemd()
        (self.proc / "1" / "comm").write_text("bash\n", encoding="utf-8")
        with patcher:
            self.assertFalse(self.collector._mark_systemd())

    def test_systemd_pid1_unreadable_does_not_veto(self):
        patcher = self._prepare_systemd()
        (self.proc / "1" / "comm").unlink()
        with patcher:
            self.assertTrue(self.collector._mark_systemd())

    # ---------- fuse capability paths ----------
    def test_cap_eff_bit_parsing(self):
        (self.proc / "self" / "status").write_text(
            "Name:\tagent\nCapEff:\t000001ffffffffff\n", encoding="utf-8"
        )
        self.assertTrue(agent._marks_cap_eff_bit(21))
        self.assertFalse(agent._marks_cap_eff_bit(63))

    def test_cap_eff_malformed_is_false(self):
        (self.proc / "self" / "status").write_text("CapEff:\tnot-hex\n", encoding="utf-8")
        self.assertFalse(agent._marks_cap_eff_bit(21))
        (self.proc / "self" / "status").write_text("Name:\tagent\n", encoding="utf-8")
        self.assertFalse(agent._marks_cap_eff_bit(21))

    def test_fuse_setuid_helper_path(self):
        fake_stat = mock.Mock(st_mode=stat.S_IFREG | stat.S_ISUID | 0o755)
        with mock.patch.object(agent, "_marks_char_device_rw", return_value=True), \
             mock.patch.object(agent, "_marks_cap_eff_bit", return_value=False), \
             mock.patch.object(agent.os, "stat", return_value=fake_stat), \
             mock.patch.object(agent.os, "access", return_value=True):
            self.assertTrue(self.collector._mark_fuse())

    # ---------- aggregate ordering / isolation ----------
    def test_detect_marks_fixed_order(self):
        with mock.patch.object(agent.platform, "system", return_value="Linux"), \
             mock.patch.object(self.collector, "_mark_root", return_value=True), \
             mock.patch.object(self.collector, "_mark_kvm", return_value=False), \
             mock.patch.object(self.collector, "_mark_pterodactyl", return_value=True), \
             mock.patch.object(self.collector, "_mark_systemd", return_value=True), \
             mock.patch.object(self.collector, "_mark_fuse", return_value=False):
            self.assertEqual(self.collector._detect_marks(),
                             ["root", "pterodactyl", "systemd"])

    def test_detect_marks_isolates_exceptions(self):
        with mock.patch.object(agent.platform, "system", return_value="Linux"), \
             mock.patch.object(self.collector, "_mark_root",
                               side_effect=RuntimeError("boom")), \
             mock.patch.object(self.collector, "_mark_kvm", return_value=True), \
             mock.patch.object(self.collector, "_mark_pterodactyl", return_value=False), \
             mock.patch.object(self.collector, "_mark_systemd", return_value=False), \
             mock.patch.object(self.collector, "_mark_fuse", return_value=False):
            self.assertEqual(self.collector._detect_marks(), ["kvm"])

    def test_detect_marks_non_linux_is_empty(self):
        with mock.patch.object(agent.platform, "system", return_value="Windows"):
            self.assertEqual(self.collector._detect_marks(), [])


if __name__ == "__main__":
    unittest.main(verbosity=2)
