import { Box, Container, Typography } from "@mui/material";
import Image from "./images/bgIllustration.svg";

function App({ children }) {
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
          width: "100%",
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
      </Box>{" "}
      {children}
    </Container>
  );
}

export default App;
