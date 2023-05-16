import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      {/* Add your "Add to cart" button here */}
    </div>
  );
}

export default ProductCard;
