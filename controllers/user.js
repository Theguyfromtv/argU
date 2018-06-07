const User=require('../models/User')
const Chat=require('../models/Conversation')

//controller to get the signed in user


const userController={}
 
userController.login=function(req, res) {
  User.findById(req.params.id,(err,user)=>{
    res.send(user)
  })
};



//controller to update the user's topics, and looks for matches with other users who have opposite opinions on the same topic
userController.updateTopics=(req,res)=>{
  //naming the new topic and pushing it into the user on the db
 let topic={topic:req.body.name,side:req.body.side}
 User.findOneAndUpdate({_id:req.body.id}, {$push:{topics:topic}}).exec((err,user1)=>{
   if (err) {
     //if there aren't any matches 
     res.json({message:"No matches yet, argue with your friends!"})
   }
   else{
     //make sure the match goes to a person who disagrees with the user
    let oppositTopic
    if(req.body.side==1){
      oppositTopic=2
    }
    else if(req.body.side==2){
      oppositTopic=1
    }
    //find one who disagrees on the same topic and create a promise that creates a new chat on the db
    User.findOne({topics:{$elemMatch:{topic:req.name.body,side:oppositTopic}}}).exec((err,user2)=>{

          //creating the chat. sending the first message letting them know they matched and then adding the new chat to the user's files on the db, then sending back a response with the updated user object
          Chat.create({participant1:user1._id, participant2:user2._id,isActive:true}).exec((err,chat)=>{
            if (err) throw err
            let initMessage ={sender:system,message:"You matched with someone who desagrees on"+req.body.name+"! Time to argu!", type:system}
            Chat.findOneAndUpdate({_id:chat_id},{$push:{messages:initMessage}})
            let chatId=chat._id

            User.findOneAndUpdate({_id:user1._id},{$push:{chats:{chatId}}}).exec(()=>{
              res.json(user1)
              User.findOneAndUpdate({_id:user2._id},{$push:{chats:chatId}}).exec(()=>{
              })
            })

          })

    })

   }



})}


module.exports = userController;