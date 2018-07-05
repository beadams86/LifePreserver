import React, { Component } from 'react';
import './Assets/Stylesheets/style.scss';
import { Route } from "react-router-dom";

import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Login from "./App/Login";
import LPApp from "./App/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/HowItWorks" component={HowItWorks} />
        <Route path="/App/Login" component={Login} />
        <Route path="/App/index" component={LPApp} />
      </div>
    );
  }
}

export default App;
