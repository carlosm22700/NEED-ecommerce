import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  CardMedia,
  Grid,
} from "@mui/material";

function CartItem({ product, removeFromCart, updateQuantity }) {
  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);

    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{ marginTop: 2, padding: 2, border: "1px solid gray" }}
    >
      <CardContent>
        <Typography variant="h6" align="center" fontWeight="bold">
          {product.title}
        </Typography>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4} sm={4}>
            <Typography variant="h6" color="primary">
              ${product.price.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} container justifyContent="center">
            <CardMedia
              component="img"
              image={product.thumbnail}
              alt={product.title}
              sx={{ width: 100, height: 100 }} // adjust as needed
            />
          </Grid>
          <Grid item xs={4} sm={4} container justifyContent="flex-end">
            <TextField
              type="number"
              value={product.quantity}
              onChange={handleQuantityChange}
              InputProps={{
                inputProps: { min: 1 },
                sx: { width: 50 },
              }}
            />
          </Grid>
        </Grid>
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
