# ==============================================================================
# Main

build:
	go build -tags dynamic ./cmd/main.go

test:
	go test -tags dynamic -cover ./...

run:
	go run ./cmd/main.go


# ==============================================================================
# Tools commands

run-linter:
	echo "Starting linters"
	golangci-lint run ./...

swagger:
	echo "Generating swagger documentation"
	swag init -g **/**/*.go

protogen:
	protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative pkg/grpc/secretManager/secretManager.proto
