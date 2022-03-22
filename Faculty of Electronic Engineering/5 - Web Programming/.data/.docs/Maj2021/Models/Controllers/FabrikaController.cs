using Microsoft.AspNetCore.Mvc;
using Maj2021.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace Maj2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FabrikaController:ControllerBase
    {
        public Context Context;
        public FabrikaController(Context context)
        {
            Context=context;
        }

        [Route("PreuzimanjeFabrika")]
        [HttpGet]
        public async Task<List<Fabrika>> preuzmiFabrike()
        {
            return await Context.Fabrike.Include(f=>f.Silosi).ToListAsync();
        }

        [Route("DodajFabriku")]
        [HttpPost]
        public async Task<ActionResult> dodajFabriku([FromBody]Fabrika fabrika)
        {
            Context.Fabrike.Add(fabrika);
            try
            {
                await Context.SaveChangesAsync();
                return Ok(fabrika);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}

