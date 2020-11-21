export class HairCut{
    id?:number;
    idCliet?:number;
    date:Date;
    constructor(date:Date,idCliten?:number){
        this.idCliet = idCliten;
        this.date =date;
    }
}