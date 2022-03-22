using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;
using Models;
using System;

namespace OktobarII2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProizvodController:ControllerBase
    {
        public Context Context {get; set;}
        public ProizvodController(Context context){Context=context;}

        [Route("DodajProizvod/{naziv}/{tip}/{kolicina}/{cena}/{prodavnicaID}")]
        [HttpPut]
        public async Task<ActionResult> DodajProizvod(string naziv, string tip, int kolicina, int cena, int prodavnicaID)
        {
            if(kolicina<0||cena<0) return BadRequest("Neodgovarajuci parametri!");
            var Prod=Context.Prodavnice.Where(p=>p.ID==prodavnicaID).FirstOrDefault();
            if(Prod==null)return BadRequest("Nepostojeca prodavnica!");
            var provera=Context.Proizvodi.Where(p=> p.Naziv==naziv && p.Prodavnica.ID==prodavnicaID).FirstOrDefault();
            if(provera!=null) return BadRequest("Ovaj proizvod vec postoji!");

            Proizvod p=new Proizvod();
            p.Naziv=naziv;
            p.Tip=tip;
            p.Kolicina=kolicina;
            p.Cena=cena;
            p.Prodavnica=Prod;

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

        [Route("IzmeniProizvod/{id}/{kolicina}/{cena}")]
        [HttpPost]
        public async Task<ActionResult>IzmeniProizvod(int id, int kolicina, int cena)
        {
            if(kolicina<0||cena<=0) return BadRequest("Neodgovarajuci parametri!");
            Proizvod p=Context.Proizvodi.Where(p=>p.ID==id).FirstOrDefault();
            if(p==null) return BadRequest("Nepostojeci proizvod!");

            p.Cena=cena;
            p.Kolicina=kolicina;

            try
            {
                Context.Proizvodi.Update(p);
                await Context.SaveChangesAsync();
                return Ok(p);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("UmanjiKolicinu/{id}/{kolicina}")]
        [HttpPost]
        public async Task<ActionResult> UmanjiKolicinu(int id, int kolicina)
        {
            var P=Context.Proizvodi.Where(p=> p.ID==id).FirstOrDefault();
            if(P==null) return BadRequest("Nepostojeci proizvod!");
            if(kolicina>P.Kolicina) return BadRequest("Prevelika kolicina!");
            P.Kolicina-=kolicina;
            try
            {
                Context.Proizvodi.Update(P);
                await Context.SaveChangesAsync();
                return Ok(P);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}