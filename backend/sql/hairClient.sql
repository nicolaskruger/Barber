-- SQLite

SELECT data, name, HairCut.id as id FROM HairCut
    INNER JOIN Client ON
    HairCut.idCliente = Client.id
    ORDER by data;