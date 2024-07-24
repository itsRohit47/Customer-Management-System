@echo off

docker-compose down

docker system prune -f

docker system prune --volumes -f
