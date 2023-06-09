import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledCard = styled(Card)({
  maxWidth: 345,
  position: "relative",
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  position: "relative",
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: theme.palette.common.white,
  opacity: ".8",
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
}));

function ProductCard({ product, addToCart }) {
  const [hover, setHover] = useState(false);

  return (
    <StyledCard
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledCardMedia image={product.thumbnail} title={product.title} />
      {hover && (
        <StyledIconButton
          color="primary"
          onClick={(event) => {
            event.preventDefault();
            addToCart(product);
          }}
        >
          <ShoppingCartIcon />
        </StyledIconButton>
      )}
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography gutterBottom variant="h5" component="div" mb={2}>
            {product.title}
          </Typography>
          <Typography variant="h5" color="primary" mb={2}>
            ${product.price.toFixed(2)}
          </Typography>
          <Link to={`/product/${product.id}`}>
            <Typography variant="body1" color="text.secondary" mb={2}>
              See More
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default ProductCard;
