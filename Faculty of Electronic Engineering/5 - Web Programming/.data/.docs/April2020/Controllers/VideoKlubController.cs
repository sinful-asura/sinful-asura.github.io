using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Linq;
using System.Collections.Generic;
using Models;
using Microsoft.EntityFrameworkCore;

namespace April2020.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VideoKlubController:ControllerBase
    {
        public Context Context {get; set;}
        public VideoKlubController(Context context){Context=context;}

        [Route("DodajVideoKlub/{naziv}")]
        [HttpPost]
        public async Task<ActionResult> DodajVideoKlub(string naziv)
        {
            var provera=Context.Klubovi.Where(k=> k.Naziv==naziv).FirstOrDefault();
            if(provera!=null) return BadRequest("Klub s ovim imenom vec postoji!");

            VideoKlub vk=new VideoKlub();
            vk.Naziv=naziv;

            try
            {
                Context.Klubovi.Add(vk);
                await Context.SaveChangesAsync();
                return Ok(vk);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiVideoKlubove")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiVideoKlubove()
        {
            try
            {
                var klubovi=await Context.Klubovi.Include(k=> k.Police).ToListAsync();
                return Ok(klubovi);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiOznakePolica/{id}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiOznakePolica(int id)
        {
            var klub=Context.Klubovi.Where(k=> k.ID==id).FirstOrDefault();
            if(klub==null) return BadRequest("Nepostojeci klub!");

            var police= await Context.Police.Where(p=> p.VideoKlub==klub).ToListAsync();

            try
            {
                return Ok(police.Select(p=> new{oznaka=p.Oznaka, id=p.ID}).ToList());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}