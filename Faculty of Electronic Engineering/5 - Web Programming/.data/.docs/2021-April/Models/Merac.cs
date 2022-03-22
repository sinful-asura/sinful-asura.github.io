using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    [Table("Meraci")]
    public class Merac
    {
        [Key]
        public int ID {get; set;}
        public string Naziv {get; set;}
        public int MaxIzmerena {get; set;}
        public int MinIzmerena {get; set;}
        public int DonjaGranica {get; set;}
        public int GronjaGranica {get; set;}
        public string Boja {get; set;} //red, green, blue je ok
        public int TrenutnaVrednost {get; set;}
        public int ZbirIzmerenih {get; set;}
        public int BrojMerenja {get; set;}
        public int Podeok {get; set;}

    }
}