import {hairDao}  from '../data/hairDao';
import db from '../config/database';
import {Client} from '../models/Client';

export class ClienteHelper{
    static haveCliet(id:number){
        let hDao = new hairDao(db);
        return hDao.ClientById(id)
                    .then(c=>{
                        let list = c as Client[];
                        return list.length >= 1;
                    })
    }
}