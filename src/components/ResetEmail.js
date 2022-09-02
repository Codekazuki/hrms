import { Box, Link, Paper, Typography } from "@mui/material";
import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Container } from "@mui/system";

const ResetEmail = () => {
  return (
    <Paper
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
      <Box>
        <MarkEmailReadIcon />
      </Box>
      <Typography>Reset Email Sent </Typography>
      <Typography>
        To complete password reset,please click on <br />
        the reset password button in the email we sent <br /> to{" "}
        <Link>example@mail.com</Link>{" "}
      </Typography>
      <Typography variant="caption">
        Didn't receive the password reset email? <Link>Resend</Link>
      </Typography>
      <Typography
        sx={{
          textAlign: "left",
          padding: "10px",
        }}
      >
        {" "}
        <Link
          sx={{
            textDecoration: "none",
          }}
        >
          Back to Sign in
        </Link>{" "}
      </Typography>
    </Paper>
  );
};

export default ResetEmail;
