import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav>
      <Link to="/cart">
        <Button>
          <ShoppingCartIcon /> Cart
        </Button>
      </Link>
      {/* <Link to="/orders">Order History</Link> */}
      &nbsp; | &nbsp;
      <Link to="/orders/shop">Shop</Link>
      &nbsp; | &nbsp;
      {user && <span>&nbsp;Welcome, {user.name}</span>}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
