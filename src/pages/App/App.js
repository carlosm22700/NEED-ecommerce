// import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import CartPage from "../CartPage/CartPage";
import WelcomePage from "../../components/WelcomePage/WelcomePage";

import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
                path="/orders/shop"
                element={<NewOrderPage addToCart={addToCart} />}
              />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route
                path="/cart"
                element={
                  <CartPage cart={cart} removeFromCart={removeFromCart} />
                }
              />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
