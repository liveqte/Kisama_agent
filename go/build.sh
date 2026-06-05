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

echo "🔨 Building binary..."
go build -o agent -ldflags="-s -w" main.go

echo ""
echo "✅ Build successful!"
echo ""
echo "📍 Binary location: ./agent"
echo ""
echo "To start the agent:"
echo "  ./agent"
echo ""
echo "With debug mode:"
echo "  DEBUG=true LOG_LEVEL=0 ./agent"
echo ""
echo "With custom configuration:"
echo "  PORT=9000 DEBUG=true ./agent"
echo ""
echo "Using Make:"
echo "  make run       - Build and run"
echo "  make dev       - Build and run in debug mode"
echo "  make docker-run - Build and run in Docker"
echo ""
