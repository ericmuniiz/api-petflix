const videos = require("../models/videos");

const database = require("../config/database");


// FUNÇÃO PARA VER AS VIDEOS
exports.showVideo = (req, res) => {
    const query = "SELECT * FROM VIDEOS";

    database.query(query).then(
        (resultado) => {
            res.status(200).send({ mensagem: resultado.rows })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }

        
    )
}

// FUNÇÃO PARA VER OS VIDEOS
exports.showVideoById = (req, res) => {
    const query = "SELECT * FROM VIDEOS WHERE id=$1;"
    const values = [req.params.id];

    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ mensagem: resultado.rows })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}


