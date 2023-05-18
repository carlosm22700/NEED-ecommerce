import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/orders/shop");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to NEED
      </Typography>
      <Typography variant="h3" component="h1" gutterBottom>
        Its In The Name
      </Typography>
      <Button variant="contained" color="primary" onClick={handleShopNow}>
        Shop Now
      </Button>
    </Box>
  );
};

export default WelcomePage;
