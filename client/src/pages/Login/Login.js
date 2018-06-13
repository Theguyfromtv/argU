import React from 'react'
import Login from '../../components/Login/Login'
import Logo from '../../components/Logo/Logo'
import './Login.css'


const LoginPage=() => {
  return (
    <div>
      <div className="container">
        <div className="row section">
          <div className="row">
          <Logo className="middle"/>
          </div>
          <div className="row">
          <div className="card login middle">
              <div className="card-body">
                <div className="text-center">
                Login/Sign up
                </div>
                <hr/>
                <Login/>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
  )
}

export default LoginPage