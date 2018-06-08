//requiring everything
var router = require("express").Router();
const passport = require('passport')
, FacebookStrategy = require('passport-facebook').Strategy
const passportSetup = require('../../auth')


//initial facebook route- takes care of authentication
router.get("/facebook", passport.authenticate('facebook', {scope:["email"]}, { display: 'popup' }))

//route facebook redirects to, the function also takes in the user and assignes it to the var above
router.get("/facebook/callback", passport.authenticate('facebook', 
{failureRedirect: '/' }),(req,res)=>{
    res.redirect('/arguments?id='+req.user._id)
})

//same thing for twitter
router.get("/twitter",passport.authenticate('twitter', {scope:'include_email=true'}))

router.get("/twitter/callback", passport.authenticate('twitter', 
{failureRedirect: '/' }),(req,res)=>{
    res.redirect('/arguments?id='+req.user._id)
})


module.exports = router;
