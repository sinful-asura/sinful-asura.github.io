import { Prodavnica } from "./Prodavnica.js";
import { Sastojak } from "./Sastojak.js";
import { Proizvod } from "./Proizvod.js";

let Prodavnice=[];

fetch("https://localhost:5001/Prodavnica/PreuzmiProdavnice", {
    method:"GET"
}).then(data=>{data.json().then(info=>{
    info.forEach(i=>{

        let prodavnica=new Prodavnica(i.id, i.naziv);
        i.proizvodi.forEach(p=>{
            let proizvod=new Proizvod(p.id, p.naziv);
            p.sastojci.forEach(s=>{
                let ss=new Sastojak(s.sastojak.id, s.sastojak.naziv, s.kolicina);
                proizvod.sastojci.push(ss);
            });
            prodavnica.proizvodi.push(proizvod);
           
        });
        i.sastojciSaKolicinom.forEach(s=>{
            let sast=new Sastojak(s.sastojak.id, s.sastojak.naziv, s.kolicina);
            prodavnica.sastojci.push(sast);
        });
        Prodavnice.push(prodavnica);
        prodavnica.iscrtajProdavnicu(document.body);
    });
    console.log(Prodavnice);
});});