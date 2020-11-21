import {Database} from 'sqlite3';
export class Dao{
    protected db:Database;
    protected constructor(db:Database){
        this.db = db;
    }   
    protected select(query:string,inputs:any[]){
        return new Promise((res,rej)=>{
            this.db.all(
                query,
                inputs,
                (err,resp:Response)=>{
                    if(err) return rej(err);
                    res(resp);
                }
            )
        })
    }
}