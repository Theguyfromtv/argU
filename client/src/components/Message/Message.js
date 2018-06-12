import React from 'react'
import "./Message.css"

 const Message=(props)=> {
    return (
      <div className="message">
          {props.message.sender===props.user._id?
          <div>
            <p>{props.message.side?"Pro":"Con"}</p>
            <div className={"card "+props.className} >
              <div className="card-body">
                <p>{props.message.message}</p>
              </div>
            </div>
          </div>
          :
          <div>
            <p>{props.message.side?"Pro":"Con"}</p>
            <div className="card message" style={{float:"left"}}>
              <div className="card-body">
                <p>{props.message.message}</p>
              </div>
            </div>
          </div>
          }

      
      </div>
    )
  }



export default Message