var Sequelize = require('sequelize');
var pg = require('pg');
var pgHstore = require('pg-hstore');

// currently the shell script creates database with user as $USER
// which creates a username based on your computer user name will need
// to change
var sequelize = new Sequelize('newchallenger', 'kwong', '', {
  dialect: 'postgres',
  host: 'localhost',
});

// user model
var User = sequelize.define('user', {
  name: Sequelize.STRING(100),
  email: Sequelize.STRING(100),
  url: Sequelize.TEXT,
  facebookId: Sequelize.TEXT
});

// Type model
var Type = sequelize.define('type', {
  name: Sequelize.STRING(50)
});

// Challenge model
var Challenge = sequelize.define('challenge', {
  name: Sequelize.STRING(100),
  description: Sequelize.TEXT,
  url: Sequelize.TEXT,
  challengers: Sequelize.ARRAY(Sequelize.INTEGER),
  successes: Sequelize.ARRAY(Sequelize.INTEGER),
  endTime: Sequelize.DATE
});

User.hasMany(Challenge);
Type.hasMany(Challenge);

// Users_challenge model
var Users_challenge = sequelize.define('users_challenge', {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  timeAccepted: Sequelize.DATE
});
User.belongsToMany(Challenge, { through: Users_challenge })
Challenge.belongsToMany(User, { through: Users_challenge })


// proof model
var Proof = sequelize.define('proof', {
  creatorAccepted: Sequelize.BOOLEAN,
  },
{
  freezeTableName: true
});

Users_challenge.hasMany(Proof)


var Testarray = sequelize.define('testarray', {
  listArray: Sequelize.ARRAY(Sequelize.INTEGER)
})
// User.sync();
// Type.sync();
// Challenge.sync();
// Users_challenge.sync();
// Proof.sync();
// Testarray.sync();



exports.User = User;
exports.Type = Type;
exports.Challenge = Challenge;
exports.Users_challenge = Users_challenge;
exports.Proof = Proof;
exports.Testarray = Testarray;
exports.sequelize = sequelize;