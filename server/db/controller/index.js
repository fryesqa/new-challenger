var model = require('../sequelize.js');

module.exports = {
  user: {
    get: function(req, res) {
      model.User.find({
        where: {
          // this would be req.user.id which is the facebook id
          // req.user is the session information stored in every req
          // once user is logged into facebook
          facebookid: '267921663576663'
        }
      })
      .then(function(user) {
        console.log('user information is : ', user.dataValues);
        // res.json(user);
      });
    }
  },

  challenge: {
    get: function(req, res) {
      model.Challenge.findAll()
      .then(function(challenges) {
        var challengeArray = challenges.map(function(chall){
          return chall.dataValues
        })
        // challengeArray is an array of all challenges which are objects
        console.log('list of challenges : ', challengeArray);
      })
    }
  }
};