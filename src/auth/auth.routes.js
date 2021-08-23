const { Router } = require('express');
const router = Router();

const authCtrl = require('./auth.controller');
const verifySignup = require('../middlewares/verifySignup');

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.get('/signin', (req, res) => {
  res.render('signin');
})

router.post('/signup', 
[verifySignup.checkDuplicateNameOrEmail, verifySignup.checkRolesExisted], 
authCtrl.createUser);

router.post('/signin', authCtrl.loginUser);

module.exports = router;
// {} [] || \\