export class Podatak{

    constructor(id, mesec, pTemperatura, kolicinaPadavina, brSDana){
        this.id=id;
        this.pTemperatura=pTemperatura;
        this.kolicinaPadavina=kolicinaPadavina;
        this.brSDana=brSDana;
        this.mesec=null;
        this.kontejner=null;
        this.Grad=null;

        switch(mesec){
            case 1:
                this.mesec="Jan";
                break;
            case 2:
                this.mesec="Feb";
                break; 
            case 3:
                this.mesec="Mar";
                break;
            case 4:
                this.mesec="Apr";
                break;      
            case 5:
                this.mesec="Maj";
                break;
            case 6:
                this.mesec="Jun";
                break;
            case 7:
                this.mesec="Jul";
                break;
            case 8:
                this.mesec="Avg";
                break;
            case 9:
                this.mesec="Sep";
                break;
            case 10:
                this.mesec="Okt";
                break;
            case 11:
                this.mesec="Nov";
                break;
            case 12:
                this.mesec="Dec";
                break;
        }
    }

    iscrtajPodatak(host, option){
        
        let max=-1;
        switch(option){
            case "Temperatura":
                this.Grad.Podaci.forEach(p=>{
                    if(p.pTemperatura>max){
                        max=p.pTemperatura;
                    }
                });
                break;
            case "Padavine":
                this.Grad.Podaci.forEach(p=>{
                    if(p.kolicinaPadavina>max){
                        max=p.kolicinaPadavina;
                    }
                });
                break;
            case "Suncani dani":
                this.Grad.Podaci.forEach(p=>{
                    if(p.brSDana>max){
                        max=p.brSDana;
                    }
                });
                break;
        }
   
     
        this.kontejner=document.createElement("div");
        host.appendChild(this.kontejner);
        
        this.kontejner.innerHTML="";
        this.kontejner.classList.add("ceoPodatak");
        
        let pomocniDiv=document.createElement("div");
        pomocniDiv.classList.add("pomocniDiv");
        this.kontejner.appendChild(pomocniDiv);

        let mesecLabel=document.createElement("label");
        mesecLabel.innerHTML=this.mesec;
        this.kontejner.appendChild(mesecLabel);

        let labela=document.createElement("label");
        let height;

        switch(option){
            case "Temperatura":
                labela.innerHTML=this.pTemperatura+"C";
                height=(this.pTemperatura/max)*100;
                break;
            case "Padavine":
                labela.innerHTML=this.kolicinaPadavina+"mm";
                height=(this.kolicinaPadavina/max)*100;
                break;
            case "Suncani dani":
                labela.innerHTML=this.brSDana+"dana";
                height=(this.brSDana/max)*100;
                break;
        }
        this.kontejner.appendChild(labela);

        let skalaDiv=document.createElement("div");
        skalaDiv.classList.add("skala");
        skalaDiv.style.height=`${height}%`;
        pomocniDiv.appendChild(skalaDiv);

        this.kontejner.onclick=(ev)=>this.prikaziMeni(host, this, option);
    }


    prikaziMeni(host, podatak, option){
        let meniDiv=document.createElement("div");
        meniDiv.className="meniDiv";
        host.appendChild(meniDiv);

        let naslov=document.createElement("label");
        naslov.innerHTML="Mesec: "+this.mesec;
        meniDiv.appendChild(naslov);

        let tbx=document.createElement("input");
        tbx.type="number";
        tbx.style.margin="5px";
        meniDiv.appendChild(tbx);

        let btn=document.createElement("button");
        btn.innerHTML="Sacuvaj izmene";
        btn.style.width="100px";
        meniDiv.appendChild(btn);
        btn.onclick=(ev)=>podatak.izmeni(host, option, tbx);
    }

    izmeni(host, option, tbx){
        let br=tbx.value;
        if(br===""){
            alert("Unesite podatak!");
            return;
        }

        let div=this.Grad.kontejner.querySelector(".prikazDiv");

        switch(option){
            case "Temperatura":
                if(br<0) {
                    alert("Neodgovarajuci podatak!");
                    return;
                }
                fetch("https://localhost:5001/MeteoroloskiPodatak/IzmeniTemperaturu/"+this.id+"/"+br, {
                    method:"POST"
                }).then(data=>{data.json().then(info=>{
                    this.pTemperatura=info.pTemperatura;
                    this.Grad.iscrtajPodatke(div);
                })
                });
                break;
            case "Padavine":
                if(br<0) {
                    alert("Neodgovarajuci podatak!");
                    return;
                }
                fetch("https://localhost:5001/MeteoroloskiPodatak/IzmeniPadavine/"+this.id+"/"+br, {
                    method:"POST"
                }).then(data=>{data.json().then(info=>{
                    this.kolicinaPadavina=info.kolicinaPadavina;
                    this.Grad.iscrtajPodatke(div);
                })
                });
                break;
            case "Suncani dani":
                if(br<0||br>31) {
                    alert("Neodgovarajuci podatak!");
                    return;
                }
                fetch("https://localhost:5001/MeteoroloskiPodatak/IzmeniDane/"+this.id+"/"+br, {
                    method:"POST"
                }).then(data=>{data.json().then(info=>{
                    this.brSDana=info.brSDana;
                    this.Grad.iscrtajPodatke(div);
                })
                });
                break;
        }
        alert("Podaci izmenjeni!");

        
    }
}