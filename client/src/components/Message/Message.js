import React, { Component } from 'react'

 const Message=(props)=> {
    return (
      <div>
        <h6>Message</h6>
        <div className="card message" style={{backgroundColor: props.color}}>
          <div className="card-body">
            <p>{props.message.message}</p>
          </div>
        </div>
      </div>
    )
  }



export default Message