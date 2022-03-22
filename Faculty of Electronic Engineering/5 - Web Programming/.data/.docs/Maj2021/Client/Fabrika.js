import { Silos } from "./Silos.js";

export class Fabrika{

    constructor(id, naziv){
        this.id=id;
        this.naziv=naziv;
        this.Silosi=[];
        this.kontejner=null;
    }

    iscrtajFabriku(host){

        this.kontejner=document.createElement("div");
        this.kontejner.className="prikaz";
        host.appendChild(this.kontejner);

        let prikazDiv=document.createElement("div");
        prikazDiv.className="prikazSilosa";
        this.kontejner.appendChild(prikazDiv);

        let naslovDiv=document.createElement("div");
        naslovDiv.className="naslovDiv";

        let naslovLabela=document.createElement("label");
        naslovLabela.innerHTML=this.naziv;
        naslovLabela.className="naslov";
        prikazDiv.appendChild(naslovDiv);
        naslovDiv.appendChild(naslovLabela);

        let silosiDiv=document.createElement("div");
        silosiDiv.className="silosiDiv";
        prikazDiv.appendChild(silosiDiv);

        this.prikaziSilose(silosiDiv);

        let meniDiv=document.createElement("div");
        meniDiv.class="meni";
        this.kontejner.appendChild(meniDiv);

        let cboxDiv=document.createElement("div");
        cboxDiv.className="pomocniDiv";
        meniDiv.appendChild(cboxDiv);

        let silosLabel=document.createElement("label");
        silosLabel.innerHTML="Silos: ";
        cboxDiv.appendChild(silosLabel);

        let cbox=document.createElement("select");
        cboxDiv.appendChild(cbox);
        this.prikaziOpcije(cbox);

        let kolicinaDiv=document.createElement("div");
        kolicinaDiv.className="pomocniDiv";
        meniDiv.appendChild(kolicinaDiv);

        let kolicnaLabel=document.createElement("label");
        kolicnaLabel.innerHTML="Kolicina: ";
        kolicinaDiv.appendChild(kolicnaLabel);

        let kolicinaInput=document.createElement("input");
        kolicinaInput.type="text";
        kolicinaDiv.appendChild(kolicinaInput);

        let button=document.createElement("button");
        button.className="dugme";
        button.innerHTML="Sipaj u silos";
        meniDiv.appendChild(button);
        button.onclick=(ev)=>this.sipaj();
    }

    prikaziSilose(host){

        this.Silosi.forEach(s=>{

            let stubDiv=document.createElement("div");
            stubDiv.className="stub";
            host.appendChild(stubDiv);

            let imeSilosa=document.createElement("label");
            imeSilosa.className="labela";
            imeSilosa.innerHTML=s.oznaka;
            stubDiv.appendChild(imeSilosa);

            let podaci=document.createElement("label");
            podaci.className="labela";
            podaci.innerHTML=`${s.trenutnaKolicina} tn/${s.kapacitet} tn`;
            stubDiv.appendChild(podaci);


            let silos=document.createElement("div");
            silos.className="silos";
            stubDiv.appendChild(silos);

            let visina=s.trenutnaKolicina/(s.kapacitet/100);

            let sadrzaj=document.createElement("div");
            sadrzaj.className="sadrzaj";
            sadrzaj.style.height=`${visina}%`;
            silos.appendChild(sadrzaj);
        });
    }

    prikaziOpcije(host){

        this.Silosi.forEach(s=>{
            let opcija=document.createElement("option");
            opcija.innerHTML=s.oznaka;
            opcija.value=s.id;
            host.appendChild(opcija);
        });
    }

    sipaj(){

        const select= this.kontejner.querySelector("select");
        const id=parseInt(select.options[select.selectedIndex].value);

        const kolicina=parseInt(this.kontejner.querySelector("input").value);

        if(kolicina===0 || kolicina==NaN) {
            
            alert("Nevalidni podaci!");
            return;
        }

        let silos;

        this.Silosi.forEach(s=>{
            if(s.id===id){
               silos=s;
            }
        });


        if(silos.trenutnaKolicina+kolicina>silos.kapacitet){
            alert("Nema dovoljno mesta!");
            return;
        }

        fetch("https://localhost:5001/Silos/AzurirajSilos/"+id+"/"+kolicina, {
            method:"POST"
        }).then(s=>{
            if (s.ok)
            {
                s.json().then(sil=>{
                    this.Silosi.forEach(element => {
                        if(element.id===sil.id){
                            element.trenutnaKolicina=sil.trenutnaKolicina;
                        }
                    });
                }).then(ok=>{
                    let prikaz=this.kontejner.querySelector(".silosiDiv");
                    prikaz.innerHTML="";
                    this.prikaziSilose(prikaz);
                }
                )

              
            }
        });
    }
}