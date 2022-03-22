using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Linq;
using Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace OktobarII2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdavnicaController:ControllerBase
    {
        public Context Context {get; set;}
        public ProdavnicaController(Context context){Context=context;}

        [Route("DodajProdavnicu/{naziv}")]
        [HttpPut]
        public async Task<ActionResult> DodajProdavnicu(string naziv)
        {
            Prodavnica p=new Prodavnica();
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
        public ActionResult PreuzmiProdavnice()
        {
            try
            {
                return Ok(Context.Prodavnice.ToList());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiSveZaProdavnicu/{id}/{tip}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiSveZaProdavnicu(int id, string tip)
        {
            var Prod=Context.Prodavnice.Where(p=>p.ID==id).Include(p=>p.Proizvodi).FirstOrDefault();
            if(Prod==null) return BadRequest("Nepostojeca prodavnica!");
            var Proizvodi=await Context.Proizvodi.Where(p=> p.Tip==tip && p.Prodavnica==Prod).ToListAsync();

            try
            {
                return Ok(Proizvodi);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiFiltrirano/{id}/{tip}/{dg}/{gg}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiFiltrirano(int id, string tip, int dg, int gg)
        {
            var Prod=Context.Prodavnice.Where(p=>p.ID==id).Include(p=>p.Proizvodi).FirstOrDefault();
            if(Prod==null) return BadRequest("Nepostojeca prodavnica!");
            var Proizvodi=await Context.Proizvodi.Where(p=> p.Tip==tip && p.Prodavnica==Prod && p.Cena<=gg && p.Cena>=dg).ToListAsync();

            try
            {
                return Ok(Proizvodi);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiTipove/{id}")]
        [HttpGet]
        public ActionResult PreuzmiTipove(int id)
        {
            var prodavnica=Context.Prodavnice.Where(p=>p.ID==id).Include(p=> p.Proizvodi).FirstOrDefault();
            if(prodavnica==null) return BadRequest("Nepostojeca prodavnica!");

            List<string> tipovi=new List<string>();
            foreach(Proizvod p in prodavnica.Proizvodi)
            {
                if(!tipovi.Contains(p.Tip))
                    tipovi.Add(p.Tip);
            }

            try
            {
                return Ok(tipovi);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}