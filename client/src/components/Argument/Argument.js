import React from 'react'

export default (props) => {
  return (
    <div>
      <div className={props.unread?"card text-white bg-success":"card bg-light"} onClick={()=>{props.markRead(props.user._id, props.participant1id, props.participant2id, props.id, true); window.location.replace("/user/arguments?uid="+props.user._id+"&cid="+props.id)}}>
        <div className="card-body">
            {props.participant1id===props.user._id?!props.participant1read?<strong className="text-center">{props.topic}</strong>:<div className="text-center">{props.topic}</div>:props.partocopant2id===props.user._id?!props.participant2read?<strong className="text-center">{props.topic}</strong>:<div className="text-center">{props.topic}</div>:<div>{props.topic}</div>} 
            </div>
        </div>
      </div>
  )
}
