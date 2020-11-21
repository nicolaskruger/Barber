import {cpf} from 'cpf-cnpj-validator';
export class Client{
    id?:number;
    name:string;
    cpf:string;
    constructor(name:string,cpf:string){
        this.name = name;
        this.cpf = cpf;
    }
    static ClienteValido(cl:Client){
        return cpf.isValid(cl.cpf)&&cl.name!='';
    }
    

}