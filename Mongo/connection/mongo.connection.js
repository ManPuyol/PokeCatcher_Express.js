const mongoose = require('mongoose')
const DATA_SOURCES = require('../../config/vars.config')
const dataSource = DATA_SOURCES.mongoDataSource;
const dbUrl = `${dataSource.DB_HOST}/${dataSource.DB_DATABASE}`

mongoose.connect(dbUrl, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', dbUrl)
})

db.on('error', err => {
    console.error('connection error:', err)
})

module.exports = db;