#!/bin/bash

# Kisama Agent - Go Implementation Quick Start Guide

set -e

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         Kisama Agent - Go Implementation                      ║"
echo "║                  Quick Start Guide                            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Function to print section headers
print_section() {
    echo ""
    echo "▶ $1"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
}

# Function to print step
print_step() {
    echo "  [$1] $2"
}

# Check prerequisites
print_section "检查前置条件"

if ! command -v go &> /dev/null; then
    print_step "❌" "Go 未安装"
    echo ""
    echo "  请安装 Go 1.21 或更高版本"
    echo "  访问: https://golang.org/dl"
    exit 1
fi

GO_VERSION=$(go version | grep -oP 'go\K[0-9.]+')
print_step "✅" "Go 版本: $GO_VERSION"

if ! command -v git &> /dev/null; then
    print_step "⚠️" "Git 未安装（可选）"
else
    print_step "✅" "Git 已安装"
fi

# Project setup
print_section "项目设置"

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
print_step "📍" "项目目录: $PROJECT_DIR"

# Navigate to project directory
cd "$PROJECT_DIR"

# Download dependencies
print_section "下载依赖"
print_step "⏳" "下载 Go 模块..."
go mod download
print_step "✅" "依赖下载完成"

# Build the binary
print_section "编译二进制"
print_step "⏳" "编译中..."
go build -o agent -ldflags="-s -w" main.go
print_step "✅" "编译完成"

# Display build info
print_section "构建信息"
print_step "📦" "二进制位置: ./agent"
print_step "💾" "大小: $(du -h agent | cut -f1)"
print_step "🔍" "架构: $(file agent | grep -oP '(x86-64|ARM|aarch64)')"

# Show configuration options
print_section "配置选项"
echo ""
echo "  环境变量（可选）:"
echo ""
echo "    调试:"
echo "      DEBUG=true              - 启用调试模式"
echo "      LOG_LEVEL=0             - 日志级别 (0=DEBUG, 1=INFO, 2=WARN, 3=ERROR)"
echo ""
echo "    服务器:"
echo "      HOST=0.0.0.0            - 绑定地址"
echo "      PORT=8000               - 监听端口"
echo ""
echo "    执行:"
echo "      EXEC_TIMEOUT=30         - 命令执行超时（秒）"
echo "      EXEC_SHELL=true         - 使用 shell 执行"
echo ""
echo "    文件:"
echo "      FILE_ROOT=/home         - 文件根目录"
echo "      MAX_UPLOAD_SIZE=...     - 最大上传大小（字节）"
echo ""

# Show usage options
print_section "使用方式"
echo ""
echo "  1️⃣  普通运行:"
echo "    $ ./agent"
echo ""
echo "  2️⃣  调试模式:"
echo "    $ DEBUG=true LOG_LEVEL=0 ./agent"
echo ""
echo "  3️⃣  自定义端口:"
echo "    $ PORT=9000 ./agent"
echo ""
echo "  4️⃣  使用 Make:"
echo "    $ make run              # 编译并运行"
echo "    $ make dev              # 调试模式"
echo "    $ make docker-run       # Docker运行"
echo ""

# Show verification steps
print_section "验证安装"
echo ""
echo "  服务器启动后，使用以下命令测试:"
echo ""
echo "  1️⃣  健康检查:"
echo "    $ curl http://localhost:8000/health"
echo ""
echo "  2️⃣  获取系统信息:"
echo "    $ curl -X GET http://localhost:8000/api/baseinfo \\"
echo "        -H 'x-debug: true' \\"
echo "        -H 'Content-Type: application/json'"
echo ""
echo "  3️⃣  执行命令:"
echo "    $ curl -X POST http://localhost:8000/api/exec \\"
echo "        -H 'x-debug: true' \\"
echo "        -H 'Content-Type: application/json' \\"
echo "        -d '{\"cmd\":\"echo hello\"}'"
echo ""

# Show Docker option
print_section "Docker 运行（可选）"
echo ""
echo "  使用 Docker 运行代理:"
echo "    $ make docker-run"
echo ""
echo "  或手动构建和运行:"
echo "    $ docker build -t kisama-agent:go ."
echo "    $ docker run -p 8000:8000 kisama-agent:go"
echo ""

# Show next steps
print_section "后续步骤"
echo ""
echo "  📖 查看详细文档:"
echo "    - README.md             - 项目说明"
echo "    - TESTING.md            - 测试指南"
echo "    - COMPARISON.md         - JS vs Go 对比"
echo ""
echo "  🚀 启动服务:"
echo "    $ ./agent"
echo ""
echo "  📊 监控日志:"
echo "    $ tail -f agent.log     (如果配置了日志文件)"
echo ""

# Final message
print_section "完成！"
echo ""
echo "  🎉 Go 版本的 Kisama Agent 已准备就绪！"
echo ""
echo "  运行以下命令启动服务:"
echo "    $ ./agent"
echo ""
echo "  默认访问地址: http://localhost:8000"
echo ""
echo "  获取更多帮助信息，访问 README.md"
echo ""
