import React from 'react'
import "./Message.css"

 const Message=(props)=> {
    return (
      <div className="message">
          {props.message.sender===props.user._id?
          <div>
            <p>{props.message.side?"Pro":"Con"}</p>
            <div className={props.className} >
              <div className>
                <p>{props.message.message}</p>
              </div>
            </div>
          </div>
          :
          <div>
            <h6>{props.message.side?"Pro":"Con"}</h6>
            <div className>
              <div className>
                <p>{props.message.message}</p>
              </div>
            </div>
          </div>
          }

      
      </div>
    )
  }



export default Message