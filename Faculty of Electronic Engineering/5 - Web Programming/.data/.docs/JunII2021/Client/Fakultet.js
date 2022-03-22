import { Podatak } from "./Podatak.js";

export class Fakultet{
    constructor(rokovi, predmeti){
        this.Rokovi=rokovi;
        this.Predmeti=predmeti;
        this.kontejner=null;
    }

    iscrtajFakultet(){
        this.kontejner=document.createElement("div");
        this.kontejner.className="glavniKontejner";
        document.body.appendChild(this.kontejner);

        let meniDiv=document.createElement("div");
        meniDiv.className="meniKontejner";
        this.kontejner.appendChild(meniDiv);
        this.iscrtajMeni(meniDiv);

        let tabelaDiv=document.createElement("div");
        tabelaDiv.className="tabelaDiv";
        this.kontejner.appendChild(tabelaDiv);

        let tabela=document.createElement("table");
        tabela.className="tabela";
        tabelaDiv.appendChild(tabela);

        let th=document.createElement("thead");
        let headeri=["Indeks","Ime","Prezime","Predmet", "Ispitni rok", "Ocena"];
        headeri.forEach(h=>{
            let tr=document.createElement("th");
            tr.innerHTML=h;
            th.appendChild(tr);
        });

        let tb=document.createElement("tbody");

        tabela.appendChild(th);
        tabela.appendChild(tb);

    }

    iscrtajMeni(host){

        let cboxDiv=document.createElement("div");
        cboxDiv.className="redMenija";
        host.appendChild(cboxDiv);

        let ispitLabel=document.createElement("label");
        ispitLabel.innerHTML="Ispit: ";
        cboxDiv.appendChild(ispitLabel);

        let cbox=document.createElement("select");
        cboxDiv.appendChild(cbox);

        this.Predmeti.forEach(p=>{
            let op=document.createElement("option");
            op.innerHTML=p.naziv;
            op.value=p.id;
            cbox.appendChild(op);
        });

        let rokLabel=document.createElement("label");
        rokLabel.className="blokLabela";
        rokLabel.innerHTML="Rok:"
        host.appendChild(rokLabel);

        let rokoviDiv=document.createElement("div");
        rokoviDiv.className="rokoviDiv";
        host.appendChild(rokoviDiv);

        let leviRok=document.createElement("div");
        leviRok.className="rokoviKontejner";
        rokoviDiv.appendChild(leviRok);

        let desniRok=document.createElement("div");
        desniRok.className="rokoviKontejner";
        rokoviDiv.appendChild(desniRok);

        this.Rokovi.forEach((r,index)=>{

            let red=document.createElement("div");
            let cb=document.createElement("input");
            cb.type="checkbox";
            cb.value=r.id;
            red.appendChild(cb);
            let labela=document.createElement("label");
            labela.innerHTML=r.naziv;
            red.appendChild(labela);

            if(index%2===0)
                leviRok.appendChild(red);
            else
                desniRok.appendChild(red);

        });

        let btnNadji=document.createElement("button");
        btnNadji.innerHTML="Nadji";
        btnNadji.onclick=(ev)=>this.nadji();

        host.appendChild(btnNadji);

        let indeksDiv=document.createElement("div");
        indeksDiv.className="redMenija";
        let indeksL=document.createElement("label");
        indeksL.innerHTML="Indeks: ";
        indeksDiv.appendChild(indeksL);

        let indexTxt=document.createElement("input");
        indexTxt.type="text";
        indexTxt.className="index";
        indeksDiv.appendChild(indexTxt);
        host.appendChild(indeksDiv);

        let ocenaDiv=document.createElement("div");
        ocenaDiv.className="redMenija";
        let ocenaL=document.createElement("label");
        ocenaL.innerHTML="Ocena: ";
        ocenaDiv.appendChild(ocenaL);

        let ocenaTxt=document.createElement("input");
        ocenaTxt.type="text";
        ocenaTxt.className="ocena";
        ocenaDiv.appendChild(ocenaTxt);
        host.appendChild(ocenaDiv);

        let btnUpisi=document.createElement("button");
        btnUpisi.innerHTML="Upisi";
        btnUpisi.onclick=(ev)=>this.upisi();

        host.appendChild(btnUpisi);

    }

    nacrtajTabelu(tb, podaci){
        tb.innerHTML="";
        podaci.forEach(p=>{
            p.iscrtajSe(tb);
        })
    }

    nadji(){

        let idPredmeta=this.kontejner.querySelector("select").value;
        let selektovani=this.kontejner.querySelectorAll("input[type=checkbox]:checked");
        if(selektovani.length===0){
            alert("Selektujte rokove!");
            return;
        }
        let string="";

        selektovani.forEach((s, index)=>{
            string+=s.value;
            if(index<selektovani.length-1)
                string+="a";
        });

        let Podaci=[];
        fetch("https://localhost:5001/Spoj/Pretrazi/"+idPredmeta+"/"+string).then(data=>{
            data.json().then(podaci=>{
                podaci.forEach(pod=>{
                    let p=new Podatak(pod.index, pod.ime, pod.prezime, pod.predmet, pod.rok, pod.ocena);
                    Podaci.push(p);
                });
                let host=this.kontejner.querySelector("tbody");
                this.nacrtajTabelu(host, Podaci);
            });
        });
    }

    upisi(){

        let idPredmeta=this.kontejner.querySelector("select").value;
        let rok=this.kontejner.querySelectorAll("input[type=checkbox]:checked");
        if(rok.length!=1){
            alert("Morate selektovati samo jedan rok!");
            return;
        }
        let r=rok[0].value;
       
        let ocena=this.kontejner.querySelector(".ocena").value;
        if(ocena===""|| ocena<6 || ocena>10){
            alert("Nevalidna ocena!");
            return;
        }

        let index=this.kontejner.querySelector(".index").value;

        fetch("https://localhost:5001/Spoj/DodajSpoj/"+index+"/"+idPredmeta+"/"+r+"/"+ocena,{
            method:"PUT"
        }).then(rez=>{
            if(rez.ok){
                let Podaci=[];
                fetch("https://localhost:5001/Spoj/PreuzmiZaStudentaIndex/"+index).then(data=>{
                    data.json().then(podaci=>{
                        podaci.forEach(pod=>{
                            let p=new Podatak(pod.index, pod.ime, pod.prezime, pod.predmet, pod.rok, pod.ocena);
                            Podaci.push(p);
                        });
                        this.nacrtajTabelu(this.kontejner.querySelector("tbody"),Podaci);
                    });
                });
            }
            else{
                alert("Doslo je do greske!");
                return;
            }
        })
        
    }
}