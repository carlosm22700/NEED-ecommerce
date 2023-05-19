import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Button, Box, TextField, CircularProgress } from "@mui/material";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#424770",
      color: "#424770",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#424770",
      },
      "::placeholder": {
        color: "#424770",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const CheckoutForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }

    if (!error) {
      console.log("Stripe 23 | paymentMethod", paymentMethod);
      // Next step here is to send the `paymentMethod.id` to your server to process the charge

      const response = await fetch("/api/payments/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: 1000, // replace with the actual amount
        }),
      });

      const transactionResult = await response.json();

      if (transactionResult.error) {
        console.log(transactionResult.error);
        setLoading(false);
        return;
      }

      onSuccess();
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Box margin="normal" width="100%" maxWidth="500px">
          <CardElement options={CARD_OPTIONS} />
        </Box>
        <Box marginTop={2}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!stripe || loading}
            fullWidth
          >
            {loading ? <CircularProgress /> : "Pay"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CheckoutForm;
