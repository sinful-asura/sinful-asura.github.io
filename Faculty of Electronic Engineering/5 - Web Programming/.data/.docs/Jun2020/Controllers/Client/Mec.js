import { Igrac } from "./Igrac.js"

export class Mec{

    constructor(id, igrac1, igrac2, lokacija, s1, s2, p11, p12, p21, p22, datum ){
        
        this.id=id;
        this.igrac1=igrac1;
        this.igrac2=igrac2;
        this.lokacija=lokacija;
        this.s1=s1;
        this.s2=s2;
        this.p11=p11;
        this.p12=p12;
        this.p21=p21;
        this.p22=p22;
        this.datum=datum;
        this.kontejner=null;
    }

    
    prikaziMec(){
        
        this.kontejner=document.createElement("div");
        this.kontejner.className="mecDiv";
        document.body.appendChild(this.kontejner);

        let lokacija=document.createElement("label");
        lokacija.innerHTML="Lokacija: "+this.lokacija;
        lokacija.style.fontSize="15px";
        lokacija.style.fontWeight="bold";
        this.kontejner.appendChild(lokacija);

        let datum=document.createElement("label");
        datum.innerHTML=this.datum;
        this.kontejner.appendChild(datum);

        let prikazDiv=document.createElement("div");
        prikazDiv.className="prikazDiv";
        this.kontejner.appendChild(prikazDiv);

        this.igrac1.prikaziIgraca(prikazDiv);

        let rezultatDiv=document.createElement("div");
        rezultatDiv.className="rezultatDiv";
        prikazDiv.appendChild(rezultatDiv);

        this.prikaziRezultat(rezultatDiv);

        this.igrac2.prikaziIgraca(prikazDiv);
    }

    prikaziRezultat(host){

        host.innerHTML="";
        let rezLbl=document.createElement("label");
        rezLbl.innerHTML="Rezultat";
        rezLbl.style.fontWeight="bold";
        host.appendChild(rezLbl);

        let rezDiv=document.createElement("div");
        rezDiv.className="rezDiv";
        rezDiv.innerHTML=this.s1+"-"+this.s2;
        host.appendChild(rezDiv);

        let setoviLbl=document.createElement("label");
        if(this.s1+this.s2>=1){
            setoviLbl.innerHTML="("+this.p11+"-"+this.p12+")";
            if(this.s1+this.s2==2){
                setoviLbl.innerHTML+=", ("+this.p21+"-"+this.p22+")"
            }
        }
        host.appendChild(setoviLbl);

        let br=document.createElement("br");
        host.appendChild(br);

        let p=document.createElement("label");
        p.innerHTML="Poeni";
        host.appendChild(p);

        let poeniLbl=document.createElement("div");
        if(this.s1+this.s2==0){
            poeniLbl.innerHTML=this.p11+"-"+this.p12;
        }
        else if(this.s1+this.s2==1){
            poeniLbl.innerHTML=this.p21+"-"+this.p22;
        }
        else{
            poeniLbl.innerHTML="---";
        }
        host.appendChild(poeniLbl);

        let btnDiv=document.createElement("div");
        btnDiv.className="btnDiv";
        host.appendChild(btnDiv);

        let btn1=document.createElement("button");
        btn1.innerHTML="+";
        btn1.onclick=(ev)=>this.promenaPoena(1, host);
        btnDiv.appendChild(btn1);
        btn1.style.marginRight="10px";

        let btn2=document.createElement("button");
        btn2.innerHTML="+";
        btn2.onclick=(ev)=>this.promenaPoena(2, host);
        btnDiv.appendChild(btn2);
        btn2.style.marginLeft="10px";
    }

    promenaPoena(igrac, host){

        if(this.s1+this.s2==2) return;

        fetch("https://localhost:5001/Mec/DodajPoen/"+this.id+"/"+igrac, {
            method:"POST"
        }).then(data=>{data.json().then(info=>{
            this.s1=info.setovi1;
            this.s2=info.setovi2;
            this.p11=info.poeniS1I1;
            this.p12=info.poeniS1I2;
            this.p21=info.poeniS2I1;
            this.p22=info.poeniS2I2;
            this.prikaziRezultat(host);
        })})
    }
}