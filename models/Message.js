// Note model
// ==========

// Require mongoose
var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the messageSchema with the schema object
var messageSchema = new Schema({
  // each message has a chat it's in
  message: {
    type: String,
    required: true
  },
  // then we have the sender who sent it
  sender: {
    type: Date,
    default: Date.now
  },
  // then we have the format of the message
  side: {
    type:Boolean,
    required: true
  }
},
{
  timestamps: true
});

// Create the Message model using the messageSchema
var Note = mongoose.model("Message", messageSchema);

// Export the Message model
module.exports = Message;
