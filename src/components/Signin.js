import React from "react";
import {
  TextField,
  Box,
  Button,
  InputAdornment,
  Paper,
  Typography,
  Link,
} from "@mui/material";

const signin = () => {
  return (
    <Box>
      <Paper>
        <Typography>Sign in with your email</Typography>
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
          defaultValue="Password1234"
          InputProps={{
            endAdornment: <InputAdornment position="end">hide</InputAdornment>,
          }}
        />
        <Typography margin={2}>
          <Link>Forget password?</Link>
        </Typography>
        <Button variant="contained">
          <Link>Sign in</Link>
        </Button>
        <Typography
          variant="h6"
          sx={{
            fontSize: "12px",
          }}
        >
          By signing in, you are agreeing to our{" "}
          <Link>
            Terms & Conditions and <br /> Privacy Policy
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default signin;
