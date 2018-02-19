  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
   var mongoose = require('./config/mongoose'),
       express = require('./config/express');
   var db = mongoose();
   var app = express();
   app.listen(3000);
   module.exports = app;
   console.log('Server running at http://localhost:3000/');


 /*
1 // load the
2 var express
3 var app
4 var path = require('path');
5
6 // send our index.html file to the user for the home page
7 app.get('/', function(req, res) {
8 res.sendFile(path.join(__dirname + '/index.html'));
9 });
10
11 // start the server
12 app.listen(1337);
13 console.log('1337 is the magic port!');

*/