import {
  Button,
  InputAdornment,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import TextField, { textFieldClasses } from "@mui/material/TextField";

const Signin = (child) => {
  return (
    <Paper
      sx={{
        background: "white",
      }}
    >
      <Typography
        sx={{
          textAlign: "left",
          padding: "10px",
        }}
      >
        Sign in with your email
      </Typography>
      <Stack direction="column" spacing={2} margin={3}>
        <TextField
          required
          id="outlined-required"
          label="Email address"
          defaultValue="example@mail.com"
          InputProps={{ readOnly: true }}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="Password1234"
          InputProps={{
            readOnly: true,
            endAdornment: <InputAdornment position="end">hide</InputAdornment>,
          }}
        />
      </Stack>

      <Typography margin={2} textAlign="left">
        <Link to="/resetpassword" style={{ textDecoration: "none" }}>
          Forget Password
        </Link>
      </Typography>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button
          style={{ textDecoration: "none" }}
          variant="contained"
          margin={2}
        >
          Sign in
        </Button>
      </Link>
      <Typography
        variant="h6"
        sx={{
          fontSize: "12px",
        }}
      >
        By signing in, you are agreeing to our
        <Link style={{ textDecoration: "none" }} to="/orgdashboard">
          Terms & Conditions and <br /> Privacy Policy
        </Link>
      </Typography>
    </Paper>
  );
};

export default Signin;
