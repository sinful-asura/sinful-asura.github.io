using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Linq;
using Models;
using System.Collections.Generic;


namespace Jun2020.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MecController:ControllerBase
    {
        public Context Context {get; set;}
        public MecController(Context context){Context=context;}

        [Route("DodajMec/{i1}/{i2}/{lokacija}")]
        [HttpPut]
        public async Task<ActionResult> DodajMec(int i1, int i2, string lokacija)
        {
            Igrac igrac1=Context.Igraci.Where(i=> i.ID==i1).FirstOrDefault();
            Igrac igrac2=Context.Igraci.Where(i=> i.ID==i2).FirstOrDefault();
            if(igrac1==null || igrac2==null) return BadRequest("Nevalidni podaci o igracima!");

            Mec m=new Mec();
            m.Igraci=new List<Igrac>();
            m.Igraci.Add(igrac1);
            m.Igraci.Add(igrac2);
            m.Lokacija=lokacija;
            m.Setovi1=0;
            m.Setovi2=0;
            m.PoeniS1I1=0;
            m.PoeniS1I2=0;
            m.PoeniS2I1=0;
            m.PoeniS2I2=0;
            m.Datum=DateTime.Now;

            try
            {
                Context.Mecevi.Add(m);
                await Context.SaveChangesAsync();
                return Ok(m);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PreuzmiMeceve")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiMeceve()
        {
            try
            {
                return Ok(await Context.Mecevi.Select(m=> new {
                    id=m.ID,
                    igrac1=m.Igraci[0],
                    igrac2=m.Igraci[1],
                    lokacija=m.Lokacija,
                    s1=m.Setovi1,
                    s2=m.Setovi2,
                    p11=m.PoeniS1I1,
                    p12=m.PoeniS1I2,
                    p21=m.PoeniS2I1,
                    p22=m.PoeniS2I2,
                    datum=m.Datum.ToLongDateString()+ " "+m.Datum.ToLongTimeString()
                }).ToListAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("DodajPoen/{idMeca}/{igrac}")]
        [HttpPost]
        public async Task<ActionResult> DodajPoen(int idMeca, int igrac)
        {
            var mec=Context.Mecevi.Where(m=>m.ID==idMeca).FirstOrDefault();
            if(mec==null) return BadRequest("Nepostojeci mec!");

            if(mec.Setovi1+mec.Setovi2==2) return BadRequest("Mec je zazvrsen!");

            if(igrac==1)
            {
                if(mec.Setovi1+mec.Setovi2==0){
                    mec.PoeniS1I1++;
                    if(mec.PoeniS1I1==6) mec.Setovi1++;
                }
                else 
                {
                    mec.PoeniS2I1++;
                    if(mec.PoeniS2I1==6) mec.Setovi1++;
                }
            }
            else
            {
                if(mec.Setovi1+mec.Setovi2==0){
                    mec.PoeniS1I2++;
                    if(mec.PoeniS1I2==6) mec.Setovi2++;
                }
                else 
                {
                    mec.PoeniS2I2++;
                    if(mec.PoeniS2I2==6) mec.Setovi2++;
                }
            }

            try
            {
                Context.Mecevi.Update(mec);
                await Context.SaveChangesAsync();
                return Ok(mec);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}