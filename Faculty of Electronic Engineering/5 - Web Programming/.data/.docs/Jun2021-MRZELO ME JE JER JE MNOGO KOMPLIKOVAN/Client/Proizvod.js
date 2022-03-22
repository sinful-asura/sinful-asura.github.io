import { Sastojak } from "./Sastojak.js"

export class Proizvod{

    constructor(id, naziv){

        this.id=id;
        this.naziv=naziv;
        this.sastojci=[];
    }
}