const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const topicSchema = new Schema({  
    name:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true
  });
    
  //export it all
  let Topic = mongoose.model('Topic', UserSchema);
  
  module.exports=Topic