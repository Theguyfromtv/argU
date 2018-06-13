const User=require('../models/User')
const Chat=require('../models/Conversation')
const io=require('../server')


const chatController={}


chatController.getMessages= (req,res)=>{
  Chat.find({participant1id:req.params.id}).exec((err,chats)=>{
    if (err) throw err
    Chat.find({participant2id:req.params.id}).exec((err,moreChats)=>{
        let allChats= [...chats,...moreChats]
        res.json({chats:allChats})
    })
  })
}

chatController.sendMessage=(req,res)=>{
  let message = {sender:req.body.sender,message:req.body.message,side:req.body.side, chatId:req.body.id}
  Chat.findOneAndUpdate({_id:req.body.id},{$push:{messages:message}},(err,chat)=>{
    if (err) throw err
    console.log("message sent")
  })
}


chatController.read1=(req,res)=>{
  Chat.findOneAndUpdate({_id:req.body.id}, {participant2read:req.body.read},(err,chat)=>{
    if (err) throw err
    res.json({chat})
  }
  )
}

chatController.read2=(req,res)=>{
  Chat.findOneAndUpdate({_id:req.body.id}, {participant1read:req.body.read},(err,chat)=>{
    if (err) throw err
    res.json({chat})
  }
  )
}


module.exports = chatController; 