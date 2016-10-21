// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
// configuration ===========================================

var controllers = require("./app/controllers");
var models = require("./app/models");
var routes = require("./app/routes");
	
// config files
var db = require('./config/db.js');


var port = process.env.PORT || 7000; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.authenticationSecret = "myNameIsTalhaAwan"

var authenticator = require('./app/utils/authenticator.js')(app)

app.all('/api/*', authenticator.authenticate);

models(app)
controllers(app)
routes(app)


function fillInUndefinedFields(obj){
    for(var key in obj){

    }
}
app.get('*', function(req, res) {
    res.render('../public/index.html');
});
// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app