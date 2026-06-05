.PHONY: help build run clean test docker-build docker-run docker-stop dev

help:
	@echo "Kisama Agent - Go Implementation"
	@echo ""
	@echo "Available targets:"
	@echo "  make build         - Build the agent binary"
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
	@go build -o agent -ldflags="-s -w" main.go
	@echo "✅ Build completed: ./agent"

run: build
	@echo "Starting agent..."
	@./agent

dev: build
	@echo "Starting agent in debug mode..."
	@DEBUG=true LOG_LEVEL=0 ./agent

clean:
	@echo "Cleaning build artifacts..."
	@rm -f agent
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
	@echo "Version: 0.1.2-go"
