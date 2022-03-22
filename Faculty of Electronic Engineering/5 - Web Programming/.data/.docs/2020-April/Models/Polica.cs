using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Police")]
    public class Polica
    {
        [Key]
        public int ID {get; set;}

        [Required]
        public string Oznaka {get; set;}
        
        [Required]
        public int MaxDiskova {get; set;}

        [Required]
        public int TrenutnoDiskova {get; set;}

        [JsonIgnore]
        public VideoKlub VideoKlub {get; set;}
    }
}