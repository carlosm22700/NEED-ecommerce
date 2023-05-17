import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CheckoutPage({ cart }) {
  const navigate = useNavigate();
  const total = cart.reduce((total, product) => total + product.price, 0);
  const orderNumber = Math.floor(Math.random() * 1000000);

  const handleGoBack = () => {
    navigate("/orders/shop");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Thank you for your purchase!
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your order number is {orderNumber}
      </Typography>
      <Typography variant="body1" gutterBottom>
        You will receive an order summary and delivery details through email.
      </Typography>
      <List>
        {cart.map((product, index) => (
          <ListItem key={index}>
            <Typography variant="body1">
              {product.title}: ${product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" gutterBottom>
        Total: ${total.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoBack}>
        Continue Shopping
      </Button>
    </Box>
  );
}

export default CheckoutPage;
