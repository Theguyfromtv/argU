import React from 'react'
import "./Message.css"

 const Message=(props)=> {
    return (
      <div className="message">
        <div>
          <h6>{props.message.side?"Pro":"Con"}</h6>
          <div className="card message" style={{backgroundColor: props.color}}>
            <div className="card-body">
              <p>{props.message.message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }



export default Message