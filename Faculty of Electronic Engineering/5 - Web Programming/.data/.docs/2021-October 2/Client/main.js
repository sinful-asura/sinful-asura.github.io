import { Prodavnica } from "./Prodavnica.js";
import { Proizvod } from "./Proizvod.js";

let Prodavnice=[];

function iscrtajProdavnice(){
    Prodavnice.forEach(p=>{
        p.iscrtajProdavnicu();
    });
}

fetch("https://localhost:5001/Prodavnica/PreuzmiProdavnice",{
    method:"GET"
}).then(data=>{data.json().then(prod=>{
    prod.forEach(p=>{
        let prodavnica=new Prodavnica(p.id,p.naziv);
        Prodavnice.push(prodavnica);
    });
    iscrtajProdavnice();
})});