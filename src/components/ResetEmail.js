import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const ResetEmail = () => {
  return (
    <Paper>
      <Box>
        <MarkEmailReadIcon />
      </Box>
      <Typography>Reset Email Sent </Typography>
      <Typography>
        To complete password reset,please click on <br />
        the reset password button in the email we sent <br /> to{" "}
        <Link style={{ textDecoration: "none" }} to="/passwordresetlogo">
          example@mail.com
        </Link>{" "}
      </Typography>
      <Typography variant="caption">
        Didn't receive the password reset email?{" "}
        <Link style={{ textDecoration: "none" }} to="/passwordresetlogo">
          Resend
        </Link>
      </Typography>
      <Typography
        sx={{
          textAlign: "left",
          padding: "10px",
        }}
      >
        {" "}
        <Link style={{ textDecoration: "none" }} to="/signin">
          Back to Sign in
        </Link>{" "}
      </Typography>
    </Paper>
  );
};

export default ResetEmail;
