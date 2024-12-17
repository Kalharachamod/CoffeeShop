import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Circle Image Section */}
      <div className="about-image-container">
        <img src="/images/about.jpg" alt="Coffee" className="about-image" />
      </div>

      {/* Text Section */}
      <div className="about-text-container">
        <h2 className="about-title" style={{ paddingTop:'820px' ,paddingLeft:'570px',color:'black'}}><b>ABOUT US</b></h2>
        <p className="about-paragraph">
          At coffeehaven, we pride ourselves on being a go-to destination for coffee lovers and conversation seekers alike. 
          We’re dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
        </p>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
