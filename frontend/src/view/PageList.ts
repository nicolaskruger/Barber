import {ViewPage} from './ViewPage'
import {Bind} from '../helper/Bind';

export class PageList{
    private list:Promise<void>[]= [];
    constructor(id:string[],pages:string[]){
        id.forEach((Id,i)=>{
            this.list.push(Bind.createPage(pages[i], new ViewPage(document.querySelector(Id))));
        })
    }
    getPromise(){
        return Promise.all(this.list);
    }
}