import React, { Component } from 'react';
import Hero from './Components/Hero';
import FloatingSection from './Components/FloatingSection';

import Splash from "./Assets/Images/HomeSplash.png";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Hero imageUrl={Splash} heading="Some sort of heading" />
        <FloatingSection/>
      </div>
    );
  }
}

export default Home;