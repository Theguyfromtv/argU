import React from 'react'

export default (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
            <div className="text-center" >
                {props.topic}
            </div>
        </div>
      </div>
    </div>
  )
}
