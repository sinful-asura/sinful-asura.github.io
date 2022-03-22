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
    public class IspitniRokController:ControllerBase
    {
        public Context Context {get; set;}

        public IspitniRokController(Context context){Context=context;}

        [Route("DodajIspitniRok/{naziv}")]
        [HttpPut]
        public async Task<ActionResult> DodajIspitniRok(string naziv)
        {
            var ir=Context.IspitniRokovi.Where(p=>p.Naziv==naziv).FirstOrDefault();
            if(ir!=null) return BadRequest("Ispitni rok vec postoji");

            IspitniRok r=new IspitniRok();
            r.Naziv=naziv;

            try
            {
                Context.IspitniRokovi.Add(r);
                await Context.SaveChangesAsync();
                return Ok(r);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiIspitneRokove")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiIspitneRokove()
        {
            try
            {
                return Ok(await Context.IspitniRokovi.ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}