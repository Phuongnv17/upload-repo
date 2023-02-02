export class Ticket {
    constructor(dao) {
        this.dao = dao
    }

    createTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS Tickets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        phone TEXT,
        isBride INTEGER DEFAULT 0,
        )`
        return this.dao.runQuery(sql)
    }
    create(name, phone, isBride) {
        return this.dao.runQuery(
            'INSERT INTO Tickets (name, phone, isBride) VALUES (?,?,?)',
            [name, phone, isBride])
    }
    getAll() {
        return this.dao.all(`SELECT * FROM Tickets`)
    }
}
