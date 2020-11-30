import {HttpService} from './HttpServices';
import {CHjoin} from '../model/CHjoin';
import {ListCHJoin} from '../model/ListCHJoin';
import { HairCut } from '../model/HairCut';
import {DateHelper} from '../helper/dateHelper';
import { Client } from '../model/Client';
import {anyToCHJoin} from '../helper/dataConverter';

export class HttpServiceHC extends HttpService{
    constructor(){
        super();
    }
    getFullroute(){
        return (this.route()+"HairClient"); 
    }
    private Client(){
        return this.route()+"Client"
    }
    private hcLike(){
        return this.route()+"HCLike/"
    }
    private delete(){
        return this.route()+"delHairC/";
    }
    getList(){
        return this.get(this.getFullroute())
            .then(s=>anyToCHJoin(s))
            .catch(err=>console.log(err))        
        
    }
    deleteHairCut(i:number){
        let path = this.delete()+i.toString();
        return this.del(path)
                .catch(err=>console.log(err));
    }
    like(name:string){
        return this.get(this.hcLike()+name)
                    .then(s=>anyToCHJoin(s))
                    .catch(err=>console.log(err));
    }
    
    
}