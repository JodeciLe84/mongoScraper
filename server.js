// Required ------------------------------------------------------
var express = require ('express')
var exphbs = require ('express-handlebars')
var bodyParser = require ('body-parser')
var path = require ('path')
var mongojs = require('mongojs')


var app = express ()

// Middles wares ------------------------------------------------------

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory
app.use(express.static(path.join(__dirname, 'public')))
// parse application/json
app.use(bodyParser.json());

// Handlebars config --------------------------------------------------

app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
      extname: '.hbs'
  })
)
app.set('view engine', 'hbs')

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)