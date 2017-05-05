var express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./utils/DataBaseUtils'),
    cors = require('cors');

db.setUpConnection();

var app = express();

app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.get('/', function(req, res) {
    db.listOfCredits().then(function(data) {
        res.send(data);
    });
});

app.post('/', function(req, res) {
    db.payForCredit(req.body).then(function(data) {
        console.log(data);
    })
});

app.get('/new', function(req, res) {
    db.listOfCredits().then(function(data) {
        res.send(data);
    });
});

app.post('/new', function(req, res) {
    db.createCredit(req.body).then(function(data) {
        console.log(data);
    });
});

var server = app.listen(3000, function() {
    console.log('Server is up and running on port 3000');
});