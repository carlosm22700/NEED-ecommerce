import { Link as RouterLink } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          color="inherit"
          component={RouterLink}
          to="/orders/shop"
          sx={{ marginRight: 2 }}
        >
          <Avatar alt="Logo" src="/TechMart-logos_transparent.png" />
        </Button>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="cart"
          component={RouterLink}
          to="/cart"
        >
          <ShoppingCartIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome, {user ? user.name : ""}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button color="inherit" onClick={handleLogOut}>
            Log Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
