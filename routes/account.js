/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();

const account = require('../modules/account');

/* RENDER THE LOGIN PAGE
----------------------------------------- */
router.get('/login', function(req, res, next) {
  res.locals.error = false;
  res.locals.user = false;
  res.render('account/login');
});

/* HANDLE POSTED LOGIN DATA IN ACCOUNT MODULE
----------------------------------------- */
router.post('/login', account.login, function(req, res, next) {
  res.redirect('/dashboard')
});

/* RENDER THE REGISTER PAGE
----------------------------------------- */
router.get('/register', function(req, res, next) {
  res.locals.error = false;
  res.locals.user = false;
  res.render('account/register');
});

/* HANDLE POSTED REGISTER DATA IN ACCOUNT MODULE
----------------------------------------- */
router.post('/register', account.register, function(req, res, next) {
  res.redirect('/account/login');
});

/* DESTROY SESSION AND REDIRECT
----------------------------------------- */
router.get('/logout', account.logout, function(req, res, next) {
  res.redirect('/account/login');
});

/* EXPORT ROUTER
----------------------------------------- */
module.exports = router;
