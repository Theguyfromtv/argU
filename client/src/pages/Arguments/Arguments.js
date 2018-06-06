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
        currentChat:"5b17aa542cbd735c64b8d5e8"
    }
  loadUser=()=>{
    let userArr=window.location.href.split('=')
    let userId=userArr[1]
    let userFinalId=userId.split('#')
    userId=userFinalId[0]
    API.getUser(userId).then((res)=>{
        this.setState({user:res.data})
        console.log(this.state.user)
    })
    

  }
  loadChats=()=>{
    let userArr=window.location.href.split('=')
    let userId=userArr[1]
    let userFinalId=userId.split('#')
    userId=userFinalId[0]
      API.getChats(userId).then((res)=>{
          console.log(res)
          this.setState({chats:[...res.data]})
          console.log(this.state.chats)
      })
  }
  toggleHidden(){
    this.setState({isHidden: !this.state.isHidden})
  
  }
  componentDidMount(){
    this.loadUser()
    this.loadChats()
    
  }



  render() {
    return (
      <div>
           <div className="row">
           <MediaQuery query="(min-width: 769px)">

                <ArgumentList
                chats={this.state.chats}
                user={this.state.user}
                />

                <div className="col sm-8">
                    <Chat
                    chats={this.state.chats}
                    current={this.state.currentChat}/>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 768px)">
                <button className="btn btn-lg btn-primary" onClick={this.toggleHidden.bind(this)}>Sidebar</button>
                {!this.state.isHidden && <ArgumentList 
                chats={this.state.chats}
                user={this.state.user}
                />}
                <div className="col sm-8">
                    <Chat
                    chat={this.state.currentChat}/>
                </div>
            </MediaQuery>
          </div>

      </div>
    );
  }
}


export default Arguments