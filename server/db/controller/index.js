const model = require('../sequelize.js');
const Promise = require('bluebird');

module.exports = {
  user: {
    get: (req, res) => {
      console.log('\n\n');
      console.log('GETTING');
      console.log('req.user', req);
      let userInfo;
      // search for user from facebookId req.user is the session information stored in every req
      model.User.find({ where: { facebookId: req.user.id } })
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
                // search Users_challenges table to find all apporve user challenges
                model.Users_challenge.findAll({
                  where: { userId: user.dataValues.id },
                  include: [{
                    model: model.Proof,
                    where: { creatorAccepted: true },
                  }],
                }).then((approvedChallenges) => {
                  // search challene table to find the challenge that was approved
                  const arrayOfApprovedChallenges = approvedChallenges.map(approvedChallenge =>
                    model.Challenge.find({ where: approvedChallenge.dataValues.challengeId }));

                  Promise.all(arrayOfApprovedChallenges).then((resolvedChallenges) => {
                    // userInfo will give the object in dummydata for user
                    // send userInfo back to client with res.send(userInfo);

                    userInfo.challengesCompleted = resolvedChallenges.map(challenge =>
                      challenge.dataValues);
                    console.log('=================================================');
                    console.log('USERINFO', userInfo);
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
    getAll: (req, res) => {
      let challengesArray;
      model.Challenge.findAll()
      .then((challenges) => {
        challengesArray = challenges.map(challenge => challenge.dataValues);

        // adds all the promise requests to an array
        const arrayUsersWhoAcceptedChallenge = challengesArray.map(challenge =>
          model.User.findAll({
            include: [{
              model: model.Challenge,
              where: { id: challenge.id },
            }],
          })
        );

          // This adds challenger names to result
        Promise.all(arrayUsersWhoAcceptedChallenge).then((usersAcceptedChallenge) => {
          challengesArray.forEach((challenge, i) => {
            challengesArray[i].challengernames = usersAcceptedChallenge[i].map(user =>
              user.dataValues.name);
          });

          // This adds category value
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

              // This adds the currentChallengers
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
                //console.log(challengesArray);
                res.json(challengesArray);
              });
            });
          });
        });
      });
    },

    create: (req, res) => {
      // this finds the user using the facebookId from session
      model.User.find({ where: { facebookId: req.user.id } })

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
            userId: user.dataValues.id,
            typeId: type[0].dataValues.id,
            // end date is two weeks from date created
            endTime: new Date(+new Date + 12096e5),
          });
        });
      });
    },

    accept: (req, res) => {
      model.User.find({ where: { facebookId: req.body.userId } })
      .then((user) => {
        model.Challenge.find({ where: { id: req.body.challengeId } })
          .then((challenge) => {
            challenge.increment(['challengers']);
            model.Users_challenge.create({
              userId: req.body.userId,
              challengeId: challenge.dataValues.id,
              timeAccepted: new Date(),
            })
            .then((usersChallenge) => {
              model.Proof.create({
                usersChallengeId: usersChallenge.dataValues.id,
                creatorAccepted: false,
              });
            });
          });
      });
    },

    // this will approve the userChallenge in the proof table
    approve: (req, res) => {
      model.Proof.find({ where: { usersChallengeId: req.body.userChallengeId } })
      .then((userChallenge) => {
        userChallenge.updateAttributes({ creatorAccepted: true });
      });
      model.Users_challenge.find({ where: { id: req.body.userChallengeId } })
      .then((userChallenge) => {
        model.Challenge.find({ where: { id: userChallenge.challengeId } })
        .then((challenge) => {
          challenge.increment(['successes']);
        });
      });
    },

    admin: (req, res) => {
      let adminChallenge;
      model.Challenge.find({ where: req.body.challengeId })
      .then((challenge) => {
        adminChallenge = challenge.dataValues;
        model.Users_challenge.findAll({ where: { challengeId: req.body.challengeId } })
        .then((usersChallenges) => {
          const usersArray = usersChallenges.map(userChallenge =>
            model.User.find({ where: userChallenge.dataValues.userId })
          );
          Promise.all(usersArray).then((users) => {
            adminChallenge.challengers = users.map(user => user.dataValues);
            console.log(adminChallenge);
          });
        });
      });
    },
  },
};

