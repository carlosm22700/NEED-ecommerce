import { useState } from "react"; // Import useState for managing local state
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PaymentForm from "../../components/PaymentForm/PaymentForm";

function CheckoutPage({ cart, total, clearCart }) {
  // don't forget to receive clearCart from props
  const navigate = useNavigate();
  const [paymentSuccessful, setPaymentSuccessful] = useState(false); // Local state to manage payment status
  const orderNumber = Math.floor(Math.random() * 1000000);

  const handleGoBack = () => {
    navigate("/shop");
  };

  const handleSuccessfulPayment = () => {
    // Upon successful payment, set paymentSuccessful to true and clear the cart
    setPaymentSuccessful(true);
    clearCart();
  };

  // If payment has not been made yet, show payment form. Otherwise, show confirmation message.
  return paymentSuccessful ? (
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
        You will receive an order summary through email
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
        Place New Order
      </Button>
    </Box>
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      marginTop={4} // Add marginTop
    >
      <PaymentForm onSuccess={handleSuccessfulPayment} />
    </Box>
  );
}

export default CheckoutPage;
