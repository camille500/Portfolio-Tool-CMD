const portfolio = {
  setTemplate(req, res, next) {
    const userCollection = db.collection('users');
    const id = req.params.id;
    const user = req.session.user;
    userCollection.findOne({'mail': user.mail}, function(error, results) {
      const updatedData = { template: id };
      userCollection.update({mail: user.mail}, {$set: updatedData});
      req.session.user.template = true;
      next();
    });
  },
  unsetTemplate(req, res, next) {
    const userCollection = db.collection('users');
    const id = req.params.id;
    const user = req.session.user;
    userCollection.findOne({'mail': user.mail}, function(error, results) {
      const updatedData = { template: false };
      userCollection.update({mail: user.mail}, {$set: updatedData});
      req.session.user.template = false;
      next();
    });
  },
  saveInformation(req, res, next) {
    const userCollection = db.collection('users');
    console.log(req.body);
  }
};

module.exports = portfolio;
