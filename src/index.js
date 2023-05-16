import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./pages/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
