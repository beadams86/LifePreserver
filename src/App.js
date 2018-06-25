import React, { Component } from 'react';
import './Assets/Stylesheets/style.scss';
import Navbar from './Components/Navbar';
import { Route } from "react-router-dom";

import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/HowItWorks" component={HowItWorks} />
        <Route path="/Login" component={Login} />
      </div>
    );
  }
}

export default App;
