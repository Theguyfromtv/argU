import React, { Component } from 'react'
import './Chat.css'
import Drawer from '../Drawer/Drawer'
import Message from '../Message/Message'
import API from '../../utils/API'
import io from 'socket.io-client'

class Chat extends Component {
   state={
     chats:[],
     currentChat:{},
     messages:[],
     currentMessage:"",
     side:false,
     user:{},
     inputtedMessage:"",
     className:""
   }
   sendMessage=(cid,message,uid,side)=>{
    if(message){
      API.sendMessage(cid,message,uid,side).then()
      let newMessage={chatId:cid, message:message,senderId:uid,side:side}
      this.socket.emit('message',newMessage)
    }else{

    }

   }

   getChat=()=>{
    if(window.location.hash===""){
      let currentChatArr=window.location.href.split('&')
      currentChatArr=currentChatArr[1]
      let newCurrentChat=currentChatArr.split('=')
      newCurrentChat=newCurrentChat[1]
      console.log(newCurrentChat)
      if(this.props.chats){
        const findChat = this.props.chats.find( chat => chat._id === newCurrentChat );
        if(findChat){
          this.setState({currentChat:findChat})
          this.setState({messages:findChat.messages})
          if(this.state.currentChat.participant1id===this.state.user._id){
          this.setState({side:true})
          this.setState({className:"pro"})
          }else if(this.state.currentChat.participant2id===this.state.user._id){
          this.setState({side:false})
          this.setState({className:"con"})
          }else{
          return "pick an argument to see messages"
        }

      }
      }
      
   
    }

     
   }

  
   componentWillMount=()=>{
     this.getChat()
    this.socket = io()

    this.socket.on('message', (message)=>{
      if(message.chatid===this.state.currentChat._id){
        const newMessage=message.message
        this.setState({messages:[...newMessage]})
        console.log(message)      
    }
   })
  }


  render() {
    return (
    <div className="col-sm-8 chat">
      <div className="overflow">
          <div id="chatView">
            <div className="chatBar">
              <h3>{this.state.currentChat.topic?this.state.currentChat.topic:"Chat"}</h3>
            </div>
            <div className="messageView">

            {this.state.messages.map((message,index)=>{
        
              <Message key={index}
                message={message}
                side={this.state.side}
                color={this.state.color}/>
                })}
            </div>
            <div className=" input">
              <div className="row ">
                <div className="col-sm-10 bottom1">
                  <textarea class="text-box form-control"placeholder={this.state.currentStage}/>
                </div>
                  <div className="col-sm-2 bottom2">
                  <button type="submit" className={"submit btn btn-primary "+this.state.className}  onClick={this.sendMessage}><i className="zmdi zmdi-mail-send"></i></button>  
                  </div>
              </div>
          </div>
          </div>

        </div>
      </div>
    )
  }
}


export default Chat