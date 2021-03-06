const passwordHash = require('password-hash');

const account = {
  login(req, res, next) {
    const userCollection = db.collection('users');
    const mail = req.body.mail.toLowerCase();
    const password = req.body.password;
    userCollection.findOne({'mail': mail}, function(error, results) {
      if(results) {
        const passwordCheck = passwordHash.verify(password, results['password']);
        if(passwordCheck == true) {
          req.session.loggedin = true;
          req.session.user = results;
          // if(typeof results.skills != 'array') {
          //   req.session.user.skills = results.skills.split(',');
          // }
          next();
        } else {
          res.locals.error = true;
          res.render('account/login');
        }
      } else {
        res.locals.error = true;
        res.render('account/login');
      }
    })
  },
  register(req, res, next) {
    const date = new Date();
    const id = (Number(date.getFullYear() + '' + date.getMonth() + '' + date.getDate())) * (Math.floor((Math.random() * 1993) + 1));
    const userCollection = db.collection('users');
    const registerData = {
      mail: req.body.mail.toLowerCase(),
      password: passwordHash.generate(req.body.password),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      about: '',
      linkedin: '',
      skills: '',
      picture: '',
      street: '',
      postalcode: '',
      city: '',
      template: false,
      information: false,
      projects: false,
      styling: false,
      portfolio_id: id,
    };
    userCollection.findOne({'mail': registerData.mail}, function(error, results) {
      if(!results || results == null) {
        userCollection.save(registerData);
        next();
      } else {
        res.locals.error = true;
        res.render('account/register');
      }
    });
  },
  logout(req, res, next) {
    req.session.destroy();
    next();
  },
  checkSession(req, res, next) {
    if(req.session.loggedin == true) {
      res.locals.user = req.session.user;
      next();
    } else {
      res.redirect('/account/login');
    }
  }
}

module.exports = account;
