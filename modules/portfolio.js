const portfolio = {
  setTemplate(req, res, next) {
    const userCollection = db.collection('users');
    const id = req.params.id;
    const user = req.session.user;
    userCollection.findOne({'mail': user.mail}, function(error, results) {
      const updatedData = { template: '1' };
      userCollection.update({mail: user.mail}, {$set: updatedData});
      req.session.user.template = true;
      next();
    });
  },
  saveInformation(req, res, next) {
    const userCollection = db.collection('users');
    console.log(req.session.user);
  }
};

module.exports = portfolio;
