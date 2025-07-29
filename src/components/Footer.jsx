// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__logo">BeautyVerse 💄</h2>
        <p className="footer__text">Your go-to place for all things beauty.</p>
        <div className="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} BeautyVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
