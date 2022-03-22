using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options):base(options){}

        public DbSet<VideoKlub> Klubovi {get; set;}
        public DbSet<Polica> Police {get; set;}
    }
}