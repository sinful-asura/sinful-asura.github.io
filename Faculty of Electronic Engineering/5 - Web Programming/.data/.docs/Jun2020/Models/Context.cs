using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options):base(options){}
        public DbSet<Mec> Mecevi {get; set;}
        public DbSet<Igrac> Igraci {get; set;}
    }
}