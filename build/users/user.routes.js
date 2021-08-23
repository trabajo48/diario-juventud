"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var userCtrl = require('./user.controller');

var _require2 = require('../middlewares'),
    authJwt = _require2.authJwt,
    verifySignup = _require2.verifySignup;

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], userCtrl.createUser);
module.exports = router; // {} [] || \\