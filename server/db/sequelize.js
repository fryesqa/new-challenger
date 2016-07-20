var Sequelize = require('sequelize');
var pg = require('pg');
var pgHstore = require('pg-hstore');

var sequelize = new Sequelize('newchallenger', 'kwong', '', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

var User = sequelize.define('user', {
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

sequelize.sync().then(function() {
  User.create({
    name: 'John Doe',
    email: 'johndoe@email.com',
    url: 'some url',
    facebookid: '35434633'
  })
});
