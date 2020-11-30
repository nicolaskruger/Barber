import { CHjoin } from './CHjoin';

export class ListCHJoin{
    list:CHjoin[] = [];
    constructor(){

    }
    replace(lis:any[]){
        this.list = [];
        this.list = lis.map(s=>CHjoin.maker(s));
    }
}