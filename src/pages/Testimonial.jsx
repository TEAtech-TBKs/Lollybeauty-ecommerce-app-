import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Why Our Customers Love Us</h2>
      <div className="testimonial-container">

        <div className="testimonial-card quality">
          <h3 className="testimonial-title">Unmatched Quality</h3>
          <p className="review">
            “Every product feels luxurious. The packaging, the scent, the texture — all top-tier.”
          </p>
          <h4 className="reviewer">— Ada, Lagos</h4>
        </div>

        <div className="testimonial-card delivery">
          <h3 className="testimonial-title">Fast Delivery</h3>
          <p className="review">
            “My order arrived the next day! Super fast and neatly packaged. I’m impressed.”
          </p>
          <h4 className="reviewer">— Zainab, Abuja</h4>
        </div>

        <div className="testimonial-card effectiveness">
          <h3 className="testimonial-title">Visible Results</h3>
          <p className="review">
            “I noticed a real difference in my skin after just one week. These products work!”
          </p>
          <h4 className="reviewer">— Chiamaka, Ibadan</h4>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
