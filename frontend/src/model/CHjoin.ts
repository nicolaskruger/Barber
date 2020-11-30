import { DateHelper } from '../helper/dateHelper';
import {Client} from './Client';
import {HairCut} from './HairCut';
export class CHjoin{
    hair:HairCut;
    Client:Client;
    constructor(hair:HairCut,client:Client){
        this.hair = hair;
        this.Client = client;
    }
    static maker(s:any){
        let hair = new HairCut(DateHelper.stringToDate(s.data),s.id,s.idC);
        let cli = new Client(s.name,"",s.idC)
        return new CHjoin(hair,cli);
    }
}