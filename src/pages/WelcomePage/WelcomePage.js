import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./landing.jpg";

const StyledBox = styled(Box)({
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
});

const GradientText = styled(Typography)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? `linear-gradient(45deg, #483D8B 30%, #6A5ACD 90%)`
      : `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow:
    theme.palette.mode === "dark"
      ? "2px 2px 8px rgba(255, 255, 255, 0.3)"
      : "2px 2px 8px rgba(0, 0, 0, 0.3)",
}));

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop");
  };

  return (
    <StyledBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <GradientText variant="h1" component="h1" gutterBottom>
        Welcome to NEED
      </GradientText>

      <GradientText variant="h3" component="h2" gutterBottom>
        You Need? We Got.
      </GradientText>
      <Button variant="contained" color="primary" onClick={handleShopNow}>
        Shop Now
      </Button>
    </StyledBox>
  );
};

export default WelcomePage;
