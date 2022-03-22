using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options):base(options){}
        public DbSet<Proizvod> Proizvodi {get; set;}
        public DbSet<Prodavnica> Prodavnice {get; set;}
    }
}