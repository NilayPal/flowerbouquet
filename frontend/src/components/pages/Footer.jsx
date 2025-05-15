import React from "react";
import "../css/Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="social-section">
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle facebook"><FaFacebook /></div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle instagram"><FaInstagram /></div>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle linkedin"><FaXTwitter /></div>
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-links">
        <Link to="/about">ABOUT US</Link>
        <Link to="/tearms">TERMS AND CONDITION</Link>
        <Link to="/contact">CONTACT US</Link>
        <a href="#">PRIVACY POLICY</a>
      </div> 
    </footer>
  );
};

export default Footer;
