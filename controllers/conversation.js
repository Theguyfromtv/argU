const User=require('../models/User')
const Chat=require('../models/Conversation')

const chatController={}


chatController.getMessages= (req,res)=>{
  console.log(req.params.id)
  Chat.find({participant1id:req.params.id}).exec((err,chats)=>{
    if (err) throw err
    Chat.find({participant2id:req.params.id}).exec((err,moreChats)=>{
        let allChats= [...chats,...moreChats]
        res.json(allChats)
    })
  })
}



module.exports = chatController; 