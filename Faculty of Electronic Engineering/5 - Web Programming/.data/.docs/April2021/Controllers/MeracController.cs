using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Models;

namespace April2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MeracController:ControllerBase
    {
        public Context Context {get; set;}
        public MeracController(Context context){Context=context;}

        [Route("DodajMerac/{naziv}/{donjaGranica}/{gornjaGranica}/{boja}/{trenutna}/{podeok}")]
        [HttpPut]
        public async Task<ActionResult> DodajMerac(string naziv, int donjaGranica, int gornjaGranica, string boja, int trenutna, int podeok)
        {
            if(donjaGranica<0 || gornjaGranica<0) return BadRequest("Unose se samo pozitivne vrednosti!");
            if(podeok<0 || (((double)(gornjaGranica-donjaGranica))/podeok)!=(gornjaGranica-donjaGranica)/podeok) return BadRequest("Neodgovarajuci parametri!");
            if(trenutna<donjaGranica||trenutna>gornjaGranica) return BadRequest("Neodgovarajuca trenutna vrednost!");
            if(boja!="red"&&boja!="green"&&boja!="blue") return BadRequest("Neodgovarajuca boja!");

            Merac m=new Merac();
            m.Naziv=naziv;
            m.MaxIzmerena=trenutna;
            m.MaxIzmerena=trenutna;
            m.DonjaGranica=donjaGranica;
            m.GronjaGranica=gornjaGranica;
            m.Boja=boja;
            m.TrenutnaVrednost=trenutna;
            m.ZbirIzmerenih=trenutna;
            m.BrojMerenja=1;
            m.Podeok=podeok;

            try
            {
                Context.Meraci.Add(m);
                await Context.SaveChangesAsync();
                return Ok(m);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiMerace")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiMerace()
        {
            try
            {
                return Ok(await Context.Meraci.Select(m=>new{
                    id=m.ID,
                    naziv=m.Naziv,
                    max=m.MaxIzmerena,
                    min=m.MinIzmerena,
                    dg=m.DonjaGranica,
                    gg=m.GronjaGranica,
                    boja=m.Boja,
                    podeok=m.Podeok,
                    trenutna=m.TrenutnaVrednost,
                    srednja=(double)m.ZbirIzmerenih/m.BrojMerenja
                }).ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PromeniVrednost/{id}/{nova}")]
        [HttpPost]
        public async Task<ActionResult> PromeniVrednost(int id, int nova)
        {
            Merac m=Context.Meraci.Where(m=> m.ID==id).FirstOrDefault();
            if(m==null) return BadRequest("Nepostojeci merac!");

            if(m.GronjaGranica<nova || m.DonjaGranica>nova) return BadRequest("Neodgovarajuca vrednost!");

            m.TrenutnaVrednost=nova;
            m.BrojMerenja++;
            m.ZbirIzmerenih+=nova;

            if(nova>m.MaxIzmerena) m.MaxIzmerena=nova;
            if(nova<m.MinIzmerena) m.MinIzmerena=nova;

            try
            {
                Context.Meraci.Update(m);
                await Context.SaveChangesAsync();
                return Ok(m);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}