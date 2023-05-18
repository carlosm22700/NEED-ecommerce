import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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
          <Link to={`/product/${product.id}`}>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Details
            </Typography>
          </Link>
          <Typography variant="h6" color="primary" mb={2}>
            ${product.price.toFixed(2)}
          </Typography>
          {/*<Button
            variant="outlined"
            onClick={(event) => {
              event.preventDefault();
              addToCart(product);
            }}
          >
            Add To Cart
          </Button>*/}
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default ProductCard;
