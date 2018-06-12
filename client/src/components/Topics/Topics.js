import React, { Component } from 'react'
import Switch from "react-switch";
import API from '../../utils/API'


 class Topics extends Component{
  state={
    topic1Val:true,
    topic2Val:true,
    topic3Val:true,
    user:{}

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
  sendChange=(topic,side,id)=>{
    API.updateTopics(topic,side,id).then(res=>{
      if(res.data._id){
        window.location.replace("/user/arguments?uid="+this.state.user._id+"&cid="+res.data._id)
      }
      else{

      }
    })

   
  }
  getOpinions=()=>{
    for (let i =0 ; i<this.props.user.topics; i++){
      if(this.props.user.topics[i].name===this.props.topics[0].name){
        console.log("found one!")
        this.setState({topic1Val:this.props.user.topics[i].side})
      }else if(this.props.user.topics[i].name===this.props.topics[1].name){
        console.log("found one!")
        this.setState({topic2Val:this.props.user.topics[i].side})
    }else if(this.props.user.topics[i].name===this.props.topics[2].name){
      console.log("found one!")
      this.setState({topic3Val:this.props.user.topics[i].side})
      }
    }
  }
  componentDidMount(){
    this.getOpinions()
  }

  
 render(){
  return (
    <div>
      <p>Give us your opinions</p>
 
      <div className="card">
        <label htmlFor={this.props.topics[0].name}>
        <span>{this.props.topics[0].name}</span>
        <Switch
          onChange={this.handleChange1}
          checked={this.state.topic1Val}
          offColor="#eb3c24"
          onColor="#3385f7"
        />
      <button className="btn btn-lg btn-primary btn-sidebar"onClick={()=>{this.sendChange(this.props.topics[0].name, this.state.topic1Val,this.state.user._id)}}>argu!</button>

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
      <button className="btn btn-lg btn-primary btn-sidebar" onClick={()=>{this.sendChange(this.props.topics[1].name, this.state.topic2Val,this.state.user._id)}}>argu!</button>

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
      <button className="btn btn-lg btn-primary btn-sidebar"onClick={()=>{this.sendChange(this.props.topics[2].name, this.state.topic3Val,this.state.user._id)}}>argu!</button>

      </label>
      </div>
    </div>
      )
  
 } 

}

export default Topics



