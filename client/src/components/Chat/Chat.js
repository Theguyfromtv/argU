import React from 'react'
import './Chat.css'
import Message from '../Message/Message'

const Chat=(props)=> (


    <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="row chat-bar no-gutters">
            <div className={"col-12"}>
            <div className=" text-center">
                <p>{props.currentChat.topic?"Argument about: "+props.currentChat.topic: "Pick an argument to argu or give us your opinions to find a new argument!"}</p>
              </div>
            </div>
          </div>
            <div className="row chat no-gutters" id="chat">
                <div className="col-12">
                {props.messages.map(message=>(
              <Message 
                message={message}
                side={props.side}
                className={props.className}
                user={props.user}
                counterClassName={props.counterClassName}/>
                ))}
                </div>
            </div>
            <div className="row input">
              <div className="col-10 bottom2">
                <div class="form-group">
                    <textarea  value={props.newMessage} placeholder="What's your argument?" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={props.onChange}></textarea>
                </div>
              </div>
              <div className="col-2 bottom1">
                <button  type="submit" className={"submit btn btn-primary "+props.className} onClick={()=>{props.onClick(props.currentChat._id,props.newMessage,props.user._id,props.side)}} ><i className="zmdi zmdi-mail-send"></i></button>  
              </div>
            </div>
      </div>
    

)



export default Chat