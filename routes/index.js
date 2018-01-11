/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();

/* MAIN ROUTE
----------------------------------------- */
router.get('/', function(req, res, next) {
  if(!req.session.user) {
    res.locals.user = false;
  }
  res.render('index');
});

/* EXPORT ROUTER
----------------------------------------- */
module.exports = router;
