import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import CartPage from "../CartPage/CartPage"; //New import

import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState([]); //New state for cart

  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components here */}
            <Route
              path="/orders/shop"
              element={<NewOrderPage addToCart={addToCart} />}
            />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route
              path="/cart"
              element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
