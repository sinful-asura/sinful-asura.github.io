
export class Polica{

    constructor(id, oznaka, maxDiskova, trenutnoDiskova) {

        this.id=id;
        this.oznaka=oznaka;
        this.maxDiskova=maxDiskova;
        this.trenutnoDiskova=trenutnoDiskova;
        this.kontejner=null;
    }

    iscrtajPolicu(host){

        this.kontejner=document.createElement("div");
        this.kontejner.className="policaRed";

        let oznaka=document.createElement("div");
        oznaka.className="oznaka";
        oznaka.innerHTML=this.oznaka;
        this.kontejner.appendChild(oznaka);

        let kont=document.createElement("div");
        kont.className="polica";
        this.kontejner.appendChild(kont);

        for(let i=0;i<this.trenutnoDiskova;i++){

            let disk=document.createElement("div");
            disk.className="disk";
            let w=100/this.maxDiskova;
            disk.style.width=`${w}%`;
            kont.appendChild(disk);
        }

        let br=document.createElement("div");
        br.className="br";
        br.innerHTML=this.trenutnoDiskova+"/"+this.maxDiskova;
        this.kontejner.appendChild(br);

        host.appendChild(this.kontejner);
    }

    osveziPrikaz(){

        let polica=this.kontejner.querySelector(".polica");
        polica.innerHTML="";
        for(let i=0;i<this.trenutnoDiskova;i++){

            let disk=document.createElement("div");
            disk.className="disk";
            let w=100/this.maxDiskova;
            disk.style.width=`${w}%`;
            polica.appendChild(disk);
        }

        this.kontejner.querySelector(".br").innerHTML=this.trenutnoDiskova+"/"+this.maxDiskova;
    }

}