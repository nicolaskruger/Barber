import { Client } from "../model/Client";
import { HttpService } from "./HttpServices";

export class HttpServiceClients extends HttpService{
    constructor(){
        super();
    }
    getFullroute(){
        return (this.route()+"Client");
    }
    getList(){
        return this.get(this.getFullroute())
            .then(s=>{
                let list:Client[] = [];
                (s as Client[]).forEach(v=>{
                    list.push(new Client(v.name,v.cpf))
                })
                return  list;
            })
            .catch(err=>console.log(err))        
                    
    }
}