var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

//Setup first route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/views/index.html"));
});

//Setup About route
app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+"/views/about.html"));
});

//Setup contact route
app.get('/AddTo', function(req, res){
    res.sendFile(path.join(__dirname+"/views/AddTo.html"));
});
app.use(express.static(__dirname+"/views"));
app.use('/', router);

app.listen(5000, function(){

    console.log("Server running, port 5000");

});
