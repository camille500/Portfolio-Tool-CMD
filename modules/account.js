const passwordHash = require('password-hash');

const account = {
  login(req, res, next) {
    next();
  },
  register(req, res, next) {
    next();
  },
  logout(req, res, next) {
    req.session.destroy();
    next();
  },
  checkSession(req, res, next) {
    
  }
}

module.exports = account;
