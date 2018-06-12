import React, { Component } from 'react'
import Switch from "react-switch";
import API from '../../utils/API'
import { Merge } from 'animate-components';
import { slideDown, slideUp } from 'animate-keyframes';
import 'react-slidedown/lib/slidedown.css'



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
<Merge
  one={{ name: slideDown, duration: '2s', timingFunction: 'ease-in' }}
  two={{ name: slideUp, duration: '2s', timingFunction: 'ease-out' , direction:'reverse'}}
  as="div">
    <div className="card topics">
      <div className="card-body">
      <div className="row">
        <div className="col-12">
          <p>Give us your opinions<br/>(these are reset every time so you can argu either side!)</p>
        </div>
      </div>
      <hr/>
    
      <div className="row">
        <div className="col-4">
          <span>{this.props.topics[0].name}</span>
        </div>
        <div className="col-4">
          <label htmlFor={this.props.topics[0].name}>
          <Switch
          onChange={this.handleChange1}
          checked={this.state.topic1Val}
          offColor="#eb3c24"
          onColor="#3385f7"
          />
          </label>
        </div>
        <div className="col-4">
          <button className="btn btn-lg btn-primary btn-topics"onClick={()=>{this.sendChange(this.props.topics[0].name, this.state.topic1Val,this.state.user._id)}}>argu!</button>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-4">
          <span>{this.props.topics[1].name}</span>
        </div>
        <div className="col-4">
          <label htmlFor={this.props.topics[1].name}>
          <Switch
            onChange={this.handleChange2}
            checked={this.state.topic2Val}
            offColor="#eb3c24"
            onColor="#3385f7"
          />
          </label>
        </div>
        <div className="col-4">
          <button className="btn btn-lg btn-primary btn-topics" onClick={()=>{this.sendChange(this.props.topics[1].name, this.state.topic2Val,this.state.user._id)}}>argu!</button>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-4">
          <span>{this.props.topics[1].name}</span>
        </div>
        <div className="col-4">
        <label htmlFor={this.props.topics[2].name}>
        <span>{this.props.topics[2].name}</span>
        <Switch
          onChange={this.handleChange3}
          checked={this.state.topic3Val}
          offColor="#eb3c24"
          onColor="#3385f7"
        />
          </label>
        </div>
        <div className="col-4">
        <button className="btn btn-lg btn-primary btn-sidebar"onClick={()=>{this.sendChange(this.props.topics[2].name, this.state.topic3Val,this.state.user._id)}}>argu!</button>
        </div>
      </div>
      <hr/>
    </div>
  </div>
</Merge>

      
      )
  
 } 

}

export default Topics



