import React from "react";
import ReactDOM from "react-dom/client";
import { createMuiTheme,ThemeProvider } from "styled-components";
import App from "./App";



const theme

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
