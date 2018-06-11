import React, { Component } from 'react'
import Topic from '../../components/Topic/Topic'
import Switch from "react-switch";


 class Topics extends Component{
  state={
    topic1Val:true,
    topic2Val:true,
    topic3Val:true

  }
  handleChange1=()=>{
    this.setState({ topic1Val:!this.state.topic1Val })
  }
  handleChange2=()=>{
    this.setState({ topic2Val:!this.state.topic2Val })
  }
  handleChange3=()=>{
    this.setState({ topic3Val:!this.state.topic3Val })
  }
  sendChange=(topicVal)=>{
  
  }
  componentDidMount(){
  console.log("topic mounted")
  }
  
 render(){
  return (
    <div>
      <h4>Your current opinions</h4>
 
      <div className="card">
        <label htmlFor={this.props.topics[0].name}>
        <span>{this.props.topics[0].name}</span>
        <Switch
          onChange={this.handleChange1}
          checked={this.state.topic1Val}
          offColor="#eb3c24"
          onColor="#3385f7"
        />
      <button className="btn btn-lg btn-primary btn-sidebar">Save</button>

      </label>
      </div>
      <div className="card">
        <label htmlFor={this.props.topics[1].name}>
        <span>{this.props.topics[1].name}</span>
        <Switch
          onChange={this.handleChange2}
          checked={this.state.topic2Val}
          offColor="#eb3c24"
          onColor="#3385f7"
        />
      <button className="btn btn-lg btn-primary btn-sidebar">Save</button>

      </label>
      </div>
      <div className="card">
        <label htmlFor={this.props.topics[2].name}>
        <span>{this.props.topics[2].name}</span>
        <Switch
          onChange={this.handleChange3}
          checked={this.state.topic3Val}
          offColor="#eb3c24"
          onColor="#3385f7"
        />
      <button className="btn btn-lg btn-primary btn-sidebar">Save</button>

      </label>
      </div>
    </div>
      )
  
 } 

}

export default Topics



