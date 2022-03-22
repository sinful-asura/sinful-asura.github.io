using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class IspitDbContext : DbContext
    {
        // DbSet...

        public IspitDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}
