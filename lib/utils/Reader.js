class Reader {
    static readJsonFile(path) {
        const fs = require("fs");
        const data = fs.readFileSync(path);
        return JSON.parse(data);
    }
}
module.exports = Reader;
