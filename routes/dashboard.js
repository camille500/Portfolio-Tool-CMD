/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();

const account = require('../modules/account');

/* RENDER THE DASHBOARD PAGE
----------------------------------------- */
router.get('/', account.checkSession, function(req, res, next) {
  res.render('dashboard/index');
});

router.get('/template', account.checkSession, function(req, res, next) {
  res.render('dashboard/template');
});

router.get('/information', account.checkSession, function(req, res, next) {
  res.render('dashboard/info');
});

/* EXPORT ROUTER
----------------------------------------- */
module.exports = router;
