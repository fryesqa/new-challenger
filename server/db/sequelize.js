var Sequelize = require('sequelize');
var pg = require('pg');
var pgHstore = require('pg-hstore');

console.log('hello')
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

exports.User = sequelize.define('user', {
  // id: {
  //   type: Sequelize.UUID,
  //   primaryKey: true
  // },
  name: Sequelize.STRING(100),
  email: Sequelize.STRING(100),
  url: Sequelize.TEXT,
  facebookid: Sequelize.TEXT,
  // createdAt: Sequelize.DATE
})


// Test to ensure that model is connecting to and inserts data

// sequelize.sync().then(function() {
//   User.create({
//     name: 'John Doe',
//     email: 'johndoe@email.com',
//     url: 'some url',
//     facebookid: '35434633'
//   })
// });
