var express = require('express');
var app = express();
var fs = require("fs");
var bodyparser = require('body-parser');
var MongoClient = require('mongodb').MongoClient; 

mongo.connect('mongodb://localhost:27017/fruitkit', function(err, db) {
    if (err) {

        throw err;
    }
});


app.use(bodyparser.json());
app.use(bodyparser.urlencoded(
{
    extended: true
}));

app.get('/orders', function(request, response) {
    response.send('<html><body><a href="/customers/">link, no id</a><a href="/customers/4">link to existing</a><a href="/customers/3">link to non existing</a><form action="/customers" method="POST"><input type="hidden" name="name" value="THIS NAME"><input type="submit" value="MURDOR!!!!"></form></body></html>');
});

app.get('/customers', function(request, response) {
    response.send('HAVE A LOT OF CUSTOMERS');
});

app.post('/customers', function(request, response) {
    response.send(request.body.name);
});

app.get('/customers/:customerId', function(request, response) {
    var b = request.params;
    if (b.customerId === undefined) {
        response.send('Please set the customer ID');
    }
    if (b.customerId == 4) {
        response.send('Your customer exists');
    }
    response.send ('No such customer');
});

app.get('/packages', function(request, response) {
    response.send('Packages called');
});

var server = app.listen(8080, '0.0.0.0', function() {
    console.log ("LISTENING");
    var address = server.address().address;
    var port = server.address().port;
    console.log ("%s%s", address, port);
})

