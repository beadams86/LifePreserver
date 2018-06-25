import React, { Component } from 'react';
import Hero from './Components/Hero';
import FloatingSection from './Components/FloatingSection';
import Navbar from './Components/Navbar';
import Splash from "./Assets/Images/HomeSplash.png";

class Home extends Component {
  render() {
    return (
      <div className="website">
        <Navbar/>
        <Hero imageUrl={Splash} heading="Some sort of heading" />
        <FloatingSection/>
      </div>
    );
  }
}

export default Home;