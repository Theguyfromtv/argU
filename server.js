const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/api/");
const socket = require('socket.io');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//set up the sessions
app.use(session({
  secret: 's3cr3t',
  resave: true,
  saveUninitialized: true
}));
//making sure sessions work with passport 
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

// serialize and deserialize
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ' + user._id);
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user){
    console.log(user);
      if(!err) done(null, user);
      else done(err, null);
    });
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes API 
app.use(routes);

//stting up passport serialization
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {
  User.findById(userId, (err, user) => done(err, user));
});

server=app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactheadlines");

//naming socket, havine it use the server
io = socket(server);

//creating socket connetction
io.on('connection', (socket) => {
    console.log(socket.id);

    //sending and recieving messages on socket
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});