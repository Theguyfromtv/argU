import React from 'react'
import Login from '../../components/Login/Login'
import Logo from '../../components/Logo/Logo'
import './Login.css'


const LoginPage=() => {
  return (
    <div>
      <div className="container section">
        <div className="row ">
        <div className="col-4">
        </div>
          <div className="col-4">
            <Logo/>
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                Login/Sign up
                </div>
                <hr/>
                <Login/>
              </div>
            </div>
          </div>
          <div className="col-4">
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage