var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer       = require('multer');
var passport     = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var mongoose     = require('mongoose');
var server       = require('http').createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connectionString = 'mongodb://127.0.0.1:27017/education-portal';

var mlabUsername = process.env.MONGOLAB_USERNAME;
var mlabPassword = process.env.MONGOLAB_PASSWORD;
if(mlabUsername && mlabPassword) {
    connectionString = 'mongodb://'+mlabUsername+':'+mlabPassword+'@ds151018.mlab.com:51018/heroku_13mhwkq8'
}

mongoose.Promise = require('q').Promise;

var db = mongoose.connect(connectionString);
require("./public/server/app.js")(app,db);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3001);