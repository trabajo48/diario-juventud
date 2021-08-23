require('dotenv').config();
const path = require('path');
const express = require('express');
const engine = require('ejs-mate');
const morgan = require('morgan');
const helmet = require('helmet');
const config = require('./config');

const {createRoles, createAdmin} = require('./libs/initialSetup');
const {createCategorias} = require('./libs/initialSetup2');

const app = express();
createRoles();
createAdmin();
createCategorias();
require('./noDb/database');


//CONFIGURACIÓN
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


//MIDDLEWARES
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//RUTA PRINCIPAL 
app.get('/', (req, res) => {
    res.send('WELCOME');
})

//RUTAS
app.use('/diariojuventud/', require('./routes/index.routes'));
app.use('/api/dashboard', require('./entradas/entradas.routes'));
app.use('/api/auth', require('./auth/auth.routes'));
app.use('/api/users', require('./users/user.routes'));

module.exports = app;
// {} [] || \\




