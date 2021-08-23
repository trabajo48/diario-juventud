"use strict";

require('dotenv').config();

var express = require('express');

var cors = require('cors');

var morgan = require('morgan');

var helmet = require('helmet');

var config = require('./config');

var _require = require('./libs/initialSetup'),
    createRoles = _require.createRoles,
    createAdmin = _require.createAdmin;

var _require2 = require('./libs/initialSetup2'),
    createCategorias = _require2.createCategorias;

var app = express();
createRoles();
createAdmin();
createCategorias();

require('./noDb/database');

app.set('port', process.env.PORT || 3000);
var corsOptions = {// origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  res.send('WELCOME');
});
app.use('/api/dashboard', require('./entradas/entradas.routes'));
app.use('/api/auth', require('./auth/auth.routes'));
app.use('/api/users', require('./users/user.routes'));
module.exports = app; // {} [] || \\