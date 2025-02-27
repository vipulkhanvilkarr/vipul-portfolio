import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.css";
import logo from "../../assets/logo.png"; // Adjust the path as needed
import nameImage from "../../assets/name.png"; // Adjust the path as needed

const Footer = () => {
  return (
    <div id="Footer">
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="Logo" className="footer-logo" />
          <img src={nameImage} alt="Name" className="footer-name" />
          <h1 className="footer h1">Connect with me</h1>
          <div className="footer-icons">
            <a href="https://github.com/vipulkhanvilkar" target="_blank" rel="noopener noreferrer">
              <FaGithub size={15} className="footer-icon footer-icon-github" />
            </a>
            <a href="https://www.linkedin.com/in/vipul-khanvilkar-184890242/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={15} className="footer-icon footer-icon-linkedin" />
            </a>
            <a href="mailto:vipulkhanvilkar2@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={15} className="footer-icon footer-icon-email" />
            </a>
          </div>
          <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} All rights reserved By <span className="highlight">Vipul</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;