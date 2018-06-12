import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import ArgumentList from '../../components/ArgumentList/ArgumentList'
import API from "../../utils/API"
import Chat from "../../components/Chat/Chat"
import io from 'socket.io-client'


class Arguments extends Component {

    state={
        user:{},
        chats:[],
        isHidden:true,
        currentChat:{},
        messages:[],
        side:false,
        className:"",
        newMessage:""
        
    }
  loadUser=()=>{
    let userArr=window.location.href.split('=')
    let userId=userArr[1]
    let userFinalId=userId.split('&')
    userId=userFinalId[0]
    API.getUser(userId).then((res)=>{
        this.setState({user:res.data},()=>{
        })
        API.getChats(userId).then(res=>{
            this.setState({chats:res.data.chats})
            if(window.location.hash===""){
                let currentChatArr=window.location.href.split('&')
                currentChatArr=currentChatArr[1]
                let newCurrentChat=currentChatArr.split('=')
                newCurrentChat=newCurrentChat[1]
                console.log(newCurrentChat)

                  const findChat = this.state.chats.find( chat => chat._id === newCurrentChat );
                  if(findChat){
                    this.setState({currentChat:findChat})
                    console.log(this.state.currentChat)
                    this.setState({messages:findChat.messages})
                    console.log(this.state.messages)
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
          

        })

    })
    }
    
  handleChange=(event)=>{
    this.setState({newMessage: event.target.value});
  }
  sendMessage=(cid,message,uid,side)=>{
      API.sendMessage(cid,message,uid,side).then()
      let newMessage={chatId:cid, message:message,senderId:uid,side:side}
      this.socket.emit('message',newMessage, (newMessage)=>{
        console.log(newMessage)
      })


   }
  
  




  toggleHidden(){
    this.setState({isHidden: !this.state.isHidden})
  
  }
  componentDidMount(){
    this.loadUser()
    
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
      <div className="container">
           <MediaQuery query="(min-width: 769px)">
           <div className="row">
                <ArgumentList
                chats={this.state.chats}
                user={this.state.user}
                unread={this.state.unread}
                />
                

                    <Chat
                    chats={this.state.chats}
                    currentChat={this.state.currentChat}
                    user={this.state.user}
                    side={this.state.side}
                    className={this.state.className}
                    messages={this.state.messages}
                    onChange={this.handleChange}
                    onClick={this.sendMessage}
                    newMessage={this.state.newMessage}/>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 768px)">
           
            <button className="btn btn-lg btn-primary btn-sidebar" onClick={this.toggleHidden.bind(this)}>Sidebar</button>
                {!this.state.isHidden && <ArgumentList 
                chats={this.state.chats}
                user={this.state.user}
                />}
                {this.state.isHidden && <Chat
                chats={this.state.chats}
                currentChat={this.state.currentChat}
                user={this.state.user}
                side={this.state.side}
                className={this.state.className}
                messages={this.state.messages}
                onChange={this.handleChange}
                onClick={this.sendMessage}
                newMessage={this.state.newMessage}/>}

                
            </MediaQuery>
          </div>

    );
  }
}


export default Arguments