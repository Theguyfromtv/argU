import React, { Component } from "react";
import "./App.css";
import LoginPage from "./pages/Login/Login"
import Arguments from "./pages/Arguments/Arguments"
import  {BrowserRouter as Router,Route,} from 'react-router-dom'
import {Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/#/arguments/' component={Arguments}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
