import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import ArgumentList from '../../components/ArgumentList/ArgumentList'
import API from "../../utils/API"
import Chat from "../../components/Chat/Chat"


class Arguments extends Component {

    state={
        user:{},
        chats:[],
        isHidden:true,
        currentChat:""
    }
  loadUser=()=>{
    let userArr=window.location.href.split('=')
    let userId=userArr[1]
    let userFinalId=userId.split('&')
    userId=userFinalId[0]
    API.getUser(userId).then((res)=>{
        this.setState({user:res.data})
        //console.log(this.state.user)
    })
    

  }
  loadChats=()=>{
    let userArr=window.location.href.split('=')
    let userId=userArr[1]
    let userFinalId=userId.split("&")
    userId=userFinalId[0]
      API.getChats(userId).then((res)=>{
          console.log(res)
          this.setState({chats:[...res.data]})
          console.log(this.state.chats)
      })
  }
  loadCurrentChat=()=>{
      let currentChatArr=window.location.href.split('&')
      if(currentChatArr[1]){      
        currentChatArr=currentChatArr[1]
        let newCurrentChat=currentChatArr.split('=')
        newCurrentChat=newCurrentChat[1]
        this.setState({currentChat:newCurrentChat})
        console.log(newCurrentChat)
    }

  }
  toggleHidden(){
    this.setState({isHidden: !this.state.isHidden})
  
  }
  componentDidMount(){
    this.loadUser()
    this.loadChats()
    this.loadCurrentChat()
    
  }



  render() {
    return (
      <div className="container-fluid">
           <MediaQuery query="(min-width: 769px)">
           <div className="row">
                <ArgumentList
                chats={this.state.chats}
                user={this.state.user}
                />
                

                    <Chat
                    chats={this.state.chats}
                    current={this.state.currentChat}
                    user={this.state.user}/>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 768px)">
            <div className="row">
            <button className="btn btn-lg btn-primary btn-sidebar" onClick={this.toggleHidden.bind(this)}>Sidebar</button>
                {!this.state.isHidden && <ArgumentList 
                chats={this.state.chats}
                user={this.state.user}
                />}
                {this.state.isHidden && <Chat
                chat={this.state.currentChat}/>}
            </div>
                
            </MediaQuery>
          </div>

    );
  }
}


export default Arguments