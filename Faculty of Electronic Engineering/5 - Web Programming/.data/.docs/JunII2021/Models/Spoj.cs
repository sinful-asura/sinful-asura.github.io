using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Spojevi")]
    public class Spoj
    {
        [Key]
        public int ID {get; set;}
        
        [JsonIgnore]
        public Student Student {get; set;}

        [JsonIgnore]
        public IspitniRok IspitniRok {get; set;}

        [JsonIgnore]
        public Predmet Predmet {get; set;}

        [Required]
        [Range(6,10)]
        public int Ocena {get; set;}
    }
}