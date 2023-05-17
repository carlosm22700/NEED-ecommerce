import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  maxWidth: 345,
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

function ProductCard({ product, addToCart }) {
  return (
    <StyledCard>
      <StyledCardMedia image={product.thumbnail} title={product.title} />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography gutterBottom variant="h5" component="div" mb={1}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            {product.description}
          </Typography>
          <Typography variant="body1" mb={2}>
            {product.price}
          </Typography>
          <Button variant="outlined" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default ProductCard;
