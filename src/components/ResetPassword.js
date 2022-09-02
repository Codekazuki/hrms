import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { textTransform } from "@mui/system";

const ResetPassword = () => {
  return (
    <Box
      sx={{
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
        <Button
          variant="contained"
          sx={{
            margin: 2,
            width: "90%",
            textTransform: "none",
          }}
        >
          <Link sx={{ color: "white" }}>Reset Password</Link>
        </Button>
        <Typography sx={{ textAlign: "left", padding: "15px" }}>
          {" "}
          <Link sx={{ textDecoration: "none" }}>Back to Sign in </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default ResetPassword;
