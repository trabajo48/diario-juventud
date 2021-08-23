const { Router } = require('express');
const router = Router();

const { authJwt } = require('../middlewares');
const entradasCtrl = require('./entradas.controller');

router.get('/entradas', entradasCtrl.getEntradas);

router.get('/:entradaId', entradasCtrl.getEntradaById);

router.get('/:entradaTitle', entradasCtrl.getEntradaByTitle);

router.post('/new/entrada', [ authJwt.verifyToken, authJwt.isAdmin, authJwt.isModerator ], entradasCtrl.createEntrada);

router.put('/edit/:entradaId', [ authJwt.verifyToken, authJwt.isAdmin, authJwt.isModerator ], entradasCtrl.editEntradaById);

router.delete('/delete/:entradaId', [ authJwt.verifyToken, authJwt.isAdmin, authJwt.isModerator ], entradasCtrl.deleteEntradaById);


module.exports = router;
// {} [] || \\