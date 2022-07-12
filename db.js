const { Client } = require('pg')
require('dotenv').config()

const dbConnexion = new Client({
    host: 'ec2-52-48-159-67.eu-west-1.compute.amazonaws.com',
    user: 'lzdntrcnigsqge',
    database: 'dbruko73j9tpvu',
    password: 'd81f03d43ea50e9017be095fef315f32d182ee28172da5e924f6d63a1d7894f4',
    port: 5432
});

// 
module.exports = dbConnexion;