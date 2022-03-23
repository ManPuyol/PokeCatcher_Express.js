const pokecatcher = require('../models/pokecatcher')

async function show() {
    const data = await pokecatcher.find()

    return {
        data,
    };
}

async function save(req) {

    const newPokemon = new pokecatcher(req.body)
    return newPokemon.save()

}

async function destroy(req) {
    const data = await pokecatcher.findOneAndDelete({ "_id": req.params.id })
    return {
        data,
    };
}

async function superMetaData() {
    const data = (await db.execute(`CALL json_tables();`, []))[0][0]["@table"];

    return {
        data: JSON.parse(data),
    };
}

module.exports = {
    show,
    save,
    destroy,
    superMetaData,
};