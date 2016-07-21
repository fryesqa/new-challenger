var Sequelize = require('sequelize');
var pg = require('pg');
var pgHstore = require('pg-hstore');

// currently the shell script creates database with user as $USER
// which creates a username based on your computer user name will need
// to change
var sequelize = new Sequelize('newchallenger', 'kwong', '', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

// user model
exports.User = sequelize.define('user', {
  name: Sequelize.STRING(100),
  email: Sequelize.STRING(100),
  url: Sequelize.TEXT,
  facebookid: Sequelize.TEXT
});

// Type model
exports.Type = sequelize.define('type', {
  name: Sequelize.STRING(50)
});

// Challenge model
exports.Challenge = sequelize.define('challenge', {
  name: Sequelize.STRING(100),
  description: Sequelize.TEXT,
  url: Sequelize.TEXT,
  challengers: Sequelize.INTEGER,
  successes: Sequelize.INTEGER,
  creatorid: {
    type: Sequelize.INTEGER,
    references: 'User',
    referencesKey: 'id'
  },
  typeid: {
    type: Sequelize.INTEGER,
    references: 'Type',
    referencesKey: 'id'
  },
  endtime: Sequelize.DATE
});

// Users_challenge model
exports.Users_challenge = sequelize.define('users_challenge', {
  userid: {
    type: Sequelize.INTEGER,
    references: 'User',
    referencesKey: 'id'
  },
  challengeid: {
    type: Sequelize.INTEGER,
    references: 'Challenge',
    referencesKey: 'id'
  },
  timeaccepted: Sequelize.DATE
});

// proof model
exports.Proof = sequelize.define('proof', {
  creatoraccepted: Sequelize.BOOLEAN,
  userchallengeid: {
    type: Sequelize.INTEGER,
    references: 'User_challenge',
    referencesKey: 'id'
  }
  },
{
  freezeTableName: true
});


