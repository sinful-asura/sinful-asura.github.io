using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Maj2021.Models;
using Microsoft.EntityFrameworkCore;

namespace Maj2021
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

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Maj2021", Version = "v1" });
            });
            services.AddDbContext<Context>(options=>{options.UseSqlServer(Configuration.GetConnectionString("Maj2021"));});
            services.AddCors(options=>{
                options.AddPolicy("P1", builder=>{builder.WithOrigins(new string[]{
                    "http://localhost:8080",
                    "https://localohost:8080",
                    "http://127.0.0.1:8080",
                    "https://127.0.0.1:8080",
                    "http://127.0.0.1:5500",
                    "https://127.0.0.1:5500",

                }).AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();});
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Maj2021 v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("P1");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
