using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Maj2021.Models
{
    public class Context:DbContext
    {
        public DbSet<Silos> Silosi {get; set; }
        public DbSet<Fabrika> Fabrike {get; set; }
        public Context(DbContextOptions Options): base(Options){}
    }
}