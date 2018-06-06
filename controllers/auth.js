//requiring passport
const passport = require('passport')
const auth = require('../auth.js')


//name the controller
var authController = {


//Facebook login controller
facebook : function() {
  passport.authenticate('facebook', {scope:["email"]}, { display: 'popup' })
},

//Facebook login response
facebookResponse : function(){ 
  passport.authenticate('facebook', 
    {successRedirect: '/arguments', failureRedirect: '/login' }),(req,res)=>{
}
},

// Twitter login controller
twitter : function() {
  passport.authenticate('twitter', {scope:'include_email=true'})
},

//Twiitter login response
twitterResponse : function(req,res){
  passport.authenticate('twitter', 
  {successRedirect: '/arguments', failureRedirect: '/login' }),(req,res)=>{
}
}

}
module.exports = authController;