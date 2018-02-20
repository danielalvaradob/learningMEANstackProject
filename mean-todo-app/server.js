  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
   var mongoose = require('./config/mongoose'),
       express = require('./config/express');
   var db = mongoose();
   var app = express();
   app.listen(3000);
   module.exports = app;
   console.log('Server running at http://localhost:3000/');


 /*
1 // BASE SETUP
2 // ======================================
3
4 // CALL THE PACKAGES --------------------
5 var express
6 var app
7 var bodyParser
8 var morgan
9 var mongoose
10 var port
11
12 // APP CONFIGURATION ---------------------
13 // use body parser so we can grab information from POST requests
14 app.use(bodyParser.urlencoded({ extended: true }));
15 app.use(bodyParser.json());
16
17 // configure our app to handle CORS requests
18 app.use(function(req, res, next) {
19 res.setHeader('Access-Control-Allow-Origin', '*');
20 res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
21 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \
22 Authorization');
23 next();
24 });
25
26 // log all requests to the console
= require('express'); // call express
= express(); // define our app using express
= require('body-parser'); // get body-parser
= require('morgan'); // used to see requests
= require('mongoose'); // for working w/ our database = process.env.PORT || 8080; // set the port for our app
Build a RESTful Node API 59
27 app.use(morgan('dev')); 28
29 // ROUTES FOR OUR API
30 // =============================
31
32 // basic route for the home page
33 app.get('/', function(req, res) {
34 res.send('Welcome to the home page!');
35 });
36
37 // get an instance of the express router
38 var apiRouter = express.Router();
39
40 // test route to make sure everything is working
41 // accessed at GET http://localhost:8080/api
42 apiRouter.get('/', function(req, res) {
43 res.json({ message: 'hooray! welcome to our api!' });
44 });
45
46 // more routes for our API will happen here 47
48 // REGISTER OUR ROUTES -------------------------------
49 // all of our routes will be prefixed with /api
50 app.use('/api', apiRouter);
51
52 // START THE SERVER
53 // ===============================
54 app.listen(port);
55 console.log('Magic happens on port ' + port);
*/