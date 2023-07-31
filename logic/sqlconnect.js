// import mysql2, dotenv. mysql2 will connect code to mysql database, dotenv will allow us to hide our mysql password in .env file for privacy.
const mysql = require('mysql2');
require('dotenv').config();

const sqlConnect = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const sqlQuery = (sql, values) => {
    return new Promise((resolve, reject) => {
        sqlConnect.query(sql, values, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

module.exports = {sqlConnect, sqlQuery};