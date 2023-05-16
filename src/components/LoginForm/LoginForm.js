import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        label="Email"
        type="text"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        LOG IN
      </Button>
      <Typography color="error" sx={{ mt: 2 }}>
        {error}
      </Typography>
    </Box>
  );
}
