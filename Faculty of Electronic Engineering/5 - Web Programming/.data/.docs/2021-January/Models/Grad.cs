using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Models
{
    [Table("Gradovi")]
    public class Grad
    {
        [Key]
        public int ID {get; set;}
        public string Ime {get; set;}
        public double X {get; set;}
        public double Y {get; set;}
        public List<MeteoroloskiPodatak> Podaci {get; set;}

    }
}
