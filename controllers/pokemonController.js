const DATA_SOURCES = require('../config/vars.config')

let pokemon;
if (DATA_SOURCES.workingDB == "MYSQL") {
    pokemon = require("../MySQL/services/pokemon");
} else {
    pokemon = require("../Mongo/services/pokecatcher");
}

const controller = {};

controller.getPokemon = async(req, res) => {
    const data = await pokemon.show();

    res.json(data);
};

controller.getMetaData = async(req, res) => {
    const data = await pokemon.superMetaData();
    res.send(data);
};

controller.insertPokemon = async(req, res) => {
    const data = await pokemon.save(req);

    res.status(200).send(data);
};

controller.releasePokemon = async(req, res) => {
    const data = await pokemon.destroy(req);

    res.status(200).send(data);
};

module.exports = controller;