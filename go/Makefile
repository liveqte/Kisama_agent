.PHONY: help build build-windows run clean test docker-build docker-run docker-stop dev

help:
	@echo "Kisama Agent - Go Implementation"
	@echo ""
	@echo "Available targets:"
	@echo "  make build         - Build the agent binary"
	@echo "  make build-windows - Build Windows agent binaries (amd64/arm64)"
	@echo "  make run           - Run the agent locally"
	@echo "  make dev           - Run in debug mode"
	@echo "  make clean         - Remove build artifacts"
	@echo "  make test          - Run tests"
	@echo "  make docker-build  - Build Docker image"
	@echo "  make docker-run    - Run Docker container"
	@echo "  make docker-stop   - Stop Docker container"
	@echo "  make fmt           - Format code"
	@echo "  make lint          - Lint code"

build:
	@echo "Building agent binary..."
	@go build -o agent -buildvcs=false -ldflags="-s -w" main.go
	@echo "✅ Build completed: ./agent"

build-windows:
	@echo "Building Windows agent binaries..."
	@CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -trimpath -buildvcs=false -ldflags="-s -w" -o agent-windows-amd64.exe main.go
	@CGO_ENABLED=0 GOOS=windows GOARCH=arm64 go build -trimpath -buildvcs=false -ldflags="-s -w" -o agent-windows-arm64.exe main.go
	@echo "✅ Build completed: ./agent-windows-amd64.exe ./agent-windows-arm64.exe"

run: build
	@echo "Starting agent..."
	@./agent

dev: build
	@echo "Starting agent in debug mode..."
	@DEBUG=true LOG_LEVEL=0 ./agent

clean:
	@echo "Cleaning build artifacts..."
	@rm -f agent agent-windows-amd64.exe agent-windows-arm64.exe
	@go clean
	@echo "✅ Clean completed"

test:
	@echo "Running tests..."
	@go test -v ./...

docker-build:
	@echo "Building Docker image..."
	@docker build -t kisama-agent:go .
	@echo "✅ Docker image built"

docker-run: docker-build
	@echo "Running Docker container..."
	@docker-compose up -d
	@echo "✅ Docker container started"
	@echo "Access at: http://localhost:8000"

docker-stop:
	@echo "Stopping Docker container..."
	@docker-compose down
	@echo "✅ Docker container stopped"

fmt:
	@echo "Formatting code..."
	@go fmt ./...
	@echo "✅ Code formatted"

lint:
	@echo "Linting code..."
	@golint ./...
	@echo "✅ Lint completed"

deps:
	@echo "Downloading dependencies..."
	@go mod download
	@go mod tidy
	@echo "✅ Dependencies downloaded"

version:
	@echo "Kisama Agent - Go Implementation"
	@echo "Version: 0.4.5-go"
