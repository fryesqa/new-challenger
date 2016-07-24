var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var config = require('./config/auth-facebook.js');
var model = require('./db/sequelize.js')

passport.serializeUser(function(user, done) {
  // placeholder for custom user serialization
  // null is for errors
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  done(null, user);
});

passport.use(new FacebookStrategy({
   clientID : config.facebookAuth.clientID,
   clientSecret : config.facebookAuth.clientSecret,
   callbackURL : config.facebookAuth.callbackURL,

   enableProof: true,
   profileFields : ['id', 'name', 'displayName', 'picture', 'emails']
  }, 
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function(){
      model.User.sync().then(function(){
        model.User.findOrCreate(
          {
            where: {
              facebookId: profile.id
            },
            defaults: {
              name: profile.displayName,
              email: profile.emails[0].value,
              url: profile.photos[0].value,
            }
          }
        ).spread(function(user, created) {
          console.log('created: ', created);
        })

      })
      done(null, profile);
    });
  }
));
