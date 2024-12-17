import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="coffee-footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Coffee Haven</h3>
          <p>
            At Coffee Haven, we brew happiness in every cup. Join us for a rich, flavorful experience, whether you're looking for a morning pick-me-up or a cozy evening indulgence.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/locations">Our Locations</a></li>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us Section with Icons */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p><FaEnvelope /> support@coffeehaven.com</p>
            <p><FaPhoneAlt /> +123 456 7890</p>
            <p><FaMapMarkerAlt /> 123 Coffee Lane, Bean Town</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Coffee Haven. Brewed with ❤️.</p>
      </div>
    </footer>
  );
};

export default Footer;
