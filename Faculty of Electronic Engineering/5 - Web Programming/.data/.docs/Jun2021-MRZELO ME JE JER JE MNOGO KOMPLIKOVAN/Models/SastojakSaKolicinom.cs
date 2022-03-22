using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("SastojciSaKolicinom")]
    public class SastojakSaKolicinom
    {
        [Key]
        public int ID {get; set;}
        public Sastojak Sastojak {get; set;}
        public int Kolicina {get; set;}

        [JsonIgnore]
        public Prodavnica Prodavnica {get; set;}

        [JsonIgnore]
        public Proizvod Proizvod {get; set;}
    }
}