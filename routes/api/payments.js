const express = require("express");
const router = express.Router();
const stripe = require("../../config/stripeApi");

router.post("/create-payment-intent", async (req, res) => {
  const { amount, paymentMethodId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method: paymentMethodId,
      // customer: customer.id, ///thisssssssss
      confirm: true,
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
