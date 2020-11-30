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
    private like(){
        return this.route()+"clientLike/";
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

    clientLike(name:string){
        return this.get(this.like()+name)
                    .catch(err=>console.log(err));
    }
    
}