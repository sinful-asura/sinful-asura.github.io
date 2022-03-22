using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System;

namespace Models
{
    [Table("Mecevi")]
    public class Mec 
    {
        [Key]
        public int ID {get; set;}
        public List<Igrac> Igraci {get; set;}
        public string Lokacija {get; set;}

        public int Setovi1 {get; set;}
        public int Setovi2 {get; set;}
        public int PoeniS1I1 {get; set;}
        public int PoeniS2I1 {get; set;}
        public int PoeniS1I2 {get; set;}
        public int PoeniS2I2 {get; set;}
        public DateTime Datum {get; set;}
    }
}