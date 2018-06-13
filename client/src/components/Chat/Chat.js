import React, { Component } from 'react'
import './Chat.css'
import Message from '../Message/Message'

class Chat extends Component {

  componentDidMount = () => {
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;
  }
  

render(){
return (
  <div className="col-sm-8">
  <div className="row">
    <div className="col-12 chat-bar">
    <div className=" text-center">
        <p>Argument about:{this.props.currentChat.topic}</p>
      </div>
    </div>
  </div>
    <div className="row chat" id="chat">
        <div className="col-12">
        {this.props.messages.map(message=>(
      <Message 
        message={message}
        side={this.props.side}
        className={this.props.className}
        user={this.props.user}
        counterClassName={this.props.counterClassName}/>
        ))}
        </div>
    </div>
    <div className="row input">
      <div className="col-10 bottom2">
        <div class="form-group">
            <textarea  value={this.props.newMessage} placeholder="What's your argument?" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.props.onChange}></textarea>
        </div>
      </div>
      <div className="col-2 bottom1">
        <button  type="submit" className={"submit btn btn-primary "+this.props.className} onClick={()=>{this.props.onClick(this.props.currentChat._id,this.props.newMessage,this.props.user._id,this.props.side)}} ><i className="zmdi zmdi-mail-send"></i></button>  
      </div>
    </div>
</div>
)
  

}
   
    

}



export default Chat