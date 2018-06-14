import React, { Component } from 'react';
import './Assets/Stylesheets/Base.scss';
import Navbar from './Components/Nav/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
