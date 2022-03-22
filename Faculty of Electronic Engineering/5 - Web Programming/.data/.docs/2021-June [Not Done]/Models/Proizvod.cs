using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Proizvodi")]
    public class Proizvod
    {
        [Key]
        public int ID {get; set;}
        public string Naziv {get; set;}
        public List<SastojakSaKolicinom> Sastojci {get; set;}
        [JsonIgnore]
        public Prodavnica Prodavnica {get; set;}
    }
}