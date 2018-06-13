import React from 'react'
import "./Argument.css"

export default (props) => {
  return (
    <div>
      <div className={props.unread?"card text-white bg-success":"card bg-light"} onClick={()=>{window.location.replace("/user/arguments?uid="+props.user._id+"&cid="+props.id)}}>
        <div className="card-body">
            <div className="text-center" >
            <i className={"fas fa-circle "+props.side?"pro":"con" }></i>{props.topic}
            </div>
        </div>
      </div>
    </div>
  )
}
