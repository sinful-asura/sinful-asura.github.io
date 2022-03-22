import { Merac } from "./Merac.js"

let Meraci=[];

let glavniKontejner=document.createElement("div");
glavniKontejner.className="glavniKontejner";
document.body.appendChild(glavniKontejner);

function iscrtajMerace(){
    Meraci.forEach(m=>{
        m.iscrtajMerac(glavniKontejner);
    })
}

fetch("https://localhost:5001/Merac/PreuzmiMerace",{
    method:"GET"
}).then(data=>{data.json().then(info=>{
    info.forEach(i=>{
        let m=new Merac(i.id, i.naziv, i.max, i.min, i.dg, i.gg, i.boja, i.podeok, i.trenutna, i.srednja);
        Meraci.push(m);
        
    });
    iscrtajMerace();
});
});

