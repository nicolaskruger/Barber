-- SQLite

SELECT data, name FROM HairCut
    INNER JOIN Client ON
    HairCut.idCliente = Client.id
    ORDER by data;