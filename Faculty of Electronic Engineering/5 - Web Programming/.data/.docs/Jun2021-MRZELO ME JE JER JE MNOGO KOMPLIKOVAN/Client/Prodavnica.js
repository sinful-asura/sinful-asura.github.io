import { Proizvod } from "./Proizvod.js"
import { Sastojak } from "./Sastojak.js"

export class Prodavnica{

    constructor(id, naziv) {
        this.id=id;
        this.naziv=naziv;
        this.sastojci=[];
        this.proizvodi=[];
        this.kontejner=null;
        this.korpa=[];
        this.kolicine=[];
    }

    iscrtajProdavnicu(host){
        this.kontejner=document.createElement("div");
        this.kontejner.className="prodavnicaDiv";
        host.appendChild(this.kontejner);

        let naslov=document.createElement("label");
        naslov.className="naslov";
        naslov.innerHTML=this.naziv;
        this.kontejner.appendChild(naslov);

        let prikazDiv=document.createElement("div");
        prikazDiv.className="prikazDiv";
        this.kontejner.appendChild(prikazDiv);

        let meniKontejner=document.createElement("div");
        meniKontejner.className="meniKontejner";
        prikazDiv.appendChild(meniKontejner);

        this.iscrtajMeni(meniKontejner);

        let korpaKontejner=document.createElement("div");
        korpaKontejner.className="korpaKontejner";
        prikazDiv.appendChild(korpaKontejner);

        this.iscrtajKorpu(korpaKontejner);
    }

    iscrtajMeni(host){
        let naslov=document.createElement("label");
        naslov.innerHTML="PORUCIVANJE";
        host.appendChild(naslov);

        let proizvodDiv=document.createElement("div");
        let proizvodLbl=document.createElement("label");
        proizvodLbl.innerHTML="Proizvod: ";
        proizvodDiv.appendChild(proizvodLbl);

        let proizvodi=document.createElement("select");
        this.proizvodi.forEach(p=>{
            let opcija=document.createElement("option");
            opcija.innerHTML=p.naziv;
            opcija.value=p.id;
            proizvodi.appendChild(opcija);
        })
        proizvodDiv.appendChild(proizvodi);
        host.appendChild(proizvodDiv);

        let kolicinaDiv=document.createElement("div");
        let kolicinaLbl=document.createElement("label");
        kolicinaDiv.appendChild(kolicinaLbl);
        kolicinaLbl.innerHTML="Kolicina: ";
        let kolicina=document.createElement("input");
        kolicina.type="number";
        kolicinaDiv.appendChild(kolicina);
        host.appendChild(kolicinaDiv);

        let btn=document.createElement("button");
        btn.style.alignSelf="center";
        btn.innerHTML="Poruci";
        host.appendChild(btn);
        btn.onclick=(ev)=>this.Poruci(proizvodi.value, kolicina.value);
    }

    iscrtajKorpu(host){

        host.innerHTML="";

        let naslov=document.createElement("label");
        naslov.innerHTML="Nabavka";
        host.appendChild(naslov);

        if(this.korpa.length==0){
            let poruka=document.createElement("label");
            poruka.innerHTML="Lista za nabavku je prazna!";
            host.appendChild(poruka);
            return;
        }

        this.korpa.forEach((k, index)=>{

            let div=document.createElement("div");
            let cbx=document.createElement("input");
            cbx.type="checkbox";
            cbx.value=k.id;
            div.appendChild(cbx);
            let lbl=document.createElement("label");
            lbl.innerHTML=this.kolicine[index]+"g "+k.naziv;
            div.appendChild(lbl);
            appendChild(div);
        });

        let btn=document.createElement("button");
        btn.innerHTML="Dostavi";
        btn.onclick=(ev)=>this.Dostavi();
        host.appendChild(btn);
    }

    Poruci(proizvod, kolicina){
        
        let ok=true;
        let p=null;

        this.proizvodi.forEach(pr=>{
            if(pr.id===proizvod){
                p=pr;
                return;
            }
        });

        p.sastojci.forEach(s=>{
            let sup=null;
            this.sastojci.forEach(sp=>{
                if(sp.id===s.id){
                    sup=sp;
                    return;
                }
            })
            if(sup===null){
                ok=false;
                this.korpa.forEach((k, index)=>{
                    if(k.id==s.id){
                        this.kolicine[index]+=s.kolicina*kolicina;
                        return;
                    }
                });
                this.korpa.push(s);
                this.kolicine.push(s.kolicina*kolicina);
            }
            if(sup.kolicina<s.kolicina*kolicina){
                ok=false;
                this.korpa.push(sp);
                this.kolicine.push(s.kolicina*kolicina-sup.kolicina);
            }
        });

        if(ok===true){
            p.sastojci.forEach(s=>{
                let sast=null;
                this.sastojci.forEach(sas=>{
                    if(sas.id===s.id){
                        sast=s;
                        return;
                    }
                });
                sast.kolicina-=s.kolicina*kolicina;
            })
        }
    }

    Dostavi(){

    }
}