const pokemon = require('../services/pokemon');
const controller = {}

controller.getPokemon = async(req, res) => {

    const data = await pokemon.show()

    res.send(data);
}

controller.getMetaData = async(req, res) => {

    const data = await pokemon.superMetaData()
    res.send(data);
}

controller.insertPokemon = async(req, res) => {

    const data = await pokemon.save(req)

    res.status(200).send(data);
}

module.exports = controller