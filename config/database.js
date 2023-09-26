const pg = require("pg");

const database = new pg.Client("postgres://oeeluopp:MiM1hmBqgSX9eojljBDLR5NWeQbzMhmF@silly.db.elephantsql.com/oeeluopp");

database.connect((erro) => {
    if(erro) {
        return console.log("Não foi possível conectar ao banco" , erro)
    }else{
        return console.log("Conectado ao banco de dados ElephantSQL!");
    }
});

module.exports = database;
