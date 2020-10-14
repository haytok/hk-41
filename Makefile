# 開発環境
.PHONY: dev-build
dev-build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml build

.PHONY: dev-up
dev-up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

.PHONY: dev-down
dev-down:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

# 本番環境のテスト
.PHONY: test-build
test-build:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml build

.PHONY: test-up
test-up:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up

.PHONY: test-down
test-down:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml down

# 本番環境
.PHONY: prod-build
prod-build:
	docker-compose build

.PHONY: prod-up
prod-up:
	docker-compose up

.PHONY: prod-down
prod-down:
	docker-compose down
