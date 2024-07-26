using CmsApi;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add environment variables configuration
builder.Configuration.AddEnvironmentVariables();

// Add controllers
builder.Services.AddControllers();

// Add API explorer endpoints
builder.Services.AddEndpointsApiExplorer();

// Add Swagger generation
builder.Services.AddSwaggerGen();

// Get the connection string from configuration
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Add the CustomerDbContext to the services with the specified connection string
builder.Services.AddDbContext<CustomerDbContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // Enable Swagger and Swagger UI in development environment
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Redirect HTTP requests to HTTPS
app.UseHttpsRedirection();

// Enable Cross-Origin Resource Sharing (CORS)
app.UseCors(policy =>
{
    policy.AllowAnyHeader();
    policy.AllowAnyMethod();
    policy.AllowAnyOrigin();
});

// Enable authorization
app.UseAuthorization();

// Map controllers
app.MapControllers();

// Run the application
app.Run();

