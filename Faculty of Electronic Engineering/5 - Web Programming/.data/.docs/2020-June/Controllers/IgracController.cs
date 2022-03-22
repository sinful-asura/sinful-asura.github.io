using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Linq;
using Models;

namespace Jun2020.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IgracController:ControllerBase
    {
        public Context Context {get; set;}
        public IgracController(Context context){Context=context;}

        [Route("DodajIgraca/{ime}/{prezime}/{godine}/{rang}/{slika}")]
        [HttpPut]
        public async Task<ActionResult> DodajIgraca(string ime, string prezime, int godine, int rang, string slika)
        {
            if(godine<10 || godine>50 || rang<=0) return BadRequest("Neodgovarajuci podaci!");

            var i=new Igrac();
            i.Ime=ime;
            i.Prezime=prezime;
            i.Godine=godine;
            i.ATPRang=rang;
            i.Link=slika;

            try
            {
                Context.Igraci.Add(i);
                await Context.SaveChangesAsync();
                return Ok(i);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}