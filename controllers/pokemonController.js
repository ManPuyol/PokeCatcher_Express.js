const pokemon = require("../services/pokemon");
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