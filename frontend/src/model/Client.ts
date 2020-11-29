// import {cpf} from 'cpf-cnpj-validator';
import {validCPF} from '../helper/ValidCpf';
export class Client{
    id?:number;
    name:string;
    cpf:string;
    constructor(name:string,cpf:string){
        this.name = name;
        this.cpf = cpf;
    }
    static contructByValues(val:any[]){
        return new Client(val[0]as string,val[1] as string);
    }
    getErrVect(){
        return [this.name!='',validCPF(this.cpf)];
    }
    // static ClienteValido(cl:Client){
    //     return cpf.isValid(cl.cpf)&&cl.name!='';
    // }
    

}