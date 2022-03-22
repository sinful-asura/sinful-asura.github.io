import {Proizvod} from "./Proizvod.js"

export class Korpa{
    constructor(host){
        this.kontejner=document.createElement("div");
        host.appendChild(this.kontejner);
        this.Proizvodi=[];
        this.Kolicine=[];
    }

    dodaj(proizvod){
        let nadjen=false;
        this.Proizvodi.forEach((p,index)=>{
            if(p===proizvod){
                this.Kolicine[index]=parseInt(this.Kolicine[index])+1;
                nadjen=true;
                return;
            }
        });
        if(nadjen===false){
            this.Proizvodi.push(proizvod);
            this.Kolicine.push(1);
        }
        this.prikazi();
    }

    prikazi(){

        this.kontejner.innerHTML="";
        let naslov=document.createElement("label");
        naslov.innerHTML="Korpa:";
        naslov.className="manjiNaslov";
        this.kontejner.appendChild(naslov);

        this.Proizvodi.forEach((p,index)=>{
            let prDiv=document.createElement("div");
            prDiv.innerHTML=p.naziv+" - "+this.Kolicine[index]+"kom";
            this.kontejner.appendChild(prDiv);
        });

        let btn=document.createElement("button");
        btn.innerHTML="Poruci";
        btn.onclick=(ev)=>this.poruci();
        this.kontejner.appendChild(btn);
    }

    poruci(){
        let nijeOk=false;

        this.Proizvodi.forEach((p, index)=>{

            if(p.kolicina<this.Kolicine[index]){

                nijeOk=true;
                console.log(p.naziv+" "+this.Kolicine[index])
                alert("Neodgovarajuca kolicna za "+p.naziv);
            }
        });

        if(nijeOk===true){
            this.kontejner.innerHTML="";
            this.Kolicine=[];
            this.Proizvodi=[];
            return;
        }

        this.Proizvodi.forEach((p,index)=>{
            p.izmeni(this.Kolicine[index]);
        });

        this.kontejner.innerHTML="";
        this.Kolicine=[];
        this.Proizvodi=[];
    }
}