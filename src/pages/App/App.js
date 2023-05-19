import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import CartPage from "../CartPage/CartPage";
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import CheckoutPage from "../CheckoutPage/CheckoutPage";
import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";

import { getUser } from "../../utilities/users-service";

const stripePromise = loadStripe(
  "pk_test_51N7ngMDgR2kEi4Rpg3DQUl9dFZ7AwmSZzHdJKv77QPPaZ7WfHHfm4Vy8AYY9q0pkfgR52G5gYh0XkQKaCSVK1zSO00NGomke8H"
);

function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingProduct = cart.find((p) => p.id === productId);

    if (existingProduct.quantity > 1) {
      const updatedCart = cart.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
      );
      setCart(updatedCart);
    } else {
      setCart(cart.filter((product) => product.id !== productId));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotal(newTotal);
  };

  const updateQuantity = (productId, quantity) => {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Elements stripe={stripePromise}>
        <main className="App">
          {user ? (
            <>
              <NavBar
                user={user}
                setUser={setUser}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route
                  path="/shop"
                  element={<NewOrderPage addToCart={addToCart} />}
                />
                <Route
                  path="/cart"
                  element={
                    <CartPage
                      cart={cart}
                      removeFromCart={removeFromCart}
                      updateQuantity={updateQuantity}
                      clearCart={clearCart}
                      calculateTotal={calculateTotal}
                      total={total}
                    />
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <CheckoutPage
                      cart={cart}
                      total={total}
                      clearCart={clearCart}
                    />
                  }
                />
                <Route
                  path="/product/:id"
                  element={<ProductDetailsPage addToCart={addToCart} />}
                />
              </Routes>
            </>
          ) : (
            <AuthPage setUser={setUser} />
          )}
        </main>
      </Elements>
    </ThemeProvider>
  );
}

export default App;
