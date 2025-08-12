import React, { useState } from 'react';
import './FAQs.css';

const faqData = [
  {
    question: 'How effective are your beauty products?',
    answer: 'Our products are of high quality and a 100% authentic '
  },
  {
    question: 'How long does delivery take?',
    answer: 'Depends on your location but we make sure products get to you as fast as possible '
  },
  {
    question: 'Can i get a refund if i dont like the product?',
    answer: "if product is not tampered with and still in its original packaging we can give you a refund "
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
