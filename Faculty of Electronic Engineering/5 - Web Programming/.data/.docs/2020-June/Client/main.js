import { Igrac } from "./Igrac.js"
import { Mec } from "./Mec.js"

let Mecevi=[];

function iscrtaj(){
    Mecevi.forEach(m=>{
        m.prikaziMec();
    });
}

fetch("https://localhost:5001/Mec/PreuzmiMeceve", {
    method:"GET"
}).then(data=>{data.json().then(info=>{
    info.forEach(i=>{
        let igrac1=new Igrac(i.igrac1.id, i.igrac1.ime, i.igrac1.prezime, i.igrac1.godine, i.igrac1.atpRang, i.igrac2.link);
        let igrac2=new Igrac(i.igrac2.id, i.igrac2.ime, i.igrac2.prezime, i.igrac2.godine, i.igrac2.atpRang, i.igrac2.link);
        let mec=new Mec(i.id, igrac1, igrac2, i.lokacija, i.s1, i.s2, i.p11, i.p12, i.p21, i.p22, i.datum);
        Mecevi.push(mec);
    });
    iscrtaj();
})})