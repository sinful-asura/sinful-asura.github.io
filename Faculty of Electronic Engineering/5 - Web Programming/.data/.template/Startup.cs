using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Models;

namespace Template
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(p =>
            {
                p.AddPolicy("CORS", builder =>
                {
                    builder.WithOrigins(new string[]
                                {
                                    // Ukoliko se port razlikuje, ovde ga zameniti!

                                    "http://localhost:5500",
                                    "http://127.0.0.1:5500",
                                    "https://localhost:5500",
                                    "https://127.0.0.1:5500"
                                })
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });

            services.AddDbContext<IspitDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("IspitCS"));
            });

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Template", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Template v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CORS");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
