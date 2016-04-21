//require modules
var express = require('express'),
    mongoose = require('mongoose'), // ODM to manipulate data in mongodb
    bodyParser = require('body-parser'), //pulls information from the post request
    morgan = require('morgan'); //logs requests to the console

// creates the server
var app = express(); //creates an express server call app

// port for server
var port = process.env.PORT || 4451;


//schema
var Schema = mongoose.Schema;
//database connection
mongoose.connect('mongodb:yeiber:sobles69@jello.modulusmongo.net:27017/I6tybapy');

//new Schema instantiation 
var recipesSchema = new Schema({
        recipe : String,
        name: String
});
//model
var recipesModel = mongoose.model('recipes1', recipesSchema);

//use
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());


//routes 
//default route
app.get('/', function(req, res){
    res.send('we are connecting to a get resquest');
});


//connects the port to the app server
app.listen(port);

//prints the server running to the console when the server starts
console.log('Server now listening on port ' + port);

//exports the server
module.exports = app;
