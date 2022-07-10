const express = require('express');
const dbConnexion = require('./db');
const app = express();
const descriptionRouter = require('./router/description.router')
const port = process.env.PORT

dbConnexion.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    app.set('views', './view');
    app.set('view engine', 'ejs');

    app.use('/public', express.static('public'))

    app.use(express.json());
    app.use(express.urlencoded({ extended:true }));

    app.use('/description', descriptionRouter)
});






app.listen(port, () => {console.log(`The server listening on port ${port}`)});