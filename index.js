const express = require('express')
const MySQLConnector = require('./connection/mysql.connection')
const app = express()
app.use(express.json());

const port = 3000

MySQLConnector.init();

const pokemonsRouter = require('./routes/pokemons')
app.use(pokemonsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})