import { Client } from "../model/Client";
import { Msg } from "../model/Msg";
import { inputManipulator } from "./InputManipulator";


export class IMCLient extends inputManipulator{
    getErroMsg(): string[] {
       let cl:Client = Client.contructByValues(Array.from(this.List).map(s=>s.value));
        cl.getErrVect().forEach((v,i)=>{
            this.viewMsg[i].set(new Msg(v?'':this.erroMsg[i]))
        })
       return [];
    }
    getElement() {
        throw new Error("Method not implemented.");
    }
    constructor(str:string,erro:string,erroMsg:string[]){
        super(str,erro,erroMsg);
    }
}