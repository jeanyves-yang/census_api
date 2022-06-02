import sqlite3 from 'sqlite3';

/**
* TODO
* Replace later by an actual hosted DB, make a connection with it (mangoose?)
* @returns {Promise<sqlite3.Database>}  SQLite3 Database object to make queries on
*/
async function connect(): Promise<sqlite3.Database> {
    const db = new sqlite3.Database('assets/us-census.db');
    db.run('DELETE FROM census_learn_sql WHERE age IS NULL');
    return db;
}

export default connect;