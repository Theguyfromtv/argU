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
        counterClassName:"",
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
                    if(this.state.currentChat.participant1id===this.state.user._id){
                    this.setState({side:true})
                    this.setState({className:"pro"})
                    this.setState({counterClassName:"con"})
                    }else if(this.state.currentChat.participant2id===this.state.user._id){
                    this.setState({side:false})
                    this.setState({className:"con"})
                    this.setState({counterClassName:"pro"})
                    }else{
                    return "pick an argument to see messages"
                  }
          
                }
                
                
             
              }
          

        })

    })
    }

  markRead(uid, p1id, p2id, cid, read){
    if(p1id===uid){
      API.read1(cid, read).then(res=>{
        this.setState({currentChat:res.data})
      })
    }else if(p2id===uid){
      API.read2(cid, read).then(res=>{
        this.setState({currentChat:res.data})
      })
  }
  }
    
  handleChange=(event)=>{
    this.setState({newMessage: event.target.value});
  }
  sendMessage=(cid,message,uid,side)=>{
    if(message){
      API.sendMessage(cid,message,uid,side).then((res)=>{
      })
        let newMessage={chatId:cid, message:message,sender:uid,side:side}
        this.socket.emit('message',newMessage)
        this.setState({newMessage:""})
        setTimeout(function(){ 
          const element = document.getElementById("chat");
          element.scrollTop = element.scrollHeight;
         }, 100);
    }
      

    
  }

  toggleHidden(){
    this.setState({isHidden: !this.state.isHidden})
  
  }
  componentDidMount(){
    this.loadUser()
    this.markRead = this.markRead.bind(this)
    setTimeout(function(){ 
      var element = document.getElementById("chat");
      element.scrollTop = element.scrollHeight;
     }, 1000);

    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;

    
    this.socket = io("https://argu-chat.herokuapp.com/")

    this.socket.on('message', (message)=>{
      if(message.chatId===this.state.currentChat._id){
        const newMessage=message
        const newMessages=this.state.messages.concat(newMessage);
        console.log(newMessages)
        this.setState({messages:newMessages})
        console.log(message)      
    }else{
      console.log("not for us")
    }
   })

}
    
    
  render() {
    return (
      <div className="container-fluid">
           <MediaQuery query="(min-width: 769px)">
           <div className="row no-gutters">
                <ArgumentList
                chats={this.state.chats}
                user={this.state.user}
                unread={this.state.unread}
                markRead={this.markRead}
                side={this.state.side}/>
                

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
           
            <button className="btn btn-lg btn-link btn-sidebar sidebar" onClick={this.toggleHidden.bind(this)}><i className="fas fa-bars"></i></button>
                {!this.state.isHidden && <ArgumentList 
                chats={this.state.chats}
                user={this.state.user}
                markRead={this.markRead}
                side={this.state.side}/>}
                {this.state.isHidden && <Chat
                chats={this.state.chats}
                currentChat={this.state.currentChat}
                user={this.state.user}
                side={this.state.side}
                className={this.state.className}
                messages={this.state.messages}
                onChange={this.handleChange}
                onClick={this.sendMessage}
                newMessage={this.state.newMessage}
                counterClassName={this.state.counterClassName}/>}

                
            </MediaQuery>
          </div>

    );
  }
}


export default Arguments