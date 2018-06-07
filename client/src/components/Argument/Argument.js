import React from 'react'

export default (props) => {
  return (
    <div>
      <div className="card" onClick={()=>{window.location.replace("/arguments?uid="+props.user._id+"&cid="+props.id)}}>
        <div className="card-body">
            <div className="text-center" >
                {props.topic}
            </div>
        </div>
      </div>
    </div>
  )
}
