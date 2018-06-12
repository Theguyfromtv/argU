import React from 'react'
import './Login.css'

//import API from "../../utils/API"
 const Login=()=> {
     

    return (
      <div>
        <a  href="/auth/facebook " className="btn btn-lg btn-block btn-primary facebook">Login with Facebook</a>
        <a  href="/auth/twitter " className="btn btn-lg btn-block btn-primary twitter">Login with Twitter</a>
      </div>
    )
  }





export default Login