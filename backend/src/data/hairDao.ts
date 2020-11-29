import {Database} from 'sqlite3';
import { isExportDeclaration } from 'typescript';
import { Client } from '../models/Client';
import { HairCut } from '../models/HairCut';
import {Dao} from './Dao';
import {DateHelper} from '../helper/dateHelper';
import routes from '../routes/routes';

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
    private QueryHairClient(){
        return `SELECT data, name FROM HairCut
        INNER JOIN Client ON
        HairCut.idCliente = Client.id
        ORDER by data;`
    }
    private hairCutQuery(){
        return `SELECT data from HairCut
        ORDER BY HairCut.data;`
    }
    private QueryincludeHairCut(){
        return `INSERT INTO HairCut (data, idCliente)
        VALUES (?,?); `
    }
    private QueryIncludeClient(){
        return `INSERT INTO Client (name,cpf)
        VALUES (?,?);`;
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
    HairClient(){
        return this.select(this.QueryHairClient(),[]);
    }
    IncludeHairCut(cli:Client,Hair:HairCut){
        return this.include(this.QueryincludeHairCut(),[Hair.date,cli.id])
    }
    includeClient(cli:Client){
        return this.include(this.QueryIncludeClient(),[cli.name,cli.cpf]);
    }
}