import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import { Button, Typography, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  border: 0,
  borderRadius: "50%",
  backgroundColor: "#ff6347",
  border: "0.6vmin solid #d2b48c",
  color: "#f5deb3",
  display: "flex",
  flexDirection: "column",
  fontSize: "2.7vmin",
  height: "12vmin",
  width: "12vmin",
  justifyContent: "center",
  alignItems: "center",
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
          <StyledButton onClick={() => setShowLoginForm(!showLoginForm)}>
            TechMart
          </StyledButton>
          <Typography
            variant="h5"
            gutterBottom
            style={{ marginTop: "4vmin", color: "#f5deb3" }}
          >
            {showLoginForm ? "Log In" : "Sign Up"}
          </Typography>
          <Button
            variant="text"
            onClick={() => setShowLoginForm(!showLoginForm)}
          >
            {showLoginForm
              ? "Don't have an account? Sign Up"
              : "Already have an account? Log In"}
          </Button>
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
            <LoginForm setUser={setUser} />
          ) : (
            <SignUpForm setUser={setUser} />
          )}
        </StyledPaper>
      </Grid>
    </Grid>
  );
}
