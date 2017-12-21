/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();

const account = require('../modules/account');

/* RENDER THE DASHBOARD PAGE
----------------------------------------- */
router.get('/', account.checkSession, function(req, res, next) {
  res.locals.user = req.session.user;
  res.render('dashboard/index');
});

/* EXPORT ROUTER
----------------------------------------- */
module.exports = router;
