import React, { Component } from 'react';
import './Assets/Stylesheets/Pages/HowItWorks.scss';
import Step1 from './Assets/Images/HowItWorks/SignUp.png';
import Step2 from './Assets/Images/HowItWorks/Checklist.png';

import AppStore from './Assets/Images/Icons/AppStore.png';

var ImageStyle={
  width: '240px',
}

class HowItWorks extends Component {
  render() {
    return (
      <section className="steps">
        <div className="container">
          <div className="row step">
            <div className="six columns step-image">
              <img src={Step1} alt="screenshot of mobile sign up"/>
            </div>
            <div className="six columns step-text">
              <h1>Step 1: Sign Up</h1>
              <p>After downloading the LifePreserver Mobile App on Apple App Store, Google Play, or using the Web App, sign up with some basic information.</p>
              <a href="/" ><img src={AppStore} style={ImageStyle} alt="Download on App Store" /></a>
            </div>
          </div>
          <div className="row step">
          <div className="six columns step-text">
              <h1>Step 2: Reference the Checklist</h1>
              <p>After downloading the LifePreserver Mobile App on Apple App Store, Google Play, or using the Web App, sign up with some basic information.</p>
              <a href="/" ><img src={AppStore} style={ImageStyle} alt="Download on App Store" /></a>
            </div>
            <div className="six columns step-image">
              <img src={Step2} alt="screenshot of mobile sign up"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWorks;