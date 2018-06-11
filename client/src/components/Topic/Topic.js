import React, { Component } from 'react'
import Switch from "react-switch";


export default class Topic extends Component {
    state={
        topicVal:true
    }
    handleChange=()=>{
        this.setState({ topicVal:!this.state.topicVal })
    }
    sendChange=(topicVal)=>{

    }
    componentDidMount(){
      console.log("topic mounted")
    }
  render() {
    return (
      <div className="card">
        <label htmlFor={this.props.topic}>
        <span>{this.props.topic}</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id={this.props.topic}
          offColor="#eb3c24"
          onColor="#3385f7"
          uncheckedIcon={<i className="fas fa-minus-circle"></i>}
          checkedIcon={<i className="fas fa-plus-circle"></i>}
        />
     <button className="btn btn-lg btn-primary btn-sidebar">Save</button>

      </label>
      </div>
    )
  }
}
