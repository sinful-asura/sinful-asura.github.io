import { Polica } from "./Polica.js"
import { VideoKlub } from "./VideoKlub.js"

let Klubovi=[];

function preuzmiKlubove(){

    fetch("https://localhost:5001/VideoKlub/PreuzmiVideoKlubove", {
        method:"GET"
    }).then(data=> {
        data.json().then(info=>{
            info.forEach(vk=>{
                let vidk=new VideoKlub(vk.id, vk.naziv);
                vk.police.forEach(p=>{
                    let pol=new Polica(p.id, p.oznaka, p.maxDiskova, p.trenutnoDiskova);
                    vidk.Police.push(pol);
                });
                Klubovi.push(vidk);
            });
            Klubovi.forEach(k=>{
                k.iscrtajKlub();
            });
        });
    });
}

preuzmiKlubove();