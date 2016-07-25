const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const pgClient = require('./db/connection.js');
const passportFacebook = require('./passport.js');
const session = require('express-session');
const db = require('./db/controller/index.js');


const app = express();
const port = process.env.PORT || 3000;

global.navigator = { userAgent: 'all' };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(session({ 
  secret: 'vivacious-salt',
  resave: false,
  saveUninitialized: true 
}));

app.use(passport.initialize());
app.use(passport.session());

// middleware function that can be inserted in to a route.  checks if user has
// session logged in if not they will be redirected to root.  

// var checkUser = function(req, res, next) {
//   if (!req.user) {
//     console.log('not authorized')
//     res.redirect('/');
//   } else {
//     next();
//   }
// };

// need to use middleware to do facebook auth step
// ****** To Fix ******
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
app.get('/auth/facebook/callback', 
  // passport.authenticate('facebook', { successRedirect: '/#/main', failureRedirect: '/'}));
  
  // comment out line 40 and replace with code below if you want to do something with the 
  // session information i.e. save to database

  passport.authenticate('facebook', { failureRedirect: '/'}), 
  function(req, res) {
    // req.user contains session information
    console.log(req.user);
    res.redirect('/');
  });

const dummyData = require('./dummyData');

app.get('/challenges', db.challenge.getAll
// function(req, res) {
//   const data = dummyData.challenges;
//   res.json(data);
// }
);

app.get('/users', function(req, res) {
  const data = [{id: 1, name: 'Bob'}, {id: 2, name: 'Louise'}];
  res.json(data);
});

app.post('/signup', function(req, res) {
  db.challenges.accept(req, res);
});

//https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});


app.listen(port, function() {
  console.log('Listening on port', port);
});

