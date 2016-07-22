var model = require('../sequelize.js');

// model.Challenge.create({
//   name: 'y challenge',
//   description: 'food challenge',
//   url: 'some url',
//   challengers: 0,
//   successes: 0,
//   userId: 5,
//   typeId: 2
// })


// model.Type.create({
//   name: 'mental'
// })
// model.User.create({
//   name: 'burger king',
//   email: 'bk@xmail.com',
//   url: 'http//fsdagfdggfadfs.com',
//   facebookId: '43867574332'
// })

// model.Users_challenge.create({
//   timeAccepted: new Date(),
//   userId: 3,
//   challengeId: 2
// }).catch(function(err){
//   console.log('error')
// })

// model.Type.find({ where: {name: 'z'} }).then(function(type) {
//   type.updateAttributes({
//       name: 'spicy'
//   })
// })



// function to find and increment the number of challengers who accepted the challenge

// model.Challenge.find({ where: { id: '3' } }).then(
//   function(challenge) {
//     challenge.increment(['challengers']);
//   })


module.exports = {
  user: {
    get: function(req, res) {
      model.User.find({
        where: {
          // this would be req.user.id which is the facebook id
          // req.user is the session information stored in every req
          // once user is logged into facebook
          // use req.user.id for facebook id
          facebookId: '267921663576663'
          // facebookId: req.user.id
        }
      })
      .then(function(user) {
        console.log('user information is : ', user.dataValues);
      });
    }
  },

  challenge: {
    getAll: function(req, res) {
      model.Challenge.findAll()
      .then(function(challenges) {
        var challengeArray = challenges.map(function(challenge){
          return challenge.dataValues
        })
        // challengeArray is an array of all challenges which are objects
        console.log('list of challenges : ', challengeArray);
      })
    },
    // sounds like we don't need this one will be handled on with redux state
    // getOne: function(req, res) {
    //   model.Challenge.find(
    //     where: {

    //     })
    //   .then(function(challenge) {

    //   })
    // },
    create: function(req, res) {
      var userId;
      model.User.find({
        where: {
          facebookId: req.user.id
        }
      }).then(function(user){
        model.Type.findOrCreate({
          where: {
            name: req.body.type
          }
        })
        .then(function(type) {
          model.Challenge.create({
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            challengers: 0,
            successes: 0,
            userId: user.dataValues.id,
            typeId: type[0].dataValues.id,
            endTime: new Date(+new Date + 12096e5)
          })
        })
      })
    },
    accept: function(req, res) {
      model.Users_challenge.create({
        userId: req.user.id,
        challengeId: req.body.challengeId
      });
      model.Challenge.find({ where: { id: req.body.challengeId } })
        .then(
          function(challenge) {
            challenge.increment(['challengers']);
        })
    }
  },
};


