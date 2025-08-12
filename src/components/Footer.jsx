import React from "react";
import "./Footer.css";
import ContactSupport from "../pages/ContactSupport";

const Footer = () => {
  return (
    <div className="fb">
      <div className="footer-body">
        <footer className="footer">
          <div className="footer__content">
            <h2 className="footer__logo">LollyBeauty</h2>
            <p className="footer__text">
              Elevating everyday beauty through elegance, quality, and care.
            </p>
            <p className="footer__tagline">
              Stay radiant, stay timeless — with LollyBeauty.
            </p>
          </div>
        </footer>
          <ContactSupport/>
      </div>
            <div className="line"></div>
            <div className="footer__links">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Shipping & Returns</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} LollyBeauty. All rights reserved.
            </p>
    </div>
  );
};

export default Footer;
