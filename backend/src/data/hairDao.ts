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
        return `SELECT data, name, HairCut.id as id,Client.id as idC  FROM HairCut
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
    private QueryDeleteHairCut(){
        return `DELETE FROM HairCut 
        WHERE id = ?;`
    }
    private QueryDeleteClient(){
        return `DELETE FROM Client
            WHERE id = ?;`
        // return `DELETE FROM Client
        // WHERE id = ?;
        // DELETE FROM HairCut
        // WHERE idCliente =?;`
    }
    private QueryUpdateClient(){
        return `UPDATE Client
        set name = ?,
            cpf = ?
        WHERE 
            id = ?;`
    }
    private QueryUpdateHc(){
        return `UPDATE HairCut
        SET data = ?,
            idCliente = ?
        WHERE 
            id = ?;`
    }
    private QuerySelectClientLike(){
        return `
        SELECT * from Client
        WHERE name LIKE ?
        ORDER by name;
        `
    }
    private QuerySelectHCLike(){
        return `
        SELECT data, name, HairCut.id as id,Client.id as idC  FROM HairCut
        INNER JOIN Client ON
        HairCut.idCliente = Client.id
        WHERE name LIKE ?
        ORDER by data;
        `
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
    deleteHairCut(id:number){
        return this.include(this.QueryDeleteHairCut(),[id]);
    }
    deleteClient(id:number){
        return this.include(this.QueryDeleteClient(),[id]);
    }
    updateClient(client:Client){
        return this.include(this.QueryUpdateClient(),[client.name,client.cpf,client.id]);
    }
    updateHC(hair:HairCut){
        return this.include(this.QueryUpdateHc(),[hair.date,hair.idCliet,hair.id]);
    }
    likeClient(name:string){
        return this.select(this.QuerySelectClientLike(),[`%${name}%`]);
    }
    likeHC(name:string){
        return this.select(this.QuerySelectHCLike(),[`%${name}%`]);
    }
}