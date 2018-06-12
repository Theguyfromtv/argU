import React from 'react'
import './Chat.css'
import Message from '../Message/Message'

const Chat=(props)=> (


    <div className="col-sm-8 chat">
      <div className="overflow">
          <div id="chatView">
            <div className="chatBar">
              <h3>Argument about:{props.currentChat.topic}</h3>
            </div>
            <div className="messageView container">

            {props.messages.map(message=>(
              <Message 
                message={message}
                side={props.side}
                className={props.className}
                user={props.user}/>
                ))}
            </div>
            <div className=" input">
              <div className="row ">
                <div className="col-sm-10 bottom1">
                  <textarea class="text-box form-control" onChange={props.onChange}/>
                </div>
                  <div className="col-sm-2 bottom2">
                  <button type="submit" className={"submit btn btn-primary "+props.className} onClick={()=>{props.onClick(props.currentChat._id,props.newMessage,props.user._id,props.side)}} ><i className="zmdi zmdi-mail-send"></i></button>  
                  </div>
              </div>
          </div>
          </div>

        </div>
      </div>

)



export default Chat