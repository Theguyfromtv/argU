import React, { Component } from 'react'
import API from "../../utils/API"
 class Login extends Component {
    facebook=()=>{
        API.facebook()

    }
    twitter=()=>{
        API.twitter()
    }
        
    
  render() {
    return (
      <div>
        <a  onClick={this.facebook} className="btn btn-lg btn-block btn-primary">Login with Facebook</a>
        <a  onClick={this.twitter} className="btn btn-lg btn-block btn-primary">Login with Twitter</a>
      </div>
    )
  }
}




export default Login