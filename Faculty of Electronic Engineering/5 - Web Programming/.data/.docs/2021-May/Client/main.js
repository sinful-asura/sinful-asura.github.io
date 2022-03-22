import { Fabrika } from "./Fabrika.js";
import { Silos } from "./Silos.js";

let fabrike=[];

function preuzmiFabrike(){

    fetch("https://localhost:5001/Fabrika/PreuzimanjeFabrika").then(
        s=>{
            s.json().then(rez=>{
                rez.forEach(f=>{
    
                    let fabrika=new Fabrika(f.id, f.naziv);
                    f.silosi.forEach(s=>{
                        
                        let silos=new Silos(s.id, s.oznaka, s.kapacitet, s.trenutnaKolicina);
                        fabrika.Silosi.push(silos);
                    });
    
                    fabrike.push(fabrika);
                });
            }).then(ok=>{
                fabrike.forEach(f=>{
                    f.iscrtajFabriku(document.body);
                })
            });
        });
}

preuzmiFabrike();

console.log(fabrike);