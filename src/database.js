const fs = require('fs');

class Database {
    constructor(databasePath) {
        this.databasePath = databasePath;
        this.alreadyParsedPosts = [];
        this.readDatabase();
    }

    readDatabase() {
        if (!fs.existsSync(this.databasePath)) {
            this.writeDatabase();
        }

        this.alreadyParsedPosts = JSON.parse(
            fs.readFileSync(this.databasePath)
        );
    }

    writeDatabase() {
        fs.writeFileSync(this.databasePath, JSON.stringify(this.alreadyParsedPosts))
    }

    isItemAlreadyParsed(guid) {
        return this.alreadyParsedPosts.includes(guid);
    }

    addItem(guid) {
        if (!this.alreadyParsedPosts.includes(guid)) {
            this.alreadyParsedPosts.push(guid);
        }
    }
}

module.exports = Database;