import { Grad } from "./Grad.js"
import { Podatak } from "./Podatak.js"

let Gradovi=[];

function iscrtajGradove(){
    Gradovi.forEach(g=>{
        g.iscrtajGrad();
    });
}

function ucitajGradove(){
    fetch("https://localhost:5001/Grad/PreuzmiGradove", {
        method:"GET"
    }).then(data=>{data.json().then(info=>{
        info.forEach(i=>{
            let g=new Grad(i.id, i.ime, i.x, i.y);
            i.podaci.forEach(p=>{
                let pod=new Podatak(p.id, p.mesec, p.pTemperatura, p.kolicinaPadavina, p.brSDana);
                pod.Grad=g;
                g.Podaci.push(pod);
            });
            Gradovi.push(g);
        });
        iscrtajGradove();
    });
});
}

ucitajGradove();