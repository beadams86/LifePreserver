import React, { Component } from 'react';
import LPLogo from '../Assets/Images/LP-Logo.svg';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-logo"><img src={LPLogo} alt="Life Preserver Logo"/></Link>
          <ul className="navbar-links">
              <li><Link to="/HowItWorks">How it works</Link></li>
              <li><Link to="/Resources">Resources</Link></li>
              <li><a href="/Login" className="navbar-link__button navbar-link__button--secondary">Login</a></li>
              <li><a href="/Signup" className="navbar-link__button navbar-link__button--primary">Sign Up</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
