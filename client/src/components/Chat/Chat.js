import React, { Component } from 'react'
import './Chat.css'
import Drawer from '../Drawer/Drawer'
import Message from '../Message/Message'
import API from '../../utils/API'
import io from 'socket.io-client'

class Chat extends Component {
   state={
     currentChat:"",
     messages:["message1", "message2"],
     currentStage:"",
     currentMessage:{},
     turn:false,
     side:0,
     user:{},
     inputtedMessage:{}
   }
   sendMessage=()=>{
      API.sendMessage().then(()=>{
        this.setState({turn:false})
      })
   }

  
   componentDidMount=()=>{
     console.log()
    this.socket = io()

    this.socket.on('message', (chat)=>{
      if(chat._id===this.state.currentChat){
        const newMessages=chat.messages
        this.setState({messages:newMessages})
        console.log(chat)
        if(chat.messages[chat.messages.length-1].sender===this.state.user._id){

        }else{
          this.setState({turn:true})
        }
      }
      
    })
   }
   componentWillUnmount() {
    this.socket.close();
  }


  render() {
    return (
    <div className="col-sm-8">
      <div className="overflow">
        <div className="row">
          <div className="card" id="chatView">
            {this.state.messages.map((message,index)=>{
        
              <Message key={index}
              message={message}/>
            })}
            <Drawer stage={this.state.currentStage}/>
            <div className=" input">
              <div className="row ">
                <div className="col-sm-10 bottom1">
                 <textarea type="text" className="form-control" id="inlineFormInputName" placeholder={this.state.currentStage}/> 
                </div>
                  <div className="col-sm-2 bottom2">
                  <button type="submit" className="submit btn btn-primary" onClick={this.sendMessage}><i className="zmdi zmdi-mail-send"></i></button>  
                  </div>
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