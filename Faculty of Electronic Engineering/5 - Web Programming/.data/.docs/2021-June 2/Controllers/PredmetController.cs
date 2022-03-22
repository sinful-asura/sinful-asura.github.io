using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;
using System;

namespace JunII2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PredmetController:ControllerBase
    {
        public Context Context {get; set;}

        public PredmetController(Context context){Context=context;}

        [Route("DodajPredmet/{naziv}")]
        [HttpPut]
        public async Task<ActionResult> DodajPredmet(string naziv)
        {
            var predmet=Context.Predmeti.Where(p=>p.Naziv==naziv).FirstOrDefault();
            if(predmet!=null) return BadRequest("Predmet vec postoji");

            Predmet p=new Predmet();
            p.Naziv=naziv;

            try
            {
                Context.Predmeti.Add(p);
                await Context.SaveChangesAsync();
                return Ok(p);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiPredmete")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiPredmete()
        {
            try
            {
                return Ok(await Context.Predmeti.ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}