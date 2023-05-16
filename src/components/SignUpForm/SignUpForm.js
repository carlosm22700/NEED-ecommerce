import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { TextField, Button, Typography, Box } from "@mui/material";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;

      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disabled = this.state.password !== this.state.confirm;
    return (
      <Box
        component="form"
        autoComplete="off"
        onSubmit={this.handleSubmit}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          label="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Confirm"
          type="password"
          name="confirm"
          value={this.state.confirm}
          onChange={this.handleChange}
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          type="submit"
          disabled={disabled}
          variant="contained"
          sx={{ mt: 2 }}
        >
          SIGN UP
        </Button>
        <Typography color="error" sx={{ mt: 2 }}>
          {this.state.error}
        </Typography>
      </Box>
    );
  }
}
