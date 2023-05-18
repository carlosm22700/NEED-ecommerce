import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "../../utilities/products-service";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  Grid,
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";

function NewOrderPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    }

    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedCategory, skip, searchTerm]);

  async function fetchData() {
    const stringSearchTerm = typeof searchTerm === "string" ? searchTerm : "";
    const fetchedProducts = await getProducts(
      selectedCategory,
      4,
      skip,
      stringSearchTerm
    );
    if (skip === 0) {
      setProducts(fetchedProducts.products);
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        ...fetchedProducts.products,
      ]);
    }
  }

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + 4);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSkip(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value || "");
    setSkip(0);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <FormControl variant="outlined" sx={{ marginRight: "20px" }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories.map((category, index) => (
              <MenuItem value={category} key={index}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Box>
      <Grid
        container
        spacing={3}
        justifyContent="space-around"
        alignItems="center"
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          paddingBottom: "25px",
        }}
      >
        <Button variant="contained" onClick={handleLoadMore}>
          Load More
        </Button>
      </Box>
    </Container>
  );
}

export default NewOrderPage;
