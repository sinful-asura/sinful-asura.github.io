using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Models;
using Microsoft.EntityFrameworkCore;

namespace Jan2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GradController:ControllerBase
    {
        public Context Context {get; set;}

        public GradController(Context context){Context=context;}

        [Route("DodajGrad/{ime}/{x}/{y}")]
        [HttpPut]
        public async Task<ActionResult> DodajGrad(string ime, double x, double y)
        {
            var provera=Context.Gradovi.Where(g=> g.X==x && g.Y==y).FirstOrDefault();
            if(provera!=null) return BadRequest("Postoji grad na ovim koordinatama!");

            Grad g=new Grad();
            g.Ime=ime;
            g.X=x;
            g.Y=y;

            try
            {
                Context.Gradovi.Add(g);
                await Context.SaveChangesAsync();
                return Ok(g);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiGradove")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiGradove()
        {
            var gradovi=await Context.Gradovi.Include(g=> g.Podaci).ToListAsync();

            try
            {
                return Ok(gradovi);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
