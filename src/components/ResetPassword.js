import React from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { textTransform } from "@mui/system";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <Box>
      <Paper
        sx={{
          background: "white",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            padding: "15px",
          }}
        >
          Forgot password
        </Typography>
        <Stack direction="column" spacing={2} margin={3}>
          <TextField
            required
            id="outlined-required"
            label="Email address"
            defaultValue="example@mail.com"
            InputProps={{ readOnly: true }}
          />
        </Stack>

        <Typography variant="caption">
          Enter the email address associated with your account
        </Typography>
        <Link style={{ textDecoration: "none" }} to="/resetemail">
          <Button variant="contained">Reset Password</Button>
        </Link>
        <Typography sx={{ textAlign: "left", padding: "15px" }}>
          {" "}
          <Link style={{ textDecoration: "none" }} to="/signin">
            Back to Sign in{" "}
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ResetPassword;
