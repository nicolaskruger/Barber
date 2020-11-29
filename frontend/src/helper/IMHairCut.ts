import { stringify } from 'querystring';
import {inputManipulator} from './InputManipulator'
import {ValiDate} from '../model/ValidaDate'
import { link } from 'fs';
import { listenerCount } from 'process';
import { ViewMsg } from '../view/ViewMsg';
import {Msg} from '../model/Msg';
import {HttpService} from '../service/HttpServices';

export class IMHairCut extends inputManipulator{
    
    getErroMsg(): string[] {
        let val = Array.from(this.List).map(s=>s.value);
        let service = new HttpService();
        service.get(service.route()+`Client/${val[1]}`)
                .then(s=>{
                    this.trueVet[0]= ValiDate.dateValid(val[0])
                    this.trueVet[1]= Array.from(s).length>0;
                    console.log(this.trueVet);
                    this.trueVet.forEach((val,i)=>{
                        this.viewMsg[i].set(new Msg(val?'':this.erroMsg[i]));
                    })
                })
        return [];
    }
    getElement() {
        throw new Error('Method not implemented.');
    }
    constructor(str:string,erro:string,erroMsg:string[]){
        super(str,erro,erroMsg);
    }
}