//go:build !windows

package utils

import (
	"os"
	"os/user"
	"strconv"
	"syscall"
)

// platformFileOwner 在 Unix 系平台通过底层 Sys() 反射抽取真实的 UID/GID，
// 并优雅转换为系统用户名与组名（如 "root", "ubuntu"）。
func platformFileOwner(fi os.FileInfo) (string, string, error) {
	uidStr := "0"
	gidStr := "0"

	if stat, ok := fi.Sys().(*syscall.Stat_t); ok {
		uidStr = strconv.FormatUint(uint64(stat.Uid), 10)
		gidStr = strconv.FormatUint(uint64(stat.Gid), 10)

		if u, err := user.LookupId(uidStr); err == nil {
			uidStr = u.Username
		}
		if g, err := user.LookupGroupId(gidStr); err == nil {
			gidStr = g.Name
		}
	}

	return uidStr, gidStr, nil
}
