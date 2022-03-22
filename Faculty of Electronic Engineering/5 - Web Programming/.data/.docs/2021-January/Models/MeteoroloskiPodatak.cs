using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Podaci")]
    public class MeteoroloskiPodatak
    {
        [Key]
        public int ID {get; set;}
        public int Mesec {get; set;}
        public int PTemperatura {get; set;}
        public int KolicinaPadavina {get; set;}

        [Range(0,31)]
        public int BrSDana {get; set;}

        [JsonIgnore]
        public Grad Grad {get; set;}
    }
}
