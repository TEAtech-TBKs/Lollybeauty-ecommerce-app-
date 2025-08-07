// ContactSupport.jsx
import React from 'react';
import './ContactSupport.css';

const ContactSupport = () => {
  return (
    <section className="contact-support">
      <h2>Contact & Support</h2>
      <p>We're here to help! Reach out to us through any of the following channels:</p>

      <div className="contact-grid">
        <div className="contact-box">
          <h3>Email</h3>
          <p>support@lollybeauty.com</p>
        </div>
        <div className="contact-box">
          <h3>Phone</h3>
          <p>+234 800 123 4567</p>
        </div>
        <div className="contact-box">
          <h3>Live Chat</h3>
          <p>Available Mon–Sat, 9AM – 6PM</p>
        </div>
        <div className="contact-box">
          <h3>Social Media</h3>
          <p>@lollybeauty (Instagram, Twitter, Facebook)</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
