const { Client } = require('pg')
require('dotenv').config()

const dbConnexion = new Client({
    host: "ec2-34-247-172-149.eu-west-1.compute.amazonaws.com",
    user: "trivbutsqxtilm",
    database: 'todo_database',
    password: '126c2513f28e7e7b42719858f9108842248e817c448c0176febe39607c6c0b09',
    port: 5432
});

module.exports = dbConnexion;