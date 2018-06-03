
//Requiring mongoose, passport, and the User model
const passportFacebook = require('../auth/facebook');
const passportTwitter = require('../auth/twitter');


//name the controller
var authController = {


//Facebook login controller
facebook : function(req, res) {
  console.log("Facebook login")
  passportFacebook.authenticate('facebook', {scope:["email"]})
},

//Facebook login response
facebookResponse : function(req,res){ 
  passportFacebook.authenticate('facebook', 
    {successRedirect: '/arguments', failureRedirect: '/login' })
},

// Twitter login controller
twitter : function(req, res) {
  console.log("Twitter login")
  passportTwitter.authenticate('twitter', {scope:['include_email=true']})
},

//Twiitter login response
twitterResponse : function(req,res){
  passportTwitter.authenticate('twitter', 
    {successRedirect: '/arguments', failureRedirect: '/login' })
}

}
module.exports = authController;