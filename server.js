//require modules
var express = require('express'), 
    mongoose = rquire('mongoose'), // ODM to manipulate data in mongodb
    bodyParser = require('body-parser'), //pulls information from the post request
    morgan = require('morgan'); //logs requests to the console

// creates the server
var app = express(); //creates an express server call app
// port for server
var port = process.env.PORT || 4449;