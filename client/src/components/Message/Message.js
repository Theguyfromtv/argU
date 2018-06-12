import React from 'react'
import "./Message.css"

 const Message=(props)=> {
    return (
      <div className="message">
          {props.message.sender===props.user._id?
          <div>
          <div className="col-lg-4 col-sm-10">
            <h6>{props.message.side?"Pro":"Con"}</h6>
            <div className={"card "+props.className} >
              <div className="card-body">
                <p>{props.message.message}</p>
              </div>
            </div>
          </div>
          </div>
          :
          <div>
          <div className="col-lg-4 col-sm-10">
            <h6>{props.message.side?"Pro":"Con"}</h6>
            <div className={"card message"}>
              <div className="card-body">
                <p>{props.message.message}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-2">
          </div>
          </div>
          }

      
      </div>
    )
  }



export default Message