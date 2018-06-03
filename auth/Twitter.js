
//requiring what needs to be required (note the specific Facebook module from Passport)
const passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models');
require('dotenv').config()

//defining the strategy, making sure to ask for email.
passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMERKEY,
    consumerSecret: process.env.TWITTER_CONSUMERSECRET,
    callbackURL: "https://localhost:3000/auth/twitter/callback",
	includeEmail:true
  }, 
  function(accessToken, refreshToken, profile, done) {
            //search for user according to email- if there isn't one, create one.
    User.findOrCreate({email: profile.email}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;