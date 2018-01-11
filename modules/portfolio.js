const portfolio = {
  setTemplate(req, res, next) {
    const userCollection = db.collection('users');
    const id = req.params.id;
    const user = req.session.user;
    userCollection.findOne({ 'mail': user.mail}, function(error, results) {
      const updatedData = { template: id };
      userCollection.update({ mail: user.mail }, { $set: updatedData });
      req.session.user.template = true;
      next();
    });
  },
  unsetTemplate(req, res, next) {
    const userCollection = db.collection('users');
    const id = req.params.id;
    const user = req.session.user;
    userCollection.findOne({ 'mail': user.mail }, function(error, results) {
      const updatedData = { template: false };
      userCollection.update({ mail: user.mail }, { $set: updatedData });
      req.session.user.template = false;
      next();
    });
  },
  saveInformation(req, res, next) {
    const userCollection = db.collection('users');
    const user = req.session.user;
    userCollection.findOne({ 'mail': user.mail}, function(error, results) {
      delete user._id;
      user.about = req.body.about;
      user.linkedin = req.body.linkedin;
      user.skills = req.body.skills;
      user.picture = '';
      user.information = true;
      req.session.user = user;
      userCollection.update({ mail: user.mail }, { $set: user });
      next();
    });
  }
};

module.exports = portfolio;
