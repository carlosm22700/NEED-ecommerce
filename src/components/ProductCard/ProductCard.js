import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt={product.title} />
      {/* Add your "Add to cart" button here */}
    </div>
  );
}

export default ProductCard;
