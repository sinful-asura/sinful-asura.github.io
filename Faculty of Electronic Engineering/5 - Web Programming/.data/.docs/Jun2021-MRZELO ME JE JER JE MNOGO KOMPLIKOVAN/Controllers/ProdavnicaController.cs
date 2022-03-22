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
    public class ProdavnicaController:ControllerBase
    {
        public Context Context {get; set;}
        public ProdavnicaController(Context context){Context=context;}

        [Route("DodajProdavnicu/{naziv}")]
        [HttpPost]
        public async Task<ActionResult> DodajProdavnicu(string naziv)
        {
            var p=new Prodavnica();
            p.Naziv=naziv;

            try
            {
                Context.Prodavnice.Add(p);
                await Context.SaveChangesAsync();
                return Ok(p);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiProdavnice")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiProdavnice()
        {
            try
            {
                return Ok(await Context.Prodavnice.Include(p=> p.Proizvodi).ThenInclude(p=>p.Sastojci).ThenInclude(s=> s.Sastojak).Include(p=> p.SastojciSaKolicinom).ThenInclude(s=>s.Sastojak).ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}