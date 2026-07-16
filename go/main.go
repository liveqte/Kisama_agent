package main

import (
	"fmt"
	"os"

	"github.com/liveqte/kisama_agent/go/kisama"
	"github.com/liveqte/kisama_agent/go/logger"
)

func main() {
	if err := run(); err != nil {
		logger.Errorf("Failed to start Kisama Agent: %v", err)
		os.Exit(1)
	}
}

func setEnv(key, value string) error {
	if err := os.Setenv(key, value); err != nil {
		return fmt.Errorf("failed to set environment variable %s: %w", key, err)
	}
	return nil
}

func run() error {
	service, err := kisama.NewServiceFromEnv()
	if err != nil {
		return err
	}
	return service.Run()
}
