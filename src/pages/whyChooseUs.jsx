import React from 'react';
import img1 from "../assets/images/cosmetics_smile_face.jpeg"
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="why-heading">Why Choose LollyBeauty</h2>
      <div className="reasons-container">
        <div className="reason-card1">
          <h3>100% Natural</h3><br />
          <p>Formulated with pure, skin-loving ingredients — free from harsh chemicals and synthetic fillers.</p>
        </div>
        <div className="reason-card2">
          <h3>Ethical Beauty</h3><br />
          <p>Beauty with a conscience — all our products are cruelty-free and never tested on animals.</p>
        </div>
        <div className="reason-card3">
          <h3>Swift Delivery</h3><br />
          <p>Expect doorstep delivery within 24–48 hours — because your beauty can't wait.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
