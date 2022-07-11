const { Client } = require('pg')
require('dotenv').config()

const dbConnexion = new Client({
    host: "ec2-54-228-218-84.eu-west-1.compute.amazonaws.com",
    user: "hllxzmojsgucoj",
    database: 'hllxzmojsgucoj',
    password: e7a340a16558e0adb4d7e885b86db861487aa5609ee9cca0166859e189ab5c5c,
    port: 5432
});

module.exports = dbConnexion;