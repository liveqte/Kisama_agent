#!/bin/bash

set -euo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "$0")" && pwd)
cd "$SCRIPT_DIR"

OUTPUT_DIR="${1:-$SCRIPT_DIR}"
mkdir -p "$OUTPUT_DIR"

# 清理旧的编译产物
rm -f "$OUTPUT_DIR/agent" "$OUTPUT_DIR/agent-linux-amd64" "$OUTPUT_DIR/agent-linux-arm64" "$OUTPUT_DIR/agent-darwin-arm64"
rm -f "$OUTPUT_DIR/libkisama.so" "$OUTPUT_DIR/libkisama-linux-amd64.so" "$OUTPUT_DIR/libkisama-linux-arm64.so"
rm -f "$OUTPUT_DIR/libkisama.h" "$OUTPUT_DIR/libkisama-linux-amd64.h" "$OUTPUT_DIR/libkisama-linux-arm64.h"

echo "🚀 Kisama Agent - Go Implementation (Zig Static Build)"
echo ""

echo "📦 Downloading dependencies..."
go mod download

echo "🔨 Tidy modules..."
go mod tidy

# 探测本地是否存在 zig 和 patchelf 工具链
if command -v zig >/dev/null 2>&1 && command -v patchelf >/dev/null 2>&1; then
    echo "🌟 跨平台构建工具链 (Zig + patchelf) 准备就绪，开始构建 5 种全平台产物..."
    echo ""

    # 1. linux/amd64 binary (名为 agent)
    echo "   ➜ [1/5] Building binary ${OUTPUT_DIR}/agent (linux/amd64)..."
    CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags='-s -w' -o "$OUTPUT_DIR/agent" .

    # 2. linux/arm64 binary
    echo "   ➜ [2/5] Building binary ${OUTPUT_DIR}/agent-linux-arm64..."
    CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -trimpath -ldflags='-s -w' -o "$OUTPUT_DIR/agent-linux-arm64" .

    # 3. darwin/arm64 binary (Apple Silicon)
    echo "   ➜ [3/5] Building binary ${OUTPUT_DIR}/agent-darwin-arm64 (darwin/arm64)..."
    CGO_ENABLED=0 GOOS=darwin GOARCH=arm64 go build -trimpath -ldflags='-s -w' -o "$OUTPUT_DIR/agent-darwin-arm64" .

    # 4. linux/amd64 static shared library (Zig CC)
    echo "   ➜ [4/5] Building static shared library ${OUTPUT_DIR}/libkisama-linux-amd64.so..."
    CC="zig cc -target x86_64-linux-musl" CXX="zig c++ -target x86_64-linux-musl" CGO_ENABLED=1 GOOS=linux GOARCH=amd64 \
        go build -trimpath -buildmode=c-shared -ldflags='-s -w -linkmode external -extldflags "-Wl,-Bstatic"' -o "$OUTPUT_DIR/libkisama-linux-amd64.so" .
    patchelf --remove-needed libc.so "$OUTPUT_DIR/libkisama-linux-amd64.so"

    # 5. linux/arm64 static shared library (Zig CC)
    echo "   ➜ [5/5] Building static shared library ${OUTPUT_DIR}/libkisama-linux-arm64.so..."
    CC="zig cc -target aarch64-linux-musl" CXX="zig c++ -target aarch64-linux-musl" CGO_ENABLED=1 GOOS=linux GOARCH=arm64 \
        go build -trimpath -buildmode=c-shared -ldflags='-s -w -linkmode external -extldflags "-Wl,-Bstatic"' -o "$OUTPUT_DIR/libkisama-linux-arm64.so" .
    patchelf --remove-needed libc.so "$OUTPUT_DIR/libkisama-linux-arm64.so"

else
    echo "⚠️  未检测到完整的交叉编译工具 (缺少 Zig 或 patchelf)！"
    echo "   ➜ 降级模式：仅构建当前宿主机平台的纯 Go 二进制..."
    echo ""
    
    echo "   ➜ Building binary ${OUTPUT_DIR}/agent (Native OS/ARCH)..."
    CGO_ENABLED=0 go build -trimpath -ldflags='-s -w' -o "$OUTPUT_DIR/agent" .
fi

echo ""
echo "✅ Build successful!"
echo "📍 Output locations:"
ls -lh "$OUTPUT_DIR" | grep -E "^-.*(agent|libkisama)" | awk '{print "   • " $9}'