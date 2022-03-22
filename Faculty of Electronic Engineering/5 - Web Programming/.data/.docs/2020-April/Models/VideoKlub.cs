using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Models
{
    [Table("Klubovi")]
    public class VideoKlub
    {
        [Key]
        public int ID {get; set;}

        [Required]
        public string Naziv {get; set;}

        public List<Polica> Police {get; set;}
    }
}