import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => {
    setShowFull((prev) => !prev);
  };

  const maxLength = 60; // Character limit before truncation
  const shouldTruncate = product.description.length > maxLength;
  const displayedDescription = showFull
    ? product.description
    : product.description.slice(0, maxLength) + (shouldTruncate ? "..." : "");

  return (
    <div className="product-container">
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">
          {displayedDescription}
          {shouldTruncate && (
            <span className="see-more" onClick={toggleDescription}>
              {showFull ? " See Less" : " See More"}
            </span>
          )}
        </p>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
