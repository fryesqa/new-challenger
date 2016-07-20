var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var pgClient = require('./db/connection.js')
var session = require('express-session');
var passportFacebook = require('./passport.js')

var app = express();
var port = process.env.PORT || 3000;

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

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/#/main', failureRedirect: '/'}));
  
  // comment out line 40 and replace with code below if you want to do something with the 
  // session information i.e. save to database

  // passport.authenticate('facebook', { failureRedirect: '/#/home'}), 
  // function(req, res) {
  //   // req.user contains session information
  //   console.log('line 39', req.user);
  //   res.redirect('/#/main');
  // });

app.listen(port, function() {
  console.log('Listening on port', port);
});
