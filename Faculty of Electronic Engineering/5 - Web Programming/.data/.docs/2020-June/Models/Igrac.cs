using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Text.Json.Serialization;


namespace Models
{
    [Table("Igraci")]
    public class Igrac
    {
        [Key]
        public int ID {get; set;}
        public string Ime {get; set;}
        public string Prezime {get; set;}
        public int Godine {get; set;}
        public int ATPRang {get; set;}
        public string Link {get; set;}

        [JsonIgnore]
        public List<Mec> Mecevi {get; set;}
    }
}