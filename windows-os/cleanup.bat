@echo off
@REM Stop the containers
docker-compose down

@REM Remove the network
docker network rm my-network
