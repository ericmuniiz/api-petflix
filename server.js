const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const videosRoutes = require('./routes/videos')

const app = express();

app.use(bodyParser.json());

app.use('/', videosRoutes);

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`)
});
