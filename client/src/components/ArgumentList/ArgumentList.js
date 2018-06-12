import React, { Component } from 'react'
import Argument from '../Argument/Argument'
import Topics from '../Topics/Topics'
import API from '../../utils/API'
import {SlideDown} from 'react-slidedown'
import "./ArgumentList.css"


class ArgumentList extends Component {
  

  state={
      isHidden:false,
  }
  getTopics=()=>{

  }
  
  toggleTopics=()=>{
    this.setState({isHidden: !this.state.isHidden})
    
  }
  componentDidMount(){
  }
  render(){
    return (
      <SlideDown className="col-sm-4 sidebar">
      <div >
       <div className="top-bar">
         <h6>{this.props.user.name}'s Arguments</h6>
         <button className="btn btn-lg btn-primary btn-sidebar topicsButton" onClick={this.toggleTopics.bind(this)}>Opinions</button>
         {this.state.isHidden && <Topics user={this.props.user} topics={[{name:"Trump",id:"1"}, {name:"Abortion",id:"2"},{name:"Star Wars: The Last Jedi", id:"3"}]}/>}
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
         />
         ): <h4>You have no arguments yet, tell us your opinions and find some!</h4>}
 
         
         
       </div>
 
     </div>
     </SlideDown>
    )
  
}

}



export default ArgumentList