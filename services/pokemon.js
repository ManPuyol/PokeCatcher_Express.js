const { DATE } = require('mysql/lib/protocol/constants/types');
const db = require('../connection/mysql.connection')

async function show() {
    const data = await db.execute("SELECT data from box", []);

    return {
        data: JSON.parse(data)
    }
}

async function save(req) {

    const data = await db.execute(`INSERT INTO box(data) VALUES ('${JSON.stringify(req.body)}');`, []);


    return {
        data: JSON.parse(data)
    }
}

async function superMetaData() {

    const data = (await db.execute(`CALL json_tables();`, []))[0][0]['@table'];

    return {
        data: JSON.parse(data)
    }
}

module.exports = {
    show,
    save,
    superMetaData
}