import {
  Box,
  Button,
  InputAdornment,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { width } from "@mui/system";

const home = () => {
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
              endAdornment: (
                <InputAdornment position="end">hide</InputAdornment>
              ),
            }}
          />
        </Stack>

        <Typography margin={2} textAlign="left">
          <Link>Forget Password</Link>
        </Typography>
        <Button variant="contained" margin={2}>
          <Link sx={{ color: "white" }}>Sign in</Link>
        </Button>
        <Typography
          variant="h6"
          sx={{
            fontSize: "12px",
          }}
        >
          By signing in, you are agreeing to our
          <Link>
            Terms & Conditions and <br /> Privacy Policy
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default home;
