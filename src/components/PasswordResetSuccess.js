import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PasswordResetSuccess = () => {
  return (
    <Paper>
      <Typography>successpassswrodmodal </Typography>
      <Typography>Your password have been reset successfully</Typography>
      <Typography>
        your password has successfully changed.you can <br />
        sign in to your account
      </Typography>

      <Link to="/signin">
        <Button variant="contained">Back to sign in</Button>
      </Link>
    </Paper>
  );
};

export default PasswordResetSuccess;
