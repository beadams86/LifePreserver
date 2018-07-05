import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import LoginSplash from './Assets/Images/Login/Splash.png';
import './Assets/Stylesheets/Pages/Login.scss';
import AppNav from './Components/AppNav';

class Login extends Component {
render() {
    return (
      <div>
          <AppNav />

          <section className="split-page login">
          <div className="row">
            <div className="seven columns split-content">
              <div className="container">
                <h1>Login</h1>
                <p>Let the journey begin!</p>

                    <input type="text"
                      className="form-item"
                      placeholder="Username"
                      hintText="Enter your Username"
                      />
                  <br/>

                  <input
                    className="form-item"
                    placeholder="Password"
                    type="password"
                    hintText="Enter your Password"
                    />
                  <br/>
                <Link to="/App/index" className="button button-primary button-block">Login</Link>
                </div>
              </div>

              <div className="five columns split-splash"  style={{ backgroundImage: `url(${LoginSplash})` }} > </div>
          </div>
          </section>
      </div>
    );
  }

}


export default Login;