import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../routes/routes.jsx'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const pgClient = require('./db/connection.js')

const passportFacebook = require('./passport.js')

const app = express();
const port = process.env.PORT || 3000;

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

/////////////////////////////////////
function renderPage(appHtml) {
  return ` 
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Challenger</title>

        <!-- Materialize -->
        <link href="//fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">

        <!-- Custom Styling -->
        <link rel="stylesheet" href="/styles/styles.css">
        <link rel="stylesheet" href="https://npmcdn.com/react-select/dist/react-select.css">
        
      </head>
      <body>
        <div id='app'>${appHtml}</div>
        <!-- bundle.js contains all of webpack's compiled & transpiled JSX -->
        <script src="./bundle.js"></script>

        <!-- Scripts -->

        <script type="text/javascript" src="//code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
      </body>
    </html>
  ` 
}

