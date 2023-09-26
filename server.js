const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const cors = require('cors');

const videosRoutes = require('./routes/videos')

const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use('/', videosRoutes);

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
});
