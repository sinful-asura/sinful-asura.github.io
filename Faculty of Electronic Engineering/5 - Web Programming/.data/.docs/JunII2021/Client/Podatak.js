export class Podatak{

    constructor(index, ime, prezime, predmet, rok, ocena){
        this.index=index;
        this.ime=ime;
        this.prezime=prezime;
        this.predmet=predmet;
        this.rok=rok;
        this.ocena=ocena;
        this.kontejner=null;
    }

    iscrtajSe(host){
        this.kontejner=document.createElement("tr");

        let i=document.createElement("td");
        i.innerHTML=this.index;
        this.kontejner.appendChild(i);

        i=document.createElement("td");
        i.innerHTML=this.ime;
        this.kontejner.appendChild(i);
        
        i=document.createElement("td");
        i.innerHTML=this.prezime;
        this.kontejner.appendChild(i);

        i=document.createElement("td");
        i.innerHTML=this.predmet;
        this.kontejner.appendChild(i);
        
        i=document.createElement("td");
        i.innerHTML=this.rok;
        this.kontejner.appendChild(i);
        
        i=document.createElement("td");
        i.innerHTML=this.ocena;
        this.kontejner.appendChild(i);

        host.appendChild(this.kontejner);
    }
}