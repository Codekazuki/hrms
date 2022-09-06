import { Button, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
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
          width: "40%",
          margin: "auto",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          textAlign: "center",
          height: "70%",
          minWidth: "495px",
          minHeight: "420px",
        }}
      >
        <Box
          sx={{
            // backgroundColor: "#041E44",
            // height: "20%",

            position: "absolute",
            height: "87px",
            left: "0%",
            right: "0%",
            top: "0px",
            background: "#041E44",
            borderRadius: "8px 8px 0px 0px",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              position: "absolute",
              width: "53px",
              height: "31px",
              left: "40px",
              top: "24px",
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
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "43px",
              textAlign: "center",
              textTransform: "capitalize",
              position: "absolute",
              width: "241px",
              height: "43px",
              left: "182px",
              top: "127px",
            }}
          >
            Reset Password
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "150%",
              textAlign: "center",
              fontStyle: "normal",
              position: "absolute",
              width: "520px",
              height: "48px",
              left: "40px",
              top: "198px",
            }}
          >
            To complete reset,please click on the reset password button <br />
            below.
          </Typography>
          <Link to="/setresetpassword">
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: " 10px 16px",
                gap: "16px",
                position: "absolute",
                width: "147px",
                height: "44px",
                left: "224px",
                top: "290px",
                background: "#0050C8",
                borderRadius: "8px",
              }}
            >
              Reset password
            </Button>
          </Link>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "150%",
              textAlign: "center",
              fontStyle: "normal",
              position: "absolute",
              width: "383px",
              height: "21px",
              left: "111px",
              top: "382px",
              color: "#6B6C7E",
            }}
          >
            This is an automatically generated email.Please do not reply
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PasswordResetLogo;
