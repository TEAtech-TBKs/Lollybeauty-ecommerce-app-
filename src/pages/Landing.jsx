// src/pages/Landing.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Landing.css"; // ✅ Import the CSS
import About from "./About";
import Offer from "./Offer";
import Testimonial from "./Testimonial";
import ContactSupport from "./ContactSupport";
import FAQs from "./FAQs";
import WhyChooseUs from "../pages/WhyChooseUs";

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <main className="flex-grow">
        <section className="hero-section">
  <div className="filter">
    <div className="cta-wrapper">
      <h1>Welcome to LollyBeauty</h1>
      <p>Discover premium skincare and makeup products crafted to enhance your natural beauty.</p>
      <button className="hero-btn">Shop Now</button>
    </div>
  </div>
</section>

        <Offer/>
        <section className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
      <About/>
      <WhyChooseUs/>
      <Testimonial/>
      <ContactSupport/>
      <FAQs/>
      <Footer />
    </div>
  );
};

export default Landing;
