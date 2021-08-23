"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var authCtrl = require('./auth.controller');

var verifySignup = require('../middlewares/verifySignup');

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  next();
});
router.post('/signup', [verifySignup.checkDuplicateNameOrEmail, verifySignup.checkRolesExisted], authCtrl.createUser);
router.post('/signin', authCtrl.loginUser);
module.exports = router; // {} [] || \\