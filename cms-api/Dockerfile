# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY . ./
RUN dotnet restore
RUN dotnet build -c Release -o out
RUN dotnet publish -c Release -o out

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Entry point for the application
ENTRYPOINT ["dotnet", "CmsApi.dll"]
