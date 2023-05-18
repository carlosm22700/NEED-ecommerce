import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../LandingPageImg/landing.jpg"; // assuming you have an image in your project folder

const StyledBox = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
});

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/orders/shop");
  };

  return (
    <StyledBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        style={{ color: "#ffffff", textShadow: "2px 2px 4px #000000" }}
      >
        Welcome to NEED
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        style={{ color: "#ffffff", textShadow: "2px 2px 4px #000000" }}
      >
        Its In The Name
      </Typography>
      <Button variant="contained" color="primary" onClick={handleShopNow}>
        Shop Now
      </Button>
    </StyledBox>
  );
};

export default WelcomePage;
