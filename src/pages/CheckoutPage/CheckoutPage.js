// import { Box, Typography, List, ListItem, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function CheckoutPage({ cart, total }) {
//   const navigate = useNavigate();
//   const orderNumber = Math.floor(Math.random() * 1000000);

//   const handleGoBack = () => {
//     navigate("/orders/shop");
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//     >
//       <Typography variant="h3" component="h1" gutterBottom>
//         Thank you for your purchase!
//       </Typography>
//       <Typography variant="h5" gutterBottom>
//         Your order number is {orderNumber}
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         You will receive an order summary through email
//       </Typography>
//       <List>
//         {cart.map((product, index) => (
//           <ListItem key={index}>
//             <Typography variant="body1">
//               {product.title}: ${product.price}
//             </Typography>
//           </ListItem>
//         ))}
//       </List>
//       <Typography variant="h5" gutterBottom>
//         Total: ${total.toFixed(2)}
//       </Typography>
//       <Button variant="contained" color="primary" onClick={handleGoBack}>
//         Place New Order
//       </Button>
//     </Box>
//   );
// }

// export default CheckoutPage;
// import { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { Box, Button, CircularProgress, TextField } from "@mui/material";
// import { styled } from "@mui/system";

// const StyledCardElement = styled(CardElement)(({ theme }) => ({
//   height: "40px",
//   padding: "10px 12px",
//   width: "100%",
//   color: theme.palette.text.primary,
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: "8px",
//   border: "1px solid transparent",
//   "&:focus": {
//     outline: "none",
//     border: `1px solid ${theme.palette.text.primary}`,
//   },
// }));

// const CARD_OPTIONS = {
//   iconStyle: "solid",
//   style: {
//     base: {
//       iconColor: "#c4f0ff",
//       color: "#32325d",
//       fontWeight: 500,
//       fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//       fontSize: "16px",
//       fontSmoothing: "antialiased",
//       ":-webkit-autofill": { color: "#fce883" },
//       "::placeholder": { color: "#87bbfd" },
//     },
//     invalid: {
//       iconColor: "#ffc7ee",
//       color: "#ffc7ee",
//     },
//   },
// };

// function PaymentForm({ onSuccess }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;
//     setLoading(true);
//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (!error) {
//       console.log("Stripe 23 | paymentMethod", paymentMethod);
//       // TODO: Add code to handle server request to make the actual charge
//       // onSuccess(); // Call the onSuccess function passed as a prop when payment succeeds
//     }
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         gap={2}
//         minHeight="100vh"
//       >
//         <TextField
//           label="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <TextField
//           label="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <Box width="100%" marginBottom={2}>
//           <StyledCardElement
//             options={{ ...CARD_OPTIONS, hidePostalCode: true }}
//           />
//         </Box>
//         <Button
//           variant="contained"
//           color="primary"
//           type="submit"
//           disabled={!stripe || loading}
//         >
//           {loading ? <CircularProgress /> : "Pay"}
//         </Button>
//       </Box>
//     </form>
//   );
// }

// export default PaymentForm;

// import { useState } from "react";
// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import { Box, Button, CircularProgress, TextField } from "@mui/material";
// import { styled } from "@mui/system";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";

// const createOptions = () => {
//   return {
//     style: {
//       base: {
//         fontSize: "16px",
//         color: "#424770",
//         letterSpacing: "0.025em",
//         fontFamily: "Source Code Pro, monospace",
//         "::placeholder": {
//           color: "#aab7c4",
//         },
//       },
//       invalid: {
//         color: "#9e2146",
//       },
//     },
//   };
// };

// const StyledCardNumberElement = styled(CardNumberElement)(({ theme }) => ({
//   height: "40px",
//   padding: "10px 12px",
//   color: "#424770",
//   backgroundColor: "#ffffff",
//   borderRadius: "8px",
//   border: "1px solid #424770",
//   boxShadow: "0 1px 3px 0 #d2d1d1",
//   "&:focus": {
//     outline: "none",
//     border: `1px solid ${theme.palette.text.primary}`,
//   },
// }));

// const StyledCardExpiryElement = styled(CardExpiryElement)(({ theme }) => ({
//   height: "40px",
//   padding: "10px 12px",
//   color: "#424770",
//   backgroundColor: "#ffffff",
//   borderRadius: "8px",
//   border: "1px solid #424770",
//   boxShadow: "0 1px 3px 0 #d2d1d1",
//   "&:focus": {
//     outline: "none",
//     border: `1px solid ${theme.palette.text.primary}`,
//   },
// }));

// const StyledCardCvcElement = styled(CardCvcElement)(({ theme }) => ({
//   height: "40px",
//   padding: "10px 12px",
//   color: "#424770",
//   backgroundColor: "#ffffff",
//   borderRadius: "8px",
//   border: "1px solid #424770",
//   boxShadow: "0 1px 3px 0 #d2d1d1",
//   "&:focus": {
//     outline: "none",
//     border: `1px solid ${theme.palette.text.primary}`,
//   },
// }));

// function PaymentForm({ onSuccess }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;
//     setLoading(true);

//     const cardNumberElement = elements.getElement(CardNumberElement);
//     const cardExpiryElement = elements.getElement(CardExpiryElement);
//     const cardCvcElement = elements.getElement(CardCvcElement);

//     // TODO: Complete the payment handling logic
//     // if (!error) {
//     //   console.log("Stripe 23 | paymentMethod", paymentMethod);
//     //   onSuccess();
//     // }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         gap={2}
//         minHeight="100vh"
//       >
//         <TextField
//           label="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <TextField
//           label="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           width="80%"
//           marginBottom={2}
//         >
//           <Box display="flex" alignItems="center" marginBottom={2} width="100%">
//             <CreditCardIcon color="action" style={{ marginRight: 10 }} />
//             <StyledCardNumberElement options={createOptions()} />
//           </Box>
//           <Box display="flex" alignItems="center" marginBottom={2} width="100%">
//             <ScheduleIcon color="action" style={{ marginRight: 10 }} />
//             <StyledCardExpiryElement options={createOptions()} />
//           </Box>
//           <Box display="flex" alignItems="center" marginBottom={2} width="100%">
//             <VpnKeyIcon color="action" style={{ marginRight: 10 }} />
//             <StyledCardCvcElement options={createOptions()} />
//           </Box>
//         </Box>
//         <Button
//           variant="contained"
//           color="primary"
//           type="submit"
//           disabled={!stripe || loading}
//         >
//           {loading ? <CircularProgress /> : "Pay"}
//         </Button>
//       </Box>
//     </form>
//   );
// }

// export default PaymentForm;

//--------------------------------//

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
    navigate("/orders/shop");
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
      <Typography variant="h3" component="h1" gutterBottom>
        Please make your payment:
      </Typography>
      <PaymentForm onSuccess={handleSuccessfulPayment} />
    </Box>
  );
}

export default CheckoutPage;
