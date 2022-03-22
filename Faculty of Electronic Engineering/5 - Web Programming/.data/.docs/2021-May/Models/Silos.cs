using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Maj2021.Models
{
    [Table("Silosi")]
    public class Silos
    {
        [Key]
        public int ID {get; set; }
        public string Oznaka {get; set; }
        public int Kapacitet {get; set; }
        public int TrenutnaKolicina {get; set; }
        
        [JsonIgnore]
        public Fabrika Fabrika {get; set; }
    }
}