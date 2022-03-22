using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Models;

namespace April2020.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PolicaController:ControllerBase
    {
        public Context Context {get; set;}
        public PolicaController(Context context){Context=context;}

        [Route("DodajPolicu/{idKluba}/{oznaka}/{max}/{trenutno}")]
        [HttpPost]
        public async Task<ActionResult> DodajPolicu(int idKluba, string oznaka, int max, int trenutno)
        {
            if(trenutno>max) return BadRequest("Neodgovarajuci parametri!");
            var Klub=Context.Klubovi.Where(k=> k.ID==idKluba).FirstOrDefault();
            if(Klub==null) return BadRequest("Nepostojeci klub!");

            var provera=Context.Police.Where(p=> p.Oznaka==oznaka).FirstOrDefault();
            if(provera!=null) return BadRequest("Polica sa ovom oznakom vec postoji!");

            Polica p=new Polica();
            p.VideoKlub=Klub;
            p.Oznaka=oznaka;
            if(max<=0) p.MaxDiskova=10;
            else p.MaxDiskova=max;
            if(trenutno<=0) p.TrenutnoDiskova=5;
            else p.TrenutnoDiskova=trenutno;

            try
            {
                Context.Police.Add(p);
                await Context.SaveChangesAsync();
                return Ok(p);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("DodajDiskove/{id}/{broj}")]
        [HttpPut]
        public async Task<ActionResult> DodajDiskove(int id, int broj)
        {
            var polica=Context.Police.Where(p=> p.ID==id).FirstOrDefault();
            if(polica==null) return BadRequest("Nepostojeca polica!");

            if(polica.TrenutnoDiskova+broj>polica.MaxDiskova) return BadRequest("Nema dovoljno mesta na polici!");

            polica.TrenutnoDiskova+=broj;

            try
            {
                Context.Police.Update(polica);
                await Context.SaveChangesAsync();
                return Ok(polica);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}