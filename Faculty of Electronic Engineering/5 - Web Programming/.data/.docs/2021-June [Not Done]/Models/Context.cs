using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options):base(options){}
        public DbSet<Prodavnica> Prodavnice {get; set;}
        public DbSet<Proizvod> Proizvodi {get; set;}
        public DbSet<Sastojak> Sastojci {get; set;}
        public DbSet<SastojakSaKolicinom> SastojciSaKolicinom {get; set;}
    }
}