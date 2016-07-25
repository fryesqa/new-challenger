const Sequelize = require('sequelize');
const pg = require('pg');
const pgHstore = require('pg-hstore');

// currently the shell script creates database with user as $USER
// which creates a username based on your computer user name will need
// to change
var sequelize = new Sequelize('postgres://hsutlvevwhnfec:tQLHivrIdwxyK6h7VWKs2s2VGN@ec2-54-243-199-79.compute-1.amazonaws.com:5432/d5a2equuei2hm', {
  dialect: 'postgres',
  protocol: 'postgres',
  port: 5432,
  host: 'ec2-54-243-199-79.compute-1.amazonaws.com',
  dialectOptions: {
    ssl: true,
  },
  logging: true,
  define: {
    timestamps: false
  }
});

// user model
const User = sequelize.define('user', {
  name: Sequelize.STRING(100),
  email: Sequelize.STRING(100),
  url: Sequelize.TEXT,
  facebookId: Sequelize.TEXT,
});

// Type model
const Type = sequelize.define('type', {
  name: Sequelize.STRING(50),
});

// Challenge model
const Challenge = sequelize.define('challenge', {
  name: Sequelize.STRING(100),
  description: Sequelize.TEXT,
  url: Sequelize.TEXT,
  challengers: Sequelize.INTEGER,
  successes: Sequelize.INTEGER,
  endTime: Sequelize.DATE,
});

// Users_challenge model
const Users_challenge = sequelize.define('users_challenge', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  timeAccepted: Sequelize.DATE,
});


// proof model
const Proof = sequelize.define('proof', { creatorAccepted: Sequelize.BOOLEAN }
  , { freezeTableName: true });


User.sync();
Type.sync();
Challenge.sync();
Users_challenge.sync();
Proof.sync();

User.hasMany(Challenge);
Type.hasMany(Challenge);

User.belongsToMany(Challenge, { through: Users_challenge });
Challenge.belongsToMany(User, { through: Users_challenge });

Users_challenge.hasMany(Proof);

exports.User = User;
exports.Type = Type;
exports.Challenge = Challenge;
exports.Users_challenge = Users_challenge;
exports.Proof = Proof;
exports.sequelize = sequelize;
