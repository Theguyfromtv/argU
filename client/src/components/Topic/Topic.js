import React, { Component } from 'react'
import Switch from "react-switch";


let props = props
export default class Topic extends Component {
    state={
        topicVal:true
    }
    handleChange=()=>{
        this.setState({ topicVal:!this.state.topicVal })
    }
    sendChange=(topicVal)=>{

    }
  render() {
    return (
      <div>
        <label htmlFor={props.topic}>
        <span>{props.topic}</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id={props.topic}
          offColor="#eb3c24"
          onColor="#3385f7"
          uncheckedIcon={<i className="fas fa-minus-circle"></i>}
          checkedIcon={<i className="fas fa-plus-circle"></i>}
        />
     <button className="btn btn-lg btn-primary btn-sidebar" onClick={this.toggleHidden.bind(this)}>Save</button>

      </label>
      </div>
    )
  }
}
