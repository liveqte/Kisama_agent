package utils

// DetectMarks returns host capability marks in the fixed order required by
// docs/API.MD section 15: root, kvm, pterodactyl, systemd, fuse.
//
// The result is always a non-nil slice: serializing it must produce [] rather
// than null when no mark hits. Non-Linux platforms return an empty slice.
func DetectMarks() []string {
	marks := detectMarksLinux()
	if marks == nil {
		return []string{}
	}
	return marks
}
