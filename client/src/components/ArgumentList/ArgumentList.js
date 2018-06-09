import React, { Component } from 'react'
import Argument from '../Argument/Argument'
import Topics from '../Topics/Topics'


class ArgumentList extends Component {
  

  state={
      isHidden:false,
      unread: this.props.unread
  }
  toggleUnread=(id)=>{
    if(this.props.unread){
      this.props.unread=false
    }
  }
  render(){
    return (
      <div className="col-sm-4">
       <div className="top-bar">
         <h6>{this.props.user.name}'s Arguments</h6>
         <button className="btn btn-lg btn-primary btn-sidebar" onClick={this.state.isHidden.bind(this)}>Topics</button>
         {!this.state.isHidden && <Topics/>}
       </div>
       <div className="sidebar">
         {this.props.chats.map(chat=>
 
         <Argument 
         key={chat._id}
         id={chat._id}
         participant1id={chat.participant1id}
         participant1name={chat.participant1name}
         participant2id={chat.participant2id}
         participant2name={chat.participant2name}
         user={this.props.user}
         topic={chat.topic}
         unread={this.state.unread.includes(chat._id)}
         markRead={this.toggleUnread}
         />
         )}
 
         
         
       </div>
 
     </div>
    )
  
}

}



export default ArgumentList