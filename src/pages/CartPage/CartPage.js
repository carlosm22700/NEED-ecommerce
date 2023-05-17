// import CartItem from "../../components/CartItem/CartItem";
// import { Container, Typography, Box, Button } from "@mui/material";

// function CartPage({ cart, removeFromCart }) {
//   const total = cart.reduce((total, product) => total + product.price, 0);

//   return (
//     <Container>
//       <Box textAlign="center" marginTop={4}>
//         <Typography variant="h4" gutterBottom>
//           Your Shopping Cart
//         </Typography>
//       </Box>
//       {cart.length === 0 ? (
//         <Typography variant="h6">No items in cart</Typography>
//       ) : (
//         cart.map((product, index) => (
//           <CartItem
//             key={index}
//             product={product}
//             removeFromCart={removeFromCart}
//           />
//         ))
//       )}
//       <Box display="flex" justifyContent="space-between" marginTop={2}>
//         <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           disabled={cart.length === 0}
//         >
//           Proceed to Checkout
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default CartPage;

import CartItem from "../../components/CartItem/CartItem";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((total, product) => total + product.price, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Container>
      <Box textAlign="center" marginTop={4}>
        <Typography variant="h4" gutterBottom>
          Your Shopping Cart
        </Typography>
      </Box>
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
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
}

export default CartPage;
