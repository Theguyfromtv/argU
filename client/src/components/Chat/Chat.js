import React from 'react'
import './Chat.css'
import Message from '../Message/Message'

const Chat=(props)=> (


    <div className="col-sm-8 chat">
          <div className="row">
            <div className="col-12">
            <div className="chat-bar">
                <p className="navbar-brand">Argument about:{props.currentChat.topic}</p>
              </div>
            </div>
          </div>
            <div className="row chat">
                <div className="col-12">
                {props.messages.map(message=>(
              <Message 
                message={message}
                side={props.side}
                className={props.className}
                user={props.user}/>
                ))}
                </div>
            </div>
            <div className="row">
            <div className="col-12">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea  value={props.newMessage} placeholder="What's your argument?" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={props.onChange}></textarea>
            </div>
            <button  type="submit" className={"submit btn btn-primary "+props.className} onClick={()=>{props.onClick(props.currentChat._id,props.newMessage,props.user._id,props.side)}} ><i className="zmdi zmdi-mail-send"></i></button>  

            </div>
            </div>
      </div>

)



export default Chat