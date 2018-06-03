
//requiring what needs to be required (note the specific Facebook module from Passport)
const passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models');
require('dotenv').config()

//defining the strategy, making sure to ask for email.
passport.use(new FacebookStrategy({
    clientID : process.env.FACEBOOK_APP_ID,
    clientSecret : process.env.FACEBOOK_SECRET,
    callbackURL: "https://localhost:3000/auth/facebook/callback",
    profileFields:['id','displayName','emails']
  },
  function(accessToken, refreshToken, profile, done) {
      console.log("Passport connecting")
     User.findOrCreate({email: profile.email}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { console.log(err) }
      done(null, user);
    });
  }
));

module.exports = passport;