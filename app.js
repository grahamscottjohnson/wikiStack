const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const index = require('./views/index')

let app = express();

app.use( morgan('dev') );
app.use( express.static('public') );

app.get( '/', function(req, res){
    res.send( "Hello World" );
} )

const PORT = process.env.PORT || 3000;

app.listen( PORT );