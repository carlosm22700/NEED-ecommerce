import React, { useEffect, useState } from "react";
import { getProducts } from "../../utilities/products-service";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Grid, Container } from "@mui/material";

function NewOrderPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts.slice(0, 6));
    }

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Grid
        container
        spacing={3}
        justifyContent="space-around"
        alignItems="center"
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NewOrderPage;
