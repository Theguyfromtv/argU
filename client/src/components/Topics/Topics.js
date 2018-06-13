import React, { Component } from 'react'
import Switch from "react-switch";
import API from '../../utils/API'
import {SlideDown} from 'react-slidedown'
import { withAlert } from "react-alert";
import 'react-slidedown/lib/slidedown.css'
import "./Topics.css"



 class Topics extends Component{
  state={
    topic1Val:true,
    topic2Val:true,
    topic3Val:true,
    topic4Val:true,
    topic5Val:true,
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
  handleChange4=()=>{
    this.setState({ topic3Val:!this.state.topic4Val })
  }
  handleChange5=()=>{
    this.setState({ topic3Val:!this.state.topic5Val })
  }
  sendChange=(topic,side,id)=>{
    API.updateTopics(topic,side,id).then(res=>{
      if(res.data._id){
        window.location.replace("/user/arguments?uid="+this.state.user._id+"&cid="+res.data._id)
      }
      else{
        this.props.alert.error("No matches yet, but we're working on it!")
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
    <SlideDown>
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
          <span className="opinionText">{this.props.topics[0].name}</span>
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
          <button className="btn btn-lg btn-link btn-topics"onClick={()=>{this.sendChange(this.props.topics[0].name, this.state.topic1Val,this.state.user._id)}}>argu!</button>
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
          <button className="btn btn-lg btn-link btn-topics" onClick={()=>{this.sendChange(this.props.topics[1].name, this.state.topic2Val,this.state.user._id)}}>argu!</button>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-4">
          <span>{this.props.topics[2].name}</span>
        </div>
        <div className="col-4">
        <label htmlFor={this.props.topics[2].name}>
        <Switch
          onChange={this.handleChange3}
          checked={this.state.topic3Val}
          offColor="#eb3c24"
          onColor="#3385f7"
        />
          </label>
        </div>
        <div className="col-4">
        <button className="btn btn-lg btn-link btn-sidebar"onClick={()=>{this.sendChange(this.props.topics[2].name, this.state.topic3Val,this.state.user._id)}}>argu!</button>
        </div>
      </div>
      <hr/>
        <div className="row">
          <div className="col-4">
            <span>{this.props.topics[3].name}</span>
          </div>
          <div className="col-4">
          <label htmlFor={this.props.topics[3].name}>
          <Switch
            onChange={this.handleChange4}
            checked={this.state.topic4Val}
            offColor="#eb3c24"
            onColor="#3385f7"
          />
            </label>
          </div>
          <div className="col-4">
          <button className="btn btn-lg btn-link btn-sidebar"onClick={()=>{this.sendChange(this.props.topics[3].name, this.state.topic4Val,this.state.user._id)}}>argu!</button>
          </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-4">
          <span>{this.props.topics[4].name}</span>
        </div>
        <div className="col-4">
        <label htmlFor={this.props.topics[4].name}>
        <Switch
          onChange={this.handleChange5}
          checked={this.state.topic5Val}
          offColor="#eb3c24"
          onColor="#3385f7"
        />
          </label>
        </div>
        <div className="col-4">
        <button className="btn btn-lg btn-link btn-sidebar"onClick={()=>{this.sendChange(this.props.topics[4].name, this.state.topic5Val,this.state.user._id)}}>argu!</button>
        </div>
      </div>
    </div>
  </div>
  </SlideDown>
      
      )
  
 } 

}

export default Topics



