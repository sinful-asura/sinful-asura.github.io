using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Septembar2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PorizvodController:ControllerBase
    {
        public Context Context {get; set;}
        public PorizvodController(Context context){Context=context;}

        [Route("DodajProizvod/{idProd}/{naziv}")]
        [HttpPost]
        public async Task<ActionResult> DodajProizvod(int idProd, string naziv)
        {
            var prod=Context.Prodavnice.Where(p=> p.ID==idProd).FirstOrDefault();
            if(prod==null) return BadRequest("Nepostojeca prodavnica!");

            Proizvod p=new Proizvod();
            p.Prodavnica=prod;
            p.Naziv=naziv;

            try
            {
                Context.Proizvodi.Add(p);
                await Context.SaveChangesAsync();
                return Ok(p);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("Poruci/{id}/{kolicina}")]
        [HttpPut]
        public async Task<ActionResult> Poruci(int id, int kolicina)
        {
            var p=Context.Proizvodi.Where(p=> p.ID==id).Include(p=>p.Prodavnica).FirstOrDefault();
            if(p==null) return BadRequest("Ne postoji proizvod");

            foreach(SastojakSaKolicinom s in p.Sastojci){
                SastojakSaKolicinom sup=null;
                foreach(SastojakSaKolicinom sas in p.Prodavnica.SastojciSaKolicinom)
                {
                    if(sas.Sastojak==s.Sastojak) 
                    {
                        sup=sas;
                        break;
                    }
                }
                if(sup==null || sup.Kolicina<kolicina*s.Kolicina)
                {
                    return BadRequest("Nema dovoljno materijala!");
                }
            }

            
        }
    }
}