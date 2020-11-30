import { Client } from "../model/Client";
import { HttpService } from "./HttpServices";

export class HttpServiceClients extends HttpService{
    constructor(){
        super();
    }
    getFullroute(){
        return (this.route()+"Client");
    }
    private delete(){
        return this.route()+"delClient/";
    }
    getList(){
        return this.get(this.getFullroute())
            .then(s=>{
                let list:Client[] = [];
                (s as Client[]).forEach(v=>{
                    list.push(new Client(v.name,v.cpf,v.id))
                })
                return  list;
            })
            .catch(err=>console.log(err))        
                    
    }
    deletClient(i:number){
            let path = this.delete()+i.toString();
            return this.del(path)
                    .catch(err=>console.log(err));
    }

    
}