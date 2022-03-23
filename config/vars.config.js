require('dotenv').config()
const DATA_SOURCES = {
    workingDB: process.env.DB_IN_USE,
    mySqlDataSource: {
        DB_HOST: process.env.MY_SQL_DB_HOST,
        DB_USER: process.env.MY_SQL_DB_USER,
        DB_PASSWORD: process.env.MY_SQL_DB_PASSWORD,
        DB_PORT: process.env.MY_SQL_DB_PORT,
        DB_DATABASE: process.env.MY_SQL_DB_DATABASE,
        // DB_CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 4,
    },
    mongoDataSource: {
        DB_HOST: process.env.MONGO_DB_HOST,
        DB_USER: process.env.MONGO_DB_USER,
        DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
        DB_PORT: process.env.MONGO_DB_PORT,
        DB_DATABASE: process.env.MONGO_DB_DATABASE,
        // DB_CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 4,
    }
};

module.exports = DATA_SOURCES