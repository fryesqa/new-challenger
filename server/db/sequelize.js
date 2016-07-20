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
  facebookid: Sequelize.TEXT,
});
