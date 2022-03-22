using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Septembar2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SastojakSaKolicinomController:ControllerBase
    {
        public Context Context {get; set;}
        public SastojakSaKolicinomController(Context context){Context=context;}

        [Route("DodajProizvodu/{idProizvoda}/{idSastojka}/{kolicina}")]
        [HttpPost]
        public async Task<ActionResult> DodajProizvodu(int idProizvoda, int idSastojka, int kolicina)
        {
            if(kolicina<=0) return BadRequest("Nevalidna kolicina!");
            var sastojak=Context.Sastojci.Where(s=> s.ID==idSastojka).FirstOrDefault();
            if(sastojak==null) return BadRequest("Nepostojeci sastojak!");
            var Proizvod=Context.Proizvodi.Where(p=> p.ID==idProizvoda).FirstOrDefault();
            if(Proizvod==null) return BadRequest("Nepostojeci proizvod!");

            SastojakSaKolicinom s=new SastojakSaKolicinom();
            s.Sastojak=sastojak;
            s.Kolicina=kolicina;
            s.Proizvod=Proizvod;

            try
            {
                Context.SastojciSaKolicinom.Add(s);
                await Context.SaveChangesAsync();
                return Ok(s);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("DodajUFrizider/{idSastojka}/{idProdavnice}/{kolicina}")]
        [HttpPost]
        public async Task<ActionResult> DodajUFrizider(int idSastojka, int idProdavnice, int kolicina)
        {
            var prodavnica=Context.Prodavnice.Where(p=> p.ID==idProdavnice).Include(p=> p.SastojciSaKolicinom).FirstOrDefault();
            if(prodavnica==null) return BadRequest("Nepostojeca prodavnica!");

            var sastojak=Context.Sastojci.Where(s=> s.ID==idSastojka).FirstOrDefault();
            if(sastojak==null) return BadRequest("Nepostojeci sastojak!");

            SastojakSaKolicinom postoji=null;

            foreach(SastojakSaKolicinom s in prodavnica.SastojciSaKolicinom)
            {
                if(s.Sastojak==sastojak)
                {
                    postoji=s;
                    break;
                }
            }

            if(postoji==null)
            {
                SastojakSaKolicinom sast=new SastojakSaKolicinom();
                sast.Sastojak=sastojak;
                sast.Kolicina=kolicina;
                sast.Prodavnica=prodavnica;
                Context.SastojciSaKolicinom.Add(sast);
                await Context.SaveChangesAsync();
                return Ok(sast);
            }
            else
            {
                postoji.Kolicina+=kolicina;
                Context.SastojciSaKolicinom.Update(postoji);
                await Context.SaveChangesAsync();
                return Ok(postoji);
            }

        }

        
    }
}