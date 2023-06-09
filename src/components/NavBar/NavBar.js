import { Link as RouterLink } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function NavBar({ user, setUser, darkMode, toggleDarkMode }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between", height: "64px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/shop"
            sx={{
              marginRight: 2,
              //adjusts hightlight over NEED logo
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
            }}
          >
            <Avatar
              alt="Logo"
              src="/need.png"
              sx={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
              }}
            />
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
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
          </IconButton>
        </Box>
        <Typography variant="h6" component="div">
          Welcome, {user ? user.name : ""}
        </Typography>
        <Button color="inherit" onClick={handleLogOut}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
