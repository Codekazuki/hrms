import { Button, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const PasswordResetLogo = () => {
  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        height: "100vh",
        background: "black",
      }}
    >
      <Paper
        sx={{
          width: "80%",
          margin: "auto",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          textAlign: "center",
          height: "70%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#041E44",
            height: "20%",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              color: "white",
            }}
          >
            Logo
          </Typography>
        </Box>
        <Box
          sx={{
            color: "#272833",
          }}
        >
          <Typography>Reset Password</Typography>
          <Typography>
            To complete reset,please click on the reset password button <br />
            below
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
            }}
          >
            Reset password
          </Button>
          <Typography>
            This is an automatically generated email.Please do not reply
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PasswordResetLogo;
