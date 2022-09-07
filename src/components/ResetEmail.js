import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Image from "../assets/Emailsent.svg";

import { Link } from "react-router-dom";

const ResetEmail = () => {
  return (
    <Paper
      sx={{
        // height: "320px",
        left: "0%",
        right: "0%",
        top: "0.03px",
        background: "#FFFFFF",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <Box>
        <img src={Image} alt="ouch!/" />
      </Box>
      <Typography
        sx={{
          position: "absolute",
          width: "180px",
          height: "31px",
          left: "calc(50% - 180px/2)",
          top: "168.03px",
          fontWeight: "500",
          fontSize: "23px",
          lineHeight: "133%",
          textAlign: "center",
          color: "#272833",
        }}
      >
        Reset Email Sent{" "}
      </Typography>
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
