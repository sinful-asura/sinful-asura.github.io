using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;
using Models;

namespace Septembar2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SastojakController:ControllerBase
    {
        public Context Context {get; set;}
        public SastojakController(Context context){Context=context;}

        [Route("DodajSastojak/{naziv}")]
        [HttpPost]
        public async Task<ActionResult> DodajSastojak(string naziv)
        {
            var s=new Sastojak();
            s.Naziv=naziv;

            try
            {
                Context.Sastojci.Add(s);
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