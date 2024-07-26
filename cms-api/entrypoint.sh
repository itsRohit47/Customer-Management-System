#!/bin/sh

# Wait for MySQL to be ready
echo "Waiting for MySQL to be available..."
sleep 10

# Run migrations
echo "Running database migrations..."
dotnet ef database update

# Insert initial data
echo "Inserting initial data..."
mysql -h mysql -u root -p my-secret-pw CustomerDb < /app/initial-data.sql

# Start the .NET application
echo "Starting the application..."
exec dotnet CmsApi.dll