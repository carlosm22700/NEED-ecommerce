import CartItem from "../../components/CartItem/CartItem";
import { Container, Typography, Box, Button } from "@mui/material";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((total, product) => total + product.price, 0);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">No items in cart</Typography>
      ) : (
        cart.map((product, index) => (
          <CartItem
            key={index}
            product={product}
            removeFromCart={removeFromCart}
          />
        ))
      )}
      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
}

export default CartPage;
