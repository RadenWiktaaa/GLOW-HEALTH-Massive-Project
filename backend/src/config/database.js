// MySQL database connection
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_healthapp',
  });

  

  module.exports = db;
