//go:build cgo

package main

/*
#include <stdlib.h>
*/
import "C"

import "github.com/liveqte/kisama_agent/logger"

//export StartServer
func StartServer(host *C.char, port *C.char, ecdsaPub *C.char, eciesPub *C.char) C.int {
	if host != nil {
		if err := setEnv("HOST", C.GoString(host)); err != nil {
			logger.Errorf("Failed to configure host: %v", err)
			return 1
		}
	}
	if port != nil {
		if err := setEnv("PORT", C.GoString(port)); err != nil {
			logger.Errorf("Failed to configure port: %v", err)
			return 1
		}
	}
	if ecdsaPub != nil {
		if err := setEnv("ECDSA_PUBKEY", C.GoString(ecdsaPub)); err != nil {
			logger.Errorf("Failed to configure ECDSA key: %v", err)
			return 1
		}
	}
	if eciesPub != nil {
		if err := setEnv("ECIES_PUBKEY", C.GoString(eciesPub)); err != nil {
			logger.Errorf("Failed to configure ECIES key: %v", err)
			return 1
		}
	}
	if err := setEnv("DEBUG", "true"); err != nil {
		logger.Errorf("Failed to configure debug mode: %v", err)
		return 1
	}

	if err := run(); err != nil {
		logger.Errorf("Failed to start Kisama Agent: %v", err)
		return 1
	}
	return 0
}
