const { DATE } = require("mysql/lib/protocol/constants/types");
const db = require("../connection/mysql.connection");

async function show() {
    const data = await db.execute("SELECT data from box", []);
    const parsedData = data.map((element) => {
        element = JSON.parse(element.data);
        return element;
    });

    return {
        data: parsedData,
    };
}

async function save(req) {
    const data = await db.execute(
        `INSERT INTO box(data) VALUES ('${JSON.stringify(req.body)}');`, []
    );

    return {
        data,
    };
}

async function destroy(req) {
    const data = await db.execute(`DELETE FROM box WHERE box.id =  ? ;`, [
        req.params.id,
    ]);

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