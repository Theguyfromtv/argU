const User=require('../models/User')
const Chat=require('../models/Conversation')
const io=require('../server')


const chatController={}


chatController.getMessages= (req,res)=>{
  console.log(req.params.id)
  Chat.find({participant1id:req.params.id}).exec((err,chats)=>{
    if (err) throw err
    Chat.find({participant2id:req.params.id}).exec((err,moreChats)=>{
        let allChats= [...chats,...moreChats]
        res.json({chats:allChats})
    })
  })
}

chatController.sendMessage=(req,res)=>{
  let message = {sender:req.body.sender,message:req.body.message,side:req.body.side}
  Chat.findOneAndUpdate({_id:req.body.id},{$push:{messages:message}}).exec((err,chat)=>{
    if (err) throw err

  })
}



module.exports = chatController; 