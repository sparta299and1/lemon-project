var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var db = mongoose.connection;
var dbUrl = 'mongodb://localhost/lemon';

var User = require('./models/user');

app.set('port', process.env.PORT || 80);
app.use('/img', express.static(__dirname + '/public/img'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//mongoose.connect(dbUrl);

db.on('error', function(err) {
	console.log(err);
});

db.once('open', function(callback){
	console.log('Succeeded to connected to: ', dbUrl);
});

app.get('/', function(req, res){
	res.send('Hello NodeJs - Home Page');
});

app.get('/about', function(req, res){
	res.sendFile(__dirname + '/public/about.html');
});

app.get('/login', function(req, res){
	res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', function(req, res){
	res.send(req.body.username);
});

//Test model
// var chris = new User({
// 	name: 'Chris ABCDEF',
// 	username: 'sevilla3',
// 	password: 'password'
// });

// app.get('/save', function(req, res){
// 	chris.save(function(err){

// 	});
// 	res.send('OK');
// });


// http.createServer(app).listen(app.get('port'), function(){
// 	console.log('Running...');
// });

var server = app.listen(app.get('port'), function () {
  console.log('Running at port:'+ app.get('port') +'...');
});