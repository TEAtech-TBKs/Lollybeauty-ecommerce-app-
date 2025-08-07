import React, { useState } from 'react';
import './FAQs.css';

const faqData = [
  {
    question: 'How effective are your beauty products?',
    answer: 'Our products are formulated with high-quality ingredients to deliver visible and lasting results.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Delivery usually takes 2–5 business days depending on your location.'
  },
  {
    question: 'Are the products suitable for all skin types?',
    answer: 'Yes, our products are tested to be safe for various skin types. However, please check individual labels or consult with us for recommendations.'
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faqs-section">
      <h2 className="faqs-heading">FAQs</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
