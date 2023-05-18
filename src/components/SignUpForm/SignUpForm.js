import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
    showPassword: false,
    showConfirm: false,
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
      delete formData.showPassword;
      delete formData.showConfirm;

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
          type={this.state.showPassword ? "text" : "password"}
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
          variant="outlined"
          margin="normal"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    this.setState({ showPassword: !this.state.showPassword })
                  }
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm"
          type={this.state.showConfirm ? "text" : "password"}
          name="confirm"
          value={this.state.confirm}
          onChange={this.handleChange}
          required
          variant="outlined"
          margin="normal"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    this.setState({ showConfirm: !this.state.showConfirm })
                  }
                >
                  {this.state.showConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
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
