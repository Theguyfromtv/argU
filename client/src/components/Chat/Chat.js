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
     inputtedMessage:{},
     color:""
   }
   sendMessage=()=>{

      API.sendMessage()
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
     
   }

  
   componentDidMount=()=>{
     console.log()
    this.socket = io()

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
                message={message}/>
                })}
            </div>
            <div className=" input">
              <div className="actions">
                <Drawer stage={this.state.currentStage}/>
              </div>
              <div className="row ">
                <div className="col-sm-10 bottom1">
                  <textarea class="text-box form-control"placeholder={this.state.currentStage}/>
                </div>
                  <div className="col-sm-2 bottom2">
                  <button type="submit" className="submit btn btn-primary" onClick={this.sendMessage}><i className="zmdi zmdi-mail-send"></i></button>  
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