export class Msg{
    private msg:string="";
    constructor(msg:string=''){
        this.msg = msg;
    }
    setMsg(str:string){this.msg=str;}
    getMsg(){return this.msg}
}