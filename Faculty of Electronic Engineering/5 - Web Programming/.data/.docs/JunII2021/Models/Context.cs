using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options): base(options){}

        public DbSet<IspitniRok> IspitniRokovi {get; set;}
        public DbSet<Student> Studenti {get; set;}
        public DbSet<Predmet> Predmeti {get; set;}
        public DbSet<Spoj> Spojevi {get; set;}
    }
}