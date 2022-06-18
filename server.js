var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

var messages = [
    { name: 'Bob', message: 'Hello' },
    { name: 'Anna', message: 'Hi' },
    { name: 'Emma', message: 'Hi, how are you?' }
];

app.get("/messages", (req, res) => {
    res.send(messages);
});

app.post('/messages', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
});

var server = app.listen(3000, () => {
    console.log("server is listening on port ", server.address().port)
});