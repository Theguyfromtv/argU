import React, { Component } from 'react'
import Topic from '../../components/Topic/Topic'
import Switch from "react-switch";


 class Topics extends Component{
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
  
 render(){
  return (
    <div>
      <h4>Your current opinions</h4>
 
      <div className="card">
        <label htmlFor={this.props.topics[0].name}>
        <span>{this.props.topics[0].name}</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.topicVal}
          offColor="#eb3c24"
          onColor="#3385f7"
          uncheckedIcon={<i className="fas fa-minus-circle"></i>}
          checkedIcon={<i className="fas fa-plus-circle"></i>}
        />
      <button className="btn btn-lg btn-primary btn-sidebar">Save</button>

      </label>
      </div>
      <div className="card">
        <label htmlFor={this.props.topics[1].name}>
        <span>{this.props.topics[1].name}</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.topicVal}
          offColor="#eb3c24"
          onColor="#3385f7"
          uncheckedIcon={<i className="fas fa-minus-circle"></i>}
          checkedIcon={<i className="fas fa-plus-circle"></i>}
        />
      <button className="btn btn-lg btn-primary btn-sidebar">Save</button>

      </label>
      </div>
      <div className="card">
        <label htmlFor={this.props.topics[2].name}>
        <span>{this.props.topics[2].name}</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.topicVal}
          offColor="#eb3c24"
          onColor="#3385f7"
          uncheckedIcon={<i className="fas fa-minus-circle"></i>}
          checkedIcon={<i className="fas fa-plus-circle"></i>}
        />
      <button className="btn btn-lg btn-primary btn-sidebar">Save</button>

      </label>
      </div>
    </div>
      )
  
 } 

}

export default Topics



