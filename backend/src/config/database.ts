import sqlite3,{Database} from 'sqlite3';
import fs from 'fs';
import path from 'path'
import {HairCut} from '../models/HairCut'
import { hairDao } from '../data/hairDao';

const db:Database = new sqlite3.Database('data.db');

const createCliete = `CREATE TABLE IF NOT EXISTS Client (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(40) NOT NULL,
    cpf VARCHAR(11) NOT NULL 
);`
const createHairCut = `CREATE TABLE IF NOT EXISTS HairCut(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idCliente INTEGER not NULL,
    data VARCHAR(10) not NULL,
    FOREIGN KEY (idCliente) REFERENCES Client(id)
);`
const insertPunpun =`INSERT INTO Client(
    name,
    cpf
)SELECT 'punpun', '123345678912' WHERE NOT 
EXISTS (SELECT * FROM Client WHERE name = 'punpun');
`;
const inserAiko = `INSERT INTO Client(
    name,
    cpf
)SELECT 'Aiko Tanaka', '123345678912' WHERE NOT 
EXISTS (SELECT * FROM Client WHERE name = 'Aiko Tanaka');
`;
const deleteCliete = `DELETE  FROM Client;`;
const deleteHairCut = `DELETE FROM HairCut;`;
const insertHairCut = `INSERT INTO HairCut(
    idCliente,
    data
)
VALUES
    ((SELECT id FROM Client WHERE name='punpun'),'2020-11-25'),
    ((SELECT id FROM Client WHERE name='punpun'),'2020-11-26'),
    ((SELECT id FROM Client WHERE name='Aiko Tanaka'),'2020-11-27'),
    ((SELECT id FROM Client WHERE name='Aiko Tanaka'),'2020-11-28');
`;
db.serialize(()=>{
    try {
        
        //db.run("PRAGMA foreign_keys=ON")
        db.run(createCliete)
        db.run(createHairCut)
        //db.run(deleteCliete)
        //db.run(deleteHairCut)
        db.run(insertPunpun)
        db.run(inserAiko)
        db.all(`SELECT * FROM HairCut`,
                (err,resp:Response)=>{
                    let lis = resp as unknown  as HairCut[];
                    if(lis.length==0)
                    db.run(insertHairCut);
                }) 
        //db.run(insertHairCut)
    } catch (error) {
        
    }
})
// db.run("PRAGMA foreign_keys=ON");
// db.run(createCliete);
// db.run(createHairCut);
// db.run(deleteCliete);
// db.run(deleteHairCut);
// db.run(insertPunpun);
// db.run(inserAiko);
// db.run(insertHairCut);

process.on('SIGINT',()=>{
    db.close(()=>{
        console.log("DB created");
        process.exit(0);
    })
})

export default db;