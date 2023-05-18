import { useState } from "react";
import { Button, Typography, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

const StyledButton = styled(Button)({
  backgroundColor: "#3f51b5",
  color: "white",
  padding: "1em 2em",
  "&:hover": {
    backgroundColor: "#303f9f",
  },
  borderRadius: "30px",
  boxShadow: "0px 2px 10px #888",
});

const StyledPaper = styled(Paper)({
  padding: "2rem",
  width: "80%",
  maxWidth: "400px",
  minHeight: "30vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export default function AuthPage({ setUser }) {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const navigate = useNavigate();

  const handleUserChange = (user) => {
    setUser(user);
    navigate("/");
  };

  return (
    <Grid container spacing={2} style={{ minHeight: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center">
          <StyledButton
            onClick={() => setShowLoginForm(!showLoginForm)}
            endIcon={<ArrowForwardIcon />}
          >
            {showLoginForm ? "Sign Up" : "Log In"}
          </StyledButton>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginTop: "4vmin", cursor: "pointer" }}
            onClick={() => setShowLoginForm(!showLoginForm)}
          >
            {showLoginForm
              ? "Don't have an account? Sign Up"
              : "Already have an account? Log In"}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StyledPaper>
          {showLoginForm ? (
            <LoginForm setUser={handleUserChange} />
          ) : (
            <SignUpForm setUser={handleUserChange} />
          )}
        </StyledPaper>
      </Grid>
    </Grid>
  );
}
