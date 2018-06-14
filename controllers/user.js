const User=require('../models/User')
const Chat=require('../models/Conversation')
const Topic=require('../models/Topic')
const io=require ('socket.io-client')

//controller to get the signed in user


const userController={}
 
userController.login=function(req, res) {
  User.findById(req.params.id,(err,user)=>{
    res.send(user)
  })
};



//controller to update the user's topics, and looks for matches with other users who have opposite opinions on the same topic
userController.updateTopics=(req,res)=>{
  let participant1
  let participant2
  const socket = io("https://argu-chat.herokuapp.com/");

  //naming the new topic and pushing it into the user on the db
  console.log(req.body)
  let newTopic=req.body.topic
  console.log(newTopic)
  let newSide=req.body.side
 let topic={topic:newTopic,side:newSide}
 User.findOneAndUpdate({_id:req.body.id}, {$addToSet:{topics:topic}},function(err,user1){
   if (err) throw err
   else{
     console.log(user1)
    //find one who disagrees on the same topic and create a promise that creates a new chat on the db
    User.findOne({topics:{$elemMatch:{topic:newTopic,side:!newSide}}},function(err,user2){
      if (err) throw err
      if(user2){
        console.log(user2)
        if(user1.email===user2.email){
          res.send("no matches")
        }
        else if(user1.email!==user2.email){
          if(newSide){
            participant1=user1;
            participant2=user2;
         }else if(!newSide){
            participant2=user1;
            participant1=user2;
         }
         if(user2){
             /*let coinflip= Math.floor(Math.random() * 2);
             let turn
             if(coinflip==1){
               turn=true
             }else if (coinflip==0){
               turn=false
             }*/
             //creating the chat. sending the first message letting them know they matched and then adding the new chat to the user's files on the db, then sending back a response with the updated user object
             Chat.findOrCreate({participant1id:participant1._id, participant1name:participant1.name,participant1read:false, participant2id:participant2._id, participant2name:participant2.name,participant2read:false,isActive:true,topic:newTopic, messages:[]},function(err,chat){
               if (err) throw err
               let chatId=chat._id
   
               socket.emit('match', chat)
                 
               User.findOneAndUpdate({_id:user1._id},{$addToSet:{chats:chatId}},function(err,user){
                 if (err) throw err
                 User.findOneAndUpdate({_id:user2._id},{$addToSet:{chats:chatId}},function(err,user){
                   if (err) throw err            
                   res.json(chat)
                 })
               })
   
             })
         }else{
           console.log(user1)
           res.send("no matches")
         }
   
      }
      
 
     }else{
      res.send("no matches")
     }
 
    })
      }
      



})}

userController.getTopics=(req,res)=>{
  User.findOne({_id:req.params.id}, function(err,user){
    if (err) throw err
    res.json(user)
  })

}


module.exports = userController;