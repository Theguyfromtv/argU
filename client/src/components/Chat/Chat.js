import React, { Component } from 'react'
import './Chat.css'
import Drawer from '../Drawer/Drawer'
import Message from '../Message/Message'
import API from '../../utils/API'
import io from 'socket.io-client'

class Chat extends Component {
   state={
     currentChat:{},
     messages:[],
     currentMessage:{},
     side:false,
     user:{},
     inputtedMessage:"",
     color:""
   }
   sendMessage=(cid,message,uid,side)=>{

      API.sendMessage(cid,message,uid,side).then()
      let newMessage={chatId:cid, message:message,senderId:uid,side:side}
      io.emit('message',newMessage)
   }
   getChat=()=>{
    
      let currentChatArr=window.location.href.split('&')
        currentChatArr=currentChatArr[1]
        let newCurrentChat=currentChatArr.split('=')
        newCurrentChat=newCurrentChat[1]
        console.log(newCurrentChat)
        const findChat = this.props.chats.find( chat => chat._id === newCurrentChat );
        this.setState({currentChat:findChat})
        this.setState({messages:findChat.messages})
        if(this.state.chat.participant1id===this.state.user._id){
          this.setState({side:true})
          this.setState({color:"#3385f7"})
        }else if(this.state.chat.participant2id===this.state.user._id){
          this.setState({side:false})
          this.setState({color:"#eb3c24"})
        }
     
   }

  
   componentDidMount=()=>{
     this.getChat()
    this.socket = io('')

    this.socket.on('message', (chat)=>{
      if(chat._id===this.state.currentChat){
        const newMessages=chat.messages
        this.setState({messages:newMessages})
        console.log(chat)      
    }
   })
  }
   componentWillUnmount() {
    this.socket.close();
  }


  render() {
    return (
    <div className="col-sm-8 chat">
      <div className="overflow">
          <div id="chatView">

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
                  <button type="submit" className="submit btn btn-primary" style={{backgroundColor: this.state.color}} onClick={this.sendMessage}><i className="zmdi zmdi-mail-send"></i></button>  
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