import React from 'react'
import "./Message.css"

 const Message=(props)=> {
    return (
      <div className="message">
          {props.message.sender==props.user._id?
          <div className="row">
            <div className="col-lg-8 col-sm-4">
            </div>
            <div className="col-lg-4 col-sm-8">
              <div>
              <p className="name">{props.message.side?"Pro":"Con"}</p>
              <div className={props.message.side?"pro":"con"}>
                <div className="card-body">
                  <p>{props.message.message}</p>
                </div>
              </div>
          </div>
            </div>
          </div>
          :
          <div className="row">
            <div className="col-lg-4 col-sm-8">
            <p className="name">{props.message.side?"Pro":"Con"}</p>
            <div className={props.message.side?"pro":"con"}>
              <div className="card-body">
                <p className="messageText">{props.message.message}</p>
              </div>
            </div>
            </div>
            <div className="col-lg-8 col-sm-4">
            </div>
          </div>
          
          }

      
      </div>
    )
  }



export default Message