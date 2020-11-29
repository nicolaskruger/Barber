import { ViewMsg } from "../view/ViewMsg";

export abstract class inputManipulator{
    protected List:NodeListOf<HTMLInputElement>
    protected viewMsg:ViewMsg[] = [];
    protected trueVet:boolean[] = [false,false];
    protected erroMsg:string[] = [];
    constructor(str:string,erro:string,erroMsg:string[]){
        this.erroMsg = erroMsg;
        document.querySelectorAll(erro)
                .forEach(err=>{
                    this.viewMsg.push(new ViewMsg(err as HTMLElement));
                })
        this.List = document.querySelectorAll(str);
    }
    abstract getErroMsg():string[];
    abstract getElement():any;
}