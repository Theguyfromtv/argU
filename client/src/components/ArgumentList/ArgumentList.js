import React from 'react'
import Argument from '../Argument/Argument'

let ArgumentList =props => {

  return (
     <div className="col sm-4">
      <div className="top-bar">
        <h6>{props.user.name}'s Arguments</h6>
      </div>
      <div className="sidebar">
        {props.chats.map(chat=>

        <Argument 
        key={chat._id}
        id={chat._id}
        participant1id={chat.participant1id}
        participant1name={chat.participant1name}
        participant2id={chat.participant2id}
        participant2name={chat.participant2name}
        user={props.user}
        topic={chat.topic}
        />
        )}

        
        
      </div>

    </div>
   
  )
}
 



export default ArgumentList