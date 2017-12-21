const passwordHash = require('password-hash');

const account = {
  login(req, res, next) {

    next();
  },
  register(req, res, next) {
    console.log(db.collection)
    // const mail = req.body.mail.toLowerCase();
    // const password = req.body.password;
    // userCollection.findOne({'mail': mail}, function(error, results) {
    //   console.log(results);
    // })
    // next();
  },
  logout(req, res, next) {
    req.session.destroy();
    next();
  },
  checkSession(req, res, next) {

  }
}

module.exports = account;
