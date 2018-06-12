import React from 'react'
import "./Message.css"

 const Message=(props)=> {
    return (
      <div className="message">
          {props.message.sender===props.user._id?
          <div style={{float:"right"}}>
            <p>{props.message.side?"Pro":"Con"}</p>
            <div className={"card "+props.className} >
              <div className="card-body">
                <p>{props.message.message}</p>
              </div>
            </div>
          </div>
          :
          <div style={{float:"left"}}>
            <p>{props.message.side?"Pro":"Con"}</p>
            <div className="card message" >
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