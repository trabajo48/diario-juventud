"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../middlewares'),
    authJwt = _require2.authJwt;

var entradasCtrl = require('./entradas.controller');

router.get('/entradas', entradasCtrl.getEntradas);
router.get('/:entradaId', entradasCtrl.getEntradaById);
router.post('/new/entrada', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isModerator], entradasCtrl.createEntrada);
router.put('/edit/:entradaId', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isModerator], entradasCtrl.editEntradaById);
router["delete"]('/delete/:entradaId', [authJwt.verifyToken, authJwt.isAdmin, authJwt.isModerator], entradasCtrl.deleteEntradaById);
module.exports = router; // {} [] || \\