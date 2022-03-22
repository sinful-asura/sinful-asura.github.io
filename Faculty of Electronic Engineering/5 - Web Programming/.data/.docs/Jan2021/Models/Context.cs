using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options):base(options){}

        public DbSet<Grad> Gradovi {get; set;}
        public DbSet<MeteoroloskiPodatak> Podaci {get; set;}
    }
}