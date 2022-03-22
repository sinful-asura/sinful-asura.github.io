using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Maj2021.Models
{
    [Table("Fabrike")]
    public class Fabrika
    {
        [Key]
        public int ID {get; set; }
        public string Naziv {get; set; }
        public List<Silos> Silosi {get; set; }
    }
}