const model = require('../sequelize.js');
const Promise = require('bluebird');

module.exports = {
  user: {
    getAll: (req, res) => {
      // grabs all users and maps to an array to be sent to client
      model.User.findAll().then((users) => {
        const usersAll = users.map(user => user.dataValues);
        res.json(usersAll);
      })
    },
    get: (req, res) => {
      // gets facebook id saved in passport session
      // information is saved as a string within sessionStore
      var facebookSession = req.sessionStore.sessions;
      var faceId;
      for (var key in facebookSession) {
        var fid = JSON.parse(facebookSession[key])
        if (fid.passport) {
          faceId = fid.passport.user.id;
        }
      }
      let userInfo;
      // search for user from facebookId req.user is the session information stored in every req
      // model.User.find({ where: { facebookId: req.user.id } })
      model.User.find({ where: { facebookId: faceId } })
      .then((user) => {
        userInfo = user.dataValues;
        // search for all challenges created by user
        model.Challenge.findAll({ where: { userId: user.dataValues.id } })
          .then((challenges) => {
            // saves all challenges created by user to challengesCreated
            userInfo.challengesCreated = challenges.map(challenge => challenge.dataValues);

            // search and save all challenges taken by user
            // search Users_challenges table records with user's id
            model.Users_challenge.findAll({ where: { userId: user.dataValues.id } })
            .then((userChallenges) => {
              // for each entry in Uses'_challenge table search Challenes table for data
              const arrayOfPromises = userChallenges.map(userChallenge =>
                 model.Challenge.find({ where: { id: userChallenge.dataValues.challengeId } })
              );

              Promise.all(arrayOfPromises).then((arrayOfChallengesTaken) => {
                // save all challenesTaken to results.challengesTaken
                userInfo.challengesTaken = arrayOfChallengesTaken.map(challengesTaken =>
                  challengesTaken.dataValues);

                // search and save all challenges completed and approved
                // search Users_challenges table to find all approved user challenges
                model.Users_challenge.findAll({
                  where: { userId: user.dataValues.id },
                  include: [{
                    model: model.Proof,
                    where: { creatorAccepted: true },
                  }],
                }).then((approvedChallenges) => {
                  const arrayOfApprovedChallenges = approvedChallenges.map(approvedChallenge =>
                    model.Challenge.find({ where: approvedChallenge.dataValues.challengeId }));

                  Promise.all(arrayOfApprovedChallenges).then((resolvedChallenges) => {

                    userInfo.challengesCompleted = resolvedChallenges.map(challenge =>
                      challenge.dataValues);
                    // returns object will all users each of the challenges they have created,
                    // each of the challenges they have accepted, and each of the challenges they
                    // have completed
                    res.json(userInfo);
                  });
                });
              });
            });
          });
      });
    },
  },

  challenge: {
    // finds all challenges
    getAll: (req, res) => {
      let challengesArray;
      model.Challenge.findAll()
      .then((challenges) => {
        challengesArray = challenges.map(challenge => challenge.dataValues);

        // takes each challenge and adds requests list of users who have accepted 
        // the challenge
        const arrayUsersWhoAcceptedChallenge = challengesArray.map(challenge =>
          model.User.findAll({
            include: [{
              model: model.Challenge,
              where: { id: challenge.id },
            }],
          })
        );

          // This adds challenger names to the array of challenges
        Promise.all(arrayUsersWhoAcceptedChallenge).then((usersAcceptedChallenge) => {
          challengesArray.forEach((challenge, i) => {
            challengesArray[i].challengernames = usersAcceptedChallenge[i].map(user =>
              user.dataValues.name);
          });

          // This adds category name for each challenge
          const arrayChallengeType = challengesArray.map(challenge =>
            model.Type.find({ where: { id: challenge.typeId } }));

          Promise.all(arrayChallengeType).then((types) => {
            challengesArray.forEach((challenge, i) => {
              challengesArray[i].category = types[i].dataValues.name;
            });

            // This adds array of users who have successfully completed challenge
            const arraySuccesses = challengesArray.map(challenge =>
              model.Users_challenge.findAll({
                where: { challengeId: challenge.id },
                include: [{
                  model: model.Proof,
                  where: { creatorAccepted: true },
                }],
              })
            );

            Promise.all(arraySuccesses).then((successesArray) => {
              successesArray.forEach((successes, i) => {
                const array = [];
                if (successes.length > 0) {
                  for (let j = 0; j < successes.length; j++) {
                    array.push(successes[j].dataValues.userId);
                  }
                  challengesArray[i].successUserId = array;
                }
              });

              // This adds the id of all the currentChallengers
              const arrayCurrentChallengers = challengesArray.map(challenge =>
                model.Users_challenge.findAll({
                  where: { challengeId: challenge.id },
                  include: [{
                    model: model.Proof,
                    where: { creatorAccepted: false },
                  }],
                })
              );

              Promise.all(arrayCurrentChallengers).then((currentChallengers) => {
                currentChallengers.forEach((challenger, i) => {
                  const array = [];
                  if (challenger.length > 0) {
                    for (let j = 0; j < challenger.length; j++) {
                      array.push(challenger[j].dataValues.userId);
                    }
                  }
                  challengesArray[i].currentChallengers = array;
                });
                res.json(challengesArray);
              });
            });
          });
        });
      });
    },

    create: (req, res) => {
      // this finds the user using the facebookId from session
      model.User.find({ where: { facebookId: req.body.userId } })

      // this finds or creates the data for the types table
      .then((user) => {
        model.Type.findOrCreate({ where: { name: req.body.type } })

        // this adds the data to the challenge table
        .then((type) => {
          model.Challenge.create({
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            challengers: 0,
            successes: 0,
            userId: req.body.userId,
            typeId: type[0].dataValues.id,
            // end date is two weeks from date created
            endTime: new Date(+new Date + 12096e5),
          }).then((challenge) => {
            res.json({'challengeCreated': true});
          });
          res.send('Challenge created')
        });
      });
    },

    accept: (req, res) => {
      // grabs the userid of the user who accepted the challenge
      var facebookSession = req.sessionStore.sessions;
      var faceId;
      for (var key in facebookSession) {
        var fid = JSON.parse(facebookSession[key])
        if (fid.passport) {
          faceId = fid.passport.user.id;
        }
      }

      // gets the user information
      model.User.find({ where: { facebookId: faceId } })
      .then((user) => {
        // gets the challenge ID from the selected challenge
        model.Challenge.find({ where: { id: req.body.challengeId } })
          .then((challenge) => {
            // increments the count of number of challenges who accepted challenge
            challenge.increment(['challengers']);
            // saves userId and challengeId in join table
            model.Users_challenge.create({
              userId: user.dataValues.id,
              challengeId: challenge.dataValues.id,
              timeAccepted: new Date(),
            })
            // creates an entry in proof table for creator of challenge to approve
            .then((usersChallenge) => {
              model.Proof.create({
                usersChallengeId: usersChallenge.dataValues.id,
                creatorAccepted: false,
              })
              .then((proof) => {
                res.json({'accepted': 'true'});
              });
            });
          });
      });
    },

    // this will approve the userChallenge in the proof table
    // not implemented yet
    approve: (req, res) => {
      // changes value of approved in proof table to true
      model.Proof.find({ where: { usersChallengeId: req.body.userChallengeId } })
      .then((userChallenge) => {
        userChallenge.updateAttributes({ creatorAccepted: true });
      });
      // finds the challenge and increments the number of successes
      model.Users_challenge.find({ where: { id: req.body.userChallengeId } })
      .then((userChallenge) => {
        model.Challenge.find({ where: { id: userChallenge.challengeId } })
        .then((challenge) => {
          challenge.increment(['successes']);
        });
      });
    },

    // provides information for the admin view
    admin: (req, res) => {
      let adminChallenge;
      // finds current challenge
      model.Challenge.find({ where: req.body.challengeId })
      .then((challenge) => {
        adminChallenge = challenge.dataValues;
        // finds list of users who have accepted challenge
        model.Users_challenge.findAll({ where: { challengeId: req.body.challengeId } })
        .then((usersChallenges) => {
          const usersArray = usersChallenges.map(userChallenge =>
            model.User.find({ where: userChallenge.dataValues.userId })
          );
          // finds record of all users who accepted challenge and adds to array sent back to client
          Promise.all(usersArray).then((users) => {
            adminChallenge.challengers = users.map(user => user.dataValues);
            res.json(adminChallenge);
          });
        });
      });
    },
  },
};

