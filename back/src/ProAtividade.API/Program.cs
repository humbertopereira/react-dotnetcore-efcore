using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ProAtividade.API.Data;

var builder = WebApplication.CreateBuilder(args);

ConfigurationManager Configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddDbContext<DataContext>(
    options => options.UseSqlite(Configuration.GetConnectionString("Default"))
);

builder.Services.AddCors();
builder.Services.AddControllers().AddJsonOptions(
    options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    }
);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Estudo",
        Version = "v1"
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

}
//app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(option =>
    option.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin()
);

app.MapControllers();

app.Run();
