-- SQLite
-- DROP TABLE Cliente;
-- DROP TABLE HairCut;
CREATE TABLE IF NOT EXISTS Client (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(40) NOT NULL,
    cpf VARCHAR(11) NOT NULL 
);
CREATE TABLE IF NOT EXISTS HairCut(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idCliente INTEGER not NULL,
    data VARCHAR(10) not NULL,
    FOREIGN KEY (idCliente) REFERENCES Cliente(id)
);
DELETE  FROM Client;
DELETE FROM HairCut;
INSERT INTO Client(
    name,
    cpf
)SELECT 'punpun', '123345678912' WHERE NOT 
EXISTS (SELECT * FROM Client WHERE name = 'punpun');

INSERT INTO Client(
    name,
    cpf
)SELECT 'Aiko Tanaka', '123345678912' WHERE NOT 
EXISTS (SELECT * FROM Client WHERE name = 'Aiko Tanaka');

INSERT INTO HairCut(
    idCliente,
    data
)
VALUES
    ((SELECT id FROM Client WHERE name='punpun'),'2020-11-25'),
    ((SELECT id FROM Client WHERE name='punpun'),'2020-11-26'),
    ((SELECT id FROM Client WHERE name='Aiko Tanaka'),'2020-11-27'),
    ((SELECT id FROM Client WHERE name='Aiko Tanaka'),'2020-11-28');


SELECT * FROM Client;
SELECT * FROM HairCut;
SELECT * FROM HairCut INNER JOIN Client on Client.id = HairCut.idCliente;