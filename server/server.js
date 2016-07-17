import React from 'react'
import { renderToString } from 'react/dom'
import { match, RouterContext } from 'react-router'
import routes from '../client/src/routes'

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var pgClient = require('./db/connection.js')

var passportFacebook = require('./passport.js')

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(passport.initialize());

// need to use middleware to do facebook auth step
// ****** To Fix ******
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/#/main', failureRedirect: '/'}));


app.get('*', function(req, res) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props} />);
      res.send(renderPage(appHtml)); 
    } else {
      res.status(404).send('Not Found');
    } 
  });
});


app.listen(port, function() {
  console.log('Listening on port', port);
});
