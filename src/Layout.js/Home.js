import {
  Box,
  Button,
  InputAdornment,
  makeStyles,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import TextField, { textFieldClasses } from "@mui/material/TextField";

const home = () => {
  return (
    <Box
      sx={{
        // background: "white",
        padding: "20px",
        width: "400px",
        margin: "auto",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#E5E5E5",
        }}
      >
        HrPay
      </Typography>
      <Typography
        sx={{
          color: "#B3CDFF",
          weight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          // font: "Ubuntu",
        }}
      >
        This is dummy text that will be replaced later by <br />
        proper content. The replacement text shouldn't be <br />
        more than three lines
      </Typography>
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
          {" "}
          Sign in with your email
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Email address"
          defaultValue="example@mail.com"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="Password123"
          InputProps={{
            endAdornment: <InputAdornment position="end">hide</InputAdornment>,
          }}
        />
        <Typography>
          <a href="#">Forget Password?</a>
        </Typography>
        <Button variant="contained">
          <a href="#">Sign in</a>
        </Button>
        <Typography
          variant="h6"
          sx={{
            fontSize: "12px",
          }}
        >
          By signing in, you are agreeing to our{" "}
          <a href="#">
            Terms & Conditions and <br /> Privacy Policy
          </a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default home;
