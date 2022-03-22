import { Polica } from "./Polica.js"

export class VideoKlub{

    constructor(id, naziv){
        this.id=id;
        this.naziv=naziv;
        this.Police=[];
        this.kontejner=null;
    }

    iscrtajKlub(){
        this.kontejner=document.createElement("div");
        this.kontejner.className="klub";
        document.body.appendChild(this.kontejner);

        let imeLbl=document.createElement("label");
        imeLbl.className="naziv";
        imeLbl.innerHTML="Video klub \""+this.naziv+"\"";
        this.kontejner.appendChild(imeLbl);

        let prikazDiv=document.createElement("div");
        prikazDiv.className="prikaz";
        this.kontejner.appendChild(prikazDiv);

        let meniDiv=document.createElement("div");
        meniDiv.className="meni";
        prikazDiv.appendChild(meniDiv);

        let policeDiv=document.createElement("div");
        policeDiv.className="prikazPolica";
        prikazDiv.appendChild(policeDiv);

        this.iscrtajMeni(meniDiv);
        this.iscrtajPolice(policeDiv);
    }

    iscrtajMeni(host){
        let nizOznaka=[];
        let nizIDeva=[];

        fetch("https://localhost:5001/VideoKlub/PreuzmiOznakePolica/"+this.id, {
            method:"GET"
        }).then(data=>{
            data.json().then(info=>{
                info.forEach(i=>{
                    nizOznaka.push(i.oznaka);
                    nizIDeva.push(i.id);
                });
                
                nizOznaka.forEach((o,index)=>{
                    let red=document.createElement("div");
                    let rbtn=document.createElement("input");
                    rbtn.type="radio";
                    rbtn.name=this.naziv;
                    rbtn.value=nizIDeva[index];
                    red.appendChild(rbtn);
                    let lbl=document.createElement("label");
                    lbl.innerHTML=o;
                    red.appendChild(lbl);
                    host.appendChild(red);
                });

                let red=document.createElement("div");
                let lbl=document.createElement("label");
                lbl.innerHTML="Broj DVD-eva: ";
                red.append(lbl);
                host.appendChild(red);

                let tbx=document.createElement("input");
                tbx.type="text";
                host.appendChild(tbx);

                let btn=document.createElement("button");
                btn.innerHTML="Dodaj na policu";
                btn.onclick=(ev)=>this.dodajDiskove();
                host.appendChild(btn);

            });
        })
    }
    
    iscrtajPolice(host){

        let policeDiv=document.createElement("div");
        policeDiv.className="policeDiv";
        this.Police.forEach(p=>{
            p.iscrtajPolicu(policeDiv);
        })

        host.appendChild(policeDiv);

    }

    dodajDiskove(){
       
        let selektovana=this.kontejner.querySelector("input[type=radio]:checked");
        if(selektovana==null) {
            alert("Niste selektovali policu!");
            return;
        }

        let id=selektovana.value;
        
        let tbx=this.kontejner.querySelector("input[type=text]").value;
        let br=parseInt(tbx);

        if(isNaN(br)){
            alert("Morate uneti broj!");
            return;
        }
  
        let zaIzmenu=null;

        for(let i=0;i<this.Police.length;i++){
            if(this.Police[i].id==id){
                zaIzmenu=this.Police[i];
                break;
            }
        }

        if(zaIzmenu.trenutnoDiskova+br>zaIzmenu.maxDiskova){
            alert("Nema mesta na polici!");
            return;
        }

        fetch("https://localhost:5001/Polica/DodajDiskove/"+id+"/"+br,{
            method:"PUT"
        }).then(data=>{data.json().then(info=>{
            zaIzmenu.trenutnoDiskova=info.trenutnoDiskova;
            zaIzmenu.osveziPrikaz();
            alert("Izmenjeni podaci!");
        })});

    }
}
