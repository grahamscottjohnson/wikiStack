const express = require('express');
//something for routing
const morgan = require('morgan');
const bodyParser = require('body-parser');

let app = express();

app.use(morgan('dev'));
app.use( express.static('public') );

const PORT = process.env.PORT || 3000;

app.listen(3000);