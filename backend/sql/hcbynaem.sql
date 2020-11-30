SELECT data, name, HairCut.id as id,Client.id as idC  FROM HairCut
INNER JOIN Client ON
HairCut.idCliente = Client.id
ORDER by data
WHERE name LIKE 'aiko';