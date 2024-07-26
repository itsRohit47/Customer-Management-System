FROM mysql:latest

# Set the root password for MySQL
ENV MYSQL_ROOT_PASSWORD=my-secret-pw

# Copy the init.sql file to the docker-entrypoint-initdb.d directory
COPY ./init.sql /docker-entrypoint-initdb.d/