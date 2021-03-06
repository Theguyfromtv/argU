import React from 'react'

export default (props) => {
  return (
    <div>
      <div className="card argument" onClick={()=>{window.location.replace("/user/arguments?uid="+props.user._id+"&cid="+props.id)}}>
        <div className="card-body">
            <div className="text-center" >
            <i className={"fas fa-circle "+props.side?"pro":"con" }></i>{props.topic}
            </div>
        </div>
      </div>
    </div>
  )
}
