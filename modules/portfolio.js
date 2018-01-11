const fs = require('fs');
const multer = require('multer');

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
    if(req.body.picture.length > 0) {
      const storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null,'public/images/user')
        },
        filename: function(req, file, cb) {
          cb(null, file.originalname);
        }
      });
      const upload = multer({storage: storage});
      upload.any();
      console.log(req.files);
    }
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
  },
  getProjects(req, res, next) {
    const projectCollection = db.collection('projects');
    const user = req.session.user;
    const dataCollection = [];
    projectCollection.find({ 'for': user.portfolio_id }, function(error, results) {
      results.forEach(function(result) {
        dataCollection.push(result);
      });
      setTimeout(function() {
        console.log(dataCollection);
        res.locals.projects = dataCollection;
        next();
      }, 1000)
    });
  }
};

module.exports = portfolio;
