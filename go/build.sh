#!/bin/bash

# Quick start script for Kisama Agent

set -e

echo "🚀 Kisama Agent - Go Implementation"
echo ""

# Check if Go is installed
if ! command -v go &> /dev/null; then
    echo "❌ Go is not installed. Please install Go 1.21 or later."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "go.mod" ]; then
    echo "❌ go.mod not found. Please run this script from the Go agent directory."
    exit 1
fi

echo "📦 Downloading dependencies..."
go mod download

echo "🔨 Building binaries..."

# 1. Build for current architecture
CURRENT_OS=$(go env GOOS)
CURRENT_ARCH=$(go env GOARCH)
echo "   ➜ Building for current architecture (${CURRENT_OS}/${CURRENT_ARCH})..."
CGO_ENABLED=0 go build -o agent -ldflags="-s -w" main.go

# 2. Build for Linux ARM64 (Most common server ARM architecture)
echo "   ➜ Building for linux/arm64..."
CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -o agent-linux-arm64 -ldflags="-s -w" main.go

# 3. Build for macOS ARM64 (Apple Silicon) if not already building it natively
if [ "$CURRENT_OS" != "darwin" ] || [ "$CURRENT_ARCH" != "arm64" ]; then
    echo "   ➜ Building for darwin/arm64 (Apple Silicon)..."
    CGO_ENABLED=0 GOOS=darwin GOARCH=arm64 go build -o agent-darwin-arm64 -ldflags="-s -w" main.go
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "📍 Binary locations:"
echo "   • ./agent               (Current: ${CURRENT_OS}/${CURRENT_ARCH})"
echo "   • ./agent-linux-arm64   (Linux ARM64)"
if [ -f "agent-darwin-arm64" ]; then
    echo "   • ./agent-darwin-arm64    (macOS Apple Silicon)"
fi
echo ""
echo "To start the agent (current architecture):"
echo "  ./agent"
echo ""
echo "With debug mode:"
echo "  DEBUG=true LOG_LEVEL=0 ./agent"
echo ""
echo "With custom configuration:"
echo "  PORT=9000 DEBUG=true ./agent"
echo ""
echo "Using Make:"
echo "  make run        - Build and run"
echo "  make dev        - Build and run in debug mode"
echo "  make docker-run - Build and run in Docker"
echo ""