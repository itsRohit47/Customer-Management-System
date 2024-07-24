@echo off

REM Start the Docker Compose services
docker compose up -d

REM Check the status of the services
docker compose ps