import { Box, Container, Typography } from "@mui/material";
import Image from "../images/bgIllustration.svg";
import { Outlet } from "react-router-dom";

function AuthLayout({ children }) {
  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        height: "100vh",
        background: "#0050c8",
        backgroundImage: `url(${Image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "25vw",
          margin: "auto",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          textAlign: "center",
          minWidth: "365px",
          padding: "1rem",
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
            lineHeight: "150%",
            pb: "2rem",
          }}
        >
          This is dummy text that will be replaced later by <br />
          proper content. The replacement text shouldn't be <br />
          more than three lines
        </Typography>
        <Outlet />
      </Box>{" "}
    </Container>
  );
}

export default AuthLayout;
