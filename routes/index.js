/* LOAD ALL DEPENDENCIES
----------------------------------------- */
const express = require('express');
const router = express.Router();

/* MAIN ROUTE
----------------------------------------- */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* EXPORT ROUTER
----------------------------------------- */
module.exports = router;
