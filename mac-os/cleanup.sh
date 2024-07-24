# Stop the Docker Compose services
docker compose down

# Optionally remove all stopped containers, unused networks, dangling images, and build cache
docker system prune -f

docker system prune --volumes -f