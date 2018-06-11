import React from 'react'
import Topic from '../../components/Topic/Topic'

 const Topics=(props) => {
  return (
    <div>
      <h4>{props.topics[0].name}</h4>
      {props.topics.map(topic=>{
        <Topic key={topic.id}
        topic={topic.name}/>
      })}
    </div>
  )
}

export default Topics