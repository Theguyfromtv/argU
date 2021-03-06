// Note model
// ==========

// Require mongoose
var mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')

// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the chatSchema with the schema object
var chatSchema = new Schema({
  // The chat is associated with the messages ids 
  messages: [],
  // and the participants
  participant1id: {
    type:String,
    required:true
  },
  participant1name: {
    type:String,
    required: true
  },
  participant2id:{
    type:String,
    required: true
  },
  participant2name:{
    type: String,
    required: true
  },
  isActive:{
    type: Boolean,
    required: true,
    default: true
  },
  topic:{
    type:String,
    required:true
  },
  participant1read:{
    type:Boolean
  },
  participant2read:{
    type:Boolean
  }
  
});

chatSchema.plugin(findOrCreate)

// Create the Chat model using the chatSchema
var Chat = mongoose.model("Chat", chatSchema);


// Export the Chat model
module.exports = Chat;
