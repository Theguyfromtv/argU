import React from 'react'
import Login from '../../components/Login/Login'
import Logo from '../../components/Logo/Logo'
import './Login.css'


const LoginPage=() => {
  return (
    <div>
      <div className="container section">
        <div className="row ">

          <div className="col-lg-12 col-sm-12">
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
        </div>
      </div>
    </div>
  )
}

export default LoginPage