import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AppNav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          
          <ul className="navbar-links">
              <li><Link to="/App/Checklist">My Checklist</Link></li>
              <li><Link to="/Resources">Resources</Link></li>
              <li><Link to="/App/Vault">Vault</Link></li>
              <li><Link to="/App/Trustee">Add Trustee</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default AppNav;
