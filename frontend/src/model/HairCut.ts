export class HairCut{
    id?:number;
    idCliet?:number;
    date:Date;
    constructor(date:Date,id?:number,idCliten?:number){
        this.idCliet = idCliten;
        this.date =date;
        this.id = id;
    }
}