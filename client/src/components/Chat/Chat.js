import React from 'react'
import './Chat.css'
import Message from '../Message/Message'

const Chat=(props)=> {

    return (
    <div className="col-sm-8 chat">
      <div className="overflow">
          <div id="chatView">
            <div className="chatBar">
              <h3>{this.props.currentChat.topic}</h3>
            </div>
            <div className="messageView">

            {this.props.messages.map((message,index)=>{
        
              <Message key={index}
                message={message}
                side={this.props.side}
                className={this.props.className}/>
                })}
            </div>
            <div className=" input">
              <div className="row ">
                <div className="col-sm-10 bottom1">
                  <textarea class="text-box form-control"/>
                </div>
                  <div className="col-sm-2 bottom2">
                  <button type="submit" className={"submit btn btn-primary "+this.props.className}  onClick={this.sendMessage}><i className="zmdi zmdi-mail-send"></i></button>  
                  </div>
              </div>
          </div>
          </div>

        </div>
      </div>
    );
  }



export default Chat