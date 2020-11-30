import {HttpService} from './HttpServices';
import {CHjoin} from '../model/CHjoin';
import {ListCHJoin} from '../model/ListCHJoin';
import { HairCut } from '../model/HairCut';
import {DateHelper} from '../helper/dateHelper';
import { Client } from '../model/Client';
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
    private delete(){
        return this.route()+"delHairC/";
    }
    getList(){
        return this.get(this.getFullroute())
            .then(s=>{
                let list:CHjoin[] = [];
                (s as any[]).forEach(v=>{
                    list.push(new CHjoin(new HairCut(DateHelper.stringToDate(v.data),v.id,v.idC),new Client(v.name,"",Number.parseInt(v.idC))))
                })
                return  list;
            })
            .catch(err=>console.log(err))        
        
    }
    deleteHairCut(i:number){
        let path = this.delete()+i.toString();
        return this.del(path)
                .catch(err=>console.log(err));
    }
    
    
}