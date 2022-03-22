using Microsoft.AspNetCore.Mvc;
using Maj2021.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System;


namespace Maj2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SilosController:ControllerBase
    {
        public Context Context;

        public SilosController(Context context)
        {
            Context=context;
        }

        [Route("DodavanjeSilosa/{idFabrike}/{oznaka}/{kapacitet}/{trenutnaKolicina}")]
        [HttpPost]
        public async Task<ActionResult> dodajSilos(int idFabrike, string oznaka, int kapacitet, int trenutnaKolicina)
        {
            Fabrika f=Context.Fabrike.Where(f => f.ID==idFabrike).FirstOrDefault();

            if(f==null)
            {
                return BadRequest("Ne postoji takva fabrika!");
            }
            Silos s=new Silos();

            if(oznaka=="") s.Oznaka="Silos";
            else s.Oznaka=oznaka;
            s.Kapacitet=kapacitet;
            s.TrenutnaKolicina=trenutnaKolicina;
            s.Fabrika=f;

            try
            {
                Context.Add(s);
                await Context.SaveChangesAsync();
                return Ok(s);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzimanjeSilosa/{fabrikaID}")]
        [HttpGet]
        public ActionResult preuzmiSilose(int fabrikaID)
        {
            Fabrika f=Context.Fabrike.Where(f=> f.ID==fabrikaID).Include(f=> f.Silosi).FirstOrDefault();

            if(f==null)
            {
                return BadRequest("Ne postoji takva fabrika!");
            }

            return Ok(f.Silosi);
        }

        [Route("AzurirajSilos/{silosID}/{kolicina}")]
        [HttpPost]
        public async Task<ActionResult> azurirajSilos(int silosID, int kolicina)
        {
            Silos s=Context.Silosi.Where(s=> s.ID==silosID).FirstOrDefault();
            if(s==null)
            {
                return BadRequest("Ne postoji ovaj silos!");
            }

            if(s.TrenutnaKolicina+kolicina>s.Kapacitet)
            {
                return BadRequest("Nema dovoljno mesta!");
            }

            s.TrenutnaKolicina+=kolicina;

            try
            {
                Context.Update(s);
                await Context.SaveChangesAsync();
                return Ok(s);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}