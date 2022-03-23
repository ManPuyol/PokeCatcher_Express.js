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
    Tuma: String
})

module.exports = mongoose.model('pokecatcher', pokecatcher)