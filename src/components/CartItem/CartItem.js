// // import {
// //   Card,
// //   CardContent,
// //   Typography,
// //   CardActions,
// //   Button,
// //   TextField,
// // } from "@mui/material";

// // function CartItem({ product, removeFromCart, updateQuantity }) {
// //   const handleQuantityChange = (event) => {
// //     const newQuantity = Number(event.target.value);

// //     if (newQuantity > 0) {
// //       updateQuantity(product.id, newQuantity);
// //     }
// //   };

// //   return (
// //     <Card variant="outlined" sx={{ marginTop: 2 }}>
// //       <CardContent>
// //         <Typography variant="h6">{product.title}</Typography>
// //         <Typography color="text.secondary">
// //           ${product.price} x
// //           <TextField
// //             type="number"
// //             value={product.quantity}
// //             onChange={handleQuantityChange}
// //             InputProps={{ inputProps: { min: 1 } }}
// //           />
// //         </Typography>
// //       </CardContent>
// //       <CardActions>
// //         <Button size="small" onClick={() => removeFromCart(product.id)}>
// //           Remove
// //         </Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }

// // export default CartItem;
// // CartItem.js
// import {
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   TextField,
//   Box,
// } from "@mui/material";

// function CartItem({ product, removeFromCart, updateQuantity }) {
//   const handleQuantityChange = (event) => {
//     const newQuantity = Number(event.target.value);

//     if (newQuantity > 0) {
//       updateQuantity(product.id, newQuantity);
//     }
//   };

//   return (
//     <Card variant="outlined" sx={{ marginTop: 2, padding: 2 }}>
//       <CardContent>
//         <Typography variant="h6" align="center" fontWeight="bold">
//           {product.title}
//         </Typography>
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography variant="body1">${product.price.toFixed(2)}</Typography>
//           <TextField
//             type="number"
//             value={product.quantity}
//             onChange={handleQuantityChange}
//             InputProps={{
//               inputProps: { min: 1 },
//               sx: { width: 50 },
//             }}
//           />
//         </Box>
//       </CardContent>
//       <CardActions>
//         <Button size="small" onClick={() => removeFromCart(product.id)}>
//           Remove
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// export default CartItem;

// CartItem.js
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Box,
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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <Typography variant="h6" color="primary">
            ${product.price.toFixed(2)}
          </Typography>
          <TextField
            type="number"
            value={product.quantity}
            onChange={handleQuantityChange}
            InputProps={{
              inputProps: { min: 1 },
              sx: { width: 50, marginLeft: 2 },
            }}
          />
        </Box>
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
