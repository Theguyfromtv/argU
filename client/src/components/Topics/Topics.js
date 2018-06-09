import React from 'react'
import Topic from '../../components/Topic/Topic'

export default (props) => {
  return (
    <div>
      <h4>Your current opinions</h4>
      {props.topics.map(topic=>{
        <Topic topic={topic}/>
      })}
    </div>
  )
}

