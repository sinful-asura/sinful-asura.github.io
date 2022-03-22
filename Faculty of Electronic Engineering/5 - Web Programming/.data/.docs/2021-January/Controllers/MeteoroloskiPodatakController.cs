using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Jan2021.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MeteoroloskiPodatakController:ControllerBase
    {
        public Context Context {get; set;}

        public MeteoroloskiPodatakController(Context context){Context=context;}

        [Route("DodajPodatak/{idGrada}/{temp}/{padavine}/{brDana}")]
        [HttpPut]
        public async Task<ActionResult> DodajPodatak(int idGrada, int temp, int padavine, int brDana)
        {
            if(padavine<0 || brDana<0 || brDana>31 || temp<0) return BadRequest("Neodgovarajuci parametri!");

            var grad=Context.Gradovi.Include(g=>g.Podaci).Where(g=> g.ID==idGrada).FirstOrDefault();
            if(grad==null) return BadRequest("Nepostojeci grad!");
            if(grad.Podaci.Count()==12) return BadRequest("Za ovaj grad su svi podaci popunjeni i mogu samo da se menjaju!");

            MeteoroloskiPodatak pod=new MeteoroloskiPodatak();
            pod.Grad=grad;
            pod.PTemperatura=temp;
            pod.KolicinaPadavina=padavine;
            pod.BrSDana=brDana;
            pod.Mesec=grad.Podaci.Count()+1;

            try
            {
                Context.Podaci.Add(pod);
                await Context.SaveChangesAsync();
                return Ok(pod);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IzmeniTemperaturu/{id}/{novaT}")]
        [HttpPost]
        public async Task<ActionResult> IzmeniTemperaturu(int id, int novaT)
        {
            if(novaT<0) return BadRequest("Neodgovarajuci parametri!");
            var pod=Context.Podaci.Where(p=>p.ID==id).FirstOrDefault();
            if(pod==null) return BadRequest("Nepostojeci podatak!");

            pod.PTemperatura=novaT;

            try
            {
                Context.Podaci.Update(pod);
                await Context.SaveChangesAsync();
                return Ok(pod);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IzmeniPadavine/{id}/{novaT}")]
        [HttpPost]
        public async Task<ActionResult> IzmeniPadavine(int id, int novaT)
        {
            if(novaT<0) return BadRequest("Neodgovarajuci parametri!");

            var pod=Context.Podaci.Where(p=>p.ID==id).FirstOrDefault();
            if(pod==null) return BadRequest("Nepostojeci podatak!");

            pod.KolicinaPadavina=novaT;

            try
            {
                Context.Podaci.Update(pod);
                await Context.SaveChangesAsync();
                return Ok(pod);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("IzmeniDane/{id}/{novaT}")]
        [HttpPost]
        public async Task<ActionResult> IzmeniDane(int id, int novaT)
        {
            if(novaT<0||novaT>31) return BadRequest("Neodgovarajuci parametri!");

            var pod=Context.Podaci.Where(p=>p.ID==id).FirstOrDefault();
            if(pod==null) return BadRequest("Nepostojeci podatak!");

            pod.BrSDana=novaT;

            try
            {
                Context.Podaci.Update(pod);
                await Context.SaveChangesAsync();
                return Ok(pod);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
