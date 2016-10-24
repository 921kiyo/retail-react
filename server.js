var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var ITEMS_JSON = path.join(__dirname, 'data/items.json');

app.get('/api/items', function(req,res){
  fs.readFile(ITEMS_JSON, function(err, data){
    if(err) process.exit(1);
    res.json(JSON.parse(data));
  })
});

app.use(express.static('client/build'));

// Make a home route
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
