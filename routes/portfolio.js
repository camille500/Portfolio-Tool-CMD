/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();

const account = require('../modules/account');
const portfolio = require('../modules/portfolio');

/* MAIN ROUTE
----------------------------------------- */
router.get('/template/set/:id', account.checkSession, portfolio.setTemplate, function(req, res, next) {
  res.redirect('/dashboard');
});

/* EXPORT ROUTER
----------------------------------------- */
module.exports = router;
