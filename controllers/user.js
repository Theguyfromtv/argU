const User=require('../models/User')
const Chat=require('../models/Conversation')
const Topic=require('../models/Topic')
const io=require('../server')

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
  //naming the new topic and pushing it into the user on the db
  console.log(req.body)
  let newTopic=req.body.topic
  console.log(newTopic)
  let newSide=req.body.side
 let topic={topic:newTopic,side:newSide}
 User.findOneAndUpdate({_id:req.body.id}, {$push:{topics:topic}}).exec((err,user1)=>{
   if (err) throw err
   else{
    //find one who disagrees on the same topic and create a promise that creates a new chat on the db
    User.findOne({topics:{$elemMatch:{topic:newTopic,side:!newSide}}}).exec((err,user2)=>{
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
          Chat.create({participant1id:participant1._id, participant1name:participant1.name,participant1read:false, participant2id:participant2._id, participant2name:participant2.name,participant2read:false,isActive:true,topic:newTopic, messages:[]},function(err,chat){
            if (err) throw err
            let initMessage ={sender:"system",message:"You matched with someone who desagrees on"+req.body.name+"! Time to argu!"}
            Chat.findOneAndUpdate({_id:chat_id},{$push:{messages:initMessage}})
            let chatId=chat._id
              
            User.findOneAndUpdate({_id:user1._id},{$push:{chats:chatId}}).then((err,user)=>{
              if (err) throw err
              io.emit('match',user)
              console.log(chatId)             
            })
            User.findOneAndUpdate({_id:user2._id},{$push:{chats:chatId}}).then((err,user)=>{
              if (err) throw err
              io.emit('match',user) 
              console.log(chatId)             
            })
          })
          res.send("match!")
      }else{
        res.send("no matches")
      }


    })

   }



})}

userController.getTopics=(req,res)=>{
  console.log(req)
  Topic.find({}).exec(err,result=>{
    if (err) throw err
    console.log(result);
    res.send({result})
  })
}


module.exports = userController;