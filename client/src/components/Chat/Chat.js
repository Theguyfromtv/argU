import React from 'react'
import './Chat.css'
import Message from '../Message/Message'

const Chat=(props)=> (


    <div className="col-sm-8 chat">
            <div className="chatBar">
              <h4>Argument about:{props.currentChat.topic}</h4>
            </div>

            {props.messages.map(message=>(
              <Message 
                message={message}
                side={props.side}
                className={props.className}
                user={props.user}/>
                ))}
            <div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={props.onChange}></textarea>
            </div>
            <button type="submit" className={"submit btn btn-primary "+props.className} onClick={()=>{props.onClick(props.currentChat._id,props.newMessage,props.user._id,props.side)}} ><i className="zmdi zmdi-mail-send"></i></button>  
            </div>
      </div>

)



export default Chat