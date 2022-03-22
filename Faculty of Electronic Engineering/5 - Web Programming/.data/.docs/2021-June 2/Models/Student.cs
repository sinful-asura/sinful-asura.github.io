using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Models
{
    [Table("Studenti")]
    public class Student
    {
        [Key]
        public int ID {get; set;}

        [Required]
        public int Index {get; set;}

        [Required]
        public string Ime {get; set;}

        [Required]
        public string Prezime {get; set;}

        public List<Spoj> Spojevi {get; set;}
    }
}