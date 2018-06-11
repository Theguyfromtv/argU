import React, { Component } from 'react'
import Switch from "react-switch";


class Topic extends Component {
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

     <button className="btn btn-lg btn-primary btn-sidebar">Save</button>

      </label>
      </div>
    )
  }
}

export default Topic