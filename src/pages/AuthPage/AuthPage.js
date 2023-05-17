// import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import LoginForm from "../../components/LoginForm/LoginForm";
// import { useState } from "react";
// import { Button, Typography, Box, Grid, Paper } from "@mui/material";
// import { styled } from "@mui/system";

// const StyledButton = styled(Button)({
//   backgroundColor: "#3f51b5",
//   color: "white",
//   padding: "1em 2em",
//   "&:hover": {
//     backgroundColor: "#303f9f",
//   },
// });

// const StyledPaper = styled(Paper)({
//   padding: "2rem",
//   width: "80%",
//   maxWidth: "400px",
//   minHeight: "30vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
// });

// export default function AuthPage({ setUser }) {
//   const [showLoginForm, setShowLoginForm] = useState(true);

//   return (
//     <Grid container spacing={2} style={{ minHeight: "100vh" }}>
//       <Grid
//         item
//         xs={12}
//         sm={6}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Box textAlign="center">
//           <StyledButton onClick={() => setShowLoginForm(!showLoginForm)}>
//             {showLoginForm ? "Sign Up" : "Log In"}
//           </StyledButton>
//           <Typography variant="h5" gutterBottom style={{ marginTop: "4vmin" }}>
//             {showLoginForm ? "Log In" : "Sign Up"}
//           </Typography>
//           <Button
//             variant="text"
//             onClick={() => setShowLoginForm(!showLoginForm)}
//           >
//             {showLoginForm
//               ? "Don't have an account? Sign Up"
//               : "Already have an account? Log In"}
//           </Button>
//         </Box>
//       </Grid>
//       <Grid
//         item
//         xs={12}
//         sm={6}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <StyledPaper>
//           {showLoginForm ? (
//             <LoginForm setUser={setUser} />
//           ) : (
//             <SignUpForm setUser={setUser} />
//           )}
//         </StyledPaper>
//       </Grid>
//     </Grid>
//   );
// }

import { useState } from "react";
import { Button, Typography, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

const StyledButton = styled(Button)({
  backgroundColor: "#3f51b5",
  color: "white",
  padding: "1em 2em",
  "&:hover": {
    backgroundColor: "#303f9f",
  },
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
  const navigate = useNavigate(); // Add this line

  const handleUserChange = (user) => {
    setUser(user);
    navigate("/"); // Add this line
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
          <StyledButton onClick={() => setShowLoginForm(!showLoginForm)}>
            {showLoginForm ? "Sign Up" : "Log In"}
          </StyledButton>
          <Typography variant="h5" gutterBottom style={{ marginTop: "4vmin" }}>
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
            <LoginForm setUser={handleUserChange} />
          ) : (
            <SignUpForm setUser={handleUserChange} />
          )}
        </StyledPaper>
      </Grid>
    </Grid>
  );
}
