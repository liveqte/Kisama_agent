//go:build !linux

package utils

// detectMarksLinux is a stub on non-Linux platforms: marks are Linux semantics.
func detectMarksLinux() []string {
	return []string{}
}
