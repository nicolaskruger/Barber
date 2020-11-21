"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = __importDefault(require("sqlite3"));
var db = new sqlite3_1.default.Database('data.db');
var createCliete = "CREATE TABLE IF NOT EXISTS Client (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name VARCHAR(40) NOT NULL,\n    cpf VARCHAR(11) NOT NULL \n);";
var createHairCut = "CREATE TABLE IF NOT EXISTS HairCut(\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    idCliente INTEGER not NULL,\n    data VARCHAR(10) not NULL,\n    FOREIGN KEY (idCliente) REFERENCES Client(id)\n);";
var insertPunpun = "INSERT INTO Client(\n    name,\n    cpf\n)SELECT 'punpun', '123345678912' WHERE NOT \nEXISTS (SELECT * FROM Client WHERE name = 'punpun');\n";
var inserAiko = "INSERT INTO Client(\n    name,\n    cpf\n)SELECT 'Aiko Tanaka', '123345678912' WHERE NOT \nEXISTS (SELECT * FROM Client WHERE name = 'Aiko Tanaka');\n";
var deleteCliete = "DELETE  FROM Client;";
var deleteHairCut = "DELETE FROM HairCut;";
var insertHairCut = "INSERT INTO HairCut(\n    idCliente,\n    data\n)\nVALUES\n    ((SELECT id FROM Client WHERE name='punpun'),'2020-11-25'),\n    ((SELECT id FROM Client WHERE name='punpun'),'2020-11-26'),\n    ((SELECT id FROM Client WHERE name='Aiko Tanaka'),'2020-11-27'),\n    ((SELECT id FROM Client WHERE name='Aiko Tanaka'),'2020-11-28');\n";
db.serialize(function () {
    try {
        //db.run("PRAGMA foreign_keys=ON")
        db.run(createCliete);
        db.run(createHairCut);
        db.run(deleteCliete);
        db.run(deleteHairCut);
        db.run(insertPunpun);
        db.run(inserAiko);
        db.run(insertHairCut);
    }
    catch (error) {
    }
});
// db.run("PRAGMA foreign_keys=ON");
// db.run(createCliete);
// db.run(createHairCut);
// db.run(deleteCliete);
// db.run(deleteHairCut);
// db.run(insertPunpun);
// db.run(inserAiko);
// db.run(insertHairCut);
process.on('SIGINT', function () {
    db.close(function () {
        console.log("DB created");
        process.exit(0);
    });
});
exports.default = db;
