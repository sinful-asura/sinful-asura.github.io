using Microsoft.AspNetCore.Mvc;
using System.Threading;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;

namespace JunII2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpojController:ControllerBase
    {
        public Context Context {get; set;}
        public SpojController(Context context){Context=context;}

        [Route("DodajSpoj/{index}/{idPredmeta}/{idIspitnogRoka}/{ocena}")]
        [HttpPut]
        public async Task<ActionResult> DodajSpoj(int index, int idPredmeta, int idIspitnogRoka, int ocena)
        {
            var provera=Context.Spojevi.Where(s=> s.Student.Index==index && s.Predmet.ID==idPredmeta).FirstOrDefault();
            if(provera!=null) return BadRequest("Ovaj student je vec polozio zadati predmet!");

            var student=Context.Studenti.Where(s=>s.Index==index).FirstOrDefault();
            if(student==null) return BadRequest("Ne postoji takav student!");

            var predmet=Context.Predmeti.Where(p=> p.ID==idPredmeta).FirstOrDefault();
            if(predmet==null) return BadRequest("Ne postoji takav predmet!");

            var rok=Context.IspitniRokovi.Where(ir=> ir.ID==idIspitnogRoka).FirstOrDefault();
            if(rok==null) return BadRequest("Ne postoji takav rok!");

            if(ocena<5 || ocena>10) return BadRequest("Nevalidna ocena!");

            Spoj s=new Spoj();
            s.IspitniRok=rok;
            s.Ocena=ocena;
            s.Predmet=predmet;
            s.Student=student;

            try
            {
                Context.Spojevi.Add(s);
                await Context.SaveChangesAsync();
                return Ok(s);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiZaStudenta/{id}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiZaStudenta(int id)
        {
            Student s=Context.Studenti.Where(s=>s.ID==id).FirstOrDefault();
            if(s==null) return BadRequest("Ne postoji takav student!");

            try
            {
                return Ok(await Context.Spojevi.Where(s=>s.Student.ID==id).Select(s=> new {
                    index=s.Student.Index,
                    ime=s.Student.Ime,
                    prezime=s.Student.Prezime,
                    predmet=s.Predmet.Naziv,
                    rok=s.IspitniRok.Naziv,
                    ocena=s.Ocena
                }).ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiZaStudentaIndex/{index}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiZaStudentaIndex(int index)
        {
            Student s=Context.Studenti.Where(s=>s.Index==index).FirstOrDefault();
            if(s==null) return BadRequest("Ne postoji takav student!");

            try
            {
                return Ok(await Context.Spojevi.Where(s=>s.Student.Index==index).Select(s=> new {
                    index=s.Student.Index,
                    ime=s.Student.Ime,
                    prezime=s.Student.Prezime,
                    predmet=s.Predmet.Naziv,
                    rok=s.IspitniRok.Naziv,
                    ocena=s.Ocena
                }).ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("Pretrazi/{idIspita}/{idRokova}")]
        [HttpGet]
        public async Task<ActionResult> Pretrazi(int idIspita, string idRokova)
        {
            string[] rokovi=idRokova.Split('a');
            List<int> idevi=new List<int>();
            foreach(string r in rokovi)
            {
                int br=Int32.Parse(r);
                idevi.Add(br);
            }

            try
            {
                return Ok(await Context.Spojevi.Where(s=> s.Predmet.ID==idIspita && idevi.Contains(s.IspitniRok.ID))
                .Select(s=> new {
                    index=s.Student.Index,
                    ime=s.Student.Ime,
                    prezime=s.Student.Prezime,
                    predmet=s.Predmet.Naziv,
                    rok=s.IspitniRok.Naziv,
                    ocena=s.Ocena
                }).ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}