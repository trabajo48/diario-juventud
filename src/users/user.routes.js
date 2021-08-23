const { Router } = require('express');
const router = Router();

const userCtrl = require('./user.controller');
const { authJwt, verifySignup } = require('../middlewares');

router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrl.createUser);

module.exports = router;
// {} [] || \\