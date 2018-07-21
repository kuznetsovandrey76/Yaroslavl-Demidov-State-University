var express = require('express');
var app = express();

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, function () {
  console.log('http://localhost:3000/');
});