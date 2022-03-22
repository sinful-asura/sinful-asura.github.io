import { Predmet } from "./Predmet.js";
import { IspitniRok } from "./IspitniRok.js";
import {Fakultet} from "./Fakultet.js"

let Predmeti=[];
let Rokovi=[];
let fakultet=new Fakultet(Rokovi, Predmeti);

fetch("https://localhost:5001/Predmet/PreuzmiPredmete").then(data=>
data.json().then(predmeti=>{
        predmeti.forEach(p=>{
            let predm=new Predmet(p.id, p.naziv);
            Predmeti.push(predm);
        });
    }).then(n=>{
        fetch("https://localhost:5001/IspitniRok/PreuzmiIspitneRokove").then(data=>{
            data.json().then(rokovi=>{
                rokovi.forEach(r=>{
                    let rok=new IspitniRok(r.id, r.naziv);
                    Rokovi.push(rok);
                });
                fakultet.iscrtajFakultet();
            });
        });
    }));
