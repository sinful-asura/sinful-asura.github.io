using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Prodavnice")]
    public class Prodavnica
    {
        [Key]
        public int ID {get; set;}
        public string Naziv {get; set;}
        
        [JsonIgnore]
        public List<Proizvod> Proizvodi {get; set;}
    }
}