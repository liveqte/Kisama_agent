//go:build windows

package utils

import "os"

// platformFileOwner 在 Windows 上没有 POSIX UID/GID 概念，保持默认 "0"/"0"，
// 与原有类型断言失败时的兜底行为一致。
func platformFileOwner(fi os.FileInfo) (string, string, error) {
	return "0", "0", nil
}
