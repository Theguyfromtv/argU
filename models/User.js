// Headline model
// ==============

// Require mongoose
const mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')


// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the UserSchema 
const UserSchema = new Schema({  
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  id:{
    type:String
  },
  name: {
    type:  String,
    required: true
  },
  chats:[],
  topics:[],
},
{
  timestamps: true
});

//add find or create plugin to mongoose
UserSchema.plugin(findOrCreate)

//export it all
let User = mongoose.model('User', UserSchema);

module.exports=User