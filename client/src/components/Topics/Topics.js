import React, { Component } from 'react'
import Switch from "react-switch";
import API from '../../utils/API'


 class Topics extends Component{
  state={
    topic1Val:true,
    topic2Val:false,
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
        let topic1 = this.props.user.topics.find( topic => topic.name === this.props.topics[0].name );
        if(topic1){
          console.log(topic1)
          this.setState({topic1Val:topic1.side})
        }

        let topic2 = this.props.user.topics.find( topic => topic.name === this.props.topics[1].name );
        if(topic2){
          console.log(topic2)
          this.setState({topic2Val:topic2.side})
        }

        let topic3 = this.props.user.topics.find( topic => topic.name === this.props.topics[2].name );
        if(topic3){
          console.log(topic3)
          this.setState({topic3Val:topic3.side})
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



