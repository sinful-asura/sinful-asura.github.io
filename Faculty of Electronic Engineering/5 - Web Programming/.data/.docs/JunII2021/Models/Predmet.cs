using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Predmeti")]
    public class Predmet
    {
        [Key]
        public int ID {get; set;}

        [Required]
        public string Naziv {get; set;}
        
        [JsonIgnore]
        public List<Spoj> Spojevi {get; set;}

    }
}