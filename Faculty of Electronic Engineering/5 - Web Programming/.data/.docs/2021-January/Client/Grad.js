import { Podatak } from "./Podatak.js"

export class Grad{

    constructor(id, ime, x, y){
        this.id=id;
        this.ime=ime;
        this.x=x;
        this.y=y;
        this.Podaci=[];
        this.kontejner=null;
    }

    iscrtajGrad(){
        this.kontejner=document.createElement("div");
        this.kontejner.className="gradPrikaz";
        document.body.appendChild(this.kontejner);

        let naslovKontejner=document.createElement("div");
        naslovKontejner.className="naslovKontejner";
        naslovKontejner.innerHTML="Grad "+this.ime+"(";
        if(this.x>0){
            naslovKontejner.innerHTML+=this.x+"°E, ";
        }
        else{
            naslovKontejner.innerHTML+=Math.abs(this.x)+"°W, ";
        }
        if(this.y>0){
            naslovKontejner.innerHTML+=this.y+"°N), ";
        }
        else{
            naslovKontejner.innerHTML+=Math.abs(this.y)+"°S), ";
        }
        naslovKontejner.innerHTML+="godina 2020."
        this.kontejner.appendChild(naslovKontejner);
        
        let btnDiv=document.createElement("div");
        btnDiv.classList.add("btnDiv");
        this.kontejner.appendChild(btnDiv);

        let niz=["Temperatura", "Padavine", "Suncani dani"];

        niz.forEach(n=>{
            let btn=document.createElement("input");
            btn.type="radio";
            btn.name=this.ime;
            btn.value=n;
            if(n==="Temperatura") btn.checked=true;
            btnDiv.appendChild(btn);

            let labela=document.createElement("label");
            labela.innerHTML=n;
            btnDiv.appendChild(labela);
        })

        let prikaziBtn=document.createElement("button");
        prikaziBtn.innerHTML="Prikazi";
        this.kontejner.appendChild(prikaziBtn);
        prikaziBtn.style.width= "100px";
        prikaziBtn.style.alignSelf="center";

        let prikazDiv=document.createElement("div");
        prikazDiv.classList.add("prikazDiv");
        this.kontejner.appendChild(prikazDiv);

        prikaziBtn.onclick=(ev)=>this.iscrtajPodatke(prikazDiv);


    }

    iscrtajPodatke(host){
        host.innerHTML="";
        let opcija=this.kontejner.querySelector("input[type=radio]:checked").value;
        this.Podaci.forEach(p=>{
            p.iscrtajPodatak(host, opcija)
        });

    }
}