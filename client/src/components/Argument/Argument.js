import React from 'react'

export default (props) => {
  return (
    <div>
      <div className={props.unread?"card text-white bg-success":"card bg-light"} onClick={()=>{window.location.replace("/user/arguments?uid="+props.user._id+"&cid="+props.id)}}>
        <div className="card-body">
            <div className="text-center" >
                {props.topic}
            </div>
        </div>
      </div>
    </div>
  )
}
