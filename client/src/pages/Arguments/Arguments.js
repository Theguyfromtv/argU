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
        className:""
        
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

        })

    })
    

  }

  loadCurrentChat=()=>{
        if(window.location.hash===""){
          let currentChatArr=window.location.href.split('&')
          currentChatArr=currentChatArr[1]
          let newCurrentChat=currentChatArr.split('=')
          newCurrentChat=newCurrentChat[1]
          console.log(newCurrentChat)
          if(this.state.chats){
            const findChat = this.state.chats.find( chat => chat._id === newCurrentChat );
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


  toggleHidden(){
    this.setState({isHidden: !this.state.isHidden})
  
  }
  componentDidMount(){
    this.loadUser()
    this.loadCurrentChat()
    
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
      <div className="container-fluid">
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
                    messages={this.state.messages}/>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 768px)">
           
            <button className="btn btn-lg btn-primary btn-sidebar" onClick={this.toggleHidden.bind(this)}>Sidebar</button>
                {!this.state.isHidden && <ArgumentList 
                chats={this.state.chats}
                user={this.state.user}
                />}
                {this.state.isHidden && <Chat
                chat={this.state.currentChat}/>}

                
            </MediaQuery>
          </div>

    );
  }
}


export default Arguments