#!/bin/bash

set -euo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "$0")" && pwd)
cd "$SCRIPT_DIR"

OUTPUT_DIR="${1:-$SCRIPT_DIR}"
mkdir -p "$OUTPUT_DIR"
rm -f "$OUTPUT_DIR/agent" "$OUTPUT_DIR/agent-linux-amd64" "$OUTPUT_DIR/agent-linux-arm64" "$OUTPUT_DIR/agent-darwin-arm64"
rm -f "$OUTPUT_DIR/libkisama.so" "$OUTPUT_DIR/libkisama-linux-amd64.so" "$OUTPUT_DIR/libkisama-linux-arm64.so"
rm -f "$OUTPUT_DIR/libkisama.h" "$OUTPUT_DIR/libkisama-linux-amd64.h" "$OUTPUT_DIR/libkisama-linux-arm64.h"

echo "🚀 Kisama Agent - Go Implementation"
echo ""

echo "📦 Downloading dependencies..."
go mod download

echo "🔨 Building binaries and shared libraries..."
go mod tidy

CURRENT_OS=$(go env GOOS)
CURRENT_ARCH=$(go env GOARCH)

echo "   ➜ Building binary ${OUTPUT_DIR}/agent..."
if CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o "$OUTPUT_DIR/agent" -ldflags='-s -w' .; then
    echo "      ✓ built linux/amd64 binary"
else
    echo "      ! linux/amd64 binary build skipped due to local toolchain limitations"
fi

if CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -buildmode=c-shared -o "$OUTPUT_DIR/libkisama-linux-amd64.so" -ldflags='-s -w' .; then
    echo "      ✓ built linux/amd64 shared library"
else
    echo "      ! linux/amd64 shared library build skipped due to local toolchain limitations"
fi

echo "   ➜ Building binary ${OUTPUT_DIR}/agent-linux-arm64..."
if CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -o "$OUTPUT_DIR/agent-linux-arm64" -ldflags='-s -w' .; then
    echo "      ✓ built linux/arm64 binary"
else
    echo "      ! linux/arm64 binary build skipped due to local toolchain limitations"
fi

if CGO_ENABLED=1 GOOS=linux GOARCH=arm64 go build -buildmode=c-shared -o "$OUTPUT_DIR/libkisama-linux-arm64.so" -ldflags='-s -w' .; then
    echo "      ✓ built linux/arm64 shared library"
else
    echo "      ! linux/arm64 shared library build skipped due to local toolchain limitations"
fi

if [ "$CURRENT_OS" != "darwin" ] || [ "$CURRENT_ARCH" != "arm64" ]; then
    echo "   ➜ Building for darwin/arm64 (Apple Silicon)..."
    if CGO_ENABLED=0 GOOS=darwin GOARCH=arm64 go build -o "$OUTPUT_DIR/agent-darwin-arm64" -ldflags='-s -w' .; then
        echo "      ✓ built darwin/arm64 binary"
    else
        echo "      ! darwin/arm64 binary build skipped due to local toolchain limitations"
    fi
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "📍 Output locations:"
echo "   • ${OUTPUT_DIR}/agent"
echo "   • ${OUTPUT_DIR}/agent-linux-arm64"
echo "   • ${OUTPUT_DIR}/libkisama-linux-amd64.so"
echo "   • ${OUTPUT_DIR}/libkisama-linux-arm64.so"
if [ -f "$OUTPUT_DIR/agent-darwin-arm64" ]; then
    echo "   • ${OUTPUT_DIR}/agent-darwin-arm64"
fi
