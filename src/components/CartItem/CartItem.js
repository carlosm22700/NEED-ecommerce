// src/components/CartItem/CartItem.js

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function CartItem({ product, removeFromCart }) {
  return (
    <Card variant="outlined" sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography color="text.secondary">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => removeFromCart(product.id)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;
