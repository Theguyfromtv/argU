import React, { Component } from "react";
import "./App.css";
import LoginPage from "./pages/Login/Login"
import Arguments from "./pages/Arguments/Arguments"
import  {BrowserRouter as Router,Route,} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


class App extends Component {
  render() {
    return (
      <div>
        <AlertProvider>
          <Router>
            <div>
              <Route exact path='/' component={LoginPage}/>
              <Route path='/user/arguments' component={Arguments}/>
            </div>
          </Router>
        </AlertProvider>
      </div>
    );
  }
}

export default App;
