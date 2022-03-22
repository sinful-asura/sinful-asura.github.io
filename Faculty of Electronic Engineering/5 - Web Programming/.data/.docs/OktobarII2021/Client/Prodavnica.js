import {Proizvod} from "./Proizvod.js"
import { Korpa } from "./Korpa.js";

export class Prodavnica{
    constructor(id, naziv){
        this.id=id;
        this.naziv=naziv;
        this.Proizvodi=[];
        this.kontejner=null;
        this.Korpa=null;
    }

    iscrtajProdavnicu(){
        this.kontejner=document.createElement("div");
        this.kontejner.className="prodavnicaKontejner";
        document.body.appendChild(this.kontejner);

        let naslovLabela=document.createElement("label");
        naslovLabela.className="naslov";
        naslovLabela.innerHTML=this.naziv;
        this.kontejner.appendChild(naslovLabela);

        let prikazKontejner=document.createElement("div");
        prikazKontejner.className="prikazKontejner";
        this.kontejner.appendChild(prikazKontejner);

        let meniKontejner=document.createElement("div");
        meniKontejner.className="meniKontejner";
        prikazKontejner.appendChild(meniKontejner);

        let tabelaDiv=document.createElement("div");
        tabelaDiv.className="tabelaDiv";
        prikazKontejner.appendChild(tabelaDiv);

        let tabela=document.createElement("table");
        tabelaDiv.appendChild(tabela);

        let korpaDiv=document.createElement("div");
        korpaDiv.className="korpa";
        prikazKontejner.appendChild(korpaDiv);
        this.Korpa=new Korpa(korpaDiv);

        let th=document.createElement("thead");
        let niz=["Naziv", "Cena", "Kolicina", " "," "];
        niz.forEach(n=>{
            let el=document.createElement("td");
            el.innerHTML=n;
            th.appendChild(el);
        });

        tabela.appendChild(th);

        let tb=document.createElement("tbody");
        tabela.appendChild(tb);

        let pretragaLabel=document.createElement("label");
        pretragaLabel.innerHTML="Pretraga:";
        meniKontejner.appendChild(pretragaLabel);

        let tipDiv=document.createElement("div");
        tipDiv.className="red";
        let tipLabel=document.createElement("label");
        tipLabel.innerHTML="Tip:";
        tipDiv.appendChild(tipLabel);
        let cbox=document.createElement("select");
        tipDiv.appendChild(cbox);
        meniKontejner.appendChild(tipDiv);

        let coDiv=document.createElement("div");
        coDiv.className="red";
        let coLabel=document.createElement("label");
        coLabel.innerHTML="Cena od:";
        coDiv.appendChild(coLabel);
        let coTbx=document.createElement("input");
        coTbx.type="text";
        coTbx.className="coTbx";
        coDiv.appendChild(coTbx);
        meniKontejner.appendChild(coDiv);

        let cdDiv=document.createElement("div");
        cdDiv.className="red";
        let cdLabel=document.createElement("label");
        cdLabel.innerHTML="Cena do:";
        cdDiv.appendChild(cdLabel);
        let cdTbx=document.createElement("input");
        cdTbx.type="text";
        cdTbx.className="cdTbx";
        cdDiv.appendChild(cdTbx);
        meniKontejner.appendChild(cdDiv);

        let prikaziBtn=document.createElement("button");
        prikaziBtn.innerHTML="Prikazi";
        prikaziBtn.onclick=(ev)=>this.prikaziPodatke(tb);
        prikaziBtn.style.display="inline";
        meniKontejner.appendChild(prikaziBtn);

        let izmenaDiv=document.createElement("div");
        izmenaDiv.className="izmenaDiv";
        meniKontejner.appendChild(izmenaDiv);

        niz=[];

        fetch("https://localhost:5001/Prodavnica/PreuzmiTipove/"+this.id,{
            method:"GET"
        }).then(data=>{data.json().then(info=>{
            info.forEach(i=>{
                niz.push(i);
            })
            niz.forEach(n=>{
                let op=document.createElement("option");
                op.innerHTML=n;
                op.value=n;
                cbox.appendChild(op);
            });
        })});

    }

    prikaziPodatke(host){
        host.innerHTML="";

        this.Proizvodi=[];

        let od=this.kontejner.querySelector(".coTbx").value;
        let doo=this.kontejner.querySelector(".cdTbx").value;
        let tip=this.kontejner.querySelector("select").value;

        if(od==="" && doo===""){
            fetch("https://localhost:5001/Prodavnica/PreuzmiSveZaProdavnicu/"+this.id+"/"+tip).then(data=>{
                data.json().then(proizvodi=>{
                    proizvodi.forEach(p=>{
                        let pr=new Proizvod(p.id, p.naziv, p.tip, p.kolicina, p.cena);
                        pr.roditelj=this;
                        this.Proizvodi.push(pr);
                    });
                    this.Proizvodi.forEach(p=>{
                        p.iscrtajProizvod(host);
                    })
                });
            });
        }
        else{
            if(od==="" || doo===""){
                alert("Unesite obe granice!");
                return;
            }

            fetch("https://localhost:5001/Prodavnica/PreuzmiFiltrirano/"+this.id+"/"+tip+"/"+od+"/"+doo,{
                method:"GET"
            }).then(data=>{
                data.json().then(proizvodi=>{
                    proizvodi.forEach(p=>{
                        let pr=new Proizvod(p.id, p.naziv, p.tip, p.kolicina, p.cena);
                        pr.roditelj=this;
                        this.Proizvodi.push(pr);
                    });
                    this.Proizvodi.forEach(p=>{
                        p.iscrtajProizvod(host);
                    })
                });
            });
        }
    }
}