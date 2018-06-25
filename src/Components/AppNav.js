import React, { Component } from 'react';
import LPLogo from '../Assets/Images/LP-Logo.svg';
import { Link } from 'react-router-dom'

const AppNavList = {
    listStyleType: "none",
    flex:'1',
    textAlign: 'right',
}

class AppNav extends Component {
  render() {
    return (
      <nav className="navbar-app">
          <Link to="/" className="navbar-logo" ><img src={LPLogo} alt="Life Preserver Logo"/></Link>
          <ul className="navbar-links" style={AppNavList}>
              <li>Don't have an account? <a href="/Signup" className="navbar-link__button navbar-link__button--primary">Sign Up</a></li>
          </ul>
      </nav>
    );
  }
}

export default AppNav;
