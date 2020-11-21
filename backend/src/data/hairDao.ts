import {Database} from 'sqlite3';
import { isExportDeclaration } from 'typescript';
import {Dao} from './Dao';

export class hairDao extends Dao{
    constructor(db:Database){
        super(db)
    }
    private clienteQuery(){
        return `SELECT * FROM Client;`;
    }
    private clientQueryById(){
        return `SELECT * FROM Client WHERE id = ?`
    }
    private hairCutQueryClient(){
        return `SELECT data from HairCut
        INNER JOIN Client ON
        HairCut.idCliente = Client.id
        WHERE Client.id = ? ORDER BY
        HairCut.data;`
    }
    private hairCutQuery(){
        return `SELECT data from HairCut
        ORDER BY HairCut.data;`
    }
    Clients(){
        return this.select(this.clienteQuery(),[]);
    }
    ClientById(id:number){
        return this.select(this.clientQueryById(),[id]);
    }
    HairCutCliente(id:number){
        return this.select(this.hairCutQueryClient(),[id]);
    }
    HairCut(){
        return this.select(this.hairCutQuery(),[]);
    }
}