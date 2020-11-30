import { CHjoin } from "../model/CHjoin";
import { Client } from "../model/Client";
import { HairCut } from "../model/HairCut";
import { DateHelper } from "./dateHelper";

export function anyToCHJoin(s:any){
    let list:CHjoin[] = [];
                (s as any[]).forEach(v=>{
                    list.push(new CHjoin(new HairCut(DateHelper.stringToDate(v.data),v.id,v.idC),new Client(v.name,"",Number.parseInt(v.idC))))
                })
                return  list;
}