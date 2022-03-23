const express = require("express");
const cors = require("cors")
const DATA_SOURCES = require('./config/vars.config')

let connector;
if (DATA_SOURCES.workingDB == "MYSQL") {
    connector = require("./MySQL/connection/mysql.connection");
    connector.init();
} else {
    connector = require("./Mongo/connection/mongo.connection");
}

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

const pokemonsRouter = require("./routes/pokemons");
app.use(pokemonsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});