// src/pages/Landing.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Landing.css"; // ✅ Import the CSS

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <main className="flex-grow">
        <section className="hero-section">
          <div className="filter">
            <h1>Welcome to LollyBeauty</h1>
            <p>Shop your favorite skincare, makeup, and more!</p>
          </div>
        </section>

        <section className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
