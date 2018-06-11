import React, { Component } from 'react'
import Argument from '../Argument/Argument'
import Topics from '../Topics/Topics'
import API from '../../utils/API'


class ArgumentList extends Component {
  

  state={
      isHidden:false,
      unread: this.props.unread,
      topics:[]
  }
  getTopics=()=>{
    API.getTopics().then((newTopics)=>{
      this.setState({topics:newTopics})
    })
  }
  
  toggleTopics=()=>{
    this.setState({isHidden: !this.state.isHidden})
  
  }
  componentDidMount(){
    this.test()
  }
  render(){
    return (
      <div className="col-sm-4">
       <div className="top-bar">
         <h6>{this.props.user.name}'s Arguments</h6>
         <button className="btn btn-lg btn-primary btn-sidebar" onClick={this.toggleTopics.bind(this)}>Topics</button>
         {this.state.isHidden && <Topics topics={this.state.topics}/>}
       </div>
       <div className="sidebar">
         {this.props.chats? this.props.chats.map(chat=>
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
         ): <Argument/>}
 
         
         
       </div>
 
     </div>
    )
  
}

}



export default ArgumentList