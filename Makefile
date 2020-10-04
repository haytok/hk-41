.PHONY: dev-build
dev-build:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml build

.PHONY: dev-up
dev-up:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

.PHONY: dev-down
dev-down:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

.PHONY: prod-build
prod-build:
	docker-compose build

.PHONY: prod-up
prod-up:
	docker-compose up

.PHONY: prod-down
prod-down:
	docker-compose down
