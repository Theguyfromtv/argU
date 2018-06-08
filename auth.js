
//requiring what needs to be required (note the specific Twitter module from Passport)
const passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy
  , FacebookStrategy = require('passport-facebook').Strategy
const User = require('./models/User');
require('dotenv').config()



// serialize and deserialize passport to create a cookie
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user._id);
  done(null, user._id);
  user=user;
  id=user._id
});
passport.deserializeUser(function(id, done) {
  User.findOne({_id:id}, function(err, user){
    //console.log(user);
      if(!err) done(null, user);
      else done(err, null);
    });
});

//defining the strategy, making sure to ask for email.
passport.use(new TwitterStrategy({
    consumerKey: .env.TWITTER_CONSUMERKEY,
    consumerSecret: .env.TWITTER_CONSUMERSECRET,
    callbackURL: "https://argu-chat.herokuapp.com/auth/twitter/callback",
	includeEmail:true
  }, 
  function(accessToken, refreshToken, profile, done) {
    //search for user according to email- if there isn't one, create one.
    User.findOrCreate({email: profile._json.email}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      console.log(profile)
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

//defining the strategy, making sure to ask for email.
passport.use(new FacebookStrategy({
    clientID : .env.FACEBOOK_APP_ID,
    clientSecret : .env.FACEBOOK_SECRET,
    callbackURL: "https://argu-chat.herokuapp.com/auth/facebook/callback",
    profileFields:['id','displayName','emails']
},
function(accessToken, refreshToken, profile, done) {
   User.findOrCreate({email: profile._json.email}, {name: profile.displayName,userid: profile.id}, function(err, user) {
    if (err) { console.log(err) }
    done(null, user);
  });
}
));