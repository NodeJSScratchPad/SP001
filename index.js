'use strict';

var express = require('express');

let app = express();

var port = process.env.PORT || 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

var page1Route = express.Router();

page1Route.route('/')
    .get(function(req, res) {

        res.render('page1');
    });
app.use('/page1', page1Route);

app.get('/', function(req, res) {

    res.render('index');
});

app.listen(port, function(err) {

    if (err) {
        console.log('There was an error starting the server : ' + err);
    } else {
        console.log('The server started on port : ' + port);
    }
});