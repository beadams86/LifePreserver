import React, { Component } from 'react';
import Image1 from '../Assets/Images/Icons/onboard-1.png';
import Image2 from '../Assets/Images/Icons/onboard-2.png';
import Image3 from '../Assets/Images/Icons/onboard-3.png';

class FloatingSection extends Component {
  render() {
    return (
      <div className="container floating-section">
        <div className="row">
            <div className="four columns step-columns">
                <img src={Image1} alt="Upload and store important documents in one location"/>
                <h4>Upload and Store</h4>
                <p>All your designated documents and account information is securely stored in a single location.</p>
            </div>
            <div className="four columns step-columns">
                <img src={Image2} alt="Upload and store important documents in one location"/>
                <h4>Follow your Checklist</h4>
                <p>Easily keep tabs with what you've already taken care of, and what you still need to make sure to do.</p>
            </div>
            <div className="four columns step-columns">
                <img src={Image3} alt="Upload and store important documents in one location"/>
                <h4>Transfer to Trusted Person</h4>
                <p>Once you've finished uploading your documents, we'll notify the person of your choice and grant access.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default FloatingSection;
