/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();

const account = require('../modules/account');

/* RENDER THE LOGIN PAGE
----------------------------------------- */
router.get('/login', function(req, res, next) {
  res.render('account/login');
});

/* HANDLE POSTED LOGIN DATA IN ACCOUNT MODULE
----------------------------------------- */
router.post('/login', account.login, function(req, res, next) {
  // Handle login
});

/* RENDER THE REGISTER PAGE
----------------------------------------- */
router.get('/register', function(req, res, next) {
  res.render('account/register');
});

/* HANDLE POSTED REGISTER DATA IN ACCOUNT MODULE
----------------------------------------- */
router.post('/register', account.register, function(req, res, next) {
  // Handle registering
});

/* DESTROY SESSION AND REDIRECT
----------------------------------------- */
router.get('/logout', account.logout, function(req, res, next) {
  // Handle logout
});

/* EXPORT ROUTER
----------------------------------------- */
module.exports = router;
