using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Linq;
using Models;
using System;

namespace JunII2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController:ControllerBase
    {
        public Context Context {get; set;}
        public StudentController(Context context){Context=context;}

        [Route("DodajStudenta/{index}/{ime}/{prezime}")]
        [HttpPut]
        public async Task<ActionResult> DodajStudenta(int index, string ime, string prezime)
        {
            var s=Context.Studenti.Where(s=>s.Index==index).FirstOrDefault();
            if(s!=null) return BadRequest("Student sa ovim indeksom vec postoji!");

            Student st=new Student();
            st.Index=index;
            st.Ime=ime;
            st.Prezime=prezime;

            try
            {
                Context.Studenti.Add(st);
                await Context.SaveChangesAsync();
                return Ok(st);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}