using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace Models
{
    [Table("Proizvodi")]
    public class Proizvod
    {
        [Key]
        public int ID {get; set;}

        [Required]
        public string Naziv {get; set;}

        [Required]
        public string Tip {get; set;}

        [Required]
        public int Kolicina {get; set;}

        [Required]
        public int Cena {get; set;}

        [JsonIgnore]
        public Prodavnica Prodavnica {get; set;}
    }
}