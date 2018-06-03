// Headline model
// ==============

// Require mongoose
const mongoose = require("mongoose");
const findOrCreate = require('mongoose-find-or-create')


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
  }
},
{
  timestamps: true
});

//add find or create plugin to mongoose
UserSchema.plugin(findOrCreate)

//export it all
module.exports = mongoose.model('User', UserSchema);