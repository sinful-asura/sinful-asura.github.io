using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options):base(options){}
        public DbSet<Merac> Meraci {get; set;}
    }
}