import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  maxWidth: 345,
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
});

function ProductCard({ product }) {
  return (
    <StyledCard>
      <StyledCardMedia image={product.thumbnail} title={product.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1">{product.price}</Typography>
        <Button variant="outlined">Add To Cart</Button>
      </CardContent>
    </StyledCard>
  );
}

export default ProductCard;
