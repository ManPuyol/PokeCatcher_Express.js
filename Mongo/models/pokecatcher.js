const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokecatcher = new Schema({
    // title: String, // String is shorthand for {type: String}
    // author: String,
    // body: String,
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //     votes: Number,
    //     favs: Number
    // }
    clave: String,
    image: String,
    backgroundImage: String,
    sprite: String,
    description: String,
    ability: String,
    type1: String,
    type2: String,
})

module.exports = mongoose.model('pokecatcher', pokecatcher)