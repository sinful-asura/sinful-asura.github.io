export class Igrac{

    constructor(id, ime, prezime, godine, rang, slika){
        this.id=id;
        this.ime=ime;
        this.prezime=prezime;
        this.godine=godine;
        this.rang=rang;
        this.slika=slika;
        this.kontejner=null;
    }

    prikaziIgraca(host){

        this.kontejner=document.createElement("div");
        host.appendChild(this.kontejner);
        this.kontejner.className="igracDiv";

        let slika=document.createElement("img");
        slika.src=this.slika;
        this.kontejner.appendChild(slika);
        
        let ime=document.createElement("label");
        ime.innerHTML="Ime: "+this.ime +" "+this.prezime;
        this.kontejner.appendChild(ime);

        let godine=document.createElement("label");
        godine.innerHTML="Godine: "+this.godine;
        this.kontejner.appendChild(godine);

        let rang=document.createElement("label");
        rang.innerHTML="ATP rang: "+this.rang;
        this.kontejner.appendChild(rang);
    }
}