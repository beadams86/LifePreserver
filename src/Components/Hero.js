import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ imageUrl, heading }) => {

    return (
      <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="container hero-container">
        <h1>{heading}</h1>
        <a href="/" className="button button-primary">Get Started</a> <a href="/" className="button dark-bg">Learn More</a>
        </div>
      </section>
    );
}

Hero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};
export default Hero;
