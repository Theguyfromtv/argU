import React from 'react'
import Topic from '../../components/Topic/Topic'

 const Topics=(props) => {
  return (
    <div>
      <h4>Your current opinions</h4>
      {props.topics.map(topic=>{
        <Topic key={topic.id}
        topic={topic.name}/>
      })}
    </div>
  )
}

export default Topics