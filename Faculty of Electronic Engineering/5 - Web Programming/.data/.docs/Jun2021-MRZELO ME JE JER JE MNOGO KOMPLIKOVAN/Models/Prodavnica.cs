using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Prodavnice")]
    public class Prodavnica
    {
        [Key]
        public int ID {get; set;}
        public string Naziv {get; set;}
        public List<SastojakSaKolicinom> SastojciSaKolicinom {get; set;}
        public List<Proizvod> Proizvodi {get; set;}
    }
}