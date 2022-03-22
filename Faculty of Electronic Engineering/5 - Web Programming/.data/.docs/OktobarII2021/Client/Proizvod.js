export class Proizvod{

    constructor(id, naziv, tip, kolicina, cena){
        this.id=id;
        this.naziv=naziv;
        this.cena=cena;
        this.kolicina=kolicina;
        this.tip=tip;
        this.kontejner=null;
        this.roditelj=null;
    }

    iscrtajProizvod(host){
        this.kontejner=document.createElement("tr");

        let niz=[this.naziv, this.cena, this.kolicina];

        niz.forEach(n=>{
            let el=document.createElement("td");
            el.innerHTML=n;
            this.kontejner.appendChild(el);
        });

        let izmeniBtn=document.createElement("button");
        izmeniBtn.innerHTML="Izmeni";
        izmeniBtn.onclick=(ev)=>this.prikaziZaIzmenu();
        this.kontejner.appendChild(izmeniBtn);

        let korpaBtn=document.createElement("button");
        korpaBtn.innerHTML="Korpa";
        korpaBtn.onclick=(ev)=>this.dodajUKorpu();
        this.kontejner.appendChild(korpaBtn);

        host.appendChild(this.kontejner);
    }

    prikaziZaIzmenu(){
        let prikazDiv=this.roditelj.kontejner.querySelector(".izmenaDiv");
        prikazDiv.innerHTML="";

        let izmeniLabel=document.createElement("label");
        izmeniLabel.className="manjiNaslov";
        izmeniLabel.innerHTML="Izmena: "+this.naziv;
        prikazDiv.appendChild(izmeniLabel);

        let cenaDiv=document.createElement("div");
        cenaDiv.className="red";
        prikazDiv.appendChild(cenaDiv);
        let cenaLabel=document.createElement("label");
        cenaLabel.innerHTML="Cena: ";
        cenaDiv.appendChild(cenaLabel);
        let cenaTxb=document.createElement("input");
        cenaTxb.type="text";
        cenaTxb.className="cenaTbx";
        cenaDiv.appendChild(cenaTxb);

        let kolicinaDiv=document.createElement("div");
        kolicinaDiv.className="red";
        prikazDiv.appendChild(kolicinaDiv);
        let kolicinaLabel=document.createElement("label");
        kolicinaLabel.innerHTML="Kolicina: ";
        kolicinaDiv.appendChild(kolicinaLabel);
        let kolicinaTxb=document.createElement("input");
        kolicinaTxb.type="text";
        kolicinaTxb.className="kolicinaTbx";
        kolicinaDiv.appendChild(kolicinaTxb);

        let izmeniBtn=document.createElement("button");
        izmeniBtn.innerHTML="Izmeni";
        izmeniBtn.onclick=(ev)=>this.update();
        prikazDiv.appendChild(izmeniBtn);

    }

    update(){
        let pom=this.roditelj.kontejner.querySelector(".izmenaDiv");
        let cena=pom.querySelector(".cenaTbx").value;
        let kolicina=pom.querySelector(".kolicinaTbx").value;
        
        if(cena===""&&kolicina===""){
            return;
        }
        else if(cena===""){
            cena=this.cena;
        }
        else if(kolicina==="")
        {
            kolicina=this.kolicina;
        }

        fetch("https://localhost:5001/Proizvod/IzmeniProizvod/"+this.id+"/"+kolicina+"/"+cena, {
            method:"POST"
        }).then(data=>{
            data.json().then(info=>{
                this.kolicina=info.kolicina;
                this.cena=info.cena;
                this.osveziPrikaz();
            });
        })
    }

    izmeni(kolicina){

        let k=parseInt(this.kolicina)-parseInt(kolicina);
        fetch("https://localhost:5001/Proizvod/IzmeniProizvod/"+this.id+"/"+k+"/"+this.cena, {
            method:"POST"
        }).then(data=>{
            data.json().then(info=>{
                this.kolicina=info.kolicina;
                this.cena=info.cena;
                this.osveziPrikaz();
            });
        })
    }

    osveziPrikaz(){
        this.kontejner.innerHTML="";
        let niz=[this.naziv, this.cena, this.kolicina];

        niz.forEach(n=>{
            let el=document.createElement("td");
            el.innerHTML=n;
            this.kontejner.appendChild(el);
        });

        let izmeniBtn=document.createElement("button");
        izmeniBtn.innerHTML="Izmeni";
        izmeniBtn.onclick=(ev)=>this.prikaziZaIzmenu();
        this.kontejner.appendChild(izmeniBtn);

        let korpaBtn=document.createElement("button");
        korpaBtn.innerHTML="Korpa";
        korpaBtn.onclick=(ev)=>this.dodajUKorpu();
        this.kontejner.appendChild(korpaBtn);
    }

    dodajUKorpu(){
        this.roditelj.Korpa.dodaj(this);
    }
}