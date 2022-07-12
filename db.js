const { Client } = require('pg')
require('dotenv').config()

const dbConnexion = new Client({
    host: "localhost",
    user: "postgres",
    database: 'todo_database',
    password: process.env.DATABASE_PASSWORD,
    port: 5432
});

// 
module.exports = dbConnexion;