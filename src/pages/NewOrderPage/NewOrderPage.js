import React, { useEffect, useState } from "react";
import { getProducts } from "../../utilities/products-service";
import ProductCard from "../../components/ProductCard/ProductCard";

function NewOrderPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    }

    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default NewOrderPage;
