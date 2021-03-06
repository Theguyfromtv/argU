const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const routes = require("./routes/api/");
const socket = require('socket.io');
const passportSetup = require('./auth')
const passport = require('passport');
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieSession= require('cookie-session')
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// initialize passport
let secret=process.env.COOKIE_KEY
app.use(session({secret}))
app.use(passport.initialize());
app.use(passport.session());


app.use(routes);

//make the server serve up react's index file and use react router
app.get('*', function (req, res){
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  })


// set up session cookies
app.use(cookieSession({
  name:'arguchat',
  maxAge: 7 * 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//connecting to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

server=app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//naming socket, havine it use the server
io = socket(server);

//creating socket connetction
io.on('connection', (socket) => {
    console.log("socket id is:"+ socket.id);
    socket.on('message', (message)=>{
      io.sockets.emit('message', message)
      console.log(message)
    })
});



process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

module.exports=io