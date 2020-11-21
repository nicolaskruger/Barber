-- SQLite
SELECT data from HairCut
    INNER JOIN Client ON
    HairCut.idCliente = Client.id
    WHERE Client.id = 1 ORDER BY
    HairCut.data;