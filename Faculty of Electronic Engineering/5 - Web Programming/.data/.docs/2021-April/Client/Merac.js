export class Merac{

    constructor(id, naziv, max, min, dg, gg, boja, podeok, trenutna, srednja){
        this.id=id;
        this.naziv=naziv;
        this.max=max;
        this.min=min;
        this.dg=dg;
        this.gg=gg;
        this.boja=boja;
        this.podeok=podeok;
        this.trenutna=trenutna;
        this.srednja=srednja;
        this.kontejner=null;
    }

    iscrtajMerac(host){
        
        this.kontejner=document.createElement("div");
        this.kontejner.className="ceoPrikaz";
        host.appendChild(this.kontejner);

        let meniDiv=document.createElement("div");
        meniDiv.className="meni";
        this.kontejner.appendChild(meniDiv);
        this.iscrtajMeni(meniDiv);

        let meracDiv=document.createElement("div");
        meracDiv.className="meracDiv";
        this.kontejner.appendChild(meracDiv);

        let podeociDiv=document.createElement("div");
        podeociDiv.className="podeociDiv";
        meracDiv.appendChild(podeociDiv);

        let vrednost=parseInt(this.dg+this.podeok);
       
        while(vrednost<=this.gg){

            let podeok=document.createElement("div");
            podeok.className="podeok";
            podeok.innerHTML=vrednost;
            vrednost+=this.podeok;
            podeociDiv.appendChild(podeok);
        }

        let skalaDiv=document.createElement("div");
        skalaDiv.className="skalaDiv";
        meracDiv.appendChild(skalaDiv);

        let skala=document.createElement("div");
        skala.className="skala";
        skala.style.backgroundColor=this.boja;
        let procenat=((this.trenutna-this.dg)/(this.gg-this.dg))*100;
        skala.style.height=`${procenat}%`;
        skalaDiv.appendChild(skala);

    }

    iscrtajMeni(host){

        host.innerHTML="";
        let naslov=document.createElement("label");
        naslov.innerHTML=this.naziv;
        naslov.className="naslov";
        host.appendChild(naslov);

        let tbx=document.createElement("input");
        tbx.type="number";
        host.appendChild(tbx);

        let btn=document.createElement("button");
        btn.innerHTML="Setuj vrednost";
        btn.onclick=(ev)=>this.update(tbx.value);
        host.appendChild(btn);

        let minLbl=document.createElement("label");
        minLbl.style.display="block";
        minLbl.innerHTML="Min. izmerena: "+this.min;
        host.appendChild(minLbl);

        let maxLbl=document.createElement("label");
        maxLbl.style.display="block";
        maxLbl.innerHTML="Max. izmerena: "+this.max;
        host.appendChild(maxLbl);

        let srLbl=document.createElement("label");
        srLbl.style.display="block";
        srLbl.innerHTML="Srednja izmerena: "+this.srednja;
        host.appendChild(srLbl);
    }

    iscrtajSkalu(){
        
        let procenat=((this.trenutna-this.dg)/(this.gg-this.dg))*100;
        let skala=this.kontejner.querySelector(".skala");
        skala.style.height=procenat+"%";
     
    }

    update(value){

        if(value<this.dg || value>this.gg){
            alert("Neodgovarajuca vrednost!");
            return;
        }
        fetch("https://localhost:5001/Merac/PromeniVrednost/"+this.id+"/"+value,{
            method:"POST"
        }).then(data=>{
            data.json().then(info=>{
                this.trenutna=info.trenutnaVrednost;
                this.srednja=info.zbirIzmerenih/info.brojMerenja;
                this.max=info.maxIzmerena;
                this.min=info.minIzmerena;
                this.iscrtajMeni(this.kontejner.querySelector(".meni"));
                this.iscrtajSkalu();
            })
        })

    }
}