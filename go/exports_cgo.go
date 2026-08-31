//go:build cgo

package main

/*
#include <stdlib.h>
*/
import "C"

import (
	"github.com/liveqte/kisama_agent/go/kisama"
	"github.com/liveqte/kisama_agent/go/logger"
)

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
	// 🔐 安全修复：不再强制 DEBUG=true。内嵌场景 (libkisama.so) 此前会以全认证绕过模式
	// 暴露命令执行/文件接口，任何能触达端口的调用方均可免鉴权 RCE。
	// 生产语义：宿主程序必须提供 ECDSA/ECIES 公钥，认证链路与独立部署完全一致。

	service, err := kisama.NewServiceFromEnv()
	if err != nil {
		logger.Errorf("Failed to create Kisama service: %v", err)
		return 1
	}
	if err := service.Run(); err != nil {
		logger.Errorf("Failed to start Kisama Agent: %v", err)
		return 1
	}
	return 0
}
