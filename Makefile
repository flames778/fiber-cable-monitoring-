# Makefile for Nigeria Network Intelligence (NNI)

.PHONY: up down build logs db-shell clean

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose up -d --build

logs:
	docker-compose logs -f

db-shell:
	docker exec -it nni-postgres psql -U nni_user -d nni_db

clean: down
	docker system prune -f
